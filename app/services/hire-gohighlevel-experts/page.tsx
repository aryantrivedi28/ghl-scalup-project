// app/services/hire-gohighlevel-experts/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
  Award, Users, Wrench, Settings, Workflow, Bot, FileText, Link as LinkIcon,
  RefreshCw, Layers, GraduationCap, ChevronRight, Home, Building2, Briefcase,
  Target, Zap, MessageSquare, BarChart3, Phone, Star, Shield, Clock, Globe,
  TrendingUp, CheckCircle, Sparkles, UserCheck, Rocket, Search, TestTube,
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CaseStudies from '@/components/ghlscalup/CaseStudies';
import Testimonials from '@/components/ghlscalup/Testimonials';
import { getCaseStudies } from '@/lib/caseStudiesData';
import { getAllTestimonialsForHomepage } from '@/lib/sanity';

export const metadata = {
  title: 'Hire GoHighLevel Experts & Agencies | GHL Scale Up',
  description:
    'Hire GoHighLevel experts to build, automate, and scale your CRM. Fixed-price builds, 200+ systems delivered across 6 countries. Book a free strategy call.',
  keywords:
    'hire GoHighLevel experts, GoHighLevel expert, GoHighLevel experts, hire GoHighLevel expert, GoHighLevel expert services, GoHighLevel agency, hire GoHighLevel agency, GHL expert, GHL consultant, best GoHighLevel expert, best GoHighLevel agency',
  alternates: {
    canonical: '/services/hire-gohighlevel-experts',
  },
  openGraph: {
    title: 'Hire GoHighLevel Experts & Agencies | GHL Scale Up',
    description:
      'Hire GoHighLevel experts to build, automate, and scale your CRM. Fixed-price builds, 200+ systems delivered across 6 countries.',
    url: 'https://www.ghlscaleup.com/services/hire-gohighlevel-experts',
    siteName: 'GHL Scale Up',
    type: 'website',
  },
};

export default async function HireExpertsPage() {
  // ============================================
  // FETCH CASE STUDIES & TESTIMONIALS
  // ============================================
  const caseStudies = getCaseStudies();

  let testimonials = [];
  try {
    testimonials = await getAllTestimonialsForHomepage();
  } catch (error) {
    console.error('Failed to load testimonials:', error);
  }

  // ============================================
  // DATA
  // ============================================

  // Who Should Hire (and Who Shouldn't)
  const audiences = [
    {
      icon: Rocket,
      title: 'Starting From Zero',
      description:
        'You have signed up for GoHighLevel, or you are about to, and the account is empty. This is the most common reason businesses hire us: the platform gives you every tool pipelines, calendars, funnels, workflows, AI agents but not a configuration that matches how your business actually sells and follows up. We build the pipeline stages, tagging structure, and automation logic around your existing sales process instead of forcing you into generic defaults.',
    },
    {
      icon: Wrench,
      title: 'Fixing or Rebuilding an Existing Account',
      description:
        "You already have a GHL account, but it was set up by a previous agency, a freelancer, or someone internally without GoHighLevel experience, and it shows: broken triggers, workflows that fire in the wrong order, pipelines that do not match how deals actually move, or a system nobody trusts enough to rely on. We audit what exists before touching anything, keep what works, and rebuild what doesn't rather than starting over and losing the data and history you already have.",
    },
    {
      icon: TrendingUp,
      title: 'Scaling an Existing Basic Setup',
      description:
        "You have been running on GHL for a while, but only using it as a glorified contact list with one or two workflows. You are ready to add AI voice or chat handling, deeper automation across email, SMS, and WhatsApp, custom reporting, or a white-label SaaS layer to resell the platform to your own clients. This is a different engagement from a first build it means working around a live account and existing client data without disrupting what is already running.",
    },
  ];

  // What's Included (H3 sections)
  const inclusions = [
    {
      icon: Settings,
      title: 'CRM Setup & Configuration',
      description:
        "Pipelines, custom fields, tags, and user permissions built around your actual sales stages not GoHighLevel's generic template. A poorly configured CRM is the root cause behind most of the automation problems businesses come to us to fix later, because every workflow and report depends on the tagging and pipeline structure underneath it.",
      link: '/services/crm-setup',
      linkLabel: 'See CRM setup & configuration',
    },
    {
      icon: Workflow,
      title: 'Workflow & Marketing Automation',
      description:
        'Trigger-based sequences across email, SMS, and WhatsApp lead follow-up, appointment reminders, review requests, re-engagement, and internal notifications, with conditional logic instead of one-size-fits-all blasts.',
      link: '/services/workflow-automation',
      linkLabel: 'See workflow automation',
    },
    {
      icon: Bot,
      title: 'AI Voice Agent & Chat',
      description:
        'A 24/7 AI receptionist that answers calls and handles missed-call text-back, plus AI chatbots for lead qualification and appointment booking on your site so a lead who calls or messages after hours still gets a response before they try a competitor.',
      link: '/services/ai-voice-agent',
      linkLabel: 'See AI voice agent',
      link2: '/services/ai-chatbot',
      linkLabel2: 'See AI chatbot',
    },
    {
      icon: FileText,
      title: 'Funnels & Websites',
      description:
        'Landing pages, opt-ins, order forms, and full websites built inside GHL and wired directly into your CRM pipelines, so form fills and page visits become tracked, tagged contacts instead of disconnected leads sitting in an inbox.',
      link: '/services/funnel-development',
      linkLabel: 'See funnel development',
    },
    {
      icon: LinkIcon,
      title: 'Integrations',
      description:
        'Custom connections to Zapier, Make.com, Stripe, Google, and other tools you already run your business on through webhooks and APIs, so GoHighLevel becomes the hub rather than one more disconnected system.',
      link: '/services/integrations',
      linkLabel: 'See integrations & API development',
    },
    {
      icon: RefreshCw,
      title: "Migration (If You're Moving From Another Platform)",
      description:
        'If you are coming from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, or another CRM, that is a distinct project with its own scope contact and field mapping, pipeline reconstruction, and workflow recreation, run in parallel with your existing system so there is no downtime.',
      link: '/services/migration',
      linkLabel: 'See GoHighLevel migration services',
    },
    {
      icon: Layers,
      title: "White-Label SaaS (If You're Reselling GHL)",
      description:
        'If your goal is to resell GoHighLevel as your own branded software rather than just run it internally, that is a separate build SaaS Mode configuration, Stripe billing, pricing tiers, and a master snapshot for onboarding new clients.',
      link: '/services/saas-setup',
      linkLabel: 'See white-label SaaS setup',
    },
    {
      icon: GraduationCap,
      title: 'Training & Handover',
      description:
        'Every engagement ends with your team actually knowing how to run what was built live training, recorded walkthroughs, and written documentation so you are not permanently dependent on us to make a basic change to a workflow six months from now.',
    },
  ];

  // 5-Step Process
  const processSteps = [
    {
      step: '1',
      title: 'Understand Needs',
      description:
        "A free 30-minute discovery call to go through your business model, current tools, pain points, and goals and, if you already have a GHL account, a quick audit of what's already there.",
    },
    {
      step: '2',
      title: 'Design Systems',
      description:
        'Pipeline stages, automation logic, funnel structure, and integration mapping are planned out and documented before anything is built, so you see the plan and the price before committing.',
    },
    {
      step: '3',
      title: 'Build & Integrate',
      description:
        'CRM, workflows, pages, calendars, and AI agents get implemented inside GoHighLevel, along with any third-party connections the project needs.',
    },
    {
      step: '4',
      title: 'Test & Refine',
      description:
        'Every automation path is triggered and every form is submitted with live data including edge cases before the system goes anywhere near your real leads.',
    },
    {
      step: '5',
      title: 'Train & Scale',
      description:
        'Live training, written SOPs, and recorded walkthroughs for your team, with monthly support plans available if you want ongoing optimization after launch.',
    },
  ];

  // Case Study References
  const caseStudyRefs = [
    {
      icon: Home,
      title: 'Real Estate Agent Complete GHL Rebuild & AI Voice System',
      description:
        'A U.S. real estate agent went from broken automations to an AI voice receptionist handling thousands of calls a month.',
      link: '/case-studies/real-estate-agent-rebuild',
    },
    {
      icon: MegaphoneIcon,
      title: 'Marketing Agency AI Automation, 70% Less Manual Work',
      description:
        'A performance marketing agency relying on disconnected tools and manual workflows now runs a complete GoHighLevel system with AI-powered lead handling.',
      link: '/case-studies/gohighlevel-ai-automation-customer-management-marketing-agency',
    },
    {
      icon: Building2,
      title: 'Multi-Location Real Estate Sub-Account System With Property Websites',
      description:
        'A growing real estate brand replaced a patchwork of spreadsheets and inboxes with a structured, location-aware GoHighLevel system.',
      link: '/case-studies/gohighlevel-multi-location-automation-property-website-real-estate',
    },
    {
      icon: Layers,
      title: 'Parent SaaS System for Multi-Brand CRM Automation',
      description:
        'Multiple business verticals unified under one GoHighLevel SaaS structure, with AI-driven automation cutting lead response time to under a minute.',
      link: '/case-studies/gohighlevel-parent-saas-multi-crm-automation-energy-platform',
    },
  ];

  // FAQs
  const faqs = [
    {
      question: 'How much does it cost to hire a GoHighLevel expert?',
      answer:
        'It depends on scope, and we quote a fixed price after the discovery call rather than billing hourly you know the total cost before any work starts. As a reference point, migration projects start from $100; a full CRM and automation build costs more than a migration alone because it involves more configuration, but you will always see the number before committing, not after.',
    },
    {
      question: 'How long does it take to build a GoHighLevel system?',
      answer:
        'Most projects run one to three weeks from the discovery call to launch, depending on how much is being built. You get a specific estimate during the discovery call once we understand the scope, and weekly updates while the work is underway.',
    },
    {
      question: 'Do I need to already have a GoHighLevel subscription before I hire you?',
      answer:
        "No. If you don't have an account yet, we can advise on which GoHighLevel plan fits your situation as part of the discovery call, and build inside it once it's set up. If you already have an account, we work inside your existing subscription.",
    },
    {
      question: 'Can you fix or rebuild an existing GoHighLevel account instead of starting over?',
      answer:
        "Yes this is one of the most common reasons businesses come to us. We audit what already exists first: what's broken, what's usable, and what needs to be rebuilt, so you don't lose contact history or data that's already in the account.",
    },
    {
      question: "What's the difference between hiring GHL Scale Up and hiring a freelancer on Upwork or Fiverr?",
      answer:
        "The main differences are specialization and accountability. A freelancer marketplace listing often covers several platforms and may not still be reachable if something breaks after delivery. GHL Scale Up works exclusively in GoHighLevel, documents the scope before building, tests every workflow with live data before handover, and includes team training so you're not left figuring out an undocumented system on your own.",
    },
    {
      question: 'Will my team be able to run the system after handover, or are we dependent on you?',
      answer:
        "You're trained to run it. Every project includes live training, written SOPs, and recorded walkthroughs, so day-to-day use adding a contact, checking a pipeline, adjusting a workflow doesn't require calling us. Ongoing monthly support is available if you want it, but it isn't required to operate what we build.",
    },
    {
      question: 'Do you work with businesses outside the US?',
      answer:
        'Yes. GHL Scale Up has delivered 200+ projects across 6 countries, and calls are scheduled in your local time zone.',
    },
    {
      question: 'What makes GHL Scale Up one of the best GoHighLevel expert agencies to hire?',
      answer:
        "Three things, specifically: GoHighLevel is the only platform we build on, so there's no split attention across a dozen other tools; every project is fixed-price with a documented scope before building starts, so there's no scope creep; and training is built into every engagement rather than sold separately, so you own the system at the end instead of renting our knowledge of it.",
    },
  ];

  // Related Services
  const relatedServices = [
    {
      title: 'CRM Setup & Configuration',
      description: 'Pipelines, tags, and custom fields.',
      link: '/services/crm-setup',
    },
    {
      title: 'Workflow & Marketing Automation',
      description: 'Triggers, sequences, conditional logic.',
      link: '/services/workflow-automation',
    },
    {
      title: 'GoHighLevel Migration',
      description: 'Moving from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, and more.',
      link: '/services/migration',
    },
    {
      title: 'White-Label SaaS Setup',
      description: 'Reselling GoHighLevel as your own branded software.',
      link: '/services/saas-setup',
    },
    {
      title: 'GHL Agency Setup Service',
      description: "Standing up a new agency account if you're leaving your current agency's sub-account.",
      link: '/ghl-agency-setup-service',
    },
    {
      title: 'How We Work',
      description: 'The full delivery framework in detail.',
      link: '/how-we-work',
    },
  ];

  // ============================================
  // SCHEMA (Service + FAQPage)
  // ============================================
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hire GoHighLevel Experts',
    description:
      'Hire GoHighLevel experts to build, automate, and scale your CRM. Fixed-price builds, 200+ systems delivered across 6 countries.',
    provider: {
      '@type': 'Organization',
      name: 'GHL Scale Up',
      url: 'https://www.ghlscaleup.com',
    },
    areaServed: 'Worldwide',
    serviceType: 'GoHighLevel implementation, automation, AI, and SaaS services',
    url: 'https://www.ghlscaleup.com/services/hire-gohighlevel-experts',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const container = 'max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8';

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Hire GoHighLevel Experts' },
        ]}
      />

      {/* ============================================
          HERO
          ============================================ */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_20%,rgba(14,155,240,0.12),transparent)] pointer-events-none" />
        <div className={`${container} relative z-10 py-16 md:py-20`}>
          <div className="text-start max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              <Award className="h-3 w-3" />
              Hire GoHighLevel Experts
            </div>
            <h1 className="text-[clamp(1.7rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-6">
              Hire GoHighLevel Experts to{' '}
              <span className="text-[#F8D000]">Build, Automate, and Scale Your System</span>
            </h1>

            <div className="space-y-4 text-[1rem] sm:text-[1.125rem] font-light text-white/70 leading-relaxed text-left sm:text-start">
              <p>
                GHL Scale Up is a GoHighLevel-only agency. When you hire our GoHighLevel experts, you are not handing your CRM to a generalist who also builds WordPress sites, runs Salesforce migrations, and manages social media on the side. You are working with a team that has spent 5+ years and 200+ projects inside a single platform CRM setup, workflow automation, AI voice and chat, funnels, integrations, migrations, and white-label SaaS. If you have already decided GoHighLevel is the right platform and the only open question left is who builds it, this is the team to call.
              </p>
              <p>
                Most businesses land on this page in one of three situations: starting a brand-new GoHighLevel account and not wanting to spend weeks figuring out pipelines and triggers by trial and error; inheriting a half-built or broken GHL account from a previous freelancer or an in-house attempt and needing someone to fix it properly; or using GHL at a basic level for a while and being ready to add real automation, AI, or a resellable SaaS layer on top. Whichever applies to you, the work is scoped up front, priced as a fixed fee, and delivered by the same small team from the first call to handover not passed between account managers and subcontractors along the way.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 justify-start sm:justify-start">
              <Link
                href="/contact"
                className="bg-[#F8D000] text-[#0B1421] px-6 sm:px-8 py-3 rounded-lg text-[0.88rem] sm:text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center gap-2"
              >
                Book a Free Strategy Call <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHO SHOULD HIRE (AND WHO SHOULDN'T)
          ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Who Should Hire a GoHighLevel Expert{' '}
              <span className="text-[#0E9BF0]">(and Who Shouldn&apos;t)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {audiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EDF4] flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#0E9BF0]" />
                  </div>
                  <h3 className="text-[0.98rem] font-bold text-[#1C2E4A] mb-3">{item.title}</h3>
                  <p className="text-[0.83rem] text-[#4A5568] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Who Shouldn't Note */}
          <div className="mt-8 max-w-3xl mx-auto bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6">
            <p className="text-[0.9rem] text-[#4A5568] leading-relaxed">
              If your use case is genuinely simple one pipeline, one calendar, no automation beyond a confirmation email GoHighLevel&apos;s own onboarding and templates may be enough on their own, and hiring an expert would be overkill. The point where a professional build starts paying for itself is when your business depends on leads being followed up correctly, tagged accurately, and routed without someone manually checking a dashboard every morning.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT'S INCLUDED
          ============================================ */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <div className={container}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              What&apos;s Included When You Hire a GoHighLevel Expert{' '}
              <span className="text-[#0E9BF0]">From GHL Scale Up</span>
            </h2>
            <p className="text-[0.9rem] text-[#4A5568]">
              &quot;GoHighLevel expert services&quot; covers a wide range of work. Here is what that actually breaks down into, and where to look if you want the full detail on any one piece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {inclusions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-[#0E9BF0]" />
                    </div>
                    <h3 className="text-[0.98rem] font-bold text-[#1C2E4A] pt-2">{item.title}</h3>
                  </div>
                  <p className="text-[0.83rem] text-[#4A5568] leading-relaxed flex-1">{item.description}</p>
                  {item.link && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#0E9BF0] hover:gap-2.5 transition-all"
                      >
                        {item.linkLabel} <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                      {item.link2 && (
                        <Link
                          href={item.link2}
                          className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#0E9BF0] hover:gap-2.5 transition-all"
                        >
                          {item.linkLabel2} <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          CASE STUDIES (shared component)
          ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <CaseStudies caseStudies={caseStudies} />
      </section>

      {/* ============================================
          TESTIMONIALS (shared component)
          ============================================ */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <Testimonials testimonials={testimonials} />
      </section>

      {/* ============================================
          WHY DIY COSTS MORE
          ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                Why DIY GoHighLevel Setup{' '}
                <span className="text-[#0E9BF0]">Usually Costs More Than It Saves</span>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                GoHighLevel is genuinely large: over 30 trigger types and more than 100 action types are available inside the workflow builder alone, before you get to pipelines, custom fields, funnels, calendars, and AI agents. That breadth is the platform&apos;s strength, and it is also exactly why most self-built accounts stall out. In the accounts we audit before taking on a project, it is common to find two or three basic workflows built and the rest of the platform left untouched not because the business didn&apos;t need more, but because building it correctly without GoHighLevel-specific experience takes far longer than expected, and it is easy to build something that looks finished but silently fails on edge cases.
              </p>
              <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                The real cost shows up later, not up front. A workflow that isn&apos;t tested against real data can send three messages in sixty seconds to the same lead, or miss an appointment reminder entirely. A pipeline that doesn&apos;t match how deals actually move produces a sales report nobody trusts. And an account with no documentation means that if whoever built it moves on, no one else can safely touch it without risking something breaking. Every one of those problems is more expensive to unwind after the fact than it would have been to build correctly the first time which is the specific gap hiring a GoHighLevel expert is meant to close: a scope document before anything is built, every workflow tested against live data before handover, and documentation so the system survives past the person who built it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          IMAGE contained, rounded, no overlay
          ============================================ */}
      <section className="w-full bg-[#F4F7FA] py-8 md:py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src="/service/hire-experts-hero.png"
              alt="GHL Scale Up Hire GoHighLevel experts"
              width={1920}
              height={1080}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="w-full h-auto object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          5-STEP PROCESS
          ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              How Our GoHighLevel Experts Work:{' '}
              <span className="text-[#0E9BF0]">The 5-Step Process</span>
            </h2>
            <p className="text-[0.9rem] text-[#4A5568]">
              Every project runs through the same five stages, whether it is a first-time CRM build or a full SaaS platform. Pricing is fixed and quoted after the first call, not billed hourly, and you get a written scope before any work starts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-5 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300 flex flex-col"
              >
                <div className="w-10 h-10 rounded-full bg-[#1C2E4A] text-[#F8D000] flex items-center justify-center text-sm font-bold mb-4">
                  {step.step}.
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-2">{step.title}</h3>
                <p className="text-[0.78rem] text-[#4A5568] leading-relaxed flex-1">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-[0.92rem] text-[#4A5568] leading-relaxed mb-4">
              Typical turnaround is <strong className="text-[#1C2E4A]">one to three weeks</strong> depending on scope, with weekly progress updates rather than a single status check at the end you will know exactly where the project stands the whole way through.
            </p>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.9rem] hover:gap-3 transition-all"
            >
              Full process detail: How We Work <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY GHL SCALE UP
          ============================================ */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <div className={container}>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                Why GHL Scale Up Instead of a{' '}
                <span className="text-[#0E9BF0]">Freelancer or Generalist Agency</span>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                A general marketing agency that &quot;also does GoHighLevel&quot; is usually splitting attention across a dozen platforms. GHL Scale Up doesn&apos;t GoHighLevel is the only platform we build on, which means the person configuring your automation logic isn&apos;t relearning the platform on your project.
              </p>
              <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                We also stay a small team on purpose. That means a senior person works on your build rather than a junior being presented as an expert, and it is the same team from the discovery call through handover not a project that gets handed off between account managers partway through. There is no scope creep because the deliverables and timeline are documented before we start, and no black-box handover, because training your team to run the system is part of every engagement rather than an upsell.
              </p>
              <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                Across 200+ projects delivered for businesses in real estate, healthcare, SaaS, marketing agencies, and home services, spread across 6 countries, the pattern that holds up is the same one described above: audit before building, document the scope, test with real data, and train the team that has to live with the system afterward.
              </p>
              <p className="text-[0.92rem] sm:text-[0.95rem] text-[#1C2E4A] font-medium leading-relaxed">
                GHL Scale Up was founded by Aryan Trivedi, who still personally reviews every inbound inquiry when you fill out the contact form, you are not routed through a sales team before anyone technical looks at what you actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          REAL GOHIGHLEVEL SYSTEMS BUILT FOR REAL BUSINESSES
          ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Real GoHighLevel Systems{' '}
              <span className="text-[#0E9BF0]">Built for Real Businesses</span>
            </h2>
            <p className="text-[0.9rem] text-[#4A5568]">
              A few examples of what &quot;hiring a GoHighLevel expert&quot; has actually meant for other businesses:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {caseStudyRefs.map((cs, index) => {
              const Icon = cs.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EDF4] flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#0E9BF0]" />
                  </div>
                  <h3 className="text-[1rem] font-bold text-[#1C2E4A] mb-3">{cs.title}</h3>
                  <p className="text-[0.85rem] text-[#4A5568] leading-relaxed flex-1">{cs.description}</p>
                  <Link
                    href={cs.link}
                    className="mt-5 inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.85rem] hover:gap-3 transition-all"
                  >
                    Read the case study <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.9rem] hover:gap-3 transition-all"
            >
              See all case studies <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQS
          ============================================ */}
      <section className="py-14 md:py-20 bg-[#F4F7FA]">
        <div className={container}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              GoHighLevel Expert Hiring:{' '}
              <span className="text-[#0E9BF0]">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-[#E8EDF4] rounded-xl overflow-hidden hover:border-[#0E9BF0] transition-colors h-fit"
              >
                <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer hover:bg-[#F9FBFD] transition-colors list-none">
                  <span className="text-[0.85rem] sm:text-[0.9rem] font-semibold text-[#1C2E4A]">
                    {faq.question}
                  </span>
                  <ChevronRight className="h-4 w-4 text-[#0E9BF0] group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-4 sm:px-5 pb-5">
                  <p className="text-[0.8rem] sm:text-[0.83rem] text-[#4A5568] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          RELATED SERVICES
          ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className={container}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
              Related GoHighLevel <span className="text-[#0E9BF0]">Services</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-5 md:p-6 hover:bg-white hover:border-[#0E9BF0] hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors">
                    {service.title}
                  </h3>
                  <ChevronRight className="h-4 w-4 text-[#0E9BF0] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
                <p className="text-[0.8rem] text-[#4A5568] leading-relaxed flex-1">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="bg-[#1C2E4A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(14,155,240,0.1),transparent)] pointer-events-none" />
        <div className={`${container} relative z-10 py-16 md:py-24`}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              <Phone className="h-3 w-3" />
              Book a Free Strategy Call
            </div>
            <h2 className="text-[1.6rem] sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-5">
              Book a Free Strategy Call{' '}
              <span className="text-[#F8D000]">With a GoHighLevel Expert</span>
            </h2>
            <p className="text-[0.9rem] sm:text-[0.95rem] font-light text-white/70 mb-8 leading-relaxed">
              Fill out the contact form and Aryan personally reviews every inquiry, reaching out within a few hours to schedule a free 30-minute strategy call. On that call: we go through your business goals, audit your current setup if you have one, and give you a clear plan with scope, timeline, and pricing no sales pitch, just a technical conversation about what needs to be built.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="bg-[#F8D000] text-[#0B1421] px-6 sm:px-8 py-3 rounded-lg text-[0.88rem] sm:text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center justify-center gap-2"
              >
                Book Your Free Strategy Call <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Small inline component for the Marketing Agency case study icon
function MegaphoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}