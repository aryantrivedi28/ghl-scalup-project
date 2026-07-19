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

export default function ZohoToGoHighLevelMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'nine-components',
        'export-data',
        'field-mapping',
        'rebuild-workflows',
        'campaigns-forms-phones',
        'parallel-cutover',
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
      q: "Can I automatically transfer data from Zoho to GoHighLevel?",
      a: "Partially. Contact records, deal records, and account records can be exported from Zoho as CSV files and imported into GoHighLevel via GHL's built-in CSV import tool. Workflows, users, forms, sites, contracts, and analytics cannot be automatically transferred and must be manually recreated in GoHighLevel. Confirmed from GoHighLevel's official Zoho to HighLevel Migration Guide (article 155000003316). This is because Zoho and GHL use different database schemas and automation structures a direct one-to-one transfer is not possible."
    },
    {
      q: "How long does a Zoho to GoHighLevel migration take?",
      a: "Typical timeline is 2 to 4 weeks depending on data volume, custom field count, workflow complexity, and phone number porting requirements. A simple migration under 5,000 contacts, minimal custom fields, under 10 workflows can complete in one week. A complex migration over 100,000 contacts, 40+ custom fields, 20+ workflows, phone number porting can take 4-6 weeks. The single longest phase is workflow rebuild, since every Zoho automation must be documented and manually rebuilt in GHL's workflow builder."
    },
    {
      q: "What is the Zoho export limit and what happens if I have more than 200,000 contacts?",
      a: "Zoho limits each export to a maximum of 200,000 records as a zipped CSV, and the export always includes the 200,000 oldest records. If your Zoho contact database exceeds this, you need multiple staged exports archive the oldest 200,000, then either delete them from Zoho or use date-range filtered exports to access the next batch. The download link for each export is only available for 7 days download and archive immediately after the export completes. Confirmed from GoHighLevel's official Zoho migration documentation."
    },
    {
      q: "Do Zoho workflows transfer to GoHighLevel?",
      a: "No. Zoho workflows cannot be exported and cannot be automatically imported into GoHighLevel. They must be documented (business intent, trigger conditions, actions, exit conditions) and then manually rebuilt in GHL's workflow builder using GHL's own trigger and action system. This is because Zoho's workflow model uses Zoho-specific triggers and actions that have different structures from GHL's model. Most agencies find that 20-40% of their Zoho workflows are outdated and do not need rebuilding, reducing the rebuild scope."
    },
    {
      q: "Can I keep my Zoho phone numbers when migrating to GoHighLevel?",
      a: "It depends on the phone provider. If your Zoho phone numbers are Twilio numbers, you can port them to GHL LC Phone via the port-in process, or continue with Twilio through GHL's Twilio integration. If you use Zoho's PhoneBridge or a third-party gateway, you may need to purchase new numbers in GHL. Number porting takes 5-15 business days schedule it during your parallel running phase, not at cutover. US 10-digit numbers used for SMS require A2P 10DLC registration in GHL's Trust Center regardless of where the number originated."
    },
    {
      q: "What is the biggest mistake when migrating from Zoho to GoHighLevel?",
      a: "Assuming that Zoho workflows and automations will transfer automatically with the contact data. They will not. Businesses that skip the workflow documentation and rebuild phase experience broken automations after cutover appointment reminders stop firing, follow-up sequences do not run, lead assignment fails. The second most common mistake is exporting contacts before recreating custom fields in GHL the import then either fails or drops the custom field data. Always recreate custom fields FIRST, then test-import 100-200 contacts, then run the full import."
    },
    {
      q: "How much does a Zoho to GoHighLevel migration cost if handled by an agency?",
      a: "Migration service pricing varies by scope. Simple migrations (under 5,000 contacts, under 10 workflows, no phone porting) typically range from $1,500 to $3,500 USD. Standard migrations (10,000-50,000 contacts, 15-25 workflows, standard phone porting) typically range from $3,500 to $8,000 USD. Complex migrations (100,000+ contacts, 40+ workflows, custom integrations, multiple phone numbers) can range from $8,000 to $25,000+ USD. GHL Scale Up provides fixed-scope quotes after a free 30-minute discovery call."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why do businesses migrate from Zoho to GoHighLevel?' },
    { id: 'nine-components', title: '2. What are the nine components that must be migrated?' },
    { id: 'export-data', title: '3. How do you export data from Zoho correctly?' },
    { id: 'field-mapping', title: '4. How do you prepare and map fields for GoHighLevel?' },
    { id: 'rebuild-workflows', title: '5. How do you rebuild workflows and automations in GHL?' },
    { id: 'campaigns-forms-phones', title: '6. How do you handle Zoho Campaigns, Forms, and phone numbers?' },
    { id: 'parallel-cutover', title: '7. What is the parallel running and cutover process?' },
    { id: 'migration-comparison', title: '8. How does Zoho migration compare to migrating from HubSpot or ClickFunnels?' },
    { id: 'faq', title: '9. Frequently asked questions' }
  ];

  const components = [
    { num: '1', component: 'Contacts', contains: 'Contact records, custom fields, tags', method: 'CSV export from Zoho > CSV import to GHL' },
    { num: '2', component: 'Users', contains: 'Team member accounts, roles, permissions', method: 'Manual creation in GHL users cannot be automatically imported' },
    { num: '3', component: 'Calendars', contains: 'Booking pages, availability, appointment types', method: 'Manual recreation in GHL Calendar & Booking' },
    { num: '4', component: 'Opportunities', contains: 'Deal records, pipeline stages, deal values', method: 'CSV export from Zoho Deals module > mapped import to GHL Opportunities' },
    { num: '5', component: 'Forms', contains: 'Lead capture forms, custom fields', method: 'Manual recreation in GHL Forms Builder' },
    { num: '6', component: 'Contracts', contains: 'Signed agreements, e-signature records', method: 'Manual re-upload historical contracts stay in Zoho archive' },
    { num: '7', component: 'Sites', contains: 'Landing pages, websites', method: 'Manual rebuild in GHL Funnel/Website builder' },
    { num: '8', component: 'Automations', contains: 'Workflows, triggers, actions', method: 'Manual rebuild in GHL Workflow Builder NOT importable' },
    { num: '9', component: 'Analytics', contains: 'Reports, dashboards, KPIs', method: 'Manual reconfiguration in GHL Reporting' }
  ];

  const comparison = [
    { factor: 'Data export ease', zoho: 'Moderate (200K record limit, 7-day window)', hubspot: 'Complex (multiple export types)', clickfunnels: 'Easy (single account export)' },
    { factor: 'Workflow rebuild complexity', zoho: 'High (Zoho-specific trigger model)', hubspot: 'Very high (Marketing Hub sequences differ)', clickfunnels: 'Moderate (fewer automations)' },
    { factor: 'Contact volume typical', zoho: '10K-500K', hubspot: '10K-500K+', clickfunnels: '1K-50K' },
    { factor: 'Integration count typical', zoho: 'Many (Zoho ecosystem apps)', hubspot: 'Many (HubSpot marketplace apps)', clickfunnels: 'Fewer (funnel-specific tools)' },
    { factor: 'Typical migration timeline', zoho: '2-4 weeks', hubspot: '3-6 weeks', clickfunnels: '1-3 weeks' },
    { factor: 'Biggest risk', zoho: 'Workflow rebuild scope', hubspot: 'Data loss from complex exports', clickfunnels: 'Custom domain SSL handoff' }
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
          <span className="text-[#1A2236] font-medium">Zoho to GoHighLevel Migration</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Zoho</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Guide</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Zoho to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">Complete 2026 Step-by-Step Guide</span>
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center rounded-full">
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
            Migrating from Zoho CRM to GoHighLevel means moving nine distinct components Contacts, Users, Calendars, Opportunities, Forms, Contracts, Sites, Automations, and Analytics across two platforms with fundamentally different database schemas. A direct one-to-one transfer is not possible. What you actually run is a structured process: export from Zoho's modules as CSV, prepare the data (date formats, phone number formats, tag mapping), recreate custom fields in GHL, import in test batches, then rebuild workflows and integrations natively. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled Zoho migrations for agencies and their clients across multiple industries. This guide gives you the exact process, the specific export limits and format requirements confirmed from GoHighLevel's official Zoho migration documentation, and the phased plan that avoids data loss. For the fully-managed path: <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
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
                To migrate from Zoho to GoHighLevel: (1) Audit and clean Zoho data first, (2) export each module (Contacts, Deals, etc.) as CSV via Setup → Data Administration → Export note the 200,000-record-per-export limit and 7-day download window, (3) reformat dates to YYYY-MM-DD and phone numbers to E.164, (4) recreate custom fields, pipelines, and tags in GHL BEFORE importing, (5) test-import 100-200 contacts to verify mapping, (6) full import, (7) rebuild workflows manually in GHL's workflow builder (they do not transfer), (8) run Zoho and GHL in parallel for 2-3 weeks before cutting over.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Total timeline: typically 2-4 weeks depending on data volume, custom field count, and workflow complexity. The biggest risk is not the export itself it is assuming automations will "just transfer." They will not. Rebuild them natively in GHL.
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
              1. Why Do Businesses Migrate from Zoho to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Businesses typically migrate from Zoho CRM to GoHighLevel to consolidate a fragmented Zoho ecosystem (CRM + Campaigns + Books + Desk + Bookings + Forms) into a single all-in-one platform with better agency support, native SMS and AI features, and lower total cost.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Zoho is a solid CRM with strong feature depth, but Zoho's model is a suite of separate applications that need to integrate with each other. Businesses running Zoho CRM, Zoho Campaigns for email, Zoho Bookings for calendar, and Zoho Forms often pay for each module separately and manage each separately. GoHighLevel consolidates these into a single subscription with unified inbox, unified reporting, and a single contact record that ties email, SMS, calls, bookings, and pipeline stages together.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Agency-first architecture:</strong> GHL's sub-account model manages multiple clients from one dashboard. Zoho requires separate CRM instances per client.</li>
              <li><strong className="text-[#1A2236]">Native SMS and WhatsApp:</strong> GHL has native SMS and WhatsApp integration built into every plan. Zoho requires third-party SMS gateways.</li>
              <li><strong className="text-[#1A2236]">AI Employee suite:</strong> GHL's AI Voice Agent, Conversation AI, and Workflow AI have no direct Zoho equivalent as of July 2026.</li>
              <li><strong className="text-[#1A2236]">White-label and SaaS Mode:</strong> Indian and international agencies can resell GHL as branded SaaS. Zoho does not offer white-label reselling of the CRM platform.</li>
              <li><strong className="text-[#1A2236]">Flat pricing with unlimited contacts:</strong> GHL charges flat rate regardless of contact volume. Zoho scales pricing with users and contacts.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Example:</strong> A UK marketing agency running Zoho CRM ($20/user/mo), Zoho Campaigns ($240/mo for their volume), Zoho Bookings ($8/user/mo), and Zoho Desk ($20/user/mo) for a 6-user team was paying approximately $528/month across Zoho modules. Moving to GoHighLevel Unlimited at $297/mo consolidated all four functions plus added native SMS, WhatsApp, and AI features. Zoho was strong in its individual modules; GHL was better in its unified model for their agency use case.
            </p>

            {/* Section 2: Nine Components */}
            <h2 id="nine-components" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Are the Nine Components That Must Be Migrated?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GoHighLevel's official Zoho migration guide (article 155000003316) specifies nine distinct components that must be migrated. Missing any one of them means data loss or broken business processes after cutover.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">#</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Component</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it contains</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Transfer method</th>
                  </tr>
                </thead>
                <tbody>
                  {components.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.num}</td>
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.component}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.contains}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE MOST COSTLY MISCONCEPTION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Users, workflows, and reports do NOT migrate automatically. They must be rebuilt from scratch in GoHighLevel. The single most common Zoho-to-GHL migration failure is assuming these components will transfer with the contacts. They will not. Zoho and GHL use fundamentally different data models Zoho's workflows use its own trigger and condition system, GHL uses a different structure. Documenting each Zoho workflow BEFORE export, then rebuilding in GHL, is the only reliable path. Related reading: <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
              </p>
            </div>

            {/* Section 3: Export Data */}
            <h2 id="export-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Export Data from Zoho Correctly?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Zoho exports data through Setup → Data Administration → Export. Contacts, Leads, Deals, and Accounts each export as separate CSV files, delivered as a zipped archive to the account owner.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Confirmed from GHL's official Zoho migration guide.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Prep contact data for export:</strong> First, recreate Zoho mailing lists and segments as "migration specific tags" within Zoho itself. Confirmed from GHL docs: this preserves segmentation logic so tags carry over into HighLevel as importable data.</li>
              <li><strong className="text-[#1A2236]">Navigate to export:</strong> Setup icon (top-right corner) → Data Administration section → Export → Start an Export.</li>
              <li><strong className="text-[#1A2236]">Select module and fields:</strong> Choose Module = Contacts (or Deals, Leads, Accounts). Select "All fields" or "Choose fields to be exported." Confirmed critical field requirement: fields MUST include either an email address or phone number for HighLevel to accept the import.</li>
              <li><strong className="text-[#1A2236]">Trigger the export:</strong> Click Export. The export appears in the Export History table with status "In progress." When status changes to "Completed," hover over the entry and click the Download link.</li>
              <li><strong className="text-[#1A2236]">Repeat per module:</strong> Run separate exports for Contacts, Leads, Deals, and Accounts modules. Do not try to combine them each module has different field structures.</li>
            </ol>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE TWO CRITICAL LIMITS TO PLAN AROUND</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Zoho export limit: 200,000 contact records per export (as a zipped CSV), and these are always the 200,000 OLDEST records. If your Zoho contact database exceeds 200,000 records, you need multiple staged exports delete the exported oldest records from Zoho after safely archiving them (or use filtered exports by date range) to reveal the next 200,000. <strong>The download link is available for only 7 DAYS.</strong> If you generate an export and forget about it, the link expires and you must re-run the export. Download and archive to a secure location within 7 days. Confirmed from GHL's official Zoho migration guide.
              </p>
            </div>

            {/* Section 4: Field Mapping */}
            <h2 id="field-mapping" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Prepare and Map Fields for GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Field mapping is the process of matching each Zoho field (source) to a corresponding GoHighLevel field (target). This must be done BEFORE the import runs, and custom fields must be recreated in GHL first.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Two formatting requirements are confirmed from GHL's official documentation.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Date format:</strong> All date fields in the CSV MUST be in YYYY-MM-DD format. Zoho defaults to MM/DD/YYYY or DD/MM/YYYY depending on region. Use spreadsheet functions (=TEXT(A1,"YYYY-MM-DD") in Excel/Google Sheets) to convert every date column before import.</li>
              <li><strong className="text-[#1A2236]">Phone format:</strong> Standardise phone numbers to E.164 international format: +[country code][number] with no spaces, dashes, or brackets. Example: +14155550182 for a US number. Zoho does not enforce this. Third-party migration guides cite this as essential for GHL's SMS features to work correctly post-import.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Field mapping workflow</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#0E9BF0]">Document Zoho custom fields:</strong> Open Zoho Settings → Customization → Modules → Contacts → Fields. List every custom field with its name, data type (text, number, date, dropdown, etc.), and picklist values if applicable.</li>
                <li><strong className="text-[#0E9BF0]">Recreate custom fields in GHL:</strong> In GoHighLevel, go to Settings → Custom Fields. Create each Zoho custom field with matching name and data type. For dropdowns, recreate the exact picklist values.</li>
                <li><strong className="text-[#0E9BF0]">Recreate pipelines:</strong> Zoho Deal pipeline stages must be recreated as GHL Opportunity pipeline stages. Match stage names exactly to preserve historical deal position accuracy.</li>
                <li><strong className="text-[#0E9BF0]">Recreate tags:</strong> Every Zoho tag, mailing list membership, and segment membership becomes a GHL tag. Import the tag values from the CSV into a Tags column.</li>
                <li><strong className="text-[#0E9BF0]">Test import:</strong> Import a batch of 100-200 contacts first. Verify every field maps to the correct target, dates display correctly, phone numbers are E.164, and tags are attached. Cited from GHL Experts (4 weeks ago).</li>
                <li><strong className="text-[#0E9BF0]">Full import:</strong> Only after test batch verification passes, run the full import.</li>
              </ol>
            </div>

            {/* Section 5: Rebuild Workflows */}
            <h2 id="rebuild-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Rebuild Workflows and Automations in GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Zoho workflows do not export. They must be documented before migration, then manually rebuilt in GoHighLevel's workflow builder using GHL's trigger and action system.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Zoho's workflow model uses Zoho-specific triggers (Deal Stage Change, Field Update, Custom Function calls) and actions (Send Email via Zoho Campaigns, Update Field, Call Webhook). GHL's workflow model uses different triggers (Form Submitted, Tag Added, Opportunity Stage Changed) and different actions (Send Email, Send SMS, AI Actions, Webhook Post). A direct copy is not possible you rebuild what the workflow was DOING, not how it was structured.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Documentation approach for each Zoho workflow</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Business intent:</strong> What is this workflow supposed to achieve? "Send welcome email to new lead within 5 minutes of form submission."</li>
                <li><strong className="text-[#0E9BF0]">Trigger condition:</strong> What starts it? "Contact created with Lead Source = Website Form."</li>
                <li><strong className="text-[#0E9BF0]">Actions in order:</strong> What does it do? "Wait 5 minutes Send Welcome Email template Add tag Welcome-Sent Assign to Sales Rep by round-robin."</li>
                <li><strong className="text-[#0E9BF0]">Exit conditions:</strong> When does it stop? "When Contact tag Booked-Meeting is applied."</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Then rebuild in GHL:</strong> Go to GHL Automation → Workflows → Create Workflow. Choose the closest GHL trigger (in the example: "Contact Created" with condition "Lead Source contains Website"). Add actions in order. Test with a real contact submission before enabling for all leads.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the full GHL workflow builder walkthrough: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE OPPORTUNITY IN REBUILDING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A workflow rebuild is the chance to fix workflows that were broken or outdated in Zoho. Most migrations reveal that 20-40% of Zoho workflows either no longer fired, targeted campaigns that ended, or ran on assumptions that no longer applied. Migrating only the actively useful workflows reduces rebuild time and produces a cleaner GHL environment. Use GHL's native SMS and AI actions where they add value that Zoho did not offer.
              </p>
            </div>

            {/* Section 6: Campaigns, Forms, Phones */}
            <h2 id="campaigns-forms-phones" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do You Handle Zoho Campaigns, Forms, and Phone Numbers?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Zoho Campaigns (email), Zoho Forms, and any phone number infrastructure connected to Zoho each need separate handling. They are not covered by the standard Contacts export.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail (Zoho Campaigns):</strong> Export your email templates as HTML files (or copy-paste template content into GHL's email builder). Export your Zoho Campaigns segment lists these become GHL tags. Set up GHL email sending: connect your sending domain, configure DKIM, SPF, and DMARC records. Warm the new sending domain over 2-3 weeks before mass sending this is critical for deliverability.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail (Zoho Forms):</strong> Zoho Forms cannot export to GoHighLevel Forms directly. Manually recreate each form in GHL Forms Builder. Preserve field names to match your Contact custom fields. Update the form embed code on your website to point to the new GHL form URL.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail (Phone numbers):</strong> If you use Twilio numbers connected to Zoho, you can port those Twilio numbers to GHL via LC Phone or continue with Twilio through GHL's Twilio integration. If you use Zoho's own PhoneBridge or a third-party gateway, you may need to purchase new numbers in GHL. For US 10-digit numbers used for SMS, you will need A2P 10DLC registration in GHL's Trust Center regardless of source. For agencies handling this at scale: <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P Registration for Agencies →</Link>
            </p>

            {/* Section 7: Parallel Cutover */}
            <h2 id="parallel-cutover" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Is the Parallel Running and Cutover Process?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Parallel running is the phase where both Zoho and GoHighLevel operate simultaneously for 2-3 weeks. It gives you a working fallback while GHL is being validated with real production data.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Standard phased cutover:
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Week 1 Route new leads to GHL:</strong> Update website forms and lead capture points to send to GHL. Existing Zoho contacts continue in their Zoho workflows.</li>
              <li><strong className="text-[#1A2236]">Week 2 Migrate active contacts:</strong> Export contacts that are actively in Zoho workflows (open deals, active sequences). Import to GHL. Rebuild the workflows they need in GHL.</li>
              <li><strong className="text-[#1A2236]">Week 3 Validate and monitor:</strong> Confirm GHL is receiving new leads, workflows are firing correctly, emails are being delivered, appointments are being booked. Monitor open rates and reply rates to confirm deliverability held up.</li>
              <li><strong className="text-[#1A2236]">Cutover:</strong> Once GHL is performing as expected for 5-7 consecutive business days, route all inbound traffic to GHL. Keep Zoho subscription active for another 30 days as a data archive before final cancellation.</li>
              <li><strong className="text-[#1A2236]">Final export:</strong> Take one final full data export from Zoho before cancelling. Store securely as a backup.</li>
            </ol>

            {/* Section 8: Migration Comparison */}
            <h2 id="migration-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Does Zoho Migration Compare to Migrating from HubSpot or ClickFunnels?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Zoho, HubSpot, and ClickFunnels each pose different migration challenges. Zoho is generally EASIER than HubSpot but HARDER than ClickFunnels.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Zoho</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ClickFunnels</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.zoho}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.clickfunnels}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the HubSpot equivalent walkthrough: <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration Guide →</Link>
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED A ZERO-DATA-LOSS ZOHO MIGRATION</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up runs end-to-end Zoho to GoHighLevel migrations: data audit and cleaning, custom field recreation, phased CSV export planning around the 200,000-record limit, workflow rebuild in GHL, phone number porting with A2P, parallel running phase management, and 14-day post-migration support.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real GoHighLevel results and case studies: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For a specific Zoho migration plan for your data volume, <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
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
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes Agencies Make →</Link>
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/gohighlevel-india-agency" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Indian Agencies →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to migrate from Zoho to GoHighLevel without losing data?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up runs end-to-end Zoho migrations. Data audit, staged export, field mapping, workflow rebuild, phone number porting with A2P registration, and parallel running phase management.
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
                All export limits, format requirements, and 9-component migration list are verified against GoHighLevel's official Zoho to HighLevel Migration Guide (article 155000003316, modified March 7, 2025) as of July 2026. Zoho features and export limits change over time verify current terms in your Zoho account before executing your migration.
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
              <div className="text-sm font-bold text-white mb-2">Migrating from Zoho?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle end-to-end Zoho to GHL migrations data audit, workflow rebuild, phone porting, and parallel running phase management.</p>
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