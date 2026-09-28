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
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
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

export default function A2PTrustScoreMPSClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const sections = [
      'what-is-trust-score',
      'who-gets-trust-score',
      'what-is-mps',
      'how-mps-is-set',
      'current-mps-tables',
      'trust-score-vs-mps-vs-daily-limits',
      'do-more-numbers-increase-mps',
      'sms-vs-mms',
      'send-faster-than-mps',
      'higher-trust-score-deliverability',
      'improve-appeal-trust-score',
      'trust-score-missing',
      'where-to-check-status',
      'scope',
      'worked-example',
      'decision-framework',
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
        if (rect.top <= 150) {
          currentSection = id;
        } else {
          break;
        }
      }
      setActiveId(currentSection);
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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const faqs = [
    {
      q: "What is a good A2P Trust Score?",
      a: "In HighLevel's tables the top tier is 75 to 100, which carries the highest documented throughput. No source defines a score as good in a delivery sense."
    },
    {
      q: "Does every A2P Brand get a Trust Score?",
      a: "No. Sole Proprietor and Low Volume Standard Brands do not go through secondary vetting."
    },
    {
      q: "Does Trust Score affect MPS?",
      a: "For Standard Brands, yes. A higher score qualifies for higher throughput, subject to Campaign type and carrier rules."
    },
    {
      q: "What is the MPS for a Trust Score of 75?",
      a: "Up to 225 MPS toward AT&T, T-Mobile and Verizon combined, 75 to each, as a maximum in HighLevel's tables. A score of 50 to 74 is up to 120, and 1 to 49 is 12."
    },
    {
      q: "Does Campaign type affect MPS?",
      a: "Yes. A Low Volume Mixed Campaign is fixed at 3.75 MPS regardless of score."
    },
    {
      q: "Is MPS per number or per Campaign?",
      a: "Generally per Campaign, shared across its numbers and carriers, with 1 MPS per number toward small carriers."
    },
    {
      q: "What is the difference between MPS and daily message limits?",
      a: "MPS is a speed limit. A daily limit caps volume toward a carrier over a day."
    },
    {
      q: "Does a high Trust Score guarantee delivery?",
      a: "No. Delivery depends on consent, content, filtering and recipient status."
    },
    {
      q: "Can I appeal a Trust Score?",
      a: "HighLevel says it does not change scores, and I found no formal appeal process in its documentation. Contact support for guidance on causes."
    },
    {
      q: "Why is my Trust Score unavailable?",
      a: "Secondary vetting may still be running, which HighLevel says can take up to 7 business days."
    },
    {
      q: "Does Trust Score apply to Toll Free or Canadian messaging?",
      a: "This guide covers US 10DLC only. Toll Free uses a separate model, and Canada has its own rules."
    },
    {
      q: "Why are messages delayed when my MPS is high?",
      a: "Check for an account level rate limit, segment counts higher than expected, and carrier or daily cap issues. Each is separate from your Campaign MPS."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-trust-score', title: 'What Is an A2P Trust Score?' },
    { id: 'who-gets-trust-score', title: 'Who Gets a Trust Score?' },
    { id: 'what-is-mps', title: 'What Is MPS, and What Is a Message Segment?' },
    { id: 'how-mps-is-set', title: 'How Trust Score, Brand Type and Campaign Type Set Your MPS' },
    { id: 'current-mps-tables', title: 'Current A2P 10DLC MPS Tables in HighLevel' },
    { id: 'trust-score-vs-mps-vs-daily-limits', title: 'Trust Score vs MPS vs Daily Carrier Limits' },
    { id: 'do-more-numbers-increase-mps', title: 'Do More Phone Numbers Increase MPS?' },
    { id: 'sms-vs-mms', title: 'SMS vs MMS Throughput' },
    { id: 'send-faster-than-mps', title: 'What Happens If You Send Faster Than Your MPS?' },
    { id: 'higher-trust-score-deliverability', title: 'Does a Higher Trust Score Mean Better Deliverability?' },
    { id: 'improve-appeal-trust-score', title: 'Can You Improve or Appeal a Trust Score?' },
    { id: 'trust-score-missing', title: 'What If Your Trust Score Is Missing or Unavailable?' },
    { id: 'where-to-check-status', title: 'Where to Check Your A2P Status in HighLevel' },
    { id: 'scope', title: 'Scope: Toll Free, Canada and Other Routes' },
    { id: 'worked-example', title: 'Worked Example: A 50,000 Segment Send' },
    { id: 'decision-framework', title: 'A Decision Framework for Diagnosing Throughput' },
    { id: 'common-mistakes', title: 'Common Trust Score and MPS Mistakes' },
    { id: 'checklist', title: 'Trust Score and MPS Checklist' },
    { id: 'faq', title: 'A2P Trust Score and MPS FAQ' }
  ];

  const brandTypeData = [
    { brandType: 'Standard Brand', trustScore: 'Yes', description: 'Goes through secondary vetting. Score of 0 to 100. Throughput depends on Campaign type and score' },
    { brandType: 'Low Volume Standard Brand', trustScore: 'No', description: 'Skips secondary vetting, so it is treated as score 0 in the throughput tables, with fixed lower throughput' },
    { brandType: 'Sole Proprietor Brand', trustScore: 'No', description: 'No Trust Score. Fixed throughput limits for lower volume messaging' }
  ];

  const standardMpsData = [
    { trustScore: '75 to 100', totalMps: '225', att: '75', tmobile: '75', verizon: '75' },
    { trustScore: '50 to 74', totalMps: '120', att: '40', tmobile: '40', verizon: '40' },
    { trustScore: '1 to 49', totalMps: '12', att: '4', tmobile: '4', verizon: '4' },
    { trustScore: '0 / Low Volume Standard Brand', totalMps: '12', att: '4', tmobile: '4', verizon: '4' },
    { trustScore: 'Low Volume Mixed Campaign, any score', totalMps: '3.75', att: '1.25', tmobile: '1.25', verizon: '1.25' }
  ];

  const tmobileDailyLimits = [
    { brandOrScore: '75 to 100', dailyLimit: '200,000', notes: 'Higher cap needs T-Mobile Special Business Review' },
    { brandOrScore: '50 to 74', dailyLimit: '40,000', notes: '' },
    { brandOrScore: '25 to 49', dailyLimit: '10,000', notes: '' },
    { brandOrScore: '1 to 24', dailyLimit: '2,000', notes: '' },
    { brandOrScore: 'Low Volume Standard Brand', dailyLimit: '2,000', notes: '200,000 for Russell 3000 companies' },
    { brandOrScore: 'Sole Proprietor', dailyLimit: '1,000', notes: '' }
  ];

  const failureModes = [
    { problem: 'Queue delay', whatItIs: 'Segments waiting because you exceeded MPS or an account limit', whereToLook: 'Sending speed and pacing' },
    { problem: 'Daily cap reached', whatItIs: 'T-Mobile Brand level limit hit', whereToLook: 'Daily T-Mobile volume across all Brands on the EIN' },
    { problem: 'Carrier filtering or failure', whatItIs: 'The carrier blocked or filtered the message', whereToLook: 'Content, consent, opt outs. See A2P error codes' }
  ];

  const trustScoreStates = [
    { state: 'Brand pending', meaning: 'Registration still under review', action: 'Wait' },
    { state: 'Trust Score unavailable', meaning: 'Secondary vetting has not returned a score yet', action: 'Wait, then contact support' },
    { state: 'Brand failed', meaning: 'Identity could not be verified', action: 'See Brand Rejected guide' },
    { state: 'Campaign rejected', meaning: 'The messaging program failed review', action: 'See Campaign Rejected guide' },
    { state: 'Approved but not sending', meaning: 'SMS Number may not be linked to the Campaign', action: 'Check A2P Verified on the number' }
  ];

  const workedExampleData = [
    { carrier: 'T-Mobile', segments: '20,000', mps: '40', minTime: '500 sec, about 8.3 min', dailyCap: '40,000 (Twilio)' },
    { carrier: 'AT&T', segments: '17,500', mps: '40', minTime: '438 sec, about 7.3 min', dailyCap: 'n/a here' },
    { carrier: 'Verizon', segments: '12,500', mps: '40', minTime: '313 sec, about 5.2 min', dailyCap: 'n/a here' }
  ];

  const decisionFramework = [
    'Identify the Brand type in Trust Center.',
    'Check whether a Trust Score applies. Only Standard Brands have one.',
    'Identify the Campaign type. A Low Volume Mixed Campaign overrides the score.',
    'Find the matching row in the tables above.',
    'Check the carrier split, then US Cellular and small carrier handling.',
    'Check for an account level rate limit that caps your total.',
    'Count segments, not messages.',
    'Check the T-Mobile daily cap for the EIN, across every platform.',
    'Watch real behavior: queue delay, daily cap errors, and filtering are different problems.'
  ];

  const commonMistakes = [
    'Assuming every Brand has a Trust Score',
    'Treating a higher score as a delivery guarantee',
    'Reading MPS as a daily volume',
    'Counting messages instead of segments',
    'Adding numbers to raise MPS',
    'Choosing a use case for throughput instead of accuracy',
    'Forgetting the T-Mobile cap is shared across every platform on the EIN',
    'Sending a large list through a Low Volume Mixed Campaign'
  ];

  const checklistItems = [
    'Brand type confirmed',
    'Trust Score status known, or confirmed as not applicable',
    'Campaign type and matching throughput row identified',
    'Carrier split estimated',
    'Segments per message counted',
    'Account level limits checked',
    'T-Mobile daily cap checked',
    'Sends paced below approved MPS',
    'Consent and opt outs reviewed, because delivery is separate from throughput'
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
          <span className="text-[#1A2236] font-medium">A2P Trust Score and MPS</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Trust Score</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">MPS</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Trust Score and MPS Explained:<br />
            <span className="text-[#F8D000]">GoHighLevel 10DLC Throughput Guide</span>
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
              A <strong className="text-white">Trust Score</strong> is a 0 to 100 reputation score given to a Standard Brand during secondary vetting. <strong className="text-white">MPS</strong> is message segments per second, the speed at which you can send SMS through an approved Campaign. HighLevel says US 10DLC throughput depends on three things: your Brand type, your Campaign type and, for Standard Brands, your Trust Score. A Standard Brand with a Trust Score of 75 to 100 has an approved maximum of 225 MPS toward AT&T, T-Mobile and Verizon combined, 75 to each. Sole Proprietor and Low Volume Standard Brands get no Trust Score and fixed, lower throughput.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Throughput is not deliverability, and MPS is not a daily limit. A higher score raises how fast you may send. It does not guarantee messages reach recipients, and T-Mobile applies a separate daily cap. The numbers below come from HighLevel's throughput guidance (updated July 30, 2026) and Twilio's documentation, and they can change, so confirm them before you plan around them.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get A2P Registration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#current-mps-tables"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See MPS Tables
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
              <div className="text-sm font-bold text-white mb-2">A2P Trust Score Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P registration end to end brand, campaign, Trust Score appeals, and rejection troubleshooting.</p>
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

            {/* Section 1: What Is Trust Score */}
            <h2 id="what-is-trust-score" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is an A2P Trust Score?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The Trust Score comes from <strong className="text-[#1A2236]">secondary vetting</strong>, an extra review HighLevel submits for Standard Brands after The Campaign Registry (TCR) completes primary vetting. It uses a reputation algorithm on details about your company and returns a score from 0 to 100. A higher score gives access to higher default throughput and higher message limits toward US carriers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel lists the inputs that can influence it: legal business name accuracy, EIN or Tax ID match, business address consistency, website quality, Privacy Policy and Terms availability, brand footprint, and consistency between what you submit and public business information. HighLevel states that it does not assign or manually change Trust Scores. The algorithm itself belongs to TCR and its vetting vendors, so no source publishes a scoring formula.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For how registration itself works, see <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel</Link>. For the foundation behind all of this, see <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-trust-score-mps-infographic.png"
                  alt="A2P Trust Score and MPS for GoHighLevel: Trust Score tiers, MPS throughput tables, T-Mobile daily limits, and carrier split breakdown"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P Trust Score and MPS for GoHighLevel: Trust Score tiers, MPS throughput tables, T-Mobile daily limits, and carrier split breakdown</span>
              </div>
            </div>

            {/* Section 2: Who Gets a Trust Score */}
            <h2 id="who-gets-trust-score" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Who Gets a Trust Score?
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Brand type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Trust Score?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What HighLevel and Twilio document</th>
                  </tr>
                </thead>
                <tbody>
                  {brandTypeData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.brandType}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.trustScore}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Not every registered Brand has a score. If you are unsure which type you have, check the Brand in your Trust Center, and see the <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">Brand Registration guide</Link> for how the types differ.
            </p>

            {/* Section 3: What Is MPS */}
            <h2 id="what-is-mps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is MPS, and What Is a Message Segment?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              MPS measures <strong className="text-[#1A2236]">message segments</strong> per second, not visible messages. A standard SMS segment holds up to 160 characters in GSM-7 encoding. A longer message, or one with emojis or special characters, can use more than one segment. HighLevel's guide says most short messages count as one segment while longer messages, emojis or special characters may use several.
            </p>
            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">EXAMPLE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A plain text message of 200 characters does not fit in one 160 character segment, so it uses at least two. Sending it to 1,000 contacts means at least 2,000 segments, and MPS counts every one of them.
              </p>
            </div>

            {/* Section 4: How MPS is Set */}
            <h2 id="how-mps-is-set" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Trust Score, Brand Type and Campaign Type Set Your MPS
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Think of it as a chain, and check each step in order:
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Brand type decides which throughput rules apply.',
                'Trust Score, for Standard Brands only, sets the tier.',
                'Campaign type decides which table applies, and Low Volume Mixed overrides the score entirely.',
                'Carrier rules split the total across AT&T, T-Mobile and Verizon, with separate handling for US Cellular and small carriers.',
                'Account level rate limits can cap the total across all your Campaigns.',
                'Actual sending speed is whatever is lowest across those steps, and it says nothing about delivery.'
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#1A2236]">$1</strong>') }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Section 5: Current MPS Tables */}
            <h2 id="current-mps-tables" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Current A2P 10DLC MPS Tables in HighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are the maximum approved SMS throughput values in HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000004527-what-is-message-throughput-mps-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">throughput guide</a>, updated July 30, 2026, and they match HighLevel's <a href="https://help.leadconnectorhq.com/support/solutions/articles/155000004617-message-throughput-mps-and-trust-scores-for-a2p-10dlc-in-the-us" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">help center version</a> updated August 31, 2026. Values are maximums, not guaranteed speeds.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Standard, Mixed and Marketing Campaigns</h3>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Trust Score or Campaign</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Total MPS, major networks</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">AT&amp;T</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">T-Mobile</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Verizon</th>
                  </tr>
                </thead>
                <tbody>
                  {standardMpsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.trustScore}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.totalMps}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.att}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tmobile}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.verizon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Messages to US Cellular follow your major network throughput, up to 8 MPS. Messages to other minor US carriers are 1 MPS per phone number.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Sole Proprietor Brands</h3>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"></th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Total MPS, major networks</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">AT&amp;T</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">T-Mobile</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Verizon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Sole Proprietor</td>
                    <td className="py-3 px-3 text-[#5C6880]">2.25</td>
                    <td className="py-3 px-3 text-[#5C6880]">0.25</td>
                    <td className="py-3 px-3 text-[#5C6880]">1 per number</td>
                    <td className="py-3 px-3 text-[#5C6880]">1 per number</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sole Proprietor Brands have no Trust Score and use fixed limits. HighLevel's help center adds that they are limited to one Campaign and one phone number per Campaign.
            </p>
            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">ONE CONFLICT WORTH KNOWING ABOUT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                HighLevel's text says specific ("declared") use cases may get higher MPS for the same score than Mixed or Marketing. In the current tables, the Standard and Mixed and Marketing rows are identical, and the only documented difference is the Low Volume Mixed row. Do not pick a use case to chase throughput. HighLevel itself says to choose the accurate use case, not the highest throughput option. How to choose is in <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>.
              </p>
            </div>

            {/* Section 6: Trust Score vs MPS vs Daily Limits */}
            <h2 id="trust-score-vs-mps-vs-daily-limits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Trust Score vs MPS vs Daily Carrier Limits
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"></th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it controls</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Key point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Trust Score</td>
                    <td className="py-3 px-3 text-[#5C6880]">A vetting score that sets your throughput tier and T-Mobile daily cap</td>
                    <td className="py-3 px-3 text-[#5C6880]">Standard Brands only. Not a delivery rating</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">MPS</td>
                    <td className="py-3 px-3 text-[#5C6880]">How fast segments may be sent</td>
                    <td className="py-3 px-3 text-[#5C6880]">A rate, not a volume. 225 MPS does not mean 225 segments every second all day</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Daily carrier limit</td>
                    <td className="py-3 px-3 text-[#5C6880]">How many segments a Brand may send toward one carrier per day</td>
                    <td className="py-3 px-3 text-[#5C6880]">T-Mobile applies a brand level daily cap based on Trust Score</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Twilio's documentation gives these T-Mobile daily limits by Trust Score, counted in outbound SMS segments plus MMS:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Brand or Trust Score</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">T-Mobile daily limit</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {tmobileDailyLimits.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.brandOrScore}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.dailyLimit}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Per Twilio, the cap applies at the EIN level, is shared across every Brand and every platform registered under that EIN, and resets at midnight Pacific. Exceeding it leaves messages undelivered with Twilio error 30023. These figures come from Twilio, the underlying provider, so verify current values before relying on them. Separately, HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000005200-a2p-10dlc-messaging-fees-registration-monthly-and-carrier-costs" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">fee reference</a> lists a daily segment allowance for each registration tier, 3,000 for Sole Proprietor, 6,000 for Low Volume Standard and 600,000 for High Volume Standard, and a Low Volume Mixed Campaign supports up to 2,000 segments a day to T-Mobile. Treat all of these as different limits that can each bind.
            </p>

            {/* Section 7: Do More Numbers Increase MPS */}
            <h2 id="do-more-numbers-increase-mps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Do More Phone Numbers Increase MPS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Not automatically. HighLevel says throughput is generally assigned at the Campaign level. Twilio's documentation adds that the Campaign's MPS is shared across all US and Canada long code numbers on the Campaign and across all carriers, so splitting traffic over more numbers does not raise the ceiling. The documented exceptions are small carriers, which get 1 MPS per phone number, and Sole Proprietor Campaigns, which get 1 MPS per number to T-Mobile and Verizon but are limited to one number. Number rental is a separate cost covered in the <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">fees guide</Link>.
            </p>

            {/* Section 8: SMS vs MMS Throughput */}
            <h2 id="sms-vs-mms" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              SMS vs MMS Throughput
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel says MMS may be handled differently because media size, carrier handling and formatting can affect processing. I found no published MMS MPS values in the current HighLevel documents, so this guide does not give any and you should not assume MMS matches SMS. MMS does count toward T-Mobile's daily cap alongside SMS segments.
            </p>

            {/* Section 9: What Happens If You Send Faster Than MPS */}
            <h2 id="send-faster-than-mps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens If You Send Faster Than Your MPS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              According to HighLevel, messages above your allowed rate may queue. HighLevel's guidance and Twilio's both describe the account level version: if an account limit is 100 MPS and three Campaigns are each approved for 75 MPS, the account still tops out at 100 MPS combined, and each segment over that rate waits in a queue. Keep three failure modes apart:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it is</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Where to look</th>
                  </tr>
                </thead>
                <tbody>
                  {failureModes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItIs}</td>
                      <td className="py-3 px-3 text-[#5C6880]">
                        {item.problem === 'Carrier filtering or failure' ? (
                          <>
                            Content, consent, opt outs. See <Link href="/blog/a2p-error-codes-explained" className="text-[#0E9BF0] hover:underline">A2P error codes</Link>.
                          </>
                        ) : item.whereToLook}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 10: Does Higher Trust Score Mean Better Deliverability */}
            <h2 id="higher-trust-score-deliverability" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Does a Higher Trust Score Mean Better Deliverability?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              No. HighLevel is explicit that a higher score does not guarantee delivery, and that delivery also depends on consent, content, filtering, DND, opt outs and recipient status. The score can raise how fast you may send. Whether a message reaches a phone is a separate decision made by carriers using other signals. Consent evidence matters here, and <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt in language and requirements</Link> covers it.
            </p>

            {/* Section 11: Can You Improve or Appeal a Trust Score */}
            <h2 id="improve-appeal-trust-score" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Improve or Appeal a Trust Score?
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">HighLevel does not change scores.</strong> Its guidance says it does not assign or manually change Trust Scores.</li>
              <li><strong className="text-[#1A2236]">Low scores have documented causes.</strong> HighLevel's help center points to data discrepancies, such as an address that differs from your official business registration, and a small brand footprint.</li>
              <li><strong className="text-[#1A2236]">Scores are described as static.</strong> HighLevel's earlier throughput guidance and Twilio's say scores do not change automatically over time.</li>
              <li><strong className="text-[#1A2236]">Support can guide you.</strong> HighLevel says it will try to offer guidance on possible causes if you receive a low score.</li>
              <li><strong className="text-[#1A2236]">I found no formal Trust Score appeal process in HighLevel's documentation.</strong> Some other messaging platforms publish their own appeal terms, including fees, but those are theirs, not HighLevel's.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The practical lesson is to get the identity data right before you register. Correcting a failed Brand is covered in <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Brand Rejected in GoHighLevel</Link>.
            </p>

            {/* Section 12: What If Trust Score Is Missing */}
            <h2 id="trust-score-missing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What If Your Trust Score Is Missing or Unavailable?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's Brand approval guidance covers the message "We are unable to retrieve your TCR Trust Score." It says the secondary vetting score is delayed while the vetting review completes, which can take up to 7 business days, and to contact support if the Brand is still not approved after that. Do not confuse it with other states:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">State</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Meaning</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Go to</th>
                  </tr>
                </thead>
                <tbody>
                  {trustScoreStates.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.state}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                      <td className="py-3 px-3 text-[#5C6880]">
                        {item.state === 'Brand failed' ? (
                          <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">Brand Rejected guide</Link>
                        ) : item.state === 'Campaign rejected' ? (
                          <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">Campaign Rejected guide</Link>
                        ) : item.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 13: Where to Check A2P Status */}
            <h2 id="where-to-check-status" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where to Check Your A2P Status in HighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's guide says to go to Settings, then Phone System, then Trust Center, review your A2P registration details, and open Brands and Campaigns to check Brand status, Campaign status, use case and any required fixes. The guide does not describe a screen showing your numeric Trust Score, so if you cannot find yours there, ask HighLevel Support rather than guessing.
            </p>

            {/* Section 14: Scope */}
            <h2 id="scope" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Scope: Toll Free, Canada and Other Routes
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Everything here is about US A2P 10DLC long code messaging. Toll Free numbers use a separate verification and throughput model, which HighLevel's help center says gives a US Toll Free number a default of 3 MPS toward US and Canada carriers, with higher throughput available on request. See <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-[#0E9BF0] hover:underline">Toll Free vs A2P 10DLC</Link>. Canadian messaging follows its own rules, covered in <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-[#0E9BF0] hover:underline">A2P 10DLC for Canadian numbers</Link>, and international routes differ again.
            </p>

            {/* Section 15: Worked Example */}
            <h2 id="worked-example" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Worked Example: A 50,000 Segment Send
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Assumptions, not averages:</strong> a Standard Brand with a Trust Score of 60, one Standard Campaign, and 50,000 segments split 40% to T-Mobile, 35% to AT&amp;T and 25% to Verizon.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Carrier</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Segments</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">MPS allowed</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Minimum time</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Daily cap</th>
                  </tr>
                </thead>
                <tbody>
                  {workedExampleData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.carrier}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.segments}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.mps}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.minTime}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.dailyCap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The theoretical minimum is set by the slowest carrier lane, about 8.3 minutes, which is segments divided by MPS. Real sending will be slower if an account limit applies, and it says nothing about delivery. T-Mobile's 40,000 daily cap is not exceeded at 20,000 segments, but the same send to a Low Volume Mixed Campaign would be limited to 1.25 MPS per carrier and up to 2,000 T-Mobile segments a day, which would spread the T-Mobile portion over about ten days. If each message is two segments, the same audience is 25,000 messages, not 50,000.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you build sends like this in workflows, pace them to your approved throughput. Our <Link href="/services/campaign-automation" className="text-[#0E9BF0] hover:underline">Email, SMS and WhatsApp automation service</Link> covers building sending flows around limits like these.
            </p>

            {/* Section 16: Decision Framework */}
            <h2 id="decision-framework" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Decision Framework for Diagnosing Throughput
            </h2>
            <div className="space-y-2 mb-6">
              {decisionFramework.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 17: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Trust Score and MPS Mistakes
            </h2>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {commonMistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section 18: Checklist */}
            <h2 id="checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Trust Score and MPS Checklist
            </h2>
            <div className="space-y-2 mb-6">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#5C6880]">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 19: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              A2P Trust Score and MPS FAQ
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
                <strong className="text-white">Still have questions about A2P Trust Score or MPS?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our A2P specialists directly. We've handled 200+ A2P registrations and fixed every issue in this guide.
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
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-error-codes-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P Error Codes Explained →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Rejected in GoHighLevel →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected in GoHighLevel →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Toll Free vs A2P 10DLC →</Link>
                <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC for Canadian Numbers →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need help with A2P registration or a Trust Score appeal?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up manages A2P registration for agencies and their clients. Brand registration, Trust Score optimisation, campaign submission, rejection troubleshooting, and resubmission end to end.
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
                This guide was checked against HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000004527-what-is-message-throughput-mps-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">MPS and Trust Score guide</a>, its <a href="https://help.leadconnectorhq.com/support/solutions/articles/155000004617-message-throughput-mps-and-trust-scores-for-a2p-10dlc-in-the-us" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">help center throughput article</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000000508-a2p-10dlc-brand-approval-best-practices" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Brand Approval Best Practices</a>, the <a href="https://help.gohighlevel.com/support/solutions/articles/155000005200-a2p-10dlc-messaging-fees-registration-monthly-and-carrier-costs" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">fee reference</a>, and Twilio's <a href="https://help.twilio.com/articles/1260804800549-T-Mobile-daily-message-limits-for-long-code-messaging-with-A2P-10DLC" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">T-Mobile daily limits article</a>, current as of September 2026. Throughput values, daily caps and carrier rules change, so confirm against your Trust Center and provider documentation.
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