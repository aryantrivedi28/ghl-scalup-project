// app/services/migration/activecampaign-to-gohighlevel/components/ActiveCampaignMigrationClient.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Check,
  X,
  Building2,
  Smartphone,
  Layers,
} from 'lucide-react';

// Import existing FAQ schema hook
import { useFaqSchema } from '@/hooks/useFaqSchema';

// FAQ data for the page
const faqs = [
  {
    q: 'Can ActiveCampaign automations be imported into GoHighLevel?',
    a: 'No. There is no direct automation import tool between ActiveCampaign and GoHighLevel. Every ActiveCampaign automation including sequences, conditional branches, goal steps, and split tests must be manually recreated inside GoHighLevel workflow builder. This is the most time-consuming part of any AC to GHL migration. GHL Scale Up documents every AC automation in full before rebuilding it natively inside GHL using equivalent trigger conditions, action blocks, delay timers, and conditional branches.',
  },
  {
    q: 'What happens to my ActiveCampaign tags when I migrate to GoHighLevel?',
    a: 'ActiveCampaign tags can be included in your CSV contact export and imported into GoHighLevel during the contact import process. However, AC uses both lists and tags to segment contacts GHL uses tags and smart lists differently. Before any import, we create a tag mapping document that converts your AC list memberships into GHL tags and recreates your segment logic using GHL smart list filters. Without this step, contacts land in GHL with no meaningful segmentation.',
  },
  {
    q: 'Will my email deliverability drop when I move from ActiveCampaign to GoHighLevel?',
    a: 'This is the most important deliverability question in any AC to GHL migration and the one most migration services skip. ActiveCampaign has more mature email infrastructure than GoHighLevel AC shared IP reputation is generally stronger. When you switch sending infrastructure, your domain needs to re-establish its reputation with inbox providers. GHL Scale Up includes a structured email domain warm-up as part of every ActiveCampaign migration: starting at 50 to 100 emails per day and increasing over 2 to 3 weeks. We also configure SPF, DKIM, and DMARC for your sending domain before sending a single email through GHL.',
  },
  {
    q: 'How long does an ActiveCampaign to GoHighLevel migration take?',
    a: 'A standard ActiveCampaign to GoHighLevel migration takes 3 to 5 weeks depending on account size and automation complexity. A simple migration with fewer than 5,000 contacts and under 10 automations takes 2 to 3 weeks. A complex migration with 20,000+ contacts, 50+ automations, custom integrations, and deal pipelines takes 5 to 6 weeks. We give you a specific timeline after reviewing your AC account on the free migration assessment call.',
  },
  {
    q: 'How much does ActiveCampaign to GoHighLevel migration cost?',
    a: 'ActiveCampaign to GoHighLevel migration with GHL Scale Up starts from $100 for a standard migration. This includes contact export and import with full tag mapping, automation rebuilds, deal pipeline migration, email template transfer, domain warm-up setup, and team training. Complex migrations with large contact databases and advanced automation logic are priced based on scope after a free assessment. All projects are fixed price no hourly billing.',
  },
  {
    q: 'Does GoHighLevel replace everything ActiveCampaign does?',
    a: 'GoHighLevel replaces most of what ActiveCampaign does contact management, email marketing, automation workflows, deal pipelines, forms, and landing pages. GHL goes significantly further with two-way SMS, AI voice agents, appointment booking, reputation management, and white-label SaaS mode. The areas where ActiveCampaign still has an edge: email deliverability infrastructure, predictive send time optimisation, and the depth of conditional content blocks inside email templates. For agencies and service businesses, GoHighLevel is a complete replacement with significant additions.',
  },
  {
    q: 'What is tag mapping in an ActiveCampaign to GHL migration?',
    a: 'Tag mapping is the process of converting ActiveCampaign dual segmentation system (lists and tags) into GoHighLevel single tag and smart list system. In AC, contacts belong to lists and have tags applied. In GHL, contacts just have tags, and smart lists filter contacts based on tag conditions. Before any import, we document every AC list and tag, decide which become GHL tags and which become smart list filters, and configure the import accordingly. Skipping this step is the most common reason AC contacts land in GHL with broken segmentation.',
  },
  {
    q: 'What is lead scoring in ActiveCampaign and can it be migrated to GHL?',
    a: 'ActiveCampaign has a granular contact scoring system where positive and negative scores are assigned based on email opens, link clicks, site visits, and custom events. GoHighLevel has basic lead scoring but at a less refined level. AC contact scores do not transfer to GHL automatically. We rebuild your lead qualification logic inside GHL using workflow conditions and custom fields the outcome is the same (qualified contacts surface correctly) but the mechanism is different. We flag this on the assessment call for every AC migration.',
  },
  {
    q: 'Should I clean my ActiveCampaign list before migrating to GoHighLevel?',
    a: 'Yes and this is non-negotiable for anyone concerned about deliverability. Before migrating, remove all unsubscribed contacts, hard bounces, and contacts who have not engaged in 12 or more months from your export. Importing a dirty list into GoHighLevel damages your sending reputation on the new platform from the first send. GHL Scale Up reviews your contact list health before migration and advises on which contacts to migrate and which to leave behind.',
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

export default function ActiveCampaignMigrationClient() {
  useFaqSchema(faqs);

  const transferData = [
    { element: 'Contacts (all fields)', status: '✓ CSV export, GHL import', breaks: 'Field names may differ', how: 'Full field mapping before import every column matched' },
    { element: 'Tags', status: '✓ Included in CSV export', breaks: 'Recreated in GHL during import', how: 'Tag mapping document agreed before import begins' },
    { element: 'Lists', status: 'Partial no direct GHL equivalent', breaks: 'AC list membership has no match in GHL', how: 'Each AC list converted to a GHL tag or smart list filter' },
    { element: 'Custom fields', status: '✓ Transfer via CSV', breaks: 'Custom fields must exist in GHL before import', how: 'All custom fields created in GHL, mapped before import' },
    { element: 'Contact scores (lead scoring)', status: 'Partial different system', breaks: 'AC scoring is more granular than GHL', how: 'Lead qualification logic rebuilt using GHL workflow conditions and custom fields' },
    { element: 'Deal pipelines and opportunities', status: '✓ Stage names recreated in GHL', breaks: 'Stage-level automations must be rebuilt', how: 'Pipelines rebuilt, automation triggers attached to each stage' },
    { element: 'Email automations and sequences', status: '✗ Cannot be imported', breaks: 'Every automation must be manually rebuilt', how: 'Each AC automation documented fully, rebuilt natively in GHL workflow builder' },
    { element: 'Email templates', status: '✓ Import via shared link', breaks: 'Some HTML formatting may differ', how: 'Templates imported, reviewed, and adjusted for GHL email builder' },
    { element: 'Forms', status: '✗ Does not transfer', breaks: 'All forms must be rebuilt inside GHL', how: 'Recreated in GHL form builder, connected to pipelines and automation' },
    { element: 'Landing pages', status: '✗ Does not transfer', breaks: 'Rebuilt inside GHL funnel builder', how: 'Rebuilt with same structure, connected to GHL CRM' },
    { element: 'Integrations (Shopify, Zapier etc.)', status: '✗ All must be reconnected', breaks: 'Auth tokens and webhooks broken', how: 'All integrations reconnected and tested post-migration' },
    { element: 'Email sending domain and deliverability', status: 'Requires warm-up', breaks: 'New infrastructure = reputation needs re-establishing', how: 'Structured warm-up plan: 50 to 100 emails/day, scaling over 2 to 3 weeks' },
  ];

  const warmupSteps = [
    { week: 'Days 1-3', volume: '50-100', label: 'emails/day to most engaged contacts only' },
    { week: 'Days 4-7', volume: '100-300', label: 'emails/day monitor open and bounce rates' },
    { week: 'Week 2', volume: '300-1,000', label: 'emails/day expanding to broader segments' },
    { week: 'Week 3+', volume: 'Full', label: 'volume full list send capacity reached' },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#F4F7FA] border-b border-[#E8EDF4] py-3" aria-label="Breadcrumb">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="flex items-center gap-2 text-[13px] text-[#8A9BB0] flex-wrap">
            <Link href="/" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">Home</Link>
            <span className="text-[#E8EDF4]">›</span>
            <Link href="/services/migration" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">GHL Migration Services</Link>
            <span className="text-[#E8EDF4]">›</span>
            <span>ActiveCampaign to GoHighLevel</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-[72px] md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1fr_370px] gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-[18px]">
                <div className="w-7 h-0.5 bg-[#F8D000] rounded"></div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#F8D000]">ActiveCampaign to GoHighLevel Migration</span>
              </div>
              <h1 className="text-[clamp(28px,3.8vw,44px)] font-extrabold tracking-[-0.5px] leading-[1.13] mb-4">
                ActiveCampaign to GoHighLevel
                <span className="text-[#F8D000] block">Migration Service</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed mb-7 max-w-[540px] pl-4 border-l-[3px] border-[#F8D000]">
                We migrate your ActiveCampaign contacts, tags, lists, deal pipelines, and email templates into GoHighLevel then rebuild every automation natively in GHL workflow builder. We include a structured email domain warm-up so your deliverability does not drop after the switch. No data loss. Fixed price. Free migration assessment to start.
              </p>
              <div className="flex gap-3.5 flex-wrap mb-8">
                <Link href="/contact-us" className="bg-[#F8D000] text-[#0B1421] px-8 py-[14px] rounded-xl text-[15px] font-semibold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                  Book a Free Migration Assessment → <ArrowRight size={16} />
                </Link>
                <Link href="#what-transfers" className="bg-transparent text-white px-8 py-[14px] rounded-xl text-[15px] font-medium border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all">
                  See What We Migrate
                </Link>
              </div>
              <p className="text-[13px] text-white/45 flex items-center gap-2 flex-wrap">
                <span className="text-[#25C97D]">✦</span> 200+ GHL builds and migrations delivered
                <span className="text-white/30">·</span> Zero data loss guarantee
                <span className="text-white/30">·</span> 6 countries served
                <span className="text-white/30">·</span> Fixed price, no hourly billing
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-7">
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-4">Your current ActiveCampaign stack vs GoHighLevel</div>
              <div className="flex flex-col gap-2 mb-4">
                <div className="bg-white/5 rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-white/65">ActiveCampaign Plus</span><span className="text-[13px] font-bold text-white">$149/mo</span></div>
                <div className="bg-white/5 rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-white/65">ClickFunnels or landing page tool</span><span className="text-[13px] font-bold text-white">$97/mo</span></div>
                <div className="bg-white/5 rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-white/65">Calendly Teams</span><span className="text-[13px] font-bold text-white">$20/mo</span></div>
                <div className="bg-white/5 rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-white/65">Twilio or SMS platform</span><span className="text-[13px] font-bold text-white">$30/mo</span></div>
                <div className="bg-[rgba(229,62,62,0.1)] border border-[rgba(229,62,62,0.2)] rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-[#FCA5A5]">Current stack total</span><span className="text-[13px] font-bold text-[#FCA5A5]">~$296/mo</span></div>
                <div className="bg-[rgba(37,201,125,0.1)] border border-[rgba(37,201,125,0.2)] rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-[#25C97D]">GoHighLevel Unlimited (replaces all)</span><span className="text-[13px] font-bold text-[#25C97D]">$297/mo</span></div>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <div className="text-[12px] text-white/50 text-center">
                <strong className="text-[#25C97D] block text-[14px] mb-1">Same cost. One platform. Zero tool-switching.</strong>
                Migration fee starts from $100. Assessment is free.
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
            <p className="text-base text-[#1A202C] leading-relaxed font-medium">GHL Scale Up migrates marketing agencies and service businesses from ActiveCampaign into GoHighLevel handling every technical step: contact export with full tag history, AC list to GHL tag conversion, automation rebuilds in GHL workflow builder, deal pipeline migration, email template transfer, and a structured domain warm-up to protect your email deliverability after the switch. Standard migrations deliver in 3 to 5 weeks at a fixed price. Both platforms run in parallel throughout no downtime, no missed leads.</p>
          </div>

          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Why Agencies Switch</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Why Marketing Agencies Are Moving from ActiveCampaign to GoHighLevel</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">ActiveCampaign is one of the best email automation tools ever built. Agencies leave it not because it stopped working but because it was never built for agencies running multiple clients with SMS, AI, and white-label needs.</p>
          </div>

          <div className="bg-[#E6F4FF] border-l-4 border-[#0E9BF0] rounded-r-xl p-[18px_22px]">
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-1.5">The core problem with ActiveCampaign for agencies</div>
            <p className="text-[15px] text-[#1A202C] leading-relaxed font-medium">ActiveCampaign is a single-business tool. It has one account, one email system, and no native SMS, no AI voice agents, no white-label mode, and no sub-account structure. Every client you manage needs their own AC account which means multiple logins, multiple invoices, and no unified view across clients. GoHighLevel sub-account model was specifically designed to solve this.</p>
          </div>
        </div>
      </section>

      {/* Transfer Table */}
      <section className="py-20 bg-[#F4F7FA]" id="what-transfers">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Data Migration</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">What Transfers from ActiveCampaign to GoHighLevel and What Needs Rebuilding</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">ActiveCampaign and GoHighLevel store and process data differently. Understanding what migrates directly versus what requires a full rebuild is critical before any migration begins.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)] text-sm min-w-[800px]">
              <thead>
                <tr className="bg-[#1C2E4A] text-white">
                  <th className="p-4 text-left text-[13px] font-bold">ActiveCampaign Element</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#25C97D]">Status in GoHighLevel</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#FCA5A5]">What Breaks or Needs Work</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#F8D000]">How We Handle It</th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#E8EDF4] last:border-b-0 even:bg-[#F4F7FA]">
                    <td className="p-4 text-[#1A202C] font-semibold border-r border-[#E8EDF4] min-w-[180px]">{item.element}</td>
                    <td className="p-4 text-[#25C97D] font-semibold">{item.status.includes('✓') ? <Check size={14} className="inline mr-1" /> : item.status.includes('✗') ? <X size={14} className="inline mr-1" /> : ''}{item.status}</td>
                    <td className="p-4 text-[#4A5568]">{item.breaks}</td>
                    <td className="p-4 text-[#D69E2E] font-semibold">{item.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tag Mapping Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Unique to ActiveCampaign Migrations</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">The ActiveCampaign List-to-Tag Conversion Why It Matters</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3.5">ActiveCampaign uses two separate segmentation systems simultaneously: lists and tags. Contacts belong to lists and have tags applied on top. GoHighLevel uses a single system: tags and smart lists built from tag conditions.</p>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Before a single contact is imported, we create a tag mapping document that converts every AC list into either a GHL tag or a smart list filter. This is not optional without it, imported contacts arrive in GHL with their tags but no list membership, making your existing segments invisible and your automations unable to target the right people.</p>
              <div className="bg-[#FFFBEB] border-l-4 border-[#D69E2E] rounded-r-xl p-[18px_22px]">
                <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#D69E2E] mb-1.5">Most Common ActiveCampaign Migration Mistake</div>
                <p className="text-[15px] text-[#744210] leading-relaxed font-medium">Importing contacts from AC without converting list membership to GHL tags. The contacts arrive, the tags arrive, but the list segmentation is completely lost. This breaks every automation that targets specific lists. GHL Scale Up documents the complete tag mapping before any import begins.</p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-[1fr_60px_1fr] gap-0 items-start max-md:grid-cols-1">
                <div className="border border-[#E8EDF4] rounded-2xl overflow-hidden">
                  <div className="bg-[#4E6BFF] p-4 text-white text-[13px] font-bold">ActiveCampaign</div>
                  <div className="p-2">
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#4E6BFF]"></div>List: Agency Leads</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568] bg-[#F4F7FA]"><div className="w-1.5 h-1.5 rounded-full bg-[#4E6BFF]"></div>List: Coaching Clients</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#4E6BFF]"></div>List: Cold Prospects</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568] bg-[#F4F7FA]"><div className="w-1.5 h-1.5 rounded-full bg-[#4E6BFF]"></div>Tag: lead-hot</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#4E6BFF]"></div>Tag: nurture-sequence-3</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568] bg-[#F4F7FA]"><div className="w-1.5 h-1.5 rounded-full bg-[#4E6BFF]"></div>Tag: booked-call</div>
                    <div className="p-3 flex items-center gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#4E6BFF]"></div>Tag: no-show</div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-10 text-2xl text-[#8A9BB0] max-md:hidden">→</div>
                <div className="border border-[#E8EDF4] rounded-2xl overflow-hidden">
                  <div className="bg-[#1C2E4A] p-4 text-[#F8D000] text-[13px] font-bold">GoHighLevel</div>
                  <div className="p-2">
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></div>Tag: list-agency-leads</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568] bg-[#F4F7FA]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></div>Tag: list-coaching-clients</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></div>Smart List: Cold Prospects</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568] bg-[#F4F7FA]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></div>Tag: lead-hot</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></div>Tag: nurture-sequence-3</div>
                    <div className="p-3 flex items-center gap-2 border-b border-[#E8EDF4] text-[13px] text-[#4A5568] bg-[#F4F7FA]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></div>Tag: booked-call</div>
                    <div className="p-3 flex items-center gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></div>Tag: no-show</div>
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#8A9BB0] mt-3 leading-relaxed">AC lists become GHL tags prefixed with "list-" for tracking. Complex segments become GHL smart list filters. Every tag carries over unchanged.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Deliverability Section */}
      <section className="py-20 bg-[#1C2E4A]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000]/20 px-3.5 py-1 rounded-full mb-3.5">Critical Read Before You Switch</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-white leading-[1.22] tracking-[-0.4px] mb-3">Email Deliverability After an ActiveCampaign Migration What Nobody Tells You</h2>
            <p className="text-base text-white/65 leading-relaxed">ActiveCampaign has more mature email infrastructure than GoHighLevel. Their shared IP reputation is stronger. When you switch sending infrastructure, your domain needs to re-establish its reputation with Gmail, Outlook, and Yahoo. Skipping the warm-up causes a deliverability drop in the first two to three weeks.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h3 className="text-lg font-bold text-white mb-3.5">Three things that must happen before your first send in GHL</h3>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">1</div><span className="text-[14px] text-white/85"><strong className="text-white">SPF, DKIM, and DMARC configured on your sending domain.</strong> Non-negotiable. Without proper DNS authentication, a significant portion of your emails will land in spam from day one. GHL Scale Up configures all three records before any email is sent through GHL.</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">2</div><span className="text-[14px] text-white/85"><strong className="text-white">Clean your list before migrating.</strong> Do not import unsubscribed contacts, hard bounces, or contacts who have not engaged in 12 or more months. A dirty list imported into GHL damages your new sending reputation immediately. We review your contact list health before the import.</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">3</div><span className="text-[14px] text-white/85"><strong className="text-white">Follow a structured email warm-up plan.</strong> Start at 50 to 100 emails per day. Increase volume gradually over 2 to 3 weeks. Do not send a broadcast to your full list on day one of going live on GHL. We build and manage this warm-up plan as part of every AC migration.</span></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-5">The GHL Scale Up email warm-up schedule</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {warmupSteps.map((step, idx) => (
                  <div key={idx} className="bg-white border border-[#E8EDF4] rounded-xl p-5 text-center relative">
                    <div className="text-[10px] font-bold tracking-[1px] uppercase text-[#8A9BB0] mb-1.5">{step.week}</div>
                    <div className="text-[22px] font-extrabold text-[#0E9BF0] leading-none mb-1">{step.volume}</div>
                    <div className="text-[12px] text-[#4A5568]">{step.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-white/10 rounded-xl p-4">
                <p className="text-[14px] text-white/70 leading-relaxed">This warm-up plan is included as standard in every ActiveCampaign to GoHighLevel migration GHL Scale Up delivers. It is not an add-on. It is non-negotiable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Who This Is For</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Who Moves from ActiveCampaign to GoHighLevel and Why</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">AC works well for single businesses running email-first marketing. Agencies and multi-client operators hit its ceiling fast.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-2">Most Common</div>
              <Building2 size={26} className="text-[#0E9BF0] mb-3" />
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-2">Marketing Agencies Managing Multiple Clients</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">Running each client on a separate AC account multiple logins, multiple monthly invoices, no unified reporting. GoHighLevel sub-account model lets you manage all clients from one agency dashboard. One login. One system. One monthly bill.</p>
            </div>
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-2">Adding SMS and AI</div>
              <Smartphone size={26} className="text-[#0E9BF0] mb-3" />
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-2">Businesses That Need SMS and AI Workflows</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">ActiveCampaign does not have native SMS, WhatsApp, AI voice agents, or missed-call text-back. If you are paying for a separate SMS platform and stitching it to AC via Zapier, GoHighLevel eliminates that integration entirely SMS, email, and AI are all in the same workflow builder.</p>
            </div>
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-2">Building SaaS Revenue</div>
              <Layers size={26} className="text-[#0E9BF0] mb-3" />
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-2">Agencies Building White-Label SaaS Revenue</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">ActiveCampaign has no white-label mode. GoHighLevel SaaS mode lets you brand the entire platform as your own software and charge clients a monthly recurring fee. Agencies using GHL SaaS mode add $50 to $500 per month per client in software revenue on top of their service fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Deliverables</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">Everything We Deliver in Your <span className="text-[#0E9BF0]">ActiveCampaign to GHL Migration</span></h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3.5">We do not just move your contacts and leave you with empty pipelines and broken automations. Every AC migration includes the full rebuild tag mapping, automation recreation, email domain configuration, and team training delivered as a complete, tested GoHighLevel system.</p>
              <div className="flex flex-col gap-2.5 mt-4">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Both platforms run in parallel zero downtime, zero missed leads</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Complete tag mapping document agreed before any contact moves</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Email domain warm-up plan included as standard not an add-on</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Fixed price agreed in writing before work starts</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Team training delivered before go-live</span></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📋</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Full AC Account Audit</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every contact, tag, list, automation, template, form, and integration documented before migration begins</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🗺️</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Tag and List Mapping</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every AC list converted to a GHL tag or smart list filter. Mapping document approved before any import</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">👥</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Contact Database Migration</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Full CSV export from AC, cleaned, field-mapped, imported into GHL with tags and segmentation intact</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">⚡</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Automation Rebuilds in GHL</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every AC automation rebuilt natively in GHL workflow builder triggers, actions, delays, conditions, branches</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📧</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Email Template Transfer</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">AC email templates imported via shared link, reviewed for formatting differences, adjusted for GHL email builder</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🔥</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Email Domain Warm-Up Plan</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">SPF, DKIM, DMARC configured. Structured 3-week warm-up plan managed by GHL Scale Up to protect deliverability</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🔄</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Deal Pipeline Rebuild</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">AC deal stages recreated as GHL pipeline opportunities with automation triggers attached to each stage</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🎓</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Team Training and Handover</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Live session covering GHL pipeline, inbox, workflow, and calendar management. Written handover documentation included</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps + Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Left - Process Steps */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Migration Process</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">The <span className="text-[#0E9BF0]">ActiveCampaign to GoHighLevel</span> Migration Process 6 Steps</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Every AC migration follows six verified steps. The tag mapping and deliverability setup steps are unique to ActiveCampaign they do not apply to other migrations in the same way.</p>
              <div className="flex flex-col">
                {[
                  { num: 1, title: 'ActiveCampaign Audit and Migration Scoping', desc: 'We review your AC account contacts volume, tag and list structure, active automations, deal pipelines, integrations, and email sending volume. You receive a scope document with exact deliverables, timeline, and fixed price before any work begins.', tag: 'Free Before any payment' },
                  { num: 2, title: 'Tag Mapping Document and List Conversion Plan', desc: 'Before any contact moves, we build the complete tag mapping document. Every AC list is assigned either a GHL tag or a smart list filter equivalent. Every existing tag is carried over. The mapping is reviewed and approved by you before the import runs. This step is unique to ActiveCampaign migrations and is the most important one.', tag: 'Week 1' },
                  { num: 3, title: 'GHL Setup Email Domain, SPF, DKIM, DMARC', desc: 'Before sending a single email through GHL, we configure your sending domain with full DNS authentication: SPF, DKIM, and DMARC records. Mailgun or LC Email is connected and verified. The warm-up schedule is set. This configuration runs in parallel with the contact import nothing is delayed.', tag: 'Week 1' },
                  { num: 4, title: 'Contact Import, Pipeline Rebuild, Automation Recreation', desc: 'Contacts imported with the agreed field mapping and tag structure. GHL pipelines rebuilt to match AC deal stages. Every AC automation documented and rebuilt natively inside GHL workflow builder including email sequences, conditional branches, goal steps, and any split tests. Email templates imported via shared link and reviewed for formatting.', tag: 'Week 1 to 3' },
                  { num: 5, title: 'End-to-End Testing and Email Warm-Up Start', desc: 'Every workflow triggered and tested end-to-end. Forms tested for correct pipeline entry. Email deliverability warm-up begins at 50 to 100 emails per day to your most engaged contacts. Open rates, bounce rates, and spam rates monitored daily during warm-up. Integrations reconnected and confirmed.', tag: 'Week 2 to 4' },
                  { num: 6, title: 'Full Volume Cutover, Team Training, and AC Cancellation', desc: 'Once warm-up reaches full list volume and deliverability metrics are healthy, all traffic switches to GHL. Team training delivered before cutover. AC subscription wound down only after confirmed healthy sending on GHL. We tell you the exact date it is safe to cancel ActiveCampaign.', tag: 'Week 3 to 5' },
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

            {/* Right - Timeline & Pricing */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Timeline</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">How Long Does an <span className="text-[#0E9BF0]">ActiveCampaign to GHL Migration</span> Take?</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Timeline depends on the number of contacts, active automations, and integrations in your AC account. The email warm-up period adds 2 to 3 weeks to the total this cannot be rushed without hurting deliverability.</p>
              <div className="flex flex-col gap-3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#E6F4FF] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-1">Simple</div><div className="text-2xl font-extrabold text-[#1C2E4A]">2-3 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Under 5,000 contacts, clean list</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Fewer than 10 active automations</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Basic email sequences only</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>No complex integrations</div></div></div></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#1C2E4A] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-1">Standard</div><div className="text-2xl font-extrabold text-white">3-5 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>5,000 to 20,000 contacts</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>10 to 30 active automations</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Multiple pipelines and deal stages</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Email warm-up running in parallel</div></div></div></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#162235] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-1">Complex</div><div className="text-2xl font-extrabold text-white">5-6 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>20,000+ contacts with complex tags</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>50+ automations with advanced branching</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Multiple third-party integrations</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>High email volume needing careful warm-up</div></div></div></div>
              </div>

              <div className="mt-7">
                <div className="bg-white border border-[#E8EDF4] rounded-2xl p-8 shadow-[0_4px_24px_rgba(28,46,74,0.07)]">
                  <div className="text-[12px] font-bold tracking-[1px] uppercase text-[#8A9BB0] mb-2">ActiveCampaign to GHL Migration</div>
                  <div className="text-[50px] font-extrabold text-[#1C2E4A] leading-none mb-1.5">$100 <span className="text-[17px] font-normal text-[#8A9BB0]">USD</span></div>
                  <div className="text-[13px] text-[#8A9BB0] mb-5">Starting price · Fixed fee · Delivered in 3 to 5 weeks</div>
                  <div className="h-px bg-[#E8EDF4] mb-5"></div>
                  <div className="flex flex-col gap-2.5 mb-6">
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Full AC audit, tag mapping, and field mapping</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Contact import with complete tag and list conversion</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>All automations rebuilt natively in GHL workflows</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Email domain warm-up plan managed by GHL Scale Up</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>SPF, DKIM, DMARC configured before first send</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Team training and handover documentation</div>
                  </div>
                  <Link href="/contact-us" className="bg-[#F8D000] text-[#0B1421] w-full justify-center inline-flex items-center gap-2 py-4 px-8 rounded-xl text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                    Book a Free Migration Assessment → <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#25C97D] bg-[rgba(37,201,125,0.12)] px-3.5 py-1 rounded-full mb-3.5">Real Results</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">ActiveCampaign to GoHighLevel Real Migration Results</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">200+</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">GHL Builds and Migrations Delivered</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">0</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Deliverability Failures During Warm-Up</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">6</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Countries US, UK, UAE, AU, SG, IN</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">70%</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Average Reduction in Manual Work Post-Migration</div></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center shadow-sm border border-[#E8EDF4]">
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2.5">Migration Case Study Marketing Agency</div>
              <p className="text-[17px] font-semibold text-[#1C2E4A] leading-relaxed mb-4 italic">"We had 18 different automations in ActiveCampaign and I was convinced the migration would break half of them. GHL Scale Up documented every single one before touching anything. The automations work better in GHL than they did in AC the multi-channel triggers are things we could not even do before. And our email open rates held steady through the warm-up. No deliverability dip at all."</p>
              <p className="text-[13px] text-[#8A9BB0]"> Agency Owner, United Kingdom</p>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="bg-[#F4F7FA] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">18</div><div className="text-[13px] text-[#4A5568] leading-tight">ActiveCampaign automations rebuilt natively in GHL workflows</div></div>
              <div className="bg-[#F4F7FA] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">0%</div><div className="text-[13px] text-[#4A5568] leading-tight">Deliverability drop during the structured email warm-up period</div></div>
              <div className="bg-[#F4F7FA] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">4wks</div><div className="text-[13px] text-[#4A5568] leading-tight">Full migration from AC to live GHL system including warm-up</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Free Migration Assessment</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Ready to Move from <span className="text-[#F8D000]">ActiveCampaign to GoHighLevel?</span></h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">Book a free 30-minute migration assessment. We review your AC account, confirm what migrates and what we rebuild, and give you a fixed price before any work begins.</p>
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
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">ActiveCampaign to GoHighLevel Migration Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5568] leading-relaxed max-w-[620px] mx-auto">Every question below is one we are asked before AC migration projects start. Answers are specific to ActiveCampaign not generic migration content.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Read Our Articles */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Further Reading</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Read Our Articles on ActiveCampaign to GoHighLevel Migration</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/activecampaign-to-gohighlevel-migration" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">BOFU Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">ActiveCampaign to GoHighLevel Migration: The Complete Guide for Marketing Agencies</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">Step-by-step technical walkthrough of the AC to GHL migration tag mapping, automation rebuild order, and email warm-up schedule.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the AC migration guide → <ArrowRight size={12} /></span>
            </Link>
            <Link href="/blog/gohighlevel-vs-activecampaign" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Comparison</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">GoHighLevel vs ActiveCampaign: Why Marketing Agencies Are Making the Switch</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">A feature-by-feature comparison of GHL and AC across automation, SMS, pricing, and agency-specific capabilities with a clear recommendation for each use case.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the GHL vs AC comparison → <ArrowRight size={12} /></span>
            </Link>
            <Link href="/blog/ghl-migration-timeline" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Planning Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">GHL Migration Timeline Explained: How Long Does It Actually Take?</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">Honest timelines by platform and complexity tier including the email warm-up period that most migration services do not factor in.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the migration timeline guide → <ArrowRight size={12} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Also Migrating from Another Platform?</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">We migrate from all major CRMs, automation platforms, and funnel builders into GoHighLevel.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            <Link href="/hubspot-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">HubSpot to GoHighLevel →</Link>
            <Link href="/clickfunnels-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">ClickFunnels to GoHighLevel →</Link>
            <Link href="/kajabi-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Kajabi to GoHighLevel →</Link>
            <Link href="/zoho-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Zoho to GoHighLevel →</Link>
            <Link href="/salesforce-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Salesforce to GoHighLevel →</Link>
            <Link href="/mailchimp-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Mailchimp to GoHighLevel →</Link>
          </div>
          <p className="text-center mt-5 text-[14px] text-[#8A9BB0]">See all supported platforms on our <Link href="/services/migration" className="text-[#0E9BF0] font-semibold hover:underline">GHL Migration Services hub page</Link>.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Start Your Migration</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Book Your Free <span className="text-[#F8D000]">ActiveCampaign to GoHighLevel</span> Migration Assessment</h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">30 minutes. We review your AC account, confirm what transfers and what we rebuild, and give you a fixed price scope document. No obligation to proceed.</p>
          <p className="text-[13px] text-white/40 mb-8">Aryan personally reviews every inquiry and responds within a few hours not an automated sequence.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact-us" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
              Book a Free Migration Assessment → <ArrowRight size={16} />
            </Link>
            <Link href="/services/migration" className="bg-transparent text-white px-10 py-4 rounded-xl text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              View All Migration Services
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Mail size={14} /> <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Phone size={14} /> <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><MessageCircle size={14} /> <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp: +91 98932 70210</a></span>
          </div>
        </div>
      </section>
    </>
  );
}