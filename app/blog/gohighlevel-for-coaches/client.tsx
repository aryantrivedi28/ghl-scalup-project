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
  Bell,
  BarChart3,
  UserPlus,
  Repeat,
  Send,
  CalendarDays,
  ListChecks,
  RefreshCw
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelForCoachesClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'short-answer',
        'what-is',
        'how-coaches-use',
        'coaching-journey',
        'workflows',
        'use-by-type',
        'automate-first',
        'replace-tools',
        'pricing',
        'worth-it',
        'when-not-right',
        'how-ghl-scale-up-helps',
        'faq',
        'takeaway'
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
      q: 'Is GoHighLevel good for coaches?',
      a: 'Yes, for coaches who actively generate leads and sell through calls. GoHighLevel\'s strongest value for a coaching business is its sales-and-follow-up engine: capturing leads, responding within seconds, booking discovery calls, cutting no-shows with reminders, and nurturing prospects. It\'s less necessary for coaches who are full by referral and don\'t actively market.'
    },
    {
      q: 'How can coaches use GoHighLevel?',
      a: 'Coaches use GoHighLevel to capture leads from all sources into one CRM, respond instantly by SMS and email, book discovery calls automatically, send reminders, run sales pipelines, onboard new clients, collect testimonials, and reactivate old leads and past clients, replacing the separate tools that usually handle each of those tasks.'
    },
    {
      q: 'Can GoHighLevel replace my CRM and other coaching tools?',
      a: 'For most coaches, GoHighLevel can replace Calendly or Acuity (booking), Mailchimp/ConvertKit/ActiveCampaign (email and SMS), a standalone CRM (HubSpot/Pipedrive), and form tools like Typeform, and it can host courses in place of Kajabi. It does not replace video tools like Zoom. Kajabi still offers a more polished course-delivery experience if that\'s your primary product.'
    },
    {
      q: 'Can GoHighLevel automate coaching lead follow-up?',
      a: 'Yes. GoHighLevel can automatically respond to new coaching leads within seconds by SMS and email, deliver a booking link, send appointment reminders, run no-show recovery, and continue nurturing prospects who aren\'t ready to book yet, moving them through a sales pipeline without the coach sending each message manually.'
    },
    {
      q: 'How much does GoHighLevel cost for coaches?',
      a: 'GoHighLevel costs $97/month (Starter), $297/month (Unlimited), or $497/month (Agency/SaaS Pro), with usage costs for SMS, email, and AI billed separately. Most individual coaches only need the $97 Starter plan. Annual billing lowers the effective rate by roughly two months. Confirm current pricing on GoHighLevel\'s official pricing page.'
    },
    {
      q: 'Which GoHighLevel plan does a coach need?',
      a: 'Most coaches need only the $97 Starter plan, which includes the CRM, calendar booking, funnels, forms, email and SMS automation, and course hosting. The $297 and $497 plans are aimed at agencies and people reselling the platform, not at coaches running their own practice.'
    },
    {
      q: 'Can GoHighLevel host my coaching course or group program?',
      a: 'Yes. GoHighLevel includes a course and membership module and a client portal, which can host your program and deliver content. It handles course delivery adequately for most coaches, though dedicated platforms like Kajabi offer a more polished student and community experience if premium course delivery is your main product.'
    },
    {
      q: 'Is GoHighLevel worth it for a new coach just starting out?',
      a: 'It\'s worth it once you have a lead-and-sales process worth automating, actively generating leads and booking calls. If you\'re brand new with very few leads and mostly referral-based, a simpler tool may be enough until your lead flow grows. The value comes from the leads and calls you stop losing, so it pays off most when you have volume moving through your funnel.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'short-answer', title: 'The Short Answer: Is GHL Good for Coaches?' },
    { id: 'what-is', title: 'What Is GoHighLevel for Coaches?' },
    { id: 'how-coaches-use', title: 'How Coaches Use GoHighLevel (The Problems It Solves)' },
    { id: 'coaching-journey', title: 'How GoHighLevel Fits Into the Coaching Client Journey' },
    { id: 'workflows', title: 'GoHighLevel Coaching Workflows You Can Actually Build' },
    { id: 'use-by-type', title: 'GoHighLevel Use Cases by Type of Coach' },
    { id: 'automate-first', title: 'What Should a Coach Automate First?' },
    { id: 'replace-tools', title: 'Can GoHighLevel Replace Calendly, Kajabi, HubSpot and Mailchimp?' },
    { id: 'pricing', title: 'How Much Does GoHighLevel Cost for Coaches?' },
    { id: 'worth-it', title: 'Is GoHighLevel Worth It for Coaches?' },
    { id: 'when-not-right', title: 'When GoHighLevel May Not Be the Right Choice for a Coach' },
    { id: 'how-ghl-scale-up-helps', title: 'How GHL Scale Up Helps Coaches Implement GoHighLevel' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'takeaway', title: 'Final Takeaway' }
  ];

  const coachingProblems = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Capturing and managing coaching leads',
      problem: 'Your leads arrive from everywhere an Instagram DM, a webinar signup, a referral, a landing page, a lead magnet and they end up scattered across inboxes, notebooks and your memory. Some never get logged, and some never get a reply.',
      solution: 'Every lead source feeds into one CRM. A coach can capture leads through GoHighLevel forms, funnels, and landing pages, or connect existing sources, and every new lead lands in the same place with its source tagged. Nothing sits in a DM waiting to be forgotten.',
      benefit: 'Any coach running multi-channel lead generation, especially those getting leads from social plus ads plus referrals at the same time.'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Responding to leads within seconds (speed-to-lead)',
      problem: 'A lead fills in your application form at 9pm. You see it the next morning. By then they\'ve booked a call with two other coaches. Industry sources widely estimate that coaches lose a large share of inbound leads, often cited in the range of 30 to 50 percent, to slow response alone.',
      solution: 'An automated workflow fires the moment a lead comes in, sending a personalised SMS and email within seconds, typically with a booking link, so the lead is engaged while their interest is at its peak. This single automation is widely documented as the highest-ROI thing a coach can set up.'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: 'Booking discovery and strategy calls automatically',
      problem: 'The back-and-forth to schedule a call "does Tuesday work? no, how about Thursday?" loses momentum and leads. Manual booking is friction, and friction kills warm prospects.',
      solution: 'GoHighLevel\'s built-in calendar lets qualified leads book directly into your schedule, with confirmation and reminder messages handled automatically. The booking connects to the CRM, so the lead\'s record, source, and application answers are all attached to the appointment before you ever get on the call.',
      benefit: 'Every coach who sells through discovery, strategy, or sales calls, which is the majority of the industry.'
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: 'Cutting no-shows with automated reminders',
      problem: 'A booked call is not a held call. No-shows are one of the most frustrating leaks in a coaching business, wasted time slots and lost sales that were minutes from happening.',
      solution: 'An automatic reminder sequence, email and SMS, runs before the call, and a no-show workflow can trigger afterward to re-engage anyone who missed and offer a rebook. You stop manually chasing and stop silently losing the ones who forgot.'
    },
    {
      icon: <Send className="w-5 h-5" />,
      title: 'Following up with leads who aren\'t ready yet',
      problem: 'Most prospects don\'t buy on the first call. Without a system, they get one follow-up, maybe two, then drift off your radar and buy from whoever stayed in touch.',
      solution: 'Long-term nurture sequences keep delivering value automatically over weeks or months, and a pipeline shows you exactly who\'s at what stage so no warm lead goes cold from neglect.'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Managing the sales pipeline and knowing where revenue is',
      problem: 'You can\'t see your business. You have a vague sense of who\'s interested, but no clear picture of how many prospects are at each stage or where deals are stalling.',
      solution: 'A visual pipeline moves each prospect through stages new lead, call booked, call held, proposal, client so you can see your pipeline at a glance, spot where prospects drop off, and forecast revenue instead of guessing.'
    },
    {
      icon: <UserPlus className="w-5 h-5" />,
      title: 'Onboarding new clients without the manual scramble',
      problem: 'Someone finally says yes, and now you\'re manually sending the welcome email, the payment link, the intake form, the scheduling link, the contract the same sequence every time, by hand.',
      solution: 'A client onboarding workflow triggers automatically on payment: welcome sequence, intake form, booking link for the first session, and any documents, all sent in the right order without you touching it.'
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: 'Collecting testimonials, reviews and referrals',
      problem: 'Social proof is what sells coaching, but asking for it is awkward and easy to forget, so you under-collect the testimonials that would make your next sale easier.',
      solution: 'Automated review and testimonial requests trigger after a milestone, a completed onboarding, a hit goal, or the end of a program, and referral requests can be built into the same flow. The asks happen consistently instead of whenever you remember.'
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: 'Reactivating old leads and past clients',
      problem: 'You\'re sitting on a list of people who once enquired or once worked with you, and it\'s just... sitting there. That list is the cheapest source of new revenue you have, and most coaches never touch it.',
      solution: 'A reactivation campaign sends a targeted message to that dormant list, an old-lead re-engagement or a past-client win-back, and routes anyone who responds straight back into your booking flow. It\'s often the fastest revenue a coach can generate from GoHighLevel in week one.'
    }
  ];

  const workflows = [
    {
      title: 'New coaching lead and discovery-call workflow',
      steps: 'Lead submits application form → added to CRM, source tagged → instant SMS + email with booking link → lead books discovery call → confirmation sent → reminder sequence before call → if no-show, re-engagement + rebook offer → after call, moved along pipeline → if not closed, nurture sequence continues',
      note: 'This is the backbone workflow for any call-based coaching business, and usually the first one worth building.'
    },
    {
      title: 'High-ticket coaching follow-up workflow',
      steps: 'Discovery call held → tagged \'proposal sent\' → value-and-proof follow-up over several days (case studies, FAQs, objection-handling content) → reminder of offer deadline → if closed, move to onboarding → if not, long-term nurture with periodic check-ins',
      note: 'High-ticket coaching sales cycles are longer, so this workflow keeps structured, helpful follow-up going without the coach manually chasing, which is where most high-ticket sales are actually won or lost.'
    },
    {
      title: 'New client onboarding workflow',
      steps: 'Payment received → welcome email + SMS → intake / goals form → booking link for first session → program materials or portal access → internal task created for the coach to review the intake'
    },
    {
      title: 'Old-lead reactivation workflow',
      steps: 'Segment dormant leads → send re-engagement message (SMS/email) → responders routed to booking link → non-responders moved to a lighter long-term nurture → bookings flow into the discovery-call workflow above'
    },
    {
      title: 'Testimonial and referral workflow',
      steps: 'Client hits milestone or completes program → automated testimonial request → if positive, prompt for a public review + referral ask → referrals captured as new leads back into the CRM'
    }
  ];

  const coachTypes = [
    {
      type: 'Business and sales coaches',
      fit: 'Usually high-ticket and call-driven, so the biggest wins are the strategy-call funnel, fast lead follow-up, a clear sales pipeline, structured high-ticket follow-up, and client onboarding. If your growth is limited by how many qualified calls you book and how well you follow up, this is squarely where GoHighLevel earns its cost.'
    },
    {
      type: 'Life and mindset coaches',
      fit: 'Often a mix of lower-ticket offers and consultations, with trust built over time. The strongest fits are consultation booking, nurture sequences that keep you top-of-mind, appointment reminders, smooth onboarding, and consistent testimonial collection to build the social proof that drives this category.'
    },
    {
      type: 'Executive coaches',
      fit: 'Higher-value clients and longer sales cycles, sometimes with an application or referral-based intake. GoHighLevel helps most with lead qualification (application forms), consultation scheduling, and a high-value pipeline that tracks long cycles without letting relationships go cold.'
    },
    {
      type: 'Fitness and health/wellness coaches',
      fit: 'Typically higher lead volume and recurring, appointment-heavy relationships. The best fits are consultation and session booking, program enrolment, recurring reminders and check-ins, and client reactivation, plus review collection, which matters a lot in this category.'
    },
    {
      type: 'Group coaches and course-plus-coaching businesses',
      fit: 'Run on cohorts and launches. GoHighLevel helps with application forms, cohort enrolment, webinar and event follow-up, onboarding at scale, and upsells, and its membership module can host the program itself.'
    }
  ];

  const priorityOrder = [
    { priority: '1st', action: 'Lead capture + instant follow-up', reason: 'Fixes revenue you\'re actively losing to slow response; highest ROI, quickest win' },
    { priority: '2nd', action: 'Discovery-call booking + reminders', reason: 'Turns interest into held calls and cuts no-shows, directly protects sales' },
    { priority: '3rd', action: 'Sales follow-up / nurture', reason: 'Recovers the majority of prospects who don\'t buy on the first call' },
    { priority: '4th', action: 'Client onboarding', reason: 'Saves hours per client and makes your first impression professional' },
    { priority: '5th', action: 'Reactivation + retention', reason: 'Mines existing lists and keeps clients renewing; compounding revenue' }
  ];

  const toolComparison = [
    { tool: 'Calendly / Acuity', purpose: 'Booking calendar', ghl: 'Native calendar booking with reminders, tied to CRM', verdict: 'Usually replaces it fully for coaches' },
    { tool: 'Mailchimp / ConvertKit / ActiveCampaign', purpose: 'Email marketing and sequences', ghl: 'Built-in email + SMS automation and CRM', verdict: 'Usually replaces it for coaching-scale email/SMS' },
    { tool: 'HubSpot / Pipedrive', purpose: 'CRM and pipeline', ghl: 'Built-in CRM and visual pipeline', verdict: 'Replaces it for most coaches; very large sales teams may prefer HubSpot\'s depth' },
    { tool: 'Typeform / JotForm', purpose: 'Forms and applications', ghl: 'Native forms and application/qualification forms', verdict: 'Usually replaces it for intake and applications' },
    { tool: 'Zapier / Google Sheets glue', purpose: 'Integration automation', ghl: 'Native workflows connect everything internally', verdict: 'Often removes the need for much of the glue' },
    { tool: 'Kajabi / Teachable', purpose: 'Course and membership hosting', ghl: 'Hosts courses + memberships + client portal', verdict: 'Replaces it adequately; Kajabi\'s course/student experience is more polished' },
    { tool: 'Zoom', purpose: 'Video conferencing', ghl: 'Not a video-conferencing tool', verdict: 'Does NOT replace it, keep Zoom and connect it' }
  ];

  const pricingPlans = [
    { plan: 'Starter', price: '$97/month', desc: 'Everything a solo coach needs: CRM, funnels, calendar, forms, email/SMS automation, courses. The right starting plan for most individual coaches.' },
    { plan: 'Unlimited', price: '$297/month', desc: 'Adds unlimited sub-accounts and white-labelling. Relevant if you run separate brands or plan to manage client accounts.' },
    { plan: 'Agency / SaaS Pro', price: '$497/month', desc: 'Adds SaaS Mode (reselling GoHighLevel as your own software) and rebilling. Only needed if you plan to sell the platform to others, not for coaching your own clients.' }
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
          <span className="text-[#1A2236] font-medium">GoHighLevel for Coaches: Automate, Book Clients & Scale (2026)</span>
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
            GoHighLevel for Coaches:<br />
            <span className="text-[#F8D000]">How to Automate Your Coaching Business, Manage Leads, Book Clients, and Scale</span>
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
              <div className="text-sm font-medium text-white">GHL Scale Up</div>
              <div className="text-xs text-white/50">GoHighLevel implementation specialists · Updated July 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            If you run a coaching business, you already know the real bottleneck isn't your coaching.
            It's everything around it the leads that come in from Instagram and never get a reply,
            the discovery calls that no-show, the follow-up you meant to send three days ago, the past
            clients you've lost track of.
          </p>
          <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-[620px]">
            Most coaches are the coach, the marketer, the closer, the scheduler and the admin team all
            at once, and the business runs on memory and willpower instead of systems.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* BLUF Box - Short Answer */}
            <div id="short-answer" className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">The Short Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Is GoHighLevel good for coaches?
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Yes, for most coaches who actively generate leads and sell through calls (discovery, strategy, or sales calls),
                GoHighLevel is one of the strongest platforms available in 2026. Its biggest win for a coaching business is the
                sales-and-follow-up engine: it captures leads from every source into one CRM, responds within seconds, books
                discovery calls automatically, sends reminders to cut no-shows, and keeps nurturing prospects who aren't ready yet.
                It also hosts courses and memberships and can run your client onboarding. Where it's weaker is premium course
                delivery dedicated platforms like Kajabi still offer a more polished student experience.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-2">
                GoHighLevel runs <strong className="text-[#0E9BF0]">$97 to $497 per month</strong> depending on plan, with usage costs
                (SMS, email, AI) billed on top. If your growth is limited by lead follow-up and booking rather than by course-delivery
                polish, it's likely an excellent fit.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What this guide covers</span>
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

            {/* Section 1: What Is GoHighLevel for Coaches? */}
            <h2 id="what-is" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is GoHighLevel for Coaches?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel is an all-in-one platform that combines a CRM, calendar booking,
              funnels, email and SMS automation, pipelines, forms, and course/membership hosting in one system</strong>, and for
              coaches it functions as the operational backend of the business the layer that captures leads, books calls,
              follows up, and onboards clients automatically. Instead of stitching together a scheduler, an email tool, a course
              platform, a form builder and a spreadsheet, a coach can run the entire path from first click to paying client inside
              one platform.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That's the definition, but the reason it matters to a coaching business specifically is this: coaching is a
              high-trust, relationship-driven sale that still runs through a surprisingly repeatable process. Someone finds you,
              raises their hand, gets qualified, books a call, shows up (or doesn't), gets followed up with, buys (or doesn't),
              gets onboarded, gets coached, and hopefully renews or refers. Almost every stage of that except the coaching itself
              can be systemised. GoHighLevel is where you build that system.
            </p>
            <div className="bg-[#1C2E4A] rounded-xl p-5 mb-6 text-white">
              <p className="text-sm text-white/80 leading-relaxed italic">
                "The coaches who scale in 2026 usually aren't the loudest or most charismatic. They're the ones whose backend
                runs on systems instead of memory, so leads get answered, calls get booked, and nobody falls through the cracks."
              </p>
            </div>

            {/* Section 2: How Coaches Use GoHighLevel */}
            <h2 id="how-coaches-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Coaches Use GoHighLevel <span className="text-[#0E9BF0]">(The Problems It Actually Solves)</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Rather than list features, let's walk through the specific places a coaching business leaks time and revenue, and
              how GoHighLevel closes each one. This is where you'll start recognising your own business.
            </p>

            <div className="space-y-4 mb-6">
              {coachingProblems.map((item, index) => (
                <div key={index} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center text-[#0E9BF0]">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.title}</h3>
                  </div>
                  <div className="pl-10 space-y-2">
                    <p className="text-sm text-[#5C6880] leading-relaxed">
                      <strong className="text-[#DC3545]">The problem:</strong> {item.problem}
                    </p>
                    <p className="text-sm text-[#5C6880] leading-relaxed">
                      <strong className="text-[#25C97D]">How GoHighLevel solves it:</strong> {item.solution}
                    </p>
                    {item.benefit && (
                      <p className="text-sm text-[#0E9BF0] leading-relaxed">
                        <strong>Who benefits most:</strong> {item.benefit}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Recognising your business */}
            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-6">
              <p className="text-sm text-[#1A2236] leading-relaxed font-medium">
                Recognising your business in these gaps?
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-1">
                GHL Scale Up designs and builds these exact systems around how your coaching business actually runs.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 mt-3 text-[#0E9BF0] font-semibold text-sm hover:underline">
                BOOK A FREE STRATEGY CALL → <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Section 3: Coaching Client Journey */}
            <h2 id="coaching-journey" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GoHighLevel Fits Into the <span className="text-[#0E9BF0]">Coaching Client Journey</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each of those solutions is one piece. The power shows up when you see them connected across the full journey a
              coaching client takes, from stranger to renewal. Here's the path, and where GoHighLevel operates at each stage.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-6 overflow-x-auto">
              <div className="flex flex-nowrap items-center gap-2 md:gap-3 text-xs md:text-sm min-w-[720px]">
                <span className="bg-[#1C2E4A] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Traffic</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#0E9BF0] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Lead capture</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#25C97D] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Instant follow-up</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#F8D000] text-[#1A2236] px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Qualification</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#0E9BF0] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Call booked</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#25C97D] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Reminders</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#F8D000] text-[#1A2236] px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Sales call</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#0E9BF0] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Follow-up</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#25C97D] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Enrolment</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#F8D000] text-[#1A2236] px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Onboarding</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#0E9BF0] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Delivery</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#25C97D] text-white px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Testimonial</span>
                <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
                <span className="bg-[#F8D000] text-[#1A2236] px-3 py-1.5 rounded-full whitespace-nowrap font-medium">Renewal</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              The reason this matters: in most coaching businesses, that entire journey runs through the founder personally.
              Every stage needs you. GoHighLevel automates the connective tissue between stages the capture, the follow-up,
              the booking, the reminders, the onboarding so your personal attention goes to the coaching and the sales
              conversations, not the admin between them. You stay human where it counts and let the system handle the rest.
            </p>

            {/* Section 4: Workflows */}
            <h2 id="workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Coaching Workflows <span className="text-[#0E9BF0]">You Can Actually Build</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Here are practical workflows a coaching business can build in GoHighLevel. Each one is a chain of automated steps
              triggered by something the lead or client does. These are illustrative templates to show the structure your exact
              setup would be tailored to your business.
            </p>

            <div className="space-y-4 mb-6">
              {workflows.map((workflow, index) => (
                <div key={index} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{workflow.title}</h3>
                  <div className="bg-[#F8F9FB] rounded-lg p-3 mb-2">
                    <p className="text-sm text-[#5C6880] leading-relaxed font-mono text-[0.85rem]">
                      {workflow.steps}
                    </p>
                  </div>
                  {workflow.note && (
                    <p className="text-sm text-[#0E9BF0] leading-relaxed italic">{workflow.note}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Section 5: Use by Type */}
            <h2 id="use-by-type" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Use Cases <span className="text-[#0E9BF0]">by Type of Coach</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Different coaching models stress different parts of the journey. Here's where GoHighLevel tends to matter most for
              each, so you can focus on what's relevant to you.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {coachTypes.map((item, index) => (
                <div key={index} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.type}</h3>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.fit}</p>
                </div>
              ))}
            </div>

            {/* Section 6: Automate First */}
            <h2 id="automate-first" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should a Coach <span className="text-[#0E9BF0]">Automate First?</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You should not try to automate everything at once that's how coaches end up with a half-built system they never
              finish. Prioritise by what recovers revenue you're already losing, in this order.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1C2E4A] text-white">
                    <th className="text-left py-3 px-4 font-semibold">Priority</th>
                    <th className="text-left py-3 px-4 font-semibold">Automate this</th>
                    <th className="text-left py-3 px-4 font-semibold">Why it comes first</th>
                  </tr>
                </thead>
                <tbody>
                  {priorityOrder.map((item, idx) => (
                    <tr key={idx} className={`border-b border-[#DDE1E9] ${idx % 2 === 0 ? 'bg-[#F8F9FB]' : 'bg-white'}`}>
                      <td className="py-3 px-4 font-bold text-[#0E9BF0]">{item.priority}</td>
                      <td className="py-3 px-4 font-medium text-[#1A2236]">{item.action}</td>
                      <td className="py-3 px-4 text-[#5C6880]">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#25C97D]">The logic is simple:</strong> start where the money is leaking fastest and
                the effort is lowest. Speed-to-lead and booking almost always beat everything else for a coach, because they
                protect sales you were about to make. Build one, prove it works, then move down the list.
              </p>
            </div>

            {/* Section 7: Replace Tools */}
            <h2 id="replace-tools" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Replace <span className="text-[#0E9BF0]">Calendly, Kajabi, HubSpot and Mailchimp?</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">For many coaches, yes, GoHighLevel can replace several tools at once, but not
              every tool in every case.</strong> The honest picture matters more than a sales pitch here, so here's where it
              genuinely replaces, where it integrates, and where you might keep what you have.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1C2E4A] text-white">
                    <th className="text-left py-3 px-4 font-semibold">Tool you may use</th>
                    <th className="text-left py-3 px-4 font-semibold">GoHighLevel's fit</th>
                    <th className="text-left py-3 px-4 font-semibold">Honest verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {toolComparison.map((item, idx) => (
                    <tr key={idx} className={`border-b border-[#DDE1E9] ${idx % 2 === 0 ? 'bg-[#F8F9FB]' : 'bg-white'}`}>
                      <td className="py-3 px-4 font-medium text-[#1A2236]">{item.tool}</td>
                      <td className="py-3 px-4 text-[#5C6880]">{item.ghl}</td>
                      <td className={`py-3 px-4 font-medium ${item.verdict.includes('NOT') ? 'text-[#DC3545]' : 'text-[#25C97D]'}`}>
                        {item.verdict}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">HONEST NOTE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>The one to think hardest about is Kajabi.</strong> It's widely documented that GoHighLevel's course
                delivery is good-enough rather than best-in-class, while Kajabi's student-facing experience and community
                features are more polished. The practical rule: if your primary product is a premium course with a rich
                community experience, you may keep Kajabi for delivery and use GoHighLevel for everything else the marketing,
                sales, CRM and automation. If your primary engine is lead generation, calls, and 1-to-1 or group coaching,
                GoHighLevel can run the whole business and its membership module handles course delivery adequately.
              </p>
            </div>

            {/* Section 8: Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Much Does GoHighLevel Cost <span className="text-[#0E9BF0]">for Coaches?</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel costs $97, $297, or $497 per month depending on the plan, with
              usage costs (SMS, email, phone, and AI features) billed separately on top.</strong> Annual billing lowers the
              effective rate by roughly two months. Here's what each plan means for a coaching business.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1C2E4A] text-white">
                    <th className="text-left py-3 px-4 font-semibold">Plan</th>
                    <th className="text-left py-3 px-4 font-semibold">Price (monthly)</th>
                    <th className="text-left py-3 px-4 font-semibold">What it means for a coach</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans.map((item, idx) => (
                    <tr key={idx} className={`border-b border-[#DDE1E9] ${idx % 2 === 0 ? 'bg-[#F8F9FB]' : 'bg-white'}`}>
                      <td className="py-3 px-4 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-4 font-bold text-[#0E9BF0]">{item.price}</td>
                      <td className="py-3 px-4 text-[#5C6880]">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#25C97D]">For most coaches, the $97 Starter plan is the honest answer</strong> it
                includes the CRM, booking, funnels, forms, automation and course hosting a coaching business actually uses.
                The higher plans exist for agencies and resellers, not for a coach running their own practice. Budget for usage
                on top: SMS, email and AI features are billed by consumption, which for a typical coaching business commonly
                adds a modest amount per month, more if you text heavily or use AI features. Always confirm current pricing
                and what each plan includes on GoHighLevel's official pricing page, since details change.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">There's a second cost worth naming honestly: implementation.</strong> The
                software is affordable; the time to design and build the workflows, funnels, forms, pipeline and onboarding
                correctly is the real investment. You can learn it and build it yourself over a few weeks, or work with an
                implementation partner who builds it around your business. That's a genuine cost either way your time or a
                fee and it's worth deciding deliberately which one you're spending.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mt-4">
              For a full breakdown of plans and the usage costs most guides skip, see:
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing: All Plans Explained →</Link>
            </p>

            {/* Section 9: Worth It */}
            <h2 id="worth-it" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Worth It <span className="text-[#0E9BF0]">for Coaches?</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel is worth it for a coach whose growth is limited by lead follow-up,
              call booking, and staying in touch with prospects</strong>, which describes most coaches actively marketing their
              business. If you're capturing leads, nurturing them, booking calls, and converting them into clients as a
              repeatable process, the platform consolidates that entire engine and the return usually comes from the leads you
              stop losing. The speed-to-lead fix alone often justifies the cost.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              It's less compelling if you're a coach who's full purely by referral, not actively marketing, and just needs to
              track a handful of contacts. In that case you'd be buying a commercial kitchen to make toast a simpler tool
              would serve you better until you start generating leads at volume. The honest test is whether you have a
              lead-and-sales process worth automating. If you do, GoHighLevel is one of the strongest options in 2026. If you
              don't yet, it can wait.
            </p>

            {/* Section 10: When Not Right */}
            <h2 id="when-not-right" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When GoHighLevel <span className="text-[#0E9BF0]">May Not Be the Right Choice</span> for a Coach
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A balanced answer means naming where GoHighLevel isn't the best fit. It may not be right if:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Your primary product is a premium course</strong> where the student and community experience is the main differentiator a dedicated platform like Kajabi may deliver that better, though you can still use GoHighLevel for marketing and sales.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You need specialised LMS features</strong> (advanced student progress tracking, detailed course analytics), which GoHighLevel does not focus on.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Your operation is genuinely simple</strong> a few clients, mostly referral, no real lead flow where a full CRM and automation platform is more than you need.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">You aren't willing to set it up properly or maintain it.</strong> GoHighLevel rewards a well-built system; a half-configured account that nobody optimises won't deliver, and that's a real risk to weigh honestly.</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed">
              None of these make GoHighLevel a poor platform. They just mean the fit depends on your business model, and knowing
              that upfront is how you avoid paying for capability you won't use.
            </p>

            {/* Section 11: How GHL Scale Up Helps */}
            <h2 id="how-ghl-scale-up-helps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GHL Scale Up Helps Coaches <span className="text-[#0E9BF0]">Implement GoHighLevel</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Everything above is buildable. The catch is that building it well the workflows that fire correctly, the pipeline
              that reflects your real sales process, the onboarding that doesn't break, the messaging compliance that keeps your
              texts delivering takes real time and a real learning curve. A half-built system quietly costs you the leads it
              was supposed to save.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That's the gap we fill. GHL Scale Up designs and builds GoHighLevel systems around how a coaching business actually
              runs lead capture and instant follow-up, discovery-call booking and reminders, sales pipeline, client onboarding,
              reactivation and testimonial collection tested and live, so you're not spending weeks in tutorials instead of
              coaching. If you'd rather have the system built correctly around your business than assemble it yourself, that's
              the conversation to have with us.
            </p>

            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white my-6">
              <h3 className="text-lg font-bold mb-3">Want this system built around your coaching business?</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4 max-w-md mx-auto">
                GHL Scale Up designs, builds, and optimises GoHighLevel for lead capture, follow-up, booking, and onboarding,
                so you can focus on coaching.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                BOOK A FREE STRATEGY CALL → <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 12: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked <span className="text-[#0E9BF0]">Questions</span>
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

            {/* Section 13: Final Takeaway */}
            <h2 id="takeaway" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final <span className="text-[#0E9BF0]">Takeaway</span>
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is, for most actively-marketing coaches, the strongest single system available in 2026 for running the
              business around the coaching capturing leads, answering them instantly, booking calls, cutting no-shows,
              following up, onboarding clients, and keeping past leads and clients in play. Its clearest weakness is premium
              course delivery, where dedicated platforms still lead, and it's overkill for a coach with no real lead flow to
              automate.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              The practical move is to look back at the leaks described here the leads that don't get answered, the calls that
              no-show, the follow-up that doesn't happen, the onboarding you do by hand and start with the one costing you the
              most. Automate lead capture and instant follow-up first, prove it recovers revenue, then build outward. Whether
              you build it yourself or have it built, the goal is the same: a coaching business that runs on systems, so your
              energy goes into coaching and closing, not admin.
            </p>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Reading and Services</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow & Marketing Automation →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
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
                5+ years GHL experience · 200+ systems built globally including coaching and consulting businesses across life
                coaching, business coaching, health coaching, and strategy consulting. All feature details verified as of July 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2">
              <div className="text-sm font-bold text-white mb-2">Want More Discovery Calls?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We build coaching systems that book calls on autopilot. 3 to 5 business days.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Started
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
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