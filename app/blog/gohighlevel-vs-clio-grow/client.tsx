'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Zap,
  AlertTriangle,
  Clock,
  Rocket,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelVsClioGrowClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'short-answer',
        'at-a-glance',
        'what-is-gohighlevel',
        'what-is-clio-grow',
        'client-intake-lead-management',
        'marketing-automation-lead-followup',
        'ai-appointment-booking-client-communication',
        'legal-specific-features-practice-management',
        'pricing',
        'which-platform-better-law-firms',
        'scenario-1-solo-practitioner',
        'scenario-2-growing-firm',
        'scenario-3-established-firm',
        'can-use-together',
        'pros-cons-gohighlevel',
        'pros-cons-clio-grow',
        'legal-technology-privacy-compliance',
        'so-is-gohighlevel-better',
        'faq',
        'conclusion'
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
      q: "Is GoHighLevel better than Clio Grow for law firms?",
      a: "Neither is better in general. GoHighLevel suits marketing and follow-up; Clio Grow suits legal-specific intake, particularly with Clio Manage."
    },
    {
      q: "What is the main difference between them?",
      a: "GoHighLevel is a general marketing CRM you configure. Clio Grow is a legal intake CRM within Clio's legal software."
    },
    {
      q: "Can GoHighLevel replace Clio Grow?",
      a: "For lead capture, follow-up and booking, often yes with configuration. It does not provide a conflict-check function we found or Clio's legal intake-to-matter handoff."
    },
    {
      q: "Can GoHighLevel replace Clio Manage?",
      a: "No. We found no matter management, trust accounting, billing or court-deadline functions in it."
    },
    {
      q: "Which is better for law firm client intake?",
      a: "Clio Grow is built for legal intake. GoHighLevel can collect intake information but requires you to design the process."
    },
    {
      q: "Which is better for marketing automation?",
      a: "GoHighLevel is more clearly documented for multi-channel automation and landing pages. Clio Grow's automation is documented mainly for intake steps, emails and reminders."
    },
    {
      q: "Does Clio Grow integrate with Clio Manage?",
      a: "Yes. Clio documents two-way contact sync and matter sync after a client is converted. Setup is under Settings > Contacts and calendar sync in Clio Manage."
    },
    {
      q: "Can GoHighLevel integrate with Clio?",
      a: "A HighLevel help article and a Clio App Directory listing exist, but they are dated, do not name Clio Grow, and give little detail. Zapier and similar tools offer other connections."
    },
    {
      q: "Which platform is cheaper for a small law firm?",
      a: "It cannot be answered fairly. HighLevel starts at $97 per month plus usage; Clio Manage starts at $49 per user, and Grow's price is not published."
    },
    {
      q: "Can a law firm use GoHighLevel and Clio together?",
      a: "Yes, with limits. Decide the authoritative record, test the connection, and plan for duplicates and failures."
    },
    {
      q: "Does GoHighLevel provide legal conflict checking?",
      a: "We found no such function. Forms can collect conflict-related information, but the check itself would happen in legal software."
    },
    {
      q: "Which is better for AI-assisted lead handling?",
      a: "Both market AI for after-hours inquiries. GoHighLevel documents Conversation AI and Voice AI as usage-billed features that need setup; Clio's Grow AI is described without setup detail. Test either before relying on it."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'short-answer', title: 'The Short Answer' },
    { id: 'at-a-glance', title: 'GoHighLevel vs. Clio Grow at a Glance' },
    { id: 'what-is-gohighlevel', title: 'What Is GoHighLevel?' },
    { id: 'what-is-clio-grow', title: 'What Is Clio Grow?' },
    { id: 'client-intake-lead-management', title: 'Client Intake and Lead Management' },
    { id: 'marketing-automation-lead-followup', title: 'Marketing Automation and Lead Follow-Up' },
    { id: 'ai-appointment-booking-client-communication', title: 'AI, Appointment Booking and Client Communication' },
    { id: 'legal-specific-features-practice-management', title: 'Legal-Specific Features and Practice Management' },
    { id: 'pricing', title: 'GoHighLevel vs. Clio Grow Pricing' },
    { id: 'which-platform-better-law-firms', title: 'Which Platform Is Better for Different Types of Law Firms?' },
    { id: 'scenario-1-solo-practitioner', title: 'Scenario 1: Solo Practitioner' },
    { id: 'scenario-2-growing-firm', title: 'Scenario 2: Growing Firm' },
    { id: 'scenario-3-established-firm', title: 'Scenario 3: Established Firm' },
    { id: 'can-use-together', title: 'Can You Use GoHighLevel and Clio Together?' },
    { id: 'pros-cons-gohighlevel', title: 'Pros and Cons of GoHighLevel' },
    { id: 'pros-cons-clio-grow', title: 'Pros and Cons of Clio Grow' },
    { id: 'legal-technology-privacy-compliance', title: 'Legal Technology, Privacy and Compliance' },
    { id: 'so-is-gohighlevel-better', title: 'So, Is GoHighLevel Better Than Clio Grow for Law Firms?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  const atAGlanceData = [
    { category: 'Primary purpose', ghl: 'General marketing CRM, automation and communications', clio: 'Legal client intake and CRM, part of Clio\'s ecosystem' },
    { category: 'Ideal user', ghl: 'Firms with a lead-generation focus and configuration resources', clio: 'Firms wanting legal-specific intake, especially Clio Manage users' },
    { category: 'Lead capture', ghl: 'Native forms, surveys, funnels, websites; configuration', clio: 'Native intake forms shared by website link, email or text' },
    { category: 'Client intake', ghl: 'Configuration: pipelines, custom fields, forms', clio: 'Native: intake pipeline, forms, automation templates' },
    { category: 'Conflict checks', ghl: 'Not found. Collecting conflict data is possible; running the check is not described', clio: 'Native claim: searches across Clio data, with a summary report. Method not described' },
    { category: 'CRM and pipeline', ghl: 'Native pipelines, tags, custom fields, assignment', clio: 'Native: intake stages, tags, tasks, reminders' },
    { category: 'Marketing automation', ghl: 'Native multi-step workflows with conditions; configuration', clio: 'Intake-step automations, multi-step email campaigns, review requests. Depth of branching not documented' },
    { category: 'Email and SMS', ghl: 'Native, usage-billed. A2P 10DLC registration needed for US SMS', clio: 'Email templates and scheduled email; automated text reminders. Broader SMS campaigns not documented' },
    { category: 'Missed-call handling', ghl: 'Configuration: missed-call text back', clio: 'Not found' },
    { category: 'Appointment booking', ghl: 'Native calendars, reminders, confirmations', clio: 'Native scheduling with automated text reminders and optional consultation payments' },
    { category: 'AI-assisted handling', ghl: 'Conversation AI and Voice AI, usage-billed; configuration', clio: 'Grow AI (marketing claim): after-hours calls and emails, screening, booking. Setup not described' },
    { category: 'Websites and landing pages', ghl: 'Native websites and funnels', clio: 'Website builder and email marketing are marketing add-ons; plan not stated' },
    { category: 'Review management', ghl: 'Reviews AI and review requests; usage-billed', clio: 'Review requests inside automation; reputation management add-on listed' },
    { category: 'Reporting', ghl: 'Native reporting and attribution; depends on tracking setup', clio: 'Intake dashboard: revenue by practice area, lead source filter, referral sources' },
    { category: 'Legal documents', ghl: 'Not designed for this purpose', clio: 'Engagement letters from templates autofilled from intake data; e-signature' },
    { category: 'Practice management', ghl: 'Not designed for this purpose', clio: 'Other Clio product: Clio Manage' },
    { category: 'Integrations', ghl: 'API and webhooks, Zapier, a Clio integration with limited documentation', clio: 'Syncs with Clio Manage; Zapier listing is minimal for Grow' },
    { category: 'Setup effort', ghl: 'Higher. You build and maintain the system', clio: 'Lower for legal intake; legal-specific defaults' },
    { category: 'Pricing model', ghl: 'Flat monthly platform fee plus usage', clio: 'Per user; Grow price not published' },
  ];

  const legalFeaturesData = [
    { function: 'Lead intake forms', ghl: 'Native', clioGrow: 'Native', clioManage: 'Not the intake product' },
    { function: 'Conflict checks', ghl: 'Not found', clioGrow: 'Native claim', clioManage: 'Conflict data lives here' },
    { function: 'Engagement letters and e-signature', ghl: 'Document features exist; not legal templates', clioGrow: 'Native, autofilled from intake', clioManage: 'Document management' },
    { function: 'Matters, time, billing, trust accounting', ghl: 'Not designed for this', clioGrow: 'Not designed for this', clioManage: 'Native' },
    { function: 'Court deadlines', ghl: 'Not designed for this', clioGrow: 'Not designed for this', clioManage: 'Court rules, per Clio pricing page, with limits per plan' },
  ];

  const pricingData = [
    { aspect: 'Published subscription pricing', ghl: 'Starter $97/month (3 sub-accounts); Unlimited $297/month; Agency Pro $497/month; Enterprise custom. Annual: $970, $2,970, $4,970', clio: 'Clio Manage EasyStart: starting at $49 per user. Other Manage plans (Essentials, Advanced) are shown without a readable price on the page we read. Clio Expand, which includes Grow: price on request. Clio Grow standalone: sales quote' },
    { aspect: 'Billing model', ghl: 'Account-based; unlimited users and contacts on all plans. Month to month', clio: 'Per user (licenses). Adding a Grow license also adds a Manage license where both are used' },
    { aspect: 'Included', ghl: 'Core CRM, workflows, calendars, forms, funnels; Conversation AI, Voice AI and Reviews AI are available with usage charges', clio: 'EasyStart: time tracking, billing, document management, e-signatures. Automated workflows begin at Advanced. Grow comes with Expand or as a sales-quoted product' },
    { aspect: 'Usage and extras', ghl: 'Email $0.675 per 1,000; SMS and calls at carrier-based rates; premium workflow actions $0.01 per execution; AI Employee add-on $50 or $97 per sub-account per month; HIPAA add-on $297 per month', clio: 'Payments: ACH 1%, cards 2.95% (3.75% AMEX). Add-ons such as Clio Draft, Manage AI and Accounting are quoted' },
    { aspect: 'Trial', ghl: '14 days; billing starts automatically', clio: '7 days, no credit card' },
  ];

  const costScenariosData = [
    { scenario: '1. Solo practitioner, basic intake', assumptions: '1 user; low volume; Clio Manage plus Grow, or HighLevel Starter', knownCosts: 'HighLevel: $97/month plus usage. Clio Manage EasyStart: from $49 for 1 user', notPublished: 'Clio Grow price; HighLevel usage; setup time' },
    { scenario: '2. Small firm investing in marketing automation', assumptions: '5 users; paid ads; landing pages; HighLevel as marketing layer', knownCosts: 'HighLevel: $97 to $297/month plus usage. A separate legal system is still needed', notPublished: 'Legal system cost; usage; implementation; integration costs' },
    { scenario: '3. Growing firm needing marketing and practice management', assumptions: '10 users; HighLevel plus Clio Manage; or Clio Expand', knownCosts: 'HighLevel $297/month plus usage. Clio per-user fees multiply by headcount', notPublished: 'Expand price; Grow price; any sync or Zapier fees; staff training' },
  ];

  const prosConsGHLData = [
    { type: 'Strengths', items: ['Flexible multi-step automation and conditional logic', 'Native funnels, websites, forms and calendars', 'Flat platform fee with unlimited users', 'Missed-call text back, reviews, Conversation AI, Voice AI', 'API, webhooks and Zapier'] },
    { type: 'Limitations', items: ['No matter management, trust accounting, billing or court deadlines found', 'No conflict-check function found', 'You build and maintain everything; setup effort is real', 'Messaging, calls and AI are usage-billed; US SMS needs A2P registration', 'Clio connection documented only thinly and dating from 2024'] },
  ];

  const prosConsClioData = [
    { type: 'Strengths', items: ['Legal-specific intake, forms and engagement-letter generation', 'Conflict search described across Clio data', 'Native two-way sync with Clio Manage; matters sync after conversion', 'Intake reporting by referral source and practice area', 'Less configuration than a general-purpose CRM'] },
    { type: 'Limitations', items: ['Marketing depth (complex funnels, branching, attribution) not documented', 'Method and accuracy of conflict checks not described', 'Price not published; availability described three ways across Clio\'s pages', 'No mobile app (mobile web only)', 'Grow AI described in marketing terms without setup detail'] },
  ];

  const directionData = [
    { priority: 'Legal-specific client intake', direction: 'Evaluate Clio Grow first', why: 'Built around law firm intake' },
    { priority: 'Custom marketing funnels and lead capture', direction: 'Evaluate GoHighLevel first', why: 'General-purpose marketing tools' },
    { priority: 'Advanced configurable follow-up', direction: 'Compare the workflows you need on both', why: 'Depends on build and plan' },
    { priority: 'Conflict checking', direction: 'Evaluate Clio\'s ecosystem', why: 'HighLevel has no conflict-check function we found; verify Clio\'s method' },
    { priority: 'Existing Clio Manage use', direction: 'Assess Grow and its handoff first', why: 'Fewer systems, native sync' },
    { priority: 'Many channels and heavy automation', direction: 'Evaluate GoHighLevel', why: 'Weigh against setup effort' },
    { priority: 'Marketing plus dedicated legal operations', direction: 'Consider a combined setup', why: 'Only if records and ownership stay clear' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help choosing between GoHighLevel and Clio Grow.</p>
      <Button
        onClick={handleOpenBooking}
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Button>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel vs Clio Grow for Law Firms: Which Is Better?</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Law Firms</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Clio Grow</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel vs. Clio Grow for Law Firms:<br />
            <span className="text-[#F8D000]">Which Is Better for Intake, CRM & Automation?</span>
          </h1>

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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Facts checked against Clio and HighLevel documentation, 21 October 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            A law firm comparing GoHighLevel and Clio Grow is often comparing two different kinds of software. GoHighLevel is a general-purpose CRM, marketing automation and communications platform that can be configured for a firm. Clio Grow is Clio's client intake and CRM product, built for legal workflows and designed to hand accepted clients to Clio Manage, Clio's practice management software.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Short answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Choose GoHighLevel if your main problem is generating and following up on leads, and you have someone to build and maintain the system. Choose Clio Grow if your main need is a legal-specific intake process, including conflict checks, and you use or plan to use Clio Manage.</strong> Use both only if you can keep one authoritative record and carry the extra cost, because the documented link between them is limited. Neither product replaces legal matter management: GoHighLevel has no matter, trust accounting or court-deadline tools, and Clio Grow is not Clio Manage.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            <em>Disclosure: GHL Scale Up implements GoHighLevel, so we benefit if you choose it. This article relies on each vendor's own documentation, says where GoHighLevel falls short, and does not treat Clio Manage features as Clio Grow features.</em>
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Platform Advice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#at-a-glance"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Comparison Table
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

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
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built globally. All product details verified against Clio and HighLevel documentation as of October 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
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

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Help Choosing?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help law firms evaluate platforms and set up the right system.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

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

            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section: At a Glance */}
            <h2 id="at-a-glance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              GoHighLevel vs. Clio Grow at a Glance
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Labels: <strong className="text-[#1A2236]">Native</strong> (built in), <strong className="text-[#1A2236]">Configuration</strong> (supported but you build it), <strong className="text-[#1A2236]">Other Clio product</strong> (belongs to Clio Manage or another product), <strong className="text-[#1A2236]">Not found</strong> (we found no documentation either way) and <strong className="text-[#1A2236]">Marketing claim</strong> (stated by the vendor, with no detail on how it works).
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Clio Grow</th>
                  </tr>
                </thead>
                <tbody>
                  {atAGlanceData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.category}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.clio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-vs-clio-grow.png"
                  alt="GoHighLevel vs Clio Grow for Law Firms: Side-by-side comparison of marketing automation and legal intake"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel vs Clio Grow for Law Firms: Side-by-side comparison of marketing automation and legal intake</span>
              </div>
            </div>

            {/* Section: What Is GoHighLevel */}
            <h2 id="what-is-gohighlevel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel (HighLevel) is a CRM and marketing automation platform used by agencies and businesses. It bundles contacts and pipelines, forms and websites, email and SMS, calendars, workflows, and AI tools such as Conversation AI, Voice AI and Reviews AI. It was not built for law firms. Any legal workflow in it is something someone configures.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Ideal for:</strong> firms that run paid campaigns or receive inquiries from several channels, want fast automated follow-up, and have staff or an implementer who can build and maintain workflows.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Limits:</strong> no native matter management, trust accounting, billing, court deadlines or legal document management that we could find. It does not provide a conflict-check function we could find. The AI features are usage-billed and, per HighLevel's own pricing page, need setup and human oversight.
            </p>

            {/* Section: What Is Clio Grow */}
            <h2 id="what-is-clio-grow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is Clio Grow?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Clio Grow is Clio's client intake and CRM product. Per Clio, it includes intake forms, an intake pipeline, conflict checks, document generation and e-signature, scheduling with text reminders, automation templates, reporting on referral sources, and Grow AI. Accepted leads move to Clio Manage, which is where matters, time tracking, billing and trust accounting live. Clio Manage is a separate product, and its features should not be credited to Grow.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Availability:</strong> Clio's Grow page says it is 'available to Clio Manage customers or as part of the Clio Expand plan'. Clio's pricing page says Grow is also sold standalone through sales, and Clio's help center says Grow works alongside Manage without stating that Manage is required. Ask Clio which applies to you.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Limits:</strong> no mobile app (mobile web only, per Clio help); several marketing features (email marketing, website builder, reputation management) are described as separate products with plan details not given on the Grow page; and its AI is described in marketing terms without setup detail.
            </p>

            {/* Section: Client Intake and Lead Management */}
            <h2 id="client-intake-lead-management" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs. Clio Grow: Client Intake and Lead Management
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are two jobs here, and each product leans toward one. <strong className="text-[#1A2236]">Acquisition</strong> is getting inquiries, responding quickly, nurturing and booking consultations. <strong className="text-[#1A2236]">Legal intake</strong> is collecting case information, checking conflicts, preparing engagement documents and moving an accepted client into legal workflows.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel does well:</strong> A prospective client submits an inquiry on the firm's website. GoHighLevel records the contact, sends an acknowledgement, notifies the intake team, offers a booking link, and starts a follow-up sequence if the prospect does not book. Pipelines, custom fields and tags organize the lead. All of this is configuration, so quality depends on who builds it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What Clio Grow does well:</strong> Clio Grow starts from legal intake. Forms can be shared on a website, by email or by text and feed an intake pipeline; automation moves a prospect to the next step as tasks complete; engagement letters are generated from templates and autofilled with intake data; and a conflict search runs across Clio data. For a firm that does not want to design these steps, this is less work.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Be careful with 'conflict checks':</strong> Collecting conflict-relevant information is not the same as running a conflict check. A GoHighLevel form can collect names and opposing parties. Whether a conflict exists requires comparing them against the firm's records, which sit in the legal platform. Clio says its search runs across Clio data and that Grow AI flags potential conflicts; it does not describe the method or its accuracy, so firms should confirm what is searched. We found no GoHighLevel feature that runs a conflict check.
            </p>

            {/* Section: Marketing Automation */}
            <h2 id="marketing-automation-lead-followup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs. Clio Grow: Marketing Automation and Lead Follow-Up
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's strength is general-purpose automation: multi-step workflows with conditions, email and SMS, missed-call text back (see <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">our missed-call text back guide</Link>), review requests, landing pages and attribution reporting, all in one account. Its flat platform fee does not charge per attorney, but email, SMS, calls and AI are billed by usage.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Clio Grow is not a bare tracker. Clio describes intake-step automations, unlimited email templates, scheduled email, multi-step email campaigns, automated text reminders and review requests. Where it is less documented is in the areas a heavy marketing team uses: complex branching, custom funnels and multi-channel nurturing. We did not find that documentation, which means 'not found', not 'does not exist'. Marketing add-ons (email marketing, website builder, Google Local Services Ads, reputation management) are listed by Clio as separate features whose plan requirements we could not confirm.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you run campaigns across several channels and need custom landing pages and attribution, GoHighLevel is likely the closer fit. If you mainly need intake steps and reminders, Clio Grow may cover it.
            </p>

            {/* Section: AI, Appointment Booking and Client Communication */}
            <h2 id="ai-appointment-booking-client-communication" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              AI, Appointment Booking and Client Communication
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Area</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Clio Grow</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Written AI conversations</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Conversation AI, usage-billed. Needs knowledge, goals and testing. See our <Link href="/blog/gohighlevel-ai-employee" className="text-[#0E9BF0] hover:underline">AI Employee guide</Link></td>
                    <td className="py-3 px-3 text-[#F8D000]">Grow AI answers emails and screens leads (marketing claim, setup not described)</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Voice</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Voice AI, usage-billed; phone charges apply</td>
                    <td className="py-3 px-3 text-[#F8D000]">Grow AI is described as answering after-hours calls; detail not provided</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Escalation</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Configuration: handover or workflow alert to staff</td>
                    <td className="py-3 px-3 text-[#F8D000]">Grow AI flags potential conflicts for review</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Booking</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Native calendars; see <Link href="/blog/gohighlevel-calendar-booking" className="text-[#0E9BF0] hover:underline">calendar booking</Link></td>
                    <td className="py-3 px-3 text-[#F8D000]">Native scheduling; calendar sync depends on your calendar connection</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Reminders</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Configuration with workflows</td>
                    <td className="py-3 px-3 text-[#F8D000]">Automated text reminders</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Any AI that speaks to prospects about a legal matter needs attorney oversight. See the compliance section below.
            </p>

            {/* Section: Legal-Specific Features */}
            <h2 id="legal-specific-features-practice-management" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Legal-Specific Features and Practice Management
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A pipeline is not a matter. GoHighLevel's opportunities track a lead's stage; they do not store matter notes, deadlines, time entries, trust balances or billing. Clio Manage is the product that does, and it is separate from Clio Grow. A firm choosing GoHighLevel for marketing will still need a legal practice management system, whether Clio Manage or another.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Function</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Clio Grow</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">Clio Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {legalFeaturesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.function}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.clioGrow}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.clioManage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs. Clio Grow Pricing
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Checked 22 October 2026. Prices change, so treat these as a snapshot.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Aspect</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Clio</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.clio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Illustrative cost scenarios</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Exact totals cannot be given because Clio Grow's price is not published. The table shows the known parts and the unknown parts.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Scenario</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Assumptions</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Known Costs</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Not Published or Variable</th>
                  </tr>
                </thead>
                <tbody>
                  {costScenariosData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.scenario}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.assumptions}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.knownCosts}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.notPublished}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A cheaper subscription is not necessarily a lower total cost. Include setup and configuration time, staff training, usage charges (messaging, calls, AI), integration upkeep, and the cost of errors if records fall out of sync. GoHighLevel's lower fixed fee comes with more build effort; Clio's per-user fee grows with headcount but includes legal-specific structure.
            </p>

            {/* Section: Which Platform Better */}
            <h2 id="which-platform-better-law-firms" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Platform Is Better for Different Types of Law Firms?
            </h2>

            <h2 id="scenario-1-solo-practitioner" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Scenario 1: Solo Practitioner With Straightforward Intake
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Primary requirement:</strong> an organized intake process with legal-specific steps.</li>
              <li><strong className="text-[#1A2236]">Most suitable:</strong> Clio Grow, if the firm uses or will use Clio Manage.</li>
              <li><strong className="text-[#1A2236]">Why:</strong> less to build; intake forms, conflict search, engagement letters and handoff to Manage are provided.</li>
              <li><strong className="text-[#1A2236]">What the firm gives up:</strong> flexibility in marketing and landing pages.</li>
              <li><strong className="text-[#1A2236]">Additional needs:</strong> Clio Manage, if not already used.</li>
              <li><strong className="text-[#1A2236]">Question to answer first:</strong> does Clio sell Grow to us without Expand, and at what price?</li>
            </ul>

            <h2 id="scenario-2-growing-firm" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Scenario 2: Growing Firm Investing Heavily in Lead Generation
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Primary requirement:</strong> fast response and follow-up across channels, custom landing pages and conversion visibility.</li>
              <li><strong className="text-[#1A2236]">Most suitable:</strong> GoHighLevel for the marketing and lead layer.</li>
              <li><strong className="text-[#1A2236]">Why:</strong> configurable multi-step automation, missed-call text back, funnels and attribution in one account.</li>
              <li><strong className="text-[#1A2236]">What the firm gives up:</strong> legal-specific intake defaults and a documented conflict-check function.</li>
              <li><strong className="text-[#1A2236]">Additional needs:</strong> a legal practice management system, and a process to move accepted prospects into it.</li>
              <li><strong className="text-[#1A2236]">Question to answer first:</strong> who will build and maintain the workflows, and who owns the lead record after signing?</li>
            </ul>

            <h2 id="scenario-3-established-firm" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Scenario 3: Established Firm Already Using Clio Manage
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Primary requirement:</strong> better marketing automation without disrupting legal workflows.</li>
              <li><strong className="text-[#1A2236]">Options:</strong> (a) add Clio Grow and use its automation; (b) add GoHighLevel and connect it; (c) keep Clio and improve existing follow-up.</li>
              <li><strong className="text-[#1A2236]">Considerations:</strong> duplicate records, which system owns lead data, how reliable the connection is and who maintains it. HighLevel's documented Clio connection syncs clients from Clio to HighLevel when matters are created or updated; it does not describe pushing HighLevel leads into Clio intake.</li>
              <li><strong className="text-[#1A2236]">What the firm gives up (option b):</strong> simplicity and a native Grow to Manage handoff.</li>
              <li><strong className="text-[#1A2236]">Question to answer first:</strong> do we need marketing depth that Grow's automation does not provide?</li>
            </ul>

            {/* Section: Can Use Together */}
            <h2 id="can-use-together" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Use GoHighLevel and Clio Together?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Possibly, but pin down exactly what you mean, because these are different jobs:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Workflow</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Documented Support</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Send a new lead into legal intake</td>
                    <td className="py-3 px-3 text-[#5C6880]">A HighLevel form submission creates a lead in Clio Grow</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Not documented. Zapier's Clio Grow listing has only subscriber triggers and an Unsubscribe Email action</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Synchronize contact details</td>
                    <td className="py-3 px-3 text-[#5C6880]">Keep names, emails, phones aligned</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">HighLevel's Clio article says clients sync from Clio to HighLevel on matter create or update. Direction and field mapping beyond that are not documented</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Transfer an accepted client into matter management</td>
                    <td className="py-3 px-3 text-[#5C6880]">Create a matter in Clio Manage</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Clio Grow to Manage is native. From HighLevel, Zapier lists Clio (Manage) actions such as Create Matter and Create Person Contact</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Keep matter records in sync over time</td>
                    <td className="py-3 px-3 text-[#5C6880]">Ongoing updates</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Not documented for HighLevel. Calendar events sync two-way per HighLevel's Clio article</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What we confirmed and what we did not:</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>HighLevel has a published Clio integration article, last modified 26 November 2024. It does not name Clio Grow or Clio Manage, and states no plan requirements, limitations, field mapping or error handling.</li>
              <li>Clio's App Directory lists HighLevel as the developer, 'Works With: Clio Manage', last modified 9 January 2025. It gives no sync detail.</li>
              <li>Zapier, Make and other platforms list Clio and HighLevel connectors. An integration listing is not proof of a complete two-way sync.</li>
              <li>A competitor page says a Clio app appeared in HighLevel's marketplace in 2026. We could not verify that.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Operating two systems:</strong> decide which is authoritative. A sensible split is HighLevel for marketing records and Clio for legal records, with a defined moment when a lead becomes a client. Plan for duplicate contacts, failed syncs (someone must watch for them), and who fixes them. See <Link href="/blog/connect-zapier-to-gohighlevel" className="text-[#0E9BF0] hover:underline">how Zapier connects to HighLevel</Link> for the generic mechanics; it does not cover legal software.
            </p>

            {/* Section: Pros and Cons GoHighLevel */}
            <h2 id="pros-cons-gohighlevel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Pros and Cons of GoHighLevel
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {prosConsGHLData[0].items.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#DC3545] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Limitations
                </h3>
                <ul className="space-y-2">
                  {prosConsGHLData[1].items.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section: Pros and Cons Clio Grow */}
            <h2 id="pros-cons-clio-grow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Pros and Cons of Clio Grow
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {prosConsClioData[0].items.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#DC3545] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Limitations
                </h3>
                <ul className="space-y-2">
                  {prosConsClioData[1].items.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section: Legal Technology, Privacy and Compliance */}
            <h2 id="legal-technology-privacy-compliance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Legal Technology, Privacy and Compliance
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both products handle information a prospective client may expect to stay confidential. Neither is automatically compliant with every rule that applies to your firm. Consider:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Collect only what you need at each stage.</strong> A web form does not need the full facts of a case.</li>
              <li><strong className="text-[#1A2236]">Limit access</strong> by role in whichever system holds sensitive notes.</li>
              <li><strong className="text-[#1A2236]">Keep marketing leads separate from authoritative legal records.</strong> Do not treat a CRM lead record as the matter file.</li>
              <li><strong className="text-[#1A2236]">Check what an integration transfers,</strong> in which direction, and what happens when it fails.</li>
              <li><strong className="text-[#1A2236]">Do not let AI give legal advice</strong> without attorney oversight. Review what the assistant is allowed to say to prospects.</li>
              <li><strong className="text-[#1A2236]">Check your jurisdiction's rules</strong> on solicitation, advertising, client communications and confidentiality, plus text-message consent (see <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">A2P 10DLC</Link> for US SMS). This is not legal advice; confirm with your bar or ethics counsel.</li>
              <li><strong className="text-[#1A2236]">Ask each vendor</strong> about data handling, retention and, if relevant, business associate agreements. HighLevel lists a HIPAA add-on and Clio lists a HIPAA liability protection add-on; neither makes a firm compliant by itself.</li>
            </ul>

            {/* Section: So Is GoHighLevel Better */}
            <h2 id="so-is-gohighlevel-better" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              So, Is GoHighLevel Better Than Clio Grow for Law Firms?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not in general. It depends on the problem.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">If your main problem is marketing and lead follow-up,</strong> GoHighLevel is likely the stronger fit, provided someone builds it and you also have a legal system.</li>
              <li><strong className="text-[#1A2236]">If your main need is legal-specific intake and your firm uses Clio Manage,</strong> Clio Grow is likely the stronger fit.</li>
              <li><strong className="text-[#1A2236]">If you need both,</strong> a combined setup can work, but the documented link is thin, so budget for integration and maintenance.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What would change the recommendation: Clio quoting a Grow price that makes it unaffordable for you; your intake volume or channel mix outgrowing Grow's automation; a documented, reliable HighLevel to Clio Grow connection appearing; or your firm not using Clio Manage at all.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">If your priority is</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Direction</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {directionData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.priority}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.direction}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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

            {/* Section: Conclusion */}
            <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Conclusion
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start with the problem. If leads are slipping, evaluate GoHighLevel. If intake is disorganized and you use Clio Manage, evaluate Clio Grow. If both are true, price the combined setup, including the work of keeping the records aligned. Before committing, ask Clio for a Grow quote and its requirements, and ask any implementer to show how a lead will move from marketing to your legal system.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you want help assessing the options or configuring GoHighLevel workflows, GHL Scale Up works on CRM setup and automation. You can <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">read about our CRM setup service</Link> or <Link href="/contact" className="text-[#0E9BF0] hover:underline">get in touch</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Official sources: <a href="https://www.clio.com/grow/" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">Clio Grow</a>, <a href="https://www.clio.com/pricing/" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">Clio pricing</a>, <a href="https://www.gohighlevel.com/pricing" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">HighLevel pricing</a>, <a href="https://help.clio.com/hc/en-us/articles/10485194916891" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">Clio Grow setup and sync</a> and <a href="https://help.leadconnectorhq.com/support/solutions/articles/155000004172-clio-integration" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">HighLevel's Clio integration article</a>.
            </p>

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still unsure which platform is right for your law firm?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free platform assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back Guide →</Link>
                <Link href="/blog/gohighlevel-ai-employee" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Employee Guide →</Link>
                <Link href="/blog/gohighlevel-calendar-booking" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Calendar Booking →</Link>
                <Link href="/blog/connect-zapier-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">How Zapier Connects to HighLevel →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/contact" className="text-sm text-[#0E9BF0] hover:underline">Get in Touch →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Choosing for Your Law Firm?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help law firms evaluate platforms and set up the right system for their specific needs.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Platform Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience comparing platforms and setting up GoHighLevel for law firms. All product details verified against Clio and HighLevel documentation as of October 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>
        </div>
      </div>

      {/* Booking Modal - Rendered at root level */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />

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