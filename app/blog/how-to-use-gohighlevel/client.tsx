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
  Star,
  Mail,
  Phone,
  Globe,
  FileText,
  Link2,
  RefreshCw,
  AlertOctagon,
  XCircle,
  HelpCircle,
  Building2,
  UserCheck,
  FileWarning,
  LayoutDashboard,
  Users,
  MessageCircle,
  GitBranch,
  Calendar,
  Settings,
  CreditCard,
  Rocket,
  Target,
  Layers,
  Workflow,
  Clock,
  AlertTriangle,
  TrendingUp,
  Award,
  Sparkles,
  GraduationCap,
  Compass,
  BarChart3,
  Mailbox,
  Activity,
  CalendarDays,
  Boxes,
  Combine,
  ListChecks,
  ClipboardList,
  Wrench,
  Home,
  Bot,
  Brain,
  MessageSquare,
  PenTool,
  Trophy,
  HeartHandshake,
  Search,
  Facebook,
  Lightbulb,
  UserX,
  PanelTop,
  LayoutDashboard as LayoutDashboardIcon,
  LifeBuoy,
  Timer,
  Trash2,
  Download,
  PieChart,
  GitMerge,
  TrendingDown,
  FileCheck,
  Headphones,
  Info
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function HowToUseGoHighLevelClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'dashboard',
        'setup-first',
        'crm',
        'pipeline',
        'automation',
        'funnels-calendars',
        'mistakes',
        'after-basics',
        'faq'
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(id);
            break;
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
      q: "Is GoHighLevel easy to use for beginners?",
      a: "GoHighLevel has a genuine learning curve it is a comprehensive platform covering CRM, automation, funnels, phone, email, and reputation management, and that breadth means more to learn than a single-purpose tool. Most beginners are functional within 1 to 2 weeks. The learning curve is front-loaded: once you understand how contacts, pipelines, and workflows connect to each other, the rest of the platform follows the same logic throughout. GHL has its own knowledge base, community, and support team, and there are extensive third-party tutorial resources. A basic setup takes approximately 4 to 8 hours spread over a few days."
    },
    {
      q: "What do you need to set up first in GoHighLevel?",
      a: "Complete these in order before building any funnels or automations: business profile (name, address, time zone, logo), email sending domain (connect a subdomain in Settings Email Services and add the DNS records to your domain registrar), phone system (LC Phone or Twilio), calendar (create one calendar with your availability before anything that involves booking), and team member access if others are using the account. The Launchpad checklist GHL shows on first login covers the most critical setup tasks complete it before building anything."
    },
    {
      q: "How long does it take to learn GoHighLevel?",
      a: "Most beginners are functional within 1 to 2 weeks, meaning they can build basic pipelines, run automations, and send messages to contacts. Becoming proficient enough to configure advanced workflows, funnels, and sub-account architecture for client accounts takes most people 1 to 3 months of regular use. The platform is extensive there is always more to learn but the fundamentals (contacts, pipelines, automations) follow consistent logic that transfers across every area of the platform."
    },
    {
      q: "What is the difference between an agency view and a sub-account in GoHighLevel?",
      a: "Agency View is the top-level management layer it is where you manage billing, create client sub-accounts, configure white-label settings, and control which features each sub-account can access. Sub-account View (also called Location View) is where the actual business tools live: contacts, pipelines, funnels, automations, conversations, and calendars. If you are a solo business owner using GHL for your own business, your one sub-account is where you spend all your time. If you are an agency managing multiple clients, each client is a separate sub-account inside your Agency View."
    },
    {
      q: "Do I need to know how to code to use GoHighLevel?",
      a: "No. GoHighLevel is a no-code platform. Funnels, websites, automations, workflows, and integrations are all built through visual interfaces without writing code. Some advanced customisations (embedding GHL forms on a third-party website, connecting to non-native integrations) may involve copying and pasting code snippets that GHL generates for you but no coding knowledge is required to write or modify those snippets."
    },
    {
      q: "What is a GoHighLevel Snapshot?",
      a: "A Snapshot is a complete, pre-built copy of a GHL setup that can be deployed to a new sub-account in one click. It contains pipeline stages, automation workflows, funnel pages, form templates, and other configurations. Agencies use Snapshots to onboard new clients quickly without rebuilding the same system from scratch each time. Pre-built Snapshots exist for specific industries dental, real estate, home services, coaching and can be customised after deployment."
    },
    {
      q: "What should I build first in GoHighLevel?",
      a: "After completing account settings, email domain, phone system, and calendar: build the missed call text back automation first. It is the simplest automation in the platform, has the most immediate revenue impact (recovering calls that would have gone unanswered), and teaches you how the trigger-and-action workflow model works. Once it is live and tested, add the new lead instant follow-up sequence, then the appointment reminder sequence. Start with three automations that deliver measurable results before building anything more complex."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'dashboard', title: '1. How Does the GoHighLevel Dashboard Work?' },
    { id: 'setup-first', title: '2. What Do You Set Up First in GoHighLevel?' },
    { id: 'crm', title: '3. How Does the GoHighLevel CRM Work?' },
    { id: 'pipeline', title: '4. How Do You Build a Pipeline in GoHighLevel?' },
    { id: 'automation', title: '5. How Do You Build Your First Automation?' },
    { id: 'funnels-calendars', title: '6. How Do You Set Up Funnels and Booking Calendars?' },
    { id: 'mistakes', title: '7. What Are the Most Common Beginner Mistakes?' },
    { id: 'after-basics', title: '8. What Should You Do After the Basics Are Working?' },
    { id: 'faq', title: '9. Frequently Asked Questions' },
  ];

  const setupSteps = [
    { 
      step: 'Business profile', 
      desc: 'Go to Settings and complete your business name, address, time zone, and business hours. Upload your logo. This information feeds into confirmation emails, booking pages, and client-facing pages getting it right first saves editing later.' 
    },
    { 
      step: 'Email sending domain', 
      desc: 'Go to Settings, then Email Services. Connect a subdomain (for example, mail.yourbusiness.com) as your sending domain. GHL walks you through the DNS records to add at your domain registrar. This step is critical: without a configured sending domain, your emails send from a generic GHL domain and deliverability drops significantly. Allow up to 24 hours for DNS propagation. You may want to verify the current DNS record format directly in your GHL account, as this may change.' 
    },
    { 
      step: 'Phone system', 
      desc: 'Go to Settings, then Phone Numbers. GHL offers its built-in phone system (LC Phone). If you already have a Twilio account, you can connect it instead. For most new users, starting with LC Phone is simpler you can port numbers later if needed. Purchase or configure a phone number before building any SMS automations.' 
    },
    { 
      step: 'Email choice LC Email or Mailgun', 
      desc: 'LC Email (GHL\'s built-in email) is the faster starting point for most users. If you plan to send high-volume email campaigns across multiple clients, Mailgun (a third-party provider) offers stronger deliverability. You do not need to make this decision on day one you can start with LC Email and switch later.' 
    },
    { 
      step: 'Calendar', 
      desc: 'Go to Calendars and create a calendar for your business. Set your availability, meeting duration, and buffer time between meetings. Once live, a booking link is generated that you can share directly or embed in a funnel. When someone books, GHL sends confirmation and reminder messages automatically.' 
    },
    { 
      step: 'Team members', 
      desc: 'If anyone else will use the account, go to Settings and Team Members to add them and assign their permission level. Do this before sharing the account to avoid setting up the wrong permissions later.' 
    },
    { 
      step: 'Stripe payment connection', 
      desc: 'If you take payments through GHL funnels, go to Settings and Integrations to connect your Stripe account. Without this, payment forms in funnels cannot process transactions.' 
    },
    { 
      step: 'Complete the Launchpad checklist', 
      desc: 'Return to the Launchpad and verify all critical items are checked off. This is GHL\'s own recommended setup sequence it exists for a reason and covers the connections that everything else depends on.' 
    },
  ];

  const pipelineStages = [
    { stage: 'New Lead', meaning: 'Contact just entered the system', happens: 'Automated follow-up fires immediately' },
    { stage: 'Contacted', meaning: 'You or your automation has reached out', happens: 'Wait for response, schedule call' },
    { stage: 'Call Booked', meaning: 'Discovery call or appointment scheduled', happens: 'Send reminders, prepare for call' },
    { stage: 'Proposal Sent', meaning: 'Quote or proposal delivered', happens: 'Follow up if no response in 48 hours' },
    { stage: 'Closed Won', meaning: 'Deal confirmed', happens: 'Onboarding sequence starts' },
    { stage: 'Closed Lost', meaning: 'Lead did not convert', happens: 'Tag for re-engagement in 90 days' },
  ];

  const mistakes = [
    {
      title: 'Building before the foundation is complete',
      desc: 'Skipping email domain setup, phone system configuration, or Stripe connection and jumping straight to building funnels. The funnel appears to work in GHL\'s editor but breaks in production because the underlying connections are missing. Always complete account settings, email domain, phone, and calendar before building anything contact-facing.'
    },
    {
      title: 'Overbuilding automations in the first week',
      desc: 'Creating 10 automations before any of them have been tested with real contacts. A single misconfigured automation can fire repeatedly to the same contact, send messages at the wrong time, or skip steps silently. Build one automation, verify it works correctly with a test submission, then build the next one.'
    },
    {
      title: 'Learning without doing',
      desc: 'Watching tutorials and reading guides without actually configuring anything in the account. GHL is learned by doing. Set up your business profile, create your first pipeline, and submit a test form to trigger your first automation in your first week. The platform makes more sense once you have seen it respond to a real action.'
    },
  ];

  const afterBasics = [
    'A2P 10DLC registration: If you are in the United States and plan to send automated SMS, you need to complete A2P 10DLC registration before sending at volume. This is a US carrier requirement it is mandatory, not optional. Register your brand and campaign through Settings, Phone Numbers, A2P Registration.',
    'More automations: Add the new lead instant follow-up sequence (SMS within 60 seconds of form submission, email within 2 minutes), the appointment reminder sequence (72 hours, 24 hours, and 2 hours before), and the post-service Google review request.',
    'Reputation management: Set up automated Google review requests to fire after every completed appointment or service. This is the highest-return automation for any local service business and takes under an hour to configure.',
    'Sub-account Snapshots (for agencies): If you are managing multiple client accounts, build a Snapshot of your working setup once it is stable and tested. Deploy it to new sub-accounts instead of rebuilding everything from scratch each time.',
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your GHL setup.</p>
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
          <span className="text-[#1A2236] font-medium">How to Use GoHighLevel</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Tutorial</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Beginners</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Use GoHighLevel:<br />
            <span className="text-[#F8D000]">Complete Beginner's Tutorial (2026)</span>
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
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Opening GoHighLevel for the first time is genuinely overwhelming. The sidebar has more options than most people expect, there are multiple ways to do almost everything, and the terminology sub-accounts, pipelines, Snapshots, workflows, triggers takes time to make sense. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has onboarded hundreds of agencies and businesses onto GoHighLevel. This guide covers the setup sequence that actually works: what to do first, what to skip until later, and the mistakes that slow most beginners down the most.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Setup Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#setup-first"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Setup Steps
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
                5+ years GHL experience · 200+ systems built globally. All technical details verified as of June 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Setting Up?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle the full GoHighLevel setup for agencies and service businesses.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Orientation</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Most beginners are functional within 1 to 2 weeks. A basic setup including a business profile, email sending domain, first pipeline, booking calendar, and one automation takes approximately 4 to 8 hours spread over a few days.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                The platform is not simple, but the learning curve is front-loaded. Once you understand how contacts, pipelines, and workflows connect to each other, the rest of the platform follows the same logic throughout. For an honest assessment of the platform's strengths and weaknesses before you commit: <Link href="/blog/gohighlevel-review" className="text-[#0E9BF0] hover:underline">GoHighLevel Review 2026 →</Link>
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Setup Help
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

            {/* Section 1: Dashboard */}
            <h2 id="dashboard" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. How Does the GoHighLevel Dashboard Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When you first log in, GHL shows a Launchpad checklist. This is your starting point it surfaces the most important setup tasks in one place. Complete these before building anything else.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Agency View vs. Sub-Account View</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The main interface has two views depending on your plan:
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Agency View:</strong> Manages your agency-level settings, sub-accounts, billing, and white-label configuration. If you are on the Unlimited or Agency Pro plan, this is where you create and manage separate client accounts.</li>
              <li><strong className="text-[#1A2236]">Sub-account view (also called Location View):</strong> This is where the actual business tools live contacts, pipelines, funnels, automations, calendars, conversations. Every client account you manage is a separate sub-account. If you are a solo business owner, your own business is your one sub-account.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Core Sections You Will Use Most</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The left sidebar is your main navigation. The core sections you will use as a beginner are:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Dashboard:</strong> Performance overview</li>
              <li><strong className="text-[#1A2236]">Contacts:</strong> Your CRM</li>
              <li><strong className="text-[#1A2236]">Conversations:</strong> Unified inbox for SMS, email, chat</li>
              <li><strong className="text-[#1A2236]">Opportunities:</strong> Your pipeline</li>
              <li><strong className="text-[#1A2236]">Automation:</strong> Workflows</li>
              <li><strong className="text-[#1A2236]">Sites:</strong> Funnels and websites</li>
              <li><strong className="text-[#1A2236]">Calendar:</strong> Booking</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">DO NOT START WITH FUNNELS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The most common beginner mistake is opening GHL and immediately trying to build a funnel. The funnel will not work properly until your email domain is configured, your phone system is connected, and your calendar is set up. Complete account setup first. Funnels take 20 minutes to build once the foundation is ready. They take days to troubleshoot when built on an incomplete foundation.
              </p>
            </div>

            {/* CTA Button 3: After Section 1 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Overwhelmed by the dashboard?</span> Let our team set up your GHL account correctly from day one.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Setup Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 2: Setup First */}
            <h2 id="setup-first" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Do You Set Up First in GoHighLevel?
            </h2>

            <div className="space-y-3 mb-6">
              {setupSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.step}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a full breakdown of GoHighLevel pricing plans and which one is right for you: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing Plans →</Link>
            </p>

            {/* Section 3: CRM */}
            <h2 id="crm" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Does the GoHighLevel CRM Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The CRM is where all your contacts live. It is the foundation that every other feature automations, pipelines, conversations, funnels builds on top of.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-[#5C6880]">
              <li>
                <strong className="text-[#1A2236]">Contacts:</strong> Every person your business interacts with is a contact record. A contact stores their name, email, phone number, custom field values, tags, and a complete timeline of every conversation, email, SMS, call, and workflow event associated with them.
              </li>
              <li>
                <strong className="text-[#1A2236]">Tags:</strong> Labels you apply to contacts to categorise them (for example, 'new lead,' 'appointment booked,' 'client'). Tags are used to trigger automations, filter lists, and segment contacts. Keep tags simple and consistent from the start too many tags create confusion quickly.
              </li>
              <li>
                <strong className="text-[#1A2236]">Custom fields:</strong> If your business needs to store information that GHL's default fields do not cover (for example, the type of service requested, the date of a last appointment, or a lead source), you can create custom fields. Create only the fields you genuinely need you can always add more later.
              </li>
              <li>
                <strong className="text-[#1A2236]">Smart lists:</strong> Saved filter views of your contacts based on criteria you define. For example, a smart list of all contacts tagged 'appointment booked' who have not responded in the last 7 days. Smart lists update dynamically as contacts meet or stop meeting the criteria.
              </li>
              <li>
                <strong className="text-[#1A2236]">Conversations:</strong> Every message SMS, email, website chat, social DMs with a contact is visible in one unified inbox under the Conversations section. This is where you see and respond to inbound messages from leads and clients without switching between tools.
              </li>
            </ul>

            {/* Section 4: Pipeline */}
            <h2 id="pipeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Build a Pipeline in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A pipeline is the visual board that shows where every lead is in your sales or service process. It is the feature most beginners find immediately intuitive.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Go to Opportunities in the left sidebar, then create a new pipeline. A pipeline has stages each stage represents a step in your process. A simple starting pipeline looks like this:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What typically happens here</th>
                  </tr>
                </thead>
                <tbody>
                  {pipelineStages.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.happens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When a lead submits a form, books a call, or is manually added, GHL creates an opportunity card and places it in the first stage. You drag the card to the next stage as the conversation progresses, or automations move it automatically based on the contact's actions.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE KEY INSIGHT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A pipeline without actions attached to each stage is just a spreadsheet with a nice interface. The power comes when moving a contact to a new stage triggers an automation sending an SMS, assigning a task, or moving them into a nurture sequence. Build at least one automation per stage transition before considering your pipeline live.
              </p>
            </div>

            {/* Section 5: Automation */}
            <h2 id="automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Build Your First Automation?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Go to Automation in the left sidebar, then Workflows, then New Workflow. You can start from scratch or use one of GHL's pre-built Recipes template automations that cover common use cases. For a first automation, use a Recipe. The Missed Call Text Back recipe is the one we recommend building first.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How a Workflow Works</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A workflow has two parts: a trigger and one or more actions.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Trigger:</strong> What starts the workflow. Examples include: a form being submitted, a call going unanswered, a tag being added to a contact, an appointment being booked, or a contact reaching a specific pipeline stage.</li>
              <li><strong className="text-[#1A2236]">Action:</strong> What happens after the trigger fires. Examples include: send an SMS, send an email, add a tag, move to a pipeline stage, wait a set amount of time, assign a task to a team member, or update a contact field.</li>
            </ul>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE SIMPLEST WORKFLOW TO START WITH</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>Trigger:</strong> Call status No Answer. <strong>Action:</strong> Send SMS: 'Sorry we missed your call what can we help with?' Fires within 60 seconds of a missed call.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              For a full guide to GHL's automation system including conditional logic, time delays, and multi-step sequences: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full missed call text back setup: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">START WITH ONE AUTOMATION, NOT TEN</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The most common setup mistake is overbuilding automations in week one. Build the missed call text back first. Run it for one week and verify it is firing correctly for real calls. Then add the new lead follow-up sequence. Then the appointment reminder. Add one automation at a time, verify each one works before activating the next. A misconfigured automation that fires incorrectly to real contacts is much harder to fix than a slow build.
              </p>
            </div>

            {/* CTA Button 4: After Automation */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚡ Not sure where to start with automations?</p>
              <p className="text-sm text-white/80 mb-4">We'll build your first 3 workflows for you so you can start automating immediately.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get Workflows Built
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 6: Funnels and Calendars */}
            <h2 id="funnels-calendars" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do You Set Up Funnels and Booking Calendars?
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Booking Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Go to Calendars and create a calendar. Set your availability, meeting duration, and buffer time between appointments. A booking link is generated automatically share it via SMS, embed it on a web page, or add it to your funnel. When a contact books, a confirmation SMS and email fire automatically, and GHL adds the appointment to your calendar. This replaces Calendly for most service businesses.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Funnels</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Go to Sites, then Funnels, then New Funnel. A funnel in GHL is a sequence of pages typically a landing page that captures a lead's contact information and a thank-you page that delivers what was promised. GHL has templates for different funnel types. Choose the closest template to your use case and edit it rather than building from scratch.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Every funnel needs a form:</strong> The form is what captures the contact's details and adds them to your CRM. When the form is submitted, it can also trigger a workflow which sends the first follow-up automatically.</li>
              <li><strong className="text-[#1A2236]">Connect the form to a pipeline stage:</strong> When a form is submitted, set the workflow to automatically add the contact to the first stage of your pipeline. Now every funnel lead shows up in your pipeline without any manual action.</li>
              <li><strong className="text-[#1A2236]">Test before running traffic:</strong> Submit the form yourself using a test email address. Verify the contact appears in your CRM, the tag is applied correctly, and the follow-up workflow fires. Do not run paid ads to an untested funnel.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Snapshots</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you are building a GHL system for a specific type of business a dental practice, a real estate agency, a coaching business a Snapshot is a complete pre-built copy of that business type's GHL setup. One click installs the pipeline stages, automations, funnel pages, and form structures into a new sub-account. For agencies, Snapshots cut client onboarding from days to hours.
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full Snapshot guide: <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
            </p>

            {/* CTA Button 5: After Funnels */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">📱 Need help setting up funnels and calendars?</p>
              <p className="text-sm text-white/80 mb-4">We'll configure your booking system and build your first funnel properly.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Get Funnel Setup
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 7: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Are the Most Common Beginner Mistakes?
            </h2>

            <div className="space-y-4 mb-6">
              {mistakes.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button 6: Before After Basics */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚠️ Avoid costly beginner mistakes.</p>
              <p className="text-sm text-white/80 mb-4">Get a free, no-obligation GHL setup review from experts who've built 200+ systems.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Shield className="w-4 h-4" />
                Get a Free Review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 8: After Basics */}
            <h2 id="after-basics" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. What Should You Do After the Basics Are Working?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once your account settings, CRM, pipeline, one automation, and calendar are live and tested, these are the natural next priorities.
            </p>

            <div className="space-y-2 mb-6">
              {afterBasics.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#5C6880]">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WANT YOUR SETUP DONE FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                If you want your GoHighLevel account configured correctly from day one rather than learning by trial and error, GHL Scale Up handles the full setup for agencies and service businesses.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See how our setups have performed: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Our <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM setup service</Link> covers the full account foundation, pipeline configuration, core automations, and team training.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss your specific setup: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* CTA Button 7: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Still not sure how to set up GHL correctly?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your business and tell you exactly what setup you need.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Free Setup Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

            {/* CTA Button 8: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Using GHL?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our GHL specialists directly. We've onboarded hundreds of businesses.</p>
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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation: Beginner's Guide →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Complete Setup Guide →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
                <Link href="/blog/gohighlevel-review" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Review 2026: Honest Verdict →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Want your GoHighLevel setup done correctly from day one?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles the setup so you can focus on your business. Business profile, email domain, phone, calendar, pipeline, core automations, and team training all configured and tested.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                Navigation paths and feature descriptions in this guide are verified against 2026 sources but may change as GoHighLevel updates the platform. Always verify navigation within your own GHL account. This is not official GoHighLevel documentation.
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