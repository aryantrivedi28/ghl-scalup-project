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
  Rocket,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelEcommerceReviewAutomationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-review-means',
        'where-review-can-land',
        'how-to-decide-ready',
        'what-workflow-can-see',
        'readiness-conditions',
        'product-type-clock',
        'how-request-workflow-built',
        'reputation-route',
        'product-review-route',
        'shopify-route',
        'email-or-sms-consent',
        'handling-answer-routing',
        'edge-cases',
        'how-to-test',
        'when-request-doesnt-fire',
        'when-gohighlevel-enough',
        'who-owns-exception',
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
      q: "Can GoHighLevel send review requests automatically after an ecommerce order?",
      a: "Yes. A workflow can start from Order Fulfilled, wait, check readiness and then use the Review Request action for a public business review, or an ordinary email or SMS for a product page or feedback form."
    },
    {
      q: "Does GoHighLevel have product reviews?",
      a: "Yes, on HighLevel Ecommerce Stores. Customers write reviews on the product page, the owner approves them in the Reviews dashboard and can reply, and the Product Review Submitted trigger fires on submission."
    },
    {
      q: "Which trigger should start a review request workflow?",
      a: "Order Fulfilled, followed by a wait suited to the product, rather than a purchase event. Payment Received or Shopify Order Placed tell you the order exists, not that it has shipped."
    },
    {
      q: "Does Product Review Submitted wait for approval?",
      a: "No. It fires when the review is submitted, whether or not it has been approved, and editing a review later doesn't fire it again."
    },
    {
      q: "Can I send review requests only to customers who had a good experience?",
      a: "Google's merchant policy for Maps says businesses may not selectively solicit positive reviews. Ask every customer who is ready, and use routing to help support respond, not to decide who sees the review link."
    },
    {
      q: "Can I offer a discount for a review?",
      a: "Google's merchant policy rules out payment, discounts and free goods in exchange for reviews on its platform, and the FTC's consumer reviews rule addresses incentives tied to review sentiment. Check each platform's rules and take advice before offering a reward."
    },
    {
      q: "Do I need a Google Business Profile?",
      a: "Not to send requests. A custom review link can point to another site or a product page. Google's own help says online-only businesses aren't eligible for a profile, so check current eligibility before planning around Google reviews."
    },
    {
      q: "How many reminders should I send?",
      a: "There's no documented right number. Reputation lets you set retries until the link is clicked, and HighLevel's help article mentions that many teams start with two or three. For ecommerce, fewer is usually safer, and a reminder should never land after a customer has reported a problem."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-review-means', title: 'What a "Review" Means in GoHighLevel: Three Requests Living in Two Systems' },
    { id: 'where-review-can-land', title: 'Where a Review Can Land: The Public Destination Problem' },
    { id: 'how-to-decide-ready', title: 'How to Decide a Customer Is Ready for a Review Request' },
    { id: 'what-workflow-can-see', title: 'What the Workflow Can See and What It Can\'t' },
    { id: 'readiness-conditions', title: 'Readiness Is a Set of Conditions, Not a Number of Days' },
    { id: 'product-type-clock', title: 'How Product Type Moves the Clock: Three Hypothetical Examples' },
    { id: 'how-request-workflow-built', title: 'How a Review Request Workflow Is Built' },
    { id: 'reputation-route', title: 'The Reputation Route: the Review Request Action' },
    { id: 'product-review-route', title: 'The Product Review Route on a HighLevel Ecommerce Store' },
    { id: 'shopify-route', title: 'The Shopify Route' },
    { id: 'email-or-sms-consent', title: 'Email or SMS for Review Requests: Consent Comes Before Channel Preference' },
    { id: 'handling-answer-routing', title: 'Handling the Answer: Routing Feedback Without Gating Reviews' },
    { id: 'edge-cases', title: 'Edge Cases: Second Orders, Multi-Item Orders, Silent Customers' },
    { id: 'how-to-test', title: 'How to Test a Review Request Workflow' },
    { id: 'when-request-doesnt-fire', title: 'When a Review Request Doesn\'t Fire, Fires Early or Fires Twice' },
    { id: 'when-gohighlevel-enough', title: 'When GoHighLevel Is Enough and When a Dedicated Review Platform Fits Better' },
    { id: 'who-owns-exception', title: 'Who Owns the Exception' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const reviewTypesData = [
    { whatYouWant: 'A public review of your business on an outside platform', whereItLives: 'Reputation', howRequestMade: 'The Review Request action in a workflow, or a manual send from a contact record or Reputation → Requests. Messages, timing and retries are set in Reputation settings.', whatTellsYou: 'The review appears on the outside platform and in Reputation. The documentation reviewed doesn\'t describe matching it to a specific order.' },
    { whatYouWant: 'A review of one product on a HighLevel Ecommerce Store', whereItLives: 'The store\'s product pages, moderated under Payments → Products → Reviews', howRequestMade: 'The customer clicks Write a Review on the product page. A request is an ordinary email or SMS that links there.', whatTellsYou: 'The Product Review Submitted trigger fires on submission, before anyone approves the review.' },
    { whatYouWant: 'Private feedback', whereItLives: 'A form, a survey, or a reply to your message', howRequestMade: 'An ordinary email or SMS that links to the form or survey.', whatTellsYou: 'Form Submitted or Survey Submitted triggers, or the Customer Replied trigger.' },
  ];

  const workflowVisibilityData = [
    { question: 'Has the customer paid?', visible: 'Yes', how: 'Payment Received for native store purchases; Shopify Order Placed for Shopify purchases.' },
    { question: 'Has the order been marked fulfilled?', visible: 'Yes', how: 'Order Fulfilled covers the native store and Shopify. Its filters include shipping carrier and tracking number.' },
    { question: 'Has the parcel arrived?', visible: 'Not as an event', how: 'None of the ecommerce triggers HighLevel documents is a delivery confirmation.' },
    { question: 'Has the customer used the product?', visible: 'No', how: 'Estimate it with a wait that suits the product.' },
    { question: 'Is something wrong with the order?', visible: 'Only if you record it', how: 'A support tag, a reply, a task, or a refund event (HighLevel lists a refund trigger under Payments).' },
    { question: 'Have they already been asked, or already reviewed?', visible: 'Only if you record it', how: 'A tag or custom field. Store reviews can set a tag through Product Review Submitted.' },
    { question: 'May we use this channel?', visible: 'Partly', how: 'Contact consent and unsubscribe status. The SMS section covers the catch.' },
  ];

  const readinessChecklist = [
    'The order is fulfilled, and hasn\'t been refunded or returned.',
    'The delivery-and-use window that suits this product has passed.',
    'There is no open support issue on the contact.',
    'This customer hasn\'t been asked about this order, or recently about another.',
    'They haven\'t already left the review.',
    'There is a channel you may use to reach them.',
  ];

  const edgeCasesData = [
    { situation: 'The customer buys again before the request goes out', whatGoesWrong: 'Two requests, or a request about an order that\'s already old news', whatToDesign: 'One request per customer per window, based on the most recent fulfilled order', whatGHLGives: 'Re-entry settings decide whether they enter again; a custom field records the last request.' },
    { situation: 'Several orders over time', whatGoesWrong: 'Request fatigue', whatToDesign: 'A cooldown after the last request', whatGHLGives: 'No built-in cooldown found; build it with a date field and an If/Else.' },
    { situation: 'Several products in one order', whatGoesWrong: 'Which product is the request about?', whatToDesign: 'Choose deliberately, for example one request about the main item', whatGHLGives: 'Product filters work per trigger; no documented loop over an order\'s line items was found.' },
    { situation: 'The parcel is late or never arrives', whatGoesWrong: 'The request lands in the middle of a delivery problem', whatToDesign: 'An open-issue tag pauses the request; a longer wait when no tracking number exists', whatGHLGives: 'No delivery event. The tracking number filter on Order Fulfilled shows that tracking exists, not that the parcel arrived.' },
    { situation: 'The customer already reviewed', whatGoesWrong: 'A duplicate ask', whatToDesign: 'Tag from a Product Review Submitted workflow, checked before every send', whatGHLGives: 'That trigger covers HighLevel store reviews only.' },
    { situation: 'The customer doesn\'t respond', whatGoesWrong: 'One more nudge, or stop?', whatToDesign: 'Fewer reminders rather than more', whatGHLGives: 'Reputation retries until the link is clicked, up to a maximum you set. HighLevel\'s help article says many teams start with two or three retries.' },
    { situation: 'The customer responds with a problem', whatGoesWrong: 'The next promotion goes out anyway', whatToDesign: 'A pause tag and a task for a person', whatGHLGives: 'Rating filter, Customer Replied trigger, User Replied goal.' },
    { situation: 'The customer has opted out of a channel', whatGoesWrong: 'A request on a channel they refused', whatToDesign: 'A consent check before each send', whatGHLGives: 'Unsubscribe and STOP handling.' },
  ];

  const troubleshootingData = [
    { problem: 'The request never sends', likelyCause: 'Reputation SMS or email requests are off, or no templates are assigned; or the contact never enrolled', whatToCheck: 'Reputation settings toggles and the assigned first-send and retry templates; Enrollment History', fix: 'Enable the channel and assign templates. If the contact didn\'t enrol, work through why a workflow isn\'t triggering.' },
    { problem: 'The request arrives too early', likelyCause: 'The wait runs from payment rather than fulfilment, or the order was marked fulfilled at label creation', whatToCheck: 'The workflow\'s start event and when your team changes order status', fix: 'Start from Order Fulfilled and lengthen the window, or change when the status is set.' },
    { problem: 'The request arrives later than expected', likelyCause: 'The workflow wait and the Reputation first-send delay stack', whatToCheck: 'Both delays, added together', fix: 'Shorten one of them.' },
    { problem: 'The request goes twice', likelyCause: 'Two workflows listen for the same event, a manual send overlaps, or retries continue after the customer already acted', whatToCheck: 'Which workflows share a trigger; whether a stop condition exists', fix: 'Retire duplicates; add the Review Request Clicked or tag goal.' },
    { problem: 'Shopify orders never start it', likelyCause: 'The workflow was built on Payment Received, whose documented sources don\'t include Shopify', whatToCheck: 'The trigger the workflow uses', fix: 'Use Shopify Order Placed or Order Fulfilled.' },
    { problem: 'Product Review Submitted doesn\'t fire', likelyCause: 'Store reviews are switched off, the review was left on a Shopify product page, or a filter excludes it', whatToCheck: 'Store review settings and the trigger\'s product, rating and store filters', fix: 'Re-enable reviews or loosen filters; remember it takes one product per trigger.' },
    { problem: 'SMS requests aren\'t delivered', likelyCause: 'A2P registration or consent isn\'t in place for this message type', whatToCheck: 'Campaign registration and consent wording', fix: 'See the A2P opt-in language guide.' },
    { problem: 'The contact enrolled but a later step failed', likelyCause: 'A step after the wait errored or was skipped', whatToCheck: 'The run in Execution Logs', fix: 'Follow how to find the failed step.' },
  ];

  const whenGHLEnoughData = [
    { ifYouNeed: 'Request timing driven by order status, tags and the rest of your CRM', ghl: 'Yes. Workflow conditions and the Review Request action or ordinary messages cover it.', dedicatedTool: 'The timing logic is simple and your review app already sends request emails.' },
    { ifYouNeed: 'Reviews on your own HighLevel store\'s product pages, with approval and replies', ghl: 'Documented: customers submit, you approve, reply and filter by time, rating, product and store.', dedicatedTool: 'You need capabilities the documentation reviewed doesn\'t describe, such as photo or video reviews at scale.' },
    { ifYouNeed: 'Reviews shown on Shopify product pages', ghl: 'Not where those reviews are collected or displayed.', dedicatedTool: 'Always. That is what Shopify review apps exist for.' },
    { ifYouNeed: 'Order-linked, verified-buyer reviews', ghl: 'Not described. The form asks for a name and an email.', dedicatedTool: 'Some Shopify review apps advertise order-linked verified reviews. Check what each actually does.' },
    { ifYouNeed: 'Public business reviews monitored in one place', ghl: 'Reputation monitors connected platforms and sends requests.', dedicatedTool: 'You need heavy moderation, aggregation or syndication across many sources.' },
  ];

      const ProjectHelpCard = () => (
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
                  <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
                  <Link
                        // onClick={handleOpenBooking}
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Ecommerce Review Automation: When to Ask</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Review Automation</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Ecommerce Review Automation:<br />
            <span className="text-[#F8D000]">When to Ask, What to Trigger and What to Do With the Answer</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Verified against HighLevel documentation as of October 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Picture a review request that does everything it was built to do. A customer pays on Monday. The order is marked fulfilled on Tuesday. On Thursday the workflow sends a friendly message asking how the product is working out. The trigger fired, the wait ran, the email landed. The parcel is still in a depot two states away.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Nothing in that sequence is broken, which is exactly the problem. Review automation rarely fails at the sending. It fails at an assumption sitting underneath the sending: that the customer has had a fair chance to form an opinion. A review request quietly says <em>you've tried this, so tell us what you think</em>, and a workflow that can't check that statement will get it wrong for some of your customers every week.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Can GoHighLevel automate review requests for an ecommerce store?</strong> Yes, but the feature you need depends on the kind of review you want. Public reviews of your business run through Reputation and its Review Request action. Product reviews on a HighLevel store are written on the product page and reach your workflows through a separate trigger. Private feedback is a form, a survey or a reply. None of these knows whether the product has arrived, let alone been used. That judgement has to be built from events GoHighLevel can see, mainly the order being fulfilled, plus waits and conditions you choose.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This guide is about building that judgement: what "ready" means for a review request, how the request is assembled on each route, what to do when the answer comes back, and where GoHighLevel stops being the right tool. How Shopify's connection works is covered in the <Link href="/blog/gohighlevel-shopify-integration" className="text-[#0E9BF0] hover:underline">GoHighLevel Shopify integration</Link> guide, and the wider journey around a purchase sits in <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-[#0E9BF0] hover:underline">post purchase automation</Link>. This article assumes both and goes deeper on the review step.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Review Automation Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-decide-ready"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Readiness Conditions
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
                5+ years GHL experience · 200+ systems built globally. All product details verified against HighLevel documentation as of October 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Review Automation Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help ecommerce businesses build review automation in GoHighLevel.</p>
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

            {/* Section: What Review Means */}
            <h2 id="what-review-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What a "Review" Means in GoHighLevel: Three Requests Living in Two Systems
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              People say "review automation" as though it were one feature. In GoHighLevel it is two systems and a workaround, and choosing the wrong one is the most common reason a setup ends up doing something other than what the owner pictured.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What You Want</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Where It Lives</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How the Request Is Made</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What Tells You It Happened</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewTypesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.whatYouWant}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whereItLives}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.howRequestMade}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatTellsYou}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three consequences follow, and each one changes how you build.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The Review Request action points at your business's Review Link, which is set once in Reputation settings.</strong> It isn't built to ask about a particular product, so a product-specific ask works better as a normal email or SMS carrying the product link. That is a reading of how the documentation fits together rather than a stated limitation, so test it in your own account.</li>
              <li><strong className="text-[#1A2236]">A store product review needs only a name and an email address.</strong> HighLevel's documentation describes no check that the reviewer bought the product. Don't present these as verified-buyer reviews unless you've added that check yourself.</li>
              <li><strong className="text-[#1A2236]">On a Shopify store, the product pages belong to Shopify.</strong> The product review feature and its trigger are documented for HighLevel stores. Reviews on Shopify product pages are usually collected by a review app installed in Shopify. GoHighLevel's job there is the timing and the follow-through, not the review form.</li>
            </ul>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-ecommerce-review-automation.png"
                  alt="GoHighLevel Ecommerce Review Automation: Three review routes and the readiness decision flow"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Ecommerce Review Automation: Three review routes and the readiness decision flow</span>
              </div>
            </div>

            {/* Section: Where Review Can Land */}
            <h2 id="where-review-can-land" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where a Review Can Land: The Public Destination Problem for Online Stores
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The Reputation route needs somewhere to send people. HighLevel's review link can balance traffic across connected platforms such as Google, or send everyone to one custom URL, and its help article notes that Google Business Profile only needs to be connected if you want Google routing. That flexibility matters for ecommerce, because the obvious destination may not be open to you.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Google's Business Profile help says profiles are for businesses that meet customers face to face, and that an online-only business with a virtual storefront and no in-person services isn't eligible. Some third-party guides say online stores can qualify, for instance as service-area businesses. Because the sources disagree and Google's eligibility rules change, check Google's current guidance for your own situation before building a flow around a Google review link. If it isn't available, a custom link to another public review site, or a product page, is the fallback. The workflow logic in the rest of this article is the same either way.
            </p>

            {/* Section: How to Decide Ready */}
            <h2 id="how-to-decide-ready" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Decide a Customer Is Ready for a Review Request in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The useful question isn't how many days to wait. It's what has to be true before the request makes sense, and which of those things the workflow can actually observe.
            </p>

            {/* Section: What Workflow Can See */}
            <h2 id="what-workflow-can-see" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              What the Workflow Can See and What It Can't
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Question</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Visible to the Workflow?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">How</th>
                  </tr>
                </thead>
                <tbody>
                  {workflowVisibilityData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.question}</td>
                      <td className={`py-3 px-3 font-semibold ${item.visible === 'Yes' || item.visible === 'Partly' ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.visible}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Order Fulfilled is the best signal in that list and it is still weaker than it looks. It fires when someone changes the order's status, often when a label is printed. It says the clock can start. It doesn't say the customer is holding the box.
            </p>

            {/* Section: Readiness Conditions */}
            <h2 id="readiness-conditions" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Readiness Is a Set of Conditions, Not a Number of Days
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Rather than "send seven days after purchase", treat readiness as a checklist the workflow evaluates when the wait ends. The request goes out only if all of these hold:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {readinessChecklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A wait gets you to roughly the right moment. The conditions check whether this particular customer should still receive the message when they get there. The wait is a guess about time; the conditions are facts about the customer. Several of those facts, such as when someone was last asked, aren't tracked for you. The custom-field and tag approach described in the <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-[#0E9BF0] hover:underline">retention and winback guide</Link> applies directly: a Last Review Request Date field, a Reviewed tag and an open-issue tag give the workflow something to check.
            </p>

            {/* Section: Product Type Clock */}
            <h2 id="product-type-clock" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Product Type Moves the Clock: Three Hypothetical Examples
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Skincare.</strong> Results take weeks, so a request that lands days after delivery tends to collect opinions about the packaging and the shipping speed rather than the product. The better moment may be well after delivery, and later still for a product people use up slowly.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Apparel.</strong> Fit is obvious within days, which argues for an earlier ask. But some buyers are mid-decision about keeping the item, and a review request that arrives just as a return is being processed feels careless. A condition that checks for a return or refund matters more here than the exact number of days.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A digital product.</strong> It may be usable minutes after purchase, but fulfilment isn't the meaningful event, first access is. The request should be tied to whatever signals the customer started using it, not to a status change in a shipping workflow.
            </p>

            {/* Section: How Request Workflow Built */}
            <h2 id="how-request-workflow-built" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How a GoHighLevel Review Request Workflow Is Built, and Where Two Delays Quietly Stack
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Whichever route you use, the workflow has the same shape:
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Start from the event that represents shipping.</strong> Order Fulfilled for native store and Shopify orders.</li>
              <li><strong className="text-[#1A2236]">Wait for the window that suits the product.</strong></li>
              <li><strong className="text-[#1A2236]">Check readiness.</strong> An If/Else on the tags and fields described above.</li>
              <li><strong className="text-[#1A2236]">Send the request.</strong> The Review Request action for a public business review, or an ordinary email or SMS for a product page or a feedback form.</li>
              <li><strong className="text-[#1A2236]">Record that you asked.</strong> Update the Last Review Request Date and tag the contact.</li>
              <li><strong className="text-[#1A2236]">Decide how it stops.</strong> Review submitted, link clicked, problem reported, or a person replied.</li>
            </ol>

            {/* Section: Reputation Route */}
            <h2 id="reputation-route" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Reputation Route: the Review Request Action
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In Reputation settings you choose a Review Link, either balancing across connected platforms or a single custom URL. You then switch on SMS and email requests, set the first-send delay, the repeat interval and the maximum number of retries, and assign the templates for the first send and each retry. HighLevel's help article is explicit that switching a channel on isn't enough; the templates have to be assigned too.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two details from that same article shape ecommerce design. First, the first-send delay in settings is measured from the moment the Review Request action fires, so whatever wait your workflow used is added on top. A three-day wait plus a one-hour setting means three days and an hour. Second, retries live in settings rather than in the workflow. They run on the same schedule for every request sent from that account, until the contact clicks the review link. The documentation reviewed describes no per-workflow override, so if different products need different cadences, either keep the settings conservative or handle reminders with wait steps inside the workflow.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The retries stop when a click on the review link is detected, and a click is not a review. The customer may have opened the page and left. For a stop condition you control, a Goal Event can watch for the Review Request Clicked goal, which can match clicks on any channel, or for a tag such as Reviewed. HighLevel's help article allows one Goal Event action per workflow, so decide which stop reasons it needs to cover. One practical pattern is a shared "pause automation" tag that a support agent, a low-rating workflow or a reply workflow can all apply, with the Tag goal watching for it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              SMS requests send from the default number you choose in settings. Adding an image can turn the message into MMS, which may be priced differently by your provider.
            </p>

            {/* Section: Product Review Route */}
            <h2 id="product-review-route" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Product Review Route on a HighLevel Ecommerce Store
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here the review is written on the product details page. Submitted reviews wait in a Pending list until the store owner approves, unapproves or trashes them, and the owner can reply from the same dashboard. The Product Review Submitted trigger fires the moment a review is submitted, and the rating, headline, comment, reviewer details, store and product are all available as filters.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three behaviours of that trigger matter. It fires whether or not the review has been approved. It can run without a contact record, so matching a review to the customer who placed an order isn't automatic. And editing a review later doesn't fire it again. The product filter takes one product per trigger, so product-specific handling means one trigger per product. Asking for the review is an ordinary email or SMS, sent after the wait, that links to the product page where the review form sits. The native store itself is covered in the <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store guide</Link>.
            </p>

            {/* Section: Shopify Route */}
            <h2 id="shopify-route" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Shopify Route
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel receives the order and fulfilment events. The review is collected wherever the product page lives. In practice the workflow either asks for a public review of the business through Reputation, or sends the customer to the product page or the review app's own form. The Product Review Submitted trigger won't see reviews left on a Shopify product page. If you want GoHighLevel to react to those, you depend on what the review app can send out, which is a question for the app rather than for HighLevel.
            </p>

            {/* Section: Email or SMS Consent */}
            <h2 id="email-or-sms-consent" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Email or SMS for Review Requests: Consent Comes Before Channel Preference
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A review request is rarely urgent, so the speed that makes SMS useful for something like an abandoned checkout isn't the deciding factor. Email has room for the product, a photo and a sentence of context. A text is short and personal, and it is also the channel where a badly timed request feels most intrusive. Neither channel has a documented performance edge here, and no claim is made for one. Sending the same ask on both channels doesn't double the reach; it doubles the nagging unless one channel's click stops the other, which is a good reason to use the cross-channel Goal Event described above.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The more consequential question is consent. HighLevel's A2P guidance separates marketing consent (offers, discounts) from non-marketing consent (appointment reminders, order updates), and says the consent wording should reference the message types named in your campaign. A review request isn't plainly named in either category, so if you plan to text review requests, make sure the message type appears in your campaign description and consent wording instead of assuming an order-update consent stretches to cover it. The mechanics are in the <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt-in language guide</Link>. Platform rules aren't law, and your own counsel decides what your practices require.
            </p>

            {/* Section: Handling Answer Routing */}
            <h2 id="handling-answer-routing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Handling the Answer: Routing Feedback Without Gating Reviews
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once a request goes out, three things can come back: a public review, a private message, or silence. Automation should help a person respond. It shouldn't decide who gets to review.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A popular pattern in GoHighLevel setup guides is a thumbs-up, thumbs-down page: happy customers are sent to Google, unhappy ones to a private form. It is usually described as protecting your reputation. Google's merchant policy for Maps says businesses may not discourage or prohibit negative reviews or "selectively solicit positive reviews from customers", and may not offer payment, discounts or free goods in exchange for reviews. It does allow asking for reviews of genuine experiences, without incentives and without trying to influence the rating or the content. A screen that only gives satisfied customers the public link reads as selective solicitation under that wording. That is an interpretation of Google's text, not legal advice, and enforcement is Google's call.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is a second boundary. The FTC's rule on consumer reviews and testimonials, in effect since October 2024, targets fake reviews, paying for reviews that express a particular sentiment, undisclosed insider reviews and review suppression. Law-firm summaries of the rule add that a business may not misrepresent the reviews on its own site as all or most of those submitted when it has suppressed some because of low ratings, while the FTC accepted that hosts can still moderate spam, abusive content and similar. A store that approves reviews before publishing is moderating, which is fine. A store that approves only the flattering ones and presents the section as representative is in a different position. Read the rule or take advice for your own market before you decide where that line sits.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              So design the routing for response, not for access:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Send the same public request to every customer who is ready.</strong> Ready is decided by the conditions above, not by predicted mood.</li>
              <li><strong className="text-[#1A2236]">Offer a visible way to reach support next to the review link, not instead of it.</strong></li>
              <li><strong className="text-[#1A2236]">Watch what comes back.</strong> Product Review Submitted, filtered by star rating, fires on submission and before approval, so support can reach out quickly. Customer Replied, with its Replied to Workflow filter, catches replies to the request itself. Form or survey submissions catch private feedback.</li>
              <li><strong className="text-[#1A2236]">When a problem report or low rating arrives, pause the rest.</strong> Apply the pause tag so no upsell or reminder goes out, and create a task for a person. A User Replied goal ends the automation once someone has answered.</li>
              <li><strong className="text-[#1A2236]">Reply publicly where the platform allows.</strong> Store owners can reply to product reviews from the Reviews dashboard.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A discount code in exchange for a review is a familiar ecommerce tactic, and it is the thing Google's merchant policy rules out for reviews on its platform. Check each platform's rules, and the FTC rule, before attaching any reward to reviews.
            </p>

            {/* Section: Edge Cases */}
            <h2 id="edge-cases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Edge Cases: Second Orders, Multi-Item Orders, Silent Customers and Parcels That Never Arrive
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most of the harm in review automation happens in situations the happy path never imagined. These are the ones worth deciding in advance.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Goes Wrong</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Design</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What GoHighLevel Gives You</th>
                  </tr>
                </thead>
                <tbody>
                  {edgeCasesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatGoesWrong}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatToDesign}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatGHLGives}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How to Test */}
            <h2 id="how-to-test" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test a GoHighLevel Review Request Workflow Without Fooling Yourself
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A passing test proves the trigger fired, the wait ran and the message went out. It doesn't prove the experience is right. Tests run in minutes; customers run over weeks.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Place a real test order through the real path,</strong> and confirm the right trigger caught it: Shopify Order Placed for Shopify, Payment Received for the native store.</li>
              <li><strong className="text-[#1A2236]">Mark it fulfilled</strong> and confirm the clock starts there rather than at purchase.</li>
              <li><strong className="text-[#1A2236]">Check the logic with shortened waits, then watch one real-time run.</strong> Workflow test mode shortens waits inside the workflow, but the first-send delay and retry interval live in Reputation settings, so measure those separately.</li>
              <li><strong className="text-[#1A2236]">Add an open-issue tag to a test contact</strong> and confirm the request is skipped.</li>
              <li><strong className="text-[#1A2236]">Submit a test product review</strong> and confirm the Reviewed tag is applied, the review sits in Pending, and no further requests go out.</li>
              <li><strong className="text-[#1A2236]">Place a second order as the same contact</strong> and confirm your cooldown works.</li>
              <li><strong className="text-[#1A2236]">Click the review link in the email</strong> and check what stops. Does the SMS retry stop too? The help article says retries stop for that channel, so verify the cross-channel behaviour in your account.</li>
              <li><strong className="text-[#1A2236]">Reply to the request</strong> and confirm someone is told.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What this still doesn't prove: whether your delivery-and-use window suits real customers, whether Order Fulfilled usually comes before real delivery for your carrier, and whether the wording reads well to a stranger. Read the first handful of real sends by hand. To confirm a contact actually enrolled and see where each run went, use the <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">guide to Enrollment History and Execution Logs</Link>.
            </p>

            {/* Section: When Request Doesn't Fire */}
            <h2 id="when-request-doesnt-fire" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When a GoHighLevel Review Request Doesn't Fire, Fires Early or Fires Twice
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCause}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatToCheck}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: When GoHighLevel Enough */}
            <h2 id="when-gohighlevel-enough" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When GoHighLevel Is Enough for Ecommerce Reviews, and When a Dedicated Review Platform Fits Better
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The honest dividing line is where the review lives, and whether the platform that holds the order is also the one that displays the review.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">If You Need</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">A Dedicated Review Tool May Fit Better When</th>
                  </tr>
                </thead>
                <tbody>
                  {whenGHLEnoughData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.ifYouNeed}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.dedicatedTool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Many stores end up using both: GoHighLevel decides when someone is ready and what happens to the answer, while a review app or the store's own pages hold the reviews themselves. That split is a design choice, not a compromise.
            </p>

            {/* Section: Who Owns Exception */}
            <h2 id="who-owns-exception" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Who Owns the Exception
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The best review automation handles the routine quietly and hands the exceptions to a person at the right moment. Ready means fulfilled, plus a window that fits the product, plus no open problem. The instant a customer says something went wrong, the conversation stops being a review request and becomes a support case, and nothing automated should keep talking over it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That is the real design decision behind everything above: which cases the workflow may decide for itself, and which it must stop and pass on. Where the answer spans Shopify events, several product windows and consent rules, it is less a single workflow than an architecture, and that is the point at which <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow and automation setup</Link> is worth scoping deliberately rather than adding one condition at a time.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Ecommerce Review Automation
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
              Still unsure how to build review automation for your ecommerce business?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs →</Link>
                <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Post Purchase Automation →</Link>
                <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Customer Retention & Winback Guide →</Link>
                <Link href="/blog/gohighlevel-ecommerce-store" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store Guide →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? →</Link>
                <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow and Automation Setup →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Building Review Automation?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help ecommerce businesses build review automation in GoHighLevel that actually works.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building review automation for ecommerce businesses. All product details verified against HighLevel documentation as of October 2026.
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