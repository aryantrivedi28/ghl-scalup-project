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
  Rocket,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function WhatIsGHLMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'data-vs-system',
        'why-migrate',
        'what-can-be-migrated',
        'why-not-1-to-1',
        'types-of-migration',
        'complexity',
        'project-phases',
        'should-you-migrate',
        'where-to-go-next',
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
      q: "What is GoHighLevel migration?",
      a: "GoHighLevel migration is the process of moving a business's CRM data, marketing assets, automation logic, and related systems from another platform into GoHighLevel. Some assets (contacts, basic data) transfer relatively directly; others (workflows, pipelines, integrations) generally need to be rebuilt or reconfigured rather than copied."
    },
    {
      q: "Is GHL migration just importing contacts?",
      a: "No. Importing contacts is one relatively mechanical part of a migration. The larger and more time-consuming part is rebuilding the automations, pipelines, and business logic that acted on that data in your previous platform this is usually where the real migration effort goes."
    },
    {
      q: "Does everything transfer automatically when migrating to GoHighLevel?",
      a: "No, and how much depends heavily on your source platform. As a general pattern, contact data and basic fields transfer via export/import; workflows and automation logic generally require manual rebuilding. Some platforms have partial native import tools for specific content types for example, GoHighLevel has a native Kajabi Course Importer that automatically brings over published-lesson video, image, and text content, though quizzes, assignments, and automation logic still require manual work. Always check the platform-specific guide for your exact situation rather than assuming a blanket answer."
    },
    {
      q: "What platforms can migrate to GoHighLevel?",
      a: "GoHighLevel can receive migrations from most CRM, marketing automation, and funnel-building platforms. GHL Scale Up has dedicated guides for HubSpot, ActiveCampaign, ClickFunnels, Kajabi, Salesforce, Zoho, Keap, and Mailchimp specifically."
    },
    {
      q: "Is migrating to GoHighLevel difficult?",
      a: "It depends on your current setup's complexity the number of active automations, integrations, and how customized your data structure is far more than on the platform name alone. A simple setup with few automations is straightforward; a highly customized enterprise system with deep integrations is genuinely complex. See the migration timeline guide for a fuller breakdown of what drives that difference."
    },
    {
      q: "What's the difference between data migration and CRM migration?",
      a: "Data migration refers specifically to moving information contacts, fields, tags. CRM migration (or system migration) is the broader process that also includes rebuilding the workflows, pipelines, and automation logic that operate on that data. A complete GoHighLevel migration involves both, and the system side is typically the larger effort of the two."
    },
    {
      q: "Do I need a GoHighLevel migration service, or can I do it myself?",
      a: "A simple migration with a small contact list and few or no automations is a reasonable DIY project. Once you have several hundred contacts and active automations, professional support becomes more valuable, primarily because a broken automation can fail silently for weeks before anyone notices something a structured, tested migration process is built to catch."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'data-vs-system', title: 'What Migration Actually Means: Data vs. System' },
    { id: 'why-migrate', title: 'Why Do Businesses Migrate to GoHighLevel?' },
    { id: 'what-can-be-migrated', title: 'What Can Be Migrated? (A High-Level View)' },
    { id: 'why-not-1-to-1', title: 'Why Migration Isn\'t a 1:1 Copy Across Platforms' },
    { id: 'types-of-migration', title: 'Types of GoHighLevel Migration' },
    { id: 'complexity', title: 'What Determines Migration Complexity?' },
    { id: 'project-phases', title: 'What Does a Migration Project Generally Involve?' },
    { id: 'should-you-migrate', title: 'Should You Migrate to GoHighLevel?' },
    { id: 'where-to-go-next', title: 'Where to Go Next' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const migrationAreas = [
    { area: 'Contacts', meaning: 'Your customer and lead data' },
    { area: 'CRM structure', meaning: 'Custom fields, tags, pipelines, and opportunities' },
    { area: 'Automation', meaning: 'Workflows and the business logic behind them' },
    { area: 'Communication', meaning: 'Email, SMS, and calling setup' },
    { area: 'Funnels and forms', meaning: 'Lead capture and conversion assets' },
    { area: 'Integrations', meaning: 'Connections to external tools (Stripe, Zapier, ad platforms)' },
    { area: 'Reporting', meaning: 'Business and pipeline analytics' }
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
          <span className="text-[#1A2236] font-medium">What Is GoHighLevel Migration? 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Beginner's Guide</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration Explained</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            What Is GoHighLevel Migration?
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ migrations delivered · Updated September 2026</div>
            </div>
          </div>

          {/* Direct Definition Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            <strong className="text-white">GoHighLevel migration is the process of moving a business's CRM, marketing, and automation systems from another platform into GoHighLevel.</strong> It is not simply exporting a contact list and importing it somewhere else. Contacts and basic data transfer relatively easily; the workflows, pipelines, and business logic that actually run day-to-day operations generally have to be rebuilt, not copied. Understanding that distinction is the single most important thing to know before you start researching timelines, checklists, or platform-specific steps.
          </p>

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
              href="#data-vs-system"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Data vs. System
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
                  <div className="text-xs text-white/50">GoHighLevel Migration Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ migrations completed globally from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce.
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
              <div className="text-sm font-bold text-white mb-2">Not Sure If You Need a Migration?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help you figure it out with a free assessment.</p>
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

            {/* Section 1: Data vs System */}
            <h2 id="data-vs-system" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Migration Actually Means: Data vs. System
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It helps to separate migration into two distinct pieces, because they behave completely differently.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Data migration</strong> is moving information: contacts, custom field values, tags, notes, and relevant historical records. This part is largely mechanical export as CSV, clean it, import it into GHL with fields mapped correctly.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">System migration</strong> is recreating the processes that act on that data: workflows, pipelines, forms, calendars, integrations, and the business logic behind all of them. This part is not mechanical it requires understanding what each automation was supposed to accomplish and rebuilding that logic inside GHL's own tools.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The reason this distinction matters: a migration can succeed completely at the data level every contact imported, every field mapped correctly and still fail operationally if the system side wasn't rebuilt properly. A missing follow-up automation or a broken pipeline stage doesn't show up in a contact count. It shows up weeks later as leads that stopped getting followed up with.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/what-is-ghl-migration-infographic.png"
                  alt="What is GoHighLevel migration: Data migration vs system migration, migration areas, and project phases overview"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>What is GoHighLevel migration: Data migration vs system migration, key migration areas, and project phases overview</span>
              </div>
            </div>

            {/* Section 2: Why Migrate */}
            <h2 id="why-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Do Businesses Migrate to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The reason is almost always cost, capability, or both.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Cost consolidation:</strong> an agency paying separately for a CRM, a funnel tool, SMS, and a booking calendar is often spending well more per month than a single flat-rate GoHighLevel plan covering all of it.</li>
              <li><strong className="text-[#1A2236]">Capability:</strong> businesses needing native SMS, an AI Voice Agent, white-label branding, or a sub-account model for managing multiple clients often find no other single platform provides all of this at a comparable price.</li>
              <li><strong className="text-[#1A2236]">Operational simplification:</strong> consolidating several disconnected tools into one platform reduces the number of systems that can break or fall out of sync with each other.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a full overview of the platform itself, see{' '}
              <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel?</Link>.
            </p>

            {/* Section 3: What Can Be Migrated */}
            <h2 id="what-can-be-migrated" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Can Be Migrated? (A High-Level View)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The exact scope depends heavily on your current platform and how it's set up, but most migrations involve some combination of the following areas.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration Area</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  {migrationAreas.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.area}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Within each area, some pieces transfer more directly than others, and some don't transfer at all and have to be rebuilt or reconfigured. The exact breakdown depends on your specific source platform see the platform-specific guides linked below for the full technical detail on your situation.
            </p>

            {/* Section 4: Why Not 1-to-1 */}
            <h2 id="why-not-1-to-1" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Migration Isn't a 1:1 Copy Across Platforms
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Different platforms organize data and logic in fundamentally different ways, which is the real reason migration is a translation-and-rebuild project rather than a straightforward transfer.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Fields map differently:</strong> a field that's a simple text box in one platform might be a structured picklist with dependencies in another.</li>
              <li><strong className="text-[#1A2236]">Pipeline structures differ:</strong> some platforms allow deeply customized, branching pipeline logic that doesn't have an equivalent structure elsewhere.</li>
              <li><strong className="text-[#1A2236]">Automation engines use different logic models:</strong> trigger-and-action systems, visual campaign builders, and rule-based workflow engines all express the same underlying idea differently, and converting between them is an interpretation exercise, not a file conversion.</li>
              <li><strong className="text-[#1A2236]">Tags can serve different purposes:</strong> a tag that represents active segmentation in one platform might represent workflow state in another, which changes how it should be handled during migration.</li>
              <li><strong className="text-[#1A2236]">Reporting models differ:</strong> a report built on one platform's specific data relationships often can't be recreated exactly and needs to be redesigned around the new platform's structure.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This is why platform-specific migration guides exist the practical detail of what maps to what depends entirely on which platform you're coming from.
            </p>

            {/* Section 5: Types of Migration */}
            <h2 id="types-of-migration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Types of GoHighLevel Migration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not every migration looks the same. Most fall into one or more of these categories.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880]">
              <li><strong className="text-[#1A2236]">Platform-to-GHL migration:</strong> moving from a single named platform (HubSpot, Salesforce, Keap, ActiveCampaign, Zoho, ClickFunnels, Kajabi, Mailchimp) into GHL. This is the most common scenario.</li>
              <li><strong className="text-[#1A2236]">Agency or account migration:</strong> restructuring or moving multiple client environments, often using GHL's sub-account and Snapshot features to standardize setup across clients.</li>
              <li><strong className="text-[#1A2236]">Tool consolidation:</strong> moving from several disconnected tools (a CRM plus a separate funnel builder plus a separate SMS tool) into one GHL account.</li>
              <li><strong className="text-[#1A2236]">Partial migration:</strong> moving only specific functions for example, migrating CRM and automation while leaving an existing e-commerce or membership platform in place.</li>
              <li><strong className="text-[#1A2236]">Rebuild/replacement migration:</strong> using the migration as an opportunity to redesign processes rather than replicate them exactly common when the old system's logic had accumulated years of unused complexity.</li>
            </ul>

            {/* Section 6: Complexity */}
            <h2 id="complexity" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Determines Migration Complexity?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Complexity depends on several factors working together, not any single number like contact count.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Simple:</strong> limited data, few workflows, minimal integrations</li>
              <li><strong className="text-[#1A2236]">Moderate:</strong> multiple pipelines, a meaningful number of workflows, several integrations</li>
              <li><strong className="text-[#1A2236]">Complex:</strong> large datasets, deep automation logic, multiple integrated systems, or business-critical dependencies</li>
              <li><strong className="text-[#1A2236]">Enterprise/multi-account:</strong> many stakeholders, multiple accounts, extensive integration and testing requirements</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              How long each of these actually takes varies by platform and specific setup for a full breakdown of realistic timelines and what drives them, see the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL migration timeline guide</Link>.
            </p>

            {/* Section 7: Project Phases */}
            <h2 id="project-phases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does a Migration Project Generally Involve?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              At a high level, most migrations move through the same broad phases, regardless of source platform: an audit of what currently exists, building the receiving environment in GHL, exporting and importing data, rebuilding automations and workflows, testing, running both systems in parallel briefly, and finally cutting over.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the detailed, step-by-step operational framework, see the{' '}
              <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">complete GoHighLevel migration checklist</Link>. For the risks specific to getting each phase wrong, see{' '}
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">common GHL migration mistakes</Link>.
            </p>

            {/* Section 8: Should You Migrate */}
            <h2 id="should-you-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should You Migrate to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Migration tends to make sense when:</strong>
            </p>
            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>You're consolidating multiple disconnected tools into one system</li>
              <li>You need capabilities your current platform doesn't offer natively (SMS, AI voice, white-labeling, sub-accounts)</li>
              <li>Your current tool stack costs meaningfully more than a consolidated GHL setup would</li>
              <li>You're scaling and need more operational automation than your current platform supports</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Migration may not be the right move when:</strong>
            </p>
            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Your current system is deeply integrated with other business-critical tools that have no clear GHL-compatible path</li>
              <li>A specific feature you depend on has no suitable equivalent in GHL</li>
              <li>The cost and disruption of migrating exceeds the realistic benefit for your specific situation</li>
              <li>Your current platform already meets your needs and you're only considering a switch because GoHighLevel is widely discussed, not because of an unmet need</li>
              <li>Your team doesn't have the time or resources to properly test and validate a new system right now</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A genuinely useful migration decision is based on your specific requirements and constraints, not on the assumption that GoHighLevel is automatically the better choice for every business.
            </p>

            {/* Section 9: Where to Go Next */}
            <h2 id="where-to-go-next" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where to Go Next
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once you understand the concept, the right next resource depends on where you are in the process:
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you want to estimate how long your specific migration will take, see the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL migration timeline guide</Link>. If you're ready to plan the operational steps, use the{' '}
              <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">GoHighLevel migration checklist</Link>. If you want to avoid the most common failure points, read{' '}
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">common GHL migration mistakes</Link>. If you know which platform you're moving from, go straight to the dedicated guide:{' '}
              <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot</Link>,{' '}
              <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ActiveCampaign</Link>,{' '}
              <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ClickFunnels</Link>,{' '}
              <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Kajabi</Link>,{' '}
              <Link href="/blog/salesforce-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Salesforce</Link>, or{' '}
              <Link href="/blog/keap-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Keap</Link>. If you're not sure which platform's migration is hardest or easiest to plan around, see{' '}
              <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-[#0E9BF0] hover:underline">which platform is easiest to migrate to GoHighLevel</Link>.
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
              Not sure where your migration fits, or want a second opinion before you start?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">Complete GoHighLevel Migration Checklist →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">Common GHL Migration Mistakes →</Link>
                <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Which Platform Is Easiest to Migrate to GoHighLevel? →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Not sure where your migration fits?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Book a free 30-minute migration assessment. We review your current setup, tell you exactly what the migration involves, and give you a realistic timeline and fixed-fee quote. No obligation.
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