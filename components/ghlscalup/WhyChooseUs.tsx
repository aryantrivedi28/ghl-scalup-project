// components/ghlscalup/WhyChooseUs.tsx
'use client'

import { useEffect, useRef } from 'react'

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
      icon: '⚡',
      bg: 'rgba(248,208,0,.12)',
      title: 'GHL-Only Specialization',
      description: 'GoHighLevel is all we do. Every team member works inside GHL daily. We know what breaks at 50 sub-accounts and how to architect systems that scale.',
    },
    {
      icon: '🧠',
      bg: 'rgba(14,155,240,.1)',
      title: 'AI-First Approach',
      description: 'Every system we build has AI automation at the core from lead qualification bots to voice agents. AI as the engine that cuts manual work by 70%.',
    },
    {
      icon: '📈',
      bg: 'rgba(37,201,125,.1)',
      title: '200+ Projects. Real Outcomes.',
      description: 'We\'ve built GHL systems for real estate, marketing agencies, SaaS founders, home services, and energy firms across 6 countries.',
    },
    {
      icon: '👥',
      bg: 'rgba(248,208,0,.12)',
      title: 'One Team. Full Stack. Done.',
      description: 'CRM, funnels, automation, AI, dashboards, training under one roof. One team that owns the entire outcome from start to finish.',
    },
  ]

  return (
    <section className="py-20 bg-white" id="why" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
            Why Hire GHL Scale Up
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
            We've the Infrastructure to<br />Grow Your <span className="text-[#0E9BF0]">GHL Revenue</span>
          </h2>
          <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto mb-10">
            When you hire GoHighLevel experts from GHL Scale Up, you get a dedicated team —
            not a freelancer juggling 15 platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl p-8 flex gap-5 hover:shadow-[0_8px_32px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all fade-in">
              <div className="w-14 h-14 min-w-[56px] rounded-xl flex items-center justify-center text-[1.4rem]" style={{ background: reason.bg }}>
                {reason.icon}
              </div>
              <div>
                <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-1.5">{reason.title}</h3>
                <p className="text-[0.84rem] font-light text-[#4A5568] leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs