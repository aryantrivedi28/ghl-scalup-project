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
  Lightbulb,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Shield,
  Workflow,
  BarChart3,
  Info,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function KeapToGoHighLevelMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'what-transfers',
        'export-data',
        'tags-fields',
        'rebuild-campaigns',
        'appointments-calendars',
        'plusthis-replacement',
        'cutover-process',
        'migration-comparison',
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
      q: "Can I migrate Keap Campaign Builder to GoHighLevel?",
      a: "Not automatically. Campaign Builder sequences have no export path, confirmed in GoHighLevel's own official Keap migration guide. Each active campaign must be documented business intent, entry goal, sequence steps, decision nodes, exit conditions then manually rebuilt in GHL's Workflow Builder. This is typically the most time-consuming phase of a Keap migration."
    },
    {
      q: "What data transfers from Keap to GoHighLevel?",
      a: "Contacts and tags transfer via CSV export. Custom fields must be recreated manually in GHL before import. Campaign Builder sequences, order records, notes, and pipeline deals do not transfer automatically the official guide confirms deals specifically require manual re-entry, not automated import."
    },
    {
      q: "How do Keap tags map to GoHighLevel?",
      a: "Classify every tag into four categories: segmentation tags (migrate as GHL tags), campaign state tags (rebuild as workflow state, not tags), utility tags (convert to GHL custom fields), and legacy tags (archive, don't migrate). This classification is one of the most valuable side effects of a Keap migration most long-running accounts carry substantial tag debt worth cleaning up."
    },
    {
      q: "What happens to appointments and calendars when migrating from Keap?",
      a: "They don't transfer automatically. Recreate each appointment type in GHL's Calendars → Appointment Types, matching duration, location, and availability settings, then reconnect Google or Outlook calendar sync."
    },
    {
      q: "What happens to PlusThis when I migrate from Keap to GHL?",
      a: "PlusThis doesn't migrate it's a Keap-specific add-on. Each feature needs a GHL-native replacement (appointment reminders, dynamic content, SMS) or a third-party alternative (countdown timers have no native GHL equivalent)."
    },
    {
      q: "How long does a Keap to GoHighLevel migration take?",
      a: "Small migrations (under 5,000 contacts, minimal Campaign Builder activity) can complete in 1–2 weeks. Standard migrations (10,000–50,000 contacts, 10–20 active campaigns) typically take 3–5 weeks. Complex migrations (100,000+ contacts, 20+ active campaigns, deep PlusThis/Zapier use) can take 6–8 weeks."
    },
    {
      q: "Is Keap Ultimate different from Keap Pro for migration purposes?",
      a: "The two editions do differ in feature depth Keap Ultimate carries the full Campaign Builder, which is where most long-tenured users have their largest automation investment. A specific difference sometimes claimed that Ultimate exports tags more completely than Pro isn't something we've been able to independently verify against official documentation, so treat it as unconfirmed and check your specific edition's current export options directly before finalizing your migration plan."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why Do Businesses Migrate from Keap to GoHighLevel?' },
    { id: 'what-transfers', title: '2. What Data Transfers and What Does Not?' },
    { id: 'export-data', title: '3. How Do You Export Contacts and Data from Keap?' },
    { id: 'tags-fields', title: '4. How Do You Handle Keap Tags and Custom Fields?' },
    { id: 'rebuild-campaigns', title: '5. How Do You Rebuild Keap Campaign Builder Sequences in GHL?' },
    { id: 'appointments-calendars', title: '6. Appointments and Calendars' },
    { id: 'plusthis-replacement', title: '7. How Do You Replace PlusThis and Other Keap Integrations?' },
    { id: 'cutover-process', title: '8. What Is the Phased Cutover Process?' },
    { id: 'migration-comparison', title: '9. How Does Keap Migration Compare to Zoho, HubSpot, or Salesforce?' },
    { id: 'faq', title: '10. Frequently Asked Questions' }
  ];

  const transferData = [
    { asset: 'Contacts', transfers: 'Yes', how: 'CSV export from Keap, CSV import to GHL' },
    { asset: 'Custom fields', transfers: 'Manual recreation', how: 'Must be recreated in GHL before contact import' },
    { asset: 'Tags', transfers: 'Yes', how: 'Export with contact record; recreate as GHL tags' },
    { asset: 'Pipelines / deals', transfers: 'Manual rebuild', how: 'Stages recreated in GHL first, then deals manually re-entered the official guide confirms this is a manual transfer, not automatic' },
    { asset: 'Campaign Builder sequences', transfers: 'No', how: 'Documented and rebuilt in GHL Workflow Builder' },
    { asset: 'Appointment types and calendars', transfers: 'Manual rebuild', how: 'Recreated in GHL Calendars → Appointment Types, including duration, location, and availability settings' },
    { asset: 'Landing pages and forms', transfers: 'Manual rebuild', how: 'Rebuilt in GHL\'s Funnel/Website Builder and Forms' },
    { asset: 'Order records', transfers: 'No', how: 'Stay in Keap archive' },
    { asset: 'Notes', transfers: 'No', how: 'Stay in Keap archive' },
    { asset: 'PlusThis add-ons', transfers: 'No', how: 'Replace with GHL-native equivalents' },
    { asset: 'Zapier integrations', transfers: 'Manual reconnect', how: 'Rebuild with GHL native integrations or webhooks' }
  ];

  const plusThisReplacements = [
    { feature: 'Appointment reminders', ghlReplacement: 'Native GHL workflow with Send SMS + Send Email actions', notes: 'GHL native, no add-on needed' },
    { feature: 'Countdown timers in emails', ghlReplacement: 'Third-party image service (not native in GHL either)', notes: 'Use Sendtric, MotionMail, or similar' },
    { feature: 'Dynamic content by tag', ghlReplacement: 'GHL Custom Values in email templates', notes: 'Native replacement, cleaner implementation' },
    { feature: 'Webinar registration sequences', ghlReplacement: 'GHL Workflows plus a Zoom/webinar platform webhook', notes: 'Rebuild trigger and follow-up as GHL workflow' },
    { feature: 'SMS gateway integration', ghlReplacement: 'GHL native SMS', notes: 'Native replacement often better than PlusThis' },
    { feature: 'Card decline recovery', ghlReplacement: 'GHL payment failure workflow', notes: 'Native replacement for Stripe/other payment gateways' }
  ];

  const comparison = [
    { factor: 'Data export ease', keap: 'Moderate (1,000+ contacts via email)', zoho: 'Moderate (200K record limit)', hubspot: 'High (multiple export types)', salesforce: 'High (3 methods)' },
    { factor: 'Automation transferability', keap: 'No Campaign Builder does NOT export', zoho: 'No workflows do NOT export', hubspot: 'No Marketing sequences do NOT export', salesforce: 'No Flows do NOT export' },
    { factor: 'Object model complexity', keap: 'Moderate (contacts + tags + opportunities)', zoho: 'Moderate (modules + custom fields)', hubspot: 'Moderate (contacts + companies + deals)', salesforce: 'Very high (relational + custom objects)' },
    { factor: 'Add-on ecosystem', keap: 'PlusThis + Zapier heavy', zoho: 'Zoho ecosystem apps', hubspot: 'HubSpot marketplace', salesforce: 'Salesforce AppExchange' },
    { factor: 'Typical timeline', keap: '2-8 weeks', zoho: '2-4 weeks', hubspot: '3-6 weeks', salesforce: '4-8 weeks' },
    { factor: 'Biggest risk', keap: 'Campaign Builder rebuild scope', zoho: 'Workflow rebuild scope', hubspot: 'Data loss from complex exports', salesforce: 'Relational data breakage' }
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
          <span className="text-[#1A2236] font-medium">Keap to GoHighLevel Migration</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Keap</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Infusionsoft</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Keap to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">Complete 2026 Step-by-Step Guide</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ builds delivered · Verified against GoHighLevel's official Keap migration guide, September 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Migrating from Keap (formerly Infusionsoft) to GoHighLevel is different from most CRM migrations in one specific way: Keap's Campaign Builder does not export. Your automation sequences, decision trees, and fulfillment flows have to be documented before migration and manually rebuilt in GoHighLevel's Workflow Builder. Contacts, tags, and custom fields export cleanly the automation logic that runs your business is the real work.
          </p>

          {/* Direct Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Direct answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              To migrate from Keap to GoHighLevel: (1) audit your Keap instance, (2) export contacts via Contacts → People → Export (over 1,000 contacts triggers email delivery of the file), (3) normalize multiple emails per contact to one primary email before export, (4) recreate custom fields, pipelines, and tag categories in GHL first, (5) assign placeholder unique emails to any Keap contacts missing one, since GHL requires an email for import, (6) test-import 100–200 contacts, (7) document every active Campaign Builder sequence and rebuild it in GHL's Workflow Builder, (8) recreate appointment types and calendar settings, (9) replace PlusThis with GHL-native equivalents, (10) run both platforms in parallel for 2–3 weeks before cutover. Typical timeline: 2–3 weeks for small migrations, 4–8 weeks for complex accounts with 20+ active Campaign Builder sequences. The single biggest risk is assuming Campaign Builder will transfer it will not.
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
              href="#rebuild-campaigns"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Campaign Rebuild
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
                5+ years GHL experience · 200+ systems built and migrated globally. All technical details verified as of July 2026.
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
              <div className="text-sm font-bold text-white mb-2">Migrating from Keap/Infusionsoft?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle Campaign Builder migrations end-to-end tag cleanup, contact preparation, workflow rebuild, PlusThis replacement, and phased cutover.</p>
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

            {/* Section 1: Why Migrate */}
            <h2 id="why-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Do Businesses Migrate from Keap to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Businesses migrate from Keap to GoHighLevel primarily to consolidate a fragmented Keap + PlusThis + Zapier + landing-page-tool stack into one platform, reduce per-contact pricing pressure, and access native SMS, AI, and agency reseller features Keap doesn't offer.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Per-contact pricing at scale:</strong> Keap pricing scales with contact count. GHL's flat-rate model ($97–$497/month) does not.</li>
              <li><strong className="text-[#1A2236]">Stack consolidation:</strong> a typical Keap user pairs it with PlusThis, Zapier, a landing page tool, and a scheduling tool. GHL consolidates these into one platform.</li>
              <li><strong className="text-[#1A2236]">Native SMS and WhatsApp:</strong> Keap requires third-party SMS integrations. GHL has native SMS, MMS, and WhatsApp built into every plan.</li>
              <li><strong className="text-[#1A2236]">Agency and SaaS Mode:</strong> agencies serving multiple Keap clients pay per instance. GHL's sub-account architecture and SaaS Mode manage multiple clients from one dashboard.</li>
            </ul>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST DISCLAIMER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL is not a drop-in Keap replacement for every business. Keap remains meaningfully better for businesses that depend on Keap's e-commerce and order forms module for product sales, users with deep PlusThis-specific campaign investment, and merchants who rely on Keap Pay for card-present transactions. If your Keap use centers on Keap Pay or its shopping cart, verify GHL meets those specific needs before migrating.
              </p>
            </div>

            {/* Section 2: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Data Transfers and What Does Not?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's official Keap migration guide confirms which assets the standard migration process covers. Other assets require manual re-creation or stay in Keap as an archive.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Keap Asset</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Transfers?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How</th>
                  </tr>
                </thead>
                <tbody>
                  {transferData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.asset}</td>
                      <td className={`py-3 px-3 font-semibold ${item.transfers === 'No' ? 'text-[#DC3545]' : item.transfers === 'Yes' ? 'text-[#25C97D]' : 'text-[#F8D000]'}`}>{item.transfers}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE THREE THINGS THAT WILL SURPRISE YOU</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                order records, notes, and pipeline deals do not come over automatically in a standard Keap data export confirmed directly in GoHighLevel's own official guide, which describes deal recreation as a manual step. Keep your Keap subscription active as a read-only archive for 60–90 days minimum after migration, longer if you need to reference historical order data.
              </p>
            </div>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/keap-to-ghl-migration-guide.png"
                  alt="Keap to GoHighLevel migration: Data transfer, Campaign Builder rebuild, PlusThis replacement, and workflow overview"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Keap → GoHighLevel: Data transfer, Campaign Builder rebuild, PlusThis replacement, and phased cutover workflow</span>
              </div>
            </div>

            {/* Section 3: Export Data */}
            <h2 id="export-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Export Contacts and Data from Keap?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">1.</strong> Navigate to Contacts → People in Keap.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">2.</strong> Select the contacts to export, or use Select All.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">3.</strong> Click Export and choose CSV download.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">4.</strong> For exports over 1,000 contacts, enter your email address Keap sends a download link rather than an instant file, per GoHighLevel's official guide.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">5.</strong> Document (don't try to export) custom fields they need to be recreated manually in GHL. Screenshot the field list for reference.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">6.</strong> Securely back up the exported CSVs before starting the transformation process.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">TWO DATA-QUALITY ISSUES TO RESOLVE BEFORE IMPORT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                First, contacts without an email address Keap allows this, GHL does not, and any contact imported without one is silently skipped. A common workaround is assigning a placeholder unique email (a pattern like noemail-[keap-id]@yourdomain.com) so the contact still imports, with a follow-up workflow to collect the real address later. Second, contacts with multiple email addresses (Email1, Email2, Email3 in Keap) can create duplicate GHL contacts unless normalized to one primary email before import pick the most recently active address as primary and move others to a custom field for reference.
              </p>
            </div>

            {/* Section 4: Tags and Fields */}
            <h2 id="tags-fields" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Handle Keap Tags and Custom Fields?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap uses tags to encode segmentation, campaign entry conditions, and lifecycle state a single account might have hundreds or thousands of active tags. Not all of them should migrate as-is.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">TAG CLASSIFICATION APPROACH</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Segmentation tags migrate directly:</strong> tags grouping contacts by demographic, interest, or behavior (Customer, Prospect, Product-A-Buyer) become GHL tags on the imported contact.</li>
                <li><strong className="text-[#0E9BF0]">Campaign state tags get rebuilt as workflow state:</strong> tags tracking campaign progress (Welcome-Series-Day-3, Onboarding-Complete) don't migrate as tags they get rebuilt as state within the corresponding GHL workflow.</li>
                <li><strong className="text-[#0E9BF0]">Legacy tags get archived:</strong> tags from campaigns no longer running don't need to migrate. Document them separately if needed for compliance, then drop them from the import.</li>
                <li><strong className="text-[#0E9BF0]">Utility tags convert to custom fields:</strong> tags used as pseudo-fields (Preferred-Contact-Method-Email, VIP-Client) convert into proper GHL custom fields for cleaner data structure.</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For custom fields specifically: document every Keap custom field (name, data type, picklist values) from Admin → Settings → Custom Fields, recreate each one in GHL's Settings → Custom Fields with matching type, then map the CSV column headers to the GHL field names exactly any column without a matching field is silently dropped during import. Test with 100–200 contacts first to confirm every field appears correctly.
            </p>

            {/* Section 5: Rebuild Campaigns */}
            <h2 id="rebuild-campaigns" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Rebuild Keap Campaign Builder Sequences in GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap Campaign Builder uses a visual canvas with goals, decision nodes, sequences, and merge fields. GoHighLevel's Workflow Builder uses triggers, actions, wait steps, and if/else branches. The models are conceptually similar but there is no export/import path between them every actively-used campaign must be documented and rebuilt by hand.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">DOCUMENT EACH CAMPAIGN</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Business intent:</strong> what it achieves</li>
                <li><strong className="text-[#0E9BF0]">Entry goal:</strong> what starts it</li>
                <li><strong className="text-[#0E9BF0]">Sequence steps in order:</strong> what it does, step by step</li>
                <li><strong className="text-[#0E9BF0]">Decision nodes:</strong> conditional branches</li>
                <li><strong className="text-[#0E9BF0]">Exit goals:</strong> when it completes</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Then rebuild in GHL: recreate the trigger matching the entry goal, rebuild each action and wait step in order, replace every Keap merge field token (~ContactFirstName~) with its GHL custom-value equivalent ({'{{contact.first_name}}'}), and test end-to-end with yourself as a test contact before enabling for live traffic.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE OPPORTUNITY IN REBUILDING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                a campaign rebuild is a natural chance to retire automations that no longer fire, target campaigns that have ended, or run on assumptions that no longer hold in our experience, a meaningful share of long-running Keap accounts carry exactly this kind of dead weight. Migrating only what's actively used reduces rebuild time and produces a cleaner GHL environment. For the full Workflow Builder mechanics, see{' '}
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel's workflow automation guide</Link>.
              </p>
            </div>

            {/* Section 6: Appointments and Calendars */}
            <h2 id="appointments-calendars" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Appointments and Calendars
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This step is easy to overlook but is treated as its own phase in GoHighLevel's official Keap migration guide. List every active Keap appointment type along with its duration, availability rules, reminder settings, and any calendar integrations (Zoom, Google, Outlook). In GHL, recreate each one under Calendars → Appointment Types, matching duration and location settings, then reconnect Google or Outlook calendar sync so bookings don't create double-booking conflicts during the transition.
            </p>

            {/* Section 7: PlusThis Replacement */}
            <h2 id="plusthis-replacement" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. How Do You Replace PlusThis and Other Keap Integrations?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              PlusThis is the most common Keap add-on, extending Campaign Builder with appointment reminders, countdown timers, dynamic content, SMS integrations, and webinar sequences. None of it migrates each feature needs a GHL-native replacement or an alternative.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">PlusThis Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Replacement</th>
                    {/* <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th> */}
                  </tr>
                </thead>
                <tbody>
                  {plusThisReplacements.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghlReplacement}</td>
                      {/* <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every Zapier zap connected to Keap needs review some can be replaced with GHL's native integrations, others need rebuilding as GHL webhooks, and some can simply be reconnected using GHL as the new source system instead of Keap.
            </p>

            {/* Section 8: Cutover Process */}
            <h2 id="cutover-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. What Is the Phased Cutover Process?
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Week 1 route new leads to GHL.</strong> Update website forms and lead capture endpoints. Existing Keap contacts continue in their current Keap campaigns.</li>
              <li><strong className="text-[#1A2236]">Week 2 migrate active contacts.</strong> Export contacts currently in active nurture sequences or open pipelines, import to GHL, and rebuild the workflows they need.</li>
              <li><strong className="text-[#1A2236]">Week 3 validate deliverability and workflow accuracy.</strong> Confirm GHL is receiving leads, workflows fire correctly, email open rates are within range of the Keap baseline, and appointments book correctly. Warm up the new sending domain.</li>
              <li><strong className="text-[#1A2236]">Cutover</strong> once GHL performs consistently for 5–7 business days, route all inbound traffic to GHL. Keep Keap active as an archive for 60–90 days.</li>
              <li><strong className="text-[#1A2236]">Final export</strong> take one last full export from Keap (contacts, custom fields, tags) before eventual subscription cancellation, and store it securely.</li>
            </ol>

            {/* Section 9: Migration Comparison */}
            <h2 id="migration-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. How Does Keap Migration Compare to Zoho, HubSpot, or Salesforce?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap migrations are moderate complexity: easier than Salesforce, broadly similar to HubSpot, harder than Zoho primarily because of Campaign Builder's rebuild scope rather than data volume or object complexity.
            </p>

            {/* <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Keap</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Zoho</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.keap}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.zoho}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.salesforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              See the equivalents:{' '}
              <Link href="/blog/zoho-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Zoho to GoHighLevel migration</Link>,
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel migration</Link>,
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              <Link href="/blog/salesforce-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Salesforce to GoHighLevel migration</Link>. For how Keap compares across the full platform list, see{' '}
              <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-[#0E9BF0] hover:underline">which platform is easiest to migrate to GoHighLevel</Link>.
            </p>

            {/* Section 10: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              10. Frequently Asked Questions
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
              Want the migration handled end-to-end tag cleanup, Campaign Builder rebuild, and PlusThis replacement included?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free strategy call</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
                <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Which Platform Is Easiest to Migrate to GoHighLevel? →</Link>
                <Link href="/blog/zoho-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Zoho to GoHighLevel Migration →</Link>
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/salesforce-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Salesforce to GoHighLevel Migration →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to migrate from Keap without losing your campaigns?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles Campaign Builder migrations end-to-end. Keap audit, tag classification, data cleaning, custom field recreation, Campaign Builder rebuild in GHL Workflow Builder, PlusThis replacement, and phased cutover.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Strategy Call
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