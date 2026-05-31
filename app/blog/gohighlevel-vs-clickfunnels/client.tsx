'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Zap,
  DollarSign,
  Users,
  Calendar,
  MessageCircle,
  Phone,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Star,
  AlertTriangle,
  CreditCard,
  Clock,
  Mail,
  Funnel,
  Compass
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelVsClickFunnelsClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-built-for',
        'pricing-comparison',
        'feature-comparison',
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
      a: "For marketing agencies managing multiple client accounts, yes GoHighLevel is better. It offers a flat $297/month price for unlimited clients, native SMS, AI features, white-label branding, and CRM capabilities that ClickFunnels does not have at any tier. For solo entrepreneurs who only need funnel building and simple email sequences, ClickFunnels is a simpler and faster starting point. The answer depends entirely on whether you are managing one business or multiple clients."
    },
    {
      q: "Can GoHighLevel replace ClickFunnels?",
      a: "Yes, for most users. GoHighLevel includes a full funnel and landing page builder, email marketing, automation workflows, CRM, SMS, booking calendar, and reputation management. Everything ClickFunnels does, GoHighLevel does as part of a broader platform. The main reason someone might keep ClickFunnels is the training ecosystem and community (FunnelHackers, ClickFunnels University) which is more developed than GHL's equivalent."
    },
    {
      q: "How does GoHighLevel vs ClickFunnels pricing compare in 2026?",
      a: "Both platforms start at $97/month. At $97/month: GHL gives you 1 sub-account with unlimited contacts and all core features. ClickFunnels gives you 1 workspace, 2 team members, 10,000 contacts, and 20 funnels. At $297/month: GHL gives you unlimited client sub-accounts, unlimited contacts, white-label branding, and every feature. ClickFunnels gives you 10 workspaces and 150,000 contacts for a single business with no CRM, no SMS, and no white-label."
    },
    {
      q: "Does ClickFunnels have a CRM?",
      a: "ClickFunnels 2.0 has basic contact management and a simple pipeline view, but it is not a full CRM. It lacks the depth of GoHighLevel's CRM: no smart lists, no conversation inbox, no native 2-way SMS, no call tracking, and no robust tag-based automation. For businesses that need a proper CRM, GoHighLevel is significantly more capable."
    },
    {
      q: "Does ClickFunnels have native SMS marketing?",
      a: "No. ClickFunnels does not include native SMS marketing on any plan. You need a third-party integration such as Twilio to send text messages from ClickFunnels. GoHighLevel includes 2-way native SMS on every plan, including the $97/month Starter plan."
    },
    {
      q: "What happened with the ClickFunnels lawsuit against GoHighLevel?",
      a: "In 2024, ClickFunnels filed a patent infringement lawsuit against HighLevel LLC, alleging that GoHighLevel's funnel-building features infringe on a ClickFunnels patent. As of May 2026, the lawsuit is ongoing. Both platforms continue to operate normally. This is publicly documented and worth noting when evaluating either platform."
    },
    {
      q: "How long does it take to switch from ClickFunnels to GoHighLevel?",
      a: "A simple migration with 3 to 5 funnels and basic email sequences takes 1 to 2 weeks. A standard migration with 8 to 15 funnels takes 2 to 3 weeks. A complex migration with 15+ funnels, membership area, and deep automation takes 3 to 5 weeks. GoHighLevel has a URL import tool that clones ClickFunnels pages, but automations, integrations, and Stripe connections must be rebuilt manually."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-built-for', title: '1. What Is Each Platform Actually Built For?' },
    { id: 'pricing-comparison', title: '2. GoHighLevel vs ClickFunnels Pricing Comparison' },
    { id: 'feature-comparison', title: '3. Feature Comparison Where Each Platform Wins' },
    { id: 'when-clickfunnels-right', title: '4. When Is ClickFunnels Still the Right Choice?' },
    { id: 'switching-process', title: '5. What Does Switching from ClickFunnels to GoHighLevel Involve?' },
    { id: 'verdict', title: '6. The Verdict: Which Platform Should You Choose?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const pricingData = [
    { tier: 'Entry plan', ghl: '$97/mo · 1 sub-account, unlimited contacts', clickfunnels: '$97/mo · 1 workspace, 2 team members, 10,000 contacts' },
    { tier: 'Mid tier', ghl: '$297/mo · unlimited sub-accounts, white-label', clickfunnels: '$197/mo · 5 workspaces, 5 team members, 75,000 contacts' },
    { tier: 'Top tier', ghl: '$497/mo · SaaS Mode, white-label mobile app', clickfunnels: '$297/mo · 10 workspaces, 10 team members, 150,000 contacts' },
    { tier: 'Native SMS', ghl: 'Yes included on every plan', clickfunnels: 'No requires third-party' },
    { tier: 'White-label capability', ghl: 'Yes Unlimited and Pro', clickfunnels: 'No' },
    { tier: 'SaaS resale', ghl: 'Yes Agency Pro', clickfunnels: 'No' },
  ];

  const verdictData = [
    { situation: 'Marketing agency managing 3+ client accounts', platform: 'GoHighLevel Unlimited ($297/mo)', why: 'Sub-account architecture, white-label, unlimited clients, flat price' },
    { situation: 'Solo entrepreneur funnels only', platform: 'ClickFunnels Launch ($97/mo)', why: 'Lower learning curve, strong templates, no need for CRM or SMS' },
    { situation: 'Service business needing SMS and booking', platform: 'GoHighLevel Starter ($97/mo)', why: 'Native SMS, missed call text-back, booking calendar' },
    { situation: 'Agency wanting to resell SaaS', platform: 'GoHighLevel Agency Pro ($497/mo)', why: 'SaaS Mode. ClickFunnels has no white-label capability' },
    { situation: 'Currently on ClickFunnels with 3+ clients', platform: 'Migrate to GoHighLevel', why: 'Cost savings, sub-account architecture, native SMS and AI' },
  ];

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

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL vs ClickFunnels</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel vs ClickFunnels (2026):<br />
            <span className="text-[#F8D000]">Honest Comparison for Agencies</span>
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel and ClickFunnels are two of the most searched platforms in marketing and both have a genuine 
            case for being the right choice. The problem is they are designed for fundamentally different buyers. 
            <strong className="text-white"> GHL Scale Up</strong> has built and migrated systems on both platforms. 
            This is the honest version of the comparison.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer — Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel wins for agencies managing multiple clients. ClickFunnels wins for solo entrepreneurs who only need funnels.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                At the same price point ($297/month), GoHighLevel gives you unlimited client accounts and every feature in the platform. 
                ClickFunnels gives you 10 workspaces and 150,000 contacts for a single business. That pricing structure difference usually 
                ends the comparison for agencies.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
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

            {/* Section 1 */}
            <h2 id="what-built-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is Each Platform Actually Built For?
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#0E9BF0] mb-2">GoHighLevel: built for agencies managing multiple clients</h3>
                <p className="text-sm text-[#1A2236] leading-relaxed">GoHighLevel was designed from the ground up for marketing agencies. The sub-account model, Snapshots, white-labelling, and SaaS Mode exist because the platform assumes you are building systems for multiple clients.</p>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">ClickFunnels: built for entrepreneurs building and selling offers</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">ClickFunnels was built for entrepreneurs, course creators, and product sellers who need to build high-converting sales funnels quickly without technical complexity.</p>
              </div>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE SIMPLE TEST</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Ask yourself: am I building marketing systems for other businesses, or running marketing for my own business? 
                If you manage clients, GoHighLevel is the answer. If you run one business's funnels, either platform works.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
            </p>

            {/* Section 2: Pricing */}
            <h2 id="pricing-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. GoHighLevel vs ClickFunnels Pricing Comparison (2026 Numbers)
            </h2>
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

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
            </p>

            {/* Section 3: Feature Comparison */}
            <h2 id="feature-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Feature Comparison: Where Each Platform Wins
            </h2>
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#DDE1E9]">
                  <span className="text-sm font-semibold text-[#1A2236]">Feature</span>
                  <span className="text-sm font-semibold text-[#0E9BF0]">Winner</span>
                </div>
                <div className="flex justify-between items-center"><span className="text-sm text-[#5C6880]">Native SMS</span><span className="text-sm font-semibold text-[#0E9BF0]">GoHighLevel</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-[#5C6880]">CRM and contact management</span><span className="text-sm font-semibold text-[#0E9BF0]">GoHighLevel</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-[#5C6880]">AI features (Voice AI, Conversation AI)</span><span className="text-sm font-semibold text-[#0E9BF0]">GoHighLevel</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-[#5C6880]">Booking calendar</span><span className="text-sm font-semibold text-[#0E9BF0]">GoHighLevel</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-[#5C6880]">White-label and SaaS resale</span><span className="text-sm font-semibold text-[#0E9BF0]">GoHighLevel</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-[#5C6880]">Multi-client management</span><span className="text-sm font-semibold text-[#0E9BF0]">GoHighLevel</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-[#5C6880]">Learning curve (easier for beginners)</span><span className="text-sm font-semibold text-[#1A2236]">ClickFunnels</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-[#5C6880]">Training ecosystem</span><span className="text-sm font-semibold text-[#1A2236]">ClickFunnels</span></div>
              </div>
            </div>

            {/* Section 4: ClickFunnels Strengths */}
            <h2 id="when-clickfunnels-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. When Is ClickFunnels Still the Right Choice?
            </h2>
            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm text-[#1A2236]">• <strong>Solo entrepreneur who only needs funnels and basic email</strong> — ClickFunnels' cleaner interface and lower learning curve make it a faster path to results.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm text-[#1A2236]">• <strong>Completely non-technical and want to get started quickly</strong> — ClickFunnels is consistently rated easier to learn than GoHighLevel.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm text-[#1A2236]">• <strong>Deeply embedded in the FunnelHacker community</strong> — The training ecosystem is one of the most developed in online marketing.</p>
              </div>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">NOTE ON THE CLICKFUNNELS PATENT LAWSUIT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">In 2024, ClickFunnels filed a patent infringement lawsuit against HighLevel LLC. As of May 2026, the lawsuit is ongoing. This does not change the practical comparison of either platform's features or pricing.</p>
            </div>

            {/* Section 5: Switching */}
            <h2 id="switching-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Does Switching from ClickFunnels to GoHighLevel Involve?
            </h2>
            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3"><p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Funnels:</strong> GoHighLevel has a URL import tool that clones your ClickFunnels pages.</p></div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3"><p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Contacts:</strong> Export from ClickFunnels as CSV, import into GHL.</p></div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3"><p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Email sequences:</strong> Rebuild manually as GHL workflows.</p></div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3"><p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Timeline:</strong> Simple migration: 1 to 2 weeks. Complex: 3 to 5 weeks.</p></div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ClickFunnels to GoHighLevel Migration Guide →</Link>
            </p>

            {/* Section 6: Verdict */}
            <h2 id="verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. The Verdict: Which Platform Should You Choose?
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Recommended platform</th>
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

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions
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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from ClickFunnels to GoHighLevel →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Considering GoHighLevel over ClickFunnels?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">GHL Scale Up builds GoHighLevel systems that actually work. CRM setup, funnel build, automation, AI Voice Agent, and white-label configuration all done in 5 to 7 business days. 200+ builds delivered.</p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
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
                        {activeId === item.id && <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />}
                        <span className="flex-1">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img src="/web-app-manifest-192x192.png" alt="GHL Scale Up" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">5+ years GHL experience · 200+ systems built globally. We have built on both platforms and migrated clients from ClickFunnels to GoHighLevel dozens of times.</p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Not Sure Which Platform Is Right?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help you choose the right platform and set it up correctly.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Advice
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Linkedin className="w-3 h-3" /> LinkedIn</a>
                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Twitter className="w-3 h-3" /> X</a>
                <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"><Copy className="w-3 h-3" /> Copy link</button>
              </div>
            </div>
          </aside>
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