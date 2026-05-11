// components/ghlscalup/Navigation.tsx - Updated with direct Case Studies & Testimonials
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronDown,
  Wrench,
  Settings,
  Bot,
  FileText,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Calendar,
  Star,
  Link as LinkIcon,
  BarChart,
  RefreshCw,
  GraduationCap,
  Users,
  Briefcase,
  Search,
  Megaphone,
  Facebook,
  Music,
  Share2,
  PenTool,
  Video,
  Palette,
  Tag,
  Target,
  Heart,
  Menu,
  X,
  Zap
} from 'lucide-react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const ghlServices = [
    { icon: Settings, iconBg: 'blue', title: 'CRM Setup & Configuration', desc: 'Pipelines, contacts, tags, migration', link: '/services/crm-setup' },
    { icon: Zap, iconBg: 'green', title: 'Workflow & Marketing Automation', desc: 'Triggers, sequences, conditional logic', link: '/services/workflow-automation' },
    { icon: FileText, iconBg: 'yellow', title: 'Sales Funnel Development', desc: 'Landing pages, opt-ins, order forms', link: '/services/funnel-development' },
    { icon: Globe, iconBg: 'blue', title: 'GHL Website Development', desc: 'Full websites built inside GHL', link: '/services/website-development' },
    { icon: Mail, iconBg: 'green', title: 'Email, SMS & WhatsApp Automation', desc: 'Drip campaigns, nurture sequences', link: '/services/campaign-automation' },
    { icon: Bot, iconBg: 'yellow', title: 'AI Chatbot & Conversation AI', desc: 'Lead qualification, booking bots', link: '/services/ai-chatbot' },
    { icon: Phone, iconBg: 'blue', title: 'AI Voice Agent & Call Handling', desc: '24/7 AI receptionist, missed-call text-back', link: '/services/ai-voice-agent' },
    { icon: Calendar, iconBg: 'green', title: 'Calendar & Booking Setup', desc: 'Scheduling, reminders, round-robin', link: '/services/calendar-booking' },
    { icon: Star, iconBg: 'yellow', title: 'Reputation & Review Management', desc: 'Automated review requests, monitoring', link: '/services/reputation-management' },
    { icon: Settings, iconBg: 'blue', title: 'White-Label SaaS Setup', desc: 'Branded domains, snapshots, billing', link: '/services/saas-setup' },
    { icon: LinkIcon, iconBg: 'green', title: 'Integrations & API Development', desc: 'Zapier, Make, Stripe, webhooks', link: '/services/integrations' },
    { icon: BarChart, iconBg: 'yellow', title: 'Reporting & Dashboards', desc: 'Custom analytics, pipeline tracking', link: '/services/reporting' },
    { icon: RefreshCw, iconBg: 'blue', title: 'GHL Migration Services', desc: 'Move from any CRM to GoHighLevel', link: '/services/migration' },
    { icon: GraduationCap, iconBg: 'green', title: 'Membership & Course Sites', desc: 'Online courses, gated content, drip', link: '/services/membership-sites' },
    { icon: Users, iconBg: 'yellow', title: 'GHL Training & Onboarding', desc: 'Team training, SOPs, documentation', link: '/services/training' },
    { icon: Briefcase, iconBg: 'blue', title: 'Virtual Assistant for GHL Management', desc: 'Dedicated GHL VA to manage your account, run campaigns, update pipelines, and handle day-to-day tasks.', link: '/services/virtual-assistant' }
  ]

  const marketingServices = [
    { icon: Search, iconBg: 'blue', title: 'Search Engine Optimization (SEO)', desc: 'On-page, off-page, technical, local', link: '/marketing/seo' },
    { icon: Megaphone, iconBg: 'yellow', title: 'Google Ads Management', desc: 'Search, display, PMax, remarketing', link: '/marketing/google-ads' },
    { icon: Facebook, iconBg: 'blue', title: 'Meta Ads (Facebook & Instagram)', desc: 'Lead gen, retargeting, creatives', link: '/marketing/meta-ads' },
    { icon: Music, iconBg: 'green', title: 'TikTok Ads', desc: 'Video ads, spark ads, lead forms', link: '/marketing/tiktok-ads' },
    { icon: Share2, iconBg: 'yellow', title: 'Social Media Management', desc: 'Content, posting, engagement, analytics', link: '/marketing/social-media' },
    { icon: PenTool, iconBg: 'blue', title: 'Content Creation & Copywriting', desc: 'Blogs, ad copy, emails, web copy', link: '/marketing/content-creation' },
    { icon: Video, iconBg: 'green', title: 'Video Editing & Production', desc: 'Reels, YouTube, ads, UGC editing', link: '/marketing/video-editing' },
    { icon: Palette, iconBg: 'yellow', title: 'Graphic Design', desc: 'Social graphics, ads, brand collateral', link: '/marketing/graphic-design' },
    { icon: Tag, iconBg: 'blue', title: 'Brand Building & Strategy', desc: 'Identity, positioning, messaging', link: '/marketing/brand-building' },
    { icon: Bot, iconBg: 'green', title: 'AI Marketing Automation', desc: 'AI content, scoring, predictive', link: '/marketing/ai-marketing' },
    { icon: Target, iconBg: 'yellow', title: 'Lead Generation Systems', desc: 'Full funnel: traffic to booked call', link: '/marketing/lead-generation' },
    { icon: Heart, iconBg: 'blue', title: 'Email Marketing', desc: 'Newsletters, list building, segmentation', link: '/marketing/email-marketing' },
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
              className="h-12 w-auto"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none">
            <li><Link href="/about" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">About Us</Link></li>

            {/* GHL Services Mega Dropdown */}
            <li className="relative group">
              <Link href="/services" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors flex items-center gap-1">
                GHL Services <ChevronDown className="h-3 w-3 mt-0.5 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-b-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 min-w-[680px] grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto border-t-3 border-t-[#F8D000]">
                <div className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] pb-2.5 mb-1 border-b border-[#E8EDF4] col-span-full">GoHighLevel Services</div>
                {ghlServices.map((service, idx) => {
                  const Icon = service.icon
                  return (
                    <Link key={idx} href={service.link} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#F4F7FA] transition-colors group">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${service.iconBg === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' :
                        service.iconBg === 'green' ? 'bg-[rgba(37,201,125,0.1)]' : 'bg-[rgba(248,208,0,0.12)]'
                        }`}>
                        <Icon className="h-4 w-4 text-[#1C2E4A]" />
                      </div>
                      <div>
                        <div className="text-[0.8rem] font-semibold text-[#1C2E4A] leading-tight group-hover:text-[#0E9BF0] transition-colors">{service.title}</div>
                        <div className="text-[0.68rem] font-light text-[#4A5568]">{service.desc}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </li>

            {/* Marketing Services Mega Dropdown */}
            <li className="relative group">
              <Link href="/marketing" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors flex items-center gap-1">
                Marketing <ChevronDown className="h-3 w-3 mt-0.5 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-b-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 min-w-[680px] grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto border-t-3 border-t-[#F8D000]">
                <div className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] pb-2.5 mb-1 border-b border-[#E8EDF4] col-span-full">Digital Marketing Services</div>
                {marketingServices.map((service, idx) => {
                  const Icon = service.icon
                  return (
                    <Link key={idx} href={service.link} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#F4F7FA] transition-colors group">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${service.iconBg === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' :
                        service.iconBg === 'green' ? 'bg-[rgba(37,201,125,0.1)]' : 'bg-[rgba(248,208,0,0.12)]'
                        }`}>
                        <Icon className="h-4 w-4 text-[#1C2E4A]" />
                      </div>
                      <div>
                        <div className="text-[0.8rem] font-semibold text-[#1C2E4A] leading-tight group-hover:text-[#0E9BF0] transition-colors">{service.title}</div>
                        <div className="text-[0.68rem] font-light text-[#4A5568]">{service.desc}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </li>

            <li><Link href="/how-we-work" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">How We Work</Link></li>

            {/* Case Studies - Direct Link */}
            <li><Link href="/case-studies" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">Case Studies</Link></li>

            {/* Testimonials - Direct Link */}
            <li><Link href="/testimonials" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">Testimonials</Link></li>

            <li><Link href="/blog" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">Blog</Link></li>
          </ul>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://wa.me/919893270210?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-[0.8rem] hover:text-white transition-colors"
            >
              +91 98932 70210
            </a>
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-6 py-2.5 rounded-lg text-[0.82rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all">
              Get in Touch
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <>
                <span className="w-6 h-0.5 bg-white rounded"></span>
                <span className="w-6 h-0.5 bg-white rounded"></span>
                <span className="w-6 h-0.5 bg-white rounded"></span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 bg-[#1C2E4A] py-6 px-4 z-[999] border-t border-white/10 overflow-y-auto max-h-[calc(100vh-72px)]" style={{ top: '72px' }}>
            <ul className="flex flex-col gap-4 list-none">
              <li><Link href="/about" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
              <li><Link href="/services" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>GHL Services</Link></li>
              <li><Link href="/marketing" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Marketing</Link></li>
              <li><Link href="/how-we-work" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>How We Work</Link></li>
              <li><Link href="/case-studies" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link></li>
              <li><Link href="/testimonials" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link></li>
              <li><Link href="/blog" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
              <li><a
                href="https://wa.me/919893270210?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 98932 70210
              </a></li>
              <li><Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg text-center font-bold block mt-2" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation
