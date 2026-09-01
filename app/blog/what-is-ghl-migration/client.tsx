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
  Star,
  AlertTriangle,
  Compass,
  XCircle,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Trophy,
  Facebook,
  Shield,
  DollarSign,
  Users,
  Building2,
  Calendar,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Cloud,
  Database,
  Clock,
  Mail,
  GraduationCap,
  Lightbulb,
  UserCheck,
  UserX,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2,
  Download,
  PieChart,
  GitMerge,
  FileCheck,
  Headphones,
  FileText,
  HelpCircle,
  Boxes,
  Combine,
  RefreshCw as RefreshCwIcon,
  ListChecks,
  ClipboardList,
  Printer,
  Video,
  Ticket,
  TrendingDown,
  Info,
  BarChart3,
  Mailbox,
  Layers,
  Workflow,
  Settings,
  Link2,
  Webhook
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function WhatIsGHLMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-ghl',
        'what-moves',
        'which-platforms',
        'migration-phases',
        'do-you-need',
        'timeline-cost',
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

      // Show floating Project Help card after scrolling past hero section
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
      q: "What is GoHighLevel migration?",
      a: "GoHighLevel migration is the process of moving your business's marketing and sales system from a platform you currently use (such as HubSpot, ClickFunnels, ActiveCampaign, or Kajabi) into GoHighLevel. It involves transferring your contacts, rebuilding your pipelines and automation workflows, reconnecting integrations, and configuring your new GHL account to handle everything your old platform was doing. The migration typically takes 1 to 8 weeks depending on how complex your current setup is."
    },
    {
      q: "What gets transferred in a GoHighLevel migration?",
      a: "Your contacts, tags, custom field values, and basic deal data can be transferred from most platforms via CSV export and import. What cannot be transferred automatically: automation workflows (every sequence must be rebuilt manually in GHL's workflow builder), email templates (the content is copied but rebuilt in GHL's editor), forms and landing pages (rebuilt in GHL's builder), and third-party integrations (disconnected and reconnected in GHL settings). The rule is: data transfers, logic does not."
    },
    {
      q: "Can I migrate from HubSpot to GoHighLevel?",
      a: "Yes. A HubSpot to GoHighLevel migration transfers contacts, custom properties, deal pipelines, and tags via CSV export and import. HubSpot automations, email templates, landing pages, and company associations cannot be automatically transferred. These are rebuilt inside GoHighLevel. HubSpot users should note that cancelling a HubSpot subscription starts a 25-day countdown before data is permanently deleted, so the migration should be fully completed before cancellation."
    },
    {
      q: "Do I need a GoHighLevel migration service or can I do it myself?",
      a: "A simple migration (a small contact list with few or no automations) is manageable as a DIY project with careful planning. Most businesses with 500 or more contacts and active automations benefit from professional migration support, primarily because the automation rebuild phase is easy to get wrong in ways that are not immediately visible (a broken trigger that fails silently for two weeks before anyone notices). Professional migration also includes parallel running and end-to-end testing that most DIY migrations skip."
    },
    {
      q: "How long does a GoHighLevel migration take for a beginner?",
      a: "A simple migration with a small contact list and no active automations takes 2 to 5 days. A standard migration with 3 to 10 automations and basic integrations takes 2 to 4 weeks. A complex migration with 10 to 30 automations, course content, or multiple client accounts takes 4 to 8 weeks. The biggest variable is the number of automations that need to be rebuilt. The contact import itself takes hours, not weeks."
    },
    {
      q: "What is the first step in a GoHighLevel migration?",
      a: "The first step is always an audit of your current platform, not an export. Before exporting or touching any data, document every active automation, every pipeline stage, every custom field, and every integration your business currently uses. This audit becomes your migration checklist and prevents the most common and costly mistake: discovering mid-migration that a critical automation or integration was missed. Once the audit is complete, set up the GHL account infrastructure (custom fields, pipeline stages, email sending domain) before importing a single contact."
    },
    {
      q: "Can GHL Scale Up handle my migration to GoHighLevel?",
      a: "Yes. GHL Scale Up manages complete GoHighLevel migrations from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, Mailchimp, Keap, and Salesforce. The service includes: migration audit and scoping, GHL account infrastructure build, data export and cleaning, contact import with field mapping, automation rebuild in GHL workflows, email domain configuration, parallel running management, and full handover documentation. Book a free migration assessment."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-ghl', title: '1. What Is GoHighLevel and Why Do Businesses Migrate to It?' },
    { id: 'what-moves', title: '2. What Exactly Moves During a GoHighLevel Migration?' },
    { id: 'which-platforms', title: '3. Which Platforms Can You Migrate to GoHighLevel From?' },
    { id: 'migration-phases', title: '4. What Are the Main Phases of a GoHighLevel Migration?' },
    { id: 'do-you-need', title: '5. Do You Actually Need a GoHighLevel Migration?' },
    { id: 'timeline-cost', title: '6. How Long Does a GHL Migration Take and What Does It Cost?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const migrationComponents = [
    { component: 'Contacts', meaning: 'Your list of leads, clients, and prospects with all their information', how: 'Exported as a CSV file from the old platform, cleaned, and imported into GHL with field mapping' },
    { component: 'Tags and segments', meaning: 'Labels or groups you have put contacts into', how: 'Transferred via the CSV export, then created and mapped in GHL before import' },
    { component: 'Pipelines', meaning: 'The visual stages your deals or leads move through', how: 'Rebuilt manually in GHL to match your existing stages' },
    { component: 'Automations', meaning: 'The sequences that fire automatically (welcome emails, follow-up texts, reminders)', how: 'Cannot be transferred automatically. Every automation must be rebuilt in GHL\'s workflow builder' },
    { component: 'Email templates', meaning: 'Pre-written emails used in your sequences', how: 'Copied across manually. The content is reused but the formatting is rebuilt in GHL\'s email editor' },
    { component: 'Forms and landing pages', meaning: 'Inquiry forms on your website or funnels', how: 'Rebuilt in GHL\'s form builder and funnel builder' },
    { component: 'Integrations', meaning: 'Connections to other tools like Stripe, Google, Facebook, or Zapier', how: 'Disconnected during migration and reconnected in GHL settings' },
    { component: 'Custom fields', meaning: 'Any extra information fields specific to your business', how: 'Created in GHL first, then mapped during the contact import' },
  ];

  const platformData = [
    { platform: 'HubSpot', transfers: 'Contacts, deals, custom properties, tags', rebuilds: 'Workflows, email templates, forms, landing pages, company associations', guide: '/blog/hubspot-to-gohighlevel-migration' },
    { platform: 'ClickFunnels', transfers: 'Contacts (CSV), funnels (via GHL\'s URL import tool for visual design)', rebuilds: 'Automation sequences, Stripe connections, domain settings, Pixel tracking', guide: '/blog/clickfunnels-to-gohighlevel-migration' },
    { platform: 'ActiveCampaign', transfers: 'Contacts, tags, custom fields (all via CSV)', rebuilds: 'All automations, email sequences, lead scoring models, forms', guide: '/blog/activecampaign-to-gohighlevel-migration' },
    { platform: 'Kajabi', transfers: 'Contacts and students (CSV)', rebuilds: 'All course content (manual rebuild), email sequences, offers, community', guide: '/blog/kajabi-to-gohighlevel-migration' },
    { platform: 'Zoho CRM', transfers: 'Contacts, deals, custom fields (CSV)', rebuilds: 'Automation blueprints, workflow rules, module customisations', guide: null },
    { platform: 'Mailchimp', transfers: 'Contact list (CSV), segments, tags', rebuilds: 'All email automations, customer journeys, audience segments', guide: null },
    { platform: 'Salesforce', transfers: 'Contacts, accounts, opportunities (CSV or API)', rebuilds: 'Process Builder flows, approval processes, complex object relationships', guide: null },
    { platform: 'Keap (Infusionsoft)', transfers: 'Contacts, tags, custom fields (CSV)', rebuilds: 'Campaign builder sequences, lead scoring, payment configurations', guide: null },
  ];

  const timelineData = [
    { type: 'Simple list transfer', what: 'Contacts only, no complex automations, new to any CRM', timeline: '2 to 5 days', diy: 'Manageable DIY with care' },
    { type: 'Standard single-account', what: 'Contacts, pipelines, 3 to 10 automations, basic integrations', timeline: '2 to 4 weeks', diy: 'Expert recommended' },
    { type: 'Complex single-account', what: 'Contacts, 10 to 30 automations, deep integrations, course content', timeline: '4 to 8 weeks', diy: 'Expert required' },
    { type: 'Agency multi-account', what: 'Multiple client accounts, varying complexity per client', timeline: '4 to 12 weeks', diy: 'Expert required' },
  ];

  const migrationPhases = [
    { phase: 'Audit and scoping', description: 'Map everything that exists in the old platform. Identify what transfers, what needs rebuilding, and what can be left behind. This phase prevents surprises later.' },
    { phase: 'GHL infrastructure build', description: 'Set up the receiving environment in GHL before any data moves. Create custom fields, pipeline stages, configure email domain (DKIM/SPF), set up phone numbers, and team access.' },
    { phase: 'Data export and import', description: 'Export contacts from the old platform, clean the CSV for duplicates, import into GHL with field mapping verified. Validate a sample of contacts after import.' },
    { phase: 'Automation rebuild', description: 'The most time-consuming phase. Every active automation is rebuilt in GHL\'s workflow builder from scratch. Test each one with a real contact before activating.' },
    { phase: 'Parallel running', description: 'Run both the old platform and GHL simultaneously for 1 to 2 weeks. New leads enter GHL. Existing contacts finish sequences in the old platform.' },
    { phase: 'Cutover and handover', description: 'Redirect all lead sources to GHL, cancel the old platform at the right time, and complete a final data export as a backup.' },
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
          <span className="text-[#1A2236] font-medium">What Is GHL Migration? Beginner's Guide 2026</span>
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
            What Is GoHighLevel Migration?<br />
            <span className="text-[#F8D000]">A Complete Beginner's Guide (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Migrations Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            If you have been hearing the term 'GoHighLevel migration' and are not entirely sure what it means 
            or whether it applies to your business, this guide is for you. 
            <strong className="text-white"> GHL Scale Up</strong> has completed 200+ migrations from HubSpot, 
            ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce. This is the plain English explanation 
            of what GHL migration actually is, what it involves, and how to know if you need one.
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
              href="#timeline-cost"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Timeline & Cost
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
                5+ years GHL experience · 200+ migrations completed globally from HubSpot, ClickFunnels, ActiveCampaign, 
                Kajabi, Zoho, and Salesforce. All information verified against GoHighLevel's official documentation as of June 2026.
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

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel migration means moving your business's marketing and sales system from a platform you are currently using into GoHighLevel.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It involves transferring your contacts, rebuilding your pipelines and automations, reconnecting your integrations, 
                and setting up your new GHL account so it does everything your old platform was doing, plus the things it could not. 
                The process typically takes <strong className="text-[#0E9BF0]">1 to 8 weeks</strong> depending on how complex your current setup is.
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Migration Help
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

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

            {/* Section 1: What Is GoHighLevel */}
            <h2 id="what-is-ghl" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is GoHighLevel and Why Do Businesses Migrate to It?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel (often shortened to GHL or HighLevel) is an all-in-one marketing and CRM platform built primarily for 
              marketing agencies, consultants, and service-based businesses. It combines a CRM, email marketing, SMS automation, 
              funnel builder, booking calendar, reputation management, AI tools, and course hosting into one dashboard, replacing 
              a stack of separate tools that most businesses are currently paying for individually.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The reason businesses migrate to GHL is almost always one of two things: cost or capability. On the cost side, an agency 
              paying for HubSpot, ClickFunnels, Calendly, and ActiveCampaign separately is typically spending $500 to $2,000 per month 
              on tools that do not connect properly. GoHighLevel Unlimited covers all of that for $297 per month flat. On the capability 
              side, businesses that need native SMS, an AI Voice Agent, white-label branding, or a sub-account model for managing multiple 
              clients find that no single platform other than GHL provides all of it at this price point.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a full overview of what the platform does: 
              <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline ml-1">What Is GoHighLevel? The Complete 2026 Guide →</Link>
            </p>

            {/* CTA Button 3: After Section 1 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Ready to migrate to GoHighLevel?</span> Let our team handle the transition.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Migration Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 2: What Moves */}
            <h2 id="what-moves" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Exactly Moves During a GoHighLevel Migration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A GHL migration is not a simple export-and-import of a single file. It involves several distinct components, each handled differently.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Component</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means in plain English</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How it moves</th>
                  </tr>
                </thead>
                <tbody>
                  {migrationComponents.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.component}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE ONE RULE THAT COVERS EVERYTHING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#1A2236]">Data transfers. Logic does not.</strong> Your contacts, tags, and custom field values 
                can be moved via CSV export and import. Every automation, every conditional trigger, and every workflow that runs your business 
                must be rebuilt from scratch inside GHL. This is the part that takes time and requires expertise.
              </p>
            </div>

            {/* Section 3: Which Platforms */}
            <h2 id="which-platforms" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Which Platforms Can You Migrate to GoHighLevel From?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel can receive migrations from almost any CRM, marketing platform, or funnel builder. Here is what the migration 
              involves for the most common platforms.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What typically transfers</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What must be rebuilt</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Guide</th>
                  </tr>
                </thead>
                <tbody>
                  {platformData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.transfers}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.rebuilds}</td>
                      <td className="py-3 px-3">
                        {item.guide ? (
                          <Link href={item.guide} className="text-[#0E9BF0] hover:underline">Guide →</Link>
                        ) : (
                          <span className="text-[#8A9BB0]">Available in service</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 4: Migration Phases */}
            <h2 id="migration-phases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Are the Main Phases of a GoHighLevel Migration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Regardless of which platform you are migrating from, every GHL migration follows the same core phases.
            </p>

            <div className="space-y-3 mb-6">
              {migrationPhases.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1A2236] mb-1">{item.phase}</h3>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a detailed timeline breakdown by platform and complexity: 
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline ml-1">GHL Migration Timeline Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the most common mistakes to avoid: 
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline ml-1">Common GHL Migration Mistakes Agencies Make →</Link>
            </p>

            {/* CTA Button 4: After Phases */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚡ Overwhelmed by the migration phases?</p>
              <p className="text-sm text-white/80 mb-4">We handle every phase for you. Audit, build, import, rebuild, test, and cutover.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get Migration Done
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 5: Do You Need */}
            <h2 id="do-you-need" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Do You Actually Need a GoHighLevel Migration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not every business that considers GoHighLevel needs a migration service. Here is how to tell which situation you are in.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> You need a migration if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You have an existing CRM with 500 or more contacts and active automations</li>
                  <li>You have been on your current platform for 12+ months with built up pipelines and sequences</li>
                  <li>You cannot afford any disruption to lead follow-up during the switch</li>
                  <li>You need to move multiple client accounts into GHL's sub-account model</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> You may not need a full migration if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You are just starting and have fewer than 100 contacts with no automations</li>
                  <li>Your current platform is simple enough to document and rebuild in a day</li>
                  <li>You are switching from a very basic tool like Mailchimp's free plan</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST MIDDLE GROUND</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Most businesses that have been operating for 12 or more months sit in the middle: too much to lose if they do it wrong, 
                not complex enough to require a 3-month enterprise migration. A structured 2 to 4 week migration with proper parallel 
                running and end-to-end testing handles most of these cases cleanly.
              </p>
            </div>

            {/* Section 6: Timeline and Cost */}
            <h2 id="timeline-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Long Does a GHL Migration Take and What Does It Cost?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it covers</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Timeline</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">DIY or expert?</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.what}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.timeline}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What does a migration cost?</strong> A DIY migration costs only your team's time, 
              which is significant but not a cash outlay. A professional migration at GHL Scale Up is quoted as a fixed-fee project 
              after a free assessment. The fee depends on contact volume, automation complexity, and number of client accounts involved. 
              Most businesses find that the first one to two months of savings from cancelling their old platform covers the migration cost entirely.
            </p>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">START WITH A FREE ASSESSMENT</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Not sure how complex your migration is or whether you need professional help? GHL Scale Up offers a free 30-minute migration assessment. 
                We review your current setup, tell you exactly what the migration involves, and give you a realistic timeline and fixed-fee quote.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real migration results: 
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Then <Link href="/contact" className="text-[#0E9BF0] hover:underline">book your free assessment at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Our full <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GoHighLevel migration service →</Link> covers contacts, 
              pipelines, automation rebuild, email domain setup, parallel running, and handover documentation.
            </p>

            {/* CTA Button 5: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Still not sure if you need a migration?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your current setup and tell you honestly if migrating makes sense.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions
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

            {/* CTA Button 6: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Migrating to GHL?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our migration specialists directly. We've done 200+ migrations.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from ClickFunnels to GoHighLevel →</Link>
                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline: How Long Does It Take? →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">Common GHL Migration Mistakes Agencies Make →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Thinking about migrating to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Start with a free 30-minute migration assessment. We review your current platform, tell you exactly what 
                  the migration involves, and give you a realistic timeline and fixed-fee quote. No obligation.
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