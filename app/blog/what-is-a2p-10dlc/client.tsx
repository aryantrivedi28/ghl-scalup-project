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
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  BarChart3,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function WhatIsA2P10DLCCLient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-means',
        'why-exists',
        'how-works',
        'brand-campaign',
        'what-happens',
        'consent',
        'do-i-need',
        'cost',
        'throughput',
        'mental-model',
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
      q: "What is A2P 10DLC?",
      a: "A2P 10DLC is the US carrier registration system requiring businesses that send automated text messages from standard 10 digit phone numbers to register their identity and messaging purpose with The Campaign Registry before carriers reliably deliver those messages."
    },
    {
      q: "Is A2P 10DLC registration required for GoHighLevel users?",
      a: "Yes, if you send automated SMS to US phone numbers from a standard 10 digit number through GoHighLevel. This includes missed call text back, appointment reminders, and any other automated SMS workflow."
    },
    {
      q: "What is the difference between brand registration and campaign registration?",
      a: "Brand registration verifies who your business is. Campaign registration verifies what kind of messages you send and why. Brand registration must be approved before campaign registration can be submitted."
    },
    {
      q: "Does A2P 10DLC apply to WhatsApp?",
      a: "No. WhatsApp messages travel over the internet rather than carrier SMS networks, so A2P 10DLC does not apply, though WhatsApp has its own separate requirements through Meta."
    },
    {
      q: "What happens if I send SMS without completing A2P registration?",
      a: "As of February 2025, major US carriers block unregistered A2P 10DLC traffic outright rather than delaying it. Messages will appear to send successfully inside GoHighLevel but will not reach the recipient."
    },
    {
      q: "Does A2P registration guarantee my messages will be delivered?",
      a: "No. Registration establishes your identity and use case within the system, but actual delivery still depends on factors including message content, consent documentation, sending patterns, and carrier filtering behavior at the time of sending."
    },
    {
      q: "Can I register directly with The Campaign Registry?",
      a: "No. Registration is submitted through your Campaign Service Provider, which for GoHighLevel users is its built in phone system. You complete the required information in GoHighLevel's Trust Center rather than registering with TCR directly."
    },
    {
      q: "Does A2P 10DLC apply to Canadian numbers?",
      a: "It depends on what the number is used for and when it was acquired. Requirements for Canadian numbers differ from US requirements in some cases; see the dedicated Canadian numbers guide for current specifics rather than assuming US rules apply directly."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-means', title: 'What Does A2P 10DLC Actually Mean?' },
    { id: 'why-exists', title: 'Why Does A2P 10DLC Exist?' },
    { id: 'how-works', title: 'How Does A2P 10DLC Actually Work?' },
    { id: 'brand-campaign', title: 'What Are Brand Registration and Campaign Registration?' },
    { id: 'what-happens', title: 'What Happens If You Do Not Register?' },
    { id: 'consent', title: 'Does Registration Mean You Can Text Anyone?' },
    { id: 'do-i-need', title: 'Do I Need A2P 10DLC?' },
    { id: 'cost', title: 'Does A2P 10DLC Registration Cost Money?' },
    { id: 'throughput', title: 'Does Registration Affect How Many Messages I Can Send?' },
    { id: 'mental-model', title: 'A2P 10DLC: The Simple Mental Model' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const doINeedData = [
    { situation: 'US 10 digit number sending automated business SMS to US recipients', relevance: 'Registration required' },
    { situation: 'US toll free number (800, 888, 877, and similar)', relevance: 'Different verification process, does not use TCR brand or campaign registration, but still requires its own toll free verification before reliable delivery' },
    { situation: 'WhatsApp messaging', relevance: 'Transmitted over the internet, not carrier SMS networks; A2P 10DLC does not apply, though WhatsApp has its own separate compliance requirements through Meta' },
    { situation: 'Email', relevance: 'Not an SMS channel; A2P 10DLC applies specifically to SMS and MMS' },
    { situation: 'Short codes (5 or 6 digit numbers)', relevance: 'Separate registration system (short code leasing), not covered by 10DLC registration' },
    { situation: 'Canadian numbers messaging Canadian recipients only', relevance: 'Different requirements than US messaging, with some exemptions depending on when the number was acquired' }
  ];

  const mentalModel = [
    { q: 'Who are you?', a: 'Your brand registration establishes your verified business identity.' },
    { q: 'What are you sending, and why?', a: 'Your campaign registration establishes your specific messaging use case.' },
    { q: 'Did the recipient actually consent?', a: 'Registration does not create permission on its own.' },
    { q: 'Are you using the correct messaging route for your situation?', a: '10DLC, toll free, and WhatsApp are not interchangeable.' },
    { q: 'Are you following ongoing carrier requirements?', a: 'Registration is a starting point, not a one time task that guarantees indefinite delivery.' }
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
          <span className="text-[#1A2236] font-medium">What Is A2P 10DLC</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">A2P 10DLC</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SMS Compliance</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            What Is A2P 10DLC?<br />
            <span className="text-[#F8D000]">Complete Guide for GoHighLevel Users</span>
          </h1>

          {/* Author Byline */}
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
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              A2P 10DLC (Application to Person, 10 Digit Long Code) is the US carrier registration system that requires businesses sending automated text messages from a standard 10 digit phone number to register their identity and their messaging purpose with The Campaign Registry before carriers will reliably deliver those messages. If you use GoHighLevel to send automated SMS to US phone numbers, brand registration and campaign registration are both required. Registration does not itself give you permission to text anyone; you still need documented consent from each recipient.
            </p>
          </div>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get A2P Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-works"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See How It Works
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            {/* Project Help Card */}
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

            {/* Table of Contents - Sticky */}
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

            {/* About the Author */}
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
                5+ years GHL experience · 200+ systems built globally including A2P 10DLC registration across US, UK, and Australia client accounts. All technical details verified as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
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

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">A2P Registration Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P 10DLC registration for agencies and their clients brand registration, campaign registration, and rejection troubleshooting.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

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

            {/* Mobile Project Help Card */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section 1: What A2P 10DLC Means */}
            <h2 id="what-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Does A2P 10DLC Actually Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The name is two separate concepts joined together.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A2P, Application to Person,</strong> describes a message sent from a software system to a person's phone, rather than typed by one person to another. When GoHighLevel automatically sends an appointment reminder, a missed call text back, or a follow up sequence, that is an A2P message. The opposite is P2P, person to person, an ordinary text between two individuals.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">10DLC, 10 Digit Long Code,</strong> refers to a standard local looking US phone number, the kind GoHighLevel users purchase for SMS automation. Put together, A2P 10DLC means business messaging, sent automatically, from a standard 10 digit number, within the US carrier system.
            </p>

            {/* Section 2: Why Does A2P 10DLC Exist */}
            <h2 id="why-exists" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Does A2P 10DLC Exist?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before this system existed, businesses sent automated messages from ordinary 10 digit numbers with no registration or verification, mixed in with regular personal texting traffic. Carriers had no reliable way to tell a legitimate appointment reminder from a spam or phishing message, and unwanted messaging increased as a result.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              AT&T, T Mobile, and Verizon created The Campaign Registry (TCR) to address this. TCR is where businesses register who they are (brand registration) and what kind of messages they send (campaign registration). Carriers use that registration data to decide how to treat a sender's traffic, allowing verified senders more reliable delivery and higher throughput while filtering unverified traffic more aggressively.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/what-is-a2p-10dlc-infographic.png"
                  alt="What is A2P 10DLC: How the registration chain works, brand vs campaign registration, and the mental model for compliance"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>What is A2P 10DLC: How the registration chain works, brand vs campaign registration, and the mental model for compliance</span>
              </div>
            </div>

            {/* Section 3: How Does A2P 10DLC Work */}
            <h2 id="how-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Does A2P 10DLC Actually Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It helps to see the full chain rather than treating registration as a single black box step.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Business → Messaging provider → The Campaign Registry → Carriers → Recipient.</strong> Your business submits registration information through your messaging provider, GoHighLevel's Trust Center in this case. GoHighLevel does not review or approve this itself; it acts as your Campaign Service Provider (CSP), submitting your information to TCR on your behalf. TCR is a registration and vetting system, not the network your messages actually travel through. Once your brand and campaign are registered, carriers use that verification data to decide how to handle messages sent from your number, and the actual SMS delivery happens over the ordinary carrier network.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This distinction matters because it clarifies who controls what. You control the accuracy and completeness of what you submit. GoHighLevel controls how that submission gets sent to TCR. TCR and the carriers control the review outcome and ongoing delivery treatment, and that part is outside anyone's direct control once submitted.
            </p>

            {/* Section 4: Brand and Campaign Registration */}
            <h2 id="brand-campaign" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Are Brand Registration and Campaign Registration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Registration happens in two stages that answer two different questions.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Brand registration answers: who is sending?</strong> This registers your business identity, legal name, tax ID, and business details, with TCR. Most US businesses register as a Standard Brand using an EIN; a Sole Proprietor path exists for businesses without one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Campaign registration answers: what are they sending, and why?</strong> Once your brand is approved, you register the specific type of messages you send, appointment reminders, customer notifications, marketing, along with sample messages and how you obtain consent.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the full field by field walkthrough of each step, see <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel</Link> and <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>. If either registration is rejected, see <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Brand Rejected in GoHighLevel</Link> or <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">GoHighLevel A2P Campaign Rejected</Link> for the specific rejection reasons and fixes.
            </p>

            {/* CTA Button 2: After Brand/Campaign */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Not sure if you need A2P registration?</span> Let our team help you assess your requirements.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get A2P Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 5: What Happens If You Do Not Register */}
            <h2 id="what-happens" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens If You Do Not Register?
            </h2>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                <strong className="text-[#DC3545]">As of February 2025, all three major US carriers block unregistered A2P 10DLC traffic outright, rather than delaying or filtering it.</strong> This is consistently confirmed across current industry sources: messages sent from an unregistered number do not arrive, with no notification that they failed. Your automation will appear to fire correctly inside GoHighLevel while nothing reaches the recipient. Carrier enforcement policies can change, so treat this as the current situation rather than a permanent guarantee, and verify your own registration status directly in GoHighLevel's Trust Center.
              </p>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Beyond blocking, carriers apply their own penalty schedules for policy violations. T Mobile, for example, has published fines that can reach up to $10,000 for serious or repeated content violations, alongside smaller fines for other offenses. These are carrier enforced penalties, separate from A2P registration itself, and apply regardless of whether you are registered if your messaging practices violate carrier policy.
            </p>

            {/* Section 6: Does Registration Mean You Can Text Anyone */}
            <h2 id="consent" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Does Registration Mean You Can Text Anyone?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              No. A2P registration establishes your business identity and messaging use case with carriers; it is not a substitute for recipient consent. You still need documented opt in from every contact before sending automated SMS, and sending to people who never consented (cold texting) violates carrier and TCR guidelines regardless of registration status, putting your account at risk of suspension.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Consent requirements are also separate from broader legal obligations. The Telephone Consumer Protection Act (TCPA) creates statutory damages for sending unsolicited marketing texts, independent of whether your A2P registration is approved. Registering with TCR does not exempt a business from TCPA or other applicable consent laws.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For compliant opt in wording you can use directly in GoHighLevel forms, see <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P Opt In Language for GoHighLevel</Link>. This guide does not provide legal advice; consult a qualified attorney for your specific situation.
            </p>

            {/* Section 7: Do I Need A2P 10DLC */}
            <h2 id="do-i-need" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Do I Need A2P 10DLC?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Requirements differ by messaging route and country. Use this to orient yourself before assuming one blanket answer applies.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">A2P 10DLC Relevance</th>
                  </tr>
                </thead>
                <tbody>
                  {doINeedData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.relevance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the detailed comparison between toll free and A2P 10DLC, see <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-[#0E9BF0] hover:underline">Toll Free vs A2P 10DLC in GoHighLevel</Link>. For Canada specific rules, including current exemptions, see <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-[#0E9BF0] hover:underline">A2P 10DLC for Canadian Numbers in GoHighLevel</Link>.
            </p>

            {/* Section 8: Does A2P 10DLC Cost Money */}
            <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Does A2P 10DLC Registration Cost Money?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Yes. Registration involves fees set by TCR, your messaging infrastructure provider, and the carriers themselves, not by GoHighLevel, covering initial brand and campaign vetting plus a recurring monthly campaign fee and per message carrier charges. Exact amounts change periodically as these external providers adjust pricing, so rather than repeat a specific number here that may already be out of date by the time you read it, see the current breakdown in <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained</Link>, and always confirm current pricing directly in GoHighLevel's Trust Center before submitting.
            </p>

            {/* Section 9: Does Registration Affect Throughput */}
            <h2 id="throughput" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Does Registration Affect How Many Messages I Can Send?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Yes, indirectly. Carrier review of your brand and campaign informs how much messaging throughput and trust your sending is given over time, which affects how many messages per second you can send and how your traffic is filtered. The detailed mechanics of how this scoring works are beyond what a foundational explanation needs; ask your GoHighLevel account team or search GHL Scale Up's dedicated Trust Score and message throughput guide for the specifics of how this is calculated and how to improve it.
            </p>

            {/* Section 10: The Simple Mental Model */}
            <h2 id="mental-model" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P 10DLC: The Simple Mental Model
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you only remember one framework, use this sequence of questions to check your own setup:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880]">
              {mentalModel.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#1A2236]">{item.q}</strong> {item.a}</span>
                </li>
              ))}
            </ul>

            {/* Section 11: FAQ */}
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

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Need your A2P registration, or your clients', handled directly?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free strategy call</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Rejected in GoHighLevel →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel A2P Campaign Rejected →</Link>
                <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Toll Free vs A2P 10DLC in GoHighLevel →</Link>
                <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC for Canadian Numbers →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language for GoHighLevel →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need your A2P registration, or your clients', handled directly?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P 10DLC registration for agencies and their clients. Brand registration, campaign registration, rejection troubleshooting, and resubmission fully managed.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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