// components/ghlscalup/Services.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

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
      icon: '🔧',
      iconBg: 'blue',
      title: 'GoHighLevel CRM Setup & Migration',
      description: 'Custom pipeline design, deal stages, and tag architecture built around your sales process. We migrate data from HubSpot, Salesforce, or Zoho cleanly into GHL.',
    },
    {
      icon: '🧠',
      iconBg: 'green',
      title: 'AI Workflow & Marketing Automation',
      description: 'AI chatbots, smart lead qualification, instant routing, and multi-channel follow-up sequences across email, SMS, and WhatsApp responding in seconds, not hours.',
    },
    {
      icon: '📄',
      iconBg: 'yellow',
      title: 'GHL Funnel & Website Development',
      description: 'High-converting landing pages and sales funnels built natively inside GHL. Mobile-optimized, SEO-ready, and connected to your CRM pipelines and booking systems.',
    },
    {
      icon: '📧',
      iconBg: 'blue',
      title: 'Email, SMS & WhatsApp Campaigns',
      description: 'Drip campaigns, nurture sequences, appointment reminders, review requests, and re-engagement workflows that convert leads into paying clients on autopilot.',
    },
    {
      icon: '📞',
      iconBg: 'green',
      title: 'AI Voice Agent & Call Handling',
      description: '24/7 AI receptionist that answers inbound calls, qualifies leads, books appointments, and triggers missed-call text-backs. 100% of calls answered.',
    },
    {
      icon: '⚙️',
      iconBg: 'yellow',
      title: 'White-Label SaaS & Agency Scaling',
      description: 'Full GHL SaaS mode configuration branded domains, reusable snapshots, automated sub-account provisioning, Stripe, Twilio, and Mailgun integration.',
    },
  ]

  const getIconBgClass = (bg: string) => {
    switch(bg) {
      case 'blue': return 'bg-[rgba(14,155,240,0.1)]'
      case 'green': return 'bg-[rgba(37,201,125,0.1)]'
      case 'yellow': return 'bg-[rgba(248,208,0,0.12)]'
      default: return 'bg-[rgba(14,155,240,0.1)]'
    }
  }

  return (
    <section className="py-20 bg-[#F4F7FA]" id="services" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            GoHighLevel Services
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
            Expert GoHighLevel Development<br />Services for <span className="text-[#0E9BF0]">Agencies & Businesses</span>
          </h2>
          <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto mb-10">
            From GoHighLevel CRM setup to advanced AI workflow automation, our GHL developers build
            complete systems that drive leads, automate follow-ups, and grow your recurring revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0] transition-all fade-in">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-[1.4rem] mb-4.5 ${getIconBgClass(service.iconBg)}`}>
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-[#1C2E4A] mb-2.5">{service.title}</h3>
              <p className="text-[0.84rem] font-light text-[#4A5568] leading-relaxed">{service.description}</p>
              <Link href="#" className="inline-flex items-center gap-1 text-[0.78rem] font-semibold text-[#0E9BF0] mt-4 group-hover:gap-2 transition-all">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services