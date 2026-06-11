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
      Headphones,
      FileQuestion,
      HelpCircle,
      Boxes,
      Combine,
      Settings,
      Link2,
      Webhook,
      RefreshCw
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelSaaSModeSetupClient() {
      const [activeId, setActiveId] = useState<string>('');

      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'what-is-saas-mode',
                        'prerequisites',
                        'setup-steps',
                        'pricing-tiers',
                        'margin-calculator',
                        'who-its-for',
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
                  q: "What plan do you need for GoHighLevel SaaS Mode?",
                  a: "GoHighLevel SaaS Mode is only available on the Agency Pro plan at $497 per month. It is not available on the Starter plan ($97/mo) or the Unlimited plan ($297/mo). The Agency Pro plan adds the SaaS Configurator, automated Stripe billing, self-service client sign-up, Snapshot auto-deployment, feature gating per pricing tier, and usage rebilling with markup on top of everything included in the Unlimited plan."
            },
            {
                  q: "How long does it take to set up GoHighLevel SaaS Mode?",
                  a: "The technical configuration (connecting Stripe, creating pricing tiers in the SaaS Configurator, configuring feature access, attaching a Snapshot, and setting up the sign-up page) takes 2 to 4 hours for someone following a clear process. DNS propagation for the white-label domain can add up to 24 hours. Building and testing a quality Snapshot adds another 4 to 8 hours if not already done. Most agencies should budget one full working day to go from starting the setup to a tested, live sign-up flow."
            },
            {
                  q: "Is Stripe required for GoHighLevel SaaS Mode?",
                  a: "Yes. Stripe is the only supported payment processor for GoHighLevel SaaS Mode client billing. You need a Stripe account in live mode (not test mode) with identity verification and banking details completed before connecting to GHL. PayPal and other payment processors are not supported for SaaS Mode recurring billing, though they can be used for other payment flows within individual client sub-accounts."
            },
            {
                  q: "What happens when a client cancels their GoHighLevel SaaS subscription?",
                  a: "When a client cancels their Stripe subscription, their GHL sub-account remains active until you manually suspend it. SaaS Mode does not automate offboarding. The correct approach is to build a GHL workflow triggered by the Stripe subscription cancelled webhook that notifies you immediately and suspends the sub-account within 24 hours. Without this, cancelled clients retain indefinite free access to your platform a revenue leak and a data security risk."
            },
            {
                  q: "How many pricing tiers can you create in GoHighLevel SaaS Mode?",
                  a: "The GHL SaaS Configurator supports up to 20 pricing tiers. Most operators run 2 to 3 tiers (Starter, Growth, Pro) with clear feature and usage differentiation between them. You can set monthly and annual pricing for each tier, configure trial periods from 0 to 30 days, set per-plan usage credits, and define exactly which GHL features each tier can access through the feature toggle list in each plan's settings."
            },
            {
                  q: "Can GHL Scale Up set up GoHighLevel SaaS Mode for my agency?",
                  a: "Yes. GHL Scale Up sets up complete GoHighLevel SaaS Mode configurations including Stripe connection, SaaS Configurator setup, pricing tier creation, feature gating, Snapshot build and testing, self-service sign-up page, white-label domain configuration, and offboarding automation. Most setups go live in 5 to 7 business days. Book a free strategy call to discuss your specific setup."
            },
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'what-is-saas-mode', title: '1. What Is GoHighLevel SaaS Mode and How Is It Different from Standard White Label?' },
            { id: 'prerequisites', title: '2. What Do You Need Before Starting the SaaS Mode Setup?' },
            { id: 'setup-steps', title: '3. How to Set Up GoHighLevel SaaS Mode (10 Steps)' },
            { id: 'pricing-tiers', title: '4. How to Structure Your Pricing Tiers' },
            { id: 'margin-calculator', title: '5. What Does the Margin Look Like at Different Client Volumes?' },
            { id: 'who-its-for', title: '6. Who Is GoHighLevel SaaS Mode Actually Built For?' },
            { id: 'faq', title: '7. Frequently Asked Questions' },
      ];

      const comparisonData = [
            { feature: 'Client billing', standardWhiteLabel: 'You invoice manually', saasMode: 'Stripe handles billing automatically recurring payments, renewals, cancellations' },
            { feature: 'Client onboarding', standardWhiteLabel: 'You create sub-accounts manually', saasMode: 'Client visits your sign-up page, pays, and their account provisions automatically' },
            { feature: 'Feature control', standardWhiteLabel: 'All features available', saasMode: 'Gate which features each pricing tier can access' },
            { feature: 'Snapshot deployment', standardWhiteLabel: 'You deploy manually per client', saasMode: 'Deploys automatically when client pays' },
            { feature: 'Pricing tiers', standardWhiteLabel: 'You set pricing externally', saasMode: 'Built inside GHL SaaS Configurator up to 20 tiers' },
            { feature: 'Recurring revenue model', standardWhiteLabel: 'You invoice ad hoc or on retainer', saasMode: 'Stripe handles MRR automatically' },
      ];

      const prerequisites = [
            { title: 'Agency Pro plan ($497/month)', desc: 'SaaS Mode is only available on Agency Pro. Not available on Starter ($97/mo) or Unlimited ($297/mo).' },
            { title: 'Stripe account in live mode', desc: 'You need an active Stripe account connected to GHL in live mode not test mode to process real client payments.' },
            { title: 'White-label domain configured', desc: 'Clients will sign up and log in through your branded domain (e.g., app.youragency.com).' },
            { title: 'A tested Snapshot ready to deploy', desc: 'When a client pays, their sub-account provisions automatically with your Snapshot deployed.' },
      ];

      const setupSteps = [
            { step: 'Confirm Agency Pro and open the SaaS Configurator', desc: 'Log into your GHL Agency dashboard. Go to Agency Settings → Billing and confirm you are on the $497/month Agency Pro plan. Then navigate to Agency Settings → SaaS Configurator.' },
            { step: 'Connect your Stripe account', desc: 'Inside the SaaS Configurator, click Connect Stripe. Log in with your Stripe credentials and authorise the connection. You must use a live Stripe account. Stripe charges 2.9% + $0.30 per transaction.' },
            { step: 'Create your pricing tiers', desc: 'Click Add Plan. For each pricing tier, set: the plan name, monthly price, optional annual price with discount, trial period length (0 to 30 days), and per-plan usage credits. Up to 20 pricing tiers.' },
            { step: 'Configure feature access per pricing tier', desc: 'For each plan, define which GHL features that tier can access using the feature toggle list. Feature gating creates meaningful differentiation between tiers.' },
            { step: 'Set up rebilling markup for usage (optional but recommended)', desc: 'Agency Pro lets you charge clients more than GHL charges you for SMS, email, calls, and AI usage. Set your markup in Agency Settings → Rebilling.' },
            { step: 'Attach your Snapshot to each pricing tier', desc: 'Inside each plan\'s settings, attach the relevant Snapshot from the dropdown. When a client pays for that tier, the Snapshot deploys automatically.' },
            { step: 'Customise your self-service sign-up page', desc: 'Access it through SaaS Configurator → Sign-Up Page. Customise the title, plan descriptions, and copy. Copy the sign-up page URL to share with prospects.' },
            { step: 'Configure your white-label sending domain', desc: 'Go to Agency Settings → Email Services and confirm your sending domain is configured with DKIM, SPF, and DMARC.' },
            { step: 'Build an offboarding automation', desc: 'Create a workflow triggered by the Stripe subscription cancelled webhook. Notify you, wait 24 hours, then suspend the sub-account. This is the most commonly skipped step.' },
            { step: 'Run a full end-to-end test before going live', desc: 'Create a $1 test product in Stripe, visit your sign-up page, select a plan, complete payment. Confirm sub-account creation, Snapshot deployment, and email before going live.' },
      ];

      const pricingTiers = [
            { tier: 'Starter', price: '$97 to $147', include: 'CRM, pipelines, calendar, basic automations, email, up to 500 contacts/mo usage credits', gate: 'SMS automation, AI features, advanced reporting, reputation management' },
            { tier: 'Growth', price: '$197 to $247', include: 'Everything in Starter plus SMS automation, reputation management, funnel builder, up to 2,000 credits/mo', gate: 'AI Voice Agent, white-label mobile app, advanced integrations, API access' },
            { tier: 'Pro', price: '$297 to $497', include: 'Everything in Growth plus AI Voice Agent, advanced automations, full reporting, unlimited usage credits', gate: 'Nothing full platform access' },
      ];

      const marginData = [
            { clients: 5, price: '$147/mo', revenue: '$735', ghlCost: '$497', netMargin: '$238/mo', annualised: '$2,856' },
            { clients: 10, price: '$197/mo', revenue: '$1,970', ghlCost: '$497', netMargin: '$1,473/mo', annualised: '$17,676' },
            { clients: 20, price: '$197/mo', revenue: '$3,940', ghlCost: '$497', netMargin: '$3,443/mo', annualised: '$41,316' },
            { clients: 20, price: '$297/mo', revenue: '$5,940', ghlCost: '$497', netMargin: '$5,443/mo', annualised: '$65,316' },
            { clients: 50, price: '$197/mo', revenue: '$9,850', ghlCost: '$497', netMargin: '$9,353/mo', annualised: '$112,236' },
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
                              <span className="text-[#1A2236] font-medium">GoHighLevel SaaS Mode Setup 2026</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-[760px] mx-auto relative z-10">
                              {/* Post Tags / Category Labels */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS Mode Setup</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Agency Pro</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">White Label SaaS</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              {/* H1 Headline */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    GoHighLevel SaaS Mode:<br />
                                    <span className="text-[#F8D000]">Complete Setup Guide for Agencies (2026)</span>
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
                                    GoHighLevel SaaS Mode turns your $497 per month Agency Pro subscription into a white-label software business.
                                    Clients sign up on your branded platform, pay you monthly through Stripe, and receive a fully configured
                                    GoHighLevel account under your domain and logo without ever seeing GoHighLevel's name.
                                    <strong className="text-white"> GHL Scale Up</strong> has set up SaaS Mode for agencies across the US, UK,
                                    Australia, and India.
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
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer</span>
                                          </div>
                                          <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                                                GoHighLevel SaaS Mode setup takes 2 to 4 hours for someone following a clear process.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                Before starting you need: <strong className="text-[#0E9BF0]">Agency Pro plan ($497/mo)</strong>, a connected
                                                Stripe account in live mode, a white-label domain configured, and a tested Snapshot ready to deploy. The setup
                                                involves 10 steps: upgrade to Pro, connect Stripe, create pricing tiers in the SaaS Configurator, configure
                                                feature access per tier, attach your Snapshot, set up your sign-up page, configure your white-label domain,
                                                set up offboarding automation, test the full flow, and go live. <strong className="text-[#1A2236]">Do not skip step 9.</strong>
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

                                    {/* Section 1: What Is SaaS Mode */}
                                    <h2 id="what-is-saas-mode" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          1. What Is GoHighLevel SaaS Mode and How Is It Different from Standard White Label?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Standard GoHighLevel white label (available on the Unlimited plan at $297/mo) gives you your logo, your domain,
                                          and your brand colours on the GHL dashboard. You still create client sub-accounts manually, invoice clients separately,
                                          and manage everything yourself.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">SaaS Mode adds the business layer:</strong> automated client billing through Stripe,
                                          a self-service sign-up flow so clients can purchase and onboard without your involvement, feature gating so each pricing
                                          tier unlocks different capabilities, and automatic Snapshot deployment so every new client account is pre-configured.
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Standard White Label (Unlimited $297/mo)</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">SaaS Mode (Agency Pro $497/mo)</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {comparisonData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.standardWhiteLabel}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.saasMode}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          For the full business model guide including margin calculator and pricing strategy:
                                          <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label SaaS: How SaaS Mode Works →</Link>
                                    </p>

                                    {/* Section 2: Prerequisites */}
                                    <h2 id="prerequisites" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          2. What Do You Need Before Starting the SaaS Mode Setup?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#DC3545]">Do not start the SaaS Configurator until all four prerequisites are confirmed.</strong>
                                          Agencies that skip this step launch SaaS Mode and discover mid-setup that a prerequisite is missing.
                                    </p>

                                    <div className="space-y-3 mb-6">
                                          {prerequisites.map((item, idx) => (
                                                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                      <div className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                  <h3 className="text-sm font-bold text-[#1A2236] mb-1">{item.title}</h3>
                                                                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>

                                    <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
                                          <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                                                → See <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing 2026</Link> for the full plan comparison.
                                          </p>
                                          <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                                                → For white-label domain setup: <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label Setup →</Link>
                                          </p>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                → For building your Snapshot: <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                                          </p>
                                    </div>

                                    {/* Section 3: Setup Steps */}
                                    <h2 id="setup-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          3. How to Set Up GoHighLevel SaaS Mode (10 Steps)
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Once all four prerequisites are confirmed, the technical setup takes 2 to 4 hours. Here is the exact sequence.
                                    </p>

                                    <div className="space-y-4 mb-6">
                                          {setupSteps.map((item, idx) => (
                                                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                      <div className="flex items-center gap-3 mb-2">
                                                            <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                                                            <h3 className="text-base font-bold text-[#1A2236]">{item.step}</h3>
                                                      </div>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                                                </div>
                                          ))}
                                    </div>

                                    <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">THE STEP AGENCIES SKIP</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                <strong className="text-[#1A2236]">Step 9: offboarding automation.</strong> Every SaaS Mode setup guide covers the onboarding flow.
                                                Almost none of them covers what happens when a client cancels. Without an offboarding workflow, a client who cancels their Stripe
                                                subscription at the end of month 3 still has full access to your platform at the start of month 4. This is a revenue leak and a
                                                data security issue. Build the offboarding automation before you launch.
                                          </p>
                                    </div>

                                    {/* Section 4: Pricing Tiers */}
                                    <h2 id="pricing-tiers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          4. How to Structure Your Pricing Tiers
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Most successful GHL SaaS operators run 2 to 3 tiers. Here is the structure that converts best.
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tier</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Suggested price/mo</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to include</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to gate</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {pricingTiers.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.tier}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.price}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.include}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.gate}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
                                          <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                                                <li><strong className="text-[#1A2236]">Price based on outcomes, not features.</strong> 'Save 10 hours per week on lead follow-up' is an outcome. Price each tier against the outcome.</li>
                                                <li><strong className="text-[#1A2236]">Make the middle tier the most attractive.</strong> Most SaaS businesses earn the majority of MRR from the mid-tier plan.</li>
                                                <li><strong className="text-[#1A2236]">Offer annual billing at 15 to 20% discount.</strong> Annual clients churn at one-third the rate of monthly clients.</li>
                                                <li><strong className="text-[#1A2236]">Do not price below $97 per month.</strong> Sub-$97 clients treat the software as disposable and churn at significantly higher rates.</li>
                                          </ul>
                                    </div>

                                    {/* Section 5: Margin Calculator */}
                                    <h2 id="margin-calculator" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          5. What Does the Margin Look Like at Different Client Volumes?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Your platform cost is fixed at $497 per month regardless of how many clients you have. Here is what the economics look like as your client base grows.
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Clients</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your price/mo</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly revenue</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL cost</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Net margin</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Annualised</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {marginData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.clients} clients</td>
                                                                  <td className="py-3 px-3">{item.price}</td>
                                                                  <td className="py-3 px-3">{item.revenue}</td>
                                                                  <td className="py-3 px-3">{item.ghlCost}</td>
                                                                  <td className="py-3 px-3 text-[#25C97D] font-semibold">{item.netMargin}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.annualised}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <TrendingUp className="w-4 h-4 text-[#0E9BF0]" />
                                                <span className="text-sm font-bold text-[#0E9BF0]">USAGE REBILLING ON TOP</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                Usage rebilling adds margin on top of subscription revenue. At 20 clients each sending 500 SMS per month, with a $0.0071 per-message markup,
                                                that is an additional $71 per month in pure margin. At 50 clients it is $177 per month. At 200 clients it is $710 per month from usage alone,
                                                on top of subscription revenue. This is why the economics of SaaS Mode improve non-linearly as the client base grows.
                                          </p>
                                    </div>

                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          For a deeper breakdown of the SaaS Mode business model and pricing strategy:
                                          <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label SaaS Guide →</Link>
                                    </p>

                                    {/* Section 6: Who It's For */}
                                    <h2 id="who-its-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          6. Who Is GoHighLevel SaaS Mode Actually Built For?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          SaaS Mode is not for every agency at every stage. For the full context on who GHL is built for:
                                          <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                          <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                                                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> SaaS Mode is right for you if:</h3>
                                                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                                                      <li>You already have 5 to 10 clients on GHL and manual billing/onboarding is a bottleneck</li>
                                                      <li>You want clients to self-sign-up and pay without involving you</li>
                                                      <li>You have a tested Snapshot ready to deploy</li>
                                                      <li>You want to build recurring revenue that scales beyond your service delivery hours</li>
                                                </ul>
                                          </div>
                                          <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                                                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> SaaS Mode is not right for you if:</h3>
                                                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                                                      <li>You are just starting on GHL with fewer than 3 clients</li>
                                                      <li>You have not built and tested a Snapshot</li>
                                                      <li>Your clients are all on retainers where you manage everything (SaaS Mode is for self-serve clients)</li>
                                                </ul>
                                          </div>
                                    </div>

                                    <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Star className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">WE SET THIS UP FOR YOU</span>
                                          </div>
                                          <p className="text-sm text-white/80 leading-relaxed mb-3">
                                                GHL Scale Up configures complete GoHighLevel SaaS Mode setups: Stripe connection, SaaS Configurator, pricing tiers,
                                                Snapshot build, sign-up page, offboarding automation, and end-to-end test. Most setups go live in 5 to 7 business days.
                                          </p>
                                          <p className="text-sm text-white/80 leading-relaxed mb-3">
                                                See real results from our GHL SaaS setups:
                                                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
                                          </p>
                                          <p className="text-sm text-white/80 leading-relaxed">
                                                To discuss your setup:
                                                <Link href="/contact-us" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call at ghlscaleup.com/contact-us →</Link>
                                          </p>
                                          <p className="text-sm text-white/60 leading-relaxed mt-3">
                                                Our full <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS setup service →</Link>
                                          </p>
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

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS: Business Model Guide →</Link>
                                                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                                                <Link href="/blog/gohighlevel-white-label" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label: How It Works and Setup Guide →</Link>
                                                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                                                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                                                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Service →</Link>
                                          </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to launch your GoHighLevel SaaS business?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      GHL Scale Up builds the whole setup. You launch in 5 to 7 days. Stripe setup, SaaS Configurator, pricing tiers,
                                                      Snapshot build, sign-up page, offboarding automation all configured and tested before handover.
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
                                                5+ years GHL experience · 200+ systems built globally including SaaS Mode setups for agencies across real estate,
                                                healthcare, home services, and marketing. All technical steps verified as of June 2026.
                                          </p>
                                          <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                                          <div className="text-sm font-bold text-white mb-2">Ready to Launch SaaS Mode?</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">We set up complete GHL SaaS Mode configurations. 5 to 7 business days.</p>
                                          <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                                                Get Started
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