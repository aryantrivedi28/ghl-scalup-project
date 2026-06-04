// app/services/migration/page.tsx

import Link from 'next/link';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Check,
  CheckCircle,
  Settings,
  Building2,
  GraduationCap,
  Home,
  Zap,
  Tag,
  Clock,
  Rocket,
  Database,
  GitBranch,
  Globe,
  RefreshCw,
  TrendingUp,
  Layout,
  Mail as MailIcon,
  Cloud,
  Briefcase,
  Target,
  CheckCircle2,
  ClipboardList,
  Wrench,
  DollarSign,
} from 'lucide-react';

// Import reusable schema components
import {
  OrganizationSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/lib/schemas';

// Import existing FAQ schema hook
import { useFaqSchema } from '@/hooks/useFaqSchema';

// Import CtaBand component
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'GHL Migration Services -- Move Any CRM to GoHighLevel',
  description: 'Move from HubSpot, ClickFunnels, ActiveCampaign, or any CRM to GoHighLevel. Contacts, pipelines, and workflows migrated safely. 200+ migrations. Book a free assessment.',
  keywords: 'GHL reporting, custom dashboards, pipeline analytics, conversion tracking, team performance dashboards',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/migration',
  },
};
// FAQ data for the page
const faqs = [
  {
    q: 'How much does GoHighLevel migration cost?',
    a: 'GoHighLevel migration projects with GHL Scale Up start from $1,500 for a standard migration. Simple migrations with fewer than 5,000 contacts and basic automations are at the lower end. Complex migrations involving courses, affiliate programs, multiple pipelines, and advanced automation logic are priced based on scope after a free assessment call. All projects are fixed price you receive a full scope document before any work begins. No hourly billing.',
  },
  {
    q: 'How long does a GoHighLevel migration take?',
    a: 'GoHighLevel migration timelines depend on the source platform and account complexity. Simple migrations (under 5,000 contacts, basic workflows) take 2 to 3 weeks. Standard migrations take 3 to 5 weeks. Complex migrations with courses, affiliate programs, and 20,000+ contacts take 5 to 8 weeks. We give you a specific timeline for your account after the free migration assessment call not a generic estimate.',
  },
  {
    q: 'What data can be migrated to GoHighLevel?',
    a: 'The following data migrates to GoHighLevel: all contacts and custom fields, pipeline stages and opportunity data, deal history and revenue records, email lists and contact segments, conversation history, funnel and landing page designs, products and pricing. What requires rebuilding inside GHL: all automation workflows and email sequences, forms and survey steps, order bumps and upsell logic, course and membership structures, affiliate program configuration, domain connections, and all third-party integration authentication.',
  },
  {
    q: 'Will I lose any data during the GoHighLevel migration?',
    a: 'No. GHL Scale Up has a zero data loss record across 200+ migration projects. We export and validate all data from the source platform before touching any settings. Both platforms run in parallel during the migration period your existing system stays fully operational while we build and test the GHL system. We only switch traffic to GHL after end-to-end testing is complete and confirmed.',
  },
  {
    q: 'Do I need to cancel my current platform before migrating to GoHighLevel?',
    a: 'No. Keep your current platform subscription active until your GoHighLevel system is fully built, tested, and live. Cancelling before the migration is complete risks losing access to data and configuration you still need during the rebuild. We tell you the exact date it is safe to cancel your current platform typically within one to two weeks of going live on GHL.',
  },
  {
    q: 'Can you run GoHighLevel and my current platform at the same time during migration?',
    a: 'Yes, and this is standard practice for every GHL Scale Up migration. We keep your existing platform fully operational while building and testing the GHL system in parallel. This means zero downtime and zero missed leads during the migration period. When the GHL system is fully tested and your team is trained, we switch traffic to GHL and wind down the old platform.',
  },
  {
    q: 'Which platforms can you migrate to GoHighLevel?',
    a: 'GHL Scale Up migrates from all major CRMs, automation platforms, and funnel builders including HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho CRM, Salesforce, Mailchimp, Keap (Infusionsoft), Pipedrive, and WordPress. We also handle migrations from less common platforms if you are using something not listed here, contact us and we will confirm whether we can migrate it.',
  },
  {
    q: 'What is field mapping in a GoHighLevel migration?',
    a: 'Field mapping is the process of matching data fields from your current platform to the equivalent fields in GoHighLevel. For example, a "Lead Source" custom property in HubSpot needs to be mapped to a corresponding custom field in GHL before any contacts are imported. Without proper field mapping, data ends up in the wrong places or gets lost entirely. GHL Scale Up documents and validates the complete field mapping before a single contact is moved this is one of the most common places DIY migrations fail.',
  },
  {
    q: 'What is trigger replication in a GoHighLevel migration?',
    a: 'Trigger replication is the process of rebuilding your existing automation logic inside GoHighLevel workflow builder. Automations in platforms like HubSpot, ActiveCampaign, or ClickFunnels use different trigger-action models than GHL. A trigger replication maps each existing automation what fires it, what it does, and what comes next and recreates the equivalent logic using GHL triggers, actions, and conditions. This is the most time-consuming part of any migration and requires deep platform expertise to do correctly.',
  },
];

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2.5 max-w-[820px] mx-auto w-full">
      {faqs.map((faq, index) => (
        <div key={index} className={`bg-white border border-[#E8EDF4] rounded-xl overflow-hidden ${openIndex === index ? 'open' : ''}`}>
          <button
            className="w-full bg-transparent border-none cursor-pointer flex items-center justify-between py-5 px-6 font-semibold text-[15px] text-[#1C2E4A] text-left gap-4 hover:bg-[#F4F7FA] transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            {faq.q}
            <span className="w-7 h-7 min-w-7 rounded-full bg-[#E6F4FF] text-[#0E9BF0] flex items-center justify-center text-lg font-bold transition-transform flex-shrink-0">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="pt-4 pb-5 px-6 text-[15px] text-[#4A5568] leading-relaxed border-t border-[#E8EDF4]">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function MigrationHubPage() {
  // Use existing FAQ schema hook
  useFaqSchema(faqs);

  const platforms = [
    { name: 'HubSpot to GoHighLevel', icon: <TrendingUp size={24} />, type: 'CRM + automation platform', link: '/hubspot-to-gohighlevel', built: true, iconColor: 'text-[#FF5722]' },
    { name: 'ClickFunnels to GoHighLevel', icon: <Layout size={24} />, type: 'Funnel builder + courses', link: '/clickfunnels-to-gohighlevel', built: true, iconColor: 'text-[#0073AA]' },
    { name: 'ActiveCampaign to GoHighLevel', icon: <MailIcon size={24} />, type: 'Email + CRM + automation', link: '/activecampaign-to-gohighlevel', built: true, iconColor: 'text-[#6C2BD2]' },
    { name: 'Kajabi to GoHighLevel', icon: <GraduationCap size={24} />, type: 'Courses + membership + email', link: '/kajabi-to-gohighlevel', built: false, iconColor: 'text-[#F5A623]' },
    { name: 'Zoho to GoHighLevel', icon: <Database size={24} />, type: 'CRM + automation suite', link: '/zoho-to-gohighlevel', built: false, iconColor: 'text-[#E42535]' },
    { name: 'Salesforce to GoHighLevel', icon: <Cloud size={24} />, type: 'Enterprise CRM', link: '/salesforce-to-gohighlevel', built: false, iconColor: 'text-[#00A1E0]' },
    { name: 'Mailchimp to GoHighLevel', icon: <Mail size={24} />, type: 'Email marketing + contacts', link: '/mailchimp-to-gohighlevel', built: false, iconColor: 'text-[#FFE01B]' },
    { name: 'Keap to GoHighLevel', icon: <Briefcase size={24} />, type: 'CRM + email + payments', link: '/keap-to-gohighlevel', built: false, iconColor: 'text-[#8B4513]' },
    { name: 'Pipedrive to GoHighLevel', icon: <Target size={24} />, type: 'Sales CRM + pipelines', link: '/pipedrive-to-gohighlevel', built: false, iconColor: 'text-[#2D8C3C]' },
    { name: 'WordPress to GoHighLevel', icon: <Globe size={24} />, type: 'Website + forms + CRM', link: '/wordpress-to-gohighlevel', built: false, iconColor: 'text-[#21759B]' },
  ];

  const timelineData = [
    { platform: 'HubSpot', simple: '2-3 wks', standard: '3-5 wks', complex: '5-7 wks' },
    { platform: 'ClickFunnels', simple: '2-3 wks', standard: '3-5 wks', complex: '5-7 wks' },
    { platform: 'ActiveCampaign', simple: '2-3 wks', standard: '3-5 wks', complex: '5-6 wks' },
    { platform: 'Kajabi', simple: '3-4 wks', standard: '4-6 wks', complex: '6-8 wks' },
    { platform: 'Salesforce', simple: '4-5 wks', standard: '5-7 wks', complex: '7-8 wks' },
    { platform: 'Zoho / Pipedrive', simple: '2-3 wks', standard: '3-5 wks', complex: '5-6 wks' },
    { platform: 'Mailchimp / Keap', simple: '2-3 wks', standard: '3-4 wks', complex: '4-6 wks' },
    { platform: 'WordPress', simple: '2-3 wks', standard: '3-5 wks', complex: '5-6 wks' },
  ];

  const relatedBlogs = [
    {
      slug: 'hubspot-to-gohighlevel-migration',
      title: 'How to Migrate from HubSpot to GoHighLevel: A Step-by-Step Guide',
      excerpt: 'The complete technical walkthrough of the HubSpot to GHL migration what to export, how to map fields, and what to rebuild first.',
      type: 'Step-by-Step Guide',
    },
    {
      slug: 'clickfunnels-to-gohighlevel-migration',
      title: 'ClickFunnels to GoHighLevel Migration: What Breaks and How We Fix It',
      excerpt: 'Every ClickFunnels element mapped to its GHL equivalent including what the importer handles versus what requires a full rebuild.',
      type: 'Migration Breakdown',
    },
    {
      slug: 'ghl-migration-timeline',
      title: 'GHL Migration Timeline Explained: How Long Does It Actually Take?',
      excerpt: 'Honest timelines for migrations of every complexity tier from simple 2-week moves to 8-week complex rebuilds with a platform-by-platform breakdown.',
      type: 'Timeline Guide',
    },
    {
      slug: 'activecampaign-to-gohighlevel-migration',
      title: 'ActiveCampaign to GoHighLevel Migration: The Complete Guide for Marketing Agencies',
      excerpt: 'How to migrate AC automations, contacts, tags, and deal pipelines into GoHighLevel with the automation rebuild approach that preserves your logic.',
      type: 'ActiveCampaign Guide',
    },
    {
      slug: 'ghl-migration-mistakes',
      title: 'Common GHL Migration Mistakes Agencies Make and How to Avoid Them',
      excerpt: 'The six most damaging migration mistakes from cancelling your source platform too early to skipping field mapping and attribution setup.',
      type: 'Common Mistakes',
    },
    {
      slug: 'gohighlevel-migration-checklist',
      title: 'GHL Migration Checklist for Agencies: Everything to Do Before You Switch',
      excerpt: 'A complete pre-migration audit checklist from data backup and field mapping to automation documentation and team preparation.',
      type: 'Free Checklist',
    },
  ];

  return (
    <>
      {/* All Schema Components */}
      <OrganizationSchema />
      <ServiceSchema
        name="GoHighLevel Migration Service"
        description="Professional CRM migration service to GoHighLevel. We migrate businesses from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, Salesforce, Mailchimp, Keap, WordPress, and Pipedrive into GoHighLevel. Full data migration including contacts, pipelines, automations, funnels, and team training. Zero data loss. Fixed price. Delivered in 2 to 8 weeks depending on complexity."
        url="https://www.ghlscaleup.com/services/migration"
        serviceType={['CRM Migration', 'GoHighLevel Setup', 'Marketing Automation Migration', 'Funnel Migration', 'Data Migration']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Services', url: 'https://www.ghlscaleup.com/services' },
          { name: 'GHL Migration Services', url: 'https://www.ghlscaleup.com/services/migration' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf-block', '.faq-a']} />

      {/* Breadcrumb */}
      <nav className="bg-[#F4F7FA] border-b border-[#E8EDF4] py-3" aria-label="Breadcrumb">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="flex items-center gap-2 text-[13px] text-[#8A9BB0] flex-wrap">
            <Link href="/" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">Home</Link>
            <span className="text-[#E8EDF4]">›</span>
            <Link href="/services" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">GHL Services</Link>
            <span className="text-[#E8EDF4]">›</span>
            <span>GHL Migration Services</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-[72px] md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1fr_380px] gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-[18px]">
                <div className="w-7 h-0.5 bg-[#F8D000] rounded"></div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#F8D000]">GoHighLevel Migration Service</span>
              </div>
              <h1 className="text-[clamp(28px,3.8vw,44px)] font-extrabold tracking-[-0.5px] leading-[1.13] mb-4">
                GHL Migration Services
                <span className="text-[#F8D000] block">Move Any CRM to GoHighLevel</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed mb-7 max-w-[540px] pl-4 border-l-[3px] border-[#F8D000]">
                We migrate businesses from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, Salesforce, Mailchimp, Keap, Pipedrive, and WordPress into GoHighLevel with zero data loss. We handle the complete migration: contact transfer and field mapping, pipeline reconstruction, trigger replication, workflow recreation, funnel imports, and team training. Both platforms run in parallel during migration so there is zero downtime. Migration projects start from $1,500. Free assessment to start.
              </p>
              <div className="flex gap-3.5 flex-wrap mb-8">
                <Link href="/contact-us" className="bg-[#F8D000] text-[#0B1421] px-8 py-[14px] rounded-xl text-[15px] font-semibold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                  Book a Free Migration Assessment → <ArrowRight size={16} />
                </Link>
                <Link href="#platforms" className="bg-transparent text-white px-8 py-[14px] rounded-xl text-[15px] font-medium border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all">
                  See All Platforms We Migrate
                </Link>
              </div>
              <p className="text-[13px] text-white/45 flex items-center gap-2 flex-wrap">
                <span className="text-[#25C97D]">✦</span> 200+ GHL builds and migrations delivered
                <span className="text-white/30">·</span> Zero data loss across all projects
                <span className="text-white/30">·</span> 6 countries
                <span className="text-white/30">·</span> Fixed price, no hourly billing
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-7">
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-5">Platforms We Migrate From</div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-2xl font-extrabold text-[#F8D000]">10+</div><div className="text-[12px] text-white/50">Source Platforms Supported</div></div>
                <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-2xl font-extrabold text-[#F8D000]">200+</div><div className="text-[12px] text-white/50">Migrations Delivered</div></div>
                <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-2xl font-extrabold text-[#F8D000]">0</div><div className="text-[12px] text-white/50">Data Loss Incidents</div></div>
                <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-2xl font-extrabold text-[#F8D000]">$1,500</div><div className="text-[12px] text-white/50">Starting Price</div></div>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">HubSpot</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">ClickFunnels</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">ActiveCampaign</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">Kajabi</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">Zoho</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">Salesforce</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">Mailchimp</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">Keap</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">Pipedrive</span>
                <span className="text-[11px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Block */}
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="bg-[#E6F4FF] border-l-4 border-[#0E9BF0] rounded-r-xl p-[22px_28px] mb-12">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#0E9BF0] mb-2">What this service is</div>
            <p className="text-base text-[#1A202C] leading-relaxed font-medium">GHL Scale Up is a GoHighLevel migration service for agencies and service businesses switching from any major CRM, automation platform, or funnel builder. We manage every technical step contact export and field mapping, trigger replication, workflow recreation, pipeline restructuring, funnel imports, integration reconnections, and full team onboarding. Every migration is fixed price with both platforms running simultaneously so your business never stops. Migration projects start from $1,500 and are typically delivered in 2 to 8 weeks depending on account complexity.</p>
          </div>

          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Why Businesses Migrate to GoHighLevel</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Why 80,000+ Businesses Have Already Switched to GoHighLevel</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">The businesses that migrate to GHL are not switching because their current platform is broken. They are switching because their current platform is costing them more in money, in manual work, and in tools that do not talk to each other.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0E9BF0]"></div>
              <DollarSign size={26} className="mb-3 text-[#0E9BF0]" />
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-2">Tool Consolidation and Cost Savings</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">The average agency runs 6 to 8 separate tools CRM, email marketing, SMS, calendar booking, funnels, and reporting. GoHighLevel replaces all of them at $297 per month. Most businesses save $150 to $500 per month from the switch alone, not counting the time saved from not managing multiple platforms.</p>
            </div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0E9BF0]"></div>
              <Zap size={26} className="mb-3 text-[#0E9BF0]" />
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-2">Multi-Channel Automation in One System</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">GoHighLevel workflows trigger across email, SMS, WhatsApp, voice, and Facebook Messenger from a single automation builder. Platforms like HubSpot and ActiveCampaign require separate tools or expensive add-ons to achieve the same multi-channel reach GHL offers by default.</p>
            </div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0E9BF0]"></div>
              <Tag size={26} className="mb-3 text-[#0E9BF0]" />
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-2">White-Label SaaS Revenue for Agencies</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">GoHighLevel SaaS mode lets agencies white-label the entire platform and resell it to clients as their own branded software. No other platform in this category offers this. Agencies using GHL SaaS mode add $50 to $500 per month in recurring revenue from every client they manage without building software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-20 bg-[#F4F7FA]" id="platforms">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Supported Platforms</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">GoHighLevel Migration Service Every Major Platform Supported</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Click any platform to see the specific migration guide, what transfers, what we rebuild, and the exact timeline for that source platform.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {platforms.map((platform, idx) => (
              <Link
                key={idx}
                href={platform.link}
                className={`bg-white border rounded-2xl p-5 text-center transition-all relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] ${platform.built ? 'border-[rgba(37,201,125,0.25)]' : 'opacity-75'
                  }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${platform.built ? 'bg-[#25C97D]' : 'bg-[#0E9BF0]'} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
                <div className={`text-2xl mb-2.5 flex justify-center ${platform.iconColor}`}>{platform.icon}</div>
                <div className="text-[13px] font-bold text-[#1C2E4A] mb-1 leading-tight">{platform.name}</div>
                <div className="text-[11px] text-[#8A9BB0] mb-2">{platform.type}</div>
                <span className={`inline-block text-[10px] font-bold tracking-[0.5px] uppercase px-2 py-1 rounded-full ${platform.built
                    ? 'text-[#25C97D] bg-[rgba(37,201,125,0.1)]'
                    : 'text-[#0E9BF0] bg-[#E6F4FF]'
                  }`}>
                  {platform.built ? 'View Migration Guide →' : 'Migration Service →'}
                </span>
              </Link>
            ))}
          </div>

          <p className="text-center mt-5 text-[14px] text-[#8A9BB0]">
            Not seeing your platform? <Link href="/contact" className="text-[#0E9BF0] font-semibold hover:underline">Contact us</Link> we migrate from any platform with an export function.
          </p>
        </div>
      </section>

      {/* What We Migrate - Two Column Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Data Migration</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">What a GoHighLevel Migration Includes and What Needs to Be Rebuilt</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">No two platforms store and structure data the same way. Understanding what migrates directly versus what requires trigger replication and workflow recreation is critical before any migration begins.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)]">
            {/* What Transfers */}
            <div>
              <div className="p-[18px_24px] flex items-center gap-2.5 bg-[rgba(37,201,125,0.1)] border-b-2 border-[#25C97D]">
                <CheckCircle size={20} className="text-[#25C97D]" />
                <span className="text-[14px] font-bold text-[#25C97D]">What Transfers to GoHighLevel</span>
              </div>
              <div>
                {['All contacts, custom fields, and contact records', 'Pipeline stages and opportunity data', 'Deal history, revenue records, and close dates', 'Contact notes, activity history, and tags', 'Email lists and contact segments', 'Funnel and landing page designs (via GHL importer)', 'Products and pricing data (CSV export)', 'Conversation history where accessible'].map((item, idx) => (
                  <div key={idx} className={`p-3 px-6 flex items-center gap-2.5 border-b border-[#E8EDF4] text-[14px] text-[#4A5568] ${idx % 2 === 1 ? 'bg-[#F4F7FA]' : ''}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#25C97D]"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* What Needs Rebuilding */}
            <div>
              <div className="p-[18px_24px] flex items-center gap-2.5 bg-[rgba(214,158,46,0.08)] border-b-2 border-[#D69E2E]">
                <Settings size={20} className="text-[#D69E2E]" />
                <span className="text-[14px] font-bold text-[#D69E2E]">What We Rebuild Inside GoHighLevel</span>
              </div>
              <div>
                {['Trigger replication all automation logic rebuilt natively in GHL workflows', 'Workflow recreation email sequences, SMS follow-ups, delay timers', 'Field mapping all custom properties matched to GHL data structure', 'Pipeline restructuring stages recreated, automation attached', 'Forms and survey steps rebuilt in GHL form builder', 'Order bumps and upsell flows rebuilt in GHL checkout', 'Course and membership structures (platform-dependent)', 'All integration authentication Google, Facebook, Stripe, Twilio, Mailgun', 'Domain and DNS routing to GHL', 'Pixel, Google Tag, and conversion event tracking'].map((item, idx) => (
                  <div key={idx} className={`p-3 px-6 flex items-center gap-2.5 border-b border-[#E8EDF4] text-[14px] text-[#4A5568] ${idx % 2 === 1 ? 'bg-[#F4F7FA]' : ''}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E]"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-[#E6F4FF] border-l-4 border-[#0E9BF0] rounded-r-xl">
            <p className="text-[15px] text-[#1A202C] font-medium leading-relaxed"><strong className="text-[#0E9BF0]">Why field mapping matters:</strong> Field mapping is the most commonly skipped step in DIY migrations. Without it, contact data lands in the wrong fields or gets lost entirely. GHL Scale Up documents and validates the complete field mapping before a single contact is moved.</p>
          </div>
        </div>
      </section>

      {/* Who Is This For - Dark */}
      <section className="py-20 bg-[#1C2E4A]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000]/20 px-3.5 py-1 rounded-full mb-3.5">Who This Is For</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-white leading-[1.22] tracking-[-0.4px] mb-3">Who Uses Our GoHighLevel Migration Service</h2>
            <p className="text-base text-white/65 leading-relaxed">Every migration we do has a different source platform but the underlying reasons are almost always the same.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0E9BF0]"></div>
              <Building2 size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-2">Marketing Agencies Consolidating Tools</h3>
              <p className="text-[13px] text-white/60 leading-relaxed">Agencies paying for HubSpot or ActiveCampaign plus separate SMS, calendar, and funnel tools. GoHighLevel replaces the entire stack. Most save $150 to $500 per month from tool consolidation alone, before accounting for the efficiency gains from one unified platform.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0E9BF0]"></div>
              <GraduationCap size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-2">Coaches and Course Creators on Kajabi or ClickFunnels</h3>
              <p className="text-[13px] text-white/60 leading-relaxed">Coaches and course creators who built their business in Kajabi or ClickFunnels but now need CRM pipelines, AI-powered follow-up, two-way SMS, and appointment booking. GoHighLevel handles the full coaching business in one platform.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0E9BF0]"></div>
              <Home size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-2">Real Estate and Service Businesses</h3>
              <p className="text-[13px] text-white/60 leading-relaxed">Real estate teams, HVAC companies, home service businesses, and professional services using Zoho, Salesforce, or Pipedrive for CRM but needing the speed-to-lead automation, AI call handling, and review management that GoHighLevel includes natively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Deliverables</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">Everything Included in Every <span className="text-[#0E9BF0]">GoHighLevel Migration</span> We Deliver</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3.5">We do not move your contacts and hand the account back to you half-built. Every migration includes the full rebuild trigger replication, workflow recreation, pipeline restructuring, integration setup, and team training delivered as a complete, tested GoHighLevel system.</p>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Every migration begins with a full audit of your source platform. Every field, automation, pipeline, form, and integration is documented before any data is moved. Nothing is assumed. Nothing is skipped.</p>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Both platforms run in parallel zero downtime, zero missed leads during migration</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Complete field mapping documented before a single contact is moved</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">All trigger replication and workflow recreation tested end-to-end before cutover</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Fixed price agreed in writing before work starts no scope creep</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Team training included your people operate GHL from day one of go-live</span></div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(28,46,74,0.07)]">
                <div className="bg-[#1C2E4A] p-4"><p className="text-[13px] font-bold text-[#F8D000] tracking-[1px] uppercase">Every Migration Includes</p></div>
                <div>
                  {[
                    'Full source platform audit and migration scope document',
                    'Complete contact database export and field mapping',
                    'GHL account configuration from scratch',
                    'Pipeline reconstruction with automation triggers attached',
                    'Trigger replication all automation logic rebuilt in GHL',
                    'Funnel and landing page import and QA',
                    'Integration reconnections (Google, Facebook, Stripe, Twilio, Mailgun)',
                    'Tracking and attribution setup before DNS cutover',
                    'End-to-end testing of every workflow, form, and checkout',
                    'Team training session and written handover documentation',
                  ].map((item, idx) => (
                    <div key={idx} className={`p-3 px-6 flex items-center gap-2.5 border-b border-[#E8EDF4] text-[14px] text-[#4A5568] ${idx % 2 === 1 ? 'bg-[#F4F7FA]' : ''}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25C97D]"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Migration Process</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">How the <span className="text-[#0E9BF0]">GoHighLevel Migration Process</span> Works 5 Steps</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Every migration follows the same five-step process regardless of source platform. Each step is verified before the next begins no half-built systems reach your live environment.</p>
              <div className="flex flex-col">
                {[
                  { num: 1, title: 'Free Migration Assessment', desc: 'We review your current platform contacts volume, active automations, pipelines, integrations, and any special elements (courses, affiliate programs, order flows). You receive a scope document with exact deliverables, timeline, and fixed price before any work begins.', tag: 'Free No commitment' },
                  { num: 2, title: 'Source Platform Audit and Data Export', desc: 'We conduct a full audit of your source platform documenting every field, automation trigger, pipeline stage, form, integration, and contact tag. Complete data export validated. Field mapping agreed in writing before any import begins. Your current platform stays fully live throughout.', tag: 'Week 1' },
                  { num: 3, title: 'GHL Build CRM, Pipelines, Trigger Replication', desc: 'Your GHL account is configured from scratch. Pipeline stages rebuilt and automation triggers attached. Every automation workflow recreated natively in GHL workflow builder using trigger replication matching the timing, conditions, and branching logic of your existing system. All integration connections established.', tag: 'Week 1 to 3' },
                  { num: 4, title: 'Contact Import, Testing, and Tracking Setup', desc: 'Full contact database imported and validated against source. Every workflow triggered and tested end-to-end. Tracking rebuilt inside GHL before any DNS change Meta Pixel, Google Tag, UTM parameters, and conversion events all verified before traffic is switched. No attribution data is lost.', tag: 'Week 2 to 4' },
                  { num: 5, title: 'Team Training, Cutover, and Old Platform Cancellation', desc: 'Your team is trained on managing GHL day-to-day before any traffic switch. Traffic is moved to GHL using a staged cutover low-risk sources first. When everything is confirmed live and your team is confident, we tell you the exact date it is safe to cancel your old platform subscription.', tag: 'Week 3 to 8' },
                ].map((step) => (
                  <div key={step.num} className="relative pl-14 pb-9 last:pb-0 border-l-2 border-[#E8EDF4] ml-[25px]">
                    <div className="absolute left-[-23px] top-0 w-[42px] h-[42px] rounded-full bg-[#1C2E4A] border-2.5 border-[#F8D000] flex items-center justify-center text-[14px] font-extrabold text-[#F8D000]">{step.num}</div>
                    <div className="inline-block text-[11px] font-semibold text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-1.5">{step.tag}</div>
                    <h3 className="text-base font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
                    <p className="text-[14px] text-[#4A5568] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Table */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Migration Timeline</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">GoHighLevel Migration Timeline By Platform and Complexity</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">How long your migration takes depends on the source platform and account complexity. These are honest ranges based on real project delivery times.</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)] text-sm min-w-[500px]">
                  <thead>
                    <tr className="bg-[#1C2E4A] text-white">
                      <th className="p-3.5 text-left text-[13px] font-bold text-[#F8D000]">Source Platform</th>
                      <th className="p-3.5 text-left text-[13px] font-bold text-[#25C97D]">Simple</th>
                      <th className="p-3.5 text-left text-[13px] font-bold text-[#0E9BF0]">Standard</th>
                      <th className="p-3.5 text-left text-[13px] font-bold text-[#D69E2E]">Complex</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timelineData.map((item, idx) => (
                      <tr key={idx} className="border-b border-[#E8EDF4] last:border-b-0 even:bg-[#F4F7FA]">
                        <td className="p-3.5 font-semibold text-[#1C2E4A]">{item.platform}</td>
                        <td className="p-3.5 text-[#25C97D] font-semibold">{item.simple}</td>
                        <td className="p-3.5 text-[#0E9BF0] font-semibold">{item.standard}</td>
                        <td className="p-3.5 text-[#D69E2E] font-semibold">{item.complex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 p-4 bg-[#E6F4FF] rounded-xl border-l-3 border-[#0E9BF0]">
                <p className="text-[14px] text-[#1A202C] font-medium">Simple = under 5,000 contacts, basic workflows. Standard = up to 20,000 contacts, multiple pipelines. Complex = 20,000+ contacts, courses, affiliate programs, or advanced automation sequences.</p>
              </div>

              {/* Pricing Box */}
              <div className="mt-7">
                <div className="bg-white border border-[#E8EDF4] rounded-2xl p-8 shadow-[0_4px_24px_rgba(28,46,74,0.07)]">
                  <div className="text-[12px] font-bold tracking-[1px] uppercase text-[#8A9BB0] mb-2">GoHighLevel Migration Service</div>
                  <div className="text-[13px] text-[#8A9BB0] mb-1">Migrations start from</div>
                  <div className="text-[52px] font-extrabold text-[#1C2E4A] leading-none mb-1.5">$1,500 <span className="text-[18px] font-normal text-[#8A9BB0]">USD</span></div>
                  <div className="text-[13px] text-[#8A9BB0] mb-5">One-time fixed fee · Scope agreed before work starts · No hourly billing</div>
                  <div className="h-px bg-[#E8EDF4] mb-5"></div>
                  <div className="flex flex-col gap-2.5 mb-6">
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Full source platform audit and field mapping</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Complete trigger replication and workflow recreation</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Contact import, pipeline rebuild, integration setup</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>End-to-end testing before go-live</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Team training and handover documentation</div>
                  </div>
                  <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] w-full justify-center inline-flex items-center gap-2 py-4 px-8 rounded-xl text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                    Book a Free Migration Assessment → <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#25C97D] bg-[rgba(37,201,125,0.12)] px-3.5 py-1 rounded-full mb-3.5">Real Results</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">GoHighLevel Migration Results from Real Clients</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Every number below is from a real migration project delivered by GHL Scale Up.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">200+</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">GHL Builds and Migrations Delivered</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">0</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Data Loss Incidents Across All Migrations</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">6</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Countries US, UK, UAE, AU, SG, IN</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">70%</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Average Reduction in Manual Work Post-Migration</div></div>
          </div>

          <div className="bg-[#F4F7FA] rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2.5">Migration Case Study Marketing Agency</div>
              <p className="text-[17px] font-semibold text-[#1C2E4A] leading-relaxed mb-4 italic">"We were running HubSpot, ActiveCampaign, Calendly, and Twilio separately over $400 a month just for tools that still required manual bridges between them. GHL Scale Up migrated everything into GoHighLevel in 4 weeks. Our cost dropped to $297. The trigger replication they did on our AC automations was the part I was most nervous about it works better inside GHL than it ever did in ActiveCampaign."</p>
              <p className="text-[13px] text-[#8A9BB0]"> Marketing Agency Owner, United States</p>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">70%</div><div className="text-[13px] text-[#4A5568] leading-tight">Reduction in manual follow-up work within 30 days of migration</div></div>
              <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">4wks</div><div className="text-[13px] text-[#4A5568] leading-tight">Full migration from HubSpot and ActiveCampaign to live GHL system</div></div>
              <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">$150</div><div className="text-[13px] text-[#4A5568] leading-tight">Monthly saving after replacing the full tool stack with GoHighLevel</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Free Migration Assessment</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Ready to <span className="text-[#F8D000]">Migrate to GoHighLevel?</span></h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">Book a free 30-minute migration assessment. We review your current platform, confirm what transfers and what we rebuild, and give you a fixed price scope document. No obligation to proceed.</p>
          <p className="text-[13px] text-white/40 mb-8">No commitment required. Aryan personally responds within a few hours.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact-us" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
              Book a Free Migration Assessment → <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Mail size={14} /> <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Phone size={14} /> <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><MessageCircle size={14} /> <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp: +91 98932 70210</a></span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">FAQ</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">GoHighLevel Migration Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5568] leading-relaxed max-w-[620px] mx-auto">Every question below is one we are asked before migration projects begin. Answers are specific to GoHighLevel migrations not generic CRM content.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Read Our Articles */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Migration Guides</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Read Our GoHighLevel Migration Articles</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Research-backed migration guides, platform comparisons, timeline breakdowns, and the migration checklist everything you need before and after making the switch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedBlogs.slice(0, 6).map((blog, idx) => (
              <Link key={idx} href={`/blog/${blog.slug}`} className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">{blog.type}</div>
                <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">{blog.title}</h3>
                <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">{blog.excerpt}</p>
                <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the guide → <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Start Your Migration</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Book a Free <span className="text-[#F8D000]">GoHighLevel Migration</span> Assessment</h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">30 minutes. We review your current platform, confirm what transfers and what we rebuild, and give you a fixed price scope document before any work begins. No obligation to proceed.</p>
          <p className="text-[13px] text-white/40 mb-8">Aryan personally reviews every inquiry and responds within a few hours not an automated sequence.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact-us" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
              Book a Free Migration Assessment → <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="bg-transparent text-white px-10 py-4 rounded-xl text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              View All GHL Services
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Mail size={14} /> <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Phone size={14} /> <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><MessageCircle size={14} /> <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp: +91 98932 70210</a></span>
          </div>
        </div>
      </section>

      <CtaBand
        title='Stop Paying for Multiple Tools.<br /><span class="hl-yellow">Consolidate with GHL.</span>'
        description="GoHighLevel replaces 5+ tools CRM, funnels, email, SMS, calendars, and more. Let us migrate your business seamlessly. Book your free assessment today."
        primaryText="Book Your Free Migration Assessment →"
        primaryHref="/contact-us"
      />
    </>
  );
}