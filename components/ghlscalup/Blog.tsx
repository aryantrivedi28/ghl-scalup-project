// components/ghlscalup/Blog.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const Blog = () => {
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

  const posts = [
    {
      icon: '📘',
      tag: 'GHL Setup Guide',
      title: 'How to Set Up GoHighLevel White-Label SaaS Mode: A Complete 2026 Guide',
      description: 'Step-by-step walkthrough for configuring GHL SaaS mode, Stripe billing, sub-accounts, and branded domains.',
    },
    {
      icon: '🧠',
      tag: 'AI Automation',
      title: '5 GHL AI Workflows That Cut Lead Response Time to Under 10 Seconds',
      description: 'How to configure AI chatbots, missed-call text-back, and smart routing inside GoHighLevel.',
    },
    {
      icon: '📈',
      tag: 'Agency Growth',
      title: 'From Freelancer to GHL SaaS: Building Recurring Revenue with GoHighLevel',
      description: 'A roadmap for agency owners who want to move from one-off projects to scalable SaaS revenue.',
    },
  ]

  return (
    <section className="py-20 bg-white" id="blog" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            From Our Blog
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
            GoHighLevel Tips, Guides &amp;<br /><span className="text-[#0E9BF0]">Growth Strategies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all fade-in">
              <div className="h-[180px] bg-[#F4F7FA] flex items-center justify-center text-[2.5rem]">{post.icon}</div>
              <div className="p-6">
                <div className="text-[0.62rem] font-bold tracking-[0.1em] uppercase text-[#0E9BF0] mb-2">{post.tag}</div>
                <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] leading-tight mb-2">{post.title}</h3>
                <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog