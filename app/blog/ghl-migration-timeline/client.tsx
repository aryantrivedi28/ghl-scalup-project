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
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Timer,
  Clock,
  BarChart3,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function GHLMigrationTimelineClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-drives-timeline',
        'calendar-vs-work-effort',
        'sequential-vs-parallel',
        'complexity-framework',
        'timeline-by-platform',
        'migration-phases',
        'causes-delays',
        'shorten-timeline',
        'diy-vs-specialist',
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
      q: "How long does a GoHighLevel migration take?",
      a: "A simple migration with fewer than 5 active automations and a small, clean contact list takes 1–2 weeks. A standard migration with 5–20 automations takes 3–5 weeks. A complex migration with 20+ automations, large data volume, membership content, or multiple client accounts takes 6–10 weeks. Automation count, not contact volume, is the primary driver."
    },
    {
      q: "Does contact volume affect migration time?",
      a: "Less than most people assume. The CSV import itself takes minutes regardless of whether you have 5,000 or 500,000 contacts. Volume matters more indirectly through data-quality cleanup time and testing thoroughness than through the import process itself."
    },
    {
      q: "How long does it take to rebuild workflows in GoHighLevel?",
      a: "A simple 3–5 step sequence takes 30–60 minutes. A standard sequence with basic branching takes 2–4 hours. A complex automation with 15+ steps, multi-level branching, and lead-scoring logic takes 4–8 hours. Add 50–100% to these figures if you're learning GHL's workflow builder while migrating."
    },
    {
      q: "How long does a Kajabi to GoHighLevel migration take?",
      a: "1–2 weeks for a simple setup, 3–5 weeks standard, 5–8 weeks complex. This is shorter than older estimates because GoHighLevel's native Kajabi Course Importer now handles course structure and media for published lessons automatically the remaining time goes into quizzes, assignments, offers, and automation rebuild."
    },
    {
      q: "Should I run both platforms in parallel during migration?",
      a: "Yes, for a minimum of 1–2 weeks before cutover. New leads enter GHL while contacts already active in old-platform sequences finish there. This reveals gaps in your GHL setup while you still have a working fallback."
    },
    {
      q: "Can migration timelines be shortened without increasing risk?",
      a: "Yes by reducing avoidable work rather than reducing testing. Cutting automations that no longer drive results, cleaning data before import, and freezing scope all shorten the timeline without cutting corners on QA."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-drives-timeline', title: 'What Actually Drives the Migration Timeline?' },
    { id: 'calendar-vs-work-effort', title: 'Calendar Time vs. Work Effort' },
    { id: 'sequential-vs-parallel', title: 'Sequential vs. Parallel Work' },
    { id: 'complexity-framework', title: 'Estimate Your Own Timeline: A Complexity Framework' },
    { id: 'timeline-by-platform', title: 'Migration Timeline by Source Platform' },
    { id: 'migration-phases', title: 'What Happens in Each Phase of a GHL Migration?' },
    { id: 'causes-delays', title: 'What Causes Migration Delays?' },
    { id: 'shorten-timeline', title: 'How to Shorten the Timeline Without Cutting Corners' },
    { id: 'diy-vs-specialist', title: 'DIY vs. Specialist: How Does the Timeline Change?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const automationRebuildTimes = [
    { automations: '1–5 simple sequences', time: '4–10 hours total' },
    { automations: '5–15 mixed sequences', time: '15–40 hours total' },
    { automations: '15–30 complex sequences', time: '40–80 hours total' },
    { automations: '30+ sequences with deep conditional logic', time: '80–150+ hours total' },
  ];

  const complexityFramework = [
    { variable: 'Active automations', simple: 'Under 5', standard: '5–20', complex: '20+' },
    { variable: 'Contacts', simple: 'Under 5,000', standard: '5,000–25,000', complex: '25,000+' },
    { variable: 'Integrations', simple: 'Standard (Stripe, calendar)', standard: 'A few standard + 1 custom', complex: 'Multiple custom/API-level' },
    { variable: 'Content (funnels/courses)', simple: 'Minimal', standard: 'Moderate', complex: 'Extensive' },
    { variable: 'Client accounts', simple: '1', standard: '1', complex: 'Multiple (agency)' },
    { variable: 'Data cleanliness', simple: 'Clean', standard: 'Some cleanup needed', complex: 'Significant cleanup needed' },
  ];

  const platformTimelineData = [
    { platform: 'Mailchimp', simple: '1–2 weeks', standard: '2–3 weeks', complex: '3–4 weeks', driver: 'Generally the lowest-complexity source in this set simple, email-centric data model' },
    { platform: 'ClickFunnels', simple: '1–2 weeks', standard: '2–3 weeks', complex: '3–6 weeks', driver: 'Automation, payment, and domain reconnection behind an auto-imported page design' },
    { platform: 'ActiveCampaign', simple: '2–3 weeks', standard: '3–5 weeks', complex: '5–7 weeks', driver: 'List/tag dual-segmentation mapping and automation rebuild' },
    { platform: 'Keap', simple: '1–2 weeks', standard: '3–5 weeks', complex: '6–8 weeks', driver: 'Campaign Builder has no export path and must be fully documented and rebuilt' },
    { platform: 'HubSpot', simple: '3–4 weeks', standard: '4–6 weeks', complex: '8–12 weeks', driver: 'Custom property and company-association volume that accumulates with account age' },
    { platform: 'Kajabi', simple: '1–2 weeks', standard: '3–5 weeks', complex: '5–8 weeks', driver: 'Course structure now imports automatically via GHL\'s native importer, but quizzes, assignments, offers, and automations still require full manual rebuild' },
    { platform: 'Zoho CRM', simple: '2–3 weeks', standard: '3–4 weeks', complex: '4–6 weeks', driver: 'Blueprint workflows and custom modules translate conceptually, not directly, to GHL\'s automation model' },
    { platform: 'Salesforce', simple: '3–4 weeks', standard: '5–7 weeks', complex: '8–12 weeks', driver: 'Relational, multi-object data model (leads/contacts/accounts/opportunities/custom objects) doesn\'t map directly to GHL\'s contact-centric structure' },
  ];

  const migrationPhases = [
    { phase: 'Audit and scoping', duration: '3–5 days', dependencies: 'Stakeholder availability, completeness of existing documentation' },
    { phase: 'GHL infrastructure build', duration: '3–5 days', dependencies: 'Can run partly in parallel with audit; gated by decisions made during scoping' },
    { phase: 'Data export and import', duration: '1–2 days', dependencies: 'Depends on field mapping being finalized first' },
    { phase: 'Automation rebuild', duration: '1–4 weeks', dependencies: 'The majority of total project time; depends on the data structure already existing' },
    { phase: 'Parallel running', duration: '1–2 weeks', dependencies: 'Depends on automation rebuild passing validation first' },
    { phase: 'Cutover and handover', duration: '1–2 days', dependencies: 'Depends on parallel-running validation succeeding' },
  ];

  const diyVsSpecialistData = [
    { complexity: 'Simple (under 5 automations)', diy: '3–6 weeks', specialist: '1–2 weeks' },
    { complexity: 'Standard (5–20 automations)', diy: '8–16 weeks', specialist: '3–5 weeks' },
    { complexity: 'Complex (20+ automations)', diy: '16–30+ weeks', specialist: '6–10 weeks' },
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        href="/book-a-call"
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Link>
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
          <span className="text-[#1A2236] font-medium">GHL Migration Timeline 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration Timeline</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Project Planning</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GHL Migration Timeline:<br />
            <span className="text-[#F8D000]">How Long Does It Actually Take? (2026)</span>
          </h1>

          {/* Author Byline */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-6">
            <div className="w-7 h-7 min-w-7 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="text-sm font-medium text-white">
                GHL Scale Up Team
              </div>

              <div className="text-xs text-white/50 leading-relaxed break-words">
                GoHighLevel Migration Specialists · 200+ builds delivered · Ranges
                reflect GHL Scale Up's own project experience across HubSpot,
                ClickFunnels, ActiveCampaign, Kajabi, Zoho, Salesforce, Keap, and
                Mailchimp, September 2026
              </div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            One of the first questions anyone asks before a GoHighLevel migration is how long it will take. The honest answer depends on one factor far more than any other and it isn't the one most people assume.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Timer className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              A simple migration with a small contact list and basic automations takes 1–2 weeks. A standard migration takes 3–5 weeks. A complex migration with many active automations, multiple client accounts, or course/membership content takes 6–10 weeks. The single biggest driver is not how many contacts you have it's how many active automations need to be rebuilt. Contact import itself takes minutes regardless of volume; rebuilding a complex multi-branch automation takes 4–8 hours. These are planning ranges based on GHL Scale Up's own project experience, not a universal guarantee your specific project's variables determine where you actually land.
            </p>
          </div>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get a Migration Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#timeline-by-platform"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Timelines
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
                5+ years GHL experience · 200+ systems built and migrated globally. Timeline estimates based on real migration projects completed across HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce in 2025 and 2026.
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
              <div className="text-sm font-bold text-white mb-2">Not Sure How Long Your Migration Will Take?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">Get a free assessment and realistic timeline.</p>
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

            {/* Section 1: What Actually Drives the Timeline */}
            <h2 id="what-drives-timeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Actually Drives the Migration Timeline?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most common misconception is that contact volume is the main factor. It usually isn't. Importing 50,000 contacts takes about the same time as importing 5,000 the CSV import process runs in minutes either way. What actually determines duration is everything around that import.
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Automation count (the biggest factor by far)</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every automation from your previous platform generally has to be rebuilt manually in GHL's workflow builder there is no universal automated conversion tool across platforms. A simple three-step email sequence takes roughly 30–60 minutes to rebuild. A complex sequence with 15+ steps, multiple branches, and lead-scoring logic can take 4–8 hours.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Active Automations to Rebuild</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Estimated Rebuild Time (Work Effort)</th>
                  </tr>
                </thead>
                <tbody>
                  {automationRebuildTimes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.automations}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              For a guide to building automations in GHL correctly: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow automation guide</Link>.
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Data quality</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Duplicates, missing fields, inconsistent phone formatting, and years of accumulated junk records add 1–5 days to cleanup, depending on volume. Importing dirty data means dirty data inside GHL automations fire on bad contacts, deliverability suffers, and the cleanup happens later at higher cost.
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Integration complexity</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One integration requiring custom API work (a bespoke internal tool, a non-standard webhook contract) can take longer than dozens of basic contact imports combined. Stripe, calendars, and standard Zapier connections are typically fast; anything custom is the real variable.
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Communication infrastructure</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Domain authentication (DKIM/SPF/DMARC) is a technical setup task, usually completed in hours but deliverability ramp-up (warming a new sending domain) is a separate, longer process that runs in parallel with other work rather than blocking it. In the US, A2P 10DLC registration for SMS has its own carrier-side processing time that's outside your control and should be started early, since it can otherwise become the schedule's bottleneck.
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Agency multi-account migrations</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Migrating 10 client sub-accounts isn't one migration it's effectively 10, even with Snapshots accelerating per-client setup. Each account still needs its own data validation, workflow confirmation, and integration reconnection. As a planning rule, add roughly 3–5 business days per additional client account on top of the core migration timeline, rather than multiplying the whole timeline by account count.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/ghl-migration-timeline-infographic.png"
                  alt="GHL Migration Timeline: What drives the timeline, complexity framework, phases, and platform-specific estimates"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GHL Migration Timeline: What drives the timeline, complexity framework, migration phases, and platform-specific estimates</span>
              </div>
            </div>

            {/* Section 2: Calendar Time vs. Work Effort */}
            <h2 id="calendar-vs-work-effort" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Calendar Time vs. Work Effort
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are not the same thing, and conflating them is the most common source of unrealistic timelines. Work effort is the actual hours spent building rebuilding a workflow might take 4 hours of focused work. Calendar time is the total elapsed days until it's done, which is usually longer because of factors outside the builder's direct control:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Stakeholder approval on field mapping or workflow logic before proceeding</li>
              <li>Testing that has to happen after a build is complete, not during it</li>
              <li>External dependencies like domain DNS propagation or A2P carrier processing</li>
              <li>Multiple people or teams needing to coordinate handoffs</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A project with 40 hours of total work effort can easily span 3 calendar weeks once these dependencies are accounted for that's not inefficiency, it's realistic project structure.
            </p>

            {/* Section 3: Sequential vs. Parallel Work */}
            <h2 id="sequential-vs-parallel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Sequential vs. Parallel Work
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Migration timelines are not simply additive. Some work happens simultaneously; some has to wait on earlier work finishing.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Can run in parallel:</strong> data cleaning, GHL infrastructure setup, workflow mapping documentation, and integration credential-gathering</li>
              <li><strong className="text-[#1A2236]">Must run sequentially:</strong> contact import depends on field mapping being finished; workflow activation depends on the data structure already existing; cutover depends on testing passing; old-platform cancellation depends on validated cutover</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This is why 'six phases at one week each' isn't how migration timelines should be calculated several phases overlap, while a few genuinely gate everything after them.
            </p>

            {/* Section 4: Complexity Framework */}
            <h2 id="complexity-framework" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Estimate Your Own Timeline: A Complexity Framework
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Score your own migration honestly against these variables to identify your complexity tier:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Variable</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Simple</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Standard</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Complex</th>
                  </tr>
                </thead>
                <tbody>
                  {complexityFramework.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.variable}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.simple}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.standard}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.complex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If most of your answers land in one column, that's your realistic complexity tier. If you're split across columns, plan for the more complex end in practice, the presence of even one 'complex' variable (a deeply custom integration, for example) tends to set the pace for the whole project.
            </p>

            {/* CTA Button 2: After Complexity Framework */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">Not sure which complexity tier you're in?</p>
              <p className="text-sm text-white/80 mb-4">Our migration assessment scores your specific setup and gives you a realistic timeline.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Search className="w-4 h-4" />
                Get Your Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 5: Timeline by Source Platform */}
            <h2 id="timeline-by-platform" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Migration Timeline by Source Platform
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each platform has its own dominant complexity driver rather than a uniform profile. These ranges reflect GHL Scale Up's own project experience combined with each platform's documented migration mechanics treat them as planning ranges, not guarantees.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Source Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Simple</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Standard</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Complex</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Main Timeline Driver</th>
                  </tr>
                </thead>
                <tbody>
                  {platformTimelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.simple}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.standard}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.complex}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.driver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A NOTE ON THE KAJABI ROW</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                earlier guidance (including a prior version of this article) assumed Kajabi course content required full manual rebuild with no import path. GoHighLevel's native Kajabi Course Importer now handles video, image, and text content for published lessons automatically, which is why this range runs shorter than some older comparisons what still takes time is quizzes, assignments, drip settings, offers, and automation logic, none of which the importer covers. See the full breakdown in the <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel migration guide</Link>.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the complete process on each platform: <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel migration</Link>, <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ClickFunnels to GoHighLevel migration</Link>, <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel migration</Link>, <Link href="/blog/salesforce-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Salesforce to GoHighLevel migration</Link>, or <Link href="/blog/keap-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Keap to GoHighLevel migration</Link>.
            </p>

            {/* Section 6: Migration Phases */}
            <h2 id="migration-phases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens in Each Phase of a GHL Migration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A standard 3–5 week migration typically breaks down as follows. These are duration ranges and their main dependencies, not step-by-step instructions.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Phase</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Duration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Main Dependencies</th>
                  </tr>
                </thead>
                <tbody>
                  {migrationPhases.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.phase}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.duration}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.dependencies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For preparation tasks specific to each phase, see the full 50-point breakdown in the <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">GoHighLevel migration checklist</Link>.
            </p>

            {/* Section 7: What Causes Delays */}
            <h2 id="causes-delays" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Causes Migration Delays?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Undocumented legacy automations.</strong> Accounts active for 2+ years accumulate automations nobody remembers building. Discovering these mid-project extends the automation-rebuild phase unpredictably. Prevention: a full automation audit before migration starts, keeping only what's actively driving results.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Unclear field mapping.</strong> Starting data import without a finalized field-mapping document leads to rework. Prevention: finalize and sign off on field mapping before any data moves.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Missing credentials or unavailable stakeholders.</strong> API keys, admin access, or a needed approval that isn't available when the project reaches that step stalls the whole timeline. Prevention: gather all credentials and confirm stakeholder availability before starting.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Integration dependencies discovered late.</strong> A custom API integration surfacing only during testing, rather than during the initial audit, can add days of unplanned work. Prevention: inventory every external integration during the audit phase, not after.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Domain or SMS compliance delays.</strong> A2P 10DLC registration and domain authentication have external processing times outside your control. Prevention: start these the moment the project begins, in parallel with other setup work.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Scope changes mid-project.</strong> Deciding to add new automations or features partway through extends everything after that point. Prevention: freeze scope for the initial migration; treat improvements as a fast-follow phase after cutover.
            </p>

            {/* Section 8: How to Shorten the Timeline */}
            <h2 id="shorten-timeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Shorten the Timeline Without Cutting Corners
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The goal is reducing avoidable work, not reducing QA.
            </p>
            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Audit and cut automations before migration only rebuild what's actively driving results</li>
              <li>Clean contact data before import, not after</li>
              <li>Freeze scope for the initial migration</li>
              <li>Gather all credentials and access before starting</li>
              <li>Finalize field mapping before any data moves</li>
              <li>Build the receiving GHL environment before importing anything into it</li>
              <li>Test with a representative sample (50–200 records), not the full dataset, before the full import</li>
              <li>Prioritize revenue-critical workflows first, then handle lower-priority automations</li>
              <li>Start A2P/domain authentication immediately, since these have external processing time</li>
            </ul>

            {/* Section 9: DIY vs Specialist */}
            <h2 id="diy-vs-specialist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              DIY vs. Specialist: How Does the Timeline Change?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The following ranges reflect GHL Scale Up's own observed project experience, not an independently verified industry benchmark treat them as a comparison point, not a guarantee.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration Complexity</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">DIY (Self-Managed)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Specialist (GHL Scale Up's Observed Range)</th>
                  </tr>
                </thead>
                <tbody>
                  {diyVsSpecialistData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.complexity}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.diy}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.specialist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The gap isn't only speed it's that an experienced team has already resolved the common blockers (DKIM setup, A2P registration quirks, Stripe reconnection edge cases) many times before, where a DIY project is often solving each one for the first time.
            </p>

            {/* Section 10: FAQ */}
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
              Not sure how complex your specific migration is?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link> for a realistic timeline and fixed-fee quote.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration →</Link>
                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ClickFunnels to GoHighLevel Migration →</Link>
                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration →</Link>
                <Link href="/blog/salesforce-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Salesforce to GoHighLevel Migration →</Link>
                <Link href="/blog/keap-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Keap to GoHighLevel Migration →</Link>
                <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel Migration Guide →</Link>
                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to start planning your GHL migration?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Book a free 30-minute migration assessment. We review your current platform, tell you exactly what the migration involves, give you a realistic timeline, and provide a fixed-fee quote. No obligation.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>
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