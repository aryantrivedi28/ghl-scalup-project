// app/blog/what-is-gohighlevel/client.tsx
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
  Settings,
  Zap,
  Shield,
  DollarSign,
  Users,
  Building2,
  Calendar,
  MessageCircle,
  Phone,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp
} from 'lucide-react';

export default function WhatIsGoHighLevelClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-gohighlevel',
        'who-is-it-for',
        'tools-it-replaces',
        'core-features',
        'pricing',
        'why-setups-fail',
        'faq'
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle TOC click with smooth scroll
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
    { id: 'what-is-gohighlevel', title: '1. What GoHighLevel Actually Is' },
    { id: 'who-is-it-for', title: '2. Who Is GoHighLevel Built For?' },
    { id: 'tools-it-replaces', title: '3. What Tools Does GoHighLevel Replace?' },
    { id: 'core-features', title: '4. The Core GoHighLevel Features' },
    { id: 'pricing', title: '5. GoHighLevel Pricing All 3 Plans' },
    { id: 'why-setups-fail', title: '6. Why Most GoHighLevel Setups Underperform' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const replacementTools = [
    { tool: 'HubSpot / Salesforce (CRM)', cost: '$50–$800+', ghlEquivalent: 'GHL CRM + Pipelines' },
    { tool: 'ClickFunnels / Unbounce (funnels)', cost: '$97–$297', ghlEquivalent: 'GHL Funnel Builder' },
    { tool: 'Mailchimp / ActiveCampaign (email)', cost: '$50–$300', ghlEquivalent: 'GHL Email Campaigns' },
    { tool: 'Twilio / SimpleTexting (SMS)', cost: '$25–$100', ghlEquivalent: 'GHL SMS' },
    { tool: 'Calendly / Acuity (booking)', cost: '$10–$45', ghlEquivalent: 'GHL Calendar & Booking' },
    { tool: 'Zendesk / Intercom (chat)', cost: '$49–$200', ghlEquivalent: 'GHL AI Chatbot' },
    { tool: 'Birdeye / Podium (reviews)', cost: '$299–$499', ghlEquivalent: 'GHL Reputation Management' },
    { tool: 'Kajabi / Teachable (courses)', cost: '$119–$399', ghlEquivalent: 'GHL Membership Sites' },
  ];

  const pricingPlans = [
    { plan: 'Starter', monthly: '$97/mo', annual: '$970/yr', bestFor: 'Solo operators and single-location businesses. Limited to 3 sub-accounts.' },
    { plan: 'Unlimited ★', monthly: '$297/mo', annual: '$2,970/yr', bestFor: 'Agencies managing multiple clients. Unlimited sub-accounts, white-label desktop, API access.', popular: true },
    { plan: 'Agency Pro (SaaS)', monthly: '$497/mo', annual: '$4,970/yr', bestFor: 'Agencies reselling GHL as their own white-label SaaS product with full billing automation.' },
  ];

  const commonMistakes = [
    'No conditional logic in workflows every lead gets the same message',
    'Pipelines that don\'t match the real sales process',
    'Missed call text-back not activated',
    'Sub-accounts built without Snapshots every new client starts from zero',
    'AI features completely untouched (Voice Agent, Conversation AI, Review AI)',
    'No tagging or segmentation system automations misfire',
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
          <span className="text-[#1A2236] font-medium">What Is GoHighLevel? Complete Guide 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Marketing Automation</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            What Is GoHighLevel?<br />
            <span className="text-[#F8D000]">The Complete Guide for 2026</span>
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/ghlscalicon.png"
                alt="GHL Scale Up"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Expert Agency · 200+ Projects Delivered</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            You've heard the name everywhere agency owners, fellow business owners, YouTube ads.
            But what does GoHighLevel actually do? And if you're already using it, is your setup
            working the way it should? This guide covers both in plain English.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel (GHL) is an all-in-one CRM and marketing platform built for agencies and service businesses.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Instead of paying for 8-10 separate tools, you get CRM, funnels, email, SMS, AI chatbots, booking calendars,
                and more — all in one place, from $97/month. It powers 1 million+ businesses globally as of 2026.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">In This Guide</span>
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

            {/* Section 1: What GoHighLevel Actually Is */}
            <h2 id="what-is-gohighlevel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What GoHighLevel Actually Is
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Imagine running a business that depends on leads. You have a form to capture them, a separate email tool
              to follow up, another app for SMS, a calendar for bookings, a CRM to track prospects, and yet another
              platform for funnels.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each tool costs money. Each one doesn't talk to the others cleanly. And if you're an agency managing
              multiple clients, you rebuild this mess from scratch for every new client.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              GoHighLevel was built to fix exactly that. It's a single platform that handles your entire customer
              journey from when someone first hears about your business to when they become a loyal, paying client.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 my-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded bg-[rgba(14,155,240,0.1)] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#0E9BF0]">✓</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E9BF0]">Simple Definition</span>
              </div>
              <p className="text-base font-semibold text-[#1A2236]">
                GoHighLevel = your CRM + email marketing tool + funnel builder + booking system + SMS platform + AI chat tool.
                One price. One dashboard. No duct tape.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              GoHighLevel was founded in 2018. Today it powers over 1 million businesses globally, and as of 2026
              it has deep AI features built in across every part of the platform.
            </p>

            {/* Section 2: Who Is GoHighLevel Built For? */}
            <h2 id="who-is-it-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Who Is GoHighLevel Built For?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-5">
              GHL is designed for any business that depends on generating and following up with leads. It works best for:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h3 className="font-bold text-[#1A2236] mb-1">Marketing Agencies</h3>
                <p className="text-xs text-[#5C6880] leading-relaxed">GHL's sub-account structure gives each client their own isolated workspace. You manage everything from one dashboard.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(37,201,125,0.1)] flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-[#25C97D]" />
                </div>
                <h3 className="font-bold text-[#1A2236] mb-1">Service Businesses</h3>
                <p className="text-xs text-[#5C6880] leading-relaxed">Real estate, home services, healthcare, legal AI Voice Agent, appointment reminders, and reputation management are core features.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(248,208,0,0.1)] flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-[#F8D000]" />
                </div>
                <h3 className="font-bold text-[#1A2236] mb-1">Coaches & Consultants</h3>
                <p className="text-xs text-[#5C6880] leading-relaxed">Includes full course and membership platform. Complete operating system for solopreneurs who sell knowledge.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h3 className="font-bold text-[#1A2236] mb-1">SaaS Founders</h3>
                <p className="text-xs text-[#5C6880] leading-relaxed">White-label the entire platform under your own brand and resell it as your own software.</p>
              </div>
            </div>

            {/* Section 3: What Tools Does GoHighLevel Replace? */}
            <h2 id="tools-it-replaces" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Tools Does GoHighLevel Replace?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-5">
              Most businesses and agencies are paying for a tool stack that adds up to $600-$1,500/month.
              GHL replaces most or all of it for $97-$297/month flat.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">Tool You're Replacing</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">Typical Cost/mo</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">GHL Equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {replacementTools.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-4 text-sm text-[#5C6880]">{item.tool}</td>
                      <td className="py-3 px-4 text-sm text-[#5C6880]">{item.cost}</td>
                      <td className="py-3 px-4 text-sm font-medium text-[#0E9BF0]">{item.ghlEquivalent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">The Real Saving</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Switching to GHL Unlimited ($297/mo) saves most agencies $400-$1,200 per month.
                For a 10-client agency, that's up to $14,000 saved annually.
              </p>
            </div>

            {/* Section 4: The Core GoHighLevel Features */}
            <h2 id="core-features" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. The Core GoHighLevel Features
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              GHL has a lot of features here is what actually matters, explained simply:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="font-bold text-[#1A2236]">CRM & Pipelines</h3>
                </div>
                <p className="text-xs text-[#5C6880] leading-relaxed">Visual board showing every lead and where they are in your sales process. See at a glance who needs a follow-up call, who just booked, and who went cold.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-[#25C97D]" />
                  <h3 className="font-bold text-[#1A2236]">Workflow Automation</h3>
                </div>
                <p className="text-xs text-[#5C6880] leading-relaxed">Rules that run on their own: if someone fills a form → send them a text → wait 2 hours → send an email → notify your team.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Layout className="w-5 h-5 text-[#F8D000]" />
                  <h3 className="font-bold text-[#1A2236]">Funnels & Landing Pages</h3>
                </div>
                <p className="text-xs text-[#5C6880] leading-relaxed">Build lead capture pages, sales funnels, and full websites inside GHL. No ClickFunnels needed.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="font-bold text-[#1A2236]">Calendar & Booking</h3>
                </div>
                <p className="text-xs text-[#5C6880] leading-relaxed">Clients book directly into your calendar. Automated reminders, rescheduling, and Google Calendar sync.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-[#25C97D]" />
                  <h3 className="font-bold text-[#1A2236]">AI Chatbot</h3>
                </div>
                <p className="text-xs text-[#5C6880] leading-relaxed">A bot that chats with website visitors, answers questions, qualifies leads, and books appointments automatically, including at 2am.</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-[#F8D000]" />
                  <h3 className="font-bold text-[#1A2236]">AI Voice Agent</h3>
                </div>
                <p className="text-xs text-[#5C6880] leading-relaxed">An AI that answers your inbound calls, has natural conversations, qualifies the lead, and books them in your calendar.</p>
              </div>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Most Underused Feature in 2026</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The AI Voice Agent is activated in a small fraction of GHL accounts. For any business getting inbound calls
                real estate, home services, dental, legal this feature alone answers 100% of calls, qualifies leads,
                and books appointments. Most clients see ROI within their first week of activating it.
              </p>
            </div>

            {/* Section 5: GoHighLevel Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. GoHighLevel Pricing All 3 Plans
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              GoHighLevel has flat-rate pricing with three plans. Unlimited contacts and unlimited users are included on every plan:
            </p>
            {/* Pricing Table - Desktop */}
            <div className="hidden md:block overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">Monthly</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">Annual</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A2236]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans.map((plan, idx) => (
                    <tr key={idx} className={`border-b border-[#DDE1E9] ${plan.popular ? 'bg-[rgba(248,208,0,0.05)]' : ''}`}>
                      <td className="py-3 px-4">
                        <span className={`text-sm font-semibold ${plan.popular ? 'text-[#F8D000]' : 'text-[#1A2236]'}`}>
                          {plan.plan}
                          {plan.popular && (
                            <>
                              <br className="hidden md:block" /> {/* Line break on desktop only */}
                              <span className="text-[10px] bg-[#F8D000] text-[#0B1421] px-1.5 py-0.5 rounded ml-1 md:ml-0 md:mt-1 inline-block whitespace-nowrap">
                                ★ Popular
                              </span>
                            </>
                          )}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-[#0E9BF0]">{plan.monthly}</td>
                      <td className="py-3 px-4 text-sm text-[#5C6880]">{plan.annual}</td>
                      <td className="py-3 px-4 text-sm text-[#5C6880]">{plan.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pricing Cards - Mobile */}
            <div className="md:hidden space-y-4 my-6">
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border p-4 ${plan.popular
                    ? 'border-[#F8D000] bg-[rgba(248,208,0,0.05)] relative'
                    : 'border-[#DDE1E9] bg-white'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-2 right-4 bg-[#F8D000] text-[#0B1421] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      ★ Popular
                    </div>
                  )}

                  {/* Plan Name */}
                  <div className="mb-3 pb-2 border-b border-[#DDE1E9]">
                    <h3 className={`text-base font-bold ${plan.popular ? 'text-[#F8D000]' : 'text-[#1A2236]'}`}>
                      {plan.plan}
                    </h3>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#5C6880]">Monthly:</span>
                      <span className="text-base font-bold text-[#0E9BF0]">{plan.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#5C6880]">Annual:</span>
                      <span className="text-sm text-[#5C6880] font-medium">{plan.annual}</span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="pt-2 border-t border-[#DDE1E9]">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#5C6880]">Best For:</span>
                      <span className="text-xs text-[#1A2236] font-medium">{plan.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#8A9BB0] leading-relaxed mb-6">
              Usage fees apply on top for SMS (~$0.0079/segment), email (~$0.675/1,000 sends), calls (~$0.014/min outbound),
              and AI Voice Agent ($0.06/min). Most agencies on Unlimited pay $350-$600/month total.
            </p>

            {/* Section 6: Why Most Setups Underperform */}
            <h2 id="why-setups-fail" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Why Most GoHighLevel Setups Underperform
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              We audit GHL accounts every week at GHL Scale Up. The most common pattern: a business has been paying
              for GoHighLevel for 3-12 months but is only using 15-20% of what the platform can do.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The problem is almost never the platform. It's the setup.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 my-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#1A2236]">The Most Common Mistakes We Fix</span>
              </div>
              <div className="space-y-2">
                {commonMistakes.map((mistake, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 text-sm mt-0.5">✗</span>
                    <span className="text-sm text-[#5C6880]">{mistake}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-6 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">From 200+ GHL Builds</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                A properly configured GHL account typically reduces manual workload by 60-70% compared to a default
                or template-based setup. The difference is not the features. It is the architecture behind them.
              </p>
            </div>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {[
                {
                  q: "What is GoHighLevel used for?",
                  a: "GoHighLevel is used by marketing agencies and service businesses to manage leads, automate follow-ups, build funnels, run email and SMS campaigns, handle bookings, collect reviews, and build white-label SaaS products. It replaces 8+ separate marketing and CRM tools in one platform."
                },
                {
                  q: "Is GoHighLevel a CRM?",
                  a: "Yes. GoHighLevel has a full CRM with contact management, pipeline tracking, tagging, segmentation, and a unified inbox that pulls messages from email, SMS, WhatsApp, and social channels. It replaces HubSpot, Salesforce, and Pipedrive for the majority of agency and service business use cases."
                },
                {
                  q: "How much does GoHighLevel cost?",
                  a: "GoHighLevel costs $97/month for the Starter plan, $297/month for the Unlimited plan (most popular for agencies), and $497/month for the Agency Pro SaaS plan. All plans include unlimited contacts and users. Usage fees for SMS, email, and phone calls apply separately."
                },
                {
                  q: "What is a GoHighLevel sub-account?",
                  a: "A sub-account is a separate client workspace inside your agency account. Each sub-account has its own CRM, funnels, automations, contacts, and settings, fully isolated from other clients. The Starter plan includes 3 sub-accounts. Unlimited and Agency Pro include unlimited sub-accounts."
                },
                {
                  q: "What is a GoHighLevel Snapshot?",
                  a: "A Snapshot is a pre-built copy of a complete sub-account including all workflows, funnels, pipelines, and settings. Agencies create one master Snapshot and deploy it to new clients in minutes, eliminating the need to rebuild from scratch for every new client."
                },
                {
                  q: "Does GoHighLevel have a free trial?",
                  a: "Yes. GoHighLevel offers a 14-day free trial with full access to all platform features on your chosen plan. No credit card is required to start. Use the trial to set up one pipeline, build one automation, and run a real lead through the system."
                },
                {
                  q: "How is GoHighLevel different from HubSpot?",
                  a: "HubSpot is built for a single company's internal marketing and sales team. GoHighLevel is built for agencies managing multiple client accounts. GoHighLevel has flat-rate pricing with unlimited contacts and users, white-labelling, and sub-accounts. A 10-client agency setup on HubSpot can exceed $8,000/month compared to $297/month on GHL Unlimited."
                },
                {
                  q: "Is GoHighLevel worth it?",
                  a: "For agencies and service businesses that set it up properly, yes. GoHighLevel at $97-$297/month replaces 8+ tools that typically cost $600-$1,500/month combined. The main risk is paying for a subscription and only using 15-20% of the platform, which is why a proper setup from day one matters."
                },
              ].map((faq, index) => (
                <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
                  <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-[0.92rem] font-semibold text-[#1A2236] hover:text-[#0E9BF0] transition-colors">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-[#8A9BB0] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-sm text-[#5C6880] leading-relaxed pb-4">{faq.a}</p>
                </details>
              ))}
            </div>

            {/* Internal Links */}
            {/* <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/gohighlevel-features" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Features: Complete Breakdown →</Link>
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest Comparison →</Link>
                <Link href="/blog/gohighlevel-saas-mode" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: Complete Setup Guide →</Link>
              </div>
            </div> */}

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to Get GoHighLevel Built Properly?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We've built 200+ GHL systems for agencies across 6 countries. Let's set up your account
                  the right way pipelines, automations, AI, and all.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
            {/* Table of Contents - Sticky */}
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
                        {activeId === item.id && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />
                        )}
                        <span className="flex-1">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* About the Author */}
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/ghlscalicon.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ projects delivered across real estate, healthcare, SaaS, agencies,
                and home services in 6 countries.
              </p>
              <Link href="https://ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Need Your GHL Built Right?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">From CRM setup to AI voice agents we build complete GHL systems that actually work.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                  <Twitter className="w-3 h-3" />
                  X
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  Copy link
                </button>
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
