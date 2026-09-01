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
  Cloud,
  Database,
  FileDown,
  Upload,
  RefreshCw,
  Clock,
  Mail,
  Tag,
  GitMerge,
  Video,
  BookOpen as BookOpenIcon,
  GraduationCap,
  ArrowUpRight,
  HelpCircle,
  Timer,
  Trash2,
  Download,
  Target,
  HeartHandshake,
  Search,
  Trophy,
  Facebook,
  Lightbulb,
  UserCheck,
  UserX,
  Compass,
  Layers,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  PieChart,
  Workflow,
  Link2,
  Webhook,
  RefreshCw as RefreshCwIcon,
  ListChecks,
  ClipboardList,
  Printer,
  Ticket,
  TrendingDown,
  Info,
  Headphones,
  FileText,
  XCircle,
  Boxes,
  Combine,
  CalendarDays,
  BarChart3
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function WhatHappensGHLSubAccountAgencyClosesClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'how-depends',
        'step-by-step',
        'get-data-back',
        'your-rights',
        'options-right-now',
        'act-now',
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

      // Show floating Project Help card after scrolling past hero section
      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
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
      q: "What happens to my GHL sub-account if my agency cancels their subscription?",
      a: "When an agency cancels their GoHighLevel subscription, all sub-accounts under that agency immediately lose access to contacts, conversations, calendars, automations, and funnels. Phone numbers are deleted 14 days after cancellation. The data is not permanently deleted for 90 days, but you cannot access it during that period unless the agency reactivates their account. After 90 days, all data is permanently and irreversibly deleted. You cannot initiate a transfer yourself this requires the agency's cooperation or GHL support intervention."
    },
    {
      q: "Can I transfer my GHL sub-account to another agency without my current agency's permission?",
      a: "No. GoHighLevel's transfer and eject processes must be initiated by the agency that owns the account. As a sub-account user, you do not have the ability to initiate a transfer yourself. If your agency is unresponsive, your best option is to contact GHL support at help.gohighlevel.com with documentation showing you are the business owner inside the sub-account. GHL support may be able to assist, though there is no guarantee. This is a widely documented limitation in GHL's community."
    },
    {
      q: "How long do I have to recover my GHL data after an agency closes?",
      a: "You have 90 days from the date the agency cancels their subscription before your data is permanently deleted. However, you cannot access the data during those 90 days unless the agency reactivates their account. The 90-day window is a recovery window for the agency, not a grace period for you to export your data. Phone numbers are deleted sooner 14 days after cancellation. If you have not already exported your contacts as a CSV before the cancellation, that export is no longer available."
    },
    {
      q: "Can I remove my agency's access to my GHL sub-account data?",
      a: "No. By default, agency account owners have full visibility of all data inside every sub-account they manage. There is no setting available inside a sub-account that blocks or restricts agency-level access. The only way to fully remove an agency's access to your data is to move your data out of their account either through an eject to your own agency account, a transfer to a different agency, or by rebuilding in a completely new GHL account. This is a frequently requested feature in GHL's Ideas forum but is not currently available."
    },
    {
      q: "My agency has closed and I cannot log into my GHL sub-account. What should I do?",
      a: "Contact GHL support immediately at help.gohighlevel.com. Open a support ticket explaining that your agency has cancelled their subscription, you are a sub-account owner, and you need emergency assistance accessing your business data. Provide your sub-account name, your business name, any contracts or invoices with the agency, and screenshots of your access before it was lost. GHL does not publicly guarantee recovery in these cases, but a documented support ticket is your best available path. If the agency has been cancelled for more than 90 days, the data is permanently deleted and recovery is not possible."
    },
    {
      q: "What is the difference between a GHL sub-account and my own GHL agency account?",
      a: "A GHL sub-account is a workspace that lives inside an agency's master account. The agency owns the subscription, controls billing, and has full visibility of everything inside your sub-account. You are a user, not an owner. A GHL agency account is one you own directly you pay the $97 or $297 per month subscription, you control who has access, and no one above you in the hierarchy can see or remove your data. Moving from a sub-account to your own agency account is the way to gain full ownership and independence."
    },
    {
      q: "If I start my own GHL account, how much does it cost?",
      a: "A GoHighLevel agency account starts at $97 per month for the Starter plan, which includes up to 3 sub-accounts and all core features for managing your own business. The Unlimited plan at $297 per month gives you unlimited sub-accounts, white-label branding, and Snapshot deployment suitable if you plan to manage your own clients. If you are moving from a sub-account just to manage your own business, the $97 Starter plan is sufficient."
    },
    {
      q: "Can GHL Scale Up help me rebuild if I have lost my sub-account data?",
      a: "Yes. GHL Scale Up helps businesses that have lost sub-account access get set up on their own independent GHL account quickly. If you were able to export your contacts as a CSV before losing access, we can import those into a new account and rebuild your pipelines, workflows, and automations from your documentation. If you lost everything, we can help you rebuild from scratch using your memory of how the system worked. Most fresh builds are live in 5 to 7 business days. Book a free call at ghlscaleup.com/contact-us."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'how-depends', title: '1. How Does a GHL Sub-Account Depend on the Agency Account?' },
    { id: 'step-by-step', title: '2. What Happens Step by Step When an Agency Cancels Their GHL Subscription?' },
    { id: 'get-data-back', title: '3. Can You Get Your Data Back If the Agency Closes Without Warning?' },
    { id: 'your-rights', title: '4. What Rights Do You Have as a GHL Sub-Account Owner?' },
    { id: 'options-right-now', title: '5. What Are Your Options Right Now If Your Agency Is Closing?' },
    { id: 'act-now', title: '6. What Should You Do Immediately If You Think Your Agency Might Close?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const timelineData = [
    { when: 'Day 0: Agency cancels subscription', what: 'All sub-accounts immediately lose access to contacts, conversations, calendars, automations, and funnels. You cannot log in and see your data.' },
    { when: 'Day 0 to Day 14', what: 'Phone numbers remain assigned to the account but are non-functional. You are still charged for them during this period even though they do not work.' },
    { when: 'Day 14', what: 'All phone numbers and A2P 10DLC campaigns are permanently deleted and cannot be retrieved.' },
    { when: 'Day 0 to Day 90', what: 'The data still exists on GHL servers but is inaccessible. The agency can reactivate their account within 90 days to restore access.' },
    { when: 'Day 90', what: 'All data is permanently and irreversibly deleted. Contacts, workflows, funnels, automations, conversations everything is gone. There is no recovery after this point.' },
  ];

  const scenariosData = [
    { scenario: 'The agency is closing but still responsive', description: 'Contact them immediately and request an eject or transfer. Both require the agency to initiate the process. If they cooperate, your data moves with you intact.' },
    { scenario: 'The agency is unresponsive but their account is still active', description: 'Contact GHL support directly. Export everything you can right now: contacts via CSV, screenshot workflow logic, document pipeline stages, download all assets.' },
    { scenario: 'The agency has already cancelled and is unreachable', description: 'This is the hardest scenario. Contact GHL support immediately with documentation. Provide sub-account name, business name, any contracts or invoices, and screenshots of your access.' },
  ];

  const rightsList = [
    { right: 'You do not own your sub-account', description: 'The agency owns it. You are a user inside an account they control and pay for.' },
    { right: 'You cannot remove the agency\'s access', description: 'The agency can see all your data by default. There is no setting that blocks agency-level visibility.' },
    { right: 'You cannot initiate a transfer yourself', description: 'Only the agency can initiate a sub-account transfer or eject. You can request it, but they must execute it.' },
    { right: 'You do own your data in principle', description: 'Whether you can physically access and remove it depends entirely on the agency\'s cooperation.' },
    { right: 'You can export contacts if you have admin access', description: 'Export contacts as a CSV at any time (Contacts → Export All). This is your self-service data protection action.' },
  ];

  const optionsData = [
    { option: 'Request an eject to a new agency account', what: 'Converts your sub-account into your own independent GHL account at $97/mo', requiresAgency: 'Yes', dataPreserved: 'Most data preserved. Auth connections reset.' },
    { option: 'Request a transfer to an existing agency account', what: 'Moves your sub-account to another agency you choose', requiresAgency: 'Yes both agencies must agree', dataPreserved: 'Most data preserved. Auth connections reset.' },
    { option: 'Contact GHL support for emergency assistance', what: 'GHL support may facilitate a transfer if agency is unresponsive', requiresAgency: 'Agency unresponsive. GHL support involved', dataPreserved: 'Possible but not guaranteed' },
    { option: 'Start a fresh GHL account and rebuild', what: 'Sign up for your own account at $97/mo and rebuild from exports', requiresAgency: 'No fully independent', dataPreserved: 'Contact CSV only. Everything else must be rebuilt.' },
  ];

  const actionSteps = [
    { step: 'Export all contacts immediately', description: 'Go to Contacts → Export All inside your sub-account. Download the CSV and save it somewhere you own (Google Drive, Dropbox, your computer). This is the most important step.' },
    { step: 'Document your workflows', description: 'Open every active workflow and either screenshot it or write down the trigger, each step, and any conditions. You cannot export workflow logic only document it manually.' },
    { step: 'Screenshot your pipeline stages', description: 'Open your pipeline and note every stage name, the automations connected to each stage, and any custom fields used.' },
    { step: 'Download assets', description: 'Any images, PDFs, videos, or files stored in your sub-account should be downloaded now. These do not transfer reliably in all scenarios.' },
    { step: 'Note your phone numbers', description: 'Record all phone numbers in your sub-account. If they do not transfer, you will need to re-purchase them.' },
    { step: 'Request an eject in writing', description: 'Send the agency an email or WhatsApp message explicitly requesting that they eject your sub-account. Having the request in writing helps if you later need to escalate.' },
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your sub-account situation.</p>
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
          <span className="text-[#1A2236] font-medium">What Happens to GHL Sub-Account When Agency Closes 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Sub-Account</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Urgent</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Data Protection</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            What Happens to Your GHL Sub-Account<br />
            <span className="text-[#F8D000]">If Your Agency Closes? (2026)</span>
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
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            If your GoHighLevel agency has gone silent, announced they are closing, or you have heard rumours 
            they are shutting down, this is not a situation to wait on. Your entire business contacts, automations, 
            funnels, workflows, and pipelines lives inside their agency account. 
            <strong className="text-white"> GHL Scale Up</strong> has dealt with this scenario multiple times. 
            This guide covers exactly what happens to your sub-account, in what timeframe, and what you need to 
            do before it is too late.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Sub-Account Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#act-now"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Urgent Actions
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
            {/* Project Help Card */}
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

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
                5+ years GHL experience · 200+ systems built globally. We have helped multiple businesses recover from agency closures 
                and get set up on their own independent GHL accounts. All information verified against GoHighLevel's official 
                documentation as of May 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
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

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Agency Going Silent?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help you set up your own GHL account fast. 5 to 7 business days.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help Now
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer — The Short Version</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                When a GHL agency cancels their subscription, all sub-accounts under that agency immediately lose access.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Contacts, conversations, calendars, automations, and funnels become inaccessible. Phone numbers are deleted 
                <strong className="text-[#DC3545]"> 14 days</strong> after cancellation. The data is not permanently gone for 
                <strong className="text-[#0E9BF0]"> 90 days</strong> but you cannot access it during that period unless the account 
                is reactivated. After 90 days, everything is permanently deleted. You cannot initiate a transfer yourself. 
                The agency must do it. If the agency is unresponsive, your options narrow significantly. <strong className="text-[#1A2236]">Act now, not later.</strong>
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Sub-Account Help
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

            {/* Section 1: How Depends */}
            <h2 id="how-depends" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. How Does a GHL Sub-Account Depend on the Agency Account?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is structured as a two-tier system. The agency account is the master level. It owns the subscription, 
              controls billing, and has full visibility over everything inside every sub-account it manages. Your sub-account 
              lives inside that master account. You are a tenant in the agency's building.
            </p>
            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">CRITICAL RISK</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                As a sub-account user, you do not have your own GHL subscription. You access GHL because the agency pays for it. 
                If the agency stops paying or cancels their account, your access goes with it. This is one of the most significant 
                structural risks of operating inside a sub-account.
              </p>
            </div>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For context on how the agency and sub-account structure works: 
              <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
            </p>

            {/* CTA Button 3: After Section 1 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Worried about your agency closing?</span> Let our team help you secure your data.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Sub-Account Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 2: Step by Step Timeline */}
            <h2 id="step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Happens Step by Step When an Agency Cancels Their GHL Subscription?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is confirmed directly from GoHighLevel's official cancellation documentation. The timeline is specific and does not change.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">When</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What happens to your sub-account</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.when}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE MOST IMPORTANT FACT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                You have 90 days from the agency's cancellation date before your data is permanently deleted. But you cannot access 
                it during those 90 days without the agency reactivating their account. The only way to get your data into your own 
                account before the 90 days expires is if the agency cooperates and initiates a transfer or eject, or if GHL support 
                intervenes. <strong className="text-[#1A2236]">Every day you wait narrows your options.</strong>
              </p>
            </div>

            {/* Section 3: Get Data Back */}
            <h2 id="get-data-back" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Can You Get Your Data Back If the Agency Closes Without Warning?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This depends on how cooperative the agency is and how quickly you act.
            </p>

            <div className="space-y-4 mb-6">
              {scenariosData.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.scenario}</h3>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">IF YOU ARE IN THIS SITUATION RIGHT NOW</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Contact GHL support immediately at help.gohighlevel.com. Open a ticket explaining that your agency has cancelled 
                their account, you are a sub-account owner with active business data, and you need emergency assistance. Provide 
                every piece of documentation you have: your business name, sub-account name, any invoices or contracts with the 
                agency, and screenshots of your access before it was lost.
              </p>
            </div>

            {/* CTA Button 4: After Section 3 */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Already lost access to your sub-account?</p>
              <p className="text-sm text-white/80 mb-4">Let us help you recover or rebuild your business data.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get Recovery Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 4: Your Rights */}
            <h2 id="your-rights" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Rights Do You Have as a GHL Sub-Account Owner?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is a frequently misunderstood area and the GHL community has raised it repeatedly as a platform problem that needs fixing.
            </p>

            <div className="space-y-3 mb-6">
              {rightsList.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#1A2236] mb-1">{item.right}</h3>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 5: Options Right Now */}
            <h2 id="options-right-now" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Are Your Options Right Now If Your Agency Is Closing?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here are the four options available to you, in order of data preservation.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Option</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it does</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requires agency cooperation?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Data preserved?</th>
                  </tr>
                </thead>
                <tbody>
                  {optionsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.option}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.what}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.requiresAgency}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.dataPreserved}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full step-by-step guide on options 1 and 2: 
              <Link href="/blog/ghl-sub-account-to-own-agency-account" className="text-[#0E9BF0] hover:underline ml-1">How to Move from a GHL Sub-Account to Your Own Agency Account →</Link>
            </p>

            {/* Section 6: Act Now */}
            <h2 id="act-now" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Should You Do Immediately If You Think Your Agency Might Close?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Do not wait for confirmation.</strong> If there are any signs your agency is in trouble 
              (missed responses, billing disputes, social media accounts going quiet, team members leaving), treat it as a warning and 
              act now. These steps take less than an hour and could save years of business data.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-3">
                <Download className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Do this right now if you still have sub-account access</span>
              </div>
              <ol className="space-y-3 text-sm text-[#1A2236] list-decimal list-inside">
                {actionSteps.map((item, idx) => (
                  <li key={idx} className="text-sm"><strong className="text-[#1A2236]">{item.step}:</strong> {item.description}</li>
                ))}
              </ol>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">IF YOU NEED HELP SETTING UP A NEW ACCOUNT FAST</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up helps businesses that have lost or are losing their sub-account access get up and running on their own 
                GHL account quickly. We set up your new account from scratch including CRM pipelines, 
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel workflow automation</Link>, 
                email domain configuration, and team access. Most setups are live in 5 to 7 business days.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free 30-minute call at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                See our <Link href="/services/agency-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel agency setup service at ghlscaleup.com/services/agency-setup →</Link>
              </p>
            </div>

            {/* CTA Button 5: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚠️ Don't lose your business data. Act now.</p>
              <p className="text-sm text-white/80 mb-4">Get a free, no-obligation sub-account assessment from experts who've helped businesses recover from agency closures.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Shield className="w-4 h-4" />
                Get a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions
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

            {/* CTA Button 6: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Your Sub-Account?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our GHL experts directly. We've helped businesses recover from agency closures.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/ghl-sub-account-to-own-agency-account" className="text-sm text-[#0E9BF0] hover:underline">How to Move from a GHL Sub-Account to Your Own Agency Account →</Link>
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/agency-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Agency Setup Service →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Worried about your GHL sub-account? Do not wait.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Get your own GHL account set up before it is too late. GHL Scale Up sets up new GoHighLevel agency accounts 
                  from scratch. CRM, automation, email domain, and full configuration in 5 to 7 business days. No dependence 
                  on any agency. Your data. Your account. Your control.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Call
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