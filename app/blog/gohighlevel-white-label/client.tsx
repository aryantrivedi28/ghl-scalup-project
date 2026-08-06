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
  Award,
  Star,
  AlertTriangle,
  Server,
  Shield,
  Globe,
  Mail,
  Smartphone,
  HelpCircle,
  FileText,
  Layout,
  Link2,
  RefreshCw,
  Cloud,
  Lock,
  Info,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  Rocket
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelWhiteLabelClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-includes',
        'difference',
        'which-plan',
        'setup-steps',
        'saas-business',
        'troubleshooting',
        'limitations',
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
      q: "What is GoHighLevel white label?",
      a: "GoHighLevel white label means replacing all GoHighLevel branding in the platform with your own: your logo, your colour scheme, your custom domain, and your app name. To your clients, the software appears to be your proprietary product and GoHighLevel is invisible. Basic GoHighLevel white label (branded dashboard and custom domain) is available on the Unlimited plan at $297/month. Adding automated billing and client provisioning (SaaS Mode) requires the Agency Pro plan at $497/month."
    },
    {
      q: "Which GoHighLevel plan is required for white label?",
      a: "Basic GoHighLevel white label branding, custom domain, logo, brand colours, and branded notifications, starts on the Unlimited plan at $297/month. Full SaaS Mode, which adds automated Stripe billing, the SaaS Configurator for pricing tiers, self-service sign-up, and the white-label mobile app add-on, requires the Agency Pro plan at $497/month."
    },
    {
      q: "What is the CNAME target for GoHighLevel white label domain setup?",
      a: "As of 2026, GoHighLevel's official support documentation lists the white label domain CNAME target as whitelabel.ludicrous.cloud for the desktop web app. In your DNS provider, create a CNAME record with your chosen subdomain as the host (typically 'app') pointing to this target. If you use Cloudflare, set the record to DNS Only (grey cloud), not proxied. GoHighLevel auto-provisions an SSL certificate within roughly 15 to 30 minutes of correct DNS propagation. Since vendor infrastructure can change, verify the current target inside your own Agency Settings, White Label Domain screen, which always shows the correct value for your account."
    },
    {
      q: "How long does GoHighLevel white label setup take?",
      a: "The technical configuration, CNAME setup, logo upload, brand colours, and branded notifications, takes 2 to 4 hours for someone following a clear process. DNS propagation for the custom domain can take 15 minutes to several hours depending on your registrar, and SSL is auto-provisioned within roughly 15 to 30 minutes after DNS propagates."
    },
    {
      q: "Can my clients tell they are using GoHighLevel under my white label?",
      a: "On the web platform with GoHighLevel white label configured, clients see only your branding, no GoHighLevel branding appears in the interface. However, clients who have previously used GoHighLevel may recognise the interface layout, since the feature set and navigation are identical. The white-label mobile app add-on can reduce this recognition risk, though you should verify the current state of mobile app branding with GoHighLevel, as sources conflict on how completely the mobile app is white-labelled in 2026."
    },
    {
      q: "Why is my GoHighLevel white label domain not working?",
      a: "The most common causes are DNS not yet propagated, an incorrect CNAME target, a conflicting A record on the same subdomain blocking SSL, or, for Cloudflare users, the record being proxied (orange cloud) instead of DNS Only (grey cloud). Confirm the CNAME points to GoHighLevel's target, remove any conflicting records, set Cloudflare to DNS Only, and allow time for propagation and SSL provisioning."
    },
    {
      q: "Do I need Agency Pro just to brand GoHighLevel as my own?",
      a: "No. Basic GoHighLevel white label branding is available on the Unlimited plan at $297/month. You only need the Agency Pro plan at $497/month when you want to add SaaS Mode, automated client billing, pricing tiers, and self-service sign-up, on top of the branding."
    },
    {
      q: "Can GHL Scale Up set up GoHighLevel white label for me?",
      a: "Yes. GHL Scale Up configures complete GoHighLevel white label setups, including custom domain, DNS and SSL, logo and brand colours, branded notifications, onboarding snapshot, and offboarding workflows. Most builds go live in 5 to 7 business days. Book a free strategy call at ghlscaleup.com/contact-us."
    },
    {
      q: "What is the difference between GoHighLevel white label and SaaS Mode?",
      a: "GoHighLevel white label makes your dashboard look like your product. GoHighLevel SaaS Mode makes your billing, onboarding, and provisioning automated. You can run GoHighLevel white label without SaaS Mode, but you will be creating sub-accounts and invoicing clients manually. Most agencies start on the Unlimited plan ($297) for branding, then upgrade to Agency Pro ($497) once they have 8 to 10 clients and want the billing and onboarding automated."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-includes', title: '1. What Does GoHighLevel White Label Actually Include?' },
    { id: 'difference', title: '2. What Is the Difference Between White Label and SaaS Mode?' },
    { id: 'which-plan', title: '3. Which Plan Do You Need for White Label?' },
    { id: 'setup-steps', title: '4. How Do You Set Up GoHighLevel White Label? (Step-by-Step)' },
    { id: 'saas-business', title: '5. How Do You Turn White Label Into a SaaS Business?' },
    { id: 'troubleshooting', title: '6. How Do You Troubleshoot Domain and SSL Problems?' },
    { id: 'limitations', title: '7. What Are the Limitations of GoHighLevel White Label?' },
    { id: 'common-mistakes', title: '8. What White Label Mistakes Should You Avoid?' },
    { id: 'faq', title: '9. Frequently Asked Questions' },
  ];

  const whiteLabelFeatures = [
    { feature: 'Custom login domain (app.youragency.com)', unlimited: 'Yes', agencyPro: 'Yes' },
    { feature: 'Your logo and brand colours throughout the dashboard', unlimited: 'Yes', agencyPro: 'Yes' },
    { feature: 'Branded support email and chat name', unlimited: 'Yes', agencyPro: 'Yes' },
    { feature: 'Branded email notifications to clients', unlimited: 'Yes', agencyPro: 'Yes' },
    { feature: 'Removal of GoHighLevel branding from the web interface', unlimited: 'Yes', agencyPro: 'Yes' },
    { feature: 'Automated client billing via Stripe', unlimited: 'No — requires SaaS Mode (Agency Pro)', agencyPro: 'Yes' },
    { feature: 'Self-service client sign-up', unlimited: 'No — requires SaaS Mode (Agency Pro)', agencyPro: 'Yes' },
    { feature: 'White-label mobile app (iOS + Android)', unlimited: 'Add-on on Agency Pro (see Section 7)', agencyPro: 'Add-on' },
  ];

  const setupPrerequisites = [
    'Your logo (a PNG file with a see-through background works best, ideally at least 400 pixels wide)',
    'Your brand colours, written as "hex codes" (a hex code is just a 6-character code like #1C2E4A that tells the computer your exact shade of blue)',
    'The email address you want clients to see when the system emails them',
    'The web address you want clients to log in at, usually something like app.youragency.com'
  ];

  const troubleshootingIssues = [
    { 
      issue: 'The GoHighLevel white label domain is not loading',
      fix: 'Confirm your subdomain\'s CNAME points to the correct target (whitelabel.ludicrous.cloud per GoHighLevel\'s current docs) and that DNS has propagated, which can take up to 30 minutes and occasionally several hours. You can check propagation status at a tool like dnschecker.org by looking for your CNAME record to show the GoHighLevel target.'
    },
    { 
      issue: 'The SSL certificate is not provisioning or the site shows "Your connection is not private"',
      fix: 'This usually means the SSL certificate has not been issued yet, or a conflicting DNS record is blocking it. Confirm you do not have both an A record and a CNAME for the same subdomain, since that conflict prevents SSL from provisioning. GoHighLevel supports TLS 1.2 and 1.3 only, so an outdated browser can also trigger SSL errors.'
    },
    { 
      issue: 'Cloudflare users: the domain works but SSL keeps failing',
      fix: 'Set the CNAME record to DNS Only (grey cloud) rather than Proxied (orange cloud). GoHighLevel handles its own SSL, and Cloudflare\'s proxy causes certificate conflicts that block provisioning. This is one of the most common single causes of GoHighLevel white label SSL failures.'
    },
    { 
      issue: 'The white label settings are not applying across sub-accounts',
      fix: 'Confirm you configured the white label domain at the Agency level, not inside an individual sub-account. The white-label domain must be set in Agency Settings to apply across all sub-accounts. Sub-account domain settings control funnel and website URLs, not dashboard access.'
    }
  ];

  const limitations = [
    { 
      limitation: 'Interface recognition',
      description: 'Clients who have previously used GoHighLevel may recognise the interface layout, since the features and navigation are identical even when the branding is yours.'
    },
    { 
      limitation: 'Mobile app branding',
      description: 'The white-label mobile app is an add-on on the Agency Pro plan (commonly cited around $49/month). Note that some 2026 third-party reports state the mobile app still surfaces GoHighLevel branding in places, so if a fully branded app is essential to you, verify the current state of the mobile app white-labelling directly with GoHighLevel before promising it to clients. We flag this as an item to confirm rather than state definitively, because sources conflict.'
    },
    { 
      limitation: 'Root domain not recommended',
      description: 'GoHighLevel white label should be configured on a subdomain (app.youragency.com), not your root domain, as covered in Section 8. Some DNS providers also do not support root-domain CNAMEs.'
    },
    { 
      limitation: 'Same domain cannot serve multiple sub-accounts',
      description: 'A given white label domain maps to one configuration; you cannot attach the same domain to multiple sub-accounts.'
    },
    { 
      limitation: 'Branding only, not the business model',
      description: 'White label alone does not give you automated billing or self-service sign-up. That requires SaaS Mode on Agency Pro, as covered in Section 5.'
    }
  ];

  const mistakesList = [
    { 
      mistake: 'Using your root domain instead of a subdomain',
      fix: 'Configuring GoHighLevel white label on youragency.com instead of app.youragency.com means that any GoHighLevel-side issue can affect your entire main domain. Always use a subdomain, with "app", "platform", or "crm" as the prefix.'
    },
    { 
      mistake: 'Enabling SaaS Mode before building your onboarding snapshot',
      fix: 'If you activate SaaS Mode and connect Stripe before your snapshot is ready, the first client who pays receives a blank sub-account. They experience your platform as an empty dashboard and question what they are paying for. Build and test your snapshot first, because the sign-up moment determines whether they stay or cancel within 30 days.'
    },
    { 
      mistake: 'Building no offboarding process',
      fix: 'GoHighLevel automates onboarding when a client pays but does not automate offboarding when they cancel. A client whose Stripe subscription lapses keeps dashboard access until you manually suspend the sub-account. Build a workflow triggered by the Stripe cancellation webhook that alerts you and suspends the sub-account within 24 hours.'
    }
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
          <span className="text-[#1A2236] font-medium">GoHighLevel White Label: Setup, Pricing & How It Works</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL White Label</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel SaaS Mode</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel White Label: How to Brand GoHighLevel as Your Own
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
              <div className="text-xs text-white/50">GoHighLevel specialists, 200+ builds delivered · Updated July 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            GoHighLevel white label is one of the most-searched and most-misunderstood features in the platform. 
            At its core, GoHighLevel white label is the branding layer: it lets you replace every visible trace 
            of GoHighLevel with your own brand, so your clients log into your domain, see your logo, and never know 
            GoHighLevel is the technology underneath.
          </p>
          
          <p className="text-sm text-white/50 leading-relaxed">
            New to the platform? Start here: <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete 2026 Guide →</Link>
          </p>

          {/* Direct Answer Box */}
          <div className="bg-[rgba(14,155,240,0.1)] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#0E9BF0]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E9BF0]">Direct Answer</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              GoHighLevel white label means your clients log in to your brand, your logo, your domain, your name, 
              with GoHighLevel invisible underneath. Basic GoHighLevel white label (custom login domain, logo, brand 
              colours, and branded email notifications) is available on the Unlimited plan at <strong className="text-[#F8D000]">$297/month</strong>. 
              The setup takes 2 to 4 hours plus DNS propagation time. You point a subdomain (for example app.youragency.com) 
              to GoHighLevel using a CNAME record, GoHighLevel auto-provisions an SSL certificate within roughly 15 to 30 
              minutes of DNS propagating, and you upload your logo and brand colours in Agency Settings.
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
                  '1. What Does GoHighLevel White Label Actually Include?',
                  '2. What Is the Difference Between White Label and SaaS Mode?',
                  '3. Which Plan Do You Need for White Label?',
                  '4. How Do You Set Up White Label? (Step-by-Step)',
                  '5. How Do You Turn White Label Into a SaaS Business?',
                  '6. How Do You Troubleshoot Domain and SSL Problems?',
                  '7. What Are the Limitations of White Label?',
                  '8. What White Label Mistakes Should You Avoid?',
                  '9. Frequently Asked Questions'
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

            {/* Section 1: What Does White Label Include */}
            <h2 id="what-includes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Does GoHighLevel White Label Actually Include?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel white label means removing every visible trace of the GoHighLevel brand from the platform 
              and replacing it with yours. Your clients log in at your domain, see your logo and colours, receive emails 
              from your address, and have no indication GoHighLevel is the technology underneath. To them, you are a 
              software company.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The natural question is exactly what you can and cannot brand. GoHighLevel white label branding covers 
              your custom login domain, your logo and brand colours across the entire dashboard, your support email and 
              chat name, and branded email notifications sent to clients. It removes GoHighLevel's name and logo from 
              the web interface entirely.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GoHighLevel White Label Includes</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">On the Unlimited Plan ($297/mo)?</th>
                  </tr>
                </thead>
                <tbody>
                  {whiteLabelFeatures.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                      <td className="py-3 px-3 text-[#25C97D]">{item.unlimited}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 2: Difference Between White Label and SaaS Mode */}
            <h2 id="difference" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Is the Difference Between GoHighLevel White Label and SaaS Mode?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Confusing these two is the single most common mistake agencies make when choosing a plan, so it is worth 
              stating the distinction precisely before you spend anything.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE KEY DISTINCTION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>GoHighLevel white label makes your dashboard look like your product.</strong> 
                GoHighLevel SaaS Mode makes your billing, onboarding, and provisioning automated. You can run 
                GoHighLevel white label without SaaS Mode, but you will be creating sub-accounts and invoicing 
                clients manually. Most agencies start on the Unlimited plan ($297) for branding, then upgrade to 
                Agency Pro ($497) once they have 8 to 10 clients and want the billing and onboarding automated.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In short, GoHighLevel white label is the branding layer and GoHighLevel SaaS Mode is the business-model 
              layer built on top of it. This blog covers the branding layer in full. The business-model layer, automated 
              billing, pricing tiers, margins, and self-service sign-up, is covered in the two guides linked in Section 5, 
              so this page stays focused on getting your branding and technical setup right.
            </p>

            {/* Section 3: Which Plan Do You Need */}
            <h2 id="which-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Which Plan Do You Need for GoHighLevel White Label?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel white label branding covered in this guide is available on the Unlimited plan at 
              $297/month. You do not need the more expensive Agency Pro plan for branding alone. You only need Agency Pro 
              ($497/month) when you want to add the automated SaaS business layer on top.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#25C97D] mb-2">Choose the Unlimited plan ($297/month) for GoHighLevel white label if:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You want white-label branding, your domain, logo, and colours, applied immediately.</li>
                  <li>You have fewer than 8 to 10 clients and are comfortable creating sub-accounts manually.</li>
                  <li>You bill clients externally through your own Stripe invoices, PayPal, or another system.</li>
                  <li>You are testing the agency model before committing to the higher plan cost.</li>
                </ul>
              </div>
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4">
                <h3 className="text-sm font-bold text-[#0E9BF0] mb-2">Consider upgrading to Agency Pro ($497/month) when:</h3>
                <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                  <li>You want clients to sign up and pay through your branded platform automatically.</li>
                  <li>You are building a self-serve SaaS offer rather than a done-for-you agency service.</li>
                  <li>You have 10+ clients and want billing and sub-account creation fully automated.</li>
                  <li>You want tiered pricing plans with features gated per tier.</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                📖 <strong>Full Plan Comparison:</strong> <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
              </p>
            </div>

            {/* Section 4: Setup Steps */}
            <h2 id="setup-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How Do You Set Up GoHighLevel White Label? (Step-by-Step)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Think of this section as putting your own brand's sign on a shop that GoHighLevel built. The shop already 
              works perfectly. You are just making sure that when your clients walk in, they see your name on the door, 
              your colours on the walls, and your address on the map, not GoHighLevel's. Here is how you do that, one step 
              at a time. No technical background needed.
            </p>

            {/* Prerequisites */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <h4 className="text-sm font-bold text-[#1A2236] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
                What to Have Ready Before You Start
              </h4>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
                Keep these four things handy so you are not hunting for them mid-setup:
              </p>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                {setupPrerequisites.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Make sure you are in the right place (Agency View)</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">
                  Log into GoHighLevel. Look at the top-left corner and click your agency's name. GoHighLevel has two levels. 
                  The Agency level is the master control panel for your whole business, and the Sub-account level is one individual 
                  client's workspace. White label branding has to be set at the Agency level, because you are branding the whole 
                  platform, not just one client.
                </p>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9 mt-1">
                  Once you have confirmed you are in Agency View, click Settings, then Company, in the menu on the left. This is 
                  your branding control room.
                </p>
                <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-3 mt-2">
                  <p className="text-sm text-[#1A2236] leading-relaxed">
                    <strong>Why this matters:</strong> a lot of people accidentally do this inside one client's sub-account, then 
                    wonder why the branding does not show up everywhere. Starting in the right place saves you that headache.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Add your logo and brand colours</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">
                  Inside Company Settings, find the spot to upload your logo and upload it there (a transparent PNG around 300x60 
                  pixels looks cleanest in the top corner). Then enter your primary brand colour using its hex code.
                </p>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9 mt-1">
                  The moment you save, GoHighLevel repaints the buttons, highlights, and accents across the whole dashboard in your 
                  colour. Your clients will now see your brand instead of GoHighLevel's from the very first screen. This step is the 
                  fun one, it is instant and visual, so you will immediately see it working.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Point your web address to GoHighLevel (the domain step)</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">
                  This is the step that sounds technical but is really just a copy-and-paste job. Stay with me.
                </p>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9 mt-1">
                  Right now, your clients would log in at a GoHighLevel web address. You want them logging in at your address instead, 
                  something like app.youragency.com. To make that happen, you have to tell the internet: "when someone visits 
                  app.youragency.com, send them to GoHighLevel's system." You do that with something called a CNAME record.
                </p>
                <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-3 mt-2">
                  <p className="text-sm text-[#1A2236] leading-relaxed">
                    <strong>Here is the plain-English version of a CNAME record:</strong> it is like a mail-forwarding instruction. 
                    You are telling the post office (the internet) to forward anyone who shows up at your address over to GoHighLevel's 
                    building, while the visitor still sees your address the whole time.
                  </p>
                </div>
                <p className="text-sm font-semibold text-[#1A2236] ml-9 mt-2">How to do it:</p>
                <ol className="text-sm text-[#5C6880] leading-relaxed ml-9 list-decimal list-inside space-y-1">
                  <li>In GoHighLevel, go to Settings, then Agency Settings, then White Label Domain. Type in the web address you want, like app.youragency.com.</li>
                  <li>Now open a second browser tab and log into wherever you bought your domain name. GoDaddy, Namecheap, or Cloudflare are the common ones. This is the same account you used when you bought youragency.com.</li>
                  <li>Find the section called DNS or DNS Records. Click to add a new record.</li>
                  <li>Choose the type CNAME. In the "Host" or "Name" box, type the prefix of your address, usually just "app". In the "Value" or "Points to" box, type GoHighLevel's forwarding address: <strong className="text-[#0E9BF0]">whitelabel.ludicrous.cloud</strong></li>
                  <li>Save it. Then go back to the GoHighLevel tab and click verify.</li>
                </ol>

                <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-3 mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Cloud className="w-4 h-4 text-[#DC3545]" />
                    <span className="text-sm font-bold text-[#DC3545]">IF YOU USE CLOUDFLARE, READ THIS ONE CAREFULLY</span>
                  </div>
                  <p className="text-sm text-[#1A2236] leading-relaxed">
                    Next to the record you just created, you will see a little cloud icon. <strong>Make sure it is grey ("DNS only"), 
                    not orange ("Proxied").</strong> Click it to toggle if needed. GoHighLevel handles its own security certificate, 
                    and the orange cloud gets in the way of that. This one toggle is the single most common reason setups break, so 
                    if you are on Cloudflare, double-check it is grey.
                  </p>
                </div>

                <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-3 mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-4 h-4 text-[#0E9BF0]" />
                    <span className="text-sm font-bold text-[#0E9BF0]">ABOUT THE PADLOCK ON YOUR ADDRESS (SSL)</span>
                  </div>
                  <p className="text-sm text-[#1A2236] leading-relaxed">
                    You know how secure websites show a little padlock and start with https? That padlock comes from something called 
                    an SSL certificate. The good news: you do not have to do anything to get it. GoHighLevel creates it for you 
                    automatically, usually within about 15 to 30 minutes after you save your CNAME record. So after Step 3, just wait 
                    a bit. If the padlock is not there immediately, it is still being set up. <strong>One thing to avoid:</strong> do 
                    not add both an A record and a CNAME for the same address, as that conflict stops the padlock from ever appearing.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Make your emails come from you, not GoHighLevel</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">
                  Your clients will get automatic emails from the system, things like password resets and notifications. By default, 
                  those could show up as coming from GoHighLevel, which breaks the illusion instantly.
                </p>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9 mt-1">
                  To fix that, go to Settings, then Email Services, and set your support email address and the "from" name. Now every 
                  automatic email your clients receive says it is from you. Small step, big impact, nothing shatters the "this is my 
                  own software" feeling faster than a client getting an email signed by a company they have never heard of.
                </p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Test it the way a client would</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">
                  Do not skip this, it is the step that catches problems before your clients do. Open a private or incognito browser 
                  window. This makes sure you are seeing the site fresh, exactly like a stranger would, not with your own login remembered.
                </p>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9 mt-1">
                  Go to your new address, app.youragency.com, and check three things. Is your logo on the login page? Are your colours 
                  showing? Does the web address show your domain with the padlock? Then create a test sub-account and log into it through 
                  your address to walk through the whole experience end to end, just like a real client would on day one. If all three 
                  look right, GoHighLevel is now invisible, and your brand is front and centre.
                </p>
              </div>
            </div>

            {/* CNAME Quick Reference */}
            <div className="bg-[#1C2E4A] rounded-xl p-4 my-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">GOHIGHLEVEL WHITE LABEL CNAME QUICK REFERENCE (FOR STEP 3)</span>
              </div>
              <div className="space-y-1 text-sm text-white/80 leading-relaxed">
                <p><strong>CNAME target:</strong> whitelabel.ludicrous.cloud (per GoHighLevel official support docs, 2026)</p>
                <p><strong>Record type:</strong> CNAME</p>
                <p><strong>Host / Name:</strong> app (or your chosen prefix)</p>
                <p><strong>Cloudflare users:</strong> set the record to DNS Only (grey cloud), NOT proxied (orange cloud), or the padlock will not appear</p>
                <p><strong>SSL padlock:</strong> auto-provisioned by GoHighLevel, typically within 15 to 30 minutes of DNS propagating</p>
                <p><strong>Avoid:</strong> adding both an A record and a CNAME for the same subdomain, which blocks the padlock from provisioning</p>
              </div>
            </div>

            {/* Section 5: Turn White Label Into SaaS Business */}
            <h2 id="saas-business" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Turn GoHighLevel White Label Into a SaaS Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once your GoHighLevel white label branding is configured, the next step for many agencies is to turn that branded 
              platform into an automated software business, where clients sign up, pay, and get provisioned automatically. That 
              capability is called SaaS Mode, and it is a distinct layer that sits on top of the white label branding covered in 
              this guide.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Because SaaS Mode is a substantial topic in its own right, covering the SaaS Configurator, Stripe billing, pricing 
              tiers, snapshots, margins, and offboarding, we cover it in full in two dedicated guides rather than compressing it here:
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong>THE FULL SETUP:</strong> <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup: The Complete 2026 Guide</Link> 
                — the exact 10-step build, prerequisites, troubleshooting, and go-live checklist
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-1">
                <strong>THE BUSINESS MODEL:</strong> <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline">White Label SaaS: The Complete 2026 Guide</Link> 
                — the business model, revenue models, pricing strategy, and margin calculator
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In short: use this guide to get your GoHighLevel white label branding right, then follow those two guides to turn it 
              into a billing, self-service SaaS business. You also need a tested snapshot so every new client gets a fully configured 
              account on sign-up:
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong>BUILD YOUR SNAPSHOT:</strong> <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
              </p>
            </div>

            {/* Section 6: Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do You Troubleshoot GoHighLevel White Label Domain and SSL Problems?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Domain and SSL issues cause the majority of GoHighLevel white label setup problems. These are the most common, 
              with the fix for each.
            </p>

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

            {/* Section 7: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Are the Limitations of GoHighLevel White Label?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Being direct about GoHighLevel white label limitations prevents surprises after you have already onboarded clients.
            </p>

            <div className="space-y-3 mb-6">
              {limitations.map((item, idx) => (
                <div key={idx} className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgba(220,53,69,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#DC3545]">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A2236]">{item.limitation}</h4>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 8: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. What GoHighLevel White Label Mistakes Should You Avoid?
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

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                📖 <strong>Offboarding Automation:</strong> <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE SET GOHIGHLEVEL WHITE LABEL UP FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                <strong>GHL Scale Up</strong> configures white-label GoHighLevel setups as a core service: custom domain, DNS and SSL, 
                branded notifications, onboarding snapshot, and offboarding workflows. Most builds go live in 5 to 7 business days. 
                See <strong>real GoHighLevel results and case studies</strong> at <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">ghlscaleup.com/case-studies</Link>.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all text-sm">
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 9: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              9. Frequently Asked Questions About GoHighLevel White Label
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

            {/* Ready to Launch CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to brand GoHighLevel as your own?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up configures your white-label domain, SSL, branding, and notifications, tested before handover. 
                  200+ builds delivered across 6 countries.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* About GHL Scale Up */}
            <div className="mt-10 pt-6 border-t border-[#DDE1E9]">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#1A2236] mb-2">About GHL Scale Up</h3>
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  <strong>GHL Scale Up</strong> is the #1 GoHighLevel expert agency, founded by Aryan Trivedi and based in India, 
                  serving businesses across 6 countries with 200+ builds delivered and 5+ years of experience, including white-label 
                  setups across real estate, healthcare, agencies, and home services. GoHighLevel white label technical steps in 
                  this guide were checked against GoHighLevel's official support documentation as of July 2026.
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
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup: The Complete 2026 Guide →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">White Label SaaS: The Complete 2026 Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Setup Service →</Link>
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
                5+ years GHL experience · 200+ systems built including white-label SaaS setups across real estate, 
                healthcare, agencies, and home services globally. All technical steps verified against GoHighLevel's 
                official documentation as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2">
              <div className="text-sm font-bold text-white mb-2">Want to Brand GoHighLevel as Your Own?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We configure white-label GHL setups. 5–7 business day delivery.</p>
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