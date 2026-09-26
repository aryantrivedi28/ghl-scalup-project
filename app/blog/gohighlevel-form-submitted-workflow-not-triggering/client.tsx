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
  FileInput,
  FileOutput,
  ClipboardList,
  Send,
  Inbox,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelFormSubmittedWorkflowNotTriggeringClient() {
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
        'why-form-submission-and-enrollment-different',
        'how-form-selected-affects-enrollment',
        'how-form-filters-block-valid-submission',
        'how-to-confirm-workflow-active',
        'how-to-verify-submission-occurred',
        'how-existing-contacts-behave-differently',
        'how-form-fields-prevent-qualification',
        'how-to-test-with-real-submission',
        'how-to-confirm-enrollment',
        'common-reasons',
        'common-mistakes',
        'when-problem-not-about-form-trigger',
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
      q: "Why isn't my GoHighLevel workflow triggering after a form submission?",
      a: "Most often because the trigger's Form filter points at a different form than the one submitted, the workflow is still in Draft, or additional trigger filters aren't satisfied by that specific submission's data."
    },
    {
      q: "How do I trigger a GoHighLevel workflow when someone submits a form?",
      a: "Add a Form Submitted trigger, set its Form filter to the exact form you want to listen for, add any additional qualifying filters, and publish the workflow a form with no Form filter selected will trigger the workflow from any form submission in the sub-account."
    },
    {
      q: "Why does my GoHighLevel form submit successfully but the workflow doesn't start?",
      a: "A successful submission confirms the form itself worked. It doesn't confirm the trigger is listening for that exact form, that its filters are satisfied, or that the contact's current state allows enrollment those are separate, later steps in the chain."
    },
    {
      q: "Why is my Form Submitted trigger not working in GoHighLevel?",
      a: "Check, in order: whether the workflow is Published, whether the correct form is selected in the trigger's Form filter, whether the Form Type filter matches how the form is deployed, and whether any additional filters are satisfied by the submitted data."
    },
    {
      q: "Can an existing GoHighLevel contact trigger a workflow after submitting a form again?",
      a: "Only if the workflow's Allow Re-entry setting permits it and the contact isn't currently active in that same workflow this is governed by re-entry behavior, not the Form Submitted trigger itself."
    },
    {
      q: "How do I test a GoHighLevel Form Submitted workflow?",
      a: "Confirm the workflow is Published and the correct form is selected, submit the actual live form with a contact you control, then check Enrollment History to confirm whether the contact enrolled a submission alone doesn't confirm enrollment."
    },
    {
      q: "How do I know whether my form submission enrolled the contact in a workflow?",
      a: "Open the workflow's Enrollment History for that contact. A recorded enrollment confirms the trigger worked; its absence means the problem is still upstream, in form selection, trigger filters, or contact state."
    },
    {
      q: "Why does the workflow work with one form but not another?",
      a: "Almost always because the trigger's Form filter is set to one specific form, and the second form was never selected each Form Submitted trigger listens for the form(s) explicitly configured in its filter, not \"forms\" as a category."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'what-does-it-mean', title: 'What Does "Form Submitted Workflow Not Triggering" Actually Mean?' },
    { id: 'why-form-submission-and-enrollment-different', title: 'Why a Form Submission and Workflow Enrollment Are Two Different Events' },
    { id: 'how-form-selected-affects-enrollment', title: 'How the Form Selected in a Trigger Affects Enrollment' },
    { id: 'how-form-filters-block-valid-submission', title: 'How Form Submitted Trigger Filters Can Block a Valid Submission' },
    { id: 'how-to-confirm-workflow-active', title: 'How to Confirm a Workflow Is Active for a Form Submitted Trigger' },
    { id: 'how-to-verify-submission-occurred', title: 'How to Verify a Form Submission Actually Occurred' },
    { id: 'how-existing-contacts-behave-differently', title: 'How Existing Contacts Can Behave Differently From New Contacts' },
    { id: 'how-form-fields-prevent-qualification', title: 'How Form Fields and Contact Data Can Prevent Workflow Qualification' },
    { id: 'how-to-test-with-real-submission', title: 'How to Test With a Real Submission' },
    { id: 'how-to-confirm-enrollment', title: 'How to Confirm Whether a Submission Actually Enrolled the Contact' },
    { id: 'common-reasons', title: 'Common Reasons a Form Submission Does Not Enroll a Contact' },
    { id: 'common-mistakes', title: 'Common Mistakes When Diagnosing' },
    { id: 'when-problem-not-about-form-trigger', title: 'When a Workflow Problem Isn\'t Actually About the Form Submitted Trigger' },
    { id: 'core-diagnostic-principle', title: 'The Core Diagnostic Principle' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const commonReasonsData = [
    { symptom: 'Form submits, workflow never enrolls anyone', likelyCause: 'Workflow still in Draft', whatToCheck: 'Publish status' },
    { symptom: 'Works on one form, not a similarly named one', likelyCause: 'Wrong form selected in the trigger\'s Form filter', whatToCheck: 'Which exact form is embedded on the live page vs. selected in the trigger' },
    { symptom: 'Submission happened on a multi-step survey', likelyCause: 'Form Submitted trigger used instead of Survey Submitted', whatToCheck: 'Whether the live element is a form or a survey' },
    { symptom: 'Submission recorded, but specific field-based filter fails', likelyCause: 'Required data missing, misformatted, or mapped to the wrong field', whatToCheck: 'The actual submitted value against the exact filter condition' },
    { symptom: 'New leads enroll, returning contacts don\'t', likelyCause: 'Re-entry disabled or contact still active in the workflow', whatToCheck: 'Allow Re-entry setting and the contact\'s current enrollment state' },
    { symptom: 'No submission record exists at all', likelyCause: 'Submission never completed (validation error, wrong page, preview vs. live)', whatToCheck: 'The form\'s own submission records for that contact' },
    { symptom: 'Enrollment confirmed, but the expected email/action never happened', likelyCause: 'This is no longer a trigger problem', whatToCheck: 'Execution evidence for that specific run' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Form Submitted Workflow Not Triggering? Causes and Fixes</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Form Triggers</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Form Submitted Workflow Not Triggering?<br />
            <span className="text-[#F8D000]">Causes and Fixes</span>
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
            This article is for one specific situation: someone submitted a GoHighLevel form, the submission clearly happened, but the workflow you built to respond to it never started. If your workflow doesn't trigger for anything not just forms the cause is broader than this article covers; see <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">initial trigger and enrollment troubleshooting</Link> instead.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">A form submitting successfully and a contact enrolling in a workflow are two separate events connected by several conditions that all have to hold</strong> the workflow has to be listening for <em>that specific form</em>, the trigger's filters have to qualify the submission, and the contact's current state has to allow enrollment. A clean submission proves the form worked. It doesn't prove any of the rest.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Form Trigger Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-confirm-enrollment"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Confirm Enrollment
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
              <div className="text-sm font-bold text-white mb-2">Need Form Trigger Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We diagnose and fix form trigger issues for agencies and businesses.</p>
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
              What Does "GoHighLevel Form Submitted Workflow Not Triggering" Actually Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This phrase covers several distinct failure points, and confusing them is the main reason people spend hours fixing the wrong thing. A form submission that doesn't produce the expected workflow could mean:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The submission itself didn't actually go through, despite appearing to.</li>
              <li>The workflow's Form Submitted trigger is pointed at a different form than the one that was submitted.</li>
              <li>The workflow exists and is correctly configured, but it's still in Draft rather than Published.</li>
              <li>The submission happened and matched the right form, but additional trigger filters excluded it.</li>
              <li>The contact's existing state already enrolled, already completed, re-entry disabled prevented a new enrollment.</li>
              <li>The workflow actually did enroll the contact, and the real problem is something that happened (or didn't) after that.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each of these needs a different check. Treating all of them as "the form trigger is broken" is what turns a two-minute fix into an afternoon of rebuilding a workflow that was never the problem.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-form-submitted-workflow-not-triggering.png"
                  alt="GoHighLevel Form Submitted Workflow Not Triggering: Form submission vs workflow enrollment chain"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Form Submitted Workflow Not Triggering: Form submission vs workflow enrollment chain</span>
              </div>
            </div>

            {/* Section: Why Form Submission and Enrollment Different */}
            <h2 id="why-form-submission-and-enrollment-different" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why a GoHighLevel Form Submission and a Workflow Enrollment Are Two Different Events
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A visitor submitting a form is one event. A contact enrolling in a workflow is a separate, later event that depends on the first one but isn't guaranteed by it. The chain runs: form displayed → form submitted → submission recorded → contact identified, created, or updated → the Form Submitted trigger evaluates → the trigger's filters check whether this specific submission qualifies → enrollment occurs → workflow execution begins.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The submission can succeed at every step up through "contact identified or updated" and still fail to produce an enrollment, because the trigger evaluation and filter-matching steps are where GoHighLevel decides whether <em>this workflow</em> cares about <em>this event</em>. A successful submission is necessary for enrollment it's not sufficient. Keeping that distinction explicit is the single most useful mental model for this entire troubleshooting process.
            </p>

            {/* Section: How Form Selected Affects Enrollment */}
            <h2 id="how-form-selected-affects-enrollment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How the Form Selected in a GoHighLevel Workflow Trigger Affects Enrollment
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The Form Submitted trigger doesn't listen for "a form was submitted" in general it listens for whichever specific form is set in its <strong className="text-[#1A2236]">Form</strong> filter, and if no form is selected at all, it fires for <em>every</em> form submission across the entire sub-account. Both extremes cause real problems: no form selected means unrelated submissions trigger the workflow, and the wrong form selected means the intended submission never does.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The wrong-form case is more common than it sounds, especially on accounts that have existed for a while. It's easy to end up with two or three forms carrying nearly identical names "Contact Form," "Website Contact Form," "Contact Form (2)" after a page redesign or a rebuilt funnel, and the trigger's dropdown doesn't visually distinguish which one is actually embedded on the live page. If the trigger is pointed at the retired version, submissions on the live version will never match, no matter how correctly the rest of the workflow is built.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There's a second, less obvious version of this problem: <strong className="text-[#1A2236]">forms and surveys fire different triggers entirely.</strong> A form fires the Form Submitted trigger; a survey a multi-step, page-branching submission experience fires a separate Survey Submitted trigger, even though both look like "someone filled something out and hit submit" from the outside. A workflow built with a Form Submitted trigger will never fire for a survey, regardless of filters, because it's listening for the wrong event type from the start.
            </p>

            {/* Section: How Form Filters Block Valid Submission */}
            <h2 id="how-form-filters-block-valid-submission" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Form Submitted Trigger Filters Can Block a Valid Submission
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Beyond the Form filter itself, the trigger's <strong className="text-[#1A2236]">Form Type</strong> filter narrows which category of submission qualifies typically Normal (standard embedded forms), Chat Widget Form, Survey, or All. If this filter is set to a category that doesn't match how the actual form was deployed, a submission that clearly happened on the correct form can still fail to qualify.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Any additional filters layered on top of the trigger a required tag, a pipeline condition, a specific field value apply on top of the form match, not instead of it. A submission has to satisfy every configured filter, not just the form selection, to result in enrollment. This is where "form submitted ≠ automatically qualified" becomes concrete: the submission can be exactly the one the workflow is listening for and still fail to qualify if one additional condition doesn't hold for that particular contact.
            </p>

            {/* Section: How to Confirm Workflow Active */}
            <h2 id="how-to-confirm-workflow-active" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Confirm a GoHighLevel Workflow Is Active for a Form Submitted Trigger
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before investigating anything about the form itself, confirm the workflow is actually live. A workflow sitting in Draft doesn't evaluate incoming events at all, regardless of how correctly its trigger and filters are configured this applies to Form Submitted the same as any other trigger type, and it's covered in full in <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">initial trigger troubleshooting</Link> if you need the broader status-check process. For this article's purposes, the check is simple: confirm Published status first, because every other check in this article assumes it, and skipping it is the single fastest way to misdiagnose a form-selection problem that doesn't actually exist.
            </p>

            {/* Section: How to Verify Submission Occurred */}
            <h2 id="how-to-verify-submission-occurred" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Verify a GoHighLevel Form Submission Actually Occurred
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Don't assume that because someone clicked Submit, GoHighLevel actually recorded the submission a validation error, a network interruption, or a misconfigured required field can all stop a submission before it's recorded, while still showing the visitor something that looks like success on a slow connection. Check the form's own submission records for that contact, confirm the specific fields that came through, and confirm this is the actual live form rather than a preview or an older duplicate. If there's no record of the submission at all, the investigation belongs on the form and the page it's embedded on not on the workflow trigger, which never had anything to evaluate.
            </p>

            {/* Section: How Existing Contacts Behave Differently */}
            <h2 id="how-existing-contacts-behave-differently" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Existing GoHighLevel Contacts Can Behave Differently From New Contacts on Form Submitted Workflows
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A brand-new contact submitting a form for the first time and an existing contact submitting the same form again are not guaranteed to produce the same result. If the contact already has a completed or active enrollment in that workflow, whether the new submission produces a second enrollment depends entirely on the workflow's re-entry configuration this is a genuinely different diagnostic path than trigger or filter troubleshooting, and it's covered in full in <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained</Link>. If a workflow behaves correctly for new leads but silently does nothing for returning contacts who resubmit, that's the article to open next rather than continuing to inspect the Form Submitted trigger itself.
            </p>

            {/* Section: How Form Fields Prevent Qualification */}
            <h2 id="how-form-fields-prevent-qualification" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Form Fields and Contact Data Can Prevent Workflow Qualification
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When a workflow's trigger filters reference specific submitted data a dropdown value, a required custom field, a particular answer the submission has to actually carry that data in the expected format to qualify. A field left blank because it wasn't marked required, a value that doesn't exactly match what a filter is checking for, or data landing in a different custom field than the one the filter references, can all produce a technically successful submission that still doesn't satisfy the trigger. This is a genuinely separate cause from form selection: the correct form fired the correct trigger, and the specific data-based condition is what didn't hold.
            </p>

            {/* Section: How to Test With Real Submission */}
            <h2 id="how-to-test-with-real-submission" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test a GoHighLevel Form Submitted Workflow With a Real Submission
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A meaningful test isn't just resubmitting the form and watching to see if anything happens it needs to isolate each condition in the chain so a negative result tells you something specific.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Confirm the workflow is Published</strong>, not Draft.</li>
              <li><strong className="text-[#1A2236]">Confirm the Form filter</strong> points at the exact form embedded on the live page, not a similarly named duplicate.</li>
              <li><strong className="text-[#1A2236]">Confirm the Form Type filter and any additional trigger filters</strong> match how the submission will actually be deployed and what data it will carry.</li>
              <li><strong className="text-[#1A2236]">Use a contact you can control</strong> ideally one with no prior history in this workflow, so re-entry state doesn't complicate the result.</li>
              <li><strong className="text-[#1A2236]">Submit the actual live form</strong>, not a builder preview.</li>
              <li><strong className="text-[#1A2236]">Verify the submission was recorded</strong>, with the fields you expected.</li>
              <li><strong className="text-[#1A2236]">Check whether the contact enrolled</strong> in the workflow.</li>
              <li><strong className="text-[#1A2236]">If enrolled</strong>, stop investigating the trigger move to <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">confirming what happened during execution</Link>.</li>
              <li><strong className="text-[#1A2236]">If not enrolled</strong>, the problem is somewhere upstream of enrollment work back through form selection, trigger filters, and contact state.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Be clear about what each result proves. A successful submission proves the submission process works nothing more. A confirmed enrollment proves the trigger and its filters are correctly configured for that specific test it doesn't prove every downstream action will behave as expected.
            </p>

            {/* Section: How to Confirm Enrollment */}
            <h2 id="how-to-confirm-enrollment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Confirm Whether a GoHighLevel Form Submission Actually Enrolled the Contact
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the boundary the entire article is built around. Open the workflow's Enrollment History for the contact who submitted the form. If there's no enrollment record, the problem is still upstream the form selection, the trigger's filters, or the contact's current state. If there is an enrollment record, the Form Submitted trigger did its job, and continuing to adjust form selection or trigger filters won't fix anything, because they already worked. From that point, any remaining problem belongs to workflow execution, not the trigger the full method for reading that evidence is in <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link>, and diagnosing what happened after enrollment is covered in <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working</Link>.
            </p>

            {/* Section: Common Reasons */}
            <h2 id="common-reasons" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Reasons a GoHighLevel Form Submission Does Not Enroll a Contact in a Workflow
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
              Common Mistakes When Diagnosing a GoHighLevel Form Submitted Workflow That Isn't Triggering
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Testing with the wrong form and assuming the workflow is broken.</strong> If a near-duplicate form exists, confirm which one is actually live before touching the workflow.</li>
              <li><strong className="text-[#1A2236]">Assuming a successful submission proves qualification.</strong> It proves the form worked nothing about the trigger's filters or the contact's eligibility.</li>
              <li><strong className="text-[#1A2236]">Only testing with an existing contact.</strong> Re-entry state can mask a perfectly functional trigger, making it look broken for a reason that has nothing to do with the trigger itself.</li>
              <li><strong className="text-[#1A2236]">Changing multiple trigger filters at once while troubleshooting.</strong> This destroys the ability to tell which specific condition was actually blocking enrollment.</li>
              <li><strong className="text-[#1A2236]">Assuming the workflow is inactive when the real issue is qualification,</strong> or the reverse chasing filter configuration when the workflow was simply never published.</li>
              <li><strong className="text-[#1A2236]">Treating a confirmed enrollment as proof the whole automation worked.</strong> The trigger's job ends at enrollment; whether the intended email, tag, or notification actually happened is a separate question.</li>
              <li><strong className="text-[#1A2236]">Rebuilding the trigger from scratch instead of isolating which single condition failed.</strong> A rebuild that happens to work doesn't tell you what was actually wrong, which makes the same failure likely to resurface on the next form.</li>
            </ul>

            {/* Section: When Problem Not About Form Trigger */}
            <h2 id="when-problem-not-about-form-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When a GoHighLevel Workflow Problem Isn't Actually About the Form Submitted Trigger
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The workflow doesn't trigger for anything, not just forms</strong> → <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix</Link></li>
              <li><strong className="text-[#1A2236]">The workflow worked before, but a returning contact who resubmits won't go through it again</strong> → <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained</Link></li>
              <li><strong className="text-[#1A2236]">Enrollment History confirms the contact entered, and you need to inspect exactly what happened during that run</strong> → <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs</Link></li>
              <li><strong className="text-[#1A2236]">The contact enrolled, but a later step an email, a webhook, an opportunity action didn't behave as expected</strong> → <Link href="/blog/gohighlevel-workflow-triggered-not-working" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Triggered but Not Working</Link></li>
            </ul>

            {/* Section: Core Diagnostic Principle */}
            <h2 id="core-diagnostic-principle" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Core Diagnostic Principle for a GoHighLevel Form Submitted Workflow That Isn't Enrolling Contacts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A form submitting successfully and a workflow enrolling a contact are related but separate events, connected by the trigger's form selection, its filters, and the contact's current state. Confirm the submission happened, confirm the trigger is listening for that exact form and submission type, confirm the filters match the submitted data, and check Enrollment History as the evidence that tells you whether it actually worked. Once enrollment is confirmed, the Form Submitted trigger has done its job anything left to diagnose belongs to execution, not the trigger.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Form Submitted Workflows That Don't Trigger
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
              Still stuck on a form trigger issue?{' '}
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
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Fixing a Form Trigger Issue?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We diagnose and fix GoHighLevel form trigger issues for agencies and businesses.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience troubleshooting form trigger issues across hundreds of GHL accounts. All troubleshooting details verified against official documentation as of September 2026.
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