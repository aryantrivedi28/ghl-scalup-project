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
  Clock,
  Mail,
  GraduationCap,
  Heart,
  Target,
  FileText,
  Compass,
  GitCompare,
  BarChart3,
  Mailbox,
  Stethoscope,
  Activity,
  CalendarDays,
  XCircle,
  Layers,
  Workflow,
  Headphones,
  FileQuestion,
  HelpCircle,
  Boxes,
  Combine,
  Settings,
  Link2,
  Webhook,
  RefreshCw,
  ListChecks,
  ClipboardList,
  Download,
  Printer
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

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
      a: "A complete GoHighLevel migration checklist covers 6 phases: pre-migration audit (documenting every automation, pipeline, contact, and integration in your current platform), GHL infrastructure setup (custom fields, pipelines, email authentication, phone setup), data export and cleaning (deduplication, formatting, validation), automation rebuild (recreating every active workflow in GHL's builder), testing and parallel running (end-to-end testing plus 2 weeks running both platforms simultaneously), and go-live with 30-day post-launch monitoring. Skipping any phase increases the risk of data loss, broken automations, or lead follow-up failures."
    },
    {
      q: "What is the most commonly skipped step in a GHL migration?",
      a: "The pre-migration audit. Agencies are eager to start importing data and rebuilding in GHL, so they skip documenting what currently exists. This is the phase that 43% of data issues trace back to. A migration audit takes a few hours and identifies dead-weight automations, missing custom fields, and integration dependencies before they become problems mid-migration. The second most commonly skipped step is end-to-end testing before go-live. Agencies build the system, do a basic check, and go live without testing the full lead-to-follow-up flow with a real form submission."
    },
    {
      q: "How long should I run both platforms in parallel during migration?",
      a: "A minimum of 2 weeks. During this period, new leads route into GHL while contacts already in active sequences on your old platform finish naturally. This catches any gaps in your GHL setup while you still have a working fallback. Only proceed to full cutover once GHL has performed at least as well as your old platform for 5 to 7 consecutive business days. Cutting over too quickly is one of the most common causes of lead follow-up failures during migration."
    },
    {
      q: "What percentage of automations should I migrate?",
      a: "Most businesses that have been on a platform for 2 or more years find that 30 to 40% of their existing automations are dead weight. They have not fired in 90+ days, serve a product or campaign that no longer exists, or duplicate another automation. The audit phase should identify these and exclude them from migration. Migrating only active automations significantly reduces rebuild time and keeps your new GHL account clean from the start."
    },
    {
      q: "Can I use this checklist for any platform migration to GoHighLevel?",
      a: "Yes. This checklist applies to migrations from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, Salesforce, or any other CRM or marketing platform. The 6 phases (audit, infrastructure, data, automation, testing, go-live) are the same regardless of source platform. What differs by platform is the specific export format and which automations or features need platform-specific handling, covered in our platform-specific migration guides."
    },
    {
      q: "Does GHL Scale Up use this checklist for client migrations?",
      a: "Yes. This is the exact checklist GHL Scale Up uses internally on every migration: 200+ migrations from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce. If you would rather have our team run this checklist for your migration rather than doing it yourself, book a free migration assessment. We review your current setup, identify what applies to your specific situation, and provide a realistic timeline and fixed-fee quote."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'phase1', title: 'Phase 1: Pre-Migration Audit' },
    { id: 'phase2', title: 'Phase 2: GHL Infrastructure Setup' },
    { id: 'phase3', title: 'Phase 3: Data Export, Cleaning, and Import' },
    { id: 'phase4', title: 'Phase 4: Automation Rebuild' },
    { id: 'phase5', title: 'Phase 5: Testing and Parallel Running' },
    { id: 'phase6', title: 'Phase 6: Go-Live and Post-Migration' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const phase1Items = [
    { title: 'Document everything in your current platform', items: [
      'List every active automation — name, trigger, purpose, last time it fired',
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
      'Decide which of the above will NOT be migrated (most businesses find 30 to 40% qualifies)'
    ]},
    { title: 'Map your tool stack', items: [
      'List every tool currently paid for that touches marketing, CRM, or client communication',
      'Cross-reference against what GHL replaces natively',
      'Decide which tools will be cancelled and on what timeline'
    ]},
    { title: 'Estimate your realistic timeline', items: [
      'Count total active automations to be rebuilt',
      'Multiply by realistic per-automation rebuild time (30 min for simple, 4 to 8 hours for complex)',
      'Add data cleaning time based on contact list size and quality',
      'Add 2 to 3 weeks for email domain warmup if sending volume is significant',
      'Compare your estimate against realistic benchmarks'
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
      'Plan your 2 to 3 week domain warmup schedule before any bulk sends'
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
      'Standardise phone numbers to E.164 format (+1XXXXXXXXXX)',
      'Fill in missing fields where possible',
      'Remove contacts with no engagement in 12+ months from initial import'
    ]},
    { title: 'Import and validate', items: [
      'Map every field correctly during import — double check custom field mapping',
      'Import in a test batch first (50 to 100 contacts) before full import',
      'Validate the test batch — check tags, custom fields, and pipeline assignment',
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
    { title: 'Priority automations to rebuild first', items: [
      'New lead instant follow-up (SMS within 60 seconds, email within 2 minutes)',
      'Missed call text-back',
      'Appointment reminder sequence (72hr, 24hr, 2hr before)',
      'Post-service review request',
      'Lapsed contact reactivation sequence'
    ]},
  ];

  const phase5Items = [
    { title: 'End-to-end test before any real lead enters the system', items: [
      'Submit a real form on your live funnel or website',
      'Confirm the contact appears in GHL CRM with correct tags and pipeline stage',
      'Confirm the follow-up sequence fires within 60 seconds',
      'Complete a real booking and confirm reminders send',
      'Complete a $1 test purchase and confirm the post-purchase sequence fires',
      'Check the full flow on mobile, not just desktop'
    ]},
    { title: 'Parallel running (minimum 2 weeks)', items: [
      'Route new leads into GHL while old platform remains active',
      'Let contacts already in active sequences on the old platform finish naturally',
      'Monitor GHL open rates, automation fire rates, and booking rates daily',
      'Compare GHL performance against old platform baseline',
      'Document any gaps discovered and fix before proceeding'
    ]},
  ];

  const phase6Items = [
    { title: 'Cutover', items: [
      'Redirect all lead sources (ads, website forms, landing pages) to GHL',
      'Confirm GHL has performed at least as well as old platform for 5 to 7 consecutive business days',
      'Take a final full data export from the old platform as backup'
    ]},
    { title: 'Cancellation', items: [
      'Cancel old platform subscription only after full cutover is confirmed stable',
      'For HubSpot specifically: confirm cancellation before the 25-day data deletion window',
      'Cancel any redundant tools identified in Phase 1\'s tool stack mapping'
    ]},
    { title: '30-day post-launch monitoring', items: [
      'Monitor email deliverability and spam complaint rates weekly for the first month',
      'Review automation performance reports weekly',
      'Address any team questions or friction points as they arise',
      'Document the final system for future reference and team onboarding'
    ]},
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Migration Checklist 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Checklist</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Lead Magnet</span>
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
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Migrations Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            This is the checklist <strong className="text-white"> GHL Scale Up</strong> uses internally on every 
            GoHighLevel migration we run. 200+ migrations from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, 
            Zoho, and Salesforce. Save this page, print it, or work through it phase by phase. Each item is 
            something we have seen go wrong when skipped.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Why This Checklist Matters</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Businesses that approach GoHighLevel migration with a structured risk assessment achieve 85% fewer disruptions and 40% faster ROI realization.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                On the other side: 67% of failed migrations used unrealistic 2 to 4 week timelines for complex environments, 
                and 43% of data issues trace back to inadequate pre-migration data analysis. This checklist exists to put you in the first group.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
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

            {/* Phase 1 */}
            <h2 id="phase1" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Phase 1: Pre-Migration Audit (Before You Touch Anything)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the phase most agencies skip or rush, and it is the phase that 43% of data issues trace back to. 
              A migration audit takes a few hours and saves significant rework later.
            </p>

            <div className="space-y-6 mb-8">
              {phase1Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded border border-[#DDE1E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-[#96A0B5]">☐</span>
                        </div>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                → For a full overview of what migration involves: <Link href="/blog/what-is-ghl-migration" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel Migration?</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                → For tool consolidation framework: <Link href="/blog/consolidate-marketing-tools-gohighlevel" className="text-[#0E9BF0] hover:underline">How to Consolidate Marketing Tools Using GoHighLevel →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                → For timeline benchmarks: <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
              </p>
            </div>

            {/* Phase 2 */}
            <h2 id="phase2" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Phase 2: GHL Infrastructure Setup (Before Any Data Moves)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Build the receiving environment before a single contact is imported. Importing into an unconfigured account 
              creates a mess that is harder to fix after the fact than to prevent before.
            </p>

            <div className="space-y-6 mb-8">
              {phase2Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded border border-[#DDE1E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-[#96A0B5]">☐</span>
                        </div>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
                        <div className="w-5 h-5 rounded border border-[#DDE1E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-[#96A0B5]">☐</span>
                        </div>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Phase 4 */}
            <h2 id="phase4" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Phase 4: Automation Rebuild
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the phase that takes the longest and is the phase most often underestimated. 
              Automations do not transfer. They must be rebuilt from scratch in GHL's workflow builder.
            </p>

            <div className="space-y-6 mb-8">
              {phase4Items.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded border border-[#DDE1E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-[#96A0B5]">☐</span>
                        </div>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">DO NOT OPTIMISE DURING THIS PHASE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Rebuild exactly what existed before, not an improved version. If something performs differently after go-live, 
                you need to know whether it is a migration error or a deliberate change. Optimise after the migration is stable, not during.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full guide: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
            </p>

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
                        <div className="w-5 h-5 rounded border border-[#DDE1E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-[#96A0B5]">☐</span>
                        </div>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the most common errors found during this phase: <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">Common GHL Migration Mistakes Agencies Make →</Link>
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
                        <div className="w-5 h-5 rounded border border-[#DDE1E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-[#96A0B5]">☐</span>
                        </div>
                        <span className="text-sm text-[#5C6880]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* How GHL Scale Up Uses This Checklist */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">HOW GHL SCALE UP USES THIS CHECKLIST</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Every migration we run follows this exact checklist. 200+ times across HubSpot, ClickFunnels, ActiveCampaign, 
                Kajabi, Zoho, and Salesforce.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real migration results: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                If you would rather have us run this checklist for you, <Link href="/contact-us" className="text-[#0E9BF0] hover:underline">book a free migration assessment</Link> 
                at ghlscaleup.com/contact-us. We review your current setup and give you a realistic timeline and fixed-fee quote.
              </p>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                Our full <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GoHighLevel migration service →</Link> covers every phase in this checklist, managed end to end.
              </p>
            </div>

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

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-ghl-migration" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel Migration? Beginner's Guide →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline: How Long Does It Take? →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">Common GHL Migration Mistakes Agencies Make →</Link>
                <Link href="/blog/consolidate-marketing-tools-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">How to Consolidate Marketing Tools Using GoHighLevel →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Want this checklist managed for you instead?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up runs this exact checklist on every migration. Free 30-minute migration assessment. 
                  We review your current setup, tell you exactly what applies, and give you a realistic timeline and fixed-fee quote.
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
                        {activeId === item.id && <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />}
                        <span className="flex-1">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

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
                  <div className="text-xs text-white/50">GoHighLevel Migration Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ migrations completed globally. This checklist reflects our internal migration process as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
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

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Linkedin className="w-3 h-3" /> LinkedIn</a>
                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Twitter className="w-3 h-3" /> X</a>
                <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"><Copy className="w-3 h-3" /> Copy link</button>
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