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
  RefreshCw,
  ListChecks,
  ClipboardList,
  Download,
  Printer,
  Video,
  Ticket,
  Trophy,
  TrendingDown,
  PieChart,
  Package
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function SaaSConsolidationPlaybookClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'saas-sprawl',
        'retainer-to-saas',
        'pricing-model',
        'revenue-scaling',
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
      q: "What is SaaS consolidation for agencies?",
      a: "SaaS consolidation, in the agency context, means packaging GoHighLevel's combined CRM, automation, and marketing capabilities into a branded software product that clients pay a recurring monthly fee to access, rather than billing clients for hours or a generic service retainer. The agency builds the system once using a Snapshot, then sells access to it across many clients through GoHighLevel's SaaS Mode, with automated billing and self-service client signup."
    },
    {
      q: "How is this different from just using GoHighLevel to replace my own tools?",
      a: "Replacing your own tool stack with GoHighLevel is an internal operations decision that reduces your costs and improves your own efficiency. SaaS consolidation is a business model decision. It is about packaging that same consolidated capability and selling it to your clients as a recurring software product, shifting your revenue model from service retainers to recurring SaaS-style fees. The first is about your costs. The second is about your revenue model."
    },
    {
      q: "What GoHighLevel plan do you need for SaaS consolidation?",
      a: "Agency Pro at $497 per month, sometimes called the SaaS Plan, is required for the full model. It includes automated client billing, custom pricing tiers, client self-signup, and a white-label mobile app. Agency Unlimited at $297 per month allows unlimited sub-accounts but requires manual client account management with no automated billing, which limits how far the model scales before becoming an operational burden."
    },
    {
      q: "How much can an agency realistically earn from this model?",
      a: "Based on real agency patterns, 30 clients at $297 per month generates approximately $8,910 in monthly recurring revenue. 50 clients at $397 per month generates approximately $19,850 per month. 100 clients at $297 per month generates approximately $29,700 per month. The GoHighLevel platform cost remains fixed at $497 per month regardless of client count, so margin scales directly as the client base grows."
    },
    {
      q: "Should I replace my service retainers entirely with SaaS pricing?",
      a: "Most successful agency transitions to this model are hybrid rather than a full replacement. A SaaS-priced platform access tier covers every client as the base offering, with service upsells such as ad management, content creation, or strategic consulting layered on top for clients who want more involvement. A full replacement works for agencies whose entire value proposition is the software and automation itself, but most agencies retain some service component."
    },
    {
      q: "At what client count does SaaS consolidation become worthwhile for an agency?",
      a: "Once an agency has roughly 5 to 8 clients on the SaaS-priced tier, the fixed $497 per month platform cost becomes a small fraction of total revenue and the model's margin advantage becomes clear. Below that threshold, the math is closer, and the decision should weigh operational capacity and client fit more heavily than the cost calculation alone."
    },
    {
      q: "Can GHL Scale Up help my agency make this shift?",
      a: "Yes. GHL Scale Up helps agencies build the Snapshot, configure GoHighLevel SaaS Mode, and design a client-facing pricing tier structure suited to their specific client base and service mix. Book a free strategy call to discuss whether this model fits your agency and what the transition would involve."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'saas-sprawl', title: '1. What Is SaaS Sprawl, and Why Does It Matter for Agencies Specifically?' },
    { id: 'retainer-to-saas', title: '2. The Shift from Service Retainers to SaaS-Style Recurring Revenue' },
    { id: 'pricing-model', title: '3. How Does Pricing Actually Work in This Model?' },
    { id: 'revenue-scaling', title: '4. What Does the Revenue Scale to at Real Client Volumes?' },
    { id: 'right-for-agency', title: '5. Is This Shift Right for Your Agency?' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const comparisonData = [
    { model: 'What the client pays for', traditional: 'Your time and ongoing management', saas: 'Branded access to a software platform' },
    { model: 'Typical monthly price', traditional: '$1,000 to $2,500 per client', saas: '$197 to $497 per client' },
    { model: 'Churn risk', traditional: 'High — clients leave when results dip or budgets tighten', saas: 'Lower — software habits and switching costs reduce churn' },
    { model: 'Scaling mechanism', traditional: 'Requires hiring as client count grows', saas: 'Scales without proportional headcount growth' },
    { model: 'Client perception', traditional: 'Paying an agency for services', saas: 'Paying for their own software, with you as the provider' },
    { model: 'Your GHL plan', traditional: 'Agency Plan — you manage accounts manually', saas: 'SaaS Plan — automated billing, white-label mobile app, client self-signup' },
  ];

  const planData = [
    { plan: 'Agency Starter', cost: '$97/mo', unlocks: 'Limited to 3 sub-accounts — not viable for a multi-client SaaS offering' },
    { plan: 'Agency Unlimited', cost: '$297/mo', unlocks: 'Unlimited sub-accounts, but no automated billing or white-label mobile app — you manage client accounts manually' },
    { plan: 'Agency Pro (SaaS Plan)', cost: '$497/mo', unlocks: 'Automated client billing, custom pricing tiers, client self-signup, white-label mobile app, usage rebilling for margin' },
  ];

  const revenueData = [
    { clients: 10, price: '$297/mo', mrr: '$2,970', annualised: '$35,640' },
    { clients: 30, price: '$297/mo', mrr: '$8,910', annualised: '$106,920' },
    { clients: 50, price: '$397/mo', mrr: '$19,850', annualised: '$238,200' },
    { clients: 100, price: '$297/mo', mrr: '$29,700', annualised: '$356,400' },
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
          <span className="text-[#1A2236] font-medium">SaaS Consolidation Agency Playbook 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS Consolidation</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Playbook</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Recurring Revenue</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            SaaS Consolidation Using GoHighLevel:<br />
            <span className="text-[#F8D000]">The Agency Playbook (2026)</span>
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
            Most agencies already know GoHighLevel can replace their own tool stack. 
            <strong className="text-white"> GHL Scale Up</strong> has covered 
            <Link href="/blog/why-agencies-switching-to-gohighlevel" className="text-[#0E9BF0] hover:underline ml-1">why agencies switch</Link> 
            and <Link href="/blog/consolidate-marketing-tools-gohighlevel" className="text-[#0E9BF0] hover:underline ml-1">how to consolidate your own tools</Link> 
            in detail elsewhere. This guide is about a different decision entirely: how to turn that same consolidation into a packaged, 
            recurring-revenue offering for your clients.
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
                SaaS consolidation, for an agency, means stopping the sale of hours and starting the sale of a packaged software product.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Instead of a $1,500 monthly retainer with high churn risk, an agency on GoHighLevel SaaS Mode can charge clients $197 to $497 per month 
                for branded access to a CRM, automation, and marketing platform, with low churn risk and dozens of accounts stacking into predictable MRR. 
                The real strategic decision is not which GHL plan to buy. It is whether your business model is built around services, software, or both.
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

            {/* Section 1: SaaS Sprawl */}
            <h2 id="saas-sprawl" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is SaaS Sprawl, and Why Does It Matter for Agencies Specifically?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              SaaS sprawl describes what happens when a business accumulates separate subscriptions over time, each solving a real narrow need, 
              until the collective cost and complexity outweighs any individual tool's value. Most agencies have lived this from the inside: 
              a CRM here, an email tool there, a funnel builder, a booking app, a reporting dashboard, each justified individually and collectively expensive.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For an agency, sprawl is not just an internal cost problem. It is also the exact problem your clients are living through, often without 
              realising it has a name. Every local business client you serve is likely paying for 4 to 8 separate tools that do not talk to each other. 
              That shared problem is the opening for a packaged offering, not just an internal efficiency project.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE DISTINCTION THAT MATTERS HERE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Solving sprawl for yourself is an operations decision. Packaging the solution for clients is a business model decision. 
                If you have not yet consolidated your own stack, start there first: 
                <Link href="/blog/consolidate-marketing-tools-gohighlevel" className="text-[#0E9BF0] hover:underline ml-1">How to Consolidate Marketing Tools Using GoHighLevel →</Link>
                This blog assumes that step is done or in progress, and focuses on what comes next.
              </p>
            </div>

            {/* Section 2: Retainer to SaaS */}
            <h2 id="retainer-to-saas" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. The Shift from Service Retainers to SaaS-Style Recurring Revenue
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The traditional agency model sells hours, even when it is dressed up as a flat monthly retainer. The work scales with client count 
              in a way that requires hiring to grow. The SaaS consolidation model sells access to a system. The work to build it happens once, 
              and the revenue scales without proportional headcount growth.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Traditional retainer model</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">SaaS consolidation model</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.model}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.traditional}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.saas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              This is not a binary switch. Most agencies run a hybrid: a SaaS-priced platform access tier for every client, with service upsells 
              (ad management, content, strategy) layered on top for clients who want more. This hybrid is consistently the pattern in the most 
              successful agency transitions to this model.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                → For the technical configuration of SaaS Mode itself: 
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel SaaS Mode Setup Guide →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                → For the deeper business model and margin calculator: 
                <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label SaaS Guide →</Link>
              </p>
            </div>

            {/* Section 3: Pricing Model */}
            <h2 id="pricing-model" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Does Pricing Actually Work in This Model?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The real buying decision is not $97 vs $297 vs $497.</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It is which plan supports your delivery model, what your true operating cost is after usage-based fees, and whether the plan removes 
              the constraints that would otherwise block scaling, specifically sub-account limits and rebilling capability.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it unlocks for this model</th>
                  </tr>
                </thead>
                <tbody>
                  {planData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.cost}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.unlocks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE PRICING DECISION THAT ACTUALLY MATTERS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Your client-facing price tier matters more than your GHL plan tier. Once you are on Agency Pro, the platform cost is fixed regardless 
                of client count. The strategic decision is what you charge clients and what you bundle into each tier. Price based on the outcome 
                each tier delivers for that client's business, not on the cost of the underlying GHL features.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the complete GHL plan and usage fee breakdown: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing 2026 →</Link>
            </p>

            {/* Section 4: Revenue Scaling */}
            <h2 id="revenue-scaling" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Does the Revenue Scale to at Real Client Volumes?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Clients</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Price per client</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Monthly recurring revenue</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Annualised</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.clients} clients</td>
                      <td className="py-3 px-3">{item.price}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.mrr}</td>
                      <td className="py-3 px-3 text-[#25C97D] font-semibold">{item.annualised}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">WHAT THIS MEANS PRACTICALLY</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Once you cross roughly 5 to 8 clients on the SaaS-priced tier, the fixed $497/month platform cost becomes a rounding error against 
                total revenue. Below that threshold, the math is closer and the decision should weigh other factors, particularly whether you have 
                the operational capacity to onboard and support clients on a software-access basis rather than a hands-on retainer basis.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              This pattern matches what agencies report after making the shift: an agency previously stuck at $20,000 per month in service retainers 
              can pivot to SaaS Mode with 50 accounts at $397 per month, reaching roughly $19,850 per month in MRR, plus an additional $10,000 per month 
              in service upsells layered on top of the base platform fee. The platform cost stays fixed at $497/month regardless of which scenario.
            </p>

            {/* Section 5: Right for Agency */}
            <h2 id="right-for-agency" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Is This Shift Right for Your Agency?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> This model fits if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You already have 5 or more clients you could realistically move to a platform-access pricing model</li>
                  <li>Your client relationships show churn risk tied to results fluctuation rather than underlying value</li>
                  <li>You want growth that does not require proportional hiring as client count increases</li>
                  <li>You have, or are willing to build, a tested Snapshot for a production-ready client setup</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> This model does not fit if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You have fewer than 5 clients (the fixed platform cost has not yet been absorbed)</li>
                  <li>Your service offering is deeply customised per client in a way that resists standardisation into a Snapshot</li>
                  <li>Your clients specifically value and pay for high-touch strategic involvement rather than software access</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">HOW GHL SCALE UP HELPS WITH THIS SHIFT</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                We have helped agencies build the Snapshot, configure SaaS Mode, and design the pricing tier structure that makes this shift work 
                for their specific client base.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real results from agencies who have made this shift: 
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss whether this model fits your agency, 
                <Link href="/contact-us" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call at ghlscaleup.com/contact-us →</Link>
              </p>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                Our full <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS setup service →</Link> covers the technical build and the pricing strategy together.
              </p>
            </div>

            {/* Section 6: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              6. Frequently Asked Questions
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
                <Link href="/blog/why-agencies-switching-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Why Agencies Are Switching to GoHighLevel in 2026 →</Link>
                <Link href="/blog/consolidate-marketing-tools-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">How to Consolidate Marketing Tools Using GoHighLevel →</Link>
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: Complete Setup Guide →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS: Business Model Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to turn consolidation into recurring revenue?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds the system and the pricing strategy together. Snapshot build, SaaS Mode configuration, 
                  and pricing tier design suited to your client base. Book a free 30-minute strategy call.
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
                In This Playbook
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
                5+ years GHL experience · 200+ systems built globally, including SaaS Mode and pricing strategy builds for agencies 
                transitioning from retainer to recurring revenue models. All figures verified as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Ready to Shift to Recurring Revenue?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help agencies build the Snapshot, configure SaaS Mode, and design pricing tiers.</p>
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