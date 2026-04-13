// app/blog/freelancer-to-ghl-saas-founder/client.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  DollarSign,
  Rocket,
  Target,
  Users,
  BarChart3,
  Calendar,
  Briefcase,
  ArrowRight,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Settings,
  Star,
  Zap,
  LineChart,
  Award,
  Coffee,
  Globe,
  Shield
} from 'lucide-react';
import CopyButton from '@/components/blog/CopyButton';

export default function FreelancerToSaaSClient() {
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
    { id: 'freelancer-problem', title: '1. The Freelancer\'s Ceiling' },
    { id: 'saas-model', title: '2. Why SaaS Changes Everything' },
    { id: 'mindset-shift', title: '3. The Mindset Shift Required' },
    { id: 'first-snapshot', title: '4. Building Your First Snapshot' },
    { id: 'pricing-models', title: '5. Pricing Models That Work' },
    { id: 'finding-clients', title: '6. Finding Your First SaaS Clients' },
    { id: 'onboarding', title: '7. Automating Client Onboarding' },
    { id: 'scaling', title: '8. Scaling Beyond 100 Clients' },
    { id: 'avoid-mistakes', title: '9. Common Mistakes to Avoid' },
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
          <span className="text-[#1A2236] font-medium">Freelancer to GHL SaaS Founder</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(248,208,0,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(248,208,0,0.15)] border border-[rgba(248,208,0,0.3)] text-[#F8D000] text-[11px] md:text-xs font-semibold tracking-wide uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full mb-4 md:mb-6">
            <Briefcase className="w-3 h-3" />
            Business · SaaS
          </div>
          
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-3 md:mb-5 tracking-[-0.02em]">
            From Freelancer to<br />
            <span className="text-[#F8D000]">GHL SaaS Founder</span>:<br />
            Recurring Revenue
          </h1>
          
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 md:mb-9 max-w-[620px]">
            Transition from one-off projects to a scalable SaaS business using GHL white-label. 
            Stop trading time for money and start building recurring revenue.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center font-bold text-white text-sm md:text-base">GS</div>
              <div>
                <div className="text-xs md:text-sm font-medium text-white">GHL Scale Up Team</div>
                <div className="text-[10px] md:text-xs text-white/50">Published March 25, 2026</div>
              </div>
            </div>
            <div className="w-px h-6 md:h-8 bg-white/15" />
            <div className="flex gap-3 md:gap-5">
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <Clock className="w-3 h-3" />
                7 min read
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
              You've been building GoHighLevel funnels, setting up automations, and delivering one-off projects for clients. 
              The money is good, but there's a problem: <strong className="text-[#1A2236]">when you stop working, the income stops.</strong> 
              Every month starts at zero. What if you could build recurring revenue while doing less work?
            </p>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 my-8 md:my-10">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <DollarSign className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">10</span>x</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">higher valuation for SaaS vs service business</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <TrendingUp className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0">$10k</span></div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">average monthly recurring revenue after 6 months</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center sm:col-span-2 lg:col-span-1">
                <Coffee className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0">80</span>%</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">less active work for same revenue</div>
              </div>
            </div>

            {/* Section 1 */}
            <h2 id="freelancer-problem" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">1. The Freelancer's Ceiling</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Every freelancer eventually hits the same ceiling: there are only so many hours in a day. You can raise your rates, but clients eventually push back. You can hire help, but then you're managing people instead of doing the work you enjoy.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The math is simple: if you charge $2,000 per project and do 2 projects per week, you're making $16,000/month — but you're working 50-60 hours. If you get sick or take a vacation, the income stops. This is the freelancer trap.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">01</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                  <Target className="w-3 h-3 text-[#0E9BF0]" />
                </div>
                The Reality Check
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Time is Your Most Expensive Resource</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">As a freelancer, you're selling time. As a SaaS founder, you're selling a system. The system works while you sleep. The freelancer model has a hard ceiling — usually around $15-20k/month. SaaS has no ceiling.</p>
            </div>

            {/* Section 2 */}
            <h2 id="saas-model" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">2. Why SaaS Changes Everything</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GoHighLevel's white-label SaaS mode lets you turn your expertise into a product. Instead of building one funnel at a time, you build one template (called a "snapshot") and sell access to it for a monthly fee.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The math changes completely:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Freelancer: Build 2 funnels/month → $4,000 revenue → 60 hours work',
                'SaaS: Sell 50 subscriptions @ $97/month → $4,850 MRR → 10 hours work (after setup)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The SaaS model rewards you for building once and selling many times. Your income becomes predictable, recurring, and scalable.</p>

            <div className="bg-[#0B1628] rounded-xl p-5 md:p-7 lg:p-8 my-8 md:my-9 flex gap-3 md:gap-4 items-start">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-[rgba(248,208,0,0.15)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                <Star className="w-4 h-4 text-[#F8D000]" />
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-[#F8D000] mb-1">The Key Insight</div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">Your clients don't want funnels. They want results. A SaaS product delivers ongoing results without ongoing work from you. That's why they'll pay monthly instead of one-time.</p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 id="mindset-shift" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">3. The Mindset Shift Required</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Moving from freelancer to SaaS founder requires a fundamental mindset shift. You're no longer selling your time — you're selling a system. You're no longer chasing the next project — you're building recurring relationships.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">This means:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Stop thinking "per project" and start thinking "per month"',
                'Stop customizing everything and start standardizing',
                'Stop trading time for money and start trading value',
                'Stop doing the work and start building systems',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <Sparkles className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The hardest part isn't technical — it's psychological. You have to believe that a standardized product can deliver more value than a custom build. (Spoiler: it can.)</p>

            {/* Section 4 */}
            <h2 id="first-snapshot" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">4. Building Your First Snapshot</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Your first snapshot is your MVP (Minimum Viable Product). It should solve one problem really well for one type of client. Don't try to build everything for everyone.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Start with what you know best. If you've built 20 real estate funnels, your first snapshot should be a real estate lead generation system. If you've built 30 home service automations, start there.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Your snapshot should include:</p>
            
            <ol className="list-decimal list-inside my-6 md:my-8 space-y-2 md:space-y-3 text-sm md:text-base text-[#5C6880] ml-2 md:ml-4">
              <li>Fully built pipelines (lead → booked → closed → nurtured)</li>
              <li>Automated email and SMS sequences</li>
              <li>Calendar integration and booking pages</li>
              <li>Reporting dashboards for clients</li>
              <li>Training videos and documentation</li>
            </ol>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">04</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#25C97D] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#25C97D] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8FAF2] rounded flex items-center justify-center">
                  <Rocket className="w-3 h-3 text-[#25C97D]" />
                </div>
                Action Step
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Build One Snapshot This Week</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Don't overthink it. Pick one niche you know well. Spend 2-3 days building a complete system. Then test it with one beta client. Iterate based on feedback. You can always improve later — but you need to start.</p>
            </div>

            {/* Section 5 */}
            <h2 id="pricing-models" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">5. Pricing Models That Work</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Most successful GHL SaaS founders use a hybrid pricing model:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 my-6 md:my-8">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 md:p-5">
                <div className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-1">One-Time Setup</div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#0E9BF0] mb-2">$497<span className="text-sm text-[#5C6880]"> one-time</span></div>
                <p className="text-xs md:text-sm text-[#5C6880]">Initial configuration, training, and onboarding</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 md:p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#F8D000] text-[#0B1628] text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">Popular</div>
                <div className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-1">Monthly Subscription</div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#0E9BF0] mb-2">$97<span className="text-sm text-[#5C6880]">/mo</span></div>
                <p className="text-xs md:text-sm text-[#5C6880]">Full system access, support, and updates</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 md:p-5 sm:col-span-2">
                <div className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-1">Annual Plan</div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#0E9BF0] mb-2">$970<span className="text-sm text-[#5C6880]">/year</span></div>
                <p className="text-xs md:text-sm text-[#5C6880]">2 months free, better cash flow for you</p>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The one-time setup fee covers your onboarding work. The monthly subscription is pure recurring revenue. This model gives you upfront cash flow plus long-term stability.</p>

            <div className="border-l-4 border-[#0E9BF0] my-8 md:my-10 pl-4 md:pl-7 py-1">
              <p className="text-base md:text-[22px] font-semibold text-[#1C2E4A] leading-relaxed italic">"Don't underprice your setup fee. The clients who pay $497 upfront are the ones who stay for 12+ months. The clients who won't pay setup are the ones who churn fast."</p>
            </div>

            {/* Section 6 */}
            <h2 id="finding-clients" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">6. Finding Your First SaaS Clients</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Your first clients are already in your network. Past freelance clients who loved your work are perfect candidates. They already trust you and understand your value.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Here's how to approach them:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                '"I have built a complete system for [niche]. You can use it for $97/month instead of paying $2,000 per project."',
                '"The first month is free. If you do not see results, cancel anytime."',
                '"I will personally handle the setup and training as part of the one-time fee."',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <Users className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Most freelancers already have 5-10 past clients who would happily pay $97/month instead of $2,000/project. That's $500-1,000 in MRR before you do any outbound sales.</p>

            {/* Section 7 */}
            <h2 id="onboarding" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">7. Automating Client Onboarding</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The beauty of SaaS is that onboarding can be automated. When a client signs up through your branded portal:</p>
            
            <ol className="list-decimal list-inside my-6 md:my-8 space-y-2 md:space-y-3 text-sm md:text-base text-[#5C6880] ml-2 md:ml-4">
              <li>They create an account on your domain</li>
              <li>They enter payment details (processed through Stripe)</li>
              <li>GHL automatically creates their sub-account</li>
              <li>Your snapshot is applied automatically</li>
              <li>They receive a welcome email with login instructions</li>
              <li>They watch your training videos at their own pace</li>
            </ol>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">You can onboard 50 clients in the time it used to take to onboard 1. That's the power of systems.</p>

            {/* Section 8 */}
            <h2 id="scaling" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">8. Scaling Beyond 100 Clients</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Once you have 20-30 clients paying $97/month ($2k-3k MRR), you can start thinking about scaling:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Build additional snapshots for different niches',
                'Create a second tier with more features at $197/month',
                'Hire a virtual assistant for support and training',
                'Run Facebook ads to your SaaS landing page',
                'Start an affiliate program for referrals',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <BarChart3 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">At 100 clients, you're at $9,700 MRR — over $116,000/year in passive income. And you're still doing less active work than you were as a freelancer.</p>

            {/* Section 9 */}
            <h2 id="avoid-mistakes" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">9. Common Mistakes to Avoid</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Learn from others who've made the transition:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Over-customizing for each client (defeats the purpose of SaaS)',
                'Pricing too low (undervalues your expertise)',
                'Neglecting client support (churn kills SaaS businesses)',
                'Building features nobody asked for',
                'Stopping marketing after getting 20 clients',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <Shield className="w-4 h-4 text-[#F8D000] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The biggest mistake is waiting for perfect. Launch with one snapshot, one price, one niche. Improve as you go.</p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">Conclusion: Your SaaS Journey Starts Today</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The transition from freelancer to SaaS founder isn't easy, but it's simpler than you think. You already have the GHL expertise. You already have past clients who trust you. You already know a niche that needs your solution.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">All that's missing is the decision to start. Build one snapshot this week. Offer it to one past client for free in exchange for feedback. Then iterate, launch, and scale.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">A year from now, you could have 50 clients paying you $97/month — nearly $60,000 in annual recurring revenue. And you'll have your time back. That's the freelancer-to-founder promise.</p>

            {/* CTA Block */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center relative overflow-hidden my-12 md:my-16">
              <div className="absolute -top-14 -right-14 w-72 h-72 bg-[radial-gradient(circle,rgba(248,208,0,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 md:px-3.5 py-1 md:py-1.5 rounded-full mb-4 md:mb-5">GHL Scale Up</div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 md:mb-3">Ready to Build Your SaaS?</h2>
                <p className="text-sm md:text-base text-white/65 max-w-md mx-auto mb-6 md:mb-8">We've helped 50+ freelancers become SaaS founders. Let us help you build your snapshot, set up your pricing, and launch your recurring revenue business.</p>
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
                Want to skip the learning curve?
              </div>
              <div className="text-xs md:text-sm text-white/60 leading-relaxed mb-4 md:mb-5">We've helped 50+ freelancers become SaaS founders. Let us build your snapshot, set up your pricing, and launch your recurring revenue business.</div>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1628] font-bold py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] transition-all">
                Get a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ghlscaleup.com/blog/freelancer-to-ghl-saas-founder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://twitter.com/intent/tweet?url=https://ghlscaleup.com/blog/freelancer-to-ghl-saas-founder&text=From+Freelancer+to+GHL+SaaS+Founder%3A+Recurring+Revenue" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
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
            <Link href="/blog/ghl-white-label-saas-guide" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">SaaS</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">How to Set Up GoHighLevel White-Label SaaS: Complete Guide</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
            <Link href="/blog/ghl-ai-workflows-lead-response" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">AI</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">GHL AI Workflows to Respond to Leads in Under 10 Seconds</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}