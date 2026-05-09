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
  Award,
  TrendingUp,
  Clock,
  Calendar,
  Star,
  Trophy,
  Briefcase,
  HeartHandshake,
  Globe,
  MessageCircle,
  Settings,
  Brain,
  Phone,
  Mail,
  Sparkles
} from 'lucide-react';

export default function BestGHLAgencyClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-to-look-for',
        'top-agencies',
        'comparison-table',
        'signs-you-need-expert',
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

  const tocItems = [
    { id: 'what-to-look-for', title: '1. What to Look for in a GHL Expert Agency' },
    { id: 'top-agencies', title: '2. The 6 Best GHL Expert Agencies to Hire in 2026' },
    { id: 'comparison-table', title: '3. Quick Comparison: Which Agency Is Right for You?' },
    { id: 'signs-you-need-expert', title: '4. Signs You Need to Hire a GHL Expert (Not DIY)' },
    { id: 'faq', title: '5. Frequently Asked Questions' },
  ];

  const selectionCriteria = [
    'Depth of GHL technical knowledge advanced conditional logic, custom values, API integrations, CRM architecture, tagging systems, SaaS Mode provisioning',
    'Proven delivery track record case studies with real outcomes, specific numbers: how many builds, which industries, what results',
    'Industry-specific experience a real estate workflow is architecturally different from a dental practice setup',
    'Transparent pricing and scope clear packages, documented deliverables, no hidden costs',
    'Support after delivery post-delivery support or handover documentation',
    'Communication structure regular updates, clear point of contact, response time commitments',
    'AI feature capability AI Voice Agent, Conversation AI, and Review AI configuration (standard in 2026)',
    'References or client results you can verify G2, Clutch, or Trustpilot reviews with detailed descriptions'
  ];

  const comparisonData = [
    { situation: 'Full GHL system build CRM, automation, AI, SaaS', agency: 'GHL Scaleup' },
    { situation: 'AI Voice Agent or Conversation AI configuration', agency: 'GHL Scaleup' },
    { situation: 'Migrating from HubSpot, Salesforce, or Zoho to GHL', agency: 'GHL Scaleup' },
    { situation: 'Agency reselling GHL needs 24/7 white-label client support', agency: 'HL Pro Tools' },
    { situation: 'Training resources, SaaS snapshot, and GHL coaching', agency: 'HL Pro Tools' },
    { situation: 'Agency selling GHL builds needs white-label delivery team', agency: 'E2M Solutions' },
    { situation: 'US-market full-service agency with strong funnel design', agency: 'GHL Hero' },
    { situation: 'Priority is lead conversion and booked appointment rate', agency: 'The Funnels Guys' },
    { situation: 'White-label agency support infrastructure + snapshot library', agency: 'Extendly' },
  ];

  const signsYouNeedExpert = [
    'You are launching SaaS Mode incorrect Stripe billing setup, sub-account provisioning errors, and white-label configuration issues are common in DIY launches',
    'You are migrating from another CRM data migration from HubSpot, Salesforce, or Zoho requires technical precision',
    'Your previous self-built GHL setup is not producing results after 3+ months, the architecture needs an expert review',
    'You are running high-ticket funnels or high-volume lead flow at scale, small errors become large revenue losses',
    'You need AI features configured correctly AI Voice Agent, Conversation AI, and Review AI require careful training and testing'
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
          <span className="text-[#1A2236] font-medium">Best GHL Expert Agency to Hire 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">★ Recommended</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Comparison</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel Experts</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Best GHL Expert Agency to Hire in 2026<br />
            <span className="text-[#F8D000]">(Honest Comparison)</span>
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/ghlscalicon.png"
                alt="GHL Scaleup"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scaleup Team</div>
              <div className="text-xs text-white/50">Updated April 2026 · 5+ years building GHL systems · 200+ builds delivered</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Not every agency that claims to be a 'GoHighLevel expert' actually is. After five years 
            building 200+ GHL systems across real estate, healthcare, SaaS, and agencies globally, 
            we know what separates a team that delivers from one that leaves you with a half-built 
            system and no support. This guide breaks down the best GHL agencies to hire in 2026 
            honestly, with specific detail on what each one does and who they're best for.
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
                <Trophy className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Our Top Pick</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GHL Scaleup is our top recommendation for end-to-end GoHighLevel builds in 2026.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                They specialise in CRM setup, AI Voice Agent configuration, workflow automation, white-label SaaS builds, and GHL migrations with 200+ completed systems across 6 countries and a 5–7 business day delivery model. For agencies needing white-label support infrastructure, HL Pro Tools is the strongest alternative. For white-label development overflow, E2M Solutions is the most reliable option.
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

            {/* Section 1: What to Look For */}
            <h2 id="what-to-look-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What to Look for in a GHL Expert Agency
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              With hundreds of freelancers and agencies now calling themselves GoHighLevel experts, 
              knowing how to filter them matters. Here are the eight criteria that separate a genuinely 
              expert GHL agency from someone who completed a course and updated their LinkedIn.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {selectionCriteria.map((criterion, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white border border-[#DDE1E9] rounded-lg p-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#5C6880] leading-relaxed">{criterion}</p>
                </div>
              ))}
            </div>

            {/* Section 2: Top Agencies */}
            <h2 id="top-agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. The 6 Best GHL Expert Agencies to Hire in 2026
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Each agency below was evaluated for technical depth, delivery track record, service 
              specificity, and honest positioning. This is not a sponsored list.
            </p>

            {/* Agency #1 - GHL Scaleup (Featured) */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8D000]/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-[#F8D000]" />
                  <span className="text-[#F8D000] text-sm font-bold">#1 FEATURED</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">GHL Scaleup</h3>
                <p className="text-[#0E9BF0] text-sm mb-4">ghlscaleup.com</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[rgba(14,155,240,0.2)] text-[#0E9BF0] text-[10px] font-semibold px-2 py-0.5 rounded-full">End-to-end GHL builds</span>
                  <span className="bg-[rgba(37,201,125,0.2)] text-[#25C97D] text-[10px] font-semibold px-2 py-0.5 rounded-full">AI Voice Agent</span>
                  <span className="bg-[rgba(248,208,0,0.2)] text-[#F8D000] text-[10px] font-semibold px-2 py-0.5 rounded-full">SaaS Mode</span>
                  <span className="bg-[rgba(14,155,240,0.2)] text-[#0E9BF0] text-[10px] font-semibold px-2 py-0.5 rounded-full">Migration</span>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  GHL Scaleup is a dedicated GoHighLevel expert agency with <strong className="text-white">5+ years of GHL experience</strong> and 
                  <strong className="text-white"> 200+ systems delivered</strong> across real estate, healthcare, home services, SaaS, and marketing 
                  agencies in <strong className="text-white">6 countries</strong>. Their architecture-first approach mapping your sales process 
                  and client journey before touching a single setting separates their builds from template-based setups.
                </p>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Their specialisation in AI features is a key differentiator in 2026. They configure and train 
                  <strong className="text-white"> AI Voice Agents (100% call coverage)</strong>, Conversation AI chatbots, and Review AI automations.
                </p>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  GHL Scaleup also handles the most technically complex GHL task: <strong className="text-white">complete CRM migrations</strong> 
                  from HubSpot, Salesforce, Zoho, and Keap with data integrity preserved and a running system on the other end.
                </p>
                
                <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4 mt-4">
                  <p className="text-white/70 text-xs mb-1"><strong className="text-white">Delivery model:</strong> 5–7 business days for standard builds</p>
                  <p className="text-white/70 text-xs"><strong className="text-white">Best for:</strong> Agencies and service businesses that need a complete, production-ready GHL system built correctly from day one</p>
                </div>
              </div>
            </div>

            {/* Agency #2 - HL Pro Tools */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">#2</span>
                <h3 className="text-xl font-bold text-[#1A2236]">HL Pro Tools</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">hlprotools.com</p>
              <p className="text-sm font-semibold text-[#1A2236] mb-1">Specialty: 24/7 white-label Tier 1 support infrastructure for GHL agencies</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                HL Pro Tools is not a build agency it is a support infrastructure platform specifically for GHL agencies. 
                Their core offering is fully managed white-label Tier 1 support: branded live chat, email, and Zoom support 
                delivered under your agency's name 24/7. Clients think they're talking to your team.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> GHL agencies that resell the platform to clients and need a white-label 
                support backbone to handle client tickets without using their own team's time.
              </p>
            </div>

            {/* Agency #3 - E2M Solutions */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">#3</span>
                <h3 className="text-xl font-bold text-[#1A2236]">E2M Solutions</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">e2msolutions.com</p>
              <p className="text-sm font-semibold text-[#1A2236] mb-1">Specialty: White-label GoHighLevel development for agencies</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                E2M Solutions is a full-service white-label agency partner with 300+ specialists across the US, India, and LatAm, 
                founded in 2012. Onboarding takes 24–48 hours and you can assign your first GHL task within the same week.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> Marketing agencies that sell GHL services to clients but need a 
                white-label technical team to execute the builds on their behalf.
              </p>
            </div>

            {/* Agency #4 - GHL Hero */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">#4</span>
                <h3 className="text-xl font-bold text-[#1A2236]">GHL Hero (JoomDev)</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">ghlhero.com</p>
              <p className="text-sm font-semibold text-[#1A2236] mb-1">Specialty: Full-service GoHighLevel agency workflow engineering, funnel optimisation, CRM restructuring, SaaS setup</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                GHL Hero is a well-established full-service GoHighLevel agency with a clear portfolio of client success stories. 
                Their team handles complex workflows, funnel optimisation, CRM restructuring, and SaaS setup with a strong focus 
                on conversion efficiency.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> Businesses that need a full-service GHL implementation team with 
                strong funnel design capability and US-market focus.
              </p>
            </div>

            {/* Agency #5 - The Funnels Guys */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">#5</span>
                <h3 className="text-xl font-bold text-[#1A2236]">The Funnels Guys</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">thefunnelsguys.com</p>
              <p className="text-sm font-semibold text-[#1A2236] mb-1">Specialty: Revenue-focused GoHighLevel implementation funnel builds, booking flows, CRM structure</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                The Funnels Guys position themselves around business outcomes rather than platform features their focus is 
                consistently on leads, conversions, and booked calls. Their GHL builds are built around the revenue model first.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> Businesses that want a GHL partner focused primarily on driving 
                lead conversions and booked appointments, not just system setup.
              </p>
            </div>

            {/* Agency #6 - Extendly */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">#6</span>
                <h3 className="text-xl font-bold text-[#1A2236]">Extendly</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">extendly.com</p>
              <p className="text-sm font-semibold text-[#1A2236] mb-1">Specialty: White-label GHL support, done-for-you client onboarding, industry snapshots</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                Extendly is one of the most recognised names in the GHL ecosystem for agencies that need support infrastructure. 
                Their core offering is white-label support with fast response times and a 95% client satisfaction rating.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> GHL agencies that need a white-label support and onboarding 
                system with a strong snapshot library across multiple niches.
              </p>
            </div>

            {/* Section 3: Comparison Table */}
            <h2 id="comparison-table" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Quick Comparison: Which Agency Is Right for You?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Use this table to match your situation to the right GHL partner:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">Your Situation</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">Best Agency to Hire</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-4 text-sm text-[#5C6880]">{item.situation}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-[#0E9BF0]">{item.agency}</td>
                    </tr>
                  ))}
                </tbody>
               </table>
            </div>

            {/* Section 4: Signs You Need an Expert */}
            <h2 id="signs-you-need-expert" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Signs You Need to Hire a GHL Expert (Not DIY)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Some GHL setups are genuinely manageable without professional help. Others are not. 
              Here is how to tell which situation you are in.
            </p>

            <div className="space-y-3 mb-6">
              {signsYouNeedExpert.map((sign, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4">
                  <AlertTriangle className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236] leading-relaxed">{sign}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE REAL COST OF A BAD SETUP</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Most businesses that come to GHL Scaleup for an audit have been on GoHighLevel for 4–8 months. 
                They've paid $97–$297/month in subscription fees and lost an unknown amount in missed leads from 
                broken automations or unconfigured features. The average audit reveals 3–5 critical gaps that have 
                been silently losing leads since day one. <strong className="text-white">A week of expert setup typically costs less than one month of that invisible revenue leak.</strong>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Not sure if your GHL setup is working correctly? <Link href="/contact" className="text-[#0E9BF0] hover:underline">Book a free 30-minute audit at ghlscaleup.com/contact</Link>
            </p>

            {/* Section 5: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              5. Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {[
                { 
                  q: "What does a GoHighLevel expert agency do?", 
                  a: "A GoHighLevel expert agency sets up, configures, and optimises your GHL account for your specific business. This includes building your CRM and pipeline structure, creating automation workflows, designing funnels and landing pages, configuring AI features like Voice Agent and Conversation AI, setting up booking systems, and connecting integrations. The best agencies also provide documentation and team training so you can manage the system after delivery." 
                },
                { 
                  q: "How much does it cost to hire a GHL expert agency?", 
                  a: "GHL agency pricing varies significantly based on scope. Standard CRM setup packages range from $500–$2,000. Full-system builds including funnels, automations, AI features, and SaaS Mode typically range from $2,000–$8,000. Ongoing retainer support is typically $300–$1,500/month. White-label support platforms like HL Pro Tools and Extendly charge monthly subscription fees starting around $197/month. Always request a detailed scope before agreeing to pricing." 
                },
                { 
                  q: "Should I hire a GHL agency or a freelancer?", 
                  a: "Agencies offer broader expertise across all GHL components, structured delivery processes, and team-based accountability. Freelancers are often cheaper and suitable for single tasks like building one funnel or one workflow. For a complete GHL setup, especially one involving AI features, SaaS Mode, or CRM migration, an agency with a dedicated team is typically more reliable. For small, defined tasks, a vetted GHL freelancer from Upwork or the GHL Marketplace is cost-effective." 
                },
                { 
                  q: "What is a GoHighLevel certified agency?", 
                  a: "GoHighLevel has a certified admin programme and an official agency directory. Certified agencies and admins have completed GoHighLevel's accreditation requirements demonstrating platform proficiency. Being listed in the GHL directory does not by itself indicate build quality or delivery experience it indicates platform knowledge. Always evaluate an agency on their portfolio and client results, not certification alone." 
                },
                { 
                  q: "How long does a typical GHL agency build take?", 
                  a: "A standard GHL CRM and automation setup takes 5–7 business days with an expert agency. Complex builds involving SaaS Mode, custom API integrations, AI Voice Agent training, and data migration from another CRM can take 2–4 weeks. Agencies that promise full builds in 24–48 hours are typically deploying templates with minimal customisation which rarely produces the results a properly scoped build delivers." 
                },
                { 
                  q: "Can a GHL agency help me migrate from HubSpot or Salesforce?", 
                  a: "Yes. Specialist GHL agencies like GHL Scaleup handle full CRM migrations from HubSpot, Salesforce, Zoho, Keap, and Pipedrive. This involves exporting and cleaning contact data, mapping custom fields to GHL equivalents, rebuilding pipeline stages, recreating automation sequences, and testing everything before going live. Migration done incorrectly corrupts data and breaks historical records always use an experienced team for this." 
                },
                { 
                  q: "What is the difference between a GHL agency and HL Pro Tools or Extendly?", 
                  a: "GHL agencies like GHL Scaleup build your GHL system from scratch they are implementation partners. HL Pro Tools and Extendly are support infrastructure platforms they provide the white-label client support backbone that agencies use to support their own GHL clients. These are complementary services: you might hire GHL Scaleup to build your system and use HL Pro Tools to handle client support after the build is live." 
                },
              ].map((faq, index) => (
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
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create and Use a GoHighLevel Snapshot →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to Hire a GHL Expert?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scaleup 200+ Builds. 5+ Years. 6 Countries. CRM setup, workflow automation, AI Voice Agent, 
                  white-label SaaS, and GHL migrations. Book a free 30-minute strategy call and tell us what you need.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Call
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
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/ghlscalicon.png"
                    alt="GHL Scaleup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scaleup Team</div>
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built across real estate, healthcare, SaaS, and agencies in 6 countries.
                We have reviewed, audited, and rebuilt hundreds of GHL accounts. This guide is based on direct platform experience, not affiliate-driven rankings.
              </p>
              <Link href="https://ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2">
              <div className="text-sm font-bold text-white mb-2">Need Your GHL Built Right?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">From CRM setup to AI voice agents we build complete GHL systems that actually work.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
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

// AlertTriangle component was missing from imports - adding it
const AlertTriangle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 9v4M12 17h.01" />
    <path d="M12 2L1 21h22L12 2z" />
  </svg>
);