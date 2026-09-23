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
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelAppointmentWorkflowNotTriggeringClient() {
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
        'why-appointment-event-and-enrollment-different',
        'which-appointment-trigger',
        'how-calendar-affects',
        'how-appointment-status-affects',
        'how-appointment-filters-block',
        'how-rescheduling-affects',
        'how-cancellations-affect',
        'how-no-show-affects',
        'how-existing-contacts-and-reentry',
        'how-to-test-with-real-booking',
        'how-to-confirm-enrollment',
        'common-reasons',
        'common-mistakes',
        'when-problem-not-about-appointment-trigger',
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
      q: "Why isn't my GoHighLevel appointment workflow triggering?",
      a: "Most often because the workflow's trigger isn't configured for the specific event that occurred wrong trigger type, wrong calendar, wrong status, or a Modified By filter that excludes how the appointment was actually created or changed."
    },
    {
      q: "Why doesn't a booked appointment trigger my GoHighLevel workflow?",
      a: "Confirm which trigger the workflow uses (Appointment Status, the legacy Customer Booked Appointment, or Service Booking for Services v2), that it's Published, and that its calendar and status filters match the actual booking."
    },
    {
      q: "How do I trigger a workflow when an appointment is booked in GoHighLevel?",
      a: "Add an Appointment Status trigger, set its status filter to the booking event you want (typically New or Unconfirmed), scope it to the correct calendar, and publish the workflow."
    },
    {
      q: "Why does my appointment workflow work on one calendar but not another?",
      a: "The trigger's calendar (or calendar group) filter is scoped to specific calendars a booking on an unlisted calendar won't qualify even if every other condition matches."
    },
    {
      q: "Why doesn't my GoHighLevel workflow trigger after an appointment is rescheduled?",
      a: "Rescheduling updates the appointment's status rather than creating a new booking event, so re-entry requires Allow Re-entry to be enabled and the rescheduled appointment to still match the trigger's filters it isn't covered by the same always-allow exception new bookings get."
    },
    {
      q: "Why doesn't a cancelled appointment trigger my workflow?",
      a: "The trigger has to be explicitly configured to catch the Cancelled status a trigger built for New or Confirmed bookings won't also fire on cancellation."
    },
    {
      q: "Can the same contact trigger a GoHighLevel appointment workflow more than once?",
      a: "Yes for new bookings, which re-enter regardless of Allow Re-entry. For status-change events on an existing appointment, it depends on Allow Re-entry being enabled and the contact not currently being active in that workflow."
    },
    {
      q: "How do I know whether my appointment actually enrolled the contact in the workflow?",
      a: "Check Enrollment History for that contact. A recorded enrollment confirms the trigger worked; its absence means the problem is upstream, in trigger selection, calendar, status, or filters."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'what-does-it-mean', title: 'What Does "Appointment Workflow Not Triggering" Actually Mean?' },
    { id: 'why-appointment-event-and-enrollment-different', title: 'Why an Appointment Event and Workflow Enrollment Are Two Different Things' },
    { id: 'which-appointment-trigger', title: 'Which Appointment Trigger Is Your Workflow Actually Using?' },
    { id: 'how-calendar-affects', title: 'How the Selected Calendar Affects Appointment Workflow Enrollment' },
    { id: 'how-appointment-status-affects', title: 'How Appointment Status Affects Workflow Triggering' },
    { id: 'how-appointment-filters-block', title: 'How Appointment Trigger Filters Can Block a Qualifying Appointment' },
    { id: 'how-rescheduling-affects', title: 'How Appointment Rescheduling Affects Workflow Triggers' },
    { id: 'how-cancellations-affect', title: 'How Appointment Cancellations Affect Workflow Triggers' },
    { id: 'how-no-show-affects', title: 'How No-Show Status Affects Workflow Triggers' },
    { id: 'how-existing-contacts-and-reentry', title: 'How Existing Contacts and Workflow Re-Entry Affect Repeated Appointment Events' },
    { id: 'how-to-test-with-real-booking', title: 'How to Test a Workflow Trigger With a Real Booking' },
    { id: 'how-to-confirm-enrollment', title: 'How to Confirm Whether an Appointment Actually Enrolled the Contact' },
    { id: 'common-reasons', title: 'Common Reasons an Appointment Does Not Enroll a Contact' },
    { id: 'common-mistakes', title: 'Common Mistakes When Diagnosing' },
    { id: 'when-problem-not-about-appointment-trigger', title: 'When a Workflow Problem Isn\'t Actually About the Appointment Trigger' },
    { id: 'core-diagnostic-principle', title: 'The Core Diagnostic Principle' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const commonReasonsData = [
    { symptom: 'Appointment booked, no enrollment at all', likelyCause: 'Workflow uses the wrong trigger, or is still in Draft', whatToCheck: 'Which trigger is configured, and Publish status' },
    { symptom: 'Works on one calendar, not another', likelyCause: 'Calendar filter scoped to a different calendar', whatToCheck: 'The trigger\'s calendar/calendar-group filter vs. where the booking was made' },
    { symptom: 'New booking works, reschedule doesn\'t', likelyCause: 'Rescheduling requires Allow Re-entry; new bookings don\'t', whatToCheck: 'Allow Re-entry setting and the trigger\'s status filter' },
    { symptom: 'Cancellation doesn\'t trigger the cancellation workflow', likelyCause: 'Trigger isn\'t configured to catch the Cancelled status specifically', whatToCheck: 'The trigger\'s appointment-status filter' },
    { symptom: 'Staff-booked appointments don\'t trigger, customer-booked ones do', likelyCause: 'Modified By filter set to Customer only', whatToCheck: 'The trigger\'s Modified By filter' },
    { symptom: 'Multi-service checkout fires once when workflow built for individual appointments', likelyCause: 'Service Booking trigger used instead of Appointment Status, or vice versa', whatToCheck: 'Which trigger the workflow is actually built on' },
    { symptom: 'Existing contact\'s new appointment doesn\'t re-enroll', likelyCause: 'Contact still active in the workflow from a prior run', whatToCheck: 'Current enrollment state, separate from the always-allow new-booking exception' },
    { symptom: 'Enrollment confirmed, but expected action didn\'t happen', likelyCause: 'No longer a trigger problem', whatToCheck: 'Execution evidence for that specific run' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help fixing your appointment trigger issue.</p>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Appointment Workflow Not Triggering? How to Troubleshoot</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Appointment Triggers</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Appointment Workflow Not Triggering?<br />
            <span className="text-[#F8D000]">How to Troubleshoot Appointment Triggers</span>
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
            This article is for one specific situation: an appointment was booked, confirmed, rescheduled, cancelled, or marked no-show in GoHighLevel, and the workflow that should have responded to that event never enrolled the contact. If your workflow doesn't trigger for anything, appointments included, that's a broader problem than this article covers see <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">initial trigger and enrollment troubleshooting</Link> instead.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">An appointment existing in GoHighLevel doesn't automatically mean every appointment-related workflow should fire.</strong> The workflow's trigger has to be listening for the specific event that actually happened the right trigger, the right calendar, the right status and the contact's current state has to permit enrollment. Confirming the appointment happened only rules out the first link in that chain.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Appointment Trigger Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#which-appointment-trigger"
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
              <div className="text-sm font-bold text-white mb-2">Need Appointment Trigger Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We diagnose and fix appointment trigger issues for agencies and businesses.</p>
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
              What Does "GoHighLevel Appointment Workflow Not Triggering" Actually Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This phrase covers several distinct points of failure, and they don't share a fix. An appointment event that doesn't produce the expected workflow enrollment could mean:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The appointment wasn't actually created the way you think wrong calendar, wrong contact, or it never completed.</li>
              <li>The workflow is listening for a different appointment trigger than the one this event actually fires.</li>
              <li>The event happened, but its status doesn't match what the trigger is configured to catch.</li>
              <li>The calendar, tag, or other trigger filter excludes this specific appointment.</li>
              <li>The contact's existing state already enrolled, re-entry disabled blocks a new enrollment.</li>
              <li>The workflow actually enrolled the contact, and the real problem is what happened afterward.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Confirming which of these is actually happening is most of the diagnostic work. Assuming it's always "the trigger is broken" is how a five-minute filter check turns into rebuilding a workflow that was never the problem.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-appointment-workflow-not-triggering.png"
                  alt="GoHighLevel Appointment Workflow Not Triggering: Appointment event vs workflow enrollment chain with trigger, calendar, and status checks"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Appointment Workflow Not Triggering: Appointment event vs workflow enrollment chain with trigger, calendar, and status checks</span>
              </div>
            </div>

            {/* Section: Why Appointment Event and Enrollment Different */}
            <h2 id="why-appointment-event-and-enrollment-different" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why a GoHighLevel Appointment Event and Workflow Enrollment Are Two Different Things
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An appointment being created, confirmed, rescheduled, or cancelled is one event. A contact enrolling in a workflow because of that event is a separate, dependent event not a guaranteed consequence of it. The chain runs: appointment event occurs → the relevant calendar and contact context is established → a workflow's appointment-based trigger evaluates the event → the trigger's filters check whether this specific event qualifies → enrollment occurs → execution begins.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The appointment can be created correctly, on the right calendar, for the right contact, and still produce no enrollment if the workflow's trigger isn't the one that actually listens for that kind of event, or if a filter excludes it. Appointment creation is necessary for enrollment. It isn't sufficient.
            </p>

            {/* Section: Which Appointment Trigger */}
            <h2 id="which-appointment-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which GoHighLevel Appointment Trigger Is Your Workflow Actually Using?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the step most troubleshooting skips, and it's often the actual answer. GoHighLevel currently has more than one appointment-related trigger, and they don't all behave the same way.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Appointment Status</strong> is the current primary trigger for calendar appointments it fires when an appointment is scheduled or its status changes, and it's the trigger HighLevel is actively directing workflow builders toward. <strong className="text-[#1A2236]">Customer Booked Appointment</strong> is an older, separate trigger that HighLevel has been deprecating; its function has been folded into Appointment Status's own <strong className="text-[#1A2236]">Modified By</strong> filter (Customer, User, or API), so a workflow still built on the legacy trigger may be running on a component that's being phased out. If you're troubleshooting a workflow built some time ago, check which of the two it's actually using before assuming a filter problem.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There's a third, easy-to-miss option: <strong className="text-[#1A2236]">Service Booking (Services v2)</strong>, which only appears if Services v2 is enabled on the sub-account. It works at the booking level rather than the individual-appointment level if a customer books three services in one checkout, Service Booking fires once for the whole booking, while Appointment Status would evaluate each appointment separately. A workflow built against the wrong one of these two will either fire multiple times when you expected once, or never fire at all for bookings made through the other system.
            </p>

            {/* Section: How Calendar Affects */}
            <h2 id="how-calendar-affects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How the Selected GoHighLevel Calendar Affects Appointment Workflow Enrollment
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Appointment triggers typically support a calendar-level filter scoped to one specific calendar or a calendar group so the workflow only responds to bookings made through the calendars you actually intend. If a business runs multiple calendars (per location, per service, per team member) and the trigger is scoped to one of them, an appointment booked on a different calendar won't qualify, even though it's a completely valid appointment in every other respect. This is a distinct failure from a status mismatch: the event type and status can be exactly right, and the appointment can still fail to qualify purely because of which calendar it came through.
            </p>

            {/* Section: How Appointment Status Affects */}
            <h2 id="how-appointment-status-affects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Appointment Status Affects Workflow Triggering
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Appointment status is not a single on/off state GoHighLevel tracks a set of distinct statuses (typically New/Unconfirmed, Confirmed, Showed, No Show, Cancelled, and Invalid), and a trigger configured to catch one status will not fire for a different one. A workflow built to respond to a <em>new booking</em> will not automatically also respond when that same appointment is later <em>confirmed</em>, <em>cancelled</em>, or <em>marked as a no-show</em> those are different status values, and unless the trigger is explicitly configured to catch more than one of them, only the configured status qualifies.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is where "the appointment happened" stops being enough information. The specific status the workflow is listening for has to match the specific status the event actually produced, and it's worth checking that match explicitly rather than assuming any appointment-related activity should be enough.
            </p>

            {/* Section: How Appointment Filters Block */}
            <h2 id="how-appointment-filters-block" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Appointment Trigger Filters Can Block a Qualifying Appointment
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Beyond calendar and status, the Appointment Status trigger carries additional filters that narrow qualification further. <strong className="text-[#1A2236]">Event Type</strong> distinguishes Normal appointments from Recurring ones a workflow filtered to Normal won't fire for bookings made through a calendar with recurring appointments enabled, and recurring appointments don't qualify through the legacy Customer Booked Appointment trigger at all. <strong className="text-[#1A2236]">Modified By</strong> distinguishes who made the change Customer (self-booked through a widget), User (booked or changed by staff), or API so a workflow filtered to Customer won't fire when a team member manually creates or updates the appointment, even though an appointment clearly exists.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Any additional filters a required tag, a specific assigned user stack on top of these, and the event has to satisfy every configured filter simultaneously, not just the obvious ones like calendar and status.
            </p>

            {/* Section: How Rescheduling Affects */}
            <h2 id="how-rescheduling-affects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Appointment Rescheduling Affects Workflow Triggers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Rescheduling updates the appointment's status rather than creating an entirely separate event, which has a direct consequence for triggering: a workflow with a trigger set to fire on a Rescheduled status will only re-enter an existing contact if <strong className="text-[#1A2236]">Allow Re-entry is enabled</strong> and the rescheduled appointment still matches every other configured filter calendar, event type, and any others. Rescheduling is not automatically treated the same as a brand-new booking. If the workflow behaves correctly for first-time bookings but silently does nothing when an existing contact reschedules, check Allow Re-entry and the trigger's status filter before assuming anything about the trigger itself is broken.
            </p>

            {/* Section: How Cancellations Affect */}
            <h2 id="how-cancellations-affect" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Appointment Cancellations Affect Workflow Triggers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A cancellation is its own status value, and a workflow needs a trigger explicitly configured to catch it a trigger built around New or Confirmed status will not also fire when an appointment is cancelled. Cancelling an appointment also has a separate effect worth knowing about: if the contact is currently mid-run in a <em>different</em> workflow tied to that same appointment (a reminder sequence, for example), cancelling pulls that contact out of the active run entirely. That's a distinct behavior from triggering a new workflow one is an exit from an existing run, the other is qualification for a new one and conflating them is a common source of confusion when a cancellation workflow doesn't seem to fire.
            </p>

            {/* Section: How No-Show Affects */}
            <h2 id="how-no-show-affects" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How No-Show Status Affects GoHighLevel Workflow Triggers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              No-show is tracked as its own appointment status, separate from Cancelled, and typically has to be set explicitly either manually by a team member or through an automated no-show detection step before a workflow trigger watching for that status can fire. If the appointment's actual status never transitions to No Show (it simply sits at Confirmed with no automatic change), a workflow built to catch the No Show status has nothing to respond to yet, regardless of whether the customer genuinely missed the appointment. Confirm the status itself changed before troubleshooting the trigger.
            </p>

            {/* Section: How Existing Contacts and Re-Entry */}
            <h2 id="how-existing-contacts-and-reentry" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Existing Contacts and Workflow Re-Entry Affect Repeated GoHighLevel Appointment Events
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              New appointment bookings carry a documented exception: a fresh booking re-enters the contact <strong className="text-[#1A2236]">regardless of the Allow Re-entry setting</strong>, and a contact can have more than one active run at once from separate appointments. That exception does not extend to status-change events like reschedules or cancellations on an existing appointment those still require Allow Re-entry to be enabled to produce a second enrollment. This means "the same contact booked again and nothing happened" and "the same contact's existing appointment changed status and nothing happened" are genuinely different diagnoses, even though both involve a returning contact. When repeat bookings specifically are involved, the deeper mechanics of re-entry and when it should or shouldn't be enabled are covered in <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained</Link>.
            </p>

            {/* Section: How to Test With Real Booking */}
            <h2 id="how-to-test-with-real-booking" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test a GoHighLevel Appointment Workflow Trigger With a Real Booking
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Confirm the workflow is Published.</strong></li>
              <li><strong className="text-[#1A2236]">Confirm which appointment trigger it uses</strong> Appointment Status, the legacy Customer Booked Appointment, or Service Booking (Services v2).</li>
              <li><strong className="text-[#1A2236]">Confirm the calendar (or calendar group) filter</strong> matches where the test booking will actually be made.</li>
              <li><strong className="text-[#1A2236]">Confirm the status, Event Type, and Modified By filters</strong> match the exact scenario you're testing don't test a Customer-booked scenario if the filter is set to User.</li>
              <li><strong className="text-[#1A2236]">Use a contact you can control</strong>, ideally one without prior history in this workflow.</li>
              <li><strong className="text-[#1A2236]">Create the appointment through the actual booking path</strong> you're troubleshooting the live widget, not just an internal manual entry, if that's what real customers use.</li>
              <li><strong className="text-[#1A2236]">Verify the appointment event and its resulting status</strong> on the contact record.</li>
              <li><strong className="text-[#1A2236]">Check whether the contact enrolled</strong> in the workflow.</li>
              <li><strong className="text-[#1A2236]">If enrolled</strong>, stop diagnosing the trigger confirm what happened during execution instead.</li>
              <li><strong className="text-[#1A2236]">If not enrolled</strong>, work back through calendar, status, and filter matches before assuming anything is broken.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A successful booking proves the booking process worked nothing about which trigger caught it or whether its filters matched. Test each status and event type independently when troubleshooting a workflow meant to respond to more than one of them; confirming "new booking" works says nothing about whether "rescheduled" or "cancelled" will.
            </p>

            {/* Section: How to Confirm Enrollment */}
            <h2 id="how-to-confirm-enrollment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Confirm Whether a GoHighLevel Appointment Actually Enrolled the Contact
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the boundary the whole article works toward. Open Enrollment History for the contact whose appointment event you're troubleshooting. No enrollment record means the problem is still upstream trigger selection, calendar, status, or filters. An enrollment record means the appointment trigger did its job, and continuing to adjust calendar or status filters won't change anything, because they already worked. The detailed method for reading that evidence is in <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link>; if enrollment is confirmed and a later email, SMS, task, or webhook still didn't fire, that's a separate diagnosis covered in <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working</Link>.
            </p>

            {/* Section: Common Reasons */}
            <h2 id="common-reasons" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Reasons a GoHighLevel Appointment Does Not Enroll a Contact in a Workflow
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

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mistakes When Diagnosing a GoHighLevel Appointment Workflow That Isn't Triggering
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Assuming any appointment activity should satisfy any appointment-related trigger.</strong> Status, event type, and calendar all have to match specifically.</li>
              <li><strong className="text-[#1A2236]">Not checking which trigger the workflow actually uses.</strong> A workflow built on the deprecating Customer Booked Appointment trigger behaves differently from one built on Appointment Status.</li>
              <li><strong className="text-[#1A2236]">Testing only the "new booking" scenario for a workflow meant to also catch reschedules or cancellations.</strong> Each status needs its own independent test.</li>
              <li><strong className="text-[#1A2236]">Overlooking the Modified By filter</strong> and testing customer-facing behavior with a staff-created appointment, or the reverse.</li>
              <li><strong className="text-[#1A2236]">Treating every repeat appointment as a re-entry problem,</strong> when new bookings re-enter regardless of the setting and only status-change events actually depend on it.</li>
              <li><strong className="text-[#1A2236]">Changing multiple filters simultaneously while troubleshooting,</strong> which erases the ability to tell which condition was actually blocking enrollment.</li>
              <li><strong className="text-[#1A2236]">Concluding the workflow enrolled when it only confirms the appointment was created</strong> those are different pieces of evidence, and only Enrollment History confirms the second one.</li>
            </ul>

            {/* Section: When Problem Not About Appointment Trigger */}
            <h2 id="when-problem-not-about-appointment-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When a GoHighLevel Workflow Problem Isn't Actually About the Appointment Trigger
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The workflow doesn't trigger for anything, appointments included</strong> → <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix</Link></li>
              <li><strong className="text-[#1A2236]">The workflow worked before, but a returning contact's new event won't re-enroll them</strong> → <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained</Link></li>
              <li><strong className="text-[#1A2236]">Enrollment History confirms the contact entered, and you need to inspect the run itself</strong> → <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link></li>
              <li><strong className="text-[#1A2236]">The contact enrolled, but a later step didn't behave as expected</strong> → <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working</Link></li>
              <li><strong className="text-[#1A2236]">The problem is actually a form submission, not an appointment</strong> → <Link href="/blog/gohighlevel-form-submitted-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Form Submitted Workflow Not Triggering</Link></li>
            </ul>

            {/* Section: Core Diagnostic Principle */}
            <h2 id="core-diagnostic-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Core Diagnostic Principle for a GoHighLevel Appointment Workflow That Isn't Enrolling Contacts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An appointment event and a workflow enrollment are related but separate outcomes, connected by which trigger the workflow actually uses, which calendar and status it's scoped to, and the contact's current state. Confirm the event happened, confirm the workflow is listening for that exact trigger, calendar, and status, and check Enrollment History as the evidence for whether it actually worked. Once enrollment is confirmed, the appointment trigger has done everything it's responsible for anything left to diagnose belongs to execution, not the trigger.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Appointment Workflows That Don't Trigger
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
              Still stuck on an appointment trigger issue?{' '}
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
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Fixing an Appointment Trigger Issue?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We diagnose and fix GoHighLevel appointment trigger issues for agencies and businesses.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience troubleshooting appointment trigger issues across hundreds of GHL accounts. All troubleshooting details verified against official documentation as of September 2026.
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