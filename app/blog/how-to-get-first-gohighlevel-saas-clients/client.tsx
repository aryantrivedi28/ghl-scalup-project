'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Zap,
  Star,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function HowToGetFirstGHLSAASClientsClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-hard',
        'timeline',
        'positioning',
        'channels',
        'cold-outreach',
        'beginner',
        'convert-clients',
        'mistakes',
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
      q: "I am doing SaaS for a while now and did not get a single client. What am I doing wrong?",
      a: "The most common reason is running channels designed for established agencies while still needing beginner channels. If you have zero case studies and are running paid ads or cold email to strangers, conversion rates will be near zero. Switch to warm outreach (your personal network), offer your first 3 clients heavily discounted or free service in exchange for case studies, then scale to cold channels once you have proof. This takes 3-6 months for a complete beginner, which is normal. It is not a marketing skills problem it is a channel-and-proof problem."
    },
    {
      q: "Is starting a GoHighLevel SaaS still worth it in 2026, or is it oversaturated?",
      a: "The generic 'GoHighLevel agency' space is oversaturated. The niche-specific space (like 'GHL for medical spas in California with a specific cosmetic-follow-up automation') is not. If your positioning is 'CRM plus automation plus SMS plus email,' you sound identical to 40,000 other GHL agencies. If your positioning is a specific niche with a specific outcome, you have almost no competition. The market is not oversaturated generic positioning is."
    },
    {
      q: "I would prefer something I can do on Facebook. What type of content should I upload?",
      a: "Post about the specific niche you serve, not GoHighLevel as a platform. Show behind-the-scenes builds you are working on (screenshot the automation you built today). Post before-and-after screenshots of client dashboards. Share industry-specific tips (for example, if you serve chiropractors, post about the top 3 reasons chiropractic patients ghost their bookings). Post 3-4 times per week for at least 90 days before evaluating. The first 8 weeks will feel like nothing is happening. Compound effect starts around month 6."
    },
    {
      q: "Do I need a proven track record to sell white label GoHighLevel?",
      a: "No, but you need something. If you have no case studies, your offer needs to include a heavy first-client discount or free service period in exchange for using their results as a case study. Your first 3 clients pay less than market rate specifically because they are taking a chance on you. Once you have those 3 case studies, everything gets easier pricing, positioning, and closing rates all improve dramatically."
    },
    {
      q: "I am not tech savvy but I am confident in sales. Should I hire a VA to handle design and backend?",
      a: "Yes, this is a viable path. Direct answer to a common Reddit question. Many successful GoHighLevel SaaS agencies are built by sales-strong, tech-weak founders who hire a technical VA at approximately $500-1,500/month for setup, snapshot maintenance, and client onboarding. Focus your time on sales conversations and client acquisition. Just make sure your VA has documented GoHighLevel experience test them with a paid trial project before hiring long-term."
    },
    {
      q: "Should I position as SaaS, SwaS, or Agency?",
      a: "For beginners: SwaS (Software with a Service). Pure SaaS requires case studies and brand trust you do not yet have. Full Agency (done-for-you) requires more delivery capacity than most beginners can support. SwaS at $297-$997/month lets you charge more than pure SaaS, spend meaningful time with each client (which improves the case study and reduces churn), and positions you as a partner rather than a vendor. Convert to pure SaaS only after 5-10 case studies and smooth self-service onboarding."
    },
    {
      q: "Is anyone actually succeeding by building products on GoHighLevel, or is it all service?",
      a: "Both. Pure product plays (SaaS-only, self-service) exist and work at scale but almost always after the founder has 5-10 case studies from a service or SwaS phase first. The Founderpath case study of Justin McGill (LeadFuze) is documented: he validated the market with a productized service, self-funded the software development, and eventually converted his service clients into SaaS customers. Pure product is a scaling model, not a starting model."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-hard', title: '1. Why is it so hard to get GoHighLevel SaaS clients in 2026?' },
    { id: 'timeline', title: '2. What is the realistic timeline to get 10 SaaS clients?' },
    { id: 'positioning', title: '3. How do you position: SaaS, SwaS, or Agency?' },
    { id: 'channels', title: '4. What are the six client acquisition channels that actually work?' },
    { id: 'cold-outreach', title: '5. How do you write a cold outreach message that gets a reply?' },
    { id: 'beginner', title: '6. What if you are a complete beginner with no network and no budget?' },
    { id: 'convert-clients', title: '7. What if you already have agency clients and want to convert them?' },
    { id: 'mistakes', title: '8. What are the mistakes that cost people their first 10 clients?' },
    { id: 'faq', title: '9. Frequently asked questions' }
  ];

  const timelineData = [
    { situation: 'Existing network + niche snapshot ready + selling 3+ hours/day', time: '60-90 days', source: 'ECOSIRE (May 2026)' },
    { situation: 'No network + cold outreach to new niche + selling 3+ hours/day', time: '90-120 days', source: 'ECOSIRE (May 2026)' },
    { situation: 'Existing agency clients you can convert to SaaS', time: '30-60 days for first 3-5 SaaS clients', source: 'Nuacom (May 2026)' },
    { situation: 'Complete beginner + part-time (under 2 hours/day)', time: '6-9 months or more', source: 'Common ecosystem observation' },
    { situation: 'Complete beginner + no niche selected', time: 'Do not start selling yet see Section 6', source: '' }
  ];

  const positioning = [
    { type: 'Pure SaaS', bestFor: 'Tech-savvy clients, self-serve buyers, later-stage after you have case studies', mindset: '"Give me the tool, I will use it"', price: '$47-$297/month' },
    { type: 'SwaS (Software with a Service)', bestFor: 'SMBs who need tech but do not want to learn platform', mindset: '"Set it up for me, I will run it"', price: '$297-$997/month' },
    { type: 'Full Agency (DFY)', bestFor: 'Clients who want zero platform involvement', mindset: '"I do not care what you use, just get me results"', price: '$1,500-$5,000/month' }
  ];

  const channels = [
    { name: 'Warm Outreach', bestFor: 'Anyone with any professional network', outcome: '2-5 conversations booked, 1-2 first clients within 30 days', time: '30 minutes per message, 1 hour per demo call', cost: 'Zero', downside: 'Very low ceiling. Great for first 3-5 clients.' },
    { name: 'Cold Outreach with Niche-Specific Demo', bestFor: 'People comfortable on calls or writing DMs', outcome: '4-6 calls/day = 1-2 booked demos per week. First client in 30-60 days', time: '2-3 hours/day, sustained', cost: 'Under $50/month for lead list tool', downside: 'Emotionally exhausting. Most quit before compound effect.' },
    { name: 'Facebook and Instagram Content', bestFor: 'Beginners with no network and low budget', outcome: 'Very slow start. First inbound lead around week 8-16', time: '1-2 hours/day, every day', cost: 'Zero for organic, $200-500/month if boosting', downside: 'Slowest channel. Do not treat as primary if you need clients in 60 days.' },
    { name: 'Paid Ads', bestFor: 'Anyone with $1,500-3,000 test budget', outcome: 'First 5-10 booked demos within 4-6 weeks', time: '2-4 hours/week managing campaigns', cost: '$1,500-3,000 test budget minimum', downside: 'Most beginners lose budget without learning fix offer first.' },
    { name: 'Free Community or Course', bestFor: 'People who enjoy teaching and can commit 6+ months', outcome: 'Zero clients for months 1-3, compounding inbound from month 6', time: '3-5 hours/week', cost: '$0-99/month for community platform', downside: 'Requires patience most people do not have.' },
    { name: 'Convert Existing Agency Clients to SaaS', bestFor: 'Established agencies with 5+ service clients', outcome: '30-50% conversion rate. 3-5 clients within 60 days', time: '1-2 hours per conversation', cost: 'Zero', downside: 'Not available to true beginners.' }
  ];

  const mistakes = [
    { mistake: 'Pricing too low', detail: '"A $47 per month plan attracts price-sensitive clients who churn at high rates and demand excessive support" (GoHighLevel.ai, April 2026). Price at $197-$497/month.' },
    { mistake: 'Selling to strangers before warm contacts', detail: 'Start warm, prove the offer, then scale to cold.' },
    { mistake: 'Building the perfect platform before selling', detail: 'Talk to prospects first. Build only what you need to close them.' },
    { mistake: 'Pitching the platform instead of the outcome', detail: 'Nobody buys "a CRM plus marketing automation." They buy "20 more booked appointments per month."' },
    { mistake: 'Switching niches every 30 days', detail: 'Commit to one niche for at least 6 months.' },
    { mistake: 'Not tracking why prospects say no', detail: 'Every no is data. Fix the specific objection you hear most.' }
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
          <span className="text-[#1A2236] font-medium">How to Get First GHL SaaS Clients</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Client Acquisition</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Growth</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Get Your First 10 GoHighLevel SaaS Clients:<br />
            <span className="text-[#F8D000]">The Honest Guide (2026)</span>
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
            If you have paid for GoHighLevel Agency Pro at $497/month and cannot get GoHighLevel SaaS clients, you are not the only one. This is the most common Reddit question in the GHL space in 2026: "I am doing SaaS for a while now and did not get a single client because I am really bad at marketing." Getting your first 10 SaaS clients on GoHighLevel is not a marketing problem for most people. It is a positioning, patience, and channel-selection problem. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has worked with agencies from zero clients to over 50 SaaS clients. This guide is an honest walk through what actually works, what does not, and the realistic timeline nobody on YouTube will tell you. For the fully-managed path: <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GHL SaaS setup service →</Link>
          </p>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                To get your first 10 GoHighLevel SaaS clients: (1) Pick a niche you already have some connection to. (2) Build one niche-specific snapshot BEFORE reaching out. (3) Run three acquisition channels at once: warm outreach, targeted cold outreach with a specific observation, and one content channel where you show your work publicly. (4) Position as SwaS (Software with a Service) not pure software. (5) Price at $197-$497/month, not $47.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Realistic timeline: 60-90 days to hit 10 clients if you are actively selling and have an existing network. 90-120 days if you are cold outreaching to a completely new niche (ECOSIRE, May 2026). If someone tells you it is faster than this, they are either selling a course or lying.
              </p>
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

            {/* Section 1: Why Hard */}
            <h2 id="why-hard" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Is It So Hard to Get GoHighLevel SaaS Clients in 2026?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> Getting GoHighLevel SaaS clients is harder in 2026 than it was in 2020-2022 because the space is more crowded, buyers are more skeptical, and the YouTube-guru effect has damaged trust in the entire category.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Buyer skepticism from guru culture:</strong> Small business owners have been pitched "AI-powered CRM software" hundreds of times. They have learned to ignore the pitch. What they respond to is a specific observation about their business and a specific offer to fix a specific problem.</li>
              <li><strong className="text-[#1A2236]">The "looks the same" problem:</strong> If your positioning is "CRM plus automation plus SMS plus email plus AI" you sound identical to 40,000 other GHL agencies. Confirmed from HighLevel's own numbers: over 40,000 agencies use the platform globally.</li>
              <li><strong className="text-[#1A2236]">No case studies means no proof:</strong> A prospect at zero clients is being asked to be your first case study. This requires an honest offer: "You will be my first client at this heavily discounted rate in exchange for a case study."</li>
              <li><strong className="text-[#1A2236]">Wrong channel for wrong buyer:</strong> Most beginners try channels that would work at scale (paid ads, cold email at high volume) before they have fundamentals (offer, positioning, first case study).</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST TRUTH ABOUT THIS SPACE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL SaaS is not oversaturated in the way that Instagram influencer culture is oversaturated. It is oversaturated at the top of funnel (everyone pitching the same generic "all-in-one platform" angle). It is under-served at the specific-niche level. A person selling "GHL for chiropractors in the Midwest with a specific pain-recovery workflow" has almost no competition. Niche depth beats platform breadth.
              </p>
            </div>

            {/* Section 2: Timeline */}
            <h2 id="timeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Is the Realistic Timeline to Get 10 SaaS Clients?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> The honest timeline depends on three factors: whether you have an existing network in your target niche, whether you have a niche-specific snapshot built already, and how many hours per day you are actively selling.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Time to First 10 Clients</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.time}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a look at the platform tier that enables SaaS: <Link href="/blog/agency-pro-plan-explained" className="text-[#0E9BF0] hover:underline">GoHighLevel Agency Pro Plan Explained →</Link>
            </p>

            {/* Section 3: Positioning */}
            <h2 id="positioning" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Position: SaaS, SwaS, or Agency?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> There are three positioning options for a GoHighLevel-based business. SaaS is pure software sale. SwaS (Software with a Service) is software plus limited managed services. Agency is done-for-you services where the software is invisible to the client.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Positioning</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best For</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Client Buyer Mindset</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Price</th>
                  </tr>
                </thead>
                <tbody>
                  {positioning.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.mindset}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
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
                Almost every beginner should start as SwaS not pure SaaS. Pure SaaS requires case studies, brand trust, and a product that speaks for itself. Beginners have none of these. SwaS lets you charge more, spend more time with each client (which improves the case study), and reduces churn because the client feels supported. Convert to pure SaaS only after you have 5-10 case studies and a smooth self-service onboarding.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the platform-level guide behind the SaaS positioning: <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
            </p>

            {/* Section 4: Channels */}
            <h2 id="channels" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Are the Six Client Acquisition Channels That Actually Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> There are six client acquisition channels that consistently work for GoHighLevel SaaS/SwaS agencies in 2026. The right channel depends on your starting position, budget, and skills.
            </p>

            <div className="space-y-4 mb-6">
              {channels.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-[#F8F9FB] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#5C6880] uppercase tracking-wider mb-1">Best for</p>
                      <p className="text-sm text-[#1A2236]">{item.bestFor}</p>
                    </div>
                    <div className="bg-[#E8F5FE] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#0E9BF0] uppercase tracking-wider mb-1">Realistic outcome</p>
                      <p className="text-sm text-[#1A2236]">{item.outcome}</p>
                    </div>
                    <div className="bg-[#F8F9FB] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#5C6880] uppercase tracking-wider mb-1">Time investment</p>
                      <p className="text-sm text-[#1A2236]">{item.time}</p>
                    </div>
                    <div className="bg-[#FFFBE6] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#F8D000] uppercase tracking-wider mb-1">Money needed</p>
                      <p className="text-sm text-[#1A2236]">{item.cost}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5C6880] mt-2"><strong className="text-[#1A2236]">Honest downside:</strong> {item.downside}</p>
                </div>
              ))}
            </div>

            {/* Section 5: Cold Outreach */}
            <h2 id="cold-outreach" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Write a Cold Outreach Message That Gets a Reply?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> A cold outreach message that gets a reply is specific to the prospect, short (under 150 words per Aexus), leads with observation not pitch, and offers something concrete not a demo.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">The four-part structure that works</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#0E9BF0]">Opening line specific observation:</strong> Reference something real about their business. "Hi Sarah, saw your practice has 3 reviews on Google while your competitor two blocks away has 87."</li>
                <li><strong className="text-[#0E9BF0]">What you do one sentence, outcome-focused:</strong> "I help dental practices in [city] get to 50+ reviews and automated new-patient booking in 30 days."</li>
                <li><strong className="text-[#0E9BF0]">Why it matters to them specific to their situation:</strong> "Reviews are the #1 factor in new patients choosing you over the competitor. You are losing patients you never see."</li>
                <li><strong className="text-[#0E9BF0]">Low-friction call to action:</strong> Not "book a demo". Something smaller. "Want to see the exact system I built for a similar practice? I can send you a 3-minute video."</li>
              </ol>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE MICHAEL MCCARTHY LESSON</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Michael McCarthy of Inkit got his first customer by sending the head of demand gen at Bite Squad 15 emails over the course of a month. This is not a formula. It is a single documented case (Founderpath, February 2026). The point is that persistence with a specific person, with genuinely new value each time, works far better than one-off blasts to hundreds of people. Aim for 20-30 target prospects that you email 5-7 times each with different specific observations not 500 prospects you email once.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For automating parts of your outreach follow-up sequence once you have first client conversations happening: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            {/* Section 6: Beginner */}
            <h2 id="beginner" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What If You Are a Complete Beginner with No Network and No Budget?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> The complete beginner path is different from the established professional path. If you have zero clients, zero network, and zero ad budget, some of the channels above do not apply to you.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">Complete beginner path (ordered by likely success rate)</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#25C97D]">Pick a niche you have proximity to:</strong> If you live near dentists, work with dentists. Do NOT pick a niche because a YouTube guru said it is "most profitable."</li>
                <li><strong className="text-[#25C97D]">Build one working demo for that niche:</strong> Spend 20-30 hours inside GoHighLevel building a comprehensive niche-specific snapshot.</li>
                <li><strong className="text-[#25C97D]">Offer your first 3 clients free service in exchange for a case study:</strong> 60-90 days free implementation and management in exchange for permission to use their results as a case study.</li>
                <li><strong className="text-[#25C97D]">Approach local businesses in person or on Instagram DM:</strong> Walk into local businesses. Send Instagram DMs. Reference something specific.</li>
                <li><strong className="text-[#25C97D]">Post publicly about what you are building:</strong> Not sales content. Just "here is what I built today."</li>
                <li><strong className="text-[#25C97D]">After first 3 case studies, transition to paid channels:</strong> Only now do cold email at volume, paid ads, or LinkedIn outreach become worthwhile.</li>
              </ol>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST TRUTH FOR BEGINNERS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you are a complete beginner, expect your first 3 clients to take 3-6 months, not 30 days. This is normal. It is not because you are bad at marketing. It is because trust takes time and case studies compound. The people you see hitting 100K MRR in 90 days on YouTube either had an existing audience, an existing agency, or are exaggerating for the sake of a course sale. The ones who make it are the ones who accepted the 90-180 day reality and kept going.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For beginners in India specifically: <Link href="/blog/gohighlevel-india-agency" className="text-[#0E9BF0] hover:underline">GoHighLevel for Indian agencies →</Link>
            </p>

            {/* Section 7: Convert Clients */}
            <h2 id="convert-clients" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What If You Already Have Agency Clients and Want to Convert Them?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Definition:</strong> If you already run a service-based agency with 5+ clients, converting them to SaaS is the fastest and highest-margin acquisition channel available to you.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">The conversion conversation (5 steps)</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#0E9BF0]">Identify your best 3 existing clients:</strong> Your most satisfied and lowest-support-burden clients.</li>
                <li><strong className="text-[#0E9BF0]">Prepare the reposition:</strong> You are not raising prices. You are changing what they pay for.</li>
                <li><strong className="text-[#0E9BF0]">Have the conversation directly:</strong> "I am moving my business model to a monthly software subscription. Your current cost stays similar."</li>
                <li><strong className="text-[#0E9BF0]">Give them a specific value trade:</strong> "You now get unlimited access to the CRM, marketing automation, funnels, and appointment booking plus 5 hours of my time per month."</li>
                <li><strong className="text-[#0E9BF0]">Address their objections directly:</strong> Reassure them the platform is the same tools you have been using for them, just now with their own login.</li>
              </ol>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the platform-level guide behind the SaaS positioning: <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
            </p>

            {/* Section 8: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. What Are the Mistakes That Cost People Their First 10 Clients?
            </h2>

            <div className="space-y-3 mb-6">
              {mistakes.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#DC3545] mb-2">{item.mistake}</h3>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED HELP BUILDING YOUR SAAS OFFER</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up works with GoHighLevel agency owners at every stage from beginners building their first niche snapshot to established agencies converting service clients to SaaS. We build the platform, the demo, the onboarding automations, and the first outreach templates.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real GoHighLevel results and case studies: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For a specific plan for your situation, <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GHL SaaS Setup Service →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
                <Link href="/blog/agency-pro-plan-explained" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Agency Pro Plan Explained →</Link>
                <Link href="/blog/gohighlevel-india-agency" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Indian Agencies →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Serious about getting your first 10 GoHighLevel SaaS clients?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds the platform. You focus on sales. Niche snapshot build, SaaS Mode configuration, custom domain setup, Stripe billing integration, and onboarding automation so your acquisition channels have something real to sell.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel specialists · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                This guide reflects publicly documented acquisition strategies from Alston Godbolt, Aexus, Nuacom, Grol Media, and Founderpath, combined with observations from working with agencies through their first-10-clients phase. Every specific timeline and conversion claim is source-cited. Marketing channel effectiveness varies significantly by niche, geography, and execution treat all numbers as directional not guaranteed.
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
                5+ years GHL experience · 200+ systems built. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Your First SaaS Clients?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We build the platform, demo, and onboarding automation so you can focus on selling.</p>
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