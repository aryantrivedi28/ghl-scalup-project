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
  Shield,
  AlertTriangle,
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Rocket,
  ListChecks,
  Settings,
  Search,
  Filter,
  Lock,
  Clock,
  Network,
  Cloud,
  BarChart3,
  Target,
  Table,
  FileSpreadsheet,
  Workflow,
  Webhook,
  Users,
  CalendarClock,
  DollarSign,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function SyncGHLGoogleSheetsClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'quick-answer',
      'why-sync',
      'what-data',
      'which-method',
      'send-new-contacts',
      'update-instead-of-duplicate',
      'sync-opportunities',
      'send-appointments',
      'webhook',
      'reverse-sync',
      'schedule-sync',
      'sheet-design',
      'troubleshooting',
      'security',
      'when-not-enough',
      'faq',
      'start',
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
      q: 'Can GoHighLevel connect directly to Google Sheets?',
      a: 'Yes. GoHighLevel has a Google Sheets workflow action, documented as a Premium Workflow Action, that can create, look up, update and clear rows. It works from inside a workflow, so GoHighLevel sends data to the sheet. A Google Sheets trigger that starts a workflow was not documented.'
    },
    {
      q: 'Do I need Zapier to connect GoHighLevel to Google Sheets?',
      a: 'No for sending GoHighLevel data to a sheet, because the native action exists. Zapier or Make becomes useful when you need Sheets changes to flow back to GoHighLevel, or logic the workflow cannot do.'
    },
    {
      q: 'Can GoHighLevel update an existing Google Sheets row?',
      a: 'Yes, per the premium action article: look up the row by a column and value, then update that row. Use a stable ID as the lookup column. Confirm the exact action labels in your account.'
    },
    {
      q: 'Does the native Google Sheets action cost extra?',
      a: 'It is a premium workflow action. Eligible sub-accounts get 100 free lifetime executions, then standard premium pricing applies unless a Workflow Pro plan covers it. The page does not list the rates. A lookup that finds nothing and creates a row is charged as a separate premium execution.'
    },
    {
      q: 'Can I sync Google Sheets changes back to GoHighLevel?',
      a: "Not with a documented native trigger. Zapier and Make can watch a sheet and then add or update contacts and opportunities. Make's Watch Changes trigger only detects edits made by a user in the Sheets app, not script or API changes."
    },
    {
      q: 'How often can the sync run?',
      a: 'Event-based workflows run when the trigger fires. The Scheduler trigger cannot run more than once per hour and does not backfill missed runs. Google Sheets API write quotas also apply for custom setups. No source promises instant sync.'
    },
    {
      q: 'How do I stop duplicate rows?',
      a: 'Add a Contact ID or Opportunity ID column, look up that ID before writing, and update when found. Do not use email as the only key, because it can be blank, repeated or changed.'
    },
    {
      q: 'Can I connect several GoHighLevel accounts to one Google Sheet?',
      a: 'Each sub-account needs its own workflow or scenario writing to the shared sheet, and each needs its own connection. Cross-account sheets are a design choice and were not verified as a built-in feature.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'why-sync', title: 'Why Would You Sync GoHighLevel Data with Google Sheets?' },
    { id: 'what-data', title: 'What GoHighLevel Data Can You Send to Google Sheets?' },
    { id: 'which-method', title: 'Which Method Should You Use to Connect GoHighLevel to Google Sheets?' },
    { id: 'send-new-contacts', title: 'How Do You Send New GoHighLevel Contacts to Google Sheets?' },
    { id: 'update-instead-of-duplicate', title: 'How Do You Update an Existing Google Sheets Row Instead of Adding a Duplicate?' },
    { id: 'sync-opportunities', title: 'How Do You Sync GoHighLevel Opportunities and Pipeline Changes to Google Sheets?' },
    { id: 'send-appointments', title: 'How Do You Send GoHighLevel Appointments to Google Sheets?' },
    { id: 'webhook', title: 'How Does a GoHighLevel Webhook Get Data into Google Sheets?' },
    { id: 'reverse-sync', title: 'Can Google Sheets Changes Sync Back to GoHighLevel?' },
    { id: 'schedule-sync', title: 'Can You Schedule a GoHighLevel to Google Sheets Sync?' },
    { id: 'sheet-design', title: 'What Should Your Google Sheet Look Like for Your Business?' },
    { id: 'troubleshooting', title: 'Why Are Rows Duplicated, Missing or Not Updating?' },
    { id: 'security', title: 'Is It Safe to Put GoHighLevel Contact Data in Google Sheets?' },
    { id: 'when-not-enough', title: 'When Is Google Sheets Not Enough for GoHighLevel Data?' },
    { id: 'faq', title: 'Frequently Asked Questions About Syncing GoHighLevel with Google Sheets' },
    { id: 'start', title: 'Where Should You Start?' },
  ];

  const methodTable = [
    { method: 'Native Google Sheets action', use: 'You log or update rows from GoHighLevel events', watch: 'Premium cost after 100 free lifetime executions; one-way only' },
    { method: 'Zapier', use: 'You already use Zapier or need Sheets to GoHighLevel', watch: 'Only one HighLevel trigger listed on its integration page; confirm task limits and pricing' },
    { method: 'Make', use: 'You need branching, filters or data cleanup', watch: 'No appointment modules listed; Update a Row needs a row number' },
    { method: 'Custom Webhook plus Apps Script', use: 'You want no third-party platform and can maintain code', watch: 'Security of the web app; no documented webhook retry behavior' },
    { method: 'Reporting connector', use: 'You want scheduled client dashboards', watch: 'A paid vendor product, not a record sync' },
  ];

  const webhookTable = [
    { step: '1', ghl: 'Workflow trigger fires (for example Contact Created)', receiver: 'Nothing yet' },
    { step: '2', ghl: 'Custom Webhook action sends a POST with a JSON body you built, using fields from the contact', receiver: 'Be reachable at a URL and accept the request' },
    { step: '3', ghl: 'HighLevel does not document a default payload or retry behavior', receiver: 'Read the body, check a shared secret, pick the ID' },
    { step: '4', ghl: 'Execution Logs show whether the action fired and the status code', receiver: 'Look up the row, update or add it, return a response' },
  ];

  const troubleshootingTable = [
    { symptom: 'Duplicate rows', cause: 'Create action runs on every event with no lookup; key is email or name', check: 'Add Contact ID, look up first, update when found' },
    { symptom: 'Data in the wrong column', cause: 'Columns added, renamed or reordered after mapping', check: 'Click Refresh Headers and re-map; confirm correct worksheet tab' },
    { symptom: 'No new rows', cause: 'Workflow not published, trigger conditions not met, or Google account disconnected', check: 'Execution Logs; reconnect the Google account' },
    { symptom: 'Update step did nothing', cause: 'Lookup found no row, so dependent update steps are skipped', check: 'Check the lookup column and value; add a create-on-no-match branch' },
    { symptom: 'Several contacts written as one row', cause: 'Multiple-rows action expects an array of row objects', check: 'Use the single-row action, or pass an array' },
    { symptom: 'Costs growing', cause: 'Each lookup, create or update may be a premium execution', check: 'Review the premium rate card; reduce executions' },
    { symptom: 'Webhook arrives but nothing is written', cause: 'Receiver rejected it or script failed', check: 'Check the status code in Execution Logs and the receiver logs' },
    { symptom: '429 errors', cause: 'Google Sheets or HighLevel API rate limits', check: 'Slow down; Google recommends exponential backoff' },
    { symptom: 'Make Watch New Rows stops', cause: 'A blank row in the sheet', check: 'Remove blank rows' },
    { symptom: 'Old values after a custom field rename', cause: 'Mapping by label rather than ID', check: 'Re-check field mapping after renames' },
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
          <span className="text-[#1A2236] font-medium">Sync GoHighLevel Data with Google Sheets</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Integration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Google Sheets</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Workflow</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Sync GoHighLevel Data with Google Sheets
          </h1>

          {/* Author */}
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Facts from HighLevel, Google, Zapier and Make documentation read 13 November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Yes, GoHighLevel can send data to Google Sheets automatically. The simplest route is the built-in Google Sheets workflow action, which can add a row, look up an existing row, and update it. When you need data to flow the other way, or logic a workflow cannot handle, Zapier, Make or a custom webhook fill the gap.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Most tutorials stop at "add a row". This guide goes further: what data you can actually send, which method fits which job, how to update a row instead of creating a duplicate, what the native action costs, and where Google Sheets stops being the right tool. For general workflow building, see the GoHighLevel workflow automation guide.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need Help Building This? Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#which-method"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Methods
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
            <div className="mb-6">
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
                5+ years GHL experience · 200+ systems built globally. We implement GoHighLevel for agencies and service businesses.
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
          </aside>

          {/* RIGHT COLUMN: BLOG CONTENT */}
          <main className="min-w-0 order-2">

            {/* Mobile TOC */}
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

            {/* Mobile Project Help Card */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full bg-[#F8F9FB]">
                <Image
                  src="/blog/sync-gohighlevel-google-sheets.png"
                  alt="GoHighLevel contact record syncing to a Google Sheets row"
                  width={1600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Featured image concept: A CRM pipeline card connected to a spreadsheet row by a single arrow.</span>
              </div>
            </div>

            {/* Intro */}
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, GoHighLevel can send data to Google Sheets automatically. The simplest route is the built-in Google Sheets workflow action, which can add a row, look up an existing row, and update it. When you need data to flow the other way, or logic a workflow cannot handle, Zapier, Make or a custom webhook fill the gap.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Most tutorials stop at "add a row". This guide goes further: what data you can actually send, which method fits which job, how to update a row instead of creating a duplicate, what the native action costs, and where Google Sheets stops being the right tool. For general workflow building, see the GoHighLevel workflow automation guide.
            </p>

            {/* Section: Quick Answer */}
            <h2 id="quick-answer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Quick answer
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              One-way logging (new lead goes to a sheet): native action. Keeping rows current: native lookup then update. Sheet to GoHighLevel: Zapier or Make. Scheduled reporting: a different job, usually an API script or a reporting connector. Real-time is not promised by any source; plan for small delays.
            </p>

            {/* Section: Why Sync */}
            <h2 id="why-sync" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Would You Sync GoHighLevel Data with Google Sheets?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is the system of record for contacts, opportunities and bookings. A spreadsheet is useful when someone needs a shared, filterable view outside the CRM, such as a finance contact, a client who only wants a lead list, or a manager who prefers pivot tables.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Lead logs a team or client can read without a CRM login.</li>
              <li>Pipeline reviews with pivot tables and charts.</li>
              <li>Appointment and attendance lists for front desks.</li>
              <li>Handoff sheets between sales, onboarding and finance.</li>
              <li>Reconciling leads against ad platform exports.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Syncing replaces manual exports and copy-paste, which saves time and reduces typing errors. It does not by itself improve conversion or revenue; it improves visibility, and what you do with that visibility is up to you.
            </p>

            {/* Section: What Data */}
            <h2 id="what-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What GoHighLevel Data Can You Send to Google Sheets?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Availability depends on the method. A field existing in HighLevel's API does not guarantee that a workflow action, Zapier step or Make module exposes it. Check the field list in the tool you choose.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Which Contact Fields Can You Send to Google Sheets?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's Get Contact API documents these fields: id, name, email, phone, companyName, source, tags, assignedTo, dateAdded, customFields and type. Two things to know: assignedTo is a user ID, not a name, and custom fields come as an ID plus a value, so a tool must translate the ID into a column.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Which Opportunity Fields Can You Send to Google Sheets?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The Search Opportunity API documents name, monetaryValue, status, source, pipelineId, pipelineStageId, assignedTo, a contact object (id, name, companyName, email, phone, tags), createdAt, lastStatusChangeAt and customFields. Pipeline and stage appear as IDs. A closing date field was not in the response read, so build a close-date column from a custom field or the status-change timestamp only after confirming what your tool returns.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Can You Send Appointments, Campaign Data and Payments to Google Sheets?</h3>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Appointments:</strong> the workflow triggers Customer Booked Appointment and Appointment Status exist. Which appointment fields are available to the sheet action was not verified, so confirm them in your workflow.</li>
              <li><strong className="text-[#1A2236]">Form submissions:</strong> the Form Submitted trigger exists; the fields depend on your form.</li>
              <li><strong className="text-[#1A2236]">Payments and orders:</strong> the triggers Payment Received, Order Submitted and Invoice exist. Whether every amount and status field reaches a sheet was not verified. A sheet is a convenience view here, not an accounting record.</li>
              <li><strong className="text-[#1A2236]">Email and campaign engagement:</strong> not a record-level sync. Treat opens, clicks and similar figures as reporting, not row data.</li>
            </ul>

            {/* Section: Which Method */}
            <h2 id="which-method" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Method Should You Use to Connect GoHighLevel to Google Sheets?
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Method</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Use it when</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  {methodTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.method}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.use}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Simple rule: pick the least complex method that can do the job. Start native. Move up only when a documented limit stops you.
            </p>

            {/* Compact Method Flow Diagram */}
            <div className="my-6 rounded-xl overflow-hidden border border-[#DDE1E9] bg-[#F8F9FB] p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] leading-snug">
                <div className="bg-white border border-[#C9D5E3] rounded-lg px-3 py-2 text-[#1A2236]">
                  <span className="font-bold">GoHighLevel event</span><br />
                  Contact Created, Opportunity Status Changed, Customer Booked Appointment, Scheduler …
                </div>
                <div className="bg-white border border-[#C9D5E3] rounded-lg px-3 py-2 text-[#1A2236]">
                  <span className="font-bold">GoHighLevel workflow</span>
                </div>
                <div className="bg-white border border-[#C9D5E3] rounded-lg px-3 py-2 text-[#1A2236]">
                  <span className="font-bold">Native Google Sheets action</span> (premium workflow action) <span className="text-[#8A9BB0]">or</span> <span className="font-bold">Custom Webhook action</span> (sends HTTP request)
                </div>
                <div className="bg-white border border-[#C9D5E3] rounded-lg px-3 py-2 text-[#1A2236]">
                  <span className="font-bold">Look up row by Contact ID</span>
                </div>
                <div className="bg-[#FFF6D6] border border-[#E8CE7A] rounded-lg px-3 py-2 text-[#6B5400]">
                  <span className="font-bold">Match found?</span> yes → Update that row · no → Create a new row
                </div>
                <div className="bg-white border border-[#C9D5E3] rounded-lg px-3 py-2 text-[#1A2236]">
                  <span className="font-bold">Google Sheet</span>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-[#5C6880] italic">
                Receiver (for the webhook path): Zapier, Make, or Apps Script web app. Both paths converge on the same lookup-then-update-or-create pattern.
              </div>
            </div>

            {/* Section: Send New Contacts */}
            <h2 id="send-new-contacts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Send New GoHighLevel Contacts to Google Sheets?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Goal: when a new contact is created, add a row to a lead log. These steps follow HighLevel's Google Sheets premium action article (modified 29 September 2026). Menu labels can change, so confirm them in your account.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 1: Build the sheet first</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Create a spreadsheet and put your headers in row 1. Use unique names and keep the first column as Contact ID. A suggested start: Contact ID, Date Added, Name, Email, Phone, Source, Tags, Assigned To.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 2: Create the workflow</h3>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Go to <strong className="text-[#1A2236]">Automation &gt; Workflows</strong> and create a workflow.</li>
              <li>Add the trigger <strong className="text-[#1A2236]">Contact Created</strong>. (The triggers list also includes Contact Changed and Contact Tag.)</li>
              <li>Click + to add an action, search for <strong className="text-[#1A2236]">Google Sheets</strong>, and choose <strong className="text-[#1A2236]">Create Spreadsheet Row</strong>.</li>
              <li>Connect and authorize a Google account that can edit the sheet.</li>
              <li>Select the <strong className="text-[#1A2236]">Drive</strong>, <strong className="text-[#1A2236]">Spreadsheet</strong> and <strong className="text-[#1A2236]">Worksheet</strong>.</li>
              <li>Click <strong className="text-[#1A2236]">Refresh Headers</strong>, then set <strong className="text-[#1A2236]">Starting Column</strong> and <strong className="text-[#1A2236]">Ending Column</strong> and map each column to the matching contact value.</li>
              <li>Save the action and publish the workflow.</li>
            </ol>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 3: Check it with a test contact</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Create a test contact and confirm one row appears with the right values in the right columns. Then check the workflow's execution log. If you later add, rename or reorder a column, click <strong className="text-[#1A2236]">Refresh Headers</strong> and review the mapping again.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Cost note</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This action is billed as a premium workflow action. Eligible sub-accounts get 100 free lifetime executions, then standard premium pricing applies unless a Workflow Pro plan covers it. The page does not list rates, so check your rate card before enrolling large numbers of contacts. Workflows also do not batch contacts: each enrollment writes its own row.
            </p>

            {/* Section: Update Instead of Duplicate */}
            <h2 id="update-instead-of-duplicate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Update an Existing Google Sheets Row Instead of Adding a Duplicate?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A duplicate happens when every change creates a new row. The fix is simple in concept: use a stable ID, look for a row with that ID, update it if found, and create a row only if not found.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Native approach</h3>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Use the trigger <strong className="text-[#1A2236]">Contact Changed</strong> (or a trigger matching the change you care about).</li>
              <li>Add a Google Sheets <strong className="text-[#1A2236]">Lookup</strong> action. Set the <strong className="text-[#1A2236]">Column</strong> to Contact ID, set the <strong className="text-[#1A2236]">Lookup Value</strong> to the contact's ID, and choose a <strong className="text-[#1A2236]">Search Order</strong> (from the top or the bottom).</li>
              <li>Add an update action that uses the Lookup result. Only one Lookup can feed an Update, and the Lookup must come earlier in the workflow.</li>
              <li>Optionally have the lookup create a row when nothing matches, or branch with If/Else on the Lookup result.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Documented behavior worth knowing: if a Lookup finds no row, dependent Update steps are skipped; a no-match create is charged as its own premium execution; and delete actions clear cell contents but do not remove the row. The article describes these capabilities and field labels but names only the create actions exactly, so confirm the dropdown labels.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Zapier approach</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zapier's Google Sheets app offers Lookup Spreadsheet Row, Find or Create Row and Update Spreadsheet Row. Use Find or Create Row keyed on Contact ID, then update the found row. Its integration page lists HighLevel actions such as Add/Update Contact and Add/Update Opportunity, and lists Pipeline Stage Changed as the HighLevel trigger. For other events, confirm whether to start from a GoHighLevel workflow webhook instead.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Make approach</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Make's Google Sheets modules include Search Rows, Add a Row and Update a Row. Update a Row targets a row number, so the usual pattern is: search by ID, then use a router to add a row when nothing is found and update when something is. Make's documentation says the advanced Search Rows module does not return row IDs, so confirm in your scenario how you will obtain the row number.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Why not match on email?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Emails can be blank, shared, typed differently or changed. A Contact ID or Opportunity ID does not change, so use it as the key and keep email as an ordinary column.
            </p>

            {/* Section: Sync Opportunities */}
            <h2 id="sync-opportunities" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Sync GoHighLevel Opportunities and Pipeline Changes to Google Sheets?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use one row per opportunity, keyed on Opportunity ID. HighLevel offers the triggers Opportunity Created, Opportunity Status Changed and Pipeline Stage Changed. The row is created on the first event and updated on later ones, using the lookup pattern above.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Make example: opportunity created or updated to a sheet</h3>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Create the sheet with Opportunity ID in column A, followed by Contact Name, Company, Pipeline, Stage, Value, Owner, Created Date and Status.</li>
              <li>In Make, start the scenario with the HighLevel Watch Events module. Make documents it as webhook-based and says the required scopes are selected in the GoHighLevel Marketplace. The older Watch Opportunities module is marked deprecated.</li>
              <li>Add Google Sheets Search Rows with a filter on the Opportunity ID column.</li>
              <li>Add a router with two routes: one when nothing is found (Add a Row) and one when a row is found (Update a Row, using the row number).</li>
              <li>Map the opportunity fields to the columns. Pipeline and stage arrive as IDs, so decide where the readable names come from.</li>
              <li>Add error handling, run the scenario on a few test cases (new, changed stage, changed value), and activate it.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This is an outline based on Make's documented modules, not a tested scenario. Confirm module names and the row-number method in your own scenario.
            </p>

            {/* Section: Send Appointments */}
            <h2 id="send-appointments" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Send GoHighLevel Appointments to Google Sheets?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use the Customer Booked Appointment trigger to create a row, and the Appointment Status trigger to update it. Key the row on an appointment identifier if your tool exposes one; otherwise use Contact ID plus appointment start time. Which appointment fields are available to the Google Sheets action was not verified here, and Make lists no appointment modules, so confirm the field list in the workflow picker before you design columns.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Pick one time zone for the sheet and note it in the header, so staff in other regions do not misread times. For calendar basics, see the GoHighLevel calendar and booking guide.
            </p>

            {/* Section: Webhook */}
            <h2 id="webhook" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Does a GoHighLevel Webhook Get Data into Google Sheets?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A webhook is an HTTP request. HighLevel's Custom Webhook action can send GET, POST, PUT or DELETE requests to a URL you choose, with custom headers, an authorization option and a JSON or form body. It does not write to Google Sheets. Something has to receive the request and write the row.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Step</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What GoHighLevel does</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What the receiver must do</th>
                  </tr>
                </thead>
                <tbody>
                  {webhookTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.step}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.ghl}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.receiver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Receiver options:</strong> a Zapier catch hook, a Make webhook (Watch Events is webhook-based), or a Google Apps Script web app. Google documents that a web app runs doPost when it receives a POST, exposes the body as e.postData.contents, and must return a text or HTML output; you deploy it from Deploy &gt; New deployment as a Web app.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This guide describes the Apps Script logic in words and does not include code, because code was not run for this research. In plain terms, the script parses the JSON, checks a secret you include in the body, finds a row by ID, updates or adds it, and returns a short confirmation.
            </p>
            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-[#5C6880] leading-relaxed">
                  <strong className="text-[#1A2236]">Security note.</strong> A web app that accepts data from the public internet is a door. Include a long random secret in the request body and have the script reject anything without it, never put secrets in the URL where logs can capture them, and limit what the script can touch. HighLevel documents header-based authorization, but whether Apps Script can read incoming headers was not verified, so the body is the safer assumption. Google documents that execution identity ("Execute as") and access settings affect who can call the app, so review them carefully.
                </div>
              </div>
            </div>

            {/* Section: Reverse Sync */}
            <h2 id="reverse-sync" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can Google Sheets Changes Sync Back to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not as a standard feature. No Google Sheets trigger was documented for GoHighLevel workflows. Reverse sync means another tool watches the sheet:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Zapier:</strong> its page lists a template "Update HighLevel contacts with new or updated Google Sheets rows" and actions Add/Update Contact and Add/Update Opportunity.</li>
              <li><strong className="text-[#1A2236]">Make:</strong> Watch New Rows triggers on new rows; Watch Changes triggers on cell edits made by a user in the Sheets app, not by scripts or API calls, and it does not detect new rows.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              True two-way sync adds risk: conflicting edits, loops where each system keeps updating the other, and overwritten fields. Keep it safe by letting each field be editable in one place only, keying on Contact ID, and adding a marker so a change made by the sync does not trigger the sync again. If you only need to import a list into GoHighLevel, a one-time import is simpler than a permanent two-way sync.
            </p>

            {/* Section: Schedule Sync */}
            <h2 id="schedule-sync" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Schedule a GoHighLevel to Google Sheets Sync?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Scheduled and event-based sync solve different problems. Event-based sync writes a row when something happens. Scheduled sync pulls a batch on a timer, which suits daily totals or a weekly client report.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">HighLevel Scheduler trigger:</strong> offers daily, weekly, monthly, every N days, one-off and cron-style schedules, runs in the account timezone, and cannot run more than once per hour. It is contactless, so it does not enroll contacts or list them, and it does not backfill missed runs.</li>
              <li><strong className="text-[#1A2236]">Make or an API script:</strong> can read contacts or opportunities on a timer. HighLevel's API returns up to 100 records per page and has default limits of 100 requests per 10 seconds and 200,000 per day. Google allows 300 write requests per minute per project and 60 per user.</li>
              <li><strong className="text-[#1A2236]">Reporting connectors:</strong> vendors such as Two Minute Reports advertise scheduled refresh. Their metric claims were not verified.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Do not promise instant sync. Event triggers, platform polling, retries and rate limits all add delay.
            </p>

            {/* Section: Sheet Design */}
            <h2 id="sheet-design" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should Your Google Sheet Look Like for Your Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Design the sheet before building the workflow. Put the ID in column A, keep GoHighLevel-owned columns separate from columns your team types into, and decide on date and time formats up front. The structures below are illustrative, not GoHighLevel templates.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Agency lead tracking sheet</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Columns: Contact ID | Lead Date | Client Account | Contact Name | Email | Phone | Source | Campaign | Assigned User | Lead Status | Opportunity Value
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One row per contact. Contact ID is the key used for updates. Client Account is not a default contact field: add a custom field, a tag convention, or a fixed value per client workflow. Campaign and Lead Status usually need a custom field or tag. Assigned User arrives as an ID unless the tool resolves the name.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Sales pipeline tracking sheet</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Columns: Opportunity ID | Contact Name | Company | Pipeline | Stage | Opportunity Value | Assigned Salesperson | Created Date | Last Follow-Up | Status
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One row per opportunity. Pipeline and Stage are IDs in the API, so map names where the tool provides them. Last Follow-Up is not an opportunity field in the response read; use a custom field or a workflow step that writes a date.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Appointment tracking sheet</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Columns: Appointment ID | Contact Name | Appointment Date | Appointment Time | Calendar | Assigned Team Member | Appointment Status | Source
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One row per appointment. Which of these fields the workflow picker exposes was not verified. Split date and time only if the tool gives one timestamp, and decide on one time zone first.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Client onboarding and operations sheet</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Columns: Contact ID | Client Name | Onboarding Date | Assigned Manager | Service | Project Status | Payment Status | Next Action | Notes
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Mostly custom fields plus data entered by the team. Decide which columns GoHighLevel owns and which the team edits by hand, and keep them in separate column groups so a sync never overwrites hand-typed notes.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Healthcare and clinics:</strong> keep appointment sheets to operational fields. Do not move protected health information or other sensitive personal data into a spreadsheet without assessing privacy, access-control, contractual and regulatory requirements. A standard Google Sheet is not automatically suitable for regulated records.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Ecommerce:</strong> the store platform remains the source of truth for orders. A sheet fed from GoHighLevel is a convenience view and should be reconciled against the store.
            </p>

            {/* Section: Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Are Rows Duplicated, Missing or Not Updating?
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Symptom</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Likely cause</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to check</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.symptom}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.cause}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Security */}
            <h2 id="security" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is It Safe to Put GoHighLevel Contact Data in Google Sheets?
            </h2>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Share the sheet only with named people, never with an "anyone with the link" setting to make an integration work.</li>
              <li>Send only the columns you need. Avoid notes, health details and payment details.</li>
              <li>Keep API tokens and webhook secrets out of URLs and out of the sheet.</li>
              <li>Use a Private Integration token or OAuth token with only the scopes you need, such as contacts.readonly.</li>
              <li>Remember a sheet has no per-row permissions: anyone with access sees every row.</li>
              <li>Review who owns the connected Google account. If that person leaves, the integration can break.</li>
            </ul>

            {/* Section: When Not Enough */}
            <h2 id="when-not-enough" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Is Google Sheets Not Enough for GoHighLevel Data?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Move to a database, a reporting platform or a business application when:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Several people need to edit the same rows at the same time and conflicts matter.</li>
              <li>You need row-level permissions or an audit trail.</li>
              <li>Volume or refresh frequency pushes against Google API quotas.</li>
              <li>Reports must join data from several sources.</li>
              <li>The data is regulated or highly sensitive.</li>
              <li>The sheet has become the system of record, which was never its job.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Google documents file size ceilings in its tools (Zapier states 30 MB for triggers and 50 MB for actions) and per-minute API quotas, so a sheet that grows very large can slow or break automations.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About Syncing GoHighLevel with Google Sheets
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

            {/* Section: Start */}
            <h2 id="start" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where Should You Start?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start with one trigger, one sheet and one method. Add a Contact ID column, confirm it logs correctly, then add lookup and update. If you want help choosing a method or building a reliable integration, GHL Scale Up offers <Link href="/services/integrations" className="text-[#0E9BF0] hover:underline">integration and workflow work and a free integration audit</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Facts reflect HighLevel, Google, Zapier and Make documentation as of 13 November 2026. These products change often, so confirm labels and pricing in your accounts.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about syncing GoHighLevel with Google Sheets?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We're here to help.
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
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
                <Link href="/blog/connect-zapier-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Connect Zapier to GoHighLevel →</Link>
                <Link href="/blog/gohighlevel-calendar-booking" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Calendar & Booking Guide →</Link>
                <Link href="/blog/connect-clickup-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel and ClickUp Integration →</Link>
                <Link href="/blog/gohighlevel-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Automation →</Link>
                <Link href="/blog/gohighlevel-conversational-ai-data-storage" className="text-sm text-[#0E9BF0] hover:underline">Where Conversation AI Stores Data →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Start with one trigger, one sheet and one method.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up offers integration and workflow work and a free integration audit. If you want help choosing a method or building a reliable integration, get in touch.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author / Verification Section */}
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                Facts reflect HighLevel, Google, Zapier and Make documentation as of 13 November 2026. These products change often, so confirm labels and pricing in your accounts.
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