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
    <section 
      className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 lg:py-24" 
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="fade-in">
            <div className="inline-block bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
              GoHighLevel Expert Agency
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Hire Dedicated{" "}
              <span className="text-[#F8D000]">GoHighLevel Experts</span>{" "}
              to Scale Your Agency
            </h1>
            
            <p className="text-white/70 text-base leading-relaxed mb-6">
              We are a team of <strong className="text-white">GoHighLevel specialists</strong> who set up, 
              automate, and manage your entire GHL system. From CRM and funnels to AI workflows 
              and white-label SaaS — you focus on selling, we handle the tech.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Link 
                href="/contact" 
                className="bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all"
              >
                Schedule My Discovery Call →
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent text-white px-6 py-3 rounded-lg text-sm font-medium border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Explore GHL Services
              </Link>
            </div>
            
            <p className="text-white/50 text-xs">
              Trusted by <span className="text-[#F8D000] font-semibold">50+ agencies</span> across{" "}
              <span className="text-[#F8D000] font-semibold">6 countries</span> •{" "}
              <span className="text-[#F8D000] font-semibold">200+</span> projects delivered
            </p>
          </div>

          {/* Right Side - Simple Image Container */}
          <div className="fade-in flex justify-center md:justify-end">
            <div className="w-full max-w-[500px]">
              <img 
                src="/hero_image.png" 
                alt="GoHighLevel Dashboard" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero