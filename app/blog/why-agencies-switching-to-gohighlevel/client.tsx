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
  Shield,
  DollarSign,
  Users,
  Building2,
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
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Rocket,
  Cloud,
  Database,
  Clock,
  Mail,
  GraduationCap,
  Heart,
  Target,
  FileText,
  Compass,
  GitCompare,
  BarChart3,
  Mailbox,
  Stethoscope,
  Activity,
  CalendarDays,
  XCircle,
  Layers,
  Workflow,
  Headphones
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function WhyAgenciesSwitchingToGHLClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'tool-consolidation',
        'sub-account-architecture',
        'cost-comparison',
        'white-label-saas',
        'ai-features',
        'right-for-agency',
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
      q: "Why are agencies switching to GoHighLevel in 2026?",
      a: "The five main reasons agencies are switching to GoHighLevel in 2026 are: (1) tool consolidation replacing 8 to 12 separate subscriptions with one $297/month flat-rate platform, (2) the sub-account architecture that lets agencies manage unlimited clients from one dashboard, (3) white-label SaaS revenue reselling the platform under their own brand as a recurring income stream, (4) AI features that have matured to genuinely operational level (AI Voice Agent, Conversation AI, Workflow AI Builder), and (5) the cost calculation that becomes impossible to ignore at 3 or more client accounts."
    },
    {
      q: "How much do agencies save by switching to GoHighLevel?",
      a: "Agencies replacing a typical tool stack (HubSpot, ClickFunnels, Calendly, ActiveCampaign, and a standalone SMS tool) typically save $2,000 to $3,000 annually in cancelled subscriptions from those separate tools alone. For agencies managing multiple clients, the savings compound further: HubSpot Marketing Pro for 10 client accounts costs $8,900 per month versus GoHighLevel Unlimited at $297 per month for all 10. The exact savings depend on the tools being replaced and the number of clients managed."
    },
    {
      q: "Is GoHighLevel worth it for agencies in 2026?",
      a: "For marketing agencies managing 3 or more client accounts, yes. GoHighLevel is worth it. The flat-rate pricing, sub-account architecture, white-label capability, and AI features provide genuine operational and financial advantages that separate tools cannot match at this price point. The trade-off is a steeper learning curve and a 2 to 4 week setup investment. Agencies that commit to correct setup consistently report not going back to their previous tool stack. For solo businesses or agencies managing a single client, simpler tools may serve them better."
    },
    {
      q: "Can GoHighLevel replace HubSpot for agencies?",
      a: "For most marketing agencies managing multiple client accounts, yes. GoHighLevel's sub-account architecture, flat-rate pricing, native SMS, AI features, and white-label capability cover all the core functions agencies use HubSpot for at dramatically lower cost for multi-client setups. HubSpot remains stronger for enterprises with complex B2B sales cycles, large in-house marketing teams, and deep third-party integration requirements."
    },
    {
      q: "How long does it take to switch from existing tools to GoHighLevel?",
      a: "The technical migration (contacts, pipelines, automation rebuild) takes 2 to 6 weeks depending on complexity. The learning curve (becoming genuinely comfortable running the platform) takes another 2 to 4 weeks for most agency teams. The full transition from old tools to a production-ready GHL operation typically takes 4 to 8 weeks. Agencies that work with an expert setup team cut this timeline significantly by avoiding the common setup mistakes that extend the transition period."
    },
    {
      q: "What is GoHighLevel's white-label SaaS feature?",
      a: "GoHighLevel Agency Pro ($497/month) lets agencies white-label the entire platform under their own brand and resell it to clients as a monthly software subscription. The agency sets the pricing tiers, connects Stripe for automated billing, and clients sign up, pay, and receive a fully configured GHL account all under the agency's brand. GoHighLevel is invisible. The agency keeps the margin between what clients pay and the $497/month platform cost. At 10 clients paying $197/month, that is approximately $1,473/month net. No comparable platform offers this at under $500/month."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'tool-consolidation', title: '1. What Is the Tool Consolidation Problem Agencies Are Trying to Solve?' },
    { id: 'sub-account-architecture', title: '2. Why Does the Sub-Account Architecture Matter So Much?' },
    { id: 'cost-comparison', title: '3. What Does the Actual Cost Comparison Look Like?' },
    { id: 'white-label-saas', title: '4. Why Is White-Label SaaS Becoming a Real Revenue Stream for Agencies?' },
    { id: 'ai-features', title: '5. What Changed About GoHighLevel\'s AI Features in 2025 and 2026?' },
    { id: 'right-for-agency', title: '6. Is Switching to GoHighLevel Right for Your Agency?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const toolStackComparison = [
    { tool: 'HubSpot Marketing Pro', purpose: 'CRM + email + pipeline', cost: '$890/mo (for 1 client account)' },
    { tool: 'ClickFunnels', purpose: 'Funnel builder', cost: '$97 to $297/mo' },
    { tool: 'Calendly Teams', purpose: 'Booking calendar', cost: '$16/mo per user' },
    { tool: 'Birdeye or Podium', purpose: 'Reputation management', cost: '$299 to $499/mo' },
    { tool: 'Twilio + SMS tool', purpose: 'Native SMS', cost: '$25 to $75/mo' },
    { tool: 'Kajabi or Teachable', purpose: 'Course hosting', cost: '$119 to $399/mo' },
  ];

  const whiteLabelRevenueData = [
    { clients: 5, price: '$197/mo', revenue: '$985', ghlCost: '$497', netMargin: '$488/mo' },
    { clients: 10, price: '$197/mo', revenue: '$1,970', ghlCost: '$497', netMargin: '$1,473/mo' },
    { clients: 20, price: '$297/mo', revenue: '$5,940', ghlCost: '$497', netMargin: '$5,443/mo' },
  ];

  const reasons = [
    {
      title: 'Tool consolidation \u2014 replacing 8 to 12 subscriptions',
      desc: 'Agencies that switch typically replace Calendly, ActiveCampaign, ClickFunnels, and a standalone CRM, recouping $2,000 to $3,000 annually in cancelled subscriptions.'
    },
    {
      title: 'The sub-account architecture',
      desc: 'Unlimited clients from one dashboard. Each client gets their own isolated workspace with no data bleeding between them.'
    },
    {
      title: 'White-label SaaS revenue',
      desc: 'A new income stream ClickFunnels and HubSpot cannot match. Resell the platform under your own brand.'
    },
    {
      title: 'AI features that have matured',
      desc: 'AI Voice Agent, Conversation AI, Workflow AI Builder \u2014 features that provide genuine business value, not just hype.'
    },
    {
      title: 'The cost calculation at 3+ clients',
      desc: 'At 3 or more clients, GHL\'s flat-rate pricing becomes significantly more cost-effective than per-client pricing on other platforms.'
    },
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
          <span className="text-[#1A2236] font-medium">Why Agencies Switching to GoHighLevel 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Insights</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Growth</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Why Agencies Are Switching to GoHighLevel in 2026<br />
            <span className="text-[#F8D000]">(5 Real Reasons)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Migrations Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            If you have been in the agency world for the last two years, you have noticed a pattern. 
            Agencies that used to run on HubSpot and ClickFunnels are migrating to GoHighLevel. Agencies 
            on ActiveCampaign and Calendly are consolidating to GHL. It is not a trend driven by influencers 
            or affiliate commissions. The math simply works at a certain scale. 
            <strong className="text-white"> GHL Scale Up</strong> has completed 200+ migrations and has 
            had this conversation with agencies across the US, UK, Australia, and India.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer — The 5 Reasons</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                The five main reasons agencies are switching to GoHighLevel in 2026.
              </p>
              <div className="space-y-2 text-sm text-[#5C6880] leading-relaxed">
                <p><strong className="text-[#0E9BF0]">1. Tool consolidation:</strong> Replacing 8 to 12 subscriptions with one flat rate.</p>
                <p><strong className="text-[#0E9BF0]">2. Sub-account architecture:</strong> Multi-client management that actually works.</p>
                <p><strong className="text-[#0E9BF0]">3. White-label SaaS revenue:</strong> A new income stream competitors cannot match.</p>
                <p><strong className="text-[#0E9BF0]">4. AI features:</strong> Matured to the point of genuine business value.</p>
                <p><strong className="text-[#0E9BF0]">5. The cost calculation:</strong> Impossible to ignore at 3 or more clients.</p>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-3">
                Most agencies that migrate do not go back. The transition period is the hard part, not the platform itself.
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

            {/* Section 1: Tool Consolidation */}
            <h2 id="tool-consolidation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is the Tool Consolidation Problem Agencies Are Trying to Solve?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most agencies built their tech stack by adding tools one at a time. A CRM here. An email platform there. 
              A funnel builder, a booking calendar, an SMS tool, a reputation management platform. Each solved a specific 
              problem when it was added. Over time the stack grew to 6, 8, sometimes 12 tools, each with its own subscription, 
              its own login, and its own support queue.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The visible cost is the subscription total. The hidden cost is everything else: the hours spent managing integrations 
              that break when one platform updates its API, the time onboarding new team members across five different interfaces, 
              the decisions made on incomplete data because the tools do not share a single source of truth.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel replaces the entire stack in one platform. CRM, pipelines, email, SMS, funnels, booking calendar, 
              reputation management, AI Voice Agent, course hosting, and reporting all in one account, one dashboard, one monthly payment.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full breakdown of how agencies use GHL's architecture: 
              <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
            </p>

            {/* Section 2: Sub-Account Architecture */}
            <h2 id="sub-account-architecture" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Why Does the Sub-Account Architecture Matter So Much?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the structural reason that separates GoHighLevel from every other platform in this conversation. 
              HubSpot, ActiveCampaign, and ClickFunnels were built for a single company managing its own leads. 
              GoHighLevel was built for agencies managing multiple clients.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">The sub-account model gives every client their own isolated workspace:</p>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                <li>Their own CRM, their own contacts, their own funnels and automations, their own pipeline</li>
                <li>No data bleeding between clients</li>
                <li>The agency manages all of them from one dashboard and switches between clients in seconds</li>
                <li><strong className="text-[#0E9BF0]">Snapshots:</strong> Build one perfect client system once and deploy it to every new client in minutes</li>
                <li><strong className="text-[#0E9BF0]">White-label:</strong> Clients log into your branded platform on your domain. GoHighLevel is invisible</li>
                <li><strong className="text-[#0E9BF0]">Flat pricing:</strong> $297 per month for unlimited clients. Adding client 10 costs the same as adding client 2</li>
              </ul>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              HubSpot has no equivalent to the sub-account model. ClickFunnels has no equivalent. Managing 10 clients on either 
              platform means 10 separate accounts billed separately.
            </p>

            {/* Section 3: Cost Comparison */}
            <h2 id="cost-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Does the Actual Cost Comparison Look Like?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here is what a typical mid-size agency spends on their current tool stack versus what GoHighLevel costs for the same functionality.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tool</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it does</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical monthly cost</th>
                  </tr>
                </thead>
                <tbody>
                  {toolStackComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.tool}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.purpose}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cost}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-[#DDE1E9] bg-[#F8F9FB]">
                    <td className="py-3 px-3 font-bold text-[#1A2236]">Total for 1 client</td>
                    <td className="py-3 px-3"></td>
                    <td className="py-3 px-3 font-bold text-[#DC3545]">$1,446 to $2,176/mo</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9] bg-[#E8FAF2]">
                    <td className="py-3 px-3 font-bold text-[#25C97D]">GoHighLevel Unlimited</td>
                    <td className="py-3 px-3 text-[#25C97D]">All of the above for unlimited clients</td>
                    <td className="py-3 px-3 font-bold text-[#0E9BF0]">$297/mo flat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE AGENCY MATH AT 10 CLIENTS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                HubSpot Marketing Pro for 10 client accounts: <strong className="text-[#DC3545]">$8,900/month.</strong><br />
                GoHighLevel Unlimited for 10 client accounts: <strong className="text-[#0E9BF0]">$297/month.</strong>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                Agencies replacing a standard tool stack with GHL typically recoup $2,000 to $3,000 annually in cancelled subscriptions 
                from Calendly, ActiveCampaign, ClickFunnels, and a standalone CRM before counting the HubSpot savings.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full plan breakdown: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing: All Plans Explained →</Link>
            </p>

            {/* Section 4: White-Label SaaS */}
            <h2 id="white-label-saas" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Why Is White-Label SaaS Becoming a Real Revenue Stream for Agencies?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the reason that goes beyond cost savings. It is a new business model that was not available to most agencies before GoHighLevel.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              On GoHighLevel Agency Pro ($497/month), agencies can white-label the entire platform under their own brand and resell it to clients 
              as a monthly software subscription. The agency sets the price. The client sees their branded software, pays monthly, and receives 
              a fully configured GHL account. The agency keeps the margin.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Clients on white-label SaaS</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Price charged</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly revenue</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Net margin</th>
                  </tr>
                </thead>
                <tbody>
                  {whiteLabelRevenueData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.clients} clients</td>
                      <td className="py-3 px-3">{item.price}</td>
                      <td className="py-3 px-3">{item.revenue}</td>
                      <td className="py-3 px-3">{item.ghlCost}</td>
                      <td className="py-3 px-3 text-[#25C97D] font-semibold">{item.netMargin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              No comparable platform offers this at this price. HubSpot has no white-label option at any tier. 
              ClickFunnels has no white-label option. GoHighLevel is the only platform under $500/month that lets you resell 
              a complete CRM, automation, and AI stack under your own brand.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full guide on setting this up: 
              <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label Setup →</Link>
            </p>

            {/* Section 5: AI Features */}
            <h2 id="ai-features" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Changed About GoHighLevel's AI Features in 2025 and 2026?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is where the conversation has shifted most noticeably in the last 12 months. GoHighLevel's AI tools in 2023 
              were promising but incomplete. In 2025 and 2026 they became genuinely operational for agencies.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">AI Voice Agent</h3>
                    <p className="text-sm text-[#5C6880]">Answers inbound calls 24/7, qualifies the lead using a conversation script you define, and books the appointment directly into the GHL calendar. For service businesses where every missed call is a missed sale, this feature alone can justify the platform cost in the first week.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">Conversation AI</h3>
                    <p className="text-sm text-[#5C6880]">Handles website chat, SMS, and social media messages with context-aware responses. Qualifies leads and routes conversations to the appropriate pipeline stage without human involvement.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">Workflow AI Builder</h3>
                    <p className="text-sm text-[#5C6880]">Describe what you want an automation to do in plain English. GoHighLevel builds the workflow. Reduces the time to build complex automations from hours to minutes.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">Reviews AI</h3>
                    <p className="text-sm text-[#5C6880]">Automatically requests Google reviews after a transaction, monitors responses, and drafts AI-generated replies. Reputation management that runs without a team member assigned to it.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE PRACTICAL IMPACT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Agencies that previously employed a virtual assistant specifically to answer inquiries and book appointments are running the AI Voice Agent instead. 
                At $97/month per sub-account for the AI Employee feature, the comparison to a part-time VA or answering service is not close. 
                The AI tools in 2026 are not a differentiator. They are quickly becoming table stakes for agencies competing on service quality.
              </p>
            </div>

            {/* Section 6: Right for Agency */}
            <h2 id="right-for-agency" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Is Switching to GoHighLevel Right for Your Agency?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The switch makes sense for most agencies at a specific stage. It does not make sense for all agencies at all stages.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> GoHighLevel is the right move if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You manage 3 or more client accounts</li>
                  <li>You pay for separate CRM, email, SMS, and funnel tools per client</li>
                  <li>You spend significant time managing integrations that break</li>
                  <li>You want to offer clients a branded software product as a recurring revenue stream</li>
                  <li>You are losing leads because calls go unanswered and follow-up is manual</li>
                  <li>You want to onboard new clients in hours rather than weeks</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> GoHighLevel is not the right move if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You manage one business's marketing and have no plans to scale to multiple clients</li>
                  <li>Your entire revenue depends on email deliverability and you are not willing to invest in proper DKIM/SPF setup</li>
                  <li>You need 1,500+ native third-party integrations</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR MIGRATIONS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                The pattern we see consistently: agencies that migrate and commit to learning the platform properly in the first 4 to 6 weeks do not go back. 
                The ones who struggle are those who underestimate the setup phase and expect GHL to work out of the box like a simpler tool. 
                It rewards investment in correct setup.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real results from agencies we have helped: 
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                And if you are ready to discuss whether GHL is the right move for your agency, 
                <Link href="/contact-us" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call at ghlscaleup.com/contact-us →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Ready to make the move? Our full <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL migration service →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Want your GHL account set up correctly from day one? <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM setup service →</Link>
            </p>

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

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">Common GHL Migration Mistakes Agencies Make →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Considering the switch to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Let's find out if it's right for your agency. Book a free 30-minute strategy call. 
                  We review your current stack, calculate your actual cost savings, and tell you honestly 
                  whether GHL makes sense for your specific setup.
                </p>
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
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">GoHighLevel Migration Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built and migrated globally. We have migrated agencies from HubSpot, 
                ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce. All cost figures verified from official platform 
                pricing pages as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Thinking About Switching?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help agencies migrate to GHL. 200+ migrations completed.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
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