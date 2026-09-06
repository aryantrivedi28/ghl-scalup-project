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
  Shield,
  Mail,
  Star,
  AlertTriangle,
  Rocket,
  Target,
  Search,
  FileCheck,
  MessageCircle,
  Phone,
  Info,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import BookingModal from '@/components/BookingModal'
import { Button } from '../../../components/ui/button';

export default function ActiveCampaignToGHLMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'what-transfers',
        'migration-steps',
        'email-deliverability',
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
      q: "Can automations be migrated from ActiveCampaign to GoHighLevel?",
      a: "No, not automatically. AC automations use a different trigger model than GHL workflows. Each one must be rebuilt manually matching the trigger, recreating the action sequence, and rebuilding conditional logic with GHL's If/Else conditions. Complex multi-branch automations take roughly 4–8 hours each to rebuild."
    },
    {
      q: "Will my email deliverability suffer during the switch?",
      a: "Typically yes, short-term. ActiveCampaign's deliverability infrastructure is more mature than GHL's. Complete DKIM/SPF/DMARC setup and a 2–3 week domain warmup before full sending to minimize the impact."
    },
    {
      q: "How do ActiveCampaign tags and lists migrate?",
      a: "Tags migrate directly via CSV column mapping. Lists don't have a direct GHL equivalent they're typically rebuilt as tags or Smart Lists. Map both systems onto a single, clearly documented tagging structure before importing to avoid duplicate segments."
    },
    {
      q: "Does GoHighLevel have lead scoring like ActiveCampaign?",
      a: "Not natively. Recreate it with a numeric custom field incremented or decremented by workflow actions based on contact behavior."
    },
    {
      q: "How long does the migration take?",
      a: "A typical account with 5,000–20,000 contacts and 5–15 automations takes 2–3 weeks. Complex accounts with 50+ automations and the Pipelines add-on in use take 4–6 weeks."
    },
    {
      q: "Can I do this myself, or should I hire help?",
      a: "If your automation logic is simple and you're comfortable with CSV mapping, yes. For 50+ automations, active lead scoring, or deep third-party integrations, most teams find a managed migration faster than the learning curve."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: 'Why This Migration Is Different From Most' },
    { id: 'what-transfers', title: 'What Transfers vs. What Breaks' },
    { id: 'migration-steps', title: 'Step-by-Step: How the Migration Works' },
    { id: 'email-deliverability', title: 'The Email Deliverability Question Honest Answer' },
    { id: 'common-mistakes', title: 'The Two Mistakes Unique to ActiveCampaign Migrations' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const transferData = [
    { asset: 'Contacts (name, email, phone)', action: 'Direct (CSV)', required: 'Clean and deduplicate before importing' },
    { asset: 'Tags', action: 'Direct (CSV mapping)', required: 'Create matching tags in GHL first' },
    { asset: 'Custom fields', action: 'Direct, requires pre-mapping', required: 'Build matching fields before importing' },
    { asset: 'Lists', action: 'Tags / Smart Lists', required: 'GHL has no separate "list" object' },
    { asset: 'Automations', action: 'Manual rebuild', required: 'Trigger and branching logic rebuilt from scratch' },
    { asset: 'Forms', action: 'Manual rebuild', required: 'Update embed codes on your website' },
    { asset: 'One-off email campaigns', action: 'Manual rebuild', required: 'Recreate templates in GHL\'s builder' },
    { asset: 'Segmentation logic', action: 'Tags + Smart List conditions', required: 'Underlying mechanism differs' },
    { asset: 'Contact/lead scoring (Plus+)', action: 'Custom field + workflow logic', required: 'No native scoring module in GHL' },
    { asset: 'Deals/Pipelines (add-on)', action: 'Partial (structure manual, data CSV)', required: 'Only relevant if using this add-on' },
    { asset: 'Site/event tracking history', action: 'Not transferable', required: 'Tracking restarts fresh in GHL' },
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
          <span className="text-[#1A2236] font-medium">ActiveCampaign to GoHighLevel Migration 2026</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">ActiveCampaign to GHL</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Email Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            ActiveCampaign to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">What Transfers, What Breaks (2026)</span>
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
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            ActiveCampaign users typically have deeper, more mature email automation than users of other platforms sophisticated branching sequences, contact scoring models, and tightly segmented lists built up over years. That makes this less of a data move and more of an architecture rebuild. Still deciding whether ActiveCampaign or GoHighLevel is the right fit for your business? See our{' '}
            <Link href="/blog/gohighlevel-vs-activecampaign" className="text-[#0E9BF0] hover:underline">full ActiveCampaign vs. GoHighLevel comparison</Link>. Weighing several source platforms at once? Check{' '}
            <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-[#0E9BF0] hover:underline">which platform is easiest to migrate to GoHighLevel</Link> first. This guide assumes you've already settled on ActiveCampaign as your starting point and covers the technical migration itself.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Contacts, tags, and custom field values transfer from ActiveCampaign to GoHighLevel via CSV export and import. Automations, lead scoring, and conditional logic do not transfer and must be rebuilt manually as GHL workflows. Expect a short-term email deliverability dip during the switch mitigate it by warming your GHL sending domain over 2–3 weeks before sending to your full list. A typical account with 5,000–20,000 contacts and 5–15 automations takes 2–3 weeks to migrate.
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
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle complete ActiveCampaign to GHL migrations. 30-day post-migration support included.</p>
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

            {/* Section: Why This Migration Is Different */}
            <h2 id="why-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Why This Migration Is Different From Most
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              ActiveCampaign users typically have deeper, more mature email automation than users of other platforms sophisticated branching sequences, contact scoring models, and tightly segmented lists built up over years. That makes this less of a data move and more of an architecture rebuild. Still deciding whether ActiveCampaign or GoHighLevel is the right fit for your business? See our{' '}
              <Link href="/blog/gohighlevel-vs-activecampaign" className="text-[#0E9BF0] hover:underline">full ActiveCampaign vs. GoHighLevel comparison</Link>. Weighing several source platforms at once? Check{' '}
              <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-[#0E9BF0] hover:underline">which platform is easiest to migrate to GoHighLevel</Link> first. This guide assumes you've already settled on ActiveCampaign as your starting point and covers the technical migration itself.
            </p>

            {/* Section: What Transfers vs. What Breaks */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Transfers vs. What Breaks
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The rule is simple: data transfers, logic does not. Contacts, tags, and custom field values export from AC as CSV and import cleanly into GHL. Every automation, scoring rule, and conditional trigger the logic that actually runs your business has to be rebuilt from scratch inside GHL's workflow builder.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ActiveCampaign Asset</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Equivalent</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration Method</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {transferData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.asset}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.action}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.required}</td>
                      {/* <td className="py-3 px-3 text-[#0E9BF0]">{item.notes || '}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* The list-vs-tag mapping risk box */}
            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">THE LIST-VS-TAG MAPPING RISK</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                ActiveCampaign runs two segmentation systems at once contacts belong to lists and separately carry tags. GoHighLevel has one system: tags, plus Smart Lists built from tag conditions. If you map both AC systems onto GHL tags without a clear naming convention beforehand, you'll end up with duplicate or conflicting segments. Build your tag-mapping document which AC list becomes which GHL tag, and which AC tag stays a tag before importing a single contact, not after.
              </p>
            </div>

            {/* Plan Tiers and Pipelines Add-On Note */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A NOTE ON PLAN TIERS AND THE PIPELINES ADD-ON</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                What you actually need to migrate depends on your ActiveCampaign setup. Contact/lead scoring requires the Plus plan or above if you're on Starter, there's no scoring data to migrate. Deals and Pipelines functionality is currently sold as a separate add-on (Sales Engagement/Pipelines) rather than bundled into any base plan if you haven't purchased that add-on, you likely have no deal or pipeline data to worry about. ActiveCampaign's plan packaging has changed more than once in recent years, so it's worth a quick check against your own account before assuming which of these apply to you.
              </p>
            </div>

            {/* Section: Step-by-Step */}
            <h2 id="migration-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Step-by-Step: How the Migration Works
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Audit every automation before touching anything.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">List each active automation with its trigger, purpose, and monthly volume. This step typically reveals that a meaningful share of AC automations are legacy and can be left behind entirely. For the full pre-migration process beyond just automations, work through the{' '}
                  <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">GoHighLevel migration checklist</Link>.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Export contacts, tags, and custom fields as CSV.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Include all custom field and tag columns in the export. Clean it first remove hard bounces, unsubscribes, and invalid addresses.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Build your GHL infrastructure before importing.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Create custom fields, pipeline stages (if applicable to your account), and configure your email domain with DKIM/SPF/DMARC this needs to be done before any contact is imported.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Import and validate immediately.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Map each CSV column to its GHL field, then spot-check 20–30 random contacts before building any automations on top of the import.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Rebuild automations as GHL workflows, highest-volume first.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Recreate each active AC automation's trigger and logic using GHL's If/Else conditions. Test with a real contact before activating.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Run parallel for 2–3 weeks, then cut over.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Keep AC active while GHL runs alongside it. Warm your sending domain (see below) during this window. Cancel AC only after two error-free weeks in GHL.</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For AC-specific factors that stretch or shorten this timeline automation count, whether you're using the Pipelines add-on, list size these compound with the general framework covered in the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL migration timeline guide</Link>.
            </p>

            {/* Section: Email Deliverability */}
            <h2 id="email-deliverability" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Email Deliverability Question Honest Answer
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the most important concern for anyone migrating from ActiveCampaign, and it deserves a direct answer: <strong className="text-[#1A2236]">ActiveCampaign has more mature email deliverability infrastructure than GoHighLevel.</strong> Switching means switching sending infrastructure, and there will be a short-term deliverability dip.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-6">
              <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-2">How to minimize it:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-[#5C6880] leading-relaxed">
                <li>Complete DKIM, SPF, and DMARC authentication in GHL before sending anything</li>
                <li>Warm your GHL sending domain over 2–3 weeks, starting with 50–100 emails/day to your most engaged contacts</li>
                <li>Clean your list before importing remove bounces and unengaged contacts</li>
                <li>Watch open rates, click rates, and bounce rates closely on your first 10–15 campaigns</li>
              </ul>
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed mt-3">
                Agencies that complete domain authentication and warmup correctly typically see deliverability stabilize within 4–6 weeks. Skipping warmup and sending to a full list on day one can take 3–6 months to recover from.
              </p>
            </div>

            {/* Section: The Two Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Two Mistakes Unique to ActiveCampaign Migrations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              General migration mistakes cancelling too early, skipping domain warmup, migrating without auditing first apply to any platform switch and are covered in{' '}
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">8 common GHL migration mistakes</Link>. Two mistakes are specific to what makes ActiveCampaign's structure different:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#1A2236] mb-1">Assuming lead scoring carries over.</p>
                    <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> It doesn't, and there's no GHL equivalent module. You have to rebuild it manually a numeric custom field that increments or decrements based on workflow triggers (form submitted, email opened, page visited). Teams that don't plan for this go live with no scoring at all and only notice once sales asks where the "hot lead" flag went.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#1A2236] mb-1">Collapsing lists and tags into a single mapping without a plan.</p>
                    <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> Covered in detail above get your tag-mapping document written before you import, not after.</p>
                  </div>
                </div>
              </div>
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
              Deciding whether ActiveCampaign or GoHighLevel is the right fit in the first place? See our{' '}
              <Link href="/blog/gohighlevel-vs-activecampaign" className="text-[#0E9BF0] hover:underline">full comparison</Link>. Ready to have the migration handled end-to-end, deliverability included?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-vs-activecampaign" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign vs GoHighLevel: Honest 2026 Comparison →</Link>
                <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Which CRM Is Easiest to Migrate to GoHighLevel? →</Link>
                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Moving from ActiveCampaign to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Don't skip the email warmup. We'll make sure you don't. Automation audit, contact migration, tag mapping, domain warmup scheduling, and GHL workflow rebuild all handled. Book a free migration assessment.
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