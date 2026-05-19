'use client'

import { useState, useRef, useEffect } from 'react'
import {
      ChevronDown,
      Check,
      FolderOpen,
      Zap,
      Mail,
      MessageSquare,
      BarChart,
      Wrench,
      Users,
      Target,
      Clock,
      Globe,
      Phone,
      Mail as MailIcon,
      Calendar,
      CheckCircle,
      Briefcase,
      Award,
      TrendingUp,
      Star,
      Headphones,
      Shield,
      Rocket,
      Settings,
      Sparkles,
      DollarSign,
      ArrowRight,
      BookOpen,
      UserCog
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import CtaBand from '@/components/sections/CtaBand'
import Link from 'next/link'

// Service Schema Component
const ServiceSchema = () => {
      const schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "GoHighLevel Virtual Assistant Service",
            "alternateName": "GHL Virtual Assistant",
            "description": "Dedicated GoHighLevel virtual assistant who manages your GHL account daily including CRM pipelines, workflow automation, email/SMS campaigns, unified inbox, sub-account setup, and funnel management. Reduce manual workload by 70% with a specialist GHL VA.",
            "provider": {
                  "@type": "LocalBusiness",
                  "name": "GHL Scale Up",
                  "url": "https://www.ghlscaleup.com",
                  "logo": "https://www.ghlscaleup.com/web-app-manifest-192x192.png",
                  "sameAs": [
                        "https://www.linkedin.com/company/ghl-scale-up",
                        "https://x.com/GHLScaleUp"
                  ]
            },
            "serviceType": "Virtual Assistant Services",
            "areaServed": {
                  "@type": "Country",
                  "name": "United States"
            },
            "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "GHL VA Plans",
                  "itemListElement": [
                        {
                              "@type": "Offer",
                              "itemOffered": {
                                    "@type": "Service",
                                    "name": "Starter GHL VA"
                              },
                              "price": "800",
                              "priceCurrency": "USD",
                              "description": "20 hours per month of dedicated GHL VA support"
                        },
                        {
                              "@type": "Offer",
                              "itemOffered": {
                                    "@type": "Service",
                                    "name": "Growth GHL VA"
                              },
                              "price": "1500",
                              "priceCurrency": "USD",
                              "description": "40 hours per month with full GHL management"
                        },
                        {
                              "@type": "Offer",
                              "itemOffered": {
                                    "@type": "Service",
                                    "name": "Full-Time GHL VA"
                              },
                              "price": "2500",
                              "priceCurrency": "USD",
                              "description": "160 hours per month dedicated full-time VA"
                        }
                  ]
            },
            "audience": {
                  "@type": "BusinessAudience",
                  "audienceType": "Marketing Agencies, SaaS Founders, Service Businesses"
            },
            "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free consultation call"
            }
      };

      return (
            <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
      );
};

// FAQ Component
interface FAQItem {
      q: string
      a: string
}

const faqs: FAQItem[] = [
      {
            q: 'What is a GoHighLevel virtual assistant?',
            a: 'A GoHighLevel virtual assistant (GHL VA) is a remote specialist who manages your GoHighLevel account on an ongoing basis. Unlike a general VA, a GHL virtual assistant specialises exclusively in the GoHighLevel platform — building workflows, managing pipelines, running campaigns, handling the unified inbox, and keeping your CRM optimised so you can focus on your business.',
      },
      {
            q: 'What does a GHL VA do day-to-day?',
            a: 'A GHL VA handles daily GoHighLevel tasks including: building and maintaining automation workflows, managing CRM pipelines and opportunity stages, running email and SMS campaigns, responding to leads in the unified inbox, creating and updating funnels and landing pages, monitoring sub-accounts, onboarding new clients, and reporting on pipeline performance.',
      },
      {
            q: 'How much does a GoHighLevel virtual assistant cost?',
            a: 'Our GHL VA plans start at $800/month for 20 hours. A full-time dedicated GHL VA is $2,500/month for 160 hours. Pricing is based on hours required and task complexity. All plans are monthly with no long-term contracts — cancel anytime.',
      },
      {
            q: 'How is a GHL VA different from a general virtual assistant?',
            a: 'A general VA knows a little about many tools. A GHL VA knows GoHighLevel deeply — the workflow builder, pipeline logic, triggers, custom values, conversation AI, sub-account management, and API integrations. The depth of platform knowledge is the difference between someone who can follow instructions and someone who can architect solutions inside GHL independently.',
      },
      {
            q: 'Is a GoHighLevel virtual assistant right for my business?',
            a: 'A GHL VA makes sense if you are already using GoHighLevel and need ongoing management — new workflows, campaign management, inbox handling, pipeline updates, and system optimisation — but do not want to hire a full-time in-house employee. Agencies, SaaS founders, coaches, and service businesses with active GHL accounts benefit most.',
      },
]

function FAQItemComponent({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
      const contentRef = useRef<HTMLDivElement>(null)
      const [height, setHeight] = useState(0)

      useEffect(() => {
            if (isOpen && contentRef.current) {
                  setHeight(contentRef.current.scrollHeight)
            } else {
                  setHeight(0)
            }
      }, [isOpen])

      return (
            <div
                  className={cn(
                        'overflow-hidden rounded-lg border transition-all duration-200',
                        isOpen
                              ? 'border-nurture-blue/30'
                              : 'border-[#E8EDF4] hover:border-nurture-blue/20'
                  )}
            >
                  <button
                        onClick={onToggle}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                        aria-expanded={isOpen}
                  >
                        <h3 className="text-[15px] font-semibold text-space-blue transition-colors hover:text-nurture-blue">
                              {faq.q}
                        </h3>
                        <div
                              className={cn(
                                    'flex h-7 w-7 min-w-7 items-center justify-center rounded-full transition-all duration-200',
                                    isOpen
                                          ? 'bg-nurture-blue text-white'
                                          : 'bg-nurture-blue/10 text-nurture-blue'
                              )}
                        >
                              <ChevronDown
                                    className={cn(
                                          'h-4 w-4 transition-transform duration-200',
                                          isOpen && 'rotate-180'
                                    )}
                              />
                        </div>
                  </button>

                  <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ height: isOpen ? height : 0 }}
                  >
                        <div ref={contentRef}>
                              <div className="border-t border-[#E8EDF4] px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4">
                                    <p className="text-[15px] leading-relaxed text-body">
                                          {faq.a}
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default function GHLVirtualAssistantPage() {
      const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

      // Related blog posts for this service
      const relatedBlogs = [
            {
                  slug: 'where-to-hire-gohighlevel-experts',
                  title: 'Where to Hire GoHighLevel Experts in 2026: 6 Best Places',
                  excerpt: 'Looking for a GoHighLevel expert? Here are the 6 best places to find GHL professionals with a vetting checklist and red flags to avoid.',
                  readTime: '21 min read',
                  date: 'May 11, 2026'
            },
            {
                  slug: 'best-ghl-expert-agency',
                  title: 'Best GHL Expert Agency to Hire in 2026 (Honest Comparison)',
                  excerpt: 'Looking for the best GoHighLevel expert agency to hire? We compared the top GHL agencies in 2026 covering specialisations and pricing.',
                  readTime: '20 min read',
                  date: 'May 9, 2026'
            },
            {
                  slug: 'how-to-set-up-gohighlevel-workflow-automation',
                  title: 'How to Set Up GoHighLevel Workflow Automation for Beginners',
                  excerpt: 'A step-by-step beginner\'s guide to GoHighLevel workflow automation. Learn what workflows are and how triggers and actions work.',
                  readTime: '19 min read',
                  date: 'May 6, 2026'
            }
      ];

      const dailyTasks = [
            { icon: FolderOpen, title: 'CRM Pipeline & Opportunity Management', desc: 'Daily pipeline reviews, moving opportunities through stages, tagging contacts, updating deal values, and ensuring no lead falls through the cracks inside GoHighLevel.' },
            { icon: Zap, title: 'GoHighLevel Workflow Automation Builds', desc: 'Building new automation workflows, maintaining existing ones, fixing broken triggers, and optimising sequence logic — all independently inside your GHL account.' },
            { icon: Mail, title: 'Email, SMS & WhatsApp Campaign Management', desc: 'Creating, scheduling, and monitoring campaigns. Tracking open rates and click rates. Rebuilding sequences that are underperforming.' },
            { icon: MessageSquare, title: 'Unified Inbox & Lead Response Management', desc: 'Responding to inbound leads across SMS, email, and chat. Qualifying leads and moving them into the correct pipeline stages.' },
            { icon: Users, title: 'Sub-Account Setup & Client Onboarding', desc: 'Deploying snapshots to new sub-accounts, configuring client-specific pipelines, and onboarding new agency clients into GoHighLevel.' },
            { icon: Target, title: 'GHL Funnel & Landing Page Updates', desc: 'Creating new landing pages, updating existing funnels, running A/B tests, and keeping all forms connected to your CRM pipelines.' },
      ]

      const plans = [
            {
                  tier: 'Starter GHL VA',
                  price: '800',
                  note: '20 hours per month · Best for solo operators',
                  features: [
                        '20 hours/month inside your GHL account',
                        'Pipeline & CRM management',
                        'Workflow builds and fixes',
                        'Email, SMS, WhatsApp campaigns',
                        'Slack / WhatsApp communication',
                        'Weekly progress report',
                  ],
                  featured: false,
                  ctaText: 'Get Started →',
            },
            {
                  tier: 'Growth GHL VA',
                  price: '1,500',
                  note: '40 hours per month · Best for growing agencies',
                  badge: 'Most Popular',
                  features: [
                        '40 hours/month dedicated GHL VA',
                        'Full pipeline & CRM management',
                        'Unlimited workflow builds and fixes',
                        'Unified inbox lead responses',
                        'Sub-account & client onboarding',
                        'Funnel & landing page updates',
                        'Weekly calls + daily async updates',
                  ],
                  featured: true,
                  ctaText: 'Book a Free Call →',
            },
            {
                  tier: 'Full-Time GHL VA',
                  price: '2,500',
                  note: 'Full-time dedicated · Best for agencies scaling fast',
                  features: [
                        '160 hours/month (full-time VA)',
                        'Dedicated project manager assigned',
                        'All Growth plan features included',
                        'Priority same-day task turnaround',
                        'Custom automation development',
                        'Multi-account GoHighLevel management',
                  ],
                  featured: false,
                  ctaText: 'Get Started →',
            },
      ]

      const taskListItems = [
            { icon: Briefcase, text: 'Pipeline & opportunity management' },
            { icon: Zap, text: 'Workflow automation builds & fixes' },
            { icon: Mail, text: 'Email & SMS campaign management' },
            { icon: MessageSquare, text: 'Unified inbox lead responses' },
            { icon: BarChart, text: 'Pipeline reporting & tracking' },
            { icon: Target, text: 'Funnel updates & new builds' },
            { icon: Users, text: 'Sub-account & client onboarding' },
      ]

      const whyUsFeatures = [
            { stat: '200+', label: 'Real GoHighLevel Project Experience', desc: 'Every GHL VA on our team has worked on real, complex GoHighLevel builds — not just followed tutorial videos. They know what breaks at scale and how to fix it before it becomes a problem.' },
            { stat: 'GHL Only', label: 'GoHighLevel Is All We Do', desc: 'We are not a general marketing agency that also does GHL. GoHighLevel is our entire focus. That depth of specialisation means your VA builds better, faster, and without making the mistakes generalists make.' },
            { stat: 'Same Day', label: 'Async-First, Fast Response', desc: 'All task requests are acknowledged within a few hours and completed within the same business day for standard tasks. You always know where your GHL account stands — daily updates via Slack or WhatsApp.' },
            { stat: '6 Countries', label: 'International GHL Experience', desc: 'We have managed GoHighLevel accounts for agencies and businesses across the US, UK, UAE, Australia, Singapore, and India. We understand how different markets use GHL differently.' },
      ]

      return (
            <>
                  {/* Add Service Schema to Head */}
                  <ServiceSchema />

                  {/* Hero Section */}
                  <section className="relative overflow-hidden bg-space-blue pt-32 pb-20 lg:pt-[100px] lg:pb-22">
                        {/* Background Pattern */}
                        <div
                              className="pointer-events-none absolute inset-0"
                              style={{
                                    backgroundImage: `radial-gradient(rgba(14, 155, 240, 0.08) 1px, transparent 1px)`,
                                    backgroundSize: '36px 36px',
                              }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-capture-yellow" />

                        <div className="relative z-10 mx-auto max-w-7xl px-6">
                              <div className="grid items-center gap-16 lg:grid-cols-[1fr_400px] lg:gap-16">
                                    {/* Left Content */}
                                    <div>
                                          <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-capture-yellow/12 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-capture-yellow">
                                                <Sparkles className="h-3 w-3" />
                                                GHL Virtual Assistant Service
                                          </span>
                                          <h1 className="mb-5 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
                                                Hire a GoHighLevel Virtual Assistant
                                                <span className="mt-2 block text-capture-yellow">Who Lives Inside Your GHL Account.</span>
                                          </h1>
                                          <p className="mb-9 max-w-md text-[17px] leading-relaxed text-white/72">
                                                Stop spending your time inside GoHighLevel doing tasks that should run automatically. Our <strong className="text-white">dedicated GHL VA</strong> manages your pipelines, workflows, campaigns, and inbox — so you focus on closing deals, not managing software.
                                          </p>
                                          <div className="mb-9 flex flex-wrap gap-3.5">
                                                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                                                      Schedule a Call →
                                                </Link>
                                                <Button size="lg" asChild className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                                                      <a href="#tasks">See What a GHL VA Does</a>
                                                </Button>
                                          </div>
                                          <p className="text-[13px] text-white/45">
                                                ✦ 200+ GoHighLevel projects delivered · Serving agencies in 6 countries
                                          </p>
                                    </div>

                                    {/* Right Card */}
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-[34px] backdrop-blur-sm">
                                          <div className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-capture-yellow">
                                                <Settings className="h-3.5 w-3.5" />
                                                What Your GHL Virtual Assistant Manages Daily
                                          </div>
                                          <div className="flex flex-col gap-3">
                                                {taskListItems.map((item, idx) => (
                                                      <div key={idx} className="flex items-center gap-3">
                                                            <div className="flex h-8 w-8 min-w-8 items-center justify-center rounded-lg bg-nurture-blue/15">
                                                                  <item.icon className="h-4 w-4 text-nurture-blue" />
                                                            </div>
                                                            <span className="text-sm text-white/80">{item.text}</span>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* What is GHL VA Section */}
                  <section className="bg-white py-20 md:py-22">
                        <div className="mx-auto max-w-7xl px-6">
                              <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
                                    {/* Left Content */}
                                    <div>
                                          <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
                                                <Star className="h-3 w-3" />
                                                GHL VA Service
                                          </span>
                                          <h2 className="mb-3.5 text-[clamp(24px,2.8vw,36px)] font-extrabold leading-[1.22] tracking-[-0.02em] text-space-blue">
                                                What is a <span className="text-nurture-blue">GoHighLevel Virtual Assistant</span> and What Do They Do?
                                          </h2>
                                          <p className="mb-3 text-base leading-relaxed text-body">
                                                A GoHighLevel virtual assistant is not a general VA who has used GHL once. A GHL VA is a remote specialist whose entire skill set is built around the GoHighLevel platform — workflows, pipelines, conversation AI, campaigns, and sub-account management.
                                          </p>
                                          <p className="mb-5 text-base leading-relaxed text-body">
                                                The difference is depth. A general VA follows instructions. A GHL virtual assistant identifies what is broken in your system, builds the fix, tests it, and has it live before your morning standup.
                                          </p>
                                          <div className="flex flex-col gap-2.5">
                                                {[
                                                      'Builds and maintains GoHighLevel automation workflows independently',
                                                      'Manages CRM pipelines, stages, and lead movement daily',
                                                      'Runs and monitors email, SMS, and WhatsApp campaigns',
                                                      'Handles lead responses in the unified inbox on your behalf',
                                                      'Onboards new sub-accounts and deploys snapshots for your clients',
                                                      'Monitors and troubleshoots broken triggers and failing workflows',
                                                ].map((item, idx) => (
                                                      <div key={idx} className="flex items-start gap-2.5">
                                                            <div className="mt-0.5 flex h-5.5 w-5.5 min-w-5.5 items-center justify-center rounded-full bg-green-100 text-close-green">
                                                                  <Check className="h-3 w-3" />
                                                            </div>
                                                            <span className="text-[15px] text-space-blue">{item}</span>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Right Stats Cards */}
                                    <div className="grid grid-cols-2 gap-4">
                                          <div className="rounded-xl border border-[#E8EDF4] bg-white p-6 shadow-sm">
                                                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-nurture-blue">70%</div>
                                                <div className="flex items-start gap-1.5 text-[13px] font-medium text-muted">
                                                      <TrendingUp className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                                                      <span>Average manual workload reduction after dedicated GHL VA</span>
                                                </div>
                                          </div>
                                          <div className="rounded-xl bg-space-blue p-6">
                                                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-capture-yellow">24/7</div>
                                                <div className="flex items-start gap-1.5 text-[13px] font-medium text-white/55">
                                                      <Clock className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                                                      <span>GHL account monitoring and inbox management coverage</span>
                                                </div>
                                          </div>
                                          <div className="rounded-xl bg-space-blue p-6">
                                                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-capture-yellow">200+</div>
                                                <div className="flex items-start gap-1.5 text-[13px] font-medium text-white/55">
                                                      <Award className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                                                      <span>GoHighLevel projects delivered by our expert team</span>
                                                </div>
                                          </div>
                                          <div className="rounded-xl border border-[#E8EDF4] bg-white p-6 shadow-sm">
                                                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-nurture-blue">6</div>
                                                <div className="flex items-start gap-1.5 text-[13px] font-medium text-muted">
                                                      <Globe className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                                                      <span>Countries served — US, UK, UAE, AU, SG, IN</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Daily Tasks Section */}
                  <section id="tasks" className="bg-off-white py-20 md:py-22">
                        <div className="mx-auto max-w-7xl px-6">
                              <div className="mx-auto mb-14 max-w-2xl text-center">
                                    <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
                                          <Rocket className="h-3 w-3" />
                                          Daily GHL VA Tasks
                                    </span>
                                    <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
                                          What Your GHL Virtual Assistant Handles Every Day
                                    </h2>
                                    <p className="text-base leading-relaxed text-body">
                                          A dedicated GHL VA takes these tasks entirely off your plate — no briefing required, no micromanaging.
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                    {dailyTasks.map((task, idx) => {
                                          const Icon = task.icon
                                          return (
                                                <article
                                                      key={idx}
                                                      className="group relative overflow-hidden rounded-lg border border-[#E8EDF4] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-nurture-blue/20 hover:shadow-lg"
                                                >
                                                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-nurture-blue to-capture-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                                      <div className="mb-3.5">
                                                            <Icon className="h-7 w-7 text-nurture-blue" />
                                                      </div>
                                                      <h3 className="mb-2 text-base font-bold text-space-blue">{task.title}</h3>
                                                      <p className="text-sm leading-relaxed text-body">{task.desc}</p>
                                                </article>
                                          )
                                    })}
                              </div>
                        </div>
                  </section>

                  {/* Pricing Section */}
                  <section id="pricing" className="bg-white py-20 md:py-22">
                        <div className="mx-auto max-w-7xl px-6">
                              <div className="mx-auto mb-14 max-w-2xl text-center">
                                    <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
                                          <DollarSign className="h-3 w-3" />
                                          GHL VA Pricing
                                    </span>
                                    <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
                                          GoHighLevel Virtual Assistant Plans & Pricing
                                    </h2>
                                    <p className="text-base leading-relaxed text-body">
                                          Transparent monthly plans. No hidden fees. Cancel anytime. Every plan includes a dedicated GHL VA assigned to your account.
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 gap-6 items-start md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                                    {plans.map((plan, idx) => (
                                          <div
                                                key={idx}
                                                className={`relative rounded-xl border-[1.5px] transition-all duration-300 ${plan.featured
                                                      ? 'border-capture-yellow bg-space-blue md:scale-[1.02]'
                                                      : 'border-[#E8EDF4] bg-white hover:shadow-md'
                                                      }`}
                                          >
                                                {plan.badge && (
                                                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-capture-yellow px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.06em] text-space-blue whitespace-nowrap">
                                                            {plan.badge}
                                                      </div>
                                                )}
                                                <div className="p-8">
                                                      <div className={`mb-2 text-xs font-bold uppercase tracking-[0.06em] ${plan.featured ? 'text-white/50' : 'text-muted'
                                                            }`}>
                                                            {plan.tier}
                                                      </div>
                                                      <div className={`mb-1 text-[42px] font-extrabold leading-none ${plan.featured ? 'text-white' : 'text-space-blue'
                                                            }`}>
                                                            ${plan.price} <span className="text-base font-normal text-muted">/mo</span>
                                                      </div>
                                                      <div className={`mb-5 text-sm ${plan.featured ? 'text-white/60' : 'text-muted'
                                                            }`}>
                                                            {plan.note}
                                                      </div>
                                                      <div className={`mb-5 h-px ${plan.featured ? 'bg-white/10' : 'bg-[#E8EDF4]'
                                                            }`} />
                                                      <div className="mb-6 flex flex-col gap-2.5">
                                                            {plan.features.map((feature, fidx) => (
                                                                  <div key={fidx} className="flex items-start gap-2">
                                                                        <CheckCircle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.featured ? 'text-capture-yellow' : 'text-green-500'}`} />
                                                                        <span className={`text-sm ${plan.featured ? 'text-white/85' : 'text-space-blue'
                                                                              }`}>
                                                                              {feature}
                                                                        </span>
                                                                  </div>
                                                            ))}
                                                      </div>
                                                      <Button
                                                            variant={plan.featured ? 'secondary' : 'ghost'}
                                                            className="w-full justify-center"
                                                            asChild
                                                      >
                                                            <a href="#contact">{plan.ctaText}</a>
                                                      </Button>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* Why Us Section */}
                  <section className="bg-space-blue py-20 md:py-22">
                        <div className="mx-auto max-w-7xl px-6">
                              <div className="mx-auto mb-14 max-w-2xl text-center">
                                    <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-capture-yellow/12 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-capture-yellow">
                                          <Shield className="h-3 w-3" />
                                          Why Choose Us
                                    </span>
                                    <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
                                          Why Hire Our GoHighLevel Virtual Assistant Over Anyone Else?
                                    </h2>
                                    <p className="text-base leading-relaxed text-white/60">
                                          There are plenty of general VAs who list "GoHighLevel" as a skill. Here is what makes our GHL VA service different.
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    {whyUsFeatures.map((feature, idx) => (
                                          <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:bg-white/10 hover:border-capture-yellow/25 hover:-translate-y-1">
                                                <div className="mb-2 text-4xl font-extrabold text-capture-yellow">{feature.stat}</div>
                                                <h3 className="mb-2 text-base font-bold text-white">{feature.label}</h3>
                                                <p className="text-sm leading-relaxed text-white/55">{feature.desc}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* Related Blog Posts Section */}
                  <section className="py-16 md:py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-6">
                              <div className="text-center max-w-2xl mx-auto mb-10">
                                    <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-nurture-blue mb-3 justify-center">
                                          <span className="w-[22px] h-[2px] bg-nurture-blue rounded"></span>
                                          Free Resources
                                    </div>
                                    <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-space-blue">
                                          Read Our<br />
                                          <span className="text-nurture-blue">GHL Hiring Guides</span>
                                    </h2>
                                    <p className="text-[0.9rem] font-light text-body leading-relaxed max-w-[580px] mx-auto">
                                          Learn more about hiring GHL experts and managing your GoHighLevel account with these in-depth articles.
                                    </p>
                              </div>

                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {relatedBlogs.map((blog, index) => (
                                          <Link
                                                key={index}
                                                href={`/blog/${blog.slug}`}
                                                className="group bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-nurture-blue transition-all"
                                          >
                                                <div className="flex flex-col">
                                                      <div className="flex items-center gap-2 text-[0.65rem] text-muted mb-2">
                                                            <span className="text-nurture-blue font-semibold">GHL Hiring</span>
                                                            <span>•</span>
                                                            <div className="flex items-center gap-1">
                                                                  <Clock className="w-3 h-3" />
                                                                  <span>{blog.readTime}</span>
                                                            </div>
                                                      </div>
                                                      <h3 className="text-[0.95rem] font-bold text-space-blue group-hover:text-nurture-blue transition-colors mb-2 line-clamp-2">
                                                            {blog.title}
                                                      </h3>
                                                      <p className="text-[0.75rem] text-body leading-relaxed mb-3 line-clamp-2">
                                                            {blog.excerpt}
                                                      </p>
                                                      <div className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-nurture-blue group-hover:gap-2 transition-all mt-auto">
                                                            Read Full Guide <ArrowRight className="w-3 h-3" />
                                                      </div>
                                                </div>
                                          </Link>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* FAQ Section */}
                  <section id="faq" className="bg-off-white py-20 md:py-22">
                        <div className="mx-auto max-w-7xl px-6">
                              <div className="mx-auto mb-14 max-w-2xl text-center">
                                    <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
                                          <Headphones className="h-3 w-3" />
                                          FAQ
                                    </span>
                                    <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
                                          GoHighLevel Virtual Assistant — Frequently Asked Questions
                                    </h2>
                                    <p className="text-base leading-relaxed text-body">
                                          Everything you need to know before hiring a GHL VA for your business or agency.
                                    </p>
                              </div>

                              <div className="mx-auto max-w-3xl">
                                    <div className="flex flex-col gap-2.5">
                                          {faqs.map((faq, idx) => (
                                                <FAQItemComponent
                                                      key={idx}
                                                      faq={faq}
                                                      isOpen={openFaqIndex === idx}
                                                      onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                                />
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* CTA Section */}
                  <CtaBand
                        title='Stop Spending Your Time Inside GHL.<br /><span class="hl-yellow">Let a GHL VA Handle It.</span>'
                        description="Get back hours every week by delegating your GoHighLevel tasks to a dedicated GHL virtual assistant. Book a free call to find the right VA plan for your business."
                        primaryText="Book Your Free Consultation →"
                        primaryHref="/contact"
                  />
            </>
      )
}