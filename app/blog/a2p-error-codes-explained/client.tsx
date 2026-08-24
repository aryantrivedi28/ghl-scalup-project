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
  Star,
  AlertOctagon,
  Info,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2PErrorCodesExplainedClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'quick-reference',
        'march-2026-update',
        'error-30886',
        'error-30883',
        'error-30882',
        'error-30898',
        'after-resolution',
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
      q: "What does A2P error code 30886 mean in GoHighLevel?",
      a: "Error 30886 means your A2P 10DLC campaign was rejected because the Campaign Description field does not clearly explain the messaging program. According to Twilio's official documentation, the description must state who is sending the messages, who receives them, and why the messages are being sent. Common causes include a description that is too vague, does not match the selected use case or sample messages, or identifies the agency registering on behalf of a client instead of the actual client business. Error 30886 is resubmittable rewrite the description to address these issues and resubmit the existing campaign."
    },
    {
      q: "What does A2P error code 30883 mean in GoHighLevel?",
      a: "Error 30883 means your A2P 10DLC campaign was rejected because the submitted use case, sample messages, or business category was identified as prohibited content. Twilio's documentation states content violations include SHAFT-related material (Sex, Hate, Alcohol, Firearms, Tobacco) and marijuana or CBD. Error 30883 is not eligible for standard resubmission you cannot fix and resubmit the same campaign. If you believe the rejection was made in error, contact GHL or Twilio support to appeal. Only submit a new campaign if you can materially change the use case so it is compliant."
    },
    {
      q: "What does A2P error code 30882 mean in GoHighLevel?",
      a: "Error 30882 means your campaign was rejected because the terms and conditions associated with it do not meet A2P 10DLC requirements. According to Twilio's official documentation, this code is used for campaigns involving affiliate marketing, third-party lead generation, or consumer data sharing with affiliates all of which are forbidden for SMS and MMS in the US and Canada. It also applies when consent is bundled into general terms and conditions rather than given directly for the specific messaging campaign. Error 30882 is not eligible for edit and retry."
    },
    {
      q: "What does A2P error code 30898 mean in GoHighLevel?",
      a: "Error 30898 means your campaign was rejected because the same EIN has been used for too many Brand registrations, or the registration appears duplicative without a clear business reason. Confirmed from Twilio's official documentation: campaigns tied to excessive Brand registrations under one EIN can be rejected even when the campaign details themselves are valid. The fix is to review all Brand registrations under the same EIN, consolidate duplicates, and resubmit the campaign under the correct Brand structure. Do not resubmit until the underlying Brand issue is resolved."
    },
    {
      q: "Which A2P error codes can be fixed and resubmitted?",
      a: "Of the four codes covered in this guide: 30886 (Invalid Campaign Description) can be fixed and resubmitted at no additional cost edit the campaign description and resubmit the existing campaign. 30898 (Excessive EIN) can be resubmitted after the underlying Brand registration issue is resolved. 30883 (Content Violation) and 30882 (Terms and Conditions) are not eligible for standard resubmission the use case or consent structure itself is the problem. For a complete list of which codes are resubmittable across all A2P rejection types, see GHL's 'Understanding A2P Campaign Rejection Reasons and Required Fixes' article in their support portal."
    },
    {
      q: "What changed with A2P error codes in March 2026?",
      a: "As of March 23, 2026, Twilio released more granular error codes for A2P 10DLC campaign rejections. Previously, codes like 30883, 30884, 30885, and 30897 served as broad catch-alls covering multiple rejection types. The general code 30883 now has distinct sub-codes for each SHAFT category (Sex, Hate, Alcohol, Firearms, Tobacco), and the high-risk codes 30884 and 30885 have been replaced with more specific codes per content type. The four codes covered in this guide (30882, 30883, 30886, 30898) remain active and in use they were not removed by the March 2026 update. If you receive a code not listed here, verify it against GHL's official campaign rejection article or Twilio's Error and Warning Dictionary."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-reference', title: '1. Quick reference: all four codes at a glance' },
    { id: 'march-2026-update', title: '2. The March 2026 error code update: what changed' },
    { id: 'error-30886', title: '3. Error 30886 Invalid Campaign Description: cause and fix' },
    { id: 'error-30883', title: '4. Error 30883 Content Violation: cause and what to do' },
    { id: 'error-30882', title: '5. Error 30882 Terms and Conditions: cause and what to do' },
    { id: 'error-30898', title: '6. Error 30898 Excessive EIN: cause and fix' },
    { id: 'after-resolution', title: '7. What to do once errors are resolved' },
    { id: 'faq', title: '8. Frequently asked questions' }
  ];

  const quickRef = [
    { code: '30886', name: 'Campaign vetting rejection Invalid Campaign Description', resubmittable: 'Yes', category: 'Campaign description issue', firstAction: 'Rewrite the description to answer: who sends, who receives, why' },
    { code: '30883', name: 'Campaign vetting rejection Content Violation', resubmittable: 'No', category: 'Prohibited content', firstAction: 'Do not resubmit unchanged. Appeal only if rejection was incorrect.' },
    { code: '30882', name: 'Campaign vetting rejection Terms and Conditions', resubmittable: 'No', category: 'Affiliate marketing / third-party data sharing', firstAction: 'Do not resubmit. Review and remove the prohibited use case entirely.' },
    { code: '30898', name: 'Campaign vetting rejection Excessive EIN', resubmittable: 'No (until Brand issue fixed)', category: 'Duplicate or excessive Brand registration under one EIN', firstAction: 'Fix the Brand structure first. Do not resubmit the Campaign until resolved.' }
  ];

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

      {/* Hero Section - WIDE */}
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
            A2P Error Codes 30882, 30883, 30886 and 30898:<br />
            <span className="text-[#F8D000]">Explained (GoHighLevel 2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Intro Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            When your A2P campaign registration is rejected in GoHighLevel, you receive an error code alongside the rejection reason. Error codes matter because they determine what you can actually do next some codes allow you to fix and resubmit the campaign at no additional cost, while others indicate a rejection that cannot be reversed through standard resubmission. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled A2P registrations across hundreds of client accounts. This guide covers four of the most common A2P rejection error codes 30882, 30883, 30886, and 30898 with the exact cause and fix for each, sourced directly from Twilio's official documentation.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
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
                        {activeId === item.id && <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />}
                        <span className="flex-1">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Card - Project Help */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
              <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your project.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Book a 30 min Free Call
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

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
                5+ years GHL experience · 200+ A2P registrations handled globally. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Linkedin className="w-3 h-3" /> LinkedIn</a>
                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Twitter className="w-3 h-3" /> X</a>
                <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"><Copy className="w-3 h-3" /> Copy link</button>
              </div>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <AlertOctagon className="w-5 h-5 text-[#DC3545]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC3545]">The Most Important Distinction in This Guide</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Some error codes are resubmittable. Others are not.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                30886 (Invalid Campaign Description) and 30898 (Excessive EIN) can be corrected and resubmitted. 30883 (Content Violation) and 30882 (Terms and Conditions) are not eligible for standard resubmission the campaign content or use case itself is the problem, not the way it was described. Knowing which category your error code falls into determines your next step before you change anything.
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

            {/* Section 1: Quick Reference */}
            <h2 id="quick-reference" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Quick Reference: All Four Codes at a Glance
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Error code</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Official name</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Resubmittable?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">First action</th>
                  </tr>
                </thead>
                <tbody>
                  {quickRef.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-bold text-[#1A2236]">{item.code}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.name}</td>
                      <td className={`py-3 px-3 font-semibold ${item.resubmittable === 'Yes' ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.resubmittable}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.category}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.firstAction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 2: March 2026 Update */}
            <h2 id="march-2026-update" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Changed With the March 2026 Error Code Update?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              As of March 23, 2026, Twilio released more granular error codes for A2P 10DLC campaign rejections. Previously, broad codes like 30883, 30884, 30885, and 30897 were used as catch-alls covering multiple rejection types. GHL's official campaign rejection documentation confirms that 30883 now has distinct sub-codes per SHAFT category (Sex, Hate, Alcohol, Firearms, Tobacco), and the high-risk codes 30884 and 30885 have been replaced with specific codes per content type.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What this means for this guide:</strong> The four codes covered here (30882, 30883, 30886, 30898) are still active and in use as of July 2026 they were not removed by the March 2026 update. 30883 remains the general content violation code; the new granular codes appear alongside or in place of it for more specific violations. If you receive a code not listed in this guide, verify it against GHL's official "Understanding A2P Campaign Rejection Reasons and Required Fixes" article in the GHL support portal, or against Twilio's Error and Warning Dictionary at twilio.com/docs/api/errors.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the comprehensive campaign rejection guide covering all rejection types: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected Fix Guide →</Link>
            </p>

            {/* Section 3: Error 30886 */}
            <h2 id="error-30886" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Does Error 30886 Mean and How Do You Fix It?
            </h2>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">ERROR 30886 Campaign vetting rejection Invalid Campaign Description</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Source: Twilio Error and Warning Dictionary twilio.com/docs/api/errors/30886. <strong className="text-[#25C97D]">Resubmittable: YES.</strong>
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it means</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your A2P 10DLC campaign was rejected during vetting because the Campaign Description field does not clearly explain the messaging program. Confirmed from Twilio's official documentation.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">Confirmed causes (from Twilio docs)</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The campaign description is too vague or incomplete.</li>
              <li>The description does not explain who the sender is, who the recipients are, and why they are receiving messages.</li>
              <li>The description does not align with the selected campaign use case.</li>
              <li>The description does not match the sample messages, brand name, website, or other registration details.</li>
              <li>If registering on behalf of customers, the description identifies the ISV or platform instead of the actual business sending the messages.</li>
              <li>The description includes personal information instead of a general summary of the messaging program.</li>
            </ul>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">FIX FOR 30886 REWRITE THE CAMPAIGN DESCRIPTION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Rewrite the campaign description so it clearly states: (1) who the sender is use the actual registered business name, not your agency name, (2) who the intended recipients are and how they opted in, and (3) the purpose of the messages. Make the description specific enough to describe the real messaging program. Verify that the description matches your selected use case and your sample messages. If you are an ISV or agency registering on behalf of a client, use the client's actual business name not your agency name. Remove personal information. Edit the existing campaign and resubmit.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full campaign description guidance and templates: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
            </p>

            {/* Section 4: Error 30883 */}
            <h2 id="error-30883" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Does Error 30883 Mean and What Can You Do?
            </h2>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertOctagon className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">ERROR 30883 Campaign vetting rejection Content Violation</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Source: Twilio Error and Warning Dictionary twilio.com/docs/api/errors/30883. <strong className="text-[#DC3545]">Resubmittable: NO (standard resubmission not eligible).</strong>
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it means</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your A2P 10DLC campaign was rejected during manual vetting because the submitted use case, sample messages, or business category was identified as prohibited content. Content violations include SHAFT-related material and marijuana or CBD. Confirmed from Twilio's official documentation.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">Confirmed causes (from Twilio docs)</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Campaign description or sample messages indicate prohibited content such as sexual content, hate speech, firearms, tobacco or vape content, marijuana, or other disallowed material.</li>
              <li>The business or messaging program falls into a forbidden category for SMS or MMS in the United States or Canada. Some prohibited categories are disallowed based on the business type itself, not only the message text.</li>
              <li>The campaign was reviewed as a non-remediable content violation during A2P 10DLC vetting.</li>
            </ul>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">30883 IS NOT ELIGIBLE FOR STANDARD RESUBMISSION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Do not resubmit the same rejected campaign. This rejection type is not eligible for standard resubmission. If you believe the rejection is incorrect, contact Twilio Support (reachable through GHL support for LC Phone users) and request an appeal. Only submit a new campaign if you can materially change the use case and content so the campaign is compliant with A2P messaging policies. Review the forbidden message categories before creating a new campaign.
              </p>
            </div>

            {/* Section 5: Error 30882 */}
            <h2 id="error-30882" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Does Error 30882 Mean and What Can You Do?
            </h2>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertOctagon className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">ERROR 30882 Campaign vetting rejection Terms and Conditions</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Source: Twilio Error and Warning Dictionary twilio.com/docs/api/errors/30882. <strong className="text-[#DC3545]">Resubmittable: NO (not eligible for edit and retry).</strong>
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it means</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your campaign submission was rejected because the terms and conditions associated with the campaign do not meet A2P 10DLC review requirements. This rejection is used for campaigns that are not eligible for edit and retry, including campaigns whose use case conflicts with prohibited third-party marketing rules. Confirmed from Twilio's official documentation.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">Confirmed causes (from Twilio docs)</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The campaign involves affiliate marketing or another third-party lead generation or marketing use case. These use cases are forbidden for SMS and MMS in the United States and Canada.</li>
              <li>The terms and conditions or related policy language indicate that consumer data or message opt-in information is shared, sold, or bought by third parties or affiliates.</li>
              <li>The campaign does not show direct, campaign-specific consumer consent. For A2P 10DLC, consent cannot be obscured in general terms and conditions or bundled into another agreement.</li>
              <li>The campaign use case conflicts with A2P 10DLC campaign approval requirements or Twilio's Messaging Policy.</li>
            </ul>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">30882 IS NOT ELIGIBLE FOR EDIT AND RETRY</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Do not resubmit the rejected campaign unchanged. This rejection reason is not eligible for remediation through edit and retry. Remove affiliate marketing, third-party lead generation, or any other prohibited use case before submitting another campaign registration. Update your terms and conditions and consent flow so end users give consent directly to your brand, and mobile opt-in data is not shared with third parties or affiliates for marketing or promotional purposes. If you believe the rejection was made in error, contact Twilio Support to appeal the decision.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For confirmed compliant consent language and Privacy Policy clauses: <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
            </p>

            {/* Section 6: Error 30898 */}
            <h2 id="error-30898" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Does Error 30898 Mean and How Do You Fix It?
            </h2>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">ERROR 30898 Campaign vetting rejection Excessive EIN</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Source: Twilio Error and Warning Dictionary twilio.com/docs/api/errors/30898. <strong className="text-[#0E9BF0]">Resubmittable: Only after fixing the underlying Brand structure.</strong>
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it means</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your A2P 10DLC campaign was rejected during manual vetting because the same EIN or tax ID has been used for too many Brand registrations, or because the registration appears duplicative without a clear business reason. Campaigns tied to excessive Brand registrations under one EIN can be rejected even when the Campaign details are otherwise valid. Confirmed from Twilio's official documentation.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">Confirmed causes (from Twilio docs)</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Multiple Brands were registered with the same EIN, and the number of Brand registrations exceeded what campaign vetting allows without a clear and valid business reason.</li>
              <li>The Campaign was submitted on a Brand that duplicates an existing business identity already registered under the same EIN.</li>
              <li>Separate Brands were created for traffic that should be grouped under an existing approved Brand and Campaign structure.</li>
            </ul>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">FIX FOR 30898 CONSOLIDATE BRAND REGISTRATIONS FIRST</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Review all existing A2P 10DLC Brand registrations that use the same EIN. Remove unnecessary duplication and keep only the minimum number of Brands needed for distinct business identities or use cases. Use an existing approved Brand when the business identity is the same, instead of creating another Brand with the same EIN. Then resubmit the Campaign under the correct Brand if needed. If you need multiple Brands under one EIN, make sure you can show a clear and valid business reason before you resubmit. Do not resubmit the rejected Campaign until the underlying Brand registration issue is corrected. If you believe the rejection was made in error, contact Support to appeal after you verify your Brand structure and EIN usage.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For understanding A2P Brand registration types and EIN requirements: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For agencies managing multiple client EINs across many sub-accounts: <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P Registration for Agencies →</Link>
            </p>

            {/* Section 7: After Resolution */}
            <h2 id="after-resolution" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Should You Do Once Errors Are Resolved?
            </h2>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">For 30886 and 30898 (resubmittable errors):</strong> Edit the existing rejected campaign with all required corrections and resubmit. Do not delete and recreate editing and resubmitting costs nothing extra. Deleting and recreating starts a new vetting fee.</li>
              <li><strong className="text-[#1A2236]">For 30883 and 30882 (non-resubmittable errors):</strong> Do not resubmit the same campaign. Address the underlying prohibited content or consent issue. If the use case itself is compliant and you believe the rejection was in error, appeal through GHL or Twilio support before creating a new campaign.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Once your campaign is approved and all errors are cleared: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link> is the recommended first SMS automation to build.
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED HELP RESOLVING A2P ERROR CODES</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles A2P registration troubleshooting for agencies and their clients including identifying the correct fix for each error code, rewriting campaign descriptions, updating consent flows, and managing the resubmission process.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See results from our A2P setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss your specific error: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* Section 8: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              8. Frequently Asked Questions
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
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected: What It Means and How to Fix It →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates for GoHighLevel →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Got an A2P error code you cannot resolve?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up resolves A2P rejections for agencies and their clients. Campaign description rewrites, consent flow updates, EIN consolidation, and full resubmission management.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations handled globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                All error code definitions, causes, and solutions in this guide are sourced directly from Twilio's official Error and Warning Dictionary (twilio.com/docs/api/errors), fetched in July 2026. Error code behaviour and resubmission eligibility can change as Twilio and carrier policies evolve always verify against current official documentation before acting.
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