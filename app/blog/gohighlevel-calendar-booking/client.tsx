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
  Star,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelCalendarBookingClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'calendar-types',
        'replace-calendly',
        'setup',
        'round-robin',
        'reminders',
        'sync',
        'slots-not-showing',
        'embed',
        'tracking',
        'mistakes',
        'faq'
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(id);
            break;
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
      q: "How many calendar types does GoHighLevel have?",
      a: "Five distinct calendar types in practice: Personal or Standard, Round Robin, Collective, Service, and Class or Event. Some official documentation groups these into four categories by folding Collective into Service, but the platform itself presents five distinct configuration options when you create a new calendar."
    },
    {
      q: "Does GoHighLevel's calendar cost extra on top of the plan price?",
      a: "No. All calendar types are included on every GoHighLevel plan starting at $97/month, with no per-booking fee and no seat-based pricing. This differs meaningfully from Calendly, which charges per user starting at $10 to $12/seat/month for the Standard plan and $16 to $20/seat/month for the Teams plan that includes round-robin scheduling."
    },
    {
      q: "Does GoHighLevel calendar sync with Outlook?",
      a: "Yes, but only on the Unlimited ($297/month) and Agency Pro ($497/month) plans. Outlook integration is not available on the Starter ($97/month) plan. Google Calendar integration does not carry this restriction and is available across all plans. Outlook integration supports Office 365, Outlook.com, live.com, and Hotmail, but does not support Outlook Desktop accounts that are not synced to the cloud, or on-premise Exchange servers."
    },
    {
      q: "Why are my GoHighLevel booking slots not showing up?",
      a: "The three most common causes are a minimum notice period set too long relative to your remaining working hours, an external calendar that is disconnected or syncing the wrong calendar (especially on Round Robin or Collective calendars), or, less commonly, a genuine platform sync error. Start with GoHighLevel's native Troubleshooting Tool, accessible from the calendar header, which is specifically built to diagnose this category of issue quickly."
    },
    {
      q: "How do I embed a GoHighLevel calendar on my website?",
      a: "For an external website, click the three-dot icon on the calendar, select Share, then the Embed Code tab, and paste the provided HTML into a custom code element on your site. If you are building your page directly inside GoHighLevel's own page builder, use the native Calendar element instead, which lets you select and insert the calendar without managing embed code manually."
    },
    {
      q: "Can GoHighLevel calendar take payments at the time of booking?",
      a: "Yes. GoHighLevel calendars support Stripe integration, allowing you to collect payment as part of the booking flow itself, before the appointment is confirmed. This is commonly used by service businesses that require a deposit or full payment upfront specifically to reduce no-shows, since a client who has already paid is significantly more likely to attend."
    },
    {
      q: "What is the difference between Connected, Linked, and Conflict calendars in GoHighLevel?",
      a: "Connected Calendars is the authorisation step, granting GoHighLevel permission to access an external account. Linked Calendars imports events from that connected account so your true availability displays accurately. Conflict Calendars marks specific connected calendars as blockers, automatically making any overlapping GoHighLevel slot show as unavailable, which is the setting that actually prevents double-booking."
    },
    {
      q: "What is a realistic no-show rate with GoHighLevel calendars?",
      a: "Published research on unoptimised GoHighLevel calendar setups found a typical no-show rate of 20 to 35%. Properly configured calendars, with layered automated reminders and thoughtful availability settings, bring this down to approximately 5 to 8%. The gap between these two numbers is almost entirely attributable to reminder automation, not the underlying calendar technology itself."
    },
    {
      q: "Should I switch from Calendly to GoHighLevel if I already use GoHighLevel for CRM?",
      a: "In most cases, yes. If you are already paying for GoHighLevel for CRM, funnels, or SaaS Mode, its calendar system is already included at no additional cost and keeps booking data inside the same CRM record automatically, without a separate integration. Continuing to pay separately for Calendly on top of an active GoHighLevel plan usually means paying twice for overlapping functionality every month."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'calendar-types', title: '1. What Calendar Types Does GoHighLevel Offer, and How Are They Different?' },
    { id: 'replace-calendly', title: '2. Can GoHighLevel Really Replace Calendly?' },
    { id: 'setup', title: '3. How Do You Set Up Your First GoHighLevel Calendar, Step by Step?' },
    { id: 'round-robin', title: '4. How Does Round Robin Booking Work for a Team?' },
    { id: 'reminders', title: '5. How Do You Reduce No-Shows With Automated Reminders?' },
    { id: 'sync', title: '6. How Do You Connect and Sync Google, Outlook, or iCloud Calendars?' },
    { id: 'slots-not-showing', title: '7. Why Are Booking Slots Sometimes Not Showing Up?' },
    { id: 'embed', title: '8. How Do You Embed Booking on a Website or Funnel?' },
    { id: 'tracking', title: '9. What Should You Track After Launch?' },
    { id: 'mistakes', title: '10. What Are the Common Mistakes to Avoid?' },
    { id: 'faq', title: '11. Frequently Asked Questions' }
  ];

  const calendarTypes = [
    { type: 'Personal / Standard', what: 'One person, one service, one booking link', bestFor: 'Solo consultants, coaches, single-provider clinics' },
    { type: 'Round Robin', what: 'Distributes bookings across a team, either by availability or equal rotation', bestFor: 'Sales teams, agencies with multiple closers' },
    { type: 'Collective', what: 'Only offers a slot when every assigned team member is free', bestFor: 'Panel interviews, meetings requiring multiple staff' },
    { type: 'Service', what: 'Multiple service types, each with its own duration and staff', bestFor: 'Med spas, salons, clinics with varied treatments' },
    { type: 'Class / Event', what: 'Multiple people can book the same time slot up to a capacity limit', bestFor: 'Group coaching, webinars, fitness classes' }
  ];

  const calendlyPricing = [
    { platform: 'Calendly Free', entry: '$0', team: 'N/A — 1 event type, Calendly branding on every page', roundRobin: 'No' },
    { platform: 'Calendly Standard', entry: '$10 to $12/seat/month', team: 'Scales per seat, no team features', roundRobin: 'No — requires Teams plan' },
    { platform: 'Calendly Teams', entry: '$16 to $20/seat/month', team: 'Scales per seat', roundRobin: 'Yes' },
    { platform: 'GoHighLevel Starter', entry: '$97/month flat', team: 'Unlimited team members included', roundRobin: 'Yes, included' },
    { platform: 'GoHighLevel Unlimited', entry: '$297/month flat', team: 'Unlimited team members and sub-accounts', roundRobin: 'Yes, included' }
  ];

  const metricsData = [
    { metric: 'Booking completion rate', why: 'Shows whether visitors who open the calendar actually complete a booking', watch: 'A sharp drop suggests a slot visibility or notice-period issue' },
    { metric: 'No-show rate', why: 'Directly measures whether your reminder sequence is actually working', watch: 'Above 15 to 20% usually signals a missing or weak reminder step' },
    { metric: 'Round Robin distribution', why: 'Confirms bookings are being fairly balanced across the team', watch: 'Uneven distribution suggests a sync or availability misconfiguration' },
    { metric: 'Reschedule rate', why: 'Indicates whether your notice period or available time slots genuinely fit real client schedules', watch: 'High reschedule rates often mean the original slot options were too narrow or inconvenient' },
    { metric: 'Time to first booking after page view', why: 'Measures friction in your overall booking flow', watch: 'Longer times suggest too many steps or clicks before a slot is confirmed' }
  ];

  const mistakes = [
    'Setting a minimum notice period that is too long relative to your actual working hours, leaving no visible slots for days at a time.',
    'Launching a Round Robin calendar without every team member connecting and individually authorising their own external calendar.',
    'Skipping the reminder automation entirely and relying on clients to simply remember their appointment on their own.',
    'Using a Personal calendar for a multi-service business instead of a Service calendar, forcing every booking into a single duration and description.',
    'Assuming Outlook integration is available on the Starter plan, then losing setup time troubleshooting a restriction that is actually a plan-tier limitation.',
    'Sending clients to an external booking link instead of embedding the calendar directly on the page, adding an unnecessary click and drop-off point.',
    'Never checking the no-show and reschedule rate after launch, so a quietly broken reminder sequence goes unnoticed for months.',
    'Manually auditing every setting when a problem occurs instead of starting with the native Troubleshooting Tool covered in Section 6.'
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Calendar & Booking</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Calendar</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Booking</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Calendar & Booking:<br />
            <span className="text-[#F8D000]">Complete Setup Guide + Calendly Comparison (2026)</span>
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

          {/* Intro Paragraphs */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            If you are researching the GoHighLevel calendar and booking system, you are likely trying to answer one of three questions: what can it actually do, how do you set it up correctly the first time, and can it replace the Calendly subscription you are already paying for. At <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link>, we configure GoHighLevel calendars for agencies and service businesses every week, and we see the same handful of misconfigurations cause the same handful of problems, over and over. This guide covers every calendar type in detail, a full step-by-step setup walkthrough, the sync and troubleshooting issues that come up most often, and an honest, numbers-based comparison with Calendly.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel includes a full appointment booking system on every plan starting at $97 a month. It is not a stripped-down scheduling widget bolted onto a CRM as an afterthought. It supports individual bookings, team round-robin routing, group class capacity limits, and service-specific booking pages, and every single booking automatically creates or updates a contact record and can trigger a workflow, without any manual data entry or a separate integration.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            The honest caveat, and the reason this guide runs long, is that a calendar system this capable only performs as well as its configuration. Buffer times, minimum notice periods, external calendar sync, plan-level feature restrictions, and reminder automations all need to be set correctly. Get any one of them wrong and you either lose visible availability, double-book a team member, or watch no-shows continue exactly as before you "automated" anything.
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
                GoHighLevel includes 4 to 5 calendar types depending on how you count them: Personal or Standard, Round Robin, Collective, Service, and Class or Event.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                All calendar types support Google and Outlook two-way sync, Zoom integration, custom intake forms, Stripe payment collection, and automated SMS or email reminders. A typical single-user calendar takes 30 to 45 minutes to configure properly. A team calendar with round-robin routing takes 60 to 90 minutes. For most businesses currently paying for Calendly on top of GoHighLevel, the built-in calendar system covers the same use cases with unlimited team members included in the plan price, no separate per-seat charge.
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

            {/* Section 1: Calendar Types */}
            <h2 id="calendar-types" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Calendar Types Does GoHighLevel Offer, and How Are They Different?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's calendar system is built around distinct calendar types, and choosing the correct one for your specific use case is the single most important decision you make before any other configuration step. Get this choice wrong and you will spend hours fighting the platform to make one calendar type behave like a different one, instead of simply picking the right type from the start.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Different official GoHighLevel documentation and third-party guides describe this as either four or five calendar types, depending on whether Collective is treated as its own category or folded into Service. Below is the fuller five-type breakdown, since it reflects the actual distinct configuration options you will see inside the platform.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Personal or Standard Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the simplest calendar type, built for one person handling all their own bookings. It is the right choice for solo consultants, individual coaches, single-provider clinics, or any scenario where exactly one person's availability determines whether a slot is open. Setup is the fastest of any calendar type because there is no routing logic to configure, only one person's working hours, buffer time, and appointment duration.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Round Robin Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Round Robin distributes incoming bookings across a team automatically, using one of two logic options covered in detail in Section 4. This is the calendar type most sales teams and multi-provider service businesses need, because it removes the manual work of deciding who takes the next lead and ensures no single team member becomes overloaded while others sit idle.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Collective Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A Collective calendar only offers a time slot when every single team member assigned to that calendar is free simultaneously. This is a narrower use case than Round Robin, built specifically for situations like panel interviews, board meetings, or any appointment type that genuinely requires multiple specific people in the room or on the call at the same time. Because the system needs every assigned person free, Collective calendars typically show fewer available slots than Round Robin calendars covering the same team.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Service Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A Service calendar is designed for businesses offering multiple distinct services, each with its own duration, description, and sometimes its own assigned staff member. A medical spa is the clearest example: a consultation might be 30 minutes with any available provider, while a specific treatment might be 90 minutes with only two providers qualified to perform it. Service calendars let you configure each service as its own bookable option under one organised booking page, rather than forcing every appointment type into a single generic calendar.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Class or Event Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Class or Event calendars allow multiple separate people to book the same time slot, up to a capacity limit you define. This is the calendar type for group coaching sessions, fitness classes, webinars with limited attendance, or any scenario where you are filling seats rather than booking one person at a time. Configuration includes setting the capacity number and, in many setups, waitlist behaviour for when a class fills up.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Calendar Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Does</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarTypes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.what}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every calendar type shares the same underlying automation engine regardless of which one you choose. A booking on any calendar type can create a contact, update a pipeline stage, trigger a reminder sequence, or fire a completely custom workflow. The calendar type only determines the booking logic and who is offered which slots, not what happens automatically after a booking is confirmed.
            </p>

            {/* Section 2: Replace Calendly */}
            <h2 id="replace-calendly" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Can GoHighLevel Really Replace Calendly?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the honest cost and capability comparison most GoHighLevel marketing pages gloss over in a single sentence. Calendly is priced per seat, meaning cost scales directly and permanently with your team size, while GoHighLevel's calendar system is included at a flat rate regardless of how many team members use it.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Entry Price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Team Pricing</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Round Robin Included?</th>
                  </tr>
                </thead>
                <tbody>
                  {calendlyPricing.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.entry}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.team}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.roundRobin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE REAL MATH</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A 5-person team on Calendly Teams pays $80 to $100 a month on top of whatever CRM they already use. A 10-person team pays $160 to $200 a month, and that cost keeps climbing with every hire. GoHighLevel's calendar system is included in the $97 Starter plan regardless of team size, and it is already included if you are using GoHighLevel for CRM, funnels, or SaaS Mode. If you are currently paying for both Calendly and GoHighLevel, you are very likely paying twice for the same underlying function every single month.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel adds beyond a standalone booking tool</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The functional difference is not just cost. Every GoHighLevel booking automatically creates or updates a contact record, can move a deal through a pipeline stage, and can trigger a full nurture sequence, none of which a standalone scheduling tool like Calendly can do without a separate integration and ongoing sync maintenance. When someone books through Calendly, that booking has to be pushed into your CRM through Zapier or a native integration, introducing a delay and a potential point of failure. When someone books through a GoHighLevel calendar, there is no integration step because the calendar and the CRM are the same system.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What Calendly still does better</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              To be fair to Calendly, its standalone free tier is more polished for a single solo user who needs nothing beyond one simple event type, and its booking page design has had more years of dedicated refinement as a pure scheduling product. If your only need is a personal booking link and you are not using GoHighLevel for anything else in your business, Calendly's free plan remains a reasonable standalone choice.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For any business already running CRM, funnels, or client communication through GoHighLevel, consolidating booking into the same platform removes a recurring subscription and closes the data gap between when someone books and when your CRM actually knows about it.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">BUILT-FOR-YOU SETUP</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you want your calendars, round-robin rules, and no-show automations configured professionally: <Link href="/services/calendar-booking" className="text-[#0E9BF0] hover:underline">GoHighLevel Calendar & Booking Setup Service →</Link>
              </p>
            </div>

            {/* Section 3: Setup */}
            <h2 id="setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Set Up Your First GoHighLevel Calendar, Step by Step?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A single-user calendar takes roughly 30 to 45 minutes to configure properly. A team calendar with round-robin routing takes 60 to 90 minutes, mainly because each team member needs their own external calendar connected and authorised individually. Skipping steps, or rushing through them, is the single most common reason calendars end up misconfigured after launch.
            </p>

            <ol className="space-y-3 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Step 1: Create a calendar group before creating any calendar</strong><br />
              Inside your sub-account, navigate to Calendars, then Calendar Settings, then Groups, and create a new group first, even if you only plan to have one calendar right now. A group organises your calendars under a single, clean bookable URL structure. Skipping this step and creating a standalone calendar means that if you ever add a second calendar later, you risk breaking booking links that clients or team members have already saved or bookmarked.</li>
              
              <li><strong className="text-[#1A2236]">Step 2: Name the group descriptively</strong><br />
              Use a name that describes the actual purpose, such as "Strategy Calls" or "Patient Bookings," rather than a generic placeholder like "Group 1." This name may appear in your URL structure and in internal reporting, so a descriptive name saves confusion later when you have multiple groups running.</li>
              
              <li><strong className="text-[#1A2236]">Step 3: Set a short, brand-aligned URL slug</strong><br />
              The URL slug becomes part of your public booking link, the one you will share with prospects, embed on your website, or include in email signatures. Keep it short, readable, and aligned with your brand rather than accepting a random auto-generated string.</li>
              
              <li><strong className="text-[#1A2236]">Step 4: Choose your calendar type</strong><br />
              Inside the group, click New Calendar and select the type that matches your actual use case: Personal, Round Robin, Collective, Service, or Class. Refer back to Section 1 if you are unsure which type fits your business model. This decision is difficult to fully undo later without rebuilding the calendar, so take the time to choose correctly the first time.</li>
              
              <li><strong className="text-[#1A2236]">Step 5: Enter the calendar name and internal description</strong><br />
              The Calendar Name is what bookers see on the public booking page, so write it from their perspective, describing what they are booking rather than an internal department label. The internal Description is only visible to your team and is useful for documenting exactly what this calendar is for, especially once you have several calendars running.</li>
              
              <li><strong className="text-[#1A2236]">Step 6: Assign the Calendar Owner</strong><br />
              The Calendar Owner is the team member whose availability this calendar reflects for Personal calendars, or the primary contact for reporting purposes on team calendars. This assignment also determines default notification routing in many configurations, so assign it deliberately rather than defaulting to whoever happened to be logged in during setup.</li>
              
              <li><strong className="text-[#1A2236]">Step 7: Configure the Availability tab</strong><br />
              Open the Availability tab inside your new calendar. Toggle on the specific days you accept bookings, commonly Monday through Friday for most service businesses, though this should reflect your actual working pattern rather than a generic default. Set the daily Start Time and End Time for each active day individually, since some businesses have different hours on different days.</li>
              
              <li><strong className="text-[#1A2236]">Step 8: Set the Appointment Duration</strong><br />
              Choose a duration that matches the real length of the appointment type this calendar is built for, commonly 15, 30, or 60 minutes. If a single calendar needs to support multiple durations for different purposes, consider whether you actually need a Service calendar instead, which is purpose-built for exactly this situation.</li>
              
              <li><strong className="text-[#1A2236]">Step 9: Add Buffer Time before and after each slot</strong><br />
              Buffer time prevents back-to-back bookings with zero breathing room between them, which is one of the fastest ways to run consistently late and create a poor client experience. Even 10 to 15 minutes of buffer time before and after each appointment gives your team room to wrap up notes, prepare for the next call, or simply take a breath.</li>
              
              <li><strong className="text-[#1A2236]">Step 10: Set the Minimum Scheduling Notice</strong><br />
              Minimum Scheduling Notice, for example 4 hours, prevents last-minute bookings that arrive with too little warning for your team to prepare properly. Set this thoughtfully. Too short a notice period risks unprepared meetings, but too long a notice period can hide all your near-term availability, which is one of the most common causes of the "no slots showing" problem covered in detail in Section 7.</li>
              
              <li><strong className="text-[#1A2236]">Step 11: Connect external calendars for sync</strong><br />
              Connect the calendar owner's Google, Outlook, or iCloud account for two-way sync, so that existing external events automatically block GoHighLevel availability and prevent double-booking. This step is covered in full detail, including a plan-level restriction worth knowing about, in Section 6.</li>
              
              <li><strong className="text-[#1A2236]">Step 12: Test the entire booking flow before going live</strong><br />
              Before sharing the calendar link with a single real prospect, book a test appointment yourself from an external browser or incognito window. Confirm the appointment appears correctly in your GoHighLevel dashboard, confirm it appears in your connected Google or Outlook calendar if sync is enabled, and confirm the confirmation email and any reminder workflow actually fire. Skipping this test is how a calendar goes live with broken time zone handling, a missing reminder sequence, or confirmation emails silently failing.</li>
            </ol>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">ONE IMPORTANT DETAIL FOR TEAM CALENDARS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Every team member on a Round Robin or Collective calendar needs to connect and authorise their own individual Google, Outlook, or Zoom account. A shared, unconnected, or incorrectly connected calendar is the single most common reason Round Robin bookings route incorrectly or accidentally double-book a team member who appeared available but was not.
              </p>
            </div>

            {/* Section 4: Round Robin */}
            <h2 id="round-robin" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Does Round Robin Booking Work for a Team?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Round Robin is purpose-built for sales teams and service teams where any qualified team member can take the appointment, and you want bookings distributed fairly rather than everyone piling onto whichever single person has the most visible calendar link.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Two routing logic options</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Optimise for Availability:</strong> The system offers the slot of whoever is free first, prioritising the booker's convenience and minimising their wait time. Over time this can produce uneven distribution across the team, since faster-responding or more flexible team members will naturally receive more bookings.</li>
                <li><strong className="text-[#0E9BF0]">Equal Distribution:</strong> The system rotates through the team to ensure every member receives a comparable number of bookings over time, regardless of who happens to be free soonest for any individual booking request.</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sales teams most commonly use Equal Distribution to keep lead volume fair across every rep, since an uneven lead distribution can create both morale problems and inconsistent revenue attribution. Support and service teams more commonly use Optimise for Availability, since minimising the customer's wait time typically matters more than perfectly even internal distribution for these use cases.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each team member's calendar connection must be authorised individually, and it is worth periodically auditing that every person is syncing the correct calendar. A frequent misconfiguration we see is a team member connecting a personal calendar instead of their actual work calendar, which causes GoHighLevel to believe they are free during hours when they are actually in unrelated personal appointments.
            </p>

            {/* Section 5: Reminders */}
            <h2 id="reminders" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Reduce No-Shows With Automated Reminders?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A booking system without a proper reminder sequence still leaves you fully exposed to no-shows. Published research on unoptimised GoHighLevel calendars found a typical no-show rate of 20 to 35% when reminders, availability settings, and booking flows are left at default configuration. Properly configured calendars with automated reminders and thoughtful availability settings bring that down to a 5 to 8% no-show rate.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A reliable reminder sequence</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#0E9BF0]">Immediate confirmation:</strong> Sent by both email and SMS the moment the booking is made, so the client has written confirmation of the exact time before they even close the booking tab.</li>
                <li><strong className="text-[#0E9BF0]">A 24-hour reminder:</strong> Giving the client enough advance notice to reschedule if a conflict has come up, without leaving your calendar slot sitting empty until the last minute.</li>
                <li><strong className="text-[#0E9BF0]">A 2-hour reminder:</strong> Catching last-minute forgetfulness right before the appointment when it matters most.</li>
                <li><strong className="text-[#0E9BF0]">An automatic no-show follow-up workflow:</strong> Triggered the moment the appointment status is manually or automatically marked as no-show, offering an easy one-click rebooking link rather than requiring the client to start the booking process over from scratch.</li>
              </ol>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every step in this sequence runs as a standard GoHighLevel workflow triggered off the Appointment Status custom field, set to fire on the Booked status, and again separately on the No-Show status if that status changes after the fact. None of this requires a separate reminder tool or a third-party integration.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">PLAN-LEVEL REQUIREMENT FOR SMS REMINDERS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                SMS reminders require A2P 10DLC registration for numbers sending to US recipients. If your reminder SMS messages are not sending at all, or are being silently throttled, this is the first thing to check, alongside verifying your sending number is properly registered and approved.
              </p>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A2P REGISTRATION GUIDE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For the full registration process required before SMS reminders will send reliably: <Link href="/blog/agency-a2p-registration" className="text-[#0E9BF0] hover:underline">Agency A2P Registration →</Link>
              </p>
            </div>

            {/* Section 6: Sync */}
            <h2 id="sync" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do You Connect and Sync Google, Outlook, or iCloud Calendars?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              External calendar sync is where most of the subtle, hard-to-diagnose calendar problems originate, because GoHighLevel uses three distinct concepts that are easy to confuse with each other.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Connected Calendars, Linked Calendars, and Conflict Calendars</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Connected Calendars:</strong> This grants GoHighLevel permission to read, and optionally write, events from an external calendar account. This is the authorisation step, not the sync behaviour itself.</li>
                <li><strong className="text-[#0E9BF0]">Linked Calendars:</strong> This imports events and availability from the connected external account into GoHighLevel, so your true busy times are reflected accurately rather than GoHighLevel only knowing about bookings made through itself.</li>
                <li><strong className="text-[#0E9BF0]">Conflict Calendars:</strong> This marks specific connected calendars as blockers, automatically making any overlapping GoHighLevel booking slot show as unavailable. This is what actually prevents double-booking across your external and GoHighLevel calendars.</li>
              </ul>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">An important plan-level restriction to know before you configure anything</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Outlook integration is restricted by plan tier. Per GoHighLevel's own support documentation, Outlook calendar integration is available on the Unlimited ($297/month) and Agency Pro ($497/month) plans, and is not available on the Starter ($97/month) plan. If you are on the Starter plan and cannot find the Outlook connection option, this is very likely why, not a bug or a setup mistake on your part. Google Calendar integration does not carry this same restriction and is available across plans.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Connecting Google Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Google Calendar integration provides real-time, two-way appointment syncing, supports conflict calendars to avoid double-booking, and includes automatic catch-up syncing, meaning any appointment created while temporarily disconnected will sync automatically once the connection is restored.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Connecting Outlook Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Outlook integration supports Office 365, Outlook.com, live.com, and Hotmail calendars. One important limitation: if you use Outlook Desktop and your events are not synced to the cloud, those events will not be visible to GoHighLevel, since the integration reads from Microsoft's cloud calendar data, not the local desktop application. On-premise Exchange server accounts are also not supported. You can configure your Primary Calendar, which reads and writes appointments, separately from your Check for Conflicts calendar, which only reads events to block availability, and these can even point to different providers, for example writing to Outlook while checking conflicts against both Outlook and Google simultaneously.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Connecting iCloud Calendar</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              iCloud integration requires generating an app-specific password through your Apple ID account settings, since Apple does not allow third-party apps to use your primary iCloud password directly. One notable restriction: iCloud integration is not supported for Personal or Simple calendars, only for the other calendar types.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">USE THE BUILT-IN TROUBLESHOOTING TOOL FIRST</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GoHighLevel includes a native Troubleshooting Tool for Calendar, accessible directly from the calendar header. It detects common configuration issues in real time, including availability gaps, unassigned users, and Google or Outlook sync failures, without needing to contact support. If a calendar connection breaks because an external calendar was deleted at the provider level, the tool also lets you clean up broken connections directly rather than leaving an error banner in place indefinitely.
              </p>
            </div>

            {/* Section 7: Slots Not Showing */}
            <h2 id="slots-not-showing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Why Are Booking Slots Sometimes Not Showing Up?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is one of the most common support questions GoHighLevel users run into, and it almost always traces back to one of three root causes.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Three common causes</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#0E9BF0]">Cause 1: Minimum notice period excludes all near-term slots</strong><br />
                If your notice period is set to 24 hours, and it is currently 9am on a Monday with the office closing at 5pm and no further availability configured until next Friday, a booker attempting to schedule right now may see no visible slots at all for several days. This is a configuration issue, not a bug. Fix it by shortening the notice period, extending your configured booking date range further into the future, or expanding your working hours to open up more near-term capacity.</li>
                
                <li><strong className="text-[#0E9BF0]">Cause 2: External calendar is not properly connected or is syncing the wrong calendar</strong><br />
                For Round Robin and Collective calendars specifically, a team member whose external calendar has been disconnected, or is connected but reading in a check-only mode with stale data, will cause GoHighLevel to display incorrect availability for that person. Verify Google or Outlook two-way sync is genuinely enabled and authorised for every team member on the calendar, and confirm each person is syncing the correct calendar, since many users maintain multiple calendars in their Google or Outlook account and accidentally connect the wrong one.</li>
                
                <li><strong className="text-[#0E9BF0]">Cause 3: SMS reminders silently failing due to compliance issues</strong><br />
                If reminders are not being delivered at all, verify A2P 10DLC registration is fully complete and approved for the sending number. Unregistered or pending numbers will have SMS delivery blocked entirely or severely throttled, and this failure often happens silently, with no obvious error visible in your workflow builder.</li>
              </ol>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For any of these three causes, start with the native Troubleshooting Tool covered in Section 6 before manually auditing every setting, since it is specifically built to surface exactly this category of configuration issue.
            </p>

            {/* Section 8: Embed */}
            <h2 id="embed" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Do You Embed Booking on a Website or Funnel?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's calendars are built to be embedded directly into landing pages, funnels, and external websites, not only used as a standalone shared link. Research on booking friction consistently shows that if booking an appointment takes more than about 60 seconds or requires navigating to a separate external site, you lose a meaningful share of prospects to competitors who made the process easier.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Option 1: Direct share link</strong><br />
              Found under the Share option on any calendar, this is the simplest method. Send the URL directly via email, SMS, or social media, and bookers land on a hosted GoHighLevel booking page. This works best for sales reps or consultants sending a calendar link in a one-to-one conversation, where a full embed is unnecessary.</li>
              
              <li><strong className="text-[#1A2236]">Option 2: HTML embed code for external websites</strong><br />
              For the specific calendar you want to embed, click the three-dot icon next to it and select Share, then choose the Embed Code tab in the pop-up modal. Copy this code and paste it into a custom code element on any external website, WordPress site, or page builder that accepts raw HTML. No plugins or manual coding beyond pasting the snippet are required.</li>
              
              <li><strong className="text-[#1A2236]">Option 3: Native Calendar element inside GoHighLevel's page builder</strong><br />
              If you are building a funnel or website directly inside GoHighLevel, use the Calendar element in the page builder instead of the HTML embed code. This element lets you select the specific calendar to display and inserts it automatically, without needing to manually copy or manage embed code at all.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Choosing iframe versus pop-up display</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's embed options typically offer either an iframe display, which shows the calendar inline on the page as the visitor scrolls, or a pop-up widget, which displays a button that opens the calendar in an overlay when clicked. Inline iframe embeds generally perform better on a dedicated "Book a Call" or "Schedule Consultation" page, where booking is the primary action you want the visitor to take. Pop-up widgets work well on pages where booking is a secondary action alongside other content.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Reducing the number of clicks and page transitions between a prospect deciding to book and actually confirming a time slot has a consistently measurable effect on completed bookings. Embedded calendars outperform external redirect links for this reason in nearly every case we have configured.
            </p>

            {/* Section 9: Tracking */}
            <h2 id="tracking" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. What Should You Track After Launch?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A calendar system is only as valuable as what you do with the data it generates. These are the specific numbers worth reviewing on a weekly basis once your booking system is fully live.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Metric</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why It Matters</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Watch For</th>
                  </tr>
                </thead>
                <tbody>
                  {metricsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.metric}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 10: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. What Are the Common Mistakes to Avoid?
            </h2>

            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {mistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Every recommendation in this guide reflects real GoHighLevel calendar configurations built for agencies and service businesses across our client base. See <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies</Link> to review actual client outcomes.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-center text-white">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED YOUR CALENDAR AND BOOKING SYSTEM CONFIGURED PROPERLY?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4 max-w-md mx-auto">
                GHL Scale Up sets up your GoHighLevel calendars, round-robin rules, external calendar sync, no-show reminder automation, and website embeds so your booking system works correctly from day one, not after weeks of trial and error. Setup completed in 3 to 5 business days.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 11: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              11. Frequently Asked Questions
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

            {/* Related Resources */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/calendar-booking" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Calendar & Booking Setup Service →</Link>
                <Link href="/gohighlevel-saas-mode" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-vs-keap-2026-comparison" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs Keap: Which CRM Should You Choose in 2026? →</Link>
                <Link href="/blog/agency-a2p-registration" className="text-sm text-[#0E9BF0] hover:underline">Agency A2P Registration Guide →</Link>
                <Link href="/blog/get-first-10-gohighlevel-saas-clients" className="text-sm text-[#0E9BF0] hover:underline">How to Get Your First 10 GoHighLevel SaaS Clients →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to get your calendar and booking system configured properly?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up sets up your GoHighLevel calendars, round-robin rules, external calendar sync, no-show reminder automation, and website embeds so your booking system works correctly from day one.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency founded by Aryan Trivedi · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency founded by Aryan Trivedi. Based in India, we serve agencies and SaaS founders across 6 countries with 200+ GoHighLevel builds delivered, including calendar and booking system configuration. This guide reflects direct experience setting up and troubleshooting GoHighLevel calendars for real client accounts, combined with independently verified 2026 pricing and feature data for both GoHighLevel and Calendly, and official GoHighLevel support documentation.
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
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">Calendar & Booking Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Calendar Setup?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We configure your GoHighLevel calendars, round-robin rules, sync, and no-show automation — so your booking system works correctly from day one.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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