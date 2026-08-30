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
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  AlertTriangle,
  Rocket,
  Target,
  Compass,
  BarChart3,
  Search,
  HeartHandshake
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelVsKartraClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-built-for',
        'pricing-comparison',
        'kartra-better',
        'ghl-better',
        'verdict',
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
      q: "Is Kartra better than GoHighLevel?",
      a: "For solo course creators and digital product sellers, Kartra is better in several specific ways: it has native video hosting with interactive overlays, a built-in helpdesk with ticketing, native live streaming and webinar creation, automatic international sales tax calculation, and a lower learning curve. For agencies managing multiple clients or businesses that need native SMS, AI automation, and white-label capability, GoHighLevel is significantly better. Kartra has no sub-accounts, no SMS, and no AI features at any tier. The answer depends on whether your business is agency-shaped or creator-shaped."
    },
    {
      q: "What does GoHighLevel have that Kartra does not?",
      a: "GoHighLevel has four capabilities Kartra does not have at any tier: true 2-way SMS and WhatsApp conversations, an AI Employee suite (AI Voice Agent that answers calls, Conversation AI that handles chat and SMS, Workflow AI that builds automations from plain language), unlimited sub-accounts for managing multiple client businesses, and white-label SaaS resale with automated Stripe billing. For agencies and service businesses where lead response speed and multi-client management matter, these are not minor differences."
    },
    {
      q: "What does Kartra have that GoHighLevel does not?",
      a: "Kartra has several features GoHighLevel does not include at any price: native video hosting with interactive elements and student engagement analytics, a built-in helpdesk with email ticketing and FAQ sections organised by department, native live streaming and webinar creation without third-party tools, automatic international sales tax calculation for digital product sales, and a more developed affiliate management system with commission tiers. For course creators and digital product sellers, these are core infrastructure, not nice-to-haves."
    },
    {
      q: "How does GoHighLevel vs Kartra pricing compare?",
      a: "GoHighLevel starts at $97/month and goes up to $497/month for Agency Pro, with unlimited contacts on every plan. However, SMS, calling, and email sending are billed on usage on top of the subscription. Kartra starts at $119/month and goes up to $549/month, with contact limits per plan, but the price is all-inclusive with no usage-based fees. For a business with low SMS and email volume, GHL's effective cost may be lower. For predictable budgeting with no surprises, Kartra's flat-fee model is simpler."
    },
    {
      q: "Can GoHighLevel replace Kartra for course creators?",
      a: "Partially. GoHighLevel's membership module covers the core of course delivery: video lessons, drip content, gated access by payment tier. What it does not replace: Kartra's native video hosting with interactive overlays and engagement analytics, the built-in helpdesk, native live streaming and webinars, and automatic international sales tax handling. Course creators who switch from Kartra to GoHighLevel typically do so because they need CRM, SMS, and lead automation alongside course delivery, not because GHL's course experience is better."
    },
    {
      q: "Does GoHighLevel have AI features like Kartra?",
      a: "GoHighLevel has AI features that Kartra does not have at all. As of March 2026, Kartra has no native AI layer. No AI features are built into the platform at any tier. GoHighLevel's AI Employee suite includes AI Voice Agent (answers inbound calls and books appointments automatically), Conversation AI (handles SMS, WhatsApp, and chat responses), and Workflow AI (builds automations from plain-language prompts). For businesses where automated lead response speed matters, this is one of GoHighLevel's most significant advantages over Kartra."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-built-for', title: '1. What Is Each Platform Actually Built For?' },
    { id: 'pricing-comparison', title: '2. GoHighLevel vs Kartra Pricing — What Does It Really Cost?' },
    { id: 'kartra-better', title: '3. What Does Kartra Do Better Than GoHighLevel?' },
    { id: 'ghl-better', title: '4. What Does GoHighLevel Do Better Than Kartra?' },
    { id: 'verdict', title: '5. The Verdict by Business Type' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const pricingData = [
    { plan: 'Starting price', ghl: '$97/mo', kartra: '$119/mo' },
    { plan: 'Top tier', ghl: '$497/mo (Agency Pro)', kartra: '$549/mo (Enterprise)' },
    { plan: 'Contacts', ghl: 'Unlimited on every plan', kartra: 'Limited per plan (2,500 to 25,000+)' },
    { plan: 'SMS and calling', ghl: 'Usage-based via Twilio integration', kartra: 'No SMS feature at any tier' },
    { plan: 'Email sending', ghl: 'Usage-based (Mailgun-equivalent)', kartra: 'Included in plan price, with send limits' },
    { plan: 'Hidden/usage fees', ghl: 'Yes (SMS, calls, email, AI billed on usage)', kartra: 'No — one monthly price' },
    { plan: 'Free trial', ghl: '14 days, no credit card', kartra: '14 to 30 days' },
  ];

  const kartraBetterItems = [
    { title: 'Native video hosting with interactive elements', desc: 'Kartra hosts course videos natively with interactive overlays, quizzes embedded in video, and engagement analytics showing exactly where students drop off.' },
    { title: 'Built-in helpdesk with ticketing', desc: 'Kartra includes a full helpdesk feature: email ticketing, FAQ sections, and support organised by department. GoHighLevel has no equivalent.' },
    { title: 'Native live streaming and webinar creation', desc: 'Kartra can host live webinars and streaming sessions natively. GHL has no built-in webinar or live streaming capability.' },
    { title: 'Automatic international sales tax calculation', desc: 'Kartra automatically calculates and applies the correct sales tax (VAT, GST, etc.) based on buyer location. GHL does not have this built in.' },
    { title: 'Drip content scheduling and progress tracking', desc: 'Kartra supports multiple membership levels, drip content scheduling, student progress tracking, quizzes, downloadable files, and community features.' },
    { title: 'Lower learning curve', desc: 'Kartra users consistently highlight ease of use. GoHighLevel\'s most common criticism across reviews is the steep learning curve.' },
  ];

  const ghlBetterItems = [
    { title: 'True 2-way SMS and WhatsApp', desc: 'GoHighLevel includes native 2-way SMS and WhatsApp conversation capability. Kartra has no SMS feature at any tier.' },
    { title: 'AI Employee suite', desc: 'AI Voice Agent answers inbound calls and books appointments automatically. Conversation AI handles SMS, WhatsApp, and chat responses. Workflow AI builds automations from plain-language prompts.' },
    { title: 'Unlimited sub-accounts for agencies', desc: 'GoHighLevel\'s sub-account architecture lets agencies manage unlimited client accounts from one dashboard. Kartra has no sub-accounts at all.' },
    { title: 'Full CRM with pipelines and smart lists', desc: 'GoHighLevel\'s CRM gives real context and client view across every channel (email, SMS, calls, bookings) in one timeline per contact.' },
    { title: 'Native booking calendar with reminders', desc: 'GoHighLevel includes a full booking calendar with automated SMS and email reminders. Kartra\'s calendar is tied more to checkout and scheduling for specific offers.' },
    { title: 'White-label SaaS resale', desc: 'GoHighLevel Agency Pro lets agencies resell the entire platform under their own brand with automated Stripe billing. Kartra has no white-label or reseller capability.' },
  ];

  const capabilityComparison = [
    { capability: 'Native 2-way SMS / WhatsApp', ghl: 'Yes', kartra: 'No' },
    { capability: 'AI Voice Agent / Conversation AI', ghl: 'Yes', kartra: 'No' },
    { capability: 'Sub-accounts / white-label / SaaS resale', ghl: 'Yes', kartra: 'No' },
    { capability: 'Full CRM with cross-channel contact timeline', ghl: 'Yes', kartra: 'Limited' },
    { capability: 'Native video hosting with interactive overlays', ghl: 'Limited', kartra: 'Yes' },
    { capability: 'Built-in helpdesk / ticketing', ghl: 'No', kartra: 'Yes' },
    { capability: 'Native live streaming / webinars', ghl: 'No', kartra: 'Yes' },
    { capability: 'Automatic international sales tax', ghl: 'No', kartra: 'Yes' },
    { capability: 'Affiliate management with commission tiers', ghl: 'Limited', kartra: 'Yes' },
    { capability: 'All-inclusive pricing (no usage fees)', ghl: 'No (SMS/email/AI usage-based)', kartra: 'Yes' },
  ];

  const verdictData = [
    { situation: 'Marketing agency managing 3+ clients', platform: 'GoHighLevel Unlimited or Agency Pro', why: 'Sub-accounts, white-label, SaaS resale — Kartra has none of these' },
    { situation: 'Solo course creator selling digital products', platform: 'Kartra', why: 'Native video hosting, helpdesk, webinars, affiliate management, sales tax handling' },
    { situation: 'Coach running discovery calls and 1-to-1 services', platform: 'GoHighLevel', why: 'Native SMS, booking with reminders, CRM pipeline for lead follow-up' },
    { situation: 'Service business needing AI-driven lead response', platform: 'GoHighLevel', why: 'AI Voice Agent and Conversation AI have no Kartra equivalent' },
    { situation: 'Course creator also running paid ads and SMS follow-up', platform: 'Either, depending on priority', why: 'If SMS and lead automation matter more than course UX, GHL. If course experience matters more, Kartra plus separate SMS tool' },
    { situation: 'Currently on Kartra, considering switching to GHL for agency growth', platform: 'Evaluate carefully', why: 'Switching loses native video hosting, helpdesk, and webinars. Only switch if agency/SMS/AI capability outweighs these' },
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your platform decision.</p>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel vs Kartra 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL vs Kartra</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Course Creators</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel vs Kartra (2026):<br />
            <span className="text-[#F8D000]">Honest Comparison for Course Creators and Agencies</span>
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
            GoHighLevel and Kartra both call themselves all-in-one platforms, and on paper their feature lists overlap 
            significantly: funnels, email, memberships, checkout. Spend a week inside each platform and the overlap mostly 
            disappears. They are built for different businesses solving different problems. 
            <strong className="text-white"> GHL Scale Up</strong> has worked with clients on both platforms. This is the 
            honest comparison, including where Kartra genuinely wins.
          </p>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            For a broader look at all GHL alternatives: 
            <Link href="/blog/gohighlevel-alternatives" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Alternatives 2026 →</Link>
          </p>

          {/* CTA Button 1: Hero Section */}
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
              href="#verdict"
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
                5+ years GHL experience · 200+ systems built and migrated globally. All pricing and feature details verified 
                from official platform pages and independent comparison sources as of June 2026.
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
              <div className="text-sm font-bold text-white mb-2">Not Sure Which Platform Is Right?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help you choose the right platform for your business model.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Advice
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                If you are an agency managing multiple clients or a service business that needs CRM, native SMS, and AI automation, GoHighLevel is the stronger platform.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                If you are a solo course creator or digital product seller whose business runs on selling courses, memberships, and digital 
                products with polished checkout and affiliate management, <strong className="text-[#0E9BF0]">Kartra is genuinely better suited</strong> 
                and includes features GHL does not have at any price: native video hosting, a built-in helpdesk, live streaming, and automatic 
                international sales tax. The honest answer depends entirely on which category describes your business.
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Platform Advice
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

            {/* Section 1: What Built For */}
            <h2 id="what-built-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is Each Platform Actually Built For?
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#0E9BF0] mb-2">Kartra: built for digital product sellers</h3>
                <p className="text-sm text-[#1A2236] leading-relaxed">Kartra is a digital entrepreneur platform designed for creators selling courses, memberships, and digital products with integrated checkout, course hosting, and affiliate management. Every part of Kartra's design reflects this: the checkout flow is polished and conversion-optimised, the membership portal experience is one of the best in the category, and the affiliate management system with commission tiers is built in natively.</p>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">GoHighLevel: built for agencies and service businesses</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">GoHighLevel is an all-in-one marketing automation and CRM platform designed primarily for marketing agencies, consultants, and lead generation businesses. It consolidates CRM, sales funnels, email marketing, SMS marketing, appointment scheduling, reputation management, and white-label SaaS into a single subscription, replacing 5 to 10 standalone tools that agencies typically run.</p>
              </div>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST PATH THROUGH THIS COMPARISON</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Identify which category describes your business: agency or creator. The answer becomes clear quickly. 
                If you manage multiple clients or want to resell software, that single fact outweighs almost every individual 
                feature comparison below. If you are a solo creator selling courses and digital products, the same is true in reverse.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the agency-specific business model: 
              <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label SaaS Guide →</Link>
            </p>

            {/* CTA Button 3: After Section 1 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Still unsure which platform fits your business model?</span> Let our team help you decide.
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

            {/* Section 2: Pricing */}
            <h2 id="pricing-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. GoHighLevel vs Kartra Pricing — What Does It Really Cost?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Kartra</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.kartra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST COST NOTE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GoHighLevel's $97/month headline price does not include everything. SMS, voice calls, and email sending are billed on usage 
                on top of the subscription. For a business sending moderate volumes, this typically adds $20 to $60 per month. Kartra's pricing, 
                by contrast, is genuinely all-inclusive at each tier. No usage-based surprises. For a course creator comparing the two on pure 
                predictability of monthly cost, Kartra's pricing model is simpler to budget for.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full GHL plan and usage fee breakdown: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing 2026 →</Link>
            </p>

            {/* Section 3: Kartra Better */}
            <h2 id="kartra-better" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Does Kartra Do Better Than GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the section most GHL-focused comparisons skip. It should not be skipped.
            </p>

            <div className="space-y-3 mb-6">
              {kartraBetterItems.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#1A2236] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button 4: After Kartra Better */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">📹 A course creator? Kartra might be your answer.</p>
              <p className="text-sm text-white/80 mb-4">But if you need CRM, SMS, and AI automation alongside course delivery, let's talk about GHL.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get a Free Analysis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 4: GHL Better */}
            <h2 id="ghl-better" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Does GoHighLevel Do Better Than Kartra?
            </h2>

            <div className="space-y-3 mb-6">
              {ghlBetterItems.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#1A2236] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Capability</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Kartra</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilityComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.capability}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.kartra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA Button 5: After GHL Better */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🤖 Need AI-driven lead response and SMS automation?</p>
              <p className="text-sm text-white/80 mb-4">GoHighLevel has capabilities Kartra simply doesn't offer at any tier.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Explore GHL Capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 5: Verdict */}
            <h2 id="verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. The Verdict by Business Type
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Recommended platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {verdictData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.situation}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For coaches specifically evaluating GHL's discovery call and follow-up automation: 
              <Link href="/blog/gohighlevel-for-coaches" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Coaches and Consultants →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For course creators considering a switch from Kajabi (a closely related platform to Kartra): 
              <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline ml-1">Kajabi to GoHighLevel Migration →</Link>
            </p>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">SEE THE RESULTS BEFORE DECIDING</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                If your business is agency-shaped (multiple clients, SMS-driven follow-up, AI automation), see what GHL has delivered 
                for similar businesses: 
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For a direct recommendation based on your specific setup, 
                <Link href="/contact" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* CTA Button 6: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Still not sure if you're agency-shaped or creator-shaped?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your business model and tell you honestly which platform fits.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Free Platform Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 6: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              6. Frequently Asked Questions
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
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Which Platform to Choose?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our GHL experts directly. We've helped businesses on both platforms choose the right fit.</p>
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
                <Link href="/blog/gohighlevel-alternatives" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Alternatives: 8 Best Tools Compared →</Link>
                <Link href="/blog/gohighlevel-for-coaches" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Coaches and Consultants →</Link>
                <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel Migration →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Deciding between GoHighLevel and Kartra for your business?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up will tell you honestly which one fits. Book a free 30-minute strategy call. 
                  We look at your business model (agency or creator) and tell you honestly which platform fits, 
                  including if Kartra is the better choice for your situation.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
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