// app/pipedrive-to-gohighlevel/page.tsx
import Link from 'next/link';
import {
  ArrowRight, CheckCircle2, ChevronRight, Database, GitBranch, FileText,
  Workflow, Users, Building2, Upload, RefreshCw, GraduationCap, Shield,
  Clock, DollarSign, Layers, Target, Briefcase, Globe, Zap, BarChart3,
  MessageSquare, Calendar, Bot, Link as LinkIcon, Star, Award, TrendingUp,
  Repeat, UserPlus, Compass, Settings, Mail, Phone,
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CaseStudies from '@/components/ghlscalup/CaseStudies';
import Testimonials from '@/components/ghlscalup/Testimonials';
import { getCaseStudies } from '@/lib/caseStudiesData';
import { getAllTestimonialsForHomepage } from '@/lib/sanity';

export const metadata = {
  title: 'Pipedrive to GoHighLevel Migration Service | GHL Scale Up',
  description:
    'Migrate Pipedrive deals, contacts, and pipelines to GoHighLevel with no data loss. Fixed-price migration, free assessment, 3-5 week delivery.',
  keywords:
    'Pipedrive to GoHighLevel, Pipedrive to GoHighLevel migration, migrate Pipedrive to GoHighLevel, Pipedrive GoHighLevel migration service, Pipedrive CRM migration, GoHighLevel migration service, Pipedrive data migration',
  alternates: {
    canonical: '/pipedrive-to-gohighlevel',
  },
  openGraph: {
    title: 'Pipedrive to GoHighLevel Migration Service | GHL Scale Up',
    description:
      'Migrate Pipedrive deals, contacts, and pipelines to GoHighLevel with no data loss. Fixed-price migration, free assessment, 3-5 week delivery.',
    url: 'https://www.ghlscaleup.com/pipedrive-to-gohighlevel',
    siteName: 'GHL Scale Up',
    type: 'website',
  },
};

export default async function PipedriveToGoHighLevelPage() {
  const caseStudies = getCaseStudies();

  let testimonials = [];
  try {
    testimonials = await getAllTestimonialsForHomepage();
  } catch (error) {
    console.error('Failed to load testimonials:', error);
  }

  // ============================================
  // DATA
  // ============================================

  const heroChecklist = [
    'Contacts, organizations, and custom fields',
    'Deals, pipelines, and stage history',
    'Activities, tasks, and SmartDocs templates',
    'Automations rebuilt natively in Workflows',
    'Team training and written handover',
  ];

  const costComparison = {
    pipedrive: {
      title: 'Current Pipedrive Stack (5 users)',
      amount: '~$345',
      lines: [
        { label: 'Pipedrive Growth (5 seats)', value: '$245' },
        { label: 'LeadBooster add-on', value: '$33' },
        { label: 'Campaigns (email) add-on', value: '$13' },
        { label: 'Separate SMS/texting tool', value: '~$54' },
      ],
    },
    ghl: {
      title: 'GoHighLevel Unlimited',
      amount: '$297',
      lines: [
        { label: 'Unlimited team members', value: 'Included' },
        { label: 'Built-in email + SMS + calling', value: 'Included' },
        { label: 'Calendar, funnels, AI tools', value: 'Included' },
        { label: 'Keeps costing the same as you grow', value: 'Flat' },
      ],
    },
  };

  const dataModelCards = [
    {
      title: 'How Pipedrive structures a deal',
      variant: 'pipedrive',
      points: [
        'One Deal can link to one Person and one Organization',
        'Custom fields are stored as 40-character hex keys',
        'Pipelines and stages live only inside Pipedrive',
      ],
    },
    {
      title: 'How GoHighLevel structures an opportunity',
      variant: 'ghl',
      points: [
        'One Opportunity sits under exactly one Contact',
        'A Contact can only belong to one Company (API field: businessId)',
        'Pipelines and Stages must exist before any deal import runs',
      ],
    },
  ];

  const mismatchNotes = [
    {
      tag: 'Decision needed',
      text: 'Every deal linked to both a person and an organization needs a hierarchy call: does the Contact or the Company own the Opportunity in GoHighLevel? We make this decision per deal type during the audit, not during import.',
    },
    {
      tag: 'Naming trap',
      text: 'GoHighLevel\'s interface calls it "Company," but the API uses "Business" and businessId. We document this early so field mapping doesn\'t break silently.',
    },
  ];

  const transferRows = [
    { element: 'Persons (contacts)', status: 'Transfers', breaks: 'Org fan-out can create duplicate rows on export', handling: 'CSV export, full field mapping, dedup before import' },
    { element: 'Organizations', status: 'Partial', breaks: 'No dedicated import path; GHL allows one company per contact', handling: 'Hierarchy decided per deal type, consolidated into GHL\'s company model' },
    { element: 'Deals', status: 'Partial', breaks: 'Export carries stage and value, but matching pipelines don\'t exist yet', handling: 'Pipelines rebuilt first, then deals imported and mapped to stage' },
    { element: 'Pipelines & stages', status: 'Not transferred', breaks: 'No automatic recreation in GHL', handling: 'Rebuilt manually in Opportunities > Pipelines before any deal import' },
    { element: 'Activities (calls, meetings, tasks)', status: 'Not transferred', breaks: 'No bulk import path in GHL', handling: 'Rebuilt manually or migrated at the API level, linked to the right contact and opportunity' },
    { element: 'Notes', status: 'Partial', breaks: 'Standard CSV import caps one note per contact at 5,000 characters', handling: 'Multi-note histories migrated at the API level to avoid truncation' },
    { element: 'Files & attachments', status: 'Not via CSV', breaks: 'Attachments can\'t move through the standard importer', handling: 'Extracted and re-uploaded to Contacts via the API' },
    { element: 'Custom fields', status: 'Partial', breaks: 'Pipedrive stores fields as 40-character hex keys', handling: 'Full mapping table built and signed off before import' },
    { element: 'Products', status: 'No equivalent', breaks: 'GHL has no native product catalog object', handling: 'Mapped to custom fields or Custom Objects depending on volume' },
    { element: 'Leads Inbox', status: 'Not exportable', breaks: 'Can\'t be exported or converted via the API', handling: 'Converted to Deals inside Pipedrive first, or migrated case-by-case' },
    { element: 'SmartDocs templates', status: 'Rebuilt', breaks: 'No direct import into GHL Documents', handling: 'Templates rebuilt in GHL\'s Documents editor with e-signature and tracking' },
    { element: 'Automations', status: 'Not transferred', breaks: 'No working logic carries over', handling: 'Rebuilt natively in GHL Workflows using equivalent triggers and actions' },
  ];

  const audiences = [
    { title: 'Sales Teams That Outgrew a Deals-Only Tool', common: true, description: 'Pipedrive tracks pipeline well but has no native SMS, AI voice, or marketing automation. Teams that need to follow up leads by text or email without bolting on separate tools move the whole pipeline into GoHighLevel instead.' },
    { title: 'Agencies Reselling CRM to Clients', common: false, description: 'Pipedrive has no white-label mode or sub-account structure. Agencies that want to resell a branded CRM to clients and keep software revenue move to GHL\'s SaaS mode instead of managing separate Pipedrive logins per client.' },
    { title: 'Service Businesses Needing Booking and AI', common: false, description: 'Pipedrive has no native calendar, booking, or AI receptionist. Home service and real estate teams that need missed-call text-back and appointment booking built into the same system as the pipeline move to GoHighLevel.' },
    { title: 'Teams Consolidating Point Tools', common: false, description: 'LeadBooster, Campaigns, and a separate texting app each add a line item to the Pipedrive bill. Teams tired of stitching add-ons together consolidate into GoHighLevel\'s single flat-rate platform.' },
  ];

  const deliverables = [
    { title: 'Full Pipedrive Account Audit', description: 'Contacts, organizations, deals, pipelines, custom fields, and active automations documented before scoping.' },
    { title: 'Contact & Organization Migration', description: 'Export, dedup, and field mapping, with the person/organization hierarchy resolved per deal type.' },
    { title: 'Pipeline & Deal Reconstruction', description: 'Pipelines and stages rebuilt in GHL first, then every deal imported and mapped to its matching stage.' },
    { title: 'Activity & Task Rebuild', description: 'Calls, meetings, and tasks recreated or migrated at the API level, linked to the right contact and opportunity.' },
    { title: 'Custom Field Mapping', description: 'Every Pipedrive hex-keyed field mapped to a named GHL field, signed off before import.' },
    { title: 'Document Template Rebuild', description: 'SmartDocs rebuilt in GHL\'s Documents editor with e-signature and open/view/signature tracking.' },
    { title: 'Automation Rebuilds', description: 'Workflow logic recreated natively in GHL Workflows, not approximated with a generic template.' },
    { title: 'Team Training & Handover', description: 'Live training session plus written documentation your team can reference after go-live.' },
  ];

  const processSteps = [
    { when: 'Free, before payment', title: 'Account audit & data-model assessment', description: 'We review your Pipedrive account, decide the person/organization hierarchy for each deal type, and hand you a scope document with a fixed price and timeline.' },
    { when: 'Week 1', title: 'Full export, dedup & field mapping', description: 'Contacts, organizations, deals, activities, and notes exported and cleaned. Custom field mapping table built and signed off.' },
    { when: 'Weeks 1-2', title: 'GHL system build', description: 'Pipelines and stages recreated, custom fields created, calendar and booking configured. Pipedrive stays live throughout.' },
    { when: 'Weeks 2-3', title: 'Deal import & document rebuild', description: 'Deals imported and mapped to the correct stage. SmartDocs rebuilt as GHL Documents with e-signature enabled.' },
    { when: 'Weeks 3-4', title: 'Automation rebuild & testing', description: 'Workflows rebuilt with equivalent triggers and actions, then tested end to end with deal simulations and real email/SMS sends.' },
    { when: 'Weeks 4-5', title: 'Training, cutover & wind-down', description: 'Team training, traffic cutover, and Pipedrive wind-down once your team confirms no leads were missed, typically about a week after go-live.' },
  ];

  const timelineTiers = [
    { duration: '2-3 weeks', title: 'Simple', description: 'Under 5,000 contacts, 1-2 pipelines, no active Leads Inbox, minimal custom fields.', standard: false },
    { duration: '3-5 weeks', title: 'Standard', description: '5,000-20,000 contacts, 2-5 pipelines, multiple organizations per contact, SmartDocs in active use.', standard: true },
    { duration: '5-8 weeks', title: 'Complex', description: '20,000+ contacts, active Leads Inbox, heavy custom field or product catalog use, multiple integrations.', standard: false },
  ];

  const results = [
    { number: '200+', label: 'GHL projects delivered' },
    { number: '50+', label: 'clients served' },
    { number: '6', label: 'countries served' },
    { number: '5+', label: 'years of GHL expertise' },
  ];

  const faqs = [
    { question: 'Does GoHighLevel import Pipedrive deals automatically?', answer: 'No. Deals export with their stage, value, and associated contact, but GoHighLevel doesn\'t auto-create matching pipelines. We rebuild pipelines and stages first, then import and map each deal to the correct stage.' },
    { question: 'What happens to Pipedrive organizations when I migrate?', answer: 'GoHighLevel allows one company per contact, while Pipedrive deals can link to both a person and an organization at once. We make a hierarchy decision for each deal type before import so the structure holds up instead of breaking.' },
    { question: 'Can Pipedrive automations be migrated to GoHighLevel?', answer: 'No, not as working logic. They\'re rebuilt manually in GHL Workflows using equivalent triggers, such as stage changes or new deal creation, and equivalent actions like sending email or SMS.' },
    { question: 'Will I lose my Pipedrive notes and files?', answer: 'Not with proper handling, but the standard CSV importer caps notes at one per contact at 5,000 characters and can\'t move file attachments. Multi-note histories and attachments are migrated at the API level to avoid truncation.' },
    { question: 'What happens to Pipedrive\'s Leads Inbox?', answer: 'Leads Inbox items can\'t be exported or converted via the API. They\'re converted to Deals inside Pipedrive first, or migrated case-by-case.' },
    { question: 'How long does a Pipedrive to GoHighLevel migration take?', answer: 'Simple migrations take 2 to 3 weeks, standard migrations take 3 to 5 weeks, and complex migrations with an active Leads Inbox or heavy custom field use take 5 to 8 weeks.' },
    { question: 'How much does it cost?', answer: 'Pricing starts at $100 and is fixed after the free assessment, based on contact volume, pipeline count, and document template work. You get the exact price in writing before anything starts.' },
    { question: 'Can I run Pipedrive and GoHighLevel at the same time during migration?', answer: 'Yes. Pipedrive stays live while we build and test GoHighLevel in parallel. Nothing cuts over until the new system is verified against your source data.' },
    { question: 'Do I need to cancel Pipedrive before starting?', answer: 'No. We recommend keeping it active until your team confirms the GoHighLevel system is handling live deals correctly, typically about a week after go-live.' },
    { question: 'What happens to Pipedrive SmartDocs?', answer: 'SmartDocs don\'t transfer automatically. We rebuild each template in GHL\'s Documents editor for contracts, proposals, and quotes, with e-signature and tracking enabled.' },
  ];

  const furtherReading = [
    { title: 'The Complete GoHighLevel Migration Checklist', description: 'A 6-phase checklist covering pre-migration audit through go-live.', href: '/blog/gohighlevel-migration-checklist', cta: 'Read the checklist' },
    { title: 'GHL Migration Timeline Explained', description: 'Realistic timelines by platform and migration complexity.', href: '/blog/ghl-migration-timeline', cta: 'See the timeline guide' },
    { title: 'Common GHL Migration Mistakes', description: 'The planning failures that turn a 2-week migration into a 3-month cleanup.', href: '/blog/ghl-migration-mistakes', cta: 'Avoid these mistakes' },
  ];

  const otherMigrations = [
    { label: 'HubSpot → GoHighLevel', href: '/hubspot-to-gohighlevel' },
    { label: 'Kajabi → GoHighLevel', href: '/kajabi-to-gohighlevel' },
    { label: 'ActiveCampaign → GoHighLevel', href: '/activecampaign-to-gohighlevel' },
    { label: 'ClickFunnels → GoHighLevel', href: '/clickfunnels-to-gohighlevel' },
    { label: 'Mailchimp → GoHighLevel', href: '/mailchimp-to-gohighlevel' },
  ];

  const container = 'max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8';

  // ============================================
  // SCHEMA
  // ============================================
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pipedrive to GoHighLevel Migration',
    name: 'Pipedrive to GoHighLevel Migration Service',
    provider: { '@type': 'Organization', name: 'GHL Scale Up', url: 'https://www.ghlscaleup.com/' },
    areaServed: 'Worldwide',
    description: 'Fixed-price migration of Pipedrive contacts, organizations, deals, pipelines, activities, and documents into GoHighLevel, with manual rebuild of automations and workflows.',
    url: 'https://www.ghlscaleup.com/pipedrive-to-gohighlevel',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ghlscaleup.com/' },
      { '@type': 'ListItem', position: 2, name: 'GHL Migration Services', item: 'https://www.ghlscaleup.com/services/migration' },
      { '@type': 'ListItem', position: 3, name: 'Pipedrive to GoHighLevel', item: 'https://www.ghlscaleup.com/pipedrive-to-gohighlevel' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'GHL Migration', href: '/services/migration' }, { label: 'Pipedrive to GoHighLevel' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_20%,rgba(14,155,240,0.12),transparent)] pointer-events-none" />
        <div className={`${container} relative z-10 py-14 md:py-20`}>
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
            <div className="text-start">
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                <RefreshCw className="h-3 w-3" />
                Pipedrive Migration
              </div>
              <h1 className="text-[clamp(1.85rem,4.5vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-5">
                Pipedrive to GoHighLevel <span className="text-[#F8D000]">Migration Service</span>
              </h1>
              <div className="space-y-3.5 text-[0.92rem] sm:text-[0.97rem] font-light text-white/70 leading-relaxed">
                <p>We move your contacts, organizations, deals, and pipelines out of Pipedrive and into GoHighLevel, then rebuild the activities, document templates, and automations that don't transfer automatically. Fixed price, zero data loss guarantee, no downtime, and a 3 to 5 week standard timeline.</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                <Link href="/book-a-call" className="bg-[#F8D000] text-[#0B1421] px-6 sm:px-8 py-3 rounded-lg text-[0.85rem] sm:text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center gap-2">
                  Book a Free Migration Assessment <ChevronRight className="h-4 w-4" />
                </Link>
                <Link href="#what-transfers" className="border border-white/25 text-white px-6 sm:px-8 py-3 rounded-lg text-[0.85rem] sm:text-[0.9rem] font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                  See What We Migrate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/15">
                <div className="text-[0.78rem] text-white/60"><strong className="block text-[#F8D000] text-xl font-extrabold leading-tight">200+</strong>GHL projects delivered</div>
                <div className="text-[0.78rem] text-white/60"><strong className="block text-[#F8D000] text-xl font-extrabold leading-tight">0</strong>data loss incidents</div>
                <div className="text-[0.78rem] text-white/60"><strong className="block text-[#F8D000] text-xl font-extrabold leading-tight">6</strong>countries served</div>
                <div className="text-[0.78rem] text-white/60"><strong className="block text-[#F8D000] text-xl font-extrabold leading-tight">Fixed</strong>price, no hourly billing</div>
              </div>
            </div>

            <div className="bg-white/[0.06] border border-white/15 rounded-2xl p-7">
              <h4 className="text-white font-semibold text-base mb-4">What moves to GoHighLevel</h4>
              <ul>
                {heroChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 py-2.5 border-b border-white/10 last:border-b-0 text-[0.85rem] text-white/75">
                    <CheckCircle2 className="h-4 w-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COST COMPARISON */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> The Real Cost
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Pipedrive vs Your New <span className="text-[#0E9BF0]">GHL Stack Cost</span>
            </h2>
            <p className="text-[0.92rem] text-[#4A5568] leading-relaxed">Pipedrive prices per seat, so the bill climbs every time you add a rep. GoHighLevel's Unlimited plan is a single flat rate regardless of how many team members log in.</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-5 items-center">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6">
              <h4 className="text-[0.75rem] font-bold text-[#8A9BB0] uppercase tracking-wide mb-1.5">{costComparison.pipedrive.title}</h4>
              <div className="text-3xl font-extrabold text-[#1C2E4A] mb-4">{costComparison.pipedrive.amount}<span className="text-base font-normal">/mo</span></div>
              {costComparison.pipedrive.lines.map((line, i) => (
                <div key={i} className="flex justify-between text-[0.83rem] py-1.5 border-b border-[#E8EDF4] last:border-b-0 text-[#4A5568]">
                  <span>{line.label}</span><span>{line.value}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-2xl font-extrabold text-[#8A9BB0]">VS</div>
            <div className="bg-white border-2 border-[#25C97D] rounded-2xl p-6">
              <h4 className="text-[0.75rem] font-bold text-[#8A9BB0] uppercase tracking-wide mb-1.5">{costComparison.ghl.title}</h4>
              <div className="text-3xl font-extrabold text-[#25C97D] mb-4">{costComparison.ghl.amount}<span className="text-base font-normal">/mo</span></div>
              {costComparison.ghl.lines.map((line, i) => (
                <div key={i} className="flex justify-between text-[0.83rem] py-1.5 border-b border-[#E8EDF4] last:border-b-0 text-[#4A5568]">
                  <span>{line.label}</span><span>{line.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 bg-[#F4F7FA] rounded-xl px-6 py-4 flex flex-wrap justify-between gap-3 text-[0.88rem] text-[#4A5568]">
            <span>Pipedrive to GoHighLevel migration starts at <strong className="text-[#25C97D]">$100</strong>, fixed fee.</span>
            <span>Assessment is <strong className="text-[#25C97D]">free</strong> — no card required.</span>
          </div>
        </div>
      </section>

      {/* WHAT THIS SERVICE IS */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <div className={container}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> What This Service Is
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              A Fixed-Price, Fully Managed <span className="text-[#0E9BF0]">Pipedrive to GoHighLevel Migration</span>
            </h2>
            <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">We audit your Pipedrive account, decide how deals linked to both a person and an organization should sit inside GoHighLevel's contact-first structure, then export, rebuild, and test everything before anything goes live. Pipedrive stays active the entire time. Nothing cuts over until the GoHighLevel system has been verified against your real data, and the standard delivery window is 3 to 5 weeks at a fixed price agreed before work starts.</p>
          </div>
        </div>
      </section>

      {/* DATA MODEL EXPLAINER */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> The Part Most Migrations Get Wrong
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Why Pipedrive Deals Don't Just <span className="text-[#0E9BF0]">"Import" Into GoHighLevel</span>
            </h2>
            <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">Pipedrive is deal-centric: a single Deal can link to a Person and an Organization at the same time. GoHighLevel is contact-centric: an Opportunity sits under one Contact, and that Contact can only belong to one Company. The two structures don't map one-to-one, which is the main reason a plain CSV export of Pipedrive deals to GoHighLevel opportunities produces duplicates, orphaned records, or deals attached to the wrong record.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {dataModelCards.map((card, i) => (
              <div key={i} className={`bg-white border border-[#E8EDF4] rounded-2xl p-6 border-l-4 ${card.variant === 'pipedrive' ? 'border-l-[#1C2E4A]' : 'border-l-[#25C97D]'}`}>
                <h3 className="text-[0.98rem] font-bold text-[#1C2E4A] mb-3">{card.title}</h3>
                <ul>
                  {card.points.map((point, j) => (
                    <li key={j} className="py-2 border-b border-[#E8EDF4] last:border-b-0 text-[0.85rem] text-[#4A5568]">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#F4F7FA] rounded-2xl p-6">
            {mismatchNotes.map((note, i) => (
              <div key={i} className="flex gap-3 items-start py-3 border-b border-[#E8EDF4] last:border-b-0">
                <span className="bg-[#F8D000] text-[#1C2E4A] text-[0.68rem] font-extrabold px-2.5 py-1 rounded uppercase tracking-wide whitespace-nowrap">{note.tag}</span>
                <p className="text-[0.85rem] text-[#4A5568] leading-relaxed m-0">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFER TABLE */}
      <section id="what-transfers" className="py-14 md:py-20 bg-[#F4F7FA]">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> Pipedrive GoHighLevel Data Migration
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              What Transfers from Pipedrive to GoHighLevel <span className="text-[#0E9BF0]">and What We Rebuild</span>
            </h2>
            <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">Every element below is checked against Pipedrive's export tools and GoHighLevel's import behavior before we quote a project, so the scope reflects what actually happens to your data, not a marketing simplification.</p>
          </div>

          <div className="overflow-x-auto border border-[#E8EDF4] rounded-2xl bg-white">
            <table className="w-full border-collapse text-[0.83rem] min-w-[760px]">
              <thead>
                <tr className="bg-[#1C2E4A] text-white text-left">
                  <th className="px-4 py-3.5 font-semibold text-[0.78rem]">Pipedrive Element</th>
                  <th className="px-4 py-3.5 font-semibold text-[0.78rem]">Status in GHL</th>
                  <th className="px-4 py-3.5 font-semibold text-[0.78rem]">What Breaks or Needs Work</th>
                  <th className="px-4 py-3.5 font-semibold text-[0.78rem]">How We Handle It</th>
                </tr>
              </thead>
              <tbody>
                {transferRows.map((row, i) => {
                  const statusColor =
                    row.status === 'Transfers' ? 'text-[#25C97D]'
                    : row.status === 'Partial' || row.status === 'Rebuilt' ? 'text-[#B8860B]'
                    : 'text-[#C0392B]';
                  return (
                    <tr key={i} className={i % 2 === 1 ? 'bg-[#F4F7FA]' : 'bg-white'}>
                      <td className="px-4 py-3.5 border-b border-[#E8EDF4] align-top text-[#1C2E4A] font-medium">{row.element}</td>
                      <td className={`px-4 py-3.5 border-b border-[#E8EDF4] align-top font-bold ${statusColor}`}>{row.status}</td>
                      <td className="px-4 py-3.5 border-b border-[#E8EDF4] align-top text-[#4A5568]">{row.breaks}</td>
                      <td className="px-4 py-3.5 border-b border-[#E8EDF4] align-top text-[#4A5568]">{row.handling}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> Who This Is For
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Who Moves from Pipedrive to GoHighLevel <span className="text-[#0E9BF0]">and Why</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {audiences.map((aud, i) => (
              <div key={i} className="relative bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                {aud.common && (
                  <span className="absolute -top-2.5 right-4 bg-[#25C97D] text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-full">Most Common</span>
                )}
                <h3 className="text-[0.98rem] font-bold text-[#1C2E4A] mb-2">{aud.title}</h3>
                <p className="text-[0.83rem] text-[#4A5568] leading-relaxed">{aud.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> What You Get
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Everything We Deliver in Your <span className="text-[#0E9BF0]">Pipedrive to GoHighLevel Migration</span>
            </h2>
            <p className="text-[0.92rem] text-[#4A5568] leading-relaxed">Parallel running with no downtime, a fixed price in writing before work starts, a zero data loss guarantee, and team training before go-live.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="bg-white border border-[#E8EDF4] rounded-2xl p-5 hover:border-[#0E9BF0] hover:shadow-[0_8px_30px_rgba(28,46,74,0.06)] transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-extrabold mb-3">{i + 1}</div>
                <h3 className="text-[0.88rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.78rem] text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> How It Works
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              The Pipedrive to GoHighLevel Migration <span className="text-[#0E9BF0]">Process: 6 Steps</span>
            </h2>
          </div>

          <div className="mt-2">
            {processSteps.map((step, i) => (
              <div key={i} className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-6 py-5 border-b border-[#E8EDF4] last:border-b-0">
                <div className="text-[0.78rem] font-bold text-[#0E9BF0] uppercase tracking-wide">{step.when}</div>
                <div>
                  <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
                  <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE + PRICING */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> Timeline
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              How Long Does a Pipedrive to GoHighLevel <span className="text-[#0E9BF0]">Migration Take?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {timelineTiers.map((tier, i) => (
              <div key={i} className={`bg-white border rounded-2xl p-6 ${tier.standard ? 'border-2 border-[#0E9BF0]' : 'border-[#E8EDF4]'}`}>
                <div className="text-2xl font-extrabold text-[#1C2E4A] mb-1">{tier.duration}</div>
                <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">{tier.title}</h3>
                <p className="text-[0.8rem] text-[#4A5568] leading-relaxed">{tier.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[0.8rem] text-[#8A9BB0]">A free 30-minute assessment gives you an exact timeline for your account, not an estimate.</p>

          <div className="mt-8 bg-[#1C2E4A] text-white rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Pipedrive to GHL Migration</h3>
              <div className="text-4xl font-extrabold text-[#F8D000] mb-2">$100</div>
              <p className="text-white/70 text-[0.85rem] mb-5">Starting price, fixed fee, 3 to 5 weeks standard delivery.</p>
              <Link href="/book-a-call" className="bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg text-[0.88rem] font-bold hover:bg-[#FFE44D] transition-all inline-flex items-center gap-2">
                Book a Free Migration Assessment <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-2">
              {['Full account audit & data-model mapping','Contact & organization dedup','Pipeline & deal reconstruction','Document template rebuild','Automation rebuild','Team training & handover'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[0.83rem] text-white/75">
                  <CheckCircle2 className="h-4 w-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> Track Record
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Pipedrive to GoHighLevel <span className="text-[#0E9BF0]">Migration Results</span>
            </h2>
            <p className="text-[0.92rem] text-[#4A5568] leading-relaxed">We don't attach a single invented statistic to every migration page. These are the verified numbers behind GHL Scale Up's migration work across platforms.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {results.map((r, i) => (
              <div key={i} className="py-5">
                <div className="text-3xl font-extrabold text-[#25C97D]">{r.number}</div>
                <div className="text-[0.78rem] text-[#8A9BB0] mt-1">{r.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[0.9rem] text-[#4A5568]">
            See verified <Link href="/case-studies" className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80">case studies</Link> and <Link href="/testimonials" className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80">client testimonials</Link> across CRM migrations we&apos;ve delivered.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <CaseStudies caseStudies={caseStudies} />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 md:py-20 bg-white">
        <Testimonials />
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1C2E4A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(14,155,240,0.1),transparent)] pointer-events-none" />
        <div className={`${container} relative z-10 py-16 md:py-24 text-center`}>
          <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
            <Phone className="h-3 w-3" /> Get Started
          </div>
          <h2 className="text-[1.6rem] sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-5 max-w-[20ch] mx-auto">
            Ready to Move from Pipedrive to GoHighLevel?
          </h2>
          <p className="text-[0.9rem] sm:text-[0.95rem] font-light text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            A free 30-minute assessment covering your account review, data-model decisions, and fixed-price scope. No commitment required — we respond within a few hours.
          </p>
          <div className="flex justify-center">
            <Link href="/book-a-call" className="bg-[#F8D000] text-[#0B1421] px-6 sm:px-8 py-3 rounded-lg text-[0.88rem] sm:text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center justify-center gap-2">
              Book a Free Migration Assessment <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-5 text-[0.78rem] text-[#8A9BB0]">Email: aryan@ghlscaleup.com · Phone/WhatsApp: +91 98932 70210</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Pipedrive to GoHighLevel Migration <span className="text-[#0E9BF0]">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-[#E8EDF4] rounded-xl overflow-hidden hover:border-[#0E9BF0] transition-colors h-fit">
                <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer hover:bg-[#F9FBFD] transition-colors list-none">
                  <span className="text-[0.85rem] sm:text-[0.9rem] font-semibold text-[#1C2E4A]">{faq.question}</span>
                  <ChevronRight className="h-4 w-4 text-[#0E9BF0] group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-4 sm:px-5 pb-5">
                  <p className="text-[0.8rem] sm:text-[0.83rem] text-[#4A5568] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <div className={container}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> Further Reading
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Helpful Guides on <span className="text-[#0E9BF0]">GoHighLevel Migration</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {furtherReading.map((item, i) => (
              <div key={i} className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:border-[#0E9BF0] transition-all flex flex-col">
                <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-2">{item.title}</h3>
                <p className="text-[0.8rem] text-[#4A5568] leading-relaxed flex-1">{item.description}</p>
                <Link href={item.href} className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#0E9BF0] hover:gap-2.5 transition-all">
                  {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER MIGRATIONS */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" /> Moving From Somewhere Else?
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Also Migrating from <span className="text-[#0E9BF0]">Another Platform?</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {otherMigrations.map((m, i) => (
              <Link key={i} href={m.href} className="bg-white border border-[#E8EDF4] rounded-full px-4 py-2.5 text-[0.83rem] font-medium text-[#1C2E4A] hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-colors">
                {m.label}
              </Link>
            ))}
            <Link href="/services/migration" className="bg-white border border-[#0E9BF0] rounded-full px-4 py-2.5 text-[0.83rem] font-semibold text-[#0E9BF0] hover:bg-[#0E9BF0] hover:text-white transition-colors">
              View All Migration Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}