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
              The Force Behind Your<br />
              <span className="text-[#0E9BF0]">GoHighLevel Growth</span>
            </h2>

            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              We are <strong className="font-semibold text-[#1C2E4A]">GHL Scale Up</strong>, a specialized GoHighLevel agency that helps marketing agencies,
              SaaS founders, coaches, and service businesses unlock the full potential of the HighLevel platform.
            </p>

            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              Our team has delivered <strong className="font-semibold text-[#1C2E4A]">200+ high-performance systems</strong> including CRM setups,
              automation workflows, sales funnels, and AI-driven lead handling across global markets like the US, UK,
              Australia, and India.
            </p>

            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              We built GHL Scale Up with a clear focus: most businesses don’t need another generalist agency — they need
              a <strong className="font-semibold text-[#1C2E4A]">GoHighLevel-native partner</strong> who understands how to build scalable,
              revenue-generating systems that actually work in the real world.
            </p>

            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-4">
              Whether you need a complete CRM setup, AI-powered lead response system, high-converting funnels,
              or a white-label SaaS infrastructure, we handle everything end-to-end so you can focus on growth.
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