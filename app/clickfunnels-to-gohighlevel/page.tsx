// app/services/migration/clickfunnels-to-gohighlevel/page.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Check,
  X,
  Building2,
  Rocket,
  DollarSign,
  BarChart3,
  FileText,
  Users,
  Zap,
  CreditCard,
  GraduationCap,
  TrendingUp,
  Database,
  FolderKanban,
  Smartphone,
  Globe,
  Target,
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

// FAQ data for the page
const faqs = [
  {
    q: 'Can I automatically import my ClickFunnels funnels into GoHighLevel?',
    a: 'GoHighLevel has a built-in ClickFunnels importer, but it is not an automatic bulk transfer. You enter the live published URL of each ClickFunnels page one step at a time, and GHL copies the visual layout into its funnel builder. This saves significant design rebuild time. However, it only imports the page visuals — it does not migrate forms, automations, order bumps, upsell logic, email sequences, or any backend functionality. Those all require manual rebuilding inside GoHighLevel. GHL Scale Up handles the full import and all rebuilds.',
  },
  {
    q: 'What breaks when you migrate from ClickFunnels to GoHighLevel?',
    a: 'The following do not transfer and must be rebuilt in GoHighLevel: all email automations and follow-up sequences, all forms and survey steps inside funnels, ClickFunnels order bump and one-click upsell logic, course and membership structures (CF 2.0), A/B split test configurations, your ClickFunnels affiliate program, all Stripe and payment connections, Meta Pixel and Google Tag tracking, and domain DNS routing. Your contacts and funnel page designs are the two main elements that carry across with the least friction. Everything else is a targeted rebuild — which is exactly what GHL Scale Up specialises in.',
  },
  {
    q: 'Will I lose my ClickFunnels contacts when I migrate to GoHighLevel?',
    a: 'No. ClickFunnels allows you to export your full contact list as a CSV file including name, email, phone, and any standard fields. You then import that CSV into GoHighLevel\'s contact database. Tags, purchase history, and automation state from ClickFunnels do not transfer — these need to be recreated using GHL tagging and segmentation system after import. We document your existing CF tag structure before migration so it can be recreated accurately inside GHL.',
  },
  {
    q: 'Does GoHighLevel have order bumps and one-click upsells like ClickFunnels?',
    a: 'Yes. GoHighLevel supports order bumps, one-click upsells, and downsell sequences in its funnel checkout flow. ClickFunnels implementation of these features is more refined — it has over a decade of conversion testing behind it. GoHighLevel checkout handles standard e-commerce funnel mechanics correctly and is more than sufficient for most service businesses and digital product sellers. We rebuild your complete upsell flow inside GHL as a standard part of every migration.',
  },
  {
    q: 'Will my ad tracking and conversion data break during the ClickFunnels to GHL migration?',
    a: 'Attribution is the single biggest risk in this migration. When you change your domain DNS to point to GHL, your Meta Pixel, Google Tag, UTM parameters, and conversion event configurations need to be rebuilt inside GHL before the switch happens. If this is not done in the right order, you will be making ad spend decisions on corrupted data for weeks without knowing it. GHL Scale Up rebuilds all tracking configurations inside GHL before any DNS change and uses a staged traffic transition — switching low-risk traffic sources first — so your attribution data remains intact throughout.',
  },
  {
    q: 'How long does a ClickFunnels to GoHighLevel migration take?',
    a: 'A standard ClickFunnels to GoHighLevel migration takes 3 to 5 weeks. A simple migration with fewer than 5 funnels, basic email follow-ups, and under 5,000 contacts takes 2 to 3 weeks. A complex migration with 15+ funnels, courses, order bumps, upsell sequences, and an affiliate program takes 5 to 7 weeks. We give you a specific timeline after reviewing your ClickFunnels account on the free assessment call — not a range based on guesswork.',
  },
  {
    q: 'How much does ClickFunnels to GoHighLevel migration cost?',
    a: 'ClickFunnels to GoHighLevel migration with GHL Scale Up starts from $1,500 for a standard migration covering funnel imports, contact migration, core automation rebuilds, Stripe reconnection, tracking setup, and team training. Complex migrations with courses, affiliate programs, advanced upsell sequences, and large contact databases are priced based on scope after a free assessment call. All projects are fixed price — no hourly billing, no open-ended scope.',
  },
  {
    q: 'Should I cancel ClickFunnels before or after moving to GoHighLevel?',
    a: 'Keep your ClickFunnels subscription active until your entire GoHighLevel system is built, tested, and live with traffic flowing through it. Cancelling CF before migration is complete means you lose access to your funnel pages, contact exports, and automation documentation — all of which you still need during the rebuild. Most GHL Scale Up clients cancel ClickFunnels within one to two weeks of their GHL system going fully live. We tell you the exact date it is safe to cancel.',
  },
  {
    q: 'What happens to my ClickFunnels affiliate program when I migrate?',
    a: 'ClickFunnels 2.0 has a built-in affiliate management system. GoHighLevel also has affiliate management, but your existing CF affiliate relationships, commission history, and affiliate tracking links do not transfer automatically. Your affiliates need to be re-onboarded to your new GHL affiliate program with new unique tracking links. We handle the full affiliate program setup inside GHL as part of complex migration projects. Raise this on the assessment call so we include it in your scope.',
  },
  {
    q: 'Does GoHighLevel replace everything ClickFunnels does?',
    a: 'GoHighLevel replaces the core ClickFunnels functionality — funnel builder, landing pages, order forms, order bumps, one-click upsells, checkout flows, email marketing, course and membership delivery, and contact management. GHL goes further with two-way SMS, AI voice agents, multi-channel automation, CRM pipelines, reputation management, and white-label SaaS mode. The one area where ClickFunnels still has an edge is the polish and conversion-testing depth of its e-commerce checkout templates and A/B testing tools. For agencies and service businesses, GoHighLevel is a complete replacement and adds significant capabilities CF never had.',
  },
];

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2.5 max-w-[820px] mx-auto">
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

export default function ClickFunnelsToGHLMigrationPage() {
  useFaqSchema(faqs);

  const transferData = [
    { element: 'Contacts and leads', transfers: true, breaks: 'Tags and automation state do not transfer', how: 'Import CSV, rebuild tag structure in GHL' },
    { element: 'Funnel page designs', transfers: true, breaks: 'Custom CSS sometimes needs adjustment', how: 'Import each step, QA design fidelity' },
    { element: 'Order forms and checkouts', transfers: 'Partial — layout imports', breaks: 'Payment connections break', how: 'Rebuild checkout in GHL, reconnect Stripe' },
    { element: 'Products and pricing', transfers: true, breaks: 'Product variants need manual mapping', how: 'Import products, configure GHL order page' },
    { element: 'Email follow-up sequences', transfers: false, breaks: 'All email logic stays in CF until cutover', how: 'Rebuild in GHL workflow builder with equivalent logic' },
    { element: 'Order bumps', transfers: false, breaks: 'Revenue impact if not rebuilt correctly', how: 'Rebuild order bump in GHL checkout — tested pre-launch' },
    { element: 'One-click upsells and downsells', transfers: false, breaks: 'Upsell flow broken until rebuilt', how: 'Recreate full upsell sequence in GHL funnel steps' },
    { element: 'Forms and survey steps', transfers: false, breaks: 'Lead capture broken on imported pages', how: 'Rebuild forms in GHL, connect to pipeline' },
    { element: 'Courses and membership areas (CF 2.0)', transfers: false, breaks: 'Course content and access rules not moved', how: 'Recreate course structure in GHL Memberships, migrate content' },
    { element: 'CF affiliate program', transfers: false, breaks: 'Existing affiliate links and history stays in CF', how: 'Rebuild affiliate program in GHL, re-onboard affiliates with new links' },
    { element: 'Meta Pixel and Google Tag', transfers: false, breaks: 'Attribution breaks at DNS cutover', how: 'Rebuild all tracking inside GHL before DNS switch' },
    { element: 'Domain and DNS', transfers: false, breaks: 'Both platforms share domain during parallel run', how: 'Update DNS to GHL after full system is tested and live' },
    { element: 'A/B split test data', transfers: false, breaks: 'Historical test data stays in CF', how: 'Document winning variants before migration, rebuild in GHL' },
    { element: 'Stripe payment integration', transfers: false, breaks: 'No transactions until Stripe reconnected to GHL', how: 'Connect Stripe to GHL sub-account level, test transactions' },
  ];

  return (
    <>
      <OrganizationSchema />
      <ServiceSchema
        name="ClickFunnels to GoHighLevel Migration Service"
        description="Professional ClickFunnels to GoHighLevel migration. We import funnels using GHL built-in importer, export and import contacts, rebuild automations natively in GHL workflows, recreate courses in GHL memberships, rebuild order bumps and upsells, reconnect Stripe and email delivery, and deliver a fully tested GoHighLevel system. No data loss. Fixed price. 3 to 5 weeks delivery."
        url="https://www.ghlscaleup.com/services/migration/clickfunnels-to-gohighlevel"
        serviceType={['CRM Migration', 'ClickFunnels Migration', 'GoHighLevel Setup', 'Funnel Migration', 'Marketing Automation Setup']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Migration Services', url: 'https://www.ghlscaleup.com/services/migration' },
          { name: 'ClickFunnels to GoHighLevel Migration', url: 'https://www.ghlscaleup.com/services/migration/clickfunnels-to-gohighlevel' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf-block', '.faq-a']} />

      {/* Breadcrumb */}
      <nav className="bg-[#F4F7FA] border-b border-[#E8EDF4] py-3" aria-label="Breadcrumb">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="flex items-center gap-2 text-[13px] text-[#8A9BB0] flex-wrap">
            <Link href="/" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">Home</Link>
            <span className="text-[#E8EDF4]">›</span>
            <Link href="/services/migration" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">GHL Migration Services</Link>
            <span className="text-[#E8EDF4]">›</span>
            <span>ClickFunnels to GoHighLevel</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-[72px] md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1fr_360px] gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-[18px]">
                <div className="w-7 h-0.5 bg-[#F8D000] rounded"></div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#F8D000]">ClickFunnels to GoHighLevel Migration</span>
              </div>
              <h1 className="text-[clamp(28px,3.8vw,44px)] font-extrabold tracking-[-0.5px] leading-[1.13] mb-4">
                ClickFunnels to GoHighLevel
                <span className="text-[#F8D000] block">Migration Service</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed mb-7 max-w-[540px] pl-4 border-l-[3px] border-[#F8D000]">
                We migrate your ClickFunnels contacts, import your funnel pages using GHL built-in importer, and rebuild your automations, order bumps, upsells, courses, and email sequences natively inside GoHighLevel. The result is a fully operational GHL system that replaces ClickFunnels and every other tool you are currently paying for separately. No data loss. Fixed price. Free migration assessment to start.
              </p>
              <div className="flex gap-3.5 flex-wrap mb-8">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-[14px] rounded-xl text-[15px] font-semibold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                  Book a Free Migration Assessment → <ArrowRight size={16} />
                </Link>
                <Link href="#what-we-migrate" className="bg-transparent text-white px-8 py-[14px] rounded-xl text-[15px] font-medium border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all">
                  See What We Migrate
                </Link>
              </div>
              <p className="text-[13px] text-white/45 flex items-center gap-2 flex-wrap">
                <span className="text-[#25C97D]">✦</span> 200+ GHL projects delivered
                <span className="text-white/30">·</span> 6 countries served
                <span className="text-white/30">·</span> Zero data loss guarantee
                <span className="text-white/30">·</span> Fixed price, no hourly billing
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-7">
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-5">What you are currently paying vs what GHL costs</div>
              <div className="flex flex-col gap-2.5">
                <div className="bg-white/5 rounded-lg px-4 py-3 flex justify-between items-center"><span className="text-[12px] text-white/65">ClickFunnels Pro</span><span className="text-[14px] font-bold text-white">$297/mo</span></div>
                <div className="bg-white/5 rounded-lg px-4 py-3 flex justify-between items-center"><span className="text-[12px] text-white/65">ActiveCampaign or Mailchimp</span><span className="text-[14px] font-bold text-white">$79/mo</span></div>
                <div className="bg-white/5 rounded-lg px-4 py-3 flex justify-between items-center"><span className="text-[12px] text-white/65">Calendly Teams</span><span className="text-[14px] font-bold text-white">$20/mo</span></div>
                <div className="bg-white/5 rounded-lg px-4 py-3 flex justify-between items-center"><span className="text-[12px] text-white/65">Twilio SMS</span><span className="text-[14px] font-bold text-white">$30/mo</span></div>
                <div className="bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] rounded-lg px-4 py-3 flex justify-between items-center"><span className="text-[12px] text-[#F8D000]">Your current stack total</span><span className="text-[14px] font-bold text-[#F8D000]">~$426/mo</span></div>
                <div className="bg-[rgba(37,201,125,0.08)] border border-[rgba(37,201,125,0.2)] rounded-lg px-4 py-3 flex justify-between items-center"><span className="text-[12px] text-[#25C97D]">GoHighLevel Unlimited (replaces all)</span><span className="text-[14px] font-bold text-[#25C97D]">$297/mo</span></div>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <div className="text-[13px] text-white/55 text-center">
                <strong className="text-[#25C97D] block text-[15px] font-bold mb-1">GHL Scale Up migrates everything.</strong>
                One platform. One bill. Starts from $1,500 migration fee.
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
            <p className="text-base text-[#1A202C] leading-relaxed font-medium">GHL Scale Up handles your complete ClickFunnels to GoHighLevel migration — from importing funnel pages using GHL native URL importer, to exporting and re-importing contacts, to rebuilding every automation workflow, email sequence, order bump, upsell flow, and course structure inside GoHighLevel. We run both platforms in parallel during migration so you have zero downtime. Standard migrations deliver in 3 to 5 weeks at a fixed price.</p>
          </div>

          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Migration Reality</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">What Happens to Your ClickFunnels Account When You Move to GoHighLevel</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Understanding what migrates automatically, what breaks, and what needs rebuilding prevents the surprises most people encounter when they try to do this themselves.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(28,46,74,0.07)]">
              <div className="p-[18px_20px] bg-[rgba(37,201,125,0.07)] border-l-4 border-[#25C97D]">
                <CheckCircle size={24} className="mb-2 text-[#25C97D]" />
                <h3 className="text-[15px] font-bold text-[#25C97D] mb-2">What Migrates</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>Contacts exported via CSV and imported into GHL</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>Funnel page designs imported one step at a time using GHL CF URL importer</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>Products exported as CSV and recreated in GHL</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>Domain reconnected to GHL after DNS update</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(28,46,74,0.07)]">
              <div className="p-[18px_20px] bg-[rgba(229,62,62,0.06)] border-l-4 border-[#E53E3E]">
                <XCircle size={24} className="mb-2 text-[#E53E3E]" />
                <h3 className="text-[15px] font-bold text-[#E53E3E] mb-2">What Does Not Transfer</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] mt-1.5"></div>Email automations and follow-up sequences — fully rebuilt in GHL workflows</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] mt-1.5"></div>Forms and survey steps inside funnels — recreated in GHL form builder</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] mt-1.5"></div>Order bumps and one-click upsell logic — rebuilt in GHL checkout flow</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] mt-1.5"></div>Courses and membership structures (CF 2.0) — recreated in GHL memberships</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] mt-1.5"></div>Affiliate program configuration — rebuilt in GHL affiliate manager</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] mt-1.5"></div>A/B split test data — not transferable</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(28,46,74,0.07)]">
              <div className="p-[18px_20px] bg-[rgba(214,158,46,0.07)] border-l-4 border-[#D69E2E]">
                <AlertTriangle size={24} className="mb-2 text-[#D69E2E]" />
                <h3 className="text-[15px] font-bold text-[#D69E2E] mb-2">Biggest Risk: Attribution</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>Meta Pixel conversion events break if not rebuilt before DNS cutover</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>Google Tag Manager needs reconfiguring inside GHL pages</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>UTM parameters must be verified through each new GHL funnel step</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>Conversion event naming must match your existing ad account structure</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>We rebuild all tracking before any DNS switch — this is non-negotiable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Table */}
      <section className="py-20 bg-[#F4F7FA]" id="what-we-migrate">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Data Transfer</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">ClickFunnels to GoHighLevel — Complete Data Transfer Reference</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Every element of your ClickFunnels account mapped to its GoHighLevel equivalent, confirmed against GHL official migration documentation and verified in real projects in 2026.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)] text-sm min-w-[800px]">
              <thead>
                <tr className="bg-[#1C2E4A] text-white">
                  <th className="p-4 text-left text-[13px] font-bold">ClickFunnels Element</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#25C97D]">Status in GHL</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#FCA5A5]">What Breaks</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#F8D000]">How We Handle It</th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((item, index) => (
                  <tr key={index} className="border-b border-[#E8EDF4] last:border-b-0 even:bg-[#F4F7FA]">
                    <td className="p-4 text-[#1A202C] font-semibold border-r border-[#E8EDF4]">{item.element}</td>
                    <td className="p-4 text-[#25C97D] font-semibold">{typeof item.transfers === 'string' ? item.transfers : (item.transfers ? '✓ ' + (typeof item.transfers === 'boolean' ? 'Transfers' : '') : '')}</td>
                    <td className="p-4 text-[#E53E3E] font-semibold">{item.breaks}</td>
                    <td className="p-4 text-[#D69E2E] font-semibold">{item.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-[#1C2E4A]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-3.5">Who This Is For</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-white leading-[1.22] tracking-[-0.4px] mb-3">Who Moves from ClickFunnels to GoHighLevel — and Why</h2>
            <p className="text-base text-white/65 leading-relaxed">ClickFunnels is the best funnel builder for solopreneurs. GoHighLevel is the best operating system for agencies and service businesses. The switch happens when your business outgrows what CF was built for.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Most Common</div>
              <Building2 size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Marketing Agencies on ClickFunnels</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">Paying for ClickFunnels plus ActiveCampaign, Calendly, and Twilio separately. Managing multiple client funnels from one account. GoHighLevel sub-account structure, two-way SMS, and white-label mode are built for exactly this scenario.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Scaling Fast</div>
              <Rocket size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Coaches and Course Creators</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">Running courses on ClickFunnels 2.0 but needing CRM pipelines, SMS follow-up, appointment booking, and reputation management. GoHighLevel handles the full coaching business from lead to booked call to course delivery in one platform.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Cost Reduction</div>
              <DollarSign size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Businesses Consolidating Tools</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">Currently paying for ClickFunnels plus separate email marketing, SMS, CRM, and calendar tools. GoHighLevel at $297 per month replaces the entire stack. Most businesses save $100 to $300 per month on the switch alone, without counting the automation benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Deliverables</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">Everything GHL Scale Up Delivers in Your <span className="text-[#0E9BF0]">ClickFunnels to GHL Migration</span></h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3.5">We do not import a few pages and hand the account back to you half-built. Every component of your ClickFunnels setup is either migrated or rebuilt inside GoHighLevel and tested end-to-end before you see it.</p>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Migration starts with a full audit of your ClickFunnels account — every funnel, automation, product, course, and integration documented before we move a single contact. Nothing is missed because everything is mapped first.</p>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Both platforms run simultaneously during migration — no downtime, no missed leads</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">All tracking (Meta Pixel, Google Tag, UTMs) rebuilt before any DNS cutover</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Fixed price agreed before work starts — scope document signed first</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Team training included so your people operate GHL on day one</span></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📑</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">CF Account Audit</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Full documentation of every funnel, automation, course, product, integration, and email sequence before migration begins</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🎯</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Funnel Page Imports</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every ClickFunnels funnel step imported using GHL URL importer, mobile QA'd, and custom CSS corrected</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">👥</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Contact Database Migration</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Full contact CSV export from CF, field mapping, tag structure rebuilt, imported and validated inside GHL</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">⚡</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Automation Rebuilds</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every CF email sequence and follow-up flow rebuilt natively in GHL workflows with equivalent timing, conditions, and branching logic</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">💳</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Order Bumps and Upsells</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Complete order bump and one-click upsell flow rebuilt inside GHL checkout, tested with real transactions before launch</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🎓</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Course and Membership Rebuild</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">ClickFunnels 2.0 course structures recreated inside GHL Memberships — modules, lessons, access rules, and drip content scheduling</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📊</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Tracking and Attribution Setup</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Meta Pixel, Google Tag, and conversion events rebuilt inside GHL before DNS cutover — staged traffic switch used to protect attribution</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📖</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Team Training and Handover</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Live training session for your team on managing GHL pipelines, inbox, automations, and reporting. Written documentation included.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps + Timeline */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Left Column - Process Steps */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Our Process</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">The <span className="text-[#0E9BF0]">ClickFunnels to GoHighLevel Migration</span> Process — 6 Steps</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">The same six-step process used across every migration project. Each step is completed and verified before the next begins. No half-built systems go live.</p>
              <div className="flex flex-col">
                {[
                  { num: 1, title: 'ClickFunnels Account Audit and Migration Scoping', desc: 'We audit your entire CF account — every funnel, automation, product, course, integration, and email sequence. You receive a scope document detailing exactly what migrates, what we rebuild, the timeline, and the fixed price. No surprises after this call.', tag: 'Free — Before any payment' },
                  { num: 2, title: 'Contact Export, GHL Setup, and Funnel Imports', desc: 'We export your complete CF contact database and all funnel page URLs. Your GHL account is configured from scratch — custom fields, pipeline stages, and core settings. Every funnel page is imported using GHL URL importer, QAd for design fidelity, and mobile-checked. Your ClickFunnels account remains fully operational throughout.', tag: 'Week 1' },
                  { num: 3, title: 'Automation Rebuilds, Order Flow, and Tracking Setup', desc: 'Every CF email sequence and follow-up automation is rebuilt natively in GHL workflow builder. Order bumps and upsell flows are configured in GHL checkout. Meta Pixel, Google Tag, and all conversion events are set up inside GHL pages before any DNS change — protecting your ad attribution throughout the migration.', tag: 'Week 1 to 2' },
                  { num: 4, title: 'Course Rebuild, Contact Import, and Integration Setup', desc: 'If you have ClickFunnels 2.0 courses, we recreate the full course structure inside GHL Memberships — modules, lessons, drip scheduling, and member access. Contacts are imported and validated. Stripe is reconnected. Twilio and email sending are configured. Affiliate program rebuilt if applicable.', tag: 'Week 2 to 3' },
                  { num: 5, title: 'End-to-End Testing — Every Flow Verified', desc: 'Every funnel is tested with real form submissions, real Stripe test transactions, real email sends, and real automation triggers. Order bumps and upsells tested through checkout. Conversion events verified in Meta and Google dashboards. Nothing goes live without passing this phase.', tag: 'Week 3 to 4' },
                  { num: 6, title: 'Staged Traffic Switch, Team Training, and CF Cancellation', desc: 'Traffic is switched in stages — low-volume sources first — while monitoring attribution data. DNS is updated to GHL once live traffic is confirmed working. Team training session delivered. When your team is confident and all traffic is running through GHL cleanly, we tell you when it is safe to cancel ClickFunnels.', tag: 'Week 4 to 5' },
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

            {/* Right Column - Timeline & Pricing */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Timeline</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">How Long Does a <span className="text-[#0E9BF0]">ClickFunnels to GoHighLevel Migration</span> Take?</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Timeline depends on how many funnels, automations, courses, and integrations your CF account contains. Honest ranges by complexity tier:</p>
              <div className="flex flex-col gap-3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#E6F4FF] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-1">Simple</div><div className="text-2xl font-extrabold text-[#1C2E4A]">2-3 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Fewer than 5 active funnels</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Basic email follow-up sequences only</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Under 5,000 contacts</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>No courses or affiliate program</div></div></div></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#1C2E4A] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-1">Standard</div><div className="text-2xl font-extrabold text-white">3-5 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>5 to 15 funnels with order bumps and upsells</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Multiple automation sequences</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>5,000 to 30,000 contacts</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Courses on CF 2.0</div></div></div></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#162235] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-1">Complex</div><div className="text-2xl font-extrabold text-white">5-7 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>15+ funnels with advanced upsell sequences</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Multiple courses with drip scheduling</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Active affiliate program to rebuild</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>30,000+ contacts and complex automation logic</div></div></div></div>
              </div>

              <div className="mt-7">
                <div className="bg-white border border-[#E8EDF4] rounded-2xl p-8 shadow-[0_4px_24px_rgba(28,46,74,0.07)]">
                  <div className="text-[12px] font-bold tracking-[1px] uppercase text-[#8A9BB0] mb-2">ClickFunnels to GHL Migration</div>
                  <div className="text-[52px] font-extrabold text-[#1C2E4A] leading-none mb-1.5">$1,500 <span className="text-[18px] font-normal text-[#8A9BB0]">USD</span></div>
                  <div className="text-[13px] text-[#8A9BB0] mb-5">Starting price · One-time fixed fee · Delivered in 3 to 5 weeks</div>
                  <div className="h-px bg-[#E8EDF4] mb-5"></div>
                  <div className="flex flex-col gap-2.5 mb-6">
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Full CF account audit and migration scope</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>All funnel pages imported and QA'd</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Contact database migrated with field mapping</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Automations rebuilt in GHL workflows</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Stripe, email, tracking all reconnected</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Team training and handover documentation</div>
                  </div>
                  <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] w-full justify-center inline-flex items-center gap-2 py-4 px-8 rounded-xl text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                    Book Free Migration Assessment → <ArrowRight size={16} />
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
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">What Our Clients Achieve After Moving from ClickFunnels to GoHighLevel</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Every number below is from a real migration project. No estimates.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">200+</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">GHL Builds and Migrations Delivered</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">0</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Migrations with Attribution Data Loss</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">6</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Countries — US, UK, UAE, AU, SG, IN</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">~$150</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Average Monthly Savings After Tool Consolidation</div></div>
          </div>

          <div className="bg-[#F4F7FA] rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2.5">Migration Case Study — Marketing Agency</div>
              <p className="text-[17px] font-semibold text-[#1C2E4A] leading-relaxed mb-4 italic">"We were paying for ClickFunnels, ActiveCampaign, Calendly, and Twilio separately — over $400 a month for tools that did not even talk to each other properly. GHL Scale Up moved everything into GoHighLevel in 4 weeks. Our cost dropped to $297. Our automations went from broken Zapier chains to a single GHL workflow that fires every time without fail."</p>
              <p className="text-[13px] text-[#8A9BB0]">— Marketing Agency Owner, United States</p>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">70%</div><div className="text-[13px] text-[#4A5568] leading-tight">Reduction in manual follow-up work after GHL automation setup</div></div>
              <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">4wks</div><div className="text-[13px] text-[#4A5568] leading-tight">Full migration from ClickFunnels to live GoHighLevel system</div></div>
              <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">$150</div><div className="text-[13px] text-[#4A5568] leading-tight">Monthly saving after replacing the full tool stack with GHL</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Free Migration Assessment</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Ready to Move from <span className="text-[#F8D000]">ClickFunnels to GoHighLevel?</span></h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">Book a free 30-minute migration assessment. We review your ClickFunnels account, confirm exactly what migrates and what we rebuild, and give you a fixed price before any work begins.</p>
          <p className="text-[13px] text-white/40 mb-8">No commitment required. Aryan personally responds within a few hours.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
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
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">ClickFunnels to GoHighLevel Migration — Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5568] leading-relaxed max-w-[620px] mx-auto">Every question below comes from real ClickFunnels users who went through this migration. Answers are specific to ClickFunnels — not generic migration content.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Read Our Articles */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Further Reading</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Read Our Articles on ClickFunnels to GoHighLevel Migration</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Research-backed guides on the technical migration process, what breaks, and what the timeline looks like.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">BOFU Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">ClickFunnels to GoHighLevel Migration: What Breaks and How We Fix It</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">A detailed technical breakdown of every ClickFunnels element and how it maps to GoHighLevel — including what the importer handles and what requires full rebuilds.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the migration breakdown → <ArrowRight size={12} /></span>
            </Link>
            <Link href="/blog/ghl-migration-timeline" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Planning Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">GHL Migration Timeline Explained: How Long Does It Actually Take?</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">Honest timelines for migrations of every complexity tier — from simple 2-week moves to 7-week complex rebuilds — with a platform breakdown.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the timeline breakdown → <ArrowRight size={12} /></span>
            </Link>
            <Link href="/blog/ghl-migration-mistakes" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Common Mistakes</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">Common GHL Migration Mistakes Agencies Make and How to Avoid Them</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">The six most damaging migration mistakes — from cancelling the source platform too early to skipping attribution setup before DNS cutover.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the mistakes guide → <ArrowRight size={12} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Also Migrating from Another Platform?</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">We migrate from all major CRMs, funnel builders, and automation platforms into GoHighLevel.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            <Link href="/services/migration/hubspot-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">HubSpot to GoHighLevel →</Link>
            <Link href="/services/migration/activecampaign-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">ActiveCampaign to GoHighLevel →</Link>
            <Link href="/services/migration/kajabi-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Kajabi to GoHighLevel →</Link>
            <Link href="/services/migration/zoho-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Zoho to GoHighLevel →</Link>
            <Link href="/services/migration/salesforce-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Salesforce to GoHighLevel →</Link>
            <Link href="/services/migration/mailchimp-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Mailchimp to GoHighLevel →</Link>
          </div>
          <p className="text-center mt-5 text-[14px] text-[#8A9BB0]">See all supported platforms on our <Link href="/services/migration" className="text-[#0E9BF0] font-semibold hover:underline">GHL Migration Services hub page</Link>.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Start Your Migration</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Book Your Free <span className="text-[#F8D000]">ClickFunnels to GoHighLevel</span> Migration Assessment</h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">30 minutes. We review your ClickFunnels account, confirm what migrates and what we rebuild, and give you a fixed price scope document. No obligation to proceed.</p>
          <p className="text-[13px] text-white/40 mb-8">Aryan personally reviews every inquiry and responds within a few hours — not an automated sequence.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
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