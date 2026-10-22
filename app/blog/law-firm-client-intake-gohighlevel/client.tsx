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
  Users,
  AlertTriangle,
  Star,
  Search,
  Briefcase,
  MessageCircle,
  Phone,
  AlertCircle,
  Facebook,
  Trophy,
  Rocket,
  Target,
  HeartHandshake,
  XCircle,
  Image as ImageIcon,
  Scale,
  FileText,
  Lock,
  UserCheck,
  Route,
  PhoneMissed,
  Bot,
  ListChecks,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function LawFirmClientIntakeClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'what-is-lead-capture',
      'why-need-organized-process',
      'how-ghl-supports',
      'how-to-capture-leads',
      'how-to-build-intake-form',
      'how-to-organize-leads',
      'how-to-route-notify',
      'missed-calls-ai',
      'step-by-step-build',
      'common-mistakes',
      'troubleshooting',
      'privacy-safeguards',
      'is-ghl-right',
      'faq',
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
      q: 'What is the difference between lead capture and client intake for a law firm?',
      a: "Lead capture gets the inquiry into your system. Client intake is the firm's review process afterward, including screening, conflict checks and acceptance."
    },
    {
      q: 'Can GoHighLevel be used as a CRM for law firms?',
      a: 'Yes, for managing inquiries and communications. It is a general CRM and is not a legal practice management system.'
    },
    {
      q: 'How can a law firm capture website inquiries in GoHighLevel?',
      a: 'With a GoHighLevel form on the site, or an external form connected through an integration or webhook. Test with a real submission.'
    },
    {
      q: 'Can GoHighLevel automate law-firm intake forms?',
      a: 'It can create or update the contact and start a workflow when a CRM form is submitted. You design the form, fields and rules.'
    },
    {
      q: 'Can GoHighLevel route leads to different intake staff?',
      a: "Yes, with workflow conditions and an Assign to User action, including a round-robin option described in HighLevel's documentation. Confirm current options in your account."
    },
    {
      q: 'Can GoHighLevel notify a team member when a new inquiry arrives?',
      a: "Yes, through the Internal Notification action by email, in-app, SMS or WhatsApp. 'Assigned User' only sends if a user is assigned."
    },
    {
      q: 'Can GoHighLevel handle missed calls from prospective clients?',
      a: 'Yes, Missed Call Text Back sends an SMS after a missed call, subject to number eligibility and A2P or toll-free registration. It does not alert staff by itself.'
    },
    {
      q: 'Can AI collect initial information for a law firm?',
      a: 'It can collect basic contact details and answer approved administrative questions where Conversation AI or Voice AI is available and configured. It must not give legal advice or decide whether to accept a matter.'
    },
    {
      q: 'Can GoHighLevel perform legal conflict checks?',
      a: "We found no such function. Conflict checks belong in the firm's own procedures and legal systems."
    },
    {
      q: 'Can GoHighLevel replace a legal practice management system?',
      a: 'No. It does not provide matter management, trust accounting, time tracking or court deadlines that we could find.'
    },
    {
      q: 'How should a law firm protect sensitive information collected through an intake form?',
      a: 'Collect the minimum, avoid sensitive facts on general forms, restrict access, keep sensitive details out of notifications, and review where data is stored and sent.'
    },
    {
      q: 'What should a law firm test before launching an automated intake workflow?',
      a: 'Valid and invalid submissions, duplicates, blank fields, assignment and notification, missed calls, after-hours behavior, AI answers and escalations, and failed or repeated runs.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-lead-capture', title: 'What Is Lead Capture and Client Intake for a Law Firm?' },
    { id: 'why-need-organized-process', title: 'Why Law Firms Need an Organized Lead Capture Process' },
    { id: 'how-ghl-supports', title: 'How GoHighLevel Can Support Law Firm Lead Capture' },
    { id: 'how-to-capture-leads', title: 'How to Capture Law-Firm Leads From Websites, Forms, and Other Channels' },
    { id: 'how-to-build-intake-form', title: 'How to Build an Effective Law Firm Intake Form' },
    { id: 'how-to-organize-leads', title: 'How to Organize Law-Firm Leads in GoHighLevel' },
    { id: 'how-to-route-notify', title: 'How to Route New Inquiries and Notify the Intake Team' },
    { id: 'missed-calls-ai', title: 'How to Handle Missed Calls and Initial AI Inquiries' },
    { id: 'step-by-step-build', title: 'Step-by-Step: Build a Complete Lead Capture and Intake Workflow' },
    { id: 'common-mistakes', title: 'Common Lead Capture and Intake Mistakes' },
    { id: 'troubleshooting', title: 'Troubleshooting GoHighLevel Lead Capture and Intake' },
    { id: 'privacy-safeguards', title: 'Privacy, Confidentiality, and Legal Intake Safeguards' },
    { id: 'is-ghl-right', title: "Is GoHighLevel Right for Your Law Firm's Intake Process?" },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const captureSources = [
    {
      source: 'GoHighLevel form on your site',
      enters: 'Embedded form',
      contact: 'Yes, per your deduplication setting',
      recorded: 'Set a hidden field or tag on the form',
      missing: 'Required fields block submission; optional fields stay blank',
      test: 'Submit on desktop and mobile; check the contact',
    },
    {
      source: 'Landing page or funnel',
      enters: 'GoHighLevel pages with a form',
      contact: 'Same',
      recorded: 'Same',
      missing: 'Same',
      test: 'Same',
    },
    {
      source: 'Advertising lead forms',
      enters: "Depends on the platform's connection to GoHighLevel",
      contact: 'Only if connected',
      recorded: 'Platform-dependent',
      missing: 'Fields may arrive empty',
      test: 'Run a test lead; check mapping',
    },
    {
      source: 'Missed phone call',
      enters: 'Missed Call Text Back needs the contact and number recognized',
      contact: 'Created if the caller is new, based on the call',
      recorded: 'Source = phone',
      missing: 'No name or email',
      test: 'Call from a number not in the system',
    },
    {
      source: 'Messaging channels (supported ones)',
      enters: 'Conversation inbox, if the channel is connected',
      contact: 'Varies by channel',
      recorded: 'Channel is the source',
      missing: 'Often only a name',
      test: 'Message from a test account',
    },
    {
      source: 'Staff manual entry',
      enters: 'Add contact',
      contact: 'Yes',
      recorded: 'Staff must set the source',
      missing: 'Depends on staff',
      test: 'Provide a short entry checklist',
    },
    {
      source: 'External form tools or Zapier',
      enters: 'Integration or webhook',
      contact: 'Depends on mapping',
      recorded: 'Mapped field',
      missing: 'Fields may fail to map',
      test: 'Submit a test; inspect fields',
    },
  ];

  const intakeFields = [
    { field: 'Name', why: 'To address and identify the inquiry', required: 'Usually' },
    { field: 'Phone or email', why: 'To respond', required: 'At least one' },
    { field: 'Preferred contact method', why: 'To follow their preference', required: 'Optional' },
    { field: 'Broad practice area of interest', why: 'For routing', required: 'Usually, as a dropdown' },
    { field: 'General inquiry category', why: 'For routing and screening out services you do not offer', required: 'Optional' },
    { field: 'Best time to reach you', why: 'To plan a response', required: 'Optional' },
    { field: 'Short description', why: 'Context for review, kept brief', required: 'Optional' },
    { field: 'Consent checkbox', why: 'Where your jurisdiction or practice requires it', required: 'As your counsel advises' },
  ];

  const ghlPieces = [
    { piece: 'Contact', what: 'A record of one person: name, phone, email, notes, history', role: 'Every inquiry becomes or updates a contact' },
    { piece: 'Custom field', what: "An extra data field you define (for example 'Practice area of interest')", role: 'Stores the details your intake form collects' },
    { piece: 'Tag', what: "A label on a contact (for example 'family-law-inquiry')", role: 'Quick filtering and routing conditions' },
    { piece: 'Opportunity and pipeline', what: 'An opportunity represents a potential engagement; a pipeline is a set of stages it moves through', role: 'Shows where each prospective client is in review' },
    { piece: 'Form', what: 'A web form you build and embed', role: 'The main capture point' },
    { piece: 'Workflow', what: 'An automation: a trigger (what starts it) plus actions (what it does)', role: 'Creates records, assigns staff, notifies the team' },
    { piece: 'Internal notification', what: 'A message to your own staff, not to the contact', role: 'Alerts the intake team' },
    { piece: 'Missed Call Text Back, Conversation AI, Voice AI', what: 'Phone and messaging features', role: 'Handle after-hours and unanswered contact' },
  ];

  const infoBelongs = [
    { info: 'Name, phone, email, preferred contact', where: 'Contact record' },
    { info: 'Practice area of interest, inquiry category', where: 'Custom fields on the contact; tag for routing' },
    { info: 'Lead source', where: 'Source field or tag on the contact' },
    { info: 'Where the inquiry is in review', where: 'Pipeline stage on the opportunity' },
    { info: 'Who is responsible', where: 'Assigned user on the contact and opportunity' },
    { info: 'Case facts, conflict results, engagement', where: 'Your legal system, not GoHighLevel' },
  ];

  const terms = [
    { term: 'Inquiry', meaning: 'Someone has contacted the firm', where: 'GoHighLevel contact record' },
    { term: 'Prospective client', meaning: 'An inquiry the firm is reviewing', where: 'GoHighLevel opportunity in an intake pipeline' },
    { term: 'Accepted client', meaning: 'The firm has completed its acceptance procedures', where: 'Your legal system, with the GoHighLevel record updated' },
    { term: 'Legal matter', meaning: 'The work for an engaged client', where: 'Your legal practice management system, not GoHighLevel' },
  ];

  const phase5Table = [
    { situation: 'Prospect calls and the firm answers', what: 'Staff enter or confirm the contact; no automatic message', config: 'Manual entry process' },
    { situation: 'Prospect calls and nobody answers', what: 'A text-back is sent; a workflow creates the contact and notifies staff', config: 'Missed Call Text Back plus an intake workflow' },
    { situation: 'Prospect submits the website form', what: 'Contact, opportunity, assignment and notification', config: 'Form Submitted workflow' },
    { situation: 'Prospect asks a general administrative question', what: 'AI answers from approved content', config: 'Conversation AI or Voice AI with a knowledge base' },
    { situation: 'Prospect asks for a person', what: 'A staff member is alerted; the AI follows your escalation rule', config: 'Human Handover or a workflow alert (separate settings; test)' },
    { situation: 'AI cannot answer', what: 'The AI says it will pass the question on and alerts staff', config: 'Bot Goals email notification or workflow' },
    { situation: 'Incomplete information', what: "The inquiry is tagged 'awaiting-information' and staff are told", config: 'Workflow condition' },
  ];

  const testMatrix = [
    { n: 1, test: 'Valid form submission', expected: 'Contact, fields, source, opportunity, assignment, one notification', inspect: "Contact record; workflow execution history; the assignee's alerts", failure: "Missing record: check the form's trigger and publish state. Missing fields: check field linking" },
    { n: 2, test: 'Optional fields blank', expected: 'Record is still created; no routing errors', inspect: 'Contact; workflow path taken', failure: 'Wrong branch: add a default path' },
    { n: 3, test: 'Duplicate submission', expected: 'Existing contact updated, not duplicated; no second notification unless intended', inspect: 'Contact list; deduplication setting; execution history', failure: 'Two contacts: check match field. Two alerts: add a tag guard' },
    { n: 4, test: 'Missing required field', expected: 'Form refuses to submit', inspect: 'Form behavior', failure: 'Submission accepted: set the field required' },
    { n: 5, test: 'Needs assignment', expected: 'Assigned to a user, who is notified', inspect: "Contact's assigned user; notification", failure: 'Unassigned: Assigned User notifications skip when no user is assigned' },
    { n: 6, test: 'Does not fit routing rules', expected: 'Goes to a default owner', inspect: 'Execution history path', failure: 'Sits unassigned: add a default branch' },
    { n: 7, test: 'Unanswered call', expected: 'Text-back sent; contact created; staff alerted', inspect: 'Conversation thread; execution history', failure: 'No text: check enablement, number eligibility and registration' },
    { n: 8, test: 'After-hours inquiry', expected: 'Same as above; message says when staff reply', inspect: 'Message content', failure: 'Message promises hours you do not keep: fix wording' },
    { n: 9, test: 'AI question within knowledge', expected: 'Accurate answer', inspect: 'Conversation', failure: 'Wrong answer: fix the knowledge base' },
    { n: 10, test: 'AI question it cannot answer', expected: 'Says it cannot, alerts staff', inspect: 'Conversation; alert', failure: 'Invents an answer: tighten instructions and re-test' },
    { n: 11, test: 'Request for a person', expected: 'Staff alerted; behavior matches your rule', inspect: 'Alert; bot status', failure: 'Bot stops unexpectedly: see the handover note' },
    { n: 12, test: 'Workflow failure or repeat run', expected: 'Failure visible; no duplicates', inspect: 'Execution history', failure: 'Repeated runs: add re-entry guard; failures: fix the failing action' },
  ];

  const mistakes = [
    'Asking for the whole story on the first form.',
    'Not setting a default owner, so unmatched inquiries are never seen.',
    'Using many tags where fields would do.',
    'Letting the bot and staff both answer without a rule on who leads.',
    'Notifying everyone, so alerts are ignored.',
    'Putting case details into SMS or email notifications.',
    'Going live without testing duplicates, blank fields and failed sends.',
    'Treating a pipeline stage as acceptance of a client.',
  ];

  const troubleshooting = [
    { problem: 'Form submissions not appearing', causes: "Form not the one your page embeds; external form without an integration; browser blocker", inspect: "The form's submissions list; contact search by email", fix: 'Submit a test; if nothing appears, check the embed code and whether an integration or webhook is required for non-CRM forms' },
    { problem: 'Contacts duplicated', causes: 'Allow Duplicate Contact on; match field blank in submissions; CSV not the cause (CSV merges)', inspect: 'Settings > Business Profile Settings > Contact Deduplication Preferences', fix: 'Set to off, match on email or phone, merge existing duplicates carefully (permanent, 10 per batch)' },
    { problem: 'Wrong routing', causes: 'Practice area field blank or differently labeled; no default branch', inspect: 'Execution history path', fix: 'Fix the field value or condition; add a default branch' },
    { problem: 'Notifications do not arrive', causes: "Assigned User not set (step skipped); user's phone or email missing; user's DND; notification placed before assignment", inspect: 'Workflow history; user profile', fix: "Assign first, then notify; check the user's contact details and DND (documented troubleshooting)" },
    { problem: 'Workflow does not trigger', causes: "Unpublished; wrong 'Form Is' filter; submission from a different form", inspect: 'Workflow status; trigger filter; form name', fix: 'Publish; correct filter. See Form Submitted workflow not triggering' },
    { problem: 'Workflow triggers more than once', causes: 'Form Submitted fires on every submission; same trigger in two workflows; re-entry allowed', inspect: 'Execution history; other workflows with the same trigger', fix: 'Add tag guard or condition; remove duplicates. See workflow re-entry' },
    { problem: 'Custom fields not populated', causes: 'Field not linked to the form; field names differ', inspect: 'Form field mapping; contact record', fix: 'Link the field; resubmit a test' },
    { problem: 'Lead source missing', causes: 'No hidden field or tag; staff entry skipped it', inspect: 'Contact record', fix: 'Add a hidden source field to the form; set a required field for manual entry' },
    { problem: 'Missed-call response not sent', causes: 'Feature not enabled; sending number not SMS-eligible or unregistered; contact on DND', inspect: 'Phone System settings; contact conversation (failures are logged with a reason)', fix: 'Enable; register A2P or verify toll-free; check DND' },
    { problem: 'AI collects incomplete or inaccurate data', causes: 'Contact Info fills only empty fields; unclear questions; no confirmation', inspect: 'Conversation transcript; mapped fields', fix: 'Rewrite questions; map fields; test; do not rely on AI-collected data without review' },
    { problem: 'AI answers what it should escalate', causes: 'Instructions vague; knowledge base overbroad', inspect: 'Conversation transcript', fix: 'Add explicit exclusions and escalation rules; re-test; consider a handover for legal topics' },
    { problem: 'Staff cannot tell what needs review', causes: 'No status stage or tag; filters not saved', inspect: 'Pipeline board; smart lists', fix: 'Create a New Inquiry stage and a saved view; notify on creation' },
    { problem: 'Integration data inconsistent', causes: 'Mapping differences; missing fields from source; delays', inspect: 'Integration logs; sample submissions', fix: 'Compare each source field with the CRM field; fix mapping; add an alert for failed deliveries' },
  ];

  const fitTable = [
    { ghl: 'You want one place for inquiries from forms, calls and messages', other: 'You want legal-specific intake with built-in conflict checks and engagement documents' },
    { ghl: 'You have someone who can configure and maintain workflows', other: 'Nobody will own the configuration' },
    { ghl: 'You need custom routing, tags and automation', other: 'Your intake is low volume and simple' },
    { ghl: 'You already use a separate legal practice management system', other: 'You expect GoHighLevel to hold matters, deadlines, billing or trust accounting' },
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
          <span className="text-[#1A2236] font-medium">Law Firm Lead Capture and Client Intake</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Law Firms</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Lead Capture</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Client Intake</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How Law Firms Can Capture More Leads and Streamline Client Intake with GoHighLevel
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Facts checked against HighLevel documentation, 22 October 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              A law firm can use GoHighLevel to bring inquiries from forms, landing pages, missed calls and supported messaging channels into one contact record, collect a limited set of initial details, tag and route each inquiry, alert the right staff member, and show every inquiry's status in a pipeline. It does this only if the forms, fields, workflows and routing rules are designed and configured first, and only up to the point where a person reviews the inquiry. GoHighLevel does not run conflict checks, give legal advice, decide whether the firm accepts a matter, or replace legal practice management software.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Disclosure: GHL Scale Up implements GoHighLevel. This guide relies on HighLevel's help articles, notes where they are dated or incomplete, and says where GoHighLevel is not the right tool. We have not tested the example in this article, so treat the test matrix as a plan to run in your own account.</em>
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
              href="#step-by-step-build"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to the Build
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
                5+ years GHL experience · 200+ systems built globally. We implement GoHighLevel for law firms and other service businesses.
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

            {/* Intro paragraph */}
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A prospective client fills in your website form on a Friday evening. Another calls while the office is closed. A third messages through a social page. Each lands in a different place: an email inbox, a voicemail box, a direct message. By Monday, someone has retyped two of them into a spreadsheet, one has been answered twice, and nobody can say who is handling the third. None of this is a legal problem. It is an intake process problem, and it is common in firms that grew without designing one.
            </p>

            {/* Section: What Is Lead Capture */}
            <h2 id="what-is-lead-capture" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is Lead Capture and Client Intake for a Law Firm?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              They are two stages, and mixing them up causes most of the confusion.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>
                <strong className="text-[#1A2236]">Lead capture</strong> is getting the inquiry into your system: the form submission, the missed call, the message. The output is a contact record with a name, a way to reach the person, and the source.
              </li>
              <li>
                <strong className="text-[#1A2236]">Client intake</strong> is the firm's process after that: reviewing what was submitted, asking for missing information, running conflict checks, deciding whether to proceed, and, if so, moving to an engagement. GoHighLevel can organize the early part of this. The decisions belong to the firm.
              </li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This guide uses four terms consistently:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Term</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Meaning</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where it lives</th>
                  </tr>
                </thead>
                <tbody>
                  {terms.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.term}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.meaning}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Why Need Organized Process */}
            <h2 id="why-need-organized-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Law Firms Need an Organized Lead Capture Process
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Without a defined process, firms tend to see the same issues: inquiries scattered across channels; contact details recorded inconsistently; staff copying details between systems; missing information; no consistent way to see where a lead came from; duplicate contacts; and no clear view of which inquiries have been reviewed. Not every firm has all of these, and software does not fix them by itself. It helps only when someone decides what information to collect, who reviews it, and what happens next.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Write those decisions down first. The rest of this guide assumes you have.
            </p>


                        <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                          <div className="relative w-full h-auto bg-[#F8F9FB]">
                            <Image
                              src="/blog/law-firm-client-intake-gohighlevel.png"
                              alt="Where to Hire GoHighLevel Experts: 6 hiring channels comparison, freelancer vs agency decision matrix, and vetting checklist"
                              width={1200}
                              height={500}
                              className="w-full h-auto object-cover"
                              priority
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                          </div>
                          <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                            <ImageIcon className="w-3.5 h-3.5" />
                            <span>Where to Hire GoHighLevel Experts: 6 hiring channels comparison, freelancer vs agency decision matrix, and vetting checklist</span>
                          </div>
                        </div>
            

            {/* Section: How GHL Supports */}
            <h2 id="how-ghl-supports" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Can Support Law Firm Lead Capture
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel (also called HighLevel) is a general-purpose CRM and marketing automation platform, not a legal product. Here are the pieces this guide uses, in plain terms:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Piece</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it is</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Role in intake</th>
                  </tr>
                </thead>
                <tbody>
                  {ghlPieces.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.piece}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.what}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A pipeline for prospective clients is not a legal matter management system. It tracks the inquiry's review status. It does not hold deadlines, time entries, trust accounting or court dates. Detailed comparison of legal software and costs sits in a separate guide.
            </p>

            {/* Section: How to Capture Leads */}
            <h2 id="how-to-capture-leads" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Capture Law-Firm Leads From Websites, Forms, and Other Channels
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each source enters the system differently. Do not assume a channel connects automatically.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Source</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">How it enters</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Contact created or updated</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Source recorded</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">If information is missing</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Test before launch</th>
                  </tr>
                </thead>
                <tbody>
                  {captureSources.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.source}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.enters}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.contact}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.recorded}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.missing}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.test}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's Form Submitted trigger documentation covers forms built in the CRM. If you use a form from another tool, it says you may need an integration or webhook to capture submissions. Before relying on any integration, test it with a real submission and check which fields arrive.
            </p>


            

            {/* Section: How to Build Intake Form */}
            <h2 id="how-to-build-intake-form" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Build an Effective Law Firm Intake Form
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An intake form's job is to start the process, not to take a complete statement of the case. Collect what you need to contact the person and decide who should review the inquiry. Ask for more only after your own procedures say it is appropriate.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Possible field</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Required?</th>
                  </tr>
                </thead>
                <tbody>
                  {intakeFields.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.field}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.required}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are examples, not a required list. Your fields should follow your practice and intake policy.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Design rules</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Use clear labels and a dropdown where a category is enough.</li>
              <li>Show follow-up questions only where the form supports conditional logic. Confirm in your form builder.</li>
              <li>Make it work on a phone; test it on one.</li>
              <li>Write a confirmation message that says the inquiry was received, that submitting it does not create an attorney-client relationship, and what happens next. Have your counsel approve that wording.</li>
              <li>Tell visitors not to include confidential details in the description field unless the firm has decided it needs them at this stage.</li>
              <li>Do not ask for sensitive facts (medical information, criminal allegations, identification numbers) on a general marketing form without a deliberate decision and safeguards. A long case history in a web form also exposes the person to risk before the firm has a confidentiality process in place.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The NYSBA article on intake recommends having clients complete paperwork before a consultation but not email sensitive items such as Social Security numbers. That is a useful principle: collect more detail later, in a controlled step.
            </p>

            {/* Section: How to Organize Leads */}
            <h2 id="how-to-organize-leads" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Organize Law-Firm Leads in GoHighLevel
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-6 mb-3">Contact, custom fields and tags</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Create custom fields for the few details you collect, such as 'Practice area' and 'Preferred contact method', and link them to the form so submissions fill them (the Form Submitted documentation notes that custom fields must be linked to the form). Use tags sparingly: one for the practice area, one for the source if you do not have a source field, one for status flags such as 'needs-review'. Tags are good for filtering and workflow conditions. Anything staff must analyze belongs in a field.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Opportunities and pipeline</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An <strong className="text-[#1A2236]">opportunity</strong> represents a potential engagement. Create one when an inquiry needs review, so the team can see it on a board. An illustrative pipeline, not a universal legal workflow:
            </p>
            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 mb-4">
              <p className="text-sm text-[#1A2236] font-medium">
                New Inquiry → Intake Review → Awaiting Information → Consultation Requested → Accepted for Further Review → Closed or Not Proceeding
              </p>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              'Accepted for Further Review' means the intake team is done and a lawyer or the conflict process takes over. It does not mean the firm has accepted the person as a client. Rename the stages to fit your procedure.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Information</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where it belongs</th>
                  </tr>
                </thead>
                <tbody>
                  {infoBelongs.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.info}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Avoiding duplicates</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In HighLevel, Settings &gt; Business Profile Settings &gt; Contact Deduplication Preferences controls whether new submissions create a new contact or update an existing one. 'Allow Duplicate Contact' set to off means matching details update the existing contact; you choose whether to match on email (the default) or phone, and optionally a second field. This applies to forms, Zapier and Facebook and Instagram Messenger, and the documentation does not address workflows. CSV imports always merge by email or phone. If duplicates already exist, an admin can use Manage Duplicates from the Contacts three-dot menu; merging is permanent and limited to 10 records per batch, so review before confirming.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A repeat submission can also create a second opportunity. Check your workflow's opportunity action for a way to update an existing opportunity instead (the action page was not read for this guide).
            </p>

            {/* Section: How to Route and Notify */}
            <h2 id="how-to-route-notify" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Route New Inquiries and Notify the Intake Team
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In plain English first:
            </p>
            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 mb-4">
              <p className="text-sm text-[#1A2236] font-medium">
                New inquiry arrives → check the practice area and completeness → assign it to the right person or rotation → notify only that person → record the status.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Building it with workflows</h3>
            <div className="space-y-3 mb-6">
              {[
                'Create a workflow under Automations > Workflows. Name it clearly, for example \'Intake: new website inquiry\'.',
                'Add the trigger Form Submitted and set the Form Is filter to your intake form. Note that this fires on every submission, including repeats.',
                'Add conditions for routing (for example, practice area equals Family Law). Add a branch for inquiries that do not match any rule, so they reach a default person and do not sit unassigned.',
                "Add the Assign to User action. For rotation, HighLevel's round-robin article describes selecting users and setting split traffic to equally. That article is from February 2024, so check the current action's options.",
                "Add an Internal Notification after the assignment, addressed to the Assigned User. HighLevel notes that 'Assigned User' only sends when the contact has an assigned user; otherwise the step is skipped and the workflow continues, which is how leads end up unassigned and unnoticed. Test the no-assignment case.",
                "Add a tag (for example 'intake-new') and, if you use the pipeline, a Create/Update Opportunity action to place the inquiry in New Inquiry.",
                'Add a guard against repeats: a condition that skips the workflow if the tag already exists, or the workflow\'s re-entry setting. See <a href="https://www.ghlscaleup.com/blog/gohighlevel-workflow-reentry" class="text-[#0E9BF0] hover:underline">workflow re-entry</a>.',
                'Publish. Then run the tests in the matrix below.',
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed" dangerouslySetInnerHTML={{ __html: step }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">A notification that contains only what staff need</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Staff alerts travel by email, SMS or in-app messages, which are not always secure. Include the minimum:
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4">
              <p className="text-sm text-[#1A2236] italic">
                New inquiry: Jordan P., family law category, prefers phone. Source: website form. Open in GoHighLevel to review.
              </p>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Leave the free-text description out of the message and let staff open the record. Email, In-App, SMS and WhatsApp are the channels HighLevel documents for internal notifications; each user can receive up to 500 notifications per five minutes, and a user listed in more than one recipient category receives only one. To avoid alert fatigue, notify the assigned user only and send an escalation (for example, to a supervisor) only if the inquiry remains in New Inquiry after your response window.
            </p>

            {/* Section: Missed Calls and AI */}
            <h2 id="missed-calls-ai" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Handle Missed Calls and Initial AI Inquiries
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-6 mb-3">Missed Call Text Back</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When someone calls and nobody answers, they may call the next firm. Missed Call Text Back sends an automatic text so the caller knows the firm received the call. In HighLevel it is under Settings &gt; Phone System &gt; Voice &gt; Voicemail &amp; Missed Call Text Back &gt; Missed Call Text Back. Tick Enable Missed Call Text Back, choose Customize, write the message, send a test and save (help article modified 7 September 2026).
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Wording:</strong> name the firm, say you received the missed call, and say a team member will respond. Do not give legal information, and do not promise a response time you cannot meet.</li>
              <li><strong className="text-[#1A2236]">Requirements:</strong> the sending number must be able to send SMS; local US numbers need A2P 10DLC registration and toll-free numbers need verification. See <Link href="https://www.ghlscaleup.com/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>.</li>
              <li><strong className="text-[#1A2236]">Repeat calls:</strong> the documentation says every missed call sends a message, including repeats. To reduce repeats it suggests a workflow wait of about 20 minutes or tag filters.</li>
              <li><strong className="text-[#1A2236]">After hours:</strong> the text is sent whenever a call is missed. Say in the message when staff will reply.</li>
              <li><strong className="text-[#1A2236]">Routing:</strong> the text alone does not alert staff. Build a workflow that creates or updates the contact, assigns it and notifies the intake team, the same way as for a form.</li>
              <li><strong className="text-[#1A2236]">Limits:</strong> SMS only; merge fields such as the contact's name fill only for recognized contacts; respect the contact's do-not-disturb and consent status.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A text-back does not guarantee the caller will become a lead or book anything. Longer follow-up sequences and consultation reminders are covered in a separate guide.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">AI-assisted initial intake</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two features apply. <strong className="text-[#1A2236]">Conversation AI</strong> answers text-based conversations; <strong className="text-[#1A2236]">Voice AI</strong> answers inbound calls. HighLevel documents that Voice AI can answer after hours, collect information and create or update contacts, transfer to a human on conditions you set, trigger workflows, and answer from a knowledge base; it works only with LC Phone or Twilio numbers (help article modified 17 September 2026). Conversation AI's Bot Goals can collect missing contact details into chosen fields, though that action is meant for empty fields and not to overwrite existing values, and can trigger a published workflow or hand over to a human. Availability varies by account and release status.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What AI can reasonably do at intake: answer approved administrative questions (hours, office location, which areas you handle), collect basic contact details, ask a few predefined screening questions, note the inquiry type, and tell the person what happens next. What it must not do: give legal advice, assess whether someone has a viable case, check conflicts, or decide whether the firm accepts the matter. Those are decisions for a lawyer and the firm's procedures.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Give the AI approved content only, tell it in plain terms what it may not say, test it with questions it should and should not answer, and define when it should alert a person. Whether the bot keeps replying after it triggers a workflow is not stated in HighLevel's documentation, so test it. See <Link href="https://www.ghlscaleup.com/blog/gohighlevel-ai-employee" className="text-[#0E9BF0] hover:underline">our AI Employee guide</Link> and <Link href="https://www.ghlscaleup.com/blog/gohighlevel-conversational-ai-data-storage" className="text-[#0E9BF0] hover:underline">how Conversation AI data is stored</Link>.
            </p>

            {/* Section: Step-by-Step Build */}
            <h2 id="step-by-step-build" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Step-by-Step: Build a Complete Lead Capture and Intake Workflow
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The scenario: a small firm receives inquiries through its website. It wants every inquiry in one system with basic contact information and a general service category, an alert to the intake team, and a clear record for review. It also wants to handle missed calls and use AI for administrative questions, without letting AI make legal decisions.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Phase 1: Map the current intake process</h3>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>List every way inquiries reach you.</li>
              <li>List what you collect now and what you actually use.</li>
              <li>Name who reviews inquiries and who covers when they are away.</li>
              <li>List the categories you use to route inquiries.</li>
              <li>Mark the steps that must stay human: screening, conflict checks, acceptance.</li>
              <li>Write down the problems you want to solve.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Phase 2: Create the lead-capture mechanism</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Build or choose the form (or use the one on your website, if you have one and it connects), select the fields from the table above, mark required and optional ones, write the confirmation message, and connect the form to a workflow trigger. If the firm has no website, a GoHighLevel landing page can host the form; website building is a separate topic. Capture the source with a hidden field or tag. Submit a test on desktop and mobile, then open the contact in the live account to confirm it exists with the right fields.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Phase 3: Organize contact and intake data</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Create the custom fields and tags in the table earlier. Create an intake pipeline with the stages you chose. Confirm deduplication preferences.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Phase 4: Configure routing and internal notification</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Build the workflow described above: trigger, routing conditions, default branch, assignment, notification, tag, opportunity, repeat guard. Exact options vary by account; use the labels in your own interface.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Phase 5: Handle phone inquiries and initial AI interactions</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Situation</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What should happen</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Separate configuration needed</th>
                  </tr>
                </thead>
                <tbody>
                  {phase5Table.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.situation}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.what}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.config}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Phase 6: Test the complete process</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Run every test with test contacts, not real prospects, and write down the result. Do not mark the system as working until each row has been checked in a live account.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">#</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Test</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Expected behavior</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Inspect</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Failure signs and fixes</th>
                  </tr>
                </thead>
                <tbody>
                  {testMatrix.map((item) => (
                    <tr key={item.n} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.n}</td>
                      <td className="p-3 text-[#1A2236] align-top">{item.test}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.expected}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.inspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.failure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Lead Capture and Intake Mistakes
            </h2>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {mistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section: Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Troubleshooting GoHighLevel Lead Capture and Intake
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Causes are listed from most to least likely where the documentation supports a ranking. Use the diagnostic column to tell them apart.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Problem</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Likely causes</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Inspect</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Diagnostic and fix</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshooting.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.problem}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.causes}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.inspect}</td>
                      <td className="p-3 text-[#5C6880] align-top" dangerouslySetInnerHTML={{
                        __html: item.fix
                          .replace('See Form Submitted workflow not triggering', 'See <a href="https://www.ghlscaleup.com/blog/gohighlevel-form-submitted-workflow-not-triggering" class="text-[#0E9BF0] hover:underline">Form Submitted workflow not triggering</a>')
                          .replace('See workflow re-entry', 'See <a href="https://www.ghlscaleup.com/blog/gohighlevel-workflow-reentry" class="text-[#0E9BF0] hover:underline">workflow re-entry</a>')
                      }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Privacy Safeguards */}
            <h2 id="privacy-safeguards" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Privacy, Confidentiality, and Legal Intake Safeguards
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Intake for a law firm differs from ordinary lead capture because the information may be confidential even before an engagement. These points apply in general. Your own jurisdiction's rules govern, and this is not legal advice.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880]">
              {[
                { title: 'Intake is not legal advice.', body: 'The system collects information and sends administrative messages. It does not analyze a person\'s legal position.' },
                { title: 'Intake is not conflict checking.', body: 'Collecting a name and a brief inquiry does not show the firm can act. Run your own conflict procedures before proceeding. We found no GoHighLevel function that checks conflicts.' },
                { title: 'A lead is not a client.', body: 'Keep the four terms above distinct in your fields, stage names and messages, and avoid wording that implies a lawyer-client relationship exists.' },
                { title: 'Collect only what you need,', body: 'at the stage you need it. Avoid sensitive facts on general forms.' },
                { title: 'Limit access.', body: 'Give staff only the access their role needs, and consider whether SMS and email alerts expose details.' },
                { title: 'Check retention and integrations.', body: 'Know where inquiry data is stored and what each connected tool receives.' },
                { title: 'Consent and communications.', body: 'Where forms, SMS, email and automated messages are used, consider consent, privacy, marketing and professional rules in your jurisdiction, and the carrier rules for SMS.' },
                { title: 'Human oversight.', body: 'Staff must review inquiries and make decisions. AI must not accept matters, give legal advice or decide viability.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1A2236]">{item.title}</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>

            {/* Section: Is GHL Right */}
            <h2 id="is-ghl-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Right for Your Law Firm's Intake Process?
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">GoHighLevel is a reasonable fit when</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Another approach may fit better when</th>
                  </tr>
                </thead>
                <tbody>
                  {fitTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#5C6880] align-top">{item.ghl}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Dedicated legal intake software offers legal-specific structure; a general CRM offers flexibility and takes more building. A full comparison of platforms and costs belongs in a separate evaluation.
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

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">Conclusion</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Build the intake process on paper first: sources, fields, owners, stages and the points where a person must decide. Then configure one form, one workflow and one pipeline, test them with the matrix above, and expand only when they work. Keep the system's job narrow: capture, organize, route and alert. Keep conflict checks, acceptance and legal judgment with the firm.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you want help designing or building this, GHL Scale Up works on CRM setup and workflow automation. You can <Link href="https://www.ghlscaleup.com/services/crm-setup" className="text-[#0E9BF0] hover:underline">read about our CRM setup service</Link> or <Link href="https://www.ghlscaleup.com/contact" className="text-[#0E9BF0] hover:underline">get in touch</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Official documentation: <a href="https://help.gohighlevel.com/support/solutions/articles/155000002550" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Form Submitted trigger</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/48001181714" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Contact Deduplication Preferences</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000003202" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Internal Notification action</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/48001239140" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Missed Call Text Back</a> and <a href="https://help.gohighlevel.com/support/solutions/articles/155000003911" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Voice AI Agents Overview</a>.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about law firm lead capture and client intake in GoHighLevel?</strong>
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
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry Explained →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide →</Link>
                <Link href="/blog/gohighlevel-ai-employee" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Employee Guide →</Link>
                <Link href="/blog/gohighlevel-conversational-ai-data-storage" className="text-sm text-[#0E9BF0] hover:underline">Does GoHighLevel Conversation AI Save Data to Your CRM? →</Link>
                <Link href="/blog/gohighlevel-form-submitted-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Form Submitted Workflow Not Triggering →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Build the intake process on paper first. Then configure it with help.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up works on CRM setup and workflow automation. If you want help designing or building a law firm intake workflow in GoHighLevel, get in touch.
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
                Facts checked against HighLevel documentation, 23 October 2026. Interfaces and plans change; confirm labels in your own account. No HighLevel account was available for testing; the test matrix in this article is a plan, and no workflow is marked as tested. This article relies on HighLevel's help articles, notes where they are dated or incomplete, and says where GoHighLevel is not the right tool.
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