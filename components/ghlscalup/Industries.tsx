// components/ghlscalup/Industries.tsx
'use client'

import { useEffect, useRef } from 'react'

const Industries = () => {
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

  const industries = [
    { icon: '📢', name: 'Marketing Agencies', description: 'White-label GHL SaaS + client delivery' },
    { icon: '🏠', name: 'Real Estate', description: 'Multi-location CRM & lead capture' },
    { icon: '🔧', name: 'Home Services', description: 'AI call handling & job booking' },
    { icon: '💡', name: 'SaaS Founders', description: 'GHL SaaS mode & onboarding' },
    { icon: '🎓', name: 'Coaches & Consultants', description: 'Funnels, booking & nurture' },
    { icon: '⚡', name: 'Energy & Utilities', description: 'Multi-vertical pipelines & reporting' },
    { icon: '⚖️', name: 'Legal & Finance', description: 'Client intake & follow-ups' },
    { icon: '🏥', name: 'Healthcare & Wellness', description: 'Patient booking & reminders' },
  ]

  return (
    <section className="py-20 bg-[#0B1421] text-white" id="industries" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            Industries We Serve
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-white">
            GoHighLevel Solutions for<br />Every <span className="text-[#F8D000]">Lead-Driven Business</span>
          </h2>
          <p className="text-[0.92rem] font-light text-white/50 leading-relaxed max-w-[580px] mx-auto mb-10">
            If your growth depends on leads and follow-ups, we have built a GHL system for your industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-7 text-center hover:border-[rgba(248,208,0,0.25)] hover:bg-white/10 hover:-translate-y-1 transition-all fade-in">
              <div className="text-[1.8rem] mb-2.5">{industry.icon}</div>
              <h4 className="text-[0.86rem] font-bold mb-1">{industry.name}</h4>
              <p className="text-[0.72rem] text-[#8A9BB0] font-light">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries