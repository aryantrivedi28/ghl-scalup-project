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

export default function A2PBrandRejectedFixClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-mean',
        'rejected-vs-campaign',
        'check-status',
        'rejection-causes',
        'fix-ein-mismatch',
        'new-ein',
        'fix-address-entity',
        'sole-vs-standard',
        'how-to-resubmit',
        'limits-appeals',
        'review-time',
        'after-approval',
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
      q: "Why was my A2P brand rejected?",
      a: "Usually because the submitted legal name, registration number or address could not be matched to official records. Other documented causes are a new EIN, an entity type that could not be verified, the wrong Brand type and contact verification problems."
    },
    {
      q: "How do I fix an EIN mismatch?",
      a: "Take the exact legal name from your CP 575 or 147C, correct the Brand details, and resubmit."
    },
    {
      q: "Can I resubmit a rejected A2P brand?",
      a: "Generally yes, but attempts are limited. After the limit, contact HighLevel Support with your complete CP 575."
    },
    {
      q: "How long should I wait before resubmitting?",
      a: "If the failure is a genuine mismatch, correct it and resubmit. If your EIN is new, HighLevel's sources differ, so confirm with Support. There is no guaranteed waiting period."
    },
    {
      q: "What if my legal name differs from my DBA?",
      a: "Register the Brand under the legal name on the record. If you message under a DBA, HighLevel advises declaring it in the Campaign description and keeping your website and consent wording consistent."
    },
    {
      q: "When should I contact support or appeal?",
      a: "When your details match the record and the Brand still fails, when self service attempts are used up, when the EIN is very new, or when the Brand is suspended."
    },
    {
      q: "Can I register another brand instead?",
      a: "It rarely helps. A new Brand with the same details will fail the same way, and HighLevel discourages many Brands on one EIN. Fix the existing one or ask Support first."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-mean', title: 'What Does A2P Brand Rejected Mean?' },
    { id: 'rejected-vs-campaign', title: 'Brand Rejected vs Campaign Rejected' },
    { id: 'check-status', title: 'How to Check Your Brand Status and Rejection Reason' },
    { id: 'rejection-causes', title: 'Why Was My A2P Brand Registration Rejected?' },
    { id: 'fix-ein-mismatch', title: 'How to Fix an EIN and Legal Business Name Mismatch' },
    { id: 'new-ein', title: 'What to Do If Your EIN Is New' },
    { id: 'fix-address-entity', title: 'How to Fix Address and Entity Type Problems' },
    { id: 'sole-vs-standard', title: 'How Sole Proprietor and Standard Brand Failures Differ' },
    { id: 'how-to-resubmit', title: 'How to Resubmit a Failed A2P Brand' },
    { id: 'limits-appeals', title: 'Resubmission Limits, Appeals and When to Contact Support' },
    { id: 'review-time', title: 'How Long Does Brand Review Take?' },
    { id: 'after-approval', title: 'What Happens After Your Brand Is Approved' },
    { id: 'faq', title: 'Common A2P Brand Rejection Questions' }
  ];

  const statusMapping = [
    { what: 'Brand failed, unverified or rejected', means: 'Your business identity could not be verified', go: 'This guide' },
    { what: 'Brand still pending or in review', means: 'The review has not finished. It may simply need time', go: 'Wait; do not resubmit' },
    { what: 'Brand approved, Campaign rejected', means: 'The messaging use case, description, samples, consent, website or policies failed review', go: 'A2P campaign rejection guide' },
    { what: 'Brand and Campaign approved, SMS still failing', means: 'The number may not be linked to the Campaign, or the failure has another cause', go: 'HighLevel\'s guide to linking a number to an approved Campaign' },
    { what: 'Numeric error code on a rejection', means: 'Depends on the code and the stage', go: 'A2P error codes' }
  ];

  const rejectionTable = [
    { problem: 'Legal name and EIN do not match', means: 'The name submitted differs from the name tied to that EIN in official records', verify: 'Your CP 575 or 147C letter', next: 'Correct the name, then resubmit' },
    { problem: 'Wrong or invalid registration number', means: 'A typo, transposed digit or wrong ID type', verify: 'The number against your letter or national registry', next: 'Correct it. US businesses use an EIN, not a DUNS number' },
    { problem: 'Newly issued EIN', means: 'The record may not have reached verification systems yet', verify: 'When the EIN was issued', next: 'See the EIN section below' },
    { problem: 'Address does not match', means: 'The address differs from your registered record', verify: 'The registered address on your official documents', next: 'Use the registered street address' },
    { problem: 'Entity type cannot be verified', means: 'Nonprofit, government or public company details could not be confirmed', verify: 'Registered status and, for public companies, ticker and exchange', next: 'Correct the entity type or provide documents through Support' },
    { problem: 'Wrong Brand type', means: 'Sole Proprietor was used by a business with a Tax ID, or a corporate name was used as a Sole Proprietor', verify: 'Whether you have an EIN or Tax ID', next: 'Register as a Standard Brand' },
    { problem: 'Contact or verification problem', means: 'The contact details could not be verified', verify: 'Email type, reachable phone, OTP completion', next: 'Correct the contact details and complete verification' },
    { problem: 'Maximum 3 tries exhausted', means: 'Self service attempts have run out', verify: 'Your complete CP 575', next: 'Contact Support with your documents' }
  ];

  const soleVsStandard = [
    { aspect: 'Typical failure', standard: 'Name, EIN or address does not match the record', sole: 'Wrong eligibility, a corporate suffix in the name, or a contact detail that fails validation' },
    { aspect: 'Contact rules', standard: 'Business domain email recommended; Gmail accepted but may slow approval', sole: 'Public domain email required. Business domain emails are not eligible' },
    { aspect: 'Verification', standard: 'Persona identity check or email OTP, depending on the account', sole: 'A US or Canada mobile number that can receive an OTP. VoIP and CPaaS numbers are not accepted' },
    { aspect: 'First fix', standard: 'Compare details to the tax record', sole: 'Confirm you have no Tax ID and only one employee' }
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
          <span className="text-[#1A2236] font-medium">A2P Brand Rejected Fix</span>
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
            <span className="bg-[rgba(220,53,69,0.15)] text-[#DC3545] text-[11px] font-semibold px-2.5 py-1 rounded-full">Brand Rejected</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Fix Guide</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Brand Rejected in GoHighLevel:<br />
            <span className="text-[#F8D000]">Why It Happens and How to Fix It</span>
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
              An A2P brand is rejected when The Campaign Registry (TCR) and its verification partners cannot verify the business identity you submitted. The most common cause is a mismatch between your legal business name, EIN or Tax ID, and address and what official records show. To fix it, read the exact failure reason, compare every field against your official business record, correct the details, and resubmit through the current process.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Correcting the mismatch addresses the documented failure, but approval is still subject to verification, and no fix carries a guarantee. Before changing anything, confirm that the problem really is your Brand. Pending reviews, rejected Campaigns and phone number problems look similar and need different fixes.
            </p>
          </div>

          {/* CTA Button 1 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Brand Rejection Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#rejection-causes"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Rejection Causes
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
              <div className="text-sm font-bold text-white mb-2">Brand Rejected Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P brand rejection fixes for agencies and their clients EIN verification, documentation, resubmission, and manual verification support.</p>
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

            {/* Section: What Does A2P Brand Rejected Mean */}
            <h2 id="what-mean" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Does A2P Brand Rejected Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P Brand Registration answers one question: <strong className="text-[#1A2236]">who is sending the messages?</strong> A rejected or failed Brand means the business details in that submission could not be verified or did not meet the Brand requirements. HighLevel submits your details to TCR, and the verification decision comes from TCR and its partners, not from HighLevel itself. The background on why this system exists is in our explainer on <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>, and the original submission steps are in the <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration guide</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Status wording depends on where you look. HighLevel's documentation refers to messages such as a failed brand registration, an Unverified state for certain errors, and a "Maximum 3 tries exhausted" error. Twilio, which documents the underlying process, uses the statuses PENDING, IN_REVIEW, APPROVED, FAILED and SUSPENDED. Treat Twilio's list as background, not as a map of what HighLevel shows on screen, and go by the wording in your own Trust Center.
            </p>

            {/* Section: Brand Rejected vs Campaign Rejected */}
            <h2 id="rejected-vs-campaign" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Brand Rejected vs Campaign Rejected
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are different stages with different fixes. Work out which one you have before you edit anything.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What you see</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it usually means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Where to go</th>
                  </tr>
                </thead>
                <tbody>
                  {statusMapping.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.what}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.means}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">
                        {idx === 2 ? (
                          <Link href="/blog/a2p-campaign-rejected-fix" className="hover:underline">{item.go}</Link>
                        ) : idx === 3 ? (
                          <a href="https://help.gohighlevel.com/support/solutions/articles/155000008316-error-30034-linking-a-phone-number-to-an-approved-a2p-campaign" target="_blank" rel="noopener noreferrer" className="hover:underline">{item.go}</a>
                        ) : idx === 4 ? (
                          <Link href="/blog/a2p-error-codes-explained" className="hover:underline">{item.go}</Link>
                        ) : (
                          item.go
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              One caution: some business identity problems only surface during Campaign review. HighLevel's Campaign rejection documentation includes codes for a Sole Proprietor Brand using a corporate name or a brand that does not meet Sole Proprietor criteria. Both are Brand type problems even though they appear on a Campaign. Detailed Campaign troubleshooting stays in the guide linked above, and registering the Campaign itself is covered in <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-brand-rejected-infographic.png"
                  alt="A2P Brand Rejected in GoHighLevel: Common rejection causes, EIN mismatch fixes, resubmission process, and support escalation"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P Brand Rejected in GoHighLevel: Common rejection causes, EIN mismatch fixes, resubmission process, and support escalation</span>
              </div>
            </div>


            {/* Section: How to Check Your Brand Status */}
            <h2 id="check-status" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Check Your Brand Status and Rejection Reason
            </h2>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>In your GoHighLevel sub-account, open Settings, then Phone System, then the Trust Center, and open your A2P Brand and Campaign information.</li>
              <li>Find the Brand and read its status and any message shown with it. If the Brand is pending, stop here and wait.</li>
              <li>Note the exact wording of the failure. If there is an error message, keep the text or a screenshot.</li>
              <li>Decide whether the failure points to identity (name, registration number), address, entity type, contact and verification details, or Brand type.</li>
              <li>Compare the submitted details with your official record before touching the form.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's documentation confirms this Trust Center path but does not describe a dedicated brand rejection screen, so this guide does not name any buttons. Go by what appears on your screen.
            </p>

            {/* Section: Why Was My A2P Brand Registration Rejected */}
            <h2 id="rejection-causes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Was My A2P Brand Registration Rejected?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The table lists only causes documented by HighLevel or the underlying provider documentation. Your own rejection may fall outside it, and the message in Trust Center always takes priority.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it usually means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to verify</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Next step</th>
                  </tr>
                </thead>
                <tbody>
                  {rejectionTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.means}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.verify}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How to Fix an EIN and Legal Business Name Mismatch */}
            <h2 id="fix-ein-mismatch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Fix an EIN and Legal Business Name Mismatch
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the most common failure documented for Standard Brands. The name in your submission must match the name officially recorded against your registration number, and small differences count.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Use the record, not memory.</strong> For a US business, HighLevel points to the CP 575 EIN Confirmation Letter. If you do not have it, a 147C letter from the IRS is the fallback. Do not take the name from a W-2 or W-9, because it may differ.</li>
              <li><strong className="text-[#1A2236]">Legal name, not trading name.</strong> A DBA, trade name or your messaging provider's name is not the legal name. Entity suffixes such as LLC or Inc should appear as the record shows them.</li>
              <li><strong className="text-[#1A2236]">Watch typos and digits.</strong> HighLevel lists a missing suffix, a shortened name and a transposed digit as typical mismatch sources.</li>
              <li><strong className="text-[#1A2236]">Multi line names.</strong> HighLevel advises entering every line of the name that appears above the address on the letter. Its Brand Approval guidance also warns against appending a person's name that appears after the business name. If unsure, ask Support.</li>
              <li><strong className="text-[#1A2236]">Lookup first.</strong> HighLevel suggests checking your EIN in the HIPAA Space lookup and using the listed business name.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Illustrative example, not an official rejection message: a submission of "Acme Plumbing" fails when the record reads "Acme Plumbing Services LLC". Correct the name to match the record exactly. Uploading a document does not guarantee approval, but HighLevel notes that uploading your CP 575 in the Business Details step can populate the name, EIN and registered address for you.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For non US businesses, use the number HighLevel accepts for your region. Canada uses the first 9 digits of the Business Number (BN-9). The full list is in the <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration guide</Link>.
            </p>

            {/* Section: What to Do If Your EIN Is New */}
            <h2 id="new-ein" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What to Do If Your EIN Is New
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel and Twilio both say newly issued tax IDs can fail because the record has not yet reached the databases used for verification. The sources give different numbers, so they should not be merged:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>HighLevel's brand registration guide notes that an EIN issued within the last 15 days may be rejected.</li>
              <li>HighLevel's Brand Approval Best Practices page says to wait at least 30 to 90 days from the EIN issue date before retrying, or to appeal the verification status for $10 regardless of the outcome, providing the complete PDF of your EIN letter rather than a screenshot or a single page.</li>
              <li>Twilio describes the same situation as an appeal based manual review, also with a $10 fee, in which support requests documents proving your tax registration.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's newer "Maximum 3 tries exhausted" guidance does not mention a fee, so confirm the current process and cost with HighLevel Support before paying anything. No source promises a specific waiting period will lead to approval, and the same propagation issue can affect nonprofits.
            </p>


            {/* Section: How to Fix Address and Entity Type Problems */}
            <h2 id="fix-address-entity" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Fix Address and Entity Type Problems
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Address.</strong> HighLevel says a mismatch in street, city, state, postal code or country can produce a weaker Trust Score, and its brand registration guide tells you not to put a PO box in the street address field. Use the registered address on your official documents rather than a branch or mailing address.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Nonprofits and government entities.</strong> For nonprofits and political organizations, the EIN must match the legal name on the Tax Exempt Organizations or registered political organizations list. If the organization cannot be verified, correct the entity type or provide documents for manual verification through Support.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Public companies.</strong> The stock ticker and exchange must match public sources.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Business type and identifier.</strong> Keep the entity type consistent with how the business is legally registered. Do not enter a DUNS number or a Social Security number in place of an EIN. HighLevel says DUNS is not accepted for US A2P registration.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What not to change.</strong> Do not swap in a different name or ID hoping one will verify, and do not switch to Sole Proprietor to avoid an EIN problem. A business with a Tax ID is not eligible for that path.
            </p>

            {/* Section: How Sole Proprietor and Standard Brand Failures Differ */}
            <h2 id="sole-vs-standard" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Sole Proprietor and Standard Brand Failures Differ
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Standard Brand</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Sole Proprietor Brand</th>
                  </tr>
                </thead>
                <tbody>
                  {soleVsStandard.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-semibold text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.standard}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.sole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Twilio's documentation treats the two paths separately, and its <a href="https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/troubleshooting-a2p-brands/troubleshooting-sole-proprietor-brand-registration-failures" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Sole Proprietor troubleshooting guide</a> notes that email and address details are validated, with addresses checked against USPS records. If you have a Tax ID, do not try to fix a Sole Proprietor failure. Register as a Standard Brand instead.
            </p>

            {/* Section: How to Resubmit a Failed A2P Brand */}
            <h2 id="how-to-resubmit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Resubmit a Failed A2P Brand
            </h2>
            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Confirm the failure.</strong> Make sure it is a Brand failure and not a pending review or a Campaign rejection.</li>
              <li><strong className="text-[#1A2236]">Verify the source information.</strong> Check your CP 575, 147C or national registry record.</li>
              <li><strong className="text-[#1A2236]">Correct every mismatch.</strong> Fix all of the listed problems, not just the first.</li>
              <li><strong className="text-[#1A2236]">Update the Brand details and resubmit</strong> in the A2P registration area of your sub-account, following the prompts HighLevel shows.</li>
              <li><strong className="text-[#1A2236]">Monitor the new status</strong> and avoid duplicate submissions while a review is running.</li>
              <li><strong className="text-[#1A2236]">Escalate if the documented fix does not work.</strong> See the next section.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Some steps depend on your provider. In Twilio's own console, for example, you correct the profile, delete the failed Brand and submit again. That describes Twilio, not the HighLevel interface. HighLevel's documentation does not spell out an equivalent, so follow the prompts you see.
            </p>

            {/* Section: Resubmission Limits, Appeals and When to Contact Support */}
            <h2 id="limits-appeals" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Resubmission Limits, Appeals and When to Contact Support
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Attempt limits.</strong> HighLevel documents a "Maximum 3 tries exhausted" error. Twilio documents up to three free self service resubmissions, with further help through support. Attempts are limited, so verify your details first.</li>
              <li><strong className="text-[#1A2236]">After 3 tries.</strong> HighLevel says to collect your CP 575 (or a 147C if you cannot get one) and use its support form. HighLevel then submits the documentation for Brand approval on your behalf. Details are in HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000007572-a2p-campaign-rejections-required-fixes-vetting-errors" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">rejection guide</a>.</li>
              <li><strong className="text-[#1A2236]">Documents.</strong> Provide the complete PDF, not a screenshot or first page. Documents used for manual verification must be federal, not state level, and articles of incorporation are not a substitute.</li>
              <li><strong className="text-[#1A2236]">Approved brands.</strong> HighLevel's guidance says an approved Brand cannot be edited from your account, so changes go through Support.</li>
              <li><strong className="text-[#1A2236]">Fees.</strong> Whether a resubmission or appeal costs anything can depend on the process, and HighLevel's pages are not fully consistent on this. See <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">current A2P 10DLC fees</Link> and confirm with Support.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a suspended Brand, which Twilio describes as a rules violation rather than a data mismatch, the fix is different and usually needs support involvement.
            </p>

            {/* Section: How Long Does Brand Review Take */}
            <h2 id="review-time" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Long Does Brand Review Take?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              No fixed time applies. Twilio's documentation says most Brand registrations complete within minutes, some take more than seven days, and a manual third party review can take seven business days or more. That describes Twilio's process, so treat it as context. HighLevel also documents a message about being unable to retrieve a Trust Score, which relates to secondary vetting delays of up to seven business days. See <Link href="/blog/a2p-trust-score-mps" className="text-[#0E9BF0] hover:underline">how Trust Score and MPS work</Link> for that topic.
            </p>

            {/* Section: What Happens After Your Brand Is Approved */}
            <h2 id="after-approval" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens After Your Brand Is Approved
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Campaign registration cannot proceed until the Brand is approved, and Brand approval does not approve your messaging. The next stage is <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>. Opt in problems belong to Campaign review rather than Brand identity verification, and the wording lives in <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt in language and requirements</Link>. If the Brand belongs to a client, it must reflect the client's own legal business; multi client workflows are in <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P registration for GoHighLevel agencies</Link>.
            </p>


            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Common A2P Brand Rejection Questions
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
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejection Fix →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">How Trust Score and MPS Work →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need your A2P brand rejection resolved fast?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P brand registration and rejection fixes. EIN verification, correct brand type, CP 575 documentation, resubmission management, and manual verification support handled end to end.
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
                This guide was checked against HighLevel's Brand Approval Best Practices, Registering Your A2P Brand and Campaign rejection documentation, and Twilio's Standard and Low Volume Standard troubleshooting guide, in September 2026. Requirements, fees and processes change, so confirm against your Trust Center. This is not legal advice.
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