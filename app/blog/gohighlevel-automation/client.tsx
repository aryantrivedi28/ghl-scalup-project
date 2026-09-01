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
  Lightbulb,
  UserCheck,
  UserX,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2,
  PieChart,
  GitMerge,
  TrendingDown,
  FileCheck,
  Search,
  Info
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelAutomationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'quick-answer',
        'what-is-gohighlevel-automation',
        'how-to-decide',
        'priority-matrix',
        'decision-tree',
        'speed-to-lead',
        'missed-call-recovery',
        'appointment-automation',
        'pipeline-follow-up',
        'nurture-reactivation',
        'agency-automation',
        'ai-automation',
        'measure-roi',
        'when-not-to-automate',
        'sms-compliance',
        'workflow-qa',
        'failure-modes',
        'business-model-priorities',
        'what-to-build-next',
        'faq',
        'final-recommendation'
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

      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
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
      q: 'What is GoHighLevel automation?',
      a: 'It is the use of HighLevel workflows and related automation capabilities to execute defined business processes when specified events occur.'
    },
    {
      q: 'What are the best GoHighLevel workflows?',
      a: 'There is no universal list. Common high priority candidates are speed to lead, missed call recovery, appointment protection, sales follow up, reactivation and agency onboarding.'
    },
    {
      q: 'What should I automate first in GoHighLevel?',
      a: 'Start with the most expensive recurring and measurable operational leak.'
    },
    {
      q: 'Can GoHighLevel automate lead follow up?',
      a: 'Yes. Supported lead events can trigger workflows containing conditions, actions, waits and branches.'
    },
    {
      q: 'Can GoHighLevel automate appointments?',
      a: 'Yes. Appointment related workflows can support confirmation, reminders, rescheduling and follow up.'
    },
    {
      q: 'Can agencies reuse GoHighLevel workflows?',
      a: 'Yes. Snapshots can capture reusable sub account configuration, including workflows. Each deployment still needs client specific review and QA.'
    },
    {
      q: 'Is AI necessary?',
      a: 'No. Deterministic workflows are often better for predictable processes. AI is useful where conversation or interpretation is genuinely required.'
    },
    {
      q: 'When should I not automate?',
      a: 'When the process is rare, undefined, sensitive, inconsistent or too expensive to maintain relative to its value.'
    },
    {
      q: 'How do I troubleshoot a broken workflow?',
      a: 'Check the trigger, filters, CRM data, reentry, branches, timing, integrations and live behavior with a fresh test contact.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer: Which Automations Should You Build First?' },
    { id: 'what-is-gohighlevel-automation', title: 'What Is GoHighLevel Automation?' },
    { id: 'how-to-decide', title: 'How to Decide What to Automate First' },
    { id: 'priority-matrix', title: 'GoHighLevel Automation Priority Matrix' },
    { id: 'decision-tree', title: 'Decision Tree: What Should I Automate First?' },
    { id: 'speed-to-lead', title: '1. Speed to Lead Automation' },
    { id: 'missed-call-recovery', title: '2. Missed Call Recovery' },
    { id: 'appointment-automation', title: '3. Appointment Confirmation, Reminders and No Show Recovery' },
    { id: 'pipeline-follow-up', title: '4. Pipeline and Sales Follow Up' },
    { id: 'nurture-reactivation', title: '5. Lead Nurture and Reactivation' },
    { id: 'agency-automation', title: '6. Client Onboarding and Agency Automation' },
    { id: 'ai-automation', title: 'AI Automation: When It Belongs in the Stack' },
    { id: 'measure-roi', title: 'How to Measure Automation ROI' },
    { id: 'when-not-to-automate', title: 'When Not to Automate' },
    { id: 'sms-compliance', title: 'SMS Automation and A2P Considerations' },
    { id: 'workflow-qa', title: 'Workflow QA Before Launch' },
    { id: 'failure-modes', title: 'Common Failure Modes' },
    { id: 'business-model-priorities', title: 'Business Model Priorities' },
    { id: 'what-to-build-next', title: 'What Should I Build Next?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'final-recommendation', title: 'Final Recommendation' }
  ];

  const priorityMatrixData = [
    { automation: 'Speed to lead', bestFor: 'Lead driven businesses', problem: 'Slow response', roiType: 'Revenue', priority: 'Very high when inbound value is high', difficulty: 'Moderate', kpi: 'Contact and booking rate' },
    { automation: 'Missed call recovery', bestFor: 'Phone driven businesses', problem: 'Unanswered intent', roiType: 'Revenue', priority: 'Very high when missed calls are common', difficulty: 'Low to moderate', kpi: 'Recovered conversations' },
    { automation: 'Appointment protection', bestFor: 'Appointment businesses', problem: 'No shows and cancellations', roiType: 'Revenue and capacity', priority: 'High', difficulty: 'Low', kpi: 'Show and reschedule rate' },
    { automation: 'Sales follow up', bestFor: 'Sales teams', problem: 'Stale opportunities', roiType: 'Revenue and capacity', priority: 'High', difficulty: 'Moderate', kpi: 'Stage conversion' },
    { automation: 'Reactivation', bestFor: 'Large databases', problem: 'Dormant contacts', roiType: 'Revenue', priority: 'High when data quality is good', difficulty: 'Moderate', kpi: 'Re engagement and recovered revenue' },
    { automation: 'Client onboarding', bestFor: 'Agencies and services', problem: 'Manual handoff', roiType: 'Capacity and retention', priority: 'High for repeatable delivery', difficulty: 'Moderate', kpi: 'Onboarding time' },
    { automation: 'AI qualification', bestFor: 'High inquiry volume', problem: 'Manual qualification', roiType: 'Capacity and speed', priority: 'Situational', difficulty: 'High', kpi: 'Qualified lead and handoff rate' },
    { automation: 'Snapshot deployment', bestFor: 'Agencies', problem: 'Repeated builds', roiType: 'Capacity', priority: 'Very high for repeatable offers', difficulty: 'Moderate', kpi: 'Deployment time and QA errors' }
  ];

  const decisionFactorData = [
    { factor: 'Impact', question: 'What happens when the problem is missed?', why: 'Prioritize revenue, capacity, customer experience or risk.' },
    { factor: 'Frequency', question: 'How often does it happen?', why: 'Repeated small losses can outweigh rare large ones.' },
    { factor: 'Opportunity size', question: 'What is one recovered event worth?', why: 'Higher value events justify more implementation effort.' },
    { factor: 'Difficulty', question: 'How complex is the logic?', why: 'Simple reliable systems are easier to maintain.' },
    { factor: 'Maintenance', question: 'How often will rules or integrations change?', why: 'Maintenance can erase automation value.' },
    { factor: 'Measurement', question: 'Can the outcome be tracked?', why: 'Without measurement, optimization is guesswork.' }
  ];

  const qaData = [
    { area: 'Trigger', test: 'Does the correct event start the workflow?' },
    { area: 'Filters', test: 'Can an unrelated contact enter?' },
    { area: 'CRM data', test: 'Are fields, ownership and opportunity records correct?' },
    { area: 'Timing', test: 'Do waits and scheduled actions happen as intended?' },
    { area: 'Branches', test: 'Does each condition route correctly?' },
    { area: 'Exit', test: 'Does automation stop when the state changes?' },
    { area: 'Reentry', test: 'Can contacts reenter only when intended?' },
    { area: 'Communication', test: 'Are messages accurate, relevant and appropriate?' },
    { area: 'Handoff', test: 'Does the correct person receive the context?' },
    { area: 'Integrations', test: 'Does external data move correctly?' },
    { area: 'Live test', test: 'Does the workflow work with a fresh real world contact?' }
  ];

  const failureModeData = [
    { failure: 'Never fires', cause: 'Trigger or filter mismatch', fix: 'Test with a fresh contact and inspect filters.' },
    { failure: 'Wrong contacts enter', cause: 'Eligibility too broad', fix: 'Tighten filters and conditions.' },
    { failure: 'Duplicate messages', cause: 'Overlapping workflows', fix: 'Assign clear ownership to each customer state.' },
    { failure: 'Nurture continues after conversion', cause: 'Missing exit logic', fix: 'Stop on response, booking, conversion or handoff.' },
    { failure: 'Wrong branch', cause: 'Bad field or condition', fix: 'Test every branch with representative data.' },
    { failure: 'Works in test but fails live', cause: 'Different live data or integration state', fix: 'Run an end to end live test.' },
    { failure: 'Agency deployment breaks', cause: 'Blind Snapshot reuse', fix: 'Map client differences and QA before activation.' }
  ];

  const businessModelData = [
    { model: 'Local businesses', priorities: 'Missed call recovery, speed to lead, appointment protection, reviews' },
    { model: 'Home services', priorities: 'Lead response, quote follow up, reminders, reviews' },
    { model: 'Professional services', priorities: 'Qualification, consultation booking, pipeline follow up' },
    { model: 'Consultants and coaches', priorities: 'Application follow up, booking, nurture, onboarding' },
    { model: 'Agencies', priorities: 'Onboarding, reusable workflows, lead routing, Snapshots, QA' },
    { model: 'SaaS', priorities: 'Demo qualification, booking, onboarding, lifecycle follow up, reactivation' }
  ];

  const valueTypeData = [
    { type: 'Revenue', examples: 'Appointments, opportunities, recovered leads', measure: 'Incremental opportunities and attributable revenue' },
    { type: 'Cost', examples: 'Less repetitive work', measure: 'Hours removed and cost per task' },
    { type: 'Capacity', examples: 'More volume handled by the same team', measure: 'Volume per team member and fulfillment time' },
    { type: 'Retention', examples: 'Better onboarding and follow up', measure: 'Completion, renewal, repeat or re engagement' },
    { type: 'Risk', examples: 'Fewer routing or data errors', measure: 'Error rate and manual corrections' }
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your GHL automation decisions.</p>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Automation: The Workflows Worth Building First</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Automation</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Workflows</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Automation:<br />
            <span className="text-[#F8D000]">The Workflows Worth Building First</span>
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
            GoHighLevel automation is most valuable when it removes a recurring business bottleneck that is expensive, frequent and predictable enough to handle with defined logic.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The useful question is not, "What can I automate in GoHighLevel?" It is, "Which recurring problem is costing my business enough value that automation is worth building and maintaining?"
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            More workflows do not automatically mean a better system. Poor automation can create duplicate messages, incorrect routing, stale follow up, conflicting workflows, or communication that continues after a human has already taken over.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The practical approach is simple: identify the biggest recurring leak, build the smallest reliable workflow that addresses it, measure the result, then expand.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Your Automation Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#final-recommendation"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Recommendation
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN: SIDEBAR */}
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
                5+ years GHL experience · 200+ systems built globally. All automation details verified as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Automating?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We've built 200+ GHL automation systems for agencies and businesses.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* RIGHT COLUMN: BLOG CONTENT */}
          <main className="min-w-0 order-2">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Summary</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Build workflows that solve your biggest recurring leaks.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                For many lead driven businesses, start with speed to lead, missed call recovery, appointment protection, sales follow up and reactivation. For agencies, client onboarding, reusable workflow architecture and QA move higher on the list. AI belongs where the process genuinely requires conversation or interpretation.
              </p>
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

            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section: Quick Answer */}
            <h2 id="quick-answer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Quick Answer: Which GoHighLevel Automations Should You Build First?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For many lead driven businesses, start with speed to lead, missed call recovery, appointment protection, sales follow up and reactivation. For agencies, client onboarding, reusable workflow architecture and QA can move higher on the list. AI belongs where the process genuinely requires conversation or interpretation.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is no universal highest ROI workflow. Priority depends on business impact, frequency, opportunity size, implementation difficulty, maintenance burden and measurement ability.
            </p>

            {/* Section: What Is GoHighLevel Automation */}
            <h2 id="what-is-gohighlevel-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is GoHighLevel Automation?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A GoHighLevel workflow is an automated sequence that starts when a supported event occurs and then performs configured actions. HighLevel's current documentation describes triggers as the events that start workflows and actions as the tasks performed after a trigger fires.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A useful model is:
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              Business event → Trigger → Filters and conditions → Actions → Timing → Branches → Human handoff → Exit → KPI
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For example, a new lead can trigger a workflow. Filters decide whether the lead belongs in the process. Actions can create or update CRM records, assign ownership, send communication or create tasks. Wait steps control timing. Conditions route contacts differently. An exit rule prevents the automation from continuing after the lead books, converts or enters a human managed state.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a deeper build walkthrough, see the <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow automation guide</Link>.
            </p>

            {/* Section: How to Decide */}
            <h2 id="how-to-decide" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Decide What to Automate First
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Question</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionFactorData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.question}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Priority Matrix */}
            <h2 id="priority-matrix" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Automation Priority Matrix
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Automation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best For</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ROI Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Priority</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Difficulty</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">KPI</th>
                  </tr>
                </thead>
                <tbody>
                  {priorityMatrixData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.automation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.roiType}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.priority}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.difficulty}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.kpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Decision Tree */}
            <h2 id="decision-tree" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Decision Tree: What Should I Automate First?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Leads arrive but response is slow → speed to lead.</li>
              <li>Calls are missed and callers are not recovered → missed call recovery.</li>
              <li>Appointments are booked but attendance is weak → confirmation, reminders and recovery.</li>
              <li>Leads are contacted but follow up is inconsistent → pipeline and nurture follow up.</li>
              <li>You have a large dormant database → segmented reactivation.</li>
              <li>Your agency repeats the same client setup → reusable workflow architecture, Snapshot deployment and client specific QA.</li>
              <li>Qualification needs repeated conversation and volume justifies it → evaluate Conversation AI or AI workflow actions.</li>
              <li>The process is rare, unpredictable or sensitive → keep it manual or automate only supporting tasks such as reminders and routing.</li>
            </ul>

            {/* Section: Speed to Lead */}
            <h2 id="speed-to-lead" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              1. Speed to Lead Automation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Speed to lead handles the first response after a new inquiry. It is useful when a business receives leads through forms, surveys, ads, chat or other connected sources and cannot reliably respond immediately.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Architecture:</strong> Trigger = new lead event. Logic = source, service, location or eligibility filters. Actions = create or update the contact, create or update the opportunity, assign ownership, send an appropriate response and notify the team. Timing = immediate response followed by controlled waits. Branches = responded, booked, unqualified or inactive. Exit = stop nurture when the lead responds, books, converts or becomes human managed. Handoff = salesperson receives the lead and CRM context. KPI = contact rate, qualified rate, booking rate and opportunity conversion.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Why the steps matter: filters prevent unrelated contacts from entering, timing prevents message flooding, branches adapt to behavior, and exit logic prevents automation from fighting the salesperson.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the detailed implementation guide, see the <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow automation guide</Link>.
            </p>

            {/* Section: Missed Call Recovery */}
            <h2 id="missed-call-recovery" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Missed Call Recovery
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A missed call often represents stronger intent than a cold database record. The purpose of missed call automation is to recover the conversation while preserving human ownership.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Architecture:</strong> Trigger = supported missed or unanswered call event. Logic = number, business rule and contact eligibility checks. Action = short response with the next step. Timing = deliberate delay where a manual callback should have priority. Branch = response, booking, no response or escalation. Exit = stop when the opportunity is handled. Handoff = notify or assign the correct team member. KPI = recovered conversations, appointments and opportunities.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The important design detail is the handoff, not the SMS. If a salesperson has already spoken to the caller, the automation should not continue acting as though the call was still unanswered.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For broader implementation and optimization, see <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel workflow automation services</Link>.
            </p>

            {/* Section: Appointment Automation */}
            <h2 id="appointment-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Appointment Confirmation, Reminders and No Show Recovery
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Appointment automation protects an opportunity already on the calendar. Confirmation, reminder, cancellation, reschedule and no show states should be treated differently.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Architecture:</strong> Trigger = appointment booked or appointment status change. Conditions = appointment type, calendar and contact state. Actions = confirmation, reminder, instructions or rescheduling path. Timing = scheduled around the appointment. Branches = confirmed, cancelled, rescheduled, attended or no show. Exit = stop the reminder path when the appointment state changes. Handoff = route exceptions or high value appointments to a person. KPI = show rate, no show rate, reschedule rate and revenue per appointment.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The key principle is state awareness. A workflow should know when the condition that justified the next message is no longer true.
            </p>

            {/* Section: Pipeline Follow Up */}
            <h2 id="pipeline-follow-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Pipeline and Sales Follow Up
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Pipeline automation turns a CRM stage into an operational action. A stage should represent a meaningful business state.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Example: opportunity enters a defined stage → conditions check owner or deal type → task, notification or appropriate communication → wait based on the actual sales cycle → branch if the opportunity advances, stalls, closes or is lost → exit old follow up when the state changes → human owns the conversation → KPI is stage conversion, time in stage, task completion and close rate.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is useful when follow up depends too heavily on memory.
            </p>

            {/* Section: Nurture and Reactivation */}
            <h2 id="nurture-reactivation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Lead Nurture and Reactivation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Nurture and reactivation are related but different. Nurture follows a relatively new lead that has not converted. Reactivation targets an older contact that has become inactive.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Nurture:</strong> new lead → eligibility check → relevant communication → wait → engagement check → branch → booking or human path → exit when the lead responds, books or converts.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Reactivation:</strong> dormant segment → eligibility and consent check → relevant message → wait → response check → branch into sales, booking, continued nurture or exit → KPI is re engagement, appointments, opportunities and recovered revenue.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A large database is not permission to send the same message to everyone. Segmentation, consent, relevance and deliverability belong in the workflow design.
            </p>

            {/* Section: Agency Automation */}
            <h2 id="agency-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Client Onboarding and Agency Automation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For agencies, automation ROI is often operational. A repeatable onboarding process can reduce coordination and make delivery more consistent.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Architecture:</strong> client becomes active → create onboarding record → assign tasks → collect assets → configure account → run QA checklist → review exceptions → approve launch → documentation and handoff → optimization.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel Snapshots can capture reusable sub account configuration, including workflows. The important limitation is that a Snapshot is a reusable starting point, not permission to clone blindly. Client specific fields, calendars, messaging, integrations, compliance requirements and business rules still need review.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the CRM architecture that supports this system, see <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GHL Scale Up's GoHighLevel CRM setup service</Link>.
            </p>

            {/* Section: AI Automation */}
            <h2 id="ai-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              AI Automation: When It Belongs in the Stack
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              AI should be introduced when the process needs interpretation or conversation, not simply because an AI action exists.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Current HighLevel documentation supports Workflow AI actions and Conversation AI capabilities for tasks such as collecting lead information, answering questions, appointment booking, routing and human handover. The architecture should be:
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              Lead or conversation event → eligibility and context → AI interaction or analysis → qualification or decision → booking or routing → human handoff when required → CRM update → measurement
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The handoff is critical. Define what AI can answer, what it can book, what it must escalate and what happens when the conversation is ambiguous.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For deeper AI context, see the <Link href="/blog/gohighlevel-ai-employee" className="text-[#0E9BF0] hover:underline">GoHighLevel AI Employee guide</Link>.
            </p>

            {/* Section: Measure ROI */}
            <h2 id="measure-roi" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Measure Automation ROI
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Value Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Examples</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {valueTypeData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.examples}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.measure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A simple model is: automation ROI = (measured value created minus automation cost) divided by automation cost. The hard part is defining measured value honestly. A message sent is activity, not revenue. Value should be tied to the business outcome the workflow was designed to change.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Costs may include implementation, platform usage, messaging, AI usage, integrations, testing and ongoing maintenance.
            </p>

            {/* Section: When Not to Automate */}
            <h2 id="when-not-to-automate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Not to Automate
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Rare tasks may not justify implementation.</li>
              <li>Broken processes should be fixed before they are automated.</li>
              <li>Sensitive or high consequence decisions may require human review.</li>
              <li>Highly inconsistent processes can become harder to maintain when automated.</li>
              <li>SMS and email automation should not launch before consent, deliverability and applicable requirements are understood.</li>
              <li>Existing workflows should be retired when they no longer create measurable value.</li>
              <li>Multiple workflows should not control the same business state without clear ownership.</li>
            </ul>

            {/* Section: SMS Compliance */}
            <h2 id="sms-compliance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              SMS Automation and A2P Considerations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              SMS automation has a compliance and deliverability layer. For US messaging using standard 10 digit long code numbers, A2P 10DLC requirements can affect automated SMS delivery. Requirements can change, so current requirements should be checked before launch.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the deeper explanation, see GHL Scale Up's <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">A2P 10DLC guide</Link>.
            </p>

            {/* Section: Workflow QA */}
            <h2 id="workflow-qa" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Workflow QA Before Launch
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">QA Area</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Test</th>
                  </tr>
                </thead>
                <tbody>
                  {qaData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.area}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.test}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Current HighLevel troubleshooting guidance specifically recommends checking trigger filters, reentry settings and live testing when workflows do not behave as expected.
            </p>

            {/* Section: Failure Modes */}
            <h2 id="failure-modes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Failure Modes
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Failure</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {failureModeData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.failure}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cause}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Business Model Priorities */}
            <h2 id="business-model-priorities" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Business Model Priorities
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Business Model</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Priorities</th>
                  </tr>
                </thead>
                <tbody>
                  {businessModelData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.model}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.priorities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: What to Build Next */}
            <h2 id="what-to-build-next" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should I Build Next?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Find the next largest recurring leak.</li>
              <li>Confirm the process is stable enough to define.</li>
              <li>Write the trigger and desired outcome before adding actions.</li>
              <li>Define exceptions, human handoff and exit state.</li>
              <li>Choose one KPI that proves whether it worked.</li>
              <li>Test both successful and failure paths.</li>
              <li>Launch, observe and improve before adding complexity.</li>
            </ul>

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

            {/* Section: Final Recommendation */}
            <h2 id="final-recommendation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Recommendation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The highest value GoHighLevel automation is not the workflow with the most actions or the one most often repeated in generic lists. It is the workflow attached to the most expensive recurring problem your business can reliably define and measure.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start with the leak. Map the process. Build the smallest reliable workflow. Define the handoff and exit. Measure the outcome. Then expand.
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to Automate Your GoHighLevel System?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps you build the right workflows first, avoid common automation mistakes, and measure real ROI.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Strategy Call
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience setting up, auditing, and automating GHL systems across real estate, healthcare, home services, SaaS, and agencies. All automation details verified as of September 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
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