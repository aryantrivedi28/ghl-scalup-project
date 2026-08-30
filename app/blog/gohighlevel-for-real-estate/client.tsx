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
  DollarSign,
  Calendar,
  Phone,
  GitBranch,
  Award,
  Star,
  RefreshCcw,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
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
  Timer,
  Trash2,
  Download,
  BarChart3,
  PieChart,
  Workflow,
  Globe,
  Database,
  Cloud,
  GitBranch as GitBranchIcon,
  Sparkles,
  GraduationCap,
  Clock,
  Shield,
  Users,
  Mail,
  Tag,
  GitMerge,
  TrendingUp,
  XCircle,
  Server,
  CreditCard,
  Smartphone,
  Layout,
  Mailbox,
  Headphones,
  FileQuestion,
  HelpCircle,
  Boxes,
  Combine,
  Link2,
  Webhook,
  RefreshCw as RefreshIcon,
  ListChecks,
  ClipboardList,
  Printer,
  Video,
  Ticket,
  TrendingDown,
  AlertTriangle
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelForRealEstateClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  // Handle scroll detection for active section
  useEffect(() => {
    const sections = [
      'why-use',
      'crm-look-like',
      'automate-lead-followup',
      'features-that-matter',
      'replace-follow-up-boss',
      'how-long-setup',
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
      q: "Is GoHighLevel good for real estate agents?",
      a: "Yes, particularly for agents who rely on fast follow-up and consistent nurture to convert leads. GoHighLevel automates the entire follow-up process from the first text within 15 seconds of a missed call to a 6-month nurture drip for leads who aren't ready yet. It replaces separate tools like Follow Up Boss, Mailchimp, Calendly, and a dedicated SMS platform for $97 to $297 per month. The agents who see the strongest results are those who invest in a proper setup with the right pipelines, automations, and lead source integrations configured from the start."
    },
    {
      q: "Can GoHighLevel integrate with Zillow and Realtor.com?",
      a: "Yes. GoHighLevel integrates with Zillow, Realtor.com, Facebook Lead Ads, and Google Ads via Zapier or native webhook. When a lead fills out a form on any of these platforms, their information flows into the GHL CRM within seconds and the automated follow-up sequence starts immediately. For agents who receive Zillow leads, this means an automated text message goes to the lead within 60 seconds of their form submission before they move on to the next agent listing."
    },
    {
      q: "What is a GoHighLevel real estate pipeline?",
      a: "A GoHighLevel real estate pipeline is a visual board showing every contact and which stage of your sales process they are in. Standard real estate pipeline stages include New Lead, Contacted, Appointment Set, Active Buyer or Seller, Under Contract, Closed, and Past Client. When a contact moves from one stage to the next, GHL triggers the relevant automated action a confirmation message, a reminder sequence, a review request, or a check-in campaign. Pipelines replace manual tracking in spreadsheets or sticky notes."
    },
    {
      q: "How does the GoHighLevel missed call text back work for real estate agents?",
      a: "GoHighLevel's missed call text back fires an automatic SMS to any caller whose call goes unanswered, within 15 seconds of the call ending. For real estate agents who are frequently on showings or in listing presentations, this feature recovers leads who would otherwise call the next agent on their list. The message can be customised to sound natural and include a booking link. GHL Scale Up's AI Voice Agent service extends this further an AI answers the call, qualifies the lead, and books the appointment without the agent picking up."
    },
    {
      q: "Can GoHighLevel replace Follow Up Boss for real estate?",
      a: "For most independent agents and small brokerages, yes. GoHighLevel covers everything Follow Up Boss provides contact management, pipeline tracking, automated follow-up, and task management plus adds native SMS, AI Voice Agent, funnel building, and reputation management that Follow Up Boss does not offer. GoHighLevel Starter at $97 per month compares favourably to Follow Up Boss at $69 per month while offering significantly more capability. If your brokerage mandates Follow Up Boss, many agents run GHL as the marketing automation layer alongside it."
    },
    {
      q: "What does a good GoHighLevel real estate Snapshot include?",
      a: "A well-built GoHighLevel real estate Snapshot includes a home valuation or buyer inquiry funnel, a buyer lead pipeline and a seller lead pipeline with stage-specific automations, a lead intake form for the website, a missed call text back sequence, a showing booking calendar with confirmation and reminder workflows, a 30-day nurture drip across SMS and email, a post-closing Google review request workflow, and a past client check-in sequence. Deploying this Snapshot to a new agent sub-account reduces onboarding from 40 hours to under 2 hours."
    },
    {
      q: "How much does it cost to set up GoHighLevel for real estate?",
      a: "GoHighLevel itself costs $97 per month for the Starter plan, which covers one agent or small team. Usage fees for SMS ($0.0079 per segment), email, and calls apply on top. Professional setup by a specialist agency like GHL Scale Up is a one-time project fee covering pipeline design, automation build, lead source integration, and testing. Most agents who invest in professional setup report recovering the cost within the first month through leads that would otherwise have been lost to slower follow-up."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-use', title: '1. Why Do Real Estate Agents Use GoHighLevel?' },
    { id: 'crm-look-like', title: '2. What Does a GoHighLevel Real Estate CRM Look Like?' },
    { id: 'automate-lead-followup', title: '3. How Does GoHighLevel Automate Lead Follow-Up for Agents?' },
    { id: 'features-that-matter', title: '4. What GHL Features Matter Most for Real Estate Businesses?' },
    { id: 'replace-follow-up-boss', title: '5. Can GoHighLevel Replace Follow Up Boss or kvCORE?' },
    { id: 'how-long-setup', title: '6. How Long Does a Real Estate GHL Setup Take?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const toolComparison = [
    { tool: 'Follow Up Boss / kvCORE / LionDesk (CRM)', cost: '$69 to $499/mo', ghlEquivalent: 'GHL CRM with unlimited contacts and pipelines' },
    { tool: 'Mailchimp / Constant Contact (email)', cost: '$20 to $100/mo', ghlEquivalent: 'GHL email campaigns and drip sequences' },
    { tool: 'Textedly / EZ Texting (SMS)', cost: '$25 to $50/mo', ghlEquivalent: 'GHL native SMS with workflow triggers' },
    { tool: 'Calendly / Acuity (booking)', cost: '$12 to $16/mo', ghlEquivalent: 'GHL calendar with automated showing reminders' },
    { tool: 'Birdeye / Podium (reviews)', cost: '$299 to $499/mo', ghlEquivalent: 'GHL reputation management and review requests' },
  ];

  const pipelineStages = [
    { stage: 'New Lead', meaning: 'Just entered, not yet contacted', automation: 'Instant SMS fires within 15 seconds. Email sends within 2 minutes.' },
    { stage: 'Contacted', meaning: 'First response received', automation: 'Follow-up task created for agent. 24-hour check-in SMS scheduled.' },
    { stage: 'Appointment Set', meaning: 'Showing or consultation booked', automation: 'Confirmation SMS sent. 24-hour reminder. 1-hour reminder.' },
    { stage: 'Active Buyer/Seller', meaning: 'Working with the agent', automation: 'Weekly check-in email or SMS. Listing alert automation.' },
    { stage: 'Under Contract', meaning: 'Offer accepted', automation: 'Milestone congratulations message. Document checklist sent.' },
    { stage: 'Closed', meaning: 'Deal complete', automation: 'Google review request sent 3 days after closing.' },
    { stage: 'Past Client', meaning: 'Transaction finished', automation: 'Quarterly check-in sequence. Annual home anniversary message.' },
  ];

  const featureComparison = [
    { feature: 'Contact CRM and pipeline', followUpBoss: 'Yes', kvCORE: 'Yes', ghl: 'Yes' },
    { feature: 'Automated email follow-up', followUpBoss: 'Yes', kvCORE: 'Yes', ghl: 'Yes' },
    { feature: 'Native SMS automation', followUpBoss: 'No (third party)', kvCORE: 'Yes', ghl: 'Yes' },
    { feature: 'AI Voice Agent', followUpBoss: 'No', kvCORE: 'No', ghl: 'Yes' },
    { feature: 'Booking calendar', followUpBoss: 'Limited', kvCORE: 'Yes', ghl: 'Yes' },
    { feature: 'Funnel and landing page builder', followUpBoss: 'No', kvCORE: 'Limited', ghl: 'Yes' },
    { feature: 'Reputation and reviews', followUpBoss: 'No', kvCORE: 'No', ghl: 'Yes' },
    { feature: 'White-label and agency model', followUpBoss: 'No', kvCORE: 'No', ghl: 'Yes' },
    { feature: 'Monthly cost (basic plan)', followUpBoss: '$69+/mo', kvCORE: '$499+/mo', ghl: '$97/mo' },
  ];

  const setupTimeline = [
    { type: 'Starter agent setup', included: 'CRM pipeline, missed call text back, basic follow-up sequence, booking calendar', timeline: '3 to 5 business days' },
    { type: 'Full agent system', included: 'All of starter plus lead source integrations, 30-day nurture drip, reputation workflow, reporting dashboard', timeline: '5 to 8 business days' },
    { type: 'Team or brokerage setup', included: 'Full system plus team member accounts, lead routing, reporting by agent, Snapshot for new agent onboarding', timeline: '8 to 14 business days' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel for Real Estate 2026</span>
        </div>
      </nav>

      {/* Hero Section - UPDATED TO WIDE PATTERN */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Real Estate</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel for Realtors</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Real Estate CRM</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel for Real Estate Agents:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide</span>
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

          {/* Introductory Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Most real estate agents don't have a lead problem. They have a follow-up problem.
            Zillow leads, Facebook ads, referrals, and open house sign-ups come in and then go cold
            because the agent was with a client, on a showing, or simply didn't respond fast enough.
            <strong className="text-white"> GHL Scale Up</strong> has built GoHighLevel systems for
            real estate agents and brokerages across the US, UK, and Australia. The pattern is always
            the same: the agents who win are not the ones with more leads. They are the ones with faster,
            more consistent follow-up.
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
                        {activeId === item.id && <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />}
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
                5+ years GHL experience · 200+ systems built globally including real estate CRM and automation builds across the US, UK, and Australia.
                All feature details verified against GoHighLevel's official documentation as of May 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Linkedin className="w-3 h-3" /> LinkedIn</a>
                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Twitter className="w-3 h-3" /> X</a>
                <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"><Copy className="w-3 h-3" /> Copy link</button>
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
                GoHighLevel is an all-in-one CRM and marketing automation platform that real estate agents use to capture leads, follow up automatically, book showings, and collect reviews.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It replaces separate tools like Follow Up Boss, Mailchimp, Calendly, and Textedly for <strong className="text-[#0E9BF0]">$97 to $297 per month</strong>.
                Leads contacted within 5 minutes are 21 times more likely to convert. GoHighLevel closes that gap completely with 15-second SMS responses and automated nurture sequences.
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Your Real Estate Setup
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
                <strong className="text-white">🏠 Ready to stop losing real estate leads to slow follow-up?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                We build real estate systems that actually convert — CRM setup, follow-up automation, showing booking, lead source integrations, and review collection.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Why Use */}
            <h2 id="why-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Do Real Estate Agents Use GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Real estate runs on speed and follow-up. A buyer fills out a Zillow form and also submits on three other agent websites.
              The agent who responds first and keeps following up wins the client. Most agents lose that race because they are managing
              leads manually across text messages, email, and a CRM that doesn't talk to any of it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel pulls every lead source into one system, fires an automated response within seconds of a new inquiry,
              and keeps following up across SMS, email, and voice without the agent lifting a finger. The agent steps in when the
              lead is warm and ready to talk, not at the cold outreach stage.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tools real estate agents replace with GHL</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical cost per month</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {toolComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.tool}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cost}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghlEquivalent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE MATH</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A real estate agent running Follow Up Boss, Mailchimp, Calendly, and a basic SMS tool pays $125 to $665 per month
                for tools that don't connect to each other. GoHighLevel Starter at $97/month replaces all of them in one dashboard.
                For a small team or solo agent, the monthly saving typically covers the platform cost within the first 30 days.
              </p>
            </div>

            {/* Section 2: CRM Look Like */}
            <h2 id="crm-look-like" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Does a GoHighLevel Real Estate CRM Look Like?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's CRM is contact-centric. Every lead, buyer, seller, or past client gets their own record showing every
              conversation, email, SMS, call, and note in one timeline. The <strong className="text-[#0E9BF0]">GoHighLevel CRM setup</strong>
              for real estate is built around visual pipelines that mirror the actual stages of a real estate transaction.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Pipeline stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Automated action triggered</th>
                  </tr>
                </thead>
                <tbody>
                  {pipelineStages.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.automation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Every time a contact moves between stages, GHL triggers the next automation automatically. The agent never has to
              remember to send a follow-up. The system handles it. For agents managing 50 to 200 active leads at any time, this
              is the operational difference between leads that close and leads that go to a competitor.
            </p>

            {/* Section 3: Automate Lead Follow-Up */}
            <h2 id="automate-lead-followup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Does GoHighLevel Automate Lead Follow-Up for Real Estate Agents?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Speed to lead is one of the most documented factors in real estate conversion. Leads contacted within 5 minutes are
              21 times more likely to convert than leads contacted 30 minutes later. Most agents contact their leads within hours,
              not minutes. GoHighLevel closes that gap completely.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">What happens when a lead fills out a form on your website or Facebook ad:</p>
              <ol className="space-y-1 text-sm text-[#5C6880] list-decimal list-inside">
                <li>GHL receives the lead data within seconds of form submission.</li>
                <li>An SMS fires immediately: 'Hey [first name], thanks for reaching out. What are you looking for? I'll get back to you shortly.'</li>
                <li>An email sends within 2 minutes with more detail about your services and a booking link.</li>
                <li>If the lead doesn't reply in 2 hours, a second SMS goes out automatically.</li>
                <li>If no reply in 24 hours, the lead enters a 7-day nurture drip across SMS and email.</li>
                <li>If the lead replies at any point, the automation pauses and routes to the agent's inbox.</li>
              </ol>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Missed call text back: the most impactful single setup for agents</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                When a call comes in and the agent doesn't answer because they're on a showing, with a client, or in a listing presentation,
                GHL fires an automatic SMS within 15 seconds: 'Hi, sorry I just missed your call. What can I help you with?' The lead responds
                while they are still on their phone, before they call the next agent on their list. This is one of the three-minute setups that
                pays for the GHL subscription in the first week for most agents.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full automation setup guide:
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            {/* Section 4: Features That Matter */}
            <h2 id="features-that-matter" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What GHL Features Matter Most for Real Estate Businesses?
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Booking calendar and showing scheduler</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">GHL's calendar and booking setup lets leads book showings or consultations directly from your SMS or email without calling. You set your available times, buffer between appointments, and confirmation sequences. GHL sends the confirmation, a 24-hour reminder, and a 1-hour reminder automatically. No-shows drop significantly when reminders are automated.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-[#F8D000]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Reputation management and Google reviews</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">Three days after you mark a deal as Closed, a personalised text goes to the client with a direct link to your Google review page. For agents doing 20 to 40 transactions per year, this one workflow can add 15 to 30 new Google reviews annually without any manual action.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCcw className="w-5 h-5 text-[#25C97D]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Past client reactivation</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">GHL can send a simple quarterly check-in text or an annual home anniversary message to every past client automatically. These messages reactivate referrals that would otherwise never happen because the agent simply didn't stay in touch.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Long-term lead nurture</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">Real estate leads rarely convert in week one. GHL can run a 6-month nurture sequence across email and SMS with no agent involvement until the lead responds and signals they are ready to move forward.</p>
              </div>
            </div>

            {/* Section 5: Replace Follow Up Boss */}
            <h2 id="replace-follow-up-boss" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Can GoHighLevel Replace Follow Up Boss or kvCORE?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For most independent agents and small brokerages, yes. GoHighLevel covers contact management, pipeline tracking,
              task management, automated follow-up across SMS, email, and voice, booking, and reputation management. The features
              that Follow Up Boss and kvCORE provide are all present in GHL, and GHL adds capabilities those platforms don't have
              native SMS, AI Voice Agent, funnel building, and white-labelling.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Follow Up Boss</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">kvCORE</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.followUpBoss}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.kvCORE}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-1">WHEN TO KEEP YOUR EXISTING CRM:</p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If your brokerage mandates Follow Up Boss or kvCORE, keep it as your primary transaction CRM. GHL runs effectively as the
                marketing automation layer alongside your primary platform handling lead capture, multi-channel nurture, booking, and reputation
                while your mandated CRM handles the transaction records. Many agents run both.
              </p>
            </div>

            {/* CTA 2 - After Replace Follow Up Boss */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🔄 Not sure if GoHighLevel can replace your current real estate CRM?</p>
              <p className="text-sm text-white/80 mb-4">We'll audit your current tools and show you exactly what GHL can replace and what you should keep.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Search className="w-4 h-4" />
                Get a Tool Stack Review
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 6: How Long Setup */}
            <h2 id="how-long-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Long Does a Real Estate GHL Setup Take?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A complete real estate GHL setup pipelines, lead capture forms, follow-up workflows, booking calendar, reputation automation,
              and lead source integrations typically takes 5 to 10 business days with an expert. A self-built setup takes most agents
              4 to 8 weeks, and frequently results in gaps in the automation that only become visible when live leads start falling through.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Setup type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What's included</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Estimated timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {setupTimeline.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.included}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR REAL ESTATE BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                The setup that takes longest is not the technical configuration. It is defining the right pipeline stages, nurture
                sequence timing, and lead routing rules for your specific market and client type. Agents who skip this planning phase
                and start clicking buttons typically rebuild their system 2 to 3 times before it works the way they want it to.
                <strong className="text-white"> GHL Scale Up starts every real estate build with a discovery session</strong> that maps
                the agent's sales process before configuring anything in the platform.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">READY TO STOP LOSING REAL ESTATE LEADS TO SLOW FOLLOW-UP?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up builds real estate systems that actually convert. CRM setup, follow-up automation, showing booking,
                lead source integrations, and review collection all configured and tested before handover. 200+ builds delivered.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free strategy call at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                Explore our <Link href="/marketing/lead-generation" className="text-[#0E9BF0] hover:underline">lead generation service for real estate</Link> at ghlscaleup.com/marketing/lead-generation full funnel from ad traffic to booked call.
              </p>
            </div>

            {/* CTA 3 - Before FAQ */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🏠 Want to stop losing real estate leads to slow follow-up?</p>
              <p className="text-sm text-white/80 mb-4">We build real estate systems that actually convert — CRM setup, follow-up automation, showing booking, lead source integrations, and review collection.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Rocket className="w-4 h-4" />
                Get Your Real Estate Setup
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions About GoHighLevel for Real Estate
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
                <strong className="text-white">Still have questions about GoHighLevel for your real estate business?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our real estate GHL specialists directly. We've built systems for agents, teams, and brokerages of all sizes.
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
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create and Use a GoHighLevel Snapshot →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to stop losing real estate leads to slow follow-up?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds real estate systems that actually convert. CRM setup, follow-up automation, showing booking,
                  lead source integrations, and review collection all configured and tested before handover. 200+ builds delivered.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
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