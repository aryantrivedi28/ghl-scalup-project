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
  RotateCcw,
  Repeat,
  UserPlus,
  UserCheck,
  Ban,
  ShieldQuestion,
  GitPullRequest,
  GitFork,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelWorkflowReentryClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'start-here',
        'what-does-reentry-mean',
        'what-does-allow-reentry-do',
        'first-vs-repeat-enrollment',
        'how-do-you-troubleshoot-reentry',
        'using-enrollment-history',
        'its-not-always-allow-reentry',
        'form-reentry',
        'appointment-reentry',
        'opportunity-reentry',
        'reentry-vs-execution',
        'decision-tree',
        'common-reentry-scenarios',
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
      q: "What is workflow re-entry in GoHighLevel?",
      a: "The ability for a contact who already has one enrollment in a workflow to generate a second, independent enrollment when a later event satisfies the trigger again — governed by the workflow's re-entry configuration, not automatic."
    },
    {
      q: "What does Allow Re-entry do in GoHighLevel?",
      a: "It permits a contact to enter a workflow again after completing or being removed from a previous run. It doesn't override trigger filters — a repeat event still has to qualify on its own."
    },
    {
      q: "Can the same contact enter a GoHighLevel workflow more than once?",
      a: "Yes, if Allow Re-entry is enabled (or the trigger has its own re-entry exception, as some appointment and invoice triggers do) and the new event satisfies every trigger condition."
    },
    {
      q: "Why does my GoHighLevel workflow trigger once but not again?",
      a: "Most commonly because Allow Re-entry is disabled, the second event doesn't match the trigger's filters the way the first one did, or the second event hasn't actually happened yet."
    },
    {
      q: "Why isn't my workflow re-enrolling a contact even though Allow Re-entry is enabled?",
      a: "The setting only removes the re-entry restriction — the new event still has to independently satisfy the trigger. Check the event and filters again, separately from re-entry."
    },
    {
      q: "How can I confirm whether a contact entered the workflow again?",
      a: "Check Enrollment History for that contact. A second, distinct record confirms re-entry; its absence points back to the trigger and re-entry configuration."
    },
    {
      q: "Does a new triggering event always cause a workflow to re-enroll?",
      a: "No. It only does if re-entry is permitted for that contact's state and the event fully satisfies the trigger's conditions."
    },
    {
      q: "What should I check if the contact re-entered but the workflow action didn't happen?",
      a: "Stop looking at re-entry — the trigger worked. Investigate execution for that specific run instead."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'start-here', title: 'Start Here: Why Didn\'t the Contact Enter Again?' },
    { id: 'what-does-reentry-mean', title: 'What Does Re-Entry Mean in a GoHighLevel Workflow?' },
    { id: 'what-does-allow-reentry-do', title: 'What Does Allow Re-Entry Do in GoHighLevel?' },
    { id: 'first-vs-repeat-enrollment', title: 'First Enrollment vs. Repeat Enrollment' },
    { id: 'how-do-you-troubleshoot-reentry', title: 'How Do You Troubleshoot GoHighLevel Workflow Re-Entry?' },
    { id: 'using-enrollment-history', title: 'Using Enrollment History to Confirm Re-Entry' },
    { id: 'its-not-always-allow-reentry', title: 'It\'s Not Always Allow Re-Entry' },
    { id: 'form-reentry', title: 'Why Doesn\'t the Same Contact Re-Enter After Submitting a Form Again?' },
    { id: 'appointment-reentry', title: 'Why Doesn\'t a Contact Re-Enter After Another Appointment?' },
    { id: 'opportunity-reentry', title: 'Can an Opportunity Trigger a Workflow Again?' },
    { id: 'reentry-vs-execution', title: 'Re-Entry vs. Workflow Execution' },
    { id: 'decision-tree', title: 'Workflow Re-Entry Decision Tree' },
    { id: 'common-reentry-scenarios', title: 'Common Re-Entry Scenarios' },
    { id: 'the-diagnostic-principle', title: 'The Diagnostic Principle' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const firstVsRepeatData = [
    { situation: 'First enrollment', question: 'Did the contact\'s event satisfy the trigger at all?' },
    { situation: 'A second event occurs', question: 'Can this contact enter the workflow again, given its re-entry settings?' },
    { situation: 'Second event happened, no second enrollment', question: 'Is re-entry allowed, and did the new event genuinely qualify?' },
    { situation: 'Contact enrolled a second time', question: 'What happened during that new run — a separate, execution-level question' },
  ];

  const commonScenariosData = [
    { whatHappened: 'Contact never entered the workflow at all', whatToCheck: 'Trigger and qualification', whereToGoNext: 'Initial trigger troubleshooting' },
    { whatHappened: 'Contact entered once, not again', whatToCheck: 'Re-entry setting, new event, trigger filters', whereToGoNext: 'This article' },
    { whatHappened: 'Allow Re-entry is disabled', whatToCheck: 'Re-entry configuration', whereToGoNext: 'This article' },
    { whatHappened: 'Allow Re-entry is enabled, still no second enrollment', whatToCheck: 'The actual event, filters, and contact state', whereToGoNext: 'This article' },
    { whatHappened: 'Second enrollment exists', whatToCheck: 'Execution of that run', whereToGoNext: 'Enrollment History / execution troubleshooting' },
    { whatHappened: 'Problem is specific to a form trigger', whatToCheck: 'Form trigger configuration', whereToGoNext: 'Form-specific troubleshooting' },
    { whatHappened: 'Problem is specific to an appointment trigger', whatToCheck: 'Appointment trigger configuration and status handling', whereToGoNext: 'Appointment-specific troubleshooting' },
    { whatHappened: 'Problem is specific to an opportunity/pipeline trigger', whatToCheck: 'Pipeline, stage, and multiple-opportunity settings', whereToGoNext: 'Opportunity-specific troubleshooting' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help fixing your workflow re-entry issue.</p>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Workflow Re-Entry Explained</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Re-Entry</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Workflow Re-Entry:<br />
            <span className="text-[#F8D000]">Why a Contact Doesn't Enter Again</span>
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
            This article is for one specific situation: a contact already went through a GoHighLevel workflow once, and you expected the same contact to enter it again after a new qualifying event — but it didn't happen. If your contact has never entered the workflow at all, this isn't the problem you have; start with <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">initial trigger and enrollment troubleshooting</Link> instead. If the contact clearly re-entered and something afterward went wrong, use <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link> to inspect that run directly.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">A new triggering event happening does not automatically mean the same contact gets enrolled again.</strong> Repeat enrollment depends on the workflow's re-entry configuration, and — just as importantly — on whether that new event actually satisfies the trigger the same way the first one did. Turning on Allow Re-entry is one part of the answer, not the whole answer.
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
              href="#decision-tree"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Decision Tree
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
              <p className="text-xs text-white/60 leading-relaxed mb-4">We diagnose and fix workflow re-entry issues for agencies and businesses.</p>
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
              Start Here: Why Didn't the Contact Enter Again?
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Has this contact entered the workflow before?</strong> Check Enrollment History to confirm.</li>
              <li><strong className="text-[#1A2236]">Did a new triggering event actually occur?</strong> Don't assume — verify the second action genuinely happened.</li>
              <li><strong className="text-[#1A2236]">Is Allow Re-entry enabled</strong> in the workflow's settings?</li>
              <li><strong className="text-[#1A2236]">Did the new event satisfy every trigger condition,</strong> the same way the first one did? A repeat event can still fail qualification.</li>
              <li><strong className="text-[#1A2236]">Was the contact in a state that affects eligibility</strong> — already active in the workflow, or otherwise?</li>
              <li><strong className="text-[#1A2236]">Does Enrollment History show a second enrollment?</strong> If yes, re-entry worked — stop troubleshooting re-entry and move to execution instead.</li>
            </ol>

            {/* Section: What Does Re-Entry Mean */}
            <h2 id="what-does-reentry-mean" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does Re-Entry Mean in a GoHighLevel Workflow?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A contact who already has one enrollment in a workflow can, under the right conditions, generate a second, independent enrollment when a later event satisfies the same trigger again. Whether that second enrollment actually happens is controlled by the workflow's re-entry configuration — it isn't automatic just because the trigger fired once before.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Example:</strong> a lead submits a Consultation Request form and enters a workflow. Weeks later, the same lead submits the same form again. The instinct is to expect a second, identical enrollment. What actually happens depends on whether the workflow allows re-entry, whether the contact's current state permits it, and whether this second submission satisfies the trigger's filters exactly as the first one did.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-workflow-reentry.png"
                  alt="GoHighLevel Workflow Re-Entry: Allow Re-entry flow, trigger-specific exceptions, and troubleshooting decision tree"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Workflow Re-Entry: Allow Re-entry flow, trigger-specific exceptions, and troubleshooting decision tree</span>
              </div>
            </div>

            {/* Section: What Does Allow Re-Entry Do */}
            <h2 id="what-does-allow-reentry-do" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does Allow Re-Entry Do in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Allow Re-entry is a workflow-level setting: enabled, a contact can enter again after fully completing the workflow or being manually removed from it. Disabled, a contact who already has a completed or active run generally can't generate another one, even if the trigger fires again.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What it does not do is override everything else. A repeat event still has to satisfy the trigger's own filters — form identity, pipeline and stage, tag, or whatever the trigger checks — exactly as the original event did. Enabling Allow Re-entry doesn't fix a mismatched filter, a workflow that's still in Draft, or a second event that isn't actually the one the trigger is listening for. It removes one specific restriction; it doesn't relax the rest of the qualification logic.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Re-entry behavior also isn't identical across every trigger type, and this is where a lot of confusion comes from. <strong className="text-[#1A2236]">Appointment-based triggers have a documented exception:</strong> a brand-new appointment booking re-enters the contact regardless of the Allow Re-entry setting, and a contact can even have more than one active run at once from separate appointments. But that exception is narrower than it sounds — a trigger watching for an appointment <em>status change</em>, like a reschedule, still requires Allow Re-entry to be enabled and the updated appointment to match the trigger's filters. Recurring appointment series don't generate new entries through the standard booking trigger at all. <strong className="text-[#1A2236]">Invoice-based triggers carry a similar always-allow exception for new invoices.</strong> Don't assume one appointment or invoice rule applies to every trigger on the account — verify it for the specific trigger you're troubleshooting.
            </p>

            {/* Section: First vs Repeat Enrollment */}
            <h2 id="first-vs-repeat-enrollment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              First Enrollment vs. Repeat Enrollment
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">The Question That Actually Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {firstVsRepeatData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.question}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How Do You Troubleshoot Re-Entry */}
            <h2 id="how-do-you-troubleshoot-reentry" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Troubleshoot GoHighLevel Workflow Re-Entry?
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Confirm the first enrollment.</strong> Enrollment History should show the contact actually entered previously — don't assume from memory.</li>
              <li><strong className="text-[#1A2236]">Confirm the second event actually happened.</strong> Verify the specific action, not a similar one.</li>
              <li><strong className="text-[#1A2236]">Compare the two events directly.</strong> Same form? Same appointment type or calendar? Same pipeline and stage? Same relevant field values? A second event that differs from the first in any filtered attribute won't qualify the same way.</li>
              <li><strong className="text-[#1A2236]">Check Allow Re-entry</strong> in the workflow's settings.</li>
              <li><strong className="text-[#1A2236]">Check the trigger filters again,</strong> independent of re-entry — a repeat event still needs to pass them.</li>
              <li><strong className="text-[#1A2236]">Check the contact's current state</strong> — still active in this workflow, or genuinely finished.</li>
              <li><strong className="text-[#1A2236]">Check Enrollment History</strong> for a second record.</li>
              <li><strong className="text-[#1A2236]">If a second enrollment exists,</strong> stop troubleshooting re-entry. The remaining question belongs to <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">execution troubleshooting</Link>, not this article.</li>
            </ol>

            {/* Section: Using Enrollment History */}
            <h2 id="using-enrollment-history" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Using Enrollment History to Confirm Re-Entry
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You don't need a deep dive here — <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">that's a separate article</Link> — but for re-entry specifically, Enrollment History answers exactly the question you need: does a second, distinct enrollment record exist for this contact, and when did it occur relative to the second event? A second record confirms re-entry worked; its absence, alongside a confirmed second event, points you back to Allow Re-entry and trigger filters rather than anywhere downstream.
            </p>

            {/* Section: It's Not Always Allow Re-Entry */}
            <h2 id="its-not-always-allow-reentry" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              It's Not Always Allow Re-Entry
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before you conclude the setting is the problem, rule out the alternatives — each of these produces the exact same symptom:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The second event genuinely didn't happen yet</li>
              <li>It happened, but it's a different event than the trigger expects</li>
              <li>The event happened but failed a trigger filter, unrelated to re-entry at all</li>
              <li>Relevant contact, opportunity, or appointment data changed between the first and second event</li>
              <li>The workflow's configuration itself changed since the first enrollment</li>
              <li>You're testing against the wrong contact or the wrong event</li>
              <li>The contact did re-enter, and the real issue is a downstream action that didn't run</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Treating every "didn't enter again" as an Allow Re-entry problem is how people flip a setting, see nothing change, and conclude the platform is broken — when the actual cause was never re-entry at all.
            </p>

            {/* Section: Form Re-Entry */}
            <h2 id="form-reentry" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Doesn't the Same Contact Re-Enter After Submitting a Form Again?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Same sequence as above, applied: confirm the second submission actually happened, confirm it was the same form the trigger is watching, confirm Allow Re-entry is on, then check Enrollment History for a second record. If the problem turns out to be specific to how the form trigger itself behaves rather than re-entry, that's a dedicated form-trigger troubleshooting topic, not this one.
            </p>

            {/* Section: Appointment Re-Entry */}
            <h2 id="appointment-reentry" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Doesn't a Contact Re-Enter After Another Appointment?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Appointment workflows have their own wrinkle, covered above: a new booking typically re-enters regardless of Allow Re-entry, but a status-change trigger like a reschedule still needs the setting enabled and the updated appointment to match every filter. If the appointment gets cancelled or marked no-show while a contact is mid-workflow, that contact is removed from the run entirely — a different behavior from re-entry, and worth ruling out before assuming a setting is misconfigured. Deeper appointment-trigger-specific troubleshooting beyond re-entry belongs to its own dedicated topic.
            </p>

            {/* Section: Opportunity Re-Entry */}
            <h2 id="opportunity-reentry" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can an Opportunity Trigger a Workflow Again?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, under the same general rules — the new opportunity event has to satisfy the trigger's pipeline and stage conditions, and re-entry has to be permitted. One opportunity-specific detail worth knowing: a separate <strong className="text-[#1A2236]">Allow Multiple Opportunity</strong> setting controls whether each opportunity tied to a contact runs its own independent execution. It's also worth knowing that simply updating an existing opportunity's details while it's active in a workflow does not restart that workflow — it continues from wherever it currently is, using the updated values. That's a common point of confusion worth ruling out before assuming a re-entry problem. Deeper pipeline and stage-specific trigger troubleshooting belongs to its own dedicated topic.
            </p>

            {/* Section: Re-Entry vs Execution */}
            <h2 id="reentry-vs-execution" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Re-Entry vs. Workflow Execution
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">No second enrollment exists</strong> → the problem is still re-entry and trigger qualification — everything above this section.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A second enrollment exists</strong> → re-entry worked. Continuing to adjust the Allow Re-entry setting at this point won't fix anything, because it already did its job. What's left is an execution question: did that second run actually complete the way you expected? That's a distinct diagnostic process, not a re-entry one.
            </p>

            {/* Section: Decision Tree */}
            <h2 id="decision-tree" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Workflow Re-Entry Decision Tree
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-2">Has this contact entered the workflow before?</p>
                <p className="text-sm text-[#5C6880]">→ No — this isn't a re-entry problem. Start with initial trigger and enrollment troubleshooting.</p>
                <p className="text-sm text-[#5C6880]">→ Yes — continue.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-2">Did a new triggering event actually occur?</p>
                <p className="text-sm text-[#5C6880]">→ No — the problem is the event, not re-entry.</p>
                <p className="text-sm text-[#5C6880]">→ Yes — continue.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-2">Does the event satisfy every trigger condition?</p>
                <p className="text-sm text-[#5C6880]">→ No — fix the qualification issue; re-entry isn't relevant yet.</p>
                <p className="text-sm text-[#5C6880]">→ Yes — continue.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-2">Is re-entry permitted for this trigger and contact state?</p>
                <p className="text-sm text-[#5C6880]">→ No — review the re-entry configuration and any trigger-specific exceptions.</p>
                <p className="text-sm text-[#5C6880]">→ Yes — continue.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <p className="text-sm font-bold text-[#1A2236] mb-2">Does Enrollment History show a second enrollment?</p>
                <p className="text-sm text-[#5C6880]">→ No — continue investigating re-entry, qualification, and contact state.</p>
                <p className="text-sm text-[#5C6880]">→ Yes — re-entry worked. Move to execution troubleshooting.</p>
              </div>
            </div>

            {/* Section: Common Re-Entry Scenarios */}
            <h2 id="common-reentry-scenarios" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Re-Entry Scenarios
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happened</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Where to Go Next</th>
                  </tr>
                </thead>
                <tbody>
                  {commonScenariosData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.whatHappened}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatToCheck}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whereToGoNext}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: The Diagnostic Principle */}
            <h2 id="the-diagnostic-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Diagnostic Principle
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A repeated event and a repeated enrollment are not automatically the same thing. Work the chain in order: previous enrollment, new event, trigger qualification, re-entry permission, then Enrollment History as the evidence that tells you whether it actually worked. If a second enrollment exists, the re-entry question is answered — whatever's left is an execution problem, and that's a different diagnostic process entirely.
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
              Still stuck on a workflow re-entry issue?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free troubleshooting session</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Enrollment History & Execution Logs Guide →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Fixing a Workflow Re-Entry Issue?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We diagnose and fix GoHighLevel workflow re-entry problems for agencies and businesses.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience troubleshooting workflow re-entry issues across hundreds of GHL accounts. All troubleshooting details verified against official documentation as of September 2026.
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