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
  Star,
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Scale,
  HeartHandshake,
  Users,
  UserCheck,
  Lock,
  ListChecks,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Repeat,
  Gift,
  FileCheck,
  Route,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function LawFirmReviewsReferralsClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'introduction',
      'why-consistent-process',
      'what-ghl-can-do',
      'design-review-request',
      'build-review-workflow',
      'track-referral-sources',
      'manage-referral-relationships',
      'maintain-past-client-relationships',
      'measure-activities',
      'step-by-step',
      'test-troubleshoot',
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
      q: 'Can GoHighLevel automate review requests for law firms?',
      a: 'Yes, it can send requests by SMS or email through a workflow action and Reputation settings. It does not decide who should be asked, and the firm must review professional rules and platform policies first.'
    },
    {
      q: 'How can a law firm track where referrals come from?',
      a: "Create a controlled-list source field, fill it at intake, copy it to the opportunity's Source field, and report by source. HighLevel's own attribution does not capture person-to-person referrals."
    },
    {
      q: 'Can GoHighLevel manage referral relationships?',
      a: 'It can organize records, owners and reminder tasks. The relationship itself, and any decision about what to share, stays with a person.'
    },
    {
      q: 'Can a law firm automate review requests without manipulating feedback?',
      a: 'Yes, if every client who meets written criteria receives the same neutral request, with no incentive and no routing by sentiment.'
    },
    {
      q: 'Does a review request guarantee a review?',
      a: 'No. Nothing can guarantee a review or its rating.'
    },
    {
      q: 'Can the workflow tell which client wrote a review?',
      a: "No. HighLevel's Review Received trigger is not linked to a contact."
    },
    {
      q: 'Does a source in the CRM prove it generated the client?',
      a: 'No. It records an answer or a first or latest touch; it does not show cause.'
    },
    {
      q: 'What should a firm check before automating review requests?',
      a: 'Professional rules on testimonials and solicitation, platform policies, SMS consent, confidentiality of the message wording, and the opt-out process.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'introduction', title: 'Introduction: The Problem and the Short Answer' },
    { id: 'why-consistent-process', title: 'Why Reviews and Referrals Need a Consistent Process' },
    { id: 'what-ghl-can-do', title: 'What GoHighLevel Can and Cannot Do for Law Firm Growth' },
    { id: 'design-review-request', title: 'How to Design a Responsible Review-Request Process' },
    { id: 'build-review-workflow', title: 'How to Build the Review-Request Workflow in GoHighLevel' },
    { id: 'track-referral-sources', title: 'How to Track Referral Sources' },
    { id: 'manage-referral-relationships', title: 'How to Manage Referral Relationships Without Turning Them into Spam' },
    { id: 'maintain-past-client-relationships', title: 'How to Maintain Appropriate Relationships With Past Clients' },
    { id: 'measure-activities', title: 'How to Understand Which Activities Generate Inquiries' },
    { id: 'step-by-step', title: 'Step-by-Step Implementation Example' },
    { id: 'test-troubleshoot', title: 'How to Test and Troubleshoot the Workflows' },
    { id: 'common-mistakes', title: 'Common Mistakes and How to Correct Them' },
    { id: 'legal-safeguards', title: 'Legal, Ethical, Privacy, and Professional Safeguards' },
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
          <span className="text-[#1A2236] font-medium">Law Firm Reviews and Referrals With GoHighLevel</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Reviews</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Referrals</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Law Firm Reviews and Referrals With GoHighLevel: A Responsible Process
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Facts checked against HighLevel documentation, 24 October 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              GoHighLevel can send review requests from a workflow, notify staff when a Google or Facebook review arrives, store a referral source on a contact or opportunity, report on opportunities by source, and create tasks for relationship follow-up. It cannot decide which clients should be asked, make a review positive, prove that a source caused a client to hire the firm, or make the process compliant with your jurisdiction's rules. The process has to be designed by the firm first.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Disclosure: GHL Scale Up implements GoHighLevel. This guide relies on HighLevel's documentation and says where it is silent or thin. We have not tested the example workflows, so run the test matrix in your own account. This is general information, not legal advice.</em>
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

            {/* Introduction */}
            <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Introduction: The Problem and the Short Answer
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A firm finishes a matter well. A few weeks later a former client mentions it to a friend, and that friend calls. Nobody recorded who referred them. At the same time, the firm has eleven public reviews, most from two years ago, because asking for a review depends on whether someone remembers and feels comfortable. Neither the reviews nor the referrals are a process. They are things that happen.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This guide explains how a law firm can use GoHighLevel to build a consistent process for three things: asking clients for honest reviews, recording where inquiries come from, and keeping professional referral relationships organized. It also explains where automation should stop, what HighLevel does not do, and which professional and platform rules need a lawyer's review before you start.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The short answer:</strong> GoHighLevel can send review requests from a workflow, notify staff when a Google or Facebook review arrives, store a referral source on a contact or opportunity, report on opportunities by source, and create tasks for relationship follow-up. It cannot decide which clients should be asked, make a review positive, prove that a source caused a client to hire the firm, or make the process compliant with your jurisdiction's rules. The process has to be designed by the firm first.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 italic">
              Disclosure: GHL Scale Up implements GoHighLevel. This guide relies on HighLevel's documentation and says where it is silent or thin. We have not tested the example workflows, so run the test matrix in your own account. This is general information, not legal advice.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/law-firm-reviews-referrals-gohighlevel.png"
                  alt="Review and referral process diagram for law firms, with highlighted boxes marking human responsibilities across review requests and referral source tracking"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Figure: Review and referral process. Highlighted boxes are human responsibilities.</span>
              </div>
            </div>

            {/* Section: Why Consistent Process */}
            <h2 id="why-consistent-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Reviews and Referrals Need a Consistent Process
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When these activities depend on memory, the failures are predictable: reviews are requested only from people the team feels good about, referrers are thanked inconsistently, the source of a new inquiry is guessed later, and nobody owns the relationship. Five things get confused, and the process works only if you separate them:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Activity</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it is</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Who decides</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { activity: 'Receiving a referral', what: 'Someone recommends the firm', who: 'The referrer' },
                    { activity: 'Converting an inquiry', what: 'An inquiry becomes a consultation and, if accepted, a client', who: 'The firm, through its intake and acceptance process' },
                    { activity: 'Building a relationship', what: 'Ongoing professional contact with referrers and past clients', who: 'The responsible lawyer or staff member' },
                    { activity: 'Requesting a review', what: 'Asking a client for honest feedback on a public platform', who: 'The firm, within its professional rules' },
                    { activity: 'Tracking the source', what: 'Recording where an inquiry came from', who: 'The team, using a defined list' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.activity}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.what}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Illustrative scenario (not a real firm): a three-lawyer consumer practice receives about half its inquiries from past clients and from two local accountants. It has no record of which inquiry came from whom, sends review requests when a lawyer remembers, and has never reviewed whether the referral relationships are active. The goal of the process below is not more of everything. It is a recorded, repeatable way to do three modest things.
            </p>

            {/* Section: What GHL Can Do */}
            <h2 id="what-ghl-can-do" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What GoHighLevel Can and Cannot Do for Law Firm Growth
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Need</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What GoHighLevel provides</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it does not do</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { need: 'Review requests', provides: 'A Send Review Request workflow action and Reputation tools for SMS, email and WhatsApp, with templates, a review link and retries', not: 'Decide who is eligible; judge whether a request is appropriate for a client; guarantee a review or a rating' },
                    { need: 'Review monitoring', provides: 'A Review Received trigger for Google and Facebook, and an Overview of requests sent and reviews received', not: 'Link a review to a contact (the trigger is contactless); measure how many reviews a request produced' },
                    { need: 'Referral relationships', provides: 'Contact records, tags, custom fields, tasks and notes you structure yourself', not: 'Identify a person-to-person referral automatically' },
                    { need: 'Source tracking', provides: 'Attribution fields, a Source field on opportunities, and a Lead Source Report', not: 'Prove which source caused a client to hire the firm' },
                    { need: 'Third-party review platforms', provides: 'Google and Facebook integrations; manual entry for offline reviews (Labs)', not: 'Support every platform natively' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.need}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.provides}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.not}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A point that surprises many teams: in HighLevel's attribution reporting, 'Referrals' means traffic from another website, not a client or professional referring someone. A client who tells a friend to call the firm will appear as 'Others' or 'Direct Traffic', or as 'CRM UI' if staff create the record by hand. Person-to-person referrals need a field you create.
            </p>

            {/* Section: Design Review Request */}
            <h2 id="design-review-request" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Design a Responsible Review-Request Process
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Design before you build. A review process is a set of decisions the firm makes, and automation only carries them out.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">1. Choose a defensible trigger</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use a milestone the firm defines and records, for example that a matter has concluded and the closing letter has been sent. HighLevel does not know when a legal matter is finished. The milestone has to be recorded by a person, for example by applying a tag or moving an opportunity to a stage. Timing is a judgment: avoid moments that are likely to be sensitive, and decide whether any matter types (for instance where there is an open dispute) should be excluded by a written rule, not by someone's mood about a particular client.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">2. Ask everyone who meets the written criteria</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the central safeguard. If staff ask only the clients they expect to be happy, or route clients by sentiment so that only positive responders see the public review link, the process becomes selective solicitation. Google's contributor policy says merchants may not discourage or prohibit negative reviews, or selectively solicit positive reviews from customers, and the FTC's 2024 reviews rule is summarized as prohibiting suppression of negative reviews. Competing pages that present positive-to-public, negative-to-private routing as a feature do not address either. HighLevel's documentation for review requests describes one Review Link and does not describe star-based routing, so there is no native feature you need to turn off, but you can build one with conditions, so do not.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The corrective for a dissatisfied client is a private, human conversation that is offered to everyone, not a filter that decides who may leave a public review.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">3. Pick a channel the client has agreed to</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A review request sent by SMS is a text message and needs the consent and registration your SMS setup requires; see <Link href="https://www.ghlscaleup.com/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">our guide to A2P opt-in language</Link>, which covers consent wording generally and does not address review requests specifically. HighLevel's multi-channel request page says that if a contact lacks the detail for a selected channel the system reportedly uses another available method, which means a request could go out on a channel you did not intend. Decide the channel per client and check what your configuration does.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">4. Keep the message neutral and confidential</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Ask for honest feedback, include one review link, say how to opt out, and nothing else. Do not mention the matter, the outcome or the client's legal status. The fact that a person is a client can itself be confidential information in many jurisdictions, so a message sent to a wrong or shared number can disclose it. Confirm numbers, keep wording generic, and have counsel review the template.
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4">
              <p className="text-sm text-[#1A2236] italic">
                Illustrative sample (to be reviewed by counsel): Hello [first name], this is [Firm name]. If you are willing, we welcome your honest feedback about your experience with our office: [review link]. Reply STOP to opt out.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">5. No incentives</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Do not offer a discount, a gift or a prize for a review. Google's policy says reviews posted because of an incentive are removed and merchants may not offer rewards for a review, a revision or the removal of a negative review. The FTC rule is summarized as prohibiting incentives conditioned on the review's sentiment. North Carolina's State Bar opinion says a lawyer may not offer anything of value in exchange for a revised or withdrawn review. Whether any incentive is permissible for a lawyer is a professional-rules question for your jurisdiction, and it still has to satisfy the platform's policy.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">6. Plan for replies, opt-outs and failures</h3>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Replies and complaints:</strong> a person reads them. A complaint is handled privately and promptly.</li>
              <li><strong className="text-[#1A2236]">Opt-outs:</strong> stop all review requests to that contact and keep them suppressed.</li>
              <li><strong className="text-[#1A2236]">Failures:</strong> HighLevel reports request status as Queued, Sent, Delivered or Failed. 'Delivered' is confirmed for SMS only and only through Twilio, so do not read the absence of 'Delivered' on email as a failure.</li>
              <li><strong className="text-[#1A2236]">Responding to a public review:</strong> never reveal client information. ABA Formal Opinion 496 treats confidentiality as the central concern, and often the best response is none or a generic invitation to discuss concerns offline. Have a written policy.</li>
            </ul>

            {/* Section: Build Review Workflow */}
            <h2 id="build-review-workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Build the Review-Request Workflow in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Objective: send one neutral request to each eligible client, then stop. The workflow carries out the decision a person has already recorded.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Step</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Setting</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Purpose</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Failure to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { step: 'Trigger', setting: "A tag such as review-eligible, added by staff when the firm's milestone is reached. (A stage change or a status trigger can serve instead.)", purpose: 'Starts only on a human decision', failure: 'Tag applied by mistake; trigger name differs by account' },
                    { step: 'Workflow settings', setting: 'Allow Re-entry off; Specific Time sending window on', purpose: 'Prevents a second pass and limits hours', failure: 'Re-entry left on after a tag is re-applied' },
                    { step: 'Condition', setting: 'Continue only if the contact does not have review-requested or do-not-contact tags and has the needed contact detail', purpose: 'Avoids repeats, opted-out contacts and missing data', failure: 'Condition checks the wrong tag name' },
                    { step: 'Action: Send Review Request', setting: 'Choose the channel (Email or SMS) you intend', purpose: 'Sends the message configured in Reputation > Settings', failure: 'Message template or Live template not assigned' },
                    { step: 'Action: Add tag review-requested', setting: 'Immediately after sending', purpose: 'Duplicate guard', failure: 'Tag added before a failed send' },
                    { step: 'Action: Internal Notification or task', setting: 'On failure or opt-out, tell a named person (Add Task: Assign To a user)', purpose: 'A human sees problems', failure: 'Task assigned to nobody useful' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.step}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.setting}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.purpose}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.failure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Retries need a decision. Reputation &gt; Settings lets you set first-send timing, repeat interval and maximum retries. HighLevel's documentation says the repeat schedule for a channel stops once a click is detected, and suggests many teams start with two to three retries. It does not say that retries stop when the client posts a review. Because the Review Received trigger is not tied to a contact, assume a client who reviewed without clicking the tracked link may still receive a retry. Set retries low, or to zero, and apply the review-requested tag so staff can check.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The review trigger is contactless. A workflow starting from Review Received, filtered by source, rating or spam status, can notify a team member and pass review details to another action, but the review is 'not linked to any specific contact'. Use it to alert staff and to log the review. Do not design anything that depends on knowing which client wrote it. For workflow basics, see <Link href="https://www.ghlscaleup.com/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">our workflow setup guide</Link> (a general guide), and for repeated entries, <Link href="https://www.ghlscaleup.com/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">workflow re-entry</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Prerequisites and limits (documented): connect Google Business Profile for a Google review link, or use a custom link; request limits depend on the plan; SMS in the US needs the registration covered in our A2P guides. If you use Review Balancing, HighLevel splits requests between connected platforms by a percentage you set. That controls where the request goes, not which clients receive it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the same timing logic applied to a different context, see <Link href="https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-review-automation" className="text-[#0E9BF0] hover:underline">our ecommerce review-timing guide</Link> (written for online stores, not law firms).
            </p>

            {/* Section: Track Referral Sources */}
            <h2 id="track-referral-sources" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Track Referral Sources
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Recording a source and proving that the source caused a client to hire you are different things. A client may hear about the firm from an accountant, search for it, read your reviews and then call. The source field records one fact you choose to record. It is not evidence of cause.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Choose a controlled list</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use a dropdown, not free text, so 'Smith CPA' and 'smith cpa' are not two sources. Illustrative categories, to adapt: existing client, former client, professional contact, other attorney, business partner, community or professional organization, website or campaign, other, unknown. The list is the firm's; it is not a universal taxonomy.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Create the fields</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In Settings &gt; Custom Fields you create fields for contacts or opportunities. The object type cannot be changed after creation. Contact fields work in forms, contact workflows and Smart Lists; opportunity fields work in pipeline views and opportunity workflows. A practical split:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Contact field 'Original Source' (dropdown): set once, when the person first contacts the firm. Never overwritten.</li>
              <li>Contact field 'Referred By' (short text or contact reference as you design it): the referrer's name, where the person agrees to give it.</li>
              <li>Opportunity Source field: the field the Lead Source Report reads. Fill it from the Original Source so the report works.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Record it at the right moment</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Add the question to the intake form (see our law-firm intake article when it is published) or have the intake owner ask by phone and record the answer. Provide an 'Unknown' option, because a forced answer is worse than a missing one. A form field can capture the answer for web inquiries; for calls, a person has to record it.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What HighLevel's attribution does and does not do</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel records first and latest attribution when a contact, in the same session, submits a form or survey, books an appointment, uses a chat widget or completes an order form. Calls and texts appear as 'Others', manually created contacts as 'CRM UI', and website visitors from another site as 'Referrals'. UTM values must match exactly, including case. It does not record that a client was referred by a person. Use your own field for that.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Reporting limits</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The Lead Source Report groups opportunities by their Source field and shows total, open, won, lost, abandoned and value. It counts opportunities, not contacts, so one person with three opportunities counts three times. Opportunities with no source fall into 'N/A'. HighLevel's article does not state which plans include the widget.
            </p>

            {/* Section: Manage Referral Relationships */}
            <h2 id="manage-referral-relationships" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Manage Referral Relationships Without Turning Them into Spam
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A referral relationship is a human relationship between professionals. The system's job is to make sure it is not forgotten, not to talk to the referrer automatically.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Can be organized with HighLevel</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Needs human judgment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { hl: 'A contact record for the referrer, with context and origin recorded in a note', human: 'Whether the relationship is appropriate and active' },
                    { hl: "A 'Relationship Owner' assigned to a named user, plus a task to check in at an interval you choose", human: 'What to say, and whether to say anything' },
                    { hl: 'A task when a referred inquiry arrives, for the owner to thank or update the referrer where the firm may do so', human: 'What can be shared: client confidentiality applies, so even confirming that a referred person became a client may not be permitted without consent' },
                    { hl: 'A periodic review list of referrers with no recorded activity', human: 'Whether to continue the relationship' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#5C6880] align-top">{item.hl}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A workflow built on tags and the Add Task action can create the reminders. Add Task assigns to a specific user and takes a due interval; the documentation does not describe assigning to a contact owner, so set the user explicitly. HighLevel has a setting that allows different owners for contacts and opportunities, but the page we read is from 2024 and notes the workflow action as 'Coming Soon', so test before relying on it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Do not automate: marketing sends to every professional contact, or any arrangement involving payment, fee sharing or reciprocal referrals. Rules on referral fees and reciprocal referral arrangements vary by jurisdiction and we did not verify them here. Have counsel review any such arrangement before anything is recorded or automated.
            </p>

            {/* Section: Maintain Past Client Relationships */}
            <h2 id="maintain-past-client-relationships" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Maintain Appropriate Relationships With Past Clients
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A former client has not necessarily agreed to ongoing marketing, and the duty of confidentiality continues. The default should be less contact, not more.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Segment narrowly:</strong> use tags to separate those who consented to updates from those who did not, and suppress everyone else.</li>
              <li><strong className="text-[#1A2236]">Use generic content:</strong> do not personalize with matter details.</li>
              <li><strong className="text-[#1A2236]">One owner:</strong> a named person decides whether any contact is appropriate.</li>
              <li><strong className="text-[#1A2236]">New inquiries get a fresh review:</strong> a past client who writes again is treated as a new inquiry, and conflict checks and acceptance are separate processes this system does not perform.</li>
              <li><strong className="text-[#1A2236]">Respect opt-outs permanently.</strong></li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Keep any administrative follow-up modest and permitted by the firm's own rules. This article does not recommend re-engagement campaigns.
            </p>

            {/* Section: Measure Activities */}
            <h2 id="measure-activities" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Understand Which Activities Generate Inquiries
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Define each measure before you compare periods. Numbers that are not tied to outcomes are activity counts, not results.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Metric</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Definition</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Calculation</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Limits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Requests sent', def: 'Review requests sent in a period', calc: 'Reputation Overview: Requests sent', limits: 'Counts SMS and email; says nothing about delivery for email' },
                    { metric: 'Delivery status', def: 'Share of SMS requests confirmed delivered', calc: 'Delivered / SMS sent', limits: 'Confirmed for SMS through Twilio only' },
                    { metric: 'Reviews received', def: 'Google and Facebook reviews in the period', calc: 'Reputation Overview: Reviews received', limits: 'Includes reviews not prompted by a request; offline reviews need Manual Reviews' },
                    { metric: 'Review-to-request ratio (rough)', def: 'Reviews received relative to requests sent', calc: 'Reviews received / requests sent', limits: 'Cannot be tied to the same clients, since reviews are not linked to contacts. Treat as a rough indicator only' },
                    { metric: 'Inquiries by source', def: 'Inquiries recorded for each source', calc: 'Count of opportunities by Source', limits: "Depends on the field being filled; 'N/A' hides unknowns" },
                    { metric: 'Inquiry-to-consultation booking rate by source', def: 'Eligible inquiries from a source that book a consultation', calc: 'Booked / total eligible inquiries from that source x 100', limits: "Define 'eligible' once; state the period; small numbers swing wildly" },
                    { metric: 'Relationship follow-up completion', def: 'Relationship tasks completed on time', calc: 'Completed on time / tasks due', limits: 'Measures activity, not value' },
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
              Do not treat a rising review count as a growth result, and do not conclude that a source caused a client because it appears in the CRM. A source field records an answer; it does not prove influence. HighLevel's Overview also labels sentiment using a language model, so do not use those labels as a measure of client satisfaction.
            </p>

            {/* Section: Step-by-Step */}
            <h2 id="step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Step-by-Step Implementation Example
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Illustrative scenario: the three-lawyer firm above. Details are hypothetical and are not a template.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Step</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What the firm does</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { step: '1. Objective', what: 'A written, repeatable process: ask every eligible client for honest feedback; record the source of every inquiry; assign each referral relationship an owner' },
                    { step: '2. Configuration', what: 'Reputation: connect Google Business Profile, set the Review Link, set request settings and templates. Custom fields: Original Source, Referred By, Relationship Owner. Tags: review-eligible, review-requested, do-not-contact. Workflow settings: Allow Re-entry off' },
                    { step: '3. Information needed', what: 'Firm-defined eligibility criteria; a verified phone or email; consent for the channel; the source list' },
                    { step: '4. Workflow logic', what: 'Staff applies review-eligible > condition checks tags > Send Review Request > add review-requested > failure or opt-out creates a task. A separate Review Received workflow notifies a named user and logs the review' },
                    { step: '5. Human responsibilities', what: 'Confirm eligibility; handle replies and complaints; draft any public response without client information; thank referrers where permitted; review referral relationships on a schedule' },
                    { step: '6. Safeguards', what: 'Same request to every eligible client; no incentive; counsel reviews the template; no matter details in any message' },
                    { step: '7. Test cases', what: 'See the matrix below' },
                    { step: '8. Success measure', what: 'The process runs as designed (checked in the matrix); the Source field is filled on most inquiries; relationship tasks are completed; the firm reviews inquiries and consultation booking by source each quarter' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.step}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Test and Troubleshoot */}
            <h2 id="test-troubleshoot" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Test and Troubleshoot the Workflows
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use test contacts with your own phone and email. Do not mark a workflow as working until you see the expected result in a live account, and do not assume every account behaves identically.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Test scenario</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Expected behavior</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to inspect</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Common failure to investigate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Contact meets the criteria', expected: 'One request sent; review-requested tag added', inspect: 'Reputation > Requests status; contact tags', failure: 'Template not assigned; channel mismatch' },
                    { scenario: 'Contact does not meet the criteria', expected: 'No request; reason recorded', inspect: 'Workflow execution; condition branch', failure: 'Condition checks the wrong tag' },
                    { scenario: 'Tag applied twice', expected: 'No second request', inspect: 'Allow Re-entry; review-requested tag', failure: 'Re-entry on; two workflows' },
                    { scenario: 'Contact opts out', expected: 'No further request; suppressed', inspect: 'DND and opt-out status; retries', failure: 'Retry still sent; WhatsApp or email fallback used' },
                    { scenario: 'Contact detail missing', expected: 'Request skipped or error task created', inspect: 'Execution log; request status', failure: 'Failed: system falls back to another channel' },
                    { scenario: 'Retry behavior', expected: 'Retries stop at the maximum or on click', inspect: 'Request history', failure: 'Retry sent after a review was posted without a click' },
                    { scenario: 'Referral source unknown', expected: "'Unknown' recorded; not blank", inspect: 'Contact and opportunity fields', failure: "Field optional and left empty; 'N/A' in report" },
                    { scenario: 'Relationship task assigned to the wrong person', expected: 'Task goes to the owner named', inspect: 'Add Task Assign To; owner field', failure: 'Owner field not mapped; task assigned to a former user' },
                    { scenario: 'Workflow does not run', expected: 'Execution recorded', inspect: 'Enrollment history and execution logs', failure: 'Trigger filter; contact not enrolled' },
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
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Test scenario</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Expected behavior</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to inspect</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Common failure to investigate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Source field inconsistent', expected: 'Only list values appear', inspect: 'Field type; imported data', failure: 'Free-text field used; import with different spellings' },
                    { scenario: 'Report does not show the record', expected: 'Opportunity appears under its source', inspect: 'Lead Source Report filters; opportunity source', failure: 'Source missing; wrong pipeline or date property' },
                    { scenario: 'Review Received fires', expected: 'Named user notified; review logged', inspect: 'Trigger filters; internal notification', failure: 'Filters (rating, spam) exclude it; integration not connected' },
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
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              To investigate a failure, open the workflow's enrollment history and execution log, find the last step that ran, correct the configuration and retest with a fresh contact. See <Link href="https://www.ghlscaleup.com/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">our guide to enrollment history and execution logs</Link> for the diagnostic method; verify its interface details in your own account.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mistakes and How to Correct Them
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
                    { mistake: 'Asking only clients who seem happy', correction: 'Write eligibility criteria and ask everyone who meets them' },
                    { mistake: 'Routing by sentiment to public or private pages', correction: 'One link for everyone; offer a private conversation to everyone' },
                    { mistake: 'Offering incentives', correction: 'No incentive; check rules and platform policy before any exception' },
                    { mistake: 'Sending at a sensitive moment', correction: 'Define timing and exclusions in writing' },
                    { mistake: 'Mentioning the matter or outcome', correction: 'Generic, confidential wording; counsel reviews it' },
                    { mistake: 'Treating every referrer as a marketing contact', correction: 'Tasks for a named owner; no bulk sends' },
                    { mistake: 'Free-text source labels', correction: 'A controlled dropdown with "Unknown"' },
                    { mistake: 'Assuming source proves cause', correction: 'Report it as a record, not a cause' },
                    { mistake: 'Not stopping after an opt-out', correction: 'Test opt-out in every channel' },
                    { mistake: 'Counting reviews and messages as results', correction: 'Measure inquiries, consultations and follow-up completion' },
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
              Legal, Ethical, Privacy, and Professional Safeguards
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Rules differ by jurisdiction, practice area, platform and channel. GoHighLevel does not make a firm compliant. Have a qualified lawyer in your jurisdiction review the process before launch.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880]">
              {[
                { title: 'Confidentiality.', body: 'Do not put matter details in any message or public reply. ABA Formal Opinion 496 treats confidentiality as the central concern in responding to online reviews.' },
                { title: 'Advertising, testimonials and solicitation.', body: 'Professional rules on client testimonials, endorsements and solicitation differ across jurisdictions. We did not verify them here. Displaying reviews on your website through a widget, including offline reviews entered through Manual Reviews, may implicate them.' },
                { title: 'Platform policy.', body: 'Google prohibits incentivized reviews, selective solicitation of positive reviews and conflict-of-interest reviews, including by employees and relatives.' },
                { title: 'Consumer-protection law.', body: "The FTC's 2024 rule on reviews and testimonials is summarized as covering fake reviews, sentiment-conditioned incentives, suppression and insider reviews. Whether and how it applies to your firm is a question for counsel." },
                { title: 'Consent and opt-out.', body: 'Text, email and WhatsApp each have their own rules. Keep a suppression list and test it.' },
                { title: 'Referral arrangements.', body: 'Payments, fee sharing and reciprocal arrangements are regulated and vary. Do not automate them without review.' },
                { title: 'Data minimization and access.', body: 'Store only what you need. Limit who can see source and relationship data. Review vendor terms and integrations.' },
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
              Start with the written process: who is eligible, what the message says, who owns each referral relationship, and how sources are recorded. Then build only the parts HighLevel can carry out: a request workflow with a duplicate guard, a Review Received alert, a source field and a few tasks. Test every exit path, measure inquiries and consultations by source rather than counting messages, and keep client confidentiality, professional judgment and relationships with the firm.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you want help building these workflows, GHL Scale Up can scope a project with you.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about law firm reviews and referrals in GoHighLevel?</strong>
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
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language for GoHighLevel →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation →</Link>
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-entry →</Link>
                <Link href="/blog/gohighlevel-ecommerce-review-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Ecommerce Review Automation →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Start with the written process. Then build only what HighLevel can carry out.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  If you want help building these workflows, GHL Scale Up can scope a project with you.
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
                Facts checked against HighLevel documentation, 23 October 2026. Interfaces, plans and usage charges change; confirm in your own account. No HighLevel account was available for testing; the test matrix in this article is a plan, and nothing is marked as tested. This guide relies on HighLevel's documentation and says where it is silent or thin. This is general information, not legal advice.
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