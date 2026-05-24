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
  Star,
  AlertTriangle,
  Clock,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function ClickFunnelsToGHLMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'what-transfers',
        'migration-steps',
        'how-long',
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
      q: "Can GoHighLevel import ClickFunnels funnels automatically?",
      a: "Partially. GoHighLevel has a URL import tool that clones the visual design of a ClickFunnels page copy, images, layout, and buttons by entering the live page URL. This saves significant time on page rebuilding. What it does not import: automations, email sequences, payment integrations, domain settings, tracking pixels, or any backend logic. These must all be rebuilt manually inside GHL."
    },
    {
      q: "How long does a ClickFunnels to GoHighLevel migration take?",
      a: "A simple migration with 1–3 funnels and basic email sequences takes 1–2 weeks. A standard business with 3–8 funnels and 3–10 sequences takes 2–3 weeks. A complex setup with membership areas, 10+ funnels, and advanced automation takes 3–6 weeks. The URL import handles funnel pages quickly the automation and integration rebuild is what drives the timeline."
    },
    {
      q: "What breaks when migrating from ClickFunnels to GoHighLevel?",
      a: "The main things that break: email and SMS follow-up sequences (must be rebuilt as GHL workflows), Stripe payment connections (must be reconnected in GHL), domain settings (DNS must be updated to point to GHL), Facebook Pixel and conversion tracking (tracking codes must be re-added), membership area content (must be re-uploaded), and ClickFunnels affiliate tracking (must be rebuilt in GHL's affiliate manager)."
    },
    {
      q: "Should I cancel ClickFunnels before finishing the migration?",
      a: "No. Keep ClickFunnels active until all funnels are rebuilt and tested in GHL, all sequences are live and confirmed, domain DNS has been updated, and you have run GHL in parallel for at least 1–2 weeks. Unlike HubSpot, ClickFunnels does not offer a data export grace period after cancellation your funnels simply go offline. Cancel only after live traffic is fully running through GHL."
    },
    {
      q: "Is GoHighLevel better than ClickFunnels for agencies?",
      a: "For agencies managing multiple client accounts, yes. ClickFunnels has no native sub-account architecture each client needs a separate ClickFunnels account billed separately. GoHighLevel's sub-account model lets you manage unlimited client accounts from one agency dashboard at a flat $297/month. GHL also includes native CRM, SMS, AI features, and booking calendars that ClickFunnels does not. For solo businesses that only need funnels and simple email, ClickFunnels 2.0 is a simpler starting point."
    },
    {
      q: "Can GHL Scaleup handle our ClickFunnels migration?",
      a: "Yes. GHL Scaleup manages complete ClickFunnels to GoHighLevel migrations including funnel step mapping, URL import and design cleanup, follow-up sequence rebuild, Stripe reconnection, domain cutover with 301 redirects, and conversion tracking setup. We have completed 200+ GHL builds and migrations. Book a free migration assessment at ghlscaleup.com/contact."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why Businesses Are Migrating from ClickFunnels to GoHighLevel in 2026' },
    { id: 'what-transfers', title: '2. What Transfers from ClickFunnels and What Breaks' },
    { id: 'migration-steps', title: '3. How to Migrate from ClickFunnels to GoHighLevel (Step-by-Step)' },
    { id: 'how-long', title: '4. How Long Does a ClickFunnels to GoHighLevel Migration Take?' },
    { id: 'common-mistakes', title: '5. Common Mistakes That Cause ClickFunnels Migrations to Fail' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const comparisonData = [
    { item: 'Funnel and landing page builder', clickfunnels: '✓', ghl: 'GHL Funnel Builder unlimited funnels on every plan' },
    { item: 'Basic email follow-up sequences', clickfunnels: '✓', ghl: 'Full email + SMS automation with 100+ action types' },
    { item: 'Order forms and basic checkout', clickfunnels: '✓', ghl: 'GHL Order Forms + Stripe integration' },
    { item: 'Basic membership area', clickfunnels: '✓', ghl: 'Full course and membership platform' },
    { item: 'Native CRM', clickfunnels: '✗', ghl: 'Full CRM with unlimited contacts and pipelines' },
    { item: 'Native SMS', clickfunnels: '✗', ghl: 'Native SMS with workflow triggers' },
    { item: 'Booking calendar', clickfunnels: '✗', ghl: 'Full booking calendar with automated reminders' },
    { item: 'AI features (Voice AI, Conversation AI)', clickfunnels: '✗', ghl: 'AI Voice Agent, Conversation AI, Reviews AI' },
  ];

  const transferData = [
    { asset: 'Funnel pages (design + copy)', action: 'GHL URL import tool clones the page automatically', required: 'Review and adjust design after import' },
    { asset: 'Funnel step structure', action: 'Recreate step sequence in GHL', required: 'Map each CF step to a GHL funnel step manually' },
    { asset: 'Contacts and leads', action: 'Export as CSV from CF, import into GHL', required: 'Clean CSV first, map fields during import' },
    { asset: 'Email follow-up sequences', action: 'Does NOT transfer', required: 'Rebuild as GHL email workflows one sequence at a time' },
    { asset: 'SMS automations', action: 'Does NOT transfer', required: 'Rebuild in GHL workflow builder with SMS actions' },
    { asset: 'Order forms and checkout', action: 'Does NOT transfer', required: 'Rebuild in GHL order form builder, reconnect Stripe' },
    { asset: 'Stripe payment integrations', action: 'Does NOT transfer', required: 'Reconnect Stripe to GHL separately' },
    { asset: 'Domain settings', action: 'Does NOT transfer', required: 'Point domain DNS to GHL, update all funnel links' },
    { asset: 'Facebook Pixel / GTM / tracking', action: 'Does NOT transfer', required: 'Re-add tracking codes to each GHL funnel page' },
    { asset: 'Membership area and course content', action: 'Partial content must be re-uploaded', required: 'Rebuild membership structure in GHL, re-upload content' },
    { asset: 'SMS conversation history', action: 'Does NOT transfer', required: 'GHL cannot import SMS history from ClickFunnels' },
    { asset: 'ClickFunnels affiliate system', action: 'Does NOT transfer', required: 'GHL has its own affiliate manager set up separately' },
  ];

  const timelineData = [
    { type: 'Simple basic funnel business', funnels: '1–3 funnels', sequences: '1–3 sequences', timeline: '1–2 weeks' },
    { type: 'Standard established business', funnels: '3–8 funnels', sequences: '3–10 sequences', timeline: '2–3 weeks' },
    { type: 'Complex course or membership site', funnels: '8–15+ funnels', sequences: '10+ sequences, membership', timeline: '3–6 weeks' },
    { type: 'Agency migrating multiple clients', funnels: 'Multiple accounts', sequences: 'Per client complexity', timeline: '4–8 weeks' },
  ];

  const mistakesList = [
    { mistake: 'Assuming the URL import tool migrates everything', fix: 'The import tool clones page design only. Buttons still link to ClickFunnels, Stripe is missing, email sequences never fire. The import tool is the starting point, not the finish line.' },
    { mistake: 'Changing funnel copy and design during migration', fix: 'Migrate exactly. Optimise after. Changing design during migration introduces variables that make performance differences impossible to diagnose.' },
    { mistake: 'Not setting up 301 redirects from old ClickFunnels URLs', fix: 'Set up 301 redirects from every old URL to the equivalent GHL funnel URL before cancelling. Preserves link equity and prevents dead links.' },
    { mistake: 'Going live without testing the full purchase flow end-to-end', fix: 'Run a real end-to-end test with a $1 test product. Confirm thank-you page fires, Pixel records conversion, email triggers, and contact appears in CRM.' },
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
          <span className="text-[#1A2236] font-medium">ClickFunnels to GoHighLevel Migration 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">ClickFunnels to GHL</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Funnel Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Migrate from ClickFunnels to GoHighLevel:<br />
            <span className="text-[#F8D000]">What Breaks & How to Fix It (2026)</span>
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Builds Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            If you're running a business on ClickFunnels and thinking about moving to GoHighLevel, 
            you've probably heard one version of this story: someone switched, lost their funnels, 
            broke their automations, and spent two months cleaning it up. This guide is the version 
            that prevents that. We'll cover exactly what transfers, what breaks, and how to move 
            cleanly without disrupting a live business.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel has a built-in URL import tool that clones your ClickFunnels pages automatically this is the fastest part of the migration.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                What doesn't transfer: automations, follow-up email sequences, payment integrations, domain settings, Pixels, and SMS conversations. 
                These all need rebuilding in GHL. A straightforward ClickFunnels migration with 3–5 funnels and basic automations takes <strong className="text-[#0E9BF0]">1–3 weeks</strong>. 
                A complex setup with 10+ funnels, membership areas, and advanced sequences takes <strong className="text-[#0E9BF0]">3–6 weeks</strong>.
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

            {/* Section 1: Why Migrate */}
            <h2 id="why-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Businesses Are Migrating from ClickFunnels to GoHighLevel in 2026
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              ClickFunnels is a focused funnel builder and it does that job well. But most businesses running 
              ClickFunnels also pay separately for a CRM, an email marketing tool, an SMS platform, a booking calendar, 
              and a reputation management tool. <strong className="text-[#1A2236]">GoHighLevel replaces all of them, for $97–$297/month flat.</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The cost calculation is what usually starts the conversation. A typical ClickFunnels business paying 
              $297/month for ClickFunnels, $50/month for Mailchimp, $49/month for Calendly, and $99/month for a CRM is 
              paying $495/month or more for tools that don't connect cleanly. GHL Unlimited at $297/month covers all of it.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What ClickFunnels provides</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What GoHighLevel replaces it with</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.item} → {item.clickfunnels === '✗' ? <span className="text-[#DC3545]">Not available</span> : '✓'}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WORTH NOTING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                ClickFunnels 2.0 added CRM features and email marketing. The migration decision usually comes down to: 
                <strong className="text-[#1A2236]"> do you need native SMS, AI features, white-labelling, and agency sub-accounts?</strong> 
                If yes GHL wins. If you only need funnels and basic email evaluate carefully before switching.
              </p>
            </div>

            {/* Section 2: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Transfers from ClickFunnels to GoHighLevel and What Breaks?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most important thing to understand before starting: GHL's <strong className="text-[#0E9BF0]">URL import tool</strong> can clone your 
              ClickFunnels pages automatically but it captures the visual design only. It does not migrate the logic, 
              automation, or integrations behind those pages.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ClickFunnels Asset</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happens in GHL Migration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  {transferData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.asset}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.action}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.required}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">THE GOOD NEWS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The URL import tool is genuinely fast. You enter your live ClickFunnels page URL into GHL's funnel builder 
                and it clones every element copy, images, layout, buttons in under a minute. For agencies migrating 10+ funnels, 
                this saves 20–40 hours of manual page rebuilding.
              </p>
            </div>

            {/* Section 3: Migration Steps */}
            <h2 id="migration-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Migrate from ClickFunnels to GoHighLevel (Step-by-Step)
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Audit your ClickFunnels account before exporting anything</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">List every active funnel with its purpose, traffic, and integrations. Document every active email sequence and which funnels feed into them. This audit is your migration blueprint.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Export your contacts and leads</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In ClickFunnels, go to Contacts → Export and download your contact list as a CSV. Clean the CSV before importing: remove duplicates, standardise phone numbers. In GHL, go to Contacts → Import and map each column.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Import your funnels using the GHL URL import tool</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In your GHL sub-account, go to Sites → Funnels → New Funnel. Look for 'Import from URL' and paste the live ClickFunnels page URL. GHL fetches the page and clones all visual elements. Repeat for each funnel step.</p>
                <p className="text-sm text-[#0E9BF0] leading-relaxed ml-9 mt-1">→ The URL import tool works only on live, publicly accessible ClickFunnels pages.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Rebuild your email and SMS automations as GHL workflows</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">For each active ClickFunnels email sequence, recreate it as a GHL workflow. Set the trigger, add each email with the same timing, and use If/Else conditions for branching logic. Start with highest-revenue sequences first.</p>
                <p className="text-sm text-[#0E9BF0] leading-relaxed ml-9 mt-1">→ Need help with workflows? <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link></p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Reconnect payment integrations and tracking</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Connect Stripe to GHL. Rebuild order forms. Re-add Facebook Pixel and Google Analytics to each funnel page. Verify conversion events fire correctly on the thank-you page.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Run parallel, then do the domain cutover</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Keep ClickFunnels active. Send a portion of traffic to GHL staging URLs. Once confirmed working, update domain DNS to point to GHL. Set up 301 redirects from old ClickFunnels URLs to new GHL equivalents.</p>
              </div>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">DO NOT DO THIS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Do not cancel ClickFunnels before the domain cutover is complete and tested. If you cancel early, your live funnels go offline 
                immediately. ClickFunnels does not offer a grace period like HubSpot. Cancel only after all ads and links are pointed to GHL.
              </p>
            </div>

            {/* Section 4: How Long */}
            <h2 id="how-long" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Long Does a ClickFunnels to GoHighLevel Migration Take?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Setup Complexity</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Active Funnels</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Email Sequences</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Estimated Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.funnels}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.sequences}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHAT DRIVES TIMELINE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The URL import tool handles funnel page design quickly. <strong>The email and SMS follow-up sequence rebuild is what takes time</strong> 
             budget approximately 2–4 hours per complex sequence. Membership area content re-upload adds additional time.
              </p>
            </div>

            {/* Section 5: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Common Mistakes That Cause ClickFunnels Migrations to Fail
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
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE HANDLE THIS FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scaleup manages complete ClickFunnels to GoHighLevel migrations funnel step mapping, URL import and cleanup, 
                follow-up sequence rebuild, domain cutover, and conversion tracking reset.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free migration assessment at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                → See our full <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">ClickFunnels to GoHighLevel migration service →</Link>
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
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">ClickFunnels to GoHighLevel Migration Service →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Moving from ClickFunnels to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Do it once. Do it right. Funnel step mapping, follow-up sequence rebuild, Stripe reconnection, 
                  domain cutover, and conversion tracking all handled. Book a free migration assessment.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Assessment
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
                  <div className="text-xs text-white/50">GoHighLevel Migration & Setup Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built and migrated globally. All migration steps verified against 
                GoHighLevel's official documentation as of May 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="text-sm font-bold text-white mb-2">Need Help Migrating?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle complete ClickFunnels to GHL migrations. Fast and reliable.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
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