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
  Download,
  Printer,
  Info,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function GHLMigrationChecklistClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'phase1',
        'phase2',
        'phase3',
        'phase4',
        'phase5',
        'phase6',
        'readiness-gate',
        'cutover-gate',
        'source-platform-differences',
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
      q: "What should be on a GoHighLevel migration checklist?",
      a: "A complete checklist covers six phases: pre-migration audit, GHL infrastructure setup, data export and cleaning, automation rebuild, testing and parallel running, and go-live with post-launch monitoring. Two additional gates a pre-migration readiness check and a ready-for-cutover check help confirm you're actually prepared before committing to each risky step."
    },
    {
      q: "What is the most commonly skipped step in a GHL migration?",
      a: "The pre-migration audit. Teams are eager to start importing data and rebuilding in GHL, so they skip documenting what currently exists which makes it much harder to catch a missing automation or integration before it becomes a problem mid-migration. The second most commonly skipped step is end-to-end testing before go-live."
    },
    {
      q: "How long should I run both platforms in parallel during migration?",
      a: "A minimum of 2 weeks is a reasonable baseline. During this period, new leads route into GHL while contacts already in active sequences on your old platform finish naturally. Only proceed to full cutover once GHL has performed reliably for several consecutive business days."
    },
    {
      q: "How do I decide which integrations to migrate?",
      a: "Use a Keep/Replace/Rebuild/Retire framework for every integration: Keep if it just needs reconnecting to GHL, Replace if GHL has a native equivalent, Rebuild if the logic needs recreating with GHL's own tools, or Retire if it no longer serves a purpose."
    },
    {
      q: "Can I use this checklist for any platform migration to GoHighLevel?",
      a: "Yes. The six phases apply regardless of source platform. What differs by platform is the specific export format and which features need platform-specific handling covered in the dedicated platform-specific migration guides."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'phase1', title: 'Phase 1: Pre-Migration Audit (Before You Touch Anything)' },
    { id: 'phase2', title: 'Phase 2: GHL Infrastructure Setup (Before Any Data Moves)' },
    { id: 'phase3', title: 'Phase 3: Data Export, Cleaning, and Import' },
    { id: 'phase4', title: 'Phase 4: Automation Rebuild' },
    { id: 'phase5', title: 'Phase 5: Testing and Parallel Running' },
    { id: 'phase6', title: 'Phase 6: Go-Live and Post-Migration' },
    { id: 'readiness-gate', title: 'Pre-Migration Readiness Gate' },
    { id: 'cutover-gate', title: 'Ready-for-Cutover Gate' },
    { id: 'source-platform-differences', title: 'Source Platform Differences' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const phase1Items = [
    { title: 'Document everything in your current platform', items: [
      'List every active automation name, trigger, purpose, last time it fired',
      'List every pipeline and its stages',
      'Export a full contact list and note total contact count',
      'List every custom field currently in use',
      'List every integration (Stripe, Zapier, Google, Facebook, calendar apps)',
      'List every form and landing page currently live',
      'Document your current email sending domain and authentication status (DKIM, SPF)',
      'Take screenshots or export configuration of any complex automation logic'
    ]},
    { title: 'Identify what is dead weight', items: [
      'Flag any automation that has not fired in 90+ days',
      'Flag any pipeline stage that is no longer in active use',
      'Flag any contact segment for a product or campaign that no longer exists',
      'Decide which of the above will NOT be migrated'
    ]},
    { title: 'Map your tool stack', items: [
      'List every tool currently paid for that touches marketing, CRM, or client communication',
      'Cross-reference against what GHL replaces natively',
      'Decide which tools will be cancelled and on what timeline'
    ]},
    { title: 'Estimate your realistic timeline', items: [
      'Count total active automations to be rebuilt',
      'Add data cleaning time based on contact list size and quality',
      'Add domain warmup time if sending volume is significant'
    ]},
  ];

  const phase2Items = [
    { title: 'Account and access setup', items: [
      'Confirm you are on the correct GHL plan for your needs (Starter, Unlimited, or Agency Pro)',
      'Set up team member access and permission levels',
      'Configure agency branding if using white-label'
    ]},
    { title: 'Custom fields and pipelines', items: [
      'Create every custom field identified in Phase 1 before importing contacts',
      'Build pipeline stages matching your documented sales process',
      'Set up tags matching your current segmentation structure'
    ]},
    { title: 'Email infrastructure', items: [
      'Configure your sending domain in GHL Settings → Email Services',
      'Set up DKIM, SPF, and DMARC records and verify they pass',
      'Confirm sending domain is different from any domain still active on your old platform',
      'Plan your domain warmup schedule before any bulk sends'
    ]},
    { title: 'Phone and SMS setup', items: [
      'Purchase or port your business phone number into GHL',
      'Complete A2P 10DLC registration if sending SMS in the US',
      'Test inbound and outbound calling before going further'
    ]},
  ];

  const phase3Items = [
    { title: 'Export from your old platform', items: [
      'Export full contact list as CSV',
      'Export deal/opportunity records if applicable',
      'Export any notes or activity history that needs to be preserved'
    ]},
    { title: 'Clean the data before import', items: [
      'Remove all hard bounces and unsubscribes',
      'Deduplicate records with the same email or phone number',
      'Standardize phone numbers to E.164 format (+1XXXXXXXXXX)',
      'Fill in missing fields where possible'
    ]},
    { title: 'Import and validate', items: [
      'Map every field correctly during import double check custom field mapping',
      'Import in a test batch first (50 to 100 contacts) before full import',
      'Validate the test batch',
      'Run the full import once the test batch is validated',
      'Spot-check 20 to 30 random contacts post-import for accuracy'
    ]},
  ];

  const phase4Items = [
    { title: 'For each automation kept from Phase 1', items: [
      'Document the trigger, conditions, and every action step from the old platform',
      'Rebuild the automation in GHL using GHL\'s native trigger and action types',
      'Set correct timing and delays for each step',
      'Test with one real contact before activating for all contacts',
      'Confirm the automation appears correctly in GHL\'s reporting'
    ]},
  ];

  const phase5Items = [
    { title: 'End-to-end test before any real lead enters the system', items: [
      'Submit a real form on your live funnel or website',
      'Confirm the contact appears in GHL CRM with correct tags and pipeline stage',
      'Confirm the follow-up sequence fires as expected',
      'Complete a real booking and confirm reminders send',
      'Complete a test purchase and confirm the post-purchase sequence fires',
      'Check the full flow on mobile, not just desktop'
    ]},
    { title: 'Parallel running', items: [
      'Route new leads into GHL while old platform remains active',
      'Let contacts already in active sequences on the old platform finish naturally',
      'Monitor GHL open rates, automation fire rates, and booking rates daily',
      'Document any gaps discovered and fix before proceeding'
    ]},
  ];

  const phase6Items = [
    { title: 'Cutover', items: [
      'Redirect all lead sources (ads, website forms, landing pages) to GHL',
      'Confirm GHL has performed at least as well as old platform for several consecutive business days',
      'Take a final full data export from the old platform as backup'
    ]},
    { title: 'Cancellation', items: [
      'Cancel old platform subscription only after full cutover is confirmed stable',
      'For HubSpot specifically: confirm cancellation before the 25-day data deletion window',
      'Cancel any redundant tools identified in Phase 1\'s tool stack mapping'
    ]},
    { title: 'Post-launch monitoring', items: [
      'Monitor email deliverability and spam complaint rates weekly for the first month',
      'Review automation performance reports weekly',
      'Address any team questions or friction points as they arise',
      'Document the final system for future reference and team onboarding'
    ]},
  ];

  const readinessGateItems = [
    'Data mapping is documented and approved',
    'Critical workflows are fully documented (trigger, conditions, actions)',
    'Required GHL custom fields exist and match your data structure',
    'Pipeline stages are configured to match your sales process',
    'Every integration has a Keep/Replace/Rebuild/Retire decision made',
    'Sending domain is configured and authentication (DKIM/SPF/DMARC) passes',
    'A test batch of data has been imported and validated',
    'Stakeholders know and agree to the cutover plan and timeline'
  ];

  const cutoverGateItems = [
    'Contacts and opportunities are imported and spot-checked',
    'Pipelines are validated against your actual sales process',
    'Critical workflows are tested end-to-end with a real contact',
    'No automation is enrolling contacts unintentionally',
    'Email, SMS, and phone have all been tested with real sends/calls',
    'Forms and funnels are tested and routing correctly',
    'Calendar bookings and reminder notifications are tested',
    'Critical integrations are reconnected and tested',
    'Analytics and conversion tracking are verified working',
    'Someone is explicitly assigned to monitor the system post-cutover'
  ];

  const integrationDecisions = [
    { decision: 'Keep', when: 'The tool stays and simply needs to be reconnected to point at GHL instead of the old platform' },
    { decision: 'Replace', when: 'GHL has a native feature that does the same job retire the external tool entirely' },
    { decision: 'Rebuild', when: 'The integration logic needs to be recreated using GHL\'s own automation/API tools rather than a direct reconnect' },
    { decision: 'Retire', when: 'The tool served a purpose that no longer exists and doesn\'t need any equivalent in GHL' }
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        // onClick={handleOpenBooking}
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Migration Checklist 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Checklist</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Execution</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            The Complete GoHighLevel Migration Checklist<br />
            <span className="text-[#F8D000]">(2026)</span>
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

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This is the checklist GHL Scale Up uses internally on GoHighLevel migrations. Work through it phase by phase, or use the two readiness gates to sanity-check whether you're actually ready to move to the next stage.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Start Your Migration
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#phase1"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Phase 1
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
                In This Checklist
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
                5+ years GHL experience · 200+ migrations completed globally. This checklist reflects our internal migration process as of September 2026.
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

            {/* Save/Print Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Download className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-white">Save or Print</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                Use Ctrl+P (Cmd+P on Mac) to save this page as a PDF or print it.
              </p>
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200"
              >
                <Printer className="w-3 h-3" />
                Print / Save as PDF
              </button>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* Table of Contents - Mobile Only */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8 lg:hidden">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">The 6 Phases</span>
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

            {/* Phase 1 */}
            <h2 id="phase1" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Phase 1: Pre-Migration Audit (Before You Touch Anything)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the phase most agencies skip or rush. It takes a few hours and prevents the majority of avoidable rework later.
            </p>

            <div className="space-y-6 mb-8">
              {phase1Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <span className="text-sm text-[#96A0B5] flex-shrink-0 mt-0.5">☐</span>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A NOTE ON SCOPE REDUCTION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                many businesses that have been on a platform for 2+ years find that a meaningful share of their existing automations no longer fire or serve a purpose. There's no fixed percentage this applies to universally it depends entirely on how long you've been on your current platform and how disciplined your team has been about retiring old automations. The point of this audit step is to find your own number, not assume a benchmark.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a full overview of what migration involves, see{' '}
              <Link href="/blog/what-is-ghl-migration" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel Migration?</Link>. For realistic timeline benchmarks by platform and complexity, see the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL migration timeline guide</Link>.
            </p>


            {/* Phase 2 */}
            <h2 id="phase2" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Phase 2: GHL Infrastructure Setup (Before Any Data Moves)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Build the receiving environment before a single contact is imported.
            </p>

            <div className="space-y-6 mb-8">
              {phase2Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <span className="text-sm text-[#96A0B5] flex-shrink-0 mt-0.5">☐</span>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Integrations: Keep, Replace, Rebuild, or Retire */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-8">
              <h3 className="text-base font-bold text-[#1A2236] mb-3">Integrations: Keep, Replace, Rebuild, or Retire</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
                For every integration identified in Phase 1, make an explicit decision rather than assuming it all needs rebuilding as-is:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                      <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Decision</th>
                      <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">When It Applies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {integrationDecisions.map((item, idx) => (
                      <tr key={idx} className="border-b border-[#DDE1E9]">
                        <td className="py-3 px-3 font-medium text-[#1A2236]">{item.decision}</td>
                        <td className="py-3 px-3 text-[#5C6880]">{item.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/ghl-migration-checklist-infographic.png"
                  alt="GoHighLevel Migration Checklist: Six phases from pre-migration audit to go-live, with readiness gates and integration decisions"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Migration Checklist: Six phases from pre-migration audit to go-live, with readiness gates and integration decisions</span>
              </div>
            </div>

            {/* Phase 3 */}
            <h2 id="phase3" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Phase 3: Data Export, Cleaning, and Import
            </h2>

            <div className="space-y-6 mb-8">
              {phase3Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <span className="text-sm text-[#96A0B5] flex-shrink-0 mt-0.5">☐</span>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>Done when:</strong> sample records match the source data exactly, custom fields contain the expected values (not blank or mismatched types), tags applied during import match what was mapped, no unexpected duplicate contacts appear, and at least 20-30 spot-checked records behave correctly when opened in GHL.
              </p>
            </div>

            {/* Phase 4 */}
            <h2 id="phase4" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Phase 4: Automation Rebuild
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This phase takes the longest and is the one most often underestimated. Automations do not transfer they must be rebuilt from scratch in GHL's workflow builder.
            </p>

            <div className="space-y-6 mb-8">
              {phase4Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <span className="text-sm text-[#96A0B5] flex-shrink-0 mt-0.5">☐</span>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>Done when:</strong> a real test contact moves through the entire workflow exactly as designed every wait step times correctly, every conditional branch routes to the right path, every message sends with correct merge fields, and the workflow's exit condition fires as expected. Don't consider a rebuilt automation complete until you've watched one real contact go through it start to finish.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>Rebuild what existed, not an improved version.</strong> If something performs differently after go-live, you need to know whether it's a migration error or a deliberate change. Optimize after the migration is stable, not during it. Full guide:{' '}
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow automation for beginners</Link>.
              </p>
            </div>


            {/* Phase 5 */}
            <h2 id="phase5" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Phase 5: Testing and Parallel Running
            </h2>

            <div className="space-y-6 mb-8">
              {phase5Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <span className="text-sm text-[#96A0B5] flex-shrink-0 mt-0.5">☐</span>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the most common errors found during this phase, see{' '}
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">common GHL migration mistakes</Link>.
            </p>

            {/* Phase 6 */}
            <h2 id="phase6" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Phase 6: Go-Live and Post-Migration
            </h2>

            <div className="space-y-6 mb-8">
              {phase6Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <span className="text-sm text-[#96A0B5] flex-shrink-0 mt-0.5">☐</span>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pre-Migration Readiness Gate */}
            <h2 id="readiness-gate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Pre-Migration Readiness Gate: Don't Start the Production Migration Until...
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use this as a final go/no-go check before moving any real data.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-8">
              <div className="space-y-2">
                {readinessGateItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-sm text-[#96A0B5] flex-shrink-0 mt-0.5">☐</span>
                    <span className="text-sm text-[#5C6880]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ready-for-Cutover Gate */}
            <h2 id="cutover-gate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Ready-for-Cutover Gate: Don't Redirect Live Traffic Until...
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use this before pointing real leads and traffic at GHL.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-8">
              <div className="space-y-2">
                {cutoverGateItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-sm text-[#96A0B5] flex-shrink-0 mt-0.5">☐</span>
                    <span className="text-sm text-[#5C6880]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Source Platform Differences */}
            <h2 id="source-platform-differences" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Source Platform Differences
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This checklist applies regardless of source platform, but the specific export format, what transfers automatically, and platform-specific gotchas differ. Use the dedicated guide for your platform alongside this checklist:{' '}
              <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot</Link>,{' '}
              <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ActiveCampaign</Link>,{' '}
              <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ClickFunnels</Link>,{' '}
              <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Kajabi</Link>,{' '}
              <Link href="/blog/salesforce-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Salesforce</Link>, or{' '}
              <Link href="/blog/keap-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Keap</Link>.
            </p>


            {/* FAQ */}
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
              Want this checklist run for you instead?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link> for a realistic timeline and fixed-fee quote.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-ghl-migration" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel Migration? →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">Common GHL Migration Mistakes →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Service →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Want this checklist managed for you instead?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up runs this exact checklist on every migration. Free 30-minute migration assessment. We review your current setup, tell you exactly what applies, and give you a realistic timeline and fixed-fee quote.
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