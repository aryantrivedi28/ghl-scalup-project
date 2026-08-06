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
  DollarSign,
  Star,
  AlertTriangle,
  Clock,
  Info,
  BarChart3,
  Shield,
  Users,
  Target,
  Building2,
  Globe,
  Database,
  Layers,
  TrendingUp,
  Award,
  Briefcase,
  LifeBuoy,
  Sparkles,
  Rocket
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GHLWhiteLabelSaaSClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-white-label-saas',
        'how-white-label-saas-works',
        'market-size',
        'benefits-risks',
        'build-or-buy',
        'revenue-models',
        'categories-examples',
        'choose-platform',
        'why-gohighlevel',
        'difference',
        'setup-steps',
        'pricing-strategy',
        'margin-calculator',
        'common-mistakes',
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
      q: "What is white label SaaS?",
      a: "White label SaaS is software built by one company and rebranded and resold by another company as its own product. The end customer sees your brand, logo, domain, and pricing, while the original vendor develops and maintains the underlying technology and stays invisible. It lets agencies and entrepreneurs launch a software product without building it themselves."
    },
    {
      q: "Is white label SaaS profitable?",
      a: "Yes, white label SaaS can be highly profitable because of its recurring revenue model. Unlike one-time services, subscriptions produce consistent monthly income (MRR), and flat-fee platforms like GoHighLevel keep your platform cost fixed while revenue grows. Reseller margins commonly run around 40% or higher, though actual profitability depends on your pricing, niche, and retention."
    },
    {
      q: "How much does it cost to start a white label SaaS?",
      a: "It depends on the platform. Building custom software typically costs $150k to $400k in the first year. Licensing a white label SaaS is usually $20k to $80k, and platforms built for agencies cost far less, for example GoHighLevel at $497/month for the Agency Pro plan that includes SaaS Mode. Factor in your time, a tested Snapshot or configuration, and usage costs on top of the platform fee."
    },
    {
      q: "What is the difference between white label and reselling?",
      a: "In plain reselling, the customer knows they are buying another company's product through you. In white label SaaS, the vendor is invisible and the customer believes the software is yours. You own the branding, pricing, customer relationship, and support experience end to end."
    },
    {
      q: "What are the best white label SaaS platforms to resell in 2026?",
      a: "Popular white label SaaS platforms in 2026 include GoHighLevel (CRM and marketing automation for agencies), Vendasta and DashClicks (broad agency tool marketplaces), SE Ranking (SEO reporting), and various AI-agent and reputation-management tools. The best choice depends on your niche, margin targets, and how much customisation your clients expect. For agencies serving local and small businesses, GoHighLevel is the most common choice due to its scope and flat-fee economics."
    },
    {
      q: "Should I build or buy a white label SaaS?",
      a: "Buy (license) a white label SaaS when a good platform fits your needs and speed matters, which is true for most agencies and consultants. Build custom only when no existing product fits, you need full control, and scale and differentiation justify the $150k+ investment. The practical path is to validate demand with a white label platform first, then build later if justified."
    },
    {
      q: "Which GoHighLevel plan is required for white label SaaS?",
      a: "GoHighLevel white label SaaS (SaaS Mode) is exclusively available on the Agency Pro plan at $497/month. It is not available on the Starter ($97/mo) or Unlimited ($297/mo) plans. Agency Pro adds the SaaS Configurator, automated Stripe billing, self-service sign-up, feature gating per tier, and usage rebilling."
    },
    {
      q: "How much can I earn with a GoHighLevel white label SaaS?",
      a: "Earnings depend on client count and pricing. At 10 clients paying $197/month, net margin after the $497 platform cost is about $1,473/month. At 20 clients, about $3,443/month. At 50 clients, about $9,353/month. Usage rebilling adds more on top, and the platform cost stays fixed at $497/month regardless of client count."
    },
    {
      q: "Do clients know they are using GoHighLevel under my white label SaaS?",
      a: "On the web platform, clients see only your branding, your logo, domain, and support email. GoHighLevel branding does not appear. Clients who previously used GoHighLevel may recognise the interface layout, since features and navigation are identical. The white-label mobile app add-on (about $49/month on Agency Pro) removes this recognition risk, since clients download your named app from the App Store."
    },
    {
      q: "What is GoHighLevel white label SaaS?",
      a: "GoHighLevel white label SaaS refers to using GoHighLevel's SaaS Mode feature to resell the platform as your own branded software product. Clients sign up through your pricing page, pay a monthly subscription via Stripe, and receive access to a fully configured GoHighLevel sub-account under your brand. The entire experience login domain, logo, pricing, feature access carries your brand. GoHighLevel is invisible. SaaS Mode requires the Agency Pro plan at $497/month."
    },
    {
      q: "What is the difference between GoHighLevel white label and SaaS Mode?",
      a: "GoHighLevel white label is the branding layer your logo, colours, and custom domain applied to the GHL dashboard. It is available from $297/month and requires you to create sub-accounts and invoice clients manually. GoHighLevel SaaS Mode is the business model layer it adds a SaaS Configurator for creating pricing tiers, automated Stripe billing, self-service client sign-up, automatic sub-account provisioning, and feature gating per tier."
    },
    {
      q: "Is Stripe required for GoHighLevel SaaS Mode?",
      a: "Yes. Stripe is the only supported payment processor for GoHighLevel SaaS Mode. You need an active Stripe account in live mode to process client subscriptions. Stripe charges 2.9% plus $0.30 per successful transaction. PayPal and other processors are not supported at the SaaS billing layer."
    },
    {
      q: "How long does it take to set up GoHighLevel SaaS Mode?",
      a: "The technical configuration connecting Stripe, creating pricing plans in the SaaS Configurator, configuring feature access, attaching a Snapshot, and setting up the sign-up page takes 2–4 hours for someone following a clear process. DNS propagation takes 15 minutes to 24 hours. Building and testing a quality Snapshot adds another 4–8 hours. Most agencies budget one full working day to go from zero to a tested, live SaaS sign-up flow."
    },
    {
      q: "What happens when a client cancels their GoHighLevel SaaS subscription?",
      a: "When a client cancels their Stripe subscription, their GoHighLevel sub-account remains active until you manually suspend it SaaS Mode does not automate offboarding. Best practice is to build a GoHighLevel workflow triggered by the Stripe cancellation webhook that notifies you immediately and suspends the sub-account within 24 hours. Without this automation, cancelled clients retain indefinite access to your platform."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-white-label-saas', title: '1. What Is White Label SaaS?' },
    { id: 'how-white-label-saas-works', title: '2. How Does White Label SaaS Work?' },
    { id: 'market-size', title: '3. How Big Is the White Label SaaS Market in 2026?' },
    { id: 'benefits-risks', title: '4. What Are the Benefits and Risks?' },
    { id: 'build-or-buy', title: '5. Should You Build or Buy?' },
    { id: 'revenue-models', title: '6. What Are the Revenue Models?' },
    { id: 'categories-examples', title: '7. Main Categories and Examples' },
    { id: 'choose-platform', title: '8. How to Choose a Platform' },
    { id: 'why-gohighlevel', title: '9. Why GoHighLevel Is #1 for Agencies' },
    { id: 'difference', title: '10. White Label vs White Label SaaS' },
    { id: 'setup-steps', title: '11. How to Set Up SaaS Mode (Step-by-Step)' },
    { id: 'pricing-strategy', title: '12. How to Price Your SaaS Offer' },
    { id: 'margin-calculator', title: '13. The SaaS Margin Calculator' },
    { id: 'common-mistakes', title: '14. Common Mistakes to Avoid' },
    { id: 'faq', title: '15. Frequently Asked Questions' },
  ];

  const comparisonTable = [
    { feature: 'What it is', ghlWhiteLabel: 'Branding layer: your logo, domain, colours', ghlSaaS: 'Business model: automated billing + software product' },
    { feature: 'Plan required', ghlWhiteLabel: 'Unlimited — $297/month', ghlSaaS: 'Agency Pro — $497/month only' },
    { feature: 'Client billing', ghlWhiteLabel: 'You invoice manually', ghlSaaS: 'Clients pay automatically through your branded checkout' },
    { feature: 'Sub-account creation', ghlWhiteLabel: 'You create manually per client', ghlSaaS: 'Created automatically when client pays' },
    { feature: 'Snapshot deployment', ghlWhiteLabel: 'You deploy manually', ghlSaaS: 'Deployed automatically on payment' },
    { feature: 'Pricing tiers', ghlWhiteLabel: 'Set externally, however you like', ghlSaaS: 'Built in the SaaS Configurator, up to 20 tiers' },
    { feature: 'Feature gating', ghlWhiteLabel: 'Not available', ghlSaaS: 'Gate which features each tier can access' },
    { feature: 'Best for', ghlWhiteLabel: 'Agencies managing 3 to 10 clients manually', ghlSaaS: 'Agencies scaling beyond 10 clients with zero manual work' },
  ];

  const buildVsBuyTable = [
    { factor: 'Time to market', build: '12 to 24 months', buy: 'Days to weeks' },
    { factor: 'Year 1 cost (typical)', build: '$150k to $400k', buy: '$20k to $80k (far less on GoHighLevel)' },
    { factor: 'Technical risk', build: 'High, unproven', buy: 'Low, already tested in market' },
    { factor: 'Differentiation', build: 'Full control', buy: 'Via niche, service, and positioning' },
    { factor: 'Maintenance', build: 'Your engineering team', buy: 'Handled by the vendor' },
    { factor: 'Best when', build: 'No existing product fits, you need full control', buy: 'A good platform exists and speed matters' },
  ];

  const platformCriteria = [
    { criterion: 'Branding depth', description: 'Can you fully white-label it, custom domain, logo, colours, and ideally a branded mobile app, or only partially?' },
    { criterion: 'Billing and self-service', description: 'Does it handle recurring client billing and self-service sign-up automatically, or must you invoice manually?' },
    { criterion: 'Margin structure', description: 'Is it flat-fee (best margins at scale) or per-seat (margin shrinks as you grow)?' },
    { criterion: 'Scope of features', description: 'Does one platform cover enough of your clients\' needs to be their primary tool, increasing stickiness?' },
    { criterion: 'Multi-client management', description: 'Can you manage many clients from one dashboard without friction?' },
    { criterion: 'Support and reliability', description: 'What is the vendor\'s uptime and support quality, since your brand absorbs their failures?' },
    { criterion: 'Total cost at scale', description: 'Model your real cost at 10, 20, and 50 clients, including usage fees, not just the headline price.' },
  ];

  const pricingTiers = [
    { tier: 'Starter', suggestedPrice: '$97 to $147/mo', included: 'CRM, pipelines, calendar, basic automations, email marketing', bestFor: 'Small businesses testing the platform' },
    { tier: 'Growth', suggestedPrice: '$197 to $247/mo', included: 'Everything in Starter + SMS, funnels, reputation management, AI chatbot', bestFor: 'Growing businesses running active lead gen' },
    { tier: 'Pro', suggestedPrice: '$297 to $497/mo', included: 'Everything in Growth + AI Voice Agent, advanced automations, full reporting', bestFor: 'High-volume businesses wanting maximum automation' },
  ];

  const marginData = [
    { clients: 3, price: '$197/mo', revenue: '$591', ghlCost: '$497', netMargin: '$94 breakeven', annualised: '$1,128' },
    { clients: 5, price: '$197/mo', revenue: '$985', ghlCost: '$497', netMargin: '$488', annualised: '$5,856' },
    { clients: 10, price: '$197/mo', revenue: '$1,970', ghlCost: '$497', netMargin: '$1,473', annualised: '$17,676' },
    { clients: 20, price: '$197/mo', revenue: '$3,940', ghlCost: '$497', netMargin: '$3,443', annualised: '$41,316' },
    { clients: 50, price: '$197/mo', revenue: '$9,850', ghlCost: '$497', netMargin: '$9,353', annualised: '$112,236' },
    { clients: 20, price: '$297/mo', revenue: '$5,940', ghlCost: '$497', netMargin: '$5,443', annualised: '$65,316' },
    { clients: 50, price: '$297/mo', revenue: '$14,850', ghlCost: '$497', netMargin: '$14,353', annualised: '$172,236' },
  ];

  const mistakesList = [
    { mistake: 'Launching without a tested Snapshot', fix: 'Build and test the Snapshot in a clean sub-account completely before connecting it to SaaS Mode. When a client pays and their account provisions automatically, they see whatever is in your Snapshot. An incomplete or broken Snapshot becomes their first impression.' },
    { mistake: 'No offboarding automation when a client cancels', fix: 'SaaS Mode automates onboarding but not offboarding. Without a Stripe-cancellation workflow, cancelled clients keep indefinite free access. Build one that suspends the sub-account within 24 hours.' },
    { mistake: 'Pricing all tiers too close together', fix: 'If Starter is $97 and Pro is $147, clients always choose Starter. Create meaningful differentiation and a 2 to 3x price gap between tiers.' },
    { mistake: 'Upgrading to Agency Pro before the foundation is ready', fix: 'Build your Snapshot and pricing on the Unlimited plan ($297/mo) first. Only upgrade to Agency Pro when you are ready to onboard paying clients within 30 days.' },
    { mistake: 'Competing on price instead of niche', fix: 'Because others resell the same platform, differentiation comes from niche and positioning, not from being the cheapest.' },
  ];

  const revenueModels = [
    { 
      model: 'Per-seat pricing', 
      description: 'Charge per user per month. Simple and predictable, but revenue is capped by the customer\'s team size.',
      bestFor: 'B2B tools with small teams'
    },
    { 
      model: 'Tiered subscription pricing', 
      description: 'Offer Starter, Pro, and Enterprise packages that bundle features. The most flexible model, with strong upsell potential, and the one most successful white label SaaS operators use.',
      bestFor: 'Most white label SaaS businesses'
    },
    { 
      model: 'Revenue share', 
      description: 'You and the vendor split subscription revenue. Lower upfront cost, but the vendor takes an ongoing percentage.',
      bestFor: 'Startups with limited capital'
    },
    { 
      model: 'Flat-fee licensing', 
      description: 'You pay the vendor a fixed fee (for example, GoHighLevel\'s $497/month) regardless of customer count, and keep everything you charge above your costs. This model produces the best margins at scale because your platform cost stays fixed while revenue grows.',
      bestFor: 'Agencies scaling beyond 10 clients'
    },
  ];

  const categories = [
    { category: 'CRM and marketing automation', examples: 'GoHighLevel, Vendasta', description: 'All-in-one platforms that bundle CRM, funnels, email, SMS, and automation.' },
    { category: 'SEO tools', examples: 'SE Ranking', description: 'Platforms that let agencies resell branded SEO audits and reports.' },
    { category: 'Reputation and review management', examples: 'Various tools', description: 'Tools that offer review generation and monitoring under your brand, popular with local-business clients.' },
    { category: 'Analytics and reporting dashboards', examples: 'Various tools', description: 'White label dashboards agencies brand and deliver to clients instead of manual reports.' },
    { category: 'AI agents and chatbots', examples: 'Various tools', description: 'A fast-growing 2026 category, letting resellers build and sell AI assistants trained on client content.' },
    { category: 'Website and funnel builders', examples: 'Various tools', description: 'No-code builders resold under an agency\'s brand.' },
    { category: 'Communication platforms', examples: 'Various tools', description: 'Voice, SMS, and video tools rebranded for client use.' },
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
          <span className="text-[#1A2236] font-medium">White Label SaaS: The Complete 2026 Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">White Label SaaS</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel SaaS Mode</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS Resale</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            White Label SaaS: The Complete 2026 Guide
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center rounded-full">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">White label SaaS specialists, 200+ builds delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            White label SaaS is one of the fastest ways to launch a software business in 2026 without writing a single line of code. 
            Instead of spending 12 to 24 months and hundreds of thousands of dollars building software, you license a proven platform, 
            put your brand on it, and sell it as your own.
          </p>
          
          {/* Direct Answer Box */}
          <div className="bg-[rgba(14,155,240,0.1)] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#0E9BF0]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E9BF0]">Direct Answer</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              White label SaaS is a business model where you take software built and maintained by one company, rebrand it as your own, 
              and resell it to customers under your brand, logo, domain, and pricing. The end customer sees only your brand; 
              the original vendor stays invisible. It lets agencies, consultants, and entrepreneurs launch a software product in days 
              instead of years, with no engineering team, by trading a share of the margin for the vendor's technology and maintenance.
              The global white label SaaS market was estimated at approximately $235.9 billion in 2025 and projected near $278 billion in 2026 (roughly 16% CAGR, per one 2026 market report, figures vary by source). Popular categories include CRM and marketing automation, 
              SEO tools, reputation management, AI agents, and communication platforms. For agencies, GoHighLevel is the most common platform for building a white label SaaS because it bundles CRM, funnels, automation, and a built-in SaaS billing engine into one resellable system.
            </p>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* What This Guide Covers */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What This Guide Covers</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  '1. What Is White Label SaaS?',
                  '2. How Does White Label SaaS Work?',
                  '3. How Big Is the Market in 2026?',
                  '4. What Are the Benefits and Risks?',
                  '5. Should You Build or Buy?',
                  '6. What Are the Revenue Models?',
                  '7. Main Categories and Examples',
                  '8. How to Choose a Platform',
                  '9. Why GoHighLevel Is #1 for Agencies',
                  '10. White Label vs White Label SaaS',
                  '11. How to Set Up SaaS Mode',
                  '12. How to Price Your SaaS Offer',
                  '13. The SaaS Margin Calculator',
                  '14. Common Mistakes to Avoid',
                  '15. Frequently Asked Questions'
                ].map((item, idx) => (
                  <p key={idx} className="text-sm text-[#5C6880] py-0.5">{item}</p>
                ))}
              </div>
            </div>

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

            {/* Section 1: What Is White Label SaaS? */}
            <h2 id="what-is-white-label-saas" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is White Label SaaS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong>White label SaaS is software built by one company and rebranded and resold by another company as its own product.</strong> 
              The term comes from the idea of a blank white label on a product that a reseller can stamp their own brand onto. 
              The end customer sees your company name, your logo, your domain, and your pricing, while the underlying technology 
              is developed and maintained by the original vendor.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The natural next question is how this differs from simple reselling. In plain reselling, the customer knows they 
              are buying another company's product through you. In white label SaaS, the vendor is invisible. The customer believes 
              the software is yours. You own the customer relationship, the branding, the pricing, and the support experience end to end.
            </p>
            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>Simple analogy:</strong> a cafe serves coffee under its own name using beans roasted by a large supplier. 
                The cafe did not grow or roast the beans, but the branded experience is theirs. White label SaaS works the same way, 
                with software instead of coffee.
              </p>
            </div>

            {/* Section 2: How Does White Label SaaS Work? */}
            <h2 id="how-white-label-saas-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. How Does White Label SaaS Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              White label SaaS works through a multi-tenant architecture. The vendor maintains one core platform, and each reseller 
              (or 'tenant') gets a branded, isolated instance of it. Your customers' data stays separate from every other reseller's, 
              but everyone runs on the same underlying technology the vendor keeps updated.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In practice, the workflow looks like this: you license the platform from the vendor, apply your branding (logo, colours, 
              custom domain), set your own pricing tiers, and sell subscriptions to your customers. Your customers pay you, you pay 
              the vendor a wholesale or licensing fee, and the difference is your margin. The vendor handles hosting, security, updates, 
              and core support, while you handle sales, branding, customer relationships, and front-line support.
            </p>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-4 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">HOW WHITE LABEL SAAS WORKS</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <span className="bg-[rgba(14,155,240,0.2)] px-3 py-1.5 rounded-full">Vendor builds & maintains core platform</span>
                <ArrowRight className="w-4 h-4 text-white/40" />
                <span className="bg-[rgba(37,201,125,0.2)] px-3 py-1.5 rounded-full">You rebrand + set pricing</span>
                <ArrowRight className="w-4 h-4 text-white/40" />
                <span className="bg-[rgba(248,208,0,0.2)] px-3 py-1.5 rounded-full">Your customer subscribes under your brand</span>
                <ArrowRight className="w-4 h-4 text-white/40" />
                <span className="bg-[rgba(14,155,240,0.2)] px-3 py-1.5 rounded-full">You pay vendor wholesale, keep the margin</span>
              </div>
            </div>

            {/* Section 3: Market Size */}
            <h2 id="market-size" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Big Is the White Label SaaS Market in 2026?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The white label SaaS market is large and growing quickly, though exact figures vary by source and should be treated 
              as directional rather than precise.
            </p>
            <ul className="space-y-2 text-sm text-[#5C6880] leading-relaxed list-disc list-inside mb-4">
              <li>One 2026 market report estimated the global white label SaaS market at approximately <strong>$235.9 billion in 2025</strong>, projected to reach roughly <strong>$278 billion in 2026</strong>, at about a 16.2% CAGR.</li>
              <li>Gartner has projected that around <strong>85% of all software spending</strong> would be SaaS-based by 2026, which expands the pool of software available to white label.</li>
              <li>One industry roundup reported that roughly <strong>73% of agencies</strong> use white label services in some form, and that agencies outsourcing 40 to 60% of delivery work grew significantly faster than peers.</li>
            </ul>
            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">A NOTE ON THESE NUMBERS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Market-size figures for white label SaaS vary widely between sources. The numbers above come from published 2026 
                market reports and industry roundups, but different analysts define the category differently, so treat them as 
                directional indicators of a large, growing market rather than precise, audited figures. Verify against a current 
                primary source before citing any specific number.
              </p>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong>Why this matters for you:</strong> a large and growing market means both strong demand and real competition. 
              The opportunity is genuine, but success depends on positioning and niche, not simply entering the market. We return to this in the platform-choice and pricing sections.
            </p>

            {/* Section 4: Benefits and Risks */}
            <h2 id="benefits-risks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Are the Benefits and Risks of White Label SaaS?
            </h2>
            
            <h3 className="text-lg font-bold text-[#25C97D] mt-4 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> The Benefits of White Label SaaS
            </h3>
            <ul className="space-y-2 text-sm text-[#5C6880] leading-relaxed list-disc list-inside mb-4">
              <li><strong>Faster time to market:</strong> You launch in days or weeks instead of the 12 to 24 months a custom build typically takes.</li>
              <li><strong>Lower upfront cost:</strong> You license instead of building. A custom SaaS can cost $150k to $400k in year one; white label is often $20k to $80k, and platforms like GoHighLevel are far less.</li>
              <li><strong>Proven product:</strong> The vendor has already solved the core technical problems and tested the software in real customer environments.</li>
              <li><strong>Recurring revenue:</strong> Customers pay monthly subscriptions, creating predictable MRR rather than one-time project income.</li>
              <li><strong>Focus on sales and service:</strong> You spend your time on go-to-market and customer success instead of engineering and maintenance.</li>
              <li><strong>Customer ownership and stickiness:</strong> You own the customer relationship, and because the software becomes embedded in the customer's operations, switching costs are high, which improves retention.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#DC3545] mt-4 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> The Risks and Limitations of White Label SaaS
            </h3>
            <ul className="space-y-2 text-sm text-[#5C6880] leading-relaxed list-disc list-inside mb-4">
              <li><strong>Platform dependency:</strong> Your business relies on the vendor's uptime, roadmap, and pricing. If they raise prices or change features, you are affected.</li>
              <li><strong>Limited differentiation:</strong> Many resellers may sell the same underlying platform, so your positioning and niche have to create the differentiation.</li>
              <li><strong>Less control over the roadmap:</strong> You cannot force the vendor to build a feature your customers request.</li>
              <li><strong>Margin sharing:</strong> The vendor takes a portion of the value in exchange for the technology and maintenance.</li>
              <li><strong>Support responsibility:</strong> You are usually the first line of support for your customers, even though you did not build the software.</li>
            </ul>

            {/* Section 5: Build or Buy */}
            <h2 id="build-or-buy" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Should You Build or Buy a White Label SaaS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One of the most common decisions founders face is whether to build custom software or buy (license) a white label SaaS. 
              The right answer depends on your timeline, budget, and need for differentiation.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#DC3545]">Build Custom SaaS</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">Buy / White Label SaaS</th>
                  </tr>
                </thead>
                <tbody>
                  {buildVsBuyTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#DC3545]">{item.build}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.buy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#25C97D]">The practical recommendation:</strong> validate demand with a white label platform first. 
                Build custom only when scale and differentiation genuinely justify the investment, and when you have proven customers will pay. 
                Most agencies and consultants should start by licensing a proven white label SaaS.
              </p>
            </div>

            {/* Section 6: Revenue Models */}
            <h2 id="revenue-models" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Are the White Label SaaS Revenue Models?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are four common revenue models in white label SaaS. Choosing the right one shapes your margins and how your business scales.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {revenueModels.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4 hover:shadow-md transition-shadow">
                  <h4 className="text-sm font-bold text-[#0E9BF0] mb-1">{item.model}</h4>
                  <p className="text-xs text-[#5C6880] leading-relaxed mb-2">{item.description}</p>
                  <p className="text-xs text-[#1A2236] font-medium">Best for: {item.bestFor}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WHY FLAT-FEE SCALES BEST</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>The flat-fee model is why GoHighLevel is so popular for white label SaaS.</strong> You pay $497/month whether 
                you have 5 clients or 500. Every client you add past your break-even point is almost pure margin, because your platform 
                cost never rises with client count. Per-seat and revenue-share models, by contrast, take a bigger cut as you grow.
              </p>
            </div>

            {/* Section 7: Categories and Examples */}
            <h2 id="categories-examples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Are the Main Categories and Examples of White Label SaaS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              White label SaaS exists across many software categories. These are the most common ones agencies and entrepreneurs resell in 2026.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {categories.map((item, idx) => (
                <div key={idx} className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-3">
                  <h4 className="text-sm font-bold text-[#1A2236] mb-0.5">{item.category}</h4>
                  <p className="text-xs text-[#0E9BF0] font-medium mb-1">{item.examples}</p>
                  <p className="text-xs text-[#5C6880] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>Which category is best?</strong> It depends on your audience and existing skills. For agencies serving local 
                and small businesses, CRM and marketing automation platforms tend to offer the widest scope and the strongest economics, 
                which is why GoHighLevel dominates that specific segment.
              </p>
            </div>

            {/* Section 8: How to Choose a Platform */}
            <h2 id="choose-platform" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Do You Choose a White Label SaaS Platform?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choosing the right white label SaaS platform is the most consequential decision in this business model. Evaluate any platform 
              against these seven criteria.
            </p>

            <div className="space-y-3 mb-6">
              {platformCriteria.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0E9BF0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#0E9BF0]">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A2236]">{item.criterion}</h4>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE PLATFORM WE RECOMMEND MOST</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                <strong>For agencies serving local and small businesses, GoHighLevel scores highest on most of these criteria.</strong> 
                It offers deep white-labelling including a branded mobile app, built-in automated billing and self-service sign-up, 
                a flat-fee margin structure, and a feature scope broad enough to be a client's primary business tool. Vendasta and 
                DashClicks are alternatives with broader tool marketplaces, and SE Ranking is strong specifically for SEO reselling.
                The rest of this guide focuses on GoHighLevel because it is the platform we build on most and the one with the strongest economics for the agency use case.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A2236]">Not sure which white label SaaS platform fits your business?</h4>
                  <p className="text-sm text-[#5C6880]">GHL Scale Up helps you choose, then builds the whole thing. 200+ builds delivered across 6 countries.</p>
                </div>
              </div>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-bold px-5 py-2.5 rounded-lg hover:bg-[#0B89D6] transition-all text-sm">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 9: Why GoHighLevel Is #1 */}
            <h2 id="why-gohighlevel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. Why Is GoHighLevel the Top White Label SaaS Platform for Agencies?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is the most common platform for building a white label SaaS business in the agency space, and for specific 
              reasons rather than hype.
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-[#25C97D]" />
                  <span className="text-sm font-bold text-[#25C97D]">Full White Label</span>
                </div>
                <p className="text-sm text-[#1A2236] leading-relaxed">Logo, custom domain, brand colours, and an optional white-label mobile app, so GoHighLevel is completely invisible to your clients.</p>
              </div>
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Database className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="text-sm font-bold text-[#0E9BF0]">Built-in SaaS Billing Engine</span>
                </div>
                <p className="text-sm text-[#1A2236] leading-relaxed">The SaaS Configurator handles pricing tiers, Stripe billing, and self-service sign-up natively, so you do not bolt on a separate billing system.</p>
              </div>
              <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-4 h-4 text-[#F8D000]" />
                  <span className="text-sm font-bold text-[#F8D000]">Flat-Fee Economics</span>
                </div>
                <p className="text-sm text-[#1A2236] leading-relaxed">At $497/month regardless of client count, GoHighLevel produces the best margins at scale of any model.</p>
              </div>
              <div className="bg-[#F3F0FF] border border-[rgba(139,92,246,0.2)] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-sm font-bold text-[#8B5CF6]">Broad Feature Scope</span>
                </div>
                <p className="text-sm text-[#1A2236] leading-relaxed">CRM, funnels, websites, email, SMS, automation, calendars, reputation management, and AI in one platform.</p>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-4 my-4 text-white">
              <p className="text-sm text-white/80 leading-relaxed">
                <strong>For agencies serving local and small businesses, GoHighLevel scores highest on most white label SaaS criteria.</strong> 
                It offers deep white-labelling, built-in automated billing, a flat-fee margin structure, and a feature scope broad enough 
                to be a client's primary business tool.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                📖 <strong>Platform Overview:</strong> <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete 2026 Guide</Link> — 
                <Link href="/blog/why-agencies-switching-to-gohighlevel" className="text-[#0E9BF0] hover:underline ml-1">Why Agencies Are Switching to GoHighLevel</Link>
              </p>
            </div>

            {/* Section 10: Difference */}
            <h2 id="difference" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. What Is the Difference Between GoHighLevel White Label and White Label SaaS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the most misunderstood distinction in the GoHighLevel ecosystem. Many agency owners think they're running a 
              white label SaaS business when they're actually just running white-labelled client accounts. Here is the exact difference.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE SIMPLEST WAY TO THINK ABOUT IT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>GoHighLevel White Label:</strong> makes GoHighLevel <em>look</em> like your software.<br />
                <strong>GoHighLevel White Label SaaS:</strong> makes GoHighLevel <em>operate</em> as your software business, with 
                automated billing, tiered pricing, self-service sign-up, and recurring revenue that scales without adding manual work per client.
              </p>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel White Label</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">GoHighLevel White Label SaaS (SaaS Mode)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghlWhiteLabel}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.ghlSaaS}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the technical white-label branding setup (domain, logo, CNAME): 
              <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label: How It Works →</Link>
            </p>

            {/* Section 11: Setup Steps */}
            <h2 id="setup-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              11. How Do You Set Up a White Label SaaS on GoHighLevel? (Step-by-Step)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before you start, confirm four prerequisites: you are on the GoHighLevel Agency Pro plan ($497/mo), you have a Stripe 
              account in live mode, you have a white-label domain configured (app.youragency.com), and you have a Snapshot built and tested. 
              If any are missing, complete them first.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Upgrade to Agency Pro and open SaaS Mode</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In Agency View, go to Settings → Company → Billing and confirm the $497/month Agency Pro plan. Then open Settings → SaaS Mode to reach the SaaS Configurator, your control centre for all white label SaaS settings.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Connect your Stripe account</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In the SaaS Configurator, click Connect Stripe and authorise with a live Stripe account, not a test account. Stripe is the only supported processor for GoHighLevel SaaS billing, and it charges 2.9% plus $0.30 per successful transaction on top of your client price.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Create your white label SaaS pricing plans</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Click Add Plan and create each tier, for example Starter ($97/mo), Growth ($197/mo), Pro ($297/mo). For each, set the name, monthly price, optional annual price, trial length (0 to 30 days), and included features. GoHighLevel supports up to 20 pricing tiers, each mapped to a Stripe product automatically.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Configure feature access per plan</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">For each tier, define which GoHighLevel features clients can access. Feature gating separates your tiers and prevents lower-paying clients from reaching premium features. Review every toggle, since a feature left on is given away free.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Attach your Snapshot to each plan</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Attach the relevant Snapshot inside each plan's settings. When a client pays, the Snapshot deploys to their new sub-account automatically, turning a blank account into a ready-to-use system from minute one. Test the Snapshot thoroughly first.</p>
                <p className="text-sm text-[#0E9BF0] leading-relaxed ml-9 mt-1">📖 <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link></p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Set up your self-service sign-up page</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">The SaaS Configurator generates a hosted, branded sign-up and checkout page. Customise it with your branding, plan descriptions, and trial copy, then copy the sign-up URL to share with prospects and embed on your site. When a prospect selects a plan and pays, everything else happens automatically.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">7</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Test the full flow end-to-end, then add offboarding</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Run a complete test: visit your sign-up URL, complete a payment, and confirm a new sub-account is created with your Snapshot deployed and branding applied. Then build an offboarding workflow triggered by the Stripe cancellation webhook that suspends a sub-account within 24 hours of cancellation, since GoHighLevel automates onboarding but not offboarding.</p>
              </div>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">SETUP TIME</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The technical setup takes <strong>2 to 4 hours</strong> for someone following a clear process. DNS propagation for your 
                custom domain can take 15 minutes to 24 hours, and building and testing a quality Snapshot adds another 4 to 8 hours. 
                Budget one full working day to go from zero to a tested, live white label SaaS sign-up flow.
              </p>
            </div>

            {/* Section 12: Pricing Strategy */}
            <h2 id="pricing-strategy" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              12. How Do You Price Your White Label SaaS Offer?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Pricing is the most consequential decision in your white label SaaS launch. Most agencies price too low and create a 
              race to the bottom. Here is the three-tier framework used by successful GoHighLevel white label SaaS operators.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Tier</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Suggested Price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What's Included</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#0E9BF0]">{item.tier}</td>
                      <td className="py-3 px-3">{item.suggestedPrice}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.included}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <h4 className="text-sm font-bold text-[#1A2236] mb-2">Pricing principles from the field:</h4>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong>Do not price below $97/month.</strong> Clients paying less than $97 treat the software as disposable and churn at significantly higher rates.</li>
                <li><strong>Absorb usage costs into the plan price.</strong> Add a $50 to $75 buffer for average SMS, email, and call usage to avoid billing surprises.</li>
                <li><strong>Make the middle tier the most attractive.</strong> Most white label SaaS businesses earn the majority of revenue from the mid-tier plan. Price it near 2x the Starter tier.</li>
                <li><strong>Offer annual billing at a 15 to 20% discount.</strong> Annual clients churn at roughly one-third the rate of monthly clients.</li>
              </ul>
            </div>

            {/* Section 13: Margin Calculator */}
            <h2 id="margin-calculator" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              13. White Label SaaS Margin Calculator
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your GoHighLevel platform cost is fixed at $497/month regardless of client count, which is why white label SaaS margin 
              improves non-linearly as you add clients. These are net margins before Stripe fees and usage costs.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Clients</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your Price/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly Revenue</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Net Margin</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annualised</th>
                  </tr>
                </thead>
                <tbody>
                  {marginData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.clients} clients</td>
                      <td className="py-3 px-3">{item.price}</td>
                      <td className="py-3 px-3">{item.revenue}</td>
                      <td className="py-3 px-3">{item.ghlCost}</td>
                      <td className="py-3 px-3 text-[#25C97D] font-semibold">{item.netMargin}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.annualised}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-4 my-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">USAGE MARGIN ON TOP</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                <strong>Rebilling adds margin on top of subscription revenue.</strong> If GoHighLevel charges $0.0079/SMS and you 
                charge clients $0.015/SMS, you earn about $0.0071 per message across every client's entire sending volume. At 20 
                clients each sending 500 SMS/month, that is an extra $71/month in pure margin, and it scales as your client base grows.
              </p>
            </div>

            {/* Section 14: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              14. Common White Label SaaS Mistakes to Avoid
            </h2>

            <div className="space-y-4 mb-6">
              {mistakesList.map((item, idx) => (
                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.mistake}</p>
                      <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE BUILD THIS FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                <strong>GHL Scale Up</strong> configures complete GoHighLevel white label SaaS setups: Stripe billing, SaaS Configurator, 
                pricing tiers, Snapshot build, onboarding flow, and offboarding automation. Most builds go live in 5 to 7 business days. 
                See <strong>real GoHighLevel results and case studies</strong> at <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">ghlscaleup.com/case-studies</Link>.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all text-sm">
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 15: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              15. Frequently Asked Questions About White Label SaaS
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

            {/* About GHL Scale Up */}
            <div className="mt-10 pt-6 border-t border-[#DDE1E9]">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">About GHL Scale Up</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  <strong>GHL Scale Up</strong> is the #1 GoHighLevel expert agency, founded by Aryan Trivedi and based in India, 
                  serving businesses across 6 countries with 200+ builds delivered and 5+ years of experience, including white label 
                  SaaS setups across real estate, healthcare, agencies, and home services. All GoHighLevel technical steps were verified 
                  against the platform as of July 2026; general white label SaaS market figures are cited as directional from 2026 market reports.
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <Globe className="w-4 h-4 text-[#0E9BF0]" />
                  <Link href="/" className="text-sm text-[#0E9BF0] hover:underline">ghlscaleup.com</Link>
                  <span className="text-[#DDE1E9]">|</span>
                  <span className="text-sm text-[#5C6880]">Contact: ghlscaleup.com/contact-us</span>
                  <span className="text-[#DDE1E9]">|</span>
                  <span className="text-sm text-[#5C6880]">+91 98932 70210</span>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-6 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-white-label" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label: How It Works →</Link>
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to launch your white label SaaS?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds the whole thing and you launch in 5 to 7 days. Stripe, SaaS Configurator, pricing tiers, 
                  Snapshot, sign-up, and offboarding, tested before handover. 200+ builds delivered.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
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
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
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
                  <div className="text-xs text-white/50">White label SaaS specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built globally including white label SaaS setups across real estate, 
                healthcare, agencies, and home services. All technical steps verified against GoHighLevel's official documentation as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2">
              <div className="text-sm font-bold text-white mb-2">Want to Launch a White Label SaaS?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We configure complete GHL SaaS Mode setups. 5–7 business day delivery.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share This Guide</div>
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