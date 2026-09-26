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
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelWorkflowTriggeredNotWorkingClient() {
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
        'how-to-confirm-workflow-started',
        'how-to-find-last-successful-step',
        'how-to-read-execution-path',
        'why-workflow-may-be-waiting',
        'how-if-else-conditions',
        'what-skipped-step-means',
        'how-to-troubleshoot-failed-action',
        'when-action-succeeds-external-fails',
        'why-email-sms-execute-without-delivery',
        'how-opportunity-pipeline-actions',
        'why-completed-may-not-produce-outcome',
        'how-to-troubleshoot-step-by-step',
        'common-mistakes',
        'when-problem-not-about-execution',
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
      q: "Why did my GoHighLevel workflow trigger but not complete?",
      a: "Most often because it's genuinely still waiting on a Wait step, took an If/Else branch you didn't expect, or an action failed or was skipped partway through. Check the contact's execution path rather than guessing."
    },
    {
      q: "How do I know which GoHighLevel workflow step failed?",
      a: "Confirm enrollment, open the contact's execution path in Execution Logs, find the last step that shows success, then inspect the very next step that boundary is almost always where the answer is."
    },
    {
      q: "What does it mean if a GoHighLevel workflow is still \"in progress\"?",
      a: "The contact is actively moving through the workflow and hasn't reached a wait, an error, or the end. Compare elapsed time against any configured wait durations before assuming something's wrong."
    },
    {
      q: "Why is my GoHighLevel workflow stuck on a wait step?",
      a: "It may not be stuck waits run for their full configured duration in live conditions, unlike in test mode where GoHighLevel compresses timers to seconds. Confirm the actual wait length before troubleshooting further."
    },
    {
      q: "Why did my GoHighLevel workflow take the wrong If/Else path?",
      a: "The condition evaluated correctly against the contact's data at the exact moment execution reached it. Check the field, tag, or value the condition actually reads, and confirm it had the value you expected at that point in the sequence not just at enrollment."
    },
    {
      q: "What does a skipped GoHighLevel workflow step mean?",
      a: "Either the step is disabled, or an attached condition evaluated to false. Neither is automatically an error check whether the skip matches what you configured."
    },
    {
      q: "Can a webhook execute successfully in GoHighLevel while the external system still fails?",
      a: "Yes. GoHighLevel confirms the request was sent, not that the receiving system processed it correctly. Failures on the receiving end need to be checked in that system's own logs."
    },
    {
      q: "Why does a GoHighLevel workflow say \"completed\" when the expected result didn't happen?",
      a: "Completed confirms the workflow reached its final step it doesn't confirm every action produced its intended real-world result. Verify the actual outcome (delivery, pipeline state, notification) separately."
    },
    {
      q: "How do I troubleshoot a failed GoHighLevel workflow action?",
      a: "Identify the specific failure category missing data, expired integration connection, invalid value, or a rejected webhook since each needs a different fix, then check the relevant configuration for that category specifically rather than the workflow as a whole."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer: Why a Workflow Triggers but Doesn\'t Finish' },
    { id: 'what-does-it-mean', title: 'What Does "Triggered but Not Working" Actually Mean?' },
    { id: 'how-to-confirm-workflow-started', title: 'How to Confirm a Workflow Actually Started' },
    { id: 'how-to-find-last-successful-step', title: 'How to Find the Last Successful Step' },
    { id: 'how-to-read-execution-path', title: 'How to Read a Workflow\'s Execution Path' },
    { id: 'why-workflow-may-be-waiting', title: 'Why a Workflow May Be Waiting Instead of Failing' },
    { id: 'how-if-else-conditions', title: 'How If/Else Conditions Can Send a Contact Down the Wrong Path' },
    { id: 'what-skipped-step-means', title: 'What a Skipped Step Actually Means' },
    { id: 'how-to-troubleshoot-failed-action', title: 'How to Troubleshoot a Failed Action' },
    { id: 'when-action-succeeds-external-fails', title: 'When an Action Succeeds but the External System Fails' },
    { id: 'why-email-sms-execute-without-delivery', title: 'Why Email or SMS Can Execute Without Being Delivered' },
    { id: 'how-opportunity-pipeline-actions', title: 'How Opportunity and Pipeline Actions Can Miss the Expected Result' },
    { id: 'why-completed-may-not-produce-outcome', title: 'Why "Completed" May Not Have Produced the Expected Outcome' },
    { id: 'how-to-troubleshoot-step-by-step', title: 'How to Troubleshoot Step by Step After It Has Already Triggered' },
    { id: 'common-mistakes', title: 'Common Mistakes When Debugging a Workflow That Triggered but Didn\'t Finish' },
    { id: 'when-problem-not-about-execution', title: 'When a Workflow Problem Isn\'t About Execution After Triggering' },
    { id: 'core-diagnostic-principle', title: 'The Core Diagnostic Principle' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const failedActionData = [
    { symptom: 'Action failed, missing-data error', likelyCause: 'A required field the action depends on is empty for this contact', whatToCheck: 'The field the action reads, and whether it was populated before this step ran' },
    { symptom: 'Action failed, connection/auth error', likelyCause: 'An integration\'s API key or OAuth token expired or was revoked', whatToCheck: 'The integration\'s connection status outside the workflow' },
    { symptom: 'Action failed, invalid value', likelyCause: 'Data in an unexpected format (e.g., a field expecting a number holds text)', whatToCheck: 'The actual value on the contact record at execution time' },
    { symptom: 'Webhook/custom action shows an error', likelyCause: 'The receiving endpoint rejected the request or timed out', whatToCheck: 'The endpoint\'s own logs, independent of GoHighLevel' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Workflow Triggered but Not Working: Find the Failed Step</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Workflow Execution</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Workflow Triggered but Not Working:<br />
            <span className="text-[#F8D000]">How to Find the Failed Step</span>
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
            This article is for one specific situation: the contact entered the workflow you've confirmed that but something downstream didn't happen the way you expected. If you're not sure the workflow enrolled the contact at all, start with <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">initial trigger and enrollment troubleshooting</Link> instead. If the workflow ran successfully before and the same contact just won't go through it again, that's a <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">re-entry problem</Link>, not this one.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Once enrollment is confirmed, stop asking "why isn't the workflow working" and start asking "what is the last step that definitely happened, and what is the first one that didn't happen as expected."</strong> Everything downstream of that point waiting, branching, skipping, failing, or executing but producing the wrong external result has a different diagnosis and a different fix. Treating all of them as the same problem is what turns a five-minute fix into an afternoon of rebuilding.
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
              href="#how-to-find-last-successful-step"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Find the Failed Step
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

            {/* Section: What Does It Mean */}
            <h2 id="what-does-it-mean" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Does "GoHighLevel Workflow Triggered but Not Working" Actually Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The phrase hides several genuinely different situations, and they don't share a fix:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The workflow enrolled the contact but is still waiting on an active Wait step not broken, just not there yet.</li>
              <li>The workflow reached an If/Else condition and took the branch you didn't expect.</li>
              <li>A step was skipped deliberately or because of an upstream condition.</li>
              <li>An action failed outright and the log shows an error.</li>
              <li>An action executed successfully inside GoHighLevel, but the external result never happened an SMS that never arrived, a webhook the receiving system silently rejected.</li>
              <li>The workflow reached its final step and shows Completed, but the business outcome you actually wanted still didn't occur.</li>
              <li>The workflow appears stuck because it's genuinely waiting on an external system that hasn't responded yet.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each of these looks like "the workflow isn't working" from the outside. They are not the same problem, and diagnosing them as if they were is the single most common way people waste time here.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-workflow-triggered-not-working.png"
                  alt="GoHighLevel Workflow Triggered but Not Working: Finding the last successful step and first point of divergence"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Workflow Triggered but Not Working: Finding the last successful step and first point of divergence</span>
              </div>
            </div>

            {/* Section: How to Confirm Workflow Started */}
            <h2 id="how-to-confirm-workflow-started" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Confirm a GoHighLevel Workflow Actually Started Before Troubleshooting Further
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before anything else: has this contact actually entered the workflow? If yes, the trigger did its job. Don't re-open the trigger, don't add or remove filters, and don't touch Allow Re-entry none of that affects what happens after enrollment. If you're not certain enrollment happened, check that first using <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">initial trigger troubleshooting</Link>; everything below this point assumes it already has.
            </p>

            {/* Section: How to Find Last Successful Step */}
            <h2 id="how-to-find-last-successful-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Find the Last Successful Step in a GoHighLevel Workflow
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the core method, and it's simpler than auditing the entire workflow from scratch.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Say a workflow runs: Trigger → Add Tag → Wait 10 Minutes → Send Email → If/Else → Create Opportunity → Internal Notification. The contact enrolled, got the tag, passed the wait and the email never arrived. The investigation doesn't start at the trigger and doesn't touch the opportunity or notification steps. It starts at the boundary: the last confirmed success (the wait completing) and the first point of divergence (the email).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That boundary is the whole diagnosis. Rebuilding the entire workflow, or changing several settings at once "to be safe," destroys the one piece of information you actually have where, specifically, things stopped matching expectation.
            </p>

            {/* Section: How to Read Execution Path */}
            <h2 id="how-to-read-execution-path" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Read a GoHighLevel Workflow's Execution Path for a Specific Contact
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              To find that boundary, you need the contact's actual execution path, not a guess based on how long it's been. Open the workflow's Execution Logs, select the affected contact, and read the step-by-step record of what actually happened GoHighLevel's canvas view also highlights this directly on the workflow diagram, marking which nodes errored, which were skipped, and which are still in progress for that contact.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The mechanics of reading that interface where the tabs live, what each column means, how to filter by contact are covered in full in <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link>. This article picks up after that: once you can see the path, the next question is what each state on that path actually means and what to do about it.
            </p>

            {/* Section: Why Workflow May Be Waiting */}
            <h2 id="why-workflow-may-be-waiting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why a GoHighLevel Workflow May Be Waiting Instead of Failing
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A Wait step is the single most common thing mistaken for a failure. If the log shows the contact sitting at a wait, that's not evidence anything is broken it's evidence the workflow is doing exactly what it was built to do. Check the wait's configured duration against how much time has actually passed since enrollment, and don't assume the countdown is instant: real-time waits run in real time. Testing can create the opposite illusion GoHighLevel compresses wait timers to seconds during a workflow test, so a wait that behaves one way in test mode and another way live isn't a bug, it's the difference between simulated and real timing. If the wait duration has genuinely elapsed and the contact still hasn't moved, that's when it becomes worth investigating not before.
            </p>

            {/* Section: How If/Else Conditions */}
            <h2 id="how-if-else-conditions" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Workflow If/Else Conditions Can Send a Contact Down the Wrong Path
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An If/Else condition evaluates at the moment the contact reaches it not at enrollment, and not based on what you expect the data to look like. The model is simple: condition → true → Path A, condition → false → Path B. When the log shows the contact went down the branch you didn't want, the workflow isn't malfunctioning; it evaluated the condition correctly against the data it actually had at that moment.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Inspect exactly what the condition is checking a tag, a custom field, an opportunity value, a pipeline stage and compare it against the contact's actual record state at the time execution reached that step, not the state you assumed. Timing matters here: if a tag gets applied two steps after the condition that checks for it, the condition will evaluate before the tag exists. This is a logic-ordering issue inside the workflow, not a trigger filter problem, and it's a different diagnosis from anything in the initial-trigger article.
            </p>

            {/* Section: What Skipped Step Means */}
            <h2 id="what-skipped-step-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What a Skipped GoHighLevel Workflow Step Actually Means
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A skipped step isn't automatically an error. GoHighLevel skips disabled nodes automatically, and downstream actions still fire normally past them so if you or a teammate temporarily disabled a step while testing something else and forgot to re-enable it, "skipped" is expected, not broken. A step can also be skipped because a condition attached to it evaluated to false, which is really the same diagnosis as the branching case above, just expressed at the individual-action level rather than an explicit If/Else.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The distinction that matters: was this step skipped on purpose (disabled, or correctly failing a condition), or is it skipped in a way that contradicts what you configured? Open the step and check whether it's marked disabled before assuming its logic is wrong.
            </p>

            {/* Section: How to Troubleshoot Failed Action */}
            <h2 id="how-to-troubleshoot-failed-action" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Troubleshoot a Failed GoHighLevel Workflow Action
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A failed action is different from a skipped one the log will typically show an error rather than a clean bypass. Failures tend to fall into a small number of categories:
            </p>

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
                  {failedActionData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.symptom}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCause}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatToCheck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every one of these needs its own check don't assume a single global cause. A permissions problem and a missing-field problem look identical from the outside ("the action failed") but require completely different fixes.
            </p>

            {/* Section: When Action Succeeds External Fails */}
            <h2 id="when-action-succeeds-external-fails" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When a GoHighLevel Workflow Action Succeeds but the External System Fails
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the distinction that trips up the most people, and it's worth being explicit about: <strong className="text-[#1A2236]">a workflow step showing as executed inside GoHighLevel is not the same claim as the external system having successfully processed it.</strong> A webhook can fire, receive a 200 response, and still fail to produce the outcome you wanted on the other end if the receiving system silently discards the payload or errors after accepting it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The same boundary applies to native integrations. If a workflow step hands off to Zapier or another connected platform, a failure on the receiving side looks identical, from inside GoHighLevel, to success the GHL step completed its job the moment it sent the request. Our <Link href="/blog/connect-zapier-to-gohighlevel" className="text-[#0E9BF0] hover:underline">Zapier connection guide</Link> covers this exact handoff in more detail: a failure in the GoHighLevel step is a GoHighLevel problem, a failure in what happens after the handoff is a problem on the other platform, and treating them as the same diagnostic space is how people burn hours debugging the wrong system.
            </p>

            {/* Section: Why Email SMS Execute Without Delivery */}
            <h2 id="why-email-sms-execute-without-delivery" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why a GoHighLevel Workflow Email or SMS Action Can Execute Without Being Delivered
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The identical logic applies to messaging actions. A Send SMS step executing successfully inside the workflow confirms GoHighLevel attempted to send it it does not confirm the recipient received it. Unregistered or non-compliant A2P 10DLC numbers are a documented case where this exact gap shows up: the automation fires correctly inside the workflow builder, but the carrier blocks the message before it reaches the recipient, with no error visible in the workflow itself. If SMS actions are executing without errors but messages aren't arriving, check the sending number's A2P registration status before assuming the workflow logic is at fault our <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">A2P 10DLC guide</Link> covers what that failure looks like and how to confirm it. The same execution-versus-delivery gap applies to email sending domains, though that's outside this article's scope.
            </p>

            {/* Section: How Opportunity Pipeline Actions */}
            <h2 id="how-opportunity-pipeline-actions" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Workflow Opportunity and Pipeline Actions Can Execute but Miss the Expected Result
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A workflow action that creates or updates an opportunity can execute cleanly while the pipeline still doesn't reflect what you expected because the action targeted the wrong pipeline, the wrong stage, or because the contact already had an existing opportunity that the action updated instead of the new one you expected it to create. If the workflow has Allow Multiple Opportunity enabled, each opportunity tied to the contact runs its own separate execution, which changes what "the workflow" even means for that contact. This is a downstream-configuration question specific to opportunity actions, and it's out of scope for a full breakdown here treat it as one more instance of the same principle: the action executing and the resulting business state matching your expectation are two different things to verify separately.
            </p>

            {/* Section: Why Completed May Not Produce Outcome */}
            <h2 id="why-completed-may-not-produce-outcome" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why a GoHighLevel Workflow Marked "Completed" May Not Have Produced the Expected Outcome
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This deserves its own section because it's the most deceptive failure state. Completed means the workflow reached its last configured step for that contact. It does not mean every action along the way produced its intended real-world result.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Ask these four questions separately, in order, rather than treating "completed" as a single pass/fail signal:
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Did the workflow execute</strong> did every step run in sequence?</li>
              <li><strong className="text-[#1A2236]">Did each action execute</strong> did it complete without an internal error?</li>
              <li><strong className="text-[#1A2236]">Did the external system accept and process it</strong> for anything that hands off outside GoHighLevel?</li>
              <li><strong className="text-[#1A2236]">Did the intended business outcome actually occur</strong> did the lead get the email, did the opportunity land in the right pipeline, did the team member get notified?</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A "completed" status only confirms the first one. The other three need to be checked against the actual outside-world result, not inferred from the workflow's own status label.
            </p>

            {/* Section: How to Troubleshoot Step by Step */}
            <h2 id="how-to-troubleshoot-step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Troubleshoot a GoHighLevel Workflow Step by Step After It Has Already Triggered
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Reproduce the issue</strong> with a specific, identifiable contact rather than a vague "it's not working."</li>
              <li><strong className="text-[#1A2236]">Confirm enrollment</strong> happened for that contact.</li>
              <li><strong className="text-[#1A2236]">Open the execution path</strong> in Execution Logs for that contact.</li>
              <li><strong className="text-[#1A2236]">Find the last successful step</strong> the anchor point for everything else.</li>
              <li><strong className="text-[#1A2236]">Identify the first unexpected step</strong> immediately after it.</li>
              <li><strong className="text-[#1A2236]">Classify what happened there:</strong> waiting, skipped, branched, failed, or executed-but-wrong-external-result.</li>
              <li><strong className="text-[#1A2236]">Inspect only the relevant configuration</strong> for that classification the condition, the field, the integration connection, the sending number.</li>
              <li><strong className="text-[#1A2236]">Make the smallest change that addresses the actual cause.</strong> Don't adjust three settings at once; you'll lose the ability to tell which one fixed it.</li>
              <li><strong className="text-[#1A2236]">Retest under controlled, reproducible conditions</strong> same trigger event, same test contact profile, so the result is comparable.</li>
              <li><strong className="text-[#1A2236]">Verify the actual business outcome,</strong> not just the workflow's status label.</li>
            </ol>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mistakes When Debugging a GoHighLevel Workflow That Triggered but Didn't Finish
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Reopening the trigger after confirming enrollment.</strong> If the contact is in, the trigger already worked changing it now only risks breaking something that wasn't broken.</li>
              <li><strong className="text-[#1A2236]">Rebuilding the whole workflow instead of isolating the divergence point.</strong> This destroys the diagnostic signal the last-successful-step method depends on.</li>
              <li><strong className="text-[#1A2236]">Assuming "in progress" means stuck.</strong> Check the actual elapsed time against configured wait durations before concluding anything's wrong.</li>
              <li><strong className="text-[#1A2236]">Treating "completed" as proof the business outcome happened.</strong> It only proves the workflow reached its last step.</li>
              <li><strong className="text-[#1A2236]">Changing multiple settings in one pass.</strong> If two things change and the result improves, you don't know which one mattered or whether it will hold up under different conditions.</li>
              <li><strong className="text-[#1A2236]">Not reproducing the exact same conditions on retest.</strong> A different trigger event, a different contact state, or leftover test data can make a real fix look like it didn't work, or a non-fix look like it did.</li>
              <li><strong className="text-[#1A2236]">Blaming GoHighLevel for an external system's failure,</strong> and the reverse blaming the integration when the GoHighLevel action never actually ran. Both directions require checking evidence on both sides of the handoff, not assuming based on which platform is more familiar.</li>
            </ul>

            {/* Section: When Problem Not About Execution */}
            <h2 id="when-problem-not-about-execution" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When a GoHighLevel Workflow Problem Isn't About Execution After Triggering
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The workflow never enrolled the contact at all</strong> → <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix</Link></li>
              <li><strong className="text-[#1A2236]">The workflow worked before, but this same contact won't go through it again</strong> → <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained</Link></li>
              <li><strong className="text-[#1A2236]">You need the detailed mechanics of the Execution Logs and Enrollment History interface itself</strong> → <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link></li>
              <li><strong className="text-[#1A2236]">The problem is specific to a form trigger's own behavior, an appointment trigger's status handling, or opportunity/pipeline trigger logic</strong> those deserve dedicated treatment beyond what this article can cover; use the general method above in the meantime.</li>
            </ul>

            {/* Section: Core Diagnostic Principle */}
            <h2 id="core-diagnostic-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Core Diagnostic Principle for a GoHighLevel Workflow That Triggers but Doesn't Complete
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Enrollment tells you the trigger worked. Everything after that is a separate question with its own evidence: the last successful step, the first point of divergence, and whether that divergence was waiting, branching, skipping, failing, or executing without producing the result you wanted outside GoHighLevel. Work that boundary specifically, verify the actual business outcome rather than the status label, and you'll find the fix faster than auditing the whole workflow ever will.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About a GoHighLevel Workflow That Triggers but Doesn't Complete
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
              Still stuck on a workflow that triggered but didn't complete?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free troubleshooting session</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Enrollment History & Execution Logs Guide →</Link>
                <Link href="/blog/connect-zapier-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Connect Zapier to GoHighLevel →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Fixing a Workflow That Triggered but Didn't Complete?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We diagnose and fix GoHighLevel workflow execution issues for agencies and businesses.
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