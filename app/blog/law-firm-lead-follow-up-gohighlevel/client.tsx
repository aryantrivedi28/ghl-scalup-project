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
  Users,
  AlertTriangle,
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Scale,
  PhoneMissed,
  CalendarClock,
  Bot,
  ListChecks,
  Route,
  BarChart3,
  HeartHandshake,
  Lock,
  UserCheck,
  Timer,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function LawFirmLeadFollowUpClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'introduction',
      'why-lose-clients',
      'better-process',
      'recover-missed-calls',
      'automate-follow-up',
      'move-toward-booking',
      'reduce-no-shows',
      'where-ai-helps',
      'keep-organized',
      'step-by-step',
      'test-troubleshoot',
      'measure-performance',
      'common-mistakes',
      'legal-safeguards',
      'faq',
      'conclusion',
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
      q: 'How quickly should a law firm follow up with a new inquiry?',
      a: 'There is no universal rule. The Hennessey study found a median of 13 minutes among firms that responded, but that is a description, not a standard. Decide what your team can reliably achieve and automate an acknowledgment.'
    },
    {
      q: 'Can GoHighLevel text back a caller when nobody answers?',
      a: 'Yes, with Missed Call Text Back, subject to an SMS-eligible and registered number. It does not alert staff by itself.'
    },
    {
      q: 'How do I stop follow-up messages when someone replies?',
      a: "Turn on Stop on Response for the workflow, and add checks for staff messages and bookings. Stop on Response covers replies to that workflow's messages."
    },
    {
      q: 'What happens if a prospect reschedules?',
      a: 'HighLevel treats a rescheduled appointment as a new one and the contact re-enters from the beginning of an appointment-based workflow. Plan for that.'
    },
    {
      q: 'Will reminders stop if an appointment is cancelled?',
      a: 'Calendar notifications are sent on cancellation, but you should test that reminders stop. Do not assume.'
    },
    {
      q: 'Can AI follow up with leads for a law firm?',
      a: 'It can handle administrative steps in configured channels. It should not give legal advice or decide acceptance, and its behavior needs testing.'
    },
    {
      q: 'Does GoHighLevel guarantee compliance for text messages?',
      a: 'No. Compliance depends on your jurisdiction, consent practices and configuration.'
    },
    {
      q: 'Which metrics should a law firm track?',
      a: 'First-response time, contact rate, booking rate, show rate and no-show rate, defined consistently.'
    },
    {
      q: 'Does this replace my intake staff?',
      a: 'No. It handles acknowledgment and reminders. People review inquiries and make decisions.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'introduction', title: 'Introduction: The Problem and the Short Answer' },
    { id: 'why-lose-clients', title: 'Why Law Firms Lose Potential Clients After an Inquiry' },
    { id: 'better-process', title: 'What a Better Law Firm Follow-Up Process Looks Like' },
    { id: 'recover-missed-calls', title: 'How to Recover Missed Calls' },
    { id: 'automate-follow-up', title: 'How to Automate Follow-Up With Prospective Clients' },
    { id: 'move-toward-booking', title: 'How to Move Prospective Clients Toward Booked Consultations' },
    { id: 'reduce-no-shows', title: 'How to Reduce Consultation No-Shows' },
    { id: 'where-ai-helps', title: 'Where AI Can Help, and Where It Should Not Be Used' },
    { id: 'keep-organized', title: 'How to Keep the Follow-Up Process Organized' },
    { id: 'step-by-step', title: 'Step-by-Step Implementation Example' },
    { id: 'test-troubleshoot', title: 'How to Test and Troubleshoot the Workflows' },
    { id: 'measure-performance', title: 'How to Measure Follow-Up and Consultation Performance' },
    { id: 'common-mistakes', title: 'Common Implementation Mistakes' },
    { id: 'legal-safeguards', title: 'Legal, Privacy, and Professional Safeguards' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'conclusion', title: 'Conclusion' },
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
          <span className="text-[#1A2236] font-medium">Law Firm Lead Follow-Up With GoHighLevel</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Lead Follow-Up</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Consultation Booking</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Law Firm Lead Follow-Up With GoHighLevel: Inquiry to Consultation
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Facts checked against HighLevel documentation, 23 October 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              A law firm can use GoHighLevel to acknowledge missed calls and new inquiries, alert the responsible team member, send a short follow-up sequence that stops when the prospect replies, a staff member steps in or a consultation is booked, and send confirmations and reminders for the appointment. This only works if you design the sequence, the stop conditions and the human handoffs first, and test them. It does not decide whether the firm accepts a matter, check conflicts, or give legal advice.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Disclosure: GHL Scale Up implements GoHighLevel. This guide relies on HighLevel's documentation and says where that documentation is silent. We have not tested the example workflows, so run the test matrix in your own account. For which automations to build first across a business, see <Link href="https://www.ghlscaleup.com/blog/gohighlevel-automation" className="text-[#0E9BF0] hover:underline">our automation priorities guide</Link>.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              Need Help Building This? Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#step-by-step"
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
                GHL Scale Up builds GoHighLevel workflow automation (not specific to law firms) and can help you scope a project.
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

            {/* Introduction */}
            <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Introduction: The Problem and the Short Answer
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A prospective client calls your firm at 6:40 on a Thursday evening. Nobody answers. The caller leaves no voicemail and tries another firm. Or an inquiry arrives through your website, sits in a shared inbox, and the person who sees it assumes someone else replied. Neither is a legal failure. Both are follow-up failures, and they are common in firms where follow-up depends on memory instead of a process.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is some evidence that the problem is not rare. A 2024 mystery-shopper study by the legal marketing agency Hennessey Digital, covering nearly 1,400 US law firms, found that 27% did not respond to an online lead-form inquiry, and that the median response time among those that did was 13 minutes. It is an agency study with its own commercial interests, and your firm's numbers may differ, so measure your own.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The short answer:</strong> a law firm can use GoHighLevel to acknowledge missed calls and new inquiries, alert the responsible team member, send a short follow-up sequence that stops when the prospect replies, a staff member steps in or a consultation is booked, and send confirmations and reminders for the appointment. This only works if you design the sequence, the stop conditions and the human handoffs first, and test them. It does not decide whether the firm accepts a matter, check conflicts, or give legal advice.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 italic">
              Disclosure: GHL Scale Up implements GoHighLevel. This guide relies on HighLevel's documentation and says where that documentation is silent. We have not tested the example workflows, so run the test matrix in your own account. For which automations to build first across a business, see <Link href="https://www.ghlscaleup.com/blog/gohighlevel-automation" className="text-[#0E9BF0] hover:underline">our automation priorities guide</Link>.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/law-firm-lead-follow-up-gohighlevel.png"
                  alt="Inquiry-to-consultation flow diagram for law firms, with highlighted boxes marking human responsibilities and decision diamonds where automation stops and a person takes over"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Figure: Inquiry-to-consultation flow. Highlighted boxes are human responsibilities.</span>
              </div>
            </div>

            {/* Section: Why Lose Clients */}
            <h2 id="why-lose-clients" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Law Firms Lose Potential Clients After an Inquiry
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Follow-up breaks at predictable points. Knowing which one affects your firm tells you what to build first.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where it breaks</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What happens</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What addresses it</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { where: 'Missed calls', what: 'Nobody answers; the caller moves on', fix: 'An acknowledgment text and an alert to staff' },
                    { where: 'Slow responses', what: 'The inquiry waits for someone to notice', fix: 'Internal notification with a named owner' },
                    { where: 'Forgotten follow-ups', what: 'One reply, then silence', fix: 'A short, finite sequence' },
                    { where: 'Booking friction', what: 'The prospect has to call back or email to schedule', fix: 'A booking link in the message' },
                    { where: 'Missed consultations', what: 'The person books and does not attend', fix: 'Reminders and a no-show path' },
                    { where: 'Unclear responsibility', what: 'Two people reply, or neither does', fix: 'An assigned owner and stop rules when a person engages' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.where}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.what}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Better Process */}
            <h2 id="better-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What a Better Law Firm Follow-Up Process Looks Like
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start with the journey, not the software. The diagram shows an illustrative flow from inquiry to consultation. It is not a universal template: your stages, timing and escalation points should follow your intake policy.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The points to notice are the decision diamonds. Each one is a place where the automation must stop and a person must take over: when the prospect replies, when a staff member messages them, and when they book.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Automation can</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">A person must</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { auto: 'Acknowledge the inquiry', person: 'Review what the person wrote' },
                    { auto: 'Alert the intake owner', person: 'Decide whether the matter fits the firm' },
                    { auto: 'Offer a booking link', person: 'Run conflict checks and acceptance procedures' },
                    { auto: 'Send reminders', person: 'Answer substantive questions' },
                    { auto: 'Stop when someone engages', person: 'Take over any conversation that needs judgment' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#5C6880] align-top">{item.auto}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.person}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Throughout this guide, an inquiry is any contact, a prospective client is someone whose inquiry the firm is reviewing, and an accepted client is someone the firm has formally accepted. Follow-up messages go to inquiries and prospective clients, and should not read as if a lawyer-client relationship exists.
            </p>

            {/* Section: Recover Missed Calls */}
            <h2 id="recover-missed-calls" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Recover Missed Calls
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A missed call is the earliest point of loss. HighLevel's Missed Call Text Back sends an SMS when a call goes unanswered past a timeout. It acknowledges the call; it does not alert your team, create an opportunity or book anything, so it needs a workflow around it.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Prerequisites (documented)</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Enable it in Settings &gt; Phone System &gt; Voice &gt; Voicemail &amp; Missed Call Text Back &gt; Missed Call Text Back, then Customize the message, send a test and Save (help article modified 7 September 2026). Set the incoming call timeout. HighLevel notes a very long timeout delays the text and a very short one may interrupt callers who would have answered. The sending number must be able to send SMS. Local numbers need A2P 10DLC registration; toll-free numbers need verification. See <Link href="https://www.ghlscaleup.com/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>. Messages count toward your phone messaging usage. Charges vary by account.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Writing the message</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keep it administrative: who you are, that you saw the missed call, and what happens next. Example, to be reviewed by your counsel:
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4">
              <p className="text-sm text-[#1A2236] italic">
                Hello, this is [Firm name]. We missed your call. A member of our team will contact you [at the time your process allows]. If you would like to book a consultation, use this link: [link].
              </p>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Do not give legal information, do not describe their situation, and do not promise a response time unless your process can meet it.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Handling repeat calls</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel says every missed call triggers a message, including repeats within a short window. If someone calls three times in ten minutes, they could receive three texts. The article suggests adding a wait of about 20 minutes or filtering by tags such as first call and second call in the related workflow. We could not confirm from the documentation which trigger starts a workflow from a missed call, so check the trigger list in your account and test it.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Escalation and limits</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Build a workflow that creates or updates the contact and alerts the owner. Use an Internal Notification with 'Assigned User' only if the contact has an assigned user; HighLevel says otherwise the step is skipped. Add a fallback recipient. The text is SMS only, and merge fields such as the caller's name fill only for contacts the system already recognizes. HighLevel states DND and communication preferences are respected. Confirm this for your configuration. A text-back does not guarantee the caller becomes a lead or books. It only records that the firm acknowledged the call.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the feature's full setup, see <Link href="https://www.ghlscaleup.com/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">our missed-call text back guide</Link>.
            </p>

            {/* Section: Automate Follow-Up */}
            <h2 id="automate-follow-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Automate Follow-Up With Prospective Clients
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A workflow in GoHighLevel is a sequence of actions that starts from a trigger. The purpose of a follow-up workflow is narrow: make sure an inquiry gets a prompt acknowledgment and a few well-timed prompts to book, then stop. The longer the sequence, the more likely it is to message someone inappropriately.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">The workflow's design</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Element</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Recommendation</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { el: 'Objective', rec: 'Move a suitable inquiry toward a consultation, or hand it to a person', why: 'A narrow objective keeps the sequence short' },
                    { el: 'Trigger', rec: 'New inquiry (form submission or missed-call contact). See Article 1 for capture', why: 'Defines who enters' },
                    { el: 'Preconditions', rec: 'A usable phone number or email; no existing booking; not tagged as handled by staff', why: 'Prevents messages to people already engaged' },
                    { el: 'Actions', rec: 'Acknowledge, notify the owner, wait, send a booking prompt, wait, send one more prompt, then stop', why: 'Short and finite' },
                    { el: 'Conditions', rec: 'Branch on tags, booking status and reply', why: 'Stops the right people' },
                    { el: 'Exit conditions', rec: 'Reply, staff message, booking, opt-out, or end of sequence', why: 'See below' },
                    { el: 'Human handoff', rec: 'Task or notification to the owner when someone replies', why: 'A person answers substantive replies' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.el}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.rec}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Exit conditions: the part most firms miss</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every automated sequence needs an answer to the question 'when does this stop?' HighLevel provides several mechanisms, and they do different things:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Mechanism</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it does (documented)</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Limits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mech: 'Stop on Response (workflow setting)', does: 'Ends the workflow for a contact who replies to a message sent from that workflow, on all channels it manages', limits: "Applies only to replies to that workflow's messages. A reply to a different message or a call does not count" },
                    { mech: 'User Replied trigger', does: "Fires when a team member's message is delivered, so you can start a workflow that removes the contact from the follow-up or tags them as handled", limits: 'Does not fire for workflow or Conversation AI messages. Fires per message unless re-enrollment is restricted' },
                    { mech: 'Customer Replied trigger with filters', does: 'Starts a workflow when a contact replies, optionally filtered by phrase, tag, channel or intent', limits: 'Intent detection details are limited. Test with real replies' },
                    { mech: 'Tag or condition check before each message', does: "Before sending, check whether the contact has a 'booked' or 'staff engaged' tag", limits: 'Depends on the tag being applied reliably' },
                    { mech: 'Appointment Status trigger', does: 'Fires on appointment status changes, so a booking can stop follow-up and start the reminder workflow', limits: 'Rescheduling is treated as a new appointment (see below)' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.mech}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.does}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.limits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Use more than one. For example, turn on Stop on Response, and add a tag check before the second and third messages that skips anyone tagged 'staff engaged' or 'consultation booked'.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Re-entry and duplicate messages</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The Allow Re-entry setting controls whether a contact can go through a workflow more than once. When it is off, a contact can enter once. When on, they can re-enter after finishing or being removed, but not while still active. HighLevel notes that appointment-based triggers always allow re-entry per appointment regardless of this setting. For follow-up of new inquiries, a repeat form submission can restart a sequence unless you guard it. See <Link href="https://www.ghlscaleup.com/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">workflow re-entry</Link>. Also avoid two workflows that both message the same event.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Sending hours</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The workflow's Specific Time setting (Start Time, End Time, Include Days) limits SMS, email and call actions to the window you set and holds them until the next slot. It does not affect internal actions such as tags and notifications. One window applies to all selected days. Set it to hours your firm considers appropriate and that comply with rules that apply to you.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Opt-outs</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              When a contact opts out of SMS, further messages should stop. HighLevel's missed-call documentation says DND and communication preferences are respected, and its bot-status documentation notes an opt-out keyword such as STOP can make Conversation AI inactive for the contact. Whether every workflow action honors every opt-out is not stated in the pages we read, so include opt-out contacts in your test matrix.
            </p>

            {/* Section: Move Toward Booking */}
            <h2 id="move-toward-booking" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Move Prospective Clients Toward Booked Consultations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Booking friction costs inquiries: if scheduling requires a phone call back, some people will not complete it. A calendar and a booking link let a prospect choose a time without waiting for staff.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Calendar:</strong> create a calendar for consultations with the availability and the people who will attend. Calendar-level settings, including notifications, are configured per calendar (Calendar &gt; Calendar Settings, then the Notifications tab). For setup of calendars, see <Link href="https://www.ghlscaleup.com/blog/gohighlevel-calendar-booking" className="text-[#0E9BF0] hover:underline">our calendar booking guide</Link>.</li>
              <li><strong className="text-[#1A2236]">Booking link in the message:</strong> include it in the acknowledgment or the first follow-up, not only the last.</li>
              <li><strong className="text-[#1A2236]">Assignment and availability:</strong> decide who attends which type of consultation. Do not let the calendar offer slots nobody can honor.</li>
              <li><strong className="text-[#1A2236]">Confirmation:</strong> HighLevel's calendar notifications include Booked (Unconfirmed), Booked (Confirmed), Cancellation, Reschedule, Reminder and Follow-Up types.</li>
              <li><strong className="text-[#1A2236]">Internal notification:</strong> alert the consultation owner when a booking is made. Staff can also enable an alert for bookings made without a meeting link or location (Settings &gt; My Staff &gt; Notification Settings &gt; Calendar Notifications, per HighLevel).</li>
              <li><strong className="text-[#1A2236]">Stop the sequence:</strong> the booking must end the follow-up sequence. Use the Appointment Status trigger or a booked tag.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Rescheduling and cancellation</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's Appointment Status documentation says a rescheduled appointment is treated as a new appointment and the contact re-enters the workflow from the beginning. That can cause duplicate confirmations or a restarted reminder sequence if you do not plan for it. Calendar notifications are sent on cancellation (and also on no-show and invalid status) and on reschedule. Check that cancelled appointments do not still receive reminders.
            </p>

            {/* Section: Reduce No-Shows */}
            <h2 id="reduce-no-shows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Reduce Consultation No-Shows
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A booked consultation that does not happen wastes the slot. The levers are reminders, easy rescheduling and a defined no-show path. We do not claim a percentage reduction; measure your own.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Reminders:</strong> set Reminder notifications on the consultation calendar, choosing how far in advance each is sent. Keep them concise because SMS is billed per segment.</li>
              <li><strong className="text-[#1A2236]">Content:</strong> state the date, time, location or meeting link, and how to reschedule. Do not include case details in reminders.</li>
              <li><strong className="text-[#1A2236]">Rescheduling:</strong> include a reschedule link. HighLevel notes blank cancellation or reschedule links appear when a test lacks real appointment data, so test with a real booking.</li>
              <li><strong className="text-[#1A2236]">Calendar email and DND:</strong> HighLevel says calendar notification emails bypass Email DND while marketing emails honor it. Decide whether that is appropriate for your emails.</li>
              <li><strong className="text-[#1A2236]">No-show handling:</strong> when the status becomes No-show, send one message offering to rebook and create a task for staff. Do not chase repeatedly.</li>
              <li><strong className="text-[#1A2236]">Exit logic:</strong> cancelled or attended appointments must stop reminders.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Check the guest settings if you add guests: HighLevel notes that a separate guest confirmation email can duplicate a system email with a form link.
            </p>

            {/* Section: Where AI Helps */}
            <h2 id="where-ai-helps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where AI Can Help, and Where It Should Not Be Used
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel documents Conversation AI (text) and Voice AI (inbound calls). Voice AI can answer calls including after hours, collect information and create or update contacts, book appointments, transfer to a human on conditions you define, and trigger workflows. It requires LC Phone or Twilio numbers. Conversation AI's Bot Goals include collecting contact details, triggering a workflow and handing over to a human. Availability varies by account and release status. See <Link href="https://www.ghlscaleup.com/blog/gohighlevel-ai-employee" className="text-[#0E9BF0] hover:underline">our AI Employee guide</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Appropriate administrative uses:</strong> acknowledging an inquiry, answering approved questions (hours, location, how to book), collecting contact details, offering the booking link and alerting staff. <strong className="text-[#1A2236]">Not appropriate:</strong> legal advice, assessing the merits of a matter, conflict checks, promises about outcomes, or deciding whether to accept a matter. Sensitive, urgent or confused conversations should go to a person.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Give the AI approved content and explicit limits, and test questions it should and should not answer.</li>
              <li>Define the handoff: when it alerts staff and what staff see. Whether the bot keeps replying after it triggers a workflow is not stated in the documentation we read, so test it.</li>
              <li>Avoid having the AI and a staff member answer the same person without a rule on who leads.</li>
            </ul>

            {/* Section: Keep Organized */}
            <h2 id="keep-organized" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Keep the Follow-Up Process Organized
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If statuses are inconsistent, follow-up and metrics will be unreliable. Use a small set of pipeline stages and tags, and let workflows update them. An illustrative set (not a universal legal workflow):
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Stage or tag</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Meaning</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Updated by</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { stage: 'New Inquiry', meaning: 'Inquiry received', by: 'Capture workflow' },
                    { stage: 'Contact Attempted', meaning: 'Acknowledgment sent; follow-up running', by: 'Follow-up workflow' },
                    { stage: 'Staff Engaged (tag)', meaning: 'A team member is in contact; automation stops', by: 'User Replied workflow or staff' },
                    { stage: 'Consultation Booked', meaning: 'Appointment confirmed', by: 'Appointment Status workflow' },
                    { stage: 'Consultation Held / No-Show / Cancelled', meaning: 'Outcome of the appointment', by: 'Appointment Status workflow' },
                    { stage: 'Closed or Not Proceeding', meaning: 'No further follow-up', by: 'Workflow end or staff' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.stage}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.meaning}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.by}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A pipeline for prospective clients tracks the inquiry. It is not a substitute for legal matter management, and 'Consultation Held' does not mean the firm has accepted the person as a client.
            </p>

            {/* Section: Step-by-Step */}
            <h2 id="step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Step-by-Step Implementation Example
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Scenario (illustrative): a prospective client calls when staff are unavailable. The firm needs to acknowledge the inquiry, notify the responsible team member, offer a booking path, follow up when appropriate, and stop the right sequence when the person responds or books. The timing below is a placeholder; set it to your own policy.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Workflow A: Missed-call intake</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Step</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Action</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { step: '1', action: 'Missed Call Text Back sends the acknowledgment (feature setting, not a workflow action)', why: 'Immediate acknowledgment' },
                    { step: '2', action: "Workflow, started by your account's missed-call trigger (verify the name), creates or updates the contact and tags it 'missed-call'", why: 'A record exists' },
                    { step: '3', action: "Check for a tag such as 'missed-call-notified' within the last period; skip if present", why: 'Avoid repeated alerts for repeat calls' },
                    { step: '4', action: 'Create an opportunity at New Inquiry; assign an owner', why: 'Ownership' },
                    { step: '5', action: 'Internal Notification to the assigned user, with a fallback recipient', why: 'A person is told' },
                    { step: '6', action: "Add the 'missed-call-notified' tag", why: 'Duplicate guard' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.step}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.action}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Workflow B: Follow-up sequence</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Step</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Action</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { step: '1', action: 'Settings: Stop on Response on; Specific Time window on; Allow Re-entry off', why: 'Stops on reply, limits hours, prevents restarts' },
                    { step: '2', action: "Wait a period you choose; if the contact is tagged 'staff-engaged' or 'consultation-booked', end", why: 'Gives staff time to act first' },
                    { step: '3', action: 'Send a message with the booking link', why: 'Offers a path' },
                    { step: '4', action: 'Wait; repeat the tag check; send one final prompt', why: 'Finite sequence' },
                    { step: '5', action: 'If no reply or booking, move the opportunity to Closed or Not Proceeding and create a task for staff to review', why: 'No endless chasing' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.step}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.action}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Workflow C: Staff replies</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A workflow started by the User Replied trigger adds the 'staff-engaged' tag and moves the opportunity to Contact Attempted or beyond. Because the trigger fires per message, guard it with a tag check. Remember it does not fire for messages from workflows or Conversation AI.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Workflow D: Appointment lifecycle</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Trigger</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { trigger: 'Appointment Status = Confirmed', action: 'Tag "consultation-booked"; notify the consultation owner; move the opportunity; remove the contact from follow-up' },
                    { trigger: 'Appointment Status = Cancelled', action: 'Stop reminders; send one rebooking message; create a staff task' },
                    { trigger: 'Appointment Status = No-show', action: 'Send one rebooking message; create a staff task' },
                    { trigger: 'Appointment Status = Showed', action: 'Move the opportunity; staff continue the intake process outside this workflow' },
                    { trigger: 'Rescheduled (new appointment)', action: 'Check that old reminders are cancelled and confirmations are not duplicated' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.trigger}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Expected outcome if configured correctly: the caller gets one acknowledgment, the owner gets one alert, the prospect receives at most the planned messages, and any reply, staff message or booking ends the sequence. None of this is guaranteed by default; each point is verified in the test matrix.
            </p>

            {/* Section: Test and Troubleshoot */}
            <h2 id="test-troubleshoot" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test and Troubleshoot the Workflows
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use test contacts. Do not mark a workflow as working until you have seen the expected result in a live account.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Test scenario</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Expected behavior</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to inspect</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Common failure</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'New inquiry', expected: 'Contact, opportunity, one alert, acknowledgment', inspect: 'Contact; execution history', failure: 'No trigger; missing owner' },
                    { scenario: 'Missed call', expected: 'Text-back sent once; contact and alert created', inspect: 'Conversation thread; execution history', failure: 'Number not SMS-eligible; unregistered A2P' },
                    { scenario: 'Repeat missed calls', expected: 'No repeated alerts; text behavior understood', inspect: 'Messages; tag guard', failure: 'Multiple texts and alerts' },
                    { scenario: 'Prospect replies', expected: 'Sequence stops; staff alerted', inspect: 'Workflow enrollment; Stop on Response', failure: 'Sequence continues' },
                    { scenario: 'Staff messages the contact', expected: 'Staff-engaged tag; sequence ends', inspect: 'User Replied workflow; tag', failure: 'Follow-up continues; trigger not fired for workflow messages' },
                    { scenario: 'Prospect books', expected: 'Sequence ends; confirmation; owner alerted', inspect: 'Appointment status; tags', failure: 'Follow-up continues after booking' },
                    { scenario: 'Rescheduling', expected: 'New appointment handled; no duplicate confirmations', inspect: 'Execution history for both appointments', failure: 'Re-entry from the beginning duplicates messages' },
                    { scenario: 'Cancellation', expected: 'Reminders stop; one rebooking message', inspect: 'Reminder queue; messages', failure: 'Reminder sent after cancellation' },
                    { scenario: 'No-show', expected: 'One rebooking message; staff task', inspect: 'Status; task', failure: 'Repeated chasing' },
                    { scenario: 'Opt-out (STOP)', expected: 'No further SMS', inspect: 'Contact DND; messages', failure: 'Messages continue after opt-out' },
                    { scenario: 'Duplicate trigger', expected: 'No second sequence', inspect: 'Allow Re-entry; other workflows', failure: 'Two sequences' },
                    { scenario: 'Outside sending hours', expected: 'SMS held until the window opens', inspect: 'Workflow Specific Time; timestamps', failure: 'Message sent at night' },
                    { scenario: 'Human handoff', expected: 'Owner alerted with context', inspect: 'Internal Notification result', failure: 'Skipped: no assigned user' },
                    { scenario: 'AI cannot answer', expected: 'Escalates to staff', inspect: 'Conversation; alert', failure: 'AI guesses instead' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.scenario}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.expected}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.inspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.failure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Troubleshooting</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Problem</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Likely causes (ranked)</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Inspect</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { problem: 'Missed-call response does not fire', causes: 'Feature disabled; number not SMS-eligible or unregistered; contact on DND; caller answered within the timeout', inspect: 'Phone System & Voicemail & Missed Call Text Back; conversation (failures are logged with a reason)', fix: 'Enable; register A2P or verify toll-free; check DND' },
                    { problem: 'Duplicate messages', causes: 'Allow Re-entry on; two workflows with the same event; repeat missed calls', inspect: 'Execution history; other workflows; settings', fix: 'Add guards; restrict re-entry; use a tag or wait' },
                    { problem: 'Follow-up continues after booking', causes: 'No exit condition; booking tag not applied; message sent before the check', inspect: 'Appointment Status workflow; tags', fix: 'Add the tag check before each message; trigger on status' },
                    { problem: 'Reminder sent after cancellation', causes: 'Reminders configured elsewhere; cancellation not mapped; calendar notification still scheduled', inspect: 'Calendar notification settings; appointment status', fix: 'Review calendar Notifications tab; test with a real cancellation' },
                    { problem: 'Booking does not update the record or stage', causes: 'Trigger filter excludes the calendar or status; Modified By filter', inspect: 'Appointment Status trigger filters', fix: 'Adjust calendar and status filters' },
                    { problem: 'Appointment change does not trigger behavior', causes: 'Rescheduling treated as a new appointment; filters', inspect: 'Execution history for both appointments', fix: 'Handle re-entry; confirm filters' },
                    { problem: 'Team member does not get the notification', causes: 'No assigned user; missing phone or email; DND; channel not configured', inspect: 'Internal Notification step result; user profile', fix: 'Assign first; fix contact details; add a fallback recipient' },
                    { problem: 'AI does not escalate', causes: 'Vague instructions; escalation conditions missing; availability varies', inspect: 'Transcript; bot goals; handover settings', fix: 'Add explicit rules; test; consider a handover for legal topics' },
                    { problem: 'Follow-up still runs after a staff message', causes: 'User Replied trigger not built; workflow/AI messages do not fire it', inspect: 'Workflow list', fix: 'Build the trigger; use tag checks' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.problem}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.causes}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.inspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Measure Performance */}
            <h2 id="measure-performance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Measure Follow-Up and Consultation Performance
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Measure the process, not just the outcome. These definitions are suggestions; define each precisely before you compare periods.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Metric</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Definition</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Calculation</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Interpretation and limits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'First-response time', def: 'Time from inquiry creation to the first human message', calc: 'Timestamp of first staff message minus inquiry creation', limits: 'Automated acknowledgment should be tracked separately from a human reply' },
                    { metric: 'Contact rate', def: 'Share of inquiries that reply or are reached', calc: 'Contacted / total inquiries', limits: 'Depends on consistent tagging' },
                    { metric: 'Booking rate', def: 'Share of suitable inquiries that book a consultation', calc: 'Booked / suitable inquiries', limits: "Define 'suitable' once; do not change it midstream" },
                    { metric: 'Show rate', def: 'Share of booked consultations attended', calc: 'Showed / booked', limits: 'Use the Appointment Status values' },
                    { metric: 'No-show rate', def: 'Share of booked consultations missed', calc: 'No-shows / booked', limits: 'Compare before and after changes; sample sizes can be small' },
                    { metric: 'Time to consultation', def: 'Days from inquiry to appointment', calc: 'Appointment date minus inquiry date', limits: "Includes the prospect's own delays" },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.metric}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.def}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.calc}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.limits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Limits: results depend on accurate statuses, tagging discipline and unique contacts. We did not confirm which built-in HighLevel reports provide each figure, so check your account or export records. A change in one metric after a workflow change does not prove the workflow caused it.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Implementation Mistakes
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Mistake</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Correction</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mistake: 'Long sequences that message people for weeks', correction: 'A short, finite sequence with a defined end' },
                    { mistake: 'No exit condition on booking', correction: 'Check status or tag before each message' },
                    { mistake: 'Treating Stop on Response as the only stop', correction: 'Add the staff-engaged and booked checks' },
                    { mistake: 'Alerts that go nowhere', correction: 'Assign an owner and a fallback' },
                    { mistake: 'Reminders unaffected by cancellations', correction: 'Test cancellation and rescheduling with real bookings' },
                    { mistake: 'AI answering substantive legal questions', correction: 'Limit scope; hand over' },
                    { mistake: 'Putting case details in messages', correction: 'Keep messages administrative' },
                    { mistake: 'Not testing opt-outs', correction: 'Include STOP in the matrix' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.mistake}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.correction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Legal Safeguards */}
            <h2 id="legal-safeguards" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Legal, Privacy, and Professional Safeguards
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is general information, not legal advice. Rules vary by jurisdiction, practice area and communication channel, and GoHighLevel does not guarantee compliance.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880]">
              {[
                { title: 'Consent and channel rules.', body: 'Automated texts, calls and emails are regulated differently in different places. Confirm what applies to you, and see the A2P guidance for US SMS.' },
                { title: 'Opt-out and suppression.', body: 'Honor opt-outs and keep a suppression list. Test that it works.' },
                { title: 'Confidentiality.', body: 'Keep texts and emails administrative. Do not put case facts in SMS, reminders or internal alerts.' },
                { title: 'Limit what automated interactions collect,', body: 'and avoid inviting detailed confidential facts before the firm has an intake process for them.' },
                { title: 'Human review.', body: 'A person reviews substantive questions and decides on acceptance.' },
                { title: 'No promises.', body: 'Do not suggest outcomes or that representation has been accepted.' },
                { title: 'Inquiry, prospective client, client.', body: 'Keep these distinct in your messages and records. A conflict check and formal acceptance are separate processes, and GoHighLevel is not a conflict-checking tool that we could find.' },
                { title: 'Vendor data handling.', body: 'Review access controls, retention and contractual terms with each vendor.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1A2236]">{item.title}</strong> {item.body}
                  </span>
                </li>
              ))}
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

            {/* Section: Conclusion */}
            <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Conclusion
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start small: one acknowledgment for missed calls, one short sequence with clear stop conditions, and one appointment lifecycle. Test every exit path before you rely on it, then measure response time, booking rate and show rate. Keep the automation administrative, and keep conflict checks, acceptance and legal judgment with the firm.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you want help designing or building these workflows, GHL Scale Up builds GoHighLevel workflow automation (not specific to law firms) and can help you scope a project.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Official documentation: <a href="https://help.gohighlevel.com/support/solutions/articles/48001239140" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Missed Call Text Back</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000002550" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Workflow Settings</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000002044" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Appointment Status trigger</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000003202" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Calendar notifications</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000002044" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">User Replied trigger</a> and <a href="https://help.gohighlevel.com/support/solutions/articles/155000002044" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Customer Replied trigger</a>.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about law firm lead follow-up in GoHighLevel?</strong>
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
                <Link href="/blog/gohighlevel-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Automation: The Workflows Worth Building First →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-entry →</Link>
                <Link href="/blog/gohighlevel-calendar-booking" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Calendar & Booking →</Link>
                <Link href="/blog/gohighlevel-ai-employee" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Employee →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">Workflow Automation Services →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Start small: one acknowledgment, one short sequence, one appointment lifecycle.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds GoHighLevel workflow automation (not specific to law firms) and can help you scope a project.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Scope a Project
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
                Facts checked against HighLevel documentation, 23 October 2026. Interfaces, plans and usage charges change; confirm in your own account. No HighLevel account was available for testing; the test matrix in this article is a plan, and no workflow is marked as tested. This guide relies on HighLevel's documentation and says where that documentation is silent.
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