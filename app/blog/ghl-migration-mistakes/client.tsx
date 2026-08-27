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
  AlertTriangle,
  DollarSign,
  Users,
  Calendar,
  Clock,
  Mail,
  Database,
  RefreshCw,
  XCircle,
  Shield,
  Star,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Trophy,
  Facebook,
  AlertCircle,
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
  Settings,
  Briefcase,
  LifeBuoy,
  Award,
  Timer,
  Trash2,
  Download,
  BarChart3,
  PieChart,
  Workflow,
  Globe,
  Database as DatabaseIcon,
  Cloud,
  GitBranch,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GHLMigrationMistakesClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  // Handle scroll detection for active section
  useEffect(() => {
    const sections = [
      'mistake-1',
      'mistake-2',
      'mistake-3',
      'mistake-4',
      'mistake-5',
      'mistake-6',
      'mistake-7',
      'mistake-8',
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

      // Show floating Project Help card after scrolling past hero section
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
      q: "What are the most common GoHighLevel migration mistakes?",
      a: "The 8 most common GHL migration mistakes are: importing dirty contact data without cleaning it first, copying automations from the old platform instead of rebuilding them in GHL's workflow system, cancelling the old platform before GHL is fully validated, skipping email domain warmup before sending campaigns, skipping the parallel running phase and cutting over too quickly, migrating all automations instead of auditing which ones are still active, going live without running an end-to-end test of the full lead flow, and trying to optimise copy and design during the migration instead of after it. All 8 are avoidable with the right process."
    },
    {
      q: "Why do GoHighLevel migrations fail?",
      a: "Most GHL migration failures stem from inadequate planning rather than platform limitations. Research shows 73% of businesses experience minor disruptions during GHL migration and 12% face significant challenges. The vast majority of those problems come from skipping the audit phase, not cleaning data before import, not testing automations before go-live, and cancelling the old platform too early. Migrations that follow a structured phase-by-phase process with parallel running and end-to-end testing succeed at a much higher rate."
    },
    {
      q: "How long should I keep my old platform running during a GHL migration?",
      a: "Keep the old platform active until: all contacts are imported and validated in GHL, all active automations are rebuilt and tested with real contacts, you have run both platforms in parallel for a minimum of 2 weeks, all lead capture points are redirected to GHL, and you have confirmed GHL is performing at least as well as the old platform for 5 to 7 consecutive business days. Only then cancel the old subscription and always take a full final data export as a backup."
    },
    {
      q: "Do I need to rebuild all my automations when migrating to GoHighLevel?",
      a: "Yes. Automations from other platforms cannot be imported into GoHighLevel. They must be rebuilt manually in GHL's workflow builder because every platform uses a different trigger model and logic structure. More importantly, a direct copy of your old automations misses the opportunity to upgrade them using GHL's native capabilities (native SMS, AI steps, voice actions, and booking integrations). Rebuild each automation with its intended outcome in mind, not just its old structure."
    },
    {
      q: "How do I avoid email deliverability problems when migrating to GoHighLevel?",
      a: "To protect deliverability during a GHL migration: complete DKIM, SPF, and DMARC authentication for your sending domain in GHL Settings before sending anything, warm your new sending domain over 2 to 3 weeks by starting with low-volume sends to your most engaged contacts, remove hard bounces and long-term unengaged contacts from your list before the warmup, and monitor open rates and spam complaint rates closely during the first 4 to 6 weeks. Skipping these steps and immediately sending to your full list is the fastest way to damage your sender reputation."
    },
    {
      q: "Should I optimise my funnels and emails during the GHL migration?",
      a: "No. This is one of the most common mistakes. Migrate first, optimise after. Rebuild every automation and funnel to do exactly what it was doing before. Go live with a system that matches your previous platform's performance. Once you have a stable baseline and can see that GHL is performing correctly, begin optimising one element at a time. Changing copy, design, and automation logic simultaneously with a platform change makes it impossible to diagnose what caused any performance difference."
    },
    {
      q: "Can GHL Scale Up handle our migration to avoid these mistakes?",
      a: "Yes. GHL Scale Up manages end-to-end GoHighLevel migrations with a structured process: data audit and cleaning, automation inventory and rebuild, email domain configuration and warmup scheduling, parallel running phase management, end-to-end testing before cutover, and 14-day post-migration support. We have completed 200+ migrations from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce. Book a free migration assessment."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'mistake-1', title: '1. Importing Dirty Data Without Cleaning It First' },
    { id: 'mistake-2', title: '2. Copying Automations Instead of Rebuilding Them' },
    { id: 'mistake-3', title: '3. Cancelling the Old Platform Before GHL Is Validated' },
    { id: 'mistake-4', title: '4. Skipping Email Domain Warmup' },
    { id: 'mistake-5', title: '5. Skipping the Parallel Running Phase' },
    { id: 'mistake-6', title: '6. Migrating Every Automation Instead of Auditing First' },
    { id: 'mistake-7', title: '7. Going Live Without End-to-End Testing' },
    { id: 'mistake-8', title: '8. Trying to Migrate and Optimise at the Same Time' },
    { id: 'faq', title: '9. Frequently Asked Questions' },
  ];

  const mistakes = [
    {
      id: 'mistake-1',
      title: 'Importing Dirty Data Without Cleaning It First',
      what: 'Contacts with duplicate entries, missing fields, inconsistent phone number formats, or outdated email addresses are imported directly from the old CRM into GHL. The result: automations fire on bad contacts, customers receive multiple messages from duplicated records, deliverability suffers from invalid email addresses.',
      example: 'A home services business imported 3,000 contacts directly from their old CRM without cleaning. The contact list had 600 duplicate records and inconsistent phone number formats. After the import, customers received multiple appointment reminders from the duplicated records. Some customers were double-billed through Stripe because two contact records triggered the same payment workflow. The business spent 40 hours manually fixing data instead of serving clients.',
      fix: 'Before importing any contacts: remove all hard bounces and unsubscribes, deduplicate records with the same email or phone number, standardise phone number format to E.164 international format (+1XXXXXXXXXX for US), fill in missing fields where possible, remove contacts who have not engaged in 12+ months from your initial import. Import a clean list into a clean account.'
    },
    {
      id: 'mistake-2',
      title: 'Copying Automations Instead of Rebuilding Them',
      what: 'The most costly migration misconception. Agencies assume they can "lift and shift" automations from the old platform. It does not work. GHL\'s trigger model, conditional logic, and action types are fundamentally different from every other platform.',
      example: 'A plumbing contractor copied his email-only follow-up sequence from his old CRM into GHL. In GoHighLevel, this created broken workflows because the system\'s trigger model works differently. His appointment confirmations stopped working entirely, leading to a 30% increase in no-shows in the first week.',
      fix: 'Treat every automation as a rebuild, not a copy. Document the intent and logic of each automation. Then rebuild it from scratch in GHL using GHL\'s trigger system and action library. Build what achieves the same outcome using GHL\'s native capabilities, which are more powerful than what you were using before.'
    },
    {
      id: 'mistake-3',
      title: 'Cancelling the Old Platform Before GHL Is Validated',
      what: 'An agency cancels their HubSpot, ClickFunnels, or ActiveCampaign subscription on the first day they have GHL set up. But if any gap is discovered after cancellation, there is no fallback. For HubSpot users, cancellation starts a 25-day countdown before data is permanently deleted.',
      example: 'An agency cancelled HubSpot 3 days after completing their GHL setup. Two weeks later they discovered that their post-purchase onboarding sequence had a broken trigger. The 25-day HubSpot data access window had already passed.',
      fix: 'Keep the old platform active until: all contacts are validated in GHL, all automations are rebuilt and tested, you have run both platforms in parallel for a minimum of 2 weeks, all lead sources are redirected to GHL. Only then cancel the old subscription and take a final full data export as a backup.'
    },
    {
      id: 'mistake-4',
      title: 'Skipping Email Domain Warmup',
      what: 'An agency completes the contact import, reconnects their email sending domain in GHL, and immediately sends their first campaign to the full list. Within days, open rates drop from 35% to under 15%. The sender reputation built over years does not carry over.',
      fix: 'Before sending a single email from GHL: complete DKIM, SPF, and DMARC configuration for your sending domain. Warm your sending domain over 2 to 3 weeks: start with 50 to 100 emails per day to your most engaged contacts. Increase volume by 25 to 30% every 3 to 4 days. Do not import and immediately blast your full list.'
    },
    {
      id: 'mistake-5',
      title: 'Skipping the Parallel Running Phase',
      what: 'An agency treats the migration as a hard cutover: old platform off, GHL on, same day. Any gap in the setup becomes immediately visible as a live business problem with no fallback and real revenue at stake.',
      fix: 'Run both platforms simultaneously for a minimum of 2 weeks before cutover. Route new leads into GHL. Let active contacts in the old platform complete those sequences before moving them. Use the parallel period to catch setup gaps while you still have a fallback. Only cut over when GHL is performing at least as well as the old platform for 5 to 7 consecutive business days.'
    },
    {
      id: 'mistake-6',
      title: 'Migrating Every Automation Instead of Auditing First',
      what: 'An agency migrates all 35 of their existing automations into GHL including the welcome sequence from a campaign 3 years ago that has never been updated, the re-engagement flow for a product they no longer sell, and the event follow-up from a webinar that ended 18 months ago.',
      fix: 'Audit every automation before migration starts. For each automation, answer: Is this actively running? Has it triggered in the last 90 days? Does it serve a product or campaign that still exists? If any answer is no, leave it behind. Most businesses have 30 to 40% dead weight automations.'
    },
    {
      id: 'mistake-7',
      title: 'Going Live Without End-to-End Testing',
      what: 'An agency builds the GHL system, does some basic checks, and goes live. The first real lead comes through the new funnel. But the follow-up sequence does not fire because the trigger was set incorrectly.',
      fix: 'Before any real lead touches the new system, run this end-to-end test: submit a real form on the live funnel, confirm the contact appears in GHL CRM with correct tags, confirm the follow-up sequence fires within 60 seconds, complete a real booking and confirm messages send correctly, check the full flow on mobile. Fix every gap before routing real leads in.'
    },
    {
      id: 'mistake-8',
      title: 'Trying to Migrate and Optimise at the Same Time',
      what: 'A migration becomes the opportunity to rewrite email copy, redesign funnels, and add SMS to every automation. When something does not work after go-live, they cannot tell whether the problem is a migration error or a copy change.',
      fix: 'Migrate exactly first. Optimise after. Rebuild every automation to do exactly what it was doing before. Go live. Validate that performance is comparable to the old platform. Then, with a stable baseline, begin optimising one element at a time. This lets you attribute any performance change to a specific change.'
    },
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your project.</p>
      <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
          <span className="text-[#1A2236] font-medium">GHL Migration Mistakes 2026</span>
        </div>
      </nav>

      {/* Hero Section - WIDE */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Mistakes to Avoid</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            8 Common GHL Migration Mistakes Agencies Make<br />
            <span className="text-[#F8D000]">(And How to Fix Them)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Migrations Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Hero CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Avoid These Mistakes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#mistake-1"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Mistakes
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Introductory Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            Migrating to GoHighLevel goes wrong in predictable ways. The same mistakes appear across platform types, 
            business sizes, and industries. Nearly all of them come from planning gaps rather than platform limitations. 
            <strong className="text-white"> GHL Scale Up</strong> has completed 200+ migrations from HubSpot, ClickFunnels, 
            ActiveCampaign, Kajabi, Zoho, and Salesforce. This guide documents the 8 mistakes we see most often.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            {/* Project Help Card - At top of sidebar */}
            <div className="mb-6">
              <ProjectHelpCard />
            </div>

            {/* Table of Contents */}
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
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">GoHighLevel Migration & Setup Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems migrated globally from HubSpot, ClickFunnels, ActiveCampaign, 
                Kajabi, Zoho, and Salesforce. All mistakes in this guide are documented from real migration projects.
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

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer — Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Most GHL migration problems are avoidable. The 8 most common mistakes all have clear fixes.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                The 8 mistakes are: importing dirty data, copying automations instead of rebuilding them, cancelling 
                the old platform too early, skipping email domain warmup, missing the parallel running phase, migrating 
                all automations instead of auditing first, going live without end-to-end testing, and trying to do everything at once. 
                Every one of these has a clear fix. None requires a platform change. They require a better process.
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get a Free Migration Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Table of Contents - Mobile Only */}
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

            {/* Mobile Project Help Card - visible on mobile only */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* CTA 1 - After TOC */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Planning a migration and want to avoid these mistakes?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Let our team audit your current setup and give you a clear migration plan with zero mistakes.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mistakes Section */}
            {mistakes.map((mistake, index) => (
              <div key={mistake.id} id={mistake.id} className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-4">
                  {mistake.title}
                </h2>
                <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-[#1A2236] mb-2">What goes wrong:</h3>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{mistake.what}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 mb-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-[#1A2236] mb-2">Real example:</h3>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{mistake.example}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-[#1A2236] mb-2">The fix:</h3>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{mistake.fix}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA 2 - After Mistake 8 */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🔍 Already started your migration and hit a problem?</p>
              <p className="text-sm text-white/80 mb-4">We can step in and get your migration back on track. Our team has fixed every one of these mistakes before.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Search className="w-4 h-4" />
                Get Migration Rescue
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Internal Links Section */}
            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-6">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                → For a guide on building GHL workflows correctly: 
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                → For parallel running and cutover timing: 
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline ml-1">HubSpot to GoHighLevel Migration Guide →</Link>
              </p>
            </div>

            {/* Audit Section */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE AUDIT THAT PREVENTS ALL 8 MISTAKES</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Every GHL Scale Up migration starts with a full audit: contact data quality, active automation inventory, 
                integration dependencies, and a phase-by-phase migration plan. The audit is what separates a 2-week clean 
                migration from a 3-month cleanup project.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free migration assessment at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                → Full <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL migration service at ghlscaleup.com/services/migration →</Link>
              </p>
            </div>

            {/* CTA 3 - After Audit Section */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">📊 Want to see exactly what mistakes you might be making?</p>
              <p className="text-sm text-white/80 mb-4">Get a free migration audit that identifies your specific risks and gives you a clear path forward.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <FileCheck className="w-4 h-4" />
                Get Your Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 9: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              9. Frequently Asked Questions
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

            {/* CTA 4 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about your GHL migration?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our migration specialists directly. We've completed 200+ migrations and fixed every mistake in this guide.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline: How Long Does It Actually Take? →</Link>
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from ClickFunnels to GoHighLevel →</Link>
                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Planning a GHL migration and want to avoid these mistakes?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up has done this 200+ times. We know what goes wrong. Book a free migration assessment. 
                  We review your current setup, identify the risks specific to your account, and give you a clear plan.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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