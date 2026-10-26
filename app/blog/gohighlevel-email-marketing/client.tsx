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
  BarChart3,
  Workflow,
  Users,
  Send,
  Server,
  CheckCircle2,
  XCircle,
  AlertCircle,
  DollarSign,
  Search,
  Filter,
  Rocket,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function GoHighLevelEmailMarketingClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'what-is',
      'is-it-good',
      'features',
      'faq',
      'conclusion',
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
      q: 'What is GoHighLevel email marketing used for?',
      a: 'Sending one-time campaigns and automated follow-up emails to contacts stored in the same CRM, with reports on the results.'
    },
    {
      q: 'Is GoHighLevel good for email marketing?',
      a: 'It can be if your email is tied to leads, bookings and follow-up and you can manage setup. If email is your only channel and you want the simplest tool, a dedicated platform may fit better.'
    },
    {
      q: 'Can GoHighLevel send automated emails?',
      a: 'Yes. Workflows can send emails from triggers, and email events such as opens or bounces can start workflows. You must design and test them.'
    },
    {
      q: 'Does GoHighLevel include email campaign reporting?',
      a: 'Yes: statistics for sent, delivered, opened, clicked, bounced and unsubscribed, dashboard widgets and exports. Some views need LC Email, and opens are an imperfect signal.'
    },
    {
      q: 'What are the main limitations of GoHighLevel email marketing?',
      a: 'Several features have prerequisites (a dedicated domain for tracking, a minimum volume for Smart Send), segments cannot be edited by hand, and deliverability depends on your sending setup. Whether a specific feature is in your plan must be verified.'
    },
    {
      q: 'Should a business choose GoHighLevel or a dedicated email platform?',
      a: 'Choose by your needs: GoHighLevel when email is part of a multi-channel follow-up process, a dedicated tool when email depth and simplicity matter most. Check requirements feature by feature.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is', title: 'What Is GoHighLevel Email Marketing?' },
    { id: 'is-it-good', title: 'Is GoHighLevel Good for Email Marketing?' },
    { id: 'features', title: 'GoHighLevel Email Marketing Features and Limitations' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  const strengths = [
    {
      strength: 'Email and CRM share one record',
      helps: 'Keep a lead\'s contact details, tags and follow-up in one system instead of exporting between tools',
      must: 'Accurate contact data and consistent tagging',
      trade: 'A shared system is only as good as its data; bad records hurt every channel at once',
    },
    {
      strength: 'Campaigns plus automation',
      helps: 'Run broadcasts and event-triggered follow-up in the same place',
      must: 'Workflow logic someone designs and tests',
      trade: 'Automation needs oversight; a mistake can email many people',
    },
    {
      strength: 'Several channels together',
      helps: 'Combine email with SMS, booking and pipelines in one follow-up',
      must: 'Consent and setup for each channel',
      trade: 'More channels means more configuration and more things to learn',
    },
    {
      strength: 'Built-in sending service',
      helps: 'Send without choosing and connecting a separate email provider',
      must: 'A sending domain set up for the best results',
      trade: 'Reputation and daily limits depend on your setup and account stage',
    },
    {
      strength: 'Reports tied to contacts',
      helps: 'Open reports and also filter contacts by email activity (LC Email accounts)',
      must: 'Tracking turned on',
      trade: 'Some views require LC Email; opens are an imperfect signal',
    },
  ];

  const fitFramework = [
    {
      fit: 'Likely a good fit: worth evaluating',
      situation: 'Your email follows leads, bookings or purchases; you also use SMS or calendars; you or an agency can configure workflows and manage a sending domain',
      verify: 'That the specific features you need exist in your account; sending limits; who maintains the setup',
    },
    {
      fit: 'Potentially a good fit',
      situation: 'You send mostly newsletters or promotions but want one system for contacts; you are an agency managing several clients; you are moving from a standalone tool',
      verify: 'Whether segmentation, A/B testing and reporting cover your current use; how you would migrate the list and your sending reputation; usage costs at your volume',
    },
    {
      fit: 'Another tool may be better',
      situation: 'Email is your main channel and you want the simplest purpose-built tool; you need specialized email functionality you cannot confirm HighLevel offers; no one on the team wants to manage configuration',
      verify: 'A feature-by-feature check against your requirements; a trial of the alternative',
    },
  ];

  const featureAreas = [
    {
      area: 'Campaign creation',
      enables: 'Visual editor, templates, test emails, send now, schedule, batch, RSS, A/B tests, send-time suggestion',
      matters: 'Lets you run broadcasts without code',
      limitation: 'Some options have prerequisites (see below); content design is on you',
    },
    {
      area: 'Automation',
      enables: 'Send Email action in workflows; triggers from email events',
      matters: 'Consistent follow-up without manual sending',
      limitation: 'You design, test and monitor it',
    },
    {
      area: 'Contact management',
      enables: 'Segments, tags, custom fields, Smart Lists, email DND and unsubscribe handling',
      matters: 'Targets the right contacts and respects opt-outs',
      limitation: 'Segment membership is rule-based only; quality depends on your data',
    },
    {
      area: 'Reporting',
      enables: 'Campaign statistics, dashboard widgets, contact-level email analytics, export',
      matters: 'Shows what was sent and how people responded',
      limitation: 'Several views require LC Email; opens are not proof of reading',
    },
    {
      area: 'Sending infrastructure',
      enables: 'LC Email, dedicated sending domains, SMTP options',
      matters: 'Determines limits, tracking and reputation',
      limitation: 'Inbox placement is never guaranteed by the software',
    },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Email Marketing</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Email Marketing</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">LC Email</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Campaigns & Automation</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Email Marketing: How It Works and Is It Worth It?
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Facts checked against HighLevel help pages, 26 October 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              <strong className="text-white">GoHighLevel email marketing</strong> is the set of email tools inside GoHighLevel, an all-purpose CRM and marketing platform: you build emails in a visual editor, send them to groups of contacts as one-time campaigns, send them automatically from workflows, and see the results in reports, all connected to the same contact records. The emails go out through HighLevel's built-in sending service, called LC Email, or through a third-party SMTP service you connect.
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              <strong className="text-white">Is it good for email marketing?</strong> It depends on what else you need. It is worth evaluating if your email is closely tied to leads, bookings, SMS and follow-up, and if you can handle some configuration. A dedicated email platform may suit you better if email is your main channel and you want the simplest possible tool for it. The rest of this guide explains how the pieces work, what each can and cannot do, and how to decide.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Disclosure: GHL Scale Up implements GoHighLevel. This guide relies on HighLevel's documentation and says where it is unclear. We have not tested these features for this article, so confirm details in your own account.</em>
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
              href="#features"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Features
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

            {/* Section: What Is */}
            <h2 id="what-is" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Is GoHighLevel Email Marketing?
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Where email sits in the platform</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is built around a CRM, which is a database of contacts and what has happened with each of them. Email is one communication channel attached to those contacts, alongside SMS, calls and chat. That placement is the main idea. A contact's email address, tags, custom fields, appointments and past messages live in one system, and email tools read from it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three terms are worth separating, because they are easy to blur:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Campaigns</strong> are one-time sends. You choose recipients and a time, and the email goes out. In the interface you find them under Marketing &gt; Emails &gt; Campaigns.</li>
              <li><strong className="text-[#1A2236]">Workflows</strong> are automations. A trigger, which is the event that starts the sequence (for example, a form submission), leads to steps such as sending an email, waiting, or tagging the contact.</li>
              <li><strong className="text-[#1A2236]">LC Email</strong> is the sending service behind the scenes. HighLevel describes it as the built-in service that handles sending and receiving for each sub-account, so you do not need a separate provider. Campaigns and workflows are features. LC Email, or an SMTP service you connect, is what actually delivers the message.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">One-time sends versus ongoing follow-up</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A campaign answers the question 'who should hear about this, and when?' A workflow answers 'what should happen after this person does something?' A newsletter or announcement is a campaign. A welcome email that should reach every new lead, whenever they arrive, is a workflow. HighLevel's reports also separate email by source, so workflow emails and campaign emails can be viewed apart.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What businesses use it for</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The documented building blocks support these kinds of communication:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Broadcast and promotional emails to a chosen audience, sent immediately, on a schedule, in batches, or generated from an RSS feed.</li>
              <li>Automatic emails triggered by events, using the Send Email workflow action, with personalization from contact data.</li>
              <li>Follow-up that reacts to email activity, because opens, clicks, bounces and unsubscribes can start workflows.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">An illustration (hypothetical, not a real customer).</strong> A home-renovation company has a contact record for each inquiry. When someone fills in the website form, a workflow sends a welcome email, waits two days, and checks whether the person has booked a consultation. If they have not, it sends one reminder. Separately, once a month the owner sends a campaign to past customers who carry a 'customer' tag. Both messages draw on the same contact records, and both appear in the company's email reports. The value is the shared record. The cost is that someone must keep the tags and fields accurate.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What a new user should know first</h3>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Email in HighLevel is a feature of a wider platform, not a standalone product, and it is billed as usage on top of the plan (see the next sections).</li>
              <li>A feature existing does not mean an email reaches the inbox. Sending setup and list quality matter as much as the editor.</li>
              <li>Many details depend on whether you use LC Email or an SMTP service. Several reports only work with LC Email.</li>
            </ul>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-email-marketing.png"
                  alt="A screenshot of Marketing > Emails > Statistics would add value, but only if captured from a real account. Do not publish screenshots or alt text for images that do not exist."
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Image placeholder. The document specifies no image or screenshot is required, and that a real screenshot of Marketing &gt; Emails &gt; Statistics would add value only if captured from a live account.</span>
              </div>
            </div>

            {/* Section: Is It Good */}
            <h2 id="is-it-good" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is GoHighLevel Good for Email Marketing?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Evaluate it against what you need to do. The table sets each real strength next to its condition and its trade-off. These are our reasoning from the documented features, not HighLevel's claims.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Strength</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it helps you do</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What must be in place</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Trade-off</th>
                  </tr>
                </thead>
                <tbody>
                  {strengths.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.strength}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.helps}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.must}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.trade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Consolidation is not automatically better. One platform reduces switching between tools, but a specialist email tool may be simpler or deeper for email alone. HighLevel's value rises with how much of your follow-up crosses channels, and falls if you only send email.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">A suitability framework</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Fit</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Typical situation</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to verify</th>
                  </tr>
                </thead>
                <tbody>
                  {fitFramework.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.fit}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.situation}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.verify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              On alternatives: we compare one in particular in our <Link href="https://www.ghlscaleup.com/blog/gohighlevel-vs-activecampaign" className="text-[#0E9BF0] hover:underline">GoHighLevel versus ActiveCampaign comparison</Link>, which also covers plan prices. This article does not rank email platforms.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Costs, briefly</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's LC Email page lists a usage rate of $0.675 per 1,000 emails, plus $2.50 per 1,000 for optional email verification, billed at the agency level, as of the date we checked. These sit on top of the platform plan. Plans, usage and re-billing are covered in our <Link href="https://www.ghlscaleup.com/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">pricing guide</Link> and change often, so confirm current rates.
            </p>

            {/* Section: Features */}
            <h2 id="features" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Email Marketing Features and Limitations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For each area below we separate four things: what the platform supports, what you must configure, what depends on your account or sending service, and what software alone cannot guarantee.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Area</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it enables</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why it matters</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Main limitation or dependency</th>
                  </tr>
                </thead>
                <tbody>
                  {featureAreas.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.area}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.enables}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.matters}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.limitation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">A. Campaign creation</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In Marketing &gt; Emails you work in two tabs: Templates and Campaigns. You start from a template in the library or from scratch, edit it in the Email Builder, send a test, and then choose Send or Schedule. HighLevel's builder page describes a drag-and-drop editor with elements such as text, images, buttons, video, a code element for custom HTML, and layout columns, plus mobile controls. Optional AI writing help (ContentAI, and an Email AI panel that requires enabling in Agency Labs settings) is documented.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In practice, a non-developer can build a normal marketing email. Teams that want precise design will meet limits that apply to all email: HighLevel notes that email clients support HTML and CSS unevenly, so you test before sending.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Delivery methods:</strong> Send Now, Schedule, Batch (splits a large list into groups over time), and RSS Schedule (an email each time a feed updates). You can change a scheduled send only up to an hour before launch.</li>
              <li><strong className="text-[#1A2236]">A/B testing:</strong> up to six variations; one test type per campaign (subject line or content); winners are chosen by unique open rate for subject tests and unique click rate for content tests. Because opens are an imperfect signal (see reporting), treat a subject-line 'winner' with care. That caution is our interpretation.</li>
              <li><strong className="text-[#1A2236]">Smart Send:</strong> suggests a send time from the past 60 days of engagement. It requires at least 1,000 emails delivered in the previous 60 days, works at the account level rather than per contact time zone, and supports Email Builder campaigns only.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">B. Email automation</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A workflow starts with a trigger, then runs actions. The Send Email action lets you set the sender, pick a template or write the email, personalize with contact fields, and attach files. Email events can themselves be triggers: HighLevel lists opened, clicked, bounced and unsubscribed (its page is inconsistent about whether 'complained' is also supported).
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Example:</strong> a workflow that fires when a contact's email bounces can switch on email DND for that contact, so you stop emailing a dead address. HighLevel documents this recipe but notes it treats hard and soft bounces alike unless you add a condition.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Automation helps because the follow-up happens every time, not when someone remembers. It still needs design, testing and oversight. Two documented cautions: merge fields such as an appointment date appear blank if the trigger does not supply that data, and CC or BCC recipients do not appear in email statistics. This guide does not cover building workflows; see <Link href="https://www.ghlscaleup.com/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">our workflow setup guide</Link> and <Link href="https://www.ghlscaleup.com/blog/gohighlevel-automation" className="text-[#0E9BF0] hover:underline">our guide to which automations to build first</Link>.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">C. Contact management</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Email recipients come from your CRM. In the campaign you can choose Build Segments, combining filters on tags, contact fields, email activity and engagement, and save the segment for reuse. HighLevel contrasts this with Smart Lists, which are filter-based views in Contacts. Tags work as filter conditions.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two practical limits from the same page: segment membership is rule-based, so you cannot add or remove individual contacts by hand (the page suggests tagging them and filtering by the tag), and the page does not describe an exclusion option. You can also tag contacts based on who opened or clicked a campaign.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For opt-outs, HighLevel provides unsubscribe handling and an optional Preference Management feature that lets contacts opt out of categories or globally. HighLevel states that Preference Management cannot be turned off once enabled. Keeping email in the CRM helps you see who has opted out. It does not clean your list for you.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">D. Reporting and performance visibility</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Under Marketing &gt; Emails &gt; Statistics you can see sent, delivered, opened, clicked, unique opens and clicks, unsubscribed and bounced, per campaign or across campaigns, and export a CSV. Conversion metrics exist for attributed orders and revenue (default five-day attribution window), though HighLevel's own caveat is that attributed revenue is not ROI. Eleven email widgets can be added to dashboards and scheduled reports, and LC Email accounts can list contacts by who opened, clicked, bounced, complained or unsubscribed.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Available is not the same as reliable.</strong> HighLevel itself calls opens 'tracking signals rather than guaranteed proof' of reading. Mail privacy features are one reason: Apple Mail Privacy Protection pre-fetches images, so opens can be recorded when no one read the message, according to Twilio SendGrid's documentation. Clicks are a stronger signal, and business results (bookings, purchases) matter more than either. Open and click tracking also requires a dedicated LC Email sending domain with tracking switched on, and HighLevel says tracking is available only with LC Email. A separate HighLevel page says SMTP integrations generally report only opens and clicks. The pages differ, so check what your setup reports.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">E. Email-sending infrastructure</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sending infrastructure is what delivers the email. HighLevel's pages describe two routes. <strong className="text-[#1A2236]">LC Email</strong> is the built-in service. HighLevel says it manages the hosting, error monitoring and platform-level compliance, while you handle configuration and the way you send. You can also connect a third-party SMTP service, and HighLevel's Mailgun page describes Mailgun as an option for agencies that want their own dedicated infrastructure, with LC Email the default for new agencies.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Shared versus dedicated domain:</strong> sub-accounts without their own dedicated sending domain are treated as shared. HighLevel states shared-domain sub-accounts can send up to 25,000 emails per day and dedicated-domain sub-accounts up to 550,000 (above 450,000 requires contacting support).</li>
              <li><strong className="text-[#1A2236]">Ramp-up:</strong> new sub-accounts start at 250 emails per day, rising to 10,000 by day 7, per the LC Email page. HighLevel's separate sending guide lists different early stages (1,000 per day, then 2,500) and says a new dedicated domain can take around four weeks to warm up. The pages differ; the LC Email page says it is the reference, so verify in your account.</li>
              <li><strong className="text-[#1A2236]">Reputation is partly yours:</strong> HighLevel's guide says a dedicated domain gives you control over your own reputation and deliverability, and states best practices (validate addresses, include an unsubscribe link, stop sending to unengaged contacts). It frames them as improving your chances, not guaranteeing results.</li>
              <li><strong className="text-[#1A2236]">Warning signals:</strong> HighLevel's health page suggests keeping bounces under 2% and spam complaints under 0.1%.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Third-party commentary, for example from deliverability vendors, claims the default sending service shares infrastructure and that warm-up is only a rate limit. We could not verify those claims from HighLevel's pages, and the sources are sales posts for competing products with no test data, so we treat them as unproven. What is safe to say is that a campaign-sending feature and reliable inbox placement are different things, and the software cannot promise the second. Authentication records, warm-up and troubleshooting are separate topics and are not covered here.
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

            {/* Section: Conclusion */}
            <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Conclusion
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel email marketing is best understood as email built into a CRM: campaigns, automated follow-up, contact data and reports in one place, delivered through a built-in sending service you still need to configure. Its main value is that email follows what is happening with each contact. Its main dependencies are accurate data, careful workflows and a properly set up sending domain, and several features have conditions or account limits to check.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              It tends to suit businesses and agencies whose follow-up crosses email, SMS and booking. A dedicated email tool deserves a look if email is your main channel, you want the simplest purpose-built tool, or you cannot confirm that a needed feature exists. Verify your must-haves in your own account before deciding.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about GoHighLevel email marketing?</strong>
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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-vs-activecampaign" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs ActiveCampaign →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing 2026 →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation →</Link>
                <Link href="/blog/gohighlevel-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Automation: The Workflows Worth Building First →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Verify your must-haves in your own account before deciding.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up implements GoHighLevel for agencies and service businesses. If you need help scoping email marketing, campaigns or workflows, get in touch.
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
                Facts checked against HighLevel help pages, 27 October 2026. Features, limits and usage rates change; confirm in your own account. No HighLevel account was available for testing; nothing in the article claims first-hand testing. This guide relies on HighLevel's documentation and says where it is unclear.
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