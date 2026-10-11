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

export default function GoHighLevelEcommerceCustomerSegmentationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-segmentation-means',
        'what-shopify-data-available',
        'what-integration-keeps-current',
        'what-isnt-there',
        'four-conditions-remove-data',
        'which-segments-worth-building',
        'first-time-customers',
        'repeat-customers',
        'high-value-customers',
        'product-specific-customers',
        'approaching-repeat-window',
        'winback-lapsed',
        'complementary-product-offers',
        'wholesale-distinct-buyers',
        'smart-list-tag-custom-field',
        'how-to-build-segment',
        'worked-example',
        'how-to-combine-segments',
        'common-mistakes',
        'how-to-test-segments',
        'how-to-measure-segment',
        'where-gohighlevel-stops',
        'when-to-configure-yourself',
        'start-with-decision',
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
      q: "How do I segment Shopify customers in GoHighLevel?",
      a: "Connect the store, confirm the purchase-history fields populate, and build Smart Lists on Order Count, Last Order Date and Lifetime Value. Add tags only for facts the data does not hold."
    },
    {
      q: "Can I segment by purchase history?",
      a: "By count, recency and total value, yes. By specific product, HighLevel's documentation does not list a contact field for it, so you would apply a tag or field from a workflow."
    },
    {
      q: "How do I build a repeat-customer list?",
      a: "A Smart List with Order Count more than 1. Remember cancelled orders still count."
    },
    {
      q: "How do I find inactive customers?",
      a: "Order Count at least 1 and Last Order Date more than your chosen number of days ago, excluding DND contacts and anyone with a recent checkout."
    },
    {
      q: "Tags or custom fields?",
      a: "Tags for events and labels, custom fields for values a workflow needs to compare, and neither for what a Smart List can read from existing fields."
    },
    {
      q: "Can I run upsell or cross-sell campaigns?",
      a: "Yes, but the product-level history behind them needs your own tagging. Keep the offer relevant and tested."
    },
    {
      q: "Does this replace Shopify analytics?",
      a: "No. Margin, AOV and cohort reporting are not documented in HighLevel."
    },
    {
      q: "What about multiple stores?",
      a: "The integration records Store Name and Customer ID, but how one customer appears across two stores should be tested in your account."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-segmentation-means', title: 'What Ecommerce Customer Segmentation Means in GoHighLevel' },
    { id: 'what-shopify-data-available', title: 'What Shopify Customer Data Is Actually Available' },
    { id: 'what-integration-keeps-current', title: 'What the Shopify Integration Keeps Current for You' },
    { id: 'what-isnt-there', title: 'What Isn\'t There' },
    { id: 'four-conditions-remove-data', title: 'Four Conditions That Quietly Remove the Data' },
    { id: 'which-segments-worth-building', title: 'Which Ecommerce Customer Segments Are Worth Building First' },
    { id: 'first-time-customers', title: 'First-Time Customers' },
    { id: 'repeat-customers', title: 'Repeat Customers' },
    { id: 'high-value-customers', title: 'High-Value Customers' },
    { id: 'product-specific-customers', title: 'Product-Specific Customers' },
    { id: 'approaching-repeat-window', title: 'Customers Approaching a Repeat-Purchase Window' },
    { id: 'winback-lapsed', title: 'Winback: Lapsed Customers' },
    { id: 'complementary-product-offers', title: 'Complementary-Product Offers' },
    { id: 'wholesale-distinct-buyers', title: 'Wholesale and Other Distinct Buyers' },
    { id: 'smart-list-tag-custom-field', title: 'Smart List, Tag or Custom Field: Choosing the Right Tool' },
    { id: 'how-to-build-segment', title: 'How to Build a Shopify Customer Segment, Step by Step' },
    { id: 'worked-example', title: 'A Worked Example: One Skincare Journey' },
    { id: 'how-to-combine-segments', title: 'How to Combine Segments Without Conflicting Messages' },
    { id: 'common-mistakes', title: 'Common Ecommerce Segmentation Mistakes' },
    { id: 'how-to-test-segments', title: 'How to Test Segments Before Any Campaign Goes Live' },
    { id: 'how-to-measure-segment', title: 'How to Measure Whether a Segment Is Any Good' },
    { id: 'where-gohighlevel-stops', title: 'Where GoHighLevel Segmentation Stops' },
    { id: 'when-to-configure-yourself', title: 'When to Configure Segments Yourself' },
    { id: 'start-with-decision', title: 'Start With the Decision, Not the Filter' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const layersData = [
    { layer: 'Fact', whatItIs: 'A field that records something that happened', example: 'Order Count is 3; Last Order Date is 12 March' },
    { layer: 'Label', whatItIs: 'A tag or custom field someone or something applied', example: 'Tag: vip-reviewed' },
    { layer: 'Segment', whatItIs: 'A Smart List that selects contacts by facts and labels', example: 'Order Count more than 1 AND Last Order Date more than 90 days ago' },
    { layer: 'Decision', whatItIs: 'A workflow condition that chooses a path', example: 'If/Else: has this contact already got the winback tag?' },
  ];

  const fieldsData = [
    { field: 'Shopify Lifetime Value', behavior: 'Adjusts when refunds happen. Shopify-only value; it does not include revenue from other sources', goodFor: 'High-value segment' },
    { field: 'Order Count', behavior: 'Refunds and cancellations do not reduce it. Draft orders are not counted', goodFor: 'First-time vs repeat' },
    { field: 'First Order Date', behavior: 'Date of the first order', goodFor: 'Customer age, cohort-style checks' },
    { field: 'Last Order Date', behavior: 'Date of the most recent order', goodFor: 'Recency, winback, repeat windows' },
    { field: 'Last Order Value', behavior: 'Value of the most recent order', goodFor: 'Follow-up context' },
    { field: 'Customer ID, Store Name', behavior: 'Identifies source customer and store', goodFor: 'Multi-store checks' },
    { field: 'Tax Exempt', behavior: 'Mirrors the Shopify setting', goodFor: 'Spotting wholesale-type buyers' },
    { field: 'Shopify tags', behavior: 'Merged into the contact\'s tags', goodFor: 'Reusing labels set in Shopify' },
  ];

  const toolChoiceData = [
    { question: 'Can it be derived from existing data?', smartList: 'Yes. Filter it live', tag: 'No', customField: 'Only if you need a calculated value' },
    { question: 'Does it change by itself?', smartList: 'Yes, automatically', tag: 'Only if a workflow changes it', customField: 'Only if a workflow updates it' },
    { question: 'Is it a one-time event?', smartList: 'Poor fit', tag: 'Good fit ("received winback offer")', customField: 'Possible (a date)' },
    { question: 'Is it a number or date for timing?', smartList: 'Filters on it', tag: 'Poor fit', customField: 'Good fit' },
    { question: 'Does a workflow need to react to it?', smartList: 'Not as a trigger by itself', tag: 'Good fit (Tag Added)', customField: 'Contact Changed' },
  ];

  const workedExampleData = [
    { step: 1, whatHappens: 'Customer places first order; contact created with Order Count 1', type: 'Native (integration)' },
    { step: 2, whatHappens: 'Order trigger applies tag "serum-buyer"', type: 'Configured workflow' },
    { step: 3, whatHappens: 'Post-purchase flow runs for First-Time Customers Smart List', type: 'Configured' },
    { step: 4, whatHappens: 'Review request sent after delivery', type: 'Configured; see review automation' },
    { step: 5, whatHappens: '50 days after Last Order Date, reminder is due', type: 'Configured; test date trigger' },
    { step: 6, whatHappens: 'Second order arrives; Order Count 2, Last Order Date moves', type: 'Native' },
    { step: 7, whatHappens: 'Contact leaves the reminder path via exit condition', type: 'Configured' },
    { step: 8, whatHappens: 'Contact appears in Repeat Customers list', type: 'Native data, Smart List' },
    { step: 9, whatHappens: 'If no order after 120 days, enters winback', type: 'Configured; see retention guide' },
  ];

  const overlapData = [
    { overlap: 'Winback and open checkout', risk: 'Discount offer while they are mid-purchase', handling: 'Exclude contacts with a recent abandoned checkout; see abandoned checkout' },
    { overlap: 'Post-purchase and review request', risk: 'Two asks close together', handling: 'Sequence them; see review automation' },
    { overlap: 'Winback and first-time', risk: 'Mixed tone', handling: 'Segments should not overlap by definition' },
    { overlap: 'Any SMS segment', risk: 'Messaging without consent', handling: 'Handle opt-in language; see A2P opt-in templates' },
  ];

  const mistakesData = [
    { problem: 'Fields empty', whyItHappens: 'Basic plan limits or no sync', check: 'Plan and sync settings', correction: 'Resolve at source' },
    { problem: 'Subscribers missing', whyItHappens: 'Import covers only customers with orders', check: 'Compare counts', correction: 'Capture subscribers separately' },
    { problem: 'Hand-built tag drifts', whyItHappens: 'Duplicates a derivable fact', check: 'Compare tag vs Order Count', correction: 'Replace with Smart List' },
    { problem: 'Cancelled orders counted', whyItHappens: 'Order Count ignores cancellations', check: 'Sample cancelled orders', correction: 'Exclude by status label' },
    { problem: 'Refund customers get thanks', whyItHappens: 'Order Count unchanged', check: 'Check LTV vs count', correction: 'Add LTV condition' },
    { problem: 'Workflow reads old value', whyItHappens: 'Same-second update', check: 'Execution log timing', correction: 'Add one-minute Wait' },
    { problem: 'Contacts never leave', whyItHappens: 'No exit condition', check: 'Enrollment history', correction: 'Add exit or Goal Event' },
    { problem: 'Date trigger silent', whyItHappens: 'Field is empty', check: 'Sample contact', correction: 'Filter empty dates out' },
    { problem: 'Duplicate contacts', whyItHappens: 'Different emails', check: 'Search by name', correction: 'Merge' },
    { problem: 'Overlapping sends', whyItHappens: 'No state check', check: 'List multiple memberships', correction: 'One lifecycle state' },
    { problem: 'Wrong threshold', whyItHappens: 'Copied from a blog', check: 'Review own order distribution', correction: 'Choose from data' },
    { problem: 'Trusting consent field', whyItHappens: 'Documented as coming soon', check: 'Read documentation', correction: 'Keep opt-in in HighLevel' },
  ];

  const testCasesData = [
    { testCase: 'Brand-new first order', expectedResult: 'Appears in First-Time; not in Repeat' },
    { testCase: 'Second order', expectedResult: 'Moves to Repeat; leaves First-Time' },
    { testCase: 'Refunded order', expectedResult: 'LTV adjusts; Order Count unchanged' },
    { testCase: 'Cancelled order', expectedResult: 'Order Count unchanged; decide handling' },
    { testCase: 'Contact with empty Last Order Date', expectedResult: 'Date trigger does not fire' },
    { testCase: 'Contact on DND', expectedResult: 'Excluded from the send' },
    { testCase: 'Contact in two segments', expectedResult: 'Only one workflow acts' },
  ];

  const limitsData = [
    { need: 'Purchase recency, count, lifetime value', inHighLevel: 'Yes, via Shopify-connected fields', alternative: '-' },
    { need: 'Product-level purchase filters', inHighLevel: 'Not documented as a filter; workaround via tags', alternative: 'Shopify reporting' },
    { need: 'Margin or AOV segments', inHighLevel: 'Not documented', alternative: 'Shopify or BI tool' },
    { need: 'Cohort analysis', inHighLevel: 'Not documented', alternative: 'Analytics tool' },
    { need: 'Data from other systems', inHighLevel: 'Needs integration work', alternative: 'See integration services' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Ecommerce Customer Segmentation Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Segmentation</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Ecommerce Customer Segmentation:<br />
            <span className="text-[#F8D000]">How to Segment Shopify Customers</span>
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
            Ask two people on the same ecommerce team how many repeat customers they have and you can get two answers. One counts contacts someone tagged "repeat-customer" by hand. The other counts contacts whose order count in HighLevel is above one. The first number drifts the day someone forgets to tag. The second changes by itself when an order arrives.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Short answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">To segment Shopify customers in GoHighLevel, connect the store through the Shopify integration, confirm that the purchase-history fields are populating, then build Smart Lists on those fields (Order Count, Last Order Date, Lifetime Value).</strong> Use workflows and tags only for labels the data cannot produce, such as which product line someone bought. HighLevel's documentation says the integration keeps Shopify Lifetime Value, Order Count, First and Last Order Date and Last Order Value current on the contact, so you do not need to rebuild those yourself.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This guide covers which segments are worth building, which tool fits each, how to build and test them, and where HighLevel stops. It is about the segment itself. The campaigns that use those segments are covered in the <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-[#0E9BF0] hover:underline">customer retention article</Link> and the <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-[#0E9BF0] hover:underline">post-purchase automation article</Link>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Segmentation Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#which-segments-worth-building"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Segments to Build
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
              <div className="text-sm font-bold text-white mb-2">Need Segmentation Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help ecommerce businesses build customer segments in GoHighLevel.</p>
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

            {/* Section: What Segmentation Means */}
            <h2 id="what-segmentation-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Ecommerce Customer Segmentation Means in GoHighLevel: Data, Labels and Decisions
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Segmentation is easier to reason about when you separate three things people often blur together: the facts about a customer, the labels you attach, and the decision a message depends on.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Layer</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Is in GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {layersData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.layer}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItIs}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The working principle: <strong className="text-[#1A2236]">use the fact HighLevel already keeps current, add tags only for what cannot be derived, and never tag what a Smart List can tell you live.</strong> A "repeat customer" tag duplicates information the order count already holds, and it will go stale. A "purchased the serum" tag may be genuinely useful, because product-level history is not documented as a contact field.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the wider role of the CRM in a store, see <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM for ecommerce</Link>.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-ecommerce-customer-segmentation.png"
                  alt="GoHighLevel Ecommerce Customer Segmentation: Data layers, segments, and tool choices"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Ecommerce Customer Segmentation: Data layers, segments, and tool choices</span>
              </div>
            </div>

            {/* Section: What Shopify Data Available */}
            <h2 id="what-shopify-data-available" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Shopify Customer Data Is Actually Available in GoHighLevel
            </h2>

            {/* Section: What Integration Keeps Current */}
            <h2 id="what-integration-keeps-current" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              What the Shopify Integration Keeps Current for You
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              According to HighLevel's Shopify integration documentation, connected stores enrich contacts with the following. Field names below follow the documentation; confirm the exact labels in your own account.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Field</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Behavior Documented by HighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Good For</th>
                  </tr>
                </thead>
                <tbody>
                  {fieldsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.field}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.behavior}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.goodFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Because Order Count ignores refunds and cancellations, a customer whose only order was cancelled can still show an order count of one. Keep that in mind before calling someone a "customer" for messaging purposes. Details of the sync are in the <Link href="/blog/gohighlevel-shopify-integration" className="text-[#0E9BF0] hover:underline">Shopify integration guide</Link>.
            </p>

            {/* Section: What Isn't There */}
            <h2 id="what-isnt-there" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              What Isn't There
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Product-level purchase history.</strong> Not documented as a contact field. Any "bought product X" segment needs a workflow (for example, from the Shopify order trigger) that applies a tag or sets a field. This is an absence in the documentation, not proof it can never be done another way.</li>
              <li><strong className="text-[#1A2236]">Collections as a customer filter.</strong> Collections sync as catalog data, not as something you can filter contacts on.</li>
              <li><strong className="text-[#1A2236]">Margin, average order value and cohort reporting.</strong> Not documented. Do this in Shopify or a reporting tool.</li>
              <li><strong className="text-[#1A2236]">Email and SMS consent from Shopify.</strong> Documented as "coming soon". Do not segment on it, and keep opt-in handling in HighLevel.</li>
            </ul>

            {/* Section: Four Conditions */}
            <h2 id="four-conditions-remove-data" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Four Conditions That Quietly Remove the Data
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Shopify plan.</strong> HighLevel's documentation notes that on the Basic plan, Shopify's updated API rules may block customer personal data (contacts, orders, transactions). If your fields are empty, check the plan before you check anything else.</li>
              <li><strong className="text-[#1A2236]">Who was imported.</strong> Contact import only includes customers who have placed an order. Subscribers who never bought will not appear through it, so a "never purchased" segment cannot be built from the import alone.</li>
              <li><strong className="text-[#1A2236]">Timing.</strong> Sync timing is not documented. If a workflow reads a field in the same second the field updates, it may read the old value. HighLevel's race-condition guidance is to add a one-minute Wait.</li>
              <li><strong className="text-[#1A2236]">Field types.</strong> Whether a given Shopify field behaves as a number or a date in filters should be confirmed in your account. Operators differ between number, date and text fields.</li>
            </ol>

            {/* Section: Which Segments Worth Building */}
            <h2 id="which-segments-worth-building" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Ecommerce Customer Segments Are Worth Building First
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Build a segment only when a different message would follow from it. Each segment below lists its purpose, data, exclusions, how fresh it stays, and what makes a contact leave it.
            </p>

            {/* Section: First-Time Customers */}
            <h2 id="first-time-customers" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              First-Time Customers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Purpose:</strong> onboarding and the first follow-up. <strong className="text-[#1A2236]">Data:</strong> Order Count equals 1. <strong className="text-[#1A2236]">Exclude:</strong> contacts whose only order was cancelled or refunded, which Order Count will not reveal. <strong className="text-[#1A2236]">Freshness:</strong> live. <strong className="text-[#1A2236]">Leaves when:</strong> Order Count goes above 1. Pair with the <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-[#0E9BF0] hover:underline">post-purchase automation</Link> workflow.
            </p>

            {/* Section: Repeat Customers */}
            <h2 id="repeat-customers" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Repeat Customers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Purpose:</strong> a different tone, since they already trust the store. <strong className="text-[#1A2236]">Data:</strong> Order Count more than 1. <strong className="text-[#1A2236]">Exclude:</strong> wholesale buyers if they behave differently. <strong className="text-[#1A2236]">Freshness:</strong> live. <strong className="text-[#1A2236]">Leaves when:</strong> never, by design; combine with recency to separate active from lapsed.
            </p>

            {/* Section: High-Value Customers */}
            <h2 id="high-value-customers" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              High-Value Customers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Purpose:</strong> early access, a human follow-up, or exclusion from discounting. <strong className="text-[#1A2236]">Data:</strong> Shopify Lifetime Value more than a threshold you choose. <strong className="text-[#1A2236]">Exclude:</strong> refund-heavy accounts; Lifetime Value adjusts for refunds, but check a few by hand. <strong className="text-[#1A2236]">Freshness:</strong> live. <strong className="text-[#1A2236]">Note:</strong> pick the threshold from your own order data rather than a rule of thumb; this article does not supply one.
            </p>

            {/* Section: Product-Specific Customers */}
            <h2 id="product-specific-customers" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Product-Specific Customers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Purpose:</strong> refill reminders, care instructions, accessories. <strong className="text-[#1A2236]">Data:</strong> not a documented contact field, so apply a tag or custom field from a workflow triggered by the order. <strong className="text-[#1A2236]">Exclude:</strong> returns. <strong className="text-[#1A2236]">Freshness:</strong> only as good as the workflow. <strong className="text-[#1A2236]">Leaves when:</strong> you remove the tag, so decide when.
            </p>

            {/* Section: Approaching Repeat Window */}
            <h2 id="approaching-repeat-window" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Customers Approaching a Repeat-Purchase Window
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Purpose:</strong> a reminder before they would normally reorder. <strong className="text-[#1A2236]">Data:</strong> Last Order Date plus a window you know from your own history. The Custom Date Reminder trigger can fire before, on or after a date field, and does not fire if the field is empty. Whether Shopify's Last Order Date is selectable there should be tested in your account.
            </p>

            {/* Section: Winback Lapsed */}
            <h2 id="winback-lapsed" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Winback: Lapsed Customers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Purpose:</strong> re-engage buyers who stopped. <strong className="text-[#1A2236]">Data:</strong> Order Count at least 1 AND Last Order Date more than N days ago. <strong className="text-[#1A2236]">Exclude:</strong> anyone with an open checkout or recent order, and anyone on DND. <strong className="text-[#1A2236]">Freshness:</strong> live. <strong className="text-[#1A2236]">Leaves when:</strong> a new order moves Last Order Date. Campaign design belongs in the <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-[#0E9BF0] hover:underline">retention and winback guide</Link>.
            </p>

            {/* Section: Complementary Product Offers */}
            <h2 id="complementary-product-offers" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Complementary-Product Offers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Purpose:</strong> relevant cross-sell. <strong className="text-[#1A2236]">Data:</strong> needs product-level labels, so it depends on the product-specific tagging above. <strong className="text-[#1A2236]">Exclude:</strong> anyone who already bought the complement. Keep the offer proportionate to what the data supports.
            </p>

            {/* Section: Wholesale Distinct Buyers */}
            <h2 id="wholesale-distinct-buyers" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Wholesale and Other Distinct Buyers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Purpose:</strong> keep retail promotions away from trade accounts. <strong className="text-[#1A2236]">Data:</strong> Tax Exempt, a Shopify tag you already use, or a manual tag. <strong className="text-[#1A2236]">Caveat:</strong> Tax Exempt is a tax setting, not a wholesale definition. Use it as a hint and check.
            </p>

            {/* Section: Smart List Tag Custom Field */}
            <h2 id="smart-list-tag-custom-field" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Smart List, Tag or Custom Field: Choosing the Right Tool for Each Segment
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Question</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Use a Smart List</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Use a Tag</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">Use a Custom Field</th>
                  </tr>
                </thead>
                <tbody>
                  {toolChoiceData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.question}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.smartList}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.tag}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.customField}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Smart Lists are dynamic, so you cannot add a contact to one by hand. That is a feature: the list cannot drift from the rule. In filters, AND logic uses Add Nested Filter and OR logic uses Add Filter.
            </p>

            {/* Section: How to Build Segment */}
            <h2 id="how-to-build-segment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Build a Shopify Customer Segment in GoHighLevel, Step by Step
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Menu labels change. Treat the names below as the documented ones and confirm them in your account.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Confirm the connection.</strong> Connect the store using the current OAuth App method described in HighLevel's documentation, and check the sync settings you need are on.</li>
              <li><strong className="text-[#1A2236]">Check three contacts against three Shopify records.</strong> Compare Order Count, Last Order Date and Lifetime Value. Do this before building anything.</li>
              <li><strong className="text-[#1A2236]">Write the decision first.</strong> One sentence: "Customers who have ordered more than once and not in 90 days get X."</li>
              <li><strong className="text-[#1A2236]">Build the Smart List.</strong> Add each condition; use Add Nested Filter for AND and Add Filter for OR. Add a DND condition where needed, and an exclusion for contacts with a conflicting tag.</li>
              <li><strong className="text-[#1A2236]">Add labels only where needed.</strong> If a decision needs a product-level fact, build a small workflow from the Shopify order trigger that applies the tag, and test the trigger fires in your account.</li>
              <li><strong className="text-[#1A2236]">Use it in a workflow with re-entry set deliberately.</strong> See <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">workflow re-entry</Link>, and set an exit condition so contacts leave when they stop qualifying.</li>
            </ol>

            {/* Section: Worked Example */}
            <h2 id="worked-example" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Worked Example: One Skincare Journey, and Which Parts Are Native
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A skincare store sells a 60-day serum. The sequence below shows which parts rely on documented behavior and which are configured or custom. It is an illustration of structure, not a result.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Step</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happens</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {workedExampleData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.step}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatHappens}</td>
                      <td className={`py-3 px-3 font-semibold ${item.type.includes('Native') ? 'text-[#25C97D]' : 'text-[#F8D000]'}`}>{item.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Three Edge Cases</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Refund after first order.</strong> Order Count stays at 1 though the customer was refunded. Lifetime Value adjusts. Exclude refunded customers from first-time celebrations if it matters.</li>
              <li><strong className="text-[#1A2236]">Cancelled order.</strong> Order Count does not fall. A contact may qualify as a customer when no goods shipped.</li>
              <li><strong className="text-[#1A2236]">Same customer, two emails.</strong> Matching is by email, so one person using two addresses is two contacts with split histories. Merge or accept it.</li>
            </ul>

            {/* Section: How to Combine Segments */}
            <h2 id="how-to-combine-segments" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Combine Segments Without Sending Conflicting Messages
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most expensive segmentation error is not a wrong list. It is a right list that overlaps with another right list. A customer who is lapsed, has an open checkout and is due a review request can receive three messages in a day.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Overlap</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Risk</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Handling</th>
                  </tr>
                </thead>
                <tbody>
                  {overlapData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.overlap}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.risk}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.handling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A simple rule helps: <strong className="text-[#1A2236]">one lifecycle state at a time.</strong> A contact is first-time, active repeat, lapsed or high-value-hold, and a workflow's first step checks that state before it sends.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Ecommerce Segmentation Mistakes in GoHighLevel
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why It Happens</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Check</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Correction</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whyItHappens}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.check}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.correction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How to Test Segments */}
            <h2 id="how-to-test-segments" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test Segments Before Any Campaign Goes Live
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Test Case</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Expected Result</th>
                  </tr>
                </thead>
                <tbody>
                  {testCasesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.testCase}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.expectedResult}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">enrollment history and execution logs</Link> to confirm who entered a workflow and why, and run tests with a handful of real contacts before pointing a list at a send.
            </p>

            {/* Section: How to Measure Segment */}
            <h2 id="how-to-measure-segment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Measure Whether a Segment Is Any Good
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two different questions get confused. <strong className="text-[#1A2236]">Is the segment accurate?</strong> Check a sample of contacts against Shopify. <strong className="text-[#1A2236]">Does it perform?</strong> Compare messages sent to it with a suitable comparison group over the same period. Accuracy comes first; performance of a wrong list tells you nothing. This article makes no claim about how much segmentation raises revenue, because that depends on your products, margins and message quality.
            </p>

            {/* Section: Where GoHighLevel Stops */}
            <h2 id="where-gohighlevel-stops" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where GoHighLevel Segmentation Stops, and When Another Tool Is Needed
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Need</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">In HighLevel?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Alternative</th>
                  </tr>
                </thead>
                <tbody>
                  {limitsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.need}</td>
                      <td className={`py-3 px-3 font-semibold ${item.inHighLevel.includes('Yes') ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.inHighLevel}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.alternative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel is a good place to act on segments. It is not Shopify's analytics. For how the CRM fits around a store, see <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM for ecommerce</Link>.
            </p>

            {/* Section: When to Configure Yourself */}
            <h2 id="when-to-configure-yourself" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When to Configure Segments Yourself and When an Audit Pays for Itself
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most stores can build the first-time, repeat and winback lists themselves in an afternoon, provided the data check passes. An outside review is worth considering when the account already has years of hand-applied tags, several overlapping workflows, or fields no one can explain. GHL Scale Up's <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">CRM setup service</Link> covers tag architecture, custom fields, Smart Lists and auditing existing setups. We make no promise about outcomes; the audit tells you what you have.
            </p>

            {/* Section: Start With Decision */}
            <h2 id="start-with-decision" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Start With the Decision, Not the Filter
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before building anything, pick three contacts in HighLevel and find the same three customers in Shopify. If order count, last order date and lifetime value agree, the data is trustworthy enough to segment on. If they do not, fix that first. Every list built on bad data is a confident mistake.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Then write the decision each segment supports. If you cannot say what would be sent differently, you do not need the segment.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Ecommerce Segmentation
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
              Still unsure how to build customer segments for your ecommerce business?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration: What It Syncs →</Link>
                <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM for Ecommerce →</Link>
                <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Post Purchase Automation →</Link>
                <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Customer Retention & Winback Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
                <Link href="/blog/gohighlevel-abandoned-checkout" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Abandoned Checkout Automation →</Link>
                <Link href="/blog/gohighlevel-ecommerce-review-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Review Automation →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/services/integrations" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Integrations and API Services →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Building Customer Segments?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help ecommerce businesses build customer segments in GoHighLevel that actually work.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building customer segmentation for ecommerce businesses. All product details verified against HighLevel documentation as of October 2026.
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