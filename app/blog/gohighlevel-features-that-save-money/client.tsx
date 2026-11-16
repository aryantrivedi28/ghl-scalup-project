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
  Rocket,
  DollarSign,
  FileSignature,
  Mail,
  MessageSquare,
  LayoutTemplate,
  Users,
  CalendarClock,
  Workflow,
  BarChart3,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  XCircle,
  AlertCircle,
  PieChart,
  Wallet,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function FeaturesSaveMoneyClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'hidden-cost',
      'what-ghl-is',
      'feature-1',
      'feature-2',
      'feature-3',
      'feature-4',
      'feature-5',
      'feature-6',
      'feature-7',
      'bonus-support',
      'how-much-save',
      'costs-not-gone',
      'work-out-number',
      'who-should',
      'before-switch',
      'bottom-line',
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
      q: 'Can GoHighLevel really replace seven tools?',
      a: 'It covers the main jobs of each one. It may not match every advanced feature of a specialist tool, so check the features you rely on first.'
    },
    {
      q: 'Does GoHighLevel replace Zapier?',
      a: 'Not fully. It reduces how much you need it for things inside GoHighLevel. Connecting outside apps may still need Zapier or similar, and some steps are charged by use.'
    },
    {
      q: 'Are texts cheaper than Twilio?',
      a: 'Not by much. HighLevel says its prices are comparable. The benefit is having everything in one inbox.'
    },
    {
      q: 'What do I pay on top of the plan price?',
      a: 'Charges for emails, texts, phone numbers and some automation steps, plus US text registration and carrier fees.'
    },
    {
      q: 'How much will I save?',
      a: 'It depends on what you pay now. Use the four-step method above to work out your own number.'
    },
    {
      q: 'Is it good for a small business?',
      a: 'Often yes, especially if you pay for several overlapping tools. Check the plan limits, since the Starter plan includes three sub-accounts.'
    },
    {
      q: "Who shouldn't switch?",
      a: 'Businesses that rely on a specialist feature, must use a specific provider, or already have a low bill.'
    },
    {
      q: 'How long does it take to move?',
      a: 'It depends on how many pages, automations and templates you have. A step-by-step move is usually easier than switching everything at once.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'hidden-cost', title: 'The Hidden Cost of Using Lots of Different Tools' },
    { id: 'what-ghl-is', title: 'What GoHighLevel Is and What It Costs' },
    { id: 'feature-1', title: 'Feature 1: Signing Contracts Without a Separate Subscription' },
    { id: 'feature-2', title: 'Feature 2: Email Marketing Inside the Same Tool as Your Customers' },
    { id: 'feature-3', title: 'Feature 3: Text Message Marketing With Two-Way Conversations' },
    { id: 'feature-4', title: 'Feature 4: Landing Pages and Funnels' },
    { id: 'feature-5', title: "Feature 5: A CRM Where You Don't Pay Per Person" },
    { id: 'feature-6', title: 'Feature 6: Booking Calls and Appointments' },
    { id: 'feature-7', title: 'Feature 7: Automations That Reduce How Much You Need Zapier' },
    { id: 'bonus-support', title: 'Bonus: Seeing Your Whole Business in One Place + Support' },
    { id: 'how-much-save', title: 'So How Much Could You Actually Save?' },
    { id: 'costs-not-gone', title: "Costs That Don't Go Away" },
    { id: 'work-out-number', title: 'Work Out Your Own Number in Four Steps' },
    { id: 'who-should', title: 'Who Should Use GoHighLevel, and Who Shouldn\'t' },
    { id: 'before-switch', title: 'Before You Switch: A One-Hour Check' },
    { id: 'bottom-line', title: 'The Bottom Line' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const comparisonTable = [
    { need: 'Signing contracts', tool: 'DocuSign, about $11 to $45 per user a month', ghl: 'Documents & Contracts', save: 'The extra signing subscription', know: 'Regulated industries may need a specific provider' },
    { need: 'Email marketing', tool: 'ActiveCampaign, from about $15 a month and rising with your list', ghl: 'Email campaigns', save: 'Bills that grow with list size', know: 'You pay a small amount per email sent' },
    { need: 'Text messages', tool: 'Twilio, about $0.0083 per message part', ghl: 'Built-in texting', save: 'Mostly convenience, not price', know: 'Registration, carrier fees and permission still apply' },
    { need: 'Landing pages and funnels', tool: 'ClickFunnels, $97 to $297 a month', ghl: 'Funnel and website builder', save: 'The funnel subscription and its connections', know: 'Existing funnels need rebuilding' },
    { need: 'CRM', tool: 'Close, about $29 to $149 per user a month', ghl: 'CRM and pipelines', save: 'Per-person fees', know: 'Specialist sales teams may want more' },
    { need: 'Booking calls', tool: 'Calendly, about $10 to $20 per user a month', ghl: 'Calendars and booking', save: 'The scheduler plus its connection', know: 'Small saving on its own' },
    { need: 'Connecting your tools', tool: 'Zapier, from about $20 a month and rising', ghl: 'Built-in automations', save: 'Many connector tasks', know: 'Outside apps still need connecting' },
    { need: 'Reports', tool: 'Several dashboards and spreadsheets', ghl: 'Reports and dashboards', save: 'Mostly time', know: 'Needs tidy data going in' },
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
          <span className="text-[#1A2236] font-medium">Top 7 GoHighLevel Features That Save Money</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Cost Savings</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel Features</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Tool Consolidation</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Top 7 GoHighLevel Features That Can Save Dollars for Your Business
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Prices checked November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              This article walks through seven things GoHighLevel can do that may let you cancel some of those subscriptions. For each one, we'll tell you what it can save and where it falls short. We won't promise you a number, because the real saving depends on what you pay for today. At the end, there's a simple way to work out your own.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Prices below were checked in November 2026. Software prices change often, so treat them as a guide and check the latest on each company's website.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Find Your Number — Book a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-much-save"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Savings Table
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
              Open your business credit card statement and count the software lines. One tool for contracts. One for email. One for text messages. One for landing pages. One for your CRM. One for booking calls. And one more tool whose only job is to pass information between all the others. Each one made sense when you bought it. But add them up and you're paying for a pile of subscriptions that don't always talk to each other, and a lot of your time goes into keeping them running.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-features-that-save-money.png"
                  alt="Top 7 GoHighLevel features that can save money for your business by replacing separate tools"
                  width={1600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Seven GoHighLevel features that can replace separate subscriptions.</span>
              </div>
            </div>

            {/* Section: Hidden Cost */}
            <h2 id="hidden-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Hidden Cost of Using Lots of Different Tools
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Picture a business running on a bunch of separate apps held together with digital tape. Leads come in through a form, then something has to move them into the CRM, then something else has to add them to an email list, then something else has to book the call. Every link in that chain is a place where things can break.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A creator who made a popular video on this topic described exactly that. He said he was paying over $2,900 a month for software, with automations breaking all the time and hours lost on the phone with different support teams, each blaming the other. That was his story and his numbers from a past year, so don't treat them as a price list. But the pattern is familiar to a lot of small business owners.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's what separate tools really cost you:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The bills.</strong> Different tools charge in different ways: per user, per contact, per message, per automation. As you grow, several bills go up at the same time.</li>
              <li><strong className="text-[#1A2236]">The connections.</strong> Something has to carry information from one tool to the next, and that something costs money or someone's time to fix when it stops working.</li>
              <li><strong className="text-[#1A2236]">The mess.</strong> The same customer ends up in three places, with three slightly different records.</li>
              <li><strong className="text-[#1A2236]">The blame game.</strong> When something goes wrong, every company says it's another company's problem.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This is the problem GoHighLevel tries to solve by putting many of these tools in one place.
            </p>

            {/* Section: What GHL Is */}
            <h2 id="what-ghl-is" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What GoHighLevel Is and What It Costs
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel (also called HighLevel) is one platform that brings together a CRM, email and text messaging, landing pages and funnels, calendars, automations, contracts and reports. You log in once and everything about a customer sits in one record.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              As of November 2026, the main plans are about $97 a month (Starter), $297 a month (Unlimited) and $497 a month (Founder, which used to be called Agency Pro), with a discount if you pay yearly. The $97 Starter plan includes up to three sub-accounts, so businesses that manage several brands or clients may need a higher plan. Please confirm current prices on HighLevel's own pricing page.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              One thing to know up front: the plan price isn't the whole bill. Emails, text messages, phone numbers and a few special automation steps are charged by use. That's normal, because many separate tools charge for the same things. We'll point it out as we go so there are no surprises.
            </p>

            {/* Feature 1 */}
            <h2 id="feature-1" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature 1: Signing Contracts Without a Separate Subscription
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you might be paying for now.</strong> An e-signature tool like DocuSign. Its plans start at about $11 a month per user and go up to about $45 for the business plan, and they limit how many documents you can send.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel gives you.</strong> You can build contract templates, send them to a customer, and collect their signature. The signed copy is saved on that customer's record, and you can even send it automatically as part of a workflow.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you save.</strong> If you only use e-signatures now and then for standard agreements, you can probably cancel that subscription. It's usually a small saving, not a big one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Where it may not fit.</strong> Some industries need a specific signing provider or detailed legal records. If that's you, keep your current tool.
            </p>

            {/* Feature 2 */}
            <h2 id="feature-2" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature 2: Email Marketing Inside the Same Tool as Your Customers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you might be paying for now.</strong> A separate email platform like ActiveCampaign. These usually charge by the number of contacts on your list, so the bill climbs as your list grows. For example, ActiveCampaign's plans start around $15 a month for 1,000 contacts and rise from there.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel gives you.</strong> Email campaigns, automatic follow-up sequences, and a simple visual builder. Because emails live next to your contact records, you can see who opened what, who booked and who bought, without moving data between apps.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you save.</strong> Instead of paying more every time your list grows, you pay your plan fee plus a small charge for emails sent, about $0.68 per 1,000 emails. If you have a big list and send a moderate amount, this can come out a lot cheaper. If you send huge volumes, do the maths first.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Where it may not fit.</strong> Dedicated email tools are very strong at advanced email features, and some people prefer them. For most small businesses, GoHighLevel's email tools do the job. Getting emails into the inbox also depends on how you send, no matter which tool you use.
            </p>

            {/* Feature 3 */}
            <h2 id="feature-3" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature 3: Text Message Marketing With Two-Way Conversations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you might be paying for now.</strong> A texting service like Twilio, which charges about $0.0083 per message part, plus fees from the phone carriers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel gives you.</strong> Text campaigns, automatic text reminders, and two-way conversations. When a customer replies, you see it in the same place as their emails and notes, so you don't have to hunt for it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you save, honestly.</strong> Don't expect cheaper texts. HighLevel says its text prices are comparable to Twilio's, and carrier fees apply either way. The real benefit is having texts, emails and replies in one inbox, so nothing gets lost.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Two things to know before you text customers in the US. First, businesses have to register with the phone carriers before sending texts. This is called A2P 10DLC, and it comes with a one-time registration cost and a small monthly fee. Second, you need clear permission from people before you text them. Our guides on <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC fees</Link> and <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">opt-in language templates</Link> explain both in plain English.
            </p>

            {/* Feature 4 */}
            <h2 id="feature-4" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature 4: Landing Pages and Funnels
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you might be paying for now.</strong> A funnel builder like ClickFunnels. Its monthly plans run from about $97 to $297, and a top plan costs thousands a year.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel gives you.</strong> A drag-and-drop builder for landing pages, funnels, forms and websites, with ready-made templates. When someone fills in a form, they're added to your CRM straight away and can start receiving follow-up messages. There's nothing extra to connect.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you save.</strong> The funnel subscription, plus the effort and cost of connecting it to your other tools. For some businesses this is the biggest saving on the list.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Where it may not fit.</strong> If you rely on a special feature in your current funnel tool, check that GoHighLevel has an equivalent. And remember that rebuilding your existing funnels takes time.
            </p>

            {/* Feature 5 */}
            <h2 id="feature-5" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature 5: A CRM Where You Don't Pay Per Person
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you might be paying for now.</strong> A separate sales CRM. Many charge per user. Close, for example, runs from about $29 to $149 a month per person depending on the plan.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel gives you.</strong> A built-in CRM with contact records, sales pipelines, deal stages, tasks and notes. Every email, text and booking is saved on the customer's record.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you save.</strong> GoHighLevel's plans include unlimited users, so adding another person to your team doesn't add another bill. The bigger your team, the bigger this saving.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Where it may not fit.</strong> If your team spends all day calling leads and needs very advanced sales tools, a specialist CRM may still be the better pick. For most small businesses, GoHighLevel's CRM does what they need.
            </p>

            {/* Feature 6 */}
            <h2 id="feature-6" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature 6: Booking Calls and Appointments
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you might be paying for now.</strong> A scheduling tool like Calendly, about $10 to $20 a month per user.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel gives you.</strong> Booking pages, reminders, and the option to share bookings between team members. When someone books, they're added to your CRM and can start getting follow-up messages without anything extra.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you save.</strong> The scheduler subscription, which is small. We'd be honest here: nobody switches platforms just to save $16 a month. The real win is that bookings, reminders and follow-ups happen on their own, with nothing to connect.
            </p>

            {/* Feature 7 */}
            <h2 id="feature-7" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Feature 7: Automations That Reduce How Much You Need Zapier
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you might be paying for now.</strong> An automation tool like Zapier, which charges by how many tasks it runs. Plans start around $20 a month for 750 tasks and rise as you use more.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What GoHighLevel gives you.</strong> Automations built right in. When a form is filled in, a call is booked or a customer replies, GoHighLevel can send messages, move the deal to the next stage, create a task and more, all inside the platform.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What you save.</strong> If most of your Zapier tasks were just moving information between your own tools, a lot of that can disappear, and so does the worry about connections breaking.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">What it doesn't do.</strong> GoHighLevel doesn't get rid of Zapier or Make completely. If you use apps outside GoHighLevel, like accounting software, you may still need a connector. Some automation steps that talk to outside apps are charged about one cent each. So the honest promise is "far less" tool-gluing, not "none".
            </p>

            {/* Bonus + Support */}
            <h2 id="bonus-support" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Bonus: Seeing Your Whole Business in One Place
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When your leads, bookings, emails and sales are all in one system, you can answer simple questions quickly. Where did our best customers come from? Which follow-up gets the most bookings? Which stage of the pipeline loses the most deals? You don't have to export from four tools and match it up in a spreadsheet.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This saves time more than money, and it only works if your team keeps the information up to date.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Support: One Place to Go When Something Breaks</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This isn't a saving you can count on, but it matters. When you use many tools and something stops working, you can end up phoning several companies who each point at the others. With one platform, there's one place to ask. HighLevel lists 24/7 support through chat, tickets, phone and Zoom, plus a paid premium support option.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              One thing we couldn't confirm: the creator in the video said support can take over your screen and fix things for you. We couldn't find that in HighLevel's official information, so don't count on it. Also, one platform won't stop things from ever breaking. It just means fewer people to chase.
            </p>

            {/* How Much Could You Save */}
            <h2 id="how-much-save" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              So How Much Could You Actually Save?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The honest answer is: it depends on what you pay for now. Here's a quick side-by-side to show where the savings could come from.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you need</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">A separate tool you might use</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">GoHighLevel does this with</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where you may save</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Worth knowing</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.need}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.tool}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.ghl}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.save}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.know}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Costs That Don't Go Away */}
            <h2 id="costs-not-gone" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Costs That Don't Go Away
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before you add up a big saving, remember what you'll still pay for:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>The GoHighLevel plan itself.</li>
              <li>Charges for emails, texts, phone numbers and some automation steps.</li>
              <li>US text registration and carrier fees, if you text customers.</li>
              <li>The time it takes to move your pages, automations and templates over.</li>
              <li>Time to learn the platform, and help from an expert if your setup is complicated.</li>
            </ul>

            {/* Work Out Your Own Number */}
            <h2 id="work-out-number" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Work Out Your Own Number in Four Steps
            </h2>
            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Add up what you pay now.</strong> List every tool you'd replace, including the connector tool. If you pay yearly, divide by 12.</li>
              <li><strong className="text-[#1A2236]">Add up what you'd pay on GoHighLevel.</strong> Your plan, plus your expected emails, texts and phone numbers, plus any tools you're keeping.</li>
              <li><strong className="text-[#1A2236]">Add the one-time costs.</strong> Moving over takes time or help. Spread that cost across the next 12 months.</li>
              <li><strong className="text-[#1A2236]">Subtract.</strong> What you pay now, minus what you'd pay on GoHighLevel, minus the one-time costs spread over a year. That's your real monthly difference.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If the answer is small, or even below zero, that's useful to know too. Some people still move for simpler work and cleaner records. Others decide to stay where they are.
            </p>

            {/* Who Should Use */}
            <h2 id="who-should" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Who Should Use GoHighLevel, and Who Shouldn't
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The right choice depends on how your business works, not just how many people you have.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel is probably a good fit if:</strong>
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>You pay for five or more tools that all serve the same journey from lead to customer.</li>
              <li>Leads get lost or slowed down because your tools don't talk to each other.</li>
              <li>You pay per user or per contact and your team or list is growing.</li>
              <li>You'd like every conversation with a customer in one place.</li>
              <li>You're a small business owner, a coach or a solo business without a full-time tech person.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">You may be better off keeping your specialist tools if:</strong>
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>One of your tools does something GoHighLevel can't, and your business depends on it.</li>
              <li>Your industry requires a specific provider.</li>
              <li>You have a technical team that keeps a best-in-class stack running smoothly.</li>
              <li>You run paid ads on very thin margins, where a finely tuned stack can make a real difference.</li>
              <li>You're happy with your tools and your total bill is already low.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              You don't have to move everything either. Some businesses move the tools that overlap and keep the one specialist tool they love.
            </p>

            {/* Before You Switch */}
            <h2 id="before-switch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Before You Switch: A One-Hour Check
            </h2>
            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Write down every tool you pay for, what it costs and when it renews.</li>
              <li>Next to each, write what it does: signing, email, texts, pages, CRM, booking, automation or reports.</li>
              <li>Note who actually uses it. Unused seats are savings you can take today, whatever you decide.</li>
              <li>List every connection between your tools and what it costs.</li>
              <li>Mark the tools you can't live without.</li>
              <li>Work out your number using the four steps above.</li>
            </ol>

            {/* Bottom Line */}
            <h2 id="bottom-line" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Bottom Line
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel can cut software costs where your tools overlap: contracts, email, texts, funnels, CRM, booking, automations and reports. The savings are biggest when you pay per user or per contact, and when a lot of your bill goes on connecting tools together. They're smallest when you need a specialist feature, send very large amounts of texts, or already pay very little.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              We can't promise a number. What we can do is help you find yours. If you'd like a second opinion on which parts of your setup could move and which should stay, GHL Scale Up can go through it with you. <Link href="/book-a-call" className="text-[#0E9BF0] hover:underline">Book a call</Link>, or read our guide on <Link href="/blog/consolidate-marketing-tools-gohighlevel" className="text-[#0E9BF0] hover:underline">consolidating marketing tools with GoHighLevel</Link>.
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

            {/* Note */}
            <p className="text-xs text-[#5C6880] leading-relaxed mb-6 mt-6">
              Prices from HighLevel, DocuSign, ActiveCampaign, ClickFunnels, Close, Calendly, Zapier and Twilio were gathered from search results and help pages in November 2026. HighLevel's own pricing page could not be opened while preparing this article, so please confirm plan prices before publishing. The story about $2,900 a month comes from a creator's video and is not a GHL Scale Up result.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about what GoHighLevel could save you?</strong>
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">We can't promise a number. What we can do is help you find yours.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  If you'd like a second opinion on which parts of your setup could move and which should stay, GHL Scale Up can go through it with you.
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
                Prices checked November 2026. Software prices change often, so treat them as a guide and check the latest on each company's website.
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