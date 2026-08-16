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
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function IsGoHighLevelSAASLegitClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'legit-or-scam',
        'real-company',
        'scam-impression',
        'risk-picture',
        'technical',
        'saturated',
        'real-cost',
        'succeeds-fails',
        'decide',
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
      q: "Is a GoHighLevel SaaS business legit?",
      a: "Yes. It is a legitimate business model built on real software from HighLevel Inc., an established US company founded in 2018 that serves tens of thousands of agencies. Real agencies run GoHighLevel SaaS businesses profitably. It is not a scam. What is not legitimate is the marketing promise that it is fast, easy, or passive, the model works, but only when treated as a real business."
    },
    {
      q: "Is GoHighLevel a scam?",
      a: "No. GoHighLevel is operated by a real, incorporated US software company with named founders, a large workforce, and over 60,000 agency customers. You can start a trial, contact support, cancel, and export your data, none of which is true of a scam. The 'scam' impression comes from aggressive affiliate marketing and exaggerated income claims, not from the software itself."
    },
    {
      q: "Will I lose my investment starting a GoHighLevel SaaS business?",
      a: "You can, but usually not because of the platform. The main platform cost is the $497/month plan. People most often 'lose' money by paying for months without a client-acquisition plan and quitting before getting clients. The risk drops sharply if you choose a niche, plan how you will get your first clients, and prepare onboarding before you start paying for the plan."
    },
    {
      q: "Do I need to be technical to run a GoHighLevel SaaS business?",
      a: "No. There is no coding involved; everything is done through settings and templates. However, there is a genuine learning curve, and you need a well-built template (snapshot) for client accounts. Many non-technical founders focus on sales and clients while a virtual assistant, contractor, or implementation partner handles the technical build."
    },
    {
      q: "Is it too late to start a GoHighLevel SaaS business in 2026?",
      a: "No, but generic positioning is saturated. Competing as a general 'GoHighLevel agency' is hard. Positioning around a specific niche and outcome, for example a booking-and-reviews system for a particular industry, faces far less competition and is still a strong opportunity in 2026."
    },
    {
      q: "How much does it cost to start a GoHighLevel SaaS business?",
      a: "The core platform cost is the SaaS Pro plan at $497/month, which is required to resell GoHighLevel. On top of that are usage costs (SMS, email, phone, AI) that can be re-billed to clients, and optionally the cost of help with the technical build. The platform cost stays fixed as you add clients, which is what makes the margins improve at scale."
    },
    {
      q: "How long before a GoHighLevel SaaS business makes money?",
      a: "Longer than the marketing suggests. Real operators often spend several weeks on setup and offer creation before signing a first client, and it commonly takes months of consistent effort to build a stable client base. You should plan to fund the setup period rather than expecting revenue in the first few weeks."
    },
    {
      q: "Why do so many people say GoHighLevel SaaS does not work?",
      a: "Usually because they expected it to be easy or passive and quit during the slow, effort-heavy early phase, or because they stayed generic and could not stand out. The model works for people who niche down, commit for several months, and focus on client results and retention. It disappoints people expecting fast, effortless income."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'legit-or-scam', title: '1. Is a GoHighLevel SaaS Business Actually Legit, or a Scam?' },
    { id: 'real-company', title: '2. Is GoHighLevel a Real Company You Can Trust?' },
    { id: 'scam-impression', title: '3. Why Does the "Scam" Impression Exist at All?' },
    { id: 'risk-picture', title: '4. Will You Waste Your Investment? The Honest Risk Picture' },
    { id: 'technical', title: '5. Do You Need to Be Technical to Run a GoHighLevel SaaS Business?' },
    { id: 'saturated', title: '6. Is It Too Late, or Too Saturated, to Start in 2026?' },
    { id: 'real-cost', title: '7. What Does a GoHighLevel SaaS Business Really Cost?' },
    { id: 'succeeds-fails', title: '8. Who Succeeds With a GoHighLevel SaaS Business, and Who Fails?' },
    { id: 'decide', title: '9. How to Decide if a GoHighLevel SaaS Business Is Right for You' },
    { id: 'faq', title: '10. Frequently Asked Questions' }
  ];

  const costLayers = [
    { layer: 'Platform plan', what: 'The SaaS Pro plan required to resell GoHighLevel (SaaS Mode)', cost: '$497/month' },
    { layer: 'Usage costs', what: 'Client SMS, email, phone, and AI usage (can be re-billed to clients with markup)', cost: 'Variable; passed to clients' },
    { layer: 'Your time', what: 'Setup, snapshot building, niche and offer work, client acquisition', cost: 'Weeks of work before first revenue' },
    { layer: 'Optional help', what: 'A VA, contractor, or implementation partner for the technical build', cost: 'Varies by provider' }
  ];

  const succeeds = [
    'People who pick one specific niche and commit to it for months, rather than switching constantly.',
    'People who already have a network, or who build a genuine content or outreach strategy, before relying on paid ads.',
    'People who charge a serious price (commonly $197 or more per client) rather than competing on being cheapest.',
    'People who invest in onboarding, so new clients see value in the first week and do not churn.'
  ];

  const fails = [
    'People who expect fast, passive income and quit during the slow first weeks.',
    'People who stay generic and sound like every other GoHighLevel agency.',
    'People who sign the wrong clients, those who are not a fit or want everything done for them, and then absorb heavy churn.',
    'People who hand clients an empty or confusing account and lose them in the first 30 days.'
  ];

  const fitChecks = [
    'You already serve, or can reach, a specific type of business.',
    'You are willing to treat it as a real business for at least 6 to 12 months, not a quick flip.',
    'You can either do the client-getting work or partner with someone who can.',
    'You are comfortable learning the platform, or getting help with the technical build.'
  ];

  const notFitChecks = [
    'You need income within a few weeks and cannot fund the setup period.',
    'You want fully passive income with no sales, onboarding, or support.',
    'You are not willing to niche down and want to serve "everyone."'
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
          <span className="text-[#1A2236] font-medium">Is GoHighLevel SaaS Legit?</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Legitimacy</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Is a GoHighLevel SaaS Business Legit?<br />
            <span className="text-[#F8D000]">An Honest 2026 Answer</span>
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center rounded-full">
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

          {/* Intro Paragraphs */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            A GoHighLevel SaaS business is a legitimate business model, not a scam. It is built on real software from an established company, and real agencies run it profitably. The reason so many people ask whether it is legit is not the software, it is the marketing around it, which often promises fast, passive riches that the reality does not match. This article separates the two: what is genuinely real about a GoHighLevel SaaS business, what is overhyped, what it actually costs and risks, whether you need to be technical, and who tends to succeed versus fail. The goal is to answer the doubts you have before you spend a rupee or a dollar, honestly.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            <strong className="text-white">The Short Answer:</strong> Yes, a GoHighLevel SaaS business is legitimate. GoHighLevel is run by HighLevel Inc., a real US software company founded in 2018 that serves tens of thousands of agencies and over a million downstream business users. "SaaS Mode" is a genuine feature that lets you resell the platform under your own brand. What is not legitimate is the guru promise that it is easy, passive, or fast. The model works, but it is a real business that takes niche focus, client acquisition, onboarding, and support to succeed. If you expect software income without doing the work of running a software business, you will likely lose your investment. If you treat it as a real business, the model is sound.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">The Short Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Yes, a GoHighLevel SaaS business is legitimate.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GoHighLevel is run by HighLevel Inc., a real US software company founded in 2018 that serves tens of thousands of agencies and over a million downstream business users. "SaaS Mode" is a genuine feature that lets you resell the platform under your own brand. What is not legitimate is the guru promise that it is easy, passive, or fast. The model works, but it is a real business that takes niche focus, client acquisition, onboarding, and support to succeed.
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

            {/* CTA 1 - After TOC */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Want a straight answer about your specific situation?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up will tell you honestly whether a GoHighLevel SaaS business fits your goals, before you invest in the build.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Legit or Scam */}
            <h2 id="legit-or-scam" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Is a GoHighLevel SaaS Business Actually Legit, or a Scam?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A GoHighLevel SaaS business is legitimate.</strong> It is not a scam, a pyramid scheme, or an empty promise. It is a real business model in which you resell established software under your own brand and charge clients a recurring monthly fee. The software exists, works, and is used by tens of thousands of businesses. Agencies genuinely run this model profitably.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The confusion comes from a specific place. GoHighLevel has an aggressive affiliate-marketing community that promotes it heavily, often with income screenshots and promises of fast, passive money. That style of marketing makes any product look like a scam, even when the underlying product is real. The marketing is the problem, not the software.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              So the honest framing is this: the GoHighLevel SaaS business model is real, but it is a business, not a lottery ticket. The people who call it a scam are usually reacting to the hype, or they tried it expecting it to be effortless and it was not. Both the "it is a scam" crowd and the "you will be rich in weeks" crowd are wrong. The truth sits in between, and the rest of this article lays it out.
            </p>

            {/* Section 2: Real Company */}
            <h2 id="real-company" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Is GoHighLevel a Real Company You Can Trust?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Yes. GoHighLevel is operated by HighLevel Inc., a legitimate software company based in the United States.</strong> It was founded in 2018 by Shaun Clark, Varun Vairavan, and Robin Alex, and is headquartered in Texas. These are the verifiable signals that separate a real company from a scam:
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A real, named company and founders.</strong> HighLevel Inc. is an incorporated US business with publicly known founders, not an anonymous or offshore operation.</li>
              <li><strong className="text-[#1A2236]">A large workforce.</strong> The company employs a substantial team (widely reported at roughly 2,000 people), which is not something a scam sustains.</li>
              <li><strong className="text-[#1A2236]">A large customer base.</strong> GoHighLevel serves well over 60,000 agency customers and more than a million downstream business users, according to 2026 reporting.</li>
              <li><strong className="text-[#1A2236]">Normal software-company behaviour.</strong> You can start a free trial, talk to support, cancel, and export your data. Scams do not let you do those things.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You do not have to take the marketing's word for any of this. The company's scale, longevity since 2018, and the fact that you can interact with it like any other software vendor are what establish that the platform underneath a GoHighLevel SaaS business is real.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">ONE HONEST CAVEAT ON 'TRUST'</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Legitimate does not mean flawless. GoHighLevel has a real learning curve, and users report occasional support delays and a cancellation process that requires contacting support rather than a one-click button. None of that makes it a scam, but it is worth knowing that 'legit' means 'a real, imperfect software company', not 'a perfect experience'.
              </p>
            </div>

            {/* Section 3: Scam Impression */}
            <h2 id="scam-impression" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Why Does the "Scam" Impression Exist at All?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the platform is real, why do so many people search "is GoHighLevel SaaS a scam" in the first place? Understanding this protects you from the actual risk, which is not the software but the expectations set around it. The impression comes from three specific sources.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Source 1: Aggressive affiliate marketing</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel pays affiliates to promote it, which has created a large community of marketers posting income screenshots and "sell software, get paid forever" content. This volume of hype naturally triggers scepticism. The hype is real; it does not mean the product behind it is fake.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Source 2: Income claims that misrepresent the effort</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Much of the promotional content shows the outcome (recurring revenue) without the input (niche selection, sales, onboarding, support, months of work). When people try it expecting the advertised ease and hit the real effort required, they feel misled, and "I felt misled" often gets expressed online as "it is a scam".
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Source 3: A learning curve and support friction</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is a deep platform with a genuine ramp-up period, and some users report slow support responses or a frustrating cancellation experience. A bad experience with a real product can still leave someone feeling scammed, even though the product is legitimate.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The takeaway: the scam impression is a marketing and expectations problem, not a product problem. If you go in with accurate expectations, the thing that burns most people never touches you.
            </p>

            {/* Section 4: Risk Picture */}
            <h2 id="risk-picture" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Will You Waste Your Investment? The Honest Risk Picture
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the real question behind "is it legit". You are not really asking whether the company exists, you are asking whether you will lose the money and time you put in. Here is the honest picture.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What you are actually risking</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The direct financial risk is smaller than most people assume. The platform cost to run a GoHighLevel SaaS business is the SaaS Pro plan at $497 per month, plus smaller usage costs. You are not investing tens of thousands to build software. The larger investment is your time: the weeks of setup, niche selection, and client acquisition before revenue arrives.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Where people actually lose money</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              People rarely lose money because GoHighLevel failed. They lose it because they paid for the $497 plan, did not get clients, and cancelled a few months later having never built a real offer. The loss is the subscription months spent without a client-acquisition plan, not a scam taking their money.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST TIMELINE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                You do not make money in month one. You spend it. Real operators describe spending several weeks, sometimes around six, on setup, snapshot building, and offer creation before signing a first client. One documented case spent about six weeks before its first client and had early clients churn within 60 to 90 days before tightening its qualification. If you expect a fast return, that timeline can feel discouraging, which is exactly why people quit right before it could have worked.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How to de-risk it</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The risk drops sharply when you do three things before turning on the $497 plan: choose a specific niche you can actually reach, have a realistic plan for getting your first few clients (an existing network or a real content or outreach strategy), and prepare a proper onboarding so early clients do not churn in the first month. The investment is "wasted" mainly when these three are skipped.
            </p>

            {/* Section 5: Technical */}
            <h2 id="technical" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Do You Need to Be Technical to Run a GoHighLevel SaaS Business?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">No, you do not need to be a technical expert or write any code.</strong> A GoHighLevel SaaS business is built entirely through settings, templates, and menus, not programming. That said, "not technical" does not mean "no learning", and being honest about the difference matters.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What is genuinely not required</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You do not need to code, build software, run servers, or have a computer-science background. The white-label setup, billing, and client account creation are handled through GoHighLevel's built-in tools.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What you do need to be willing to learn</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You need to learn the platform well enough to configure it and support clients, and you need to build a solid template (a "snapshot") that new client accounts are created from. This is a learnable skill, not an engineering one, but it takes real hours. The platform has a genuine learning curve.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The realistic path for a non-technical founder</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Many successful operators are strong at sales and positioning and weaker on the technical build. The common solution is to focus your energy on clients and offers while a technical resource, whether a virtual assistant, a contractor, or an implementation partner, handles the snapshot, workflows, and technical onboarding. You direct the business; someone handles the configuration. Being non-technical is a reason to get help with the build, not a reason the model cannot work for you.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If the technical side is your main worry, this is exactly what an implementation partner handles: <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Setup Service →</Link>
              </p>
            </div>

            {/* Section 6: Saturated */}
            <h2 id="saturated" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Is It Too Late, or Too Saturated, to Start in 2026?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">It is not too late, but generic positioning is saturated.</strong> This is the honest nuance. If your plan is to be another undifferentiated "GoHighLevel agency", that space is crowded. If you position around a specific niche and a specific outcome, the opportunity is still very open.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The reason is simple. Thousands of people sell "CRM and marketing automation for businesses", so competing there is hard. Far fewer people sell, for example, "appointment and review automation built specifically for dental practices" or "a lead-follow-up system for HVAC companies". The narrower and more specific your focus, the less competition you face, because most people never niche down.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A SIMPLE TEST YOU CAN DO NOW</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Search for a generic term like "CRM for small business", then search for a specific one like "CRM for orthodontists". Notice how much thinner the specific results are. That thinness is the opening. Saturation is a problem at the generic top of the market and much less of a problem inside specific niches.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              So "is it saturated" is the wrong question. The right question is "which specific niche can I serve better than a generalist", and there are still many answers to that in 2026.
            </p>

            {/* Section 7: Real Cost */}
            <h2 id="real-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Does a GoHighLevel SaaS Business Really Cost?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Being clear about cost removes a major source of doubt. Here is the honest breakdown, separated into the layers people often miss.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Cost layer</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it is</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Approximate cost</th>
                  </tr>
                </thead>
                <tbody>
                  {costLayers.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.layer}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.what}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The key point is that the platform cost is fixed at $497 per month regardless of how many clients you have. That is what makes the model economically attractive once you have clients: your cost does not rise much as you add them, so margin improves as you grow. The breakeven is low, roughly two to three clients cover the platform cost, and clients beyond that are largely margin. The real "cost" that trips people up is the time and effort before the first clients arrive, not the subscription.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A full plain-language cost and pricing breakdown: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
              </p>
            </div>

            {/* Section 8: Succeeds and Fails */}
            <h2 id="succeeds-fails" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. Who Succeeds With a GoHighLevel SaaS Business, and Who Fails?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The clearest way to judge whether a GoHighLevel SaaS business is "legit" for you is to look at what separates the people who make it work from the people who quit. The pattern is consistent.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Who tends to succeed</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {succeeds.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Who tends to fail</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {fails.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE SINGLE BIGGEST FACTOR</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Retention in the first 7 to 30 days decides more than almost anything else. Industry guidance is consistent that clients who get a working setup and an onboarding touch early are dramatically less likely to churn. A GoHighLevel SaaS business does not usually fail because the model is fake. It fails when new clients log in, see nothing useful, and leave. That is a solvable setup problem, not a flaw in the model.
              </p>
            </div>

            {/* Section 9: Decide */}
            <h2 id="decide" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. How to Decide if a GoHighLevel SaaS Business Is Right for You
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use this as an honest self-check. A GoHighLevel SaaS business is likely a good fit if most of these are true for you.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">It is likely a fit if</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {fitChecks.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">It is probably not a fit right now if</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {notFitChecks.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you land on the "fit" side, the model is legitimate and worth pursuing. If you land on the "not right now" side, that is not because GoHighLevel is a scam, it is because the model rewards focus and patience that the situation may not allow yet.
            </p>

            {/* Section 10: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              10. Frequently Asked Questions
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

            {/* Related Reading */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Reading</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup: The Complete Beginner-Friendly Guide →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">White Label SaaS: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Thinking about starting, but want it done right?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps you decide honestly, then builds the technical side so you can focus on clients.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book a Free Strategy Call
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel implementation specialists · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up helps businesses and agencies implement GoHighLevel CRM, automation, and SaaS systems. Our approach focuses on the implementation behind the platform: niche strategy, snapshot builds, SaaS Mode setup, workflow automation, and ongoing optimization.
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
                  <div className="text-xs text-white/50">SaaS Legitimacy Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Still Unsure?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We'll give you an honest assessment of whether a GoHighLevel SaaS business fits your goals — before you invest.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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