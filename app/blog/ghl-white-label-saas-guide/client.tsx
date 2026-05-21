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
  Star,
  AlertTriangle,
  Clock
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GHLWhiteLabelSaaSClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-white-label-saas',
        'difference',
        'who-its-for',
        'setup-steps',
        'pricing-strategy',
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
      q: "What is GoHighLevel white label SaaS?",
      a: "GoHighLevel white label SaaS refers to using GoHighLevel's SaaS Mode feature to resell the platform as your own branded software product. Clients sign up through your pricing page, pay a monthly subscription via Stripe, and receive access to a fully configured GoHighLevel sub-account under your brand. The entire experience login domain, logo, pricing, feature access carries your brand. GoHighLevel is invisible. SaaS Mode requires the Agency Pro plan at $497/month."
    },
    {
      q: "What is the difference between GoHighLevel white label and SaaS Mode?",
      a: "GoHighLevel white label is the branding layer your logo, colours, and custom domain applied to the GHL dashboard. It is available from $297/month and requires you to create sub-accounts and invoice clients manually. GoHighLevel SaaS Mode is the business model layer it adds a SaaS Configurator for creating pricing tiers, automated Stripe billing, self-service client sign-up, automatic sub-account provisioning, and feature gating per tier."
    },
    {
      q: "Which GoHighLevel plan is required for SaaS Mode?",
      a: "GoHighLevel SaaS Mode is exclusively available on the Agency Pro plan at $497/month. It is not available on the Starter plan ($97/mo) or the Unlimited plan ($297/mo). The Agency Pro plan includes everything in Unlimited plus the SaaS Configurator, automated Stripe billing, self-service sign-up flows, feature gating per pricing tier, usage rebilling with markup, and the option to add a white-label mobile app."
    },
    {
      q: "Is Stripe required for GoHighLevel SaaS Mode?",
      a: "Yes. Stripe is the only supported payment processor for GoHighLevel SaaS Mode. You need an active Stripe account in live mode to process client subscriptions. Stripe charges 2.9% plus $0.30 per successful transaction. PayPal and other processors are not supported at the SaaS billing layer."
    },
    {
      q: "How long does it take to set up GoHighLevel SaaS Mode?",
      a: "The technical configuration connecting Stripe, creating pricing plans in the SaaS Configurator, configuring feature access, attaching a Snapshot, and setting up the sign-up page takes 2–4 hours for someone following a clear process. DNS propagation takes 15 minutes to 24 hours. Building and testing a quality Snapshot adds another 4–8 hours. Most agencies budget one full working day to go from zero to a tested, live SaaS sign-up flow."
    },
    {
      q: "How much can I earn with GoHighLevel white label SaaS?",
      a: "Your earnings depend on client count and your pricing. At 10 clients paying $197/month, net margin after the $497 platform cost is approximately $1,473/month. At 20 clients: approximately $3,443/month net. At 50 clients: approximately $9,353/month net. Usage rebilling (charging clients more than GHL charges you for SMS, email, and calls) adds additional margin on top. The platform cost stays fixed at $497/month regardless of client count."
    },
    {
      q: "What happens when a client cancels their GoHighLevel SaaS subscription?",
      a: "When a client cancels their Stripe subscription, their GoHighLevel sub-account remains active until you manually suspend it SaaS Mode does not automate offboarding. Best practice is to build a GoHighLevel workflow triggered by the Stripe cancellation webhook that notifies you immediately and suspends the sub-account within 24 hours. Without this automation, cancelled clients retain indefinite access to your platform."
    },
    {
      q: "Do clients know they are using GoHighLevel under my white label SaaS?",
      a: "On the web platform, clients see only your branding your logo, your domain, your support email. GoHighLevel branding does not appear in the interface. Clients who have previously used GoHighLevel may recognise the interface layout. The white-label mobile app add-on (approximately $49/month on Agency Pro) eliminates this recognition risk entirely, as clients download your named app from the App Store."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-white-label-saas', title: '1. What Is GoHighLevel White Label SaaS?' },
    { id: 'difference', title: '2. White Label vs White Label SaaS The Exact Difference' },
    { id: 'who-its-for', title: '3. Who Is GHL White Label SaaS Built For?' },
    { id: 'setup-steps', title: '4. How to Set Up GoHighLevel SaaS Mode (Step-by-Step)' },
    { id: 'pricing-strategy', title: '5. How to Price Your White Label SaaS Offer' },
    { id: 'margin-calculator', title: '6. The SaaS Margin Calculator' },
    { id: 'common-mistakes', title: '7. Common White Label SaaS Mistakes to Avoid' },
    { id: 'faq', title: '8. Frequently Asked Questions' },
  ];

  const comparisonTable = [
    { feature: 'What it is', ghlWhiteLabel: 'Branding layer your logo, domain, colours', ghlSaaS: 'Business model automated billing + software product' },
    { feature: 'What clients experience', ghlWhiteLabel: 'Your brand on the GHL dashboard', ghlSaaS: 'Your brand on dashboard AND self-service sign-up + billing portal' },
    { feature: 'Plan required', ghlWhiteLabel: 'Unlimited $297/month', ghlSaaS: 'Agency Pro $497/month only' },
    { feature: 'Client billing', ghlWhiteLabel: 'You invoice manually (Stripe, PayPal, etc.)', ghlSaaS: 'Clients pay automatically through your branded checkout' },
    { feature: 'Sub-account creation', ghlWhiteLabel: 'You create manually for each client', ghlSaaS: 'Created automatically when client pays' },
    { feature: 'Snapshot deployment', ghlWhiteLabel: 'You deploy manually', ghlSaaS: 'Deployed automatically on payment' },
    { feature: 'Pricing tiers', ghlWhiteLabel: 'You set prices externally', ghlSaaS: 'Built inside GHL SaaS Configurator up to 20 tiers' },
    { feature: 'Feature gating', ghlWhiteLabel: 'Not available', ghlSaaS: 'Gate which GHL features each tier can access' },
    { feature: 'Best for', ghlWhiteLabel: 'Agencies managing 3–10 clients manually', ghlSaaS: 'Agencies wanting to scale beyond 10 clients with zero manual work' },
  ];

  const pricingTiers = [
    { tier: 'Starter', suggestedPrice: '$97–$147/mo', included: 'CRM, pipelines, calendar, basic automations, email marketing', bestFor: 'Small businesses testing the platform' },
    { tier: 'Growth', suggestedPrice: '$197–$247/mo', included: 'Everything in Starter + SMS, funnels, reputation management, AI chatbot', bestFor: 'Growing businesses running active lead gen' },
    { tier: 'Pro', suggestedPrice: '$297–$497/mo', included: 'Everything in Growth + AI Voice Agent, advanced automations, full reporting', bestFor: 'High-volume businesses wanting maximum automation' },
  ];

  const marginData = [
    { clients: 3, price: '$197/mo', revenue: '$591', ghlCost: '$497', netMargin: '$94 breakeven', annualised: '$1,128' },
    { clients: 5, price: '$197/mo', revenue: '$985', ghlCost: '$497', netMargin: '$488', annualised: '$5,856' },
    { clients: 10, price: '$197/mo', revenue: '$1,970', ghlCost: '$497', netMargin: '$1,473', annualised: '$17,676' },
    { clients: 20, price: '$197/mo', revenue: '$3,940', ghlCost: '$497', netMargin: '$3,443', annualised: '$41,316' },
    { clients: 50, price: '$197/mo', revenue: '$9,850', ghlCost: '$497', netMargin: '$9,353', annualised: '$112,236' },
    { clients: 20, price: '$297/mo', revenue: '$5,940', ghlCost: '$497', netMargin: '$5,443', annualised: '$65,316' },
    { clients: 50, price: '$297/mo', revenue: '$14,850', ghlCost: '$497', netMargin: '$14,353', annualised: '$172,236' },
  ];

  const mistakesList = [
    { mistake: 'Launching without a tested Snapshot', fix: 'Build and test the Snapshot in a clean sub-account completely before connecting it to SaaS Mode.' },
    { mistake: 'No offboarding automation when a client cancels', fix: 'Build a GHL workflow triggered by Stripe cancellation webhook that suspends the sub-account within 24 hours.' },
    { mistake: 'Pricing all tiers too close together', fix: 'Create clear, meaningful differentiation between tiers. Features that save time belong in higher tiers with 2–3× price gaps.' },
    { mistake: 'Upgrading to Agency Pro before building the foundation', fix: 'Build Snapshot and pricing model on Unlimited plan ($297/mo). Only upgrade when ready to go live within 30 days.' },
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
          <span className="text-[#1A2236] font-medium">GHL White Label SaaS Guide 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL White Label SaaS</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel SaaS Mode</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS Resale</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel White Label SaaS:<br />
            <span className="text-[#F8D000]">How SaaS Mode Works & Full Setup Guide (2026)</span>
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
            Every agency owner has heard the pitch: 'build a white label SaaS on GoHighLevel and create recurring revenue.' 
            Most know what GoHighLevel white label means. Fewer understand what <strong className="text-white">GoHighLevel white label SaaS</strong> 
            actually means and fewer still know how to set it up correctly. This guide covers both.
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
                GoHighLevel white label SaaS means running GoHighLevel SaaS Mode the Agency Pro feature that lets you sell GHL as your own branded software product.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It requires the <strong className="text-[#0E9BF0]">Agency Pro plan at $497/month</strong>. It is different from basic white label (which is just branding). 
                With SaaS Mode active, clients find your pricing page, choose a plan, pay via Stripe, and get their sub-account provisioned automatically. 
                You earn the margin. You do zero manual work per client signup.
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

            {/* Section 1: What Is White Label SaaS */}
            <h2 id="what-is-white-label-saas" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is GoHighLevel White Label SaaS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel white label SaaS is the business model where you use GoHighLevel's SaaS Mode to resell the platform 
              as your own branded software product. Clients sign up through your pricing page, pay a monthly subscription, 
              and access a fully configured GHL sub-account under your brand with your logo, your domain, your pricing, 
              and your feature access rules. GoHighLevel is completely invisible to them.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is not the same as simply white-labelling GHL's interface. White labelling is the branding layer. 
              GoHighLevel white label SaaS is the business model layer it adds automated client billing, 
              self-service onboarding, and recurring revenue that runs without manual intervention.
            </p>
            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#25C97D]">The result:</strong> you become a software company. Clients pay you a monthly software fee. 
                You pay GoHighLevel $497/month. Everything in between is your margin.
              </p>
            </div>

            {/* Section 2: Difference */}
            <h2 id="difference" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. White Label vs White Label SaaS The Exact Difference
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the most misunderstood distinction in the GoHighLevel ecosystem. Many agency owners think they're running 
              a white label SaaS business when they're actually just running white-labelled client accounts.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GHL White Label</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GHL White Label SaaS (SaaS Mode)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghlWhiteLabel}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.ghlSaaS}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE SIMPLEST WAY TO THINK ABOUT IT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>GHL White Label:</strong> Makes GoHighLevel look like your software.<br />
                <strong>GHL White Label SaaS:</strong> Makes GoHighLevel operate as your software business with automated billing, 
                tiered pricing, self-service sign-up, and recurring revenue that scales without adding manual work per client.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the technical white label branding setup (domain, logo, CNAME), see our dedicated guide: 
              <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label Setup →</Link>
            </p>

            {/* Section 3: Who It's For */}
            <h2 id="who-its-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Who Is GHL White Label SaaS Built For?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL SaaS Mode is not for everyone. It is for a specific type of agency owner at a specific stage of growth.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> GoHighLevel white label SaaS is right for you if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You already have 5–10 clients on GHL and manual billing/onboarding is becoming a bottleneck</li>
                  <li>You want clients to self-sign-up and pay without involving you</li>
                  <li>You want to create multiple product tiers with different feature access</li>
                  <li>You want to build recurring revenue that scales independently of your service hours</li>
                  <li>You are ready to position yourself as a software company, not just an agency</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> GoHighLevel white label SaaS is not right for you if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You are just starting on GHL with fewer than 3 clients start with Unlimited at $297/mo</li>
                  <li>All your clients are on retainers where you handle everything SaaS Mode is for self-serve clients</li>
                  <li>You have not yet built and tested a quality Snapshot SaaS Mode without a Snapshot means blank accounts</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a broader overview of how agencies use GoHighLevel: 
              <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
            </p>

            {/* Section 4: Setup Steps */}
            <h2 id="setup-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How to Set Up GoHighLevel SaaS Mode (Step-by-Step)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before you start, confirm: You are on the Agency Pro plan ($497/mo). You have a Stripe account in live mode. 
              You have a white-label domain configured (app.youragency.com). You have a Snapshot built and tested.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Upgrade to Agency Pro and open SaaS Mode</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In Agency View, go to Settings → Company → Billing and confirm you are on the $497/month Agency Pro plan. Then navigate to Settings → SaaS Mode.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Connect your Stripe account</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Click Connect Stripe and authorise the connection. Must be a live Stripe account. Stripe charges 2.9% + $0.30 per transaction.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Create your pricing plans</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Click Add Plan. Create each pricing tier you want to offer for example: Starter ($97/mo), Growth ($197/mo), Pro ($297/mo). Up to 20 pricing tiers.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Configure feature access per plan</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Define which GoHighLevel features clients can access per tier. Feature gating separates your tiers and prevents low-paying clients from accessing premium features.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Attach your Snapshot to each plan</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Inside each plan's settings, attach the relevant GoHighLevel Snapshot. When a client pays, the Snapshot deploys automatically.</p>
                <p className="text-sm text-[#0E9BF0] leading-relaxed ml-9 mt-1">→ Need a Snapshot? <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link></p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Set up your self-service sign-up page</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">The SaaS Configurator generates a hosted sign-up and checkout page. Customise with your branding and copy the sign-up URL.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">7</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Test the full flow end-to-end</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Use Stripe test mode to run a complete test. Confirm sub-account creation, Snapshot deployment, and branding. Then switch to live mode.</p>
              </div>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">SETUP TIME</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The technical setup takes 2–4 hours. DNS propagation can take 15 minutes to 24 hours. 
                Building and testing a quality Snapshot adds another 4–8 hours. Plan for one full working day.
              </p>
            </div>

            {/* Section 5: Pricing Strategy */}
            <h2 id="pricing-strategy" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How to Price Your White Label SaaS Offer
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Pricing is the most consequential decision in your SaaS launch. Most agencies price too low and create a race to the bottom.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tier</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Suggested Price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What's Included</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#0E9BF0]">{item.tier}</td>
                      <td className="py-3 px-3">{item.suggestedPrice}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.included}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-1">Pricing principles from the field:</p>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Do not price below $97/month churn rates are significantly higher on sub-$97 plans</li>
                <li>Absorb usage costs into the plan price add $50–$75 buffer for SMS, email, and calls</li>
                <li>Make the middle tier your most attractive most revenue comes from mid-tier plans</li>
                <li>Offer annual billing for 15–20% discount annual clients churn at one-third the rate</li>
              </ul>
            </div>

            {/* Section 6: Margin Calculator */}
            <h2 id="margin-calculator" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. The SaaS Margin Calculator
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your platform cost is fixed at $497/month regardless of how many clients you have. These are net margins before Stripe fees (2.9% + $0.30) and usage costs.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Clients</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your Price/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly Revenue</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Net Margin</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annualised</th>
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

            <div className="bg-[#1C2E4A] rounded-xl p-4 my-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">USAGE MARGIN ON TOP</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Agency Pro agencies can rebill SMS, email, calls, and AI usage to clients with a markup. 
                If GHL charges $0.0079/SMS and you charge clients $0.015/SMS, you earn $0.0071 per message across every client's volume. 
                This scales linearly as your client base grows.
              </p>
            </div>

            {/* Section 7: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Common White Label SaaS Mistakes to Avoid
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

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE BUILD THIS FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scaleup configures complete GoHighLevel white label SaaS setups Stripe billing, SaaS Configurator, 
                pricing tiers, Snapshot build, onboarding flow, and offboarding automation. Most builds go live in 5–7 business days.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free 30-minute strategy call at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                → Full SaaS Mode setup service: <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup →</Link>
              </p>
            </div>

            {/* Section 8: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              8. Frequently Asked Questions About GoHighLevel White Label SaaS
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
                <Link href="/blog/gohighlevel-white-label" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label: How It Works & Full Setup →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/blog/gohighlevel-review" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Review 2026: Honest Verdict →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to launch your GoHighLevel white label SaaS?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We build the whole thing. You launch in 5–7 days. Stripe setup, SaaS Configurator, pricing tiers, 
                  Snapshot build, onboarding flow, and offboarding automation all configured and tested before handover.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free GHL SaaS Strategy Call
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
                5+ years GHL experience · 200+ systems built globally including white label SaaS setups across real estate, 
                healthcare, agencies, and home services. All technical steps verified against GoHighLevel's official documentation as of May 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Want to Launch a White Label SaaS?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We configure complete GHL SaaS Mode setups. 5–7 business day delivery.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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