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
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  XCircle,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Shield,
  Sparkles,
  BarChart3,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelWebsiteBuilderClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is',
        'vs-funnel',
        'templates',
        'build-first-page',
        'seo-features',
        'ecommerce',
        'blog',
        'vs-wordpress',
        'limitations',
        'migrate-wordpress',
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

      // Show floating Project Help card after scrolling past hero section
      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
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
      q: "Is the GoHighLevel website builder free?",
      a: "The GoHighLevel website builder is included on every GoHighLevel plan starting at $97/month for the Starter plan. There is no separate charge for the website builder itself, no per-page fee, and no separate hosting or SSL certificate cost, since GoHighLevel provisions a free SSL certificate automatically for every connected domain."
    },
    {
      q: "Can I use my own domain with the GoHighLevel website builder?",
      a: "Yes. You can connect any domain you own by updating its DNS records at your domain registrar to point to GoHighLevel's hosting, typically through a CNAME or A record change. GoHighLevel automatically issues and renews a free SSL certificate for every connected domain, so your site displays as secure without any separate certificate purchase."
    },
    {
      q: "Does the GoHighLevel website builder support custom code?",
      a: "Yes. The GoHighLevel website builder supports custom CSS, JavaScript, and HTML code blocks for advanced customisation or third-party embeds. However, this does not provide the same full source-code access that self-hosted WordPress offers, since you remain within GoHighLevel's platform structure rather than having complete backend code control."
    },
    {
      q: "How many templates does the GoHighLevel website builder have?",
      a: "Estimates range from just over 100 to more than 200 templates depending on the source and how variations within an industry category are counted. This number should be verified directly inside your GoHighLevel account, since the template library is updated periodically."
    },
    {
      q: "Can the GoHighLevel website builder replace WordPress completely?",
      a: "For a service business or agency whose website's main job is lead generation, booking, and conversion, yes, the GoHighLevel website builder can fully replace WordPress and eliminate the separate CRM, email, SMS, and booking tools typically connected to a WordPress site. For a content-heavy blog publishing at high volume, a large ecommerce catalogue, or a highly custom development project, WordPress remains the stronger and more capable choice."
    },
    {
      q: "Can the GoHighLevel website builder sell products online?",
      a: "Yes, through its dedicated ecommerce store builder, which includes customisable templates, secure payment processing, inventory management, order tracking, automatic tax calculation, and multi-currency support for international sales. It suits a small to moderate product catalogue well but is not built to compete with a dedicated ecommerce platform for large-scale catalogues with complex variant management."
    },
    {
      q: "Is there an automated way to import my existing WordPress site into the GoHighLevel website builder?",
      a: "No. There is no automated WordPress-to-GoHighLevel import tool. Every page must be manually rebuilt inside the GoHighLevel website builder's drag-and-drop editor. This is the single most important expectation to set correctly before starting a migration, since underestimating this manual rebuild time is the most common migration mistake."
    },
    {
      q: "Is the GoHighLevel website builder good for SEO?",
      a: "It covers foundational, page-level SEO well, including title tags, meta descriptions, Open Graph images, canonical URLs, mobile responsiveness, and fast load times from its managed content delivery network. It does not match the depth of a dedicated WordPress SEO plugin like Yoast or RankMath for large-scale content operations, advanced schema markup, or granular sitemap control. For a handful of core service pages, this is sufficient. For high-volume content publishing, WordPress remains stronger."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is', title: '1. What Is the GoHighLevel Website Builder?' },
    { id: 'vs-funnel', title: '2. How Does the GoHighLevel Website Builder Differ From the GoHighLevel Funnel Builder?' },
    { id: 'templates', title: '3. What Templates Does the GoHighLevel Website Builder Include?' },
    { id: 'build-first-page', title: '4. How Do You Build Your First Page With the GoHighLevel Website Builder?' },
    { id: 'seo-features', title: '5. What SEO Features Does the GoHighLevel Website Builder Include?' },
    { id: 'ecommerce', title: '6. Can the GoHighLevel Website Builder Run an Online Store?' },
    { id: 'blog', title: '7. Can the GoHighLevel Website Builder Host a Blog?' },
    { id: 'vs-wordpress', title: '8. How Does the GoHighLevel Website Builder Compare to WordPress?' },
    { id: 'limitations', title: '9. What Are the Limitations of the GoHighLevel Website Builder?' },
    { id: 'migrate-wordpress', title: '10. How Do You Migrate an Existing WordPress Site to the GoHighLevel Website Builder?' },
    { id: 'mistakes', title: '11. What Are the Common Mistakes to Avoid With the GoHighLevel Website Builder?' },
    { id: 'faq', title: '12. Frequently Asked Questions' }
  ];

  const costComparison = [
    { factor: 'Hosting', wordpress: '$5 to $50/month', ghl: 'Included in plan' },
    { factor: 'SSL Certificate', wordpress: 'Often included with host, sometimes separate', ghl: 'Included, auto-provisioned' },
    { factor: 'CRM', wordpress: '$50 to $300/month separate tool', ghl: 'Included in plan' },
    { factor: 'Email Marketing', wordpress: '$20 to $100/month separate tool', ghl: 'Included in plan' },
    { factor: 'Booking Tool', wordpress: '$10 to $20/seat/month separate tool', ghl: 'Included in plan' },
    { factor: 'Funnel/Landing Page Builder', wordpress: '$100 to $300/month separate tool', ghl: 'Included in plan' },
    { factor: 'Total Typical Stack', wordpress: '$300 to $700+/month across tools', ghl: '$97 to $497/month flat, one platform' }
  ];

  const mistakes = [
    'Choosing a template based purely on visual appeal without checking whether its section structure fits your actual content, leading to hours of restructuring later.',
    'Skipping per-page SEO settings entirely, leaving every page with a generic auto-generated title tag that hurts search visibility from day one.',
    'Publishing a page without testing the mobile layout on an actual device, relying only on the editor\'s built-in preview mode.',
    'Connecting a form without configuring the workflow that should fire when it is submitted, so leads sit in the CRM with no follow-up sequence.',
    'Attempting to migrate a large, content-heavy WordPress blog into the GoHighLevel website builder instead of keeping it on WordPress and connecting the two systems.',
    'Underestimating migration time by assuming any part of the WordPress-to-GoHighLevel process is automated, when every page requires manual rebuilding.'
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your website build.</p>
      <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );

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
          <span className="text-[#1A2236] font-medium">GoHighLevel Website Builder</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Website Builder</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">WordPress Comparison</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Website Builder:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide + WordPress Comparison</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            If you are researching the GoHighLevel website builder, you are likely trying to answer one of four questions: what can it actually build, is it good enough to replace WordPress, what does it cost compared to your current website stack, and what are the real limitations nobody mentions in a sales pitch. At <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link>, we build websites inside GoHighLevel for agencies and service businesses every week, and we have also migrated dozens of businesses away from WordPress onto it, and occasionally the other direction. This guide covers what the GoHighLevel website builder actually is, every major feature in depth, a full setup walkthrough, an honest WordPress comparison, and the specific limitations you should know about before committing.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The GoHighLevel website builder is a native, drag-and-drop website creation tool built directly into the GoHighLevel platform, using the same underlying editor technology as GoHighLevel's funnel builder. It exists to let agencies and businesses build a complete marketing website, without a separate hosting provider, a separate CRM integration, or a separate booking tool, because the website, the CRM, the calendar, and the automation engine are all the same system.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The honest starting point, before any feature list, is this: the GoHighLevel website builder is not trying to be a better version of WordPress for every use case. It is solving a different problem, specifically the problem of a service business or agency currently paying for a WordPress site plus a separate CRM, plus a separate funnel builder, plus a separate booking tool, and stitching them together with plugins and Zapier. For that exact situation, the GoHighLevel website builder replaces the entire stack. For a content-heavy blog, a large ecommerce catalogue, or a highly custom design build, WordPress remains the stronger choice, and this guide says so honestly rather than pretending otherwise.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Website Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#vs-wordpress"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See WordPress Comparison
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            {/* Project Help Card */}
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

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
                  <div className="text-xs text-white/50">Website Builder Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
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

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need a Website Built or Migrated?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We build niche-specific websites inside GoHighLevel and handle full WordPress-to-GoHighLevel migrations including 301 redirects.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
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
                The GoHighLevel website builder is a drag-and-drop website creation tool included on every GoHighLevel plan starting at $97/month, with no separate hosting fee, no separate SSL certificate cost, and no per-page charge.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It includes 100 to 200+ pre-built templates depending on the source counted, per-page SEO fields, a built-in blogging module, custom domain support, custom CSS/JS/HTML code blocks, and an ecommerce store builder. Every form submission, page visit, and purchase on a GoHighLevel website automatically flows into the same CRM used for calendars, automations, and pipelines, with zero integration required. It is a strong replacement for WordPress specifically for lead-generation and service-business websites. It is not a strong replacement for WordPress for content-heavy publishing operations, large ecommerce catalogues, or highly custom development work, since there is no automated WordPress-to-GoHighLevel import and every page must be manually rebuilt inside GoHighLevel's editor.
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Website Help
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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

            {/* Mobile Project Help Card - visible on mobile only */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section 1: What Is */}
            <h2 id="what-is" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is the GoHighLevel Website Builder?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel website builder is a native component of the GoHighLevel all-in-one platform, not a bolt-on plugin or a separate product you purchase alongside it. It exists inside the same dashboard as the CRM, the calendar system, the automation workflows, and the funnel builder, and it uses a visual drag-and-drop editor that requires no coding knowledge to operate.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel website builder was built to solve a specific problem agencies kept running into: a client's WordPress website, their CRM, their booking tool, and their email marketing platform were all separate systems that did not talk to each other reliably. When a visitor filled out a form on the WordPress site, getting that submission into the CRM required a Zapier connection, a plugin, or a manual export, and any one of those integration points could quietly break without anyone noticing for weeks.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The natural next question is what happens when someone fills out a form on a website built with the GoHighLevel website builder instead. The answer is that the submission creates a contact record directly in the GoHighLevel CRM, can trigger a workflow that sends an automated email and SMS confirmation, adds the contact to a pipeline stage, fires an internal notification to the business owner, and can optionally book a calendar appointment, all without a single external integration or third-party connection point that could fail.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHO THE GOHIGHLEVEL WEBSITE BUILDER IS BUILT FOR</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The GoHighLevel website builder is built for service businesses, agencies, coaches, consultants, and local businesses whose website's primary job is generating and converting leads, not publishing large volumes of content or running a complex ecommerce catalogue. If your website's main function is a contact form, a booking calendar, a set of service pages, and a handful of supporting pages, the GoHighLevel website builder is built specifically for this use case.
              </p>
            </div>

            {/* CTA Button 3: After Section 1 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Ready to build your website on GoHighLevel?</span> Let our team handle the full setup.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Website Setup
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 2: Vs Funnel */}
            <h2 id="vs-funnel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. How Does the GoHighLevel Website Builder Differ From the GoHighLevel Funnel Builder?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is one of the most common points of confusion for anyone new to GoHighLevel, since the GoHighLevel website builder and the GoHighLevel funnel builder share the same underlying drag-and-drop editing technology. The difference is purpose, not technology.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The GoHighLevel Website Builder's purpose</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel website builder is designed to create a full, multi-page website with persistent navigation, a header and footer that appear across every page, a blog section, and a general-purpose site structure that a visitor can browse the way they would browse any normal business website. It is meant to represent your business as a whole, not guide a visitor through one single, linear conversion path.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The GoHighLevel Funnel Builder's purpose</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel funnel builder is designed to create a focused, linear sequence of pages built around a single specific goal, such as booking a call, registering for a webinar, or purchasing a specific product. A funnel typically has no persistent navigation menu at all, deliberately, because the entire purpose is to remove distractions and keep the visitor moving toward one single next step, page by page, rather than letting them browse freely.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Aspect</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel Website Builder</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel Funnel Builder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Purpose</td>
                    <td className="py-3 px-3 text-[#5C6880]">Full multi-page business presence</td>
                    <td className="py-3 px-3 text-[#5C6880]">Single-goal linear conversion path</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Navigation</td>
                    <td className="py-3 px-3 text-[#5C6880]">Persistent header/footer menu across pages</td>
                    <td className="py-3 px-3 text-[#5C6880]">Typically none, by design</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Best for</td>
                    <td className="py-3 px-3 text-[#5C6880]">Homepage, service pages, about, blog, contact</td>
                    <td className="py-3 px-3 text-[#5C6880]">Webinar registration, product launch, lead magnet opt-in</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Structure</td>
                    <td className="py-3 px-3 text-[#5C6880]">Non-linear, visitor browses freely</td>
                    <td className="py-3 px-3 text-[#5C6880]">Linear, one page leads to the next specific step</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A natural follow-up question is whether a business needs both. Most service businesses using the GoHighLevel website builder for their main site also build one or more funnels for specific campaigns, such as a lead magnet download or a limited-time offer, since the two tools are built to work together rather than as alternatives to each other.
            </p>

            {/* Section 3: Templates */}
            <h2 id="templates" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Templates Does the GoHighLevel Website Builder Include?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel website builder ships with a library of pre-built templates, with different sources citing figures ranging from just over 100 to more than 200, depending on whether the count includes industry-specific variations or only distinct base layouts. This range should be verified directly inside your account, since GoHighLevel adds templates periodically and the exact count changes over time.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These templates are organised primarily by industry and business type, covering common local business categories such as home services, medical and dental practices, real estate, coaching and consulting, fitness studios, and professional services. Selecting a template that matches your industry gives you a starting structure with relevant section types already in place, such as a services grid, a testimonials section, or a booking call-to-action, rather than starting from a completely blank page.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How template quality compares to a fully custom design</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It is worth being direct about template quality here rather than only promoting it. The GoHighLevel website builder's templates are functional and convert reasonably well, but they are not the most visually refined page-building experience available on the market. You will occasionally fight with column spacing, and some default templates look more generic than a fully custom WordPress theme or a dedicated design tool like Webflow would produce. If a highly unique, award-winning visual design is the primary goal, the GoHighLevel website builder is not the right tool for that specific job, and this guide would rather tell you that now than after you have invested a week configuring a site around a template.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Where the GoHighLevel website builder's templates genuinely earn their reputation is speed to launch and reliable technical performance. Every template renders correctly on mobile devices, loads from GoHighLevel's managed content delivery network, and connects to the CRM automatically, with zero separate hosting configuration required.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">BUILT-FOR-YOU SETUP</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you want a niche-specific website built and connected to your CRM and calendar correctly the first time: <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GHL SaaS Setup Service →</Link>
              </p>
            </div>

            {/* CTA Button 4: After Templates */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🎨 Need a custom-designed website that actually converts?</p>
              <p className="text-sm text-white/80 mb-4">We'll build you a niche-specific website that looks professional and connects to your CRM.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get a Custom Build
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 4: Build First Page */}
            <h2 id="build-first-page" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Build Your First Page With the GoHighLevel Website Builder?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Building a functional first page with the GoHighLevel website builder typically takes 60 to 90 minutes for someone unfamiliar with the platform, and 20 to 30 minutes once you have built a handful of pages and understand the editor's logic.
            </p>

            <ol className="space-y-3 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Step 1: Choose a starting template inside the GoHighLevel website builder</strong><br />
              From the Sites section of your sub-account, select Websites, then New Website, and choose either a blank canvas or one of the pre-built templates covered in Section 3. For most first-time builds, starting from an industry-relevant template is faster than a blank canvas, since it establishes a sensible section order you can then edit rather than design from scratch.</li>
              
              <li><strong className="text-[#1A2236]">Step 2: Set up your site-wide settings before editing individual pages</strong><br />
              Before customising any single page, configure the settings that apply across the entire site: your primary brand color, your logo, your default fonts, and your favicon. Doing this first means every new page you add automatically inherits consistent branding, rather than needing to fix inconsistent styling across pages later.</li>
              
              <li><strong className="text-[#1A2236]">Step 3: Edit the homepage using the GoHighLevel website builder's drag-and-drop editor</strong><br />
              Click into any section to edit its text, images, or layout directly. The GoHighLevel website builder's editor supports independent editing for mobile and desktop layouts, meaning you can adjust how a section looks on a phone screen without that change affecting the desktop version, and without writing any CSS media queries manually.</li>
              
              <li><strong className="text-[#1A2236]">Step 4: Connect a contact form to your CRM inside the GoHighLevel website builder</strong><br />
              Add a form element from the elements panel and either build a new form or select an existing one from your account. Every field on this form maps to a corresponding field in the GoHighLevel CRM automatically, and you can configure which workflow fires the moment a visitor submits it, whether that is a welcome email sequence, an internal notification, or a calendar booking prompt.</li>
              
              <li><strong className="text-[#1A2236]">Step 5: Configure per-page SEO settings inside the GoHighLevel website builder</strong><br />
              For every page, open the SEO tab and set a unique title tag, a meta description, and an Open Graph image for social sharing previews. This step is covered in full depth in Section 5, since it is frequently skipped and directly affects how the page performs in search results.</li>
              
              <li><strong className="text-[#1A2236]">Step 6: Connect your custom domain to the GoHighLevel website builder</strong><br />
              Under Domains in your account settings, add your domain and update its DNS records to point to GoHighLevel's hosting, typically a CNAME or A record change made at your domain registrar. GoHighLevel automatically provisions a free SSL certificate for every connected domain, so there is no separate SSL purchase or configuration step required, and no ongoing renewal to manage manually.</li>
              
              <li><strong className="text-[#1A2236]">Step 7: Test the full page on both mobile and desktop before publishing</strong><br />
              Before making any page live, view it on an actual mobile device, not just the editor's mobile preview mode, and submit a test form entry to confirm the CRM receives it correctly and any connected workflow fires as expected. Skipping this test is how a page goes live with a broken form, unreadable mobile text sizing, or a missing SSL certificate that has not finished provisioning yet.</li>
            </ol>

            {/* Section 5: SEO Features */}
            <h2 id="seo-features" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What SEO Features Does the GoHighLevel Website Builder Include?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel website builder includes foundational, page-level SEO controls, but it is important to be precise about what this does and does not cover, since a natural next question after hearing 'it has SEO features' is whether that is comparable to a dedicated WordPress SEO plugin.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">What the GoHighLevel website builder's SEO settings include</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Per-page title tag and meta description fields, editable independently for every single page on the site.</li>
                <li>Open Graph image configuration, controlling how a page appears when shared on social media or messaging apps.</li>
                <li>Canonical URL configuration, useful for preventing duplicate content issues across similar pages.</li>
                <li>Automatic mobile responsiveness, which is itself a ranking factor Google weighs heavily.</li>
                <li>Fast page load times from GoHighLevel's managed content delivery network, another factor that affects search ranking.</li>
              </ul>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">What the GoHighLevel website builder's SEO settings do not include</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The GoHighLevel website builder does not include the depth of SEO tooling that a dedicated WordPress plugin like Yoast SEO or RankMath provides, such as readability scoring, automated internal linking suggestions, XML sitemap customisation at a granular level, or schema markup templates for every content type. For a business publishing a small number of core service pages, this is not a meaningful gap. For a content marketing operation publishing dozens of articles per month and running a programmatic SEO strategy, this gap becomes significant, and is one of the clearest reasons WordPress remains the stronger choice for that specific use case, covered further in Section 8.
              </p>
            </div>

            {/* Section 6: Ecommerce */}
            <h2 id="ecommerce" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Can the GoHighLevel Website Builder Run an Online Store?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes. The GoHighLevel website builder includes a dedicated ecommerce store builder, using the same drag-and-drop, no-code approach as the rest of the platform. GoHighLevel's own marketing material states a store can be built and launched in as little as 30 minutes, though this figure should be treated as a best-case estimate for a simple catalogue rather than a guaranteed timeline for every store.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">What the GoHighLevel website builder's ecommerce features include</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Customisable store templates as a starting point for product catalogue layout.</li>
                <li>Secure payment integration for processing customer transactions directly on the site.</li>
                <li>Inventory management to track stock levels across products.</li>
                <li>Order tracking so both the business and the customer can follow fulfilment status.</li>
                <li>Automatic tax calculation based on the applicable jurisdiction.</li>
                <li>Mobile-optimised store design, since a large share of online shopping happens on phones.</li>
                <li>Multi-currency support and multilingual configuration for businesses selling internationally.</li>
              </ul>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Who should use the GoHighLevel website builder's store, and who should not</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The GoHighLevel website builder's ecommerce features are well suited to a service business selling a small number of digital products, physical add-ons, or simple merchandise alongside its core service offering. It is not built to compete with a dedicated ecommerce platform like Shopify for a large product catalogue, complex variant management, or high-volume order processing. A business planning to sell hundreds of SKUs with detailed variant options should evaluate a dedicated ecommerce platform rather than assuming the GoHighLevel website builder's store will scale to that need.
              </p>
            </div>

            {/* Section 7: Blog */}
            <h2 id="blog" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Can the GoHighLevel Website Builder Host a Blog?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, the GoHighLevel website builder includes a dedicated blogging module, and it is built to integrate directly with GoHighLevel's Social Planner, meaning a published blog post can be scheduled for automatic distribution across connected social media accounts without a separate step.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The natural next question is whether this blogging module is a genuine substitute for WordPress specifically as a content publishing platform, and the honest answer is that it depends entirely on your publishing volume. For a service business publishing occasional articles to support local SEO, a handful of posts per month covering service-area topics or frequently asked questions, the GoHighLevel website builder's blog feature is sufficient and keeps everything inside one system. For a content marketing operation publishing 50 or more articles per month, managing multiple freelance contributors, running an editorial calendar, or building large-scale programmatic SEO content, WordPress's content management infrastructure, including the Gutenberg block editor, revision history, multi-author workflows, and custom taxonomies, remains meaningfully more capable, and this is one of the clearest lines where WordPress is still the correct tool for the job.
            </p>

            {/* CTA Button 5: After Blog */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">📝 Planning a blog on GoHighLevel?</p>
              <p className="text-sm text-white/80 mb-4">We can set up your blog correctly with proper SEO settings and social media integration.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Get Blog Setup
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 8: Vs WordPress */}
            <h2 id="vs-wordpress" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Does the GoHighLevel Website Builder Compare to WordPress?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the single most searched comparison related to the GoHighLevel website builder, and it deserves a direct, numbers-based answer rather than a vague 'it depends.'
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">The cost stack comparison</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A single WordPress site with managed hosting typically costs relatively little on its own, often in the range of a few dollars to $30 to $50 per month depending on the host. The real cost appears once you add the tools a service business actually needs alongside it: a CRM, an email marketing platform, an appointment booking tool, and a funnel or landing page builder. Stitched together, this stack commonly runs $300 to $700 per month across four or five separate subscriptions for a single business, before accounting for the time spent keeping all of them connected and working.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              At agency scale, running 10 WordPress client sites, the cost compounds further. Managed hosting alone typically runs $30 to $50 per site per month, plugin licenses across the portfolio commonly add $100 to $300 per month, and ongoing maintenance labor, patching plugins, resolving conflicts, and fixing broken integrations, typically consumes 10 to 30 hours per month. At a typical agency billing rate of $75 per hour, that maintenance labor alone costs $750 to $2,250 per month, on top of hosting and licensing.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Cost Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">WordPress Stack (Single Site)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel Website Builder</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.wordpress}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What WordPress still does better than the GoHighLevel website builder</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              WordPress remains the correct choice for content-heavy websites, blogs publishing at high volume, large ecommerce stores with complex catalogues, and businesses requiring highly custom development work built on WordPress's enormous plugin and developer ecosystem. WordPress also allows full source-code access, meaning a developer can modify absolutely anything, while the GoHighLevel website builder, despite supporting custom CSS, JavaScript, and HTML blocks, keeps you working within its own platform structure rather than granting full code-level access the way self-hosted WordPress does.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What the GoHighLevel website builder does better than WordPress</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a service business or agency whose website exists primarily to generate and convert leads, the GoHighLevel website builder's native CRM integration, included booking calendar, included automation engine, and single flat monthly cost regardless of how many tools you would otherwise need, make it the stronger choice. There is no plugin conflict risk, no separate hosting to secure and patch, and no integration point between systems that can silently break.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST VERDICT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Many businesses end up running both platforms deliberately, not as a compromise but as a genuine strategy: WordPress for a high-volume, SEO-focused blog and content hub, and the GoHighLevel website builder for the core lead-generation pages, booking flow, and everything connected to CRM and automation. This combination lets WordPress build organic search authority while GoHighLevel converts and nurtures the traffic that authority generates.
              </p>
            </div>

            {/* CTA Button 6: Before Limitations */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Not sure if the GoHighLevel website builder can replace your WordPress site?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your current site and tell you honestly if migrating makes sense.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Free Site Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 9: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. What Are the Limitations of the GoHighLevel Website Builder?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Being direct about limitations here matters more than another feature list, since every genuine limitation below is something you should know before building, not discover after launch.
            </p>

            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">No automated WordPress import:</strong> There is no tool that automatically imports an existing WordPress site into the GoHighLevel website builder. Every single page must be manually rebuilt inside GoHighLevel's editor, which is the single biggest time cost in any migration, covered in full in Section 10.</li>
              <li><strong className="text-[#1A2236]">Template design ceiling:</strong> As covered in Section 3, the GoHighLevel website builder's templates are functional but not the most visually refined option available, and you will occasionally fight with column spacing and layout quirks that a more mature page-builder ecosystem has already solved.</li>
              <li><strong className="text-[#1A2236]">SEO tooling depth:</strong> As covered in Section 5, the built-in SEO features cover the fundamentals but lack the depth of a dedicated WordPress SEO plugin for large-scale content operations.</li>
              <li><strong className="text-[#1A2236]">No full source-code access:</strong> While custom CSS, JavaScript, and HTML blocks are supported, you remain within GoHighLevel's platform structure rather than having the complete code-level control self-hosted WordPress provides.</li>
              <li><strong className="text-[#1A2236]">Ecommerce ceiling:</strong> As covered in Section 6, the store builder suits a small to moderate product catalogue well but is not built to compete with a dedicated ecommerce platform at large scale.</li>
            </ul>

            {/* Section 10: Migrate WordPress */}
            <h2 id="migrate-wordpress" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. How Do You Migrate an Existing WordPress Site to the GoHighLevel Website Builder?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Migrating from WordPress to the GoHighLevel website builder is a manual rebuild process, not an automated import, and planning for this correctly prevents the most common migration mistake, which is underestimating the time required.
            </p>

            <ol className="space-y-1 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Audit your existing WordPress site's page and content inventory:</strong> List every page, its purpose, and the content it contains, so nothing is missed once you begin rebuilding inside the GoHighLevel website builder.</li>
              <li><strong className="text-[#1A2236]">Select the closest-matching GoHighLevel website builder template:</strong> Choose a template from Section 3's library that most closely resembles your existing site's structure, to minimise the amount of section-by-section restructuring required.</li>
              <li><strong className="text-[#1A2236]">Rebuild each page manually inside the GoHighLevel website builder's editor:</strong> Recreate your content, images, and layout page by page. There is no shortcut here. This is the step that takes the most time in any migration.</li>
              <li><strong className="text-[#1A2236]">Recreate your forms and connect them to CRM workflows:</strong> Any lead capture form on the old WordPress site needs to be rebuilt using the GoHighLevel website builder's form element and connected to the appropriate CRM workflow, as covered in Section 4.</li>
              <li><strong className="text-[#1A2236]">Update your domain's DNS to point to GoHighLevel hosting:</strong> Once the new site is fully built and tested, change your domain's DNS records to point to GoHighLevel, which automatically provisions a free SSL certificate for the connected domain.</li>
              <li><strong className="text-[#1A2236]">Set up 301 redirects for any changed URLs:</strong> If any page URLs differ between your old WordPress site and the new GoHighLevel website builder site, configure 301 redirects to preserve existing search rankings and prevent broken links from external sites still pointing to your old URLs.</li>
              <li><strong className="text-[#1A2236]">Keep the WordPress site accessible until the new site is fully verified:</strong> Do not cancel WordPress hosting until you have confirmed every page, form, and redirect on the new GoHighLevel website builder site is working correctly in a live test.</li>
            </ol>

            {/* CTA Button 7: After Migration */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔄 Planning a WordPress to GoHighLevel migration?</p>
              <p className="text-sm text-white/80 mb-4">We handle the full migration including page rebuilds, form setup, and 301 redirects.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Shield className="w-4 h-4" />
                Get Migration Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 11: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              11. What Are the Common Mistakes to Avoid With the GoHighLevel Website Builder?
            </h2>

            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {mistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Every recommendation in this guide reflects real GoHighLevel website builder configurations and migrations built for agencies and service businesses. See <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies</Link> to review actual client outcomes.
            </p>

            {/* CTA Button 8: Before FAQ */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚠️ Don't make costly website builder mistakes.</p>
              <p className="text-sm text-white/80 mb-4">Get a free, no-obligation website assessment from experts who've built hundreds of GHL sites.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Shield className="w-4 h-4" />
                Get a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 12: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              12. Frequently Asked Questions
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

            {/* CTA Button 9: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About the GoHighLevel Website Builder?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our website specialists directly. We've built hundreds of sites on GHL.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GHL SaaS Setup Service →</Link>
                <Link href="/blog/gohighlevel-calendar-booking" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Calendar & Booking: The Complete 2026 Guide →</Link>
                <Link href="/gohighlevel-saas-mode" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-vs-keap-2026-comparison" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs Keap: Which CRM Should You Choose in 2026? →</Link>
                <Link href="/blog/get-first-10-gohighlevel-saas-clients" className="text-sm text-[#0E9BF0] hover:underline">How to Get Your First 10 GoHighLevel SaaS Clients →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to build or migrate your website on GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds niche-specific websites inside the GoHighLevel website builder, connects every form to the correct CRM workflow, configures SEO settings properly, and handles full WordPress-to-GoHighLevel migrations.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency founded by Aryan Trivedi. Based in India, we serve agencies and SaaS founders across 6 countries with 200+ GoHighLevel builds delivered, including website builds and WordPress migrations. This guide reflects direct experience building and migrating real client websites inside the GoHighLevel website builder, combined with independently verified 2026 feature and pricing data.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
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