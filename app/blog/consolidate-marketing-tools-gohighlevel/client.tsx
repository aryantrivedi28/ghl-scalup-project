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
  DollarSign,
  TrendingUp,
  Star,
  AlertTriangle,
  Compass,
  XCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function ConsolidateMarketingToolsClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'tool-fragmentation',
        'what-ghl-replaces',
        'what-ghl-not-replaces',
        'calculate-savings',
        'consolidation-phases',
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
      q: "Can GoHighLevel replace all my marketing tools?",
      a: "GoHighLevel replaces most marketing and client communication tools: CRM, email marketing, SMS, funnel builder, website builder, booking calendar, workflow automation, reputation management, course hosting, AI chatbot, and AI Voice Agent all natively included from $97 per month. It does not replace accounting platforms, e-commerce engines like Shopify, deep project management tools, or specialist analytics platforms like Tableau. The consolidation covers your marketing, sales, and client communication stack comprehensively."
    },
    {
      q: "How much can I save by switching to GoHighLevel?",
      a: "Most agencies running a 5 to 8 tool stack save $200 to $500 per month in direct subscription costs after switching to GoHighLevel Unlimited at $297 per month. Agencies replacing Birdeye, Podium, or Weave alongside their CRM and email tools often save $500 to $1,000 per month. Adding recovered integration maintenance time (typically 3 to 5 hours per month that teams spend fixing broken Zapier connections) adds another $150 to $300 per month in real cost savings."
    },
    {
      q: "What tools does GoHighLevel replace?",
      a: "GoHighLevel replaces tools across 14 categories: CRM (HubSpot, Zoho, Pipedrive), email marketing (Mailchimp, ActiveCampaign, ConvertKit), SMS (Twilio, SimpleTexting), funnels (ClickFunnels, Leadpages), website builder, booking calendar (Calendly, Acuity), workflow automation (Zapier, Make), reputation management (Birdeye, Podium, Weave), course hosting (Kajabi, Teachable), AI chatbot (Intercom, ManyChat), AI Voice Agent, and reporting dashboards. At higher plans it also adds white-label capability and SaaS resale."
    },
    {
      q: "How long does it take to consolidate to GoHighLevel?",
      a: "A phased consolidation typically takes 4 to 8 weeks from GHL account creation to the point where you have cancelled the last replaced tool. Week 1 to 2: import contacts and set up GHL infrastructure. Week 2 to 4: rebuild core automations and test. Week 3 to 6: run GHL in parallel with existing tools. Week 6 onward: cancel replaced tools one at a time as GHL proves it handles each function reliably. Trying to consolidate everything in week one is the most common mistake."
    },
    {
      q: "Do I need to cancel all my tools at once when switching to GoHighLevel?",
      a: "No, and you should not. The right approach is to cancel tools one at a time as GHL successfully replaces each function. Start with the easiest replacements: your booking calendar and SMS tool are typically the fastest to validate and cancel. Leave your primary CRM and email platform active until GHL has been running in parallel for at least 2 to 4 weeks and you are confident all critical automations are working correctly. This phased approach prevents data loss and business disruption."
    },
    {
      q: "Can GHL Scale Up help consolidate my tools into GoHighLevel?",
      a: "Yes. GHL Scale Up builds complete GoHighLevel systems for agencies and service businesses including full tool stack consolidation from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, and other platforms. The service includes an audit of your current stack, GHL account configuration, data migration, automation rebuild, and phased cancellation support. Most consolidations are complete and fully operational within 3 to 6 weeks."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'tool-fragmentation', title: '1. Why Does Tool Fragmentation Cost More Than Your Subscription Total?' },
    { id: 'what-ghl-replaces', title: '2. What Does GoHighLevel Actually Replace?' },
    { id: 'what-ghl-not-replaces', title: '3. What Does GoHighLevel Not Replace?' },
    { id: 'calculate-savings', title: '4. How to Calculate Your Real Consolidation Savings' },
    { id: 'consolidation-phases', title: '5. How to Consolidate to GoHighLevel Without Disrupting Your Business' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const toolCategories = [
    { category: 'CRM and contact management', commonTools: 'HubSpot, Zoho CRM, Pipedrive, Keap', ghlEquivalent: 'GHL CRM with unlimited contacts, pipelines, smart lists, unified inbox', availableOn: 'All plans' },
    { category: 'Email marketing', commonTools: 'Mailchimp, ActiveCampaign, ConvertKit', ghlEquivalent: 'GHL email campaigns, drip sequences, broadcasts', availableOn: 'All plans' },
    { category: 'SMS marketing', commonTools: 'Twilio, SimpleTexting, EZ Texting', ghlEquivalent: 'GHL native 2-way SMS with workflow triggers', availableOn: 'All plans' },
    { category: 'Funnel and landing page builder', commonTools: 'ClickFunnels, Leadpages, Unbounce', ghlEquivalent: 'GHL funnel builder with unlimited funnels and pages', availableOn: 'All plans' },
    { category: 'Website builder', commonTools: 'WordPress (basic), Wix, Squarespace', ghlEquivalent: 'GHL website builder with full page editing', availableOn: 'All plans' },
    { category: 'Booking and calendar', commonTools: 'Calendly, Acuity, Book Like a Boss', ghlEquivalent: 'GHL booking calendar with reminders and routing', availableOn: 'All plans' },
    { category: 'Workflow automation', commonTools: 'Zapier, Make, ActiveCampaign automations', ghlEquivalent: 'GHL workflow builder with 100+ triggers and actions', availableOn: 'All plans' },
    { category: 'Reputation management', commonTools: 'Birdeye, Podium, Weave', ghlEquivalent: 'GHL reputation management with automated review requests and AI responses', availableOn: 'All plans' },
    { category: 'Course and membership hosting', commonTools: 'Kajabi, Teachable, Thinkific', ghlEquivalent: 'GHL membership and course module', availableOn: 'All plans' },
    { category: 'AI chatbot', commonTools: 'Intercom, Drift, ManyChat', ghlEquivalent: 'GHL Conversation AI across SMS, chat, and social', availableOn: 'All plans' },
    { category: 'AI Voice Agent', commonTools: 'Answering service, Ruby Receptionists', ghlEquivalent: 'GHL AI Voice Agent answers calls, qualifies leads, books appointments', availableOn: 'All plans' },
    { category: 'Reporting and dashboards', commonTools: 'Databox, Agency Analytics, Google Data Studio', ghlEquivalent: 'GHL reporting with custom dashboards and client views', availableOn: 'All plans' },
    { category: 'White-label and client portals', commonTools: 'No equivalent in most stacks', ghlEquivalent: 'GHL white-label your brand, your domain, invisible GHL', availableOn: 'Unlimited and Pro' },
    { category: 'SaaS resale', commonTools: 'No equivalent at this price', ghlEquivalent: 'GHL SaaS Mode resell the platform as your own software', availableOn: 'Agency Pro only' },
  ];

  const consolidationPhases = [
    { phase: 'Phase 1: Set up GHL and import contacts', timeline: 'Week 1 to 2', steps: 'Create your GHL account, configure custom fields and pipelines, import your contact database. Do not cancel any existing tools yet. Validate that your contacts, tags, and data imported correctly.' },
    { phase: 'Phase 2: Rebuild your most critical automations', timeline: 'Week 2 to 4', steps: 'Start with highest-impact workflows: missed call text-back, new lead follow-up, and appointment reminders. Test each one with real contacts before activating. Do not attempt to rebuild everything at once.' },
    { phase: 'Phase 3: Run GHL in parallel', timeline: 'Week 3 to 6', steps: 'Route new leads into GHL while existing contacts finish their sequences in old tools. Compare performance. Fix any gaps. Only proceed when GHL is performing at least as well as the tools it is replacing.' },
    { phase: 'Phase 4: Cancel tools one at a time', timeline: 'Week 6 onward', steps: 'Cancel tools GHL has successfully replaced, one at a time. Start with easiest replacements (booking calendar, SMS tool). Leave most critical tools (primary CRM or email platform) until last.' },
    { phase: 'Phase 5: Optimise', timeline: 'Month 2 onward', steps: 'Once consolidation is stable, start using features you did not have before: AI Voice Agent, white-label setup, SaaS Mode. This is where the platform starts delivering beyond what the old stack was capable of.' },
  ];

  const hiddenCosts = [
    'Integration maintenance time (3 to 5 hours per month)',
    'Data inconsistency across platforms',
    'Team onboarding overhead across 5 to 8 tools',
    'Missed automation gaps between systems',
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
          <span className="text-[#1A2236] font-medium">Consolidate Marketing Tools with GoHighLevel 2026</span>
        </div>
      </nav>

      {/* Hero Section - WIDE */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Tool Consolidation</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL for Agencies</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Cost Saving</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Consolidate All Your Marketing Tools<br />
            <span className="text-[#F8D000]">Using GoHighLevel (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            Most agencies and service businesses did not choose their current tool stack deliberately. 
            They added a CRM when they needed to track leads. Then an email tool. Then a funnel builder. 
            Then a booking calendar. Then an SMS platform. Each tool solved a problem when it was added. 
            Over time the stack grew to 5, 6, sometimes 8 subscriptions, each with its own login, its 
            own billing date, and its own way of failing to talk to the others. 
            <strong className="text-white"> GHL Scale Up</strong> has helped 200+ agencies and businesses 
            consolidate their entire marketing operation into GoHighLevel.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
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

            {/* CTA Card - Project Help */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
              <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your project.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Book a 30 min Free Call
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
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
                5+ years GHL experience · 200+ systems built and consolidated globally. Tool stack cost data sourced from 
                GoHighLevel Tool Stack Savings Calculator and verified against official platform pricing as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
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

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel consolidates CRM, email marketing, SMS automation, funnel building, booking calendar, reputation management, course hosting, AI chatbot, AI Voice Agent, and reporting into one platform starting at $97 per month.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Most agencies running a standard 5 to 8 tool stack are spending <strong className="text-[#0E9BF0]">$300 to $800 per month</strong> 
                on tools that require constant integration maintenance. After consolidating to GHL, the same capabilities cost 
                <strong className="text-[#0E9BF0]"> $97 to $297 per month</strong> with no third-party connectors between them because everything is native.
              </p>
            </div>

            {/* Table of Contents - Mobile Only */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8 lg:hidden">
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

            {/* Section 1: Tool Fragmentation */}
            <h2 id="tool-fragmentation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Does Tool Fragmentation Cost More Than Your Subscription Total?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The visible cost of a fragmented tool stack is the combined subscription total. The hidden cost is everything else, and it is typically larger than the subscription number.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Integration maintenance time:</strong> The average agency spends 3 to 5 hours per month maintaining integrations that should just work natively.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Data inconsistency:</strong> A lead who unsubscribed from email but is still getting SMS. A client who rebooked but shows as cancelled in the CRM. These are not edge cases; they are weekly occurrences.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Team onboarding overhead:</strong> Every new team member needs to learn 5 to 8 different tools. Every handover involves logging into multiple platforms.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">Missed automation gaps:</strong> The revenue that falls through gaps between tools is invisible but real.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE ACTUAL COST CALCULATION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A common 7-tool agency stack: HubSpot CRM ($50/mo) + Mailchimp ($30/mo) + SimpleTexting SMS ($25/mo) + ClickFunnels ($97/mo) + Calendly Teams ($16/mo) + Zapier Professional ($49/mo) + Birdeye reviews ($299/mo) = <strong className="text-[#DC3545]">$566 per month.</strong> 
                Plus 4 hours of integration maintenance per month at $50/hour = $200 in team time. Real monthly cost: $766. GoHighLevel Unlimited: $297 per month. 
                Monthly saving: <strong className="text-[#25C97D]">$469.</strong> Annual saving: <strong className="text-[#25C97D]">$5,628</strong> before counting the missed revenue from broken automations.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full breakdown of what each GHL plan includes and the real usage costs: 
              <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing 2026 →</Link>
            </p>

            {/* Section 2: What GHL Replaces */}
            <h2 id="what-ghl-replaces" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Does GoHighLevel Actually Replace?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here is the complete list of tool categories GoHighLevel covers natively. No third-party connectors required.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tool category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Common tools it replaces</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GHL equivalent</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Available on</th>
                  </tr>
                </thead>
                <tbody>
                  {toolCategories.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.category}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.commonTools}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghlEquivalent}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.availableOn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                For the full workflow automation guide: 
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation for Beginners →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For the white-label setup guide: 
                <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label: How It Works →</Link>
              </p>
            </div>

            {/* Section 3: What GHL Does Not Replace */}
            <h2 id="what-ghl-not-replaces" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Does GoHighLevel Not Replace?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Honest answer is important here. Consolidating to GHL does not mean cancelling everything.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">Deep e-commerce platforms</h3>
                    <p className="text-sm text-[#5C6880]">Shopify, WooCommerce, Magento handle product inventory, order management, fulfilment tracking. GHL integrates with these but does not replace them.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">Accounting and invoicing</h3>
                    <p className="text-sm text-[#5C6880]">QuickBooks, Xero, FreshBooks handle tax compliance, payroll, and financial reporting. GHL is not an accounting platform.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">Advanced project management</h3>
                    <p className="text-sm text-[#5C6880]">Asana, Monday.com, ClickUp for complex project workflows with team task management are not replaced by GHL.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">Enterprise BI and analytics</h3>
                    <p className="text-sm text-[#5C6880]">Tableau, Looker, Power BI for deep data analysis and visualisation are beyond GHL's reporting scope.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2236]">Specialist SEO tools</h3>
                    <p className="text-sm text-[#5C6880]">Ahrefs, SEMrush, Screaming Frog for technical SEO analysis are not replaced by GHL's basic SEO features.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE RIGHT MENTAL MODEL</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GoHighLevel replaces your marketing and client communication stack. It does not replace your operational or financial infrastructure. 
                The consolidation goal is one platform for everything that touches lead acquisition, lead nurture, client communication, and reputation. 
                Everything behind that (accounting, project management, specialist analytics) stays as it is.
              </p>
            </div>

            {/* Section 4: Calculate Savings */}
            <h2 id="calculate-savings" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How to Calculate Your Real Consolidation Savings
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use this framework to get a realistic number before you make any decisions.
            </p>

            <div className="space-y-2 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <p className="text-sm text-[#1A2236]">List every tool you currently pay for that touches marketing, CRM, sales, or client communication.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <p className="text-sm text-[#1A2236]">Add up the monthly subscription total. Include every tier and every seat licence.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <p className="text-sm text-[#1A2236]">Add the integration maintenance cost. Estimate hours per month your team spends maintaining Zapier workflows or fixing broken connections.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <p className="text-sm text-[#1A2236]">Identify which tools GHL replaces from the table in Section 2. Be honest. Mark only the tools where GHL's equivalent covers your actual usage.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <p className="text-sm text-[#1A2236]">Calculate: (subscription total of replaceable tools) + (integration maintenance cost) - (GHL plan cost). This is your monthly saving.</p>
                </div>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <p className="text-sm text-[#1A2236]">Add the revenue gap. Estimate leads that fall through your current integration gaps each month and what those leads are worth.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">MOST AGENCIES SAVE $200 TO $500+ PER MONTH</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Based on the tool stack calculator data and what we see across 200+ GHL builds, most agencies running a standard 5 to 8 tool stack save 
                between $200 and $500 per month in direct subscription costs after switching to GoHighLevel Unlimited. Agencies replacing Birdeye, Podium, 
                or Weave alongside their CRM and email tools save $500 to $1,000 per month. The integration maintenance saving adds another $150 to $300 
                per month in recovered team time. The consolidation pays for itself in the first 30 days for most agencies.
              </p>
            </div>

            {/* Section 5: Consolidation Phases */}
            <h2 id="consolidation-phases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How to Consolidate to GoHighLevel Without Disrupting Your Business
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The biggest risk in tool consolidation is doing it all at once. The right approach is phased.
            </p>

            <div className="space-y-4 mb-6">
              {consolidationPhases.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-base font-bold text-[#1A2236]">{item.phase}</h3>
                    <span className="text-xs font-semibold text-[#0E9BF0] bg-[rgba(14,155,240,0.1)] px-2 py-1 rounded-full">{item.timeline}</span>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.steps}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">READY TO CONSOLIDATE?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                For the complete guide on migrating from specific platforms: 
                <Link href="/services/migration" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel migration service →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                For agencies that want their GHL account set up correctly from day one: 
                <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel CRM setup service →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                See what other agencies have achieved through consolidation: 
                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">real GoHighLevel results and case studies →</Link>
              </p>
            </div>

            {/* Section 6: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              6. Frequently Asked Questions
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
                <Link href="/blog/why-agencies-switching-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Why Agencies Are Switching to GoHighLevel in 2026 →</Link>
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/what-is-ghl-migration" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel Migration? Beginner's Guide →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to stop managing 6 different tools that do not connect?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up consolidates your entire marketing stack into one system. Audit of your current stack, full GHL setup, 
                  data migration, automation rebuild, and phased cancellation support. Book a free 30-minute strategy call.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>
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