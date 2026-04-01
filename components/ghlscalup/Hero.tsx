// components/ghlscalup/Hero.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-[72px] md:py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_70%_30%,rgba(14,155,240,0.08),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_40%_at_20%_80%,rgba(248,208,0,0.05),transparent)]"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-15 items-center">
          <div>
            <div className="inline-block bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.68rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-6">
              GoHighLevel Expert Agency
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-5">
              Hire Dedicated<br />
              <span className="text-[#F8D000]">GoHighLevel Experts</span><br />
              to Scale Your Agency
            </h1>
            <p className="text-base font-light text-white/60 leading-[1.8] max-w-[500px] mb-8">
              We are a team of <strong className="text-white/90 font-medium">GoHighLevel specialists</strong> who set up, automate, and manage
              your entire GHL system from CRM and funnels to AI workflows and white-label SaaS
              so you can focus on selling while we handle the tech.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-8">
              <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                Schedule My Discovery Call →
              </Link>
              <Link href="/services" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                Explore GHL Services
              </Link>
            </div>
            <p className="text-[0.75rem] text-[#8A9BB0]">
              Trusted by <b className="text-[#F8D000] font-bold">50+ agencies</b> across <b className="text-[#F8D000] font-bold">6 countries</b> &nbsp;•&nbsp; <b className="text-[#F8D000] font-bold">200+</b> GoHighLevel projects delivered
            </p>
          </div>

          <div className="relative fade-in">
            <div className="bg-white/5 border border-white/10 rounded-[20px] aspect-[4/3] flex flex-col items-center justify-center gap-3 text-center p-10">
              <div className="w-20 h-20 rounded-full bg-[rgba(14,155,240,0.1)] flex items-center justify-center text-3xl">
                👥
              </div>
              <p className="text-[0.9rem] font-semibold text-white">Our GHL Team at Work</p>
              <p className="text-[0.78rem] text-[#8A9BB0] font-light max-w-[240px]">Real people. Real GoHighLevel expertise. Working on your systems every day.</p>
            </div>

            <div className="absolute -top-2.5 -right-2.5 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2.5">
              <div className="text-[1.3rem] font-extrabold text-[#25C97D] tracking-[-0.03em]">200+</div>
              <div className="text-[0.68rem] text-[#4A5568] font-medium leading-tight">GHL Projects<br />Delivered</div>
            </div>

            <div className="absolute bottom-5 -left-2.5 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2.5">
              <div className="text-[1.3rem] font-extrabold text-[#0E9BF0] tracking-[-0.03em]">70%</div>
              <div className="text-[0.68rem] text-[#4A5568] font-medium leading-tight">Less Manual<br />Work for Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero