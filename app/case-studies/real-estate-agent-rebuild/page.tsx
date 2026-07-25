// app/case-studies/real-estate-agent-rebuild/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  Play, 
  Quote, 
  User, 
  Building2, 
  Settings2, 
  Clock, 
  Mail, 
  Phone, 
  Calendar, 
  Database, 
  BarChart3, 
  CheckCircle, 
  ThumbsUp,
  TrendingUp,
  Users,
  PhoneCall,
  MessageSquare,
  Zap,
  Target,
  Shield,
  Smartphone,
  Globe,
  Bot,
  FileText,
  GraduationCap,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GoHighLevel for Real Estate Agents: Full Rebuild Case Study | GHL Scale Up',
  description: 'See how GHL Scale Up fixed broken email/SMS delivery and rebuilt a real estate GoHighLevel account funnel, calendar, CRM, and AI voice agents.',
  keywords: 'gohighlevel for real estate agents, real estate crm automation, ai voice agent for real estate, a2p 10dlc registration real estate, real estate lead reactivation ai, gohighlevel real estate case study',
  openGraph: {
    title: 'GoHighLevel for Real Estate Agents: Complete Account Rebuild',
    description: 'From broken automations to an AI voice receptionist system - a complete GoHighLevel rebuild for a real estate agent',
    type: 'article',
    url: 'https://www.ghlscaleup.com/case-studies/real-estate-agent-rebuild',
  }
};

export default function RealEstateCaseStudyPage() {
  return (
    <article className="min-h-screen bg-white">
      <HeroSection />
      <ClientSummary />
      <ShortVersion />
      <ChallengeSection />
      <RebuildSection />
      <AutomationStackSection />
      <InsideReactivationWorkflow />
      <ResultsSection />
      <TestimonialSection />
      <WhyThisMattersSection />
      <FAQSection />
      <CTASection />
    </article>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a365d] via-[#2d4a7a] to-[#1a365d] text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 md:w-96 h-64 md:h-96 bg-[#4299e1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-64 md:w-96 h-64 md:h-96 bg-[#2b6cb0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#3182ce] rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 border border-white/10">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#f6ad55] rounded-full animate-pulse"></span>
            Case Study
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
            GoHighLevel for Real Estate Agents:{' '}
            <span className="text-[#f6ad55] block sm:inline">A Complete Account Rebuild</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100/90 max-w-3xl mx-auto mb-4 md:mb-6 font-light">
            From Broken Automations to an AI Voice Receptionist System
          </p>
          
          <p className="text-base md:text-lg text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
            A full GoHighLevel rebuild for a U.S. real estate agent deliverability fixed, 
            a niche-focused website, a rebuilt lead funnel, working calendars, complete CRM 
            pipelines, and a multi-agent AI voice automation system now handling thousands 
            of real calls a month.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== CLIENT SUMMARY ====================
function ClientSummary() {
  const stats = [
    { icon: User, label: 'Client', value: 'Confidential', sub: 'Real Estate Agent' },
    { icon: Building2, label: 'Industry', value: 'Residential Real Estate', sub: 'New Construction Specialist' },
    { icon: Settings2, label: 'Engagement', value: 'End-to-End Rebuild', sub: 'Account Audit & AI Build' },
    { icon: Clock, label: 'Reporting Window', value: '17 Days', sub: 'Live Dashboard Snapshot' },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#3182ce]/20 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ebf8ff] rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#3182ce] transition-colors duration-300">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#3182ce] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-base md:text-lg font-semibold text-gray-900">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-600">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SHORT VERSION ====================
function ShortVersion() {
  return (
    <section className="py-12 md:py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-[#ebf8ff] to-[#e6f7ff] border-l-4 border-[#3182ce] p-4 md:p-8 rounded-r-xl shadow-sm">
          <div className="absolute -top-3 -left-3 bg-[#3182ce] text-white rounded-full p-1.5 md:p-2">
            <Quote className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="pl-2 md:pl-4">
            <p className="text-sm md:text-lg text-gray-800 leading-relaxed">
              <span className="font-semibold text-[#1a365d]">This real estate agent's GoHighLevel account looked complete but wasn't functioning:</span> 
              outbound emails were silently failing, SMS couldn't legally send, the lead funnel wasn't converting, 
              the booking calendar was misconfigured, and a growing contact database had no system working it at all. 
              <span className="font-semibold text-[#3182ce]"> GHL Scale Up audited the account, rebuilt every broken system end-to-end, 
              repositioned the business around a focused niche, and layered in a three-agent AI voice automation system 
              now placing thousands of real calls a month.</span>
            </p>
          </div>
        </div>
        
        <p className="text-gray-600 mt-6 text-center max-w-3xl mx-auto text-sm md:text-base">
          This case study covers the full rebuild deliverability, website, funnels, calendars, CRM, core automations, 
          and the AI voice agent system plus real performance data pulled from the live GoHighLevel dashboard.
        </p>
      </div>
    </section>
  );
}

// ==================== CHALLENGE SECTION ====================
function ChallengeSection() {
  const challenges = [
    {
      icon: Mail,
      title: "Issue 1 Email Deliverability Failure",
      description: "Outbound emails from the account were failing with a 'Forbidden' error and never reaching contacts. Every automated follow-up, confirmation, and nurture email was silently failing leads were going cold without the agent ever knowing a message hadn't sent."
    },
    {
      icon: Phone,
      title: "Issue 2 Incomplete A2P 10DLC SMS Registration",
      description: "A2P 10DLC is the carrier-level registration U.S. mobile networks require before a business can reliably send text messages from a 10-digit local number. This agent's registration was incomplete, which meant every SMS workflow missed-call text-back, appointment reminders, follow-up sequences was non-functional at the carrier level, not just misconfigured inside GoHighLevel."
    },
    {
      icon: BarChart3,
      title: "Issue 3 An Underperforming Lead Funnel",
      description: "The existing lead-generation funnel was functional but not built to convert: weak design, no trust elements, and a flow that let paid or organic traffic drop off before submitting details. For a real estate lead-generation funnel, every abandoned step is ad spend or SEO effort wasted."
    },
    {
      icon: Calendar,
      title: "Issue 4 A Broken Calendar & Booking Experience",
      description: "The booking calendar's design and availability configuration didn't reflect a professional real estate brand, and in its broken state was showing incorrect availability meaning very few leads could actually book a call during real working hours."
    },
    {
      icon: Database,
      title: "Issue 5 A Lead Database With No System Working It",
      description: "Beyond the day-to-day funnel, a large existing contact database of past inquiries and dormant leads had no reactivation process at all. Every one of those contacts represented a lead the agent had already paid to acquire, sitting unworked."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#3182ce]/10 text-[#3182ce] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              The Challenge
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] mt-2 mb-3 md:mb-4">
              A Real Estate CRM That Looked Ready but Wasn't Working
            </h2>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-3 md:p-4 rounded-r-lg max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-sm md:text-base text-gray-700 italic">
                "A real estate CRM automation system is only as good as its delivery. The account had the right structure in place, but several critical failures meant leads were never actually being followed up with."
              </p>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <challenge.icon className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{challenge.title}</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== REBUILD SECTION ====================
function RebuildSection() {
  const rebuildItems = [
    {
      number: "1",
      title: "Account Foundation & Cleanup",
      description: "Every subsequent step needed a stable base, so the rebuild started here:",
      bullets: [
        "Audited the existing sub-account and corrected broken settings",
        "Configured core account settings, business profile, branding, and user permissions",
        "Set up integrations calendar sync, payment processor, and domain connections",
        "Connected and verified the custom domain"
      ]
    },
    {
      number: "2",
      title: "Email & SMS Deliverability Fixed at the Root",
      description: "Both channels were broken at the infrastructure level, not just the workflow level, so the fix had to happen below the automations:",
      bullets: [
        "Set up a dedicated sending domain with proper SPF, DKIM, and DMARC authentication so emails land in the inbox instead of failing or landing in spam",
        "Completed A2P 10DLC brand and campaign registration so SMS sends reliably and in compliance with U.S. carrier rules",
        "Configured the business phone number correctly for both voice and SMS",
        "Tested both email and SMS channels end-to-end before go-live"
      ]
    },
    {
      number: "3",
      title: "Website Build Repositioned Around a Focused Niche",
      description: "Rather than rebuild a generic real estate site, the new website repositions the agent around a specific, high-intent niche within residential real estate: new construction. Niching down is a well-established real estate marketing strategy it reduces competition with every other local agent and lets one site speak directly to a specific buyer's questions and concerns, instead of competing on a generic 'find your dream home' message.",
      hasImage: true,
      imageSrc: "/case-study/Picture1.jpg",
      imageCaption: "The rebuilt website, repositioned around a new-construction buyer niche. Brand name, phone number, and identifying marketing copy have been redacted for client privacy.",
      extraText: "The site was built mobile-responsive with tracking and lead capture wired in throughout every page, not just the homepage."
    },
    {
      number: "4",
      title: "Service Landing Pages & Funnels",
      description: "The lead-generation funnel was rebuilt from the ground up hook, offer, lead form, and thank-you confirmation designed specifically to convert real estate traffic instead of losing it mid-flow. Additional dedicated landing pages were built per service, mapped to the agent's core offers."
    },
    {
      number: "5",
      title: "Calendars & Booking",
      description: "Booking calendars were reconfigured per service with correct availability rules and buffer times, plus automated confirmation and reminder sequences so a lead can book directly into the schedule with no back-and-forth."
    },
    {
      number: "6",
      title: "CRM & Pipelines",
      description: "Pipelines and stages were built to track exactly how a lead moves from new inquiry, to booked appointment, to closed with tags and custom fields configured so every contact stays organized and reportable."
    },
    {
      number: "7",
      title: "Core Automations & Workflows",
      description: "This is where the real estate lead follow-up system actually runs 24/7. The base automation layer covers:",
      bullets: [
        "Instant lead capture and response the moment a new inquiry comes in",
        "Missed-call text-back, so a call that can't be answered still gets an immediate reply",
        "Appointment reminders and automated no-show follow-up",
        "Nurture sequences for leads who aren't ready to book yet",
        "Automated review and reputation requests",
        "Internal notifications so nothing depends on manually checking the inbox"
      ]
    },
    {
      number: "8",
      title: "The AI Voice Receptionist System",
      description: "On top of the base automation layer, a three-agent AI voice system was built to handle the volume no solo agent could manage by phone inbound reception, outbound campaigns, and cold-lead database reactivation, each with its own script and purpose.",
      hasImage: true,
      imageSrc: "/case-study/Picture2.jpg",
      imageCaption: "The live Agent List inside GoHighLevel's AI Agents module: a dedicated inbound receptionist agent, an outbound campaign agent, and a reactivation agent, each managed and versioned independently. Phone number redacted for client privacy.",
      extraText: "The inbound agent answers calls on the agent's behalf, qualifies whether the caller is a buyer or seller, gathers contact details and intent, and either books an appointment directly or confirms a prompt follow-up built on a GPT-4.1 conversational model with a natural voice profile, background-noise cancellation, and an ambient sound setting so the call feels like a real front desk rather than a robotic IVR.",
      hasImage2: true,
      imageSrc2: "/case-study/Picture3.jpg",
      imageCaption2: "The inbound voice agent's build screen model, voice, and noise-cancellation settings, plus a live web-call testing panel used before deployment. Script content (which includes business-identifying details) has been redacted.",
      extraText2: "A second agent handles outbound campaign calling, and a third the reactivation agent is purpose-built to work through the existing contact database, calling leads who have gone quiet and re-opening the conversation instead of leaving them to sit cold indefinitely."
    },
    {
      number: "9",
      title: "Email & SMS Templates",
      description: "Branded, reusable email and SMS templates for confirmations, reminders, follow-ups, and nurture written once, ready to use and edit from day one."
    },
    {
      number: "10",
      title: "Handoff & Training",
      description: "A clean, fully documented, modular build handed over with a walkthrough session so the system runs independently, with no ongoing dependency on GHL Scale Up unless further support is wanted."
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#3182ce]/10 text-[#3182ce] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              The Rebuild
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] mt-2 mb-3 md:mb-4">
              A Complete GoHighLevel System Built for Real Estate
            </h2>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-3 md:p-4 rounded-r-lg max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-sm md:text-base text-gray-700 italic">
                "GHL Scale Up didn't patch individual issues the account was rebuilt end-to-end so deliverability, the website, funnels, the calendar, the CRM, and automation all work as one connected system instead of a set of separate fixes."
              </p>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            {rebuildItems.map((item, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#3182ce] to-[#2b6cb0] text-white rounded-xl flex items-center justify-center font-bold text-base md:text-lg">
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <h4 className="text-lg md:text-xl font-semibold text-[#1a365d] mb-2 md:mb-3">{item.title}</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">{item.description}</p>
                    
                    {item.bullets && (
                      <ul className="space-y-1.5 md:space-y-2 mt-2 md:mt-3">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#3182ce] mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {item.hasImage && (
                      <div className="mt-4">
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
                          <Image
                            src={item.imageSrc || "/placeholder-image.jpg"}
                            alt={item.imageCaption || "Case study image"}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 800px"
                          />
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 mt-2 italic">{item.imageCaption}</p>
                        {item.extraText && (
                          <p className="text-sm md:text-base text-gray-600 mt-3">{item.extraText}</p>
                        )}
                      </div>
                    )}
                    
                    {item.hasImage2 && (
                      <div className="mt-4">
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
                          <Image
                            src={item.imageSrc2 || "/placeholder-image.jpg"}
                            alt={item.imageCaption2 || "Case study image"}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 800px"
                          />
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 mt-2 italic">{item.imageCaption2}</p>
                        {item.extraText2 && (
                          <p className="text-sm md:text-base text-gray-600 mt-3">{item.extraText2}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AUTOMATION STACK SECTION ====================
function AutomationStackSection() {
  const workflows = [
    {
      name: "Database Reactivation → Automated Voice AI Call → Cold Leads",
      status: "Published",
      totalEnrolled: 1262,
      active: 17
    },
    {
      name: "Inbound Lead → Getting Appointment Booked",
      status: "Published",
      totalEnrolled: 705,
      active: 437
    },
    {
      name: "Appointment Booked Reminders",
      status: "Published",
      totalEnrolled: 19,
      active: 0
    },
    {
      name: "Missed Call SMS Alert → Send SMS to User",
      status: "Published",
      totalEnrolled: 9,
      active: 9
    },
    {
      name: "12-Month Dormant Drip",
      status: "Published",
      totalEnrolled: 0,
      active: 0
    },
    {
      name: "30-Day No Response Nurture",
      status: "Published",
      totalEnrolled: 0,
      active: 0
    },
    {
      name: "GMB Reviews",
      status: "Draft",
      totalEnrolled: 0,
      active: 0
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#3182ce]/10 text-[#3182ce] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Automation Stack
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] mt-2 mb-3 md:mb-4">
              The Automation Stack Behind the System
            </h2>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-3 md:p-4 rounded-r-lg max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-sm md:text-base text-gray-700 italic">
                "The AI voice agents don't run in isolation they're triggered and supported by a full workflow stack, covering everything from the first inbound call to a year-long dormant-lead drip."
              </p>
            </div>
            
            {/* Automation List Image */}
            <div className="max-w-3xl mx-auto mb-6 md:mb-8">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/case-study/Picture4.jpg"
                  alt="The live automations list for the account, showing publish status and real enrollment counts pulled directly from GoHighLevel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 800px"
                />
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-2 italic text-center">
                The live automations list for the account, showing publish status and real enrollment counts pulled directly from GoHighLevel. Account title redacted for client privacy.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-[600px] md:min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">Workflow</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-semibold text-gray-700">Total Enrolled</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-semibold text-gray-700">Active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {workflows.map((workflow, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900 font-medium">{workflow.name}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm">
                        <span className={`inline-flex items-center px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold ${
                          workflow.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {workflow.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900 text-right font-semibold">
                        {workflow.totalEnrolled.toLocaleString()}
                      </td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900 text-right">
                        <span className={`font-semibold ${
                          workflow.active > 0 ? 'text-[#3182ce]' : 'text-gray-400'
                        }`}>
                          {workflow.active}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-[#ebf8ff] to-[#e6f7ff] border border-[#3182ce]/20 rounded-xl p-4 md:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#3182ce] text-white rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1a365d] mb-1 text-base md:text-lg">Database Reactivation Highlight</h4>
                <p className="text-sm md:text-base text-gray-700">
                  The headline number here is the database reactivation workflow: <span className="font-bold text-[#3182ce] text-lg md:text-xl">1,262</span> previously cold contacts have been enrolled into an automated sequence that places a voice AI call, listens for a response, and branches the conversation based on what the lead says a workload that would take a solo agent weeks to work manually by phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== INSIDE REACTIVATION WORKFLOW ====================
function InsideReactivationWorkflow() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] text-center mb-4 md:mb-6">
            Inside the Reactivation Workflow
          </h2>
          
          <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            The database reactivation workflow follows a branching call-and-wait structure: it places the AI voice call, checks whether the contact responds or confirms interest, and branches down different paths depending on the outcome re-attempting later, tagging the lead as interested, or handing off for human follow-up repeating the cycle across multiple wait/retry stages rather than a single one-shot call.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/case-study/Picture5.jpg"
                alt="The workflow builder view of the database reactivation automation a branching sequence of AI voice calls, conditional checks, and timed retry steps"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-2 italic text-center">
              The workflow builder view of the database reactivation automation a branching sequence of AI voice calls, conditional checks, and timed retry steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== RESULTS SECTION ====================
function ResultsSection() {
  const metrics = [
    { 
      label: "Attempted calls", 
      value: "7,105", 
      description: "Total outbound AI voice calls placed in 17 days"
    },
    { 
      label: "Connected calls", 
      value: "5,471", 
      description: "77% of attempted calls connected"
    },
    { 
      label: "Human answered", 
      value: "1,339", 
      description: "19% of all attempts reached a live person"
    },
    { 
      label: "Voicemail", 
      value: "4,132", 
      description: "58% of attempts landed in voicemail"
    },
    { 
      label: "No answer", 
      value: "466", 
      description: "7% of attempts"
    },
    { 
      label: "Failed", 
      value: "1,168", 
      description: "16% of attempts (carrier/technical failures)"
    },
    { 
      label: "Actions triggered", 
      value: "59", 
      description: "Bookings/handoffs triggered by call outcome"
    },
    { 
      label: "Sentiment", 
      value: "97% positive", 
      description: "Of conversations with a live person"
    },
    { 
      label: "Unattempted calls", 
      value: "214", 
      description: "Remaining in queue at time of snapshot"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#3182ce]/10 text-[#3182ce] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              The Results
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] mt-2 mb-3 md:mb-4">
              Real Performance Data from the Live Dashboard
            </h2>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-3 md:p-4 rounded-r-lg max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-sm md:text-base text-gray-700 italic">
                "Pulled directly from the live GoHighLevel AI Agents dashboard for a recent 17-day window actual call volume and outcomes, not projections."
              </p>
            </div>
          </div>
          
          {/* Results Dashboard Image */}
          <div className="max-w-3xl mx-auto mb-6 md:mb-8">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/case-study/Picture6.jpg"
                alt="Outbound AI voice performance dashboard, a recent 17-day window: 7,105 attempted calls, 5,471 connected, 97% positive sentiment"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-2 italic text-center">
              Outbound AI voice performance dashboard, a recent 17-day window: 7,105 attempted calls, 5,471 connected, 97% positive sentiment.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mb-6 md:mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-[500px] md:min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">Metric</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">Value</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">What it means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {metrics.map((metric, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium text-gray-900">{metric.label}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-semibold text-[#3182ce]">{metric.value}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600">{metric.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Percentages above are calculated directly from the dashboard's own totals (each figure sums to the 7,105 attempted calls shown). Alongside this, deliverability that previously failed outright now authenticates and sends, SMS workflows are carrier-compliant following A2P 10DLC completion, the rebuilt funnel is live, and the calendar reflects correct availability instead of the original broken configuration.
            </p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-6">
            <p className="text-sm md:text-base text-gray-700">
              <span className="font-semibold">📌 ADD ONCE AVAILABLE:</span> revenue or appointment outcomes tied to the 59 triggered actions, and an updated snapshot once the 12-Month Dormant Drip and 30-Day No Response Nurture workflows both live but not yet enrolling contacts have run for a full cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIAL SECTION ====================
function TestimonialSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#1a365d] to-[#2d4a7a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12 text-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-white/10">
                <Quote className="w-12 h-12 md:w-20 md:h-20" />
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border-2 border-white/20 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">▶ VIDEO TESTIMONIAL PLACEHOLDER</h3>
            
            <p className="text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Embed the client video testimonial here once recorded. If the client wants to remain anonymous on camera too, consider voice-only, silhouette, or an on-screen text testimonial instead.
            </p>
            
            <div className="w-16 md:w-20 h-1 bg-[#f6ad55] mx-auto mt-6 md:mt-8 mb-4 md:mb-6"></div>
            
            <p className="text-blue-200/60 text-xs md:text-sm italic">
              *Add a short captioned pull-quote beneath the video once available, for AEO/GEO extractability.*
            </p>
            
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-blue-200/70 text-xs md:text-sm">
                [INSERT PULL-QUOTE FROM TESTIMONIAL ONCE AVAILABLE keep phrasing generic if the client wants to stay unnamed, e.g. "a Florida real estate agent" rather than a full name.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== WHY THIS MATTERS SECTION ====================
function WhyThisMattersSection() {
  const points = [
    "Deliverability is invisible until it's tested. A 'Forbidden' email error or an incomplete A2P 10DLC registration doesn't throw a loud alarm it just means leads quietly never hear back.",
    "A2P 10DLC is not optional for U.S. real estate SMS. Any agent sending text follow-ups from a 10-digit local number must complete carrier registration or messages will not deliver.",
    "A niche-focused website converts better than a generic one. Speaking to one specific buyer situation beats competing on a generic message.",
    "A cold database is not a dead database. An AI voice reactivation workflow can work through thousands of old leads at a volume no solo agent could match by hand.",
    "Different call jobs deserve different agents. Inbound reception, outbound campaigns, and reactivation calling all have different scripts and goals."
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#3182ce]/10 text-[#3182ce] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Key Takeaways
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] mt-2 mb-3 md:mb-4">
              Why This Matters for Other Real Estate Agents
            </h2>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-3 md:p-4 rounded-r-lg max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-sm md:text-base text-gray-700 italic">
                "The failures in this account are common, not unusual most real estate agents running GoHighLevel have at least one of these issues without realizing it."
              </p>
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {points.map((point, index) => (
              <div key={index} className="group bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#3182ce] hover:border-[#2b6cb0]">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#ebf8ff] rounded-full flex items-center justify-center group-hover:bg-[#3182ce] transition-colors duration-300">
                    <span className="text-[#3182ce] group-hover:text-white font-bold text-xs md:text-sm">•</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ SECTION ====================
function FAQSection() {
  const faqs = [
    {
      question: "Why do GoHighLevel emails sometimes fail to send?",
      answer: "Emails typically fail when the sending domain lacks proper SPF, DKIM, and DMARC authentication, or when the domain's reputation triggers a rejection from the receiving server. A 'Forbidden' error usually means the domain isn't correctly authenticated to send on the platform's behalf, and needs to be reconfigured and re-verified."
    },
    {
      question: "What is A2P 10DLC and why does a real estate agent need it?",
      answer: "A2P 10DLC (Application-to-Person 10-Digit Long Code) is the U.S. carrier registration system that verifies a business before allowing it to send text messages from a standard local number. Real estate agents sending SMS follow-ups, appointment reminders, or missed-call text-backs to U.S. leads need a completed registration, or carriers will filter or block the messages entirely."
    },
    {
      question: "What is an AI voice agent for real estate?",
      answer: "An AI voice agent is software that answers or places phone calls using a conversational AI model and a natural-sounding voice, following a structured script to qualify leads, answer common questions, and book appointments functioning as a 24/7 front desk or outbound caller for an agent's business."
    },
    {
      question: "How does AI lead reactivation work for a real estate database?",
      answer: "A reactivation workflow automatically calls contacts who have gone cold typically leads that haven't responded in months using an AI voice agent to reopen the conversation, gauge interest, and either book a follow-up or route the contact back into a nurture sequence, all without manual dialing."
    },
    {
      question: "Is it legal to use AI for outbound real estate calls?",
      answer: "Outbound AI and automated calling in the U.S. is subject to consent and do-not-call rules that vary by call type and jurisdiction. Agents should confirm their own compliance requirements (including consent practices for contacts being called) with a qualified professional before scaling outbound AI calling this is general information, not legal advice."
    },
    {
      question: "What automations should a real estate agent set up first in GoHighLevel?",
      answer: "Instant lead response and missed-call text-back deliver the fastest return, since real estate inquiries are highly time-sensitive. Appointment reminder and no-show follow-up sequences, a review-request automation, and once volume justifies it an AI voice agent for inbound qualification or database reactivation typically follow next."
    },
    {
      question: "How much does a GoHighLevel setup cost for a real estate agent?",
      answer: "Setup costs vary by scope. A full end-to-end rebuild deliverability fixes, website, funnels, calendars, CRM, automations, and AI voice agents is typically a one-time project investment, often paired with an optional ongoing monthly maintenance plan. [Confirm final published pricing language before publishing.]"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#3182ce]/10 text-[#3182ce] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] mt-2 mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-sm md:text-base font-semibold text-[#1a365d] pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 text-[#3182ce] group-open:rotate-180 transition-transform duration-300">
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3 md:pt-4">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CTA SECTION ====================
function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d] via-[#2d4a7a] to-[#1a365d]"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 md:w-96 h-64 md:h-96 bg-[#4299e1] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-64 md:w-96 h-64 md:h-96 bg-[#2b6cb0] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#3182ce] rounded-full filter blur-3xl opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6 border border-white/10">
            Ready to Transform Your Real Estate Business
          </span>
          
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Want a GoHighLevel System That Actually Works for Your Real Estate Business?
          </h2>
          
          <p className="text-base md:text-xl text-blue-100/90 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            GHL Scale Up audits, fixes, and rebuilds GoHighLevel accounts for real estate agents and agencies from deliverability and A2P compliance to funnels, calendars, full automation, and AI voice agents.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#1a365d] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#2d4a7a] text-white font-semibold rounded-xl hover:bg-[#1a365d] transition-all duration-300 text-base md:text-lg border-2 border-white/20 hover:border-white/40 transform hover:-translate-y-0.5"
            >
              Book a Call
            </Link>
          </div>
          
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-blue-200/70 text-xs md:text-sm">
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#f6ad55]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#f6ad55]" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#f6ad55]" />
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}