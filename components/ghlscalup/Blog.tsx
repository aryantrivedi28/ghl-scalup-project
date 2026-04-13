// components/ghlscalup/Blog.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Rocket, 
  Brain, 
  TrendingUp, 
  ArrowRight, 
  Calendar,
  Clock,
  Star
} from 'lucide-react'

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
      icon: Rocket,
      tag: 'GHL Setup Guide',
      title: 'How to Set Up GoHighLevel White-Label SaaS Mode: A Complete 2026 Guide',
      description: 'Step-by-step walkthrough for configuring GHL SaaS mode, Stripe billing, sub-accounts, and branded domains.',
      slug: 'ghl-white-label-saas-guide',
      date: 'April 7, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      icon: Brain,
      tag: 'AI Automation',
      title: '5 GHL AI Workflows That Cut Lead Response Time to Under 10 Seconds',
      description: 'How to configure AI chatbots, missed-call text-back, and smart routing inside GoHighLevel.',
      slug: 'ghl-ai-workflows-lead-response',
      date: 'April 1, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    },
    {
      icon: TrendingUp,
      tag: 'Agency Growth',
      title: 'From Freelancer to GHL SaaS: Building Recurring Revenue with GoHighLevel',
      description: 'A roadmap for agency owners who want to move from one-off projects to scalable SaaS revenue.',
      slug: 'freelancer-to-ghl-saas-founder',
      date: 'March 25, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=500&fit=crop',
    },
  ]

  const getCategoryColor = (tag: string) => {
    const colors: Record<string, string> = {
      'GHL Setup Guide': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'AI Automation': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      'Agency Growth': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
    }
    return colors[tag] || 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]'
  }

  return (
    <section className="py-20 bg-white" id="blog" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
            From Our Blog
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
            GoHighLevel Tips, Guides &amp;<br /><span className="text-[#0E9BF0]">Growth Strategies</span>
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto mb-12">
            Practical insights and actionable guides to help you master GoHighLevel and scale your agency.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => {
            const IconComponent = post.icon
            return (
              <Link 
                key={index} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8EDF4] fade-in"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F4F7FA] to-[#E8EDF4]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-[#0E9BF0]" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-3 left-3 text-[0.6rem] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${getCategoryColor(post.tag)}`}>
                    {post.tag}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 text-[0.65rem] text-[#8A9BB0] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-[#1C2E4A] leading-tight mb-2 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-[0.8rem] text-[#4A5568] leading-relaxed line-clamp-2 mb-4">
                    {post.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Blog Posts Button */}
        <div className="text-center mt-12 fade-in">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog