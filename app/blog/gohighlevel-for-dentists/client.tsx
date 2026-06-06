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
  XCircle
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelForDentistsClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'two-system-model',
        'patient-pipeline',
        'automations-roi',
        'tools-replaces',
        'hipaa-compliance',
        'right-for-practice',
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
      q: "Is GoHighLevel good for dental practices?",
      a: "Yes, particularly for dental practices running paid patient acquisition, dealing with high no-show rates, or wanting to systematically build Google reviews. GoHighLevel automates the marketing layer of a dental practice: new patient inquiry follow-up within 60 seconds, 3-step appointment reminder sequences that reduce no-shows by 30 to 40%, 6-month recall campaigns, and post-visit Google review requests. It does not replace clinical practice management software like Dentrix or Eaglesoft. It runs alongside it as the patient growth and communication layer."
    },
    {
      q: "Does GoHighLevel replace Dentrix or Eaglesoft?",
      a: "No. Dentrix, Eaglesoft, Curve Dental, and Open Dental handle clinical records, insurance billing, treatment planning, and appointment scheduling within the clinical system. GoHighLevel handles the marketing layer: new patient inquiry capture, missed call text-back, appointment reminders via SMS and email, recall campaigns for lapsed patients, and Google review requests. The two systems run alongside each other. Patient contact data (name, email, phone, last visit date) is typically imported from the practice management system into GHL via CSV export."
    },
    {
      q: "Is GoHighLevel HIPAA compliant for dental practices?",
      a: "Not by default. GoHighLevel offers a HIPAA-compliant add-on at an additional $297/month that includes a Business Associate Agreement, encrypted data handling, and audit logging. Most dental practices use GHL only for pre-clinical marketing communications (new patient inquiries, appointment reminders, and review requests) which does not involve storing Protected Health Information. In this configuration, HIPAA exposure is typically low. However, always consult your compliance officer before using any third-party platform in a healthcare setting."
    },
    {
      q: "Can GoHighLevel replace Weave or Podium for dental practices?",
      a: "For most of the functionality dentists use Weave and Podium for, yes. Weave ($400 to $600/mo) and Podium ($299 to $499/mo) primarily handle patient SMS communication, missed call text-back, appointment reminders, and Google review requests. GoHighLevel covers all of these at $97/month. The trade-off: Weave integrates more deeply with some dental practice management systems natively, which GHL does not do out of the box. The contact data bridge between GHL and Dentrix or Eaglesoft is currently a CSV import process rather than a live integration."
    },
    {
      q: "How does GoHighLevel help dental practices get more Google reviews?",
      a: "Two hours after an appointment is marked complete in GoHighLevel, an automated SMS sends to the patient with a direct link to the practice's Google review page. A busy practice doing 20 appointments per day can generate 200 to 400 new Google reviews per year from this single workflow with no manual action from the front desk. A dental practice going from 60 to 200 Google reviews typically sees a 15 to 25% increase in new patient calls from Google Maps for the same ad spend."
    },
    {
      q: "How do dental recall campaigns work in GoHighLevel?",
      a: "A recall campaign in GHL uses the patient's last visit date (imported from your practice management system) to trigger a reminder sequence when the patient is approaching their 6-month or annual checkup window. At 5.5 months, GHL sends an SMS: 'It's almost time for your check-up book your preferred time here.' If the patient does not book within 7 days, a follow-up sends. This sequence typically converts 15 to 25% of contacted patients into booked appointments. For lapsed patients (18+ months without a visit), a reactivation campaign with a returning patient offer converts a portion of dormant contacts into revenue."
    },
    {
      q: "Can GHL Scale Up set up GoHighLevel for my dental practice?",
      a: "Yes. GHL Scale Up builds complete GoHighLevel systems for dental practices and dental marketing agencies: patient CRM pipeline, missed call text-back, appointment reminder sequences, 6-month recall campaigns, Google review automation, and new patient acquisition funnel. Most single-location dental setups are live in 5 to 7 business days. Book a free strategy call and we will walk through the right configuration for your practice size and patient acquisition model."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'two-system-model', title: '1. How Does GoHighLevel Fit Into a Dental Practice? (The Two-System Model)' },
    { id: 'patient-pipeline', title: '2. What Does a GHL Dental Patient Pipeline Look Like?' },
    { id: 'automations-roi', title: '3. Which Automations Deliver the Highest ROI for Dental Practices?' },
    { id: 'tools-replaces', title: '4. What Tools Does GoHighLevel Replace for Dental Practices?' },
    { id: 'hipaa-compliance', title: '5. What About HIPAA Compliance for Dental Practices?' },
    { id: 'right-for-practice', title: '6. Is GoHighLevel Right for Your Dental Practice?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const pipelineStages = [
    { stage: 'New Inquiry', meaning: 'Prospect submitted form, called, or clicked ad', automation: 'Instant SMS within 60 seconds. Email within 2 minutes. Both with booking link.' },
    { stage: 'Contacted', meaning: 'Follow-up sent, awaiting response', automation: 'If no response in 4 hours: second SMS. If no response in 24 hours: third touchpoint.' },
    { stage: 'Consultation Booked', meaning: 'Appointment in the calendar', automation: 'Confirmation SMS. 72-hour reminder. 24-hour reminder. 2-hour reminder.' },
    { stage: 'Treatment Accepted', meaning: 'Patient agreed to a treatment plan', automation: 'Welcome sequence. Pre-treatment prep information. Payment link if applicable.' },
    { stage: 'Treatment Complete', meaning: 'Appointment marked done in practice system', automation: 'Review request SMS fires 2 hours after completion.' },
    { stage: 'Active Patient', meaning: 'Returning regularly', automation: '6-month recall reminder. Annual reminder. Educational content.' },
    { stage: 'Lapsed Patient', meaning: 'No visit in 12 to 18 months', automation: 'Reactivation campaign. Special offer for returning patients.' },
  ];

  const toolComparison = [
    { tool: 'Weave', purpose: 'Patient communication, SMS, phone system', cost: '$400 to $600/mo', ghl: 'GHL missed call text-back, SMS, booking' },
    { tool: 'Podium', purpose: 'Google reviews and SMS messaging', cost: '$299 to $499/mo', ghl: 'GHL reputation management' },
    { tool: 'Mailchimp', purpose: 'Email marketing to patient list', cost: '$30 to $79/mo', ghl: 'GHL email campaigns' },
    { tool: 'Calendly or Acuity', purpose: 'Online appointment booking', cost: '$12 to $20/mo', ghl: 'GHL booking calendar' },
    { tool: 'Birdeye', purpose: 'Review monitoring and responses', cost: '$299 to $499/mo', ghl: 'GHL reputation management' },
  ];

  const automationsList = [
    { title: 'Missed call text-back', roi: 'Fastest payback', desc: 'When a call goes unanswered, GHL fires an automatic SMS within 60 seconds. Recovering leads before they call a competitor.' },
    { title: 'Google review requests', roi: 'Highest-ROI long-term', desc: 'Two hours after appointment complete, automated review request sends. 200 to 400 new reviews per year from busy practice.' },
    { title: 'Appointment reminder sequences', roi: 'No-show reduction', desc: '3-step reminder sequence (72hr, 24hr, 2hr) reduces no-shows by 30 to 40% in most practices.' },
    { title: '6-month recall campaigns', roi: 'Revenue recovery', desc: 'Triggers at 5.5 months to send recall reminder. Recovers 15 to 25% of patients who would otherwise drift away.' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel for Dentists 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Dental Practice</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL for Dentists</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Dental Marketing</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel for Dentists:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide for Dental Practices</span>
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
            Most dental practices have the same problem: the front desk is handling calls during treatment hours, 
            new patient inquiries sit unanswered for hours, recall patients go months without contact, and Google 
            reviews accumulate slowly despite hundreds of satisfied patients. None of these are clinical problems. 
            They are systems problems. <strong className="text-white"> GHL Scale Up</strong> has built GoHighLevel 
            systems for dental practices and dental marketing agencies.
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
                GoHighLevel handles the marketing layer of a dental practice: new patient lead capture, missed call text-back, appointment reminders, recall campaigns, and Google review requests.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GHL Starter at <strong className="text-[#0E9BF0]">$97/month</strong> replaces Weave ($400/mo), Podium ($300/mo), Mailchimp ($30/mo), 
                and a separate booking tool ($20/mo), saving most single-location practices <strong className="text-[#0E9BF0]">$650 to $750 per month</strong> 
                on tools that do not connect to each other.
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

            {/* Section 1: Two-System Model */}
            <h2 id="two-system-model" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. How Does GoHighLevel Fit Into a Dental Practice? (The Two-System Model)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most important thing to understand first: <strong className="text-[#1A2236]">GoHighLevel does not replace your practice management software.</strong> 
              Dentrix, Eaglesoft, Curve Dental, and Open Dental handle patient records, insurance billing, clinical notes, treatment planning, and appointment scheduling 
              inside your clinical system. These are your operational backbone and GHL does not touch them.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel handles what practice management software does not cover well: the marketing layer. Everything that happens before a patient sits in the chair 
              (capturing the inquiry, following up within seconds, booking the appointment, sending reminders) and everything that happens after (collecting Google reviews, 
              running recall campaigns, reactivating dormant contacts).
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4">
                <h3 className="text-base font-bold text-[#0E9BF0] mb-2">Practice management software</h3>
                <p className="text-sm text-[#1A2236] leading-relaxed">Dentrix, Eaglesoft, Curve Dental, Open Dental</p>
                <ul className="space-y-1 mt-2 text-sm text-[#1A2236] list-disc list-inside">
                  <li>Patient clinical records and charting</li>
                  <li>Insurance billing and treatment planning</li>
                  <li>Appointment scheduling within clinical system</li>
                  <li>Clinical compliance and patient consent forms</li>
                  <li>Treatment notes and care plans</li>
                  <li>Insurance claims and payment processing</li>
                </ul>
              </div>
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-base font-bold text-[#25C97D] mb-2">GoHighLevel</h3>
                <p className="text-sm text-[#1A2236] leading-relaxed">Marketing and patient communication layer</p>
                <ul className="space-y-1 mt-2 text-sm text-[#1A2236] list-disc list-inside">
                  <li>New patient inquiry capture from website, ads, Google</li>
                  <li>Instant SMS and email follow-up to new inquiries</li>
                  <li>Missed call text-back within 60 seconds</li>
                  <li>Appointment reminder sequences (72hr, 24hr, 2hr)</li>
                  <li>6-month and 18-month recall campaigns</li>
                  <li>Post-visit Google review requests</li>
                  <li>Patient reactivation for dormant contacts</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For dental agencies managing multiple practice clients, GHL's sub-account architecture puts each practice in its own isolated workspace. 
              For the full multi-client setup guide: 
              <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Agencies →</Link>
            </p>

            {/* Section 2: Patient Pipeline */}
            <h2 id="patient-pipeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Does a GHL Dental Patient Pipeline Look Like?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A GHL pipeline for dental practices mirrors the patient journey from first inquiry to long-term patient relationship.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Pipeline stage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Automated action triggered</th>
                  </tr>
                </thead>
                <tbody>
                  {pipelineStages.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.stage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.automation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE STAGE THAT RECOVERS THE MOST REVENUE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Lapsed Patient reactivation. Every dental practice has a database of patients who have not been in for 12 to 24 months. 
                That list is revenue sitting dormant. A GHL reactivation campaign (a simple 3-message sequence over 2 weeks) typically 
                converts 15 to 25% of contacted lapsed patients into booked appointments. For a practice with 300 lapsed patients, 
                that is 45 to 75 appointments from a database that was generating zero revenue.
              </p>
            </div>

            {/* Section 3: Automations ROI */}
            <h2 id="automations-roi" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Which Automations Deliver the Highest ROI for Dental Practices?
            </h2>

            <div className="space-y-4 mb-6">
              {automationsList.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-base font-bold text-[#1A2236]">{item.title}</h3>
                    <span className="text-xs font-semibold text-[#25C97D] bg-[rgba(37,201,125,0.1)] px-2 py-1 rounded-full">{item.roi}</span>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                → For the full setup guide on missed call text-back: 
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Missed Call Text Back →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                → Google review automation is handled through GHL's 
                <Link href="/services/reputation-management" className="text-[#0E9BF0] hover:underline ml-1">reputation management service →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                → For building these workflows correctly: 
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
              </p>
            </div>

            {/* Section 4: Tools Replaces */}
            <h2 id="tools-replaces" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Tools Does GoHighLevel Replace for Dental Practices?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tool dentists commonly pay for</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it does</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GHL equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {toolComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.tool}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.purpose}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cost}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-[#DDE1E9] bg-[#F8F9FB]">
                    <td className="py-3 px-3 font-bold text-[#1A2236]">Total</td>
                    <td className="py-3 px-3"></td>
                    <td className="py-3 px-3 font-bold text-[#DC3545]">$1,040 to $1,697/mo</td>
                    <td className="py-3 px-3 font-bold text-[#0E9BF0]">GoHighLevel Starter: $97/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE INTEGRATION ADVANTAGE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The cost saving is real. The bigger gain is eliminating the gaps between tools. When a new patient fills in a form on your website at 7pm, 
                Mailchimp cannot trigger an SMS, Podium cannot book the appointment, and Calendly cannot send a confirmation email automatically. 
                In GHL, the form submission triggers all three in sequence: SMS within 60 seconds, booking link in the email, confirmation when they book.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full plan breakdown and usage fees: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing 2026 →</Link>
            </p>

            {/* Section 5: HIPAA */}
            <h2 id="hipaa-compliance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What About HIPAA Compliance for Dental Practices?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the most important question for any dental practice considering GoHighLevel, and it deserves a clear, honest answer.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HIPAA POSITION — READ THIS BEFORE STARTING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                <strong className="text-[#1A2236]">GoHighLevel is NOT HIPAA compliant by default.</strong> GoHighLevel offers a HIPAA-compliant add-on at 
                an additional <strong className="text-[#1A2236]">$297/month</strong>. This add-on includes a Business Associate Agreement (BAA), 
                encrypted data handling, and audit logging required for HIPAA compliance. If your practice will store or transmit Protected Health 
                Information (PHI) through GoHighLevel, you must subscribe to this add-on and configure the platform accordingly.
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#1A2236]">Most dental practices use GHL only for pre-clinical marketing communications and do not store PHI in GHL at all.</strong> 
                New patient inquiries, appointment reminders, and review requests do not involve clinical records. In this configuration, HIPAA 
                exposure is typically low. But consult your compliance officer for your specific situation.
              </p>
            </div>

            {/* Section 6: Right for Practice */}
            <h2 id="right-for-practice" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Is GoHighLevel Right for Your Dental Practice?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> GHL is the right move for your practice if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You run Google Ads or paid patient acquisition and leads go cold due to slow follow-up</li>
                  <li>Your practice has 200 or more lapsed patients (no visit in 18+ months) to reactivate</li>
                  <li>You want to systematically increase your Google review count without manual effort</li>
                  <li>You pay for Weave, Podium, or similar tools separately and want to consolidate</li>
                  <li>You manage multiple practice locations and need one dashboard with per-location visibility</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> GHL is not the right move if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>Your practice is fully booked by referrals with no paid acquisition and no recall problem</li>
                  <li>You want to replace Dentrix or your clinical practice management software</li>
                  <li>You are not willing to invest in a proper setup (misconfigured GHL damages patient relationships)</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR DENTAL BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                The dental practice builds that deliver the fastest return are the ones that start with two things: missed call text-back and Google review requests. 
                Both are configured in a single day, require no ongoing management, and typically pay back the setup cost within the first month.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                See real results from service businesses using GHL: 
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              To discuss a setup for your practice: 
              <Link href="/contact-us" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call at ghlscaleup.com/contact-us →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Our <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM setup service</Link> includes full dental pipeline configuration, recall workflow setup, review automation, and front desk training.
            </p>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions
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
                <Link href="/blog/gohighlevel-for-real-estate" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Real Estate Agents: Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-for-coaches" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Coaches and Consultants →</Link>
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/reputation-management" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Reputation Management Service →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Want to stop losing new patient inquiries to slow follow-up?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds dental practice systems that fill appointments. Missed call text-back, appointment reminders, 
                  recall campaigns, and Google review automation all configured and tested before handover. 5 to 7 business days.
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
                5+ years GHL experience · 200+ systems built globally including dental practice marketing automation builds across the US, UK, and Australia. 
                All HIPAA information is for informational purposes only and does not constitute legal or compliance advice.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Want More New Patients?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We build dental practice systems that fill chairs. 5 to 7 business days.</p>
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

        </div> {/* ← This closes the grid */}
      </div> {/* ← This closes the container */}

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