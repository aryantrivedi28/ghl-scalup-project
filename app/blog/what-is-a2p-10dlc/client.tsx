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
  Star,
  AlertOctagon,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function WhatIsA2P10DLCCLient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-means',
        'why-exists',
        'who-needs',
        'how-works',
        'what-costs',
        'not-affected',
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
      q: "What is A2P 10DLC?",
      a: "A2P 10DLC stands for Application-to-Person 10-Digit Long Code. It is the US carrier registration system that requires every business sending automated text messages from a standard 10-digit phone number to register their business identity (brand registration) and their messaging use case (campaign registration) with The Campaign Registry (TCR) before those messages are allowed to reach US recipients. GoHighLevel uses 10-digit phone numbers for SMS automations, so all GHL users sending automated SMS to US phone numbers must complete A2P 10DLC registration."
    },
    {
      q: "Is A2P 10DLC registration required for GoHighLevel?",
      a: "Yes. Any GoHighLevel user running SMS automations missed call text back, appointment reminders, lead follow-up sequences, or any other automated SMS to US phone numbers must complete A2P 10DLC registration. Since February 2025, all major US carriers (AT&T, T-Mobile, Verizon) block SMS and MMS messages from unregistered 10-digit numbers outright. Messages do not get filtered or delayed they simply do not reach the recipient."
    },
    {
      q: "What is the difference between brand registration and campaign registration?",
      a: "Brand registration establishes who you are it registers your business identity (legal name, EIN, address, business type) with The Campaign Registry. Campaign registration establishes what you will send it registers the specific type of messages you intend to send (appointment reminders, marketing, customer care), along with a campaign description, sample messages, and documentation of your opt-in flow. Both steps are required before sending any A2P SMS. Brand registration must be completed and approved before campaign registration can be submitted."
    },
    {
      q: "Does A2P 10DLC apply to WhatsApp messages in GoHighLevel?",
      a: "No. WhatsApp messages are transmitted over the internet rather than through US carrier networks like SMS and MMS. A2P 10DLC registration does not apply to WhatsApp messaging in GoHighLevel. WhatsApp has its own separate compliance requirements through Meta's WhatsApp Business platform. A2P 10DLC applies specifically to SMS and MMS messages sent through 10-digit local phone numbers to US recipients."
    },
    {
      q: "What happens if you send SMS in GoHighLevel without A2P registration?",
      a: "Since February 2025, all major US carriers block all SMS and MMS traffic from unregistered 10-digit numbers. Your messages do not arrive late, do not sit in a filter, and do not partially deliver they simply do not reach the recipient. Your automations will appear to fire correctly inside GoHighLevel, but nothing reaches the person on the other end. Beyond blocking, T-Mobile charges $10,000 per content violation and additional tiered fines for other non-compliance. There is no grace period."
    },
    {
      q: "Can I register for A2P 10DLC directly with TCR?",
      a: "No. A2P 10DLC registration must be submitted through your Campaign Service Provider (CSP) the SMS platform you use to send messages. For GoHighLevel users, that is LC Phone (GHL's built-in phone system). You complete the registration information in GHL's Trust Center, and LC Phone submits it to The Campaign Registry on your behalf. You cannot register directly with TCR as an end business."
    },
    {
      q: "How long does A2P 10DLC registration take?",
      a: "Brand registration typically takes 3 to 7 business days for review by TCR. Once your brand is approved, campaign registration is automatically submitted by GHL on your behalf and typically takes a further 3 to 7 business days. The full process from starting brand registration to having an approved campaign generally takes 1 to 2 weeks when the submission is complete and compliant on the first attempt. Incomplete submissions, mismatched EIN information, or missing opt-in documentation extend the timeline through the rejection and resubmission cycle."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-means', title: '1. What does A2P 10DLC actually mean breaking down each part?' },
    { id: 'why-exists', title: '2. Why does A2P 10DLC exist?' },
    { id: 'who-needs', title: '3. Who needs to register and what happens if you don\'t?' },
    { id: 'how-works', title: '4. How does A2P 10DLC registration work in GoHighLevel?' },
    { id: 'what-costs', title: '5. What does A2P 10DLC registration cost?' },
    { id: 'not-affected', title: '6. What is not affected by A2P 10DLC?' },
    { id: 'faq', title: '7. Frequently asked questions' },
  ];

  const parties = [
    { party: 'You (the GHL user)', role: 'Submit registration information through GHL\'s Trust Center business details, campaign description, sample messages, opt-in documentation', control: 'Everything you submit: accuracy, completeness, opt-in flow documentation' },
    { party: 'Campaign Service Provider (CSP)', role: 'GHL\'s phone system (LC Phone, backed by Twilio) submits your registration to TCR on your behalf. You do not register directly with TCR.', control: 'You select GHL\'s phone system as your provider the submission process is automated after you complete your inputs' },
    { party: 'The Campaign Registry (TCR) and carriers', role: 'TCR verifies your brand information and reviews your campaign details. Carriers use TCR\'s approval data to allow or block your messages.', control: 'Nothing TCR and carrier review is external to GHL and external to you. The review outcome depends entirely on the quality of your submission.' },
  ];

  const fees = [
    { type: 'Brand registration (one-time)', when: 'At initial brand registration', amount: 'Varies by brand type verify in Trust Center before submitting' },
    { type: 'Campaign vetting fee (one-time)', when: 'At initial campaign submission', amount: '$15 per campaign (no fee for resubmitting a rejected campaign fee applies if you delete and recreate)' },
    { type: 'Monthly campaign fee (recurring)', when: 'Each month the campaign is active', amount: 'Varies by use case Low Volume Mixed is lower; Mixed and specific use cases are higher' },
    { type: 'Carrier per-message fees', when: 'Per SMS/MMS segment sent', amount: 'Passthrough carrier rates varies by carrier, segment length, and message type' },
  ];

  const notAffected = [
    'WhatsApp: WhatsApp messages in GoHighLevel are transmitted over the internet, not through US carrier networks. A2P 10DLC registration does not apply to WhatsApp messaging. WhatsApp has its own separate compliance requirements through Meta\'s WhatsApp Business platform.',
    'Emails: Email delivery is a separate system entirely. A2P 10DLC applies to SMS and MMS only.',
    'Canadian CA-to-CA messages (numbers purchased before March 26, 2025): Canadian businesses sending SMS only to Canadian recipients on numbers purchased before March 26, 2025 are exempt from A2P 10DLC. You may want to verify current requirements if your numbers were purchased after this date or if you send to US recipients from a Canadian number.',
    'Short codes: 5 or 6-digit short codes have a separate registration process (short code leasing) and are not subject to the 10DLC A2P registration system covered here.',
    'Toll-free numbers: Toll-free numbers (1-800, 1-888, etc.) have a separate verification process through toll-free verification. This process is different from A2P 10DLC, generally simpler, and free to register. Toll-free numbers are the most common alternative for businesses that want to avoid 10DLC complexity.',
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
          <span className="text-[#1A2236] font-medium">What Is A2P 10DLC</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SMS Compliance</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            What Is A2P 10DLC?<br />
            <span className="text-[#F8D000]">Complete Guide for GoHighLevel Users (2026)</span>
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
            If you have just signed up for GoHighLevel and tried to set up SMS automations, you have probably encountered the term A2P 10DLC. It is not optional, it is not a GHL-specific requirement, and since February 2025, unregistered messages simply do not reach recipients they are blocked by the carriers entirely. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled A2P 10DLC registration across 200+ client accounts in the US, UK, and Australia. This is the plain-English explanation of what it is, why it exists, what registration involves, and what happens if you skip it.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Plain-English Definition</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                A2P 10DLC stands for Application-to-Person 10-Digit Long Code.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It is the US carrier system that requires every business sending automated text messages from a standard 10-digit phone number to register who they are (brand registration) and what messages they plan to send (campaign registration) before those messages are allowed to reach recipients. GoHighLevel uses 10-digit phone numbers to send SMS. Therefore, every GHL user sending automated SMS to US phone numbers must complete A2P 10DLC registration. Since February 2025, all major US carriers block messages from unregistered numbers outright.
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

            {/* Section 1: What Means */}
            <h2 id="what-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Does A2P 10DLC Actually Mean?
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">A2P Application-to-Person</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P describes any text message sent from a software application to a person's mobile phone. When GoHighLevel fires an automated SMS a missed-call text back, an appointment reminder, a lead follow-up that is an A2P message. The opposite is P2P (Person-to-Person): a regular text between two individuals on their personal phones.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The distinction matters because A2P messages are automated at scale. A single business can send thousands of A2P messages per day from one phone number. Carriers created specific rules for A2P traffic because the same infrastructure used for legitimate business messaging was being exploited for spam and phishing at a scale that P2P messaging never reached.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">10DLC 10-Digit Long Code</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              10DLC stands for 10-Digit Long Code a standard local-looking US phone number with 10 digits (for example, 415-555-0182). This is the type of number GHL users purchase through LC Phone or Twilio for their SMS automations.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before A2P 10DLC existed, businesses sent automated messages from these same numbers with no formal registration, alongside personal texting traffic, with no way for carriers to distinguish legitimate business SMS from spam. The result was a flood of unwanted messages that eroded consumer trust in SMS as a communication channel.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A2P VS 10DLC ARE THEY THE SAME THING?</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                They are two parts of the same system. 'A2P' describes the type of messaging (automated, from an application). '10DLC' describes the type of phone number (a standard 10-digit local number). Together, 'A2P 10DLC' means the carrier registration system for businesses sending automated messages from standard 10-digit phone numbers. If someone refers to '10DLC registration' or 'A2P registration,' they mean the same process.
              </p>
            </div>

            {/* Section 2: Why Exists */}
            <h2 id="why-exists" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Why Does A2P 10DLC Exist?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before 2023, businesses sent automated messages from 10-digit numbers with no registration or verification. Consumers had no way to distinguish a legitimate appointment reminder from a phishing scam. Spam complaints rose. Carriers filtered messages aggressively and inconsistently. Legitimate business messages were blocked alongside spam.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The three major US carriers AT&T, T-Mobile, and Verizon created The Campaign Registry (TCR) to solve this. TCR is a centralised database where businesses register their identity (brand registration) and the type of messages they send (campaign registration). Carriers use that verified data to allow, throttle, or block message traffic.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">For consumers:</strong> Registered messages come from verified businesses. Spam and phishing become easier to identify and block.</li>
              <li><strong className="text-[#1A2236]">For legitimate businesses:</strong> Registered messages receive better deliverability, less aggressive carrier filtering, and higher throughput limits.</li>
              <li><strong className="text-[#1A2236]">For carriers:</strong> Accountability. If a registered sender violates messaging rules, the brand registration creates a clear enforcement path.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE LEGAL LAYER ON TOP</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A2P 10DLC registration is separate from TCPA (Telephone Consumer Protection Act) compliance, but both apply. The TCPA requires explicit consent before sending marketing messages and creates statutory damages of $500 to $1,500 per unsolicited text for willful violations enforced through class-action litigation. Registration with TCR does not exempt you from TCPA requirements. You still need documented consent from every contact before sending automated SMS. A2P registration and TCPA compliance are two separate obligations.
              </p>
            </div>

            {/* Section 3: Who Needs */}
            <h2 id="who-needs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Who Needs to Register and What Happens If You Don't?
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Who must register</h3>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Any US business sending automated SMS from a 10-digit phone number to US recipients mandatory, no exceptions.</strong></li>
              <li><strong className="text-[#1A2236]">Any business outside the US sending SMS to US recipients same requirement applies regardless of where the sender is located.</strong></li>
              <li><strong className="text-[#1A2236]">Canadian businesses sending to US recipients A2P registration required.</strong></li>
              <li><strong className="text-[#1A2236]">GHL users on LC Phone or Twilio running any SMS workflow, missed call text back, appointment reminder, or campaign all of these are A2P messages requiring registration.</strong></li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Who does not need to register</h3>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Businesses sending SMS only to Canadian recipients (CA-to-CA) on numbers purchased before March 26, 2025 confirmed exempt. You may want to verify current requirements if your numbers were purchased after this date.</strong></li>
              <li><strong className="text-[#1A2236]">Businesses not sending any SMS to US phone numbers A2P 10DLC does not apply.</strong></li>
              <li><strong className="text-[#1A2236]">WhatsApp users WhatsApp messages are transmitted over the internet, not through carrier networks. A2P 10DLC does not apply to WhatsApp messaging in GoHighLevel.</strong></li>
            </ul>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertOctagon className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">SINCE FEBRUARY 2025: OUTRIGHT BLOCKING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                Since February 2025, all major US carriers block all SMS and MMS traffic from unregistered 10DLC numbers. Messages do not arrive late. They do not sit in a filter. They simply do not reach the recipient. There is no grace period and no warning system your automations appear to fire correctly inside GHL but nothing reaches the person on the other end.
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Beyond blocking, T-Mobile charges $10,000 per content violation and additional tiered fines for other offences. Running SMS automations without registration is not a compliance grey area in 2026.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              If your messages are currently blocked or your number has been suspended: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected Fix Guide →</Link>
            </p>

            {/* Section 4: How Works */}
            <h2 id="how-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Does A2P 10DLC Registration Work in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Registration involves three parties and two steps. Understanding the structure prevents confusion about where the process happens and who controls each stage.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The three parties</h3>
            <div className="space-y-3 mb-6">
              {parties.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h4 className="text-sm font-bold text-[#1A2236]">{item.party}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-10">
                    <div className="bg-[#F8F9FB] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#5C6880] uppercase tracking-wider mb-1">Role</p>
                      <p className="text-sm text-[#1A2236]">{item.role}</p>
                    </div>
                    <div className="bg-[#E8F5FE] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#0E9BF0] uppercase tracking-wider mb-1">What you control</p>
                      <p className="text-sm text-[#1A2236]">{item.control}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The two registration steps</h3>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Brand registration:</strong> Register your business identity with TCR. For most US businesses this requires a valid EIN (Employer Identification Number) and requires your legal business name to match the IRS record exactly. For businesses without an EIN, a Sole Proprietor registration path exists with different requirements and lower throughput limits. For international businesses outside the US, your country's equivalent tax ID applies (BN9 for Canada, Company Number for the UK). Brand registration establishes who you are.</li>
              <li><strong className="text-[#1A2236]">Campaign registration:</strong> Once your brand is approved, register your messaging campaign the specific type of messages you will send (appointment reminders, customer care, marketing). Each campaign requires a description, sample messages, opt-in flow documentation, and a link to your Terms of Service and Privacy Policy. Campaign registration establishes what you will send.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              Brand registration is accessed through Settings Phone Numbers Trust Center in your GHL account. You may want to verify the exact navigation path in your account as the interface updates.
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              For the full brand registration walkthrough: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full campaign registration walkthrough: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">ONE CRITICAL RULE: NO COLD TEXTING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A2P registration does not give you permission to text anyone. Registration gives you permission to send messages to contacts who have explicitly consented to receive them. Cold texting sending SMS to contacts who have not opted in breaks TCR guidelines, carrier guidelines, and GHL's Phone System policy. Accounts found cold messaging are at high risk of SMS suspension and may not be approved for increased sending limits. Explicit opt-in consent must be obtained and documented before sending any automated SMS, regardless of registration status.
              </p>
            </div>

            {/* Section 5: What Costs */}
            <h2 id="what-costs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Does A2P 10DLC Registration Cost?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              All A2P fees are passthrough charges from TCR, Twilio, and the carriers. GHL adds no markup to these charges. Prices are set by external providers and may change always verify current pricing in the Trust Center before submitting.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fee type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">When charged</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Approximate amount (verify current in Trust Center)</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.when}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a full breakdown: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
            </p>

            {/* Section 6: Not Affected */}
            <h2 id="not-affected" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Is Not Affected by A2P 10DLC?
            </h2>

            <div className="space-y-2 mb-6">
              {notAffected.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#5C6880]">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR REGISTRATION EXPERIENCE</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                The most common mistake we see across client accounts is starting SMS automations before completing A2P registration. Messages fire correctly in GHL's interface but never reach the contact. Completing registration before building SMS workflows avoids that problem entirely.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See how our clients use GHL SMS automations effectively: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                For building GoHighLevel SMS automations after registration is complete: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For the missed call text back automation the most common first SMS workflow to build: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mt-3">
                If you need A2P registration handled for your account or your client accounts: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
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
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected: What It Means and How to Fix It →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need A2P registration handled for your GHL account?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P 10DLC registration for agencies and their clients. Brand registration, campaign registration, rejection troubleshooting, and resubmission fully managed.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                All facts in this guide are verified against GoHighLevel's official support portal, TCR documentation, and carrier guidelines as of June 2026. Fees and carrier policies may change verify current requirements in GHL's Trust Center before submitting.
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
                5+ years GHL experience · 200+ systems built globally including A2P 10DLC registration across US, UK, and Australia client accounts. All technical details verified as of June 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">A2P Registration Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P 10DLC registration for agencies and their clients brand registration, campaign registration, and rejection troubleshooting.</p>
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