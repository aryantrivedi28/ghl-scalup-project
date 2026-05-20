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
  Settings,
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
  Smartphone
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelWhiteLabelClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-includes',
        'which-plan',
        'setup-steps',
        'margin-calculator',
        'common-mistakes',
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
      q: "What is GoHighLevel white label?",
      a: "GoHighLevel white label means replacing all GoHighLevel branding in the platform with your own your logo, your colour scheme, your custom domain, and your app name. To your clients, the software appears to be your proprietary product. Basic white label (branded dashboard and custom domain) is available on the Unlimited plan at $297/month. Full SaaS Mode with automated billing and client provisioning requires the Agency Pro plan at $497/month."
    },
    {
      q: "What is the difference between GoHighLevel white label and SaaS Mode?",
      a: "White label refers to the branding layer your logo, domain, and colours applied to the dashboard. SaaS Mode is the business model layer it adds automated Stripe billing, pricing plan configuration, self-service client sign-up, and automatic sub-account creation when a client pays. You can have white label branding without SaaS Mode (on the $297 Unlimited plan), but you cannot have SaaS Mode without white label branding. Most serious agencies use both."
    },
    {
      q: "Which GoHighLevel plan is required for white label?",
      a: "Basic white label branding (custom domain, logo, brand colours, branded notifications) starts on the Unlimited plan at $297/month. Full SaaS Mode which includes automated Stripe billing, the SaaS Configurator for pricing tiers, self-service sign-up, and the white-label mobile app add-on requires the Agency Pro plan at $497/month."
    },
    {
      q: "What is the CNAME target for GoHighLevel white label domain setup?",
      a: "The CNAME target for GoHighLevel's white label domain is whitelabel.ludicrous.cloud. In your DNS provider, create a CNAME record with your chosen subdomain as the host (typically 'app') pointing to this target. If you use Cloudflare, set the record to DNS Only (grey cloud) not proxied. GoHighLevel automatically provisions an SSL certificate within 15–30 minutes of correct DNS propagation."
    },
    {
      q: "Is Stripe required for GoHighLevel SaaS Mode?",
      a: "Yes. Stripe is the only supported payment processor for GoHighLevel SaaS Mode billing. You need an active Stripe account in live mode to process client subscriptions through the SaaS Configurator. Stripe charges 2.9% + $0.30 per successful card transaction on top of your subscription pricing."
    },
    {
      q: "How long does GoHighLevel white label setup take?",
      a: "The technical configuration CNAME setup, logo upload, brand colours, branded notifications, and Stripe connection takes 2–4 hours for someone following a clear process. DNS propagation for the custom domain can take 15 minutes to 24 hours. Building a quality onboarding Snapshot takes an additional 4–8 hours. A complete white-label SaaS launch typically takes one full working day."
    },
    {
      q: "Can my clients tell they are using GoHighLevel under my white label?",
      a: "On the web platform with basic white label configured, clients see only your branding no GoHighLevel branding appears. However, clients who have previously used GoHighLevel may recognise the interface layout. The white-label mobile app ($49/month add-on on Agency Pro) eliminates this recognition risk entirely, as clients download your named app from the App Store."
    },
    {
      q: "What is the breakeven point for GoHighLevel Agency Pro ($497/mo)?",
      a: "At a common SaaS price of $197/month per client, the Agency Pro plan breaks even with 3 clients ($591 revenue against $497 cost). At 10 clients paying $197/month, net margin is approximately $1,473/month after platform cost. At 30 clients paying $297/month, net margin approaches $8,400/month. Usage-based costs (SMS, email, calls) either increase margin through rebilling markup or are absorbed into the subscription price."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-includes', title: '1. What Does GoHighLevel White Label Actually Include?' },
    { id: 'which-plan', title: '2. Which Plan Do You Need: Unlimited ($297) or Agency Pro ($497)?' },
    { id: 'setup-steps', title: '3. How to Set Up GoHighLevel White Label: Step-by-Step' },
    { id: 'margin-calculator', title: '4. The SaaS Mode Margin Calculator: What You Can Actually Earn' },
    { id: 'common-mistakes', title: '5. Three Common White Label Mistakes to Avoid' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const whiteLabelTiers = [
    { feature: 'Custom login domain (app.youragency.com)', basic: 'Yes', full: 'Yes' },
    { feature: 'Your logo + brand colours throughout dashboard', basic: 'Yes', full: 'Yes' },
    { feature: 'Branded support email and chat name', basic: 'Yes', full: 'Yes' },
    { feature: 'Branded email notifications to clients', basic: 'Yes', full: 'Yes' },
    { feature: 'Remove GoHighLevel branding from interface', basic: 'Yes', full: 'Yes' },
    { feature: 'Automated client billing via Stripe', basic: 'No', full: 'Yes' },
    { feature: 'SaaS Configurator (pricing tiers)', basic: 'No', full: 'Yes' },
    { feature: 'Self-service client sign-up flow', basic: 'No', full: 'Yes' },
    { feature: 'White-label mobile app (iOS + Android)', basic: 'No', full: 'Add-on ($49/mo)' },
    { feature: 'Client-facing SaaS dashboard (MRR, churn)', basic: 'No', full: 'Yes' },
    { feature: 'Usage rebilling with markup', basic: 'Basic', full: 'Full control' },
  ];

  const marginData = [
    { clients: 5, price: '$197/mo', revenue: '$985', platformCost: '$497', netMargin: '$488', marginPct: '+49%' },
    { clients: 10, price: '$197/mo', revenue: '$1,970', platformCost: '$497', netMargin: '$1,473', marginPct: '+75%' },
    { clients: 20, price: '$197/mo', revenue: '$3,940', platformCost: '$497', netMargin: '$3,443', marginPct: '+87%' },
    { clients: 30, price: '$297/mo', revenue: '$8,910', platformCost: '$497', netMargin: '$8,413', marginPct: '+94%' },
    { clients: 50, price: '$197/mo', revenue: '$9,850', platformCost: '$497', netMargin: '$9,353', marginPct: '+95%' },
  ];

  const mistakesList = [
    { mistake: 'Using your root domain instead of a subdomain', fix: 'Always configure white label on a subdomain. Use \'app\', \'platform\', or \'crm\' as your prefix.' },
    { mistake: 'Enabling SaaS Mode before building your onboarding Snapshot', fix: 'Build and test your Snapshot first. The client experience at sign-up determines whether they stay or cancel within 30 days.' },
    { mistake: 'Building no offboarding process', fix: 'Build a GHL workflow triggered by Stripe cancellation webhook that suspends the sub-account within 24 hours.' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel White Label Guide 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL White Label</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel SaaS Mode</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel White Label:<br />
            <span className="text-[#F8D000]">What It Is, How It Works & Full Setup Guide (2026)</span>
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
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel's white label feature is one of the most-searched and most misunderstood 
            capabilities in the platform. This guide covers exactly what it is, which plan you actually need, 
            and how to set it up correctly, step by step.
          </p>
          <p className="text-sm text-white/50 leading-relaxed">
            New to GoHighLevel? Start here: <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete 2026 Guide →</Link>
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel white label means your clients log in to your brand your logo, your domain, your name with GoHighLevel invisible underneath.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Basic white label (logo, custom domain, branded dashboard) is available on the Unlimited plan at <strong className="text-[#0E9BF0]">$297/month</strong>. 
                Full SaaS Mode which adds automated client billing via Stripe, pricing tiers, and self-service sign-up requires the Agency Pro plan at 
                <strong className="text-[#0E9BF0]"> $497/month</strong>. Setup takes 2–4 hours. Breakeven on the Pro plan is 3 clients billing at $197/month.
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

            {/* Section 1: What Does White Label Include */}
            <h2 id="what-includes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Does GoHighLevel White Label Actually Include?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              White labelling GoHighLevel means removing every visible trace of the GoHighLevel brand from the platform 
              and replacing it with yours. Your clients log in to your domain, see your logo and colours, and have no idea 
              GoHighLevel is the technology underneath. To them, you are a software company.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are two distinct levels of white labelling inside GHL. Confusing them is the single most common mistake 
              agencies make when choosing a plan.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Basic White Label (Unlimited $297/mo)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Full SaaS Mode (Agency Pro $497/mo)</th>
                  </tr>
                </thead>
                <tbody>
                  {whiteLabelTiers.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.basic}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.full}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE KEY DISTINCTION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Basic white label makes your dashboard look like your product. SaaS Mode makes your billing, onboarding, 
                and provisioning automated. You can white label without SaaS Mode but you will be creating sub-accounts 
                and invoicing clients manually. Most agencies start on Unlimited ($297) and upgrade to Pro ($497) once 
                they have 8–10 clients and want automation.
              </p>
            </div>

            {/* Section 2: Which Plan Do You Need */}
            <h2 id="which-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Which Plan Do You Need: Unlimited ($297) or Agency Pro ($497)?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The answer depends on how you bill your clients and how many you are managing.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2">Choose Unlimited ($297/mo) if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You have fewer than 8–10 clients and are happy to create sub-accounts manually</li>
                  <li>You bill clients externally through Stripe invoices, PayPal, or your own system</li>
                  <li>You want white-label branding immediately but are not ready to build a self-service SaaS offer</li>
                  <li>You are testing the agency model before committing to the higher plan cost</li>
                </ul>
              </div>
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#0E9BF0] mb-2">Choose Agency Pro ($497/mo) if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You want clients to sign up and pay through your branded platform automatically</li>
                  <li>You are building a SaaS offer where clients self-serve (not a done-for-you agency)</li>
                  <li>You have 10+ clients and want billing and sub-account management decoupled</li>
                  <li>You want to set tiered pricing plans and gate features per tier</li>
                  <li>You want to rebill SMS, email, and AI usage to clients with your own markup</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full plan comparison including usage fees: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
            </p>

            {/* Section 3: Setup Steps */}
            <h2 id="setup-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Set Up GoHighLevel White Label: Step-by-Step
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before you start, gather: your logo file (transparent PNG, minimum 400px wide), your brand colours as hex codes, 
              your support email address, and your chosen subdomain (e.g. app.youragency.com).
            </p>

            <div className="space-y-5 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Go to Agency Settings</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Log into your GHL account, confirm you are in Agency View, then click Settings → Company.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Upload your logo and set brand colours</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Upload your agency logo (transparent PNG, 300×60px). Set your primary brand colour hex code applies to buttons, highlights, and accents.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Set up your custom white-label domain</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Create a CNAME record: Host = 'app', Value = <strong className="text-[#0E9BF0]">whitelabel.ludicrous.cloud</strong>. If using Cloudflare, set to DNS Only (grey cloud). SSL auto-provisions in 15–30 minutes.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Configure branded notifications</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Set your support email address and support chat name. These appear in all automated notifications to your clients.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Test your branded login</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Navigate to your custom subdomain in an incognito browser. Confirm logo, colours, and URL.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Enable SaaS Mode (Agency Pro only)</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Go to Settings → SaaS Mode. Connect Stripe, create pricing plans, attach a Snapshot for automated deployment.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">7</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Deploy and test end-to-end</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Run a complete test: use self-service sign-up, complete test payment, confirm sub-account creation and Snapshot deployment.</p>
              </div>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">CNAME QUICK REFERENCE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>CNAME target:</strong> whitelabel.ludicrous.cloud · <strong>Record type:</strong> CNAME · 
                <strong>Host/Name:</strong> app (or your chosen prefix) · <strong>Cloudflare:</strong> DNS Only (grey cloud) NOT proxied · 
                <strong>SSL:</strong> Auto-provisioned in 15–30 minutes
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Setting up your Snapshot for automated deployment? See: 
              <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline ml-1">How to Create a GoHighLevel Snapshot →</Link>
            </p>

            {/* Section 4: Margin Calculator */}
            <h2 id="margin-calculator" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. The SaaS Mode Margin Calculator: What You Can Actually Earn
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here is the business case at three scales. Your platform cost is fixed at $497/month regardless of client count. 
              Stripe charges 2.9% + $0.30 per successful charge on top of your client payments.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Clients</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your Price/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly Revenue</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform Cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Net Margin/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Margin %</th>
                  </tr>
                </thead>
                <tbody>
                  {marginData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.clients} clients</td>
                      <td className="py-3 px-3">{item.price}</td>
                      <td className="py-3 px-3">{item.revenue}</td>
                      <td className="py-3 px-3">{item.platformCost}</td>
                      <td className="py-3 px-3 text-[#25C97D] font-semibold">{item.netMargin}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.marginPct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM 200+ GHL BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                The most common pricing mistake we see: agencies price below $150/month, which makes the economics hard at small scale 
                and signals low value to clients. <strong className="text-white">Most successful GHL SaaS operators charge $197–$297/month for their core tier.</strong> 
                Churn is lower. ROI conversations are easier.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → To understand whether the GoHighLevel investment is right for your agency: 
              <Link href="/blog/gohighlevel-review" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Review 2026: Honest Verdict →</Link>
            </p>

            {/* Section 5: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Three Common GoHighLevel White Label Mistakes to Avoid
            </h2>

            <div className="space-y-4 mb-6">
              {mistakesList.map((item, idx) => (
                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.mistake}</p>
                      <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Need help setting up GoHighLevel workflow automation for offboarding? 
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE BUILD THIS FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                At GHL Scaleup, we configure white-label GHL setups and full SaaS Mode builds as a core service custom domain, 
                Stripe billing, onboarding Snapshot, offboarding workflows, and branded notifications. Most builds go live in 5–7 business days.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free 30-minute call at ghlscaleup.com/contact-us
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                → See our full SaaS setup service: <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Service →</Link>
              </p>
            </div>

            {/* Section 6: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              6. Frequently Asked Questions About GoHighLevel White Label
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
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/blog/gohighlevel-review" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Review 2026: Honest Verdict →</Link>
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to launch your white-label GHL platform?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We build it correctly in 5–7 business days. White-label domain, Stripe SaaS billing, onboarding Snapshot, 
                  offboarding workflows, and branded notifications all configured and tested before handover. 200+ builds delivered.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free GHL SaaS Setup Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
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
                5+ years GHL experience · 200+ systems built including white-label SaaS setups across real estate, 
                healthcare, agencies, and home services globally. All technical steps verified against GoHighLevel's 
                official documentation as of May 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Want to Launch a White-Label SaaS?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We configure white-label GHL setups and full SaaS Mode builds. 5–7 business day delivery.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
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