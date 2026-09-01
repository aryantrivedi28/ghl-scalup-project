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
  Star,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  XCircle,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Trophy,
  Facebook,
  Shield,
  DollarSign,
  Users,
  Building2,
  Calendar,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Cloud,
  Database,
  Clock,
  Mail,
  GraduationCap,
  Compass,
  BarChart3,
  Mailbox,
  Layers,
  Workflow,
  Settings,
  Link2,
  Webhook,
  RefreshCw,
  ListChecks,
  ClipboardList,
  Printer,
  Video,
  Ticket,
  TrendingDown,
  Info,
  UserCheck,
  UserX,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2,
  Download,
  PieChart,
  GitMerge,
  FileCheck,
  Headphones,
  FileText
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function HowToTransferGHLSubAccountClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-transfer',
        'prerequisites',
        'transfer-vs-eject',
        'step-by-step',
        'what-transfers',
        'phone-numbers',
        'restrictions',
        'bulk-transfer',
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
      q: "How long does a GoHighLevel sub-account transfer take?",
      a: "Once initiated by the sending agency, the transfer request appears in the receiving agency's dashboard within minutes. Once accepted by the receiving agency, the sub-account moves to their dashboard almost immediately, with all contacts, workflows, funnels, and calendars intact. The end-to-end timeline typically takes hours from initiation to full completion but the delay is usually the receiving agency's response time, not GHL's processing time. Bulk transfers of 1,000 sub-accounts have similar processing speed once accepted."
    },
    {
      q: "What happens to phone numbers when I transfer a GoHighLevel sub-account?",
      a: "It depends on the phone infrastructure. If both the sending and receiving agencies are on LeadConnector (LC), all phone numbers transfer automatically with the sub-account and existing A2P 10DLC registrations remain valid no re-registration is required. All future phone usage charges are billed to the receiving agency. If either agency is on Twilio instead of LC, phone numbers do NOT transfer through GoHighLevel you must coordinate directly with Twilio and the previous account owner to port the numbers manually."
    },
    {
      q: "Do I lose my A2P 10DLC registration when transferring a sub-account?",
      a: "Not if both agencies are on LeadConnector. Confirmed from GHL's official documentation: sub-accounts do not need to re-register phone numbers that are already A2P registered when transferring between LC-based agencies. The brand and campaign registrations continue seamlessly, and SMS delivery is not interrupted. If either agency is on Twilio, the A2P registration situation must be handled through Twilio directly HighLevel does not manage that path."
    },
    {
      q: "Does Stripe transfer when I move a GoHighLevel sub-account?",
      a: "No. Stripe (and other external payment gateway connections) are external auth connections, which are all disconnected during the transfer. The receiving agency must reconnect Stripe or the client's payment gateway after the transfer. Any active Stripe subscriptions must be CANCELLED before the transfer with the reason 'Transferring to another agency' if left active, the transfer will error. This is the single most common transfer failure."
    },
    {
      q: "Can I transfer a white-label GoHighLevel sub-account?",
      a: "No. White-label sub-accounts operating under SaaS Mode cannot be transferred using the standard Transfer Sub-Account feature. SaaS Mode is auto-disabled before any transfer takes place, but the underlying restriction on white-label transfers remains. There are two workarounds: (1) disable SaaS Mode on the sub-account first (which changes the client's branding view), or (2) use the Eject to New Agency path instead, which converts the sub-account to its own standalone agency account."
    },
    {
      q: "What is the difference between Transfer and Eject in GoHighLevel?",
      a: "Transfer moves a sub-account to another EXISTING agency account (you need their Relationship Number, and they must accept the request). Eject converts the sub-account itself into a brand-new standalone agency account (you nominate a user, they receive a $97/month signup link via email, and once they sign up they become the agency owner of the newly independent account). Eject also generates a 40% affiliate commission to the sending agency on all future renewals from the ejected agency confirmed from GHL's official Eject documentation."
    },
    {
      q: "How do I find my GoHighLevel agency Relationship Number?",
      a: "Log in to your agency dashboard. Click the question mark (?) help icon in the top-right area of the interface. The Relationship Number is displayed at the top of the help section. Copy this number and send it securely to the sending agency (via email or private channel never on a public form). The Relationship Number is required for both single sub-account transfers and bulk transfers of up to 1,000 sub-accounts at a time."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-transfer', title: '1. What is a GoHighLevel sub-account transfer?' },
    { id: 'prerequisites', title: '2. What are the prerequisites before you can transfer?' },
    { id: 'transfer-vs-eject', title: '3. What is the difference between Transfer and Eject?' },
    { id: 'step-by-step', title: '4. What are the exact step-by-step transfer instructions?' },
    { id: 'what-transfers', title: '5. What data transfers and what does not?' },
    { id: 'phone-numbers', title: '6. How are phone numbers handled during the transfer?' },
    { id: 'restrictions', title: '7. What are the restrictions that prevent a transfer?' },
    { id: 'bulk-transfer', title: '8. How does bulk transfer work for multiple sub-accounts?' },
    { id: 'faq', title: '9. Frequently asked questions' }
  ];

  const transferVsEject = [
    { feature: 'Requirement', transfer: 'Receiving agency\'s Relationship Number', eject: 'Nominated user email' },
    { feature: 'Result', transfer: 'Sub-account moves to another existing agency', eject: 'Sub-account becomes its own standalone agency account' },
    { feature: 'Cost to receiver', transfer: 'Depends on receiving agency\'s plan', eject: 'Nominated user gets a $97/month signup link' },
    { feature: 'Affiliate commission', transfer: 'None', eject: 'Sending agency receives 40% affiliate commission on all future renewals from the new agency' },
    { feature: 'Typical use case', transfer: 'Selling client to another agency, client consolidation', eject: 'Client wants to run their own agency account independently' },
    { feature: 'Approval', transfer: 'Receiving agency must accept the request', eject: 'Nominee must sign up for the new agency plan' }
  ];

  const phoneScenarios = [
    { scenario: 'Both agencies on LeadConnector', transfers: 'Yes, automatically', a2p: 'Yes, no re-registration needed', billedTo: 'Receiving agency' },
    { scenario: 'Sender on LC, Receiver on Twilio', transfers: 'No coordinate with Twilio manually', a2p: 'N/A Twilio handles separately', billedTo: 'Depends on Twilio setup' },
    { scenario: 'Sender on Twilio, Receiver on LC', transfers: 'No coordinate with Twilio manually', a2p: 'Receiving agency will need to re-register', billedTo: 'Receiving agency once numbers ported' },
    { scenario: 'Both agencies on Twilio', transfers: 'No coordinate with Twilio manually', a2p: 'Twilio handles separately', billedTo: 'Depends on Twilio setup' }
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your sub-account transfer.</p>
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
          <span className="text-[#1A2236] font-medium">How to Transfer a GHL Sub-Account</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Sub-Account Transfer</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Guide</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Transfer a GoHighLevel Sub-Account:<br />
            <span className="text-[#F8D000]">Complete Guide (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Transferring a GoHighLevel sub-account to another agency is a native GHL feature that lets you move an entire client workspace contacts, workflows, funnels, calendars, memberships from one agency account to another in minutes. But the process has strict rules: white-label sub-accounts cannot be transferred, multi-location agencies are excluded, and phone number continuity depends on whether both agencies are on LeadConnector or Twilio. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled dozens of sub-account transfers for agencies and their clients. This guide gives you the exact step-by-step process, both transfer options, and every restriction confirmed from GoHighLevel's official documentation.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Transfer Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#step-by-step"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Step-by-Step
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
                5+ years GHL experience · 200+ systems built, migrated, and transferred globally. All technical details verified as of July 2026.
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
              <div className="text-sm font-bold text-white mb-2">Transferring a Sub-Account?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle sub-account transfers end-to-end pre-transfer audit, integration mapping, phone number handoff, and post-transfer validation.</p>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                To transfer a GoHighLevel sub-account to another agency: (1) Go to Agency Level → Sub-Accounts, (2) select Manage Client on the sub-account, (3) click Actions → Transfer Sub-Account, (4) enter the receiving agency's Relationship Number, (5) confirm with your password.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                The sub-account is sent as a request and only transfers once the receiving agency approves. Most core assets transfer contacts, conversations, workflows in Live state, calendars, funnels, memberships. External auth connections (Google, Facebook, Stripe, Instagram) are deleted and must be reconnected. White-label sub-accounts and multi-location agency sub-accounts cannot be transferred at all.
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Transfer Help
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

            {/* Section 1: What Is Transfer */}
            <h2 id="what-is-transfer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is a GoHighLevel Sub-Account Transfer?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> A GoHighLevel sub-account transfer is the movement of a sub-account from one agency (the Releasing Agency) to another agency (the Receiving Agency). It is not a merge, and it is not partial the entire sub-account moves as one unit, or it does not move at all. Confirmed from GHL's official Sub-Account Transfer Guide.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> The transfer feature exists because GoHighLevel is designed around the agency-client relationship, but ownership of that relationship changes over time. A client may want to take direct ownership of their setup under their own agency account. An agency may sell or hand off a client to another provider. Two agencies may consolidate. In each case, the sub-account itself with all its contacts, funnels, workflows, and history needs to move without being rebuilt from scratch.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Example:</strong> An agency managing a dental client for 3 years decides to focus on legal instead. They find a specialist dental GHL agency willing to take on the client. Rather than the client losing 3 years of contact history, workflow data, and appointment records, the sub-account is transferred to the new agency. The client keeps their phone number, workflows continue running in Live state, and the new agency picks up management from day one.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a full comparison of transfer vs a complete platform migration from another CRM: <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL migration services →</Link>
            </p>

            {/* CTA Button 3: After Section 1 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Planning a sub-account transfer?</span> Let our team handle the transition smoothly.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Transfer Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 2: Prerequisites */}
            <h2 id="prerequisites" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Are the Prerequisites Before You Can Transfer?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Before initiating a sub-account transfer, both agencies must meet specific eligibility conditions and the sender must have one critical piece of information from the receiver.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Confirmed from GHL's official documentation, the prerequisites are:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The Receiving Agency's Relationship Number:</strong> This is the unique identifier for the receiving agency. Without it, the transfer cannot proceed. It is a specific numeric string that must be provided by the receiving agency to the sending agency before the transfer form is filled out.</li>
              <li><strong className="text-[#1A2236]">Neither agency is a multi-location agency:</strong> Multi-location agencies cannot transfer sub-accounts using this feature. Confirmed from GHL's documentation.</li>
              <li><strong className="text-[#1A2236]">The sub-account is not under white-label branding:</strong> White-label sub-accounts cannot be transferred. SaaS Mode is auto-disabled before any transfer takes place.</li>
              <li><strong className="text-[#1A2236]">Active subscriptions on the sub-account are cancelled:</strong> If the sub-account has active subscriptions (ad publishing plans, membership subscriptions, etc.), you must cancel them first. Cancellation reason: "Transferring to another agency."</li>
              <li><strong className="text-[#1A2236]">You have full agency ownership permission:</strong> Only the agency owner or a user with agency-level permission can initiate a transfer.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">HOW THE RECEIVING AGENCY FINDS THEIR RELATIONSHIP NUMBER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The receiving agency owner logs into their GHL dashboard. In the top-right area, they click the question mark (?) help icon. The Relationship Number is displayed at the top of the help section. They copy this number and send it securely to the releasing agency (email or Slack never on a public form). Confirmed from third-party GHL training documentation, matches GHL's official Sub-Account Transfer Guide.
              </p>
            </div>

            {/* Section 3: Transfer vs Eject */}
            <h2 id="transfer-vs-eject" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Is the Difference Between Transfer and Eject?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GoHighLevel offers two related but distinct options when moving a sub-account out of your agency: Transfer to an Existing Agency (moves the sub-account to another already-active GHL agency account) and Eject to a New Agency (converts the sub-account itself into a brand-new standalone agency account).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Both options are accessed the same way Sub-Accounts → Manage Client → Actions → Transfer Sub-Account but at the next step, you choose which path to take.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Transfer to Existing Agency</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Eject to New Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {transferVsEject.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.transfer}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.eject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WHY THE EJECT PATH MATTERS COMMERCIALLY</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The 40% affiliate commission on future renewals from ejected sub-accounts is a legitimate ongoing revenue stream. If you eject a client to a new $97/month agency and they stay on GoHighLevel for two years, that is approximately $931 in affiliate commission back to you over that period without any ongoing work. Confirmed from GHL's official Eject documentation. This is why some agencies deliberately use the Eject path when handing clients off rather than the standard Transfer.
              </p>
            </div>

            {/* CTA Button 4: After Transfer vs Eject */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🤔 Not sure whether to Transfer or Eject your sub-account?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your situation and recommend the right path.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get Transfer Advice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 4: Step-by-Step */}
            <h2 id="step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Are the Exact Step-by-Step Transfer Instructions?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> The exact procedure to send a sub-account to an existing agency, confirmed from GHL's official Sub-Account Transfer Guide (article 155000002031, modified February 18, 2026).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail (Sender side Releasing Agency):</strong> Complete these steps in order.
            </p>

            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Step 1 Confirm eligibility:</strong> Verify the sub-account is not white-label, your agency is not multi-location, and all active subscriptions on the sub-account are cancelled with the reason "Transferring to another agency."</li>
              <li><strong className="text-[#1A2236]">Step 2 Get the Relationship Number:</strong> Ask the receiving agency owner to send you their agency Relationship Number. They find it by clicking the question mark help icon in their dashboard.</li>
              <li><strong className="text-[#1A2236]">Step 3 Navigate to the sub-account:</strong> Log in to your Agency Level dashboard. Go to Sub-Accounts. Find the sub-account you want to transfer. Click Manage Client on that sub-account.</li>
              <li><strong className="text-[#1A2236]">Step 4 Initiate the transfer:</strong> In the top-right corner, click Actions. Select Transfer Sub-Account from the dropdown.</li>
              <li><strong className="text-[#1A2236]">Step 5 Choose Transfer to Existing Agency:</strong> You will see two options. Select Transfer to an Existing Agency (not Eject to a New Agency).</li>
              <li><strong className="text-[#1A2236]">Step 6 Enter the Relationship Number:</strong> Input the Receiving Agency's Relationship Number. Double-check the number one wrong digit sends the sub-account to the wrong agency, and you will need HighLevel support to recover it.</li>
              <li><strong className="text-[#1A2236]">Step 7 Review and confirm:</strong> Review the transfer guidelines that appear on screen. Check the box confirming you understand what will and will not transfer. Enter your account password. Click Confirm.</li>
              <li><strong className="text-[#1A2236]">Step 8 Wait for receiving agency to approve:</strong> The transfer is now a request, not a completed transfer. The receiving agency will see the request in their dashboard and must accept it before the sub-account moves. You can track the status under the Sent tab on the Sub-Account Transfers screen.</li>
            </ol>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail (Receiver side Receiving Agency):</strong> Log in to Agency Level. Navigate to Sub-Accounts → Sub-Account Transfers → Received tab. Review the incoming transfer request. Accept the transfer. The sub-account now appears as a new sub-account in your dashboard.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Example:</strong> A UK-based GHL agency transfers a real estate client to a US-based agency who specialises in that vertical. Sender confirms the client's sub-account has no active ad publishing subscription (cancelled Stripe subscription for their previous Facebook Ads add-on with reason "Transferring to another agency"). US agency provides their Relationship Number via secure email. Sender completes Steps 3-7, transfer request sent. US agency logs in the next morning, accepts. Sub-account appears in US agency dashboard within minutes with all contacts, workflows, funnels, and calendars intact.
            </p>

            {/* Section 5: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Data Transfers and What Does Not?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Not everything moves with the sub-account. GoHighLevel's official documentation lists exactly what transfers, what stays behind, and what is deleted during the transfer process.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">What TRANSFERS to the new agency</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>All contacts and their conversation history</li>
                <li>Appointments, opportunities, and pipeline records</li>
                <li>Workflows and campaigns (all automations transfer in Live state they continue running)</li>
                <li>Contacts already enrolled in workflows remain enrolled workflow enrollment data is preserved</li>
                <li>Funnels, websites, and landing pages URLs stay the same</li>
                <li>GHL calendars and calendar configurations</li>
                <li>Memberships and course access</li>
                <li>Sub-account-level API keys (they remain the same after transfer)</li>
                <li>Users who have User Type "Account" AND are assigned only to that sub-account (users on multiple sub-accounts do NOT transfer)</li>
              </ul>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">What is DELETED during transfer</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#1A2236]">All external auth connections:</strong> Google, Facebook, Instagram, QuickBooks, Clio, DrChrono, Yext, and similar. All disconnect.</li>
                <li><strong className="text-[#1A2236]">External calendar integrations:</strong> Google Calendar, Outlook, or other external calendars disconnect from GHL calendars.</li>
                <li><strong className="text-[#1A2236]">Any SaaS settings:</strong> SaaS Mode is auto-disabled before the transfer starts.</li>
                <li><strong className="text-[#1A2236]">Agency-assigned dedicated email domains:</strong> If the original agency assigned a dedicated sending domain to the sub-account, it is removed during transfer. Sub-account-owned dedicated domains DO transfer.</li>
                <li><strong className="text-[#1A2236]">Dedicated IP for email (if any):</strong> Even if the domain transfers, the dedicated IP subscription is unassigned. Receiving agency must re-provision if needed.</li>
              </ul>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE STRIPE AND PAYMENT INTEGRATION QUESTION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Stripe, Authorize.Net, and other payment gateway connections are external auth connections. They will be DISCONNECTED during transfer. The receiving agency must reconnect Stripe (or the client's payment gateway) after the transfer. Any active Stripe subscriptions running from the sub-account must be cancelled BEFORE the transfer with reason "Transferring to another agency" or the transfer will error. This is the single most common transfer failure.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For related guidance on transitions and integration reconnection: <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">GHL migration mistakes →</Link>
            </p>

            {/* Section 6: Phone Numbers */}
            <h2 id="phone-numbers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Are Phone Numbers Handled During the Transfer?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Phone number continuity depends on which phone infrastructure both agencies are using: LeadConnector (LC) or Twilio.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Scenario</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Phone Numbers Transfer?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">A2P Registration Continues?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Future Charges Billed To</th>
                  </tr>
                </thead>
                <tbody>
                  {phoneScenarios.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.scenario}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.transfers}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.a2p}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.billedTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For A2P registration specifics when transferring agencies: <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P registration for agencies →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For Canadian A2P edge cases: <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-[#0E9BF0] hover:underline">A2P 10DLC Canadian numbers →</Link>
            </p>

            {/* Section 7: Restrictions */}
            <h2 id="restrictions" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Are the Restrictions That Prevent a Transfer?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GoHighLevel enforces four hard restrictions that prevent a sub-account transfer from being initiated at all. If any of these apply to your situation, the Transfer Sub-Account option will either not appear or will fail on submission.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Multi-location agency restriction:</strong> If either the sending or receiving agency is set up as a multi-location agency, the sub-account cannot be transferred. Multi-location is a separate structural setup that the transfer feature does not support.</li>
              <li><strong className="text-[#1A2236]">White-label sub-account restriction:</strong> Sub-accounts operating under white-label / SaaS Mode branding cannot be transferred. SaaS Mode is auto-disabled before any transfer takes place, but the underlying restriction remains for white-label sub-accounts.</li>
              <li><strong className="text-[#1A2236]">Active subscription restriction:</strong> Sub-accounts with active subscriptions must have those cancelled first, with the reason "Transferring to another agency." If not cancelled, the transfer will error and cannot complete.</li>
              <li><strong className="text-[#1A2236]">Partial transfer restriction:</strong> You cannot transfer only some data from a sub-account. It is an all-or-nothing transfer. You also cannot merge a sub-account into an existing sub-account at the receiving agency transferred sub-accounts always arrive as new, separate sub-accounts.</li>
            </ul>

            {/* CTA Button 5: After Restrictions */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚠️ Facing restrictions that prevent your transfer?</p>
              <p className="text-sm text-white/80 mb-4">Let us help you navigate the restrictions and find the right solution for your situation.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get Transfer Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 8: Bulk Transfer */}
            <h2 id="bulk-transfer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Does Bulk Transfer Work for Multiple Sub-Accounts?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Bulk Location Transfer is a feature introduced in 2025 that allows agencies to transfer multiple sub-accounts to another agency at once, rather than one at a time. Confirmed from GHL's official Bulk Transfer documentation (article 155000004570, modified December 11, 2025).
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Access:</strong> Agency Level → Sub-Accounts → Sub-Account Transfers → Bulk Transfer Subaccount button.</li>
              <li><strong className="text-[#1A2236]">Selection:</strong> Two options select specific sub-accounts from a list, or use Select All. Maximum 1,000 sub-accounts per bulk transfer request.</li>
              <li><strong className="text-[#1A2236]">Relationship Number:</strong> Same as single transfer input the receiving agency's Relationship Number.</li>
              <li><strong className="text-[#1A2236]">Confirmation:</strong> Enter your password. Confirm to send the bulk transfer request.</li>
              <li><strong className="text-[#1A2236]">Tracking:</strong> Under the Sent tab → Bulk Request sub-tab, click View Details to check the status of each sub-account in the transfer. Status values include Pending (awaiting acceptance), Rejected, and Completed (receiving agency accepted).</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Example</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                An agency is being acquired by another agency. Instead of transferring their 47 client sub-accounts one at a time (which would take hours), they use Bulk Transfer. They select all 47 sub-accounts, enter the acquiring agency's Relationship Number once, and submit as a single request. The acquiring agency receives 47 transfer requests in their Received tab, reviews them, and accepts them in a batch. All 47 sub-accounts appear in the new agency's dashboard within an hour.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For agencies considering a comparable full CRM migration rather than a sub-account transfer: <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">HubSpot to GoHighLevel migration guide →</Link>
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED HELP WITH A SUB-ACCOUNT TRANSFER</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles sub-account transfers for agencies both sender-side (pre-transfer audit, integration mapping, phone number handoff) and receiver-side (post-transfer integration reconnection, workflow validation, client onboarding).
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real GoHighLevel results and case studies from agency transitions: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For a specific situation, <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* CTA Button 6: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚠️ Don't risk a broken sub-account transfer.</p>
              <p className="text-sm text-white/80 mb-4">Get a free, no-obligation transfer assessment from experts who've handled 200+ GHL transitions.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Shield className="w-4 h-4" />
                Get a Free Assessment
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

            {/* CTA Button 7: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Sub-Account Transfers?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our transfer specialists directly. We've handled hundreds of sub-account transitions.</p>
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
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC for Canadian Numbers →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes Agencies Make →</Link>
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to transfer a GHL sub-account without breaking anything?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up manages sub-account transfers end-to-end. Pre-transfer audit, integration mapping, phone number and A2P handoff, post-transfer reconnection, and client validation so nothing breaks in the handover.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built, migrated, and transferred globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                All procedures in this guide are verified against GoHighLevel's official support portal documentation as of July 2026 (articles 155000002031, 155000004570, and 155000003465). GoHighLevel policies and interface details are set by HighLevel and can change always verify current steps in your Sub-Account Transfers dashboard before initiating.
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