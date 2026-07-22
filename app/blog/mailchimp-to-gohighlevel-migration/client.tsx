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

export default function MailchimpToGoHighLevelMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'what-transfers',
        'export-audience',
        'tags-fields',
        'rebuild-automations',
        'email-templates',
        'deliverability',
        'comparison',
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
      q: "Can I move my Mailchimp automations to GoHighLevel?",
      a: "Not automatically. Mailchimp Customer Journeys and Classic Automations do not export confirmed across multiple ecosystem sources including Mailsoftly (May 2026) and GoHighLevel's official Mailchimp migration guide (article 155000003392). They must be documented (business intent, trigger condition, steps in order, branching logic, exit conditions) and then manually rebuilt in GHL's Workflow Builder. Most Mailchimp automations are simpler than Keap Campaign Builder or HubSpot sequences, so the rebuild phase is typically 1-3 days rather than weeks."
    },
    {
      q: "What is the difference between Mailchimp tags and GoHighLevel tags?",
      a: "Functionally, they work the same both are labels applied per contact used for segmentation. Mailchimp tags export cleanly in the audience CSV and import directly as GHL tags. The main difference: GoHighLevel tags integrate more deeply with automation triggers and pipeline stages. A GHL tag can directly trigger a workflow entry, apply an opportunity to a pipeline, or update a contact score. Mailchimp tags primarily control audience segmentation for campaigns."
    },
    {
      q: "Do Mailchimp email templates work in GoHighLevel?",
      a: "Not directly Mailchimp templates cannot be imported as files. You must copy the HTML source of each active template from Mailchimp and paste it into GHL Marketing > Emails > Templates > New Template > HTML mode. Every Mailchimp merge field (*|FNAME|*, *|EMAIL|*, etc.) must be translated to GHL's syntax ({{contact.first_name}}, {{contact.email}}). Some Mailchimp-specific CSS may render slightly differently in GHL expect to fine-tune 1-2 CSS rules per template. Prioritize your top 5-10 templates for perfect design; leave rarely-used templates as good-enough."
    },
    {
      q: "How do Mailchimp audiences map to GoHighLevel?",
      a: "Mailchimp separates contacts into multiple Audiences (formerly Lists). GoHighLevel does not have an equivalent Audience-level separation all contacts live in one sub-account's contact database. Mapping approach: import all Mailchimp audiences into one GHL sub-account, use tags to preserve the audience-level distinction (e.g., tag Newsletter-Audience, Customers-Audience, Prospects-Audience). For agencies serving multiple clients, use separate GHL sub-accounts per client do not use Audience-style separation within a single sub-account."
    },
    {
      q: "Will I lose my email deliverability when moving from Mailchimp?",
      a: "Only if you do not warm up your new sending domain properly. Deliverability depends on the reputation of your sending domain, and a cold sending domain has poor initial reputation. To preserve deliverability: (1) set up SPF, DKIM, and DMARC on the new GHL sending domain, (2) start by sending to your most engaged 10% of contacts, (3) send 100-500 emails per day for 3-5 days then double every 2-3 days, (4) reach full send volume by week 3, (5) monitor open rates they should stabilize within 15% of your Mailchimp baseline. Confirmed as the biggest migration risk by ECOSIRE (March 2026)."
    },
    {
      q: "What is the cost difference between Mailchimp and GoHighLevel?",
      a: "Mailchimp pricing scales with contact count. A 25,000-contact list on Mailchimp Standard is approximately $250-$300/month. GoHighLevel is flat-rate: $97-$497/month regardless of contact count. For most businesses with lists over 5,000 contacts, GHL is cheaper and includes CRM, SMS, WhatsApp, calendar booking, pipelines, and AI features that Mailchimp does not offer at any tier. Also, GHL usage fees for SMS and email sending are typically $30-$150/month on top of the plan, so calculate total cost including usage against your Mailchimp Standard + Pro tier bill."
    },
    {
      q: "How long does a Mailchimp to GoHighLevel migration take?",
      a: "Timeline depends on complexity. Simple migrations (single audience under 10,000 contacts, few automations, minimal template count) can complete in 5-7 business days confirmed by ghlcrms (May 2026). Standard migrations (10,000-50,000 contacts, 5-10 automations, moderate template library) typically take 1-2 weeks. Complex migrations (multiple audiences, 10+ Customer Journeys, RSS-to-email campaigns, deep merge field customization) can take 3-4 weeks. Add a 2-3 week domain warmup phase on top of the migration timeline before you can safely send at full volume."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why do businesses migrate from Mailchimp to GoHighLevel?' },
    { id: 'what-transfers', title: '2. What data transfers and what does not?' },
    { id: 'export-audience', title: '3. How do you export your Mailchimp audience?' },
    { id: 'tags-fields', title: '4. How do you handle Mailchimp tags, segments, and merge fields?' },
    { id: 'rebuild-automations', title: '5. How do you rebuild Mailchimp automations in GHL?' },
    { id: 'email-templates', title: '6. How do you migrate email templates and preserve design?' },
    { id: 'deliverability', title: '7. How do you preserve deliverability during cutover?' },
    { id: 'comparison', title: '8. How does Mailchimp migration compare to other platforms?' },
    { id: 'faq', title: '9. Frequently asked questions' }
  ];

  const transfers = [
    { asset: 'Contacts (audience data)', transfers: 'Yes', how: 'CSV export from Mailchimp > CSV import to GHL' },
    { asset: 'Merge fields', transfers: 'Yes (as GHL Custom Fields)', how: 'Recreate matching Custom Fields in GHL BEFORE import' },
    { asset: 'Tags', transfers: 'Yes', how: 'Included in the audience export CSV, imported as GHL tags' },
    { asset: 'Subscription status', transfers: 'Yes', how: 'Subscribed/Unsubscribed/Cleaned status carries through' },
    { asset: 'Email templates', transfers: 'Manual copy', how: 'Copy HTML source from Mailchimp campaigns into GHL Templates' },
    { asset: 'Automations / Customer Journeys', transfers: 'NO', how: 'Must be documented then manually rebuilt in GHL Workflow Builder' },
    { asset: 'Campaign statistics', transfers: 'NO', how: 'Open rates, click rates stay in Mailchimp' },
    { asset: 'A/B test results', transfers: 'NO', how: 'Historical test data stays in Mailchimp' },
    { asset: 'Forms', transfers: 'Manual rebuild', how: 'Rebuild using GHL\'s Sites & Funnels builder' },
    { asset: 'Landing pages', transfers: 'Manual rebuild', how: 'Rebuild in GHL Funnel/Website Builder' },
    { asset: 'RSS campaigns', transfers: 'Manual rebuild', how: 'GHL requires workflow with RSS feed webhook no native RSS-to-email' },
    { asset: 'Sending domain reputation', transfers: 'NO new domain', how: 'Warm up new GHL sending domain BEFORE mass send' }
  ];

  const mergeFields = [
    { mailchimp: '*|FNAME|*', ghl: '{{contact.first_name}}', notes: 'First name' },
    { mailchimp: '*|LNAME|*', ghl: '{{contact.last_name}}', notes: 'Last name' },
    { mailchimp: '*|EMAIL|*', ghl: '{{contact.email}}', notes: 'Email address' },
    { mailchimp: '*|MC:SUBJECT|*', ghl: '(subject in GHL settings)', notes: 'Subject line handled separately' },
    { mailchimp: '*|UNSUB|*', ghl: '{{ unsubscribe_url }}', notes: 'Unsubscribe link required for compliance' },
    { mailchimp: '*|MC_PREVIEW_TEXT|*', ghl: '(preview in GHL settings)', notes: 'Email preview text' },
    { mailchimp: '*|ARCHIVE|*', ghl: '(no direct equivalent)', notes: 'Web archive link typically omitted in GHL' },
    { mailchimp: 'Custom merge fields (MMERGE1, etc.)', ghl: '{{custom_values.field_name}}', notes: 'Reference the GHL custom field you created' }
  ];

  const comparison = [
    { factor: 'Data export ease', mailchimp: 'High (single ZIP with CSV)', keap: 'Moderate (1,000+ = email delivery)', zoho: 'Moderate (200K record limit)', hubspot: 'High (multiple export types)' },
    { factor: 'Automation transferability', mailchimp: 'No Customer Journeys do NOT export', keap: 'No Campaign Builder does NOT export', zoho: 'No workflows do NOT export', hubspot: 'No Marketing sequences do NOT export' },
    { factor: 'Object model complexity', mailchimp: 'Low (audience + tags + merge fields)', keap: 'Moderate (contacts + tags + campaigns)', zoho: 'Moderate (modules + custom fields)', hubspot: 'Moderate (contacts + companies + deals)' },
    { factor: 'Add-on ecosystem', mailchimp: 'Small (few paid integrations)', keap: 'Large (PlusThis + Zapier heavy)', zoho: 'Zoho ecosystem apps', hubspot: 'HubSpot marketplace' },
    { factor: 'Typical timeline', mailchimp: '5-14 days', keap: '2-8 weeks', zoho: '2-4 weeks', hubspot: '3-6 weeks' },
    { factor: 'Biggest risk', mailchimp: 'Deliverability drop on new domain', keap: 'Campaign Builder rebuild scope', zoho: 'Workflow rebuild scope', hubspot: 'Data loss from complex exports' }
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
          <span className="text-[#1A2236] font-medium">Mailchimp to GoHighLevel Migration</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Mailchimp</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Email Marketing</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Mailchimp to GoHighLevel Migration:<br />
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
            The Mailchimp to GoHighLevel migration is the simplest of the CRM migration cluster, but only if you handle three specific things correctly: individual audience exports (Mailchimp only lets you export one audience at a time), merge field syntax translation (*|FNAME|* to {'{{contact.first_name}}'}), and deliverability preservation on the new sending domain. Contacts, tags, and email templates transfer cleanly. Automations and campaign statistics do not. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has migrated Mailchimp accounts for businesses ranging from newsletter operators to service agencies moving beyond email-only marketing. This guide gives you the exact process from GoHighLevel's official Mailchimp migration documentation (article 155000003392), plus the deliverability warmup approach that protects your open rates through cutover. For the fully-managed path: <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
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
                To migrate from Mailchimp to GoHighLevel: (1) Audit your Mailchimp account, (2) export each audience separately via Mailchimp → Audience → Manage Audience → Export Audience (produces a ZIP with CSV containing contacts, merge fields, tags, subscription status), (3) recreate custom fields, tags, and pipelines in GHL BEFORE contact import, (4) import contacts to GHL via Contacts → Import Contacts, (5) copy HTML source of active email templates into GHL Marketing → Emails → Templates → HTML mode, translating merge field syntax, (6) document Mailchimp automations then rebuild in GHL Workflow Builder, (7) set up new sending domain with SPF/DKIM/DMARC and warm it for 2 weeks before mass sending, (8) run parallel for 1-2 weeks before cutover.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Timeline: 5-7 business days for simple migrations (single audience under 10,000 contacts, few automations), 2-3 weeks for complex migrations. The single biggest risk is deliverability drop from an unwarmed sending domain warm it BEFORE mass send.
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
              1. Why Do Businesses Migrate from Mailchimp to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Businesses migrate from Mailchimp to GoHighLevel primarily to escape email-only capability. Mailchimp is where most businesses start email marketing, but the ceiling becomes obvious once the business needs CRM depth, SMS, calendar booking, pipelines, or agency reseller functionality that Mailchimp does not provide.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Email-only ceiling:</strong> Mailchimp is email-first. GoHighLevel is business-automation-first. Once a business needs to track leads through a sales pipeline, book appointments, or send SMS follow-ups, Mailchimp becomes one tool in a growing stack rather than the single platform.</li>
              <li><strong className="text-[#1A2236]">Shallow CRM:</strong> Mailchimp's CRM features are limited compared to a purpose-built CRM. There are no true opportunities, no pipeline stages, no deal values, no sales team assignment logic (ECOSIRE, March 2026).</li>
              <li><strong className="text-[#1A2236]">Basic automation logic:</strong> Mailchimp Customer Journeys handle simple triggers but do not support the complex if/else logic, wait steps, and multi-branch workflows that GoHighLevel Workflow Builder handles natively.</li>
              <li><strong className="text-[#1A2236]">Pricing scales with contact count:</strong> Mailchimp pricing scales steeply once past the free tier. A 25,000-contact list on Mailchimp Standard can exceed $250/month. GoHighLevel is flat-rate at $97-$497/month regardless of contact count.</li>
              <li><strong className="text-[#1A2236]">No native SMS or WhatsApp:</strong> Mailchimp has SMS as a separate add-on with limited reach. GHL has native SMS, MMS, and WhatsApp Business API integration built into every plan.</li>
              <li><strong className="text-[#1A2236]">Agency reseller model:</strong> Mailchimp does not support white-label reselling of the platform. GHL's SaaS Mode lets agencies resell GoHighLevel as a branded product to their own clients.</li>
            </ul>

            {/* Section 2: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Data Transfers and What Does Not?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GoHighLevel's official Mailchimp migration guide (article 155000003392) confirms which assets transfer via the standard migration process. Others require manual re-creation or replacement.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Mailchimp Asset</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Transfers?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How</th>
                  </tr>
                </thead>
                <tbody>
                  {transfers.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.asset}</td>
                      <td className={`py-3 px-3 font-semibold ${item.transfers === 'NO' ? 'text-[#DC3545]' : item.transfers === 'Yes' ? 'text-[#25C97D]' : 'text-[#F8D000]'}`}>{item.transfers}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE THING NEW MIGRANTS OFTEN MISS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Campaign statistics and A/B test results do NOT export. Cited from Mailsoftly (May 2026). If you rely on historical open rates, click-through rates, or A/B winners for planning future campaigns, screenshot or export those reports from Mailchimp before cancelling. Once you cancel the Mailchimp subscription, that historical performance data is lost. Keep Mailchimp active as a read-only archive for at least 60-90 days after migration.
              </p>
            </div>

            {/* Section 3: Export Audience */}
            <h2 id="export-audience" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Export Your Mailchimp Audience?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Mailchimp exports audience data through the Audience module, one audience at a time. The export produces a ZIP archive containing CSV files.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Navigate to Audience:</strong> In Mailchimp, click Audience in the main navigation.</li>
              <li><strong className="text-[#1A2236]">Select the audience to export:</strong> If you have multiple audiences, pick the one you want to export. Confirmed from AeroLeads (March 2026): Mailchimp only lets you export one audience at a time repeat this process for each audience.</li>
              <li><strong className="text-[#1A2236]">Open Manage Audience:</strong> Click the Manage Audience dropdown.</li>
              <li><strong className="text-[#1A2236]">Select Export Audience:</strong> This opens the export configuration screen.</li>
              <li><strong className="text-[#1A2236]">Configure export options:</strong> Accept defaults for most users, but check the option to include tags, merge fields, and subscription status. AeroLeads notes: "Most users accept the defaults, but this approach loses valuable subscriber metadata that is difficult to recreate later."</li>
              <li><strong className="text-[#1A2236]">Wait for export processing:</strong> Mailchimp emails you a link to download the ZIP archive when ready. Small exports process in minutes; large exports (100,000+ contacts) can take longer.</li>
              <li><strong className="text-[#1A2236]">Download and inspect the ZIP:</strong> The archive contains one or two CSVs with contacts, merge fields, tags, and subscription status. Open in Google Sheets or Excel to verify data quality before import.</li>
            </ol>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE THREE PRE-IMPORT CHECKS</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Contacts have valid email addresses:</strong> Mailchimp allows some junk data; GHL will reject or ignore invalid emails.</li>
                <li><strong className="text-[#0E9BF0]">Merge field columns match names of GHL Custom Fields:</strong> Any column without a matching custom field is silently dropped during import (confirmed as "Mistake 1" by ghlcrms).</li>
                <li><strong className="text-[#0E9BF0]">Tags column contains cleanly separated tag values:</strong> Avoid mixed delimiters.</li>
              </ul>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For related pitfalls: <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">GHL Migration Mistakes →</Link>
            </p>

            {/* Section 4: Tags and Fields */}
            <h2 id="tags-fields" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Handle Mailchimp Tags, Segments, and Merge Fields?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Mailchimp uses three overlapping segmentation mechanisms: tags (applied per contact), segments (saved filters), and groups (interest categories). GoHighLevel primarily uses tags and Smart Lists (dynamic saved segments). The mapping is straightforward but the terminology differs.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Tag mapping</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Mailchimp tags → GHL tags:</strong> Direct one-to-one mapping. Tags export in the audience CSV and import cleanly to GHL. Confirmed from ghlcrms (May 2026): "Contacts and tags export cleanly."</li>
                <li><strong className="text-[#0E9BF0]">Mailchimp segments → GHL Smart Lists:</strong> Saved segments (filters) do not export as data. Recreate each segment as a GHL Smart List (dynamic saved search) after import. Mailchimp segment logic translates to GHL Smart List filters.</li>
                <li><strong className="text-[#0E9BF0]">Mailchimp groups → GHL tags OR Custom Fields:</strong> Groups (interest categories) are a Mailchimp-specific structure. Migrate as either GHL tags (one per group interest) or as a GHL Custom Field with picklist values matching the group options.</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail (Merge field syntax translation):</strong>
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Mailchimp Merge Field</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Equivalent</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {mergeFields.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.mailchimp}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5: Rebuild Automations */}
            <h2 id="rebuild-automations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Rebuild Mailchimp Automations in GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Mailchimp automations (Customer Journeys) do NOT export to GoHighLevel. They must be documented before migration and manually rebuilt in GHL's Workflow Builder using GHL's trigger and action system.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Documentation approach for each Mailchimp automation</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Business intent:</strong> What does this automation achieve? "Welcome new newsletter subscribers with a 3-email onboarding series over 7 days."</li>
                <li><strong className="text-[#0E9BF0]">Trigger condition:</strong> What starts it? "Contact joins Newsletter audience via signup form."</li>
                <li><strong className="text-[#0E9BF0]">Steps in order:</strong> What happens? "Send welcome email → Wait 2 days → Send content email → Wait 5 days → Send offer email."</li>
                <li><strong className="text-[#0E9BF0]">Segmentation or branching:</strong> Any conditional logic? "If contact clicks offer link, tag as Engaged-Newsletter."</li>
                <li><strong className="text-[#0E9BF0]">Exit conditions:</strong> When does it stop? "When contact unsubscribes or completes the sequence."</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Then rebuild in GHL:</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Trigger:</strong> GHL Workflow → Add Trigger → "Tag Added: Newsletter-Subscriber" (or Form Submitted, if using GHL Forms).</li>
              <li><strong className="text-[#1A2236]">Actions in order:</strong> Send Email (welcome) → Wait 2 days → Send Email (content) → Wait 5 days → Send Email (offer). Each Send Email action references a template you have recreated in GHL Marketing → Emails → Templates.</li>
              <li><strong className="text-[#1A2236]">Merge fields:</strong> Each rebuilt email uses translated merge fields ({"{{contact.first_name}}"} etc.) not the original Mailchimp syntax.</li>
              <li><strong className="text-[#1A2236]">If/Else branching:</strong> Add a Wait step for link click, then an If/Else action checking for the Engaged-Newsletter tag. Branch True: continue with follow-up. Branch False: end.</li>
              <li><strong className="text-[#1A2236]">Test end-to-end:</strong> Add yourself as a test contact with the trigger tag. Verify every email arrives, wait timings are correct, branches fire. Only enable for live audience after test.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full GHL Workflow Builder walkthrough: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            {/* Section 6: Email Templates */}
            <h2 id="email-templates" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do You Migrate Email Templates and Preserve Design?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Mailchimp email templates do not directly export to GoHighLevel. You copy the HTML source of each active template and paste it into GHL's HTML editor, then adjust for design differences.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Identify active templates in Mailchimp:</strong> Go to Campaigns → All Campaigns. Filter to Templates. List every template still used in ongoing campaigns or automations.</li>
              <li><strong className="text-[#1A2236]">Export HTML source:</strong> For each template, open in the Mailchimp editor. Use Preview → Export HTML or copy the HTML source from the code view.</li>
              <li><strong className="text-[#1A2236]">Create matching template in GHL:</strong> In GoHighLevel, go to Marketing → Emails → Templates → New Template → HTML mode. Paste the HTML source.</li>
              <li><strong className="text-[#1A2236]">Translate merge fields:</strong> Every *|FNAME|*, *|EMAIL|*, or custom Mailchimp merge tag must be replaced with GHL's equivalent syntax ({"{{contact.first_name}}"} etc.). Use Find & Replace to speed this up.</li>
              <li><strong className="text-[#1A2236]">Preview and check rendering:</strong> Send a preview to yourself. Check formatting on desktop and mobile. Some Mailchimp-specific CSS may not render identically in GHL adjust as needed.</li>
              <li><strong className="text-[#1A2236]">Test with real contact:</strong> Send a real send to a test contact. Verify merge fields populate correctly, images load, links work.</li>
            </ol>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE COMMON DESIGN GOTCHA</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Mailchimp uses drag-and-drop content blocks that may compile to non-standard HTML/CSS. When copied to GHL, some Mailchimp-specific styling (block borders, color schemes, spacing) may render slightly differently. Do not treat this as a bug test each template thoroughly and expect to fine-tune 1-2 CSS rules per template. Cited from ghlcrms (May 2026): "Preview the email and check for rendering issues." Prioritize your top 5-10 most-used templates for perfect design; leave rarely-used templates as good-enough.
              </p>
            </div>

            {/* Section 7: Deliverability */}
            <h2 id="deliverability" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. How Do You Preserve Deliverability During Cutover?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Email deliverability whether your emails land in the inbox vs the spam folder depends heavily on the reputation of your sending domain. When you switch from Mailchimp to GoHighLevel, you switch sending infrastructure. A cold sending domain has poor initial reputation and will hurt open rates unless properly warmed.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Set up a new sending domain in GHL:</strong> In GoHighLevel Settings → Email Services, add your sending domain (or a subdomain like mail.yourdomain.com). Do NOT use the same subdomain you were using with Mailchimp keep them separate to avoid conflicting DNS records during transition.</li>
              <li><strong className="text-[#1A2236]">Configure DNS records:</strong> Set up SPF, DKIM, and DMARC records for the new GHL sending domain via your DNS provider. GHL provides the exact records to add.</li>
              <li><strong className="text-[#1A2236]">Verify domain authentication:</strong> Confirm SPF passes, DKIM signature validates, and DMARC alignment is correct. Any authentication failure will land emails in spam. Confirmed as critical by ECOSIRE (March 2026).</li>
              <li><strong className="text-[#1A2236]">Warm up the domain gradually:</strong> Do NOT send to your full list on day one. Start with your most-engaged 10% of contacts (opened emails in last 90 days). Send 100-500 emails per day for the first 3-5 days, then double the send volume every 2-3 days. Full-list send in week 3.</li>
              <li><strong className="text-[#1A2236]">Monitor deliverability metrics:</strong> Watch open rates, click rates, and bounce rates during warmup. Open rates should stabilize within 15% of your Mailchimp baseline. Bounce rate should stay under 2%. If open rates drop dramatically, pause and diagnose.</li>
              <li><strong className="text-[#1A2236]">Cut over gradually:</strong> Route send volume from Mailchimp to GHL progressively 25% GHL week 1, 50% week 2, 75% week 3, 100% week 4. This lets you catch deliverability problems before they affect your entire list.</li>
            </ol>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              If you also need SMS during migration: <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
            </p>

            {/* Section 8: Comparison */}
            <h2 id="comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Does Mailchimp Migration Compare to Other Platforms?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Mailchimp migrations are the simplest of the CRM migration cluster because Mailchimp is email-first, not full-CRM. Data model is shallower, integrations fewer, automation logic simpler.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Mailchimp</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Keap</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Zoho</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.mailchimp}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.keap}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.zoho}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the other migrations: <Link href="/blog/keap-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Keap to GoHighLevel Migration →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              <Link href="/blog/zoho-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Zoho to GoHighLevel Migration →</Link>
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED A MAILCHIMP MIGRATION WITHOUT LOSING DELIVERABILITY</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles end-to-end Mailchimp to GoHighLevel migrations: audience audit, tag consolidation, merge field mapping, email template migration (HTML translation), automation rebuild in GHL Workflow Builder, new sending domain setup with SPF/DKIM/DMARC, and 3-week deliverability warmup phase management.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real GoHighLevel results and case studies: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For a specific plan for your Mailchimp account, <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
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
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
                <Link href="/blog/keap-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Keap to GoHighLevel Migration →</Link>
                <Link href="/blog/zoho-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Zoho to GoHighLevel Migration →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to migrate from Mailchimp to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles Mailchimp migrations end-to-end. Audience audit, tag consolidation, custom field mapping, email template HTML translation, automation rebuild in GHL Workflow Builder, and deliverability warmup phase management.
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
                All primary migration steps are verified against GoHighLevel's official Mailchimp to HighLevel Migration Guide (article 155000003392, modified March 7, 2025) as of July 2026. Deliverability warmup guidance is aggregated from ecosystem sources (ECOSIRE, ghlcrms, Mailsoftly) with each specific claim sourced. Mailchimp export flows and GoHighLevel deliverability tools change over time verify current details in your Mailchimp account and GHL Email Services settings before executing your migration.
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
              <div className="text-sm font-bold text-white mb-2">Migrating from Mailchimp?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle Mailchimp migrations end-to-end audience export, template HTML translation, automation rebuild, and deliverability warmup.</p>
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