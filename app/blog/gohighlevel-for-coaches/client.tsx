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
  XCircle,
  Bell
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelForCoachesClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-use-for',
        'coaching-pipeline',
        'workflows',
        'tools-replaces',
        'when-not-right',
        'setup-timeline',
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
      q: "Is GoHighLevel good for coaches?",
      a: "Yes, particularly for coaches who actively generate leads and want to automate the discovery call booking process. GoHighLevel automates the entire lead-to-booked-call journey: instant SMS and email follow-up within 60 seconds of a form submission, booking link delivery, and automated reminders before the call. Coaches who are full by referral and not actively marketing may find simpler tools like Calendly sufficient. The platform's strongest return for coaches is the follow-up automation. Most coaches lose 30 to 50% of inbound leads to slow responses, and fixing that alone justifies the platform cost."
    },
    {
      q: "What is the best CRM for coaches in 2026?",
      a: "For coaches actively growing their client base and running group programs or high-ticket offers, GoHighLevel is the strongest option in 2026. It covers CRM, booking calendar, email automation, SMS follow-up, membership hosting, and review management in one platform for $97 to $297 per month. For coaches who are full and only need booking and simple client management, Paperbell at $47 per month or HoneyBook at $19 to $39 per month are simpler and faster to maintain. The right answer depends on whether growth and automation are current priorities."
    },
    {
      q: "Can GoHighLevel replace Kajabi for coaches?",
      a: "For most coaches, yes. GoHighLevel's membership module covers video lessons, drip content scheduling, gated access by payment tier, and a branded student portal. The honest trade-off: Kajabi's student-facing experience and community features are more polished. For coaches whose primary product is a high-end course with a rich community experience, Kajabi may be worth keeping. For coaches who also run active lead generation, 1-to-1 offers, and need CRM and SMS automation, GHL handles the full business and the membership module serves the course delivery adequately."
    },
    {
      q: "How does GoHighLevel help coaches get more discovery calls?",
      a: "GoHighLevel automates the discovery call booking process end to end. When a lead submits an inquiry form, GHL fires an SMS within 60 seconds with the booking link and a personalised message. An email follows within 2 minutes. If the lead has not booked within 24 hours, a follow-up fires automatically. If they have not booked in 48 hours, a third touchpoint goes out with a testimonial or case study. Once a call is booked, confirmation, 24-hour reminder, and 1-hour reminder all send automatically. No-show recovery fires within 5 minutes of a missed call with a rebooking link. This entire sequence runs without any manual action from the coach."
    },
    {
      q: "How much does GoHighLevel cost for coaches?",
      a: "GoHighLevel starts at $97 per month for the Starter plan, which includes the CRM, booking calendar, email automation, SMS, funnels, and reputation management everything a solo coach or consultant needs. The Unlimited plan at $297 per month adds white-label branding and the ability to create sub-accounts for other clients, which is relevant if the coach also offers a done-for-you service."
    },
    {
      q: "What is the first workflow a coach should build in GoHighLevel?",
      a: "The discovery call booking automation. Set the trigger to Form Submitted on your inquiry form. Action 1: Send SMS immediately with a personalised message and the booking link. Action 2: Send email within 2 minutes with more detail and the booking link. Wait 24 hours. If/Else: if the contact has booked a call, end the sequence. If not, send a follow-up SMS. Wait another 24 hours. If still not booked, send a final touchpoint with a testimonial. This one workflow which takes about 45 minutes to build recovers a significant portion of the leads most coaches are currently losing to slow follow-up."
    },
    {
      q: "Can GHL Scale Up set up GoHighLevel for my coaching business?",
      a: "Yes. GHL Scale Up builds complete GoHighLevel systems for coaches and consultants: CRM pipeline, discovery call automation, booking calendar configuration, email and SMS sequences, group program enrollment funnel, membership portal, and review collection workflow. Most starter coaching setups are live in 3 to 5 business days. Book a free 30-minute strategy call and we will map out the right system for your specific business model."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-use-for', title: '1. What Do Coaches and Consultants Actually Use GoHighLevel For?' },
    { id: 'coaching-pipeline', title: '2. What Does a GoHighLevel Coaching Pipeline Look Like?' },
    { id: 'workflows', title: '3. Which Coaching Workflows Make the Biggest Difference?' },
    { id: 'tools-replaces', title: '4. What Tools Does GoHighLevel Replace for Coaches?' },
    { id: 'when-not-right', title: '5. When Is GoHighLevel Not the Right Choice for a Coach?' },
    { id: 'setup-timeline', title: '6. How Long Does a Coaching GHL Setup Take?' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const pipelineStages = [
    { stage: 'New Lead', meaning: 'Submitted form or DM, not yet contacted', automation: 'Instant SMS within 60 seconds: "Hi [name], thanks for reaching out. Here is my booking link..." Email sends within 2 minutes.' },
    { stage: 'Follow-Up Sent', meaning: 'Initial message sent, awaiting response', automation: 'If no response in 24 hours: second SMS. If no response in 48 hours: third touchpoint with value content.' },
    { stage: 'Application Received', meaning: 'Completed intake form for high-ticket offer', automation: 'Confirmation email with next steps. Notification to coach to review.' },
    { stage: 'Discovery Call Booked', meaning: 'Call in the calendar', automation: '24-hour reminder SMS. 1-hour reminder SMS. Pre-call prep email with agenda.' },
    { stage: 'Discovery Call Completed', meaning: 'Call happened', automation: 'Post-call follow-up email within 2 hours. Proposal or next steps sent automatically.' },
    { stage: 'Enrolled', meaning: 'Paid and signed', automation: 'Welcome sequence fires. Onboarding checklist sent. Access to program portal granted.' },
    { stage: 'Active Client', meaning: 'Currently in program', automation: 'Weekly check-in prompt. Milestone celebration message. Progress tracking.' },
    { stage: 'Completed / Alumni', meaning: 'Program finished', automation: 'Testimonial request. Referral ask. Alumni community invitation. Upsell to next offer.' },
  ];

  const toolComparison = [
    { tool: 'Calendly Teams', purpose: 'Booking calendar', cost: '$16/mo per user', ghl: 'GHL booking calendar included' },
    { tool: 'Mailchimp / ConvertKit', purpose: 'Email marketing and sequences', cost: '$30 to $79/mo', ghl: 'GHL email automation included' },
    { tool: 'Kajabi / Teachable', purpose: 'Course and membership hosting', cost: '$119 to $399/mo', ghl: 'GHL membership module included' },
    { tool: 'ActiveCampaign', purpose: 'CRM and automation', cost: '$49 to $149/mo', ghl: 'GHL CRM and workflows included' },
    { tool: 'Paperbell / HoneyBook', purpose: 'Client management', cost: '$47 to $59/mo', ghl: 'GHL pipelines and automation' },
    { tool: 'Birdeye / Podium', purpose: 'Review management', cost: '$299/mo', ghl: 'GHL reputation management included' },
  ];

  const setupTimeline = [
    { type: 'Starter coach setup', included: 'CRM pipeline, discovery call booking calendar, instant follow-up sequence, no-show recovery, Google review workflow', timeline: '3 to 5 business days' },
    { type: 'Full coaching system', included: 'All of starter plus lead capture funnel, 30-day nurture sequence, group program enrollment funnel, membership portal setup, reporting dashboard', timeline: '7 to 10 business days' },
    { type: 'Done-for-you with content', included: 'Full system plus email copy written, SMS scripts written, funnel page copy, and a 30-minute walkthrough call', timeline: '10 to 14 business days' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel for Coaches 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Coaches & Consultants</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL for Coaches</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Coaching CRM</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel for Coaches and Consultants:<br />
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
            Running a coaching or consulting business in 2026 means doing five jobs at once. 
            You are delivering client work, marketing to attract new clients, following up with 
            leads who went quiet, managing bookings, and trying to get Google reviews. All while 
            the administrative side grows faster than your client roster. 
            <strong className="text-white"> GHL Scale Up</strong> has built GoHighLevel systems 
            for coaches and consultants across the US, UK, Australia, and India.
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
                GoHighLevel is worth it for coaches who want to grow: more discovery calls, higher enrollment, less admin time.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It replaces Calendly, Mailchimp, Kajabi, and a standalone CRM for <strong className="text-[#0E9BF0]">$97 to $297 per month</strong>. 
                The highest-value setup for coaches is the discovery call pipeline: lead captures on a landing page, automated follow-up 
                fires within 60 seconds, booking link sends, and reminders run automatically. Most coaches lose 30 to 50% of inbound leads 
                to slow follow-up. Fixing that one thing alone justifies the platform cost in the first month.
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

            {/* Section 1: What Coaches Use GHL For */}
            <h2 id="what-use-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Do Coaches and Consultants Actually Use GoHighLevel For?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is not a coaching platform in the same way Paperbell or HoneyBook is. It is a CRM and automation 
              platform that happens to cover everything a coaching business needs: lead capture, follow-up, booking, course 
              delivery, and reputation management in one system.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h3 className="font-bold text-[#1A2236] mb-1">Discovery-Call-Based Businesses</h3>
                <p className="text-xs text-[#5C6880] leading-relaxed">Life coaches, business coaches, health coaches, and consultants who sell through an initial call. GHL automates lead-to-booked-call journey.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(37,201,125,0.1)] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-[#25C97D]" />
                </div>
                <h3 className="font-bold text-[#1A2236] mb-1">Group Program Businesses</h3>
                <p className="text-xs text-[#5C6880] leading-relaxed">Coaches running cohorts, masterminds, or group containers. GHL manages waitlist, application funnel, enrollment sequence, and onboarding.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(248,208,0,0.1)] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-[#F8D000]" />
                </div>
                <h3 className="font-bold text-[#1A2236] mb-1">High-Ticket Consultants</h3>
                <p className="text-xs text-[#5C6880] leading-relaxed">Business and strategy consultants who need a proper CRM pipeline to track where every prospect is in the conversation.</p>
              </div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full platform overview: 
              <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
            </p>

            {/* Section 2: Coaching Pipeline */}
            <h2 id="coaching-pipeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Does a GoHighLevel Coaching Pipeline Look Like?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A GHL pipeline for coaches mirrors the actual stages of how a coaching client moves from stranger to paying client.
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
                <span className="text-sm font-bold text-[#F8D000]">THE STAGE THAT MAKES THE BIGGEST DIFFERENCE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                New Lead to Follow-Up Sent: the first 60 seconds. A coach who responds within 60 seconds of a lead submitting a form 
                converts at a dramatically higher rate than one who responds within an hour. GHL fires the first SMS automatically 
                within seconds of form submission while the lead is still thinking about their problem.
              </p>
            </div>

            {/* Section 3: Key Workflows */}
            <h2 id="workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Which GoHighLevel Workflows Make the Biggest Difference for Coaches?
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Discovery call booking automation</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">When a lead submits an inquiry form, GHL immediately sends a personalised SMS with the coach's booking link, followed by an email with more context. If not booked within 24 hours, a follow-up fires. If still not booked in 48 hours, a third touchpoint with a testimonial goes out.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-[#25C97D]" />
                  <h3 className="text-base font-bold text-[#1A2236]">No-show and late-cancel recovery</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">When a discovery call is booked and the prospect does not show up, GHL fires an automatic SMS within 5 minutes of the missed appointment with a rebook link. This single automation recovers 20 to 40% of no-shows who would otherwise disappear.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Bell className="w-5 h-5 text-[#F8D000]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Booking calendar with automated reminders</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">Confirmation email immediately after booking, SMS reminder 24 hours before, SMS reminder 1 hour before, and pre-call prep email with agenda. No-show rates drop significantly when reminders are automated.</p>
                <p className="text-sm text-[#0E9BF0] leading-relaxed mt-2">→ <Link href="/services/booking-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel booking and calendar setup service →</Link></p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-[#F8D000]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Post-program testimonial and referral request</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed">Three days after a program ends, GHL sends a personalised text asking for a Google review with a direct link. The same sequence can include a referral ask. Most coaches never ask consistently. GHL makes it automatic.</p>
              </div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full guide on building these workflows: 
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            {/* Section 4: Tools Replaces */}
            <h2 id="tools-replaces" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Tools Does GoHighLevel Replace for Coaches?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The cost comparison is what makes most coaches take the platform seriously.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tool coaches typically use</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it does</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical monthly cost</th>
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
                    <td className="py-3 px-3 font-bold text-[#DC3545]">$560 to $801/mo</td>
                    <td className="py-3 px-3 font-bold text-[#0E9BF0]">GoHighLevel: $97 to $297/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">HONEST NOTE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Kajabi's course player and community experience is more polished than GHL's. If your coaching business runs primarily through 
                a high-end course with a rich student community experience, Kajabi may be worth keeping. Most coaches who switch find the 
                tradeoff worth it for everything else GHL adds. If you are moving from Kajabi: 
                <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline ml-1">Kajabi to GoHighLevel migration →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Full plan breakdown and usage fees: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing: All Plans Explained →</Link>
            </p>

            {/* Section 5: When Not Right */}
            <h2 id="when-not-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. When Is GoHighLevel Not the Right Choice for a Coach?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Honest answer: GoHighLevel is not for every coach. Here are the specific situations where a simpler tool is actually the better call.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You are full and not actively marketing.</strong> If your coaching practice is full by referral and you do not run any paid advertising, GoHighLevel is more platform than you need. Calendly and a basic email system is sufficient.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You only need bookings and simple email.</strong> Calendly and Mailchimp at under $50 per month is faster to set up and easier to maintain. GHL's value comes from automation depth and consolidation.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You are in the first 90 days of your coaching business.</strong> Start simple, validate the offer, then bring in automation once you know what you are automating.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE RIGHT TIME TO START WITH GHL</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                You are ready for GoHighLevel when: you have a validated offer, you are generating at least some inbound leads or running paid traffic, 
                you are spending more than 5 hours a week on manual follow-up and admin, and you want to remove yourself as the bottleneck between a 
                lead arriving and a discovery call being booked.
              </p>
            </div>

            {/* Section 6: Setup Timeline */}
            <h2 id="setup-timeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Long Does a Coaching GoHighLevel Setup Take?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Setup type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What's included</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {setupTimeline.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.included}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR COACHING BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                The setup that takes longest is not the technical configuration. It is defining the pipeline stages, the follow-up timing, 
                and the language that sounds like the coach, not like a template. <strong className="text-white"> GHL Scale Up starts every 
                coaching build with a 30-minute discovery call</strong> to map the coach's sales process before configuring anything.
              </p>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                See how other coaches and service businesses are using their GHL systems: 
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
            </div>

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
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-for-real-estate" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Real Estate Agents →</Link>
                <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel Migration →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to stop losing discovery calls to slow follow-up?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds coaching systems that book calls on autopilot. CRM pipeline, discovery call automation, booking calendar, 
                  follow-up sequences, and review collection all configured in 3 to 5 business days. 200+ builds delivered.
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
                        {activeId === item.id && <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />}
                        <span className="flex-1">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* About the Author */}
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
                5+ years GHL experience · 200+ systems built globally including coaching and consulting businesses across life coaching, 
                business coaching, health coaching, and strategy consulting. All feature details verified as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Want More Discovery Calls?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We build coaching systems that book calls on autopilot. 3 to 5 business days.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Started
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
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