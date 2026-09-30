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

export default function GoHighLevelAbandonedCheckoutClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-abandoned-checkout',
        'how-trigger-detects',
        'which-ecommerce-sources',
        'what-data-trigger-provides',
        'triggering-not-recovering',
        'how-to-build-workflow',
        'how-to-use-filters',
        'how-to-stop-after-purchase',
        'how-to-avoid-duplicates',
        'workflow-examples',
        'designing-timing',
        'writing-recovery-emails',
        'using-sms',
        'what-can-be-personalized',
        'how-shopify-works',
        'how-native-store-works',
        'vs-other-triggers',
        'common-problems',
        'how-to-test',
        'limitations',
        'when-to-use',
        'when-not-to-use',
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
      q: "Does GoHighLevel have abandoned cart automation?",
      a: "It has an Abandoned Checkout trigger, specifically tied to checkout being started and not completed after an identifiable shopper entered an email — not a general \"cart\" trigger covering earlier browsing behavior."
    },
    {
      q: "Does GoHighLevel work with Shopify abandoned checkout?",
      a: "Yes, through the unified Abandoned Checkout trigger, filtered to Order Source: External and Sub-Source: Shopify."
    },
    {
      q: "How does GoHighLevel detect an abandoned checkout?",
      a: "A shopper enters checkout, provides an email, and doesn't complete payment within a duration you configure in minutes; once that window passes, the trigger fires."
    },
    {
      q: "Can GoHighLevel send abandoned checkout emails and SMS?",
      a: "Yes, using standard workflow actions once the Abandoned Checkout trigger has fired — email and SMS both work, subject to the contact having a valid address/number and, for SMS, proper consent."
    },
    {
      q: "How do I stop an abandoned checkout workflow after purchase?",
      a: "Add a Goal Event with the Payment Received goal type, filtered to success, and set it to end the workflow once met — this checks continuously rather than only at one point in the sequence."
    },
    {
      q: "Why is my GoHighLevel abandoned checkout workflow not triggering?",
      a: "Most often because no email was captured before abandonment, the ecommerce source isn't connected or the workflow isn't published, or the filters are excluding the test scenario."
    },
    {
      q: "Does abandoned checkout work with the GoHighLevel Ecommerce Store?",
      a: "Yes, using the same trigger with Order Source set to Store — and the native Store also sends its own automatic abandoned checkout email by default, separate from any custom workflow."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-abandoned-checkout', title: 'What Is an Abandoned Checkout in GoHighLevel?' },
    { id: 'how-trigger-detects', title: 'How the Trigger Detects an Abandoned Checkout' },
    { id: 'which-ecommerce-sources', title: 'Which Ecommerce Sources Can Trigger the Workflow?' },
    { id: 'what-data-trigger-provides', title: 'What Data Does the Trigger Provide?' },
    { id: 'triggering-not-recovering', title: 'Triggering Is Not the Same as Recovering the Sale' },
    { id: 'how-to-build-workflow', title: 'How to Build an Abandoned Checkout Workflow Step by Step' },
    { id: 'how-to-use-filters', title: 'How to Use Abandoned Checkout Trigger Filters' },
    { id: 'how-to-stop-after-purchase', title: 'How to Stop Messages After a Customer Purchases' },
    { id: 'how-to-avoid-duplicates', title: 'How to Avoid Duplicate Recovery Messages' },
    { id: 'workflow-examples', title: 'Four Workflow Examples' },
    { id: 'designing-timing', title: 'Designing Recovery Timing' },
    { id: 'writing-recovery-emails', title: 'Writing Recovery Emails' },
    { id: 'using-sms', title: 'Using SMS for Recovery' },
    { id: 'what-can-be-personalized', title: 'What Can Be Personalized' },
    { id: 'how-shopify-works', title: 'How Shopify Abandoned Checkouts Work' },
    { id: 'how-native-store-works', title: 'How the Native Store Works' },
    { id: 'vs-other-triggers', title: 'vs Other Ecommerce Workflow Triggers' },
    { id: 'common-problems', title: 'Common Problems and Fixes' },
    { id: 'how-to-test', title: 'How to Test the Workflow' },
    { id: 'limitations', title: 'Limitations of Abandoned Checkout Automation' },
    { id: 'when-to-use', title: 'When to Use GoHighLevel for Recovery' },
    { id: 'when-not-to-use', title: 'When You Might Not Need GoHighLevel' },
    { id: 'core-principle', title: 'The Core Principle to Remember' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const dataAvailableData = [
    { data: 'Contact email', tellsWorkflow: 'Who to follow up with', note: 'Required for the trigger to fire at all' },
    { data: 'Duration since abandonment', tellsWorkflow: 'How long the checkout has been idle', note: 'Set by you as the abandonment window, in minutes' },
    { data: 'Cart/order value', tellsWorkflow: 'How much the abandoned checkout was worth', note: 'Filterable; usable for value-based routing' },
    { data: 'Country', tellsWorkflow: 'Shopper\'s location', note: 'Filterable' },
    { data: 'Products', tellsWorkflow: 'Which product(s) were in the checkout', note: 'Filterable via a Global Products selection' },
    { data: 'Order source and sub-source', tellsWorkflow: 'Whether the checkout was native Store or external (Shopify)', note: 'Filterable; also useful in If/Else branching' },
    { data: 'Store name', tellsWorkflow: 'Which store the checkout belongs to, for multi-store accounts', note: 'Filterable' },
  ];

  const triggerComparisonData = [
    { trigger: 'Abandoned Checkout', whatItMeans: 'Checkout started, not completed within the window', typicalAutomation: 'Recovery email/SMS sequence' },
    { trigger: 'Shopify Order Placed', whatItMeans: 'A new Shopify order was placed', typicalAutomation: 'Order confirmation, onboarding' },
    { trigger: 'Order Fulfilled', whatItMeans: 'An order\'s status changed to fulfilled (native Store or external, including Shopify)', typicalAutomation: 'Shipping notification, review request' },
    { trigger: 'Product Review Submitted', whatItMeans: 'A product review was submitted', typicalAutomation: 'Thank-you, internal notification' },
  ];

  const troubleshootingData = [
    { problem: 'Trigger isn\'t firing at all', likelyCause: 'No email captured before abandonment, source not connected, workflow unpublished, or filters too restrictive', whatToCheck: 'Whether the test checkout reached the email step, integration connection status, workflow publish state, filter settings' },
    { problem: 'Workflow starts but the customer gets no message', likelyCause: 'Missing or invalid contact channel, a misconfigured action, or a suppression/unsubscribe status', whatToCheck: 'The contact\'s email/phone on file, the action\'s configuration, any suppression list' },
    { problem: 'Customer purchased but still receives recovery messages', likelyCause: 'No Goal Event (or an If/Else instead of one) checking for completed payment', whatToCheck: 'Whether a Goal Event with Payment Received success is actually present and placed early enough in the sequence' },
    { problem: 'Shopify abandoned checkout isn\'t appearing in GoHighLevel', likelyCause: 'Integration not connected or not currently syncing, or the trigger\'s filters exclude it', whatToCheck: 'Shopify integration connection status, Order Source/Sub-Source filter values' },
    { problem: 'Same contact getting duplicate messages', likelyCause: 'Overlapping workflows, or repeat genuine abandonments being treated as unexpected duplicates', whatToCheck: 'Whether more than one workflow can catch the same event, and whether this is actually a second legitimate abandonment' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Abandoned Checkout Automation: Recover Ecommerce Sales</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Abandoned Checkout</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Abandoned Checkout Automation:<br />
            <span className="text-[#F8D000]">How to Recover Ecommerce Sales</span>
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
            <strong className="text-white">Yes, GoHighLevel can automate abandoned checkout recovery</strong> — where the ecommerce source you're using provides the Abandoned Checkout event, a workflow can pick it up and follow up automatically. That's true whether the checkout happened in GoHighLevel's own Ecommerce Store or in a connected Shopify store. What the workflow can actually know about that checkout, how quickly it can respond, and how to stop it the moment someone pays, depends on real trigger behavior, not assumption.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This article covers exactly that: how GoHighLevel detects an abandoned checkout, what data the trigger gives you, how to build the workflow, how to stop it after a purchase, how to avoid messaging the same person twice, and where the current platform's boundaries are. It's about the abandoned checkout automation itself — not whether GoHighLevel suits ecommerce generally, and not the full Shopify integration or the native Ecommerce Store, both covered elsewhere.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Abandoned Checkout Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-build-workflow"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Build the Workflow
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
              <div className="text-sm font-bold text-white mb-2">Need Abandoned Checkout Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses set up abandoned checkout recovery workflows in GoHighLevel.</p>
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

            {/* Section: What Is Abandoned Checkout */}
            <h2 id="what-is-abandoned-checkout" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is an Abandoned Checkout in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An abandoned checkout is a checkout session where a shopper reached the checkout process, provided at least their email address, and didn't complete payment. That last detail matters: <strong className="text-[#1A2236]">cart</strong> and <strong className="text-[#1A2236]">checkout</strong> aren't the same event. A shopper adding an item to a cart and leaving the site has not reached checkout — there's no email captured, and GoHighLevel's Abandoned Checkout trigger has nothing to identify them by. The trigger fires when a shopper enters checkout, reaches the point of entering an email, and then doesn't finish paying within the abandonment window you configure.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Marketers often use "abandoned cart" loosely to mean any incomplete purchase, including someone who never got past browsing. GoHighLevel's trigger doesn't work at that level — it's specifically tied to checkout, and specifically requires an identifiable shopper. If your product pages see a lot of traffic but few checkouts start, that's a different problem this automation can't see or fix.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-abandoned-checkout.png"
                  alt="GoHighLevel Abandoned Checkout Automation: Detection, trigger, and recovery workflow flow"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Abandoned Checkout Automation: Detection, trigger, and recovery workflow flow</span>
              </div>
            </div>

            {/* Section: How Trigger Detects */}
            <h2 id="how-trigger-detects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Does the GoHighLevel Abandoned Checkout Trigger Detect an Abandoned Checkout?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The Abandoned Checkout trigger watches for a shopper who adds items, enters checkout, provides a valid email address, and doesn't complete payment within a duration you set in minutes. Once that window elapses without a completed payment, the trigger fires and the workflow enrolls the contact. HighLevel's own documentation frames this as a single, unified trigger — it's built to work the same way whether the checkout happened in the native Ecommerce Store or came from a connected external source like Shopify, rather than needing separate triggers for each.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Without a captured email, there's no contact for the workflow to act on, so a shopper who abandons before entering any contact information simply isn't visible to this automation. That's a hard boundary of the trigger, not a configuration choice.
            </p>

            {/* Section: Which Ecommerce Sources */}
            <h2 id="which-ecommerce-sources" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Ecommerce Sources Can Trigger a GoHighLevel Abandoned Checkout Workflow?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two sources are currently documented for the Abandoned Checkout trigger: GoHighLevel's own native Ecommerce Store, and Shopify through the connected integration. The trigger's Order Source filter lets you choose Store (native) or External, and when External is selected, a Sub-Source filter narrows it to the specific external platform — currently Shopify. HighLevel's documentation doesn't list other external ecommerce platforms as currently supported for this trigger, so don't assume a different platform will populate it without checking current documentation first.
            </p>

            {/* Section: What Data Trigger Provides */}
            <h2 id="what-data-trigger-provides" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Data Does the GoHighLevel Abandoned Checkout Trigger Provide?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The trigger's filters double as a rough map of what it actually knows about the abandoned checkout, since a filter can only narrow on data the trigger has access to.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Available Data</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Tells the Workflow</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAvailableData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.data}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tellsWorkflow}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What's not confirmed in current documentation: individual line-item detail beyond the product filter, shipping method selected, or discount codes entered. If a message needs that level of detail, verify it's actually available in your workflow's custom values before building around it.
            </p>

            {/* Section: Triggering Not Recovering */}
            <h2 id="triggering-not-recovering" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Triggering the Workflow Is Not the Same as Recovering the Sale
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This distinction is worth stating plainly, because it's where a lot of abandoned checkout automation quietly underperforms. The trigger firing only means the workflow started. Whether the sale actually gets recovered depends on things the trigger has nothing to do with: how relevant the message is, whether it reaches a channel the customer actually checks, how much time passed before it arrived, whether a discount was necessary or counterproductive, and whether the customer had a real reason to abandon in the first place — a shipping cost surprise, a payment failure, simple distraction. GoHighLevel gives you the event and the data to act on it. The workflow design and the message are what determine whether that turns into a recovered sale.
            </p>

            {/* Section: How to Build Workflow */}
            <h2 id="how-to-build-workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Build a GoHighLevel Abandoned Checkout Workflow Step by Step
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Confirm the ecommerce source.</strong> Is the checkout happening in the native Ecommerce Store, or in a connected Shopify store? This decides which Order Source/Sub-Source filter you'll use.</li>
              <li><strong className="text-[#1A2236]">Create a new workflow</strong> (or open an existing one) from Automation → Workflows.</li>
              <li><strong className="text-[#1A2236]">Add the Abandoned Checkout trigger.</strong> It's listed under the Ecommerce Stores trigger category.</li>
              <li><strong className="text-[#1A2236]">Set the abandonment duration</strong> in minutes — how long to wait after the last checkout activity before treating it as abandoned.</li>
              <li><strong className="text-[#1A2236]">Add the filters relevant to your use case</strong> — cart value, country, products, order source/sub-source, store name — only the ones that actually change how you want to handle that checkout.</li>
              <li><strong className="text-[#1A2236]">Add a wait step</strong> before the first message, rather than firing immediately (covered in the timing section below).</li>
              <li><strong className="text-[#1A2236]">Send the first recovery message</strong> — email, SMS, or both, depending on what's available and appropriate.</li>
              <li><strong className="text-[#1A2236]">Add a Goal Event checking for completed payment</strong> so the workflow stops or branches the moment the customer pays (covered in detail below).</li>
              <li><strong className="text-[#1A2236]">Branch or continue</strong> based on whether the goal was met — end the workflow for a completed purchase, continue the sequence for one that's still unresolved.</li>
              <li><strong className="text-[#1A2236]">Publish the workflow and test it</strong> with a real abandoned checkout before relying on it for live customers.</li>
            </ol>

            {/* Section: How to Use Filters */}
            <h2 id="how-to-use-filters" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Use GoHighLevel Abandoned Checkout Trigger Filters
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each filter exists to route different abandoned checkouts into different treatment, not just to narrow the list down. Here's what each one is actually for.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Cart/order value</strong> — A $30 cart and a $1,500 cart usually warrant different recovery logic. A store might send a simple reminder for the former and route the latter to a higher-touch sequence, or flag it for a team member. Set this too aggressively and you'll exclude smaller but still worthwhile recoveries.</li>
              <li><strong className="text-[#1A2236]">Country</strong> — Useful when shipping cost, currency, or fulfillment differs by region and the message needs to reflect that. Overusing it can fragment a workflow into more branches than the actual difference in customer experience justifies.</li>
              <li><strong className="text-[#1A2236]">Products (Global Products)</strong> — Lets a specific product's abandonment get product-specific messaging, rather than a generic "you left something in your cart" line. Only worth using when you actually have distinct messaging prepared for that product; otherwise it adds complexity with no payoff.</li>
              <li><strong className="text-[#1A2236]">Order source / sub-source</strong> — Separates native Store checkouts from Shopify checkouts, which matters if the two experiences differ enough that one message doesn't fit both.</li>
              <li><strong className="text-[#1A2236]">Store name</strong> — Relevant for accounts running multiple stores, so each store's abandoned checkouts can be handled under its own branding and logic.</li>
            </ul>

            {/* Section: How to Stop After Purchase */}
            <h2 id="how-to-stop-after-purchase" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Stop Abandoned Checkout Messages After a Customer Purchases
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the section most abandoned checkout workflows get wrong. A customer abandons, enters the recovery sequence, then completes the purchase on their own — maybe before your first message even sends. If the workflow keeps running, that customer gets a reminder to buy something they already bought, which is the fastest way to make an automation feel broken rather than helpful.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's documented mechanism for this is the <strong className="text-[#1A2236]">Goal Event workflow action</strong>. A Goal Event lets a contact jump out of a sequence the instant a condition is met, evaluated continuously rather than only at a single checkpoint the way an If/Else does. The documented Goal Event type relevant here is <strong className="text-[#1A2236]">Payment Received</strong>, which can be filtered by success or failure status and by product. Add a Goal Event checking for Payment Received success right after your trigger (or after each wait step), and set its behavior to <strong className="text-[#1A2236]">End this workflow</strong> once the goal is met — the contact exits the recovery sequence the moment payment succeeds, instead of finishing out every remaining step.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An If/Else condition checking order or payment status is a secondary option, but it only evaluates once, at the moment the contact reaches that step — it won't catch a payment that completes while the contact is sitting in a wait step. For a continuously-checked exit condition, the Goal Event is the documented tool built for that job.
            </p>

            {/* Section: How to Avoid Duplicates */}
            <h2 id="how-to-avoid-duplicates" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Avoid Duplicate Abandoned Checkout Recovery Messages
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A few realistic scenarios can produce more than one recovery message to the same person, and it's worth designing around them rather than assuming the platform prevents all of them automatically:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The same shopper abandons more than once.</strong> If they abandon, don't purchase, and abandon again later, that's a second, legitimate trigger event — not necessarily a bug, but worth knowing your workflow's re-entry behavior for repeat abandonments.</li>
              <li><strong className="text-[#1A2236]">Multiple devices or sessions.</strong> A shopper starting checkout on mobile, then finishing on desktop, can look like two separate abandonments if the first session's checkout technically timed out before the second completed.</li>
              <li><strong className="text-[#1A2236]">Overlapping workflows.</strong> If more than one workflow is built to catch abandoned checkouts — one broad, one product-specific — the same contact can land in both simultaneously unless your filters are mutually exclusive.</li>
              <li><strong className="text-[#1A2236]">Multiple stores or integrations.</strong> An account running both a native Store and a connected Shopify store needs source/sub-source filters set deliberately, or the same customer activity could be interpreted by more than one workflow.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's documentation doesn't claim the platform automatically prevents every one of these scenarios — it gives you the filters and Goal Event tools to design around them. Treat duplicate prevention as something you build, not something you get for free.
            </p>

            {/* Section: Workflow Examples */}
            <h2 id="workflow-examples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Four GoHighLevel Abandoned Checkout Workflow Examples
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are hypothetical architectures built only from the triggers, filters and actions confirmed above. Treat them as starting shapes to adapt, not settings to copy exactly.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow A: Simple Recovery</p>
                <p className="text-sm text-[#5C6880]">Abandoned Checkout trigger → wait → one recovery email → Goal Event (Payment Received) to end the workflow. The minimum viable version, appropriate for a store with a small catalog and no strong reason to segment.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow B: Multi-Step Email and SMS Recovery</p>
                <p className="text-sm text-[#5C6880]">Abandoned Checkout trigger → wait → email → wait → Goal Event check → SMS (if the contact has given SMS consent) → wait → final email → Goal Event (Payment Received) ends the workflow at any point payment is detected. Only include the SMS step if the business has a legitimate basis to message that channel — covered in the SMS section below.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow C: High-Value Checkout Recovery</p>
                <p className="text-sm text-[#5C6880]">Abandoned Checkout trigger → If/Else on cart value → high-value branch sends a more personalized message and can create an internal task for a team member to follow up directly → standard branch runs the normal email/SMS sequence. Both branches still need their own Goal Event check for Payment Received.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Workflow D: Product-Specific Recovery</p>
                <p className="text-sm text-[#5C6880]">Abandoned Checkout trigger filtered by Global Products → messaging written specifically for that product's objections or context, rather than generic cart-reminder language. This is the filter that makes the product-specific messaging possible in the first place — without it, you'd need a condition inside the workflow to achieve the same routing.</p>
              </div>
            </div>

            {/* Section: Designing Timing */}
            <h2 id="designing-timing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Designing Recovery Timing for a GoHighLevel Abandoned Checkout Workflow
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Timing is a design decision, not a fixed rule. Messaging immediately after abandonment can feel intrusive — some shoppers step away mid-checkout for entirely ordinary reasons and return on their own within minutes. Waiting too long loses relevance; by the next day, the shopper may have forgotten the specifics or bought elsewhere. Neither extreme is universally correct.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What should actually inform the wait: how considered the purchase is (a $1,500 item usually tolerates a longer wait than a $20 impulse buy), how the business's traffic behaves (a high-intent paid-ad visitor may warrant faster follow-up than organic browsing traffic), and which channels are available (an SMS reminder sent too soon can feel more aggressive than the same message by email). Any specific timings in this article's examples are illustrative starting points for testing in your own store, not benchmarks with proven conversion results — no external source in this research established a universal "best" abandonment delay, and none is claimed here.
            </p>

            {/* Section: Writing Recovery Emails */}
            <h2 id="writing-recovery-emails" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Writing Abandoned Checkout Recovery Emails in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The email's job inside this workflow is narrow: remind the shopper what they left, make it easy to get back to checkout, and address whatever might have stopped them the first time — a shipping cost question, a payment concern, simple hesitation. Product context (what they were about to buy) and a direct link back to checkout do most of the work. Reassurance or support information matters more for higher-consideration purchases than low-cost ones.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A discount isn't a default ingredient. Offering one automatically on every abandoned checkout trains repeat customers to abandon on purpose and wait for the discount code, which erodes margin without necessarily changing behavior for shoppers who were never going to buy at full price anyway. Reserve a discount for situations where you've identified price sensitivity as an actual reason for abandonment, not as a blanket first move.
            </p>

            {/* Section: Using SMS */}
            <h2 id="using-sms" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Using SMS for GoHighLevel Abandoned Checkout Recovery
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              SMS can work well in this sequence because of its immediacy, but it isn't a free second channel to duplicate the email into — consent and message frequency both matter. A shopper needs to have actually consented to receive SMS messages from the business, and sending SMS to US numbers involves carrier registration requirements covered separately. Sending an SMS that just repeats the email's content, rather than adding something (urgency, a direct link, a shorter nudge), tends to feel like noise rather than help. This article isn't the source for consent or messaging-law specifics — verify current requirements against authoritative regulatory sources and your own legal counsel before relying on SMS for recovery messaging, and don't treat any workflow setup as automatically compliant.
            </p>

            {/* Section: What Can Be Personalized */}
            <h2 id="what-can-be-personalized" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Can Be Personalized in a GoHighLevel Abandoned Checkout Message
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Personalization here should be built only from data the trigger and contact record actually expose: the customer's name, the specific product(s) left in the checkout, the cart or order value, which store the checkout belongs to (for multi-store accounts), and any segment or tag already on the contact from other CRM activity. Don't invent personalization fields that sound plausible — if a variable isn't confirmed available in your workflow's custom values, test it with a real checkout before writing copy that depends on it.
            </p>

            {/* Section: How Shopify Works */}
            <h2 id="how-shopify-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Handles Shopify Abandoned Checkouts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The path for a Shopify abandonment is: <strong className="text-[#0E9BF0]">Shopify checkout started → the connected integration's synced data → GoHighLevel's Abandoned Checkout trigger, filtered to Order Source: External and Sub-Source: Shopify → workflow → recovery action.</strong> The same unified trigger covers this, rather than a completely separate Shopify-only mechanism — HighLevel also documents a legacy "Shopify Abandoned Cart" trigger that's deprecating, so new workflows should be built on the current unified trigger, not the older Shopify-specific one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This section only covers the abandoned-checkout-specific piece of that connection. For the full picture of what data syncs between Shopify and GoHighLevel and how the connection itself is set up, see <Link href="/blog/gohighlevel-shopify-integration" className="text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs, How It Works & What You Can Automate</Link>.
            </p>

            {/* Section: How Native Store Works */}
            <h2 id="how-native-store-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Abandoned Checkout Works With the GoHighLevel Ecommerce Store
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              With the native Ecommerce Store, the same Abandoned Checkout trigger applies with Order Source set to Store rather than External, and HighLevel also runs a separate, automatic abandoned checkout email by default for native Store checkouts — a single reminder email sent after a default delay, independent of any custom workflow you build. That automatic email and a custom Abandoned Checkout workflow can overlap if you're not deliberate about it, so decide whether to keep the automatic email on or rely entirely on your own workflow, rather than running both without checking how they interact. For the full detail on native Store products, checkout and orders, see <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store: How It Works & Who It Fits</Link>.
            </p>

            {/* Section: vs Other Triggers */}
            <h2 id="vs-other-triggers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Abandoned Checkout vs Other Ecommerce Workflow Triggers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choosing the wrong trigger is a common reason an ecommerce workflow silently does nothing. Here's how Abandoned Checkout relates to the other documented ecommerce triggers.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Trigger</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Typical Automation</th>
                  </tr>
                </thead>
                <tbody>
                  {triggerComparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.trigger}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItMeans}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.typicalAutomation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If a workflow is meant to catch new completed orders, Abandoned Checkout is the wrong trigger for that job — it's specifically for checkouts that didn't complete.
            </p>

            {/* Section: Common Problems */}
            <h2 id="common-problems" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common GoHighLevel Abandoned Checkout Workflow Problems and Fixes
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCause}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatToCheck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For general enrollment problems beyond abandoned checkout specifically, see <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">why a GoHighLevel workflow isn't triggering</Link>. To confirm whether a contact actually enrolled and what happened during the run, use the <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">guide to Enrollment History and Execution Logs</Link>. If the workflow enrolled correctly but a later step failed, see <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">how to find the failed step</Link>. If a returning customer's new abandonment isn't re-entering a workflow they've been in before, that's a <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">re-entry question</Link>.
            </p>

            {/* Section: How to Test */}
            <h2 id="how-to-test" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test a GoHighLevel Abandoned Checkout Workflow
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Use a test contact</strong> you control, ideally with no prior history in this workflow.</li>
              <li><strong className="text-[#1A2236]">Confirm the contact is identifiable</strong> — start a real checkout and enter their email.</li>
              <li><strong className="text-[#1A2236]">Deliberately don't complete the purchase.</strong></li>
              <li><strong className="text-[#1A2236]">Wait for the actual configured duration</strong> to elapse — don't assume it fired instantly.</li>
              <li><strong className="text-[#1A2236]">Check Enrollment History</strong> to confirm the contact actually enrolled, not just that time passed.</li>
              <li><strong className="text-[#1A2236]">Inspect the execution</strong> to see which step the contact is on and what data the trigger captured.</li>
              <li><strong className="text-[#1A2236]">Verify the message actually arrived</strong> on the channel you expect.</li>
              <li><strong className="text-[#1A2236]">Complete the purchase</strong> as the same test contact.</li>
              <li><strong className="text-[#1A2236]">Confirm the Goal Event fires and the sequence stops or branches correctly,</strong> rather than continuing to message a customer who just paid.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A manually created contact is not equivalent to a real abandoned checkout — it doesn't prove the trigger's actual detection path works, only that a workflow can run once a contact exists. Test the genuine flow (real checkout, real abandonment, real wait) at least once before trusting the automation with real customers. GoHighLevel's workflow test mode compresses wait timers for quick checking, which is useful for verifying logic but isn't a substitute for testing the actual timed abandonment window live.
            </p>

            {/* Section: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Limitations of GoHighLevel Abandoned Checkout Automation
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">No captured email, no trigger.</strong> A shopper who leaves before entering an email is invisible to this automation entirely.</li>
              <li><strong className="text-[#1A2236]">Only two documented sources</strong> — native Ecommerce Store and Shopify. Other ecommerce platforms aren't confirmed to populate this trigger.</li>
              <li><strong className="text-[#1A2236]">Field-level data beyond the documented filters isn't confirmed</strong> — don't assume detail like discount codes or shipping method is available without testing it.</li>
              <li><strong className="text-[#1A2236]">Duplicate prevention across multiple workflows or sessions isn't automatic</strong> — it has to be designed with filters and Goal Events.</li>
              <li><strong className="text-[#1A2236]">The automatic native-Store abandoned checkout email and a custom workflow can overlap</strong> if not deliberately coordinated.</li>
              <li><strong className="text-[#1A2236]">The trigger only starts automation — it doesn't guarantee recovery.</strong> Message quality, timing and channel availability still determine whether the sale actually comes back.</li>
            </ul>

            {/* Section: When to Use */}
            <h2 id="when-to-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When to Use GoHighLevel for Abandoned Checkout Recovery
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This setup tends to make sense when abandoned checkout recovery needs to connect to broader CRM and workflow activity already happening in GoHighLevel — when the same contact's checkout abandonment should also update a pipeline, trigger a sales follow-up, or feed into segmentation the business already relies on GoHighLevel for. It also fits well when Shopify or the native Store is already the ecommerce source and the business wants recovery, CRM and other automation in one platform rather than a separate dedicated tool.
            </p>

            {/* Section: When Not to Use */}
            <h2 id="when-not-to-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When You Might Not Need GoHighLevel for Abandoned Checkout Recovery
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the existing ecommerce stack already has mature, purpose-built abandoned checkout recovery — Shopify's own abandoned-checkout email, or a dedicated ecommerce marketing platform — and there's no real need to connect that recovery to broader CRM workflows, adding GoHighLevel as another layer may just be extra maintenance for the same outcome. It's also worth reconsidering if the current integration genuinely can't expose the data a planned recovery strategy depends on — better to confirm that before building than after.
            </p>

            {/* Section: Core Principle */}
            <h2 id="core-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Core Principle to Remember
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An abandoned checkout is a specific, identifiable event — checkout started, email captured, payment not completed — and GoHighLevel's Abandoned Checkout trigger exists to catch exactly that, whether it happened in the native Ecommerce Store or a connected Shopify store. The trigger starting a workflow is the easy part. Making that workflow actually recover sales, without pestering people who already paid or duplicating messages across overlapping automations, is where the real design work is — and it depends on the Goal Event and filter tools covered here, not on the trigger doing that work for you.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Abandoned Checkout Automation
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
              Still unsure how to set up abandoned checkout recovery for your store?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs →</Link>
                <Link href="/blog/gohighlevel-ecommerce-store" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store: How It Works & Who It Fits →</Link>
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Setting Up Abandoned Checkout Recovery?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help ecommerce businesses set up abandoned checkout recovery workflows in GoHighLevel for both the native Store and Shopify.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience setting up abandoned checkout recovery workflows for ecommerce businesses. All product details verified against HighLevel documentation as of September 2026.
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