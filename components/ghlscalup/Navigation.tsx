// components/ghlscalup/Navigation.tsx - Update with service page links
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const ghlServices = [
    { icon: '🔧', iconBg: 'blue', title: 'CRM Setup & Configuration', desc: 'Pipelines, contacts, tags, migration', link: '/services/crm-setup' },
    { icon: '🤖', iconBg: 'green', title: 'Workflow & Marketing Automation', desc: 'Triggers, sequences, conditional logic', link: '/services/workflow-automation' },
    { icon: '📄', iconBg: 'yellow', title: 'Sales Funnel Development', desc: 'Landing pages, opt-ins, order forms', link: '/services/funnel-development' },
    { icon: '🌐', iconBg: 'blue', title: 'GHL Website Development', desc: 'Full websites built inside GHL', link: '/services/website-development' },
    { icon: '📧', iconBg: 'green', title: 'Email, SMS & WhatsApp Automation', desc: 'Drip campaigns, nurture sequences', link: '/services/campaign-automation' },
    { icon: '🤖', iconBg: 'yellow', title: 'AI Chatbot & Conversation AI', desc: 'Lead qualification, booking bots', link: '/services/ai-chatbot' },
    { icon: '📞', iconBg: 'blue', title: 'AI Voice Agent & Call Handling', desc: '24/7 AI receptionist, missed-call text-back', link: '/services/ai-voice-agent' },
    { icon: '📅', iconBg: 'green', title: 'Calendar & Booking Setup', desc: 'Scheduling, reminders, round-robin', link: '/services/calendar-booking' },
    { icon: '⭐', iconBg: 'yellow', title: 'Reputation & Review Management', desc: 'Automated review requests, monitoring', link: '/services/reputation-management' },
    { icon: '⚙️', iconBg: 'blue', title: 'White-Label SaaS Setup', desc: 'Branded domains, snapshots, billing', link: '/services/saas-setup' },
    { icon: '🔗', iconBg: 'green', title: 'Integrations & API Development', desc: 'Zapier, Make, Stripe, webhooks', link: '/services/integrations' },
    { icon: '📊', iconBg: 'yellow', title: 'Reporting & Dashboards', desc: 'Custom analytics, pipeline tracking', link: '/services/reporting' },
    { icon: '🔄', iconBg: 'blue', title: 'GHL Migration Services', desc: 'Move from any CRM to GoHighLevel', link: '/services/migration' },
    { icon: '🎓', iconBg: 'green', title: 'Membership & Course Sites', desc: 'Online courses, gated content, drip', link: '/services/membership-sites' },
    { icon: '👥', iconBg: 'yellow', title: 'GHL Training & Onboarding', desc: 'Team training, SOPs, documentation', link: '/services/training' },
  ]

  const marketingServices = [
    { icon: '🔍', iconBg: 'blue', title: 'Search Engine Optimization (SEO)', desc: 'On-page, off-page, technical, local', link: '/services/seo' },
    { icon: '📣', iconBg: 'yellow', title: 'Google Ads Management', desc: 'Search, display, PMax, remarketing', link: '/services/google-ads' },
    { icon: '📱', iconBg: 'blue', title: 'Meta Ads (Facebook & Instagram)', desc: 'Lead gen, retargeting, creatives', link: '/services/meta-ads' },
    { icon: '🎵', iconBg: 'green', title: 'TikTok Ads', desc: 'Video ads, spark ads, lead forms', link: '/services/tiktok-ads' },
    { icon: '📲', iconBg: 'yellow', title: 'Social Media Management', desc: 'Content, posting, engagement, analytics', link: '/services/social-media' },
    { icon: '✏️', iconBg: 'blue', title: 'Content Creation & Copywriting', desc: 'Blogs, ad copy, emails, web copy', link: '/services/content-creation' },
    { icon: '🎬', iconBg: 'green', title: 'Video Editing & Production', desc: 'Reels, YouTube, ads, UGC editing', link: '/services/video-editing' },
    { icon: '🎨', iconBg: 'yellow', title: 'Graphic Design', desc: 'Social graphics, ads, brand collateral', link: '/services/graphic-design' },
    { icon: '🏷️', iconBg: 'blue', title: 'Brand Building & Strategy', desc: 'Identity, positioning, messaging', link: '/services/brand-building' },
    { icon: '🤖', iconBg: 'green', title: 'AI Marketing Automation', desc: 'AI content, scoring, predictive', link: '/services/ai-marketing' },
    { icon: '🎯', iconBg: 'yellow', title: 'Lead Generation Systems', desc: 'Full funnel: traffic to booked call', link: '/services/lead-generation' },
    { icon: '💌', iconBg: 'blue', title: 'Email Marketing', desc: 'Newsletters, list building, segmentation', link: '/services/email-marketing' },
  ]

  return (
    <header className="bg-[#0B1421] sticky top-0 z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
      <div className="max-w-[1200px] mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/ghlscalup.png" 
              alt="GHL Scale Up - GoHighLevel Expert Agency" 
              width={120} 
              height={100}
              priority
              className="h-35 w-auto"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none">
            <li><Link href="/about" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">About Us</Link></li>

            {/* GHL Services Mega Dropdown */}
            <li className="relative group">
              <Link href="/services" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors flex items-center gap-1">
                GHL Services <span className="text-[0.5rem] mt-0.5 group-hover:rotate-180 transition-transform">▼</span>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-b-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 min-w-[680px] grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto border-t-3 border-t-[#F8D000]">
                <div className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] pb-2.5 mb-1 border-b border-[#E8EDF4] col-span-full">GoHighLevel Services</div>
                {ghlServices.map((service, idx) => (
                  <Link key={idx} href={service.link} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#F4F7FA] transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[0.85rem] flex-shrink-0 ${
                      service.iconBg === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' : 
                      service.iconBg === 'green' ? 'bg-[rgba(37,201,125,0.1)]' : 'bg-[rgba(248,208,0,0.12)]'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="text-[0.8rem] font-semibold text-[#1C2E4A] leading-tight">{service.title}</div>
                      <div className="text-[0.68rem] font-light text-[#4A5568]">{service.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            {/* Marketing Services Mega Dropdown */}
            <li className="relative group">
              <Link href="/marketing" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors flex items-center gap-1">
                Marketing <span className="text-[0.5rem] mt-0.5 group-hover:rotate-180 transition-transform">▼</span>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-b-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 min-w-[680px] grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto border-t-3 border-t-[#F8D000]">
                <div className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] pb-2.5 mb-1 border-b border-[#E8EDF4] col-span-full">Digital Marketing Services</div>
                {marketingServices.map((service, idx) => (
                  <Link key={idx} href={service.link} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#F4F7FA] transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[0.85rem] flex-shrink-0 ${
                      service.iconBg === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' : 
                      service.iconBg === 'green' ? 'bg-[rgba(37,201,125,0.1)]' : 'bg-[rgba(248,208,0,0.12)]'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="text-[0.8rem] font-semibold text-[#1C2E4A] leading-tight">{service.title}</div>
                      <div className="text-[0.68rem] font-light text-[#4A5568]">{service.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            <li><Link href="/how-we-work" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">How We Work</Link></li>
            
            <li className="relative group">
              <Link href="/results" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors flex items-center gap-1">
                Results <span className="text-[0.5rem] mt-0.5 group-hover:rotate-180 transition-transform">▼</span>
              </Link>
              <div className="absolute top-full left-0 bg-white rounded-b-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] py-3 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto border-t-3 border-t-[#F8D000]">
                <Link href="/case-studies" className="block px-3.5 py-2 rounded-md text-[0.82rem] font-medium text-[#1C2E4A] hover:bg-[#F4F7FA]">Case Studies</Link>
                <Link href="/testimonials" className="block px-3.5 py-2 rounded-md text-[0.82rem] font-medium text-[#1C2E4A] hover:bg-[#F4F7FA]">Testimonials</Link>
                <Link href="/portfolio" className="block px-3.5 py-2 rounded-md text-[0.82rem] font-medium text-[#1C2E4A] hover:bg-[#F4F7FA]">Portfolio</Link>
              </div>
            </li>
            
            <li><Link href="/blog" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">Blog</Link></li>
          </ul>

          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+919893270210" className="text-white/60 text-[0.8rem]">+91 98932 70210</a>
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-6 py-2.5 rounded-lg text-[0.82rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all">
              Get in Touch
            </Link>
          </div>

          <button 
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white rounded"></span>
            <span className="w-6 h-0.5 bg-white rounded"></span>
            <span className="w-6 h-0.5 bg-white rounded"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 bg-[#1C2E4A] py-6 px-4 z-[999] border-t border-white/10" style={{ top: '72px' }}>
            <ul className="flex flex-col gap-4 list-none">
              <li><Link href="/about" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
              <li><Link href="/services" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>GHL Services</Link></li>
              <li><Link href="/marketing" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Marketing</Link></li>
              <li><Link href="/how-we-work" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>How We Work</Link></li>
              <li><Link href="/case-studies" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link></li>
              <li><Link href="/blog" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
              <li><a href="tel:+919893270210" className="text-white text-base block py-2">+91 98932 70210</a></li>
              <li><Link href="#contact" className="bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg text-center font-bold block mt-2" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation