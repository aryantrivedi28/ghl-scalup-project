// app/services/migration/kajabi-to-gohighlevel/components/KajabiMigrationClient.tsx
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
  CheckCircle,
  AlertTriangle,
  Building2,
  GraduationCap,
  DollarSign,
} from 'lucide-react';

// Import existing FAQ schema hook
import { useFaqSchema } from '@/hooks/useFaqSchema';

// FAQ data for the page
const faqs = [
  {
    q: 'Can Kajabi courses be imported directly into GoHighLevel?',
    a: 'Yes. GoHighLevel has a native Kajabi course importer found at Memberships > Courses > Products > Create Product > Import from Kajabi. It authenticates with your Kajabi account and imports published course content including modules, lessons, videos, and downloadable files. However, the importer only handles published lessons draft content does not transfer. Quizzes and assessments import as empty lessons and must be manually recreated inside GHL. Custom CSS themes, community features, and Kajabi Pages are not imported and must be rebuilt separately.',
  },
  {
    q: 'What happens to my Kajabi members when I migrate to GoHighLevel?',
    a: 'Kajabi member records including contact details, course access levels, purchase history, and subscription status are exported from Kajabi and imported into GoHighLevel. Existing member access is maintained throughout the migration because Kajabi stays fully live until GHL is built, tested, and confirmed. No member loses access during the migration period. Once GHL is live, members receive new login credentials for the GHL membership portal.',
  },
  {
    q: 'What happens to active Kajabi subscriptions when I migrate?',
    a: 'If your Kajabi subscriptions run through your own Stripe account, existing renewals continue billing without interruption you keep the same Stripe account connected in GoHighLevel, and the subscription continues. If you used Kajabi Payments (Kajabi built-in payment processor rather than your own Stripe), the migration is more complex and some subscribers may need to re-authorise their payment method. GHL Scale Up reviews your payment setup on the assessment call and advises on the right approach before any migration step begins.',
  },
  {
    q: 'Do I need to set up 301 redirects when migrating from Kajabi to GoHighLevel?',
    a: 'Yes and this is one of the most important technical steps that most Kajabi migrations skip. Your Kajabi course pages, sales pages, and checkout pages have accumulated backlinks and organic search traffic over time. When you move to GoHighLevel, the URLs change. Without 301 redirects from every old Kajabi URL to its new GHL equivalent, you lose all of that organic traffic permanently. GHL Scale Up maps every high-traffic Kajabi URL before migration and publishes 301 redirects on day one of go-live.',
  },
  {
    q: 'How long does a Kajabi to GoHighLevel migration take?',
    a: 'A standard Kajabi to GoHighLevel migration takes 3 to 5 weeks. A simple migration with one to three courses and basic email sequences takes 3 to 4 weeks. A complex migration with multiple courses, communities, Kajabi Payments subscriptions, and advanced automation takes 6 to 8 weeks. Kajabi migrations typically take slightly longer than other platform migrations because of the course content rebuild, quiz recreation, member access configuration, and redirect mapping that are unique to course-based businesses.',
  },
  {
    q: 'How much does Kajabi to GoHighLevel migration cost?',
    a: 'Kajabi to GoHighLevel migration with GHL Scale Up starts from $100 for a standard migration covering course imports, contact and member transfer, email automation rebuilds, Stripe configuration, and team training. Complex migrations with multiple courses, communities, Kajabi Payments, and large member databases are priced based on scope after a free assessment. All projects are fixed price no hourly billing.',
  },
  {
    q: 'Does GoHighLevel have community features like Kajabi Communities?',
    a: 'GoHighLevel has basic community functionality in its membership module, but it is less developed than Kajabi Communities as of 2026. Kajabi Communities have more refined discussion threads, member profiles, and community engagement tools. If your Kajabi Community is a core part of your business model, we flag this on the assessment call and help you evaluate whether GHL community tools meet your needs or whether a hybrid approach makes more sense.',
  },
  {
    q: 'What is the difference between Kajabi and GoHighLevel for course creators?',
    a: 'Kajabi is purpose-built for course creators its course delivery, community, and email tools are refined and polished. GoHighLevel is built for marketing agencies but includes course and membership functionality. GHL adds significant capabilities Kajabi does not have: native SMS and WhatsApp automation, AI voice agents, two-way CRM pipelines, appointment booking, reputation management, and white-label SaaS mode. For course creators who also need a CRM, SMS follow-up, and client management, GHL replaces Kajabi plus all the additional tools they are currently stacking on top of it.',
  },
  {
    q: 'Will my Kajabi quizzes and assessments transfer to GoHighLevel?',
    a: 'Partially. When Kajabi courses are imported using GHL native importer, quizzes and assessments import but only as empty lessons the quiz title appears but the questions, answer options, and passing grade settings are not carried over. Every quiz must be manually recreated inside GHL assessment builder after the import. GHL Scale Up includes quiz recreation as part of every Kajabi migration we document all quiz content from Kajabi before import and rebuild each assessment inside GHL.',
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

export default function KajabiMigrationClient() {
  useFaqSchema(faqs);

  const transferData = [
    { element: 'Courses modules and lessons', status: '✓ Via native Kajabi importer', breaks: 'Only published lessons transfer', how: 'Ensure all content is published before import; drafts documented separately' },
    { element: 'Course videos and files', status: '✓ Transferred with course import', breaks: 'Large courses may need additional time', how: 'Import run during off-hours to minimise impact on active learners' },
    { element: 'Quizzes and assessments', status: '⚠ Imports as empty lesson only', breaks: 'All quiz questions and answer options missing', how: 'All quizzes documented before migration, manually rebuilt in GHL assessment builder' },
    { element: 'Drip content schedules', status: '⚠ Structure transfers, timing does not', breaks: 'Drip schedule must be reconfigured in GHL', how: 'Drip settings documented and reconfigured in GHL membership settings post-import' },
    { element: 'Contacts and member records', status: '✓ Via CSV export and import', breaks: 'Member access levels must be reconfigured', how: 'Members imported with tags, course access reconfigured in GHL memberships' },
    { element: 'Purchase and subscription history', status: '✓ Exported from Kajabi and imported', breaks: 'Subscription status must be mapped to GHL tags', how: 'Purchase history imported, subscription status mapped to GHL access tags' },
    { element: 'Active Stripe subscriptions', status: '✓ Continue billing if own Stripe used', breaks: 'Kajabi Payments users need phased approach', how: 'Stripe connected to GHL; subscription triggers configured to maintain access' },
    { element: 'Email automations and sequences', status: '✗ Does not transfer', breaks: 'All must be manually rebuilt in GHL workflows', how: 'Every Kajabi sequence documented, rebuilt natively in GHL workflow builder' },
    { element: 'Sales funnels and pages', status: '✗ Does not transfer', breaks: 'All pages must be rebuilt inside GHL', how: 'Rebuilt in GHL funnel builder, 301 redirects published for all old Kajabi URLs' },
    { element: 'Checkout flows, order bumps, upsells', status: '✗ Does not transfer', breaks: 'Revenue impact if not rebuilt correctly', how: 'Rebuilt in GHL checkout order bumps and post-purchase upsells tested before go-live' },
    { element: 'Coupons and discount codes', status: '✗ Does not transfer', breaks: 'Active coupons stop working at cutover', how: 'All active coupons exported, recreated in GHL with same codes and limits' },
    { element: 'Kajabi Communities', status: '⚠ GHL has basic community only', breaks: 'Kajabi Communities more feature-rich', how: 'Assessed on call GHL community configured where sufficient; flagged if gap is significant' },
    { element: 'Blog posts and Kajabi Pages', status: '✗ Does not transfer', breaks: 'Organic traffic lost without 301 redirects', how: 'All high-traffic URLs documented, 301 redirects published on go-live day' },
    { element: 'Domain and DNS', status: '✗ Reconnected manually', breaks: 'Kajabi domain DNS must point to GHL', how: 'DNS updated after full GHL system tested and confirmed live' },
  ];

  const importSteps = [
    { num: 1, title: 'Go to Memberships in GHL', desc: 'Memberships > Courses > Products > Create Product > Import from Kajabi' },
    { num: 2, title: 'Authenticate Kajabi Account', desc: 'GHL generates a contact address. You add it as a contact in Kajabi and grant course access.' },
    { num: 3, title: 'Select Published Courses', desc: 'Only published courses transfer. Drafts, unpublished lessons, and custom CSS themes are excluded.' },
    { num: 4, title: 'Import Runs Automatically', desc: 'Modules, lessons, videos, and files copy across. Quizzes import as empty shells and need manual recreation.' },
  ];

  const processSteps = [
    { num: 1, title: 'Kajabi Account Audit and Payment Path Review', desc: 'We review your Kajabi account course structures, quiz and assessment count, member volume, email sequence complexity, and most importantly, which payment processor you use (own Stripe or Kajabi Payments). You receive a scope document with exact deliverables, timeline, and fixed price. The payment path determines the migration approach before anything else is decided.', tag: 'Free Before any payment' },
    { num: 2, title: 'Quiz Documentation, URL Mapping, and Snapshot', desc: 'Before anything moves, we document every quiz and assessment in full, capture every live Kajabi URL that receives organic traffic, screenshot all checkout settings and prices, and export contacts, purchases, coupons, and tags. This snapshot means nothing is lost if anything unexpected happens during the import process.', tag: 'Week 1 Before any import' },
    { num: 3, title: 'GHL Setup and Course Import', desc: 'GHL sub-account configured from scratch. All courses imported using GHL native Kajabi importer modules, lessons, and files verified after import. Quizzes rebuilt manually in GHL assessment builder. Drip schedules reconfigured. Member access levels configured. Kajabi stays fully live throughout.', tag: 'Week 1 to 2' },
    { num: 4, title: 'Funnels, Checkout, Automations, and Stripe', desc: 'Sales funnels and landing pages rebuilt in GHL. Checkout flows recreated with order bumps and upsells tested via real Stripe test transactions. All email automations rebuilt natively in GHL workflows. Stripe connected and payment triggers configured to maintain member access on renewal. Coupons and discount codes recreated with matching codes and limits.', tag: 'Week 2 to 3' },
    { num: 5, title: 'Member Import, End-to-End Testing, and Redirect Map', desc: 'All contacts and member records imported into GHL with course access reconfigured. Every enrolment flow tested end-to-end checkout, confirmation email, course access, and drip schedule. 301 redirect map finalised covering every high-traffic Kajabi URL. DNS change prepared but not yet published.', tag: 'Week 3 to 4' },
    { num: 6, title: 'Go-Live: Domain Switch, Redirects, Training, and Kajabi Wind-Down', desc: 'Domain DNS pointed to GHL. 301 redirects published simultaneously top 50 redirects verified within 24 hours of go-live. Team training delivered before cutover. Member login credentials updated. Kajabi subscription wound down only after all systems confirmed live and member access verified in GHL. We tell you the exact date it is safe to cancel Kajabi.', tag: 'Week 4 to 5' },
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
            <span>Kajabi to GoHighLevel</span>
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
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#F8D000]">Kajabi to GoHighLevel Migration</span>
              </div>
              <h1 className="text-[clamp(28px,3.8vw,44px)] font-extrabold tracking-[-0.5px] leading-[1.13] mb-4">
                Kajabi to GoHighLevel
                <span className="text-[#F8D000] block">Migration Service</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed mb-7 max-w-[540px] pl-4 border-l-[3px] border-[#F8D000]">
                We migrate your Kajabi courses, members, contacts, automations, and funnels into GoHighLevel using GHL native Kajabi importer plus rebuild every quiz, email sequence, and checkout flow manually. We protect active member access and Stripe subscriptions throughout. 301 redirects published on day one of go-live. Fixed price. Free migration assessment to start.
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
                <span className="text-white/30">·</span> Zero member access disruption
                <span className="text-white/30">·</span> 6 countries served
                <span className="text-white/30">·</span> Fixed price, no hourly billing
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-7">
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-4">Kajabi vs your new GHL stack cost</div>
              <div className="flex flex-col gap-2 mb-4">
                <div className="bg-white/5 rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-white/65">Kajabi Growth plan</span><span className="text-[13px] font-bold text-white">$99/mo</span></div>
                <div className="bg-white/5 rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-white/65">Separate CRM (HubSpot/AC)</span><span className="text-[13px] font-bold text-white">$79/mo</span></div>
                <div className="bg-white/5 rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-white/65">SMS platform (Twilio/separate)</span><span className="text-[13px] font-bold text-white">$30/mo</span></div>
                <div className="bg-white/5 rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-white/65">Calendar / booking tool</span><span className="text-[13px] font-bold text-white">$20/mo</span></div>
                <div className="bg-[rgba(229,62,62,0.1)] border border-[rgba(229,62,62,0.2)] rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-[#FCA5A5]">Current stack total</span><span className="text-[13px] font-bold text-[#FCA5A5]">~$228/mo</span></div>
                <div className="bg-[rgba(37,201,125,0.1)] border border-[rgba(37,201,125,0.2)] rounded-lg px-3.5 py-2.5 flex justify-between items-center"><span className="text-[12px] text-[#25C97D]">GoHighLevel Unlimited (replaces all)</span><span className="text-[13px] font-bold text-[#25C97D]">$297/mo</span></div>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <div className="text-[12px] text-white/50 text-center">
                <strong className="text-[#25C97D] block text-[14px] mb-1">Same courses. Better automation. One platform.</strong>
                Migration from $100. Assessment is free.
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
            <p className="text-base text-[#1A202C] leading-relaxed font-medium">GHL Scale Up migrates course creators, coaches, and knowledge businesses from Kajabi into GoHighLevel using GHL native Kajabi course importer for course content, and manually rebuilding every quiz, email sequence, checkout flow, and automation in GHL. We protect active member access and Stripe subscriptions throughout the migration. Kajabi stays fully live until GHL is built and confirmed. 301 redirects published on go-live day to protect organic traffic. Standard migrations deliver in 3 to 5 weeks at a fixed price.</p>
          </div>

          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">How the Kajabi Import Works</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">GoHighLevel Has a Native Kajabi Course Importer Here Is What It Actually Does</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">GoHighLevel is the only major platform with a built-in Kajabi importer. This saves significant time on course migration but understanding what it handles versus what still needs manual work prevents the surprises most Kajabi migrators run into.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {importSteps.map((step) => (
              <div key={step.num} className="bg-white border border-[#E8EDF4] rounded-xl p-5 text-center relative">
                <div className="w-8 h-8 rounded-full bg-[#1C2E4A] text-[#F8D000] text-[13px] font-extrabold flex items-center justify-center mx-auto mb-2.5">{step.num}</div>
                <h3 className="text-[13px] font-bold text-[#1C2E4A] mb-1 leading-tight">{step.title}</h3>
                <p className="text-[12px] text-[#4A5568] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FFFBEB] border-l-4 border-[#D69E2E] rounded-r-xl p-[18px_22px]">
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#D69E2E] mb-1.5">What the importer does NOT handle</div>
            <p className="text-[15px] text-[#744210] leading-relaxed font-medium">The Kajabi importer covers course structure only. Everything else contacts and member records, email automations, sales funnels, checkout flows, order bumps, upsells, quizzes, community features, Kajabi Pages, and 301 redirects must be migrated and rebuilt separately. GHL Scale Up handles all of it.</p>
          </div>
        </div>
      </section>

      {/* Transfer Table */}
      <section className="py-20 bg-[#F4F7FA]" id="what-transfers">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Data Migration</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">What Transfers from Kajabi to GoHighLevel and What We Rebuild</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Every Kajabi element mapped against GoHighLevel capabilities confirmed against GHL official documentation and real Kajabi migration projects in 2026.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)] text-sm min-w-[800px]">
              <thead>
                <tr className="bg-[#1C2E4A] text-white">
                  <th className="p-3.5 text-left text-[13px] font-bold">Kajabi Element</th>
                  <th className="p-3.5 text-left text-[13px] font-bold text-[#25C97D]">Status in GHL</th>
                  <th className="p-3.5 text-left text-[13px] font-bold text-[#FCA5A5]">What Breaks or Needs Work</th>
                  <th className="p-3.5 text-left text-[13px] font-bold text-[#F8D000]">How We Handle It</th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#E8EDF4] last:border-b-0 even:bg-[#F4F7FA]">
                    <td className="p-3.5 text-[#1A202C] font-semibold border-r border-[#E8EDF4] min-w-[170px]">{item.element}</td>
                    <td className={`p-3.5 font-semibold ${item.status.includes('✓') ? 'text-[#25C97D]' : item.status.includes('⚠') ? 'text-[#D69E2E]' : 'text-[#E53E3E]'}`}>{item.status.includes('✓') ? <Check size={14} className="inline mr-1" /> : item.status.includes('⚠') ? '' : <X size={14} className="inline mr-1" />}{item.status}</td>
                    <td className="p-3.5 text-[#4A5568]">{item.breaks}</td>
                    <td className="p-3.5 text-[#D69E2E] font-semibold">{item.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment Paths Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.18)] px-3.5 py-1 rounded-full mb-3.5">Critical Before You Migrate</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">The Kajabi Payment Situation Two Very Different Migration Paths</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Which payment processor your Kajabi account uses determines how complex your subscription migration is. This is the first question we ask on every Kajabi assessment call.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-[#E8EDF4] rounded-2xl overflow-hidden">
              <div className="p-[18px_22px] bg-[rgba(37,201,125,0.08)] border-l-4 border-[#25C97D]">
                <CheckCircle size={22} className="mb-2 text-[#25C97D]" />
                <h3 className="text-[15px] font-bold text-[#25C97D] mb-1.5">You Use Your Own Stripe Account in Kajabi</h3>
                <p className="text-[13px] text-[#4A5568] leading-relaxed">Existing subscriptions continue billing without interruption. No subscriber re-authorisation needed.</p>
              </div>
              <div className="p-4 bg-white">
                <div className="flex flex-col gap-1.5">
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>Keep the same Stripe account connected in GoHighLevel</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>Active subscriptions continue billing automatically</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>Configure GHL "Payment received" triggers to sync member access</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>No subscriber communication required for payment changes</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#25C97D] mt-1.5"></div>Cleanest migration path recommended setup before switching</div>
                </div>
              </div>
            </div>
            <div className="border border-[#E8EDF4] rounded-2xl overflow-hidden">
              <div className="p-[18px_22px] bg-[rgba(214,158,46,0.08)] border-l-4 border-[#D69E2E]">
                <AlertTriangle size={22} className="mb-2 text-[#D69E2E]" />
                <h3 className="text-[15px] font-bold text-[#D69E2E] mb-1.5">You Use Kajabi Payments (Kajabi Native Processor)</h3>
                <p className="text-[13px] text-[#4A5568] leading-relaxed">More complex. Kajabi Payments is tied to Kajabi infrastructure. Subscriptions cannot simply move to GHL.</p>
              </div>
              <div className="p-4 bg-white">
                <div className="flex flex-col gap-1.5">
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>Active subscribers may need to re-authorise payment method in GHL</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>Do not migrate if currently mid-launch wait until launch completes</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>Plan a phased migration with subscriber communication strategy</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>Kajabi Payments subscription history must be exported before cancelling</div>
                  <div className="flex gap-1.5 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] mt-1.5"></div>GHL Scale Up manages subscriber communication and re-authorisation flow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-[#1C2E4A]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000]/20 px-3.5 py-1 rounded-full mb-3.5">Who This Is For</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-white leading-[1.22] tracking-[-0.4px] mb-3">Who Moves from Kajabi to GoHighLevel and Why</h2>
            <p className="text-base text-white/65 leading-relaxed">Kajabi is excellent for pure course creators. The moment you need a real CRM, SMS automation, or client management on top of course delivery, you have outgrown what Kajabi was built for.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Most Common</div>
              <GraduationCap size={24} className="text-[#F8D000] mb-2.5" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Coaches Adding CRM and SMS Follow-Up</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">Coaches who built their course business on Kajabi but now need CRM pipelines to track leads, two-way SMS for follow-up, appointment booking for discovery calls, and AI-powered lead response. Kajabi has none of these natively. GoHighLevel replaces Kajabi plus every additional tool the coach is paying for.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Consolidating Tools</div>
              <DollarSign size={24} className="text-[#F8D000] mb-2.5" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Course Creators Paying for Too Many Platforms</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">Running Kajabi for courses, HubSpot or ActiveCampaign for CRM, a separate calendar tool, and possibly a funnel builder. GoHighLevel at $297 per month replaces all of them. Most course creators save $100 to $300 per month from tool consolidation alone.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Agency Owners</div>
              <Building2 size={24} className="text-[#F8D000] mb-2.5" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Agency Owners Selling Courses and Services</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">Agency owners using Kajabi for their training products while managing client CRM work on a completely separate system. GoHighLevel unifies both under one roof courses in GHL Memberships, client pipelines in GHL CRM, team managed through GHL sub-accounts.</p>
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
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">Everything We Deliver in Your <span className="text-[#0E9BF0]">Kajabi to GoHighLevel Migration</span></h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3.5">Every Kajabi migration includes the full build not just the course import. Quizzes, automations, checkouts, redirects, and member access are all handled end-to-end before Kajabi is wound down.</p>
              <div className="flex flex-col gap-2.5 mt-4">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Kajabi stays fully live until GHL is confirmed no member access disruption</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">All quizzes documented before import and manually rebuilt in GHL</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">301 redirects published on go-live day organic traffic protected</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Stripe subscription continuity handled before any platform change</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Fixed price agreed before work starts no scope creep</span></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📚</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Course Import via GHL Importer</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">All published courses imported using GHL native Kajabi importer modules, lessons, videos, and downloadable files</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📝</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Quiz and Assessment Rebuild</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every Kajabi quiz documented in full before migration, manually recreated in GHL assessment builder with passing grades</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">👥</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Contact and Member Transfer</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Full member export from Kajabi contacts, purchase history, course access levels, and subscription status imported into GHL</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">💳</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Stripe Subscription Setup</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Stripe connected to GHL with payment triggers configured to maintain member access on renewal Kajabi Payments phased migration managed</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">⚡</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Email Automation Rebuilds</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every Kajabi email sequence documented and rebuilt natively in GHL workflows enrolment sequences, drip emails, and broadcast templates</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🎯</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Funnel and Checkout Rebuild</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Sales pages, checkout flows, order bumps, upsells, and coupon codes rebuilt inside GHL tested with real transactions before go-live</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🔀</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">301 Redirect Map Published</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every high-traffic Kajabi URL mapped to its GHL equivalent and 301 redirects published on go-live day organic SEO traffic protected</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🎓</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Team Training and Handover</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Live training on managing GHL memberships, pipeline, inbox, and automations. Written handover documentation for your team.</span></div></div>
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
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">The <span className="text-[#0E9BF0]">Kajabi to GoHighLevel Migration</span> Process 6 Steps</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">The Kajabi migration has three steps that are unique to this platform: the payment path assessment, the quiz documentation step, and the 301 redirect map. All three must happen before any content moves.</p>
              <div className="flex flex-col">
                {processSteps.map((step) => (
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
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">How Long Does a <span className="text-[#0E9BF0]">Kajabi to GoHighLevel Migration</span> Take?</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Kajabi migrations typically take slightly longer than other platform migrations because of the quiz rebuild, member access configuration, and redirect mapping that are unique to course-based businesses.</p>
              <div className="flex flex-col gap-3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#E6F4FF] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-1">Simple</div><div className="text-2xl font-extrabold text-[#1C2E4A]">3-4 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>1 to 3 courses with basic quizzes</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Under 1,000 members</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Basic email sequences only</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Own Stripe account in use</div></div></div></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#1C2E4A] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-1">Standard</div><div className="text-2xl font-extrabold text-white">4-6 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>3 to 8 courses with multiple quizzes</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>1,000 to 5,000 members</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Multiple automation sequences</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Active community to configure in GHL</div></div></div></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm"><div className="bg-[#162235] p-5"><div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-1">Complex</div><div className="text-2xl font-extrabold text-white">6-8 <span className="text-[13px] font-medium">weeks</span></div></div><div className="p-5 border border-t-0 border-[#E8EDF4] rounded-b-2xl"><div className="flex flex-col gap-2"><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>8+ courses, advanced quiz structures</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>5,000+ members, Kajabi Payments in use</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Subscriber re-authorisation required</div><div className="flex gap-2 text-[13px] text-[#4A5568]"><div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] mt-1.5"></div>Complex affiliate or partner program</div></div></div></div>
              </div>

              <div className="mt-7">
                <div className="bg-white border border-[#E8EDF4] rounded-2xl p-8 shadow-[0_4px_24px_rgba(28,46,74,0.07)]">
                  <div className="text-[12px] font-bold tracking-[1px] uppercase text-[#8A9BB0] mb-2">Kajabi to GHL Migration</div>
                  <div className="text-[50px] font-extrabold text-[#1C2E4A] leading-none mb-1.5">$100 <span className="text-[17px] font-normal text-[#8A9BB0]">USD</span></div>
                  <div className="text-[13px] text-[#8A9BB0] mb-5">Starting price · Fixed fee · Delivered in 3 to 5 weeks</div>
                  <div className="h-px bg-[#E8EDF4] mb-5"></div>
                  <div className="flex flex-col gap-2.5 mb-6">
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Full Kajabi audit, quiz documentation, and URL snapshot</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Course import using GHL native Kajabi importer</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>All quizzes manually rebuilt in GHL assessment builder</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Member transfer, Stripe setup, and access configuration</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>301 redirects published on go-live day</div>
                    <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>All automations, funnels, and checkouts rebuilt in GHL</div>
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
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Kajabi to GoHighLevel Migration Real Client Results</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">200+</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">GHL Builds and Migrations Delivered</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">0</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Member Access Disruptions During Migration</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">6</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Countries US, UK, UAE, AU, SG, IN</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">Day 1</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">301 Redirects Live Organic Traffic Protected</div></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center shadow-sm border border-[#E8EDF4]">
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2.5">Migration Case Study Online Course Creator</div>
              <p className="text-[17px] font-semibold text-[#1C2E4A] leading-relaxed mb-4 italic">"I had 4 courses, 2,200 members, and 14 email sequences in Kajabi. I was terrified of breaking member access or losing the organic traffic my sales pages had built up. GHL Scale Up documented everything before touching anything. The redirects were live on day one. Not a single member lost access. And I cut my monthly software spend by over $200 because GHL replaced three tools I was running alongside Kajabi."</p>
              <p className="text-[13px] text-[#8A9BB0]"> Online Course Creator, United States</p>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="bg-[#F4F7FA] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">4</div><div className="text-[13px] text-[#4A5568] leading-tight">Kajabi courses imported and quizzes manually rebuilt in GHL</div></div>
              <div className="bg-[#F4F7FA] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">2,200</div><div className="text-[13px] text-[#4A5568] leading-tight">Members transferred with zero access disruption</div></div>
              <div className="bg-[#F4F7FA] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] whitespace-nowrap">$200+</div><div className="text-[13px] text-[#4A5568] leading-tight">Monthly saving from consolidating tools into GoHighLevel</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Free Migration Assessment</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Ready to Move from <span className="text-[#F8D000]">Kajabi to GoHighLevel?</span></h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">Book a free 30-minute migration assessment. We review your Kajabi account, confirm your payment path, and give you a fixed price scope document before any work begins.</p>
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
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Kajabi to GoHighLevel Migration Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5568] leading-relaxed max-w-[620px] mx-auto">Every question below is specific to Kajabi migrations. Answers are based on GHL documented Kajabi importer behaviour and real Kajabi migration projects in 2026.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Read Our Articles */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Further Reading</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Read Our Articles on Kajabi to GoHighLevel Migration</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/kajabi-to-gohighlevel-migration" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">BOFU Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">Kajabi to GoHighLevel Migration: What Course Creators Need to Know</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">The complete Kajabi to GHL migration guide course import, quiz rebuild, member transfer, redirect mapping, and the Kajabi Payments decision explained step by step.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the Kajabi migration guide → <ArrowRight size={12} /></span>
            </Link>
            <Link href="/blog/ghl-migration-timeline" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Planning Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">GHL Migration Timeline Explained: How Long Does It Actually Take?</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">Honest timelines by platform and complexity including why Kajabi migrations typically take a week longer than other platforms and what drives that difference.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the migration timeline guide → <ArrowRight size={12} /></span>
            </Link>
            <Link href="/blog/ghl-migration-mistakes" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Common Mistakes</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">Common GHL Migration Mistakes Agencies Make and How to Avoid Them</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">The six most damaging migration mistakes including cancelling Kajabi before redirects are live, which destroys organic traffic that took years to build.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the migration mistakes guide → <ArrowRight size={12} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Also Migrating from Another Platform?</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">We migrate from all major CRMs, course platforms, and funnel builders into GoHighLevel.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            <Link href="/hubspot-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">HubSpot to GoHighLevel →</Link>
            <Link href="/clickfunnels-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">ClickFunnels to GoHighLevel →</Link>
            <Link href="/activecampaign-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] inline-flex items-center gap-1.5 hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">ActiveCampaign to GoHighLevel →</Link>
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
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Book Your Free <span className="text-[#F8D000]">Kajabi to GoHighLevel</span> Migration Assessment</h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">30 minutes. We review your Kajabi account, confirm your payment path, and give you a fixed price scope document. No obligation to proceed.</p>
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