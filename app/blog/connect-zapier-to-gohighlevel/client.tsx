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
  Printer,
  Video,
  Ticket,
  Lightbulb,
  UserCheck,
  UserX,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2,
  PieChart,
  GitMerge,
  TrendingDown,
  FileCheck,
  Search,
  Info,
  Link as LinkIcon
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function ConnectZapierToGoHighLevelClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'can-zapier-connect',
        'what-is-leadconnector',
        'how-integration-works',
        'what-you-need',
        'how-to-connect',
        'building-your-first-zap',
        'triggers-and-actions',
        'field-mapping',
        'duplicate-contacts',
        'testing',
        'troubleshooting',
        'real-use-cases',
        'zapier-vs-workflows',
        'webhooks-or-api',
        'costs-and-limitations',
        'what-to-do-next',
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

      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
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
      q: 'Is GoHighLevel actually on Zapier?',
      a: 'Yes — under the name LeadConnector, which is GoHighLevel\'s own integration and API brand, not a separate third-party product.'
    },
    {
      q: 'Is the integration free?',
      a: 'Zapier\'s free plan gives you 100 tasks/month, enough for testing, but it caps you at two-step Zaps — most real automations need at least the Professional tier, which starts from $19.99/month on annual billing. Confirm current rates at zapier.com/pricing, since Zapier periodically adjusts task tiers and pricing.'
    },
    {
      q: 'Can I use custom fields?',
      a: 'Yes — Zapier\'s own documentation for the LeadConnector integration confirms custom fields are supported on both triggers and actions.'
    },
    {
      q: 'Why did my Zap succeed but nothing happened in GoHighLevel?',
      a: 'Almost always a field-mapping or downstream-workflow issue rather than a connection failure — see the Troubleshooting table above, particularly the row on contacts being created without triggering the intended follow-up.'
    },
    {
      q: 'Should I automate everything through Zapier?',
      a: 'No. Use it when an external app genuinely needs to be part of the automation; use GoHighLevel\'s own workflow builder when the entire process happens inside GoHighLevel already.'
    },
    {
      q: 'What can I use instead of Zapier to connect apps to GoHighLevel?',
      a: 'The two main alternatives are webhooks (GoHighLevel\'s native inbound/outbound webhook support) and direct API integration, both covered in the "When Webhooks or the API Make More Sense" section above. Make.com is also a named alternative.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'can-zapier-connect', title: 'Can Zapier Connect to GoHighLevel?' },
    { id: 'what-is-leadconnector', title: 'What Is LeadConnector in Zapier?' },
    { id: 'how-integration-works', title: 'How the Integration Actually Works' },
    { id: 'what-you-need', title: 'What Do You Need Before Connecting?' },
    { id: 'how-to-connect', title: 'How Do You Connect Zapier to GoHighLevel?' },
    { id: 'building-your-first-zap', title: 'Building Your First Zap' },
    { id: 'triggers-and-actions', title: 'What Triggers and Actions Does the Integration Support?' },
    { id: 'field-mapping', title: 'How Does Field Mapping Work?' },
    { id: 'duplicate-contacts', title: 'Duplicate Contacts' },
    { id: 'testing', title: 'Testing: What It Proves and What It Doesn\'t' },
    { id: 'troubleshooting', title: 'Troubleshooting Common Problems' },
    { id: 'real-use-cases', title: 'Real Use Cases' },
    { id: 'zapier-vs-workflows', title: 'Should You Use Zapier or GoHighLevel Workflows?' },
    { id: 'webhooks-or-api', title: 'When Webhooks or the API Make More Sense' },
    { id: 'costs-and-limitations', title: 'Costs and Limitations' },
    { id: 'what-to-do-next', title: 'What to Do Next' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const triggerActionData = [
    { type: 'Trigger', name: 'Pipeline Stage Changed', whatItDoes: 'Fires when an opportunity moves to a specified stage in a specified pipeline', typicalUse: 'Notify a rep, log to a spreadsheet, or push an offline conversion event to an ad platform when a deal advances' },
    { type: 'Action', name: 'Add/Update Contact', whatItDoes: 'Creates a new contact or updates an existing one, with fields for name, phone, email, address, tags, source, and more', typicalUse: 'The default action for "new lead somewhere else → contact in GoHighLevel"' },
    { type: 'Action', name: 'Add/Update Opportunity', whatItDoes: 'Creates or updates an opportunity and assigns it to a pipeline and stage', typicalUse: 'Turning form or ad submissions directly into sales pipeline entries' },
    { type: 'Action', name: 'Add Lead to Workflow', whatItDoes: 'Adds a contact into an existing GoHighLevel workflow by Workflow ID', typicalUse: 'The connective step for the hybrid architecture — Zapier hands off, GoHighLevel automation takes over' },
    { type: 'Action', name: 'Add Task', whatItDoes: 'Creates a task, optionally assigned to a specific team member', typicalUse: 'Internal notifications tied to a contact record, without triggering a customer-facing sequence' },
    { type: 'Action', name: 'Stop All Workflows for Lead', whatItDoes: 'Halts every active workflow running for a given contact', typicalUse: 'Emergency stop when a lead needs to be pulled out of automated sequences immediately' }
  ];

  const troubleshootingData = [
    { problem: "Can't find GoHighLevel in Zapier's app search", cause: 'Searching the wrong name', check: 'Search "LeadConnector" instead', fix: 'Select the LeadConnector app' },
    { problem: 'Authentication fails or loops', cause: 'Insufficient account permissions', check: 'Whether your login has admin/API access to the target Location', fix: 'Reconnect using an account with the correct access level' },
    { problem: "Expected Location doesn't appear during setup", cause: "Account isn't authorized for that sub-account", check: 'Location-level permissions inside GoHighLevel', fix: 'Grant access or reconnect with an account that has it' },
    { problem: 'Contact created but no follow-up sequence runs', cause: 'The Zap only creates the contact — it doesn\'t trigger the GoHighLevel workflow', check: 'Whether "Add Lead to Workflow" was used, or whether a GoHighLevel-side automation depends on a tag the Zap never applied', fix: 'Add the workflow-trigger action, or apply the tag/field the native workflow is watching for' },
    { problem: 'Duplicate contacts appearing', cause: 'Zap firing more than once for the same event', check: 'Zap run history for repeated executions', fix: 'Deactivate duplicate Zaps; confirm test runs aren\'t left active' },
    { problem: 'Data arrives but fields are blank or wrong', cause: 'Field mapping mismatch or missing custom field', check: 'Field types on both sides; whether the custom field exists in GoHighLevel yet', fix: 'Correct the mapping; create missing custom fields before mapping to them' },
    { problem: 'Zap runs, but with a delay', cause: 'Polling interval on lower Zapier plans', check: 'Your current Zapier plan\'s trigger check frequency', fix: 'Upgrade for faster polling, or use an instant-trigger-eligible event where available' }
  ];

  const fieldMappingData = [
    { source: 'First Name', ghlField: 'First Name' },
    { source: 'Last Name', ghlField: 'Last Name' },
    { source: 'Email', ghlField: 'Email' },
    { source: 'Phone', ghlField: 'Phone' },
    { source: 'Company', ghlField: 'Custom Field: Company' },
    { source: 'Lead Source', ghlField: 'Tag or Custom Field' }
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your Zapier integration.</p>
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
          <span className="text-[#1A2236] font-medium">Connect Zapier to GoHighLevel: Full Setup Guide (2026)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Integration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Zapier</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">LeadConnector</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Connect Zapier to GoHighLevel:<br />
            <span className="text-[#F8D000]">Setup, Triggers, and When Not to Use It (2026)</span>
          </h1>

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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated September 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Can Zapier connect to GoHighLevel? <strong className="text-white">Yes.</strong> Zapier connects to GoHighLevel through LeadConnector, GoHighLevel's own white-labeled Zapier integration, letting a defined set of triggers and actions move data between GoHighLevel and thousands of other apps. The connection itself takes about ten minutes.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Getting connected and getting the automation to actually hold up are two different problems, though. LeadConnector exposes specific triggers and actions rather than every GoHighLevel capability, so most of what goes wrong after setup — a contact that never updates, a follow-up sequence that never fires — traces back to field mapping or a misunderstanding of what the integration does and doesn't cover, not to a broken connection. This guide covers both: how to make the connection, and how to make it actually work once real data starts flowing through it.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Here's the short version before going deep: GoHighLevel doesn't appear in Zapier under its own name — it's listed as <strong className="text-white">LeadConnector</strong>. Once you find it, you authenticate, pick a trigger event, pick an action, map the fields between the two systems, and test with real data before publishing. Every one of those steps has a way to go wrong, and this guide walks through each one.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Integration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-connect"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to Setup
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN: SIDEBAR */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

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
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built globally. All integration details verified as of September 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

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

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Help Integrating?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We've built 200+ GHL integration systems for agencies and businesses.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* RIGHT COLUMN: BLOG CONTENT */}
          <main className="min-w-0 order-2">

            {/* Section: Can Zapier Connect to GoHighLevel? */}
            <h2 id="can-zapier-connect" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Can Zapier Connect to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Yes. Zapier connects to GoHighLevel through LeadConnector, GoHighLevel's own white-labeled Zapier integration, letting a defined set of triggers and actions move data between GoHighLevel and thousands of other apps.</strong> The connection itself takes about ten minutes.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Getting connected and getting the automation to actually hold up are two different problems, though. LeadConnector exposes specific triggers and actions rather than every GoHighLevel capability, so most of what goes wrong after setup — a contact that never updates, a follow-up sequence that never fires — traces back to field mapping or a misunderstanding of what the integration does and doesn't cover, not to a broken connection. This guide covers both: how to make the connection, and how to make it actually work once real data starts flowing through it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's the short version before going deep: GoHighLevel doesn't appear in Zapier under its own name — it's listed as <strong className="text-[#1A2236]">LeadConnector</strong>. Once you find it, you authenticate, pick a trigger event, pick an action, map the fields between the two systems, and test with real data before publishing. Every one of those steps has a way to go wrong, and this guide walks through each one.
            </p>

            {/* Section: What Is LeadConnector */}
            <h2 id="what-is-leadconnector" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is LeadConnector in Zapier?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">LeadConnector is GoHighLevel's own brand name for its API layer and outward-facing integrations — it isn't a separate product, a competing CRM, or a third-party middleman.</strong> This is the single most common point of confusion in the entire setup process, so it's worth settling first.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zapier's own app directory confirms this directly, describing LeadConnector as the connector agencies use for marketing automation and customer communication. When you search "GoHighLevel" inside Zapier and nothing comes up, that's expected. Search "LeadConnector" instead, and the app that appears — with a blue-and-white icon — is the official, GoHighLevel-maintained integration.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Put plainly: you're connecting directly to your own GoHighLevel account. LeadConnector is simply the name that connection goes by inside Zapier's app list. Once that's clear, the rest of the setup stops being confusing and starts being mechanical.
            </p>

            {/* Section: How Integration Works */}
            <h2 id="how-integration-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How the Integration Actually Works
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before touching either interface, it helps to understand what's actually happening when data moves between the two platforms, because this shapes almost every decision later in the setup.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">In plain terms: Zapier acts as the integration layer between GoHighLevel and external applications, while GoHighLevel handles the downstream CRM and workflow logic once the data arrives.</strong> When neither platform's native capabilities cover what you need, webhooks or a direct API call fill the gap — covered later in this guide.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              The most common data flow looks like this:
            </p>
            <p className="text-sm md:text-base font-semibold text-[#0E9BF0] mb-4">
              External app → Zapier → LeadConnector → GoHighLevel
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A form gets submitted on Typeform, or a lead comes in through Facebook Lead Ads, or a payment clears in Stripe. Zapier detects that event (the trigger), and sends the relevant data to LeadConnector, which writes it into your GoHighLevel account as a new contact, an updated opportunity, or a triggered action (the action).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The reverse also works: something happens inside GoHighLevel — a pipeline stage changes, a tag gets added — and Zapier picks that up as a trigger, then pushes the result out to another app: a Slack notification, a row in Google Sheets, an update in your accounting software.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There's also a hybrid pattern worth knowing about, because it's what most working setups actually look like in practice:
            </p>
            <p className="text-sm md:text-base font-semibold text-[#0E9BF0] mb-4">
              External app → Zapier → GoHighLevel → native GHL workflow
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In this version, Zapier's only job is getting the data into GoHighLevel. Once the contact or opportunity exists there, GoHighLevel's own <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">workflow automation</Link> takes over — sending the follow-up sequence, applying tags, routing to a pipeline stage. This matters because it changes where you troubleshoot when something breaks: a failure in step one is a Zapier problem, a failure in step two is a GoHighLevel workflow problem, and conflating the two is how people lose hours debugging the wrong system.
            </p>

            {/* Section: What You Need */}
            <h2 id="what-you-need" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Do You Need Before Connecting Zapier to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Skip anything on this list and you'll hit a wall partway through setup:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A GoHighLevel account with the correct access level.</strong> You need either Agency-level access or admin/API-level access to the specific Location (GoHighLevel's term for a sub-account) you're connecting. If you manage multiple client sub-accounts, know in advance which one this Zap is for — this is the single most common setup mistake.</li>
              <li><strong className="text-[#1A2236]">A Zapier account.</strong> The free plan is enough to build and test a Zap; whether it's enough to run it permanently depends on how many steps your Zap has and how much volume it handles (more on this in the Costs section).</li>
              <li><strong className="text-[#1A2236]">Clarity on what data needs to move, in which direction.</strong> Don't start building until you know the trigger event and the resulting action in plain language: "when a form is submitted on our website, create a contact in GoHighLevel" is a complete sentence you should be able to say before opening Zapier.</li>
              <li><strong className="text-[#1A2236]">The destination app already connectable in Zapier,</strong> if you're sending data out of GoHighLevel to somewhere else (Google Sheets, Slack, a second CRM).</li>
            </ul>

            {/* Section: How to Connect */}
            <h2 id="how-to-connect" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Connect Zapier to GoHighLevel?
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Log into Zapier and start a new Zap.</strong> Click Create Zap from your dashboard.</li>
              <li><strong className="text-[#1A2236]">Search for "LeadConnector," not "GoHighLevel."</strong> It will appear with a blue-and-white icon in the app list, whether you're setting it as your trigger app or your action app.</li>
              <li><strong className="text-[#1A2236]">Authenticate the connection.</strong> Zapier's current flow uses an OAuth sign-in: you'll be redirected to a GoHighLevel login screen, where you choose the specific agency and Location you want to authorize, then grant permissions. (Some older guides describe pasting a GoHighLevel API key directly into Zapier instead — that legacy method still exists in some setups, but the OAuth sign-in is what most new connections use now. If your screen looks different from either description, GoHighLevel and Zapier both update their interfaces periodically, so treat this as a general map rather than an exact screenshot.)</li>
              <li><strong className="text-[#1A2236]">Confirm you selected the right Location.</strong> If you manage more than one sub-account, this is where mistakes happen. An easy way to verify: after connecting, check the account name Zapier displays against the Location name in your GoHighLevel dashboard before building anything further.</li>
              <li><strong className="text-[#1A2236]">If the Location you expected doesn't show up,</strong> the account you logged in with likely doesn't have admin or API access to that specific Location. Double check permissions inside GoHighLevel before troubleshooting on the Zapier side.</li>
            </ol>

            {/* Section: Building Your First Zap */}
            <h2 id="building-your-first-zap" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Building Your First Zap
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every Zap is built from the same two pieces:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Trigger</strong> — the event that starts the Zap. This can be something happening in another app ("new form submission") or something happening inside GoHighLevel itself ("pipeline stage changed").</li>
              <li><strong className="text-[#1A2236]">Action</strong> — what happens as a result. This is usually a write operation: creating or updating a contact, adding an opportunity, adding a task, or adding a lead to an existing GoHighLevel workflow.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              According to Zapier's own listing for the integration, the setup sequence is: connect your account, choose a trigger (a LeadConnector trigger like a pipeline stage change, or a trigger from another app), select the LeadConnector action you want performed, map the fields, then test and activate.
            </p>

            {/* Section: Triggers and Actions */}
            <h2 id="triggers-and-actions" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Triggers and Actions Does the GoHighLevel Integration Support?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zapier's LeadConnector integration exposes a defined, verified set of triggers and actions — not an open-ended list. Here's what's confirmed as available directly from Zapier's app listing, along with what each one is actually useful for:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Name</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Does</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Use</th>
                  </tr>
                </thead>
                <tbody>
                  {triggerActionData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 font-medium text-[#0E9BF0]">{item.name}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItDoes}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.typicalUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Custom fields are supported on both the trigger and action side, and Zapier's own FAQ for the integration confirms tags can be added or removed through it, with a dedicated trigger available for when a specific tag gets added to a contact.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The distinction that matters here:</strong> these are the things the native Zapier connector supports directly. If what you're trying to do isn't on this list — a highly specific automation that depends on custom object types, or something GoHighLevel exposes only through its API — you're not stuck, but you're no longer in "just add an action" territory. That's a webhook or API conversation, which we get to further down.
            </p>

            {/* Section: Field Mapping */}
            <h2 id="field-mapping" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Does Field Mapping Work? (The Step That Actually Breaks Things)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Authentication succeeding doesn't mean your automation works. This is the single most important thing to understand about troubleshooting this integration, because most "it's connected but nothing's happening correctly" problems trace back here, not to the connection itself.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Field mapping is where you tell Zapier which piece of incoming data goes into which GoHighLevel field. A simple, technically sound mapping looks like this:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Source Field</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel Field</th>
                  </tr>
                </thead>
                <tbody>
                  {fieldMappingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.source}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghlField}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The instinct many people have is to map every available field simply because Zapier offers the option. Don't. Map what the next step in your process actually needs. If your follow-up sequence only ever references a contact's name, phone, and lead source, mapping fifteen additional fields adds fragility (more things that can mismatch or fail) without adding value.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A few specific mapping issues worth watching for:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Field type mismatches.</strong> A number field on one side mapped to a text field on the other can silently fail or store the value incorrectly.</li>
              <li><strong className="text-[#1A2236]">Phone number formatting.</strong> Inconsistent country codes or formatting between the source app and GoHighLevel is a frequent, quiet cause of contacts not matching correctly.</li>
              <li><strong className="text-[#1A2236]">Custom fields that don't exist yet.</strong> If the destination custom field hasn't been created in GoHighLevel first, Zapier can't map to it — create the field in GoHighLevel before you build the Zap step that references it, not after.</li>
            </ul>

            {/* Section: Duplicate Contacts */}
            <h2 id="duplicate-contacts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Duplicate Contacts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Duplicate contact records are one of the most common complaints tied to this integration, and they're almost always caused by the automation firing more than once for the same person, rather than by the integration itself being unreliable.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel generally works to match incoming contacts against existing records using identifiers like phone number and email address, so the same person submitting a form twice — including during your own testing — is more likely to update an existing contact than create a second one. That said, exact deduplication behavior can depend on your account configuration and has been reported differently across sources, so it's worth verifying your account's specific duplicate-contact settings rather than assuming a fixed rule.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The more frequent real-world cause of duplicates isn't matching logic at all — it's a Zap that ran more than once for the same event, often from testing with sample data that gets left active, or from two separate Zaps unintentionally pointed at the same trigger. If you're seeing duplicates, check your Zap history for repeated runs before assuming GoHighLevel's matching is at fault.
            </p>

            {/* Section: Testing */}
            <h2 id="testing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Testing: What It Proves and What It Doesn't
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zapier's test step confirms one thing: that the data you sent arrived and was written to a field. It does not confirm that your business process works. Those are different questions, and treating them as the same one is how broken automations go live.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Break your testing into layers:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Trigger test</strong> — did Zapier receive the data you expected, in the shape you expected?</li>
              <li><strong className="text-[#1A2236]">Location test</strong> — did it land in the correct GoHighLevel sub-account? (Easy to get wrong if you manage more than one.)</li>
              <li><strong className="text-[#1A2236]">Field test</strong> — did each field map to the correct destination, with the correct format?</li>
              <li><strong className="text-[#1A2236]">Downstream workflow test</strong> — if this Zap is meant to hand off into a native GoHighLevel workflow, did that workflow actually fire, and did it do what it's supposed to?</li>
              <li><strong className="text-[#1A2236]">Second real-record test</strong> — run it again with a different, realistic contact, not just your original sample data. A single successful test can pass on data quality it won't always get.</li>
              <li><strong className="text-[#1A2236]">Edge case test</strong> — what happens with a missing phone number, a blank name field, or a duplicate submission? If you don't know, that's worth finding out before it happens with a real lead.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A green checkmark on your first test tells you the wiring works. It doesn't tell you the automation is doing its job for every lead that comes through it over the following month — that requires watching it under real conditions, not just a single trial run.
            </p>

            {/* Section: Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Troubleshooting Common Problems
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cause}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.check}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Real Use Cases */}
            <h2 id="real-use-cases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Real Use Cases
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Lead capture from an ad platform.</strong> A prospect fills out a Facebook Lead Ads form. Zapier's trigger fires, an Add/Update Contact action creates the record in GoHighLevel with the lead's name, phone, source tag, and campaign name mapped into a custom field. From there, a native GoHighLevel workflow — not Zapier — sends the actual follow-up sequence. Zapier's job stops at getting clean data into the CRM; GoHighLevel's automation engine does the ongoing work. This division of labor is deliberate: it keeps the customer-facing follow-up logic in one place (GoHighLevel) instead of splitting it across two platforms.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Pipeline-stage notifications to a sales team.</strong> When an opportunity's Pipeline Stage Changed trigger fires — say, a deal moves to "Proposal Sent" — Zapier posts a message to a Slack channel and logs the change to a Google Sheet for reporting. No customer data moves anywhere; this is purely an internal visibility use case, and it's one of the lower-risk ways to use the integration because nothing customer-facing depends on it working perfectly every time.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Feeding an external accounting or reporting tool.</strong> A payment completes in Stripe. Zapier catches that event and updates a GoHighLevel contact's custom field or applies a tag, which a GoHighLevel workflow then uses to trigger a receipt sequence or move the contact to a "customer" pipeline. This is a case where the logic genuinely needs to live partly outside GoHighLevel, since GoHighLevel doesn't natively watch Stripe events on its own.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Booking tools that don't have a native GoHighLevel connection.</strong> Some scheduling apps sync directly with GoHighLevel, but for the ones that don't, Zapier's Calendly and Jobber connections (both listed as popular LeadConnector pairings) can create or update a contact and opportunity the moment a booking is made, without anyone manually re-entering the appointment into the CRM.
            </p>

            {/* Section: Zapier vs Workflows */}
            <h2 id="zapier-vs-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should You Use Zapier or GoHighLevel Workflows?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the question the article opened with, and it deserves a direct answer instead of "it depends" hand-waving: <strong className="text-[#1A2236]">where should this logic live?</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's own <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">workflow automation</Link> engine already handles triggers and actions entirely inside the platform — no Zapier task cost, no external dependency, and no polling delay on paid plans. If the entire event and the entire response happen inside GoHighLevel — a form is submitted on a GoHighLevel-hosted page, and the response is a tagged contact and an email sequence — there's rarely a good reason to route that through Zapier at all. It adds a dependency, a monthly task cost, and a second system to debug, for no functional gain.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zapier earns its place when a different application needs to be part of the loop — something GoHighLevel doesn't talk to directly. The decision framework in practice:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Use native GoHighLevel automation</strong> when the trigger and the action both live inside GoHighLevel, or when the destination is something GoHighLevel already integrates with directly.</li>
              <li><strong className="text-[#1A2236]">Use Zapier</strong> when an external app is genuinely part of the trigger or the action, and no native GoHighLevel integration exists for it.</li>
              <li><strong className="text-[#1A2236]">Use a hybrid</strong> (Zapier hands off to a GoHighLevel workflow) when external data needs to enter the CRM, but the customer-facing follow-up logic should live in one consistent place rather than being split across two automation engines.</li>
              <li><strong className="text-[#1A2236]">Use webhooks or the API directly</strong> when volume, speed, or complexity outgrows what a no-code connector reasonably handles — more on this next.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A successful Zapier connection is not, by itself, evidence that Zapier was the right tool for the job. Plenty of technically working Zaps exist that add a monthly cost and a point of failure to something GoHighLevel could have handled natively in one workflow.
            </p>

            {/* Section: Webhooks or API */}
            <h2 id="webhooks-or-api" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Webhooks or the API Make More Sense
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zapier's LeadConnector connector covers a defined, common set of triggers and actions well. It doesn't cover everything — and when your need falls outside that set, there are two other paths, at increasing levels of technical investment:
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Webhooks.</strong> GoHighLevel supports both receiving webhooks (an "Inbound Webhook" workflow trigger that lets an external system push data into a GoHighLevel automation) and, on the outbound side, sending data out when specific events occur. This is a more flexible, no-Zapier-required way to move data in real time, and it's commonly used when Zapier's task-based billing makes high-volume automations expensive, or when the specific event you need to react to isn't one of Zapier's defined LeadConnector triggers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Direct API integration.</strong> GoHighLevel's REST API gives programmatic access to contacts, opportunities, pipelines, and more, for teams building custom applications or handling data volume and logic complexity that a no-code tool isn't built for. This is meaningfully more technical — it requires developer resources — and it's the right call when the automation needs conditional logic, error handling, or data transformation beyond what Zapier's Paths and Filters features comfortably support.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If your team can build and maintain custom integrations, GHL Scale Up's <Link href="/services/integrations" className="text-[#0E9BF0] hover:underline">integrations and API service</Link> covers exactly this territory — connecting GoHighLevel to Zapier, Make, Stripe, and custom webhook-based systems for cases that outgrow a simple no-code Zap.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The practical rule: start with the native Zapier connector. Move to webhooks when you need real-time speed or hit a trigger Zapier doesn't support. Move to the API when you need logic a no-code tool genuinely can't express.
            </p>

            {/* Section: Costs and Limitations */}
            <h2 id="costs-and-limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Costs and Limitations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both figures below were checked directly against each platform's own pricing source rather than taken from secondary write-ups, though both platforms do adjust task tiers and plan pricing periodically, so treat these as accurate as of this writing and confirm before budgeting against them.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Zapier,</strong> per its own pricing page, currently runs four tiers. <strong className="text-[#1A2236]">Free</strong> costs $0/month forever: 100 tasks/month, two-step Zaps only, and 15-minute trigger polling. <strong className="text-[#1A2236]">Professional</strong> starts from $19.99/month (billed annually; monthly billing runs higher) at the smallest task tier, and unlocks multi-step Zaps, unlimited premium apps, webhooks, 2-minute polling, and AI fields — live chat support kicks in specifically at the 2,000-task tier and above. <strong className="text-[#1A2236]">Team</strong> starts from $69/month (annual billing), adding up to 25 users, shared Zap workflows and app connections, SAML SSO, and priority support. <strong className="text-[#1A2236]">Enterprise</strong> is custom-priced, with unlimited users and advanced admin controls. Every paid tier lets you choose a task allowance from 750 tasks up to 2 million+ per month, with the per-task cost dropping as volume increases.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A few billing mechanics worth knowing, confirmed directly from Zapier's own FAQ: triggers never consume a task, checking (polling) for new data never consumes a task, and built-in steps like Filter, Formatter, Path, and Delay are free — only a successfully completed action step counts. If you exceed your plan's task limit, Zapier either switches you to pay-per-task billing (a higher per-task rate, capped at 3x your plan's included volume) or pauses your Zaps until the next billing cycle, depending on your account settings.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel's</strong> own support documentation confirms three subscription tiers — Starter, Unlimited, and Agency Pro — with Unlimited and Agency Pro explicitly referenced at $297/mo and $497/mo respectively in HighLevel's official pricing guide (when explaining which plans unlock fee rebilling). These line up with the $97/$297/$497 structure reported consistently across independent sources: Starter is capped at a small number of sub-accounts, while Unlimited and Agency Pro add unlimited sub-accounts, white-labeling, and — on Agency Pro specifically — SaaS Mode reselling with full markup control. On top of the base plan, usage-based fees apply for SMS, email, phone numbers, and AI features, billed through GoHighLevel's Agency Wallet. GHL Scale Up's <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing guide</Link> covers every tier and add-on cost in detail.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Beyond cost, the integration's real limitations are architectural, not financial: it only covers the triggers and actions LeadConnector explicitly exposes, it depends on Zapier's polling or webhook timing rather than instant execution on every plan, and it requires you (not GoHighLevel or Zapier) to actively manage field mapping and duplicate handling as your data sources multiply.
            </p>

            {/* Section: What to Do Next */}
            <h2 id="what-to-do-next" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What to Do Next
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you've read this far, you likely fall into one of two groups: you're ready to build the Zap yourself, or you've realized the automation you actually need is more involved than a single Zap — multiple systems, custom logic, or high enough volume that task-based billing gets expensive fast. In the first case, the steps above are enough to get a working connection today. In the second, that's a systems and architecture question rather than a setup-steps question, and it's worth mapping out before you build anything.
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

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Connecting Zapier to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps you build the right integrations, avoid common setup mistakes, and ensure your data flows correctly.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience setting up, auditing, and integrating GoHighLevel with Zapier and other platforms. All integration details verified as of September 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
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