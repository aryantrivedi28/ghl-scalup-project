'use client';

import Link from 'next/link';
import Image from 'next/image';
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
  Database,
  MessageCircle,
  Brain,
  Settings,
  AlertCircle,
  Clock,
  Calendar,
  Star,
  FileText,
  Webhook,
  FormInput,
  Phone,
  CreditCard,
  Info,
  ExternalLink,
  MessagesSquare
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function ConversationAIDataStorageClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-it-does',
        'key-distinction',
        'what-saves',
        'capture-clean-data',
        'workflows-webhooks',
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

  // Handle TOC click with smooth scroll
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
      q: "Does GoHighLevel Conversation AI automatically save lead data to the CRM?",
      a: "Partially. GoHighLevel Conversation AI automatically creates a contact record and logs the full conversation transcript when someone messages your bot. However, specific data points like name, email, phone, or custom fields are only saved to structured CRM fields if you explicitly configure the bot to ask for them and map the responses. Casual information mentioned in conversation is stored in the chat log but does not become a queryable CRM field without additional setup."
    },
    {
      q: "What data does GoHighLevel Conversation AI capture by default?",
      a: "By default, GHL Conversation AI creates a contact from the first interaction (using the phone number or email channel identifier) and stores the full conversation history on that contact record. It will also apply tags and update pipeline stages if you have configured the bot to do so. Name, email, phone, and any custom fields are only captured if the bot prompt explicitly instructs the bot to ask for and map those fields."
    },
    {
      q: "Why is my GHL AI bot having conversations but not saving data to contact fields?",
      a: "This is the most common configuration issue. The bot stores conversation history automatically, but structured field data only saves if you have mapped the bot's collected answers to specific GHL contact fields in the bot configuration. Open your Conversation AI bot settings, review the prompt, and confirm that you have explicitly told the bot to ask for each field and specified which GHL field it maps to. Then test with a live conversation and check the contact record."
    },
    {
      q: "Can GHL Conversation AI capture payment information?",
      a: "No. GHL Conversation AI cannot capture or process payment information. Payments require a dedicated GHL order form or invoice connected to Stripe. The correct workflow is: AI qualifies the lead and books or directs them to a payment page. The payment confirmation then triggers a workflow to update the contact record, tag the contact as a paying customer, and initiate the onboarding sequence."
    },
    {
      q: "Does GoHighLevel Voice AI also save data to the CRM?",
      a: "Yes, and in some ways more thoroughly than Conversation AI. GHL Voice AI transcribes the full call and logs it to the contact record. It can also trigger workflows and update custom fields based on the call outcome. Using Voice AI Custom Actions, the agent can even call webhooks mid-conversation to push or pull data from external systems in real time. Voice AI call data is stored alongside the transcript and is accessible from the contact record."
    },
    {
      q: "What is the best way to capture structured data from a GHL AI conversation?",
      a: "The most reliable architecture is: (1) use Conversation AI to qualify the lead and collect basic fields (name, email, phone) by mapping them explicitly in the bot prompt, (2) direct the lead to a short GHL form for any additional structured data (service type, location, appointment preferences), and (3) configure a post-conversation workflow to update the pipeline stage, apply tags, and enrol the contact in the appropriate follow-up sequence based on their answers. This keeps your CRM data clean and your automations reliable."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-it-does', title: '1. What GoHighLevel Conversation AI Does (and Doesn\'t) Save' },
    { id: 'key-distinction', title: '2. The Key Difference: Conversation History vs Structured CRM Fields' },
    { id: 'what-saves', title: '3. What Actually Gets Saved and What Doesn\'t' },
    { id: 'capture-clean-data', title: '4. How to Capture Clean Data from AI Conversations' },
    { id: 'workflows-webhooks', title: '5. When to Use Workflows and Webhooks Instead' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const savesData = [
    'Full conversation transcript (visible in contact record)',
    'Name, email, phone IF bot is explicitly prompted to ask and map',
    'Appointment booking (if connected to GHL calendar)',
    'Contact created automatically from first message',
    'Tag applied by bot (if configured in prompt)',
    'Custom field updated IF field mapping is set up in bot config',
  ];

  const notSavesData = [
    'Casually mentioned info not mapped to a field',
    'Specific preferences or details mentioned in passing',
    'Payment details or transaction data',
    'Complex intake data (service type, location, property size, etc.)',
    'Calculated or inferred data points',
    'Data requiring validation or conditional logic',
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
          <span className="text-[#1A2236] font-medium">Does GHL Conversation AI Save Data to CRM?</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Conversation AI</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Data</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">AI Chatbot Setup</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Does GoHighLevel Conversation AI Save Data to Your CRM?<br />
            <span className="text-[#F8D000]">(2026 Answer)</span>
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            It's one of the most common questions we see in the GoHighLevel community:
            if a lead chats with my AI bot and gives their name and email, does that actually
            get saved? The answer is yes but only partially, and only if you've set things
            up correctly. Here's the full breakdown.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Yes, GoHighLevel Conversation AI can save data to your CRM but it depends entirely on how you configure it.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                If you explicitly train the bot to ask for and map specific fields (name, email, phone), that data gets written to the contact record.
                Casual information mentioned in conversation does not automatically become structured CRM data. Conversation history is stored,
                but it is not the same as a clean, queryable contact field. For anything beyond basic lead capture payments, detailed service
                preferences, complex intake data you need workflows or webhooks.
              </p>
            </div>

            {/* Reddit  Origin Section - With Screenshots */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF4500]/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <MessagesSquare className="w-6 h-6 text-[#FF4500]" />
                  <span className="text-[#FF4500] text-sm font-bold uppercase tracking-wider">Origin Story</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">This Answer Started on Reddit</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  A GHL user asked this exact question on r/GoHighLevel. GhlScaleUp replied with
                  the detailed answer below and the response resonated with hundreds of users who
                  were silently struggling with the same misunderstanding about how Conversation AI
                  handles data.
                </p>

                {/* Screenshot 1 - Question */}
                <div className="mb-5">
                  <p className="text-white/50 text-xs mb-2 flex items-center gap-2">
                    <MessageCircle className="w-3 h-3" />
                    The question from the community:
                  </p>
                  <div className="bg-[#0B1628] rounded-xl p-4 border border-[#2A3F5F] overflow-hidden">
                    <Image
                      src="/reddit-question.png"
                      alt="Reddit question about GHL Conversation AI data storage"
                      width={800}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Screenshot 2 - Answer */}
                <div className="mb-5">
                  <p className="text-white/50 text-xs mb-2 flex items-center gap-2">
                    <Brain className="w-3 h-3" />
                    Our team leader's response (the answer that became this guide):
                  </p>
                  <div className="bg-[#0B1628] rounded-xl p-4 border border-[#2A3F5F] overflow-hidden">
                    <Image
                      src="/reddit-answer.png"
                      alt="GHL Scale Up team leader answering the question on Reddit"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Reddit Link */}
                <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-[#2A3F5F]">
                  <p className="text-white/40 text-xs">
                    This blog post expands on that Reddit answer with step-by-step setup instructions.
                  </p>
                  <a
                    href="https://www.reddit.com/r/gohighlevel/comments/1t3atjo/comment/ojttbiz/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FF4500] text-sm font-semibold hover:gap-3 transition-all"
                  >
                    View the original Reddit thread
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
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

            {/* Section 1: What It Does */}
            <h2 id="what-it-does" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What GoHighLevel Conversation AI Does (and Doesn't) Save
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel Conversation AI is <strong className="text-[#1A2236]">not a passive listener</strong> that stores everything said in a conversation.
              It is an active system that executes the instructions you give it in the bot prompt. What gets saved to your CRM depends entirely
              on what you have explicitly told the bot to collect.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The bot runs inside the GHL Conversations inbox. It can send messages, qualify leads, ask questions, and book appointments.
              <strong className="text-[#1A2236]"> Everything the bot does is logged as a conversation thread on the contact record.</strong>
              That thread is visible, searchable, and part of the contact's history.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              But a conversation thread is <strong className="text-[#1A2236]">not the same as a structured CRM field.</strong> And this distinction
              is where most GHL users run into problems.
            </p>

            {/* Section 2: Key Distinction */}
            <h2 id="key-distinction" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. The Key Difference: Conversation History vs Structured CRM Fields
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the most important concept in this entire article. Understanding it saves hours of debugging.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#0E9BF0]">Conversation History</h3>
                </div>
                <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                  When your GHL AI bot talks to a lead, <strong>every message is stored as a conversation log</strong> on the contact's record.
                </p>
                <p className="text-sm text-[#1A2236] leading-relaxed">
                  <strong className="text-[#0E9BF0]">What it is:</strong> Permanent, searchable context for your team.<br />
                  <strong className="text-[#DC3545]">What it is NOT:</strong> A structured data field. You cannot filter contacts by something mentioned in a conversation or trigger automation based on a phrase said in chat.
                </p>
              </div>
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5 text-[#25C97D]" />
                  <h3 className="text-base font-bold text-[#25C97D]">Structured CRM Fields</h3>
                </div>
                <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                  Structured fields live on the main contact record: name, email, phone, custom fields, tags, pipeline stage.
                </p>
                <p className="text-sm text-[#1A2236] leading-relaxed">
                  <strong className="text-[#25C97D]">What they are:</strong> Queryable, actionable data points that power your automations.<br />
                  <strong className="text-[#DC3545]">How data gets there:</strong> Bot must be configured to map answers to fields, or a workflow/webhook pushes data after the conversation.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE CORE ISSUE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Most GHL users assume the AI is 'intelligent enough' to recognise that a lead mentioned their email address and save it automatically.
                <strong className="text-[#1A2236]"> It does not work this way.</strong> The AI stores the conversation. It does not extract and file data
                without instructions. If you want a field populated, you have to tell the bot to ask for it and map it or use a workflow to extract it afterwards.
              </p>
            </div>

            {/* Section 3: What Saves / What Doesn't */}
            <h2 id="what-saves" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Actually Gets Saved and What Doesn't
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  What GHL Conversation AI DOES save
                </h3>
                <ul className="space-y-2">
                  {savesData.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#DC3545] mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  What it does NOT save automatically
                </h3>
                <ul className="space-y-2">
                  {notSavesData.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-5 h-5 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">2026 UPDATE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                As of early 2026, GHL Conversation AI now retains full conversation history across multiple sessions.
                If a lead texted three weeks ago and returns, <strong>the bot remembers the prior context</strong> and responds accordingly.
                This is a significant improvement for lead nurturing but it still does not mean that prior conversation data becomes
                structured CRM fields automatically. Context memory and field data are separate systems.
              </p>
            </div>

            {/* Section 4: How to Capture Clean Data */}
            <h2 id="capture-clean-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How to Capture Clean Data from AI Conversations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The best architecture for most GHL setups: use the AI to start and qualify the conversation, then push structured data
              through a form or workflow at the point of conversion.
            </p>

            <div className="space-y-5 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Method 1: Configure the bot to ask and map specific fields</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
                  In your Conversation AI bot prompt, explicitly instruct the bot to ask for specific information and map the response to a GHL contact field.
                </p>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                  <li>Write: 'Ask the contact for their full name. Map this to the First Name and Last Name fields.'</li>
                  <li>Do the same for email and phone. Be explicit the bot follows your instructions literally.</li>
                  <li>For custom fields, create them in GHL first, then reference by name in the prompt.</li>
                  <li>Test with a real conversation before going live.</li>
                </ul>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FormInput className="w-5 h-5 text-[#25C97D]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Method 2: Use a post-conversation form</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  After the AI qualifies the lead, it books them or directs them to a short intake form.
                  <strong className="text-[#1A2236]"> The form submission is what populates your structured CRM fields cleanly.</strong>
                  This is the most reliable method for anything beyond name, email, and phone because forms force structured input
                  and GHL maps form fields to contact fields natively.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-[#F8D000]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Method 3: Workflow to extract and write data</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  If a lead mentions specific information in a conversation, you can configure a workflow that triggers when that conversation ends
                  and uses an AI step or webhook to extract key details and update custom fields. This requires more technical setup but gives you the most flexibility.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">GHL Scale Up</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                For agencies running this type of setup for clients, this is something we configure regularly at
                <strong className="text-white"> GHL Scale Up (ghlscaleup.com)</strong>. If your AI conversations are happening but the data
                isn't landing cleanly in your CRM, this is usually a configuration issue not a platform limitation.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free 30-minute audit and we'll show you exactly what's missing
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Section 5: Workflows and Webhooks */}
            <h2 id="workflows-webhooks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. When to Use Workflows and Webhooks Instead
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For more complex data capture needs beyond name, email, and phone workflows and webhooks are the right tool, not the bot prompt alone.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Use a workflow when:</h3>
                </div>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                  <li>You need to trigger automation based on what the lead said</li>
                  <li>You want to update custom fields after the conversation with conditional logic</li>
                  <li>You need to assign the contact to a team member based on conversation outcome</li>
                  <li>You want to enrol the lead in a follow-up sequence depending on their answers</li>
                </ul>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Webhook className="w-5 h-5 text-[#25C97D]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Use a webhook when:</h3>
                </div>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                  <li>You need to push conversation data to an external CRM, spreadsheet, or database</li>
                  <li>You need real-time data exchange during the conversation</li>
                  <li>You need to validate or enrich data using a third-party API</li>
                  <li>You're connecting GHL to another system (Salesforce, HubSpot, Airtable)</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE BOTTOM LINE</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                <strong className="text-white">AI conversations are the entry point, not the data store.</strong> Use the AI to engage, qualify,
                and create the contact. Use forms, workflows, or webhooks to ensure the data from that conversation lands in the right fields
                structured, clean, and actionable. The bot trail tells the story. The CRM fields power the automation.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → For the full guide on building GHL workflows: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation for Beginners →</Link>
            </p>

            {/* Section 6: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              6. Frequently Asked Questions
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
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: How It Works + Full Setup →</Link>
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/services/ai-chatbot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Chatbot Setup →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">GHL conversations happening but data not landing in your CRM?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  This is a configuration issue, not a platform limitation. We audit GHL accounts and fix these setups every week.
                  Book a free 30-minute call and we'll show you exactly what's missing in your Conversation AI configuration.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free GHL Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
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
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
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
                5+ years GHL experience · 200+ systems built globally. We've configured Conversation AI across dozens of industries.
                Everything we publish comes from real accounts, not documentation summaries.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2">
              <div className="text-sm font-bold text-white mb-2">AI Conversations Not Saving Data?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We fix GHL Conversation AI configurations every week. Let's audit your setup.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
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