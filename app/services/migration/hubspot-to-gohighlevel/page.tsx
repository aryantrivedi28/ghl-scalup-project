// app/services/migration/hubspot-to-gohighlevel/page.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Check,
  X,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Building2,
  GraduationCap,
  Layers,
  Wrench,
  TrendingUp,
  Database,
  RefreshCw,
  Zap,
  FormInput,
  Calendar,
  BarChart3,
  Home,
} from 'lucide-react';

const metadata = {
  title: 'HubSpot to GoHighLevel Migration Service | GHL Scale Up',
  description: 'Professional HubSpot to GoHighLevel migration service. We transfer contacts, custom fields, deal pipelines, and deal history from HubSpot, then rebuild your automations, forms, and workflows natively inside GoHighLevel. No data loss. Fixed price. Delivered in 3 to 5 weeks.',
}

// Import reusable schema components
import {
  OrganizationSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/lib/schemas';

// Import existing FAQ schema hook
import { generateFaqSchema } from '@/lib/faqSchema';

// FAQ data for the page
const faqs = [
  {
    q: 'What breaks when migrating from HubSpot to GoHighLevel?',
    a: 'HubSpot workflows, sequences, forms, and landing pages do not transfer directly to GoHighLevel. The trigger-action logic must be rebuilt natively inside GHL workflow builder. HubSpot contact-company-deal association model also does not have a direct GHL equivalent and must be restructured. What does transfer: contacts, custom contact properties, deal stage names, email lists, and deal history via export.',
  },
  {
    q: 'How long does a HubSpot to GoHighLevel migration take?',
    a: 'A standard HubSpot to GoHighLevel migration takes 3 to 5 weeks depending on account size and automation complexity. A simple migration with fewer than 5,000 contacts and basic workflows takes 2 to 3 weeks. A complex migration with 20,000+ contacts, multiple pipelines, and advanced HubSpot sequences takes 5 to 7 weeks. We give you a specific timeline after reviewing your HubSpot account on the free migration assessment call.',
  },
  {
    q: 'How much does HubSpot to GoHighLevel migration cost?',
    a: 'HubSpot to GoHighLevel migration projects with GHL Scale Up start from $2,500 for a standard migration. Complex migrations with large contact databases, multiple pipelines, and full automation rebuilds are priced based on scope after a free assessment. All projects are fixed price with a full scope document before any work begins. No hourly billing.',
  },
  {
    q: 'Will I lose any data moving from HubSpot to GoHighLevel?',
    a: 'No. We export your complete HubSpot contact database including custom properties, deal history, notes, and tags before touching any settings. Data is validated in GHL before your HubSpot account is changed. We run both platforms in parallel during the migration period so you have zero downtime and a full rollback option if anything is incorrect.',
  },
  {
    q: 'Can I run HubSpot and GoHighLevel at the same time during migration?',
    a: 'Yes, and we recommend it. We keep your HubSpot account fully operational while we build and test the GHL system in parallel. No lead is missed during migration. When the GHL system is fully built, tested, and your team is trained, you switch traffic to GHL and wind down HubSpot. The cutover typically takes less than one business day.',
  },
  {
    q: 'Do I need to cancel HubSpot before starting the GHL migration?',
    a: 'No. Keep your HubSpot subscription active until your GoHighLevel system is fully built, tested, and your team is trained. Cancelling HubSpot before migration is complete risks losing access to data you still need. We tell you exactly when it is safe to cancel. Most clients cancel HubSpot within one week of going live on GHL.',
  },
  {
    q: 'Does GHL Scale Up migrate HubSpot deal history?',
    a: 'Yes. We export your full HubSpot deal history and import it into GoHighLevel opportunity records. This includes deal amounts, close dates, associated contacts, and stage history. Preserved deal history is critical for revenue reporting and sales team continuity. It is a standard part of every HubSpot to GoHighLevel migration we deliver.',
  },
  {
    q: 'What GoHighLevel plan do I need after migrating from HubSpot?',
    a: 'For most HubSpot migrations, the GoHighLevel Unlimited plan at $97 per month is the right starting point. It gives you unlimited contacts, unlimited sub-accounts, and access to all features needed to replicate a HubSpot setup. If you want to resell GHL to your own clients with white-label branding, the Agency Pro plan at $497 per month is required. We help you choose the right plan on the assessment call.',
  },
];


// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[800px] mx-auto w-full">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-[#E8EDF4]">
          <button
            className="flex justify-between items-center w-full cursor-pointer py-5 text-left text-[0.92rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors gap-4"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.q}
            <span className="text-[0.7rem] text-[#8A9BB0] transition-transform flex-shrink-0" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'none' }}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed pb-5">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HubspotToGHLMigrationPage() {
  generateFaqSchema(faqs);

  const transferData = [
    { element: 'Contacts (all fields)', transfers: true, rebuild: 'Custom field mapping reviewed before import' },
    { element: 'Custom contact properties', transfers: true, rebuild: 'New custom fields created in GHL to receive data' },
    { element: 'Deal pipelines and stages', transfers: true, rebuild: 'Automation triggers attached to new pipeline stages' },
    { element: 'Deal history and amounts', transfers: true, rebuild: 'Revenue reporting rebuilt in GHL dashboards' },
    { element: 'Contact notes and activity', transfers: true, rebuild: 'Activity timeline format differs from HubSpot' },
    { element: 'Email lists and segments', transfers: true, rebuild: 'Smart List filters recreated using GHL conditions' },
    { element: 'HubSpot workflows and sequences', transfers: false, rebuild: 'Rebuilt natively using GHL workflow builder' },
    { element: 'HubSpot forms', transfers: false, rebuild: 'Rebuilt inside GHL funnel builder and connected to CRM' },
    { element: 'Landing pages and emails', transfers: false, rebuild: 'Rebuilt inside GHL pages and email campaigns' },
    { element: 'HubSpot meetings links', transfers: false, rebuild: 'GHL calendar configured with your booking rules' },
    { element: 'Contact-Company-Deal association', transfers: false, rebuild: 'Restructured using GHL contact and opportunity model' },
    { element: 'HubSpot reports and dashboards', transfers: false, rebuild: 'Custom reporting dashboards built in GHL' },
  ];

  const processSteps = [
    { title: 'HubSpot Account Audit and Migration Assessment', description: 'We review your full HubSpot account contacts volume, custom properties, active workflows, pipeline structure, forms, and integrations. You receive a migration scope document with exactly what transfers, what we rebuild, timeline, and fixed price.', tag: 'Free Before any payment' },
    { title: 'Full HubSpot Data Export and Validation', description: 'We export your complete HubSpot database all contacts, custom properties, deal history, pipeline stages, notes, and tags. Data is cleaned, deduplicated, and validated against your source records before any import begins. Field mapping is documented and agreed before the first contact is moved.', tag: 'Week 1' },
    { title: 'GoHighLevel System Build CRM, Pipelines, Custom Fields', description: 'We configure your GHL account from scratch custom fields matching your HubSpot properties, pipeline stages replicating your deal structure, smart lists replacing your HubSpot contact lists, and calendar setup matching your HubSpot meetings configuration. Your HubSpot account remains fully operational during this phase.', tag: 'Week 1–2' },
    { title: 'Automation Reconstruction Workflow Logic Rebuild', description: 'Every HubSpot workflow and sequence is rebuilt natively inside GHL workflow builder. Trigger conditions, action sequences, conditional branches, delay timers, and notification actions are all recreated and tested. Where HubSpot logic model differs from GHL trigger-action model, we design an equivalent that produces the same outcome.', tag: 'Week 2–3' },
    { title: 'End-to-End Testing and Data Import', description: 'All workflows, forms, pipelines, and automations are tested end-to-end in a live GHL environment before any data is imported. Once testing passes, the full contact and deal database is imported and verified against the HubSpot source. Any discrepancies are corrected before you see the system.', tag: 'Week 3–4' },
    { title: 'Team Training, Cutover, and HubSpot Deactivation', description: 'Your team receives a live onboarding session covering everything they need to manage GHL day to day. When training is complete and your team is confident, traffic is switched to GHL and your HubSpot subscription is wound down. We tell you exactly when it is safe to cancel HubSpot typically within one week of going live.', tag: 'Week 4–5' },
  ];

  return (
    <>
      <OrganizationSchema />
      <ServiceSchema 
        name="HubSpot to GoHighLevel Migration Service"
        description="Professional HubSpot to GoHighLevel migration service. We transfer contacts, custom fields, deal pipelines, and deal history from HubSpot, then rebuild your automations, forms, and workflows natively inside GoHighLevel. No data loss. Fixed price. Delivered in 3 to 5 weeks."
        url="https://www.ghlscaleup.com/services/migration/hubspot-to-gohighlevel"
        serviceType={['CRM Migration', 'HubSpot Migration', 'GoHighLevel Configuration', 'Marketing Automation Setup']}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Migration Services', url: 'https://www.ghlscaleup.com/services/migration' },
          { name: 'HubSpot to GoHighLevel Migration', url: 'https://www.ghlscaleup.com/services/migration/hubspot-to-gohighlevel' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf', '.faq-a']} />

      {/* Breadcrumb */}
      <div className="bg-[#F4F7FA] border-b border-[#E8EDF4] py-3">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-[13px] text-[#8A9BB0] flex-wrap">
            <Link href="/" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">Home</Link>
            <span className="text-[#E8EDF4]">›</span>
            <Link href="/services/migration" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">GHL Migration Services</Link>
            <span className="text-[#E8EDF4]">›</span>
            <span>HubSpot to GoHighLevel</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#F8D000] rounded"></div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#F8D000]">HubSpot to GoHighLevel Migration</span>
              </div>
              <h1 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-0.6px] leading-[1.12] mb-4">
                HubSpot to GoHighLevel
                <span className="text-[#F8D000] block">Migration Service</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed mb-8 max-w-[540px] border-l-3 border-[#F8D000] pl-4">
                We migrate your HubSpot contacts, custom properties, deal pipelines, and full deal history into GoHighLevel then rebuild your automations, forms, and workflows natively inside GHL. The result: a fully configured GoHighLevel system that replicates everything you relied on in HubSpot, without data loss and without downtime. Standard migrations complete in 3 to 5 weeks. Fixed price. Free migration assessment to start.
              </p>
              <div className="flex gap-3.5 flex-wrap mb-9">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-xl text-[15px] font-semibold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Book a Free Migration Assessment → <ArrowRight size={16} />
                </Link>
                <Link href="#what-we-migrate" className="bg-transparent text-white px-8 py-3.5 rounded-xl text-[15px] font-medium border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all">
                  See What We Migrate
                </Link>
              </div>
              <div className="flex items-center gap-2 flex-wrap text-[13px] text-white/45">
                <span className="text-[#25C97D]">✦</span> 200+ GHL projects delivered
                <span className="text-white/30">·</span> 6 countries served
                <span className="text-white/30">·</span> Zero data loss guarantee
                <span className="text-white/30">·</span> Fixed price, no hourly billing
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8 mt-2">
              <h3 className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-5">What transfers from HubSpot</h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5"><div className="w-5 h-5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">All contacts and custom properties</strong>Every field, tag, and note exported and imported</div></div>
                <div className="flex gap-2.5"><div className="w-5 h-5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">Deal pipelines and stage history</strong>Full deal history including amounts and close dates</div></div>
                <div className="flex gap-2.5"><div className="w-5 h-5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">Email lists and segments</strong>Contact lists rebuilt as Smart Lists in GHL</div></div>
                <div className="flex gap-2.5"><div className="w-5 h-5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">Automations rebuilt from scratch</strong>HubSpot workflow logic recreated natively in GHL</div></div>
                <div className="flex gap-2.5"><div className="w-5 h-5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">Forms and landing pages</strong>Rebuilt inside GHL funnels, connected to CRM</div></div>
              </div>
              <div className="h-px bg-white/10 my-5"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center"><div className="text-2xl font-extrabold text-[#F8D000]">3-5wks</div><div className="text-[11px] text-white/50">Standard delivery</div></div>
                <div className="text-center"><div className="text-2xl font-extrabold text-[#F8D000]">Free</div><div className="text-[11px] text-white/50">Assessment cost</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Migrate Table */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]" id="what-we-migrate">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Data Migration</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.2] tracking-[-0.4px] mb-3">What Transfers from HubSpot to GoHighLevel and What Needs Rebuilding</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">HubSpot and GoHighLevel store and process data differently. Understanding what moves automatically versus what requires rebuilding is critical before any migration begins.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)] text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#1C2E4A] text-white">
                  <th className="p-4 text-left text-[13px] font-bold border-r-2 border-white/10">HubSpot Element</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#25C97D]">Transfers to GoHighLevel</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#FF8A80]">Needs Rebuilding in GHL</th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((item, index) => (
                  <tr key={index} className="border-b border-[#E8EDF4] last:border-b-0 even:bg-[#F4F7FA]">
                    <td className="p-4 text-[#1A202C] font-semibold border-r border-[#E8EDF4]">{item.element}</td>
                    <td className={`p-4 ${item.transfers ? 'text-[#25C97D] font-semibold' : 'text-[#E53E3E] font-semibold'}`}>
                      {item.transfers ? <Check size={14} className="inline mr-1" /> : <X size={14} className="inline mr-1" />}
                      {item.transfers ? 'Transfers directly' : 'Does not transfer'}
                    </td>
                    <td className="p-4 text-[#D69E2E] font-semibold">{item.rebuild}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-20 bg-[#1C2E4A]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-3.5">Who This Is For</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-white leading-[1.2] tracking-[-0.4px] mb-3">Who Moves from HubSpot to GoHighLevel and Why</h2>
            <p className="text-base text-white/65 leading-relaxed">HubSpot is built for enterprise. GoHighLevel is built for agencies. Most HubSpot users who come to us are paying for features they do not use while missing tools GoHighLevel includes by default.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all"><Building2 size={26} className="text-white mb-3" /><h3 className="text-[15px] font-bold text-white mb-1.5">Marketing Agencies on HubSpot</h3><p className="text-[13px] text-white/55 leading-relaxed">Paying $800 to $1,200 per month for HubSpot. Managing multiple client accounts but locked into a single-portal system. GoHighLevel sub-account model is designed for exactly this.</p></div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all"><Home size={26} className="text-white mb-3" /><h3 className="text-[15px] font-bold text-white mb-1.5">Real Estate Teams</h3><p className="text-[13px] text-white/55 leading-relaxed">HubSpot does not have native SMS, WhatsApp, or AI call handling. Real estate teams need speed-to-lead and missed-call text-back. GoHighLevel has all of this built in.</p></div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all"><GraduationCap size={26} className="text-white mb-3" /><h3 className="text-[15px] font-bold text-white mb-1.5">Coaches and Consultants</h3><p className="text-[13px] text-white/55 leading-relaxed">Using HubSpot for CRM but paying separately for calendar booking, email marketing, and course delivery. GoHighLevel consolidates all of these into one platform at a fraction of the cost.</p></div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all"><Layers size={26} className="text-white mb-3" /><h3 className="text-[15px] font-bold text-white mb-1.5">SaaS Founders</h3><p className="text-[13px] text-white/55 leading-relaxed">Agencies wanting to resell their own branded CRM software. GoHighLevel SaaS mode, which does not exist in HubSpot, lets you white-label the entire platform and charge clients monthly.</p></div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all"><Wrench size={26} className="text-white mb-3" /><h3 className="text-[15px] font-bold text-white mb-1.5">Home Service Businesses</h3><p className="text-[13px] text-white/55 leading-relaxed">HVAC, plumbing, and cleaning companies using HubSpot for basic CRM but needing AI voice agents, automated job booking, and review request sequences that HubSpot does not offer natively.</p></div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all"><TrendingUp size={26} className="text-white mb-3" /><h3 className="text-[15px] font-bold text-white mb-1.5">Agencies Switching to GHL Reselling</h3><p className="text-[13px] text-white/55 leading-relaxed">Digital agencies who want to offer GoHighLevel setup as a core service to their own clients. Moving their internal operations to GHL first before selling it is the logical starting point.</p></div>
          </div>
        </div>
      </section>

      {/* What You Get - Deliverables */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Deliverables</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3.5">What You Get When We Migrate Your HubSpot Account to <span className="text-[#0E9BF0]">GoHighLevel</span></h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3.5">We do not just move data. We rebuild your entire HubSpot operating system inside GoHighLevel configured to match how your team actually works, not how a template assumes you work.</p>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Every migration includes a pre-migration HubSpot audit, full data export and validation, parallel system build, end-to-end testing, and a handover session with your team before your HubSpot account is deactivated.</p>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><span className="text-[15px] text-[#1A202C] leading-relaxed">Zero data loss guarantee all contacts, properties, and deal history verified before cutover</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><span className="text-[15px] text-[#1A202C] leading-relaxed">Both platforms run in parallel no downtime, no missed leads during migration</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><span className="text-[15px] text-[#1A202C] leading-relaxed">Fixed price agreed before we start no hourly billing, no scope creep</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[#25C97D]/20 text-[#25C97D] flex items-center justify-center mt-0.5 flex-shrink-0"><Check size={12} /></div><span className="text-[15px] text-[#1A202C] leading-relaxed">Team training included your team knows how to operate GHL before handover</span></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 flex gap-3 shadow-sm"><Database size={20} className="text-[#0E9BF0] flex-shrink-0 mt-0.5" /><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Full Contact Database Export</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">All contacts, custom fields, tags, notes, and associated deal records exported from HubSpot and validated before import</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 flex gap-3 shadow-sm"><RefreshCw size={20} className="text-[#0E9BF0] flex-shrink-0 mt-0.5" /><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Pipeline Reconstruction</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Deal stages, pipeline structure, and deal history including amounts, close dates, and associated contacts rebuilt in GHL opportunities</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 flex gap-3 shadow-sm"><Zap size={20} className="text-[#0E9BF0] flex-shrink-0 mt-0.5" /><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Automation Rebuilds</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every HubSpot workflow and sequence reconstructed using GHL trigger-action logic field mapping, conditional branches, and delay timers included</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 flex gap-3 shadow-sm"><FormInput size={20} className="text-[#0E9BF0] flex-shrink-0 mt-0.5" /><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Form and Funnel Rebuild</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">All HubSpot forms rebuilt inside GHL funnel builder, connected to your CRM pipelines and workflow triggers</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 flex gap-3 shadow-sm"><Calendar size={20} className="text-[#0E9BF0] flex-shrink-0 mt-0.5" /><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Calendar and Booking Setup</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">GHL calendar configured to match your HubSpot meetings setup availability, round-robin, confirmation emails, and reminder sequences</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 flex gap-3 shadow-sm"><BarChart3 size={20} className="text-[#0E9BF0] flex-shrink-0 mt-0.5" /><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Custom Reporting Dashboard</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">GHL reporting dashboard built to show pipeline value, lead sources, conversion rates, and team performance replacing HubSpot reports</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process + Timeline */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Left Column - Process Steps */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Our Process</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3.5">The HubSpot to <span className="text-[#0E9BF0]">GoHighLevel Migration Process</span> 6 Steps</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Every HubSpot migration follows the same six-step delivery process. Each step is completed and verified before the next begins no shortcuts that create compounding issues at launch.</p>
              <div className="flex flex-col">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative pl-14 pb-9 last:pb-0 border-l-2 border-[#E8EDF4] ml-[27px]">
                    <div className="absolute left-[-23px] top-0 w-11 h-11 rounded-full bg-[#1C2E4A] border-2.5 border-[#F8D000] flex items-center justify-center text-[15px] font-extrabold text-[#F8D000]">{index + 1}</div>
                    <div className="inline-block text-[11px] font-semibold text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-1.5">{step.tag}</div>
                    <h3 className="text-base font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
                    <p className="text-[14px] text-[#4A5568] leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Column - Timeline */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Migration Timeline</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3.5">How Long Does a <span className="text-[#0E9BF0]">HubSpot to GoHighLevel Migration</span> Take?</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Migration timeline depends on your HubSpot account size and the number of active workflows. Here is an honest breakdown by complexity tier.</p>
              <div className="flex flex-col gap-3.5">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#E6F4FF] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-1">Simple</div><div className="text-2xl font-extrabold text-[#1C2E4A]">2-3 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Under 5,000 contacts</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>1 to 2 active pipelines</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Fewer than 10 HubSpot workflows</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>No complex integrations</div></div></div></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#1C2E4A] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-1">Standard</div><div className="text-2xl font-extrabold text-white">3-5 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>5,000 to 20,000 contacts</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>2 to 5 active pipelines</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>10 to 30 HubSpot workflows</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Sequences and deal history migration</div></div></div></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#162235] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-1">Complex</div><div className="text-2xl font-extrabold text-white">5-8 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>20,000+ contacts</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Multiple pipelines, advanced sequences</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>30+ active workflows to rebuild</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Third-party integrations to migrate</div></div></div></div>
              </div>
              <div className="mt-6 p-5 bg-[#E6F4FF] rounded-xl border-l-4 border-[#0E9BF0]"><p className="text-[14px] text-[#1A202C] font-medium leading-relaxed">Not sure which tier you are in? The free migration assessment takes 30 minutes and gives you a specific timeline for your HubSpot account not a range.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#25C97D] bg-[#25C97D]/20 px-3.5 py-1 rounded-full mb-3.5">Proven Results</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.2] tracking-[-0.4px] mb-3">Real GoHighLevel Migration Results from GHL Scale Up</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">These numbers are from real migration projects. Not estimates. Not projections.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center shadow-sm"><div className="text-[34px] font-extrabold text-[#0E9BF0] leading-none mb-1.5">200+</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">GHL Builds and Migrations Delivered</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center shadow-sm"><div className="text-[34px] font-extrabold text-[#0E9BF0] leading-none mb-1.5">0</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Data Loss Incidents Across All Migrations</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center shadow-sm"><div className="text-[34px] font-extrabold text-[#0E9BF0] leading-none mb-1.5">6</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Countries US, UK, UAE, AU, SG, IN</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center shadow-sm"><div className="text-[34px] font-extrabold text-[#0E9BF0] leading-none mb-1.5">70%</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Average Reduction in Manual Work Post-Migration</div></div>
          </div>
          <div className="mt-8 bg-[#F4F7FA] rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2.5">Migration Case Study</div><p className="text-[17px] font-semibold text-[#1C2E4A] leading-relaxed mb-4 italic">"Our team was managing 8 client sub-accounts in HubSpot and paying for features we never used. After moving to GoHighLevel, our manual workload dropped by 70% in the first month. The migration took 3 weeks they ran both systems in parallel so we never missed a lead."</p><p className="text-[13px] text-[#8A9BB0]"> Agency Owner, Performance Marketing Agency, United States</p></div>
            <div className="flex flex-col gap-3.5"><div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">70%</div><div className="text-[13px] text-[#4A5568] leading-tight">Reduction in manual work within 30 days of migration</div></div><div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">3wks</div><div className="text-[13px] text-[#4A5568] leading-tight">Full migration from HubSpot to live GHL system</div></div><div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">0</div><div className="text-[13px] text-[#4A5568] leading-tight">Missed leads during the migration period</div></div></div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Free Migration Assessment</span>
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Ready to Move from <span className="text-[#F8D000]">HubSpot to GoHighLevel?</span></h2>
          <p className="text-base text-white/65 max-w-[560px] mx-auto mb-3 leading-relaxed">Book a free 30-minute migration assessment. We review your HubSpot account, tell you exactly what transfers and what we rebuild, and give you a fixed price before any work begins.</p>
          <p className="text-[13px] text-white/40 mb-8">No commitment required. No automated follow-up sequence. A real conversation within a few hours.</p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact-us" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book a Free Migration Assessment → <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-7 flex-wrap mt-8">
            <span className="text-[14px] text-white/50 flex items-center gap-2"><Mail size={14} /> <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/50 flex items-center gap-2"><Phone size={14} /> <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/50 flex items-center gap-2"><MessageCircle size={14} /> <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp Aryan</a></span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white" id="faq">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">FAQ</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.2] tracking-[-0.4px] mb-3">HubSpot to GoHighLevel Migration Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5568] leading-relaxed max-w-[600px] mx-auto">Every question below is one we are asked regularly by teams migrating from HubSpot. Answers are specific to HubSpot not generic migration FAQ.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Read Our Articles */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Further Reading</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.2] tracking-[-0.4px] mb-3">Read Our Articles on HubSpot to GoHighLevel Migration</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Research-backed guides on migrating from HubSpot, comparing the two platforms, and planning your migration timeline.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/hubspot-to-gohighlevel-migration" className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group"><div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">BOFU Guide</div><h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">How to Migrate from HubSpot to GoHighLevel: A Step-by-Step Guide</h3><p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">A complete technical walkthrough of the HubSpot to GHL migration process what to export, how to map fields, and what to rebuild first.</p><span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the step-by-step guide → <ArrowRight size={12} /></span></Link>
            <Link href="/blog/gohighlevel-vs-hubspot" className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group"><div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Comparison</div><h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">GoHighLevel vs HubSpot for Agencies: The Complete 2026 Comparison</h3><p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">A feature-by-feature comparison of GoHighLevel and HubSpot across CRM, automation, pricing, and agency-specific capabilities.</p><span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the full comparison → <ArrowRight size={12} /></span></Link>
            <Link href="/blog/ghl-migration-timeline" className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group"><div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Planning Guide</div><h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">GHL Migration Timeline Explained: How Long Does It Actually Take?</h3><p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">Honest timelines for migrations of every size from simple 2-week moves to complex 8-week rebuilds with a platform-by-platform breakdown.</p><span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the timeline guide → <ArrowRight size={12} /></span></Link>
          </div>
        </div>
      </section>

      {/* Other Platforms */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.2] tracking-[-0.4px] mb-3">Also Migrating from Another Platform?</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">We migrate from all major CRMs, automation platforms, and funnel builders into GoHighLevel.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            <Link href="/services/migration/clickfunnels-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">ClickFunnels to GoHighLevel →</Link>
            <Link href="/services/migration/activecampaign-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">ActiveCampaign to GoHighLevel →</Link>
            <Link href="/services/migration/kajabi-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Kajabi to GoHighLevel →</Link>
            <Link href="/services/migration/zoho-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Zoho to GoHighLevel →</Link>
            <Link href="/services/migration/salesforce-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Salesforce to GoHighLevel →</Link>
            <Link href="/services/migration/mailchimp-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Mailchimp to GoHighLevel →</Link>
          </div>
          <p className="text-center mt-5 text-[14px] text-[#8A9BB0]">See all supported platforms on our <Link href="/services/migration" className="text-[#0E9BF0] font-semibold hover:underline">GHL Migration Services hub page</Link>.</p>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Start Your Migration</span>
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Book Your Free <span className="text-[#F8D000]">HubSpot to GoHighLevel</span> Migration Assessment</h2>
          <p className="text-base text-white/65 max-w-[560px] mx-auto mb-3 leading-relaxed">30 minutes. We review your HubSpot account, confirm what transfers and what we rebuild, and give you a fixed-price scope document. No obligation to proceed.</p>
          <p className="text-[13px] text-white/40 mb-8">Aryan personally reviews every inquiry and responds within a few hours via phone or email, not an automated sequence.</p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact-us" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book a Free Migration Assessment → <ArrowRight size={16} />
            </Link>
            <Link href="/services/migration" className="bg-transparent text-white px-10 py-4 rounded-xl text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              View All Migration Services
            </Link>
          </div>
          <div className="flex items-center justify-center gap-7 flex-wrap mt-8">
            <span className="text-[14px] text-white/50 flex items-center gap-2"><Mail size={14} /> <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/50 flex items-center gap-2"><Phone size={14} /> <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/50 flex items-center gap-2"><MessageCircle size={14} /> <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp: +91 98932 70210</a></span>
          </div>
        </div>
      </div>
    </>
  );
}