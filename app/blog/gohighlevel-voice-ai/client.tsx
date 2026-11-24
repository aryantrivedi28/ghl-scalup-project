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
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Rocket,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function VoiceAIClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'what-is',
      'what-can-do',
      'how-works',
      'pricing',
      'examples',
      'setup',
      'use-cases',
      'limitations',
      'mistakes',
      'right-for-business',
      'faq',
      'conclusion',
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
      q: 'What is GoHighLevel Voice AI?',
      a: "It's HighLevel's AI phone agent. It answers calls using instructions you write, and can book appointments, update contacts and trigger workflows."
    },
    {
      q: 'How much does GoHighLevel Voice AI cost?',
      a: 'It depends. Pay-per-use is a $0.045 per minute Voice Engine charge plus a voice rate (from $0.015) plus language model tokens, and phone charges are separate. AI Employee plans are $20, $50 or $97 per sub-account a month. Rates were checked in November 2026.'
    },
    {
      q: 'Is Voice AI included in the GoHighLevel subscription?',
      a: "Not as a flat inclusion. It's billed through usage or an AI Employee plan. Growth includes 100 AI agent minutes and Unlimited is unlimited subject to fair use. Phone charges still apply."
    },
    {
      q: 'Can GoHighLevel Voice AI answer calls automatically?',
      a: 'Yes. Assign the agent to a HighLevel number, then choose whether it answers directly or only as a backup.'
    },
    {
      q: 'Can it book appointments?',
      a: 'Yes, if you connect a HighLevel calendar and add the appointment booking action. Test it with real slots.'
    },
    {
      q: 'Can it transfer a call to a human?',
      a: "Yes, through the call transfer action, which needs a destination number and conditions. It doesn't run in Web Call tests, so test it by phone."
    },
    {
      q: 'Can it make outbound calls?',
      a: 'HighLevel supports it, but it requires approval and compliance setup first. Consent rules for AI-voice calls apply.'
    },
    {
      q: 'Does it work with workflows?',
      a: "Yes. There's an action that triggers a workflow, and post-call options that can start workflows."
    },
    {
      q: 'How do you create an AI voice agent in GoHighLevel?',
      a: 'Go to AI Agents, then Voice AI, then the Agent List, click + Create Agent and choose marketplace, custom agent or flow builder. Then write instructions, add knowledge, set actions, test and deploy.'
    },
    {
      q: "Can you customise the agent's voice and instructions?",
      a: 'Yes. You pick a voice, model and language and write your own prompt and welcome message.'
    },
    {
      q: "What happens if it can't answer a question?",
      a: "It depends on your instructions. You can tell it to say it doesn't know, take a message, or transfer the call."
    },
    {
      q: 'Is it suitable for small businesses?',
      a: 'It can be, especially at low call volumes where pay-per-use is cheap. It works best for routine calls with someone checking transcripts.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is', title: 'What Is GoHighLevel Voice AI?' },
    { id: 'what-can-do', title: 'What Can GoHighLevel Voice AI Do?' },
    { id: 'how-works', title: 'How Does GoHighLevel Voice AI Work on a Real Call?' },
    { id: 'pricing', title: 'GoHighLevel Voice AI Pricing: What Does It Actually Cost?' },
    { id: 'examples', title: 'What It Might Cost: Three Illustrative Examples' },
    { id: 'setup', title: 'How to Set Up GoHighLevel Voice AI' },
    { id: 'use-cases', title: 'Practical Ways Businesses Can Use GoHighLevel Voice AI' },
    { id: 'limitations', title: 'What Are the Limitations of GoHighLevel Voice AI?' },
    { id: 'mistakes', title: 'Common GoHighLevel Voice AI Setup Mistakes' },
    { id: 'right-for-business', title: 'Is GoHighLevel Voice AI Right for Your Business?' },
    { id: 'faq', title: 'Frequently Asked Questions About GoHighLevel Voice AI' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  const plansTable = [
    { plan: 'Starter', price: '$20', voice: 'No Voice AI minutes included, so Voice AI is pay-per-use. HighLevel says Starter is only available to agencies on the $497 Founder plan.' },
    { plan: 'Growth', price: '$50', voice: '100 AI agent minutes a month, covering inbound, outbound and widget use combined.' },
    { plan: 'Unlimited', price: '$97', voice: 'Unlimited, subject to fair use.' },
  ];

  const costExamples = [
    { scenario: 'Small: 100 calls x 3 min', minutes: '300', payPerUse: 'About $22.65', unlimited: 'About $101.65', notes: 'Pay-per-use wins by a long way' },
    { scenario: 'Growing: 400 calls x 4 min', minutes: '1,600', payPerUse: 'About $115.79', unlimited: 'About $116.79', notes: 'Roughly break-even' },
    { scenario: 'Busy: 300 calls x 8 min', minutes: '2,400', payPerUse: 'About $173.11', unlimited: 'About $126.11', notes: 'Unlimited wins, subject to fair use' },
  ];

  const mistakesTable = [
    { mistake: 'Copying a marketplace agent without editing it', fix: 'Review every prompt, action, workflow, calendar and field, and replace anything that belongs to another business.' },
    { mistake: 'Testing only in Web Call', fix: 'Make a real phone call to test transfers.' },
    { mistake: 'Writing a long prompt with no boundaries', fix: "State what the agent can and can't discuss and when to transfer." },
    { mistake: 'Forgetting how the number is routed', fix: 'Check forwarding, timeout, voicemail and working hours on the number.' },
    { mistake: 'Choosing a voice without checking its cost', fix: 'Compare per-minute voice rates before you choose one.' },
    { mistake: 'Not reading real calls after launch', fix: 'Review a sample of transcripts weekly and update the agent.' },
  ];

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
          <span className="text-[#1A2236] font-medium">GoHighLevel Voice AI</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Voice AI</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">AI Agents</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Pricing & Setup</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Voice AI: What It Does, How It Is Priced and How to Set It Up
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Features and prices checked November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              This guide walks through GoHighLevel's Voice AI in plain terms: what it is, what it can and can't do, what a call actually costs, and how a sensible setup works from start to finish.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>The features and prices here come from HighLevel's own help pages, which we checked in November 2026. Where something couldn't be confirmed, we say so.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book-a-call"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Book a Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#setup"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to Setup
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN: SIDEBAR */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="mb-6">
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
                5+ years GHL experience · 200+ systems built globally. We implement GoHighLevel for agencies and service businesses.
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
          </aside>

          {/* RIGHT COLUMN: BLOG CONTENT */}
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

            {/* Intro */}
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A business owner is on a job site, a patient is in the chair, a coach is on a client call. The phone rings, nobody picks up, and the caller moves on to the next name in the search results. Most of us know this problem. What's harder to know is whether an AI voice answering the phone is a sensible fix or an expensive experiment.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-voice-ai.png"
                  alt="GoHighLevel Voice AI: What It Does, How It Is Priced and How to Set It Up"
                  width={1600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Voice AI features, pricing and setup guide.</span>
              </div>
            </div>

            {/* Section: What Is */}
            <h2 id="what-is" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is GoHighLevel Voice AI?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel Voice AI is HighLevel's built-in AI phone agent. It talks to callers in a natural voice, follows instructions you write for it, and can pass what it learns into your GoHighLevel account. It's the part of HighLevel's AI tooling that handles phone calls, much as Conversation AI handles text and chat. You may also see it called an AI receptionist or an AI voice agent.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two comparisons help.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">It's not an old-style phone menu (IVR).</strong> A menu says "press 1 for sales" and can only follow fixed paths. Voice AI listens to what the caller says and responds in conversation, within the limits of its instructions.</li>
              <li><strong className="text-[#1A2236]">It's not a text chatbot with a voice added.</strong> A call has pauses, interruptions and people talking over each other, so it needs its own settings and its own testing.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It sits inside the same account as your contacts, calendars, workflows and phone numbers. That's the main reason to use it over a separate AI phone tool: what happens on the call can land in the CRM that your team already works in.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you want the wider picture of HighLevel's AI features, our guide to the <Link href="/blog/gohighlevel-ai-employee" className="text-[#0E9BF0] hover:underline">GoHighLevel AI Employee</Link> covers Voice AI, Conversation AI and Workflow AI side by side. This article stays on the phone side.
            </p>

            {/* Section: What Can Do */}
            <h2 id="what-can-do" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Can GoHighLevel Voice AI Do?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are the things HighLevel's current help article describes. We've split them into what you switch on and what you have to build.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Built into the Voice AI agent</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Answer inbound calls on a HighLevel number. You choose whether the agent answers every call or only acts as a backup when the main path doesn't pick up, and you can set working hours.</li>
              <li>Use your instructions and a knowledge base. You write what the agent should do, and you can attach a knowledge base with things like hours, services, policies and FAQs.</li>
              <li>Take actions during the call. HighLevel lists these action types: transfer the call to a human phone number, trigger a workflow, send a text message, update a contact field, book an appointment, send data to another system through a custom webhook, and hand off to another Voice AI agent where that's available.</li>
              <li>Keep a record. Call logs hold the transcript, recording, a summary and the results of actions. You can optionally add the summary to the contact's notes.</li>
              <li>Be built visually. A Flow Based Builder lets you lay out structured calls as connected steps, and HighLevel offers ready-made templates as a starting point.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Things that depend on your setup</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Booking appointments only works once a HighLevel calendar is connected and the agent is told when to use it.</li>
              <li>Transferring to a person only works if you've entered a destination number and written when to transfer.</li>
              <li>Outbound calling needs the applicable approval and compliance setup first. HighLevel says outbound testing can stay unavailable until that's done, and the outbound settings it describes (including an AI disclosure and a verbal opt-out) sit with its speech-to-speech agents.</li>
              <li>Languages and voices. You choose a voice, model and language when you create the agent. We couldn't confirm the full list of languages from the help article, so check the options in your own account before promising a client a particular one.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Everything above comes from the HighLevel help center article on creating Voice AI agents. Features change, so treat it as the reference if anything here looks different in your account.
            </p>

            {/* Section: How Works */}
            <h2 id="how-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Does GoHighLevel Voice AI Work on a Real Call?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's one call, step by step, using a made-up plumbing company as the example.
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>The caller dials the business number. The number is a HighLevel number that's been assigned to the agent.</li>
              <li>The call is routed. Working hours, routing mode, forwarding, timeouts and voicemail settings on that number all decide whether the call reaches the agent. Assigning a number doesn't guarantee every call gets there.</li>
              <li>The agent answers with the greeting you wrote.</li>
              <li>It listens and works out what the caller wants. A boiler has stopped working, say, and the caller wants someone out today.</li>
              <li>It answers using only what it's been given. That means your instructions and your knowledge base. If the answer isn't there, a well-written agent says it doesn't know rather than guessing.</li>
              <li>It collects details and runs actions. Name, address, the problem, a preferred time. It can book a slot if a calendar is connected, or update fields on the contact.</li>
              <li>It records the outcome. The transcript, recording and summary are stored in call history. Workflows you've attached can fire after the call, such as a task for the office or a follow-up text.</li>
              <li>It finishes or hands off. If the caller asks for a person, or the agent reaches a point you've told it to escalate, it can transfer the call to a human number.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Behind the scenes, the agent converts speech to text, a language model works out what to say, and a voice engine turns the reply back into speech. That's also why the bill has several parts, which we'll get to next.
            </p>

            {/* Section: Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Voice AI Pricing: What Does It Actually Cost?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel Voice AI has no single price. You pay for AI usage (per minute, or through an AI Employee plan), and you pay separately for the phone system. The AI charges depend on which voice and model you pick. Phone charges apply either way.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The figures below come from HighLevel's AI product pricing article (page last modified 10 November 2026) and its phone system pricing guide (modified 12 October 2026). HighLevel changes rates from time to time. A lot of older articles still quote earlier numbers, so check the dates on anything you read, including this.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">1. The platform subscription</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is your normal HighLevel plan. It isn't a Voice AI price and we don't repeat the plan prices here. For those, see our <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing guide</Link>.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">2. Voice AI usage: pay per use or an AI Employee plan</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel offers three AI Employee plans, priced per sub-account:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Plan</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Monthly price</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Voice AI</th>
                  </tr>
                </thead>
                <tbody>
                  {plansTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.plan}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.price}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.voice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you're on pay-per-use, or you use more than a plan includes, HighLevel gives this formula:
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4">
              <p className="text-sm text-[#1A2236] italic">
                Estimated cost = minutes × (Voice Engine rate + voice rate) + language model (token) cost + phone system charges
              </p>
            </div>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Voice Engine:</strong> $0.045 per minute for usage from 20 May 2026. Older usage may show an earlier, bundled rate.</li>
              <li><strong className="text-[#1A2236]">Voice rate:</strong> depends on the voice you choose. OpenAI and Cartesia voices are $0.015 per minute. ElevenLabs voices range from $0.035 (Flash) and $0.05 (Multilingual V2) up to $0.07 (V4 Turbo) and $0.17 (V3 and V4).</li>
              <li><strong className="text-[#1A2236]">Speech-to-speech models</strong> use one all-in rate instead: $0.10 per minute for the Google Gemini options, $0.12 for OpenAI GPT Live 1 and $0.20 for GPT Realtime 2 and 2.1.</li>
              <li><strong className="text-[#1A2236]">Language model tokens:</strong> charged at the model's API price. HighLevel doesn't give a flat per-minute figure because longer calls, bigger knowledge bases and longer replies use more tokens.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's own example: a 10-minute call with an OpenAI TTS-1 voice costs $0.45 for the Voice Engine plus $0.15 for the voice, which is $0.60 before tokens and phone charges.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">3. Phone and telephony charges</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel says phone system charges still apply to all phone calls, whatever AI plan you're on. Its US and Canada guide lists a local number at $1.15 a month, inbound calls to a local number at $0.01165 a minute, and outbound calls at $0.0166 a minute. Call recording ($0.0025 a minute) and transcription ($0.024 a minute) are listed separately. The guide doesn't say what rate applies when Voice AI answers, so the examples below use the inbound local rate as an assumption.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">4. What we couldn't confirm</h3>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Whether Unlimited covers outbound and widget usage. An earlier version of HighLevel's article said it didn't. The current one doesn't spell it out. Check in your account before you quote a client.</li>
              <li>The extra-usage rate once a plan's minutes run out. HighLevel says usage pauses at the limit unless Extra Usage is turned on in AI Suite.</li>
              <li>Pricing outside the US and Canada. We only checked US and Canada rates.</li>
            </ul>

            {/* Section: Examples */}
            <h2 id="examples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What It Might Cost: Three Illustrative Examples
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are our own calculations, not HighLevel quotes. They use the rates above, a $0.015 voice, and assume the local inbound phone rate. They leave out language model token charges, so real bills will be somewhat higher.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Scenario</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Minutes a month</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Pay-per-use (before tokens)</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Unlimited plan</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costExamples.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.scenario}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.minutes}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.payPerUse}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.unlimited}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each figure is the Voice AI charge plus inbound phone minutes at $0.01165 and one local number at $1.15 a month. For Unlimited, add $97 instead of the per-minute AI charge. Your own break-even depends on tokens and phone use. Without them, the Voice Engine plus a $0.015 voice reaches $97 at about 1,617 minutes a month.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Voice choice matters a lot. The same 2,400 minutes with an ElevenLabs V3 voice at $0.17 (so $0.215 a minute with the Voice Engine) would be about $516 for the AI part alone, against $144 with a $0.015 voice.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              To work out your own number: estimate calls a month, multiply by average minutes, multiply by your agent's per-minute AI rate, add phone minutes and numbers, then add a cushion for tokens. After a few weeks of real calls, replace the guesses with what AI Suite shows.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">If you run an agency</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Know where usage shows up.</strong> HighLevel says agency admins review AI usage in AI Suite at agency level, with a breakdown by location, product and model.</li>
              <li><strong className="text-[#1A2236]">Check rebilling before you price.</strong> HighLevel says AI Employee rebilling is turned on in agency settings and requires the $497 plan. Don't assume every cost can be rebilled automatically. Look at how each product behaves.</li>
              <li><strong className="text-[#1A2236]">Remember the wallet.</strong> AI and phone usage are paid from the agency wallet, so a busy client can use up funds quickly.</li>
              <li><strong className="text-[#1A2236]">Say it in the agreement.</strong> Tell clients plainly that call costs vary with call length and voice choice, and agree how overages are handled.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the platform-wide cost picture, our <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing and usage costs guide</Link> is the place to go.
            </p>

            {/* Section: Setup */}
            <h2 id="setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Set Up GoHighLevel Voice AI
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The steps below follow HighLevel's current help article (modified 17 November 2026). We haven't included screenshots because we couldn't capture the live interface. If your screen differs, trust your screen.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 1: Decide what the agent is for</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Pick one job before you open the builder: answer questions, take messages, qualify enquiries, book appointments, or route calls. One agent with one clear purpose usually behaves better than one trying to do everything. HighLevel's own guidance starts the same way, with the agent's purpose and conversation instructions.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 2: Gather the business information</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The agent can only be as good as what it's told. Collect the services you offer, opening hours, locations, common questions and their answers, prices you're happy to share, how appointments work, who to transfer to, and topics the agent must not discuss. If your notes contradict each other (two different opening times, say), the agent will too.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 3: Open Voice AI</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Log in to the right sub-account, go to AI Agents, then Voice AI, and open the Agent List tab. You'll need the View & Manage Voice AI Agents permission. Click + Create Agent and choose one of three methods: Browse Marketplace (a prebuilt agent), Create Custom Agent, or Flow Based Builder. If you install from the marketplace, review every prompt, action, workflow, calendar and field before using it, and replace anything specific to someone else's business.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 4: Create the agent</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In a custom agent, you enter an agent name, choose a voice, a model and a language, and set the time zone. You then write the prompt and a welcome message (inbound and outbound have separate ones), and you can choose who speaks first and how long the agent waits before speaking. HighLevel has a Prompt Optimizer for a first draft. Test whatever it gives you, and tell the agent not to guess when information is missing.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 5: Write the instructions</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel suggests covering the agent's role and goal, what information to collect, what it can and can't discuss, when each action should run, when to transfer, and how the call ends. Here's an invented example. It isn't an official HighLevel template, and "Brightside Plumbing" doesn't exist.
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4">
              <p className="text-sm text-[#1A2236] italic">
                Illustrative example only, not an official HighLevel template:
              </p>
              <p className="text-sm text-[#1A2236] italic mt-2">
                "You are the phone assistant for Brightside Plumbing. Greet the caller, say the company name, and ask how you can help. Your goal is to understand the problem and collect the caller's name, phone number, address and a short description. If it's a burst pipe or a gas smell, say you'll connect them to the on-call team and transfer the call. For all other jobs, offer to book a visit using the calendar. Answer questions about services and hours using only the knowledge base. If you don't know something, say so and offer to have the office call back. Never quote a final price or promise a time not shown in the calendar. If the caller asks for a person at any point, transfer the call. End by repeating the booking details and thanking them."
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 6: Add the knowledge base and actions</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Open Knowledge Base, pick one, add hours, services, policies and FAQs, and say when the agent should search it. Then open Actions and click + New Action. Choose the type, name it, write the trigger condition, and complete its settings: the transfer number, workflow, field, calendar or webhook. For call transfers you can write a short message the agent says before it transfers.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 7: Check the call behaviour settings</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Turn on Show advanced settings and you'll find call duration, idle reminders and silence handling, response speed, interruption sensitivity, speech recognition and pronunciation keywords, voice speed and volume, and post-call options such as notifications, workflows and summaries. HighLevel doesn't publish default values for silence timeouts or maximum call length in this article, so look at what your account shows and set them deliberately.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 8: Connect calendar, phone and CRM</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Calendar:</strong> the appointment booking action needs a connected HighLevel calendar.</li>
              <li><strong className="text-[#1A2236]">CRM:</strong> use the update contact field action to save details, and workflows to take the next step after the call. If you want data in structured fields rather than just a transcript, you have to ask for it and map it. Our guide on <Link href="/blog/gohighlevel-conversational-ai-data-storage" className="text-[#0E9BF0] hover:underline">how Conversation AI saves data to your CRM</Link> covers the same idea for text conversations.</li>
              <li><strong className="text-[#1A2236]">Phone:</strong> you assign a number in the next step.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 9: Assign a number and go live</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Open the agent's Deploy tab. In the phone section, choose an eligible number or number pool (you can buy a new number from there). Under call routing, choose Answer Calls Directly or Use as Backup, then set working hours to all hours or a custom schedule. Before you save, look at the number's existing forwarding, timeout, voicemail and fallback settings, because they affect which calls reach the agent. If the number already rings your team, decide whether the agent replaces that or catches what's missed.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 10: Test before real customers call</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's test panel offers a Web Call (in the browser, no number needed) or a Phone Call (full telephony). One catch: call transfer doesn't run in Web Call tests. Test it with a phone call or by dialling the live number. Change one thing at a time between tests. These are the calls worth making:
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>A simple question about hours or location.</li>
              <li>A question about services.</li>
              <li>A request to book an appointment.</li>
              <li>A caller who gives incomplete details.</li>
              <li>A question outside what the agent knows.</li>
              <li>A caller who asks for a person.</li>
              <li>A caller who changes their mind halfway.</li>
              <li>An unclear or rambling answer, plus some silence and interruptions.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              After each, check it against the call history: was the answer correct, did the pauses feel acceptable, was the voice clear, were the details captured, did the booking land on the right slot and time zone, did the transfer connect, and did the contact record update?
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 11: Watch real calls and improve</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel gives you the transcript, recording, summary and action results for each call. Read a sample of real calls every week at first, note where it went wrong, and fix the instructions or knowledge base. Costs sit in AI Suite at agency level. Figures like how many callers asked for a human or how many bookings came from the agent aren't something we confirmed as ready-made reports, so you may need to count those from call history or your own reporting.
            </p>

            {/* Section: Use Cases */}
            <h2 id="use-cases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Practical Ways Businesses Can Use GoHighLevel Voice AI
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are examples of how the features above could be used. They're illustrations, not case studies, and not work we're claiming to have done.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">A home services business</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The problem: calls come in while the crew is on site. The caller: wants to know if someone can come out, and roughly when. The agent: collects name, address and the issue, offers an open slot from the calendar, and texts a confirmation. In the CRM: a contact with the job details and a booked appointment, plus a workflow task for the office. Human needed: emergencies, anything needing a price quote, and anyone who asks for a person.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">A dental or clinic reception</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The problem: front-desk staff are tied up with patients, so calls ring out. The caller: wants an appointment or asks about opening hours and services. The agent: answers from the knowledge base and books a slot. In the CRM: a new or updated contact with the appointment time. Human needed: anything clinical, any request for medical advice, urgent symptoms, and billing disputes. A health-related business should also check privacy rules before recording calls or storing details.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">An agency setting it up for a client</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The problem: the agency wants to offer AI call handling but doesn't want surprise bills. The approach: build one agent for one job, test it with the client's own calls, set the pricing and overage terms in the agreement, and check AI Suite regularly. Human needed: reviewing transcripts, updating the knowledge base when the client's offers change, and handling complaints.
            </p>

            {/* Section: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Are the Limitations of GoHighLevel Voice AI?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Voice AI is useful for routine calls. It isn't a replacement for a person. Here's where it can go wrong, grouped by cause.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Product and technology limits</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Delays.</strong> Users on HighLevel's own ideas board have reported pauses of several seconds before the agent speaks or replies. HighLevel marked one such request as fixed, but pauses can still vary with the model and voice you choose, so measure it on your own number.</li>
              <li><strong className="text-[#1A2236]">Misheard speech.</strong> Accents, background noise and poor phone lines can all cause errors. Test with realistic callers, not just clear voices in a quiet room.</li>
              <li><strong className="text-[#1A2236]">Transfers only work if configured and tested on a real call.</strong></li>
              <li><strong className="text-[#1A2236]">Community-reported gaps.</strong> Some agencies describe issues such as robotic-sounding voices, no automatic recognition of repeat callers, and spam calls creating contacts. These are third-party and community reports we couldn't verify, so treat them as things to test for.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Setup mistakes</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Vague instructions, missing information, or a knowledge base that disagrees with itself.</li>
              <li>An agent trying to do too many things.</li>
              <li>Number routing that sends calls somewhere else.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Business risks</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The agent answering something it shouldn't, such as a price or a medical comment.</li>
              <li>Costs rising unexpectedly because of long calls or an expensive voice.</li>
              <li>Sensitive calls that need empathy and judgement.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Legal and privacy</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Rules differ by country and state, and this isn't legal advice. Three points are worth knowing in the US:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>In 2024 the FCC ruled that AI-generated voices count as "artificial" voices under the Telephone Consumer Protection Act. That means outbound calls using an AI voice generally need the called person's prior consent. Read the FCC announcement.</li>
              <li>Call recording consent varies. Most US states need only one party to agree, but some, including California and Florida, require everyone on the call to agree. Different sources count the all-party states differently, so check your own states.</li>
              <li>HighLevel's outbound setup includes an AI disclosure and a verbal opt-out, which suggests the platform expects you to tell people they're speaking to an AI. We haven't researched rules in the UK, Canada or Australia for this article.</li>
            </ul>

            {/* Section: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common GoHighLevel Voice AI Setup Mistakes
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Mistake</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to do instead</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakesTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.mistake}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Right for Business */}
            <h2 id="right-for-business" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Voice AI Right for Your Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It can be a good fit if most of your calls are routine, you miss calls because you're busy, you already use HighLevel for contacts and calendars, and you're willing to test and adjust. It's a weaker fit if most calls are complicated, emotional or regulated, if you need to be sure a human handles every call, or if you haven't decided what a good call outcome looks like.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Ask yourself four questions. What's the one job I want the agent to do? What happens when it can't answer? What would it cost at my call volume? Who will read the transcripts? If you can answer all four, you're ready to try it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Some businesses build it themselves. Others bring in help when they want a custom call flow, calendar and CRM connections, tested transfers, or a tested agent before launch, or when an agency is planning to offer it to clients. If that's you, our <Link href="/services/ai-voice-agent" className="text-[#0E9BF0] hover:underline">GoHighLevel Voice AI agent setup service</Link> covers it, and you can <Link href="/book-a-call" className="text-[#0E9BF0] hover:underline">book a call</Link> to talk it through.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About GoHighLevel Voice AI
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

            {/* Section: Conclusion */}
            <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Conclusion
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel Voice AI gives businesses a way to answer calls, capture details and book appointments inside the system they already use. It works best when it has one clear job, good information and proper testing. The cost is made of several parts, so work it out for your own call volume before you commit. And it doesn't replace people on calls that need judgement.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you'd like a hand with the call flow, calendar and CRM connections, transfers or testing, take a look at our <Link href="/services/ai-voice-agent" className="text-[#0E9BF0] hover:underline">GoHighLevel Voice AI agent setup service</Link>.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about GoHighLevel Voice AI?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                  <Phone className="w-4 h-4" />
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-ai-employee" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Employee Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing Guide →</Link>
                <Link href="/blog/gohighlevel-conversational-ai-data-storage" className="text-sm text-[#0E9BF0] hover:underline">How Conversation AI Saves Data to Your CRM →</Link>
                <Link href="/blog/gohighlevel-ai-appointment-booking" className="text-sm text-[#0E9BF0] hover:underline">AI Appointment Booking →</Link>
                <Link href="/services/ai-voice-agent" className="text-sm text-[#0E9BF0] hover:underline">Voice AI Agent Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">One clear job. Good information. Proper testing.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  If you'd like a hand with the call flow, calendar and CRM connections, transfers or testing, GHL Scale Up can help.
                </p>
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Call
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                Features and prices were checked in November 2026. HighLevel changes features, rates and default settings from time to time, so confirm current details in your account before committing.
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