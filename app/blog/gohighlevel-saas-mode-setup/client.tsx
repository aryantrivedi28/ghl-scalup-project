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
  TrendingUp,
  Star,
  AlertTriangle,
  XCircle,
  Shield,
  Settings,
  Clock,
  DollarSign,
  Users,
  Rocket,
  Globe,
  Award,
  Briefcase,
  Building2,
  Info,
  Lightbulb
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelSaaSModeSetupClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-saas-mode',
        'prerequisites',
        'setup-steps',
        'go-live-checklist',
        'pricing-tiers',
        'margin-calculator',
        'troubleshooting',
        'limitations',
        'advanced-tips',
        'who-its-for',
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
      q: "Do I need to know how to code to set up GoHighLevel SaaS Mode?",
      a: "No. GoHighLevel SaaS Mode setup involves no coding at all. Every step is done through menus, switches, and forms inside GoHighLevel and Stripe. The only mildly technical part is pointing your web address at GoHighLevel (adding a DNS record), which is a copy-and-paste task your domain provider or a quick support request can help with. This guide explains every technical term in plain language as it comes up."
    },
    {
      q: "Which plan do I need for GoHighLevel SaaS Mode?",
      a: "GoHighLevel SaaS Mode is only on the Agency Pro plan at $497/month. The Starter ($97/month) and Unlimited ($297/month) plans do not include it. Agency Pro is the only plan that unlocks the SaaS Configurator, automatic Stripe billing, self-service client sign-up, feature gating per plan, and usage rebilling."
    },
    {
      q: "What is Stripe and why do I need it for GoHighLevel SaaS Mode?",
      a: "Stripe is a payment company that securely collects credit card payments and deposits them into your bank account. GoHighLevel SaaS Mode uses Stripe to automatically charge your clients every month. You need a Stripe account in 'live mode', meaning you have completed Stripe's identity and bank verification, before real clients can pay you. PayPal and other processors are not supported for SaaS Mode billing."
    },
    {
      q: "What is a snapshot in GoHighLevel SaaS Mode?",
      a: "A snapshot is a saved template of a complete client account, with all the pipelines, automations, forms, and workflows already built. When a client pays, GoHighLevel copies this template into their new account instantly, so they log in to a working system rather than a blank screen. Your snapshot must be built and fully tested before you use it in SaaS Mode, because every new client receives it automatically."
    },
    {
      q: "What happens when a GoHighLevel SaaS Mode client cancels?",
      a: "When a client cancels, GoHighLevel does not automatically switch off their access, this surprises many new operators. Their account stays active until you suspend it. The fix is to build a small automatic rule (a workflow) triggered by Stripe's cancellation signal that switches the account off within 24 hours. Without it, cancelled clients keep free access indefinitely, so this step is essential."
    },
    {
      q: "How long does GoHighLevel SaaS Mode setup take?",
      a: "The setup itself takes about 2 to 4 hours once your four prerequisites are ready. Pointing your web address at GoHighLevel can add up to 24 hours of waiting for the internet to update, and building and testing a snapshot adds several hours if you have not done it yet. Budget one full working day from starting to a tested, live sign-up page."
    },
    {
      q: "Can GHL Scale Up set up GoHighLevel SaaS Mode for me?",
      a: "Yes. GHL Scale Up handles the complete GoHighLevel SaaS Mode setup, connecting Stripe, creating your pricing plans, gating features, building and testing your snapshot, branding your sign-up page, setting up your sending email, and building the cancellation switch-off. Most setups go live in 5 to 7 business days. Book a free strategy call at ghlscaleup.com/contact-us."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-saas-mode', title: '1. What Is GoHighLevel SaaS Mode, in Plain English?' },
    { id: 'prerequisites', title: '2. What Do You Need Before You Start? (The 4 Prerequisites, Explained)' },
    { id: 'setup-steps', title: '3. How to Set Up GoHighLevel SaaS Mode: All 10 Steps in Detail' },
    { id: 'go-live-checklist', title: '4. The Go-Live Checklist Before You Share Your Sign-Up Link' },
    { id: 'pricing-tiers', title: '5. How to Structure Your GoHighLevel SaaS Mode Pricing Plans' },
    { id: 'margin-calculator', title: '6. How Much Money Can You Make? (Margin at Different Client Counts)' },
    { id: 'troubleshooting', title: '7. Troubleshooting: Fixing the Most Common GoHighLevel SaaS Mode Problems' },
    { id: 'limitations', title: '8. The Limitations of GoHighLevel SaaS Mode You Should Know' },
    { id: 'advanced-tips', title: '9. Advanced Tips Most Agencies Miss' },
    { id: 'who-its-for', title: '10. Who GoHighLevel SaaS Mode Is Actually For' },
    { id: 'faq', title: '11. Frequently Asked Questions' }
  ];

  const comparisonData = [
    { feature: 'Client billing', standardWhiteLabel: 'You invoice manually', saasMode: 'Stripe handles billing automatically — recurring payments, renewals, cancellations' },
    { feature: 'Client onboarding', standardWhiteLabel: 'You create sub-accounts manually', saasMode: 'Client visits your sign-up page, pays, and their account provisions automatically' },
    { feature: 'Feature control', standardWhiteLabel: 'All features available', saasMode: 'Gate which features each pricing tier can access' },
    { feature: 'Snapshot deployment', standardWhiteLabel: 'You deploy manually per client', saasMode: 'Deploys automatically when client pays' },
    { feature: 'Pricing tiers', standardWhiteLabel: 'You set pricing externally', saasMode: 'Built inside GHL SaaS Configurator — up to 20 tiers' },
    { feature: 'Recurring revenue model', standardWhiteLabel: 'You invoice ad hoc or on retainer', saasMode: 'Stripe handles MRR automatically' }
  ];

  const pricingTiers = [
    { tier: 'Starter', price: '$97 to $147', include: 'Contacts, pipelines, calendar, basic automations, email', gate: 'Text-message automation, AI features, advanced reporting' },
    { tier: 'Growth', price: '$197 to $247', include: 'Everything in Starter plus SMS, reputation management, funnel builder', gate: 'AI voice features, white-label mobile app, API access' },
    { tier: 'Pro', price: '$297 to $497', include: 'Everything in Growth plus AI voice, advanced automations, full reporting', gate: 'Nothing, full access' }
  ];

  const marginData = [
    { clients: 3, price: '$197', revenue: '$591', ghlCost: '$497', netMargin: '$94 (break-even)', annualised: '$1,128' },
    { clients: 5, price: '$197', revenue: '$985', ghlCost: '$497', netMargin: '$488', annualised: '$5,856' },
    { clients: 10, price: '$197', revenue: '$1,970', ghlCost: '$497', netMargin: '$1,473', annualised: '$17,676' },
    { clients: 20, price: '$197', revenue: '$3,940', ghlCost: '$497', netMargin: '$3,443', annualised: '$41,316' },
    { clients: 50, price: '$197', revenue: '$9,850', ghlCost: '$497', netMargin: '$9,353', annualised: '$112,236' }
  ];

  const troubleshootingIssues = [
    { issue: 'The SaaS Mode settings will not appear after I upgraded', fix: 'This is almost always a short delay while GoHighLevel\'s system registers your new Agency Pro plan. Confirm your billing area truly shows Agency Pro, refresh and reopen the dashboard, and give it a little time. If it still has not appeared after a while, contact GoHighLevel support, the plan flag has not switched over on their end.' },
    { issue: 'A new client got a blank or broken account', fix: 'This means no snapshot was attached to that plan, or the snapshot itself was incomplete. Attach a fully tested snapshot to every plan, then make one test purchase to confirm it copies in correctly. Any clients already affected will need the snapshot added to their account manually.' },
    { issue: 'My client emails are arriving from a gohighlevel.com address', fix: 'Your sending email address is not verified yet. Complete the SPF, DKIM, and DMARC verification in your email settings (from Step 8) and allow up to 24 hours for it to take effect before testing again.' },
    { issue: 'A client cancelled but still has access', fix: 'Your Step 9 switch-off is either missing or not firing. Confirm the workflow is triggered by the Stripe cancellation signal, then test it by cancelling a test subscription and checking the account switches off within 24 hours.' },
    { issue: 'Payments are failing at checkout', fix: 'Confirm Stripe is connected in live mode (not test mode) and that your Stripe account has finished verification for accepting payments. Both a test-mode connection and an unverified Stripe account will block real client payments.' }
  ];

  const limitations = [
    'Stripe only. SaaS Mode billing works with Stripe and nothing else. PayPal and other processors cannot run your monthly SaaS billing.',
    'Agency Pro required. There is no way around the $497/month plan, the cheaper plans simply do not include SaaS Mode.',
    'No automatic switch-off built in. As covered in Step 9, cancellations do not shut clients off automatically, you have to build that yourself.',
    'Your snapshot quality is on you. SaaS Mode copies whatever snapshot you attach without checking it. A broken snapshot means broken client accounts, automatically.',
    'Markup changes affect existing clients. Changing your rebilling rates later changes billing for clients already signed up, so set them carefully upfront.'
  ];

  const advancedTips = [
    'Use a different snapshot per industry. If you serve dentists and gyms, a tailored template for each makes every client\'s first login feel custom-built for them.',
    'Use trials, but only with onboarding. A 7 to 14 day free trial can lift sign-ups, but only if you also send a welcome sequence, trial users who see an empty dashboard rarely convert.',
    'Keep the expensive AI features on your top plan only. AI voice and chat features cost real money to run, so reserving them for your Pro plan protects your profit and gives clients a reason to upgrade.',
    'Have your cancellation switch-off ask why. Extend the Step 9 workflow to record the cancellation reason, over time this tells you exactly why clients leave, so you can fix it.',
    'Check Stripe against GoHighLevel monthly. Once a month, compare who is paying in Stripe against who has an active account, to catch anyone who should have been switched off but was not.'
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
          <span className="text-[#1A2236] font-medium">GoHighLevel SaaS Mode Setup: Step-by-Step Guide for Beginners</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS Mode Setup</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Agency Pro</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">White Label SaaS</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel SaaS Mode Setup:<br />
            <span className="text-[#F8D000]">The Complete Beginner-Friendly 2026 Guide</span>
          </h1>

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
              <div className="text-xs text-white/50">GoHighLevel specialists, 200+ builds delivered · Updated July 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel SaaS Mode lets you take the GoHighLevel software, put your own brand on it, and sell it to your clients as if it were your own product, with the payments, sign-ups, and account creation all happening automatically. In plain terms, it turns your marketing agency into a software company without you writing any code.
          </p>
          <p className="text-sm text-white/50 leading-relaxed">
            At <strong className="text-white/80">GHL Scale Up</strong> (ghlscaleup.com), we set this up for agencies every week, and we wrote this guide for one specific person: the founder who is not technical, who has heard SaaS Mode is complicated, and who wants each step spelled out clearly with no jargon left unexplained. We will not assume you already know what a 'webhook' or a 'snapshot' or 'rebilling' is. Every time one of those words comes up, we stop and explain it in one plain sentence before moving on. By the end, you will understand not just which buttons to click, but why each step exists.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* Direct Answer / BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel SaaS Mode setup takes about 2 to 4 hours once you have four things ready.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                The four things are: the Agency Pro plan (the $497/month version of GoHighLevel, the only one that unlocks SaaS Mode), a Stripe account (the service that collects card payments from your clients), a white-label domain (your own web address where clients log in), and a tested snapshot (a ready-made template of a client account). The setup itself is 10 steps: turn on Agency Pro, connect Stripe, create your pricing plans, choose which features each plan unlocks, set your usage markup, attach your snapshot, brand your sign-up page, set up your sending email address, build an automatic "switch-off" for cancelled clients, and run one full test purchase before you go live. <strong className="text-[#DC3545]">The step almost everyone forgets is the automatic switch-off for cancellations, so we flag it clearly below.</strong>
              </p>
            </div>

            {/* What This Guide Covers */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What This Guide Covers</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  '1. What Is GoHighLevel SaaS Mode, in Plain English?',
                  '2. What Do You Need Before You Start? (The 4 Prerequisites, Explained)',
                  '3. How to Set Up GoHighLevel SaaS Mode: All 10 Steps in Detail',
                  '4. The Go-Live Checklist Before You Share Your Sign-Up Link',
                  '5. How to Structure Your GoHighLevel SaaS Mode Pricing Plans',
                  '6. How Much Money Can You Make? (Margin at Different Client Counts)',
                  '7. Troubleshooting: Fixing the Most Common Problems',
                  '8. The Limitations of GoHighLevel SaaS Mode You Should Know',
                  '9. Advanced Tips Most Agencies Miss',
                  '10. Who GoHighLevel SaaS Mode Is Actually For',
                  '11. Frequently Asked Questions'
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

            {/* Section 1: What Is SaaS Mode */}
            <h2 id="what-is-saas-mode" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is GoHighLevel SaaS Mode, in Plain English?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Imagine GoHighLevel is a car factory. Normally, GoHighLevel sells cars (software accounts) directly and everyone knows the cars are theirs. GoHighLevel SaaS Mode is like being handed the keys to the whole factory, so you can put your own logo on the cars, set your own prices, and sell them as your brand. Your customers think they bought a car from you. They never see GoHighLevel's name at all.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              More precisely, GoHighLevel SaaS Mode is a feature included in the Agency Pro plan that does four things automatically: it lets clients sign up and pay you through a branded page, it charges their card every month through Stripe, it instantly creates a ready-to-use account for them the moment they pay, and it controls which features each client gets based on how much they pay.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The question this usually raises</strong> is how this is different from just 'white labelling' GoHighLevel. White labelling only changes the appearance, your logo and colours on the dashboard. You would still have to manually create each client's account and manually send them an invoice. SaaS Mode adds the automatic engine on top: the billing, the sign-up, and the instant account creation all happen without you lifting a finger. White label is the paint job. SaaS Mode is the self-driving factory.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Standard White Label (Unlimited $297/mo)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">SaaS Mode (Agency Pro $497/mo)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.standardWhiteLabel}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.saasMode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE BUSINESS MODEL EXPLAINED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For the money side, margins, pricing psychology, and how the business actually makes profit: 
                <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline ml-1">White Label SaaS: The Complete 2026 Guide →</Link>
              </p>
            </div>

            {/* Section 2: Prerequisites - UPDATED WITH PROPER STRUCTURE */}
            <h2 id="prerequisites" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Do You Need Before You Start? (The 4 Prerequisites, Explained)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Do not open the SaaS Mode settings until all four of these are ready. The most common reason a setup stalls halfway is that someone starts before one of these four is in place, then gets stuck. Here is each one, what it actually is, and how to get it ready.
            </p>

            {/* Prerequisite 1 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">Prerequisite 1: The Agency Pro plan ($497/month)</h3>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">What it is:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-2">GoHighLevel comes in three price levels. Starter ($97/month) and Unlimited ($297/month) do not include SaaS Mode at all. Only the top level, Agency Pro at $497/month, unlocks the SaaS Mode engine. Think of it as the only ticket that gets you into the SaaS Mode room.</p>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">How to check and get it:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-2">Log into GoHighLevel, look for your plan under the billing area of your agency settings, and confirm it says Agency Pro or SaaS Pro. If you are on Starter or Unlimited, you upgrade there.</p>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">What to expect after upgrading:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed">In most cases the SaaS Mode settings appear right away. Occasionally there is a short delay while GoHighLevel's system catches up with your new plan. If you upgrade and do not see SaaS Mode within a little while, that delay is usually the reason, and we cover the fix in the troubleshooting section.</p>
                </div>
              </div>
            </div>

            {/* Prerequisite 2 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">Prerequisite 2: A Stripe account, connected and 'live'</h3>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">What Stripe is:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-2">Stripe is a payment company that safely handles credit card charges over the internet. When your client enters their card to subscribe, Stripe is the service that actually collects the money and deposits it into your bank account. GoHighLevel SaaS Mode uses Stripe and only Stripe for this, PayPal and other options are not supported for the monthly SaaS billing.</p>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">What 'live mode' means:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-2">Stripe has two modes. 'Test mode' is a practice sandbox that uses fake cards and moves no real money. 'Live mode' is the real thing. Your Stripe account must be in live mode, which means you have finished Stripe's identity and bank-account verification. If your account is still in test mode, real clients cannot actually pay you.</p>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">How to get it ready:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed">Create a free account at stripe.com if you do not have one, complete their verification (they ask for your business details and a bank account for payouts), and confirm the account shows as active. You do not connect it to GoHighLevel yet, that happens in Step 2 of the setup. You just need it existing and verified first.</p>
                </div>
              </div>
            </div>

            {/* Prerequisite 3 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">Prerequisite 3: A white-label domain (your own login web address)</h3>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">What it is:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-2">A white-label domain is simply the web address your clients will use to log in, something like app.youragency.com instead of a GoHighLevel address. It is what makes the platform feel like yours.</p>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">What is involved:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed">You take a web address you own and point it at GoHighLevel using a small setting called a DNS record. DNS is just the internet's address book, it tells web browsers where to send someone who types your address. After you add that record, there is a waiting period (anywhere from a few minutes to about a day) while the internet updates its address book. Because of that wait, set this up the day before you plan to launch, not the same hour.</p>
                </div>
              </div>
            </div>

            {/* Prerequisite 4 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">Prerequisite 4: A tested snapshot (a ready-made client account template)</h3>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">What a snapshot is:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-2">A snapshot is a saved template of a complete client account, all the pipelines, automations, forms, calendars, and workflows already built. When a new client pays, GoHighLevel copies this template into their new account instantly, so they log in to a fully working system instead of a blank screen. Think of it as the show-home that every new house is built to match.</p>
                  
                  <p className="text-sm font-semibold text-[#1A2236] mt-3 mb-1">Why it must be tested first:</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed">With SaaS Mode, the moment a client pays, they immediately receive whatever is in your snapshot. If the snapshot is half-built or broken, every new client's first experience is a broken account, and a client who logs in on day one to an empty or broken dashboard is the single most likely client to cancel within the first week. So you build your snapshot in a spare test account, click through every workflow and form to confirm it all works, and only then use it in SaaS Mode.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                <strong className="text-[#0E9BF0]">PLAN COMPARISON:</strong> <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                <strong className="text-[#0E9BF0]">FULL DOMAIN WALKTHROUGH (PLAIN-LANGUAGE):</strong> The complete beginner-friendly domain, DNS, and padlock setup is covered step by step here: 
                <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label: Setup, Pricing & How It Works →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#0E9BF0]">HOW TO BUILD A SNAPSHOT:</strong> <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Rather have all four prerequisites handled for you?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up sets up the whole thing, plan, Stripe, domain, snapshot, and the full SaaS Mode engine, in 5 to 7 business days.
              </p>
              <Link href="/services/saas-setup" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-5 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all text-sm">
                See the SaaS Setup Service →
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 3: Setup Steps - UPDATED WITH PROPER STRUCTURE */}
            <h2 id="setup-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Set Up GoHighLevel SaaS Mode: All 10 Steps in Detail
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once your four prerequisites are ready, the setup itself takes about 2 to 4 hours. We will go through all ten steps slowly. For each one, you will get what to do, and just as importantly, why it matters, so you are never clicking blindly.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">A QUICK ORIENTATION BEFORE STEP 1</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GoHighLevel has two 'views': the Agency view and the Sub-account view. The Agency view is your master control panel, the whole business. The Sub-account view is one single client's workspace. Almost everything in this guide happens in the Agency view. You switch between them using the menu in the top corner. If a setting mentioned below is not where you expect, the usual reason is that you are in a sub-account instead of the agency view, so check that first.
              </p>
            </div>

            {/* Step 1 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <h3 className="text-base font-bold text-[#1A2236]">Confirm Agency Pro and open the SaaS Mode settings</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11">Start in your Agency view. Go into your agency settings and find the billing area, and confirm your plan says Agency Pro (the $497/month plan). Then look in the left-hand menu for the SaaS Mode or SaaS Configurator option and open it. 'Configurator' is just GoHighLevel's word for the control panel where you set up all your plans and pricing, it is the dashboard you will spend the next hour in.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2">If you do not see the SaaS Mode option at all: your plan upgrade probably has not finished syncing. Confirm the billing area really shows Agency Pro, refresh the page, and if it still is missing after a short wait, that is a known delay covered in troubleshooting, not something you did wrong.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <h3 className="text-base font-bold text-[#1A2236]">Connect your Stripe account</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11">Inside the SaaS settings, look for a button labelled something like Connect Stripe and click it. You will be taken to Stripe's own website to log in and approve the connection, this is normal and safe, it is Stripe confirming that you give GoHighLevel permission to create charges on your behalf. Log in with your live Stripe account (not a test one) and approve.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">Why this step matters:</strong> this connection is what lets money actually flow. Once connected, Stripe automatically charges each client every month, retries the payment if a card fails the first time, and records every cancellation. You are essentially hiring Stripe as your automatic billing department.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">One cost to know about:</strong> Stripe keeps a small fee on every payment, commonly around 2.9% plus 30 cents per successful charge. So on a $200 plan, you receive roughly $194 and Stripe keeps about $6. Keep this in mind when you set your prices, it is a normal cost of accepting cards.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <h3 className="text-base font-bold text-[#1A2236]">Create your pricing plans</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11">Now you build the actual plans clients will choose from. Look for an Add Plan or Create Plan button. For each plan you create, you fill in a few fields:</p>
              <ul className="text-sm text-[#5C6880] leading-relaxed ml-14 list-disc list-inside space-y-1 mt-2">
                <li><strong className="text-[#1A2236]">Plan name</strong> (for example 'Starter', 'Growth', 'Pro'), this is what clients see.</li>
                <li><strong className="text-[#1A2236]">Monthly price</strong> (for example $97, $197, $297).</li>
                <li><strong className="text-[#1A2236]">Optional yearly price</strong> if you want to offer a discount for paying a year upfront.</li>
                <li><strong className="text-[#1A2236]">Free trial length</strong> if any, you can set anywhere from 0 to 30 days, meaning the client is not charged until the trial ends.</li>
                <li><strong className="text-[#1A2236]">Included usage credits</strong> if you want each plan to come with a bucket of, say, text messages or emails included.</li>
              </ul>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2">GoHighLevel lets you create up to 20 different plans, though most successful operators use just 2 or 3 (we cover exactly how to price them in Section 5). A helpful detail: each plan you create here is automatically set up inside Stripe for you, so you do not have to go into Stripe and build products manually. Create all your plans before moving on.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <h3 className="text-base font-bold text-[#1A2236]">Choose which features each plan unlocks</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11">This is where you decide what each price level actually gets. GoHighLevel gives you a long list of features with on/off switches for each plan. For example, your cheapest plan might have the basics switched on (contacts, calendar, simple automations) while your most expensive plan has everything switched on (including the AI tools and advanced reporting).</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">Why this matters, and the common mistake:</strong> this feature-gating is what makes people upgrade to higher plans, if the cheap plan already has everything, no one pays more. Go through the switches carefully for each plan. The mistake we see most often is accidentally leaving an expensive feature switched on for the cheapest plan, which means you are giving away your premium tools for the budget price.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <h3 className="text-base font-bold text-[#1A2236]">Set your usage markup (called 'rebilling')</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11"><strong className="text-[#1A2236]">What rebilling is:</strong> some things inside GoHighLevel cost a tiny amount each time they are used, for example, sending a text message or an email costs a fraction of a cent. GoHighLevel charges you those tiny amounts. 'Rebilling' is the feature that lets you charge your clients a little more than it costs you, and keep the difference. It is like a shop buying an item wholesale and selling it for a bit more at retail.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">A concrete example:</strong> GoHighLevel might charge you about four-fifths of a cent to send a text. You set your clients' price at, say, one and a half cents per text. The roughly three-quarters-of-a-cent difference is your profit, and it adds up quickly across every message every client sends. You set these markup rates in the rebilling area of your agency settings.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">Do this before clients arrive:</strong> decide your markup rates now, because changing them later affects clients who are already signed up, which is messier than setting them correctly from the start.</p>
            </div>

            {/* Step 6 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                <h3 className="text-base font-bold text-[#1A2236]">Attach your snapshot to each plan</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11">Remember the snapshot from Prerequisite 4, your ready-made client-account template? Now you connect it. Inside each plan's settings, there is a place to choose a snapshot from a drop-down list. Pick your tested snapshot for each plan.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">What this actually does:</strong> from now on, the instant a client pays for that plan, GoHighLevel copies your snapshot into their brand-new account automatically. They log in to a complete, working system, not a blank page. If you serve different industries, you can attach a different snapshot to different plans, for example a 'dentist' template on one plan and a 'gym' template on another. If you have just one template, attach the same one to every plan.</p>
            </div>

            {/* Step 7 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">7</div>
                <h3 className="text-base font-bold text-[#1A2236]">Brand your sign-up page</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11">GoHighLevel automatically creates a ready-made web page where prospects see your plans and enter their card to subscribe, you do not have to build it from scratch. Find it in the SaaS settings (often labelled Sign-Up Page) and customise the wording: the page title, the description under each plan, and any promotional text. Confirm your logo and brand colours are showing (those come from your white-label settings).</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">The one thing to save from this step:</strong> the web address (URL) of this sign-up page. This link is what you put on your website, share in emails, and use in ads. When someone visits it, picks a plan, and pays, every other step you have set up fires automatically. This link is, quite literally, your storefront.</p>
            </div>

            {/* Step 8 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">8</div>
                <h3 className="text-base font-bold text-[#1A2236]">Set up your sending email address</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11">Your platform will automatically send emails to clients, welcome messages, password resets, billing receipts. By default these could go out looking like they come from GoHighLevel, which instantly gives away the secret. You want them coming from your brand.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">What is involved, in plain terms:</strong> in your agency email settings, you set your own sending address (like hello@youragency.com) and confirm it is 'verified'. Verification is done using three small technical settings with the initials SPF, DKIM, and DMARC. You do not need to understand the acronyms, all three are simply the email world's way of proving you are the real owner of that address, so your emails do not get flagged as spam. Your domain provider or a quick support request handles adding them. GoHighLevel shows a green check or 'verified' status once they are in place correctly.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">Why not skip it:</strong> a client who gets a billing receipt from a gohighlevel.com address instead of yours immediately realises the software is not really yours, which undermines everything else you have set up.</p>
            </div>

            {/* Step 9 - Important */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#DC3545] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">9</div>
                <h3 className="text-base font-bold text-[#1A2236]">Build the automatic 'switch-off' for cancelled clients <span className="text-[#DC3545]">(the step everyone forgets)</span></h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11"><strong className="text-[#1A2236]">The problem this solves:</strong> SaaS Mode automatically switches a client ON when they pay, but it does NOT automatically switch them OFF when they cancel or their card stops working. Without a switch-off, a client who cancels keeps full access to your platform for free, indefinitely. That is both lost money and a data-security issue.</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">What you build, in plain terms:</strong> you create a small automatic rule (GoHighLevel calls these 'workflows') that listens for a signal from Stripe saying 'this client cancelled', and then shuts off that client's access. That signal from Stripe is called a 'webhook', which is just a fancy word for an automatic notification one system sends another when something happens. So the plain-English version is: 'when Stripe says a client cancelled, wait 24 hours, then switch their account off, and alert me.'</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">How to set it up:</strong> in the automation/workflow area, create a new workflow, set its trigger to the Stripe cancellation event, and set its action to suspend the client's sub-account (with a short delay and a notification to yourself if you like). Then test it by cancelling a test subscription and confirming the account actually switches off.</p>
              <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 mt-3 ml-11">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                  <span className="text-sm font-bold text-[#F8D000]">THIS IS THE STEP AGENCIES SKIP</span>
                </div>
                <p className="text-sm text-[#1A2236] leading-relaxed">Nearly every SaaS Mode guide covers how clients sign up and ignores what happens when they leave. Skipping Step 9 means a client who cancels at the end of month three still has full free access at the start of month four, and every month after. It takes about 20 minutes to build this switch-off, and it prevents an open-ended leak of both access and revenue. <strong>Do not skip it.</strong></p>
              </div>
            </div>

            {/* Step 10 */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">10</div>
                <h3 className="text-base font-bold text-[#1A2236]">Run one full test purchase before going live</h3>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11">Before a single real prospect sees your sign-up link, you buy your own product once, as a test. Create a temporary cheap plan or use a $1 test amount, go to your sign-up page in a private browser window, pick the plan, and pay with a real card (you can refund yourself after).</p>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2">Then confirm all six of these actually happened:</p>
              <ul className="text-sm text-[#5C6880] leading-relaxed ml-14 list-decimal list-inside space-y-1 mt-2">
                <li>A brand-new client account was created automatically.</li>
                <li>Your snapshot template was copied into it (the account is not blank).</li>
                <li>The welcome email arrived, and it came from your brand, not GoHighLevel.</li>
                <li>The right features are switched on for the plan you bought.</li>
                <li>The payment shows up in your Stripe dashboard.</li>
                <li>When you then cancel the test subscription, your Step 9 switch-off actually turns the account off.</li>
              </ul>
              <p className="text-sm text-[#5C6880] leading-relaxed ml-11 mt-2"><strong className="text-[#1A2236]">If any one of those six did not happen, fix it now.</strong> Finding a broken step yourself during a test costs you five minutes. Finding it because a paying client complained costs you that client.</p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Skip the trial-and-error and launch faster.</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up builds the full 10-step GoHighLevel SaaS Mode setup and runs the test for you. Live in 5 to 7 business days.
              </p>
              <Link href="/services/saas-setup" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-5 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all text-sm">
                See the SaaS Setup Service →
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 4: Go-Live Checklist */}
            <h2 id="go-live-checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. The Go-Live Checklist Before You Share Your Sign-Up Link
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use this as the final gate before your sign-up link goes public. Every box should be genuinely confirmed, not assumed.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-6">
              <ul className="space-y-2 text-sm text-[#1A2236]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>Your plan shows Agency Pro and the SaaS settings are visible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>Stripe is connected in live mode and a real test payment has gone through.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>All your pricing plans are created.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>Feature switches are reviewed one by one for every plan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>Your usage markup (rebilling) is set before any client sends messages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>A tested snapshot is attached to every plan and confirmed to copy in on payment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>Your sign-up page is branded and its link is saved.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>Your sending email address is verified (SPF, DKIM, DMARC all showing as done).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>Your cancellation switch-off (Step 9) is built and tested.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>Your full test purchase passed all six checks from Step 10.</span>
                </li>
              </ul>
            </div>

            {/* Section 5: Pricing Tiers */}
            <h2 id="pricing-tiers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How to Structure Your GoHighLevel SaaS Mode Pricing Plans
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most successful GoHighLevel SaaS Mode operators use just 2 or 3 plans. Too many choices overwhelms buyers. Here is the structure that converts best across GHL Scale Up builds.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Suggested price/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to include</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to hold back for higher plans</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.tier}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.price}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.include}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.gate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong>Sell the result, not the feature.</strong> 'Save 10 hours a week on follow-up' persuades better than 'includes automation'.</li>
                <li><strong>Make the middle plan the obvious choice.</strong> Most revenue comes from the middle plan. Price it around twice the Starter plan so it feels like the sensible pick.</li>
                <li><strong>Offer a yearly option at 15 to 20% off.</strong> Clients who pay yearly cancel far less often than monthly ones.</li>
                <li><strong>Never price below $97/month.</strong> Clients paying less than that tend to treat the software as disposable and cancel quickly.</li>
              </ul>
            </div>

            {/* Section 6: Margin Calculator */}
            <h2 id="margin-calculator" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Much Money Can You Make? (Margin at Different Client Counts)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here is the key idea: your cost to GoHighLevel stays fixed at $497/month no matter how many clients you have. So every new client past your break-even point is almost pure profit. That is why the numbers get better and better as you grow.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Clients</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your price/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Money in</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Your profit/mo</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Per year</th>
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">AND THAT IS BEFORE USAGE MARKUP</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The table above is just subscription money. Your rebilling markup from Step 5 adds more on top. If 20 clients each send 500 texts a month and you make about three-quarters of a cent per text, that is roughly another $71/month, and it grows as your client base grows. This is the extra layer most beginners forget to count.
              </p>
            </div>

            {/* Section 7: Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Troubleshooting: Fixing the Most Common GoHighLevel SaaS Mode Problems
            </h2>

            <div className="space-y-4 mb-6">
              {troubleshootingIssues.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.issue}</p>
                      <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 8: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. The Limitations of GoHighLevel SaaS Mode You Should Know
            </h2>

            <div className="space-y-3 mb-6">
              {limitations.map((item, idx) => (
                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1A2236] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 9: Advanced Tips */}
            <h2 id="advanced-tips" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. Advanced Tips Most Agencies Miss
            </h2>

            <div className="space-y-3 mb-6">
              {advancedTips.map((item, idx) => (
                <div key={idx} className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1A2236] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 10: Who It's For */}
            <h2 id="who-its-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. Who GoHighLevel SaaS Mode Is Actually For
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> SaaS Mode is right for you if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You already have a handful of clients on GoHighLevel and manually billing and setting each one up is becoming a chore.</li>
                  <li>You want clients to sign up and pay on their own, without you on a call each time.</li>
                  <li>You have a tested snapshot that represents a genuinely complete client setup.</li>
                  <li>You want income that grows without adding an hour of your time per client.</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#DC3545] mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> SaaS Mode is not right for you yet if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You are brand new to GoHighLevel with fewer than about 3 clients, start on the $297 Unlimited plan first and grow into Agency Pro.</li>
                  <li>You have not built and tested a snapshot, without one, every new client gets a blank account.</li>
                  <li>All your clients are fully done-for-you retainer clients, SaaS Mode is designed for self-serve software customers.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE SET IT ALL UP FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                <strong>GHL Scale Up</strong> configures the entire GoHighLevel SaaS Mode setup, Stripe, plans, feature gating, snapshot, sign-up page, cancellation switch-off, and the full test, so you can skip the learning curve. Most setups go live in 5 to 7 business days. See <strong>real GoHighLevel results and case studies</strong> at <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">ghlscaleup.com/case-studies</Link>.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-5 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all text-sm">
                Book a Free Strategy Call →
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 11: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              11. Frequently Asked Questions About GoHighLevel SaaS Mode Setup
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
                  <strong>GHL Scale Up</strong> is the #1 GoHighLevel expert agency, founded by Aryan Trivedi and based in India, serving businesses across 6 countries with 200+ builds delivered and 5+ years of GoHighLevel experience, including GoHighLevel SaaS Mode setups for agencies across real estate, healthcare, home services, and marketing. All technical steps in this guide were verified against GoHighLevel's platform behaviour as of July 2026.
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
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">White Label SaaS: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-white-label" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label: Setup, Pricing & How It Works →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: The Complete 2026 Guide →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to launch your GoHighLevel SaaS business?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds the whole SaaS Mode setup and you launch in 5 to 7 days, Stripe, plans, snapshot, sign-up page, and cancellation switch-off, all tested before handover.
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
            {/* Table of Contents */}
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
                5+ years GHL experience · 200+ systems built globally including SaaS Mode setups for agencies across real estate, healthcare, home services, and marketing. All technical steps verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2">
              <div className="text-sm font-bold text-white mb-2">Ready to Launch SaaS Mode?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We set up complete GHL SaaS Mode configurations. 5 to 7 business days.</p>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
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