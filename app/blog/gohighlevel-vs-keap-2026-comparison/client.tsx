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
  Info,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function GoHighLevelVsKeapClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'business-type',
        'all-in-one',
        'funnels',
        'automation',
        'ai-capabilities',
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
          }
        }
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
      a: "At the entry tier, yes. GoHighLevel's Starter plan is $97/month with unlimited contacts. Keap's base plan is $249–$299/month for only 2 users and 1,500 contacts, plus an implementation fee and $39/month per additional user. For a growing team or contact list, GoHighLevel's flat pricing is usually cheaper over time."
    },
    {
      q: "Does Keap have SMS marketing like GoHighLevel?",
      a: "Yes. Keap includes native two-way SMS through its Business Line feature, built directly into its automation canvas, at the base plan tier. The real difference isn't presence vs. absence it's reach: Keap's SMS and phone features are largely US-only (Canada for 1:1 texting only), while GoHighLevel supports broader international coverage plus additional channels like WhatsApp and AI voice calling."
    },
    {
      q: "Can Keap be used by a marketing agency to manage multiple clients?",
      a: "Not in the way GoHighLevel is designed for this. Keap has no sub-accounts or white-labeling, so an agency would need a separate subscription per client. GoHighLevel's Unlimited and Agency SaaS Pro plans are built specifically for managing multiple client accounts from one login."
    },
    {
      q: "Why does Keap have such a low Trustpilot rating despite decent G2 and Capterra scores?",
      a: "Independent reviews attribute this mainly to billing and cancellation experiences, including an early termination fee on annual contracts. Reviewers on G2 and Capterra tend to rate feature capability more favorably than Trustpilot reviewers, who are often writing after a billing dispute."
    },
    {
      q: "Does Keap have AI features?",
      a: "Yes. Keap added an Automation Assistant in 2025 that generates campaign sequences from a plain-English prompt, plus SmartSend AI for send-time optimization. GoHighLevel's AI Employee suite (AI Voice Agent, Conversation AI) covers different ground inbound call handling and lead qualification. Which matters more depends on whether your bottleneck is building campaigns or handling inbound calls."
    },
    {
      q: "Is Keap still called Infusionsoft?",
      a: "No. Infusionsoft rebranded to Keap in 2019, and Keap was acquired by Thryv Holdings in late 2024. The core automation engine carried over from Infusionsoft, with a streamlined interface under the Keap name."
    },
    {
      q: "Can I migrate from Keap to GoHighLevel if I already have contacts and automations built?",
      a: "Yes, though it requires planning Keap's Campaign Builder sequences don't export and need to be rebuilt as GoHighLevel workflows. For the full process, what transfers, and a realistic timeline, see our Keap to GoHighLevel migration guide."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'business-type', title: '1. Which Platform Fits Your Business Type?' },
    { id: 'all-in-one', title: '2. Is GoHighLevel Really an All-in-One Replacement for Other Tools?' },
    { id: 'funnels', title: '3. How Do the Funnel and Website Builders Compare?' },
    { id: 'automation', title: '4. Which Platform Automates Better?' },
    { id: 'ai-capabilities', title: '5. AI Capabilities: Not a One-Sided Comparison' },
    { id: 'cost', title: '6. What Does Each Platform Actually Cost in 2026?' },
    { id: 'reviews', title: '7. How Do Real Users Rate GoHighLevel and Keap?' },
    { id: 'learning', title: '8. Which Platform Is Easier to Learn and Better Supported?' },
    { id: 'choose-keap', title: '9. Who Should Choose Keap?' },
    { id: 'choose-ghl', title: '10. Who Should Choose GoHighLevel?' },
    { id: 'mistakes', title: '11. What Are the Common Mistakes People Make When Choosing?' },
    { id: 'faq', title: '12. Frequently Asked Questions' }
  ];

  const businessFit = [
    { situation: 'Marketing agency serving multiple clients', betterFit: 'GoHighLevel', why: 'Sub-accounts and white-labelling are built in; Keap has neither' },
    { situation: 'Freelancer who wants funnels, SMS, and CRM in one place', betterFit: 'GoHighLevel', why: 'Native funnel builder plus SMS in one account' },
    { situation: 'Solo service business wanting simple CRM + invoicing', betterFit: 'Keap', why: 'Simpler setup, strong built-in invoicing and quoting' },
    { situation: 'Business needing email + SMS automation and booking', betterFit: 'Either evaluate cost per contact', why: 'Both support this natively; pricing model differs (flat vs. per-user/contact)' },
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
    'Native SMS via a dedicated business phone number',
    'Basic landing pages',
    'Appointment scheduling',
    'Invoicing, quoting, and payment processing',
    'Sales pipeline with lead scoring'
  ];

  const ghlPricing = [
    { plan: 'Starter', price: '$97/month', includes: 'Full marketing suite for a single business, unlimited contacts' },
    { plan: 'Unlimited', price: '$297/month', includes: 'Multiple client sub-accounts, white-label branding, unlimited contacts and users' },
    { plan: 'Agency SaaS Pro', price: '$497/month', includes: 'Everything in Unlimited plus reselling GoHighLevel as your own branded software' }
  ];

  const keapPricing = [
    { item: 'Base plan (annual billing)', amount: '$249/month', notes: 'Includes 2 users and 1,500 contacts; Keap consolidated its former tier structure (Pro/Max/Ultimate) into this single plan in 2024–2025' },
    { item: 'Base plan (monthly billing)', amount: '$299/month', notes: 'Same 2 users and 1,500 contacts' },
    { item: 'Additional users', amount: '$39/month each', notes: 'Beyond the 2 included in the base plan' },
    { item: 'Mandatory implementation fee', amount: 'Roughly $500–$1,500 one-time', notes: 'Charged on top of the first month for new accounts' },
    { item: 'Additional contacts', amount: 'Scales upward', notes: 'Cost increases as contact count grows beyond 1,500' }
  ];

  const reviewScores = [
    { platform: 'G2', ghl: '~4.2 / 5', keap: '~3.8 / 5' },
    { platform: 'Capterra', ghl: '~4.6 / 5', keap: '~3.8–4.1 / 5' },
    { platform: 'Trustpilot', ghl: '~4.6–4.9 / 5', keap: '~1.2–1.7 / 5' }
  ];

  const chooseKeap = [
    'Solo consultants or small service businesses that want a simple, all-included CRM without configuring a broader marketing stack.',
    'Businesses with heavy invoicing and quoting needs, since Keap\'s payment and invoicing tools are mature and were built specifically for this.',
    'Teams under 3 people with fewer than 1,500 contacts, where Keap\'s base pricing is straightforward and does not yet trigger per-user or per-contact scaling costs.',
    'Businesses that will never serve external clients through the platform, since Keap\'s lack of sub-accounts and white-labelling is only a limitation if you plan to resell or manage other businesses\' accounts.',
    'Existing Keap/Infusionsoft users with years of automation already built, where migration cost may outweigh the benefit of switching.'
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
    'Assuming Keap has no SMS or automation depth it has both, natively; the real question is whether its US/Canada-only geographic coverage fits your business.',
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
      <Link href="/book-a-call" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered · Pricing and capability claims independently verified, September 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            If you are comparing GoHighLevel and Keap, you have probably watched a few affiliate comparison videos already. We don't sell Keap and aren't paid by either company for this comparison. This guide gives you the honest, verified 2026 picture so you can decide based on your actual business.
          </p>

          {/* Direct Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Direct answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Choose GoHighLevel if you're an agency, freelancer, or marketer who needs funnels, websites, and multi-client management under one flat-rate account starting at $97/month. Choose Keap if you're a single small service business that wants strong email-and-SMS automation, built-in invoicing, and appointment scheduling, and you don't need agency features like sub-accounts or white-labeling. Keap's price starts around $249–$299/month but only includes 2 users and 1,500 contacts, with a mandatory implementation fee on top verify your real monthly cost before comparing headline prices. Note: contrary to some comparisons, Keap does have native SMS built into its automation builder the real limitation is that it's US-only for most features (Canada for 1:1 texting only), not an absent feature.
            </p>
          </div>

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
              href="#choose-ghl"
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
              GoHighLevel and Keap are both described as CRMs, but they're built for different starting points.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is built for people managing marketing on behalf of others, or businesses that want every marketing tool under one login funnels, automation, SMS, email, websites, and client management in one system. This fits digital marketing agencies, freelancers with multiple clients, and coaches running multi-channel outreach.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap, formerly Infusionsoft, has been in the small-business CRM space since 2001 and was acquired by Thryv Holdings in late 2024. It's built for a single business managing its own contacts, appointments, invoices, and follow-up not for an agency managing several client accounts. Keap emphasizes a more guided setup experience over GoHighLevel's breadth of tools.
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

            {/* Section 2: All-in-One */}
            <h2 id="all-in-one" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Is GoHighLevel Really an All-in-One Replacement for Other Tools?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's marketing claims it replaces a stack of separate tools with one system. This holds up reasonably well against what's actually included: CRM and pipelines, sales funnels and a website builder, forms, email, two-way SMS, booking, workflow automation, course/community hosting, call tracking and reputation management, and analytics.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap's native stack is narrower but genuine: CRM and contact management, email marketing and automated follow-up, native SMS via a dedicated business phone number, basic landing pages, appointment scheduling, invoicing and payment processing, and sales pipeline with lead scoring.
            </p>
            {/* <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel includes natively:</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {ghlFeatures.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What Keap includes natively:</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {keapFeatures.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul> */}

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST TRADE-OFF</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                more tools in one place isn't automatically better. If you only need email/SMS automation, appointment booking, and invoicing, Keap's narrower focus can feel less overwhelming than a platform with far more modules. The all-in-one advantage matters most when you actually plan to use the funnel builder, website tools, or multi-client management not just the CRM.
              </p>
            </div>

            {/* Section 3: Funnels */}
            <h2 id="funnels" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do the Funnel and Website Builders Compare?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This remains one of the widest real gaps between the platforms. GoHighLevel includes a drag-and-drop funnel and website builder plus membership site creation for selling courses for agencies building client-facing pages, this removes the need for a separate ClickFunnels or Leadpages subscription. Keap includes basic landing pages, but page-building is a supporting feature, not a core one advanced multi-step funnels, order bumps, and upsell sequences are more limited than on GoHighLevel.
            </p>

            {/* Section 4: Automation */}
            <h2 id="automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Which Platform Automates Better?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Both platforms support SMS inside their automation builder this is a genuine correction from how this comparison has been framed elsewhere.</strong> Keap's Business Line provides a dedicated business phone number with native two-way texting built into its automation canvas, included at the base plan tier, alongside caller ID, voicemail, and auto-reply. The real limitation is geographic: Keap's SMS and phone features are largely US-only, with Canada supported for 1:1 texting only.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's automation reaches further across channels: workflows can trigger SMS, email, calls, and other actions in a single sequence, with broader international phone number support and additional channels like WhatsApp and AI voice calling that Keap doesn't offer. A missed call can automatically trigger a text, followed by an email, followed by a task for a team member all in one workflow.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE AUTOMATION VERDICT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                if your follow-up is mostly email-and-SMS within the US or Canada, Keap's automation is genuinely solid and well-tested it is not the SMS-free platform some comparisons describe. If you need broader international reach, WhatsApp, AI voice calling, or call-based automation triggers beyond simple texting, GoHighLevel's channel breadth is the stronger fit.
              </p>
            </div>

            {/* Section 5: AI Capabilities */}
            <h2 id="ai-capabilities" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. AI Capabilities: Not a One-Sided Comparison
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both platforms have added real AI capability recently, and neither should be credited as having no answer here.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's AI Employee suite AI Voice Agent, Conversation AI, and Workflow AI handles inbound call answering, lead qualification, and workflow assistance natively.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keap added its own AI features in 2025: an Automation Assistant that generates complete campaign sequences from a plain-English prompt, and SmartSend AI for send-time optimization. Reviewers have called the automation builder one of Keap's strongest features, and the AI additions build directly on that strength rather than bolting AI on as an afterthought.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Neither platform's AI is a reason to choose it on its own GoHighLevel's AI Voice Agent matters if inbound call handling is core to your business; Keap's Automation Assistant matters if campaign-building speed is your bottleneck. Evaluate based on which specific capability solves a problem you actually have.
            </p>

            {/* Section 6: Cost */}
            <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Does Each Platform Actually Cost in 2026?
            </h2>

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

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HIDDEN COST GAP</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                a new Keap customer typically pays $750–$800+ in month one once the implementation fee is included, then $249–$299/month afterward within the base limits. Add team members or grow past 1,500 contacts and the monthly cost climbs, since Keap charges per user and per contact tier. GoHighLevel's $297 Unlimited plan includes unlimited users and contacts at a flat rate, so cost doesn't increase as your team or list grows.
              </p>
            </div>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/ghl-vs-keap-comparison.png"
                  alt="GoHighLevel vs Keap: Feature comparison, pricing breakdown, automation capabilities, and AI features overview"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel vs Keap: Feature comparison, pricing breakdown, automation capabilities, and AI features overview</span>
              </div>
            </div>

            {/* Section 7: Reviews */}
            <h2 id="reviews" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. How Do Real Users Rate GoHighLevel and Keap?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Review scores tell a fairly consistent story across independent platforms, though exact figures shift over time and are worth reverifying directly before publishing or citing precisely.
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
              <strong className="text-[#1A2236]">The gap on Trustpilot is the most striking pattern.</strong> Keap's Trustpilot score sits well below its G2 and Capterra scores. Independent reviews commonly attribute this to billing and cancellation friction, including an early termination fee on annual contracts and reported support wait times when customers dispute charges or try to cancel. GoHighLevel's scores are more consistent across all three sites.
            </p>

            {/* Section 8: Learning */}
            <h2 id="learning" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. Which Platform Is Easier to Learn and Better Supported?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's breadth is also its biggest usability challenge new users often describe it as feature-rich but overwhelming in the first few weeks, simply because there's more to learn. Keap's narrower feature set generally means a shorter learning curve for someone who only needs CRM, email/SMS, and invoicing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both platforms are frequently praised for support responsiveness, though the context differs: GoHighLevel's support covers a wider feature surface, while Keap's support is often highlighted specifically for guiding small business owners through initial setup.
            </p>

            {/* Section 9: Choose Keap */}
            <h2 id="choose-keap" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. Who Should Choose Keap?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {chooseKeap.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section 10: Choose GHL */}
            <h2 id="choose-ghl" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. Who Should Choose GoHighLevel?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {chooseGHL.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section 11: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              11. What Are the Common Mistakes People Make When Choosing?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {mistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section 12: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              12. Frequently Asked Questions
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

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still not sure which platform fits your business?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free strategy call</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/keap-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Keap to GoHighLevel Migration Guide →</Link>
                <Link href="/gohighlevel-saas-mode" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: The Complete 2026 Guide →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
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