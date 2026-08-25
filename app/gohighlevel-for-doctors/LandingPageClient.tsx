"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Mail, 
  Target,
  Phone,
  Users,
  TrendingUp,
  Star,
  Play,
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  Sparkles,
  MessageCircle,
  BookOpen,
  Briefcase,
  Award,
  ThumbsUp,
  Heart,
  Globe,
  Rocket,
  DollarSign,
  FileText,
  RefreshCw,
  PhoneForwarded,
  Edit3,
  CalendarPlus,
  RotateCcw,
  UserPlus,
  BarChart3,
  MessageSquare,
  Video,
  Mic,
  LineChart,
  Link2,
  AlertCircle,
  Check,
  Users2,
  Building2,
  Activity,
  Search,
  Send,
  Smartphone,
  Headphones,
  Bot,
  Database,
  Layers,
  Settings,
  Workflow
} from 'lucide-react';
import Testimonials from '@/components/ghlscalup/Testimonials';
import CaseStudies from '@/components/ghlscalup/CaseStudies';
import { getCaseStudies } from '@/lib/caseStudiesData';

interface LandingPageClientProps {
  testimonials: any[];
}

export default function LandingPageClient({ testimonials }: LandingPageClientProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    practiceName: '',
    practiceType: '',
    biggestChallenge: '',
    currentCrm: '',
    numberOfLocations: '',
    monthlyEnquiries: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const caseStudies = getCaseStudies();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToForm = () => {
    document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const challenges = [
    'Missed calls',
    'Slow lead follow-up',
    'Leads not booking',
    'Appointment cancellations/no-shows',
    'Patient follow-up',
    'Reactivation',
    'Front-desk workload',
    'CRM/lead management',
    'Multiple disconnected systems',
    'Other',
  ];

  const faqs = [
    {
      q: 'What is GoHighLevel for doctors?',
      a: 'GoHighLevel is a CRM and marketing automation platform that can be configured to manage parts of a medical practice\'s lead, communication and appointment journey, including enquiry capture, follow-up, booking workflows, reminders and reactivation. It is not an EHR or clinical system.'
    },
    {
      q: 'Can GoHighLevel recover missed calls?',
      a: 'Yes. HighLevel\'s Missed Call Text Back can automatically send an SMS when an inbound call is missed, including after-hours calls. The workflow can then direct the conversation toward booking or human follow-up.'
    },
    {
      q: 'Can GoHighLevel automate appointment follow-up?',
      a: 'Yes. Appointment-related workflows can be configured around bookings, cancellations and other appointment statuses. Conversation AI can also assist with booking, cancellation and rescheduling when appropriately configured.'
    },
    {
      q: 'Can GoHighLevel reactivate patients?',
      a: 'It can support appropriate reactivation workflows using contact segmentation, messaging, workflows and appointment booking. The practice should determine which contacts are appropriate to contact and what communication is permitted.'
    },
    {
      q: 'Can AI talk to patients?',
      a: 'AI can be configured for administrative communication such as approved questions, information collection and appointment booking. It should not be positioned as a substitute for clinical judgment, diagnosis or treatment advice.'
    },
    {
      q: 'We already have a CRM. Do we need GHL?',
      a: 'Not necessarily. The first step is to assess your existing system and identify what is working and where workflow gaps exist. GHL may complement existing technology rather than replace it.'
    },
    {
      q: 'We already have online booking. Is GHL still useful?',
      a: 'Potentially. The value may be connecting booking to enquiry response, confirmation, reminders, cancellation, follow-up and reactivation rather than replacing the calendar itself.'
    },
    {
      q: 'Is GoHighLevel HIPAA compliant?',
      a: 'Not by default. HighLevel currently offers a paid HIPAA Compliance add-on with capabilities including ePHI encryption, BAA support, audit logging and MFA enforcement. Appropriate configuration and shared responsibilities still matter.'
    },
    {
      q: 'Does GoHighLevel replace an EHR?',
      a: 'No. It should be positioned as a marketing, communication and workflow layer rather than a clinical records system.'
    },
    {
      q: 'Will automation replace our receptionist?',
      a: 'No. The goal is to automate predictable, repetitive steps while leaving situations requiring judgment, clinical context or human interaction with your team.'
    },
    {
      q: 'Will this work with our existing software?',
      a: 'That depends on the specific platform and integration path. The current technology stack should be reviewed before recommending an implementation.'
    },
    {
      q: 'How much does it cost?',
      a: 'There isn\'t one appropriate implementation price for every practice. Scope can depend on existing systems, workflows, locations, integrations, migration, AI, reporting and training. The assessment is used to determine what actually needs to be built.'
    },
  ];

  // Workflow data with lucide-react icons
  const workflows = [
    {
      title: '1. Missed Call → Immediate Response → Booking',
      problem: "Your receptionist can't answer every call.",
      automation: 'Missed call → automatic acknowledgement → conversation → booking or staff handoff.',
      benefit: 'A missed call no longer has to depend entirely on someone remembering to return it.',
      icon: PhoneForwarded,
    },
    {
      title: '2. New Enquiry → Booking',
      problem: 'A website enquiry arrives and someone must notice it, respond, answer questions, follow up and provide a booking option.',
      automation: 'Form/enquiry → CRM → immediate response → qualification → calendar → confirmation.',
      benefit: 'The enquiry enters a defined process rather than relying on one staff member to remember every next step.',
      icon: Edit3,
    },
    {
      title: '3. Booking → Confirmation → Reminder → Reschedule',
      problem: 'Booking does not guarantee attendance; patients may forget, cancel, reschedule or not attend.',
      automation: 'Booking → confirmation → reminder → appointment; cancellation → follow-up → reschedule; no-show → follow-up → rebooking.',
      benefit: 'Staff have a defined process around the appointment.',
      icon: CalendarPlus,
    },
    {
      title: '4. Enquiry → Nurture → Booking',
      problem: 'Not every prospective patient is ready to book immediately.',
      automation: 'Enquiry → relevant follow-up → reminder → booking opportunity → human handoff when needed.',
      benefit: 'The practice can maintain structured follow-up without asking staff to remember every contact manually.',
      icon: RefreshCw,
    },
    {
      title: '5. Dormant Contact → Reactivation → Appointment',
      problem: 'Appropriate dormant leads or patient segments may sit untouched.',
      automation: 'Inactive contact → segment → relevant outreach → response → booking.',
      benefit: 'Creates a controlled process for reconnecting with appropriate existing opportunities.',
      icon: UserPlus,
    },
  ];

  // Hidden cost items with lucide-react icons
  const hiddenCosts = [
    { label: 'Marketing spend without a completed appointment', icon: DollarSign },
    { label: 'Staff time spent chasing enquiries manually', icon: Clock },
    { label: 'Open appointment capacity after cancellations', icon: Calendar },
    { label: 'Prospective patients who never receive a second response', icon: FileText },
    { label: 'Existing contacts who are never appropriately re-engaged', icon: RotateCcw },
  ];

  return (
    <>
      <Head>
        <title>GoHighLevel for Doctors & Medical Practices | GHL Scale Up</title>
        <meta
          name="description"
          content="GoHighLevel implementation for medical practices. Automate lead response, missed calls, appointments, follow-up, reviews and reactivation with GHL Scale Up."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-white font-poppins text-[#0B1421]">
        {/* ─── HEADER ─── */}
        <header className="sticky top-0 z-50 bg-[#0B1421] border-b border-[rgba(255,255,255,0.06)] px-4 md:px-8 h-16 md:h-20 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              <Image
                src="/ghlscalup.png"
                alt="GHL Scale Up"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#how-it-works" className="text-[#8A9BB0] text-sm font-medium hover:text-[#F8D000] transition-colors">How It Works</a>
            <a href="#workflows" className="text-[#8A9BB0] text-sm font-medium hover:text-[#F8D000] transition-colors">Workflows</a>
            <a href="#why-scaleup" className="text-[#8A9BB0] text-sm font-medium hover:text-[#F8D000] transition-colors">Why GHL Scale Up</a>
            <a href="#faq" className="text-[#8A9BB0] text-sm font-medium hover:text-[#F8D000] transition-colors">FAQs</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToForm}
              className="hidden md:block bg-[#F8D000] text-[#0B1421] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#FFE44D] transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Request Assessment
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 z-40 bg-[#0B1421] border-b border-[rgba(255,255,255,0.06)] py-4 px-4 shadow-xl">
            <nav className="flex flex-col gap-3">
              <a href="#how-it-works" className="text-[#8A9BB0] text-sm font-medium hover:text-[#F8D000] transition-colors py-2 px-3 hover:bg-white/5 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
              <a href="#workflows" className="text-[#8A9BB0] text-sm font-medium hover:text-[#F8D000] transition-colors py-2 px-3 hover:bg-white/5 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Workflows</a>
              <a href="#why-scaleup" className="text-[#8A9BB0] text-sm font-medium hover:text-[#F8D000] transition-colors py-2 px-3 hover:bg-white/5 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Why GHL Scale Up</a>
              <a href="#faq" className="text-[#8A9BB0] text-sm font-medium hover:text-[#F8D000] transition-colors py-2 px-3 hover:bg-white/5 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>FAQs</a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToForm();
                }}
                className="bg-[#F8D000] text-[#0B1421] px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#FFE44D] transition-all mt-2"
              >
                Request Assessment
              </button>
            </nav>
          </div>
        )}

        {/* ─── MOBILE STICKY CTA ─── */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1421]/95 backdrop-blur-xl border-t border-[rgba(255,255,255,0.06)] p-3 shadow-lg">
          <button
            onClick={scrollToForm}
            className="w-full bg-[#F8D000] text-[#0B1421] py-3 rounded-xl font-bold text-sm hover:bg-[#FFE44D] transition-all transform hover:scale-[1.02] shadow-md"
          >
            Request a Practice Automation Assessment
          </button>
        </div>

        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden px-4 py-16 md:py-20 lg:py-28 bg-[#0B1421]">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                  <span className="w-1.5 h-1.5 bg-[#F8D000] rounded-full animate-pulse" />
                  GoHighLevel for Doctors & Medical Practices
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight">
                  <span className="block text-white">Turn Missed Calls,</span>
                  <span className="block text-[#F8D000]">Unworked Enquiries</span>
                  <span className="block text-[#0E9BF0]">Into a System</span>
                </h1>

                <p className="text-[rgba(255,255,255,0.7)] text-sm md:text-base lg:text-lg max-w-lg mt-4 md:mt-6 font-light leading-relaxed">
                  Your practice may already be generating calls, website enquiries and appointment requests.
                </p>

                <p className="text-[rgba(255,255,255,0.6)] text-sm md:text-base max-w-lg mt-2 font-light leading-relaxed">
                  But what happens when the front desk is busy?
                </p>

                <div className="space-y-2 mt-4 md:mt-6">
                  <p className="text-[rgba(255,255,255,0.5)] text-xs md:text-sm font-light leading-relaxed">
                    Who follows up after a missed call? What happens when someone submits a form but doesn't book? Who contacts a patient after a cancellation? And what happens to appropriate inactive contacts sitting in your database?
                  </p>
                </div>

                <p className="text-[rgba(255,255,255,0.6)] text-sm md:text-base max-w-lg mt-3 font-light leading-relaxed">
                  GHL Scale Up builds GoHighLevel systems that connect these steps into one structured workflow for your practice.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mt-6 md:mt-8">
                  <button
                    onClick={scrollToForm}
                    className="w-full sm:w-auto bg-[#F8D000] text-[#0B1421] px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold text-sm md:text-base hover:bg-[#FFE44D] transition-all transform hover:scale-105 shadow-lg shadow-[rgba(248,208,0,0.25)]"
                  >
                    Request a Practice Automation Assessment
                  </button>
                  <a
                    href="#how-it-works"
                    className="text-[rgba(255,255,255,0.5)] text-sm font-medium hover:text-white transition-colors flex items-center gap-2"
                  >
                    See How It Works
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-[rgba(255,255,255,0.3)] text-[10px] md:text-xs mt-3 font-light">
                  20–30 minute assessment • No patient health information required
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-10 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[rgba(255,255,255,0.06)]">
                  <div>
                    <span className="block text-xl md:text-2xl lg:text-3xl font-extrabold text-[#F8D000] tracking-tight">200+</span>
                    <span className="text-[rgba(255,255,255,0.4)] text-[10px] md:text-xs font-medium uppercase tracking-wider">GoHighLevel Projects</span>
                  </div>
                  <div>
                    <span className="block text-xl md:text-2xl lg:text-3xl font-extrabold text-[#F8D000] tracking-tight">50+</span>
                    <span className="text-[rgba(255,255,255,0.4)] text-[10px] md:text-xs font-medium uppercase tracking-wider">Clients</span>
                  </div>
                  <div>
                    <span className="block text-xl md:text-2xl lg:text-3xl font-extrabold text-[#F8D000] tracking-tight">6</span>
                    <span className="text-[rgba(255,255,255,0.4)] text-[10px] md:text-xs font-medium uppercase tracking-wider">Countries</span>
                  </div>
                </div>
                <p className="text-[rgba(255,255,255,0.2)] text-[8px] md:text-[10px] mt-2 font-light max-w-md">
                  These published figures refer to GHL Scale Up's overall client/project base, not exclusively medical practices.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-[#25C97D] rounded-full" />
                    <span className="text-white text-sm font-medium">Patient Journey Workflow</span>
                  </div>
                  <div className="space-y-3">
                    {['Enquiry', 'Response', 'Booking', 'Reminder', 'Appointment', 'Follow-Up', 'Reactivation'].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[rgba(248,208,0,0.15)] border border-[rgba(248,208,0,0.2)] flex items-center justify-center text-[#F8D000] text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-1 h-10 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-lg flex items-center px-4">
                          <span className="text-[rgba(255,255,255,0.5)] text-sm font-light">{step}</span>
                        </div>
                        {i < 6 && (
                          <ArrowRight className="w-4 h-4 text-[rgba(255,255,255,0.15)] flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
            The Problem
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
            Your Practice May Be Losing<br />
            <span className="text-[#F8D000]">Opportunities Between the Steps</span>
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-8 md:mb-12">
            Getting the enquiry is only the beginning.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              'A patient calls while your receptionist is with someone else. The call is missed.',
              'Someone fills out your website form after hours. The enquiry waits until someone gets to it.',
              'A prospective patient asks a question but doesn\'t book. There is no structured follow-up.',
              'A patient cancels an appointment. The slot remains open because nobody has a defined rescheduling workflow.',
              'An appropriate inactive contact hasn\'t returned. Nobody has a consistent process for re-engagement.',
              'Your front desk handles confirmations, reminders, follow-ups, internal notifications and callbacks manually.',
            ].map((item, i) => (
              <div key={i} className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-xl p-4 md:p-5 flex items-start gap-3 md:gap-4 hover:border-[#0E9BF0] transition-all hover:shadow-md">
                <span className="text-[#F8D000] text-xs md:text-sm font-black mt-0.5 bg-[#0B1421] w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white">0{i+1}</span>
                <p className="text-xs md:text-sm text-[#4A5568] font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-[#4A5568] text-xs md:text-sm font-light mt-6 md:mt-8 max-w-2xl border-l-2 border-[#F8D000] pl-4">
            The issue isn't necessarily that your team isn't working hard enough. It may be that too much of the patient journey depends on someone remembering what to do next.
          </p>
        </section>

        {/* ─── HIDDEN COST ─── */}
        <section className="bg-[#F4F7FA] border-y border-[#E8EDF4] py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
              The Hidden Cost
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
              The Hidden Cost Is Not Just<br />
              <span className="text-[#F8D000]">Another Missed Call</span>
            </h2>

            <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-6 md:mb-8">
              When an enquiry doesn't move forward, the practice may lose more than the initial conversation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {hiddenCosts.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} className="bg-white border border-[#E8EDF4] rounded-xl p-4 md:p-6 text-center hover:border-[#25C97D] transition-all hover:shadow-lg">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#F8D000] mx-auto mb-2 md:mb-3" />
                    <p className="text-xs md:text-sm text-[#4A5568] font-light leading-relaxed">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <p className="text-[#4A5568] text-xs md:text-sm font-light mt-6 md:mt-8 max-w-2xl border-l-2 border-[#25C97D] pl-4">
              The goal of automation isn't to guarantee more revenue. It's to make the process more consistent, measurable and less dependent on manual follow-up.
            </p>
          </div>
        </section>

        {/* ─── SOLUTION ─── */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
            The Solution
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
            What If Every New Enquiry Had<br />
            <span className="text-[#F8D000]">A Defined Next Step?</span>
          </h2>

          <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-4 md:mb-6">
            This is where GoHighLevel fits.
          </p>

          <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-6 md:mb-8">
            GoHighLevel can provide the workflow layer around the marketing and appointment process of a practice.
          </p>

          <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-6 md:mb-8">
            Depending on the practice's setup, that can include:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {[
              'CRM and contact management',
              'Lead pipelines',
              'Forms and landing pages',
              'Appointment calendars',
              'SMS and email',
              'Missed-call text-back',
              'Automated follow-up',
              'Appointment reminders',
              'Review-request workflows',
              'Reactivation campaigns',
              'Conversation AI',
              'Voice AI',
              'Reporting',
              'Integrations',
            ].map((item, i) => (
              <div key={i} className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-lg px-2 md:px-4 py-2 md:py-3 text-center text-[10px] md:text-sm text-[#4A5568] font-light hover:border-[#0E9BF0] transition-all hover:shadow-md">
                {item}
              </div>
            ))}
          </div>

          <p className="text-[#4A5568] text-[10px] md:text-xs font-light mt-4 md:mt-6 text-center max-w-2xl mx-auto opacity-60">
            But the feature list isn't the important part.
          </p>

          <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mt-2 md:mt-4 mb-4 md:mb-6">
            The important part is what you connect them to.
          </p>

          <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
            {[
              'A missed call becomes a response.',
              'A new enquiry becomes a follow-up sequence.',
              'A qualified lead becomes a booking opportunity.',
              'A booking becomes a confirmation and reminder workflow.',
              'A cancellation becomes a rescheduling opportunity.',
              'An appropriate dormant segment becomes a reactivation campaign.',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 bg-[rgba(37,201,125,0.08)] border border-[rgba(37,201,125,0.15)] rounded-lg px-3 md:px-4 py-2 md:py-3 hover:border-[#25C97D] transition-all">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#25C97D] flex-shrink-0" />
                <span className="text-xs md:text-sm text-[#0B1421] font-light">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── GROWTH SYSTEM ─── */}
        <section id="how-it-works" className="bg-[#0B1421] py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
              The Practice Growth System
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8 md:mb-12 text-white">
              One Connected <span className="text-[#F8D000]">Patient Journey</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
              {[
                { num: '01', label: 'Capture', desc: 'Calls, forms, landing pages and other relevant enquiries enter a structured system.' },
                { num: '02', label: 'Respond', desc: 'Trigger an appropriate first response when a new enquiry arrives.' },
                { num: '03', label: 'Qualify', desc: 'Collect the administrative information needed to determine the next step.' },
                { num: '04', label: 'Book', desc: 'Move the enquiry toward the appropriate appointment calendar.' },
                { num: '05', label: 'Confirm', desc: 'Send appointment confirmation.' },
                { num: '06', label: 'Remind', desc: 'Keep the appointment visible through scheduled communication.' },
                { num: '07', label: 'Follow Up', desc: 'Handle cancellations, no-shows and other configured follow-up paths.' },
                { num: '08', label: 'Review', desc: 'Request feedback after appropriate completed interactions.' },
                { num: '09', label: 'Reactivate', desc: 'Create campaigns for appropriate dormant leads or patient segments.' },
                { num: '10', label: 'Measure', desc: 'See where enquiries come from and what happens after they enter the system.' },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-2 md:p-4 text-center hover:border-[rgba(248,208,0,0.3)] transition-all hover:bg-[rgba(255,255,255,0.06)] group"
                >
                  <div className="text-[#F8D000] text-[10px] md:text-sm font-black mb-0.5 md:mb-1 group-hover:text-[#FFE44D]">{step.num}</div>
                  <div className="text-[10px] md:text-sm font-bold text-white mb-0.5 md:mb-1">{step.label}</div>
                  <div className="text-[6px] md:text-[10px] text-[rgba(255,255,255,0.3)] font-light leading-relaxed hidden sm:block">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WORKFLOWS ─── */}
        <section id="workflows" className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
            High-Value Workflows
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8 md:mb-12">
            Workflows That <span className="text-[#F8D000]">Drive Results</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {workflows.map((workflow, i) => {
              const IconComponent = workflow.icon;
              return (
                <div key={i} className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-xl p-4 md:p-6 hover:border-[#0E9BF0] transition-all hover:shadow-lg">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#0E9BF0] mb-2 md:mb-3" />
                  <h3 className="text-base md:text-lg font-bold text-[#0B1421] mb-2">{workflow.title}</h3>
                  <p className="text-xs md:text-sm text-[#4A5568] font-light mb-2">
                    <span className="font-medium text-[#0B1421]">Problem:</span> {workflow.problem}
                  </p>
                  <p className="text-xs md:text-sm text-[#4A5568] font-light mb-2">
                    <span className="font-medium text-[#0B1421]">Automation:</span> {workflow.automation}
                  </p>
                  <p className="text-xs md:text-sm text-[#25C97D] font-medium flex items-start gap-1">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Practice benefit:</span> {workflow.benefit}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── AI SECTION ─── */}
        <section className="bg-[#F4F7FA] border-y border-[#E8EDF4] py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
              AI
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Use AI for Administrative Work.<br />
              <span className="text-[#F8D000]">Keep Clinical Decisions With Clinicians.</span>
            </h2>

            <p className="text-[#4A5568] text-sm md:text-base max-w-2xl font-light leading-relaxed mb-4 md:mb-6">
              HighLevel's current Conversation AI can be configured to answer questions, collect information and assist with appointment booking. Voice AI can handle configured inbound calls, collect information, qualify leads and schedule appointments.
            </p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white border border-[rgba(37,201,125,0.2)] rounded-xl p-4 md:p-6 shadow-sm">
                <h4 className="text-[#25C97D] font-bold text-xs md:text-sm mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Appropriate
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-[#4A5568] font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-[#25C97D] mt-0.5">•</span> Appointment booking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#25C97D] mt-0.5">•</span> Basic practice information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#25C97D] mt-0.5">•</span> Configured FAQs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#25C97D] mt-0.5">•</span> Lead qualification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#25C97D] mt-0.5">•</span> Routing and administrative follow-up
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[rgba(255,80,80,0.15)] rounded-xl p-4 md:p-6 shadow-sm">
                <h4 className="text-[rgba(255,80,80,0.8)] font-bold text-xs md:text-sm mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                  Not appropriate to position as
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-[#4A5568] font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-[rgba(255,80,80,0.8)] mt-0.5">•</span> Diagnosis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgba(255,80,80,0.8)] mt-0.5">•</span> Medical advice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgba(255,80,80,0.8)] mt-0.5">•</span> Treatment recommendations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[rgba(255,80,80,0.8)] mt-0.5">•</span> A replacement for clinical judgment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY GHL SCALE UP ─── */}
        <section id="why-scaleup" className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
            Why GHL Scale Up
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
            The Difference Between Having GHL<br />
            <span className="text-[#F8D000]">And Having It Properly Implemented</span>
          </h2>

          <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-4 md:mb-6">
            GoHighLevel gives you the platform. GHL Scale Up builds the system around it.
          </p>

          <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-6 md:mb-8">
            You could learn GHL yourself. You could hire a freelancer to build individual workflows. You could use a general marketing agency that offers GHL alongside other platforms. Or you could continue connecting separate tools and managing the gaps between them.
          </p>

          <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-6 md:mb-8">
            Our role is to design and implement the system your practice needs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: 'GHL-only specialization', desc: 'GoHighLevel is the company\'s core specialization rather than one platform among many.' },
              { label: '200+ implementations', desc: 'GHL Scale Up reports 200+ GoHighLevel projects, 50+ clients, six countries served and 5+ years of experience.' },
              { label: 'One implementation team', desc: 'CRM, automation, funnels, AI, integrations and reporting can be handled within one GHL-focused delivery team.' },
              { label: 'Built around your process', desc: 'The objective is not to drop a generic template into your account. It is to understand how your practice works and configure the system accordingly.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-xl p-4 md:p-6 text-center hover:border-[#F8D000] transition-all hover:shadow-lg">
                <div className="text-[#F8D000] text-2xl md:text-3xl font-black mb-2">{i+1}</div>
                <h4 className="text-xs md:text-sm font-bold text-[#0B1421] mb-1">{item.label}</h4>
                <p className="text-[10px] md:text-xs text-[#4A5568] font-light leading-relaxed opacity-75">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-[#F4F7FA] border border-[#E8EDF4] rounded-xl">
            <p className="text-xs md:text-sm text-[#4A5568] font-light text-center">
              <span className="font-semibold">Build, test, train:</span> The documented process covers discovery, system design, implementation, testing/refinement and training.
            </p>
          </div>

          <p className="text-[#4A5568] text-[8px] md:text-[10px] mt-4 text-center max-w-xl mx-auto opacity-50">
            Important: These are overall GHL figures and must not be presented as medical-specific implementation volume.
          </p>
        </section>

        {/* ─── EXISTING SYSTEMS ─── */}
        <section className="bg-[#F4F7FA] border-y border-[#E8EDF4] py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
              Existing Systems
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
              We Don't Start by Asking You<br />
              <span className="text-[#F8D000]">To Replace Everything</span>
            </h2>

            <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed">
              Already have an EHR, CRM or booking system? That's not automatically a problem.
            </p>

            <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mt-4">
              The first question should be: What is your current system already doing well, and where are the gaps?
            </p>

            <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mt-4 mb-6 md:mb-8">
              Depending on the technology involved, GHL may complement an existing system, integrate with it, or replace part of a fragmented marketing workflow.
            </p>

            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 md:p-8 text-center shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm">
                <span className="text-[#4A5568] font-medium">Existing Practice Systems</span>
                <span className="text-[#F8D000] text-xl md:text-2xl font-bold">+</span>
                <span className="text-[#0E9BF0] font-bold">GoHighLevel</span>
                <span className="text-[#F8D000] text-xl md:text-2xl font-bold">→</span>
                <span className="text-[#25C97D] font-bold">Connected Workflow</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CASE STUDIES ─── */}
        <CaseStudies caseStudies={caseStudies} />

        {/* ─── TESTIMONIALS ─── */}
        <Testimonials testimonials={testimonials} />

        {/* ─── IMPLEMENTATION PROCESS ─── */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
            Implementation Process
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8 md:mb-12">
            From Discovery <span className="text-[#F8D000]">To Deployment</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {[
              { num: '01', label: 'Discover', desc: 'Understand lead sources, calls, booking process, follow-up, software and staff workflow.' },
              { num: '02', label: 'Map', desc: 'Identify where enquiries, appointments and follow-up currently get stuck.' },
              { num: '03', label: 'Design', desc: 'Build the proposed workflow around the actual practice process.' },
              { num: '04', label: 'Implement', desc: 'Configure the agreed GHL components, workflows, calendars, messaging, integrations and AI where appropriate.' },
              { num: '05', label: 'Test', desc: 'Test the system and important workflow paths before launch.' },
              { num: '06', label: 'Train & Optimize', desc: 'Train the team and refine the system as it is used.' },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-xl p-3 md:p-5 text-center hover:border-[#0E9BF0] transition-all hover:shadow-lg group"
              >
                <div className="text-[#0E9BF0] text-[10px] md:text-sm font-black mb-0.5 md:mb-1 group-hover:text-[#F8D000]">{step.num}</div>
                <div className="text-[10px] md:text-sm font-bold text-[#0B1421] mb-0.5 md:mb-1">{step.label}</div>
                <div className="text-[6px] md:text-[10px] text-[#4A5568] font-light leading-relaxed hidden sm:block opacity-75">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── MID-PAGE CTA ─── */}
        <section className="bg-[#0B1421] py-16 md:py-20 lg:py-24 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              See Where Automation Could<br />
              <span className="text-[#F8D000]">Fit in Your Practice</span>
            </h2>

            <p className="text-[rgba(255,255,255,0.6)] text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mb-4">
              You don't need to decide whether GoHighLevel is right for you from a feature list.
            </p>

            <p className="text-[rgba(255,255,255,0.6)] text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mb-4 md:mb-6">
              Let's look at your current process.
            </p>

            <p className="text-xs md:text-sm text-[rgba(255,255,255,0.4)] max-w-md mx-auto font-light leading-relaxed">
              We'll discuss where new enquiries come from, how missed calls are handled, how leads are followed up, how appointments are booked, what happens after cancellation or no-show, how existing software fits into the picture, and where automation could reduce repetitive work.
            </p>

            <button
              onClick={scrollToForm}
              className="mt-6 md:mt-8 bg-[#F8D000] text-[#0B1421] px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base hover:bg-[#FFE44D] transition-all transform hover:scale-105 shadow-lg shadow-[rgba(248,208,0,0.25)]"
            >
              Request a Practice Automation Assessment
            </button>
            <p className="text-[rgba(255,255,255,0.3)] text-[10px] md:text-xs mt-3 font-light">
              20–30 minutes • No patient health information required
            </p>
          </div>
        </section>

        {/* ─── CAPABILITIES ─── */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
            Capability Overview
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8 md:mb-12">
            What GHL Scale Up <span className="text-[#F8D000]">Can Build</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: 'Lead Management', desc: 'CRM, pipelines, contact organization, segmentation and lead-source tracking.' },
              { label: 'Lead Response', desc: 'Forms, enquiries, missed-call workflows and automated follow-up.' },
              { label: 'Appointment Workflows', desc: 'Booking, confirmation, reminders, cancellation and rescheduling workflows.' },
              { label: 'Communication', desc: 'SMS, email, conversations and configured AI-assisted communication.' },
              { label: 'Reputation', desc: 'Structured review-request workflows.' },
              { label: 'Reactivation', desc: 'Appropriate campaigns for dormant leads and patient segments.' },
              { label: 'Reporting', desc: 'Visibility into leads, opportunities, appointments and sources.' },
              { label: 'Integrations', desc: 'Connections with relevant systems where a verified integration or appropriate technical connection exists.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-xl p-4 md:p-5 hover:border-[#0E9BF0] transition-all hover:shadow-md">
                <h4 className="text-xs md:text-sm font-bold text-[#0B1421] mb-1">{item.label}</h4>
                <p className="text-[10px] md:text-xs text-[#4A5568] font-light leading-relaxed opacity-75">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[#4A5568] text-[10px] md:text-xs font-light mt-6 text-center max-w-xl mx-auto opacity-50">
            The exact build is determined by the practice's workflow, systems and requirements.
          </p>
        </section>

        {/* ─── PROOF ─── */}
        <section className="bg-[#F4F7FA] border-y border-[#E8EDF4] py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
              Proof
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
              GoHighLevel Expertise<br />
              <span className="text-[#F8D000]">You Can Verify</span>
            </h2>

            <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-6 md:mb-8">
              We won't invent healthcare case studies to make this page look stronger.
            </p>

            <p className="text-[#4A5568] text-sm md:text-base max-w-xl font-light leading-relaxed mb-6 md:mb-8">
              Use verified GHL Scale Up proof:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: '200+', desc: 'GoHighLevel projects delivered' },
                { label: '50+', desc: 'Clients' },
                { label: '6', desc: 'Countries served' },
                { label: '5+', desc: 'Years of GoHighLevel experience' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[#E8EDF4] rounded-xl p-4 md:p-6 text-center hover:border-[#F8D000] transition-all hover:shadow-lg">
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8D000] tracking-tight">{item.label}</span>
                  <span className="text-[10px] md:text-sm text-[#4A5568] font-light">{item.desc}</span>
                </div>
              ))}
            </div>

            <p className="text-[#4A5568] text-[8px] md:text-[10px] mt-4 text-center max-w-xl mx-auto opacity-50">
              Important: These published figures refer to GHL Scale Up's overall client/project base, not exclusively medical practices.
            </p>
          </div>
        </section>

        {/* ─── HIPAA ─── */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
            Security & HIPAA
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
            Healthcare Data Requires<br />
            <span className="text-[#F8D000]">The Right Configuration</span>
          </h2>

          <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm mb-4 md:mb-6">
              <span className="text-[#4A5568] font-medium">Practice</span>
              <span className="text-[#F8D000] text-xl md:text-2xl font-bold">↔</span>
              <span className="text-[#0E9BF0] font-bold">GHL Scale Up / Agency</span>
              <span className="text-[#F8D000] text-xl md:text-2xl font-bold">↔</span>
              <span className="text-[#4A5568] font-medium">HighLevel</span>
            </div>

            <p className="text-xs md:text-sm text-[#4A5568] font-light leading-relaxed max-w-2xl mx-auto text-center">
              GoHighLevel accounts are <span className="text-[#F8D000] font-semibold">not HIPAA compliant by default</span>.
            </p>

            <p className="text-xs md:text-sm text-[#4A5568] font-light leading-relaxed max-w-2xl mx-auto text-center mt-4">
              HighLevel currently offers an optional, account-wide HIPAA Compliance add-on. HighLevel states that the package provides capabilities including ePHI encryption, a Business Associate Agreement, audit logging and MFA enforcement.
            </p>

            <p className="text-xs md:text-sm text-[#4A5568] font-light leading-relaxed max-w-2xl mx-auto text-center mt-4">
              HIPAA considerations also depend on what information is stored, how the account is configured, access controls, staff procedures, third-party integrations, agency practices and the practice's own compliance program.
            </p>

            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-[rgba(248,208,0,0.08)] border border-[rgba(248,208,0,0.15)] rounded-xl">
              <p className="text-[10px] md:text-xs text-[#4A5568] font-light text-center">
                GHL Scale Up does not provide legal or compliance advice. Practices should assess their specific requirements and obtain appropriate professional guidance before using systems to process protected health information.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="bg-[#F4F7FA] border-y border-[#E8EDF4] py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-3 text-[#0E9BF0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 md:w-8 h-0.5 bg-[#0E9BF0] rounded" />
              FAQ
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8 md:mb-12">
              Frequently Asked <span className="text-[#F8D000]">Questions</span>
            </h2>

            <div className="space-y-2 md:space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-[#E8EDF4] rounded-xl overflow-hidden hover:border-[#0E9BF0] transition-all">
                  <button
                    className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-start justify-between gap-3 md:gap-4 hover:bg-[#F4F7FA] transition-colors group"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="text-xs md:text-sm font-medium text-[#0B1421]">{faq.q}</span>
                    <span className={`text-[#F8D000] text-lg md:text-xl font-bold flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-4 md:px-6 pb-4 md:pb-5 text-xs md:text-sm text-[#4A5568] font-light leading-relaxed border-t border-[#E8EDF4] pt-3 md:pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA WITH CALENDAR IFRAME ─── */}
        <section id="assessment-form" className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] text-center mb-4 md:mb-6">
              Find the Gaps in Your Practice's<br />
              <span className="text-[#F8D000]">Patient Journey</span>
            </h2>

            <p className="text-[#4A5568] text-sm md:text-base text-center max-w-2xl mx-auto font-light leading-relaxed mb-4">
              You may already have the website. You may already run advertising. You may already have an EHR, booking system and front-desk team.
            </p>

            <p className="text-[#4A5568] text-sm md:text-base text-center max-w-2xl mx-auto font-light leading-relaxed mb-6 md:mb-8">
              The question is what happens between those systems and those interactions.
            </p>

            <div className="grid sm:grid-cols-2 gap-2 md:gap-3 max-w-lg mx-auto mb-6 md:mb-8">
              {[
                'Where do enquiries wait?',
                'Where do missed calls go?',
                'What happens when someone doesn\'t book?',
                'What happens after a cancellation?',
                'What happens to appropriate dormant contacts?',
                'How much still depends on someone remembering to do it manually?',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-[#4A5568] font-light">
                  <span className="text-[#F8D000] text-base md:text-lg">✦</span> {item}
                </div>
              ))}
            </div>

            {/* Calendar Iframe */}
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-4 md:p-6 lg:p-8 max-w-7xl mx-auto shadow-sm">
              <div className="relative w-full" style={{ height: '800px' }}>
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#F4F7FA] rounded-2xl z-10">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-[#0E9BF0] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-[#4A5568] text-sm font-light">Loading calendar...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/v3X1VeODz2sPjpKbySyx"
                  title="Booking Calendar"
                  className="w-full h-full border-0 rounded-2xl"
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="bg-[#0B1421] border-t border-[rgba(255,255,255,0.06)] py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div className="relative w-28 h-28 md:w-32 md:h-32">
                    <Image
                      src="/ghlscalup.png"
                      alt="GHL Scale Up"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-[10px] md:text-xs text-[rgba(255,255,255,0.3)] font-light max-w-xs">
                  GoHighLevel implementation, automation and systems support for lead-driven businesses.
                </p>
              </div>

              <div className="text-center text-[10px] md:text-xs text-[rgba(255,255,255,0.3)] font-light max-w-sm">
                <p className="mb-2">CRM • Lead Management • Appointment Automation • Follow-Up • Reviews • Reactivation • AI • Reporting</p>
                <p className="text-[rgba(255,255,255,0.2)]">Important: GoHighLevel is not an EHR or clinical decision-making system. Healthcare practices are responsible for determining their own legal, regulatory and compliance requirements.</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-[10px] md:text-xs">
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">Privacy Policy</a>
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">Terms</a>
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">Contact</a>
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">GoHighLevel Services</a>
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">Case Studies</a>
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">About GHL Scale Up</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}