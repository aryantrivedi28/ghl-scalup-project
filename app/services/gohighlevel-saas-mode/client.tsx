'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Zap,
  AlertTriangle,
  Lightbulb,
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
    { id: 'what-is-saas-mode', title: '1. What is GoHighLevel SaaS Mode?' },
    { id: 'is-legit', title: '2. Is GoHighLevel SaaS actually legit, or is it another guru scam?' },
    { id: 'oversaturated', title: '3. Is it too late to start? Is GHL SaaS oversaturated in 2026?' },
    { id: 'real-cost', title: '4. What does GoHighLevel SaaS Mode cost, really?' },
    { id: 'positioning', title: '5. What is the difference between SaaS, SwaS, and Agency?' },
    { id: 'pick-niche', title: '6. How do you pick a niche when you have no network?' },
    { id: 'non-technical', title: '7. Can you run a GHL SaaS business if you are not technical?' },
    { id: 'first-10-clients', title: '8. How do you get your first 10 SaaS clients?' },
    { id: 'pricing', title: '9. How do you price your plans without losing money on rebilling?' },
    { id: 'churn', title: '10. Why do SaaS clients cancel, and how do you stop it?' },
    { id: 'technical-setup', title: '11. What does the technical setup actually involve?' },
    { id: 'cancellations', title: '12. How do you handle cancellations without losing money?' },
    { id: 'faq', title: '13. Frequently asked questions' }
  ];

  const pricingData = [
    { plan: 'Starter', cost: '$97', includes: 'Up to 3 sub-accounts, basic features', saasMode: 'No' },
    { plan: 'Unlimited', cost: '$297', includes: 'Unlimited sub-accounts, white-label branding', saasMode: 'No' },
    { plan: 'Agency Pro', cost: '$497', includes: 'Everything in Unlimited + SaaS Configurator + rebilling + mobile app white-label', saasMode: 'Yes' }
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

      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <span className="text-[#1A2236] font-medium">GoHighLevel SaaS Mode</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS Mode</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Guide</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel SaaS Mode:<br />
            <span className="text-[#F8D000]">The Complete 2026 Guide (Everything You Need)</span>
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            There is a specific kind of frustration that only GoHighLevel agency owners understand. You have paid $497 a month for Agency Pro. You have watched the YouTube videos. You have read the blogs. And you still have questions that nobody is answering honestly. Is this business model actually real, or is it another guru scam? Which niche should you pick if you have no network? Why do your clients cancel in month 1? How do you actually get clients when nobody has heard of your agency? <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> is an India-based GoHighLevel expert agency with 200+ builds delivered across the US, UK, Australia, and India. This is the guide we wish existed when we started. No hype. No "crush it." Just what actually works and what does not.
          </p>

          {/* CTA Button 1 - Hero */}
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl">
              Book Your Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

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

            {/* CTA Button 2 - After BLUF */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                Ready to launch your SaaS agency but need help with the technical setup?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What's in this guide</span>
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

            {/* Section 1: What Is SaaS Mode */}
            <h2 id="what-is-saas-mode" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is GoHighLevel SaaS Mode?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> GoHighLevel SaaS Mode is a feature on the Agency Pro plan ($497/month) that lets marketing agencies white-label the entire GoHighLevel platform and resell it as their own branded software product. Clients experience it as YOUR software. They never see GoHighLevel's brand.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">How it actually works:</strong> You configure GoHighLevel to run under your brand: custom domain (app.youragency.com), your logo, your pricing tiers, your onboarding flow. When a prospect signs up through your pricing page, Stripe processes their payment to you, and GoHighLevel automatically creates a new sub-account under their name with your pre-built snapshot already deployed. To the client, this is your platform.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it is NOT:</strong> SaaS Mode is not the same as just white-labelling GoHighLevel. White-labelling is a branding layer — your logo replaces theirs. SaaS Mode is the business model layer on top of that. It adds automated client billing, self-service onboarding, snapshot auto-deployment, rebilling of Twilio and Mailgun usage, and offboarding automation.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">FEATURED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For a deep dive into white-labelling GoHighLevel specifically, including custom domain setup and mobile app branding, read our <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
              </p>
            </div>

            {/* CTA Button 3 - After Section 1 */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-center">
              <p className="text-white/80 text-sm mb-3 max-w-md mx-auto">
                Want us to build your SaaS Mode setup so you can focus on getting clients?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 2: Is Legit */}
            <h2 id="is-legit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Is GoHighLevel SaaS Actually Legit, or Is It Another Guru Scam?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is one of the most common questions on Reddit. A Reddit user recently posted: "Is GHL SaaS Agency Legit? On YouTube they make it seem like it's as easy as white labelling, creating a few ads, then onboarding new users, but there must be a catch." The skepticism is fair. The YouTube guru culture around GHL has genuinely damaged trust in the model.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The honest answer:</strong> The business model is real. GoHighLevel powers over 40,000 agencies globally and generates hundreds of millions in ARR. Real agencies are running SaaS Mode profitably. What is NOT real is the promise that you will hit 15 clients in your first two weeks. Actual timelines are much longer. Actual failure rates are much higher than the guru content admits.
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
            <h2 id="oversaturated" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Is It Too Late to Start? Is GHL SaaS Oversaturated in 2026?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The direct answer:</strong> Generic "GoHighLevel agency" positioning is oversaturated. Niche-specific positioning is not.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Why generic is saturated:</strong> If your positioning is "CRM plus marketing automation plus SMS plus email plus AI for agencies," you sound identical to 40,000 other GoHighLevel agencies. Prospects cannot tell you apart. This is genuinely saturated.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Why niche-specific is not:</strong> If your positioning is "appointment automation and review management for Chicago dental practices," you have almost no competitors. The market is not saturated — the top of the funnel is. Every specific niche crossed with a specific outcome is under-served.
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

            {/* CTA Button 4 - After Section 3 */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                Need help picking the right niche for your SaaS agency?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 4: Real Cost */}
            <h2 id="real-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Does GoHighLevel SaaS Mode Cost, Really?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> The visible cost is $497/month for Agency Pro. The real cost is higher once you include usage fees, tools, and hidden operational costs.
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
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cost}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.includes}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.saasMode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Example — realistic P&L at 10 clients:</strong> A GHL Scale Up client running a med spa SaaS at 10 clients on $297/month plans: gross revenue $2,970/month. Platform cost $497. Twilio + Mailgun (rebilled at 2x markup, net cost after rebill roughly $200/month total). Onboarding + support staff cost $1,500/month at 15 hours per week at $25/hr VA rate. Net profit: approximately $773/month. This is real but modest. At 30 clients on the same setup, net profit jumps to approximately $6,590/month because platform cost stays flat at $497. This is why SaaS Mode economics only become interesting past 20-25 clients.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#0E9BF0]">A2P COST DEEP DIVE:</strong> A2P fees confuse most SaaS Mode agencies. Full breakdown of what you pay, what you rebill, and what the actual per-client cost looks like: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P Fees Explained →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                <strong className="text-[#0E9BF0]">SERVING CANADIAN CLIENTS?</strong> Canadian numbers have different rules than US A2P. Full guide: <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-[#0E9BF0] hover:underline">GoHighLevel Canadian Numbers →</Link>
              </p>
            </div>

            {/* Section 5: Positioning */}
            <h2 id="positioning" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
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
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.mindset}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">FEATURED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                How white-labelling fits into all three positioning models: <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
              </p>
            </div>

            {/* CTA Button 5 - After Section 5 */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-center">
              <p className="text-white/80 text-sm mb-3 max-w-md mx-auto">
                Not sure which positioning model is right for your agency?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Get Expert Advice
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 6: Pick Niche */}
            <h2 id="pick-niche" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do You Pick a Niche When You Have No Network?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The 5-factor niche selection framework:</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Proximity:</strong> Which industries are you geographically or socially near?</li>
              <li><strong className="text-[#1A2236]">Network overlap:</strong> Which industries do the people you already know work in?</li>
              <li><strong className="text-[#1A2236]">Price ceiling:</strong> Can this industry actually pay $297+/month?</li>
              <li><strong className="text-[#1A2236]">Competition density:</strong> How many other GHL agencies already serve this niche?</li>
              <li><strong className="text-[#1A2236]">Personal knowledge:</strong> How much do you already know about this industry?</li>
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

            {/* CTA Button 6 - After Section 6 */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                Need help validating your niche and building a winning snapshot?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 7: Non-Technical */}
            <h2 id="non-technical" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Can You Run a GHL SaaS Business If You Are Not Technical?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The direct answer:</strong> Yes. This is a viable path, and one of the most common configurations among successful SaaS Mode agencies.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The sales-strong tech-weak model:</strong> You focus on client conversations, positioning, offer construction, closing calls, and account management. A technical VA handles snapshot maintenance, workflow builds, and technical onboarding. Cost of a technical GHL VA: approximately $500-1,500/month depending on experience level.
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
            <h2 id="first-10-clients" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Do You Get Your First 10 SaaS Clients?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The realistic timeline:</strong> 60-90 days to first 10 clients if you have an existing network and are actively selling 3+ hours per day. 90-120 days if you are cold outreaching to a completely new niche. 6-9 months if you are a complete beginner with no network and part-time effort.
            </p>

            <div className="space-y-2 mb-6">
              {channels.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236]">{item.name}</p>
                      <p className="text-sm text-[#5C6880]">{item.description}</p>
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

            {/* CTA Button 7 - After Section 8 */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-center">
              <p className="text-white/80 text-sm mb-3 max-w-md mx-auto">
                Want a done-for-you client acquisition system for your SaaS agency?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Get Client Acquisition Help
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 9: Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. How Do You Price Your Plans Without Losing Money on Rebilling?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Rebilling is GoHighLevel's feature that lets you resell Twilio SMS, Mailgun email, and other usage costs to your clients at a markup you control. Without rebilling turned on, every message your clients send comes out of your agency wallet.
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
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.service}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.wholesale}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.clientRebill}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.markup}</td>
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
            <h2 id="churn" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. Why Do SaaS Clients Cancel, and How Do You Stop It?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The single biggest cause of SaaS Mode churn:</strong> Broken onboarding in the first 7-14 days.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What actually happens when a new client cancels in month 1:</strong> They pay you, get access to a platform, log in on day 2, feel overwhelmed, look for a video walkthrough, cannot find one specific to their business, close the tab, and never return. By day 28 they cancel through Stripe.
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">MOVING CLIENTS FROM OTHER PLATFORMS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If your SaaS client is moving from another CRM, the migration itself is the biggest churn risk. Full step-by-step guides:
              </p>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside mt-2">
                <li><Link href="/blog/zoho-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Zoho to GoHighLevel Migration →</Link></li>
                <li><Link href="/blog/salesforce-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Salesforce to GoHighLevel Migration →</Link></li>
                <li><Link href="/blog/keap-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Keap to GoHighLevel Migration →</Link></li>
                <li><Link href="/blog/mailchimp-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Mailchimp to GoHighLevel Migration →</Link></li>
              </ul>
            </div>

            {/* CTA Button 8 - After Section 10 */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                Want to launch your SaaS agency with a bulletproof onboarding system?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Get Onboarding Help
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 11: Technical Setup */}
            <h2 id="technical-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              11. What Does the Technical Setup Actually Involve?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> SaaS Mode setup is a nine-step technical process. Done by someone experienced, it takes 5 to 7 business days. Done by a beginner learning as they go, it takes 3-6 weeks.
            </p>

            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Upgrade to Agency Pro ($497/month):</strong> SaaS Mode is only available on this plan.</li>
              <li><strong className="text-[#1A2236]">Connect Stripe:</strong> Under Agency Settings → Payments. Verify your Stripe account can process payments in your target currency.</li>
              <li><strong className="text-[#1A2236]">Configure the SaaS Configurator:</strong> Budget 8-12 hours of focused work.</li>
              <li><strong className="text-[#1A2236]">Build your master Snapshot:</strong> Budget 30-60 hours for a genuinely niche-specific snapshot.</li>
              <li><strong className="text-[#1A2236]">Set up your custom domain and white-label:</strong> Point app.youragency.com to GoHighLevel.</li>
              <li><strong className="text-[#1A2236]">Configure rebilling:</strong> Under Agency Settings → SaaS Configurator → Rebilling.</li>
              <li><strong className="text-[#1A2236]">Register for A2P 10DLC:</strong> Required for any US-based SMS sending.</li>
              <li><strong className="text-[#1A2236]">Verify email sending domain:</strong> Configure SPF, DKIM, and DMARC records.</li>
              <li><strong className="text-[#1A2236]">End-to-end test with a real Stripe payment:</strong> Create a $1 test product and complete the full flow.</li>
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A2P REGISTRATION (STEP 7 DEEP DIVE)</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The full A2P 10DLC compliance suite for SaaS agencies:
              </p>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside mt-2">
                <li><Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What is A2P 10DLC →</Link></li>
                <li><Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration →</Link></li>
                <li><Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration →</Link></li>
                <li><Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">Why Your A2P Campaign Got Rejected →</Link></li>
              </ul>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">MOVING EXISTING SUB-ACCOUNTS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you are consolidating client sub-accounts under your SaaS Mode agency: <Link href="/blog/how-to-transfer-ghl-sub-account" className="text-[#0E9BF0] hover:underline">GoHighLevel Sub-Account Transfer Guide →</Link>
              </p>
            </div>

            {/* Section 12: Cancellations */}
            <h2 id="cancellations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              12. How Do You Handle Cancellations Without Losing Money?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What happens by default when a client cancels:</strong> The client's Stripe subscription cancels. Their access to the platform continues until you manually revoke it. Any add-ons attached to their sub-account continue billing YOU.
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

            {/* Final CTA Before FAQ */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-8 text-center my-8 text-white">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need SaaS Mode set up correctly the first time?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up configures complete GoHighLevel SaaS Mode setups. Stripe connection, SaaS Configurator, pricing tiers, niche-specific Snapshot build, custom domain and white-label, rebilling configuration, A2P registration, cancellation flow, and end-to-end test. Most builds go live in 5 to 7 business days.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Section 13: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              13. Frequently Asked Questions
            </h2>

            <div className="space-y-3">
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

            {/* Related Articles / Resources Section */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Resources: The Complete GHL Scale Up SaaS Library</h3>
              <p className="text-sm text-[#5C6880] mb-4">Every blog we have published on GoHighLevel SaaS Mode operations, organised by category.</p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-[#F8F9FB] rounded-xl p-3">
                  <p className="text-xs font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">SaaS Mode Core</p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">GoHighLevel SaaS Mode Setup →</Link></li>
                    <li><Link href="/blog/ghl-white-label-saas-guide" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">GoHighLevel White Label SaaS Guide →</Link></li>
                    <li><Link href="/blog/how-to-get-first-gohighlevel-saas-clients" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">How to Get Your First 10 GoHighLevel SaaS Clients →</Link></li>
                  </ul>
                </div>
                <div className="bg-[#F8F9FB] rounded-xl p-3">
                  <p className="text-xs font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">A2P 10DLC Compliance</p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/blog/what-is-a2p-10dlc" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">What is A2P 10DLC →</Link></li>
                    <li><Link href="/blog/a2p-brand-registration-guide" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">A2P Brand Registration →</Link></li>
                    <li><Link href="/blog/a2p-campaign-registration-guide" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">A2P Campaign Registration →</Link></li>
                  </ul>
                </div>
                <div className="bg-[#F8F9FB] rounded-xl p-3">
                  <p className="text-xs font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">Client Migrations</p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/blog/zoho-to-gohighlevel-migration" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">Zoho to GoHighLevel →</Link></li>
                    <li><Link href="/blog/salesforce-to-gohighlevel-migration" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">Salesforce to GoHighLevel →</Link></li>
                    <li><Link href="/blog/keap-to-gohighlevel-migration" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">Keap to GoHighLevel →</Link></li>
                  </ul>
                </div>
                <div className="bg-[#F8F9FB] rounded-xl p-3">
                  <p className="text-xs font-semibold text-[#0E9BF0] uppercase tracking-wider mb-2">Case Studies & Services</p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/blog/gohighlevel-india-agency" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">India Agency Case Study →</Link></li>
                    <li><Link href="/services/saas-setup" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">GHL SaaS Setup Service →</Link></li>
                    <li><Link href="/case-studies" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">Real Results and Case Studies →</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to build a real GoHighLevel SaaS business?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up configures complete SaaS Mode setups. Stripe billing, SaaS Configurator, niche-specific Snapshot, custom domain and white-label, rebilling configuration, A2P registration, cancellation flow, and end-to-end test.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-3 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency founded by Aryan Trivedi · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a dedicated GoHighLevel expert agency founded in 2025 by Aryan Trivedi, based in India, serving 6 countries. 200+ builds delivered across marketing agencies, SaaS founders, real estate firms, home service businesses, coaches, and enterprises.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
            <nav className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-xs font-bold tracking-wider uppercase text-[#5C6880] mb-4 flex items-center gap-2">
                <BookOpen className="w-3 h-3" />
                In This Guide
              </div>
              <ul className="space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#DDE1E9] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-[#96A0B5]">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className={`block w-full text-left text-xs md:text-sm py-2 px-3 rounded transition-all duration-200 ${activeId === item.id
                        ? 'bg-[#0E9BF0] text-white font-medium shadow-sm'
                        : 'text-[#5C6880] hover:text-[#0E9BF0] hover:bg-white'
                        }`}
                    >
                      <span className="flex items-start gap-2">
                        {activeId === item.id && <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />}
                        <span className="flex-1">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">GoHighLevel SaaS Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need SaaS Mode Setup?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We configure complete SaaS Mode setups in 5-7 business days. Stripe, SaaS Configurator, Snapshot, rebilling, A2P, and more.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Linkedin className="w-3 h-3" /> LinkedIn</a>
                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Twitter className="w-3 h-3" /> X</a>
                <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"><Copy className="w-3 h-3" /> Copy link</button>
              </div>
            </div>
          </aside>
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