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
  BarChart3,
  Workflow,
  Info,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';
import Image from 'next/image';

export default function SalesforceToGoHighLevelMigrationClient() {
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
        'object-model',
        'export-data',
        'custom-objects',
        'rebuild-workflows',
        'documents-contracts',
        'import-process',
        'sandbox-testing',
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
      q: "Can I automatically migrate from Salesforce to GoHighLevel?",
      a: "Partially. HighLevel does publish an official Salesforce migration guide covering the general process exporting contacts, accounts, and opportunities as CSV, then importing and rebuilding pipelines and automations in GHL. What's not automatic: Salesforce Flows, Process Builder, and relational Custom Object structures have no automated import path and must be manually rebuilt."
    },
    {
      q: "How do Salesforce Accounts map to GoHighLevel?",
      a: "Three options, depending on how your business uses Accounts. Map to GHL Companies for the simplest approach, suited to most SMB use cases. Map to a Custom Object to preserve parent-child hierarchy at the cost of one Custom Object slot. Map to a Custom Field on the Contact for the lightest touch, if you never need Account-level rollups."
    },
    {
      q: "What happens to Salesforce Custom Objects in GoHighLevel?",
      a: "GoHighLevel supports Custom Objects on every plan, including Starter, as of an October 2025 update, with a cap of 10 Custom Objects per location. Businesses with more than 10 Custom Objects need to prioritize which ones migrate as full Custom Objects versus collapsing into Contact fields or archiving."
    },
    {
      q: "Do Salesforce Flows and Process Builder transfer to GoHighLevel?",
      a: "No. They must be documented business intent, trigger conditions, actions in order, exit conditions and manually rebuilt in GHL's Workflow Builder. This is typically the most time-consuming phase of a Salesforce migration."
    },
    {
      q: "How long does a Salesforce to GoHighLevel migration take?",
      a: "Typically 4–8 weeks, depending on data volume, Custom Object count, and automation complexity. A simple migration (under 10,000 contacts, minimal Custom Objects, under 15 automations) can complete in 3–4 weeks. A complex migration (100,000+ contacts, 10+ Custom Objects, 30+ automations) can take 8–12 weeks."
    },
    {
      q: "Should I use Salesforce Sandbox for migration testing?",
      a: "Yes, whenever available. Sandbox gives you a safe environment to test export methods and field mapping without touching production data refresh from Production, test exports there, import into a fresh GHL test sub-account, document issues, then apply fixes to the real migration."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why Do Businesses Migrate from Salesforce to GoHighLevel?' },
    { id: 'object-model', title: '2. How Does the Salesforce Object Model Translate to GoHighLevel?' },
    { id: 'export-data', title: '3. How Do You Export Data from Salesforce Correctly?' },
    { id: 'custom-objects', title: '4. How Do You Handle Salesforce Custom Objects in GHL?' },
    { id: 'rebuild-workflows', title: '5. How Do You Rebuild Salesforce Workflows in GHL?' },
    { id: 'documents-contracts', title: '6. Documents, Contracts, and E-Signature' },
    { id: 'import-process', title: '7. What Is the Dependency-Ordered Import Process?' },
    { id: 'sandbox-testing', title: '8. How Do You Handle Salesforce Sandbox Testing Before Cutover?' },
    { id: 'migration-comparison', title: '9. How Does Salesforce Migration Compare to Zoho or HubSpot?' },
    { id: 'faq', title: '10. Frequently Asked Questions' }
  ];

  const objectMapping = [
    { salesforce: 'Lead', ghl: 'Contact with Lead-Status tag', strategy: 'Import as GHL Contact, add tag "lead-source-X" matching original Lead Source' },
    { salesforce: 'Contact', ghl: 'Contact', strategy: 'Direct import with all fields, associated to Company/Account via Company Name field' },
    { salesforce: 'Account', ghl: 'Company OR Custom Object OR Custom Field', strategy: 'GHL Companies module for simple orgs; Custom Object for complex hierarchies; Custom Field for lightweight use cases' },
    { salesforce: 'Opportunity', ghl: 'Opportunity in a Pipeline', strategy: 'Direct import; pipeline stages must be recreated in GHL first; deal values transfer as numeric fields' },
    { salesforce: 'Activity / Task', ghl: 'Note or Custom Field on Contact', strategy: 'Historical activities stay in Salesforce archive; active tasks recreated as GHL notes or Custom Object records' },
    { salesforce: 'Case', ghl: 'Contact with Support-Ticket-Status tag', strategy: 'GHL does not have a native Case object; simulate via tags and Custom Fields, or use GHL Custom Object' },
    { salesforce: 'Campaign', ghl: 'Tag or Workflow', strategy: 'Salesforce Campaigns become GHL tags or trigger a GHL Workflow entry' },
    { salesforce: 'Custom Object (each)', ghl: 'Custom Object OR Custom Fields on Contact', strategy: '10-object cap on GHL Custom Objects; complex objects with rare fields often better collapsed into fields' }
  ];

  const workflowMapping = [
    { salesforce: 'Process Builder', ghl: 'Workflow', strategy: 'Rebuild manually document Salesforce trigger criteria first' },
    { salesforce: 'Flow (Screen Flow)', ghl: 'Multi-step form or workflow', strategy: 'No direct equivalent for screen flows rebuild logic as GHL forms + workflows' },
    { salesforce: 'Flow (Autolaunched Flow)', ghl: 'Workflow with API trigger', strategy: 'Rebuild as GHL workflow triggered by tag, event, or webhook' },
    { salesforce: 'Approval Process', ghl: 'Workflow with manual approval step', strategy: 'Rebuild as multi-branch workflow with task assignment and Slack/email notification' },
    { salesforce: 'Validation Rules', ghl: 'Field constraints on GHL forms', strategy: 'Move validation to form-level in GHL Forms Builder' },
    { salesforce: 'Assignment Rules', ghl: 'Round-robin action in Workflow', strategy: 'Use GHL round-robin action or manual assignment logic' },
    { salesforce: 'Email Templates', ghl: 'Email templates in GHL', strategy: 'Copy HTML source of each active Salesforce template into GHL Marketing > Emails > Templates > HTML mode' }
  ];

  const comparison = [
    { factor: 'Data export complexity', salesforce: 'High (3 methods, dependency-ordered)', hubspot: 'High (multiple export types)', zoho: 'Moderate (200K record limit, 7-day window)' },
    { factor: 'Object model complexity', salesforce: 'Very high (relational, custom objects, master-detail)', hubspot: 'Moderate (contacts + companies + deals)', zoho: 'Moderate (modules, custom fields)' },
    { factor: 'Workflow rebuild complexity', salesforce: 'Very high (Process Builder + Flows + Approval + Rules)', hubspot: 'High (Marketing Hub sequences)', zoho: 'High (Zoho-specific triggers)' },
    { factor: 'Custom Objects handling', salesforce: 'Critical (10-object GHL cap)', hubspot: 'Not applicable in same form', zoho: 'Manageable via custom fields' },
    { factor: 'Sandbox testing available', salesforce: 'Yes (Enterprise+ editions)', hubspot: 'Not applicable', zoho: 'Limited' },
    { factor: 'Typical timeline', salesforce: '4-8 weeks', hubspot: '3-6 weeks', zoho: '2-4 weeks' },
    { factor: 'Biggest risk', salesforce: 'Relational data breakage from wrong-order CSV import', hubspot: 'Data loss from complex exports', zoho: 'Workflow rebuild scope' }
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
          <span className="text-[#1A2236] font-medium">Salesforce to GoHighLevel Migration</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Salesforce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Enterprise</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Salesforce to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ builds delivered · Verified against official HighLevel documentation, September 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Migrating from Salesforce to GoHighLevel is the highest-complexity CRM migration in the GHL ecosystem, primarily because Salesforce's relational object model Leads, Contacts, Accounts, Opportunities, Activities, and Custom Objects with defined parent-child relationships does not map directly onto GoHighLevel's contact-centric structure. This is a data-architecture problem, not a drag-and-drop setup. Businesses migrate anyway because Salesforce's cost, complexity, and per-user licensing become disproportionate once a team no longer needs enterprise-grade customization.
          </p>

          {/* Direct Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Direct answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              To migrate from Salesforce to GoHighLevel: (1) audit your Salesforce instance and decide your Account-mapping strategy, (2) export data via Salesforce's Data Export tool or Data Loader in dependency order (Accounts first, then Contacts, then Opportunities), (3) build your GHL infrastructure custom fields, pipelines, and Custom Objects before importing anything, (4) test-import 50–200 records to verify mapping, (5) run the full staged import, (6) rebuild Salesforce Flows and Process Builder automations manually in GHL's Workflow Builder, (7) run both platforms in parallel for 3–4 weeks before cutover. Typical timeline is 4–8 weeks depending on data volume, Custom Object count, and automation complexity. HighLevel does publish an official Salesforce migration guide covering the general process; this guide adds the Salesforce-specific technical depth object mapping strategy, Custom Object treatment, and dependency-ordered import that the official guide doesn't cover at this level of detail.
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
              href="#custom-objects"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Custom Objects Guide
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
              <div className="text-sm font-bold text-white mb-2">Migrating from Salesforce?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle the highest-complexity CRM migrations instance audit, object mapping, ETL pipeline, Sandbox testing, and workflow rebuild.</p>
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
              1. Why Do Businesses Migrate from Salesforce to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Businesses migrate from Salesforce to GoHighLevel primarily to reduce total cost of ownership. Salesforce's per-user licensing, admin overhead, and third-party integration stack often exceed the actual value once a team has stopped requiring enterprise-grade customization.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Per-user pricing at scale:</strong> Salesforce per-user pricing ranges from roughly $25/user/month (Essentials) to $330/user/month (Unlimited), compounding with team size. GoHighLevel is flat-rate: $97–$497/month regardless of user count.</li>
              <li><strong className="text-[#1A2236]">Admin overhead:</strong> Salesforce typically requires ongoing admin work a certified admin or consultancy to maintain flows, page layouts, permission sets, and validation rules. GHL's simpler data model reduces this substantially.</li>
              <li><strong className="text-[#1A2236]">Third-party stack dependency:</strong> Salesforce commonly pairs with a separate marketing automation tool, a support desk, and a scheduling tool. GHL consolidates these into one platform.</li>
              <li><strong className="text-[#1A2236]">Agency and reseller model:</strong> GHL's sub-account architecture, white-labeling, and SaaS Mode let agencies resell a branded CRM to clients something Salesforce doesn't natively support without significant custom development.</li>
            </ul>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST DISCLAIMER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL is not a drop-in Salesforce replacement for every business. Salesforce remains meaningfully better for multi-team enterprise sales with complex approval hierarchies, businesses with deep third-party integration requirements, companies requiring advanced native AI (Einstein/Agentforce), and regulated industries with Salesforce-native compliance products. If your team genuinely needs Salesforce-level customization, this migration may not be the right move.
              </p>
            </div>

            {/* Section 2: Object Model */}
            <h2 id="object-model" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. How Does the Salesforce Object Model Translate to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Salesforce uses a relational object model: Accounts contain Contacts, Contacts belong to Accounts, Opportunities link to both, and Custom Objects can have master-detail or lookup relationships. GoHighLevel uses a contact-centric model where the Contact is the primary record and other entities attach to it. Understanding this difference is the foundation of the entire migration.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Salesforce Object</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Equivalent</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {objectMapping.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.salesforce}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.strategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE CORE ARCHITECTURAL DECISION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                the biggest single choice is what to do with Salesforce Accounts. <strong>Option 1: map to GHL Companies</strong> simplest, works for most SMB use cases. <strong>Option 2: map to a Custom Object</strong> preserves parent-child hierarchy but uses one of your Custom Object slots. <strong>Option 3: map to a Custom Field on the Contact</strong> lightest touch, loses relational integrity, but works if you never need Account-level rollups. Choose based on whether your business logic actually uses Account rollups (revenue by Account, all contacts at an Account) if yes, use Option 1 or 2; if no, Option 3 is faster and cleaner.
              </p>
            </div>

            {/* IMAGE */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/salesforce-to-ghl-migration-guide.png"
                  alt="Salesforce to GoHighLevel migration: Object mapping, custom objects strategy, workflow rebuild, and import process overview"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Salesforce → GoHighLevel: Object mapping, custom objects strategy, workflow rebuild, and dependency-ordered import</span>
              </div>
            </div>

            {/* Section 3: Export Data */}
            <h2 id="export-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Export Data from Salesforce Correctly?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Salesforce offers three export methods suited to different data volumes and complexity levels.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Data Export tool (Setup → Data Export):</strong> a full backup as a ZIP of CSVs. Best for smaller instances (under 100,000 records). Runs asynchronously with an email notification when ready.</li>
              <li><strong className="text-[#1A2236]">Reports export:</strong> create a report filtered to specific objects and fields, export as CSV. Best for selective exports. Limited to 2,000 rows in classic reports.</li>
              <li><strong className="text-[#1A2236]">Data Loader:</strong> bulk API-based export, best for large volumes (100,000+ records). Runs from your desktop, requires API access, and handles relationships and lookups correctly.</li>
            </ul>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">EXPORT IN DEPENDENCY ORDER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                parent objects first, child objects second. Salesforce Account IDs are 18-character strings that Contacts and Opportunities reference. Exporting Contacts before Accounts leaves the Contact CSV with Account IDs you haven't extracted records for yet, making the downstream lookup impossible. Correct order: (1) Accounts, (2) Contacts, (3) Opportunities, (4) Activities, (5) Custom Objects.
              </p>
            </div>

            {/* Section 4: Custom Objects */}
            <h2 id="custom-objects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Handle Salesforce Custom Objects in GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel supports Custom Objects on every plan Starter, Unlimited, and Pro as of an October 2025 platform update, with a cap of 10 Custom Objects per location. Earlier guidance suggesting this was limited to paid tiers is now outdated. Supported unique field types are Single Line Text, Multi Line Text, Number, and Phone, with up to 10 unique fields per object and up to 10 unique association labels between any two objects. Opportunities now also support associations to Custom Objects directly.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each Salesforce Custom Object needs one of three treatments in GHL:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Full Custom Object migration:</strong> if you have fewer than 10 total Custom Objects and each needs independent queryability, create matching GHL Custom Objects. Field mapping is manual per object.</li>
              <li><strong className="text-[#1A2236]">Custom Fields on Contact:</strong> if a Custom Object is essentially additional data about a Contact (a 'Vehicle' object where each Contact has one vehicle), collapse it into Custom Fields. You lose the ability to query 'all vehicles' independently, but the model simplifies.</li>
              <li><strong className="text-[#1A2236]">Historical archive:</strong> for compliance or rarely-queried historical records (audit logs, old contract versions), export as CSV and store as an archive rather than migrating into active GHL.</li>
            </ul>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE 10-OBJECT CAP DECISION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                businesses with 15–20 Salesforce Custom Objects must consolidate. Rank objects by frequency of active use, record count, and whether independent querying matters. Migrate the top 8–9 as GHL Custom Objects, leaving 1–2 slots for future needs, and collapse or archive the rest.
              </p>
            </div>

            {/* Section 5: Rebuild Workflows */}
            <h2 id="rebuild-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Rebuild Salesforce Workflows in GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Salesforce automations Process Builder, Flows, Approval Processes, Workflow Rules do not export to GoHighLevel. They must be documented, then manually rebuilt in GHL's Workflow Builder using GHL's own trigger-and-action system.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Salesforce Element</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Equivalent</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {workflowMapping.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.salesforce}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.strategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">DOCUMENT EACH AUTOMATION</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Business intent:</strong> what is this supposed to achieve?</li>
                <li><strong className="text-[#0E9BF0]">Trigger condition:</strong> what starts it?</li>
                <li><strong className="text-[#0E9BF0]">Actions in order:</strong> what does it do, step by step?</li>
                <li><strong className="text-[#0E9BF0]">Exit conditions:</strong> when does it stop?</li>
              </ul>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For each automation, document: the business intent (what is this supposed to achieve), the trigger condition (what starts it), the actions in order (what it does, step by step), and the exit conditions (when does it stop). Then rebuild in GHL's Workflow Builder using the equivalent trigger, action, wait, and branching logic. For the full GHL workflow walkthrough, see{' '}
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel's workflow automation guide</Link>.
            </p>

            {/* Section 6: Documents, Contracts, and E-Signature */}
            <h2 id="documents-contracts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Documents, Contracts, and E-Signature
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is a genuinely underserved part of most Salesforce migration guidance, including earlier guidance from GHL Scale Up itself. If your Salesforce use includes document or contract templates, quotes, or proposals with e-signature, these need a deliberate migration step: export existing templates, rebuild them in GHL's Documents feature, and reconfigure e-signature and document-tracking settings so you retain visibility into when documents are opened, viewed, and signed.
            </p>

            {/* Section 7: Import Process */}
            <h2 id="import-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Is the Dependency-Ordered Import Process?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Dependency-ordered import means loading data into GoHighLevel in the sequence that ensures parent records exist before child records reference them, preventing broken relationships in the migrated data.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Prepare your GHL environment.</strong> Recreate all Custom Fields, Custom Objects, pipelines, and tags before any data import.</li>
              <li><strong className="text-[#1A2236]">Import Accounts as Companies</strong> (if using that mapping option). Each Company gets a GHL Company ID.</li>
              <li><strong className="text-[#1A2236]">Import Contacts linked to Companies.</strong> The Company Name field in each Contact row must match a Company created in the prior step.</li>
              <li><strong className="text-[#1A2236]">Import Opportunities linked to Contacts.</strong> Each row must reference the Contact by email or phone so GHL associates it correctly.</li>
              <li><strong className="text-[#1A2236]">Import Activities as Notes or Custom Object records.</strong> Historical activities become Notes; recent open tasks can be created manually or via a bulk workflow.</li>
              <li><strong className="text-[#1A2236]">Test-import 50–200 records first.</strong> Verify every field maps correctly, dates display correctly, phone numbers are formatted consistently, tags are attached, and Company links are intact.</li>
              <li><strong className="text-[#1A2236]">Run the full staged import</strong> only after test-batch verification passes, in batches to avoid rate limits.</li>
            </ol>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For general migration pitfalls beyond what's specific to Salesforce, see{' '}
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">8 common GHL migration mistakes</Link>.
            </p>

            {/* Section 8: Sandbox Testing */}
            <h2 id="sandbox-testing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Do You Handle Salesforce Sandbox Testing Before Cutover?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A Salesforce Sandbox is a copy of your production instance used for safe testing without touching live data.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Refresh a Sandbox from Production</strong> (Full Sandbox on Enterprise+ editions, Partial Copy Sandbox on lower tiers) to get a current data snapshot.</li>
              <li><strong className="text-[#1A2236]">Test all three export methods in Sandbox</strong> with representative data, and note how long each takes and whether the output matches expectations.</li>
              <li><strong className="text-[#1A2236]">Practice the import in a fresh GHL test sub-account.</strong> Verify object mapping, custom field data, and relationships.</li>
              <li><strong className="text-[#1A2236]">Document any surprises</strong> field mapping issues, format conversions, unexpected data types as fixes to apply during the real migration.</li>
              <li><strong className="text-[#1A2236]">Only then run the production export and import</strong>, with the dress rehearsal already complete.</li>
            </ul>

            {/* Section 9: Migration Comparison */}
            <h2 id="migration-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. How Does Salesforce Migration Compare to Zoho or HubSpot?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Salesforce</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Zoho</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.salesforce}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.zoho}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the Zoho equivalent, see{' '}
              <Link href="/blog/zoho-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Zoho to GoHighLevel migration</Link>.
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For HubSpot, see{' '}
              <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel</Link>. For how Salesforce compares to every platform GHL Scale Up covers, see{' '}
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
              Want the migration handled end-to-end object mapping, Custom Object strategy, dependency-ordered import, and Sandbox testing included?{' '}
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
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to migrate from Salesforce to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles the highest-complexity CRM migrations. Salesforce instance audit, object mapping strategy, dependency-ordered ETL pipeline, Sandbox testing, workflow rebuild, and 30-day post-migration support.
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