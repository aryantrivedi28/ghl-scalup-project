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
  Star,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2PBrandRegistrationGuideClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'three-types',
        'choose-type',
        'standard-brand',
        'sole-proprietor',
        'rejection-reasons',
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
      q: "What is the difference between Standard Brand and Sole Proprietor in GoHighLevel A2P?",
      a: "Standard Brand is for businesses that have a Tax ID (EIN in the US, BN9 in Canada, Company Number in the UK or Australia). It allows higher message throughput up to 200,000 segments per day and supports multiple phone numbers per campaign. Sole Proprietor is for individuals with no formal business entity, no Tax ID, and only one employee. It is available in the US and Canada only and is limited to one phone number per campaign. If your business has any Tax ID, you are not eligible for Sole Proprietor registration regardless of business size."
    },
    {
      q: "What Tax ID do I need for A2P Standard Brand registration in GoHighLevel?",
      a: "For US businesses: your EIN (Employer Identification Number) issued by the IRS. For Canadian businesses: your BN9 (Business Number). For UK businesses: your Company Number from Companies House. For Australian businesses: your ACN (Australian Company Number) from ASIC. The Tax ID must match your legal business name exactly in the relevant national registry any mismatch between the Tax ID and the name entered in the registration causes rejection."
    },
    {
      q: "Can I use my personal Gmail for A2P Sole Proprietor registration?",
      a: "Yes. Public domain email addresses like Gmail, Hotmail, and Yahoo are accepted for Sole Proprietor registration. Private email domains are not accepted this means GSuite (Google Workspace), company email addresses hosted on your own domain, and corporate email accounts are not eligible. If you only have a company email, create a free Gmail account to use for the Sole Proprietor brand registration."
    },
    {
      q: "How long does A2P brand registration take in GoHighLevel?",
      a: "Standard Brand and Sole Proprietor brand registration typically take 3 to 7 business days for TCR review. Once your brand is approved, GHL automatically submits the associated campaign for review, which takes a further 3 to 7 business days. The full process from starting brand registration to having an approved campaign ready to send is generally 1 to 2 weeks when the submission is complete and compliant on the first attempt."
    },
    {
      q: "Why was my A2P brand rejected in GoHighLevel?",
      a: "The five most common Standard Brand rejection reasons are: EIN mismatch with the legal business name, PO Box used as the business address, newly issued EIN not yet in TCR's verification database, incorrect business type selected, and missing or invalid website URL. For Sole Proprietor, the most common rejections are: private email domain used (GSuite/company email not accepted), LLC or entity suffix included in the business name, and mobile number used for OTP that is a CPaaS number (Twilio or LeadConnector number). In each case, edit the brand with the corrected information and resubmit no additional registration fee applies for resubmission."
    },
    {
      q: "What happens after my A2P brand is approved in GoHighLevel?",
      a: "Once your brand is approved, GoHighLevel automatically submits the associated campaign for carrier review you do not need to manually trigger this. Campaign review typically takes 3 to 7 business days. After both brand and campaign are approved, it may take up to 3 business days for all US carriers to receive the registration data. During this period some messages may fail with a no A2P approval error this is normal and resolves as carrier records update. If it persists beyond 4 business days, contact GHL support."
    },
    {
      q: "Can I register multiple clients under one A2P brand in GoHighLevel?",
      a: "No. Each brand registration represents one business entity. Each GHL sub-account (each client's account) requires its own separate brand registration tied to that client's business name and Tax ID. Agencies registering A2P for multiple clients must complete individual brand registrations for each client sub-account. The email address used across those registrations can be the same for up to 5 brands. The mobile phone number used for OTP verification can be used for up to 3 brands across all TCR registrations ecosystem-wide."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'three-types', title: '1. What are the three brand types in GoHighLevel A2P registration?' },
    { id: 'choose-type', title: '2. How do you choose the right brand type?' },
    { id: 'standard-brand', title: '3. How to complete Standard Brand registration (step by step)' },
    { id: 'sole-proprietor', title: '4. How to complete Sole Proprietor registration (step by step)' },
    { id: 'rejection-reasons', title: '5. What are the most common brand rejection reasons and how do you fix them?' },
    { id: 'after-approval', title: '6. What happens after your brand is approved?' },
    { id: 'faq', title: '7. Frequently asked questions' }
  ];

  const brandTypes = [
    {
      type: 'Standard Brand',
      who: 'Businesses with an EIN, LLC, corporation, or other formally registered entity',
      taxId: 'Yes EIN for US, BN9 for Canada, Company Number for UK/AUS',
      limit: 'Up to 200,000 segments/day',
      numbers: 'Multiple numbers'
    },
    {
      type: 'Low Volume Standard Brand',
      who: 'Smaller businesses with an EIN that have lighter SMS needs',
      taxId: 'Yes same Tax ID as Standard',
      limit: 'Up to 6,000 segments/day to T-Mobile',
      numbers: 'Multiple numbers'
    },
    {
      type: 'Sole Proprietor',
      who: 'Individuals or small businesses with no Tax ID and only one employee',
      taxId: 'No',
      limit: 'Lower limits verify current in GHL Trust Center',
      numbers: '1 number per campaign only'
    }
  ];

  const standardSteps = [
    { step: 'Start registration', desc: 'In the Trust Center, click Start Registration on the A2P Brand and Campaign Registration card. Select your country (United States or Canada).' },
    { step: 'Confirm Tax ID status', desc: 'Select "Yes, the business I\'m registering has a tax ID." This routes you to Standard Brand registration. Select Standard Brand from the options presented.' },
    { step: 'Enter business information', desc: 'Fill in your legal business name exactly as it appears on your EIN registration this is critical. Even small differences (LLC vs L.L.C., shortened name vs full legal name) cause rejection. Enter your EIN, physical business address (PO Boxes cause rejection use a physical street address), business type (LLC, corporation, etc.), website URL, and business phone number.' },
    { step: 'Enter contact details', desc: 'Add the name, email address, and phone number of the contact person for this brand. Rules: one email can be used for a maximum of 5 brands. One phone number can be used for a maximum of 3 brands across all A2P registrations in the TCR ecosystem including registrations made through other providers.' },
    { step: 'Verify via OTP', desc: 'After submitting contact details, GHL sends a 6-digit one-time password to the email address provided. Enter the OTP to verify the sender identity. This step is required registration cannot proceed without OTP verification.' },
    { step: 'Submit and wait', desc: 'After OTP verification, GHL submits your brand to TCR for review. Standard Brand review typically takes 3 to 7 business days. Once approved, GHL automatically submits your campaign for review you do not need to take any additional action to trigger campaign submission.' }
  ];

  const soleSteps = [
    { step: 'Start registration', desc: 'In the Trust Center, click Start Registration. Select your country (US or Canada only Sole Proprietor is not available for other countries).' },
    { step: 'Confirm no Tax ID', desc: 'Select "No, the business I\'m registering does not have a tax ID." This routes you to Sole Proprietor registration.' },
    { step: 'Enter business name', desc: 'Enter either your legal name or the name of the organisation sending the messages. Do not include "LLC," "Corp," or any terms suggesting a formal business entity this causes rejection. If operating under a DBA (Doing Business As), list both your legal name and the DBA name.' },
    { step: 'Enter address and contact details', desc: 'Enter your physical address (US or Canada only). Add your name, email (must be public domain: Gmail, Hotmail, Yahoo not GSuite or company email), and your personal mobile phone number. This number cannot be a Twilio or LeadConnector number.' },
    { step: 'Verify via OTP', desc: 'TCR sends a text message to the mobile number you provided asking for approval. Reply YES to the TCR text to confirm. Without this reply, the brand will not proceed through review.' },
    { step: 'Submit and wait', desc: 'After OTP approval, GHL submits your Sole Proprietor brand to TCR. Review typically takes 3 to 7 business days. Once approved, campaign submission follows automatically.' }
  ];

  const rejections = [
    {
      reason: 'EIN mismatch with legal business name',
      cause: 'The legal business name entered does not exactly match what the IRS has on file for that EIN',
      fix: 'Check your CP 575 form from the IRS. Verify your business name in the HIPAA Space EIN lookup tool. Resubmit with the exact name from the IRS record'
    },
    {
      reason: 'PO Box used as business address',
      cause: 'Standard Brand requires a physical street address',
      fix: 'Replace with a physical street address not a PO Box, not a mailbox service address'
    },
    {
      reason: 'Newly issued EIN not yet in TCR database',
      cause: 'EIN was issued too recently to appear in TCR\'s verification system',
      fix: 'Wait 2 to 4 weeks after EIN issuance before resubmitting. Verify EIN is in TCR\'s database using HIPAA Space before resubmitting'
    },
    {
      reason: 'Private email domain used for Sole Prop',
      cause: 'GSuite, company email, or Google Workspace email was entered not eligible for Sole Prop registration',
      fix: 'Resubmit using a public domain email: Gmail, Hotmail, or Yahoo'
    },
    {
      reason: 'Business name includes LLC or Corp for Sole Prop',
      cause: 'Sole Prop requires operating under your legal name with no entity suffixes',
      fix: 'Remove LLC, Corp, Inc or any formal entity designation from the business name field'
    }
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
          <span className="text-[#1A2236] font-medium">A2P Brand Registration Guide</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Brand Registration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Brand Registration in GoHighLevel:<br />
            <span className="text-[#F8D000]">Standard Brand vs Sole Proprietor (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Brand registration is Step 1 of the A2P 10DLC process. Nothing else in the registration not campaign submission, not phone number approval, not sending a single automated SMS works until your brand is approved. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled A2P brand registration across hundreds of client accounts. The single decision that causes most registration delays is choosing the wrong brand type at the start. This guide tells you which type to choose, walks through both registration paths step by step, and covers the five rejection reasons that appear most often.
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
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer Which Brand Type Do You Need</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                If your business has a Tax ID (EIN in the US, BN9 in Canada, Company Number in the UK or Australia): register as a Standard Brand or Low Volume Standard Brand. You are not eligible for Sole Proprietor registration.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                If your business has no Tax ID and you are the only employee: register as Sole Proprietor. If you have no Tax ID and your business address is outside the US or Canada: Sole Proprietor is not available to you use a Toll-Free number instead. This decision determines your throughput limits, the number of phone numbers you can register, and which campaign use cases are available to you.
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

            {/* Section 1: Three Types */}
            <h2 id="three-types" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Are the Three Brand Types in GoHighLevel A2P Registration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL's A2P registration system has three brand types. Most guides only mention two. All three are relevant depending on your situation.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Brand type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Who it's for</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tax ID required</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Daily message limit</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Phone numbers per campaign</th>
                  </tr>
                </thead>
                <tbody>
                  {brandTypes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.who}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.taxId}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.limit}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.numbers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE RULE THAT MATTERS MOST</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you have a Tax ID, you cannot register as Sole Proprietor regardless of business size. A one-person LLC with an EIN must register as Low Volume Standard Brand or Standard Brand. Attempting Sole Proprietor registration with a Tax ID will result in rejection. Choose the brand type based on your Tax ID status first, then your volume needs second.
              </p>
            </div>

            {/* Section 2: Choose Type */}
            <h2 id="choose-type" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. How Do You Choose the Right Brand Type?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Answer these three questions in order.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Does your business have a Tax ID (EIN, BN9, Company Number)?</strong> If yes: choose Standard Brand (higher volume) or Low Volume Standard Brand (lighter volume). If no: go to question 2.</li>
              <li><strong className="text-[#1A2236]">Is the business located in the US or Canada?</strong> If yes: Sole Proprietor registration is available. If no: Sole Proprietor is not available for non-US/Canada addresses. Use Toll-Free number registration instead.</li>
              <li><strong className="text-[#1A2236]">Is this business operated by only one person?</strong> If yes: Sole Proprietor is available. If the business has more than one employee: Sole Proprietor is not the correct path even without a Tax ID speak with GHL support about options.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHAT IF YOU JUST GOT YOUR EIN</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Wait before registering if your EIN was issued recently. Newly issued EINs take a few weeks to propagate across TCR's verification databases. If you submit Standard Brand registration with a freshly issued EIN, TCR cannot verify it and your brand will be rejected. Wait at least 2 to 4 weeks after receiving your EIN before submitting A2P brand registration. You can verify whether your EIN is in TCR's database using the HIPAA Space EIN lookup tool before submitting.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a full breakdown of A2P fees including brand registration costs: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
            </p>

            {/* Section 3: Standard Brand */}
            <h2 id="standard-brand" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Complete Standard Brand Registration in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Navigation: Go to Settings Phone Numbers Trust Center in your GHL sub-account. Verify current navigation in your account as the interface updates.
            </p>

            <div className="space-y-3 mb-6">
              {standardSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.step}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">VERIFY YOUR EIN MATCH BEFORE SUBMITTING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Before submitting, verify your EIN against your CP 575 form from the IRS. The legal business name entered in the registration must match exactly what the IRS has on file for that EIN. You can also enter your EIN into the HIPAA Space lookup website to verify how your business appears in the TCR database before submitting this single step prevents the most common Standard Brand rejection reason.
              </p>
            </div>

            {/* Section 4: Sole Proprietor */}
            <h2 id="sole-proprietor" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How to Complete Sole Proprietor Registration in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Important rules specific to Sole Proprietor registration confirmed from GHL's official support portal: private email domains (GSuite, company email, Google Workspace) are not eligible you must use a public domain email like Gmail, Hotmail, or Yahoo. The mobile number used for OTP verification cannot be a number purchased through LeadConnector, Twilio, or any CPaaS provider it must be your personal mobile number.
            </p>

            <div className="space-y-3 mb-6">
              {soleSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.step}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">SOLE PROP LIMITATION TO KNOW BEFORE STARTING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Sole Proprietor brands are limited to one phone number per campaign. If you purchase multiple GHL phone numbers and try to use them all under a Sole Proprietor registration, you will encounter error code 30034 when texting from the unregistered numbers. Each additional number needs to be specifically linked to an approved campaign. For agencies or businesses expecting to grow beyond one number, Standard Brand registration is the correct long-term path even if volume is currently low.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the foundation of what A2P 10DLC is and why brand registration is required: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>

            {/* Section 5: Rejection Reasons */}
            <h2 id="rejection-reasons" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Are the Most Common Brand Rejection Reasons?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most brand rejections fall into one of five categories. Each has a direct fix.
            </p>

            <div className="space-y-4 mb-6">
              {rejections.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#DC3545] mb-2">{item.reason}</h3>
                  <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-3 mb-3">
                    <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">What caused it:</strong> {item.cause}</p>
                  </div>
                  <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-3">
                    <p className="text-sm text-[#5C6880]"><strong className="text-[#25C97D]">How to fix it:</strong> {item.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              If your brand has been rejected and you are unsure of the reason: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P campaign rejected fix guide →</Link> the process for reviewing rejection reasons and resubmitting applies to both brand and campaign rejections.
            </p>

            {/* Section 6: After Approval */}
            <h2 id="after-approval" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Happens After Your Brand Is Approved?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Brand approval triggers the campaign registration step automatically. You do not need to manually submit a campaign GHL submits it on your behalf once brand approval is confirmed.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Campaign auto-submission:</strong> After brand approval, GHL automatically submits the campaign associated with your brand for carrier review. Campaign review typically takes a further 3 to 7 business days.</li>
              <li><strong className="text-[#1A2236]">After brand and campaign approval:</strong> It can take up to 3 business days for all carriers to receive your registration data. During this period you may see some messages fail with an error code indicating no A2P approval is found. This is normal and resolves within a few business days as carrier records update. If the issue persists beyond 4 business days, contact GHL support.</li>
              <li><strong className="text-[#1A2236]">Adding phone numbers after approval:</strong> Any phone numbers added to your sub-account after brand and campaign approval are automatically registered under the same campaign no resubmission is needed. It may take several days for registration to complete on newly added numbers.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The next step after brand approval is reviewing and if needed improving your campaign registration details. For the full campaign registration walkthrough: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                For the opt-in consent language your campaign will reference: <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                Once registered, for the first SMS automation to build: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED BRAND REGISTRATION HANDLED FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up manages A2P brand registration for agencies and their client sub-accounts. We verify EIN details before submitting, prepare the registration fields to minimise rejection risk, and handle any resubmission required.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See results from our A2P setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss your registration: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions
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
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected: What It Means and How to Fix It →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need A2P brand registration done right the first time?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration for agencies and their clients. EIN verification before submission, correct brand type selection, full registration walkthrough, and resubmission if needed.
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
                All steps and rules in this guide are verified against GoHighLevel's official support portal as of June 2026. Navigation paths and fee amounts may change always verify in GHL's Trust Center before submitting.
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
                5+ years GHL experience · 200+ A2P registrations handled globally. All technical details verified as of June 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Brand Registration Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P brand registration for agencies and their clients EIN verification, correct brand type selection, and resubmission if needed.</p>
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