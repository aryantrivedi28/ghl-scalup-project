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
  Layers,
  Users,
  FileText,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function CostToHireExpertClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'short-answer',
      'how-charge',
      'published-prices',
      'why-vary',
      'no-evidence',
      'cost-drivers',
      'expert-or-team',
      'beyond-fee',
      'one-time-ongoing',
      'compare-quotes',
      'implementation-marketing',
      'ghl-scale-up',
      'where-to-find',
      'recommendation',
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
      q: 'How much does it cost to hire a GoHighLevel expert?',
      a: 'It depends on scope, not on a standard rate. The advertised figures we found in November 2026 ranged from $8 to $25 an hour on freelancer profiles to published agency packages from $997 to $4,997. These are advertised prices, not averages or verified 2027 rates, so the useful step is to get a written, scope-based quote for your project.'
    },
    {
      q: 'Is hourly or fixed pricing better for GoHighLevel work?',
      a: 'Hourly pricing suits small, open-ended tasks, and fixed pricing suits a build you can describe clearly. Whichever you choose, check what happens if the work runs over or the scope changes.'
    },
    {
      q: "Does the expert's fee include the HighLevel subscription?",
      a: 'Usually not. The HighLevel subscription, usage charges, third-party tools and ad spend are paid separately from the expert\'s fee. Ask each quote to say what it covers.'
    },
    {
      q: 'Why do two quotes for GoHighLevel setup differ so much?',
      a: 'The two quotes probably describe different amounts of work. Compare the number of pipelines, workflows, integrations and pages, who does the work, how it\'s tested and what support follows.'
    },
    {
      q: 'Do you need ongoing support after a GoHighLevel build?',
      a: 'Many businesses do, because offers, forms and connected tools change. Budget for it as a separate line, either as hours when needed, a monthly plan or a dedicated assistant.'
    },
    {
      q: 'Can a low-cost freelancer still do a good job?',
      a: 'Yes, depending on the person and the task. Ask what is delivered, how it is tested, who owns the account and what happens if something breaks. The answers matter more than the price.'
    },
    {
      q: 'What should a good quote for GoHighLevel work include?',
      a: 'It should list the deliverables with counts, state what is excluded, name who does the work, explain testing and handover, describe support after launch, set out how scope changes are handled, and keep platform and usage costs separate.'
    },
    {
      q: 'How does GHL Scale Up price its work?',
      a: "We price by scope. We don't have one universal starting price. We assess your requirements, define the scope and deliverables, and provide a scope-based quote based on the actual work involved."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'short-answer', title: 'Short answer: what decides the cost of hiring a GoHighLevel expert?' },
    { id: 'how-charge', title: 'How do GoHighLevel experts charge for their work?' },
    { id: 'published-prices', title: 'What do published GoHighLevel prices actually tell you?' },
    { id: 'why-vary', title: 'Why do GoHighLevel expert rates vary so much?' },
    { id: 'no-evidence', title: 'Where is there no reliable pricing evidence?' },
    { id: 'cost-drivers', title: 'What drives the cost of each kind of GoHighLevel work?' },
    { id: 'expert-or-team', title: 'One expert or a team: how does the choice affect the price?' },
    { id: 'beyond-fee', title: "What will you pay for beyond the expert's fee?" },
    { id: 'one-time-ongoing', title: 'One-time build or ongoing work: how should you budget?' },
    { id: 'compare-quotes', title: 'How do you compare GoHighLevel expert quotes?' },
    { id: 'implementation-marketing', title: 'When do implementation and marketing run together?' },
    { id: 'ghl-scale-up', title: 'How does GHL Scale Up scope and quote GoHighLevel projects?' },
    { id: 'where-to-find', title: 'Where do you find a GoHighLevel expert to quote?' },
    { id: 'recommendation', title: 'Our recommendation: how should you decide?' },
    { id: 'faq', title: 'Frequently asked questions' },
  ];

  const costDrivers = [
    'Scope: what the system has to do, and for how many people or locations.',
    'Complexity: simple one-step follow-up costs less to build than branching sequences with many conditions.',
    'Number and type of deliverables: pipelines, workflows, funnels, forms, calendars, reports and training are each separate pieces of work.',
    'Integrations and automations: every connection to another tool adds building and testing time.',
    'Technical expertise: work that needs custom API or AI setup calls for deeper skills than basic configuration.',
    'One-time or ongoing: a single build and a monthly management arrangement are priced differently.',
    'Added marketing services: ads, lead generation and content are separate work on top of the build.',
  ];

  const chargeModels = [
    { model: 'Hourly rate', desc: "you pay for time worked. It suits small, open-ended tasks, but the final total isn't known until the work is done." },
    { model: 'Fixed project price', desc: 'one price for a defined piece of work. It is only as reliable as the written scope behind it.' },
    { model: 'Package', desc: "a set bundle with stated limits. For example, one agency's setup package lists up to three pipelines and up to five workflows, so anything beyond that is extra." },
    { model: 'Monthly plan', desc: 'a recurring fee for ongoing changes, monitoring and support, often with a set number of hours.' },
    { model: 'Per-item add-ons', desc: 'a price for each extra workflow, integration or training hour on top of a base package.' },
  ];

  const evidenceTable = [
    { type: 'Client-posted budgets', found: 'Three Upwork job posts listed hourly budgets of $7 to $27, $8 to $18 and $10 to $35. One simple automation was posted at a $20 fixed budget. One agency support role was posted at a $500 fixed budget.', can: 'What some buyers hope to spend.', cant: 'What experts charge, or what any project cost in the end.' },
    { type: 'Individual freelancer advertised rates', found: "Upwork profiles in the listings we checked showed $8 to $25 an hour, from freelancers in places including Pakistan, India, the Philippines, Nigeria and the UAE. Upwork's page for marketing automation consultants in general (not only GoHighLevel) states $40 to $90 an hour.", can: 'A starting point for the rates individuals ask for.', cant: 'The rate for your project, or the rate of a freelancer in your region.' },
    { type: 'Platform estimate', found: "Upwork's GoHighLevel guide says projects often range from about $300 for a focused setup to $10,000 or more for a large build. It doesn't show the data behind that statement.", can: 'How one marketplace describes the span of project sizes.', cant: 'An average, or a typical price.' },
    { type: 'Agency-published package prices', found: 'ECOSIRE publishes $997 for setup (up to 3 pipelines, one funnel or landing page, up to 5 workflows, 2 hours of training), $1,997 a month for management (10 hours of development) and $4,997 for a white-label SaaS build. Extra workflows are $297 each and extra custom integrations $997 each.', can: 'What one agency includes in each package and where its limits sit.', cant: 'What other agencies charge, or what you\'d pay for your scope.' },
    { type: 'Self-reported directory rates', found: "Of eight GoHighLevel provider profiles we checked on Clutch, five list an hourly rate under $25 and three list $25 to $49. Seven list a minimum project size of $1,000 or more and one doesn't disclose it.", can: 'How providers describe themselves.', cant: "Verified rates. Clutch profile figures are reported by the provider, and eight profiles isn't a representative sample." },
    { type: 'Anecdotal community examples', found: "Forum and community posts mention prices, but they vary too much and we couldn't verify them.", can: "Nothing we're willing to rely on.", cant: "We don't use a figure from them." },
  ];

  const costDriverSections = [
    { area: 'CRM setup', body: 'A GoHighLevel CRM setup costs more as the number of pipelines, custom fields, tags, calendars, user roles and locations grows. Cleaning up existing contact data and agreeing on how your sales stages work also take time. A single pipeline for one team is a different job from several pipelines for several teams.' },
    { area: 'Workflow automation', body: 'The cost of workflow automation depends on how many workflows you need, how many conditions each one has, and which channels they use: email, text messages, WhatsApp or calls. Testing matters as much as building, because an automation that fails quietly can cost you leads. Ask how many workflows are in the quote and how each will be tested.' },
    { area: 'Migration', body: 'Moving to GoHighLevel from another system costs more with more records, more source systems and messier data. Mapping custom fields, bringing over history and rebuilding automations that lived in the old tool are separate tasks. GoHighLevel migration quotes should say what moves, what is rebuilt and what is left behind.' },
    { area: 'Integrations', body: 'Connecting GoHighLevel to your other tools is priced by the number of connections and how they work. A ready-made connection is quicker than one that needs custom API work, and a two-way sync takes longer than a one-way one. Third-party tools can change, so ask who looks after integrations and API connections after launch.' },
    { area: 'AI voice agents and chatbots', body: "AI work is priced by what the assistant has to know and do. An AI voice agent needs call flows, answers to common questions, rules for when to pass a caller to a person and a lot of testing. An AI chatbot using Conversation AI needs similar planning for text conversations. Both also have usage charges from HighLevel that are separate from the expert's fee (see the costs section below)." },
    { area: 'Funnels and websites', body: 'Funnel development and website development inside GoHighLevel are priced by the number of pages, whether copy and design are supplied, and extras like online payments or members\' areas. Tracking, forms that feed your CRM and follow-up after a form is submitted add to the work.' },
    { area: 'White-label SaaS and training', body: 'White-label SaaS setup is priced by the number of plans, the billing setup and the onboarding flow for your clients. Training is priced by how many people attend, the format, and whether written guides and recordings are included. In both cases, ask for the deliverables to be listed.' },
  ];

  const beyondFeeTable = [
    { paid: 'The expert or agency', covers: 'The build, changes and any support you agree.', check: 'The scope-based quote and what it includes.' },
    { paid: 'HighLevel (subscription)', covers: "The platform. HighLevel's pricing page lists Starter at $97 a month (up to three sub-accounts), Unlimited at $297 and a $497 plan HighLevel now calls Founder, which it says was formerly Agency Pro. Prices as published in November 2026.", check: 'Which plan you need, and whether you are a business or an agency.' },
    { paid: 'HighLevel (usage)', covers: 'Phone calls are billed per minute and texts per message, and A2P registration is a separate charge. AI agents are billed pay-per-use or through an AI Employee plan.', check: 'HighLevel says pricing can change, so confirm current rates in the app.' },
    { paid: 'Third-party tools', covers: 'Connected tools such as automation platforms, payment processors, domains and outside email or phone providers.', check: 'Whether each tool charges its own monthly or per-use fee.' },
    { paid: 'Advertising platforms', covers: 'Money paid to Google, Meta or other ad networks.', check: 'Ad spend is separate from any fee for managing the ads.' },
  ];

  const compareQuestions = [
    'What exactly is delivered? Ask for counts: pipelines, workflows, forms, calendars, integrations, pages.',
    "What isn't included? Anything left out is either extra or your job.",
    'Who does the work? One person, or several people with different roles.',
    'How is it tested and handed over? Look for testing with real scenarios, written notes and a walkthrough.',
    'Who owns the account? You should own your HighLevel account and have admin access.',
    'What happens after launch? Find out the support period, how fixes are handled and what changes cost.',
    'How are changes to scope handled? A clear process avoids arguments halfway through.',
    "Are platform and usage costs listed separately? They should not be mixed into the expert's fee.",
  ];

  const quoteReadingTable = [
    { says: '"Full GoHighLevel setup"', ask: 'Which pipelines, workflows, forms and integrations does that include, and how many of each?' },
    { says: '"Fixed price"', ask: 'What happens if the scope grows, and who decides whether something is in or out?' },
    { says: '"Hourly, estimated at X hours"', ask: 'Is X a cap or a guess, and what happens if it takes longer?' },
    { says: '"Monthly management"', ask: 'How many hours are included, and what happens to unused or extra hours?' },
    { says: 'A very low price', ask: 'Who is doing the work, what is tested, and what support follows?' },
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
          <span className="text-[#1A2236] font-medium">Cost to Hire a GoHighLevel Expert</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Pricing</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Hire Guide</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">2027</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Quotes</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How Much Does It Cost to Hire a GoHighLevel Expert in 2027?
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
              <div className="text-xs text-white/50">Pricing research checked November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Hiring a GoHighLevel expert costs different amounts depending on what you ask them to build, how many tools and channels it connects, and whether you need it once or every month. No single price fits every business, and anyone who quotes you one before they know your setup is guessing.
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              <em>Research note: We checked advertised prices, marketplace budgets and directory listings in November 2026. They show what providers advertise and what some buyers posted that month. They are not completed-project prices, not verified 2027 market rates and not averages. Where we found no reliable evidence, we say so instead of inventing a range.</em>
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
              href="#short-answer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Read the Short Answer
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
              Hiring a GoHighLevel expert costs different amounts depending on what you ask them to build, how many tools and channels it connects, and whether you need it once or every month. No single price fits every business, and anyone who quotes you one before they know your setup is guessing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This guide explains how GoHighLevel experts price their work, what published prices can and can't tell you, what you'll pay for outside the expert's fee, and how to compare quotes side by side.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full bg-[#F8F9FB]">
                <Image
                  src="/blog/how-much-does-it-cost-to-hire-a-gohighlevel-expert.png"
                  alt="How Much Does It Cost to Hire a GoHighLevel Expert in 2027?"
                  width={1600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel expert pricing, scope and quotes explained.</span>
              </div>
            </div>

            {/* Section: Short Answer */}
            <h2 id="short-answer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Short answer: what decides the cost of hiring a GoHighLevel expert?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The cost of hiring a GoHighLevel expert depends on the scope of the work, not on a standard rate. Seven things move the price most:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {costDrivers.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The advertised numbers we found are far apart. Freelancer profiles we looked at listed hourly rates from $8 to $25. One agency publishes packages from $997 to $4,997. Upwork's own guide says projects run from about $300 to $10,000 or more. Those are advertised figures, not averages, and the next section explains why you shouldn't read them as the going rate.
            </p>

            {/* Section: How Charge */}
            <h2 id="how-charge" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How do GoHighLevel experts charge for their work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel experts usually charge in one of five ways. Knowing which one a quote uses is the first step to comparing it fairly.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {chargeModels.map((item, idx) => (
                <li key={idx}><strong className="text-[#1A2236]">{item.model}:</strong> {item.desc}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              No model is better in every case. Hourly pricing fits a quick fix. A fixed price fits a build you can describe clearly. A monthly plan fits a system that keeps changing after launch.
            </p>

            {/* Section: Published Prices */}
            <h2 id="published-prices" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What do published GoHighLevel prices actually tell you?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Published GoHighLevel prices tell you what providers advertise and what some buyers hope to pay. They don't tell you what finished projects cost or what the market average is. The table separates the kinds of evidence we found in November 2026 so you can see what each one can support.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Evidence type</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What we found (November 2026)</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it can tell you</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it can't tell you</th>
                  </tr>
                </thead>
                <tbody>
                  {evidenceTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.type}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.found}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.can}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.cant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Why Vary */}
            <h2 id="why-vary" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why do GoHighLevel expert rates vary so much?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              GoHighLevel expert rates vary because of location, experience, project scope and what's included. A freelancer in one country may advertise a very different rate from a specialist in another, and both may do good work. Experience matters too: someone who has built a particular kind of system many times works differently from someone learning it. Scope and deliverables matter most, because "set up GoHighLevel" can mean a single form and one text message or a full system for several teams.
            </p>

            {/* Section: No Evidence */}
            <h2 id="no-evidence" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where is there no reliable pricing evidence?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              We found no reliable public pricing for AI setup, integrations and migration, or for large builds that combine several services. Providers rarely publish those prices because they depend so heavily on the details, so we haven't put a range on them. The next section explains what makes each one larger or smaller.
            </p>

            {/* Section: Cost Drivers */}
            <h2 id="cost-drivers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What drives the cost of each kind of GoHighLevel work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each type of GoHighLevel work has its own cost drivers. If you know which pieces you need, you can ask for each one to be priced separately.
            </p>
            {costDriverSections.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-6 mb-2">{item.area}</h3>
                <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">{item.body}</p>
              </div>
            ))}
            <div className="mb-6" />

            {/* Section: Expert or Team */}
            <h2 id="expert-or-team" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              One expert or a team: how does the choice affect the price?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choosing between one expert and a team changes what you pay for, not just how much. An individual's quote covers one person's time. A team's quote can cover several roles, review and cover for absences, so it may look higher until you compare what's included. We've kept this short because the detailed comparison is in our <Link href="/blog/gohighlevel-agency-vs-freelancer" className="text-[#0E9BF0] hover:underline">full freelancer vs agency comparison</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A single expert is often a good fit for one clear, well-defined task, such as a single workflow or a simple pipeline. The cost question changes when a project needs several kinds of skill at once: CRM design, automation, integrations, copy and testing. In that case, the question is who covers each skill and who is responsible if something doesn't work. If you're weighing that, a <Link href="/services/hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">dedicated team of GoHighLevel experts</Link> may be worth pricing alongside an individual.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Neither choice is right for everyone. Many projects are done well by one skilled freelancer. Ask both kinds of provider the same questions and compare the answers.
            </p>

            {/* Section: Beyond Fee */}
            <h2 id="beyond-fee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What will you pay for beyond the expert's fee?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The expert's fee is only one part of the cost of running GoHighLevel. Keep it separate from the HighLevel subscription, usage charges, other tools and advertising spend, so each quote can be compared on its own.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Who gets paid</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it covers</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to check</th>
                  </tr>
                </thead>
                <tbody>
                  {beyondFeeTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.paid}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.covers}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The plans differ by what they include, and our <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing guide</Link> explains them. Two other costs deserve a closer look. <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC registration fees</Link> apply if you send business text messages in the US, and they are charged separately from the expert's work. AI usage is also charged by HighLevel, so read <Link href="/blog/gohighlevel-ai-employee" className="text-[#0E9BF0] hover:underline">how HighLevel's AI Employee is priced</Link> before you set a budget for AI.
            </p>

            {/* Section: One-time Ongoing */}
            <h2 id="one-time-ongoing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              One-time build or ongoing work: how should you budget?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Budget for a GoHighLevel build and for what happens after it as two separate lines. A system rarely stays still after launch: offers change, forms need editing, new pipelines are added, and a connected tool can change how it works. Someone has to own those changes.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are three common ways to cover it: pay for ad hoc hours when something needs doing, agree a monthly plan with set hours, or use a dedicated person inside your account. A <Link href="/services/virtual-assistant" className="text-[#0E9BF0] hover:underline">dedicated GHL virtual assistant</Link> is one version of the last option, with a set number of hours each month for daily account work.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A simple budget has five lines: the build, the HighLevel subscription, usage charges, ongoing support and, if you run ads, ad spend. If a quote doesn't show where one of those sits, ask.
            </p>

            {/* Section: Compare Quotes */}
            <h2 id="compare-quotes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How do you compare GoHighLevel expert quotes?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              To compare GoHighLevel expert quotes, line them up by what's included, not by the total. Two quotes for "GHL setup" can describe very different amounts of work. Ask each provider to answer the same questions:
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              {compareQuestions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The table shows how to read common wording in a quote.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">If the quote says</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Ask</th>
                  </tr>
                </thead>
                <tbody>
                  {quoteReadingTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.says}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.ask}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Implementation and Marketing */}
            <h2 id="implementation-marketing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When do implementation and marketing run together?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Implementation and marketing often run together because a GoHighLevel system only helps if leads reach it and get followed up. The path is simple to describe: leads come in, the system captures them, the CRM tracks them, follow-up goes out, calls get booked, deals move through a pipeline, and marketing continues to feed the top.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Different kinds of work sit at different points on that path. Getting leads in can mean a <Link href="/marketing/lead-generation" className="text-[#0E9BF0] hover:underline">lead generation system</Link>, <Link href="/marketing/google-ads" className="text-[#0E9BF0] hover:underline">Google Ads management</Link> or <Link href="/marketing/meta-ads" className="text-[#0E9BF0] hover:underline">Meta Ads management</Link>. Capturing them, tracking them and following up is the GoHighLevel build covered above. The more of these a project includes, the more the quote has to cover.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The benefit of planning both together is fewer gaps between them: ad leads land in the right pipeline, with the right follow-up, and tracking you can read. When different providers handle each part, someone on your side has to coordinate the handoffs. A freelancer can do that well too, so the point is to decide who owns each handoff. If you want one group to plan both parts, <Link href="/services/hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">experts who plan the build and the marketing together</Link> can scope it as a single project. Not every project needs every step, and a quote covers only what's in the scope.
            </p>

            {/* Section: GHL Scale Up */}
            <h2 id="ghl-scale-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How does GHL Scale Up scope and quote GoHighLevel projects?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL Scale Up prices GoHighLevel work by scope. We don't have one universal starting price, because two projects with the same label can look very different once you see the integrations, the number of workflows and who will use the system. We assess your requirements, define the scope and deliverables, and give you a scope-based quote for the actual work.
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">A conversation about your business:</strong> your model, tools, pain points and goals, plus a look at any existing GoHighLevel account.</li>
              <li><strong className="text-[#1A2236]">A defined scope:</strong> the deliverables written down, so you know what is and isn't included.</li>
              <li><strong className="text-[#1A2236]">A scope-based quote:</strong> priced for that work, so you can compare it with others.</li>
              <li><strong className="text-[#1A2236]">A change process:</strong> if the scope changes, the quote changes with it, and you agree to that first.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Which deliverables a project includes depends on its scope; not every project includes everything. You can read more about <Link href="/services/hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">how we scope and deliver GoHighLevel projects</Link>.
            </p>

            {/* Section: Where to Find */}
            <h2 id="where-to-find" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where do you find a GoHighLevel expert to quote?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              You can find GoHighLevel experts through HighLevel's own directory, freelance marketplaces, communities, business directories and specialist agencies. Our guide on <Link href="/blog/where-to-hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">where to find and vet GoHighLevel experts</Link> covers each option and the questions to ask before you hire.
            </p>

            {/* Section: Recommendation */}
            <h2 id="recommendation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Our recommendation: how should you decide?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Match the provider to the size of the job, then compare quotes on what they include.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A single, clear task:</strong> an individual expert may be enough. Ask for a fixed scope and test results.</li>
              <li><strong className="text-[#1A2236]">Changes and support after launch:</strong> price ongoing help as its own line, whether as hours, a monthly plan or a dedicated assistant.</li>
              <li><strong className="text-[#1A2236]">Several skills, several systems or marketing alongside the build:</strong> ask for a team to scope it, and compare that quote with an individual's on what's covered.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Whichever you choose, get the scope in writing and keep platform, usage and ad costs apart from the expert's fee. If you'd like us to scope your project, <Link href="/services/hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">talk to our GoHighLevel experts</Link> or <Link href="/book-a-call" className="text-[#0E9BF0] hover:underline">book a free call</Link>.
            </p>

            {/* Hire CTA button */}
            <div className="text-center my-6">
              <Link
                href="/services/hire-gohighlevel-experts"
                className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
              >
                Hire GoHighLevel Experts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently asked questions
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

            {/* Prefer to talk first */}
            <div className="text-center my-6">
              <p className="text-sm text-[#5C6880]">
                Prefer to talk first? <Link href="/book-a-call" className="text-[#0E9BF0] hover:underline">Book a free call</Link>.
              </p>
            </div>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about GoHighLevel expert pricing?</strong>
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
                <Link href="/blog/gohighlevel-agency-vs-freelancer" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Agency vs Freelancer →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing Guide →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees →</Link>
                <Link href="/blog/gohighlevel-ai-employee" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Employee →</Link>
                <Link href="/blog/where-to-hire-gohighlevel-experts" className="text-sm text-[#0E9BF0] hover:underline">Where to Hire GoHighLevel Experts →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Match the provider to the size of the job.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  If you'd like us to scope your project, talk to our GoHighLevel experts or book a free call.
                </p>
                <Link href="/services/hire-gohighlevel-experts" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Hire GoHighLevel Experts
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
                Pricing research checked November 2026. The advertised figures in this article are not completed-project prices, not verified 2027 market rates and not averages. Platform prices and features change; confirm current details before planning.
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