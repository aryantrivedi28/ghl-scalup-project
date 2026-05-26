'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
      ArrowRight,
      CheckCircle2,
      ChevronDown,
      Copy,
      Linkedin,
      Twitter,
      BookOpen,
      Settings,
      Zap,
      Shield,
      DollarSign,
      Users,
      Building2,
      Calendar,
      MessageCircle,
      Phone,
      Layout,
      GitBranch,
      Sparkles,
      Award,
      TrendingUp,
      Star,
      AlertTriangle,
      Server,
      Globe,
      CreditCard,
      Smartphone,
      Briefcase,
      Rocket,
      Cloud,
      Database,
      FileDown,
      Upload,
      RefreshCw,
      Clock,
      Mail,
      Tag,
      GitMerge,
      Video,
      BookOpen as BookOpenIcon,
      GraduationCap
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function KajabiToGHLMigrationClient() {
      const [activeId, setActiveId] = useState<string>('');

      // Handle scroll detection for active section
      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'why-migrate',
                        'what-transfers',
                        'migration-steps',
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
                  a: "No. GoHighLevel does not have an automated import tool for Kajabi course content. Every video, text lesson, PDF download, and quiz must be manually rebuilt inside GHL's membership module. This is the most time-consuming phase of a Kajabi migration. Budget 2 to 6 hours per course depending on module and lesson count. Contacts, tags, and email history transfer via CSV export and import only the course content itself requires manual rebuilding."
            },
            {
                  q: "How long does a Kajabi to GoHighLevel migration take?",
                  a: "A simple migration with 1 to 2 courses, a small contact list, and basic email sequences takes 2 to 3 weeks. A standard migration with 3 to 5 courses, active community, and 5 to 10 email automations takes 3 to 5 weeks. A complex migration with 6 or more courses, large student database, affiliate program, and extensive automation takes 5 to 8 weeks. The course content rebuild is what drives the timeline not the contact import."
            },
            {
                  q: "Can GoHighLevel replace Kajabi for course creators?",
                  a: "For course creators who also run coaching businesses, service businesses, or agencies, yes. GoHighLevel's membership module covers the core course delivery features: video lessons, drip scheduling, quizzes, branded member portal, and subscription access via Stripe. What GHL adds is the full operational stack Kajabi lacks: native SMS, AI Voice Agent, booking calendar, CRM pipeline, and multi-client sub-account management. Kajabi remains the stronger choice for pure course-first businesses where the student experience and community are the primary product."
            },
            {
                  q: "What happens to my existing Kajabi students during the migration?",
                  a: "Existing students are re-enrolled in the GHL member portal via an email invitation that explains the platform transition. They create a new login, access the same content in the new portal, and continue their progress. We recommend keeping Kajabi active for 2 to 4 weeks after the GHL portal launches so students can transition at their own pace and any access issues can be resolved before Kajabi is cancelled. Active student access is never disrupted during the parallel period."
            },
            {
                  q: "Does GoHighLevel have a community feature like Kajabi Communities?",
                  a: "Yes. GoHighLevel launched GHL Communities in 2024. It includes a social feed, direct messaging, and group discussion layer that integrates with the membership and course module. As of 2026, GHL Communities covers the core use case of a student and client community. Kajabi Communities is more mature and has a more polished student-facing experience, but GHL Communities is functional and improving with each platform update."
            },
            {
                  q: "How much does a Kajabi to GoHighLevel migration cost?",
                  a: "Migration project fees depend on the number of courses, student volume, and automation complexity. Contact GHL Scale Up for a fixed-fee quote after a free migration assessment. Most course creators find that within 3 to 6 months of switching, the cost savings from replacing Kajabi, Calendly, and a separate SMS platform with GHL's $97 to $297 per month flat rate recover the migration investment entirely."
            },
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'why-migrate', title: '1. Why Course Creators and Coaches Migrate from Kajabi to GoHighLevel' },
            { id: 'what-transfers', title: '2. What Transfers from Kajabi and What Must Be Rebuilt' },
            { id: 'migration-steps', title: '3. How to Migrate from Kajabi to GoHighLevel (Step-by-Step)' },
            { id: 'membership-comparison', title: '4. How Does GoHighLevel\'s Membership Module Compare to Kajabi?' },
            { id: 'common-mistakes', title: '5. Common Kajabi Migration Mistakes to Avoid' },
            { id: 'faq', title: '6. Frequently Asked Questions' },
      ];

      const comparisonData = [
            { item: 'Excellent course and membership delivery', kajabi: 'Yes', ghl: 'Yes functional, less polished UX' },
            { item: 'Built-in email marketing and automations', kajabi: 'Yes', ghl: 'Yes plus SMS and voice' },
            { item: 'Kajabi Communities for student engagement', kajabi: 'Yes strong', ghl: 'GHL Communities (launched 2024)' },
            { item: 'Native 2-way SMS and AI Voice Agent', kajabi: 'No', ghl: 'Yes' },
            { item: 'Booking calendar for coaching calls', kajabi: 'No', ghl: 'Yes replaces Calendly' },
            { item: 'Multi-client sub-account architecture', kajabi: 'No', ghl: 'Yes for agencies' },
            { item: 'Full CRM pipeline for coaching sales', kajabi: 'Limited', ghl: 'Full CRM' },
            { item: 'White-label branding for agency clients', kajabi: 'No', ghl: 'Yes' },
            { item: 'Monthly cost', kajabi: '$69 to $399/mo', ghl: '$97 to $297/mo' },
      ];

      const transferData = [
            { asset: 'Contacts and students', action: 'Transfers via CSV export and import', required: 'Export from Kajabi, clean CSV, import into GHL with field mapping' },
            { asset: 'Tags and segments', action: 'Transfers via CSV as tag column', required: 'Create matching tags in GHL before import' },
            { asset: 'Email automation sequences', action: 'Does NOT transfer', required: 'Full email sequence rebuild in GHL workflow builder' },
            { asset: 'Course content (videos, text, PDFs, quizzes)', action: 'Does NOT transfer no import tool', required: 'Manually rebuild every lesson, module, and quiz in GHL membership module' },
            { asset: 'Drip schedule and lesson release timing', action: 'Does NOT transfer', required: 'Rebuild drip logic in GHL membership settings per course' },
            { asset: 'Member access and enrollment records', action: 'Does NOT transfer directly', required: 'Re-invite existing students to GHL membership portal via email' },
            { asset: 'Kajabi offers and pricing plans', action: 'Does NOT transfer', required: 'Recreate in GHL order forms connected to Stripe' },
            { asset: 'Kajabi Communities', action: 'Does NOT transfer', required: 'Move to GHL Communities (launched 2024) or external platform' },
            { asset: 'Affiliate program data', action: 'Does NOT transfer', required: 'Recreate in GHL affiliate manager' },
            { asset: 'Landing pages and sales funnels', action: 'Does NOT transfer', required: 'Rebuild in GHL funnel builder' },
      ];

      const membershipComparison = [
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
            { mistake: 'Underestimating the course content rebuild time', fix: 'Audit your content in full before scoping the timeline. Budget 2 to 6 hours per course for a realistic estimate, then add 20% contingency for content that is harder to rebuild than expected.' },
            { mistake: 'Re-enrolling students before the portal is tested', fix: 'Test the full student experience: create a test account, purchase access, go through every lesson, confirm drip releases work, and verify the mobile experience before a single real student is re-enrolled.' },
            { mistake: 'Cancelling Kajabi before students have confirmed access in GHL', fix: 'Keep Kajabi active until every active student has logged into the GHL member portal and confirmed their content is accessible. Monitor login rates for 2 to 4 weeks after the transition announcement.' },
            { mistake: 'Rebuilding Kajabi automations exactly instead of improving them', fix: 'Kajabi automations are email-only. When you rebuild them in GHL, add SMS, voice, and booking steps that Kajabi could never support. Improve as you rebuild do not just copy.' },
      ];

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

                        <div className="max-w-[760px] mx-auto relative z-10">
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
                                    <span className="text-[#F8D000]">What Breaks and How to Fix It (2026)</span>
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
                                          <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Builds Delivered · Updated May 2026</div>
                                    </div>
                              </div>

                              {/* Introductory Paragraph */}
                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
                                    Kajabi is one of the best platforms for selling and delivering online courses and membership communities.
                                    The migration to GoHighLevel is not about Kajabi being bad. It is about what Kajabi cannot do: native SMS,
                                    AI Voice Agent, multi-client sub-account management, booking calendars, and pipeline CRM for service-based businesses.
                                    <strong className="text-white"> GHL Scale Up</strong> has completed this migration dozens of times for coaches,
                                    course creators, and agencies.
                              </p>
                        </div>
                  </section>

                  {/* Main Layout */}
                  <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
                        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

                              {/* Article Content */}
                              <main className="min-w-0">

                                    {/* TL;DR / Quick Answer Box (BLUF) */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Zap className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
                                          </div>
                                          <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                                                Contacts, tags, and email sequences transfer from Kajabi to GoHighLevel.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                Course content does <strong className="text-[#1A2236]">not transfer automatically</strong>. Every video, lesson, PDF, and quiz
                                                must be manually rebuilt inside GHL's membership module. This is the most time-consuming part of a Kajabi migration and cannot be shortcut.
                                                The trade-off is worth it when you need GHL's SMS, AI, booking, and CRM capabilities. A straightforward migration with 1 to 2 courses
                                                and a small contact list takes <strong className="text-[#0E9BF0]">2 to 3 weeks</strong>. A complex migration with 5+ courses, a community,
                                                and active email sequences takes <strong className="text-[#0E9BF0]">4 to 7 weeks</strong>.
                                          </p>
                                    </div>

                                    {/* Table of Contents */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
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

                                    {/* Section 1: Why Migrate */}
                                    <h2 id="why-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          1. Why Course Creators and Coaches Migrate from Kajabi to GoHighLevel
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Kajabi was built for knowledge businesses: people who earn revenue primarily by selling courses and memberships.
                                          It does that job well. The migration to GHL almost always happens at a specific growth stage: when a course creator
                                          or coach starts offering done-for-you services, group programs with high-touch follow-up, or agency-level client
                                          management alongside their course business. At that point, Kajabi's gaps become operational problems rather than minor inconveniences.
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Kajabi provides</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What makes coaches and agencies move to GHL</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {comparisonData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.item} → {item.kajabi === 'No' ? <span className="text-[#DC3545]">Not available</span> : item.kajabi}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">THE HONEST TRADE-OFF</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                Kajabi's course player, community features, and membership experience are genuinely among the best available for knowledge businesses.
                                                GHL's membership module is functional but less polished than Kajabi's student-facing experience. If your business is purely course-first
                                                and you do not need SMS, pipeline CRM, or AI automation, evaluate carefully before switching. If you need GHL's operational capabilities
                                                and course delivery is one part of a larger business, the migration is almost always the right call.
                                          </p>
                                    </div>

                                    {/* Section 2: What Transfers */}
                                    <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          2. What Transfers from Kajabi to GoHighLevel and What Must Be Rebuilt?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">The key distinction: data transfers, content does not.</strong> Your contacts, tags,
                                          and email history move via CSV. Your actual course content every video, text lesson, PDF download, and quiz must be manually
                                          re-uploaded and rebuilt inside GHL's membership module. There is no automated import tool for Kajabi course content.
                                    </p>

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

                                    <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                                                <span className="text-sm font-bold text-[#0E9BF0]">THE MOST IMPORTANT THING TO KNOW</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                <strong className="text-[#1A2236]">Course content migration is always manual.</strong> Budget approximately 2 to 6 hours per course
                                                depending on the number of modules and lessons. A 5-module course with 30 video lessons, PDFs, and quizzes typically takes 4 to 8 hours
                                                to rebuild inside GHL. This is the honest timeline. Agencies that tell you this can be done in an afternoon are not telling you the full story.
                                          </p>
                                    </div>

                                    {/* Section 3: Migration Steps */}
                                    <h2 id="migration-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          3. How to Migrate from Kajabi to GoHighLevel (Step-by-Step)
                                    </h2>

                                    <div className="space-y-4 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Audit your Kajabi account before exporting anything</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">List every active course with its module count, lesson count, and content types. List every active email automation with its trigger and purpose. Identify which students are currently active versus which have completed their access period. This audit becomes your migration checklist.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Export contacts, students, and purchase history</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In Kajabi, go to People and export your full contact list as a CSV. Export your student and purchase data separately. Clean the CSV before import: remove duplicates, standardise email formats, and flag any students whose access has expired.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Build your GHL infrastructure before rebuilding any content</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Create custom fields. Configure email domain with DKIM and SPF. Set up Stripe connection. Create pipeline stages. Build booking calendar. Complete A2P 10DLC SMS registration. These foundations must exist before you layer course content and automation on top.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Rebuild courses manually in GHL's membership module</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Create a new membership for each Kajabi product. Recreate module and lesson structure exactly. Upload videos and PDFs. Rebuild quizzes. Configure drip scheduling. Set access control. Test the student login experience before re-enrolling students.</p>
                                                <p className="text-sm text-[#0E9BF0] leading-relaxed ml-9 mt-1">→ See our <Link href="/services/membership-sites" className="text-[#0E9BF0] hover:underline">GoHighLevel Membership and Course Setup Service →</Link></p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Rebuild email automations as GHL workflows</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">For each active Kajabi email sequence, recreate it as a GHL workflow. Set the trigger to match. Recreate each email action with the same copy and timing. Extend every sequence to include SMS, voice, and booking actions. Start with your post-purchase onboarding sequence first.</p>
                                                <p className="text-sm text-[#0E9BF0] leading-relaxed ml-9 mt-1">→ Need help with workflows? <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link></p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                                                      <h3 className="text-base font-bold text-[#1A2236]">Re-enrol existing students and run parallel</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Send a personalised email to existing Kajabi students inviting them to create their GHL member portal account. Keep Kajabi active for 2 to 4 weeks while students transition. Do not cancel Kajabi until all active students have confirmed access in GHL.</p>
                                          </div>
                                    </div>

                                    {/* Section 4: Membership Comparison */}
                                    <h2 id="membership-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          4. How Does GoHighLevel's Membership Module Compare to Kajabi?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This is the question every Kajabi migrator asks before committing. Here is the honest, specific answer.
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
                                                      {membershipComparison.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.kajabi}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section 5: Common Mistakes */}
                                    <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          5. Common Kajabi Migration Mistakes to Avoid
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

                                    <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Star className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">WE HANDLE THIS FOR YOU</span>
                                          </div>
                                          <p className="text-sm text-white/80 leading-relaxed mb-3">
                                                GHL Scale Up manages complete Kajabi to GoHighLevel migrations: contact export and cleaning, course content rebuild in GHL membership,
                                                drip schedule rebuild, email sequence migration to GHL workflows, student re-enrolment, and post-migration support.
                                          </p>
                                          <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                                                Book a free migration assessment at ghlscaleup.com/contact
                                                <ArrowRight className="w-3 h-3" />
                                          </Link>
                                          <p className="text-sm text-white/60 leading-relaxed mt-3">
                                                → See our full <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel migration service →</Link>
                                          </p>
                                    </div>

                                    {/* Section 6: FAQ */}
                                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
                                          6. Frequently Asked Questions
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

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                                                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from ClickFunnels to GoHighLevel →</Link>
                                                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration →</Link>
                                                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                                                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                                                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel Migration Service →</Link>
                                          </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Migrating from Kajabi to GoHighLevel?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      The course rebuild is the hard part. We handle it. Course content rebuild, contact migration,
                                                      drip schedule rebuild, student re-enrolment, and email sequence migration to GHL workflows all handled.
                                                      Book a free migration assessment.
                                                </p>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                                                      Book Your Free Assessment
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                          </div>
                                    </div>
                              </main>

                              {/* Sidebar */}
                              <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
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
                                    <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                                          <div className="flex items-center gap-3 mb-4">
                                                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
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
                                                5+ years GHL experience · 200+ systems built and migrated globally including Kajabi migrations for coaches, course creators, and agencies.
                                                All feature comparisons verified against GoHighLevel and Kajabi official documentation as of May 2026.
                                          </p>
                                          <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    {/* CTA Card */}
                                    <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                                          <div className="text-sm font-bold text-white mb-2">Need Help Migrating from Kajabi?</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">We handle complete Kajabi to GHL migrations. Course rebuild included.</p>
                                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                                                Get Help
                                                <ArrowRight className="w-3 h-3" />
                                          </Link>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                                          <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
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
                              </aside>
                        </div>
                  </div>

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