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
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function ShopifyToGoHighLevelMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'quick-answer',
        'can-you-migrate',
        'migrate-partly-keep',
        'what-data-can-move',
        'conflict-resolve',
        'what-does-not-migrate',
        'what-to-prepare',
        'step-by-step',
        'data-safety',
        'common-problems',
        'seo-domain-customer',
        'migration-checklist',
        'is-it-worth-it',
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
      q: "Can you migrate Shopify to GoHighLevel?",
      a: "You can import and sync Shopify contacts, orders, transactions, products and collections. You cannot import your theme, checkout, settings or workflows."
    },
    {
      q: "What Shopify data can be imported?",
      a: "Contacts, orders, transactions, products and collections, subject to your plan and data access."
    },
    {
      q: "Can I migrate customers and order history?",
      a: "Yes, with limits: only customers with an order are included, and statuses arrive as Completed or Cancelled. Verify the results."
    },
    {
      q: "Can GoHighLevel replace Shopify?",
      a: "For some stores, yes, using its native Ecommerce Store. It needs products, store pages, a domain and a payment provider, and items such as subscriptions, loyalty and gift cards are not documented as importable."
    },
    {
      q: "Do I need to close my Shopify store?",
      a: "No. Many businesses keep Shopify and connect it. Cancel only after everything is verified."
    },
    {
      q: "Does it include products and collections?",
      a: "Yes. Taxes are not mapped and default SEO values may arrive empty."
    },
    {
      q: "Will orders keep syncing?",
      a: "Only if you enable order sync in Sync Settings. Turning it off stops future syncing."
    },
    {
      q: "Can I migrate my Shopify workflows?",
      a: "No. They must be rebuilt in HighLevel."
    },
    {
      q: "What happens to payments and shipping?",
      a: "Payment and shipping settings are not imported; configure them separately or keep them in Shopify."
    },
    {
      q: "Will my SEO rankings be affected?",
      a: "They can be if URLs change. If Shopify remains the storefront, much less so. Redirects and monitoring help; nothing guarantees them."
    },
    {
      q: "How do I test the migration?",
      a: "Use test contacts and Shopify's test payment options, check counts and sample records, and test workflows without messaging real customers."
    },
    {
      q: "Is it better to migrate or keep Shopify connected?",
      a: "It depends on your requirements. Keeping Shopify connected is usually lower risk when your main goal is CRM and automation."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'can-you-migrate', title: 'Can You Migrate From Shopify to GoHighLevel?' },
    { id: 'migrate-partly-keep', title: 'Migrate, Partly Migrate, or Keep Shopify Connected?' },
    { id: 'what-data-can-move', title: 'What Shopify Data Can Move to GoHighLevel?' },
    { id: 'conflict-resolve', title: 'A Conflict You Need to Resolve Before You Start' },
    { id: 'what-does-not-migrate', title: 'What Does Not Migrate Automatically?' },
    { id: 'what-to-prepare', title: 'What to Prepare Before You Migrate' },
    { id: 'step-by-step', title: 'Step-by-Step Shopify to GoHighLevel Migration' },
    { id: 'data-safety', title: 'Data Safety: Mapping, Reconciliation, Duplicates and Source of Truth' },
    { id: 'common-problems', title: 'Common Migration Problems' },
    { id: 'seo-domain-customer', title: 'SEO, Domain and Customer Experience' },
    { id: 'migration-checklist', title: 'Shopify to GoHighLevel Migration Checklist' },
    { id: 'is-it-worth-it', title: 'Is Migrating From Shopify to GoHighLevel Worth It?' },
    { id: 'final-verdict', title: 'Final Verdict' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const approachData = [
    { aspect: 'Goal', fullMigration: 'Run the store on HighLevel', partialMigration: 'Centralize chosen data and processes', keepShopify: 'Add CRM and automation to Shopify' },
    { aspect: 'What changes', fullMigration: 'Storefront, checkout, payments, orders, shipping, notifications', partialMigration: 'Customer data and selected workflows', keepShopify: 'Data flows into HighLevel; workflows move' },
    { aspect: 'What stays', fullMigration: 'Almost nothing in Shopify', partialMigration: 'Shopify for what you keep', keepShopify: 'Shopify as storefront and order system' },
    { aspect: 'Complexity', fullMigration: 'Highest', partialMigration: 'Medium', keepShopify: 'Lowest' },
    { aspect: 'Risk', fullMigration: 'Highest: every function re-verified', partialMigration: 'Medium: split ownership', keepShopify: 'Lowest for the storefront' },
    { aspect: 'Benefits', fullMigration: 'One platform, consolidated records', partialMigration: 'Gradual; lets you learn first', keepShopify: 'Keeps a proven checkout and app ecosystem' },
    { aspect: 'Limits', fullMigration: 'Native store must meet your needs', partialMigration: 'Two systems to maintain', keepShopify: 'Two subscriptions; one-way data flow as documented' },
    { aspect: 'Often suits', fullMigration: 'Simple catalogs, few apps', partialMigration: 'Teams testing HighLevel', keepShopify: 'Stores using Shopify apps, subscriptions, complex variants or inventory' },
  ];

  const whatDataMovesData = [
    { data: 'Contacts', import: 'Yes', sync: 'Yes', whatToKnow: 'Only customers who have placed an order are included. Name, phone and address fill only if empty; email is used for matching. Custom fields store Shopify ID, lifetime value, order count and dates. Customer tags go to the contact\'s tag field' },
    { data: 'Orders', import: 'Yes', sync: 'Yes', whatToKnow: 'Status arrives as Completed or Cancelled. Only completed, paid orders affect contact fields; draft orders do not' },
    { data: 'Transactions', import: 'Yes', sync: 'Yes', whatToKnow: 'One transaction per order. This is not a payment processor ledger' },
    { data: 'Products', import: 'Yes', sync: 'Yes', whatToKnow: 'Review names, descriptions, images, prices and inventory details. Taxes are not mapped. Default Shopify SEO values may arrive empty' },
    { data: 'Collections', import: 'Yes', sync: 'Yes', whatToKnow: 'Check that products sit in the right collections' },
  ];

  const doesNotMigrateData = [
    { item: 'Theme, layouts, custom code', classification: 'Rebuild', notes: 'HighLevel store pages are built separately' },
    { item: 'Checkout experience', classification: 'Rebuild', notes: 'Native checkout, or keep Shopify\'s' },
    { item: 'Payment provider settings', classification: 'Rebuild', notes: 'Connect a provider in HighLevel; stored cards and subscriptions are not documented as transferable' },
    { item: 'Inventory rules', classification: 'Rebuild or keep in Shopify', notes: 'Imported product inventory details should be checked against how the native store tracks stock' },
    { item: 'Shipping and fulfillment', classification: 'Rebuild or keep in Shopify', notes: 'Shipping setup is manual; fulfillment needs tracking details entered' },
    { item: 'Taxes', classification: 'Rebuild', notes: 'Not mapped in product import' },
    { item: 'Discount rules', classification: 'Not verified', notes: 'No import documented' },
    { item: 'Gift cards, store credit, loyalty', classification: 'Keep in Shopify or an app', notes: 'No import documented' },
    { item: 'Reviews and user content', classification: 'Third-party or custom', notes: 'Export from your review app; see review automation for the HighLevel side' },
    { item: 'Subscriptions', classification: 'Not verified', notes: 'Keep in Shopify until a replacement is proven' },
    { item: 'Customer accounts, passwords', classification: 'Not verified', notes: 'Plan for customers to re-register' },
    { item: 'Apps and integrations', classification: 'Third-party or custom', notes: 'List each one and decide whether it is replaced' },
    { item: 'SEO, URLs, redirects', classification: 'Rebuild', notes: 'Only if the storefront or domain changes' },
    { item: 'Blog and pages', classification: 'Rebuild', notes: 'Export content; recreate in HighLevel\'s builders' },
    { item: 'Analytics, pixels', classification: 'Rebuild', notes: 'Re-add and retest' },
    { item: 'Domain and DNS', classification: 'Reconfigure', notes: 'Manual, and the switch needs planning' },
    { item: 'Email and SMS consent', classification: 'Verify', notes: 'HighLevel lists Shopify email and SMS consent fields as \'coming soon\'. Export consent from Shopify and handle it deliberately' },
    { item: 'Workflows and notifications', classification: 'Rebuild', notes: 'Not imported' },
  ];

  const prepareData = [
    { step: 1, title: 'Audit the Shopify store', description: 'List products and variants, collections, customer records, orders, apps, automations, integrations and who does what. Include things customers see (emails, accounts) and things they do not (accounting sync, shipping labels).' },
    { step: 2, title: 'Define the target setup', description: 'For each function, decide which system owns it: HighLevel, Shopify, the payment processor, a shipping tool or an app. Write it down. If two systems claim the same function, resolve that now.' },
    { step: 3, title: 'Confirm access', description: 'You need admin access to the Shopify store and to the HighLevel sub-account. Use the OAuth connection for any new or reconnected store. Check which data options your Shopify plan exposes.' },
    { step: 4, title: 'Review the data', description: 'Look for duplicates, missing emails, inactive customers, test orders and inconsistent tags. Clean before importing, because importing bad data into a CRM spreads it into workflows.' },
    { step: 5, title: 'Document the customer journey', description: 'Record each step from product page to purchase, confirmation, fulfillment, support and follow-up, including every email and text a customer currently receives.' },
    { step: 6, title: 'List workflows and integrations', description: 'Every automated process, notification, payment dependency and shipping connection goes on the list. This becomes your rebuild plan.' },
    { step: 7, title: 'Define success', description: 'Decide what must be true before you switch: customer and order counts reconcile, sample records match, workflows fire correctly in tests, test purchases work in the chosen system, and customer messages are right. Set your own criteria; there is no universal threshold.' },
  ];

  const migrationStepData = [
    { step: 'Step 1', title: 'Check that HighLevel meets your requirements', description: 'Write the capabilities you need (variants, inventory, shipping rules, taxes, payment methods, subscriptions, customer accounts, apps). Mark each as \'HighLevel does it\', \'HighLevel can connect to it\' or \'stays in Shopify\'. If an essential item has no answer, choose Path B or C.' },
    { step: 'Step 2', title: 'Back up and document', description: 'Export products, customers and orders from Shopify as CSV. A few limits matter: product exports do not include image files and leave SEO fields blank unless customized; large exports can fail and may need to be split; order exports list multi-item orders over several rows; and customer exports are limited to 15 MB. Never sort a CSV in a way that breaks variant and image links. A CSV backup is not your theme, app settings or automation logic, so screenshot and write those down separately.' },
    { step: 'Step 3', title: 'Confirm plan and eligibility', description: 'Check which options your Shopify plan exposes (see the conflict above). Confirm your HighLevel plan and sub-account, and that you are not relying on the legacy custom-app route, which Shopify has stopped offering on some newer stores.' },
    { step: 'Step 4', title: 'Connect Shopify', description: 'In the sub-account, go to Settings > Integrations > Shopify and select Connect. Enter the exact store URL or name. Choose import elements, then sync settings, then save; HighLevel sends you to Shopify\'s Install app screen, where you review permissions and install. If you have a legacy custom-app connection, do not disconnect it until you are ready to reconnect with OAuth. Connection depth is in the integration guide.' },
    { step: 'Step 5', title: 'Choose import options', description: 'HighLevel\'s guide suggests selecting everything for a full migration. Do that only if your target setup needs every type. For Path C you may want contacts and orders but not products or collections, because your products live in Shopify.' },
    { step: 'Step 6', title: 'Configure ongoing sync', description: 'Select the sync options and order and payment triggers you need. Remember that turning a sync off later mostly stops future syncing; it does not remove what has already come in.' },
    { step: 'Step 7', title: 'Review imported data', description: 'An import that reports completion is not a verified import. See the reconciliation section below.' },
    { step: 'Step 8', title: 'Rebuild workflows', description: 'Rebuild each documented workflow in HighLevel. Confirm trigger labels and test with sample orders.' },
    { step: 'Step 9', title: 'Reconfigure external systems', description: 'Check payments, shipping, tax, analytics, support tools and accounting. Name the authoritative system for each. If Shopify still owns orders, HighLevel should not be treated as the record of truth for them.' },
    { step: 'Step 10', title: 'Test before changing live operations', description: 'Test product and collection data, contact records, order history, transaction data, new order and payment events, each workflow, customer communications, a failed sync, a duplicate event and a record with missing data. Use test contacts and test orders. Shopify offers a Test payment gateway and a Shopify Payments test mode for store-side testing. Do not use real customers or real charges just to test.' },
    { step: 'Step 11', title: 'Plan the cutover', description: 'If Shopify stays the storefront, cutover means turning on workflows and turning off any Shopify emails they replace, then watching closely. If you are replacing Shopify, every essential function needs a verified home first: checkout, payments, shipping, taxes, notifications and support. HighLevel\'s own decommissioning list says to run a final export, confirm critical data, test workflows, train the team, keep your procedures and cancel Shopify only when the team is confident. Define a rollback: what you will do if checkout fails or data is missing. Not every migration can be reversed automatically, so keep Shopify running until you have proof.' },
    { step: 'Step 12', title: 'Monitor afterward', description: 'Review sync health, workflow history, payment-related events, message delivery and complaints, daily at first, then less often. Use enrollment history and execution logs. We give no universal timeline because it depends on your volume and complexity.' },
  ];

  const commonProblemsData = [
    { symptom: 'Connects but some data does not import', likelyCause: 'Plan or data access; option not selected', whatToCheck: 'Which options were available and selected', fix: 'Check plan, reconnect, reselect; recount' },
    { symptom: 'Customers missing', likelyCause: 'Only customers with an order are included; plan or access', whatToCheck: 'Customers without orders; plan or access', fix: 'Accept or add them another way; recount' },
    { symptom: 'Orders or transactions missing', likelyCause: 'Plan or access; sync off', whatToCheck: 'Sync settings; date ranges', fix: 'Enable sync; reimport via disconnect and reconnect; compare counts' },
    { symptom: 'Data looks incomplete', likelyCause: 'Partial field mapping', whatToCheck: 'Which fields are missing', fix: 'Confirm in the record; fill manually if needed' },
    { symptom: 'Duplicates', likelyCause: 'Reimport, multiple sources', whatToCheck: 'Matching on email; sources', fix: 'Merge or remove; retest' },
    { symptom: 'Future changes do not sync', likelyCause: 'Sync setting off; API rules changed', whatToCheck: 'Sync Settings; Shopify access', fix: 'Turn on; reconnect through OAuth' },
    { symptom: 'Order event does not trigger', likelyCause: 'Wrong trigger label; workflow unpublished', whatToCheck: 'Trigger and status', fix: 'Correct and test with a sample order' },
    { symptom: 'Workflow runs but action fails', likelyCause: 'Missing data; consent; action error', whatToCheck: 'Execution logs', fix: 'Fix data; retest' },
    { symptom: 'Payment data inconsistent', likelyCause: 'Transactions are per order copies', whatToCheck: 'Compare with processor', fix: 'Trust the processor' },
    { symptom: 'A connected app breaks', likelyCause: 'App not replaced', whatToCheck: 'App list', fix: 'Replace or keep Shopify' },
    { symptom: 'URL or domain changed', likelyCause: 'Storefront moved', whatToCheck: 'Redirects', fix: 'Add redirects; retest' },
    { symptom: 'Tracking stops', likelyCause: 'Pixels not re-added', whatToCheck: 'Tags and pixels', fix: 'Re-add and test' },
    { symptom: 'A customer process fails', likelyCause: 'Function not rebuilt', whatToCheck: 'Journey document', fix: 'Rebuild or restore it' },
  ];

  const worthItData = [
    { factor: 'Requirements', leansTowardMigrating: 'Simple: few product types, standard payments', leansTowardKeeping: 'Subscriptions, gift cards, loyalty, many apps' },
    { factor: 'Catalog', leansTowardMigrating: 'Small, few variants', leansTowardKeeping: 'Large or complex variants' },
    { factor: 'Inventory and fulfillment', leansTowardMigrating: 'Simple', leansTowardKeeping: 'Multi-location or integrated shipping' },
    { factor: 'Data', leansTowardMigrating: 'Clean, accessible on your plan', leansTowardKeeping: 'Messy or restricted' },
    { factor: 'Main need', leansTowardMigrating: 'Consolidate tools', leansTowardKeeping: 'Better CRM and follow-up' },
    { factor: 'Costs', leansTowardMigrating: 'You pay for overlapping tools', leansTowardKeeping: 'A rebuild costs more than it saves' },
    { factor: 'People', leansTowardMigrating: 'Team has time to rebuild and learn', leansTowardKeeping: 'No capacity' },
    { factor: 'Search and customer risk', leansTowardMigrating: 'Low search dependence', leansTowardKeeping: 'Search or loyal customers matter' },
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
          <span className="text-[#1A2236] font-medium">Shopify to GoHighLevel Migration: Guide & Checklist</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Shopify</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Shopify to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">What Moves, What Doesn't</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Facts checked against HighLevel and Shopify documentation, 18 October 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            A store owner wants customer records, follow-up emails and sales reports in one place. Another is tired of paying for Shopify plus a CRM plus an email tool. Both type 'Shopify to GoHighLevel migration' into a search box, and both could end up making a mistake that has nothing to do with software: assuming that moving the customer data is the same as moving the store.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            It is not. Importing customers and orders into a CRM is one job. Recreating a storefront, a checkout, payments, shipping rules, taxes, apps and years of search visibility is a much larger one. This guide separates the two, helps you decide whether you need the larger job at all, and then walks through preparation, import, rebuild, testing and cutover.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Yes, HighLevel documents a Shopify connection that can import contacts, orders, transactions, products and collections, and keep them synced.</strong> It does not move your theme, checkout, payment settings, shipping, notifications or workflows, and it does not document import of discounts, gift cards, loyalty, reviews or subscriptions. Many stores are better off keeping Shopify as the storefront and connecting it, instead of replacing it. Replace Shopify only after you have verified that every function your business depends on has a working home.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            <em>A note on perspective: GHL Scale Up implements GoHighLevel, so we have an interest in HighLevel being the answer. This guide therefore leans on HighLevel's and Shopify's own documentation, flags where those sources disagree, and argues for keeping Shopify in several cases.</em>
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Migration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#migrate-partly-keep"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Three Paths
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
              <div className="text-sm font-bold text-white mb-2">Need Migration Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses plan and execute Shopify to GoHighLevel migrations.</p>
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

            {/* Section: Can You Migrate */}
            <h2 id="can-you-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Can You Migrate From Shopify to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, for data. HighLevel's Shopify setup has two stages that are easy to mix up:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Import Elements</strong> are a one-time historical import: contacts, orders, transactions, products and collections.</li>
              <li><strong className="text-[#1A2236]">Sync Settings</strong> control what keeps updating afterward: the same five data types, plus order and payment triggers that can start workflows.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A third thing is separate from both: <strong className="text-[#1A2236]">workflows</strong>, which you build in HighLevel and which react to events. Import brings in history. Sync keeps selected records current. Workflows do things with them. None of the three recreates your storefront.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What this does not automatically do, according to HighLevel's migration guide: store pages and checkout, payment gateway settings, shipping and delivery settings, confirmation messages, abandoned checkout recovery, follow-up workflows, internal notifications, tags and segments, invoices and templates, and team procedures all need to be reviewed and rebuilt by hand.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/shopify-to-gohighlevel-migration.png"
                  alt="Shopify to GoHighLevel Migration: Three paths, what imports vs what rebuilds, and cutover checklist"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Shopify to GoHighLevel Migration: Three paths, what imports vs what rebuilds, and cutover checklist</span>
              </div>
            </div>

            {/* Section: Migrate Partly Keep */}
            <h2 id="migrate-partly-keep" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Migrate, Partly Migrate, or Keep Shopify Connected?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Decide this before you touch any settings. There are three paths:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"></th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">A. Full Migration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">B. Partial Migration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">C. Keep Shopify, Connect It</th>
                  </tr>
                </thead>
                <tbody>
                  {approachData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.fullMigration}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.partialMigration}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.keepShopify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For many stores the real goal is better follow-up and customer records, and Path C delivers that with the least disruption. See <Link href="/blog/gohighlevel-shopify-integration" className="text-[#0E9BF0] hover:underline">the Shopify integration guide</Link> for how the connection works. Path A makes sense when the native store can genuinely meet your requirements; <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">the Ecommerce Store guide</Link> explains what it covers. Path B is a sensible way to test: connect, import, rebuild a few workflows, and decide later.
            </p>

            {/* Section: What Data Can Move */}
            <h2 id="what-data-can-move" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Shopify Data Can Move to GoHighLevel?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Data</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Import</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Sync</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What to Know</th>
                  </tr>
                </thead>
                <tbody>
                  {whatDataMovesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.data}</td>
                      <td className={`py-3 px-3 font-semibold ${item.import === 'Yes' ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.import}</td>
                      <td className={`py-3 px-3 font-semibold ${item.sync === 'Yes' ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.sync}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatToKnow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three details change how much you can trust the numbers afterward. First, lifetime value covers only the connected Shopify store, so sales from other channels are missing. Second, a refund reduces lifetime value but not order count. Third, HighLevel does not document how it matches records on reimport or how it handles duplicates, so verify rather than assume.
            </p>

            {/* Section: Conflict Resolve */}
            <h2 id="conflict-resolve" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Conflict You Need to Resolve Before You Start
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's pages disagree about Shopify plans. The migration guide (version modified 26 May 2026) says Shopify Basic may not provide customer personal data through Shopify's updated API, and that contacts, orders and transactions 'may require' Grow, Advanced or Plus, with options possibly appearing unavailable during setup. The Shopify integration page (modified 15 October 2026) says a plan upgrade is not required and that Basic stores can access supported protected customer data through the OAuth connection. The newer page is more likely to be current, but do not rely on either. At the connection screen, see which import and sync options are available for your store, and if contacts, orders or transactions are missing, check your plan and data-access settings first.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Two more labels to check on screen.</strong> The sync screen lists an Order Received trigger and a Payment Received trigger. One version of HighLevel's guide also calls the order trigger Order Submitted, which is the name of a different HighLevel trigger used for order forms and funnels. Use whichever label your screen shows, and test it.
            </p>

            {/* Section: What Does Not Migrate */}
            <h2 id="what-does-not-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does Not Migrate Automatically?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Having a CSV export does not mean something can be migrated, and not being mentioned in a summary does not mean it cannot. This table classifies the common dependencies by what is documented. 'Not verified' means we found no documentation either way, so treat it as unsupported until you confirm.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Classification</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {doesNotMigrateData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className={`py-3 px-3 font-semibold ${item.classification.includes('Rebuild') ? 'text-[#F8D000]' : item.classification.includes('Not verified') ? 'text-[#DC3545]' : 'text-[#0E9BF0]'}`}>{item.classification}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the difference between <strong className="text-[#1A2236]">data portability</strong> (can I get the information out?) and <strong className="text-[#1A2236]">functional equivalence</strong> (does the new system do the same job?). A product list can be portable; a subscription billing relationship or a loyalty balance may not be.
            </p>

            {/* Section: What to Prepare */}
            <h2 id="what-to-prepare" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What to Prepare Before You Migrate
            </h2>

            <div className="space-y-4 mb-6">
              {prepareData.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">{item.step}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-9">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Section: Step by Step */}
            <h2 id="step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Step-by-Step Shopify to GoHighLevel Migration
            </h2>

            <div className="space-y-4 mb-6">
              {migrationStepData.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">{item.step}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-9">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Section: Data Safety */}
            <h2 id="data-safety" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Data Safety: Mapping, Reconciliation, Duplicates and Source of Truth
            </h2>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Mapping.</strong> HighLevel publishes only partial field mapping. Taxes are not mapped, default SEO values can arrive empty, and contact fields cannot be chosen individually. Compare a sample of records field by field.</li>
              <li><strong className="text-[#1A2236]">Reconciliation.</strong> Compare counts (customers with an order, orders, products, collections) between Shopify and HighLevel, then check a sample of records for names, totals, statuses, line items and relationships. Expect the contact count to be lower than your Shopify customer count, because only customers with an order are included.</li>
              <li><strong className="text-[#1A2236]">Duplicates.</strong> Duplicate handling is not documented. Check for repeat contacts and duplicate events after import, and consider that reimporting adds or updates records under rules HighLevel does not describe. See <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">workflow re-entry</Link> to stop duplicate runs.</li>
              <li><strong className="text-[#1A2236]">Source of truth.</strong> For each process, name the authority. A synced order is a copy.</li>
              <li><strong className="text-[#1A2236]">Customer communication.</strong> During the transition, both systems may send confirmations. Decide which sends what, and switch the other off.</li>
              <li><strong className="text-[#1A2236]">Privacy and consent.</strong> Move marketing consent deliberately and follow the rules that apply to you. See <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">A2P 10DLC</Link> for US SMS.</li>
            </ul>

            {/* Section: Common Problems */}
            <h2 id="common-problems" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Migration Problems
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Symptom</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Fix and Verify</th>
                  </tr>
                </thead>
                <tbody>
                  {commonProblemsData.map((item, idx) => (
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

            {/* Section: SEO Domain Customer */}
            <h2 id="seo-domain-customer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              SEO, Domain and Customer Experience
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This applies only if the storefront or its URLs change. If Shopify remains the storefront, little of it does.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Indexed pages and URLs.</strong> Record every product, collection and page URL and its traffic before you move.</li>
              <li><strong className="text-[#1A2236]">Redirects.</strong> Map each old URL to the most relevant new one.</li>
              <li><strong className="text-[#1A2236]">Metadata and canonicals.</strong> Recreate titles, descriptions and canonical tags. Product SEO fields may arrive empty.</li>
              <li><strong className="text-[#1A2236]">Sitemap and internal links.</strong> Update and resubmit; fix links in content and emails.</li>
              <li><strong className="text-[#1A2236]">Analytics and conversion tracking.</strong> Re-add and retest.</li>
              <li><strong className="text-[#1A2236]">Customer-facing links.</strong> Order confirmation links, account links and bookmarks can break.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Rankings can change after a platform move, so do not expect them to stay as they are. Plan to monitor.
            </p>

            {/* Section: Migration Checklist */}
            <h2 id="migration-checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Shopify to GoHighLevel Migration Checklist
            </h2>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 my-6">
              <h3 className="text-base font-bold text-[#1A2236] mb-3">Before migration</h3>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside mb-4">
                <li>Decide path A, B or C and record why.</li>
                <li>List every function and its owner.</li>
                <li>Export products, customers and orders; document apps and settings.</li>
                <li>Clean duplicates and test data.</li>
              </ul>

              <h3 className="text-base font-bold text-[#1A2236] mb-3">Connection and import</h3>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside mb-4">
                <li>Connect with OAuth.</li>
                <li>Select only the import and sync options you need.</li>
                <li>Note which options were unavailable.</li>
              </ul>

              <h3 className="text-base font-bold text-[#1A2236] mb-3">Data validation</h3>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside mb-4">
                <li>Compare counts.</li>
                <li>Sample-check records field by field.</li>
                <li>Check duplicates and consent.</li>
              </ul>

              <h3 className="text-base font-bold text-[#1A2236] mb-3">Workflow reconstruction</h3>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside mb-4">
                <li>Rebuild each documented workflow.</li>
                <li>Confirm trigger labels.</li>
                <li>Switch off overlapping Shopify emails.</li>
              </ul>

              <h3 className="text-base font-bold text-[#1A2236] mb-3">Integration testing</h3>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside mb-4">
                <li>Test orders, payments, failures, duplicates, missing data.</li>
                <li>Use test modes only.</li>
              </ul>

              <h3 className="text-base font-bold text-[#1A2236] mb-3">Cutover readiness</h3>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside mb-4">
                <li>Every essential function has a verified home.</li>
                <li>Rollback plan written.</li>
                <li>Team trained.</li>
              </ul>

              <h3 className="text-base font-bold text-[#1A2236] mb-3">Post-migration monitoring</h3>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                <li>Review logs and sync daily at first.</li>
                <li>Keep Shopify active until confident.</li>
                <li>Review redirects and tracking if URLs changed.</li>
              </ul>
            </div>

            {/* Section: Is It Worth It */}
            <h2 id="is-it-worth-it" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is Migrating From Shopify to GoHighLevel Worth It?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Leans toward migrating</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">Leans toward keeping Shopify connected</th>
                  </tr>
                </thead>
                <tbody>
                  {worthItData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.leansTowardMigrating}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.leansTowardKeeping}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              No universal answer exists. Total cost includes the rebuild, training, maintenance and the risk of lost sales, not only subscription prices. We have not compared subscription prices here because plan prices change; check current pricing for both platforms and, for HighLevel, usage-based charges (see <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing</Link>).
            </p>

            {/* Section: Final Verdict */}
            <h2 id="final-verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Verdict
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The right outcome is not moving everything into one platform. It is a system in which your data, customer messages, orders and responsibilities work as intended. For most stores that means connecting Shopify to GoHighLevel first, importing what you need, rebuilding workflows and judging the result. Retire Shopify only when you have verified that everything it does for you has a reliable replacement, and keep it running until you have.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you want help assessing your setup or building the workflows, GHL Scale Up works on GoHighLevel CRM setup, workflows and integrations. You can <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">read about our CRM setup service</Link> or <Link href="/contact" className="text-[#0E9BF0] hover:underline">get in touch</Link>. For general migration planning, see <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">the GoHighLevel migration checklist</Link> and <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">common migration mistakes</Link>.
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
              Still unsure whether to migrate or keep Shopify connected?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs →</Link>
                <Link href="/blog/gohighlevel-ecommerce-store" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store Guide →</Link>
                <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM for Ecommerce →</Link>
                <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Post Purchase Automation →</Link>
                <Link href="/blog/gohighlevel-abandoned-checkout" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Abandoned Checkout →</Link>
                <Link href="/blog/gohighlevel-ecommerce-customer-segmentation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Customer Segmentation →</Link>
                <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Customer Retention Guide →</Link>
                <Link href="/blog/gohighlevel-ecommerce-review-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Review Automation →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing Guide →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/contact" className="text-sm text-[#0E9BF0] hover:underline">Get in Touch →</Link>
                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">Common Migration Mistakes →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help With Your Shopify Migration?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help businesses plan and execute Shopify to GoHighLevel migrations.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience migrating from Shopify and other platforms. All product details verified against HighLevel and Shopify documentation as of October 2026.
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