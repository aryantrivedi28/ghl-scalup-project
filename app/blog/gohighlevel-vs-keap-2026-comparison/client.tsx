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
  Lightbulb,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Shield,
  Sparkles,
  BarChart3,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelVsKeapClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'business-type',
        'all-in-one',
        'funnels',
        'automation',
        'cost',
        'reviews',
        'learning',
        'choose-keap',
        'choose-ghl',
        'mistakes',
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
      q: "Is GoHighLevel cheaper than Keap?",
      a: "At the entry tier, yes. GoHighLevel's Starter plan is $97/month with unlimited contacts. Keap's base plan is $249 to $299/month for only 2 users and 1,500 contacts, plus a mandatory implementation fee of approximately $500 and $39/month for each additional user. For a growing team or contact list, GoHighLevel's flat pricing is usually the cheaper option over time."
    },
    {
      q: "Can Keap be used by a marketing agency to manage multiple clients?",
      a: "Not in the way GoHighLevel is designed for this. Keap does not offer sub-accounts or white-labelling, so an agency would need a separate Keap subscription for every client rather than managing them from one dashboard. GoHighLevel's Unlimited and Agency SaaS Pro plans are built specifically for managing multiple client accounts from a single login."
    },
    {
      q: "Does Keap have SMS marketing like GoHighLevel?",
      a: "Keap does not include native SMS marketing or call-based automation triggers the way GoHighLevel does. Keap's automation strength is in email sequences and follow-up tasks. If SMS and missed-call automation are important to your business, GoHighLevel supports these natively."
    },
    {
      q: "Why does Keap have such a low Trustpilot rating despite decent G2 and Capterra scores?",
      a: "Independent reviews attribute this gap mainly to billing and cancellation experiences, including an early termination fee on annual contracts and support wait times when customers try to dispute charges or cancel. Reviewers evaluating features on G2 and Capterra tend to rate the automation and CRM capabilities more favourably than reviewers on Trustpilot who are often writing after a billing dispute."
    },
    {
      q: "Is Keap still called Infusionsoft?",
      a: "No. Infusionsoft rebranded to Keap in 2019 to signal a simpler, more accessible product direction. The core automation engine carried over from Infusionsoft, but the interface and onboarding experience were streamlined under the Keap name."
    },
    {
      q: "Which platform is easier to learn for a complete beginner?",
      a: "Keap generally has a shorter learning curve because it covers fewer features CRM, email, and invoicing without the additional modules GoHighLevel includes. GoHighLevel takes longer to learn well but replaces more separate tools once configured. Working with an experienced setup partner shortens the learning curve significantly on either platform."
    },
    {
      q: "Can I migrate from Keap to GoHighLevel if I already have contacts and automations built in Keap?",
      a: "Yes, though it requires planning. Keap contact exports and campaign automations do not transfer automatically and typically need to be rebuilt as GoHighLevel workflows. A properly planned migration usually takes 3 to 6 weeks depending on how much automation and contact history you have in Keap."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'business-type', title: '1. Which Platform Fits Your Business Type?' },
    { id: 'all-in-one', title: '2. Is GoHighLevel Really an All-in-One Replacement for Other Tools?' },
    { id: 'funnels', title: '3. How Do the Funnel and Website Builders Compare?' },
    { id: 'automation', title: '4. Which Platform Automates Better?' },
    { id: 'cost', title: '5. What Does Each Platform Actually Cost in 2026?' },
    { id: 'reviews', title: '6. How Do Real Users Rate GoHighLevel and Keap?' },
    { id: 'learning', title: '7. Which Platform Is Easier to Learn and Better Supported?' },
    { id: 'choose-keap', title: '8. Who Should Choose Keap?' },
    { id: 'choose-ghl', title: '9. Who Should Choose GoHighLevel?' },
    { id: 'mistakes', title: '10. What Are the Common Mistakes People Make When Choosing?' },
    { id: 'faq', title: '11. Frequently Asked Questions' }
  ];

  const businessFit = [
    { situation: 'Marketing agency serving multiple clients', betterFit: 'GoHighLevel', why: 'Sub-accounts and white-labelling are built in; Keap has neither' },
    { situation: 'Freelancer who wants funnels, SMS, and CRM in one place', betterFit: 'GoHighLevel', why: 'Native funnel builder and SMS; Keap has neither natively' },
    { situation: 'Solo service business (coach, consultant, clinic) wanting simple CRM + invoicing', betterFit: 'Keap', why: 'Simpler setup, strong built-in invoicing and quoting' },
    { situation: 'Business that mainly needs email automation and appointment booking', betterFit: 'Either, evaluate cost per contact', why: 'Keap is purpose-built for this; GoHighLevel does it too, at flat pricing' },
    { situation: 'Business planning to resell software to its own clients', betterFit: 'GoHighLevel', why: 'SaaS Mode allows reselling; not available on Keap' }
  ];

  const ghlFeatures = [
    'CRM and pipeline management',
    'Sales funnels and landing pages',
    'A website builder',
    'Forms and surveys',
    'Email marketing',
    'Two-way SMS marketing',
    'Booking and appointment scheduling',
    'Workflow automation',
    'Course and community hosting for selling products',
    'Call tracking and reputation management',
    'Tracking and analytics',
    'Custom branding on mobile and desktop'
  ];

  const keapFeatures = [
    'CRM and contact management',
    'Email marketing and automated follow-up',
    'Basic landing pages',
    'Appointment scheduling',
    'Invoicing, quoting, and payment processing',
    'Sales pipeline and lead scoring (on higher tiers)',
    'A dedicated business phone number'
  ];

  const ghlPricing = [
    { plan: 'Starter', price: '$97/month', includes: 'Full marketing suite for a single business, unlimited contacts' },
    { plan: 'Unlimited', price: '$297/month', includes: 'Multiple client sub-accounts, white-label branding, unlimited contacts and users' },
    { plan: 'Agency SaaS Pro', price: '$497/month', includes: 'Everything in Unlimited plus the ability to resell GoHighLevel as your own branded software' }
  ];

  const keapPricing = [
    { item: 'Base plan (annual billing)', amount: '$249/month', notes: 'Includes 2 users and 1,500 contacts, all features' },
    { item: 'Base plan (monthly billing)', amount: '$299/month', notes: 'Same 2 users and 1,500 contacts' },
    { item: 'Additional users', amount: '$39/month each', notes: 'Beyond the 2 included in the base plan' },
    { item: 'Mandatory implementation fee', amount: 'Approximately $500 one-time', notes: 'Charged on top of the first month, historically required for new accounts' },
    { item: 'Additional contacts', amount: 'Scales upward', notes: 'Cost increases as your contact count grows beyond 1,500' }
  ];

  const reviewScores = [
    { platform: 'G2', ghl: 'Approximately 4.2 out of 5', keap: 'Approximately 3.8 out of 5' },
    { platform: 'Capterra', ghl: 'Approximately 4.6 out of 5', keap: 'Approximately 3.8 to 4.1 out of 5' },
    { platform: 'Trustpilot', ghl: 'Approximately 4.6 to 4.9 out of 5', keap: 'Approximately 1.2 to 1.7 out of 5' }
  ];

  const chooseKeap = [
    'Solo consultants or small service businesses that want a simple, all-included CRM without configuring a broader marketing stack.',
    'Businesses with heavy invoicing and quoting needs, since Keap\'s payment and invoicing tools are mature and were built specifically for this.',
    'Teams under 3 people with fewer than 1,500 contacts, where Keap\'s base pricing is straightforward and does not yet trigger per-user or per-contact scaling costs.',
    'Businesses that will never serve external clients through the platform, since Keap\'s lack of sub-accounts and white-labelling is only a limitation if you plan to resell or manage other businesses\' accounts.',
    'Existing Infusionsoft or Keap users with years of automation already built, where migration cost may outweigh the benefit of switching.'
  ];

  const chooseGHL = [
    'Marketing agencies and freelancers managing multiple client accounts, since sub-accounts and white-labelling are built into GoHighLevel and unavailable on Keap.',
    'Businesses that want funnels, SMS, and website building in the same account as their CRM, rather than paying for and connecting separate tools.',
    'Growing teams and contact lists that want to avoid Keap\'s per-user and per-contact pricing increases.',
    'Coaches and course creators who want to host courses and communities without a separate platform.',
    'Founders who may want to resell software as their own branded product, which GoHighLevel\'s SaaS Mode supports and Keap does not offer at all.'
  ];

  const mistakes = [
    'Comparing only the headline monthly price without checking what is included at that price point.',
    'Choosing Keap for its lower-looking entry price, then being surprised by the implementation fee and per-user costs.',
    'Choosing GoHighLevel for its breadth without a plan to actually use the funnel, SMS, or website tools included.',
    'Ignoring the Trustpilot billing and cancellation pattern when evaluating Keap, since these issues surface mainly after signup, not during the sales process.',
    'Assuming an agency can operate on Keap, when sub-accounts and white-labelling are not available on the platform at all.',
    'Watching only affiliate comparison videos without checking independent review sites or verifying current pricing directly with each vendor.'
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
          <span className="text-[#1A2236] font-medium">GoHighLevel vs Keap</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Keap</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel vs Keap:<br />
            <span className="text-[#F8D000]">Which CRM Should You Choose in 2026?</span>
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
            If you are comparing GoHighLevel and Keap, you have probably watched a few YouTube comparison videos already. Most of them are made by affiliates promoting one platform with bonus trials and referral links attached. At <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link>, we do not sell Keap and we are not paid by either company for this comparison. We have set up and migrated both platforms for real agencies and small businesses. This guide gives you the honest, verified 2026 numbers so you can decide based on your actual business, not someone else's affiliate commission.
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
                5+ years GHL experience · 200+ projects delivered across real estate, healthcare, SaaS, agencies,
                and home services in 6 countries.
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
              <div className="text-sm font-bold text-white mb-2">Need Your GHL Built Right?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">From CRM setup to AI voice agents we build complete GHL systems that actually work.</p>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Choose GoHighLevel if you are an agency, freelancer, or marketer who needs funnels, SMS, websites, and automation for multiple clients under one flat-rate account starting at $97/month.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Choose Keap if you are a single small service business that wants strong email automation, built-in invoicing, and appointment scheduling, and you do not need agency features like sub-accounts or white-labelling. Keap's published price starts at $249 to $299/month but only includes 2 users and 1,500 contacts, with extra users and a mandatory setup fee added on top, so verify your real monthly cost before comparing headline prices.
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

            {/* Section 1: Business Type */}
            <h2 id="business-type" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Which Platform Fits Your Business Type?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel and Keap are both described as CRMs, but they are built for different starting points. Before comparing individual features, it helps to understand who each platform was designed for.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel: built for agencies, marketers, and freelancers</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is an all-in-one platform built for people managing marketing on behalf of others, or businesses that want every marketing tool under one login. It covers funnels, automation, SMS marketing, email, websites, and client management in a single system. This makes it a natural fit for digital marketing agencies, freelancers taking on multiple clients, and coaches or consultants running their own multi-channel outreach.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Keap: built for small businesses that want simplicity</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap, formerly known as Infusionsoft, has been in the small business CRM space for over two decades. It is built for a single business managing its own contacts, appointments, invoices, and email follow-up, not for an agency managing several client accounts. Keap emphasises simplicity and a more guided setup experience over the breadth of tools GoHighLevel offers.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Better Fit</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {businessFit.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.betterFit}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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

            {/* Section 2: All-in-One */}
            <h2 id="all-in-one" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Is GoHighLevel Really an All-in-One Replacement for Other Tools?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A common claim in GoHighLevel marketing is that it replaces a stack of separate tools a funnel builder, an email automation tool, and a scheduling app with one system. This claim holds up reasonably well when you look at what is actually included.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel includes natively</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {ghlFeatures.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What Keap includes natively</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {keapFeatures.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST TRADE-OFF</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                More tools in one place is not automatically better. If you only need email automation, appointment booking, and invoicing, Keap's narrower focus can feel less overwhelming than logging into a platform with 15 different modules. The all-in-one advantage matters most when you actually plan to use the funnel builder, SMS, or website tools, not just the CRM.
              </p>
            </div>

            {/* Section 3: Funnels */}
            <h2 id="funnels" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do the Funnel and Website Builders Compare?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For agencies and marketers who build client-facing pages, this is one of the widest gaps between the two platforms.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel's funnel and website tools</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel includes a drag-and-drop funnel and website builder designed for building sales funnels, landing pages, and full websites without a separate tool. It also supports membership site creation, which lets you sell online courses or gated content directly from the same account. For agencies building funnels on behalf of clients, this removes the need for a separate ClickFunnels or Leadpages subscription.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Keap's page-building tools</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap includes basic landing page functionality, but it is not built around funnel construction the way GoHighLevel is. Keap's product focus is CRM and automation first, with landing pages as a supporting feature rather than a core one. If your business needs advanced multi-step funnels, order bumps, or upsell sequences, Keap's page tools are more limited.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For the complete breakdown of what a niche-specific funnel and website setup looks like on GoHighLevel: <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
              </p>
            </div>

            {/* Section 4: Automation */}
            <h2 id="automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Which Platform Automates Better?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both platforms are built around the idea of automating what happens after someone becomes a lead. The difference is in how many channels that automation reaches.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel automation</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel workflows can trigger across text messages, emails, phone calls, and other channels in a single automation. This makes it possible to build a sequence where a missed call automatically triggers a text, followed by an email, followed by a task for a team member, all inside one workflow builder. This multi-channel reach is well suited to businesses that rely on fast, varied follow-up, such as local service businesses and agencies managing several client accounts.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Keap automation</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap's automation is mature and well documented, having been refined since its Infusionsoft days. It handles email sequences, basic follow-up tasks, and scheduling reminders reliably. It is not built for SMS or call-based triggers in the same way GoHighLevel is, so businesses whose customer journey depends heavily on text messaging may find Keap's automation narrower than they need.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE AUTOMATION VERDICT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If your follow-up strategy is mostly email-based, Keap's automation is genuinely solid and well-tested. If your follow-up strategy depends on SMS, missed-call text-back, or multi-channel sequences, GoHighLevel is the stronger option because Keap does not natively support SMS or call-based automation triggers.
              </p>
            </div>

            {/* CTA Button 4: After Automation */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🤖 Need multi-channel automation with SMS and calls?</p>
              <p className="text-sm text-white/80 mb-4">GoHighLevel has capabilities Keap simply doesn't offer at any tier.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Explore GHL Automation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 5: Cost */}
            <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Does Each Platform Actually Cost in 2026?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Pricing is where headline numbers can be misleading if you do not read the fine print. Here are the verified 2026 numbers for both platforms.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel pricing</strong>
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What's Included</th>
                  </tr>
                </thead>
                <tbody>
                  {ghlPricing.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Keap pricing</strong>
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What You Pay</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Amount</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {keapPricing.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.amount}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HIDDEN COST GAP</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Keap's advertised price rarely reflects what you actually pay in year one. A new Keap customer with the base plan typically pays $750 to $800 in month one once the implementation fee is included, then $249 to $299 per month afterward if they stay within 2 users and 1,500 contacts. Add a few more team members or grow past 1,500 contacts, and the monthly cost climbs quickly because Keap charges per user and per contact tier. GoHighLevel's $297 Unlimited plan includes unlimited users and unlimited contacts at a flat rate, so cost does not increase as your team or contact list grows.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-center text-white">
              <p className="text-sm text-white/80 leading-relaxed mb-3 max-w-md mx-auto">
                <strong className="text-white">NOT SURE WHICH PLATFORM FITS YOUR BUDGET?</strong>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-4 max-w-md mx-auto">
                GHL Scale Up runs a free cost comparison based on your actual team size, contact volume, and feature needs.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book Your Free Cost Analysis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 6: Reviews */}
            <h2 id="reviews" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do Real Users Rate GoHighLevel and Keap?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Review scores tell a consistent story across independent platforms. Here are the verified 2026 ratings from the three major software review sites.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Keap</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewScores.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.keap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The gap on Trustpilot is the most striking pattern.</strong> Keap's Trustpilot score is notably lower than its G2 and Capterra scores. Independent reviews attribute this to billing and cancellation friction, including an early termination fee on annual contracts and reports of long support wait times when customers try to dispute charges or cancel. GoHighLevel's scores are more consistent across all three platforms, with reviewers most commonly citing cost savings from tool consolidation and strong customer support response times.
            </p>

            {/* Section 7: Learning */}
            <h2 id="learning" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Which Platform Is Easier to Learn and Better Supported?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Ease of use and support quality often matter as much as the feature list, especially for a small team without a dedicated technical person.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Learning curve</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's breadth is also its biggest usability challenge. New users commonly describe the platform as feature-rich but overwhelming in the first few weeks, simply because there are more modules to learn than a narrower tool would have. Keap's more focused feature set generally means a shorter learning curve for someone who only needs CRM, email, and invoicing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Customer support</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both platforms are frequently praised for support responsiveness in reviews, though the context differs. GoHighLevel's support fields questions across a much wider surface area of features. Keap's support is often highlighted specifically for guiding small business owners through initial setup, which fits its positioning as a simpler, more guided platform.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST LEARNING CURVE VERDICT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you want the fastest path to a working system with minimal training, Keap's narrower feature set gets you there sooner. If you are willing to invest a few weeks learning a broader platform in exchange for replacing several other tools, GoHighLevel's learning curve pays off through consolidation. Working with an experienced setup partner meaningfully shortens this curve on either platform.
              </p>
            </div>

            {/* CTA Button 5: After Learning */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">📚 Want to skip the learning curve entirely?</p>
              <p className="text-sm text-white/80 mb-4">Let our experts set up your chosen platform correctly from day one.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Get Expert Setup
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 8: Choose Keap */}
            <h2 id="choose-keap" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. Who Should Choose Keap?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {chooseKeap.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section 9: Choose GHL */}
            <h2 id="choose-ghl" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. Who Should Choose GoHighLevel?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {chooseGHL.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">FEATURED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If reselling software as your own branded product is part of your plan, see our cornerstone guide: <Link href="/gohighlevel-saas-mode" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: The Complete 2026 Guide →</Link>
              </p>
            </div>

            {/* CTA Button 6: Before Mistakes */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Still not sure which platform to choose?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your business model, team size, and revenue channels and tell you honestly which platform fits.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Free Platform Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 10: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. What Are the Common Mistakes People Make When Choosing?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {mistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Every comparison in this guide is grounded in verified 2026 pricing and independently sourced review data, not affiliate promotion. See <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies</Link> to review actual client outcomes on the platform.
            </p>

            {/* CTA Button 7: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚠️ Don't make a costly platform mistake.</p>
              <p className="text-sm text-white/80 mb-4">Get a free, no-obligation platform assessment from experts who've built on both platforms.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Shield className="w-4 h-4" />
                Get a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 11: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              11. Frequently Asked Questions
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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/gohighlevel-saas-mode" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: The Complete 2026 Guide →</Link>
                <Link href="/blog/keap-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Keap to GoHighLevel Migration Guide →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Service →</Link>
                <Link href="/blog/how-to-get-first-gohighlevel-saas-clients" className="text-sm text-[#0E9BF0] hover:underline">How to Get Your First 10 GoHighLevel SaaS Clients →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to choose the right platform and get it set up correctly?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps agencies and small businesses choose the right platform, then handles the full setup, migration, and go-to-market execution.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency founded by Aryan Trivedi · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency founded by Aryan Trivedi. Based in India, we serve agencies and SaaS founders across 6 countries with 200+ GoHighLevel builds delivered, including Keap-to-GoHighLevel migrations. This comparison reflects direct experience setting up both platforms plus independently verified 2026 pricing and review data. We do not receive commission from either GoHighLevel or Keap for this comparison.
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