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
  AlertTriangle,
  AlertOctagon,
  CheckCircle,
  
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2PBrandRejectedFixClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-brand',
        'rejection-causes',
        'fix-each-cause',
        'exhausted-tries',
        'after-approval',
        'faq'
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(id);
            break;
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
      q: "What is the difference between A2P brand rejection and campaign rejection in GoHighLevel?",
      a: "A2P brand rejection happens at Step 1 of the registration process The Campaign Registry (TCR) could not verify your business identity based on the information submitted. No campaign registration can be submitted until the brand is approved. Campaign rejection happens at Step 2 after your brand is approved, the carriers rejected your messaging use case, sample messages, or opt-in documentation. The fixes are completely different. This guide covers brand rejection. For campaign rejection, see: ghlscaleup.com/blog/a2p-campaign-rejected-fix"
    },
    {
      q: "Why was my A2P brand rejected in GoHighLevel?",
      a: "The most common confirmed causes of brand rejection are: EIN mismatch with the legal business name (the most frequent cause a missing 'LLC', transposed digit, or shortened name), a newly issued EIN that has not yet propagated across TCR's verification databases, a PO Box used as the business address instead of a physical street address, DUNS number entered instead of an EIN, or inability to verify a nonprofit or government entity type. Brand rejection is decided by TCR and its verification partners, not by GoHighLevel."
    },
    {
      q: "How do I fix an EIN mismatch in A2P brand registration?",
      a: "Obtain your CP 575 EIN Confirmation Letter from the IRS this shows the exact legal business name on file. If you do not have it, request a 147c letter from the IRS. Update your brand registration with the name exactly as it appears on the CP 575, character for character, including any entity suffix (LLC, Inc, Corp). When resubmitting or contacting GHL support for manual verification, provide the complete PDF of the CP 575 not a screenshot and not just the first page. Partial documentation is rejected."
    },
    {
      q: "My EIN is new. Can I still register for A2P?",
      a: "You can try, but newly issued EINs may be rejected by TCR because the EIN has not yet propagated across TCR's verification databases. According to GHL's official documentation, you have two options: wait at least 30 to 90 days from the EIN issue date and resubmit, or appeal your verification status for a $10 fee regardless of the outcome. If you choose the appeal, you must provide the complete PDF of your EIN Confirmation Letter (CP 575) not a screenshot. Verify the current appeal process and fee with GHL support, as these details can change."
    },
    {
      q: "What happens if I exhaust 3 A2P brand registration attempts?",
      a: "If you see the error 'Maximum 3 tries exhausted', you cannot resubmit through the normal flow. You must contact GHL support and complete a specific form that GHL references in their documentation. You will need to provide your complete CP 575 EIN Confirmation Letter as a full PDF. Documentation must be from the federal level (IRS) state-level documents are not accepted for manual EIN verification. Contact GHL support directly to obtain the current form link and instructions, as these are managed through GHL's internal support system."
    },
    {
      q: "Does A2P brand rejection cost an extra fee?",
      a: "Resubmitting a rejected brand registration does not typically incur an additional fee verify this with GHL's current fee documentation, as fee policies can change. However, if you have exhausted 3 registration attempts and need to appeal, GHL's documentation states an appeal fee of $10 applies, regardless of the outcome. For the full breakdown of all A2P fees: ghlscaleup.com/blog/a2p-10dlc-fees-explained"
    },
    {
      q: "Can GHL Scale Up fix my A2P brand rejection?",
      a: "Yes. GHL Scale Up handles A2P brand registration and rejection troubleshooting for agencies and their client sub-accounts. We verify EIN details against the CP 575 before submitting, select the correct brand type, and manage any resubmission or manual verification required. Book a free strategy call at ghlscaleup.com/contact."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-brand', title: '1. What is A2P brand registration and who rejects it?' },
    { id: 'rejection-causes', title: '2. What are the confirmed causes of brand rejection?' },
    { id: 'fix-each-cause', title: '3. How to fix each brand rejection cause' },
    { id: 'exhausted-tries', title: '4. What to do if you have exhausted 3 registration attempts' },
    { id: 'after-approval', title: '5. What happens after brand approval?' },
    { id: 'faq', title: '6. Frequently asked questions' }
  ];

  const rejectionCauses = [
    { cause: 'EIN mismatch with legal business name', what: 'The legal name entered does not exactly match what the IRS has on file for that EIN. A missing "LLC", a transposed letter, or a shortened trading name instead of the full legal name all cause this error.', source: 'GHL Brand Approval Best Practices (February 2026)' },
    { cause: 'New EIN not yet propagated', what: 'The EIN was issued too recently to appear in TCR\'s verification databases.', source: 'GHL Brand Approval Best Practices (February 2026)' },
    { cause: 'PO Box used as business address', what: 'The address entered is a PO Box, not a physical street address.', source: 'GHL Standard Brand Registration FAQ' },
    { cause: 'DUNS number used instead of EIN', what: 'DUNS is not an acceptable format for EIN in A2P brand registration and results in an Unverified state.', source: 'GHL Standard Brand Registration guide' },
    { cause: 'Nonprofit or government entity type cannot be verified', what: 'TCR could not verify the organisation as a US-registered nonprofit or government entity.', source: 'GHL Brand Approval Best Practices (February 2026)' },
    { cause: 'Stock symbol or ticker mismatch (Public companies)', what: 'The stock ticker or exchange entered does not match available public sources.', source: 'GHL Brand Approval Best Practices (February 2026)' },
    { cause: 'Branch or non-registered address used', what: 'The address of a local branch or a different address from the official registered company address was entered.', source: 'GHL Brand Approval Best Practices (February 2026)' }
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
          <span className="text-[#1A2236] font-medium">A2P Brand Rejected Fix</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
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
            <span className="text-[#F8D000]">What It Means and How to Fix It (2026)</span>
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

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            If your A2P brand registration in GoHighLevel has been rejected, you are blocked at Step 1 of the A2P process. No campaign can be submitted, no phone numbers can be registered, and no automated SMS will reach US recipients until the brand is approved. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled A2P registrations across hundreds of client accounts. This guide covers every confirmed brand rejection cause, the exact fix for each, and what to do if you have exhausted your submission attempts.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <AlertOctagon className="w-5 h-5 text-[#DC3545]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC3545]">Brand Rejection vs Campaign Rejection Important Distinction</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                This blog covers brand rejection a failure at Step 1 of the A2P process. If your brand was approved but your campaign was rejected, that is a different issue covered in a separate guide.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Brand rejection means TCR (The Campaign Registry) could not verify your business identity. Campaign rejection means the carriers rejected your messaging use case. The fixes are different. For campaign rejection: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected Fix Guide →</Link>
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
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

            {/* Section 1: What Is Brand Registration */}
            <h2 id="what-is-brand" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is A2P Brand Registration and Who Rejects It?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P brand registration is Step 1 of the A2P 10DLC process. It registers your business identity your legal name, EIN or Tax ID, business address, and entity type with The Campaign Registry (TCR), a third-party industry organisation that verifies businesses before their messages are allowed onto US carrier networks.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When GoHighLevel submits your brand registration, it goes to TCR for verification. TCR checks your business information against IRS records and other third-party databases. If TCR cannot verify your business information, your brand registration is rejected. GoHighLevel does not control this decision the rejection comes from TCR and its verification partners.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the full background on the A2P system and why registration is required: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the complete walkthrough of what to enter during brand registration (Standard Brand and Sole Proprietor paths): <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
            </p>

            {/* Section 2: Rejection Causes */}
            <h2 id="rejection-causes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Are the Confirmed Causes of Brand Rejection in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The following rejection causes are confirmed from GHL's official Brand Approval Best Practices documentation (February 2026). According to that guide, a large share of A2P brand rejections come from small mismatches between what is entered and what is on file with the IRS a missing 'LLC', a transposed digit in the EIN, or an outdated address. Each cause below has a direct fix in Section 3.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Rejection cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What happened</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Confirmed source</th>
                  </tr>
                </thead>
                <tbody>
                  {rejectionCauses.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.cause}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.what}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WHAT I AM NOT CERTAIN ABOUT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The complete numbered error code list for brand rejection. GHL's official brand documentation describes rejection causes but does not publish a comprehensive numbered error code list for brand rejection comparable to the campaign error code list. If you receive a specific error code on your brand rejection that is not covered here, contact GHL support directly for guidance specific to that code.
              </p>
            </div>

            {/* Section 3: Fix Each Cause */}
            <h2 id="fix-each-cause" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Fix Each Brand Rejection Cause
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Fix 1: EIN mismatch with legal business name</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The most common brand rejection cause.</strong> Your legal business name in the registration must match exactly what the IRS has on file for that EIN. Even small differences 'LLC' versus 'L.L.C.', a shortened name, or a trade name instead of the full legal name cause rejection.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Obtain your CP 575 form.</strong> This is the EIN Confirmation Letter the IRS issued when your EIN was assigned. It shows the exact legal name the IRS has on file.</li>
              <li><strong className="text-[#1A2236]">If you do not have the CP 575, request a 147c letter from the IRS.</strong> This is a verification letter that confirms your EIN and legal name. Contact the IRS Business and Specialty Tax Line to request it. You may want to verify the current IRS contact number and process at irs.gov, as these can change.</li>
              <li><strong className="text-[#1A2236]">Update your brand registration with the exact name from the CP 575 or 147c.</strong> Copy the name character for character, including any punctuation, entity suffix (LLC, Inc, Corp), and spacing.</li>
              <li><strong className="text-[#1A2236]">Resubmit your brand registration.</strong> Upload your CP 575 document when prompted or when contacting GHL support for manual verification.</li>
            </ul>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">UPLOAD THE COMPLETE PDF NOT A SCREENSHOT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Confirmed from GHL's official documentation: you must provide the complete PDF document of your EIN. If you provide screenshots or just the first page your appeal will be rejected. This applies both to the standard resubmission process and to the $10 appeal for new EINs.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Fix 2: New EIN not yet propagated</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Confirmed from GHL's official documentation: newly issued EINs or equivalent tax IDs won't propagate across the relevant databases' validation systems for a few weeks. GHL's documentation specifically states that A2P brand registrations using newly generated US EINs registered in the last 15 days may be rejected by TCR.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">You have two options confirmed from GHL's official support:</strong>
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Option A Wait and resubmit.</strong> GHL's documentation states to wait at least 30 to 90 days from the EIN issue date before retrying registration. Once that window has passed, resubmit with your complete CP 575 PDF.</li>
              <li><strong className="text-[#1A2236]">Option B Pay the $10 appeal fee.</strong> You can appeal your verification status for $10 regardless of the outcome. This is not a guarantee of approval the outcome is not assured. You must provide the complete PDF document of your EIN. For more detail on A2P fees: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link></li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Fix 3: PO Box used as business address</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Replace the PO Box with your physical street address as registered with the IRS and on your official business documents. Submitting the address of a local branch or any address different from the official registered company address may also produce a mismatch that negatively impacts your Trust Score, even if it does not cause outright rejection confirmed from GHL's official documentation.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Fix 4: DUNS number used instead of EIN</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              DUNS is not an acceptable format for the EIN field and puts the brand in an Unverified state, preventing you from proceeding with the next steps. Enter your 9-digit EIN in the format XX-XXXXXXX. If you do not have an EIN and your business qualifies, apply for one at irs.gov. You may want to verify the current IRS EIN application process directly, as procedures can change.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Fix 5: Nonprofit or government entity type cannot be verified</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Confirmed from GHL's official documentation: the error occurs when TCR cannot verify the organisation as a US-registered nonprofit or government entity. You have two options: update your entity type to one that matches how your organisation is actually legally registered, or provide documents for manual verification of your entity type through GHL support. GHL's documentation references a specific 'Nonprofit and Government Guide to A2P 10DLC' you may want to search GHL's support portal for this article as it is not linked in the main brand documentation and may contain additional specific guidance for your organisation type.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Fix 6: Stock symbol or ticker mismatch (Public companies only)</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If your company is publicly traded, the stock ticker symbol and the designated stock exchange entered must match available public sources. Update one or both fields to resolve the mismatch. This cause applies only to public company brand registrations.
            </p>

            {/* Section 4: Exhausted Tries */}
            <h2 id="exhausted-tries" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What to Do If You Have Exhausted 3 Registration Attempts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">If you see the error 'Maximum 3 tries exhausted,' you cannot simply resubmit through the normal flow.</strong> This is confirmed from GHL's official Standard Brand Registration guide.
            </p>

            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Stop making further attempts.</strong> Additional submission attempts at this point are blocked by the system.</li>
              <li><strong className="text-[#1A2236]">Collect your CP 575 form the complete PDF, not a screenshot or a partial page.</strong> If you do not have it, request a 147c letter from the IRS.</li>
              <li><strong className="text-[#1A2236]">Contact GHL support and submit the specific form referenced in GHL's documentation.</strong> GHL's guide states 'please fill out this form' but the form URL is internal to GHL's support flow. Navigate to GHL's support portal and search for 'Maximum 3 tries exhausted' or contact GHL support directly to obtain the correct form.</li>
              <li><strong className="text-[#1A2236]">Include your complete EIN documentation at the federal level, not the state level.</strong> Documentation must come from the IRS or equivalent federal agency state-level business registration documents are not sufficient for this process.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FEDERAL VS STATE DOCUMENTATION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Confirmed from GHL's official documentation: any documentation submitted for manual EIN verification must be from the federal level, not the state level. A state business registration certificate is not sufficient. You need the CP 575 Confirmation Letter from the IRS (federal), or a 147c letter requested from the IRS. State-level documents such as Articles of Incorporation or state certificates of formation will not be accepted for this purpose.
              </p>
            </div>

            {/* Section 5: After Approval */}
            <h2 id="after-approval" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Happens After Brand Approval?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once your brand is approved, GHL automatically submits the associated campaign for carrier review. You do not manually trigger the campaign submission.
            </p>

            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Campaign review begins automatically:</strong> Campaign review typically takes 3 to 7 business days after brand approval. You may want to verify the current typical review timeline with GHL support, as this can vary with carrier volume.</li>
              <li><strong className="text-[#1A2236]">If your campaign is subsequently rejected:</strong> This is a separate issue from brand rejection and has its own fix process. For the complete campaign rejection guide: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected Fix Guide →</Link></li>
              <li><strong className="text-[#1A2236]">Once both brand and campaign are approved:</strong> For the full campaign registration walkthrough: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link></li>
              <li><strong className="text-[#1A2236]">First SMS workflow to build after A2P approval:</strong> For the missed call text back automation: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link></li>
            </ul>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED BRAND REGISTRATION HANDLED FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up manages A2P brand registration for agencies and their client sub-accounts. We verify EIN details against the CP 575 before submitting, select the correct brand type, and handle any resubmission or manual verification required.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See results from our A2P setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss your registration: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* Section 6: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              6. Frequently Asked Questions
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
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected: What It Means and How to Fix It →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">A2P brand rejected and you need it resolved fast?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P brand registration and rejection fixes. EIN verification, correct brand type, CP 575 documentation, resubmission management, and manual verification support handled end to end.
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
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
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
                All information in this guide is verified against GoHighLevel's official support portal documentation as of July 2026. TCR policies, IRS procedures, and GHL's internal processes may change always verify current requirements in GHL's Trust Center and with GHL support before acting. This is not legal advice.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
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

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
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

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Brand Rejected?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P brand registration and rejection fixes EIN verification, CP 575 documentation, and resubmission management.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
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