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
  Stethoscope,
  Activity,
  CalendarDays,
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
  Trophy,
  TrendingDown,
  HeartHandshake,
  Search,
  Facebook,
  AlertCircle,
  Info,
  Lightbulb,
  UserCheck,
  UserX,
  FileCheck,
  CheckCircle,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2,
  PieChart,
  Tag,
  GitMerge,
  MailOpen
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function BestCRMToMigrateToGHLClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'how-measured',
      'platform-ranking',
      'platform-breakdown',
      'timeline-impact',
      'next-steps',
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
      q: "What is the easiest platform to migrate to GoHighLevel from?",
      a: "ClickFunnels is the easiest platform to migrate to GoHighLevel from. GHL has a URL import tool that clones your live funnel pages by entering the page URL, capturing the visual design directly. Automations, Stripe connections, and domain settings still need to be rebuilt manually, but the visual page-building work that normally takes the longest is largely eliminated."
    },
    {
      q: "What is the hardest platform to migrate to GoHighLevel from?",
      a: "Kajabi is the hardest platform to migrate to GoHighLevel from among the commonly migrated platforms. Course content has no automated transfer path. Every video lesson, PDF, quiz, and drip schedule must be manually re-uploaded and reconfigured inside GHL's membership module. Contacts and student records transfer easily via CSV, but the content rebuild typically adds 2 to 6 hours per course module."
    },
    {
      q: "Is ActiveCampaign or HubSpot easier to migrate to GoHighLevel?",
      a: "ActiveCampaign is generally easier to migrate than HubSpot, primarily due to scale rather than fundamental structure. ActiveCampaign's workflow-based automation architecture is conceptually similar to GHL's, making the rebuild more intuitive, though pipelines and lead scoring still require careful handling. HubSpot's difficulty comes from the volume of custom properties, company associations, and workflows that accumulate in accounts active for 2 or more years, plus the 25-day data deletion window after cancellation that adds time pressure."
    },
    {
      q: "Does migration difficulty mean GoHighLevel is not a good fit for that platform's users?",
      a: "No. Migration difficulty measures how much manual rebuild work is required, not whether GoHighLevel is the right platform for your business. Kajabi ranks as the hardest migration because course content has no automated transfer path on any platform migration. This is true regardless of which platform you migrate to, not specific to GoHighLevel. Many Kajabi users still find GoHighLevel the right platform once they have an agency or service business need beyond just course delivery."
    },
    {
      q: "How long does each platform's migration typically take?",
      a: "Simple migrations (under 5 automations, clean data) range from 1 to 4 weeks across all 5 platforms. ClickFunnels and ActiveCampaign are typically fastest at 1 to 3 weeks for standard complexity. HubSpot and Kajabi typically take longer at standard complexity (3 to 6 weeks) due to data volume (HubSpot) or content rebuild (Kajabi). Complex migrations with 20 or more automations or large content libraries range from 4 to 9 weeks depending on platform. Automation count is the primary driver of timeline within any single platform."
    },
    {
      q: "Can GHL Scale Up migrate from any of these 5 platforms?",
      a: "Yes. GHL Scale Up has completed 200+ migrations across HubSpot, ClickFunnels, ActiveCampaign, Kajabi, and Zoho CRM. Each migration follows the same structured process: audit, GHL infrastructure setup, data export and cleaning, automation rebuild, testing and parallel running, and go-live. Book a free migration assessment to get a realistic timeline and fixed-fee quote for your specific platform and complexity."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'how-measured', title: '1. How Is Migration Difficulty Actually Measured?' },
    { id: 'platform-ranking', title: '2. The 5 Platforms Ranked by Migration Difficulty' },
    { id: 'platform-breakdown', title: '3. Platform-by-Platform Breakdown' },
    { id: 'timeline-impact', title: '4. How Does Difficulty Affect Your Migration Timeline?' },
    { id: 'next-steps', title: '5. What Should You Do Next?' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const rankingData = [
    { rank: 1, platform: 'ClickFunnels', difficulty: 'Low to Moderate', why: 'URL import tool clones funnel page design directly. Only automations, Stripe, and domains need rebuilding.' },
    { rank: 2, platform: 'ActiveCampaign', difficulty: 'Moderate', why: 'Similar workflow-based automation architecture to GHL, but pipelines, lead scoring, and segmentation need careful rebuild.' },
    { rank: 3, platform: 'HubSpot', difficulty: 'Moderate', why: 'Clean contact and deal export, but custom properties, associations, and workflows are numerous at scale.' },
    { rank: 4, platform: 'Zoho CRM', difficulty: 'Moderate to High', why: 'Blueprint workflows and territory management are structurally different from GHL\'s trigger model.' },
    { rank: 5, platform: 'Kajabi', difficulty: 'High', why: 'Course content has no import path. Every video, quiz, and lesson must be manually rebuilt in GHL\'s membership module.' },
  ];

  const platformBreakdowns = [
    {
      platform: 'ClickFunnels',
      difficulty: 'Easiest migration',
      desc: 'ClickFunnels is the easiest migration on this list because GoHighLevel has a URL import tool that clones your live funnel pages by entering the page URL. It captures the visual design (copy, images, layout, buttons) directly. What does not transfer: automation logic, email sequences, Stripe connections, and domain settings. These all need to be rebuilt manually, but the visual page-building work that normally takes the longest is largely eliminated.',
      link: '/blog/clickfunnels-to-gohighlevel-migration',
      linkText: 'ClickFunnels to GoHighLevel Migration →'
    },
    {
      platform: 'ActiveCampaign',
      difficulty: 'Straightforward but detail-heavy',
      desc: 'ActiveCampaign migrations are technically straightforward given the similar workflow-based automation architecture to GHL, but they require careful handling of deal pipelines, contact scoring, and list segmentation. The conceptual model translates well (both platforms think in triggers and actions) but AC users tend to have deep, detailed segmentation that takes time to map correctly into GHL\'s tag and smart list system.',
      link: '/blog/activecampaign-to-gohighlevel-migration',
      linkText: 'ActiveCampaign to GoHighLevel Migration →'
    },
    {
      platform: 'HubSpot',
      difficulty: 'Clean data, heavy structure',
      desc: 'HubSpot exports contacts, deals, and custom properties cleanly via CSV. The difficulty comes from scale and structure: HubSpot accounts that have been active for 2+ years typically have dozens of custom properties, company associations, and workflows that all need to be audited and selectively rebuilt. The 25-day data deletion window after cancellation also adds time pressure that other platforms do not have.',
      link: '/blog/hubspot-to-gohighlevel-migration',
      linkText: 'How to Migrate from HubSpot to GoHighLevel →'
    },
    {
      platform: 'Zoho CRM',
      difficulty: 'Structurally different automation model',
      desc: 'Zoho\'s Blueprint workflows, territory management, and module customisations are built on a different structural model than GHL\'s trigger-and-action workflow builder. Contacts, deals, and custom fields export cleanly, but automation logic built on Zoho\'s Blueprint system requires more conceptual translation work than a platform like ActiveCampaign, where the underlying logic model is closer to GHL\'s.',
      link: null,
      linkText: null
    },
    {
      platform: 'Kajabi',
      difficulty: 'Hardest migration due to course content',
      desc: 'Kajabi migrations are the hardest on this list for one specific reason: course content has no automated transfer path. Every video lesson, PDF, quiz, and drip schedule must be manually re-uploaded and reconfigured inside GHL\'s membership module. Contacts and student records transfer via CSV without much difficulty. It is purely the content rebuild that adds time. Budget 2 to 6 hours per course module for the manual rebuild.',
      link: '/blog/kajabi-to-gohighlevel-migration',
      linkText: 'Kajabi to GoHighLevel Migration →'
    },
  ];

  const timelineData = [
    { platform: 'ClickFunnels', simple: '1 to 2 weeks', standard: '2 to 3 weeks', complex: '3 to 5 weeks' },
    { platform: 'ActiveCampaign', simple: '2 to 3 weeks', standard: '3 to 5 weeks', complex: '5 to 7 weeks' },
    { platform: 'HubSpot', simple: '2 to 3 weeks', standard: '3 to 5 weeks', complex: '6 to 8 weeks' },
    { platform: 'Zoho CRM', simple: '2 to 3 weeks', standard: '3 to 4 weeks', complex: '4 to 6 weeks' },
    { platform: 'Kajabi', simple: '2 to 4 weeks', standard: '4 to 6 weeks', complex: '6 to 9 weeks' },
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
          <span className="text-[#1A2236] font-medium">Best CRM to Migrate to GoHighLevel 2026</span>
        </div>
      </nav>

      {/* Hero Section - WIDE (KEPT AS IS) */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Best CRM to Migrate Into GoHighLevel:<br />
            <span className="text-[#F8D000]">Comparing 5 Platforms (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Migrations Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            Not every migration to GoHighLevel is equally hard. Some platforms hand over your funnels and pages with one click. 
            Others require manually rebuilding every piece of course content from scratch. 
            <strong className="text-white"> GHL Scale Up</strong> has completed 200+ migrations across HubSpot, ClickFunnels, 
            ActiveCampaign, Kajabi, and Zoho. This guide ranks all five by realistic migration difficulty, so you know what you 
            are actually walking into before you start.
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
                  <div className="text-xs text-white/50">GoHighLevel Migration Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ migrations completed globally across HubSpot, ClickFunnels, ActiveCampaign, 
                Kajabi, and Zoho. Difficulty rankings based on real migration projects completed by our team as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                From easiest to hardest migration into GoHighLevel:
              </p>
              <div className="space-y-1 text-sm text-[#5C6880] leading-relaxed">
                <p><strong className="text-[#25C97D]">1. ClickFunnels</strong> (easiest — URL import tool clones page design)</p>
                <p><strong className="text-[#0E9BF0]">2. ActiveCampaign</strong> (straightforward automation architecture but requires careful pipeline and scoring rebuild)</p>
                <p><strong className="text-[#0E9BF0]">3. HubSpot</strong> (moderate — clean data export but heavy on custom properties and associations)</p>
                <p><strong className="text-[#F8D000]">4. Zoho CRM</strong> (moderate to hard — blueprint workflows are structurally different from GHL)</p>
                <p><strong className="text-[#DC3545]">5. Kajabi</strong> (hardest — all course content must be rebuilt manually, nothing imports automatically)</p>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-3">
                The ranking is based on what transfers automatically versus what must be rebuilt by hand, not on which platform is 'better.'
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Your Migration Assessment
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
                <strong className="text-white">Not sure which platform you're migrating from or how hard it will be?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Get a free migration assessment. We review your current platform and give you a realistic timeline and fixed-fee quote.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: How Measured */}
            <h2 id="how-measured" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. How Is Migration Difficulty Actually Measured?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Migration difficulty is not about how good or bad the platform is. It is about how much of your existing setup 
              transfers automatically versus how much must be rebuilt by hand inside GoHighLevel. Four factors determine this for any platform.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Contact and data export quality:</strong> Every platform on this list exports contacts via CSV reasonably well. This factor rarely differentiates platforms much.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Automation architecture similarity:</strong> Platforms with a similar trigger-and-action workflow model to GHL require less conceptual rework, even though every automation still needs manual rebuilding.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Layout className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Visual content transferability:</strong> Some platforms (ClickFunnels) have tools that import visual page design directly. Others (Kajabi's course content) have no equivalent and require full manual recreation.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <GitBranch className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Structural complexity:</strong> Platforms with deep custom objects, blueprint workflows, or enterprise-grade permission structures (HubSpot, Zoho, Salesforce) take longer to map and rebuild correctly.</p>
                </div>
              </div>
            </div>

            {/* Section 2: Ranking */}
            <h2 id="platform-ranking" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. The 5 Platforms Ranked by Migration Difficulty
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Rank</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Difficulty</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">#{item.rank}</td>
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className={`py-3 px-3 font-semibold ${item.rank === 1 ? 'text-[#25C97D]' : item.rank === 5 ? 'text-[#DC3545]' : 'text-[#0E9BF0]'}`}>{item.difficulty}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHAT THIS RANKING DOES NOT MEAN</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Easier migration does not mean better platform, and harder migration does not mean GHL is a worse fit. 
                Kajabi ranks hardest because course content genuinely has no automated transfer path on any platform migration, 
                not because Kajabi is a worse tool. The ranking tells you what to expect in terms of manual rebuild effort, 
                not which platform was the right choice for your business originally.
              </p>
            </div>

            {/* Section 3: Platform Breakdown */}
            <h2 id="platform-breakdown" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Platform-by-Platform Breakdown
            </h2>

            <div className="space-y-5 mb-8">
              {platformBreakdowns.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold text-[#1A2236]">{item.platform}</h3>
                    <span className={`text-sm font-semibold ${idx === 0 ? 'text-[#25C97D]' : idx === 4 ? 'text-[#DC3545]' : 'text-[#0E9BF0]'} bg-[rgba(14,155,240,0.1)] px-3 py-1 rounded-full`}>{item.difficulty}</span>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-3">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="text-sm text-[#0E9BF0] hover:underline inline-flex items-center gap-1">
                      → {item.linkText} <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Section 4: Timeline Impact */}
            <h2 id="timeline-impact" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Does Difficulty Affect Your Migration Timeline?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Simple migration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Standard migration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Complex migration</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.simple}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.standard}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.complex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              These ranges align with the platform-agnostic benchmarks in our full timeline guide. The key driver of timeline 
              within any platform is still automation count, not platform choice: 
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline ml-1">GHL Migration Timeline: How Long Does It Take? →</Link>
            </p>

            {/* CTA 2 - After Timeline Impact */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">📊 Want to know exactly how long your migration will take?</p>
              <p className="text-sm text-white/80 mb-4">Get a personalized migration timeline based on your specific platform, automations, and data volume.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Clock className="w-4 h-4" />
                Get Your Timeline
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 5: Next Steps */}
            <h2 id="next-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Should You Do Next?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Regardless of which platform you are migrating from, the next step is the same.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <p className="text-sm text-[#1A2236]">Read your platform-specific guide from the links above to understand exactly what transfers and what does not for your situation.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <p className="text-sm text-[#1A2236]">Work through the full migration checklist covering all 6 phases from audit to go-live: <Link href="/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link></p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <p className="text-sm text-[#1A2236]">Get a realistic timeline and quote based on your specific contact volume, automation count, and platform.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE HAVE DONE ALL FIVE OF THESE MIGRATIONS REPEATEDLY</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up has completed 200+ migrations across HubSpot, ClickFunnels, ActiveCampaign, Kajabi, and Zoho.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real migration results: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To get a realistic timeline and fixed-fee quote for your specific platform, 
                <Link href="/contact" className="text-[#0E9BF0] hover:underline ml-1">book a free migration assessment at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* CTA 3 - Before FAQ */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🔍 Not sure which platform you should migrate from?</p>
              <p className="text-sm text-white/80 mb-4">Our team can help you evaluate your current setup and recommend the best migration path.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Search className="w-4 h-4" />
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
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

            {/* CTA 4 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about your migration?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our migration specialists directly. We've migrated from all 5 of these platforms and fixed every issue in this guide.
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
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ClickFunnels to GoHighLevel Migration →</Link>
                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration →</Link>
                <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel Migration →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline: How Long Does It Take? →</Link>
                <Link href="/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">The Complete GoHighLevel Migration Checklist →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to find out exactly what your migration involves?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up has migrated from all 5 of these platforms. Free 30-minute migration assessment. 
                  We review your current platform and give you a realistic timeline and fixed-fee quote.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Assessment
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