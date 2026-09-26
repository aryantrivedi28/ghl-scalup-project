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
  AlertOctagon,
  CheckCircle2,
  XCircle,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Info,
  FileCheck,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function A2PErrorCodesExplainedClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'how-to-use',
        'code-vs-reason',
        'where-from',
        'at-a-glance',
        'error-30882',
        'error-30883',
        'error-30886',
        'error-30898',
        'other-current',
        'error-30034',
        'not-listed',
        'code-vs-campaign',
        'code-vs-brand',
        'after-fixing',
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
      q: "What does A2P error 30882 mean?",
      a: "It means the Campaign did not meet carrier Terms and Conditions requirements. It is a legacy code; newer rejections are more likely to show a more specific code for the same underlying problem."
    },
    {
      q: "What does A2P error 30883 mean?",
      a: "It means the submission included restricted SHAFT content: sex, hate, alcohol, firearms or tobacco. It has been replaced by distinct codes per category since March 23, 2026."
    },
    {
      q: "What does A2P error 30886 mean?",
      a: "The Campaign description does not thoroughly explain its purpose, or does not match the selected use case. This code is still current."
    },
    {
      q: "What does A2P error 30898 mean?",
      a: "The same EIN is being used to register more Brands than TCR allows for that registration type."
    },
    {
      q: "Can I resubmit after fixing an error code?",
      a: "Usually yes, once the underlying issue is corrected. Codes tied to prohibited or high risk content are not eligible for standard resubmission."
    },
    {
      q: "Is every A2P error code listed here?",
      a: "No. This page covers the codes with the most practical relevance for GoHighLevel users. For the fuller category based breakdown, see the Campaign Rejected guide."
    },
    {
      q: "My error code has no explanation here. What should I do?",
      a: "Note the exact code and text, determine whether it is a Brand or Campaign issue, use the relevant guide, and contact HighLevel Support if the documented fix does not resolve it."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'how-to-use', title: 'How to Use This Guide' },
    { id: 'code-vs-reason', title: 'Error Code vs Rejection Reason vs Status' },
    { id: 'where-from', title: 'Where These Codes Come From' },
    { id: 'at-a-glance', title: 'A2P Error Codes at a Glance' },
    { id: 'error-30882', title: 'A2P Error 30882: Terms and Conditions' },
    { id: 'error-30883', title: 'A2P Error 30883: SHAFT Content Violation' },
    { id: 'error-30886', title: 'A2P Error 30886: Campaign Description Insufficient' },
    { id: 'error-30898', title: 'A2P Error 30898: Too Many Brands on One EIN' },
    { id: 'other-current', title: 'Other Current A2P Error Codes' },
    { id: 'error-30034', title: 'A2P Error 30034: Approved Campaign, Number Not Working' },
    { id: 'not-listed', title: 'What If Your Error Code Is Not Listed Here?' },
    { id: 'code-vs-campaign', title: 'Error Code vs Campaign Rejection' },
    { id: 'code-vs-brand', title: 'Error Code vs Brand Rejection' },
    { id: 'after-fixing', title: 'What to Do After Fixing the Error' },
    { id: 'faq', title: 'A2P Error Code FAQs' }
  ];

  const quickRef = [
    { code: '30882 (legacy)', means: 'Campaign does not meet carrier Terms and Conditions', stage: 'Campaign', resubmit: 'Yes, once the T&C issue is fixed' },
    { code: '30883 (legacy)', means: 'Content restricted under SHAFT: sex, hate, alcohol, firearms or tobacco', stage: 'Campaign', resubmit: 'No, if genuinely restricted content' },
    { code: '30886', means: 'Campaign description does not thoroughly explain the purpose, or does not match the use case', stage: 'Campaign', resubmit: 'Yes' },
    { code: '30893', means: 'Sample messages are missing, unclear, or do not match the use case', stage: 'Campaign', resubmit: 'Yes' },
    { code: '30898', means: 'The same EIN is being used to register more brands than allowed', stage: 'Brand', resubmit: 'Depends; reduce brands per EIN first' },
    { code: '30919', means: 'Website lacks sufficient business information or messaging disclosure', stage: 'Campaign', resubmit: 'Yes' },
    { code: '30925', means: 'Opt in form is missing a consent checkbox, or it is pre-selected', stage: 'Campaign', resubmit: 'Yes' },
    { code: '30963 / 30964', means: 'Campaign uses a public URL shortener, or a link uses HTTP instead of HTTPS', stage: 'Campaign', resubmit: 'Yes' },
    { code: '30034', means: 'Approved Campaign, but the number is not linked or carrier activation is still completing', stage: 'Number', resubmit: 'Not applicable; link the number, do not resubmit' }
  ];

  const otherCodes = [
    { code: '30893', means: 'Sample messages are missing, unclear, or do not match the use case', fix: 'Add realistic, distinct samples that match your use case, include your business name and opt out language' },
    { code: '30907', means: 'Website URL does not match the Campaign description or brand information', fix: 'Confirm the website aligns with both your registered Brand and Campaign details' },
    { code: '30908', means: 'A compliant privacy policy could not be located or was not linked in the message flow', fix: 'Make the privacy policy publicly accessible and link it directly in the message flow' },
    { code: '30909', means: 'Your call to action or message flow cannot be verified by reviewers', fix: 'Provide complete CTA information and every consent method used; add hosted screenshots if consent happens behind a login' },
    { code: '30919', means: 'Website lacks sufficient business information or messaging disclosure', fix: 'Add your company name, a description of services, contact information and a mention of your SMS program' },
    { code: '30924', means: 'Consent language is missing required disclosures, such as frequency or rates', fix: 'Add message type, frequency, the message and data rates disclosure, and STOP instructions near the checkbox' },
    { code: '30925', means: 'Opt in form has no checkbox, or the checkbox is pre-selected', fix: 'Add an unchecked by default checkbox specifically for SMS consent' },
    { code: '30963', means: 'Campaign uses a public URL shortener such as bit.ly', fix: 'Replace shortened links with full, direct HTTPS URLs' },
    { code: '30964', means: 'Campaign URLs use HTTP instead of HTTPS', fix: 'Update links to HTTPS' }
  ];

  // Reusable Project Help Card Component
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
          <span className="text-[#1A2236] font-medium">A2P Error Codes Explained</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">A2P 10DLC</span>
            <span className="bg-[rgba(220,53,69,0.15)] text-[#DC3545] text-[11px] font-semibold px-2.5 py-1 rounded-full">Error Codes</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Troubleshooting</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Error Codes in GoHighLevel:<br />
            <span className="text-[#F8D000]">What They Mean and How to Fix Them</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered · Verified against GoHighLevel, Twilio, and The Campaign Registry documentation, September 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              An A2P error code is the specific identifier carriers or HighLevel attach to a rejected Brand or Campaign so you know exactly what failed. Find your code in Trust Center under <strong className="text-white">View required fixes</strong>, look it up below, and follow the correction listed. Most codes are fixable by editing and resubmitting; a smaller set, for prohibited or high risk content, are not.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              HighLevel introduced a new, more precise set of error codes on March 23, 2026. If your rejection shows an older, broader code such as 30882, 30883, 30884 or 30897, that is a legacy code still shown on some rejections; the meaning below still applies, but a newer submission would likely show a more specific code instead.
            </p>
          </div>

          {/* CTA Button 1 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Error Code Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#at-a-glance"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Error Code Table
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* SIDEBAR */}
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
                5+ years GHL experience · 200+ A2P registrations handled globally. All technical details verified as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">Error Code Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We diagnose A2P error codes for agencies and their clients, fix the underlying issue, and manage resubmission or appeals.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* MAIN CONTENT */}
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

            {/* Section: How to Use This Guide */}
            <h2 id="how-to-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              How to Use This Guide
            </h2>
            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li>In your GoHighLevel sub-account, go to Settings, then Phone System, then Trust Center.</li>
              <li>Open Brand &amp; Campaigns, then find the rejected Brand or Campaign.</li>
              <li>Select <strong className="text-[#1A2236]">View required fixes</strong> and note the exact error code shown.</li>
              <li>Find that code in the tables below. If it is not listed, use the section on unlisted codes near the end.</li>
              <li>Apply the correction, review your whole submission for consistency, then resubmit.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If your rejection came with no numeric code at all, that is normal. Not every rejection reason is a numbered code, and broader troubleshooting by symptom lives in the <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected guide</Link>.
            </p>

            {/* Section: Error Code vs Rejection Reason vs Status */}
            <h2 id="code-vs-reason" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Error Code vs Rejection Reason vs Status
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              These three terms are not interchangeable. <strong className="text-[#1A2236]">Status</strong> is where a Brand or Campaign sits in the process: pending, approved, rejected. <strong className="text-[#1A2236]">Rejection reason</strong> is the plain language explanation of what failed. <strong className="text-[#1A2236]">Error code</strong> is the specific numbered identifier attached to that reason. A Campaign can be rejected with a documented reason and no visible number, or with both a reason and a code. This guide covers the numbered codes.
            </p>

            {/* Section: Where These Codes Come From */}
            <h2 id="where-from" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where These Codes Come From
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel provides the registration workflow, but the codes themselves come from The Campaign Registry (TCR) and the carriers that review Brand and Campaign submissions, surfaced to you inside Trust Center. So a code is not something HighLevel itself decided; it reflects what TCR or a carrier flagged. This guide explains what each code means for GoHighLevel users specifically. It does not cover the separate numbered errors for SMS delivery failures after approval (for example, a message that fails to send once your Campaign is already live), which HighLevel documents in its own SMS delivery error guide; those are a different stage from registration and are outside this page's scope.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-error-codes-infographic.png"
                  alt="A2P Error Codes in GoHighLevel: Quick reference table, legacy vs current codes, common rejection causes, and fix guidance"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P Error Codes in GoHighLevel: Quick reference table, legacy vs current codes, common rejection causes, and fix guidance</span>
              </div>
            </div>


            {/* Section: A2P Error Codes at a Glance */}
            <h2 id="at-a-glance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Error Codes at a Glance
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This table covers the codes with genuine search demand or practical relevance for GoHighLevel users. It is a starting reference, not the complete list of every code TCR can return.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Code</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Resubmit?</th>
                  </tr>
                </thead>
                <tbody>
                  {quickRef.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-bold text-[#1A2236]">{item.code}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.means}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.stage}</td>
                      <td className={`py-3 px-3 font-semibold ${item.resubmit.startsWith('No') ? 'text-[#DC3545]' : item.resubmit.startsWith('Yes') ? 'text-[#25C97D]' : 'text-[#0E9BF0]'}`}>{item.resubmit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Error 30882 */}
            <h2 id="error-30882" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Error 30882: Terms and Conditions
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it means:</strong> the Campaign did not meet carrier requirements for Terms and Conditions. <strong className="text-[#1A2236]">Where it occurs:</strong> Campaign review. <strong className="text-[#1A2236]">Current status:</strong> this is one of the general codes HighLevel replaced with more specific ones starting March 23, 2026, so a newer rejection is more likely to show a granular code instead, such as 30907 (website does not match the Campaign) or 30908 (privacy policy not accessible). <strong className="text-[#1A2236]">Fix:</strong> make sure your Terms and Conditions page is live, publicly accessible, and linked from your consent flow, and that it covers the required elements described in HighLevel's opt in policy guidelines. <strong className="text-[#1A2236]">Resubmit:</strong> yes, once the page is corrected and accessible.
            </p>

            {/* Section: Error 30883 */}
            <h2 id="error-30883" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Error 30883: SHAFT Content Violation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What it means:</strong> the submission included restricted content under the SHAFT categories, sex, hate speech, alcohol, firearms or tobacco. <strong className="text-[#1A2236]">Where it occurs:</strong> Campaign review, and it can apply to the Campaign description, sample messages, website content or any linked URL. <strong className="text-[#1A2236]">Current status:</strong> also a legacy catch-all code. Since March 23, 2026, HighLevel issues a specific code per category instead, for example a distinct code for alcohol content without an age gate versus alcohol promotion generally. <strong className="text-[#1A2236]">Fix:</strong> review your description, samples and website for the flagged category, add an age gate where the content genuinely requires one, or remove the content. <strong className="text-[#1A2236]">Resubmit:</strong> only if the underlying content is not actually a SHAFT violation. Genuinely restricted content is not eligible for standard resubmission.
            </p>

            {/* Section: Error 30886 */}
            <h2 id="error-30886" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Error 30886: Campaign Description Insufficient
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What it means:</strong> your Campaign description does not thoroughly explain the Campaign's purpose, or does not match your selected use case. <strong className="text-[#1A2236]">Where it occurs:</strong> Campaign review, and this code remains current under HighLevel's Campaign Use Case category. <strong className="text-[#1A2236]">Fix:</strong> rewrite the description so it identifies who sends the messages, who receives them, what the messages contain, and how recipients opted in, and make sure it matches your declared use case. <strong className="text-[#1A2236]">Resubmit:</strong> yes.
            </p>

            {/* Section: Error 30898 */}
            <h2 id="error-30898" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Error 30898: Too Many Brands on One EIN
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What it means:</strong> the same EIN is registered against more brands than TCR allows for that registration type. <strong className="text-[#1A2236]">Where it occurs:</strong> Brand registration, listed under HighLevel's Registration &amp; Brand category. <strong className="text-[#1A2236]">Fix:</strong> only register the minimum number of brands your EIN actually needs; do not resubmit until the brand count is corrected. <strong className="text-[#1A2236]">Resubmit:</strong> the correction has to happen at the account level (reducing brands per EIN) rather than by editing a single Campaign.
            </p>


            {/* Section: Other Current A2P Error Codes */}
            <h2 id="other-current" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Other Current A2P Error Codes
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These codes are current under HighLevel's post March 23, 2026 system and come up often enough to be worth a brief entry.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Code</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {otherCodes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-bold text-[#1A2236]">{item.code}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.means}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This list is not exhaustive. HighLevel's complete current reference, including the SHAFT, disallowed and high risk categories, is in the <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected guide</Link>, which groups codes by category rather than listing every one individually.
            </p>

            {/* Section: Error 30034 */}
            <h2 id="error-30034" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Error 30034: Approved Campaign, Number Not Working
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This one is different from the rest of this page. It does not mean your Campaign was rejected. It means the Campaign is approved but the specific phone number has not been linked to it, or carrier activation is still completing. Go to Settings, then Phone System, then Phone Numbers, and confirm the number shows the green A2P Verified label; if not, link it to the approved Campaign. HighLevel notes this can take up to 24 hours after approval. Do not resubmit the Campaign for this error.
            </p>

            {/* Section: What If Your Error Code Is Not Listed Here */}
            <h2 id="not-listed" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What If Your Error Code Is Not Listed Here?
            </h2>
            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Record the exact code and the full text shown in View required fixes.</li>
              <li>Check whether it appeared on a Brand or a Campaign; the fix is completely different for each.</li>
              <li>If it is a Brand, use the <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Brand Rejected guide</Link>. If it is a Campaign, use the <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected guide</Link>, which covers rejection categories more broadly than this page's code list.</li>
              <li>Review your whole submission for consistency, not only the field the code names.</li>
              <li>If the documented remediation does not resolve it, or you believe the rejection was made in error, contact HighLevel Support with the code and your business details.</li>
            </ol>

            {/* Section: Error Code vs Campaign Rejection */}
            <h2 id="code-vs-campaign" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Error Code vs Campaign Rejection
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Think of the <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected guide</Link> as the "why was my Campaign rejected" resource, organized by problem: use case, description, samples, consent, website, content. Think of this page as the "what does code X mean" lookup. Start with whichever one matches how you arrived: with a specific number, start here; with a general rejection and no clear cause, start there.
            </p>

            {/* Section: Error Code vs Brand Rejection */}
            <h2 id="code-vs-brand" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Error Code vs Brand Rejection
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Some codes that appear during Campaign review actually point to a Brand identity problem, such as 30898 above, a Sole Proprietor Campaign using a corporate name, or a Brand that does not meet Sole Proprietor criteria. If your code traces back to your business identity rather than your messaging content, use the <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Brand Rejected guide</Link> instead of trying to fix it as a Campaign issue.
            </p>

            {/* Section: What to Do After Fixing the Error */}
            <h2 id="after-fixing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What to Do After Fixing the Error
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Correct the issue the code identifies, then review the entire Brand or Campaign for consistency before resubmitting, since fixing one field can expose a mismatch elsewhere. Most eligible codes can be corrected and resubmitted from the existing submission. A smaller set, for prohibited or high risk content, are not eligible for standard resubmission at all. Once resubmitted, watch the status in Trust Center rather than submitting again while it is pending.
            </p>


            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              A2P Error Code FAQs
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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected: What It Means and How to Fix It →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Rejected Fix Guide →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Got an A2P error code you cannot resolve?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up resolves A2P rejections for agencies and their clients. Error code diagnosis, campaign description rewrites, consent flow updates, EIN consolidation, and full resubmission management.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Strategy Call
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations handled globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                This guide was checked against HighLevel's A2P Campaign Rejections, Required Fixes and Vetting Errors documentation, current as of September 2026, which introduced the granular codes referenced here on March 23, 2026. Codes and their meanings can change; confirm the exact wording shown in your own Trust Center before acting on it.
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