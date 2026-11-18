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
  Shield,
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Rocket,
  ListChecks,
  Settings,
  Users,
  UserCheck,
  DollarSign,
  CreditCard,
  Globe,
  Layers,
  Workflow,
  Mail,
  ShoppingCart,
  TestTube,
  Handshake,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function DFYSaaSModeClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'what-dfy-means',
      'what-dfy-configures',
      'saas-mode-config',
      'saas-plans',
      'stripe-billing',
      'white-label',
      'snapshots',
      'onboarding',
      'email-phone-usage',
      'workflow-account',
      'testing-handover',
      'how-ghl-scale-up-helps',
      'supporting-agencies',
      'how-setup-helps',
      'diy-vs-dfy',
      'what-to-look-for',
      'faq',
      'ready-to-launch',
    ];

    const handleScroll = () => {
      let currentSection = sections[0];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 180) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveId(currentSection);

      const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingProjectHelp(heroBottom < 0);
      }
    };

    handleScroll();
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
      q: 'What is GoHighLevel SaaS Mode?',
      a: "It's a HighLevel feature that lets an agency sell the platform as its own branded software, with subscription billing and automatic account creation. As of November 2026 it needs HighLevel's top agency plan."
    },
    {
      q: 'What does a Done-For-You GoHighLevel SaaS setup include?',
      a: 'It depends on the agreement. Typically it covers the plans, Stripe connection, branding and domain, a snapshot, onboarding, usage billing and testing. Always ask for the scope in writing.'
    },
    {
      q: 'Can an agency sell GoHighLevel under its own brand?',
      a: 'Yes. White-labelling lets you present the platform under your own name and domain. What your plan includes decides how far the branding goes.'
    },
    {
      q: 'Do I need Stripe for GoHighLevel SaaS Mode?',
      a: "Yes, for the standard setup. Customers pay through your Stripe account. HighLevel has more than one billing setup, so check which you're using."
    },
    {
      q: 'Can GoHighLevel create customer accounts automatically after payment?',
      a: "Yes, SaaS Mode can create a customer's account and load your snapshot when they subscribe. It still needs to be set up properly and tested."
    },
    {
      q: 'What are GoHighLevel SaaS snapshots?',
      a: "A snapshot is a saved copy of an account's setup, such as pipelines, forms, automations and templates. It copies the setup, not a customer's data."
    },
    {
      q: 'Can I create multiple SaaS pricing plans?',
      a: 'Yes. You can build different plans with their own prices, features and snapshots.'
    },
    {
      q: 'Do I need technical knowledge to launch SaaS Mode?',
      a: 'Some, if you set it up yourself, since it involves billing, domains, DNS and automation. A done-for-you team can handle much of that for you.'
    },
    {
      q: 'How long does a GoHighLevel SaaS setup take?',
      a: 'It varies with the scope, integrations, how ready your account is, and how much testing is needed. Anyone who gives you a fixed number before seeing your account is guessing.'
    },
    {
      q: 'Can GHL Scale Up configure SaaS Mode for my agency?',
      a: "We help agencies with this, and our SaaS setup service page lists what's usually covered. Contact us and we'll talk through what you need and agree the scope."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-dfy-means', title: 'What Does a Done-For-You GoHighLevel SaaS Setup Actually Mean?' },
    { id: 'what-dfy-configures', title: 'What Does a DFY Team Configure in GoHighLevel SaaS Mode?' },
    { id: 'saas-mode-config', title: 'SaaS Mode and Agency Account Configuration' },
    { id: 'saas-plans', title: 'SaaS Plans and Pricing' },
    { id: 'stripe-billing', title: 'Stripe and Subscription Billing' },
    { id: 'white-label', title: 'White-Label Branding and Custom Domains' },
    { id: 'snapshots', title: 'Snapshots and Customer Account Provisioning' },
    { id: 'onboarding', title: 'Automated Customer Onboarding' },
    { id: 'email-phone-usage', title: 'Email, Phone and Usage-Based Services' },
    { id: 'workflow-account', title: 'Workflow Automation and Account Management' },
    { id: 'testing-handover', title: 'Testing, Quality Assurance and Handover' },
    { id: 'how-ghl-scale-up-helps', title: 'How GHL Scale Up Helps Agencies Launch Their SaaS Infrastructure' },
    { id: 'supporting-agencies', title: 'Supporting Agencies Like Major Marketing in Canada' },
    { id: 'how-setup-helps', title: 'How a Proper SaaS Setup Can Help Your Agency Grow' },
    { id: 'diy-vs-dfy', title: 'DIY Setup vs Hiring a Done-For-You GoHighLevel Team' },
    { id: 'what-to-look-for', title: 'What Should You Look for in a GoHighLevel SaaS Implementation Partner?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'ready-to-launch', title: 'Ready to Launch Your GoHighLevel SaaS Offering?' },
  ];

  const diyDfyTable = [
    { aspect: 'Who does the work', diy: 'You', dfy: 'A specialist team, in your account' },
    { aspect: 'What you spend', diy: 'Your time, plus trial and error', dfy: 'Their fee, plus your time on decisions and review' },
    { aspect: 'Good fit when', diy: 'You have the time and the technical comfort', dfy: "You'd rather spend your time on customers and selling" },
    { aspect: 'Main risk', diy: "Missing a step you didn't know existed", dfy: 'Unclear scope, or not knowing how it was built' },
  ];

  const partnerQuestions = [
    { question: 'What exactly is included?', why: "So you know what you're paying for." },
    { question: 'What is built in our own account?', why: 'You should keep everything if you part ways.' },
    { question: 'Who owns the Stripe connection and the domain?', why: 'They should be yours.' },
    { question: 'How will you test the purchase journey?', why: 'A real test, not a settings checklist.' },
    { question: 'What happens if a problem shows up after handover?', why: "So support isn't a surprise." },
    { question: 'Are third-party subscriptions and usage costs included?', why: 'Platform fees and usage are often separate.' },
    { question: 'What is not included?', why: 'The gaps are where surprises live.' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        href="/book-a-call"
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
          <span className="text-[#1A2236] font-medium">DFY GoHighLevel SaaS Mode Setup</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS Mode</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Done-For-You</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Setup</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            What Does a Done-For-You Team Configure in GoHighLevel SaaS Mode?
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Plan details checked November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              SaaS Mode is a set of tools, not a finished business. A done-for-you (DFY) team can build the technical side. You still need an offer people want, a price that works, and a way to find customers. This article walks through the setup piece by piece so you can decide how much of it you want to do yourself.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Plan details and pricing were checked in November 2026. HighLevel changes plans and prices often, so confirm current details in your account before planning.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book-a-call"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Book a Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#what-dfy-configures"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Nine Areas
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN: SIDEBAR */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="mb-6">
              <ProjectHelpCard />
            </div>

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
                5+ years GHL experience · 200+ systems built globally. We implement GoHighLevel for agencies and service businesses.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

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
          </aside>

          {/* RIGHT COLUMN: BLOG CONTENT */}
          <main className="min-w-0 order-2">

            {/* Mobile TOC */}
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

            {/* Mobile Project Help Card */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Intro */}
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Imagine you run a marketing agency. You already build websites, run lead generation, set up CRMs and manage campaigns for clients. Then you hear that GoHighLevel lets agencies sell their own branded software through something called SaaS Mode.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It sounds like a great idea. Clients pay you every month. They log in to a platform with your name on it. You stop relying only on one-off projects.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              So you get the right plan, open SaaS Mode, and start looking around. And that's when it hits you. Picking a monthly price is the easy part. You also need billing that works, plans that make sense, your own branding, a way for new customers to get an account, a ready-made setup for them to start with, a welcome process, working email and texting, and a way to test it all.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If any of those pieces is off, the customer notices straight away. They pay, and then they can't log in. Or they log in and find an empty account. Or they cancel and keep their access.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              So what does it really take to set up GoHighLevel SaaS Mode properly, and when does it make sense to have a Done-For-You team do it for you? In short: SaaS Mode is a set of tools, not a finished business. A done-for-you (DFY) team can build the technical side. You still need an offer people want, a price that works, and a way to find customers. This article walks through the setup piece by piece so you can decide how much of it you want to do yourself.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full bg-[#F8F9FB]">
                <Image
                  src="/blog/done-for-you-gohighlevel-saas-mode-setup.png"
                  alt="Illustration of a branded software storefront ready for customers"
                  width={1600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Featured image concept: A simple shop-front illustration with a "Your Brand" sign and a payment terminal.</span>
              </div>
            </div>

            {/* Section: What DFY Means */}
            <h2 id="what-dfy-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does a Done-For-You GoHighLevel SaaS Setup Actually Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are two ways to get SaaS Mode ready.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Doing it yourself (DIY).</strong> You read the documentation, connect the payment system, build the plans, make the snapshot, set up the emails, test it, fix what breaks, and test again. It can be done. It just takes time and patience, and it takes someone who is comfortable with settings, domains and automations.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Done-for-you (DFY).</strong> A specialist team does the technical work in your account, based on what you agree with them. You decide what you're selling and to whom. They configure how it all runs.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]"></th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">DIY setup</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Done-for-you setup</th>
                  </tr>
                </thead>
                <tbody>
                  {diyDfyTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.aspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.diy}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.dfy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              One honest note: a DFY team sets up the system. It doesn't find you customers, and it can't promise recurring income. What exactly is included depends on what you agree on at the start, which is why we'll finish this article with questions to ask any provider.
            </p>

            {/* Section: What DFY Configures */}
            <h2 id="what-dfy-configures" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does a DFY Team Configure in GoHighLevel SaaS Mode?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Think of it as building a small shop. The doors, the till, the shelves and the welcome sign all need to work before the first customer walks in. Here are the nine areas, in the order they usually get built.
            </p>

            {/* SaaS Mode Config */}
            <h3 id="saas-mode-config" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">SaaS Mode and Agency Account Configuration</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it is.</strong> The foundation. SaaS Mode is a feature of your agency account that lets you sell the platform as your own software.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What gets configured.</strong> First, someone checks the account you already have: which plan you're on, how things are set up, and what kind of software business you want to run. As of November 2026, SaaS Mode sits on HighLevel's top agency plan, listed in help material as Agency Pro at about $497 a month (some current listings call it Founder). The $297 Unlimited plan allows white-labelling but not the full SaaS Configurator or automatic account creation, so check your plan before you plan anything else.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Why it matters.</strong> Everything else depends on this. If you don't understand how your agency account, your plans and your customers' accounts (called sub-accounts) fit together, you'll end up selling something you can't deliver.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What can go wrong.</strong> Selling subscriptions before the setup is finished, or planning around a feature your plan doesn't include.
            </p>

            {/* SaaS Plans */}
            <h3 id="saas-plans" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">SaaS Plans and Pricing</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it is.</strong> The packages your customers choose from.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What gets configured.</strong> Plan names, monthly and yearly prices, what each plan includes, and any limits. For example, an agency might offer a starter plan for small businesses, a growth plan with more marketing and automation tools, and a premium plan for customers who need advanced features. HighLevel lets you add usage charges on top, which brings us to a point many people miss: your price needs to cover your costs.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              We won't suggest fixed prices here, because the right number depends on your costs, your market, how much support you'll give, and the profit you want. But the plan design is worth getting right early. Plans that are confusing lead people to buy the wrong package. Plans that ignore usage costs can leave you paying for a customer's texts and emails out of your own pocket.
            </p>

            {/* Stripe Billing */}
            <h3 id="stripe-billing" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Stripe and Subscription Billing</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it is.</strong> How you get paid. Customers pay you through your own Stripe account, so Stripe has to be connected properly. Stripe charges its own processing fees, and HighLevel has more than one billing setup, so which one you're using matters. The HighLevel help centre describes two, usually called V1 (Stripe-based) and V2.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What gets configured.</strong> The Stripe connection, the link between each plan and its price, how trials work, and how checkout behaves.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A simple way to picture it.</strong> A customer visits your pricing page, picks a plan, enters their card and clicks pay. Behind the scenes, the payment has to go through, the right subscription has to start, and the right account has to be created for that customer. If one of those steps doesn't connect to the next, you have a customer who has paid and has nothing to log in to.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What to watch.</strong> Failed payments, cancellations and refunds each need a decision about what happens next. Don't assume every billing situation handles itself. Test them.
            </p>

            {/* White Label */}
            <h3 id="white-label" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">White-Label Branding and Custom Domains</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it is.</strong> Making the platform look like yours. Without it, your customers log in to a page that clearly belongs to someone else.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What gets configured.</strong> A custom domain (for example, a login address on your own website), your logo and colours, the login page, and the way the platform presents itself to customers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Why it needs care.</strong> Using a domain involves DNS settings, which are the records that tell the internet where your address points. A small mistake can mean the page doesn't load, or shows a security warning. Brand settings also vary by plan, so check what your plan allows before promising a fully branded experience.
            </p>

            {/* Snapshots */}
            <h3 id="snapshots" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Snapshots and Customer Account Provisioning</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the part that turns a good idea into a repeatable product, so it's worth slowing down.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What a snapshot is.</strong> A snapshot is a saved copy of how an account is set up: its pipelines, forms, calendars, automations, email templates, pages and similar items. It copies the setup, not a customer's data.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What provisioning means.</strong> When someone buys a plan, GoHighLevel can create a new account for them and load your snapshot into it. The new customer starts with a working system, not a blank screen.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">An example.</strong> An agency that serves dentists could build a snapshot with a patient-enquiry pipeline, a lead form, a booking calendar, reminder automations, email templates and a landing page. A dentist who subscribes gets an account that already has all of it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What can go wrong.</strong> If the snapshot is poorly built, every new customer gets a poorly built account. It's also not a substitute for custom work: if a customer's business needs something different, someone still has to do that setup. And snapshots should be tested before you connect them to a paid plan, so you find the mistakes first.
            </p>

            {/* Onboarding */}
            <h3 id="onboarding" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Automated Customer Onboarding</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it is.</strong> What a customer experiences in the hours and days after they pay.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Picture a local business that subscribes to your branded CRM. They should quickly know where to log in, what to do first, how to get help and what their plan includes. A good onboarding process might include a confirmation message, login details, a welcome email, a short getting-started guide, a note to your team that someone has joined, and a follow-up a few days later.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What gets configured.</strong> The welcome messages and the automations that send them, internal alerts for your team, and the hand-over to your support process.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What to be clear about.</strong> Not all of this happens on its own. Some of it is built into HighLevel, and some of it needs workflows that someone has to build. Don't assume a full onboarding journey exists just because SaaS Mode is on.
            </p>

            {/* Email Phone Usage */}
            <h3 id="email-phone-usage" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Email, Phone and Usage-Based Services</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it is.</strong> The sending side of the platform: emails, texts and phone numbers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Why it needs attention before you sign anyone up.</strong> Emails, texts, calls and AI features are charged by use. HighLevel charges your agency wallet for what your customers' accounts use. If you turn on rebilling, the customer's card is charged to fill their own wallet, and you can add a markup on some services. Carrier fees and US text registration (A2P 10DLC) charges are passed on without markup, according to HighLevel's help material. Plan details change, so check the current rules.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What gets configured.</strong> The sending domain and email authentication so your emails reach the inbox, phone number settings, text registration where it's needed, and the rebilling rules. See our guides on <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC fees</Link> and <Link href="/blog/gohighlevel-email-deliverability" className="text-[#0E9BF0] hover:underline">email deliverability</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What can go wrong.</strong> Your plan doesn't automatically include unlimited emails, texts, calls or AI use. If you sell a plan without working out what those cost, a busy customer can quietly eat your margin. A customer account that is still waiting to be verified can also hold up rebilling, so it's worth knowing how verification works.
            </p>

            {/* Workflow Account */}
            <h3 id="workflow-account" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Workflow Automation and Account Management</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What it is.</strong> The automations that save you from doing the same admin again and again.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Examples.</strong> A new-subscription alert to your team, a welcome sequence, a check-in message after a week, a reminder when something needs attention, and a process for failed payments or cancellations.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Be careful here.</strong> Some of these run natively inside HighLevel. Some need extra workflow building. Some need an outside tool to connect to. Cancellation is a good example: you need to decide what happens to a customer's access when they cancel, then set it up deliberately, then test it. Not every part of a subscription's life can be automated in the same way.
            </p>

            {/* Testing Handover */}
            <h3 id="testing-handover" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Testing, Quality Assurance and Handover</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Why a finished setup isn't a working setup.</strong> A list of correct settings doesn't prove the whole journey works. The only way to know is to go through it like a customer would.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A good test follows one path from start to finish:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Choose a plan and check out.</li>
              <li>Pay, and confirm the subscription is created.</li>
              <li>Check the new account appears with the right snapshot.</li>
              <li>Log in through your branded address.</li>
              <li>Check the branding, welcome emails and texts.</li>
              <li>Check onboarding messages and your team's alerts.</li>
              <li>Where it's in scope, try a failed payment and a cancellation.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What a proper handover includes.</strong> You should end up with access to everything, and ownership of your Stripe, domain and account. You should also get notes on how it's configured, an explanation of each plan and workflow, a list of known limitations, a list of third-party tools and their costs, and simple guidance for running it day to day.
            </p>

            {/* How GHL Scale Up Helps */}
            <h2 id="how-ghl-scale-up-helps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How GHL Scale Up Helps Agencies Launch Their SaaS Infrastructure
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              At GHL Scale Up, we help agencies with this implementation work. Based on our <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">SaaS setup service</Link>, the work can cover connecting Stripe, building the plans in the SaaS Configurator, preparing a snapshot for a specific niche, setting up your domain and branding, configuring rebilling, text registration, and onboarding and cancellation flows, plus guidance on pricing and margins. The exact scope for your agency is agreed up front, because every agency starts from a different place.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's how a project usually runs:
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Understand your business.</strong> What are you selling, who to, and how do you want to package it?</li>
              <li><strong className="text-[#1A2236]">Plan the setup.</strong> Choose the account setup, plans, billing, branding, onboarding and what depends on what.</li>
              <li><strong className="text-[#1A2236]">Configure it.</strong> Build the agreed plans, settings, snapshot, workflows and connections.</li>
              <li><strong className="text-[#1A2236]">Test the customer journey.</strong> Go through it from purchase to login to onboarding.</li>
              <li><strong className="text-[#1A2236]">Hand it over.</strong> Give you access, documentation and an explanation, so you can run and grow it.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              We should be clear about what we don't do. We configure the infrastructure. We don't promise customers, revenue or a launch date. Those depend on your offer and your marketing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you'd like to see how this looks in practice, our <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">SaaS setup service page</Link> lays it out, and our <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline">step-by-step SaaS Mode guide</Link> shows the DIY route.
            </p>

            {/* Supporting Agencies */}
            <h2 id="supporting-agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Supporting Agencies Like Major Marketing in Canada
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              We work with agencies, not just individual businesses. One of them is Major Marketing, an agency based in Canada, which has worked with us and shared feedback on our Google Business Profile. You can read their review there, and you can find more on our <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">case studies page</Link>.
            </p>

            {/* How Setup Helps */}
            <h2 id="how-setup-helps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How a Proper SaaS Setup Can Help Your Agency Grow
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A well-built setup can give you some real advantages. None of them is automatic.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A quicker route to launch.</strong> You skip a lot of research and trial and error. We won't promise a fixed timeline, because it depends on your scope and how ready your account is.</li>
              <li><strong className="text-[#1A2236]">More time for customers.</strong> Time spent on settings can go into selling, partnerships and relationships.</li>
              <li><strong className="text-[#1A2236]">A repeatable onboarding.</strong> Good plans, snapshots and workflows mean each new customer starts the same way.</li>
              <li><strong className="text-[#1A2236]">Your own brand.</strong> White-labelling lets you present the platform as yours, within what your plan allows.</li>
              <li><strong className="text-[#1A2236]">A recurring revenue option.</strong> You can package software and services into a subscription. SaaS Mode doesn't guarantee recurring revenue, though. You still need an offer, a price, customers and good support.</li>
              <li><strong className="text-[#1A2236]">Less repetitive admin.</strong> Automation takes care of some of the routine work.</li>
              <li><strong className="text-[#1A2236]">Room to add services.</strong> Software can sit alongside CRM setup, automation, funnels, email and text marketing, and ongoing improvement.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              One more thing to know. SaaS Mode suits customers who buy and use software themselves. If your customers expect a fully done-for-you retainer, a different model may fit better.
            </p>

            {/* DIY vs DFY */}
            <h2 id="diy-vs-dfy" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              DIY Setup vs Hiring a Done-For-You GoHighLevel Team
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              DIY isn't wrong. If you have the time, technical comfort and patience, it can be a good way to learn your own system. These are the common places people get stuck:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Not knowing where to start.</li>
              <li>Plans that don't match the people you're selling to.</li>
              <li>Billing set up in a way that doesn't connect to account creation.</li>
              <li>Domain and branding problems.</li>
              <li>Snapshots that are half-finished or untested.</li>
              <li>Onboarding that stops after the first email.</li>
              <li>Usage costs that nobody worked out.</li>
              <li>Never testing the whole purchase from start to finish.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The real question isn't whether you could do it. It's whether you want to spend your own hours on it, or hand the technical part to a specialist and spend that time on your customers.
            </p>

            {/* What to Look For */}
            <h2 id="what-to-look-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should You Look for in a GoHighLevel SaaS Implementation Partner?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Whoever you hire, a good provider should be able to show real SaaS Mode experience, an understanding of how agencies make money, and knowledge of billing, white-labelling, snapshots, automation and usage costs. They should have a testing process, a clear handover, and clear terms for support after launch.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Ask them these questions:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Question to ask</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {partnerQuestions.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.question}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Also, be honest with yourself about whether you need a DFY service at all. Not every agency does.
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions
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

            {/* Ready to Launch */}
            <h2 id="ready-to-launch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Ready to Launch Your GoHighLevel SaaS Offering?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you're planning your own branded software offering, or you've bought GoHighLevel and got stuck partway through SaaS Mode, a short conversation can help. You keep your focus on building your agency and finding customers. We can help with the technical setup behind it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              You can <Link href="/book-a-call" className="text-[#0E9BF0] hover:underline">book a call</Link> or <Link href="/contact" className="text-[#0E9BF0] hover:underline">get in touch</Link> to talk through what you need. We won't promise a launch date or a revenue figure, but we can tell you what the setup involves.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about GoHighLevel SaaS Mode setup?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                  <Phone className="w-4 h-4" />
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">Step-by-Step SaaS Mode Guide →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">White-Label SaaS Guide →</Link>
                <Link href="/blog/gohighlevel-white-label" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a Snapshot →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees →</Link>
                <Link href="/blog/gohighlevel-email-deliverability" className="text-sm text-[#0E9BF0] hover:underline">Email Deliverability →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">Workflow Automation →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">We won't promise a launch date or a revenue figure, but we can tell you what the setup involves.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  If you'd like a second opinion on your GoHighLevel SaaS setup, GHL Scale Up can go through it with you.
                </p>
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author / Verification Section */}
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                Plan details and pricing were checked in November 2026. HighLevel changes plans and prices often, so confirm current details in your account before planning.
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