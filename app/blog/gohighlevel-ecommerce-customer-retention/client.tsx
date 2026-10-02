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
  Rocket,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelEcommerceCustomerRetentionClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-retention',
        'retention-vs-repeat-vs-winback',
        'how-to-know-when-inactive',
        'why-no-built-in-trigger',
        'what-data-should-drive',
        'how-to-build-tracking',
        'how-workflow-structured',
        'workflow-examples',
        'choosing-email-or-sms',
        'what-can-be-personalized',
        'when-not-to-send',
        'how-to-prevent-conflicts',
        'how-shopify-data-affects',
        'how-to-test',
        'common-mistakes',
        'decision-framework',
        'when-not-to-own-entire-process',
        'core-principle',
        'faq'
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(id);
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
      q: "What is customer retention automation in GoHighLevel?",
      a: "Workflows that use existing customer and order data purchase history, timing, product to encourage continued purchasing, built on GoHighLevel's standard contacts, tags, custom fields and workflow engine rather than a dedicated retention feature."
    },
    {
      q: "Does GoHighLevel have an inactive customer trigger?",
      a: "No. There's no native trigger or Smart List filter for purchase recency GoHighLevel's own public feature-request board confirms this as an open gap, so it has to be built with custom fields and workflow logic instead."
    },
    {
      q: "How can I identify customers who haven't purchased recently?",
      a: "Track a \"Last Purchase Date\" custom field, updated by a workflow whenever an order event fires, then use a wait-for-condition or scheduled check against that field."
    },
    {
      q: "Can GoHighLevel use Shopify purchase history for retention?",
      a: "Yes, at the point an order event fires product and order value are available as trigger conditions. An ongoing recency/frequency profile still has to be built and maintained with custom fields, since that isn't automatically tracked."
    },
    {
      q: "Can I create product-specific winback workflows?",
      a: "Yes, using product-based tags applied per order and the product filter available on relevant triggers, so a replenishment-style message can reference the specific item purchased."
    },
    {
      q: "How do I stop a winback workflow when a customer purchases?",
      a: "Add a Goal Event checking for the relevant purchase event, set to end the workflow once met this checks continuously, so it catches a purchase made at any point during the sequence."
    },
    {
      q: "Should ecommerce winback use email or SMS?",
      a: "Depends on the message and the customer's channel engagement, not a fixed rule winback is rarely urgent enough to require SMS by default, and sending the same message on both channels adds noise rather than reach."
    },
    {
      q: "How long should I wait before a winback campaign?",
      a: "There's no universal number base it on the specific product's or segment's normal repurchase cycle, not a fixed 30/60/90-day rule applied to everything."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-retention', title: 'What Is Ecommerce Customer Retention in GoHighLevel?' },
    { id: 'retention-vs-repeat-vs-winback', title: 'Retention vs. Repeat Purchase vs. Winback' },
    { id: 'how-to-know-when-inactive', title: 'How Do You Know When a Customer Has Become Inactive?' },
    { id: 'why-no-built-in-trigger', title: 'Why GoHighLevel Doesn\'t Have a Built-In Inactive Customer Trigger' },
    { id: 'what-data-should-drive', title: 'What Customer and Order Data Should Drive a Retention Workflow?' },
    { id: 'how-to-build-tracking', title: 'How to Build the Recency, Frequency and Value Tracking' },
    { id: 'how-workflow-structured', title: 'How a Retention or Winback Workflow Is Structured' },
    { id: 'workflow-examples', title: 'Workflow Examples' },
    { id: 'choosing-email-or-sms', title: 'Choosing Email or SMS for Retention Messages' },
    { id: 'what-can-be-personalized', title: 'What Can Be Personalized in a Winback Message' },
    { id: 'when-not-to-send', title: 'When Not to Send a Winback Message' },
    { id: 'how-to-prevent-conflicts', title: 'How to Prevent Retention Workflow Conflicts' },
    { id: 'how-shopify-data-affects', title: 'How Shopify Data Affects Retention Automation' },
    { id: 'how-to-test', title: 'How to Test a Retention or Winback Workflow' },
    { id: 'common-mistakes', title: 'Common Retention and Winback Mistakes' },
    { id: 'decision-framework', title: 'A Decision Framework for Lifecycle Stages' },
    { id: 'when-not-to-own-entire-process', title: 'When GoHighLevel Should Not Own the Entire Process' },
    { id: 'core-principle', title: 'The Core Principle to Remember' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const conceptComparisonData = [
    { concept: 'Retention', meaning: 'The broader goal of keeping an existing customer engaged and purchasing over time', trigger: 'Not a single event it\'s the outcome of several workflows working together' },
    { concept: 'Repeat purchase', meaning: 'The customer places a second (or later) order', trigger: 'A new order event, same as any other purchase' },
    { concept: 'Winback', meaning: 'A deliberate attempt to re-engage a customer after a meaningful gap without a purchase', trigger: 'The absence of an event a wait-for-condition or a scheduled check, not a single trigger' },
  ];

  const mistakesData = [
    { problem: 'Using one fixed inactivity window for every product', whyItHappens: 'Treating 30/60/90 days as a universal rule instead of a product-specific estimate', betterApproach: 'Base the window on that product\'s or category\'s actual repurchase cycle' },
    { problem: 'Assuming GoHighLevel tracks "last purchase" automatically', whyItHappens: 'No native recency/frequency filter currently exists', betterApproach: 'Build and maintain a custom field updated by a workflow on each order event' },
    { problem: 'Winback workflow keeps messaging a customer who already reordered', whyItHappens: 'No Goal Event checking for the new purchase', betterApproach: 'Add a Goal Event on the relevant purchase event, set to end the workflow' },
    { problem: 'Every customer gets identical post-purchase and winback messaging', whyItHappens: 'No Order Count field or If/Else branching by purchase history', betterApproach: 'Branch first-time vs. repeat customers using the tracked order count' },
    { problem: 'Generic "we miss you" messaging', whyItHappens: 'Not using available product/purchase data', betterApproach: 'Reference the specific product and realistic timing instead' },
    { problem: 'Overlapping workflows message the same contact twice', whyItHappens: 'No exit tags or conditions checked across workflows', betterApproach: 'Check for active-sequence tags before enrolling a contact in a new one' },
  ];

  const decisionFrameworkData = [
    { customerSituation: 'Recent first purchase', lifecycleApproach: 'Post-purchase journey' },
    { customerSituation: 'Recent repeat purchase', lifecycleApproach: 'Repeat-customer treatment, not the first-timer sequence' },
    { customerSituation: 'Product has a predictable replenishment cycle', lifecycleApproach: 'Replenishment-timed repeat-purchase logic' },
    { customerSituation: 'Customer has passed their normal purchase interval', lifecycleApproach: 'Consider winback, scaled to that product/segment\'s cycle' },
    { customerSituation: 'Customer purchases during an active winback sequence', lifecycleApproach: 'Goal Event exits them back into the normal post-purchase journey' },
    { customerSituation: 'No genuinely relevant reason to contact the customer', lifecycleApproach: 'Don\'t automate a message simply because the contact exists' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help building your retention and winback workflows.</p>
      <Button
        onClick={handleOpenBooking}
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Button>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Customer Retention & Winback Automation Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Retention</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Winback</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Ecommerce Customer Retention:<br />
            <span className="text-[#F8D000]">Winback, Repeat Purchases & Lifecycle Automation</span>
          </h1>

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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Verified against HighLevel documentation as of September 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            A customer who already bought from you is different from a stranger, and the automation around them should reflect that but "send them something to bring them back" isn't a workflow, it's a goal. The real work is deciding who actually qualifies, when, with what message, and what happens the moment they buy again. GoHighLevel can automate all of that, but it has no single "customer has gone inactive" trigger waiting to be turned on. That logic has to be built, using customer and order data the business decides matters.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This article picks up where <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-[#0E9BF0] hover:underline">post purchase automation</Link> leaves off after the first purchase journey is handled, how do you think about everything that comes after: the second purchase, the point where someone's gone quiet, and winning them back without annoying the customers who were never actually gone.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Retention Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-workflow-structured"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Workflow Structure
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="hidden lg:block mb-6">
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
                5+ years GHL experience · 200+ systems built globally. All product details verified against HighLevel documentation as of September 2026.
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

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Retention Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help ecommerce businesses build retention and winback automation in GoHighLevel.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* Table of Contents - Mobile Only */}
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

            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section: What Is Retention */}
            <h2 id="what-is-retention" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is Ecommerce Customer Retention in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Customer retention automation is the set of workflows that encourage an existing customer to keep buying, rather than automation aimed at acquiring a new one. In GoHighLevel, that means using data the business already has who bought, what, when, and how often to decide who gets a message, what it says, and when it's sent. It isn't a single feature or a single workflow; it's a layer of decisions sitting on top of the same contacts, tags, custom fields and workflows used everywhere else in the platform.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-ecommerce-customer-retention.png"
                  alt="GoHighLevel Ecommerce Customer Retention: Winback, repeat purchase, and lifecycle automation flow"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Ecommerce Customer Retention: Winback, repeat purchase, and lifecycle automation flow</span>
              </div>
            </div>

            {/* Section: Retention vs Repeat vs Winback */}
            <h2 id="retention-vs-repeat-vs-winback" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Retention vs. Repeat Purchase vs. Winback: Why the Difference Matters for Automation
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Concept</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What Triggers It</th>
                  </tr>
                </thead>
                <tbody>
                  {conceptComparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.concept}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.trigger}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The distinction matters because these need different automation shapes. A repeat-purchase workflow responds to something that happened. A winback workflow has to notice that something expected didn't happen which GoHighLevel can't do with a single trigger the way it can react to an order being placed. That difference drives most of the design decisions in this article.
            </p>

            {/* Section: How to Know When Inactive */}
            <h2 id="how-to-know-when-inactive" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Know When a GoHighLevel Customer Has Actually Become Inactive?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Inactivity should be measured against that specific customer's (or that product's) normal buying cycle, not a fixed number of days applied to everyone. A skincare customer who reorders a 30-day supply roughly every month looks "inactive" at day 45 in a way that's meaningfully different from a customer who buys a durable home product every six to twelve months and is still well within a normal gap at day 45.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three things should inform the window: <strong className="text-[#1A2236]">product consumption or usage period</strong> (how long a purchase typically lasts before a repurchase makes sense), <strong className="text-[#1A2236]">category purchase frequency</strong> (how often customers in this category tend to buy, independent of any one product), and <strong className="text-[#1A2236]">the individual customer's own history</strong> (someone who has ordered every 20 days for a year is "late" sooner than someone who orders unpredictably). None of these produce a single correct number they produce a reasoned estimate specific to the product or customer segment, which is why this section resists giving one.
            </p>

            {/* Section: Why No Built-In Trigger */}
            <h2 id="why-no-built-in-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why GoHighLevel Doesn't Have a Built-In "Inactive Customer" Trigger
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This needs to be stated plainly because it changes how you build everything that follows: <strong className="text-[#1A2236]">GoHighLevel does not currently offer a native trigger or Smart List filter for "customer hasn't purchased in N days" out of the box.</strong> A product feedback request on GoHighLevel's own public roadmap "Smartlist Filter: Purchased Product in Last N Months" describes exactly this gap, explicitly stating that marketers currently cannot natively build a list of contacts based on purchase recency, product purchased, or purchase count, and that doing so today requires exports, tags, or custom automation. That request was still open, not shipped, as of this research.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In practice this means recency, frequency and value aren't automatically tracked fields you can just filter by they're data points you have to create and maintain yourself, using the tools covered next. Winback isn't a trigger you turn on. It's logic you build.
            </p>

            {/* Section: What Data Should Drive */}
            <h2 id="what-data-should-drive" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Customer and Order Data Should Drive a GoHighLevel Retention Workflow?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The useful signals are the same ones any retention strategy relies on they just aren't sitting in a ready-made field waiting to be used. <strong className="text-[#1A2236]">Last purchase date</strong> tells you how long it's been. <strong className="text-[#1A2236]">Order count</strong> tells you whether someone is a first-time or repeat buyer. <strong className="text-[#1A2236]">Products purchased</strong> tells you what a relevant next recommendation might be. <strong className="text-[#1A2236]">Order value or lifetime spend</strong> tells you whether this is a customer worth a higher-touch approach. Shopify's integration makes product and order total available at the moment an order event fires but that's point-in-time data tied to a single order, not an ongoing tally GoHighLevel maintains for you across a customer's history.
            </p>

            {/* Section: How to Build Tracking */}
            <h2 id="how-to-build-tracking" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Build the Recency, Frequency and Value Tracking GoHighLevel Doesn't Provide Natively
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Since there's no built-in system for this, the standard approach is to build it with custom fields that a workflow updates every time a relevant order event fires:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A "Last Purchase Date" custom field,</strong> updated by a workflow action every time an order/payment event fires for that contact.</li>
              <li><strong className="text-[#1A2236]">An "Order Count" custom field,</strong> incremented the same way, giving you a simple first-time-vs-repeat signal without guessing from tags alone.</li>
              <li><strong className="text-[#1A2236]">Tags for products or categories purchased,</strong> applied per order, so a later workflow can check "has this contact already bought Product B" before recommending it.</li>
              <li><strong className="text-[#1A2236]">A wait-for-condition step, or a scheduled check,</strong> comparing the current date against the Last Purchase Date field to identify when a contact has crossed the inactivity window you've defined for that segment.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is more setup than flipping on a switch, but it's also exactly the gap the open GoHighLevel feature request confirms until a native recency/frequency filter ships, this custom-field approach is the documented way to get the same result.
            </p>

            {/* Section: How Workflow Structured */}
            <h2 id="how-workflow-structured" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How a GoHighLevel Retention or Winback Workflow Is Actually Structured
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In plain terms: <strong className="text-[#0E9BF0]">customer and order data → a condition checking whether this contact currently qualifies → a wait tied to the right timing → a message → a check for whether they've purchased again → continue, branch, or exit.</strong> The condition and the wait are doing the real work here they're what turn a generic broadcast into something that only reaches people it's actually relevant to, at a point where it's actually relevant.
            </p>

            {/* Section: Workflow Examples */}
            <h2 id="workflow-examples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Workflow Examples
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow Example: First-Time Customer Entering the Repeat-Purchase Window</p>
                <p className="text-sm text-[#5C6880]">A customer's first order is marked fulfilled. A workflow updates their Order Count and Last Purchase Date fields, then waits an interval appropriate to the product's typical repurchase cycle. At that point, an If/Else checks whether a second order has already arrived if yes, exit quietly; if no, send a relevant reminder rather than a generic "come back" message.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow Example: A Repeat Customer's Different Treatment</p>
                <p className="text-sm text-[#5C6880]">A contact whose Order Count field is already 2 or more doesn't need the same orientation-style messaging a first-time buyer gets. An If/Else on that field can route repeat customers into a shorter, more direct sequence acknowledging their history rather than repeating a first-purchase welcome they've already seen.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow Example: Product-Specific Replenishment Winback</p>
                <p className="text-sm text-[#5C6880]">A customer bought a consumable product with a known 60-day supply. After roughly that period, a workflow checks whether they've reordered. If not, the message references the specific product they bought rather than a generic "we miss you" reminding them what they're likely running low on is a more relevant reason to come back than an unspecific nudge.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow Example: A Customer Who Purchases During a Winback Sequence</p>
                <p className="text-sm text-[#5C6880]">This is the scenario most winback workflows get wrong if it isn't designed deliberately. A customer enters a winback sequence, then places a new order on their own, independent of the automation. If the workflow doesn't check for that, they keep receiving "come back" messaging after they've already come back. The fix is the same Goal Event mechanism used to exit pre-purchase sequences after a sale: a Goal Event checking for the relevant purchase event, set to end the winback workflow the moment it's met, so the contact exits into the normal post-purchase journey instead of finishing out a sequence that no longer applies to them.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow Example: A Customer Who Should Not Receive a Winback Message</p>
                <p className="text-sm text-[#5C6880]">Not every quiet customer is a winback candidate. A customer who bought a one-time, non-repeatable item (a single custom piece, a one-off service) has no natural reason to be flagged as "overdue" the way a consumable buyer would. A customer currently in an open support conversation shouldn't receive a reactivation offer at the same time. And a customer who's already unsubscribed from the relevant channel shouldn't be re-added to a list just because a date passed. None of these are automation failures to fix they're reasons the automation should recognize "no genuinely relevant reason to contact them" as a valid outcome, not a gap to fill with a message anyway.</p>
              </div>
            </div>

            {/* Section: Choosing Email or SMS */}
            <h2 id="choosing-email-or-sms" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Choosing Email or SMS for GoHighLevel Retention and Winback Messages
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The choice isn't "email is for X, SMS is for Y" it's about what the specific message needs. A winback message is rarely time-critical in the way an abandoned-checkout reminder is, so the urgency SMS is good for isn't usually the deciding factor here; email's extra space to explain a relevant recommendation or show the product again often serves a reactivation message better. SMS can still make sense for a short, high-relevance nudge to a customer who's engaged with that channel before but it requires the same consent and frequency discipline as any other SMS automation, and sending the identical message on both channels adds noise rather than reach. Don't default to multi-channel simply because both are technically available.
            </p>

            {/* Section: What Can Be Personalized */}
            <h2 id="what-can-be-personalized" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Can Be Personalized in a GoHighLevel Winback Message
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              "We miss you" carries no information the customer can act on. What actually improves relevance is built from data you already have once the tracking above is in place: the specific product they bought, how long it's been, a logical next product based on purchase history, and their status as a first-time versus repeat customer. Only build messaging around fields you've actually confirmed are populated correctly a personalization token referencing a custom field that isn't reliably updated will sometimes show blank or wrong data, which reads worse than no personalization at all.
            </p>

            {/* Section: When Not to Send */}
            <h2 id="when-not-to-send" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Not to Send a GoHighLevel Winback Message
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The customer purchased recently</strong> your inactivity window logic should prevent this, but it's worth checking directly as a safeguard.</li>
              <li><strong className="text-[#1A2236]">The customer is already in another active lifecycle workflow</strong> overlapping automations are a design problem covered next.</li>
              <li><strong className="text-[#1A2236]">The product has no predictable repurchase pattern</strong> a one-time purchase doesn't need a replenishment-style nudge.</li>
              <li><strong className="text-[#1A2236]">The customer has opted out of the relevant channel</strong> respect that status rather than re-adding them because a date condition was met.</li>
              <li><strong className="text-[#1A2236]">There's no genuinely relevant offer or reason to reach out</strong> a message that exists only because the automation fired, with nothing useful to say, is worse than no message.</li>
              <li><strong className="text-[#1A2236]">The customer currently has an open support issue</strong> a reactivation message landing next to an unresolved complaint reads as tone-deaf at best.</li>
            </ul>

            {/* Section: How to Prevent Conflicts */}
            <h2 id="how-to-prevent-conflicts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Prevent Retention Workflow Conflicts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The underlying principle: <strong className="text-[#1A2236]">a customer should move through one appropriate lifecycle state at a time, not accumulate every automation that happens to match their data.</strong> In practice, that means checking for overlap before publishing a new workflow does this contact's data also qualify them for a currently-running post-purchase sequence, an abandoned-checkout recovery, or a different retention workflow built for a different segment? Exit conditions (Goal Events, tags marking "currently in sequence X") are what keep a single contact from being in more than one lifecycle automation that assumes it's the only one talking to them.
            </p>

            {/* Section: How Shopify Data Affects */}
            <h2 id="how-shopify-data-affects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Shopify Data Affects GoHighLevel Customer Retention Automation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a Shopify-connected store, customer records and order events reach GoHighLevel through the existing integration, and product and order-value data are available as trigger-level conditions the moment an order event fires. What the integration does not do is maintain a running recency/frequency/value profile on its own that's the same custom-field tracking described above, built on top of whatever order data the Shopify connection provides. Shopify remains the system of record for the actual purchase history; GoHighLevel's job is turning each new order event into an updated signal the retention logic can use. For the full picture of what syncs and how the connection works, see <Link href="/blog/gohighlevel-shopify-integration" className="text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs, How It Works & What You Can Automate</Link>.
            </p>

            {/* Section: How to Test */}
            <h2 id="how-to-test" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test a GoHighLevel Retention or Winback Workflow
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A successful test proves the workflow enrolled a contact and executed its steps it does not prove the timing, segmentation or message is right for every real customer. Test deliberately rather than assuming one pass covers every case:
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">A new customer,</strong> confirming the Order Count and Last Purchase Date fields populate correctly on their first order.</li>
              <li><strong className="text-[#1A2236]">A repeat customer,</strong> confirming the If/Else correctly routes them differently from a first-timer.</li>
              <li><strong className="text-[#1A2236]">A contact who crosses the inactivity window without reordering,</strong> confirming the winback sequence actually starts.</li>
              <li><strong className="text-[#1A2236]">A contact who purchases during the winback sequence,</strong> confirming the Goal Event exits them correctly rather than letting the sequence continue.</li>
              <li><strong className="text-[#1A2236]">A contact who should not qualify</strong> (recently purchased, already unsubscribed, in another active workflow), confirming they're correctly excluded.</li>
              <li><strong className="text-[#1A2236]">The actual message content,</strong> confirming any personalization fields render real data rather than blanks.</li>
            </ol>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common GoHighLevel Retention and Winback Mistakes
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why It Happens</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Better Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whyItHappens}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.betterApproach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Decision Framework */}
            <h2 id="decision-framework" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Decision Framework for Ecommerce Customer Lifecycle Stages
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Customer Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Possible Lifecycle Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionFrameworkData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.customerSituation}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.lifecycleApproach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: When Not to Own Entire Process */}
            <h2 id="when-not-to-own-entire-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When GoHighLevel Should Not Own the Entire Retention Process
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's strength here is CRM, communication and workflow logic deciding who hears from you and when, based on data you control. It isn't built to be a dedicated ecommerce merchandising or loyalty-points engine, and a business with highly specialized needs (sophisticated product-recommendation algorithms, a points-based loyalty program with its own redemption logic, large-scale lifecycle email operations with deep native RFM segmentation) may find a purpose-built ecommerce retention tool handles those specific jobs more natively than a general CRM adapted to them. That's not a reason to avoid GoHighLevel for retention generally it's a reason to be clear about which parts of the job it's actually suited for: the CRM and automation layer, not necessarily every specialized ecommerce retention feature a dedicated platform might offer out of the box.
            </p>

            {/* Section: Core Principle */}
            <h2 id="core-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Core Principle to Remember
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Retention and winback in GoHighLevel aren't a feature you switch on they're logic you build from data you already have: when someone bought, what, how often, and whether they've bought again. The timing should come from the product's actual cycle, not a round number; the exit should come from a Goal Event checking the real purchase event, not a fixed sequence length; and "no message" should be a valid outcome whenever there's no genuinely relevant reason to send one. Where the segmentation and lifecycle logic gets more involved than a single workflow can hold several product cycles, overlapping customer segments, multiple data sources feeding one set of conditions that's an architecture question worth scoping deliberately, which is the kind of work covered in <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow and automation setup</Link>.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Ecommerce Customer Retention
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

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still unsure how to build retention and winback for your ecommerce business?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Post Purchase Automation →</Link>
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow and Automation Setup →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Building Retention and Winback Automation?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help ecommerce businesses build retention and winback workflows in GoHighLevel that actually work.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Assessment
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building retention and winback automation for ecommerce businesses. All product details verified against HighLevel documentation as of September 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>
        </div>
      </div>

      {/* Booking Modal - Rendered at root level */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />

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