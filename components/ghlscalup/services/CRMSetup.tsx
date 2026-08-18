// app/services/crm-setup/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import {
  Layout,
  Calendar,
  FormInput,
  Zap,
  Users,
  Code,
  Mail,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Target,
  Layers,
  Shield,
  Briefcase,
  Home,
  Building2,
  Headphones,
  Laptop,
  Sparkles,
  GitBranch,
  Clock,
  Database,
  PenLine,
  Award,
  TrendingUp,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

export const metadata = {
  title: 'GoHighLevel CRM Setup Services | GHL Scale Up',
  description: 'Get expert GoHighLevel CRM setup services from GHL Scale Up. We configure pipelines, custom fields, calendars, workflows, integrations and more.',
  keywords: 'GoHighLevel CRM setup service, GHL CRM setup, GoHighLevel setup service, GoHighLevel implementation, GoHighLevel CRM setup, GoHighLevel CRM implementation',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/crm-setup',
  },
};

// Service Schema Component
const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GoHighLevel CRM Setup & Implementation Services",
    "alternateName": "GHL CRM Setup Services",
    "description": "GHL Scale Up provides done-for-you GoHighLevel CRM setup services for businesses, marketing agencies, and service providers. We configure your CRM, pipelines, custom fields, calendars, lead capture, workflows, integrations, and other core systems around your sales and customer journey.",
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
    "serviceType": "CRM Implementation",
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
      "description": "Free CRM setup consultation"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// FAQ Schema Component
const FaqSchema = () => {
  const faqs = [
    { q: 'What is a GoHighLevel CRM setup service?', a: 'A GoHighLevel CRM setup service helps businesses configure HighLevel around their sales and customer-management processes. This can include CRM architecture, pipelines, custom fields, calendars, lead capture, workflows, integrations, and reporting.' },
    { q: 'How much does GoHighLevel CRM setup cost?', a: 'The cost depends on the complexity of the implementation, the number of systems involved, integrations, automation requirements, and whether you\'re starting from scratch or improving an existing account. GHL Scale Up provides custom quotes based on the required scope.' },
    { q: 'How long does GoHighLevel setup take?', a: 'The timeline depends on the scope of the project. A basic CRM configuration is different from a complete implementation involving multiple pipelines, workflows, integrations, migration, and testing.' },
    { q: 'Can you set up an existing GoHighLevel account?', a: 'Yes. We can work with existing GoHighLevel accounts to audit the current configuration, reorganize the CRM, improve pipelines, rebuild workflows, and implement missing components.' },
    { q: 'Can you migrate my existing CRM to GoHighLevel?', a: 'Yes, where migration is part of the project, we can help structure and move relevant customer and sales data into GoHighLevel and configure the new CRM around it.' },
    { q: 'Can you set up GoHighLevel pipelines?', a: 'Yes. We can design and configure pipelines based on your actual sales process, including opportunity stages and related automation.' },
    { q: 'Can you set up GoHighLevel workflows?', a: 'Yes. Workflow setup can include lead follow-up, notifications, assignments, appointment processes, nurturing, pipeline actions, and other repetitive processes.' },
    { q: 'Can you integrate GoHighLevel with other software?', a: 'Yes. Integration requirements depend on the tools involved and the available integration methods, such as native integrations, webhooks, APIs, or supported third-party platforms.' },
    { q: 'Can you set up GoHighLevel for marketing agencies?', a: 'Yes. We work with marketing agencies that need client account setup, repeatable CRM structures, automation, onboarding systems, and other agency-specific GoHighLevel configurations.' },
    { q: 'Do you provide GoHighLevel training?', a: 'Training and documentation can be included depending on the project scope, helping your team understand the CRM structure and operate the system after launch.' },
    { q: 'Can you fix or optimize an existing GHL setup?', a: 'Yes. We can review an existing GoHighLevel environment, identify configuration and process issues, reorganize the CRM, and improve the parts of the system that are not working as intended.' }
  ];

  const schema = {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function CRMSetupPage() {
  const faqs = [
    { q: 'What is a GoHighLevel CRM setup service?', a: 'A GoHighLevel CRM setup service helps businesses configure HighLevel around their sales and customer-management processes. This can include CRM architecture, pipelines, custom fields, calendars, lead capture, workflows, integrations, and reporting.' },
    { q: 'How much does GoHighLevel CRM setup cost?', a: 'The cost depends on the complexity of the implementation, the number of systems involved, integrations, automation requirements, and whether you\'re starting from scratch or improving an existing account. GHL Scale Up provides custom quotes based on the required scope.' },
    { q: 'How long does GoHighLevel setup take?', a: 'The timeline depends on the scope of the project. A basic CRM configuration is different from a complete implementation involving multiple pipelines, workflows, integrations, migration, and testing.' },
    { q: 'Can you set up an existing GoHighLevel account?', a: 'Yes. We can work with existing GoHighLevel accounts to audit the current configuration, reorganize the CRM, improve pipelines, rebuild workflows, and implement missing components.' },
    { q: 'Can you migrate my existing CRM to GoHighLevel?', a: 'Yes, where migration is part of the project, we can help structure and move relevant customer and sales data into GoHighLevel and configure the new CRM around it.' },
    { q: 'Can you set up GoHighLevel pipelines?', a: 'Yes. We can design and configure pipelines based on your actual sales process, including opportunity stages and related automation.' },
    { q: 'Can you set up GoHighLevel workflows?', a: 'Yes. Workflow setup can include lead follow-up, notifications, assignments, appointment processes, nurturing, pipeline actions, and other repetitive processes.' },
    { q: 'Can you integrate GoHighLevel with other software?', a: 'Yes. Integration requirements depend on the tools involved and the available integration methods, such as native integrations, webhooks, APIs, or supported third-party platforms.' },
    { q: 'Can you set up GoHighLevel for marketing agencies?', a: 'Yes. We work with marketing agencies that need client account setup, repeatable CRM structures, automation, onboarding systems, and other agency-specific GoHighLevel configurations.' },
    { q: 'Do you provide GoHighLevel training?', a: 'Training and documentation can be included depending on the project scope, helping your team understand the CRM structure and operate the system after launch.' },
    { q: 'Can you fix or optimize an existing GHL setup?', a: 'Yes. We can review an existing GoHighLevel environment, identify configuration and process issues, reorganize the CRM, and improve the parts of the system that are not working as intended.' }
  ];

  return (
    <>
      {/* Add Service Schema */}
      <ServiceSchema />

      {/* Add FAQ Schema */}
      <FaqSchema />

      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'GoHighLevel CRM Setup' }]} />

      {/* ====== 3. HERO SECTION ====== */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(14,155,240,0.12)] border border-[rgba(14,155,240,0.2)] text-[#0E9BF0] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                GOHIGHLEVEL CRM SETUP SERVICES
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                GoHighLevel CRM Setup &<br />
                <span className="text-[#0E9BF0]">Implementation Services</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/70 leading-relaxed max-w-[560px] mb-4">
                Build a GoHighLevel CRM that actually fits the way your business operates.
              </p>
              <p className="text-[0.92rem] font-light text-white/60 leading-relaxed max-w-[560px] mb-4">
                GHL Scale Up provides done-for-you GoHighLevel CRM setup services for businesses, marketing agencies, and service providers. We configure your CRM, pipelines, custom fields, calendars, lead capture, workflows, integrations, and other core systems around your sales and customer journey.
              </p>
              <p className="text-[0.92rem] font-light text-white/60 leading-relaxed max-w-[560px] mb-6">
                Whether you're setting up GoHighLevel for the first time, migrating from another CRM, or fixing an existing GHL account, our GoHighLevel experts can build a clean, organized, and scalable system for your team.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#0E9BF0] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#0B8AD8] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(14,155,240,0.3)] transition-all">
                  Talk to a GoHighLevel Expert →
                </Link>
                <Link href="#quote" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  Get a Custom Setup Quote
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 mt-6 pt-6 border-t border-white/10 text-[0.8rem] text-white/50">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0E9BF0]" /> 200+ GHL Projects Delivered</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0E9BF0]" /> 50+ Agencies Served</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0E9BF0]" /> 6 Countries</span>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">What We Set Up</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[0.9rem] font-bold text-[#0E9BF0] min-w-[70px]">CRM</div>
                  <div className="text-[0.78rem] text-white/50">Full contact & opportunity structure</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[0.9rem] font-bold text-[#0E9BF0] min-w-[70px]">Pipelines</div>
                  <div className="text-[0.78rem] text-white/50">Custom sales pipeline setup</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[0.9rem] font-bold text-[#0E9BF0] min-w-[70px]">Fields</div>
                  <div className="text-[0.78rem] text-white/50">Custom fields & data structure</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[0.9rem] font-bold text-[#0E9BF0] min-w-[70px]">Calendars</div>
                  <div className="text-[0.78rem] text-white/50">Appointment & booking setup</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[0.9rem] font-bold text-[#0E9BF0] min-w-[70px]">Workflows</div>
                  <div className="text-[0.78rem] text-white/50">Automation & lead routing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 4. DIRECT ANSWER / AEO ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[780px] mx-auto">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Understanding GHL CRM Setup
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              What Is GoHighLevel<br />
              <span className="text-[#0E9BF0]">CRM Setup?</span>
            </h2>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              GoHighLevel CRM setup is the process of configuring HighLevel's CRM and connected tools around a business's sales, marketing, and customer-management processes.
            </p>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              A professional setup can include contact and data structure, pipelines, opportunity stages, custom fields, calendars, forms, workflows, lead routing, communication settings, integrations, and reporting.
            </p>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed">
              <strong className="text-[#1C2E4A]">GHL Scale Up's GoHighLevel CRM setup service goes beyond creating an account and turning on features.</strong> We structure the platform around how your business actually captures, qualifies, follows up with, and converts leads.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 5. WHY PROFESSIONAL SETUP MATTERS ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                WHY PROFESSIONAL SETUP MATTERS
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                GoHighLevel Is Powerful.<br />
                <span className="text-[#0E9BF0]">Your Setup Determines How Well It Works.</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                GoHighLevel brings CRM, pipelines, calendars, communication, automation, funnels, and other business tools into one platform. But simply having access to these features does not mean your CRM is properly configured.
              </p>
              <p className="text-[0.85rem] font-semibold text-[#1C2E4A] mb-2">A poorly structured GHL account can lead to:</p>
              <div className="grid grid-cols-2 gap-1.5 text-[0.8rem] text-[#4A5568]">
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Disorganized contacts</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Confusing pipelines</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Duplicate custom fields</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Wrong lead assignment</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Broken automations</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Missed follow-ups</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Poor visibility</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Manual work overload</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-[#F8D000]" /> Scaling difficulties</span>
              </div>
            </div>
            <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-3">The GHL Scale Up Difference</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-4">
                A professional GHL CRM setup service should solve the underlying architecture—not simply configure a few settings.
              </p>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">
                That's where GHL Scale Up comes in.
              </p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10">
                <div className="text-[1rem] font-extrabold text-[#0E9BF0] min-w-[70px]">→</div>
                <div className="text-[0.78rem] text-white/50">Structured architecture, not random settings</div>
              </div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10">
                <div className="text-[1rem] font-extrabold text-[#0E9BF0] min-w-[70px]">→</div>
                <div className="text-[0.78rem] text-white/50">Built around your actual business process</div>
              </div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10">
                <div className="text-[1rem] font-extrabold text-[#0E9BF0] min-w-[70px]">→</div>
                <div className="text-[0.78rem] text-white/50">Scalable for growth, not just today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. WHAT WE SET UP ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              What We Set Up
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              What Does Our GoHighLevel<br />
              <span className="text-[#0E9BF0]">CRM Setup Service Include?</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
              We configure the core components of your GoHighLevel environment based on your business processes and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Database className="w-5 h-5" />, color: 'blue', title: 'CRM & Contact Setup', description: 'We organize your contact database and determine how customer information should be captured, stored, segmented, and used throughout your GoHighLevel system.' },
              { icon: <PenLine className="w-5 h-5" />, color: 'green', title: 'Pipeline & Opportunity Setup', description: 'We build sales pipelines around your actual customer journey—from new lead through qualification, appointment, proposal, closed deal, onboarding, or other relevant stages.' },
              { icon: <Layout className="w-5 h-5" />, color: 'yellow', title: 'Custom Fields & Data Structure', description: 'We identify the information your business actually needs and configure the appropriate contact and opportunity fields so your CRM remains organized and usable as you scale.' },
              { icon: <Calendar className="w-5 h-5" />, color: 'blue', title: 'Calendar & Appointment Setup', description: 'We configure GoHighLevel calendars around your team\'s availability, appointment types, booking process, reminders, and assignment requirements.' },
              { icon: <FormInput className="w-5 h-5" />, color: 'green', title: 'Forms & Lead Capture', description: 'We connect your lead-capture systems to the CRM so information enters the right records and can trigger the appropriate follow-up and sales processes.' },
              { icon: <Zap className="w-5 h-5" />, color: 'yellow', title: 'Workflow & Automation Setup', description: 'We connect your CRM with GoHighLevel workflows to automate repetitive processes such as lead follow-up, internal notifications, lead assignment, appointment reminders, pipeline movement, nurturing, and re-engagement.' },
              { icon: <Users className="w-5 h-5" />, color: 'blue', title: 'Lead Routing & Assignment', description: 'We configure how new leads are assigned based on your business rules, including team members, locations, lead types, services, or other qualification criteria.' },
              { icon: <Code className="w-5 h-5" />, color: 'green', title: 'Integrations', description: 'We connect GoHighLevel with the tools your business already uses where required, helping your CRM become part of your broader technology stack rather than another isolated system.' },
              { icon: <Mail className="w-5 h-5" />, color: 'yellow', title: 'Communication Setup', description: 'We configure the communication elements needed for your customer journey, including email, SMS, and other supported communication workflows.' },
              { icon: <BarChart3 className="w-5 h-5" />, color: 'blue', title: 'Reporting & Visibility', description: 'We structure your CRM and pipelines so your team can understand where opportunities are, what needs attention, and how leads are progressing.' },
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

      {/* ====== 7. DIFFERENTIATOR ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[780px] mx-auto">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              DIFFERENTIATOR
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              More Than a GHL Setup.<br />
              <span className="text-[#0E9BF0]">It's a Complete CRM Implementation.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-[#E8EDF4]">
                <h4 className="text-[0.85rem] font-bold text-[#4A5568] mb-2">Basic GHL Setup</h4>
                <ul className="space-y-2 text-[0.82rem] text-[#5C6880]">
                  <li className="flex items-center gap-2"><span className="text-[#F8D000]">✗</span> Configures the platform</li>
                  <li className="flex items-center gap-2"><span className="text-[#F8D000]">✗</span> Generic configuration</li>
                  <li className="flex items-center gap-2"><span className="text-[#F8D000]">✗</span> One-size-fits-all approach</li>
                </ul>
              </div>
              <div className="bg-[#1C2E4A] rounded-xl p-6 text-white">
                <h4 className="text-[0.85rem] font-bold text-[#0E9BF0] mb-2">GHL Scale Up Implementation</h4>
                <ul className="space-y-2 text-[0.82rem] text-white/60">
                  <li className="flex items-center gap-2"><span className="text-[#25C97D]">✓</span> Configures around your business</li>
                  <li className="flex items-center gap-2"><span className="text-[#25C97D]">✓</span> Custom architecture</li>
                  <li className="flex items-center gap-2"><span className="text-[#25C97D]">✓</span> Business-specific approach</li>
                </ul>
              </div>
            </div>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              At GHL Scale Up, we start by understanding where your leads come from, how they are qualified, who handles them, what happens after a lead comes in, when follow-up should happen, how opportunities move through your sales pipeline, what happens after the sale, and what should be automated.
            </p>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed">
              We then translate those processes into your GoHighLevel CRM.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-[#E8EDF4] text-[0.78rem] text-[#5C6880]">
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">Discovery</span>
              <span className="text-black/90 text-xl text-bold">→</span>
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">CRM Architecture</span>
              <span className="text-black/90 text-xl text-bold">→</span>
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">Pipeline</span>
              <span className="text-black/90 text-xl text-bold">→</span>
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">Lead Capture</span>
              <span className="text-black/90 text-xl text-bold">→</span>
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">Automation</span>
              <span className="text-black/90 text-xl text-bold">→</span>
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">Calendar</span>
              <span className="text-black/90 text-xl text-bold">→</span>
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">Integrations</span>
              <span className="text-black/90 text-xl text-bold">→</span>
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">Testing</span>
              <span className="text-black/90 text-xl text-bold">→</span>
              <span className="bg-white px-4 py-2 rounded-full border border-[#E8EDF4]">Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 8. GOHIGHLEVEL IMPLEMENTATION ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                GOHIGHLEVEL IMPLEMENTATION
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                GoHighLevel<br />
                <span className="text-[#0E9BF0]">Implementation Services</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Need more than a basic CRM setup?
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Our GoHighLevel implementation services help businesses build the complete operational system around HighLevel.
              </p>
              <p className="text-[0.85rem] font-semibold text-[#1C2E4A] mb-2">Our implementation can include:</p>
              <div className="grid grid-cols-2 gap-1.5 text-[0.8rem] text-[#4A5568]">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Business process mapping</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> CRM architecture</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Contact structure</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Custom fields</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Pipelines</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Opportunity stages</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Lead capture</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Calendars</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Workflows</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Lead routing</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Email and SMS</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Integrations</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Reporting</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Testing</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Team training</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Documentation</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D]" /> Launch support</span>
              </div>
            </div>
            <div className="bg-[#F4F7FA] rounded-2xl p-8 border border-[#E8EDF4]">
              <div className="bg-[#1C2E4A] rounded-xl p-6 text-white">
                <h3 className="text-[1.1rem] font-bold mb-3">The Goal</h3>
                <p className="text-[0.9rem] font-light text-white/70 leading-relaxed mb-4">
                  The goal isn't simply to make your GHL account look complete.
                </p>
                <p className="text-[0.9rem] font-light text-white/70 leading-relaxed">
                  The goal is to make it <strong className="text-[#F8D000]">work</strong>.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0E9BF0] text-white px-6 py-3 rounded-[10px] text-[0.85rem] font-bold hover:bg-[#0B8AD8] transition-all">
                    Talk to a GoHighLevel Expert →
                  </Link>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg border border-[#E8EDF4]">
                <p className="text-[0.78rem] text-[#5C6880]">
                  <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">→ GoHighLevel Workflow Automation</Link> — connect your CRM with automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 9. NEW & EXISTING ACCOUNTS ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              New & Existing Accounts
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              GoHighLevel Setup for<br />
              <span className="text-[#0E9BF0]">New & Existing Accounts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-[#E8EDF4]">
              <div className="w-14 h-14 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-4 text-[#0E9BF0]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#1C2E4A] mb-3">Starting GoHighLevel From Scratch</h3>
              <p className="text-[0.88rem] font-light text-[#4A5568] leading-relaxed">
                We'll build the foundation for you. Instead of spending weeks figuring out what should be configured, how your CRM should be structured, or which automations you actually need, our team can create the core system around your business.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#E8EDF4]">
              <div className="w-14 h-14 rounded-xl bg-[rgba(37,201,125,0.1)] flex items-center justify-center mb-4 text-[#25C97D]">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#1C2E4A] mb-3">Already Have a GoHighLevel Account?</h3>
              <p className="text-[0.88rem] font-light text-[#4A5568] leading-relaxed">
                You don't necessarily need to start over. We can review your existing setup, identify structural problems, clean up your CRM, rebuild pipelines, improve workflows, configure missing components, and connect the systems you need.
              </p>
              <p className="text-[0.88rem] font-light text-[#4A5568] leading-relaxed mt-3">
                Our GHL setup service can work with both new and existing GoHighLevel environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 10. FOR MARKETING AGENCIES ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                FOR MARKETING AGENCIES
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                GoHighLevel CRM Setup<br />
                <span className="text-[#0E9BF0]">for Marketing Agencies</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Marketing agencies often need more than a standard CRM. You may need to manage multiple client accounts, create repeatable systems, standardize onboarding, deploy workflows across accounts, or build a scalable GoHighLevel infrastructure for your agency.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                GHL Scale Up helps agencies configure GoHighLevel systems that are structured for repeatability and growth.
              </p>
            </div>
            <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
              <h3 className="text-[1.05rem] font-bold mb-4">Agency setup can include:</h3>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Client sub-account setup</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> CRM architecture</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Pipeline configuration</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Custom fields</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Workflow systems</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Lead routing</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Calendar configuration</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Snapshot-ready builds</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Client onboarding systems</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Agency SaaS configuration</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Integrations</span>
                <span className="flex items-center gap-2 text-[0.82rem] text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-[#F8D000]" /> Documentation and training</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <Link href="/services/gohighlevel-saas-mode" className="text-[#0E9BF0] hover:underline text-[0.82rem]">→ GoHighLevel SaaS Mode for agencies</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 11. BUSINESS TYPES ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              BUSINESS TYPES
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              GoHighLevel CRM Setup for<br />
              <span className="text-[#0E9BF0]">Different Business Models</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
              The exact configuration depends on your business process—not a generic template.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Briefcase className="w-5 h-5" />, color: 'blue', title: 'Marketing Agencies', description: 'Build repeatable CRM and automation systems for your agency and clients.' },
              { icon: <Home className="w-5 h-5" />, color: 'green', title: 'Home Service Businesses', description: 'Track leads, estimates, appointments, follow-ups, and customers through a structured pipeline.' },
              { icon: <Building2 className="w-5 h-5" />, color: 'yellow', title: 'Real Estate Businesses', description: 'Organize leads, property-related information, qualification data, appointments, and opportunity stages.' },
              { icon: <Headphones className="w-5 h-5" />, color: 'blue', title: 'Coaches & Consultants', description: 'Manage prospects, discovery calls, follow-ups, onboarding, and customer relationships.' },
              { icon: <Laptop className="w-5 h-5" />, color: 'green', title: 'SaaS & Service Businesses', description: 'Build CRM structures around lead acquisition, sales qualification, demos, onboarding, and retention.' },
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

      {/* ====== 12. WHAT YOU GET ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              What You Get
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              What You Get With Our<br />
              <span className="text-[#0E9BF0]">GoHighLevel Setup Service</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Database className="w-5 h-5" />, color: 'blue', title: 'A structured CRM', description: 'Your contact and opportunity data is organized around your business.' },
              { icon: <PenLine className="w-5 h-5" />, color: 'green', title: 'Business-specific pipelines', description: 'Your sales process is represented clearly inside GoHighLevel.' },
              { icon: <Calendar className="w-5 h-5" />, color: 'yellow', title: 'Configured calendars', description: 'Appointments can follow your actual scheduling process.' },
              { icon: <FormInput className="w-5 h-5" />, color: 'blue', title: 'Connected lead capture', description: 'Your forms and lead sources feed into the right CRM processes.' },
              { icon: <Zap className="w-5 h-5" />, color: 'green', title: 'Automated follow-up', description: 'Repetitive communication and tasks are automated.' },
              { icon: <Code className="w-5 h-5" />, color: 'yellow', title: 'Connected integrations', description: 'Your key tools work alongside your CRM.' },
              { icon: <Shield className="w-5 h-5" />, color: 'blue', title: 'Tested workflows', description: 'The system is checked before launch.' },
              { icon: <Users className="w-5 h-5" />, color: 'green', title: 'Team-ready setup', description: 'Your team knows how the system works and how to use it.' },
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

      {/* ====== 13. PROCESS ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Our Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Our GoHighLevel<br />
              <span className="text-[#0E9BF0]">CRM Setup Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'Discovery', description: 'We understand your business, sales process, existing tools, lead sources, and CRM requirements.' },
              { num: '02', title: 'CRM Architecture', description: 'We determine how your contacts, opportunities, fields, pipelines, and customer journey should be structured.' },
              { num: '03', title: 'Configuration', description: 'We build and configure the core GoHighLevel CRM environment.' },
              { num: '04', title: 'Automation & Integrations', description: 'We connect workflows, lead routing, communications, and external tools where required.' },
              { num: '05', title: 'Testing', description: 'We test the system end-to-end to identify configuration problems before launch.' },
              { num: '06', title: 'Launch', description: 'Your new CRM system is moved into active use.' },
              { num: '07', title: 'Training & Documentation', description: 'We help your team understand how the system works and how to use it.' },
              { num: '08', title: 'Optimization', description: 'As your business evolves, your CRM can be refined and expanded.' },
            ].map((step, index) => (
              <div key={index} className="flex gap-4 p-5 bg-white rounded-xl border border-[#E8EDF4] hover:border-[#0E9BF0] transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#1C2E4A] flex items-center justify-center text-[0.75rem] font-extrabold text-[#0E9BF0] flex-shrink-0">
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

      {/* ====== 14. WHY GHL SCALE UP ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Why Choose Us
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Why Choose GHL Scale Up for<br />
              <span className="text-[#0E9BF0]">GoHighLevel CRM Setup?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Target className="w-5 h-5" />, color: 'blue', title: 'GoHighLevel Specialists', description: 'We focus specifically on the HighLevel ecosystem rather than treating GHL as one tool among hundreds.' },
              { icon: <Layers className="w-5 h-5" />, color: 'green', title: 'Strategy + Implementation', description: 'We don\'t just configure settings. We understand the business process behind the CRM.' },
              { icon: <TrendingUp className="w-5 h-5" />, color: 'yellow', title: 'Built for Scalability', description: 'Your CRM should work today without creating problems when your business grows tomorrow.' },
              { icon: <GitBranch className="w-5 h-5" />, color: 'blue', title: 'Technical + Automation Expertise', description: 'CRM setup often connects directly with workflows, calendars, forms, integrations, and other systems. Our approach considers the entire ecosystem.' },
              { icon: <Award className="w-5 h-5" />, color: 'green', title: 'Proven Experience', description: '200+ GHL projects delivered across 6 countries.' },
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

      {/* ====== 15. CASE STUDY SECTION ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[780px] mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Case Study
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              GoHighLevel CRM Setup<br />
              <span className="text-[#0E9BF0]">in Action</span>
            </h2>
            <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed mb-6">
              Add 1–3 REAL CRM/implementation case studies. Do not invent results. Do not use a generic case study repeated across every service page.
            </p>

            {/* Case Study Template */}
            <div className="bg-white rounded-xl p-8 border border-[#E8EDF4] text-left">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">[CLIENT NAME]</h3>
              <p className="text-[0.85rem] text-[#0E9BF0] font-medium mb-4">From [specific problem] to a structured GoHighLevel CRM</p>
              <div className="space-y-3">
                <div>
                  <h4 className="text-[0.8rem] font-bold text-[#1C2E4A]">THE CHALLENGE</h4>
                  <p className="text-[0.82rem] text-[#4A5568]">[2–3 sentences explaining the actual CRM problem.]</p>
                </div>
                <div>
                  <h4 className="text-[0.8rem] font-bold text-[#1C2E4A]">WHAT WE BUILT</h4>
                  <ul className="text-[0.82rem] text-[#4A5568] list-disc pl-5 space-y-0.5">
                    <li>CRM architecture</li>
                    <li>Pipeline structure</li>
                    <li>Custom fields</li>
                    <li>Workflow automation</li>
                    <li>Calendar setup</li>
                    <li>Integrations</li>
                    <li>Other relevant implementation work</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[0.8rem] font-bold text-[#1C2E4A]">THE RESULT</h4>
                  <p className="text-[0.82rem] text-[#4A5568]">[Real measurable result if available. If not, explain the operational improvement without inventing a number.]</p>
                </div>
                <p className="text-[0.78rem] text-[#5C6880]">Services: GoHighLevel CRM Setup + [other relevant service]</p>
                <Link href="#" className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-[#0E9BF0] hover:gap-3 transition-all">
                  Read the Full Case Study → <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <p className="text-[0.75rem] text-[#5C6880] mt-4 italic">
              Case studies should be service-specific. Homepage = strongest overall projects; CRM Setup = CRM/implementation proof; Workflow Automation = automation proof; SaaS = SaaS proof.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 16. DIY VS PROFESSIONAL ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Comparison
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              DIY GoHighLevel Setup vs.<br />
              <span className="text-[#0E9BF0]">Professional Implementation</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1C2E4A] text-white">
                  <th className="p-4 text-left text-[0.8rem] font-bold">DIY Setup</th>
                  <th className="p-4 text-left text-[0.8rem] font-bold">GHL Scale Up</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Configure features individually', 'Design the complete CRM system'],
                  ['Generic pipeline structure', 'Business-specific pipeline'],
                  ['Trial-and-error configuration', 'Planned CRM architecture'],
                  ['Build workflows separately', 'Connect CRM + automation'],
                  ['Figure out integrations yourself', 'Integration planning & implementation'],
                  ['Limited testing', 'Structured testing'],
                  ['You manage the implementation', 'Our team handles the technical setup'],
                ].map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-[#F8F9FB]' : 'bg-white'} border-b border-[#E8EDF4]`}>
                    <td className="p-4 text-[0.82rem] text-[#4A5568]">{row[0]}</td>
                    <td className="p-4 text-[0.82rem] text-[#1C2E4A] font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <p className="text-[0.95rem] font-medium text-[#1C2E4A]">
              GoHighLevel gives you the tools. <span className="text-[#0E9BF0]">We build the system.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ====== 17. FAQ ====== */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              FAQ
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Frequently Asked Questions About<br />
              <span className="text-[#0E9BF0]">GoHighLevel CRM Setup</span>
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

      {/* ====== 18. FINAL CTA ====== */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Set Up GoHighLevel<br />
            <span className="text-[#0E9BF0]">the Right Way?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[580px] mx-auto mb-6 leading-relaxed">
            Whether you're starting with a new account, rebuilding an existing CRM, migrating from another platform, or implementing GoHighLevel across your agency, GHL Scale Up can help you build a system that fits your business.
          </p>
          <p className="text-[0.9rem] font-light text-white/40 max-w-[580px] mx-auto mb-7 leading-relaxed">
            Tell us what you're trying to build, what isn't working today, and what you want GoHighLevel to handle.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#0E9BF0] text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#0B8AD8] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(14,155,240,0.3)] transition-all">
              Talk to a GoHighLevel Expert →
            </Link>
            <Link href="/contact" className="bg-transparent text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              Get Your GHL Setup Quote
            </Link>
          </div>
        </div>
      </div>

      {/* ====== 19. INTERNAL LINKING ====== */}
      <section className="py-6 bg-[#F8F9FB] border-y border-[#E8EDF4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3 md:gap-5 items-center text-[0.8rem]">
            <span className="font-semibold text-[#1C2E4A]">Related Services:</span>
            <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation</Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link href="/services/gohighlevel-saas-mode" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Setup</Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link href="/services" className="text-[#0E9BF0] hover:underline">All GoHighLevel Services</Link>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-5 items-center text-[0.8rem] mt-2 pt-2 border-t border-[#E8EDF4]">
            <span className="font-semibold text-[#1C2E4A]">Resources:</span>
            <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM Implementation Case Study</Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link href="/blog" className="text-[#0E9BF0] hover:underline">GoHighLevel Setup Guides</Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Build a GoHighLevel CRM<br /><span class='hl-blue'>That Actually Works for Your Business?</span>"
        description="GHL Scale Up provides expert GoHighLevel CRM setup services. We configure pipelines, custom fields, calendars, workflows, integrations and more."
        primaryText="Talk to a GoHighLevel Expert →"
        primaryHref="/contact"
      />
    </>
  );
}