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
  Smartphone,
  Briefcase,
  Rocket,
  Clock
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelForAgenciesClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-built-for-agencies',
        'which-plan',
        'five-features',
        'onboard-clients',
        'right-for-agency',
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
      q: "Is GoHighLevel good for marketing agencies?",
      a: "Yes — GoHighLevel is specifically built for marketing agencies. Its sub-account model gives every client a fully isolated workspace managed from one agency dashboard. The Unlimited plan at $297/month includes unlimited client sub-accounts, white-label branding, and Snapshot deployment. No other platform in this price range offers this combination of multi-client management features. Agencies managing 3+ clients almost universally find the economics compelling."
    },
    {
      q: "How many clients can I manage on GoHighLevel?",
      a: "On the Unlimited plan ($297/month) and Agency Pro ($497/month), there is no limit on the number of client sub-accounts you can create. Agencies run 50, 100, and 200+ client sub-accounts on a single Unlimited plan. The platform cost stays flat regardless of how many clients you add. Each sub-account is fully isolated with its own CRM, contacts, funnels, automations, and users."
    },
    {
      q: "What is the difference between GoHighLevel Unlimited and Agency Pro for agencies?",
      a: "The Unlimited plan ($297/mo) gives you unlimited sub-accounts, white-label branding, Snapshots, and the full agency dashboard. You create sub-accounts manually and bill clients through your own system. Agency Pro ($497/mo) adds SaaS Mode — automated Stripe billing, pricing tiers, self-service client sign-up, and a white-label mobile app add-on. Start on Unlimited; upgrade to Pro when you want clients to sign up and pay automatically."
    },
    {
      q: "What is a GoHighLevel sub-account?",
      a: "A GoHighLevel sub-account is a fully isolated client workspace inside your agency's master account. Each sub-account has its own CRM, contacts, pipelines, funnels, automations, calendars, phone numbers, and users. Clients cannot see other clients' data. You can switch between all sub-accounts from one agency dashboard login. Creating a new sub-account takes under two minutes."
    },
    {
      q: "How do GoHighLevel Snapshots help agencies scale?",
      a: "A Snapshot is a reusable template of a complete sub-account setup — all workflows, funnels, pipelines, email templates, custom fields, and calendars packaged for one-click deployment. Instead of rebuilding each client system from scratch (8–40 hours), you attach your niche Snapshot when creating a new sub-account and customise the client-specific details in 20–60 minutes. Agencies with well-built Snapshots can onboard a new client in under an hour."
    },
    {
      q: "Can I white-label GoHighLevel for my agency clients?",
      a: "Yes. On the Unlimited plan ($297/mo) and above, you can fully white-label GoHighLevel under your own brand. Clients log into your custom domain (e.g. app.youragency.com), see your logo and brand colours, and have no indication they are using GoHighLevel. On Agency Pro, you can also offer a white-label mobile app published under your agency name in the App Store."
    },
    {
      q: "How does GoHighLevel SaaS Mode work for agencies?",
      a: "SaaS Mode, available on Agency Pro ($497/mo), lets you resell GoHighLevel under your own brand as a software subscription product. You configure pricing tiers, connect Stripe, and set up a self-service sign-up page. When a client pays, GoHighLevel automatically creates their sub-account, deploys your Snapshot, and sends them login credentials — with zero manual work. You keep the difference between what clients pay you and what you pay GoHighLevel."
    },
    {
      q: "Is GoHighLevel better than HubSpot for agencies?",
      a: "For most marketing agencies managing multiple client accounts, yes. GoHighLevel at $297/month gives you unlimited clients with white-label branding. HubSpot requires a separate account per client — at $890/month per account, a 10-client agency setup costs $8,900+ per month. GoHighLevel also has native SMS, AI features, and SaaS resale capability that HubSpot does not offer at any tier. HubSpot wins for enterprise B2B companies with large in-house marketing teams."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-built-for-agencies', title: '1. Why Is GoHighLevel Built for Agencies (Not Generic Businesses)?' },
    { id: 'which-plan', title: '2. Which GoHighLevel Plan Do Agencies Actually Need?' },
    { id: 'five-features', title: '3. What Are the Five GHL Features That Matter Most for Agencies?' },
    { id: 'onboard-clients', title: '4. How Do Agencies Use GHL to Onboard Clients in Minutes, Not Days?' },
    { id: 'right-for-agency', title: '5. Is GoHighLevel Right for Your Agency? (Decision Framework)' },
    { id: 'common-mistakes', title: '6. What Are the Most Common Agency GHL Mistakes?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const platformComparison = [
    { platform: 'GoHighLevel Unlimited', cost: '$297 flat', multiClient: 'Native sub-account model', whiteLabel: 'Yes — full', saasResale: 'Yes (Pro plan)' },
    { platform: 'HubSpot Marketing Pro', cost: '$8,900+ (10 accounts)', multiClient: 'No native equivalent', whiteLabel: 'No', saasResale: 'No' },
    { platform: 'ActiveCampaign', cost: '$1,500–$3,000+', multiClient: 'Separate accounts only', whiteLabel: 'No', saasResale: 'No' },
    { platform: 'Salesforce Essentials', cost: '$2,500–$5,000+', multiClient: 'Separate orgs only', whiteLabel: 'No', saasResale: 'No' },
    { platform: 'ClickFunnels', cost: '$970–$2,970+', multiClient: 'No client management', whiteLabel: 'No', saasResale: 'No' },
  ];

  const planComparison = [
    { feature: 'Sub-accounts', starter: '3 only', unlimited: 'Unlimited', pro: 'Unlimited' },
    { feature: 'White-label branding', starter: 'No', unlimited: 'Yes', pro: 'Yes' },
    { feature: 'Snapshot deployment', starter: 'Limited', unlimited: 'Yes', pro: 'Yes' },
    { feature: 'Agency dashboard', starter: 'Basic', unlimited: 'Full', pro: 'Full' },
    { feature: 'SaaS Mode (client billing)', starter: 'No', unlimited: 'No', pro: 'Yes' },
    { feature: 'Client self-service sign-up', starter: 'No', unlimited: 'No', pro: 'Yes' },
    { feature: 'Usage rebilling + markup', starter: 'No', unlimited: 'Basic', pro: 'Full' },
    { feature: 'White-label mobile app', starter: 'No', unlimited: 'No', pro: 'Add-on ($49/mo)' },
    { feature: 'Best for', starter: 'Solo business owners only', unlimited: 'Most agencies — start here', pro: 'Agencies reselling GHL as SaaS' },
  ];

  const featuresList = [
    { title: 'Sub-accounts — the foundation', desc: 'Every client lives in their own isolated sub-account. Creating one takes under two minutes. Each has its own CRM, funnels, automations, pipelines, contacts, and users. Clients cannot see each other\'s data.' },
    { title: 'Snapshots — the onboarding multiplier', desc: 'A Snapshot is a pre-built copy of an entire sub-account setup for one-click deployment. Attaching a Snapshot at sub-account creation reduces client onboarding from a 10-hour manual build to a 20-minute configuration task.' },
    { title: 'White-label branding — the client experience', desc: 'On Unlimited plan and above, GoHighLevel is invisible to clients. Your logo, your domain (app.youragency.com), your support email — clients see your software product.' },
    { title: 'Workflow automation — running without you', desc: 'Create automations that run 24/7 across every client sub-account — lead follow-up, appointment reminders, missed call text-back, review requests. Once built in a Snapshot, automations deploy to every new client automatically.' },
    { title: 'SaaS Mode — the revenue model', desc: 'Agency Pro lets you charge clients a monthly subscription fee to access your white-label platform. At 20 clients paying $297/month: $5,940 monthly revenue against a $497 platform cost.' },
  ];

  const mistakesList = [
    { mistake: 'No Snapshots — rebuilding from scratch for every client', fix: 'Build one master Snapshot per niche you serve and deploy it to every new account. This is the single highest-leverage operational improvement an agency can make on GHL.' },
    { mistake: 'One giant workflow doing everything', fix: 'Build modular workflows: one workflow per job, connected by tags. Small, focused, testable. When something breaks, you can isolate which step caused the problem.' },
    { mistake: 'Not using the agency dashboard for monitoring', fix: 'Use the Agency Dashboard to see all sub-accounts from one screen — lead activity, pipeline health, who hasn\'t logged in this week. Catch client issues before clients notice them.' },
    { mistake: 'Upgrading to Agency Pro before building the SaaS foundation', fix: 'Start on Unlimited ($297/mo), build your Snapshot library, and validate the agency model. Upgrade to Pro when you are ready to offer self-service sign-up to clients.' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel for Agencies 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel for Agencies</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Agency</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel for Agencies:<br />
            <span className="text-[#F8D000]">The Complete 2026 Guide (Setup, SaaS & Scaling)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Agency Builds Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Most marketing software is built for a single company managing its own customers. 
            GoHighLevel was built for agencies managing multiple clients — and that one architectural 
            decision changes everything about the economics, the workflow, and the scale of what's possible.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer — Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel is purpose-built for marketing agencies in a way no other platform in its price range is.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Every client gets their own isolated sub-account — their own CRM, funnels, automations, and contacts — 
                managed from one agency dashboard. The platform is flat-rate: <strong className="text-[#0E9BF0]">$297/month for unlimited clients</strong> 
                on the Unlimited plan, <strong className="text-[#0E9BF0]">$497/month for SaaS resale</strong> on Agency Pro. 
                You can run 100+ client accounts for the same price as running one. That's the agency case for GoHighLevel in two sentences.
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

            {/* Section 1: Why Built for Agencies */}
            <h2 id="why-built-for-agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Is GoHighLevel Built for Agencies (Not Generic Businesses)?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most CRM and marketing platforms are built for a single company managing its own leads and customers. 
              The architecture assumes one team, one database, one billing setup. Agencies need something different: 
              multiple clients, each completely isolated from each other, managed from a single login.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel solves this with the sub-account model.</strong> Your agency account is the master level. 
              Every client gets their own sub-account — a fully self-contained workspace with their own CRM, funnels, automations, 
              pipelines, calendar, phone numbers, and contacts. Client A cannot see Client B's data. You can see all of them from one dashboard.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">10-client agency cost/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Multi-client management</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">White-label</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">SaaS resale</th>
                  </tr>
                </thead>
                <tbody>
                  {platformComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.cost}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.multiClient}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whiteLabel}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.saasResale}</td>
                     </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE CORE ADVANTAGE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                On GoHighLevel Unlimited ($297/mo), you pay the same price whether you have 1 client or 100. 
                No per-seat fees. No per-contact limits. No per-sub-account charges. For a 10-client agency, 
                this is the difference between a $297/month tool and an $8,900+/month tool stack.
              </p>
            </div>

            {/* Section 2: Which Plan */}
            <h2 id="which-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Which GoHighLevel Plan Do Agencies Actually Need?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel has three plans. For agencies, two are relevant. Here is the honest breakdown:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Starter — $97/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Unlimited — $297/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Agency Pro — $497/mo</th>
                   </tr>
                </thead>
                <tbody>
                  {planComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.starter}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.unlimited}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.pro}</td>
                     </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#0E9BF0]">Most agencies should start on Unlimited ($297/mo).</strong> 
                It gives you unlimited client sub-accounts, white-label branding, full snapshot deployment, and the complete agency dashboard. 
                Upgrade to Agency Pro ($497/mo) once you want clients to sign up and pay through your branded platform automatically — not before.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full pricing breakdown including usage fees and AI costs: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
            </p>

            {/* Section 3: Five Features */}
            <h2 id="five-features" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Are the Five GHL Features That Matter Most for Agencies?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel has hundreds of features. For agency operations, five make the most impact:
            </p>

            <div className="space-y-4 mb-6">
              {featuresList.map((feature, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9BF0]" />
                    <h3 className="text-base font-bold text-[#1A2236]">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-4 my-4 text-white">
              <p className="text-sm text-white/80 leading-relaxed">
                → Full guide: <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">How to Create and Use a GoHighLevel Snapshot →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mt-2">
                → White-label setup guide: <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label: How It Works →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mt-2">
                → Workflow automation guide: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mt-2">
                → SaaS Mode setup: <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Service →</Link>
              </p>
            </div>

            {/* Section 4: Onboard Clients */}
            <h2 id="onboard-clients" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do Agencies Use GHL to Onboard Clients in Minutes, Not Days?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The biggest operational gain from GoHighLevel for agencies is not the features themselves — 
              it is the repeatable, systematised onboarding that the sub-account and Snapshot architecture enables.
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                <p className="text-sm text-[#5C6880] leading-relaxed"><strong className="text-[#1A2236]">Build one master Snapshot per niche.</strong> Create a 'template' sub-account for your most common client type. Build the full system: intake funnel, appointment workflows, review requests, missed call text-back, CRM pipeline.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                <p className="text-sm text-[#5C6880] leading-relaxed"><strong className="text-[#1A2236]">Create the client's sub-account.</strong> In Agency View → Accounts, click Add Sub-Account. Before saving, attach your niche Snapshot. The account is live with the full system pre-installed.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                <p className="text-sm text-[#5C6880] leading-relaxed"><strong className="text-[#1A2236]">Customise in 20–60 minutes.</strong> Update business name and logo, phone number and email in automation templates, calendar link, and placeholder copy. The architecture is already built.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                <p className="text-sm text-[#5C6880] leading-relaxed"><strong className="text-[#1A2236]">Connect integrations and go live.</strong> Connect email sending domain (DKIM/SPF), Stripe, and third-party tools. Run a test lead. Hand over login credentials through your white-label domain.</p>
              </div>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE TIME SAVING IN REAL NUMBERS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Building a client account from scratch takes 8–40 hours of billable time. Deploying and customising a Snapshot takes 20–60 minutes. 
                <strong> For a 10-client agency, that is 80–400 hours of recovered time per year.</strong> At $75/hr, that is $6,000–$30,000 in operational value.
              </p>
            </div>

            {/* Section 5: Decision Framework */}
            <h2 id="right-for-agency" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Is GoHighLevel Right for Your Agency? (Decision Framework)
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> GoHighLevel is the right fit if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You manage 3+ active client accounts and pay $300–$1,200/month for separate tools</li>
                  <li>You spend 8–40 hours onboarding each new client from scratch</li>
                  <li>You want to build a recurring software revenue stream on top of your service business</li>
                  <li>Your clients need SMS, AI Voice Agent, booking calendars, and CRM — all in one system</li>
                  <li>You want to offer clients a branded software product with your logo and domain</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> GoHighLevel is not the right fit if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You are a solo freelancer with 1–2 clients who only needs basic project management</li>
                  <li>Your clients are large enterprise B2B companies with complex multi-team sales cycles</li>
                  <li>Your agency works primarily with e-commerce brands needing inventory management</li>
                  <li>You need 1,500+ native third-party integrations out of the box</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR AGENCY AUDITS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                The most common pattern we see: an agency has been on GoHighLevel for 4–8 months, paying $297/month, 
                and using 15–20% of the platform's capability. No Snapshots. Basic workflows with no conditional logic. 
                AI features untouched. <strong className="text-white">The platform's value is unlocked by its architecture — not just by logging in.</strong>
              </p>
            </div>

            {/* Section 6: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Are the Most Common Agency GHL Mistakes?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are the four mistakes we fix most often across 200+ GHL agency audits.
            </p>

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
                <span className="text-sm font-bold text-[#F8D000]">HOW GHL SCALE UP HELPS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                We build production-ready GoHighLevel agency accounts from scratch — sub-account architecture, Snapshot library, 
                workflow automation, white-label setup, and SaaS Mode configuration. Most agency builds go live in 5–7 business days.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free 30-minute audit at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                → Ready to get your agency set up correctly? <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </p>
            </div>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions About GoHighLevel for Agencies
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
                <Link href="/blog/gohighlevel-white-label" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label: How It Works →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/blog/gohighlevel-review" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Review 2026: Honest Verdict →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Running an agency on GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Is your agency account actually built to scale? Most agency GHL accounts have no Snapshots, basic workflows, 
                  and untouched AI features. We audit and rebuild agency accounts every week. Book a free 30-minute call.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Agency GHL Audit
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
                5+ years GHL experience · 200+ agency systems built globally across real estate, healthcare, SaaS, 
                and marketing agencies. We have audited and rebuilt agency GHL accounts in 6 countries. 
                Everything we publish comes from real accounts, not documentation summaries.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Agency GHL Not Scaling?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We audit and rebuild agency GHL accounts. 5–7 business day delivery.</p>
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