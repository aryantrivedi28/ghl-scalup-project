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
  Lightbulb,
  CheckCircle2,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Shield,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function A2PBrandRegistrationGuideClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is',
        'where-fits',
        'who-needs',
        'standard-vs-sole',
        'choose-right',
        'registration-numbers',
        'info-needed',
        'how-to-register',
        'after-submit',
        'after-approval',
        'common-problems',
        'permission',
        'cost',
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
      q: "Do I need an EIN for A2P brand registration?",
      a: "If your business has an EIN, Tax ID, Business Number or another accepted registration number, you register as a Standard Brand and enter that number exactly as it appears in official records. The Sole Proprietor path is only for individuals or very small businesses with only one employee that have no such number."
    },
    {
      q: "How long does A2P brand registration take?",
      a: "It varies. HighLevel says Standard Brand reviews can take several business days, Sole Proprietor reviews are often quicker, and extra verification can lengthen either one. No timeline is guaranteed."
    },
    {
      q: "Can I use a Gmail address?",
      a: "For a Sole Proprietor Brand, you must use a public domain address such as Gmail, Hotmail or Yahoo. For a Standard Brand, Gmail is accepted, but a business domain email is recommended because free email services can slow approval."
    },
    {
      q: "Can I submit my Campaign before my brand is approved?",
      a: "HighLevel's guidance is that the brand comes first and must be approved before you can register the Campaign and start sending. The Campaign Details section follows the brand section once the brand is eligible to continue."
    },
    {
      q: "Can an agency register a client's brand?",
      a: "Yes, provided the brand is built from the client's own legal business details, because each business needs its own registration. The practical limits and workflow for doing this at scale are in our guide to A2P registration for GoHighLevel agencies."
    },
    {
      q: "What is the difference between brand and Campaign registration?",
      a: "Brand registration identifies the business sending the messages. Campaign registration describes the messaging use case, sample messages and consent process. Both must be approved before you send."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is', title: 'What Is A2P Brand Registration in GoHighLevel?' },
    { id: 'where-fits', title: 'Where Brand Registration Fits in the A2P Process' },
    { id: 'who-needs', title: 'Who Needs A2P Brand Registration?' },
    { id: 'standard-vs-sole', title: 'Standard Brand vs Sole Proprietor' },
    { id: 'choose-right', title: 'How to Choose the Right Brand Type' },
    { id: 'registration-numbers', title: 'Registration Numbers by Country' },
    { id: 'info-needed', title: 'What Information Do You Need Before Registering?' },
    { id: 'how-to-register', title: 'How to Register an A2P Brand in GoHighLevel' },
    { id: 'after-submit', title: 'What Happens After You Submit' },
    { id: 'after-approval', title: 'What Happens After Brand Approval' },
    { id: 'common-problems', title: 'Common Brand Registration Problems' },
    { id: 'permission', title: 'Does Brand Registration Give You Permission to Send SMS?' },
    { id: 'cost', title: 'How Much Does Brand Registration Cost?' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const brandComparison = [
    { label: 'Who it is for', standard: 'Businesses with an EIN, Tax ID, Business Number or other accepted registration number, such as LLCs, corporations, partnerships, nonprofits and government organizations', sole: 'Individuals or very small businesses with only one employee and no EIN, Tax ID, Business Number or registered business entity' },
    { label: 'Registration number', standard: 'Required. Must match official records', sole: 'None' },
    { label: 'Phone numbers', standard: 'Supports multiple numbers', sole: 'One number per Campaign' },
    { label: 'Throughput and use cases', standard: 'Greater throughput and a wider range of Campaign use cases', sole: 'Lower messaging limits and stricter sending restrictions' },
    { label: 'Contact email', standard: 'A business domain email is recommended. Gmail and similar are accepted but may slow approval', sole: 'A public domain email such as Gmail, Hotmail or Yahoo is required. Business domain emails are not eligible' },
    { label: 'Identity checks', standard: 'HighLevel may ask for Persona identity verification or an email OTP', sole: 'A US or Canada mobile number that can receive an OTP. VoIP, LeadConnector and other CPaaS numbers are not accepted' },
    { label: 'Brand name', standard: 'Exact legal business name', sole: 'Individual or unregistered business name. No LLC, Inc, Corporation or similar suffix' }
  ];

  const countryNumbers = [
    { region: 'United States', number: 'EIN', notes: 'Use the legal name and EIN shown on your CP 575 or 147C letter. A DUNS number is not accepted' },
    { region: 'Canada', number: 'BN-9', notes: 'Enter only the first 9 digits of the Business Number, for example 123456789 from 123456789RT0001' },
    { region: 'Europe', number: 'VAT number', notes: 'Use the numeric portion. The VIES lookup helps confirm your details before you submit' },
    { region: 'Australia', number: 'ABN', notes: 'Confirm with the official ABN lookup tool' },
    { region: 'New Zealand', number: 'NZBN', notes: 'Confirm with the official NZBN lookup tool' },
    { region: 'Hong Kong', number: 'Companies Registry (CN) number', notes: 'Confirm with the Companies Registry lookup' },
    { region: 'Other countries', number: 'VAT ID, or your primary corporate registration or tax ID', notes: 'Use the numeric portion of the VAT ID where you have one' }
  ];

  const infoNeeded = [
    { title: 'Exact legal business name.', desc: 'For a US business, copy it from your CP 575 EIN Confirmation Letter or a 147C letter, using only the first line of the name. Do not use the name on a W-2 or W-9, a DBA, a trade name or the name of your messaging provider.' },
    { title: 'Registration number.', desc: 'Your EIN, BN-9 or the equivalent number for your country, checked against official records.' },
    { title: 'Business type and industry.', desc: 'These should describe how the business is actually registered and what it does.' },
    { title: 'Registered address.', desc: 'A physical street address that matches your official registration. A PO box will not work, and a branch or mailing address that differs from your registered address can produce a mismatch.' },
    { title: 'Website.', desc: 'If you provide one, it should be live, publicly accessible and clearly match your business name and services.' },
    { title: 'An authorized representative.', desc: 'Someone who can answer questions about the business if carriers need to verify it, with a monitored email and a reachable phone number. The mobile number and email need to match carrier records for verification to succeed.' },
    { title: 'For Sole Proprietors:', desc: 'a personal US or Canada mobile number for the OTP and a public domain email address.' }
  ];

  const registrationSteps = [
    { step: 'Open Trust Center.', desc: 'In the sub-account, go to Settings, then Phone System under Business Services, then the Trust Center tab.' },
    { step: 'Start registration.', desc: 'Select Start Registration under the A2P Messaging (SMS) tab.' },
    { step: 'Answer the Get Started questions.', desc: 'Tell HighLevel where your business is registered and whether it has a Tax ID. This answer decides whether you follow the Standard or Sole Proprietor path.' },
    { step: 'Enter your business details.', desc: 'With a Tax ID, you provide the legal business name, business type, industry, registration ID type, registration number, business email and region of operations. Without one, you provide the business name or your full name, your industry and your phone number.' },
    { step: 'Add the business address.', desc: 'Enter the country, state or province, street address, city and postal code. Leave the PO box out of the street field.' },
    { step: 'Add contact information.', desc: 'Enter the authorized representative\'s first and last name, email, phone number, job position and job title.' },
    { step: 'Complete verification if prompted.', desc: 'Depending on the account and your details, HighLevel may ask for Persona identity verification or an email OTP. For the email OTP you get three attempts to enter the code and two chances to resend it, and after three failed attempts you restart the verification.' },
    { step: 'Continue to Campaign Details.', desc: 'Once the brand section is complete, the flow moves on to your messaging use case and consent details.' }
  ];

  const commonProblems = [
    'A legal business name that does not match official records',
    'An EIN, Tax ID or registration number that is incorrect',
    'An address that does not match the registration records',
    'A Sole Proprietor registration for a business that has a Tax ID',
    'A recently issued EIN that has not reached verification systems yet'
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
          <span className="text-[#1A2236] font-medium">A2P Brand Registration Guide</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Brand Registration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Brand Registration in GoHighLevel:<br />
            <span className="text-[#F8D000]">Standard vs Sole Proprietor</span>
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
              A2P brand registration is how you tell US carriers who is behind the business text messages you send. In GoHighLevel you complete it in Trust Center, and the path you follow depends on one question: does your business have an EIN, Tax ID, Business Number or another accepted business registration number?
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              If it does, register as a <strong className="text-white">Standard Brand</strong>. If it does not, and you are an individual or a very small business with only one employee, the <strong className="text-white">Sole Proprietor Brand</strong> is the path built for you. Whichever you choose, the legal name, registration number and address you enter need to match your official records exactly.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Brand approval is also only the first half of registration. You still need an approved Campaign before you can send.
            </p>
          </div>

          {/* CTA Button 1 */}
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
              href="#standard-vs-sole"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Compare Brand Types
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
              <div className="text-sm font-bold text-white mb-2">A2P Registration Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P 10DLC registration for agencies and their clients brand registration, campaign registration, and rejection troubleshooting.</p>
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

            {/* Section: What Is A2P Brand Registration */}
            <h2 id="what-is" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is A2P Brand Registration in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An A2P brand is the verified identity of the business or individual responsible for the messages you send. Carriers use it to confirm who is behind the traffic and to judge trust and long term deliverability. HighLevel provides the registration workflow and submits your details to The Campaign Registry (TCR), while carriers and their registration partners make the final decision.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you want the wider background on why this system exists, read our explainer on <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC means</Link>. This guide starts at the point where you are ready to register.
            </p>

            {/* Section: Where Brand Registration Fits */}
            <h2 id="where-fits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where Brand Registration Fits in the A2P Process
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P registration separates identity from behavior. The Brand answers <strong className="text-[#1A2236]">who is sending</strong>. The Campaign answers <strong className="text-[#1A2236]">what you are sending, why, and how recipients agreed to receive it</strong>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              In HighLevel both live inside the same Trust Center flow, split into Business Details (your Brand) and Campaign Details. This article covers Business Details. Once your brand is approved, the next stage is <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>, where you describe your use case, sample messages and consent process. Registering a brand does not by itself let you send a single message.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-brand-registration-infographic.png"
                  alt="A2P Brand Registration in GoHighLevel: Standard Brand vs Sole Proprietor comparison, registration process, and information checklist"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P Brand Registration in GoHighLevel: Standard Brand vs Sole Proprietor comparison, registration process, and information checklist</span>
              </div>
            </div>

            {/* Section: Who Needs A2P Brand Registration */}
            <h2 id="who-needs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Who Needs A2P Brand Registration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You need an A2P brand if your business sends SMS or MMS to US recipients from standard 10 digit local numbers through HighLevel. Toll Free numbers follow a separate verification process instead, which we compare in <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-[#0E9BF0] hover:underline">Toll Free vs A2P 10DLC in GoHighLevel</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Each business needs its own brand. If you are an agency registering a client sub-account, the brand belongs to your client's legal entity, not to your agency. The multi client side of that is covered in <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P registration for GoHighLevel agencies</Link>.
            </p>


            {/* Section: Standard vs Sole Proprietor */}
            <h2 id="standard-vs-sole" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Standard Brand vs Sole Proprietor
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the decision that shapes everything else, so it is worth getting right before you open Trust Center.
            </p>

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
                  {brandComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-semibold text-[#1A2236]">{item.label}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.standard}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.sole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Standard Brand</strong> is the default for any registered business. When you reach messaging volume in Campaign Details, Standard Brands choose between the Low Volume and High Volume options that suit their sending needs.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Sole Proprietor</strong> is intentionally narrow. It exists for individuals and very small businesses that have no registration number at all, and it is available to people in the United States and Canada. A Tax ID rules it out regardless of company size. A one person US LLC still has an EIN, so under TCR rules it registers as a Standard Brand, not a Sole Proprietor. Not every business without an EIN qualifies either, so check the one employee and no registered entity conditions before you choose it.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">SOLE PROPRIETOR HAS A PRACTICAL CEILING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Because it supports a single phone number per Campaign, a business that expects to add numbers as it grows should think twice before starting there.
              </p>
            </div>

            {/* Section: How to Choose the Right Brand Type */}
            <h2 id="choose-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Choose the Right Brand Type
            </h2>
            <ol className="space-y-3 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Do you have an EIN, Tax ID, Business Number or another accepted registration number? If yes, register as a <strong className="text-[#1A2236]">Standard Brand</strong>.</li>
              <li>If not, are you an individual or a business with one employee and no registered entity, located in the US or Canada? If yes, <strong className="text-[#1A2236]">Sole Proprietor</strong> is the intended path.</li>
              <li>If neither describes you, check the table below for the number your country uses, or ask HighLevel Support before submitting. Registering under the wrong type is the mistake that costs the most time.</li>
            </ol>

            {/* Section: Registration Numbers by Country */}
            <h2 id="registration-numbers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Registration Numbers by Country
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a Standard Brand, HighLevel accepts the registration number that matches where the business is registered:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Region</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Number to use</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {countryNumbers.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.region}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.number}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEVER ENTER A SOCIAL SECURITY NUMBER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Never enter a Social Security number in the EIN field. If you have no EIN, the Sole Proprietor path is the intended route.
              </p>
            </div>

            {/* Section: What Information Do You Need */}
            <h2 id="info-needed" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Information Do You Need Before Registering?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most rejections and repeat submissions trace back to details that were assembled while the form was already open. Gather these first:
            </p>

            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {infoNeeded.map((item, idx) => (
                <li key={idx}><strong className="text-[#1A2236]">{item.title}</strong> {item.desc}</li>
              ))}
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Uploading your CP 575 is optional but useful. HighLevel can use it to fill in the legal name, EIN and registered address for you, which reduces typing errors. Keep in mind that each business should have its own contact person, and HighLevel advises against reusing the same email address across more than five brands. A single mobile number can validate up to three Sole Proprietor brands.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A NOTE ON NEW EINS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                HighLevel notes that an EIN issued within the last 15 days may be rejected because the record has not yet reached the systems used for verification. If your EIN is recent, that is worth knowing before you submit.
              </p>
            </div>

            {/* Section: How to Register */}
            <h2 id="how-to-register" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Register an A2P Brand in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These steps follow HighLevel's current documentation. The exact fields change depending on your answers, so treat the screen in front of you as the final authority.
            </p>

            <div className="space-y-3 mb-6">
              {registrationSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.step}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section: After You Submit */}
            <h2 id="after-submit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens After You Submit
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel submits your brand to TCR for review. TCR runs the primary vetting, and HighLevel also submits the brand for secondary vetting, which feeds into the Trust Score that influences throughput. If you want to understand how that score works, see our guide to <Link href="/blog/a2p-trust-score-mps" className="text-[#0E9BF0] hover:underline">how Trust Score and MPS work</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel does not publish a fixed approval time. Standard Brand reviews can take several business days, Sole Proprietor reviews are often quicker, and any extra verification can add time. If a brand stays pending longer than you expect, contact HighLevel Support rather than submitting again.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Approval is also worth treating as a commitment. Once a brand is approved, its details cannot be edited from your account, so a change to your registered business information has to go through Support. Getting the details right the first time saves that detour.
            </p>


            {/* Section: After Brand Approval */}
            <h2 id="after-approval" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens After Brand Approval
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Brand approval does not approve your messaging. The next section of the flow is Campaign Details, where you set your messaging volume, use case, sample messages and consent information. Our walkthrough of <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link> covers that stage in full, so we will not repeat it here.
            </p>

            {/* Section: Common Brand Registration Problems */}
            <h2 id="common-problems" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Brand Registration Problems
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A brand can be rejected when TCR cannot verify the business information you submitted. The causes HighLevel points to most often are:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {commonProblems.map((problem, idx) => (
                <li key={idx}>{problem}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A mismatch in any of these can prevent verification or contribute to a rejection. If your registration has already failed, start with the specific reason shown in Trust Center and follow our guide on <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">how to fix an A2P brand rejection</Link>.
            </p>

            {/* Section: Does Brand Registration Give You Permission */}
            <h2 id="permission" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Does Brand Registration Give You Permission to Send SMS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              No. Registration tells carriers who you are and what you plan to send, but it does not replace consent from the people you text. You still need a legitimate opt in process, and the consent details you describe in Campaign Details need to match how contacts really sign up. For the wording and implementation side, see <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt in language and requirements</Link>.
            </p>

            {/* Section: How Much Does Brand Registration Cost */}
            <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Much Does Brand Registration Cost?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel presents brand registration and first Campaign vetting as one bundled one time charge at registration, and the amount depends on the brand tier you choose. These are passthrough charges from TCR, Twilio and carriers, HighLevel adds no markup, and providers can change them, so trust the price shown in Trust Center over any published figure. For the full breakdown, see <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">current A2P 10DLC fees</Link>.
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

            {/* Next Step Section */}
            <div className="mt-8 bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">Next Step</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Once your brand is approved and your Campaign follows, the practical work shifts to building the messages themselves. If you want that part designed and tested properly, that is what our <Link href="/services/campaign-automation" className="text-[#0E9BF0] hover:underline">Email, SMS and WhatsApp automation service</Link> covers.
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">How to Fix an A2P Brand Rejection →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Toll Free vs A2P 10DLC in GoHighLevel →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">How Trust Score and MPS Work →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need A2P brand registration done right the first time?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration for agencies and their clients. EIN verification before submission, correct brand type selection, full registration walkthrough, and resubmission if needed.
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
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center rounded-full">
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
                This guide was checked against HighLevel's Registering Your A2P Brand, Brand Approval Best Practices and A2P registration overview documentation, along with Twilio's A2P 10DLC business information guide, in September 2026. Requirements, fields and pricing can change, so confirm what you see in Trust Center before you submit.
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