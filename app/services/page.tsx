// app/services/page.tsx
import Link from 'next/link';
import { 
  Wrench, 
  Bot, 
  FileText, 
  Globe, 
  Mail, 
  Phone, 
  Calendar, 
  Star, 
  Settings, 
  Link as LinkIcon, 
  BarChart, 
  RefreshCw, 
  GraduationCap, 
  Users, 
  Target, 
  Zap, 
  TrendingUp, 
  Clock,
  Briefcase,
  Award,
  Headphones,
  ChevronRight,
  CheckCircle,
  MessageSquare,
  Building2,
  UserCheck,
  Layers,
  Database,
  Shield,
  Rocket,
  Search,
  Lightbulb,
  TestTube,
  Play,
  ArrowRight,
  HelpCircle,
  DollarSign,
  Workflow,
  Globe2,
  Smartphone,
  Video,
  Star as StarIcon,
  Quote,
  ExternalLink,
  BarChart3,
  Settings2,
  PenTool,
  Megaphone,
  Users2,
  LineChart,
  LifeBuoy
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import CaseStudies from '@/components/ghlscalup/CaseStudies';
import Testimonials from '@/components/ghlscalup/Testimonials';
import { getCaseStudies } from '@/lib/caseStudiesData';
import { getAllTestimonialsForHomepage } from '@/lib/sanity';

export const metadata = {
  title: 'GoHighLevel Services | CRM, Automation, AI, SaaS & More',
  description: 'Explore GoHighLevel services from GHL Scale Up, including CRM setup, automation, funnels, AI, SaaS, migration, integrations, websites and ongoing GHL support.',
  keywords: 'GoHighLevel services, GHL services, GoHighLevel service provider, GoHighLevel implementation services, GoHighLevel solutions, GoHighLevel experts, GoHighLevel setup services',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'GoHighLevel Services Built Around Your Business | GHL Scale Up',
    description: 'CRM, automation, AI, migration, SaaS, integrations and more — implemented around how your business actually operates.',
    url: 'https://www.ghlscaleup.com/services',
    siteName: 'GHL Scale Up',
    type: 'website',
  },
};

export default async function ServicesPage() {
  // Fetch case studies and testimonials
  const caseStudies = getCaseStudies();
  
  let testimonials = [];
  try {
    testimonials = await getAllTestimonialsForHomepage();
  } catch (error) {
    console.error('Failed to load testimonials:', error);
  }

  // ============================================
  // SERVICE CATEGORIES (existing structure preserved)
  // ============================================
  const serviceCategories = [
    {
      title: 'Core GHL Services',
      icon: Wrench,
      description: 'Foundation services to get your GHL system up and running',
      services: [
        {
          icon: Settings,
          title: 'CRM Setup & Configuration',
          description: 'Custom pipelines, deal stages, contact management, tag architecture, and user permissions.',
          link: '/services/crm-setup',
          popular: true
        },
        {
          icon: Zap,
          title: 'Workflow & Marketing Automation',
          description: 'Trigger-based workflows, multi-step sequences, and conditional automations that respond in seconds.',
          link: '/services/workflow-automation',
          popular: true
        },
        {
          icon: FileText,
          title: 'Sales Funnel Development',
          description: 'High-converting landing pages, opt-in forms, sales pages, order bumps, and upsells.',
          link: '/services/funnel-development',
          popular: true
        },
        {
          icon: Globe,
          title: 'GHL Website Development',
          description: 'Full websites built inside GHL with custom design, SEO optimization, and CRM integration.',
          link: '/services/website-development'
        },
        {
          icon: Mail,
          title: 'Email, SMS & WhatsApp Automation',
          description: 'Multi-channel drip campaigns, nurture sequences, appointment reminders, and re-engagement workflows.',
          link: '/services/campaign-automation'
        },
        {
          icon: Bot,
          title: 'AI Chatbot & Conversation AI',
          description: 'AI-powered chatbots for lead qualification, FAQ handling, appointment booking, and 24/7 support.',
          link: '/services/ai-chatbot'
        }
      ]
    },
    {
      title: 'AI & Voice Solutions',
      icon: Headphones,
      description: 'Next-generation AI and voice automation for your business',
      services: [
        {
          icon: Phone,
          title: 'AI Voice Agent & Call Handling',
          description: '24/7 AI receptionist that answers calls, qualifies leads, books appointments, and handles missed calls.',
          link: '/services/ai-voice-agent',
          popular: true
        },
        {
          icon: Calendar,
          title: 'Calendar & Booking Setup',
          description: 'Professional booking systems, round-robin scheduling, service calendars, and automated reminders.',
          link: '/services/calendar-booking'
        },
        {
          icon: Star,
          title: 'Reputation & Review Management',
          description: 'Automated review requests, Google/Facebook monitoring, AI-powered review responses, and reputation tracking.',
          link: '/services/reputation-management'
        }
      ]
    },
    {
      title: 'Advanced Solutions',
      icon: TrendingUp,
      description: 'Enterprise-level solutions for scaling your business',
      services: [
        {
          icon: Settings,
          title: 'White-Label SaaS Setup',
          description: 'Complete white-label SaaS platform with branded domains, snapshots, Stripe billing, and automated provisioning.',
          link: '/services/saas-setup',
          popular: true
        },
        {
          icon: LinkIcon,
          title: 'Integrations & API Development',
          description: 'Custom integrations with Zapier, Make.com, Stripe, Google, webhooks, and custom APIs.',
          link: '/services/integrations'
        },
        {
          icon: BarChart,
          title: 'Reporting & Dashboards',
          description: 'Custom dashboards for leads, pipeline value, conversion rates, and team performance analytics.',
          link: '/services/reporting'
        },
        {
          icon: RefreshCw,
          title: 'GHL Migration Services',
          description: 'Complete migration from ClickFunnels, Kajabi, HubSpot, ActiveCampaign, and any CRM to GoHighLevel.',
          link: '/services/migration'
        },
        {
          icon: GraduationCap,
          title: 'Membership & Course Sites',
          description: 'Membership platforms and online course sites with drip content, gated access, and payment integration.',
          link: '/services/membership-sites'
        },
        {
          icon: Users,
          title: 'GHL Training & Onboarding',
          description: 'End-to-end training for your team — CRM, automations, reporting, funnels. SOPs, videos, and live training.',
          link: '/services/training'
        },
        {
          icon: Briefcase,
          title: 'Virtual Assistant for GHL Management',
          description: 'Dedicated GHL VA to manage your account, run campaigns, update pipelines, and handle day-to-day tasks.',
          link: '/services/virtual-assistant'
        }
      ]
    }
  ];

  // ============================================
  // STATS
  // ============================================
  const stats = [
    { value: '200+', label: 'Projects Delivered', icon: Award },
    { value: '50+', label: 'Active Clients', icon: Users },
    { value: '6', label: 'Countries Served', icon: Globe },
    { value: '5+', label: 'Years Experience', icon: Clock }
  ];

  // ============================================
  // CUSTOMER JOURNEY STAGES
  // ============================================
  const customerJourney = [
    { stage: 'Traffic & Lead Generation', description: 'Bring prospects into your ecosystem through websites, landing pages, funnels, forms, campaigns, advertising, organic channels, and other lead sources.', icon: Megaphone },
    { stage: 'Lead Capture', description: 'Capture the information you need through forms, surveys, landing pages, websites, booking flows, and lead-generation funnels.', icon: Target },
    { stage: 'CRM & Qualification', description: 'Organize contacts, opportunities, pipelines, stages, tags, custom fields, ownership, and qualification logic.', icon: Database },
    { stage: 'Follow-Up & Nurturing', description: 'Use workflows, email, SMS, WhatsApp, reminders, and other communication channels to follow up consistently.', icon: MessageSquare },
    { stage: 'Appointment Booking', description: 'Connect qualified leads to calendars, scheduling, reminders, confirmations, and follow-up workflows.', icon: Calendar },
    { stage: 'Sales Pipeline', description: 'Give your team a clear view of every opportunity, what happened previously, and what needs to happen next.', icon: BarChart3 },
    { stage: 'Conversion & Onboarding', description: 'Use automation, communication, forms, payments, memberships, and internal processes to create a structured handoff.', icon: UserCheck },
    { stage: 'Retention & Reactivation', description: 'Continue communicating with customers, request reviews, identify repeat-business opportunities, and reactivate inactive leads or customers.', icon: RefreshCw }
  ];

  // ============================================
  // WHICH SERVICE DO YOU NEED? (Decision Guide)
  // ============================================
  const decisionGuide = [
    { problem: "I'm new to GoHighLevel", solution: 'CRM Setup & Implementation', link: '/services/crm-setup' },
    { problem: "I'm moving from another CRM or marketing platform", solution: 'GoHighLevel Migration', link: '/services/migration' },
    { problem: 'My team is manually following up with leads', solution: 'Workflow & Marketing Automation', link: '/services/workflow-automation' },
    { problem: 'Leads are coming in but falling through the cracks', solution: 'CRM + Lead Routing + Automated Nurturing', link: '/services/crm-setup' },
    { problem: 'I want more appointments', solution: 'Funnels + Forms + Calendar + Automation', link: '/services/funnel-development' },
    { problem: 'I want AI to handle conversations or calls', solution: 'AI Chatbot + AI Voice Agent', link: '/services/ai-chatbot' },
    { problem: 'I want to sell GoHighLevel as SaaS', solution: 'SaaS Setup', link: '/services/saas-setup' },
    { problem: 'I need GoHighLevel connected to other software', solution: 'Integrations + API/Webhooks', link: '/services/integrations' },
    { problem: 'I already have GHL but it is messy or underused', solution: 'GHL Audit + Reconfiguration + Optimization', link: '/services/crm-setup' },
    { problem: 'I need someone to manage GHL for my team', solution: 'GHL Management / VA / Ongoing Support', link: '/services/virtual-assistant' }
  ];

  // ============================================
  // BUILD THE FOUNDATION
  // ============================================
  const foundationServices = [
    { title: 'CRM Setup & Implementation', description: 'Configure contacts, pipelines, fields, tags, calendars, lead capture, workflows, permissions, and other core components around the sales and customer journey.', icon: Settings, link: '/services/crm-setup' },
    { title: 'Sales Funnel Development', description: 'Build funnels around enquiry, booking, purchase, registration, or nurture goals and connect them to CRM and automation.', icon: FileText, link: '/services/funnel-development' },
    { title: 'GHL Website Development', description: 'Build websites inside GHL with conversion, SEO foundations, lead capture, CRM integration, and the customer journey in mind.', icon: Globe, link: '/services/website-development' },
    { title: 'Calendar & Booking Setup', description: 'Configure calendars, booking flows, availability, reminders, confirmations, round-robin scheduling, and relevant follow-up workflows.', icon: Calendar, link: '/services/calendar-booking' }
  ];

  // ============================================
  // AUTOMATE THE CUSTOMER JOURNEY
  // ============================================
  const automationServices = [
    { title: 'GoHighLevel Workflow & Marketing Automation', description: 'Build trigger-based systems around real business events such as form submissions, bookings, pipeline changes, missed appointments, customer conversion, inactivity, review milestones, and reactivation.', icon: Workflow, link: '/services/workflow-automation' },
    { title: 'Email, SMS & WhatsApp Automation', description: 'Build coordinated communication for nurture, reminders, confirmations, follow-up, re-engagement, customer communication, and review requests.', icon: Mail, link: '/services/campaign-automation' }
  ];

  // ============================================
  // ADD AI TO CUSTOMER COMMUNICATION
  // ============================================
  const aiServices = [
    { title: 'AI Chatbot & Conversation AI', description: 'Implement AI-powered conversations for FAQ handling, lead qualification, information collection, appointment booking, and customer support, integrated with the larger CRM and automation system.', icon: Bot, link: '/services/ai-chatbot' },
    { title: 'AI Voice Agent & Call Handling', description: 'Implement AI voice workflows for inbound call handling, lead qualification, appointment booking, and missed-call follow-up so calls feed into the same customer journey as other lead sources.', icon: Phone, link: '/services/ai-voice-agent' }
  ];

  // ============================================
  // ADVANCED GOHIGHLEVEL SYSTEMS
  // ============================================
  const advancedSystems = [
    { title: 'White-Label GoHighLevel SaaS Setup', description: 'Configure branded domains, snapshots, billing, sub-account provisioning, and the supporting infrastructure required for a branded SaaS offering.', icon: Layers, link: '/services/saas-setup' },
    { title: 'Reporting & Dashboards', description: 'Configure reporting around leads, opportunities, pipeline value, conversion activity, team performance, appointments, campaigns, and customer lifecycle activity.', icon: BarChart, link: '/services/reporting' },
    { title: 'Membership & Course Sites', description: 'Build relevant membership and course experiences, including gated content, drip delivery, payments, and lifecycle communication.', icon: GraduationCap, link: '/services/membership-sites' },
    { title: 'Reputation & Review Management', description: 'Configure review requests, monitoring, follow-up communication, and reputation-related workflows.', icon: Star, link: '/services/reputation-management' }
  ];

  // ============================================
  // TRAIN YOUR TEAM OR MANAGE GHL FOR YOU
  // ============================================
  const trainingAndManagement = [
    { title: 'GoHighLevel Training & Onboarding', description: 'Provide role-based training, SOPs, documentation, recorded sessions, and live training where required.', icon: GraduationCap, link: '/services/training' },
    { title: 'GoHighLevel Virtual Assistant & Management', description: 'Support day-to-day account tasks, campaigns, pipeline updates, account maintenance, and other operational work inside GHL.', icon: Users, link: '/services/virtual-assistant' }
  ];

  // ============================================
  // SOLUTIONS FOR DIFFERENT BUSINESS MODELS
  // ============================================
  const businessModels = [
    { 
      title: 'Real Estate', 
      description: 'Lead capture → property inquiry → qualification → agent assignment → follow-up → appointment → opportunity → closing.',
      icon: Building2
    },
    { 
      title: 'Coaches & Consultants', 
      description: 'Lead magnet → application → qualification → consultation → nurture → enrollment → onboarding.',
      icon: UserCheck
    },
    { 
      title: 'Agencies', 
      description: 'Internal growth systems plus client delivery systems, including CRM architecture, reusable workflows, snapshots, SaaS, reporting, onboarding, and account management.',
      icon: Briefcase
    },
    { 
      title: 'Lead-Driven Service Businesses', 
      description: 'Lead Capture → Instant Response → Qualification → Booking → Sales Pipeline → Follow-Up → Review → Re-engagement.',
      icon: Zap
    }
  ];

  // ============================================
  // WHAT WE ACTUALLY IMPLEMENT
  // ============================================
  const implementationAreas = [
    { title: 'Strategy & Architecture', icon: Lightbulb },
    { title: 'CRM & Data', icon: Database },
    { title: 'Lead Capture', icon: Target },
    { title: 'Automation', icon: Workflow },
    { title: 'Communication', icon: MessageSquare },
    { title: 'AI', icon: Bot },
    { title: 'Integrations', icon: LinkIcon },
    { title: 'Tracking & Reporting', icon: BarChart },
    { title: 'Testing & QA', icon: TestTube },
    { title: 'Training & Handover', icon: GraduationCap }
  ];

  // ============================================
  // IMPLEMENTATION PROCESS
  // ============================================
  const processSteps = [
    { step: '01', title: 'Discovery', description: 'Understand the business, lead sources, sales process, customer journey, team structure, and requirements.', icon: Search },
    { step: '02', title: 'Strategy & Architecture', description: 'Map CRM, pipelines, forms, calendars, workflows, communication, integrations, and reporting.', icon: Lightbulb },
    { step: '03', title: 'Implementation', description: 'Build the agreed system inside GoHighLevel.', icon: Settings2 },
    { step: '04', title: 'Integration & Testing', description: 'Test forms, workflows, routing, notifications, calendars, integrations, and customer journeys end to end.', icon: TestTube },
    { step: '05', title: 'Launch & Training', description: 'Prepare the system for live use and train the team.', icon: Rocket },
    { step: '06', title: 'Ongoing Optimization', description: 'Improve the system as the business, offers, team, and customer journey evolve.', icon: TrendingUp }
  ];

  // ============================================
  // WHY BUSINESSES CHOOSE US
  // ============================================
  const whyChooseUs = [
    { icon: Target, title: 'GoHighLevel-Focused Expertise', description: 'GoHighLevel is all we do. Every team member works inside GHL daily and understands the platform inside out.', color: 'blue' },
    { icon: Lightbulb, title: 'Strategy Before Configuration', description: 'We design the system around your business before we build it inside GoHighLevel.', color: 'green' },
    { icon: LinkIcon, title: 'Connected Systems Instead of Isolated Features', description: 'We connect your CRM, pipelines, funnels, workflows, communication, AI, and integrations into one working system.', color: 'yellow' },
    { icon: Wrench, title: 'Hands-On Implementation', description: 'We build the system for you — not just advise you on what to do.', color: 'blue' },
    { icon: LifeBuoy, title: 'End-to-End Support', description: 'From discovery to ongoing optimization, we support your GoHighLevel system as your business evolves.', color: 'green' }
  ];

  // ============================================
  // WHEN SHOULD YOU HIRE A GHL SERVICE PROVIDER?
  // ============================================
  const whenToHire = [
    "You're setting up GHL for the first time",
    'Your account has become difficult to manage',
    'Workflows are breaking',
    'Leads are falling through the cracks',
    'Your CRM no longer reflects your sales process',
    "You're migrating platforms",
    'You need integrations',
    'You want AI',
    'You want SaaS',
    'You need ongoing management',
    'You want marketing and sales operations connected in one system'
  ];

  // ============================================
  // FAQs
  // ============================================
  const faqs = [
    {
      question: 'What are GoHighLevel services?',
      answer: 'GoHighLevel services cover the strategy, setup, implementation, automation, integration, migration, and ongoing management required to turn GoHighLevel into a functioning business system. This includes CRM setup, workflow automation, funnel development, AI implementation, SaaS configuration, and more.'
    },
    {
      question: 'What does a GoHighLevel service provider do?',
      answer: 'A GoHighLevel service provider helps businesses design, build, and manage their GoHighLevel system. This includes CRM configuration, pipeline setup, workflow automation, funnel and website development, AI implementation, integrations, migration from other platforms, team training, and ongoing account management.'
    },
    {
      question: 'Can you set up GHL from scratch?',
      answer: 'Yes. We handle complete GoHighLevel setup from scratch, including CRM configuration, pipeline design, calendar setup, workflow automation, funnel development, website building, and everything else required to launch your system.'
    },
    {
      question: 'Can you migrate my CRM?',
      answer: 'Yes. We provide complete GoHighLevel migration services from platforms including HubSpot, ActiveCampaign, ClickFunnels, Kajabi, Mailchimp, and others. Migration includes source-platform auditing, contact and field mapping, pipeline reconstruction, workflow recreation, forms and funnel rebuilding, integration reconnection, tracking setup, testing, team training, and cutover planning.'
    },
    {
      question: 'Can you build workflows?',
      answer: 'Yes. We build trigger-based GoHighLevel workflows around real business events such as form submissions, bookings, pipeline changes, missed appointments, customer conversion, inactivity, review milestones, and reactivation.'
    },
    {
      question: 'Can you integrate GHL?',
      answer: 'Yes. We connect GoHighLevel with your existing tools using native integrations, automation platforms, webhooks, and APIs. We use native integrations where they are sufficient and build around APIs or webhooks where the workflow requires something more specific.'
    },
    {
      question: 'Can you set up AI?',
      answer: 'Yes. We implement AI Chatbot and Conversation AI for FAQ handling, lead qualification, information collection, appointment booking, and customer support. We also implement AI Voice Agents for inbound call handling, lead qualification, appointment booking, and missed-call follow-up.'
    },
    {
      question: 'Can you build SaaS?',
      answer: 'Yes. We configure White-Label GoHighLevel SaaS setups including branded domains, snapshots, billing, sub-account provisioning, and the supporting infrastructure required for a branded SaaS offering.'
    },
    {
      question: 'Can you manage GHL after setup?',
      answer: 'Yes. We provide ongoing GoHighLevel management and virtual assistant services to support day-to-day account tasks, campaigns, pipeline updates, account maintenance, and other operational work inside GHL.'
    },
    {
      question: 'Do you provide training?',
      answer: 'Yes. We provide role-based GoHighLevel training, SOPs, documentation, recorded sessions, and live training where required.'
    },
    {
      question: 'Can you customize GHL for my industry?',
      answer: 'Yes. We build GoHighLevel systems around how your specific business operates. We have experience across real estate, coaching, consulting, agencies, and lead-driven service businesses, and we customize the system to match your sales process and customer journey.'
    },
    {
      question: 'Do I need all these services?',
      answer: 'No. You do not need every feature inside GoHighLevel. You need the right features, connected in the right way, around the way your business operates. We help you determine what your GoHighLevel system actually needs based on your goals, sales process, and customer journey.'
    },
    {
      question: 'Can you work with an existing GHL account?',
      answer: 'Yes. We can audit, reconfigure, and optimize an existing GoHighLevel account. If your account is messy or underused, we can rebuild the structure, fix broken workflows, and align the system with your sales process.'
    },
    {
      question: 'How much does implementation cost?',
      answer: 'Implementation cost depends on the scope of your project, the complexity of your requirements, and the services you need. Book a free strategy call and we will understand your needs, recommend the right services, and provide a fixed-price quote.'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services' }]} />

      {/* ============================================
          HERO SECTION
          H1 - GoHighLevel Services Built Around Your Business
          ============================================ */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              <Wrench className="h-3 w-3" />
              Our Services
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
              GoHighLevel Services Built<br />
              <span className="text-[#F8D000]">Around Your Business</span>
            </h1>
            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-2xl mx-auto mb-4">
              GoHighLevel can be the CRM, automation platform, communication layer, booking system, funnel builder, 
              and customer management system behind your business — but getting value from it takes more than 
              turning on features.
            </p>
            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-2xl mx-auto mb-4">
              GHL Scale Up provides done-for-you GoHighLevel services that connect your CRM, pipelines, funnels, 
              websites, workflows, communication, AI, integrations, reporting, and customer journeys into one working system.
            </p>
            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Whether you're starting with GoHighLevel, moving from another platform, rebuilding an existing account, 
              or looking for ongoing support, we help you design and implement the system around the way your 
              business actually operates.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 mb-8">
              <Award className="h-4 w-4 text-[#F8D000]" />
              <span className="text-sm text-white/70">
                <strong className="text-[#F8D000]">200+</strong> projects delivered across <strong className="text-[#F8D000]">6 countries</strong>, with <strong className="text-[#F8D000]">50+</strong> active clients and <strong className="text-[#F8D000]">5+ years</strong> of experience.
              </span>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3 rounded-lg text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center gap-2">
                Book a Free Strategy Call <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-[#F8D000]" />
                    <div className="text-2xl md:text-3xl font-extrabold text-[#F8D000]">{stat.value}</div>
                  </div>
                  <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT ARE GOHIGHLEVEL SERVICES?
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-6">
              What Are GoHighLevel Services?
            </h2>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-4">
              GoHighLevel services cover the strategy, setup, implementation, automation, integration, migration, 
              and ongoing management required to turn GoHighLevel into a functioning business system.
            </p>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-4">
              For one business, that may mean setting up a clean CRM and sales pipeline. For another, it may mean 
              migrating from HubSpot or ActiveCampaign, rebuilding workflows, connecting forms and calendars, and training the team.
            </p>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-4">
              For an agency, it could mean building a white-label SaaS environment with reusable snapshots, branded 
              domains, billing, and automated account provisioning.
            </p>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-4">
              For a growing service business, the priority may be connecting lead capture, instant follow-up, 
              appointment booking, pipeline management, AI conversations, and reactivation into one customer journey.
            </p>
            <p className="text-[0.95rem] text-[#1C2E4A] font-semibold leading-relaxed mb-6">
              The important part is not how many GoHighLevel features you have enabled. It is whether those features work together.
            </p>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-6">
              At GHL Scale Up, we approach GoHighLevel implementation around the complete business journey:
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[0.8rem] font-semibold text-[#0E9BF0]">
              <span>Lead Generation</span>
              <ArrowRight className="h-3 w-3" />
              <span>Lead Capture</span>
              <ArrowRight className="h-3 w-3" />
              <span>CRM</span>
              <ArrowRight className="h-3 w-3" />
              <span>Qualification</span>
              <ArrowRight className="h-3 w-3" />
              <span>Follow-Up</span>
              <ArrowRight className="h-3 w-3" />
              <span>Booking</span>
              <ArrowRight className="h-3 w-3" />
              <span>Sales</span>
              <ArrowRight className="h-3 w-3" />
              <span>Onboarding</span>
              <ArrowRight className="h-3 w-3" />
              <span>Retention</span>
              <ArrowRight className="h-3 w-3" />
              <span>Reactivation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          GOHIGHLEVEL SERVICES FOR THE ENTIRE CUSTOMER JOURNEY
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              GoHighLevel Services for the<br />
              <span className="text-[#0E9BF0]">Entire Customer Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {customerJourney.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-[#0E9BF0]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1C2E4A] mb-2">{item.stage}</h3>
                      <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          WHICH GOHIGHLEVEL SERVICE DO YOU NEED?
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Which GoHighLevel<br />
              <span className="text-[#0E9BF0]">Service Do You Need?</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {decisionGuide.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group flex items-center justify-between bg-[#F4F7FA] border border-[#E8EDF4] rounded-xl p-5 hover:border-[#0E9BF0] hover:bg-white hover:shadow-[0_8px_30px_rgba(14,155,240,0.1)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="h-5 w-5 text-[#0E9BF0] flex-shrink-0" />
                  <span className="text-[0.9rem] text-[#4A5568]">{item.problem}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[0.85rem] font-semibold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors">{item.solution}</span>
                  <ChevronRight className="h-4 w-4 text-[#0E9BF0] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          BUILD THE FOUNDATION
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Build the <span className="text-[#0E9BF0]">Foundation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {foundationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="group bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(14,155,240,0.2)] transition-colors">
                      <Icon className="h-6 w-6 text-[#0E9BF0]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2">{service.title}</h3>
                      <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{service.description}</p>
                      <div className="mt-3 inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                        Learn More <ChevronRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          AUTOMATE THE CUSTOMER JOURNEY
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Automate the <span className="text-[#0E9BF0]">Customer Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {automationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="group bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(14,155,240,0.2)] transition-colors">
                      <Icon className="h-6 w-6 text-[#0E9BF0]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2">{service.title}</h3>
                      <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-[0.9rem] text-[#1C2E4A] font-semibold italic">
              The objective is not to send more messages. It is to send the right message based on what has already happened.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          ADD AI TO CUSTOMER COMMUNICATION
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Add AI to <span className="text-[#0E9BF0]">Customer Communication</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="group bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(14,155,240,0.2)] transition-colors">
                      <Icon className="h-6 w-6 text-[#0E9BF0]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2">{service.title}</h3>
                      <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          CONNECT THE SYSTEMS YOU ALREADY USE
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-6">
              Connect the Systems <span className="text-[#0E9BF0]">You Already Use</span>
            </h2>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-4">
              GoHighLevel rarely exists in isolation. Your business may depend on payment platforms, advertising systems, 
              spreadsheets, scheduling tools, communication platforms, internal applications, or other software.
            </p>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-6">
              We can connect GHL with the tools around it using available integrations, automation platforms, webhooks, and APIs. 
              Use native integrations where they are sufficient; build around APIs or webhooks where the workflow requires 
              something more specific.
            </p>
            <Link href="/services/integrations" className="inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.9rem] hover:gap-3 transition-all">
              Explore Integrations & API Development <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          MOVE YOUR BUSINESS TO GOHIGHLEVEL
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-6">
              Move Your Business <span className="text-[#0E9BF0]">to GoHighLevel</span>
            </h2>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-4">
              Changing platforms is more complicated than exporting contacts and importing them somewhere else.
            </p>
            <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-6">
              A migration can involve source-platform auditing, contact and field mapping, pipeline reconstruction, 
              workflow recreation, forms and funnel rebuilding, integration reconnection, tracking setup, testing, 
              team training, and cutover planning.
            </p>
            <p className="text-[0.85rem] text-[#4A5568] leading-relaxed mb-6 italic">
              Source-specific migration pages should remain the deeper destinations for HubSpot, ClickFunnels, 
              ActiveCampaign, Kajabi, Mailchimp, and other platform-specific searches.
            </p>
            <Link href="/services/migration" className="inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-[0.9rem] hover:gap-3 transition-all">
              Explore GoHighLevel Migration Services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          BUILD ADVANCED GOHIGHLEVEL SYSTEMS
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Build Advanced <span className="text-[#0E9BF0]">GoHighLevel Systems</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advancedSystems.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="group bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(14,155,240,0.2)] transition-colors">
                      <Icon className="h-6 w-6 text-[#0E9BF0]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2">{service.title}</h3>
                      <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{service.description}</p>
                      <div className="mt-3 inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                        Learn More <ChevronRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          TRAIN YOUR TEAM OR MANAGE GHL FOR YOU
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Train Your Team or <span className="text-[#0E9BF0]">Manage GHL for You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {trainingAndManagement.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="group bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(14,155,240,0.2)] transition-colors">
                      <Icon className="h-6 w-6 text-[#0E9BF0]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2">{service.title}</h3>
                      <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          GOHIGHLEVEL SOLUTIONS FOR DIFFERENT BUSINESS MODELS
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              GoHighLevel Solutions for<br />
              <span className="text-[#0E9BF0]">Different Business Models</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {businessModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <div key={index} className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#0E9BF0]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1C2E4A] mb-2">{model.title}</h3>
                      <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{model.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT WE ACTUALLY IMPLEMENT
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              What We <span className="text-[#0E9BF0]">Actually Implement</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {implementationAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-[#0E9BF0]" />
                  </div>
                  <span className="text-[0.75rem] font-semibold text-[#1C2E4A]">{area.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          HOW OUR GOHIGHLEVEL IMPLEMENTATION PROCESS WORKS
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              How Our GoHighLevel<br />
              <span className="text-[#0E9BF0]">Implementation Process Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2E4A] text-[#F8D000] flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <Icon className="h-5 w-5 text-[#0E9BF0]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C2E4A] mb-2">{item.title}</h3>
                  <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          WHY BUSINESSES CHOOSE GHL SCALE UP
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Why Choose Us
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Why Businesses Trust<br />
              <span className="text-[#0E9BF0]">GHL Scale Up</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: 'bg-[rgba(14,155,240,0.1)]',
                green: 'bg-[rgba(37,201,125,0.1)]',
                yellow: 'bg-[rgba(248,208,0,0.12)]'
              };
              return (
                <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center">
                  <div className={`w-14 h-14 rounded-full ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-7 w-7 text-[#1C2E4A]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C2E4A] mb-2">{item.title}</h3>
                  <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Verified Claims */}
          <div className="max-w-2xl mx-auto mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-[#E8EDF4] rounded-full px-6 py-3">
              <Award className="h-4 w-4 text-[#F8D000]" />
              <span className="text-sm text-[#4A5568]">
                <strong className="text-[#1C2E4A]">200+</strong> projects · <strong className="text-[#1C2E4A]">50+</strong> active clients · <strong className="text-[#1C2E4A]">6</strong> countries · <strong className="text-[#1C2E4A]">5+</strong> years
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CLIENT RESULTS & CASE STUDIES
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Client Results & <span className="text-[#0E9BF0]">Case Studies</span>
            </h2>
            <p className="text-[0.9rem] text-[#4A5568]">
              Verified case studies only. Real outcomes for real businesses.
            </p>
          </div>
        </div>
        <CaseStudies caseStudies={caseStudies} />
      </section>

      {/* ============================================
          VIDEO TESTIMONIALS
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Video Testimonials
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              What Our Clients <span className="text-[#0E9BF0]">Say</span>
            </h2>
          </div>
        </div>
        <Testimonials testimonials={testimonials} />
      </section>

      {/* ============================================
          WHEN SHOULD YOU HIRE A GOHIGHLEVEL SERVICE PROVIDER?
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              When Should You Hire a<br />
              <span className="text-[#0E9BF0]">GoHighLevel Service Provider?</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-3">
            {whenToHire.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#F4F7FA] rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span className="text-[0.85rem] text-[#4A5568]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FREQUENTLY ASKED QUESTIONS
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Frequently Asked <span className="text-[#0E9BF0]">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white border border-[#E8EDF4] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#F4F7FA] transition-colors">
                  <span className="text-[0.9rem] font-semibold text-[#1C2E4A] pr-4">{faq.question}</span>
                  <ChevronRight className="h-4 w-4 text-[#0E9BF0] group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[0.85rem] text-[#4A5568] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="bg-[#1C2E4A] py-16 md:py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-4">
            Build the GoHighLevel System<br />
            <span className="text-[#F8D000]">Your Business Actually Needs</span>
          </h2>
          <p className="text-[0.95rem] font-light text-white/60 max-w-[600px] mx-auto mb-4 leading-relaxed">
            You don't need every feature inside GoHighLevel. You need the right features, connected in the right way, 
            around the way your business operates.
          </p>
          <p className="text-[0.95rem] font-light text-white/60 max-w-[600px] mx-auto mb-8 leading-relaxed">
            Tell us what you're trying to build. We'll help you determine what your GoHighLevel system actually needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3 rounded-lg text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center gap-2">
              Book Your Free Strategy Call <ChevronRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="bg-transparent text-white px-8 py-3 rounded-lg text-[0.9rem] font-medium border border-white/20 hover:border-white/30 hover:bg-white/5 transition-all inline-flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              Talk to a GoHighLevel Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}