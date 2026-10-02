// app/services/hire-gohighlevel-experts/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
  Award, Users, Wrench, Settings, Workflow, Bot, FileText, Link as LinkIcon,
  RefreshCw, Layers, GraduationCap, ChevronRight, Home, Building2, Briefcase,
  Target, Zap, MessageSquare, BarChart3, Phone, Star, Shield, Clock, Globe,
  TrendingUp, CheckCircle, Sparkles, UserCheck, Rocket, Search, TestTube,
  ArrowRight, Plus, Minus, RotateCcw, AlertTriangle, Database, Server, Cpu,
  Lock, Mail, Smartphone, Calendar, BarChart, Puzzle, Upload, CircleCheck,
  CircleX, CircleDot, Gauge, Users2, Briefcase as BriefcaseIcon,
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CaseStudies from '@/components/ghlscalup/CaseStudies';
import Testimonials from '@/components/ghlscalup/Testimonials';
import Reveal from '@/components/ghlscalup/Reveal';
import { getCaseStudies } from '@/lib/caseStudiesData';
import { getAllTestimonialsForHomepage } from '@/lib/sanity';

export const metadata = {
  title: 'Hire GoHighLevel Experts | CRM, Automation & AI Implementation | GHL Scale Up',
  description:
    'Hire GoHighLevel experts to build, fix, automate and scale your system. CRM architecture, workflow automation, AI, integrations, migrations and SaaS 200+ projects delivered.',
  keywords:
    'hire GoHighLevel experts, GoHighLevel expert, GoHighLevel experts, hire GoHighLevel expert, GoHighLevel expert services, GoHighLevel agency, hire GoHighLevel agency, GHL expert, GHL consultant, best GoHighLevel expert, best GoHighLevel agency',
  alternates: { canonical: '/services/hire-gohighlevel-experts' },
  openGraph: {
    title: 'Hire GoHighLevel Experts | CRM, Automation & AI Implementation | GHL Scale Up',
    description:
      'Hire GoHighLevel experts to build, fix, automate and scale your system. CRM architecture, workflow automation, AI, integrations, migrations and SaaS.',
    url: 'https://www.ghlscaleup.com/services/hire-gohighlevel-experts',
    siteName: 'GHL Scale Up',
    type: 'website',
    images: [
      {
        url: 'https://www.ghlscaleup.com/images/services/hire-gohighlevel-experts-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Hire GoHighLevel Experts | CRM, Automation & AI Implementation',
    description:
      'CRM architecture, workflow automation, AI, integrations, migrations and SaaS 200+ projects delivered.',
    images: ['https://www.ghlscaleup.com/images/services/hire-gohighlevel-experts-og.jpg'],
  },
};

export default async function HireExpertsPage() {
  // ============================================
  // FETCH CASE STUDIES & TESTIMONIALS
  // ============================================
  const caseStudies = getCaseStudies();

  let testimonials: any[] = [];
  try {
    testimonials = await getAllTestimonialsForHomepage();
  } catch (error) {
    console.error('Failed to load testimonials:', error);
  }

  // ============================================
  // DATA
  // ============================================

  const problems = [
    {
      icon: Clock,
      status: 'blue',
      title: 'Starting From Zero',
      description:
        "The account exists. The architecture pipelines, tagging, automation logic doesn't yet.",
    },
    {
      icon: Layers,
      status: 'amber',
      title: 'Half-Built System',
      description:
        "A previous freelancer configured pieces, but the pipelines, tags and workflows don't hang together.",
    },
    {
      icon: Users,
      status: 'amber',
      title: 'Manual Operations',
      description:
        'Leads, follow-up and appointment updates are still handled by someone checking a dashboard every morning.',
    },
    {
      icon: AlertTriangle,
      status: 'red',
      title: 'Broken Automation',
      description:
        'Workflows exist but fire in the wrong order, send duplicate messages, or silently stop working.',
    },
    {
      icon: TrendingUp,
      status: 'blue',
      title: 'Ready to Scale',
      description:
        'Basic GHL is running, but the business needs AI, deeper automation, integrations, or a SaaS layer on top.',
    },
    {
      icon: FileText,
      status: 'red',
      title: 'No Documentation',
      description:
        'The person who built it moved on, and no one else can safely touch the system without risking it breaking.',
    },
  ];

  const capabilities = [
    {
      icon: Database,
      title: 'CRM Architecture',
      items: ['Pipelines & stages', 'Custom fields & tags', 'Lead routing', 'Lifecycle structure'],
      link: '/services/crm-setup',
      linkLabel: 'See CRM setup & configuration',
      core: true,
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      items: [
        'Lead capture & qualification',
        'Follow-up sequences',
        'Appointment workflows',
        'Pipeline automation',
      ],
      link: '/services/workflow-automation',
      linkLabel: 'See workflow automation',
      core: true,
    },
    {
      icon: Globe,
      title: 'Funnels & Websites',
      items: ['Landing pages & forms', 'Booking flows', 'Conversion paths'],
      link: '/services/funnel-development',
      linkLabel: 'See funnel development',
    },
    {
      icon: Bot,
      title: 'AI Systems',
      items: ['AI voice receptionist', 'Conversation AI / chat', 'Lead qualification'],
      link: '/services/ai-voice-agent',
      linkLabel: 'See AI voice agent',
    },
    {
      icon: Puzzle,
      title: 'Integrations',
      items: ['APIs & webhooks', 'Third-party tools', 'Data synchronization'],
      link: '/services/integrations',
      linkLabel: 'See integrations & API dev',
    },
    {
      icon: RefreshCw,
      title: 'Migration',
      items: ['Data mapping', 'Pipeline & workflow rebuild', 'QA before launch'],
      link: '/services/migration',
      linkLabel: 'See GoHighLevel migration',
    },
  ];

  const fitCards = [
    {
      icon: Plus,
      title: 'Build from scratch',
      description: 'New GHL account → CRM, automation and funnels built around how you sell.',
      link: '#capabilities',
    },
    {
      icon: RotateCcw,
      title: 'Fix an existing account',
      description: "Audit → cleanup → rebuild → documentation, without losing what's already there.",
      link: '#rebuild',
    },
    {
      icon: Settings,
      title: 'Add a specific system',
      description: 'AI, automation, integrations or funnels layered onto GHL you already run.',
      link: '#capabilities',
    },
    {
      icon: Upload,
      title: 'Move to GoHighLevel',
      description: 'Migration → data mapping → workflow rebuild → staged cutover.',
      link: '/services/migration',
    },
    {
      icon: Layers,
      title: 'Scale GHL into SaaS',
      description: 'Snapshots → SaaS Mode → billing → client provisioning.',
      link: '/services/saas-setup',
    },
    {
      icon: Search,
      title: 'Not sure yet',
      description: "Tell us what's going on and we'll help you figure out the right starting point.",
      link: '/contact',
    },
  ];

  const comparisonData = [
    { label: 'Scope', freelancer: 'One defined task', ghlscaleup: 'A connected system, planned end to end' },
    { label: 'Team', freelancer: 'One individual', ghlscaleup: 'Multiple capabilities working together' },
    { label: 'Architecture', freelancer: 'Client-managed', ghlscaleup: 'Planned before anything is built' },
    { label: 'Documentation', freelancer: 'Varies by engagement', ghlscaleup: 'Documented handover, every project' },
    { label: 'QA', freelancer: 'Varies by engagement', ghlscaleup: 'Structured testing process' },
    { label: 'After delivery', freelancer: 'Typically one-off', ghlscaleup: 'Optional ongoing support' },
  ];

  const whyUsItems = [
    {
      icon: Award,
      title: 'GHL-Only Specialization',
      description:
        "GoHighLevel is the platform our team works in every day, so implementation decisions are made around the platform's actual capabilities and constraints.",
    },
    {
      icon: Target,
      title: '200+ Projects Delivered',
      description:
        'Across real estate, healthcare, SaaS, marketing agencies and home services, in 6 countries.',
    },
    {
      icon: Layers,
      title: 'Full Implementation Depth',
      description:
        'CRM through automation, funnels, AI, integrations, migration and SaaS not just one slice of the platform.',
    },
    {
      icon: TrendingUp,
      title: 'Structured Delivery',
      description:
        'Discover, design, build, test, train a documented scope and price before anything is built.',
    },
    {
      icon: FileText,
      title: 'Documented Handover',
      description:
        'Written SOPs and recorded walkthroughs, so the system survives past the person who built it.',
    },
    {
      icon: Users,
      title: 'Same-Team Accountability',
      description:
        'The same small team from the first call through handover not passed between account managers.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discover',
      description:
        'A discovery call to go through your business model, current tools, pain points and goals and an audit of what already exists, if you have a GHL account.',
    },
    {
      num: '02',
      title: 'Design',
      description:
        'Pipeline stages, automation logic, funnel structure and integration mapping planned and documented before anything is built.',
    },
    {
      num: '03',
      title: 'Build',
      description:
        'CRM, workflows, pages, calendars and AI agents implemented inside GoHighLevel, along with any third-party connections the project needs.',
    },
    {
      num: '04',
      title: 'Test & Refine',
      description:
        'Every automation path, form and integration tested in a controlled environment with realistic scenarios and edge cases before the system goes near your real leads.',
    },
    {
      num: '05',
      title: 'Train & Scale',
      description:
        'Live training, written SOPs and recorded walkthroughs for your team, with monthly support available afterward if you want it.',
    },
  ];

  const deliverables = [
    'CRM architecture & pipelines',
    'Custom fields & tags',
    'Workflows & automations',
    'Forms & funnels',
    'Calendar & booking setup',
    'Integrations (APIs / webhooks)',
    'AI voice / chat configuration',
    'Migration work, if applicable',
    'Written SOPs & documentation',
    'Recorded training walkthroughs',
    'Live team training',
    'Pre-launch QA and testing',
  ];

  const proofCaseStudies = [
    {
      tag: 'SaaS · Automation',
      title: 'Parent SaaS System for Multi-Brand CRM Automation',
      problem: 'Multiple business verticals running as disconnected systems.',
      built: 'One GoHighLevel SaaS structure unifying every vertical, with AI-driven automation.',
      result: 'Lead response time cut to under a minute.',
      link: '/case-studies/gohighlevel-parent-saas-multi-crm-automation-energy-platform',
    },
    {
      tag: 'Rebuild · AI Voice',
      title: 'Real Estate Agent: Complete GHL Rebuild & AI Voice System',
      problem:
        'Email deliverability failing silently, incomplete A2P registration, and a broken booking calendar.',
      built:
        'Deliverability fixed at the root, a rebuilt funnel and calendar, and a three-agent AI voice system for inbound, outbound and database reactivation.',
      result:
        '7,105 attempted calls and 5,471 connected in a 17-day live dashboard window, at 97% positive sentiment.',
      link: '/case-studies/real-estate-agent-rebuild',
    },
    {
      tag: 'Automation · AI',
      title: 'Marketing Agency: AI Automation, 70% Less Manual Work',
      problem: 'Disconnected tools and manual workflows.',
      built: 'A complete GoHighLevel system with AI-powered lead handling.',
      result: 'Manual workload reduced by 70%.',
      link: '/case-studies/gohighlevel-ai-automation-customer-management-marketing-agency',
    },
    {
      tag: 'SaaS · Multi-Location',
      title: 'Multi-Location Real Estate Sub-Account System',
      problem: 'A patchwork of spreadsheets and inboxes across locations.',
      built: 'A structured, location-aware GoHighLevel system with property websites.',
      result: 'One consistent system across every location.',
      link: '/case-studies/gohighlevel-multi-location-automation-property-website-real-estate',
    },
  ];

  const industries = [
    { icon: Home, label: 'Real Estate' },
    { icon: Target, label: 'Marketing Agencies' },
    { icon: Layers, label: 'SaaS' },
    { icon: Building2, label: 'Home Services' },
    { icon: Shield, label: 'Healthcare & Wellness' },
    { icon: Zap, label: 'Energy & Utilities' },
    { icon: Globe, label: 'Media & Affiliate' },
  ];

  const faqs = [
    {
      question: 'What does a GoHighLevel expert do?',
      answer:
        'Designs and builds the CRM architecture, automation, funnels, integrations and any AI or SaaS features your GoHighLevel account needs then tests, documents and hands it over so your team can run it.',
    },
    {
      question: 'How do I hire a GoHighLevel expert?',
      answer:
        "Book a free strategy call and tell us what you're trying to build or fix. We review your current setup (if you have one), scope the project, and send a fixed price and timeline before any work starts there's no separate application process.",
    },
    {
      question: 'When should I hire a GoHighLevel expert?',
      answer:
        'When the system affects revenue, spans multiple workflows, involves a migration, integration or AI feature, or the existing account is broken or undocumented. See the section above for the full list.',
    },
    {
      question: 'How much does it cost to hire a GoHighLevel expert?',
      answer:
        'Pricing depends on the scope of the system, the condition of any existing account, and the work required CRM alone costs less than CRM plus automation plus AI or SaaS. We quote a fixed price after a discovery call, not an hourly rate, so you know the total before anything starts.',
    },
    {
      question: 'How long does a GoHighLevel implementation take?',
      answer:
        'Typically one to three weeks depending on scope, with weekly progress updates along the way. Migrations and larger multi-system builds can run longer you get a specific estimate during the discovery call.',
    },
    {
      question: 'Can you fix an existing GoHighLevel account?',
      answer:
        "Yes this is one of the most common reasons businesses come to us. We audit what exists first, so you don't lose contact history or data already in the account.",
    },
    {
      question: 'Can you migrate my existing CRM to GoHighLevel?',
      answer:
        "Yes. If you're coming from HubSpot, ClickFunnels, ActiveCampaign, Kajabi or another platform, that's run as a distinct project contact and field mapping, pipeline reconstruction, workflow recreation planned alongside your existing system with a staged cutover designed to minimize disruption. See GoHighLevel migration for the full process.",
    },
    {
      question: 'Can you build AI voice or chat systems in GoHighLevel?',
      answer:
        'Yes a 24/7 AI voice receptionist for calls and missed-call text-back, and AI chatbots for lead qualification and booking.',
    },
    {
      question: 'Can you build GoHighLevel SaaS systems?',
      answer:
        "Yes SaaS Mode configuration, Stripe billing, pricing tiers and a master snapshot for onboarding new clients, if you're reselling GoHighLevel as your own branded software.",
    },
    {
      question: 'Do you work with agencies?',
      answer:
        "Yes. Agencies come to us for GHL infrastructure, client delivery systems, and SaaS or white-label builds they don't have the technical bandwidth for in-house.",
    },
    {
      question: 'Will my team be trained after implementation?',
      answer:
        "Yes. Every project includes live training, written SOPs and recorded walkthroughs, so day-to-day use doesn't require calling us for a basic change.",
    },
    {
      question: 'Do you provide ongoing GoHighLevel support?',
      answer:
        "Monthly support plans are available if you want ongoing optimization after launch, though they aren't required to run what we build.",
    },
    {
      question: 'Do I need to already have a GoHighLevel subscription?',
      answer:
        "No. If you don't have an account yet, we advise on which plan fits your situation during the discovery call and build inside it once it's set up.",
    },
  ];

  const whyUsTestimonials = [
    {
      quote:
        'GHL Scale Up handled our SaaS setup and managed the entire GoHighLevel system end to end. Solid execution and great support throughout.',
      author: 'Elia',
      company: 'RiverEnergia',
    },
    {
      quote:
        'Aryan and his team helped us set up our website and a complete onboarding funnel for our clients. Everything was structured well and executed seamlessly.',
      author: 'Shanna',
      company: 'Therapy SEO',
    },
    {
      quote:
        "Amazing work with Aryan and the GHL Scale Up team. They set up our voice agent smoothly and it's working exactly as expected. Super reliable and easy to work with.",
      author: 'Steven',
      company: '1 AI Secretary',
    },
  ];

  // ============================================
  // SCHEMA
  // ============================================
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hire GoHighLevel Experts',
    description:
      'GoHighLevel expert implementation services: CRM setup, workflow automation, AI, integrations, migration and SaaS, delivered by a dedicated GoHighLevel specialist team.',
    provider: { '@type': 'Organization', name: 'GHL Scale Up', url: 'https://www.ghlscaleup.com' },
    areaServed: 'Worldwide',
    serviceType: 'GoHighLevel Implementation',
    url: 'https://www.ghlscaleup.com/services/hire-gohighlevel-experts',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ghlscaleup.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.ghlscaleup.com/services' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Hire GoHighLevel Experts',
        item: 'https://www.ghlscaleup.com/services/hire-gohighlevel-experts',
      },
    ],
  };

  const container = 'max-w-[1180px] mx-auto px-5 sm:px-7 md:px-8';

  return (
    <>
      {/* Global reveal animation styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .reveal {
              opacity: 0;
              transform: translateY(16px);
              transition: opacity 0.6s cubic-bezier(.22,.61,.36,1), transform 0.6s cubic-bezier(.22,.61,.36,1);
              will-change: opacity, transform;
            }
            .reveal.reveal-in {
              opacity: 1;
              transform: translateY(0);
            }
            @media (prefers-reduced-motion: reduce) {
              .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
            }
            .hover-lift { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
            .hover-lift:hover { transform: translateY(-4px); }
            @keyframes floatY {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            .float-y { animation: floatY 4s ease-in-out infinite; }
            @keyframes pulseDot {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.35; }
            }
            .pulse-dot { animation: pulseDot 2.4s ease-in-out infinite; }
            details > summary { list-style: none; }
            details > summary::-webkit-details-marker { display: none; }
          `,
        }}
      />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[{ label: 'Services', href: '/services' }, { label: 'Hire GoHighLevel Experts' }]}
      />

      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1C2E4A] to-[#182742] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.9), transparent 75%)',
            WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.9), transparent 75%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(14,155,240,0.22),transparent_55%)]" />

        <div className={`${container} relative z-10`}>
          <div className="grid items-center gap-10 pb-16 pt-14 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-16 lg:pt-20">
            <Reveal>
              <span className="mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#F8D000]">
                GoHighLevel Expert Services
              </span>
              <h1 className="text-[clamp(30px,6vw,54px)] font-extrabold leading-[1.1] tracking-[-0.03em]">
                Hire GoHighLevel Experts to Build, Automate &amp; Scale Your System
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] font-light leading-[1.7] text-white/80 sm:text-[18px]">
                GHL Scale Up is a team of dedicated GoHighLevel experts who design and implement CRM
                architecture, automation, AI, funnels, integrations and migrations for businesses
                that need GoHighLevel to work as one connected system, not a generalist splitting
                attention across a dozen tools.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#F8D000] px-7 py-4 text-[15.5px] font-semibold text-[#1C2E4A] hover-lift hover:bg-[#FFE44D]"
                >
                  Book a Free Strategy Call
                </Link>
                <Link
                  href="/how-we-work"
                  className="inline-flex items-center justify-center rounded-md border-[1.5px] border-white/35 px-7 py-4 text-[15.5px] font-semibold text-white transition-colors hover:border-white"
                >
                  See How We Work
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-7">
                <div className="flex items-center gap-2.5 text-[13.5px] text-white/70">
                  <b className="font-bold text-[#F8D000]">01</b>
                  <span>Tell us what you&apos;re building</span>
                </div>
                <div className="flex items-center gap-2.5 text-[13.5px] text-white/70">
                  <b className="font-bold text-[#F8D000]">02</b>
                  <span>We review your current setup</span>
                </div>
                <div className="flex items-center gap-2.5 text-[13.5px] text-white/70">
                  <b className="font-bold text-[#F8D000]">03</b>
                  <span>Get scope, timeline &amp; pricing</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div
                className="float-y rounded-[14px] border border-white/12 bg-white/[0.05] p-4 sm:p-6"
                aria-hidden="true"
              >
                <div className="mb-4 text-[13px] font-semibold text-white/65">
                  A GoHighLevel system, end to end
                </div>
                <svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
                  <path className="fill-none stroke-white/20" strokeWidth="1.3" d="M180,150 L180,58" />
                  <path className="fill-none stroke-white/20" strokeWidth="1.3" d="M180,150 L272,104" />
                  <path className="fill-none stroke-white/20" strokeWidth="1.3" d="M180,150 L272,196" />
                  <path className="fill-none stroke-white/20" strokeWidth="1.3" d="M180,150 L180,242" />
                  <path className="fill-none stroke-white/20" strokeWidth="1.3" d="M180,150 L88,196" />
                  <path className="fill-none stroke-white/20" strokeWidth="1.3" d="M180,150 L88,104" />

                  <circle cx="180" cy="150" r="30" fill="#F8D000" />
                  <text x="180" y="154" textAnchor="middle" fill="#1C2E4A" fontSize="11" fontWeight="800" fontFamily="Poppins, sans-serif">
                    GHL
                  </text>

                  <g>
                    <rect x="140" y="34" width="80" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                    <text x="180" y="50" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">CRM</text>
                  </g>
                  <g>
                    <rect x="248" y="88" width="98" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                    <text x="297" y="104" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">Automation</text>
                  </g>
                  <g>
                    <rect x="252" y="184" width="90" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                    <text x="297" y="200" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">Integrations</text>
                  </g>
                  <g>
                    <rect x="140" y="230" width="80" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                    <text x="180" y="246" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">SaaS</text>
                  </g>
                  <g>
                    <rect x="18" y="184" width="90" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                    <text x="63" y="200" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">Migration</text>
                  </g>
                  <g>
                    <rect x="24" y="88" width="64" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                    <text x="56" y="104" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">AI</text>
                  </g>

                  <circle cx="180" cy="58" r="2.5" fill="#25C97D" className="pulse-dot" />
                  <circle cx="272" cy="104" r="2.5" fill="#25C97D" className="pulse-dot" />
                  <circle cx="272" cy="196" r="2.5" fill="#25C97D" className="pulse-dot" />
                  <circle cx="180" cy="242" r="2.5" fill="#25C97D" className="pulse-dot" />
                  <circle cx="88" cy="196" r="2.5" fill="#25C97D" className="pulse-dot" />
                  <circle cx="88" cy="104" r="2.5" fill="#25C97D" className="pulse-dot" />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Proof strip */}
        <div className="relative border-t border-white/10 bg-black/10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className={`${container} relative`}>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { icon: Layers, num: '200+', label: 'Projects Delivered' },
                { icon: Users, num: '50+', label: 'Active Clients' },
                { icon: Globe, num: '6', label: 'Countries Served' },
                { icon: Clock, num: '5+', label: 'Years Building With GoHighLevel' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`relative px-3 py-6 text-center sm:px-4 sm:py-7 ${i % 2 === 0 ? 'border-r border-white/8' : ''
                      } ${i < 2 ? 'border-b border-white/8 md:border-b-0' : ''} ${i === 2 ? 'md:border-r' : ''
                      } ${i === 3 ? 'md:border-r-0' : ''} ${i === 2 ? 'border-r-0' : ''}`}
                  >
                    <Icon className="mx-auto mb-2 h-[18px] w-[18px] text-[#F8D000] opacity-85" />
                    <div className="text-[24px] font-extrabold text-white sm:text-[28px]">
                      {item.num}
                    </div>
                    <div className="mt-1 text-[11.5px] font-medium text-white/60 sm:text-[12.5px]">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PROBLEM SECTION
          ============================================ */}
      <section className="bg-[#F4F7FA] py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-12 max-w-[680px]">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                The Real Problem
              </span>
              <h2 className="text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                GoHighLevel is powerful. Building it correctly is the hard part.
              </h2>
              <p className="mt-4.5 text-[16px] font-light leading-[1.65] text-[#4A5568] sm:text-[18px]">
                The platform gives you every tool pipelines, workflows, funnels, calendars, AI
                agents. It doesn&apos;t hand you a configuration that matches how your business
                actually sells and follows up, which is usually the point businesses decide to hire a
                GoHighLevel expert. Many of the accounts a GoHighLevel specialist gets brought in on
                fall into one of these situations.
              </p>
            </div>
          </Reveal>

          <div className="relative z-[2] -mb-px flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1C2E4A] px-4 py-2.5 text-[12px] font-bold tracking-[0.03em] text-white shadow-[0_6px_18px_rgba(28,46,74,0.18)] sm:px-5 sm:text-[12.5px]">
              <span className="h-2 w-2 rounded-full bg-[#F8D000] pulse-dot" />
              GoHighLevel System where is it stuck?
            </span>
          </div>
          <div className="mx-auto h-7 w-px bg-[#E8EDF4]" />

          <div className="mt-0 grid gap-px overflow-hidden rounded-[14px] border border-[#E8EDF4] bg-[#E8EDF4] md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const dotColor =
                problem.status === 'red'
                  ? 'bg-[#E5533D]'
                  : problem.status === 'amber'
                    ? 'bg-[#F2A93B]'
                    : 'bg-[#0E9BF0]';
              return (
                <Reveal key={index} delay={index * 60}>
                  <div className="relative h-full bg-white p-6 hover-lift sm:p-7">
                    <div className="mb-3 flex items-center justify-between">
                      <Icon className="h-[22px] w-[22px] text-[#0E9BF0]" />
                      <span className={`h-2 w-2 rounded-full ${dotColor}`} />
                    </div>
                    <h4 className="mb-2 text-[16px] font-semibold text-[#1C2E4A] sm:text-[16.5px]">
                      {problem.title}
                    </h4>
                    <p className="text-[14px] leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
                      {problem.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          CASE STUDIES (shared component)
          ============================================ */}
      <section className="bg-[#F4F7FA] py-14 md:py-24">
        <CaseStudies caseStudies={caseStudies} />
      </section>

      {/* ============================================
          TESTIMONIALS (shared component)
          ============================================ */}
      <section className="bg-white py-14 md:py-24">
        <Testimonials testimonials={testimonials} />
      </section>

      {/* ============================================
          CAPABILITY ARCHITECTURE
          ============================================ */}
      <section id="capabilities" className="bg-white py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-12 max-w-[680px]">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                What Our Experts Build
              </span>
              <h2 className="text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                A complete GoHighLevel system, not a list of features
              </h2>
              <p className="mt-4.5 max-w-[680px] text-[16px] font-light leading-[1.65] text-[#4A5568] sm:text-[18px]">
                A GoHighLevel implementation is rarely one thing. CRM architecture and workflow
                automation are the foundation almost every project needs; everything else AI,
                integrations, migration, SaaS gets built on top of that foundation once it&apos;s
                solid.
              </p>
            </div>
          </Reveal>

          <div className="mb-2 flex justify-center">
            <span className="relative z-[3] inline-flex items-center gap-2.5 rounded-[10px] bg-[#1C2E4A] px-6 py-3 text-[14px] font-bold tracking-[-0.01em] text-white shadow-[0_10px_26px_rgba(28,46,74,0.16)] sm:px-7 sm:py-3.5 sm:text-[15px]">
              <span className="h-2 w-2 rounded-full bg-[#F8D000] pulse-dot" />
              GoHighLevel
            </span>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <Reveal key={index} delay={index * 60}>
                  <div
                    className={`hover-lift relative z-[2] h-full rounded-[14px] border p-6 sm:p-7 ${cap.core
                        ? 'border-[#1C2E4A] bg-[#1C2E4A] text-white'
                        : 'border-[#E8EDF4] bg-white hover:border-[#0E9BF0] hover:shadow-[0_6px_24px_rgba(14,155,240,0.10)]'
                      }`}
                  >
                    <Icon className={`mb-4 h-9 w-9 sm:h-10 sm:w-10 ${cap.core ? 'text-[#F8D000]' : 'text-[#0E9BF0]'}`} />
                    <h4 className="mb-2.5 text-[16.5px] font-semibold sm:text-[17.5px]">{cap.title}</h4>
                    <ul className="space-y-1">
                      {cap.items.map((item, i) => (
                        <li
                          key={i}
                          className={`relative pl-3.5 text-[13.5px] sm:text-[14px] ${cap.core ? 'text-white/78' : 'text-[#4A5568]'
                            }`}
                        >
                          <span
                            className={`absolute left-0 top-[11px] h-[5px] w-[5px] rounded-full ${cap.core ? 'bg-[#F8D000]' : 'bg-[#0E9BF0]'
                              }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {cap.link && (
                      <Link
                        href={cap.link}
                        className={`mt-4 inline-block text-[13px] font-semibold hover:underline sm:text-[13.5px] ${cap.core ? 'text-[#F8D000]' : 'text-[#0E9BF0]'
                          }`}
                      >
                        {cap.linkLabel} &rsaquo;
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-11 flex flex-col gap-5 rounded-[14px] bg-[#1C2E4A] px-6 py-6 sm:px-8 sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <p className="max-w-[760px] text-[14px] leading-[1.65] text-white/80 sm:text-[14.5px]">
                <b className="text-white">GoHighLevel expertise spans multiple layers</b> CRM →
                Automation → Funnels → AI → Integrations → Migration → SaaS. Complex projects need
                several of these working together, which is the difference between a team and someone
                offering isolated tasks. Evaluating individual specialists on their own? See{' '}
                <Link href="/blog/where-to-hire-gohighlevel-experts" className="text-[#F8D000] underline">
                  where to hire GoHighLevel experts
                </Link>
                .
              </p>
              <Link
                href="/services"
                className="inline-flex shrink-0 items-center justify-center rounded-md border border-white/30 px-5 py-3 text-[14px] font-semibold text-white no-underline transition-colors hover:border-white"
              >
                Explore all GoHighLevel services &rsaquo;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================
          FIT SECTION
          ============================================ */}
      <section className="bg-[#F4F7FA] py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-11 max-w-[680px]">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                Find Your Starting Point
              </span>
              <h2 className="text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                What do you need help with?
              </h2>
              <p className="mt-4.5 text-[16px] font-light leading-[1.65] text-[#4A5568] sm:text-[18px]">
                Every project starts differently. Here&apos;s where each situation usually leads.
              </p>
            </div>
          </Reveal>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fitCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={index} delay={index * 60}>
                  <Link
                    href={card.link}
                    className="group hover-lift relative block h-full rounded-lg border border-[#E8EDF4] bg-white p-5 pr-11 hover:border-[#0E9BF0] hover:shadow-[0_4px_18px_rgba(14,155,240,0.10)]"
                  >
                    <Icon className="mb-3 h-[26px] w-[26px] text-[#0E9BF0]" />
                    <ArrowRight className="absolute right-5 top-5 h-4 w-4 text-[#8A9BB0] transition-transform duration-150 group-hover:translate-x-1 group-hover:text-[#0E9BF0]" />
                    <h4 className="mb-1.5 text-[15.5px] font-semibold text-[#1C2E4A]">{card.title}</h4>
                    <p className="text-[13.8px] leading-[1.55] text-[#4A5568]">{card.description}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          WHY HIRE AN EXPERT / COMPARISON
          ============================================ */}
      <section className="bg-[#F4F7FA] py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-11 max-w-[680px]">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                One Task, or the Full System?
              </span>
              <h2 className="text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                Why hire an expert instead of a single freelancer?
              </h2>
              <p className="mt-4.5 text-[16px] font-light leading-[1.65] text-[#4A5568] sm:text-[18px]">
                It usually makes sense once the system affects revenue, spans multiple interacting
                workflows, involves a migration, integration or AI feature, several people depend on
                it daily, or the existing account is inconsistent or undocumented. Plenty of
                GoHighLevel freelancers do good work on a defined task &mdash; the difference is less
                about freelancer vs. agency and more about the complexity and ownership your project
                requires.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-11 overflow-hidden rounded-[14px] border border-[#E8EDF4] bg-white">
              <div className="hidden bg-[#F4F7FA] md:grid md:grid-cols-[1.4fr_1fr_1fr]">
                <div className="border-b-2 border-[#1C2E4A] px-5 py-4 text-[12.5px] font-bold uppercase tracking-[0.04em] text-[#4A5568]">
                  Engagement Model
                </div>
                <div className="border-b-2 border-[#1C2E4A] px-5 py-4 text-[12.5px] font-bold uppercase tracking-[0.04em] text-[#4A5568]">
                  Typical Freelancer
                </div>
                <div className="border-b-2 border-[#1C2E4A] bg-[rgba(14,155,240,0.06)] px-5 py-4 text-[12.5px] font-bold uppercase tracking-[0.04em] text-[#1C2E4A]">
                  GHL Scale Up
                </div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className="border-b border-[#E8EDF4] last:border-b-0 md:grid md:grid-cols-[1.4fr_1fr_1fr] md:border-b"
                >
                  <div className="bg-[#F4F7FA] px-5 py-3.5 text-[14px] font-semibold text-[#1C2E4A] md:bg-transparent md:py-4 md:font-medium md:text-[#4A5568]">
                    {row.label}
                  </div>

                  <div className="grid grid-cols-1 md:contents">
                    <div className="flex items-start gap-2 px-5 py-3 md:items-center md:py-4">
                      <Minus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8A9BB0] md:mt-0" />
                      <span className="text-[13.5px] text-[#4A5568] sm:text-[14px]">
                        <span className="mr-2 inline-block text-[11px] font-bold uppercase tracking-wide text-[#8A9BB0] md:hidden">
                          Freelancer:
                        </span>
                        {row.freelancer}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 bg-[rgba(14,155,240,0.045)] px-5 py-3 md:items-center md:py-4">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#25C97D] md:mt-0" />
                      <span className="text-[13.5px] font-semibold text-[#1C2E4A] sm:text-[14px]">
                        <span className="mr-2 inline-block text-[11px] font-bold uppercase tracking-wide text-[#0E9BF0] md:hidden">
                          GHL Scale Up:
                        </span>
                        {row.ghlscaleup}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-5 max-w-[640px] text-[13.5px] italic text-[#4A5568] sm:text-[14.5px]">
              If you need one workflow fixed this week, a freelancer is often the right call. If you
              need pipelines, automation, integrations and AI to work together as one system,
              that&apos;s the kind of project this page is for. Comparing agencies specifically? See{' '}
              <Link href="/blog/best-ghl-expert-agency" className="text-[#0E9BF0]">
                best GHL expert agencies to hire
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================
          WHY GHL SCALE UP (DARK)
          ============================================ */}
      <section className="bg-[#1C2E4A] py-14 text-white md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-12">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#F8D000]">
                Why GHL Scale Up
              </span>
              <h2 className="max-w-[680px] text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                Not &ldquo;we&apos;re experts.&rdquo; Here&apos;s exactly how we work.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid border-t border-white/10 md:grid-cols-2">
            {whyUsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={index * 60}>
                  <div
                    className={`flex items-start gap-4 border-b border-white/10 py-6 ${index % 2 === 0 ? 'md:pr-9' : ''
                      }`}
                  >
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 text-[#F8D000]" />
                    <div>
                      <h4 className="mb-1.5 text-[15.5px] font-semibold sm:text-[16.5px]">{item.title}</h4>
                      <p className="text-[13.5px] leading-[1.6] text-white/70 sm:text-[14px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-13 grid gap-5 md:grid-cols-3">
            {whyUsTestimonials.map((t, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="hover-lift h-full rounded-[14px] border border-white/12 bg-white/[0.045] p-6">
                  <div className="mb-3.5 text-[14px] tracking-[2px] text-[#F8D000]">★★★★★</div>
                  <p className="text-[14px] italic leading-[1.65] text-white/88 sm:text-[14.5px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 text-[13px] font-semibold text-white/60 sm:text-[13.5px]">
                    {t.author} - {t.company}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS
          ============================================ */}
      <section className="bg-white py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-12 max-w-[680px]">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                How We Deliver
              </span>
              <h2 className="text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                How we deliver your GHL system
              </h2>
              <p className="mt-4.5 text-[16px] font-light leading-[1.65] text-[#4A5568] sm:text-[18px]">
                Every project runs through the same five stages, whether it&apos;s a first build or a
                full SaaS platform. Pricing is fixed and quoted after the first call &mdash; not
                billed hourly.
              </p>
            </div>
          </Reveal>

          <div className="mt-13 md:flex md:items-start">
            {processSteps.map((step, index) => (
              <Reveal key={index} delay={index * 80} className="md:flex-1">
                <div
                  className={`relative ${index < processSteps.length - 1
                      ? 'md:pr-[18px] md:after:absolute md:after:right-[-9px] md:after:top-[19px] md:after:block md:after:h-[1.5px] md:after:w-[18px] md:after:bg-[#E8EDF4]'
                      : ''
                    } border-b border-[#E8EDF4] py-6 last:border-b-0 md:border-b-0 md:py-0`}
                >
                  <div className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-[#E8EDF4] bg-[#F4F7FA] text-[14px] font-extrabold text-[#1C2E4A] md:relative md:z-[2]">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="mb-2 text-[15.5px] font-semibold text-[#1C2E4A] sm:text-[16px] md:mb-1.5">
                      {step.title}
                    </h4>
                    <p className="max-w-[640px] text-[13px] leading-[1.6] text-[#4A5568] sm:text-[13.3px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-6 text-[13.5px] text-[#4A5568] sm:text-[14px]">
              Typical turnaround is one to three weeks depending on scope, with weekly progress
              updates along the way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================
          DELIVERABLES
          ============================================ */}
      <section className="bg-[#F4F7FA] py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-11">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                What You Receive
              </span>
              <h2 className="text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                What clients actually receive
              </h2>
            </div>
          </Reveal>

          <ul className="mt-11 grid gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => (
              <Reveal key={index} delay={index * 30}>
                <li className="flex items-start gap-2.5 py-2.5 text-[14px] text-[#1C2E4A] sm:text-[14.5px]">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E9BF0]" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <p className="mt-7 border-l-[3px] border-[#0E9BF0] pl-4 text-[13.5px] text-[#4A5568] sm:text-[14px]">
              Exact deliverables depend on your documented project scope not every engagement
              includes every item above.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================
          REBUILD
          ============================================ */}
      <section id="rebuild" className="bg-white py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-11 max-w-[680px]">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                Existing Accounts
              </span>
              <h2 className="text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                Already have a messy GoHighLevel account?
              </h2>
              <p className="mt-4.5 text-[16px] font-light leading-[1.65] text-[#4A5568] sm:text-[18px]">
                Many projects aren&apos;t a blank account. They&apos;re a previous freelancer&apos;s
                or an in-house attempt that needs a GoHighLevel specialist to untangle it &mdash;
                without losing the data and history already in it. This is one of the most common
                reasons businesses hire a GoHighLevel expert in the first place.
              </p>
            </div>
          </Reveal>

          <div className="mt-11 grid gap-10 rounded-[14px] border border-[#E8EDF4] bg-white p-6 sm:p-8 md:grid-cols-2 md:p-10">
            <Reveal>
              <div>
                <h4 className="mb-4 text-[16px] font-semibold text-[#1C2E4A] sm:text-[17px]">
                  What we do first
                </h4>
                <ul className="divide-y divide-dashed divide-[#E8EDF4]">
                  <li className="py-2.5 text-[14px] text-[#4A5568] sm:text-[14.5px]">
                    <b className="text-[#1C2E4A]">Audit</b> the existing setup before touching anything
                  </li>
                  <li className="py-2.5 text-[14px] text-[#4A5568] sm:text-[14.5px]">
                    <b className="text-[#1C2E4A]">Identify</b> what&apos;s usable and what&apos;s broken
                  </li>
                  <li className="py-2.5 text-[14px] text-[#4A5568] sm:text-[14.5px]">
                    <b className="text-[#1C2E4A]">Preserve</b> the data and history already in the
                    account
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <h4 className="mb-4 text-[16px] font-semibold text-[#1C2E4A] sm:text-[17px]">
                  What we rebuild
                </h4>
                <ul className="divide-y divide-dashed divide-[#E8EDF4]">
                  <li className="py-2.5 text-[14px] text-[#4A5568] sm:text-[14.5px]">
                    <b className="text-[#1C2E4A]">Rebuild</b> the pipelines and workflows that
                    don&apos;t work
                  </li>
                  <li className="py-2.5 text-[14px] text-[#4A5568] sm:text-[14.5px]">
                    <b className="text-[#1C2E4A]">Clean up</b> tagging and automation logic
                  </li>
                  <li className="py-2.5 text-[14px] text-[#4A5568] sm:text-[14.5px]">
                    <b className="text-[#1C2E4A]">Document</b> the final system for your team
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          PROOF SECTION
          ============================================ */}
      <section className="bg-white py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-12 max-w-[680px]">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                Proof
              </span>
              <h2 className="text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                GoHighLevel systems we&apos;ve built
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {proofCaseStudies.map((cs, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="hover-lift flex h-full flex-col rounded-[14px] border border-[#E8EDF4] bg-white p-6 sm:p-7">
                  <div className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#0E9BF0]">
                    {cs.tag}
                  </div>
                  <h4 className="mb-4 text-[17px] font-semibold leading-[1.3] text-[#1C2E4A] sm:text-[19px]">
                    {cs.title}
                  </h4>

                  <div className="mb-4 flex flex-wrap items-center gap-1.5">
                    <span className="rounded-full border border-[#E8EDF4] bg-[#F4F7FA] px-2.5 py-1 text-[11px] font-semibold text-[#4A5568]">
                      Problem
                    </span>
                    <ArrowRight className="h-3 w-3 text-[#8A9BB0]" />
                    <span className="rounded-full border border-[#E8EDF4] bg-[#F4F7FA] px-2.5 py-1 text-[11px] font-semibold text-[#4A5568]">
                      Implementation
                    </span>
                    <ArrowRight className="h-3 w-3 text-[#8A9BB0]" />
                    <span className="rounded-full border border-[#E8EDF4] bg-[#F4F7FA] px-2.5 py-1 text-[11px] font-semibold text-[#4A5568]">
                      Outcome
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[13.5px] leading-[1.55] text-[#4A5568]">
                      <b className="font-semibold text-[#1C2E4A]">Problem:</b> {cs.problem}
                    </div>
                    <div className="text-[13.5px] leading-[1.55] text-[#4A5568]">
                      <b className="font-semibold text-[#1C2E4A]">Built:</b> {cs.built}
                    </div>
                    <div className="text-[13.5px] leading-[1.55] text-[#4A5568]">
                      <b className="font-semibold text-[#1C2E4A]">Result:</b> {cs.result}
                    </div>
                  </div>

                  <Link
                    href={cs.link}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13.5px] font-semibold text-[#0E9BF0] hover:underline"
                  >
                    Read the full case study &rsaquo;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-md border-[1.5px] border-[#1C2E4A] px-5 py-3 text-[14px] font-semibold text-[#1C2E4A] transition-colors hover:bg-[#1C2E4A] hover:text-white"
              >
                See all case studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>



      {/* ============================================
          INDUSTRIES
          ============================================ */}
      <section className="bg-[#F4F7FA] py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
              Industries
            </span>
            <h2 className="max-w-[680px] text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
              Industries we work with
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3.5 md:grid-cols-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={index} delay={index * 50}>
                  <div className="hover-lift flex h-full flex-col items-start gap-2.5 rounded-lg border border-[#E8EDF4] bg-white px-4 py-5 text-[13.5px] font-semibold text-[#1C2E4A] sm:text-[13.8px]">
                    <Icon className="h-[22px] w-[22px] text-[#0E9BF0]" />
                    {industry.label}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="bg-[#F4F7FA] py-14 md:py-24">
        <div className={container}>
          <Reveal>
            <div className="mb-11">
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#0E9BF0]">
                FAQ
              </span>
              <h2 className="max-w-[680px] text-[clamp(26px,5vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2E4A]">
                Frequently asked questions
              </h2>
            </div>
          </Reveal>

          <div className="mt-6">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 20}>
                <details className="group border-b border-[#E8EDF4] first:border-t first:border-[#E8EDF4]">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-1 py-5 text-[15px] font-semibold text-[#1C2E4A] transition-colors hover:bg-[#F9FBFD] sm:text-[16.5px]">
                    <span className="flex flex-1 items-start">
                      <span className="mr-3 shrink-0 text-[12.5px] font-bold text-[#8A9BB0]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <span className="ml-2 mt-0.5 shrink-0 text-[22px] font-light leading-none text-[#0E9BF0] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="max-w-[760px] px-1 pb-5 pl-6">
                    <p className="text-[14px] leading-[1.7] text-[#4A5568] sm:text-[14.8px]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C2E4A] to-[#142238] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(14,155,240,0.15),transparent_55%)]" />
        <div className={`${container} relative z-10`}>
          <div className="grid items-center gap-10 py-14 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <Reveal>
              <div>
                <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#F8D000]">
                  Get Started
                </span>
                <h2 className="text-[clamp(26px,5vw,40px)] font-bold leading-[1.15] tracking-[-0.02em]">
                  Ready to build your GoHighLevel system?
                </h2>
                <p className="mt-4.5 max-w-[520px] text-[15.5px] leading-[1.7] text-white/78 sm:text-[16.5px]">
                  Tell us what you&apos;re trying to build. We&apos;ll review your setup, understand
                  the scope, and map the right implementation path no sales pitch, just a technical
                  conversation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[14px] border border-white/14 bg-white/[0.05] p-6 sm:p-7">
                <p className="mb-5 text-[14px] leading-[1.6] text-white/85 sm:text-[14.5px]">
                  Aryan personally reviews every inquiry and reaches out within a few hours to
                  schedule a free 30-minute strategy call.
                </p>
                <Link
                  href="/book-a-call"
                  className="flex w-full items-center justify-center rounded-md bg-[#F8D000] px-6 py-4 text-[15px] font-semibold text-[#1C2E4A] hover-lift hover:bg-[#FFE44D] sm:text-[15.5px]"
                >
                  Book a Free Strategy Call
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}