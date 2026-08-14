'use client'

import { useEffect, useRef } from 'react'

const About = () => {
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

  return (
    <section className="py-20 bg-white" id="about" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Who We Are
            </div>

            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              <span className="text-[#0E9BF0]">GoHighLevel Agency</span> Built for Scalable Growth
            </h2>

            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              GHL Scale Up is a specialized GoHighLevel agency helping marketing agencies, SaaS founders, coaches, and lead-driven service businesses build systems that turn leads into customers and customers into recurring revenue.
            </p>

            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              Our GoHighLevel experts have delivered <strong className="font-semibold text-[#1C2E4A]">200+ systems</strong> across <strong className="font-semibold text-[#1C2E4A]">6 countries</strong>, including CRM setups, workflow automations, sales funnels, AI-powered lead handling, integrations, migrations, and white-label SaaS implementations.
            </p>

            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              Instead of treating GoHighLevel as just another tool, we build around your business model, customer journey, and growth goals. From initial architecture and implementation to training and ongoing optimization, we handle the technical side of GHL so your team can focus on selling and scaling.
            </p>

            <p>
              <strong className="font-semibold text-[#1C2E4A]">
                We build. You sell. Everyone scales.
              </strong>
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="fade-in">
            <div className="bg-[#1C2E4A] rounded-2xl p-10 text-white">
              <blockquote className="text-[1.05rem] italic font-normal text-white/75 leading-relaxed border-l-4 border-[#F8D000] pl-5 mb-5">
                For agencies ready to build a real SaaS business on GoHighLevel, we act as the technical and strategic
                backbone helping you launch faster, scale confidently, and retain full control over your revenue.
              </blockquote>

              <cite className="text-[0.78rem] font-semibold text-[#F8D000] not-italic">
                — Our Mission
              </cite>

              <div className="flex gap-2.5 flex-wrap mt-5">
                <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-[0.72rem] font-semibold text-white/65">
                  GHL-Native First
                </span>
                <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-[0.72rem] font-semibold text-white/65">
                  Strategy-Led
                </span>
                <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-[0.72rem] font-semibold text-white/65">
                  Revenue-Focused
                </span>
                <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-[0.72rem] font-semibold text-white/65">
                  White-Label Ready
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About