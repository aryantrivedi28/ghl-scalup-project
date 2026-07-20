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
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function SalesforceToGoHighLevelMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'object-model',
        'export-data',
        'custom-objects',
        'rebuild-workflows',
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
            break;
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
      q: "Can I automatically migrate from Salesforce to GoHighLevel?",
      a: "No, not directly. Unlike Zoho (which has an official GHL migration guide), GoHighLevel does not publish an official Salesforce migration tool or documented import path for Salesforce Flows, Process Builder, or relational objects. What is possible: exporting Salesforce data via CSV (using Data Export tool, Reports, or Data Loader), mapping fields manually, and importing to GHL via the standard Contacts/Opportunities import. Workflows must be manually rebuilt. Third-party migration services (including GHL Scale Up) handle the full end-to-end process."
    },
    {
      q: "How do Salesforce Accounts map to GoHighLevel?",
      a: "There are three options depending on how your business uses Accounts. Option 1: Map to GHL Companies (built-in module) simplest, works for most SMB use cases where you need to view all Contacts belonging to a Company. Option 2: Map to a GHL Custom Object 'Account' preserves parent-child hierarchy but consumes one of the 10 Custom Object slots. Option 3: Map to a Custom Field 'company-name' on the Contact lightest touch, loses relational integrity but works if you never query Account-level rollups. Choose based on whether your business logic actively uses Account rollups."
    },
    {
      q: "What happens to Salesforce Custom Objects in GoHighLevel?",
      a: "GoHighLevel does support Custom Objects on all plans as of current documentation (cited by ClonePartner, April 2026, referencing help.gohighlevel.com). There are three constraints: a 10-object cap, limited unique field types, and support gaps in Email Campaigns, Bulk Email/SMS, Conversations, Calendars, and Payments. Practically, this means (a) migrate your top 8-9 highest-use Custom Objects as GHL Custom Objects, (b) collapse Custom Objects that are essentially additional Contact data into Custom Fields on the Contact record, and (c) archive historical Custom Objects that are rarely queried. Verify current Custom Object plan support in GHL's Trust Center."
    },
    {
      q: "Do Salesforce Flows and Process Builder transfer to GoHighLevel?",
      a: "No. Salesforce Flows, Process Builder, Approval Processes, and Validation Rules do not export and cannot be automatically imported into GoHighLevel. They must be documented (business intent, trigger conditions, actions in order, exit conditions) and then manually rebuilt in GHL's Workflow Builder using GHL's own trigger and action system. This is the most time-consuming phase of a Salesforce migration typically 40-60% of the total project time depending on automation count."
    },
    {
      q: "How long does a Salesforce to GoHighLevel migration take?",
      a: "Typical timeline is 4 to 8 weeks depending on data volume, custom object count, workflow complexity, and Sandbox testing depth. A simple migration (under 10,000 contacts, minimal Custom Objects, under 15 automations) can complete in 3-4 weeks. A complex migration (100,000+ contacts, 10+ Custom Objects, 30+ Flows and Process Builder automations, multiple pipeline stages) can take 8-12 weeks. Salesforce is the highest-complexity CRM migration type in the GHL ecosystem confirmed by AutomateToGrow (April 2026)."
    },
    {
      q: "What is the cost difference between Salesforce and GoHighLevel?",
      a: "It depends on team size. Salesforce per-user pricing ranges from ~$25/user/month (Essentials) to $330/user/month (Unlimited), plus typical add-ons for Marketing Cloud, Service Cloud, and third-party integrations. GoHighLevel is flat-rate: $97-$497/month regardless of user count, plus usage fees for SMS, email, and AI. For a 10-user Salesforce Professional Edition instance (~$800/month base + add-ons), migrating to GoHighLevel Unlimited ($297/month + usage) typically produces $500-$2,000/month in platform cost savings, plus reduced admin overhead. Verify your actual Salesforce spend before quoting savings figures."
    },
    {
      q: "Should I use Salesforce Sandbox for migration testing?",
      a: "Yes, whenever available. Salesforce Sandbox (Full Sandbox on Enterprise+ editions, Partial Copy Sandbox on lower tiers) gives you a safe environment to test the export process and field mapping without touching production data. Standard approach: refresh Sandbox from Production, run all three export methods in Sandbox first, import to a fresh GHL test sub-account, document any field mapping or format issues found, then apply fixes to the production migration script. This dress rehearsal typically catches 80% of the surprises that would otherwise delay production cutover."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why do businesses migrate from Salesforce to GoHighLevel?' },
    { id: 'object-model', title: '2. How does the Salesforce object model translate to GoHighLevel?' },
    { id: 'export-data', title: '3. How do you export data from Salesforce correctly?' },
    { id: 'custom-objects', title: '4. How do you handle Salesforce Custom Objects in GHL?' },
    { id: 'rebuild-workflows', title: '5. How do you rebuild Salesforce workflows in GHL?' },
    { id: 'import-process', title: '6. What is the dependency-ordered import process?' },
    { id: 'sandbox-testing', title: '7. How do you handle Salesforce Sandbox testing before cutover?' },
    { id: 'migration-comparison', title: '8. How does Salesforce migration compare to Zoho or HubSpot?' },
    { id: 'faq', title: '9. Frequently asked questions' }
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

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Salesforce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Enterprise</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Salesforce to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide</span>
          </h1>

          {/* Author */}
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Builds Delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Migrating from Salesforce to GoHighLevel is the highest-complexity CRM migration in the GHL ecosystem, primarily because Salesforce's relational object model Leads, Contacts, Accounts, Opportunities, Activities, and Custom Objects with defined parent-child relationships does not map directly to GoHighLevel's contact-centric structure. This is a data-architecture problem, not a drag-and-drop setup. Businesses migrate anyway because Salesforce's cost, complexity, and per-user licensing become disproportionate for teams that no longer need enterprise-grade customisation. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has managed Salesforce migrations for mid-market service businesses moving to a unified all-in-one platform. This guide gives you the object mapping strategy, dependency-ordered import process, and honest complexity assessment with a clear note upfront about what is confirmed versus interpreted best practice. For the fully-managed path: <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                To migrate from Salesforce to GoHighLevel: (1) Audit your Salesforce instance, (2) design the object mapping strategy, (3) export data via Salesforce Data Export tool or Data Loader (dependency order: Accounts first, then Contacts linked to Accounts, then Opportunities linked to Contacts), (4) recreate custom fields, pipelines, and Custom Objects in GHL BEFORE import, (5) test-import 50-200 records to verify, (6) full staged import, (7) rebuild Salesforce Flows and Process Builder automations manually in GHL Workflow Builder, (8) run parallel for 3-4 weeks before cutover.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Timeline: typically 4-8 weeks depending on data volume, custom object count, and workflow complexity. Total complexity: HIGH. Important honesty note: unlike Zoho, GoHighLevel does not publish an official Salesforce migration guide all guidance below is aggregated from ecosystem partners and GHL's general Custom Objects and Import documentation.
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
              1. Why Do Businesses Migrate from Salesforce to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Businesses migrate from Salesforce to GoHighLevel primarily to reduce total cost of ownership Salesforce's per-user licensing, admin overhead, and third-party integration stack often exceed the actual value the business receives once the team has stopped requiring enterprise-grade customisation.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Per-user pricing at scale:</strong> Salesforce per-user pricing (from ~$25/user/mo Essentials to $330/user/mo Unlimited) compounds with team size. GHL is flat-rate: $97-$497/month regardless of user count.</li>
              <li><strong className="text-[#1A2236]">Admin overhead:</strong> Salesforce requires ongoing admin work typically a Certified Salesforce Admin or a consultancy at $75-$200/hour to maintain flows, page layouts, permission sets, and validation rules. GHL's simpler data model reduces admin work by an order of magnitude.</li>
              <li><strong className="text-[#1A2236]">Third-party stack dependency:</strong> Salesforce typically pairs with Salesforce Marketing Cloud or a separate marketing automation tool, plus a support desk (Zendesk/Freshdesk), plus a scheduling tool. GHL consolidates all of these into one platform.</li>
              <li><strong className="text-[#1A2236]">Feature bloat vs actual usage:</strong> HireGHLDeveloper (December 2025) reports many Salesforce customers pay for features they do not use. Cleaner unified alternative is often more valuable than deep customisation for mid-market service businesses.</li>
              <li><strong className="text-[#1A2236]">Agency and reseller model:</strong> GHL's sub-account architecture, white-label options, and SaaS Mode let agencies resell a branded CRM to clients something Salesforce does not natively support without significant custom development (ClonePartner, April 2026).</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST DISCLAIMER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL is NOT a drop-in Salesforce replacement for every business. Salesforce remains meaningfully better for: multi-team enterprise sales with complex approval hierarchies, businesses with deep third-party integration requirements (250+ marketplace apps), companies requiring advanced AI (Einstein/Agentforce), and regulated industries with specific Salesforce-native compliance products. Confirmed from HashStudioz (April 2026). Acknowledge this gap upfront before starting the migration if your team genuinely needs Salesforce-level customisation, do not migrate.
              </p>
            </div>

            {/* Section 2: Object Model */}
            <h2 id="object-model" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. How Does the Salesforce Object Model Translate to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Salesforce uses a relational object model where Accounts contain Contacts, Contacts belong to Accounts, Opportunities are linked to both Accounts and Contacts, and Custom Objects can have master-detail or lookup relationships. GoHighLevel uses a contact-centric model where the Contact is the primary record and other entities (Companies, Opportunities, Custom Objects) attach to it.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Salesforce Object</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel Equivalent</th>
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE CORE ARCHITECTURAL DECISION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The biggest single decision is what to do with Salesforce Accounts. Option 1: Map to GHL Companies (built-in) simplest, works for most SMB use cases. Option 2: Map to a Custom Object 'Account' preserves parent-child hierarchy but uses one of your 10 Custom Object slots. Option 3: Map to a Custom Field 'company-name' on the Contact lightest touch, loses relational integrity but works if you never need to view Account rollups. The right choice depends on whether your business logic actually uses Account-level rollups (revenue by Account, all contacts at an Account). If yes, use Option 1 or 2. If no, Option 3 is faster and cleaner.
              </p>
            </div>

            {/* Section 3: Export Data */}
            <h2 id="export-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Export Data from Salesforce Correctly?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Salesforce offers three export methods, each suited to different data volumes and complexity levels.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Data Export tool (Setup → Data Export):</strong> Weekly or monthly full backup as ZIP of CSVs. Best for smaller instances (under 100,000 records). Slow to trigger on-demand but comprehensive. Runs asynchronously with email notification when ready.</li>
              <li><strong className="text-[#1A2236]">Reports export:</strong> Create a report filtered to specific objects and fields, export as CSV. Best for selective exports (only closed-won Opportunities from last 3 years, or Contacts in specific segments). Limited to 2,000 rows in classic reports.</li>
              <li><strong className="text-[#1A2236]">Data Loader (Salesforce.com download):</strong> Bulk API-based export, best for large volumes (100,000+ records). Runs from your desktop, requires Salesforce credentials with API access, exports directly to CSV. Handles relationships and lookups correctly.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE EXPORT ORDER THAT PREVENTS RELATIONAL BREAKAGE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Export in dependency order: parent objects FIRST, child objects SECOND. Salesforce Account IDs are 18-character strings that Contacts and Opportunities reference. If you export Contacts before Accounts, the Contact CSV has AccountIDs that you have not yet extracted the Account records for making downstream lookup impossible. Correct order: (1) Accounts, (2) Contacts, (3) Opportunities, (4) Activities, (5) Custom Objects. Cited from ClonePartner (April 2026): "CSV imports silently destroy relational data at scale must use dependency-ordered ETL pipeline."
              </p>
            </div>

            {/* Section 4: Custom Objects */}
            <h2 id="custom-objects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Handle Salesforce Custom Objects in GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GoHighLevel supports Custom Objects on all plans, with a 10-object cap and specific support gaps in Email Campaigns, Bulk Email/SMS, Conversations, Calendars, and Payments (ClonePartner, April 2026, citing help.gohighlevel.com). This is different from older ecosystem guidance that said GHL had no Custom Objects at all.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Each Salesforce Custom Object needs one of three treatments in GHL:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Full Custom Object migration:</strong> If you have fewer than 10 total Custom Objects across your GHL instance and each object has multiple records that need queryability, create matching GHL Custom Objects. Field mapping is manual per object.</li>
              <li><strong className="text-[#1A2236]">Custom Fields on Contact:</strong> If a Salesforce Custom Object is essentially additional data about a Contact (for example, a 'Vehicle' object for an auto business where each Contact has one Vehicle), collapse it into Custom Fields on the Contact record. Loses the ability to query 'all vehicles' independently but simplifies the model.</li>
              <li><strong className="text-[#1A2236]">Historical archive:</strong> If a Custom Object is used for compliance or historical records that are rarely queried (audit logs, historical contract versions), export as CSV and store as an archive. Do not attempt to migrate into active GHL.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE 10-OBJECT CAP DECISION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL's 10 Custom Object cap forces prioritisation. Businesses with 15-20 Salesforce Custom Objects must consolidate. Common approach: rank Custom Objects by (a) frequency of active use, (b) how many records they contain, and (c) whether they need independent querying. Migrate the top 8-9 as GHL Custom Objects (leaving 1-2 slots for future needs). Collapse the rest into Custom Fields on Contact or archive. Confirmed cap from ClonePartner (April 2026, citing help.gohighlevel.com). Verify current Custom Object plan support in GHL's Trust Center before finalising the plan.
              </p>
            </div>

            {/* Section 5: Rebuild Workflows */}
            <h2 id="rebuild-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Rebuild Salesforce Workflows in GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Salesforce automations (Process Builder, Flows, Approval Processes, Workflow Rules) do not export to GoHighLevel. They must be documented before migration then manually rebuilt in GHL's Workflow Builder using GHL's own trigger and action system.
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Documentation approach for each Salesforce automation</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Business intent:</strong> What is this Flow supposed to achieve? "Send a welcome email to new Leads assigned to sales team, then wait 3 days and follow up if no response."</li>
                <li><strong className="text-[#0E9BF0]">Trigger condition:</strong> What starts it? "Lead created with Lead Source = Web-to-Lead form."</li>
                <li><strong className="text-[#0E9BF0]">Actions in order:</strong> What does it do? "Send Welcome Email → Wait 3 days → Check for reply (Yes/No branch) → If No, assign follow-up task to sales rep."</li>
                <li><strong className="text-[#0E9BF0]">Exit conditions:</strong> When does it stop? "When Lead status changes to Qualified or Disqualified."</li>
              </ul>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Then rebuild in GHL's Workflow Builder using GHL's Contact Created trigger, Send Email action, Wait step, If/Else branch, and Assign Task action. For the full GHL workflow walkthrough: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            {/* Section 6: Import Process */}
            <h2 id="import-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Is the Dependency-Ordered Import Process?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Dependency-ordered import means loading data into GoHighLevel in the correct sequence so that parent records exist before child records reference them. This prevents broken relationships in the migrated data.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Prepare GHL environment:</strong> Recreate all Custom Fields, Custom Objects, Pipelines, and Tags in GHL BEFORE any data import. Confirmed across all ecosystem sources.</li>
              <li><strong className="text-[#1A2236]">Import Accounts as Companies:</strong> If using GHL Companies module, import Accounts first. Each Company gets a GHL Company ID.</li>
              <li><strong className="text-[#1A2236]">Import Contacts linked to Companies:</strong> For each Contact CSV row, the Company Name field must match a Company created in Step 2. GHL will link the Contact to the correct Company.</li>
              <li><strong className="text-[#1A2236]">Import Opportunities linked to Contacts:</strong> Each Opportunity CSV row must reference the Contact by email or phone. GHL Opportunity import associates the Opportunity to the correct Contact.</li>
              <li><strong className="text-[#1A2236]">Import Activities as Notes or Custom Records:</strong> Historical activities become Notes on the Contact record. Recent open Tasks can be created manually or via bulk workflow.</li>
              <li><strong className="text-[#1A2236]">Test batch validation:</strong> Import 50-200 records first. Confirmed by Revset Labs (February 2026). Verify every field maps correctly, dates display correctly, phone numbers are E.164, tags are attached, and Company links are intact.</li>
              <li><strong className="text-[#1A2236]">Full staged import:</strong> Only after test batch verification passes, run the full import in batches of 10,000-25,000 records at a time to avoid rate limits.</li>
            </ol>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Related reading on migration errors to avoid: <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">GHL Migration Mistakes →</Link>
            </p>

            {/* Section 7: Sandbox Testing */}
            <h2 id="sandbox-testing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. How Do You Handle Salesforce Sandbox Testing Before Cutover?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Salesforce Sandbox is a copy of your production Salesforce instance used for testing. It gives you a safe environment to test the export process without touching production data.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Refresh Sandbox from Production:</strong> Salesforce Setup → Sandboxes. Refresh a Full Sandbox (available on Enterprise+/Unlimited editions) or a Partial Copy Sandbox to get a current snapshot of production data.</li>
              <li><strong className="text-[#1A2236]">Run export testing in Sandbox first:</strong> Test all three export methods (Data Export, Reports, Data Loader) in Sandbox with representative data. Measure how long each export takes and whether the CSV output structure matches expectations.</li>
              <li><strong className="text-[#1A2236]">Practice the import in a GHL test sub-account:</strong> Create a fresh GHL sub-account. Import the Sandbox exports. Verify the object mapping, custom field data, and relationships. This is your dress rehearsal.</li>
              <li><strong className="text-[#1A2236]">Document any surprises:</strong> Note field mapping issues, format conversions needed, and unexpected data types. These are the fixes to apply during the real production migration.</li>
              <li><strong className="text-[#1A2236]">Only then run production:</strong> With Sandbox testing complete and documented, execute the production Salesforce export and GHL import with confidence.</li>
            </ul>

            {/* Section 8: Migration Comparison */}
            <h2 id="migration-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Does Salesforce Migration Compare to Zoho or HubSpot?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Salesforce migrations are the highest-complexity CRM transition type, more complex than HubSpot and considerably more complex than Zoho.
            </p>

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
              For the Zoho equivalent: <Link href="/blog/zoho-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Zoho to GoHighLevel Migration Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For HubSpot: <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration Guide →</Link>
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED A SALESFORCE MIGRATION HANDLED</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles end-to-end Salesforce to GoHighLevel migrations: instance audit, object mapping design, dependency-ordered ETL pipeline, workflow rebuild, Sandbox testing, phased cutover, and 30-day post-migration support.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                For A2P registration integration: <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P Registration for Agencies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real GoHighLevel results and case studies: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For a specific migration plan for your Salesforce instance, <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* Section 9: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              9. Frequently Asked Questions
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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
                <Link href="/blog/zoho-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Zoho to GoHighLevel Migration →</Link>
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to migrate from Salesforce to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles the highest-complexity CRM migrations. Salesforce instance audit, object mapping strategy, dependency-ordered ETL pipeline, Sandbox testing, workflow rebuild, and 30-day post-migration support.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel migration and setup specialists · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                Because GoHighLevel does not publish an official Salesforce migration guide (unlike its Zoho equivalent article 155000003316), all technical guidance in this blog is aggregated from ecosystem partners (ClonePartner, Revset Labs, HireGHLDeveloper, Growthable, HashStudioz, Julian Mills) plus GoHighLevel's general Custom Objects and Import documentation. Every technical claim is source-cited. GoHighLevel Custom Object capabilities, plan support, and API limits change over time verify current details in GHL's Trust Center before executing your migration.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
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
                        {activeId === item.id && <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />}
                        <span className="flex-1">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
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
                5+ years GHL experience · 200+ systems built and migrated globally. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Migrating from Salesforce?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle the highest-complexity CRM migrations instance audit, object mapping, ETL pipeline, Sandbox testing, and workflow rebuild.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
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