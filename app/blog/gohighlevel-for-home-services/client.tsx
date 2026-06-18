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
  HardHat
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelForHomeServicesClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-lose-money',
        'vs-jobber',
        'core-automations',
        'trade-specific',
        'right-for-business',
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
      q: "Is GoHighLevel good for HVAC, plumbing, and roofing businesses?",
      a: "Yes, particularly for businesses losing leads to slow follow-up or missed calls. GoHighLevel automates missed call text-back, AI-qualified call answering with emergency routing, online booking, and review requests on job completion. Across multiple implementations, 30 to 45% of inbound calls are missed at home service businesses, especially during peak hours. GHL closes that specific gap. It does not replace job and field management software like ServiceTitan, Jobber, or Housecall Pro, which handle quoting, invoicing, and crew dispatching."
    },
    {
      q: "Does GoHighLevel replace Jobber or ServiceTitan?",
      a: "No. GoHighLevel and field management tools like Jobber, ServiceTitan, and Housecall Pro are complements, not competitors. Field tools manage the work you have already won: on-site quoting, invoicing, job scheduling, and crew dispatching. GoHighLevel helps win more work and keep customers coming back through lead capture, instant follow-up, AI call answering, and review automation. A native Housecall Pro integration connects job-scheduled and job-completed events directly to GHL workflows; other field tools connect via Zapier or webhooks."
    },
    {
      q: "What is the first automation a home service business should set up in GoHighLevel?",
      a: "Missed call text-back. When an inbound call goes unanswered, GHL fires an automatic SMS within seconds apologising for the missed call and offering a booking link. This is consistently the first automation deployed because of its direct, immediate revenue impact. It recovers leads that would otherwise call the next business on their list. The second priority is an automated review request that fires the moment a job is marked complete."
    },
    {
      q: "How does GoHighLevel handle emergency calls for plumbers and HVAC?",
      a: "For plumbers, AI Voice Agent answers emergency calls 24/7, captures the caller's address and the nature of the emergency, and routes the call to whoever is on call without the caller ever reaching voicemail. For HVAC, emergency keyword routing detects phrases like 'no heat' or 'AC is out' and immediately transfers the call to an on-call technician's cell phone, while routine calls (maintenance scheduling, quotes) stay in the automated booking workflow."
    },
    {
      q: "How long does it take to set up GoHighLevel for a home service business?",
      a: "A basic automation setup covering missed call text-back and a booking calendar usually takes 3 to 5 days. Advanced systems including AI call answering, emergency routing, and full review automation workflows typically take 7 to 14 days depending on business complexity and the number of service types offered. Pre-built trade-specific Snapshots can reduce this further, though customisation for branding and specific service offers is still required."
    },
    {
      q: "Is GoHighLevel worth it for a solo contractor or small trade business?",
      a: "It can be, but the calculation is different than for larger operations. GoHighLevel is genuinely powerful for 1 to 5 person teams losing leads to slow follow-up, but it requires an honest time investment: roughly 2 to 3 hours per week for the first month to learn the platform and configure automations correctly. Solo contractors who cannot dedicate that time, or whose business is already full by referral with no lead generation needs, may find a simpler standalone tool more appropriate."
    },
    {
      q: "Can GHL Scale Up set up GoHighLevel for my home service business?",
      a: "Yes. GHL Scale Up builds complete GoHighLevel systems for HVAC, plumbing, and roofing businesses: missed call text-back, AI Voice Agent with trade-specific call routing, booking calendar configuration, and automated review collection on job completion. Most starter setups are live in 5 to 7 business days. Book a free strategy call and we will map out the right system for your trade and service area."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-lose-money', title: '1. Why Do Home Service Businesses Lose Money Even With Steady Demand?' },
    { id: 'vs-jobber', title: '2. How Does GoHighLevel Relate to Jobber, ServiceTitan, and Housecall Pro?' },
    { id: 'core-automations', title: '3. The Core Automations Every Trade Needs First' },
    { id: 'trade-specific', title: '4. What Does GoHighLevel Look Like for HVAC, Plumbing, and Roofing Specifically?' },
    { id: 'right-for-business', title: '5. Is GoHighLevel Right for Your Home Service Business?' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const comparisonData = [
    { feature: 'Speed to lead', ghl: 'Responds in seconds via automated SMS', jobber: 'Not built for inbound lead response' },
    { feature: 'Quoting and invoicing on-site', ghl: 'Basic invoicing via Stripe', jobber: 'Built specifically for tap-to-quote and on-site invoicing' },
    { feature: 'Job scheduling and dispatching', ghl: 'Not built for field crew dispatch', jobber: 'Built specifically for multi-technician scheduling' },
    { feature: 'AI call answering', ghl: 'Yes — AI Voice Agent qualifies and books', jobber: 'No' },
    { feature: 'Marketing funnels and landing pages', ghl: 'Yes — full funnel builder included', jobber: 'No' },
    { feature: 'Review automation', ghl: 'Yes — fires on job completion trigger', jobber: 'Limited or none natively' },
  ];

  const coreAutomations = [
    { title: 'Missed call text-back', desc: 'When a call goes unanswered because a technician is mid-job, GHL fires an automatic SMS within seconds: "Sorry we missed your call — what can we help with?" The lead stays warm instead of dialling the next name on the list.' },
    { title: 'AI Voice Agent for call qualification and booking', desc: 'AI Voice Agent picks up calls 24/7, captures the caller\'s address and the nature of the job, and either books the appointment directly or routes urgent calls to whoever is on call.' },
    { title: 'Online booking calendar', desc: 'A booking calendar lets customers schedule service without needing to call at all, particularly valuable for routine maintenance and quote requests that do not require a live conversation.' },
    { title: 'Review request on job completion', desc: 'The moment a job is marked complete, GHL automatically fires a review request by text. This is the cheapest and most effective local marketing available to any trade business.' },
  ];

  const tradeSpecific = [
    {
      trade: 'GoHighLevel for HVAC',
      icon: <Settings className="w-5 h-5 text-[#0E9BF0]" />,
      desc: 'Emergency keyword routing. When a caller\'s words match emergency phrases like "no heat," "furnace won\'t turn on," or "AC is out," the call is transferred immediately to an on-call technician\'s cell phone. Routine calls (maintenance scheduling, quote requests) stay in the automated flow and book directly into the calendar.'
    },
    {
      trade: 'GoHighLevel for plumbers',
      icon: <Droplets className="w-5 h-5 text-[#0E9BF0]" />,
      desc: 'Emergency intake. A panicked caller at 2 AM gets picked up by AI Voice Agent, which captures the address and nature of the emergency and routes it to whoever is on call. Water heater replacement funnels, drain service follow-up sequences, and service plan upsell patterns round out the plumbing-specific automation set.'
    },
    {
      trade: 'GoHighLevel for roofers',
      icon: <HardHat className="w-5 h-5 text-[#0E9BF0]" />,
      desc: 'Storm-response SMS triggers fire automatically when a hail event is reported in the service area, paired with free-inspection booking funnels. Insurance supplement nurture sequences educate homeowners on the claims process, and post-tearoff review request automation turns every completed job into Google and Facebook social proof.'
    },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel for Home Services 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Home Services</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">HVAC · Plumbing · Roofing</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Contractor Automation</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel for HVAC, Plumbers and Roofers:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Most home service business owners do not have a lead problem. They have a follow-up problem. 
            A water heater fails at 2 AM, a homeowner Googles 'emergency plumber near me,' calls three numbers, 
            and books with whoever answers first or texts back fastest. 
            <strong className="text-white"> GHL Scale Up</strong> has built GoHighLevel systems for HVAC companies, 
            plumbing businesses, and roofing contractors.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Across multiple implementations, 30 to 45% of inbound calls are missed at home service businesses, especially during peak hours.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GoHighLevel closes that gap with instant missed-call text-back, AI-qualified emergency routing, automated booking, 
                and review requests fired the moment a job is marked complete. The average home service business takes 47 hours to respond 
                to a new lead. GHL responds in seconds. It does not replace your field management software (Jobber, ServiceTitan, Housecall Pro). 
                It is the marketing and lead-response layer that runs alongside it.
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

            {/* Section 1: Why Lose Money */}
            <h2 id="why-lose-money" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Do Home Service Businesses Lose Money Even With Steady Demand?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The problem is rarely demand. It is speed and consistency.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Across multiple implementations and real operational audits inside live CRM systems, the same issues appear repeatedly: 
              30 to 45% of inbound calls are missed, especially during peak hours when a technician is on a job and cannot answer. 
              The average home service business takes 47 hours to respond to a new lead. By which point the customer has already booked 
              with whoever responded first. Review requests get forgotten in the rush of finishing one job and starting the next, even 
              though reviews are the cheapest local marketing available to any trade business.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              None of these are demand problems. They are systems problems. A trade business doing $15,000 a month in revenue with a 
              leaky follow-up process is leaving real money on the table every single week.
            </p>

            {/* Section 2: Vs Jobber */}
            <h2 id="vs-jobber" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. How Does GoHighLevel Relate to Jobber, ServiceTitan, and Housecall Pro?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel does not replace your field management software.</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Jobber, ServiceTitan, Housecall Pro, and AccuLynx were built specifically for managing the work you have already won: 
              quoting on-site, converting quotes to invoices, scheduling and dispatching technicians, tracking who is where. They handle 
              that operational workflow extremely well. GoHighLevel does not compete with this layer.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Jobber / ServiceTitan / Housecall Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.jobber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Link2 className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE INTEGRATION THAT CONNECTS THEM</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A native Housecall Pro integration launched in 2025 connects job-scheduled and job-completed events directly to GHL workflows. 
                A job scheduled in Housecall Pro can fire a confirmation text and update the GHL CRM. A job marked complete can trigger an 
                automatic review request. New web leads captured through GHL can flow into Housecall Pro as customer records.
              </p>
            </div>

            {/* Section 3: Core Automations */}
            <h2 id="core-automations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. The Core Automations Every Trade Needs First
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Regardless of trade, four automations deliver the fastest and most consistent return. Build these before anything else.
            </p>

            <div className="space-y-4 mb-6">
              {coreAutomations.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-[#1A2236] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                → For the full setup guide on missed call text-back: 
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Missed Call Text Back →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                → AI Voice Agent service: 
                <Link href="/services/ai-voice-agent" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel AI Voice Agent service →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                → Booking calendar setup: 
                <Link href="/services/booking-setup" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel booking and calendar setup service →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                → Review automation: 
                <Link href="/services/reputation-management" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel reputation management service →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full guide on building these and other automations correctly: 
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation for Beginners →</Link>
            </p>

            {/* Section 4: Trade Specific */}
            <h2 id="trade-specific" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Does GoHighLevel Look Like for HVAC, Plumbing, and Roofing Specifically?
            </h2>

            <div className="space-y-4 mb-6">
              {tradeSpecific.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {item.icon}
                    <h3 className="text-lg font-bold text-[#1A2236]">{item.trade}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Boxes className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">PRE-BUILT SNAPSHOTS EXIST FOR ALL THREE TRADES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Trade-specific GHL Snapshots (pre-packaged copies of an entire working system) exist for HVAC, plumbing, and roofing. 
                Installing one gives a working business platform in minutes instead of weeks, though every business still needs customisation 
                for branding, service area, and specific offers. A snapshot is a starting point, not a finished system.
              </p>
            </div>

            {/* Section 5: Right for Business */}
            <h2 id="right-for-business" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Is GoHighLevel Right for Your Home Service Business?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> GHL is the right move if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You are losing leads to slow follow-up and missed calls, especially during peak job hours</li>
                  <li>You run any paid advertising and need the lead-to-booking process automated</li>
                  <li>You want consistent Google reviews without relying on staff to remember</li>
                  <li>You can dedicate 2 to 3 hours per week for the first month to learn and configure the system</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> GHL is not the right move if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You only need one specific feature (just SMS, or just a calendar)</li>
                  <li>You need enterprise-grade job and crew management</li>
                  <li>You expect it to work out of the box with no setup time</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR HOME SERVICES BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                The trade businesses that get the fastest return start with exactly two automations: missed call text-back and review requests 
                on job completion. Both are configured in a single day.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real results from service businesses using GHL: 
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss a setup for your trade: 
                <Link href="/contact-us" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call at ghlscaleup.com/contact-us →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Our full <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM setup service →</Link> includes trade-specific pipeline configuration, emergency call routing, and review automation.
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
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/blog/gohighlevel-for-dentists" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Dentists: Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-for-real-estate" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Real Estate Agents →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/services/ai-voice-agent" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Voice Agent Service →</Link>
                <Link href="/services/reputation-management" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Reputation Management Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Tired of losing jobs to slow follow-up?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds home service systems that book jobs on autopilot. Missed call text-back, AI call answering, 
                  emergency routing, booking calendar, and review automation configured for HVAC, plumbing, or roofing in 5 to 7 business days.
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
                5+ years GHL experience · 200+ systems built globally including home service automation builds across HVAC, plumbing, and 
                roofing in the US, UK, and Australia. All feature details and statistics verified as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Want to Book More Jobs?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We build home service systems that book jobs on autopilot.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Started
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