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

export default function EcommerceVIPProgramClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'quick-answer',
        'what-is-vip-program',
        'why-identify-best-customers',
        'how-to-identify-vip-customers',
        'design-benefits',
        'what-is-vip-automation',
        'where-gohighlevel-fits',
        'what-shopify-connection-provides',
        'what-crm-does-not-solve',
        'eight-vip-workflows',
        'workflow-1-identify-qualifying',
        'workflow-2-welcome',
        'workflow-3-notify-team',
        'workflow-4-vip-communications',
        'workflow-5-milestones',
        'workflow-6-remove-update',
        'workflow-7-offer-early-access',
        'workflow-8-route-vip-issue',
        'how-to-set-up',
        'can-replace-loyalty-platform',
        'common-mistakes',
        'how-to-measure',
        'is-right-tool',
        'final-recommendations',
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
      q: "What is a VIP customer program in ecommerce?",
      a: "A program that recognizes and rewards a selected group of top customers using criteria you choose, with benefits such as early access, better service or recognition."
    },
    {
      q: "How do I identify VIP customers in my store?",
      a: "Look at spend, order frequency and recency, ideally together, and set the rule from your own order data and best existing customers."
    },
    {
      q: "How many purchases should qualify someone?",
      a: "There is no standard number. It depends on your purchase cycle and economics. Base it on how often your best customers actually buy."
    },
    {
      q: "How can I reward loyal customers?",
      a: "Offer access, service and recognition first, and use discounts sparingly so margin is protected."
    },
    {
      q: "Can a VIP program work without points?",
      a: "Yes. Many rely on recognition, access and service, with a clear rule for who qualifies."
    },
    {
      q: "How do I automate it?",
      a: "Tag customers who meet the rule, then use workflows to welcome them, alert your team and send VIP communications. The automation depends on having reliable purchase data."
    },
    {
      q: "Can GoHighLevel identify high-value customers?",
      a: "With Shopify connected, it receives lifetime value, order count and order dates, and can tag customers who meet thresholds you set. Rolling-window or margin-based rules need external calculation."
    },
    {
      q: "Can it segment customers by purchases?",
      a: "Yes, using Smart Lists and tags built on the synced fields, subject to the data limits described above."
    },
    {
      q: "Can it manage loyalty points?",
      a: "No points or rewards balance capability is documented. Use a loyalty platform for that."
    },
    {
      q: "What is the difference between a VIP program and a loyalty program?",
      a: "A loyalty program is usually open to everyone and rewards purchases. A VIP program limits the best treatment to a selected group, and may sit on top of a loyalty program."
    },
    {
      q: "How do I measure success?",
      a: "Compare repeat rate, order value, margin and retention against a baseline or a similar group, and watch costs and complaints."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'what-is-vip-program', title: 'What Is an Ecommerce VIP Program?' },
    { id: 'why-identify-best-customers', title: 'Why Identify Your Best Customers, and Why Not Just the Biggest Spenders' },
    { id: 'how-to-identify-vip-customers', title: 'How to Identify VIP Customers for Your Store' },
    { id: 'design-benefits', title: 'Design Benefits Customers Actually Want' },
    { id: 'what-is-vip-automation', title: 'What Is VIP Customer Automation?' },
    { id: 'where-gohighlevel-fits', title: 'Where GoHighLevel Fits' },
    { id: 'what-shopify-connection-provides', title: 'What the Shopify Connection Provides' },
    { id: 'what-crm-does-not-solve', title: 'What the CRM Does Not Solve' },
    { id: 'eight-vip-workflows', title: 'Eight VIP Workflows You Can Build' },
    { id: 'workflow-1-identify-qualifying', title: '1. Identify Customers Who Qualify' },
    { id: 'workflow-2-welcome', title: '2. Welcome a Newly Qualified VIP' },
    { id: 'workflow-3-notify-team', title: '3. Notify Your Team' },
    { id: 'workflow-4-vip-communications', title: '4. Send VIP-Specific Communications' },
    { id: 'workflow-5-milestones', title: '5. Recognize Milestones' },
    { id: 'workflow-6-remove-update', title: '6. Remove or Update VIP Status' },
    { id: 'workflow-7-offer-early-access', title: '7. Send an Offer or Early-Access Message' },
    { id: 'workflow-8-route-vip-issue', title: '8. Route a VIP Issue to a Person' },
    { id: 'how-to-set-up', title: 'How to Set Up a VIP Program in GoHighLevel' },
    { id: 'can-replace-loyalty-platform', title: 'Can GoHighLevel Replace a Loyalty Platform?' },
    { id: 'common-mistakes', title: 'Common Mistakes' },
    { id: 'how-to-measure', title: 'How to Measure Whether It Is Working' },
    { id: 'is-right-tool', title: 'Is GoHighLevel the Right Tool?' },
    { id: 'final-recommendations', title: 'Final Recommendations' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const conceptData = [
    { concept: 'Loyalty or rewards program', whatItIs: 'Open to all customers; usually points or perks for purchases', howItDiffers: 'A VIP program narrows the best treatment to a smaller group. Many VIP programs sit on top of a loyalty program as its top tier, and some exist without points' },
    { concept: 'Customer retention', whatItIs: 'The broader goal of keeping customers buying', howItDiffers: 'A VIP program is one tactic for retention' },
    { concept: 'Segmentation', whatItIs: 'Grouping customers by data', howItDiffers: 'Segmentation is the mechanism; VIP is a defined segment with its own treatment' },
    { concept: 'Repeat-purchase campaign', whatItIs: 'Messages timed to bring people back', howItDiffers: 'Targets behavior, not status' },
    { concept: 'Discount campaign', whatItIs: 'A temporary price offer', howItDiffers: 'A discount to a recent buyer does not make them a VIP' },
    { concept: 'Referral program', whatItIs: 'Rewards for bringing in customers', howItDiffers: 'Can be one VIP criterion, but is a different mechanism' },
  ];

  const identificationData = [
    { method: 'Total spend', whatItMeasures: 'Cumulative revenue from a customer', usefulWhen: 'Prices are high and purchases rare', limitation: 'Ignores refunds, discounts and margin; favors old customers; one large order can mislead' },
    { method: 'Purchase frequency', whatItMeasures: 'Number of orders', usefulWhen: 'Customers reorder often, order sizes are small', limitation: 'Many small orders may not be profitable' },
    { method: 'Recency', whatItMeasures: 'How recently they bought', usefulWhen: 'You want an active relationship, not a historic one', limitation: 'Poor for products with long purchase cycles' },
    { method: 'Average order value', whatItMeasures: 'Typical basket size', usefulWhen: 'Order values vary widely', limitation: 'Misleading for customers with only one or two orders' },
    { method: 'Product or category patterns', whatItMeasures: 'What they buy', usefulWhen: 'You can tailor benefits to preferences', limitation: 'Needs clean product data' },
    { method: 'RFM', whatItMeasures: 'Recency, frequency and monetary value combined into scores', usefulWhen: 'You have enough order history to score meaningfully', limitation: 'Needs benchmarks suited to your business; ignores margin and returns unless added' },
    { method: 'Engagement or referrals', whatItMeasures: 'Interaction with your brand', usefulWhen: 'As a supporting signal', limitation: 'Email opens and clicks are weak evidence of loyalty' },
  ];

  const benefitsData = [
    { benefit: 'Early access to launches', businessRequirement: 'Inventory plan; a way to restrict or announce access', automateOrPersonal: 'Announcement can be automated; access control depends on your store' },
    { benefit: 'Priority support', businessRequirement: 'A support process that honors the promise', automateOrPersonal: 'Alerting can be automated; the service is human' },
    { benefit: 'Free or upgraded shipping', businessRequirement: 'Margin room; store shipping rules', automateOrPersonal: 'Applied in the store, not in the CRM' },
    { benefit: 'Member-only offers or bundles', businessRequirement: 'Margin-tested offers', automateOrPersonal: 'Message can be automated; the offer lives in the store' },
    { benefit: 'Birthday or milestone recognition', businessRequirement: 'You hold the date', automateOrPersonal: 'Easy to automate once the date is stored' },
    { benefit: 'Exclusive content or education', businessRequirement: 'Content to give', automateOrPersonal: 'Automated delivery is straightforward' },
    { benefit: 'Personal thank-you or concierge help', businessRequirement: "Someone's time", automateOrPersonal: 'Better handled by a person, with an automated nudge' },
    { benefit: 'Points and rewards', businessRequirement: 'A points system and balance', automateOrPersonal: 'Needs a loyalty platform' },
  ];

  const qualificationRulesData = [
    { rule: 'Lifetime spend above a threshold', canFieldsSupport: 'Yes, using lifetime value, for Shopify purchases only' },
    { rule: 'At least N orders', canFieldsSupport: 'Yes, using order count, with the refund caveat above' },
    { rule: 'Active in the last 12 months', canFieldsSupport: 'Partly. Last order date can show recency, but a rolling twelve-month spend total is not a documented field, so it needs a calculation elsewhere' },
    { rule: 'Average order value', canFieldsSupport: 'Not documented as a field. Calculate from lifetime value and order count, or compute externally' },
    { rule: 'Margin or net-of-returns value', canFieldsSupport: 'No. Needs data from your store or accounting system, passed in by an integration' },
    { rule: 'Product category preference', canFieldsSupport: 'Possible through tags or order data, depending on setup' },
    { rule: 'Purchases from several channels', canFieldsSupport: 'Not covered if some sales happen outside the connected store' },
  ];

  const workflow1Data = [
    { item: 'Goal', detail: 'Mark customers as VIP when they meet your rule' },
    { item: 'Trigger', detail: 'An order event from your store; or a periodic review of a Smart List' },
    { item: 'Required data', detail: 'Lifetime value, order count, last order date (Shopify), or a value calculated elsewhere' },
    { item: 'How it works', detail: 'After an order, wait briefly so the connection can update the fields, check them with If/Else against your thresholds, then add a VIP tag, set a status field and record the evaluation date. A periodic review catches customers who qualify without a new order trigger' },
    { item: 'What HighLevel does', detail: 'Reads the fields, branches, tags and updates a field' },
    { item: 'What needs something else', detail: 'Rolling-window, margin or net-of-return rules; any data outside the connected store' },
    { item: 'Why useful', detail: 'One consistent rule instead of manual list pulls' },
    { item: 'Test', detail: 'Use test contacts and test orders. Check a customer just below the threshold, one just above, one with missing data, and confirm timing, because the check may run before the fields update' },
  ];

  const workflow2Data = [
    { item: 'Goal', detail: 'Tell the customer they are recognized and explain the benefits' },
    { item: 'Trigger', detail: 'Contact Tag added (the VIP tag)' },
    { item: 'Required data', detail: 'Contact details and email consent' },
    { item: 'How it works', detail: "The tag starts the workflow, which sends the welcome email. An If/Else checks for a 'welcomed' tag so it is sent once, then applies that tag" },
    { item: 'What HighLevel does', detail: 'Sends the message and guards against repeats. The Contact Tag trigger fires only for tags added after the workflow is active, so existing VIPs need to be added separately' },
    { item: 'What needs something else', detail: 'Nothing for the message itself' },
    { item: 'Why useful', detail: 'A consistent first impression' },
    { item: 'Test', detail: 'Add and remove the tag on a test contact twice and confirm a single welcome' },
  ];

  const workflow3Data = [
    { item: 'Goal', detail: 'Let a person add a human touch when an important customer qualifies' },
    { item: 'Trigger', detail: 'Contact Tag added' },
    { item: 'Required data', detail: 'Contact and tag' },
    { item: 'How it works', detail: 'Send an internal notification and create a task with a due date for one named person' },
    { item: 'What HighLevel does', detail: 'Sends the notification; Add Task assigns to a single user' },
    { item: 'What needs something else', detail: 'The personal outreach itself' },
    { item: 'Why useful', detail: 'Turns a tag into an action someone owns' },
    { item: 'Test', detail: 'Qualify a test contact and confirm one notification and one task' },
  ];

  const workflow4Data = [
    { item: 'Goal', detail: 'Give VIPs different, relevant messages' },
    { item: 'Trigger', detail: 'A campaign or workflow aimed at a Smart List of VIP-tagged contacts' },
    { item: 'Required data', detail: 'Tag, do-not-disturb status, consent' },
    { item: 'How it works', detail: 'Build a Smart List (tag is VIP and not unsubscribed) and send VIP updates to it. Exclude VIPs from general promotions where the offers conflict' },
    { item: 'What HighLevel does', detail: 'Filters and sends. Its documentation describes no setting that caps messages across workflows, so manage frequency yourself with tags and exit conditions' },
    { item: 'What needs something else', detail: 'Nothing' },
    { item: 'Why useful', detail: 'VIPs stop receiving mass discount emails that undercut their status' },
    { item: 'Test', detail: 'Check the list membership against a manually verified sample. See A2P 10DLC before sending SMS' },
  ];

  const workflow5Data = [
    { item: 'Goal', detail: 'Acknowledge birthdays or purchase milestones' },
    { item: 'Trigger', detail: 'Birthday Reminder; or an order check that tests order count' },
    { item: 'Required data', detail: 'Date of birth (collected on a form, import or record); first order date for anniversaries' },
    { item: 'How it works', detail: 'The Birthday Reminder trigger can run before, after or on the day. Anniversaries need the first order date stored on the contact' },
    { item: 'What HighLevel does', detail: 'Triggers on a stored date and sends or assigns a task. A valid date in MM/DD/YYYY format is required' },
    { item: 'What needs something else', detail: 'Collecting the birthday in the first place' },
    { item: 'Why useful', detail: 'Low-effort recognition that does not involve discounts' },
    { item: 'Test', detail: 'Use a contact whose birthday is today; check time zone and a missing-date case' },
  ];

  const workflow6Data = [
    { item: 'Goal', detail: 'Keep the group accurate' },
    { item: 'Trigger', detail: 'A periodic review of VIP-tagged contacts against your rule' },
    { item: 'Required data', detail: 'Last order date and the fields your rule uses' },
    { item: 'How it works', detail: 'A Smart List finds VIP contacts who no longer meet the rule, they enter a workflow that checks the fields are not empty, optionally waits through a grace period, then removes the tag and updates the status field' },
    { item: 'What HighLevel does', detail: 'Remove Contact Tag and field updates. The Contact Changed trigger may not track removed values, so test any removal-based step' },
    { item: 'What needs something else', detail: 'Fresh data. Never demote on an empty or stale field' },
    { item: 'Why useful', detail: 'VIP status that means something' },
    { item: 'Test', detail: 'A contact whose field is empty must keep status; one who clearly lapsed must lose it' },
  ];

  const workflow7Data = [
    { item: 'Goal', detail: 'Deliver a real benefit' },
    { item: 'Trigger', detail: 'A campaign to the VIP list, or a workflow tied to a launch' },
    { item: 'Required data', detail: 'VIP tag; the offer details' },
    { item: 'How it works', detail: 'Email a link to an early-access page or a code' },
    { item: 'What HighLevel does', detail: 'Sends the message. It can create coupon codes for its own store and has Coupon Code Applied and Redeemed triggers' },
    { item: 'What needs something else', detail: 'Discounts and access on Shopify are managed there. Generating a unique code per customer by workflow was not verified' },
    { item: 'Why useful', detail: 'Benefits arrive on time without manual sending' },
    { item: 'Test', detail: 'Send only to internal test contacts and test the link or code in a non-live setting' },
  ];

  const workflow8Data = [
    { item: 'Goal', detail: "Make sure a VIP's problem is seen quickly" },
    { item: 'Trigger', detail: 'A reply from the customer, followed by a tag check' },
    { item: 'Required data', detail: 'VIP tag; the inbound message' },
    { item: 'How it works', detail: 'If the contact has the VIP tag, send an internal notification and create a task' },
    { item: 'What HighLevel does', detail: 'Alerts your team. VIP status guarantees nothing about fulfillment or other support tools' },
    { item: 'What needs something else', detail: 'A separate helpdesk is not controlled from here' },
    { item: 'Why useful', detail: 'Priority becomes visible' },
    { item: 'Test', detail: 'Reply from a test contact with and without the tag' },
  ];

  const loyaltyPlatformComparisonData = [
    { function: 'Identify and segment customers', ghl: 'Yes, with the data it has', dedicatedTool: 'Yes' },
    { function: 'Send VIP-specific communications', ghl: 'Yes', dedicatedTool: 'Often yes' },
    { function: 'Manage customer records and workflows', ghl: 'Yes', dedicatedTool: 'Limited' },
    { function: 'Issue and track points', ghl: 'No documented capability', dedicatedTool: 'Yes' },
    { function: 'Maintain a rewards balance', ghl: 'No documented capability', dedicatedTool: 'Yes' },
    { function: 'Manage tier rules and automatic upgrades', ghl: 'Only by building them yourself with tags and workflows', dedicatedTool: 'Yes' },
    { function: 'Apply store discounts or free shipping', ghl: 'Not by itself; store coupons exist for its own store', dedicatedTool: 'Store or loyalty app' },
    { function: 'Member-only product access', ghl: 'Depends on the store; not a CRM function', dedicatedTool: 'Store or app' },
    { function: 'Loyalty transactions and redemption', ghl: 'No documented capability', dedicatedTool: 'Yes' },
  ];

  const mistakesData = [
    { mistake: 'Setting an arbitrary threshold', prevention: 'Base it on your order data and your best existing customers' },
    { mistake: 'Rewarding gross spend', prevention: 'Account for refunds and margin where you can; otherwise acknowledge the rule is rough' },
    { mistake: 'Treating one large order as loyalty', prevention: 'Combine spend with frequency' },
    { mistake: 'Never updating status', prevention: 'Build the removal path with a grace period' },
    { mistake: 'Repetitive or irrelevant messages', prevention: 'Keep a VIP list separate from general promotions and set your own frequency limits' },
    { mistake: 'Discounts that erode margin', prevention: 'Lead with access, service and recognition' },
    { mistake: 'Benefits that are hard to understand or redeem', prevention: 'Explain them in one short message' },
    { mistake: 'Inaccurate data', prevention: 'Check for empty fields, duplicates and refund handling before acting' },
    { mistake: 'Building complexity before testing demand', prevention: 'Launch a simple version for a small group first' },
    { mistake: 'Automating everything', prevention: 'Keep a human step for your best customers' },
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
          <span className="text-[#1A2236] font-medium">Ecommerce VIP Program: How to Build and Automate It</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">VIP Program</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Automation</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Build an Ecommerce VIP Program<br />
            <span className="text-[#F8D000]">(and Automate It)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Facts checked against HighLevel documentation on 18 October 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Look at your customer list for a moment. Somewhere in it are people who have bought from you five times, people who spent more in one order than most customers spend in a year, and people who return every season for the same product. Now look at what they receive: the same newsletter, the same discount code and the same post-purchase email as someone who bought once on a promotion.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            A VIP program is a deliberate answer to that gap. It does not need a points engine, a mobile app or a large team. At its simplest it is a clear rule for who your best customers are, a few benefits worth having, and a reliable way to deliver them. Automation helps by making that system consistent, so a customer who qualifies is recognized the same way every time.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">To build an ecommerce VIP program,</strong> decide what valuable behavior looks like for your business, set qualification rules you can actually calculate from your data, choose benefits your margins and operations can support, then use a CRM or marketing platform to tag qualifying customers and run the communications. Whether the rules can be automated depends on what purchase data you can access, which is the part most guides skip.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get VIP Program Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#eight-vip-workflows"
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
              <div className="text-sm font-bold text-white mb-2">Need VIP Program Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses build VIP programs and workflows in GoHighLevel.</p>
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

            {/* Section: What Is VIP Program */}
            <h2 id="what-is-vip-program" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is an Ecommerce VIP Program?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A VIP program recognizes and rewards a selected group of customers according to criteria you choose. The group is deliberately small. That separates it from related ideas that are often used as if they meant the same thing:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Concept</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Is</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">How It Differs From a VIP Program</th>
                  </tr>
                </thead>
                <tbody>
                  {conceptData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.concept}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItIs}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.howItDiffers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A simple example:</strong> a store that sells a consumable product decides that anyone with several orders in the past year is a VIP. Those customers get early access to new flavors, a personal thank-you from the owner, and a faster response when they email support. No points, no tiers, and a clear reason it exists.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/ecommerce-vip-program.png"
                  alt="Ecommerce VIP Program: How VIP customer automation works and qualification method comparison"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Ecommerce VIP Program: How VIP customer automation works and qualification method comparison</span>
              </div>
            </div>

            {/* Section: Why Identify Best Customers */}
            <h2 id="why-identify-best-customers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Identify Your Best Customers, and Why Not Just the Biggest Spenders
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Customers differ in how often they buy, how much they spend, what they buy and how long they stay. Treating them identically means your most valuable relationships get the same attention as a one-time bargain hunter, and your messaging has to be generic enough for everyone.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              But the biggest spender is not always the best customer. A single large purchase can be a gift or a one-off project. A customer who buys modestly every few weeks may be worth more over a year. A customer who spends heavily but returns half of it, or buys only at deep discount, may cost more than they bring in. Acquisition cost, margin and refund rates all matter. A program that rewards raw spend can reward the wrong behavior.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is also a risk of rewarding people who would have bought anyway. If your best customers already reorder every month, a discount for doing so lowers your margin without changing what they do. That is why the next sections focus on rules and benefits before any software.
            </p>

            {/* Section: How to Identify VIP Customers */}
            <h2 id="how-to-identify-vip-customers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Identify VIP Customers for Your Store
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is no universal threshold. These are the common approaches and what each can and cannot tell you:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Method</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Measures</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Useful When</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Limitation</th>
                  </tr>
                </thead>
                <tbody>
                  {identificationData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.method}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItMeasures}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.usefulWhen}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.limitation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Choosing a rule</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Match it to your purchase cycle.</strong> A store whose customers buy every month and one whose customers buy once every two years need different rules.</li>
              <li><strong className="text-[#1A2236]">Prefer a window to a lifetime total.</strong> A rolling period such as the last twelve months (an illustrative choice, not a benchmark) rewards current behavior. A lifetime total keeps old customers VIP forever.</li>
              <li><strong className="text-[#1A2236]">Combine two signals.</strong> For example, a minimum number of orders and a minimum spend, so neither a single big order nor many tiny ones qualify on their own.</li>
              <li><strong className="text-[#1A2236]">Consider net, not gross.</strong> If you can account for refunds or margin, use that. If you cannot, say so and expect the rule to be rough.</li>
              <li><strong className="text-[#1A2236]">Start with your existing best customers.</strong> Pull the people you already consider your best, look at what they have in common, and set the rule so it captures them. This is a practical approach many VIP guides suggest.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Any numbers in an example are placeholders. Pick yours from your own order data.
            </p>

            {/* Section: Design Benefits */}
            <h2 id="design-benefits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Design Benefits Customers Actually Want
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Benefits are the program. If they are not valuable, no automation will rescue it. Think in three groups: access, service and recognition, and use discounts sparingly so the program does not become a permanent sale.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Benefit</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Business Requirement</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Automate or Keep Personal?</th>
                  </tr>
                </thead>
                <tbody>
                  {benefitsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.benefit}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.businessRequirement}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.automateOrPersonal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not everything should be automated. A handwritten note to a top customer does more than an automated email, and a system can simply remind you to write it.
            </p>

            {/* Section: What Is VIP Automation */}
            <h2 id="what-is-vip-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is VIP Customer Automation?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In plain terms, it is a chain with five links:
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>A customer meets your qualification rule.</li>
              <li>The system knows it, either because the data is there or because you calculated it.</li>
              <li>The customer is marked as a VIP (a tag, a field, or a segment membership).</li>
              <li>That mark starts the right actions: a welcome message, a task for your team, access to the right communications.</li>
              <li>The system keeps the status accurate, removing or updating it when the customer no longer qualifies, and routes exceptions to a person.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The weak point is link two. A tool can only act on what it can see. If your store records orders but your CRM cannot total them, the automation has nothing to evaluate. The rest of this guide deals with that honestly.
            </p>

            {/* Section: Where GoHighLevel Fits */}
            <h2 id="where-gohighlevel-fits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where GoHighLevel Fits
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is a CRM and marketing automation platform. If you are new to it, <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">this overview explains what it is</Link>. For a VIP program it offers contact records, tags, custom fields, Smart Lists (saved filters), workflows with triggers and conditions, email and SMS, internal notifications and tasks. Connected to Shopify, it also receives order and customer data. It is one way to implement the program, not the only one.
            </p>

            {/* Section: What Shopify Connection Provides */}
            <h2 id="what-shopify-connection-provides" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What the Shopify Connection Provides
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel documents that its Shopify integration enriches contacts with lifetime value, order count, first and last order dates. Only completed, paid orders affect them, and lifetime value covers Shopify purchases only. A refund updates lifetime value but not order count, and a cancelled order does not reduce order count either. For details on what is available, see <Link href="/blog/gohighlevel-shopify-integration" className="text-[#0E9BF0] hover:underline">the Shopify integration guide</Link> and <Link href="/blog/gohighlevel-ecommerce-customer-segmentation" className="text-[#0E9BF0] hover:underline">the segmentation guide</Link>.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What that means for qualification rules</strong>
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Rule you might want</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Can the documented fields support it?</th>
                  </tr>
                </thead>
                <tbody>
                  {qualificationRulesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.rule}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.canFieldsSupport}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If a rule needs data HighLevel does not hold, there are three options: simplify the rule to what the fields support, calculate the value elsewhere (a spreadsheet, a data tool or custom code) and send it in through a webhook or API, or use a different tool. All three are legitimate. The mistake is to build a workflow on a number that does not exist.
            </p>

            {/* Section: What CRM Does Not Solve */}
            <h2 id="what-crm-does-not-solve" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What the CRM Does Not Solve
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>It does not issue or track loyalty points or maintain a rewards balance. No such action is documented.</li>
              <li>It does not by itself apply discounts, free shipping or member pricing in a store. Those live in the store.</li>
              <li>It does not calculate profitability.</li>
              <li>It does not guarantee loyalty, retention or revenue. It carries out the rules you design.</li>
            </ul>

            {/* Section: Eight VIP Workflows */}
            <h2 id="eight-vip-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Eight VIP Workflows You Can Build
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each is described with its trigger, data, logic, what the platform does, what needs something else, why it helps and how to test it. Treat them as designs to adapt, not templates guaranteed to work unchanged.
            </p>

            {/* Workflow 1 */}
            <h2 id="workflow-1-identify-qualifying" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              1. Identify Customers Who Qualify
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
            <h2 id="workflow-2-welcome" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              2. Welcome a Newly Qualified VIP
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
            <h2 id="workflow-3-notify-team" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              3. Notify Your Team
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
            <h2 id="workflow-4-vip-communications" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              4. Send VIP-Specific Communications
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
            <h2 id="workflow-5-milestones" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              5. Recognize Milestones
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
            <h2 id="workflow-6-remove-update" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              6. Remove or Update VIP Status
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
            <h2 id="workflow-7-offer-early-access" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              7. Send an Offer or Early-Access Message
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
            <h2 id="workflow-8-route-vip-issue" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              8. Route a VIP Issue to a Person
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
              How to Set Up a VIP Program in GoHighLevel
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 1: Define VIP.</strong> Write the rule in one sentence and name the benefits. If you cannot, stop; the software will not help.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 2: Identify where purchase data lives.</strong> In HighLevel's own store, in Shopify, or elsewhere? The answer decides what you can calculate.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 3: Decide how eligibility is calculated.</strong> Use the Shopify fields if they fit your rule. Otherwise plan an external calculation and a way to send the result in.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 4: Organize the data.</strong> Create a dropdown field for VIP status and a date field for the last evaluation. Field types cannot be changed after creation, so confirm what you need first. Use a tag only as the signal that starts workflows. Do not store purchase history in a single field that each order overwrites.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 5: Build the qualification and update process.</strong> Create the order-triggered check, the periodic review and the removal path. Tags are case-sensitive, so keep one spelling.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 6: Build the experience.</strong> Add the welcome, team notification and VIP communications. Confirm every promised benefit can actually be delivered by the systems involved.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 7: Add safeguards.</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Duplicates and re-entry.</strong> A contact cannot re-enter a workflow while still active in it. Decide deliberately. See <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">workflow re-entry</Link>.</li>
              <li><strong className="text-[#1A2236]">Conflicting workflows.</strong> Workflows on the same trigger run together. Check which others a VIP might also qualify for (post-purchase, winback, cross-sell). See <Link href="/blog/gohighlevel-ecommerce-upsell-cross-sell-automation" className="text-[#0E9BF0] hover:underline">the upsell and cross-sell guide</Link>.</li>
              <li><strong className="text-[#1A2236]">Missing data.</strong> Check fields are not empty before acting.</li>
              <li><strong className="text-[#1A2236]">Consent and frequency.</strong> SMS needs consent and registration. Time Window limits when messages go out but not internal actions.</li>
              <li><strong className="text-[#1A2236]">Manual review.</strong> Have a person glance at new VIPs for the first few weeks.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 8: Test.</strong> Use test contacts and test orders. Cover a qualifying customer, a non-qualifying one, one who qualifies twice, one whose status should change, one with missing data and a duplicate event. Do not issue real discounts, charge customers or message real people to test. Check results in the workflow history; see <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">enrollment history and execution logs</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Step 9: Monitor and refine.</strong> Review who is VIP, who left, and whether the rule still fits your prices and margins at least each quarter. Rules go stale.
            </p>

            {/* Section: Can Replace Loyalty Platform */}
            <h2 id="can-replace-loyalty-platform" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Replace a Loyalty Platform?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For many stores, no, and for some, yes. It depends on which functions you need:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Function</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Dedicated Loyalty Tool or Store</th>
                  </tr>
                </thead>
                <tbody>
                  {loyaltyPlatformComparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.function}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.dedicatedTool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A CRM-driven VIP program is often enough when you want recognition, access and service for a defined group, and your rule can be calculated from available data. A loyalty platform is the better choice when customers earn and spend points, when you need visible tiers with automatic upgrades, or when redemption must happen at checkout. You can also use both, with the loyalty tool as the source of status and HighLevel handling communication, but we have not verified specific loyalty-app integrations, so check any app's own documentation.
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
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Prevention</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.mistake}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.prevention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How to Measure */}
            <h2 id="how-to-measure" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Measure Whether It Is Working
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose measures before launch, and decide where each will come from. HighLevel does not report all of these automatically; many come from your store or a spreadsheet.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Repeat-purchase rate and purchase frequency among eligible customers.</li>
              <li>Average order value and revenue per eligible customer.</li>
              <li>Redemption rate for the benefits you offer.</li>
              <li>Engagement with VIP messages, and unsubscribes or complaints.</li>
              <li>Retention over a defined period.</li>
              <li>Margin after discounts and reward costs.</li>
              <li>The time you spend maintaining the program.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Correlation is not cause.</strong> VIPs are already your best customers, so they will often look good with or without the program. To judge the program, compare against a baseline from before launch, or against a similar group that did not receive the benefits (for example, a comparable set of customers held out for a period). Even then, treat the result as evidence and not proof. No benchmark is given here because none can be responsibly offered.
            </p>

            {/* Section: Is Right Tool */}
            <h2 id="is-right-tool" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel the Right Tool?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A good fit:</strong> you want CRM-based segmentation and VIP communications, your purchase data is reliable and connected, or you already use GoHighLevel for marketing.</li>
              <li><strong className="text-[#1A2236]">Proceed with care:</strong> your data is scattered across systems, or your rule needs margin or rolling-window calculations. Expect external work.</li>
              <li><strong className="text-[#1A2236]">Consider a loyalty platform:</strong> you need points, balances, redemption or visible tiers.</li>
              <li><strong className="text-[#1A2236]">Probably not worth it yet:</strong> you have few repeat customers. Start with a manual list and a thank-you email.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the wider context, see <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM for ecommerce</Link> and the store-side options in <Link href="/blog/gohighlevel-ecommerce-store" className="text-[#0E9BF0] hover:underline">the Ecommerce Store guide</Link>.
            </p>

            {/* Section: Final Recommendations */}
            <h2 id="final-recommendations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Recommendations
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Define what valuable customer behavior means for you.</li>
              <li>Pick a rule that combines signals and that you can calculate.</li>
              <li>Design benefits that fit your margins and operations.</li>
              <li>Confirm the data supports the rule before building anything.</li>
              <li>Use a CRM such as GoHighLevel, with your store connected, for the communications and upkeep.</li>
              <li>Test with sample customers and watch the first weeks closely.</li>
              <li>Review the rule and results regularly.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you have settled your VIP rules and want help turning them into a reliable CRM setup and workflows, GHL Scale Up works on GoHighLevel CRM and automation. You can <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">read about our CRM setup service</Link> or <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free assessment</Link>. For longer-term customer strategy, see <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-[#0E9BF0] hover:underline">the retention guide</Link> and <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-[#0E9BF0] hover:underline">post purchase automation</Link>.
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
              Still unsure how to build a VIP program for your store?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? →</Link>
                <Link href="/blog/gohighlevel-shopify-integration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Shopify Integration Guide →</Link>
                <Link href="/blog/gohighlevel-ecommerce-customer-segmentation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Customer Segmentation Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
                <Link href="/blog/gohighlevel-ecommerce-upsell-cross-sell-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Upsell and Cross-Sell Automation →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-crm-for-ecommerce" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM for Ecommerce →</Link>
                <Link href="/blog/gohighlevel-ecommerce-store" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Store Guide →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/contact" className="text-sm text-[#0E9BF0] hover:underline">Book a Free Assessment →</Link>
                <Link href="/blog/gohighlevel-ecommerce-customer-retention" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Customer Retention Guide →</Link>
                <Link href="/blog/gohighlevel-ecommerce-post-purchase-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Post Purchase Automation →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Building Your VIP Program?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help businesses build VIP programs and workflows in GoHighLevel that actually work.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building VIP programs and customer segmentation for ecommerce businesses. All product details verified against HighLevel documentation as of October 2026.
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