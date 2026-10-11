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

export default function GoHighLevelEcommerceUpsellCrossSellAutomationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'upselling-vs-cross-selling',
        'five-use-cases',
        'where-offer-appears',
        'how-shopify-gohighlevel-share-data',
        'documented-route-to-product-data',
        'what-remains-undocumented',
        'which-strategies-worth-automating',
        'how-to-build-workflow',
        'example-1-product-specific',
        'example-2-repeat-customer',
        'how-to-time-offers',
        'how-to-prevent-irrelevant',
        'common-mistakes',
        'how-to-test',
        'how-to-measure',
        'when-need-shopify-apps',
        'how-ghl-scale-up-can-help',
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
      q: "Can GoHighLevel automate ecommerce upsells?",
      a: "Yes, in two ways. HighLevel funnels have documented order bumps and one-click order upsells for sales made through HighLevel forms. After an order, a workflow can send an offer by email or SMS. It does not place offers inside Shopify's checkout."
    },
    {
      q: "Can GoHighLevel automate cross-sells?",
      a: "A cross-sell workflow can be built, provided the workflow can identify which product was bought and you maintain a history for exclusions. Test the data first."
    },
    {
      q: "How do I create an upsell workflow in GoHighLevel?",
      a: "Define the qualifying order, verify what data the trigger exposes, set eligibility and exclusions, add a Wait sized to product use, re-check eligibility, send, and set exit logic. The build section above walks through it."
    },
    {
      q: "Can GoHighLevel recommend products based on Shopify purchases?",
      a: "It can send a message based on a rule you define, such as product A leads to product B. No native recommendation engine is documented."
    },
    {
      q: "Can I send a cross-sell offer after a Shopify order?",
      a: "Yes, as a workflow message. Confirm in your account that your Shopify trigger exposes the line-item data your rule needs."
    },
    {
      q: "Can GoHighLevel show upsell offers during Shopify checkout?",
      a: "Not from HighLevel's documentation. Checkout and post-purchase offers on Shopify come from Shopify apps, and some require specific Shopify plans or channels."
    },
    {
      q: "Can I exclude customers who already bought the recommended product?",
      a: "Only if you hold that history. Tags applied per order are the usual method, but they cover only orders processed after you started tagging, unless you backfill."
    },
    {
      q: "Do I need a Shopify app for upsell automation?",
      a: "For offers shown in the store or checkout, yes. For emails or SMS after the order, no."
    },
    {
      q: "How do I prevent duplicate upsell messages?",
      a: "Use one lifecycle state per contact, check it at the start of each workflow, set re-entry deliberately, and re-check eligibility after Waits. No universal priority setting is documented."
    },
    {
      q: "When should a post-purchase upsell be sent?",
      a: "When the product has arrived and had a chance to be used, unless the offer is a one-click add-on to the order itself. Delay should come from your product and data, not a generic rule."
    },
    {
      q: "Does GoHighLevel support dynamic product recommendations?",
      a: "No native dynamic recommendation engine is documented. Use a recommendation app, API integration or custom development for that."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'upselling-vs-cross-selling', title: 'Upselling vs Cross-Selling: Why the Difference Changes the Workflow' },
    { id: 'five-use-cases', title: 'Can GoHighLevel Automate Upsells and Cross-Sells? Five Use Cases' },
    { id: 'where-offer-appears', title: 'Where Does the Offer Appear? Checkout, Funnel or Message' },
    { id: 'how-shopify-gohighlevel-share-data', title: 'How Shopify and GoHighLevel Share Data' },
    { id: 'documented-route-to-product-data', title: 'The Documented Route to Product-Level Order Data' },
    { id: 'what-remains-undocumented', title: 'What Remains Undocumented' },
    { id: 'which-strategies-worth-automating', title: 'Which Strategies Are Worth Automating' },
    { id: 'how-to-build-workflow', title: 'How to Build an Upsell or Cross-Sell Workflow' },
    { id: 'example-1-product-specific', title: 'Example 1: Product-Specific Cross-Sell Workflow' },
    { id: 'example-2-repeat-customer', title: 'Example 2: Repeat-Customer Upsell Workflow' },
    { id: 'how-to-time-offers', title: 'How to Time Upsell and Cross-Sell Offers' },
    { id: 'how-to-prevent-irrelevant', title: 'How to Prevent Irrelevant, Duplicate and Conflicting Offers' },
    { id: 'common-mistakes', title: 'Common Upsell and Cross-Sell Automation Mistakes' },
    { id: 'how-to-test', title: 'How to Test Upsell and Cross-Sell Workflows' },
    { id: 'how-to-measure', title: 'How to Measure Whether Offers Work' },
    { id: 'when-need-shopify-apps', title: 'When Do You Need Shopify Apps or Custom Integration Work?' },
    { id: 'how-ghl-scale-up-can-help', title: 'How GHL Scale Up Can Help With Ecommerce Automation' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const upsellVsCrossSellData = [
    { aspect: 'Relationship', upsell: 'Same need, better version', crossSell: 'Different product that works with the first' },
    { aspect: 'Data needed', upsell: 'What they own or are considering, and why the upgrade suits them', crossSell: 'What they bought, and a compatibility or complement rule' },
    { aspect: 'Main risk', upsell: 'Pushing the most expensive item', crossSell: 'Recommending something incompatible or already owned' },
    { aspect: 'Typical moment', upsell: 'At or before purchase, or later in the lifecycle', crossSell: 'After the order, once the first product is in hand' },
  ];

  const useCasesData = [
    { useCase: 'A. Rule-based offer', whatItMeans: 'Bought product A, so offer compatible product B', howFeasible: 'Careful workflow design. Documented building blocks exist; end-to-end behavior needs an account test', whatDecides: 'Whether the workflow can identify product A from the order' },
    { useCase: 'B. Segment-based offer', whatItMeans: 'A defined group gets a suitable offer', howFeasible: 'Straightforward where the group is defined by Order Count, Last Order Date or Lifetime Value, which the Shopify integration populates; product-based groups need tags', whatDecides: 'Quality of the segment definition' },
    { useCase: 'C. Order-triggered offer', whatItMeans: 'A qualifying order starts an evaluation', howFeasible: 'Careful design. Triggers exist; filters are limited and differ by trigger', whatDecides: 'Which trigger covers your store, and its filters' },
    { useCase: 'D. Catalog-based recommendation', whatItMeans: 'Offer depends on compatibility, availability or attributes', howFeasible: 'Not documented as native. You maintain the product-to-offer map yourself, or use another tool', whatDecides: 'Where the compatibility rules live' },
    { useCase: 'E. Behavioral or predictive', whatItMeans: 'Offer depends on browsing patterns or models', howFeasible: 'No native engine documented. Needs an external app, API work or custom development', whatDecides: 'Data volume and a recommendation model' },
  ];

  const whereOfferAppearsData = [
    { whereItAppears: 'Product page or cart on a Shopify store', whatProvides: 'Shopify theme or a Shopify app', highLevelRole: 'None directly. HighLevel can message afterward' },
    { whereItAppears: 'Shopify checkout, before payment', whatProvides: 'A Shopify app using checkout UI extensions; Shopify documents these steps as available only on Shopify Plus', highLevelRole: 'None directly' },
    { whereItAppears: 'Shopify post-purchase page, after payment', whatProvides: 'A Shopify app. Shopify documents limits: Online Store channel, minimum order, up to three accepted offers, one post-purchase page, one app at a time, and a fulfillment hold during the flow', highLevelRole: 'None directly' },
    { whereItAppears: 'HighLevel funnel checkout form (order bump)', whatProvides: 'HighLevel Forms order bump, documented as appearing on the original checkout form', highLevelRole: 'Native, for sales made through HighLevel forms, not Shopify checkout' },
    { whereItAppears: 'HighLevel funnel step after purchase (order upsell)', whatProvides: 'HighLevel Order Upsell in V2 Funnels with Native Form elements; one product per step, one unit', highLevelRole: 'Native, for HighLevel funnel sales' },
    { whereItAppears: 'Email or SMS after the order', whatProvides: 'A HighLevel workflow', highLevelRole: 'Native messaging; product data depends on the trigger' },
  ];

  const dataTypesData = [
    { dataType: 'Order-event data', whatItIs: 'Information present at the moment an order event fires', whatGHLDocuments: 'Line items (title, price, quantity, product_id and more) are documented for Order Submitted; a Shopify Order Placed example appears in the Array Formatter page' },
    { dataType: 'Contact-level data', whatItIs: 'Fields stored on the contact', whatGHLDocuments: 'Shopify Lifetime Value, Order Count, First and Last Order Date, Last Order Value, Store Name, Customer ID, Tax Exempt. No product list field is documented' },
    { dataType: 'Product catalog data', whatItIs: 'Products, variants, collections, prices, availability', whatGHLDocuments: 'Product Sync and Collection Sync exist in Sync Settings. Catalog relationships such as "goes with" are not documented' },
    { dataType: 'Purchase-history data', whatItIs: 'Which products this customer bought over time', whatGHLDocuments: 'Not documented as a persistent contact field. You build it (for example with tags added per order)' },
  ];

  const strategiesData = [
    { strategy: 'Complementary-Product Cross-Selling', objective: 'A relevant add-on to something bought', data: 'Which product was in the order; a rule mapping it to the complement', exclude: 'Customers who already own the complement, which needs purchase history', feasibility: 'Careful design. Start with products where the pairing is obvious and few in number.' },
    { strategy: 'Product Upgrades and Premium Offers', objective: 'Move a customer to a better-suited version', data: 'What they own and a reason', exclude: 'No reason to upgrade', feasibility: 'Needs product history and a trustworthy reason signal.' },
    { strategy: 'Bundle-Related Offers', objective: 'A combination that makes sense given the first purchase', data: 'Full purchase history', exclude: 'A bundle containing something already owned', feasibility: 'Harder than single-product cross-sell, because the exclusion applies to every item in the bundle.' },
    { strategy: 'Replenishment and Repeat-Purchase Offers', objective: 'A reminder timed to use', data: 'Product usage or your own order data', exclude: 'Recently purchased', feasibility: 'This is a repeat purchase, not a cross-sell. Timing should come from product usage or your own order data, not an arbitrary delay.' },
    { strategy: 'Repeat-Customer Offers', objective: 'A relevant offer for people who have bought more than once', data: 'Order Count (native) and product history', exclude: 'Every repeat buyer should not get the same promotion', feasibility: 'Order Count is kept by the Shopify integration, so eligibility is straightforward. Relevance is not: combine the count with product history.' },
    { strategy: 'High-Value Customer Offers', objective: 'Premium or personalized offers for customers with high Shopify Lifetime Value', data: 'Shopify Lifetime Value', exclude: 'Refund-heavy accounts', feasibility: 'Define the threshold from your own data. Revenue is not profit, so a high-spending customer who returns many orders may not be your best audience. Lifetime Value adjusts for refunds, but check a sample by hand.' },
  ];

  const timingData = [
    { moment: 'Before purchase', appropriateFor: 'Upgrade comparisons, bundles', tool: 'Storefront or app, not a CRM message' },
    { moment: 'During checkout', appropriateFor: 'Order bumps, add-ons', tool: 'Shopify app or HighLevel funnel form, depending on where checkout runs' },
    { moment: 'Immediately after the order', appropriateFor: 'One-click add-ons while payment details are fresh', tool: 'Shopify post-purchase app or HighLevel Order Upsell' },
    { moment: 'After fulfillment', appropriateFor: 'Accessories needed on arrival', tool: 'Workflow with Order Fulfilled trigger, if it covers your store' },
    { moment: 'After time to use the product', appropriateFor: 'Complements and care products', tool: 'Workflow with a Wait sized to product use' },
    { moment: 'Likely replenishment point', appropriateFor: 'Refills', tool: 'Workflow on Last Order Date; see retention guide' },
    { moment: 'Later lifecycle stage', appropriateFor: 'Upgrades, premium offers', tool: 'Smart List plus workflow' },
  ];

  const exclusionData = [
    { exclusion: 'Already bought the recommended product', howItCanBeDone: 'Tag added when that product is ordered; check before send', feasibility: 'Needs history you build; incomplete for other channels' },
    { exclusion: 'Original purchase does not qualify', howItCanBeDone: 'Condition on product or cart value', feasibility: 'Documented building blocks; verify filters' },
    { exclusion: 'Received this offer recently', howItCanBeDone: 'Tag plus date check or Wait-based cooldown', feasibility: 'Configured' },
    { exclusion: 'Bought again during the workflow', howItCanBeDone: 'Re-check or exit on new order', feasibility: 'Configured; test timing' },
    { exclusion: 'Required product data missing', howItCanBeDone: 'If/Else path for empty values', feasibility: 'Configured' },
    { exclusion: 'Channel not permitted', howItCanBeDone: 'DND and consent conditions', feasibility: 'Native fields; keep opt-in handling in HighLevel' },
    { exclusion: 'Offer incompatible with original purchase', howItCanBeDone: 'Your mapping table', feasibility: 'Custom if large' },
    { exclusion: 'In another active workflow', howItCanBeDone: 'Tag as state; check before entering', feasibility: 'Configured; no universal priority feature verified' },
  ];

  const mistakesData = [
    { mistake: 'Treating every post-purchase message as an upsell', whatHappens: 'Generic follow-ups get labelled as recommendations and train customers to ignore you', whatToCheck: 'Does the message depend on what they bought?', correction: 'Send an offer only when product relevance exists' },
    { mistake: 'Recommending without knowing the purchase', whatHappens: 'The trigger may not expose the product you assume', whatToCheck: 'Test order and workflow data', correction: 'Design from verified data' },
    { mistake: 'Assuming Shopify history persists in HighLevel', whatHappens: 'Order-event data is not a contact field', whatToCheck: 'Contact record vs trigger payload', correction: 'Build history with tags or an external store' },
    { mistake: 'Sending too early', whatHappens: 'Product not delivered or used', whatToCheck: 'Delivery time and use window', correction: 'Wait tied to fulfillment' },
    { mistake: 'Recommending owned products', whatHappens: 'No exclusion history', whatToCheck: 'Tag coverage for past orders', correction: 'Backfill or accept gaps' },
    { mistake: 'Too many offers', whatHappens: 'Overlapping workflows', whatToCheck: 'Contact timeline', correction: 'One lifecycle state' },
    { mistake: 'Discounting by default', whatHappens: 'Relevance may be the real problem', whatToCheck: 'Does the offer need a discount?', correction: 'Test without one first' },
    { mistake: 'Ignoring margin', whatHappens: 'Higher order value is not higher profit', whatToCheck: 'Margin of recommended items', correction: 'Evaluate contribution, not revenue' },
    { mistake: 'Not re-checking eligibility', whatHappens: 'Customer bought again mid-workflow', whatToCheck: 'Wait steps without re-checks', correction: 'Re-evaluate after waits' },
    { mistake: 'Measuring clicks only', whatHappens: 'Clicks do not prove value', whatToCheck: 'Orders and returns', correction: 'See measurement section' },
  ];

  const testData = [
    { test: 'Trigger accuracy: place a qualifying and a non-qualifying order', whatItProves: 'The right order starts the workflow', whatItDoesNotProve: 'That other triggers do not also fire' },
    { test: 'Product identification: orders with different products and multiple items', whatItProves: 'The workflow reads the right product', whatItDoesNotProve: 'Behavior for variants you did not test' },
    { test: 'Eligibility: contacts at each qualification boundary', whatItProves: 'Intended customers qualify', whatItDoesNotProve: 'That your boundary is the right one commercially' },
    { test: 'Exclusions: owned, refunded, opted-out contacts', whatItProves: 'They are excluded', whatItDoesNotProve: 'That the history is complete for real customers' },
    { test: 'Timing: check the execution log', whatItProves: 'Message went at the intended point', whatItDoesNotProve: 'That the point is right for the product' },
    { test: 'Duplicates: run overlapping workflows on one contact', whatItProves: 'Conflicts are handled', whatItDoesNotProve: 'Conflicts you did not combine' },
    { test: 'Subsequent purchase: order during the Wait', whatItProves: 'Eligibility re-check works', whatItDoesNotProve: 'Orders placed in the same second' },
    { test: 'Missing data: empty product values', whatItProves: 'The fallback path runs', whatItDoesNotProve: 'Other unexpected data shapes' },
    { test: 'Message accuracy: read the final message per branch', whatItProves: 'The offer matches the purchase', whatItDoesNotProve: 'That customers want it' },
  ];

  const measureData = [
    { stage: 'Message delivered', whatItTells: 'The message reached an inbox or phone', whatItDoesNot: 'That anyone read it' },
    { stage: 'Customer clicked', whatItTells: 'Some interest', whatItDoesNot: 'That a purchase followed' },
    { stage: 'Customer placed an order', whatItTells: 'A conversion', whatItDoesNot: 'That the message caused it' },
    { stage: 'Order added revenue', whatItTells: 'Incremental value, if you can see it', whatItDoesNot: 'That revenue exceeded cost' },
    { stage: 'Order added profit', whatItTells: 'A commercial outcome', whatItDoesNot: 'Long-term effects such as returns or loss of trust' },
  ];

  const whenNeedShopifyAppsData = [
    { need: 'Offers shown on product pages or in cart', betterApproach: 'Shopify theme features or a Shopify app' },
    { need: 'Checkout upsells on Shopify', betterApproach: 'A Shopify checkout app (check Shopify plan and channel requirements)' },
    { need: 'Post-purchase page offers on Shopify', betterApproach: 'A Shopify post-purchase app, within Shopify\'s documented limits' },
    { need: 'Compatibility rules across a large catalog', betterApproach: 'External product data source plus API or webhook integration' },
    { need: 'Predictive or behavioral recommendations', betterApproach: 'A recommendation platform or custom development' },
    { need: 'Multi-store purchase history', betterApproach: 'External data store; test how HighLevel represents one customer across stores' },
    { need: 'Real-time inventory-aware offers', betterApproach: 'Shopify-side logic or custom integration' },
    { need: 'Advanced attribution', betterApproach: 'Analytics tooling outside HighLevel' },
    { need: 'Rule-based emails and SMS after an order', betterApproach: 'HighLevel workflows, after verifying the data' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Upsell and Cross-Sell Automation for Ecommerce</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Upsell</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Cross-Sell</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Automation</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Ecommerce Upsell and Cross-Sell Automation:<br />
            <span className="text-[#F8D000]">Workflows, Strategies & Examples</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Verified against HighLevel and Shopify documentation as of October 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            A customer who has just bought a camera body is a reasonable person to tell about memory cards. The same email sent to everyone who ever bought anything is not a recommendation. It is a promotion with a product name in it. Upsell and cross-sell automation is the work of telling those two situations apart in software: which customer, which product, which moment, and what you already know that makes the offer relevant.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Short answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">GoHighLevel can send upsell and cross-sell offers as email or SMS after an order, and its funnels have documented order bumps and one-click order upsells.</strong> It does not document a recommendation engine, and it does not place offers inside Shopify's checkout or product pages. Whether a specific offer works depends on three things: where the offer appears, whether the workflow can see which product was bought, and whether you can prove the customer does not already own the product you are about to recommend. This guide works through each, and marks which parts are documented, which need careful configuration, and which need another tool.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            It is about the offer itself. For the broader order journey see our <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-[#0E9BF0] hover:underline">post-purchase automation guide</Link>, and for how the CRM fits around a store see <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM for ecommerce</Link>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Upsell Automation Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#five-use-cases"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Use Cases
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
              <div className="text-sm font-bold text-white mb-2">Need Upsell Automation Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help ecommerce businesses build upsell and cross-sell workflows in GoHighLevel.</p>
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

            {/* Section: Upselling vs Cross-Selling */}
            <h2 id="upselling-vs-cross-selling" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Upselling vs Cross-Selling in GoHighLevel: Why the Difference Changes the Workflow
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Upselling</strong> encourages a customer toward a higher-value or better-suited version of a product. A customer considering a basic coffee machine is shown a premium model with a feature that fits what they said they wanted. <strong className="text-[#1A2236]">Cross-selling</strong> recommends something complementary to a product the customer bought or is about to buy: a camera, then a compatible memory card or case. The distinction is about the product relationship and the buying context, and it matters because the two need different data.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Aspect</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Upsell</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Cross-Sell</th>
                  </tr>
                </thead>
                <tbody>
                  {upsellVsCrossSellData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.upsell}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.crossSell}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two things people often file under these headings are different. A <strong className="text-[#1A2236]">replenishment reminder</strong> for something consumed is a repeat purchase, timed by usage. A <strong className="text-[#1A2236]">winback</strong> message to a lapsed customer is retention. Both are covered in the <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-[#0E9BF0] hover:underline">retention and winback guide</Link> and are only treated here where they collide with an offer.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-ecommerce-upsell-cross-sell-automation.png"
                  alt="GoHighLevel Ecommerce Upsell and Cross-Sell Automation: Where offers appear, data flow, and workflow sequence"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Ecommerce Upsell and Cross-Sell Automation: Where offers appear, data flow, and workflow sequence</span>
              </div>
            </div>

            {/* Section: Five Use Cases */}
            <h2 id="five-use-cases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Automate Ecommerce Upsells and Cross-Sells? Five Use Cases, Five Answers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The honest answer is "some of it, and the part you want depends on what you mean." Sorting use cases by how much each demands is more useful than a yes or no.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Use Case</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How Feasible in HighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What Decides It</th>
                  </tr>
                </thead>
                <tbody>
                  {useCasesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.useCase}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItMeans}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.howFeasible}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatDecides}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Rule of thumb:</strong> if you can write the rule in one sentence ("customers who bought the standard blender get the descaling kit 30 days after delivery"), HighLevel can probably carry it once the data is verified. If the rule is "show what they are most likely to want," you need something that computes that.
            </p>

            {/* Section: Where Offer Appears */}
            <h2 id="where-offer-appears" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where Does the Offer Appear? Checkout, Funnel or Message
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An offer shown in checkout and an email sent after the order are different products solved by different systems. Deciding which you need comes before any workflow design.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Where the Offer Appears</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Provides It</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">HighLevel's Role</th>
                  </tr>
                </thead>
                <tbody>
                  {whereOfferAppearsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.whereItAppears}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatProvides}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.highLevelRole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Checkout and Product-Page Offers on Shopify:</strong> If the offer must appear while the customer is on your Shopify store, it is Shopify functionality or a Shopify app. HighLevel's help documentation for order upsells covers HighLevel V2 Funnels and does not mention Shopify, so no Shopify checkout compatibility can be claimed from it. Shopify's developer documentation describes product offers as app-built, with the plan and channel constraints in the table. Confirm current terms with Shopify or the app you choose; they have changed before.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Funnel Bumps and Upsells Inside HighLevel:</strong> When the sale itself runs through a HighLevel funnel, the Order Upsell documentation lists real constraints worth knowing before you plan around it: V2 Funnels only, Native Form elements so payment tokens pass to the next step, same domain, one upsell product per step, and always one unit. Customers see two charges that appear in the same order record. The Order Submitted trigger can separate primary, bump and upsell purchases through its Submission Type filter. For a native Store funnel, see our <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">native Store guide</Link>, which notes a Store Upsell element but is not a substitute for HighLevel's own configuration page.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Messages After the Order:</strong> Everything else in this guide is the third option: a workflow that decides, after an order, whether to send an offer. It is the one most store owners are asking about, because it works regardless of which checkout took the order, and it is where the data questions below matter most.
            </p>

            {/* Section: How Shopify and GoHighLevel Share Data */}
            <h2 id="how-shopify-gohighlevel-share-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Shopify and GoHighLevel Share Data for Upsell Automation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A workflow can only recommend what it can see. Four kinds of data get confused, and the HighLevel documentation treats them differently.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Data Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Is</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What HighLevel Documents</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTypesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.dataType}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItIs}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatGHLDocuments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The consequence: a rule like "customer has bought at least twice" uses data HighLevel keeps for you. A rule like "customer has never bought the descaling kit" needs a history you create. Details of the sync are in the <Link href="/blog/gohighlevel-shopify-integration" className="text-[#0E9BF0] hover:underline">Shopify integration guide</Link>.
            </p>

            {/* Section: Documented Route to Product Data */}
            <h2 id="documented-route-to-product-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Documented Route to Product-Level Order Data
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's help documentation shows how a workflow can read line items from orders: expressions such as pluck and join, or the custom value picker, applied to the line-item list. Separately, its Array Formatter page includes a Find example that checks whether a specific product ID is among Shopify line items from a Shopify Order Placed trigger. Taken together, a workflow can plausibly branch on "this order contained product X." Three cautions apply. Find returns only the first matching item. Array functions handle flat, one-dimensional arrays. And the two documentation pages describe different triggers, so confirm in your own account that the line-item data you need is available from the trigger your store actually uses.
            </p>

            {/* Section: What Remains Undocumented */}
            <h2 id="what-remains-undocumented" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Remains Undocumented
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>A product-purchase history field on the contact.</li>
              <li>A native "customer has not bought product X" Smart List filter. A product-level filter request was still open on HighLevel's roadmap when last checked in early October.</li>
              <li>Compatibility or recommendation relationships between products.</li>
              <li>The Order Placed trigger's product-type filtering: its description mentions product type, its configuration table lists only Cart Value and an operator.</li>
            </ul>

            {/* Section: Which Strategies Worth Automating */}
            <h2 id="which-strategies-worth-automating" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which GoHighLevel Upsell and Cross-Sell Strategies Are Worth Automating
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each strategy below earns a place only if it needs different logic from the others. The reasoning sequence for all of them is the same: business objective, eligible customer, qualifying event, data required, offer selection, timing, exclusions, execution, measurement.
            </p>

            <div className="space-y-4 mb-6">
              {strategiesData.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <p className="text-sm font-bold text-[#1A2236] mb-1">{item.strategy}</p>
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Objective:</strong> {item.objective}</p>
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Data:</strong> {item.data}</p>
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Exclude:</strong> {item.exclude}</p>
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Feasibility:</strong> {item.feasibility}</p>
                </div>
              ))}
            </div>

            {/* Section: How to Build Workflow */}
            <h2 id="how-to-build-workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Build an Upsell or Cross-Sell Workflow in GoHighLevel
            </h2>
            <p className="text-sm md:text-base font-semibold text-[#0E9BF0] mb-4">
              Qualifying order → Identify product → Check eligibility → Select offer → Check exclusions → Send → Measure
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is a design sequence, not a single HighLevel feature. Each step relies on separate triggers, conditions or fields.
            </p>

            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Define the Objective and the Qualifying Order.</strong> Start by deciding what a qualifying order is. Not every order deserves an offer: a discounted clearance purchase, a gift, a wholesale order and a refunded order all behave differently. Write the qualifying condition in one sentence before opening the workflow builder.</li>
              <li><strong className="text-[#1A2236]">Verify the Data Before Designing.</strong> Place a test order and look at what the trigger actually gives the workflow. Confirm the line-item data, the product identifier you will match on, and whether it is a product ID or a variant ID. Design around what you saw, not what a tutorial shows.</li>
              <li><strong className="text-[#1A2236]">Define Eligibility and the Offer.</strong> Decide who is eligible (for example Order Count, recency, no existing tag for the target product), and which offer a product maps to. Keep the map small and written down. If the map needs to be dynamic, you are in use case D and the better tool may be outside HighLevel.</li>
              <li><strong className="text-[#1A2236]">Build the Workflow and the Exclusions Together.</strong> Use conditions to branch by product and to exclude. If/Else conditions can use dynamic values, and the Array Formatter Find action can test whether a product appears in an order. Add a Wait sized to your product's delivery and use time. Re-check eligibility after the Wait, because the customer may have bought again in the meantime.</li>
              <li><strong className="text-[#1A2236]">Add Exit Logic, Then Test.</strong> Decide when the contact leaves: on a new order, on purchase of the recommended product, or on a reply. Set re-entry deliberately; see <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">workflow re-entry</Link>. Then test using the framework below.</li>
            </ol>

            {/* Section: Example 1 */}
            <h2 id="example-1-product-specific" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Example 1: Product-Specific Cross-Sell Workflow in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <em>Illustrative example. The business is hypothetical.</em> A camera store sells camera bodies. It wants to offer a compatible memory card to people who bought a particular body. The structure below shows what must be true for this to work, not a promise that it can be built exactly this way in every account.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Element</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Design</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Business objective</td>
                    <td className="py-3 px-3 text-[#5C6880]">A relevant add-on for first-time body buyers, without offering cards to people who already bought one</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Trigger</td>
                    <td className="py-3 px-3 text-[#5C6880]">Order event for the store's platform. For Shopify, the Shopify Order Placed trigger; confirm which one fires in your account</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Required data</td>
                    <td className="py-3 px-3 text-[#5C6880]">Product ID of the body in the order (from line items); history of whether this contact bought a card; Order Count; consent for the channel</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Qualification</td>
                    <td className="py-3 px-3 text-[#5C6880]">Order contains a qualifying body AND contact has no "bought-memory-card" tag AND channel permitted</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Workflow logic</td>
                    <td className="py-3 px-3 text-[#5C6880]">Trigger, Array Formatter Find for the body product ID, If/Else on result and tag, Wait until after expected delivery, re-check tag, send, add "cross-sell-card-sent" tag</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Timing</td>
                    <td className="py-3 px-3 text-[#5C6880]">After fulfillment plus a short use window, not at checkout. The Order Fulfilled trigger is an option; confirm it covers your store connection</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Exclusions</td>
                    <td className="py-3 px-3 text-[#5C6880]">Already owns a card (tag); bought again during the wait; refunded; opted out; in another active offer workflow</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Testing plan</td>
                    <td className="py-3 px-3 text-[#5C6880]">Orders with body only, body plus card, two bodies, refunded body, repeat order during the Wait, and a contact on DND</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Failure scenarios</td>
                    <td className="py-3 px-3 text-[#5C6880]">Line items not exposed by the trigger; variant ID differs from product ID; Find matches only the first item in a multi-item order; tag not applied before the check</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Measurement</td>
                    <td className="py-3 px-3 text-[#5C6880]">Orders of the recommended card from recipients vs a held-out comparison group over the same period; refund and unsubscribe rates</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What Must Be Verified Before Claiming This Works</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The trigger exposes line items for your store in a form Array Formatter can read.</li>
              <li>Product ID and variant ID behave the way your matching rule assumes.</li>
              <li>A card purchase made through another path (retail, marketplace) will not appear in the tag history. Decide whether that matters.</li>
              <li>Array Formatter billing, since the documentation page is inconsistent about whether it is a Premium action.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What Is Native, Configured or Custom</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Native HighLevel:</strong> Trigger, Wait, message actions</li>
              <li><strong className="text-[#1A2236]">Native data from the Shopify integration:</strong> Order Count, Last Order Date</li>
              <li><strong className="text-[#1A2236]">Configured (Array Formatter, If/Else), subject to the tests above:</strong> Matching the product in the order</li>
              <li><strong className="text-[#1A2236]">Configured by you (tags); incomplete if purchases occur elsewhere:</strong> "Already owns a card" history</li>
              <li><strong className="text-[#1A2236]">Your own mapping; custom if the catalog is large:</strong> Choosing the card by compatibility with the body</li>
            </ul>

            {/* Section: Example 2 */}
            <h2 id="example-2-repeat-customer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Example 2: Repeat-Customer Upsell Workflow in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <em>Illustrative example. The business is hypothetical.</em> A fitness accessory store sells a standard resistance band set. A customer who has bought the standard set twice may be a good candidate for a heavier-resistance set, but only if the data supports the inference.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Element</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Design</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Business objective</td>
                    <td className="py-3 px-3 text-[#5C6880]">Offer a suitable upgrade to repeat buyers of the standard set, not to all buyers</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Trigger</td>
                    <td className="py-3 px-3 text-[#5C6880]">A qualifying order event (for example, the second order) or a scheduled check against a Smart List of repeat buyers</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Required data</td>
                    <td className="py-3 px-3 text-[#5C6880]">Order Count (native); which sets they bought (tags you apply per order); whether the premium set was already bought</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Qualification</td>
                    <td className="py-3 px-3 text-[#5C6880]">Order Count of at least 2 AND bought standard set at least twice (history tags) AND no premium-set tag</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Workflow logic</td>
                    <td className="py-3 px-3 text-[#5C6880]">If/Else on Order Count and tags, Wait, re-check, send the upgrade message with no discount by default, add "upgrade-offer-sent" tag, exit on any new order or premium purchase</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Timing</td>
                    <td className="py-3 px-3 text-[#5C6880]">A fixed number of days after the second order, chosen from your own repurchase data</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Exclusions</td>
                    <td className="py-3 px-3 text-[#5C6880]">Refunded second order, already holds premium tag, recently received any promotion, opted out</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Testing plan</td>
                    <td className="py-3 px-3 text-[#5C6880]">Contacts with one, two and three standard orders; one with a refunded second order; one who buys the premium set during the Wait</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Failure scenarios</td>
                    <td className="py-3 px-3 text-[#5C6880]">Order Count counts a cancelled order; tags missing for orders before the workflow existed; duplicate contact under a second email</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Measurement</td>
                    <td className="py-3 px-3 text-[#5C6880]">Premium-set orders and refunds from recipients vs comparison group; unsubscribe rate; margin of the premium set, not only revenue</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Native versus extra work.</strong> Everything except the product history is available natively: Order Count, Last Order Date and Lifetime Value are kept current by the Shopify integration. The history of which sets were bought is not documented as a contact field. Orders placed before the workflow existed will not have tags unless someone backfills them, which is custom work.
            </p>

            {/* Section: How to Time Offers */}
            <h2 id="how-to-time-offers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Time Upsell and Cross-Sell Offers in GoHighLevel
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Moment</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Appropriate For</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Tool</th>
                  </tr>
                </thead>
                <tbody>
                  {timingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.moment}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.appropriateFor}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.tool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A CRM workflow is not an on-site checkout upsell. Sending an email after the order is a different experience, with different strengths: it can be well timed and personal, but the customer has already left the store. Timing details for the post-order journey are in the <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-[#0E9BF0] hover:underline">post-purchase automation guide</Link>. Abandoned checkout recovery, which is about someone who did not finish buying, is a separate topic: <Link href="/blog/gohighlevel-abandoned-checkout" className="text-[#0E9BF0] hover:underline">abandoned checkout automation</Link>.
            </p>

            {/* Section: How to Prevent Irrelevant */}
            <h2 id="how-to-prevent-irrelevant" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Prevent Irrelevant, Duplicate and Conflicting Offers in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Good offer logic is mostly a list of who should not get the offer. Not every exclusion is equally easy.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Exclusion</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How It Can Be Done</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Feasibility</th>
                  </tr>
                </thead>
                <tbody>
                  {exclusionData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.exclusion}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.howItCanBeDone}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.feasibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Conflicts.</strong> A customer can qualify at once for a post-purchase message, a review request, a replenishment reminder, a cross-sell and a winback. HighLevel documentation does not describe a single setting that ranks competing workflows, so coordination is yours to design. The workable approach is to keep one lifecycle state per contact, represented by a tag or field, and have each workflow check it first and exit when it changes. Review timing is covered in the <Link href="/blog/gohighlevel-ecommerce-review-automation" className="text-[#0E9BF0] hover:underline">review automation guide</Link>. Allow Multiple matters on the Order Submitted trigger: HighLevel's documentation says an upsell made while the primary-purchase workflow is active will not start a new instance unless Allow Multiple is enabled.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Fragile inputs.</strong> Outdated tags, missing product history and duplicate contacts under different emails all weaken eligibility rules quietly. A contact with two emails has two partial histories, and each may qualify for an offer the other already bought.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A segmentation guide for eligibility groups will follow in this cluster; link to it here once it is published.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common GoHighLevel Upsell and Cross-Sell Automation Mistakes
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Mistake</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happens and Why</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Correction</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.mistake}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatHappens}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatToCheck}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.correction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How to Test */}
            <h2 id="how-to-test" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test Upsell and Cross-Sell Workflows Before Activation
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Test</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What It Proves</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">What It Does Not Prove</th>
                  </tr>
                </thead>
                <tbody>
                  {testData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.test}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatItProves}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.whatItDoesNotProve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One successful test on one contact does not validate the build. Use <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">enrollment history and execution logs</Link> to confirm what happened and why, and pilot with a small group before turning the workflow on for everyone.
            </p>

            {/* Section: How to Measure */}
            <h2 id="how-to-measure" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Measure Whether GoHighLevel Upsell Offers Work
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What It Tells You</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">What It Does Not</th>
                  </tr>
                </thead>
                <tbody>
                  {measureData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatItTells}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.whatItDoesNot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Useful measures include offer conversion, revenue per recipient, additional items per order, repeat-purchase rate, refund and return patterns, margin where available, unsubscribe and complaint rates, and the share of offers sent to customers who were actually eligible. Do not credit every purchase after a message to that message: some customers would have bought anyway. A holdout group, a small set of eligible customers who do not receive the offer, is the cleanest way to see the difference. No benchmark conversion rate is given here, because none can be stated honestly without your data.
            </p>

            {/* Section: When Need Shopify Apps */}
            <h2 id="when-need-shopify-apps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Do You Need Shopify Apps or Custom Integration Work?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Need</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Better Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {whenNeedShopifyAppsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.need}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.betterApproach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The goal is the right architecture, not forcing every problem into one system. Often the answer is a combination: a Shopify app for what appears in the store, and HighLevel for what gets said afterward.
            </p>

            {/* Section: How GHL Scale Up Can Help */}
            <h2 id="how-ghl-scale-up-can-help" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GHL Scale Up Can Help With Ecommerce Automation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Straightforward rule-based offers are often manageable in-house once the data is verified. Help is worth considering when the offer depends on product data that is not reaching your workflows, when purchases arrive from more than one system, or when a Shopify store and HighLevel need to share purchase history that neither stores in the form you need. GHL Scale Up's <Link href="/services/integrations" className="text-[#0E9BF0] hover:underline">integration work</Link> covers webhooks and API connections between GoHighLevel and other tools. If you want a second opinion on your data or eligibility rules before building, that is a reasonable first conversation.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <em>Note for editors: the live /services/integrations page contains unsourced statistics and does not list Shopify in its service list, only in its FAQ. Fix or confirm those before publishing this link prominently.</em>
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

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still unsure how to build upsell and cross-sell automation for your ecommerce business?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Post Purchase Automation →</Link>
                <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM for Ecommerce →</Link>
                <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Customer Retention & Winback Guide →</Link>
                <Link href="/blog/gohighlevel-ecommerce-store" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store Guide →</Link>
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
                <Link href="/blog/gohighlevel-abandoned-checkout" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Abandoned Checkout Automation →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
                <Link href="/blog/gohighlevel-ecommerce-review-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Review Automation →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/services/integrations" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Integrations and API Development →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Building Upsell and Cross-Sell Automation?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help ecommerce businesses build upsell and cross-sell workflows in GoHighLevel that actually work.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building upsell and cross-sell automation for ecommerce businesses. All product details verified against HighLevel and Shopify documentation as of October 2026.
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