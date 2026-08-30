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
  CalendarDays as CalendarDaysIcon,
  Clock as ClockIcon,
  CalendarClock as CalendarClockIcon,
  Lightbulb,
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
  Database,
  Cloud,
  GitBranch,
  Sparkles,
  GraduationCap,
  Clock,
  Shield,
  Users,
  Calendar,
  Mail,
  Tag,
  GitMerge,
  DollarSign,
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
  RefreshCw,
  ListChecks,
  ClipboardList,
  Printer,
  Video,
  Ticket,
  TrendingDown,
  AlertTriangle
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelForNonprofitsClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'nonprofit-plan',
      'tools-replaces',
      'donor-management',
      'fundraising-automation',
      'volunteer-coordination',
      'security',
      'limitations',
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
      q: "Does GoHighLevel work for nonprofits?",
      a: "Yes, with realistic expectations. GoHighLevel works well for nonprofits that need to consolidate donor CRM, email and SMS campaigns, recurring donation processing via Stripe, volunteer scheduling, and automated thank-you sequences into one platform. It does not replace dedicated nonprofit software for grant management, IRS reporting integrations, peer-to-peer fundraising, or complex pledge tracking. For nonprofits currently managing donor communication across 5 to 7 disconnected tools, GHL offers meaningful consolidation at $97 to $297 per month."
    },
    {
      q: "Does GoHighLevel offer a nonprofit discount?",
      a: "As of the date of this guide, GoHighLevel does not offer a dedicated nonprofit pricing plan or standard nonprofit discount. You should verify this directly with GoHighLevel's current pricing page, as policies can change. Stripe, which GoHighLevel uses for payment processing, does offer discounted transaction rates for verified 501(c)(3) organisations in the US verify current rates and eligibility at stripe.com directly, as these can also change."
    },
    {
      q: "Can you collect recurring donations through GoHighLevel?",
      a: "Yes. GoHighLevel uses Stripe for payment processing. When building a donation form in GHL, you can enable recurring payment options, allowing donors to choose monthly, quarterly, or annual giving. Stripe processes the recurring charges automatically on the donor's chosen frequency. If a payment fails, you can configure a GHL workflow to automatically send the donor an SMS or email asking them to update their payment details. Verify current Stripe processing fees and recurring billing capabilities at stripe.com."
    },
    {
      q: "How does GoHighLevel handle tax receipts for donations?",
      a: "You can configure a GHL email workflow that fires automatically when a donation is processed, including the donor's name, donation amount, and date. For US organisations, the IRS requires a written acknowledgment for donations of $250 or more that includes specific language about whether goods or services were provided in exchange for the donation. Consult your accountant to ensure your GHL email receipt template includes the correct IRS-required language and meets any state-specific requirements for your organisation. GHL's workflow system can deliver the receipt immediately after payment confirmation."
    },
    {
      q: "Can GoHighLevel replace Bloomerang or DonorPerfect for nonprofits?",
      a: "For some organisations, yes and for others, no. GHL can replace Bloomerang or DonorPerfect for the CRM, donor communication, and campaign automation functions. It cannot replace the grant management, pledge tracking, IRS reporting integrations, and donor advised fund management that dedicated nonprofit CRMs provide at higher tiers. Nonprofits that primarily need a better communication system and donor contact database may find GHL sufficient. Nonprofits that depend heavily on grant reporting or complex donor stewardship workflows should evaluate whether GHL plus a lightweight nonprofit CRM makes sense, rather than a full replacement."
    },
    {
      q: "Is GoHighLevel secure for storing donor data?",
      a: "Based on available information from June 2026, GoHighLevel holds SOC 2 Type II certification and ISO 27001 certification. Verify these certifications are current at GoHighLevel's Trust Center or security documentation page. Donor contact information, communication history, and donation amounts are appropriate to store in GHL. Full Social Security Numbers and government ID numbers should not be stored in GHL contact fields. If your organisation handles Protected Health Information, consult your compliance officer before using GHL, regardless of whether you subscribe to the HIPAA add-on."
    },
    {
      q: "Can GHL Scale Up set up GoHighLevel for a nonprofit organisation?",
      a: "Yes. GHL Scale Up builds GoHighLevel systems for nonprofits and community organisations including donor CRM pipeline configuration, recurring donation form setup, automated thank-you and tax receipt sequences, volunteer coordination workflows, and Giving Tuesday campaign funnels. Book a free strategy call at ghlscaleup.com/contact to discuss your organisation's specific needs."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'nonprofit-plan', title: '1. Does GoHighLevel have a nonprofit plan or discount?' },
    { id: 'tools-replaces', title: '2. What tools does GoHighLevel replace for nonprofits?' },
    { id: 'donor-management', title: '3. How does donor management work in GoHighLevel?' },
    { id: 'fundraising-automation', title: '4. How do nonprofits automate donations and fundraising in GHL?' },
    { id: 'volunteer-coordination', title: '5. How does volunteer coordination work in GoHighLevel?' },
    { id: 'security', title: '6. Is GoHighLevel secure enough for donor data?' },
    { id: 'limitations', title: '7. What does GoHighLevel not do well for nonprofits?' },
    { id: 'faq', title: '8. Frequently asked questions' }
  ];

  const toolsReplaces = [
    { category: 'Donor CRM', commonTools: 'Bloomerang, DonorPerfect, Little Green Light', ghlEquivalent: 'GHL contact CRM with pipelines, tags, custom fields, and full conversation history', notReplace: 'Grant management, pledge tracking, IRS reporting integrations, and deductibility tracking specific to nonprofit accounting' },
    { category: 'Email marketing', commonTools: 'Mailchimp, Constant Contact, HubSpot', ghlEquivalent: 'GHL email campaigns, drip sequences, and donor newsletters', notReplace: 'None significant GHL covers standard nonprofit email needs' },
    { category: 'SMS marketing', commonTools: 'Twilio, SimpleTexting', ghlEquivalent: 'GHL native 2-way SMS A2P 10DLC registration required for US sending', notReplace: 'None GHL SMS is fully capable for donor communication' },
    { category: 'Donation forms', commonTools: 'Donorbox, PayPal Giving Fund, Classy', ghlEquivalent: 'GHL forms connected to Stripe with one-time and recurring donation options', notReplace: 'Peer-to-peer fundraising, matching gift integration, and name-your-price tiers require custom configuration or Zapier integration' },
    { category: 'Event registration', commonTools: 'Eventbrite, GiveSmart', ghlEquivalent: 'GHL booking calendar, event funnels, and RSVP forms', notReplace: 'Complex ticketing, seat management, and event-specific payment flows are not natively as developed as dedicated event platforms' },
    { category: 'Volunteer scheduling', commonTools: 'VolunteerHub, SignUpGenius', ghlEquivalent: 'GHL calendar, tags for volunteer roles, automated shift reminders', notReplace: 'Volunteer hour logging, background check integration, and volunteer portal functionality are not native to GHL' },
    { category: 'Automation', commonTools: 'Zapier, Make', ghlEquivalent: 'GHL native workflow builder no third-party automation tool required for most donor flows', notReplace: 'None GHL automation covers all standard nonprofit communication workflows' }
  ];

  const donorStages = [
    { stage: 'New Enquiry', meaning: 'Someone submitted a form, attended an event, or signed up for a newsletter', action: 'Welcome email sequence fires automatically. Tagged as "prospect donor."' },
    { stage: 'First Donation Made', meaning: 'Contact completed a one-time donation', action: 'Immediate thank-you email with tax receipt language. 30-day follow-up sequence begins.' },
    { stage: 'Recurring Donor', meaning: 'Contact set up a monthly donation', action: 'Anniversary trigger fires at 3 months, 6 months, 1 year. Lapsed payment SMS if card fails.' },
    { stage: 'Lapsed Donor', meaning: 'No donation in 12+ months', action: 'Reactivation campaign with impact update and giving opportunity.' },
    { stage: 'Major Donor', meaning: 'Single donation above a threshold you define', action: 'Manual review flag. Personalised outreach sequence. Different nurture cadence.' },
    { stage: 'Volunteer', meaning: 'Actively involved in programmes, not necessarily donating', action: 'Separate tag and calendar integration. Shift reminder workflows.' }
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
          <span className="text-[#1A2236] font-medium">GoHighLevel for Nonprofits</span>
        </div>
      </nav>

      {/* Hero Section - UPDATED TO MATCH THE SHARED PATTERN */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Nonprofits</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Donor Management</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Fundraising</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel for Nonprofits:<br />
            <span className="text-[#F8D000]">Donor Management and Fundraising Automation (2026)</span>
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

          {/* Introductory Paragraph - NO max-w constraint (max-w-6xl from shared pattern) */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Most small and mid-size nonprofits run their operations across 5 to 7 separate tools a spreadsheet for donors, an email platform for newsletters, a separate form tool for donations, a calendar for volunteers, and a payment processor that does not connect to any of them. Every week, staff members manually move data between systems, duplicate records build up, and donors fall through gaps that should never exist. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has built GoHighLevel systems for organisations that need to do more with smaller teams. This guide covers how nonprofits use GHL, what it genuinely replaces, and what to be realistic about before committing.
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
                5+ years GHL experience · 200+ systems built globally. All pricing and feature details verified from official platform pages as of July 2026.
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

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel works well for nonprofits that need to consolidate donor CRM, automated email and SMS campaigns, recurring donation processing through Stripe, volunteer scheduling, event registration, and tax receipt automation into one platform.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It starts at $97 per month. GoHighLevel does not offer a discounted nonprofit plan verify with GHL directly if this changes. It is not a purpose-built nonprofit platform: it does not have grant management, donor advised fund tracking, or the IRS reporting integrations that dedicated nonprofit software (Bloomerang, DonorPerfect, Salesforce NPSP) provides. For organisations that need those functions, GHL works best as the marketing and communication layer alongside an existing donor database.
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Your Nonprofit Setup
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
                <strong className="text-white">🌟 Ready to consolidate your nonprofit's tools into one system?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                We build systems that let small teams do more — donor CRM, automated thank-you sequences, recurring donation setup, volunteer coordination, and campaign funnels.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Nonprofit Plan */}
            <h2 id="nonprofit-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Does GoHighLevel Have a Nonprofit Plan or Discount?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">No as of the date of this guide, GoHighLevel does not offer a dedicated nonprofit plan or a standard nonprofit discount.</strong> The platform is available at the same pricing as for any other business: Starter at $97 per month, Unlimited at $297 per month, and Agency Pro at $497 per month. You may want to verify whether this has changed by checking GoHighLevel's current pricing page directly, as pricing policies can be updated.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One important related note: Stripe, which GHL uses for payment processing, does offer discounted transaction rates for verified 501(c)(3) organisations in the US. You should verify this directly at stripe.com/nonprofits as their rates and eligibility criteria can change. This Stripe discount is separate from GHL's pricing and would reduce your per-transaction payment processing costs, not your GHL subscription cost.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For an honest breakdown of what each plan includes: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing 2026 →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For an honest review of the platform's broader strengths and limitations: <Link href="/blog/gohighlevel-review" className="text-[#0E9BF0] hover:underline">GoHighLevel Review 2026 →</Link>
            </p>

            {/* Section 2: Tools Replaces */}
            <h2 id="tools-replaces" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Tools Does GoHighLevel Replace for Nonprofits?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tool category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Common tools nonprofits pay for</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL equivalent</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What GHL does not replace</th>
                  </tr>
                </thead>
                <tbody>
                  {toolsReplaces.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.category}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.commonTools}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghlEquivalent}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notReplace}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 3: Donor Management */}
            <h2 id="donor-management" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Does Donor Management Work in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL's CRM becomes a donor database when configured with the right custom fields, tags, and pipeline stages for a nonprofit context.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Donor pipeline structure</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Unlike a sales pipeline where the goal is converting a prospect to a paying customer, a nonprofit donor pipeline tracks the relationship journey from first contact to recurring supporter.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Pipeline stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Automated action in GHL</th>
                  </tr>
                </thead>
                <tbody>
                  {donorStages.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Custom fields for nonprofit contact records:</strong> Donation amount (last gift), total lifetime giving, first gift date, preferred communication channel, programme interest, volunteer status, event attendance history. These are created in GHL's custom fields settings and then populated via form submissions, manual entry, or CSV import.</li>
              <li><strong className="text-[#1A2236]">Segmentation via Smart Lists:</strong> Create saved lists such as 'Donors who gave in the last 12 months but not in the last 3 months' or 'Volunteers tagged for the annual event but not yet confirmed'. These lists update dynamically as contacts meet or stop meeting the criteria.</li>
              <li><strong className="text-[#1A2236]">Importing an existing donor database:</strong> Export your current donor records as a CSV from your existing system, map the fields to GHL's custom field structure, and import. GHL handles the import natively. The quality of the import depends entirely on the quality and completeness of the original data.</li>
            </ul>

            {/* Section 4: Fundraising Automation */}
            <h2 id="fundraising-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do Nonprofits Automate Donations and Fundraising in GoHighLevel?
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Recurring donation setup via Stripe</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL uses Stripe for donation processing. When setting up a donation form in GHL, you can offer one-time payment or toggle on recurring payments, allowing donors to choose monthly, quarterly, or annual giving. The recurring donation amount is charged automatically through Stripe on the donor's chosen frequency. Stripe charges standard processing fees per transaction verify the current rate at stripe.com, and if your organisation is a verified 501(c)(3), verify Stripe's nonprofit rate directly with Stripe as rates can change.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If a recurring donation payment fails (card expired or declined), you can build a GHL workflow that fires an SMS or email to the donor automatically, asking them to update their payment details. This reduces involuntary donor churn a common revenue leak that most nonprofits handle manually or not at all.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Automated thank-you and tax receipt workflow</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When a donation is processed through Stripe in GHL, a workflow can fire immediately:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Thank-you email fires within seconds of payment confirmation,</strong> personalised with the donor's name and donation amount using GHL's custom values system.</li>
              <li><strong className="text-[#1A2236]">Tax receipt included in the same email or a separate follow-up.</strong> For US donors, the IRS requires a written acknowledgment for donations of $250 or more that includes the amount donated, a statement of whether goods or services were provided in exchange, and if none were provided, a statement to that effect. You may want to verify the current exact IRS language requirements with your accountant, and ensure your email template includes the correct wording for your organisation's specific situation. State-specific requirements may differ.</li>
              <li><strong className="text-[#1A2236]">30-day impact update sequence:</strong> A follow-up email at 30 days sharing what the donation has contributed to, reinforcing the donor's decision and building toward a second gift.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Giving Tuesday and year-end campaign funnels</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL's funnel builder supports dedicated campaign pages with countdown timers, progress indicators, and forms connected directly to Stripe. A Giving Tuesday campaign built in GHL might consist of: a campaign landing page with a donation goal progress bar, a timed SMS and email sequence building urgency in the 72 hours before and on the day itself, and a post-campaign impact update to everyone who donated. You can embed these donation pages on your existing website or host them on a GHL subdomain.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For building the automation sequences behind these campaigns: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For capturing inbound enquiries from supporters who call after seeing a campaign: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
            </p>

            {/* CTA 2 - After Fundraising Automation */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">❤️ Want to automate your donation follow-up and reduce donor churn?</p>
              <p className="text-sm text-white/80 mb-4">We build automated thank-you sequences, tax receipt workflows, and recurring donation recovery systems for nonprofits.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <HeartHandshake className="w-4 h-4" />
                Get Donor Automation Help
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 5: Volunteer Coordination */}
            <h2 id="volunteer-coordination" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Does Volunteer Coordination Work in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL's calendar and tagging system can handle basic volunteer coordination. It is not a purpose-built volunteer management platform, but for small to mid-size nonprofits, it covers the core workflow.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Volunteer sign-up forms:</strong> Build a GHL form or funnel page for volunteer registration. When submitted, the contact is automatically tagged as 'Volunteer' and segmented separately from donors in Smart Lists.</li>
              <li><strong className="text-[#1A2236]">Shift scheduling via GHL calendar:</strong> Create calendar events for volunteer shifts. Share the booking link with tagged volunteers via email or SMS so they can self-select their availability. Confirmation and reminder messages fire automatically.</li>
              <li><strong className="text-[#1A2236]">Shift reminder sequence:</strong> A workflow fires an SMS reminder to confirmed volunteers 24 hours and 2 hours before their shift. This reduces no-shows without any manual follow-up from your team.</li>
              <li><strong className="text-[#1A2236]">What GHL does not handle:</strong> Volunteer hour logging, background check integration, and volunteer portal functionality (where volunteers can log their own hours and access a personal dashboard) are not natively available in GHL. For organisations where these are critical requirements, a dedicated volunteer management tool VolunteerHub, InitLive, or similar may be needed alongside GHL.</li>
            </ul>

            {/* Section 6: Security */}
            <h2 id="security" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Is GoHighLevel Secure Enough for Donor Data?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Based on a June 2026 source, GoHighLevel holds SOC 2 Type II certification covering Security, Confidentiality and Availability, and ISO 27001 certification. You may want to verify these certifications are current by checking GoHighLevel's Trust Center or security documentation directly, as certification status can change.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">What is appropriate to store in GHL:</strong> Donor contact information (name, email, phone, address), communication history, donation amounts and dates, tags and segmentation data, and event attendance records.</li>
              <li><strong className="text-[#1A2236]">What should not be stored in GHL contact fields:</strong> Full Social Security Numbers, government ID numbers, or other sensitive personal identifiers. These should remain in dedicated, compliance-controlled systems.</li>
              <li><strong className="text-[#1A2236]">HIPAA considerations:</strong> If your nonprofit handles Protected Health Information (for example, a healthcare-focused charity or a social services organisation collecting medical data), GHL offers a HIPAA add-on. Consult your compliance officer before storing any health-related data in GHL, regardless of the add-on status.</li>
              <li><strong className="text-[#1A2236]">Data sovereignty:</strong> You may want to verify where GHL stores data for your region if data residency is a compliance requirement for your organisation's donors or funders.</li>
            </ul>

            {/* Section 7: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Does GoHighLevel Not Do Well for Nonprofits?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These limitations matter and should be evaluated honestly before committing to GHL as your primary nonprofit platform.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">No grant management:</strong> GHL has no grant tracking, deadline reminders, reporting templates for funders, or proposal management. If grant funding is a significant part of your revenue, you will need a separate tool for this function (Submittable, Foundation Connect, or a dedicated grant management system).</li>
              <li><strong className="text-[#1A2236]">No IRS reporting integrations:</strong> GHL does not integrate with IRS Form 990 preparation software or nonprofit accounting systems (QuickBooks Nonprofit, Sage Intacct) natively. Financial reporting for your board and regulators will require exporting data from GHL and reconciling it manually or through a third-party integration.</li>
              <li><strong className="text-[#1A2236]">No native peer-to-peer fundraising:</strong> Peer-to-peer campaigns (where individual supporters fundraise on behalf of your organisation, each with a personal fundraising page) are not a native GHL feature. They can be approximated with custom configurations but are not the platform's strength.</li>
              <li><strong className="text-[#1A2236]">No dedicated volunteer portal:</strong> Volunteers cannot log hours, access a personal dashboard, or view their history inside GHL without custom development.</li>
              <li><strong className="text-[#1A2236]">The learning curve for small teams:</strong> GHL is a comprehensive platform. Nonprofit staff without a marketing or CRM background will find the initial setup time-consuming. If your organisation has no dedicated technology person, budget time for setup and training or work with a GHL agency to configure the system.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE RIGHT MENTAL MODEL</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GoHighLevel works best for nonprofits as the communication and donor engagement layer not as a full replacement for dedicated nonprofit accounting or grant management software. Organisations that get the most value from GHL are those replacing scattered email tools, manual SMS, paper-based volunteer sign-up, and disconnected donation forms with one integrated system. Organisations that need deep donor advised fund tracking, gift stewardship reporting, or complex pledge management will need a purpose-built donor management platform for those functions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up has built systems for a range of organisations that do meaningful work on tight budgets. The nonprofits and community organisations that get the fastest return from GHL start with the same two automations as every other service business: missed call text-back for inbound enquiries and an automated thank-you sequence for new donors. Both are configured in a single day and deliver immediate value.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real results from our GHL builds: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss a setup for your organisation: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Our <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM setup service</Link> includes nonprofit-specific pipeline configuration, donor segmentation, automated thank-you and tax receipt sequences, and volunteer coordination setup.
            </p>

            {/* CTA 3 - Before FAQ */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">📋 Not sure if GoHighLevel is the right fit for your nonprofit?</p>
              <p className="text-sm text-white/80 mb-4">We'll review your current tools and recommend the best setup for your organisation's needs.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Compass className="w-4 h-4" />
                Get a Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 8: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              8. Frequently Asked Questions
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
                <strong className="text-white">Still have questions about GoHighLevel for your nonprofit?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our nonprofit GHL specialists directly. We've built systems for organisations of all sizes.
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
                <Link href="/blog/gohighlevel-for-dentists" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Dentists: Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-for-coaches" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Coaches and Consultants: Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-for-home-services" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Home Services: HVAC, Plumbers and Roofers →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation: Beginner's Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Want to consolidate your nonprofit's tools into one system?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds systems that let small teams do more. Donor CRM, automated thank-you sequences, recurring donation setup, volunteer coordination, and Giving Tuesday campaign funnels configured and tested for your organisation.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
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
                Information in this guide is based on research conducted in July 2026. Pricing, platform features, Stripe rates, and GHL certifications may change verify current details directly with GoHighLevel and Stripe before making decisions. Tax receipt language requirements should be verified with a qualified accountant for your specific organisation and jurisdiction. This guide is not legal, tax, or compliance advice.
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