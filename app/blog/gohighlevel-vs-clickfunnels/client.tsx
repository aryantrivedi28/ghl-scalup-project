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
  Compass,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Award,
  BarChart3,
  Shield,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import BookingModal from '@/components/BookingModal'
import { Button } from '../../../components/ui/button';

export default function GoHighLevelVsClickFunnelsClient() {
  const [activeId, setActiveId] = useState<string>('');
      const [openBooking, setOpenBooking] = useState(false);
    
      const handleOpenBooking = () => {
        setOpenBooking(true);
      };

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-built-for',
        'pricing-comparison',
        'feature-comparison',
        'patent-lawsuit',
        'when-clickfunnels-right',
        'switching-process',
        'verdict',
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
      q: "Is GoHighLevel better than ClickFunnels?",
      a: "For agencies managing multiple client accounts, yes GoHighLevel's flat-rate, unlimited-client architecture, native SMS, and CRM have no ClickFunnels equivalent. For a solo entrepreneur who only needs funnels, ClickFunnels' more polished, purpose-built page editor is a genuine advantage. Neither is objectively better; it depends on whether you're building for one business or several."
    },
    {
      q: "Can GoHighLevel replace ClickFunnels?",
      a: "For most agency and multi-channel use cases, yes. GoHighLevel includes a funnel builder, CRM, SMS, automation, and booking in one platform. The main reason to keep ClickFunnels is its more mature page-design tooling and its training ecosystem, both of which remain genuinely stronger than GoHighLevel's equivalents."
    },
    {
      q: "How does GoHighLevel vs ClickFunnels pricing compare in 2026?",
      a: "Both platforms have a $97/month entry tier and a $297/month higher tier. GoHighLevel's $297 Unlimited plan covers unlimited client sub-accounts and every platform feature. ClickFunnels' $297 Pro plan covers unlimited funnels and contacts for one business, with no CRM depth, native SMS, or white-label option. ClickFunnels consolidated from a three-tier structure to these two plans in 2024 comparisons citing a middle $197 tier are describing the discontinued structure."
    },
    {
      q: "Does ClickFunnels have a CRM?",
      a: "ClickFunnels 2.0 has basic contact management, but it isn't a full CRM no smart lists, no native 2-way SMS, no conversation inbox, and no tag-based automation depth. Businesses that need real CRM functionality alongside funnels are better served by GoHighLevel."
    },
    {
      q: "What happened with the ClickFunnels lawsuit against GoHighLevel?",
      a: "ClickFunnels sued HighLevel for patent infringement in 2024. The case was dismissed, and the U.S. Court of Appeals for the Federal Circuit affirmed that dismissal on July 2, 2026 HighLevel is the prevailing party. Both platforms operated normally throughout the litigation and continue to do so."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-built-for', title: 'What Each Platform Is Actually Built For' },
    { id: 'pricing-comparison', title: 'GoHighLevel vs ClickFunnels Pricing (Current 2026 Figures)' },
    { id: 'feature-comparison', title: 'Feature Comparison: Where Each Platform Actually Wins' },
    { id: 'patent-lawsuit', title: 'The Patent Lawsuit, Updated' },
    { id: 'when-clickfunnels-right', title: 'When Is ClickFunnels Still the Right Choice?' },
    { id: 'switching-process', title: 'What Does Switching from ClickFunnels to GoHighLevel Involve?' },
    { id: 'verdict', title: 'The Verdict: Which Platform Should You Choose?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const pricingData = [
    { tier: 'Entry plan', ghl: '$97/mo Starter, 3 sub-accounts, unlimited contacts', clickfunnels: '$97/mo Startup: 3 brand workspaces, 20 funnels, 100 pages, 10,000 contacts, 1 user seat' },
    { tier: 'Top plan', ghl: '$297/mo Unlimited, unlimited sub-accounts, white-label', clickfunnels: '$297/mo Pro: unlimited funnels/pages/contacts, Backpack affiliate management, 5 user seats' },
    { tier: 'Highest tier', ghl: '$497/mo Agency Pro, SaaS Mode, white-label mobile app', clickfunnels: 'No higher tier currently offered' },
    { tier: 'Native SMS', ghl: 'Yes, included on every plan', clickfunnels: 'No requires third-party integration (e.g., Twilio)' },
    { tier: 'Order bumps / one-click upsells', ghl: 'Yes, native', clickfunnels: 'Yes, native a mature, original ClickFunnels feature' },
    { tier: 'White-label capability', ghl: 'Yes (Unlimited and Agency Pro)', clickfunnels: 'Not available' },
  ];

  const featureData = [
    { feature: 'Funnel and page design quality', winner: 'ClickFunnels', why: 'More mature page editor and template library independent reviewers consistently rate ClickFunnels\' design polish above GoHighLevel\'s' },
    { feature: 'Order bumps and one-click upsells', winner: 'Tie', why: 'Both platforms support this natively; ClickFunnels pioneered the mechanic, GoHighLevel replicates it well' },
    { feature: 'Native SMS', winner: 'GoHighLevel', why: 'ClickFunnels has no native SMS at any tier' },
    { feature: 'CRM and contact management', winner: 'GoHighLevel', why: 'Full CRM with smart lists and tagging vs. ClickFunnels\' basic contact list' },
    { feature: 'Multi-client / sub-account management', winner: 'GoHighLevel', why: 'No ClickFunnels equivalent at any price' },
    { feature: 'AI features (Voice AI, Conversation AI)', winner: 'GoHighLevel', why: 'ClickFunnels has no comparable native AI feature set' },
    { feature: 'White-label / SaaS resale', winner: 'GoHighLevel', why: 'Not available on ClickFunnels at any tier' },
    { feature: 'Learning curve for beginners', winner: 'ClickFunnels', why: 'Narrower feature set makes the platform faster to learn' },
    { feature: 'Training ecosystem and community', winner: 'ClickFunnels', why: 'FunnelHacker community and associated training are more developed than GHL\'s equivalent' },
  ];

  const verdictData = [
    { situation: 'Marketing agency managing 3+ client accounts', platform: 'GoHighLevel Unlimited ($297/mo)', why: 'Sub-account architecture; ClickFunnels has no equivalent' },
    { situation: 'Solo entrepreneur, funnels only', platform: 'ClickFunnels Startup ($97/mo)', why: 'More polished page editor, lower learning curve, no need for CRM/SMS' },
    { situation: 'Service business needing SMS and booking', platform: 'GoHighLevel Starter ($97/mo)', why: 'Native SMS, AI features, booking calendar built in' },
    { situation: 'Agency wanting to resell as SaaS', platform: 'GoHighLevel Agency Pro ($497/mo)', why: 'ClickFunnels has no white-label option at any tier' },
    { situation: 'Course creator deep in the FunnelHacker ecosystem', platform: 'ClickFunnels Pro ($297/mo)', why: 'Training and community value may outweigh GHL\'s broader feature set' },
    { situation: 'Currently on ClickFunnels, adding clients or needing SMS/CRM', platform: 'Consider migrating to GoHighLevel', why: 'Cost and capability both favor the switch once multi-client needs appear' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel vs ClickFunnels 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL vs ClickFunnels</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel vs ClickFunnels (2026):<br />
            <span className="text-[#F8D000]">Which Platform Fits Your Business?</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered on both platforms · Pricing and legal status independently verified, September 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            GoHighLevel and ClickFunnels both build funnels, but that's roughly where the similarity ends. ClickFunnels is a dedicated funnel and page-building tool with a mature design editor. GoHighLevel is a broader agency platform where funnels are one feature among many. The right choice depends on whether you need funnel-building depth for one business or multi-channel breadth for managing several.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              GoHighLevel is the stronger fit for agencies managing multiple client accounts its sub-account architecture has no ClickFunnels equivalent. ClickFunnels is the stronger fit for a solo entrepreneur or course creator who wants the most polished funnel-building experience for a single business and doesn't need a CRM, native SMS, or multi-client infrastructure. At $297/month, GoHighLevel gives unlimited client accounts and every platform feature; ClickFunnels' $297/month Pro plan covers one business with unlimited funnels and contacts, but no CRM depth, no native SMS, and no white-label option.
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
                5+ years GHL experience · 200+ systems built globally. We have built on both platforms and migrated clients from ClickFunnels to GoHighLevel dozens of times.
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
              <div className="text-sm font-bold text-white mb-2">Not Sure Which Platform Is Right?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help you choose the right platform and set it up correctly.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Advice
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
            <h2 id="what-built-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Each Platform Is Actually Built For
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel was designed for agencies managing systems for multiple clients. The sub-account model, Snapshots, white-labeling, and SaaS Mode all exist because the platform assumes one operator runs many separate client environments.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              ClickFunnels was built for entrepreneurs, course creators, and product sellers who need to build high-converting funnels quickly, without the complexity of a broader CRM or agency platform underneath.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The simple test: are you building marketing systems for other businesses, or running funnels for your own? If you manage clients, GoHighLevel's architecture fits that job directly see{' '}
              <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline">GoHighLevel for agencies</Link> for the full picture. If you run one business's funnels, both platforms can work, and the choice comes down to the trade-offs below.
            </p>

            {/* Section 2: Pricing */}
            <h2 id="pricing-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs ClickFunnels Pricing (Current 2026 Figures)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              ClickFunnels restructured its pricing in 2024, consolidating what used to be three plans (Basic/Pro/Funnel Hacker) into two: Startup and Pro. Several older comparison articles, including a prior version of this one, still describe the old three-tier structure the figures below reflect the current plans.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ClickFunnels</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.tier}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.clickfunnels}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a solo business with one funnel-focused offer, ClickFunnels Pro at $297/month and GoHighLevel Unlimited at $297/month cost the same the difference is entirely in what's included beyond funnels. For an agency managing several clients, GoHighLevel's flat rate covers unlimited accounts where ClickFunnels has no equivalent structure at all. For the full GoHighLevel pricing breakdown, see the{' '}
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing guide</Link>.
            </p>

            {/* Section 3: Feature Comparison */}
            <h2 id="feature-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature Comparison: Where Each Platform Actually Wins
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Winner</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {featureData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.winner}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 4: The Patent Lawsuit */}
            <h2 id="patent-lawsuit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Patent Lawsuit, Updated
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In April 2024, ClickFunnels (legally Etison LLC) sued HighLevel Inc. in Delaware federal court, alleging that GoHighLevel's funnel-building features infringed on ClickFunnels' patents covering "website creation systems" with directional webpage sequences. <strong>This has since been resolved in HighLevel's favor:</strong> the district court dismissed the case, finding the patents ineligible for protection under Section 101 of the U.S. Patent Act, and on July 2, 2026, the U.S. Court of Appeals for the Federal Circuit affirmed that dismissal. HighLevel is the prevailing party as of this writing, though additional appeals may still be possible.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Practically, this changes nothing about either platform's day-to-day functionality both continued operating normally throughout the litigation. It's worth knowing mainly as a due-diligence data point: the dispute is a resolved legal matter, not an open risk to either platform's continued operation.
            </p>

            {/* Section 5: When ClickFunnels Is Still the Right Choice */}
            <h2 id="when-clickfunnels-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Is ClickFunnels Still the Right Choice?
            </h2>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm text-[#1A2236]"><strong>You're a solo entrepreneur or course creator who only needs funnels.</strong> If your business is one offer built around a handful of funnels, ClickFunnels' more polished page editor and mature template library get you to a professional-looking result faster than GoHighLevel's broader, less funnel-specialized builder.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm text-[#1A2236]"><strong>You're non-technical and want the fastest path to your first funnel live.</strong> ClickFunnels is consistently rated easier to learn than GoHighLevel precisely because it does less there's no CRM, automation builder, or agency layer to learn around.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm text-[#1A2236]"><strong>You're already invested in the FunnelHacker ecosystem.</strong> The training content, community, and event ecosystem (Funnel Builder Secrets, Two Comma Club) built around ClickFunnels is more developed than GoHighLevel's equivalent, and that has real value if you learn primarily through that community.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm text-[#1A2236]"><strong>You don't need a CRM, native SMS, or multi-client management at all.</strong> If your business genuinely only needs funnels and basic email, GoHighLevel's additional capability is capability you're paying for and not using.</p>
              </div>
            </div>

            {/* Section 6: Switching Process */}
            <h2 id="switching-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does Switching from ClickFunnels to GoHighLevel Involve?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the comparison above points toward switching, GoHighLevel has a URL import tool that clones your ClickFunnels page designs, though automations, payment connections, and tracking all need manual rebuilding. For the complete technical walkthrough, what specifically breaks, and realistic timelines, see{' '}
              <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">How to Migrate from ClickFunnels to GoHighLevel</Link>.
            </p>

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

            {/* Section 8: FAQ */}
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
              Still weighing your options? See our{' '}
              <Link href="/blog/gohighlevel-alternatives" className="text-[#0E9BF0] hover:underline">GoHighLevel alternatives roundup</Link>. Want a direct recommendation for your specific setup?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free platform strategy call</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from ClickFunnels to GoHighLevel →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/gohighlevel-alternatives" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Alternatives Roundup →</Link>
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
                <Link href="/blog/gohighlevel-vs-activecampaign" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs ActiveCampaign: Honest 2026 Comparison →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Considering GoHighLevel over ClickFunnels?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds GoHighLevel systems that actually work. CRM setup, funnel build, automation, AI Voice Agent, and white-label configuration all done in 5 to 7 business days. 200+ builds delivered.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Strategy Call
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