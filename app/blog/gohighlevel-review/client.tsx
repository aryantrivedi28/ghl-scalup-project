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
  Shield,
  Star,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelReviewClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-ghl',
        'pricing-overview',
        'who-its-for',
        'pros',
        'weaknesses',
        'community-sentiment',
        'alternatives',
        'worth-it',
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

  const faqs = [
    {
      q: "Is GoHighLevel worth it in 2026?",
      a: "For marketing agencies and service businesses, yes. GoHighLevel at $97–$297/month replaces 6–8 tools costing $400–$1,200/month combined. The white-label and SaaS resale features are genuinely unique at this price point. The main caveat: it requires a 2–4 week learning curve and a proper setup to deliver its full value."
    },
    {
      q: "What are the main GoHighLevel complaints?",
      a: "The most documented complaints across Reddit, G2, and the GHL Facebook community are: email deliverability issues when DKIM/SPF/DMARC is not properly configured before sending, a steep learning curve for new users, inconsistent customer support quality on complex issues, some features that feel unfinished compared to dedicated alternatives, and white-label mobile app instability including call crashes."
    },
    {
      q: "Is GoHighLevel good for beginners?",
      a: "Not immediately. GoHighLevel has hundreds of features and a complex interface. Most users report 2–4 weeks of learning before feeling comfortable. For complete beginners with no marketing background, simpler tools like HubSpot Free or Mailchimp are easier starting points. GoHighLevel rewards investment in learning — but it does not hand-hold through the process."
    },
    {
      q: "Does GoHighLevel have a free trial?",
      a: "Yes. GoHighLevel offers a standard 14-day free trial with full access to all features on your chosen plan, no credit card required. Some agency partner links provide a 30-day extended trial. Use the trial to test the workflow builder, create one complete automation, and run a real lead through your pipeline."
    },
    {
      q: "How does GoHighLevel email deliverability compare to other platforms?",
      a: "GoHighLevel's email deliverability is the platform's most consistent criticism. It lags behind dedicated email platforms like Mailchimp, ActiveCampaign, and Klaviyo for cold or warm list sending. The core issue is that DKIM, SPF, and DMARC configuration must be completed manually before high-volume sends. Users who complete proper domain authentication and warm their sending domain typically see acceptable deliverability."
    },
    {
      q: "What did GoHighLevel add in 2026?",
      a: "GoHighLevel's major 2026 updates include: AI Voice Agent (inbound call handling with appointment booking), Workflow AI Builder (describe automation in plain English), multi-lingual Voice AI transcription in 10 languages, AI Employee Unlimited plan ($97/mo per sub-account), Mobile App v4.0 with dark mode and universal search, and expanded Voice AI Custom Actions for real-time webhook calls."
    },
    {
      q: "Can GoHighLevel replace HubSpot?",
      a: "For most agencies and service businesses, yes. GoHighLevel covers CRM, pipeline management, email, SMS, funnels, booking, reputation management, and AI features — areas where HubSpot requires multiple hubs at dramatically higher cost. The main exceptions: enterprises needing advanced multi-touch attribution, predictive lead scoring, or 1,500+ native integrations."
    },
    {
      q: "Who should not use GoHighLevel?",
      a: "GoHighLevel is not a good fit for: pure e-commerce businesses needing inventory management, businesses that rely heavily on email deliverability and cannot invest in domain warm-up, solo freelancers who only need a simple CRM, businesses needing enterprise-grade compliance and governance tools, or anyone wanting a platform that works out of the box without configuration time."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-ghl', title: '1. What GoHighLevel Is (Quick Context)' },
    { id: 'pricing-overview', title: '2. GoHighLevel Pricing Overview' },
    { id: 'who-its-for', title: '3. Who GoHighLevel Is Built For' },
    { id: 'pros', title: '4. The Genuine Pros — What GHL Does Really Well' },
    { id: 'weaknesses', title: '5. The Real Weaknesses — What You Need to Know' },
    { id: 'community-sentiment', title: '6. What Real Users Say (Reddit, G2, Community)' },
    { id: 'alternatives', title: '7. GoHighLevel vs the Main Alternatives' },
    { id: 'worth-it', title: '8. Is GoHighLevel Worth It in 2026?' },
    { id: 'faq', title: '9. Frequently Asked Questions' },
  ];

  const ratingCategories = [
    { category: 'Value for money', rating: '5 / 5', notes: 'Nothing competes at $297/month for agencies' },
    { category: 'Feature breadth', rating: '4.5 / 5', notes: 'Covers nearly everything; some features feel unfinished' },
    { category: 'Automation power', rating: '4.5 / 5', notes: 'Workflow builder is genuinely excellent once learned' },
    { category: 'Ease of use', rating: '3.5 / 5', notes: 'Steep learning curve. Not plug-and-play' },
    { category: 'Email deliverability', rating: '3.0 / 5', notes: 'Biggest platform weakness. Requires proper DKIM/DMARC setup' },
    { category: 'AI features (2026)', rating: '4.5 / 5', notes: 'Voice AI, Conversation AI genuinely impressive and improving' },
    { category: 'Customer support', rating: '3.5 / 5', notes: 'Live chat available but inconsistent response quality' },
    { category: 'White-label / SaaS', rating: '5 / 5', notes: 'Unique capability at this price. No competitor matches it' },
  ];

  const prosList = [
    'Tool consolidation at an unmatched price point — replaces 6–8 tools costing $400–$1,200/month',
    'Workflow automation builder with 30+ triggers, 100+ actions, and 2026 Workflow AI Builder',
    'Sub-account architecture and Snapshots — turn 40-hour onboarding into 2-hour onboarding',
    'White-labelling and SaaS resale — unique capability at $297–$497/month price point',
    'AI features (Voice AI, Conversation AI, Reviews AI) genuinely competitive in 2026',
    'Unified inbox — all channels (email, SMS, WhatsApp, social DMs) in one place',
  ];

  const weaknessesList = [
    { weakness: 'Email deliverability is the platform\'s biggest weakness', fix: 'Complete DKIM/SPF/DMARC verification before sending. Warm your domain over 2–4 weeks.' },
    { weakness: 'Steep learning curve — plan for 2–4 weeks', fix: 'Invest in professional setup help or dedicated training time.' },
    { weakness: 'Some features feel unfinished (social planner, e-commerce, courses)', fix: 'Use dedicated tools for these if they\'re your primary use case.' },
    { weakness: 'A2P 10DLC registration adds friction for US businesses', fix: 'Start registration 1–2 weeks before you need SMS to go live.' },
    { weakness: 'White-label mobile app has documented stability issues', fix: 'Set client expectations before they experience issues.' },
  ];

  const comparisonAlternatives = [
    { name: 'GHL vs HubSpot', bestFor: 'Agency multi-client vs enterprise B2B', ghlAdvantage: 'GHL: $297/mo unlimited clients. HubSpot: $8,900+/mo for same 10-client setup', whenToChoose: 'HubSpot wins for enterprise B2B with complex sales cycles' },
    { name: 'GHL vs ClickFunnels', bestFor: 'All-in-one vs funnel specialist', ghlAdvantage: 'GHL replaces ClickFunnels plus CRM, email, SMS, booking', whenToChoose: 'ClickFunnels if you only need funnels and prefer simplicity' },
    { name: 'GHL vs ActiveCampaign', bestFor: 'CRM + automation vs email specialist', ghlAdvantage: 'GHL has native SMS, AI, funnels, booking', whenToChoose: 'ActiveCampaign if email deliverability and advanced segmentation are primary' },
    { name: 'GHL vs Pipedrive', bestFor: 'All-in-one vs CRM specialist', ghlAdvantage: 'GHL includes everything Pipedrive does plus automation, funnels, SMS', whenToChoose: 'Pipedrive if you just need a clean CRM with no marketing features' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Review 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel Review</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Pros and Cons</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Is GHL Worth It</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Review 2026:<br />
            <span className="text-[#F8D000]">Honest Verdict After 200+ Real Builds (4.4/5)</span>
          </h1>

          {/* Author Byline */}
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
              <div className="text-xs text-white/50">GoHighLevel Expert Agency · 200+ Projects Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Most GoHighLevel reviews are written by affiliates earning $100–$200/month per referral. Ours isn't. 
            We are a GoHighLevel expert agency that has built and audited 200+ GHL systems across real estate, 
            healthcare, SaaS, and agencies in 6 countries. We earn nothing from recommending GHL. We earn from 
            building it well. That means we have seen it at its best and its worst. Here is our honest take.
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
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Verdict — Our Rating</span>
              </div>
              <p className="text-2xl font-bold text-[#1A2236] mb-2">OVERALL: 4.4 / 5</p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GoHighLevel is the best all-in-one marketing platform for agencies and service businesses in 2026 — 
                and it is not particularly close at its price point. At $97–$297/month with unlimited contacts and users, 
                it replaces 6–8 tools costing $400–$1,200/month. The white-label and SaaS resale capabilities are genuinely 
                unique in this price range. Its real weaknesses — email deliverability, learning curve, and interface 
                overwhelm — are real and worth knowing before you commit.
              </p>
            </div>

            {/* Rating Table */}
            <div className="overflow-x-auto my-6 mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Our Rating</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {ratingCategories.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.category}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.rating}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What's in this review</span>
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

            {/* Section 1: What Is GoHighLevel */}
            <h2 id="what-is-ghl" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What GoHighLevel Is (Quick Context)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel (officially "HighLevel" but found at GoHighLevel.com) is an all-in-one CRM, marketing automation, 
              and SaaS platform built for agencies and service businesses. It replaces your CRM, funnel builder, email tool, 
              SMS platform, booking calendar, reputation management tool, and AI chatbot in one flat-rate subscription. 
              Founded in 2018, it now powers over <strong className="text-[#1A2236]">600,000 businesses globally</strong>.
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              If you're new to the platform, start with our full explainer first: 
              <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline ml-1">What Is GoHighLevel? The Complete 2026 Guide →</Link>
            </p>

            {/* Section 2: Pricing Overview */}
            <h2 id="pricing-overview" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. GoHighLevel Pricing Overview
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three plans, all with unlimited contacts and unlimited users: <strong className="text-[#0E9BF0]">Starter at $97/month</strong>, 
              <strong className="text-[#0E9BF0]"> Unlimited at $297/month</strong> (the right plan for most agencies), and 
              <strong className="text-[#0E9BF0]"> Agency Pro (SaaS Mode) at $497/month</strong>. Usage fees for SMS, email, calls, 
              and AI features apply on top. Most agencies on Unlimited pay $370–$450/month total after usage.
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-4">
              For the complete pricing breakdown including all usage fees and AI costs: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
            </p>

            {/* Section 3: Who It's For */}
            <h2 id="who-its-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Who GoHighLevel Is Built For
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><ThumbsUp className="w-4 h-4" /> GoHighLevel IS a strong fit for:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236]">
                  <li>• Marketing agencies managing 3+ client accounts</li>
                  <li>• Service businesses (real estate, dental, home services, legal)</li>
                  <li>• Coaches, consultants, and course creators</li>
                  <li>• Agencies wanting to white-label a SaaS product</li>
                  <li>• Businesses replacing a $400–$1,200/month tool stack</li>
                  <li>• Agencies wanting to resell software as a revenue stream</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><ThumbsDown className="w-4 h-4" /> GoHighLevel is NOT the right fit for:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236]">
                  <li>• Complete beginners with no marketing background</li>
                  <li>• Pure e-commerce businesses needing inventory management</li>
                  <li>• Businesses that need world-class email deliverability from day one</li>
                  <li>• Large enterprise B2B with 50+ person in-house marketing teams</li>
                  <li>• Freelancers who only need a simple CRM or a single funnel</li>
                  <li>• Businesses needing 1,500+ native third-party integrations</li>
                </ul>
              </div>
            </div>

            {/* Section 4: Pros */}
            <h2 id="pros" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. The Genuine Pros — What GHL Does Really Well
            </h2>

            <div className="space-y-3 mb-6">
              {prosList.map((pro, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236] leading-relaxed">{pro}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#0E9BF0]">→ Workflow automation:</strong> Once you get past the learning curve, GHL's workflow automation engine is genuinely excellent. 
                See: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                <strong className="text-[#0E9BF0]">→ Snapshots:</strong> Build one perfect client setup and deploy it to every new account in minutes. Full guide: 
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline ml-1">How to Create a GoHighLevel Snapshot →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                <strong className="text-[#0E9BF0]">→ AI features:</strong> Voice AI, Conversation AI, Reviews AI — the highest-ROI feature in the platform once properly configured.
              </p>
            </div>

            {/* Section 5: Weaknesses */}
            <h2 id="weaknesses" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. The Real Weaknesses — What You Need to Know Before Buying
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              We have seen these consistently across 200+ builds. They are not deal-breakers for most agencies — 
              but they are things you should know before committing.
            </p>

            <div className="space-y-4 mb-6">
              {weaknessesList.map((item, idx) => (
                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.weakness}</p>
                      <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 6: Community Sentiment */}
            <h2 id="community-sentiment" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Real Users Say (Reddit, G2, Community)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              To give a fair picture, here is what the broader GHL user community says — distilled from Reddit (r/GoHighLevel), 
              G2 reviews, and the official GHL Facebook Group as of May 2026.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><ThumbsUp className="w-4 h-4" /> What they praise most</h3>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                  <li>Cost savings — "I cancelled 6 subscriptions" is the most common post</li>
                  <li>Missed call text-back — consistently called the stickiest and highest-ROI feature</li>
                  <li>The community itself — remarkably active and helpful Facebook group</li>
                  <li>AI velocity — shipping AI features faster than most competitors</li>
                </ul>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><ThumbsDown className="w-4 h-4" /> What they complain about most</h3>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside">
                  <li>Email deliverability — the most consistent negative thread</li>
                  <li>Support inconsistency — live chat response quality varies</li>
                  <li>Interface overwhelm — new users frequently describe feeling lost</li>
                  <li>Hidden costs — SMS, calls, and AI usage fees surprise new users</li>
                </ul>
              </div>
            </div>

            {/* Section 7: Alternatives */}
            <h2 id="alternatives" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. GoHighLevel vs the Main Alternatives
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Compare</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best for</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel advantage</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">When to choose the alternative</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonAlternatives.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.name}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghlAdvantage}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whenToChoose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Full comparison: <Link href="/blog/gohighlevel-vs-hubspot" className="text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot →</Link>
            </p>

            {/* Section 8: Is It Worth It */}
            <h2 id="worth-it" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. Is GoHighLevel Worth It in 2026?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2">GoHighLevel is worth it if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You manage 3+ client accounts and pay $300–$1,200/month for separate tools</li>
                  <li>You run a service business that lives on inbound calls and appointments</li>
                  <li>You want to build a white-label SaaS revenue stream</li>
                  <li>You have 2–4 weeks to invest in learning, or you plan to hire expert help</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2">GoHighLevel is not worth it if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You need a simple plug-and-play CRM that works on day one</li>
                  <li>Email marketing is your primary revenue driver and you cannot invest in domain warm-up</li>
                  <li>You run a pure e-commerce business</li>
                  <li>You are a solo freelancer below $3,000/month with no plans to scale</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE SETUP REALITY</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                The most common mistake we see: paying for a GHL subscription and using 15–20% of the platform for 6+ months. 
                The platform's value is unlocked by its architecture — not just by logging in. Businesses that invest in a proper 
                setup from day one consistently outperform those that wing it.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free 30-minute strategy call and we'll show you what a production-ready GHL system looks like
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → Need help with setup? See: <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GHL CRM Setup Service →</Link>
            </p>

            {/* Section 9: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              9. Frequently Asked Questions
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

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest Comparison →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/services/ai-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Features Setup →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Convinced GoHighLevel is right for you?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Don't start with a half-built system. Most GHL accounts underperform because of setup — not the platform. 
                  We've audited hundreds. Book a free 30-minute call and we'll show you what a production-ready GHL system 
                  looks like for your business.
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
                    src="/web-app-manifest-192x192.png"
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
                5+ years GHL experience · 200+ systems built across real estate, healthcare, SaaS, and agencies in 6 countries. 
                This review is based on real client accounts and audits, not documentation summaries. We have no affiliate 
                relationship with GoHighLevel.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Need an Honest GHL Assessment?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We've built 200+ GHL systems. Let's review your needs and recommend the right path.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
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