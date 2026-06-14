'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Calendar,
  Clock
} from 'lucide-react'
import { blogPosts, getIconComponent, BlogPost } from '@/data/blogPosts'

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Get latest 3 posts regardless of date gaps (just take first 3 from sorted array)
    // Assuming blogPosts is already sorted by date (newest first)
    const getLatestThreePosts = (posts: BlogPost[]) => {
      return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)
    }
    setLatestPosts(getLatestThreePosts(blogPosts))
  }, [])

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

  const getCategoryColor = (tag: string) => {
    const colors: Record<string, string> = {
      'Migration': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Real Estate': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'White Label SaaS': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Agency': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'White Label': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Review': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Comparison': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Pricing': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Conversation AI': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Hire Guide': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      '★ Recommended': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Snapshot': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'SMS Automation': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Workflow': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      'GoHighLevel': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Sub-Account': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Migration Timeline': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Coaches': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Dental': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Beginner': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      'Tool Consolidation': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'SaaS Mode': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Checklist': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
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
            Latest From Our Blog
            <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
            GoHighLevel Tips, Guides &amp;<br /><span className="text-[#0E9BF0]">Growth Strategies</span>
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto mb-12">
            Fresh insights and actionable guides published daily to help you master GoHighLevel and scale your agency.
          </p>
        </div>

        {/* Blog Posts Grid - Showing Latest 3 Posts (not limited by days) */}
        {latestPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {latestPosts.map((post, index) => {
              const IconComponent = getIconComponent(post.icon)
              return (
                <Link 
                  key={index} 
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8EDF4]"
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
                      {post.excerpt}
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
        ) : (
          <div className="text-center py-12">
            <p className="text-[#4A5568]">No recent posts available. Check back soon!</p>
          </div>
        )}

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