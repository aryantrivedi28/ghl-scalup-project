'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
      ArrowRight,
      ChevronDown,
      Copy,
      Linkedin,
      Twitter,
      BookOpen,
      Zap,
      AlertTriangle,
      Clock,
      Rocket,
      CheckCircle2,
      Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function KajabiToGHLMigrationClient() {
      const [activeId, setActiveId] = useState<string>('');
      const [openBooking, setOpenBooking] = useState(false);

      const handleOpenBooking = () => {
            setOpenBooking(true);
      };

      // Handle scroll detection for active section
      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'kajabi-course-importer',
                        'kajabi-email-template-importer',
                        'what-transfers',
                        'migration-steps',
                        'how-long',
                        'membership-comparison',
                        'common-mistakes',
                        'faq'
                  ];

                  for (const id of sections) {
                        const element = document.getElementById(id);
                        if (element) {
                              const rect = element.getBoundingClientRect();
                              if (rect.top <= 150) {
                                    setActiveId(id);
                              }
                        }
                  }
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      // Handle TOC click with smooth scroll
      const scrollToHeading = (id: string) => {
            const element = document.getElementById(id);
            if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
      };

      const faqs = [
            {
                  q: "Can GoHighLevel import Kajabi course content automatically?",
                  a: "Yes, for published lessons. GoHighLevel's Kajabi Course Importer brings over videos, images, and text content automatically. Quizzes, assignments, and assessments are not included and must be rebuilt manually, and unpublished lessons don't transfer at all."
            },
            {
                  q: "Does GoHighLevel have a Kajabi email importer too?",
                  a: "Yes a separate tool imports individual email template designs by sending them to a generated address inside GHL's Email Marketing → Templates section. It imports the visual design only, not the automation logic (triggers, sequences, timing) behind it, which still needs to be rebuilt as a GHL workflow."
            },
            {
                  q: "How long does a Kajabi to GoHighLevel migration take?",
                  a: "A simple migration with 1–2 courses and minimal quizzes takes 1–2 weeks. A standard migration with 3–5 courses and some assessments takes 3–5 weeks. A complex migration with 6+ courses, heavy assessments, and deep automation takes 5–8 weeks. Quiz/assignment rebuilding and automation logic drive the timeline more than the course content import itself."
            },
            {
                  q: "What happens to my existing Kajabi students during the migration?",
                  a: "Students are invited to create a new login in the GHL member portal. We recommend keeping Kajabi active for 2–4 weeks after the GHL portal launches so students can transition at their own pace, and confirming active access before cancelling Kajabi."
            },
            {
                  q: "Can GoHighLevel replace Kajabi for course creators?",
                  a: "For course creators who also run coaching, service, or agency operations, yes GoHighLevel's membership module now imports most course content automatically and adds native SMS, AI Voice Agent, booking, and CRM pipeline that Kajabi lacks. Kajabi remains the stronger choice for a pure course-first business where the polished student experience and community are the primary product."
            },
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'kajabi-course-importer', title: 'The Kajabi Course Importer: What It Actually Does' },
            { id: 'kajabi-email-template-importer', title: 'The Kajabi Email Template Importer' },
            { id: 'what-transfers', title: 'What Transfers vs. What You Rebuild' },
            { id: 'migration-steps', title: 'Step-by-Step: How to Migrate from Kajabi to GoHighLevel' },
            { id: 'how-long', title: 'How Long It Actually Takes' },
            { id: 'membership-comparison', title: 'How Does Kajabi\'s Course Experience Compare to GoHighLevel\'s?' },
            { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
            { id: 'faq', title: 'Frequently Asked Questions' },
      ];

      const transferData = [
            { asset: 'Course content (published lessons: video, image, text)', action: 'Imports automatically via the Kajabi Course Importer', required: 'Review imported lessons for formatting accuracy' },
            { asset: 'Quizzes, assignments, assessments', action: 'Imports as empty shells only content not included', required: 'Manually rebuild each one' },
            { asset: 'Unpublished/draft lessons', action: 'Not imported at all', required: 'Publish in Kajabi first if you want them included, or rebuild manually' },
            { asset: 'Drip scheduling', action: 'Not part of the course import', required: 'Reconfigure release timing in GHL after import' },
            { asset: 'Contacts and students', action: 'Transfers via CSV export/import', required: 'Clean the CSV, map fields during import' },
            { asset: 'Tags and segments', action: 'Transfers via CSV column mapping', required: 'Create matching GHL tags first' },
            { asset: 'Email template designs', action: 'Imports individually via the Kajabi Email Template Importer', required: 'Import each template you want to reuse, one at a time' },
            { asset: 'Email automation logic (triggers, sequences, timing)', action: 'Does not transfer', required: 'Rebuild as GHL workflows, using imported templates as content' },
            { asset: 'Offers and pricing plans', action: 'Does not transfer', required: 'Recreate in GHL order forms, reconnect Stripe' },
            { asset: 'Kajabi Communities', action: 'Does not transfer', required: 'Rebuild in GHL Communities or migrate to an external platform' },
            { asset: 'Affiliate program data', action: 'Does not transfer', required: 'Recreate in GHL\'s affiliate manager' },
            { asset: 'Landing pages and funnels', action: 'Does not transfer via the course tool', required: 'Rebuild in GHL\'s funnel builder' },
      ];

      const timelineData = [
            { type: 'Simple (1–2 courses, minimal quizzes)', courses: '1–2', timeline: '1–2 weeks' },
            { type: 'Standard (3–5 courses, some quizzes/assignments, active community)', courses: '3–5', timeline: '3–5 weeks' },
            { type: 'Complex (6+ courses, heavy assessments, affiliate program, deep automation)', courses: '6+', timeline: '5–8 weeks' },
      ];

      const membershipData = [
            { feature: 'Course structure (modules and lessons)', kajabi: 'Yes polished, intuitive builder', ghl: 'Yes functional, less polished UX' },
            { feature: 'Video hosting', kajabi: 'Native video hosting included', ghl: 'Video upload supported; many use Vimeo or Wistia' },
            { feature: 'Drip content scheduling', kajabi: 'Yes per-lesson release timing', ghl: 'Yes per-lesson drip available in membership settings' },
            { feature: 'Student progress tracking', kajabi: 'Yes detailed analytics', ghl: 'Basic completion tracking less granular than Kajabi' },
            { feature: 'Quizzes and assessments', kajabi: 'Yes built in', ghl: 'Yes quiz builder available' },
            { feature: 'Community features', kajabi: 'Kajabi Communities strong and native', ghl: 'GHL Communities (launched 2024) improving, not yet at Kajabi polish' },
            { feature: 'Branded member portal', kajabi: 'Yes clean student-facing experience', ghl: 'Yes branded on your domain' },
            { feature: 'Affiliate management', kajabi: 'Yes built in', ghl: 'Yes GHL affiliate manager' },
            { feature: 'Native SMS', kajabi: 'No email only', ghl: 'Yes full 2-way SMS throughout' },
            { feature: 'AI Voice Agent', kajabi: 'No', ghl: 'Yes answers calls, qualifies leads, books appointments' },
            { feature: 'CRM and pipeline', kajabi: 'Limited course-focused', ghl: 'Full CRM unlimited contacts and pipelines' },
            { feature: 'Booking calendar', kajabi: 'No', ghl: 'Yes replaces Calendly' },
            { feature: 'Multi-client sub-accounts', kajabi: 'No', ghl: 'Yes agency dashboard with unlimited sub-accounts' },
            { feature: 'Monthly cost', kajabi: '$69 to $399/mo', ghl: '$97 to $297/mo (more capability per dollar)' },
      ];

      const mistakesList = [
            { mistake: 'Assuming the course importer handles everything.', fix: 'It handles published lesson content well, but quizzes, assignments, and drip settings still need manual work scope your timeline around what\'s actually excluded, not around rebuilding everything from scratch.' },
            { mistake: 'Leaving lessons unpublished in Kajabi before importing.', fix: 'Only published lessons transfer. Publish everything you want migrated before running the importer, or plan to rebuild those specific lessons manually.' },
            { mistake: 'Re-enrolling students before testing the portal.', fix: 'Create a test account, go through every lesson, confirm quizzes and drip releases work, and check the mobile experience before a single real student is re-enrolled.' },
            { mistake: 'Cancelling Kajabi before students confirm access.', fix: 'Keep Kajabi active until every active student has logged into the GHL portal and confirmed their content is accessible.' },
      ];

      // Reusable Project Help Card Component
      const ProjectHelpCard = () => (
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
                  <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
                  <Button
                        onClick={handleOpenBooking}
                        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                        Book a 30 min Free Call
                        <ArrowRight className="w-3 h-3" />
                  </Button>
            </div>
      );

      return (
            <>
                  {/* Progress Bar */}
                  <div className="fixed top-0 left-0 h-1 bg-[#0E9BF0] z-50 transition-all duration-100" id="progress-bar" />

                  {/* Breadcrumb */}
                  <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
                        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
                              <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
                              <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
                              <Link href="/blog" className="hover:text-[#0E9BF0] transition-colors">Blog</Link>
                              <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
                              <span className="text-[#1A2236] font-medium">Kajabi to GoHighLevel Migration 2026</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                              {/* Post Tags / Category Labels */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Kajabi to GHL</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Course Migration</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              {/* H1 Headline */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    Kajabi to GoHighLevel Migration:<br />
                                    <span className="text-[#F8D000]">What Actually Transfers (and What Doesn't)</span>
                              </h1>

                              {/* Author Byline */}
                              <div className="flex items-center gap-3 mb-6">
                                    <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                                          <img
                                                src="/web-app-manifest-192x192.png"
                                                alt="GHL Scale Up"
                                                className="w-full h-full object-cover"
                                          />
                                    </div>
                                    <div>
                                          <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
                                          <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ builds and migrations delivered · Verified against GoHighLevel's official support documentation, September 2026</div>
                                    </div>
                              </div>

                              {/* Introductory Paragraph */}
                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
                                    A lot of migration guides, including an earlier version of this one, claim GoHighLevel has no way to import Kajabi course content. That's no longer accurate. GoHighLevel has a native Kajabi Course Importer and a separate email template importer each with real limits worth understanding before you plan your timeline.
                              </p>

                              {/* Quick Answer Box */}
                              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                          <Zap className="w-5 h-5 text-[#F8D000]" />
                                          <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                          GoHighLevel's Kajabi Course Importer automatically brings over your published lessons' videos, images, and text content. It does not import quizzes, assignments, or assessments those come through as empty shells and need manual recreation, and unpublished lessons are skipped entirely. A separate Kajabi Email Template Importer can bring over individual email template designs, though the automation logic (triggers, timing, sequences) behind them still needs to be rebuilt in GHL's workflow builder. Contacts and tags transfer via CSV. A straightforward migration with 1–2 courses takes roughly 1–2 weeks for the technical setup; a complex migration with 5+ courses, a community, and heavy quiz/assignment content takes 4–6 weeks.
                                    </p>
                              </div>

                              {/* CTA Button 1: Hero Section */}
                              <div className="flex flex-wrap gap-3">
                                    <Link
                                          href="/contact"
                                          className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
                                    >
                                          <Rocket className="w-4 h-4" />
                                          Get Migration Help
                                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                          href="#migration-steps"
                                          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
                                    >
                                          See Migration Steps
                                          <ChevronDown className="w-4 h-4" />
                                    </Link>
                              </div>
                        </div>
                  </section>

                  {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
                  <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
                        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

                              {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
                              <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
                                    {/* Project Help Card */}
                                    <div className="hidden lg:block mb-6">
                                          <ProjectHelpCard />
                                    </div>

                                    {/* Table of Contents - Sticky */}
                                    <nav className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                                          <div className="text-xs font-bold tracking-wider uppercase text-[#5C6880] mb-4 flex items-center gap-2">
                                                <BookOpen className="w-3 h-3" />
                                                In This Guide
                                          </div>
                                          <ul className="space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#DDE1E9] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-[#96A0B5]">
                                                {tocItems.map((item) => (
                                                      <li key={item.id}>
                                                            <button
                                                                  onClick={() => scrollToHeading(item.id)}
                                                                  className={`block w-full text-left text-xs md:text-sm py-2 px-3 rounded transition-all duration-200 ${activeId === item.id
                                                                        ? 'bg-[#0E9BF0] text-white font-medium shadow-sm'
                                                                        : 'text-[#5C6880] hover:text-[#0E9BF0] hover:bg-white'
                                                                        }`}
                                                            >
                                                                  <span className="flex items-start gap-2">
                                                                        {activeId === item.id && (
                                                                              <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />
                                                                        )}
                                                                        <span className="flex-1">{item.title}</span>
                                                                  </span>
                                                            </button>
                                                      </li>
                                                ))}
                                          </ul>
                                    </nav>

                                    {/* About the Author */}
                                    <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
                                          <div className="flex items-center gap-3 mb-4">
                                                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                                                      <img
                                                            src="/web-app-manifest-192x192.png"
                                                            alt="GHL Scale Up"
                                                            className="w-full h-full object-cover"
                                                      />
                                                </div>
                                                <div>
                                                      <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                                                      <div className="text-xs text-white/50">GoHighLevel Migration & Setup Specialists</div>
                                                </div>
                                          </div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-3">
                                                5+ years GHL experience · 200+ systems built and migrated globally including Kajabi migrations for coaches, course creators, and agencies. All feature comparisons verified against GoHighLevel and Kajabi official documentation as of May 2026.
                                          </p>
                                          <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
                                          <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
                                          <div className="flex gap-2 flex-wrap">
                                                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                                                      <Linkedin className="w-3 h-3" />
                                                      LinkedIn
                                                </a>
                                                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                                                      <Twitter className="w-3 h-3" />
                                                      X
                                                </a>
                                                <button
                                                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                                                      className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"
                                                >
                                                      <Copy className="w-3 h-3" />
                                                      Copy link
                                                </button>
                                          </div>
                                    </div>

                                    {/* CTA Card */}
                                    <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
                                          <div className="text-sm font-bold text-white mb-2">Need Help Migrating from Kajabi?</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">We handle complete Kajabi to GHL migrations. Course import and quiz rebuild included.</p>
                                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                                                Get Help
                                                <ArrowRight className="w-3 h-3" />
                                          </Link>
                                    </div>
                              </aside>

                              {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
                              <main className="min-w-0 order-2">

                                    {/* Table of Contents - Mobile Only */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8 lg:hidden">
                                          <div className="flex items-center gap-2 mb-4">
                                                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What's in this guide</span>
                                          </div>
                                          <div className="grid sm:grid-cols-2 gap-2">
                                                {tocItems.map((item) => (
                                                      <button
                                                            key={item.id}
                                                            onClick={() => scrollToHeading(item.id)}
                                                            className="text-left text-sm text-[#5C6880] hover:text-[#0E9BF0] transition-colors py-1"
                                                      >
                                                            {item.title}
                                                      </button>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Mobile Project Help Card - visible on mobile only */}
                                    <div className="lg:hidden mb-8">
                                          <ProjectHelpCard />
                                    </div>

                                    {/* Section: The Kajabi Course Importer */}
                                    <h2 id="kajabi-course-importer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          The Kajabi Course Importer: What It Actually Does
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This is the single most misunderstood part of a Kajabi migration, so it's worth being precise about it.
                                    </p>

                                    <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
                                                <span className="text-sm font-bold text-[#25C97D]">HOW TO ACCESS IT</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                In GHL, go to Memberships → Courses → Products → Create Product → Import. You'll create a learner profile inside Kajabi, then enter that learner's login credentials and your Kajabi domain into GHL's importer.
                                          </p>
                                    </div>

                                    <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
                                                <span className="text-sm font-bold text-[#25C97D]">WHAT IT IMPORTS</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                All videos, images, and text content for lessons that are published in Kajabi including nested and hidden lessons behind "Show More" sections, per recent reliability improvements to the importer.
                                          </p>
                                    </div>

                                    <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                                                <span className="text-sm font-bold text-[#DC3545]">WHAT IT DOES NOT IMPORT</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                Unpublished or draft lessons are skipped entirely. Quizzes, assignments, and assessments are explicitly excluded per GoHighLevel's own documentation, these come through as empty shells that need to be manually rebuilt. Custom CSS themes don't carry over either; GoHighLevel recommends removing custom CSS before importing for the smoothest result.
                                          </p>
                                    </div>

                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Practical implication: for a course that's mostly video lessons with a few quizzes, the importer handles the bulk of the heavy lifting (video and content upload) automatically, and your manual work concentrates on the quizzes and assignments rather than every single lesson.
                                    </p>

                                    {/* Section: The Kajabi Email Template Importer */}
                                    <h2 id="kajabi-email-template-importer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          The Kajabi Email Template Importer
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This is a separate tool from the course importer, and it imports something narrower: individual email template designs, not full automation sequences.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          How it works: in GHL, go to Email Marketing → Templates → New → Import Templates, select "Kajabi" from the source dropdown, and you'll get a dynamically generated email address. Send the Kajabi template you want to import as a test email to that address, then confirm the import in GHL.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          What it doesn't do: this brings over the visual design and copy of one email template at a time it does not import the automation logic behind a sequence (the trigger, timing, and branching that made it a "sequence" in Kajabi). That logic still has to be rebuilt manually as a GHL workflow, using the imported template designs as your starting content rather than building the design from scratch.
                                    </p>

                                    {/* Section: What Transfers vs. What You Rebuild */}
                                    <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What Transfers vs. What You Rebuild
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Kajabi Asset</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happens</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Action Required</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {transferData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.asset}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.action}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.required}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
                                    <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                          <div className="relative w-full h-auto bg-[#F8F9FB]">
                                                <Image
                                                      src="/blog/kajabi-to-ghl-migration-guide.png"
                                                      alt="Kajabi to GoHighLevel migration: Course importer, email importer, and feature comparison overview"
                                                      width={1200}
                                                      height={500}
                                                      className="w-full h-auto object-cover"
                                                      priority
                                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                                />
                                          </div>
                                          <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                                                <ImageIcon className="w-3.5 h-3.5" />
                                                <span>Kajabi → GoHighLevel: Course import workflow, email template importer, and feature comparison</span>
                                          </div>
                                    </div>

                                    {/* Section: Step-by-Step */}
                                    <h2 id="migration-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Step-by-Step: How to Migrate from Kajabi to GoHighLevel
                                    </h2>

                                    <div className="space-y-4 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Audit your Kajabi account.</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">List every course with its module/lesson count and note which lessons are published vs. draft only published lessons will import automatically. List active email sequences and which are worth rebuilding as workflows.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Export contacts and student records.</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In Kajabi, go to People and export your contact list as CSV, plus student/purchase data separately. Clean the CSV before importing into GHL's Contacts.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Run the Kajabi Course Importer for each course.</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Go to Memberships → Courses → Products → Create Product → Import, create a Kajabi learner profile for GHL to log in with, and start the import. Do this during off-hours to avoid disrupting current Kajabi learners, and back up any custom themes first.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Review imported courses and rebuild quizzes/assignments.</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Check each imported lesson for formatting accuracy, then manually recreate every quiz and assignment the importer left as an empty shell. Reconfigure drip scheduling per course, since it isn't part of the import.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Import reusable email templates, then rebuild automation logic as workflows.</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Use the Kajabi Email Template Importer for designs worth keeping, then recreate each sequence's trigger and timing in GHL's workflow builder. See{' '}
                                                      <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel's workflow automation guide</Link> for the setup mechanics.
                                                </p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Rebuild offers, funnels, and reconnect Stripe.</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Recreate your pricing plans as GHL order forms and reconnect payment processing none of this comes through the course importer.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">7</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Re-enroll students and run in parallel.</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Invite existing students to create their GHL member portal login. Keep Kajabi active for 2–4 weeks while students transition, and don't cancel until active students have confirmed access in GHL.</p>
                                          </div>
                                    </div>

                                    {/* Section: How Long It Actually Takes */}
                                    <h2 id="how-long" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Long It Actually Takes
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Because course structure and media now import automatically for published lessons, the timeline concentrates on quiz/assignment rebuilding, automation logic, and offer/funnel reconstruction not on re-uploading every video from scratch.
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Setup Complexity</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Courses</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Estimated Timeline</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {timelineData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.courses}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.timeline}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <Clock className="w-4 h-4 text-[#0E9BF0]" />
                                                <span className="text-sm font-bold text-[#0E9BF0]">WHAT DRIVES THE TIMELINE</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                What actually drives the timeline now: the volume of quizzes and assignments needing manual recreation, the number of email automations to rebuild as workflows, and offer/funnel reconstruction not the course content import itself, which runs largely unattended once started.
                                          </p>
                                    </div>

                                    {/* Section: Membership Comparison */}
                                    <h2 id="membership-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Does Kajabi's Course Experience Compare to GoHighLevel's?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This is the question every Kajabi migrator asks before committing, and the honest answer hasn't changed with the corrected import facts above: Kajabi's course player, community features, and membership experience remain genuinely more polished than GoHighLevel's. GoHighLevel's membership module is functional and improving, but if your business is purely course-first and doesn't need SMS, pipeline CRM, or AI automation, weigh that trade-off carefully. If course delivery is one part of a broader operation that also needs those capabilities, the migration effort now meaningfully reduced by the course importer is easier to justify than it used to be.
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Kajabi</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {membershipData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.kajabi}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: Common Mistakes */}
                                    <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Common Mistakes to Avoid
                                    </h2>

                                    <div className="space-y-4 mb-6">
                                          {mistakesList.map((item, idx) => (
                                                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                                                      <div className="flex items-start gap-3">
                                                            <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                  <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.mistake}</p>
                                                                  <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>

                                    {/* Section: FAQ */}
                                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
                                          Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-3">
                                          {faqs.map((faq, index) => (
                                                <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
                                                      <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-[0.92rem] font-semibold text-[#1A2236] hover:text-[#0E9BF0] transition-colors">
                                                            {faq.q}
                                                            <ChevronDown className="w-4 h-4 text-[#8A9BB0] transition-transform group-open:rotate-180" />
                                                      </summary>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed pb-4">{faq.a}</p>
                                                </details>
                                          ))}
                                    </div>

                                    {/* Contextual CTA inside FAQ */}
                                    <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
                                          Want the migration handled end-to-end course import review, quiz rebuild, and student re-enrollment included?{' '}
                                          <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link>.
                                    </div>

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                                                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
                                                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
                                                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
                                          </div>
                                    </div>

                                    {/* Final CTA Section - Single closing CTA */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Migrating from Kajabi to GoHighLevel?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      The course import handles the heavy lifting. We handle the rest. Course import review, quiz rebuild, automation migration, and student re-enrollment all handled. Book a free migration assessment.
                                                </p>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                                                      Book Your Free Migration Assessment
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                          </div>
                                    </div>
                              </main>
                        </div>
                  </div>

                  {/* Booking Modal - Rendered at root level */}
                  <BookingModal open={openBooking} setOpen={setOpenBooking} />


                  {/* Progress Bar Script */}
                  <script dangerouslySetInnerHTML={{
                        __html: `
          const progressBar = document.getElementById('progress-bar');
          if (progressBar) {
            window.addEventListener('scroll', () => {
              const scrollTop = window.scrollY;
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const progress = (scrollTop / docHeight) * 100;
              progressBar.style.width = Math.min(progress, 100) + '%';
            });
          }
        `
                  }} />
            </>
      );
}