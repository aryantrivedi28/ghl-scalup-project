// app/case-studies/gohighlevel-account-migration-collective-travel-design/CaseStudyContent.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Quote,
  User,
  Building2,
  Clock,
  CheckCircle,
  ChevronDown,
  Rocket,
  BookOpen,
  Layers,
  GitBranch,
  Database,
  Workflow,
  Shield,
  RefreshCw,
  Mail,
  Phone,
  Calendar,
  DollarSign,
} from 'lucide-react';

export default function CaseStudyContent() {
  return (
    <article className="min-h-screen bg-white" itemScope itemType="https://schema.org/Article">
      <HeroSection />
      <ClientOverviewSection />
      <ProblemSection />
      <StrategySection />
      <ImplementationSection />
      <SystemFlowSection />
      <ResultsSection />
      <DeliverablesSection />
      <BeforeAfterSection />
      <CTASection />
    </article>
  );
}

/* ==================== HERO ==================== */
function HeroSection() {
  const outcomes = [
    '501 contacts migrated with verified field mapping and tag assignment',
    '10 trigger-based workflows covering lead capture through post-trip review',
    'A2P (SMS) Brand & Campaign registration approved on the first submission',
    'Calendars, pipeline, forms, and Square/Google/Slack integrations fully rebuilt',
  ];

  return (
    <header id="overview" aria-labelledby="case-study-title" className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
      <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[760px] mx-auto relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Case Study</span>
          <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Account Migration</span>
          <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Travel</span>
          <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Full CRM Rebuild</span>
        </div>

        <h1 id="case-study-title" itemProp="headline" className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
          Collective Travel Design now owns <span className="text-[#F8D000]">every system it runs on</span>
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center rounded">
            <Image src="/web-app-manifest-192x192.png" alt="GHL Scale Up logo" width={28} height={28} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-sm font-medium text-white" itemProp="author">GHL Scale Up Team</div>
            <div className="text-xs text-white/50">
              GoHighLevel Expert Agency · <time dateTime="2026-09-15" itemProp="dateModified">Updated September 2026</time>
            </div>
          </div>
        </div>

        <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]" itemProp="description">
          A full GoHighLevel migration 501 contacts, 10 automated workflows, and every compliance registration rebuilt from a third-party-controlled account into Collective Travel Design&apos;s own agency account in 21 business days.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Client', value: 'Rachel Collective Travel Design' },
            { label: 'Location', value: 'Hutto, TX' },
            { label: 'Timeline', value: '21 business days' },
            { label: 'Migration', value: 'Ivorey → Collective Travel Design' },
          ].map((m, i) => (
            <div key={i} className="bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2.5">
              <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-0.5">{m.label}</div>
              <div className="text-xs md:text-sm text-white/85 font-medium">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-2.5 mb-7">
          {outcomes.map((o, i) => (
            <div key={i} className="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-lg p-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#25C97D] flex items-center justify-center mt-0.5">
                <CheckCircle className="w-3 h-3 text-[#0B1628]" aria-hidden="true" />
              </span>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">{o}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all" aria-label="Get a free GoHighLevel migration consultation">
            <Rocket className="w-4 h-4" aria-hidden="true" />
            Get Your Free Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link href="#faq" className="inline-flex items-center gap-2 bg-white/10 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/10" aria-label="Skip to frequently asked questions">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Skip to FAQ
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ==================== CLIENT OVERVIEW ==================== */
function ClientOverviewSection() {
  return (
    <section id="client-overview" aria-labelledby="client-overview-heading" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-start">
            <div>
              <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4">
                Client overview
              </span>
              <h2 id="client-overview-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mb-4">
                Who Rachel is
              </h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                Rachel runs Collective Travel Design, a Hutto, Texas-based travel-planning business built around booking custom trips from the first inquiry, through the planning call, contract, and payment, to the trip itself.
              </p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                Before this project, the CRM her business ran on lived inside a GoHighLevel account controlled by a third party, Ivorey not an account Collective Travel Design owned outright.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-7">
              <dl className="space-y-0">
                {[
                  { k: 'Business', v: 'Collective Travel Design' },
                  { k: 'Industry', v: 'Custom travel planning' },
                  { k: 'Source account', v: 'Ivorey (third-party-hosted)' },
                  { k: 'Target account', v: 'Collective Travel Design (own agency account)' },
                  { k: 'Contacts in scope', v: '501' },
                  { k: 'Project duration', v: '21 business days' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between gap-4 py-3 border-b border-[#DDE1E9] last:border-b-0 text-sm">
                    <dt className="text-[#5C6880]">{row.k}</dt>
                    <dd className="text-[#1A2236] font-semibold text-right">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== PROBLEM ==================== */
function ProblemSection() {
  const problems = [
    {
      title: 'No direct ownership',
      body: "Calendars, intake forms, the sales pipeline, automated follow-ups, email sending, and SMS compliance were all built and hosted inside an account Rachel didn't own.",
    },
    {
      title: 'No one-click transfer',
      body: 'GoHighLevel has no native account-to-account migration. 16 separate asset categories Calendars, Forms, Surveys, Documents, Products, Square Integration, Workflows, Email Templates, Pipeline, Email Sending Subdomain, A2P Registration, Custom Values, Google Integration, Slack Integration, Tags, and the 501-contact database each had to be individually audited, exported, and rebuilt.',
    },
    {
      title: 'Compliance locked to the old account',
      body: "A2P (SMS) registration and the email sending domain couldn't be managed independently as long as the operating account sat under Ivorey rather than Collective Travel Design.",
    },
  ];

  return (
    <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-10">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4">The problem</span>
            <h2 id="problem-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236]">
              A business running on someone else&apos;s infrastructure
            </h2>
          </div>

          <div className="space-y-0">
            {problems.map((p, i) => (
              <div key={i} className="grid grid-cols-[64px_1fr] gap-5 py-6 border-t border-[#DDE1E9] last:border-b">
                <span className="font-mono text-sm font-semibold text-[#0E9BF0] pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#1A2236] mb-1.5">{p.title}</h3>
                  <p className="text-sm md:text-base text-[#5C6880] leading-relaxed max-w-3xl">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== STRATEGY ==================== */
function StrategySection() {
  const phases = [
    { num: 'Phase 1', title: 'Discovery & Environment Setup', days: 'Days 1–3', desc: 'Kick-off call, full audit of the source account, new agency account provisioning, and documentation of every custom value, tag, and pipeline stage.' },
    { num: 'Phase 2', title: 'Core Asset Migration', days: 'Days 4–10', desc: 'A2P registration, Custom Values & Tags, calendar rebuild, forms/surveys, documents, products, pipeline stages, email templates, and the 501-contact CSV import.' },
    { num: 'Phase 3', title: 'Integrations & Compliance', days: 'Days 11–15', desc: 'Email sending subdomain and DNS verification, Square payment reconnection, Google OAuth reconnection, Slack reconnection, and SMS compliance verification.' },
    { num: 'Phase 4', title: 'Automation & Workflow Rebuild', days: 'Days 16–18', desc: 'Workflow logic documented from the source account, rebuilt trigger-by-trigger in the new account, and internally tested.' },
    { num: 'Phase 5', title: 'QA, Testing & Handover', days: 'Days 19–21', desc: 'End-to-end QA, Square payment testing, email/SMS deliverability testing, client UAT walkthrough, and final sign-off.' },
  ];

  return (
    <section id="strategy" aria-labelledby="strategy-heading" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-10">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4">The strategy</span>
            <h2 id="strategy-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mb-3">
              A 5-phase, 21-business-day execution plan
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] max-w-2xl">
              Rather than migrating assets ad hoc, the project was sequenced into five phases, each with defined owners and deadlines.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-0">
            {phases.map((phase, i) => (
              <div key={i} className="border-t-[3px] border-[#0B1628] pt-4 pr-4 md:pr-5">
                <span className="block font-mono text-xs font-semibold text-[#0E9BF0] mb-2.5">{phase.num}</span>
                <h3 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2">{phase.title}</h3>
                <span className="block font-mono text-[11px] text-[#5C6880] mb-2.5">{phase.days}</span>
                <p className="text-xs text-[#5C6880] leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== IMPLEMENTATION ==================== */
function ImplementationSection() {
  return (
    <section
      id="implementation"
      aria-labelledby="implementation-heading"
      className="py-16 md:py-20 bg-[#F8F9FB]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4">
              Implementation
            </span>
            <h2
              id="implementation-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236]"
            >
              What was actually rebuilt, system by system
            </h2>
          </div>

          {/* ==================== A CRM & CONTACT MIGRATION ==================== */}
          <div className="py-8 md:py-10 border-t border-[#DDE1E9]">
            <span className="inline-block font-mono text-xs text-[#0E9BF0] bg-[#0E9BF0]/10 px-2.5 py-1 rounded-md mb-3">
              A CRM &amp; contact migration
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2236] mb-5 max-w-3xl">
              501 contacts, rebuilt with a tested reference architecture underneath them
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">What</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  The full contact database 501 contacts was exported via CSV from the source account and re-imported into Collective Travel Design&apos;s own GHL account.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">How</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Field mapping and tag assignment were verified contact-by-contact. The complete Custom Values and Tag architecture was recreated first, since every workflow and pipeline rule downstream references it.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">Why it matters</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  A contact imported before its tags and custom values exist silently breaks every automation tied to it. Sequencing prevents that.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== B WORKFLOWS & AUTOMATION ==================== */}
          <div className="py-8 md:py-10 border-t border-[#DDE1E9]">
            <span className="inline-block font-mono text-xs text-[#0E9BF0] bg-[#0E9BF0]/10 px-2.5 py-1 rounded-md mb-3">
              B Workflows &amp; automation
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2236] mb-5 max-w-3xl">
              10 trigger-based workflows running the entire client journey
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">What</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Every workflow&apos;s logic was documented from the source account, then rebuilt trigger-by-trigger and action-by-action in the new account.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">How</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Custom values were re-mapped throughout, and each workflow was internally trigger-tested before being connected to the live pipeline.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">Why it matters</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  From the first form submission to the post-trip review request, no stage requires a team member to remember a manual step.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {/* Workflow 01 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">01</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">Zite Form Submitted → Contact Created in GHL</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  Leads from the third-party intake tool Zite are captured via webhook, a contact is created with a unique trip ID assigned, and a welcome email and SMS go out immediately followed by two scheduled follow-ups to book a Planning Call.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-01-zite-intake.jpg" alt="GoHighLevel workflow: Zite form submission triggers contact creation, welcome email/SMS, and two scheduled follow-ups" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 01 Zite intake webhook → contact creation → welcome sequence → two scheduling follow-ups.</p>
              </div>

              {/* Workflow 02 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">02</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">Planning Call Booked → Confirmation Sequence</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  When a Planning Call is booked on the calendar, the contact receives an immediate booking confirmation by email and SMS with the appointment details attached.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-02-planning-call-confirmation.jpg" alt="GoHighLevel workflow: Planning Call booked triggers immediate confirmation across email and SMS" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 02 Calendar booking → immediate confirmation across email and SMS.</p>
              </div>

              {/* Workflow 03 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">03</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">24-Hour Appointment Reminder</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  Twenty-four hours before the Planning Call, the contact receives a reminder email and SMS to reduce no-shows and confirm the appointment is still on.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-03-24h-reminder.jpg" alt="GoHighLevel workflow: 24-hour appointment reminder across email and SMS" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 03 24-hour appointment reminder across email and SMS.</p>
              </div>

              {/* Workflow 04 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">04</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">1-Hour Appointment Reminder</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  One hour before the Planning Call, a final reminder goes out by SMS with the meeting link or call-in details.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-04-1h-reminder.jpg" alt="GoHighLevel workflow: 1-hour appointment reminder by SMS" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 04 1-hour appointment reminder by SMS.</p>
              </div>

              {/* Workflow 05 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">05</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">Proposal Sent → Multi-Touch Follow-Up</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  When a custom trip proposal is sent to the contact, a multi-touch follow-up sequence begins across email and SMS until the proposal is accepted or the sequence is paused.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-05-proposal-followup.jpg" alt="GoHighLevel workflow: proposal sent triggers multi-touch email and SMS follow-up sequence" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 05 Proposal sent → multi-touch follow-up until accepted.</p>
              </div>

              {/* Workflow 06 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">06</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">Contract Signed → Pipeline Stage Update</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  On contract signature, the contact is moved to the Active pipeline stage, and the internal team is notified by Slack and email so booking logistics can begin.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-06-contract-signed.jpg" alt="GoHighLevel workflow: contract signed triggers pipeline stage update and internal notifications" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 06 Contract signed → pipeline stage update → internal Slack + email notifications.</p>
              </div>

              {/* Workflow 07 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">07</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">Deposit Invoice → Square Payment Link</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  A deposit invoice is generated automatically and the contact receives a Square payment link by email and SMS. Payment status syncs back to the contact record on completion.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-07-deposit-square.jpg" alt="GoHighLevel workflow: deposit invoice triggers Square payment link and payment status sync" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 07 Deposit invoice → Square payment link → payment status sync.</p>
              </div>

              {/* Workflow 08 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">08</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">Pre-Trip Preparation Sequence</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  As the trip date approaches, a pre-trip preparation sequence delivers itinerary details, packing suggestions, and contact information across email and SMS.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-08-pre-trip-prep.jpg" alt="GoHighLevel workflow: pre-trip preparation sequence delivers itinerary, packing tips, and contact info" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 08 Pre-trip preparation sequence across email and SMS.</p>
              </div>

              {/* Workflow 09 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">09</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">Trip End → Post-Trip Review Request</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  After the trip end date, the contact enters a post-trip sequence that sends a review request and any applicable referral offer.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-09-post-trip-review.jpg" alt="GoHighLevel workflow: post-trip review request triggered after trip end date" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 09 Trip end date → post-trip review request sequence.</p>
              </div>

              {/* Workflow 10 */}
              <div className="bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E9BF0] text-white font-bold text-base flex items-center justify-center">10</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mt-1.5">Re-Engagement → Repeat Booking Nurture</h4>
                </div>
                <p className="mt-3 text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                  Contacts who complete a trip without booking a follow-up enter a long-term nurture sequence that keeps Collective Travel Design top of mind for the next trip.
                </p>
                <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                  <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                    <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  </div>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                    <Image src="/case-study/collective-travel/workflow-10-repeat-booking.jpg" alt="GoHighLevel workflow: re-engagement nurture sequence for contacts who did not book a follow-up trip" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">Workflow 10 Re-engagement nurture for repeat booking.</p>
              </div>
            </div>
          </div>

          {/* ==================== C EMAIL + SMS INFRASTRUCTURE ==================== */}
          <div className="py-8 md:py-10 border-t border-[#DDE1E9]">
            <span className="inline-block font-mono text-xs text-[#0E9BF0] bg-[#0E9BF0]/10 px-2.5 py-1 rounded-md mb-3">
              C Email + SMS infrastructure
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2236] mb-5 max-w-3xl">
              Email sending subdomain and A2P registration rebuilt under the new account
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">What</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  The email sending subdomain was recreated in the new agency account with fresh DNS records, and A2P (SMS) Brand &amp; Campaign registration was re-submitted under Collective Travel Design&apos;s own legal entity.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">How</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  DNS records were verified before sending was enabled, and the A2P registration was submitted early in Phase 2 so approval would be in place before the SMS workflows went live.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">Why it matters</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Compliance registrations and sending reputation are tied to the account owner not to the sub-account or user. Rebuilding them in the new account is what makes the migration permanent.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white border border-[#DDE1E9] rounded-2xl shadow-sm p-5 md:p-8">
              <h4 className="text-lg md:text-xl font-bold text-[#1A2236] mb-3">
                A2P (SMS) Brand &amp; Campaign registration
              </h4>
              <p className="text-sm text-[#5C6880] leading-relaxed max-w-3xl mb-3">
                A2P (SMS) registration is tied to the legal entity and the sending account it does not follow a sub-account or user across agencies. As part of Phase 2, the Brand and Campaign registration was re-submitted inside Collective Travel Design&apos;s new agency account under her own business credentials.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed max-w-3xl mb-3">
                The registration was approved on the first submission, which meant SMS automation from Zite intake follow-ups through post-trip review requests was live the moment the workflows were connected to the live pipeline.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed max-w-3xl">
                The email sending subdomain was also rebuilt with fresh DNS records and verified before any sending was enabled in the new account.
              </p>

              <div className="mt-5 border border-[#DDE1E9] rounded-lg overflow-hidden bg-white">
                <div className="h-6 bg-[#E7E6E1] flex items-center gap-1.5 px-3">
                  <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                  <span className="w-2 h-2 rounded-full bg-[#C7C6C0]" />
                </div>
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                  <Image src="/case-study/collective-travel/c-a2p-registration.jpg" alt="A2P (SMS) Brand and Campaign registration approved inside the new Collective Travel Design agency account" fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" />
                </div>
              </div>
              <p className="mt-3 text-xs md:text-sm italic text-[#5C6880] max-w-3xl">
                A2P registration status inside the new agency account Brand &amp; Campaign approved on first submission.
              </p>
            </div>
          </div>

          {/* ==================== D PIPELINE & SALES SYSTEM ==================== */}
          <div className="py-8 md:py-10 border-t border-[#DDE1E9]">
            <span className="inline-block font-mono text-xs text-[#0E9BF0] bg-[#0E9BF0]/10 px-2.5 py-1 rounded-md mb-3">
              D Pipeline &amp; sales system
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2236] mb-5 max-w-3xl">
              Sales pipeline rebuilt with the same stages, automations, and reporting as before
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">What</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  The full sales pipeline was rebuilt in the new account every stage, deal field, and downstream automation restored to match the source account exactly.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">How</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Pipeline stages were documented from the source account first, then rebuilt top-to-bottom with the same triggers, task creation, and notification rules.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">Why it matters</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  The pipeline is where every other asset converges. Rebuilding it correctly means deal status, automation firing, and reporting all behave identically after cutover.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== E CALENDARS & BOOKING ==================== */}
          <div className="py-8 md:py-10 border-t border-[#DDE1E9]">
            <span className="inline-block font-mono text-xs text-[#0E9BF0] bg-[#0E9BF0]/10 px-2.5 py-1 rounded-md mb-3">
              E Calendars &amp; booking
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2236] mb-5 max-w-3xl">
              Planning Call calendar and booking flow rebuilt with full notification logic
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">What</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  The Planning Call calendar, availability rules, and booking flow were rebuilt in the new account, with confirmation, 24-hour reminder, and 1-hour reminder notifications preserved across email and SMS.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">How</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Calendar setup and availability windows were documented from the source account first, then rebuilt in the new account. Google OAuth was reconnected so calendar sync continued without interruption.
                </p>
              </div>
              <div className="border-l-2 border-[#DDE1E9] pl-4">
                <h4 className="font-mono text-[11px] font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">Why it matters</h4>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  A broken booking flow is invisible until a client tries to book. Rebuilding it with the same notification logic means clients never notice the account changed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== SYSTEM FLOW ==================== */
function SystemFlowSection() {
  const nodes = [
    { label: 'Lead captured (webhook)', hl: true },
    { label: 'Contact + unique trip ID', hl: false },
    { label: 'Welcome + nurture', hl: false },
    { label: 'Planning Call booked', hl: true },
    { label: 'No-show / cancel recovery', hl: false },
    { label: 'Call attended', hl: false },
    { label: 'T&C sent → signed', hl: false },
    { label: 'Invoice sent → paid', hl: true },
    { label: 'Pre-departure nurture', hl: false },
    { label: 'Travelled → review request', hl: true },
  ];

  return (
    <section
      id="system-flow"
      aria-labelledby="flow-heading"
      className="py-16 md:py-20 bg-[#0B1628]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-10">
            <span className="inline-block bg-[#F8D000]/15 text-[#F8D000] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 border border-[#F8D000]/20">
              System flow
            </span>
            <h2
              id="flow-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            >
              From first form fill to five-star review
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-2xl mt-3">
              The ten rebuilt workflows connect into one continuous system no
              stage requires a team member to notice and act.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
            {nodes.map((node, i) => (
              <React.Fragment key={i}>
                <div
                  className={`font-mono text-xs md:text-sm px-3.5 md:px-4 py-2.5 rounded-lg border ${
                    node.hl
                      ? 'bg-[#F8D000]/12 text-[#F8D000] border-[#F8D000]/40'
                      : 'bg-white/[0.04] text-white/85 border-white/10'
                  }`}
                >
                  {node.label}
                </div>
                {i < nodes.length - 1 && (
                  <ArrowRight
                    className="w-4 h-4 text-white/30 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== RESULTS ==================== */
function ResultsSection() {
  const results = [
    {
      title: 'Operational clarity',
      body: 'Collective Travel Design owns its CRM outright, with no dependency on a third-party-controlled account.',
    },
    {
      title: 'Full automation coverage',
      body: 'Every stage of the client journey, from first form submission to post-trip review, runs on a tested, trigger-based workflow.',
    },
    {
      title: 'Compliance reliability',
      body: 'A2P registration cleared on the first attempt; the email sending domain was DNS-verified before handover.',
    },
    {
      title: 'Built to scale',
      body: 'Tag architecture, custom values, and pipeline structure were rebuilt not copied so the system can keep growing without touching the original Ivorey account again.',
    },
  ];

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="py-16 md:py-20 bg-[#F8F9FB]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4">
              Results
            </span>
            <h2
              id="results-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mb-3"
            >
              What the rebuilt system delivers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed max-w-2xl">
              Performance metrics conversion rates, revenue, response times
              weren&apos;t part of this engagement&apos;s scope. What follows is
              what the system itself now delivers, not a before/after performance
              comparison.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {results.map((r, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-[#DDE1E9] p-6 md:p-7 shadow-sm hover:shadow-xl hover:border-[#0E9BF0]/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                {/* Left accent bar */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#25C97D] group-hover:bg-[#0E9BF0] transition-colors duration-300"
                  aria-hidden="true"
                />

                {/* Number badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="font-mono text-xs font-semibold text-[#0E9BF0] tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#25C97D]/10 flex items-center justify-center group-hover:bg-[#0E9BF0]/10 transition-colors duration-300">
                    <CheckCircle
                      className="w-4 h-4 text-[#25C97D] group-hover:text-[#0E9BF0] transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#1A2236] mb-2.5 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== DELIVERABLES ==================== */
function DeliverablesSection() {
  const items = [
    { title: 'Custom Values', desc: 'full architecture recreated' },
    { title: 'Forms', desc: 'rebuilt field-for-field' },
    { title: 'Survey', desc: 'rebuilt field-for-field' },
    { title: 'Tags', desc: 'full contact segmentation recreated' },
    { title: 'Email Templates', desc: 're-created and rendering-verified' },
    { title: 'Workflows', desc: '10 workflows, active & trigger-tested' },
    { title: 'Pipeline', desc: 'stages rebuilt and assigned to contacts' },
    { title: 'Calendars', desc: 'all types and availability rebuilt' },
    { title: 'Imported Contacts', desc: '501 contacts, tagged & pipeline-assigned' },
    { title: 'Email Domain', desc: 'sending subdomain configured & DNS-verified' },
    { title: 'A2P Registration', desc: 'Brand & Campaign approved via Twilio' },
    { title: 'QA Report & handover documentation', desc: '' },
  ];

  return (
    <section
      id="deliverables"
      aria-labelledby="deliverables-heading"
      className="py-16 md:py-20 bg-[#F8F9FB]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4">
              Deliverables
            </span>
            <h2
              id="deliverables-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236]"
            >
              Everything handed over
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 bg-white border border-[#DDE1E9] rounded-xl p-4 hover:border-[#0E9BF0]/30 hover:shadow-md transition-all duration-300"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#25C97D]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#25C97D]/20 transition-colors duration-300">
                  <CheckCircle
                    className="w-3.5 h-3.5 text-[#25C97D]"
                    aria-hidden="true"
                  />
                </span>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-[#1A2236]">
                    {item.title}
                  </span>
                  {item.desc && (
                    <span className="text-[#5C6880]"> {item.desc}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== BEFORE / AFTER ==================== */
function BeforeAfterSection() {
  const rows = [
    {
      before: "CRM hosted inside a third party's (Ivorey) GHL account",
      after: 'Fully owned GHL agency account under Collective Travel Design',
    },
    {
      before: 'No direct control over compliance items (A2P, email domain)',
      after: 'A2P approved on first submission; email domain DNS-verified in-house',
    },
    {
      before: "Contacts, tags, and pipeline logic tied to someone else's account",
      after: '501 contacts, full tag architecture, and pipeline rebuilt natively',
    },
    {
      before: 'Workflow logic undocumented outside the source account',
      after: '10 documented, trigger-tested workflows covering the entire client journey',
    },
    {
      before: 'Square, Google, and Slack integrations configured under the old account',
      after: 'All three integrations reconnected and re-authorized under the new account',
    },
  ];

  return (
    <section
      id="before-after"
      aria-labelledby="before-after-heading"
      className="py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4">
              Before vs. after
            </span>
            <h2
              id="before-after-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236]"
            >
              The account, then and now
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <caption className="sr-only">
                Collective Travel Design the account before and after the
                GoHighLevel migration
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-left font-mono text-xs font-semibold text-[#5C6880] uppercase tracking-wider pb-3.5 border-b-2 border-[#1A2236] pr-4 w-1/2"
                  >
                    Before
                  </th>
                  <th
                    scope="col"
                    className="text-left font-mono text-xs font-semibold text-[#25C97D] uppercase tracking-wider pb-3.5 border-b-2 border-[#1A2236] pl-4 w-1/2"
                  >
                    After
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-4 pr-4 border-b border-[#DDE1E9] text-sm text-[#5C6880] align-top leading-relaxed">
                      {row.before}
                    </td>
                    <td className="py-4 pl-4 border-b border-[#DDE1E9] text-sm font-medium text-[#1A2236] align-top leading-relaxed">
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== CTA ==================== */
function CTASection() {
  return (
    <section id="cta-final" aria-labelledby="cta-final-heading" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1628]" />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-64 md:w-96 h-64 md:h-96 bg-[#0E9BF0]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-64 md:w-96 h-64 md:h-96 bg-[#0E9BF0]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-final-heading" className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to own your GoHighLevel account again?
          </h2>
          <p className="text-base md:text-lg text-white/60 mb-8 md:mb-10 leading-relaxed">
            If your business is running on a GoHighLevel account you don&apos;t own or you need a full asset audit before committing GHL Scale Up can architect the migration the way we did for Collective Travel Design.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 bg-[#F8D000] text-[#0B1421] font-bold rounded-lg hover:bg-[#FFE44D] transition-all duration-300 text-base md:text-lg group">
            Book a Free Migration Audit
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Link>
          <p className="mt-6 font-mono text-[11px] md:text-xs text-white/45">
            GHL Scale Up GoHighLevel account migration & full system rebuild
          </p>
        </div>
      </div>
    </section>
  );
}