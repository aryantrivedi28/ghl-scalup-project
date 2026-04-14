// components/ghlscalup/Industries.tsx
'use client'

import { useEffect, useRef } from 'react'
import { 
  Megaphone, 
  Building2, 
  Wrench, 
  Cloud, 
  GraduationCap, 
  Zap, 
  Scale, 
  Heart,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

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
    { icon: Megaphone, name: 'Marketing Agencies', description: 'White-label GHL SaaS + client delivery', color: '#0E9BF0' },
    { icon: Building2, name: 'Real Estate', description: 'Multi-location CRM & lead capture', color: '#F8D000' },
    { icon: Wrench, name: 'Home Services', description: 'AI call handling & job booking', color: '#25C97D' },
    { icon: Cloud, name: 'SaaS Founders', description: 'GHL SaaS mode & onboarding', color: '#0E9BF0' },
    { icon: GraduationCap, name: 'Coaches & Consultants', description: 'Funnels, booking & nurture', color: '#F8D000' },
    { icon: Zap, name: 'Energy & Utilities', description: 'Multi-vertical pipelines & reporting', color: '#25C97D' },
    { icon: Scale, name: 'Legal & Finance', description: 'Client intake & follow-ups', color: '#0E9BF0' },
    { icon: Heart, name: 'Healthcare & Wellness', description: 'Patient booking & reminders', color: '#F8D000' },
  ]

  return (
    <section className="py-12 md:py-20 bg-[#0B1421] text-white" id="industries" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
            Industries We Serve
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
          </div>
          <h2 className="text-2xl md:text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-white px-4">
            GoHighLevel Solutions for<br className="hidden sm:block" />Every <span className="text-[#F8D000]">Lead-Driven Business</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-[580px] mx-auto mb-8 md:mb-12 px-4">
            If your growth depends on leads and follow-ups, we have built a GHL system for your industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <div 
                key={index} 
                className="group bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 lg:p-6 text-center hover:border-[rgba(248,208,0,0.3)] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 fade-in"
              >
                {/* Icon Container */}
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${industry.color}15` }}
                >
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7" style={{ color: industry.color }} />
                </div>
                
                {/* Title */}
                <h4 className="text-sm md:text-base font-bold text-white mb-1">
                  {industry.name}
                </h4>
                
                {/* Description */}
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 text-center fade-in">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(14,155,240,0.15)] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#0E9BF0]" />
              </div>
              <div className="text-left">
                <div className="text-lg md:text-xl font-bold text-white">50+</div>
                <div className="text-xs text-white/40">Agencies Served</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(37,201,125,0.15)] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
              </div>
              <div className="text-left">
                <div className="text-lg md:text-xl font-bold text-white">200+</div>
                <div className="text-xs text-white/40">Projects Delivered</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(248,208,0,0.15)] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#F8D000]" />
              </div>
              <div className="text-left">
                <div className="text-lg md:text-xl font-bold text-white">6</div>
                <div className="text-xs text-white/40">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-10 md:mt-12 fade-in">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-[#F8D000] hover:text-[#FFE44D] transition-colors group"
          >
            <span className="text-sm font-semibold">Not seeing your industry? Let's talk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Industries