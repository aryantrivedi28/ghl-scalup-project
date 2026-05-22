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
  Clock
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function HubSpotToGHLMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'what-transfers',
        'migration-steps',
        'how-long',
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
      q: "Can you migrate all data from HubSpot to GoHighLevel?",
      a: "Most contact and deal data can be migrated from HubSpot to GoHighLevel via CSV export and import. What transfers: contacts, custom properties (via field mapping), open deals, and tags. What does not transfer automatically: automation workflows, email templates, landing pages, company associations, deal activity history, and multi-branch workflow logic. These must be rebuilt manually inside GoHighLevel using the equivalent tools."
    },
    {
      q: "How long does a HubSpot to GoHighLevel migration take?",
      a: "A straightforward migration with under 5,000 contacts and fewer than five active workflows takes 3–4 weeks. A standard agency migration with 5,000–20,000 contacts and 5–15 workflows takes 4–6 weeks. A complex migration with multiple client accounts or 30+ active workflows takes 6–8 weeks or longer. The contact import itself is fast — the workflow recreation is what drives the timeline."
    },
    {
      q: "What breaks when migrating from HubSpot to GoHighLevel?",
      a: "The main things that break: HubSpot automation workflows (the trigger logic, branching conditions, and action sequences do not transfer and must be rebuilt), company-to-contact associations, deal activity history and notes (partial — exportable as CSV but not auto-imported), email sending domain (requires DKIM/SPF setup and warmup period), and any HubSpot-specific integrations that do not have GHL equivalents."
    },
    {
      q: "How much does it cost to migrate from HubSpot to GoHighLevel?",
      a: "DIY migration costs only the time of your team members. Professional migration services typically start from a project fee covering data export, field mapping, pipeline setup, workflow recreation, and parallel testing. Most agencies find the first month of savings on HubSpot subscriptions covers the migration cost entirely, with ongoing savings of $500–8,900+ per month depending on client count."
    },
    {
      q: "Should I cancel HubSpot before completing the migration?",
      a: "No. Keep HubSpot active until: your contacts are fully imported and validated in GHL, all active workflows are rebuilt and tested, you have run both platforms in parallel for at least two weeks, and all lead capture points are redirected to GHL. HubSpot provides a 25-day data export window after cancellation — after that, data is deleted. Cancelling prematurely is the most costly migration mistake."
    },
    {
      q: "Can GHL Scale Up handle our HubSpot to GoHighLevel migration?",
      a: "Yes. GHL Scale Up manages end-to-end HubSpot to GoHighLevel migrations including data export and cleaning, field mapping, pipeline restructure, workflow recreation with trigger replication, email domain configuration and warmup, integration setup, and parallel testing. We have completed 200+ GHL builds including migrations from HubSpot, Salesforce, Zoho, and ActiveCampaign."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why Agencies Migrate from HubSpot to GoHighLevel' },
    { id: 'what-transfers', title: '2. What Transfers from HubSpot — and What Breaks' },
    { id: 'migration-steps', title: '3. How to Migrate from HubSpot to GoHighLevel (Step-by-Step)' },
    { id: 'how-long', title: '4. How Long Does a HubSpot to GoHighLevel Migration Take?' },
    { id: 'common-mistakes', title: '5. Common HubSpot Migration Mistakes to Avoid' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const comparisonData = [
    { item: 'What agencies pay on HubSpot', cost: '$890/mo (Marketing Hub Pro) × 10 clients = $8,900+/mo' },
    { item: 'What they pay on GoHighLevel', cost: '$297/mo flat for unlimited clients' },
    { item: 'Per-seat fees for every team member', cost: 'Unlimited users on every plan' },
    { item: 'Per-contact fees above 2,000 contacts', cost: 'Unlimited contacts on every plan' },
    { item: 'White-label option', cost: 'Full white-label from $297/mo' },
    { item: 'Native SMS', cost: 'Native SMS on every plan (HubSpot: requires third-party)' },
    { item: 'Sub-account architecture for client isolation', cost: 'Built in from day one (HubSpot: none)' },
  ];

  const transferData = [
    { asset: 'Contacts (name, email, phone)', action: 'Transfers via CSV import', required: 'Clean and deduplicate before importing' },
    { asset: 'Custom contact properties', action: 'Requires field mapping to GHL custom fields', required: 'Create GHL custom fields first, then map during import' },
    { asset: 'Deal pipeline stages', action: 'Requires pipeline restructure in GHL', required: 'Recreate pipeline stages manually, then import open deals' },
    { asset: 'Active automation workflows', action: 'Does NOT transfer', required: 'Full trigger replication and workflow recreation required' },
    { asset: 'Email templates', action: 'Does not transfer', required: 'Recreate in GHL email builder' },
    { asset: 'Landing pages and forms', action: 'Does not transfer', required: 'Rebuild in GHL funnel builder' },
    { asset: 'Deal activity history and notes', action: 'Partial — CSV only', required: 'Export deal notes, import as contact notes in GHL' },
    { asset: 'HubSpot "company" associations', action: 'Does not transfer cleanly', required: 'Rebuild company groupings using GHL custom fields' },
    { asset: 'Multi-branch workflow logic', action: 'Does not transfer', required: 'Rebuild using GHL If/Else conditions' },
    { asset: 'Email sending domain', action: 'Requires DNS reconfiguration', required: 'Set up DKIM/SPF for GHL, warm domain over 2–3 weeks' },
  ];

  const timelineData = [
    { type: 'Simple — solo business', contacts: 'Under 5,000', workflows: 'Fewer than 5', timeline: '3–4 weeks' },
    { type: 'Standard — small agency', contacts: '5,000–20,000', workflows: '5–15', timeline: '4–6 weeks' },
    { type: 'Complex — growing agency', contacts: '20,000–50,000', workflows: '15–30+', timeline: '6–8 weeks' },
    { type: 'Enterprise — 10+ client accounts', contacts: '50,000+', workflows: '30+ across clients', timeline: '8–12 weeks' },
  ];

  const mistakesList = [
    { mistake: 'Cancelling HubSpot before the migration is validated', fix: 'Keep HubSpot active until you have run GHL in parallel for at least two weeks and confirmed everything works.' },
    { mistake: 'Migrating every workflow without reviewing whether it should exist', fix: 'Audit your workflows first and only rebuild what actively serves a current business purpose.' },
    { mistake: 'Skipping email domain warmup', fix: 'Warm your domain over 2–3 weeks of progressively increasing send volume before full sending.' },
    { mistake: 'Trying to migrate all client accounts simultaneously', fix: 'Migrate one client account completely first, validate, document, then apply learnings to the next.' },
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
          <span className="text-[#1A2236] font-medium">HubSpot to GoHighLevel Migration 2026</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">HubSpot to GHL</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Migrate from HubSpot to GoHighLevel:<br />
            <span className="text-[#F8D000]">Step-by-Step Guide (2026)</span>
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Builds Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Moving from HubSpot to GoHighLevel is one of the most impactful infrastructure decisions 
            a marketing agency can make — and one of the easiest to get wrong. This guide covers exactly 
            what the migration involves, what breaks during the process, and how to move your contacts, 
            pipelines, and workflows without losing data or disrupting client operations.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer — Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Migrating from HubSpot to GoHighLevel involves four core phases.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Export and clean your HubSpot data, rebuild your pipelines and custom fields in GHL, recreate your automation 
                workflows using GHL's trigger system, and run both platforms in parallel for 2–3 weeks before cutting over. 
                Deal history, complex multi-branch workflows, and HubSpot's company associations do not transfer automatically 
                — these must be rebuilt manually. A straightforward migration with clean data takes 4–6 weeks. A complex 
                agency migration with 10+ clients typically takes 6–8 weeks.
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
              1. Why Agencies Migrate from HubSpot to GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The driving reason is almost always cost combined with architecture. HubSpot is built for a single company's 
              internal marketing and sales team. GoHighLevel is built for agencies managing multiple client accounts. 
              When those two models collide, the economics become impossible to ignore.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2">What agencies pay on HubSpot</h3>
                <ul className="space-y-1 text-sm text-[#1A2236]">
                  {comparisonData.filter((_, i) => i % 2 === 0).map((item, idx) => (
                    <li key={idx} className="flex justify-between border-b border-[rgba(0,0,0,0.05)] py-1">
                      <span>{item.item}</span>
                      <span className="font-semibold text-[#DC3545]">{item.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2">What they pay on GoHighLevel</h3>
                <ul className="space-y-1 text-sm text-[#1A2236]">
                  {comparisonData.filter((_, i) => i % 2 !== 0).map((item, idx) => (
                    <li key={idx} className="flex justify-between border-b border-[rgba(0,0,0,0.05)] py-1">
                      <span>{item.item}</span>
                      <span className="font-semibold text-[#25C97D]">{item.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Beyond cost: HubSpot has no native SMS, no AI Voice Agent, no white-label capability, and no sub-account model 
              for managing multiple client accounts from one dashboard. For a deeper comparison: 
              <Link href="/blog/gohighlevel-vs-hubspot" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
            </p>

            {/* Section 2: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Transfers from HubSpot — and What Breaks
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Understanding the structural mismatch before you export a single record is what separates a clean migration 
              from weeks of manual cleanup. HubSpot uses a relational schema: Companies contain Contacts, Contacts link to 
              Deals via associations, and Activities fan out across every object. GoHighLevel is contact-centric: everything 
              radiates from a flat Contact record.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot Asset</th>
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

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE MOST COSTLY MISTAKE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                HubSpot gives you <strong className="text-[#1A2236]">25 days to export your data after you cancel.</strong> 
                After that window closes, your data is deleted. Do not cancel HubSpot until: all contact data is exported and 
                validated in GHL, all workflows are rebuilt and tested, and you have run parallel operations for at least 2 weeks.
              </p>
            </div>

            {/* Section 3: Migration Steps */}
            <h2 id="migration-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Migrate from HubSpot to GoHighLevel (Step-by-Step)
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Audit your HubSpot account before touching anything</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">List every active workflow, pipeline stage, custom contact property, and integration. Identify what is actively used vs legacy clutter. Migration is your best opportunity to clean up years of technical debt.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Export your HubSpot data</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In HubSpot, go to Contacts → Export to download your contact database as a CSV. Export Deals from Sales → Deals. Export deal notes and activity logs separately — these will not carry over automatically.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Build your GoHighLevel infrastructure</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Create your custom fields (field mapping), build your pipeline stages (pipeline restructure), configure your GHL email domain with DKIM/SPF/DMARC, and set up your phone number with A2P 10DLC registration.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Import contacts and validate</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Import your cleaned contact CSV into GoHighLevel via Contacts → Import. Map each CSV column to the corresponding GHL field. After import, run a data validation check on 50–100 contacts.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Recreate your automation workflows (trigger replication + workflow recreation)</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">For each active HubSpot workflow, rebuild the equivalent in GHL. Start with your highest-volume workflows. Use GHL's If/Else conditions to replicate branching logic. Test every workflow before activating.</p>
                <p className="text-sm text-[#0E9BF0] leading-relaxed ml-9 mt-1">→ Need help with workflows? <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link></p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Run parallel operations for 2–3 weeks</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Keep HubSpot active and run both platforms simultaneously. New leads enter GHL. Existing active deals continue in HubSpot. This parallel period reveals gaps before you are fully committed.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">7</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Cut over and cancel HubSpot</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Redirect all lead capture points to GHL. Update embed codes. Run a final data export from HubSpot as backup. Then cancel your HubSpot subscription.</p>
              </div>
            </div>

            {/* Section 4: How Long */}
            <h2 id="how-long" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Long Does a HubSpot to GoHighLevel Migration Take?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Timeline depends on complexity — specifically the number of active workflows, the volume and cleanliness of your contact data, 
              and whether you are migrating one account or multiple client accounts.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Contacts</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Active Workflows</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Estimated Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.contacts}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.workflows}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHAT DRIVES TIMELINE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The contact import itself takes hours. <strong>The automation rebuild is what takes weeks.</strong> 
                A complex HubSpot workflow with 10+ branches and conditional logic can take 4–8 hours per workflow to correctly replicate in GHL.
              </p>
            </div>

            {/* Section 5: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Common HubSpot Migration Mistakes to Avoid
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
                <span className="text-sm font-bold text-[#F8D000]">WE HANDLE THE MIGRATION FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up manages complete HubSpot to GoHighLevel migrations — contact export and cleaning, field mapping, 
                pipeline restructure, workflow recreation, email domain configuration, and parallel testing.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free migration assessment at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                → Learn more about our <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel migration service →</Link>
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
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration Service →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to move from HubSpot to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Don't risk your data. We've done this 200+ times. Field mapping, workflow recreation, pipeline restructure, 
                  email warmup, and 30-day post-migration support — all handled. Book a free migration assessment.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Migration Assessment
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
                5+ years GHL experience · 200+ systems built and migrated across real estate, healthcare, SaaS, and agencies globally. 
                All migration steps verified against GoHighLevel's official documentation as of May 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Need Help Migrating?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle complete HubSpot to GHL migrations. 30-day post-migration support included.</p>
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