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
  Lightbulb,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function BestCRMForNonprofitsClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'quick-answer',
        'what-is-nonprofit-crm',
        'why-need-crm',
        'what-to-look-for',
        'best-crm-software',
        'comparison-table',
        'which-crm-by-type',
        'specialized-vs-general',
        'gohighlevel-for-nonprofits',
        'automation',
        'common-mistakes',
        'how-to-choose',
        'implementation',
        'cost',
        'faq',
        'final-recommendation'
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
      q: "What is the best CRM for a nonprofit organisation?",
      a: "There is no universal winner. Salesforce and Blackbaud are strong for complex or enterprise nonprofit operations, Bloomerang and Neon One are strong nonprofit-specific options for donor and fundraising workflows, and HubSpot, Zoho and GoHighLevel can be better fits when marketing automation, flexibility and integration are priorities."
    },
    {
      q: "What CRM is best for small nonprofits?",
      a: "Small nonprofits should prioritise ease of use, total cost, support and the ability to run core workflows without heavy technical administration. Neon One, Bloomerang, Zoho, HubSpot and GoHighLevel are all worth evaluating depending on the organisation's requirements."
    },
    {
      q: "Is Salesforce free for nonprofits?",
      a: "Eligible nonprofits can receive 10 Salesforce Nonprofit Cloud or Sales/Service Cloud licenses at no cost through the Power of Us program, subject to eligibility. Additional products, licenses and implementation can still create costs."
    },
    {
      q: "Is GoHighLevel suitable for nonprofits?",
      a: "It can be suitable when the nonprofit needs CRM, forms, communication, calendars and workflow automation in one system. It is less suitable as a standalone solution when the organisation requires highly specialised fundraising, grantmaking or nonprofit data structures."
    },
    {
      q: "What features should a nonprofit CRM have?",
      a: "At minimum, evaluate constituent management, donation history, fundraising, segmentation, communication, automation, reporting, integrations, permissions and data migration. Add volunteer, membership, grant or event functionality if those are core processes."
    },
    {
      q: "What is the difference between a nonprofit CRM and a regular CRM?",
      a: "A nonprofit CRM is designed around constituent relationships and often includes fundraising, donor stewardship, campaigns, volunteer or program workflows. A general-purpose CRM can manage relationships well but may require customisation or integrations for specialised nonprofit processes."
    },
    {
      q: "How much does nonprofit CRM software cost?",
      a: "Costs range widely. Current examples include Neon CRM from $99/month, Bloomerang CRM from $125/month, Zoho CRM from $14/user/month annually for Standard, and Salesforce Nonprofit Cloud from $60/user/month for Enterprise nonprofit pricing. Total cost depends on modules, users, implementation, integrations and other services."
    },
    {
      q: "Can a nonprofit use HubSpot as its CRM?",
      a: "Yes. HubSpot provides a free CRM foundation and a nonprofit discount program for eligible organisations in specified regions. It is especially relevant for nonprofits with strong marketing, content and engagement requirements."
    },
    {
      q: "Do nonprofits need a CRM for donor management?",
      a: "Not every very small organisation needs a dedicated CRM immediately. However, once donor records, communications, campaigns and follow-ups become difficult to manage across spreadsheets and disconnected tools, a centralised CRM can significantly improve visibility and consistency."
    },
    {
      q: "How long does it take to implement a nonprofit CRM?",
      a: "There is no universal timeline. A simple CRM with clean data can be configured relatively quickly, while enterprise implementations involving migration, integrations, custom objects, permissions and complex fundraising workflows can take substantially longer. The complexity of the organisation's processes matters more than the number of contacts alone."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer: What Is the Best CRM for a Nonprofit?' },
    { id: 'what-is-nonprofit-crm', title: 'What Is a CRM for Nonprofit Organisations?' },
    { id: 'why-need-crm', title: 'Why Do Nonprofits Need a CRM?' },
    { id: 'what-to-look-for', title: 'What Should a Nonprofit Look for in CRM Software?' },
    { id: 'best-crm-software', title: 'Best CRM Software for Nonprofit Organisations in 2026' },
    { id: 'comparison-table', title: 'CRM Comparison Table' },
    { id: 'which-crm-by-type', title: 'Which CRM Is Best for Different Types of Nonprofits?' },
    { id: 'specialized-vs-general', title: 'Nonprofit-Specific CRM vs General-Purpose CRM' },
    { id: 'gohighlevel-for-nonprofits', title: 'Can GoHighLevel Be Used as a CRM for Nonprofits?' },
    { id: 'automation', title: 'How Nonprofits Can Use CRM Automation' },
    { id: 'common-mistakes', title: 'Common Mistakes Nonprofits Make When Choosing a CRM' },
    { id: 'how-to-choose', title: 'How to Choose the Right CRM for Your Nonprofit' },
    { id: 'implementation', title: 'CRM Implementation for Nonprofits' },
    { id: 'cost', title: 'How Much Does a Nonprofit CRM Cost?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'final-recommendation', title: 'Final Recommendation: Choosing the Best CRM for Your Nonprofit' }
  ];

  const comparisonData = [
    { crm: 'Salesforce Nonprofit Cloud', bestFor: 'Complex / large nonprofits', donor: 'Excellent', fundraising: 'Excellent', marketing: 'Excellent', implementation: 'High', pricing: '$60–$100/user/month listed nonprofit editions; grants separate' },
    { crm: 'Blackbaud', bestFor: 'Enterprise fundraising', donor: 'Excellent', fundraising: 'Excellent', marketing: 'Strong', implementation: 'High', pricing: 'Quote-based for enterprise CRM' },
    { crm: 'Bloomerang', bestFor: 'Donor retention + fundraising', donor: 'Excellent', fundraising: 'Strong', marketing: 'Strong', implementation: 'Moderate', pricing: 'CRM from $125/mo; modules/products vary' },
    { crm: 'Neon One', bestFor: 'Small/growing nonprofits', donor: 'Strong', fundraising: 'Strong', marketing: 'Strong', implementation: 'Moderate', pricing: 'CRM from $99/mo; revenue-based' },
    { crm: 'HubSpot', bestFor: 'Marketing-led nonprofits', donor: 'Good', fundraising: 'Moderate', marketing: 'Excellent', implementation: 'Moderate', pricing: 'Free + paid tiers; nonprofit discount available' },
    { crm: 'Dynamics 365', bestFor: 'Microsoft-centric enterprises', donor: 'Configurable', fundraising: 'Configurable', marketing: 'Excellent', implementation: 'High', pricing: 'Product/module/user based; validate nonprofit pricing' },
    { crm: 'Zoho CRM', bestFor: 'Budget-conscious teams', donor: 'Configurable', fundraising: 'Configurable', marketing: 'Strong', implementation: 'Moderate', pricing: '$14–$52/user/month annually for main editions' },
    { crm: 'GoHighLevel', bestFor: 'Automation-led small/mid nonprofits', donor: 'Good for configured workflows', fundraising: 'Moderate / integration-led', marketing: 'Excellent', implementation: 'Moderate', pricing: 'Plan + usage/integration costs; verify current pricing' }
  ];

  const specializedVsGeneral = [
    { consideration: 'Fundraising', specialized: 'Usually deeper and purpose-built', general: 'Often requires configuration/integration' },
    { consideration: 'Donor management', specialized: 'Purpose-built constituent models', general: 'Flexible but may need custom fields' },
    { consideration: 'Marketing automation', specialized: 'Varies by vendor', general: 'Often very strong' },
    { consideration: 'Customisation', specialized: 'Depends on platform', general: 'Often broad' },
    { consideration: 'Implementation', specialized: 'Can be complex', general: 'Can be simpler for basic use cases' },
    { consideration: 'Reporting', specialized: 'Nonprofit metrics often built in', general: 'Highly configurable' },
    { consideration: 'Cost', specialized: 'Ranges from affordable to enterprise', general: 'Can be lower at entry level' },
    { consideration: 'Scalability', specialized: 'Strong for nonprofit complexity', general: 'Strong, but architecture matters' }
  ];

  const whatToLookFor = [
    { title: 'Donor and Constituent Management', items: ['Contact and organisation records', 'Donation and transaction history', 'Custom fields for mission-specific information', 'Relationship history and notes', 'Segmentation and lists', 'Communication preferences', 'Household or organisation relationships where relevant', 'Major-donor or high-value supporter workflows'] },
    { title: 'Fundraising and Donation Management', items: ['Recurring donations', 'Online giving forms', 'Campaign attribution', 'Peer-to-peer fundraising', 'Major gifts', 'Pledges', 'Payment processing', 'Donor acknowledgements'] },
    { title: 'Marketing and Communication Automation', items: ['Email campaigns and newsletters', 'SMS communication where appropriate and consented', 'Automated reminders and follow-ups', 'Two-way conversations', 'Templates and reusable communication', 'Segmentation by donor or supporter behaviour'] },
    { title: 'Reporting and Analytics', items: ['Donor acquisition', 'Donor retention and reactivation', 'Recurring donor growth', 'Average donation', 'Campaign performance', 'Fundraising pipeline', 'Engagement and communication performance', 'Volunteer participation'] },
    { title: 'Integrations', items: ['Accounting software', 'Payment processor', 'Event platform', 'Website forms', 'Email system', 'Fundraising application'] },
    { title: 'Security, Permissions and Data Governance', items: ['User permissions', 'Role-based access', 'Administrative controls', 'Data retention policies', 'Backups and exports', 'Access reviews'] }
  ];

  const automationWorkflows = [
    { title: 'New donor acknowledgement', trigger: 'donation/form submission → create/update contact → record source → send acknowledgement → wait → send impact communication → add to donor segment → create staff task if high-value' },
    { title: 'First-time donor nurturing', trigger: 'first donation → thank-you → educational/impact sequence → engagement check → recurring-giving invitation → track response' },
    { title: 'Lapsed donor reactivation', trigger: 'no donation or engagement for a defined period → re-engagement email/SMS → reminder → response-based branching → assign staff follow-up' },
    { title: 'Event registration', trigger: 'registration form → confirmation → calendar/event details → reminder → attendance update → post-event thank-you → future engagement segment' },
    { title: 'Volunteer onboarding', trigger: 'volunteer application → acknowledgement → screening/task checklist → orientation reminder → assignment → follow-up survey' },
    { title: 'Campaign follow-up', trigger: 'campaign interaction → segment by action → personalised follow-up → track engagement → escalate high-intent supporters to staff' },
    { title: 'Milestone communication', trigger: 'relevant date or constituent milestone → personalised message → record engagement → update relationship timeline' }
  ];

  const mistakes = [
    'Choosing only on monthly subscription price.',
    'Assuming the platform with the most features is automatically the best fit.',
    'Ignoring implementation and migration costs.',
    'Failing to map existing donor, volunteer and communication processes.',
    'Choosing a CRM without checking payment, website, accounting and event integrations.',
    'Migrating dirty or duplicated data without a cleanup plan.',
    'Not defining who owns CRM data and system governance.',
    'Buying without defining the reports leadership needs.',
    'Over-customising before the basic process is stable.',
    'Underestimating staff training and adoption.',
    'Automating communications without clear consent and communication rules.',
    'Failing to plan for future database growth and process complexity.'
  ];

  const howToChooseSteps = [
    'Define your constituent types',
    'Map current processes',
    'Identify critical integrations',
    'Define fundraising requirements',
    'Define communication requirements',
    'Identify automation opportunities',
    'Calculate total cost of ownership',
    'Evaluate implementation complexity',
    'Test with real workflows',
    'Plan migration and training'
  ];

  const implementationSteps = [
    'Data audit and cleanup',
    'Duplicate identification and merging',
    'Field and object mapping',
    'CRM architecture',
    'Pipeline or journey design',
    'Tags, lists and segmentation rules',
    'Donation and campaign structure',
    'Automation design',
    'Website and form integration',
    'Payment and communication integrations',
    'Permissions and access controls',
    'Testing with realistic records',
    'Staff training',
    'Documentation and SOPs',
    'Launch and post-launch optimisation'
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
          <span className="text-[#1A2236] font-medium">Best CRM for Nonprofits</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Donor Management</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Best CRM for Nonprofit Organisations:<br />
            <span className="text-[#F8D000]">An Honest 2026 Comparison</span>
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
            Choosing the best CRM for nonprofit organisations is not simply a matter of comparing feature lists. A charity, foundation, association or community organisation may need to manage donors, volunteers, members, beneficiaries, sponsors, events and recurring giving from the same relationship database. At the same time, nonprofit teams usually have tighter budgets and fewer technical resources than commercial organisations.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            The right platform therefore depends on the organisation's operating model. A large nonprofit running complex fundraising programs may need a purpose-built system such as Salesforce Nonprofit Cloud or Blackbaud. A growing organisation may prefer Bloomerang or Neon One for nonprofit-specific workflows. A smaller team that primarily needs contact management, forms, communication and automation may also consider a general-purpose CRM such as HubSpot, Zoho or GoHighLevel.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            This guide compares the major options available in 2026, explains what nonprofit CRM software should actually do, and shows how to evaluate total cost and implementation effort before committing.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                There is no single best nonprofit CRM for every organisation.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                For small and mid-sized nonprofits that want to bring CRM, donor communication, forms, calendars, email, SMS and workflow automation into one system, GoHighLevel deserves to be one of the first platforms evaluated. It is particularly strong when the organisation's biggest problem is fragmented tools and manual follow-up rather than highly specialised grant or enterprise fundraising administration. For organisations with more specialised requirements, Salesforce Nonprofit Cloud, Blackbaud, Bloomerang and Neon One can be stronger fits. HubSpot, Zoho and Microsoft Dynamics 365 also have clear use cases.
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

            {/* CTA 1 - After TOC */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Need help designing the CRM architecture before choosing a platform?</strong>
              </p>
              <Link href="/services/crm-setup" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Explore GHL Scale Up
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: What Is Nonprofit CRM */}
            <h2 id="what-is-nonprofit-crm" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is a CRM for Nonprofit Organisations?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A nonprofit CRM is a central system for storing and activating information about the people and organisations connected to a mission. In a commercial CRM, the central relationship is often a prospect becoming a customer. In a nonprofit CRM, one person can be a donor, volunteer, event attendee, member, advocate and beneficiary at different points in the relationship.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That distinction matters because nonprofit teams need more than a contact list. They need a usable history of interactions, contributions, event participation, communication preferences, campaign engagement and other relationship signals.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">EXAMPLE: FIRST-TIME DONOR JOURNEY</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li>A supporter completes a donation form.</li>
                <li>The CRM creates a new constituent record or updates an existing one.</li>
                <li>The contribution is recorded against the donor's history and campaign.</li>
                <li>The donor is placed into the appropriate segment.</li>
                <li>An acknowledgement email or receipt is triggered.</li>
                <li>A follow-up communication explains the impact of the donation.</li>
                <li>The CRM records engagement with subsequent messages.</li>
                <li>The supporter may later enter a recurring-giving, event or re-engagement journey.</li>
              </ol>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The value is not the individual automation step. The value comes from having the data, rules and communication history connected so the organisation can manage the relationship consistently.
            </p>

            {/* Section 2: Why Need CRM */}
            <h2 id="why-need-crm" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Do Nonprofits Need a CRM?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Many nonprofit organisations begin with spreadsheets, shared inboxes, payment processor exports and separate email tools. That approach can work when the database is small. The problem appears when the organisation grows and the same person begins appearing in several systems.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Donor information becomes fragmented across spreadsheets and payment platforms.</li>
              <li>Duplicate records make it difficult to understand the real donor relationship.</li>
              <li>Follow-ups depend on individual staff members remembering what happened.</li>
              <li>Campaign performance becomes difficult to attribute because donation and communication data are separated.</li>
              <li>Volunteer information sits in a different system from donor or member records.</li>
              <li>Leadership reporting becomes a manual exercise involving spreadsheet consolidation.</li>
              <li>Staff spend time moving data between tools instead of communicating with supporters.</li>
              <li>Important relationship history can disappear when an employee leaves.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A CRM should reduce these problems by creating a shared source of relationship data. It does not automatically fix bad processes, however. A poorly designed CRM can simply turn a spreadsheet problem into a more expensive database problem. Data architecture, field definitions, segmentation and ownership therefore matter as much as the software license.
            </p>

            {/* Section 3: What to Look For */}
            <h2 id="what-to-look-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should a Nonprofit Look for in CRM Software?
            </h2>

            <div className="space-y-4 mb-6">
              {whatToLookFor.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.title}</h3>
                  <ul className="space-y-0.5 text-sm text-[#5C6880] list-disc list-inside">
                    {item.items.map((subItem, subIdx) => (
                      <li key={subIdx}>{subItem}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Section 4: Best CRM Software */}
            <h2 id="best-crm-software" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Best CRM Software for Nonprofit Organisations in 2026
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The following shortlist focuses on platforms that have a credible role in nonprofit CRM selection rather than simply appearing in generic software lists. Each platform solves a different part of the problem.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">1. GoHighLevel</h3>

            <h4 className="text-base font-bold text-[#1C2E4A] mt-4 mb-2">Why GoHighLevel Can Be a Strong Nonprofit CRM Choice</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The strongest argument for GoHighLevel is not that it has every specialised nonprofit feature. It is that a nonprofit can use one connected platform to manage the parts of the supporter journey that are usually spread across multiple tools. For a lean team, that difference can matter more than a long feature checklist.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Consider a typical supporter journey: a person discovers a campaign, submits a form, makes a donation, receives an immediate acknowledgement, gets an impact update, registers for an event and later receives a recurring-giving invitation. In a fragmented setup, each stage may live in a different system. In GHL, these actions can be connected through contact records, tags, custom fields, pipelines, forms and workflows.
            </p>

            <h4 className="text-base font-bold text-[#1C2E4A] mt-4 mb-2">Where GHL Has a Clear Advantage</h4>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Automation is native to the operating model. A form submission can trigger a workflow. A pipeline-stage change can create a task. A missed appointment can trigger a follow-up. A donor can enter a re-engagement sequence based on defined criteria.</li>
              <li>GHL brings communication channels closer to the CRM. Email and SMS can be tied to contact records and workflow logic.</li>
              <li>GHL is flexible. Nonprofits do not all organise their relationships the same way. Custom fields, tags, pipelines and workflows allow the system to be designed around the organisation.</li>
              <li>GHL can reduce tool sprawl. When a nonprofit is paying separately for a CRM, email marketing platform, SMS tool, form builder, appointment scheduler and automation connector, the combined cost and administration can become significant.</li>
            </ul>

            <h4 className="text-base font-bold text-[#1C2E4A] mt-4 mb-2">Where GHL Should Not Be Oversold</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If your nonprofit's core requirement is sophisticated grant management, complex planned giving, donor-advised fund tracking, advanced volunteer portals or enterprise fundraising administration, a dedicated nonprofit CRM may be a better foundation. GHL should be selected because it fits the organisation's actual workflow, not simply because it can be configured to imitate another platform.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">BEST FOR</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Small and mid-sized nonprofits that want an integrated CRM, donor communication, forms, calendars, email, SMS and workflow automation without assembling several separate tools.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is one of the strongest general-purpose CRM and automation options for nonprofits whose priority is operational consolidation. It combines CRM and pipelines with forms, funnels, email, SMS, calendars, automation and integrations. That means a nonprofit can capture a supporter, segment the record, trigger an acknowledgement, schedule follow-up, assign a staff task and measure engagement inside one connected workflow instead of moving data between multiple systems.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For a deeper dive into how nonprofits use GoHighLevel: <Link href="/blog/gohighlevel-for-nonprofits" className="text-[#0E9BF0] hover:underline">GoHighLevel for Nonprofits: Donor Management and Fundraising Automation →</Link>
              </p>
            </div>

            {/* CTA 2 - After GoHighLevel Section */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">See how a structured GHL CRM setup can map your nonprofit's processes into pipelines, fields and permissions.</strong>
              </p>
              <Link href="/services/crm-setup" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Explore GHL Scale Up
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">2. Salesforce Nonprofit Cloud</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Mid-sized and large nonprofits that need a purpose-built nonprofit data model, fundraising, program management, volunteer management and extensive customisation.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Salesforce Nonprofit Cloud is one of the strongest choices when the organisation's requirements extend beyond simple donor tracking. Salesforce currently lists Nonprofit Cloud Enterprise at $60 USD per user per month when billed annually and Unlimited at $100 per user per month. Eligible nonprofits can also receive 10 Salesforce Nonprofit Cloud or Sales/Service Cloud licenses at no cost through the Power of Us program, subject to eligibility.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Its strengths include a nonprofit data model, fundraising, programs and outcomes, volunteer management, automation and a broad ecosystem. Salesforce also offers dedicated grantmaking editions, with current listed prices of $175 and $225 per user per month for Enterprise and Unlimited grantmaking editions respectively.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The trade-off is implementation complexity. Salesforce can be highly adaptable, but that flexibility creates a need for architecture, configuration, governance, data migration and training. For a small nonprofit with simple requirements, that may be more platform than necessary.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">3. Blackbaud</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Large nonprofits, higher education, healthcare organisations and institutions with complex fundraising operations.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Blackbaud's enterprise fundraising CRM is positioned specifically for large-scale fundraising and supports complex giving programs including major and planned gifts. Blackbaud states that its enterprise fundraising CRM is designed for higher education, healthcare, international NGOs and large nonprofits. Pricing is quote-based rather than publicly listed for the enterprise CRM.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Its strongest argument is depth in fundraising. It is less compelling if the organisation simply wants a lightweight CRM for contacts, forms and automated communication.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">4. Bloomerang</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Nonprofits prioritising donor management, retention, fundraising and volunteer engagement without wanting a general-purpose enterprise CRM.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Bloomerang currently lists its CRM from $125 per month billed annually, fundraising from $40 per month when purchased as part of the bundle, and volunteer management from $119 per month. Its CRM includes donor management, predictive giving insights, marketing and engagement, reporting, major-gift management, grant tracking and membership management.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The platform is attractive when donor retention and fundraising are central to the organisation's workflow. Its fundraising product also includes donation forms, events, recurring donations, text fundraising and peer-to-peer capabilities.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">5. Neon One / Neon CRM</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Small and growing nonprofits that want nonprofit-specific CRM, fundraising and communication capabilities with revenue-based pricing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Neon CRM currently starts at $99 per month. Neon One describes its model as revenue-based rather than record-based, with unlimited contacts and additional modules for areas such as memberships, events and volunteers. Core capabilities include supporter profiles, reporting, automated workflows, grant management, campaigns and forms, peer-to-peer fundraising, recurring gifts, payment processing, email marketing and text messaging.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">6. HubSpot</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Nonprofits that place strong emphasis on marketing, communications, CRM usability and inbound engagement.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HubSpot provides a free CRM foundation and paid customer-platform tiers. Its current public pricing lists a free tier, Starter from $7 per seat per month on annual billing, Professional from $1,300 per month with six seats, and Enterprise from $4,700 per month with eight seats.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HubSpot also has a nonprofit program. Eligible nonprofits in North America, Australia and New Zealand can receive a 40% discount on current list prices for net-new Professional or Enterprise products under the program's conditions.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">7. Microsoft Dynamics 365</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Larger organisations already invested in Microsoft technology that need enterprise CRM, data, reporting and integration capabilities.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Dynamics 365 can be compelling when the nonprofit already uses Microsoft 365, Power Platform, Azure or related enterprise systems. Its advantage is less about being a ready-made donor database and more about building an integrated operational environment.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">8. Zoho CRM</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Smaller organisations looking for affordable CRM foundations, automation and customisation.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zoho CRM offers a free edition for up to three users. Its public pricing currently lists Standard at $14 per user per month annually, Professional at $23, Enterprise at $40 and Ultimate at $52.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Its strengths include workflows, forms, custom modules, reporting, process automation, APIs and a broad application ecosystem.
            </p>

            {/* Section 5: Comparison Table */}
            <h2 id="comparison-table" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              CRM Comparison Table
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Note: Ratings are qualitative editorial assessments based on the product positioning and capabilities reviewed for this guide, not vendor-issued scores. Pricing changes frequently and should be confirmed with the vendor before purchase.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">CRM</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best For</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Donor Management</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fundraising</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Marketing Automation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Implementation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Pricing Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.crm}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.donor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.fundraising}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.marketing}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.implementation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.pricing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 6: Which CRM by Type */}
            <h2 id="which-crm-by-type" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which CRM Is Best for Different Types of Nonprofits?
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best CRM for a Small Nonprofit</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a small nonprofit, ease of adoption and total cost usually matter more than having hundreds of advanced features. Neon One, Bloomerang, Zoho and GoHighLevel can all be considered depending on whether the organisation prioritises specialised nonprofit functionality or automation and flexibility.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best CRM for a Growing Nonprofit</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A growing nonprofit needs to think one stage ahead. Neon One and Bloomerang are strong candidates for nonprofit-specific growth, while HubSpot, Zoho and GoHighLevel become interesting when marketing automation and integration are central to growth.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best CRM for a Large Nonprofit</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Salesforce Nonprofit Cloud, Blackbaud and Dynamics 365 are more appropriate starting points for large or operationally complex organisations.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best CRM for Donor Management</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Bloomerang, Blackbaud, Salesforce Nonprofit Cloud and Neon One are the strongest candidates when donor management is the primary requirement. GoHighLevel can support donor journeys, but it should not be treated as a substitute for every specialised fundraising function.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best CRM for Fundraising</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For sophisticated fundraising operations, Blackbaud and Salesforce are strong choices. Bloomerang and Neon One are compelling for organisations that need integrated fundraising without enterprise-level complexity.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best CRM for Nonprofit Marketing Automation</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HubSpot and GoHighLevel stand out when communication automation is central. HubSpot is particularly strong for inbound marketing and content-led engagement. GoHighLevel is attractive when the organisation wants forms, pipelines, email, SMS, booking and workflows in one operational environment.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best Affordable CRM for Nonprofits</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Affordability depends on total cost, not just subscription price. Zoho and the free foundation of HubSpot can be inexpensive starting points. Neon One and Bloomerang provide nonprofit-specific functionality at lower entry points than many enterprise systems. Salesforce's nonprofit program can also materially change the economics for eligible organisations.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best CRM for Organisations with Limited Technical Resources</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Bloomerang, Neon One and HubSpot are worth evaluating, while GoHighLevel can be effective when configured properly by an implementation partner.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Best CRM for Extensive Customisation</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Salesforce is the strongest candidate in this shortlist when the organisation requires extensive data architecture and customisation. Dynamics 365 and Zoho can also support significant configuration.
            </p>

            {/* Section 7: Specialized vs General */}
            <h2 id="specialized-vs-general" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Nonprofit-Specific CRM vs General-Purpose CRM
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The decision between a specialised nonprofit CRM and a general-purpose CRM is one of the most important choices in the buying process.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Consideration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Nonprofit-Specific CRM</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">General-Purpose CRM</th>
                  </tr>
                </thead>
                <tbody>
                  {specializedVsGeneral.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.consideration}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.specialized}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.general}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose a specialised nonprofit CRM when fundraising, donor stewardship, grantmaking, volunteer management or nonprofit reporting are core operational requirements. Choose a general-purpose CRM when your main challenge is relationship management, marketing automation, forms, communication and integration, and you are comfortable connecting specialised systems where necessary.
            </p>

            {/* Section 8: GoHighLevel for Nonprofits */}
            <h2 id="gohighlevel-for-nonprofits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Be Used as a CRM for Nonprofits?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, but the answer depends on what the nonprofit expects its CRM to do. GoHighLevel can be a viable CRM for nonprofits that need to centralise contact management, pipelines, forms, landing pages, calendars, email, SMS, workflow automation, segmentation and follow-up.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The strongest use case is operational consolidation. Imagine a nonprofit where a supporter completes a website form, books an event or volunteer call, receives a confirmation, enters a communication sequence, is assigned to a staff member and later receives a re-engagement message. GoHighLevel can connect these steps into workflows rather than requiring staff to move information manually.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The platform also becomes more interesting when the nonprofit has a lean team. Instead of purchasing a separate CRM, email automation tool, SMS platform, booking system and funnel builder, the organisation can evaluate whether a unified system reduces tool sprawl.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              However, GoHighLevel should not be positioned as a universal nonprofit CRM replacement. If the organisation needs sophisticated donor accounting, complex grant management, specialised moves management, advanced planned giving, deep volunteer administration or a mature nonprofit data model, a dedicated nonprofit platform may be the safer choice.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The correct decision is therefore not 'Is GHL a nonprofit CRM?' but 'Which nonprofit processes can GHL manage well, and which specialised processes should remain elsewhere?'
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For a deeper dive into how nonprofits use GoHighLevel specifically: <Link href="/blog/gohighlevel-for-nonprofits" className="text-[#0E9BF0] hover:underline">GoHighLevel for Nonprofits: Donor Management and Fundraising Automation →</Link>
              </p>
            </div>

            {/* Section 9: Automation */}
            <h2 id="automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Nonprofits Can Use CRM Automation
            </h2>

            <div className="space-y-3 mb-6">
              {automationWorkflows.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5C6880] font-mono">{item.trigger}</p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These workflows illustrate why CRM architecture matters. Automation should begin with a clear trigger, use consistent fields and segments, communicate through the appropriate channel and produce a measurable outcome.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Want to see how GHL workflow automation can be structured around real nonprofit triggers and journeys? <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
              </p>
            </div>

            {/* CTA 3 - After Automation Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Want to see how GHL workflow automation can be structured around real nonprofit triggers and journeys?</strong>
              </p>
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Explore GHL Scale Up
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 10: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mistakes Nonprofits Make When Choosing a CRM
            </h2>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {mistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most expensive mistake is often not choosing the wrong platform. It is implementing the right platform around the wrong process.
            </p>

            {/* Section 11: How to Choose */}
            <h2 id="how-to-choose" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Choose the Right CRM for Your Nonprofit
            </h2>

            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              {howToChooseSteps.map((item, idx) => (
                <li key={idx}><strong className="text-[#1A2236]">{item}</strong></li>
              ))}
            </ol>

            {/* Section 12: Implementation */}
            <h2 id="implementation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              CRM Implementation for Nonprofits
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Buying a CRM is only the beginning. The implementation determines whether the system becomes a useful operating layer or another database staff members avoid.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {implementationSteps.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For GoHighLevel specifically, architecture should be decided before workflows are built. Configure the system around the organisation's real operating model, not around a generic template.
            </p>

            {/* Section 13: Cost */}
            <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Much Does a Nonprofit CRM Cost?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The software subscription is only one part of the cost. A realistic nonprofit CRM budget should consider:
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Software + implementation + data migration + integrations + training + payment processing + add-ons/modules + ongoing administration.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For example, Salesforce currently lists Nonprofit Cloud Enterprise at $60 per user per month and Unlimited at $100 per user per month, billed annually, while eligible nonprofits may qualify for 10 free licenses through the Power of Us program. Bloomerang lists CRM from $125 per month and Neon CRM from $99 per month, while Zoho's main paid CRM editions range from $14 to $52 per user per month on annual billing.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Those figures are useful for initial comparison, but they are not directly comparable. One platform may bundle fundraising or volunteer tools while another charges separately. One may price per user, another by revenue, another by database size, and another by product modules. This is why total cost of ownership is the better decision metric.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For a full breakdown of GoHighLevel pricing: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
              </p>
            </div>

            {/* Section 14: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions
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

            {/* Section 15: Final Recommendation */}
            <h2 id="final-recommendation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Recommendation: Choosing the Best CRM for Your Nonprofit
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The best CRM for nonprofit organisations is the platform that matches the organisation's fundraising model, constituent relationships, technical capacity and future operating requirements.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If specialised nonprofit functionality is the priority, start with Salesforce Nonprofit Cloud, Blackbaud, Bloomerang and Neon One. If marketing automation and inbound engagement are central, HubSpot deserves serious consideration. If affordability and customisation are important, Zoho can be a practical option. If the organisation already operates deeply inside the Microsoft ecosystem, Dynamics 365 may be a logical enterprise route.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For small and mid-sized nonprofits whose biggest operational problem is fragmented communication, manual follow-up and too many disconnected tools, GoHighLevel should be near the top of the shortlist. It can bring contact management, forms, pipelines, email, SMS, calendars and workflow automation into one system, while still allowing specialised fundraising or accounting tools to remain connected where they are genuinely needed. That makes GHL particularly attractive when the goal is to simplify the technology stack and give a lean team more automation without buying an enterprise nonprofit platform.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before signing a contract, document the organisation's constituent types, current processes, critical integrations, reporting requirements and automation opportunities. Then test those real workflows inside the shortlisted platforms. That approach produces a better decision than comparing feature counts.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A CRM should ultimately make the nonprofit's team more consistent and more informed. It should help staff understand the relationship, act at the right time and spend less effort moving information between disconnected systems. The software is the infrastructure. The process design is what determines whether that infrastructure actually works.
            </p>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need help deciding whether GoHighLevel fits your nonprofit workflow?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Start with a CRM audit and implementation discussion. GHL Scale Up helps nonprofits design and implement GoHighLevel systems around their actual constituent journey.
                </p>
                <Link href="/services/crm-setup" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Explore GHL Scale Up
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

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Nonprofit CRM Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help nonprofits implement GoHighLevel systems designed around their actual constituent journey and operational model.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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