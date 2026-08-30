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
  Shield,
  AlertTriangle,
  Star,
  Phone,
  MessageCircle,
  TrendingUp,
  BarChart3,
  Sparkles,
  Info,
  Rocket,
  Target,
  HeartHandshake,
  Trophy,
  Search
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelPricingClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'plans-side-by-side',
        'starter-plan',
        'unlimited-plan',
        'agency-pro-plan',
        'annual-vs-monthly',
        'usage-fees',
        'ai-pricing',
        'real-cost-scenarios',
        'which-plan',
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

      // Show floating Project Help card after scrolling past hero section
      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle TOC click with smooth scroll
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
      q: "How much does GoHighLevel cost per month?",
      a: "GoHighLevel costs $97/month for the Starter plan, $297/month for the Unlimited plan, and $497/month for the Agency Pro (SaaS) plan. These are base subscription prices. Usage fees for SMS ($0.0079/segment), email ($0.675/1,000), phone calls ($0.014/min outbound), and AI features are billed separately through the GoHighLevel Agency Wallet. Most users pay $20–$150 more than the base price depending on usage volume."
    },
    {
      q: "What is included in all GoHighLevel plans?",
      a: "All three GoHighLevel plans include unlimited contacts, unlimited users, full CRM with pipelines, funnel and website builder, workflow automation, email and SMS marketing, booking calendar, reputation management, course and membership hosting, and the social media planner. The differences between plans are sub-account limits (3 on Starter, unlimited on Unlimited and Pro), white-labelling (Unlimited and Pro), and SaaS Mode (Pro only)."
    },
    {
      q: "Does GoHighLevel offer annual billing?",
      a: "Yes. Annual billing saves approximately 17%, equivalent to two months free. The annual rates are $970/year (Starter), $2,970/year (Unlimited), and $4,970/year (Agency Pro). The discount applies to the base subscription only usage fees for SMS, email, calls, and AI are billed separately regardless of billing cycle. Annual billing is not refundable, so confirm you are on the right plan before committing."
    },
    {
      q: "What are GoHighLevel's hidden costs?",
      a: "GoHighLevel's additional costs beyond the base plan include: SMS at $0.0079 per segment (emojis and long messages cost more), outbound calls at $0.014/min, local phone numbers at $1.15/month, email at $0.675 per 1,000 sends, A2P 10DLC SMS registration ($4–$19 one-time, required for US SMS), AI Employee at $97/month per sub-account for unlimited use, HIPAA compliance at $297/month, and the white-label mobile app at $49/month. These are usage-based services documented in GHL's pricing guide."
    },
    {
      q: "Does GoHighLevel have a free trial?",
      a: "Yes. GoHighLevel offers a standard 14-day free trial with full access to all features on your chosen plan. No credit card is required to start. Some agency partners provide extended 30-day trials. Use the trial to set up one complete workflow, one funnel, and one calendar sequence this gives you a realistic sense of what the platform can do before committing."
    },
    {
      q: "What is GoHighLevel AI Employee pricing?",
      a: "AI Employee has two billing options. Pay-as-you-go: Conversation AI at $0.02/message, Voice AI (inbound) at approximately $0.13/minute, Reviews AI at $0.08/automated response. Alternatively, the AI Employee Unlimited plan covers Conversation AI, Voice AI (inbound), Reviews AI, and Content AI for $97/month per sub-account. Voice AI outbound and Agent Studio are not included in the Unlimited plan and are billed separately. Only Agency Pro ($497/mo) can rebill AI costs to clients with a markup."
    },
    {
      q: "What is the difference between GoHighLevel Unlimited and Agency Pro?",
      a: "The Unlimited plan ($297/mo) includes unlimited sub-accounts, white-label desktop branding, snapshots, and enhanced API access. Agency Pro ($497/mo) adds SaaS Mode the ability to resell GHL as your own branded software product, with automated client provisioning, a white-label mobile app, tiered client pricing, and full markup control on all usage fees including AI. If you want to charge clients a monthly fee for access to 'your software,' you need Agency Pro."
    },
    {
      q: "Is GoHighLevel pricing worth it?",
      a: "For agencies and service businesses that set it up properly, yes. GoHighLevel at $97–$297/month replaces 6–8 tools that typically cost $400–$1,200/month combined. The risk is paying for a subscription and using only 10–20% of the platform which is why professional setup matters. Businesses that invest in proper configuration from day one consistently see faster ROI than those who self-build slowly over months."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'plans-side-by-side', title: '1. The Three GoHighLevel Plans Side-by-Side' },
    { id: 'starter-plan', title: '2. Starter Plan ($97/month) What\'s Included' },
    { id: 'unlimited-plan', title: '3. Unlimited Plan ($297/month) What\'s Included' },
    { id: 'agency-pro-plan', title: '4. Agency Pro / SaaS Plan ($497/month) What\'s Included' },
    { id: 'annual-vs-monthly', title: '5. Annual vs Monthly Billing The Savings Breakdown' },
    { id: 'usage-fees', title: '6. The Real Costs: Usage Fees Explained' },
    { id: 'ai-pricing', title: '7. GoHighLevel AI Pricing in 2026' },
    { id: 'real-cost-scenarios', title: '8. Real Monthly Cost Scenarios' },
    { id: 'which-plan', title: '9. Which GoHighLevel Plan Is Right for You?' },
    { id: 'faq', title: '10. Frequently Asked Questions' },
  ];

  const usageFees = [
    { service: 'SMS (outbound & inbound)', cost: '$0.0079 per segment', notes: '1 segment = 160 characters. Emojis force Unicode encoding (70 chars/segment) and cost more' },
    { service: 'MMS (images/media)', cost: '$0.0200 per message', notes: 'Significantly more expensive than SMS use sparingly' },
    { service: 'Outbound phone calls', cost: '$0.014 per minute', notes: 'Two-leg billing: ~$0.018/min total (outbound + app leg)' },
    { service: 'Inbound phone calls', cost: '$0.0085 per minute', notes: 'Separate rate from outbound' },
    { service: 'Local phone number', cost: '$1.15 per month', notes: 'Includes SMS and voice capabilities' },
    { service: 'Email sending (LC Email)', cost: '$0.675 per 1,000 emails', notes: 'Very low cost typically under $10–15/month for most users' },
    { service: 'Email validation', cost: '$2.50 per 1,000 verifications', notes: 'Optional but recommended for list hygiene' },
    { service: 'A2P 10DLC registration', cost: '$4–$19 one-time + ~$2/mo', notes: 'Required for all US business SMS. Not a GHL fee carrier regulation' },
    { service: 'WhatsApp messaging', cost: '$10/month per sub-account', notes: 'Optional add-on' },
    { service: 'HIPAA compliance', cost: '$297/month add-on', notes: 'Required if handling protected health information' },
  ];

  const aiPricing = [
    { feature: 'Conversation AI (chat/SMS)', paygo: '$0.02 per message', unlimited: 'Included in $97/mo AI Employee Unlimited' },
    { feature: 'Voice AI (inbound calls)', paygo: '~$0.13 per minute', unlimited: 'Included in $97/mo AI Employee Unlimited' },
    { feature: 'Reviews AI', paygo: '$0.08 per automated response', unlimited: 'Included in $97/mo AI Employee Unlimited' },
    { feature: 'Content AI', paygo: 'Per token usage', unlimited: 'Included in $97/mo AI Employee Unlimited' },
    { feature: 'Voice AI Outbound', paygo: 'Per minute usage', unlimited: 'Not included in Unlimited billed separately' },
    { feature: 'Agent Studio / Voice AI Widget', paygo: 'Per usage', unlimited: 'Not included in Unlimited billed separately' },
  ];

  const scenarios = [
    { name: 'Solo service business (Starter plan)', details: ['Plan: Starter $97/month', 'Usage: 500 SMS/month, 2,000 emails, 1 local phone number, modest call volume'], costs: ['SMS: ~$4', 'Email: ~$1.35', 'Phone number: $1.15', 'Calls: ~$10'], total: '$113–$130/month', replaces: 'Replaces: Calendly + Mailchimp + ClickFunnels + CRM = $200–$300/month' },
    { name: 'Growing agency (Unlimited plan)', details: ['Plan: Unlimited $297/month', 'Usage: 10 client sub-accounts, 5,000 SMS/month across clients, 20,000 emails, 5 phone numbers'], costs: ['SMS: ~$40', 'Email: ~$14', 'Phone numbers: $5.75', 'Calls: ~$30'], total: '$387–$450/month', replaces: 'Revenue from 10 clients at $300/month each: $3,000. Net after platform: $2,550+' },
    { name: 'SaaS agency (Agency Pro plan)', details: ['Plan: Agency Pro $497/month', 'Usage: 20 white-label SaaS clients, rebilling usage to clients with markup'], costs: ['Platform cost: $497', 'Usage fees passed to clients at markup'], total: 'Net platform cost after client rebilling: often close to $0 or profitable', replaces: 'Revenue from 20 clients at $197/month SaaS fee: $3,940/month recurring' },
  ];

  const recommendations = [
    { situation: 'Solo business owner or freelancer running your own marketing', plan: 'Starter $97/mo', why: '3 sub-accounts is enough. Full feature set for one business.' },
    { situation: 'New agency with 1–2 clients just starting out', plan: 'Starter $97/mo', why: 'Test the platform affordably. Upgrade when you hit the 3-account ceiling.' },
    { situation: 'Agency with 3+ active clients', plan: 'Unlimited $297/mo', why: 'Unlimited sub-accounts. White-label starts here. First client covering your plan cost.' },
    { situation: 'Agency building recurring revenue from client software access', plan: 'Unlimited $297/mo', why: 'Basic rebilling available. Upgrade to Pro when SaaS revenue model is validated.' },
    { situation: 'Agency wanting to resell GHL as branded SaaS software', plan: 'Agency Pro $497/mo', why: 'SaaS Mode, auto-provisioning, full markup control, AI rebilling. Essential for this model.' },
    { situation: 'Migrating from HubSpot, Salesforce, or Zoho', plan: 'Unlimited $297/mo', why: 'Migration complexity warrants expert help + full sub-account access from day one.' },
    { situation: 'Healthcare / HIPAA-regulated business', plan: 'Unlimited + $297/mo HIPAA add-on', why: 'HIPAA compliance is a required add-on, not included in any base plan.' },
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your GHL plan selection.</p>
      <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Pricing 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Pricing</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel Plans</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Cost</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Pricing 2026:<br />
            <span className="text-[#F8D000]">All Plans, Real Costs & Hidden Fees Explained</span>
          </h1>

          {/* Author Byline */}
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Most GoHighLevel pricing guides stop at three numbers: $97, $297, $497.
            That's a good start but it's not what you'll actually pay. SMS, calls,
            email sends, and AI tools are all billed on top of your base plan. This
            guide covers every cost, every plan, and exactly which tier is right for
            your business in 2026.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Plan Advice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#which-plan"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Which Plan Fits
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
            {/* Project Help Card */}
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

            {/* Table of Contents - Sticky */}
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

            {/* About the Author */}
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
                5+ years GHL experience · 200+ systems built globally across real estate, healthcare, SaaS, and agencies.
                All pricing in this guide verified against GoHighLevel's official documentation as of May 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
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

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Help Choosing a Plan?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We've helped 200+ businesses pick the right GHL plan and set it up correctly.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Advice
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer GoHighLevel Pricing at a Glance</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel has three plans: Starter at $97/month, Unlimited at $297/month, and Agency Pro (SaaS) at $497/month.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                All plans include unlimited contacts and unlimited users. The real monthly cost is typically $20–$150 higher
                than the base price once you add SMS, email, calls, and AI usage fees. Annual billing saves approximately 17%
                (two months free) on all plans.
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Plan Advice
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

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

            {/* Mobile Project Help Card - visible on mobile only */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section 1: Plans Side-by-Side */}
            <h2 id="plans-side-by-side" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. The Three GoHighLevel Plans Side-by-Side
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              All three plans include the same core features: unlimited contacts, unlimited users, full CRM, funnel builder,
              workflow automation, email marketing, booking calendar, reputation management, and course/membership hosting.
              The differences are in sub-account limits, white-labelling, and SaaS capabilities.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Starter</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Unlimited ★ Most Popular</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Agency Pro (SaaS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Monthly price</td><td className="py-3 px-3 text-[#0E9BF0] font-semibold">$97/mo</td><td className="py-3 px-3 text-[#0E9BF0] font-semibold">$297/mo</td><td className="py-3 px-3 text-[#0E9BF0] font-semibold">$497/mo</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Annual price</td><td className="py-3 px-3 text-[#5C6880]">$970/yr (~$81/mo)</td><td className="py-3 px-3 text-[#5C6880]">$2,970/yr (~$248/mo)</td><td className="py-3 px-3 text-[#5C6880]">$4,970/yr (~$414/mo)</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Annual saving</td><td className="py-3 px-3 text-[#25C97D]">$194/yr</td><td className="py-3 px-3 text-[#25C97D]">$594/yr</td><td className="py-3 px-3 text-[#25C97D]">$994/yr</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Sub-accounts</td><td className="py-3 px-3 text-[#5C6880]">3 only</td><td className="py-3 px-3 text-[#5C6880]">Unlimited</td><td className="py-3 px-3 text-[#5C6880]">Unlimited</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">White-label desktop</td><td className="py-3 px-3 text-[#5C6880]">No</td><td className="py-3 px-3 text-[#5C6880]">Yes</td><td className="py-3 px-3 text-[#5C6880]">Yes</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">White-label mobile app</td><td className="py-3 px-3 text-[#5C6880]">No</td><td className="py-3 px-3 text-[#5C6880]">No</td><td className="py-3 px-3 text-[#5C6880]">Yes</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">SaaS Mode</td><td className="py-3 px-3 text-[#5C6880]">No</td><td className="py-3 px-3 text-[#5C6880]">No</td><td className="py-3 px-3 text-[#5C6880]">Yes</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">API access</td><td className="py-3 px-3 text-[#5C6880]">Basic</td><td className="py-3 px-3 text-[#5C6880]">Enhanced</td><td className="py-3 px-3 text-[#5C6880]">Full</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Rebilling / markup control</td><td className="py-3 px-3 text-[#5C6880]">No</td><td className="py-3 px-3 text-[#5C6880]">Basic</td><td className="py-3 px-3 text-[#5C6880]">Full with markup</td></tr>
                  <tr><td className="py-3 px-3 font-medium text-[#1A2236]">Best for</td><td className="py-3 px-3 text-[#5C6880]">Solo business or freelancer testing GHL</td><td className="py-3 px-3 text-[#5C6880]">Agencies managing multiple client accounts</td><td className="py-3 px-3 text-[#5C6880]">Agencies reselling GHL as their own software</td></tr>
                </tbody>
              </table>
            </div>

            {/* CTA Button 3: After Plans Comparison */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Not sure which plan is right for you?</span> Let our team help you choose.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Plan Advice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 2: Starter Plan */}
            <h2 id="starter-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. GoHighLevel Starter Plan $97/month
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Solo operators, single-location service businesses, coaches,
              and freelancers who want an all-in-one platform for their own business not client management.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">What's included:</p>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                <li>Full CRM with unlimited contacts pipelines, tags, custom fields, smart lists, unified conversation inbox</li>
                <li>Funnel & website builder unlimited funnels, landing pages, and a full website builder</li>
                <li>Email & SMS marketing broadcast campaigns and automated drip sequences</li>
                <li>Workflow automation triggers, actions, If/Else conditions, and wait steps</li>
                <li>Booking calendar appointment scheduling with automated reminders and Google Calendar sync</li>
                <li>Reputation management automated review requests and response tools</li>
                <li>Course/membership hosting drip content, quizzes, and progress tracking</li>
                <li>Social media planner schedule posts across Facebook, Instagram, Google Business, and LinkedIn</li>
              </ul>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-1">STARTER IS RIGHT IF:</p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                You run one business and want to replace your CRM, funnel builder, email tool, and calendar in one subscription.
                At $97/month, Starter replaces tools that typically cost $300–$500/month separately: Calendly ($12), Mailchimp ($50),
                ClickFunnels ($97), and Pipedrive ($49) all at once.
              </p>
            </div>

            {/* Section 3: Unlimited Plan */}
            <h2 id="unlimited-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. GoHighLevel Unlimited Plan $297/month
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Marketing agencies managing multiple client accounts.
              This is the plan where GoHighLevel becomes a genuine business model, not just a tool.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">Everything in Starter, plus:</p>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                <li>Unlimited sub-accounts no ceiling on how many clients you can manage</li>
                <li>White-label desktop app brand the login portal with your logo, colors, and domain</li>
                <li>Snapshot system create a master setup once and deploy it to new client accounts in minutes</li>
                <li>Enhanced API access connect GHL to external tools and data sources</li>
                <li>Re-billing capability charge clients for their SMS, email, and call usage with a small markup</li>
              </ul>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-1">THE AGENCY MATH:</p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                At $297/month, you have unlimited client accounts. If you charge 5 clients $300/month each for their GHL sub-account
                and management you're earning $1,500/month against a $297 platform cost. The plan pays for itself with the first client.
              </p>
            </div>

            {/* CTA Button 4: After Unlimited Plan */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🚀 Ready to scale your agency with Unlimited?</p>
              <p className="text-sm text-white/80 mb-4">Get your GHL account set up correctly from day one with expert help.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get Agency Setup
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 4: Agency Pro Plan */}
            <h2 id="agency-pro-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. GoHighLevel Agency Pro (SaaS Plan) $497/month
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Best for:</strong> Agencies that want to run a software business reselling
              GoHighLevel under their own brand as their own SaaS product.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">Everything in Unlimited, plus:</p>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                <li>SaaS Mode activated build a full white-label software product with your own pricing tiers</li>
                <li>SaaS Configurator create Starter/Pro/Enterprise plans under your brand</li>
                <li>Automated sub-account provisioning when a client pays, their account is created automatically</li>
                <li>White-label mobile app your own branded iOS/Android app for clients ($49/month add-on)</li>
                <li>Full markup control set your own prices for client SMS, email, AI, and call usage</li>
                <li>AI Employee rebilling only Agency Pro can rebill AI usage to clients</li>
              </ul>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE SAAS ECONOMICS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Agency Pro breaks even at 2 clients paying $297/month for their sub-account access. At 10 clients paying $197/month each:
                $1,970 revenue against $497 fixed cost. <strong className="text-white">That's $1,473/month net before any service fees.</strong>
                The plan transforms GHL from a cost into a revenue centre.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Need help setting up SaaS Mode correctly? <Link href="/contact" className="text-[#0E9BF0] hover:underline">Book a free call with GHL Scale Up</Link> we've built 200+ GHL systems including SaaS Mode setups.
            </p>

            {/* Section 5: Annual vs Monthly */}
            <h2 id="annual-vs-monthly" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Annual vs Monthly Billing The Savings Breakdown
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel annual billing saves approximately 17% compared to monthly the equivalent of two months free.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annual cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">You save</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Starter</td><td className="py-3 px-3">$97/mo</td><td className="py-3 px-3">$970/yr</td><td className="py-3 px-3 text-[#25C97D]">$194/yr</td><td className="py-3 px-3">~$81/mo</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Unlimited</td><td className="py-3 px-3">$297/mo</td><td className="py-3 px-3">$2,970/yr</td><td className="py-3 px-3 text-[#25C97D]">$594/yr</td><td className="py-3 px-3">~$248/mo</td></tr>
                  <tr><td className="py-3 px-3 font-medium text-[#1A2236]">Agency Pro</td><td className="py-3 px-3">$497/mo</td><td className="py-3 px-3">$4,970/yr</td><td className="py-3 px-3 text-[#25C97D]">$994/yr</td><td className="py-3 px-3">~$414/mo</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-1">WHEN TO PAY ANNUALLY:</p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Annual billing makes sense when you have validated the platform works for your business (past your first 60–90 days)
                and are confident in the plan you're on. Do not pay annually while still testing GHL does not offer refunds on subscriptions.
              </p>
            </div>

            {/* Section 6: Usage Fees */}
            <h2 id="usage-fees" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. The Real Costs: Usage Fees Explained
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the section most pricing guides skip. GoHighLevel's base plan covers platform access. The moment you start sending
              messages, making calls, or using AI features, additional usage fees apply.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Service</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {usageFees.map((fee, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{fee.service}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{fee.cost}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{fee.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">2026 UPDATE CARRIER FEE INCREASES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                AT&T increased carrier surcharges effective April 1, 2026. Verizon followed May 1, 2026. These apply to all US business
                SMS regardless of platform. If you run high-volume SMS campaigns, build a 10–15% buffer into your client rebilling margins.
              </p>
            </div>

            {/* Section 7: AI Pricing */}
            <h2 id="ai-pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. GoHighLevel AI Pricing in 2026
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's AI features Conversation AI, Voice AI, Reviews AI, Content AI are <strong>not included in the base plan price.</strong>
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">AI Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Pay-as-you-go rate</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Unlimited plan</th>
                  </tr>
                </thead>
                <tbody>
                  {aiPricing.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.paygo}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.unlimited}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">IMPORTANT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The $97/mo AI Employee Unlimited is <strong>per sub-account not per agency.</strong> If you have 10 clients each with
                AI Employee Unlimited, that's $970/month in AI costs on top of your platform subscription. For most agencies, the
                pay-as-you-go model is more cost-effective unless a specific client sub-account uses AI heavily every day.
              </p>
            </div>

            {/* CTA Button 5: After AI Pricing */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🤖 Confused by AI pricing?</p>
              <p className="text-sm text-white/80 mb-4">Let us help you figure out the most cost-effective AI setup for your business.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Get AI Pricing Advice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 8: Real Cost Scenarios */}
            <h2 id="real-cost-scenarios" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. Real Monthly Cost Scenarios
            </h2>

            <div className="space-y-4 mb-6">
              {scenarios.map((scenario, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-3">{scenario.name}</h3>
                  <ul className="space-y-1 text-sm text-[#5C6880] mb-3">
                    {scenario.details.map((detail, i) => <li key={i}>• {detail}</li>)}
                  </ul>
                  <p className="text-sm text-[#5C6880] mb-2"><strong className="text-[#1A2236]">Breakdown:</strong> {scenario.costs.join(' · ')}</p>
                  <p className="text-sm font-semibold text-[#0E9BF0] mb-2"><strong>Estimated total:</strong> {scenario.total}</p>
                  <p className="text-sm text-[#25C97D]">{scenario.replaces}</p>
                </div>
              ))}
            </div>

            {/* CTA Button 6: Before Which Plan */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Want a custom cost estimate for your business?</p>
              <p className="text-sm text-white/80 mb-4">We'll calculate your exact GHL costs based on your usage and help you pick the right plan.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get Custom Cost Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 9: Which Plan */}
            <h2 id="which-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. Which GoHighLevel Plan Is Right for You?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Recommended plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {recommendations.map((rec, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{rec.situation}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{rec.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{rec.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NOT SURE WHICH PLAN FITS YOUR SITUATION?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                At GHL Scale Up, we help businesses choose the right GHL plan and set it up correctly from day one.
                We've built 200+ GHL systems across real estate, healthcare, SaaS, and agencies in 6 countries.
                A 30-minute call saves months of trial and error on the wrong plan.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free strategy call at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* CTA Button 7: After Which Plan */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">⚠️ On the wrong GHL plan?</p>
              <p className="text-white/60 text-sm mb-4">Let our team review your current setup and tell you if you're overpaying or underutilising the platform.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Shield className="w-4 h-4" />
                  Get a Plan Review
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services/saas-setup"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Trophy className="w-4 h-4" />
                  See SaaS Setup
                </Link>
              </div>
            </div>

            {/* Section 10: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              10. Frequently Asked Questions About GoHighLevel Pricing
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

            {/* CTA Button 8: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About GHL Pricing?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our GHL experts directly. We'll help you find the most cost-effective plan for your business.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create and Use a GoHighLevel Snapshot →</Link>
                <Link href="/blog/best-ghl-expert-agency" className="text-sm text-[#0E9BF0] hover:underline">Best GHL Expert Agency to Hire in 2026 →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Starting GoHighLevel or switching plans?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Get the right setup from day one. Most GHL accounts are built on the wrong plan with a partial setup.
                  A 30-minute call tells you exactly what plan fits, what it will cost, and what a production-ready setup
                  looks like for your business.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free GHL Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

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