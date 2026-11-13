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
      MessageCircle,
      Phone,
      Image as ImageIcon,
      Rocket,
      CalendarClock,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function AIAppointmentBookingClient() {
      const [activeId, setActiveId] = useState<string>('');
      const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

      useEffect(() => {
            const sections = [
                  'what-does-what',
                  'book-automatically',
                  'which-agent',
                  'step-by-step',
                  'prerequisites',
                  'calendar-setup',
                  'one-or-multiple',
                  'voice-ai-setup',
                  'conversation-ai-setup',
                  'confirmations',
                  'reschedule-cancel',
                  'failures-handoff',
                  'pre-launch',
                  'troubleshooting',
                  'cost',
                  'use-cases',
                  'limits',
                  'faq',
                  'start',
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

                  const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
                  if (heroSection) {
                        const heroBottom = heroSection.getBoundingClientRect().bottom;
                        setShowFloatingProjectHelp(heroBottom < 0);
                  }
            };

            handleScroll();
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
                  q: 'Can a GoHighLevel AI agent book appointments by itself?',
                  a: 'Yes, when booking is configured. Voice AI uses an "Appointment Booking" action and Conversation AI uses "Appointment Booking" in its bot setup. Both depend on a calendar you have set up first.'
            },
            {
                  q: 'Can the AI reschedule or cancel an appointment?',
                  a: 'Conversation AI form-based bots have reschedule and cancel toggles under Bot Goals > Appointment Details, and the article says they need Lab features. For Voice AI, the documentation is conditional ("only if enabled for the agent") and no enabling steps were found, so confirm in your account.'
            },
            {
                  q: 'Does the AI need access to my calendar?',
                  a: 'It needs a GoHighLevel calendar selected in the booking setup. If you use an external calendar, the Voice AI article lists a connected external calendar as part of the prerequisites. How sync is configured is outside this article.'
            },
            {
                  q: 'What happens if someone calls or messages outside business hours?',
                  a: 'Two separate settings apply. Voice AI working hours control when the agent takes calls; calendar availability controls which times can be booked. Set both on purpose.'
            },
            {
                  q: 'Can I use different calendars for different services?',
                  a: 'Yes, with Multiple Calendars. Each calendar gets a description and keywords, and a fallback calendar can be set. In Conversation AI this is prompt-based bots only, and Voice AI needs at least two calendars.'
            },
            {
                  q: 'Does the AI send confirmations?',
                  a: "The calendar's notification settings send booking confirmations. Voice AI post-call emails are a separate feature. Reminders and no-show follow-ups are normally built with workflows."
            },
            {
                  q: 'What does the AI do when no slot is available?',
                  a: 'Voice AI can use fallback behavior: show available services, use a fallback calendar, or trigger another guided action. The documentation does not describe every failure case, so plan a human handoff.'
            },
            {
                  q: 'Does AI booking cost extra?',
                  a: "AI usage is billed or allowance-based under the AI Employee plans, and Voice AI has per-minute charges plus separate Phone System charges. Figures were current in HighLevel's pricing article on 10 November 2026 and may change."
            }
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'what-does-what', title: 'What Does What' },
            { id: 'book-automatically', title: 'Can a GoHighLevel AI Agent Book Appointments Automatically?' },
            { id: 'which-agent', title: 'Voice AI or Conversation AI: Which Should Book Your Appointments?' },
            { id: 'step-by-step', title: 'How Does Automated Appointment Booking Work Step by Step?' },
            { id: 'prerequisites', title: 'What Do You Need Before You Set Up AI Booking?' },
            { id: 'calendar-setup', title: 'How Do You Set Up the Calendar So the AI Offers the Right Slots?' },
            { id: 'one-or-multiple', title: 'Should You Use One Calendar or Multiple Calendars?' },
            { id: 'voice-ai-setup', title: 'How Do You Set Up Voice AI to Book Appointments?' },
            { id: 'conversation-ai-setup', title: 'How Do You Set Up Conversation AI to Book Appointments?' },
            { id: 'confirmations', title: 'How Do You Send Confirmations and Reminders After the AI Books?' },
            { id: 'reschedule-cancel', title: 'Can GoHighLevel AI Agents Reschedule or Cancel Appointments?' },
            { id: 'failures-handoff', title: "What Happens When the AI Can't Find a Slot or the Booking Fails?" },
            { id: 'pre-launch', title: 'How Do You Check AI Booking Works Before Going Live?' },
            { id: 'troubleshooting', title: 'Why Is My GoHighLevel AI Agent Not Booking Appointments?' },
            { id: 'cost', title: 'Does AI Appointment Booking Cost Extra in GoHighLevel?' },
            { id: 'use-cases', title: 'What Does AI Booking Look Like for Different Businesses?' },
            { id: 'limits', title: 'What Can AI Appointment Booking Not Do?' },
            { id: 'faq', title: 'Frequently Asked Questions About GoHighLevel AI Appointment Booking' },
            { id: 'start', title: 'Where Should You Start With AI Appointment Booking?' },
      ];

      const comparisonTable = [
            { question: 'Single calendar', voice: 'Yes', conversation: 'Yes' },
            { question: 'Multiple calendars', voice: 'Yes, at least two, intent-based', conversation: 'Yes, prompt-based bots only' },
            { question: 'Services', voice: 'Not available', conversation: 'Prompt-based, public services only' },
            { question: 'Reschedule or cancel', voice: 'Conditional, confirm in account', conversation: 'Toggles for form-based bots; confirm for others' },
            { question: 'Online payment in booking', voice: 'Not documented', conversation: 'Not collected' },
            { question: 'Human handoff', voice: 'Call transfer action (API docs)', conversation: 'Human handover, stop bot, transfer bot' },
      ];

      const calendarSettings = [
            { setting: 'Slot Duration', controls: 'Length of the appointment', effect: 'Sets how long each offered slot is' },
            { setting: 'Slot Interval', controls: 'How often start times occur', effect: 'Sets which start times can be offered' },
            { setting: 'Buffer', controls: 'Time kept before or after bookings', effect: 'Removes back-to-back slots' },
            { setting: 'Appointments per Slot', controls: 'Bookings that can share a slot', effect: "Above 1 allows overlaps, per the article's FAQ" },
            { setting: 'Appointments per Day', controls: 'Daily cap, per calendar', effect: 'Full days offer nothing' },
            { setting: 'Minimum Scheduling Notice', controls: 'Lead time required', effect: 'Hides near-term slots' },
            { setting: 'Date Range', controls: 'How far ahead people can book', effect: 'Limits how far out the AI can offer' },
            { setting: 'Office Hours', controls: 'When bookings are allowed', effect: "Separate from the AI agent's own working hours" },
      ];

      const responsibilityTable = [
            { job: 'Offer and book the slot', owner: 'AI agent', where: 'Voice AI action or Conversation AI Appointment Booking' },
            { job: 'Decide which slots exist', owner: 'Calendar', where: 'Calendar availability settings' },
            { job: 'Send booking confirmation', owner: 'Calendar notifications', where: 'Calendar notification settings' },
            { job: 'Send reminders, move pipeline stage, chase no-shows', owner: 'Workflow', where: 'Workflows (see the workflow automation guide)' },
            { job: 'Alert staff when AI is stuck', owner: 'Handover or workflow', where: 'See how to notify a human from Conversation AI' },
      ];

      const failuresTable = [
            { situation: 'Request matches no calendar', configure: 'A fallback calendar' },
            { situation: 'No slots in the offered window', configure: 'Widen Date Range or Offering Days; review minimum notice and daily caps' },
            { situation: 'Caller wants a person', configure: 'Call transfer (Voice AI API lists a CALL_TRANSFER action) or human handover (Conversation AI)' },
            { situation: 'Contact abandons mid-booking', configure: 'A workflow follow-up that checks for no appointment after a set time' },
            { situation: 'Staff must see failures', configure: 'Notification or task through a workflow' },
      ];

      const troubleshootingTable = [
            { symptom: 'Agent never offers times', cause: 'No Appointment Booking action or setting on the agent', check: 'Voice AI Actions; Conversation AI Bot Goals' },
            { symptom: 'Agent offers no open slots', cause: 'Availability, buffers, minimum notice, Date Range or daily caps too tight', check: 'Calendar availability settings' },
            { symptom: 'Wrong calendar used', cause: 'Overlapping descriptions or keywords', check: 'Rewrite calendar descriptions; set a fallback' },
            { symptom: 'Multiple calendars option missing', cause: 'Bot is guided or flow-based', check: 'Prompt-based bots only' },
            { symptom: 'Services option missing', cause: 'Voice AI, or bot is not prompt-based', check: 'Services is Conversation AI, prompt-based only' },
            { symptom: 'Reschedule and cancel missing', cause: 'Not enabled, or Lab features off', check: 'Appointment Details toggles; agent settings' },
            { symptom: 'No confirmation sent', cause: 'Calendar notifications off, or confusing with post-call emails', check: 'Calendar notification settings' },
            { symptom: 'Agent talks but does not reply on a channel', cause: 'Bot launch mode or channel not selected', check: 'Bot Off, Suggestive or Auto-Pilot; selected channels' },
            { symptom: 'Double bookings', cause: 'Appointments per Slot above 1', check: 'Calendar settings' },
      ];

      const costTable = [
            { item: 'Conversation AI on Growth ($50/month)', stated: '1,000 agent responses per month' },
            { item: 'Conversation AI on Unlimited ($97/month)', stated: 'Included, subject to fair use' },
            { item: 'Conversation AI with no plan or Starter ($20/month)', stated: 'Not included; billed pay-per-use by tokens' },
            { item: 'Voice AI on Growth', stated: '100 AI Agent minutes per month, shared by inbound, outbound and widget' },
            { item: 'Voice AI pay-per-use', stated: 'Voice Engine $0.045/min from 20 May 2026, plus TTS, LLM tokens, and Phone System charges billed separately' },
            { item: 'When allowance runs out', stated: 'Usage pauses unless Extra Usage is enabled in AI Suite' },
      ];

      const ProjectHelpCard = () => (
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
                  <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
                  <Link
                        href="/book-a-call"
                        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                        Book a 30 min Free Call
                        <ArrowRight className="w-3 h-3" />
                  </Link>
            </div>
      );

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
                              <span className="text-[#1A2236] font-medium">AI Appointment Booking</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                              {/* Post Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">AI</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Voice AI</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Conversation AI</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              {/* H1 */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    How to Automate Appointment Booking with GoHighLevel AI Agents
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
                                          <div className="text-xs text-white/50">GoHighLevel Specialists · Facts from HighLevel documentation read 3 November 2026</div>
                                    </div>
                              </div>

                              {/* Quick Answer Box */}
                              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                          <Zap className="w-5 h-5 text-[#F8D000]" />
                                          <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed mb-3">
                                          Yes, a GoHighLevel AI agent can book an appointment on its own. It collects a few details, checks the availability on the calendar you chose, offers open times, and confirms the booking. Voice AI does this on phone calls and Conversation AI does it in text channels. What it cannot do is invent availability: every slot it offers comes from your calendar rules, so the quality of your booking comes down to how well the calendar and the agent are set up.
                                    </p>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                          <em>This guide covers the path from first contact to a booked, confirmed appointment, and where each part of the system takes over. It does not explain what Voice AI or Conversation AI are in general. For that, see the GoHighLevel AI Employee overview. For calendar basics, see the GoHighLevel calendar and booking guide.</em>
                                    </p>
                              </div>

                              {/* CTA Buttons */}
                              <div className="flex flex-wrap gap-3">
                                    <Link
                                          href="/contact"
                                          className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
                                    >
                                          <Rocket className="w-4 h-4" />
                                          Need Help Setting This Up? Let's Talk
                                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                          href="#step-by-step"
                                          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
                                    >
                                          Jump to the Flow
                                          <ChevronDown className="w-4 h-4" />
                                    </Link>
                              </div>
                        </div>
                  </section>

                  {/* MAIN LAYOUT */}
                  <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
                        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

                              {/* LEFT COLUMN: SIDEBAR */}
                              <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
                                    <div className="mb-6">
                                          <ProjectHelpCard />
                                    </div>

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
                                                      <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                                                </div>
                                          </div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-3">
                                                5+ years GHL experience · 200+ systems built globally. We implement GoHighLevel for agencies and service businesses.
                                          </p>
                                          <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
                                          <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
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

                              {/* RIGHT COLUMN: BLOG CONTENT */}
                              <main className="min-w-0 order-2">

                                    {/* Mobile TOC */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8 lg:hidden">
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

                                    {/* Mobile Project Help Card */}
                                    <div className="lg:hidden mb-8">
                                          <ProjectHelpCard />
                                    </div>

                                    {/* Full-width Image Block */}
                                    <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                          <div className="relative w-full h-auto bg-[#F8F9FB]">
                                                <Image
                                                      src="/blog/gohighlevel-ai-appointment-booking.png"
                                                      alt="Voice and chat AI agents booking one open slot on a shared calendar"
                                                      width={1200}
                                                      height={500}
                                                      className="w-full h-auto object-cover"
                                                      priority
                                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                                />
                                          </div>
                                          <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                                                <ImageIcon className="w-3.5 h-3.5" />
                                                <span>Featured image concept: a phone and a chat bubble both pointing to one calendar grid with a single highlighted slot.</span>
                                          </div>
                                    </div>

                                    {/* Section: What Does What */}
                                    <h2 id="what-does-what" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What does what
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          The AI agent holds the conversation and picks the slot. The calendar decides which slots exist and sends booking confirmations. Workflows handle everything after the booking, such as reminders, pipeline stages and no-show follow-up. Mixing these up is the most common reason a setup disappoints.
                                    </p>

                                    {/* Section: Book Automatically */}
                                    <h2 id="book-automatically" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Can a GoHighLevel AI Agent Book Appointments Automatically?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Yes, if you configure it. HighLevel's Voice AI article says the agent offers open time slots during a live call, collects missing details, and confirms the booking without sending the caller to an external page. The Conversation AI article says the bot checks availability on the connected calendar, suggests time slots, and confirms the booking in the conversation.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Two details from the documentation are worth knowing early. Conversation AI interprets dates from the original message timestamp, skips slots that have already passed, and blocks a booking that conflicts with an appointment the contact already has. And Conversation AI does not collect online payment during booking, so a deposit has to be handled another way.
                                    </p>

                                    {/* Section: Which Agent */}
                                    <h2 id="which-agent" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Voice AI or Conversation AI: Which Should Book Your Appointments?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Choose by where your contacts already talk to you, not by which feature sounds newer. Many businesses end up using both, each on its own calendar rules.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">When Should You Use Voice AI for Booking?</h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Use Voice AI when the person is likely to call: urgent services, mobile-first customers, or anyone who will not fill out a form. Remember that Voice AI does not currently support the Services option in its booking setup, and call minutes are billed separately from text conversations.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">When Should You Use Conversation AI for Booking?</h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Use Conversation AI when leads arrive by SMS, website chat, Facebook, Instagram, WhatsApp or email. It supports Multiple Calendars and Services on prompt-based bots, which is useful when one business offers several appointment types.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Voice AI vs Conversation AI Booking Compared</h3>
                                    <div className="overflow-x-auto mb-6">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Question</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Voice AI</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Conversation AI</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {comparisonTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.question}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.voice}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.conversation}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: Step by Step */}
                                    <h2 id="step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Does Automated Appointment Booking Work Step by Step?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The flow below is the same in both agents, with the channel changing the experience. Step 8 belongs to the calendar and workflows, not the AI.
                                    </p>

                                    {/* Flow diagram image — centered, natural size, not stretched */}
                                    <div className="my-6 flex justify-center">
                                          <div className="rounded-xl overflow-hidden border border-[#DDE1E9] bg-white shadow-sm">
                                                <Image
                                                      src="/blog/gohighlevel-ai-appointment-booking2.png"
                                                      alt="Booking flow diagram: contact reaches out, AI agent identifies intent, collects details, checks the calendar, offers slots, confirms booking, creates the appointment record, then calendar notifications and workflows fire."
                                                      width={500}
                                                      height={700}
                                                      className="w-full max-w-[500px] h-auto"
                                                      priority
                                                      unoptimized
                                                      sizes="(max-width: 768px) 100vw, 500px"
                                                />
                                          </div>
                                    </div>

                                    <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
                                          <li>Contact reaches out by call, text, chat or social message.</li>
                                          <li>The agent identifies booking intent from the conversation.</li>
                                          <li>It collects missing details, such as an email address, before confirming. Qualification answers can be gathered first and saved to contact custom fields.</li>
                                          <li>It checks the selected calendar, which applies availability, buffers, minimum notice and conflict settings.</li>
                                          <li>It offers open slots. In Voice AI single-calendar mode you control how many days, slots per day and hours between slots are offered.</li>
                                          <li>The contact picks a slot and the agent confirms it.</li>
                                          <li>An appointment is created on the calendar and tied to the contact.</li>
                                          <li>Calendar notifications and workflows take over for confirmations, reminders, stages and follow-up.</li>
                                    </ol>
                                    {/* Section: Prerequisites */}
                                    <h2 id="prerequisites" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What Do You Need Before You Set Up AI Booking?
                                    </h2>
                                    <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>A GoHighLevel sub-account with Voice AI or Conversation AI available. Plan and region availability is not stated in the booking articles, so check yours.</li>
                                          <li>At least one calendar with availability, duration, buffers and booking rules already set. Two or more if you want intent-based routing.</li>
                                          <li>Any external calendar you rely on connected, so existing events block slots.</li>
                                          <li>A decision about which contact details the agent must collect.</li>
                                          <li>A plan for what happens when the AI cannot book: who gets notified and how.</li>
                                          <li>Funding for AI usage. See the cost section below.</li>
                                    </ul>

                                    {/* Section: Calendar Setup */}
                                    <h2 id="calendar-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Do You Set Up the Calendar So the AI Offers the Right Slots?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The agent can only offer what the calendar allows. If the AI offers odd times or none, look at the calendar first.
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Which Calendar Settings Change the Slots the AI Can Offer?</h3>
                                    <div className="overflow-x-auto mb-4">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Setting (as named in the calendar availability article)</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it controls</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Effect on AI booking</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {calendarSettings.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.setting}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.controls}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.effect}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          This article was last modified in July 2024, so setting names may differ slightly in your account. The HighLevel Voice AI article confirms the agent respects availability, buffers, minimum notice and conflict settings. Time zone handling and round robin are not explained in the sources read here, so confirm them in your account if you have a team or contacts in other time zones.
                                    </p>

                                    {/* Section: One or Multiple Calendars */}
                                    <h2 id="one-or-multiple" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Should You Use One Calendar or Multiple Calendars?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Use one calendar if every appointment is the same kind. Use multiple calendars when different services, departments or specialists need different rules. Each calendar gets a short description and optional keywords, and you can set a fallback calendar for requests that match nothing.
                                    </p>
                                    <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>Keep descriptions short and avoid overlapping phrases between calendars (Voice AI guidance).</li>
                                          <li>Keep the list focused. HighLevel sets no maximum for Conversation AI but recommends a concise list for accurate matching.</li>
                                          <li>In Conversation AI, calendar details are only used to classify intent. If the bot should talk about those services, add that information to the prompt.</li>
                                          <li>Multiple calendars in Conversation AI need a prompt-based bot.</li>
                                    </ul>

                                    {/* Section: Voice AI Setup */}
                                    <h2 id="voice-ai-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Do You Set Up Voice AI to Book Appointments?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          These steps follow HighLevel's Voice AI booking article (modified 10 September 2026). Menu labels may change, so match them to your account.
                                    </p>
                                    <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
                                          <li>In the sub-account, open AI Agents &gt; Voice AI and create or open an agent.</li>
                                          <li>Review the basic agent setup, including agent details and phone or availability settings.</li>
                                          <li>In the Actions section, click New Action and select Appointment Booking. (The same article also says "Book Appointment" elsewhere; confirm the label in your account.)</li>
                                          <li>Choose Single Calendar or Multiple Calendars.</li>
                                          <li>For a single calendar, pick the calendar and set Offering Days, Appointment slots per day and Hours between slots.</li>
                                          <li>For multiple calendars, add eligible calendars, write a short description and routing cues for each, and set fallback behavior if wanted.</li>
                                          <li>Save, then run test calls before routing real callers to the agent.</li>
                                    </ol>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Where data lands: recordings, transcripts and summaries appear in Voice AI call logs; qualification answers go to contact custom fields; custom booking form answers go to the appointment record.
                                    </p>

                                    {/* Section: Conversation AI Setup */}
                                    <h2 id="conversation-ai-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Do You Set Up Conversation AI to Book Appointments?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          These steps follow the Conversation AI booking article (modified 27 October 2026).
                                    </p>
                                    <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
                                          <li>Open AI Agents &gt; Conversation AI and create or open a bot.</li>
                                          <li>Set the bot name, wait time before responding and initial message.</li>
                                          <li>Under Bot Goals, choose the contact details to collect. HighLevel recommends collecting only what you need.</li>
                                          <li>Enable Appointment Booking and pick the calendar. Choose Single Calendar, Multiple Calendars (prompt-based only) or Services (prompt-based only).</li>
                                          <li>Add instructions covering services, availability and the booking flow in the prompt and training content.</li>
                                          <li>Set post-booking and cancel or reschedule options if you want them.</li>
                                          <li>Save and run the bot in trial mode before going live. New bots may start Off, and Suggestive mode lets staff review replies before Auto-Pilot sends them.</li>
                                    </ol>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Example prompt wording (illustrative, adapt before use)</h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This is an example written for this guide, not text from HighLevel. It shows the kind of instructions that go in the prompt. The booking action itself is configured in the Appointment Booking setup, not in the prompt.
                                    </p>
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-6">
                                          <p className="text-sm text-[#1A2236] italic">
                                                You help visitors of Example Dental book a cleaning or a consultation.
                                                Ask for their name and email before offering times.
                                                Only offer times returned by the calendar. Never guess availability.
                                                If the person asks about pricing or insurance, answer from the knowledge provided, and if you do not know, hand the conversation to a human.
                                                Do not promise outcomes or give medical advice.
                                          </p>
                                    </div>

                                    {/* Section: Confirmations */}
                                    <h2 id="confirmations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Do You Send Confirmations and Reminders After the AI Books?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The agent books; other parts of the system notify. HighLevel says booking confirmations come from the calendar's notification settings and that Voice AI post-call emails are separate. Reminders, stage changes and no-show follow-up are normally built in workflows, using the appointment events your account offers.
                                    </p>
                                    <div className="overflow-x-auto mb-4">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Job</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Owner</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where to set it</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {responsibilityTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.job}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.owner}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.where}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Workflow trigger names for appointments were not verified in this research. Check the trigger list in your account before building.
                                    </p>

                                    {/* Section: Reschedule Cancel */}
                                    <h2 id="reschedule-cancel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Can GoHighLevel AI Agents Reschedule or Cancel Appointments?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Sometimes, and it depends on the agent and the bot type.
                                    </p>
                                    <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
                                          <li><strong className="text-[#1A2236]">Conversation AI form-based bots:</strong> toggles under Bot Goals &gt; Appointment Details let the bot reschedule or cancel, including several appointments in one conversation. The article says this needs Lab features, and it is inconsistent about whether the activation can be undone, so read the prompt in your account before enabling.</li>
                                          <li><strong className="text-[#1A2236]">Conversation AI general:</strong> the setup article says bots can help contacts book, reschedule or cancel, based on your configuration.</li>
                                          <li><strong className="text-[#1A2236]">Voice AI:</strong> the booking article does not mention rescheduling or cancelling. Another article says it works only if enabled for the agent, without steps. Confirm in your account before promising callers this option.</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Whether the contact is notified of a change depends on your calendar and workflow settings.
                                    </p>

                                    {/* Section: Failures Handoff */}
                                    <h2 id="failures-handoff" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What Happens When the AI Can't Find a Slot or the Booking Fails?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Plan this on purpose. The documentation describes Voice AI fallback behavior (show available services, use a fallback calendar, or trigger another guided action) but not every failure case. Conversation AI offers human handover and stop bot on prompt-based and flow-based bots.
                                    </p>
                                    <div className="overflow-x-auto mb-6">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Situation</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to configure</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {failuresTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.situation}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.configure}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: Pre-launch */}
                                    <h2 id="pre-launch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Do You Check AI Booking Works Before Going Live?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Run each scenario yourself on a test contact and read the resulting appointment record, not just the conversation.
                                    </p>
                                    <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>Book the first open slot and confirm the appointment appears on the right calendar with the right contact.</li>
                                          <li>Ask for a time that is already taken, a time inside the buffer, and a time inside minimum notice. The agent should not offer them.</li>
                                          <li>Ask for a time outside office hours and a date beyond the Date Range.</li>
                                          <li>Book twice for the same contact and see what the agent does.</li>
                                          <li>Use a request that matches no calendar and confirm the fallback.</li>
                                          <li>Ask something the agent should not answer and confirm the handoff happens.</li>
                                          <li>Check that the confirmation, reminders and any pipeline change fire from the calendar and workflows.</li>
                                          <li>Check call logs or conversation history for where answers and recordings are stored.</li>
                                          <li>If you serve contacts in other time zones, book from one and confirm the time shown on both sides.</li>
                                    </ul>

                                    {/* Section: Troubleshooting */}
                                    <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Why Is My GoHighLevel AI Agent Not Booking Appointments?
                                    </h2>
                                    <div className="overflow-x-auto mb-6">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Symptom</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Likely cause</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to check</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {troubleshootingTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.symptom}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.cause}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: Cost */}
                                    <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Does AI Appointment Booking Cost Extra in GoHighLevel?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Booking itself is not listed as a separate charge in the documentation read. The AI that performs it is billed or allowance-based. Per HighLevel's AI Product Pricing article, modified 10 November 2026:
                                    </p>
                                    <div className="overflow-x-auto mb-4">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Item</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What the article states</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {costTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.item}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.stated}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          HighLevel warns that pricing and third-party model rates may change. Confirm in the app before quoting a client. For plan pricing, see the GoHighLevel pricing guide.
                                    </p>

                                    {/* Section: Use Cases */}
                                    <h2 id="use-cases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What Does AI Booking Look Like for Different Businesses?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          These are setup patterns, not results. Nothing here claims a number of bookings gained.
                                    </p>
                                    <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
                                          <li><strong className="text-[#1A2236]">Dental or medical:</strong> one calendar per visit type, human handover for anything clinical, and a decision with your own advisers about call recording.</li>
                                          <li><strong className="text-[#1A2236]">Consultants and coaches:</strong> one discovery-call calendar, qualification answers saved to custom fields before the slot is offered.</li>
                                          <li><strong className="text-[#1A2236]">Real estate:</strong> a showing calendar per agent or area, with intent-based routing.</li>
                                          <li><strong className="text-[#1A2236]">Home services:</strong> Voice AI for urgent calls, fallback to a human when the job type does not match.</li>
                                          <li><strong className="text-[#1A2236]">Agencies:</strong> the same setup repeated per client, with each client's calendar rules and billing reviewed separately.</li>
                                          <li><strong className="text-[#1A2236]">Salons and education:</strong> a calendar per service or program, Services on Conversation AI where the catalog is public.</li>
                                    </ul>

                                    {/* Section: Limits */}
                                    <h2 id="limits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What Can AI Appointment Booking Not Do?
                                    </h2>
                                    <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>Create availability that the calendar does not allow.</li>
                                          <li>Collect online payment during Conversation AI booking.</li>
                                          <li>Book private services (Conversation AI Services supports public-facing services only).</li>
                                          <li>Offer Services in Voice AI booking today.</li>
                                          <li>Use Multiple Calendars or Services on guided or flow-based Conversation AI bots.</li>
                                          <li>Guarantee more bookings or fewer no-shows. Results depend on your offer, prompts, calendar and follow-up.</li>
                                          <li>Replace legal review. Rules on call recording and consent vary by location, and this guide does not give legal advice.</li>
                                    </ul>

                                    {/* Section: FAQ */}
                                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
                                          Frequently Asked Questions About GoHighLevel AI Appointment Booking
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

                                    {/* Section: Start */}
                                    <h2 id="start" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Where Should You Start With AI Appointment Booking?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Start with one calendar and one agent type, confirm it books correctly with the pre-launch checklist, then add fallback, reminders and a second calendar. If you want a second pair of eyes on a build, GHL Scale Up can review your calendar and agent configuration with you.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Facts in this article reflect HighLevel documentation as of 12 November 2026. HighLevel changes features and pricing often, so confirm in your account.
                                    </p>

                                    {/* CTA - After FAQ */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
                                          <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                                                <strong className="text-white">Still have questions about GoHighLevel AI appointment booking?</strong>
                                          </p>
                                          <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                                                Talk to our GHL experts directly. We're here to help.
                                          </p>
                                          <div className="flex flex-wrap justify-center gap-3">
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                                                      <MessageCircle className="w-4 h-4" />
                                                      Ask an Expert
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                                                      <Phone className="w-4 h-4" />
                                                      Call Us
                                                </Link>
                                          </div>
                                    </div>

                                    {/* Related Articles */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/gohighlevel-calendar-booking" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Calendar & Booking →</Link>
                                                <Link href="/blog/gohighlevel-ai-employee" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Employee Overview →</Link>
                                                <Link href="/blog/notify-human-gohighlevel-conversation-ai" className="text-sm text-[#0E9BF0] hover:underline">How to Notify a Human from Conversation AI →</Link>
                                                <Link href="/blog/gohighlevel-conversational-ai-data-storage" className="text-sm text-[#0E9BF0] hover:underline">Where Conversation AI Stores Data →</Link>
                                                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation →</Link>
                                                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing Guide →</Link>
                                          </div>
                                    </div>

                                    {/* Final CTA */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Start with one calendar and one agent type.</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      GHL Scale Up implements GoHighLevel for agencies and service businesses. If you want a second pair of eyes on a build, we can review your calendar and agent configuration with you.
                                                </p>
                                                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                                                      Book Your Free Call
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                          </div>
                                    </div>

                                    {/* Author / Verification Section */}
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
                                                      <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built globally</div>
                                                </div>
                                          </div>
                                          <p className="text-xs text-[#5C6880] leading-relaxed">
                                                Facts in this article reflect HighLevel documentation as of 12 November 2026. HighLevel changes features and pricing often, so confirm in your account.
                                          </p>
                                          <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
                                    </div>
                              </main>
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