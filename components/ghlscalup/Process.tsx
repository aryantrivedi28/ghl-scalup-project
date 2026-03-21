// components/ghlscalup/Process.tsx
'use client'

import { useEffect, useRef } from 'react'

const Process = () => {
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

  const steps = [
    { number: '01', title: 'Discover', description: 'We map your workflows, goals, and bottlenecks to define the right GHL architecture.' },
    { number: '02', title: 'Design', description: 'We design CRM pipelines, funnels, and automations aligned to your customer journey.' },
    { number: '03', title: 'Build', description: 'We implement workflows, landing pages, and third-party integrations.' },
    { number: '04', title: 'Test & Refine', description: 'We run live testing, remove friction, and tune performance.' },
    { number: '05', title: 'Train & Scale', description: 'We onboard your team, document everything, and provide ongoing support.' },
  ]

  return (
    <section className="py-20 bg-[#F4F7FA]" id="process" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
            How We Work
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
            From First Call to Live System<br />in <span className="text-[#0E9BF0]">5 Proven Steps</span>
          </h2>
          <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto mb-10">
            A repeatable process refined across 200+ GoHighLevel projects.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-[2px] bg-[#E8EDF4] z-0"></div>
          <div className="grid md:grid-cols-5 gap-5">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative z-10 fade-in">
                <div className="w-[72px] h-[72px] rounded-full bg-[#1C2E4A] border-3 border-[#E8EDF4] flex items-center justify-center mx-auto mb-4 text-base font-extrabold text-[#F8D000] transition-all hover:border-[#0E9BF0] hover:shadow-[0_6px_20px_rgba(14,155,240,0.15)] hover:scale-105">
                  {step.number}
                </div>
                <h4 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1.5">{step.title}</h4>
                <p className="text-[0.76rem] font-light text-[#4A5568] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process