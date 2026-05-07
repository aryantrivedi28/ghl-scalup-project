// app/services/page.tsx
import Link from 'next/link';
import { 
  Wrench, 
  Bot, 
  FileText, 
  Globe, 
  Mail, 
  MessageSquare, 
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
  CheckCircle,
  Clock,
  Briefcase,
  Award,
  Headphones,
  ChevronRight
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'GoHighLevel Services | Expert GHL Solutions for Agencies & Businesses',
  description: 'Complete GoHighLevel services including CRM setup, automation, funnels, AI chatbots, voice agents, white-label SaaS, and more. 200+ projects delivered. Get a free consultation.',
  keywords: 'GoHighLevel services, GHL experts, marketing automation, CRM setup, sales funnels, AI chatbot',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
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

  const stats = [
    { value: '200+', label: 'Projects Delivered', icon: Award },
    { value: '50+', label: 'Active Clients', icon: Users },
    { value: '6', label: 'Countries Served', icon: Globe },
    { value: '5+', label: 'Years Experience', icon: Clock }
  ];

  const whyChooseUs = [
    { icon: Target, title: 'GHL-Only Specialists', description: 'GoHighLevel is all we do. Every team member works inside GHL daily and understands the platform inside out.', color: 'blue' },
    { icon: Bot, title: 'AI-First Approach', description: 'Every system we build has AI automation at the core cutting manual work by up to 70%.', color: 'green' },
    { icon: Award, title: '200+ Projects Delivered', description: 'Real outcomes for real businesses across 6 countries. We know what works and what doesn\'t.', color: 'yellow' }
  ];

  const steps = [
    { step: '01', title: 'Discovery Call', desc: 'Free 30-min call to understand your goals' },
    { step: '02', title: 'Strategy & Plan', desc: 'Custom roadmap with timeline & pricing' },
    { step: '03', title: 'Implementation', desc: 'We build your system inside GHL' },
    { step: '04', title: 'Testing & QA', desc: 'Rigorous testing with real data' },
    { step: '05', title: 'Launch & Train', desc: 'Go live & train your team' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              <Wrench className="h-3 w-3" />
              Our Services
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem]] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
              Complete GoHighLevel<br />
              <span className="text-[#F8D000]">Services for Your Business</span>
            </h1>
            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-2xl mx-auto">
              From CRM setup to AI voice agents, white-label SaaS to team training we provide end-to-end 
              GoHighLevel services that help you scale your business. 200+ projects delivered across 6 countries.
            </p>
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

      {/* Services by Category */}
      {serviceCategories.map((category, catIndex) => {
        const CategoryIcon = category.icon;
        return (
          <section key={catIndex} className={`py-16 md:py-20 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-[#F4F7FA]'}`}>
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgba(14,155,240,0.1)] mb-4">
                  <CategoryIcon className="h-8 w-8 text-[#0E9BF0]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                  {category.title}
                </h2>
                <p className="text-[0.9rem] text-[#4A5568] max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => {
                  const ServiceIcon = service.icon;
                  return (
                    <Link
                      key={index}
                      href={service.link}
                      className="group bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(14,155,240,0.2)] transition-colors">
                          <ServiceIcon className="h-6 w-6 text-[#0E9BF0]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h3 className="text-base font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors">
                              {service.title}
                            </h3>
                            {service.popular && (
                              <span className="text-[0.6rem] font-bold bg-[#F8D000] text-[#0B1421] px-2 py-0.5 rounded-full">
                                POPULAR
                              </span>
                            )}
                          </div>
                          <p className="text-[0.8rem] text-[#4A5568] leading-relaxed">
                            {service.description}
                          </p>
                          <div className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
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
        );
      })}

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
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

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: 'bg-[rgba(14,155,240,0.1)]',
                green: 'bg-[rgba(37,201,125,0.1)]',
                yellow: 'bg-[rgba(248,208,0,0.12)]'
              };
              return (
                <div key={index} className="text-center p-6">
                  <div className={`w-16 h-16 rounded-full ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-[#1C2E4A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C2E4A] mb-2">{item.title}</h3>
                  <p className="text-[0.85rem] text-[#4A5568]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Simple Process
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              How It Works<br />
              <span className="text-[#0E9BF0]">In 5 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1C2E4A] text-[#F8D000] flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-[#1C2E4A] mb-1">{item.title}</h3>
                <p className="text-[0.7rem] text-[#4A5568]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-4">
            Ready to Scale Your Business<br />
            <span className="text-[#F8D000]">with GoHighLevel?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-8 leading-relaxed">
            Book a free strategy call. We'll understand your needs, recommend the right services, and provide a fixed-price quote.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3 rounded-lg text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all inline-flex items-center gap-2">
              Book Your Free Strategy Call <ChevronRight className="h-4 w-4" />
            </Link>
            <Link href="mailto:aryan@finzie.co" className="bg-transparent text-white px-8 py-3 rounded-lg text-[0.9rem] font-medium border border-white/20 hover:border-white/30 hover:bg-white/5 transition-all inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Or Email Us Directly
            </Link>
          </div>
        </div>
      </div>

      <CtaBand 
        title="Not Sure Which Service You Need?<br /><span class='hl-yellow'>Let's Talk.</span>"
        description="We'll help you identify the right services to achieve your business goals. Book a free consultation today."
        primaryText="Book Your Free Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}