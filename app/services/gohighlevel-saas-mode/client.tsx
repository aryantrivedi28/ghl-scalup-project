'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  CheckCircle2,
  BookOpen,
  Zap,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Shield,
  Layers,
  Settings,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelSaaSModeClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-saas-mode',
        'is-legit',
        'oversaturated',
        'real-cost',
        'positioning',
        'pick-niche',
        'non-technical',
        'first-10-clients',
        'pricing',
        'churn',
        'technical-setup',
        'cancellations',
        'faq'
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: "Is starting a gohighlevel saas still worth it? Is it oversaturated?",
      a: "Generic 'GoHighLevel agency' positioning is oversaturated in 2026. Niche-specific positioning is not. If you position as 'CRM and marketing automation for agencies,' you sound identical to 40,000 other agencies. If you position as 'appointment automation and review management for Chicago dental practices,' you have almost no direct competitors."
    },
    {
      q: "Is GHL SaaS Agency Legit? Do people actually find success with this?",
      a: "The business model is real. GoHighLevel powers over 40,000 agencies globally and multiple real agencies run SaaS Mode profitably at scale. What is NOT real is the promise of 15 clients in your first two weeks. Realistic timeline is 60-90 days to first 10 clients with an existing network. Roughly 60-70% of agencies who turn on SaaS Mode never reach 10 paying clients."
    },
    {
      q: "How do I get clients to my SAAS agency?",
      a: "Start with warm outreach to your personal network. Offer your first 3 clients heavily discounted or free service in exchange for case studies. Then scale to cold channels once you have proof. This takes 3-6 months for a complete beginner. For a full tactical playbook see 'How to Get Your First 10 GoHighLevel SaaS Clients' at ghlscaleup.com/blog/how-to-get-first-gohighlevel-saas-clients."
    },
    {
      q: "Do you position yourself as SaaS or Agency?",
      a: "For beginners, SwaS (Software with a Service) converts significantly better than pure SaaS. Pure SaaS requires case studies and brand trust you do not yet have. SwaS at $297-$997/month lets you charge more than pure SaaS, spend meaningful time with clients to build case studies, and produces lower churn."
    },
    {
      q: "I want to start a GHL saas agency but I'm not tech savvy. Would it be worth it to hire a VA?",
      a: "Yes. This is one of the most common configurations among successful SaaS Mode agencies. The sales-strong tech-weak founder focuses on client conversations, positioning, and closing. A technical GHL-experienced VA handles snapshot maintenance and technical onboarding at approximately $500-1,500/month."
    },
    {
      q: "What is a realistic profit margin at 10, 30, and 100 clients?",
      a: "At 10 clients on $297/month plans with rebilling active: roughly $770-1,000/month net profit after platform, usage, and staff costs. At 30 clients: roughly $6,000-7,500/month net. At 100 clients: roughly $22,000-27,000/month net."
    },
    {
      q: "How long does it actually take to set up SaaS Mode?",
      a: "5 to 7 business days done by an experienced GHL specialist. 3 to 6 weeks done DIY by a beginner learning as they go. Three steps consistently trip up DIY setups: the niche-specific Snapshot, rebilling configuration, and A2P registration."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-saas-mode', title: 'What is GoHighLevel SaaS Mode?' },
    { id: 'is-legit', title: 'Is it legit or a guru scam?' },
    { id: 'oversaturated', title: 'Is it oversaturated in 2026?' },
    { id: 'real-cost', title: 'What does it cost, really?' },
    { id: 'positioning', title: 'SaaS vs SwaS vs Agency' },
    { id: 'pick-niche', title: 'How to pick a niche' },
    { id: 'non-technical', title: 'Can non-technical founders succeed?' },
    { id: 'first-10-clients', title: 'How to get first 10 clients' },
    { id: 'pricing', title: 'Pricing and rebilling' },
    { id: 'churn', title: 'Why clients cancel' },
    { id: 'technical-setup', title: 'Technical setup steps' },
    { id: 'cancellations', title: 'Handling cancellations' },
    { id: 'faq', title: 'FAQ' }
  ];

  // Blog posts data for featured articles
  const featuredBlogs = [
    {
      slug: 'ghl-white-label-saas-guide',
      title: 'GoHighLevel White Label SaaS Guide: Complete Setup for 2026',
      excerpt: 'Step-by-step guide to white-labelling GoHighLevel including custom domain setup, mobile app branding, and client portal configuration.',
      readTime: '12 min read',
      date: 'July 25, 2026',
      image: 'https://images.ctfassets.net/foc8yxpzaiuk/m5xLBmwzgac5EUGpKHkV8/b5d6ad41ac04539251483329a9481d42/Artboard_1_copy_10_3x__2_.png?w=1600&h=941&q=50',
      category: 'SaaS Mode'
    },
    {
      slug: 'how-to-get-first-gohighlevel-saas-clients',
      title: 'How to Get Your First 10 GoHighLevel SaaS Clients',
      excerpt: 'An honest, tactical guide to getting your first 10 GoHighLevel SaaS clients in 2026. Six proven channels, realistic timelines, and what actually works.',
      readTime: '28 min read',
      date: 'July 28, 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      category: 'Client Acquisition'
    },
    {
      slug: 'a2p-10dlc-fees-explained',
      title: 'A2P 10DLC Fees Explained: Complete Cost Breakdown for 2026',
      excerpt: 'Full breakdown of A2P 10DLC fees including brand registration, campaign vetting, and per-message costs. What you pay vs what you rebill clients.',
      readTime: '15 min read',
      date: 'July 22, 2026',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
      category: 'Compliance'
    },
    {
      slug: 'gohighlevel-saas-mode-setup',
      title: 'GoHighLevel SaaS Mode Setup: Complete Step-by-Step Guide',
      excerpt: 'Complete technical setup guide for GoHighLevel SaaS Mode. Stripe connection, SaaS Configurator, rebilling, A2P registration, and more.',
      readTime: '20 min read',
      date: 'July 20, 2026',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqg6rXw0HGXgZGpp_Y73jmce890Hf6_mPnw&s',
      category: 'Setup Guide'
    }
  ];

  const relatedResources = [
    {
      slug: 'zoho-to-gohighlevel-migration',
      title: 'Zoho to GoHighLevel Migration',
      excerpt: 'Complete step-by-step migration guide from Zoho to GoHighLevel.',
      readTime: '18 min read',
      date: 'July 18, 2026',
      image: 'https://th.bing.com/th/id/OIP.Bu0UMU61oMFLJdoMn6BfiQHaEL?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      slug: 'salesforce-to-gohighlevel-migration',
      title: 'Salesforce to GoHighLevel Migration',
      excerpt: 'Step-by-step guide to migrating from Salesforce to GoHighLevel.',
      readTime: '22 min read',
      date: 'July 15, 2026',
      image: 'https://tse1.mm.bing.net/th/id/OIP._jevgUNK1jelvc0qGzi82QHaEL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      slug: 'keap-to-gohighlevel-migration',
      title: 'Keap to GoHighLevel Migration',
      excerpt: 'Complete guide to migrating from Keap to GoHighLevel.',
      readTime: '16 min read',
      date: 'July 12, 2026',
      image: 'https://tse3.mm.bing.net/th/id/OIP.xPquBwDfRl2mxM9W3rk-3wHaEL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
  ];

  const pricingData = [
    { plan: 'Starter', cost: '$97', includes: 'Up to 3 sub-accounts, basic features', saasMode: 'No' },
    { plan: 'Unlimited', cost: '$297', includes: 'Unlimited sub-accounts, white-label branding', saasMode: 'No' },
    { plan: 'Agency Pro', cost: '$497', includes: 'Everything + SaaS Configurator + rebilling + mobile app white-label', saasMode: 'Yes' }
  ];

  const positioningData = [
    { type: 'Pure SaaS', mindset: 'Give me the tool, I will use it', price: '$47 to $297', bestFor: 'Later stage, after case studies exist. Self-serve buyers' },
    { type: 'SwaS (Software with a Service)', mindset: 'Set it up for me, I will run it with your support', price: '$297 to $997', bestFor: 'Most beginners. SMBs who need tech but do not want to master it' },
    { type: 'Full Agency (DFY)', mindset: 'Just get me results, I do not care how', price: '$1,500 to $5,000', bestFor: 'When client is high-touch or high-value per acquisition' }
  ];

  const rebillingData = [
    { service: 'SMS (per message)', wholesale: '$0.0079', clientRebill: '$0.015 to $0.025', markup: '1.9x to 3.2x' },
    { service: 'Email (per email)', wholesale: '$0.001', clientRebill: '$0.002 to $0.003', markup: '2x to 3x' },
    { service: 'Phone (per minute)', wholesale: '$0.014', clientRebill: '$0.03 to $0.05', markup: '2.1x to 3.6x' },
    { service: 'Conversation AI (per interaction)', wholesale: 'Varies', clientRebill: '20-40% markup', markup: '1.2x to 1.4x' }
  ];

  const channels = [
    { name: 'Warm outreach', description: 'Best for first 3-5 clients. Reach out to your personal network with specific observations.' },
    { name: 'Cold outreach with niche-specific demo', description: 'Build a demo BEFORE calling. 4-6 conversations per day sustainable. First client typically 30-60 days in.' },
    { name: 'Facebook and Instagram content', description: 'Post about your specific niche 3-4 times per week for at least 90 days. First inbound lead typically month 3-4.' },
    { name: 'Paid ads (Meta)', description: '$1,500-3,000 minimum test budget. First booked demos within 4-6 weeks.' },
    { name: 'Free community or free course', description: 'Long play with compounding returns. 6+ months to meaningful revenue.' },
    { name: 'Convert existing agency clients to SaaS', description: '30-50% typical conversion rate. Fastest path if applicable.' }
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-[#0E9BF0] z-50 transition-all duration-100" id="progress-bar" />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                GHL SaaS Mode
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                GoHighLevel<br />
                <span className="text-[#F8D000]">SaaS Mode</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                The complete 2026 guide to building a profitable SaaS agency with GoHighLevel. <strong className="text-white/90 font-medium">No hype. No "crush it."</strong> Just what actually works and what does not.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Book Your Free Strategy Call →
                </Link>
                <Link href="#faq" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  Skip to FAQ
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">SaaS Mode At A Glance</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">$497</div>
                  <div className="text-[0.78rem] text-white/50">Agency Pro plan cost</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">40K+</div>
                  <div className="text-[0.78rem] text-white/50">Agencies using GHL</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">60-90</div>
                  <div className="text-[0.78rem] text-white/50">Days to first 10 clients</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Builds delivered by GHL Scale Up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* BLUF Box */}
        <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-[#F8D000]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer — Read This First</span>
          </div>
          <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
            GoHighLevel SaaS Mode is a feature on the Agency Pro plan ($497/month) that lets marketing agencies white-label the entire GoHighLevel platform and resell it to their own clients as a branded software product.
          </p>
          <p className="text-sm text-[#5C6880] leading-relaxed">
            Clients sign up through your branded pricing page, pay you monthly via Stripe, and get access to a fully configured sub-account under your logo, domain, and pricing. GoHighLevel is invisible. Your agency becomes a software company. Realistic timeline: 60 to 90 days to your first 10 clients if you have an existing network. 90 to 120 days if you are cold outreaching to a completely new niche. Break-even is at 2 clients paying $297/month. Profitability compounds with every client after that because your platform cost stays flat at $497 regardless of how many sub-accounts you serve.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What's in this guide</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className="text-left text-sm text-[#5C6880] hover:text-[#0E9BF0] transition-colors py-1"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: What Is SaaS Mode */}
        <h2 id="what-is-saas-mode" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-10 mb-4">
          1. What Is GoHighLevel SaaS Mode?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Definition:</strong> GoHighLevel SaaS Mode is a feature on the Agency Pro plan ($497/month) that lets marketing agencies white-label the entire GoHighLevel platform and resell it as their own branded software product. Clients experience it as YOUR software. They never see GoHighLevel's brand.
        </p>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">How it actually works:</strong> You configure GoHighLevel to run under your brand: custom domain (app.youragency.com), your logo, your pricing tiers, your onboarding flow. When a prospect signs up through your pricing page, Stripe processes their payment to you, and GoHighLevel automatically creates a new sub-account under their name with your pre-built snapshot already deployed. To the client, this is your platform.
        </p>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What it is NOT:</strong> SaaS Mode is not the same as just white-labelling GoHighLevel. White-labelling is a branding layer — your logo replaces theirs. SaaS Mode is the business model layer on top of that. It adds automated client billing, self-service onboarding, snapshot auto-deployment, rebilling of Twilio and Mailgun usage, and offboarding automation.
        </p>

        {/* Key Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3 text-[#0E9BF0]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1">White-Label Branding</h4>
            <p className="text-[0.78rem] text-[#4A5568] leading-relaxed">Your logo, domain, and colors throughout. Clients never see GoHighLevel branding.</p>
          </div>
          <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3 text-[#0E9BF0]">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1">Automated Billing</h4>
            <p className="text-[0.78rem] text-[#4A5568] leading-relaxed">Stripe integration handles client payments, subscriptions, and prorated billing automatically.</p>
          </div>
          <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3 text-[#0E9BF0]">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1">Snapshot Auto-Deployment</h4>
            <p className="text-[0.78rem] text-[#4A5568] leading-relaxed">Pre-built templates deploy instantly when a new client signs up.</p>
          </div>
          <div className="bg-white border border-[#E8EDF4] rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3 text-[#0E9BF0]">
              <Settings className="w-5 h-5" />
            </div>
            <h4 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1">Usage Rebilling</h4>
            <p className="text-[0.78rem] text-[#4A5568] leading-relaxed">Pass Twilio, Mailgun, and AI usage costs to clients with your markup.</p>
          </div>
        </div>

        {/* Featured Blog Cards - Section 1 */}
        <div className="my-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-[#1C2E4A] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
              Featured Reads
            </h4>
            <Link href="/blog" className="text-xs text-[#0E9BF0] hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {featuredBlogs.slice(0, 2).map((blog, index) => (
              <Link
                key={index}
                href={`/blog/${blog.slug}`}
                className="group bg-white border border-[#E8EDF4] rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all"
              >
                <div className="relative w-full h-40 bg-[#F8F9FB] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/blog-placeholder.jpg';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-[#0E9BF0] text-white text-[0.55rem] font-bold px-2 py-0.5 rounded">
                    {blog.category}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-[0.6rem] text-[#96A0B5] mb-1.5">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <h4 className="text-[0.85rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors line-clamp-2 mb-1">
                    {blog.title}
                  </h4>
                  <p className="text-[0.7rem] text-[#5C6880] leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: Is Legit */}
        <h2 id="is-legit" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          2. Is GoHighLevel SaaS Actually Legit, or Is It Another Guru Scam?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          This is one of the most common questions on Reddit. A Reddit user recently posted: "Is GHL SaaS Agency Legit? On YouTube they make it seem like it's as easy as white labelling, creating a few ads, then onboarding new users, but there must be a catch." The skepticism is fair. The YouTube guru culture around GHL has genuinely damaged trust in the model.
        </p>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The honest answer:</strong> The business model is real. GoHighLevel powers over 40,000 agencies globally and generates hundreds of millions in ARR. Real agencies are running SaaS Mode profitably. What is NOT real is the promise that you will hit 15 clients in your first two weeks. Actual timelines are much longer. Actual failure rates are much higher than the guru content admits.
        </p>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE UNCOMFORTABLE TRUTH</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Roughly 60-70% of agencies who turn on SaaS Mode never reach 10 paying clients. Not because the model is fake, but because they treat it as passive income when it actually requires the same focused effort as any real business. If you are looking for something that runs itself while you sleep, this is not it. If you are willing to work a niche for 6-12 months, the model absolutely works.
          </p>
        </div>

        {/* Section 3: Oversaturated */}
        <h2 id="oversaturated" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          3. Is It Too Late to Start? Is GHL SaaS Oversaturated in 2026?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The direct answer:</strong> Generic "GoHighLevel agency" positioning is oversaturated. Niche-specific positioning is not.
        </p>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Why generic is saturated:</strong> If your positioning is "CRM plus marketing automation plus SMS plus email plus AI for agencies," you sound identical to 40,000 other GoHighLevel agencies. Prospects cannot tell you apart. This is genuinely saturated.
        </p>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Why niche-specific is not:</strong> If your positioning is "appointment automation and review management for Chicago dental practices," you have almost no competitors. The market is not saturated — the top of the funnel is. Every specific niche crossed with a specific outcome is under-served.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">THE PROOF POINT</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Search Google for "best CRM for orthodontists." Now search "best CRM for HVAC companies with 5-20 trucks." Notice how much thinner the results get when you get specific. That thinness is your opportunity. Every under-served niche is a market.
          </p>
        </div>

        {/* Section 4: Real Cost */}
        <h2 id="real-cost" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          4. What Does GoHighLevel SaaS Mode Cost, Really?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Definition:</strong> The visible cost is $497/month for Agency Pro. The real cost is higher once you include usage fees, tools, and hidden operational costs.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Cost/month</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Includes</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">SaaS Mode?</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, idx) => (
                <tr key={idx} className="border-b border-[#DDE1E9] hover:bg-[#F8F9FB] transition-colors">
                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                  <td className="py-3 px-3 text-[#4A5568]">{item.cost}</td>
                  <td className="py-3 px-3 text-[#4A5568]">{item.includes}</td>
                  <td className="py-3 px-3 text-[#4A5568]">
                    {item.saasMode === 'Yes' ? (
                      <span className="inline-flex items-center gap-1 text-[#25C97D]">
                        <CheckCircle2 className="w-3 h-3" />
                        {item.saasMode}
                      </span>
                    ) : (
                      <span className="text-[#96A0B5]">{item.saasMode}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Featured Blog Cards - Section 2 */}
        <div className="my-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {featuredBlogs.slice(2, 4).map((blog, index) => (
              <Link
                key={index}
                href={`/blog/${blog.slug}`}
                className="group bg-white border border-[#E8EDF4] rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all"
              >
                <div className="relative w-full h-40 bg-[#F8F9FB] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/blog-placeholder.jpg';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-[#0E9BF0] text-white text-[0.55rem] font-bold px-2 py-0.5 rounded">
                    {blog.category}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-[0.6rem] text-[#96A0B5] mb-1.5">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <h4 className="text-[0.85rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors line-clamp-2 mb-1">
                    {blog.title}
                  </h4>
                  <p className="text-[0.7rem] text-[#5C6880] leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE REBILLING SAFETY VALVE</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            This is why rebilling matters: If you do NOT rebill Twilio and Mailgun to your clients, you eat those costs from your margin. On a $297/month plan, if a client uses $50 in SMS and $30 in email, your effective revenue drops to $217. Multiply by 20 clients and you are losing $1,600/month you should be earning. Rebilling passes usage costs to the client at a markup you control.
          </p>
        </div>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Example — realistic P&L at 10 clients:</strong> A GHL Scale Up client running a med spa SaaS at 10 clients on $297/month plans: gross revenue $2,970/month. Platform cost $497. Twilio + Mailgun (rebilled at 2x markup, net cost after rebill roughly $200/month total). Onboarding + support staff cost $1,500/month at 15 hours per week at $25/hr VA rate. Net profit: approximately $773/month. This is real but modest. At 30 clients on the same setup, net profit jumps to approximately $6,590/month because platform cost stays flat at $497. This is why SaaS Mode economics only become interesting past 20-25 clients.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <p className="text-sm text-[#1A2236] leading-relaxed">
            <strong className="text-[#0E9BF0]">A2P COST DEEP DIVE:</strong> A2P fees confuse most SaaS Mode agencies. Full breakdown of what you pay, what you rebill, and what the actual per-client cost looks like: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P Fees Explained →</Link>
          </p>
        </div>

        {/* Section 5: Positioning */}
        <h2 id="positioning" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          5. What Is the Difference Between SaaS, SwaS, and Agency?
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Positioning</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Client Mindset</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Price</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best For</th>
              </tr>
            </thead>
            <tbody>
              {positioningData.map((item, idx) => (
                <tr key={idx} className="border-b border-[#DDE1E9] hover:bg-[#F8F9FB] transition-colors">
                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                  <td className="py-3 px-3 text-[#4A5568]">{item.mindset}</td>
                  <td className="py-3 px-3 text-[#4A5568]">{item.price}</td>
                  <td className="py-3 px-3 text-[#4A5568]">{item.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE HONEST RECOMMENDATION FOR BEGINNERS</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Start as SwaS. Pure SaaS requires case studies, brand trust, and product polish you do not yet have. Full Agency requires delivery capacity you do not yet have. SwaS lets you charge more than pure SaaS, spend enough time with clients to build meaningful case studies, and produces much lower churn because clients feel supported. Convert to pure SaaS only after 5-10 case studies and a smooth self-service onboarding.
          </p>
        </div>

        {/* Section 6: Pick Niche */}
        <h2 id="pick-niche" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          6. How Do You Pick a Niche When You Have No Network?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The 5-factor niche selection framework:</strong>
        </p>
        <ul className="space-y-1 mb-4 text-[0.9rem] font-light text-[#4A5568] list-decimal list-inside">
          <li><strong className="font-semibold text-[#1C2E4A]">Proximity:</strong> Which industries are you geographically or socially near?</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Network overlap:</strong> Which industries do the people you already know work in?</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Price ceiling:</strong> Can this industry actually pay $297+/month?</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Competition density:</strong> How many other GHL agencies already serve this niche?</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Personal knowledge:</strong> How much do you already know about this industry?</li>
        </ul>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">NICHES THAT WORK CONSISTENTLY IN 2026</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Based on our observations across GHL Scale Up client deployments: Real estate agents (individual, not brokerages), dental practices, med spas, HVAC companies with 5-20 trucks, roofing contractors, chiropractors, personal injury law firms, boutique fitness studios, cleaning services, and pest control companies. All share: high transaction value, poor tech adoption industry-wide, and clear ROI once GHL is deployed.
          </p>
        </div>

        {/* Section 7: Non-Technical */}
        <h2 id="non-technical" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          7. Can You Run a GHL SaaS Business If You Are Not Technical?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The direct answer:</strong> Yes. This is a viable path, and one of the most common configurations among successful SaaS Mode agencies.
        </p>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The sales-strong tech-weak model:</strong> You focus on client conversations, positioning, offer construction, closing calls, and account management. A technical VA handles snapshot maintenance, workflow builds, and technical onboarding. Cost of a technical GHL VA: approximately $500-1,500/month depending on experience level.
        </p>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">WHEN THIS MODEL BREAKS</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            The sales-strong tech-weak model breaks in two scenarios. One, when the founder tries to save money by using a general-purpose VA instead of a GHL-experienced one. Two, when the founder scales past roughly 25 clients without hiring a second technical VA. One VA can support 15-20 active clients well. Beyond that, you need either a second VA or a full-time technical partner.
          </p>
        </div>

        {/* Section 8: First 10 Clients */}
        <h2 id="first-10-clients" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          8. How Do You Get Your First 10 SaaS Clients?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The realistic timeline:</strong> 60-90 days to first 10 clients if you have an existing network and are actively selling 3+ hours per day. 90-120 days if you are cold outreaching to a completely new niche. 6-9 months if you are a complete beginner with no network and part-time effort.
        </p>

        <div className="space-y-2 mb-6">
          {channels.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E8EDF4] rounded-xl p-4 hover:border-[#0E9BF0] hover:shadow-[0_8px_24px_rgba(28,46,74,0.06)] transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#1C2E4A]">{item.name}</p>
                  <p className="text-sm text-[#4A5568]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">FULL PLAYBOOK — FIRST 10 CLIENTS</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Complete tactical breakdown with scripts, timelines, and channel-specific playbooks: <Link href="/blog/how-to-get-first-gohighlevel-saas-clients" className="text-[#0E9BF0] hover:underline">How to Get Your First 10 GoHighLevel SaaS Clients →</Link>
          </p>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE MISTAKE THAT COSTS PEOPLE MONTHS</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Beginners often pick paid ads or high-volume cold email as their first channel because they feel scalable. But conversion rates on cold traffic without case studies are near zero. Start warm. Prove the offer. THEN scale to cold channels. This sequence, more than any specific tactic, separates agencies that succeed from ones that quit.
          </p>
        </div>

        {/* Section 9: Pricing */}
        <h2 id="pricing" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          9. How Do You Price Your Plans Without Losing Money on Rebilling?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Definition:</strong> Rebilling is GoHighLevel's feature that lets you resell Twilio SMS, Mailgun email, and other usage costs to your clients at a markup you control. Without rebilling turned on, every message your clients send comes out of your agency wallet.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Service</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Wholesale Cost</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Client Rebill</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Effective Markup</th>
              </tr>
            </thead>
            <tbody>
              {rebillingData.map((item, idx) => (
                <tr key={idx} className="border-b border-[#DDE1E9] hover:bg-[#F8F9FB] transition-colors">
                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.service}</td>
                  <td className="py-3 px-3 text-[#4A5568]">{item.wholesale}</td>
                  <td className="py-3 px-3 text-[#4A5568]">{item.clientRebill}</td>
                  <td className="py-3 px-3 text-[#4A5568]">{item.markup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">PRICING MISTAKE #1 — CHARGING TOO LITTLE</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            $47/month plans attract price-sensitive clients who churn at high rates and demand excessive support. Every SaaS Mode agency we have observed that priced at $47-$97 either churned out or repriced upward within 12 months. Even $197 is toward the low end.
          </p>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">PRICING MISTAKE #2 — LEAVING REBILLING OFF</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            If you do not enable rebilling, you are subsidising your clients' Twilio and Mailgun bills out of your margin. A single client sending 20,000 SMS/month costs you $158 in Twilio. On a $297/month plan with rebilling off, your effective revenue drops to $139.
          </p>
        </div>

        {/* Section 10: Churn */}
        <h2 id="churn" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          10. Why Do SaaS Clients Cancel, and How Do You Stop It?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The single biggest cause of SaaS Mode churn:</strong> Broken onboarding in the first 7-14 days.
        </p>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What actually happens when a new client cancels in month 1:</strong> They pay you, get access to a platform, log in on day 2, feel overwhelmed, look for a video walkthrough, cannot find one specific to their business, close the tab, and never return. By day 28 they cancel through Stripe.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">The first-30-days playbook that prevents churn</span>
          </div>
          <ul className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
            <li><strong className="text-[#0E9BF0]">Day 0 (signup):</strong> Automated welcome email with ONE clear next action: schedule a 30-minute onboarding call.</li>
            <li><strong className="text-[#0E9BF0]">Day 1:</strong> Live onboarding call. Personally walk them through their specific configuration.</li>
            <li><strong className="text-[#0E9BF0]">Days 2-7:</strong> Daily check-in messages via SMS asking one specific question.</li>
            <li><strong className="text-[#0E9BF0]">Day 7:</strong> Milestone celebration. "You have hit your first week."</li>
            <li><strong className="text-[#0E9BF0]">Day 14:</strong> Second live call. Review progress. Address blockers.</li>
            <li><strong className="text-[#0E9BF0]">Day 30:</strong> Retention check-in. "You have completed month 1. Here is what month 2 looks like."</li>
          </ul>
        </div>

        {/* Section 11: Technical Setup */}
        <h2 id="technical-setup" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          11. What Does the Technical Setup Actually Involve?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Definition:</strong> SaaS Mode setup is a nine-step technical process. Done by someone experienced, it takes 5 to 7 business days. Done by a beginner learning as they go, it takes 3-6 weeks.
        </p>

        <ol className="space-y-1 mb-4 text-[0.9rem] font-light text-[#4A5568] list-decimal list-inside">
          <li><strong className="font-semibold text-[#1C2E4A]">Upgrade to Agency Pro ($497/month):</strong> SaaS Mode is only available on this plan.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Connect Stripe:</strong> Under Agency Settings → Payments. Verify your Stripe account can process payments in your target currency.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Configure the SaaS Configurator:</strong> Budget 8-12 hours of focused work.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Build your master Snapshot:</strong> Budget 30-60 hours for a genuinely niche-specific snapshot.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Set up your custom domain and white-label:</strong> Point app.youragency.com to GoHighLevel.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Configure rebilling:</strong> Under Agency Settings → SaaS Configurator → Rebilling.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Register for A2P 10DLC:</strong> Required for any US-based SMS sending.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Verify email sending domain:</strong> Configure SPF, DKIM, and DMARC records.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">End-to-end test with a real Stripe payment:</strong> Create a $1 test product and complete the full flow.</li>
        </ol>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">WHERE MOST DIY SETUPS BREAK</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Three steps consistently trip up DIY setups: the Snapshot (people underinvest in niche specificity), rebilling (people leave it off), and A2P registration (people skip it and their SMS delivery collapses). If you are DIYing this, prioritise these three steps above all others. Or work with an experienced setup partner. GHL Scale Up sets up complete SaaS Mode configurations in 5-7 business days as a done-for-you service.
          </p>
        </div>

        {/* Section 12: Cancellations */}
        <h2 id="cancellations" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          12. How Do You Handle Cancellations Without Losing Money?
        </h2>
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What happens by default when a client cancels:</strong> The client's Stripe subscription cancels. Their access to the platform continues until you manually revoke it. Any add-ons attached to their sub-account continue billing YOU.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">The cancellation workflow that protects both sides</span>
          </div>
          <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
            <li><strong className="text-[#0E9BF0]">Trigger:</strong> Stripe subscription cancelled webhook fires.</li>
            <li><strong className="text-[#0E9BF0]">Immediate:</strong> Internal notification to your team.</li>
            <li><strong className="text-[#0E9BF0]">Immediate:</strong> Client-facing email confirming cancellation.</li>
            <li><strong className="text-[#0E9BF0]">24 hours:</strong> Suspend sub-account access.</li>
            <li><strong className="text-[#0E9BF0]">48 hours:</strong> Audit and cancel all add-ons.</li>
            <li><strong className="text-[#0E9BF0]">7 days:</strong> Export the client's data as a courtesy.</li>
            <li><strong className="text-[#0E9BF0]">30 days:</strong> Permanent deletion of the sub-account.</li>
          </ol>
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">USE GHL'S CUSTOM SAAS CANCELLATION FLOW</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            GoHighLevel released a Custom SaaS Cancellation Flow feature that captures exit reasons, presents automated discounts, and logs every outcome. Use this instead of the default one-click cancel. It reduces churn by capturing users who were about to leave impulsively, and it gives you data on WHY people are cancelling.
          </p>
        </div>

        {/* Section 13: FAQ */}
        <h2 id="faq" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-6">
          13. Frequently Asked Questions
        </h2>

        <div className="max-w-[800px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E8EDF4]">
              <details className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors">
                  {faq.q}
                  <span className="text-[0.7rem] text-[#8A9BB0] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed pt-2 pb-3">{faq.a}</p>
              </details>
            </div>
          ))}
        </div>

        {/* Related Resources - Blog Cards Section */}
        <div className="mt-12 pt-6 border-t border-[#E8EDF4]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[1.1rem] font-bold text-[#1C2E4A]">Related Resources</h3>
            <Link href="/blog" className="text-xs text-[#0E9BF0] hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedResources.map((resource, index) => (
              <Link
                key={index}
                href={`/blog/${resource.slug}`}
                className="group bg-white border border-[#E8EDF4] rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all"
              >
                <div className="relative w-full h-32 bg-[#F8F9FB] overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/blog-placeholder.jpg';
                    }}
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 text-[0.55rem] text-[#96A0B5] mb-1">
                    <span>{resource.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{resource.readTime}</span>
                    </div>
                  </div>
                  <h4 className="text-[0.8rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors line-clamp-1">
                    {resource.title}
                  </h4>
                  <p className="text-[0.65rem] text-[#5C6880] leading-relaxed line-clamp-1">
                    {resource.excerpt}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1 text-[0.65rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                    Read Guide <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-5 my-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-[#1C2E4A]">GHL Scale Up Team</div>
              <div className="text-xs text-[#4A5568]">GoHighLevel expert agency · 200+ builds delivered globally</div>
            </div>
          </div>
          <p className="text-xs text-[#4A5568] leading-relaxed">
            GHL Scale Up is a dedicated GoHighLevel expert agency founded by Aryan Trivedi, based in India, serving 6 countries. 200+ builds delivered across marketing agencies, SaaS founders, real estate firms, home service businesses, coaches, and enterprises.
          </p>
        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Build Your<br />
            <span className="text-[#F8D000]">GoHighLevel SaaS Agency?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            GHL Scale Up configures complete SaaS Mode setups. Stripe billing, SaaS Configurator, niche-specific Snapshot, custom domain and white-label, rebilling configuration, A2P registration, cancellation flow, and end-to-end test. Most builds go live in 5 to 7 business days.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Strategy Call →
            </Link>
            <Link href="/services" className="bg-transparent text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              View All GHL Services
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Bar Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const progressBar = document.getElementById('progress-bar');
          if (progressBar) {
            window.addEventListener('scroll', () => {
              const scrollTop = window.scrollY;
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const progress = (scrollTop / docHeight) * 100;
              progressBar.style.width = Math.min(progress, 100) + '%';
            });
          }
        `
      }} />
    </>
  );
}