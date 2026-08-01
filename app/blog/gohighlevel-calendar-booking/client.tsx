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
    'Manually auditing every setting when a problem occurs instead of starting with the native Troubleshooting Tool.'
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
            <span className="text-[#F8D000]">The Complete 2026 Guide</span>
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
            If you are researching the GoHighLevel calendar and booking system, you are likely trying to answer one of three questions: what can it actually do, how do you set it up correctly the first time, and can it replace the Calendly subscription you are already paying for. At <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link>, we configure GoHighLevel calendars for agencies and service businesses every week, and we see the same handful of misconfigurations cause the same handful of problems, over and over. This guide covers every calendar type in detail, a full step-by-step setup walkthrough, the sync and troubleshooting issues that come up most often, and an honest, numbers-based comparison with Calendly.
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

            {/* Section 2: Replace Calendly */}
            <h2 id="replace-calendly" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Can GoHighLevel Really Replace Calendly?
            </h2>

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

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-center text-white">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">BUILT-FOR-YOU SETUP</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4 max-w-md mx-auto">
                If you want your calendars, round-robin rules, and no-show automations configured professionally.
              </p>
              <Link href="/services/calendar-booking" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                GoHighLevel Calendar & Booking Setup Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 3: Setup */}
            <h2 id="setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Set Up Your First GoHighLevel Calendar, Step by Step?
            </h2>

            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Create a calendar group before creating any calendar:</strong> Inside your sub-account, navigate to Calendars, then Calendar Settings, then Groups, and create a new group first.</li>
              <li><strong className="text-[#1A2236]">Name the group descriptively:</strong> Use a name that describes the actual purpose, such as "Strategy Calls" or "Patient Bookings."</li>
              <li><strong className="text-[#1A2236]">Set a short, brand-aligned URL slug:</strong> The URL slug becomes part of your public booking link.</li>
              <li><strong className="text-[#1A2236]">Choose your calendar type:</strong> Select the type that matches your actual use case: Personal, Round Robin, Collective, Service, or Class.</li>
              <li><strong className="text-[#1A2236]">Enter the calendar name and internal description:</strong> The Calendar Name is what bookers see on the public booking page.</li>
              <li><strong className="text-[#1A2236]">Assign the Calendar Owner:</strong> The team member whose availability this calendar reflects.</li>
              <li><strong className="text-[#1A2236]">Configure the Availability tab:</strong> Toggle on the specific days you accept bookings and set daily Start Time and End Time.</li>
              <li><strong className="text-[#1A2236]">Set the Appointment Duration:</strong> Choose a duration that matches the real length of the appointment type.</li>
              <li><strong className="text-[#1A2236]">Add Buffer Time before and after each slot:</strong> Prevents back-to-back bookings with zero breathing room.</li>
              <li><strong className="text-[#1A2236]">Set the Minimum Scheduling Notice:</strong> Prevents last-minute bookings that arrive with too little warning.</li>
              <li><strong className="text-[#1A2236]">Connect external calendars for sync:</strong> Connect the calendar owner's Google, Outlook, or iCloud account for two-way sync.</li>
              <li><strong className="text-[#1A2236]">Test the entire booking flow before going live:</strong> Book a test appointment yourself from an external browser.</li>
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Two routing logic options</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Optimise for Availability:</strong> The system offers the slot of whoever is free first, prioritising the booker's convenience.</li>
                <li><strong className="text-[#0E9BF0]">Equal Distribution:</strong> The system rotates through the team to ensure every member receives a comparable number of bookings over time.</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sales teams most commonly use Equal Distribution to keep lead volume fair across every rep. Support and service teams more commonly use Optimise for Availability, since minimising the customer's wait time typically matters more than perfectly even internal distribution.
            </p>

            {/* Section 5: Reminders */}
            <h2 id="reminders" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Reduce No-Shows With Automated Reminders?
            </h2>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A reliable reminder sequence</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#0E9BF0]">Immediate confirmation:</strong> Sent by both email and SMS the moment the booking is made.</li>
                <li><strong className="text-[#0E9BF0]">A 24-hour reminder:</strong> Giving the client enough advance notice to reschedule.</li>
                <li><strong className="text-[#0E9BF0]">A 2-hour reminder:</strong> Catching last-minute forgetfulness right before the appointment.</li>
                <li><strong className="text-[#0E9BF0]">An automatic no-show follow-up workflow:</strong> Triggered the moment the appointment status is marked as no-show.</li>
              </ol>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">PLAN-LEVEL REQUIREMENT FOR SMS REMINDERS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                SMS reminders require A2P 10DLC registration for numbers sending to US recipients. If your reminder SMS messages are not sending at all, or are being silently throttled, this is the first thing to check.
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Connected Calendars, Linked Calendars, and Conflict Calendars</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#0E9BF0]">Connected Calendars:</strong> Grants GoHighLevel permission to read, and optionally write, events from an external calendar account.</li>
                <li><strong className="text-[#0E9BF0]">Linked Calendars:</strong> Imports events and availability from the connected external account into GoHighLevel.</li>
                <li><strong className="text-[#0E9BF0]">Conflict Calendars:</strong> Marks specific connected calendars as blockers, automatically making any overlapping GoHighLevel booking slot show as unavailable.</li>
              </ul>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">An important plan-level restriction to know before you configure anything</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Outlook integration is restricted by plan tier. Per GoHighLevel's own support documentation, Outlook calendar integration is available on the Unlimited ($297/month) and Agency Pro ($497/month) plans, and is not available on the Starter ($97/month) plan. If you are on the Starter plan and cannot find the Outlook connection option, this is very likely why. Google Calendar integration does not carry this same restriction and is available across plans.
              </p>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">USE THE BUILT-IN TROUBLESHOOTING TOOL FIRST</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GoHighLevel includes a native Troubleshooting Tool for Calendar, accessible directly from the calendar header. It detects common configuration issues in real time, including availability gaps, unassigned users, and Google or Outlook sync failures, without needing to contact support.
              </p>
            </div>

            {/* Section 7: Slots Not Showing */}
            <h2 id="slots-not-showing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Why Are Booking Slots Sometimes Not Showing Up?
            </h2>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Three common causes</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#0E9BF0]">Minimum notice period excludes all near-term slots:</strong> Fix by shortening the notice period, extending your configured booking date range further into the future, or expanding your working hours.</li>
                <li><strong className="text-[#0E9BF0]">External calendar is not properly connected or is syncing the wrong calendar:</strong> Verify Google or Outlook two-way sync is genuinely enabled for every team member on the calendar.</li>
                <li><strong className="text-[#0E9BF0]">SMS reminders silently failing due to compliance issues:</strong> Verify A2P 10DLC registration is fully complete and approved for the sending number.</li>
              </ol>
            </div>

            {/* Section 8: Embed */}
            <h2 id="embed" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Do You Embed Booking on a Website or Funnel?
            </h2>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Option 1: Direct share link</strong> — Found under the Share option on any calendar. Send the URL directly via email, SMS, or social media.</li>
              <li><strong className="text-[#1A2236]">Option 2: HTML embed code for external websites</strong> — Click the three-dot icon, select Share, then the Embed Code tab. Paste the code into a custom code element on your website.</li>
              <li><strong className="text-[#1A2236]">Option 3: Native Calendar element inside GoHighLevel's page builder</strong> — Use the Calendar element in the page builder, which lets you select the specific calendar to display.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Reducing the number of clicks and page transitions between a prospect deciding to book and actually confirming a time slot has a consistently measurable effect on completed bookings. Embedded calendars outperform external redirect links for this reason in nearly every case we have configured.
            </p>

            {/* Section 9: Tracking */}
            <h2 id="tracking" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. What Should You Track After Launch?
            </h2>

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
                GHL Scale Up sets up your GoHighLevel calendars, round-robin rules, external calendar sync, no-show reminder automation, and website embeds so your booking system works correctly from day one.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency founded by Aryan Trivedi. Based in India, we serve agencies and SaaS founders across 6 countries with 200+ GoHighLevel builds delivered, including calendar and booking system configuration. This guide reflects direct experience setting up and troubleshooting GoHighLevel calendars for real client accounts.
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