// app/blog/ghl-lead-generation-strategies/client.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  Users,
  Target,
  Mail,
  Globe,
  MessageCircle,
  Calendar,
  BarChart3,
  TrendingUp,
  ArrowRight,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Settings,
  Zap,
  Filter,
  Download,
  Share2,
  Star,
  Eye,
  MousePointer,
  FileText
} from 'lucide-react';
import CopyButton from '@/components/blog/CopyButton';

export default function GHLLeadGenerationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = document.querySelectorAll('h2[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    headings.forEach((heading) => observer.observe(heading));

    const progressBar = document.getElementById('progress-bar');
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      if (progressBar) {
        progressBar.style.width = Math.min(progress, 100) + '%';
      }
    };
    window.addEventListener('scroll', updateProgress);
    
    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
      window.removeEventListener('scroll', updateProgress);
    };
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

  const tocItems = [
    { id: 'lead-gen-problem', title: '1. The Lead Generation Problem' },
    { id: 'attract', title: '2. Attract: Getting Traffic' },
    { id: 'lead-magnets', title: '3. High-Converting Lead Magnets' },
    { id: 'landing-pages', title: '4. Landing Pages That Convert' },
    { id: 'multi-channel', title: '5. Multi-Channel Lead Capture' },
    { id: 'qualification', title: '6. Automated Lead Qualification' },
    { id: 'nurture', title: '7. Lead Nurture Sequences' },
    { id: 'analytics', title: '8. Tracking & Optimization' },
    { id: 'scaling', title: '9. Scaling Your Lead Generation' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-[#0E9BF0] z-50 transition-all duration-100" id="progress-bar" />

      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <Link href="/blog" className="hover:text-[#0E9BF0] transition-colors">Blog</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <span className="text-[#1A2236] font-medium">GHL Lead Generation Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(248,208,0,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(14,155,240,0.15)] border border-[rgba(14,155,240,0.3)] text-[#0E9BF0] text-[11px] md:text-xs font-semibold tracking-wide uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full mb-4 md:mb-6">
            <Target className="w-3 h-3" />
            Marketing · Lead Generation
          </div>
          
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-3 md:mb-5 tracking-[-0.02em]">
            How to Generate<br />
            <span className="text-[#F8D000]">High-Quality Leads</span><br />
            Using GHL
          </h1>
          
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 md:mb-9 max-w-[620px]">
            Learn the proven strategies to attract, capture, and convert leads using GoHighLevel automation. 
            Stop chasing low-quality leads and start building a predictable pipeline.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center font-bold text-white text-sm md:text-base">GS</div>
              <div>
                <div className="text-xs md:text-sm font-medium text-white">GHL Scale Up Team</div>
                <div className="text-[10px] md:text-xs text-white/50">Published March 20, 2026</div>
              </div>
            </div>
            <div className="w-px h-6 md:h-8 bg-white/15" />
            <div className="flex gap-3 md:gap-5">
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <Clock className="w-3 h-3" />
                6 min read
              </span>
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <GraduationCap className="w-3 h-3" />
                Intermediate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16">
          
          {/* Article Content */}
          <main className="min-w-0">
            <p className="text-base md:text-[19px] leading-relaxed text-[#2D3748] mb-8 md:mb-12 pb-6 md:pb-10 border-b border-[#DDE1E9]">
              Most businesses waste time and money chasing low-quality leads. They run ads to the wrong audience, capture emails that never convert, and follow up inconsistently. 
              <strong className="text-[#1A2236]"> GoHighLevel changes this.</strong> With the right strategy, you can attract the right leads, capture them automatically, and convert them into paying customers — all from one platform.
            </p>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 my-8 md:my-10">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <Users className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">3</span>x</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">higher lead quality using GHL's qualification tools</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <Zap className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0">80</span>%</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">faster lead response with automated workflows</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center sm:col-span-2 lg:col-span-1">
                <TrendingUp className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0">5</span>x</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">higher conversion with multi-channel follow-up</div>
              </div>
            </div>

            {/* Section 1 */}
            <h2 id="lead-gen-problem" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">1. The Lead Generation Problem</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The typical lead generation process is broken: run ads → collect emails → send generic emails → hope someone replies. This approach generates quantity, not quality.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Quality leads are leads that are ready to buy, have the budget, and fit your ideal customer profile. GHL's automation capabilities let you build a system that attracts, qualifies, and converts only the leads that matter.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">01</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                  <Target className="w-3 h-3 text-[#0E9BF0]" />
                </div>
                The Shift
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">From Quantity to Quality</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Stop measuring leads by volume. Start measuring by conversion rate. A lead generation system that produces 100 low-quality leads that never buy is worse than a system that produces 10 high-quality leads that close at 50%.</p>
            </div>

            {/* Section 2 */}
            <h2 id="attract" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">2. Attract: Getting Traffic</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Before you can capture leads, you need traffic. GHL integrates with all major traffic sources:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Facebook & Instagram Ads (direct integration)',
                'Google Ads (via tracking pixels and forms)',
                'Organic social media (LinkedIn, Twitter, TikTok)',
                'SEO-optimized landing pages in GHL',
                'Referral programs and affiliate tracking',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The key is to send traffic to the right place — not your homepage, but a dedicated lead capture page designed to convert.</p>

            <div className="bg-[#0B1628] rounded-xl p-5 md:p-7 lg:p-8 my-8 md:my-9 flex gap-3 md:gap-4 items-start">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-[rgba(248,208,0,0.15)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                <Share2 className="w-4 h-4 text-[#F8D000]" />
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-[#F8D000] mb-1">Pro Tip</div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">Start with one traffic source and master it before adding another. Facebook Ads + GHL is a powerful combination for most B2C businesses. LinkedIn + GHL works better for B2B.</p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 id="lead-magnets" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">3. High-Converting Lead Magnets</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">A lead magnet is what you offer in exchange for contact information. The best lead magnets solve a specific problem for your ideal customer.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Examples that work well with GHL:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Checklist or worksheet (PDF delivered via email)',
                'Template or swipe file (access via GHL membership area)',
                'Video training series (delivered via GHL email sequences)',
                'Free consultation or audit (booked directly in GHL calendar)',
                'Calculator or assessment tool (built in GHL forms)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <FileText className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Your lead magnet should be directly related to your core offer. If you sell funnel-building services, your lead magnet could be a "Funnel Audit Checklist." This attracts leads who already care about funnels.</p>

            {/* Section 4 */}
            <h2 id="landing-pages" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">4. Landing Pages That Convert</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GHL's funnel builder is perfect for creating high-converting landing pages. Here's what every landing page needs:</p>
            
            <ol className="list-decimal list-inside my-6 md:my-8 space-y-2 md:space-y-3 text-sm md:text-base text-[#5C6880] ml-2 md:ml-4">
              <li>A compelling headline that grabs attention</li>
              <li>A clear description of the lead magnet's value</li>
              <li>Social proof (testimonials, trust badges)</li>
              <li>A simple form (name + email is usually enough)</li>
              <li>A strong call-to-action button</li>
              <li>Mobile-responsive design</li>
            </ol>
            
            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">04</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F8D000] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#a07a00] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#FFFBE6] rounded flex items-center justify-center">
                  <Eye className="w-3 h-3 text-[#a07a00]" />
                </div>
                Conversion Tip
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Remove Distractions</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Your landing page should have only one goal: getting the lead to submit the form. Remove navigation menus, footer links, and anything else that might distract from the CTA.</p>
            </div>

            {/* Section 5 */}
            <h2 id="multi-channel" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">5. Multi-Channel Lead Capture</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Not all leads will come through your landing page. GHL lets you capture leads from multiple channels:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Web forms embedded on your site',
                'Facebook lead ads (automatic sync to GHL)',
                'Inbound SMS (keyword triggers)',
                'Phone calls (AI voice agent)',
                'Live chat widget on your website',
                'QR codes on printed materials',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <Globe className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">All leads go into the same GHL CRM, so you have a single source of truth for your entire pipeline.</p>

            <div className="border-l-4 border-[#0E9BF0] my-8 md:my-10 pl-4 md:pl-7 py-1">
              <p className="text-base md:text-[22px] font-semibold text-[#1C2E4A] leading-relaxed italic">"The best lead generation systems meet prospects where they already are — not where you wish they'd go."</p>
            </div>

            {/* Section 6 */}
            <h2 id="qualification" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">6. Automated Lead Qualification</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Not every lead is ready to buy. GHL's workflows can automatically qualify leads based on their behavior:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Lead opens email → +10 points',
                'Lead clicks pricing link → +25 points',
                'Lead visits website 3+ times → +15 points',
                'Lead fills out contact form → +30 points',
                'Lead books a call → +50 points (sales ready)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <Filter className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Once a lead reaches a certain score, they can be automatically moved to your sales pipeline, assigned to a team member, or sent a special offer.</p>

            {/* Section 7 */}
            <h2 id="nurture" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">7. Lead Nurture Sequences</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Most leads won't buy immediately. They need to be nurtured. GHL's automation lets you build nurture sequences that run on autopilot:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 my-6 md:my-8">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <Mail className="w-5 h-5 text-[#0E9BF0] mb-2" />
                <div className="font-semibold text-[#1C2E4A] mb-1">Email Sequence</div>
                <p className="text-xs text-[#5C6880]">5-7 emails over 2 weeks delivering value and building trust</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <MessageCircle className="w-5 h-5 text-[#0E9BF0] mb-2" />
                <div className="font-semibold text-[#1C2E4A] mb-1">SMS Sequence</div>
                <p className="text-xs text-[#5C6880]">Short, punchy texts with links to valuable content</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <Calendar className="w-5 h-5 text-[#0E9BF0] mb-2" />
                <div className="font-semibold text-[#1C2E4A] mb-1">Voice Drops</div>
                <p className="text-xs text-[#5C6880]">Personalized audio messages at key moments</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <Download className="w-5 h-5 text-[#0E9BF0] mb-2" />
                <div className="font-semibold text-[#1C2E4A] mb-1">Content Drip</div>
                <p className="text-xs text-[#5C6880]">Access to gated content released over time</p>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">A well-designed nurture sequence can convert 20-40% of leads who weren't ready to buy immediately.</p>

            {/* Section 8 */}
            <h2 id="analytics" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">8. Tracking & Optimization</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GHL provides detailed analytics on your lead generation performance:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Traffic sources and conversion rates',
                'Landing page performance by variant',
                'Lead magnet download rates',
                'Email open and click-through rates',
                'Lead score distribution',
                'Time-to-conversion metrics',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <BarChart3 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Use this data to continuously improve. Test different headlines, lead magnets, and follow-up sequences. Double down on what works, cut what doesn't.</p>

            {/* Section 9 */}
            <h2 id="scaling" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">9. Scaling Your Lead Generation</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Once you have a system that works, it's time to scale:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Increase ad spend on winning campaigns',
                'Create additional lead magnets for different segments',
                'Add retargeting campaigns for non-converters',
                'Launch a referral program for existing leads',
                'Partner with complementary businesses',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <TrendingUp className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The beauty of GHL is that it scales automatically. Your landing pages, forms, and follow-up sequences handle increased volume without additional work from you.</p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">Conclusion: Build Your Lead Generation System Today</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Generating high-quality leads doesn't have to be complicated. Start with one lead magnet, one landing page, and one traffic source. Get that working before adding complexity.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The businesses that win are the ones that systemize their lead generation. They don't rely on sporadic efforts or luck. They have a predictable, repeatable process for attracting and converting ideal customers.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">With GHL, you have all the tools you need in one place. Landing pages, forms, CRM, email, SMS, automation — it's all integrated. Now it's time to put them to work.</p>

            {/* CTA Block */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center relative overflow-hidden my-12 md:my-16">
              <div className="absolute -top-14 -right-14 w-72 h-72 bg-[radial-gradient(circle,rgba(248,208,0,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 md:px-3.5 py-1 md:py-1.5 rounded-full mb-4 md:mb-5">GHL Scale Up</div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 md:mb-3">Ready to Generate More Quality Leads?</h2>
                <p className="text-sm md:text-base text-white/65 max-w-md mx-auto mb-6 md:mb-8">We've built lead generation systems for 50+ businesses. Let us help you attract, capture, and convert more ideal customers.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1628] font-bold px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all">
                    Book a free strategy call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg text-sm md:text-base hover:bg-white/20 transition-all">See our work</Link>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar - Sticky */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            {/* Table of Contents */}
            <nav className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6">
              <div className="text-xs font-bold tracking-wider uppercase text-[#5C6880] mb-4 flex items-center gap-2">
                <BookOpen className="w-3 h-3" />
                In this guide
              </div>
              <ul className="space-y-0.5">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className={`block w-full text-left text-xs md:text-sm py-1.5 px-2 rounded transition-all ${
                        activeId === item.id
                          ? 'bg-[#E8F5FE] text-[#0E9BF0] font-medium'
                          : 'text-[#5C6880] hover:bg-white hover:text-[#1A2236]'
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Card */}
            <div className="bg-[#0B1628] rounded-xl p-5 md:p-6">
              <div className="text-sm md:text-base font-bold text-white mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#F8D000]" />
                Want us to build your lead gen system?
              </div>
              <div className="text-xs md:text-sm text-white/60 leading-relaxed mb-4 md:mb-5">We've built lead generation systems for 50+ businesses. Landing pages, forms, follow-up sequences — all integrated.</div>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1628] font-bold py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] transition-all">
                Get a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ghlscaleup.com/blog/ghl-lead-generation-strategies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://twitter.com/intent/tweet?url=https://ghlscaleup.com/blog/ghl-lead-generation-strategies&text=How+to+Generate+High-Quality+Leads+Using+GHL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <Twitter className="w-3 h-3" />
                  X
                </a>
                <CopyButton />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      <section className="border-t border-[#DDE1E9] py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mb-6 md:mb-8">Related articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <Link href="/blog/gohighlevel-funnel-builder-features" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">GoHighLevel</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">GoHighLevel Funnel Builder: 7 Features Top Agencies Use to Build Faster</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
            <Link href="/blog/ghl-ai-workflows-lead-response" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">AI</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">GHL AI Workflows to Respond to Leads in Under 10 Seconds</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
            <Link href="/blog/freelancer-to-ghl-saas-founder" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">Business</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">From Freelancer to GHL SaaS Founder: Recurring Revenue</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}