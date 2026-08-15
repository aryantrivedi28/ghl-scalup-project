// app/services/workflow-automation/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import {
  Zap,
  GitBranch,
  Send,
  UserCheck,
  Bell,
  BarChart3,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Settings,
  Calendar,
  Users,
  RefreshCw,
  FileText,
  Code,
  AlertTriangle,
  Briefcase,
  Home,
  Building2,
  Headphones,
  Laptop,
  Sparkles,
  Layers,
  Shield,
  Target,
  Watch,
  Phone,
  Mail,
  Globe,
  Repeat,
  ListChecks,
  GitPullRequest,
  Workflow
} from 'lucide-react';
import { generateFaqSchema } from '@/lib/faqSchema';

export const metadata = {
  title: 'GoHighLevel Workflow Automation Services | GHL Scale Up',
  description: 'Get GoHighLevel workflow automation services built by GHL experts. Automate lead follow-ups, nurturing, booking, routing, and CRM workflows across email, SMS, and WhatsApp.',
  keywords: 'GoHighLevel workflow automation, GHL marketing automation, trigger-based workflows, GHL automation agency, GHL automation services',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/workflow-automation',
  },
};

// Service Schema Component
const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GoHighLevel Workflow Automation Services",
    "alternateName": "GHL Automation Services",
    "description": "GHL Scale Up provides GoHighLevel workflow automation services for agencies and businesses that want to automate lead follow-ups, nurturing, appointment booking, lead routing, and CRM processes. Our GoHighLevel experts design, build, test, and optimize custom workflows across email, SMS, WhatsApp, pipelines, calendars, integrations, and other parts of your customer journey.",
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
    "serviceType": "Marketing Automation Implementation",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Marketing Agencies, Service Businesses, Sales Teams"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free automation consultation"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function WorkflowAutomationPage() {
  // Related blog posts for this service
  const relatedBlogs = [
    {
      slug: 'how-to-set-up-gohighlevel-workflow-automation',
      title: 'How to Set Up GoHighLevel Workflow Automation',
      excerpt: 'A step-by-step guide to GoHighLevel workflow automation. Learn what workflows are, how triggers and actions work, and how to build effective automation systems.',
      readTime: '19 min read',
      date: 'May 6, 2026'
    },
    {
      slug: 'gohighlevel-funnel-builder-features',
      title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use',
      excerpt: 'Discover the GoHighLevel funnel builder features most agencies overlook version control, global sections, and more.',
      readTime: '9 min read',
      date: 'April 7, 2026'
    },
    {
      slug: 'gohighlevel-conversational-ai-data-storage',
      title: 'Does GoHighLevel Conversation AI Save Data to Your CRM?',
      excerpt: 'GoHighLevel Conversation AI does save some data to your CRM. Here\'s exactly what gets captured and what doesn\'t.',
      readTime: '15 min read',
      date: 'May 12, 2026'
    }
  ];

  const faqs = [
    { q: 'What does a GoHighLevel automation agency do?', a: 'A GoHighLevel automation agency designs, builds, tests, and optimizes workflows inside GoHighLevel around a business\'s sales and customer journey. This can include lead capture, follow-up, nurturing, appointment booking, pipeline automation, lead routing, onboarding, reactivation, notifications, and integrations. GHL Scale Up provides these services for agencies and businesses.' },
    { q: 'What can you automate with GoHighLevel?', a: 'You can automate many repetitive parts of a lead and customer journey, including lead follow-up, nurturing, appointment reminders, pipeline updates, lead routing, internal tasks, onboarding, reactivation, review requests, and other supported processes. The exact automation depends on your business process and GHL configuration.' },
    { q: 'Can you build custom GoHighLevel workflows?', a: 'Yes. We build custom workflows based on your lead sources, sales process, customer journey, pipeline stages, communication requirements, business rules, and integrations.' },
    { q: 'Can you fix an existing GoHighLevel workflow?', a: 'Yes. We can audit existing workflows to identify trigger problems, incorrect conditions, timing issues, conflicting workflows, broken actions, data problems, and other logic issues, then recommend or implement the required fixes.' },
    { q: 'How long does GoHighLevel automation setup take?', a: 'The timeline depends on the number and complexity of workflows, integrations, data requirements, and testing needed. A simple workflow can be implemented faster than a multi-stage automation system with several branches and integrations. We provide a project timeline after reviewing the requirements.' },
    { q: 'How much does GoHighLevel automation cost?', a: 'Pricing depends on the scope and complexity of the automation project. We consider workflows, integrations, channels, custom logic, existing setup, migration requirements, and testing before providing a quote.' },
    { q: 'Can you automate lead follow-up in GoHighLevel?', a: 'Yes. Lead follow-up can be triggered by events such as form submissions or other supported lead activity and can include automated communication, assignments, pipeline updates, notifications, qualification steps, and nurture sequences.' },
    { q: 'Can you automate appointments in GoHighLevel?', a: 'Yes. Appointment-related workflows can support confirmations, reminders, follow-up, rescheduling communication, no-show processes, internal notifications, and other steps in the appointment journey.' },
    { q: 'Can you build GoHighLevel automation for marketing agencies?', a: 'Yes. We work with agencies that need client lead management, onboarding, reusable workflows, sub-account processes, nurture sequences, appointment automation, pipeline management, and scalable implementation.' },
    { q: 'Can GoHighLevel workflows be reused across clients?', a: 'Where the workflow structure is appropriate, automation can be designed for repeatable deployment across client sub-accounts. We focus on clean architecture, documentation, testing, and maintainability so the system can be adapted rather than blindly copied.' },
    { q: 'Can you migrate automation from another CRM to GoHighLevel?', a: 'Yes. Where the source platform and requirements allow it, we can map the existing automation logic and rebuild the relevant processes in GoHighLevel. Migration scope depends on the source system, integrations, data, and workflow complexity.' },
    { q: 'Do you provide ongoing GoHighLevel automation support?', a: 'Yes. Depending on the engagement, we can support workflow optimization, troubleshooting, changes, new automation requirements, and ongoing GHL management.' },
    { q: 'Why should I hire GHL Scale Up for GoHighLevel automation?', a: 'GHL Scale Up specializes in GoHighLevel and has delivered 200+ GHL projects across six countries. Our broader capabilities across CRM, automation, AI, funnels, SaaS, integrations, migration, and training allow us to build automation as part of a complete GHL system rather than treating each workflow as an isolated task.' }
  ];

  // Generate FAQ Schema
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      {/* Add Service Schema to Head */}
      <ServiceSchema />

      {/* Add FAQ Schema to Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'Workflow Automation Services' }]} />

      {/* ====== H1 + HERO ====== */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                GHL Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                GoHighLevel<br />
                <span className="text-[#F8D000]">Workflow Automation Services</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/70 leading-relaxed max-w-[560px] mb-8">
                GHL Scale Up provides GoHighLevel workflow automation services for agencies and businesses that want to automate lead follow-ups, nurturing, appointment booking, lead routing, and CRM processes. Our GoHighLevel experts design, build, test, and optimize custom workflows across email, SMS, WhatsApp, pipelines, calendars, integrations, and other parts of your customer journey.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Talk to a GoHighLevel Automation Expert →
                </Link>
                <Link href="/services" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  See Our GoHighLevel Services
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 mt-6 pt-6 border-t border-white/10 text-[0.8rem] text-white/50">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D000]" /> 200+ GHL projects delivered</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D000]" /> 50+ agencies served</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D000]" /> 6 countries</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D000]" /> 5+ years of GoHighLevel expertise</span>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Why GHL Scale Up</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.2rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">GHL</div>
                  <div className="text-[0.78rem] text-white/50">Core platform specialization</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.2rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">GHL projects delivered</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.2rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">50+</div>
                  <div className="text-[0.78rem] text-white/50">Agencies served</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.2rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">6</div>
                  <div className="text-[0.78rem] text-white/50">Countries with GHL implementations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 5. IMMEDIATE VALUE PROPOSITION ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Why GHL Scale Up
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Why Choose GHL Scale Up for<br />
              <span className="text-[#0E9BF0]">GoHighLevel Automation?</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
              GoHighLevel workflows are easy to start and difficult to architect well at scale. The right automation needs more than a sequence of triggers and actions—it needs a clear customer journey, reliable logic, clean CRM data, appropriate timing, testing, and ongoing optimization. GHL Scale Up specializes in building GoHighLevel systems that connect those pieces into a working process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8F9FB] rounded-xl p-7 border border-[#E8EDF4]">
              <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3.5 text-[#0E9BF0]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">GoHighLevel-First Specialists</h3>
              <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">GoHighLevel is our core platform. We work inside GHL across CRM, workflows, funnels, calendars, communications, AI, SaaS, integrations, and reporting. That platform focus means our team can design automation around how GoHighLevel actually works instead of forcing your process into a generic automation framework.</p>
            </div>

            <div className="bg-[#F8F9FB] rounded-xl p-7 border border-[#E8EDF4]">
              <div className="w-12 h-12 rounded-xl bg-[rgba(37,201,125,0.1)] flex items-center justify-center mb-3.5 text-[#25C97D]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">We Design the System Before We Build the Workflow</h3>
              <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">A workflow should support a business outcome, not simply contain as many actions as possible. Before implementation, we map the trigger, customer journey, decision points, handoffs, follow-up requirements, exceptions, and desired outcome. Then we translate that logic into GoHighLevel workflows.</p>
            </div>

            <div className="bg-[#F8F9FB] rounded-xl p-7 border border-[#E8EDF4]">
              <div className="w-12 h-12 rounded-xl bg-[rgba(248,208,0,0.12)] flex items-center justify-center mb-3.5 text-[#F8D000]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">Built, Tested, and Optimized for Real Use</h3>
              <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">We don't stop when a workflow is switched on. We test triggers, conditions, timing, branches, communications, pipeline changes, assignments, integrations, and edge cases before launch. After implementation, workflows can be reviewed and optimized as your business, offers, team, and lead volume change.</p>
            </div>

            <div className="bg-[#F8F9FB] rounded-xl p-7 border border-[#E8EDF4]">
              <div className="w-12 h-12 rounded-xl bg-[rgba(156,106,255,0.1)] flex items-center justify-center mb-3.5 text-[#9C6AFF]">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">Built for Agencies That Need to Scale</h3>
              <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">For marketing agencies, we can structure workflows so they are easier to document, replicate, test, and deploy across client sub-accounts. The goal is to turn successful automation into a repeatable system rather than rebuilding the same logic from scratch for every client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. DIRECT ANSWER SECTION ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[780px] mx-auto">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Understanding GHL Automation
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              What Is GoHighLevel<br />
              <span className="text-[#0E9BF0]">Workflow Automation?</span>
            </h2>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              GoHighLevel workflow automation uses triggers, conditions, and actions to automatically move contacts through a defined business process. A workflow can start when an event occurs—such as a form submission, appointment, payment, pipeline change, or other supported trigger—and then perform actions such as sending communications, updating contact records, assigning tasks, moving opportunities, or directing the contact through different paths.
            </p>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed">
              The value is not simply that tasks happen automatically. A well-designed workflow makes the right action happen at the right time based on what the contact has done, what stage they are in, and what should happen next. <strong className="text-[#1C2E4A]">GHL Scale Up builds these workflows around your actual sales and customer journey.</strong>
            </p>
            <div className="mt-6 p-5 bg-white rounded-xl border border-[#E8EDF4]">
              <p className="text-[0.8rem] text-[#5C6880] font-medium">
                <span className="text-[#0E9BF0]">→</span> Looking for a detailed setup guide? 
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">How to Set Up GoHighLevel Workflow Automation →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 7. WHAT CAN YOU AUTOMATE ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Automation Capabilities
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              What Can You Automate<br />
              <span className="text-[#0E9BF0]">in GoHighLevel?</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
              GoHighLevel can automate far more than a basic email follow-up. We use workflows to connect lead capture, communication, CRM updates, appointments, pipelines, team tasks, customer onboarding, reactivation, and other business processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Zap className="w-5 h-5" />, color: 'blue', title: 'Lead Capture & Instant Follow-Up', description: 'Automatically respond when a new lead enters your CRM. Depending on the source and your process, the workflow can create or update the contact, send an immediate message, notify the team, create an opportunity, assign ownership, and start the appropriate nurture sequence.' },
              { icon: <Send className="w-5 h-5" />, color: 'green', title: 'Lead Nurturing', description: 'Build multi-step email, SMS, and WhatsApp follow-up sequences that adapt to contact behavior. Workflows can use waits, conditions, engagement signals, appointment status, tags, and other data to determine what happens next.' },
              { icon: <Calendar className="w-5 h-5" />, color: 'yellow', title: 'Appointment Booking & Reminders', description: 'Automate booking confirmations, reminders, rescheduling communication, no-show follow-up, post-appointment messages, and internal notifications so prospects and customers receive consistent communication throughout the appointment journey.' },
              { icon: <BarChart3 className="w-5 h-5" />, color: 'blue', title: 'Pipeline & Opportunity Automation', description: 'Automate opportunity updates, stage changes, task creation, assignment, notifications, and follow-up based on pipeline activity. This reduces manual CRM administration and keeps the sales process moving.' },
              { icon: <Users className="w-5 h-5" />, color: 'green', title: 'Lead Qualification & Routing', description: 'Route leads based on information such as form responses, service type, location, lead source, tags, custom fields, or other business rules. The workflow can then assign the right user, pipeline, opportunity stage, and follow-up path.' },
              { icon: <UserCheck className="w-5 h-5" />, color: 'yellow', title: 'Client Onboarding', description: 'Trigger onboarding tasks, welcome communication, forms, reminders, internal notifications, and follow-ups after a customer becomes a client. This creates a consistent handoff from sales to delivery.' },
              { icon: <RefreshCw className="w-5 h-5" />, color: 'blue', title: 'Reactivation & Win-Back', description: 'Identify leads or customers who have gone inactive and place them into targeted reactivation sequences. Different paths can be used depending on whether the person responds, books, clicks, or remains inactive.' },
              { icon: <MessageCircle className="w-5 h-5" />, color: 'green', title: 'Review & Reputation Requests', description: 'Trigger review requests after appropriate customer milestones, appointments, purchases, or completed services, while routing internal follow-up when a customer needs support.' },
              { icon: <Bell className="w-5 h-5" />, color: 'yellow', title: 'Internal Team Automation', description: 'Create tasks, assign responsibilities, send internal notifications, and move information between team members automatically when important customer or pipeline events occur.' },
              { icon: <Code className="w-5 h-5" />, color: 'blue', title: 'Integrations & Data Workflows', description: 'Connect GoHighLevel workflows with other tools and data sources where required. Depending on the project, this may involve webhooks, APIs, or integration platforms such as Zapier or Make.' },
            ].map((item, index) => (
              <div key={index} className="bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]' :
                    item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]' : 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]'
                  }`}>
                  {item.icon}
                </div>
                <h3 className="text-[0.88rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 8. REAL WORKFLOW EXAMPLES ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Examples
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              GoHighLevel Automation<br />
              <span className="text-[#0E9BF0]">Examples We Build</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
              The best way to understand workflow automation is to see how individual triggers and actions work together. Below are examples of common automation systems we can build and customize.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E8EDF4] rounded-xl p-6">
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">New Lead Speed-to-Lead Workflow</h3>
              <p className="text-[0.82rem] text-[#4A5568] leading-relaxed mb-3">
                <strong className="text-[#1C2E4A]">Workflow:</strong> Form submission → create/update contact → assign lead → create opportunity → send immediate SMS/email → notify sales team → wait → check appointment status → continue nurture or stop when the desired outcome occurs.
              </p>
              <p className="text-[0.78rem] text-[#5C6880]"><strong className="text-[#1C2E4A]">Best for:</strong> Useful for businesses where response speed and consistent follow-up directly affect lead conversion.</p>
            </div>

            <div className="bg-white border border-[#E8EDF4] rounded-xl p-6">
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">Appointment Reminder & No-Show Workflow</h3>
              <p className="text-[0.82rem] text-[#4A5568] leading-relaxed mb-3">
                <strong className="text-[#1C2E4A]">Workflow:</strong> Appointment booked → confirmation → timed reminder → appointment status check → reminder before appointment → if no-show, send rescheduling message → notify team → continue follow-up until the contact books or exits the process.
              </p>
              <p className="text-[0.78rem] text-[#5C6880]"><strong className="text-[#1C2E4A]">Best for:</strong> Useful for agencies, clinics, consultants, home services, and other appointment-driven businesses.</p>
            </div>

            <div className="bg-white border border-[#E8EDF4] rounded-xl p-6">
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">Lead Nurture Workflow</h3>
              <p className="text-[0.82rem] text-[#4A5568] leading-relaxed mb-3">
                <strong className="text-[#1C2E4A]">Workflow:</strong> Lead enters nurture → send educational or offer-related communication → wait → evaluate engagement → branch based on response/behavior → prompt booking → notify sales when buying intent increases.
              </p>
              <p className="text-[0.78rem] text-[#5C6880]"><strong className="text-[#1C2E4A]">Best for:</strong> Useful when prospects need multiple touches before they are ready to speak with sales.</p>
            </div>

            <div className="bg-white border border-[#E8EDF4] rounded-xl p-6">
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">Lead Qualification & Routing Workflow</h3>
              <p className="text-[0.82rem] text-[#4A5568] leading-relaxed mb-3">
                <strong className="text-[#1C2E4A]">Workflow:</strong> Lead submits information → evaluate responses → apply tags/custom fields → determine lead type → assign user/team → place opportunity in the appropriate pipeline → trigger relevant follow-up.
              </p>
              <p className="text-[0.78rem] text-[#5C6880]"><strong className="text-[#1C2E4A]">Best for:</strong> Useful for agencies and businesses receiving leads from multiple markets, services, locations, or sales teams.</p>
            </div>

            <div className="bg-white border border-[#E8EDF4] rounded-xl p-6">
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">Client Onboarding Workflow</h3>
              <p className="text-[0.82rem] text-[#4A5568] leading-relaxed mb-3">
                <strong className="text-[#1C2E4A]">Workflow:</strong> Deal marked won → send welcome communication → create onboarding tasks → collect required information → notify delivery team → send reminders → track completion → trigger next stage.
              </p>
              <p className="text-[0.78rem] text-[#5C6880]"><strong className="text-[#1C2E4A]">Best for:</strong> Useful for agencies, SaaS businesses, consultants, and service companies that need a repeatable handoff from sales to delivery.</p>
            </div>

            <div className="bg-white border border-[#E8EDF4] rounded-xl p-6">
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">Lead Reactivation Workflow</h3>
              <p className="text-[0.82rem] text-[#4A5568] leading-relaxed mb-3">
                <strong className="text-[#1C2E4A]">Workflow:</strong> Identify inactive lead → send reactivation message → wait → check engagement → branch into booking/follow-up/exit path → notify sales when a lead re-engages.
              </p>
              <p className="text-[0.78rem] text-[#5C6880]"><strong className="text-[#1C2E4A]">Best for:</strong> Useful for businesses with large databases of old or inactive leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 9. AGENCY SECTION ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                For Agencies
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                GoHighLevel Workflow Automation<br />
                <span className="text-[#0E9BF0]">for Marketing Agencies</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-3">
                Marketing agencies have a different automation challenge: the system has to work for the agency and for its clients. We build GoHighLevel workflows that can support lead management, client onboarding, sales processes, communication, reporting, and repeatable delivery across sub-accounts.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                When an automation needs to be used across multiple clients, we focus on clean naming, documentation, reusable logic, testing, and a structure that can be maintained as the agency grows. Where appropriate, workflows can be designed with snapshots and repeatable deployment in mind.
              </p>
              <p className="text-[0.85rem] font-semibold text-[#1C2E4A] mb-2">Agency automation services include:</p>
              <div className="grid grid-cols-2 gap-2 text-[0.82rem] text-[#4A5568]">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Client lead capture and follow-up</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Appointment and calendar automation</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Lead qualification and routing</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Client onboarding</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Pipeline and opportunity management</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Reactivation campaigns</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Internal agency notifications and tasks</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Reusable workflow structures</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Workflow documentation and SOPs</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Automation audits and optimization</span>
              </div>
              <div className="mt-4 p-4 bg-[#F4F7FA] rounded-lg">
                <p className="text-[0.8rem] text-[#5C6880]">
                  <Link href="/services/gohighlevel-saas-mode" className="text-[#0E9BF0] hover:underline">→ GoHighLevel SaaS Mode →</Link> for agencies looking to build repeatable client systems.
                </p>
              </div>
            </div>
            <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">Built for Agencies That Scale</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-4">We understand that agencies need systems that work across multiple clients. Our workflows are designed with:</p>
              <ul className="space-y-3 text-[0.85rem] text-white/70">
                <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#F8D000] flex-shrink-0 mt-0.5" /> Clean naming conventions for easy identification</li>
                <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#F8D000] flex-shrink-0 mt-0.5" /> Comprehensive documentation and SOPs</li>
                <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#F8D000] flex-shrink-0 mt-0.5" /> Reusable logic that can be deployed across sub-accounts</li>
                <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#F8D000] flex-shrink-0 mt-0.5" /> Testing frameworks that ensure consistency</li>
                <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#F8D000] flex-shrink-0 mt-0.5" /> Scalable architecture that grows with your agency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 10. BUSINESS TYPE ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              By Industry
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              GoHighLevel Automation<br />
              <span className="text-[#0E9BF0]">for Different Businesses</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
              The same GoHighLevel feature can support very different business processes. We customize the workflow around the business model, customer journey, sales cycle, and team structure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Briefcase className="w-5 h-5" />, color: 'blue', title: 'Marketing Agencies', description: 'Lead routing, client onboarding, sub-account workflows, reusable automation, nurture sequences, appointment booking, and internal task automation.' },
              { icon: <Home className="w-5 h-5" />, color: 'green', title: 'Home Services', description: 'Lead response, quote follow-up, appointment reminders, missed-call follow-up, pipeline updates, customer communication, and review requests.' },
              { icon: <Building2 className="w-5 h-5" />, color: 'yellow', title: 'Real Estate', description: 'New inquiry response, lead qualification, property-interest follow-up, appointment booking, nurture sequences, and pipeline automation.' },
              { icon: <Headphones className="w-5 h-5" />, color: 'blue', title: 'Coaches & Consultants', description: 'Application follow-up, consultation booking, nurture campaigns, reminders, onboarding, payment-related processes, and reactivation.' },
              { icon: <Laptop className="w-5 h-5" />, color: 'green', title: 'SaaS Businesses', description: 'Lead qualification, demo booking, onboarding, lifecycle communication, reactivation, customer follow-up, and recurring-process automation.' },
              { icon: <Sparkles className="w-5 h-5" />, color: 'yellow', title: 'Other Lead-Driven Businesses', description: 'We map the customer journey and identify repetitive processes that can be automated inside GoHighLevel or connected systems.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]' :
                    item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]' : 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]'
                  }`}>
                  {item.icon}
                </div>
                <h3 className="text-[0.88rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 11. SERVICES ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Our Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Our GoHighLevel<br />
              <span className="text-[#0E9BF0]">Workflow Automation Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: <Target className="w-5 h-5" />, color: 'blue', title: 'Automation Strategy & Workflow Mapping', description: 'We translate your business process into a workflow architecture before implementation. This includes identifying triggers, decision points, actions, handoffs, exceptions, and desired outcomes.' },
              { icon: <Workflow className="w-5 h-5" />, color: 'green', title: 'Custom Workflow Development', description: 'We build workflows around your exact requirements rather than forcing your business into a generic recipe.' },
              { icon: <Settings className="w-5 h-5" />, color: 'yellow', title: 'Existing Workflow Optimization', description: 'We review existing workflows for unnecessary steps, conflicting logic, poor timing, duplicate actions, and opportunities to improve reliability or conversion.' },
              { icon: <GitBranch className="w-5 h-5" />, color: 'blue', title: 'GoHighLevel Automation Setup', description: 'We configure triggers, actions, conditions, waits, assignments, communications, pipeline logic, and supporting CRM elements needed for the workflow to operate correctly.' },
              { icon: <RefreshCw className="w-5 h-5" />, color: 'green', title: 'Automation Migration', description: 'Where required, we help recreate relevant automation logic when moving processes from another CRM or marketing platform into GoHighLevel.' },
              { icon: <Code className="w-5 h-5" />, color: 'yellow', title: 'Integrations & Data Connections', description: 'We connect workflows with the other tools and data sources required by your process using available integrations, webhooks, APIs, or integration platforms.' },
              { icon: <Shield className="w-5 h-5" />, color: 'blue', title: 'Workflow Testing & QA', description: 'We test real scenarios, branches, timing, communications, contact updates, assignments, and edge cases before launch.' },
              { icon: <Repeat className="w-5 h-5" />, color: 'green', title: 'Ongoing Automation Management', description: 'As your business changes, workflows may need new branches, messaging, integrations, or logic. We can support ongoing optimization and management.' },
            ].map((item, index) => (
              <div key={index} className="bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]' :
                    item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]' : 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]'
                  }`}>
                  {item.icon}
                </div>
                <h3 className="text-[0.88rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 12. AUDIT & TROUBLESHOOTING ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Audit & Troubleshooting
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                GoHighLevel Automation<br />
                <span className="text-[#0E9BF0]">Audit & Troubleshooting</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Already have GoHighLevel workflows that are not working the way they should? You don't necessarily need to rebuild your entire account. We can audit the existing automation, identify where the logic is failing, and recommend or implement the required fixes.
              </p>
              <p className="text-[0.85rem] font-semibold text-[#1C2E4A] mb-2">Common problems we help diagnose:</p>
              <div className="grid grid-cols-2 gap-1.5 text-[0.8rem] text-[#4A5568]">
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Workflow not triggering</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Trigger firing incorrectly</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Contacts in wrong workflow</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Wrong conditional branches</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Wrong message timing</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Duplicate communications</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Contacts stuck in workflow</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Pipeline not updating</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Internal notifications failing</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Integration data issues</span>
              </div>
            </div>
            <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">Our Audit Process</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-[rgba(248,208,0,0.2)] flex items-center justify-center text-[0.7rem] font-bold text-[#F8D000] flex-shrink-0 mt-0.5">1</span>
                  <div><p className="text-[0.82rem] font-medium text-white">Trace workflow logic</p><p className="text-[0.75rem] text-white/50">Follow every path and condition</p></div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-[rgba(248,208,0,0.2)] flex items-center justify-center text-[0.7rem] font-bold text-[#F8D000] flex-shrink-0 mt-0.5">2</span>
                  <div><p className="text-[0.82rem] font-medium text-white">Review CRM data & conditions</p><p className="text-[0.75rem] text-white/50">Identify data mismatches</p></div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-[rgba(248,208,0,0.2)] flex items-center justify-center text-[0.7rem] font-bold text-[#F8D000] flex-shrink-0 mt-0.5">3</span>
                  <div><p className="text-[0.82rem] font-medium text-white">Test affected paths</p><p className="text-[0.75rem] text-white/50">Validate with live scenarios</p></div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-[rgba(248,208,0,0.2)] flex items-center justify-center text-[0.7rem] font-bold text-[#F8D000] flex-shrink-0 mt-0.5">4</span>
                  <div><p className="text-[0.82rem] font-medium text-white">Implement fixes</p><p className="text-[0.75rem] text-white/50">Make automation reliable again</p></div>
                </div>
              </div>
              <p className="text-[0.82rem] font-light text-white/60 leading-relaxed mt-5 pt-5 border-t border-white/10">
                We trace the workflow logic, review the relevant CRM data and conditions, test the affected paths, and make the required changes so the automation is reliable and maintainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 13. PROCESS ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Our Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Our GoHighLevel<br />
              <span className="text-[#0E9BF0]">Automation Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'Discovery & Business Process Audit', description: 'We understand your lead sources, customer journey, sales process, team responsibilities, existing CRM setup, and the repetitive tasks you want to eliminate.' },
              { num: '02', title: 'Workflow Strategy', description: 'We identify what should trigger an automation, what decisions need to be made, what should happen next, and where humans still need to be involved.' },
              { num: '03', title: 'Architecture & Mapping', description: 'We map triggers, actions, conditions, timing, branches, data fields, assignments, communications, and integrations before building.' },
              { num: '04', title: 'GoHighLevel Implementation', description: 'Our team builds the workflow inside your GHL environment and configures the supporting CRM elements required for it to work correctly.' },
              { num: '05', title: 'Testing & Quality Assurance', description: 'We test expected paths and edge cases, including trigger behavior, branches, timing, contact updates, communications, assignments, and integrations.' },
              { num: '06', title: 'Launch', description: 'After testing, the workflow is activated and monitored to make sure it behaves as intended in the live environment.' },
              { num: '07', title: 'Training & Documentation', description: 'Where required, we document the workflow and train your team so they understand what it does, how to monitor it, and when to request changes.' },
              { num: '08', title: 'Optimization', description: 'We can review performance and business feedback after launch and improve the workflow as your lead volume, offer, team, or process changes.' },
            ].map((step, index) => (
              <div key={index} className="flex gap-4 p-5 bg-[#F8F9FB] rounded-xl border border-[#E8EDF4] hover:border-[#0E9BF0] transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#1C2E4A] flex items-center justify-center text-[0.75rem] font-extrabold text-[#F8D000] flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[0.88rem] font-bold text-[#1C2E4A] mb-1">{step.title}</h3>
                  <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 14. WHY DIY ISN'T ENOUGH ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[780px] mx-auto">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Expertise Matters
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              Why Work With a<br />
              <span className="text-[#0E9BF0]">GoHighLevel Automation Expert?</span>
            </h2>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              Building a basic workflow in GoHighLevel is straightforward. Designing a reliable automation system around a real sales process is different. Problems often appear when multiple workflows interact, conditions overlap, data is inconsistent, timing is incorrect, or a workflow has to handle exceptions that were not considered during setup.
            </p>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              A specialist can look at the complete system rather than a single workflow. That means considering the CRM structure, pipeline stages, calendars, communication channels, integrations, team responsibilities, and the customer journey together.
            </p>
            <div className="p-5 bg-[#1C2E4A] rounded-xl text-white">
              <p className="text-[0.9rem] font-medium leading-relaxed">
                If automation is directly connected to lead response, appointments, sales, onboarding, or revenue, the goal should not be to build the most complicated workflow. The goal should be to build the simplest reliable system that produces the desired business outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 15. PROOF / WHY GHL SCALE UP ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Why Choose Us
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Why Agencies and Businesses<br />
              <span className="text-[#0E9BF0]">Choose GHL Scale Up</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Target className="w-5 h-5" />, color: 'blue', title: 'GoHighLevel Specialization', description: 'GHL is our core platform. We build across CRM, automation, funnels, AI, SaaS, integrations, reporting, and related GHL systems.' },
              { icon: <BarChart3 className="w-5 h-5" />, color: 'green', title: '200+ GHL Projects', description: 'Our experience spans more than 200 GHL projects. Use this as a proof point only while the number remains accurate.' },
              { icon: <Briefcase className="w-5 h-5" />, color: 'yellow', title: '50+ Agencies Served', description: 'Our experience includes working with marketing agencies and their GHL requirements. Keep the number updated if it changes.' },
              { icon: <Globe className="w-5 h-5" />, color: 'blue', title: '6 Countries', description: 'We have delivered GHL work across six countries, giving the team experience working with different markets and business models.' },
              { icon: <Layers className="w-5 h-5" />, color: 'green', title: 'End-to-End GHL Capability', description: 'Automation often depends on other parts of the platform. Our broader GHL capabilities include CRM setup, funnels, websites, AI, SaaS, integrations, reporting, training, and migration.' },
              { icon: <CheckCircle2 className="w-5 h-5" />, color: 'yellow', title: 'Implementation Ownership', description: 'The goal is not simply to provide instructions. We can take responsibility for planning, building, testing, and launching the required system.' },
            ].map((item, index) => (
              <div key={index} className="bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]' :
                    item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]' : 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]'
                  }`}>
                  {item.icon}
                </div>
                <h3 className="text-[0.88rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 16. CASE STUDY ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[780px] mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Case Study
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              GoHighLevel Automation<br />
              <span className="text-[#0E9BF0]">Case Study</span>
            </h2>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-6">
              See how GHL Scale Up approached GoHighLevel website setup and automation optimization for a service-based business, including custom workflows, follow-up, and email campaign improvements.
            </p>
            <Link
              href="/case-studies/gohighlevel-website-setup-and-automation-optimization-for-a-service-based-business"
              className="inline-flex items-center gap-2 bg-[#1C2E4A] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold hover:bg-[#2A4060] hover:-translate-y-[2px] transition-all"
            >
              Read the GoHighLevel Automation Case Study →
            </Link>
            <p className="text-[0.75rem] text-[#5C6880] mt-4 italic">
              Add additional automation case studies here as they become available. Each case study should include the client's problem, the workflow/system built, the implementation scope, and verified outcomes where available.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 17. COST ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[780px] mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Pricing
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              How Much Does GoHighLevel<br />
              <span className="text-[#0E9BF0]">Workflow Automation Cost?</span>
            </h2>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              The cost of GoHighLevel workflow automation depends on the number and complexity of workflows, the existing GHL setup, integrations, communication channels, custom logic, data requirements, testing, and whether you need a new system or optimization of an existing one.
            </p>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-6">
              For that reason, we scope automation projects around the actual workflow requirements instead of using one price for every business. After understanding your process, GHL Scale Up can provide a defined scope, timeline, and quote before implementation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0E9BF0] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold hover:bg-[#0B8AD8] hover:-translate-y-[2px] transition-all"
            >
              Need a quote for your automation? Talk to a GoHighLevel Automation Expert →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 18. FAQ ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              FAQ
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Frequently Asked<br />
              <span className="text-[#0E9BF0]">Questions</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#E8EDF4]">
                <details className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors">
                    {faq.q}
                    <span className="text-[0.7rem] text-[#8A9BB0] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed pt-2 pb-3">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 19. FINAL CTA ====== */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Automate Your<br />
            <span className="text-[#F8D000]">GoHighLevel System?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[580px] mx-auto mb-6 leading-relaxed">
            Tell us what you want to automate, what is currently slowing your team down, or where your existing GHL workflows are breaking. We'll review your requirements and recommend the right automation approach.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Talk to a GoHighLevel Automation Expert →
            </Link>
            <Link href="/contact" className="bg-transparent text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              Book a Free Strategy Call
            </Link>
          </div>
          <p className="text-[0.75rem] text-white/30 mt-4">
            30-minute consultation • Custom scope • Clear timeline • Transparent quote
          </p>
        </div>
      </div>

      {/* ====== 20. INTERNAL LINKING ====== */}
      <section className="py-6 bg-[#F8F9FB] border-y border-[#E8EDF4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3 md:gap-5 items-center text-[0.8rem]">
            <span className="font-semibold text-[#1C2E4A]">Related Services:</span>
            <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup</Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link href="/services/gohighlevel-saas-mode" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode</Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link href="/services/ai-chatbot" className="text-[#0E9BF0] hover:underline">GoHighLevel AI Automation</Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GoHighLevel Migration</Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link href="/services" className="text-[#0E9BF0] hover:underline">All GoHighLevel Services</Link>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-5 items-center text-[0.8rem] mt-2 pt-2 border-t border-[#E8EDF4]">
            <span className="font-semibold text-[#1C2E4A]">Resources:</span>
            <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation</Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link href="/case-studies/gohighlevel-website-setup-and-automation-optimization-for-a-service-based-business" className="text-[#0E9BF0] hover:underline">GoHighLevel Automation Case Study</Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Stop Chasing Leads.<br /><span class='hl-yellow'>Let Automation Do the Work.</span>"
        description="GHL Scale Up is a GoHighLevel specialist agency that builds, tests, and optimizes custom workflow automation systems. Your leads expect an instant response. Our automation systems deliver it every time."
        primaryText="Book Your Free Strategy Call →"
        primaryHref="/contact"
      />
    </>
  );
}