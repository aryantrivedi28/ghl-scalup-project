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
  Target,
  Info,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import BookingModal from '@/components/BookingModal'
import { Button } from '../../../components/ui/button';

export default function HubSpotToGHLMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'the-25-day-deadline',
        'what-transfers',
        'migration-steps',
        'how-long',
        'the-two-mistakes',
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
      q: "What data transfers automatically from HubSpot to GoHighLevel?",
      a: "Contacts, custom properties (via field mapping), open deals, and tags transfer via CSV export and import. Automation workflows, email templates, landing pages, company associations, and deal activity history do not transfer automatically and must be rebuilt manually inside GoHighLevel."
    },
    {
      q: "How long does a HubSpot to GoHighLevel migration take?",
      a: "A straightforward migration with under 5,000 contacts and fewer than five active workflows takes 3–4 weeks. A standard agency migration with 5,000–20,000 contacts takes 4–6 weeks. Multi-client agency migrations with 30+ workflows typically take 8–12 weeks."
    },
    {
      q: "What happens to my HubSpot data if I cancel before finishing the migration?",
      a: "HubSpot provides a 25-day export window after cancellation. After that, the data is permanently deleted. Don't cancel until your GHL system is fully validated and has run in parallel for at least two weeks."
    },
    {
      q: "Do HubSpot workflows transfer to GoHighLevel automatically?",
      a: "No. Workflow logic triggers, branching conditions, and actions must be rebuilt manually in GHL's workflow builder. Contact-based workflows map most directly; deal- and ticket-based workflows require the underlying pipeline structure to be rebuilt first."
    },
    {
      q: "Can I migrate from HubSpot to GoHighLevel myself, or do I need help?",
      a: "It's possible to do it yourself if you're comfortable with CSV field mapping and rebuilding automation logic from scratch. For accounts with complex deal associations, multiple client sub-accounts, or 15+ active workflows, most teams find it faster to use a migration service rather than absorbing the learning curve mid-project."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'the-25-day-deadline', title: 'The 25-Day Deadline You Need to Know Before You Start' },
    { id: 'what-transfers', title: 'What Transfers From HubSpot to GoHighLevel (and What Breaks)' },
    { id: 'migration-steps', title: 'Step-by-Step: How the Migration Actually Works' },
    { id: 'how-long', title: 'How Long a HubSpot to GoHighLevel Migration Takes' },
    { id: 'the-two-mistakes', title: 'The Two Mistakes Unique to HubSpot Migrations' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const transferData = [
    { asset: 'Contacts (name, email, phone)', action: 'Transfers via CSV export/import', required: 'Clean and deduplicate before importing' },
    { asset: 'Custom contact properties', action: 'Requires field mapping', required: 'Create matching GHL custom fields first, then map during import' },
    { asset: 'Deal pipeline stages', action: 'Does not transfer as structure', required: 'Recreate pipeline stages manually in GHL, then import open deals' },
    { asset: 'Deal activity history & notes', action: 'Partial CSV export only', required: 'Export notes separately, import as GHL contact notes' },
    { asset: 'Company-to-contact associations', action: 'Does not transfer', required: 'Rebuild groupings using GHL custom fields or tags' },
    { asset: 'Active automation workflows', action: 'Does not transfer', required: 'Full rebuild required in GHL\'s workflow builder' },
    { asset: 'Email templates', action: 'Does not transfer', required: 'Recreate in GHL\'s email builder' },
    { asset: 'Landing pages and forms', action: 'Does not transfer', required: 'Rebuild in GHL\'s funnel/form builder' },
    { asset: 'Multi-branch workflow logic', action: 'Does not transfer', required: 'Rebuild using GHL If/Else conditions' },
    { asset: 'Email sending domain', action: 'Requires reconfiguration', required: 'Set up DKIM/SPF for GHL, warm the domain over 2–3 weeks' },
  ];

  const timelineData = [
    { type: 'Simple solo business', contacts: 'Under 5,000', workflows: 'Fewer than 5', timeline: '3–4 weeks' },
    { type: 'Standard small agency', contacts: '5,000–20,000', workflows: '5–15', timeline: '4–6 weeks' },
    { type: 'Complex growing agency', contacts: '20,000–50,000', workflows: '15–30+', timeline: '6–8 weeks' },
    { type: 'Enterprise (10+ client accounts)', contacts: '50,000+', workflows: '30+ across clients', timeline: '8–12 weeks' },
  ];

  const mistakesList = [
    { mistake: 'Cancelling before the 25-day window closes without full validation.', fix: 'Keep HubSpot active until you have run GHL in parallel for at least two weeks and confirmed everything works. There is no undo once HubSpot deletes your data.' },
    { mistake: 'Treating company-to-contact associations as optional.', fix: 'Rebuild groupings using GHL custom fields or tags skipping this means losing visibility into which contacts belong to which client account.' },
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
          <span className="text-[#1A2236] font-medium">HubSpot to GoHighLevel Migration 2026</span>
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
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 5+ years GHL experience · 200+ migrations completed · Updated 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Moving from HubSpot to GoHighLevel is a structural change, not a simple export-and-import. HubSpot organizes data relationally Companies contain Contacts, Contacts link to Deals through Associations, and Activities fan out across every object. GoHighLevel is contact-centric everything radiates from a flat Contact record. Understanding that mismatch before you export a single row is what separates a clean migration from weeks of manual cleanup afterward.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-white mb-2">
              Migrating from HubSpot to GoHighLevel involves four phases.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Exporting and cleaning your HubSpot data, rebuilding your pipelines and custom fields in GHL, recreating your automation
              workflows using GHL's trigger system, and running both platforms in parallel for 2–3 weeks before cutover.
              Contacts and custom properties transfer via CSV with field mapping. Deal history, company associations, and
              automation logic do not transfer automatically and must be rebuilt manually. A straightforward migration takes
              3–4 weeks; a multi-client agency migration typically takes 6–8 weeks or longer.
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
                5+ years GHL experience · 200+ systems built and migrated across real estate, healthcare, SaaS, and agencies globally.
                All migration steps verified against GoHighLevel's official documentation as of May 2026.
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
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle complete HubSpot to GHL migrations. 30-day post-migration support included.</p>
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

            {/* Section: The 25-Day Deadline */}
            <h2 id="the-25-day-deadline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              The 25-Day Deadline You Need to Know Before You Start
            </h2>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-6">
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                This is the single most important fact in this guide. HubSpot gives you <strong>25 days to export your data after you cancel your subscription.</strong> After that window closes, your data is permanently deleted from HubSpot's servers.
              </p>
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed mt-3">
                <strong>Do not cancel HubSpot until all three of these are true:</strong>
              </p>
              <ul className="text-sm md:text-base text-[#1A2236] leading-relaxed mt-2 list-disc pl-5 space-y-1">
                <li>Every contact, deal, and property has been exported and validated inside GoHighLevel</li>
                <li>Every active workflow has been rebuilt in GHL and tested with real contacts</li>
                <li>You have run both platforms in parallel for at least two weeks with no critical errors</li>
              </ul>
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed mt-3">
                Cancelling early before validating the GHL side is actually working is the single most expensive mistake in a HubSpot migration, because there is no way to go back and re-export once the 25-day window closes.
              </p>
            </div>

            {/* Section: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Transfers From HubSpot to GoHighLevel (and What Breaks)
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

            {/* HubSpot Tiers Note */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A NOTE ON HUBSPOT TIERS</span>
              </div>
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                What you can export depends on your plan. Starter accounts have limited API access and fewer custom property slots to begin with. Professional and Enterprise accounts have full API access, which makes bulk export and validation considerably faster if your team has developer resources, using the API instead of manual CSV export is worth the setup time on larger accounts.
              </p>
            </div>

            {/* Workflow Types Note */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A NOTE ON WORKFLOW TYPES</span>
              </div>
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                HubSpot workflows fall into three categories contact-based, deal-based, and ticket-based. Contact-based workflows (the most common) map most directly to GHL's trigger system. Deal-based and ticket-based workflows generally require rebuilding the underlying pipeline structure in GHL before the workflow logic itself, since GHL doesn't have a separate "ticket" object ticket-style processes are usually rebuilt as a dedicated pipeline.
              </p>
            </div>

            {/* Section: Migration Steps */}
            <h2 id="migration-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Step-by-Step: How the Migration Actually Works
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Audit your HubSpot account before touching anything.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">List every active workflow (noting whether it's contact-, deal-, or ticket-based), every pipeline stage, every custom property, and every integration. Migration is the best opportunity you'll get to remove years of unused automation clutter.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Export your HubSpot data.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Go to Contacts → Export for your contact database. Export Deals separately from Sales → Deals. Export deal notes and activity logs on their own these do not travel with the standard contact/deal export.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Build your GoHighLevel infrastructure before importing anything.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Create your custom fields to match your HubSpot properties, build your pipeline stages, and set up your email domain and phone number. For the domain authentication and warmup process specifically, see{' '}
                  <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GHL's workflow automation guide</Link> the setup steps are the same regardless of which platform you're migrating from.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Import contacts and validate immediately.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Map each CSV column to its GHL field, then spot-check 50–100 imported contacts before doing anything else. Catching a mapping error now is far cheaper than catching it after workflows are live.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Rebuild your automation workflows, starting with your highest-volume ones.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">For contact-based workflows, recreate the trigger and action sequence directly. For deal- and ticket-based workflows, confirm your GHL pipeline structure matches before rebuilding the automation logic on top of it. Use If/Else conditions to replicate HubSpot's branching logic.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Run both platforms in parallel for 2–3 weeks.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">New leads flow into GHL; existing active deals continue running in HubSpot until they close. This overlap period is what surfaces gaps before you're fully committed.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">7</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Cut over, then cancel and remember the 25-day window.</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Redirect all lead-capture points, update embed codes, and take a final backup export from HubSpot before cancelling.</p>
              </div>
            </div>

            {/* Section: How Long */}
            <h2 id="how-long" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Long a HubSpot to GoHighLevel Migration Takes
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These figures run higher than a general GoHighLevel migration's baseline because of HubSpot's relational data structure rebuilding associations and deal history adds real time that a simpler platform migration wouldn't require. For how these compare across other source platforms, see the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">general GHL migration timeline guide</Link>.
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

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHAT DRIVES THE TIMELINE</span>
              </div>
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                The contact import itself takes hours, not weeks. <strong>The automation rebuild is what drives the timeline</strong> a complex multi-branch workflow can take 4–8 hours to correctly replicate in GHL's builder.
              </p>
            </div>

            {/* Section: The Two Mistakes */}
            <h2 id="the-two-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Two Mistakes Unique to HubSpot Migrations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most migration mistakes skipping domain warmup, migrating dead automations, cutting over without parallel testing apply to any platform switch, and we've covered those in detail in{' '}
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">8 common GHL migration mistakes</Link>.
              Two mistakes, though, are specific to HubSpot's structure:
            </p>

            <div className="space-y-4 mb-6">
              {mistakesList.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.mistake}</p>
                      <p className="text-sm text-[#1A2236] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
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
              Deciding whether to leave HubSpot in the first place? See our{' '}
              <Link href="/blog/gohighlevel-vs-hubspot" className="text-[#0E9BF0] hover:underline">honest GoHighLevel vs. HubSpot comparison</Link>.
              Ready to have your migration handled end-to-end?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link> we'll review your account and give you a realistic timeline and fixed quote.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration Service →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">General GHL Migration Timeline Guide →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to move from HubSpot to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Don't risk your data. We've done this 200+ times. Field mapping, workflow recreation, pipeline restructure,
                  email warmup, and 30-day post-migration support all handled. Book a free migration assessment.
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