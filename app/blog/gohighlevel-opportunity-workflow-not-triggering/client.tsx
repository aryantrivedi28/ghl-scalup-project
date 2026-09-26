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
  Ban as BanIcon,
  CircleSlash,
  AlertCircle as AlertCircleIcon,
  Webhook,
  Mail,
  MessageSquare,
  Phone as PhoneIcon,
  Calendar as CalendarIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  BarChart3 as BarChart3Icon,
  CalendarClock as CalendarClockIcon,
  UserX,
  UserCheck as UserCheckIcon,
  Clock4,
  Clock8,
  Clock12,
  CalendarCheck,
  CalendarX,
  CalendarOff,
  CalendarRange,
  CalendarSearch,
  RefreshCw as RefreshCwIcon,
  Replace,
  Shuffle,
  Timer as TimerIcon,
  Hourglass,
  Ban as BanIcon2,
  UserMinus,
  UserPlus as UserPlusIcon,
  CircleDollarSign,
  Trophy,
  Award as AwardIcon,
  BadgeCheck,
  CircleHelp,
  CircleAlert,
  Clock as ClockIcon2,
  TrendingDown,
  TrendingUp as TrendingUpIcon,
  MoveRight,
  MoveLeft,
  ArrowUpRight,
  ArrowDownRight,
  GitBranch as GitBranchIcon,
  GitMerge as GitMergeIcon,
  Network,
  Boxes,
  Box,
  Package,
  PackageCheck,
  PackageX,
  PackageOpen,
  Archive,
  ArchiveRestore,
  History,
  FileClock,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelOpportunityWorkflowNotTriggeringClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'quick-answer',
        'what-does-it-mean',
        'why-opportunity-record-and-enrollment-different',
        'opportunity-vs-pipeline-vs-stage',
        'which-opportunity-trigger',
        'how-pipeline-and-stage-filters-block',
        'how-opportunity-status-affects',
        'how-contact-association-affects',
        'how-multiple-opportunities-complicate',
        'how-existing-contacts-and-reentry',
        'how-to-test-with-controlled-opportunity',
        'how-to-confirm-enrollment',
        'common-reasons',
        'choosing-right-trigger',
        'common-mistakes',
        'when-problem-not-about-opportunity-trigger',
        'core-diagnostic-principle',
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
      q: "Why is my GoHighLevel opportunity workflow not triggering?",
      a: "Most often because the workflow is built on the wrong opportunity trigger for the event that occurred Opportunity Created, Opportunity Changed, Pipeline Stage Changed, and Stale Opportunities all watch for different things or its pipeline, stage, or status filters don't match the actual opportunity."
    },
    {
      q: "Why does my opportunity enter the correct stage but not trigger the workflow?",
      a: "If the workflow uses Opportunity Created, it has no stage filter and only watches for the opportunity's first creation. Stage-specific automation needs the Pipeline Stage Changed trigger instead."
    },
    {
      q: "Can a pipeline stage change trigger a GoHighLevel workflow?",
      a: "Yes, specifically through the Pipeline Stage Changed trigger, which is built for that exact event and supports Assigned To and Tag filters."
    },
    {
      q: "Why does the opportunity exist but the contact is not entering the workflow?",
      a: "Confirm the opportunity is actually associated with the contact you're checking an unexpected contact association, or a filter that excludes this specific opportunity, can both produce this symptom."
    },
    {
      q: "Can multiple opportunities affect workflow enrollment?",
      a: "Yes. If a contact has more than one opportunity, diagnosing from the contact record alone can be misleading identify which specific opportunity generated the event before troubleshooting further."
    },
    {
      q: "Does an existing contact need re-entry enabled for opportunity workflows?",
      a: "Only when the contact is already enrolled or has completed a prior run and you need a new opportunity event to enroll them again that's governed by Allow Re-entry, not by the opportunity trigger itself."
    },
    {
      q: "How can I verify whether an opportunity workflow actually enrolled the contact?",
      a: "Check Enrollment History for that contact. A recorded enrollment confirms the trigger worked; its absence means the problem is upstream, in trigger selection, pipeline, stage, status, or filters."
    },
    {
      q: "What if the workflow enrolled but the expected action did not happen?",
      a: "That's no longer an opportunity trigger problem it's an execution issue, covered in the workflow execution troubleshooting article."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'what-does-it-mean', title: 'What Does "Opportunity Workflow Not Triggering" Actually Mean?' },
    { id: 'why-opportunity-record-and-enrollment-different', title: 'Why an Opportunity Record and Workflow Enrollment Are Two Different Things' },
    { id: 'opportunity-vs-pipeline-vs-stage', title: 'Opportunity vs. Pipeline vs. Stage: Why the Distinction Matters' },
    { id: 'which-opportunity-trigger', title: 'Which Opportunity Trigger Is Your Workflow Actually Using?' },
    { id: 'how-pipeline-and-stage-filters-block', title: 'How Pipeline and Stage Filters Can Block a Qualifying Opportunity' },
    { id: 'how-opportunity-status-affects', title: 'How Opportunity Status Affects Workflow Triggering' },
    { id: 'how-contact-association-affects', title: 'How Contact Association Affects Enrollment' },
    { id: 'how-multiple-opportunities-complicate', title: 'How Multiple Opportunities Can Complicate Troubleshooting' },
    { id: 'how-existing-contacts-and-reentry', title: 'How Existing Contacts and Re-Entry Affect Repeated Events' },
    { id: 'how-to-test-with-controlled-opportunity', title: 'How to Test With a Controlled Opportunity' },
    { id: 'how-to-confirm-enrollment', title: 'How to Confirm Whether an Opportunity Actually Enrolled the Contact' },
    { id: 'common-reasons', title: 'Common Reasons an Opportunity Does Not Enroll a Contact' },
    { id: 'choosing-right-trigger', title: 'Choosing the Right Opportunity Trigger for Your Automation' },
    { id: 'common-mistakes', title: 'Common Mistakes When Diagnosing' },
    { id: 'when-problem-not-about-opportunity-trigger', title: 'When a Workflow Problem Isn\'t Actually About the Opportunity Trigger' },
    { id: 'core-diagnostic-principle', title: 'The Core Diagnostic Principle' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const commonReasonsData = [
    { symptom: 'New opportunity created, no enrollment', likelyCause: 'Wrong trigger (e.g., expecting stage-specific behavior from Opportunity Created)', whatToCheck: 'Which of the four opportunity triggers the workflow actually uses' },
    { symptom: 'Opportunity moved to the right-looking stage, nothing happens', likelyCause: 'Similarly-named stage in a different pipeline', whatToCheck: 'Exact pipeline scoping, not just stage name' },
    { symptom: 'Status changed, workflow didn\'t fire', likelyCause: 'Opportunity Changed trigger\'s operator doesn\'t match this exact transition', whatToCheck: 'The Is/Is Not/Has Changed/Has Changed To configuration' },
    { symptom: 'Opportunity exists, wrong (or no) contact enrolled', likelyCause: 'Opportunity associated with an unexpected contact', whatToCheck: 'Which contact the opportunity is actually tied to' },
    { symptom: 'Works for one contact\'s opportunity, not another\'s', likelyCause: 'Contact has multiple opportunities; wrong one is qualifying', whatToCheck: 'Which specific opportunity generated the event' },
    { symptom: 'Returning contact\'s new opportunity doesn\'t re-enroll them', likelyCause: 'Contact still active in the workflow, or re-entry disabled', whatToCheck: 'Current enrollment state and Allow Re-entry' },
    { symptom: 'Opportunity sits inactive with no follow-up', likelyCause: 'Workflow uses Opportunity Created/Changed instead of Stale Opportunities', whatToCheck: 'Whether a Stale Opportunities trigger is actually needed' },
    { symptom: 'Enrollment confirmed, expected action didn\'t happen', likelyCause: 'No longer a trigger problem', whatToCheck: 'Execution evidence for that specific run' },
  ];

  const triggerSelectionData = [
    { businessEvent: 'New lead needs an immediate follow-up sequence', recommendedTrigger: 'Opportunity Created', reason: 'The event you care about is the record\'s first appearance' },
    { businessEvent: 'A deal reaching a specific stage should launch stage-specific actions', recommendedTrigger: 'Pipeline Stage Changed', reason: 'This is the trigger built for stage movement the single most common mismatch' },
    { businessEvent: 'You need to react to a status outcome specifically (Won, Lost)', recommendedTrigger: 'Opportunity Changed', reason: 'Uses the appropriate Has Changed To operator for the status outcome' },
    { businessEvent: 'Deals are going quiet and need a nudge', recommendedTrigger: 'Stale Opportunities', reason: 'Watching for the absence of activity rather than a specific change' },
  ];
  
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        // onClick={handleOpenBooking}
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Opportunity Workflow Not Triggering? Pipeline, Stage & Opportunity Fixes</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Opportunity Triggers</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Opportunity Workflow Not Triggering?<br />
            <span className="text-[#F8D000]">Pipeline, Stage & Opportunity Fixes</span>
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
            This article is for one specific situation: an opportunity was created, updated, moved to a new stage, or changed status in GoHighLevel, and the workflow that should have responded never enrolled the contact. If your workflow doesn't trigger for anything, opportunities included, that's a broader issue see <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">initial trigger and enrollment troubleshooting</Link> instead.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">GoHighLevel has more than one opportunity-related trigger, and they watch for genuinely different events</strong> creation, status change, stage movement, and inactivity are four separate things, not four names for the same trigger. An opportunity existing, or even changing, doesn't mean every opportunity-based workflow should respond to it. The workflow has to be built on the trigger that actually watches for what happened, scoped to the right pipeline and stage, with filters the event actually satisfies.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Opportunity Trigger Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#which-opportunity-trigger"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Check Your Trigger
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
              <div className="text-sm font-bold text-white mb-2">Need Opportunity Trigger Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We diagnose and fix opportunity trigger issues for agencies and businesses.</p>
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

            {/* Section: What Does It Mean */}
            <h2 id="what-does-it-mean" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Does "GoHighLevel Opportunity Workflow Not Triggering" Actually Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This phrase covers several distinct failure points, and they don't share a fix. An opportunity event that doesn't produce the expected enrollment could mean:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The workflow is built on the wrong opportunity trigger for the event that actually happened.</li>
              <li>The opportunity is in the wrong pipeline, or a different stage than the trigger expects.</li>
              <li>The opportunity's status doesn't satisfy the trigger's qualification logic.</li>
              <li>The opportunity isn't associated with the contact you expect it to be.</li>
              <li>Additional filters tags, assigned user, custom fields exclude this specific opportunity.</li>
              <li>The contact's existing state blocks a new enrollment.</li>
              <li>The workflow actually enrolled the contact, and the real problem is downstream.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each of these is a different diagnosis. Assuming it's always "the opportunity trigger is broken" is how a two-minute filter check turns into rebuilding a workflow that was never the problem.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-opportunity-workflow-not-triggering.png"
                  alt="GoHighLevel Opportunity Workflow Not Triggering: The four opportunity triggers and their event chains"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Opportunity Workflow Not Triggering: The four opportunity triggers and their event chains</span>
              </div>
            </div>

            {/* Section: Why Opportunity Record and Enrollment Different */}
            <h2 id="why-opportunity-record-and-enrollment-different" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why a GoHighLevel Opportunity Record and a Workflow Enrollment Are Two Different Things
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An opportunity being created, moved, or changed is one event. A contact enrolling in a workflow because of it is a separate, dependent event. The chain runs: opportunity event occurs → pipeline and stage context is established → an opportunity-based trigger evaluates the event → the trigger's filters check whether it qualifies → the associated contact is identified → enrollment occurs → execution begins.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The opportunity can exist, sit in exactly the pipeline and stage you expect, and still produce no enrollment if the workflow's trigger isn't the one that actually watches for that kind of change, or if a filter excludes it. An opportunity record existing is necessary for enrollment. It isn't sufficient.
            </p>

            {/* Section: Opportunity vs Pipeline vs Stage */}
            <h2 id="opportunity-vs-pipeline-vs-stage" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Opportunity vs. Pipeline vs. Stage in GoHighLevel: Why the Distinction Matters for Triggers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An <strong className="text-[#1A2236]">opportunity</strong> is the individual record a specific potential deal tied to a contact. A <strong className="text-[#1A2236]">pipeline</strong> is the broader structure that organizes opportunities by process Sales, Onboarding, Renewals. A <strong className="text-[#1A2236]">stage</strong> is an opportunity's current position within a pipeline New Lead, Qualified, Proposal Sent, Won.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This distinction matters directly for troubleshooting because trigger filters operate at different levels of it. A pipeline filter narrows by which sales process the opportunity belongs to. A stage filter narrows by where it currently sits within that process. Confusing "the opportunity is in the right pipeline" with "the opportunity is in the right stage" is a common source of false confidence an opportunity can satisfy one and fail the other, and a trigger checking both needs both to match.
            </p>

            {/* Section: Which Opportunity Trigger */}
            <h2 id="which-opportunity-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which GoHighLevel Opportunity Trigger Is Your Workflow Actually Using?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the step most troubleshooting skips, and it's usually the actual answer. GoHighLevel currently has four distinct opportunity-related triggers, and they watch for genuinely different events.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Opportunity Created</strong> fires only when a brand-new opportunity is first added not when it's updated or moved afterward. Its filters are Assigned To, Has Tag, In Pipeline, Lead Value, Lost Reason, and Status. Notice what's missing: there's no specific-stage filter. If you need a workflow to fire when a new opportunity lands in a <em>particular</em> stage, Opportunity Created is the wrong trigger for that job regardless of how it's configured.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Pipeline Stage Changed</strong> is the trigger built specifically for stage movement it fires when an opportunity moves to a different stage within a pipeline, with Assigned To and Tag filters. This is the trigger for "when an opportunity reaches Proposal Sent" style automation.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Opportunity Changed</strong> watches for status changes on an opportunity, using operators Is, Is Not, Has Changed, Has Changed To against the opportunity's status, plus tag and custom-field filters. This is the trigger for "when an opportunity is marked Won" or "when status changes away from Open."
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Stale Opportunities</strong> is a genuinely different kind of event: it fires based on inactivity, using a configured duration-in-days threshold plus pipeline and stage filters, rather than responding to any single change at all.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A workflow built on the wrong one of these four will either never fire for the event you actually care about, or fire for a different event than you intended. Confirming which trigger a workflow uses is often faster than checking every filter on the wrong one.
            </p>

            {/* Section: How Pipeline and Stage Filters Block */}
            <h2 id="how-pipeline-and-stage-filters-block" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Pipeline and Stage Filters Can Block a Qualifying Opportunity
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Beyond trigger selection, the pipeline and stage filters on whichever trigger you're using have to match the opportunity's actual pipeline and stage precisely. A trigger scoped to a specific pipeline won't fire for an opportunity in a similarly-named pipeline in a different part of the account a common issue for businesses running parallel pipelines for different teams or services. The same applies to stage names: if two pipelines both have a stage called "Qualified," a trigger scoped to one pipeline's "Qualified" stage won't respond to the other's, even though the stage name looks identical in the dropdown.
            </p>

            {/* Section: How Opportunity Status Affects */}
            <h2 id="how-opportunity-status-affects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Opportunity Status Affects Workflow Triggering
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Status and stage are related but distinct. An opportunity's status (commonly Open, Won, Lost, or Abandoned) can change independently of which stage it's sitting in, and the Opportunity Changed trigger's operators Is, Is Not, Has Changed, Has Changed To determine exactly which status transition qualifies. A trigger configured with "Has Changed To: Won" will not fire when an opportunity's status changes to Lost, even though both are status changes on the same opportunity. Don't assume "the status changed" is specific enough information confirm it changed to the exact value the trigger is watching for.
            </p>

            {/* Section: How Contact Association Affects */}
            <h2 id="how-contact-association-affects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Contact Association Affects GoHighLevel Opportunity Workflow Enrollment
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every opportunity is tied to a contact, and workflow enrollment happens for that contact as a result of the opportunity event not for the opportunity as an independent record. If an opportunity was created or moved but somehow associated with a different contact than the one you expected (a duplicate contact record, a manually reassigned opportunity), the workflow may enroll the "wrong" contact from your perspective, or the contact you're checking may show no enrollment because the opportunity was never actually tied to them. When enrollment doesn't match expectations, confirm which contact the opportunity is actually associated with before assuming the trigger itself failed.
            </p>

            {/* Section: How Multiple Opportunities Complicate */}
            <h2 id="how-multiple-opportunities-complicate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Multiple GoHighLevel Opportunities Can Complicate Workflow Troubleshooting
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A single contact can have more than one opportunity across different pipelines, or multiple opportunities within the same pipeline over time. This matters for troubleshooting because checking "does this contact have an opportunity in the right stage" from the contact record isn't the same as confirming <em>which specific opportunity</em> generated the event you're investigating. If a contact has two opportunities and one qualifies for a trigger while the other doesn't, a diagnosis based only on the contact's current overall state can miss which one actually mattered. When multiple opportunities are involved, identify the specific opportunity tied to the event in question rather than reasoning from the contact record alone.
            </p>

            {/* Section: How Existing Contacts and Re-Entry */}
            <h2 id="how-existing-contacts-and-reentry" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Existing Contacts and Workflow Re-Entry Affect Repeated GoHighLevel Opportunity Events
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A returning contact generating a new opportunity event doesn't automatically behave the same as their first one. Whether a second enrollment occurs depends on the workflow's re-entry configuration and the contact's current state in that workflow a genuinely different diagnostic path than trigger or filter troubleshooting. Note also that simply updating an existing opportunity's details while it's active in a workflow does not restart that workflow; it continues from wherever it currently is. When the actual problem is "this worked once, but the same contact's next opportunity event didn't re-enroll them," the deeper mechanics belong in <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained</Link> rather than this article.
            </p>

            {/* Section: How to Test With Controlled Opportunity */}
            <h2 id="how-to-test-with-controlled-opportunity" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test a GoHighLevel Opportunity Workflow Trigger With a Controlled Opportunity
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Confirm the workflow is Published.</strong></li>
              <li><strong className="text-[#1A2236]">Confirm which of the four opportunity triggers it uses</strong> Created, Changed, Pipeline Stage Changed, or Stale Opportunities.</li>
              <li><strong className="text-[#1A2236]">Confirm the pipeline and stage filters</strong> match exactly where your test opportunity will live.</li>
              <li><strong className="text-[#1A2236]">Confirm status, tag, and any custom-field filters</strong> match the scenario you're testing.</li>
              <li><strong className="text-[#1A2236]">Use a contact you can control</strong>, ideally with no prior history in this workflow.</li>
              <li><strong className="text-[#1A2236]">Create or move the opportunity</strong> through the actual path real opportunities take.</li>
              <li><strong className="text-[#1A2236]">Verify the opportunity's resulting pipeline, stage, and status.</strong></li>
              <li><strong className="text-[#1A2236]">Check whether the contact enrolled</strong> in the workflow.</li>
              <li><strong className="text-[#1A2236]">If enrolled</strong>, stop diagnosing the trigger confirm what happened during execution instead.</li>
              <li><strong className="text-[#1A2236]">If not enrolled</strong>, work back through trigger selection, pipeline/stage match, and filters.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Confirming an opportunity exists in the right stage proves the opportunity is correctly positioned it doesn't prove the configured trigger caught the event that put it there, especially if the opportunity was manually placed into that stage rather than moved into it through the transition the trigger watches for.
            </p>

            {/* Section: How to Confirm Enrollment */}
            <h2 id="how-to-confirm-enrollment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Confirm Whether a GoHighLevel Opportunity Actually Enrolled the Contact
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the boundary the whole article works toward. Open Enrollment History for the contact tied to the opportunity you're troubleshooting. No enrollment record means the problem is upstream trigger selection, pipeline, stage, status, or filters. An enrollment record means the opportunity trigger did its job, and continuing to adjust pipeline or stage filters won't change anything, because they already worked. The full method for reading that evidence is in <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link>; if enrollment is confirmed and a later action still didn't happen, that's covered in <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working</Link>.
            </p>

            {/* Section: Common Reasons */}
            <h2 id="common-reasons" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Reasons a GoHighLevel Opportunity Does Not Enroll a Contact in a Workflow
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Symptom</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {commonReasonsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.symptom}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCause}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatToCheck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Choosing Right Trigger */}
            <h2 id="choosing-right-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Choosing the Right GoHighLevel Opportunity Trigger for Your Automation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Matching the trigger to the actual business event prevents most of the problems above before they happen:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Business Event</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Recommended Trigger</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {triggerSelectionData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.businessEvent}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.recommendedTrigger}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Combining pipeline and stage filters tightly is usually better than adding more downstream conditions inside the workflow a trigger that only fires for genuinely relevant events keeps the enrollment history clean and the diagnostic trail simple if something later needs troubleshooting.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mistakes When Diagnosing a GoHighLevel Opportunity Workflow That Isn't Triggering
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Using Opportunity Created for stage-specific automation.</strong> It only fires on the opportunity's first creation it has no stage filter to catch later movement.</li>
              <li><strong className="text-[#1A2236]">Assuming "opportunity exists in the right stage" proves the trigger fired.</strong> Manual placement into a stage and a tracked transition into that stage aren't the same evidence.</li>
              <li><strong className="text-[#1A2236]">Not checking which of the four triggers is actually configured.</strong> They watch for different events entirely, not variations of the same one.</li>
              <li><strong className="text-[#1A2236]">Diagnosing from the contact record when the contact has multiple opportunities.</strong> Identify the specific opportunity tied to the event first.</li>
              <li><strong className="text-[#1A2236]">Treating every repeat opportunity event as a re-entry problem,</strong> when the underlying trigger or filter match may be the actual cause.</li>
              <li><strong className="text-[#1A2236]">Changing pipeline, stage, and status filters simultaneously while troubleshooting,</strong> which erases the ability to tell which condition actually blocked enrollment.</li>
              <li><strong className="text-[#1A2236]">Concluding the workflow enrolled the contact because the opportunity looks correct,</strong> rather than checking Enrollment History directly.</li>
            </ul>

            {/* Section: When Problem Not About Opportunity Trigger */}
            <h2 id="when-problem-not-about-opportunity-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When a GoHighLevel Workflow Problem Isn't Actually About the Opportunity Trigger
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The workflow doesn't trigger for anything, opportunities included</strong> → <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix</Link></li>
              <li><strong className="text-[#1A2236]">The workflow worked before, but a returning contact's new event won't re-enroll them</strong> → <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained</Link></li>
              <li><strong className="text-[#1A2236]">Enrollment History confirms the contact entered, and you need to inspect the run itself</strong> → <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link></li>
              <li><strong className="text-[#1A2236]">The contact enrolled, but a later step didn't behave as expected</strong> → <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working</Link></li>
              <li><strong className="text-[#1A2236]">The problem is actually a form submission, not an opportunity</strong> → <Link href="/blog/gohighlevel-form-submitted-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Form Submitted Workflow Not Triggering</Link></li>
              <li><strong className="text-[#1A2236]">The problem is actually an appointment event, not an opportunity</strong> → <Link href="/blog/gohighlevel-appointment-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Appointment Workflow Not Triggering</Link></li>
            </ul>

            {/* Section: Core Diagnostic Principle */}
            <h2 id="core-diagnostic-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Core Diagnostic Principle for a GoHighLevel Opportunity Workflow That Isn't Enrolling Contacts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An opportunity event and a workflow enrollment are related but separate outcomes, connected by which of the four opportunity triggers the workflow actually uses, whether its pipeline, stage, and status filters match, and which contact the opportunity is genuinely associated with. Confirm the event happened, confirm the workflow is listening for that exact trigger and configuration, and check Enrollment History as the evidence for whether it actually worked. Once enrollment is confirmed, the opportunity trigger has done everything it's responsible for anything left to diagnose belongs to execution, not the trigger.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Opportunity Workflows That Don't Trigger
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
              Still stuck on an opportunity trigger issue?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free troubleshooting session</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Enrollment History & Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working →</Link>
                <Link href="/blog/gohighlevel-form-submitted-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Form Submitted Workflow Not Triggering →</Link>
                <Link href="/blog/gohighlevel-appointment-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Appointment Workflow Not Triggering →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Fixing an Opportunity Trigger Issue?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We diagnose and fix GoHighLevel opportunity trigger issues for agencies and businesses.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience troubleshooting opportunity trigger issues across hundreds of GHL accounts. All troubleshooting details verified against official documentation as of September 2026.
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