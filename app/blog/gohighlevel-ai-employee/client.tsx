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
  AlertTriangle,
  Info,
  Lightbulb,
  FileText,

} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelAIEmployeeClient() {
  const [activeId, setActiveId] = useState<string>('');

useEffect(() => {
  const sections = [
    'what-is-ai-employee',
    'at-a-glance',
    'how-works',
    'voice-ai',
    'conversation-ai',
    'voice-vs-conversation',
    'workflow-ai',
    'agent-studio',
    'knowledge-base',
    'setup',
    'pricing',
    'for-agencies',
    'workflows',
    'benefits',
    'limitations',
    'which-to-use',
    'vs-other-tools',
    'who-should-use',
    'how-much-automate',
    'faq',
    'final-recommendation'
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
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll, { passive: true });

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
      q: "What is GoHighLevel AI Employee?",
      a: "GoHighLevel AI Employee is HighLevel's offering for a collection of AI-powered products that automate tasks such as customer conversations, voice calls, reviews, content, and workflow-related activities. The exact products and usage included depend on the current AI pricing plan."
    },
    {
      q: "What is the difference between GoHighLevel AI Employee and Voice AI?",
      a: "AI Employee is the broader AI offering, while Voice AI is a specific capability focused on phone conversations."
    },
    {
      q: "What is the difference between GoHighLevel Voice AI and Conversation AI?",
      a: "GoHighLevel Voice AI handles phone conversations. GoHighLevel Conversation AI handles text-based conversations across supported channels."
    },
    {
      q: "What is the difference between Conversation AI and Workflow AI?",
      a: "Conversation AI communicates with contacts. The Workflow AI Builder helps users create automation workflows from natural-language instructions."
    },
    {
      q: "Can GoHighLevel AI Employee book appointments?",
      a: "Yes. Voice AI and Conversation AI can support appointment booking when the relevant calendar and agent configuration are set up correctly."
    },
    {
      q: "How much does GoHighLevel AI Employee cost?",
      a: "HighLevel's current AI pricing lists AI Employee Growth at $50/month per enabled location and AI Employee Unlimited at $97/month per enabled location, alongside Pay-Per-Use. Usage limits and included features vary by plan, and phone-system charges apply separately."
    },
    {
      q: "Is GoHighLevel AI Employee Unlimited really unlimited?",
      a: "The Unlimited plan provides unlimited usage for specified AI products, but HighLevel states that unlimited usage remains subject to its fair-use policy."
    },
    {
      q: "Is Agent Studio included in GoHighLevel AI Employee?",
      a: "No. HighLevel's current pricing documentation states that Agent Studio is not included in the AI Employee subscription plans and remains pay-per-use."
    },
    {
      q: "Can GoHighLevel Voice AI make outbound calls?",
      a: "Yes. HighLevel's current AI pricing and Voice AI documentation support inbound and outbound Voice AI. Applicable telephony and compliance requirements still apply."
    },
    {
      q: "Can GoHighLevel Conversation AI work on Instagram and WhatsApp?",
      a: "Yes. HighLevel currently documents supported Conversation AI channels including Facebook, Instagram, WhatsApp, SMS, and Live Chat, with channel-specific configuration available."
    },
    {
      q: "Can GoHighLevel AI Employee replace a human employee?",
      a: "No, not completely. It can automate repetitive, well-defined tasks, but businesses should maintain human escalation for complex, sensitive, emotional, or judgment-heavy interactions."
    },
    {
      q: "Does GoHighLevel AI Employee require a Knowledge Base?",
      a: "A Knowledge Base is not necessarily required for every AI capability, but it is highly valuable when Voice AI or Conversation AI needs to answer business-specific questions accurately. HighLevel supports connecting Knowledge Bases to these AI agents."
    },
    {
      q: "Can agencies resell GoHighLevel AI Employee?",
      a: "Yes. HighLevel supports AI Employee rebilling through Agency Settings, and currently states the agency needs the $497/month platform plan to rebill AI Employee usage with markup."
    },
    {
      q: "Is GoHighLevel AI Employee worth it?",
      a: "It can be worthwhile for businesses with enough call or message volume and repetitive customer interactions to justify the cost. The strongest use cases are businesses that want to improve response speed, automate qualification, book appointments, and reduce repetitive customer communication."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-ai-employee', title: '1. What Is GoHighLevel AI Employee?' },
    { id: 'at-a-glance', title: '2. GoHighLevel AI Employee at a Glance (Comparison Table)' },
    { id: 'how-works', title: '3. How Does GoHighLevel AI Employee Work?' },
    { id: 'voice-ai', title: '4. What Is GoHighLevel Voice AI?' },
    { id: 'conversation-ai', title: '5. What Is GoHighLevel Conversation AI?' },
    { id: 'voice-vs-conversation', title: '6. GoHighLevel Voice AI vs Conversation AI' },
    { id: 'workflow-ai', title: '7. What Is GoHighLevel Workflow AI?' },
    { id: 'agent-studio', title: '8. What Is Agent Studio in GoHighLevel?' },
    { id: 'knowledge-base', title: '9. The GoHighLevel Knowledge Base' },
    { id: 'setup', title: '10. How to Set Up GoHighLevel AI Employee' },
    { id: 'pricing', title: '11. GoHighLevel AI Employee Pricing' },
    { id: 'for-agencies', title: '12. GoHighLevel AI Employee for Agencies' },
    { id: 'workflows', title: '13. Four Practical GoHighLevel AI Employee Workflows' },
    { id: 'benefits', title: '14. Benefits of GoHighLevel AI Employee' },
    { id: 'limitations', title: '15. Limitations of GoHighLevel AI Employee' },
    { id: 'which-to-use', title: '16. Which GoHighLevel AI Capability Should You Use?' },
    { id: 'vs-other-tools', title: '17. GoHighLevel AI Employee vs Other AI Tools' },
    { id: 'who-should-use', title: '18. Who Should Use GoHighLevel AI Employee?' },
    { id: 'how-much-automate', title: '19. How Much Can GoHighLevel AI Employee Actually Automate?' },
    { id: 'faq', title: '20. Frequently Asked Questions' },
    { id: 'final-recommendation', title: '21. Final Recommendation: Is GoHighLevel AI Employee Worth Using?' }
  ];

  const aiCapabilities = [
    { capability: 'Voice AI', purpose: 'Automate phone conversations', channel: 'Phone', use: 'Answer calls, qualify leads, book appointments, transfer calls' },
    { capability: 'Conversation AI', purpose: 'Automate text conversations', channel: 'SMS, social, chat & other supported channels', use: 'Answer questions, qualify leads, book appointments' },
    { capability: 'Workflow AI', purpose: 'Build automations faster', channel: 'Workflow Builder', use: 'Generate workflows from natural-language instructions' },
    { capability: 'Reviews AI', purpose: 'Automate review-related tasks', channel: 'Reputation management', use: 'Request reviews and assist with review responses' },
    { capability: 'Content AI', purpose: 'Generate content', channel: 'HighLevel content tools', use: 'Create marketing and business copy' },
    { capability: 'Funnel & Website AI', purpose: 'Generate pages', channel: 'Funnels/websites', use: 'Create initial page structures and content' },
    { capability: 'Ask AI', purpose: 'General AI assistance', channel: 'HighLevel interface', use: 'Research, create content, perform supported tasks' },
    { capability: 'AI Studio', purpose: 'AI-assisted creation', channel: 'HighLevel', use: 'AI-powered creation and assistance' },
    { capability: 'Agent Studio', purpose: 'Build/configure AI agents', channel: 'Agent environment', use: 'Create advanced AI agents; billed separately (pay-per-use)' }
  ];

  const voiceVsConversation = [
    { requirement: 'Customer calls your business', betterFit: 'GoHighLevel Voice AI' },
    { requirement: 'Missed-call automation', betterFit: 'GoHighLevel Voice AI' },
    { requirement: 'After-hours phone coverage', betterFit: 'GoHighLevel Voice AI' },
    { requirement: 'Phone-based appointment booking', betterFit: 'GoHighLevel Voice AI' },
    { requirement: 'Website chat', betterFit: 'GoHighLevel Conversation AI' },
    { requirement: 'SMS lead qualification', betterFit: 'GoHighLevel Conversation AI' },
    { requirement: 'Instagram / Facebook conversations', betterFit: 'GoHighLevel Conversation AI' },
    { requirement: 'WhatsApp conversations', betterFit: 'GoHighLevel Conversation AI' },
    { requirement: 'Text-based appointment booking', betterFit: 'GoHighLevel Conversation AI' },
    { requirement: 'Both phone and messaging', betterFit: 'Use both where appropriate' }
  ];

  const comparisonTable = [
    { factor: 'CRM integration', ghl: 'Native within HighLevel', specialist: 'Usually requires integration', general: 'Not primarily CRM-focused' },
    { factor: 'Voice', ghl: 'Yes', specialist: 'Often a core strength', general: 'Varies' },
    { factor: 'Text conversations', ghl: 'Yes', specialist: 'Depends on platform', general: 'Usually not a full CRM system' },
    { factor: 'Calendar', ghl: 'Native HighLevel ecosystem', specialist: 'Usually integration-based', general: 'Not native CRM scheduling' },
    { factor: 'Workflows', ghl: 'Native HighLevel ecosystem', specialist: 'Varies', general: 'Not a CRM workflow engine' },
    { factor: 'Agency use', ghl: 'Strong', specialist: 'Depends on platform', general: 'Not designed for agency CRM resale' },
    { factor: 'White-label/SaaS', ghl: 'Supported in HighLevel', specialist: 'Varies', general: 'Not designed for this' },
    { factor: 'Best for', ghl: 'Businesses already using HighLevel', specialist: 'Specialized AI implementations', general: 'General AI tasks' }
  ];

  const pricingPlans = [
    { plan: 'Pay-Per-Use', price: 'No monthly AI subscription', structure: 'Usage-based' },
    { plan: 'AI Employee Growth', price: '$50/month per enabled location', structure: 'Included usage with limits' },
    { plan: 'AI Employee Unlimited', price: '$97/month per enabled location', structure: 'Unlimited usage for specified products, subject to fair use' }
  ];

  const goodCandidates = ['FAQs', 'lead qualification', 'appointment booking', 'basic follow-up', 'missed-call handling', 'after-hours responses', 'review requests', 'simple routing', 'standard information requests'];
  
  const poorCandidates = ['complex negotiation', 'sensitive complaints', 'highly personalized consulting', 'legal decisions', 'medical decisions', 'situations requiring significant human judgment'];

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
          <span className="text-[#1A2236] font-medium">GoHighLevel AI Employee</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">AI Employee</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Voice AI</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Conversation AI</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel AI Employee:<br />
            <span className="text-[#F8D000]">Voice AI, Conversation AI & Workflow AI Explained</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel AI Employee is one of the most searched and most misunderstood parts of the platform, because people expect a single feature and find a collection of separate AI products instead. This guide explains what GoHighLevel AI Employee is, what it includes, how Voice AI, Conversation AI, and Workflow AI each work, how they relate, how pricing works, how to set them up, and where they genuinely help versus where they fall short. Every product claim below is anchored to HighLevel's official documentation. Because HighLevel changes AI features, limits, channels, and billing frequently, treat HighLevel's current AI Product Pricing and feature documentation as the source of truth.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel AI Employee is HighLevel's offering that brings multiple AI products under one billing and access structure inside a sub-account (location). It includes Voice AI (phone conversations), Conversation AI (text conversations across supported channels), the Workflow AI Builder (creates workflows from natural-language instructions), Reviews AI, Content AI, Funnel & Website AI, Ask AI, and AI Studio. Agent Studio is separate and pay-per-use, it is not included in the AI Employee subscription plans. AI Employee is offered as Pay-Per-Use, AI Employee Growth ($50/month per enabled location), or AI Employee Unlimited ($97/month per enabled location). Phone-system charges for calls still apply even when Voice AI is covered under Unlimited. Because pricing and inclusions change, HighLevel's current AI Product Pricing documentation should be treated as the source of truth.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel AI Employee is HighLevel's offering that brings multiple AI products under one billing and access structure inside a sub-account (location).
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It includes Voice AI (phone conversations), Conversation AI (text conversations across supported channels), the Workflow AI Builder (creates workflows from natural-language instructions), Reviews AI, Content AI, Funnel & Website AI, Ask AI, and AI Studio. Agent Studio is separate and pay-per-use, it is not included in the AI Employee subscription plans. AI Employee is offered as Pay-Per-Use, AI Employee Growth ($50/month per enabled location), or AI Employee Unlimited ($97/month per enabled location). Phone-system charges for calls still apply even when Voice AI is covered under Unlimited.
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
                <strong className="text-white">Not sure which GoHighLevel AI capability fits your business?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up configures GoHighLevel AI systems around your actual customer journey, not just turning features on.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: What Is AI Employee */}
            <h2 id="what-is-ai-employee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is GoHighLevel AI Employee?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Direct answer:</strong> GoHighLevel AI Employee is HighLevel's offering for a collection of AI-powered tools that help businesses automate customer conversations, content, reviews, workflows, and other tasks inside the platform. Depending on the product and plan, the AI capabilities can answer calls, respond to messages, book appointments, manage reviews, generate content, and build workflows.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most important distinction is that GoHighLevel AI Employee is not one single AI feature. It is an offering that brings multiple HighLevel AI products under one billing and access structure. The exact products included, usage limits, and billing treatment can change, so HighLevel's current AI Product Pricing documentation should be treated as the source of truth for pricing and inclusion.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For someone evaluating the platform, the simplest way to understand the ecosystem is:
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">GoHighLevel Voice AI</strong> handles phone conversations.</li>
              <li><strong className="text-[#1A2236]">GoHighLevel Conversation AI</strong> handles text-based customer conversations across supported channels.</li>
              <li><strong className="text-[#1A2236]">GoHighLevel Workflow AI</strong> helps users create workflows from natural-language instructions.</li>
              <li><strong className="text-[#1A2236]">Reviews AI</strong> helps automate review-related tasks.</li>
              <li><strong className="text-[#1A2236]">Content AI</strong> assists with content generation.</li>
              <li><strong className="text-[#1A2236]">Funnel & Website AI</strong> helps generate website and funnel assets.</li>
              <li><strong className="text-[#1A2236]">Ask AI and AI Studio</strong> provide broader AI assistance within HighLevel, with plan-specific usage.</li>
              <li><strong className="text-[#1A2236]">Agent Studio</strong> is a separate pay-per-use agent-building capability and is not included in the AI Employee subscription plans.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The important question, therefore, is not simply 'What is GoHighLevel AI Employee?' It is: which GoHighLevel AI capability should you use for the job you want to automate? This guide answers exactly that.
            </p>

            {/* Section 2: At a Glance */}
            <h2 id="at-a-glance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. GoHighLevel AI Employee at a Glance
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's current AI pricing documentation separates these capabilities by plan and usage rather than treating every AI feature as identical. Agent Studio, in particular, is currently listed as pay-per-use across the AI plans rather than being included in the AI Employee subscription.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel AI Capability</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Primary Purpose</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Main Channel/Area</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Use</th>
                  </tr>
                </thead>
                <tbody>
                  {aiCapabilities.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.capability}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.purpose}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.channel}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 3: How Works */}
            <h2 id="how-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Does GoHighLevel AI Employee Work?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel AI Employee works by combining AI capabilities with the data, communication channels, calendars, workflows, and CRM environment already available within HighLevel. A simplified customer journey can look like this:
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A TYPICAL AI EMPLOYEE JOURNEY</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Lead contacts business → Voice AI or Conversation AI responds → AI uses configured instructions and Knowledge Base information → Lead is qualified → Appointment is offered or booked → Contact information is stored in the CRM → Workflow performs the next action → Human takes over when escalation is required
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The exact workflow depends on the features and configuration used. HighLevel's documentation confirms that Conversation AI can collect lead information, answer questions, assist with appointment booking, and support workflows, and that Voice AI can answer calls, qualify leads, schedule appointments, and perform actions such as transfers and follow-up.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE KEY POINT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                AI does not automatically create a perfect business process. The quality of the outcome depends on the agent's instructions, the Knowledge Base, the configured actions, the calendar, the workflow logic, the escalation rules, testing, and ongoing monitoring.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#5C6880]" />
                <span className="text-sm font-bold text-[#5C6880]">INFOGRAPHIC PLACEHOLDER</span>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong>The GoHighLevel AI Employee Customer Journey</strong>
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Suggested flow diagram: Lead contact → Voice/Conversation AI → Knowledge Base + instructions → Qualify → Book → CRM → Workflow → Human escalation
              </p>
            </div>

            {/* Section 4: Voice AI */}
            <h2 id="voice-ai" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Is GoHighLevel Voice AI?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Direct answer:</strong> GoHighLevel Voice AI is an AI-powered voice agent that can handle phone conversations, qualify callers, answer questions, schedule appointments, send follow-up messages, and transfer calls to a human when configured to do so. HighLevel currently supports inbound and outbound Voice AI, as well as Voice AI widget usage.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Instead of requiring a team member to answer every call, a business can configure a GoHighLevel Voice AI agent to handle defined parts of the conversation.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What can GoHighLevel Voice AI do?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Depending on the configuration, GoHighLevel Voice AI can answer inbound calls, make outbound calls, answer frequently asked questions, collect caller information, qualify leads, schedule appointments, send SMS follow-ups, trigger workflows, transfer calls to human representatives, and use a configured Knowledge Base to answer business-specific questions. HighLevel's current Voice AI documentation specifically describes answering calls, qualifying leads, scheduling appointments, providing information, and performing follow-up actions.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Can GoHighLevel Voice AI book appointments?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes. When appointment booking is configured and connected to an appropriate calendar, GoHighLevel Voice AI can use the calendar during the conversation to help schedule appointments. This is particularly useful where the phone call itself is part of the sales or booking process. The exact booking behaviour depends on the calendar and agent configuration.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Can GoHighLevel Voice AI transfer calls?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes. GoHighLevel Voice AI can be configured to transfer calls to a human representative when a particular condition, intent, or escalation requirement is met. Good AI implementation is not about keeping the AI in every conversation, it is about knowing when the AI should stop. A well-designed Voice AI system has clear escalation rules for complex questions, sensitive conversations, high-value leads, requests outside the AI's knowledge, frustrated customers, and situations requiring human judgment.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What phone numbers does GoHighLevel Voice AI support?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's current Voice AI documentation states that Voice AI works with LC Phone or Twilio numbers. Because telephony requirements and supported configurations can change, check the current Voice AI documentation and account settings before implementing a production system.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What are the limitations of GoHighLevel Voice AI?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel Voice AI should not be treated as a replacement for human judgment. Potential limitations include misunderstanding unclear speech, background noise, unusual questions, complex negotiations, emotional conversations, missing or outdated Knowledge Base information, poorly configured escalation, and industry-specific compliance requirements. The solution is not simply to make the prompt longer, a better implementation combines Knowledge Base, clear instructions, defined actions, escalation, testing, and monitoring.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED SERVICE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL Scale Up configures Voice AI call handling: <Link href="/services/ai-voice-agent" className="text-[#0E9BF0] hover:underline">AI Voice Agent & Call Handling →</Link>
              </p>
            </div>

            {/* Section 5: Conversation AI */}
            <h2 id="conversation-ai" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Is GoHighLevel Conversation AI?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Direct answer:</strong> GoHighLevel Conversation AI is HighLevel's AI-powered tool for automating text-based conversations with contacts across supported communication channels. It can respond to messages, collect information, answer questions, assist with appointment booking, and support lead qualification and workflows.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Supported channels can include SMS, Facebook, Instagram, WhatsApp, Live Chat, Chat Widget, and Email. Channel availability and configuration can change, so the current HighLevel settings should be checked before implementation.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What can GoHighLevel Conversation AI do?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A configured GoHighLevel Conversation AI bot can respond to inbound messages, answer frequently asked questions, collect contact information, qualify leads, assist with appointment booking, continue conversations based on conversation history, trigger or participate in workflows, escalate conversations to humans, and use Knowledge Bases to provide business-specific information. Conversation AI can also process voice notes or audio messages on supported channels by transcribing the audio and generating a response.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">A realistic GoHighLevel Conversation AI example</h3>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">EXAMPLE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Imagine a dental clinic receives a message at 9:30 PM: "How much does teeth whitening cost and do you have appointments this week?" A properly configured GoHighLevel Conversation AI bot could recognise the inquiry, retrieve the relevant business information, answer the pricing question according to the configured Knowledge Base, ask qualifying questions if necessary, check appointment availability, help the contact book, and store the interaction in the CRM. The important part is not merely the AI response, it is the entire customer journey around the response.
              </p>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED SERVICE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL Scale Up configures multi-channel Conversation AI: <Link href="/services/ai-chatbot" className="text-[#0E9BF0] hover:underline">AI Chatbot & Conversation AI →</Link>
              </p>
            </div>

            {/* Section 6: Voice vs Conversation */}
            <h2 id="voice-vs-conversation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. GoHighLevel Voice AI vs Conversation AI
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The simplest distinction is: GoHighLevel Voice AI handles phone conversations, and GoHighLevel Conversation AI handles text conversations. The difference becomes more useful when you think about customer behaviour. Some customers call; others prefer to message. For businesses that receive both calls and messages, GoHighLevel Voice AI and Conversation AI can complement each other rather than being competing products.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requirement</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Better Fit</th>
                  </tr>
                </thead>
                <tbody>
                  {voiceVsConversation.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.requirement}</td>
                      <td className="py-3 px-3 font-medium text-[#0E9BF0]">{item.betterFit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 7: Workflow AI */}
            <h2 id="workflow-ai" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Is GoHighLevel Workflow AI?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Direct answer:</strong> The GoHighLevel Workflow AI Builder helps users create and edit automation workflows by describing the desired automation in natural language. Instead of manually creating every trigger and action, you can describe what you want the automation to accomplish and have HighLevel generate a workflow that you can review and modify.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">EXAMPLE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                "When a contact submits our consultation form, send an SMS, wait five minutes, check whether they responded, and create a call task if they did not." GoHighLevel Workflow AI can generate a starting workflow based on that instruction. You should still review the workflow before publishing it.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">GoHighLevel Workflow AI vs Conversation AI (frequently confused)</h3>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THESE ARE NOT THE SAME THING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Conversation AI talks to the customer. Workflow AI helps build the automation behind the customer journey. Conversation AI communicates with contacts; the Workflow AI Builder helps you create automation. They are frequently confused but do completely different jobs.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel also provides an AI Agent workflow action, which is different again: it can use an AI agent inside a workflow to perform multi-step tasks based on instructions and selected tools. That action is a premium workflow action and can incur additional charges per execution, so it should not be confused with the Workflow AI Builder that simply helps you construct a workflow.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED SERVICE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL Scale Up builds GoHighLevel automations: <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">Workflow & Marketing Automation →</Link>
              </p>
            </div>

            {/* Section 8: Agent Studio */}
            <h2 id="agent-studio" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. What Is Agent Studio in GoHighLevel?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Agent Studio should be treated separately from the standard AI Employee subscription. Agent Studio is HighLevel's environment for creating and configuring more advanced AI agents. HighLevel's current pricing documentation states that Agent Studio is not included in the AI Employee subscription plans and remains pay-per-use.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This distinction matters because it is easy to assume that every AI-related feature in HighLevel is automatically included in the $50 or $97 AI Employee plan. It is not. When evaluating Agent Studio, check the current pricing and usage information because the cost depends on the AI capabilities and models used.
            </p>

            {/* Section 9: Knowledge Base */}
            <h2 id="knowledge-base" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. The GoHighLevel Knowledge Base
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The Knowledge Base is one of the most important components of a reliable GoHighLevel AI implementation. A GoHighLevel Knowledge Base provides AI agents with business-specific information they can use when responding to customers. HighLevel supports attaching Knowledge Bases to Conversation AI and Voice AI. Conversation AI can use multiple Knowledge Bases, while Voice AI currently supports one Knowledge Base per agent.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What should you put in a GoHighLevel AI Knowledge Base?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Useful information includes services, product information, pricing or pricing rules, business hours, locations, service areas, FAQs, policies, cancellation rules, payment information, common objections, qualification information, and appointment information. The information should be specific, current, consistent, and easy to retrieve. Avoid vague or contradictory information.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How do you reduce incorrect GoHighLevel AI answers?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You cannot eliminate the possibility of an incorrect AI response simply by adding more content. Instead: give the agent reliable source information, separate different types of information clearly, define what the AI should do when it does not know an answer, configure escalation rules, test real customer questions, review conversations, and update the Knowledge Base when business information changes.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel also provides Knowledge Base triggers for Conversation AI, allowing specific Knowledge Base content to be activated based on defined conditions. This allows businesses to create more controlled AI behaviour around areas such as pricing, qualification, objections, booking, and product information.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">FROM GHL SCALE UP EXPERIENCE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                In our implementation work, more AI problems trace back to a weak Knowledge Base than to any other single cause. Before configuring an agent, we recommend documenting your FAQs, pricing rules, and objections thoroughly, then defining exactly what the agent should say when it does not know an answer, so it escalates cleanly instead of guessing.
              </p>
            </div>

            {/* Section 10: Setup */}
            <h2 id="setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. How to Set Up GoHighLevel AI Employee
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The exact menu names can change as HighLevel updates the platform, but the implementation process generally follows this logic.
            </p>

            <ol className="space-y-3 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Step 1: Choose the AI capability</strong><br />
              Decide what you actually need to automate, phone calls, text conversations, appointment booking, review management, workflow creation, content generation, or an advanced AI agent. Do not start by enabling every AI feature. Start with the business problem.</li>
              
              <li><strong className="text-[#1A2236]">Step 2: Prepare your business information</strong><br />
              Before launching an AI agent, prepare your FAQs, services, pricing, policies, business hours, locations, qualification questions, appointment rules, and escalation rules.</li>
              
              <li><strong className="text-[#1A2236]">Step 3: Build the Knowledge Base</strong><br />
              Create the relevant Knowledge Base and connect it to the AI capability that will use it. HighLevel's current Ask AI workflow can help create a Knowledge Base from sources such as Brand Voice or a Business Profile website, and then attach it to Conversation AI or Voice AI.</li>
              
              <li><strong className="text-[#1A2236]">Step 4: Configure the AI agent</strong><br />
              Define the agent's purpose, personality, instructions, knowledge, actions, qualification questions, booking behaviour, and escalation behaviour.</li>
              
              <li><strong className="text-[#1A2236]">Step 5: Connect the required channels</strong><br />
              For example: Voice AI to a phone number, Conversation AI to selected messaging channels, and Workflow AI within the workflow builder.</li>
              
              <li><strong className="text-[#1A2236]">Step 6: Configure actions</strong><br />
              Depending on the capability, actions may include booking, contact-field updates, workflow triggers, SMS, transfers, and lead qualification.</li>
              
              <li><strong className="text-[#1A2236]">Step 7: Test before launch</strong><br />
              Test realistic conversations. Do not test only "What are your business hours?" Also test incorrect information, pricing objections, unclear questions, angry customers, requests outside the Knowledge Base, appointment changes, and human handoff.</li>
              
              <li><strong className="text-[#1A2236]">Step 8: Monitor and improve</strong><br />
              After launch, review conversations, identify unanswered questions, update Knowledge Base content, improve instructions, adjust escalation rules, and test new scenarios. GoHighLevel AI should not be treated as a set-it-and-forget-it system.</li>
            </ol>

            {/* CTA 2 - After Setup */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Want your GoHighLevel AI Employee built and tested for you?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up handles strategy, Knowledge Base, agent configuration, escalation logic, testing, and optimization.
              </p>
              <Link href="/services/ai-voice-agent" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                See Our AI Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 11: Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              11. GoHighLevel AI Employee Pricing
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's current AI pricing documentation lists three AI billing options. HighLevel states that AI Employee Growth and AI Employee Unlimited are billed monthly per enabled location, while Pay-Per-Use has no monthly AI subscription fee.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Current Price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">General Structure</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.structure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What is included in AI Employee Growth?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Current HighLevel documentation lists, among other allocations: 1,000 Conversation AI agent responses per month, 100 Voice AI agent minutes per month, unlimited Reviews AI, unlimited Content AI, included usage for Ask AI, included usage for AI Studio, included Funnel AI, included Workflow AI, and included Email AI. Once included usage limits are reached, additional usage can move to applicable pay-per-use rates depending on the billing configuration.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What is included in AI Employee Unlimited?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The current documentation lists: unlimited Conversation AI, unlimited Voice AI, unlimited Reviews AI, unlimited Content AI, unlimited Conversation AI Prompt Optimizer, unlimited Voice AI Prompt Optimizer, included Funnel AI, included Workflow AI, included Email AI, 3x included usage for Ask AI, and 3x included usage for AI Studio. Unlimited usage remains subject to HighLevel's fair-use policy.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Is Agent Studio included in AI Employee?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              No. HighLevel's current AI Product Pricing documentation states that Agent Studio is not included in the AI Employee subscription plans and remains pay-per-use.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Are phone and SMS charges included?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not necessarily. HighLevel states that phone-system charges still apply to phone calls even when Voice AI is covered under AI Employee Unlimited. SMS and other communication-system charges should also be evaluated separately from the AI subscription. Before pricing an AI implementation for a client, calculate AI subscription plus communication usage plus other applicable usage plus agency margin, rather than looking only at the $50 or $97 AI subscription.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE PER-LOCATION DETAIL THAT SURPRISES AGENCIES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                AI Employee Growth and Unlimited are billed per enabled location (sub-account), not once per agency. Ten locations on AI Employee Unlimited is roughly $970/month, on top of your platform plan and separate phone/SMS usage. Model the per-location cost against each client's real call and message volume before you set resale pricing.
              </p>
            </div>

            {/* Section 12: For Agencies */}
            <h2 id="for-agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              12. GoHighLevel AI Employee for Agencies
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel AI Employee becomes particularly interesting for agencies because AI can be configured at the sub-account/location level. Agencies can enable AI Employee access for individual sub-accounts and can configure AI Employee rebilling. HighLevel currently states that AI Employee rebilling can be enabled in Agency Settings and that the agency needs the $497/month platform plan to rebill AI Employee usage with markup.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">AI Employee as a client service</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              An agency can offer Voice AI setup, AI receptionist implementation, Conversation AI, lead qualification, appointment-booking automation, Knowledge Base setup, AI workflow automation, and AI monitoring and optimization. The value is not simply reselling access, it is the strategy, configuration, testing, optimization, and monitoring around it.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Can agencies sell AI agents as templates?</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel currently supports Marketplace publishing for Conversation AI and Voice AI templates. Agencies can package an agent's prompts and, where appropriate, associated assets such as workflows, calendars, custom fields, and Knowledge Base configuration. This is useful for agencies that want to standardise repeatable AI implementations across similar clients.
            </p>

            {/* Section 13: Workflows */}
            <h2 id="workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              13. Four Practical GoHighLevel AI Employee Workflows
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">Workflow 1: Missed call to appointment</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Caller → GoHighLevel Voice AI → answer questions → qualify lead → check calendar → book appointment → CRM update → confirmation SMS. This is a strong use case for businesses where missed calls directly affect lead generation.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">Workflow 2: Website lead to appointment</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Website form/chat → GoHighLevel Conversation AI → answer questions → collect information → qualify lead → book appointment → workflow follow-up. This reduces the delay between a visitor expressing interest and receiving a response.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">Workflow 3: Social message to qualified lead</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Instagram/Facebook/WhatsApp message → GoHighLevel Conversation AI → answer question → qualification → appointment → CRM → human sales follow-up if necessary. This is useful when customers prefer messaging instead of phone calls.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">Workflow 4: AI-assisted workflow automation</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  Form submitted → workflow starts → AI analyses the context → workflow branches based on the result → personalized action → human notification if required. HighLevel also supports an AI Agent workflow action for multi-step tasks using selected tools, which is separate from the Workflow AI Builder and can incur additional charges per execution.
                </p>
              </div>
            </div>

            {/* Section 14: Benefits */}
            <h2 id="benefits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              14. Benefits of GoHighLevel AI Employee
            </h2>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Faster lead response:</strong> AI can respond to supported customer inquiries without a team member manually answering every message.</li>
              <li><strong className="text-[#1A2236]">24/7 customer communication:</strong> Voice AI and Conversation AI can handle configured interactions outside normal business hours.</li>
              <li><strong className="text-[#1A2236]">Appointment automation:</strong> AI can assist with booking during conversations when the relevant calendar functionality is configured.</li>
              <li><strong className="text-[#1A2236]">Reduced repetitive work:</strong> businesses can automate repetitive questions, lead qualification, booking, and review-related activities.</li>
              <li><strong className="text-[#1A2236]">Centralized CRM context:</strong> because these capabilities operate within HighLevel, AI-driven communication connects with the CRM, calendars, and workflows where supported.</li>
              <li><strong className="text-[#1A2236]">Better scalability:</strong> a business can handle additional routine conversations without increasing headcount at the same rate.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              However, the actual business impact depends heavily on lead volume, call volume, response requirements, AI configuration, knowledge quality, conversion rate, and the human escalation process. There is no universal percentage of work that AI Employee will automate for every business.
            </p>

            {/* Section 15: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              15. Limitations of GoHighLevel AI Employee
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel AI Employee is powerful, but it is not a replacement for human judgment.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">AI can give incorrect answers:</strong> poor or outdated source information can result in incorrect responses.</li>
              <li><strong className="text-[#1A2236]">AI struggles with complex situations:</strong> sensitive, emotional, legal, medical, financial, or highly customized conversations may require human involvement.</li>
              <li><strong className="text-[#1A2236]">Poor configuration produces poor results:</strong> a powerful model cannot compensate for weak instructions, bad Knowledge Base content, poor qualification logic, missing escalation rules, incorrect workflows, or insufficient testing.</li>
              <li><strong className="text-[#1A2236]">Voice AI has additional challenges:</strong> voice conversations can be affected by audio quality, background noise, speech clarity, unusual phrasing, and call interruptions.</li>
              <li><strong className="text-[#1A2236]">AI requires ongoing maintenance:</strong> businesses change, prices change, services change, and policies change; if the AI's information does not change with the business, its answers become outdated.</li>
              <li><strong className="text-[#1A2236]">Compliance remains the business's responsibility:</strong> businesses should evaluate consent, outbound calling, call recording, privacy, customer data, and industry-specific regulations. AI automation does not remove those responsibilities.</li>
            </ul>

            {/* Section 16: Which to Use */}
            <h2 id="which-to-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              16. Which GoHighLevel AI Capability Should You Use?
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Use GoHighLevel Voice AI if</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              your business receives many phone calls, you miss calls, you receive after-hours calls, appointment booking happens primarily by phone, and lead qualification can be handled through defined questions.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Use GoHighLevel Conversation AI if</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              leads contact you through messaging, you receive website chats or social messages, you want faster text responses, and lead qualification can happen through messaging.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Use GoHighLevel Workflow AI if</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              you are building workflows, you want to create automations faster, and you want AI to generate a workflow structure from a natural-language description.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Use Agent Studio if</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              you need to create more advanced AI agents, you need greater agent-level customization, and you are comfortable with usage-based AI costs.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Use a combination if</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              your business receives leads through multiple channels. For example, Voice AI plus Conversation AI plus Workflows can cover phone, messaging, CRM, booking, and follow-up. The right setup depends on the actual customer journey rather than the number of AI features available.
            </p>

            {/* Section 17: Vs Other Tools */}
            <h2 id="vs-other-tools" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              17. GoHighLevel AI Employee vs Other AI Tools
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is no universal winner. The right option depends on what you are trying to build.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel AI Employee</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Specialist AI Voice/Chat Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">General AI Assistant</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.specialist}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.general}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel AI Employee is particularly attractive when the business already uses HighLevel and wants customer communication, CRM, calendars, and automation in one environment. A specialist AI platform may be a better fit when the primary requirement is highly specialized voice or agent functionality. A general AI assistant is better suited to open-ended research, writing, and reasoning than to acting as a complete CRM-integrated customer communication system.
            </p>

            {/* Section 18: Who Should Use */}
            <h2 id="who-should-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              18. Who Should Use GoHighLevel AI Employee?
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">A strong fit if</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>You already use HighLevel.</li>
              <li>Your business receives regular calls or messages.</li>
              <li>Your team spends significant time answering repetitive questions.</li>
              <li>You want automated appointment booking and faster lead response.</li>
              <li>You have enough volume to justify AI subscription or usage costs.</li>
              <li>You are willing to invest in proper setup and testing.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Consider starting with Pay-Per-Use if</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>AI usage is currently low, or you are testing whether AI fits your business.</li>
              <li>You have very few calls or conversations, or want to measure usage before committing to a subscription.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">AI Employee may not be the right first step if</h3>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Almost every customer interaction requires human judgment.</li>
              <li>Your business information is not documented, or your team is unwilling to monitor AI conversations.</li>
              <li>You do not have clear escalation processes, or your expected AI usage is extremely low.</li>
            </ul>

            {/* Section 19: How Much Automate */}
            <h2 id="how-much-automate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              19. How Much Can GoHighLevel AI Employee Actually Automate?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is no single percentage that applies to every business. A dental clinic, real estate agency, HVAC company, law firm, SaaS company, and marketing agency have completely different customer journeys. A better question is: which repetitive parts of the customer journey are predictable enough to automate safely?
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h4 className="text-sm font-bold text-[#25C97D] mb-2">Good candidates include</h4>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  {goodCandidates.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h4 className="text-sm font-bold text-[#DC3545] mb-2">Poor candidates include</h4>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  {poorCandidates.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The goal should not be maximum automation. The goal should be appropriate automation.
            </p>

            {/* Section 20: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              20. Frequently Asked Questions About GoHighLevel AI Employee
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

            {/* Section 21: Final Recommendation */}
            <h2 id="final-recommendation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              21. Final Recommendation: Is GoHighLevel AI Employee Worth Using?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel AI Employee is most valuable when it is treated as an automation system, not simply as a chatbot or AI receptionist. Voice AI can handle phone conversations, Conversation AI can handle text conversations, Workflow AI can accelerate automation building, Knowledge Bases provide business-specific information, workflows continue the customer journey, and human escalation handles situations where AI should not make the final decision.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most successful implementation is therefore not 'turn on AI and let it handle everything.' It is: document the business, build the Knowledge Base, define the customer journey, configure the AI, add actions, define escalation, test, monitor, and improve.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before choosing a plan, calculate your actual expected usage and review the current HighLevel pricing documentation. AI Employee is currently offered through Pay-Per-Use, Growth, and Unlimited options, while some capabilities, including Agent Studio, are billed separately. If you are new to GoHighLevel AI, start with one clearly defined use case, for example "answer after-hours calls and book qualified leads." Build that system properly, test it, measure the outcome, then expand into additional AI capabilities once the first workflow is reliable.
            </p>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Want GoHighLevel AI Employee implemented properly, not just switched on?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds the system behind the AI: Knowledge Base, Voice AI, Conversation AI, workflows, escalation, testing, and optimization.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles & Services</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/ai-voice-agent" className="text-sm text-[#0E9BF0] hover:underline">AI Voice Agent & Call Handling Service →</Link>
                <Link href="/services/ai-chatbot" className="text-sm text-[#0E9BF0] hover:underline">AI Chatbot & Conversation AI Service →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">Workflow & Marketing Automation Service →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up helps businesses and agencies implement GoHighLevel CRM, automation, Voice AI, Conversation AI, and related AI systems. Our approach focuses on the implementation behind the AI, not simply turning features on: AI strategy, Knowledge Base setup, Voice AI and Conversation AI configuration, workflow automation, lead qualification, appointment booking, escalation logic, testing, and ongoing optimization. The objective is to build an AI system that fits the actual customer journey and business process.
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
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">AI Implementation Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need AI Employee Setup?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We configure Voice AI, Conversation AI, Knowledge Base, and escalation logic — so your AI system actually works, not just turns on.</p>
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