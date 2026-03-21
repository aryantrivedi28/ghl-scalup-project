// components/ghlscalup/Testimonials.tsx
'use client'

import { useEffect, useRef } from 'react'

const Testimonials = () => {
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

  const testimonials = [
    {
      stars: '★★★★★',
      quote: '“GHL Scale Up built our entire GoHighLevel brand setup — pipelines, workflows, triggers, and AI automations. Manual workload dropped 70% within the first month. Our team finally has time to focus on growth.”',
      name: 'Capviax',
      role: 'Performance Marketing Agency',
      gradient: 'linear-gradient(135deg,#0E9BF0,#25C97D)',
      initial: 'C',
    },
    {
      stars: '★★★★★',
      quote: '“We needed multi-location GHL setups with dynamic property websites for each region. They delivered a system that simplified everything — automated lead capture across all locations.”',
      name: 'BLLR',
      role: 'Real Estate Brand',
      gradient: 'linear-gradient(135deg,#F8D000,#0E9BF0)',
      initial: 'B',
    },
    {
      stars: '★★★★★',
      quote: '“The AI receptionist handles 100% of our inbound calls. Lead response went from hours to under 10 seconds. For home-service businesses, this changed everything.”',
      name: '1AISecretary',
      role: 'AI for Home-Service Businesses',
      gradient: 'linear-gradient(135deg,#25C97D,#0E9BF0)',
      initial: '1',
    },
  ]

  return (
    <section className="py-20 bg-[#F4F7FA]" id="results" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            Client Testimonials
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
            Stories from Agencies Who<br /><span className="text-[#0E9BF0]">Trust Our GHL Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all fade-in">
              <div className="text-[#F8D000] text-[0.8rem] mb-3.5 tracking-[2px]">{testimonial.stars}</div>
              <blockquote className="text-[0.88rem] font-normal text-[#4A5568] leading-relaxed mb-5">{testimonial.quote}</blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8EDF4]">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[0.85rem] text-white" style={{ background: testimonial.gradient }}>
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-bold text-[0.82rem] text-[#1C2E4A]">{testimonial.name}</div>
                  <div className="text-[0.72rem] text-[#8A9BB0] font-normal">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials