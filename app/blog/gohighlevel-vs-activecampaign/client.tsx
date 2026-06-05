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
      Mailbox
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelVsActiveCampaignClient() {
      const [activeId, setActiveId] = useState<string>('');

      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'what-built-for',
                        'pricing-comparison',
                        'feature-comparison',
                        'when-switch',
                        'when-stay',
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
                  q: "Is GoHighLevel better than ActiveCampaign?",
                  a: "For agencies managing multiple client accounts that need sub-account architecture, native SMS, white-label capability, and AI features, GoHighLevel is the stronger platform. For B2B marketing teams and e-commerce businesses where email is the primary revenue channel and advanced conditional logic, predictive sending, and deep segmentation matter most, ActiveCampaign is more capable. The choice depends on whether you need email excellence specifically or email as one channel in a broader multi-channel operation."
            },
            {
                  q: "How does GoHighLevel vs ActiveCampaign pricing compare?",
                  a: "GoHighLevel charges a flat rate: $97/month for unlimited contacts on one sub-account, $297/month for unlimited contacts across unlimited client accounts. ActiveCampaign charges per contact: at 1,000 contacts the Pro plan is $99/month, at 10,000 contacts it is $469/month, at 25,000 contacts it is $789/month. For agencies with growing contact lists or multiple client accounts, GoHighLevel's flat pricing becomes significantly more cost-effective as volume and client count increase."
            },
            {
                  q: "Can GoHighLevel replace ActiveCampaign?",
                  a: "For most agency use cases, yes. GoHighLevel covers email automation, contact tagging, CRM pipelines, and behavioral triggers plus adds native SMS, AI Voice Agent, funnel builder, booking calendar, and multi-client sub-account management that ActiveCampaign does not offer. The honest trade-off: GoHighLevel's email automation is functional but less sophisticated than ActiveCampaign's advanced conditional logic and predictive sending. Businesses where email deliverability is a primary revenue metric should evaluate this trade-off carefully."
            },
            {
                  q: "Does GoHighLevel have better email automation than ActiveCampaign?",
                  a: "No. ActiveCampaign's email automation is more sophisticated. The conditional branching, goal-based triggers, split-tested automations, and predictive send-time optimisation in ActiveCampaign are capabilities GoHighLevel does not fully match at this price point. GoHighLevel's automation builder is strong for multi-channel workflows that combine email with SMS, voice, and booking. For pure email automation depth, ActiveCampaign is the stronger tool."
            },
            {
                  q: "What happens to my ActiveCampaign automations if I switch to GHL?",
                  a: "ActiveCampaign automations do not transfer automatically to GoHighLevel. Every sequence must be rebuilt manually in GHL's workflow builder. The trigger model and logic structure are different enough that a direct copy does not work. Each automation needs to be rebuilt with GHL's native triggers and actions in mind. This is the most time-consuming part of an AC to GHL migration. Budget approximately 2 to 8 hours per complex automation depending on the number of branches and conditions involved."
            },
            {
                  q: "How long does it take to switch from ActiveCampaign to GoHighLevel?",
                  a: "A typical migration with 5,000 to 20,000 contacts and 5 to 15 automations takes 2 to 3 weeks. A complex migration with 50+ automations, lead scoring models, and deep e-commerce integrations takes 4 to 6 weeks. The contact import itself takes hours. The automation rebuild is what drives the timeline. There will also be a 2 to 3 week email domain warmup period before sending to your full list from GHL's infrastructure."
            },
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'what-built-for', title: '1. What Is Each Platform Actually Built For?' },
            { id: 'pricing-comparison', title: '2. GoHighLevel vs ActiveCampaign Pricing (Real 2026 Numbers)' },
            { id: 'feature-comparison', title: '3. Feature Comparison Where Each Platform Wins' },
            { id: 'when-switch', title: '4. When Should You Switch from ActiveCampaign to GoHighLevel?' },
            { id: 'when-stay', title: '5. When Should You Stay on ActiveCampaign?' },
            { id: 'verdict', title: '6. The Verdict: GoHighLevel vs ActiveCampaign' },
            { id: 'faq', title: '7. Frequently Asked Questions' },
      ];

      const acPricingData = [
            { contacts: '1,000', starter: '$19/mo', plus: '$59/mo', pro: '$99/mo', enterprise: '$179/mo' },
            { contacts: '5,000', starter: '$99/mo', plus: '$179/mo', pro: '$259/mo', enterprise: '$469/mo' },
            { contacts: '10,000', starter: '$189/mo', plus: '$239/mo', pro: '$469/mo', enterprise: '$739/mo' },
            { contacts: '25,000', starter: 'N/A', plus: '$489/mo', pro: '$789/mo', enterprise: '$1,099/mo' },
      ];

      const ghlPricingData = [
            { plan: 'Starter', price: '$97/mo', contacts: 'Unlimited', subAccounts: '1', additions: 'CRM, SMS, email, funnels, booking, all core features' },
            { plan: 'Unlimited', price: '$297/mo', contacts: 'Unlimited', subAccounts: 'Unlimited', additions: 'White-label branding, Snapshot deployment, unlimited clients' },
            { plan: 'Agency Pro', price: '$497/mo', contacts: 'Unlimited', subAccounts: 'Unlimited', additions: 'SaaS Mode, Stripe billing, white-label mobile app, SaaS resale' },
      ];

      const featureComparisonData = [
            { feature: 'Email automation', ghl: 'Visual workflow builder, unlimited sequences, solid deliverability', ac: 'Advanced conditional logic, predictive send timing, goal-based automation, deeper segmentation', winner: 'ActiveCampaign more sophisticated' },
            { feature: 'Email deliverability', ghl: 'Functional requires proper DKIM/SPF setup and domain warmup', ac: 'More mature infrastructure, higher reputation scores, better out of the box', winner: 'ActiveCampaign genuinely stronger' },
            { feature: 'Contact model', ghl: 'Unlimited contacts on every plan', ac: 'Per-contact billing scales steeply with list size', winner: 'GoHighLevel flat rate wins at scale' },
            { feature: 'Native SMS', ghl: 'Yes 2-way SMS on every plan, workflow-triggered', ac: 'No requires Twilio integration at extra cost', winner: 'GoHighLevel' },
            { feature: 'CRM and pipelines', ghl: 'Full CRM built in, unlimited pipelines, smart lists', ac: 'CRM pipelines add-on at $68/mo extra, Sales Engagement at $111/mo extra', winner: 'GoHighLevel' },
            { feature: 'Funnel and landing page builder', ghl: 'Full funnel builder included on every plan', ac: 'No native funnel builder', winner: 'GoHighLevel' },
            { feature: 'Booking calendar', ghl: 'Native booking calendar with reminders included', ac: 'No native booking calendar', winner: 'GoHighLevel' },
            { feature: 'AI features', ghl: 'AI Voice Agent, Conversation AI, Reviews AI, Workflow AI Builder', ac: 'Predictive send timing, basic AI content tools', winner: 'GoHighLevel significantly more AI capability' },
            { feature: 'Multi-client management', ghl: 'Native sub-account architecture, unlimited clients', ac: 'No sub-account model, separate account per client', winner: 'GoHighLevel' },
            { feature: 'White-label', ghl: 'Full white-label from $297/mo', ac: 'Not available at any tier', winner: 'GoHighLevel' },
            { feature: 'E-commerce integrations', ghl: 'Limited not the strongest e-commerce platform', ac: 'Shopify, WooCommerce, deep product-based segmentation, abandoned cart', winner: 'ActiveCampaign' },
            { feature: 'Third-party integrations', ghl: '200+ native, Zapier', ac: '950+ native integrations, deeper connections', winner: 'ActiveCampaign' },
            { feature: 'Learning curve', ghl: 'Steeper 2 to 4 weeks to become comfortable', ac: 'Easier to start with, especially for email-focused users', winner: 'ActiveCampaign' },
      ];

      const verdictData = [
            { situation: 'Agency managing 3+ client accounts', recommendation: 'GoHighLevel Unlimited ($297/mo) no contest' },
            { situation: 'Solo business, email-first, under 5,000 contacts', recommendation: 'ActiveCampaign better email depth, lower entry cost' },
            { situation: 'Service business needing SMS, booking, and CRM', recommendation: 'GoHighLevel Starter ($97/mo)' },
            { situation: 'E-commerce brand running high-volume email', recommendation: 'ActiveCampaign stronger e-commerce integrations' },
            { situation: 'Agencies wanting to resell platform as SaaS', recommendation: 'GoHighLevel Agency Pro ($497/mo) AC has no equivalent' },
            { situation: 'Currently on AC, list growing, adding SMS', recommendation: 'Switch to GoHighLevel cost and capability both favour it' },
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
                              <span className="text-[#1A2236] font-medium">GoHighLevel vs ActiveCampaign 2026</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-[760px] mx-auto relative z-10">
                              {/* Post Tags / Category Labels */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL vs ActiveCampaign</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              {/* H1 Headline */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    GoHighLevel vs ActiveCampaign (2026):<br />
                                    <span className="text-[#F8D000]">Honest Comparison for Agencies</span>
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
                                          <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated June 2026</div>
                                    </div>
                              </div>

                              {/* Introductory Paragraph */}
                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
                                    GoHighLevel and ActiveCampaign look similar on the surface. Both have CRM features, both run email automations,
                                    both can manage contacts at scale. The comparison breaks down quickly once you look at what each platform is
                                    actually designed to do and who it is designed for. <strong className="text-white"> GHL Scale Up</strong> has
                                    migrated dozens of businesses from ActiveCampaign to GoHighLevel and in several cases recommended against it.
                                    This is the honest version of that comparison.
                              </p>
                              <p className="text-sm text-white/50 leading-relaxed">
                                    For a broader overview of all GHL alternatives:
                                    <Link href="/blog/gohighlevel-alternatives" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Alternatives 2026 →</Link>
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
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
                                          </div>
                                          <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                                                GoHighLevel wins for agencies managing multiple client accounts that need SMS, sub-accounts, booking, and white-label capability alongside email.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                ActiveCampaign wins for B2B marketing teams and e-commerce businesses where email is the primary revenue channel and deliverability,
                                                conditional logic, and deep segmentation matter most. The pricing model is the clearest differentiator: ActiveCampaign charges
                                                per contact and scales steeply. GoHighLevel charges a flat rate with unlimited contacts. At 10,000 contacts on AC Pro you pay
                                                <strong className="text-[#0E9BF0]"> $469/month</strong> for one business. GoHighLevel Unlimited costs
                                                <strong className="text-[#0E9BF0]"> $297/month</strong> for unlimited contacts across unlimited client accounts.
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

                                    {/* Section 1: What Built For */}
                                    <h2 id="what-built-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          1. What Is Each Platform Actually Built For?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The architecture of each platform explains nearly every feature difference in this comparison.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-5 mb-6">
                                          <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5">
                                                <h3 className="text-base font-bold text-[#0E9BF0] mb-2">GoHighLevel: built for agencies managing multiple clients</h3>
                                                <p className="text-sm text-[#1A2236] leading-relaxed">GoHighLevel was designed from the ground up for marketing agencies. The sub-account model assumes you are building and running systems for multiple clients. One dashboard, one flat monthly price, unlimited clients. Every feature (Snapshots, white-label, SaaS Mode, AI Voice Agent) exists because the platform assumes you operate at the agency layer.</p>
                                          </div>
                                          <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                                                <h3 className="text-base font-bold text-[#1A2236] mb-2">ActiveCampaign: built for email-first marketing teams</h3>
                                                <p className="text-sm text-[#5C6880] leading-relaxed">ActiveCampaign was designed for businesses that run their customer communication primarily through email. Its automation builder, behavioural segmentation, predictive send-time optimisation, and e-commerce integrations are all built around email as the primary channel. SMS, voice, and booking are either not native or available only as add-ons.</p>
                                          </div>
                                    </div>

                                    {/* Section 2: Pricing */}
                                    <h2 id="pricing-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          2. GoHighLevel vs ActiveCampaign Pricing (Real 2026 Numbers)
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The starting price comparison ($97 vs $15) is misleading. Here is what each platform actually costs at real usage volumes.
                                    </p>

                                    <h3 className="text-xl font-bold text-[#1A2236] mt-4 mb-3">ActiveCampaign pricing by contact volume (2026)</h3>
                                    <div className="overflow-x-auto my-4">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Contacts</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Starter</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plus</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Pro</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Enterprise</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {acPricingData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.contacts}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.starter}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.plus}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.pro}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.enterprise}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">WHAT THIS MEANS IN PRACTICE</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                ActiveCampaign's per-contact billing scales steeply. A business with 10,000 contacts on ActiveCampaign Pro pays $469/month for one business.
                                                An agency with 10 clients each with 2,000 contacts would need 10 separate ActiveCampaign accounts. GoHighLevel Unlimited at $297/month
                                                covers all 10 clients with unlimited contacts. The monthly saving for a 10-client agency is $4,393+ on ActiveCampaign Pro alone.
                                          </p>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#1A2236] mt-6 mb-3">GoHighLevel pricing (2026)</h3>
                                    <div className="overflow-x-auto my-4">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Price</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Contacts</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Sub-accounts</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Key additions</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {ghlPricingData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#0E9BF0]">{item.plan}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.price}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.contacts}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.subAccounts}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.additions}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          For the full breakdown:
                                          <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing 2026 →</Link>
                                    </p>

                                    {/* Section 3: Feature Comparison */}
                                    <h2 id="feature-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          3. Feature Comparison: Where Does Each Platform Win?
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ActiveCampaign</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Winner</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {featureComparisonData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.ac}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.winner}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <Mailbox className="w-4 h-4 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">THE HONEST EMAIL NOTE</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                ActiveCampaign's email automation is genuinely more sophisticated than GoHighLevel's. The conditional branching, goal-based triggers,
                                                and predictive sending are capabilities GHL does not fully match at this price point. If your entire business runs on email sequences
                                                and deliverability is your primary concern, this matters. Most agencies that switch from AC to GHL are not switching because GHL's
                                                email is better. They are switching because GHL adds SMS, booking, and multi-client infrastructure that AC cannot provide at any price.
                                          </p>
                                    </div>

                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          For building GoHighLevel automation workflows to match your AC sequences:
                                          <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
                                    </p>

                                    {/* Section 4: When to Switch */}
                                    <h2 id="when-switch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          4. When Should You Switch from ActiveCampaign to GoHighLevel?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The switch makes sense when your operational needs have grown beyond what email-first tools can provide.
                                    </p>

                                    <div className="space-y-3 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                                                <div className="flex items-start gap-3">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You are an agency managing 3 or more client accounts.</strong> ActiveCampaign has no sub-account model. Each client requires a separate account. At 5 clients on AC Pro, you are paying over $1,300/month. GHL Unlimited covers all 5 at $297/month.</p>
                                                </div>
                                          </div>
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                                                <div className="flex items-start gap-3">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You need native SMS in your automation sequences.</strong> ActiveCampaign requires a third-party Twilio integration that adds cost and complexity. GHL has native SMS on every plan.</p>
                                                </div>
                                          </div>
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                                                <div className="flex items-start gap-3">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You are losing leads to slow follow-up and need an AI Voice Agent.</strong> ActiveCampaign has no voice capability. GHL's AI Voice Agent answers inbound calls, qualifies leads, and books appointments automatically.</p>
                                                </div>
                                          </div>
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                                                <div className="flex items-start gap-3">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Your contact list is growing and AC's pricing is becoming painful.</strong> At 10,000 contacts on AC Pro you pay $469/month. GoHighLevel Unlimited covers unlimited contacts at $297/month.</p>
                                                </div>
                                          </div>
                                    </div>

                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          For the full guide on making this switch:
                                          <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline ml-1">ActiveCampaign to GoHighLevel Migration →</Link>
                                    </p>
                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          Our <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GoHighLevel migration service</Link> handles the full transition including automation rebuild and email domain warmup.
                                    </p>

                                    {/* Section 5: When to Stay */}
                                    <h2 id="when-stay" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          5. When Should You Stay on ActiveCampaign?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Honest answer: there are clear situations where switching is wrong.
                                    </p>

                                    <div className="space-y-3 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                                                <div className="flex items-start gap-3">
                                                      <Shield className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Email deliverability is your primary revenue driver.</strong> ActiveCampaign's more mature infrastructure is a genuine advantage. Moving to GHL requires a 2 to 3 week domain warmup and there will be a short-term deliverability adjustment period.</p>
                                                </div>
                                          </div>
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                                                <div className="flex items-start gap-3">
                                                      <Shield className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You run a Shopify or WooCommerce store.</strong> ActiveCampaign's e-commerce integrations (abandoned cart, product-based segmentation, purchase behaviour triggers) are significantly stronger than GoHighLevel's.</p>
                                                </div>
                                          </div>
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                                                <div className="flex items-start gap-3">
                                                      <Shield className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Your team only needs email and you have a small contact list.</strong> ActiveCampaign's $19 to $59/month pricing is hard to beat. GHL at $97/month minimum is more platform than you need at that scale.</p>
                                                </div>
                                          </div>
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                                                <div className="flex items-start gap-3">
                                                      <Shield className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You have invested heavily in AC integrations and workflows.</strong> If your business runs on 30+ sophisticated AC automations, the migration cost may outweigh the operational benefits of switching.</p>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Section 6: Verdict */}
                                    <h2 id="verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          6. The Verdict: GoHighLevel vs ActiveCampaign
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your situation</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Our recommendation</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {verdictData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.situation}</td>
                                                                  <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.recommendation}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Award className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">SEE THE RESULTS BEFORE DECIDING</span>
                                          </div>
                                          <p className="text-sm text-white/80 leading-relaxed mb-3">
                                                If you are on the fence, see what properly configured GHL systems have delivered for agencies and service businesses:
                                                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
                                          </p>
                                          <p className="text-sm text-white/80 leading-relaxed">
                                                And if you want a direct recommendation based on your specific setup,
                                                <Link href="/contact-us" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call</Link> we look at your current stack and tell you honestly which platform makes sense.
                                          </p>
                                    </div>

                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          Explore our <Link href="/services/campaign-automation" className="text-[#0E9BF0] hover:underline">email, SMS and WhatsApp automation service</Link> for what we build inside GHL for clients making the switch.
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
                                                <Link href="/blog/gohighlevel-alternatives" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Alternatives: 8 Best Tools Compared →</Link>
                                                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
                                                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration: What Breaks →</Link>
                                                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                                                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                                                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
                                          </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Deciding between GoHighLevel and ActiveCampaign?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      GHL Scale Up will tell you honestly which one fits your business. Book a free 30-minute strategy call.
                                                      We review your current setup and give you a direct recommendation, including if staying on ActiveCampaign
                                                      makes more sense for your situation.
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
                                                      <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                                                </div>
                                          </div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-3">
                                                5+ years GHL experience · 200+ systems built and migrated globally including ActiveCampaign to GoHighLevel migrations.
                                                All pricing figures verified from official platform pages as of June 2026.
                                          </p>
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