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

export default function GoHighLevelShopifyIntegrationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-integration',
        'how-shopify-connects',
        'what-data-syncs',
        'how-customers-become-contacts',
        'how-orders-revenue-flow',
        'what-does-not-sync',
        'historical-import-vs-ongoing',
        'which-events-trigger',
        'what-you-can-automate',
        'shopify-vs-native-store',
        'integration-vs-migration',
        'how-to-test',
        'common-problems',
        'limitations',
        'when-it-makes-sense',
        'when-you-might-not-need',
        'architecture-to-remember',
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
      q: "Does GoHighLevel integrate with Shopify?",
      a: "Yes, natively, through a Shopify custom app and Admin API access token connected at the sub-account level."
    },
    {
      q: "Can Shopify customers sync to GoHighLevel?",
      a: "Yes. New and updated Shopify customers sync into GoHighLevel Contacts."
    },
    {
      q: "Can Shopify orders sync to GoHighLevel?",
      a: "Yes. Order details, value and products sync in, with optional mapping onto pipelines and opportunities."
    },
    {
      q: "Can GoHighLevel automate actions based on Shopify customers?",
      a: "Yes, once a Shopify customer exists as a contact, standard GoHighLevel workflows can act on them the same as any other contact."
    },
    {
      q: "Can Shopify abandoned checkouts trigger GoHighLevel workflows?",
      a: "Yes, through the Abandoned Checkout trigger, filtered to Order Source: External and Sub-Source: Shopify. It requires a captured email address to identify the shopper."
    },
    {
      q: "Does the integration sync Shopify products and collections?",
      a: "Not documented as ongoing sync in the standard integration. Product and collection import is described for the separate Shopify migration tool."
    },
    {
      q: "Does GoHighLevel replace Shopify?",
      a: "No. Connecting the two keeps Shopify as the storefront; GoHighLevel's own native Ecommerce Store is a separate, different architectural choice."
    },
    {
      q: "Is the GoHighLevel Shopify integration two-way?",
      a: "Not documented as two-way. Treat it as Shopify data flowing into GoHighLevel, not GoHighLevel edits flowing back to Shopify."
    },
    {
      q: "How long does Shopify data take to sync into GoHighLevel?",
      a: "HighLevel's documentation doesn't publish an exact timing guarantee. Verify with a real test order rather than assuming a specific delay."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-integration', title: 'What Is the GoHighLevel Shopify Integration?' },
    { id: 'how-shopify-connects', title: 'How Shopify Connects to GoHighLevel' },
    { id: 'what-data-syncs', title: 'What Data the Integration Syncs' },
    { id: 'how-customers-become-contacts', title: 'How Shopify Customers Become Contacts' },
    { id: 'how-orders-revenue-flow', title: 'How Orders and Revenue Flow Into GoHighLevel' },
    { id: 'what-does-not-sync', title: 'What Shopify Data Does Not Automatically Sync' },
    { id: 'historical-import-vs-ongoing', title: 'Historical Import vs Ongoing Sync' },
    { id: 'which-events-trigger', title: 'Which Shopify Events Can Trigger Workflows' },
    { id: 'what-you-can-automate', title: 'What You Can Automate With Shopify Data' },
    { id: 'shopify-vs-native-store', title: 'Shopify + GoHighLevel vs Native Ecommerce Store' },
    { id: 'integration-vs-migration', title: 'Native Integration vs Shopify Migration Tool' },
    { id: 'how-to-test', title: 'How to Test the Integration' },
    { id: 'common-problems', title: 'Common Problems and Fixes' },
    { id: 'limitations', title: 'Limitations to Know' },
    { id: 'when-it-makes-sense', title: 'When Connecting Shopify Makes Sense' },
    { id: 'when-you-might-not-need', title: 'When You Might Not Need to Connect' },
    { id: 'architecture-to-remember', title: 'The Architecture to Remember' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const dataSyncData = [
    { data: 'Customers', available: 'Yes — new and updated Shopify customers sync into Contacts', usedFor: 'Building a CRM record, segmentation, workflow entry', limitation: 'Field-by-field mapping isn\'t published — verify with a real customer' },
    { data: 'Orders', available: 'Yes — order details, value and products sync into Orders', usedFor: 'Order-triggered workflows, purchase-based segmentation', limitation: 'Documentation doesn\'t confirm every Shopify order field (e.g., discount codes) syncs' },
    { data: 'Revenue', available: 'Yes — mapped into GoHighLevel reporting', usedFor: 'Revenue visibility alongside CRM activity', limitation: 'Not the same as Shopify\'s own analytics depth' },
    { data: 'Order-to-pipeline mapping', available: 'Yes — optional, with configurable handling for paid, pending and refunded orders', usedFor: 'Giving a sales team a pipeline view of ecommerce orders', limitation: 'Requires deliberate configuration; not automatic' },
    { data: 'Products and collections', available: 'Documented in the separate Shopify migration tool, not confirmed as ongoing sync in the standard integration', usedFor: 'Product context in the migration path', limitation: 'Don\'t assume live catalog sync through the standard integration' },
    { data: 'Shopify Variables in messaging', available: 'Yes — order/customer details from a Shopify-triggered workflow can populate email/SMS content', usedFor: 'Personalized post-purchase messaging', limitation: 'Only populated within a workflow that actually received the Shopify event' },
  ];

  const triggerData = [
    { trigger: 'Shopify Order Placed', coversShopify: 'Yes — Shopify-specific', status: 'Current', filters: 'Not individually documented beyond the trigger itself' },
    { trigger: 'Abandoned Checkout', coversShopify: 'Yes — unified trigger for native Store and external stores including Shopify', status: 'Current', filters: 'Duration (minutes), cart value, country, products, order source (Store/External), sub-source (Shopify), store name' },
    { trigger: 'Order Fulfilled', coversShopify: 'Yes — unified trigger for native Store and external sources including Shopify, plus shipping connectors', status: 'Current', filters: 'Cart value, fulfilled products, order source, sub-source, shipping carrier, tracking number' },
    { trigger: 'Shopify Abandoned Cart', coversShopify: 'Yes — legacy', status: 'Deprecating soon; existing workflows keep working', filters: 'Same general shape as the unified trigger, but don\'t build new automations on it' },
    { trigger: 'Shopify Order Fulfilled', coversShopify: 'Yes — legacy', status: 'Deprecating soon', filters: 'Same caution as above' },
    { trigger: 'Payment Received', coversShopify: 'Not confirmed for Shopify', status: 'Current, but its documented sources are Funnel, Invoice, Manual Payment, Memberships and Website — Shopify isn\'t listed', filters: 'Use Shopify Order Placed instead for Shopify purchases' },
  ];

  const troubleshootingData = [
    { symptom: 'Shopify won\'t connect', likelyCause: 'Missing or incorrect Admin API access token or scopes on the custom app', whatToCheck: 'The custom app\'s configured scopes in Shopify, and that the token was pasted correctly' },
    { symptom: 'Customer isn\'t appearing in GoHighLevel', likelyCause: 'Sync hasn\'t run yet, or the customer exists but didn\'t match/merge as expected', whatToCheck: 'Sync status, and whether a duplicate contact was created instead' },
    { symptom: 'Order isn\'t appearing', likelyCause: 'Order placed before the connection\'s historical import window, or ongoing sync isn\'t active', whatToCheck: 'Order date relative to when you connected; confirm with a brand-new test order' },
    { symptom: 'Workflow isn\'t triggering on a new Shopify order', likelyCause: 'Built on Payment Received instead of Shopify Order Placed', whatToCheck: 'Which trigger the workflow actually uses' },
    { symptom: 'Abandoned Checkout doesn\'t fire for Shopify carts', likelyCause: 'Order Source/Sub-Source filter not set to External/Shopify, or no email was captured before abandonment', whatToCheck: 'The trigger\'s filters and whether the shopper entered an email' },
    { symptom: 'Duplicate contacts', likelyCause: 'A contact existed from another source before the Shopify sync ran', whatToCheck: 'Contact history and creation source for the duplicate' },
    { symptom: 'Product or collection data missing from the workflow', likelyCause: 'Standard integration doesn\'t document ongoing catalog sync', whatToCheck: 'Whether you actually need the separate Shopify migration tool instead' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Shopify Integration: What It Syncs & How It Works</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Integration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Shopify</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Shopify Integration:<br />
            <span className="text-[#F8D000]">What It Syncs, How It Works & What You Can Automate</span>
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
            Connecting Shopify to GoHighLevel doesn't hand your store over to GoHighLevel. Shopify keeps running the storefront, the catalog, checkout and fulfillment. What the integration does is bring your Shopify customers, orders and revenue into the same sub-account as your CRM, so GoHighLevel can organize that data and trigger follow-up automatically. HighLevel's own documentation describes it as a native connection, authorized through a Shopify custom app, that syncs customers, orders and revenue and lets specific Shopify events start GoHighLevel workflows.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This article covers exactly what moves between the two systems, how the connection is set up, which Shopify events can trigger a workflow, what stays inside Shopify only, and how to test and troubleshoot it. It's about the Shopify connection specifically, not the broader question of whether GoHighLevel suits ecommerce generally, and not GoHighLevel's own native storefront.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Integration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-test"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              How to Test
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
              <div className="text-sm font-bold text-white mb-2">Need Shopify Integration Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses connect Shopify to GoHighLevel and set up the right automations.</p>
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

            {/* Section: What Is Integration */}
            <h2 id="what-is-integration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is the GoHighLevel Shopify Integration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel Shopify integration is a native connection, set up per sub-account, that lets GoHighLevel receive customer, order and revenue data from a connected Shopify store and use specific Shopify events to trigger workflows. Shopify remains the ecommerce platform of record — the product catalog, checkout, payments and fulfillment stay there. GoHighLevel becomes the CRM and automation layer that acts on what Shopify reports.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Conceptually: <strong className="text-[#0E9BF0]">Shopify (customer, order, revenue data) → integration → GoHighLevel contact/order records → workflow trigger → condition → email/SMS/task/other action.</strong> Nothing about product catalog management, checkout design or payment processing moves to GoHighLevel. The integration exists to give GoHighLevel's workflow engine something to react to.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-shopify-integration.png"
                  alt="GoHighLevel Shopify Integration: Data flow from Shopify to GoHighLevel and workflow triggers"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Shopify Integration: Data flow from Shopify to GoHighLevel and workflow triggers</span>
              </div>
            </div>

            {/* Section: How Shopify Connects */}
            <h2 id="how-shopify-connects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Shopify Connects to GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Connecting Shopify to GoHighLevel is a sub-account-level setup that uses a Shopify custom app rather than a simple one-click login. In practice this means:
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Create a custom app in your Shopify admin</strong> and generate an Admin API access token for it, with the access scopes the integration needs (customers, orders, and related data).</li>
              <li><strong className="text-[#1A2236]">Open the Shopify integration settings inside the GoHighLevel sub-account</strong> and provide the store's connection details and the access token.</li>
              <li><strong className="text-[#1A2236]">Authorize the connection</strong> so GoHighLevel can read the permitted Shopify data.</li>
              <li><strong className="text-[#1A2236]">Let the initial sync run</strong> so existing customers, orders and revenue history populate the sub-account.</li>
              <li><strong className="text-[#1A2236]">Verify the sync</strong> by checking a known customer and a known order against what appears in GoHighLevel.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's documentation doesn't publish exact button labels for every step, and Shopify's own admin interface changes independently of GoHighLevel's, so treat the sequence above as the shape of the process rather than a literal click-path. Confirm the current screen labels in your own accounts when you set it up.
            </p>

            {/* Section: What Data Syncs */}
            <h2 id="what-data-syncs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Data the GoHighLevel Shopify Integration Syncs
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's documentation confirms the Shopify integration syncs customer data, order data and revenue into the sub-account, with an option to map orders onto pipelines and opportunities. Here is what's documented, category by category.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Shopify Data</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Available in GoHighLevel?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Can Be Used For</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Limitation to Know</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSyncData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.data}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.available}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.usedFor}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.limitation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How Customers Become Contacts */}
            <h2 id="how-customers-become-contacts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Shopify Customers Become Contacts in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A Shopify customer becomes a GoHighLevel contact through the sync, not through any action the shopper takes inside GoHighLevel itself. New and updated Shopify customers create or update a matching contact record, which is what lets a workflow later act on that person. HighLevel doesn't publish the exact matching logic it uses when a customer already exists as a contact from another source (a form submission, a different integration, a manual entry), so if your business already collects leads before they become Shopify customers, confirm with a real test whether the two records merge or duplicate rather than assuming.
            </p>

            {/* Section: How Orders Revenue Flow */}
            <h2 id="how-orders-revenue-flow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Shopify Orders and Revenue Flow Into GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An order placed in Shopify reaches GoHighLevel as an order record carrying its details, value and products, and the associated revenue is reflected in reporting. This is what makes order-based workflows and revenue-aware segmentation possible without a developer connecting anything custom. The optional order-to-pipeline mapping goes a step further: with it configured, a Shopify order can appear in a sales pipeline as an opportunity, with paid, pending and refunded states handled according to how you set it up — useful if a sales or account team needs to see ecommerce revenue alongside other deals, not just in a separate orders list.
            </p>

            {/* Section: What Does Not Sync */}
            <h2 id="what-does-not-sync" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Shopify Data Does Not Automatically Sync to GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Trusting the integration too broadly is the most common way people get surprised later, so this deserves a direct list of what the documentation reviewed does not confirm:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Live, ongoing product and collection sync</strong> through the standard Shopify integration isn't documented — product/collection import is described for the separate Shopify migration tool, covered below.</li>
              <li><strong className="text-[#1A2236]">Inventory levels</strong> are not described as syncing into GoHighLevel; inventory remains a Shopify concern.</li>
              <li><strong className="text-[#1A2236]">Two-way sync</strong> isn't documented. Treat the flow as Shopify → GoHighLevel; editing a contact in GoHighLevel should not be assumed to update the Shopify customer record.</li>
              <li><strong className="text-[#1A2236]">Every Shopify order field</strong> — discount codes, shipping method chosen, line-item-level metadata — isn't individually confirmed. What's documented is order details, value and products, not an exhaustive field list.</li>
              <li><strong className="text-[#1A2236]">Abandoned-cart detection before an email is captured.</strong> Like GoHighLevel's own store, the Abandoned Checkout trigger needs a captured email address to identify who to follow up with.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Where documentation is silent, the safer assumption is that the data doesn't sync rather than that it probably does.
            </p>

            {/* Section: Historical Import vs Ongoing */}
            <h2 id="historical-import-vs-ongoing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Historical Import vs Ongoing Shopify Sync
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Connecting Shopify to GoHighLevel does two different things, and conflating them is a common source of confusion. The <strong className="text-[#1A2236]">initial connection</strong> brings in your existing Shopify customer and order history so the sub-account isn't starting empty. <strong className="text-[#1A2236]">Ongoing sync</strong> is the separate, continuing process that brings in new customers and new orders as they happen after the connection is live. Both are part of the standard integration, but they answer different questions: "is my past data here" versus "will tomorrow's orders show up automatically." After connecting, check both — pull up an old order to confirm the historical import worked, then place or wait for a new order to confirm ongoing sync is actually running, rather than assuming one proves the other.
            </p>

            {/* Section: Which Events Trigger */}
            <h2 id="which-events-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Shopify Events Can Trigger GoHighLevel Workflows
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's workflow trigger list includes events built specifically for store activity, some of which explicitly cover Shopify and some of which are being phased out. Getting the right trigger matters more than getting the right filters — using a deprecating trigger, or assuming a trigger covers Shopify when it doesn't, is why an automation can look correctly configured and still never fire.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Trigger</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Covers Shopify?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Current Status</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Filters</th>
                  </tr>
                </thead>
                <tbody>
                  {triggerData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.trigger}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.coversShopify}</td>
                      <td className={`py-3 px-3 font-semibold ${item.status.includes('Deprecating') ? 'text-[#DC3545]' : 'text-[#25C97D]'}`}>{item.status}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.filters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That last row is worth pausing on. It's tempting to assume Payment Received covers any payment anywhere in the account, including Shopify. HighLevel's documented source list for that trigger doesn't include Shopify, so a workflow built on Payment Received to catch Shopify purchases may simply never fire. Shopify Order Placed is the trigger documented for that job.
            </p>

            {/* Section: What You Can Automate */}
            <h2 id="what-you-can-automate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What You Can Automate With Shopify Data in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once Shopify data is flowing into GoHighLevel, the automation itself runs on the same workflow engine used everywhere else in the platform — the value is in connecting real Shopify events to real actions, not in some separate "ecommerce automation" system. A few genuinely supported starting points:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">New order follow-up</strong> — Shopify Order Placed, filtered by product or cart value, sends a confirmation or starts onboarding.</li>
              <li><strong className="text-[#1A2236]">Abandoned checkout recovery</strong> — the Abandoned Checkout trigger, filtered to Order Source: External and Sub-Source: Shopify, sends an email or SMS reminder before the cart is lost for good.</li>
              <li><strong className="text-[#1A2236]">Post-fulfillment communication</strong> — Order Fulfilled, filtered by carrier or tracking presence, sends shipping confirmation, then a later review request after a wait.</li>
              <li><strong className="text-[#1A2236]">Product-specific follow-up</strong> — Shopify Order Placed or Order Fulfilled, filtered to a specific product, sends usage guidance or a relevant cross-sell only to buyers of that item.</li>
              <li><strong className="text-[#1A2236]">Retention and winback</strong> — built from standard workflow tools (tags, wait steps, conditions) rather than a dedicated "inactive Shopify customer" trigger, since no such trigger is documented.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each of these needs the same things any workflow needs: the right trigger, the right filters, a tested condition, and a message that's actually worth sending. Connecting Shopify doesn't create this logic for you — it gives the workflow engine real events to work with. Detailed, step-by-step builds for abandoned checkout recovery and post-purchase sequences are their own topics; this article gives you the trigger-level foundation to build them on.
            </p>

            {/* Section: Shopify vs Native Store */}
            <h2 id="shopify-vs-native-store" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Shopify + GoHighLevel vs GoHighLevel's Native Ecommerce Store
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Connecting Shopify and using GoHighLevel's own Ecommerce Store are two different architectural choices, not two ways of describing the same thing. With Shopify connected, Shopify remains the storefront and GoHighLevel is the CRM/automation layer reacting to Shopify events. With the native Ecommerce Store, GoHighLevel itself is the storefront — products, cart, checkout and orders all live inside HighLevel, with no external platform involved. A business already committed to Shopify's catalog and checkout would connect it; a business that wants one platform end to end, with a simpler catalog, might use the native Store instead. For how the native Store's products, checkout and workflow triggers actually work, see the <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store guide</Link>.
            </p>

            {/* Section: Integration vs Migration */}
            <h2 id="integration-vs-migration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Native Shopify Integration vs the Separate Shopify Migration Tool
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel documents a second, separate Shopify-related feature that's easy to confuse with the standard integration: a Shopify store migration tool, added in late 2025, built for businesses that want to move their Shopify operation onto GoHighLevel's native ecommerce tools rather than keep Shopify as the platform of record. It imports products, collections, contacts, orders and transactions into HighLevel's own Ecommerce Store, and offers configurable ongoing sync control after the initial move. That's a different job from the integration covered in this article, which keeps Shopify as the store and adds GoHighLevel as the automation layer around it. If you're evaluating a full move off Shopify rather than connecting alongside it, that's the feature to look at, and it deserves its own dedicated walkthrough rather than a subsection here.
            </p>

            {/* Section: How to Test */}
            <h2 id="how-to-test" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test the GoHighLevel Shopify Integration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A working connection should be verified stage by stage, because each one proves something different and a green checkmark on the connection screen doesn't confirm any of them on its own.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Confirm a known existing customer</strong> appears correctly as a contact — proves the historical import worked.</li>
              <li><strong className="text-[#1A2236]">Place or generate a new test order</strong> in Shopify and confirm it appears in GoHighLevel — proves ongoing sync is live, not just the initial import.</li>
              <li><strong className="text-[#1A2236]">Check the order's details, value and product</strong> against what actually sold — proves the order data is accurate, not just present.</li>
              <li><strong className="text-[#1A2236]">Confirm Shopify Order Placed fired</strong> for that order — proves the trigger is wired correctly.</li>
              <li><strong className="text-[#1A2236]">Start a checkout, enter an email, and abandon it,</strong> then confirm the Abandoned Checkout trigger fires with Order Source: External after the window elapses — proves the abandonment path works specifically for Shopify.</li>
              <li><strong className="text-[#1A2236]">Mark the test order fulfilled in Shopify</strong> and confirm Order Fulfilled fires in GoHighLevel — proves the fulfillment path is connected.</li>
              <li><strong className="text-[#1A2236]">Check for a duplicate contact</strong> if that customer already existed in GoHighLevel from another source — proves (or disproves) safe matching behavior for your setup.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A successful sync proves the connection works for that one customer and order. It doesn't prove every product type, discount scenario, or fulfillment method behaves the same — repeat the parts that differ in your store before relying on the automation for real customers. To confirm a workflow actually enrolled rather than just assuming the trigger fired, use the <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">guide to Enrollment History and Execution Logs</Link>.
            </p>

            {/* Section: Common Problems */}
            <h2 id="common-problems" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common GoHighLevel Shopify Integration Problems and Fixes
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Symptom</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.symptom}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCause}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatToCheck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When a Shopify-triggered workflow isn't firing at all, work through <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">why a GoHighLevel workflow isn't triggering</Link> for the general diagnostic process. If the contact enrolled but a later step in the workflow failed, see <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">how to find the failed step</Link>.
            </p>

            {/* Section: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Limitations of the GoHighLevel Shopify Integration to Know
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Not confirmed two-way.</strong> Treat GoHighLevel as a downstream consumer of Shopify data, not an editor of it.</li>
              <li><strong className="text-[#1A2236]">No documented live product/collection sync</strong> through the standard integration — that's the separate migration tool's job.</li>
              <li><strong className="text-[#1A2236]">Payment Received doesn't cover Shopify</strong> based on its documented source list; use Shopify Order Placed.</li>
              <li><strong className="text-[#1A2236]">Abandonment detection depends on a captured email,</strong> same as GoHighLevel's native store.</li>
              <li><strong className="text-[#1A2236]">Exact contact-matching rules aren't published,</strong> so duplicate risk exists when a customer already has a contact record from elsewhere.</li>
              <li><strong className="text-[#1A2236]">Two legacy triggers are deprecating.</strong> New builds should use Abandoned Checkout and Order Fulfilled, not the Shopify-specific originals.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              None of these make the integration unreliable — they're the boundaries to design around, and GHL Scale Up's own published comparisons are candid that GoHighLevel's ecommerce integrations aren't as deep as a dedicated ecommerce marketing platform's for a Shopify-heavy business.
            </p>

            {/* Section: When It Makes Sense */}
            <h2 id="when-it-makes-sense" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Connecting Shopify to GoHighLevel Makes Sense
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Connecting Shopify tends to make sense when the CRM and automation side of the business matters as much as the storefront itself: businesses that want customer follow-up, segmentation and a sales pipeline sitting alongside Shopify orders rather than in a separate tool; teams already running their CRM, calendars or other communication through GoHighLevel who don't want a second automation platform just for ecommerce; and stores where a sales-assisted or high-ticket process benefits from GoHighLevel's pipeline and workflow tools reacting to Shopify purchase events.
            </p>

            {/* Section: When You Might Not Need */}
            <h2 id="when-you-might-not-need" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When You Might Not Need to Connect Shopify to GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The integration may not add much if Shopify's own ecosystem, or a dedicated ecommerce marketing tool already in place, already covers your CRM, segmentation and automation needs — plenty of stores run well on Shopify plus a tool built specifically for ecommerce email and SMS. It's also not worth the setup effort if there's no real follow-up or sales process to automate: if the store is purely transactional with no meaningful post-purchase communication strategy, connecting a second platform adds maintenance without a clear payoff.
            </p>

            {/* Section: Architecture to Remember */}
            <h2 id="architecture-to-remember" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Architecture to Remember
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Shopify keeps running the store. GoHighLevel becomes the place customer and order data lands so it can be organized, segmented and acted on. The integration syncs customers, orders and revenue, and a specific set of current Shopify events — Shopify Order Placed, Abandoned Checkout and Order Fulfilled — can start workflows. It doesn't sync products or collections on an ongoing basis, it isn't confirmed two-way, and Payment Received isn't the trigger for Shopify purchases. Connect it when the CRM and automation side of the business genuinely needs to react to what happens in Shopify — not because the two platforms exist and can technically be linked.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About the GoHighLevel Shopify Integration
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
              Still unsure whether connecting Shopify to GoHighLevel makes sense for your store?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-ecommerce-store" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store: How It Works & Who It Fits →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? →</Link>
                <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Connecting Shopify to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help ecommerce businesses connect Shopify to GoHighLevel and set up the right automations.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience connecting Shopify to GoHighLevel for ecommerce businesses. All product details verified against HighLevel documentation as of September 2026.
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