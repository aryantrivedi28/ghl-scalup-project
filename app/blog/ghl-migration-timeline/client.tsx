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
  GraduationCap,
  ArrowUpRight,
  HelpCircle,
  Timer,
  Trash2,
  Download,
  BarChart3,
  PieChart,
  Workflow
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GHLMigrationTimelineClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'timeline-by-platform',
        'what-drives-timeline',
        'migration-phases',
        'diy-vs-expert',
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
      q: "How long does a GoHighLevel migration take?",
      a: "A simple GoHighLevel migration with a small contact list and fewer than 5 active automations takes 1 to 2 weeks. A standard migration with 5 to 20 automations takes 3 to 5 weeks. A complex migration with 20 or more automations, membership content, or multiple client accounts takes 6 to 10 weeks. The contact import itself takes minutes. The automation rebuild is what determines the total timeline. Each complex automation with multiple branches and conditional logic can take 4 to 8 hours to rebuild correctly in GHL."
    },
    {
      q: "What is the biggest factor in GoHighLevel migration timeline?",
      a: "The number of active automations that need to be rebuilt, not the size of your contact database. Importing contacts is a CSV process that takes minutes regardless of volume. Rebuilding automations is a manual process that takes hours per workflow. A business with 50,000 contacts and 3 simple workflows migrates faster than a business with 5,000 contacts and 25 complex sequences. Before starting any migration, audit which automations are actively generating results and only rebuild those. This single step reduces migration timeline more than any other."
    },
    {
      q: "Can you speed up a GoHighLevel migration?",
      a: "Yes, in three ways. First, audit and cut your automations before migration only rebuild sequences that are actively driving results. Second, clean your contact data before import dirty data causes validation delays that slow everything down. Third, work with a GHL migration specialist who has an established process rather than learning the platform while migrating. GHL Scale Up typically completes standard migrations 3 to 4 times faster than DIY timelines because we have resolved all the common blockers (DKIM setup, A2P registration, Stripe reconnection, workflow troubleshooting) dozens of times before."
    },
    {
      q: "How long does it take to rebuild automations in GoHighLevel?",
      a: "A simple linear email sequence with 3 to 5 steps takes 30 to 60 minutes to rebuild in GHL's workflow builder. A standard sequence with 10 steps, basic if/else branching, and a couple of trigger types takes 2 to 4 hours. A complex automation with 15 or more steps, multi-level branching, lead scoring triggers, deal stage conditions, and webhook calls takes 4 to 8 hours. These estimates assume you are already comfortable with GHL's workflow builder. For someone learning GHL while migrating, add 50 to 100 percent to these times."
    },
    {
      q: "Should I run both platforms in parallel during a GHL migration?",
      a: "Yes always. Running both the old platform and GHL simultaneously for at least 1 to 2 weeks before cutting over is one of the most important steps in a safe migration. New leads enter GHL. Contacts already active in sequences in the old platform complete those sequences before moving. This parallel period reveals any gaps in your GHL setup while you still have a fallback. Cutting over too quickly cancelling the old platform before GHL is fully validated is the most common cause of data loss and automation failures in self-managed migrations."
    },
    {
      q: "How long should I keep my old platform active during a GHL migration?",
      a: "Keep your old platform active until: all contacts are imported and validated in GHL, all active automations are rebuilt and tested in GHL, you have run both platforms in parallel for a minimum of 1 to 2 weeks, and all lead capture points (website forms, ad integrations, landing pages) are redirected to GHL. For HubSpot users specifically: HubSpot provides a 25-day data export window after cancellation after that, data is permanently deleted. Do not cancel HubSpot until the migration is fully complete and validated."
    },
    {
      q: "How much does a GoHighLevel migration cost?",
      a: "Migration project fees at GHL Scale Up depend on the number of active automations, contact volume, and platform complexity. A simple migration is priced as a fixed-fee project. Complex migrations with 20 or more automations and multiple client accounts are quoted after a free assessment. Most clients find that the first 1 to 2 months of savings from cancelling their old platform covers the migration cost entirely, with ongoing savings of several hundred to several thousand dollars per month thereafter."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'timeline-by-platform', title: '1. How Long Does GoHighLevel Migration Take by Platform?' },
    { id: 'what-drives-timeline', title: '2. What Actually Drives the Migration Timeline?' },
    { id: 'migration-phases', title: '3. What Happens in Each Phase of a GHL Migration?' },
    { id: 'diy-vs-expert', title: '4. DIY vs Expert Migration How Does the Timeline Change?' },
    { id: 'faq', title: '5. Frequently Asked Questions' },
  ];

  const platformTimelineData = [
    { platform: 'HubSpot to GHL', simple: '2 to 3 weeks', standard: '3 to 5 weeks', complex: '6 to 8 weeks', drivers: 'Workflow count, custom objects, deal history depth, multi-client accounts' },
    { platform: 'ClickFunnels to GHL', simple: '1 to 2 weeks', standard: '2 to 3 weeks', complex: '3 to 5 weeks', drivers: 'Number of funnels, email sequences, membership areas, payment integrations' },
    { platform: 'ActiveCampaign to GHL', simple: '2 to 3 weeks', standard: '3 to 5 weeks', complex: '5 to 7 weeks', drivers: 'Automation complexity, lead scoring models, deep list segmentation, email warmup' },
    { platform: 'Kajabi to GHL', simple: '2 to 4 weeks', standard: '4 to 6 weeks', complex: '6 to 9 weeks', drivers: 'Course content rebuild (manual), community migration, drip schedules, student re-enrolment' },
    { platform: 'Zoho CRM to GHL', simple: '1 to 3 weeks', standard: '3 to 4 weeks', complex: '4 to 6 weeks', drivers: 'Custom modules, blueprint workflows, territory management, Zoho-specific field types' },
    { platform: 'Salesforce to GHL', simple: '3 to 5 weeks', standard: '5 to 8 weeks', complex: '8 to 12 weeks', drivers: 'Object complexity, custom fields, approval processes, enterprise integrations' },
  ];

  const automationRebuildTimes = [
    { automations: '1 to 5 simple sequences', time: '4 to 10 hours total' },
    { automations: '5 to 15 mixed sequences', time: '15 to 40 hours total' },
    { automations: '15 to 30 complex sequences', time: '40 to 80 hours total' },
    { automations: '30+ sequences with deep conditional logic', time: '80 to 150+ hours total' },
  ];

  const migrationPhases = [
    { phase: 'Phase 1: Audit and scoping', duration: '3 to 5 days', description: 'Map all contacts, automations, pipelines, integrations, and content. Identify what transfers, what rebuilds, and what to leave behind. Produce migration scope document.' },
    { phase: 'Phase 2: GHL infrastructure build', duration: '3 to 5 days', description: 'Set up GHL account structure: custom fields, pipeline stages, email domain DKIM/SPF, phone number, A2P 10DLC (US). Build the receiving environment before any data moves.' },
    { phase: 'Phase 3: Data export and import', duration: '1 to 2 days', description: 'Export contacts from the old platform, clean the CSV, import into GHL with field mapping. Validate a sample of 50 to 100 contacts for accuracy before proceeding.' },
    { phase: 'Phase 4: Automation rebuild', duration: '1 to 4 weeks', description: 'Rebuild every active automation in GHL\'s workflow builder. Test each one with a real contact before activating. This phase drives the majority of the total timeline.' },
    { phase: 'Phase 5: Parallel running', duration: '1 to 2 weeks', description: 'Run both platforms simultaneously. New leads enter GHL. Existing active automations finish in the old platform. Validate GHL is working correctly before cutting over.' },
    { phase: 'Phase 6: Cutover and handover', duration: '1 to 2 days', description: 'Redirect all lead sources to GHL. Cancel the old subscription at the right time. Deliver documentation and team walkthrough.' },
  ];

  const diyVsExpertData = [
    { complexity: 'Simple migration (under 5 automations)', diy: '3 to 6 weeks', expert: '1 to 2 weeks' },
    { complexity: 'Standard migration (5 to 20 automations)', diy: '8 to 16 weeks', expert: '3 to 5 weeks' },
    { complexity: 'Complex migration (20+ automations)', diy: '16 to 30+ weeks', expert: '6 to 10 weeks' },
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
          <span className="text-[#1A2236] font-medium">GHL Migration Timeline 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
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
            One of the first questions anyone asks before committing to a GoHighLevel migration is: 
            how long is this going to take? The honest answer is that it depends on one specific factor 
            far more than any other. <strong className="text-white"> GHL Scale Up</strong> has completed 
            migrations from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce. The 
            pattern is consistent enough to give you reliable estimates. This guide breaks it down by 
            platform and by complexity so you can plan your migration with realistic expectations.
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
                <Timer className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer — The Short Version</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                A simple GoHighLevel migration with a small contact list and basic automations takes 1 to 2 weeks.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                A standard agency migration takes <strong className="text-[#0E9BF0]">3 to 5 weeks</strong>. A complex migration 
                with many active automations, multiple client accounts, or a course and membership platform takes 
                <strong className="text-[#0E9BF0]"> 6 to 10 weeks</strong>. The single biggest driver of timeline is not how many 
                contacts you have. It is how many active automations you need to rebuild. The contact import itself takes minutes. 
                Rebuilding a complex multi-branch automation takes 4 to 8 hours. That is the number that determines your migration length.
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

            {/* Section 1: Timeline by Platform */}
            <h2 id="timeline-by-platform" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. How Long Does GoHighLevel Migration Take by Platform?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Different platforms create different migration complexity. Here are realistic timelines based on real migrations 
              completed in 2025 and 2026.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Simple</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Standard</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Complex</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What drives complexity</th>
                  </tr>
                </thead>
                <tbody>
                  {platformTimelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.simple}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.standard}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.complex}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.drivers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#0E9BF0]">How to read this table:</strong> 'Simple' means fewer than 5 active automations 
                and under 5,000 contacts with clean data. 'Standard' means 5 to 20 automations and 5,000 to 25,000 contacts. 
                'Complex' means 20 or more automations, large contact volumes, membership content, or multiple client accounts.
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                → <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel migration guide →</Link>
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                → <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ClickFunnels to GoHighLevel migration guide →</Link>
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                → <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel migration guide →</Link>
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                → <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel migration guide →</Link>
              </p>
            </div>

            {/* Section 2: What Drives Timeline */}
            <h2 id="what-drives-timeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Actually Drives the Migration Timeline?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most common misconception: people assume contact volume is the main factor. It is not. Importing 50,000 contacts 
              takes the same amount of time as importing 5,000. The CSV import process takes minutes in both cases. What determines 
              how long the migration takes is everything else.
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Factor 1: Number of active automations (the biggest factor by far)</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every automation from your previous platform must be rebuilt manually in GHL's workflow builder. There is no automated 
              import or conversion tool. A simple three-step email sequence takes about 30 minutes to rebuild. A complex sequence 
              with 15 steps, multiple If/Else conditions, deal stage triggers, and lead scoring logic takes 4 to 8 hours per workflow.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Active automations to rebuild</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Estimated rebuild time</th>
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
              For a guide on building automations in GHL correctly from the start: 
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Factor 2: Data quality</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If your contact database has duplicates, missing fields, inconsistent phone number formatting, or junk records built up 
              over years, cleaning it before import adds 1 to 5 days to the timeline depending on volume. Importing dirty data into 
              GHL means dirty data in GHL. Automations fire on bad contacts, deliverability suffers, and the cleanup happens later at higher cost.
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Factor 3: Platform-specific rebuilds</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Some platforms require more than just a contact import and workflow rebuild. Kajabi migrations require manually uploading 
              every video lesson, PDF, and quiz into GHL's membership module (budget 2 to 6 hours per course). ClickFunnels migrations 
              require going through every funnel page post-URL-import to fix button links and reconnect integrations.
            </p>

            <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">Factor 4: Number of client accounts (for agencies)</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An agency migrating 10 client sub-accounts into GHL is not doing one migration. It is doing 10. Even with Snapshots to 
              accelerate the per-client setup, each account needs its contact data validated, its client-specific workflows confirmed, 
              and its integrations reconnected. Agencies migrating multiple clients should add 3 to 5 business days per client account 
              on top of the core migration timeline.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE ONE THING THAT MAKES THE BIGGEST DIFFERENCE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                An honest automation audit before migration starts. Most businesses that have been on a platform for 2 or more years 
                have accumulated automations they no longer use. Migrating them all adds weeks and adds clutter. Before any migration 
                starts, audit every active automation and only rebuild the ones that are genuinely driving results. GHL Scale Up's 
                migration assessments always start here. It is the single step that reduces migration timeline the most.
              </p>
            </div>

            {/* Section 3: Migration Phases */}
            <h2 id="migration-phases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Happens in Each Phase of a GHL Migration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here is the standard phase breakdown for a typical 3 to 5 week standard migration.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Phase</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Duration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What happens</th>
                  </tr>
                </thead>
                <tbody>
                  {migrationPhases.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.phase}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.duration}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 4: DIY vs Expert */}
            <h2 id="diy-vs-expert" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. DIY vs Expert Migration: How Does the Timeline Change?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The same migration takes significantly longer as a DIY project compared to working with an experienced GHL migration specialist. 
              The difference is not just speed. It is the gap between getting it done and getting it done correctly.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration complexity</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">DIY migration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Expert migration (GHL Scale Up)</th>
                  </tr>
                </thead>
                <tbody>
                  {diyVsExpertData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.complexity}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.diy}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.expert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FREE MIGRATION ASSESSMENT</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Not sure how complex your migration is or how long it will take? GHL Scale Up offers a free 30-minute migration assessment. 
                We review your current platform setup, tell you exactly what the migration involves, give you a realistic timeline, and 
                provide a fixed-fee project quote.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book your free assessment at ghlscaleup.com/contact-us
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                See our full <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL migration service at ghlscaleup.com/services/migration →</Link>
              </p>
            </div>

            {/* Section 5: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              5. Frequently Asked Questions
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
                <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel Migration →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to start planning your GHL migration?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Book a free 30-minute migration assessment. We review your current platform, tell you exactly what the migration 
                  involves, give you a realistic timeline, and provide a fixed-fee quote. No obligation.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
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
                5+ years GHL experience · 200+ systems built and migrated globally. Timeline estimates based on real migration projects 
                completed across HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce in 2025 and 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Not Sure How Long It Will Take?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">Get a free migration assessment and a fixed-fee quote.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Your Timeline
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