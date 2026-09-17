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
  DollarSign,
  Users2,
  Search,
  XCircle,
  HelpCircle,
  FileQuestion,
  AlertCircle,
  Filter,
  Eye,
  RefreshCw,
  PlayCircle,
  PauseCircle,
  ExternalLink,
  FileText,
  ListOrdered,
  GitMerge,
  Split,
  Clock as ClockIcon,
  CalendarClock,
  SkipForward,
  CheckSquare,
  XSquare,
  AlertOctagon,
  Timer,
  ArrowRightCircle,
  Navigation,
  Route,
  MapPin,
  Flag,
  CircleDot,
  StopCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelEnrollmentHistoryExecutionLogsClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'start-here',
        'two-different-diagnostic-jobs',
        'what-does-enrollment-history-tell',
        'what-are-execution-logs',
        'how-do-you-troubleshoot-step-by-step',
        'find-last-known-good-step',
        'why-workflow-stuck-branched-error',
        'troubleshooting-examples',
        'common-enrollment-execution-problems',
        'where-to-go-next',
        'the-diagnostic-principle',
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
      q: "What is Enrollment History in GoHighLevel?",
      a: "A record, per workflow, of which contacts entered it, when, and which triggering event caused each entry the first thing to check when you're unsure whether a workflow actually ran for someone."
    },
    {
      q: "What are Execution Logs in GoHighLevel?",
      a: "The detailed record of what happened to a specific contact's enrollment after it started which steps ran, which were skipped, where it's currently sitting, and where any error occurred."
    },
    {
      q: "How do I know if a contact entered a workflow?",
      a: "Check Enrollment History for that contact and that workflow. A record confirms entry; no record means the issue is upstream in the trigger, not in execution."
    },
    {
      q: "How do I find where a GoHighLevel workflow failed?",
      a: "Find the last step you can confirm executed successfully, identify what should have happened immediately after it, and inspect that specific transition rather than reviewing the whole workflow at once."
    },
    {
      q: "Why does my workflow show an enrollment but not produce the expected result?",
      a: "The trigger worked. The remaining question is whether execution reached the relevant action and, if so, whether that action's own configuration or a connected integration is what's actually failing."
    },
    {
      q: "Why is my GoHighLevel workflow waiting?",
      a: "It may be exactly where it should be. Check the wait step's duration, any attached condition, and business-hours or timing settings before assuming it's stuck."
    },
    {
      q: "How do I troubleshoot a workflow error?",
      a: "Start from the error itself, trace it to the specific step and that step's configuration and input data, check any connected integration, and reproduce it under controlled conditions before calling it fixed."
    },
    {
      q: "When should I check the trigger instead of execution logs?",
      a: "Whenever there's no enrollment record at all. Execution logs only have something to show you once a contact has actually entered before that, the problem lives in the trigger and qualification stage."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'start-here', title: 'Start Here: Determine Where the Workflow Failed' },
    { id: 'two-different-diagnostic-jobs', title: 'Two Different Diagnostic Jobs' },
    { id: 'what-does-enrollment-history-tell', title: 'What Does Enrollment History Tell You in GoHighLevel?' },
    { id: 'what-are-execution-logs', title: 'What Are GoHighLevel Execution Logs?' },
    { id: 'how-do-you-troubleshoot-step-by-step', title: 'How Do You Troubleshoot a Workflow Step by Step?' },
    { id: 'find-last-known-good-step', title: 'Find the Last Known Good Step' },
    { id: 'why-workflow-stuck-branched-error', title: 'Why Is a Workflow Stuck, Branched Wrong, or Showing an Error?' },
    { id: 'troubleshooting-examples', title: 'Troubleshooting Examples' },
    { id: 'common-enrollment-execution-problems', title: 'Common Enrollment and Execution Problems' },
    { id: 'where-to-go-next', title: 'Where to Go Next' },
    { id: 'the-diagnostic-principle', title: 'The Diagnostic Principle' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const commonProblemsData = [
    { whatYouSee: 'No enrollment record', whatItUsuallyMeans: 'Contact didn\'t enter', whatToCheckNext: 'Trigger, filters, and qualification conditions' },
    { whatYouSee: 'Enrollment exists, workflow never progressed', whatItUsuallyMeans: 'Trigger worked; something blocked execution from starting', whatToCheckNext: 'Workflow status and the first step\'s configuration' },
    { whatYouSee: 'Execution shows waiting', whatItUsuallyMeans: 'Run is paused, not stuck', whatToCheckNext: 'Wait duration, conditions, and timing settings' },
    { whatYouSee: 'Execution took a different branch', whatItUsuallyMeans: 'Condition evaluated differently than expected', whatToCheckNext: 'The data available at the moment the condition ran' },
    { whatYouSee: 'Specific action flagged with an error', whatItUsuallyMeans: 'That step failed', whatToCheckNext: 'The action\'s configuration, inputs, and connected integration' },
    { whatYouSee: 'A step is marked skipped', whatItUsuallyMeans: 'Workflow logic bypassed it', whatToCheckNext: 'Whether that was the intended behavior for this contact' },
    { whatYouSee: 'Execution shows complete, but the real-world result is missing', whatItUsuallyMeans: 'The workflow finished; the action didn\'t produce the expected outcome', whatToCheckNext: 'The action\'s configuration and the downstream system it\'s supposed to affect' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help troubleshooting your workflow execution.</p>
      <Button
        onClick={handleOpenBooking}
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Button>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Enrollment History & Execution Logs Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Troubleshooting</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Execution Logs</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Use GoHighLevel Enrollment History and Execution Logs to Troubleshoot Workflows
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
            A contact is enrolled in a workflow. The trigger clearly worked. But something still isn't right an email never went out, the contact seems stuck, or they ended up somewhere you didn't expect. At this point, guessing what happened wastes time. Enrollment History and Execution Logs exist to answer that question with evidence instead of guesswork.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Enrollment History tells you whether and when a contact entered a workflow. Execution information tells you what happened after that where the contact's run progressed, paused, branched, or failed, to the extent the current interface exposes that detail.</strong> If the contact never shows up as enrolled, the problem is upstream, in the event, trigger, or qualification stage that's <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">a different troubleshooting problem entirely</Link>. If the contact is enrolled, everything in this article is where you look next.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Workflow Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#start-here"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Start Here
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
                5+ years GHL experience · 200+ systems built globally. All troubleshooting details verified against official documentation as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Workflow Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We diagnose and fix workflow execution issues for agencies and businesses.</p>
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

            {/* Section: Start Here */}
            <h2 id="start-here" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Start Here: Determine Where the Workflow Failed
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Does the contact appear in Enrollment History?</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>No → the problem is upstream. Investigate the event, trigger, filters, and qualification conditions covered in <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? How to Find and Fix the Problem</Link>, not here.</li>
                  <li>Yes → continue.</li>
                </ul>
              </li>
              <li><strong className="text-[#1A2236]">Did the workflow reach the step you expected it to reach?</strong> Check the execution path.</li>
              <li><strong className="text-[#1A2236]">What state is that step in</strong> completed, skipped, waiting, branched, or errored?</li>
              <li><strong className="text-[#1A2236]">Is the cause the workflow's logic, or the action itself?</strong> That distinction decides what you fix next.</li>
            </ol>

            {/* Section: Two Different Diagnostic Jobs */}
            <h2 id="two-different-diagnostic-jobs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Two Different Diagnostic Jobs
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This article picks up exactly where trigger troubleshooting leaves off. <strong className="text-[#1A2236]">Event → Trigger → Qualification → Enrollment</strong> is a separate problem, covered elsewhere. <strong className="text-[#1A2236]">Enrollment → Execution → Action → Result</strong> is this article's job: the contact is in the workflow, and something about what happened next needs an answer backed by evidence, not assumption.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-enrollment-history-execution-logs.png"
                  alt="GoHighLevel Enrollment History and Execution Logs: Diagnostic flow from enrollment confirmation to execution evidence"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Enrollment History and Execution Logs: Diagnostic flow from enrollment confirmation to execution evidence</span>
              </div>
            </div>

            {/* Section: What Does Enrollment History Tell You */}
            <h2 id="what-does-enrollment-history-tell" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does Enrollment History Tell You in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Enrollment History answers one question first: <strong className="text-[#1A2236]">did this contact actually enter this workflow, and when?</strong> Opened from within a workflow, it lists every contact who's been through it, with the contact, date enrolled, current action, current status, and a link into that enrollment's execution detail filterable by date range, by event (added to workflow, executed, failed, finished, waiting), and by contact.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That timing detail matters more than it looks. If a contact submitted a form at 10:04 and you expected an action by 10:05, Enrollment History tells you whether an enrollment record exists for that event at all, and when it happened relative to the trigger. No record the trigger problem is real and belongs in the article linked above. A record exists the trigger worked, and the 10:05 action you're missing is now an execution question.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If a workflow allows re-entry, the same contact can appear more than once. Each enrollment record is tied to the specific event that caused it, which is how you tell two separate runs apart rather than assuming one confused record.
            </p>

            {/* Section: What Are Execution Logs */}
            <h2 id="what-are-execution-logs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Are GoHighLevel Execution Logs?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Where Enrollment History confirms entry, execution detail shows the journey: which nodes in the workflow the contact's run actually reached, which ones it skipped, and where it currently sits if it's still in progress. Current tooling includes a few specific things worth knowing by name: <strong className="text-[#1A2236]">Skipped Nodes</strong> marks steps the run bypassed, entry and exit status indicators show when a contact's run started and ended, and a <strong className="text-[#1A2236]">Highlight Contact Path</strong> option opens the workflow builder with that specific contact's actual route highlighted on the canvas genuinely useful on a workflow with more than a couple of branches. A <strong className="text-[#1A2236]">Go To Action</strong> link jumps straight to a step's configuration from inside the log, and any action that hit an error has its status visibly flagged rather than buried in a wall of identical-looking rows.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What this doesn't do is replace judgment. It shows you what happened; it doesn't tell you why a business rule produced that outcome. That's still your job, using the evidence it gives you.
            </p>

            {/* Section: How Do You Troubleshoot Step by Step */}
            <h2 id="how-do-you-troubleshoot-step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Troubleshoot a Workflow Step by Step?
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Identify the specific contact.</strong> Don't troubleshoot the workflow in the abstract pick the exact record with the problem.</li>
              <li><strong className="text-[#1A2236]">Confirm enrollment.</strong> Enrollment History, for that contact, for the relevant event.</li>
              <li><strong className="text-[#1A2236]">Establish the timeline.</strong> Trigger event, enrollment time, expected action time, and if there's a discrepancy the actual execution time.</li>
              <li><strong className="text-[#1A2236]">Open the execution path</strong> for that enrollment.</li>
              <li><strong className="text-[#1A2236]">Find the last step that clearly completed.</strong> This is your known-good point.</li>
              <li><strong className="text-[#1A2236]">Identify what should have happened right after it.</strong> Name the specific next step, not "something should have happened."</li>
              <li><strong className="text-[#1A2236]">Inspect that transition.</strong> Did the run wait, branch, skip, error, or complete there?</li>
              <li><strong className="text-[#1A2236]">If execution reached the action itself</strong> but the result didn't happen, the problem is the action's configuration, not the trigger or the workflow logic that got it there.</li>
              <li><strong className="text-[#1A2236]">Reproduce it.</strong> Run the same event through a controlled test to confirm you've actually found the cause.</li>
              <li><strong className="text-[#1A2236]">Confirm the fix</strong> by running it again and checking the execution path matches what you now expect.</li>
            </ol>

            {/* Section: Find Last Known Good Step */}
            <h2 id="find-last-known-good-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Find the Last Known Good Step
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Rather than scanning an entire workflow hoping something looks wrong, work forward from evidence: find the first step you can prove executed, identify the step that should have come immediately after it, and compare what should have happened against what the log actually shows. Whatever changes between those two points is where the real problem lives. Repeat outward from there until the divergence stops moving that's your failure point, and it's usually much closer to the start than a random scan would suggest.
            </p>

            {/* Section: Why Workflow Stuck, Branched, Error */}
            <h2 id="why-workflow-stuck-branched-error" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Is a Workflow Stuck, Branched Wrong, or Showing an Error?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Waiting isn't failure.</strong> A run sitting at a wait step may be exactly where it should be check the wait's duration, any condition attached to it, and business-hours or timing settings before assuming something broke.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Wrong branch isn't failure either, most of the time.</strong> If a contact took Path B when you expected Path A, the useful question is "what data did the condition actually evaluate at that moment," not "why did the workflow stop" it didn't stop, it made a decision based on the data it had.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A skipped step needs its logic checked, not automatically its data.</strong> Workflow logic can deliberately bypass a step for a given contact. Confirm whether that was intended before treating it as a bug.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">An error is the one state that's unambiguous.</strong> Work from error → the specific step it occurred on → that step's configuration → the input data at the time → any connected integration → then reproduce it under controlled conditions. If the interface offers a details view or AI-assisted explanation for that specific error, use it don't guess at a cause the log doesn't actually show.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One more distinction worth keeping straight: <strong className="text-[#1A2236]">a workflow execution problem</strong> means the run didn't progress the way its own logic should have produced. <strong className="text-[#1A2236]">An action problem</strong> means the run reached the step correctly, but that action didn't produce the external result you expected a message that didn't send, an update that didn't stick. Reaching the action is not the same as the action succeeding; check both separately rather than assuming one implies the other.
            </p>

            {/* Section: Troubleshooting Examples */}
            <h2 id="troubleshooting-examples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Troubleshooting Examples
            </h2>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-semibold text-[#1A2236] mb-1">Contact never enrolled.</p>
                <p className="text-sm text-[#5C6880]">No Enrollment History record exists for the expected event. This isn't an execution problem go to trigger troubleshooting instead.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-semibold text-[#1A2236] mb-1">Enrolled, but the action never happened.</p>
                <p className="text-sm text-[#5C6880]">The record exists, execution reached the relevant step, but the expected outcome didn't occur. Check that step's configuration, not the trigger.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-semibold text-[#1A2236] mb-1">Looks stuck.</p>
                <p className="text-sm text-[#5C6880]">Enrolled, and execution is sitting at a wait step. Confirm the wait is intentional (duration, condition, timing) before touching anything.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-semibold text-[#1A2236] mb-1">Unexpected branch.</p>
                <p className="text-sm text-[#5C6880]">Enrolled, execution reached an If/Else condition, and the contact went down a path you didn't expect. Check what data the condition actually saw at that moment.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-semibold text-[#1A2236] mb-1">Clear error.</p>
                <p className="text-sm text-[#5C6880]">Execution reached an action and it's flagged with an error. Troubleshoot that action's configuration and connected services this has nothing to do with why the contact enrolled.</p>
              </div>
            </div>

            {/* Section: Common Enrollment and Execution Problems */}
            <h2 id="common-enrollment-execution-problems" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Enrollment and Execution Problems
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What You See</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Usually Means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What to Check Next</th>
                  </tr>
                </thead>
                <tbody>
                  {commonProblemsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.whatYouSee}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItUsuallyMeans}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatToCheckNext}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Treat "usually means" as a strong starting hypothesis, not a certainty confirm against the actual log detail for that specific contact before changing anything.
            </p>

            {/* Section: Where to Go Next */}
            <h2 id="where-to-go-next" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where to Go Next
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If there's no enrollment at all, this article isn't the one you need <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? How to Find and Fix the Problem</Link> covers the event, trigger, and qualification stage in full.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the same contact worked once but won't enter again, that's a re-entry question specifically, not a general execution one a dedicated article on GoHighLevel workflow re-entry covers that territory in depth once published.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If enrollment is confirmed and you've traced execution to a specific failing action, a dedicated deep dive on diagnosing a failed workflow step is the next layer down from what's covered here.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the problem is specific to a form, appointment, or opportunity/pipeline trigger rather than general execution, dedicated troubleshooting articles for each of those trigger types cover the specific conditions and behavior involved.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For workflows complex enough that this kind of tracing has become a regular occurrence, that's usually a sign the underlying <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">workflow architecture</Link> needs a second look rather than another one-off fix.
            </p>

            {/* Section: The Diagnostic Principle */}
            <h2 id="the-diagnostic-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Diagnostic Principle
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use Enrollment History to establish whether the contact entered. Use execution evidence to determine what happened after that. Find the last confirmed step, identify exactly where execution diverged from what you expected, and troubleshoot that specific point not the workflow as a whole. Most workflow problems that feel mysterious stop feeling that way the moment you stop asking "why isn't this working" as one question and start asking it as a sequence: did it enroll, what was the last good step, where did it diverge, and why.
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
              Need help tracing a workflow execution issue?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free troubleshooting session</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Services →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Tracing a Workflow Execution Issue?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We diagnose and fix GoHighLevel workflow execution problems for agencies and businesses.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Troubleshooting Session
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience troubleshooting workflow execution issues across hundreds of GHL accounts. All troubleshooting details verified against official documentation as of September 2026.
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