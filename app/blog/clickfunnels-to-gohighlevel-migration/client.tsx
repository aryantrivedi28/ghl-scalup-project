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
  Star,
  AlertTriangle,
  Clock,
  Rocket,
  Target,
  Search,
  FileCheck,
  MessageCircle,
  Phone,
  Shield,
  CheckCircle2,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import BookingModal from '@/components/BookingModal'
import { Button } from '../../../components/ui/button';


export default function ClickFunnelsToGHLMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');
      const [openBooking, setOpenBooking] = useState(false);
    
      const handleOpenBooking = () => {
        setOpenBooking(true);
      };

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-url-import-tool-does',
        'what-transfers',
        'migration-steps',
        'how-long',
        'what-breaks',
        'should-you-switch',
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
      q: "Can GoHighLevel import ClickFunnels funnels automatically?",
      a: "Partially. GHL's URL import tool clones a ClickFunnels page's visual design copy, images, layout by entering its live URL, one funnel step at a time, and it works for both ClickFunnels 1.0 and 2.0. It does not import automations, payment integrations, domain settings, tracking, or Membership Areas those require manual rebuilding."
    },
    {
      q: "How long does a ClickFunnels to GoHighLevel migration take?",
      a: "A simple setup with 1–3 funnels takes 1–2 weeks. A standard business with 3–8 funnels takes 2–3 weeks. A complex setup with membership content and 10+ funnels takes 3–6 weeks. The automation rebuild, not the page import, is what drives the timeline."
    },
    {
      q: "What breaks when migrating from ClickFunnels to GoHighLevel?",
      a: "Email and SMS sequences, Stripe payment connections, domain DNS settings, tracking pixels, membership area content, and the ClickFunnels affiliate system (Backpack) all need manual rebuilding none of these transfer through the URL import tool."
    },
    {
      q: "Does GoHighLevel have order bumps and upsells like ClickFunnels?",
      a: "Yes. GoHighLevel supports native order bumps on the order form and one-click upsells/downsells using the same Stripe-token mechanic ClickFunnels uses the customer doesn't re-enter payment details. These have to be rebuilt manually; they don't come through the page importer."
    },
    {
      q: "Should I cancel ClickFunnels before finishing the migration?",
      a: "No. Keep ClickFunnels active until every funnel is rebuilt and tested in GHL, sequences are live, domain DNS is updated, and you've run GHL in parallel for at least 1–2 weeks. ClickFunnels offers no post-cancellation grace period cancelling early takes your live funnels offline immediately."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-url-import-tool-does', title: 'What the URL Import Tool Actually Does (and Doesn\'t Do)' },
    { id: 'what-transfers', title: 'What Transfers vs. What You Rebuild' },
    { id: 'migration-steps', title: 'Step-by-Step: How to Migrate from ClickFunnels to GoHighLevel' },
    { id: 'how-long', title: 'How Long Does a ClickFunnels to GoHighLevel Migration Take?' },
    { id: 'what-breaks', title: 'What Breaks and How to Fix It' },
    { id: 'should-you-switch', title: 'Should You Switch to GoHighLevel First?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const transferData = [
    { asset: 'Funnel page design (copy, images, layout)', action: 'URL import tool clones it automatically', required: 'Review each imported page before sending traffic' },
    { asset: 'Funnel step sequence', action: 'Not automatic you recreate the order', required: 'Import each step individually, in the same order' },
    { asset: 'Contacts and leads', action: 'Export as CSV from CF, import into GHL', required: 'Clean the CSV, map fields during import' },
    { asset: 'Order bumps and one-click upsells/downsells', action: 'No direct import but GHL has a native equivalent', required: 'Rebuild using GHL\'s own order bump and one-click upsell/downsell tools' },
    { asset: 'Email/SMS follow-up sequences', action: 'Does not transfer', required: 'Rebuild as GHL workflows, one sequence at a time' },
    { asset: 'Stripe payment integration', action: 'Does not transfer', required: 'Reconnect Stripe directly inside GHL' },
    { asset: 'Domain settings', action: 'Does not transfer', required: 'Point domain DNS to GHL, update all funnel links' },
    { asset: 'Tracking (Facebook Pixel, GTM, etc.)', action: 'Does not transfer', required: 'Re-add tracking codes to each imported page' },
    { asset: 'Membership areas / course content', action: 'Explicitly excluded from the URL importer', required: 'Rebuild structure using GHL\'s Memberships tool, then re-upload content' },
    { asset: 'Affiliate program (Backpack)', action: 'Does not transfer', required: 'Set up GHL\'s own affiliate manager separately' },
  ];

  const timelineData = [
    { type: 'Simple, basic funnel business', funnels: '1–3 funnels', sequences: '1–3 sequences', timeline: '1–2 weeks' },
    { type: 'Standard established business', funnels: '3–8 funnels', sequences: '3–10 sequences', timeline: '2–3 weeks' },
    { type: 'Complex course or membership site', funnels: '8–15+ funnels', sequences: '10+ sequences, membership content', timeline: '3–6 weeks' },
    { type: 'Agency migrating multiple clients', funnels: 'Multiple accounts', sequences: 'Per-client complexity', timeline: '4–8 weeks' },
  ];

  const mistakesList = [
    { problem: 'Assuming the URL import tool migrates everything.', why: 'the import looks complete because the page visually matches.', fix: 'treat the import as the starting point, not the finish line buttons still link to ClickFunnels order forms, Stripe isn\'t connected, and no email sequence fires until you rebuild each of those separately.' },
    { problem: 'Redesigning funnels during the migration.', why: 'it\'s tempting to "improve while you\'re in there."', fix: 'migrate exactly as-is first, then optimize afterward changing design and migrating at the same time makes it impossible to tell whether a performance change came from the platform switch or the redesign.' },
    { problem: 'Skipping 301 redirects from old ClickFunnels URLs.', why: 'it\'s an easy step to forget once the new funnel looks done.', fix: 'set up a 301 redirect from every old ClickFunnels URL to its GHL equivalent before cancelling ClickFunnels this preserves link equity and prevents dead links from ads, emails, or bookmarks.' },
    { problem: 'Going live without testing the full purchase flow.', why: 'individual pieces (page, Stripe, tracking) get tested separately, but not the full sequence together.', fix: 'run one real end-to-end test with a $1 product confirm the thank-you page loads, the tracking pixel fires, the follow-up email triggers, and the contact appears correctly in your CRM.' },
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Button
        onClick={handleOpenBooking}
        // href="/contact" 
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
          <span className="text-[#1A2236] font-medium">ClickFunnels to GoHighLevel Migration 2026</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">ClickFunnels to GHL</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Funnel Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Migrate from ClickFunnels to GoHighLevel:<br />
            <span className="text-[#F8D000]">What Breaks & How to Fix It</span>
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
            If you're running a business on ClickFunnels and thinking about moving to GoHighLevel, the tool that decides how smooth this goes is GHL's URL import feature and most guides either oversell what it does or barely explain it. This guide covers exactly what it does, what still breaks, and how to move a live funnel without losing leads or revenue.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              GoHighLevel's URL import tool clones the visual design of your ClickFunnels pages automatically it works for both ClickFunnels 1.0 and 2.0, one funnel step at a time, using the live public page URL. It does not import automations, email/SMS sequences, payment connections, domain settings, tracking pixels, or membership areas those all need manual rebuilding in GHL. A straightforward migration with 3–5 funnels and basic automations takes 1–3 weeks; a complex setup with 10+ funnels, membership content, and advanced sequences takes 3–6 weeks.
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
                5+ years GHL experience · 200+ systems built and migrated globally. All migration steps verified against GoHighLevel's official documentation as of May 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Migrating?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle complete ClickFunnels to GHL migrations. 30-day post-migration support included.</p>
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

            {/* Section: What the URL Import Tool Actually Does */}
            <h2 id="what-url-import-tool-does" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What the URL Import Tool Actually Does (and Doesn't Do)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the single most important thing to understand before you start, because it determines how much of this migration is fast versus how much is manual rebuilding.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">WHAT IT DOES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                In your GHL sub-account, under Sites → Funnels, you can add a new funnel step and paste a live ClickFunnels page URL. GHL fetches that page and clones the layout, copy, and images into a new GHL funnel step. Per GoHighLevel's own current support documentation, this importer works for both ClickFunnels 1.0 (Classic) and ClickFunnels 2.0 some older third-party guides claim 2.0 isn't supported, which is outdated.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THREE PRACTICAL REQUIREMENTS</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-[#1A2236] leading-relaxed">
                <li>You must use the live, publishable page URL, not ClickFunnels' internal "shareable" link the shareable link won't work.</li>
                <li>Import happens one funnel step at a time, not the whole funnel in a single action, so a 5-step funnel means 5 separate imports.</li>
                <li>And per GHL's own documentation, Membership Areas are the one page type the importer explicitly does not bring over if any of your ClickFunnels funnels include a Members Area, that content has to be rebuilt manually using GHL's separate Memberships tool, not the funnel importer.</li>
              </ul>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">WHAT IT DOESN'T DO</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The import captures visual design only. Buttons that pointed to ClickFunnels order forms still point there until you rebuild them. Email sequences, SMS automations, payment integrations, and tracking codes behind the page do not come with it those all require separate, manual rebuilding, covered below.
              </p>
            </div>

            {/* Section: What Transfers vs. What You Rebuild */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Transfers vs. What You Rebuild
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ClickFunnels Asset</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happens in Migration</th>
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

            {/* Section: Step-by-Step */}
            <h2 id="migration-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Step-by-Step: How to Migrate from ClickFunnels to GoHighLevel
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Audit your ClickFunnels account before exporting anything.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">List every active funnel with its purpose and traffic, and document every email sequence and which funnels feed into it. This becomes your migration blueprint.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Export your contacts.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In ClickFunnels, go to Contacts → Export and download a CSV. Clean it remove duplicates, standardize phone formats before importing into GHL's Contacts → Import.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Import your funnels with the URL import tool.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In your GHL sub-account, go to Sites → Funnels → New Funnel, add a step, and paste the live ClickFunnels page URL (not the shareable link). Repeat for each step, in order. Remember: Membership Area pages need to be rebuilt separately in GHL's Memberships tool instead.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Rebuild order bumps, upsells, and downsells.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Recreate any ClickFunnels order bump or one-click upsell using GHL's native order bump and one-click upsell/downsell features on your order form and post-purchase steps.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Rebuild your email and SMS automations as GHL workflows.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">For each active ClickFunnels sequence, recreate the trigger and timing in GHL, using If/Else conditions for any branching logic. Start with your highest-revenue sequences first. See{' '}
                  <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel's workflow automation guide</Link> for the setup mechanics.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Reconnect payments and tracking.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Connect Stripe to GHL, rebuild order forms, and re-add Facebook Pixel and Google Analytics to each page. Test that conversion events fire correctly on the thank-you page.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">7</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Run in parallel, then cut over the domain.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Keep ClickFunnels active while testing GHL on a staging URL. Once confirmed, update DNS to point to GHL and set up 301 redirects from every old ClickFunnels URL to its new GHL equivalent. <strong>Do not cancel ClickFunnels before this is complete</strong> unlike HubSpot's 25-day data export window, ClickFunnels offers no grace period; cancelling takes your live funnels offline immediately.</p>
              </div>
            </div>

            {/* Section: How Long */}
            <h2 id="how-long" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Long Does a ClickFunnels to GoHighLevel Migration Take?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Setup Complexity</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Active Funnels</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Email Sequences</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Estimated Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.funnels}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.sequences}</td>
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
                The URL import tool handles page design quickly regardless of funnel count. What actually drives the timeline is the automation rebuild budget roughly 2–4 hours per complex email/SMS sequence plus membership content re-upload if applicable.
              </p>
            </div>

            {/* Section: What Breaks and How to Fix It */}
            <h2 id="what-breaks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Breaks and How to Fix It
            </h2>

            <div className="space-y-4 mb-6">
              {mistakesList.map((item, idx) => (
                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">Problem: {item.problem}</p>
                      <p className="text-sm text-[#5C6880] leading-relaxed mb-1"><strong>Why it happens:</strong> {item.why}</p>
                      <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Should You Switch */}
            <h2 id="should-you-switch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should You Switch to GoHighLevel First?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This guide assumes you've already decided, or are close to it. If you're still weighing whether GoHighLevel is the right move for your business including cost comparisons and what GHL replaces that ClickFunnels doesn't cover natively see our{' '}
              <Link href="/blog/gohighlevel-vs-clickfunnels" className="text-[#0E9BF0] hover:underline">GoHighLevel vs ClickFunnels comparison</Link>.
            </p>

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
              Want the migration handled end-to-end funnel mapping, automation rebuild, and domain cutover included?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-vs-clickfunnels" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs ClickFunnels: Honest 2026 Comparison →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Moving from ClickFunnels to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Do it once. Do it right. Funnel step mapping, follow-up sequence rebuild, Stripe reconnection, domain cutover, and conversion tracking all handled. Book a free migration assessment.
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