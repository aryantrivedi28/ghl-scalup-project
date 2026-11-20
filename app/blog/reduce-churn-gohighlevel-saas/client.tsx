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
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Rocket,
  UserPlus,
  Target,
  Activity,
  AlertTriangle,
  Headphones,
  MessageSquare,
  XCircle,
  Workflow,
  BarChart3,
  Layers,
  Handshake,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function ReduceChurnClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'what-is-churn',
      'why-cancel',
      'build-onboarding',
      'help-value',
      'improve-adoption',
      'identify-at-risk',
      'proactive-support',
      'collect-feedback',
      'cancellation-flow',
      'automate-retention',
      'retention-system',
      'retention-metrics',
      'five-stage',
      'ghl-scale-up',
      'faq',
      'better-experience',
    ];

    const handleScroll = () => {
      let currentSection = sections[0];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 180) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveId(currentSection);

      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
      }
    };

    handleScroll();
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
      q: 'What is churn in a SaaS business?',
      a: 'Churn is the number of customers, or the amount of revenue, lost over a period, usually because people cancel or payments fail.'
    },
    {
      q: 'How do you calculate SaaS customer churn?',
      a: 'Divide the customers you lost during the period by the customers you had at the start, then multiply by 100. Losing 8 of 100 customers is 8%.'
    },
    {
      q: 'What is the difference between customer churn and revenue churn?',
      a: 'Customer churn counts people. Revenue churn counts money, including downgrades. Losing five small customers and one large one can give you different answers.'
    },
    {
      q: 'Why do SaaS customers cancel?',
      a: 'Common reasons are poor onboarding, low use, unclear value, wrong expectations, technical problems, weak support, price, and changes in their business.'
    },
    {
      q: 'How does onboarding affect retention?',
      a: 'Customers who get started well reach value sooner, which makes the subscription easier to justify. Weak onboarding is a common early reason for leaving.'
    },
    {
      q: 'How can agencies identify customers at risk of leaving?',
      a: 'Look for unfinished onboarding, low use, unresolved support issues, failed payments and negative feedback. In GoHighLevel, track these with custom fields, tags, workflows and regular manual review.'
    },
    {
      q: 'Does GoHighLevel give you a customer health score?',
      a: "We haven't found an official built-in health score or churn prediction. You can build a simple one with fields, tags and workflows, or connect an outside tool."
    },
    {
      q: 'What is the GoHighLevel Custom SaaS Cancellation Flow?',
      a: 'It lets agencies replace the one-click cancel with a multi-step flow that can collect reasons, offer a discount (V1 only) or redirect to an outside page, with every attempt logged.'
    },
    {
      q: 'Can GoHighLevel automate subscription workflows?',
      a: 'Partly. The Subscription trigger can start workflows when a subscription is created, moves from trial to active, or is cancelled. Other steps need extra setup, so test them.'
    },
    {
      q: 'Which metrics should agencies track?',
      a: 'Customer churn, revenue churn, retention rate, MRR, lifetime value, acquisition cost, activation rate, time to value and adoption.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-churn', title: 'What Is Churn in a GoHighLevel SaaS Business?' },
    { id: 'why-cancel', title: 'Why Do GoHighLevel SaaS Customers Cancel Their Subscriptions?' },
    { id: 'build-onboarding', title: 'Build a Structured Customer Onboarding Process' },
    { id: 'help-value', title: 'Help Customers Experience Value Quickly' },
    { id: 'improve-adoption', title: 'Improve Product Adoption and Engagement' },
    { id: 'identify-at-risk', title: 'Identify Customers at Risk of Churning' },
    { id: 'proactive-support', title: 'Build Proactive Customer Support' },
    { id: 'collect-feedback', title: 'Collect Feedback and Understand Cancellation Reasons' },
    { id: 'cancellation-flow', title: 'Configure a SaaS Cancellation Prevention Process' },
    { id: 'automate-retention', title: 'Automate Customer Retention Workflows' },
    { id: 'retention-system', title: 'How to Use GoHighLevel to Build a Customer Retention System' },
    { id: 'retention-metrics', title: 'SaaS Retention Metrics Every GoHighLevel Agency Should Track' },
    { id: 'five-stage', title: 'A Practical Five-Stage Customer Retention Framework' },
    { id: 'ghl-scale-up', title: 'How GHL Scale Up Can Help You Build a Retention-Ready SaaS System' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'better-experience', title: 'Build a Better Customer Experience for Your GoHighLevel SaaS Business' },
  ];

  const cancelReasons = [
    { reason: 'Poor onboarding', look: "They have a login and don't know where to start", helps: 'A clear start-up process, guided setup' },
    { reason: 'Low adoption', look: 'They use one feature out of twenty', helps: 'Training, templates, check-ins' },
    { reason: 'Unclear value', look: "They can't say what the subscription does for their business", helps: 'Help them reach one useful result early' },
    { reason: 'Wrong expectations', look: 'They thought the software would bring leads by itself', helps: 'Honest selling before they subscribe' },
    { reason: 'Technical trouble', look: "Workflows, email or texts don't behave as expected", helps: 'Fast support, fixing the root cause' },
    { reason: 'Weak support', look: 'Questions sit unanswered', helps: 'Clear ways to ask for help, someone responsible' },
    { reason: 'Price concerns', look: 'The cost feels higher than the benefit', helps: "Look at plan fit, or show the value they're not using" },
    { reason: 'Business change', look: 'They closed, merged or changed systems', helps: 'Accept it, learn from it, leave the door open' },
  ];

  const cancellationResponses = [
    { reason: 'Low usage', response: 'Offer a training session or onboarding help', human: 'Yes, a quick call or message' },
    { reason: 'Price', response: 'Check whether a cheaper plan or different package fits', human: 'Yes, a short conversation' },
    { reason: 'Technical problems', response: 'Send them to support, not a discount', human: 'Yes, a real fix' },
    { reason: 'No longer needed', response: 'Accept it, thank them, collect feedback', human: 'Minimal' },
    { reason: 'Something else', response: 'Read the comment, follow up if it helps', human: 'Depends' },
  ];

  const retentionWorkflows = [
    { workflow: 'A. New subscriber', starts: 'Subscription trigger: new subscription', build: 'Welcome message, team alert, onboarding sequence, onboarding status field', human: 'Training call' },
    { workflow: 'B. Stalled onboarding', starts: 'A status field you keep updated, plus a wait step', build: "The status field itself; GoHighLevel doesn't track this by default", human: 'Someone offers help' },
    { workflow: 'C. Support follow-up', starts: 'A form or a ticket in the system you choose', build: 'Owner assignment, reminders, escalation', human: 'Fixing the issue' },
    { workflow: 'D. Cancellation', starts: 'Subscription trigger: cancelled; the cancellation log', build: 'Record the reason, alert the team, offboarding steps', human: 'Review and learn' },
    { workflow: 'E. Payment problem', starts: 'Subscription status such as failed', build: 'Customer message, team alert, record update', human: 'Follow up if unresolved' },
  ];

  const retentionMetrics = [
    { metric: 'Customer churn rate', measures: 'Customers lost ÷ customers at the start', why: 'Shows how many people leave', use: 'Track monthly; compare over time' },
    { metric: 'Revenue churn', measures: 'Monthly income lost to cancellations and downgrades', why: 'Shows how much money leaves', use: 'Compare with customer churn to see who is leaving' },
    { metric: 'Retention rate', measures: 'Share of customers still active after a period', why: 'The flip side of churn', use: 'Useful for cohorts, such as sign-ups from one month' },
    { metric: 'MRR', measures: 'Monthly recurring revenue', why: 'The size of your subscription income', use: 'Watch the trend, not one month' },
    { metric: 'Customer lifetime value', measures: 'Roughly, average revenue per customer × how long they stay', why: 'Shows what a customer is worth', use: "State your assumptions; it's an estimate" },
    { metric: 'Acquisition cost', measures: 'What you spend to win a customer', why: 'Retention affects whether it pays back', use: 'Compare with lifetime value' },
    { metric: 'Activation rate', measures: 'Share of new customers reaching a set milestone', why: 'Shows if onboarding works', use: 'Pick a milestone that fits your product' },
    { metric: 'Time to value', measures: 'Days until the first useful result', why: 'Faster usually means happier', use: 'Track per customer type' },
    { metric: 'Product adoption', measures: 'Share using the features that matter', why: 'Shows who might be drifting', use: 'Needs custom tracking' },
  ];

  const fiveStage = [
    { stage: '1. Acquire', do: 'Set honest expectations before they subscribe', ghl: 'Landing pages, forms, clear plan descriptions', human: 'Yes, in sales conversations', metric: 'Early cancellations' },
    { stage: '2. Activate', do: 'Help them set up and get a first win', ghl: 'Snapshots, welcome workflows, checklists', human: 'Training call', metric: 'Activation rate, time to value' },
    { stage: '3. Engage', do: 'Encourage regular, useful use', ghl: 'Email, SMS, calendars, forms', human: 'Check-ins', metric: 'Adoption' },
    { stage: '4. Monitor', do: 'Spot trouble early', ghl: 'Custom fields, tags, subscription trigger, alerts', human: 'Weekly review', metric: 'At-risk count' },
    { stage: '5. Retain', do: 'Fix problems, support, listen', ghl: 'Cancellation flow, support workflows, surveys', human: 'Real fixes', metric: 'Churn, retention' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        href="/book-a-call"
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );

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
          <span className="text-[#1A2236] font-medium">Reduce Churn for a GoHighLevel SaaS Business</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS Mode</span>
            <span className="bg-[rgba(220,53,69,0.15)] text-[#DC3545] text-[11px] font-semibold px-2.5 py-1 rounded-full">Retention</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Customer Experience</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Reduce Churn for a GoHighLevel SaaS Business
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Official HighLevel behavior checked November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              You reduce churn by fixing the customer experience before the cancel button, not at it. That means a good start (onboarding), early wins, steady follow-up, a way to notice trouble, real support, and a fair, well-designed cancellation process. GoHighLevel has tools for several of these. It doesn't do all of it for you, and we'll be clear about which is which.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>This guide is for agency owners who sell, or plan to sell, GoHighLevel SaaS Mode subscriptions. It isn't about managing your own business's CRM.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book-a-call"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Book a Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#what-is-churn"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Start Reading
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN: SIDEBAR */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="mb-6">
              <ProjectHelpCard />
            </div>

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
                        {activeId === item.id && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />
                        )}
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
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built globally. We implement GoHighLevel for agencies and service businesses.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                  <Twitter className="w-3 h-3" />
                  X
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  Copy link
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: BLOG CONTENT */}
          <main className="min-w-0 order-2">

            {/* Mobile TOC */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8 lg:hidden">
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

            {/* Mobile Project Help Card */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Intro */}
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Picture an agency owner with 40 paying SaaS customers. The numbers look healthy: new sign-ups every week, monthly payments coming in, a branded platform with their name on it. Then they look closer. Six customers cancelled this month. Three more haven't logged in since the week they joined. One has sent the same support question twice.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              None of that shows up in a sign-up counter. Yet it decides whether the business grows or just keeps refilling a leaky bucket.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full bg-[#F8F9FB]">
                <Image
                  src="/blog/reduce-churn-gohighlevel-saas.png"
                  alt="Five stages of a SaaS customer retention framework: Acquire, Activate, Engage, Monitor, Retain as a loop"
                  width={1600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Customer lifecycle diagram: Acquire, Activate, Engage, Monitor, Retain as a loop.</span>
              </div>
            </div>

            {/* Section: What Is Churn */}
            <h2 id="what-is-churn" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is Churn in a GoHighLevel SaaS Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Churn is the number of customers, or the amount of revenue, you lose over a period of time. In a SaaS business, it's mostly customers cancelling their subscription, or their subscription ending because a payment failed.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are a few types worth separating:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Customer churn:</strong> how many customers left.</li>
              <li><strong className="text-[#1A2236]">Revenue churn:</strong> how much monthly income left. It also counts downgrades, where a customer stays but pays less.</li>
              <li><strong className="text-[#1A2236]">Voluntary churn:</strong> the customer chose to cancel.</li>
              <li><strong className="text-[#1A2236]">Involuntary churn:</strong> the subscription ended because a card failed or expired, not because the customer decided to go.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's a simple example. An agency starts the month with 100 customers and 8 cancel. Customer churn rate = (customers lost during the period ÷ customers at the start of the period) × 100. So 8 ÷ 100 × 100 = 8%. Remember, this is only an example, not an industry benchmark. Your own number matters more than anyone else's average.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Customers lost and revenue lost aren't the same thing. If those 8 customers were all on your cheapest plan, your revenue churn is smaller than 8%. If they were your biggest accounts, it's larger. Track both.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Why it matters: every customer you keep is revenue you don't have to win again. High churn makes your monthly income harder to predict, makes each new customer cost more to be worth it, and makes growth feel like running up a down escalator.
            </p>

            {/* Section: Why Cancel */}
            <h2 id="why-cancel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Do GoHighLevel SaaS Customers Cancel Their Subscriptions?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              People rarely cancel for just one reason, and different reasons need different answers. Here are the common ones.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Reason</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it looks like</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What helps</th>
                  </tr>
                </thead>
                <tbody>
                  {cancelReasons.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.reason}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.look}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.helps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Notice that not every cancellation can be prevented. If a customer closes their business, no workflow will fix that. The goal isn't zero churn. It's fewer avoidable cancellations, and a better understanding of the rest.
            </p>

            {/* Section: Build Onboarding */}
            <h2 id="build-onboarding" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Build a Structured Customer Onboarding Process
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Onboarding is the first real test of your product. A customer who can't get started in the first days rarely gets a second chance.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel does by itself.</strong> When a customer buys a plan through SaaS Mode, GoHighLevel can create their sub-account (their own account inside your platform) and load a snapshot (a saved copy of a setup, with pipelines, forms, calendars, workflows and so on). That gives them a working starting point. This is provisioning, and it's set up in the SaaS Configurator.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you still have to build.</strong> Provisioning isn't onboarding. A new customer also needs to know where to log in, what to do first, how to get help and what their plan includes. That takes welcome messages, a checklist, training and a human follow-up, and some of it needs workflows you design.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">An example.</strong> A real estate agency subscribes to your branded CRM. Their first week might look like this:
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>A welcome email with login details.</li>
              <li>An account that already has a lead pipeline and lead forms.</li>
              <li>Follow-up workflows already switched on.</li>
              <li>A short checklist: connect your calendar, test your lead form, send a test message.</li>
              <li>A training call, or a short guide.</li>
              <li>A check-in a few days later, asking whether the first lead came through.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Items 1 to 3 can be largely automatic once the snapshot and workflows are built. Items 4 to 6 need design, and the training and check-in benefit from a real person.
            </p>

            {/* Section: Help Value */}
            <h2 id="help-value" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Help Customers Experience Value Quickly
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Time to value is how long it takes a customer to get their first useful result. The sooner they see something worth paying for, the easier the subscription is to justify.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Early wins might be a first lead captured, a first automatic follow-up sent, a first appointment booked, or a first pipeline organised. Which one matters depends on the customer. A dentist and a roofer don't want the same first win.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A simple 30-day plan could be: in week one, get them logged in and the basics working; in week two, help them reach one real result; in week three, introduce one more feature that fits their business; in week four, check in and ask how it's going. Don't expect every customer to hit the same milestones on the same days. Use the plan as a guide, and adjust it for each type of customer.
            </p>

            {/* Section: Improve Adoption */}
            <h2 id="improve-adoption" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Improve Product Adoption and Engagement
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Having access isn't the same as using something. A platform with dozens of features can overwhelm people, and customers who only use a small part of it may decide it isn't worth the price.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              What helps: short walkthroughs for the features that matter most, ready-made templates, regular check-ins, and messages that help people use the product. GoHighLevel's email, SMS, forms, calendars and workflows can all support this. Keep the messages useful. If every email feels like a promotion, people tune out.
            </p>

            {/* Section: Identify At Risk */}
            <h2 id="identify-at-risk" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Identify Customers at Risk of Churning
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Churn is a lagging signal. By the time someone cancels, the decision was probably made weeks ago. You want earlier clues, such as:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Onboarding never finished.</li>
              <li>They haven't done anything meaningful in the platform.</li>
              <li>Support questions that stay unresolved.</li>
              <li>The same technical problem happening again.</li>
              <li>A failed payment.</li>
              <li>Negative feedback, or a question about how to cancel.</li>
              <li>Fewer replies to your messages.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's the honest part. We haven't found any official GoHighLevel feature that automatically tracks every customer's login activity, or gives each customer a health score or a churn prediction. So you build a simple version yourself, using the tools you do have:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Custom fields and tags on the customer's contact record in your own account, such as onboarding status, last check-in date, support status and a risk rating.</li>
              <li>Subscription status, which comes from your billing.</li>
              <li>Workflows that update those fields and alert your team.</li>
              <li>A manual review each week or month of customers who look quiet.</li>
              <li>Outside tools or the API, if you want real usage data or a dashboard. That takes extra setup.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Also, don't assume you can see everything inside each customer's sub-account. What the agency can see depends on how things are set up, so check it in your own account before you plan around it.
            </p>

            {/* Section: Proactive Support */}
            <h2 id="proactive-support" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Build Proactive Customer Support
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Good support stops small problems turning into cancellations. That means an easy way to ask for help, someone who owns each issue, a follow-up when it's fixed, and a record of what happened.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Say a customer's workflow keeps failing. If you only answer each message, you'll be answering the same one next week. Find the root cause, fix it, and tell the customer. That's what earns their trust. Automation can capture requests, notify your team and remind people about overdue issues. For complicated technical problems, you still need a person.
            </p>

            {/* Section: Collect Feedback */}
            <h2 id="collect-feedback" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Collect Feedback and Understand Cancellation Reasons
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              You can't fix what you don't know about. Ask early (a quick question after onboarding), ask during the relationship (short check-ins), and ask when someone leaves (a cancellation reason). GoHighLevel's forms and surveys can collect the answers, and workflows can route them. Group the reasons into a few buckets: pricing, product functionality, technical problems, onboarding, support, business closure and other. Over a few months, patterns appear. If a quarter of your cancellations say "I never got set up", the fix is in onboarding, not in a discount.
            </p>

            {/* Section: Cancellation Flow */}
            <h2 id="cancellation-flow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Configure a SaaS Cancellation Prevention Process
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel has a Custom SaaS Cancellation Flow. Here's what its official help page says, as of November 2026.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>It's available to agencies using the SaaS Configurator. The main switch that lets clients cancel is off by default for new SaaS businesses. When it's on, a "Modify / Cancel" button appears in each sub-account's billing area.</li>
              <li>Instead of a one-click cancel, you can build a multi-step experience: your own wording, a list of cancellation reasons (default ones, ones you add, and an "Other" option where the customer can type their own reason), and a next step.</li>
              <li>You can offer a time-limited percentage discount, for example 25% for a set number of months. Discount offers are currently for V1 sub-accounts only.</li>
              <li>You can redirect the customer to an outside page, such as a booking link or a survey. If you do, the cancellation doesn't complete inside HighLevel. If they close the browser, the subscription stays active and is logged as deflected.</li>
              <li>Every attempt is logged, including the outcome (cancelled or deflected), the reason and the type. You can download the log as a CSV file.</li>
              <li>A preview mode lets you run through the customer's journey without changing anything.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Which version are you on? HighLevel has two billing setups, called SaaS V1 and SaaS V2. V1 uses Stripe as the main record for subscriptions. V2 uses an agency sub-account inside HighLevel. V2 isn't simply a newer, better V1: HighLevel says it doesn't yet support every V1 feature, and the discount offer is one example. Check which one each of your plans uses before you design anything.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              How to use it well, by reason:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">If the reason is…</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">A sensible response</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Human involvement</th>
                  </tr>
                </thead>
                <tbody>
                  {cancellationResponses.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.reason}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.response}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Two cautions. First, a discount isn't a cure. It might keep a customer for a few months without solving why they wanted to leave. Second, keep cancellation fair. Customers should be able to leave through a clear path. Use the flow to understand and help, not to put up barriers. A cancellation flow is one part of retention, not the whole thing.
            </p>

            {/* Section: Automate Retention */}
            <h2 id="automate-retention" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Automate Customer Retention Workflows
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Workflows are where GoHighLevel can save you real time. HighLevel has a Subscription trigger in its workflows that can start automations when a subscription is created, when a trial becomes active, or when a subscription is cancelled. You can filter by product or by subscription status. The trigger gives you the event. It doesn't give you a full customer-health system on its own.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here are five workflows to consider, with what's built in and what you have to add.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Workflow</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What starts it</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you have to build</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Human involvement</th>
                  </tr>
                </thead>
                <tbody>
                  {retentionWorkflows.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.workflow}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.starts}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.build}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A few things to check by testing, not assuming: exactly when the cancellation event fires, what happens to a customer's access afterwards, and which statuses are available on your billing setup. Agencies have also asked HighLevel for better automated offboarding, such as cancelling add-ons when a subscription ends, so don't assume that part is automatic. For payment failures, Stripe's own tools (such as dunning settings) are available in V1, while V2 handles retries inside HighLevel's payments area. Pick the approach that matches your version.
            </p>

            {/* Section: Retention System */}
            <h2 id="retention-system" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Use GoHighLevel to Build a Customer Retention System
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Put together, a simple retention system in GoHighLevel has four layers.
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Provisioning.</strong> SaaS Configurator plans and snapshots give each customer a working starting point.</li>
              <li><strong className="text-[#1A2236]">Communication.</strong> Workflows send onboarding, check-in and support messages by email and SMS.</li>
              <li><strong className="text-[#1A2236]">Tracking.</strong> Custom fields, tags and pipelines in your own account record where each customer is.</li>
              <li><strong className="text-[#1A2236]">Review.</strong> A regular look at the list, plus the cancellation log, to decide who needs a human.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              What it doesn't include: automatic login tracking, a built-in health score or churn prediction, or a single dashboard with every retention metric. If you want those, they take custom fields, workflow logic, an outside dashboard or API work. That's a perfectly good choice. It just needs planning.
            </p>

            {/* Section: Retention Metrics */}
            <h2 id="retention-metrics" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              SaaS Retention Metrics Every GoHighLevel Agency Should Track
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Numbers tell you whether the system is working. We won't give you benchmarks, because they vary too much by market and customer type. Start by measuring your own.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Metric</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it measures</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why it matters</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">How to use it</th>
                  </tr>
                </thead>
                <tbody>
                  {retentionMetrics.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.metric}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.measures}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Some of these come straight from your subscription records (customer churn, revenue churn, MRR). Others, like activation, time to value and adoption, need extra tracking that you set up yourself. Don't assume GoHighLevel shows all of them in one place.
            </p>

            {/* Section: Five Stage */}
            <h2 id="five-stage" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Practical Five-Stage Customer Retention Framework
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              To keep it all straight, here's a simple way to organise the work. It's an editorial framework we've put together for this article, not an industry standard.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Stage</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you do</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">GoHighLevel can help with</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Needs a human</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Metric to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {fiveStage.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.stage}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.do}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.ghl}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.human}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.metric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: GHL Scale Up */}
            <h2 id="ghl-scale-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GHL Scale Up Can Help You Build a Retention-Ready SaaS System
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your SaaS customers shouldn't have to figure everything out on their own. A well-planned GoHighLevel setup can help you guide them from sign-up to onboarding, active use and ongoing support.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL Scale Up is a GoHighLevel implementation and automation partner. Our <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">SaaS setup service</Link> covers areas such as the SaaS Configurator and plans, snapshots, onboarding and cancellation flows, and rebilling, and we also offer <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">workflow automation</Link>, <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">CRM setup</Link>, <Link href="/services/reporting" className="text-[#0E9BF0] hover:underline">reporting</Link> and integration work. What's included in a project is agreed up front, because every agency starts from a different place.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              We can't promise lower churn, and software settings alone won't keep a customer. What we can do is help build the technical systems behind a better customer experience, such as onboarding workflows, tracking fields, alerts and cancellation handling, so your team can spend its time on the human parts.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you're setting this up yourself, our <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode setup guide</Link> is a good place to start.
            </p>

            {/* Section: FAQ */}
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

            {/* Section: Better Experience */}
            <h2 id="better-experience" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Build a Better Customer Experience for Your GoHighLevel SaaS Business
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Getting customers to subscribe is only the first step. Keeping them takes a good start, early wins, steady support, a way to notice trouble and a fair exit. Some of that GoHighLevel can automate. Some of it needs your attention. Not every cancellation can be prevented, and that's fine, as long as you learn from each one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Building a GoHighLevel SaaS business takes more than setting up subscription plans. Your onboarding, automation, customer management and retention processes need to work together. If you'd like help configuring the systems behind your offering, <Link href="/contact" className="text-[#0E9BF0] hover:underline">get in touch</Link> or <Link href="/book-a-call" className="text-[#0E9BF0] hover:underline">book a call</Link>, and we'll talk through what you need.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about reducing churn for your GoHighLevel SaaS business?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                  <Phone className="w-4 h-4" />
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Guide →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">SaaS Setup Service →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">White-Label SaaS Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">Workflow Automation Basics →</Link>
                <Link href="/services/reporting" className="text-sm text-[#0E9BF0] hover:underline">Reporting Setup →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">We can't promise lower churn, but we can help build the systems behind a better customer experience.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up is a GoHighLevel implementation and automation partner. If you'd like help configuring the systems behind your offering, get in touch or book a call.
                </p>
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author / Verification Section */}
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                Official HighLevel behavior referenced was checked November 2026. HighLevel changes features and settings often, so confirm current details in your account before planning.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>
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