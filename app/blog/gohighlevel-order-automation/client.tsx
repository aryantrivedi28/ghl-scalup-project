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
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelOrderAutomationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'quick-answer',
        'what-is-order-automation',
        'can-automate-orders',
        'how-it-works',
        'where-order-data-lives',
        'eight-order-workflows',
        'workflow-1-internal-notification',
        'workflow-2-customer-message',
        'workflow-3-contact-record-update',
        'workflow-4-routing-exception',
        'workflow-5-payment-exception',
        'workflow-6-fulfillment-followup',
        'workflow-7-repeat-purchase',
        'workflow-8-exception-escalation',
        'how-to-set-up',
        'three-examples',
        'what-gohighlevel-cannot-do',
        'common-mistakes',
        'troubleshooting',
        'how-to-tell-working',
        'is-right-for-you',
        'final-verdict',
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
      q: "Can GoHighLevel automate ecommerce orders?",
      a: "It can automate the work around an order, such as notifications, tasks, record updates and messages, when an order event reaches it. It does not manage inventory or shipping."
    },
    {
      q: "Can GoHighLevel send an order confirmation automatically?",
      a: "Yes. HighLevel sends automatic sales receipts and Store order confirmations, and you can build a custom one with the Order Submitted trigger and Send Email. Check that these do not overlap."
    },
    {
      q: "Can I automate Shopify orders with GoHighLevel?",
      a: "Partly. HighLevel's Shopify integration syncs orders and contacts and exposes Shopify order triggers and Order Fulfilled. Which fields arrive depends on sync settings."
    },
    {
      q: "Can it update customer information after an order?",
      a: "Yes. Shopify's sync updates fields such as lifetime value and order count, and workflows can add tags or update fields. Contact fields hold one value, so they are not order history."
    },
    {
      q: "Can it send order-status notifications?",
      a: "For fulfillment, yes, through Order Fulfilled. It does not fire on Delivered."
    },
    {
      q: "Does GoHighLevel manage inventory and shipping?",
      a: "No workflow inventory or shipping-label capability is documented. It connects to Shippo and ShipStation for fulfillment events."
    },
    {
      q: "Can a workflow trigger when a payment succeeds?",
      a: "Yes, with Payment Received and Payment Status set to Success."
    },
    {
      q: "How do I stop duplicate order notifications?",
      a: "Review automatic receipts and Store emails, set re-entry options deliberately, narrow filters, and check for multiple workflows on one trigger."
    },
    {
      q: "Do I need Zapier or another tool?",
      a: "Not for orders placed in HighLevel or connected Shopify. For platforms without a documented trigger, a webhook or connector is needed."
    },
    {
      q: "How do I test an order workflow?",
      a: "Use test modes, test one case per branch, and check Workflow History. Do not send test messages to real customers."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'what-is-order-automation', title: 'What Is Order Automation?' },
    { id: 'can-automate-orders', title: 'Can You Automate Orders With GoHighLevel?' },
    { id: 'how-it-works', title: 'How GoHighLevel Order Automation Works' },
    { id: 'where-order-data-lives', title: 'Where Order Data Lives' },
    { id: 'eight-order-workflows', title: 'Eight Order Workflows You Can Build' },
    { id: 'workflow-1-internal-notification', title: '1. New-Order Internal Notification' },
    { id: 'workflow-2-customer-message', title: '2. Order-Related Customer Message' },
    { id: 'workflow-3-contact-record-update', title: '3. Contact Record Update After an Order' },
    { id: 'workflow-4-routing-exception', title: '4. Routing an Order or Exception' },
    { id: 'workflow-5-payment-exception', title: '5. Payment-Related Exception Alerts' },
    { id: 'workflow-6-fulfillment-followup', title: '6. Fulfillment-Related Follow-Up' },
    { id: 'workflow-7-repeat-purchase', title: '7. Repeat-Purchase or Segment Update' },
    { id: 'workflow-8-exception-escalation', title: '8. Exception Handling and Escalation' },
    { id: 'how-to-set-up', title: 'How to Set Up an Order Workflow' },
    { id: 'three-examples', title: 'Three Examples That Combine the Pieces' },
    { id: 'what-gohighlevel-cannot-do', title: 'What GoHighLevel Cannot Do on Its Own' },
    { id: 'common-mistakes', title: 'Common Mistakes' },
    { id: 'troubleshooting', title: 'Troubleshooting an Order Workflow' },
    { id: 'how-to-tell-working', title: 'How to Tell Whether It Is Working' },
    { id: 'is-right-for-you', title: 'Is GoHighLevel Order Automation Right for You?' },
    { id: 'final-verdict', title: 'Final Verdict' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const whereOrderIsPlacedData = [
    { whereOrderPlaced: 'HighLevel order form, funnel, payment link or membership', whatReaches: 'Order Submitted and Payment Received triggers with product, price, source filters', whatYouMustAdd: 'Nothing external. Native' },
    { whereOrderPlaced: 'HighLevel Ecommerce Store', whatReaches: 'Order Submitted (Order Source: Store), Payment Received (source Website), Order Fulfilled (Store)', whatYouMustAdd: 'Confirm behavior with a test order. Store-dependent' },
    { whereOrderPlaced: 'Shopify, connected through HighLevel\'s Shopify integration', whatReaches: 'Order sync into contacts and orders; Shopify order trigger; Order Fulfilled (External, Shopify)', whatYouMustAdd: 'Connect and configure sync. Shopify-dependent. See the Shopify integration guide' },
    { whereOrderPlaced: 'WooCommerce or another platform', whatReaches: 'Not covered by Order Fulfilled (\'Not yet\' for WooCommerce)', whatYouMustAdd: 'A webhook, API or third-party connector. Custom or third-party' },
  ];

  const whereDataLivesData = [
    { where: 'Contact field', whatItHolds: 'One value per field per contact, such as last order total', theCatch: 'A new order overwrites the previous value. Order history is lost if you rely on it alone' },
    { where: 'Order record', whatItHolds: 'The individual order, with products and amounts, in the store or in Shopify', theCatch: 'Is the authoritative copy. Workflows read from it but, as documented, do not edit it' },
    { where: 'Event payload', whatItHolds: 'The data carried by the trigger or webhook at the moment of the event', theCatch: 'Exists only for that run. Fields you did not map are gone' },
    { where: 'External platform', whatItHolds: 'Shopify, your payment processor, a shipping tool', theCatch: 'Holds true status for inventory, shipping and payment. HighLevel\'s copy can lag' },
  ];

  const workflow1Data = [
    { item: 'Business problem', detail: 'Nobody knows an order arrived until someone checks' },
    { item: 'Dependency', detail: 'Native for HighLevel orders; Store or Shopify for those sources' },
    { item: 'Trigger', detail: 'Order Submitted (filter by source or product); Shopify order trigger; or Payment Received with Payment Status = Success' },
    { item: 'Required data', detail: 'Customer name and contact, product, order amount, order identifier' },
    { item: 'Logic', detail: 'Optional If/Else by order value or product to choose the recipient' },
    { item: 'Actions', detail: 'Send Internal Notification; Add Task assigned to one user with a due date' },
    { item: 'Benefit', detail: 'The right person learns of the order immediately and the next step has an owner' },
    { item: 'Limits', detail: 'Add Task assigns to one user. We did not find documentation on merge fields in task text, so test what the task shows. Keep sensitive data (full address, payment details) out of notifications; link to the order instead' },
    { item: 'Test', detail: 'Submit an order in test mode and confirm one notification, one task and the right recipient' },
  ];

  const workflow2Data = [
    { item: 'Business problem', detail: 'Customers get no confirmation, or get two or three' },
    { item: 'Dependency', detail: 'Native; Store or Shopify for those sources' },
    { item: 'Trigger', detail: 'Order Submitted (not Order Form Submission, which does not require payment)' },
    { item: 'Required data', detail: 'Order custom values and, for line items, the Shopping Cart element in the email template' },
    { item: 'Logic', detail: 'Filters for product or source, so each product gets the right message' },
    { item: 'Actions', detail: 'Send Email. Send SMS only where you hold consent' },
    { item: 'Benefit', detail: 'A message built from real order data instead of retyped details' },
    { item: 'Limits', detail: 'HighLevel sends automatic sales receipts and Store order confirmations too. Decide which message owns which purpose and switch off the overlap. For downloadable Store products, HighLevel advises not to rely on a generic workflow confirmation as the only delivery method. For longer follow-up, see post purchase automation' },
    { item: 'Test', detail: 'List every active notification for one purchase (receipt, store email, workflow email) and confirm exactly the intended set arrives' },
  ];

  const workflow3Data = [
    { item: 'Business problem', detail: 'Customer records do not show who has bought what' },
    { item: 'Dependency', detail: 'Shopify sync (lifetime value, order count, dates) or native actions' },
    { item: 'Trigger', detail: 'Order Submitted, or Shopify order sync' },
    { item: 'Required data', detail: 'Product, amount, order identifier' },
    { item: 'Logic', detail: 'If/Else on product or value; avoid writing a field that a later order would erase' },
    { item: 'Actions', detail: 'Add Contact Tag (such as a product tag); Update Contact Field for the latest order date; write each order to a log if you need history' },
    { item: 'Benefit', detail: 'Teams see purchase context on the contact' },
    { item: 'Limits', detail: 'Contact fields hold one value. Shopify\'s sync fields cannot be opted in or out individually, and refunds do not reduce order count' },
    { item: 'Test', detail: 'Place two test orders for one contact and confirm the second does not erase information you need' },
  ];

  const workflow4Data = [
    { item: 'Business problem', detail: 'High-value, custom or restricted orders sit in a general queue' },
    { item: 'Dependency', detail: 'Native' },
    { item: 'Trigger', detail: 'Order Submitted with filters (Global Product, Product Price, Order Source); Order Placed with Cart Value' },
    { item: 'Required data', detail: 'Product, price or cart value, source' },
    { item: 'Logic', detail: 'If/Else branches by category, value or source' },
    { item: 'Actions', detail: 'Assign to User; Add Task; Create/Update Opportunity; Send Internal Notification' },
    { item: 'Benefit', detail: 'Orders that need judgment reach someone who can apply it' },
    { item: 'Limits', detail: 'Routing can only use fields the event carries. If the rule needs data held elsewhere (customer history in another system, stock level), that needs an integration' },
    { item: 'Test', detail: 'One test order per branch, plus one that matches no branch to see what happens' },
  ];

  const workflow5Data = [
    { item: 'Business problem', detail: 'Failed payments, refunds or disputes go unnoticed' },
    { item: 'Dependency', detail: 'Native, gateway dependent' },
    { item: 'Trigger', detail: 'Payment Received with Payment Status = Failed; Refund; Subscription' },
    { item: 'Required data', detail: 'Payment status, amount, transaction ID, gateway' },
    { item: 'Logic', detail: 'Refund branches for success or failure and full or partial' },
    { item: 'Actions', detail: 'Send Internal Notification; Add Task; tag the contact' },
    { item: 'Benefit', detail: 'A person reviews money problems quickly' },
    { item: 'Limits', detail: 'Refund and subscription triggers work with Stripe, Authorize.net and NMI; for PayPal the trigger works only when a subscription is created. An order record existing does not mean it is paid. Gate shipping-related messages on Payment Status = Success' },
    { item: 'Test', detail: 'Use the gateway\'s test mode and failed-payment test cards where available. Confirm with HighLevel documentation for your gateway' },
  ];

  const workflow6Data = [
    { item: 'Business problem', detail: 'Customers ask where their order is; the team forgets to send tracking' },
    { item: 'Dependency', detail: 'Store or Shopify; Shippo and ShipStation fulfillments also fire the trigger' },
    { item: 'Trigger', detail: 'Order Fulfilled (Order Source Store, or External with sub-source Shopify)' },
    { item: 'Required data', detail: 'Fulfilled products, carrier and tracking number where available' },
    { item: 'Logic', detail: 'A tracking-number filter and Allow Multiple to handle split shipments without duplicates' },
    { item: 'Actions', detail: 'Send Email with tracking; tag the order as shipped; create a task if no tracking number is present' },
    { item: 'Benefit', detail: 'Customers hear when it ships, and missing tracking is caught' },
    { item: 'Limits', detail: 'Fires only on Fulfilled, not Delivered. HighLevel does not track shipments. WooCommerce is not supported by this trigger. The legacy \'Shopify Order Fulfilled\' trigger is deprecating; use the unified one' },
    { item: 'Test', detail: 'Fulfill a test order, then fulfill part of a multi-item order and confirm no duplicate message' },
  ];

  const workflow7Data = [
    { item: 'Business problem', detail: 'You cannot tell new buyers from returning ones' },
    { item: 'Dependency', detail: 'Shopify sync or native tagging' },
    { item: 'Trigger', detail: 'Order Submitted or Shopify order sync' },
    { item: 'Required data', detail: 'Product, order count where synced' },
    { item: 'Logic', detail: 'If/Else on a prior-purchase tag' },
    { item: 'Actions', detail: 'Add or Remove Contact Tag' },
    { item: 'Benefit', detail: 'A clean segment for later workflows' },
    { item: 'Limits', detail: 'Kept brief on purpose. Retention logic belongs in the customer retention guide' },
    { item: 'Test', detail: 'A first order and a repeat order for the same contact' },
  ];

  const workflow8Data = [
    { item: 'Business problem', detail: 'Missing data or a failed connection leaves an order half-processed' },
    { item: 'Dependency', detail: 'Native for If/Else on missing fields; Webhook/API/custom for external signals' },
    { item: 'Trigger', detail: 'The same order trigger, with a branch for incomplete data; or Inbound Webhook for events from another system' },
    { item: 'Required data', detail: 'The fields the workflow depends on' },
    { item: 'Logic', detail: 'If a required field is empty, stop the normal path' },
    { item: 'Actions', detail: 'Add Task and Send Internal Notification to a named person; add a tag marking the order as needing review' },
    { item: 'Benefit', detail: 'A person catches the order instead of the customer' },
    { item: 'Limits', detail: 'A workflow cannot detect every problem, only those you wrote a check for. Inbound Webhook details on contact matching and authentication are not documented on its page, and it may be a premium action' },
    { item: 'Test', detail: 'Send an order with a missing email or product and confirm the exception path runs' },
  ];

  const whatCannotDoData = [
    { area: 'Inventory', whatToKnow: 'Not documented as a workflow capability. The store or Shopify manages stock; the Order Fulfilled filter includes available quantity but its behavior is not documented in detail' },
    { area: 'Warehouse, labels, tracking', whatToKnow: 'HighLevel integrates with Shippo and ShipStation for fulfillment events and shipping setup, but does not itself track delivery' },
    { area: 'Authoritative payment status', whatToKnow: 'The payment processor holds it. Gate on Payment Status = Success, and reconcile against the processor' },
    { area: 'Refunds and cancellations', whatToKnow: 'A Refund trigger exists for supported gateways. A Shopify refund or cancelled order does not reduce HighLevel\'s Shopify order count' },
    { area: 'Order changes', whatToKnow: 'No workflow action to edit an order was found in the documented action list' },
    { area: 'Product and variant data', whatToKnow: 'Shopify products sync, but taxes are not mapped in products' },
    { area: 'Delays and duplicates', whatToKnow: 'Sync timing is not guaranteed in the pages read, and Shopify says webhooks can repeat' },
    { area: 'Transactional messaging rules', whatToKnow: 'Not covered in the HighLevel pages reviewed; check local requirements' },
  ];

  const mistakesData = [
    { mistake: 'Building before choosing the source of truth', consequence: 'Two systems disagree', prevention: 'Decide which system owns payment, stock and shipping' },
    { mistake: 'Treating order creation as payment', consequence: 'Fulfillment message sent for an unpaid order', prevention: 'Gate on Payment Status = Success' },
    { mistake: 'Using Order Form Submission for purchases', consequence: 'Fires with no payment', prevention: 'Use Order Submitted' },
    { mistake: 'Stacking confirmations', consequence: 'Customer gets several', prevention: 'Audit receipt, Store email and workflow email' },
    { mistake: 'Overwriting contact fields', consequence: 'Order history lost', prevention: 'Log each order elsewhere' },
    { mistake: 'Ignoring re-entry', consequence: 'Second order skipped or repeated', prevention: 'Set Allow Re-entry and Allow Multiple deliberately' },
    { mistake: 'Assuming all Shopify fields arrive', consequence: 'Empty merge values', prevention: 'Check sync settings and test' },
    { mistake: 'No exception owner', consequence: 'Problems sit unseen', prevention: 'Route every exception to a named person' },
    { mistake: 'Skipping edge-case tests', consequence: 'Failures found by customers', prevention: 'Test failures, duplicates, splits, refunds' },
    { mistake: 'Marketing text in a service message', consequence: 'Consent problems', prevention: 'Separate service from promotional messages' },
  ];

  const troubleshootingData = [
    { symptom: 'New order does not trigger', likelyCause: 'Workflow unpublished, wrong trigger for the source, filters too narrow', whatToCheck: 'Workflow status; trigger against source; filters', fix: 'Publish, correct the trigger, widen filters, re-test' },
    { symptom: 'Starts but a branch does not run', likelyCause: 'Field empty or different from expected', whatToCheck: 'Execution log values; condition logic', fix: 'Fix mapping or condition; test that branch' },
    { symptom: 'Customer details missing', likelyCause: 'Source did not send the field', whatToCheck: 'Payload or sync settings', fix: 'Map the field or add a webhook; re-test' },
    { symptom: 'Wrong amount or status', likelyCause: 'Wrong trigger or stale sync', whatToCheck: 'Trigger type; compare to payment processor', fix: 'Use the correct trigger and gate on Success' },
    { symptom: 'Email or SMS not sent', likelyCause: 'Consent, Time Window, unsubscribed contact, action error', whatToCheck: 'Workflow History; Time Window; contact status', fix: 'Resolve cause; re-test with an approved address' },
    { symptom: 'Duplicate messages', likelyCause: 'Re-entry, overlapping workflows, automatic receipts', whatToCheck: 'Enrollment history; all active notifications', fix: 'Narrow filters, disable overlaps, re-test' },
    { symptom: 'Integration does not pass data', likelyCause: 'Sync off, partial sync, naming mismatch', whatToCheck: 'Shopify sync settings; trigger label', fix: 'Enable sync; reconnect; re-test' },
    { symptom: 'Workflow succeeds but store record unchanged', likelyCause: 'HighLevel does not write back to the store', whatToCheck: 'Whether the action can update that system', fix: 'Use the store\'s own tools or build an integration' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Order Automation: Workflows & Setup Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Order Automation</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Workflows</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Order Automation:<br />
            <span className="text-[#F8D000]">Workflows, Setup & Limits</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Facts checked against HighLevel and Shopify documentation, 12 to 18 October 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            An order comes in. The money is taken, and then the real work begins: someone has to know about it, the customer record has to reflect it, a message has to go out, and anything unusual has to reach a person before it becomes a complaint. In many small stores that work is a mix of memory, inbox checking and a shared spreadsheet. It breaks when volume rises or the person who knows the process is away.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            HighLevel can take over part of that work. It can start a workflow when an order event arrives, tell the right person, update a record, send a message and flag exceptions. What it can do depends on where the order was placed, which event reaches HighLevel, and what data comes with it. This guide explains those dependencies first, then the workflows that are worth building, how to set them up and test them, and where you need another system.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Yes, GoHighLevel can automate order-related work,</strong> mainly notifications, tasks, record updates, routing and customer messages, using triggers such as Order Submitted, Order Fulfilled, Payment Received and Refund, and Shopify order events through its Shopify connection. It does not manage inventory, create shipping labels, track shipments or act as the authoritative record of a payment. Treat it as the coordination layer on top of your store and payment processor, not a replacement for them.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            <em>A note on perspective: GHL Scale Up implements GoHighLevel, so this is the platform we know best. We have kept to what HighLevel's own documentation states and marked every place where it is silent.</em>
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Order Automation Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#eight-order-workflows"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Eight Workflows
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
                5+ years GHL experience · 200+ systems built globally. All product details verified against HighLevel and Shopify documentation as of October 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Order Automation Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses build order workflows in GoHighLevel.</p>
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

            {/* Section: What Is Order Automation */}
            <h2 id="what-is-order-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is Order Automation?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Order automation is a chain of cause and effect. Keeping the links separate makes problems easier to find:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Order event:</strong> something that happens in a store or payment system, such as an order placed, a payment captured, an order marked fulfilled or a refund issued.</li>
              <li><strong className="text-[#1A2236]">Trigger:</strong> the workflow's entry point that listens for that event inside HighLevel.</li>
              <li><strong className="text-[#1A2236]">Data:</strong> the customer and order details that arrive with the event, such as name, email, products, totals and payment status.</li>
              <li><strong className="text-[#1A2236]">Conditions:</strong> checks on that data that decide which path to take, such as order value, product or payment status.</li>
              <li><strong className="text-[#1A2236]">Actions:</strong> what the workflow then does: notify, assign a task, update a record, send a message.</li>
              <li><strong className="text-[#1A2236]">Human review:</strong> the point where the workflow stops and a person decides, because the data is missing, unusual or risky.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A simple example:</strong> a successful payment arrives for a product. The Payment Received trigger starts a workflow, a filter confirms the payment status is Success, an internal notification tells the fulfillment person, and a task is created with a due date. If the payment had failed, a different branch would alert a person instead. Each part is documented by HighLevel; what you must supply is the decision about who does what.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-order-automation.png"
                  alt="GoHighLevel Order Automation: Order event to workflow action flow and where order data lives"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Order Automation: Order event to workflow action flow and where order data lives</span>
              </div>
            </div>

            {/* Section: Can Automate Orders */}
            <h2 id="can-automate-orders" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Automate Orders With GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, for the coordination work that follows an order event. The details depend on the source of the order:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Where the order is placed</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What reaches HighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What you must add</th>
                  </tr>
                </thead>
                <tbody>
                  {whereOrderIsPlacedData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.whereOrderPlaced}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatReaches}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatYouMustAdd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a deeper look at what the store itself offers, see <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">the GoHighLevel Ecommerce Store guide</Link>. For customer records, see <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM for ecommerce</Link>.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The boundary:</strong> HighLevel documents triggers, actions and syncs. It does not document inventory control, shipping label creation, shipment tracking or order editing as workflow capabilities. If you need any of those, your store platform or a dedicated tool does that work, and HighLevel reacts to the result.
            </p>

            {/* Section: How It Works */}
            <h2 id="how-it-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Order Automation Works
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">A supported order event occurs.</strong> Someone checks out, a payment is captured, or a person marks an order fulfilled. <em>Failure point:</em> the event is not one HighLevel listens for.</li>
              <li><strong className="text-[#1A2236]">The event and data reach HighLevel.</strong> For orders placed in HighLevel this is internal. For Shopify it depends on the integration and its sync settings. For other platforms it needs a webhook or connector. <em>Failure point:</em> the connection is off, delayed or passes incomplete fields.</li>
              <li><strong className="text-[#1A2236]">The workflow checks its conditions.</strong> Trigger filters and If/Else branches read the data. <em>Failure point:</em> a field is empty or formatted differently than you expected.</li>
              <li><strong className="text-[#1A2236]">The action runs.</strong> A notification, task, tag, field update or message. <em>Failure point:</em> duplicates, because the workflow re-entered or another notification also fires.</li>
              <li><strong className="text-[#1A2236]">You validate and monitor.</strong> Execution logs and enrollment history show what ran. See <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">the guide to enrollment history and execution logs</Link>.</li>
              <li><strong className="text-[#1A2236]">Exceptions go to a person.</strong> Anything the workflow cannot safely decide becomes a task or alert.</li>
            </ol>

            {/* Section: Where Order Data Lives */}
            <h2 id="where-order-data-lives" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where Order Data Lives: Contact, Order, Payload or Store
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the point most order automations get wrong. The same order can exist in four places, and they behave differently:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Where</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it holds</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">The catch</th>
                  </tr>
                </thead>
                <tbody>
                  {whereDataLivesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.where}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItHolds}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.theCatch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Shopify's connection is a useful illustration. HighLevel documents that it enriches contact fields with lifetime value, order count and first and last order dates, and that only completed, paid orders affect them. It also documents that a refund or cancelled order does not reduce the order count. So contact fields are a summary, not a ledger. If you need per-order history inside your own systems, keep it in the order record, or write each order to a log such as a spreadsheet, which HighLevel documents with a Google Sheets example. HighLevel also documents Custom Objects and workflow actions to find and manage their records, but we found no documentation that an order sync writes orders into them, so treat that as a custom build.
            </p>

            {/* Section: Eight Order Workflows */}
            <h2 id="eight-order-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Eight Order Workflows You Can Build in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each workflow below follows the same format. 'Test' notes use the cautious approach in the setup section: no real charges and no unapproved customer messages.
            </p>

            {/* Workflow 1 */}
            <h2 id="workflow-1-internal-notification" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              1. New-Order Internal Notification
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {workflow1Data.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Workflow 2 */}
            <h2 id="workflow-2-customer-message" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              2. Order-Related Customer Message
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {workflow2Data.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Workflow 3 */}
            <h2 id="workflow-3-contact-record-update" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              3. Contact Record Update After an Order
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {workflow3Data.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Workflow 4 */}
            <h2 id="workflow-4-routing-exception" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              4. Routing an Order or Exception to the Right Person
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {workflow4Data.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Workflow 5 */}
            <h2 id="workflow-5-payment-exception" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              5. Payment-Related Exception Alerts
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {workflow5Data.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Workflow 6 */}
            <h2 id="workflow-6-fulfillment-followup" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              6. Fulfillment-Related Follow-Up
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {workflow6Data.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Workflow 7 */}
            <h2 id="workflow-7-repeat-purchase" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              7. Repeat-Purchase or Segment Update
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {workflow7Data.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Workflow 8 */}
            <h2 id="workflow-8-exception-escalation" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              8. Exception Handling and Escalation
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {workflow8Data.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How to Set Up */}
            <h2 id="how-to-set-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Set Up an Order Workflow in GoHighLevel
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 1: Define what should happen.</strong> Write one sentence: 'When [event], do [action] for [person].' Decide which parts belong to HighLevel and which to the store, payment processor or shipping tool.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 2: Identify the event source.</strong> Is the order placed in HighLevel, in the Ecommerce Store, in Shopify, or somewhere else? The source decides which triggers exist. WooCommerce, for example, is not covered by Order Fulfilled.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 3: Map the data.</strong> List each field you need and where it comes from. If a field might be empty, plan for that case. Do not assume every Shopify field reaches HighLevel; HighLevel documents which contact fields sync, and others may need a webhook.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 4: Choose the trigger.</strong> Use the trigger HighLevel documents for your source. Check the exact label in your account, because naming differs between pages (for example 'Order Placed', 'Shopify Order Placed' and 'Order Received' all appear in documentation for Shopify-related events). Use Order Submitted for completed purchases and not Order Form Submission, which does not require payment.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 5: Add conditions.</strong> Use trigger filters first, then If/Else for finer branches. Always include a branch for 'none of the above'.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 6: Add actions.</strong> Start with internal actions (notification, task, tag). Add customer messages last, and only after you have confirmed no other automatic message duplicates them.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 7: Add safeguards.</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Duplicate prevention.</strong> Shopify itself says the same webhook may arrive more than once and recommends idempotent processing: designing so that handling the same event twice has the same effect as handling it once. In HighLevel, Allow Re-entry and Allow Multiple control repeat entry, but switching re-entry off also blocks legitimate second orders. We found no documented deduplication by order ID, so a common approach is to store the last processed order ID on the contact and check it with If/Else. Treat that as a pattern to test, not a documented feature. See <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">workflow re-entry</Link>.</li>
              <li><strong className="text-[#1A2236]">Missing data.</strong> Check required fields before acting.</li>
              <li><strong className="text-[#1A2236]">Consent and timing.</strong> The Time Window setting pauses communication actions outside allowed hours and does not affect internal ones. SMS needs consent and carrier registration; see <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>. HighLevel's confirmation article does not classify transactional versus marketing messages, so get that guidance for your jurisdiction.</li>
              <li><strong className="text-[#1A2236]">Conflicting workflows.</strong> List every workflow that listens to the same trigger. Two workflows on Order Fulfilled can send two messages.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 8: Test with representative orders.</strong> Test a normal paid order, a failed payment, a duplicate event, a missing field, a split shipment and a refund. Use test modes: Shopify provides a Test payment gateway and Shopify Payments test mode, and test orders there do not appear in payouts or reports. Place real charges only if you have no test option, and then cancel and refund, knowing the processor may still charge fees. HighLevel's pages recommend saving and publishing the workflow, submitting a test order and checking Workflow History; the Payment Received page advises activating the workflow before testing. Do not send test messages to real customers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 9: Monitor and maintain.</strong> Check execution logs after launch and after any change to your store, integration or workflow. HighLevel marks deprecating triggers (for example the legacy Shopify Order Fulfilled), so review your triggers when notices appear.
            </p>

            {/* Section: Three Examples */}
            <h2 id="three-examples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Three Examples That Combine the Pieces
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Example 1: A paid order notifies the team and the customer</p>
                <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Event:</strong> successful payment for a product sold in a HighLevel order form. <strong className="text-[#1A2236]">Trigger:</strong> Order Submitted filtered to that product. <strong className="text-[#1A2236]">Logic:</strong> one branch for orders over a value threshold you set. <strong className="text-[#1A2236]">Actions:</strong> internal notification and a task for the assigned person; a confirmation email using the Shopping Cart element; the default sales receipt reviewed so the customer does not get a duplicate. <strong className="text-[#1A2236]">Depends on:</strong> native features only. <strong className="text-[#1A2236]">Limits:</strong> fulfillment still happens outside HighLevel.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Example 2: An order updates the record and an incomplete order is held</p>
                <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Event:</strong> Shopify order synced to HighLevel. <strong className="text-[#1A2236]">Logic:</strong> If/Else checks that the contact has an email and the order includes a product tag you map; if either is missing the workflow stops. <strong className="text-[#1A2236]">Actions:</strong> complete orders get a product tag and a task; incomplete ones get a 'needs review' tag, an internal notification and no customer message. <strong className="text-[#1A2236]">Depends on:</strong> Shopify connection and sync settings. <strong className="text-[#1A2236]">Limits:</strong> the workflow cannot fix the missing data in Shopify; a person does.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-1">Example 3: A fulfillment event sends tracking and handles partial shipments</p>
                <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Event:</strong> an order marked Fulfilled in the store, or a fulfillment pushed from Shippo or ShipStation. <strong className="text-[#1A2236]">Trigger:</strong> Order Fulfilled with a Tracking Number filter and Allow Multiple on. <strong className="text-[#1A2236]">Actions:</strong> send tracking details; if no tracking number, create a task to add it. <strong className="text-[#1A2236]">Depends on:</strong> Store or Shopify, and a shipping connector for tracking. <strong className="text-[#1A2236]">Limits:</strong> it fires on Fulfilled, not Delivered, so delivery messages need another source.</p>
              </div>
            </div>

            {/* Section: What GoHighLevel Cannot Do */}
            <h2 id="what-gohighlevel-cannot-do" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What GoHighLevel Cannot Do on Its Own
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Area</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What to Know</th>
                  </tr>
                </thead>
                <tbody>
                  {whatCannotDoData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.area}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatToKnow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If any of these is central to how you operate, you need a store platform, a shipping tool, an order management system or custom integration alongside HighLevel. That is a normal architecture, not a failure of the platform.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mistakes
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Mistake</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Consequence</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Prevention</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.mistake}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.consequence}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.prevention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Troubleshooting an Order Workflow
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Symptom</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Fix, then Retest</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.symptom}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCause}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatToCheck}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For general trigger problems see <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow not triggering</Link> and <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">workflow triggered but not working</Link>.
            </p>

            {/* Section: How to Tell Working */}
            <h2 id="how-to-tell-working" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Tell Whether It Is Working
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are measures you can choose, not reports HighLevel produces for you automatically:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Share of orders that reached the workflow without error (compare order count in the store with workflow enrollments).</li>
              <li>Workflow errors and failed actions per week (execution logs).</li>
              <li>Duplicate messages reported by customers or noticed in tests.</li>
              <li>Time from order event to first action (workflow history timestamps).</li>
              <li>Orders needing manual correction (count tasks tagged 'needs review').</li>
              <li>Time your team spends on the manual steps this replaced (measure it before and after yourself).</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Some of this lives outside HighLevel, such as store order counts and processor reports. Pick a baseline before launch. No benchmark is offered here because none can be responsibly given.
            </p>

            {/* Section: Is Right for You */}
            <h2 id="is-right-for-you" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Order Automation Right for You?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A good fit:</strong> you already use HighLevel, sell through HighLevel or Shopify, and need coordination, notifications and records.</li>
              <li><strong className="text-[#1A2236]">Proceed with care:</strong> you sell through WooCommerce or another platform, which needs a connector or custom work.</li>
              <li><strong className="text-[#1A2236]">Probably another system:</strong> you have complex inventory, warehouse or multi-location fulfillment needs. Use an order management system and let HighLevel react to it.</li>
              <li><strong className="text-[#1A2236]">Not ready yet:</strong> you have no defined order process. Write the process down first; automating confusion makes it faster.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start with one small workflow, such as the internal notification, prove it, then add more.
            </p>

            {/* Section: Final Verdict */}
            <h2 id="final-verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Verdict
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel can reliably automate the coordination that follows an order event: telling people, creating tasks, updating records, routing exceptions and sending messages, using documented triggers like Order Submitted, Payment Received, Refund and Order Fulfilled. It is not an inventory, shipping or payment system, and the outcome depends on your order source, your data quality, how you handle duplicates and how carefully you test.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you have decided GoHighLevel suits your store and want help designing or checking the workflows, GHL Scale Up works on GoHighLevel setup and automation. You can <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">read about our workflow automation service</Link> or <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free assessment</Link>. For connecting other systems, see <Link href="/services/integrations" className="text-[#0E9BF0] hover:underline">our integrations service</Link>.
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
              Still unsure how to build order automation for your store?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs →</Link>
                <Link href="/blog/gohighlevel-ecommerce-store" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store Guide →</Link>
                <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM for Ecommerce →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Post Purchase Automation →</Link>
                <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Customer Retention Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? →</Link>
                <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Service →</Link>
                <Link href="/contact" className="text-sm text-[#0E9BF0] hover:underline">Book a Free Assessment →</Link>
                <Link href="/services/integrations" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Integrations Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Building Order Automation?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help businesses build order workflows in GoHighLevel that actually work.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building order automation for ecommerce businesses. All product details verified against HighLevel and Shopify documentation as of October 2026.
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