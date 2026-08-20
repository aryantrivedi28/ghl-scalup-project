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

export default function BestCRMForCoachesClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'quick-answer',
        'which-crm',
        'what-should-crm-do',
        'gohighlevel',
        'hubspot',
        'kajabi',
        'clickfunnels',
        'comparison',
        'by-business-model',
        'high-ticket',
        'discovery-calls',
        'pricing-tco',
        'replace-stack',
        'two-platforms',
        'migrate',
        'automate-first',
        'ai-matters',
        'metrics',
        'mistakes',
        'why-gohighlevel',
        'what-ghl-scale-up-brings',
        'verdict',
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
      q: "What is the best CRM for coaches?",
      a: "There is no universal winner. GoHighLevel is particularly strong for lead-generation and discovery-call-driven coaching; HubSpot for sophisticated CRM and team operations; Kajabi for course and membership businesses; and ClickFunnels for funnel-first businesses."
    },
    {
      q: "Is GoHighLevel good for coaches?",
      a: "Yes, especially when the business depends on lead capture, sales pipelines, appointment booking, automated follow-up, funnels and communication."
    },
    {
      q: "Is HubSpot good for coaching businesses?",
      a: "Yes. It is particularly suitable for executive, corporate and team-based coaching businesses that need structured CRM, reporting and sales operations."
    },
    {
      q: "Is Kajabi a CRM?",
      a: "Kajabi includes customer and marketing functionality, but its primary strength is as a platform for experts selling and delivering courses, memberships and digital products."
    },
    {
      q: "Is ClickFunnels a CRM?",
      a: "ClickFunnels includes customer and selling functionality, but its central strength is funnel-based selling and conversion."
    },
    {
      q: "Can GoHighLevel replace Kajabi?",
      a: "It can cover course, membership and community functionality, but a course-first business should compare the actual learning and community experience before replacing Kajabi."
    },
    {
      q: "Can GoHighLevel replace ClickFunnels?",
      a: "For many businesses it can provide both funnel and CRM/automation functionality. Whether migration is worthwhile depends on the existing system and broader operational needs."
    },
    {
      q: "Is GoHighLevel better than HubSpot for coaches?",
      a: "Not universally. GoHighLevel is often attractive for independent and small coaching businesses focused on marketing, sales automation and tool consolidation. HubSpot can be better for larger or more complex B2B coaching organizations."
    },
    {
      q: "Is Kajabi better than GoHighLevel for coaches?",
      a: "If course and membership delivery are the center of the business, Kajabi may be better. If lead generation, CRM, discovery calls and automated follow-up are the center, GoHighLevel may be better."
    },
    {
      q: "What is the best CRM for high-ticket coaching?",
      a: "GoHighLevel and HubSpot are strong candidates to evaluate first. The choice depends on sales complexity, team size, reporting needs and automation requirements."
    },
    {
      q: "What is the best CRM for online coaches?",
      a: "Discovery-call-driven online coaches should evaluate GoHighLevel or HubSpot; course-first coaches should evaluate Kajabi; funnel-first coaches should evaluate ClickFunnels or GoHighLevel."
    },
    {
      q: "What CRM should a business coach use?",
      a: "A business coach selling through applications and discovery calls should evaluate GoHighLevel and HubSpot first. A business coach selling primarily courses should also evaluate Kajabi."
    },
    {
      q: "What CRM should a life coach use?",
      a: "A referral-led life coach may need only a simple system. A life coach using paid acquisition, applications, discovery calls and automated follow-up should evaluate GoHighLevel."
    },
    {
      q: "What is the best CRM for group coaching?",
      a: "It depends on whether the program is sales-led or course/community-led. GoHighLevel is strong for sales-led programs; Kajabi is strong for course/community-led programs."
    },
    {
      q: "Should coaches use more than one platform?",
      a: "Sometimes. Separating acquisition and sales from course delivery can produce a better system than forcing one platform to handle every job."
    },
    {
      q: "How much does a coaching CRM cost?",
      a: "Pricing ranges from free CRM options to several hundred dollars per month. Compare subscription, usage, payments, additional tools, implementation and maintenance."
    },
    {
      q: "How do I migrate to GoHighLevel?",
      a: "Map contacts, fields, tags, pipelines, workflows, forms, calendars, funnels, payments and integrations. Clean the data, design the new architecture, rebuild and test workflows, then migrate in a controlled way."
    },
    {
      q: "What should coaches automate first?",
      a: "Start with new-lead response, application confirmation, booking reminders, no-show recovery, post-call follow-up, onboarding and reactivation."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer: What Is the Best CRM for Coaches?' },
    { id: 'which-crm', title: 'Which CRM Should You Choose for Your Coaching Business?' },
    { id: 'what-should-crm-do', title: 'What Should a Coaching CRM Actually Do?' },
    { id: 'gohighlevel', title: 'GoHighLevel for Coaches' },
    { id: 'hubspot', title: 'HubSpot for Coaches' },
    { id: 'kajabi', title: 'Kajabi for Coaches' },
    { id: 'clickfunnels', title: 'ClickFunnels for Coaches' },
    { id: 'comparison', title: 'GoHighLevel vs HubSpot vs Kajabi vs ClickFunnels' },
    { id: 'by-business-model', title: 'Best CRM by Coaching Business Model' },
    { id: 'high-ticket', title: 'Best CRM for High-Ticket Coaches' },
    { id: 'discovery-calls', title: 'Best CRM for Coaches Who Sell Through Discovery Calls' },
    { id: 'pricing-tco', title: 'CRM Pricing and Total Cost of Ownership' },
    { id: 'replace-stack', title: 'Can GoHighLevel Replace Your Existing Coaching Stack?' },
    { id: 'two-platforms', title: 'When Two Platforms Are Better Than One' },
    { id: 'migrate', title: 'How to Migrate to GoHighLevel' },
    { id: 'automate-first', title: 'What Coaches Should Automate First' },
    { id: 'ai-matters', title: 'AI for Coaching CRMs: What Actually Matters?' },
    { id: 'metrics', title: 'CRM Metrics Every Growing Coaching Business Should Track' },
    { id: 'mistakes', title: 'Common CRM Mistakes Coaches Make' },
    { id: 'why-gohighlevel', title: 'Why GoHighLevel Is a Strong CRM for Coaches' },
    { id: 'what-ghl-scale-up-brings', title: 'What GHL Scale Up Brings to GoHighLevel Implementation' },
    { id: 'verdict', title: 'Our Verdict: Which CRM Is Best for Coaches?' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const quickAnswer = [
    { type: 'High-ticket 1:1 coaching', best: 'GoHighLevel', why: 'Lead capture, qualification, calls, pipeline and automated follow-up.' },
    { type: 'Corporate / executive coaching', best: 'HubSpot', why: 'Structured CRM, account relationships, reporting and team operations.' },
    { type: 'Course-first coaching', best: 'Kajabi', why: 'Courses, memberships, communities, payments and creator marketing.' },
    { type: 'Funnel-first coaching', best: 'ClickFunnels / GoHighLevel', why: 'Strong funnel capabilities; GHL adds a broader CRM and automation layer.' },
    { type: 'Course + coaching', best: 'Kajabi or GHL + Kajabi', why: 'Choose based on whether delivery or acquisition is the center.' },
    { type: 'Scaling coaching agency', best: 'GoHighLevel', why: 'CRM, automation and agency-oriented account architecture.' },
    { type: 'Referral-led solo coach', best: 'Simple CRM may be enough', why: 'Avoid unnecessary complexity if lead volume and sales complexity are low.' }
  ];

  const whichCRM = [
    { model: 'Lead → Application → Discovery Call → Close', evaluate: 'GoHighLevel / HubSpot', reason: 'CRM and sales process.' },
    { model: 'Traffic → Sales Page → Checkout → Course', evaluate: 'Kajabi', reason: 'Product and learning delivery.' },
    { model: 'Traffic → Funnel → Offer → Upsell', evaluate: 'ClickFunnels', reason: 'Conversion-focused funnel.' },
    { model: 'Corporate buyer → Multiple stakeholders → Coaching', evaluate: 'HubSpot', reason: 'B2B CRM and account structure.' },
    { model: 'Traffic → Lead → Call → Coaching + Course', evaluate: 'GoHighLevel + Kajabi', reason: 'Acquisition and delivery can be separated.' }
  ];

  const ghlPricing = [
    { plan: 'Starter', price: '$97', consideration: '3 sub-accounts.' },
    { plan: 'Unlimited', price: '$297', consideration: 'Unlimited sub-accounts and expanded agency functionality.' },
    { plan: 'Agency Pro', price: '$497', consideration: 'SaaS-oriented features, advanced API and rebilling capabilities.' }
  ];

  const hubspotPricing = [
    { plan: 'Professional', price: '$90/seat/month (annual) / $100/seat/month (monthly)', consideration: 'One-time $1,500 onboarding fee' }
  ];

  const kajabiPricing = [
    { plan: 'Basic', price: '$179/month', annual: '$143/month' },
    { plan: 'Growth', price: '$249/month', annual: '$199/month' },
    { plan: 'Pro', price: '$499/month', annual: '$399/month' }
  ];

  const clickfunnelsPricing = [
    { plan: 'Launch', price: '$97/month', annual: '$81/month shown for annual billing' },
    { plan: 'Scale', price: '$197/month', annual: 'Annual discount available' },
    { plan: 'Optimize', price: '$297/month', annual: 'Annual discount available' },
    { plan: 'Dominate', price: '$5,997/year', annual: 'Annual-only tier' }
  ];

  const comparisonData = [
    { need: 'CRM / contacts', ghl: 'Strong', hubspot: 'Very strong', kajabi: 'Creator-oriented', clickfunnels: 'Moderate' },
    { need: 'Sales pipelines', ghl: 'Strong', hubspot: 'Very strong', kajabi: 'Less central', clickfunnels: 'Useful around funnel sales' },
    { need: 'Lead follow-up', ghl: 'Strong', hubspot: 'Very strong', kajabi: 'Strong marketing automation', clickfunnels: 'Strong around funnel flows' },
    { need: 'Email automation', ghl: 'Strong', hubspot: 'Very strong', kajabi: 'Strong', clickfunnels: 'Strong' },
    { need: 'Appointment booking', ghl: 'Strong', hubspot: 'Strong', kajabi: 'Available', clickfunnels: 'Available' },
    { need: 'Funnels', ghl: 'Strong', hubspot: 'Available', kajabi: 'Strong', clickfunnels: 'Very strong' },
    { need: 'Course delivery', ghl: 'Available', hubspot: 'Not core', kajabi: 'Very strong', clickfunnels: 'Strong' },
    { need: 'Community / membership', ghl: 'Available', hubspot: 'Not core', kajabi: 'Very strong', clickfunnels: 'Available' },
    { need: 'Payments', ghl: 'Strong', hubspot: 'Available / integrations', kajabi: 'Strong', clickfunnels: 'Strong' },
    { need: 'B2B / enterprise CRM', ghl: 'Good', hubspot: 'Very strong', kajabi: 'Not core', clickfunnels: 'Not core' },
    { need: 'Best center of gravity', ghl: 'Lead-to-client operating system', hubspot: 'CRM and revenue operations', kajabi: 'Expert-product business', clickfunnels: 'Funnel and conversion engine' }
  ];

  const replaceStack = [
    { stack: 'CRM + email + SMS + calendar + funnels', role: 'Potentially consolidate much of the stack', consideration: 'Rebuild workflows around the real customer journey.' },
    { stack: 'Kajabi course business', role: 'GHL for acquisition/sales, Kajabi for delivery', consideration: 'Do not migrate course content unnecessarily.' },
    { stack: 'ClickFunnels funnel business', role: 'GHL for funnel + CRM + automation', consideration: 'Compare existing funnel performance before migrating.' },
    { stack: 'HubSpot CRM', role: 'GHL when automation and consolidation are priorities', consideration: 'Map contacts, fields, deals, workflows and reporting.' },
    { stack: 'Spreadsheets', role: 'Build CRM from clean data', consideration: 'Clean duplicates and define fields before import.' }
  ];

  const metrics = [
    { metric: 'Lead volume', tells: 'Whether acquisition is generating enough opportunities.' },
    { metric: 'Lead-to-call rate', tells: 'Whether prospects progress to conversations.' },
    { metric: 'Show rate', tells: 'Whether booked calls happen.' },
    { metric: 'Call-to-close rate', tells: 'How effectively sales conversations convert.' },
    { metric: 'Average deal value', tells: 'Revenue quality.' },
    { metric: 'Sales cycle', tells: 'How long opportunities take to close.' },
    { metric: 'Lead source', tells: 'Which channels produce qualified opportunities.' },
    { metric: 'Cost per qualified lead', tells: 'Paid-acquisition efficiency.' },
    { metric: 'Onboarding completion', tells: 'Whether the post-sale process works.' },
    { metric: 'Renewal / re-enrollment', tells: 'Long-term customer value.' }
  ];

  const mistakes = [
    'Choosing software before defining the process',
    'Building too many overlapping automations',
    'Treating the CRM as a contact list',
    'Ignoring post-sale operations',
    'Comparing only subscription prices',
    'Migrating without redesigning the process',
    'Buying for an imagined future instead of current needs'
  ];

  const automateFirst = [
    'New-lead acknowledgement',
    'Application confirmation',
    'Booking confirmation',
    'Appointment reminders',
    'No-show recovery',
    'Post-call follow-up',
    'Proposal follow-up',
    'New-client onboarding',
    'Payment confirmation',
    'Course/community access',
    'Lead reactivation',
    'Renewal reminders',
    'Review/testimonial requests'
  ];

  const highTicketStages = [
    'Traffic',
    'Lead Capture',
    'Qualification',
    'Application',
    'Booking',
    'Confirmation',
    'Reminder',
    'Discovery Call',
    'Proposal',
    'Follow-Up',
    'Close',
    'Payment',
    'Onboarding'
  ];

  const discoveryCallStages = [
    { stage: 'Lead capture', support: 'Source, record, tags and qualification' },
    { stage: 'Application', support: 'Structured questions' },
    { stage: 'Booking', support: 'Calendar, confirmation and reminders' },
    { stage: 'No-show', support: 'Recovery sequence' },
    { stage: 'Call completed', support: 'Pipeline movement and next action' },
    { stage: 'Not ready', support: 'Nurture and future follow-up' },
    { stage: 'Proposal', support: 'Task, follow-up and visibility' },
    { stage: 'Won', support: 'Payment and onboarding' },
    { stage: 'Lost', support: 'Reason tracking and reactivation' }
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
          <span className="text-[#1A2236] font-medium">Best CRM for Coaches</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Coaches</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            The Complete Guide to Choosing a CRM:<br />
            <span className="text-[#F8D000]">For Coaching Businesses (2026)</span>
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

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Choosing the best CRM for coaches is not simply a matter of comparing feature lists. The right platform depends on how you attract leads, sell coaching, manage discovery calls, deliver programs, communicate with clients and follow up with prospects.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel, HubSpot, Kajabi and ClickFunnels can all be excellent platforms, but they solve different problems. GoHighLevel is particularly strong when lead generation, CRM, appointment booking and marketing automation are central. HubSpot is built around structured CRM and customer operations. Kajabi is centered on expert businesses, courses, memberships and digital products. ClickFunnels is strongly focused on funnels and online selling.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            This guide compares them by business model, sales process, delivery model, pricing, automation, scalability and total cost of ownership so you can choose the platform that actually fits your coaching business.
          </p>

          {/* CTA 1: Hero Section CTA */}
          <div className="mt-6">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl">
              Book a Free CRM Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
                There is no single best CRM for every coach.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                For most high-ticket, lead-generation-driven coaching businesses, GoHighLevel is one of the strongest platforms to evaluate first because it can connect lead capture, CRM, calendars, communication and workflow automation in one system. HubSpot is generally the stronger choice when the coaching business needs sophisticated CRM structure, team processes, reporting and B2B account management. Kajabi is usually the more natural fit when courses, memberships, digital products and expert-content delivery are the center of the business. ClickFunnels is a strong candidate when the business is funnel-first and conversion-focused.
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

            {/* Section 1: Quick Answer Table */}
            <h2 id="quick-answer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Quick Answer: What Is the Best CRM for Coaches?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Coaching business type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best starting point</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {quickAnswer.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.best}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 2: Which CRM */}
            <h2 id="which-crm" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which CRM Should You Choose for Your Coaching Business?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Business model</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Evaluate first</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Core reason</th>
                  </tr>
                </thead>
                <tbody>
                  {whichCRM.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.model}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.evaluate}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 3: What Should CRM Do */}
            <h2 id="what-should-crm-do" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should a Coaching CRM Actually Do?
            </h2>

            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Lead capture and source tracking</li>
              <li>Lead qualification and routing</li>
              <li>Appointment booking, reminders and no-show recovery</li>
              <li>Sales pipeline and opportunity management</li>
              <li>Email, SMS and appropriate conversational follow-up</li>
              <li>Client onboarding after payment</li>
              <li>Course, membership or community delivery where required</li>
              <li>Payments and subscriptions</li>
              <li>Reporting on leads, calls, conversions and revenue</li>
              <li>Integrations with calendars, payments, webinars and advertising</li>
              <li>AI assistance for practical repetitive tasks</li>
              <li>Permissions, documentation and maintainability</li>
            </ul>

            {/* Section 4: GoHighLevel */}
            <h2 id="gohighlevel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel for Coaches
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What is GoHighLevel?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is an all-in-one sales and marketing platform centered on CRM, automation and customer acquisition. Its current offering includes CRM and pipelines, workflow automation, calendars, funnels, email and SMS, payments, courses, communities and AI-related capabilities.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why GoHighLevel fits high-ticket coaching</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Consider a business coach selling a $7,500 program. A prospect may discover the coach through content or advertising, complete an application, receive a response, book a discovery call, receive reminders, enter a sales pipeline, receive follow-up after the call, pay and then enter onboarding.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The value is not simply that GoHighLevel has a calendar or workflow builder. The value is that these stages can be designed as one connected system.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE CUSTOMER JOURNEY</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Traffic → Lead Capture → Qualification → Application → Booking → Reminder → Discovery Call → Pipeline → Follow-Up → Close → Payment → Onboarding → Reactivation
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">GoHighLevel strengths</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>CRM and pipeline management</li>
              <li>Workflow automation</li>
              <li>Calendars and appointment booking</li>
              <li>Funnels and landing pages</li>
              <li>Email and SMS communication</li>
              <li>AI capabilities</li>
              <li>Payments and invoicing</li>
              <li>Courses and communities</li>
              <li>Reporting</li>
              <li>Agency and SaaS capabilities on higher plans</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where GoHighLevel can be weaker</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Its breadth means configuration decisions. A sophisticated coaching system needs sensible pipelines, custom fields, tags, workflow logic, calendars, permissions and reporting. A referral-led coach with a small client roster may not need this level of infrastructure.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">GoHighLevel pricing in 2026</h3>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Key consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {ghlPricing.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.consideration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel also has usage and optional charges for services such as email, phone, WhatsApp and AI. Phone-system charges can remain separate, and messaging rates changed during 2026. Treat the subscription as one part of total cost rather than the entire cost.
            </p>

            {/* CTA 2: After GoHighLevel Section */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 md:p-8 text-center my-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Ready to implement GoHighLevel for your coaching business?
              </h3>
              <p className="text-white/60 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                GHL Scale Up helps coaches design and implement GoHighLevel systems built around their actual sales process and customer journey.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl">
                Book a Free Strategy Call →
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 5: HubSpot */}
            <h2 id="hubspot" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              HubSpot for Coaches
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What is HubSpot?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HubSpot is a customer platform built around CRM, marketing, sales, service and AI. Its Smart CRM is positioned as a central source of customer data with connected products for go-to-market teams.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why HubSpot fits executive and corporate coaching</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Corporate coaching often has multiple stakeholders. The person receiving coaching may not be the buyer. HR may sponsor the engagement, a manager may approve it and finance may handle payment. A coaching firm may also have multiple coaches and account managers. That makes account relationships, structured records, reporting, permissions and team visibility important.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">HubSpot strengths</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Structured CRM and customer records</li>
              <li>Sales pipelines and deal management</li>
              <li>Team processes and permissions</li>
              <li>Reporting and forecasting</li>
              <li>Marketing and sales integration</li>
              <li>Large integration ecosystem</li>
              <li>Strong B2B fit</li>
              <li>Free CRM entry point</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">HubSpot pricing</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HubSpot uses a more granular pricing structure with seats and, for some capabilities, HubSpot Credits. Its January 2026 Sales Hub pricing guide lists Professional at $90 per seat/month annually or $100 monthly, with a one-time $1,500 onboarding fee. Pricing should be checked immediately before purchase.
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {hubspotPricing.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.consideration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">When HubSpot is the better choice</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HubSpot deserves priority consideration when a coaching company is becoming a structured B2B sales organization with multiple sellers, corporate accounts, complex customer data, detailed reporting and stronger revenue-operations requirements.
            </p>

            {/* Section 6: Kajabi */}
            <h2 id="kajabi" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Kajabi for Coaches
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What is Kajabi?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Kajabi is designed around expert businesses and brings products, marketing, payments and client experiences together. Its platform includes course creation, marketing, payments and community functionality.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Why Kajabi is strong for course-first coaches</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the product is primarily knowledge packaged as a course, membership, cohort or digital program, the customer journey changes from a sales-call model to something closer to Traffic → Sales Page → Checkout → Access → Course → Community → Upsell.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Kajabi pricing in 2026</h3>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annual billing equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {kajabiPricing.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where Kajabi can be weaker</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Kajabi is less naturally centered on complex sales-pipeline management. If your hardest problem is qualifying leads, routing opportunities, managing discovery calls and running multi-step sales follow-up, a CRM-first platform may be more appropriate.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">When should a coach choose Kajabi?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose Kajabi when course, membership, community and digital-product delivery are central to revenue and customer experience.
            </p>

            {/* Section 7: ClickFunnels */}
            <h2 id="clickfunnels" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              ClickFunnels for Coaches
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What is ClickFunnels?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              ClickFunnels is a funnel and online-selling platform. Its current product supports funnels, websites, email, courses and other online-business functions, while conversion-focused funnel building remains central to its positioning.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">ClickFunnels pricing in 2026</h3>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annual billing</th>
                  </tr>
                </thead>
                <tbody>
                  {clickfunnelsPricing.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">ClickFunnels strengths</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Application funnels</li>
              <li>Webinar funnels</li>
              <li>Lead magnets</li>
              <li>Conversion-focused landing pages</li>
              <li>Online offers</li>
              <li>Upsells</li>
              <li>Course sales</li>
              <li>Funnel-led coaching acquisition</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where ClickFunnels can be weaker</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When the business becomes heavily dependent on CRM governance, complex customer records, sales-team routing, lifecycle automation and operational reporting, evaluate whether a funnel-first platform should remain the center of the technology stack.
            </p>

            {/* Section 8: Comparison Table */}
            <h2 id="comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs HubSpot vs Kajabi vs ClickFunnels
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Need</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Kajabi</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ClickFunnels</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.need}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.kajabi}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.clickfunnels}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 9: By Business Model */}
            <h2 id="by-business-model" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Best CRM by Coaching Business Model
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">High-ticket coaching:</strong> The central system is usually Lead → Qualification → Discovery Call → Sales → Follow-Up → Close. GoHighLevel and HubSpot should be evaluated first.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">1:1 coaching:</strong> A small referral-led practice may not need an advanced CRM. Once paid acquisition, applications and automated follow-up enter the picture, a stronger CRM becomes valuable.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Group coaching:</strong> Group coaching combines selling and delivery. GoHighLevel is strong when sales automation is central; Kajabi is strong when course/community delivery is central.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Course-first coaching:</strong> Kajabi is usually the natural first evaluation because the product itself is structured educational content.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Executive and corporate coaching:</strong> HubSpot deserves serious consideration because corporate coaching often involves multiple stakeholders, accounts, sales processes and reporting.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Online coaching:</strong> Discovery-call-led online coaching points toward GoHighLevel or HubSpot; course-first coaching toward Kajabi; funnel-first coaching toward ClickFunnels or GoHighLevel.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Webinar-driven coaching:</strong> Webinar businesses need registration, reminders, attendance follow-up and offer conversion. ClickFunnels and GoHighLevel are both relevant.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Coaching agencies:</strong> GoHighLevel becomes particularly relevant when account architecture, reusable systems and automation are important.
            </p>

            {/* Section 10: High-Ticket */}
            <h2 id="high-ticket" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Best CRM for High-Ticket Coaches
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              High-ticket coaching is one of the clearest CRM use cases because every missed follow-up can represent a large revenue opportunity.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">HIGH-TICKET CUSTOMER JOURNEY</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                {highTicketStages.join(' → ')}
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Metrics that matter</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Lead-to-application rate</li>
              <li>Application-to-booking rate</li>
              <li>Show rate</li>
              <li>Call-to-close rate</li>
              <li>Average deal value</li>
              <li>Sales-cycle length</li>
              <li>Lead source</li>
              <li>Cost per qualified lead</li>
              <li>Pipeline value</li>
              <li>Reactivation rate</li>
            </ul>

            {/* Section 11: Discovery Calls */}
            <h2 id="discovery-calls" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Best CRM for Coaches Who Sell Through Discovery Calls
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">CRM support</th>
                  </tr>
                </thead>
                <tbody>
                  {discoveryCallStages.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 12: Pricing TCO */}
            <h2 id="pricing-tco" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              CRM Pricing and Total Cost of Ownership
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The cheapest monthly subscription is not necessarily the cheapest coaching technology stack. Compare subscription + usage + payment processing + additional tools + integrations + implementation + migration + training + maintenance.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's base plans are straightforward, but messaging, phone, WhatsApp and AI can introduce additional usage or subscription costs. HubSpot also requires careful modeling because seats, product tiers and credits can affect the final cost. Kajabi and ClickFunnels have clearer platform-style plan structures, but limits and payment economics still matter.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Pricing checked August 2026.</strong> Vendor pricing and usage fees can change, so verify the current plan before purchase.
            </p>

            {/* Section 13: Replace Stack */}
            <h2 id="replace-stack" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Replace Your Existing Coaching Stack?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Existing stack</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Potential GHL role</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Important consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {replaceStack.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stack}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.role}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.consideration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 14: Two Platforms */}
            <h2 id="two-platforms" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Two Platforms Are Better Than One
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel + Kajabi:</strong> Use GoHighLevel for lead capture, CRM, discovery calls, follow-up and onboarding. Use Kajabi for premium course delivery and community.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">ClickFunnels + CRM:</strong> Use ClickFunnels for conversion-focused acquisition and a CRM for relationship management after the lead enters the system.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">HubSpot + specialist delivery platform:</strong> Use HubSpot for corporate sales and account management while a specialist platform handles course or coaching delivery.
            </p>

            {/* Section 15: Migrate */}
            <h2 id="migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Migrate to GoHighLevel
            </h2>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Audit contacts, fields, tags, pipelines, workflows, forms, calendars, funnels, payments and integrations.</li>
              <li>Clean duplicates and standardize data.</li>
              <li>Design the new pipeline, fields, calendars, workflows and reporting before import.</li>
              <li>Rebuild and test business logic instead of blindly copying every old automation.</li>
              <li>Migrate in a controlled way and monitor deliverability, bookings, notifications and reporting after launch.</li>
            </ul>

            {/* CTA 3: Before Automation Section */}
            <div className="bg-gradient-to-br from-[#0E9BF0] to-[#0B89D6] rounded-xl p-6 md:p-8 text-center my-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Need help with your CRM migration?
              </h3>
              <p className="text-white/80 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                GHL Scale Up handles the entire migration process so you can focus on coaching, not technical setup.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-8 py-3 rounded-lg hover:bg-[#F8F9FB] transition-all shadow-lg">
                Get Migration Help →
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 16: Automate First */}
            <h2 id="automate-first" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Coaches Should Automate First
            </h2>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {automateFirst.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section 17: AI Matters */}
            <h2 id="ai-matters" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              AI for Coaching CRMs: What Actually Matters?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              AI should be evaluated by use case, not by the presence of an AI badge.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Answering common pre-sale questions</li>
              <li>Lead qualification</li>
              <li>Appointment booking</li>
              <li>Conversation summaries</li>
              <li>Lead routing</li>
              <li>Follow-up drafting</li>
              <li>Lead reactivation</li>
              <li>Content assistance</li>
              <li>Internal CRM assistance</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For coaching businesses, AI is most useful when it reduces response time and repetitive work while preserving human judgment for nuanced sales and coaching conversations.
            </p>

            {/* Section 18: Metrics */}
            <h2 id="metrics" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              CRM Metrics Every Growing Coaching Business Should Track
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Metric</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it tells you</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.metric}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tells}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 19: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common CRM Mistakes Coaches Make
            </h2>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {mistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section 20: Why GoHighLevel */}
            <h2 id="why-gohighlevel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why GoHighLevel Is a Strong CRM for Coaches
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is particularly compelling when the coaching business needs one connected system for acquisition, CRM, appointment booking, communication, sales follow-up and automation.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE CLEAREST USE CASE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Traffic → Lead → Qualification → Booking → Call → Pipeline → Follow-Up → Close → Onboarding → Reactivation
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The benefit is not having more software. The benefit is reducing gaps between the stages that produce revenue.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Who should seriously consider GoHighLevel?</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>High-ticket coaches</li>
              <li>Business coaches</li>
              <li>Lead-generation-heavy coaches</li>
              <li>Coaches using paid advertising</li>
              <li>Discovery-call-driven coaching businesses</li>
              <li>Webinar-driven coaches</li>
              <li>Coaching businesses building sales teams</li>
              <li>Coaching agencies</li>
              <li>Businesses consolidating multiple marketing tools</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Who may not need GoHighLevel?</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>A small referral-led coach may be better served by a simpler CRM.</li>
              <li>A course-first business may prefer Kajabi.</li>
              <li>A corporate coaching organization may prefer HubSpot.</li>
              <li>A funnel-first business may prefer ClickFunnels.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">The best CRM is the one that fits the business.</p>

            {/* Section 21: What GHL Scale Up Brings */}
            <h2 id="what-ghl-scale-up-brings" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What GHL Scale Up Brings to GoHighLevel Implementation
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Buying GoHighLevel is only the technology decision. The bigger question is whether the system is designed correctly.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A coaching CRM should be built around the actual sales process rather than a generic pipeline. For a high-ticket coach, that can mean separate stages for application, qualification, booked call, no-show, proposal, follow-up and closed-won opportunities.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Implementation can include connecting forms and funnels to the CRM, designing qualification, creating reminders and recovery workflows, automating onboarding, connecting communication channels, configuring practical AI use cases, migrating data and building reporting.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL Scale Up's positioning is relevant here because it focuses on GoHighLevel implementation, CRM setup, workflow automation, funnels, communication automation, AI systems and migration. Specialist implementation translates the coaching business model into a system the team can operate and improve.
            </p>

            {/* Section 22: Verdict */}
            <h2 id="verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Our Verdict: Which CRM Is Best for Coaches?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For most high-ticket, lead-generation-driven coaching businesses, GoHighLevel is one of the strongest CRM platforms to evaluate first.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For corporate and enterprise coaching organizations, HubSpot may be the better fit.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For course-first coaching businesses, Kajabi is often the more natural choice.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For funnel-first coaching businesses, ClickFunnels deserves consideration.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For very small referral-driven practices, a simpler CRM may be enough.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The smartest technology decision is not the one with the longest feature list. It is the one that makes your actual customer journey easier to manage, easier to automate and easier to scale.
            </p>

            {/* Section 23: FAQ */}
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

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to choose the right CRM for your coaching business?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps coaches and coaching businesses implement GoHighLevel systems designed around their actual sales process and customer journey.
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
                GHL Scale Up helps coaches and coaching businesses implement GoHighLevel systems designed around their actual sales process and customer journey. Our approach focuses on CRM setup, workflow automation, funnels, communication automation, AI systems and migration.
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
                  <div className="text-xs text-white/50">Coaching CRM Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of August 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Help Choosing?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help coaches implement the right CRM system designed around their actual sales process and customer journey.</p>
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