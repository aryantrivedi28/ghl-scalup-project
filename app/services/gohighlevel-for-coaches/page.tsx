// app/services/gohighlevel-for-coaches/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
      Target, Zap, Calendar, MessageSquare, Bot, Phone, Star, BarChart3,
      ChevronRight, ArrowRight, Database, UserCheck, RefreshCw, Link as LinkIcon,
      Workflow, GraduationCap, Layers, Home, Users, Briefcase, Award, Clock,
      Globe, FileText, Mail, Settings, Sparkles, TrendingUp, UserPlus, Repeat,
      Compass, Shield, Lightbulb,
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CaseStudies from '@/components/ghlscalup/CaseStudies';
import Testimonials from '@/components/ghlscalup/Testimonials';
import { getCaseStudies } from '@/lib/caseStudiesData';
import { getAllTestimonialsForHomepage } from '@/lib/sanity';

export const metadata = {
      title: 'GoHighLevel Services for Coaches | GHL Scale Up',
      description:
            'GoHighLevel services for coaches: CRM, application funnels, discovery call booking, follow-up automation and client onboarding built around your coaching model.',
      keywords:
            'GoHighLevel services for coaches, GoHighLevel for coaches, GoHighLevel setup for coaches, GoHighLevel implementation for coaches, GoHighLevel automation for coaches, GoHighLevel CRM for coaches, GHL services for coaches, GHL setup for coaches, GoHighLevel coaching business setup',
      alternates: {
            canonical: '/services/gohighlevel-for-coaches',
      },
      openGraph: {
            title: 'GoHighLevel Services for Coaches | GHL Scale Up',
            description:
                  'CRM, funnels, booking and automation implemented around how your coaching business sells, converts and onboards clients. 200+ GHL projects delivered.',
            url: 'https://www.ghlscaleup.com/services/gohighlevel-for-coaches',
            siteName: 'GHL Scale Up',
            type: 'website',
      },
};

export default async function CoachesServicePage() {
      const caseStudies = getCaseStudies();

      let testimonials = [];
      try {
            testimonials = await getAllTestimonialsForHomepage();
      } catch (error) {
            console.error('Failed to load testimonials:', error);
      }

      // ============================================
      // DATA (UNCHANGED)
      // ============================================

      const capabilities = [
            {
                  icon: Target,
                  title: 'Capture and Organise Coaching Leads',
                  description:
                        'Coaching leads arrive through application forms, lead magnet opt-ins, webinar registrations, discovery-call pages, referrals, and direct enquiries and when those live in different tools, the practical result is that nobody has a single reliable list of who is currently interested. We build the capture layer inside GoHighLevel: forms, surveys, landing pages and funnels that write straight into the CRM as contact records, each tagged with its source.',
                  extra:
                        'Source tracking matters more in coaching than in most businesses, because lead quality varies enormously by channel. A referral and a cold lead-magnet download should not be treated identically, and you cannot make that distinction later if the origin was never recorded. Deeper detail on the underlying service:',
                  link: '/services/crm-setup',
                  linkLabel: 'GoHighLevel CRM setup',
            },
            {
                  icon: UserCheck,
                  title: 'Qualify Leads Before the Sales Call',
                  description:
                        'The most expensive problem in a coaching business is a calendar full of unqualified calls. Most coaches either have no application step at all, or have one that collects answers nobody ever uses. Both produce the same outcome: hours spent on conversations that were never going to convert.',
                  extra:
                        'We build qualification that actually drives behaviour. Application questions map to the criteria that genuinely predict fit for your offer readiness to invest, timeline, current situation, what they have already tried and those answers write into custom fields and tags that then determine what happens next. A strong-fit applicant can route straight to your booking page. A weaker-fit one can enter a nurture sequence or be pointed at a lower-tier offer instead of taking a call slot. The qualification is only worth collecting if the system acts on it, which is the part generic setups leave undone.',
            },
            {
                  icon: Calendar,
                  title: 'Book and Manage Discovery Calls',
                  description:
                        'Booking is configured against your real availability, buffers and call length, with confirmation and reminder sequences over email and SMS in the run-up. Reschedules and cancellations are handled as their own paths rather than dead ends, and the booking feeds the pipeline automatically so a booked call is visible as a stage rather than something sitting only in a calendar. The full scheduling service:',
                  link: '/services/calendar-booking',
                  linkLabel: 'calendar and booking setup',
            },
            {
                  icon: MessageSquare,
                  title: 'Follow Up Automatically',
                  description:
                        'Follow-up in coaching is not one sequence it is several, running on different timelines for different situations: pre-call preparation, post-call follow-up for someone weighing an offer, long-horizon nurture for someone who is interested but not ready this quarter, and reactivation for leads who went quiet months ago. We build these as distinct tracks across email, SMS and WhatsApp where appropriate, so the messaging matches where the person actually is. Full service detail:',
                  link: '/services/workflow-automation',
                  linkLabel: 'workflow and marketing automation',
            },
            {
                  icon: BarChart3,
                  title: 'Manage the Coaching Sales Pipeline',
                  description:
                        'A generic pipeline runs new lead to closed and tells you almost nothing about where a coaching sale is breaking down. We configure stages that reflect how enrolment actually progresses typically something like new lead, qualified, call booked, call completed, offer made, enrolled, onboarding though the exact stages are built from your process, not imposed on it.',
                  extra:
                        'The value is diagnostic. When stages match reality, you can see whether the problem is that applications are not converting to bookings, bookings are not converting to attended calls, or attended calls are not converting to enrolments. Those are three completely different problems with three different fixes, and a flat pipeline makes them indistinguishable.',
            },
            {
                  icon: UserPlus,
                  title: 'Automate Client Onboarding',
                  description:
                        'The week after someone enrols determines whether they engage or quietly drift, and onboarding each client by hand stops being viable as volume grows. We build the sequence that fires on conversion: welcome communication, intake or goal-setting form, first session scheduling, access to whatever they purchased, internal notification to you or the coach assigned, and any preparation material. Intake responses flow back onto the contact record, so session one starts with the coach already knowing what the client wants.',
            },
            {
                  icon: RefreshCw,
                  title: 'Re-engage Past and Inactive Leads',
                  description:
                        'Most coaching businesses are sitting on a substantial list of people who enquired, had a conversation, and did not buy at the time. Because coaching timelines are long, a meaningful share of those are now in a different position than they were six months ago. We build segmentation and reactivation campaigns that work that list deliberately with response detection that pulls anyone who re-engages back into the live pipeline rather than leaving them in a broadcast list.',
            },
            {
                  icon: LinkIcon,
                  title: 'Connect the Coaching Tech Stack',
                  description:
                        'Coaching businesses rarely run on GoHighLevel alone. Payment processing, a course or community platform, video calls, scheduling tools and a website may all be in play. We connect these using native integrations where they are sufficient and webhooks or APIs where the workflow needs something more specific, so data moves rather than being re-entered. See',
                  link: '/services/integrations',
                  linkLabel: 'integrations and API development',
            },
      ];

      const workflows = [
            {
                  icon: Target,
                  title: 'Lead to Discovery Call',
                  steps:
                        'Lead arrives (ad, organic, referral) → application or enquiry form → CRM record created and source-tagged → qualification logic evaluates the answers → qualified lead routed to booking page → booking confirmation sent → pre-call sequence begins → reminders before the call → call held → pipeline stage updated → outcome-specific follow-up begins',
                  extra:
                        'This is the backbone workflow for almost every coaching business, and the two points where it most often breaks are qualification (which is skipped, so unqualified leads reach the calendar) and the gap between booking and call (which is left empty, so people arrive cold or not at all).',
            },
            {
                  icon: Calendar,
                  title: 'No-Show Recovery',
                  steps:
                        'Appointment marked no-show → immediate automated follow-up with reschedule link → pipeline stage updated to reflect the miss → if no response, additional nurture over following days → re-entry into booking flow on response',
                  extra:
                        'Worth building deliberately because a no-show is usually treated as a dead lead when it is more often a scheduling failure. Someone who misses a call often still wants the conversation. A cancellation is handled separately, since cancelling in advance signals different intent from simply not appearing, and the two should not receive identical messaging.',
            },
            {
                  icon: TrendingUp,
                  title: 'High-Ticket Nurture and Conversion',
                  steps:
                        'Enquiry → qualification → educational nurture sequence → booking invitation → reminders → consultation → outcome-based follow-up → offer or proposal sent → proposal follow-up sequence → conversion or long-term nurture',
                  extra:
                        'High-ticket coaching rarely closes on the first conversation, and the difference between losing a prospect and closing them months later is usually just whether anyone stayed in contact in a way that was useful rather than nagging. The proposal follow-up stage is the one most commonly left manual, and it is also where the highest-value deals sit.',
            },
            {
                  icon: UserPlus,
                  title: 'New Client Onboarding',
                  steps:
                        'Opportunity marked won → payment confirmed → welcome communication → intake form sent → first session scheduled → internal notification and task created → programme or membership access granted → onboarding sequence runs over the first days',
            },
            {
                  icon: RefreshCw,
                  title: 'Inactive Lead Reactivation',
                  steps:
                        'Segment leads by age, source and last activity → re-engagement campaign sent → response detected → responder moved back into live pipeline → sales follow-up → booking opportunity',
            },
            {
                  icon: Users,
                  title: 'Group Coaching Enrolment',
                  steps:
                        'Lead expresses programme interest → qualification → held in cohort-aware nurture if the next intake has not opened → enrolment opens → registration and payment → welcome sequence → cohort onboarding → programme access',
                  extra:
                        'The cohort-specific problem is timing. A lead arriving six weeks before the next intake needs a sequence built for that wait; pushing them toward a call that is not available yet, or letting them sit in a gap, loses them. This is configured around your intake calendar rather than assuming rolling enrolment.',
            },
      ];

      const coachingModels = [
            {
                  icon: UserCheck,
                  title: '1:1 Coaching',
                  description:
                        "Weighted toward the sales process and the individual client relationship: application and qualification to protect calendar time, a discovery-call flow with strong no-show handling, outcome-based post-call follow-up, and onboarding plus ongoing scheduling for each client. Where a single coach's availability is the constraint, filtering before the booking matters more than anything else in the build.",
            },
            {
                  icon: Users,
                  title: 'Group and Cohort Coaching',
                  description:
                        'Weighted toward enrolment timing and segmentation: cohort-aware nurture for leads arriving between intakes, enrolment and registration flows, cohort-level communication so a group can be messaged as a unit, and onboarding that gets an entire intake started together rather than one person at a time.',
            },
            {
                  icon: TrendingUp,
                  title: 'High-Ticket Coaching',
                  description:
                        'Weighted toward qualification depth and the long conversion window: application funnels that screen seriously, extended educational nurture, consultation booking, structured proposal follow-up, and pipeline stages granular enough to show exactly where high-value deals stall.',
            },
            {
                  icon: GraduationCap,
                  title: 'Coaching With Courses or Memberships',
                  description:
                        'Weighted toward programme selection and access: lead capture that identifies which offer someone wants, enrolment and payment, access provisioning tied to what was actually purchased, drip or gated delivery, and lifecycle communication that differs between a course buyer and a 1:1 client.',
            },
      ];

      const implementationMenu = [
            { icon: Lightbulb, title: 'Strategy and architecture', description: 'customer journey mapping, system design, scope documentation' },
            { icon: Database, title: 'CRM and data', description: 'contact structure, custom fields, tags, pipelines, opportunity stages, user permissions' },
            { icon: Target, title: 'Lead capture', description: 'forms, surveys, funnels, landing pages, application flows, source tracking' },
            { icon: Workflow, title: 'Automation', description: 'triggers, conditions, actions, timing, segmentation, lead routing, internal notifications' },
            { icon: MessageSquare, title: 'Communication', description: 'email, SMS and WhatsApp sequences, reminders, nurture and follow-up tracks' },
            { icon: Calendar, title: 'Appointments', description: 'calendars, availability, booking flows, confirmations, reminders, reschedule and no-show handling' },
            { icon: Bot, title: 'AI, where it fits the use case', description: 'conversational lead capture and qualification, inbound call handling' },
            { icon: UserPlus, title: 'Client lifecycle', description: 'onboarding, programme communication, renewals, reactivation, referral and review workflows' },
            { icon: LinkIcon, title: 'Integrations', description: 'third-party tools, payment platforms, APIs, webhooks, data synchronisation' },
            { icon: BarChart3, title: 'Tracking and reporting', description: 'pipeline and conversion reporting, source attribution, dashboards' },
            { icon: Shield, title: 'Quality assurance', description: 'workflow, form and calendar testing, automation QA, tracking validation' },
            { icon: GraduationCap, title: 'Handover', description: 'documentation, SOPs, live training and recorded walkthroughs' },
      ];

      const processSteps = [
            { step: '1', title: 'Understand the coaching business', description: 'We go through your offer structure and pricing model, how you currently sell, where leads come from, how you qualify, what your client journey looks like after enrolment, and which tools you already run.' },
            { step: '2', title: 'Map the customer journey', description: 'Lead → qualification → call → conversion → onboarding → delivery → renewal or referral, documented as it actually works in your business, including where people currently drop out.' },
            { step: '3', title: 'Design the architecture', description: 'CRM structure, pipeline stages, custom fields and tags, calendars, funnels, workflows and integrations specified and agreed with a fixed price and scope before anything is built.' },
            { step: '4', title: 'Build and configure', description: 'The agreed system is implemented inside GoHighLevel.' },
            { step: '5', title: 'Connect and automate', description: 'Third-party tools connected, workflows built, communication sequences configured across the journey.' },
            { step: '6', title: 'Test the complete journey', description: 'Tested end to end with real scenarios: a submitted application, a booked call, a no-show, a failed payment, a completed enrolment before any live lead reaches it.' },
            { step: '7', title: 'Launch, train and optimise', description: 'Live training, SOPs and recorded walkthroughs so you can run and adjust the system yourself. Ongoing optimisation available where it is part of scope.' },
      ];

      const fitPoints = [
            'Building your first structured CRM, or moving off spreadsheets and manual follow-up',
            'Replacing a set of disconnected tools with one connected system',
            'Growing lead volume beyond what manual follow-up can keep up with',
            'Running high-ticket consultation-based sales and losing leads between booking and call',
            'Managing more than one coaching programme or offer',
            'Adding automation or lifecycle workflows to a GoHighLevel account you already have',
            'Migrating from Kajabi or another platform',
            'Converting well but losing clients during onboarding or before renewal',
      ];

      const faqs = [
            {
                  question: 'Can you set up GoHighLevel specifically for my coaching business?',
                  answer:
                        'Yes. We configure GoHighLevel around your coaching model rather than deploying a standard template your offers, how you qualify leads, how your sales conversation runs, and what happens after someone enrols. The discovery call establishes that model, and the scope is documented and fixed-price before building starts.',
            },
            {
                  question: 'What GoHighLevel services do you provide for coaches?',
                  answer:
                        'CRM and pipeline setup, lead capture funnels and application forms, discovery-call booking and reminder systems, follow-up and nurture automation, client onboarding workflows, lifecycle and renewal communication, integrations with tools you already use, migration from other platforms, and training. Most coaching projects use a subset rather than all of it.',
            },
            {
                  question: 'Can you build a coaching sales pipeline in GoHighLevel?',
                  answer:
                        'Yes, and the stages are built from your process rather than a default. A typical coaching pipeline runs something like new lead, qualified, call booked, call completed, offer made, enrolled, onboarding but the point of configuring it properly is that the stages match where your deals actually move and stall, so the pipeline tells you something useful when you look at it.',
            },
            {
                  question: 'Can you automate discovery-call follow-up?',
                  answer:
                        'Yes, on both sides of the call. Before: confirmation, a pre-call sequence, and reminders. After: follow-up that differs by outcome, so someone weighing an offer, someone who said not yet, and someone who did not attend each receive appropriate messaging rather than the same generic sequence.',
            },
            {
                  question: 'Can you set up appointment reminders and no-show workflows?',
                  answer:
                        'Yes. Reminders go out over email and SMS before the call. No-shows trigger an immediate reschedule offer rather than sitting in the pipeline unnoticed, and cancellations follow a separate path since the intent behind the two is different. No-show recovery is usually one of the highest-return automations in a coaching build.',
            },
            {
                  question: 'Can you migrate my coaching business from another CRM to GoHighLevel?',
                  answer:
                        "In most cases yes, though complexity varies significantly by platform and we scope it honestly rather than promising a clean transfer in every case. For Kajabi the most common source for coaching businesses contacts, tags and email sequences transfer, but course content does not: every lesson has to be rebuilt manually in GoHighLevel's membership module, and that rebuild is usually the bulk of the work. We assess your specific platform on the discovery call.",
            },
            {
                  question: 'Can you connect GoHighLevel with my existing tools?',
                  answer:
                        'Yes, using native integrations where they are sufficient and webhooks or APIs where the workflow needs something more specific. Payment processing, course and community platforms, video conferencing and scheduling tools are the common ones for coaching businesses. Which approach applies depends on the tool, and we confirm that rather than assuming.',
            },
            {
                  question: 'Can you build funnels for coaching offers?',
                  answer:
                        'Yes application funnels, discovery-call booking pages, lead magnet capture, webinar registration, programme landing pages and group enrolment flows. They are built connected to the CRM and automation, so a submission creates a tagged record and triggers the right sequence rather than just collecting an email address.',
            },
            {
                  question: 'Can GoHighLevel handle both lead management and client onboarding?',
                  answer:
                        'Yes, and building both is usually the point. The same system that captures and converts a lead can run the onboarding sequence, intake forms, session scheduling and programme access once they become a client, then handle check-ins, renewals and referral requests. Stopping at conversion leaves the retention side of the business running on manual effort.',
            },
            {
                  question: 'Can you improve an existing GoHighLevel account?',
                  answer:
                        'Yes, and this is a common starting point. We audit the existing account first what works, what is broken, what is structurally sound and keep what is worth keeping rather than rebuilding from scratch by default. Accounts built partially, or by someone without GoHighLevel experience, often have a usable foundation with broken automation on top.',
            },
            {
                  question: 'Do you provide ongoing support after launch?',
                  answer:
                        'Yes. Training, SOPs and recorded walkthroughs are included so routine changes do not require us. Beyond that, ongoing optimisation is available, and where you want someone handling day-to-day account work there is a dedicated GoHighLevel virtual assistant service.',
                  link: '/services/virtual-assistant',
                  linkLabel: 'GoHighLevel virtual assistant service',
            },
            {
                  question: 'What does a GoHighLevel implementation project typically include and how long does it take?',
                  answer:
                        'Scope varies, but a typical coaching build covers CRM and pipeline structure, lead capture, booking and reminders, follow-up automation, onboarding workflows, testing and training. Most projects run one to three weeks depending on how many offers you run and whether course or membership delivery and a migration are involved. You receive a specific timeline and a fixed price after the discovery call, before anything is built.',
            },
      ];

      const serviceSchema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'GoHighLevel Services for Coaches',
            description:
                  'GoHighLevel services for coaches: CRM, application funnels, discovery call booking, follow-up automation and client onboarding built around your coaching model.',
            provider: {
                  '@type': 'Organization',
                  name: 'GHL Scale Up',
                  url: 'https://www.ghlscaleup.com',
            },
            areaServed: 'Worldwide',
            serviceType: 'GoHighLevel implementation for coaching businesses',
            url: 'https://www.ghlscaleup.com/services/gohighlevel-for-coaches',
      };

      const faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                  },
            })),
      };

      const container = 'max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8';

      return (
            <>
                  <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                  />
                  <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                  />

                  <Breadcrumb
                        items={[
                              { label: 'Services', href: '/services' },
                              { label: 'GoHighLevel for Coaches' },
                        ]}
                  />

                  {/* ============================================
          HERO — editorial with accent rule + stat bar
          ============================================ */}
                  <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white relative overflow-hidden">
                        {/* Decorative grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_20%,rgba(14,155,240,0.12),transparent)] pointer-events-none" />

                        <div className={`${container} relative z-10 pt-14 md:pt-20 pb-20 md:pb-28`}>
                              <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
                                    {/* Left: copy */}
                                    <div className="text-start">
                                          <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                                                <GraduationCap className="h-3 w-3" />
                                                For Coaches
                                          </div>

                                          <div className="flex items-start gap-4 mb-5">
                                                <span className="hidden sm:block w-1 self-stretch bg-[#F8D000] rounded-full mt-1" />
                                                <h1 className="text-[clamp(1.85rem,4.5vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                                                      GoHighLevel Services for{' '}
                                                      <span className="text-[#F8D000]">Coaches</span>
                                                </h1>
                                          </div>

                                          <div className="space-y-3.5 text-[0.92rem] sm:text-[0.97rem] font-light text-white/70 leading-relaxed max-w-xl">
                                                <p>
                                                      Build a GoHighLevel system around how your coaching business actually attracts leads, qualifies them, books calls, converts clients, and onboards them implemented and tested by a team that works inside GoHighLevel every day.
                                                </p>
                                          </div>

                                          {/* Stat bar */}
                                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden mt-7 max-w-xl">
                                                {[
                                                      { v: '200+', l: 'Projects' },
                                                      { v: '50+', l: 'Active clients' },
                                                      { v: '6', l: 'Countries' },
                                                      { v: '5+', l: 'Years' },
                                                ].map((s) => (
                                                      <div key={s.l} className="bg-[#16263D] px-4 py-3 text-center">
                                                            <div className="text-[#F8D000] font-extrabold text-lg leading-none">{s.v}</div>
                                                            <div className="text-[0.68rem] text-white/50 mt-1 tracking-wide uppercase">{s.l}</div>
                                                      </div>
                                                ))}
                                          </div>

                                          <div className="flex flex-wrap gap-3 mt-7">
                                                <Link
                                                      href="/contact"
                                                      className="bg-[#F8D000] text-[#0B1421] px-6 sm:px-8 py-3 rounded-lg text-[0.85rem] sm:text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center gap-2"
                                                >
                                                      Book a Free Strategy Call <ChevronRight className="h-4 w-4" />
                                                </Link>
                                          </div>
                                    </div>

                                    {/* Right: image with diagonal curve (top-right + bottom-left) */}
                                    <div className="relative w-full flex items-center justify-center">
                                          <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">

                                                {/* Soft radial glow behind image */}
                                                {/* <div className="absolute inset-0 -m-8 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(14,155,240,0.18),transparent_70%)] blur-2xl pointer-events-none" /> */}

                                                {/* Outer curved accent halo — mirrors the diagonal curve */}
                                                {/* <div
                                                      className="absolute -inset-4 bg-[rgba(248,208,0,0.06)] border border-[rgba(248,208,0,0.18)] pointer-events-none"
                                                      style={{
                                                            borderRadius: '0 20% 0 20%',
                                                      }}
                                                /> */}

                                                {/* Curved image container — top-right & bottom-left curved */}
                                                <div
                                                      className="relative overflow-hidden border border-white/10"
                                                      style={{
                                                            borderRadius: '0 20% 0 20%',
                                                      }}
                                                >
                                                      {/* Inner subtle vignette */}
                                                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(11,20,33,0.35))] pointer-events-none z-10" />

                                                      <Image
                                                            src="/service/coaches-hero.png"
                                                            alt="GHL Scale Up GoHighLevel services for coaches"
                                                            width={1600}
                                                            height={1200}
                                                            priority
                                                            sizes="(max-width: 1024px) 100vw, 45vw"
                                                            className="w-full h-auto object-contain"
                                                      />
                                                </div>

                                                {/* Thin yellow arc highlight on the curved top-right edge */}
                                                {/* <div
                                                      className="absolute top-0 right-0 w-[22%] h-[22%] pointer-events-none opacity-70"
                                                      style={{
                                                            borderTopRightRadius: '100%',
                                                            background:
                                                                  'linear-gradient(225deg, rgba(248,208,0,0.55) 0%, transparent 60%)',
                                                      }}
                                                      aria-hidden="true"
                                                /> */}

                                                {/* Thin yellow arc highlight on the curved bottom-left edge */}
                                                {/* <div
                                                      className="absolute bottom-0 left-0 w-[22%] h-[22%] pointer-events-none opacity-70"
                                                      style={{
                                                            borderBottomLeftRadius: '100%',
                                                            background:
                                                                  'linear-gradient(45deg, rgba(248,208,0,0.55) 0%, transparent 60%)',
                                                      }}
                                                      aria-hidden="true"
                                                /> */}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          BUILT FOR HOW COACHING BUSINESSES OPERATE
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">01</span>
                                                <span className="h-px flex-1 bg-[#E8EDF4] max-w-[60px]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                GoHighLevel Services Built for{' '}
                                                <span className="text-[#0E9BF0]">How Coaching Businesses Operate</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Coaching businesses need more from a CRM than contact storage, because the sale runs through a conversation rather than a checkout. Leads arrive from several places at once an ad, a podcast mention, a lead magnet, a referral and every one of them has to be qualified before it consumes a call slot. The consultation itself is the moment the sale is made or lost, which means show-up rate matters as much as lead volume. And because coaching is a considered, often high-ticket purchase, the gap between first contact and enrolment is frequently measured in months rather than days.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Then the moment someone enrols, the business changes shape. Selling stops and delivery starts: onboarding, intake, scheduling, programme access, check-ins, and eventually a renewal or referral conversation. Most setups treat that second half as an afterthought, which is why coaching businesses that convert well can still churn clients who never properly got started.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                GHL Scale Up configures GoHighLevel around both halves. Not every coaching business needs every component a solo coach running one offer needs a fraction of what a multi-programme business with a sales team needs so the system is scoped to your actual model on a discovery call rather than assembled from a standard template. What stays constant is the principle: the CRM, funnels, calendars, automation and lifecycle communication should function as one connected system rather than separate features that happen to be switched on.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          WHAT GOHIGHLEVEL CAN DO — bento grid
          ============================================ */}
                  <section className="py-16 md:py-24 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">02</span>
                                          <span className="h-px w-[40px] bg-[#E8EDF4]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          What GoHighLevel Can Do{' '}
                                          <span className="text-[#0E9BF0]">for a Coaching Business</span>
                                    </h2>
                              </div>

                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                                    {capabilities.map((item, index) => {
                                          const Icon = item.icon;
                                          const isFeature = index === 0;
                                          return (
                                                <div
                                                      key={index}
                                                      className={`group relative bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all duration-300 flex flex-col ${isFeature ? 'lg:col-span-2' : ''
                                                            }`}
                                                >
                                                      <span className="absolute top-5 right-5 text-[0.65rem] font-bold text-[#E8EDF4] group-hover:text-[#0E9BF0]/30 transition-colors">
                                                            {String(index + 1).padStart(2, '0')}
                                                      </span>

                                                      <div className="flex items-start gap-4 mb-4">
                                                            <div className="w-11 h-11 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0E9BF0] transition-colors">
                                                                  <Icon className="h-5 w-5 text-[#0E9BF0] group-hover:text-white transition-colors" />
                                                            </div>
                                                            <h3 className="text-[0.98rem] font-bold text-[#1C2E4A] pt-2 pr-6">{item.title}</h3>
                                                      </div>
                                                      <p className="text-[0.83rem] text-[#4A5568] leading-relaxed">{item.description}</p>
                                                      {item.extra && (
                                                            <p className="text-[0.83rem] text-[#4A5568] leading-relaxed mt-3">{item.extra}</p>
                                                      )}
                                                      {item.link && (
                                                            <Link
                                                                  href={item.link}
                                                                  className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#0E9BF0] hover:gap-2.5 transition-all"
                                                            >
                                                                  {item.linkLabel} <ChevronRight className="h-3.5 w-3.5" />
                                                            </Link>
                                                      )}
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          COACHING WORKFLOWS — horizontal timeline cards
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">03</span>
                                          <span className="h-px w-[40px] bg-[#E8EDF4]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          Coaching Workflows <span className="text-[#0E9BF0]">We Can Build</span>
                                    </h2>
                                    <p className="text-[0.9rem] text-[#4A5568]">
                                          These are the workflows that come up most often in coaching implementations. Which ones you need depends on your model they are implementation patterns, not a fixed package.
                                    </p>
                              </div>

                              <div className="space-y-5">
                                    {workflows.map((wf, index) => {
                                          const Icon = wf.icon;
                                          return (
                                                <div
                                                      key={index}
                                                      className="relative bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:border-[#0E9BF0] transition-all duration-300"
                                                >
                                                      <div className="grid md:grid-cols-[auto_1fr] gap-5 md:gap-6">
                                                            <div className="flex md:flex-col items-center gap-3 md:w-[150px]">
                                                                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E8EDF4] flex items-center justify-center flex-shrink-0">
                                                                        <Icon className="h-5 w-5 text-[#0E9BF0]" />
                                                                  </div>
                                                                  <h3 className="text-[1rem] font-bold text-[#1C2E4A] md:text-center md:leading-tight">{wf.title}</h3>
                                                            </div>

                                                            <div>
                                                                  <div className="bg-white border border-[#E8EDF4] rounded-xl p-4 mb-3">
                                                                        <p className="text-[0.83rem] text-[#1C2E4A] font-medium leading-relaxed">{wf.steps}</p>
                                                                  </div>
                                                                  {wf.extra && (
                                                                        <p className="text-[0.83rem] text-[#4A5568] leading-relaxed">{wf.extra}</p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          CRM SETUP FOR COACHES
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">04</span>
                                                <span className="h-px flex-1 bg-[#E8EDF4] max-w-[60px]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                GoHighLevel CRM Setup{' '}
                                                <span className="text-[#0E9BF0]">for Coaches</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                CRM architecture is where most coaching implementations either work or quietly fail, because every workflow, every segment and every report downstream depends on how contacts and opportunities were structured in the first place. Restructuring it later, once thousands of contacts and dozens of workflows are built on top, is significantly more expensive than getting it right at the start.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                For a coaching business, the structure usually needs to capture more than name and email. Depending on how you qualify and sell, custom fields and tags might record which programme someone is interested in, where the lead came from, what their coaching goal is, their investment range, their call status, their current client status, and where they are in a programme. None of these are mandatory GoHighLevel does not require them and we do not add fields for their own sake. The point is that whatever your qualification and sales process genuinely relies on should exist as structured data rather than living in call notes where no automation can reach it.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                That distinction is the practical one. A note saying &quot;wants to start in the new year&quot; cannot trigger anything. A date field or tag carrying the same information can put that person into a sequence that surfaces them at the right moment. We design the field and tag structure around the decisions your business actually makes, then configure pipelines, opportunity stages, calendars, forms and user permissions on top of it.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Full detail on the underlying service:{' '}
                                                <Link
                                                      href="/services/crm-setup"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      GoHighLevel CRM setup and configuration
                                                </Link>
                                                .
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          AUTOMATION FOR COACHES
          ============================================ */}
                  <section className="py-16 md:py-24 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">05</span>
                                                <span className="h-px flex-1 bg-[#E8EDF4] max-w-[60px]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                GoHighLevel Automation{' '}
                                                <span className="text-[#0E9BF0]">for Coaches</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Automation in a coaching business is not about sending more messages. It is about making sure the right thing happens at the right moment without depending on anyone remembering, which is what breaks first when a coach gets busy delivering.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                The automations that matter most in coaching are specific: instant response to a new application while interest is at its peak; reminders in the run-up to a consultation; recovery when someone misses it; follow-up after the call that differs depending on how the call went; proposal follow-up; onboarding on conversion; check-ins at meaningful points in a programme; a renewal conversation triggered before the engagement ends rather than after; testimonial and referral requests at completion; and internal notifications so you or your team know when something needs a human.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Each of those is built as triggers, conditions, actions and timing, then tested before launch which matters more than it sounds, because an untested coaching workflow can send three messages in a minute to someone who just booked, or enrol a paying client into the prospect nurture sequence. We test every path with real scenarios before a live lead touches it.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Full service detail:{' '}
                                                <Link
                                                      href="/services/workflow-automation"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      GoHighLevel workflow automation
                                                </Link>
                                                . Multi-channel communication specifically:{' '}
                                                <Link
                                                      href="/services/campaign-automation"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      email, SMS and WhatsApp automation
                                                </Link>
                                                .
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          FUNNELS AND LEAD CAPTURE
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">06</span>
                                                <span className="h-px flex-1 bg-[#E8EDF4] max-w-[60px]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                Funnels and Lead Capture{' '}
                                                <span className="text-[#0E9BF0]">for Coaching Offers</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                A funnel that does not connect to the CRM is just a page. The value comes from what happens after the submission, which is why we build the front end and the system behind it as one piece rather than handing over a landing page and leaving the wiring to you.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                For coaching businesses the common builds are application funnels for high-ticket offers, discovery-call booking funnels, lead magnet capture, webinar registration and follow-up, programme-specific landing pages, and group coaching enrolment pages. Each one submits into the CRM with source tracking, triggers the relevant automation, and places the lead at the correct pipeline stage.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                <Link
                                                      href="/services/funnel-development"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      Sales funnel development
                                                </Link>{' '}
                                                covers the funnel build in full; if the coaching business needs a complete site rather than standalone pages, that is{' '}
                                                <Link
                                                      href="/services/website-development"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      GHL website development
                                                </Link>
                                                .
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          CALENDAR AND APPOINTMENT AUTOMATION
          ============================================ */}
                  <section className="py-16 md:py-24 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">07</span>
                                                <span className="h-px flex-1 bg-[#E8EDF4] max-w-[60px]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                Calendar and Appointment Automation{' '}
                                                <span className="text-[#0E9BF0]">for Discovery Calls</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                The consultation is the single highest-value event in a coaching sales process, so the system around it should be engineered rather than left to a default calendar link. The complete journey we configure runs from availability and booking through confirmation, reminder timing, reschedule handling, cancellation paths, no-show recovery, internal notification, and the post-call workflow that moves the opportunity and starts the right follow-up track.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Where a coaching business runs multiple call types an initial discovery call, a deeper strategy session, a client session those are separate calendars with different durations, buffers and automation attached, rather than one calendar doing three jobs badly. For businesses with more than one coach or a setter-and-closer split, routing rules determine who receives which booking.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Full service:{' '}
                                                <Link
                                                      href="/services/calendar-booking"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      calendar and booking setup
                                                </Link>
                                                .
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          CLIENT ONBOARDING AND LIFECYCLE AUTOMATION
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">08</span>
                                                <span className="h-px flex-1 bg-[#E8EDF4] max-w-[60px]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                Client Onboarding and{' '}
                                                <span className="text-[#0E9BF0]">Lifecycle Automation</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                This is where most coaching implementations stop and where a meaningful amount of the value sits. The pipeline should not end at closed-won, because onboarding quality, engagement through the programme, and the renewal conversation all determine whether that client was actually profitable and whether they send anyone else.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                We build the lifecycle past conversion: welcome and onboarding sequences, intake forms feeding the contact record, session scheduling, programme-specific communication, check-ins timed to the structure of your programme, renewal or next-tier prompts raised before the current engagement ends, review and testimonial requests at completion, and referral campaigns. Disengagement can also be surfaced a client who stops booking sessions or stops opening messages becomes visible as something to act on while there is still time to act.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                One boundary worth being explicit about: this is the business system around your coaching, not the coaching itself. We build the infrastructure that gets clients in, onboarded, communicated with and retained. What happens inside the sessions is yours.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Where programme delivery involves gated content, courses or a community, that is{' '}
                                                <Link
                                                      href="/services/membership-sites"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      membership and course sites
                                                </Link>
                                                . Review and testimonial collection specifically:{' '}
                                                <Link
                                                      href="/services/reputation-management"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      reputation and review management
                                                </Link>
                                                .
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          CASE STUDIES
          ============================================ */}
                  <section className="py-14 md:py-20 bg-[#F4F7FA]">
                        <CaseStudies caseStudies={caseStudies} />
                  </section>

                  {/* ============================================
          TESTIMONIALS
          ============================================ */}
                  <section className="py-14 md:py-20 bg-white">
                        <Testimonials testimonials={testimonials} />
                  </section>

                  {/* ============================================
          HOW IMPLEMENTATION DIFFERS BY COACHING MODEL
          ============================================ */}
                  <section className="py-16 md:py-24 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">09</span>
                                          <span className="h-px w-[40px] bg-[#E8EDF4]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          How Implementation Differs{' '}
                                          <span className="text-[#0E9BF0]">by Coaching Model</span>
                                    </h2>
                                    <p className="text-[0.9rem] text-[#4A5568]">
                                          The same platform gets configured quite differently depending on how you sell and deliver. These are implementation patterns rather than packages.
                                    </p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                                    {coachingModels.map((model, index) => {
                                          const Icon = model.icon;
                                          return (
                                                <div
                                                      key={index}
                                                      className="relative bg-white border border-[#E8EDF4] rounded-2xl p-6 overflow-hidden hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all duration-300"
                                                >
                                                      <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E9BF0] to-[rgba(14,155,240,0.15)]" />
                                                      <div className="flex items-start gap-4 mb-4">
                                                            <div className="w-11 h-11 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0">
                                                                  <Icon className="h-5 w-5 text-[#0E9BF0]" />
                                                            </div>
                                                            <h3 className="text-[0.98rem] font-bold text-[#1C2E4A] pt-2">{model.title}</h3>
                                                      </div>
                                                      <p className="text-[0.83rem] text-[#4A5568] leading-relaxed">{model.description}</p>
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          IF YOU ALREADY USE ANOTHER CRM OR PLATFORM
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">10</span>
                                                <span className="h-px flex-1 bg-[#E8EDF4] max-w-[60px]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                If You Already Use{' '}
                                                <span className="text-[#0E9BF0]">Another CRM or Platform</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Most coaching businesses reaching this page are not starting from nothing. There is usually a scheduling tool, an email platform, a course or membership system, a payment processor, some Zapier connections, and often a CRM that was outgrown rather than chosen. The right move is not automatically to replace all of it.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                On the discovery call we assess what exists and recommend one of several paths: a fresh implementation, a migration from your current platform, integration where a tool is genuinely worth keeping, a partial rebuild where some of the existing setup is sound, workflow repair where the structure is fine but the automation is broken, or CRM restructuring where the data model no longer matches how you sell. Sometimes the honest answer is that a tool you already have is doing its job and should stay.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                On migration specifically, complexity varies a great deal by source platform and we scope it rather than promising a clean transfer in every case. Kajabi is the most common source for coaching businesses, and it is worth knowing up front that contacts, tags and email sequences transfer while course content does not every lesson has to be rebuilt manually inside GoHighLevel&apos;s membership module. That rebuild is usually the bulk of the project.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                <Link
                                                      href="/services/migration"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      GoHighLevel migration services
                                                </Link>{' '}
                                                covers the general process; for coaching businesses on Kajabi specifically, see{' '}
                                                <Link
                                                      href="/kajabi-to-gohighlevel"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      Kajabi to GoHighLevel
                                                </Link>
                                                .
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          WHAT WE ACTUALLY IMPLEMENT
          ============================================ */}
                  <section className="py-16 md:py-24 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">11</span>
                                          <span className="h-px w-[40px] bg-[#E8EDF4]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          What We <span className="text-[#0E9BF0]">Actually Implement</span>
                                    </h2>
                                    <p className="text-[0.9rem] text-[#4A5568]">
                                          Depending on your coaching model and the agreed scope, an implementation may include any of the following. This is a menu of what is available, not a list of what every project contains scope is fixed and documented before any building starts.
                                    </p>
                              </div>

                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                                    {implementationMenu.map((item, index) => {
                                          const Icon = item.icon;
                                          return (
                                                <div
                                                      key={index}
                                                      className="relative bg-white border border-[#E8EDF4] rounded-xl p-5 pl-16 hover:shadow-[0_8px_30px_rgba(28,46,74,0.06)] hover:border-[#0E9BF0] transition-all duration-300"
                                                >
                                                      <div className="absolute left-5 top-5 w-9 h-9 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center">
                                                            <Icon className="h-4 w-4 text-[#0E9BF0]" />
                                                      </div>
                                                      <h3 className="text-[0.88rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                                                      <p className="text-[0.78rem] text-[#4A5568] leading-relaxed">{item.description}</p>
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          HOW WE BUILD GOHIGHLEVEL SYSTEMS FOR COACHES
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">12</span>
                                          <span className="h-px w-[40px] bg-[#E8EDF4]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          How We Build GoHighLevel{' '}
                                          <span className="text-[#0E9BF0]">Systems for Coaches</span>
                                    </h2>
                              </div>

                              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                                    {processSteps.map((item, index) => (
                                          <div
                                                key={index}
                                                className="relative bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-5 md:p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300"
                                          >
                                                {index < processSteps.length - 1 && (
                                                      <span className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-[#E8EDF4]" />
                                                )}
                                                <div className="w-10 h-10 rounded-full bg-[#1C2E4A] text-[#F8D000] flex items-center justify-center text-sm font-bold mb-4">
                                                      {item.step}.
                                                </div>
                                                <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-2">{item.title}</h3>
                                                <p className="text-[0.78rem] text-[#4A5568] leading-relaxed">{item.description}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          WHY WORK WITH A GOHIGHLEVEL SERVICE PROVIDER
          ============================================ */}
                  <section className="py-16 md:py-24 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">13</span>
                                                <span className="h-px flex-1 bg-[#E8EDF4] max-w-[60px]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                Why Work With a{' '}
                                                <span className="text-[#0E9BF0]">GoHighLevel Service Provider</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                There are several reasonable ways to get GoHighLevel set up, and they suit different situations. Doing it yourself works when the requirement is genuinely simple one offer, one calendar, a confirmation email and the platform&apos;s own templates will get you there. Hiring someone for an isolated task makes sense when you know precisely what is missing: one workflow, one funnel page.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                Where that approach struggles is when the pieces have to work together. A coaching system is not a funnel plus a calendar plus some emails; it is a sequence where qualification determines routing, routing determines the follow-up track, the call outcome determines the pipeline stage, and the pipeline stage triggers onboarding. Built piecemeal by different people at different times, those connections are where things break and the breakage is usually silent, showing up as leads that quietly stopped receiving follow-up rather than as an obvious error.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                GHL Scale Up works exclusively in GoHighLevel, designs the architecture before configuring anything, and builds the connected journey rather than individual features. Every project is fixed-price against a documented scope, tested before handover, and includes training so your team owns the system rather than depending on us for routine changes.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                For the broader case for working with us, beyond coaching specifically:{' '}
                                                <Link
                                                      href="/services/hire-gohighlevel-experts"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      hire GoHighLevel experts
                                                </Link>
                                                . For the full range of what we build:{' '}
                                                <Link
                                                      href="/services"
                                                      className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                >
                                                      GoHighLevel services
                                                </Link>
                                                .
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          PROOF AND TRACK RECORD
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
                                          <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" />
                                          Proof and Track Record
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          Proof and <span className="text-[#0E9BF0]">Track Record</span>
                                    </h2>
                              </div>

                              <div className="max-w-3xl mx-auto space-y-6">
                                    <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                          GHL Scale Up has delivered 200+ GoHighLevel projects for 50+ active clients across 6 countries, with 5+ years working in the platform. Every build is fixed-price, tested before handover, and includes training.
                                    </p>
                                    <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                          We have not yet published a case study from a coaching business specifically, and we would rather say that than present an unrelated project as one. The published work below is relevant to coaching implementations for reasons worth naming precisely:
                                    </p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-8">
                                    <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 md:p-7 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300 flex flex-col">
                                          <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EDF4] flex items-center justify-center mb-4">
                                                <Globe className="h-6 w-6 text-[#0E9BF0]" />
                                          </div>
                                          <h3 className="text-[1rem] font-bold text-[#1C2E4A] mb-3">
                                                Service business website setup and automation repair
                                          </h3>
                                          <p className="text-[0.85rem] text-[#4A5568] leading-relaxed flex-1">
                                                Broken surveys, unreliable email automation and inconsistent campaign delivery were fixed alongside a proper lead-capture site. These are the same failure modes that break a coaching funnel: forms that do not reliably create records, and follow-up that silently stops firing.
                                          </p>
                                          <Link
                                                href="/case-studies/gohighlevel-website-setup-automation-fix"
                                                className="mt-5 inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.85rem] hover:gap-3 transition-all"
                                          >
                                                Read the case study <ChevronRight className="h-4 w-4" />
                                          </Link>
                                    </div>

                                    <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 md:p-7 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300 flex flex-col">
                                          <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EDF4] flex items-center justify-center mb-4">
                                                <Briefcase className="h-6 w-6 text-[#0E9BF0]" />
                                          </div>
                                          <h3 className="text-[1rem] font-bold text-[#1C2E4A] mb-3">
                                                Marketing agency AI automation, 70% less manual work
                                          </h3>
                                          <p className="text-[0.85rem] text-[#4A5568] leading-relaxed flex-1">
                                                A business running lead management and client communication manually across disconnected tools, rebuilt as one automated GoHighLevel system. The relevance is the operational pattern rather than the industry: consultative selling and a manual, high-touch client process.
                                          </p>
                                          <Link
                                                href="/case-studies/gohighlevel-ai-automation-customer-management-marketing-agency"
                                                className="mt-5 inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.85rem] hover:gap-3 transition-all"
                                          >
                                                Read the case study <ChevronRight className="h-4 w-4" />
                                          </Link>
                                    </div>
                              </div>

                              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                                    <Link
                                          href="/case-studies"
                                          className="inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.9rem] hover:gap-3 transition-all"
                                    >
                                          See all case studies <ChevronRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                          href="/testimonials"
                                          className="inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.9rem] hover:gap-3 transition-all"
                                    >
                                          Read client testimonials <ChevronRight className="h-4 w-4" />
                                    </Link>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          WHICH COACHES THIS SERVICE IS FOR
          ============================================ */}
                  <section className="py-16 md:py-24 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">14</span>
                                          <span className="h-px w-[40px] bg-[#E8EDF4]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          Which Coaches <span className="text-[#0E9BF0]">This Service Is For</span>
                                    </h2>
                                    <p className="text-[0.9rem] text-[#4A5568]">
                                          This service tends to be a good fit if you are:
                                    </p>
                              </div>

                              <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
                                    {fitPoints.map((point, index) => (
                                          <div
                                                key={index}
                                                className="flex items-start gap-3 bg-white border border-[#E8EDF4] rounded-xl p-4 hover:border-[#0E9BF0] transition-colors"
                                          >
                                                <CheckCircleIcon className="h-5 w-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                <span className="text-[0.83rem] text-[#4A5568] leading-snug">{point}</span>
                                          </div>
                                    ))}
                              </div>

                              <div className="max-w-3xl mx-auto mt-8 bg-white border border-[#E8EDF4] rounded-2xl p-6">
                                    <p className="text-[0.88rem] text-[#4A5568] leading-relaxed">
                                          If your need is narrower, a specific service page may be the better starting point. Someone who only needs the CRM structured should start with{' '}
                                          <Link href="/services/crm-setup" className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80">
                                                CRM setup
                                          </Link>
                                          ; someone whose CRM is fine but whose follow-up is manual should start with{' '}
                                          <Link href="/services/workflow-automation" className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80">
                                                workflow automation
                                          </Link>
                                          ; someone whose main project is moving platforms should start with{' '}
                                          <Link href="/services/migration" className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80">
                                                migration
                                          </Link>
                                          . This page is the right entry point when the pieces need to be built or rebuilt as one connected system.
                                    </p>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          FAQS — with left sticky heading column
          ============================================ */}
                  <section className="py-16 md:py-24 bg-white">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
                                    <div className="lg:sticky lg:top-24 h-fit">
                                          <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#0E9BF0]">FAQ</span>
                                                <span className="h-px w-[60px] bg-[#E8EDF4]" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                                Frequently Asked <span className="text-[#0E9BF0]">Questions</span>
                                          </h2>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                                          {faqs.map((faq, index) => (
                                                <details
                                                      key={index}
                                                      className="group bg-white border border-[#E8EDF4] rounded-xl overflow-hidden hover:border-[#0E9BF0] transition-colors h-fit"
                                                >
                                                      <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer hover:bg-[#F9FBFD] transition-colors list-none">
                                                            <span className="text-[0.85rem] sm:text-[0.9rem] font-semibold text-[#1C2E4A]">
                                                                  {faq.question}
                                                            </span>
                                                            <ChevronRight className="h-4 w-4 text-[#0E9BF0] group-open:rotate-90 transition-transform flex-shrink-0" />
                                                      </summary>
                                                      <div className="px-4 sm:px-5 pb-5">
                                                            <p className="text-[0.8rem] sm:text-[0.83rem] text-[#4A5568] leading-relaxed">
                                                                  {faq.answer}
                                                                  {faq.link && (
                                                                        <>
                                                                              {' '}
                                                                              <Link
                                                                                    href={faq.link}
                                                                                    className="text-[#0E9BF0] font-semibold underline underline-offset-2 hover:text-[#0E9BF0]/80"
                                                                              >
                                                                                    {faq.linkLabel}
                                                                              </Link>
                                                                              .
                                                                        </>
                                                                  )}
                                                            </p>
                                                      </div>
                                                </details>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          FINAL CTA
          ============================================ */}
                  <section className="bg-[#1C2E4A] text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(14,155,240,0.1),transparent)] pointer-events-none" />
                        <div className={`${container} relative z-10 py-16 md:py-24`}>
                              <div className="text-center max-w-3xl mx-auto">
                                    <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                                          <Phone className="h-3 w-3" />
                                          Book a Free Strategy Call
                                    </div>
                                    <h2 className="text-[1.6rem] sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-5">
                                          Book a Free Strategy Call
                                    </h2>
                                    <p className="text-[0.9rem] sm:text-[0.95rem] font-light text-white/70 mb-8 leading-relaxed">
                                          Fill in the contact form and Aryan reviews every enquiry personally, usually reaching out within a few hours to arrange a free 30-minute call. Useful to have ready: your offer structure, where leads currently come from, and what your sales process looks like today. If you already have a GoHighLevel account, we will look at it on the call. You will leave with a clear view of what your system needs, a scope, a timeline and a fixed price no obligation to proceed.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
                                          <Link
                                                href="/contact"
                                                className="bg-[#F8D000] text-[#0B1421] px-6 sm:px-8 py-3 rounded-lg text-[0.88rem] sm:text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center justify-center gap-2"
                                          >
                                                Book Your Free Strategy Call <ChevronRight className="h-4 w-4" />
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </section>
            </>
      );
}

// Small inline icon components (used where lucide-react lacks exact match)
function CheckCircleIcon({ className }: { className?: string }) {
      return (
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={className}
            >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
            </svg>
      );
}