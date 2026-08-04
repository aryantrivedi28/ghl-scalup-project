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
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelWebsiteBuilderClient() {
  const [activeId, setActiveId] = useState<string>('');

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
    'Choosing a template based purely on visual appeal without checking whether its section structure fits your actual content.',
    'Skipping per-page SEO settings entirely, leaving every page with a generic auto-generated title tag.',
    'Publishing a page without testing the mobile layout on an actual device.',
    'Connecting a form without configuring the workflow that should fire when it is submitted.',
    'Attempting to migrate a large, content-heavy WordPress blog into the GoHighLevel website builder instead of keeping it on WordPress.',
    'Underestimating migration time by assuming any part of the WordPress-to-GoHighLevel process is automated.'
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Website Builder</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Website Builder</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">WordPress Comparison</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Website Builder:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide + WordPress Comparison</span>
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
            If you are researching the GoHighLevel website builder, you are likely trying to answer one of four questions: what can it actually build, is it good enough to replace WordPress, what does it cost compared to your current website stack, and what are the real limitations nobody mentions in a sales pitch. At <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link>, we build websites inside GoHighLevel for agencies and service businesses every week, and we have also migrated dozens of businesses away from WordPress onto it, and occasionally the other direction. This guide covers what the GoHighLevel website builder actually is, every major feature in depth, a full setup walkthrough, an honest WordPress comparison, and the specific limitations you should know about before committing.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                The GoHighLevel website builder is a drag-and-drop website creation tool included on every GoHighLevel plan starting at $97/month, with no separate hosting fee, no separate SSL certificate cost, and no per-page charge.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                It includes 100 to 200+ pre-built templates, per-page SEO fields, a built-in blogging module, custom domain support, custom CSS/JS/HTML code blocks, and an ecommerce store builder. Every form submission, page visit, and purchase on a GoHighLevel website automatically flows into the same CRM used for calendars, automations, and pipelines, with zero integration required. It is a strong replacement for WordPress specifically for lead-generation and service-business websites. It is not a strong replacement for WordPress for content-heavy publishing operations, large ecommerce catalogues, or highly custom development work.
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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHO THE GOHIGHLEVEL WEBSITE BUILDER IS BUILT FOR</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The GoHighLevel website builder is built for service businesses, agencies, coaches, consultants, and local businesses whose website's primary job is generating and converting leads, not publishing large volumes of content or running a complex ecommerce catalogue. If your website's main function is a contact form, a booking calendar, a set of service pages, and a handful of supporting pages, the GoHighLevel website builder is built specifically for this use case.
              </p>
            </div>

            {/* Section 2: Vs Funnel */}
            <h2 id="vs-funnel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. How Does the GoHighLevel Website Builder Differ From the GoHighLevel Funnel Builder?
            </h2>

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

            {/* Section 3: Templates */}
            <h2 id="templates" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Templates Does the GoHighLevel Website Builder Include?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel website builder ships with a library of pre-built templates, with different sources citing figures ranging from just over 100 to more than 200, depending on whether the count includes industry-specific variations or only distinct base layouts. These templates are organised primarily by industry and business type, covering common local business categories such as home services, medical and dental practices, real estate, coaching and consulting, fitness studios, and professional services.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">HOW TEMPLATE QUALITY COMPARES TO A FULLY CUSTOM DESIGN</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                It is worth being direct about template quality here. The GoHighLevel website builder's templates are functional and convert reasonably well, but they are not the most visually refined page-building experience available on the market. You will occasionally fight with column spacing, and some default templates look more generic than a fully custom WordPress theme or a dedicated design tool like Webflow would produce. If a highly unique, award-winning visual design is the primary goal, the GoHighLevel website builder is not the right tool for that specific job.
              </p>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">BUILT-FOR-YOU SETUP</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you want a niche-specific website built and connected to your CRM and calendar correctly the first time: <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GHL SaaS Setup Service →</Link>
              </p>
            </div>

            {/* Section 4: Build First Page */}
            <h2 id="build-first-page" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Build Your First Page With the GoHighLevel Website Builder?
            </h2>

            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Choose a starting template:</strong> From the Sites section, select Websites, then New Website, and choose either a blank canvas or a pre-built template.</li>
              <li><strong className="text-[#1A2236]">Set up your site-wide settings:</strong> Configure your primary brand color, logo, default fonts, and favicon before editing individual pages.</li>
              <li><strong className="text-[#1A2236]">Edit the homepage:</strong> Click into any section to edit text, images, or layout. The editor supports independent editing for mobile and desktop layouts.</li>
              <li><strong className="text-[#1A2236]">Connect a contact form:</strong> Add a form element and either build a new form or select an existing one. Every field maps to the CRM automatically.</li>
              <li><strong className="text-[#1A2236]">Configure per-page SEO settings:</strong> For every page, open the SEO tab and set a unique title tag, meta description, and Open Graph image.</li>
              <li><strong className="text-[#1A2236]">Connect your custom domain:</strong> Under Domains, add your domain and update DNS records to point to GoHighLevel's hosting.</li>
              <li><strong className="text-[#1A2236]">Test the full page:</strong> View it on an actual mobile device and submit a test form entry to confirm the CRM receives it correctly.</li>
            </ol>

            {/* Section 5: SEO Features */}
            <h2 id="seo-features" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What SEO Features Does the GoHighLevel Website Builder Include?
            </h2>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">What the GoHighLevel website builder's SEO settings include</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Per-page title tag and meta description fields</li>
                <li>Open Graph image configuration for social sharing</li>
                <li>Canonical URL configuration</li>
                <li>Automatic mobile responsiveness</li>
                <li>Fast page load times from managed CDN</li>
              </ul>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">What the GoHighLevel website builder's SEO settings do not include</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Readability scoring</li>
                <li>Automated internal linking suggestions</li>
                <li>XML sitemap customisation at a granular level</li>
                <li>Schema markup templates for every content type</li>
              </ul>
            </div>

            {/* Section 6: Ecommerce */}
            <h2 id="ecommerce" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Can the GoHighLevel Website Builder Run an Online Store?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes. The GoHighLevel website builder includes a dedicated ecommerce store builder, using the same drag-and-drop, no-code approach as the rest of the platform. GoHighLevel's own marketing material states a store can be built and launched in as little as 30 minutes, though this figure should be treated as a best-case estimate.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">What the GoHighLevel website builder's ecommerce features include</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Customisable store templates</li>
                <li>Secure payment integration</li>
                <li>Inventory management</li>
                <li>Order tracking</li>
                <li>Automatic tax calculation</li>
                <li>Mobile-optimised store design</li>
                <li>Multi-currency and multilingual support</li>
              </ul>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Who should use the GoHighLevel website builder's store, and who should not</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The GoHighLevel website builder's ecommerce features are well suited to a service business selling a small number of digital products, physical add-ons, or simple merchandise alongside its core service offering. It is not built to compete with a dedicated ecommerce platform like Shopify for a large product catalogue, complex variant management, or high-volume order processing.
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
              For a service business publishing occasional articles to support local SEO, a handful of posts per month covering service-area topics or frequently asked questions, the GoHighLevel website builder's blog feature is sufficient and keeps everything inside one system. For a content marketing operation publishing 50 or more articles per month, managing multiple freelance contributors, running an editorial calendar, or building large-scale programmatic SEO content, WordPress's content management infrastructure remains meaningfully more capable.
            </p>

            {/* Section 8: Vs WordPress */}
            <h2 id="vs-wordpress" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How Does the GoHighLevel Website Builder Compare to WordPress?
            </h2>

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

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST VERDICT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Many businesses end up running both platforms deliberately, not as a compromise but as a genuine strategy: WordPress for a high-volume, SEO-focused blog and content hub, and the GoHighLevel website builder for the core lead-generation pages, booking flow, and everything connected to CRM and automation. This combination lets WordPress build organic search authority while GoHighLevel converts and nurtures the traffic that authority generates.
              </p>
            </div>

            {/* Section 9: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. What Are the Limitations of the GoHighLevel Website Builder?
            </h2>

            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">No automated WordPress import:</strong> Every page must be manually rebuilt.</li>
              <li><strong className="text-[#1A2236]">Template design ceiling:</strong> Functional but not the most visually refined option available.</li>
              <li><strong className="text-[#1A2236]">SEO tooling depth:</strong> Covers fundamentals but lacks depth of dedicated WordPress SEO plugins.</li>
              <li><strong className="text-[#1A2236]">No full source-code access:</strong> Custom CSS/JS/HTML supported but within platform structure.</li>
              <li><strong className="text-[#1A2236]">Ecommerce ceiling:</strong> Suits small to moderate catalogues but not large-scale ecommerce.</li>
            </ul>

            {/* Section 10: Migrate WordPress */}
            <h2 id="migrate-wordpress" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. How Do You Migrate an Existing WordPress Site to the GoHighLevel Website Builder?
            </h2>

            <ol className="space-y-1 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Audit your existing WordPress site's page and content inventory:</strong> List every page, its purpose, and the content it contains.</li>
              <li><strong className="text-[#1A2236]">Select the closest-matching GoHighLevel website builder template:</strong> Choose a template that most closely resembles your existing site's structure.</li>
              <li><strong className="text-[#1A2236]">Rebuild each page manually inside the GoHighLevel website builder's editor:</strong> Recreate your content, images, and layout page by page.</li>
              <li><strong className="text-[#1A2236]">Recreate your forms and connect them to CRM workflows:</strong> Rebuild lead capture forms and connect them to the appropriate CRM workflow.</li>
              <li><strong className="text-[#1A2236]">Update your domain's DNS to point to GoHighLevel hosting:</strong> Change your domain's DNS records to point to GoHighLevel.</li>
              <li><strong className="text-[#1A2236]">Set up 301 redirects for any changed URLs:</strong> Configure 301 redirects to preserve existing search rankings.</li>
              <li><strong className="text-[#1A2236]">Keep the WordPress site accessible until the new site is fully verified:</strong> Do not cancel WordPress hosting until you have confirmed everything is working correctly.</li>
            </ol>

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

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-center text-white">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED YOUR GOHIGHLEVEL WEBSITE BUILT OR MIGRATED PROPERLY?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4 max-w-md mx-auto">
                GHL Scale Up builds niche-specific websites inside the GoHighLevel website builder, connects every form to the correct CRM workflow, configures SEO settings properly, and handles full WordPress-to-GoHighLevel migrations including 301 redirects.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
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

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to build or migrate your website on GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up builds niche-specific websites inside the GoHighLevel website builder, connects every form to the correct CRM workflow, configures SEO settings properly, and handles full WordPress-to-GoHighLevel migrations.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency founded by Aryan Trivedi. Based in India, we serve agencies and SaaS founders across 6 countries with 200+ GoHighLevel builds delivered, including website builds and WordPress migrations. This guide reflects direct experience building and migrating real client websites inside the GoHighLevel website builder.
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
                  <div className="text-xs text-white/50">Website Builder Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need a Website Built or Migrated?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We build niche-specific websites inside GoHighLevel and handle full WordPress-to-GoHighLevel migrations including 301 redirects.</p>
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