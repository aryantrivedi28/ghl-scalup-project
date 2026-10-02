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

export default function GoHighLevelEcommercePostPurchaseAutomationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-post-purchase-automation',
        'what-should-happen-after-purchase',
        'which-trigger-should-start',
        'workflow-1-confirmation',
        'workflow-2-fulfillment',
        'workflow-3-product-education',
        'workflow-4-review-requests',
        'workflow-5-cross-sell-upsell',
        'first-time-vs-repeat',
        'shopify-vs-native-store',
        'how-to-stop-pre-purchase-campaigns',
        'how-to-prevent-conflicts',
        'how-to-test',
        'common-mistakes',
        'decision-framework',
        'when-not-to-own-entire-journey',
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
      q: "What is post purchase automation in GoHighLevel?",
      a: "The set of automated workflows that respond to what happens after a purchase confirmation, fulfillment communication, product education, review requests and relevant follow-up offers each started by a different, specific event rather than one long timed sequence."
    },
    {
      q: "Can GoHighLevel automate post purchase emails and SMS?",
      a: "Yes, through standard workflow actions once the relevant purchase or fulfillment trigger has fired, using whichever channels the contact has valid information and consent for."
    },
    {
      q: "What trigger should I use after an ecommerce purchase?",
      a: "Payment Received for native Store purchases, or Shopify Order Placed for Shopify purchases Payment Received's documented sources don't include Shopify, so using it there means the workflow won't fire."
    },
    {
      q: "Can GoHighLevel automate Shopify post purchase workflows?",
      a: "Yes. Shopify Order Placed starts the confirmation stage, and Order Fulfilled is documented to cover Shopify alongside the native Store for the fulfillment stage."
    },
    {
      q: "When should I send a review request?",
      a: "After Order Fulfilled, with a wait long enough for realistic delivery and product use the exact timing depends on the product, not a universal number of days."
    },
    {
      q: "How do I stop sales emails after someone purchases?",
      a: "Add a Goal Event checking for the purchase event (Payment Received or Shopify Order Placed), set to end the pre-purchase workflow this checks continuously, so it catches a purchase completed at any point in the sequence."
    },
    {
      q: "How do I avoid sending duplicate post purchase messages?",
      a: "Audit whether more than one workflow listens for the same trigger, and use tags or If/Else conditions so a contact who already received a message doesn't qualify for an equivalent one from a different workflow."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-post-purchase-automation', title: 'What Is Ecommerce Post Purchase Automation?' },
    { id: 'what-should-happen-after-purchase', title: 'What Should Happen After a Purchase? The Customer Journey' },
    { id: 'which-trigger-should-start', title: 'Which Trigger Should Start a Post Purchase Workflow?' },
    { id: 'workflow-1-confirmation', title: 'Workflow #1: Immediate Purchase Confirmation' },
    { id: 'workflow-2-fulfillment', title: 'Workflow #2: Fulfillment and Delivery Communication' },
    { id: 'workflow-3-product-education', title: 'Workflow #3: Product Education' },
    { id: 'workflow-4-review-requests', title: 'Workflow #4: Review Requests' },
    { id: 'workflow-5-cross-sell-upsell', title: 'Workflow #5: Cross-Sell and Upsell Timing' },
    { id: 'first-time-vs-repeat', title: 'Treating First-Time Buyers Differently' },
    { id: 'shopify-vs-native-store', title: 'Shopify vs Native Store for Post Purchase' },
    { id: 'how-to-stop-pre-purchase-campaigns', title: 'How to Stop Pre-Purchase Campaigns After a Purchase' },
    { id: 'how-to-prevent-conflicts', title: 'How to Prevent Post Purchase Workflow Conflicts' },
    { id: 'how-to-test', title: 'How to Test a Post Purchase Workflow' },
    { id: 'common-mistakes', title: 'Common Post Purchase Automation Mistakes' },
    { id: 'decision-framework', title: 'A Decision Framework for Post Purchase Automation' },
    { id: 'when-not-to-own-entire-journey', title: 'When GoHighLevel Should Not Own the Entire Journey' },
    { id: 'core-principle', title: 'The Core Principle to Remember' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const triggerStageData = [
    { stage: 'Purchase confirmed', whatHappened: 'Payment succeeded', relevantTrigger: 'Payment Received (native Store/Website source) or Shopify Order Placed', source: 'Native Store uses Payment Received; Shopify orders use Shopify Order Placed Payment Received\'s documented sources don\'t include Shopify' },
    { stage: 'Order fulfilled', whatHappened: 'Order status changed to fulfilled', relevantTrigger: 'Order Fulfilled', source: 'Covers native Store and external sources including Shopify, plus shipping connectors' },
    { stage: 'Review eligible', whatHappened: 'A review was actually submitted', relevantTrigger: 'Product Review Submitted', source: 'Fires on submission, not on eligibility the business decides when to ask' },
  ];

  const mistakesData = [
    { problem: 'Workflow never fires for Shopify orders', whyItHappens: 'Built on Payment Received, which doesn\'t cover Shopify', betterApproach: 'Use Shopify Order Placed for Shopify purchase confirmation' },
    { problem: 'Review request arrives before the product does', whyItHappens: 'Timing tied to a fixed delay from purchase, not from fulfillment', betterApproach: 'Trigger off Order Fulfilled, then wait a realistic delivery period' },
    { problem: 'Customer keeps getting sales emails after buying', whyItHappens: 'No exit condition from pre-purchase sequences', betterApproach: 'Add a Goal Event on the purchase event to end those workflows' },
    { problem: 'Everyone gets the same "welcome" sequence regardless of purchase history', whyItHappens: 'No first-purchase tag or If/Else check', betterApproach: 'Tag on first purchase, branch repeat buyers into a shorter sequence' },
    { problem: '"Order Fulfilled" message implies the customer has received the item', whyItHappens: 'Treating a status change as a delivery confirmation', betterApproach: 'Match message language to what the event actually confirms' },
    { problem: 'Upsell offered for a product the customer already owns', whyItHappens: 'No purchase-history condition before sending the offer', betterApproach: 'Check order history before enrolling in the cross-sell workflow' },
    { problem: 'Duplicate post purchase messages', whyItHappens: 'More than one workflow listens for the same trigger', betterApproach: 'Audit existing workflows for the same trigger before publishing a new one' },
  ];

  const decisionFrameworkData = [
    { situation: 'Customer just completed payment', appropriateApproach: 'Confirmation, plus exit from any pre-purchase sequence' },
    { situation: 'Order has been marked fulfilled', appropriateApproach: 'Fulfillment/shipping communication, worded as a status update' },
    { situation: 'Customer likely needs help using the product', appropriateApproach: 'Product education, not promotional content' },
    { situation: 'Customer has had realistic time with the product', appropriateApproach: 'Review request' },
    { situation: 'Customer bought Product A with a logical Product B', appropriateApproach: 'Cross-sell, after confirming they don\'t already own B' },
    { situation: 'Customer is a repeat buyer', appropriateApproach: 'Shorter, different sequence than the first-time journey' },
    { situation: 'Customer hasn\'t purchased again after a reasonable window', appropriateApproach: 'Retention/winback logic, built from tags and wait-for-condition rather than a dedicated trigger' },
    { situation: 'A new workflow might overlap with an existing one', appropriateApproach: 'Review entry triggers and exit conditions on both before publishing' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help building your post purchase automation.</p>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Post Purchase Automation: Workflows & Examples</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Post Purchase</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Ecommerce Post Purchase Automation:<br />
            <span className="text-[#F8D000]">Workflows, Triggers & Examples</span>
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
            Post purchase automation is the set of automated messages and actions that happen after an ecommerce customer completes a purchase a confirmation, a shipping update, help using the product, a review request, and eventually a relevant next offer. GoHighLevel can automate each of these stages once the right event reaches it, from either the native Ecommerce Store or a connected Shopify store. But "automate the post purchase journey" is not one workflow it's several smaller decisions, each with its own trigger, timing and purpose, and treating it as one long email sequence is where most of this goes wrong.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This article is about how to think through that journey and build it correctly in GoHighLevel: which event should start each stage, what each event actually tells you, how to avoid messaging someone who already bought (or already left a review, or already got the email twice), and where the native Store and Shopify behave differently. It assumes you already know your products and customers it explains the automation side in plain language first, then the technical implementation.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Post Purchase Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#which-trigger-should-start"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Trigger Guide
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
              <div className="text-sm font-bold text-white mb-2">Need Post Purchase Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help ecommerce businesses build post purchase automation in GoHighLevel.</p>
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

            {/* Section: What Is Post Purchase Automation */}
            <h2 id="what-is-post-purchase-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is Ecommerce Post Purchase Automation in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A <strong className="text-[#1A2236]">workflow</strong> is just a set of instructions GoHighLevel follows after something happens a purchase can be the starting event, and from there the workflow can wait, send a message, check a condition, and decide what to do next based on what's actually true at that moment. Post purchase automation is simply a series of these workflows, each one tied to a different stage of what happens after someone buys.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It's easy to think of post purchase automation as "the confirmation email," but confirmation is only the first stage. A customer who just bought is at the very start of a journey that includes getting the product, knowing what to do with it, being asked how it went, and if the business handles it well coming back. Each of those stages is a different workflow, often started by a different event, not one long sequence running on a timer.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-ecommerce-post-purchase-automation.png"
                  alt="GoHighLevel Post Purchase Automation: Customer journey stages and workflow triggers"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Post Purchase Automation: Customer journey stages and workflow triggers</span>
              </div>
            </div>

            {/* Section: What Should Happen After Purchase */}
            <h2 id="what-should-happen-after-purchase" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should Happen After an Ecommerce Purchase? The Customer Journey
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The reasoning behind sequencing matters more than the sequence itself, so it's worth laying out before any workflow-building: <strong className="text-[#0E9BF0]">purchase → confirmation → fulfillment → product use → review → relevant next purchase.</strong> Each arrow is a decision point, not an automatic timer. Confirmation should happen because the purchase is confirmed, not because a certain number of minutes have passed. A review request should happen because the customer has plausibly had time to use the product, not because three days feels like a round number. Getting this sequencing right is what separates a workflow that helps the customer from one that just sends messages on a schedule.
            </p>

            {/* Section: Which Trigger Should Start */}
            <h2 id="which-trigger-should-start" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which GoHighLevel Trigger Should Start a Post Purchase Workflow?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Different stages of the post purchase journey need different triggers, because they're reacting to genuinely different events a payment succeeding is not the same event as an order being marked fulfilled. Getting the trigger wrong is the single most common reason a post purchase workflow looks correctly built but never fires, or fires at the wrong moment.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Actually Happened</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Relevant Trigger</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {triggerStageData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatHappened}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.relevantTrigger}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Notice that nothing in this table starts a workflow just because "some time has passed since purchase." Every stage here is tied to something that actually happened, which is the design principle the rest of this article builds on. The mechanics of each trigger's filters are covered in more depth in the <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store guide</Link>; this article focuses on how to sequence them into a journey.
            </p>

            {/* Section: Workflow 1 Confirmation */}
            <h2 id="workflow-1-confirmation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Post Purchase Workflow #1: Immediate Purchase Confirmation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The confirmation workflow's only job is to confirm the purchase went through and tell the customer what to expect next order details, an estimated timeline if you have one, and how to get support. It shouldn't include an upsell, a review request, or anything that competes with that one job. Firing this off Payment Received (native Store) or Shopify Order Placed (Shopify) makes sense because the purchase has definitively happened at that point there's no ambiguity to wait out.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Hypothetical example:</strong> A first-time skincare customer buys a cleanser from a Shopify store. Shopify Order Placed fires, the workflow confirms the order and estimated shipping window by email, and critically a Goal Event checking for that same purchase removes the customer from any pre-purchase nurture or abandoned-checkout sequence they were previously in, so they don't keep getting messages trying to sell them something they already bought.
            </p>

            {/* Section: Workflow 2 Fulfillment */}
            <h2 id="workflow-2-fulfillment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Post Purchase Workflow #2: Fulfillment and Delivery Communication
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Payment Received and Order Fulfilled are not the same event, and conflating them causes real problems.</strong> Payment Received (or Shopify Order Placed) tells you the money changed hands. Order Fulfilled tells you the order's status was changed to fulfilled which in practice usually means a label was printed or an item was marked as shipped. Current documentation does not establish that Order Fulfilled means the customer has physically received the package; it's a status change the business controls, not a delivery confirmation from a carrier.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That distinction decides what you can safely say in the message. "Your order has shipped" is accurate when triggered by Order Fulfilled. "We hope you're enjoying your new product" is not that message belongs later, once there's been realistic time for delivery and use, not immediately when the status flips.
            </p>

            {/* Section: Workflow 3 Product Education */}
            <h2 id="workflow-3-product-education" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Post Purchase Workflow #3: Product Education
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not every post purchase message needs to sell something the next useful message is often just useful, not promotional, and that's deliberate. A product that requires setup, care, or correct use benefits from a message that helps the customer succeed with what they already bought, which also reduces support requests and returns.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Hypothetical example:</strong> A customer buys a product that requires assembly or calibration before first use. After Order Fulfilled (or after enough time has passed for likely delivery, if fulfillment data isn't reliable for timing), a workflow sends a plain setup guide not a cross-sell, not a review request, just the information that makes the purchase actually work. This is also a natural place to surface support contact information, since a confused customer who can't find help is more likely to request a refund than a happy one who got the product working.
            </p>

            {/* Section: Workflow 4 Review Requests */}
            <h2 id="workflow-4-review-requests" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Post Purchase Workflow #4: Review Requests
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A review request should happen once the customer has plausibly used the product not immediately on purchase, and not so late that the experience has faded from memory. What "plausibly used" means depends entirely on the product: a digital download might be usable within minutes, while a physical product needs delivery time plus a reasonable period of actual use. HighLevel's Product Review Submitted trigger fires when a review is submitted, which tells you a review happened it's the trigger for reacting to a review (a thank-you, an internal alert for a negative one), not the mechanism that decides when to ask for one in the first place. The timing of the ask is a wait-step and business-judgment decision layered on top of fulfillment or delivery timing, not something the trigger itself handles.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Hypothetical example:</strong> A customer's order is marked fulfilled. The workflow waits a period appropriate to the product and expected delivery time, then sends a review request. If Product Review Submitted later fires for that contact, a separate short workflow thanks them and that Goal Event also stops any further review reminders for that order, so they don't get asked twice.
            </p>

            {/* Section: Workflow 5 Cross-Sell Upsell */}
            <h2 id="workflow-5-cross-sell-upsell" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Post Purchase Workflow #5: Cross-Sell and Upsell Timing
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A cross-sell or upsell workflow follows the logic of "bought Product A → might reasonably want Product B," but the timing is where most of the judgment is required not three days, not a fixed number, but <strong className="text-[#1A2236]">context-dependent</strong>. The message is premature if the customer hasn't received the first product yet, pointless if they've already bought the recommended item, and tone-deaf if it lands at the same time as a support or fulfillment message about the original order. None of that is solved by picking a universal delay; it's solved by sequencing the offer after confirmation that the first purchase is actually settled fulfilled, ideally used and checking that the customer doesn't already own the thing you're about to recommend.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Hypothetical example:</strong> A customer buys a coffee grinder. Product B compatible filters is a reasonable follow-up, but only after enough time has passed that the customer has likely received and started using the grinder, and only if their order history doesn't already show a filter purchase. A workflow built on Order Fulfilled, with a wait tied to realistic delivery time and a condition checking prior purchases, avoids sending the offer while the first box is still in transit.
            </p>

            {/* Section: First-Time vs Repeat */}
            <h2 id="first-time-vs-repeat" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Treating First-Time Buyers Differently From Repeat Customers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A first-time buyer and a fifth-time buyer arguably shouldn't get an identical post purchase sequence the second doesn't need the same orientation and trust-building as the first, and the first probably shouldn't skip straight into VIP-style treatment meant for someone with purchase history. GoHighLevel doesn't have a dedicated "repeat customer" trigger; this is a design pattern built from standard tools, not a special feature. The common approach is a tag applied after a customer's first completed purchase, checked with an If/Else condition on subsequent purchase workflows if the tag is present, route into a shorter, more direct sequence; if not, route into the fuller first-time journey. The same pattern extends to high-value orders, using the order/cart value data available at the trigger.
            </p>

            {/* Section: Shopify vs Native Store */}
            <h2 id="shopify-vs-native-store" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Shopify and the Native GoHighLevel Ecommerce Store Differ for Post Purchase Automation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The customer journey logic in this article confirm, fulfill, educate, review, offer applies the same way regardless of ecommerce source. What differs is the trigger wiring underneath it: a native Store purchase fires Payment Received, while a Shopify purchase fires Shopify Order Placed, and a workflow built on the wrong one of the two will simply never catch the other platform's orders. Order Fulfilled, by contrast, is documented to cover both native Store and external sources including Shopify, so that part of the journey doesn't need separate workflows by source only the purchase-confirmation stage does.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the full mechanics of what Shopify data reaches GoHighLevel and how the connection itself works, see <Link href="/blog/gohighlevel-shopify-integration" className="text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs, How It Works & What You Can Automate</Link>. For the native Store's own product, checkout and order behavior, see <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store: How It Works & Who It Fits</Link>.
            </p>

            {/* Section: How to Stop Pre-Purchase Campaigns */}
            <h2 id="how-to-stop-pre-purchase-campaigns" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Stop Pre-Purchase Campaigns Once a Customer Buys
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once someone completes a purchase, they should leave whatever pre-purchase automation they were in most importantly, <Link href="/blog/gohighlevel-abandoned-checkout" className="text-[#0E9BF0] hover:underline">abandoned checkout recovery</Link> and move into the appropriate post purchase journey instead. A customer who keeps receiving "complete your purchase" reminders after they've already paid is the fastest way to make automation feel broken.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The documented mechanism for this is a <strong className="text-[#1A2236]">Goal Event</strong> checking for Payment Received (or the equivalent purchase event for the relevant source), set to end the pre-purchase workflow the moment that goal is met. Goal Events check continuously across the whole workflow, not just at one step, which matters because a customer can complete the purchase at any point while sitting in a wait step elsewhere in the sequence. This same mechanism is what the abandoned checkout article recommends for exiting recovery sequences the post purchase side of that same transition is simply making sure the customer lands somewhere useful afterward, rather than nowhere at all.
            </p>

            {/* Section: How to Prevent Conflicts */}
            <h2 id="how-to-prevent-conflicts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Prevent Post Purchase Workflow Conflicts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is where a technically correct set of workflows can still deliver a bad customer experience, and it's worth designing against deliberately rather than discovering it from a customer complaint.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A customer gets a sales email right after buying.</strong> This happens when the purchase doesn't trigger an exit from pre-purchase nurture or promotional sequences add the Goal Event exit described above wherever a customer could plausibly already be enrolled.</li>
              <li><strong className="text-[#1A2236]">A review request arrives before the product could have arrived.</strong> This happens when the review workflow's wait is tied to a fixed number of days rather than to Order Fulfilled plus a realistic delivery allowance.</li>
              <li><strong className="text-[#1A2236]">An upsell lands at the same time as a fulfillment or support message.</strong> Stagger workflows deliberately, or add a condition checking whether another message already went out recently, rather than letting independent workflows fire without awareness of each other.</li>
              <li><strong className="text-[#1A2236]">A repeat buyer gets first-time-buyer messaging.</strong> Covered above this needs the first-purchase tag and an If/Else check before routing.</li>
              <li><strong className="text-[#1A2236]">The same event enrolls a contact in more than one workflow that does the same job.</strong> Common when a workflow is duplicated for testing and never retired audit which workflows actually listen for the same trigger before publishing a new one.</li>
            </ul>

            {/* Section: How to Test */}
            <h2 id="how-to-test" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test a GoHighLevel Post Purchase Workflow
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A completed test proves the trigger fired and the workflow executed it does not prove the complete customer experience is actually right, which is a broader question than whether the automation technically works.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Place a real test purchase</strong> (or the lowest-cost real transaction your payment setup allows) rather than manually creating a contact a manually added contact doesn't prove the trigger's actual detection path works.</li>
              <li><strong className="text-[#1A2236]">Confirm the confirmation workflow fires</strong> and check its content and timing.</li>
              <li><strong className="text-[#1A2236]">Confirm the test purchase exits any pre-purchase sequence</strong> the test contact was previously in.</li>
              <li><strong className="text-[#1A2236]">Mark the test order fulfilled</strong> and confirm the fulfillment communication fires check wording doesn't overclaim delivery.</li>
              <li><strong className="text-[#1A2236]">Let the review-request wait elapse</strong> (or use workflow test mode's compressed timers to check logic quickly) and confirm the message and timing.</li>
              <li><strong className="text-[#1A2236]">Submit a test review</strong> if applicable, and confirm the thank-you workflow fires and the reminder sequence stops.</li>
              <li><strong className="text-[#1A2236]">Check whether a cross-sell workflow would fire appropriately</strong> does it correctly skip if the "recommended" product is already in the order history?</li>
              <li><strong className="text-[#1A2236]">Repeat the purchase as the same test contact</strong> and confirm the first-time-buyer tag correctly routes the second purchase differently.</li>
            </ol>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Post Purchase Automation Mistakes
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
              A Decision Framework for Post Purchase Automation
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Appropriate Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionFrameworkData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.appropriateApproach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: When Not to Own Entire Journey */}
            <h2 id="when-not-to-own-entire-journey" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When GoHighLevel Should Not Own the Entire Post Purchase Journey
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel doesn't need to be the system of record for every part of the ecommerce operation, and treating it that way creates unnecessary risk. The <strong className="text-[#1A2236]">commerce system</strong> Shopify or the native Store should generally remain the source of truth for inventory, shipping status, transaction processing and product data. GoHighLevel's role is the <strong className="text-[#1A2236]">CRM and communication layer</strong>: deciding who gets messaged, when, and with what, based on the commerce events it receives. If a planned automation needs commerce data that isn't actually exposed to GoHighLevel's workflows a specific inventory count, a carrier's real-time delivery confirmation that's a sign the capability belongs to the commerce platform, not something to approximate inside a workflow.
            </p>

            {/* Section: Core Principle */}
            <h2 id="core-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Core Principle to Remember
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Post purchase automation isn't one workflow it's a sequence of decisions, each one tied to something that actually happened: a payment, a fulfillment status change, a review submission, a prior purchase. Build each stage off the event that actually represents it, let a Goal Event handle the exit from whatever came before, and let real purchase history not a fixed number of days decide what a given customer sees next. Where that logic gets more involved than a single workflow can comfortably hold, <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow and automation setup</Link> is the kind of implementation work worth scoping deliberately rather than bolting together one condition at a time.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Post Purchase Automation
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
              Still unsure how to build post purchase automation for your ecommerce business?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-ecommerce-store" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store: How It Works & Who It Fits →</Link>
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs →</Link>
                <Link href="/blog/gohighlevel-abandoned-checkout" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Abandoned Checkout Automation →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow and Automation Setup →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Building Post Purchase Automation?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help ecommerce businesses build post purchase workflows in GoHighLevel that actually work.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building post purchase automation for ecommerce businesses. All product details verified against HighLevel documentation as of September 2026.
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