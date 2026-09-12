// app/services/gohighlevel-for-real-estate/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
      Building2, Users, Briefcase, Target, Zap, Calendar, MessageSquare,
      Bot, Phone, Star, BarChart3, ChevronRight, ArrowRight, MapPin,
      Home, Star as StarIcon,
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CaseStudies from '@/components/ghlscalup/CaseStudies';
import Testimonials from '@/components/ghlscalup/Testimonials';
import { getCaseStudies } from '@/lib/caseStudiesData';
import { getAllTestimonialsForHomepage } from '@/lib/sanity';

export const metadata = {
      title: 'GoHighLevel for Real Estate Agents & Teams | GHL Scale Up',
      description:
            'We build GoHighLevel CRM, automation, and AI systems for real estate agents and teams lead routing, showing booking, nurture, and review requests. Book a free call.',
      keywords:
            'GoHighLevel for real estate agents, GoHighLevel for real estate, GHL for real estate, GHL for real estate agents, GoHighLevel real estate CRM, GoHighLevel for realtors, real estate chatbot GHL, GoHighLevel virtual assistant for real estate, GoHighLevel for property developers',
      alternates: {
            canonical: '/services/gohighlevel-for-real-estate',
      },
      openGraph: {
            title: 'GoHighLevel for Real Estate Agents & Teams | GHL Scale Up',
            description:
                  'We build GoHighLevel CRM, automation, and AI systems for real estate agents and teams lead routing, showing booking, nurture, and review requests.',
            url: 'https://www.ghlscaleup.com/services/gohighlevel-for-real-estate',
            siteName: 'GHL Scale Up',
            type: 'website',
      },
};

export default async function RealEstateServicePage() {
      // ============================================
      // FETCH CASE STUDIES & TESTIMONIALS (same as main services page)
      // ============================================
      const caseStudies = getCaseStudies();

      let testimonials = [];
      try {
            testimonials = await getAllTestimonialsForHomepage();
      } catch (error) {
            console.error('Failed to load testimonials:', error);
      }

      // ============================================
      // DATA
      // ============================================

      // Who This Setup Is For
      const audiences = [
            {
                  icon: Home,
                  title: 'Solo Agents and Small Teams',
                  description:
                        "You're generating leads from a mix of Zillow, Realtor.com, Facebook or Instagram ads, and your own website, and you're currently managing follow-up manually or with a patchwork of a spreadsheet, a calendar app, and a generic email tool. The system we build gets every lead source into one pipeline with automatic follow-up, so a lead who comes in while you're at a showing still gets contacted within minutes, not hours.",
            },
            {
                  icon: Users,
                  title: 'Growing Teams and Brokerages',
                  description:
                        "You have more than one agent working leads, and the current setup doesn't route leads fairly or consistently whoever checks their phone first gets the lead, or leads sit in a shared inbox until someone remembers to assign them. We configure round-robin or rules-based routing (by area, by lead source, or by agent availability) so leads move automatically to the right person, and management gets visibility into which agents are converting and which leads are going cold.",
            },
            {
                  icon: Building2,
                  title: 'Property Developers and Multi-Location Brands',
                  description:
                        "You're managing inquiries across multiple properties, developments, or office locations, and a single flat pipeline doesn't reflect that structure. We've built this specific setup before a sub-account or location-tagged structure with dynamic, location-based property pages feeding into the right pipeline covered in the multi-location case study below.",
            },
      ];

      // What We Build (H3 sections)
      const systemComponents = [
            {
                  icon: Target,
                  title: 'Lead Capture & Source Integration',
                  description:
                        "Real estate leads arrive from more channels than most industries: Zillow and Realtor.com inquiries, Facebook and Instagram lead ads, your IDX website's contact and saved-search forms, open house sign-ins, and referrals. Left disconnected, each of these becomes a separate place to check, and leads get missed simply because nobody was looking at that particular inbox that day. We connect these sources into GoHighLevel through native integrations, Zapier, or Make.com so every inquiry regardless of where it came from lands in the CRM tagged with its source, which matters later for knowing which channels are actually producing buyers versus browsers.",
            },
            {
                  icon: Zap,
                  title: 'Speed-to-Lead & Round-Robin Routing',
                  description:
                        "Portal leads in particular are often shared with more than one agent at the same time, which makes response speed a genuine competitive factor, not just a nice-to-have. We set up automatic instant response including GoHighLevel's missed-call text-back, which sends a text within 15 seconds of a missed call paired with routing logic that assigns the lead to the right agent immediately rather than waiting for someone to claim it manually. For teams, this is typically round-robin by availability, but can be weighted by geographic farm area, price range, or lead source instead.",
            },
            {
                  icon: Calendar,
                  title: 'Showing & Appointment Booking',
                  description:
                        "Buyers and sellers expect to book a showing or a listing consultation without a back-and-forth phone tag. We configure booking calendars tied to each agent's availability, with automatic confirmation and reminder texts before the appointment which measurably reduces no-shows compared to a confirmation email that gets buried in an inbox.",
            },
            {
                  icon: MessageSquare,
                  title: 'Buyer & Seller Nurture Sequences',
                  description:
                        "The real estate sales cycle isn't linear the way it is in most B2B contexts a lead who isn't ready today might be ready in eight months, and losing track of them until then means losing the deal to whoever stays in touch. We build separate nurture tracks for buyers and sellers (their timelines, objections, and content needs are different), including longer-horizon drip sequences for leads who explicitly aren't ready yet, so they hear from you consistently without anyone manually remembering to follow up six months later.",
            },
            {
                  icon: Bot,
                  title: 'AI Voice & Chat for Real Estate',
                  description:
                        "An AI voice agent can answer after-hours calls and missed calls with real qualifying questions buying or selling, budget or price range, timeline, preferred area and either book a showing directly or hand a warm, qualified lead to an agent instead of a missed call notification. The same logic applies to an on-site chatbot for IDX website visitors browsing listings outside business hours. This isn't a generic chatbot script; the qualifying questions and routing logic are built around what actually determines whether a real estate lead is worth an agent's time.",
            },
            {
                  icon: Star,
                  title: 'Post-Closing Reviews & Referrals',
                  description:
                        "The highest-value part of a real estate lead's lifecycle the referral and the review is also the part most commonly forgotten once a deal closes and everyone moves on to the next transaction. We automate the review request and referral ask to trigger on closing, consistently, rather than depending on someone remembering to send it.",
            },
            {
                  icon: BarChart3,
                  title: 'Reporting for Agents and Teams',
                  description:
                        "For teams and brokerages, we build dashboards showing lead volume by source, response times, pipeline stage distribution, and which agents are converting so decisions about where to spend on lead generation are based on actual conversion data, not instinct.",
                  link: '/services/reporting',
                  linkLabel: 'See reporting & dashboards',
            },
      ];

      // Lead Path
      const leadPath = [
            'A buyer inquires on a Zillow listing',
            'The lead enters GoHighLevel automatically, tagged "Buyer Zillow"',
            'Round-robin assigns it to the next available agent',
            'The lead receives an automatic text within 15 seconds; the agent gets a simultaneous notification',
            "If the lead doesn't respond, a scheduled follow-up sequence continues over the following days",
            "When the lead requests a showing, a booking link routes to that agent's calendar, with automatic confirmation and reminder texts",
            "After the showing, the pipeline stage updates either moving toward an offer or, if the lead isn't ready, shifting into the long-term nurture track",
            'Once the deal closes, an automated review request and referral ask fires without anyone needing to remember',
      ];

      // Process Steps
      const processSteps = [
            {
                  step: '1',
                  title: 'Understand Needs',
                  description:
                        'A free discovery call covering your lead sources, team size and structure, current tools, and where leads are currently falling through.',
            },
            {
                  step: '2',
                  title: 'Design Systems',
                  description:
                        'Buyer/seller pipeline structure, routing logic, and nurture timelines mapped out and documented before anything is built.',
            },
            {
                  step: '3',
                  title: 'Build & Integrate',
                  description:
                        'Lead source connections, routing, booking calendars, nurture sequences, and AI voice/chat implemented inside GoHighLevel.',
            },
            {
                  step: '4',
                  title: 'Test & Refine',
                  description:
                        'Every automation tested with real scenarios a missed call, a portal lead, a showing request before it touches a live lead.',
            },
            {
                  step: '5',
                  title: 'Train & Scale',
                  description:
                        'Live training for agents and admin staff, with SOPs so new agents can be onboarded into the system without starting from scratch.',
            },
      ];

      // FAQs
      const faqs = [
            {
                  question: 'Do you just advise on strategy, or do you actually build the system?',
                  answer:
                        'We build it. The discovery call covers strategy your lead sources, team structure, and sales process but the deliverable is a working GoHighLevel account: pipelines, automations, booking, and integrations configured and tested, not a recommendations document.',
            },
            {
                  question: 'Can GoHighLevel connect to Zillow, Realtor.com, and my IDX website?',
                  answer:
                        "Yes, through native integrations, Zapier, or Make.com depending on which platform and plan you're on. We confirm the exact connection method for your specific lead sources during the discovery call rather than assuming one approach fits every IDX provider.",
            },
            {
                  question: 'How fast can leads actually be contacted after they come in?',
                  answer:
                        "GoHighLevel's missed-call text-back can respond within 15 seconds of a missed call, and inbound form leads can trigger an immediate automated text or email the moment they enter the CRM. The agent notification happens at the same time, so the automated response and the human follow-up aren't sequential both start immediately.",
            },
            {
                  question: 'Can you set up round-robin lead routing for a team or brokerage?',
                  answer:
                        'Yes. Routing can be pure round-robin, or weighted by geographic area, price range, lead source, or agent availability whichever matches how your team actually splits leads today.',
            },
            {
                  question: 'Do I need to already have a GoHighLevel account?',
                  answer:
                        "No. If you don't have one yet, we help you choose the right plan during the discovery call and build inside it once it's set up. If you already have an account even a partially built one we audit what's there first.",
            },
            {
                  question: 'Can you migrate my team off Follow Up Boss or another real estate CRM?',
                  answer:
                        "I don't have a verified answer to give you here without checking scope directly GHL Scale Up's standard migration service currently covers platforms like HubSpot, ActiveCampaign, Kajabi, Salesforce, Keap, Mailchimp, and Pipedrive, and Follow Up Boss and similar real estate-specific CRMs aren't listed among those. That doesn't necessarily mean it's not possible a custom data export/import can often be scoped as part of a real estate build but this is genuinely worth confirming directly on the discovery call rather than assuming either way.",
            },
            {
                  question: 'Will my agents and admin staff actually be trained to use it?',
                  answer:
                        "Yes live training, recorded walkthroughs, and written SOPs are included, covering both agent-facing use (working leads, booking) and admin tasks (adding a new agent, adjusting routing) so you're not dependent on us for routine changes.",
            },
            {
                  question: 'How long does a real estate GoHighLevel build take?',
                  answer:
                        'Typically one to three weeks, depending on how many lead sources need connecting and how many agents are involved in routing. You get a specific estimate after the discovery call.',
            },
            {
                  question: 'How much does it cost?',
                  answer:
                        'Pricing is fixed and quoted after the discovery call based on scope number of lead sources, pipeline complexity, and whether AI voice/chat or multi-location routing is involved rather than billed hourly, so you know the total before committing.',
            },
      ];

      // Related Services
      const relatedServices = [
            {
                  title: 'Hire GoHighLevel Experts',
                  description: 'The general case for hiring GHL Scale Up, beyond real estate specifically.',
                  link: '/services/hire-gohighlevel-experts',
            },
            {
                  title: 'AI Voice Agent & Call Handling',
                  description: 'Full detail on the AI receptionist referenced above.',
                  link: '/services/ai-voice-agent',
            },
            {
                  title: 'Virtual Assistant for GHL Management',
                  description: 'Ongoing day-to-day account management if you need a dedicated person running it, not just the initial build.',
                  link: '/services/virtual-assistant',
            },
            {
                  title: 'Reporting & Dashboards',
                  description: 'The full reporting service referenced above.',
                  link: '/services/reporting',
            },
            {
                  title: 'Lead Generation Systems',
                  description: 'If you also need help generating the ad traffic that feeds this system, not just building the system itself.',
                  link: '/marketing/lead-generation',
            },
      ];

      // ============================================
      // SCHEMA (Service + FAQPage)
      // ============================================
      const serviceSchema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'GoHighLevel for Real Estate',
            description:
                  'GoHighLevel CRM, automation, and AI setup for real estate agents, teams, brokerages, and property developers.',
            provider: {
                  '@type': 'Organization',
                  name: 'GHL Scale Up',
                  url: 'https://www.ghlscaleup.com',
            },
            areaServed: 'Worldwide',
            serviceType: 'GoHighLevel implementation for real estate',
            url: 'https://www.ghlscaleup.com/services/gohighlevel-for-real-estate',
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
                  {/* Schema */}
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
                              { label: 'GoHighLevel for Real Estate' },
                        ]}
                  />

                  {/* ============================================
          HERO
          ============================================ */}
                  <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_20%,rgba(14,155,240,0.12),transparent)] pointer-events-none" />
                        <div className={`${container} relative z-10 py-16 md:py-20`}>
                              <div className="text-start max-w-7xl mx-auto">
                                    <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                                          <Building2 className="h-3 w-3" />
                                          Real Estate
                                    </div>
                                    <h1 className="text-[clamp(1.7rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-6">
                                          GoHighLevel for Real Estate: CRM, Automation, and AI Setup for{' '}
                                          <span className="text-[#F8D000]">Agents and Teams</span>
                                    </h1>

                                    <div className="space-y-4 text-[1rem] sm:text-[1.125rem] font-light text-white/70 leading-relaxed text-left sm:text-start">
                                          <p>
                                                GHL Scale Up builds GoHighLevel systems specifically around how real estate actually works dual-sided leads, long and unpredictable sales cycles, portal leads that go stale in minutes, and teams where a lead needs to reach the right agent, not just any agent. We are not writing another explainer on what GoHighLevel can do for real estate; if you want that, our{' '}
                                                <Link
                                                      href="/blog/gohighlevel-for-real-estate"
                                                      className="text-[#F8D000] underline underline-offset-2 hover:text-[#FFE44D]"
                                                >
                                                      guide on GoHighLevel for real estate agents
                                                </Link>{' '}
                                                covers it. This page is for agents, teams, and real estate firms who have already decided to build on GoHighLevel and need someone who understands the industry to configure it correctly.
                                          </p>
                                          <p>
                                                That means pipelines that separate buyers from sellers instead of forcing both through one generic "new lead → closed" flow, automations that respond to a Zillow or Realtor.com lead before a competing agent does, and a nurture structure built for the reality that some leads close in three weeks and others in eight months. We have built this exact kind of system for real estate agents and multi-location brands see the case studies below and every build includes training so your team can run it without depending on us for routine changes.
                                          </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-8 justify-start sm:justify-start">
                                          <Link
                                                href="/contact"
                                                className="bg-[#F8D000] text-[#0B1421] px-6 sm:px-8 py-3 rounded-lg text-[0.88rem] sm:text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center gap-2"
                                          >
                                                Book a Free Strategy Call <ChevronRight className="h-4 w-4" />
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          WHO THIS SETUP IS FOR
          ============================================ */}
                  <section className="py-14 md:py-20 bg-white">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          Who This Real Estate <span className="text-[#0E9BF0]">GoHighLevel Setup Is For</span>
                                    </h2>
                              </div>

                              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                                    {audiences.map((item, index) => {
                                          const Icon = item.icon;
                                          return (
                                                <div
                                                      key={index}
                                                      className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300 flex flex-col"
                                                >
                                                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EDF4] flex items-center justify-center mb-4">
                                                            <Icon className="h-6 w-6 text-[#0E9BF0]" />
                                                      </div>
                                                      <h3 className="text-[0.98rem] font-bold text-[#1C2E4A] mb-3">{item.title}</h3>
                                                      <p className="text-[0.83rem] text-[#4A5568] leading-relaxed">{item.description}</p>
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          WHAT WE BUILD
          ============================================ */}
                  <section className="py-14 md:py-20 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          What We Build Into Your{' '}
                                          <span className="text-[#0E9BF0]">Real Estate GoHighLevel System</span>
                                    </h2>
                                    <p className="text-[0.9rem] text-[#4A5568]">
                                          Every real estate build draws from the same core components. Which ones apply to you depends on how you generate leads and how your team is structured this gets scoped precisely on the discovery call, not assumed in advance.
                                    </p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                                    {systemComponents.map((component, index) => {
                                          const Icon = component.icon;
                                          return (
                                                <div
                                                      key={index}
                                                      className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all duration-300 flex flex-col"
                                                >
                                                      <div className="flex items-start gap-4 mb-4">
                                                            <div className="w-11 h-11 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0">
                                                                  <Icon className="h-5 w-5 text-[#0E9BF0]" />
                                                            </div>
                                                            <h3 className="text-[0.98rem] font-bold text-[#1C2E4A] pt-2">{component.title}</h3>
                                                      </div>
                                                      <p className="text-[0.83rem] text-[#4A5568] leading-relaxed flex-1">{component.description}</p>
                                                      {component.link && (
                                                            <Link
                                                                  href={component.link}
                                                                  className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#0E9BF0] hover:gap-2.5 transition-all"
                                                            >
                                                                  {component.linkLabel} <ChevronRight className="h-3.5 w-3.5" />
                                                            </Link>
                                                      )}
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          CASE STUDIES (shared component same as main services page)
          ============================================ */}
                  <section className="py-14 md:py-20 bg-white">
                        <CaseStudies caseStudies={caseStudies} />
                  </section>

                  {/* ============================================
          TESTIMONIALS (shared component same as main services page)
          ============================================ */}
                  <section className="py-14 md:py-20 bg-[#F4F7FA]">
                        <Testimonials testimonials={testimonials} />
                  </section>

                  {/* ============================================
          HOW A LEAD MOVES THROUGH THE SYSTEM
          ============================================ */}
                  <section className="py-14 md:py-20 bg-white">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight mb-4">
                                                How a Lead Actually Moves Through the{' '}
                                                <span className="text-[#0E9BF0]">System</span>
                                          </h2>
                                          <p className="text-[0.88rem] text-[#4A5568] leading-relaxed">
                                                To make this concrete, here is a typical path for a buyer lead once the system is built.
                                          </p>
                                    </div>
                                    <div className="space-y-3">
                                          {leadPath.map((step, index) => (
                                                <div
                                                      key={index}
                                                      className="flex items-start gap-4 bg-[#F4F7FA] border border-[#E8EDF4] rounded-xl p-4 sm:p-5 hover:border-[#0E9BF0] transition-colors"
                                                >
                                                      <div className="w-8 h-8 rounded-full bg-[#1C2E4A] text-[#F8D000] flex items-center justify-center text-[0.75rem] font-bold flex-shrink-0">
                                                            {index + 1}
                                                      </div>
                                                      <span className="text-[0.85rem] text-[#4A5568] leading-relaxed pt-1">{step}</span>
                                                </div>
                                          ))}
                                    </div>
                              </div>

                              <div className="mt-10 max-w-3xl mx-auto text-center bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6">
                                    <p className="text-[0.9rem] sm:text-[0.95rem] text-[#1C2E4A] font-semibold italic leading-relaxed">
                                          That sequence runs the same way for every lead, regardless of which agent is handling it or how busy they are that day which is the actual point of building this instead of relying on individual discipline.
                                    </p>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
IMAGE - RESPONSIVE FULL IMAGE
(No cropping, entire image always visible)
============================================ */}
                  <section className="w-full bg-[#F4F7FA] py-8 md:py-12">
                        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="relative w-full overflow-hidden rounded-2xl">
                                    <Image
                                          src="/service/real-estate-hero.png"
                                          alt="GHL Scale Up GoHighLevel for real estate agents and teams"
                                          width={1920}
                                          height={1080}
                                          sizes="(max-width: 1280px) 100vw, 1280px"
                                          className="w-full h-auto object-contain object-center"
                                    />
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          WHY GENERIC DOESN'T WORK
          ============================================ */}
                  <section className="py-14 md:py-20 bg-white">
                        <div className={container}>
                              <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
                                    <div className="lg:sticky lg:top-24">
                                          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] leading-tight">
                                                Why a Generic GoHighLevel Setup{' '}
                                                <span className="text-[#0E9BF0]">Doesn&apos;t Work for Real Estate</span>
                                          </h2>
                                    </div>
                                    <div className="space-y-4">
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                A generic CRM setup assumes a fairly linear sales process: new lead, contacted, qualified, closed. Real estate doesn&apos;t work that way. A single pipeline can&apos;t cleanly represent both a buyer looking for their first home and a seller deciding whether to list they need different stages, different follow-up content, and often different agents. A generic setup also tends to treat every lead the same regardless of source, when in practice a referral, a Zillow inquiry, and a cold Facebook ad click warrant different urgency and different messaging.
                                          </p>
                                          <p className="text-[0.92rem] sm:text-[0.95rem] text-[#4A5568] leading-relaxed">
                                                The other gap is timeline. Most CRM templates assume a lead either converts within a few weeks or gets marked dead. Real estate regularly produces leads that take six to twelve months to convert, and a system without a dedicated long-horizon nurture track quietly loses those leads to whichever agent or brokerage kept showing up in their inbox. This is why GHL Scale Up builds industry-specific structures rather than a single generic template reused across every client the same underlying platform, configured around how your business actually sells.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          HOW WE BUILD IT PROCESS
          ============================================ */}
                  <section className="py-14 md:py-20 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          How We Build It: Our Process for{' '}
                                          <span className="text-[#0E9BF0]">Real Estate GoHighLevel Systems</span>
                                    </h2>
                                    <p className="text-[0.9rem] text-[#4A5568]">
                                          The process follows the same fixed-price, scoped framework used across every GHL Scale Up build, applied to your specific lead sources, team structure, and sales process.
                                    </p>
                              </div>

                              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
                                    {processSteps.map((step, index) => (
                                          <div
                                                key={index}
                                                className="bg-white border border-[#E8EDF4] rounded-2xl p-5 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300 flex flex-col"
                                          >
                                                <div className="w-10 h-10 rounded-full bg-[#1C2E4A] text-[#F8D000] flex items-center justify-center text-sm font-bold mb-4">
                                                      {step.step}.
                                                </div>
                                                <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-2">{step.title}</h3>
                                                <p className="text-[0.78rem] text-[#4A5568] leading-relaxed flex-1">{step.description}</p>
                                          </div>
                                    ))}
                              </div>

                              <div className="mt-10 max-w-3xl mx-auto text-center">
                                    <p className="text-[0.92rem] text-[#4A5568] leading-relaxed mb-4">
                                          Typical turnaround is <strong className="text-[#1C2E4A]">one to three weeks</strong> depending on how many lead sources and agents are involved.
                                    </p>
                                    <Link
                                          href="/how-we-work"
                                          className="inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.9rem] hover:gap-3 transition-all"
                                    >
                                          Full process detail: How We Work <ChevronRight className="h-4 w-4" />
                                    </Link>
                              </div>
                        </div>
                  </section>



                  {/* ============================================
          FAQS
          ============================================ */}
                  <section className="py-14 md:py-20 bg-white">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          GoHighLevel for Real Estate:{' '}
                                          <span className="text-[#0E9BF0]">Frequently Asked Questions</span>
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
                                                      <p className="text-[0.8rem] sm:text-[0.83rem] text-[#4A5568] leading-relaxed">{faq.answer}</p>
                                                </div>
                                          </details>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          RELATED SERVICES
          ============================================ */}
                  <section className="py-14 md:py-20 bg-[#F4F7FA]">
                        <div className={container}>
                              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                                          Related <span className="text-[#0E9BF0]">Services</span>
                                    </h2>
                              </div>

                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                                    {relatedServices.map((service, index) => (
                                          <Link
                                                key={index}
                                                href={service.link}
                                                className="group bg-white border border-[#E8EDF4] rounded-2xl p-5 md:p-6 hover:border-[#0E9BF0] hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                          >
                                                <div className="flex items-center justify-between gap-3 mb-3">
                                                      <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors">
                                                            {service.title}
                                                      </h3>
                                                      <ChevronRight className="h-4 w-4 text-[#0E9BF0] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                                </div>
                                                <p className="text-[0.8rem] text-[#4A5568] leading-relaxed flex-1">{service.description}</p>
                                          </Link>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* ============================================
          FINAL CTA Book a Free Strategy Call
          ============================================ */}
                  <section className="bg-[#1C2E4A] text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(14,155,240,0.1),transparent)] pointer-events-none" />
                        <div className={`${container} relative z-10 py-16 md:py-24`}>
                              <div className="text-center max-w-3xl mx-auto">
                                    <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                                          <Phone className="h-3 w-3" />
                                          Book a Free Strategy Call
                                    </div>
                                    <h2 className="text-[1.6rem] sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-5">
                                          Let&apos;s Build the System{' '}
                                          <span className="text-[#F8D000]">Your Real Estate Business Actually Needs</span>
                                    </h2>
                                    <p className="text-[0.9rem] sm:text-[0.95rem] font-light text-white/70 mb-8 leading-relaxed">
                                          Fill out the contact form and Aryan personally reviews every inquiry, reaching out within a few hours to schedule a free 30-minute call. We&apos;ll go through your lead sources, team structure, and current setup if you have one, and give you a clear scope, timeline, and price before anything is built.
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