'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  Info,
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
  TrendingDown,
  Code
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GHLFunnelBuilderClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'template-library',
      'version-two',
      'version-control',
      'global-sections',
      'custom-values',
      'collaboration',
      'html-rendering',
      'bonus',
      'conclusion'
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

    // Progress bar
    const progressBar = document.getElementById('progress-bar');
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      if (progressBar) {
        progressBar.style.width = Math.min(progress, 100) + '%';
      }
    };
    window.addEventListener('scroll', updateProgress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateProgress);
    };
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
      q: "Is GoHighLevel's funnel builder any good?",
      a: "GoHighLevel's funnel builder is genuinely capable for agencies and service businesses running lead generation. It includes unlimited funnels, a drag-and-drop visual editor, AI funnel generation, built-in A/B split testing, native Stripe payment processing, custom domains with automatic SSL, and direct integration with GHL's CRM and automation system. Its limitations are honest: the template library is smaller than ClickFunnels or Leadpages, the visual editor prioritises function over design fidelity, and page loading speed depends on how lean the build is. For agencies whose primary advantage is the automation and CRM layer behind the funnel, GHL's integration with the rest of the platform outweighs the design limitations."
    },
    {
      q: "Is the GoHighLevel funnel builder free?",
      a: "Yes, the funnel builder is included in all GoHighLevel plans at no additional cost. Every plan from Starter ($97/month) upward includes the funnel builder with unlimited funnels and funnel steps. There is no separate funnel builder fee and no per-funnel charge. The AI Funnel Builder feature is also included you may want to verify current access details for the AI Funnel Builder in your specific plan, as AI features and their inclusion in base plans can change."
    },
    {
      q: "Can you A/B test funnels in GoHighLevel?",
      a: "Yes. GoHighLevel includes built-in A/B split testing for funnel pages. You create a variant of any funnel step, set the traffic split percentage between the original and the variant, and GHL tracks conversion rates per version in real time. No external split testing tool is required. A/B testing is available on funnel pages only it is not available on website pages. The standard guidance applies: test one element at a time, and run each test until you have at least 200 to 300 unique visitors per variant before drawing conclusions."
    },
    {
      q: "Can I clone a GoHighLevel funnel across multiple client accounts?",
      a: "Yes, through Snapshots. A Snapshot is a complete copy of a GHL setup including funnels, pipelines, workflows, and forms that can be deployed to a new sub-account in one click. Agencies build a working funnel once, include it in a Snapshot, and deploy the Snapshot to each new client rather than rebuilding from scratch. The funnel then requires client-specific customisation (logo, offer, copy, domain) after deployment."
    },
    {
      q: "How does the GoHighLevel AI Funnel Builder work?",
      a: "The AI Funnel Builder generates a complete multi-step funnel with copy, layout, and structure from a text prompt, typically in 2 to 4 minutes. It has two modes: Assist Mode, which guides you through structured questions about your business and offer before generating the funnel, and Build Mode, which accepts free-text prompts and supports live chat refinement. The generated output is approximately 60% done the structure and copy direction are solid, but you still need to swap stock images for branded photography, refine copy for your exact voice, adjust colours to your brand palette, and configure all backend connections including the form workflow trigger, custom domain, and tracking pixels."
    },
    {
      q: "What is the difference between a funnel and a website in GoHighLevel?",
      a: "Both funnels and websites use the same drag-and-drop editor and live in the Sites section of GHL. The key differences: funnels are linear sequences with one goal per page, no navigation menu, and native A/B split testing. Websites are multi-page structures with navigation menus and are better suited for company homepages and evergreen content. A/B split testing is only available on funnels, not websites. eCommerce online store functionality is only available on websites, not funnels. For campaign-specific pages where conversion rate matters, use a funnel."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'template-library', title: '1. Template Library' },
    { id: 'version-two', title: '2. Upgrade to Version 2' },
    { id: 'version-control', title: '3. Version Control' },
    { id: 'global-sections', title: '4. Global Sections' },
    { id: 'custom-values', title: '5. Custom Values' },
    { id: 'collaboration', title: '6. Real-Time Collaboration' },
    { id: 'html-rendering', title: '7. In-Editor HTML Rendering' },
    { id: 'bonus', title: 'Bonus: Page Toggle' },
    { id: 'conclusion', title: 'Conclusion' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Funnel Builder Features</span>
        </div>
      </nav>

      {/* Hero Section - UPDATED TO WIDE PATTERN */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Funnel Builder</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Features</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Funnel Builder:<br />
            <span className="text-[#F8D000]">7 Features</span> Top Agencies<br />
            Use to Build Faster
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated August 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Most agencies use 20% of what GHL's funnel builder can do and wonder why things feel slow. 
            Here's what the other 80% looks like, and how to use it every day.
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
                5+ years GHL experience · 200+ builds delivered globally. All technical details verified as of August 2026.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel's funnel builder is more powerful than most agencies realise. The 7 features covered here are the difference between slow, manual builds and fast, scalable systems.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                From the Template Library to Custom Values, Version Control to Global Sections — these features are already inside GHL. Most agencies never touch them. The ones that do build faster, make fewer mistakes, and deliver better results.
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Your Funnel Built
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
                <strong className="text-white">🚀 Want to build funnels faster and actually use GHL's full potential?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up builds funnels with the automation that makes them work — template library, custom values, version control, and global sections all configured correctly.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Article Content */}
            <main className="min-w-0">
              <p className="text-base md:text-[19px] leading-relaxed text-[#2D3748] mb-8 md:mb-12 pb-6 md:pb-10 border-b border-[#DDE1E9]">
                GoHighLevel's funnel builder gets talked about a lot. But most of the conversation stays surface-level 
                drag and drop, templates, basic pages. <strong className="text-[#1A2236]">The agencies that actually build faster and convert better 
                aren't using a different tool.</strong> They're using the same tool, but going deeper than everyone else.
              </p>

              {/* Stats Row */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 my-8 md:my-10">
                <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">70</span>%</div>
                  <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">reduction in manual workload for agencies using full GHL automation</div>
                </div>
                <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">50</span>+</div>
                  <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">agencies we've built full GHL systems for across 6 countries</div>
                </div>
                <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center sm:col-span-2 lg:col-span-1">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">10</span>x</div>
                  <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">faster funnel deployment using GHL's template library correctly</div>
                </div>
              </div>

              {/* Feature 1 */}
              <h2 id="template-library" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">1. The Template Library Most Agencies Walk Right Past</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">When you go to <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">Sites → Funnels → New Funnel</span>, the fastest move is the one most people skip: the Template Library. GHL has an organised collection of vertical and industry-specific funnels not just generic designs, but actual offer funnels, sales pages, calendar funnels, and agency-specific layouts.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Instead of starting from a blank canvas and building for two hours, you pick a template that's close to what your client needs, add it to the account in seconds, and start editing from a working structure. For a busy agency, that alone changes the timeline on a project.</p>

              <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
                <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">01</div>
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
                <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-[#0E9BF0]" />
                  </div>
                  Template Library
                </div>
                <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Go from brief to live funnel in under 10 minutes</h3>
                <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Browse by industry, pick the closest match, add to account, and start editing. No blank canvas. No wasted setup time. The library is organised by vertical so if you're building for a real estate client or a marketing agency, there's already a starting point.</p>
              </div>

              {/* Feature 2 */}
              <h2 id="version-two" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">2. Upgrade to Version Two Before You Do Anything Else</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">When you open a funnel in GHL, look for the <span className="bg-[#FFFBE6] text-[#1A2236] px-1.5 py-0.5 rounded font-medium">Upgrade to Version 2</span> button in the top right. This migrates the funnel to GHL's newer builder one that uses a faster CDN, supports one-step order forms, PayPal integration, Stripe Connect, and Global Products.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">It's a quick migration, not a rebuild. Old funnels come across cleanly. And the performance improvement on load times alone is worth doing it immediately on every funnel you touch.</p>

              <div className="bg-[#0B1628] rounded-xl p-5 md:p-7 lg:p-8 my-8 md:my-9 flex gap-3 md:gap-4 items-start">
                <div className="w-7 h-7 md:w-9 md:h-9 bg-[rgba(248,208,0,0.15)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                  <Sparkles className="w-4 h-4 text-[#F8D000]" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-[#F8D000] mb-1">Operator tip</div>
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed">Make upgrading to Version 2 a standard step in your funnel onboarding checklist. Never build on the old version for a new client you're creating technical debt before the project even starts.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <h2 id="version-control" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">3. Version Control Your Safety Net for Every Build</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">This is one of those features that sounds like a nice-to-have until the first time you need it. Inside the GoHighLevel funnel builder, every edit you make is tracked. You can see the full version history and revert to any previous state with one click.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">For agencies working fast especially with multiple team members in the same account this is essential. You no longer have to fear making changes, testing things, or trying something different. You can always go back.</p>

              <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
                <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">03</div>
                <div className="absolute top-0 left-0 w-1 h-full bg-[#25C97D] rounded-l" />
                <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#25C97D] mb-2 md:mb-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8FAF2] rounded flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-[#25C97D]" />
                  </div>
                  Version Control
                </div>
                <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Every edit tracked. Every mistake reversible.</h3>
                <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Accidentally delete a section? Realised the old layout was better? Revert in one click. Version history means you can build with confidence and your clients don't have to worry about what happens when someone on your team makes an error mid-project.</p>
              </div>

              {/* Feature 4 */}
              <h2 id="global-sections" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">4. Global Sections Change One Thing, Update Everything</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">This is one of the biggest time-savers in the GoHighLevel funnel builder, and most agencies don't use it. When you hover over a section in the editor, you'll see a small save icon on the left. Click it and you can turn that section into a <span className="bg-[#E8FAF2] text-[#0f7a4a] px-1.5 py-0.5 rounded font-medium">Global Section</span>.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Once a section is global, any change you make to it automatically applies to every page it appears on. Headers, footers, offer stacks, pricing sections anything that appears across multiple pages in a funnel becomes a single source of truth.</p>

              <div className="border-l-4 border-[#0E9BF0] my-8 md:my-10 pl-4 md:pl-7 py-1">
                <p className="text-base md:text-[22px] font-semibold text-[#1C2E4A] leading-relaxed italic">"Edit in one place, show up correctly everywhere. That's the difference between a 30-minute update and a 3-hour one."</p>
              </div>

              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">For agencies building funnels for multiple clients, this is particularly powerful. You can standardise elements across a client's funnel while still customising the parts that need to be unique per page.</p>

              {/* Feature 5 */}
              <h2 id="custom-values" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">5. Custom Values One Funnel, Infinitely Personalised</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Inside GHL's funnel builder, you can reference <span className="bg-[#FFFBE6] text-[#1A2236] px-1.5 py-0.5 rounded font-medium">custom values</span> and <span className="bg-[#FFFBE6] text-[#1A2236] px-1.5 py-0.5 rounded font-medium">location values</span> directly in your text elements. The syntax looks like <code className="bg-[#F0F2F5] px-1.5 py-0.5 rounded text-xs md:text-sm">{'{{location.name}}'}</code> or <code className="bg-[#F0F2F5] px-1.5 py-0.5 rounded text-xs md:text-sm">{'{{today}}'}</code> and these pull in real data on the front end automatically.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">What this means in practice: you can build one funnel template and deploy it across multiple clients. Each client's location name, logo, brand colour, and contact details are stored in their subaccount as custom values and the funnel pulls them in automatically. You're not rebuilding anything. You're just filling in values.</p>

              <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
                <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">05</div>
                <div className="absolute top-0 left-0 w-1 h-full bg-[#F8D000] rounded-l" />
                <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#a07a00] mb-2 md:mb-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#FFFBE6] rounded flex items-center justify-center">
                    <Settings className="w-3 h-3 text-[#a07a00]" />
                  </div>
                  Custom Values
                </div>
                <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Build once. Deploy for any client, automatically personalised.</h3>
                <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Custom values and location values let you reference client-specific information directly inside funnel text, images, and even SVG elements. Colours, logos, names, dates all dynamic, all automatic. The result is a funnel that feels bespoke, built from a template.</p>
              </div>

              {/* Feature 6 */}
              <h2 id="collaboration" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">6. Real-Time Collaboration See Who's In the Funnel</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">If you run a team, you've probably experienced the moment where two people were working on the same funnel at the same time and one person's changes disappeared. GHL now shows you who is inside a funnel in real time both at the funnel overview level and inside the page editor itself.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">It sounds like a small thing. It prevents a surprisingly large amount of chaos, especially when you're managing multiple team members across different client funnels simultaneously.</p>

              <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
                {[
                  'See other users\' presence before entering the editor',
                  'Know immediately if someone else is editing the same page',
                  'Avoid overwriting changes on active builds',
                  'Manage team workflows without constant check-ins',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                    <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Feature 7 */}
              <h2 id="html-rendering" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">7. In-Editor HTML Rendering See Custom Code Without Previewing</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">If you use custom HTML, custom JavaScript, or embed code inside GHL funnels, you'll know the old pain: paste in your code, then toggle to preview just to see if it actually works. For complex elements, this adds up fast.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">GHL's funnel builder now has a <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">render toggle</span> inside the editor. Click it and your custom HTML renders directly in the builder exactly as it will appear on the live page. No preview tab. No back-and-forth. You see what you get, in real time, while you're editing.</p>

              <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
                <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">07</div>
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
                <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                    <Code className="w-3 h-3 text-[#0E9BF0]" />
                  </div>
                  In-Editor HTML Rendering
                </div>
                <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Custom code rendered live no preview tab needed.</h3>
                <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Paste in custom HTML or JavaScript and toggle the render button. GHL shows you exactly what it will look like on the published page, right inside the editor. For developers and advanced builders, this alone saves significant time on every custom build.</p>
              </div>

              {/* Bonus */}
              <h2 id="bonus" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">Bonus: Page Toggle The Small Feature That Changes Your Editing Speed</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">This one barely gets mentioned, but it deserves a spot: in the top right of the funnel editor, there's a page toggle that lets you jump between every page in your funnel without leaving the editor.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">No navigating back to the overview. No clicking into a different step. Just switch pages and keep editing. When you're deep in a multi-page funnel build and need to check consistency across steps, this saves more time than you'd expect.</p>

              {/* CTA 2 - After Bonus */}
              <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
                <p className="text-sm font-medium mb-2">⏱️ Spending hours building funnels the slow way?</p>
                <p className="text-sm text-white/80 mb-4">We build funnels using all 7 features covered here — template library, version control, global sections, custom values, and more. Done properly, tested, and ready for traffic.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <Rocket className="w-4 h-4" />
                  Get Your Funnel Built
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Conclusion */}
              <h2 id="conclusion" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">The Agencies That Win on GHL Aren't Using a Different Tool</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Everything in this article is already inside GoHighLevel. There's nothing to add, no plugin to buy, no workaround required. These features are built in and most agencies never touch them.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The agencies that build faster, make fewer mistakes, and deliver better results are the ones who've gone deep into a platform they're already paying for. That's the edge.</p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">If you're using GoHighLevel and still building funnels the slow way that's worth fixing.</p>

              {/* CTA 3 - Before FAQ */}
              <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
                <p className="text-sm font-medium mb-2">📊 Want to build funnels faster and actually use GHL's full potential?</p>
                <p className="text-sm text-white/80 mb-4">GHL Scale Up builds funnels with the automation that makes them work — template library, custom values, version control, and global sections all configured correctly.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <Target className="w-4 h-4" />
                  Get Your Funnel Built
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* FAQ Section */}
              <h2 id="faq" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-6">
                Frequently Asked Questions
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
                  <strong className="text-white">Still have questions about GHL's funnel builder?</strong>
                </p>
                <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                  Talk to our funnel specialists directly. We've built 200+ funnels across real estate, dental, home services, coaching, and SaaS.
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
                  <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation: Beginner's Guide →</Link>
                  <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                  <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                  <Link href="/blog/gohighlevel-vs-clickfunnels" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs ClickFunnels: Honest 2026 Comparison →</Link>
                  <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
                </div>
              </div>

              {/* CTA Block */}
              <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                <div className="absolute -top-14 -right-14 w-72 h-72 bg-[radial-gradient(circle,rgba(248,208,0,0.1)_0%,transparent_70%)] pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-block bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 md:px-3.5 py-1 md:py-1.5 rounded-full mb-4 md:mb-5">GHL Scale Up</div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 md:mb-3">We Build GHL Systems That Actually Work</h2>
                  <p className="text-sm md:text-base text-white/65 max-w-md mx-auto mb-6 md:mb-8">From full funnel builds to complete CRM automation we set up GoHighLevel for agencies and businesses that want results, not just a platform.</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1628] font-bold px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all">
                      Book a free strategy call
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg text-sm md:text-base hover:bg-white/20 transition-all">See our work</Link>
                  </div>
                </div>
              </div>
            </main>
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