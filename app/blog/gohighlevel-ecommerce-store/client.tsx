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
  AlertTriangle,
  Clock,
  Rocket,
  CheckCircle2,
  Image as ImageIcon,
  Link2,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelEcommerceStoreClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-ecommerce-store',
        'how-it-works',
        'where-store-lives',
        'store-crm-workflows',
        'products-variants-collections',
        'how-products-and-variants-set-up',
        'how-collections-work',
        'what-inventory-tracking-covers',
        'how-browsing-cart-checkout',
        'how-shipping-pickup-tax',
        'which-payment-methods',
        'what-happens-after-checkout',
        'which-workflow-triggers',
        'how-abandoned-checkout-works',
        'how-store-supports-lifecycle',
        'automation-examples',
        'native-integration-third-party',
        'which-businesses-fit',
        'what-store-does-not-replace',
        'gohighlevel-vs-shopify',
        'how-to-decide',
        'what-you-need-before-building',
        'how-to-test',
        'common-problems',
        'security-data-cost',
        'core-decision',
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
      q: "What is the GoHighLevel Ecommerce Store?",
      a: "HighLevel's native storefront for displaying products, accepting payments, managing orders and customizing the shopping experience from a website or funnel."
    },
    {
      q: "Can you build an online store with GoHighLevel?",
      a: "Yes. A complete Store needs products, Store pages, a domain and a connected payment provider."
    },
    {
      q: "Does GoHighLevel have a shopping cart?",
      a: "Yes. The Cart page is one of the five Store pages and lets customers review and adjust items before checkout."
    },
    {
      q: "Does GoHighLevel have checkout?",
      a: "Yes. Checkout collects contact and address details, fulfillment options, eligible coupons and payment."
    },
    {
      q: "Can GoHighLevel sell products?",
      a: "Yes. It supports physical, digital, one-time and recurring products, sold through the Store, funnels, payment links, invoices or forms."
    },
    {
      q: "Does GoHighLevel support product collections?",
      a: "Yes. Collections can be manual or rule-based Smart Collections."
    },
    {
      q: "Can GoHighLevel process ecommerce payments?",
      a: "Yes, through a connected provider such as Stripe, PayPal, Authorize.Net, NMI, Square or Razorpay."
    },
    {
      q: "Can GoHighLevel automate abandoned checkout?",
      a: "Yes, through an automatic email and a customizable Abandoned Checkout workflow trigger. Both require a captured email address."
    },
    {
      q: "Can GoHighLevel trigger workflows from orders?",
      a: "Yes. Payment Received, Order Fulfilled and Abandoned Checkout are documented for store activity. Confirm Order Submitted behavior for Store orders with a test."
    },
    {
      q: "Can GoHighLevel replace Shopify?",
      a: "For simple catalogs it can host the storefront, but it does not document Shopify-level inventory, merchandising or app-ecosystem depth."
    },
    {
      q: "Is GoHighLevel suitable for a large ecommerce store?",
      a: "HighLevel publishes no catalog-size limit in the documentation reviewed, but complex inventory, variants and merchandising needs point toward a dedicated platform."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-ecommerce-store', title: 'What Is the GoHighLevel Ecommerce Store?' },
    { id: 'how-it-works', title: 'How It Works From Product to Follow-Up' },
    { id: 'where-store-lives', title: 'Where the Store Lives: Website, Funnel or Order Form' },
    { id: 'store-crm-workflows', title: 'How Store, CRM and Workflows Fit Together' },
    { id: 'products-variants-collections', title: 'Products, Variants, Collections and Inventory' },
    { id: 'how-products-and-variants-set-up', title: 'How Products and Variants Are Set Up' },
    { id: 'how-collections-work', title: 'How Collections Work' },
    { id: 'what-inventory-tracking-covers', title: 'What Inventory Tracking Covers' },
    { id: 'how-browsing-cart-checkout', title: 'How Browsing, Cart and Checkout Work' },
    { id: 'how-shipping-pickup-tax', title: 'How Shipping, Pickup and Tax Are Handled' },
    { id: 'which-payment-methods', title: 'Which Payment Methods Are Accepted' },
    { id: 'what-happens-after-checkout', title: 'What Happens After Checkout' },
    { id: 'which-workflow-triggers', title: 'Which Workflow Triggers Respond to Store Activity' },
    { id: 'how-abandoned-checkout-works', title: 'How Abandoned Checkout Works' },
    { id: 'how-store-supports-lifecycle', title: 'How the Store Supports the Customer Lifecycle' },
    { id: 'automation-examples', title: 'Five Hypothetical Automation Examples' },
    { id: 'native-integration-third-party', title: 'Native, Integration-Based and Third-Party Capabilities' },
    { id: 'which-businesses-fit', title: 'Which Ecommerce Businesses Are a Good Fit?' },
    { id: 'what-store-does-not-replace', title: 'What the Store Does Not Replace' },
    { id: 'gohighlevel-vs-shopify', title: 'GoHighLevel Ecommerce Store vs Shopify' },
    { id: 'how-to-decide', title: 'How to Decide Whether the Store Fits' },
    { id: 'what-you-need-before-building', title: 'What You Need Before Building' },
    { id: 'how-to-test', title: 'How to Test Before Launch' },
    { id: 'common-problems', title: 'Common Problems and Fixes' },
    { id: 'security-data-cost', title: 'Security, Data and Cost Considerations' },
    { id: 'core-decision', title: 'The Core Decision' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const storeFlowData = [
    { stage: 'Product', whatHappens: 'Created with pricing, variants, media and the Include in Online Store setting', whereManaged: 'Payments → Products' },
    { stage: 'Products List', whatHappens: 'Customers browse products and collections', whereManaged: 'Store page in the website or funnel builder' },
    { stage: 'Product Details', whatHappens: 'Media, price, description and variants for one product', whereManaged: 'Store page' },
    { stage: 'Cart', whatHappens: 'Customers review and adjust the items they intend to buy', whereManaged: 'Store page' },
    { stage: 'Checkout', whatHappens: 'Contact and address details, fulfillment options, eligible coupons, payment', whereManaged: 'Store page plus Payments settings' },
    { stage: 'Thank You', whatHappens: 'Order confirmation after successful purchase', whereManaged: 'Store page' },
    { stage: 'Order', whatHappens: 'Order and transaction records, refunds, fulfillment details', whereManaged: 'Payments → Orders and Transactions' },
    { stage: 'Follow-up', whatHappens: 'Workflows respond to payment, fulfillment, abandonment and other events', whereManaged: 'Automation → Workflows' },
  ];

  const storeLocationData = [
    { option: 'Store on a website', whatCustomersGet: 'Full storefront with the five Store pages', documentedConstraints: 'Manually deleting a Store page can remove the Store\'s pages' },
    { option: 'Store-embedded funnel', whatCustomersGet: 'Regular funnel steps plus the five Store steps; Store elements such as Featured Product, Upsell, Collection List and Search Bar', documentedConstraints: 'One Store per funnel; Store steps can\'t be A/B split tested or cloned individually; deleting one Store step removes all five' },
    { option: 'Funnel product with order form', whatCustomersGet: 'One-step or two-step order form selling products on a checkout page', documentedConstraints: 'No product browsing or cart journey; the Store\'s automatic abandoned checkout email does not apply' },
  ];

  const paymentMethodsData = [
    { provider: 'Stripe cards', available: 'Yes' },
    { provider: 'Apple Pay and Google Pay (via Stripe)', available: 'Yes' },
    { provider: 'Affirm, Klarna, Afterpay (via Stripe)', available: 'Yes' },
    { provider: 'Stripe iDEAL/Bancontact, SEPA, Link, Amazon Pay/Revolut Pay', available: 'Yes' },
    { provider: 'PayPal', available: 'Yes' },
    { provider: 'Authorize.Net, NMI and Square cards', available: 'Yes' },
    { provider: 'Razorpay', available: 'Yes' },
    { provider: 'ACH Direct Debit', available: 'No (invoices only)' },
    { provider: 'Card readers', available: 'No (POS only)' },
  ];

  const workflowTriggersData = [
    { trigger: 'Abandoned Checkout', firesWhen: 'A shopper adds items, enters a valid email and doesn\'t finish paying within the window you set', coverage: 'Native Store and external stores such as Shopify. Filters: duration in minutes, cart value, country, products, order source, sub-source, store name' },
    { trigger: 'Order Fulfilled', firesWhen: 'An order\'s status changes to Fulfilled', coverage: 'Native Store and external sources such as Shopify, Shippo and ShipStation. Filters: cart value, fulfilled products, order source, sub-source, carrier, tracking number' },
    { trigger: 'Payment Received', firesWhen: 'A payment is successfully captured', coverage: 'Source options include the Website storefront (products or subscriptions). Filters: product, payment status, source' },
    { trigger: 'Product Review Submitted', firesWhen: 'A product review is submitted', coverage: 'Listed under Ecommerce Stores' },
    { trigger: 'Refund; coupon applied, redeemed, expired or limit reached', firesWhen: 'The named payment event occurs', coverage: 'Listed under Payments' },
    { trigger: 'Order Submitted', firesWhen: 'An order is submitted at checkout', coverage: 'Documented for order forms, upsells and payment links. Confirm behavior for Store orders with a test order' },
    { trigger: 'Shopify Abandoned Cart, Shopify Order Fulfilled', firesWhen: 'Legacy Shopify events', coverage: 'Marked as deprecating soon; new automations should use the unified triggers above' },
  ];

  const lifecycleData = [
    { stage: 'Checkout abandoned', storeEvent: 'Shopper leaves after entering email', entryPoint: 'Abandoned Checkout trigger or automatic email', notes: 'Native' },
    { stage: 'First purchase', storeEvent: 'Payment captured', entryPoint: 'Payment Received (Website source)', notes: 'Native' },
    { stage: 'Order shipped', storeEvent: 'Order marked fulfilled', entryPoint: 'Order Fulfilled', notes: 'Status change, not delivery confirmation' },
    { stage: 'Review stage', storeEvent: 'Review submitted', entryPoint: 'Product Review Submitted', notes: 'Request itself is a workflow email or SMS after a wait' },
    { stage: 'Refund', storeEvent: 'Refund issued', entryPoint: 'Refund trigger', notes: 'Listed under Payments' },
    { stage: 'Repeat and inactive customers', storeEvent: 'Later order, or no order', entryPoint: 'Standard workflow tools', notes: 'No dedicated store trigger documented' },
  ];

  const nativeIntegrationData = [
    { capability: 'Storefront pages, products, collections, cart, checkout, coupons, shipping zones, tax settings, orders', type: 'Native', note: 'Configured inside HighLevel' },
    { capability: 'Payment processing', type: 'Native checkout, external provider', note: 'Stripe, PayPal, Authorize.Net, NMI, Square, Razorpay; provider fees apply' },
    { capability: 'Shipping and fulfillment connectors', type: 'Integration', note: 'Shippo, ShipStation, Printful, Printify are documented' },
    { capability: 'Abandoned Checkout and Order Fulfilled for Shopify orders', type: 'Integration', note: 'Requires Shopify connected to HighLevel' },
    { capability: 'Sending order data to other tools', type: 'API, webhook or third-party connector', note: 'Requires custom or connector-based setup' },
  ];

  const businessFitData = [
    { businessType: 'Funnel-driven sellers', whyItMayFit: 'Store steps sit inside the same funnel as landing and promotional pages', checkFirst: 'One Store per funnel; no A/B testing on Store steps' },
    { businessType: 'Product plus service businesses', whyItMayFit: 'Physical, digital and recurring products can sit alongside services and programs in one sub-account', checkFirst: 'How recurring products list in the Store' },
    { businessType: 'Small to mid-sized catalogs with automation at the center', whyItMayFit: 'Orders, contacts and workflows share one platform', checkFirst: 'Variant, inventory and shipping needs against the documented limits' },
    { businessType: 'Businesses already on GoHighLevel', whyItMayFit: 'No second system for storefront, CRM and follow-up', checkFirst: 'Payment provider, domain and shipping setup effort' },
    { businessType: 'High-ticket or consultative sellers', whyItMayFit: 'The store handles checkout while the CRM pipeline handles qualification', checkFirst: 'Store checkout is transactional; sales steps live in the CRM' },
  ];

  const shopifyComparisonData = [
    { requirement: 'Storefront and checkout', ghl: 'Built in the website or funnel builder; five fixed Store pages', shopify: 'Dedicated ecommerce platform storefront and checkout' },
    { requirement: 'Inventory', ghl: 'Quantity tracking per product or variant', shopify: 'Inventory by location, purchase orders, transfers and inventory reports' },
    { requirement: 'CRM and messaging', ghl: 'Native CRM, workflows, email and SMS in the same sub-account', shopify: 'Store operations; marketing and CRM usually via apps or connected tools' },
    { requirement: 'Automation', ghl: 'Workflow engine with store triggers', shopify: 'Shopify Flow automates store tasks; App Store extends functionality' },
    { requirement: 'Ecosystem', ghl: 'HighLevel\'s documented connectors (Shippo, ShipStation, Printful, Printify)', shopify: 'Shopify App Store' },
    { requirement: 'Analytics', ghl: 'Orders and Transactions in Payments; workflow analytics; storefront analytics not documented', shopify: 'Built-in inventory and store reports' },
  ];

  const troubleshootingData = [
    { symptom: 'Product doesn\'t appear in the Store', likelyCause: 'Include in Online Store is off, stock is zero, or a collection rule excludes it', whatToCheck: 'The product setting, inventory quantity, Smart Collection rules' },
    { symptom: 'No shipping rate at checkout', likelyCause: 'The buyer\'s address falls in no shipping zone', whatToCheck: 'Payments → Settings → Shipping & Delivery; add a fallback zone' },
    { symptom: 'Download button missing after a digital purchase', likelyCause: 'No file uploaded to the product or variant', whatToCheck: 'Product and variant files' },
    { symptom: 'Abandoned checkout doesn\'t fire', likelyCause: 'No email captured, window not elapsed, order-form checkout, or filters exclude the cart', whatToCheck: 'Trigger window and filters, automatic email setting, checkout type' },
    { symptom: 'Order Fulfilled doesn\'t fire', likelyCause: 'Order not marked Fulfilled, or filters exclude it', whatToCheck: 'Order status, carrier, tracking, product and source filters' },
    { symptom: 'Payment method missing', likelyCause: 'Wallet unsupported on the device, or method unavailable for the Store', whatToCheck: 'The provider matrix and device' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help evaluating the GoHighLevel Ecommerce Store.</p>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Ecommerce Store: How It Works & Who It Fits</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce Store</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Product Guide</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Ecommerce Store:<br />
            <span className="text-[#F8D000]">How It Works and When to Use It</span>
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
            <strong className="text-white">Yes, GoHighLevel has a built-in Ecommerce Store.</strong> HighLevel's documentation describes it as a storefront that lets a business display products, accept payments, manage orders and customize the shopping experience from a website, with the same sub-account also holding the CRM and workflows. It can also be added directly to a funnel. It is not automatically equivalent to Shopify: it covers the core shopping journey, and the documentation does not describe the deeper inventory, merchandising and app-ecosystem tooling that dedicated ecommerce platforms are built around.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This guide explains what the store is, how each stage from product to follow-up works, which workflow triggers respond to store activity, where it stops, and how to judge fit. It is about the store product itself. The wider question of using GoHighLevel as the CRM layer behind an ecommerce business is <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-[#0E9BF0] hover:underline">covered separately</Link>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Ecommerce Store Advice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-decide"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Decision Framework
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
              <div className="text-sm font-bold text-white mb-2">Need Ecommerce Store Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses evaluate and set up the GoHighLevel Ecommerce Store.</p>
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

            {/* Section: What Is Ecommerce Store */}
            <h2 id="what-is-ecommerce-store" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is the GoHighLevel Ecommerce Store?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel Ecommerce Store is HighLevel's native storefront module. Customers browse products, review product details, manage a cart, complete checkout and receive an order confirmation. The business creates products under Payments → Products, builds the storefront in Sites → Stores using the website builder, connects a payment provider, and reviews orders and transactions under Payments.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel documents four requirements for a complete Store: products, Store pages, a domain, and a connected payment provider. An Ask AI setup assistant can guide supported onboarding tasks and help connect an existing domain, but setting up a new domain and connecting a payment provider remain manual. A sub-account can hold more than one Store.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Because the store sits in the same sub-account as contacts, conversations and workflows, orders and payments live beside the customer records and automations rather than in a separate system. That is the product's main design idea, and also the source of its boundaries, covered later.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-ecommerce-store.png"
                  alt="GoHighLevel Ecommerce Store: Product to follow-up flow and where the store lives"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Ecommerce Store: Product to follow-up flow and where the store lives</span>
              </div>
            </div>

            {/* Section: How It Works */}
            <h2 id="how-it-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How the GoHighLevel Ecommerce Store Works From Product to Follow-Up
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The store follows one linear path: <strong className="text-[#0E9BF0]">Product → Products List → Product Details → Cart → Checkout → Payment → Order → Contact → Workflow → Follow-up.</strong> Each stage is native to HighLevel except the payment provider, which is external and connected by the business.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happens</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Where It Is Managed</th>
                  </tr>
                </thead>
                <tbody>
                  {storeFlowData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatHappens}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whereManaged}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The five Store pages (Products List, Product Details, Cart, Checkout, Thank You) are generated together and stay in that fixed sequence. They cannot be reordered relative to one another, and regular pages cannot be placed between them.
            </p>

            {/* Section: Where Store Lives */}
            <h2 id="where-store-lives" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where the GoHighLevel Ecommerce Store Lives: Website, Funnel or Order Form
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A GoHighLevel Ecommerce Store can be added to a website or embedded in a funnel, and both differ from selling a product through a funnel order form. Choosing among them shapes the customer journey, so the distinction is worth settling first.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Option</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Customers Get</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Documented Constraints</th>
                  </tr>
                </thead>
                <tbody>
                  {storeLocationData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.option}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatCustomersGet}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.documentedConstraints}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Older guides often say the store exists only on websites. HighLevel's current documentation covers funnel embedding, so treat that older claim as outdated. For how the underlying builders work, see the <Link href="/blog/gohighlevel-website-builder" className="text-[#0E9BF0] hover:underline">GoHighLevel website builder guide</Link> and the <Link href="/blog/gohighlevel-funnel-builder" className="text-[#0E9BF0] hover:underline">GoHighLevel funnel builder guide</Link>.
            </p>

            {/* Section: Store CRM Workflows */}
            <h2 id="store-crm-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How the GoHighLevel Ecommerce Store, CRM and Workflows Fit Together
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The store, the CRM and the workflow engine are three separate layers inside GoHighLevel. The <strong className="text-[#1A2236]">Ecommerce Store</strong> is the customer-facing transaction environment: products, cart, checkout, payment, orders. The <strong className="text-[#1A2236]">CRM</strong> holds contacts, conversations and segmentation. <strong className="text-[#1A2236]">Workflows</strong> connect events to actions. A store event (a payment, a fulfilled order, an abandoned checkout) starts a workflow, and the workflow acts on the customer through email, SMS, tags, tasks and other actions.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Be precise about the data link. HighLevel's store documentation says checkout collects the customer's contact and address information and that orders and transactions are reviewed under Payments. It does not publish a field-by-field map of which order details become contact fields, so confirm what lands on the contact with a test order rather than assuming. How the store's customer and order data supports a wider CRM and automation strategy, including Shopify and WooCommerce setups, is covered in <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM for Ecommerce</Link>.
            </p>

            {/* Section: Products Variants Collections */}
            <h2 id="products-variants-collections" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Products, Variants, Collections and Inventory Work
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Products are the catalog layer of the GoHighLevel Ecommerce Store, and they are created once under Payments → Products and reused across selling methods. The same product can be sold through the Store, a funnel, a payment link, an invoice or a form's payment element.
            </p>

            {/* Section: How Products and Variants Set Up */}
            <h2 id="how-products-and-variants-set-up" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              How Products and Variants Are Set Up
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A product carries a title, rich-text description, images or video (HighLevel recommends 1024×1024 files under 10MB), an optional product label, a collection, tax settings and SEO fields including a URL handle. Pricing can be one-time or recurring, with a compare-at price and a currency. The Include in Online Store toggle decides whether the product appears in the Store.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Variants add options such as size or plan. Each variant can have its own price, compare-at price and available quantity, and product images can be mapped to specific variant combinations so the right image shows when a customer selects an option. Physical products collect shipping information at checkout. Digital products do not, and the download button appears only when a file is uploaded to the product or variant. The currency of an existing product cannot be changed. One-time products are listed in the Store by default, and HighLevel publishes a separate guide for selling recurring products in a Store.
            </p>

            {/* Section: How Collections Work */}
            <h2 id="how-collections-work" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              How Collections Work in the Store
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Collections group products for browsing and are managed under Payments → Products → Collections. A <strong className="text-[#1A2236]">Manual Collection</strong> is hand-picked and drag-ordered. A <strong className="text-[#1A2236]">Smart Collection</strong> uses saved rules on title, variant title, price or inventory, updates automatically within a few minutes, and disables manual edits so the rule stays accurate. The Collections List and Search Bar elements help customers find products, and a Store-embedded funnel can exclude products or change their display priority from its Store Products tab.
            </p>

            {/* Section: What Inventory Tracking Covers */}
            <h2 id="what-inventory-tracking-covers" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              What Inventory Tracking Covers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Inventory tracking is a Track Inventory setting on a product's pricing or variant, with an available quantity for each. When stock reaches zero the product shows as unavailable, and the abandoned checkout link is inventory-aware: an out-of-stock item shows a Remove item prompt. The documentation reviewed for this guide describes quantity tracking per product or variant. It does not describe multi-location stock, purchase orders or stock transfers, which matters for fit later in this guide.
            </p>

            {/* Section: How Browsing Cart Checkout */}
            <h2 id="how-browsing-cart-checkout" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Browsing, Cart and Checkout Work
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Customers move through the GoHighLevel Ecommerce Store in four visible steps: the Products List page shows what is available, the Product Details page shows media, price and variants, the Cart page lets them adjust quantities and items, and the Checkout page collects everything needed to place the order. The Thank You page then confirms it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              At checkout, customers enter contact and address information, choose available fulfillment options, apply eligible coupon codes and pay. The coupon field appears only when a valid coupon exists. Coupons work on one-time and recurring products, recurring discounts can have a set duration, and 100% discounts are supported by most providers except PayPal.
            </p>

            {/* Section: How Shipping Pickup Tax */}
            <h2 id="how-shipping-pickup-tax" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Shipping, Pickup and Tax Are Handled at Checkout
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Shipping is configured under Payments → Settings → Shipping & Delivery. Merchants define shipping zones by country and state or province, with flat rates or conditional rates based on order price or item weight, and can restrict a zone to specific ZIP or postcode patterns. Free shipping is applied at the zone or condition level, not per product, and a buyer whose address falls in no zone sees no rate, so a fallback zone is recommended. Pickup in Store hides the shipping section and uses the chosen pickup location as the address. HighLevel also documents connections for Shippo, ShipStation, Printful and Printify.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For tax, a product tax code supports automatic tax calculation at checkout, prices can be tax-inclusive or tax-exclusive following the global setting or a per-product choice, and tax rates can be attached manually. Tax rules vary by seller and buyer location, so verify your setup with an accountant instead of relying on defaults.
            </p>

            {/* Section: Which Payment Methods */}
            <h2 id="which-payment-methods" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Payment Methods the Store Accepts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel Ecommerce Store processes payments through a provider the business connects manually, and HighLevel publishes a matrix of which methods work in which product area. For the Ecommerce Store, the documented picture is below.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Payment Provider or Method</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Available in the Ecommerce Store</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentMethodsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.provider}</td>
                      <td className={`py-3 px-3 font-semibold ${item.available === 'Yes' ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.available}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Some methods work only for one-time payments, and wallet buttons appear only on supported devices, so test subscriptions and mobile checkout before launch. Processing fees are set by the payment provider, not by HighLevel.
            </p>

            {/* Section: What Happens After Checkout */}
            <h2 id="what-happens-after-checkout" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens After Checkout: Orders, Fulfillment and Customer Access
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              After a customer pays in the GoHighLevel Ecommerce Store, the order appears under Payments → Orders and the payment under Payments → Transactions. Orders start in an unfulfilled state. Refunds are processed from the same area, and marking an order fulfilled lets the business attach a tracking number, provider and tracking URL, which stay on the order afterward.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Customers can follow their order through a Customer Access Center: the order confirmation email carries a View Order button, and customers log in with the email used at checkout to see current and past orders, including fulfillment status, carrier and tracking details. The confirmation email itself is configured under Payments → Settings → Notifications.
            </p>

            {/* Section: Which Workflow Triggers */}
            <h2 id="which-workflow-triggers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Workflow Triggers Respond to Store Activity
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel workflows respond to store activity through triggers in the Ecommerce Stores and Payments categories, and the coverage differs by trigger. The table separates what HighLevel documents for native Store activity from what it documents elsewhere.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Trigger</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fires When</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Store Coverage and Filters</th>
                  </tr>
                </thead>
                <tbody>
                  {workflowTriggersData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.trigger}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.firesWhen}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two points deserve care. First, Order Fulfilled fires when the order status changes, which is a status change the business controls, not proof that the parcel arrived. Second, HighLevel documents no dedicated trigger for an "inactive customer," so winback logic is built from standard workflow tools such as waits, conditions and tags.
            </p>

            {/* Section: How Abandoned Checkout Works */}
            <h2 id="how-abandoned-checkout-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Abandoned Checkout Works
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Abandoned checkout in the GoHighLevel Ecommerce Store is handled by two separate mechanisms, and confusing them causes most of the surprises.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The automatic abandoned checkout email</strong> is on by default. It sends when a shopper adds items, begins checkout, enters an email address and doesn't complete the purchase. The default delay is 10 hours and can be changed in Payments → Settings → Notifications. HighLevel sends one automatic email per abandonment. The link works across devices, opens a view-only cart and reflects current prices and stock. It applies only to Store checkouts, not to funnel or website order forms, and it sends nothing if no email was captured. SMS is not part of the default email.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The Abandoned Checkout workflow trigger</strong> is the customizable route. You set the abandonment window in minutes, filter by cart value, country, products, source or store, and then use any workflow action: email, SMS, call or task. The Shopping Cart element in the email builder can list the exact items left behind. The trigger also works for connected Shopify stores.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's term is abandoned checkout, not abandoned cart, and the distinction is real: detection requires a valid email address, so a visitor who leaves the cart before entering one is not captured. If you send SMS to US numbers, registration requirements apply; see <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is and why it matters</Link>. Because both mechanisms react to the same abandonment, decide deliberately whether the automatic email should stay on when you build a workflow sequence, so shoppers don't get overlapping reminders.
            </p>

            {/* Section: How Store Supports Lifecycle */}
            <h2 id="how-store-supports-lifecycle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How the Store Supports the Customer Lifecycle
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The store supports the customer lifecycle by turning each documented store event into a workflow entry point. The table maps what is documented to what a business can do.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Lifecycle Stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Store Event</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Documented Entry Point</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {lifecycleData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.storeEvent}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.entryPoint}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Automation Examples */}
            <h2 id="automation-examples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Five Hypothetical GoHighLevel Ecommerce Store Automation Examples
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These five hypothetical examples use only triggers and filters documented above. Names and thresholds are illustrative.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Example A: a D2C brand sells five products through a campaign funnel.</p>
                <p className="text-sm text-[#5C6880]">The brand builds a Store-embedded funnel: landing page, then the five Store steps. A Payment Received workflow, filtered to successful payments and the relevant products, tags the buyer and sends a confirmation and onboarding email. Verify with a test order that the contact, tag and email all appear.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Example B: recovering high-value abandoned checkouts.</p>
                <p className="text-sm text-[#5C6880]">An Abandoned Checkout trigger uses a 30-minute window and a cart value filter. A condition sends higher-value carts an email containing the Shopping Cart element and, if SMS is registered, a text. Test that a shopper who completes the purchase stops receiving reminders.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Example C: order fulfilled, then a review request.</p>
                <p className="text-sm text-[#5C6880]">Order Fulfilled starts a workflow that waits a set number of days, then asks for a review by email or SMS. A separate Product Review Submitted workflow can thank the customer and tag them.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Example D: product-specific education.</p>
                <p className="text-sm text-[#5C6880]">Order Fulfilled, filtered to a specific fulfilled product, sends the care or usage guide for that product only.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Example E: VIP handling for large orders.</p>
                <p className="text-sm text-[#5C6880]">Order Fulfilled with a cart value filter adds a VIP tag and creates an internal task so the owner can follow up personally.</p>
              </div>
            </div>

            {/* Section: Native Integration Third-Party */}
            <h2 id="native-integration-third-party" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Native, Integration-Based and Third-Party Capabilities
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each capability of the GoHighLevel Ecommerce Store falls into one of four types, and readers should not blur them.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Capability</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {nativeIntegrationData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.capability}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.type}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Which Businesses Fit */}
            <h2 id="which-businesses-fit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Ecommerce Businesses Are a Good Fit?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel Ecommerce Store may fit when the customer relationship and automation layer matters as much as the storefront. These are fit characteristics, not rankings.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Business Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why the Store May Fit</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Check First</th>
                  </tr>
                </thead>
                <tbody>
                  {businessFitData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.businessType}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whyItMayFit}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.checkFirst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: What Store Does Not Replace */}
            <h2 id="what-store-does-not-replace" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What the GoHighLevel Ecommerce Store Does Not Replace
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel Ecommerce Store does not replace a dedicated ecommerce platform for demanding catalog, inventory or merchandising needs. This is consistent with GHL Scale Up's earlier guidance in its website builder guide. The limits below are documented; the second list is what the documentation reviewed for this guide does not describe.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The five Store pages keep a fixed order, Store steps can't be A/B split tested, and Clone Step is unsupported.</li>
              <li>Connecting a payment provider and setting up a new domain are manual.</li>
              <li>The automatic abandoned checkout email is one per abandonment, email-only by default, and Store-checkout-only.</li>
              <li>ACH Direct Debit and card readers are not available in the Store. Readers work only in POS.</li>
              <li>Free shipping is set at zone or condition level, not per product.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Not described in the Store documentation reviewed:</strong> multi-location inventory, purchase orders and stock transfers, marketplace or multichannel selling, a comparable app ecosystem, and depth of built-in storefront analytics. Confirm each against your requirements before committing.
            </p>

            {/* Section: GoHighLevel vs Shopify */}
            <h2 id="gohighlevel-vs-shopify" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Ecommerce Store vs Shopify: When Each Architecture Fits
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Shopify is a useful reference point for architecture, not a scorecard opponent. The table describes roles using documented capabilities.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requirement</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel Ecommerce Store</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Shopify</th>
                  </tr>
                </thead>
                <tbody>
                  {shopifyComparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.requirement}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.shopify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The two are not mutually exclusive: HighLevel's abandoned checkout and order-fulfilled triggers accept Shopify as an external source, and HighLevel documents a path for importing Shopify products, collections, contacts, orders and transactions. Fit depends on where you want the storefront to live.
            </p>

            {/* Section: How to Decide */}
            <h2 id="how-to-decide" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Decide Whether the GoHighLevel Ecommerce Store Fits Your Business
            </h2>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-4">
              <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                The GoHighLevel Ecommerce Store may be relevant when:
              </h3>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>You already use GoHighLevel for CRM, funnels or automation.</li>
                <li>Your catalog and shipping rules are relatively simple.</li>
                <li>Funnels are central to how you sell.</li>
                <li>You sell products alongside services, consultations, memberships or programs.</li>
                <li>You want orders and customer workflows in one ecosystem.</li>
              </ul>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5 my-4">
              <h3 className="text-base font-bold text-[#DC3545] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                A dedicated ecommerce platform may be more appropriate when:
              </h3>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Catalog, variant or inventory needs are complex, or stock is held in several locations.</li>
                <li>Merchandising and ecommerce analytics are major requirements.</li>
                <li>Marketplace or multichannel selling matters.</li>
                <li>You depend on a large ecommerce app ecosystem.</li>
              </ul>
            </div>

            {/* Section: What You Need Before Building */}
            <h2 id="what-you-need-before-building" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What You Need Before Building a GoHighLevel Ecommerce Store
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A GoHighLevel Ecommerce Store needs a few things in place before it can take orders.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>A sub-account with a website or funnel to host the Store.</li>
              <li>Products under Payments → Products with Include in Online Store enabled.</li>
              <li>A domain, and a payment provider connected manually.</li>
              <li>Shipping zones and tax settings if you sell physical products.</li>
              <li>Workflows for the events you care about, and a test plan.</li>
            </ul>

            {/* Section: How to Test */}
            <h2 id="how-to-test" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test a GoHighLevel Ecommerce Store Before Launch
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Testing a GoHighLevel Ecommerce Store means following one order all the way through, not just checking that pages load. Use a test product or your provider's test tools where available, and avoid live customer data.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Open the Products List and Product Details pages and check media, price and variants.</li>
              <li>Add a product to the cart and confirm quantities and totals.</li>
              <li>Complete checkout with a test payment and confirm the Thank You page.</li>
              <li>Confirm the order under Payments → Orders and the payment under Transactions.</li>
              <li>Open the customer's contact record and note what was created.</li>
              <li>Check Enrollment History to confirm the expected workflow started.</li>
              <li>Mark the order fulfilled with tracking details and confirm Order Fulfilled fires.</li>
              <li>Start a checkout, enter a test email and leave, then confirm the abandoned checkout email or workflow after the delay.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A completed test order proves the path works for that product, address and payment method. It does not prove other variants, shipping zones, tax locations, wallet methods or devices behave the same, so repeat the parts that differ. To read workflow evidence properly, use the <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">guide to Enrollment History and Execution Logs</Link>.
            </p>

            {/* Section: Common Problems */}
            <h2 id="common-problems" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Problems and Fixes for a GoHighLevel Ecommerce Store
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most GoHighLevel Ecommerce Store problems trace to a setting rather than a fault. The table lists the common ones.
            </p>

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
              When a store event should have started a workflow but didn't, work through <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">why a GoHighLevel workflow isn't triggering</Link>. If the contact entered but a later step failed, see <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">how to find the failed step</Link>. If a returning customer's second order doesn't start the workflow again, that is a <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">re-entry question</Link>. Common mistakes include treating a funnel order form as a Store, assuming Shopify features exist natively, skipping the fulfillment test, and reading Order Fulfilled as delivery confirmation.
            </p>

            {/* Section: Security Data Cost */}
            <h2 id="security-data-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Security, Data and Cost Considerations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Payment credentials are handled through the connected provider; HighLevel's setup assistant does not collect or configure them. Customer and order data live in the sub-account, so review who on your team can access Payments, orders and contacts, and review any third-party connector that moves order data out of HighLevel.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              On cost, HighLevel's documentation reviewed for this guide describes no separate Ecommerce Store fee, but confirm plan inclusion on HighLevel's official pricing page before committing. Payment processing fees belong to your provider, and email and SMS follow HighLevel's usage-based messaging charges. GHL Scale Up's <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing guide</Link> covers plans and usage costs.
            </p>

            {/* Section: Core Decision */}
            <h2 id="core-decision" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Choosing the GoHighLevel Ecommerce Store: The Core Decision
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel Ecommerce Store is a native storefront that connects products, cart, checkout, payments and orders to the CRM and workflows in the same sub-account. It fits businesses where that connection matters more than deep catalog and inventory tooling. If your requirements center on complex inventory, merchandising or a large app ecosystem, a dedicated ecommerce platform remains the more suitable foundation, and GoHighLevel can still work alongside it.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About the GoHighLevel Ecommerce Store
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
              Still unsure if the GoHighLevel Ecommerce Store fits your business?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-website-builder" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Website Builder Guide →</Link>
                <Link href="/blog/gohighlevel-funnel-builder" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Funnel Builder Guide →</Link>
                <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM for Ecommerce →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? →</Link>
                <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing Guide →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Evaluating the GoHighLevel Ecommerce Store?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help businesses decide if the GoHighLevel Ecommerce Store fits their stack and set it up correctly.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience evaluating and setting up the GoHighLevel Ecommerce Store. All product details verified against HighLevel documentation as of September 2026.
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