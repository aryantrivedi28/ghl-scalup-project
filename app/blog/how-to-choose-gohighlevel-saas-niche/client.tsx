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
  AlertTriangle,
  Lightbulb,
  FileText,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Shield,
  BarChart3,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function HowToChooseGHLSAASNicheClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'how-to-choose',
      'why-niche-matters',
      'good-fit',
      'framework',
      'common-niches',
      'underserved',
      'validate',
      'already-have-niche',
      'understand-market',
      'mistakes',
      'finalize',
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

      // Show floating Project Help card after scrolling past hero section
      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
      q: "How do I choose a niche for a GoHighLevel SaaS business?",
      a: "Find a specific type of business that relies on leads, calls, and appointments, can afford $100 to $500+ per month for software, exists in large numbers, and that you can reach. Score candidate niches on problem intensity, frequency, paying capacity, market size, saturation, retention, and your own proximity, then validate the best one by searching for it, checking competitors, looking for active ads, and talking to five to ten real businesses before committing."
    },
    {
      q: "What are the best niches for a GoHighLevel SaaS business?",
      a: "The most reliable niches are lead-driven local service businesses: home services (HVAC, plumbing, roofing, solar), medical aesthetics (med spas, cosmetic dentistry, dermatology), real estate and mortgage, legal services, and fitness and wellness. They work because their daily problems, missed calls, slow follow-up, and no-shows, are exactly what GoHighLevel solves, and their customer values are high enough to afford software."
    },
    {
      q: "Do I need to pick a niche, or can I serve everyone?",
      a: "You should pick a niche. Serving 'everyone' makes you sound like every other GoHighLevel agency and forces you to compete on price. A specific niche lets you speak the industry's language, reuse one snapshot for every client, and market more cheaply. Focus is the single biggest advantage a new GoHighLevel SaaS business has."
    },
    {
      q: "How do I know if my niche is the right one?",
      a: "Score it on the seven-factor framework and check for green flags (specific, high customer value, pain matches GoHighLevel, many businesses, some existing competition, you know the industry) versus red flags (too broad, low value, too few businesses, saturated, chosen only because it was called 'untapped'). If it is close but imperfect, narrow it rather than abandoning it."
    },
    {
      q: "Is it better to pick a popular niche or an underserved one?",
      a: "Popular niches have proven demand but more competition; underserved niches have less competition but must still pass the paying-capacity and market-size checks. A strong middle path is a sub-niche of a popular vertical, for example 'orthodontists' instead of 'dentists', which keeps proven demand while reducing direct competition."
    },
    {
      q: "How many businesses does a niche need to have?",
      a: "Enough that you can sign many clients without running out, generally tens of thousands nationally rather than a few hundred. A niche where large numbers of businesses exist and most have not modernised their marketing is easier to enter than a tiny niche where a handful of agencies already compete."
    },
    {
      q: "Can I run a GoHighLevel SaaS business in a niche if I am not technical?",
      a: "Yes. Choosing and understanding a niche is research and conversation, not a technical task. The technical build, the snapshot and automations for that niche, can be done by you over time or handled by a virtual assistant, contractor, or implementation partner while you focus on clients and positioning."
    },
    {
      q: "What if I choose the wrong niche?",
      a: "You can change niches, but do not do it on a whim. Most 'wrong niche' feelings are actually a niche that is too broad and needs narrowing, not abandoning. Commit to a validated niche for at least several months before judging it, since niche-hopping, not the niche itself, is a leading reason GoHighLevel SaaS businesses fail."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'how-to-choose', title: '1. How Do You Choose a Niche for a GoHighLevel SaaS Business?' },
    { id: 'why-niche-matters', title: '2. Why Your Niche Matters More Than the Software' },
    { id: 'good-fit', title: '3. What Makes a Niche a Good Fit for GoHighLevel Specifically' },
    { id: 'framework', title: '4. The 7-Factor Framework for Evaluating Any GoHighLevel SaaS Niche' },
    { id: 'common-niches', title: '5. The Most Common GoHighLevel SaaS Niches (and Why They Work)' },
    { id: 'underserved', title: '6. Underserved and Emerging Niches Worth Considering' },
    { id: 'validate', title: '7. How to Validate a Niche Before You Commit' },
    { id: 'already-have-niche', title: '8. You Already Have a Niche in Mind: Is It the Right One?' },
    { id: 'understand-market', title: '9. How to Understand the Market for Your Niche' },
    { id: 'mistakes', title: '10. Common Niche-Selection Mistakes to Avoid' },
    { id: 'finalize', title: '11. How to Finalize Your Decision' },
    { id: 'faq', title: '12. Frequently Asked Questions' }
  ];

  const frameworkFactors = [
    { factor: '1. Problem intensity', question: 'How painful is their lead/follow-up/booking problem?', why: 'Painful problems get paid for; mild ones do not' },
    { factor: '2. Frequency', question: 'Does the problem happen daily or weekly, not once a year?', why: 'Frequent pain means the software is used constantly and valued' },
    { factor: '3. Paying capacity', question: 'Can they comfortably pay $100 to $500+/month?', why: 'High customer value = high software price tolerance' },
    { factor: '4. Market size / density', question: 'Are there tens of thousands of them, not a few hundred?', why: 'You need enough businesses to find and sign many clients' },
    { factor: '5. Saturation', question: 'How many agencies already target them specifically?', why: 'You want density without a crowd of direct competitors' },
    { factor: '6. Retention potential', question: 'Will they stay subscribed for years, not months?', why: 'Recurring revenue only works if clients do not churn fast' },
    { factor: '7. Your proximity', question: 'Do you know this industry or can you reach it?', why: 'Your first clients usually come from what you know or who you know' }
  ];

  const commonNiches = [
    {
      category: 'Home services',
      examples: 'HVAC, plumbing, roofing, solar, electrical, pest control, cleaning, landscaping',
      why: 'These businesses live and die on inbound calls and fast response. A missed call is a lost job, jobs are worth hundreds to thousands, and they rarely run modern follow-up systems.'
    },
    {
      category: 'Medical aesthetics and elective health',
      examples: 'Med spas, cosmetic dentistry, dermatology, cosmetic surgery, weight-loss clinics',
      why: 'High treatment values, appointment-driven, and heavily reliant on reviews and rebooking. No-shows cost them real money.'
    },
    {
      category: 'Real estate and mortgage',
      examples: 'Real estate agents, mortgage brokers, property managers',
      why: 'Lead-heavy, speed-to-lead is everything, and the value of a single closed deal is large, so software cost is trivial by comparison.'
    },
    {
      category: 'Legal services',
      examples: 'Personal injury, family law, immigration, criminal defence',
      why: 'Intake speed and follow-up directly determine case volume, and case values are high. Note that some legal niches carry advertising and compliance rules worth understanding first.'
    },
    {
      category: 'Fitness, wellness, and services',
      examples: 'Gyms, boutique studios, personal trainers, coaches, salons',
      why: 'Membership and rebooking models mean ongoing value from the software and good retention.'
    }
  ];

  const underservedNiches = [
    'Sub-niches of popular verticals — instead of "dentists", target "orthodontists" or "paediatric dental"',
    'Local B2B services — commercial cleaning, equipment rental, security installers',
    'Specialised health and wellness — physiotherapy, fertility clinics, mental-health practices, veterinary clinics',
    'Emerging and niche trades — EV-charger installers, solar maintenance'
  ];

  const greenFlags = [
    'You can describe your ideal client in one specific sentence.',
    'Their customers are worth enough that $100 to $500/month is easy for them to justify.',
    'Their core pain (calls, follow-up, bookings) is exactly what GoHighLevel solves.',
    'There are many of them, and a few agencies already serve them (proof of demand).',
    'You have some connection to or knowledge of the industry.'
  ];

  const redFlags = [
    'Your niche is really "all small businesses" in disguise, too broad to market to.',
    'The customer value is low, so paying for software is a hard sell.',
    'There are only a few hundred such businesses in your reachable area.',
    'Dozens of established agencies already compete there on price.',
    'You picked it only because a video called it "untapped", with no other reason.'
  ];

  const mistakes = [
    'Staying too broad. "Small businesses" is not a niche.',
    'Niche-hopping. Switching every few weeks guarantees you never build momentum.',
    'Chasing "untapped" novelty. No competition often means no proven demand.',
    'Ignoring paying capacity. A niche with strong pain but low customer value is a hard business.',
    'Picking on passion alone. Interest does not replace demand and reachability.',
    'Skipping the conversations. Choosing a niche without talking to a single business in it is the most expensive shortcut.'
  ];

  const validationChecks = [
    { check: 'Search for it', desc: 'Type the niche plus words like "marketing", "software", or "CRM" into Google and a keyword tool.' },
    { check: 'Look at who already serves them', desc: 'Google "software for [niche]" and "[niche] marketing agency".' },
    { check: 'Look for paid advertising', desc: 'If businesses or agencies are actively running ads to this niche, that is strong evidence.' },
    { check: 'Talk to five to ten real businesses', desc: 'Contact businesses in the niche and ask about their biggest problems with getting and keeping customers.' }
  ];

  const finalizeChecklist = [
    'I can describe my ideal client in one specific sentence.',
    'The niche scores well on most of the seven factors, and passes on paying capacity and market size.',
    'I completed the four validation checks, including talking to real businesses.',
    'Their main pain clearly matches what GoHighLevel does.',
    'I have a realistic way to reach my first clients (network, content, or outreach).',
    'I am willing to commit to this niche for at least the next several months.'
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your niche selection.</p>
      <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
          <span className="text-[#1A2236] font-medium">How to Choose a Niche</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Niche Selection</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Choose a Niche for Your GoHighLevel SaaS Business:<br />
            <span className="text-[#F8D000]">The Complete 2026 Guide</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Introductory Paragraphs */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Choosing a niche is the single most important decision you will make when starting a GoHighLevel SaaS business, more important than your pricing, your snapshot, or even the software itself. The right niche makes clients easier to find, easier to close, and easier to keep. The wrong one, or no niche at all, is why most GoHighLevel SaaS businesses stall. This guide gives you a clear framework to choose a niche whether you have no idea where to start, a repeatable way to evaluate any niche, the most common niches that work well with GoHighLevel and why, and a way to sanity-check a niche you have already picked. It is written for both technical and non-technical founders, with concrete examples throughout.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            <strong className="text-white">The Short Answer:</strong> To choose a niche for a GoHighLevel SaaS business, pick a specific type of business that (1) relies on leads, calls, and booked appointments, (2) can comfortably pay $100 to $500+ per month for software, (3) exists in large enough numbers that you can find many of them, and (4) that you personally understand or can reach through your network. Then validate it before committing: search for it, look at who already serves it, and talk to five to ten real businesses in that niche. The most reliable GoHighLevel SaaS niches are lead-driven local service businesses, home services, medical aesthetics, real estate, legal, fitness, and similar, because their daily problems (missed calls, slow follow-up, no-shows) are exactly what GoHighLevel solves. A good niche is specific: not 'small businesses', but 'dental practices' or 'HVAC companies'.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Niche Advice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#framework"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Framework
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
                  <div className="text-xs text-white/50">Niche Strategy Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Choosing Your Niche?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help you validate your niche and build the snapshot, automations, and SaaS setup around it — technical or not.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">The Short Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                To choose a niche for a GoHighLevel SaaS business, pick a specific type of business that relies on leads, calls, and booked appointments, can comfortably pay $100 to $500+ per month for software, exists in large enough numbers that you can find many of them, and that you personally understand or can reach through your network.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Then validate it before committing: search for it, look at who already serves it, and talk to five to ten real businesses in that niche. The most reliable GoHighLevel SaaS niches are lead-driven local service businesses because their daily problems (missed calls, slow follow-up, no-shows) are exactly what GoHighLevel solves. A good niche is specific: not 'small businesses', but 'dental practices' or 'HVAC companies'.
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Niche Advice
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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

            {/* Mobile Project Help Card - visible on mobile only */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* CTA 1 - After TOC (moved to be inside content flow) */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Want help matching a niche to the right GoHighLevel setup?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up helps you choose a niche and builds the snapshot and system around it, whether or not you are technical.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: How to Choose */}
            <h2 id="how-to-choose" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. How Do You Choose a Niche for a GoHighLevel SaaS Business?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">You choose a niche by finding the overlap between three things: a specific type of business with a painful, recurring problem GoHighLevel can solve, an audience that can afford to pay monthly for software, and a group you can actually reach.</strong> That overlap is your niche. Everything else in this guide is about finding and testing that overlap.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most common mistake is starting too broad. 'Small businesses' or 'local businesses' is not a niche, it is everyone, and you cannot market clearly to everyone. A niche is specific enough that you can describe your ideal client in one sentence: 'dental practices with one to three locations', or 'HVAC companies that run five to twenty trucks'. The narrower you go, the easier every other part of the business becomes.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you have no idea where to start, work through Sections 4 and 5: the framework tells you what a good niche looks like, and the common-niches list gives you proven starting points. If you already have a niche in mind, jump to Section 8 to pressure-test it. Either way, do not skip the validation step in Section 7 before you commit money to it.
            </p>

            {/* Section 2: Why Niche Matters */}
            <h2 id="why-niche-matters" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Why Your Niche Matters More Than the Software
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is a capable platform, but the platform is the same for everyone. What separates a GoHighLevel SaaS business that grows from one that stalls is almost always the niche, not the tool. Here is why the niche carries so much weight.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">A niche makes you findable and believable</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When you sell to 'everyone', you sound like every other GoHighLevel agency, and the only thing left to compete on is price. When you sell to a specific niche, you can speak their language, reference their exact problems, and show relevant examples. A dentist is far more likely to trust 'software built for dental practices' than 'all-in-one marketing software'. Specificity builds trust, and trust closes clients.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">A niche makes your GoHighLevel setup reusable</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In a GoHighLevel SaaS business, you build a template of a client account, called a snapshot, that gets copied to each new client. If every client is in a different industry, you need a different setup each time, which does not scale. If every client is in the same niche, you build one excellent snapshot and reuse it for every client. One niche equals one snapshot equals a business that scales.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">A niche lowers your marketing cost</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Marketing to a defined group is cheaper and more effective than marketing to everyone. Your ads, content, and outreach all get sharper and cheaper when you know exactly who you are talking to. This is true whether you are technical or not, focus is a marketing advantage, not a technical one.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE CORE IDEA</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A niche is the intersection of what you do (resell GoHighLevel as software) and who you do it for (a specific industry). The 'who' is the part most people get wrong by leaving it too broad. Getting the 'who' specific is what makes the whole business easier.
              </p>
            </div>

            {/* Section 3: Good Fit */}
            <h2 id="good-fit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Makes a Niche a Good Fit for GoHighLevel Specifically?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not every industry is a natural fit for a GoHighLevel SaaS business. GoHighLevel is strongest at capturing leads, following up fast, booking appointments, and keeping in touch with customers. So the best niches are businesses whose daily pain is exactly those things. Ask whether a niche has these traits.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">They depend on leads and enquiries.</strong> The business grows by getting more customers to call, message, or fill in a form. GoHighLevel captures and follows up on those leads automatically.</li>
              <li><strong className="text-[#1A2236]">They lose money on missed calls.</strong> If a missed call is a lost job, GoHighLevel's instant follow-up and (with AI) call answering directly protects revenue. Home services are a textbook example: a missed call at 6pm is a booked job for a competitor.</li>
              <li><strong className="text-[#1A2236]">They run on appointments.</strong> Businesses that book consultations, viewings, treatments, or service visits benefit from automated booking and reminders that cut no-shows.</li>
              <li><strong className="text-[#1A2236]">They have repeat or ongoing customers.</strong> Recurring relationships mean recurring value from the software, which means clients stay subscribed longer.</li>
              <li><strong className="text-[#1A2236]">They can afford software.</strong> The customer's own transaction value is high enough that paying $100 to $500 per month for a system that brings more customers is an easy decision.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A quick example of the difference. A med spa charges hundreds or thousands per client, lives on booked appointments, and loses money on no-shows, an excellent GoHighLevel fit. A business selling one-off low-value items with no appointments and no follow-up need is a weak fit, no matter how many of them exist. Match the niche to what GoHighLevel is actually good at.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A plain-language look at what GoHighLevel does best: <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete 2026 Guide →</Link>
              </p>
            </div>

            {/* CTA Button 3: After Section 3 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Not sure if your niche idea fits GoHighLevel?</span> Let our team help you evaluate it.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Niche Evaluation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 4: Framework */}
            <h2 id="framework" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. The 7-Factor Framework for Evaluating Any GoHighLevel SaaS Niche
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the core tool of this guide. Instead of guessing, score any niche against these seven factors from 1 (poor) to 5 (excellent). It works for a niche you already have in mind and for comparing several options side by side. Add the scores; a niche scoring well across most factors is a strong candidate.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">The question to ask</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {frameworkFactors.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.question}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">How to read your score.</strong> A niche does not need a perfect score. It needs to be strong on the factors that matter most to you right now. If you are brand new with no budget, factor 7 (your proximity) and factor 4 (market size) matter most, because you need to reach clients cheaply. If you have money to spend on ads, factor 3 (paying capacity) and factor 6 (retention) matter more, because you need the economics to work. Use the framework to make the decision visible, not to chase a perfect number.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#5C6880]" />
                <span className="text-sm font-bold text-[#5C6880]">INFOGRAPHIC PLACEHOLDER</span>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong>The 7-Factor Niche Scorecard</strong>
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Suggested visual: a scorecard/radar chart with the 7 factors, showing one example niche scored 1-5 on each, with the total
              </p>
            </div>

            {/* Section 5: Common Niches */}
            <h2 id="common-niches" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. The Most Common GoHighLevel SaaS Niches (and Why They Work)
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you have no niche in mind yet, start here. These are the niches that repeatedly work for GoHighLevel SaaS businesses, and, importantly, why they work, so you can recognise the pattern rather than just copy a list. They are grouped by type.
            </p>

            <div className="space-y-4 mb-6">
              {commonNiches.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-1">{item.category}</h3>
                  <p className="text-sm text-[#5C6880] mb-2"><strong className="text-[#1A2236]">Examples:</strong> {item.examples}</p>
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Why it works:</strong> {item.why}</p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Other consistently workable niches:</strong> Insurance agencies, automotive (dealerships, repair, detailing), restaurants and food service, financial advisors, and franchises all appear repeatedly as workable GoHighLevel niches for the same underlying reasons: leads, appointments, repeat business, and enough transaction value to justify software.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE PATTERN TO NOTICE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Every strong niche above shares the same DNA: lead-driven, appointment-based or call-based, high enough customer value to afford software, and many businesses that have not modernised. When you evaluate any niche, including one not on this list, look for that same DNA rather than assuming you must pick from a list.
              </p>
            </div>

            {/* Section 6: Underserved */}
            <h2 id="underserved" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Underserved and Emerging Niches Worth Considering
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The popular niches work, but they also attract the most competition. If you want less competition, look for niches with the same underlying DNA but fewer agencies targeting them. The trade-off is that smaller or newer niches can be harder to find in large numbers, so weigh market size (framework factor 4) carefully.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {underservedNiches.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">A WORD OF CAUTION ON 'WEIRD' NICHES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Some lists promote very unusual niches purely because they have no competition. No competition can also mean no proven demand or no ability to pay. Novelty is not a strategy. Apply the same seven-factor framework to an underserved niche that you would to a popular one, especially paying capacity and market size.
              </p>
            </div>

            {/* CTA Button 4: After Underserved */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Found a niche but not sure if it's too small?</p>
              <p className="text-sm text-white/80 mb-4">We'll help you evaluate market size and competition for your niche idea.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get Niche Analysis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 7: Validate */}
            <h2 id="validate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. How to Validate a Niche Before You Commit
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Never commit real money to a niche on a hunch. Validation is a few hours of checking that saves you months of building the wrong thing. None of this requires technical skill, it is research and conversations. Do these four checks.
            </p>

            <div className="space-y-3 mb-4">
              {validationChecks.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-1">{item.check}</h3>
                  <p className="text-sm text-[#5C6880]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHAT GOOD VALIDATION LOOKS LIKE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                You have validated a niche when you can answer yes to these: there are many of these businesses, some are already paying for tools or ads, their pains match what GoHighLevel does, and at least a few told you directly that these problems cost them money. If you cannot answer yes, keep researching before you spend.
              </p>
            </div>

            {/* CTA 2 - After Validation */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Not sure how to read what your validation is telling you?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up reviews your niche research with you and gives an honest read before you invest in the build.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 8: Already Have a Niche */}
            <h2 id="already-have-niche" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. You Already Have a Niche in Mind: Is It the Right One?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you have already picked a niche and you are second-guessing it, this section is for you. Do not switch niches on a feeling, run your niche through a structured check instead. Score it on the seven-factor framework from Section 4, then look for the specific green and red flags below.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Green flags (signs your niche is a good choice)</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {greenFlags.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Red flags (signs to reconsider or narrow)</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {redFlags.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What to do if it is close but not perfect</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most niches are not perfect, and that is fine. If your niche scores well on most factors but weak on one, you often do not need to abandon it, you need to narrow it. If 'dentists' feels too broad and competitive, 'dental practices with multiple locations' or 'cosmetic dentists' may fix both problems at once. Narrowing usually beats switching. Only abandon a niche if it fails on the non-negotiables: paying capacity, and enough businesses to reach.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE DECISION RULE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Do not niche-hop. Switching niches every few weeks is one of the most common reasons GoHighLevel SaaS businesses fail, because you never build momentum, authority, or a reusable system in any one of them. If your niche passes the framework and validation, commit to it for several months before judging it. A decent niche you commit to beats a perfect niche you abandon.
              </p>
            </div>

            {/* Section 9: Understand Market */}
            <h2 id="understand-market" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. How to Understand the Market for Your Niche
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choosing a niche is step one. Understanding its market is what lets you actually reach and sign clients. Here is how to build a real picture of your niche's market, without expensive research tools.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Estimate the size and density</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Roughly how many of these businesses exist in the area you can serve? You can estimate from Google Maps, industry directories, and simple searches. You are checking framework factor 4: enough businesses that you can sign many clients without running out. 'Density without saturation', many businesses, not too many competitors, is the goal.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Learn where they gather and what they read</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every niche has places its owners congregate: specific Facebook groups, trade associations, industry publications, local events, subreddits. Finding these tells you exactly where to market and how these owners talk about their problems, which sharpens your messaging.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Find out what they already pay for</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If a niche already pays for booking software, review tools, or a CRM, that is excellent news, it proves they will pay for software and tells you exactly what to replace or improve. A niche already spending money is easier than one you must convince to spend for the first time.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Understand their language and their busy seasons</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Learn the words the industry uses, the outcomes they care about, and their seasonal rhythms (a tax firm in spring, a landscaper in summer). Speaking their language and timing your outreach makes you look like an insider rather than a generic vendor. This is where your proximity (framework factor 7) pays off.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#5C6880]" />
                <span className="text-sm font-bold text-[#5C6880]">INFOGRAPHIC PLACEHOLDER</span>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong>Market Map for a Niche</strong>
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Suggested visual: a simple 'market map' template, size/density, where they gather, what they pay for, their language/seasons, that a reader can fill in for their own niche
              </p>
            </div>

            {/* CTA Button 5: After Market Understanding */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">📊 Want help researching your niche's market?</p>
              <p className="text-sm text-white/80 mb-4">We'll help you estimate market size, find where they gather, and understand their language.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get Market Research
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 10: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. Common Niche-Selection Mistakes to Avoid
            </h2>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {mistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section 11: Finalize */}
            <h2 id="finalize" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              11. How to Finalize Your Decision
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once you have a niche that passes the framework and validation, finalise it with this short checklist. If you can tick all of these, stop researching and start building.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {finalizeChecklist.map((item, idx) => (
                <li key={idx}><CheckCircle2 className="inline w-4 h-4 text-[#25C97D] mr-2" />{item}</li>
              ))}
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If every box is ticked, you have done more niche diligence than most people who start a GoHighLevel SaaS business. The next step is to build one excellent snapshot for that niche and start reaching out. If a box is not ticked, you now know exactly what to fix before you commit.
            </p>

            {/* CTA Button 6: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚠️ Don't make costly niche-selection mistakes.</p>
              <p className="text-sm text-white/80 mb-4">Get a free, no-obligation niche assessment from experts who've built 200+ GHL systems.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Shield className="w-4 h-4" />
                Get a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 12: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              12. Frequently Asked Questions
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

            {/* CTA Button 7: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Choosing Your Niche?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our niche strategy specialists directly. We've helped 200+ businesses choose and build for their niche.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Related Reading */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Reading</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/is-gohighlevel-saas-business-legit" className="text-sm text-[#0E9BF0] hover:underline">Is a GoHighLevel SaaS Business Legit? An Honest 2026 Answer →</Link>
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup: The Complete Beginner-Friendly Guide →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to choose your niche and build the system behind it?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps you validate your niche and builds the snapshot, automations, and SaaS setup around it, technical or not.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book a Free Strategy Call
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel implementation specialists · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up helps businesses and agencies implement GoHighLevel CRM, automation, and SaaS systems. Our approach focuses on the implementation behind the platform: niche strategy, snapshot builds, SaaS Mode setup, workflow automation, and ongoing optimization.
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