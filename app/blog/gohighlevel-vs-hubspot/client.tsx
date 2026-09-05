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
  DollarSign,
  Rocket,
  Target,
  CheckCircle2,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import BookingModal from '@/components/BookingModal'
import { Button } from '../../../components/ui/button';

export default function GoHighLevelVsHubSpotClient() {
  const [activeId, setActiveId] = useState<string>('');
    const [openBooking, setOpenBooking] = useState(false);
  
    const handleOpenBooking = () => {
      setOpenBooking(true);
    };

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-platforms-built-for',
        'pricing-comparison',
        'breadth-vs-depth',
        'feature-comparison',
        'agency-use-case',
        'when-hubspot-right',
        'verdict',
        'what-if-already-on-hubspot',
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
      q: "Is GoHighLevel better than HubSpot?",
      a: "GoHighLevel is better for marketing agencies managing multiple client accounts and service businesses needing native SMS and white-label capability. HubSpot is better for enterprise B2B companies with complex sales cycles and businesses needing deep third-party integrations. The answer depends on your business model, not on either platform being objectively superior."
    },
    {
      q: "How much does GoHighLevel cost compared to HubSpot?",
      a: "GoHighLevel runs $97, $297, or $497/month flat, with unlimited contacts and users on every tier. HubSpot starts free but scales quickly Marketing Hub Professional is $890/month for 2,000 contacts and 3 seats, plus a mandatory $3,000 onboarding fee. For a 10-client agency, GoHighLevel costs $297/month total versus roughly $8,900/month on HubSpot."
    },
    {
      q: "Can GoHighLevel replace HubSpot?",
      a: "For most agencies and service businesses, yes GoHighLevel covers CRM, pipelines, email, SMS, automation, booking, and funnels in one platform. The scenarios where HubSpot can't be replaced by GoHighLevel: enterprises needing deep third-party integrations, complex B2B lifecycle reporting, or predictive AI at the Enterprise tier."
    },
    {
      q: "Does HubSpot have a white-label option?",
      a: "No, at any pricing tier. GoHighLevel offers white-label branding on the Unlimited plan and full SaaS Mode with a white-label mobile app on Agency Pro."
    },
    {
      q: "What does HubSpot do better than GoHighLevel?",
      a: "Third-party integrations (1,500+ vs. 200+), enterprise reporting and multi-touch attribution, predictive lead scoring, contact timeline depth, and enterprise-grade permissions and governance. For large organizations with dedicated marketing and sales teams, this depth often justifies the higher cost."
    },
    {
      q: "Can I migrate from HubSpot to GoHighLevel?",
      a: "Yes. The process involves exporting contact and deal data, rebuilding pipelines and automations, and running both platforms in parallel before cutover. Timelines vary by account complexity see the full migration guide for a realistic breakdown by account size rather than a single number."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-platforms-built-for', title: 'What Each Platform Is Actually Built For' },
    { id: 'pricing-comparison', title: 'GoHighLevel vs HubSpot: Pricing Comparison (Verified 2026 Figures)' },
    { id: 'breadth-vs-depth', title: 'Breadth vs. Depth: Why Feature-Counting Misleads' },
    { id: 'feature-comparison', title: 'Feature Comparison: Where Each Platform Wins' },
    { id: 'agency-use-case', title: 'Agency Use Case: Where GoHighLevel\'s Architecture Fits' },
    { id: 'when-hubspot-right', title: 'When HubSpot Is the Right Choice' },
    { id: 'verdict', title: 'The Verdict: Which Platform Should You Choose?' },
    { id: 'what-if-already-on-hubspot', title: 'What If You\'re Already on HubSpot?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const pricingData = [
    { label: 'Entry plan', ghl: '$97/mo (Starter, 3 sub-accounts)', hubspot: 'Free CRM (limited features, no automation)' },
    { label: 'Mid-tier plan', ghl: '$297/mo (Unlimited, unlimited clients)', hubspot: '$890/mo (Marketing Hub Pro, 3 seats, 2,000 contacts)' },
    { label: 'Advanced plan', ghl: '$497/mo (Agency Pro, SaaS Mode)', hubspot: '$3,600/mo (Marketing Hub Enterprise, 5 seats, 10,000 contacts)' },
    { label: 'Contacts', ghl: 'Unlimited on all plans', hubspot: 'Scales with cost roughly $225–$250/mo per extra 5,000 on Pro' },
    { label: 'Users/seats', ghl: 'Unlimited on all plans', hubspot: '$45–$75/mo per additional seat beyond base' },
    { label: 'Onboarding fee', ghl: 'None', hubspot: '$3,000 (Pro) or $7,000 (Enterprise), mandatory' },
    { label: 'White-labeling', ghl: 'Yes (Unlimited and Agency Pro)', hubspot: 'Not available at any tier' },
  ];

  const featureData = [
    { feature: 'CRM & pipelines', ghl: 'Full CRM, unlimited pipelines, tags, smart lists', hubspot: 'Predictive lead scoring, deeper contact timeline, progressive profiling', winner: 'HubSpot (depth) / GHL (cost)' },
    { feature: 'Marketing automation', ghl: 'Visual builder, 30+ triggers, 100+ actions, AI steps', hubspot: 'Multi-touch attribution, smart content, behavioral scoring', winner: 'HubSpot (enterprise reporting) / GHL (value)' },
    { feature: 'SMS marketing', ghl: 'Native, usage-based pricing', hubspot: 'No native SMS requires third-party integration', winner: 'GoHighLevel' },
    { feature: 'Funnel/landing pages', ghl: 'Unlimited, native, no extra cost', hubspot: 'Available on Pro+; no dedicated funnel builder', winner: 'GoHighLevel' },
    { feature: 'White-label / resale', ghl: 'Full white-label + SaaS Mode on Agency Pro', hubspot: 'Not available at any tier', winner: 'GoHighLevel' },
    { feature: 'Multi-client management', ghl: 'Native sub-account architecture', hubspot: 'No equivalent separate accounts per client', winner: 'GoHighLevel' },
    { feature: 'Third-party integrations', ghl: '200+ native + Zapier/API', hubspot: '1,500+ native, deeper ecosystem', winner: 'HubSpot' },
    { feature: 'Reporting & analytics', ghl: 'Functional for agency needs', hubspot: 'Multi-touch attribution, revenue reporting (Enterprise)', winner: 'HubSpot' },
    { feature: 'Course/membership hosting', ghl: 'Built in on all plans', hubspot: 'Not available natively', winner: 'GoHighLevel' },
  ];

  const verdictData = [
    { situation: 'Marketing agency with 3+ client accounts', platform: 'GoHighLevel Unlimited ($297/mo)', why: 'Sub-account architecture, unlimited clients at flat cost' },
    { situation: 'Agency wanting to resell a branded SaaS product', platform: 'GoHighLevel Agency Pro ($497/mo)', why: 'SaaS Mode + white-label; HubSpot has no equivalent' },
    { situation: 'Service business (real estate, dental, home services)', platform: 'GoHighLevel Starter ($97/mo)', why: 'Native SMS and AI Voice Agent; HubSpot has no native SMS' },
    { situation: 'Growing B2B business with dedicated marketing team', platform: 'HubSpot Marketing Hub Pro ($890/mo)', why: 'Multi-touch attribution and behavioral scoring for complex pipelines' },
    { situation: 'Enterprise company with a large marketing org', platform: 'HubSpot Enterprise ($3,600/mo)', why: 'Governance, compliance, and multi-hub integration at scale' },
    { situation: 'Currently on HubSpot with 3+ agency clients', platform: 'Consider migrating to GoHighLevel', why: 'Cost savings and sub-account architecture' },
    { situation: 'Currently on HubSpot with complex B2B sales cycles', platform: 'Stay on HubSpot', why: 'Attribution depth and pipeline reporting justify the cost here' },
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Button
        onClick={handleOpenBooking}
        // href="/contact" 
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
          <span className="text-[#1A2236] font-medium">GoHighLevel vs HubSpot 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL vs HubSpot</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Comparison</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel vs HubSpot:<br />
            <span className="text-[#F8D000]">Which Platform Is Right for Your Business? (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered · Pricing independently verified against current official and third-party sources, September 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            GoHighLevel and HubSpot overlap significantly on paper both offer CRM, marketing automation, and sales tools but they were built for different buyers, and choosing based on feature-count alone leads to the wrong decision. This comparison uses verified pricing, a category-by-category feature breakdown, and honest treatment of where each platform actually wins.
          </p>

          {/* Quick Verdict Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick verdict</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              GoHighLevel is generally the stronger fit when you manage multiple client accounts, need native SMS, or want to white-label and resell the platform. HubSpot is generally the stronger fit when you're a single business with a dedicated marketing/sales team, complex B2B sales cycles, or a need for deep third-party integrations and enterprise-grade reporting. For a 10-client agency, GoHighLevel Unlimited runs $297/month total; the equivalent HubSpot setup (10 separate Marketing Hub Professional accounts) runs roughly $8,900/month. That gap is decisive for most agencies, but it isn't the whole picture read on for where HubSpot's depth genuinely justifies its cost.
            </p>
          </div>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Platform Advice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#verdict"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Verdict
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
                5+ years GHL experience · 200+ builds delivered globally. We have migrated dozens of businesses from HubSpot to GoHighLevel. HubSpot pricing verified from official HubSpot documentation May 2026. GoHighLevel pricing verified from official GHL documentation May 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Deciding?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We've helped 200+ businesses choose the right platform and set it up correctly.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
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

            {/* Mobile Project Help Card - visible on mobile only */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section 1: What Each Platform Is Actually Built For */}
            <h2 id="what-platforms-built-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Each Platform Is Actually Built For
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's architecture is agency-first by design. Sub-accounts, Snapshots, and SaaS Mode exist specifically to let one agency manage many separate client environments from a single dashboard, with unlimited contacts and users on every plan.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HubSpot was designed for a single company's internal team. Its Hub structure (Marketing, Sales, Service, Operations) maps to internal departments sharing one contact database it isn't built with multi-client agency delivery in mind.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The practical test: are you building marketing systems for other businesses, or running marketing for your own? If you manage multiple clients, that structural difference matters more than any individual feature.
            </p>

            {/* Section 2: Pricing Comparison */}
            <h2 id="pricing-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs HubSpot: Pricing Comparison (Verified 2026 Figures)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Pricing is where most comparisons stop at headline numbers. These figures were independently checked against current official and third-party sources rather than carried over from an earlier version of this page.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.label}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-6">
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                <strong>The 10-client agency scenario:</strong> GoHighLevel Unlimited covers all 10 clients in separate sub-accounts for a flat $297/month. HubSpot has no sub-account equivalent, so 10 clients require 10 separate Marketing Hub Professional accounts at $890/month each roughly $8,900/month. Neither number is the full story: GoHighLevel adds usage-based fees for SMS, email, and AI features (typically $20–$150/month depending on volume), and HubSpot's contact-scaling costs compound as any client list grows. Factor both in before comparing headline prices directly.
              </p>
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed mt-3">
                For the complete GoHighLevel pricing breakdown including every usage fee, see the{' '}
                <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">full GoHighLevel pricing guide</Link>.
              </p>
            </div>

            {/* Section 3: Breadth vs. Depth */}
            <h2 id="breadth-vs-depth" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Breadth vs. Depth: Why Feature-Counting Misleads
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most comparisons treat "more features" as "better platform." That's the wrong lens here. <strong>GoHighLevel is built for breadth</strong> CRM, funnels, SMS, booking, reputation management, and course hosting all live in one flat-rate platform, each covering the core of what a service business or agency client needs. <strong>HubSpot is built for depth</strong> in a narrower set of functions its CRM, attribution modeling, and lead scoring go further than GoHighLevel's equivalents, at a correspondingly higher cost and narrower scope.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Neither approach is objectively better. An agency running 10 straightforward client accounts benefits more from GoHighLevel's breadth at a flat cost than from any single feature's extra depth. A B2B company running one complex, long-cycle sales process benefits more from HubSpot's depth in that one area than from GoHighLevel's wider but shallower toolset. This distinction is the actual basis for the rest of this comparison.
            </p>

            {/* Section 4: Feature Comparison */}
            <h2 id="feature-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature Comparison: Where Each Platform Wins
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {featureData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-medium">{item.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5: Agency Use Case */}
            <h2 id="agency-use-case" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Agency Use Case: Where GoHighLevel's Architecture Fits
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you build, configure, or manage marketing systems for other businesses, GoHighLevel's structural decisions solve problems HubSpot wasn't designed to address.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">Sub-accounts</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                each client gets an isolated environment their own CRM, funnels, contacts, automations, and phone numbers managed from one agency dashboard. HubSpot has no equivalent; each client requires a fully separate account.
              </p>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">Snapshots</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                a reusable template of a complete client setup, deployable to a new account in minutes rather than hours. For an agency onboarding several clients a month, this compounds quickly.
              </p>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">SaaS resale</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                only GoHighLevel allows white-labeling the entire platform and reselling it as a branded product HubSpot offers no white-label option at any tier.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a fuller look at how agencies structure this, see{' '}
              <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline">GoHighLevel for agencies</Link>.
            </p>

            {/* Section 6: When HubSpot Is Right */}
            <h2 id="when-hubspot-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When HubSpot Is the Right Choice
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An honest comparison acknowledges where the alternative wins outright. HubSpot is the better choice in several well-defined scenarios, not just as a fallback:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">Enterprise B2B companies with complex sales cycles.</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">HubSpot's contact timeline, predictive lead scoring, and multi-touch attribution are built for tracking a prospect across months of touchpoints before a deal closes a use case GoHighLevel's flatter CRM model doesn't address as deeply.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">Large in-house teams needing governance.</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">Enterprise permissions, audit logs, and role-based access are built for organizations with dozens of internal users who each need different, controlled levels of access not a single agency operator managing external client accounts.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">Businesses needing deep third-party integrations.</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">At 1,500+ native integrations against GoHighLevel's 200+, HubSpot's ecosystem is genuinely broader this matters most for companies with an existing stack of specialized tools that need to stay connected.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">Product-led growth companies.</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">HubSpot's behavioral tracking, custom objects, and event-based scoring suit product-qualified-lead models more directly than GoHighLevel's agency-oriented toolset was designed for.</p>
              </div>
            </div>

            {/* Section 7: Verdict */}
            <h2 id="verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Verdict: Which Platform Should You Choose?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Recommended Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {verdictData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.situation}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 8: What If You're Already on HubSpot */}
            <h2 id="what-if-already-on-hubspot" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What If You're Already on HubSpot?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the comparison above points you toward switching, the practical next question is execution, not decision-making and that's a different guide's job. Migrating from HubSpot to GoHighLevel involves exporting your contact and deal data, rebuilding pipelines and automations in GHL, and running both platforms in parallel before cutover. For the full technical walkthrough, realistic timelines by account size, and the mistakes to avoid, see{' '}
              <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel</Link>.
            </p>

            {/* Section 9: FAQ */}
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

            {/* Closing section with links */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still deciding, or think neither platform is quite right? See our{' '}
              <Link href="/blog/gohighlevel-alternatives" className="text-[#0E9BF0] hover:underline">GoHighLevel alternatives comparison</Link>, or read our full{' '}
              <Link href="/blog/gohighlevel-review" className="text-[#0E9BF0] hover:underline">GoHighLevel review</Link> for a standalone evaluation. Curious why other agencies are making the switch? See{' '}
              <Link href="/blog/why-agencies-switching-to-gohighlevel" className="text-[#0E9BF0] hover:underline">why agencies are switching to GoHighLevel</Link>. Want a direct recommendation for your specific setup?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free platform strategy call</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel Migration Guide →</Link>
                <Link href="/blog/gohighlevel-alternatives" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Alternatives Comparison →</Link>
                <Link href="/blog/gohighlevel-review" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Review 2026 →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/why-agencies-switching-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Why Agencies Are Switching to GoHighLevel →</Link>
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Still deciding which platform is right for you?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We'll review your business model, contact volume, and revenue channels and tell you honestly which platform fits no sales pitch, just data.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Platform Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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