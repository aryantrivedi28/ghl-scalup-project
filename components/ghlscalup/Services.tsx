// components/ghlscalup/Services.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Settings, 
  Brain, 
  LayoutTemplate, 
  Mail, 
  Phone, 
  Package,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Settings,
      iconBg: 'blue',
      title: 'GoHighLevel CRM Setup & Migration',
      description: 'Custom pipeline design, deal stages, and tag architecture built around your sales process. We migrate data from HubSpot, Salesforce, or Zoho cleanly into GHL.',
      link: '/services/crm-setup',
    },
    {
      icon: Brain,
      iconBg: 'green',
      title: 'AI Workflow & Marketing Automation',
      description: 'AI chatbots, smart lead qualification, instant routing, and multi-channel follow-up sequences across email, SMS, and WhatsApp responding in seconds, not hours.',
      link: '/services/workflow-automation',
    },
    {
      icon: LayoutTemplate,
      iconBg: 'yellow',
      title: 'GHL Funnel & Website Development',
      description: 'High-converting landing pages and sales funnels built natively inside GHL. Mobile-optimized, SEO-ready, and connected to your CRM pipelines and booking systems.',
      link: '/services/funnel-development',
    },
    {
      icon: Mail,
      iconBg: 'blue',
      title: 'Email, SMS & WhatsApp Campaigns',
      description: 'Drip campaigns, nurture sequences, appointment reminders, review requests, and re-engagement workflows that convert leads into paying clients on autopilot.',
      link: '/services/campaign-automation',
    },
    {
      icon: Phone,
      iconBg: 'green',
      title: 'AI Voice Agent & Call Handling',
      description: '24/7 AI receptionist that answers inbound calls, qualifies leads, books appointments, and triggers missed-call text-backs. 100% of calls answered.',
      link: '/services/ai-voice-agent',
    },
    {
      icon: Package,
      iconBg: 'yellow',
      title: 'White-Label SaaS & Agency Scaling',
      description: 'Full GHL SaaS mode configuration branded domains, reusable snapshots, automated sub-account provisioning, Stripe, Twilio, and Mailgun integration.',
      link: '/services/saas-setup',
    },
  ]

  const getIconBgClass = (bg: string) => {
    switch(bg) {
      case 'blue': return 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]'
      case 'green': return 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]'
      case 'yellow': return 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]'
      default: return 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]'
    }
  }

  return (
    <section className="py-12 md:py-20 bg-[#F4F7FA]" id="services" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
            GoHighLevel Services
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
          </div>
          <h2 className="text-2xl md:text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-[#1C2E4A] px-4">
            Expert GoHighLevel Development<br className="hidden sm:block" />Services for <span className="text-[#0E9BF0]">Agencies & Businesses</span>
          </h2>
          <p className="text-sm md:text-base text-[#4A5568] leading-relaxed max-w-[580px] mx-auto mb-8 md:mb-12 px-4">
            From GoHighLevel CRM setup to advanced AI workflow automation, our GHL developers build
            complete systems that drive leads, automate follow-ups, and grow your recurring revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index} 
                className="group bg-white border border-[#E8EDF4] rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0] transition-all duration-300 fade-in"
              >
                {/* Icon */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-5 transition-all group-hover:scale-110 ${getIconBgClass(service.iconBg)}`}>
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-[#1C2E4A] mb-2 md:mb-3 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-[#4A5568] leading-relaxed mb-4 md:mb-5">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <Link 
                  href={service.link} 
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-[#E8EDF4] fade-in">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#25C97D]" />
              <span className="text-sm text-[#4A5568]">50+ agencies served</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#25C97D]" />
              <span className="text-sm text-[#4A5568]">200+ GHL projects delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#25C97D]" />
              <span className="text-sm text-[#4A5568]">6 countries served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services