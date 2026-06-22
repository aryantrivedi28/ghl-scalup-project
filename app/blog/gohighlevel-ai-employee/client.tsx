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
  Shield,
  DollarSign,
  Users,
  Building2,
  Calendar,
  MessageCircle,
  Phone,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Star,
  AlertTriangle,
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Rocket,
  Cloud,
  Database,
  Clock,
  Mail,
  GraduationCap,
  Heart,
  Target,
  FileText,
  Compass,
  GitCompare,
  BarChart3,
  Mailbox,
  Stethoscope,
  Activity,
  CalendarDays,
  XCircle,
  Layers,
  Workflow,
  Headphones,
  FileQuestion,
  HelpCircle,
  Boxes,
  Combine,
  Settings,
  Link2,
  Webhook,
  RefreshCw,
  ListChecks,
  ClipboardList,
  Download,
  Printer,
  Video,
  Ticket,
  Trophy,
  TrendingDown,
  PieChart,
  Package,
  Wrench,
  Droplets,
  Home,
  HardHat,
  Bot,
  Brain,
  Mic,
  MessageSquare,
  PenTool
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelAIEmployeeClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-ai-employee',
        'free-vs-paid',
        'voice-ai',
        'conversation-ai',
        'workflow-ai',
        'agency-pricing',
        'which-first',
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
      q: "What is GoHighLevel AI Employee?",
      a: "GoHighLevel AI Employee is a collection of AI-powered tools built into the GHL platform: Voice AI (answers calls), Conversation AI (handles texts and chat messages), Reviews AI (automates review requests and replies), Content AI (writing assistant), Funnel AI (funnel page generator), and Workflow AI Builder (automation sequence generator). Some are included in the base GHL subscription at no extra cost (Workflow AI, Funnel AI, and Content AI). Others require the AI Employee add-on plan ($50 or $97/month per sub-account): Voice AI, Conversation AI, and Reviews AI."
    },
    {
      q: "Does GoHighLevel AI Employee cost extra?",
      a: "Yes, the core AI Employee features that interact with real people cost extra beyond your base GHL subscription. Voice AI and Conversation AI require the AI Employee add-on, available at two tiers: AI Employee Growth at $50/month per sub-account, or AI Employee Unlimited at $97/month per sub-account. The AI Employee Unlimited plan covers inbound Voice AI, Conversation AI, and Reviews AI with no per-use charges (subject to fair-use limits). However, three GHL AI features are included in all base plans at no extra charge: Workflow AI Builder, Funnel AI, and Content AI."
    },
    {
      q: "How much does GoHighLevel Voice AI cost per minute?",
      a: "Voice AI in GoHighLevel bills in two layers: a voice engine charge at $0.06 per minute for speech processing, plus LLM token usage at API pricing for the AI model reasoning about the conversation. The average combined cost across all Voice AI usage in GHL is approximately $0.163 per minute as of June 2026. Phone system charges for actual call minutes are billed separately from the AI cost at standard LC Phone rates. If you use the AI Employee Unlimited plan at $97/month per sub-account, inbound Voice AI usage is covered under the flat fee. You pay phone minutes but not the per-minute AI charges."
    },
    {
      q: "What is the difference between Voice AI and Conversation AI in GoHighLevel?",
      a: "Voice AI handles phone calls. It is a phone agent that answers inbound calls, has a real conversation with the caller, qualifies the lead, and can book appointments into the GHL calendar. Conversation AI handles text-based messages. It responds to incoming SMS, website chat, Facebook Messenger, Instagram DMs, and WhatsApp messages using a knowledge base and a configured persona. Both are AI agents that interact with real contacts in real time, but they run on different channels. Both require the AI Employee add-on plan; neither is included in the base GHL subscription."
    },
    {
      q: "What is GoHighLevel Workflow AI?",
      a: "Workflow AI is an AI assistant built directly into GoHighLevel's workflow builder. It generates automation sequences from plain-language descriptions. You describe what you want an automation to do, and Workflow AI builds the trigger, conditions, and action steps for you. Unlike Voice AI and Conversation AI, Workflow AI does not interact with contacts directly. It is a builder tool, not a conversational agent. Workflow AI is included in all active GHL base plans at no extra charge. It is not an add-on."
    },
    {
      q: "Can agencies rebill AI Employee to clients?",
      a: "Yes. Agencies can charge clients more than they pay GHL for AI Employee and keep the margin. To rebill AI Employee usage to sub-accounts, your agency must be on the Agency Pro plan at $497/month. Lower-tier plans (Starter at $97/month and Unlimited at $297/month) cannot rebill AI Employee costs. In Agency Settings, you can set custom pricing for AI Employee reselling to sub-accounts."
    },
    {
      q: "What is the AI Employee Unlimited plan?",
      a: "AI Employee Unlimited is a flat-rate add-on at $97/month per sub-account that covers inbound Voice AI, Conversation AI, Reviews AI, and Content AI with no per-use charges, subject to GHL's fair-use policy. It does not cover outbound Voice AI calls, Agent Studio usage, or phone system charges for actual call minutes. Those are always billed separately at pay-per-use rates. It is separate from the GHL base platform subscription ($97 to $497/month for the platform itself)."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-ai-employee', title: '1. What Is the GoHighLevel AI Employee and What Does It Include?' },
    { id: 'free-vs-paid', title: '2. Which GHL AI Features Are Free and Which Cost Extra?' },
    { id: 'voice-ai', title: '3. What Does GoHighLevel Voice AI Do and What Does It Cost?' },
    { id: 'conversation-ai', title: '4. What Does GoHighLevel Conversation AI Do and What Does It Cost?' },
    { id: 'workflow-ai', title: '5. What Does GoHighLevel Workflow AI Do and Why Is It Free?' },
    { id: 'agency-pricing', title: '6. How Does AI Employee Pricing Work for Agencies?' },
    { id: 'which-first', title: '7. Which AI Feature Should You Set Up First?' },
    { id: 'faq', title: '8. Frequently Asked Questions' },
  ];

  const freeVsPaidData = [
    { feature: 'Workflow AI Builder', what: 'Builds automation sequences from plain-language prompts inside the workflow editor', free: 'Yes — all plans, no extra charge', cost: 'None' },
    { feature: 'Funnel AI', what: 'Generates funnel page content from a brief description', free: 'Yes — all plans, no extra charge', cost: 'None' },
    { feature: 'Content AI', what: 'AI writing assistant for emails, SMS, social posts inside GHL editors', free: 'Yes — all plans, no extra charge', cost: 'None' },
    { feature: 'Voice AI (inbound)', what: 'AI answers inbound calls, qualifies leads, books appointments', free: 'No — requires AI Employee add-on', cost: '~$0.163/min OR included in AI Employee Unlimited ($97/mo per sub)' },
    { feature: 'Voice AI (outbound)', what: 'AI makes outbound calls for reminders and follow-up', free: 'No — separate billing', cost: '~$0.163/min average, not covered by AI Employee Unlimited' },
    { feature: 'Conversation AI', what: 'AI handles SMS, chat, Facebook, Instagram, WhatsApp conversations', free: 'No — requires AI Employee add-on', cost: 'Token-based billing OR included in AI Employee Unlimited ($97/mo per sub)' },
    { feature: 'Reviews AI', what: 'Automates review requests and AI-drafted replies (Google + Facebook)', free: 'No — requires AI Employee add-on', cost: 'Included in AI Employee Unlimited ($97/mo per sub)' },
    { feature: 'Agent Studio', what: 'Advanced AI agent configuration with multimodal capabilities', free: 'No — separate billing', cost: 'Pay-per-use; not included in AI Employee Unlimited' },
  ];

  const voiceAICostData = [
    { component: 'Voice engine', rate: '$0.06/minute', covers: 'GHL\'s speech-to-text and text-to-speech processing' },
    { component: 'LLM token usage', rate: 'API pricing by model', covers: 'The AI model reasoning about the conversation and generating responses' },
    { component: 'Average combined cost', rate: '~$0.163/minute', covers: 'Confirmed average across all Voice AI usage in GHL (June 2026)' },
    { component: 'Phone system charge', rate: 'Standard LC Phone rates', covers: 'Actual call minutes — billed separately, not included in any AI plan' },
    { component: 'AI Employee Unlimited', rate: '$97/month per sub-account', covers: 'Covers inbound Voice AI with no per-minute AI charges (phone charges still apply)' },
  ];

  const aiEmployeePlans = [
    { plan: 'Pay-per-use (no AI Employee plan)', cost: '$0/month base + usage charges', includes: 'Voice AI and Conversation AI billed per use from agency wallet', bestFor: 'Low-volume sub-accounts or testing' },
    { plan: 'AI Employee Growth', cost: '$50/month per sub-account', includes: '100 Voice AI minutes/month included, then pay-per-use; generous limits across Conversation AI and Reviews AI', bestFor: 'Sub-accounts with moderate, predictable AI usage' },
    { plan: 'AI Employee Unlimited', cost: '$97/month per sub-account', includes: 'Unlimited inbound Voice AI, Conversation AI, Reviews AI, and Content AI within fair-use limits', bestFor: 'Active service businesses using AI at scale' },
  ];

  const whichFirstData = [
    { order: 1, feature: 'Workflow AI', reason: 'It\'s free and already available. Build missed-call text-back, new lead follow-up, and appointment reminder workflows. These run without any AI add-on costs and deliver immediate, measurable results.' },
    { order: 2, feature: 'Reviews AI', reason: 'At $97/month AI Employee Unlimited, Reviews AI is included. Configure the post-appointment review request to fire 2 hours after a job completion trigger. This is the lowest-effort AI feature with the highest long-term return for local service businesses.' },
    { order: 3, feature: 'Conversation AI', reason: 'Do not activate Conversation AI without a knowledge base. Build the knowledge base first (minimum 20 to 30 Q&As covering services, pricing, hours, booking process, and common objections). Only then turn Conversation AI on.' },
    { order: 4, feature: 'Voice AI', reason: 'Voice AI is the highest-impact AI feature for missed-call revenue recovery but also the most configuration-dependent. Set up a clear call script, connect the GHL calendar, test with real calls, and listen to the recordings before going live to a real phone number.' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel AI Employee 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">AI Employee</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Voice AI</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Conversation AI</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel AI Employee:<br />
            <span className="text-[#F8D000]">Voice AI, Conversation AI and Workflow AI Explained (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel uses the word 'AI' to describe at least eight different features inside the platform. 
            They are not all the same product, they do not all cost the same amount, and they are not all add-ons. 
            Agencies that activate everything without understanding the pricing structure end up with surprise charges. 
            Agencies that avoid AI entirely because the pricing seems confusing miss the features that genuinely change 
            how much revenue a sub-account generates. <strong className="text-white"> GHL Scale Up</strong> has set up 
            GHL AI features across 200+ builds.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer — Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Three GHL AI features cost extra beyond your base subscription. Three are included in all active plans at no extra charge.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#DC3545]">Cost extra:</strong> Voice AI (billed per minute, averages ~$0.163/min), Conversation AI (token-based billing), 
                and AI Employee (the umbrella add-on plan — $50 or $97/month per sub-account).<br />
                <strong className="text-[#25C97D]">Included free:</strong> Workflow AI (the automation builder assistant), Funnel AI, and Content AI.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-2">
                If you want predictable AI costs across a sub-account, the AI Employee Unlimited plan at <strong className="text-[#0E9BF0]">$97/month per sub-account</strong> 
                covers Voice AI (inbound), Conversation AI, Reviews AI, and Content AI with no per-use charges. Phone System charges for actual call minutes still apply separately.
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

            {/* Section 1: What Is AI Employee */}
            <h2 id="what-is-ai-employee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is the GoHighLevel AI Employee and What Does It Include?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              AI Employee is GoHighLevel's umbrella product name for a collection of AI-powered tools built into the platform. 
              It is not a single feature. It is a suite. As of June 2026, AI Employee includes:
            </p>

            <div className="space-y-2 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Mic className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Voice AI:</strong> An AI-powered phone agent that answers inbound calls, qualifies leads through natural conversation, books appointments, and handles call transfers to human agents.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Conversation AI:</strong> An AI agent that handles text-based conversations across SMS, live website chat, Facebook Messenger, Instagram DMs, and WhatsApp.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Reviews AI:</strong> Automatically requests Google and Facebook reviews after a transaction, monitors incoming reviews, and generates AI-drafted replies.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <PenTool className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Content AI:</strong> AI-assisted writing for emails, SMS, social posts, and blog content within the GHL content editor.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Layout className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Funnel and Website AI:</strong> AI-assisted funnel page generation from a brief description.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">Workflow AI Builder:</strong> An AI assistant inside the GHL workflow builder that generates automation sequences from a plain-language description.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE NAMING CONFUSION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                'AI Employee' refers to both the individual feature suite AND the add-on pricing plan. When GHL says 'enable AI Employee 
                for a sub-account' they mean activating the add-on billing plan. When they refer to a specific AI tool by name (Voice AI, 
                Conversation AI) those are components within the suite. The AI Employee Unlimited plan at $97/month per sub-account covers 
                most but not all components. It does not cover Agent Studio or outbound Voice AI calls.
              </p>
            </div>

            {/* Section 2: Free vs Paid */}
            <h2 id="free-vs-paid" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Which GHL AI Features Are Free and Which Cost Extra?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the table that most GHL users never see clearly in one place.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">AI Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it does</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Included in base plan?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Add-on cost</th>
                  </tr>
                </thead>
                <tbody>
                  {freeVsPaidData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.what}</td>
                      <td className={`py-3 px-3 font-semibold ${item.free.includes('Yes') ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.free}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE KEY TAKEAWAY</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you are not paying for the AI Employee add-on, you are already using Workflow AI, Funnel AI, and Content AI for free. 
                These are included in every base plan from $97/month upward. The features that require additional payment are specifically 
                the ones that interact with real humans in real time: Voice AI (handles calls), Conversation AI (handles messages), and Reviews AI (handles review requests).
              </p>
            </div>

            {/* Section 3: Voice AI */}
            <h2 id="voice-ai" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Does GoHighLevel Voice AI Do and What Does It Cost?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Voice AI is the AI feature with the most significant revenue impact for service businesses. It is also the most frequently misunderstood in terms of cost.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">What Voice AI does</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
                Voice AI is an AI-powered phone agent that handles real conversations with callers. Unlike a traditional IVR (press 1 for sales, press 2 for support), 
                Voice AI has a conversation. It listens to what the caller says, understands context, responds in natural language, and takes actions based on the conversation.
              </p>
              <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                <li><strong className="text-[#1A2236]">Inbound call handling:</strong> Answers calls that would otherwise go to voicemail or a busy signal.</li>
                <li><strong className="text-[#1A2236]">Appointment booking:</strong> Checks the GHL calendar in real time, offers available slots, confirms the booking, and triggers confirmation SMS.</li>
                <li><strong className="text-[#1A2236]">After-hours routing:</strong> Configurable to behave differently during business hours versus after hours.</li>
                <li><strong className="text-[#1A2236]">Emergency keyword routing:</strong> Specific phrases like 'no heat' or 'emergency' trigger immediate transfer to an on-call number.</li>
              </ul>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Cost component</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Rate</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it covers</th>
                  </tr>
                </thead>
                <tbody>
                  {voiceAICostData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.component}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.rate}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.covers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">PRACTICAL COST EXAMPLE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A dental practice handling 50 inbound calls per month at an average of 2 minutes each: Voice AI cost = 100 minutes x ~$0.163 = 
                approximately <strong className="text-[#1A2236]">$16.30/month</strong>. Phone system charges for those calls are separate. Under AI Employee Unlimited 
                at $97/month, the $16.30 in Voice AI usage is covered. You pay the flat $97 instead, plus phone charges. At 200+ inbound minutes per month, 
                the Unlimited plan becomes more cost-effective than pay-per-use.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → For missed-call-text-back alongside Voice AI: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → For Voice AI in dental practices: <Link href="/blog/gohighlevel-for-dentists" className="text-[#0E9BF0] hover:underline">GoHighLevel for Dentists →</Link>
            </p>

            {/* Section 4: Conversation AI */}
            <h2 id="conversation-ai" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Does GoHighLevel Conversation AI Do and What Does It Cost?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Conversation AI handles the text-based version of what Voice AI handles on calls. It responds to incoming messages across multiple channels using an AI agent configured with a knowledge base and a persona.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <ul className="space-y-2 text-sm text-[#5C6880]">
                <li><strong className="text-[#1A2236]">Channels covered:</strong> SMS, live website chat widget, Facebook Messenger, Instagram DMs, and WhatsApp. One Conversation AI setup can handle all channels from a single configuration.</li>
                <li><strong className="text-[#1A2236]">How it works:</strong> When a new message comes in, Conversation AI reads the message, consults its knowledge base, and generates a contextually appropriate response. It can qualify the lead, answer questions, collect contact information, and trigger a booking link or workflow.</li>
                <li><strong className="text-[#1A2236]">Knowledge base dependency:</strong> Conversation AI is only as good as the knowledge base it is trained on. Setting up a detailed knowledge base is the most important step before activating it.</li>
                <li><strong className="text-[#1A2236]">Escalation to human:</strong> You can configure triggers that escalate the conversation to a human when the contact asks something outside the knowledge base.</li>
              </ul>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Conversation AI pricing:</strong> Transitioning to token-based billing in 2026, where you pay per message exchange at API pricing rates. For most service businesses running moderate message volumes, the cost is low enough to be a rounding error on the monthly invoice. Under AI Employee Unlimited ($97/month), Conversation AI usage is included with no per-token charges within fair-use limits.
            </p>

            {/* Section 5: Workflow AI */}
            <h2 id="workflow-ai" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Does GoHighLevel Workflow AI Do and Why Is It Free?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Workflow AI is the most commonly overlooked AI feature in GHL precisely because it does not cost anything extra and it has a relatively quiet launch compared to Voice AI.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Workflow AI is an AI assistant built directly into GHL's workflow builder. Describe what you want an automation to do in plain English, and Workflow AI generates a working automation sequence with triggers, conditions, and actions already configured.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is not a separate product or add-on. It is a feature within the existing workflow builder that every GHL user has access to. It reduces the time to build complex automations from hours to minutes for users who are not yet fluent in GHL's trigger-and-action system.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WHAT WORKFLOW AI DOES NOT DO</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Workflow AI builds the automation structure. It does not have a conversation, answer a call, or respond to a message. It is a builder tool, not a conversational agent. Users sometimes confuse Workflow AI with Conversation AI because both involve AI and both involve automations. They are completely different: Workflow AI is for building sequences, Conversation AI is for having real-time conversations with contacts.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a full guide on what GHL workflows can do: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            {/* Section 6: Agency Pricing */}
            <h2 id="agency-pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Does AI Employee Pricing Work for Agencies?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Agencies managing multiple client sub-accounts need to understand three things: how the AI Employee plans are structured, how rebilling works, and which GHL plan is required to rebill.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">AI Employee plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What's included</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {aiEmployeePlans.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.cost}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.includes}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#1A2236]">Rebilling AI Employee to clients:</strong> You can charge clients more than you pay GHL for AI Employee. Agency rebilling requires being on the Agency Pro plan at $497/month. Lower plan tiers cannot rebill AI Employee costs. For the full GHL plan structure: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing 2026 →</Link></li>
                <li><strong className="text-[#1A2236]">SaaS Mode and AI Employee:</strong> If you resell GHL under SaaS Mode, you can include AI Employee in your pricing tiers. For the full SaaS Mode setup: <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Guide →</Link></li>
                <li><strong className="text-[#1A2236]">Phone charges are always separate:</strong> No AI plan covers the phone system charges for actual call minutes. Those are billed from the LC Phone wallet separately at standard rates.</li>
              </ul>
            </div>

            {/* Section 7: Which First */}
            <h2 id="which-first" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Which AI Feature Should You Set Up First?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The order matters. Starting with the wrong AI feature is the most common way to get a poor return from GHL's AI suite.
            </p>

            <div className="space-y-3 mb-6">
              {whichFirstData.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{item.order}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.feature}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.reason}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR AI BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                The agencies and service businesses that get the fastest return from GHL's AI suite start with Workflow AI (free, immediate) and Reviews AI 
                (included in the $97 plan) before touching Voice AI or Conversation AI. Getting the knowledge base and call script right before going live 
                saves weeks of troubleshooting.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See how our clients are using GHL AI: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                If you want your AI Employee configured correctly from the start: 
                <Link href="/contact-us" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call at ghlscaleup.com/contact-us →</Link>
              </p>
            </div>

            {/* Section 8: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              8. Frequently Asked Questions
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

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation: Beginner's Guide →</Link>
                <Link href="/blog/gohighlevel-for-dentists" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Dentists: Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: Complete Setup Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/reputation-management" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Reputation Management Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to set up GHL AI correctly the first time?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up configures AI Employee for agencies and service businesses. Knowledge base setup, Voice AI call scripts, 
                  Conversation AI configuration, Reviews AI workflows — built and tested before handover.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
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
                5+ years GHL experience · 200+ systems built globally including AI Employee configuration across dental, home services, 
                real estate, coaching, and agency clients. All pricing and feature details verified as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Want to Set Up AI Employee Correctly?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We configure Voice AI, Conversation AI, and Reviews AI for agencies and service businesses.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
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