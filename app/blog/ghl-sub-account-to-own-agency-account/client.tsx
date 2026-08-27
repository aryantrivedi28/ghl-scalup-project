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
  Star,
  AlertTriangle,
  HelpCircle,
  Rocket,
  Target,
  BarChart3,
  HeartHandshake,
  Shield,
  MessageCircle,
  Phone,
  Search,
  Trophy,
  Users,
  DollarSign,
  Briefcase,
  Filter,
  XCircle,
  Facebook,
  AlertCircle,
  Clock,
  Info,
  Building2,
  Globe,
  Database,
  Layers,
  Settings,
  Cloud,
  UserCheck,
  UserX,
  Compass,
  FileCheck,
  CheckCircle
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GHLSubAccountToOwnAccountClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  // Handle scroll detection for active section
  useEffect(() => {
    const sections = [
      'why-own-account',
      'what-is-eject',
      'how-to-move',
      'what-transfers',
      'what-to-setup',
      'agency-refuses',
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
      q: "Can I move my GHL sub-account to my own account without the agency's help?",
      a: "Not through the official eject or transfer process those are initiated by the agency. However, if you have admin access inside your sub-account, you can export your contacts as a CSV, document your workflows and pipelines, and then sign up for your own GHL account at gohighlevel.com and rebuild. This is slower but does not require the agency's cooperation. If the situation is urgent (agency unresponsive or closing), contact GHL support at help.gohighlevel.com with evidence of your ownership and they may be able to assist."
    },
    {
      q: "What happens to my data when I eject from a GHL sub-account?",
      a: "Most of your data transfers: contacts and their full conversation history, funnels, websites, workflows (in Live state), pipeline opportunities, membership and course content, users assigned only to your sub-account, and your sub-account API keys. What does not transfer: all third-party authentication connections (Google, Facebook, Instagram, Quickbooks these must be reconnected manually), phone numbers (may need re-purchasing), SaaS Mode settings (must be reconfigured), and Smartlists. Verify all critical data within 24 hours of the transfer completing."
    },
    {
      q: "How much does it cost to get my own GHL account?",
      a: "A new GoHighLevel agency account starts at $97 per month for the Starter plan (up to 3 sub-accounts) or $297 per month for the Unlimited plan (unlimited sub-accounts, white-label branding). If you are moving from a sub-account to manage your own business only, the Starter plan is sufficient. If you plan to create sub-accounts for your own clients or add white-label branding, start on Unlimited."
    },
    {
      q: "Will my automations still work after I move to my own GHL account?",
      a: "Automations transfer in Live state meaning they are active immediately in the new account. However, any automation that references a third-party integration (Google, Facebook, Stripe, etc.) will break because those connections are reset during the transfer. Audit every active workflow within 24 hours of the transfer. Reconnect all integrations and test workflows with a real contact before relying on them for live leads."
    },
    {
      q: "Can I remove my agency's access from my GHL sub-account without moving?",
      a: "No. The agency account owner has full visibility of all sub-accounts by default and there is no way to block agency access while staying inside their account structure. If you want to remove agency access, you need to move your data to your own independent account through the eject or transfer process. This is a frequently requested feature in GHL's Ideas forum but it is not currently available."
    },
    {
      q: "Can I transfer my phone number when I move to my own GHL account?",
      a: "Phone numbers are not guaranteed to transfer when ejecting or moving a sub-account. GHL's official documentation states that phone numbers may need to be re-purchased under the new agency account. Before the move, note all phone numbers in your sub-account. After the transfer, check whether they are present. If not, purchase new numbers in your new account's Settings Phone Numbers section and update any workflows or funnels that reference the old numbers."
    },
    {
      q: "How long does it take to move from a GHL sub-account to my own agency account?",
      a: "If your current agency cooperates with an eject, the technical process takes a few hours from initiation to confirmation. You receive the signup email quickly and the data moves as soon as you create your new account. Reconnecting integrations and auditing workflows typically takes half a day to a full day. If you are starting a completely fresh account without a transfer, rebuilding a complete system from scratch takes 1 to 3 weeks depending on complexity or 5 to 7 business days if you use a professional setup service."
    },
    {
      q: "My agency is refusing to eject my sub-account. What are my options?",
      a: "First, try reframing the request the agency earns 40% recurring affiliate commission when they eject you to a new agency account, so it is financially beneficial for them. If they still refuse, contact GHL support at help.gohighlevel.com with documentation of your business and your admin access to the sub-account. If the agency is unresponsive or has closed, export your contacts immediately (Contacts Export All) and document your workflows before the account goes offline. Starting fresh with a new GHL account is often the only path forward when the original agency has disappeared."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-own-account', title: '1. Why Would You Want Your Own GHL Account Instead of a Sub-Account?' },
    { id: 'what-is-eject', title: '2. What Is the GHL Eject Feature and How Does It Work?' },
    { id: 'how-to-move', title: '3. How to Move from a GHL Sub-Account to Your Own Agency Account (Step-by-Step)' },
    { id: 'what-transfers', title: '4. What Transfers When You Eject or Move a GHL Sub-Account?' },
    { id: 'what-to-setup', title: '5. What Do You Need to Set Up After You Have Your Own Account?' },
    { id: 'agency-refuses', title: '6. What If Your Agency Refuses to Eject or Transfer Your Sub-Account?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const transfersData = [
    { item: 'All contacts with conversations, history, and notes', transfers: true },
    { item: 'All funnels and websites', transfers: true },
    { item: 'All automation workflows (transferred in Live state)', transfers: true },
    { item: 'Pipeline stages and opportunity data', transfers: true },
    { item: 'GHL calendars (external integrations disconnected)', transfers: true },
    { item: 'Membership sites, course content, and communities', transfers: true },
    { item: 'All users assigned only to this sub-account', transfers: true },
    { item: 'Sub-account API keys', transfers: true },
    { item: 'Active workflow enrollments for contacts', transfers: true },
    { item: 'All third-party auth connections (Google, Facebook, Quickbooks)', transfers: false, note: 'must be reconnected' },
    { item: 'Phone numbers', transfers: false, note: 'may need to be re-purchased' },
    { item: 'SaaS Mode settings', transfers: false, note: 'disabled before transfer, must be reconfigured' },
    { item: 'Smartlists', transfers: false, note: 'not transferred currently' },
    { item: 'Any agency-level settings from the old account', transfers: false },
    { item: 'Stripe accounts associated with SaaS payments', transfers: false },
    { item: 'Multi-location sub-accounts', transfers: false, note: 'cannot be transferred' },
  ];

  const whatToSetup = [
    { title: 'Email sending domain', desc: 'Configure DKIM, SPF, and DMARC for your sending domain in Settings Email Services. Without this, emails sent from your new account will have poor deliverability.' },
    { title: 'Phone number and A2P 10DLC', desc: 'If your phone number did not transfer or you are in the US, you need to purchase a new number and complete A2P 10DLC carrier registration before sending SMS at volume.' },
    { title: 'Third-party integrations', desc: 'Reconnect Google, Facebook, Instagram, and any other platforms that were disconnected during the transfer.' },
    { title: 'Team member access', desc: 'Reassign team member roles and permissions at the agency level in your new account. Agency-level access is different from sub-account-level access.' },
    { title: 'Workflow audit', desc: 'Check every workflow. Confirm triggers are firing correctly and that any integrations referenced in workflow actions are reconnected.' },
    { title: 'Pipeline review', desc: 'Confirm pipeline stages transferred and that any stage-specific automations are working as expected.' },
  ];

  const optionsList = [
    { route: 'Eject to a brand new agency account (most common)', steps: ['Contact your current agency and request an eject', 'Accept the GHL email invitation', 'Log in and confirm your data transferred correctly', 'Reconnect your third-party integrations', 'Set up your agency-level settings'] },
    { route: 'Transfer to an existing agency account', steps: ['Agency selects Transfer to an Existing Agency', 'Enter your existing agency\'s Relationship Number', 'Approve the transfer request from your account'] },
    { route: 'Start a fresh GHL account', steps: ['Sign up directly at gohighlevel.com for a $97/mo or $297/mo account', 'Export what you can (contacts as CSV, document workflows)', 'Rebuild in the new account (GHL Scale Up can handle this)'] },
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
          <span className="text-[#1A2236] font-medium">GHL Sub-Account to Own Agency Account 2026</span>
        </div>
      </nav>

      {/* Hero Section - WIDE */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Sub-Account</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Agency Setup</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Sub-Account Transfer</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Move from a GHL Sub-Account to<br />
            <span className="text-[#F8D000]">Your Own Agency Account (2026)</span>
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

          {/* Hero CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Your Own Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#what-transfers"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See What Transfers
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Introductory Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            If you have been running your business inside a GoHighLevel sub-account managed by an agency 
            and you want to take full ownership of your own GHL account, you are not stuck. There is a 
            clear process for this. <strong className="text-white"> GHL Scale Up</strong> has helped dozens 
            of businesses make this exact move from sub-account to fully independent agency account.
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
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built globally including new agency account setups for businesses 
                moving from sub-accounts to independent ownership. All process steps verified against GoHighLevel's official 
                documentation as of May 2026.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Yes, you can move from a GHL sub-account to your own independent GoHighLevel agency account.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                There are three ways to do it: (1) ask your current agency to eject your sub-account to a new agency account, 
                (2) ask them to transfer it to an existing agency account you already own, or (3) start a brand new GHL agency 
                account and rebuild. The eject route preserves most of your data. The fresh start gives you a clean slate. 
                Most of your data (contacts, funnels, workflows, pipelines) transfers. Phone numbers, third-party integrations, 
                and SaaS settings do not. The process typically takes a few hours to a few days depending on which route you take.
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Help Moving Your Account
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
                <strong className="text-white">Ready to move to your own GHL account but not sure where to start?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up helps businesses transition from sub-accounts to independent agency accounts with zero data loss.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Why Own Account */}
            <h2 id="why-own-account" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Would You Want Your Own GHL Account Instead of a Sub-Account?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Living inside someone else's GHL sub-account is fine when you are getting started. But there are good reasons 
              to want your own account as your business grows.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-3 bg-white border border-[#DDE1E9] rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You want to stop paying agency fees.</strong> Many agencies charge a monthly management fee on top of the GHL subscription cost. Moving to your own $97/month account removes that overhead.</p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#DDE1E9] rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You want full control.</strong> In a sub-account, the agency can see your data, limit your features, and remove your access at any time. In your own agency account, you are the owner.</p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#DDE1E9] rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You want to become an agency yourself.</strong> Starting your own GHL account lets you create sub-accounts for your own clients.</p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#DDE1E9] rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You want to add white-labelling or SaaS Mode.</strong> These features require your own agency account at the Unlimited ($297/mo) or Agency Pro ($497/mo) tier.</p>
              </div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a broader understanding of how sub-accounts and agency accounts work: 
              <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
            </p>

            {/* Section 2: What Is Eject */}
            <h2 id="what-is-eject" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Is the GHL Eject Feature and How Does It Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The eject feature is GHL's official built-in tool for converting a sub-account into its own independent agency account. 
              It was added by GoHighLevel specifically to handle the case where a business inside a sub-account wants to graduate to 
              their own standalone account.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">HOW THE EJECT WORKS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The agency owner goes to Agency Level → Sub-Accounts → and selects the sub-account to eject. They choose 'Eject to a New Agency' 
                and nominate one user from the sub-account to become the new agency owner. That nominated user receives an email with a signup 
                link for a new $97/month GoHighLevel account. When they sign up, the sub-account data is transferred into the new agency. 
                The original agency earns a 40% recurring affiliate commission on all future subscription renewals for that account.
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                <strong className="text-[#1A2236]">Important:</strong> The eject must be initiated by the agency. You cannot eject yourself 
                from inside the sub-account. If your agency is cooperative, this is the fastest and cleanest route.
              </p>
            </div>

            {/* Section 3: How to Move */}
            <h2 id="how-to-move" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Move from a GHL Sub-Account to Your Own Agency Account (Step-by-Step)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are three routes depending on your situation. Follow the one that matches yours.
            </p>

            {/* Route A */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">A</div>
                <h3 className="text-base font-bold text-[#1A2236]">Eject to a brand new agency account (most common)</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">Use this route if you do not already have a GHL agency account and you want to start fresh with your sub-account data carried over.</p>
              <ol className="space-y-2 text-sm text-[#5C6880] list-decimal list-inside ml-2">
                <li><strong className="text-[#1A2236]">Contact your current agency and request an eject</strong> Ask them to initiate an 'Eject to New Agency' transfer. They will need to nominate you as the new agency owner.</li>
                <li><strong className="text-[#1A2236]">Accept the GHL email invitation</strong> You will receive an email from GoHighLevel with a signup link for a new $97/month agency account.</li>
                <li><strong className="text-[#1A2236]">Log in and confirm your data transferred correctly</strong> Check that your contacts, funnels, workflows, pipelines, and users are all present.</li>
                <li><strong className="text-[#1A2236]">Reconnect your third-party integrations</strong> All external connections are disconnected during the transfer. Reconnect each integration.</li>
                <li><strong className="text-[#1A2236]">Set up your agency-level settings</strong> Configure your agency profile, billing, team members, and explore the agency dashboard.</li>
              </ol>
            </div>

            {/* Route B */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#25C97D] text-white flex items-center justify-center text-xs font-bold">B</div>
                <h3 className="text-base font-bold text-[#1A2236]">Transfer to an existing agency account</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-2">Use this if you already have a GHL agency account and you want to pull your sub-account data into it.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed">The agency selects 'Transfer to an Existing Agency' instead of eject. They enter your existing agency's Relationship Number (found in your GHL account under Agency Settings). The transfer request is sent and you approve it from your account.</p>
            </div>

            {/* Route C */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#F8D000] text-[#0B1421] flex items-center justify-center text-xs font-bold">C</div>
                <h3 className="text-base font-bold text-[#1A2236]">Start a fresh GHL account</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-2">Use this if your agency will not cooperate or has already closed.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed">Sign up directly at gohighlevel.com for a $97/month Starter account or $297/month Unlimited account. Your data from the old sub-account does NOT transfer automatically. You will need to export what you can (contacts as CSV, document your workflows) and rebuild in the new account.</p>
              <p className="text-sm text-[#0E9BF0] leading-relaxed mt-2">→ GHL Scale Up can handle this rebuild for you: <Link href="/services/agency-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel agency setup service →</Link></p>
            </div>

            {/* CTA 2 - After How to Move */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🚀 Not sure which route is right for you?</p>
              <p className="text-sm text-white/80 mb-4">Let our team assess your situation and recommend the best path forward.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Compass className="w-4 h-4" />
                Get a Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 4: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Transfers When You Eject or Move a GHL Sub-Account?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the question everyone asks before committing to the move. Here is the full confirmed list from GHL's official documentation.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What TRANSFERS with your sub-account</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What does NOT transfer</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: Math.max(transfersData.filter(t => t.transfers).length, transfersData.filter(t => !t.transfers).length) }).map((_, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#25C97D]">
                        {transfersData.filter(t => t.transfers)[idx]?.item || ''}
                        {transfersData.filter(t => t.transfers)[idx]?.note && <span className="text-[#5C6880] text-xs block">({transfersData.filter(t => t.transfers)[idx]?.note})</span>}
                      </td>
                      <td className="py-3 px-3 text-[#DC3545]">
                        {transfersData.filter(t => !t.transfers)[idx]?.item || ''}
                        {transfersData.filter(t => !t.transfers)[idx]?.note && <span className="text-[#5C6880] text-xs block">({transfersData.filter(t => !t.transfers)[idx]?.note})</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">CRITICAL NOTE ON WORKFLOWS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Workflows transfer but check each one after the move. According to GHL's official transfer documentation, all automations 
                transfer in Live state meaning they are active immediately. This is good for business continuity but means you should audit 
                every workflow in the first 24 hours to confirm triggers and actions are working correctly in the new account context.
              </p>
            </div>

            {/* Section 5: What to Setup */}
            <h2 id="what-to-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Do You Need to Set Up After You Have Your Own Account?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Getting your own account is step one. Getting it working correctly is step two. Here is what most people need to configure 
              after the transfer is complete, especially if this is their first time managing a GHL account independently.
            </p>

            <div className="space-y-3 mb-6">
              {whatToSetup.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-sm font-bold text-[#1A2236] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                If you want to add automation or AI features to your new account from day one: 
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                To accelerate setup using a pre-built system: 
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline ml-1">How to Create a GoHighLevel Snapshot →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For white-label branding on your new account: 
                <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label Setup Guide →</Link>
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">SKIP THE SETUP LEARNING CURVE</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Most people who have just moved to their own GHL account spend 4 to 8 weeks figuring out all the settings. 
                GHL Scale Up configures new GoHighLevel agency accounts from scratch: CRM pipelines, workflow automation, 
                email domain setup, and team permissions correctly from day one.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free 30-minute call at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                See our <Link href="/services/agency-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel agency setup service at ghlscaleup.com/services/agency-setup →</Link>
              </p>
            </div>

            {/* Section 6: Agency Refuses */}
            <h2 id="agency-refuses" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What If Your Agency Refuses to Eject or Transfer Your Sub-Account?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is an uncomfortable situation but it happens. Here are your options in order of practicality.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236] mb-1">Ask again with the right framing</h3>
                    <p className="text-sm text-[#5C6880] leading-relaxed">Explain that the agency earns 40% recurring affiliate commission when they eject you. It is financially in their interest to cooperate.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236] mb-1">Contact GHL support directly</h3>
                    <p className="text-sm text-[#5C6880] leading-relaxed">Go to help.gohighlevel.com and open a support ticket explaining your situation with documentation of ownership.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236] mb-1">Export what you can</h3>
                    <p className="text-sm text-[#5C6880] leading-relaxed">Export your contacts as a CSV immediately. Document your workflow logic, pipeline stages, and funnel structures by screenshotting them.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236] mb-1">Start a fresh account</h3>
                    <p className="text-sm text-[#5C6880] leading-relaxed">Sign up for a new GHL account at gohighlevel.com and rebuild. GHL Scale Up has helped businesses do this complete rebuild in under 2 weeks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">IF YOUR AGENCY HAS CLOSED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If your agency has gone out of business and their GHL account has been cancelled, sub-account access is lost. 
                This is one of the most documented complaints in GHL's community. If you are still inside an active sub-account 
                for an agency you think may be closing, act now: export your contacts, document your workflows, and request an 
                eject or transfer while the account is still active. Do not wait until the account is cancelled.
              </p>
            </div>

            {/* CTA 3 - After Agency Refuses */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">⚠️ Agency refusing to cooperate?</p>
              <p className="text-sm text-white/80 mb-4">We can help you transition to your own account with minimal disruption to your business.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Shield className="w-4 h-4" />
                Get Help Now
                <ArrowRight className="w-4 h-4" />
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

            {/* CTA 4 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about moving to your own GHL account?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We've helped dozens of businesses make this transition successfully.
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

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-white-label" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label: How It Works and Full Setup Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/agency-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Agency Setup Service →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Just got your own GHL account and need help setting it up?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up sets up new agency accounts from scratch. CRM pipelines, workflow automation, email domain setup, 
                  team permissions, and full account configuration all done in 5 to 7 business days.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
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