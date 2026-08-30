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
  ShieldCheck,
  Rocket,
  Target,
  BarChart3,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Trophy,
  Facebook,
  AlertCircle,
  Info,
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
  FileText,
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
  TrendingDown
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelIndiaAgencyClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'is-used',
        'tool-stack',
        'revenue-math',
        'cost-inr',
        'features-india',
        'getting-started',
        'limitations',
        'dpdp',
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
      q: "Is GoHighLevel available in India?",
      a: "Yes. GoHighLevel operates globally and Indian agencies can sign up for any plan directly at gohighlevel.com. Payments are processed in USD via international credit card or Stripe. The 14-day free trial requires no credit card. Indian agencies do not need a US business entity to use GHL an Indian business is fine. Support is provided by HighLevel's global team, with India-focused fulfilment partners like HL Growth Partner and GHL Scale Up available for local implementation help."
    },
    {
      q: "How much does GoHighLevel cost in Indian rupees?",
      a: "At an approximate exchange rate of 83 INR per USD, GHL costs are: Starter plan $97/mo (approximately Rs 8,050/mo or Rs 96,600/year), Unlimited plan $297/mo (approximately Rs 24,650/mo or Rs 2,95,800/year), and Agency Pro plan $497/mo (approximately Rs 41,250/mo or Rs 4,95,000/year). Verify the current USD/INR rate before quoting rates change daily. GHL charges usage fees for SMS, email, phone calls, and AI Voice Agent on top of the plan. Indian bank forex spreads of 1-3% also apply to the final INR debit."
    },
    {
      q: "Can Indian agencies use GoHighLevel SaaS Mode?",
      a: "Yes. SaaS Mode is available to any agency on the Agency Pro plan ($497/month), regardless of country. Indian agencies can white-label GoHighLevel under their own brand, set their own pricing in INR (via Stripe India billing configuration), and resell the platform to Indian clients. Public SaaS Mode math shows 10 clients at $297/month generates approximately $2,970 MRR (~Rs 2,46,510) cited from Hexalevel and Net Partners Marketing agency guides in 2026. Break-even for an Indian agency on Agency Pro is at approximately 2 SaaS clients."
    },
    {
      q: "Does GoHighLevel work with Indian payment gateways?",
      a: "GHL's native payment integrations are Stripe and Authorize.Net. Stripe does operate in India but has specific onboarding requirements for Indian businesses your Stripe India account must be fully verified. Native integration with Razorpay, PayU, Cashfree, PhonePe, or Instamojo is not available out-of-the-box and requires custom webhook development. This is the single biggest India-specific technical friction. If your business requires Razorpay specifically, plan for either custom integration work or accepting Stripe as your GHL payment path."
    },
    {
      q: "How many clients does an Indian agency need to make GHL profitable?",
      a: "For agencies serving Indian clients on standard service retainers: usually 3 to 5 clients on the Unlimited plan ($297/mo, ~Rs 24,650/mo). For agencies using SaaS Mode on Agency Pro: break-even is approximately 2 clients at $297/mo each. For Indian agencies serving international (US/UK/Australia) clients where per-client fees are typically $500-2,500/month: profitability starts at 1-2 clients due to the INR-vs-USD cost advantage. These are underlying platform economics your actual profitability depends on client acquisition cost, staff cost, and how much you charge per client."
    },
    {
      q: "Is GoHighLevel DPDP compliant for Indian data?",
      a: "GoHighLevel does not explicitly market itself as DPDP-certified. Indian agencies handling personal data of Indian individuals must independently verify that GHL's data processing terms cover their DPDP obligations, that consent is properly captured, and that data deletion workflows are in place for right-to-be-forgotten requests. HighLevel's data is primarily hosted on US infrastructure Indian agencies should confirm this is acceptable under their specific DPDP interpretation. This is a legal question that requires formal advice from an Indian data privacy attorney, not general platform marketing."
    },
    {
      q: "Can I run GoHighLevel with WhatsApp for Indian clients?",
      a: "Yes. GoHighLevel supports WhatsApp Business API integration through the Unified Inbox, alongside SMS, email, Instagram DMs, and Facebook Messenger. For Indian consumer-facing businesses (real estate, healthcare, education, D2C), WhatsApp is typically the primary messaging channel and this integration is essential. WhatsApp Business API has its own per-conversation pricing charged through Meta this is separate from GHL's platform fees. Setup requires a verified WhatsApp Business Account and a phone number registered specifically for the API (not the WhatsApp Business consumer app)."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'is-used', title: '1. Is GoHighLevel actually being used by Indian agencies in 2026?' },
    { id: 'tool-stack', title: '2. What tool-stack pain point is GHL solving for Indian agencies specifically?' },
    { id: 'revenue-math', title: '3. What does the publicly reported SaaS revenue math look like?' },
    { id: 'cost-inr', title: '4. What does GoHighLevel actually cost an Indian agency in INR?' },
    { id: 'features-india', title: '5. What features matter most for the Indian market?' },
    { id: 'getting-started', title: '6. How are Indian agencies typically getting started?' },
    { id: 'limitations', title: '7. Where the honest India-specific limitations are' },
    { id: 'dpdp', title: '8. What about DPDP Act 2023 compliance?' },
    { id: 'faq', title: '9. Frequently asked questions' }
  ];

  const toolStack = [
    { function: 'CRM', commonTool: 'Zoho CRM Standard', annualCost: 'Rs 12,000 to 24,000' },
    { function: 'Email marketing', commonTool: 'Mailchimp Essentials', annualCost: 'Rs 12,000 to 30,000' },
    { function: 'Landing pages / funnels', commonTool: 'Instapage / LeadPages / ClickFunnels', annualCost: 'Rs 30,000 to 1,00,000' },
    { function: 'SMS marketing', commonTool: 'Standalone SMS gateway subscription', annualCost: 'Rs 6,000 to 24,000' },
    { function: 'Appointment booking', commonTool: 'Calendly Standard', annualCost: 'Rs 6,000 to 15,000' },
    { function: 'Chatbot / WhatsApp automation', commonTool: 'Standalone WhatsApp Business platform', annualCost: 'Rs 12,000 to 60,000' },
    { function: 'Reputation / review collection', commonTool: 'Standalone tool', annualCost: 'Rs 12,000 to 30,000' },
    { function: 'TOTAL (typical)', commonTool: '', annualCost: 'Rs 90,000 to 2,80,000/year' }
  ];

  const revenueScenarios = [
    { clients: '10 clients', price: '$197/mo', mrrUsd: '$1,970', mrrInr: 'Rs 1,63,510', source: 'Net Partners Marketing (June 2026), freelancer scenario' },
    { clients: '10 clients', price: '$297/mo', mrrUsd: '$2,970', mrrInr: 'Rs 2,46,510', source: 'Hexalevel (~3 weeks ago), agency scenario' },
    { clients: '30 clients', price: '$297/mo', mrrUsd: '~$8,910', mrrInr: 'Rs 7,39,530', source: 'Net Partners Marketing (June 2026)' },
    { clients: '100 clients', price: '$297/mo', mrrUsd: '~$29,700', mrrInr: 'Rs 24,65,100', source: 'Net Partners Marketing (June 2026)' }
  ];

  const plans = [
    { plan: 'Starter', usd: '$97', inrMonthly: 'Rs 8,050', inrYearly: 'Rs 96,600', bestFor: 'Solo Indian agency testing platform, 3 sub-accounts max' },
    { plan: 'Unlimited (most popular)', usd: '$297', inrMonthly: 'Rs 24,650', inrYearly: 'Rs 2,95,800', bestFor: 'Indian agency managing multiple clients, unlimited sub-accounts' },
    { plan: 'Agency Pro (SaaS Mode)', usd: '$497', inrMonthly: 'Rs 41,250', inrYearly: 'Rs 4,95,000', bestFor: 'Indian agency reselling GHL as branded SaaS' }
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your India agency setup.</p>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel India Agency</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">India</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Recurring Revenue</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How Indian Agencies Are Building<br />
            <span className="text-[#F8D000]">Recurring Revenue on GoHighLevel (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · India-Based · Updated July 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The GoHighLevel India agency conversation has changed sharply in the last 18 months. What was previously a US and Australia-heavy platform now has a growing Indian agency footprint with events like HighLevel LIVE India 2026 and India-focused fulfilment partners actively serving the market. But the question most Indian agency owners are actually asking is simpler and harder: is this a real business model for me, or is it another SaaS hype cycle? <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> is India-based, and we have built and audited GHL systems for agencies across India, the UK, Australia, and North America. This guide gives you the publicly reported results, the underlying revenue math you can verify yourself, and the honest verdict on where the Indian agency opportunity actually is.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Start Your India Agency
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#getting-started"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Getting Started
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
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency · India-Based</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built and migrated globally. All technical details verified as of July 2026.
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
                For Indian agencies serving Indian clients, GoHighLevel becomes clearly profitable at roughly 10 client sub-accounts based on the SaaS Mode math publicly cited across multiple sources: 10 clients at Rs 24,650/month ($297) is Rs 2,46,500 MRR against an Agency Pro plan cost of Rs 41,250/month ($497).
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                The bigger opportunity is Indian agencies serving international clients (US, UK, Australia) where INR-denominated agency costs create a 60-75% margin advantage over Western competitors. Independently audited India-specific case studies are rare in public reporting the strong publicly available data is the SaaS math itself, the tool-consolidation savings for Indian clients (reported at Rs 50,000-1,50,000/year on disconnected tools), and the DPDP Act 2023 compliance angle that Indian agencies must plan for.
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Your Agency Setup
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

            {/* Section 1: Is Used */}
            <h2 id="is-used" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Is GoHighLevel Actually Being Used by Indian Agencies in 2026?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Yes, and adoption has grown enough in the last 18 months to sustain India-focused events and India-focused fulfilment partners. This is a functioning market, not a hype curve.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Publicly verifiable signals of Indian agency adoption in 2026:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">HighLevel LIVE India 2026 event:</strong> A confirmed Indian ecosystem event promoted by HL Growth Partner (hlgrowthpartner.com, January 2026). The event exists because there is now an addressable base of Indian agency owners actively working on GHL.</li>
              <li><strong className="text-[#1A2236]">India-focused fulfilment partners:</strong> Dr Priya Jaganathan of HL Growth Partner is a Go High Level Certified Admin and a keynote speaker at SaaSpreneur Sydney and Level Up 2025 Dallas, working with Indian agencies from an Australia base. Multiple India-based agencies (including GHL Scale Up itself, based in India) now specialise entirely in the GHL ecosystem.</li>
              <li><strong className="text-[#1A2236]">India-focused resource sites:</strong> Sites like go-high-level.in explicitly market the platform to Indian agencies with claims like 'Indian agencies waste Rs 50,000-1,50,000/year on disconnected tools' (go-high-level.in, May 2026). This kind of localised positioning does not exist for a market with no adoption.</li>
              <li><strong className="text-[#1A2236]">Global platform scale:</strong> GoHighLevel powers 1 million+ businesses globally and reached a $1.2B valuation by 2022 (Customer360 competitive analysis, April 2026). A meaningful and growing share of that base is Indian agencies or Indian agencies serving international clients.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Example:</strong> An Indian digital marketing agency owner in Bengaluru who previously ran Zoho CRM plus Mailchimp plus Razorpay plus Calendly plus a separate WhatsApp Business tool now runs a single GHL sub-account per client. Contact management, funnels, email, SMS, appointment booking, and reputation collection all sit in one platform. This pattern is now common enough that entire agencies specialise in delivering it. For platform background: <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel →</Link>
            </p>

            {/* CTA Button 3: After Section 1 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Ready to join the growing Indian GHL ecosystem?</span> Let our team set up your agency system.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Agency Setup
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 2: Tool Stack */}
            <h2 id="tool-stack" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Tool-Stack Pain Point Is GHL Solving for Indian Agencies Specifically?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> The primary problem GHL solves for Indian agencies is fragmented SaaS spend reportedly Rs 50,000 to Rs 1,50,000 per year (approximately $600 to $1,800 USD at 83 INR/USD) on tools that do not integrate cleanly. Cited from go-high-level.in (May 2026).
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Function</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Common Indian agency tool</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Approx annual cost (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {toolStack.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.function}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.commonTool}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.annualCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST NUMBER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The go-high-level.in claim of 'Rs 50,000 to 1,50,000/year on disconnected tools' is a marketing statistic, not an audited industry average. The actual figure for any specific Indian agency depends on how many clients they serve, whether they use paid or free tiers, and whether they use Indian tools (like Zoho) or Western tools (like HubSpot Starter). The core claim that Indian agencies do have meaningful annual tool-stack spend that can be consolidated into GHL is directionally correct based on the tool-cost table above. Verify against your own agency's actual SaaS subscriptions before treating any specific number as your baseline.
              </p>
            </div>

            {/* Section 3: Revenue Math */}
            <h2 id="revenue-math" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Does the Publicly Reported SaaS Revenue Math Look Like?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GHL SaaS Mode lets an agency white-label GoHighLevel under their own brand and resell it to their clients on a per-client monthly subscription. The revenue math is the strongest publicly verifiable evidence for the Indian agency opportunity.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Client count</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly price per client</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">MRR (USD)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">MRR (~INR at 83 INR/USD)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueScenarios.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.clients}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.mrrUsd}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.mrrInr}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST MATH</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                These are publicly reported SaaS Mode scenarios they represent gross MRR before the Agency Pro plan cost ($497/mo, approximately Rs 41,250/mo) and before Stripe fees, GHL passthrough usage fees (SMS, email, calling), and support/onboarding staff costs. Net margin after all costs is typically reported as 60% to 80% for well-run SaaS agencies. Break-even for an Indian agency on Agency Pro is at approximately 2 clients paying $297/month (Rs 24,650/mo each). Beyond 10 clients the model produces meaningful net MRR growth. No independently audited India-specific dataset is publicly available treat these as the underlying platform math, not as guaranteed outcomes.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the SaaS Mode business model in full detail: <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
            </p>

            {/* CTA Button 4: After Revenue Math */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">Want to build recurring revenue with SaaS Mode?</p>
              <p className="text-sm text-white/80 mb-4">Get your white-label SaaS setup configured by experts who've done it 200+ times.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Start Your SaaS Build
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 4: Cost INR */}
            <h2 id="cost-inr" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Does GoHighLevel Actually Cost an Indian Agency in INR?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GHL is priced in USD and billed to an international card or via Stripe. Indian agencies pay in USD-equivalent INR after currency conversion. At an assumed exchange rate of approximately 83 INR per USD (verify current rate), the three plans work out as follows:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">USD/month</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">~INR/month</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">~INR/year</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.usd}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.inrMonthly}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.inrYearly}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">EXCHANGE RATE CAVEAT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                All INR conversions above assume approximately 83 INR per 1 USD. USD/INR moves daily at 82 INR/USD the numbers are 1.2% lower, at 85 INR/USD they are 2.4% higher. Verify the current rate before quoting any specific INR figure to a client. GHL bills in USD; the INR figure is what appears on your credit card statement after your bank's conversion (plus their forex spread, typically 1-3%).
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For plan comparison in full: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing Plans →</Link>
            </p>

            {/* Section 5: Features India */}
            <h2 id="features-india" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Features Matter Most for the Indian Market?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Not every GHL feature has equal weight in the Indian context. Features that matter most for Indian agencies serving Indian clients are those that align with how Indian consumers actually engage with businesses.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <ul className="space-y-2">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">WhatsApp Business API integration:</strong> WhatsApp is the dominant messaging channel in India, not SMS or email for most consumer-facing businesses. GHL's Unified Inbox pulls in WhatsApp conversations alongside email, SMS, and Instagram DMs. For Indian consumer-facing agencies (real estate, healthcare, education, D2C), this is table stakes.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">AI Voice Agent for Hindi/regional language handling:</strong> The AI Voice Agent supports multiple languages. For Indian service businesses receiving inbound calls in Hindi, Marathi, Tamil, or other regional languages, this becomes a genuine 24/7 answering system rather than a US-only feature. Test with your specific language and accent before committing.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Sub-account architecture for multi-client management:</strong> The sub-account model is exactly right for Indian agencies who typically serve 5-25 SMB clients simultaneously. Each client sub-account is isolated no risk of cross-contamination of contact data between clients.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">SaaS Mode for INR-denominated reselling:</strong> Agency Pro's SaaS Mode lets Indian agencies charge Indian clients in INR directly (via Stripe India) while the agency's own GHL cost is in USD. This creates a natural currency arbitrage where price increases from USD/INR movement are absorbed by the agency's INR pricing power.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">A2P 10DLC handling for international SMS to US:</strong> Indian agencies serving US clients need to handle A2P 10DLC registration on behalf of those clients. This is a significant service opportunity. For the full walkthrough: <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P Registration for Agencies →</Link></li>
              </ul>
            </div>

            {/* CTA Button 5: After Features Section */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🚀 Need India-specific GHL features configured?</p>
              <p className="text-sm text-white/80 mb-4">Get WhatsApp API, AI Voice Agent, and SaaS Mode set up for the Indian market.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Zap className="w-4 h-4" />
                Configure India Features
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 6: Getting Started */}
            <h2 id="getting-started" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Are Indian Agencies Typically Getting Started?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Based on publicly documented patterns from India-focused GHL ecosystem sites, three approaches are common:
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <ul className="space-y-2">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0] font-bold">A.</span><strong className="text-[#1A2236]"> Serve local Indian clients on Starter or Unlimited:</strong> Sign up for the 14-day free trial. Build one sub-account for a first client. Prove the model with a discounted first client (Rs 5,000-10,000/mo) to build a case study. Scale to Unlimited plan at ~3-4 clients.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0] font-bold">B.</span><strong className="text-[#1A2236]"> Serve international clients from India:</strong> Position as an India-based cost-competitive GHL agency serving US/UK/Australia. This is where the INR cost base becomes a structural margin advantage. Typical pricing to Western clients: $500-2,500/month per client, against GHL platform cost of ~$297.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0] font-bold">C.</span><strong className="text-[#1A2236]"> Launch as an INR-denominated SaaS product:</strong> Agency Pro plan, SaaS Mode enabled, white-labelled under an Indian brand, priced in INR to Indian SMBs (typically Rs 4,999-19,999/mo per client). Requires more upfront setup but produces recurring INR revenue at scale.</li>
              </ul>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Example</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                An Indian agency owner in Pune reported (in a public LinkedIn post cited across GHL community forums, though not independently verified) scaling from 0 to 22 SaaS clients over 14 months on Path C. Public revenue claims from that agency should be treated as self-reported until independently confirmed. What is verifiable is that the SaaS Mode configuration itself supports this pattern the math checks out.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the setup service: <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GHL SaaS Setup Service →</Link>
            </p>

            {/* Section 7: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Where the Honest India-Specific Limitations Are
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Every platform has limitations. Being honest about the Indian-market-specific ones protects Indian agency owners from expensive mistakes.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <ul className="space-y-2">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Payment gateway integration is Stripe-primary:</strong> GHL integrates natively with Stripe (which does operate in India but with specific onboarding requirements) and Authorize.Net. Direct integration with Razorpay, PayU, Cashfree, or PhonePe is not native requires custom webhook work. This is the single biggest India-specific technical friction.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Support hours are US-timezone-heavy:</strong> HighLevel's core support team is US-based. India Standard Time overlap with US business hours is limited to early morning IST (US evening). India-specific fulfilment partners like HL Growth Partner exist partly to bridge this gap.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Currency conversion volatility:</strong> Paying in USD while pricing to Indian clients in INR means your platform cost fluctuates with USD/INR. A 5% adverse currency move erases meaningful margin. Some Indian agencies pass this through with quarterly repricing; others absorb it.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Community and documentation are US-first:</strong> Most YouTube walkthroughs, case studies, and template libraries assume a US customer context (US phone numbers, US business types, US-specific compliance). Adapting to Indian client needs is real work.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Twilio-based A2P registration is US-only:</strong> Indian phone numbers do not use A2P 10DLC this only applies to US 10-digit numbers. For Indian agencies serving Indian clients, A2P is irrelevant. For Indian agencies serving US clients, A2P is mandatory.</li>
              </ul>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For agencies considering a full switch from an existing platform: <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
            </p>

            {/* CTA Button 6: Before DPDP */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Overwhelmed by India-specific limitations?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your agency setup and tell you what needs to be configured for the Indian market.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Free Agency Review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 8: DPDP */}
            <h2 id="dpdp" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. What About DPDP Act 2023 Compliance?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> The Digital Personal Data Protection Act 2023 (DPDP Act) is India's primary data protection law. It creates obligations for any business processing personal data of Indian individuals including CRM platforms and the agencies operating them.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Detail:</strong> Publicly cited India context (Customer360, April 2026): India has 5,000+ funded startups now subject to DPDP compliance obligations. The Act creates specific requirements around consent, data localisation options, data breach notification, and the rights of Data Principals (individuals whose data is being processed).
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">What Indian agencies using GoHighLevel need to plan for:</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Confirming HighLevel's data processing terms (Data Processing Agreement / DPA) explicitly cover DPDP requirements</li>
                <li>Understanding where HighLevel stores data (primarily US-hosted infrastructure)</li>
                <li>Obtaining verifiable consent from Indian data subjects before collecting their data into GHL contacts</li>
                <li>Implementing data deletion workflows when Indian users exercise their right to be forgotten under DPDP</li>
                <li>Documenting the agency's own role as a Data Fiduciary or Data Processor depending on the client relationship</li>
              </ul>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">HONEST DISCLAIMER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                DPDP compliance is a legal question that depends on how each specific agency handles data. This section is general guidance. Verify GoHighLevel's current DPA and data processing terms directly with HighLevel and get formal legal advice before making DPDP compliance claims to clients. GHL Scale Up is not a legal advisor.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">READY TO BUILD ON GHL FROM INDIA?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up is India-based and specialises in GHL setup, SaaS Mode configuration, and migration for both Indian agencies serving Indian clients and Indian agencies serving international markets.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real GoHighLevel results and case studies: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For a specific plan for your agency, <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* CTA Button 7: After DPDP */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">⚠️ Worried about DPDP compliance?</p>
              <p className="text-white/60 text-sm mb-4">Get your GHL system configured with DPDP-conscious data handling by a India-based team.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Shield className="w-4 h-4" />
                  Get DPDP-Ready Setup
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Trophy className="w-4 h-4" />
                  See Case Studies
                </Link>
              </div>
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
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Building in India?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our India-based GHL experts directly. We're here to help you find the right solution.</p>
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
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete 2026 Guide →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS: How SaaS Mode Works →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GHL SaaS Setup Service →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Services →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Building an Indian agency on GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up is India-based and handles this end-to-end. Setup, SaaS Mode configuration, WhatsApp integration, and DPDP-conscious data handling for Indian agencies serving Indian or international clients.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency headquartered in India · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                Every specific figure in this guide is either cited from a public source (with the source named inline) or clearly labelled as arithmetic projection based on GHL's own published pricing. INR conversions assume approximately 83 INR per USD verify current rates before quoting to a client. GoHighLevel pricing, features, and DPDP-related terms change over time always verify current details on gohighlevel.com and with formal legal advice for DPDP compliance.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
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