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
  Lock,
  FileCheck,
  Network,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function ConnectSendingDomainClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'introduction',
      'sending-vs-website',
      'before-you-connect',
      'choose-domain',
      'find-settings',
      'automatic-or-manual',
      'add-dns-records',
      'host-field',
      'records-you-will-see',
      'verify-and-status',
      'what-happens-after',
      'what-verified-means',
      'mistakes',
      'does-not-verify',
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
      q: 'What is a sending domain in GoHighLevel?',
      a: "It's the domain or subdomain your emails are sent from and authenticated under. In HighLevel's LC Email setup it's added as a dedicated sending domain in the sub-account's Email Services settings."
    },
    {
      q: 'Do I need a separate subdomain for email sending?',
      a: "HighLevel recommends a unique subdomain not used for any other purpose. It's especially important if your main domain already hosts mailboxes, because existing mail records can conflict with the new ones."
    },
    {
      q: 'Can I connect a sending domain automatically?',
      a: "HighLevel's Add and Verify page describes an automatic route through supported DNS providers. Other HighLevel guides describe manual entry only, and no provider support list was found. Add the domain and see what HighLevel offers."
    },
    {
      q: 'Where do I add the DNS records for GoHighLevel?',
      a: "At your domain's DNS provider, in the zone for your domain. It may be your registrar, a hosting company or a service such as Cloudflare. HighLevel has guides for several providers, such as GoDaddy, Google and Siteground."
    },
    {
      q: 'How long does sending-domain verification take?',
      a: "HighLevel's pages give different estimates, from 1 to 10 minutes typically to 24 to 48 hours for propagation. It varies by provider and TTL, so no time is guaranteed."
    },
    {
      q: 'What does a verified sending domain mean?',
      a: "That HighLevel recognizes the required records. It doesn't guarantee that mail passes authentication everywhere or reaches the inbox."
    },
    {
      q: 'What should I do if my sending domain does not verify?',
      a: 'Make sure the records are saved, wait, verify again, and compare the expected and published records. Then see (Planned link, not yet published: how to troubleshoot a sending domain that will not verify).'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'introduction', title: 'Introduction and the Short Answer' },
    { id: 'sending-vs-website', title: 'Sending Domain or Website Domain? Why They Are Not the Same' },
    { id: 'before-you-connect', title: 'Before You Connect the Domain' },
    { id: 'choose-domain', title: 'Choose the Domain or Subdomain to Connect' },
    { id: 'find-settings', title: 'Find the Sending-Domain Settings in GoHighLevel' },
    { id: 'automatic-or-manual', title: 'Automatic or Manual DNS Configuration?' },
    { id: 'add-dns-records', title: 'Add the DNS Records HighLevel Gives You' },
    { id: 'host-field', title: 'The Host or Name Field: The Most Common Slip' },
    { id: 'records-you-will-see', title: 'The Records You Will Probably See' },
    { id: 'verify-and-status', title: 'Verify the Domain and Read the Status' },
    { id: 'what-happens-after', title: 'What Happens After the Domain Verifies' },
    { id: 'what-verified-means', title: 'What a Verified Sending Domain Means' },
    { id: 'mistakes', title: 'Mistakes to Prevent While Connecting' },
    { id: 'does-not-verify', title: 'If Your Domain Does Not Verify' },
    { id: 'conclusion', title: 'Conclusion' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const domainComparison = [
    { aspect: 'What it does', website: 'Shows your pages to visitors', sending: 'Identifies where email is sent from and lets receiving systems check it', from: 'Shows recipients who the email is from' },
    { aspect: 'Where you connect it in HighLevel', website: 'Domain settings for sites and funnels', sending: 'Settings > Email Services > Dedicated Domain and IP', from: 'Sender details (Set Headers), after the sending domain is verified' },
    { aspect: 'Records HighLevel describes', website: 'A and CNAME records', sending: 'Email records: TXT for authentication, plus the others on your screen', from: 'None; it must fit the sending domain' },
  ];

  const beforeYouConnect = [
    { have: 'The sub-account that will send', status: 'Required', why: "The dedicated domain is added to the sub-account, per HighLevel's pages." },
    { have: 'LC Email as the sending service', status: 'Required for this guide', why: 'Dedicated sending domains apply only to LC Email accounts.' },
    { have: 'Access to your DNS provider, or the person who manages it', status: 'Required', why: "HighLevel gives you records; they have to be published where the domain's DNS is managed. If you don't have access, HighLevel says to share the record values with your web developer, IT team or registrar." },
    { have: 'A subdomain no other service uses', status: 'Required in practice', why: 'See the next section.' },
    { have: 'A list of what email already runs on the domain', status: 'Strongly advised', why: 'Existing mail records can conflict with new ones. Know what exists before you add anything.' },
    { have: 'The DNS records screen in HighLevel', status: 'Required', why: 'The records appear after you add the domain. Keep the screen open while you work.' },
    { have: 'One person who will make and check the changes', status: 'Recommended', why: 'Records pass between owners, administrators and contractors easily; one named owner prevents half-finished work.' },
  ];

  const automaticVsManual = [
    { aspect: 'How it works', auto: "After adding the domain, you click Continue. HighLevel detects your DNS provider, and you log in and authorize Lead Connector (HighLevel's name in the page) to configure the records. If the provider isn't supported, you are prompted to add records manually", manual: "You copy each record from the DNS records screen into your DNS provider's dashboard, then return to HighLevel to verify" },
    { aspect: 'Access needed', auto: 'Login to your DNS provider with permission to authorize changes', manual: 'Permission to add and edit records, or an administrator who has it' },
    { aspect: 'Who makes the changes', auto: 'You, or whoever can authorize at the DNS provider', manual: 'You, or your administrator or contractor' },
    { aspect: 'What to check afterward', auto: "The domain's status in HighLevel, and the DNS records at your provider so nothing unexpected changed", manual: 'That each record matches exactly, then the status in HighLevel' },
  ];

  const recordTypes = [
    { type: 'TXT (SPF)', says: 'Lists which servers may send mail for the domain', todo: 'Copy exactly. Only one SPF record should exist per domain; don\'t create a second. If one already exists, stop and get advice. Detail: (Planned link, not yet published: how SPF and DKIM work and how to verify email authentication)' },
    { type: 'TXT (DKIM)', says: "A digital signature that shows mail wasn't altered in transit. The name is specific to your setup", todo: "Copy name and value exactly. Multiple DKIM records on the same domain aren't supported." },
    { type: 'MX (two)', says: "HighLevel's pages give no purpose; the manual-records page names Mailgun mail servers as the targets", todo: 'Copy as shown. On a main domain that already uses Google Workspace, these conflict with its MX records, so use a subdomain.' },
    { type: 'CNAME', says: "HighLevel's authentication page says it supports tracking links", todo: 'Copy name and value exactly. If you use Cloudflare, set it to DNS only.' },
    { type: 'TXT (DMARC), if listed', says: 'Tells receiving systems what to do with mail that fails authentication, and where to send reports', todo: "Only one per domain. A DMARC record at the root also applies to subdomains by default, per HighLevel. Don't add a policy you don't understand. See (Planned link, not yet published: how SPF and DKIM work and how to verify email authentication)" },
  ];

  const verifiedStages = [
    { stage: 'Records published', means: 'They exist at your DNS provider', proves: 'No. HighLevel may not see them yet, or they may be wrong' },
    { stage: 'Recognized by HighLevel', means: 'The domain is marked verified', proves: "No. It doesn't show that your messages pass authentication" },
    { stage: 'Authentication passes', means: 'Receiving systems can check the sender against your records', proves: "No. HighLevel's authentication page says authentication doesn't guarantee inbox placement" },
    { stage: 'Accepted by the receiving server', means: "The message wasn't rejected", proves: 'No. It can still be filtered' },
    { stage: 'Reaches the inbox', means: 'The recipient sees it', proves: 'Depends on reputation, content and recipients' },
  ];

  const mistakes = [
    { mistake: "Adding records in the wrong DNS zone", prevent: "Confirm which domain's zone you're in, and who hosts its DNS." },
    { mistake: 'Entering the full domain in the host field', prevent: 'Enter only the prefix your provider expects, as above.' },
    { mistake: 'Choosing the wrong record type', prevent: 'Match TXT, MX or CNAME to the HighLevel screen exactly.' },
    { mistake: 'Using old values from a tutorial', prevent: 'Use only what your own screen shows.' },
    { mistake: 'Assuming your provider supports automatic setup', prevent: 'Check what HighLevel offers after you add the domain.' },
    { mistake: "Changing records without knowing what email already uses the domain", prevent: "Make a copy of existing records first, don't delete ones you don't recognize, and don't replace an existing SPF record without knowing every service that sends mail for the domain." },
    { mistake: 'Connecting the wrong domain', prevent: 'Confirm you are setting up the email sending domain, not the website domain.' },
    { mistake: 'Clicking verify before records are saved', prevent: 'Check the provider shows all records saved first.' },
    { mistake: 'Proxying records on Cloudflare', prevent: 'HighLevel says Cloudflare records used for email authentication must be DNS only (gray cloud), not Proxied.' },
    { mistake: 'Duplicate SPF, DMARC or DKIM records', prevent: "HighLevel says only one SPF and one DMARC record belong on a domain and multiple DKIM records aren't supported." },
    { mistake: 'A wildcard DNS record (such as *.yourdomain.com)', prevent: "HighLevel notes this can trigger a 'pre-existing record' error. Ask your DNS administrator before changing a wildcard. See (Planned link, not yet published: how to troubleshoot a sending domain that will not verify)." },
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
          <span className="text-[#1A2236] font-medium">How to Connect a Sending Domain in GoHighLevel</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Sending Domain</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">DNS</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Connect a Sending Domain in GoHighLevel: DNS Steps
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Prepared from HighLevel's published documentation, read 28 October 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              To connect a sending domain in GoHighLevel, you add a domain (usually a subdomain) in the sub-account's email settings, publish the DNS records HighLevel gives you at whoever manages that domain's DNS, and then ask HighLevel to verify them. Once the records are recognized, the domain is marked as verified and you can set the sender details. The steps are not long, but they depend on copying values exactly, so most of this guide is about doing that accurately.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>By GHL Scale Up. Prepared from HighLevel's published documentation, read 28 October 2026. The complete workflow was not independently tested in a live HighLevel account, and menu names or button labels can change.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need Help With DNS Setup? Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#add-dns-records"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to the DNS Steps
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
              A <strong className="text-[#1A2236]">sending domain</strong> is the domain or subdomain your emails are sent from and authenticated under. Connecting it means making the DNS records that identify it visible to the internet so HighLevel can confirm them.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">This guide covers email sending domains only.</strong> It does not cover connecting a website, funnel, white-label or client-portal domain, which HighLevel handles with different records (<a href="https://help.gohighlevel.com/support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Connecting Your Domain on GHL</a>). It also assumes you have already chosen LC Email as your sending service. If you are still deciding how to set up email overall, start with (Planned link, not yet published: the complete GoHighLevel email setup checklist).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You will: prepare, choose the domain, find the settings, pick automatic or manual configuration, add the records, verify, and learn what a verified status does and does not mean.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/connect-sending-domain-gohighlevel.png"
                  alt="How to Connect a Sending Domain in GoHighLevel: DNS Steps"
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

            {/* Section: Sending vs Website */}
            <h2 id="sending-vs-website" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Sending Domain or Website Domain? Why They Are Not the Same
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three different domains can be involved, and mixing them up is a common source of confusion:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]"></th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Website or funnel domain</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Sending domain</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Domain in the From address</th>
                  </tr>
                </thead>
                <tbody>
                  {domainComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.aspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.website}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.sending}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.from}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              They do not have to be identical. A business can have a website at its main domain, send from a subdomain, and use a From address that sits on that subdomain. HighLevel's header page says the From Email "should sit on" the validated dedicated sending domain so the email stays authenticated (<a href="https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Default Headers for Dedicated Sending Domains</a>). HighLevel also notes that dedicated sending domains apply only to LC Email accounts (<a href="https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Dedicated Email Sending Domains Overview & Setup</a>).
            </p>

            {/* Section: Before You Connect */}
            <h2 id="before-you-connect" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Before You Connect the Domain
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Have this ready</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Status</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {beforeYouConnect.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.have}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.status}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Registrar or DNS provider?</strong> The registrar is where the domain name was bought. The DNS provider is the service that currently hosts the domain's records, and it can be the same company or a different one (a hosting company or a service such as Cloudflare). The records have to go to the DNS provider. If you aren't sure which it is, ask whoever set up your website, or check the domain's nameserver settings at the registrar.
            </p>

            {/* Section: Choose Domain */}
            <h2 id="choose-domain" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Choose the Domain or Subdomain to Connect
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's guidance is to use a unique subdomain that isn't used for any other purpose, with examples such as one starting with mg. (<a href="https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">overview</a>). The Add and Verify page recommends a subdomain too (<a href="https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Add and Verify Domain DNS Records</a>). Its examples elsewhere start with lc. or mail.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A subdomain keeps the new email records separate from anything already running on your main domain. That matters most when your main domain's mailboxes are hosted somewhere else. HighLevel's pages warn that existing SPF or MX records can block setup and that the MX records used here conflict with Google Workspace's MX records on a main domain. For those cases they say to use a subdomain (<a href="https://help.gohighlevel.com/support/solutions/articles/155000004427-manually-adding-dns-records-for-dedicated-sending-domains" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Manually Adding DNS Records</a>).
            </p>
            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  <strong className="text-[#1A2236]">Safety rule:</strong> don't delete or change existing email records to make room for the new ones. One HighLevel page suggests removing existing MX or SPF records when it shows an error that the domain already points to an email server. Don't do that on a domain that still sends or receives real mail. Choose a fresh subdomain, or ask the person who manages your email what depends on those records first.
                </p>
              </div>
            </div>

            {/* Section: Find Settings */}
            <h2 id="find-settings" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Find the Sending-Domain Settings in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              According to HighLevel's Getting Started page and its domain guides, the path is <strong className="text-[#1A2236]">Settings &gt; Email Services &gt; Dedicated Domain and IP</strong>, in the sub-account (<a href="https://help.gohighlevel.com/support/solutions/articles/155000005058-getting-started-setup-email-phone-and-sms" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Getting Started</a>). The page that describes adding the domain then says to click <strong className="text-[#1A2236]">+ Add Domain</strong> at the top right, enter the domain or subdomain, and click <strong className="text-[#1A2236]">Add &amp; Verify</strong>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Different HighLevel pages label the same area slightly differently (for example "Dedicated Domain", or "SMTP Service &gt; Dedicated Domain and IP"). If your account doesn't match exactly, look for the dedicated-domain area under Email Services. If you can't find it, check you are in the sub-account, not the agency view, and that the sub-account uses LC Email.
            </p>

            {/* Section: Automatic or Manual */}
            <h2 id="automatic-or-manual" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Automatic or Manual DNS Configuration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              After you add the domain, HighLevel may offer to configure the records for you. Which route you use depends on your DNS provider.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]"></th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Automatic</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Manual</th>
                  </tr>
                </thead>
                <tbody>
                  {automaticVsManual.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.aspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.auto}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's page names Cloudflare, GoDaddy and Namecheap as providers it detects, but only as examples, and HighLevel's own GoDaddy, Google and Siteground guides describe manual entry only. Don't assume your provider supports the automatic route. Add the domain, see what HighLevel offers, and fall back to manual if it doesn't. Authorizing the automatic route lets HighLevel change DNS records at that provider, so only authorize if you're entitled to, and review the records afterward.
            </p>

            {/* Section: Add DNS Records */}
            <h2 id="add-dns-records" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Add the DNS Records HighLevel Gives You
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you chose the manual route, or HighLevel prompted you for it, work through these steps. Every value comes from your own HighLevel screen. Don't copy values from a tutorial, including this one.
            </p>
            <div className="space-y-3 mb-6">
              {[
                '<strong>Open the records screen in HighLevel.</strong> After Add & Verify, HighLevel shows the DNS records for this domain with a Copy button. Keep it open.',
                '<strong>Identify your DNS provider</strong> (see the registrar note above), and sign in to it, or send the values to the person who can.',
                '<strong>Open the DNS zone for the right domain.</strong> Records for a subdomain such as a sending subdomain are normally added in the zone of your main domain. Make sure you are in the zone for the domain you actually own, not a similar one.',
                "<strong>Add one record at a time.</strong> For each record on the HighLevel screen, create a record at your DNS provider with the same <strong>Type</strong> (TXT, MX or CNAME), the same <strong>Name or Host</strong>, and the same <strong>Value</strong>. Copy values exactly and watch for stray spaces. If the provider asks for an MX priority and HighLevel's screen doesn't show one, confirm it with HighLevel support, as HighLevel's provider guides use a specific number you shouldn't guess.",
                "<strong>Set the TTL if your provider asks.</strong> HighLevel's Add and Verify page suggests 5 minutes (300 seconds) where possible. It's a recommendation, and it only affects how quickly changes are picked up.",
                "<strong>Save.</strong> Some providers save each record as you add it. Others expect one save at the end. Follow your provider's behavior, and make sure all records are saved before verifying.",
                '<strong>Go back to HighLevel</strong> and compare the list on screen with what you entered before you click verify.',
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed" dangerouslySetInnerHTML={{ __html: step }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Host Field */}
            <h2 id="host-field" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Host or Name Field: The Most Common Slip
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's manual-records page says to enter only the prefix shown, not the root domain. For a record named replies.companyname.com, you would enter only replies. Entering the whole name can produce a doubled hostname (replies.companyname.com.companyname.com), which fails. For a root domain, HighLevel's page uses @.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Providers differ. Many append your domain automatically, which causes the doubling, but some display the full name. Check how your provider shows an existing record, and match its format. HighLevel's GoDaddy, Google and Siteground guides each describe how that provider handles the field.
            </p>

            {/* Section: Records You Will See */}
            <h2 id="records-you-will-see" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Records You Will Probably See
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's pages don't all agree on the list. The manual-records page and the Google, GoDaddy and Siteground guides describe five records. The Add and Verify page lists SPF, DKIM, CNAME, MX and DMARC. <strong className="text-[#1A2236]">Add the records your own screen lists. Don't add or skip records based on a generic list.</strong>
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Record type</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What HighLevel's pages say</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to do</th>
                  </tr>
                </thead>
                <tbody>
                  {recordTypes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.type}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.says}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.todo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This article doesn't explain how these authentication records work. (Planned link, not yet published: how SPF and DKIM work and how to verify email authentication) does.
            </p>

            {/* Section: Verify and Status */}
            <h2 id="verify-and-status" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Verify the Domain and Read the Status
            </h2>
            <div className="space-y-3 mb-6">
              {[
                "<strong>Wait a short while after saving</strong>, then return to HighLevel. HighLevel's manual-records page suggests waiting 15 to 30 minutes if a record shows a red mark before trying again.",
                "<strong>Start verification.</strong> HighLevel's Add and Verify page says to open the three-dot menu next to the domain and click <strong>Verify domain</strong>. Other pages call it Verify Records, Verify Domain or Verify DNS Settings. Look for the verify action in your account.",
                '<strong>Read the list.</strong> HighLevel shows each required record with its own status. The domain is marked verified once all records pass, and the Add and Verify page describes the final state as "Verified / Active".',
                '<strong>If you used the automatic route,</strong> the domain is marked Verified when it completes. Review the DNS provider\'s records anyway.',
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
              <strong className="text-[#1A2236]">How long it takes</strong> varies. HighLevel's Add and Verify page says verification typically completes within 1 to 10 minutes but that propagation can take 24 to 48 hours, depending on the TTL. The manual-records page says Cloudflare and Siteground often apply changes within minutes, while GoDaddy and Namecheap can take 30 minutes to 48 hours. The overview says up to 24 hours. These are estimates from HighLevel's pages, not promises.
            </p>

            {/* Section: What Happens After */}
            <h2 id="what-happens-after" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens After the Domain Verifies
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880]">
              {[
                { title: 'SSL.', body: 'HighLevel says an SSL certificate is issued automatically when a dedicated domain is verified, usually within a few minutes. It secures tracking, open, click and unsubscribe links. If it\'s missing, re-running verification triggers issuance (<a href="https://help.gohighlevel.com/support/solutions/articles/48001227438-ssl-certificates-for-dedicated-lc-email-domains" target="_blank" rel="noopener noreferrer" class="text-[#0E9BF0] hover:underline">SSL Certificates for Dedicated LC Email Domains</a>).' },
                { title: 'Sender details.', body: 'In the same dedicated domain area, find the domain and use <strong class="text-[#1A2236]">Set Headers</strong> to enter a From Name and From Email, then save. HighLevel says the saved header overrides the From Name and From Email on campaigns and workflows sent through that domain, and the From Email should sit on this domain (<a href="https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains" target="_blank" rel="noopener noreferrer" class="text-[#0E9BF0] hover:underline">Default Headers</a>).' },
                { title: 'Which emails use the domain.', body: 'If you have more than one dedicated domain, HighLevel lets you assign domains to different email types and set a default. It recommends setting a default before launching campaigns (<a href="https://help.gohighlevel.com/support/solutions/articles/155000004429-assigning-dedicated-sending-domains-to-different-email-types" target="_blank" rel="noopener noreferrer" class="text-[#0E9BF0] hover:underline">Assigning Dedicated Sending Domains</a>).' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: `<strong>${item.title}</strong> ${item.body}` }} />
                </li>
              ))}
            </ul>

            {/* Section: What Verified Means */}
            <h2 id="what-verified-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What a Verified Sending Domain Means
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A verified status is useful, but it's one step in a longer chain. These outcomes are related and different:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Stage</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it means</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Does it prove the next stage?</th>
                  </tr>
                </thead>
                <tbody>
                  {verifiedStages.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.stage}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.means}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.proves}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's Add and Verify page recommends sending test emails afterward and checking that SPF and DKIM pass in the headers. How to do that check is in (Planned link, not yet published: how SPF and DKIM work and how to verify email authentication).
            </p>

            {/* Section: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Mistakes to Prevent While Connecting
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Mistake</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">How to prevent it</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.mistake}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.prevent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Does Not Verify */}
            <h2 id="does-not-verify" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              If Your Domain Does Not Verify
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Don't make random DNS changes. First, make sure the records are saved and enough time has passed, since HighLevel's estimates range from minutes to 48 hours. Then click verify again. If a record still shows a problem, compare what HighLevel expects with what your DNS provider shows for that record: type, name and value. HighLevel's manual-records page says that if the issue persists after 24 hours, confirm the records were saved correctly at your DNS provider or contact support.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a step-by-step approach, see (Planned link, not yet published: how to troubleshoot a sending domain that will not verify). It covers causes and fixes in detail.
            </p>

            {/* Section: Conclusion */}
            <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Conclusion
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Connecting a sending domain comes down to five moves: pick a clean subdomain, find the dedicated domain settings, choose automatic or manual configuration, add exactly the records your screen shows, and verify. A verified status tells you HighLevel recognizes your configuration, not that your messages will reach the inbox. Your next step is to set the From Name and From Email and, if you use more than one domain, choose a default.
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
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">How to Add a Domain and Verify DNS Record</a> (HighLevel, modified 30 Jun 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000004427-manually-adding-dns-records-for-dedicated-sending-domains" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Manually Adding DNS Records for Dedicated Sending Domains</a> (30 Jun 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Dedicated Email Sending Domains Overview & Setup</a> (17 Apr 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000005058-getting-started-setup-email-phone-and-sms" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Getting Started: Setup Email, Phone & SMS</a> (23 Mar 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/48001227438-ssl-certificates-for-dedicated-lc-email-domains" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">SSL Certificates for Dedicated LC Email Domains</a> (30 Jun 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Default Headers for Dedicated Sending Domains</a> (8 Sep 2026) and <a href="https://help.gohighlevel.com/support/solutions/articles/155000004429-assigning-dedicated-sending-domains-to-different-email-types" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Assigning Dedicated Sending Domains to Different Email Types</a> (30 Jun 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/48001237513-godaddy-dedicated-sending-domain-setu-lc-email-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">GoDaddy guide</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/48001240481-google-dedicated-sending-domain-setup-lc-email-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Google guide</a> and <a href="https://help.gohighlevel.com/support/solutions/articles/155000000568-siteground-dedicated-sending-domain-setup-lc-email-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Siteground guide</a> (all 30 Jun 2026).
                </li>
                <li>
                  <a href="https://help.gohighlevel.com/support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Connecting Your Domain on GHL</a> (25 Mar 2026) and <a href="https://help.gohighlevel.com/support/solutions/articles/155000006793-email-authentication-errors-fix-spf-dkim-and-dmarc-issues" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Email Authentication Errors</a> (1 Jul 2026).
                </li>
              </ul>
            </div>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about connecting a sending domain in GoHighLevel?</strong>
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">A verified status tells you HighLevel recognizes your configuration, not that your messages will reach the inbox.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up implements GoHighLevel for agencies and service businesses. If you need help connecting a sending domain, get in touch.
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
                Prepared from HighLevel's published documentation, read 28 October 2026. The complete workflow was not independently tested in a live HighLevel account, and menu names or button labels can change. No DNS values appear in this article.
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