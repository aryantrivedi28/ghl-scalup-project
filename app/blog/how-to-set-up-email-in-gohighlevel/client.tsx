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
  AlertTriangle,
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Mail,
  Server,
  Globe,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Rocket,
  ListChecks,
  Route,
  Settings,
  Search,
  Filter,
  Users,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function HowToSetUpEmailClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'introduction',
      'what-this-covers',
      'before-you-start',
      'choose-sending-approach',
      'shared-or-dedicated',
      'main-parts',
      'order-of-work',
      'readiness-checks',
      'common-oversights',
      'if-you-cant-finish',
      'conclusion',
      'faq',
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
      q: 'What do I need before setting up email in GoHighLevel?',
      a: 'At minimum: access to the right account, a choice of sending approach, and your From Name and From Email. If you\'ll use a dedicated sending domain or your own provider\'s domain, you also need DNS access (or the person who has it) and a plan for a subdomain.'
    },
    {
      q: 'Do I need a sending domain to send email from GoHighLevel?',
      a: 'Not to start with the default LC Email setup. HighLevel\'s LC Email article says it works with minimal setup and that a dedicated sending domain is needed to go beyond the shared daily limit. HighLevel\'s tracking article also ties email tracking to a dedicated sending domain. If you connect your own provider, that provider\'s domain requirements apply.'
    },
    {
      q: 'What is the difference between LC Email and custom SMTP?',
      a: 'LC Email is HighLevel\'s built-in sending service and the default for new accounts. Custom SMTP connects a provider you already use, with credentials from that provider. HighLevel describes SMTP as an advanced use case with best-effort support and limited reporting. A connected Mailgun account is a separate, more fully documented option.'
    },
    {
      q: 'What is the difference between a sending domain and a website domain?',
      a: 'A sending domain (usually a subdomain) is what your emails are sent from and uses authentication records. A website or funnel domain points visitors to pages and uses different records. They are connected separately.'
    },
    {
      q: 'How do I know if my GoHighLevel email setup is complete?',
      a: 'Use the readiness checklist above. In short: your provider is the one you intended, any domain you added shows as verified, sender details are set and consistent, and you know your limits. Completion still doesn\'t guarantee inbox placement.'
    },
    {
      q: 'What should I do if my domain does not verify?',
      a: 'Check the status and allow time (HighLevel\'s estimates vary), then follow the troubleshooting guide. If it still fails, contact support.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'introduction', title: 'Introduction and the Short Answer' },
    { id: 'what-this-covers', title: "What This Guide Covers, and What It Doesn't" },
    { id: 'before-you-start', title: 'Before You Start: What to Have Ready' },
    { id: 'choose-sending-approach', title: 'Choose Your Sending Approach: LC Email or Custom SMTP?' },
    { id: 'shared-or-dedicated', title: 'Shared or Dedicated Sending: What Should You Consider?' },
    { id: 'main-parts', title: 'The Main Parts of the Setup, in Plain English' },
    { id: 'order-of-work', title: 'The Order of Work' },
    { id: 'readiness-checks', title: "How to Know You're Ready to Send" },
    { id: 'common-oversights', title: 'Common Setup Oversights' },
    { id: 'if-you-cant-finish', title: "If You Can't Finish Setup" },
    { id: 'conclusion', title: 'Conclusion' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const beforeYouStart = [
    { have: 'Access to the right account: agency or sub-account', needed: 'Always', why: 'Some email settings live at the agency level and others on the sub-account. HighLevel says a dedicated sending domain must be added to the sub-account itself, and that a sub-account without its own dedicated domain is treated as shared even if the agency has one.' },
    { have: 'A decision on LC Email or your own provider', needed: 'Always', why: 'The decision determines which of the remaining items you need.' },
    { have: "Access to the domain's DNS settings, or the person who has it", needed: "Dedicated sending domain, or your own provider's domain", why: "Records have to be published where the domain's DNS is managed. That is often your registrar, a hosting company or a separate DNS service. Owning a domain and being allowed to edit its DNS are not always the same thing, especially when a developer or an IT contractor set it up." },
    { have: 'A subdomain you can dedicate to sending', needed: 'Dedicated sending domain', why: "HighLevel's overview recommends an unused subdomain, such as one starting with mg. or lc., not your main domain." },
    { have: 'A list of what already sends email from the domain', needed: "Dedicated sending domain, or your own provider's domain", why: 'HighLevel says existing SPF or MX records can block setup, and that Mailgun MX records should not be added to a main domain that already uses Google Workspace. Know what exists before you change anything.' },
    { have: 'Your From Name and From Email', needed: 'Always', why: "Every email shows a sender. For a dedicated domain, HighLevel's sender-domain page says the From Email should match the sending domain." },
    { have: 'Provider details: API key, SMTP credentials, a verified sender', needed: 'Mailgun or SMTP', why: 'These come from the provider, not from GoHighLevel.' },
    { have: 'One named person who will make and check the changes', needed: 'Always', why: 'DNS and settings changes often pass between an owner, an administrator and a contractor. Without a named owner, a half-finished setup is easy to miss.' },
  ];

  const sendingApproach = [
    { consideration: 'What it is', lc: 'Built-in service; default for new accounts', mailgun: 'Your Mailgun account connected to HighLevel', smtp: 'Your own provider connected with SMTP credentials' },
    { consideration: 'What you set up', lc: 'Default: HighLevel says minimal setup. Dedicated domain: a subdomain, DNS records, verification', mailgun: 'A Mailgun account with a verified sending domain and an API key with sending permission', smtp: 'Credentials from your provider; sender address must match the SMTP address and be verified with the provider' },
    { consideration: 'Who bills for sending', lc: 'HighLevel, per 1,000 emails, at the agency level (rates are on the LC Email article)', mailgun: 'Mailgun bills by volume; HighLevel says the platform does not charge for a custom service', smtp: "Your provider's own terms and daily limits apply" },
    { consideration: 'Reporting', lc: "Full stats; HighLevel's tracking article says email tracking works only with LC Email and a dedicated sending domain", mailgun: 'HighLevel recommends Mailgun or LC Email for full sending statistics', smtp: 'Reports sent, open, click and bounce events only; no delivered event' },
    { consideration: 'Important caveats', lc: 'Subject to a new-account ramp-up and daily limits', mailgun: 'One email service is active at a time; switching affects all outbound email from the agency', smtp: 'HighLevel calls SMTP an advanced use case with best-effort support; sender mismatch is its most common failure' },
  ];

  const sharedVsDedicated = [
    { aspect: 'What it means for setup', shared: 'Nothing to publish in DNS. HighLevel says email works with minimal setup', dedicated: 'You add a subdomain, publish the DNS records HighLevel gives you, verify, then set sender details' },
    { aspect: 'Daily sending ceiling', shared: 'Up to 25,000 per day from day 8, per HighLevel', dedicated: 'Up to 550,000 per day, per the same article, which also says to contact support above 450,000' },
    { aspect: "Where it's configured", shared: 'Default on every sub-account', dedicated: "On each sub-account that needs it; a sub-account without its own is treated as shared even if the agency has one" },
    { aspect: 'Control over reputation', shared: 'Shared arrangements are not yours alone; HighLevel publishes no reputation metrics for them', dedicated: "HighLevel's guide presents a dedicated domain as giving you more control over your own sending reputation" },
    { aspect: 'Other documented dependencies', shared: 'Standard new-account ramp-up', dedicated: "Email tracking features depend on it, according to HighLevel's tracking article" },
  ];

  const readinessChecks = [
    { check: "You know which provider is the default at the level you're sending from (sub-account and agency)", status: 'Required check (documented, though the page that lists the order dates from 2023)', applies: 'All setups' },
    { check: 'The dedicated sending domain shows as verified in HighLevel', status: "Conditional (documented: HighLevel's FAQ says campaigns cannot send from an unverified dedicated domain, though another section calls it a warning)", applies: 'Dedicated sending domain' },
    { check: "The provider-side domain is verified, and the Mailgun domain appears in HighLevel's dropdown", status: 'Conditional (documented: only verified domains appear)', applies: 'Mailgun' },
    { check: 'From Name and From Email are set, and the From Email matches the sending domain', status: 'Required for a dedicated domain (documented, but see the mismatch note in Deliverable 1)', applies: 'Dedicated sending domain' },
    { check: 'The SMTP sender address matches the SMTP account and is verified at the provider', status: 'Conditional (documented as the most common SMTP failure; free-mail addresses cannot be used as the SMTP sender)', applies: 'Custom SMTP' },
    { check: 'Authentication records are published and have been checked', status: 'Conditional on your setup; follow your own screen and (Planned link, not yet published: SPF, DKIM and DMARC guide)', applies: 'Dedicated or custom domain' },
    { check: 'Your contact list has been checked for invalid addresses', status: 'Recommended (LC Email Verification is a paid, optional tool, per HighLevel)', applies: 'LC Email and Mailgun' },
    { check: 'You know your ramp-up and daily limits', status: 'Recommended', applies: 'LC Email' },
    { check: 'You sent a small internal message and checked how it looked', status: 'Recommended', applies: 'All setups' },
  ];

  const oversights = [
    { oversight: 'Starting DNS work before choosing a sending service', fix: 'Choose first. The records, credentials and verification steps differ by approach.' },
    { oversight: 'Working in the wrong account', fix: 'Confirm agency or sub-account before changing anything. An agency-level change can affect every sub-account without its own setting.' },
    { oversight: 'Treating the website domain and the sending domain as the same', fix: 'They use different records for different purposes. Plan a separate subdomain for sending.' },
    { oversight: 'Beginning without DNS access', fix: 'Find out who manages DNS first, and ask for either access or a scheduled time with that person.' },
    { oversight: "Changing DNS without knowing what already sends mail", fix: "Make a record of existing entries before changing anything, and don't delete records you don't recognize. HighLevel notes that existing SPF or MX entries can conflict." },
    { oversight: 'Assuming published records mean verified', fix: 'Publishing and verification are separate steps. Check the status in HighLevel.' },
    { oversight: 'Using a free-mail address as the SMTP sender', fix: 'HighLevel states free email addresses cannot be used as the SMTP sender. Use an address on your own domain.' },
    { oversight: 'Switching the agency email service in the middle of live workflows', fix: 'HighLevel notes queued and in-progress emails use whichever service is active when processed. Switch during a quiet period.' },
    { oversight: 'Assuming verification guarantees inbox placement', fix: "It doesn't. Treat it as a prerequisite, not an outcome." },
  ];

  const stuckTable = [
    { stuck: "You can't decide between LC Email and your own provider", next: "Start from your current provider, budget and volume needs. If none exists, HighLevel's default LC Email is the documented starting point. You can revisit the decision." },
    { stuck: "You don't have DNS access", next: "Identify who manages the domain's DNS, and ask them to add the records or give you access. Don't try to work around it." },
    { stuck: "You don't know which records your setup needs", next: "Use the records shown in your own account or provider. Don't copy values from articles. See (Planned link, not yet published: SPF, DKIM and DMARC guide)." },
    { stuck: "The domain won't verify", next: "Check status and wait as the pages suggest, then see (Planned link, not yet published: how to troubleshoot a sending domain that will not verify)." },
    { stuck: 'A setting is missing or blocked, or something still looks wrong', next: "Contact HighLevel support, or your SMTP or Mailgun provider's support for provider-side problems. HighLevel states it offers best-effort support for SMTP." },
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
          <span className="text-[#1A2236] font-medium">How to Set Up Email in GoHighLevel</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Email Setup</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">LC Email</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">SMTP</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Set Up Email in GoHighLevel: A Setup Roadmap
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Based on HighLevel's published documentation, read 27 October 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Choose your sending approach first (LC Email, HighLevel's built-in service, or your own provider), then prepare access to your domain's DNS, then follow the sequence for that approach, and check readiness before your first real send. HighLevel says new accounts use LC Email by default and that it works with minimal setup. A dedicated sending domain adds steps and is not required to start.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>By GHL Scale Up. Based on HighLevel's published documentation, read 28 October 2026. This guide was not tested in a live account, and menu names can change.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need Help With Email Setup? Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#order-of-work"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to the Order of Work
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

            {/* Introduction */}
            <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Introduction and the Short Answer
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Setting up email in GoHighLevel is not one switch. It is a short chain of decisions and tasks: which sending service you will use, whether you will send from your own sending domain, who controls that domain's DNS settings, how GoHighLevel confirms the domain is yours, and what name and address appear on your emails. Some of those pieces are optional depending on your setup, which is why two people following two "setup guides" can end up doing very different things.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The short answer:</strong> choose your sending approach first (LC Email, HighLevel's built-in service, or your own provider), then prepare access to your domain's DNS, then follow the sequence for that approach, and check readiness before your first real send. HighLevel says new accounts use LC Email by default and that it works with minimal setup. A dedicated sending domain adds steps and is not required to start.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/how-to-set-up-email-in-gohighlevel.png"
                  alt="How to Set Up Email in GoHighLevel: A Setup Roadmap"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Image placeholder. The document specifies no featured image; replace this with your own asset and alt text.</span>
              </div>
            </div>

            {/* Section: What This Covers */}
            <h2 id="what-this-covers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What This Guide Covers, and What It Doesn't
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This guide is about <strong className="text-[#1A2236]">preparing GoHighLevel to send outbound email</strong>: the choices, prerequisites, order of work and readiness checks. It does not cover:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Connecting a personal or business inbox so replies appear in GoHighLevel.</li>
              <li>Notification emails that GoHighLevel sends to your own team.</li>
              <li>Building email campaigns or workflows.</li>
              <li>Connecting a website or funnel domain, which uses different DNS records.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              It also doesn't walk through DNS entry, explain email authentication in depth, or diagnose a failed verification. Those are separate tasks, and each has its own guide: (Planned link, not yet published: step-by-step guide to connecting a sending domain), (Planned link, not yet published: what SPF, DKIM and DMARC do and how to verify them) and (Planned link, not yet published: how to troubleshoot a sending domain that will not verify).
            </p>

            {/* Section: Before You Start */}
            <h2 id="before-you-start" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Before You Start: What to Have Ready
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not everything below applies to every setup. The right-hand column says when each item matters.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Have this ready</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Needed when</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {beforeYouStart.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.have}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.needed}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Choose Sending Approach */}
            <h2 id="choose-sending-approach" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Choose Your Sending Approach: LC Email or Custom SMTP?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the decision everything else depends on, so make it before you touch DNS. In practice there are three setups, because HighLevel treats a connected Mailgun account and a generic SMTP provider differently.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">LC Email</strong> is HighLevel's built-in email service. HighLevel describes it as the provider that powers sending and receiving on every sub-account, and says new accounts use it by default (<a href="https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-i-want-to-know-more" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">What is LC Email?</a>).</li>
              <li><strong className="text-[#1A2236]">Your own Mailgun account</strong> is connected by an API key and a verified sending domain, usually at the agency level (<a href="https://help.gohighlevel.com/support/solutions/articles/155000008107-how-to-add-your-own-email-service-mailgun-in-agency" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Add your own email service (Mailgun)</a>).</li>
              <li><strong className="text-[#1A2236]">A custom SMTP provider</strong> is connected on the SMTP services tab with credentials from a provider such as Google, SendGrid, Zoho, Amazon SES or Outlook (<a href="https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Setting up SMTP providers</a>).</li>
            </ul>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Consideration</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">LC Email</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Your own Mailgun account</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Custom SMTP</th>
                  </tr>
                </thead>
                <tbody>
                  {sendingApproach.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.consideration}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.lc}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.mailgun}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.smtp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sources for the table: <a href="https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-i-want-to-know-more" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">LC Email</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000008107-how-to-add-your-own-email-service-mailgun-in-agency" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Mailgun in Agency</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">SMTP providers</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/48001203144-limitation-of-using-smtp-when-emails-are-not-sending" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">SMTP limitations</a> and <a href="https://help.gohighlevel.com/support/solutions/articles/155000003213" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Email Tracking for LC Email</a>. Pricing and limits change, so confirm them on the pages before you decide.
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How to decide</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">You are starting fresh and have no email provider contract:</strong> HighLevel's default path is LC Email, so you don't need an outside account to begin. Choose a dedicated sending domain later if you need it (next section).</li>
              <li><strong className="text-[#1A2236]">You already pay for Mailgun, or your organization requires a specific provider:</strong> use that provider, and plan for the provider-side setup HighLevel's pages describe. HighLevel recommends Mailgun or LC Email over generic SMTP if you want full sending statistics.</li>
              <li><strong className="text-[#1A2236]">You only want to send as an existing Google or Outlook mailbox:</strong> HighLevel's SMTP page recommends the direct Google and Outlook integrations where possible, which are inbox connections and outside this guide.</li>
              <li><strong className="text-[#1A2236]">You manage many client sub-accounts:</strong> an agency-level custom service becomes the default for sub-accounts that haven't set their own, and changing it affects all outbound email from the agency. HighLevel's Mailgun page suggests testing in a low-traffic period.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Choose based on your existing setup and requirements, not on which option sounds more advanced. HighLevel's pages do not show that any one approach is universally better, and neither does this guide.
            </p>

            {/* Section: Shared or Dedicated */}
            <h2 id="shared-or-dedicated" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Shared or Dedicated Sending: What Should You Consider?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Inside LC Email, the choice is between sending from HighLevel's shared setup or from a <strong className="text-[#1A2236]">dedicated sending domain</strong> you add to the sub-account. HighLevel's own article uses "shared domain" and "shared IP" almost interchangeably, so be careful with the terms. Adding a dedicated sending domain is a different thing from buying a dedicated IP address. HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Email Sending Guide</a> describes a dedicated IP as an optional extra with its own monthly charge.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]"></th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Shared (default)</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Dedicated sending domain</th>
                  </tr>
                </thead>
                <tbody>
                  {sharedVsDedicated.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.aspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.shared}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.dedicated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two cautions. First, a dedicated sending domain does not guarantee better inbox placement, and a shared setup does not mean poor results. HighLevel doesn't claim either. Second, both options start with a ramp-up. HighLevel's LC Email article lists 250 emails on day 1, rising to 10,000 by day 7, so a new sub-account cannot send a large first campaign. The exact schedule differs between HighLevel's pages, so read the current one before planning a launch.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Choose dedicated if you expect to pass the shared ceiling, want features that depend on it, or want sending reputation tied to your own subdomain. Otherwise it is reasonable to start shared and add a dedicated domain later.
            </p>

            {/* Section: Main Parts */}
            <h2 id="main-parts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Main Parts of the Setup, in Plain English
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before the sequence, here is the cast. Each part gets a short definition here and its own guide where it's complicated.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880]">
              {[
                { title: 'The sending service.', body: 'LC Email, Mailgun or your SMTP provider. It determines what else you have to configure.' },
                { title: 'The sending domain.', body: 'The domain or subdomain your emails are sent from, for example a subdomain of your business domain. It is not the same as your website or funnel domain, which GoHighLevel connects with different records for a different purpose.' },
                { title: 'DNS records.', body: "Entries published at whoever manages your domain's DNS. You, an administrator or a contractor may need to add them. HighLevel can configure some automatically for supported DNS providers and otherwise shows records to enter manually. The detail is in (Planned link, not yet published: step-by-step guide to connecting a sending domain)." },
                { title: 'Email authentication.', body: 'Records that help receiving systems check that mail claiming to come from your domain is legitimate. The exact records and values come from your own configuration screen, not from a generic tutorial. See (Planned link, not yet published: what SPF, DKIM and DMARC do and how to verify them). HighLevel\'s own pages do not agree on every detail of which records appear, so use what your account shows.' },
                { title: 'Verification.', body: "GoHighLevel checks whether the records you published are visible. HighLevel's pages give timing ranges from a few minutes to 48 hours, so treat any time as an estimate. A verified domain means GoHighLevel recognizes your records. It does not mean your emails will reach the inbox." },
                { title: 'Sender details.', body: 'The From Name and From Email shown on your emails. Decide these before sending, and make sure the address belongs to the domain and provider you set up.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1A2236]">{item.title}</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>

            {/* Section: Order of Work */}
            <h2 id="order-of-work" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Order of Work
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This sequence follows the setup HighLevel documents, and states which steps apply to which approach. Menu names are given as the cited pages show them and may differ in your account.
            </p>
            <div className="space-y-3 mb-6">
              {[
                '<strong>Confirm the account level.</strong> Work in the sub-account that will send, unless you are deliberately changing an agency-wide default. Before moving on, you should know whether the setting you are about to change affects one sub-account or all of them.',
                '<strong>Choose the sending approach.</strong> LC Email, your own Mailgun account or a custom SMTP provider (see above). Before moving on, you should be able to say which one and why.',
                "<strong>Gather access and decisions.</strong> Confirm who controls DNS, which subdomain you'll use, what already sends mail from the domain, and your From Name and From Email. Before moving on, you should have DNS access or a named person who does.",
                "<strong>Add the sending domain (dedicated domain or provider-side domain).</strong> For a LC Email dedicated domain, HighLevel's Getting Started page describes Settings > Email Services > Dedicated Domain and IP, then Add Domain with a subdomain. For Mailgun, the domain is verified at Mailgun and then selected in HighLevel by its API key. Skip this for default shared LC Email. The step-by-step version is in (Planned link, not yet published: step-by-step guide to connecting a sending domain).",
                '<strong>Publish the DNS records and any authentication records.</strong> Use the records your own screen or provider gives you, not examples from the internet. Leave unrelated existing records alone. Detail: (Planned link, not yet published: step-by-step guide to connecting a sending domain) and (Planned link, not yet published: what SPF, DKIM and DMARC do and how to verify them).',
                "<strong>Verify.</strong> HighLevel's pages describe a verify action and per-record statuses. Allow time, as HighLevel's estimates vary widely. If the domain stays unverified, see (Planned link, not yet published: how to troubleshoot a sending domain that will not verify).",
                "<strong>Set sender details.</strong> For a dedicated domain, HighLevel's Getting Started page describes the Set Headers option, where you enter a From Name and From Email, then save. For SMTP, the From address should match the SMTP account and be verified with the provider.",
                '<strong>Run the readiness checks below</strong> before your first real send.',
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed" dangerouslySetInnerHTML={{ __html: step }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you stay with default shared LC Email, steps 4 to 6 do not apply, but steps 1 to 3, 7 and 8 still do. If you use SMTP, steps 4 to 6 are replaced by the provider-side verification your provider requires.
            </p>

            {/* Section: Readiness Checks */}
            <h2 id="readiness-checks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Know You're Ready to Send
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Opening a settings screen is not the same as finishing setup. Use this list. "Documented" means a HighLevel page says it. "Recommended" is good practice, not a stated requirement.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Check</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Status</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Applies to</th>
                  </tr>
                </thead>
                <tbody>
                  {readinessChecks.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.check}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.status}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.applies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Even with every box checked, setup readiness is not inbox placement. HighLevel's own authentication-errors page says authentication does not guarantee inbox placement, and its email verification tool notes that a "verified" address can still bounce. Reputation, content and list quality still matter, and they are beyond this guide.
            </p>

            {/* Section: Common Oversights */}
            <h2 id="common-oversights" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Setup Oversights
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Oversight</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to do instead</th>
                  </tr>
                </thead>
                <tbody>
                  {oversights.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.oversight}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: If You Can't Finish */}
            <h2 id="if-you-cant-finish" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              If You Can't Finish Setup
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where you're stuck</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Next step</th>
                  </tr>
                </thead>
                <tbody>
                  {stuckTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.stuck}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Conclusion */}
            <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Conclusion
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Email setup goes more smoothly when you decide the sending approach first, line up DNS access and sender details, follow the order for your approach, and check readiness before the first real send. If you're on the default LC Email setup and don't need more than the shared limit, your task list may be shorter than any tutorial suggests. If you want a dedicated sending domain, your next step is the domain connection itself: (Planned link, not yet published: step-by-step guide to connecting a sending domain).
            </p>

            {/* Section: FAQ */}
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

            {/* Sources */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Sources</h3>
              <ul className="space-y-2 text-sm text-[#5C6880]">
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000005058-getting-started-setup-email-phone-and-sms" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Getting Started: Setup Email, Phone and SMS</a> (HighLevel, modified 23 Mar 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-i-want-to-know-more" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">What is LC Email?</a> (modified 20 Aug 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/48001226115" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Dedicated Email Sending Domains Overview & Setup</a> (modified 17 Apr 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Setting Up SMTP Providers</a> (modified 14 Apr 2026) and <a href="https://help.gohighlevel.com/support/solutions/articles/48001203144-limitation-of-using-smtp-when-emails-are-not-sending" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Limitation of using SMTP when emails are not sending</a> (modified 1 Jul 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000008107-how-to-add-your-own-email-service-mailgun-in-agency" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">How to Add Your Own Email Service (Mailgun) in Agency</a> (modified 18 Jun 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000007249-how-sender-domains-work-in-lc-email-campaigns" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">How Sender Domains Work in LC Email Campaigns</a> (modified 30 Jun 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Email Sending Guide: Email Best Practices & Email Warm Up</a> (modified 30 Jun 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000003213" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Email Tracking for LC Email</a>.
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/48001235221-how-to-enable-and-rebill-lc-email-validation" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">How to Enable and Rebill LC Email Validation</a> (modified 4 Jun 2026).
                </li>
              </ul>
            </div>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about setting up email in GoHighLevel?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Decide the sending approach first. Then follow the order of work.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  If you want a dedicated sending domain, your next step is the domain connection itself. GHL Scale Up implements GoHighLevel for agencies and service businesses.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
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
                Based on HighLevel's published documentation, read 28 October 2026. This guide was not tested in a live account, and menu names can change. Interface labels were checked against documentation only, and the article says so. Features, limits and usage rates change; confirm in your own account.
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