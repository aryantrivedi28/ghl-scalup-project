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
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  AlertTriangle,
  Info,
  Lightbulb,
  FileText,
  UserCheck,
  UserX,
  Compass,
  FileCheck,
  CheckCircle,
  Layers,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2,
  Download,
  PieChart,
  Workflow,
  Database,
  Cloud,
  GitBranch,
  GraduationCap,
  Search,
  Facebook,
  AlertCircle,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function BestGHLAgencyClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'methodology',
      'top-agencies',
      'comparison-table',
      'provider-type',
      'right-for-you',
      'agency-vs-freelancer',
      'cost',
      'certification',
      'specialist-help',
      'faq'
    ];

    const handleScroll = () => {
      let currentSection = sections[0];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 180) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveId(currentSection);

      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
      }
    };

    handleScroll();
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
      q: "What is a GoHighLevel expert agency?",
      a: "A provider that sets up, configures and optimizes a GoHighLevel account for a specific business: CRM and pipeline structure, automation workflows, funnels, AI features, integrations and, for some providers, migration or SaaS builds. The better ones also leave the client with documentation and training, not just a working account."
    },
    {
      q: "How do I choose the best GoHighLevel agency for my situation?",
      a: "Match the provider type to your actual need (full build, white-label fulfillment, support platform, or specialist for a small task), then evaluate on the twelve factors in this guide: specialization, technical depth, CRM architecture, automation, AI, integrations, migration, SaaS, documentation, support, proof and fit."
    },
    {
      q: "Which type of GoHighLevel provider is right for my project?",
      a: "Match your situation to the right type using the decision table above: a full implementation agency for a complete build, a specialist or freelancer for one defined task, a white-label partner if you resell GHL, or a support platform if you just need ongoing client help. Once you know which type fits, the next step is comparing hiring channels, vetting methods and engagement models — see our guide to where to find GoHighLevel experts."
    },
    {
      q: "Is it better to hire a GoHighLevel agency or a freelancer?",
      a: "Depends on scope. A single defined task usually suits a freelancer. A complete system, especially with AI, SaaS Mode or migration involved, usually suits an agency with a dedicated team."
    },
    {
      q: "Can a GoHighLevel agency build custom workflows?",
      a: "The stronger ones can, meaning branching logic, conditional triggers and cross-channel sequences, not just default templates. Ask to see a specific example before hiring."
    },
    {
      q: "Can GoHighLevel experts handle CRM migration?",
      a: "Several of the providers here do, including GHL Scale Up. Confirm they have experience with your specific source platform and that it stays live during the move."
    },
    {
      q: "Can GoHighLevel experts build AI systems?",
      a: "Some can, meaning a configured, live AI Voice Agent or Conversation AI build, not just a mention on a services page. Ask for a demonstrated example."
    },
    {
      q: "Can a GoHighLevel agency build SaaS?",
      a: "Some specialize in it (SaaS Mode, sub-account architecture, billing), and it's a narrower skill than general GHL setup, so confirm specific SaaS build experience rather than assuming it's included."
    },
    {
      q: "What is the difference between a build agency and a white-label support platform?",
      a: "A build agency like GHL Scale Up or GHL Hero constructs your GoHighLevel system. A support platform like HL Pro Tools or Extendly provides ongoing, branded client support after a system is live. They're often used together, not as alternatives to each other."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'methodology', title: 'How We Evaluated These Agencies' },
    { id: 'top-agencies', title: 'The Best GoHighLevel Agencies to Hire in 2026' },
    { id: 'comparison-table', title: 'GoHighLevel Agency Comparison' },
    { id: 'provider-type', title: 'Which Type of GoHighLevel Provider Do You Actually Need?' },
    { id: 'right-for-you', title: 'Which GoHighLevel Provider Is Right for You?' },
    { id: 'agency-vs-freelancer', title: 'GoHighLevel Agency vs Freelancer' },
    { id: 'cost', title: 'How Much Does a GoHighLevel Expert Cost?' },
    { id: 'certification', title: 'What Does GoHighLevel Certification Actually Tell You?' },
    { id: 'specialist-help', title: 'When Your GoHighLevel Setup Needs Specialist Help' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const evaluationFactors = [
    'Platform specialization – does the provider primarily work in GoHighLevel, or is it one of several platforms they support?',
    'Technical implementation depth – can they build beyond basic snapshots and default workflows?',
    'CRM architecture – pipelines, custom fields, lead routing, lifecycle logic, account structure.',
    'Automation – complex workflows, branching triggers, conditions, cross-channel sequences.',
    'AI capability – AI voice, conversation AI, or AI-driven workflow logic, where the project calls for it.',
    'Integrations – native connections, APIs, webhooks or middleware to external systems.',
    'Migration – moving an existing CRM or platform into GoHighLevel without losing data.',
    'SaaS capability – supporting agencies that want to resell GoHighLevel as their own software.',
    'Documentation and training – does the client leave with usable documentation, not just a working account?',
    'Support model – what happens after go-live?',
    'Proof – can claims be checked against case studies, reviews or other verifiable evidence?',
    'Fit – which type of buyer is this provider actually suited to?'
  ];

  const comparisonData = [
    { provider: 'GHL Scale Up', ghlFocus: 'GHL-only', crmAutomation: 'Full build', ai: 'Voice + chat AI', integrations: 'Both', saas: 'Yes', model: 'Build agency' },
    { provider: 'HL Pro Tools', ghlFocus: 'GHL-only', crmAutomation: 'n/a', ai: 'n/a', integrations: 'n/a', saas: 'Snapshot library', model: 'Support platform' },
    { provider: 'E2M Solutions', ghlFocus: 'One of several platforms', crmAutomation: 'Full build', ai: 'Not GHL-specific', integrations: 'Both', saas: 'Not GHL-specific', model: 'White-label overflow' },
    { provider: 'GHL Hero', ghlFocus: 'GHL-only', crmAutomation: 'Full build', ai: 'Unclear from public info', integrations: 'Integrations yes', saas: 'Yes', model: 'Build agency' },
    { provider: 'The Funnels Guys', ghlFocus: 'GHL-focused', crmAutomation: 'Funnels + CRM', ai: 'Unclear from public info', integrations: 'Automation yes', saas: 'Yes', model: 'Build agency' },
    { provider: 'Extendly', ghlFocus: 'GHL-only', crmAutomation: 'n/a', ai: 'n/a', integrations: 'n/a', saas: 'Snapshot library', model: 'Support platform' }
  ];

  const providerTypes = [
    { type: 'Full implementation agency', description: 'Builds and configures a complete system: CRM, automation, funnels, and whatever else the project needs. This is what GHL Scale Up, GHL Hero and The Funnels Guys are.' },
    { type: 'Specialist or freelancer', description: 'Good for a narrow, well-defined task: one workflow, one funnel, one integration. Look here if your scope is genuinely small.' },
    { type: 'White-label fulfillment provider', description: 'Agencies that resell GoHighLevel need a technical delivery team executing builds under their own brand. E2M fits here.' },
    { type: 'Support platform', description: 'Not a build service. Handles ongoing client support and onboarding for agencies already running GHL. HL Pro Tools and Extendly are this.' },
    { type: 'Consultant', description: 'Leans toward strategy, architecture and advisory work rather than hands-on configuration.' }
  ];

  const rightForYouData = [
    { situation: 'Starting from zero', lookFor: 'A full implementation agency that scopes the build around your actual sales process before configuring anything' },
    { situation: 'You have a broken or half-built account', lookFor: 'An agency that audits the existing setup first, rather than one that just adds more on top' },
    { situation: 'You need advanced workflow automation', lookFor: 'Evidence of branching logic, conditional triggers and cross-channel sequences, not just "we build workflows"' },
    { situation: 'You need AI voice or chat', lookFor: 'A provider that can show a live, configured AI Voice Agent or Conversation AI build, not a checkbox claim' },
    { situation: 'You need a CRM migration', lookFor: "Confirm they've moved data from your specific source platform, and that the old system stays live during the move" },
    { situation: 'You run an agency and need white-label fulfillment', lookFor: 'A white-label delivery partner (like E2M), not a build agency billing you directly under your own brand' },
    { situation: 'You want to build GHL SaaS', lookFor: 'Confirmed SaaS Mode, sub-account architecture and billing experience specifically, not general GHL setup' },
    { situation: 'You only need one small, defined task', lookFor: 'A specialist or freelancer is often the more cost-effective and faster option here' }
  ];

  const specialistHelpItems = [
    'Launching SaaS Mode — incorrect Stripe billing setup, sub-account provisioning errors and white-label misconfiguration are common in self-built launches.',
    'Migrating from another CRM — moving data from HubSpot, Salesforce or Zoho without losing history or breaking automations takes technical precision.',
    "A self-built setup that isn't producing results after a few months — usually a sign the architecture needs an outside review, not more tinkering.",
    'High-ticket funnels or high lead volume — at scale, small configuration errors turn into larger revenue losses.',
    'AI features that need to actually work — AI Voice Agent and Conversation AI need careful configuration and testing, not a default setup.'
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        // onClick={handleOpenBooking}
        href="/book-a-call"
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Link>
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
          <span className="text-[#1A2236] font-medium">Best GHL Expert Agency to Hire 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">★ Recommended</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Comparison</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel Experts</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Best GHL Expert Agency to Hire in 2026<br />
            <span className="text-[#F8D000]">(Honest Comparison)</span>
          </h1>

          {/* Author */}
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered · Verified against each provider's own site, September 2026</div>
            </div>
          </div>

          {/* Quick Answer Box - ONLY IN HERO SECTION */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              For a complete, end-to-end GoHighLevel build, CRM architecture, automation, AI, integrations, migration and SaaS working as one system, <strong className="text-white">GHL Scale Up is our top recommendation</strong>, based on 200+ documented builds across 6 countries. For agencies that specifically need white-label client support rather than a build, <strong className="text-white">HL Pro Tools or Extendly</strong> are the stronger fit. For agencies that need overflow build capacity across multiple platforms, not just GoHighLevel, <strong className="text-white">E2M Solutions</strong> is worth a look. Which one is right for you depends less on "best" and more on what you're actually trying to get done, which is what the rest of this guide walks through.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              This is written and published by GHL Scale Up, and GHL Scale Up is included in the comparison. We're upfront about that. What follows is the methodology, the criteria, and the reasoning behind each placement, so you can judge the recommendation on its evidence rather than take it on faith.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Your Free GHL Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#top-agencies"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Agencies
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="mb-6">
              <ProjectHelpCard />
            </div>

            {/* Table of Contents */}
            <nav className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-xs font-bold tracking-wider uppercase text-[#5C6880] mb-4 flex items-center gap-2">
                <BookOpen className="w-3 h-3" />
                In This Guide
              </div>
              <ul className="space-y-0.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#DDE1E9] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-[#96A0B5]">
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
                5+ years GHL experience · 200+ systems built across real estate, healthcare, SaaS, and agencies in 6 countries. We have reviewed, audited, and rebuilt hundreds of GHL accounts. This guide is based on direct platform experience, not affiliate-driven rankings.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
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

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* Mobile TOC */}
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

            {/* Mobile Project Help Card */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            
            {/* Section: Methodology */}
            <h2 id="methodology" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              How We Evaluated These Agencies
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              We evaluated each provider on twelve factors. Not every provider publishes information on every factor, so gaps are noted rather than guessed at.
            </p>
            <div className="space-y-2 mb-6">
              {evaluationFactors.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              We don't assign point scores. A number like "9.2/10" implies a precision none of us actually have, so instead each provider is described in terms of best fit, strong for, and worth checking, which is a more honest way to compare providers that do genuinely different things.
            </p>


            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/best-ghl-expert-agency-infographic.png"
                  alt="Best GHL Expert Agency to Hire in 2026: Agency comparison matrix, 12 evaluation factors, and which GoHighLevel provider fits your situation"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Best GHL Expert Agency to Hire in 2026: Agency comparison matrix, 12 evaluation factors, and which GoHighLevel provider fits your situation</span>
              </div>
            </div>


            {/* Section: Top Agencies */}
            <h2 id="top-agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Best GoHighLevel Agencies to Hire in 2026
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Each entry below reflects what the provider states about itself, checked against its current site, plus (for GHL Scale Up) our own verified project history. This is not a sponsored placement.
            </p>

            {/* Agency #1 - GHL Scale Up */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8D000]/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-[#F8D000]" />
                  <span className="text-[#F8D000] text-sm font-bold">1. GHL Scale Up — Best for End-to-End GoHighLevel Implementation</span>
                </div>
                <p className="text-[#0E9BF0] text-sm mb-4">ghlscaleup.com</p>

                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  GHL Scale Up is a GoHighLevel-only implementation agency with 5+ years of GHL experience and 200+ systems delivered across real estate, healthcare, home services, SaaS and marketing agencies, in 6 countries. The team works architecture-first, mapping the client's sales process and customer journey before configuring anything, which is the main thing that separates a built-around-your-business system from a template with your logo on it.
                </p>

                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  AI is a real part of the offering, not an add-on: they configure and train AI Voice Agents and Conversation AI chatbots as part of standard builds. They also handle full CRM migrations, from HubSpot, Salesforce, Zoho and Keap, with the source system kept live in parallel until the new one is confirmed working.
                </p>

                <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4 mt-4">
                  <p className="text-white/70 text-xs mb-1"><strong className="text-white">Turnaround:</strong> typically one to three weeks depending on scope; simpler CRM-only builds can move faster.</p>
                  <p className="text-white/70 text-xs mb-3"><strong className="text-white">Best for:</strong> agencies and service businesses that need a complete, production-ready GHL system, not one isolated piece of it.</p>
                  <p className="text-white/70 text-xs">
                    See <Link href="/services/hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">GHL Scale Up's implementation services</Link> for the full scope of what's included, or <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">our case studies</Link> for documented builds.
                  </p>
                </div>
              </div>
            </div>

            {/* Agency #2 - HL Pro Tools */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">2</span>
                <h3 className="text-xl font-bold text-[#1A2236]">HL Pro Tools — White-Label Support Infrastructure</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">hlprotools.com</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                HL Pro Tools is not a build agency. It's a white-label support platform for GoHighLevel agencies: branded live chat, email and Zoom support delivered under your agency's name, so your clients think they're talking to your own team. Plans start around $397 a month for a limited client count, scaling up for larger agencies; check current pricing directly, as tiers and figures change.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> GoHighLevel agencies that resell the platform to their own clients and need a white-label support desk, rather than a system to be built.
              </p>
            </div>

            {/* Agency #3 - E2M Solutions */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                <h3 className="text-xl font-bold text-[#1A2236]">E2M Solutions — Multi-Platform White-Label Overflow</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">e2msolutions.com</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                E2M Solutions is a full-service white-label partner founded in 2012, with 350+ specialists across the US, India and LatAm. GoHighLevel is one of several platforms they cover, alongside WordPress, Webflow and others, which makes them a fit for a specific situation rather than a GHL specialist per se.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> marketing agencies that sell GoHighLevel builds to their own clients and need a white-label delivery team to execute the work, particularly if they also need overflow capacity across non-GHL platforms.
              </p>
            </div>

            {/* Agency #4 - GHL Hero */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">4</span>
                <h3 className="text-xl font-bold text-[#1A2236]">GHL Hero (JoomDev) — Full-Service GoHighLevel Build Agency</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">ghlhero.com</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                GHL Hero is an active, GoHighLevel-focused agency handling CRM setup, workflow automation, funnels, migrations and third-party integrations, with published client reviews describing account rebuilds and workflow fixes.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> businesses that want a dedicated, full-service GHL build team.
              </p>
            </div>

            {/* Agency #5 - The Funnels Guys */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">5</span>
                <h3 className="text-xl font-bold text-[#1A2236]">The Funnels Guys — Funnel and Conversion-Focused GHL Builds</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">thefunnelsguys.com</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                The Funnels Guys frame their GoHighLevel work around funnels, CRM setup, automation and white-label configuration, with messaging that leans heavily on conversion outcomes rather than platform features.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> businesses whose primary need is funnel design and conversion-focused build work inside GHL.
              </p>
            </div>

            {/* Agency #6 - Extendly */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E8F5FE] text-[#0E9BF0] text-xs font-bold px-2 py-0.5 rounded-full">6</span>
                <h3 className="text-xl font-bold text-[#1A2236]">Extendly — White-Label Support and Onboarding</h3>
              </div>
              <p className="text-[#0E9BF0] text-sm mb-3">extendly.com</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                Extendly is one of the more established names in GHL white-label support, offering branded support, onboarding assets and a snapshot library. Pricing structures vary by source and have shown both monthly and annual tiers recently, so confirm current pricing directly before committing.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Best for:</strong> GoHighLevel agencies that need white-label support and client onboarding infrastructure, similar in role to HL Pro Tools.
              </p>
            </div>

            {/* Section: Comparison Table */}
            <h2 id="comparison-table" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Agency Comparison
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This compares the six on capability, not just positioning. A blank cell means the provider doesn't publish enough information to state it either way, not that they lack it.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Provider</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Focus</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">CRM/Automation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">AI</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Integrations/Migration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">SaaS</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Model</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.provider}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghlFocus}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.crmAutomation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ai}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.integrations}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.saas}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.model}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Provider Type */}
            <h2 id="provider-type" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Type of GoHighLevel Provider Do You Actually Need?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not every provider on this page does the same job. Before comparing further, place yourself in one of these:
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {providerTypes.map((item, idx) => (
                <li key={idx}>
                  <strong className="text-[#1A2236]">{item.type}</strong> – {item.description}
                </li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A build agency and a support platform are not competing for the same job, and it's common to use one of each: an agency to build the system, a support platform to handle client tickets once it's live.
            </p>

            {/* Section: Right for You */}
            <h2 id="right-for-you" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which GoHighLevel Provider Is Right for You?
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to look for</th>
                  </tr>
                </thead>
                <tbody>
                  {rightForYouData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.lookFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Agency vs Freelancer */}
            <h2 id="agency-vs-freelancer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Agency vs Freelancer
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Agencies bring broader coverage across CRM, automation, integrations and AI, a structured delivery process, and team-based accountability rather than one person's availability. Freelancers are often cheaper and a reasonable choice for a single, clearly scoped task, one funnel, one workflow, one fix.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a complete GHL system, especially one involving AI, SaaS Mode or CRM migration, an agency with a dedicated team is typically the more reliable route, because that kind of project needs several capabilities working together rather than one skill applied once. For a deeper look at hiring channels, vetting freelancers and evaluating individual specialists, see <Link href="/blog/where-to-hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">where to hire GoHighLevel experts</Link>.
            </p>

            {/* Section: Cost */}
            <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Much Does a GoHighLevel Expert Cost?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Pricing depends on scope far more than on which provider you choose. The main variables: how many systems are involved (CRM alone vs. CRM plus automation plus AI or SaaS), whether a migration is included, how many sub-accounts or workflows, and whether ongoing support is part of the deal.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              As reference points only, not quotes: white-label support platforms like HL Pro Tools and Extendly currently list plans starting in the roughly $200–$400 monthly range for smaller client counts, scaling from there. Full implementation builds are typically quoted as a fixed project price after a scoping call rather than an hourly rate, because the work doesn't reduce cleanly to hours. On top of any agency fee, GoHighLevel's own platform subscription runs $97 to $497 a month depending on plan.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Get a written, itemized scope before comparing quotes between providers, since "GoHighLevel setup" can mean very different things depending on what's actually included. GHL Scale Up's own pricing factors are covered on its <Link href="/services/hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">implementation services page</Link>.
            </p>

            {/* Section: Certification */}
            <h2 id="certification" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does GoHighLevel Certification Actually Tell You?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel runs its own <a href="https://directory.gohighlevel.com" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Certified Admin Directory</a>, where anyone who has passed HighLevel's certification exam can list a public profile, searchable by country, language and specialization tags including AI Voice, HIPAA Compliance, SaaS builds and A2P 10DLC Compliance. Per HighLevel's own <a href="https://www.gohighlevel.com/certifications" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">certification program</a>, the credential is valid for two years and requires ongoing skills badges to stay current.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              What certification indicates: the person or team has passed a live, proctored exam and completed required training, and has at least baseline platform knowledge. What it does not indicate: delivery quality, project management, communication, or how recently that knowledge was tested against a real, complex build. Treat certification as one input, not the whole evaluation, and use it alongside the criteria in this guide rather than instead of them.
            </p>

            {/* Section: Specialist Help */}
            <h2 id="specialist-help" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Your GoHighLevel Setup Needs Specialist Help
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {specialistHelpItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you're ready to move from evaluating providers to implementation, <Link href="/services/hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">GHL Scale Up's GoHighLevel expert services</Link> cover the full engagement scope and how the process runs.
            </p>

            {/* Section: FAQ */}
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

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about hiring a GHL expert agency?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/where-to-hire-gohighlevel-experts" className="text-sm text-[#0E9BF0] hover:underline">Where to Hire GoHighLevel Experts →</Link>
                <Link href="/services/hire-gohighlevel-experts" className="text-sm text-[#0E9BF0] hover:underline">GHL Scale Up's Implementation Services →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">A2P Trust Score and MPS Explained →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to Hire a GHL Expert?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up 200+ Builds. 5+ Years. 6 Countries. CRM setup, workflow automation, AI Voice Agent, white-label SaaS, and GHL migrations. Book a free 30-minute strategy call and tell us what you need.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author / Verification Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built across real estate, healthcare, SaaS, and agencies in 6 countries</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                This guide reflects GHL Scale Up's own project history and current information gathered from each provider's own site as of September 2026. Provider positioning, pricing and offerings change; confirm current details directly before deciding.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>
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