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
  Globe,
  FileText,
  CreditCard,
  Layers,
  AlertTriangle,
  Sparkles,
  Split,
  Zap as ZapIcon,
  Wand2,
  Layout,
  Smartphone,
  InfinityIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelFunnelBuilderClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'funnel-vs-website',
        'what-includes',
        'funnel-types',
        'build-funnel',
        'ab-testing',
        'ai-builder',
        'weaknesses',
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
      q: "Is GoHighLevel's funnel builder any good?",
      a: "GoHighLevel's funnel builder is genuinely capable for agencies and service businesses running lead generation. It includes unlimited funnels, a drag-and-drop visual editor, AI funnel generation, built-in A/B split testing, native Stripe payment processing, custom domains with automatic SSL, and direct integration with GHL's CRM and automation system. Its limitations are honest: the template library is smaller than ClickFunnels or Leadpages, the visual editor prioritises function over design fidelity, and page loading speed depends on how lean the build is. For agencies whose primary advantage is the automation and CRM layer behind the funnel, GHL's integration with the rest of the platform outweighs the design limitations."
    },
    {
      q: "Is the GoHighLevel funnel builder free?",
      a: "Yes, the funnel builder is included in all GoHighLevel plans at no additional cost. Every plan from Starter ($97/month) upward includes the funnel builder with unlimited funnels and funnel steps. There is no separate funnel builder fee and no per-funnel charge. The AI Funnel Builder feature is also included — you may want to verify current access details for the AI Funnel Builder in your specific plan, as AI features and their inclusion in base plans can change."
    },
    {
      q: "What is the difference between a funnel and a website in GoHighLevel?",
      a: "Both funnels and websites use the same drag-and-drop editor and live in the Sites section of GHL. The key differences: funnels are linear sequences with one goal per page, no navigation menu, and native A/B split testing. Websites are multi-page structures with navigation menus and are better suited for company homepages and evergreen content. A/B split testing is only available on funnels, not websites. eCommerce online store functionality is only available on websites, not funnels. For campaign-specific pages where conversion rate matters, use a funnel."
    },
    {
      q: "How long does it take to build a funnel in GoHighLevel?",
      a: "A simple two-page lead capture funnel — landing page and thank-you page — takes approximately 30 to 60 minutes to build from a template, including form setup and basic workflow connection. A more complex sales funnel with an order form, upsell page, and full automation sequence typically takes 2 to 4 hours. Using the AI Funnel Builder reduces initial page creation to 2 to 4 minutes per funnel, though manual refinement of copy, images, branding, and backend connections still requires additional time. Most experienced GHL builders estimate 30 to 45 minutes total for a complete client funnel using AI generation as a starting point."
    },
    {
      q: "Can you A/B test funnels in GoHighLevel?",
      a: "Yes. GoHighLevel includes built-in A/B split testing for funnel pages. You create a variant of any funnel step, set the traffic split percentage between the original and the variant, and GHL tracks conversion rates per version in real time. No external split testing tool is required. A/B testing is available on funnel pages only — it is not available on website pages. The standard guidance applies: test one element at a time, and run each test until you have at least 200 to 300 unique visitors per variant before drawing conclusions."
    },
    {
      q: "How does the GoHighLevel AI Funnel Builder work?",
      a: "The AI Funnel Builder generates a complete multi-step funnel with copy, layout, and structure from a text prompt, typically in 2 to 4 minutes. It has two modes: Assist Mode, which guides you through structured questions about your business and offer before generating the funnel, and Build Mode, which accepts free-text prompts and supports live chat refinement. The generated output is approximately 60% done — the structure and copy direction are solid, but you still need to swap stock images for branded photography, refine copy for your exact voice, adjust colours to your brand palette, and configure all backend connections including the form workflow trigger, custom domain, and tracking pixels."
    },
    {
      q: "Can I clone a GoHighLevel funnel across multiple client accounts?",
      a: "Yes, through Snapshots. A Snapshot is a complete copy of a GHL setup — including funnels, pipelines, workflows, and forms — that can be deployed to a new sub-account in one click. Agencies build a working funnel once, include it in a Snapshot, and deploy the Snapshot to each new client rather than rebuilding from scratch. The funnel then requires client-specific customisation (logo, offer, copy, domain) after deployment."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'funnel-vs-website', title: '1. What is the difference between a funnel and a website in GoHighLevel?' },
    { id: 'what-includes', title: '2. What does the GoHighLevel funnel builder include?' },
    { id: 'funnel-types', title: '3. What are the five main funnel types agencies build in GHL?' },
    { id: 'build-funnel', title: '4. How do you build a funnel in GoHighLevel? (Step by step)' },
    { id: 'ab-testing', title: '5. How does A/B split testing work in GoHighLevel funnels?' },
    { id: 'ai-builder', title: '6. How does the AI Funnel Builder work?' },
    { id: 'weaknesses', title: '7. What does GoHighLevel\'s funnel builder not do well?' },
    { id: 'faq', title: '8. Frequently asked questions' },
  ];

  const funnelVsWebsite = [
    { feature: 'Purpose', funnels: 'Single conversion path — one goal per page', websites: 'Multi-page browsing structure — multiple goals' },
    { feature: 'Navigation', funnels: 'No navigation menu — visitors follow one linear path', websites: 'Full navigation menu — visitors move freely between pages' },
    { feature: 'A/B split testing', funnels: 'Available — funnels only', websites: 'Not available on websites' },
    { feature: 'eCommerce online store', funnels: 'Not available on funnels', websites: 'Available — websites only' },
    { feature: 'Best used for', funnels: 'Ad traffic landing pages, lead capture, appointment booking, sales pages', websites: 'Company homepage, portfolio pages, about us, service directory' },
    { feature: 'Conversion tracking', funnels: 'Native per-step tracking and split testing', websites: 'Page view tracking only — no built-in A/B testing' },
  ];

  const funnelTypes = [
    {
      type: 'Lead magnet funnel',
      structure: 'Landing page → Opt-in form → Thank-you page with download',
      bestFor: 'Local businesses, coaches, and agencies capturing leads in exchange for a free resource',
      integration: 'Form submission triggers instant SMS and email follow-up workflow — lead is in the CRM and the pipeline within seconds'
    },
    {
      type: 'Appointment booking funnel',
      structure: 'Service description page → Calendar booking page → Confirmation page',
      bestFor: 'Any service business where booking a call or appointment is the conversion goal',
      integration: 'Calendar integration — booking creates a GHL appointment, confirmation SMS and email reminders fire automatically'
    },
    {
      type: 'Sales / VSL funnel',
      structure: 'Video sales letter page → Order form → Upsell page → Thank-you page',
      bestFor: 'Course creators, coaching programme sales, digital product sales',
      integration: 'Stripe integration handles payment; purchase triggers onboarding sequence and membership access'
    },
    {
      type: 'Webinar registration funnel',
      structure: 'Registration page → Confirmation page with replay link or access',
      bestFor: 'Agencies and consultants running webinars or live demos',
      integration: 'Registration triggers a pre-event reminder sequence (24 hours, 1 hour before) and post-event follow-up automatically'
    },
    {
      type: 'Quote request funnel',
      structure: 'Problem-aware landing page → Multi-field qualification form → Thank-you page',
      bestFor: 'Home services, trades, insurance, roofing — businesses where leads need qualifying before contact',
      integration: 'Form submission creates a contact, adds them to a pipeline stage, and triggers an immediate call or SMS from the assigned team member'
    },
  ];

  const buildSteps = [
    { step: 'Go to Sites → Funnels → Create New Funnel', desc: 'Name the funnel by client and campaign for clarity (for example, "Peak Roofing — Spring Storm Leads"). The naming convention matters when managing multiple client sub-accounts.' },
    { step: 'Choose a template or start from scratch', desc: 'The template library is organised by industry and funnel type. Choose the closest match to your use case and edit from there. Building from scratch takes significantly longer — start with a template for your first five funnels.' },
    { step: 'Add funnel steps', desc: 'Click Add New Step for each page in your funnel. Name each step clearly (Opt-in Page, Thank-You, Upsell, Booking Page). The steps appear in sequence — visitors move through them in order.' },
    { step: 'Edit each page in the drag-and-drop builder', desc: 'Click Edit on any step to open the page editor. Add your headline, body copy, social proof elements, and your form. Keep the form short for cold traffic pages — name, email, and phone is typically enough for a lead capture page.' },
    { step: 'Connect the form to a workflow', desc: 'In the Automations section, create a workflow with "Form Submitted" as the trigger. Set the filter to your specific funnel form. Add the follow-up actions: SMS within 60 seconds, email within 2 minutes, pipeline stage assignment.' },
    { step: 'Connect a custom domain', desc: 'Go to Settings — Domains and add your domain or subdomain. Point the CNAME to GHL at your DNS provider. Assign the domain to your funnel. SSL is handled automatically.' },
    { step: 'Preview on mobile before publishing', desc: 'Toggle to mobile view in the editor. Check every element — headlines, forms, buttons, and images — on mobile. Approximately 60 to 70% of funnel traffic is mobile. A page that looks correct on desktop but breaks on mobile loses most of its traffic before converting.' },
    { step: 'Submit a test form before running traffic', desc: 'Use a real email address and phone number. Verify the contact appears in your CRM, the correct tag is applied, the pipeline stage is assigned, and the follow-up workflow fires. Fix any gaps before directing paid traffic to the funnel.' },
  ];

  const weaknesses = [
    {
      title: 'Template library is smaller than standalone funnel builders',
      desc: 'ClickFunnels and Leadpages have more diverse and more conversion-tested templates. GHL\'s template library is expanding but is still narrower. The Snapshot marketplace helps bridge this gap for agency use cases, but a solo marketer looking for the best visual template options will find more at dedicated funnel builders.'
    },
    {
      title: 'Page loading speed depends on build quality',
      desc: 'Loading speed in GHL funnels depends on how many elements, videos, and scripts are added to each page. Heavy pages score poorly on Core Web Vitals. Keep funnel pages lean — remove any element that does not directly serve conversion, compress all images before uploading, and avoid embedding external scripts where possible.'
    },
    {
      title: 'Visual design fidelity is functional, not exceptional',
      desc: 'The editor is reliable and sufficient for agency lead generation. It is not as visually sophisticated as Webflow or as design-template-rich as Leadpages. Agencies whose competitive advantage is premium design work will find GHL\'s editor a constraint. Agencies whose competitive advantage is the automation and CRM layer behind the funnel will not notice this limitation in practice.'
    },
    {
      title: 'No blog capability within funnels',
      desc: 'Blog content cannot be hosted in the funnel builder. Blogging in GHL requires either the website builder or a third-party integration. This is not a funnel limitation specifically — it is a platform-level characteristic.'
    },
  ];

  const includesList = [
    { icon: Layout, title: 'Drag-and-drop visual editor', desc: 'Section-based page builder. Add rows, columns, and elements — text, images, video, forms, buttons, countdown timers, testimonials, pricing tables, and more. No coding required. Custom CSS and JavaScript injection are supported for advanced customisations.' },
    { icon: Smartphone, title: 'Mobile and desktop preview', desc: 'Toggle between mobile and desktop views within the editor. Mobile optimisation requires manual adjustment — GHL\'s mobile editor has improved significantly in 2026 but some elements may require manual responsive tweaks.' },
    { icon: FileText, title: 'Built-in form builder with conditional logic', desc: 'Forms inside funnels are native GHL forms. Every submission creates or updates a contact record automatically. Conditional logic allows different fields to show based on a user\'s previous answers. No separate form tool is needed.' },
    { icon: CreditCard, title: 'Native Stripe payment integration', desc: 'Add order forms, one-time payments, subscriptions, and order bumps directly inside the funnel. Payment data flows into GHL revenue reporting natively. One-click upsell pages are available for product funnels.' },
    { icon: Globe, title: 'Custom domain with automatic SSL', desc: 'Each funnel can be published to a custom domain or subdomain. GHL handles the SSL certificate automatically. Setup requires adding a CNAME record at your DNS provider. Most domain configurations take under 10 minutes.' },
    { icon: Split, title: 'Native A/B split testing', desc: 'Create a variation of any funnel page, set the traffic split percentage, and track conversion rates per variant in real time. Available on funnels only — not on websites.' },
    { icon: Wand2, title: 'AI Funnel Builder', desc: 'Generate a complete multi-step funnel from a text prompt. Two modes: Assist Mode (structured questions to guide AI output) and Build Mode (free-text prompt). Output in 2 to 4 minutes.' },
    { icon: Layers, title: 'Template library', desc: 'Pre-built funnel templates organised by industry and use case. Smaller than ClickFunnels or Leadpages but covers the most common agency needs. Snapshot imports from the GHL marketplace extend the library significantly.' },
    { icon: InfinityIcon, title: 'Unlimited funnels', desc: 'No hard cap on the number of funnels. All GHL plans from Starter upward support unlimited funnels within a sub-account.' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Funnel Builder</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Funnel Builder</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Features</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Funnel Builder:<br />
            <span className="text-[#F8D000]">Complete Feature Guide (2026)</span>
          </h1>

          {/* Author */}
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            Most reviews of GoHighLevel's funnel builder focus on the wrong thing: the drag-and-drop editor quality, the template count, the mobile responsiveness. Those matter, but they are not what makes GHL's funnel builder genuinely powerful. What matters is what happens the moment a visitor submits a form. Their contact record is created in the CRM automatically. A workflow fires. They move into a pipeline stage. An SMS sends within 60 seconds. All of that happens natively, inside the same platform, without a single Zapier step. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has built funnels for 200+ GHL accounts across real estate, dental, home services, coaching, and SaaS. This is the complete feature guide — what the builder includes, how to use it, and where its honest limitations are.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                GoHighLevel's funnel builder is included in all plans at no extra cost, supports unlimited funnels, and includes a drag-and-drop visual editor, AI funnel generation, native A/B split testing, order forms, upsells, custom domains, and direct integration with GHL's CRM and automation system.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It is not the most visually polished funnel builder available — the template library is smaller than ClickFunnels or Leadpages and the editor prioritises function over design flexibility. For agencies running lead generation across multiple clients, the native CRM and automation integration outweighs those limitations. The funnel builder is accessed via Sites → Funnels in the GHL left sidebar.
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

            {/* Section 1: Funnel vs Website */}
            <h2 id="funnel-vs-website" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is the Difference Between a Funnel and a Website in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both funnels and websites live in the Sites section of GHL and use the same drag-and-drop builder. The difference is purpose and behaviour.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Funnels</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Websites</th>
                  </tr>
                </thead>
                <tbody>
                  {funnelVsWebsite.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.funnels}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.websites}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">PRACTICAL RULE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Use a funnel for anything where you are sending paid or cold traffic with a single conversion goal. Use a website for your company homepage and evergreen content pages. Most agencies build their client's company website as a GHL website and all campaign-specific pages as funnels. The funnel's linear path and native A/B testing make it the right tool for anything where conversion rate optimisation matters.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full GHL plan breakdown confirming funnel builder is included at all tiers: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing 2026 →</Link>
            </p>

            {/* Section 2: What Includes */}
            <h2 id="what-includes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Does the GoHighLevel Funnel Builder Include?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              All of the following are included in the standard funnel builder at every GHL plan tier with no additional cost.
            </p>

            <div className="space-y-3 mb-6">
              {includesList.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E8F5FE] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4 text-[#0E9BF0]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1A2236]">{item.title}</h3>
                        <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section 3: Funnel Types */}
            <h2 id="funnel-types" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Are the Five Main Funnel Types Agencies Build in GHL?
            </h2>

            <div className="space-y-4 mb-6">
              {funnelTypes.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.type}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-[#F8F9FB] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#5C6880] uppercase tracking-wider mb-1">Structure</p>
                      <p className="text-sm text-[#1A2236]">{item.structure}</p>
                    </div>
                    <div className="bg-[#F8F9FB] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#5C6880] uppercase tracking-wider mb-1">Best for</p>
                      <p className="text-sm text-[#1A2236]">{item.bestFor}</p>
                    </div>
                    <div className="bg-[#E8F5FE] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#0E9BF0] uppercase tracking-wider mb-1">The integration that makes it work</p>
                      <p className="text-sm text-[#1A2236]">{item.integration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE INTEGRATION IS THE PRODUCT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Every funnel type above depends on what happens after the form submission, not the page itself. A lead capture page with no automation behind it is just a web form. The same page with a GHL workflow that fires an SMS within 60 seconds, assigns the contact to a pipeline stage, and emails you a notification becomes a working lead generation system. For building those post-submission workflows: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>. For the missed-call text-back automation that catches leads from ad traffic after hours: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
              </p>
            </div>

            {/* Section 4: Build Funnel */}
            <h2 id="build-funnel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Build a Funnel in GoHighLevel? (Step by Step)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Navigation confirmed from GHL's official support portal and verified against multiple 2026 sources. Verify within your own GHL account as the interface updates.
            </p>

            <div className="space-y-3 mb-6">
              {buildSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.step}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For deploying funnels across multiple client sub-accounts without rebuilding from scratch each time: <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">GoHighLevel Snapshot Guide →</Link>
            </p>

            {/* Section 5: A/B Testing */}
            <h2 id="ab-testing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Does A/B Split Testing Work in GoHighLevel Funnels?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A/B split testing in GHL funnels lets you create a variant of any funnel step, split incoming traffic between the original and the variant, and track conversion rates per version in real time. No external tool is required.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Funnels only:</strong> A/B testing is available on funnel pages but not on website pages. This is confirmed in GHL's official support documentation.</li>
              <li><strong className="text-[#1A2236]">One variable per test:</strong> The cardinal rule of split testing: change one element per test — headline, CTA text, button colour, hero image, or form length. Testing multiple changes simultaneously makes it impossible to know what caused any difference in conversion rate.</li>
              <li><strong className="text-[#1A2236]">Minimum sample size:</strong> Run each test until you have at least 200 to 300 unique visitors per variant before drawing conclusions. Statistical significance matters more than the percentage difference between variants.</li>
              <li><strong className="text-[#1A2236]">Traffic split:</strong> Set the percentage of traffic going to each variant. A 50/50 split reaches statistical significance fastest. You can adjust the split in favour of the winning variant once it has performed better consistently.</li>
              <li><strong className="text-[#1A2236]">What to test first:</strong> Test the headline before anything else. The headline is the highest-leverage element on any landing page. A headline change that improves conversion by 15% is worth more than any design change.</li>
            </ul>

            {/* Section 6: AI Builder */}
            <h2 id="ai-builder" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Does the GoHighLevel AI Funnel Builder Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The AI Funnel Builder is GHL's most significant 2026 update to the funnel system. It generates a complete multi-step funnel — with copy, layout, and structure — from a text prompt in 2 to 4 minutes.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Two Modes</h3>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880]">
              <li>
                <strong className="text-[#1A2236]">Assist Mode:</strong> A guided experience where you answer structured questions about your business, offer, and target audience. The AI generates a niche-specific funnel with proven conversion layouts based on your answers. Best for users who are not sure how to describe their funnel in a single prompt.
              </li>
              <li>
                <strong className="text-[#1A2236]">Build Mode:</strong> A free-text prompt interface where you describe your vision in natural language and the AI builds from that. Supports live chat refinement — you can type instructions like 'make the headline shorter' or 'change the CTA button colour to blue' and the AI applies the revision in real time.
              </li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST '60 PERCENT DONE' FRAMING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The AI Funnel Builder gets you to approximately 60% done, not 100%. The output — copy, layout, structure — is a solid starting point. What still requires manual work after AI generation: swapping stock images for your own branded photography, refining copy to match your exact voice and offer, adjusting colours to your brand palette, and configuring all backend connections (form action, workflow trigger, custom domain, tracking pixels). Think of AI generation as starting at 60% done rather than 0% done. For a funnel that previously took 3 to 4 hours to build, this represents a meaningful time reduction to 30 to 45 minutes.
              </p>
            </div>

            {/* Section 7: Weaknesses */}
            <h2 id="weaknesses" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Does GoHighLevel's Funnel Builder Not Do Well?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Honest answer matters here. GoHighLevel's funnel builder is strong for agencies. It is not the best funnel builder for every use case.
            </p>

            <div className="space-y-4 mb-6">
              {weaknesses.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5C6880] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For a detailed comparison of GHL's funnel builder against ClickFunnels specifically, including pricing and agency suitability: <Link href="/blog/gohighlevel-vs-clickfunnels" className="text-[#0E9BF0] hover:underline">GoHighLevel vs ClickFunnels: Honest 2026 Comparison →</Link>
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR FUNNEL BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                The highest-performing GHL funnels we have built are not the most visually elaborate — they are the ones with the tightest automation behind them. A clean opt-in page with a workflow that fires an SMS within 60 seconds consistently outperforms a polished page with a 4-hour follow-up delay.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See real results from our funnel builds: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Our <Link href="/services/funnel-development" className="text-[#0E9BF0] hover:underline">GoHighLevel funnel development service</Link> covers funnel build, form setup, automation connection, domain configuration, and split test setup. To discuss building a funnel system for your business: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* Section 8: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              8. Frequently Asked Questions
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
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation: Beginner's Guide →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/blog/gohighlevel-vs-clickfunnels" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs ClickFunnels: Honest 2026 Comparison →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
                <Link href="/services/funnel-development" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Funnel Development Service →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need a funnel that actually converts — not just looks good?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds funnels with the automation that makes them work. Funnel build, form setup, workflow connection, domain configuration, and split test setup — done and tested before handover.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ funnel builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                Navigation paths in this guide verified against GHL's official support portal and independent 2026 sources. Verify within your own GHL account as the interface updates.
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
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ funnel builds delivered globally across real estate, dental, home services, coaching, and SaaS clients. All technical details verified as of June 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need a Funnel That Converts?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We build funnels with the automation that makes them work — tested and ready for traffic.</p>
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