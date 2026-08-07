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
  Users,
  Rocket,
  BarChart3,
  DollarSign,
  Target,
  Phone,
  Mail,
  PlayCircle,
  FileText,
  TrendingUp,
  Quote,
  Star,
  Globe,
  Award,
  Briefcase,
  Building2,
  ChevronDown,
  Copy,
  Linkedin,
  Twitter,
  Info,
  Server,
  Cloud,
  Lock,
  RefreshCw,
  HelpCircle,
  Video,
  Smartphone,
  Code,
  ImageDown
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function GoHighLevelSaaSModeClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-saas-mode',
        'why-agencies-switching',
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
      q: "Is GoHighLevel SaaS still worth starting in 2026?",
      a: "Yes, if you niche down. Generic 'GoHighLevel agency' positioning is oversaturated, but niche-specific positioning crossed with a specific outcome is under-served. The agencies GHL Scale Up sees succeed pick one niche and commit to it for at least 6 months."
    },
    {
      q: "Is GoHighLevel SaaS legit?",
      a: "The business model is real and profitable. GoHighLevel powers tens of thousands of agencies globally. What is not real is the promise of 15 clients in two weeks. Realistic timeline is 60 to 90 days to your first 10 clients with an existing network. Roughly 60 to 70% of agencies who turn on SaaS Mode never reach 10 clients, almost always because they treat it as passive income."
    },
    {
      q: "How much does it cost to start a GoHighLevel SaaS business?",
      a: "The platform cost is $497/month for Agency Pro, which is required for SaaS Mode. Beyond that, budget for Twilio SMS, Mailgun email, A2P compliance fees, AI usage, and onboarding time. GHL Scale Up makes sure clients see the full operational cost picture before launch, not just the plan price."
    },
    {
      q: "Can I run a GoHighLevel SaaS business if I am not technical?",
      a: "Yes. Many successful founders focus on sales and positioning while a technical VA or GHL Scale Up handles the snapshot, workflows, and technical onboarding. A technical GoHighLevel VA typically costs $500 to $1,500/month, or GHL Scale Up can handle the entire technical layer as a done-for-you build."
    },
    {
      q: "How long does GoHighLevel SaaS setup take?",
      a: "5 to 7 business days done by an experienced team like GHL Scale Up. 3 to 6 weeks done DIY while learning. The three steps that stall most DIY setups are the niche-specific snapshot, rebilling configuration, and A2P registration."
    },
    {
      q: "Why do GoHighLevel SaaS clients cancel?",
      a: "Almost always broken onboarding in the first 7 to 14 days. Clients log into an empty or confusing dashboard, feel overwhelmed, and cancel by day 28. The fix is a pre-configured niche snapshot plus a structured first-30-days onboarding sequence, both of which GHL Scale Up builds into every setup."
    },
    {
      q: "Why is GHL Scale Up the right team to build my GoHighLevel SaaS?",
      a: "GHL Scale Up is the #1 expert agency for GHL SaaS, with 200+ builds delivered across 6 countries and 5+ years of GoHighLevel experience. What makes us different is that we understand both the technical setup and the business behind it. We configure Stripe billing, the SaaS Configurator, pricing tiers, a niche-specific snapshot, custom domain and white-label branding, rebilling, A2P registration, onboarding, and your cancellation flow, typically in 5 to 7 business days. Book a free strategy call at ghlscaleup.com/contact-us to talk through your idea."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-saas-mode', title: '1. What Is GoHighLevel SaaS Mode?' },
    { id: 'why-agencies-switching', title: '2. Why Are So Many Agencies Switching to GoHighLevel for SaaS?' },
    { id: 'is-legit', title: '3. Is GoHighLevel SaaS Legit, or a Guru Scam?' },
    { id: 'oversaturated', title: '4. Is GoHighLevel SaaS Oversaturated in 2026?' },
    { id: 'real-cost', title: '5. What Does a GoHighLevel SaaS Business Really Cost?' },
    { id: 'positioning', title: '6. SaaS vs SwaS vs Agency: How Should You Position?' },
    { id: 'pick-niche', title: '7. How Do You Pick a Niche With No Network?' },
    { id: 'non-technical', title: '8. Can You Run a GoHighLevel SaaS Business If You Are Not Technical?' },
    { id: 'first-10-clients', title: '9. How Do You Get Your First GoHighLevel SaaS Clients?' },
    { id: 'pricing', title: '10. How Do You Price and Rebill Without Losing Money?' },
    { id: 'churn', title: '11. Why Do GoHighLevel SaaS Clients Cancel, and How Do You Stop It?' },
    { id: 'technical-setup', title: '12. What Does GoHighLevel SaaS Technical Setup Involve?' },
    { id: 'cancellations', title: '13. How Do You Handle Cancellations Cleanly?' },
    { id: 'faq', title: '14. Frequently Asked Questions' }
  ];

  const pricingData = [
    { plan: 'Starter', cost: '$97', includes: 'Up to 3 sub-accounts, basic features', saasMode: 'No' },
    { plan: 'Unlimited', cost: '$297', includes: 'Unlimited sub-accounts, white-label branding', saasMode: 'No' },
    { plan: 'Agency Pro', cost: '$497', includes: 'Everything + SaaS Configurator + rebilling + mobile app white-label', saasMode: 'Yes' }
  ];

  const positioningData = [
    { type: 'Pure SaaS', mindset: 'Give me the tool, I will use it', price: '$47 to $297', bestFor: 'Later stage, after case studies exist' },
    { type: 'SwaS (Software with a Service)', mindset: 'Set it up for me, I will run it with support', price: '$297 to $997', bestFor: 'Most beginners and SMBs' },
    { type: 'Full Agency (DFY)', mindset: 'Just get me results', price: '$1,500 to $5,000', bestFor: 'High-touch, high-value clients' }
  ];

  const rebillingData = [
    { service: 'SMS (per message)', wholesale: '$0.0079', clientRebill: '$0.015 to $0.025', markup: '1.9x to 3.2x' },
    { service: 'Email (per email)', wholesale: '$0.001', clientRebill: '$0.002 to $0.003', markup: '2x to 3x' },
    { service: 'Phone (per minute)', wholesale: '$0.014', clientRebill: '$0.03 to $0.05', markup: '2.1x to 3.6x' }
  ];

  const channels = [
    { name: 'Warm outreach', description: 'List every person you know who owns a business. Reach out with a specific observation, not a generic pitch. Best for first 3-5 clients.' },
    { name: 'Cold outreach with niche-specific demo', description: 'Build a demo BEFORE calling. 4-6 conversations per day sustainable. First client typically 30-60 days in.' },
    { name: 'Facebook and Instagram content', description: 'Post about the specific niche you serve, not GoHighLevel as a platform. Post 3-4 times per week for at least 90 days. First inbound lead typically month 3-4.' },
    { name: 'Paid ads (Meta)', description: '$1,500-3,000 minimum test budget. First booked demos within 4-6 weeks if targeting is tight.' },
    { name: 'Free community or free course', description: 'Long play with compounding returns. 6+ months to meaningful revenue.' },
    { name: 'Convert existing agency clients to SaaS', description: '30-50% typical conversion rate. Fastest path if applicable.' }
  ];

  const a2pBlogs = [
    { slug: 'what-is-a2p-10dlc', title: 'What is A2P 10DLC' },
    { slug: 'agency-a2p-registration', title: 'Agency A2P Registration' },
    { slug: 'a2p-brand-registration', title: 'A2P Brand Registration' },
    { slug: 'a2p-campaign-registration', title: 'A2P Campaign Registration' },
    { slug: 'a2p-opt-in-templates', title: 'A2P Opt-In Templates' },
    { slug: 'a2p-trust-score', title: 'A2P Trust Score' },
    { slug: 'a2p-fees-explained', title: 'A2P Fees Explained' },
    { slug: 'a2p-campaign-rejected', title: 'Why Your A2P Campaign Got Rejected' },
    { slug: 'a2p-brand-rejected', title: 'A2P Brand Rejected' },
    { slug: 'a2p-error-codes', title: 'A2P Error Codes' },
    { slug: 'toll-free-vs-a2p', title: 'Toll-Free vs A2P' },
    { slug: 'gohighlevel-canadian-numbers', title: 'GoHighLevel Canadian Numbers' }
  ];

  // Small blog card component for related resources
  const SmallBlogCard = ({ blog, compact = false }: { blog: any, compact?: boolean }) => (
    <Link
      href={`/blog/${blog.slug}`}
      className={`group bg-white border border-[#E8EDF4] rounded-xl overflow-hidden hover:shadow-[0_8px_24px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all ${compact ? 'flex items-start gap-3 p-3' : ''}`}
    >
      {compact ? (
        <>
          <div className="w-16 h-16 flex-shrink-0 bg-[#F8F9FB] rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '';
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-[0.5rem] text-[#96A0B5] mb-0.5">
              <span>{blog.date}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            <h4 className="text-[0.8rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
              {blog.title}
            </h4>
            <div className="mt-1 inline-flex items-center gap-1 text-[0.6rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
              Read <ArrowRight className="w-2.5 h-2.5" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative w-full h-32 bg-[#F8F9FB] overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/blog-placeholder.jpg';
              }}
            />
            {blog.category && (
              <span className="absolute top-2 left-2 bg-[#0E9BF0] text-white text-[0.5rem] font-bold px-2 py-0.5 rounded">
                {blog.category}
              </span>
            )}
          </div>
          <div className="p-3">
            <div className="flex items-center gap-2 text-[0.55rem] text-[#96A0B5] mb-1">
              <span>{blog.date}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            <h4 className="text-[0.8rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
              {blog.title}
            </h4>
            <p className="text-[0.65rem] text-[#5C6880] leading-relaxed line-clamp-2 mt-0.5">
              {blog.excerpt}
            </p>
            <div className="mt-2 inline-flex items-center gap-1 text-[0.6rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
              Read Article <ArrowRight className="w-2.5 h-2.5" />
            </div>
          </div>
        </>
      )}
    </Link>
  );

  // Related resources for migrations
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
    },
    {
      slug: 'mailchimp-to-gohighlevel-migration',
      title: 'Mailchimp to GoHighLevel Migration',
      excerpt: 'Complete 2026 guide to migrating from Mailchimp to GoHighLevel.',
      readTime: '23 min read',
      date: 'July 10, 2026',
      image: 'https://tse1.mm.bing.net/th/id/OIP.fk-UCHPXlru-0tXhJiH-hQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
  ];

  // Testimonial Section Component
  const TestimonialSection = () => (
    <section id="testimonial" className="py-12 md:py-16 bg-gradient-to-br from-[#1a365d] to-[#2d4a7a] text-white rounded-xl my-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-white/10 mb-4">
              <Star className="w-4 h-4 text-[#f6ad55] fill-[#f6ad55]" />
              <span>Client Testimonial</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              What Our Clients Say
            </h2>
            <p className="text-blue-100/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Real feedback from real clients who trusted us with their GoHighLevel systems.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-white/10">
                <Quote className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              
              {/* Video Embed */}
              <div className="relative w-full aspect-video bg-black/30 rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.youtube.com/embed/YgSBBP37b0M"
                  title="Client Testimonial - GHL Scale Up"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f6ad55] fill-[#f6ad55]" />
                  ))}
                </div>
                
                <p className="text-blue-100/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic">
                  "Working with GHL Scale Up transformed how we manage leads and follow-ups. Their team not only fixed our deliverability issues but built an AI voice system that handles thousands of calls a month. We've seen a dramatic increase in appointment bookings and lead conversion."
                </p>
                
                <div className="w-16 md:w-20 h-1 bg-[#f6ad55] mx-auto mt-4 md:mt-6 mb-3 md:mb-4"></div>
                
                <p className="text-blue-200/80 text-sm md:text-base font-medium">
                  — Ashleey, Real Estate Agent
                </p>
                <p className="text-blue-200/50 text-xs md:text-sm">
                  Verified Client · GHL Scale Up
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-200/80 hover:text-white transition-colors text-sm md:text-base group"
            >
              <BookOpen className="w-4 h-4" />
              Read More Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  // Infographic 1: GHL Scale Up by the Numbers (missing from code)
  const InfographicNumbers = () => (
    <div className="bg-[#1C2E4A] rounded-xl p-6 my-6 text-center text-white overflow-hidden">
                <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src="/infographics/saas-mode-flow2.png"
              alt="How GoHighLevel SaaS Mode Works - Flow diagram showing prospect visits branded page, pays via Stripe, sub-account auto-created, snapshot deploys, client logs into your software"
              width={800}
              height={300}
              className="w-full h-auto rounded-lg"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'bg-[rgba(14,155,240,0.1)] rounded-lg p-6 text-white/80';
                  fallback.innerHTML = `
                    <div class="flex flex-wrap items-center justify-center gap-3 text-sm">
                      <span class="bg-[rgba(14,155,240,0.2)] px-4 py-2 rounded-full">Prospect visits your branded page</span>
                      <span class="text-white/40">→</span>
                      <span class="bg-[rgba(37,201,125,0.2)] px-4 py-2 rounded-full">Pays via Stripe</span>
                      <span class="text-white/40">→</span>
                      <span class="bg-[rgba(248,208,0,0.2)] px-4 py-2 rounded-full">Sub-account auto-created</span>
                      <span class="text-white/40">→</span>
                      <span class="bg-[rgba(14,155,240,0.2)] px-4 py-2 rounded-full">Snapshot deploys</span>
                      <span class="text-white/40">→</span>
                      <span class="bg-[rgba(37,201,125,0.2)] px-4 py-2 rounded-full">Client logs into YOUR software</span>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
      <p className="text-white/40 text-xs text-center mt-3">Image: /infographics/ghl-scaleup-numbers.png</p>
    </div>
  );

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
                GoHighLevel SaaS Hub by GHL Scale Up
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                The GoHighLevel SaaS Hub:<br />
                <span className="text-[#F8D000]">Everything You Need to Build and Scale a Profitable SaaS Business</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-2">
                Built by <strong className="text-white/90 font-medium">GHL Scale Up</strong>, the best and biggest agency for GoHighLevel SaaS. 
                We understand both the technical setup and the business behind it. 200+ builds delivered across 6 countries.
              </p>
              <p className="text-[0.85rem] font-light text-white/40 leading-relaxed max-w-[520px] mb-4">
                By GHL Scale Up | Aryan Trivedi, Founder | Updated July 2026
              </p>
              <p className="text-[0.9rem] font-light text-white/50 leading-relaxed max-w-[520px] mb-6">
                Welcome to the GoHighLevel SaaS Hub, built and maintained by <strong className="text-white/70">GHL Scale Up</strong> (ghlscaleup.com), 
                the best and biggest agency for GoHighLevel SaaS. We do more than configure the platform. We understand how the technical setup 
                connects to pricing, margins, onboarding, retention, and growth. With 200+ GoHighLevel builds delivered across six countries, 
                including the US, UK, Australia, Canada, and New Zealand, we have helped SaaS founders and agencies at different stages build 
                stronger, more practical businesses.
              </p>
              <p className="text-[0.9rem] font-light text-white/40 leading-relaxed max-w-[520px] mb-6">
                Think of this hub as a practical starting point for building a GoHighLevel SaaS business. Each section covers a real question 
                founders ask us, explains what works in simple terms, and links to a deeper guide when you need it. Whether you are checking if 
                the model makes sense, choosing a niche, pricing your plans, or working through the setup, you can find the next clear step here.
              </p>
              <p className="text-[0.9rem] font-light text-white/30 leading-relaxed max-w-[520px] mb-6">
                We created this hub because most GoHighLevel SaaS content sits at one of two extremes: hype that makes the business look effortless, 
                or technical explanations that ignore how the business actually makes money. Everything here comes from real builds, real client 
                conversations, and the lessons we have picked up while solving these problems again and again.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/services/saas-setup" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Build My GHL SaaS with the #1 Team →
                </Link>
                <Link href="#faq" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  Skip to FAQ
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">GHL Scale Up by the Numbers</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Builds delivered</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">6</div>
                  <div className="text-[0.78rem] text-white/50">Countries served</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">5+</div>
                  <div className="text-[0.78rem] text-white/50">Years of experience</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">#1</div>
                  <div className="text-[0.78rem] text-white/50">GHL SaaS expert agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why GHL Scale Up - CTA Box */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 -mt-6 relative z-20">
        <div className="bg-gradient-to-br from-[#0E9BF0] to-[#0B89D6] rounded-xl p-6 md:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold">WHY GHL SCALE UP IS THE TEAM BEHIND THIS HUB</h3>
              <p className="text-white/80 text-sm max-w-2xl">
                GHL Scale Up is the #1 expert agency for GHL SaaS, and this is the work we know best. Across 200+ builds in 6 countries, 
                we have helped founders get both sides right: the technical setup and the business behind it. From Stripe, the SaaS Configurator, 
                snapshots, branding, rebilling, A2P, and offboarding to pricing, margins, onboarding, and retention, we build the complete 
                foundation in 5 to 7 business days.
              </p>
            </div>
            <Link href="/contact" className="bg-white text-[#0E9BF0] px-6 py-3 rounded-lg font-bold hover:bg-[#F8F9FB] transition-all whitespace-nowrap text-sm shadow-lg">
              Talk to the GHL SaaS Experts →
            </Link>
          </div>
        </div>
      </div>

      {/* Infographic: GHL Scale Up by the Numbers - NEW */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <InfographicNumbers />
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">

        {/* Table of Contents */}
        <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Table of Contents</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
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

        {/* Want the best GoHighLevel SaaS agency in your corner? - CTA */}
        <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 md:p-8 text-center my-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Want the best GoHighLevel SaaS agency in your corner?
          </h3>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            GHL Scale Up brings the technical build and the business thinking together, so your SaaS is not just configured, but ready to sell and grow.
          </p>
          <Link href="/services/saas-setup" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl">
            Build My GHL SaaS with the #1 Team →
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ==================== TESTIMONIAL SECTION ==================== */}
        <TestimonialSection />

        {/* Section 1: What Is SaaS Mode */}
        <h2 id="what-is-saas-mode" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-10 mb-4">
          1. What Is GoHighLevel SaaS Mode?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> Most people arrive at GoHighLevel SaaS Mode having watched a few videos, but still unable to explain in one sentence what they are actually selling. That confusion carries straight into their pricing and positioning, where it does real damage.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The clear answer:</strong> GoHighLevel SaaS Mode is a feature on the Agency Pro plan ($497/month) that lets marketing agencies white-label the entire GoHighLevel platform and resell it as their own branded software product. Your clients sign up through your branded pricing page, pay you monthly through Stripe, and get access to a fully configured sub-account under your logo, your domain, and your pricing. GoHighLevel stays invisible. Your agency becomes a software company.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">How it works in practice:</strong> You configure GoHighLevel to run under your brand, with a custom domain, your logo, your pricing tiers, and your onboarding flow. When a prospect signs up, Stripe processes their payment to you, and GoHighLevel automatically creates a new sub-account with your pre-built snapshot already deployed. To the client, this is your platform, not GoHighLevel's.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The distinction that matters:</strong> SaaS Mode is not the same as simply white-labelling GoHighLevel. White-labelling is the branding layer. SaaS Mode is the business model layer on top of it, adding automated client billing, self-service onboarding, snapshot auto-deployment, usage rebilling, and offboarding automation.
        </p>

        {/* Infographic 1: How GoHighLevel SaaS Mode Works */}
        <div className="bg-[#1C2E4A] rounded-xl p-6 my-6 text-center text-white overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImageDown className="w-5 h-5 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">HOW GOHIGHLEVEL SAAS MODE WORKS</span>
          </div>
          <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src="/infographics/saas-mode-flow.png"
              alt="How GoHighLevel SaaS Mode Works - Flow diagram showing prospect visits branded page, pays via Stripe, sub-account auto-created, snapshot deploys, client logs into your software"
              width={800}
              height={300}
              className="w-full h-auto rounded-lg"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'bg-[rgba(14,155,240,0.1)] rounded-lg p-6 text-white/80';
                  fallback.innerHTML = `
                    <div class="flex flex-wrap items-center justify-center gap-3 text-sm">
                      <span class="bg-[rgba(14,155,240,0.2)] px-4 py-2 rounded-full">Prospect visits your branded page</span>
                      <span class="text-white/40">→</span>
                      <span class="bg-[rgba(37,201,125,0.2)] px-4 py-2 rounded-full">Pays via Stripe</span>
                      <span class="text-white/40">→</span>
                      <span class="bg-[rgba(248,208,0,0.2)] px-4 py-2 rounded-full">Sub-account auto-created</span>
                      <span class="text-white/40">→</span>
                      <span class="bg-[rgba(14,155,240,0.2)] px-4 py-2 rounded-full">Snapshot deploys</span>
                      <span class="text-white/40">→</span>
                      <span class="bg-[rgba(37,201,125,0.2)] px-4 py-2 rounded-full">Client logs into YOUR software</span>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <p className="text-white/40 text-xs mt-3">/infographics/saas-mode-flow.png</p>
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">GO DEEPER</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Our complete guide to the SaaS Mode business model, including margin math and pricing strategy: 
            <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label SaaS Guide →</Link>
          </p>
          <p className="text-sm text-[#1A2236] leading-relaxed mt-1">
            SEE ALSO: How SaaS Mode differs from standard white label, step by step: 
            <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label: How It Works →</Link>
          </p>
        </div>

        {/* Section 2: Why Agencies Switching */}
        <h2 id="why-agencies-switching" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          2. Why Are So Many Agencies Switching to GoHighLevel for SaaS?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> Founders often ask us whether the shift toward GoHighLevel is real or just influencer hype. Having completed 200+ migrations and builds, we can tell you it is real, and it is driven by math, not marketing.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The five reasons agencies switch:</strong> Tool consolidation (replacing 8 to 12 subscriptions with one flat rate), the sub-account architecture that makes multi-client management actually work, white-label SaaS revenue as a new income stream competitors cannot match, AI features that have matured to genuine business value, and a cost calculation that becomes impossible to ignore at 3 or more clients.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Why this matters for your SaaS:</strong> The same architecture that makes GoHighLevel compelling for agencies is exactly what makes a SaaS business possible. Sub-accounts, snapshots, and flat-rate pricing are the foundation your entire SaaS is built on. Understanding why agencies are switching helps you understand why the SaaS opportunity exists in the first place.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">GO DEEPER</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            The full breakdown of why agencies are moving to GoHighLevel in 2026: 
            <Link href="/blog/why-agencies-switching-to-gohighlevel" className="text-[#0E9BF0] hover:underline ml-1">Why Agencies Are Switching to GoHighLevel →</Link>
          </p>
          <p className="text-sm text-[#1A2236] leading-relaxed mt-1">
            THE AGENCY FOUNDATION: How agencies use GoHighLevel's architecture to run unlimited clients from one dashboard: 
            <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
          </p>
        </div>

        {/* Section 3: Is Legit */}
        <h2 id="is-legit" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          3. Is GoHighLevel SaaS Legit, or a Guru Scam?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> This is one of the first questions almost everyone asks us, and it is a fair one. A Reddit user put it well: 'Is GHL SaaS Agency Legit? On YouTube they make it seem like it's as easy as white labelling, creating a few ads, then onboarding new users, but there must be a catch.' The guru culture around GoHighLevel has genuinely damaged trust in a real business model.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The honest answer:</strong> The business model is real. GoHighLevel powers tens of thousands of agencies globally and generates hundreds of millions in ARR. Real agencies run SaaS Mode profitably, and we have built many of them. What is not real is the promise that you will hit 15 clients in your first two weeks. Actual timelines are longer and actual failure rates are higher than the guru content admits.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What the profitable GoHighLevel SaaS agencies have in common:</strong> Across our builds, every profitable SaaS Mode agency picked a specific niche and stuck with it for at least 6 months, had either an existing network or a real content strategy before spending on ads, charged $197 or more per client, and invested in onboarding to prevent first-30-day churn.
        </p>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE UNCOMFORTABLE TRUTH WE TELL EVERY CLIENT</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Roughly 60 to 70% of agencies who turn on SaaS Mode never reach 10 paying clients. Not because the model is fake, but because they treat it as passive income when it actually requires the same focused effort as any real business. If you are willing to work a niche for 6 to 12 months, the model absolutely works, and GHL Scale Up exists to remove the technical and strategic guesswork.
          </p>
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">PROOF IT WORKS AT SCALE</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            See how one agency scaled to serving international SaaS clients: 
            <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">International GoHighLevel SaaS Case Study →</Link>
          </p>
        </div>

        {/* Section 4: Oversaturated */}
        <h2 id="oversaturated" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          4. Is GoHighLevel SaaS Oversaturated in 2026?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> Another question we get constantly: 'Is starting a GoHighLevel SaaS still worth it, or is it oversaturated?' The fear is understandable, but it is usually based on a misunderstanding of what is actually saturated.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The direct answer:</strong> Generic 'GoHighLevel agency' positioning is oversaturated. Niche-specific positioning is not. If your positioning is 'CRM plus marketing automation plus SMS for agencies,' you sound identical to tens of thousands of other GoHighLevel agencies. If your positioning is 'appointment automation and review management for Chicago dental practices,' you have almost no competitors.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Why the niche approach wins:</strong> Every specific niche crossed with a specific outcome is under-served. The top of the funnel, the generic 'marketing agency' space, is crowded. The specific problems inside specific industries are not. This is the single most important strategic decision we help clients get right before we build anything.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">THE PROOF POINT WE SHARE</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Search 'best CRM for orthodontists,' then search 'best CRM for HVAC companies with 5 to 20 trucks.' Notice how much thinner the results get as you get specific. That thinness is your opportunity. Every under-served niche is a market waiting for someone to position clearly around it.
          </p>
        </div>

        {/* Section 5: Real Cost */}
        <h2 id="real-cost" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          5. What Does a GoHighLevel SaaS Business Really Cost?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          Most guides stop at the $497 plan price. The real costs show up later in messaging, email, AI usage, compliance, and onboarding time. We help you see that full picture early, so your pricing and margins are based on reality.
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

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The hidden costs we make sure you budget for:</strong> Twilio SMS usage (approximately $0.0079 per SMS wholesale), Mailgun email usage (approximately $0.001 per email), A2P 10DLC compliance fees, AI usage (Conversation AI, Voice AI, and Workflow AI carry per-usage costs), and onboarding staff time (realistically 4 to 8 hours per new client).
        </p>

        {/* Infographic 2: The Real Cost Stack */}
        <div className="bg-[#1C2E4A] rounded-xl p-6 my-6 text-white overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE REAL COST STACK OF A GOHIGHLEVEL SAAS</span>
          </div>
          <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src="/infographics/real-cost-stack.png"
              alt="The Real Cost Stack of a GoHighLevel SaaS - Layered cost graphic showing $497 base plan plus Twilio, Mailgun, A2P fees, AI usage, and onboarding costs"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'grid grid-cols-2 md:grid-cols-3 gap-3';
                  fallback.innerHTML = `
                    <div class="bg-[rgba(14,155,240,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">Base Plan</p>
                      <p class="text-lg font-bold text-[#F8D000]">$497</p>
                      <p class="text-xs text-white/40">Agency Pro</p>
                    </div>
                    <div class="bg-[rgba(37,201,125,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">Twilio</p>
                      <p class="text-lg font-bold text-[#25C97D]">$0.0079</p>
                      <p class="text-xs text-white/40">Per SMS</p>
                    </div>
                    <div class="bg-[rgba(248,208,0,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">Mailgun</p>
                      <p class="text-lg font-bold text-[#F8D000]">$0.001</p>
                      <p class="text-xs text-white/40">Per email</p>
                    </div>
                    <div class="bg-[rgba(220,53,69,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">A2P Fees</p>
                      <p class="text-lg font-bold text-[#DC3545]">$4-45</p>
                      <p class="text-xs text-white/40">Brand reg</p>
                    </div>
                    <div class="bg-[rgba(139,92,246,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">AI Usage</p>
                      <p class="text-lg font-bold text-[#8B5CF6]">$30-100</p>
                      <p class="text-xs text-white/40">Per active client</p>
                    </div>
                    <div class="bg-[rgba(14,155,240,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">Onboarding</p>
                      <p class="text-lg font-bold text-[#0E9BF0]">$200-400</p>
                      <p class="text-xs text-white/40">Per new client</p>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <p className="text-white/40 text-xs text-center mt-3">/infographics/real-cost-stack.png</p>
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">A2P COST DEEP DIVE</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            A2P fees confuse most SaaS agencies. Full breakdown of what you pay and what you rebill: 
            <Link href="/blog/a2p-fees-explained" className="text-[#0E9BF0] hover:underline ml-1">A2P Fees Explained →</Link>
          </p>
          <p className="text-sm text-[#1A2236] leading-relaxed mt-1">
            FULL PLAN PRICING: Every GoHighLevel plan, usage fee, and AI cost explained: 
            <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing: All Plans Explained →</Link>
          </p>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE REBILLING SAFETY VALVE</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            This is why rebilling matters, and why we configure it on every build. If you do not rebill Twilio and Mailgun to your clients, you absorb those costs from your margin. On a $297/month plan, if a client uses $50 in SMS and $30 in email, your effective revenue drops to $217. Across 20 clients that is $1,600/month you should be earning. Section 10 covers the rebilling math in full.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 md:p-8 text-center my-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Want to know whether the numbers actually work?
          </h3>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            As the #1 expert agency for GHL SaaS, GHL Scale Up maps your full cost, pricing, and margin picture before you spend a single dollar.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl">
            Talk to the GHL SaaS Experts →
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Section 6: Positioning */}
        <h2 id="positioning" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          6. SaaS vs SwaS vs Agency: How Should You Position?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> An established agency owner on Reddit captured the dilemma: 'Do you position yourself as SaaS or Agency? I have one high-level business already doing just under 20k MRR. Do you think buyers are more receptive to SaaS positioning or Software with a Service?' We help clients answer exactly this before they build.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Positioning</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Client Mindset</th>
                <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Monthly Price</th>
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
            <Lightbulb className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">What we recommend to beginners</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Start as SwaS. Pure SaaS requires case studies, brand trust, and product polish you do not yet have. Full Agency requires delivery capacity you do not yet have. SwaS lets you charge more than pure SaaS, spend enough time with clients to build real case studies, and produces much lower churn because clients feel supported.
          </p>
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">THE WHITE-LABEL LAYER</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            How white-labelling fits all three positioning models: 
            <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label: How It Works →</Link>
          </p>
        </div>

        {/* Section 7: Pick Niche */}
        <h2 id="pick-niche" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          7. How Do You Pick a Niche With No Network?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> Niche paralysis stops more of our prospective clients than any other single issue. Everyone says 'pick a niche' but almost nobody explains how. Here is the framework we walk clients through.
        </p>

        <ol className="space-y-2 mb-4 text-[0.9rem] font-light text-[#4A5568] list-decimal list-inside">
          <li><strong className="font-semibold text-[#1C2E4A]">Proximity:</strong> Which industries are you geographically or socially near? Proximity beats preference for beginners.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Network overlap:</strong> Which industries do the people you already know work in? Your first 3 clients usually come from someone connected to your existing network.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Price ceiling:</strong> Can this industry pay $297+/month? Higher transaction value per customer means higher software price tolerance.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Competition density:</strong> How many GoHighLevel agencies already serve this niche in your geography? Niche within niche is thin.</li>
          <li><strong className="font-semibold text-[#1C2E4A]">Personal knowledge:</strong> How well do you understand this industry's daily operations and vocabulary? You cannot sell to a niche you do not understand.</li>
        </ol>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">NICHES WE SEE WORK CONSISTENTLY</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Based on our builds across GHL Scale Up clients: real estate agents, dental practices, med spas, HVAC companies with 5 to 20 trucks, roofing contractors, chiropractors, personal injury law firms, boutique fitness studios, cleaning services, and pest control. All share high transaction value, poor industry-wide tech adoption, and clear ROI once GoHighLevel is deployed.
          </p>
        </div>

        {/* Infographic 3: 5-Factor Niche Selection Framework */}
        <div className="bg-[#1C2E4A] rounded-xl p-6 my-6 text-white overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="w-5 h-5 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE 5-FACTOR NICHE SELECTION FRAMEWORK</span>
          </div>
          <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src="/infographics/niche-selection-framework.png"
              alt="5-Factor Niche Selection Framework - Radar chart showing Proximity, Network Overlap, Price Ceiling, Competition Density, and Personal Knowledge"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3';
                  fallback.innerHTML = `
                    <div class="bg-[rgba(14,155,240,0.15)] rounded-lg p-3 text-center">
                      <div class="text-2xl mb-1">📍</div>
                      <p class="text-xs font-bold text-[#0E9BF0]">Proximity</p>
                      <p class="text-xs text-white/50">Geographic or social nearness</p>
                    </div>
                    <div class="bg-[rgba(37,201,125,0.15)] rounded-lg p-3 text-center">
                      <div class="text-2xl mb-1">🔗</div>
                      <p class="text-xs font-bold text-[#25C97D]">Network Overlap</p>
                      <p class="text-xs text-white/50">People you already know</p>
                    </div>
                    <div class="bg-[rgba(248,208,0,0.15)] rounded-lg p-3 text-center">
                      <div class="text-2xl mb-1">💰</div>
                      <p class="text-xs font-bold text-[#F8D000]">Price Ceiling</p>
                      <p class="text-xs text-white/50">Can they pay $297+?</p>
                    </div>
                    <div class="bg-[rgba(220,53,69,0.15)] rounded-lg p-3 text-center">
                      <div class="text-2xl mb-1">⚔️</div>
                      <p class="text-xs font-bold text-[#DC3545]">Competition Density</p>
                      <p class="text-xs text-white/50">How many GHL agencies?</p>
                    </div>
                    <div class="bg-[rgba(139,92,246,0.15)] rounded-lg p-3 text-center">
                      <div class="text-2xl mb-1">🧠</div>
                      <p class="text-xs font-bold text-[#8B5CF6]">Personal Knowledge</p>
                      <p class="text-xs text-white/50">Industry understanding</p>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <p className="text-white/40 text-xs text-center mt-3">/infographics/niche-selection-framework.png</p>
        </div>

        {/* CTA 1 - After Section 7 */}
        <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 md:p-8 text-center my-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Need help picking your niche?
          </h3>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            GHL Scale Up helps you validate your niche, build a niche-specific Snapshot, and configure your entire SaaS Mode setup. From technical configuration to go-to-market strategy, we help you launch with confidence.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl">
            Book Your Strategy Call →
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Section 8: Non-Technical */}
        <h2 id="non-technical" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          8. Can You Run a GoHighLevel SaaS Business If You Are Not Technical?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> A very common Reddit sentiment: 'I want to start a GHL SaaS agency but I'm not tech savvy. Would it be worth it to hire a VA to handle the backend so I can focus on marketing and sales?' The answer is yes, and it is one of the most common successful configurations we see.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The sales-strong, tech-light model:</strong> You focus on client conversations, positioning, offers, closing, and account management. A technical VA (or GHL Scale Up) handles snapshot maintenance, workflow builds, and technical onboarding. A technical GoHighLevel VA typically costs $500 to $1,500/month depending on experience.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What to keep in-house vs outsource:</strong> Keep everything client-facing, sales calls, positioning, pricing, retention. Outsource snapshot updates, custom workflow builds, technical onboarding, rebilling configuration, and non-critical support. This is exactly the layer GHL Scale Up handles for founders who would rather sell than configure.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">NEED A DEDICATED GHL VA?</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            We provide dedicated GoHighLevel virtual assistants to run your account day to day: 
            <Link href="/services/virtual-assistant" className="text-[#0E9BF0] hover:underline ml-1">Virtual Assistant for GHL Management →</Link>
          </p>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">WHERE THIS MODEL BREAKS</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            The tech-light model breaks in two situations. One, when the founder uses a general-purpose VA instead of a GoHighLevel-experienced one. Two, when the founder scales past roughly 25 clients without a second technical resource. One VA can support 15 to 20 active clients well. Beyond that you need a second, or a partner like GHL Scale Up handling the technical layer.
          </p>
        </div>

        {/* Section 9: First 10 Clients */}
        <h2 id="first-10-clients" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          9. How Do You Get Your First GoHighLevel SaaS Clients?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> This is the single most common source of frustration we hear. One Reddit user put it bluntly: 'Im doing SAAS for a while now and didn't get a single client probably because im really bad at marketing.' Getting the first 10 clients is a different game than scaling past them.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The realistic timeline we set:</strong> 60 to 90 days to your first 10 clients with an existing network and daily selling effort. 90 to 120 days cold outreaching to a new niche. 6 to 9 months as a complete beginner with no network and part-time effort.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The approach that works:</strong> Networking and positioning beat cold outreach for the first clients. Warm outreach to your network, active helpful participation where your niche asks questions publicly, and founder-led content that shows how you think all produce warmer leads than cold email. Cold outreach is a supporting channel, not the primary one, until you have proof.
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
            <span className="text-sm font-bold text-[#0E9BF0]">THE FULL PLAYBOOK</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Our complete step-by-step guide to landing the first 10 clients, with channels, scripts, and a 90-day plan: 
            <Link href="/blog/get-first-10-gohighlevel-saas-clients" className="text-[#0E9BF0] hover:underline ml-1">How to Get Your First 10 GoHighLevel SaaS Clients →</Link>
          </p>
        </div>

        {/* Section 10: Pricing */}
        <h2 id="pricing" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          10. How Do You Price and Rebill Without Losing Money?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> The single most common profit leak we find when auditing GoHighLevel SaaS accounts is rebilling left switched off, or markup set too low to cover overhead. Businesses lose real money here every month without realising it.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Rebilling defined:</strong> Rebilling is GoHighLevel's feature that lets you resell Twilio SMS, Mailgun email, and other usage costs to your clients at a markup you control. Without it, every message your clients send comes out of your agency wallet.
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

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The plan structure we recommend:</strong> Three tiers give clients a clear middle choice without decision paralysis. A Starter tier around $97 to $147/month, a Growth tier around $197 to $247/month, and a Pro tier around $297 to $497/month. Make the middle tier the most attractive, since most SaaS businesses earn the majority of MRR from the mid-tier plan. Never price below $97/month.
        </p>

        {/* Infographic 4: SaaS Margin at 5/10/20/50 Clients */}
        <div className="bg-[#1C2E4A] rounded-xl p-6 my-6 text-white overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">SAAS MARGIN AT 5 / 10 / 20 / 50 CLIENTS</span>
          </div>
          <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src="/infographics/saas-margin-chart.png"
              alt="SaaS Margin at 5, 10, 20, and 50 Clients - Bar chart showing net margin climbing non-linearly as clients grow"
              width={800}
              height={350}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'grid grid-cols-2 md:grid-cols-4 gap-3';
                  fallback.innerHTML = `
                    <div class="bg-[rgba(14,155,240,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">5 Clients</p>
                      <p class="text-lg font-bold text-[#0E9BF0]">$488</p>
                      <p class="text-xs text-white/40">Net margin/mo</p>
                    </div>
                    <div class="bg-[rgba(37,201,125,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">10 Clients</p>
                      <p class="text-lg font-bold text-[#25C97D]">$1,473</p>
                      <p class="text-xs text-white/40">Net margin/mo</p>
                    </div>
                    <div class="bg-[rgba(248,208,0,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">20 Clients</p>
                      <p class="text-lg font-bold text-[#F8D000]">$3,443</p>
                      <p class="text-xs text-white/40">Net margin/mo</p>
                    </div>
                    <div class="bg-[rgba(220,53,69,0.15)] rounded-lg p-3 text-center">
                      <p class="text-xs text-white/60">50 Clients</p>
                      <p class="text-lg font-bold text-[#25C97D]">$9,353</p>
                      <p class="text-xs text-white/40">Net margin/mo</p>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <p className="text-white/40 text-xs text-center mt-3">/infographics/saas-margin-chart.png</p>
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">TOLL-FREE VS A2P</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Choosing the right number type for your client mix: 
            <Link href="/blog/toll-free-vs-a2p" className="text-[#0E9BF0] hover:underline ml-1">Toll-Free vs A2P →</Link>
          </p>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE PRICING MISTAKE WE FIX MOST OFTEN</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Charging too little and leaving rebilling off, together. $47/month plans attract price-sensitive clients who churn fast and demand heavy support. Combine that with rebilling switched off, and a single client sending 20,000 SMS/month can quietly erase your margin. Every agency we have seen priced at $47 to $97 either churned out or repriced upward within 12 months.
          </p>
        </div>

        {/* Section 11: Churn */}
        <h2 id="churn" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          11. Why Do GoHighLevel SaaS Clients Cancel, and How Do You Stop It?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> This is the deepest and most expensive problem in the whole model, and the one we spend the most time preventing. An agency owner on ideas.gohighlevel.com captured the client experience exactly: 'What do I do first?' 'Where do I upload contacts?' 'Why is nothing set up yet?' Broken onboarding in the first 7 to 14 days is the single biggest cause of churn.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What actually happens when a client cancels in month 1:</strong> They pay you, get access, log in on day 2, feel overwhelmed, look for a walkthrough specific to their business, cannot find one, close the tab, and never return. By day 14 they have forgotten what they signed up for. By day 28 they cancel through Stripe.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">The first-30-days playbook we build in</span>
          </div>
          <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
            <li>An automated day-0 welcome with one clear next action</li>
            <li>A live day-1 onboarding call</li>
            <li>Daily light-touch check-ins through day 7</li>
            <li>A day-7 milestone celebration</li>
            <li>A second live call on day 14</li>
            <li>A day-21 results email</li>
            <li>A day-30 retention check-in</li>
            <li>Plus a pre-configured snapshot so the client logs into a working system rather than an empty dashboard</li>
          </ol>
        </div>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">Migrating clients in is itself a churn risk:</strong> If your SaaS client is moving from another CRM, a poor migration in week one destroys trust immediately. We have published detailed guides for the most common migrations so this step goes smoothly:
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">CLIENT MIGRATION GUIDES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {relatedResources.map((resource, idx) => (
              <SmallBlogCard key={idx} blog={resource} compact={true} />
            ))}
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
            FULL MIGRATION SERVICE: We handle client migrations end to end: 
            <Link href="/services/migration" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Migration Service →</Link>
          </p>
        </div>

        {/* Section 12: Technical Setup */}
        <h2 id="technical-setup" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          12. What Does GoHighLevel SaaS Technical Setup Involve?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> Founders consistently underestimate the technical setup, then lose weeks to it. Done by an experienced team it takes 5 to 7 business days. Done DIY while learning, it takes 3 to 6 weeks, and three steps trip almost everyone up: the snapshot, rebilling, and A2P registration.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">The setup, in order:</strong> Upgrade to Agency Pro, connect Stripe in live mode, create pricing tiers in the SaaS Configurator, configure feature access per tier, attach your niche snapshot, customise your self-service sign-up page, configure your white-label sending domain, build an offboarding automation, and run a full end-to-end test with a real Stripe payment before going live. The offboarding automation is the step almost everyone skips, and it is the one that causes revenue leaks later.
        </p>

        {/* Infographic 5: The 9-Step GoHighLevel SaaS Setup */}
        <div className="bg-[#1C2E4A] rounded-xl p-6 my-6 text-white overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">THE 9-STEP GOHIGHLEVEL SAAS SETUP</span>
          </div>
          <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src="/infographics/saas-setup-steps.png"
              alt="The 9-Step GoHighLevel SaaS Setup - Numbered step-flow from Agency Pro through Stripe, SaaS Configurator, Feature Gating, Snapshot, Sign-Up Page, White-Label Domain, Offboarding, to Test & Launch"
              width={800}
              height={350}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'grid grid-cols-2 md:grid-cols-3 gap-2';
                  fallback.innerHTML = `
                    <div class="bg-[rgba(14,155,240,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#0E9BF0]">1. Agency Pro</span>
                    </div>
                    <div class="bg-[rgba(14,155,240,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#0E9BF0]">2. Stripe</span>
                    </div>
                    <div class="bg-[rgba(14,155,240,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#0E9BF0]">3. SaaS Configurator</span>
                    </div>
                    <div class="bg-[rgba(37,201,125,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#25C97D]">4. Feature Gating</span>
                    </div>
                    <div class="bg-[rgba(37,201,125,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#25C97D]">5. Snapshot</span>
                    </div>
                    <div class="bg-[rgba(37,201,125,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#25C97D]">6. Sign-Up Page</span>
                    </div>
                    <div class="bg-[rgba(248,208,0,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#F8D000]">7. White-Label Domain</span>
                    </div>
                    <div class="bg-[rgba(248,208,0,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#F8D000]">8. Offboarding</span>
                    </div>
                    <div class="bg-[rgba(248,208,0,0.15)] rounded-lg p-2 text-center">
                      <span class="text-xs font-bold text-[#F8D000]">9. Test & Launch</span>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <p className="text-white/40 text-xs text-center mt-3">/infographics/saas-setup-steps.png</p>
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">STEP-BY-STEP SETUP GUIDE</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            Our complete 10-step technical walkthrough, including the SaaS Configurator, pricing tiers, and go-live checklist: 
            <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel SaaS Mode Setup →</Link>
          </p>
          <p className="text-sm text-[#1A2236] leading-relaxed mt-1">
            BUILD YOUR SNAPSHOT: The snapshot is the highest-leverage part of your setup: 
            <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline ml-1">How to Create a GoHighLevel Snapshot →</Link>
          </p>
        </div>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">The A2P compliance layer, in full</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            A2P 10DLC registration is mandatory for US SMS and is where most DIY setups stall. Our complete A2P library covers every part of it:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm mt-2">
            {a2pBlogs.map((blog, idx) => (
              <Link key={idx} href={`/blog/${blog.slug}`} className="text-[#0E9BF0] hover:underline text-xs">
                {blog.title} →
              </Link>
            ))}
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
            SERVING CANADIAN CLIENTS? 
            <Link href="/blog/gohighlevel-canadian-numbers" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Canadian Numbers →</Link>
          </p>
        </div>

        <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
            <span className="text-sm font-bold text-[#F8D000]">WHERE MOST DIY SETUPS BREAK</span>
          </div>
          <p className="text-sm text-[#1A2236] leading-relaxed">
            The snapshot, rebilling, and A2P registration. If you are doing this yourself, focus on these three first. Or let GHL Scale Up, the best GoHighLevel SaaS agency, handle the full setup while keeping the pricing, margins, onboarding, and long-term business model in view.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 md:p-8 text-center my-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Skip the 3-to-6-week DIY setup.
          </h3>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            Let the best GoHighLevel SaaS agency handle the full setup in 5 to 7 business days, with the technical details and the business model thought through.
          </p>
          <Link href="/services/saas-setup" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl">
            Build My SaaS with GHL Scale Up →
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Section 13: Cancellations */}
        <h2 id="cancellations" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-4">
          13. How Do You Handle Cancellations Cleanly?
        </h2>
        
        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What we see:</strong> Documented on ideas.gohighlevel.com and confirmed across our own builds: 'When a client cancels their SaaS subscription, add-ons remain active and billable, often to the agency, without any notice.' Cancellation done wrong quietly costs you money for months.
        </p>

        <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
          <strong className="font-semibold text-[#1C2E4A]">What happens by default:</strong> The client's Stripe subscription cancels, but their platform access continues until you manually revoke it, and any add-ons attached to their sub-account keep billing you because the master subscription covering them is gone.
        </p>

        <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
            <span className="text-sm font-bold text-[#0E9BF0]">The cancellation workflow we configure</span>
          </div>
          <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
            <li>A Stripe-cancelled webhook fires into GoHighLevel</li>
            <li>An internal notification goes to your team</li>
            <li>A client-facing email confirms cancellation and lists active add-ons</li>
            <li>Access suspends at 24 hours</li>
            <li>All add-ons are audited and cancelled at 48 hours</li>
            <li>Data is exported as a courtesy at 7 days</li>
            <li>The sub-account is permanently deleted at 30 days</li>
          </ol>
          <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
            GoHighLevel's Custom SaaS Cancellation Flow also captures exit reasons and can present save offers automatically.
          </p>
        </div>

        {/* Section 14: FAQ */}
        <h2 id="faq" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#1C2E4A] mt-12 mb-6">
          14. Frequently Asked Questions
        </h2>

        <div className="space-y-3 max-w-[800px]">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-[0.92rem] font-semibold text-[#1A2236] hover:text-[#0E9BF0] transition-colors">
                {faq.q}
                <ChevronDown className="w-4 h-4 text-[#8A9BB0] transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-[#5C6880] leading-relaxed pb-4">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* About GHL Scale Up */}
        <div className="mt-12 pt-6 border-t border-[#DDE1E9]">
          <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
            <h3 className="text-base font-bold text-[#1A2236] mb-2">About GHL Scale Up</h3>
            <p className="text-sm text-[#5C6880] leading-relaxed">
              <strong>GHL Scale Up</strong> is the #1 expert agency for GHL SaaS, founded by Aryan Trivedi and serving businesses across 6 countries, including the US, UK, Australia, Canada, and New Zealand. We have delivered 200+ builds for SaaS founders, agencies, real estate firms, home service businesses, coaches, and enterprises. Our work goes beyond the technical setup: we help clients think through pricing, margins, onboarding, retention, and how the SaaS can become a stronger business. Everything in this hub reflects what we have genuinely seen work, fail, and improve across those builds.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Globe className="w-4 h-4 text-[#0E9BF0]" />
              <Link href="/" className="text-sm text-[#0E9BF0] hover:underline">ghlscaleup.com</Link>
              <span className="text-[#DDE1E9]">|</span>
              <span className="text-sm text-[#5C6880]">Contact: ghlscaleup.com/contact-us</span>
              <span className="text-[#DDE1E9]">|</span>
              <span className="text-sm text-[#5C6880]">aryan@ghlscaleup.com</span>
            </div>
          </div>
        </div>

        {/* Appendix: Full Resource Index */}
        <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
          <h3 className="text-base font-bold text-[#1A2236] mb-4">Appendix: Full GoHighLevel SaaS Resource Index</h3>
          <p className="text-sm text-[#5C6880] mb-4">Every resource linked throughout this hub, gathered here for quick reference. All links were verified live on ghlscaleup.com in July 2026.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#F8F9FB] rounded-xl p-4">
              <p className="text-xs font-bold text-[#0E9BF0] uppercase tracking-wider mb-2">SaaS Mode Core</p>
              <ul className="space-y-1 text-xs">
                <li><Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">GoHighLevel SaaS Mode Setup →</Link></li>
                <li><Link href="/blog/ghl-white-label-saas-guide" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">GoHighLevel White Label SaaS Guide →</Link></li>
                <li><Link href="/blog/gohighlevel-white-label" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">GoHighLevel White Label: How It Works →</Link></li>
                <li><Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">How to Create a GoHighLevel Snapshot →</Link></li>
                <li><Link href="/blog/get-first-10-gohighlevel-saas-clients" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">How to Get Your First 10 Clients →</Link></li>
              </ul>
            </div>
            <div className="bg-[#F8F9FB] rounded-xl p-4">
              <p className="text-xs font-bold text-[#0E9BF0] uppercase tracking-wider mb-2">Agency Foundation</p>
              <ul className="space-y-1 text-xs">
                <li><Link href="/blog/why-agencies-switching-to-gohighlevel" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">Why Agencies Are Switching →</Link></li>
                <li><Link href="/blog/gohighlevel-for-agencies" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">GoHighLevel for Agencies →</Link></li>
                <li><Link href="/blog/gohighlevel-pricing" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">GoHighLevel Pricing →</Link></li>
              </ul>
            </div>
            <div className="bg-[#F8F9FB] rounded-xl p-4">
              <p className="text-xs font-bold text-[#0E9BF0] uppercase tracking-wider mb-2">A2P Compliance</p>
              <ul className="space-y-1 text-xs">
                {a2pBlogs.slice(0, 4).map((blog, idx) => (
                  <li key={idx}><Link href={`/blog/${blog.slug}`} className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">{blog.title} →</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8F9FB] rounded-xl p-4">
              <p className="text-xs font-bold text-[#0E9BF0] uppercase tracking-wider mb-2">Services</p>
              <ul className="space-y-1 text-xs">
                <li><Link href="/services/saas-setup" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">SaaS Setup Service →</Link></li>
                <li><Link href="/services/migration" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">Migration Service →</Link></li>
                <li><Link href="/services/virtual-assistant" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">Virtual Assistant Service →</Link></li>
                <li><Link href="/case-studies" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">Case Studies →</Link></li>
                <li><Link href="/contact" className="text-[#4A5568] hover:text-[#0E9BF0] transition-colors">Book a Free Strategy Call →</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-8 text-center my-12">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Ready to build a GoHighLevel SaaS business that can actually grow?
          </h3>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            GHL Scale Up, the best and biggest agency for GoHighLevel SaaS, has delivered 200+ builds across 6 countries. We help you get the setup, pricing, margins, onboarding, and launch working together.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl">
            Book a Free Call with the #1 GHL SaaS Team →
            <ArrowRight className="w-4 h-4" />
          </Link>
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