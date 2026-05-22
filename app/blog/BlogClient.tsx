'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import {
  Brain,
  DollarSign,
  Settings,
  BarChart3,
  Target,
  ArrowRight,
  Mail,
  Clock,
  Calendar,
  Star,
  CheckCircle,
  XCircle,
  BookOpen,
  Zap,
  Phone,
  Camera,
  Trophy,
  MapPin,
  Database,
  CreditCard,
  Globe,
  Briefcase,
  Cloud
} from 'lucide-react';

const blogPosts = [
  {
    icon: BookOpen,
    tag: 'GoHighLevel',
    title: 'What Is GoHighLevel? The Complete Guide for 2026',
    excerpt: 'GoHighLevel (GHL) is an all-in-one CRM and marketing platform built for agencies and service businesses. This plain-English guide explains what it does, who it\'s for, and how it\'s priced.',
    slug: 'what-is-gohighlevel',
    date: 'May 2, 2026',
    readTime: '12 min read',
    featured: true,
    image: 'https://ghlcentral.com/wp-content/uploads/2024/07/what-is-go-highlevel-social-share.jpg',
  },
  {
    icon: Zap,
    tag: 'Workflow',
    title: 'How to Set Up GoHighLevel Workflow Automation for Beginners (Step-by-Step 2026)',
    excerpt: 'A step-by-step beginner\'s guide to GoHighLevel workflow automation. Learn what workflows are, how triggers and actions work, and build your first GHL automation in under 30 minutes.',
    slug: 'how-to-set-up-gohighlevel-workflow-automation',
    date: 'May 6, 2026',
    readTime: '19 min read',
    featured: true,
    image: 'https://t4.ftcdn.net/jpg/02/90/21/01/360_F_290210126_es32StucJSEqrBmzphC6e7v4hAzmLHup.jpg',
  },
  {
    icon: Phone,
    tag: 'SMS Automation',
    title: 'GoHighLevel Missed Call Text Back: How It Works + Full Setup Guide (2026)',
    excerpt: 'GoHighLevel\'s missed call text back sends an automatic SMS within 15 seconds of a missed call recovering leads before they call a competitor. Here\'s how it works and how to set it up in 5 minutes.',
    slug: 'gohighlevel-missed-call-text-back',
    date: 'May 7, 2026',
    readTime: '16 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
  },
  {
    icon: Camera,
    tag: 'Snapshot',
    title: 'How to Create and Use a GoHighLevel Snapshot to Onboard Clients Faster (2026)',
    excerpt: 'A GoHighLevel Snapshot is a reusable template of an entire sub-account setup funnels, workflows, pipelines, and more. Learn what\'s included, how to create one in 5 steps, and how to deploy it to client accounts in minutes.',
    slug: 'how-to-create-gohighlevel-snapshot',
    date: 'May 8, 2026',
    readTime: '18 min read',
    featured: true,
    image: 'https://tse1.mm.bing.net/th/id/OIP.W3DCBPMJAHPJXojrOsP0PQHaFL?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    icon: Trophy,
    tag: '★ Recommended',
    title: 'Best GHL Expert Agency to Hire in 2026 (Honest Comparison)',
    excerpt: 'Looking for the best GoHighLevel expert agency to hire? We compared the top GHL agencies in 2026 covering specialisations, pricing, and who each one is best for so you can choose the right partner without wasting time.',
    slug: 'best-ghl-expert-agency',
    date: 'May 9, 2026',
    readTime: '20 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
  },
  {
    icon: MapPin,
    tag: 'Hire Guide',
    title: 'Where to Hire GoHighLevel Experts in 2026: 6 Best Places (+ How to Vet Them)',
    excerpt: 'Looking for a GoHighLevel expert? Here are the 6 best places to find GHL professionals in 2026 from the official GHL directory to Upwork, Fiverr, and specialist agencies with a vetting checklist and red flags to avoid.',
    slug: 'where-to-hire-gohighlevel-experts',
    date: 'May 11, 2026',
    readTime: '21 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop',
  },
  {
    icon: Database,
    tag: 'Conversation AI',
    title: 'Does GoHighLevel Conversation AI Save Data to Your CRM? (2026 Answer)',
    excerpt: 'GoHighLevel Conversation AI does save some data to your CRM but not all of it, and not automatically. Here\'s exactly what gets captured, what doesn\'t, and how to build a clean data capture system that actually works.',
    slug: 'gohighlevel-conversational-ai-data-storage',
    date: 'May 12, 2026',
    readTime: '15 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop',
  },
  {
    icon: CreditCard,
    tag: 'Pricing',
    title: 'GoHighLevel Pricing 2026: All Plans, Real Costs & Hidden Fees Explained',
    excerpt: 'GoHighLevel costs $97, $297, or $497/month depending on your plan. But that\'s not your real cost. This guide covers every plan, every usage fee, AI pricing, and which plan is right for your business in 2026.',
    slug: 'gohighlevel-pricing',
    date: 'May 13, 2026',
    readTime: '20 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop',
  },
  {
    icon: BarChart3,
    tag: 'Comparison',
    title: 'GoHighLevel vs HubSpot (2026): Honest Comparison for Agencies',
    excerpt: 'GoHighLevel vs HubSpot the real differences in pricing, features, and who each platform is actually built for. For agencies managing multiple clients, GHL wins on cost and architecture. For enterprise B2B sales teams, HubSpot wins on depth.',
    slug: 'gohighlevel-vs-hubspot',
    date: 'May 14, 2026',
    readTime: '19 min read',
    featured: true,
    image: 'https://iloveghl.com/wp-content/uploads/2023/08/Difference-And-Comparison-Between-Coffee-And-Tea-Facebook-Post-1280-%C3%97-720-px-1.png',
  },
  {
    icon: Star,
    tag: 'Review',
    title: 'GoHighLevel Review 2026: Honest Verdict After 200+ Real Builds (4.4/5)',
    excerpt: 'GoHighLevel review for 2026 from a team that has built 200+ GHL systems. Honest rating, real pros and cons, email deliverability issues, learning curve reality, and who should actually use it.',
    slug: 'gohighlevel-review',
    date: 'May 18, 2026',
    readTime: '22 min read',
    featured: true,
    image: 'https://digitalxpresso.com/wp-content/uploads/2025/11/Image_fx-2025-11-24T112123.295.jpg',
  },

  {
    icon: Globe,
    tag: 'White Label',
    title: 'GoHighLevel White Label: What It Is, How It Works & Full Setup Guide (2026)',
    excerpt: 'GoHighLevel white label lets you brand the entire platform as your own software. Basic branding starts at $297/mo. Full SaaS Mode with automated billing starts at $497/mo. Step-by-step setup guide with CNAME, Stripe, and pricing strategy.',
    slug: 'gohighlevel-white-label',
    date: 'May 19, 2026',
    readTime: '21 min read',
    featured: true,
    image: 'https://static.wixstatic.com/media/49cc3c_0057b37c6cc646fb8f460461ae0a88d3~mv2.jpg/v1/fill/w_980,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/49cc3c_0057b37c6cc646fb8f460461ae0a88d3~mv2.jpg',
  },
  {
    icon: Briefcase,
    tag: 'Agency',
    title: 'GoHighLevel for Agencies: The Complete 2026 Guide (Setup, SaaS & Scaling)',
    excerpt: 'GoHighLevel is the only all-in-one platform purpose-built for marketing agencies — unlimited clients, one dashboard, white-label branding, and SaaS resale built in. This guide covers how agencies use GHL, which plan to choose, and how to scale correctly.',
    slug: 'gohighlevel-for-agencies',
    date: 'May 20, 2026',
    readTime: '20 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
  },
  {
    icon: Cloud,
    tag: 'White Label SaaS',
    title: 'GoHighLevel White Label SaaS: How SaaS Mode Works & Full Setup Guide (2026)',
    excerpt: 'GoHighLevel white label SaaS (SaaS Mode) lets you resell GHL as your own software — automated Stripe billing, self-service sign-up, and up to 20 pricing tiers. Full setup guide for Agency Pro.',
    slug: 'ghl-white-label-saas-guide',
    date: 'May 21, 2026',
    readTime: '22 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
  {
    icon: Database,
    tag: 'Migration',
    title: 'How to Migrate from HubSpot to GoHighLevel: Step-by-Step Guide (2026)',
    excerpt: 'A step-by-step guide to migrating from HubSpot to GoHighLevel — what data transfers, what breaks, how to rebuild workflows, and how to avoid the most costly migration mistakes.',
    slug: 'hubspot-to-gohighlevel-migration',
    date: 'May 22, 2026',
    readTime: '11 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
  {
    icon: Brain,
    tag: 'AI',
    title: 'GHL AI Workflows to Respond to Leads in Under 10 Seconds',
    excerpt: 'Build an AI-powered lead response system that qualifies, books, and follows up.',
    slug: 'ghl-ai-workflows-lead-response',
    date: 'April 1, 2026',
    readTime: '6 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
  },
  {
    icon: DollarSign,
    tag: 'Business',
    title: 'From Freelancer to GHL SaaS Founder: Recurring Revenue',
    excerpt: 'Transition from one-off projects to a scalable SaaS business using GHL white-label.',
    slug: 'freelancer-to-ghl-saas-founder',
    date: 'March 25, 2026',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=500&fit=crop',
  },
  {
    icon: Settings,
    tag: 'Automation',
    title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use to Build Faster',
    excerpt: 'Discover the GoHighLevel funnel builder features most agencies overlook version control, global sections, custom values, real-time collaboration and more.',
    slug: 'gohighlevel-funnel-builder-features',
    date: 'April 7, 2026',
    readTime: '9 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
  {
    icon: BarChart3,
    tag: 'Marketing',
    title: 'How to Generate High-Quality Leads Using GHL',
    excerpt: 'Learn the proven strategies to attract, capture, and convert leads using GoHighLevel automation.',
    slug: 'ghl-lead-generation-strategies',
    date: 'March 20, 2026',
    readTime: '6 min read',
    featured: false,
    image: 'https://tse4.mm.bing.net/th/id/OIP.om2obSqXtvYBhVLPnSYgbgHaEe?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    icon: Target,
    tag: 'Strategy',
    title: 'GHL Pipeline Management: From Lead to Closed Deal',
    excerpt: 'Master the art of pipeline management in GoHighLevel to track and convert more leads.',
    slug: 'ghl-pipeline-management',
    date: 'March 15, 2026',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
];

const getCategoryColor = (tag: string) => {
  const colors: Record<string, string> = {
    'Pricing': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
    'AI': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
    'Business': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
    'Automation': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
    'Marketing': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
    'Strategy': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
    'Snapshot': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
    'Workflow': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
    'SMS Automation': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
    'GoHighLevel': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
    '★ Recommended': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
    'Hire Guide': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
    'Conversation AI': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
    'Comparison': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
    'Review': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
    'White Label': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
    'Agency': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
    'White Label SaaS': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
    'Migration': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
  };
  return colors[tag] || 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]';
};

export default function BlogClient() {
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Newsletter State
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call - Replace with your actual newsletter signup endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Success
      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox for confirmation.');
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />

      {/* Blog Header */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(14,155,240,0.15),transparent)] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0E9BF0]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F8D000]/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Star className="w-3 h-3 fill-[#F8D000]" />
              Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-5">
              GHL Insights &amp;<br />
              <span className="text-[#F8D000] relative inline-block">
                Marketing Guides
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 300 4" preserveAspectRatio="none">
                  <path d="M0 2 Q75 0 150 2 Q225 4 300 2" stroke="#F8D000" strokeWidth="2" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-[580px] mx-auto leading-relaxed">
              Practical GoHighLevel guides, automation tips, SaaS strategies, and marketing insights to help you scale your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-[#0E9BF0]" />
                <Star className="w-4 h-4 text-[#F8D000] fill-[#F8D000]" />
                <div className="w-8 h-px bg-[#0E9BF0]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-3">Featured Articles</h2>
              <p className="text-[#4A5568]">Hand-picked insights to help you master GoHighLevel</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group relative bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E4A] via-[#1C2E4A]/60 to-transparent" />
                  </div>

                  <div className="relative p-8 md:p-10 z-10 min-h-[320px] flex flex-col justify-end">
                    <div className={`inline-flex items-center gap-1.5 text-[0.6rem] font-bold px-3 py-1 rounded-full mb-4 border backdrop-blur-sm w-fit ${getCategoryColor(post.tag)}`}>
                      {post.tag}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#F8D000] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts Grid */}
      <section className="py-16 md:py-20 bg-[#F8F9FB]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-3">Latest Articles</h2>
            <p className="text-[#4A5568]">Stay updated with our latest guides and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const IconComponent = post.icon;
              return (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8EDF4]"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F4F7FA] to-[#E8EDF4]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-[#0E9BF0]" />
                    </div>

                    <div className={`absolute top-4 left-4 text-[0.6rem] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${getCategoryColor(post.tag)}`}>
                      {post.tag}
                    </div>
                  </div>

                  <div className="p-6">
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

                    <h3 className="text-lg font-bold text-[#1C2E4A] leading-tight mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-1 text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1C2E4A] to-[#111E30] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(14,155,240,0.1),transparent)] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0E9BF0]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F8D000]/5 rounded-full blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-[700px] mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-4 justify-center bg-[rgba(14,155,240,0.1)] px-4 py-1.5 rounded-full">
              <Mail className="w-3 h-3" />
              Stay Updated
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-white">
              Get GHL Tips Delivered<br />
              <span className="text-[#F8D000]">Straight to Your Inbox</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
              Subscribe to our newsletter and get the latest GoHighLevel guides, automation strategies, and growth insights.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={status === 'loading'}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-xl font-bold hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-xl inline-flex items-center gap-2 text-sm text-green-400">
                <CheckCircle className="w-4 h-4" />
                {message}
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl inline-flex items-center gap-2 text-sm text-red-400">
                <XCircle className="w-4 h-4" />
                {message}
              </div>
            )}

            <p className="text-white/40 text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}