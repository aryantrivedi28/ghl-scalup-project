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
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Mail,
  Rocket,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function GoHighLevelSpfDkimDmarcClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'introduction',
      'what-authentication-is',
      'spf-dkim-dmarc-plain-english',
      'how-they-work-together',
      'which-setup',
      'before-you-change-dns',
      'setup-spf',
      'setup-dkim',
      'setup-dmarc',
      'configuration-summary',
      'check-records-published',
      'check-real-email',
      'common-mistakes',
      'does-authentication-guarantee',
      'faq',
      'next-steps',
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
      q: 'Does GoHighLevel require SPF and DKIM?',
      a: "For a dedicated LC Email sending domain, HighLevel's records screen includes SPF and DKIM records, and the domain is verified against them. For custom SMTP or your own Mailgun, the requirements are set by that provider. For default shared LC Email, the pages I read describe nothing for you to publish."
    },
    {
      q: 'Does GoHighLevel require a DMARC record?',
      a: "HighLevel's pages disagree. One lists DMARC among the domain records, while another set of pages lists five records and no DMARC. Google and Yahoo require DMARC from bulk senders. Check what your own records screen shows."
    },
    {
      q: 'Can I have more than one SPF record?',
      a: 'No. Multiple SPF records at the same name are treated as an error. Combine them into one.'
    },
    {
      q: 'What happens if SPF or DKIM fails?',
      a: 'Receivers may treat the message with more suspicion, junk it or reject it. What happens depends on the receiver and, for DMARC, on your policy and alignment.'
    },
    {
      q: 'What is the difference between SPF and DKIM?',
      a: 'SPF checks whether the sending server is authorized for the envelope-sender domain. DKIM checks a cryptographic signature on the message.'
    },
    {
      q: 'If SPF and DKIM pass, will DMARC pass?',
      a: 'Not necessarily. DMARC also needs a passing result to align with the From domain.'
    },
    {
      q: 'Does DMARC improve deliverability?',
      a: 'Not by itself. It supports authentication and gives you reports. Bulk senders to Gmail and Yahoo are required to have it.'
    },
    {
      q: 'Which DMARC policy should I use?',
      a: 'That depends on your senders and your monitoring. The standard describes starting with p=none and fixing legitimate failures before enforcing.'
    },
    {
      q: 'How do I check whether my records work?',
      a: 'Look them up in DNS, and check the Authentication-Results line in a real test email.'
    },
    {
      q: "What if my HighLevel domain won't verify?",
      a: 'That is a verification problem, not an authentication one. See (Planned link, not yet published: how to troubleshoot a sending domain that will not verify).'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'introduction', title: 'Introduction and Scope' },
    { id: 'what-authentication-is', title: 'What is email authentication, and will it get my emails into the inbox?' },
    { id: 'spf-dkim-dmarc-plain-english', title: 'What are SPF, DKIM and DMARC?' },
    { id: 'how-they-work-together', title: 'What is the difference between SPF, DKIM and DMARC, and how do they work together?' },
    { id: 'which-setup', title: 'Do I need SPF, DKIM and DMARC in GoHighLevel? Where do the values come from?' },
    { id: 'before-you-change-dns', title: 'What should I check before I change my DNS records?' },
    { id: 'setup-spf', title: 'How do I set up SPF for GoHighLevel?' },
    { id: 'setup-dkim', title: 'How do I add a DKIM record in GoHighLevel?' },
    { id: 'setup-dmarc', title: 'How do I set up DMARC for GoHighLevel, and which policy should I use?' },
    { id: 'configuration-summary', title: 'Which SPF, DKIM and DMARC values do I need, and where do I get them?' },
    { id: 'check-records-published', title: 'How do I check that my SPF, DKIM and DMARC records are published?' },
    { id: 'check-real-email', title: 'How do I check that SPF, DKIM and DMARC are passing in a real email?' },
    { id: 'common-mistakes', title: 'Common SPF, DKIM and DMARC mistakes and how to fix them' },
    { id: 'does-authentication-guarantee', title: 'Will SPF, DKIM and DMARC stop my GoHighLevel emails going to spam?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'next-steps', title: 'What should I do next?' },
  ];

  const comparisonTable = [
    { method: 'SPF', checks: 'Whether the sending server is authorized for the envelope-sender domain', matters: "Lets you declare who may send for the domain, but it doesn't look at the visible From name" },
    { method: 'DKIM', checks: "Whether the message carries a valid signature from the signing domain, and wasn't altered", matters: 'Survives some forwarding better than SPF and ties the message to a domain' },
    { method: 'DMARC', checks: 'Whether a passing SPF or DKIM domain aligns with the visible From domain, and what policy you published', matters: 'Connects the technical checks to the address people see, and gives you reports' },
  ];

  const setupTable = [
    { setup: 'LC Email, default shared sending', whose: "HighLevel's. The overview says shared domains rewrite the sender address to HighLevel's own domain. The pages I read describe no records for you to publish for this default", where: 'Nothing for you to publish. If you want authentication on your own domain, that points to a dedicated sending domain (What is LC Email?)' },
    { setup: 'LC Email with a dedicated sending domain', whose: 'Yours. The domain sends From exactly as configured', where: "The records screen for your dedicated domain in the sub-account's Email Services settings. See (Planned link, not yet published: step-by-step guide to connecting a sending domain). The Sending Guide notes this option is LC Email only" },
    { setup: 'Your own Mailgun account', whose: 'Yours, set up at Mailgun', where: "Mailgun. HighLevel's page says a verified Mailgun domain needs SPF, DKIM and MX records (Mailgun in Agency)" },
    { setup: 'Custom SMTP provider', whose: "Your provider's. Each provider verifies senders differently", where: "Your provider's own authentication instructions. HighLevel's SendGrid page only requires a verified single sender and doesn't mention domain authentication (SendGrid page; SMTP limitations)" },
  ];

  const dmarcPagesTable = [
    { page: 'Email Authentication Errors (1 Jul 2026)', says: 'TXT at _dmarc; starting value begins v=DMARC1; p=none; optional rua; monitor reports for at least 2 to 4 weeks before quarantine or reject; reject too early can block your own legitimate mail; with p=none failing messages are still delivered' },
    { page: 'Email Sending Guide (30 Jun 2026)', says: 'Gives a DMARC example with p=reject, and says missing or misconfigured DMARC records can hurt domain reputation. It doesn\'t explain the trade-offs of reject' },
    { page: 'Add and Verify (30 Jun 2026)', says: 'Lists DMARC among the records; only one per domain; a root-domain record already applies to subdomains by default' },
    { page: 'Manual DNS page and the provider guides (30 Jun 2026)', says: 'List five records and no DMARC' },
  ];

  const configTable = [
    { record: 'SPF', need: 'One TXT record at the hostname your setup specifies; combined if several services send', where: 'Your records screen (dedicated LC Email), Mailgun, or your SMTP provider; never a generic example', verify: 'Exactly one v=spf1 record at that name; within 10 lookups; includes every legitimate sender' },
    { record: 'DKIM', need: 'A TXT record at selector_domainkey for your domain, with the full public key', where: 'The same sources', verify: 'Key found at the expected hostname; complete; only one at that hostname; messages actually show dkim=pass' },
    { record: 'DMARC', need: 'One TXT record at _dmarc beginning v=DMARC1, with a policy you chose, and ideally a reporting address', where: "You decide the policy from your sending environment; HighLevel's pages offer examples", verify: 'Exactly one record; valid syntax; reports arrive; legitimate senders pass before any stricter policy' },
  ];

  const headerResultsTable = [
    { see: 'spf=pass (with smtp.mailfrom=...', means: 'The sending server was authorized for that envelope-sender domain' },
    { see: 'dkim=pass (with header.i or d= and a selector)', means: 'A DKIM signature verified. Check the signing domain in the DKIM-Signature header' },
    { see: 'dmarc=pass (with header.from=...', means: 'At least one passing mechanism aligned with the From domain' },
    { see: 'spf=softfail or neutral', means: "The SPF policy didn't clearly authorize the sender. That isn't a DMARC-passing SPF result" },
    { see: 'spf=pass but dmarc=fail, with DKIM missing or failing', means: "This usually means SPF passed for a domain that doesn't align with the From domain, and DKIM isn't supplying an aligned pass. Check the DKIM result and the signing domain" },
  ];

  const mistakesTable = [
    { mistake: 'Two or more SPF records at the same name', why: 'The standard treats multiple records as an error', check: 'Combine into one record' },
    { mistake: 'Replacing SPF without checking other senders', why: 'Services that relied on the old record start failing', check: 'List every sender first; keep a copy of the old record' },
    { mistake: 'Using an SPF value from another provider or an old tutorial', why: 'It authorizes the wrong servers', check: 'Use your own records screen or provider' },
    { mistake: 'Exceeding 10 DNS lookups', why: 'SPF returns a permerror', check: 'Count lookup-causing terms; consolidate' },
    { mistake: 'Wrong DKIM selector or hostname', why: "The receiver can't find the key", check: "Compare with the provider's exact name" },
    { mistake: 'Incomplete DKIM public key', why: 'Signatures fail to verify', check: 'Compare the whole key to the source' },
    { mistake: 'Records at the wrong hostname', why: "They authenticate a domain you don't send from", check: 'Confirm root versus sending subdomain' },
    { mistake: 'Two DMARC records', why: 'All are discarded', check: 'Edit the existing record' },
    { mistake: 'A strict DMARC policy before checking senders', why: 'Legitimate mail may be rejected or junked', check: 'Monitor reports first' },
    { mistake: 'Mixing up root domain and sending subdomain', why: "A record on one doesn't cover the other", check: "Match the From domain to what you authenticated; HighLevel's page says to match exactly, including subdomains" },
    { mistake: 'Assuming a published record means passing', why: 'Records and messages are different checks', check: 'Run Check 2' },
    { mistake: 'Assuming authentication guarantees the inbox', why: 'Reputation and content still matter', check: 'See below' },
    { mistake: 'Changing records another service depends on', why: "That service's mail starts failing", check: 'Ask the DNS administrator or the provider first' },
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
          <span className="text-[#1A2236] font-medium">How to Set Up SPF, DKIM and DMARC in GoHighLevel</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">SPF</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">DKIM</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">DMARC</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Set Up SPF, DKIM and DMARC in GoHighLevel
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Prepared from HighLevel&apos;s published documentation, the standards, and Google and Yahoo&apos;s sender guidance, read 30 October 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              SPF, DKIM and DMARC are three different checks that receiving mail servers can run. SPF asks whether the sending server is authorized. DKIM asks whether the message carries a valid signature from a domain. DMARC asks whether at least one of those passing checks matches the visible From domain, and states what you want receivers to do when it doesn&apos;t. Your values come from your own sending service, not from a tutorial. There should be one SPF record and one DMARC record per name. And you check twice: once in DNS, and once in the headers of a real email.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>By GHL Scale Up. Prepared from HighLevel&apos;s published documentation, the SPF, DKIM and DMARC standards, and Google and Yahoo&apos;s sender guidance, read 30 October 2026. The steps were not tested in a live HighLevel account, and menu names can change.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need Help With Authentication? Let&apos;s Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#check-real-email"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to the Header Check
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What&apos;s in this guide</span>
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

            
            {/* Section: Introduction */}
            <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Introduction and Scope
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You connected a sending domain, or someone told you your emails &quot;need SPF, DKIM and DMARC.&quot; Fair enough, but what are they, which values do you actually publish, and how do you know they work? This guide answers all three for GoHighLevel users. It does not walk through connecting the domain itself (see (Planned link, not yet published: step-by-step guide to connecting a sending domain)) or fix a verification status that won&apos;t turn green (see (Planned link, not yet published: how to troubleshoot a sending domain that will not verify)).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The short version: SPF, DKIM and DMARC are three different checks that receiving mail servers can run. SPF asks whether the sending server is authorized. DKIM asks whether the message carries a valid signature from a domain. DMARC asks whether at least one of those passing checks matches the visible From domain, and states what you want receivers to do when it doesn&apos;t. Your values come from your own sending service, not from a tutorial. There should be one SPF record and one DMARC record per name. And you check twice: once in DNS, and once in the headers of a real email.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-spf-dkim-dmarc.png"
                  alt="Diagram showing an email passing SPF, DKIM and DMARC alignment checks before reaching a receiving mail server."
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Diagram showing an email passing SPF, DKIM and DMARC alignment checks before reaching a receiving mail server.</span>
              </div>
            </div>

            {/* Section: What Authentication Is */}
            <h2 id="what-authentication-is" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What is email authentication, and will it get my emails into the inbox?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When a message arrives, the receiving provider has to decide whether it really comes from the domain it claims, and whether to trust it. Authentication gives it evidence. It does not make the decision for the receiver, and it does not mean your email will reach the inbox. Google&apos;s sender guidance says authenticated messages are &quot;less likely to be rejected or marked as spam,&quot; and also notes that &quot;some legitimate messages may be marked as spam&quot; (Google email sender guidelines).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              It also doesn&apos;t stop every kind of spoofing or phishing. Think of it as a set of checks that make it harder for someone else to send as you, and easier for receivers to trust you.
            </p>

            {/* Section: SPF DKIM DMARC Plain English */}
            <h2 id="spf-dkim-dmarc-plain-english" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What are SPF, DKIM and DMARC?
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              SPF: which servers may send for this domain
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              SPF (Sender Policy Framework) is a DNS TXT record listing the servers and services allowed to send mail for a domain. When a message arrives, the receiver looks at the envelope sender (the Return-Path address, which is separate from the From name people see) and checks whether the connecting server is on that list (RFC 7208).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three things matter in practice:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">One SPF record per name.</strong> If a lookup returns more than one SPF record, the standard says the result is an error (permerror). If you use several services, they must be combined into a single record. Don&apos;t add a second one.</li>
              <li><strong className="text-[#1A2236]">A limit of 10 DNS lookups.</strong> The standard caps the number of lookup-causing terms (include, a, mx, ptr, exists and redirect) at 10. Go over and the check fails with a permerror. HighLevel&apos;s authentication page repeats the limit and suggests consolidating includes (Email Authentication Errors). Every extra service you add to the record uses some of that budget.</li>
              <li><strong className="text-[#1A2236]">The values come from the sending service.</strong> SPF doesn&apos;t verify the visible From name, and the correct record depends on who actually sends your mail. A value copied from another provider or an old tutorial will be wrong for you.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              DKIM: a signature the receiver can check
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              DKIM (DomainKeys Identified Mail) attaches a cryptographic signature to each outgoing message. The sending system signs with a private key it keeps secret. The matching public key is published in your DNS, so any receiver can check the signature (RFC 6376).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The signature sits in a DKIM-Signature header that includes <strong className="text-[#1A2236]">d=</strong> (the domain taking responsibility) and <strong className="text-[#1A2236]">s=</strong> (the selector). The selector tells the receiver where to look. The public key is a TXT record at selector._domainkey.domain. A domain can hold several keys at once under different selectors. The standard requires the From header to be among the signed fields, so a valid signature covers the visible sender. A failure can mean the key isn&apos;t published, the selector or key is wrong or incomplete, or the message was changed after signing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Selectors and keys are specific to your sending configuration. Nobody can give you one that works for everyone, and HighLevel&apos;s dedicated-domain overview says multiple DKIM records for the same domain aren&apos;t supported (overview).
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              DMARC: do the checks line up with the From address, and what should receivers do?
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              DMARC (Domain-based Message Authentication, Reporting and Conformance) builds on SPF and DKIM. It adds two things: alignment and a policy. The current standard is RFC 9989, published in May 2026, which replaced RFC 7489 (many older articles still cite the old one). The record format still begins v=DMARC1.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Alignment</strong> means the domain that passed SPF or DKIM has to match the domain in the visible From address. Under relaxed alignment (the common mode) the two must share the same organizational domain, so mail.example.com aligns with example.com. Under strict alignment they must be identical. SPF and DKIM can each pass on their own and still fail DMARC if the domain they authenticated isn&apos;t the From domain.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The pass rule is simple: if at least one of SPF or DKIM passes and aligns, DMARC passes. You don&apos;t need both.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The policy <strong className="text-[#1A2236]">(p=)</strong> is your request for how receivers should treat messages that fail:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">p=none:</strong> no preference stated. Often used in monitoring mode, where you collect reports to see who is sending as your domain.</li>
              <li><strong className="text-[#1A2236]">p=quarantine:</strong> you consider failing mail suspicious.</li>
              <li><strong className="text-[#1A2236]">p=reject:</strong> you consider failures a clear sign the domain is being used improperly.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Receivers are not required to follow your policy. The standard says so explicitly. The record lives at _dmarc in front of your domain, and the optional rua= tag asks receivers to send aggregate reports, which are summaries of who sent mail claiming to be your domain and whether it passed.
            </p>

            {/* Section: How They Work Together */}
            <h2 id="how-they-work-together" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What is the difference between SPF, DKIM and DMARC, and how do they work together?
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Method</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it checks</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.method}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.checks}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.matters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Notice that the last box says &quot;authentication does not guarantee the inbox.&quot; Authentication is one input among several.
            </p>

            {/* Section: Which Setup */}
            <h2 id="which-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Do I need SPF, DKIM and DMARC in GoHighLevel? Where do the values come from?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This matters because the records, and who is responsible for them, depend on how your email is sent. HighLevel&apos;s pages don&apos;t treat the setups as identical, and neither should you.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Your setup</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Whose authentication is it?</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where do the values come from?</th>
                  </tr>
                </thead>
                <tbody>
                  {setupTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.setup}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.whose}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Interface labels vary between HighLevel&apos;s pages. The authentication page says to go to Settings &gt; Email Services &gt; Sending Domain and choose Verify Domain, while the dedicated-domain pages use Dedicated Domain and IP. Confirm the current names in your account.
            </p>

            {/* Section: Before You Change DNS */}
            <h2 id="before-you-change-dns" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What should I check before I change my DNS records?
            </h2>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Know who controls DNS and have access, or have the person who does ready.</li>
              <li>Know which setup you have (table above).</li>
              <li>Write down what already sends mail from this domain: your mailbox provider, any newsletter tool, a CRM, a billing system. Each may appear in an existing SPF record.</li>
              <li>Save a copy of the existing records for SPF, DKIM and DMARC before you edit anything.</li>
              <li>Check which exact hostname you are working on. A root domain (yourdomain.com) and a sending subdomain (mail.yourdomain.com) have separate records. Authenticating one does not authenticate the other.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Safety rule for every section below:</strong> never delete an existing record unless you know what depends on it, and never replace an existing SPF record without knowing every service that sends mail for that domain. If you aren&apos;t sure, ask your DNS administrator or email provider.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              DNS fields are usually called Type, Host or Name, Value or Content, and TTL. Providers label them differently, so match the meaning, not the exact label.
            </p>

            {/* Section: Setup SPF */}
            <h2 id="setup-spf" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How do I set up SPF for GoHighLevel?
            </h2>
            <div className="space-y-3 mb-6">
              {[
                'Identify the actual sending service (your setup table above).',
                'Get its current SPF instructions from your HighLevel records screen or your provider. Use those, not an example from this or any other article. HighLevel&apos;s own pages show different SPF examples (the authentication page lists two includes, while the provider guides show one), which is exactly why your screen is the source of truth.',
                'Check whether an SPF record already exists at the exact hostname. Look it up (see the checks below).',
                'Decide whether to add or merge. If none exists, add the one you&apos;ve been given. If one exists, you need a single combined record covering every service, not a second record. Ask whoever manages your email if you can&apos;t tell what the existing entries do.',
                'Add or edit the TXT record at your DNS provider using the Type, Host and Value you&apos;ve been given. Watch for stray spaces or added quotes, which HighLevel lists as common mistakes.',
                'Save, then allow time for DNS to propagate. HighLevel&apos;s authentication page estimates 2 to 48 hours, and says mailbox providers can take 1 to 7 days to recognize changes. These are estimates.',
                'Check the published record (below).',
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
              The structure to expect is: v=spf1, then one or more authorized sources, then an ending that says how to treat everything else. For example, a record shaped like v=spf1 include:(service one) include:(service two) -all. The parts in parentheses are placeholders, not real values.
            </p>

            {/* Section: Setup DKIM */}
            <h2 id="setup-dkim" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How do I add a DKIM record in GoHighLevel?
            </h2>
            <div className="space-y-3 mb-6">
              {[
                'Get the DKIM record from the sending service. For a dedicated LC Email domain, it is shown on your domain&apos;s records screen. For Mailgun or SMTP, get it from that provider.',
                'Note the hostname or selector exactly as given. It will look like a name ending in _domainkey, with your selector in front.',
                'Use the record type the service specifies (HighLevel&apos;s authentication page describes DKIM as a TXT record).',
                'Enter the host and value accurately. Copy the whole public key. A truncated key is a common cause of DKIM failure. (As general DNS behavior, long TXT values may be shown split into several quoted pieces. Your DNS provider&apos;s tool usually joins them for you.)',
                'Save and wait for propagation.',
                'Check that the public key is visible at the expected hostname (below).',
                'Confirm the sending service recognizes it. In HighLevel, that&apos;s the status shown when you verify the domain. Remember this confirms the platform sees the record, not that a message has been signed and passed. If you change sending providers or rotate keys, the DNS records need to change with them. Don&apos;t add a second DKIM record at the same hostname.',
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
              If you change sending providers or rotate keys, the DNS records need to change with them. Don&apos;t add a second DKIM record at the same hostname.
            </p>

            {/* Section: Setup DMARC */}
            <h2 id="setup-dmarc" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How do I set up DMARC for GoHighLevel, and which policy should I use?
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Does GoHighLevel require a DMARC record?
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Page</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it says about DMARC</th>
                  </tr>
                </thead>
                <tbody>
                  {dmarcPagesTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.page}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.says}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              What that adds up to: HighLevel&apos;s pages don&apos;t establish that a DMARC record is a platform requirement for every sending-domain setup, and they disagree on policy. Where DMARC is concerned, the stronger requirement comes from mailbox providers. Google requires DMARC for senders of more than 5,000 messages a day and says the policy can be set to none; Yahoo asks bulk senders for a DMARC record with at least p=none and a pass (Google; Yahoo). Below those volumes DMARC is still widely recommended, but it is a decision, not a HighLevel setting.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Which DMARC policy should I choose: none, quarantine or reject?
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is no universal right policy. The standard says domain owners usually start with p=none, which it calls monitoring mode, and that problems found in reports must be addressed before enforcement (RFC 9989). Stricter policies tell receivers to junk or refuse failing mail. If a legitimate service you forgot about is not authenticating, a strict policy can cause your own mail to be blocked. Mail that is forwarded or sent through mailing lists can also break SPF and DKIM alignment.
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Check whether a DMARC record already exists at _dmarc.yourdomain.com. If it does, edit that record; never publish a second one. The standard says that if multiple DMARC records are found, they are all discarded.',
                'List every legitimate sender for the domain.',
                'Decide on a starting policy based on that list. For most people who haven&apos;t monitored yet, that is monitoring, but it&apos;s your call.',
                'Publish at the right hostname: a TXT record at _dmarc (for the root domain), with the record starting v=DMARC1. A structure to expect: v=DMARC1; p=(your policy); rua=mailto:(a reporting address you control), with placeholders for you to fill in.',
                'Check the syntax and publication (below).',
                'Read the aggregate reports for a few weeks. Receivers should send them at least daily, and they are XML files, so most people use a reporting tool (HighLevel&apos;s page names DMARC Analyzer and Postmark&apos;s DMARC Digests).',
                'Fix any legitimate sender that is failing before even considering quarantine or reject.',
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
              <strong className="text-[#1A2236]">Subdomains:</strong> a policy at the root applies to subdomains unless you add an sp= tag (and the newer standard adds np= for subdomains that don&apos;t exist). If your root domain already has a DMARC record, HighLevel says you needn&apos;t add one for the sending subdomain. Also note that the older pct tag was removed in RFC 9989, so tutorials that stage enforcement with it may be out of date.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Fix any legitimate sender that is failing before even considering quarantine or reject.
            </p>

            
            {/* Section: Configuration Summary */}
            <h2 id="configuration-summary" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which SPF, DKIM and DMARC values do I need, and where do I get them?
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Record</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you need</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where the value comes from</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to verify</th>
                  </tr>
                </thead>
                <tbody>
                  {configTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.record}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.need}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.where}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.verify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              MX and CNAME records often appear alongside these on a HighLevel records screen, but they aren&apos;t SPF, DKIM or DMARC. HighLevel&apos;s authentication page says the CNAME supports tracking links. Don&apos;t confuse them when you check.
            </p>

            {/* Section: Check Records Published */}
            <h2 id="check-records-published" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How do I check that my SPF, DKIM and DMARC records are published?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This confirms that DNS returns what you expect. It does not confirm that any email passes.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Use a lookup tool. HighLevel&apos;s page names MXToolbox, DMARC Analyzer and Google Admin Toolbox. The Sending Guide names dmarcian&apos;s checker.</li>
              <li>Or use the command line. The generic commands are dig TXT yourdomain.com +short for SPF, dig TXT selector._domainkey.yourdomain.com +short for DKIM, and dig TXT _dmarc.yourdomain.com +short for DMARC (swap in your own domain and selector).</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              What to look for: exactly one record starting v=spf1 at the right name; the DKIM key present and complete at the right selector; exactly one record starting v=DMARC1 at _dmarc; and values that match what your sending service gave you. Look for stray spaces, quotes, duplicates and the wrong hostname.
            </p>

            {/* Section: Check Real Email */}
            <h2 id="check-real-email" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How do I check that SPF, DKIM and DMARC are passing in a real email?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the check that matters most, and many guides skip it. Send a test email through the same route you intend to use: the same HighLevel sub-account, the same dedicated domain or provider, with a From address on the authenticated domain. HighLevel&apos;s Add and Verify page also suggests sending tests and checking SPF and DKIM in the headers.
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Send to a Gmail address you control.',
                'Open the message, click More next to Reply, and choose Show original (Gmail: trace an email with its full header).',
                'Find the Authentication-Results line from the receiving server.',
                'Read the three results and the domains beside them.',
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you see</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {headerResultsTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.see}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.means}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Three cautions. First, a DNS record being visible doesn&apos;t mean every message passes. Different routes (for example a one-to-one email versus a campaign) can behave differently, so test the route you use. Second, header formats differ between mailbox providers, so confirm the labels you see rather than assuming. Third, DMARC doesn&apos;t need all three to pass; one aligned pass is enough.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common SPF, DKIM and DMARC mistakes and how to fix them
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Mistake</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why it causes trouble</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to check</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakesTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.mistake}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If the symptom is that HighLevel&apos;s own domain verification stays pending or fails, that is a different problem. See (Planned link, not yet published: how to troubleshoot a sending domain that will not verify).
            </p>

            {/* Section: Does Authentication Guarantee */}
            <h2 id="does-authentication-guarantee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Will SPF, DKIM and DMARC stop my GoHighLevel emails going to spam?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              No. Authentication removes one common reason for rejection. HighLevel&apos;s authentication page says so directly: sender reputation, list quality and content still matter. Google&apos;s guidance says the same, and it also asks bulk senders to keep spam complaint rates low and to support one-click unsubscribe (Google). A basic DMARC record doesn&apos;t improve inbox placement by itself either. What it does is stop you failing a requirement and give you data about who is sending as you.
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

            {/* Section: Next Steps */}
            <h2 id="next-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What should I do next?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Know which setup you have, get the values from the right source, change one thing at a time, and verify twice: in DNS, then in a real message&apos;s headers. Treat DMARC policy as a decision you make from evidence, not a setting to copy. If you haven&apos;t connected the sending domain yet, start with (Planned link, not yet published: step-by-step guide to connecting a sending domain), and for the overall journey see (Planned link, not yet published: the complete GoHighLevel email setup checklist).
            </p>

            {/* Sources */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Sources</h3>
              <ul className="space-y-2 text-sm text-[#5C6880]">
                <li>
                  Email Authentication Errors (HighLevel, 1 Jul 2026); Email Sending Guide (30 Jun 2026); Add and Verify Domain DNS Records and Manually Adding DNS Records (30 Jun 2026); Dedicated Email Sending Domains Overview (17 Apr 2026).
                </li>
                <li>
                  Setting Up SMTP Providers, SMTP limitations, SendGrid as the SMTP provider and Mailgun in Agency.
                </li>
                <li>
                  <a href="https://datatracker.ietf.org/doc/html/rfc7208" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">RFC 7208</a> (SPF), <a href="https://datatracker.ietf.org/doc/html/rfc6376" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">RFC 6376</a> (DKIM) and <a href="https://datatracker.ietf.org/doc/rfc9989/" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">RFC 9989</a> (DMARC, May 2026).
                </li>
                <li>
                  Google email sender guidelines, Yahoo sender best practices and Gmail full header instructions.
                </li>
              </ul>
            </div>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still not sure whether your SPF, DKIM and DMARC are working?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We&apos;re here to help.
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Get the values from the right source, change one thing at a time, and verify twice.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Treat DMARC policy as a decision you make from evidence, not a setting to copy. GHL Scale Up implements GoHighLevel for agencies and service businesses.
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
                Prepared from HighLevel&apos;s published documentation, the SPF, DKIM and DMARC standards, and Google and Yahoo&apos;s sender guidance, read 30 October 2026. Nothing here was tested in a live HighLevel account, and menu names can change. Features, limits and usage rates change; confirm in your own account.
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