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
  Lightbulb,
  Rocket,
  Target,
  MessageCircle,
  Phone,
  Search,
  Info,
  CheckCircle,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function TollFreeVsA2P10DLCClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'quick-answer',
      'at-a-glance',
      'what-is-a2p',
      'what-is-toll-free',
      'toll-free-vs-a2p-registration',
      'review-time',
      'throughput-mps',
      'costs',
      'deliverability',
      'local-vs-national',
      'marketing-transactional',
      'scenarios',
      'how-to-choose',
      'both-together',
      'switching',
      'common-mistakes',
      'checklist',
      'faq'
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
      q: "Does toll-free need A2P registration?",
      a: "No. Toll-free does not use A2P Brand and Campaign registration, but it needs its own Toll-Free Verification."
    },
    {
      q: "Does toll-free need verification?",
      a: "Yes. HighLevel says only a toll-free number with Verified (Approved) status can send SMS or MMS to US and Canada recipients."
    },
    {
      q: "Is toll-free better than A2P?",
      a: "Neither is better in every case. The right route depends on recipients, identity, volume, cost and readiness."
    },
    {
      q: "Which has higher MPS?",
      a: "Toll-free defaults to 3 MPS, with higher throughput available on request. A2P ranges from 2.25 to 225 MPS in HighLevel's tables depending on Brand type, Trust Score and Campaign type."
    },
    {
      q: "Which is cheaper?",
      a: "It depends. Toll-free numbers cost more per month, while A2P adds registration and monthly Campaign fees."
    },
    {
      q: "Which is faster to approve?",
      a: "Neither has a guaranteed timeline. HighLevel says toll-free review can take up to four to six weeks, and describes a Fast Track option for A2P Campaigns."
    },
    {
      q: "Does toll-free have a Trust Score?",
      a: "HighLevel's toll-free documentation describes none. Trust Score applies to A2P Standard Brands. See A2P Trust Score and MPS."
    },
    {
      q: "Can I send while toll-free verification is pending?",
      a: "No. HighLevel says Pending Verification numbers remain blocked for messaging."
    },
    {
      q: "What happens if toll-free verification is rejected?",
      a: "Correct the listed problem and resubmit if available, or contact HighLevel Support for an appeal."
    },
    {
      q: "Can I use both?",
      a: "Yes, each with its own registration or verification, and neither is a way around the other's limits."
    },
    {
      q: "Is toll-free available for Canadian recipients?",
      a: "HighLevel's verification applies to messages from US or Canada toll-free numbers to recipients in the United States and Canada. Canadian 10DLC rules differ and are covered in the Canadian numbers guide."
    },
    {
      q: "Does an EIN matter?",
      a: "Not for completing toll-free verification, per HighLevel, though it may request additional registration details for some business types. Standard A2P Brands use an EIN or equivalent."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'at-a-glance', title: 'Toll-Free vs A2P 10DLC at a Glance' },
    { id: 'what-is-a2p', title: 'What Is A2P 10DLC?' },
    { id: 'what-is-toll-free', title: 'What Is Toll-Free SMS in GoHighLevel?' },
    { id: 'toll-free-vs-a2p-registration', title: 'Toll-Free Verification vs A2P Registration' },
    { id: 'review-time', title: 'Registration and Review Time' },
    { id: 'throughput-mps', title: 'Throughput and MPS' },
    { id: 'costs', title: 'Costs' },
    { id: 'deliverability', title: 'Deliverability and Carrier Filtering' },
    { id: 'local-vs-national', title: 'Local vs National Number Identity' },
    { id: 'marketing-transactional', title: 'Marketing, Transactional and Two Way Messaging' },
    { id: 'scenarios', title: 'Scenarios' },
    { id: 'how-to-choose', title: 'How to Choose for a GoHighLevel Business' },
    { id: 'both-together', title: 'Can You Use Toll-Free and A2P 10DLC Together?' },
    { id: 'switching', title: 'Switching Between Routes' },
    { id: 'common-mistakes', title: 'Common Mistakes When Choosing a Route' },
    { id: 'checklist', title: 'Toll-Free vs A2P Decision Checklist' },
    { id: 'faq', title: 'Toll-Free vs A2P 10DLC FAQ' }
  ];

  const glanceData = [
    { aspect: 'Number type', a2p: 'Standard 10 digit local numbers', tollFree: 'Toll-free numbers such as 800, 888, 877, 866, 855, 844 and 833' },
    { aspect: 'What you register', a2p: 'A Brand, then a Campaign, then link each number to the approved Campaign', tollFree: 'Each toll-free number through Toll-Free Verification' },
    { aspect: 'Where recipients are', a2p: 'US bound A2P messaging', tollFree: 'US and Canada recipients, per HighLevel' },
    { aspect: 'Tax ID or EIN', a2p: 'Needed for Standard Brands. Sole Proprietor is the path without one', tollFree: 'Not required to complete verification, per HighLevel' },
    { aspect: 'Review time', a2p: 'Not fixed. HighLevel describes a Fast Track option that expedites Campaign approval to within 3 business days', tollFree: 'HighLevel says review can take up to four to six weeks, though some finish sooner. Not guaranteed' },
    { aspect: 'Throughput', a2p: 'Set by Brand type, Campaign type and, for Standard Brands, Trust Score', tollFree: '3 MPS by default toward US and Canada carriers, higher on request, per HighLevel' },
    { aspect: 'Number rental', a2p: 'About $1.15 a month per HighLevel pricing', tollFree: '$2.15 a month per HighLevel pricing' },
    { aspect: 'Registration fees', a2p: 'One time bundle plus a monthly Campaign fee', tollFree: "HighLevel's verification guide lists no verification fee. Confirm in your account" },
    { aspect: 'Identity', a2p: 'Local area code', tollFree: 'National style number' }
  ];

  const registrationComparison = [
    { aspect: 'Model', a2p: 'Brand, then Campaign, then number linking', tollFree: 'One verification per toll-free number' },
    { aspect: 'Who reviews', a2p: 'TCR and carrier vetting partners', tollFree: 'Participating carriers, via the provider' },
    { aspect: 'Business identity', a2p: 'Legal name and registration details matched to official records for Standard Brands', tollFree: 'End business name, public website or public social profile, contact and physical location' },
    { aspect: 'Messaging details', a2p: 'Use case, description, samples, opt in flow, policies', tollFree: 'Use case categories, description, sample messages, opt in type and public proof' },
    { aspect: 'Trust Score', a2p: 'Applies to Standard Brands', tollFree: 'No Trust Score is described in HighLevel toll-free documentation' },
    { aspect: 'Consent', a2p: 'Required and reviewed', tollFree: 'Required and reviewed' }
  ];

  const costData = [
    { costItem: 'Number rental', a2p: 'About $1.15 a month', tollFree: '$2.15 a month' },
    { costItem: 'Registration', a2p: 'One time bundle covering the Brand, first Campaign vetting and Fast Track. See the fees guide for amounts by Brand type', tollFree: "HighLevel's verification guide lists no fee. Twilio says it offers verification at no cost" },
    { costItem: 'Recurring registration cost', a2p: 'Monthly Campaign fee that varies by Campaign type', tollFree: 'None listed' },
    { costItem: 'SMS usage', a2p: '$0.00747 per segment, sent or received', tollFree: 'Same segment rate per HighLevel' },
    { costItem: 'Carrier surcharges', a2p: "Per carrier surcharges listed in HighLevel's pricing guide", tollFree: "HighLevel's table is not labeled by number type. Confirm how it applies to toll-free in your billing" }
  ];

  const scenariosData = [
    { scenario: 'Local service business', tollFree: 'Your customers span many regions or you want a national style line', a2p: 'Local identity matters and you have the business details for registration' },
    { scenario: 'National service business', tollFree: 'A national sender identity fits and 3 MPS covers your volume', a2p: 'You want higher tier throughput and can complete Standard Brand registration' },
    { scenario: 'High volume notifications', tollFree: 'Your peak per second need fits within the toll-free rate you can get approved', a2p: 'Your Brand and Campaign tier gives higher MPS than toll-free, and daily limits fit' },
    { scenario: 'Marketing SMS', tollFree: 'Your consent process and content pass toll-free verification', a2p: 'Your consent and Campaign use case fit A2P and you accept its fees' },
    { scenario: 'Appointment reminders', tollFree: 'You are messaging US or Canada recipients and prefer one national number', a2p: 'You want a local number tied to a defined Campaign' },
    { scenario: 'Customer support', tollFree: 'Recipients call and text one national line', a2p: 'Support runs through a local team number' },
    { scenario: 'Already using A2P', tollFree: 'You have a reason to add a second sender, not to escape registration', a2p: 'Your registration is approved and working. Switching is usually unnecessary' }
  ];

  const howToChooseSteps = [
    'Recipients: where are they? Toll-free verification covers US and Canada. A2P 10DLC applies to US bound messaging from local numbers, and Canadian rules are in A2P 10DLC for Canadian numbers.',
    'Identity: local or national?',
    'Purpose: marketing, notifications, support, two way? Check that your consent process supports it.',
    'Volume and throughput: compare your peak segments per second and daily volume to toll-free\'s default and your A2P tier.',
    'Verification or registration readiness: can you supply the end business details, public website, use case and consent proof each route asks for?',
    'Cost: number rental, registration fees and per message charges at your volume.',
    'Timing: neither review time is guaranteed, so plan for weeks rather than days on either route.',
    'Existing numbers: what you already own and any migration constraints.'
  ];

  const commonMistakes = [
    'Assuming toll-free is unregulated',
    'Assuming toll-free is unlimited',
    'Planning around a two day toll-free approval',
    'Treating verification or registration as consent',
    'Using an agency or platform name as the toll-free legal entity instead of the end business',
    'Testing production messaging while a toll-free number is Pending',
    'Choosing an A2P use case for throughput instead of accuracy',
    'Expecting registration to transfer with a moved number'
  ];

  const checklistItems = [
    'Recipient geography confirmed',
    'Sender identity decided',
    'Messaging purpose and consent process defined',
    'Peak throughput and daily volume estimated',
    'Toll-free default and A2P tier compared',
    'Costs calculated from HighLevel pricing',
    'Business details, public website and consent proof ready',
    'Review timing planned as a range',
    'Migration constraints checked'
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        // onClick={handleOpenBooking}
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
          <span className="text-[#1A2236] font-medium">Toll-Free vs A2P 10DLC</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Toll-Free</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Toll-Free vs A2P 10DLC in GoHighLevel:<br />
            <span className="text-[#F8D000]">Differences, Costs and Throughput</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered · Verified against GoHighLevel and Twilio documentation, September 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              <strong className="text-white">A2P 10DLC</strong> is the US carrier registration system for business texts sent from standard 10 digit local numbers. It works through a <strong className="text-white">Brand</strong> (who is sending) and a <strong className="text-white">Campaign</strong> (what you send), then links each number to an approved Campaign. <strong className="text-white">Toll-Free</strong> is a different sender type. It does not use Brand and Campaign registration. It has its own <strong className="text-white">Toll-Free Verification</strong>, which registers each toll-free number, the end business and the messaging use case with carriers.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Toll-free does not skip compliance. In HighLevel, a toll-free number cannot send SMS or MMS to US or Canadian recipients until it shows Verified (Approved), and both routes require accurate sender identity and documented consent. Which route fits depends on your recipients, the sender identity you want, your volume, and how each route's review and limits work today. This guide compares them so you can decide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get SMS Setup Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-choose"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See How to Choose
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="mb-6">
              <ProjectHelpCard />
            </div>

            {/* Table of Contents */}
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
                5+ years GHL experience · 200+ A2P and toll-free registrations handled globally. All technical details verified as of September 2026.
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
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
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


            {/* Section: At a Glance */}
            <h2 id="at-a-glance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Toll-Free vs A2P 10DLC at a Glance
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"></th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">A2P 10DLC (local numbers)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Toll-Free</th>
                  </tr>
                </thead>
                <tbody>
                  {glanceData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.a2p}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tollFree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Figures come from HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/48001222300-toll-free-number-verification-guide-for-lc-phone-us-canada-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Toll-Free Verification guide</a> (updated September 17, 2026), its <a href="https://help.gohighlevel.com/support/solutions/articles/48001223556-phone-system-pricing-billing-guide" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">LC Phone pricing guide</a> and its throughput guidance, and they can change. Confirm current values in your account.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/toll-free-vs-a2p-10dlc-infographic.png"
                  alt="Toll-Free vs A2P 10DLC in GoHighLevel: Registration comparison, costs, throughput, and decision checklist"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Toll-Free vs A2P 10DLC in GoHighLevel: Registration comparison, costs, throughput, and decision checklist</span>
              </div>
            </div>

            {/* Section: What Is A2P 10DLC */}
            <h2 id="what-is-a2p" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is A2P 10DLC?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A2P 10DLC covers application to person messaging from standard US 10 digit numbers. Registration establishes the verified business behind the messages and the messaging program itself. You register the Brand, register the Campaign, and each sending number must be linked to the approved Campaign. Detail lives in <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>, <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration</Link> and <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration</Link>, so this guide only covers what you need to compare it with toll-free.
            </p>

            {/* Section: What Is Toll-Free SMS */}
            <h2 id="what-is-toll-free" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is Toll-Free SMS in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel says Toll-Free Verification registers a toll-free number, the end business using it and the messaging use case with participating carriers. It applies to SMS and MMS sent from US or Canada toll-free numbers to recipients in the United States and Canada, and each number needs its own approved verification record. It does not affect voice calling.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              In HighLevel, only numbers showing <strong className="text-[#1A2236]">Verified (Approved)</strong> can send. Restricted (Unverified), Pending Verification and Rejected numbers stay blocked for messaging. An unverified send can return error 30032, and error 30007 indicates carrier filtering. Twilio's toll-free documentation describes the same blocking of unverified and pending numbers since January 31, 2024.
            </p>

            {/* Section: Toll-Free Verification vs A2P Registration */}
            <h2 id="toll-free-vs-a2p-registration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Toll-Free Verification vs A2P Registration
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"></th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">A2P 10DLC</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Toll-Free Verification</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.a2p}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tollFree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Toll-Free Verification is not A2P Brand and Campaign registration, and it is not consent. Neither one gives you permission to text anyone. For consent wording and evidence, see <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt in language and requirements</Link>.
            </p>

            {/* Section: Review Time */}
            <h2 id="review-time" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Registration and Review Time
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Toll-free.</strong> HighLevel's current guide says review can take up to four to six weeks, although some submissions finish sooner, and that approval timing is not guaranteed. Twilio's own documentation for verification submitted directly to Twilio gives a shorter figure, roughly three to five business days. The two describe different submission paths, so for a GoHighLevel user the HighLevel figure is the one to plan around. Older guidance that toll-free approves in as little as two days no longer matches HighLevel's current wording.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A2P.</strong> HighLevel does not publish a fixed review time for Campaigns. Its fee reference describes a Fast Track option, included in the one time registration bundle, that expedites approval to within 3 business days, and a Campaign stays Pending until vetting finishes. Neither route has a guaranteed timeline, so treat both as ranges and check status in your account.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If a toll-free submission is rejected, HighLevel says to correct the business information, website, use case, consent evidence or sample messages and resubmit when available, or contact support to request an appeal. If an A2P Campaign is rejected, see <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected</Link> and <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Brand Rejected</Link>.
            </p>

            {/* Section: Throughput and MPS */}
            <h2 id="throughput-mps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Throughput and MPS
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Toll-free:</strong> HighLevel's help center says a US toll-free number has 3 MPS toward all US and Canada carriers by default, and that higher throughput can be requested through HighLevel's Sales team. Twilio's toll-free documentation also gives 3 segments per second by default with increases possible. It is not unlimited, and I found no published toll-free daily cap in HighLevel's documents.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A2P:</strong> throughput is not one number. For Standard Brands it depends on Trust Score and Campaign type. For example, HighLevel's tables list up to 225 MPS across the major networks for a Trust Score of 75 to 100, 12 for a score of 1 to 49, 3.75 for a Low Volume Mixed Campaign, and 2.25 for a Sole Proprietor Brand. Sole Proprietor and Low Volume Standard Brands also carry lower daily allowances. The full model is in <Link href="/blog/a2p-trust-score-mps" className="text-[#0E9BF0] hover:underline">A2P Trust Score and MPS</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              So neither statement holds as a rule. A2P is not always slower, and toll-free is not unlimited. A low tier A2P Campaign can be capped below toll-free's default, while a high tier Standard Brand can be far above it. Compare your actual tier against the 3 MPS toll-free default and any increase HighLevel approves.
            </p>

            {/* Section: Costs */}
            <h2 id="costs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Costs
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use HighLevel's pricing for a GoHighLevel account, not direct Twilio pricing. Amounts below come from HighLevel's LC Phone pricing guide and A2P fee reference, in USD.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Cost item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">A2P 10DLC</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Toll-Free</th>
                  </tr>
                </thead>
                <tbody>
                  {costData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.costItem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.a2p}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tollFree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Neither route is simply cheaper. Toll-free adds a higher monthly number cost and no listed registration fee, while A2P adds registration and monthly Campaign fees but a cheaper number. Which costs less over a year depends on your number count, Campaign type and volume. Failed messages can still be billed once submitted for delivery. Detailed A2P pricing, including HighLevel's 5% pass through markup when agencies re-bill, is in <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC fees</Link>.
            </p>

            {/* Section: Deliverability */}
            <h2 id="deliverability" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Deliverability and Carrier Filtering
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Neither route guarantees delivery. Registration or verification tells carriers who is sending and what you plan to send. Filtering still depends on consent, message content, traffic patterns, complaints, opt out rates and other carrier signals. HighLevel notes that even verified toll-free numbers can see error 30007 filtering when content, consent or sender identification does not meet carrier expectations, and Twilio's toll-free best practices stress opt in and a low opt out rate to avoid filtering. Do not choose a route on a promise of better deliverability.
            </p>

            {/* Section: Local vs National */}
            <h2 id="local-vs-national" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Local vs National Number Identity
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A local 10DLC number carries an area code, which can suit a business serving a specific area and conversations that feel local. A toll-free number reads as a national or business line, which can suit support lines or businesses serving many regions. These are perception considerations, not rules. No source shows customers universally trust one more, so consider your own audience.
            </p>

            {/* Section: Marketing, Transactional and Two Way */}
            <h2 id="marketing-transactional" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Marketing, Transactional and Two Way Messaging
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Marketing:</strong> both routes require consent. HighLevel's toll-free form asks you to select Marketing as a category when promotional content will be sent, and A2P has Marketing and Mixed use cases. Neither removes consent requirements.</li>
              <li><strong className="text-[#1A2236]">Appointment reminders and service messages:</strong> purpose matters independently of sender type. Choosing toll-free does not change whether consent is needed, and A2P's use case list has no dedicated appointment category, so you pick the closest fit.</li>
              <li><strong className="text-[#1A2236]">Two way conversations:</strong> HighLevel bills inbound SMS at the same segment rate on both number types, and toll-free MMS inbound is priced separately from local MMS inbound. I found no HighLevel documentation restricting two way messaging on either route once it is approved.</li>
            </ul>

            {/* Section: Scenarios */}
            <h2 id="scenarios" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Scenarios
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Scenario</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Points toward toll-free when</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Points toward A2P 10DLC when</th>
                  </tr>
                </thead>
                <tbody>
                  {scenariosData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.scenario}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tollFree}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.a2p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How to Choose */}
            <h2 id="how-to-choose" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Choose for a GoHighLevel Business
            </h2>
            <div className="space-y-3 mb-6">
              {howToChooseSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If the answers point in different directions, running both can be reasonable, as the next section explains.
            </p>

            {/* Section: Both Together */}
            <h2 id="both-together" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Use Toll-Free and A2P 10DLC Together?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Yes. Nothing in HighLevel's documentation prevents an account from holding both a verified toll-free number and A2P registered local numbers, and businesses sometimes do so for different programs, local versus national identity, or separate audiences. Each route keeps its own limits, so do not use multiple senders to get around throughput limits or filtering. Some older guidance suggested submitting both together so toll-free can start sending sooner while A2P is reviewed. HighLevel's current documentation does not say that, and with toll-free review described as up to four to six weeks, it is not a reliable way to start faster.
            </p>

            {/* Section: Switching */}
            <h2 id="switching" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Switching Between Routes
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A2P to toll-free:</strong> buy a toll-free number, complete Toll-Free Verification for it, and update your workflows and customer facing materials. Your A2P approval does not carry over, because verification is per toll-free number.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Toll-free to A2P:</strong> get a local number, register a Brand and Campaign, link the number to the approved Campaign, and align opt in and sample messages with the Campaign. Start with <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration</Link> and <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Moving numbers:</strong> HighLevel's number move guide says A2P status is tied to the sub-account, not the number, so it does not move with the number, and after migrating to LC Phone it tells you to verify any required toll-free or country specific compliance status. Check status after any move rather than assuming it transferred. Move rules are in HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts-same-agency-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Move Numbers guide</a> and <a href="https://help.gohighlevel.com/support/solutions/articles/48001204027" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">LC Phone migration guide</a>.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mistakes When Choosing a Route
            </h2>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {commonMistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section: Checklist */}
            <h2 id="checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Toll-Free vs A2P Decision Checklist
            </h2>
            <div className="space-y-2 mb-6">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#5C6880]">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Toll-Free vs A2P 10DLC FAQ
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

            {/* CTA 4 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about Toll-Free vs A2P 10DLC?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our SMS specialists directly. We've handled 200+ registrations.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">A2P Trust Score and MPS Explained →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC for Canadian Numbers →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected in GoHighLevel →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Rejected in GoHighLevel →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Not sure which number type is right for your GHL setup?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles both A2P 10DLC and toll-free registration. We assess your situation and run the right registration strategy often both in parallel to minimise the time before you can start sending.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P and toll-free registrations handled globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                This guide was checked against HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/48001222300-toll-free-number-verification-guide-for-lc-phone-us-canada-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Toll-Free Verification guide</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/48001223556-phone-system-pricing-billing-guide" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">LC Phone pricing guide</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000004527-what-is-message-throughput-mps-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">throughput guide</a> and <a href="https://help.gohighlevel.com/support/solutions/articles/155000005200-a2p-10dlc-messaging-fees-registration-monthly-and-carrier-costs" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">A2P fee reference</a>, and Twilio's <a href="https://help.twilio.com/articles/5377174717595-Toll-Free-Message-Verification-for-US-Canada" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">toll-free verification documentation</a>, current as of September 2026. Review times, fees and carrier rules change, so confirm in your account before deciding. Nothing here is legal advice.
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