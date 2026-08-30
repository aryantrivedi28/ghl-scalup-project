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
  Lightbulb,
  UserCheck,
  UserX,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2,
  PieChart,
  GitMerge,
  TrendingDown,
  FileCheck,
  Search,
  Info,
  HeartHandshake
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function IsGoHighLevelWorthItClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'short-answer',
        'what-is-gohighlevel',
        'what-do-you-get',
        'how-much-cost',
        'real-cost',
        'when-worth-money',
        'worth-it-agencies',
        'worth-it-service-businesses',
        'worth-it-small-businesses',
        'worth-it-saas',
        'worth-learning',
        'difficult-setup',
        'migration',
        'replace-tools',
        'alternatives',
        'pros-cons',
        'not-solve',
        'decision-framework',
        'before-buying',
        'final-verdict',
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
      q: "Is GoHighLevel worth it for beginners?",
      a: "It can be, especially if the beginner has a clear business use case. Basic features are approachable, but advanced implementation requires deeper knowledge of data structure, workflow logic, integrations and testing."
    },
    {
      q: "Is GoHighLevel worth it for agencies?",
      a: "Often yes. Agencies benefit from sub accounts, reusable systems, centralized management, automation and higher tier SaaS capabilities."
    },
    {
      q: "Is GoHighLevel worth the cost?",
      a: "It depends on how much of the platform you use and what it replaces. Compare the complete cost of your current stack with software, usage and implementation costs under GHL."
    },
    {
      q: "Is GoHighLevel difficult to learn?",
      a: "Basic usage is manageable. Building a large and reliable system is considerably more complex than learning individual features."
    },
    {
      q: "What are the disadvantages of GoHighLevel?",
      a: "The main considerations are learning curve, implementation effort, operational complexity, usage based costs and the fact that specialist platforms can be stronger for narrow use cases."
    },
    {
      q: "Can GoHighLevel replace other marketing tools?",
      a: "It can consolidate many connected CRM, marketing, communication, booking and automation functions. It should not be treated as a universal replacement for every specialist platform."
    },
    {
      q: "Is GoHighLevel good for small businesses?",
      a: "It can be a strong fit when the business has consistent lead flow, appointments and meaningful automation requirements. A simple CRM may be better for very basic needs."
    },
    {
      q: "Is GoHighLevel worth learning if someone else manages it?",
      a: "Yes, at least at the business process level. Owners should understand their CRM structure, lead journey, automation logic and reporting even if technical implementation is outsourced."
    },
    {
      q: "Is GoHighLevel worth migrating to?",
      a: "Only when the expected operational or financial improvement justifies the migration effort. Audit your current system before deciding what should move, what should be rebuilt and what should be retired."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'short-answer', title: 'The Short Answer: Is GoHighLevel Worth It?' },
    { id: 'what-is-gohighlevel', title: 'What Is GoHighLevel?' },
    { id: 'what-do-you-get', title: 'What Do You Actually Get With GoHighLevel?' },
    { id: 'how-much-cost', title: 'How Much Does GoHighLevel Cost in 2026?' },
    { id: 'real-cost', title: 'The Real Cost of GoHighLevel Is Often Implementation' },
    { id: 'when-worth-money', title: 'When Does GoHighLevel Become Worth the Money?' },
    { id: 'worth-it-agencies', title: 'Is GoHighLevel Worth It for Agencies?' },
    { id: 'worth-it-service-businesses', title: 'Is GoHighLevel Worth It for Service Businesses?' },
    { id: 'worth-it-small-businesses', title: 'Is GoHighLevel Worth It for Small Businesses?' },
    { id: 'worth-it-saas', title: 'Is GoHighLevel Worth It for SaaS Businesses and Agencies?' },
    { id: 'worth-learning', title: 'Is GoHighLevel Worth Learning?' },
    { id: 'difficult-setup', title: 'How Difficult Is GoHighLevel to Set Up Properly?' },
    { id: 'migration', title: 'Migration Is More Than Moving Contacts' },
    { id: 'replace-tools', title: 'Can GoHighLevel Replace Your Other Marketing Tools?' },
    { id: 'alternatives', title: 'GoHighLevel vs the Main Alternatives' },
    { id: 'pros-cons', title: 'GoHighLevel Pros and Cons' },
    { id: 'not-solve', title: 'What GoHighLevel Does Not Solve for You' },
    { id: 'decision-framework', title: 'A Practical GoHighLevel Decision Framework' },
    { id: 'before-buying', title: 'What Should You Do Before Buying GoHighLevel?' },
    { id: 'final-verdict', title: 'Is GoHighLevel Worth It in 2026? Final Verdict' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const replacementTableData = [
    { function: 'CRM', ghl: 'Lead management, pipelines, opportunity tracking', specialist: 'Deep enterprise CRM processes or highly specialized sales operations' },
    { function: 'Email', ghl: 'Campaigns, nurture and event driven follow up', specialist: 'Email first organizations that need very specialized email capabilities' },
    { function: 'SMS and communication', ghl: 'Lead response and workflow driven messaging', specialist: 'Use cases requiring a highly specialized communication stack' },
    { function: 'Funnels', ghl: 'Lead capture and connected sales journeys', specialist: 'Businesses where funnel design alone is the central requirement' },
    { function: 'Booking', ghl: 'Appointment driven sales processes', specialist: 'Very specialized scheduling requirements' },
    { function: 'Reputation', ghl: 'Review requests and related automation', specialist: 'Advanced reputation operations built around a specialist platform' },
    { function: 'SaaS', ghl: 'Agency white label and resale workflows', specialist: 'Businesses that need a completely independent software product' }
  ];

  const prosConsData = [
    { type: 'Pros', items: ['Strong tool consolidation', 'CRM and automation can operate together', 'Strong agency and sub account model', 'Funnels, booking and communication can share customer data', 'White label and SaaS capabilities', 'Large range of automation and AI capabilities', 'Reusable systems can improve agency delivery'] },
    { type: 'Cons', items: ['Broad platform means a learning curve', 'Poor architecture can create complexity', 'Implementation requires planning', 'Usage based services can increase the bill', 'Not every specialist feature is best in class', 'Migration can be disruptive if poorly planned', 'Automations need testing and ongoing maintenance'] }
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your GHL decision.</p>
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
          <span className="text-[#1A2236] font-medium">Is GoHighLevel Worth It? An Honest Answer</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Review</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Worth It</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Is GoHighLevel Worth It?<br />
            <span className="text-[#F8D000]">An Honest Answer</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated August 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            If you are asking whether GoHighLevel is worth it, you probably do not need another feature list. You need to know whether the platform will make your business easier to operate, reduce tool sprawl, improve follow up, support growth, or create enough value to justify the cost of adopting it.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The honest answer is that GoHighLevel is worth it when you have a real use case for its combination of CRM, marketing automation, funnels, communication, booking, reputation management, AI and agency features. It is much less compelling when you only need one simple function or already have a well integrated stack.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            That distinction matters because GoHighLevel is not simply a cheap CRM. It is a broad operating platform. The value comes from connecting several parts of the customer journey, not from owning a long list of features.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            For a current overview of the platform before you make a buying decision, see <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">what GoHighLevel actually is</Link>.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Your GHL Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#final-verdict"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Verdict
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
                5+ years GHL experience · 200+ systems built globally. All pricing and technical details verified as of August 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Deciding?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We've helped 200+ businesses choose the right platform and set it up correctly.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Verdict</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Yes, for the right business. No, not for everyone.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GoHighLevel is worth it when the problems created by disconnected tools, slow follow up, manual work or multi client complexity are more expensive than the cost of operating the platform.
              </p>

              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Your GHL Assessment
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

            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section: The Short Answer */}
            <h2 id="short-answer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              The Short Answer: Is GoHighLevel Worth It?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel is usually worth it when:</strong> you generate enough leads to benefit from structured follow up, use several connected marketing tools, need CRM plus automation, operate multiple client accounts, sell through appointments, or want to build a white label SaaS offering.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel may not be worth it when:</strong> you need only a basic CRM, only need advanced email marketing, require a highly specialized enterprise CRM, have very little lead activity, or already have a reliable stack that works well together.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The key question is not whether GHL has enough features. It almost certainly does. The question is whether you will use enough of those capabilities to justify the subscription, implementation effort, learning time and ongoing maintenance.
            </p>

            {/* Section: What Is GoHighLevel */}
            <h2 id="what-is-gohighlevel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel, commonly shortened to GHL and officially branded as HighLevel, is an all in one CRM and marketing platform designed around lead generation, sales follow up and customer management. It brings together functions that businesses often buy separately, including CRM, pipelines, forms, funnels, websites, email, SMS, calendars, workflows, reputation management, payments and AI capabilities.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The important word is connected. A form submission can create a contact, create an opportunity, assign the lead, send an immediate message, start a nurture sequence and notify a team member without requiring several unrelated systems to coordinate the process.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That makes GHL particularly attractive to agencies and lead driven service businesses. It is less compelling when the business needs a specialized platform rather than a connected operating layer.
            </p>

            {/* Section: What Do You Actually Get */}
            <h2 id="what-do-you-get" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Do You Actually Get With GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The best way to evaluate GHL is to look at the customer journey rather than the feature list.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">CRM and pipelines.</strong> Contacts, opportunities and pipeline stages give a business a structured place to manage leads. The useful part is connecting those records to the actions that happen around them.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Workflow automation.</strong> Workflows can respond to events such as form submissions, pipeline changes, appointments, replies and other triggers. They can then send messages, assign leads, move opportunities, wait, check conditions and trigger additional actions.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Funnels and websites.</strong> GHL can handle landing pages, funnels and websites while keeping lead capture connected to the CRM and automation layer.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Email, SMS and communication.</strong> Businesses can build multi channel follow up around the same customer record. Usage and communication charges should be considered separately from the base subscription.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Calendars and appointments.</strong> Appointment based businesses can connect booking, reminders, lead records and follow up instead of running each process in isolation.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Reputation management.</strong> Review requests and related workflows can become part of the post sale customer journey.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">AI.</strong> HighLevel now has multiple AI capabilities, including conversational and voice related tools. AI can reduce repetitive work, but it does not replace process design, escalation rules, data structure or human judgment.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Agency and SaaS capabilities.</strong> Higher plans support agency features, sub accounts, white labeling and SaaS Mode. These features matter primarily when the business model involves managing clients or reselling a software experience.
            </p>

            {/* Section: How Much Does It Cost */}
            <h2 id="how-much-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Much Does GoHighLevel Cost in 2026?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              As of August 2026, HighLevel's official pricing lists three main agency plans: Starter at $97 per month, Unlimited at $297 per month and Agency Pro at $497 per month. Starter supports up to three sub accounts, Unlimited supports unlimited sub accounts, and Agency Pro adds SaaS Mode and advanced agency capabilities. Current official pricing should always be checked before purchase because product packaging can change.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the detailed breakdown, see the <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing guide</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The subscription is not the complete cost. Communication, AI and other usage based services can create additional charges. HighLevel's current pricing documentation also separates AI Employee plans from the base subscription, and phone system charges can still apply to phone usage.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This leads to a more useful calculation:
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              Total Cost of Ownership = software + usage + third party services + implementation + maintenance
            </p>

            {/* Section: Real Cost Is Implementation */}
            <h2 id="real-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Real Cost of GoHighLevel Is Often Implementation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Buying access to GHL is easy. Building a reliable GHL system is the harder part.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A serious implementation may require business process mapping, CRM architecture, pipeline design, custom fields, lead routing, forms, calendars, workflows, email configuration, SMS configuration, integrations, tracking, testing, permissions, documentation and team training.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is why two businesses can pay the same subscription and receive very different value. One may have a clean system that routes and follows up with every lead. The other may have dozens of disconnected workflows, duplicate fields and automations nobody understands.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the implementation involves CRM architecture, see the <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM setup service</Link> for the types of components that need to be considered.
            </p>

            {/* Section: When Does It Become Worth the Money */}
            <h2 id="when-worth-money" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Does GoHighLevel Become Worth the Money?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is no universal revenue number at which GHL suddenly becomes worthwhile. The better measure is operational complexity.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Imagine a business paying separately for a CRM, funnel builder, email platform, SMS provider, calendar, review tool and automation connector. Even if GHL is not dramatically cheaper on a simple subscription comparison, consolidating those systems can reduce logins, integrations, duplicate data, maintenance and failure points.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              But consolidation is not automatically a saving. If your current tools are specialized, reliable and already integrated, moving everything into GHL can create unnecessary migration work. The correct comparison is the complete operating system you would have before and after the change.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL becomes more compelling when at least several of these are true:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>You have consistent lead flow and follow up is difficult to manage manually.</li>
              <li>You use several tools that need to share lead and customer data.</li>
              <li>Appointments are an important part of your sales process.</li>
              <li>Your team needs structured pipelines and automated lead routing.</li>
              <li>You operate several client accounts or brands.</li>
              <li>You want reusable workflows and templates.</li>
              <li>You want white label or SaaS capabilities.</li>
              <li>The value of faster response and better follow up is measurable.</li>
            </ul>

            {/* Section: Is It Worth It for Agencies */}
            <h2 id="worth-it-agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Worth It for Agencies?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For agencies, the case is particularly strong because GHL is designed around sub accounts and centralized management. Instead of treating every client as a completely separate software environment, an agency can manage multiple client accounts from an agency level and build reusable systems.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Snapshots can also turn a proven client setup into a reusable starting point. That changes the economics of implementation because the agency is no longer rebuilding the same basic architecture for every client.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a deeper agency analysis, read <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline">GoHighLevel for agencies</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The strongest agency use case is not simply having many features. It is standardization. If your agency can create a repeatable CRM, automation and onboarding architecture, each new client becomes easier to deploy and maintain.
            </p>

            {/* Section: Is It Worth It for Service Businesses */}
            <h2 id="worth-it-service-businesses" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Worth It for Service Businesses?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Often yes, especially for businesses where the customer journey looks something like:
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Lead → Qualification → Follow up → Appointment → Reminder → Sale → Review → Re engagement
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A dental practice, law firm, home service company, consultant or coaching business can benefit when there are many manual steps between the first inquiry and the completed sale.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The more predictable the process, the more useful automation becomes. But a service business with very few leads and almost no follow up complexity may be better served by a simpler CRM.
            </p>

            {/* Section: Is It Worth It for Small Businesses */}
            <h2 id="worth-it-small-businesses" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Worth It for Small Businesses?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is more conditional. A small business should not buy GHL simply because it is popular with agencies.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A small business is more likely to benefit when it has regular lead generation, appointment based sales, several follow up stages, multiple communication channels, review generation needs or several existing marketing tools.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the business only needs contact storage, a simple pipeline and occasional email, GHL can be more platform than the business actually needs. In that case, simplicity may be more valuable than breadth.
            </p>

            {/* Section: Is It Worth It for SaaS Businesses */}
            <h2 id="worth-it-saas" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Worth It for SaaS Businesses and Agencies?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL becomes a different proposition when the goal is to sell a branded software experience. Agency Pro includes SaaS Mode, which can support automated sub account creation and rebilling capabilities.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              But SaaS Mode does not create a SaaS business for you. It provides infrastructure. You still need a niche, positioning, acquisition strategy, onboarding, support, retention, pricing and a reason customers should keep paying.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If this is your use case, see the <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode setup guide</Link> and the <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">white label SaaS setup service</Link>.
            </p>

            {/* Section: Is It Worth Learning */}
            <h2 id="worth-learning" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Worth Learning?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you are an agency owner, automation specialist, marketer, implementation consultant or service business operator who expects to use GHL extensively, learning the platform can be worthwhile.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The important distinction is between learning to use GHL and learning to architect GHL.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A beginner can learn contacts, pipelines, forms, calendars, funnels and basic workflows without being a developer. Advanced implementation requires a deeper understanding of data structure, conditional logic, integrations, naming conventions, testing, permissions, tracking and failure handling.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Business owners do not necessarily need to master every technical detail. They should understand the business process well enough to decide what should happen, what should be automated, what should remain human and what needs to be measured.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the system is large or business critical, the cost of learning everything yourself should be compared with the cost of getting implementation help. The right question is not whether you can eventually learn it. It is whether doing so is the best use of your time.
            </p>

            {/* Section: How Difficult Is Setup */}
            <h2 id="difficult-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Difficult Is GoHighLevel to Set Up Properly?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Basic setup is approachable. Proper implementation is a different problem.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A useful implementation sequence is:
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Map the customer journey before opening the workflow builder.</li>
              <li>Define the contact and opportunity data structure.</li>
              <li>Design pipelines around real sales stages.</li>
              <li>Decide which events should trigger automation.</li>
              <li>Build lead routing and ownership rules.</li>
              <li>Connect forms, calendars, communication and integrations.</li>
              <li>Test every important path with realistic data.</li>
              <li>Document the system so another person can maintain it.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most common mistake is starting with features instead of process. A business buys GHL, starts building workflows immediately and only later realizes that different automations are using inconsistent fields, tags or pipeline stages.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A good system is not the one with the most automation. It is the one where every automation has a clear job and someone can understand why it exists.
            </p>

            {/* Section: Migration */}
            <h2 id="migration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Migration Is More Than Moving Contacts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you are considering switching platforms, do not treat migration as a CSV exercise. Contacts are only one part of the system.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A real migration may involve field mapping, pipeline reconstruction, automation rebuilding, forms, calendars, funnels, integrations, tracking, permissions, testing and team training. What transfers cleanly depends on the source platform.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before switching, audit what your current platform actually does. List every trigger, automation, integration, form, pipeline, field and customer facing process. Then decide what should be recreated, simplified or retired.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a deeper explanation, read <Link href="/blog/what-is-ghl-migration" className="text-[#0E9BF0] hover:underline">what GHL migration involves</Link>. If you are moving from another platform, the <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL migration service</Link> covers the implementation side.
            </p>

            {/* Section: Can It Replace Your Tools */}
            <h2 id="replace-tools" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Replace Your Other Marketing Tools?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sometimes. But the better question is which tools should be consolidated.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Function</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GHL can be strong for</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">When a specialist may still win</th>
                  </tr>
                </thead>
                <tbody>
                  {replacementTableData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.function}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.specialist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The principle is simple: consolidate connected functions where GHL improves the operating system. Keep a specialist tool when its unique depth materially matters.
            </p>

            {/* Section: Alternatives */}
            <h2 id="alternatives" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs the Main Alternatives
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">GoHighLevel vs HubSpot</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose GHL when agency architecture, marketing automation, funnels, multi channel communication and flat rate multi client management are central to the business. Consider HubSpot when CRM depth, enterprise sales processes, reporting and broader enterprise capabilities are more important.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a detailed agency focused comparison, read <Link href="/blog/gohighlevel-vs-hubspot" className="text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot</Link>.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">GoHighLevel vs ActiveCampaign</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose GHL when CRM, funnels, appointments, SMS, multi client management and broader workflow automation are part of the requirement. Consider ActiveCampaign when sophisticated email marketing and automation are the primary requirement.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              See the deeper <Link href="/blog/gohighlevel-vs-activecampaign" className="text-[#0E9BF0] hover:underline">GoHighLevel vs ActiveCampaign comparison</Link> before deciding.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">GoHighLevel vs ClickFunnels</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose GHL when funnels are only one part of the customer journey and you also need CRM, automation, appointments and communication. Consider ClickFunnels when funnel creation is the central requirement and you prefer a more focused funnel platform.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">GoHighLevel vs Other Alternatives</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Other alternatives can make sense for different reasons. Enterprise organizations may prefer platforms such as Salesforce or HubSpot. Email first businesses may prefer ActiveCampaign. Course first businesses may prefer a specialized education platform. Budget focused operators may prefer simpler all in one tools.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The right comparison is based on operating model, not feature count. GHL should not win simply because it has more features. It should win when its combination of features matches how your business actually works.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a wider comparison, see <Link href="/blog/gohighlevel-alternatives" className="text-[#0E9BF0] hover:underline">GoHighLevel alternatives</Link>.
            </p>

            {/* CTA Button 3: After Alternatives */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Not sure which platform is right for you?</span> Let our team help you decide.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Platform Advice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section: Pros and Cons */}
            <h2 id="pros-cons" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Pros and Cons
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Pros
                </h3>
                <ul className="space-y-2">
                  {prosConsData[0].items.map((item, idx) => (
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
                  Cons
                </h3>
                <ul className="space-y-2">
                  {prosConsData[1].items.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section: What It Does Not Solve */}
            <h2 id="not-solve" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What GoHighLevel Does Not Solve for You
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A platform cannot fix an unclear offer, weak lead generation, poor sales process or bad customer experience.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL can automate follow up, but it cannot make a weak offer compelling. It can route leads, but it cannot decide your ideal customer profile for you. It can build a funnel, but it cannot guarantee conversion. It can provide AI tools, but it cannot remove the need for sensible escalation and quality control.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is one reason implementation quality matters. The platform amplifies the process you build around it. A good process becomes easier to execute. A bad process becomes automated at scale.
            </p>

            {/* Section: Decision Framework */}
            <h2 id="decision-framework" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Practical GoHighLevel Decision Framework
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use the following questions before buying. Give yourself one point for every yes. This is not a scientific score. It is a practical way to expose whether your business actually has the complexity that GHL is designed to handle.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Do you generate enough leads that manual follow up is becoming difficult?</li>
              <li>Do you need CRM plus automation rather than a CRM alone?</li>
              <li>Are you currently paying for several connected marketing tools?</li>
              <li>Do appointments play an important role in your sales process?</li>
              <li>Do different lead types require different routing or follow up?</li>
              <li>Would automated follow up create measurable business value?</li>
              <li>Do you manage multiple clients, brands or locations?</li>
              <li>Do you need reusable workflows or snapshots?</li>
              <li>Do you need white label or SaaS capabilities?</li>
              <li>Are you willing to invest time or budget in proper implementation?</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">8 to 10 yes answers:</strong> GHL is likely worth serious consideration. Your business has enough operational complexity to benefit from the platform.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">5 to 7 yes answers:</strong> GHL may be a good fit, but compare the complete cost and implementation effort against simpler alternatives.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">0 to 4 yes answers:</strong> A simpler platform may be the better choice unless you have a specific GHL requirement such as agency management or SaaS.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The score is only a decision aid. One strong requirement can outweigh several no answers. For example, an agency may choose GHL primarily because multi client architecture and SaaS are central to its business model.
            </p>

            {/* Section: Before Buying */}
            <h2 id="before-buying" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should You Do Before Buying GoHighLevel?
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>List every marketing and sales tool you currently pay for.</li>
              <li>List the monthly cost of those tools and any usage charges.</li>
              <li>Map what happens from first lead to closed customer.</li>
              <li>Mark every manual step that could reasonably be automated.</li>
              <li>Document your current forms, pipelines, fields, integrations and follow up sequences.</li>
              <li>Decide which specialist tools must remain.</li>
              <li>Estimate the implementation work rather than budgeting only for the subscription.</li>
              <li>Define the metrics that should improve after implementation.</li>
              <li>Decide who will own the system after launch.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This process often reveals the real answer before you even start the trial. If your current stack is fragmented and your customer journey contains repeated manual work, GHL has a strong value case. If your current stack is already simple and reliable, switching may not be worth the disruption.
            </p>

            {/* Section: Final Verdict */}
            <h2 id="final-verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Worth It in 2026? Final Verdict
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, for the right business. No, not for everyone.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is worth it when the problems created by disconnected tools, slow follow up, manual work or multi client complexity are more expensive than the cost of operating the platform.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It is especially compelling for agencies that manage multiple client environments, service businesses with consistent lead flow, and operators that need CRM, automation, communication, booking and funnels to work together. It is also compelling for agencies that have a real plan for white label SaaS.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It is less compelling when you only need a basic CRM, a specialist email platform, a simple funnel builder, a highly specialized enterprise system or a tool that your team can operate with almost no configuration.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The biggest mistake is comparing the GHL subscription against the price of one competitor. Compare the complete systems instead: software, usage, integrations, implementation, maintenance, training and the time your team spends managing them.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the result is a simpler and more measurable customer journey, GHL can be very good value. If the result is a large platform that nobody uses properly, the subscription is not the problem. The implementation decision is.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you are evaluating an existing setup, a <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM setup</Link> can help structure the system around the actual sales process. If you are moving from another platform, start with a <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL migration assessment</Link>.
            </p>

            {/* CTA Button 4: After Final Verdict */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">✅ Ready to make a decision about GoHighLevel?</p>
              <p className="text-sm text-white/80 mb-4">Get a free, no-obligation assessment from experts who've built 200+ GHL systems.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
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

            {/* CTA Button 5: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Whether GHL Is Worth It?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our GHL experts directly. We'll give you an honest assessment based on your business.</p>
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
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete Guide for 2026 →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans, Real Costs & Hidden Fees Explained →</Link>
                <Link href="/blog/gohighlevel-review" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Review 2026: Honest Verdict After 200+ Real Builds →</Link>
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot (2026): Honest Agency Comparison →</Link>
                <Link href="/blog/gohighlevel-alternatives" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Alternatives (2026): Best Tools to Compare Before You Decide →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup and Configuration Services →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to make a decision about GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps you decide whether GHL fits your business and then handles the full setup, migration, and go-to-market execution.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience setting up, auditing, and migrating GHL systems across real estate, healthcare, home services, SaaS, and agencies. All pricing and technical details verified as of August 2026.
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