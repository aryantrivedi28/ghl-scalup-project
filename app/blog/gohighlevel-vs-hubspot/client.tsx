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
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Award,
  BarChart3,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelVsHubSpotClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-platforms-built-for',
        'pricing-comparison',
        'feature-comparison',
        'agency-use-case',
        'when-hubspot-right',
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
      q: "Is GoHighLevel better than HubSpot?",
      a: "GoHighLevel is better than HubSpot for marketing agencies managing multiple client accounts, service businesses needing native SMS and AI features, and agencies that want to white-label or resell a platform. HubSpot is better for enterprise B2B companies with complex sales cycles, large in-house marketing teams, and businesses that need deep third-party integrations. The answer depends entirely on your business model, not on which platform is objectively superior."
    },
    {
      q: "How much does GoHighLevel cost compared to HubSpot?",
      a: "GoHighLevel costs $97, $297, or $497/month flat unlimited contacts and unlimited users on every plan. HubSpot starts free but scales quickly: Marketing Hub Professional is $890/month for 2,000 contacts and 3 seats, plus a mandatory $3,000 onboarding fee. For a 10-client agency, GoHighLevel Unlimited costs $297/month total versus $8,900+ per month on HubSpot. The pricing gap is not marginal."
    },
    {
      q: "Can GoHighLevel replace HubSpot?",
      a: "For most agencies and service businesses, yes. GoHighLevel covers CRM, pipeline management, email marketing, SMS, automation, booking, funnels, reputation management, and AI features all areas where HubSpot requires multiple hubs at significantly higher cost. The main scenarios where HubSpot cannot be replaced by GHL: enterprises requiring deep third-party integrations, complex B2B lifecycle reporting, or predictive AI features at the Enterprise tier."
    },
    {
      q: "Does GoHighLevel have better automation than HubSpot?",
      a: "For agency use cases, GoHighLevel's automation covers more channels at a lower price point. GHL includes native SMS, AI Voice Agent, missed call text-back, and AI chatbot automation that HubSpot requires third-party tools to match. HubSpot's automation is deeper for enterprise marketing workflows behavioral scoring, smart content, multi-touch attribution but these features require Marketing Hub Professional at $890/month minimum."
    },
    {
      q: "Does HubSpot have a white-label option?",
      a: "No. HubSpot does not offer white-labelling at any pricing tier. There is no option to brand HubSpot with your agency's logo, remove HubSpot branding from client-facing interfaces, or resell HubSpot under your own name. GoHighLevel offers white-label desktop branding on the Unlimited plan ($297/month) and full SaaS Mode with a white-label mobile app on the Agency Pro plan ($497/month)."
    },
    {
      q: "What does HubSpot do better than GoHighLevel?",
      a: "HubSpot is stronger than GoHighLevel in: third-party integrations (1,500+ vs 200+), enterprise reporting and multi-touch attribution, predictive lead scoring, contact timeline depth, advanced segmentation, enterprise-grade user permissions and governance, and deep product integrations for SaaS and complex B2B sales cycles. For large organisations with dedicated marketing and sales teams, HubSpot's depth in these areas justifies its higher cost."
    },
    {
      q: "Can I migrate from HubSpot to GoHighLevel?",
      a: "Yes. Migrating from HubSpot to GoHighLevel involves exporting contact data, rebuilding pipeline stages and custom fields in GHL, recreating automation workflows, rebuilding email templates, and reconnecting integrations. The migration typically takes 1–3 weeks depending on account complexity. Most agencies that migrate report recouping the migration cost within the first month through subscription savings alone. GHL Scale Up specialises in HubSpot-to-GHL migrations with data integrity preserved throughout."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-platforms-built-for', title: '1. What Each Platform Is Actually Built For' },
    { id: 'pricing-comparison', title: '2. GoHighLevel vs HubSpot: Pricing Comparison' },
    { id: 'feature-comparison', title: '3. Feature Comparison: Where Each Platform Wins' },
    { id: 'agency-use-case', title: '4. Agency Use Case: Why GHL Wins for Client Management' },
    { id: 'when-hubspot-right', title: '5. When HubSpot Is the Right Choice' },
    { id: 'verdict', title: '6. The Verdict: Which Platform Should You Choose?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const featureComparison = [
    { feature: 'CRM & pipelines', ghl: 'Full CRM, unlimited pipelines, tags, smart lists, unified inbox', hubspot: 'Best-in-class CRM with predictive lead scoring, contact timeline depth, progressive profiling', winner: 'HubSpot (depth) · GHL (cost)' },
    { feature: 'Marketing automation', ghl: 'Visual workflow builder with 30+ triggers, 100+ actions, AI steps', hubspot: 'Advanced workflows with multi-touch attribution, smart content, behavioral scoring', winner: 'HubSpot (enterprise reporting) · GHL (value)' },
    { feature: 'Email marketing', ghl: 'Unlimited sends, drag-and-drop builder, drip sequences', hubspot: 'Contact-based limits, advanced segmentation, A/B testing, smart content (Pro+)', winner: 'HubSpot (segmentation) · GHL (no limits)' },
    { feature: 'SMS marketing', ghl: 'Native SMS built-in, usage-based pricing (~$0.0079/segment)', hubspot: 'No native SMS requires third-party integration (Twilio, Salesmsg)', winner: 'GHL (clear winner)' },
    { feature: 'Funnel & landing page builder', ghl: 'Unlimited funnels and pages on all plans, native to platform', hubspot: 'Landing pages available (Pro+), Content Hub for full CMS, no dedicated funnel builder', winner: 'GHL (native · no extra cost)' },
    { feature: 'Booking & calendar', ghl: 'Full booking system with automated reminders replaces Calendly', hubspot: 'Meeting scheduling tool, integrates with calendar, no automated reminders on base plans', winner: 'GHL (replaces separate tool)' },
    { feature: 'AI features (2026)', ghl: 'AI Voice Agent, Conversation AI, Reviews AI, Content AI, Workflow AI', hubspot: 'Breeze AI (content, prospecting, customer agent) deeper enterprise AI', winner: 'Comparable at different price points' },
    { feature: 'White-labelling / SaaS resale', ghl: 'Full white-label desktop + mobile SaaS Mode on Agency Pro', hubspot: 'None no white-label option at any tier', winner: 'GHL (no competition)' },
    { feature: 'Sub-account / multi-client management', ghl: 'Native sub-account architecture unlimited clients on one dashboard', hubspot: 'No equivalent requires separate accounts per client', winner: 'GHL (purpose-built)' },
    { feature: 'Third-party integrations', ghl: '200+ native integrations + Zapier, API access', hubspot: '1,500+ native integrations, deeper ecosystem, superior API depth', winner: 'HubSpot (clear winner)' },
    { feature: 'Reporting & analytics', ghl: 'Core reporting, pipeline analytics functional for agency needs', hubspot: 'Multi-touch attribution, customer journey analytics, revenue reporting (Enterprise)', winner: 'HubSpot (clear winner for enterprise)' },
    { feature: 'Course / membership hosting', ghl: 'Built-in on all plans replaces Kajabi or Teachable', hubspot: 'Not available natively requires third-party integration', winner: 'GHL (clear winner)' },
  ];

  const verdictRows = [
    { situation: 'Marketing agency with 3+ client accounts', platform: 'GoHighLevel Unlimited ($297/mo)', why: 'Sub-account architecture, Snapshots, white-label, unlimited clients at flat cost' },
    { situation: 'Agency wanting to resell a branded SaaS product', platform: 'GoHighLevel Agency Pro ($497/mo)', why: 'SaaS Mode + white-label mobile app. HubSpot has no equivalent offering' },
    { situation: 'Service business (real estate, dental, home services)', platform: 'GoHighLevel Starter ($97/mo)', why: 'Native SMS, AI Voice Agent, missed call text-back. HubSpot has no native SMS' },
    { situation: 'Growing B2B business with dedicated marketing team', platform: 'HubSpot Marketing Hub Pro ($890/mo)', why: 'Multi-touch attribution, smart content, behavioral scoring for complex pipelines' },
    { situation: 'Enterprise company with 50+ person marketing org', platform: 'HubSpot Enterprise ($3,600/mo)', why: 'Governance, compliance, predictive AI, multi-hub integration at scale' },
    { situation: 'Currently on HubSpot with 3+ agency clients', platform: 'Migrate to GoHighLevel', why: 'Cost savings $500–$8,000+/month. Sub-account architecture. Snapshot onboarding' },
    { situation: 'Currently on HubSpot with complex B2B sales cycles', platform: 'Stay on HubSpot', why: 'Attribution depth and pipeline reporting justify the cost for enterprise B2B' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel vs HubSpot 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL vs HubSpot</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Comparison</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel vs HubSpot (2026):<br />
            <span className="text-[#F8D000]">Honest Comparison for Agencies</span>
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

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            GoHighLevel and HubSpot are two of the most-discussed platforms in marketing and CRM.
            They overlap significantly on paper but they were designed for completely different buyers,
            and choosing the wrong one will cost you thousands per year. This guide cuts through the
            noise with a direct comparison based on real pricing, real features, and real use cases.
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
                5+ years GHL experience · 200+ systems built globally. We have migrated dozens of businesses from HubSpot to GoHighLevel.
                HubSpot pricing verified from official HubSpot documentation May 2026. GoHighLevel pricing verified from official GHL documentation May 2026.
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

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Verdict Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel wins for marketing agencies managing multiple client accounts. HubSpot wins for enterprise B2B businesses with dedicated in-house marketing, sales, and service teams.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                For a 10-client agency, GHL costs $297/month total vs HubSpot at $8,000+/month for the same setup.
                That gap usually ends the comparison.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-2">
                New to GoHighLevel? Start here: <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete 2026 Guide →</Link>
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

            {/* Section 1: What Each Platform Is Built For */}
            <h2 id="what-platforms-built-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Each Platform Is Actually Built For
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before comparing features line by line, understand this: GoHighLevel and HubSpot were designed
              for fundamentally different buyers. Running them through the same criteria misses the point.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#0E9BF0] mb-2">GoHighLevel: Built for agencies running client accounts</h3>
                <p className="text-sm text-[#1A2236] leading-relaxed">
                  GoHighLevel's architecture is agency-first by design. The sub-account model, Snapshots, SaaS Mode,
                  white-labelling every major structural decision exists to help agencies manage multiple clients
                  efficiently and profitably. Unlimited contacts. Unlimited users. One price regardless of how many clients you add.
                </p>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">HubSpot: Built for in-house marketing and sales teams</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  HubSpot was designed for a single company's internal team. Its Hubs model maps to internal departments
                  it excels when you have dedicated marketing staff, an outbound sales team, and a support function all
                  operating on shared contact data. It is not designed with multi-client agency delivery in mind.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-1">THE PRACTICAL TEST:</p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Ask yourself: <strong>Am I building marketing systems for other businesses, or running marketing for my own?</strong>
                If you manage multiple clients GHL. If you are a business marketing to your own customers HubSpot or GHL both work,
                but HubSpot offers more depth at significantly higher cost.
              </p>
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

            {/* Section 2: Pricing Comparison */}
            <h2 id="pricing-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. GoHighLevel vs HubSpot: Pricing Comparison (Real Numbers)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is where most comparison articles stop at the headline numbers. We're going further showing what
              each platform actually costs for a real agency scenario.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Entry plan</td><td className="py-3 px-3">$97/mo (Starter 3 sub-accounts)</td><td className="py-3 px-3">Free CRM (2 users, limited features)</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Mid-tier plan</td><td className="py-3 px-3">$297/mo (Unlimited unlimited clients)</td><td className="py-3 px-3">$890/mo (Marketing Hub Pro, 3 seats, 2,000 contacts)</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Advanced plan</td><td className="py-3 px-3">$497/mo (Agency Pro SaaS Mode)</td><td className="py-3 px-3">$3,600/mo (Marketing Hub Enterprise, 5 seats, 10,000 contacts)</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Contacts</td><td className="py-3 px-3">Unlimited on all plans</td><td className="py-3 px-3">Scales with cost: $225–$250/mo per 5,000 extra contacts</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Users (seats)</td><td className="py-3 px-3">Unlimited on all plans</td><td className="py-3 px-3">$45–$75/mo per additional seat beyond base</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Onboarding fee</td><td className="py-3 px-3">None</td><td className="py-3 px-3">$3,000 (Pro) or $7,000 (Enterprise) mandatory</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">White-labelling</td><td className="py-3 px-3">Yes (Unlimited + Agency Pro)</td><td className="py-3 px-3">No not available at any tier</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Annual saving</td><td className="py-3 px-3">~17% (2 months free)</td><td className="py-3 px-3">10–20% depending on hub and tier</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE AGENCY SCENARIO: 10 CLIENTS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                <strong className="text-[#1A2236]">GoHighLevel Unlimited ($297/mo):</strong> $297/month total. All 10 clients in sub-accounts.
                Unlimited contacts across all. Snapshot-based onboarding. Zero per-client cost increase.
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                <strong className="text-[#1A2236]">HubSpot Marketing Hub Pro ($890/mo):</strong> To give 10 clients equivalent isolated environments,
                you would need 10 separate HubSpot accounts. At $890/month each: <strong className="text-[#DC3545]">$8,900/month.</strong>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>The gap: $297/mo vs $8,900/mo for the same agency use case.</strong> For most agencies, this calculation ends the comparison.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → For the full GoHighLevel pricing breakdown including usage fees and AI costs, see: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
            </p>

            {/* Section 3: Feature Comparison */}
            <h2 id="feature-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Feature Comparison: Where Each Platform Wins
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both platforms overlap significantly in core CRM and marketing features. Here is where they genuinely differ:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HubSpot</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.hubspot}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-medium">{item.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA Button 4: After Feature Comparison */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Need help comparing specific features for your use case?</p>
              <p className="text-sm text-white/80 mb-4">We'll analyze your current setup and tell you which platform fits better.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get a Free Analysis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 4: Agency Use Case */}
            <h2 id="agency-use-case" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Agency Use Case: Why GHL Wins for Client Management
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you run a marketing agency any model where you build, configure, or manage marketing systems for other businesses
              GoHighLevel's architecture solves problems that HubSpot was not designed to address.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">Sub-accounts: the fundamental structural difference</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GoHighLevel's sub-account model gives every client <strong>their own isolated environment</strong> their own CRM, funnels,
                contacts, automations, phone numbers, and reporting. You manage all of them from one agency dashboard without data bleeding between clients.
                HubSpot has no equivalent.
              </p>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">Snapshots: the agency multiplier</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GoHighLevel's Snapshot system lets you build one perfect client setup and deploy it to any new account in minutes.
                For an agency onboarding 5 new clients per month, this is the difference between 2-hour onboarding and 40-hour onboarding.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-2">
                → For the full guide: <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">GoHighLevel Snapshots: How to Create and Deploy →</Link>
              </p>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">Workflow automation: parallel but different in depth</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GHL handles triggers from SMS, calls, AI conversations, form submissions, missed calls, and 30+ other events
                with 100+ action types including AI steps, webhooks, and custom integrations.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-2">
                → For GHL workflow setup: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
              </p>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">SaaS resale: GHL's unique capability</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Only GoHighLevel allows you to white-label the entire platform and resell it as your own branded software product.
                <strong>HubSpot offers no white-label option at any tier.</strong>
              </p>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM 200+ GHL BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                At GHL Scale Up, we've helped agencies migrate from HubSpot to GoHighLevel dozens of times. The consistent pattern:
                <strong className="text-white"> the migration pays for itself within the first month</strong> in subscription savings alone.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free 30-minute call with GHL Scale Up
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Looking for a GHL expert agency to handle your migration or setup? See: <Link href="/blog/best-ghl-expert-agency" className="text-[#0E9BF0] hover:underline">Best GHL Expert Agency to Hire in 2026 →</Link>
            </p>

            {/* Section 5: When HubSpot Is Right */}
            <h2 id="when-hubspot-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. When HubSpot Is the Right Choice
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Honest comparisons acknowledge when the competitor wins. HubSpot is the better choice in specific, well-defined scenarios:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Enterprise B2B companies with complex sales cycles.</strong> HubSpot's contact timeline, predictive lead scoring, multi-touch attribution, and deal forecasting are genuinely more powerful for long-cycle B2B sales.</li>
              <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Large in-house teams needing role-based access and governance.</strong> HubSpot's enterprise permissions, audit logs, and team management are built for large marketing organisations.</li>
              <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Businesses needing deep third-party integrations.</strong> HubSpot has 1,500+ native integrations vs GoHighLevel's 200+.</li>
              <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">SaaS or product companies doing product-led growth.</strong> HubSpot's behavioral tracking, custom objects, and event-based scoring are better suited to product-qualified lead models.</li>
            </ul>

            {/* CTA Button 5: After When HubSpot Is Right */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚡ Still on the fence about switching?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your current setup and give you an honest recommendation including migration effort and timeline.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Migration Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 6: Verdict */}
            <h2 id="verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. The Verdict: Which Platform Should You Choose?
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
                  {verdictRows.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{row.situation}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{row.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">SEE THE RESULTS BEFORE DECIDING</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                If you are on the fence, see what properly configured GHL systems have delivered for agencies and service businesses:
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                And if you want a direct recommendation based on your specific setup,
                <Link href="/contact" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call</Link> we look at your current stack and tell you honestly which platform makes sense.
              </p>
            </div>

            {/* CTA Button 6: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Still not sure which platform to choose?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your business model, contact volume, and revenue channels and tell you honestly which platform fits.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Free Platform Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

            {/* CTA Button 7: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Which Platform to Choose?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our GHL experts directly. We've migrated dozens of businesses from HubSpot to GHL.</p>
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
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create and Use a GoHighLevel Snapshot →</Link>
                <Link href="/blog/best-ghl-expert-agency" className="text-sm text-[#0E9BF0] hover:underline">Best GHL Expert Agency to Hire in 2026 →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Considering switching from HubSpot to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We've done this migration dozens of times. GHL Scale Up handles full HubSpot-to-GHL migrations
                  contact data, pipelines, automations, and integrations with zero data loss. 5+ years of experience.
                  200+ systems built.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Migration Consultation
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