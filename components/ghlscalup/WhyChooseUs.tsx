// components/ghlscalup/WhyChooseUs.tsx
'use client'

import { useEffect, useRef } from 'react'
import { 
  Zap, 
  Brain, 
  BarChart3, 
  Users, 
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'

const WhyChooseUs = () => {
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

  const reasons = [
    {
      icon: Zap,
      bg: 'rgba(248,208,0,.12)',
      iconColor: '#F8D000',
      title: 'GHL-Only Specialization',
      description: 'GoHighLevel is all we do. Every team member works inside GHL daily. We know what breaks at 50 sub-accounts and how to architect systems that scale.',
    },
    {
      icon: Brain,
      bg: 'rgba(14,155,240,.1)',
      iconColor: '#0E9BF0',
      title: 'AI-First Approach',
      description: 'Every system we build has AI automation at the core from lead qualification bots to voice agents. AI as the engine that cuts manual work by 70%.',
    },
    {
      icon: BarChart3,
      bg: 'rgba(37,201,125,.1)',
      iconColor: '#25C97D',
      title: '200+ Projects. Real Outcomes.',
      description: 'We\'ve built GHL systems for real estate, marketing agencies, SaaS founders, home services, and energy firms across 6 countries.',
    },
    {
      icon: Users,
      bg: 'rgba(248,208,0,.12)',
      iconColor: '#F8D000',
      title: 'One Team. Full Stack. Done.',
      description: 'CRM, funnels, automation, AI, dashboards, training under one roof. One team that owns the entire outcome from start to finish.',
    },
  ]

  const stats = [
    { value: '200+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '50+', label: 'Active Clients', icon: Users },
    { value: '6', label: 'Countries Served', icon: Shield },
    { value: '70%', label: 'Avg. Workload Reduction', icon: Clock },
  ]

  return (
    <section className="py-12 md:py-20 bg-white" id="why" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
            Why Hire GHL Scale Up
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
          </div>
          <h2 className="text-2xl md:text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-[#1C2E4A] px-4">
            We've the Infrastructure to<br className="hidden sm:block" />Grow Your <span className="text-[#0E9BF0]">GHL Revenue</span>
          </h2>
          <p className="text-sm md:text-base text-[#4A5568] leading-relaxed max-w-[580px] mx-auto mb-8 md:mb-12 px-4">
            When you hire GoHighLevel experts from GHL Scale Up, you get a dedicated team —
            not a freelancer juggling 15 platforms.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 fade-in">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-4 md:p-6 text-center hover:shadow-md transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[rgba(14,155,240,0.1)] flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-[#0E9BF0]" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-[#8A9BB0]">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div 
                key={index} 
                className="group bg-white border border-[#E8EDF4] rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row gap-4 md:gap-5 hover:shadow-[0_8px_32px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all duration-300 fade-in"
              >
                {/* Icon Container */}
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 min-w-[48px] md:min-w-[56px] rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ background: reason.bg }}
                >
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7" style={{ color: reason.iconColor }} />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#1C2E4A] mb-2 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#4A5568] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs