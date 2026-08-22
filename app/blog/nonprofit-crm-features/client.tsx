'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Zap,
  Share2,
  XCircle
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function NonprofitCRMFeaturesClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'centralized-constituent-management',
        'donation-fundraising',
        'donor-segmentation',
        'email-sms-communication',
        'automation-workflow',
        'forms-capture',
        'reporting-analytics',
        'integrations',
        'event-volunteer',
        'security-governance',
        'comparison-table',
        'when-ghl-fits',
        'when-not-right',
        'can-ghl-used',
        'how-to-decide',
        'most-important',
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
      q: "What features should a nonprofit CRM have?",
      a: "A nonprofit CRM should generally include centralized constituent management, donation and fundraising tracking, segmentation, communication, workflow automation, forms and supporter capture, reporting, integrations, event or volunteer coordination, and strong data governance. The depth required in each area depends on the organization's mission and fundraising model."
    },
    {
      q: "What is the most important feature of a nonprofit CRM?",
      a: "Centralized constituent data is the foundation, but it is not enough by itself. The CRM should connect donor history and supporter information to communication, automation and reporting so staff can act on the data."
    },
    {
      q: "What should I look for in nonprofit CRM software?",
      a: "Start with your actual workflows. Evaluate donor management, fundraising, recurring giving, segmentation, communication, automation, forms, reporting, integrations, events or volunteers, permissions, usability and implementation needs. Also identify which features must be native and which can be integrated."
    },
    {
      q: "What is donor management in a CRM?",
      a: "Donor management is the process of storing and using information about donors, including contact details, giving history, interactions, preferences, campaigns and stewardship activity. A strong donor management system helps staff understand the relationship rather than only recording transactions."
    },
    {
      q: "Do nonprofits need CRM automation?",
      a: "Most nonprofits can benefit from automation when they have repetitive, predictable processes. Examples include donor acknowledgements, event reminders, volunteer onboarding, campaign follow-up and lapsed-donor re-engagement."
    },
    {
      q: "Can GoHighLevel be used as a nonprofit CRM?",
      a: "Yes. GHL can support contact management, segmentation, forms, communication, automation, calendars, pipelines, payment workflows and integrations. It should not be represented as a complete substitute for every specialized nonprofit fundraising system."
    },
    {
      q: "Is GoHighLevel good for nonprofits?",
      a: "It can be a good fit for small and growing nonprofits that prioritize communication, automation, supporter engagement and flexible CRM workflows. Organizations with more involved fundraising, grant, major-gift, accounting or specialized reporting needs should compare it with specialized nonprofit CRMs."
    },
    {
      q: "Can GoHighLevel manage donors?",
      a: "GHL can store donor contact information, custom fields, tags and engagement data and can connect payment events to workflows. However, the nonprofit needs to design the donor data architecture, and specialized donor-management features may require another platform."
    },
    {
      q: "Can GoHighLevel automate nonprofit workflows?",
      a: "Yes. HighLevel workflows support triggers, actions, waits, conditional branches and integrations. A nonprofit can build workflows for donations, acknowledgements, events, volunteers, campaigns and internal follow-up."
    },
    {
      q: "Can GoHighLevel accept donations?",
      a: "HighLevel supports payment links, products, one-time and recurring payments and several payment providers. Its documentation explicitly includes donations as a payment-link use case. The exact donation experience and provider availability should be configured and verified for the nonprofit's jurisdiction and needs."
    },
    {
      q: "Is GoHighLevel better than Salesforce for nonprofits?",
      a: "There is no universal winner. Salesforce Nonprofit Cloud has deeper specialized nonprofit features, including fundraising, grants, volunteer management and program management. GHL may be more attractive when a nonprofit prioritizes flexible CRM workflows, communication and automation with a simpler implementation scope."
    },
    {
      q: "What is the best CRM for a small nonprofit?",
      a: "There is no single best CRM for every small nonprofit. A small organization focused on fundraising may benefit from a specialized donor CRM such as Bloomerang, DonorPerfect or Neon CRM. A nonprofit focused more heavily on communication, forms and automation may also evaluate a flexible platform such as GoHighLevel. The right choice depends on workflows, fundraising complexity and technical capacity."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'centralized-constituent-management', title: '1. Centralized Donor and Constituent Management' },
    { id: 'donation-fundraising', title: '2. Donation and Fundraising Management' },
    { id: 'donor-segmentation', title: '3. Nonprofit CRM Donor Segmentation and Personalization' },
    { id: 'email-sms-communication', title: '4. Nonprofit Email and SMS Communication' },
    { id: 'automation-workflow', title: '5. Nonprofit CRM Automation and Workflow Features' },
    { id: 'forms-capture', title: '6. Nonprofit Forms, Landing Pages and Supporter Capture' },
    { id: 'reporting-analytics', title: '7. Nonprofit CRM Reporting and Analytics' },
    { id: 'integrations', title: '8. Nonprofit CRM Integrations and Data Connectivity' },
    { id: 'event-volunteer', title: '9. Event and Volunteer Management' },
    { id: 'security-governance', title: '10. Security, Scalability, Data Governance and Ease of Use' },
    { id: 'comparison-table', title: 'Nonprofit CRM Feature Comparison: GoHighLevel vs Purpose-Built Platforms' },
    { id: 'when-ghl-fits', title: 'When Does GoHighLevel Make Sense for a Nonprofit?' },
    { id: 'when-not-right', title: 'When GoHighLevel May Not Be the Right Choice' },
    { id: 'can-ghl-used', title: 'Can GoHighLevel Be Used as a Nonprofit CRM?' },
    { id: 'how-to-decide', title: 'How to Decide Which Nonprofit CRM Is Right for You' },
    { id: 'most-important', title: 'The Most Important Part of a Nonprofit CRM Is Not a Feature' },
    { id: 'faq', title: 'Frequently Asked Questions About Nonprofit CRM Features' }
  ];

  const comparisonData = [
    { feature: 'Constituent management', ghl: 'Strong, with setup', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'Purpose-built CRMs generally have richer nonprofit relationship models.' },
    { feature: 'Donation & fundraising', ghl: 'Possible with setup/integrations', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'GHL can process payments and automate around them; specialized features may differ.' },
    { feature: 'Segmentation', ghl: 'Strong', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'GHL is flexible with fields, tags and workflows.' },
    { feature: 'Email & SMS', ghl: 'Strong', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'GHL is particularly strong for multichannel automation.' },
    { feature: 'Workflow automation', ghl: 'Strong', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'One of GHL\'s strongest areas.' },
    { feature: 'Forms & capture', ghl: 'Strong', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'GHL is strong for flexible forms and funnel-based capture.' },
    { feature: 'Reporting', ghl: 'Strong, with setup', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'GHL can build operational reports; specialized fundraising reports may favor nonprofit CRMs.' },
    { feature: 'Integrations & APIs', ghl: 'Strong', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'GHL can work well as the communication and automation hub.' },
    { feature: 'Events & volunteers', ghl: 'Possible with setup', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Moderate-Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'Dedicated modules may be preferable at scale.' },
    { feature: 'Governance & usability', ghl: 'Strong, but needs good administration', salesforce: 'Strong', blackbaud: 'Strong', bloomerang: 'Strong', donorperfect: 'Strong', neon: 'Strong', buyerNote: 'GHL flexibility requires disciplined administration.' }
  ];

  const usefulSegments = [
    'First-time donors',
    'Recurring donors',
    'Lapsed donors',
    'Major-donor prospects',
    'Volunteers',
    'Event attendees',
    'Campaign-specific supporters',
    'Location or chapter',
    'Preferred communication channel',
    'Giving frequency or amount',
    'Supporters interested in a specific program'
  ];

  const workflowExamples = [
    { title: 'New donor workflow', desc: 'Trigger: payment received or donation form submission. Actions: update donor fields, apply a New Donor tag, send an acknowledgement, notify development staff, wait, send an impact message and move the donor into the appropriate stewardship journey.' },
    { title: 'Donation acknowledgement workflow', desc: 'Trigger: successful payment. Condition: first-time versus recurring donor. Action: send the appropriate acknowledgement and notify staff if the transaction needs manual review.' },
    { title: 'Event registration workflow', desc: 'Trigger: event form submission. Action: store event interest, confirm registration, send event details, create internal tasks and schedule reminder messages.' },
    { title: 'Volunteer onboarding workflow', desc: 'Trigger: volunteer application. Condition: program or interest area. Action: assign the relevant coordinator, send an acknowledgement, create a task and route the volunteer into onboarding.' },
    { title: 'Lapsed donor re-engagement', desc: 'Trigger: a date-based condition or field update indicating inactivity. Condition: previous giving history or engagement. Action: send a personalized re-engagement message, wait, check response and route engaged supporters differently from non-responsive contacts.' },
    { title: 'Recurring donor communication', desc: 'Trigger: recurring payment or subscription event. Action: update donor classification, send stewardship communication and create an internal task when payment issues require human attention.' },
    { title: 'Campaign follow-up', desc: 'Trigger: form submission, payment, campaign engagement or tracked link click. Action: segment the supporter and deliver campaign-specific follow-up.' },
    { title: 'Internal staff notification', desc: 'Trigger: high-value donation, volunteer application, event registration or supporter reply. Action: create a task or notify the appropriate staff member.' }
  ];

  const whenGHLFits = [
    'Small and growing nonprofits',
    'Community organizations',
    'Outreach-heavy nonprofits',
    'Nonprofits with fragmented tools',
    'Organizations willing to use a hybrid stack'
  ];

  const whenNotRight = [
    'Complex fundraising operations',
    'Major gift management',
    'Grant management',
    'Fund accounting and restricted funds',
    'Specialized donor tax and receipting needs',
    'Advanced volunteer or program management',
    'Enterprise nonprofit governance'
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
          <span className="text-[#1A2236] font-medium">Nonprofit CRM Features</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Nonprofit</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Features Guide</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            10 Key Features Every Nonprofit CRM Should Have:<br />
            <span className="text-[#F8D000]">A Practical Buyer's Guide (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated August 2026</div>
            </div>
          </div>

          {/* Intro Paragraphs */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Choosing nonprofit CRM software is not simply a matter of finding the platform with the longest feature list. A nonprofit CRM has to connect people, giving, communication, events, volunteers, fundraising activity and internal follow-up without creating another layer of administrative work.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            That is why the best nonprofit CRM features are the ones that solve recurring day-to-day problems: donor information scattered across spreadsheets, staff manually acknowledging gifts, supporters receiving generic messages, event registrations living in another system, and leadership struggling to produce reliable reports.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Current nonprofit CRM research repeatedly emphasizes centralized constituent data, donation and fundraising management, segmentation, communication, automation, reporting, integrations and event-related features. Recent nonprofit discussions show the same practical concerns: clean donor profiles, segmentation, reporting, receipts, integrations and ease of use are often more important than having an enormous feature list.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            There is also an important distinction between a nonprofit-specific CRM and a flexible general-purpose CRM. Salesforce Nonprofit Cloud, Blackbaud Raiser's Edge NXT, Bloomerang, DonorPerfect and Neon CRM are designed around nonprofit fundraising and constituent-management needs. GoHighLevel comes from a different direction: it is a flexible CRM and automation platform with contacts, pipelines, forms, calendars, messaging, workflows, payments, reporting and integrations.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            That does not make one category universally better. It makes the buying question more specific: Does your nonprofit need a specialized fundraising database, or does it need a flexible CRM and engagement system that can be configured around its supporter journeys?
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            This guide examines ten features from both sides: what a nonprofit actually needs, what established nonprofit CRMs provide, and where GoHighLevel can support the requirement natively, through configuration, or through integrations.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What This Guide Covers</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                At a minimum, a nonprofit CRM should provide a centralized constituent record, donation and fundraising tracking, segmentation, communication, automation, supporter-data capture, reporting, integrations, event or volunteer coordination, and strong data governance and usability.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                The exact priority depends on the organization. A grant-funded nonprofit, membership organization, community charity and major-gifts operation can need very different depth in each area. The best way to judge a CRM is to start with your day-to-day work. What does your team actually need the system to handle?
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

            {/* Section 1: Centralized Constituent Management */}
            <h2 id="centralized-constituent-management" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Centralized Donor and Constituent Management
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What this means for a nonprofit</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A nonprofit CRM should create one reliable place for the organization to understand who a supporter is and how that person has interacted with the mission. That record may include contact information, donation history, communication preferences, event attendance, volunteer activity, campaign engagement, notes and relationships with other people or organizations.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The word constituent matters here. Nonprofits do not have only customers. A single person may be a donor, volunteer, event attendee, member, advocate, beneficiary, sponsor contact or prospective major donor at different points in the relationship.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why this matters</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Without a unified record, staff often reconstruct relationships from email threads, spreadsheets, donation platforms and event lists. That creates duplicate records and makes institutional knowledge dependent on individual employees.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Recent nonprofit CRM resources describe the movement away from spreadsheets and disconnected tools as a core reason organizations adopt a CRM. Neon One and DonorPerfect emphasize unified constituent records, while recent community discussions describe clean profiles, communication history and integration as practical buying needs.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What to look for</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Maintain a complete constituent profile.</li>
              <li>Store relevant custom information without forcing staff into spreadsheets.</li>
              <li>Connect communication and engagement history to the person.</li>
              <li>Track relationships and important notes.</li>
              <li>Support segmentation without duplicating databases.</li>
              <li>Maintain data-quality rules and permissions.</li>
              <li>Make information usable for both fundraising and supporter engagement.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How leading nonprofit CRMs approach donor management</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Blackbaud Raiser's Edge NXT describes a unified supporter record covering giving history, engagement, relationships and interactions. Bloomerang emphasizes 360-degree supporter understanding, donor insights, major gifts, grants and permissions. Neon CRM combines donor management with customizable profiles and broader supporter relationships.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel approaches centralized constituent management</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel provides contact records, custom fields, tags, contact types and Smart Lists. Current HighLevel documentation says custom fields can be used across forms, surveys, workflows, pipelines, Smart Lists, reporting and personalization, while Contact Types provide a primary classification and tags provide additional labels.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That makes it possible to model a nonprofit supporter database. An organization could create fields such as donor type, preferred communication method, volunteer interest, campaign source, event attended or giving category, then use tags and workflows to organize communication.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where GoHighLevel needs configuration</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The limitation is the way your data is organized. GHL gives you flexible CRM building blocks, but it is not presented as a nonprofit-native donor database with every specialized fundraising relationship already modeled. A nonprofit may need to design its own fields, tags, pipelines and governance conventions.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Nonprofit use case</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A community nonprofit could store every supporter in GHL and classify people as Donor, Volunteer, Member or Prospect. A volunteer-interest field could identify programs they care about, while tags could capture event attendance or campaign engagement. Those attributes can then feed communication and workflow logic.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel can handle centralized supporter data well when the nonprofit's way your data is organized is relatively straightforward and properly designed. Organizations needing more involved householding, soft credits, major-gift structures or specialized constituent relationships should compare GHL against specialized nonprofit CRMs before migrating.
            </p>

            {/* CTA 1 */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Not sure whether your nonprofit's supporter data can be modeled cleanly in GoHighLevel?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up can map your current CRM, spreadsheets and communication workflow against GHL before setupation.
              </p>
              <Link href="/services/crm-setup" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                GHL Scale Up →
              </Link>
            </div>

            {/* Section 2: Donation and Fundraising */}
            <h2 id="donation-fundraising" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Donation and Fundraising Management
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What a nonprofit needs</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Fundraising is where a general CRM and a specialized nonprofit CRM can diverge most sharply. A nonprofit may need to track one-time gifts, recurring donations, pledges, campaigns, appeals, tributes, acknowledgements, payment status and donor history. Some organizations also require restricted-fund tracking, major-gift management or more involved accounting relationships.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The CRM should not merely record that money was received. It should help the development team understand what happened before and after the gift.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why this matters</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A donation creates more than a transaction. It can begin a stewardship journey, change a donor segment, trigger an acknowledgement, update a campaign total and influence future outreach. If payment data lives separately from the constituent record, staff have to reconcile those pieces manually.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How specialized nonprofit CRMs approach fundraising</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Specialized systems go deep into fundraising. Blackbaud Raiser's Edge NXT describes end-to-end gift processing, recurring giving, pledge and tribute support, campaign support and fundraising workflows. Neon CRM lists campaigns, peer-to-peer fundraising, recurring gifts and secure payments. DonorPerfect emphasizes donation processing, online giving, recurring gifts, reporting and fundraising operations.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel approaches donations</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel currently supports payment links, products, one-time and recurring products, order forms and multiple payment providers. HighLevel documentation explicitly lists donations as a payment-link use case and supports recurring products. Stripe can be connected to supported payment experiences, while the payment-provider matrix includes Stripe, PayPal, Square, NMI, Authorize.Net and Razorpay across different product areas.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A nonprofit can therefore configure a donation experience where a supporter pays, the transaction is recorded and a workflow responds to the payment event. The organization can update the supporter record, send an acknowledgement, add a donor segment and trigger follow-up.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where GoHighLevel is not a substitute for a specialized fundraising CRM</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL should not be represented as a complete replacement for every fundraising database. If a nonprofit depends on advanced pledge management, major-gift moves management, peer-to-peer fundraising, more involved donor tax reporting, specialized fund accounting, grant management or deeply nonprofit-specific reports, specialized platforms may provide those features more natively.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is where Blackbaud, Neon CRM, Bloomerang and DonorPerfect deserve serious evaluation. The decision is whether the organization wants to build a process from flexible CRM components or use a platform where those nonprofit workflows already exist.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Nonprofit use case</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A small nonprofit could create a campaign donation payment link, capture donor information, record the payment, apply a New Donor tag, add the supporter to a stewardship workflow and notify the development team. For recurring gifts, the organization could configure recurring products and automate communication around the payment lifecycle.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel can support online donation collection and recurring-payment workflows, but it should be evaluated as a flexible CRM and supporter-engagement system rather than automatically treated as a specialized fundraising database.
            </p>

            {/* Section 3: Donor Segmentation */}
            <h2 id="donor-segmentation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Nonprofit CRM Donor Segmentation and Personalization
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What donor segmentation means</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Segmentation is the ability to divide a nonprofit's supporter base into meaningful groups so the organization can communicate differently with people who have different relationships, interests and histories.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A first-time donor should not necessarily receive the same message as a five-year recurring donor. A volunteer who has never donated may need a different journey from a major donor. A lapsed donor may need a re-engagement sequence rather than another generic appeal.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why this matters</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Personalization becomes difficult when the underlying database cannot represent meaningful differences between people. Staff then export spreadsheets, create manual lists and repeatedly rebuild segments for every campaign.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Current nonprofit CRM resources consistently highlight segmentation as a core capability. Neon CRM, Bloomerang and other platforms describe dynamic segmentation, supporter profiles and targeted communication as central to donor engagement.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel supports nonprofit segmentation</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL provides custom fields, tags, contact types, Smart Lists, workflow conditions and personalized communication. HighLevel documentation explains that tags can organize contacts, trigger automation and support segmentation, while custom fields can be used to filter contacts and personalize email and SMS.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It also supports segmentation based on behavior. HighLevel added the ability to tag contacts from campaign statistics based on interactions such as opens and clicks, helping create segments from engagement.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Useful nonprofit segments</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {usefulSegments.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Nonprofit use case</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A donor submits a campaign donation form. The workflow records the campaign source, assigns a New Donor contact type and adds a campaign-specific tag. If the supporter later becomes a recurring donor, another workflow can change the lifecycle classification and start a different stewardship journey.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Limitation</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The flexibility is also the risk. Poorly planned tags and fields can become a new form of spreadsheet chaos. A nonprofit needs a data dictionary and naming conventions before building dozens of segments.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL is strong when segmentation and personalization are primarily about supporter communication and workflow logic. Purpose-built nonprofit CRMs may provide more specialized donor segments and fundraising intelligence without extra setup.
            </p>

            {/* Section 4: Email and SMS */}
            <h2 id="email-sms-communication" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Nonprofit Email and SMS Communication
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What this should include</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A nonprofit CRM should help staff communicate with supporters without constantly exporting contact lists into separate systems. Email and, where appropriate and compliant, SMS can support newsletters, campaign updates, donation acknowledgements, reminders, event communication, volunteer updates, re-engagement and stewardship.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why it helps to keep communication connected to the CRM</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The value of communication data comes from context. Knowing that a donor opened an appeal, registered for an event or replied to a volunteer message can make the next interaction more relevant. When that data is isolated in another tool, the organization has to synchronize systems or manually interpret engagement.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How nonprofit CRMs approach communication</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Neon CRM includes email marketing and text messaging, Bloomerang includes automated supporter journeys and a built-in email builder, and Blackbaud describes engagement tools around email, donations, registrations and memberships.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel handles communication</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Communication is one of GHL's strongest areas. Workflows can trigger email and SMS actions, respond to contact events and branch based on conditions. HighLevel's workflow trigger catalog includes email events, customer replies, form submissions, appointment events, contact changes and payment-related triggers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a nonprofit, this creates useful workflows around donor acknowledgements, event reminders, volunteer updates and campaign follow-up.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Nonprofit use case</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A volunteer registers through a website form. The CRM stores the volunteer's interests, sends an immediate confirmation email, creates an internal task for the volunteer coordinator and sends a reminder if the application has not been reviewed after a defined period.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Configuration and compliance considerations</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Nonprofits still need to manage consent, unsubscribe preferences, SMS rules and deliverability. A CRM's ability to send a message does not remove the organization's responsibility to use appropriate consent and suppression practices.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For communication-heavy nonprofits, GoHighLevel can be compelling because email and SMS are deeply connected to its automation layer. The question is whether those communication strengths compensate for fundraising-specific features the organization may need elsewhere.
            </p>

            {/* Section 5: Automation and Workflow */}
            <h2 id="automation-workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Nonprofit CRM Automation and Workflow Features
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What automation looks like in real life</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Automation is not simply about saving a few minutes. It is about making predictable supporter journeys happen consistently. When a known event occurs, the organization should not depend on someone remembering the next ten steps.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A new donor, for example, may need an acknowledgement, a receipt process, a supporter classification, a stewardship message, an internal notification and a future engagement touchpoint. If those steps are manual, the experience can vary with staff workload.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">A simple way to think about workflows</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A useful way to think about automation is trigger → condition → action → wait → next condition → outcome. The trigger starts the process. The condition determines which path applies. The action performs the work. The wait controls timing. The outcome might be a message, task, pipeline update, segment or integration event.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel handles workflow automation</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is one of GHL's strongest features. HighLevel's current workflow system supports triggers across contacts, events, appointments, opportunities and payments. The action library includes If/Else, Wait, webhooks and other automation actions, while If/Else can route contacts into branches based on stored or live values.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel also provides a Workflow AI Builder that can generate and edit workflows through natural-language instructions. For nonprofit processes, generated logic should still be reviewed and tested before publication.
            </p>

            <div className="space-y-3 mb-6">
              {workflowExamples.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h4 className="text-base font-bold text-[#1A2236] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#5C6880]">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where configuration matters</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Workflow power creates a governance requirement. A nonprofit should document triggers, naming conventions, stop conditions, ownership and exception handling. Otherwise, automation can create duplicate messages, contradictory updates or incorrect supporter classifications.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If automation is a major reason for changing CRM systems, GoHighLevel deserves serious consideration. Its workflow engine is broad and flexible. The trade-off is that nonprofit-specific processes often need to be designed and configured rather than selected from a specialized fundraising module.
            </p>

            {/* CTA 2 - Workflow Automation */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">If your nonprofit is still moving donor information between spreadsheets, forms and communication tools manually, the biggest opportunity may be workflow design rather than another standalone tool.</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up can map those processes and build the automation around the supporter journey.
              </p>
              <Link href="/services/workflow-automation" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                GHL Scale Up →
              </Link>
            </div>

            {/* Section 6: Forms and Capture */}
            <h2 id="forms-capture" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Nonprofit Forms, Landing Pages and Supporter Capture
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why forms and data capture matter</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The CRM is only as useful as the data entering it. Nonprofits collect information through donation forms, volunteer applications, event registrations, newsletter signups, contact forms, campaign pages and surveys. If those forms create records that require manual re-entry, the organization has simply moved the spreadsheet problem further downstream.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What good nonprofit forms should do</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Collect only the information needed for the process.</li>
              <li>Write data into structured CRM fields.</li>
              <li>Support segmentation.</li>
              <li>Trigger the right follow-up.</li>
              <li>Notify staff when human action is required.</li>
              <li>Connect registrations or submissions to the correct campaign or event.</li>
              <li>Provide a clear supporter experience on mobile devices.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel handles forms and capture</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel provides a form builder with standard and custom fields, styling controls, notifications, redirects and workflow triggers. Current documentation describes form submissions as workflow triggers, allowing data capture to become the starting point for downstream automation.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A nonprofit can create separate capture experiences for donations, volunteers, events, newsletters or contact enquiries and route the resulting records into different workflows.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Nonprofit use case</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A nonprofit launches a volunteer recruitment campaign. The landing page explains the program and embeds a form asking for availability, location, skills and preferred volunteer role. On submission, GHL creates or updates the contact, stores the custom fields, assigns the segment, notifies the volunteer coordinator and sends an acknowledgement.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where GHL may need integration</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the donation experience requires specialized peer-to-peer fundraising, tribute giving or other fundraising features, a dedicated donation platform may still be the better front end. GHL can then receive relevant data through an integration or webhook.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL is strong for flexible data capture and the automation that follows it. The more specialized the fundraising experience becomes, the more important the surrounding integration architecture becomes.
            </p>

            {/* Section 7: Reporting */}
            <h2 id="reporting-analytics" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Nonprofit CRM Reporting and Analytics
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What nonprofit leaders really need from reports</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Reporting should answer day-to-day questions, not merely display charts. Leadership may need to know how much a campaign generated, which donor segments are engaging, how many volunteers are progressing through onboarding, how many event registrations converted, and which follow-ups remain outstanding.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Development teams may need donor activity and campaign performance. Communications teams may need email engagement. Program teams may need participation information. The CRM therefore needs flexible reporting while still maintaining reliable definitions.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How leading nonprofit CRMs approach reporting</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Purpose-built nonprofit platforms often include fundraising-specific reports. Bloomerang offers reporting and analytics with segmentation and donor insights; DonorPerfect highlights reporting and financial reporting; Neon CRM provides pre-built reports and broader fundraising reporting.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel handles reporting</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel provides customizable dashboards and custom reports across contacts, appointments, opportunities, calls, revenue and other data. It also provides opportunity widgets, email widgets and scheduled custom reports. Current documentation says custom reports can be designed, scheduled and exported, while opportunity widgets can analyze pipeline counts, values, statuses and attribution.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a nonprofit, this can support dashboards for new supporters, event registrations, volunteer applications, campaign opportunities, communication activity and donation-related pipeline values if the way your data is organized has been designed to support those metrics.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where GHL reporting has a boundary</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A flexible reporting system is not automatically a nonprofit fundraising reporting system. Organizations that need specialized LYBUNT/SYBUNT reporting, more involved gift accounting, restricted-fund reporting, detailed major-gift analytics or other specialized fundraising metrics should verify the exact reporting depth they require.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel can be configured to track many day-to-day metrics, but report quality depends on the quality and structure of the underlying data.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL can provide strong day-to-day dashboards for a nonprofit's CRM and engagement processes. Specialized fundraising reporting remains an important reason to evaluate nonprofit-specific platforms alongside it.
            </p>

            {/* Section 8: Integrations */}
            <h2 id="integrations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. Nonprofit CRM Integrations and Data Connectivity
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why integrations matter</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Few nonprofits operate with a single software system. A typical stack can include a donation processor, accounting system, website, email platform, event software, volunteer system, spreadsheet, payment provider and CRM.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The goal should not be to force every function into one platform. It should be to make systems work together without creating duplicate records or manual reconciliation.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What to look for in integrations</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Native integrations where practical.</li>
              <li>APIs for custom needs.</li>
              <li>Webhooks for event-driven data transfer.</li>
              <li>Reliable field mapping.</li>
              <li>Clear ownership of source data.</li>
              <li>Error handling and monitoring.</li>
              <li>Authentication and credential management.</li>
              <li>Documentation for integrations that staff will need to maintain.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel approaches integrations</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel has workflow-level integrations and technical connectivity options. Its current documentation supports custom webhooks using GET, POST, PUT and DELETE, authentication methods including API keys, bearer tokens and OAuth2, and dynamic field mapping. HighLevel also maintains an API covering contacts, messaging, workflows, calendars, payments, webhooks and more.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This means GHL can sit in the middle of a nonprofit's ecosystem rather than requiring every system to be replaced. A specialized donation platform, for example, can remain responsible for transaction processing while relevant donor and transaction information is sent into GHL to drive communication and stewardship.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Nonprofit use case</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A nonprofit continues using a specialized donation processor for transaction and accounting functions. When a donation succeeds, the external platform sends an event to GHL. GHL updates the constituent record, adds the campaign tag, starts the acknowledgement workflow and alerts the development team when the gift meets a defined threshold.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where integration complexity becomes a risk</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every integration introduces dependency. If field mappings are wrong, a supporter can be misclassified. If a webhook fails, a stewardship message may not fire. If two systems both claim to be the source of truth, updates can overwrite each other.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That is why integration design should happen before setupation, not after a nonprofit has already built the CRM.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL's integration capability is one of the strongest reasons to consider it as a nonprofit supporter-engagement system. The organization does not necessarily need every specialized nonprofit function inside GHL if its core systems can exchange the right data reliably.
            </p>

            {/* Section 9: Event and Volunteer */}
            <h2 id="event-volunteer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. Event and Volunteer Management
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why events and volunteers matter</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A nonprofit's relationship with a supporter is rarely limited to donations. Someone may first encounter the organization through an event, become a volunteer, later donate and eventually become a recurring supporter. If those activities live in disconnected systems, staff lose the context that makes the relationship valuable.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Current nonprofit CRM platforms increasingly combine donor management with events, memberships and volunteer management. Neon CRM provides event and volunteer features alongside donor records, while DonorPerfect highlights event and volunteer management as part of its nonprofit offering.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel can support events</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel has calendars, forms, payment experiences, pipelines and workflows that can be combined to build event-registration processes. A registration form can capture attendee information, a calendar can manage sessions, payment links can collect fees where applicable, and workflows can send confirmations and reminders.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel can support volunteers</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Volunteer coordination can be configured through custom fields, forms, pipelines, tasks, calendars and workflows. A volunteer application can create a contact, capture interests, route the person to a coordinator, create a task and send onboarding communication.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              But this is configuration, not a dedicated volunteer-management module. If the nonprofit needs volunteer hour tracking, shift management, volunteer portals, credentialing or specialized scheduling at scale, a specialized volunteer platform may be more appropriate.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Nonprofit use case</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A community organization creates a volunteer application with fields for preferred program, availability and location. A workflow assigns the volunteer to the appropriate coordinator and creates a task. The coordinator moves the volunteer through Applied → Screening → Approved → Onboarding → Active.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL can support event and volunteer workflows effectively when the nonprofit needs structured coordination rather than a specialized volunteer-management system. The more advanced the volunteer program, the more important it becomes to compare dedicated tools.
            </p>

            {/* Section 10: Security, Governance */}
            <h2 id="security-governance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. Security, Scalability, Data Governance and Ease of Use
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why this deserves attention</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Security and scalability are not features a nonprofit should check at the end of a vendor demo. They determine whether the CRM can remain trustworthy as more staff, supporters, integrations and processes are added.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Usability matters for the same reason. A CRM that staff do not consistently use will not produce reliable data. A advanced system with poor adoption can be less useful than a simpler system with strong discipline.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What nonprofits should check</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>User permissions and role-based access.</li>
              <li>Communication consent and suppression management.</li>
              <li>Data-quality rules and duplicate prevention.</li>
              <li>Credential and integration security.</li>
              <li>Documentation and governance.</li>
              <li>Scalability of records and workflows.</li>
              <li>Ease of training and adoption.</li>
              <li>Backup, migration and export needs.</li>
              <li>Vendor support and setupation resources.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How leading nonprofit CRMs approach governance</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Bloomerang lists customizable permissions, duplicate management and data stewardship features, while enterprise platforms such as Salesforce and Blackbaud emphasize broader governance, security and extensibility. Salesforce's nonprofit capability map also shows how fundraising, grants, volunteer management, program management and marketing can coexist within a broader platform architecture.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How GoHighLevel fits</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel supports user permissions and contact-level communication preferences, and its workflow and integration tooling includes credential controls. Its custom-field architecture can create a structured way your data is organized when set uped carefully. Current documentation shows masked webhook credentials and structured custom fields.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The bigger issue for a nonprofit is governance. Someone needs to own the way your data is organized, workflow changes, integrations and user permissions. GHL's flexibility can be an advantage, but it means the organization should not let every staff member independently create fields, tags and automations.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The bottom line</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose the CRM your team can govern and actually use. A nonprofit should evaluate not just what GHL or another platform can technically do, but who will maintain the system six months after launch.
            </p>

            {/* Section 11: Comparison Table */}
            <h2 id="comparison-table" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Nonprofit CRM Feature Comparison: GoHighLevel vs Purpose-Built Platforms
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The following comparison is capability-based rather than a star-rating exercise. Strong means the platform is designed around the capability. Moderate means the capability exists but may not be as specialized. Configured means the nonprofit can achieve the workflow through platform configuration. Integration means an external tool may be needed for the strongest setupation.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Salesforce Nonprofit Cloud</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Blackbaud Raiser's Edge NXT</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Bloomerang</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">DonorPerfect</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Neon CRM</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Buyer note</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.salesforce}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.blackbaud}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bloomerang}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.donorperfect}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.neon}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.buyerNote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is not a universal winner table. Salesforce Nonprofit Cloud, Blackbaud, Bloomerang, DonorPerfect and Neon CRM are specialized around nonprofit use cases to different degrees. GoHighLevel is strongest when the organization values flexible CRM architecture, communication and automation and is comfortable configuring the system around its processes.
            </p>

            {/* Section 12: When GHL Fits */}
            <h2 id="when-ghl-fits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Does GoHighLevel Make Sense for a Nonprofit?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel can be a strong fit when the nonprofit's biggest day-to-day problem is not the absence of a specialized fundraising database but the fragmentation of communication, forms, follow-up and supporter data.
            </p>

            <div className="space-y-2 mb-6">
              {whenGHLFits.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-[#1A2236]">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Organizations willing to use a hybrid stack:</strong> A nonprofit does not have to choose between "GHL for everything" and "GHL for nothing." It can retain a specialized donation or accounting system and use GHL as the communication, automation and supporter-supporter-engagement system.
            </p>

            {/* Section 13: When Not Right */}
            <h2 id="when-not-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When GoHighLevel May Not Be the Right Choice
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Honest evaluation means knowing when another platform is more appropriate.
            </p>

            <div className="space-y-2 mb-6">
              {whenNotRight.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-[#1A2236]">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 3 - GHL Scale Up */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">If your nonprofit has decided that GoHighLevel is worth evaluating, the next step is to design the CRM around your supporter journeys—not simply switch on features.</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up can help scope the setupation around the processes you actually need.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                GHL Scale Up →
              </Link>
            </div>

            {/* Section 14: Can GHL Used */}
            <h2 id="can-ghl-used" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Be Used as a Nonprofit CRM?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, but with an important qualification: GoHighLevel can support many nonprofit CRM and supporter-engagement workflows, particularly contact management, segmentation, forms, communication, automation, calendars, pipelines, payments and integrations. It is not a specialized nonprofit fundraising CRM, so organizations with advanced fundraising, accounting, grant, major-gift or specialized reporting needs should evaluate dedicated nonprofit platforms alongside it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL Scale Up's own nonprofit guide uses a similar positioning: GHL is most useful as a communication and donor-supporter-engagement system for nonprofits that want to consolidate scattered tools, while organizations needing deep donor-advised fund tracking, more involved pledge management or specialized fundraising reporting may need a specialized platform.
            </p>

            {/* Section 15: How to Decide */}
            <h2 id="how-to-decide" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Decide Which Nonprofit CRM Is Right for You
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start with workflows, not software names. Recent nonprofit discussions make the same practical point: comparing feature lists without defining the work to be done can lead organizations toward tools that look impressive but do not solve their operating problems.
            </p>

            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Map your supporter lifecycle from first interaction to long-term stewardship.</li>
              <li>List every place donor, volunteer, event and communication data currently lives.</li>
              <li>Identify which functions are mission-critical: fundraising, communication, programs, volunteers, events or grants.</li>
              <li>Separate needs that must be native from those that can be integrated.</li>
              <li>Define the reports leadership actually needs.</li>
              <li>Identify the workflows staff perform repeatedly every week.</li>
              <li>Estimate the technical capacity available to maintain the CRM.</li>
              <li>Decide whether you need a specialized fundraising way your data is organized or a flexible automation layer.</li>
              <li>Run a realistic setupation test with real scenarios before committing.</li>
              <li>Document who will own the CRM after launch.</li>
            </ol>

            {/* Section 16: Most Important */}
            <h2 id="most-important" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Most Important Part of a Nonprofit CRM Is Not a Feature
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The best nonprofit CRM is the one that reliably turns supporter information into useful action. A donor database without communication is just storage. Communication without segmentation becomes generic outreach. Automation without clean data creates mistakes faster. Reporting without a reliable way your data is organized creates false confidence.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The features work as a chain: Constituent data → segmentation → communication → automation → fundraising and engagement → reporting → improvement.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is particularly interesting within that chain because it is designed around CRM, communication and automation rather than nonprofit fundraising accounting. That makes it potentially powerful for nonprofits whose biggest challenge is day-to-day fragmentation, while also making it important to identify the areas where a specialized nonprofit platform should remain the system of record.
            </p>

            {/* Section 17: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About Nonprofit CRM Features
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

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to evaluate the right CRM for your nonprofit?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps nonprofits design and implement CRM systems around their actual supporter journey and operational model.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel implementation specialists · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up helps nonprofits implement GoHighLevel systems designed around their actual constituent journey and operational model. Our approach focuses on CRM setup, workflow automation, donor communication, volunteer coordination and migration.
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
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">Nonprofit CRM Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of August 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="text-xs font-bold tracking-wider uppercase text-white/40 mb-3 flex items-center gap-2">
                <Share2 className="w-3 h-3" />
                Share This Guide
              </div>
              <div className="flex gap-2">
                <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}