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

export default function KeapToGoHighLevelMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'what-transfers',
        'export-data',
        'tags-fields',
        'rebuild-campaigns',
        'plusthis-replacement',
        'cutover-process',
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
      q: "Can I migrate Keap Campaign Builder to GoHighLevel?",
      a: "Not automatically. Keap Campaign Builder sequences do not export confirmed across multiple ecosystem sources including Automize (June 2026), ClonePartner (April 2026), and Julian Mills. They must be documented (business intent, entry goal, sequence steps in order, decision nodes, exit conditions) and then manually rebuilt in GoHighLevel's Workflow Builder using GHL's own trigger and action system. This is the most time-consuming phase of a Keap migration typically 40-60% of total project time depending on active campaign count. Most Keap migrations also find 30-50% of Campaign Builder sequences are outdated and do not need rebuilding, reducing the actual work required."
    },
    {
      q: "What data transfers from Keap to GoHighLevel?",
      a: "Contacts, custom fields (after manual recreation in GHL), and tags (from Keap Ultimate/Max Classic/Infusionsoft) transfer via CSV export. Confirmed from GoHighLevel's official Keap migration guide (article 155000003384, modified October 1, 2024). Custom fields must be recreated manually in GHL before contact import. What does NOT transfer: Campaign Builder sequences, Order records, Notes, Opportunities (in a standard export), PlusThis add-ons, Zapier zaps, and landing pages all require manual re-creation or replacement. Keep your Keap subscription active as a read-only archive for 60-90 days minimum after migration."
    },
    {
      q: "How do Keap tags map to GoHighLevel?",
      a: "Not all Keap tags should migrate. Classify every Keap tag into four categories: segmentation tags (migrate as GHL tags), campaign state tags (do not migrate as tags rebuild as workflow state within the corresponding GHL workflow), utility tags (convert to GHL Custom Fields for cleaner data structure), and legacy tags (archive to a spreadsheet, do not migrate). A typical Keap instance with 1,000-2,000 tags often reduces to 80-200 active tags in GHL after classification. This tag cleanup is one of the biggest wins of the migration."
    },
    {
      q: "What happens to PlusThis when I migrate from Keap to GHL?",
      a: "PlusThis does not migrate. It is a Keap-specific add-on and must be replaced with GHL-native equivalents or third-party services. Common replacements: appointment reminders (replaced by GHL native SMS workflow), dynamic content by tag (replaced by GHL custom values in email templates), Zoom webinar registration (rebuilt as GHL workflow with Zoom webhook), SMS gateway integration (replaced by GHL native SMS via Twilio or LeadConnector Phone), and card decline recovery (replaced by GHL payment failure workflow). Countdown timers do not have a GHL-native equivalent and typically require a third-party image service like Sendtric or MotionMail."
    },
    {
      q: "How long does a Keap to GoHighLevel migration take?",
      a: "Small migrations (under 5,000 contacts, minimal Campaign Builder activity, no PlusThis dependency) can complete in 1-2 weeks. Standard migrations (10,000-50,000 contacts, 10-20 active campaigns, moderate PlusThis usage) typically take 3-5 weeks. Complex migrations (100,000+ contacts, 20+ active campaigns, deep PlusThis and Zapier integration) can take 6-8 weeks. The single longest phase is Campaign Builder documentation and workflow rebuild confirmed across ClonePartner (April 2026) and Automize (June 2026)."
    },
    {
      q: "What is the cost difference between Keap and GoHighLevel?",
      a: "Keap pricing scales with contact count and starts at approximately $299/month for Keap Ultimate (previously Keap Max Classic / Infusionsoft). Adding PlusThis is typically $29-$99/month depending on features. Zapier for integrations adds $20-$99/month. Landing page tool (ClickFunnels/Leadpages) adds another $99-$297/month. Total typical Keap stack: $450-$800/month for a mid-sized business. GoHighLevel is flat-rate at $97-$497/month plus usage fees for SMS and email. For a typical Keap Ultimate + PlusThis + Zapier + ClickFunnels stack at $536/month, migrating to GoHighLevel Unlimited at $297/month plus $80/month usage typically saves $150-$200/month while consolidating tools."
    },
    {
      q: "Is Keap Ultimate different from Keap Pro for migration purposes?",
      a: "Yes, in one key way: tag export. Keap Ultimate (formerly Keap Max Classic, still called Infusionsoft by many users) can export tags along with the contact record, making tag migration straightforward. Keap Pro (the newer streamlined product) has more limited tag export capabilities tags may need to be exported separately or documented before migration. Other differences: Keap Ultimate has the full Campaign Builder (with the largest campaign investment for most legacy users), while Keap Pro uses a simpler automation model. Migration complexity is usually higher for Keap Ultimate users due to campaign volume, but tag migration is easier. Verify your specific Keap edition's current export capabilities before finalizing your migration plan."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why do businesses migrate from Keap to GoHighLevel?' },
    { id: 'what-transfers', title: '2. What data transfers and what does not?' },
    { id: 'export-data', title: '3. How do you export contacts and data from Keap?' },
    { id: 'tags-fields', title: '4. How do you handle Keap tags and custom fields?' },
    { id: 'rebuild-campaigns', title: '5. How do you rebuild Keap Campaign Builder sequences in GHL?' },
    { id: 'plusthis-replacement', title: '6. How do you replace PlusThis and other Keap integrations?' },
    { id: 'cutover-process', title: '7. What is the phased cutover process?' },
    { id: 'migration-comparison', title: '8. How does Keap migration compare to Zoho, HubSpot, or Salesforce?' },
    { id: 'faq', title: '9. Frequently asked questions' }
  ];

  const transfers = [
    { asset: 'Contacts', transfers: 'Yes', how: 'CSV export from Keap > CSV import to GHL' },
    { asset: 'Custom fields', transfers: 'Manual recreation', how: 'Must be recreated in GHL BEFORE contact import' },
    { asset: 'Tags', transfers: 'Yes (Keap Ultimate)', how: 'Export with contact record; recreate as GHL tags' },
    { asset: 'Companies', transfers: 'Manual mapping', how: 'Import as GHL Companies or as Custom Field on Contact' },
    { asset: 'Pipelines / Opportunities', transfers: 'Manual rebuild', how: 'Pipeline stages must be recreated in GHL first' },
    { asset: 'Campaign Builder sequences', transfers: 'NO', how: 'Must be documented and rebuilt in GHL Workflow Builder' },
    { asset: 'Order records', transfers: 'NO', how: 'Do not export stay in Keap archive' },
    { asset: 'Notes', transfers: 'NO', how: 'Do not export stay in Keap archive' },
    { asset: 'Landing pages', transfers: 'Manual rebuild', how: 'Rebuild in GHL Funnel/Website Builder' },
    { asset: 'Email templates', transfers: 'Manual copy', how: 'Copy HTML source of each active template into GHL' },
    { asset: 'PlusThis add-ons', transfers: 'NO', how: 'Replace with GHL-native equivalents' },
    { asset: 'Zapier integrations', transfers: 'Manual reconnect', how: 'Rebuild with GHL native integrations or GHL webhooks' }
  ];

  const plusThisReplacements = [
    { feature: 'Appointment reminders (SMS/email)', ghlReplacement: 'GHL Workflow with Send SMS + Send Email actions', notes: 'GHL native, no add-on needed' },
    { feature: 'Countdown timers in emails', ghlReplacement: 'Third-party service (Sendtric, MotionMail)', notes: 'Not native in GHL either use image service' },
    { feature: 'Dynamic content by tag', ghlReplacement: 'GHL Custom Values in email templates', notes: 'Native replacement, cleaner implementation' },
    { feature: 'Webinar registration sequences', ghlReplacement: 'GHL Workflows + Zoom/GoToWebinar webhook', notes: 'Rebuild trigger and follow-up as GHL workflow' },
    { feature: 'Referral tracking', ghlReplacement: 'GHL Custom Fields + Attribution workflow', notes: 'Custom implementation, no native referral engine' },
    { feature: 'Video engagement tracking', ghlReplacement: 'Wistia/Vimeo webhooks to GHL', notes: 'Rebuild using video platform webhooks + GHL triggers' },
    { feature: 'SMS gateway integration', ghlReplacement: 'GHL native SMS via Twilio or LC Phone', notes: 'Native replacement often better than PlusThis' },
    { feature: 'Card decline recovery', ghlReplacement: 'GHL Payment failure workflow', notes: 'Native replacement for Stripe/other payment gateways' }
  ];

  const comparison = [
    { factor: 'Data export ease', keap: 'Moderate (1,000+ contacts via email)', zoho: 'Moderate (200K record limit)', hubspot: 'High (multiple export types)', salesforce: 'High (3 methods)' },
    { factor: 'Automation transferability', keap: 'No Campaign Builder does NOT export', zoho: 'No workflows do NOT export', hubspot: 'No Marketing sequences do NOT export', salesforce: 'No Flows do NOT export' },
    { factor: 'Object model complexity', keap: 'Moderate (contacts + tags + opportunities)', zoho: 'Moderate (modules + custom fields)', hubspot: 'Moderate (contacts + companies + deals)', salesforce: 'Very high (relational + custom objects)' },
    { factor: 'Add-on ecosystem', keap: 'PlusThis + Zapier heavy', zoho: 'Zoho ecosystem apps', hubspot: 'HubSpot marketplace', salesforce: 'Salesforce AppExchange' },
    { factor: 'Typical timeline', keap: '2-8 weeks', zoho: '2-4 weeks', hubspot: '3-6 weeks', salesforce: '4-8 weeks' },
    { factor: 'Biggest risk', keap: 'Campaign Builder rebuild scope', zoho: 'Workflow rebuild scope', hubspot: 'Data loss from complex exports', salesforce: 'Relational data breakage' }
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
          <span className="text-[#1A2236] font-medium">Keap to GoHighLevel Migration</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Keap</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Infusionsoft</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Keap to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">Complete 2026 Step-by-Step Guide</span>
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
            Migrating from Keap (formerly Infusionsoft) to GoHighLevel is different from any other CRM migration in one specific way: Keap's Campaign Builder does not export. Your carefully built automation sequences, decision trees, and fulfillment flows have to be documented before migration and manually rebuilt in GoHighLevel's Workflow Builder. Contacts, tags, and custom fields can be exported cleanly, but the automation logic that runs your business is the real work. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has managed Keap migrations for agencies and businesses with long-standing Infusionsoft campaign investments. This guide gives you the exact process from GoHighLevel's own official Keap migration documentation (article 155000003384), plus the campaign builder translation strategy that avoids losing years of automation work. For the fully-managed path: <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
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
                To migrate from Keap to GoHighLevel: (1) Audit your Keap instance, (2) export contacts via Keap → Contacts → People → Export (over 1,000 contacts = email delivery), (3) normalise multiple emails per contact to a single primary email BEFORE export, (4) recreate custom fields, pipelines, and tag categories in GHL, (5) fill in fake unique emails for Keap contacts without emails (GHL requires email for import), (6) test-import 100-200 contacts, (7) document every active Campaign Builder sequence then rebuild in GHL Workflow Builder, (8) replace PlusThis with GHL-native equivalents, (9) run parallel for 2-3 weeks before cutover.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Timeline: 2-3 weeks for small migrations (under 5,000 contacts, minimal campaigns), 4-8 weeks for complex Infusionsoft migrations with 20+ active Campaign Builder sequences. The single biggest risk is assuming the Campaign Builder will transfer. It will not. Rebuild everything actively used, archive everything you no longer need.
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
              1. Why Do Businesses Migrate from Keap to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Businesses migrate from Keap (Infusionsoft, Keap Max Classic, Keap Pro, Keap Ultimate) to GoHighLevel primarily to consolidate a fragmented Keap+PlusThis+Zapier+landing-page-tool stack into one platform, reduce per-contact pricing, and access native SMS, AI, and agency reseller features that Keap does not offer.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Per-contact pricing at scale:</strong> Keap pricing scales with contact count. Businesses growing their list find their monthly Keap bill increases even without adding users. GHL's flat-rate model ($97-$497/month) does not scale with contact count.</li>
              <li><strong className="text-[#1A2236]">Stack consolidation:</strong> A typical Keap user pairs Keap with PlusThis (for enhanced campaign features), Zapier (for integrations), a landing page tool (Leadpages, ClickFunnels, Instapage), and a scheduling tool. GoHighLevel consolidates all of these into one platform.</li>
              <li><strong className="text-[#1A2236]">Native SMS and WhatsApp:</strong> Keap requires third-party SMS integrations. GHL has native SMS, MMS, and WhatsApp Business API integration built into every plan, sharing the same Unified Inbox as email conversations.</li>
              <li><strong className="text-[#1A2236]">AI Employee suite:</strong> GHL's AI Voice Agent, Conversation AI, and Workflow AI have no direct Keap equivalent as of July 2026.</li>
              <li><strong className="text-[#1A2236]">Agency and SaaS Mode:</strong> Agencies serving multiple Keap clients pay per Keap instance. GHL's sub-account architecture manages multiple clients from one dashboard, and SaaS Mode lets agencies white-label and resell GHL.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST DISCLAIMER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL is NOT a drop-in Keap replacement for every business. Keap remains meaningfully better for: businesses that depend on Keap's e-commerce and order forms module for physical/digital product sales, users with hundreds of hours of PlusThis-specific campaign investment, and Infusionsoft merchants who use the built-in Keap Pay processor for card-present transactions. If your Keap use case is centered on Keap Pay or Keap's shopping cart, verify GHL can meet those specific needs before migrating.
              </p>
            </div>

            {/* Section 2: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Data Transfers and What Does Not?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GoHighLevel's official Keap migration guide (article 155000003384) confirms which assets are covered by the standard migration process. Other assets require manual re-creation or must be left in Keap as an archive.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Keap Asset</th>
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
                <span className="text-sm font-bold text-[#F8D000]">THE THREE THINGS THAT WILL SURPRISE YOU</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Order records, Notes, and Opportunities do NOT come over in a standard Keap data export. Cited from Julian Mills. Practical implication: historical purchase data, note history, and open deal records stay in Keap as an archive. Do not cancel your Keap subscription immediately after migration keep it active as read-only archive access for 60-90 days minimum, longer if you need to reference historical order data. If you need Order records in GHL as active data, you need an API-based migration (not CSV) to preserve the relationships.
              </p>
            </div>

            {/* Section 3: Export Data */}
            <h2 id="export-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Export Contacts and Data from Keap?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Keap exports contacts as CSV files through the Contacts → People module. GoHighLevel's official Keap migration guide walks through the exact steps.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Navigate to contacts:</strong> In Keap, go to Contacts → People.</li>
              <li><strong className="text-[#1A2236]">Select contacts to export:</strong> Choose specific contacts or use the Select All option.</li>
              <li><strong className="text-[#1A2236]">Click Export:</strong> Choose to download the contact data as a CSV file.</li>
              <li><strong className="text-[#1A2236]">For large exports (over 1,000 contacts):</strong> Enter your email address to receive a download link from Keap. Confirmed from GHL's official guide.</li>
              <li><strong className="text-[#1A2236]">Document (do NOT export) custom fields:</strong> Note that custom fields need to be recreated manually in HighLevel. Take screenshots or export the field configuration list for reference.</li>
              <li><strong className="text-[#1A2236]">Back up the exported data:</strong> GHL's official guide explicitly instructs: "Ensure all exported data is securely backed up before starting the migration process." Store CSVs in secure cloud storage before beginning transformation.</li>
            </ol>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE PRE-EXPORT DATA CLEANING TO DO FIRST</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Two data-quality issues that create migration failures if left unresolved: (1) Contacts without email addresses Keap allows this, GHL does NOT. Any contact imported to GHL without an email address is silently ignored. Workaround (from Julian Mills): create fake unique email addresses in a pre-import spreadsheet, using a pattern like noemail-KEAP-ID-12345@yourdomain.com. This lets you import the contact into GHL, and you can later prompt for the real email through a workflow. (2) Contacts with multiple email addresses (Email1, Email2, Email3 in Keap) can create duplicate contacts in HighLevel unless you normalize to a single primary email BEFORE import. Cited from ClonePartner (April 2026), referencing help.gohighlevel.com. Pick the most recently active or verified email as the primary; move secondary emails to a Custom Field "secondary-email" for reference.
              </p>
            </div>

            {/* Section 4: Tags and Fields */}
            <h2 id="tags-fields" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Handle Keap Tags and Custom Fields?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Keap uses tags to encode segmentation logic, campaign entry conditions, and lifecycle state. A single business might have 500-2,000 active Keap tags. Not all of these need to migrate most Keap instances have accumulated tag debt that should be cleaned up during migration.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Tag classification approach</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Segmentation tags MIGRATE:</strong> Tags used to group contacts by demographic, interest, or behaviour (Customer, Prospect, Newsletter-Subscriber, Product-A-Buyer). These become GHL tags on the imported contact.</li>
                <li><strong className="text-[#0E9BF0]">Campaign state tags REBUILD IN WORKFLOW:</strong> Tags used to track campaign progress (Welcome-Series-Day-3, Onboarding-Complete, Nurture-Sequence-Active). These do not migrate as tags they get rebuilt as GHL workflow state within the corresponding rebuilt workflow.</li>
                <li><strong className="text-[#0E9BF0]">Legacy tags ARCHIVE:</strong> Tags applied years ago for campaigns no longer running. These do not need to migrate. Document them in a spreadsheet if needed for compliance, then drop them from the import.</li>
                <li><strong className="text-[#0E9BF0]">Utility tags CONVERT TO CUSTOM FIELDS:</strong> Tags used as pseudo-fields (Preferred-Contact-Method-Email, VIP-Client, Payment-Method-Stripe). Convert these into proper GHL Custom Fields for cleaner data structure.</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail (Custom field mapping):</strong>
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Document Keap custom fields:</strong> Open Keap → Admin → Settings → Custom Fields. List every field with name, data type (text, number, date, dropdown, list), and picklist values if applicable.</li>
              <li><strong className="text-[#1A2236]">Recreate in GHL:</strong> In GoHighLevel, Settings → Custom Fields. Create each Keap custom field with matching name and data type. For dropdowns, recreate the exact picklist values.</li>
              <li><strong className="text-[#1A2236]">Map field names in CSV:</strong> Update the export CSV column headers to match the GHL custom field internal names exactly. Any column with no matching GHL custom field is silently dropped during import confirmed by ghlcrms as "Mistake 1".</li>
              <li><strong className="text-[#1A2236]">Test with sample:</strong> Import 100-200 contacts first to verify every custom field appears correctly on the imported records.</li>
            </ol>

            {/* Section 5: Rebuild Campaigns */}
            <h2 id="rebuild-campaigns" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Rebuild Keap Campaign Builder Sequences in GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Keap Campaign Builder uses a visual canvas with goals, decision nodes, sequences, and merge fields to build multi-step automations. GoHighLevel Workflow Builder uses triggers, actions, wait steps, and if/else branches. The models are similar but not identical there is no export/import path between them. Every actively-used campaign must be documented and manually rebuilt.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Documentation approach for each Keap campaign</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Business intent:</strong> What does this campaign achieve? "Welcome new leads from the free download form, deliver the lead magnet, then nurture toward a discovery call over 14 days."</li>
                <li><strong className="text-[#0E9BF0]">Entry goal:</strong> What starts it? "Web form submitted with tag Lead-Magnet-Download applied."</li>
                <li><strong className="text-[#0E9BF0]">Sequence steps in order:</strong> What does it do? "Send lead magnet email → Wait 2 days → Send case study email → Wait 3 days → If tag Discovery-Booked NOT applied, send discovery call invitation → Wait 4 days → If still not booked, send final email."</li>
                <li><strong className="text-[#0E9BF0]">Decision nodes:</strong> Any conditional branches? "If contact clicks discovery call link, apply tag Discovery-Clicked and skip to conversion sequence."</li>
                <li><strong className="text-[#0E9BF0]">Exit goals:</strong> When does the campaign complete or exit the contact? "When tag Discovery-Booked is applied or when contact is Unsubscribed."</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Then rebuild in GHL:</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Trigger:</strong> GHL Workflow → Add Trigger → "Contact Tag Added: Lead-Magnet-Download" (matches Keap entry goal).</li>
              <li><strong className="text-[#1A2236]">Actions in order:</strong> Send Email (lead magnet) → Wait 2 days → Send Email (case study) → Wait 3 days → If/Else (Tag Discovery-Booked) → Send Email (discovery invite) → Wait 4 days → If/Else → Send Email (final).</li>
              <li><strong className="text-[#1A2236]">Merge fields:</strong> Keap uses ~ContactFirstName~ token syntax. GHL uses {"{{contact.first_name}}"} custom value syntax. Replace every merge field during rebuild.</li>
              <li><strong className="text-[#1A2236]">Test end-to-end:</strong> Add yourself as a test contact with the trigger tag. Verify every email arrives, every wait step timing is correct, every branch fires as expected. Only enable for live traffic after test passes.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the full GHL Workflow Builder walkthrough: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the pre-migration audit checklist: <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">GHL Migration Mistakes →</Link>
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE OPPORTUNITY IN REBUILDING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A campaign rebuild is the chance to fix broken and outdated Keap automations. Most Keap migrations reveal that 30-50% of Campaign Builder sequences have not fired in over a year, target campaigns that ended, or run on assumptions no longer relevant. Migrating only the actively used sequences reduces rebuild time and produces a cleaner GHL environment. Use GHL's native SMS, AI Voice, and Conversation AI actions where they add value that Keap did not offer.
              </p>
            </div>

            {/* Section 6: PlusThis Replacement */}
            <h2 id="plusthis-replacement" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do You Replace PlusThis and Other Keap Integrations?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> PlusThis is the most common Keap add-on it extends Campaign Builder with features like appointment reminders, countdown timers, dynamic content, SMS integrations, and advanced webinar sequences. Because PlusThis is Keap-specific, none of it migrates to GoHighLevel. Each PlusThis feature must be replaced with a GHL-native equivalent or an alternative.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">PlusThis Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL-Native Replacement</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {plusThisReplacements.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghlReplacement}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail (Zapier integrations):</strong> Every Zapier zap connected to Keap needs to be reviewed. Some can be replaced with GHL's native integration (Slack, Google Sheets, Mailchimp native GHL). Others need to be rebuilt as GHL webhooks calling the target system, or reconnected via Zapier using GHL as the source instead of Keap.
            </p>

            {/* Section 7: Cutover Process */}
            <h2 id="cutover-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Is the Phased Cutover Process?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Phased cutover means running Keap and GoHighLevel in parallel for 2-3 weeks before fully switching over. This gives you a safety net while GHL is being validated with real production data.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Week 1 Route new leads to GHL:</strong> Update website forms and lead capture endpoints to send new leads to GHL. Existing Keap contacts continue in their Keap campaigns.</li>
              <li><strong className="text-[#1A2236]">Week 2 Migrate active contacts:</strong> Export contacts actively in Keap campaigns (open opportunities, active nurture sequences). Import to GHL. Rebuild the workflows they need in GHL.</li>
              <li><strong className="text-[#1A2236]">Week 3 Validate deliverability and workflow accuracy:</strong> Confirm GHL is receiving new leads, workflows are firing correctly, emails are being delivered (open rates within 10% of Keap baseline), appointments are being booked. Warm up the new email sending domain.</li>
              <li><strong className="text-[#1A2236]">Cutover:</strong> Once GHL is performing consistently for 5-7 business days, route all inbound traffic to GHL. Keep Keap subscription active as an archive for 60-90 days.</li>
              <li><strong className="text-[#1A2236]">Final export:</strong> Take one final full data export from Keap (contacts + custom fields + tags) before the eventual subscription cancellation. Store securely as a permanent backup.</li>
            </ol>

            {/* Section 8: Migration Comparison */}
            <h2 id="migration-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Does Keap Migration Compare to Zoho, HubSpot, or Salesforce?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Keap migrations are moderate complexity easier than Salesforce, similar to HubSpot Marketing Hub, harder than Zoho.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Keap</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Zoho</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.keap}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.zoho}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.salesforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the equivalents: <Link href="/blog/zoho-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Zoho to GoHighLevel Migration →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              <Link href="/blog/salesforce-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Salesforce to GoHighLevel Migration →</Link>
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED A KEAP MIGRATION WITHOUT LOSING YOUR CAMPAIGNS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles end-to-end Keap to GoHighLevel migrations: Keap audit, tag classification and cleanup, contact data preparation (email normalization, multi-email consolidation), custom field mapping, Campaign Builder documentation and rebuild in GHL Workflow Builder, PlusThis replacement, phased cutover, and 30-day post-migration support.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real GoHighLevel results and case studies: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For a specific plan for your Keap instance, <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
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
                <Link href="/blog/zoho-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Zoho to GoHighLevel Migration →</Link>
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration →</Link>
                <Link href="/blog/salesforce-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Salesforce to GoHighLevel Migration →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to migrate from Keap without losing your campaigns?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles Campaign Builder migrations end-to-end. Keap audit, tag classification, data cleaning, custom field recreation, Campaign Builder rebuild in GHL Workflow Builder, PlusThis replacement, and phased cutover.
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
                All primary migration steps are verified against GoHighLevel's official Keap to HighLevel Migration Guide (article 155000003384, modified October 1, 2024) as of July 2026. Campaign Builder translation guidance is aggregated from multiple ecosystem partners (Automize, ClonePartner, Julian Mills, ghlcrms, Growthable, HireGHLDeveloper) with each specific claim sourced. Keap features, PlusThis integrations, and API limits change over time verify current details in your Keap account before executing your migration.
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
              <div className="text-sm font-bold text-white mb-2">Migrating from Keap/Infusionsoft?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle Campaign Builder migrations end-to-end tag cleanup, contact preparation, workflow rebuild, PlusThis replacement, and phased cutover.</p>
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