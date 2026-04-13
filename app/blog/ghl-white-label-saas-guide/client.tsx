// app/blog/ghl-white-label-saas-guide/client.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Star, 
  LayoutTemplate, 
  Globe, 
  CreditCard, 
  Users, 
  TrendingUp,
  ArrowRight,
  Copy,
  Linkedin,
  Twitter,
  Menu,
  X,
  Zap,
  Shield,
  DollarSign,
  Rocket,
  Target,
  BarChart3,
  Settings,
  Sparkles,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import CopyButton from '@/components/blog/CopyButton';

export default function GHLWhiteLabelSaaSClient() {
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
    { id: 'what-is-ghl-saas', title: '1. What is GHL White-Label SaaS?' },
    { id: 'prerequisites', title: '2. Prerequisites & Requirements' },
    { id: 'domain-setup', title: '3. Domain & Branding Setup' },
    { id: 'saas-mode', title: '4. Enabling SaaS Mode' },
    { id: 'snapshots', title: '5. Creating & Managing Snapshots' },
    { id: 'stripe-integration', title: '6. Stripe Billing Integration' },
    { id: 'pricing-strategies', title: '7. Pricing Strategies & Plans' },
    { id: 'client-onboarding', title: '8. Client Onboarding Process' },
    { id: 'scaling', title: '9. Scaling Your SaaS Business' },
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
          <ChevronRight className="w-3 h-3 text-[#96A0B5]" />
          <Link href="/blog" className="hover:text-[#0E9BF0] transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3 text-[#96A0B5]" />
          <span className="text-[#1A2236] font-medium">GHL White-Label SaaS Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(248,208,0,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(14,155,240,0.15)] border border-[rgba(14,155,240,0.3)] text-[#0E9BF0] text-[11px] md:text-xs font-semibold tracking-wide uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full mb-4 md:mb-6">
            <Sparkles className="w-3 h-3" />
            GHL SaaS · Complete Guide
          </div>
          
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-3 md:mb-5 tracking-[-0.02em]">
            How to Set Up GoHighLevel<br />
            <span className="text-[#F8D000]">White-Label SaaS</span>:<br />
            Complete Guide
          </h1>
          
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 md:mb-9 max-w-[620px]">
            Domains, snapshots, Stripe billing, sub-account provisioning, and pricing strategies. 
            Everything you need to launch your own SaaS platform using GHL.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center font-bold text-white text-sm md:text-base">GS</div>
              <div>
                <div className="text-xs md:text-sm font-medium text-white">GHL Scale Up Team</div>
                <div className="text-[10px] md:text-xs text-white/50">Published April 10, 2026</div>
              </div>
            </div>
            <div className="w-px h-6 md:h-8 bg-white/15" />
            <div className="flex gap-3 md:gap-5">
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <Clock className="w-3 h-3" />
                12 min read
              </span>
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <GraduationCap className="w-3 h-3" />
                Advanced
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
              GoHighLevel's white-label SaaS mode is one of the most powerful features for agencies looking to build recurring revenue. 
              Instead of just selling one-off setups, you can launch your own branded software platform, charge monthly subscriptions, 
              and scale without hiring a development team. <strong className="text-[#1A2236]">Here's exactly how to set it up.</strong>
            </p>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 my-8 md:my-10">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <Rocket className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">3</span>x</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">higher MRR compared to one-off GHL projects</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <Zap className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">10</span>min</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">average setup time for a new client sub-account</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center sm:col-span-2 lg:col-span-1">
                <Shield className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">100</span>%</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">brandable — your logo, domain, colors on every page</div>
              </div>
            </div>

            {/* Section 1 */}
            <h2 id="what-is-ghl-saas" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">1. What is GHL White-Label SaaS?</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GoHighLevel's white-label SaaS mode allows you to rebrand the entire platform as your own product. Your clients see your logo, your domain, your colors — they never know it's built on GHL. You set your own pricing, manage billing through Stripe, and keep the difference between what you charge and what you pay GHL.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">This is how agencies scale from <span className="bg-[#FFFBE6] text-[#1A2236] px-1.5 py-0.5 rounded font-medium">one-time setup fees</span> to <span className="bg-[#FFFBE6] text-[#1A2236] px-1.5 py-0.5 rounded font-medium">recurring monthly revenue</span>. One client pays you $97/month, ten clients pay $970/month, a hundred clients pay $9,700/month — and you're not doing additional work for each one.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">01</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                  <Target className="w-3 h-3 text-[#0E9BF0]" />
                </div>
                Why Go SaaS?
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">From Project-Based to Recurring Revenue</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Agencies using GHL's SaaS mode report 3-5x higher lifetime value per client compared to one-off builds. The math is simple: one client paying $97/month for 24 months = $2,328 vs a $2,000 one-time setup fee. And you're not starting from zero for each new client.</p>
            </div>

            {/* Section 2 */}
            <h2 id="prerequisites" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">2. Prerequisites & Requirements</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Before you start setting up white-label SaaS, make sure you have:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'A GoHighLevel Agency account (not a sub-account) — this costs $497/month and includes SaaS mode',
                'A custom domain you own (e.g., app.yourbrand.com or dashboard.yourbrand.com)',
                'A Stripe account connected to your agency account',
                'Your logo and brand assets (colors, fonts, etc.)',
                'At least one snapshot ready (a pre-built GHL setup you\'ll sell as a template)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-[#0B1628] rounded-xl p-5 md:p-7 lg:p-8 my-8 md:my-9 flex gap-3 md:gap-4 items-start">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-[rgba(248,208,0,0.15)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                <Star className="w-4 h-4 text-[#F8D000]" />
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-[#F8D000] mb-1">Important Note</div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">You must have an Agency account, not just a sub-account. The $97/month agency plan does NOT include SaaS mode. You need the $497/month Agency Pro plan or higher.</p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 id="domain-setup" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">3. Domain & Branding Setup</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The first step is making GHL look like your product. Go to <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">Settings → Company Settings → White Label</span> in your agency dashboard.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Here you can upload your logo, set your brand colors, and configure your custom domain. The domain needs to point to GHL's servers via CNAME records — your account manager can provide the exact DNS settings.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Once configured, your clients will access GHL through your domain (e.g., app.yourbrand.com) and see your branding throughout the interface.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">03</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F8D000] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#a07a00] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#FFFBE6] rounded flex items-center justify-center">
                  <Globe className="w-3 h-3 text-[#a07a00]" />
                </div>
                Pro Tip
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Use a Subdomain for Better Organization</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Instead of using your main domain, set up a subdomain like "app.yourbrand.com" or "dashboard.yourbrand.com". This keeps your marketing site separate from your SaaS app and makes DNS management cleaner.</p>
            </div>

            {/* Section 4 */}
            <h2 id="saas-mode" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">4. Enabling SaaS Mode</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Once your branding is configured, navigate to <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">Settings → SaaS Mode</span>. Toggle the switch to enable SaaS mode for your account.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">You'll see options for:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Default pricing plan (what clients see before signing up)',
                'Allowed features per plan',
                'Sub-account limits',
                'Custom checkout flow settings',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Once enabled, your SaaS site will be live at your custom domain. Clients can sign up, choose a plan, and get their own sub-account automatically.</p>

            {/* Section 5 */}
            <h2 id="snapshots" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">5. Creating & Managing Snapshots</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Snapshots are the templates you'll sell as your SaaS product. A snapshot contains a full GHL setup: pipelines, automations, funnel templates, email sequences, and more.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">To create a snapshot:</p>
            
            <ol className="list-decimal list-inside my-6 md:my-8 space-y-2 md:space-y-3 text-sm md:text-base text-[#5C6880] ml-2 md:ml-4">
              <li>Build your ideal setup in a test sub-account</li>
              <li>Go to <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">Settings → Snapshots</span></li>
              <li>Click "Create Snapshot" and name it</li>
              <li>Select which elements to include (pipelines, automations, etc.)</li>
              <li>Save and publish to your snapshot library</li>
            </ol>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">When a new client signs up through your SaaS portal, you can automatically apply a snapshot to their sub-account. This means they get a fully functional system the moment they subscribe — no manual setup required.</p>

            <div className="border-l-4 border-[#0E9BF0] my-8 md:my-10 pl-4 md:pl-7 py-1">
              <p className="text-base md:text-[22px] font-semibold text-[#1C2E4A] leading-relaxed italic">"Snapshots are the engine of your SaaS. Spend 80% of your setup time perfecting one snapshot — then deploy it to hundreds of clients with zero extra work."</p>
            </div>

            {/* Section 6 */}
            <h2 id="stripe-integration" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">6. Stripe Billing Integration</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GHL integrates natively with Stripe for SaaS billing. Go to <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">Settings → Payments → Stripe</span> to connect your account.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Once connected, you can:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Set up multiple pricing plans (monthly, yearly, custom)',
                'Configure trial periods for new signups',
                'Automate subscription billing and dunning',
                'Offer coupons and promotional pricing',
                'Track MRR, churn, and LTV directly in GHL',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Stripe takes 2.9% + 30¢ per transaction. GHL doesn't take an additional cut of your SaaS revenue beyond your base agency fee.</p>

            {/* Section 7 */}
            <h2 id="pricing-strategies" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">7. Pricing Strategies & Plans</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Most successful GHL SaaS agencies use a tiered pricing structure:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 my-6 md:my-8">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 md:p-5">
                <div className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-1">Basic</div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#0E9BF0] mb-2">$47<span className="text-sm text-[#5C6880]">/mo</span></div>
                <p className="text-xs md:text-sm text-[#5C6880]">1 sub-account, core features, email support</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 md:p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#F8D000] text-[#0B1628] text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">Popular</div>
                <div className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-1">Pro</div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#0E9BF0] mb-2">$97<span className="text-sm text-[#5C6880]">/mo</span></div>
                <p className="text-xs md:text-sm text-[#5C6880]">5 sub-accounts, advanced features, priority support</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 md:p-5 sm:col-span-2">
                <div className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-1">Agency</div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#0E9BF0] mb-2">$297<span className="text-sm text-[#5C6880]">/mo</span></div>
                <p className="text-xs md:text-sm text-[#5C6880]">Unlimited sub-accounts, white-label, dedicated support, API access</p>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Start with 2-3 clear tiers, then add more as you grow. Many agencies also charge a one-time setup fee ($197-$497) for initial configuration, then monthly recurring fees.</p>

            {/* Section 8 */}
            <h2 id="client-onboarding" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">8. Client Onboarding Process</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">When a client signs up through your SaaS portal:</p>
            
            <ol className="list-decimal list-inside my-6 md:my-8 space-y-2 md:space-y-3 text-sm md:text-base text-[#5C6880] ml-2 md:ml-4">
              <li>They create an account on your branded domain</li>
              <li>They choose a plan and enter payment details (processed through Stripe)</li>
              <li>GHL automatically creates a sub-account for them</li>
              <li>The snapshot you selected is applied automatically</li>
              <li>They receive a welcome email with login instructions</li>
              <li>You can offer optional white-glove onboarding for an additional fee</li>
            </ol>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The entire process takes under 10 minutes from signup to active sub-account — no manual intervention required on your end once configured.</p>

            {/* Section 9 */}
            <h2 id="scaling" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">9. Scaling Your SaaS Business</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Once your system is live, focus on:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Building more specialized snapshots for different niches',
                'Creating automated email sequences for onboarding and retention',
                'Adding upsells and feature unlocks',
                'Implementing affiliate and referral programs',
                'Creating case studies and testimonials from early clients',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <TrendingUp className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The agencies that scale fastest treat their SaaS like a real product — continuous improvement, customer success, and systematized onboarding.</p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">Conclusion: Your SaaS Journey Starts Today</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Setting up GoHighLevel white-label SaaS takes 1-2 days of focused work. But once it's live, you've built an asset that generates revenue while you sleep.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Start with one solid snapshot, one pricing tier, and a handful of beta clients. Refine based on feedback, then scale. Within 3-6 months, you can have 20-50 clients paying you monthly — recurring revenue that transforms your agency.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The agencies winning on GHL aren't just building funnels. They're building SaaS businesses. Now it's your turn.</p>

            {/* CTA Block */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center relative overflow-hidden my-12 md:my-16">
              <div className="absolute -top-14 -right-14 w-72 h-72 bg-[radial-gradient(circle,rgba(248,208,0,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 md:px-3.5 py-1 md:py-1.5 rounded-full mb-4 md:mb-5">GHL Scale Up</div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 md:mb-3">Ready to Launch Your GHL SaaS?</h2>
                <p className="text-sm md:text-base text-white/65 max-w-md mx-auto mb-6 md:mb-8">We've helped 50+ agencies set up their white-label SaaS. Let us help you get from zero to recurring revenue faster.</p>
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
                Want us to set up your GHL SaaS?
              </div>
              <div className="text-xs md:text-sm text-white/60 leading-relaxed mb-4 md:mb-5">We've done this for 50+ agencies. Domains, snapshots, Stripe, onboarding — all done for you.</div>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1628] font-bold py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] transition-all">
                Get a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ghlscaleup.com/blog/ghl-white-label-saas-guide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://twitter.com/intent/tweet?url=https://ghlscaleup.com/blog/ghl-white-label-saas-guide&text=How+to+Set+Up+GoHighLevel+White-Label+SaaS%3A+Complete+Guide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
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