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
  Clock,
  Rocket,
  CheckCircle2,
  Image as ImageIcon,
  Target,
  GitCompare,
  BarChart3,
  Layers,
  Workflow,
  Mailbox,
  ListChecks,
  ClipboardCheck,
  Settings,
  Users,
  Calendar,
  MessageCircle,
  Phone,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Star,
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Compass,
  Database,
  Code,
  Terminal,
  FileCode,
  Cpu,
  Brain,
  Bot,
  FolderTree,
  GitMerge,
  TestTube,
  Package,
  Cloud,
  HardDrive,
  Lock,
  Unlock,
  Download,
  Upload,
  RefreshCw,
  Eye,
  PenTool,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function ClaudeCodeVsHighLevelAIStudioClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-the-difference',
        'is-claude-code-better-for-websites',
        'is-ai-studio-better-for-websites',
        'which-tool-gives-more-control',
        'which-is-better-for-custom-apps',
        'which-is-better-for-funnels',
        'which-is-easier-for-non-developer',
        'can-you-take-ai-studio-project',
        'can-you-use-both-together',
        'which-is-better-for-large-migrations',
        'how-much-does-it-cost',
        'which-is-better-for-maintenance',
        'which-tool-should-agency-choose',
        'final-verdict',
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
      q: "Is Claude Code better than HighLevel AI Studio?",
      a: "Neither is universally better. Claude Code is stronger for custom, code-heavy projects with external infrastructure; AI Studio is stronger for HighLevel-native sites and funnels that need CRM connectivity and fast, visual iteration."
    },
    {
      q: "Is HighLevel AI Studio good enough for professional websites?",
      a: "Yes, for HighLevel-hosted marketing sites, landing pages, and funnels HighLevel's own documentation describes it generating full multi-page websites and interactive experiences, not just single landing pages."
    },
    {
      q: "Can Claude Code build websites?",
      a: "Yes it can build a website's full codebase, from static pages to applications with a backend, but you're responsible for choosing and managing where it's hosted."
    },
    {
      q: "Can HighLevel AI Studio build web apps?",
      a: "Yes, per HighLevel's own documentation, which describes AI Studio generating interactive front-end experiences and dashboards, not only landing pages. It runs inside HighLevel's environment rather than as an independent, freely hostable application."
    },
    {
      q: "Can I export HighLevel AI Studio code?",
      a: "Not through an official, documented feature as of this writing. The Code Editor supports full in-browser editing, but there's no native \"download the full project\" function, and HighLevel users have publicly requested that this be added."
    },
    {
      q: "Can I edit AI Studio code with Claude Code?",
      a: "Not directly, since there's no official export path connecting the two. A developer can use an AI Studio project as a visual and content reference and rebuild the relevant parts in a real codebase with Claude Code."
    },
    {
      q: "Which is better for GoHighLevel agencies?",
      a: "It depends on the project, not the agency generally AI Studio for CRM-connected client sites and funnels, Claude Code for custom applications or anything that needs to be portable outside HighLevel."
    },
    {
      q: "Which is better for large websites?",
      a: "Claude Code, for genuinely large or content-heavy migrations that benefit from scripted, repository-based bulk changes rather than page-by-page prompt generation."
    },
    {
      q: "Which is better for custom web development?",
      a: "Claude Code it provides a full development environment (Git, testing, external packages, infrastructure choice) that AI Studio's in-platform editor doesn't attempt to replace."
    },
    {
      q: "Is HighLevel AI Studio cheaper than Claude Code?",
      a: "They're not directly comparable AI Studio has no standalone price and bills through your HighLevel plan and AI Employee tier, while Claude Code requires a Claude subscription starting at $20/month. Compare the total cost for your specific project, not the two price tags in isolation."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-the-difference', title: 'What Is the Difference Between Claude Code and HighLevel AI Studio?' },
    { id: 'is-claude-code-better-for-websites', title: 'Is Claude Code Better Than HighLevel AI Studio for Building Websites?' },
    { id: 'is-ai-studio-better-for-websites', title: 'Is HighLevel AI Studio Better for Building Websites and Funnels Inside GHL?' },
    { id: 'which-tool-gives-more-control', title: 'Which Tool Gives You More Control Over the Code?' },
    { id: 'which-is-better-for-custom-apps', title: 'Which Is Better for Custom Web Apps and Complex Projects?' },
    { id: 'which-is-better-for-funnels', title: 'Which Tool Is Better for HighLevel Funnels, Forms, Calendars, and CRM-Connected Pages?' },
    { id: 'which-is-easier-for-non-developer', title: 'Which Is Easier for a Non-Developer or Agency Owner?' },
    { id: 'can-you-take-ai-studio-project', title: 'Can You Take a HighLevel AI Studio Project and Continue Development in Claude Code?' },
    { id: 'can-you-use-both-together', title: 'Can You Use Claude Code and HighLevel AI Studio Together?' },
    { id: 'which-is-better-for-large-migrations', title: 'Which Tool Is Better for Large Website Migrations?' },
    { id: 'how-much-does-it-cost', title: 'How Much Does Claude Code Cost Compared With HighLevel AI Studio?' },
    { id: 'which-is-better-for-maintenance', title: 'Which Tool Is Better for Maintaining a Website After Launch?' },
    { id: 'which-tool-should-agency-choose', title: 'Which Tool Should a GoHighLevel Agency Choose?' },
    { id: 'final-verdict', title: 'Final Verdict' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const decisionMatrixData = [
    { requirement: 'HighLevel landing page', betterChoice: 'AI Studio', why: 'Native publishing, no separate hosting decision' },
    { requirement: 'HighLevel funnel or form', betterChoice: 'AI Studio', why: 'Connects directly to CRM and workflows' },
    { requirement: 'CRM-connected booking experience', betterChoice: 'AI Studio', why: 'Calendar and CRM live in the same environment' },
    { requirement: 'Simple client website inside GHL', betterChoice: 'AI Studio', why: 'Fastest path to a non-technical, editable site' },
    { requirement: 'Highly custom website or app', betterChoice: 'Claude Code', why: 'Real development environment and architecture control' },
    { requirement: 'Large codebase or bulk migration', betterChoice: 'Claude Code', why: 'Scriptable, repository-based workflow' },
    { requirement: 'Custom API integration', betterChoice: 'Claude Code', why: 'No platform boundary on external services' },
    { requirement: 'Git-based development', betterChoice: 'Claude Code', why: 'Native version control and collaboration' },
    { requirement: 'Project that must survive leaving HighLevel', betterChoice: 'Claude Code', why: 'No official AI Studio export exists yet' },
    { requirement: 'Hybrid project (CRM pages + custom app)', betterChoice: 'Both', why: 'Different layers, integrated via API not a shared codebase' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        href="/book-a-call"
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
          <span className="text-[#1A2236] font-medium">Claude Code vs HighLevel AI Studio: Which to Use</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Claude Code</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">AI Studio</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Web Development</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Claude Code vs HighLevel AI Studio:<br />
            <span className="text-[#F8D000]">Which Should You Use to Build Websites and Apps?</span>
          </h1>

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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated September 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            You've got Claude Code. You've also got HighLevel AI Studio sitting inside your GHL account. A client needs a website, a booking flow, or something closer to a real web app. Which one actually builds it?
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The answer has less to do with which AI is smarter and more to do with three questions: where does this project need to live, how much control over the code do you actually need, and who has to maintain it after launch. This article walks through those questions using a project-based comparison rather than a feature list, and it corrects one assumption worth knowing upfront: AI Studio's code editor lets you edit code in the browser, but as of this writing there is no official way to download a complete AI Studio project and continue it elsewhere. That single fact changes several of the decisions below.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Build Advice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#final-verdict"
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
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

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
                5+ years GHL experience · 200+ systems built globally. All tool comparisons verified against official documentation as of September 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

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

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Help Deciding?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help agencies choose the right build tool for each project.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
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

            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section: What Is the Difference */}
            <h2 id="what-is-the-difference" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is the Difference Between Claude Code and HighLevel AI Studio?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Claude Code is Anthropic's agentic coding tool it works in a terminal, IDE, desktop app, or browser, reading and editing a real codebase, running commands, and managing Git.</strong> It's built for software development generally, not for any one platform.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">HighLevel AI Studio is a prompt-driven builder inside HighLevel that generates websites, landing pages, forms, and interactive web experiences from a description, a URL, or a reference image,</strong> with visual editing and an in-browser code editor layered on top.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The difference that matters isn't which one is more capable in the abstract. It's that Claude Code operates on a codebase you control, on infrastructure you choose, while AI Studio operates inside HighLevel's environment, generating and hosting the project within that ecosystem. Everything else in this comparison follows from that one distinction.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/claude-code-vs-highlevel-ai-studio.png"
                  alt="Claude Code vs HighLevel AI Studio comparison: Development environment, CRM connectivity, and project portability"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Claude Code vs HighLevel AI Studio: Development environment, CRM connectivity, and project portability compared</span>
              </div>
            </div>

            {/* Section: Is Claude Code Better for Websites */}
            <h2 id="is-claude-code-better-for-websites" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is Claude Code Better Than HighLevel AI Studio for Building Websites?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a genuinely custom website one with reusable components, specific architecture decisions, external APIs, or a testing and deployment pipeline yes. Claude Code gives you a real repository, Git history, the ability to run and debug code locally, and no platform boundary around what libraries or services you can use.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a marketing website that needs to launch fast, connect to HighLevel's CRM, and be editable by a non-developer afterward, this advantage matters less than it sounds. <strong className="text-[#1A2236]">Claude Code is generally the stronger choice when the website behaves like a software project rather than a marketing asset</strong> when it has logic, integrations, and structure that benefit from version control and a real development workflow, not just pages and copy.
            </p>

            {/* Section: Is AI Studio Better for Websites */}
            <h2 id="is-ai-studio-better-for-websites" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is HighLevel AI Studio Better for Building Websites and Funnels Inside GHL?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For anything that needs to be a HighLevel asset from day one a landing page tied to a funnel, a booking page that needs the CRM to see every submission, a client site that a non-technical team member will edit next month yes. AI Studio generates the site, and you connect supported forms and calendars to it directly, so a submission can trigger a HighLevel workflow without any external plumbing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For GHL agencies specifically, this is the practical advantage that matters: the site isn't a separate system you have to integrate with the CRM afterward. It's already inside it.
            </p>

            {/* Section: Which Tool Gives More Control */}
            <h2 id="which-tool-gives-more-control" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Tool Gives You More Control Over the Code?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Neither tool has "no code access" anymore that would be an outdated claim about AI Studio specifically. AI Studio's Code Editor is a real, CodeMirror-powered editor that lets you view, search, and edit the TypeScript, JSX, CSS, and JSON files behind an AI-generated project, with version history and one-click rollback, directly in the browser.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Claude Code's control operates at a different layer entirely: a real filesystem, a terminal, Git branches and commits, the ability to install any package, run tests, and connect to external tools through MCP. The honest distinction is <strong className="text-[#1A2236]">where the development environment lives, not whether code editing exists at all.</strong> AI Studio gives you control over the project's code, inside HighLevel's environment. Claude Code gives you control over the entire environment.
            </p>

            {/* Section: Which Is Better for Custom Apps */}
            <h2 id="which-is-better-for-custom-apps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Is Better for Custom Web Apps and Complex Projects?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel describes AI Studio as capable of generating interactive web apps, dashboards, and multi-page experiences, not just static landing pages that capability is real and shouldn't be understated. What AI Studio doesn't give you is a conventional development environment around that code: no local repository, no test runner, no framework-level dependency management you control directly, no CI pipeline.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a project with authentication, a database, third-party services, and custom business logic that needs to be tested and debugged like software, Claude Code is the more natural environment because that's what it's built for. The dividing line is project complexity and how much the app needs to behave like conventionally engineered software, not a hard cap on what AI Studio can visually produce.
            </p>

            {/* Section: Which Is Better for Funnels */}
            <h2 id="which-is-better-for-funnels" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Tool Is Better for HighLevel Funnels, Forms, Calendars, and CRM-Connected Pages?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is AI Studio's clearest advantage. Forms and calendars built or connected inside AI Studio feed directly into HighLevel's CRM and can fire <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">HighLevel workflows</Link> the moment someone submits or books no external form-relay, no webhook you have to build and maintain. A page generated in AI Studio, published on a custom domain, is already a HighLevel asset that shows up in the same pipelines and automations as everything else in the account.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Claude Code can absolutely build a form or a booking UI. It just doesn't know your HighLevel account exists unless you build that connection yourself through the HighLevel API, a webhook, or an MCP server someone has configured for that purpose. That's third-party integration work, not something Claude Code does natively, and it's worth being precise about that distinction rather than implying otherwise.
            </p>

            {/* Section: Which Is Easier for Non-Developer */}
            <h2 id="which-is-easier-for-non-developer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Is Easier for a Non-Developer or Agency Owner?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">AI Studio:</strong> prompt-driven, visual editing, live preview, publish with a click, no separate hosting decision to make. An agency owner or a client can iterate on copy and layout without touching code.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Claude Code:</strong> a terminal or IDE-based workflow that assumes some comfort with a development environment, even though the actual coding is handled by Claude. The learning curve isn't about difficulty in the abstract it's that Claude Code hands you the same tools a developer uses (repositories, commands, deployment decisions), and someone has to own those decisions. That's a feature for a technical team and friction for someone who just wants a page published today.
            </p>

            {/* Section: Can You Take AI Studio Project */}
            <h2 id="can-you-take-ai-studio-project" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Take a HighLevel AI Studio Project and Continue Development in Claude Code?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Not officially, as of this writing.</strong> AI Studio's Code Editor is built to keep editing inside the browser HighLevel's own documentation frames not having to download files as a benefit, not a limitation. There's no "download codebase as ZIP" option in current official documentation. This is corroborated independently: GHL agencies have posted open feature requests asking HighLevel to add exactly this moving an AI Studio project into the standard Sites builder, or exporting it as usable files with one commenting that they built their own manual process to archive AI Studio sites "until GoHighLevel adds an official export feature." A paid third-party browser extension exists specifically to scrape AI Studio's project files out of the live code editor, because no first-party way to do it exists.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is a different situation from the "AI Studio locks your code in forever" narrative some older articles pushed you can see and edit the code, and HighLevel could ship an export path at any time. But treat a native export as unverified until HighLevel's documentation confirms it, and don't build a client's long-term primary asset in AI Studio assuming it can later be handed to a developer to take elsewhere.
            </p>

            {/* Section: Can You Use Both Together */}
            <h2 id="can-you-use-both-together" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Use Claude Code and HighLevel AI Studio Together?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, but not as a clean "prototype in AI Studio, then export into Claude Code" pipeline that workflow doesn't officially exist yet. What does work in practice:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Different layers, same project.</strong> Use AI Studio for the HighLevel-native pieces landing pages, forms, booking flows connected to the CRM while Claude Code builds anything that needs to live outside HighLevel, like a custom app, an API, or a client portal with its own infrastructure. The two pieces integrate through HighLevel's API and webhooks, not through a shared codebase.</li>
              <li><strong className="text-[#1A2236]">Rebuild, don't migrate.</strong> If an AI Studio prototype proves out the design and content, a developer can use it as a visual reference and rebuild the relevant pages as a real codebase in Claude Code a manual step, not an export.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Where this creates unnecessary complexity: running two build environments for a project simple enough that one tool could have handled end to end. The point of using both is covering two genuinely different needs, not defaulting to both out of habit.
            </p>

            {/* Section: Which Is Better for Large Migrations */}
            <h2 id="which-is-better-for-large-migrations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Tool Is Better for Large Website Migrations?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a migration involving 100+ pages, bulk redirects, repeated templates, and structured data that needs programmatic transformation, Claude Code has a real advantage it can operate against a codebase, script bulk changes, and run against real files rather than regenerating each page through a prompt. Community discussion around large migrations into AI Studio-style builders consistently raises the same friction points: prompt-driven regeneration doesn't scale cleanly to hundreds of near-identical pages the way a script iterating over a template does.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That doesn't make AI Studio irrelevant to a migration if the destination is a HighLevel-hosted site, AI Studio (or HighLevel's native site builder) is still where the final experience needs to live and connect to the CRM. The realistic pattern is Claude Code handling the bulk content transformation and structure, with the final HighLevel-facing pages assembled or connected inside HighLevel.
            </p>

            {/* Section: How Much Does It Cost */}
            <h2 id="how-much-does-it-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Much Does Claude Code Cost Compared With HighLevel AI Studio?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Neither tool has a single number that means anything on its own usage and development time affect the real cost more than the sticker price.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Claude Code</strong> rides on a Claude subscription: no Claude Code on the Free plan, Pro at $20/month (or $17/month billed annually), Max at $100/month (5x Pro's usage) or $200/month (20x), and Team plans where Claude Code specifically requires Premium seats (around $100–125/seat, 5-seat minimum) rather than the cheaper Standard tier. Enterprise is custom-priced. There's also pay-per-token API access with no subscription. Verify current figures at claude.com/pricing, since Anthropic has adjusted these plans and included usage more than once in 2026.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">AI Studio</strong> doesn't have its own separate subscription it's a Labs feature bundled into a HighLevel plan ($97 Starter, $297 Unlimited, or $497 Agency Pro), and its usage draws from whichever <Link href="/blog/gohighlevel-ai-employee" className="text-[#0E9BF0] hover:underline">AI Employee tier</Link> the location is on: Pay-Per-Use (token billing, no monthly fee), Growth ($50/month/location), or Unlimited ($97/month/location, which includes a larger AI Studio allowance). AI Studio ran free during HighLevel's Summer of AI promotion, which ended August 31, 2026 so usage should now be billing under one of these tiers rather than free.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The comparison that actually matters: a cheaper tool that takes a developer three extra hours to configure correctly isn't cheaper. Weigh subscription cost against the development and maintenance time each path actually requires for the specific project.
            </p>

            {/* Section: Which Is Better for Maintenance */}
            <h2 id="which-is-better-for-maintenance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Tool Is Better for Maintaining a Website After Launch?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the question a lot of comparisons skip, and given AI Studio's export limitation above, it deserves real weight here. Ask who fixes a bug, adds a feature, or redesigns a section six months from now and can they do it in whichever tool built the original.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A site built in AI Studio stays fully editable inside AI Studio, with version history and rollback, as long as the account stays on HighLevel. A site built with Claude Code lives in a repository anyone with access and the right skills can pick up, hosted wherever you chose to put it, independent of any single platform's continued existence in your stack.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The practical rule: if there's a real chance the client leaves HighLevel, or a different developer needs to take over later without HighLevel access, don't make AI Studio the only copy of that asset.
            </p>

            {/* Section: Which Tool Should Agency Choose */}
            <h2 id="which-tool-should-agency-choose" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Tool Should a GoHighLevel Agency Choose?
            </h2>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-4">
              <h3 className="text-base font-bold text-[#0E9BF0] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Choose AI Studio when:
              </h3>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                the project lives primarily inside HighLevel, the client needs native forms or calendars connected to the CRM, speed and non-technical iteration matter more than architecture, and there's no realistic scenario where the project needs to leave HighLevel.
              </p>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-4">
              <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Choose Claude Code when:
              </h3>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                the project is code-heavy, needs custom APIs or infrastructure, will be maintained by a developer using Git, or needs to be hosted independently of any single platform.
              </p>
            </div>

            <div className="bg-[#FEF9E7] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-4">
              <h3 className="text-base font-bold text-[#F8D000] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Use both when:
              </h3>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                an agency needs HighLevel-native CRM-connected pages for one part of a client's presence and a genuinely custom application for another built and hosted separately, connected through HighLevel's API rather than a shared codebase.
              </p>
            </div>

            {/* Section: Decision Matrix */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Claude Code vs HighLevel AI Studio: Which One Should You Choose?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requirement</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Better Choice</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionMatrixData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.requirement}</td>
                      <td className={`py-3 px-3 font-semibold ${
                        item.betterChoice === 'AI Studio' ? 'text-[#25C97D]' :
                        item.betterChoice === 'Claude Code' ? 'text-[#0E9BF0]' :
                        'text-[#F8D000]'
                      }`}>{item.betterChoice}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Final Verdict */}
            <h2 id="final-verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Verdict
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose HighLevel AI Studio when the project is fundamentally a HighLevel asset its value comes from living inside the CRM, connecting to forms and calendars, and being editable by a non-developer. Choose Claude Code when the project is fundamentally a software project its value comes from architecture, external integrations, and a development team that needs Git and a real environment. Use both when a client genuinely needs HighLevel's native business infrastructure for part of their presence and custom software for another part, built and hosted separately.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The one adjustment to make from how this comparison usually gets framed: don't treat AI Studio as a rapid prototype you'll "export into Claude Code later." As of now, that path doesn't officially exist. If long-term portability matters for a specific project, that's a reason to start it in Claude Code, not a problem to solve after the fact.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
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

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still unsure which tool is right for your project?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free project assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Services →</Link>
                <Link href="/blog/gohighlevel-ai-employee" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Employee Guide →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Choosing Your Build Tool?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help agencies choose the right tool for each project AI Studio for CRM-connected pages, Claude Code for custom apps.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Project Assessment
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building websites and apps with both Claude Code and HighLevel AI Studio. All tool capabilities verified against official documentation as of September 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>
        </div>
      </div>

      {/* Booking Modal - Rendered at root level */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />

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