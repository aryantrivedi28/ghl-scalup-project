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
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function SellGHLToLocalBusinessesClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'can-you-build',
        'what-are-you-selling',
        'business-models',
        'choose-niche',
        'find-problem',
        'what-to-sell-first',
        'package-offer',
        'pricing',
        'find-clients',
        'sales-conversation',
        'objections',
        'delivery',
        'retention',
        'beginners-get-wrong',
        'first-90-days',
        'where-ghl-fits',
        'faq'
      ];

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
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
      q: "Do I need to be technical to sell GoHighLevel to local businesses?",
      a: "No, not to sell it. Selling is about diagnosing a business's problem and offering an outcome, which is a business skill, not a technical one. You do need the system to be built correctly to deliver on what you sold, so if you're not technical, either invest the time to learn the build or partner with someone who handles the technical implementation while you focus on clients."
    },
    {
      q: "What should I sell to a local business with GoHighLevel first?",
      a: "Start with one painful, obvious problem rather than a large package. Missed-call text-back is usually the best first offer because the problem is easy for any owner to feel and the fix is quick to demonstrate. From there you can add lead follow-up, appointment booking and reminders, review generation, and database reactivation, expanding the account as you prove value."
    },
    {
      q: "How much should I charge?",
      a: "Price on the value to the client, not on your software cost. Most agencies charge a one-time setup fee (commonly a few hundred to over a thousand dollars depending on complexity) plus a monthly recurring fee (commonly in the low hundreds and up with scope). If the system recovers a client even a couple of jobs a month, the fee should be easy to justify. Always confirm GoHighLevel's current platform and usage costs so you know your true cost base before quoting."
    },
    {
      q: "How do I get my first client?",
      a: "Through proximity and specific, low-friction outreach, not ads. Pick one niche, build a simple offer, find businesses with a visible problem, and send a short personalised audit (a two-minute video works well) showing the gap you found and how you'd fix it. Your first client often comes from your existing network. Turn that first result into a case study to make the next ones easier."
    },
    {
      q: "Can I just resell GoHighLevel as my own software (SaaS)?",
      a: "Yes, that's white-label SaaS mode, and it's a strong model, but it's usually not the right starting point. Begin by selling a productized service so you learn what clients actually want and how they use the system. Once you know exactly what you're selling and to whom, packaging it into a self-serve software subscription becomes far more likely to succeed."
    },
    {
      q: "How is this different from just running a marketing agency?",
      a: "A traditional agency sells campaigns and results, which ties income to performance and your time. Selling GoHighLevel-powered systems lets you sell recurring infrastructure, the lead capture, follow-up and booking a business runs on, which is stickier and more predictable. Many people blend both, starting with a service and building toward recurring, systems-based revenue."
    },
    {
      q: "Why would a business pay me monthly instead of buying GoHighLevel themselves?",
      a: "Because the software is the easy part; making it work for their specific business and keeping it working is what they're paying for. Many businesses buy the platform, never configure it properly, and cancel. Your recurring fee maps to ongoing value: continuous follow-up, optimisation, reporting, and improvements, not just access to a login."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'can-you-build', title: 'Can you actually build a business around GoHighLevel?' },
    { id: 'what-are-you-selling', title: 'What are you actually selling? (Not software)' },
    { id: 'business-models', title: 'The four business models, and the one we\'d start with' },
    { id: 'choose-niche', title: 'How to choose a niche (and why it matters more than you think)' },
    { id: 'find-problem', title: 'Find the problem before you pitch the product' },
    { id: 'what-to-sell-first', title: 'What to sell first (start with one painful problem)' },
    { id: 'package-offer', title: 'How to package the offer (outcomes, not features)' },
    { id: 'pricing', title: 'How to price it (and how to actually arrive at a number)' },
    { id: 'find-clients', title: 'How to find your first clients' },
    { id: 'sales-conversation', title: 'The sales conversation: diagnose, don\'t pitch' },
    { id: 'objections', title: 'The objections you\'ll hear (and honest answers)' },
    { id: 'delivery', title: 'Delivery: what actually happens after they say yes' },
    { id: 'retention', title: 'Retention: why clients stay (and why it isn\'t the software)' },
    { id: 'beginners-get-wrong', title: 'What beginners get wrong' },
    { id: 'first-90-days', title: 'A realistic first 90 days' },
    { id: 'where-ghl-fits', title: 'Where GHL Scale Up fits' },
    { id: 'faq', title: 'Frequently asked questions' }
  ];

  const businessModels = [
    {
      option: 'Option 1: Done-for-you marketing service',
      desc: 'You run marketing for the client, ads, funnels, lead gen, and GoHighLevel is the system you deliver it through. This is closest to a traditional agency. It pays well but it ties your income to results and your time, which is exactly what you\'re probably trying to escape.'
    },
    {
      option: 'Option 2: CRM and automation service',
      desc: 'You set up and manage the client\'s lead capture, follow-up, booking, and reminders inside GoHighLevel. You\'re selling the system and the peace of mind that it runs, not campaign results. This is more productisable and less dependent on you personally.'
    },
    {
      option: 'Option 3: Productized, niche-specific system',
      desc: 'You build one tightly-defined system for one type of business, say, a complete lead-response-and-rebooking setup for dental practices, and sell that same thing over and over. Because it\'s the same build each time, it gets faster and more profitable as you go. For most beginners, this is the sweet spot.'
    },
    {
      option: 'Option 4: White-label SaaS',
      desc: 'This is the model everyone gets excited about: you rebrand GoHighLevel as your own software and resell logins on a subscription. It\'s genuinely powerful, but it\'s not where we\'d tell a beginner to start. It requires the platform to be watertight, your onboarding to be self-serve, and your support to be ready, before you have a single client to test any of it on.'
    }
  ];

  const objections = [
    { objection: '"We already have a CRM."', answer: 'Most do, and most barely use it. You\'re not necessarily replacing it, you\'re making sure leads actually get contacted and followed up. A fair response is to ask what their current system does when a call is missed, or whether it chases a lead automatically until they respond. Usually it doesn\'t, and that\'s the gap.' },
    { objection: '"We already use Calendly / Mailchimp / something."', answer: 'Fine, those are point tools that don\'t talk to each other. The value you bring is the connected process, lead in, contacted, booked, reminded, reviewed, not another disconnected app. Sometimes the honest answer is that you can consolidate several tools they\'re already paying for.' },
    { objection: '"We get enough leads."', answer: 'Then the conversation isn\'t about more leads, it\'s about the ones they\'re already losing to slow follow-up or missed calls. Most businesses don\'t have a lead problem so much as a follow-up problem.' },
    { objection: '"It\'s too expensive."', answer: 'This means they don\'t yet see the return. Go back to their numbers: if the system recovers a couple of jobs a month and each is worth several hundred dollars, the fee pays for itself. If you can\'t make that math work for their business, be honest, maybe they\'re not the right fit yet.' },
    { objection: '"Why can\'t I just buy GoHighLevel myself?"', answer: 'They can, and it\'s worth answering plainly: the software is the easy part; making it actually work for their business, and keeping it working, is the part they\'re paying you for. Plenty of businesses buy the platform, never set it up properly, and cancel. You\'re selling the implementation and the ongoing result, not access.' },
    { objection: '"Why should I pay you every month?"', answer: 'Because the value is ongoing, not one-time. The system keeps following up, keeps booking, keeps requesting reviews, and you keep improving it. The month you stop, the leads start slipping again. If you\'re only doing a one-time setup, charge for that honestly, but the recurring fee has to map to recurring value.' }
  ];

  const beginnersGetWrong = [
    'Selling GoHighLevel instead of an outcome, leading with software and watching owners\' eyes glaze over.',
    'Trying to serve every industry at once, which means never getting good at any one of them.',
    'Building before they sell, spending weeks perfecting a system nobody\'s paying for yet.',
    'Creating enormous all-in-one offers instead of one sharp problem to solve first.',
    'Overpromising on AI.',
    'Pricing off their own costs instead of the client\'s value.',
    'Underestimating the implementation, especially the messaging-compliance side, and shipping something that breaks.',
    'Having no retention plan, treating the sale as the finish line.'
  ];

  const first90Days = [
    { phase: 'Month one: Foundation', desc: 'Learn the platform well enough to build a basic lead-capture-and-follow-up system in a practice account. Choose your niche. Decide on your first single-problem offer. Build one clean demo of that offer so you have something to show. Don\'t chase clients yet, get to where you can confidently deliver one thing.' },
    { phase: 'Month two: Conversations', desc: 'Start prospecting in your niche, primarily through local audits and your existing network. Get into real diagnostic conversations. Expect to refine your offer as you hear how owners actually describe their problems. Aim to close one pilot client, even at a modest price, the goal is a real client and a real result, not a big first cheque.' },
    { phase: 'Month three: Proof', desc: 'Deliver for that first client properly. Document what happened, the calls recovered, the appointments booked, and turn it into a simple case study. Use that proof to make the next conversations easier, tighten your offer and pricing based on what you learned, and start bringing on the next clients. By the end of month three you\'re not guessing anymore, you have a proven offer, a reference client, and a repeatable process.' }
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
          <span className="text-[#1A2236] font-medium">Sell GoHighLevel to Local Businesses</span>
        </div>
      </nav>

      {/* Hero Section - WIDE */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Sales</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Local Businesses</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Sell GoHighLevel to Local Businesses:<br />
            <span className="text-[#F8D000]">Without Sounding Like You're Selling Software</span>
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

          {/* Intro Paragraphs - NO max-w constraints */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            If you're reading this, you're probably somewhere near the start. Maybe you've bought GoHighLevel, or you're about to, and you've realised there's a gap between owning the tool and actually running a business with it. You can see that people are making money reselling this platform to local businesses. What nobody has explained clearly is what you'd actually sell, who you'd sell it to, what to charge, and how to land the first client without sounding like every other person in their inbox.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            This guide is written the way we'd talk it through with you on a call. We've built and implemented these systems for a lot of businesses, so most of what follows is simply what tends to work, what beginners usually get wrong, and the order we'd tackle it in if we were starting from scratch today. No hype, and no pretending it's easier than it is.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            <strong className="text-white">Here's the single most important idea</strong>, and we'll come back to it repeatedly: you are not selling GoHighLevel. You're selling the outcome GoHighLevel produces. Get that distinction right and most of the hard parts of this business get easier. Get it wrong and you'll struggle no matter how good the software is.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
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

            {/* CTA Card - Project Help */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
              <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your project.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Book a 30 min Free Call
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

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
                  <div className="text-xs text-white/50">Local Business Sales Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
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

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">The Core Idea</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                You are not selling GoHighLevel. You're selling the outcome GoHighLevel produces.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Get that distinction right and most of the hard parts of this business get easier. Get it wrong and you'll struggle no matter how good the software is. When you sell to local businesses, sell the result the business owner already lies awake worrying about. Let GoHighLevel be the quiet engine behind it, not the thing on the invoice.
              </p>
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

            {/* Section 1: Can you build a business */}
            <h2 id="can-you-build" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Can you actually build a business around GoHighLevel?
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Short answer: yes</strong>, and it's one of the more sensible businesses you can start right now, because you're not building software or carrying inventory. You're taking a platform that already works and turning it into a service local businesses will pay for monthly. The barrier to entry is low, the recurring-revenue model is real, and the platform is capable enough to solve genuine problems across most local-business types.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              But let's be straight about what "yes" means. It doesn't mean passive income, and it doesn't mean you flip a switch and clients appear. It means there's a real, repeatable business here if you're willing to learn the platform, pick a focus, and do the work of finding and keeping clients. The people who succeed treat it as a business. The people who quit treat it as a shortcut. If you're in the first group, keep reading, because the rest of this is the roadmap.
            </p>

            {/* Section 2: What are you selling */}
            <h2 id="what-are-you-selling" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What are you actually selling? (Not software)
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is where most beginners go wrong on day one, so we'll spend a moment here. When you walk into a local business, plumber, dentist, gym, roofing company, and start talking about a CRM, pipelines, workflows and automation, you've already lost them. The owner doesn't want any of those things. They don't wake up wanting a CRM any more than they wake up wanting a hammer. They want the thing the hammer builds.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What they actually want is money-shaped: more of the leads they're already getting turned into booked jobs, fewer calls going to voicemail while they're on-site, faster follow-up so the lead doesn't go cold, more reviews so they show up on Google, and less of their evening spent chasing people manually. Those are outcomes. GoHighLevel is just how you deliver them.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE REFRAME</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Sell the result the business owner already lies awake worrying about. Let GoHighLevel be the quiet engine behind it, not the thing on the invoice.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              So the reframe is simple but it changes everything. You're not "a GoHighLevel agency." You're the person who makes sure a plumber never loses another job to a missed call. You're the person who makes sure a dental practice fills its cancellations automatically. The software is identical in both cases. The thing you sell, and the thing you get paid for, is the outcome.
            </p>

            {/* Section 3: Business Models */}
            <h2 id="business-models" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. The four business models, and the one we'd start with
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There's more than one way to build this, and beginners often pick the hardest version first. Here are the four common models, from simplest to most involved.
            </p>

            <div className="space-y-3 mb-4">
              {businessModels.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-1">{item.option}</h3>
                  <p className="text-sm text-[#5C6880]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">RECOMMENDATION FOR BEGINNERS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you're starting from zero, begin with a productized, niche-specific service (Option 3). Prove you can get one type of business a result, then layer the SaaS model on top once you know exactly what you're selling and to whom.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The white-label SaaS route is a great destination. It's a poor starting line. You want to have had the messy conversations, seen the real objections, and watched how clients actually use the system before you productise it into software. Start as a service, graduate to SaaS.
            </p>

            {/* CTA 1 - After Business Models */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Not sure which model fits where you're starting from?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                A short conversation can save you months of building the wrong thing first.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Talk It Through With GHL Scale Up
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 4: Choose Niche */}
            <h2 id="choose-niche" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How to choose a niche (and why it matters more than you think)
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You can technically sell this to anyone, which is exactly why choosing a niche is the highest-leverage decision you will make early on. When you sell to local businesses in general, every conversation starts from scratch and you compete on price. When you sell to roofing companies specifically, you can speak their language, reuse the same system, and become the obvious choice. One niche means one setup you get very good at, one set of case studies, and marketing that actually resonates.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Do not pick from a top-ten list. Instead, judge a niche against the things that actually determine whether you will make money. Ask how much a single customer is worth to that business, because a business earning 8,000 dollars per new customer will happily pay for a system that brings a few more, while a business earning 20 dollars per sale will not. Ask how badly a missed lead hurts them, whether they run on appointments, whether they get repeat business, and whether it is easy to show them the return. Then, just as importantly, ask whether you can actually reach them, and whether you know anything about how they operate.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That last part matters more than beginners expect. Your first clients almost always come from proximity, an industry you have worked in, a trade a family member runs, people already one introduction away, rather than from cold ads to strangers. Home services such as HVAC, plumbing and roofing, dental and med spas, gyms and salons, and real estate all tend to score well on these factors, but the right niche for you is the intersection of good economics and a market you can actually get in front of.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                We have written a full framework for scoring and validating a niche, including a seven-factor scorecard, here: <Link href="/blog/how-to-choose-gohighlevel-saas-niche" className="text-[#0E9BF0] hover:underline">How to Choose a Niche for Your GoHighLevel SaaS Business →</Link>. If you are stuck on this step, start there before you build anything.
              </p>
            </div>

            {/* Section 5: Find the Problem */}
            <h2 id="find-problem" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Find the problem before you pitch the product
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's a habit that separates people who close deals from people who get ignored: diagnose before you prescribe. A doctor who recommends surgery before examining you is a fraud. An agency that pitches a CRM before understanding the business is doing the same thing, and owners can smell it.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before you ever mention GoHighLevel, look at how the business actually handles a customer. Call their number during business hours and see if anyone picks up. Call after hours and see what happens, does anything text you back, or does the lead just evaporate? Fill in their website form and time how long the reply takes. Check their Google reviews, how many, how recent, and whether they respond. Look at whether you can book online or whether you have to phone during opening hours. Each of these is a place where the business is quietly losing money, and each one is something you can fix.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE PITCH</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Don't walk in saying "I sell GoHighLevel." Walk in saying "I noticed that when I called your shop after five, nothing happened, and that's probably costing you jobs. Here's how I'd fix that."
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That second sentence is the whole game. You've led with a specific, real problem you observed in their business, not a feature. You've made it about their lost revenue, not your software. Now you're not a vendor interrupting their day, you're someone who noticed something they'd want to know. That's the position you want to sell from.
            </p>

            {/* Section 6: What to Sell First */}
            <h2 id="what-to-sell-first" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What to sell first (start with one painful problem)
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The instinct, once you learn what GoHighLevel can do, is to sell all of it: CRM, funnels, automation, AI, websites, reviews, the works. Resist that. A giant offer is hard to explain, hard to price, hard to deliver, and easy to say no to. The businesses that grow client accounts start with one sharp, obvious problem and solve it well.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The best first offer is usually missed-call text-back, because the problem is so easy for an owner to feel. When a call goes unanswered, GoHighLevel automatically texts the caller back within seconds, something like "Sorry we missed you, how can we help?", which keeps the lead from immediately calling a competitor. It's quick to set up, easy to demonstrate, and the value is obvious to anyone who's ever been too busy to answer the phone.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              From there, the natural next offers each solve one clear thing: an automated lead-follow-up sequence so new enquiries get chased until they book or opt out; appointment booking with automatic reminders to cut no-shows; automated review requests after a job to build their Google presence; and database reactivation, a simple message to their old customer list to wake up business they'd forgotten they had. Any one of these is a legitimate standalone offer.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE EXPANSION STRATEGY</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Start narrow, prove the value, then expand the account. Land the client fixing one expensive problem, and the second and third offers become an easy conversation because you've already delivered.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is how one $300-a-month client quietly becomes a $1,200-a-month client over six months, not by selling them everything up front, but by earning the right to the next problem each time you solve the last one.
            </p>

            {/* Section 7: Package the Offer */}
            <h2 id="package-offer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. How to package the offer (outcomes, not features)
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once you know what you're selling, how you describe it decides whether it lands. The mistake is listing what's inside: "CRM, workflows, pipeline, SMS, email automation." That's an ingredients list, and the owner has no idea what it cooks into. Package the outcome instead.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FEATURE VS OUTCOME</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                <strong className="text-[#1A2236]">Feature version:</strong> "CRM with automated workflows, SMS and email sequences, and pipeline management."
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong className="text-[#25C97D]">Outcome version:</strong> "Every new lead gets contacted within minutes and automatically followed up until they either book or tell us to stop, so you stop losing enquiries to slow replies."
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Same system. Only the second one makes an owner lean in, because it describes their life getting better, not your software's feature set.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              So when you build your offer, name it after the result, describe what the business owner will experience rather than what's under the hood, and keep it to the one problem you're solving first. You can always show the machinery later if they ask. Most won't. They care that it works.
            </p>

            {/* Section 8: Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How to price it (and how to actually arrive at a number)
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Beginners want to be told a number. We won't do that, because a price copied from a blog is a price you can't defend. Instead, here's how to arrive at your own, and the pieces that make it up.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most agencies charge in two parts: a one-time setup fee that covers the work of building and launching the system, and a monthly recurring fee that covers the software, the ongoing management, and the value the system keeps producing. Setup fees commonly run anywhere from a few hundred dollars to over a thousand depending on complexity; monthly fees for local-business services commonly sit in the low hundreds and climb from there with scope. Treat those as ranges you're seeing in the market, not rules, and note that your own costs sit underneath, GoHighLevel's platform fee (its plans run $97 to $497 per month), plus usage costs like phone numbers, texts and emails, which are small per unit but real. Verify all current platform pricing directly with GoHighLevel before you quote, since it changes.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The number itself should be anchored to value, not to your costs. If you're recovering a plumber even two extra jobs a month and each job is worth $500, a few hundred dollars a month is an easy decision for them, and pricing it at $97 would actually make it look less valuable, not more. Let the client's economics set the ceiling. The more a single lead is worth to them and the more work you're doing, the more you charge. Price the outcome, then make sure your costs comfortably fit underneath.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you want the full breakdown of GoHighLevel's own plans and usage costs so you know your true cost base, it's here: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
              </p>
            </div>

            {/* CTA 2 - After Pricing */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Want a second opinion on your offer and pricing?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                We'll look at what you're planning to sell and tell you honestly where it's strong and where it'll get pushback.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 9: Find Clients */}
            <h2 id="find-clients" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. How to find your first clients
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the part everyone worries about, and the honest truth is that your first few clients come from effort and proximity, not from a clever growth hack. You don't need a big audience or an ad budget. You need a specific niche, a simple offer, and the willingness to start conversations with businesses that visibly have the problem you fix.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The most reliable early channels are the least glamorous. Start with people you already know or are one introduction away from, that's almost always where the first client comes from. Beyond that, a genuinely effective approach for beginners is the local audit: you find a business in your niche, spot a real gap (the after-hours missed call, the slow form reply, the thin reviews), record a short two-minute video walking through what you found and how you'd fix it, and send it to them. It works because it's specific and it leads with their problem, not your pitch. Cold email and calls, local networking, referrals from early clients, and partnerships with people who already serve your niche all work too, but the video audit is the one we'd point a beginner to first.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Be realistic about pace. Ignore anyone promising ten clients in thirty days. A more honest early path looks like: pick one niche, build a simple demo of your offer, find a handful of businesses with a visible problem, send personalised audits, get into conversations, diagnose properly, and close a pilot client, then turn that pilot's result into the case study that makes the next one easier. The first client is the hardest. The fifth is far easier because by then you have proof.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                We've written a dedicated, tactical guide to landing those first clients, channels, outreach, and how to sequence it, here: <Link href="/blog/get-first-10-gohighlevel-saas-clients" className="text-[#0E9BF0] hover:underline">How to Get Your First 10 GoHighLevel SaaS Clients →</Link>. Read it when you reach this stage.
              </p>
            </div>

            {/* Section 10: Sales Conversation */}
            <h2 id="sales-conversation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. The sales conversation: diagnose, don't pitch
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When you get a business owner talking, your job is not to present. It's to understand their current process well enough that the solution becomes obvious to both of you. The best sales conversations in this business feel like consultations, because that's what they are.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Ask what happens right now when a new lead calls or fills in their form. Ask where their leads come from, and what they do with the ones that don't buy immediately. Ask how they book appointments, how they remind people, and what happens when someone doesn't show. Ask how much a new customer is typically worth to them. You're not reciting a script, you're mapping their customer journey and quietly noticing every place it leaks. By the time they've answered, they've usually talked themselves into the fact that they have a problem, which is a far stronger position than you telling them so.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Only then do you connect what you heard to what you'd do: "You mentioned leads from Facebook often don't get called back until the next day, that's the gap I'd close first, so those leads get a response within minutes automatically." Notice you're still not really talking about GoHighLevel. You're talking about their leak and your fix. The platform is implied. Don't pitch before you've diagnosed, and when you do, prescribe only what addresses what they told you.
            </p>

            {/* Section 11: Objections */}
            <h2 id="objections" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              11. The objections you'll hear (and honest answers)
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You'll hear the same handful of objections repeatedly. Each one is really a question in disguise, and the right response is honest, not slippery.
            </p>

            <div className="space-y-3 mb-4">
              {objections.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-1">{item.objection}</h3>
                  <p className="text-sm text-[#5C6880]">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Section 12: Delivery */}
            <h2 id="delivery" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              12. Delivery: what actually happens after they say yes
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Selling is half the business. The other half is delivering something that works, because a client who doesn't get a result won't stay, and this whole model depends on them staying. Here's the shape of delivery, and where it gets technical.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              After the client signs, you onboard them: understand their process in detail, get access to what you need, and set expectations. Then you configure the system, the account and pipeline that reflect how they actually work, the workflows that do the following-up, the calendar and booking, and the communication channels (their phone number, texts, email) wired in correctly. You test everything with real scenarios before it goes live, launch it, then monitor, fix, and optimise as real leads flow through.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Be honest with yourself about which parts of that you can do well. The strategy, the client relationship, the diagnosis, the offer, those you can own from day one. The technical build, especially reliable workflows, correct number and messaging setup, and the compliance side of sending texts (in the US, that means A2P registration, which trips up almost everyone), is where beginners lose weeks or ship something broken. A broken automation doesn't just cost you time; it costs you the client, because their first impression is that your system doesn't work.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE TRADE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you're strong at sales and strategy but you don't want to become the person building every workflow and integration yourself, that's not a weakness, it's a legitimate way to run this business.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the point where a lot of founders make a deliberate choice: keep the client relationship and the parts you're good at, and hand the technical implementation to a partner who builds these systems all day. It's how you take on clients faster than your own learning curve allows, and how you avoid the broken-build problem entirely while you're still new. It's also, candidly, where a team like ours fits, we handle the backend build so you can focus on selling and serving. More on that below, but the point stands regardless of who you use: know which half is yours.
            </p>

            {/* Section 13: Retention */}
            <h2 id="retention" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              13. Retention: why clients stay (and why it isn't the software)
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The recurring revenue that makes this business attractive only exists if clients stay, and clients don't stay because they're renting software. They stay because the system keeps producing something they'd miss if it stopped. Your job after launch is to keep being valuable, not just keep the lights on.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In practice that means keeping their follow-up sharp, improving the automations as you learn what converts, sending them the occasional reactivation campaign that produces a visible burst of business, keeping their reviews growing, and showing them, simply and regularly, what the system did this month: leads captured, calls recovered, appointments booked. When a client can see the machine working, cancelling feels like switching off their own lead flow, which is exactly the position you want to be in. The goal was never to sell them a GoHighLevel account. It was to become part of how they get and keep customers.
            </p>

            {/* Section 14: Beginners Get Wrong */}
            <h2 id="beginners-get-wrong" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              14. What beginners get wrong
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              We've watched the same mistakes play out enough times to name them. Nearly all of them trace back to the ideas above, which is why the order of this guide matters.
            </p>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {beginnersGetWrong.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you avoid just these, you'll be ahead of most people who start this business, because most of them make several of them at once.
            </p>

            {/* Section 15: First 90 Days */}
            <h2 id="first-90-days" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              15. A realistic first 90 days
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you want a concrete path, here's how we'd sequence the first three months. It won't promise you a specific income, because anyone who does that is guessing, but it will keep you focused on the right thing at each stage.
            </p>

            <div className="space-y-3 mb-4">
              {first90Days.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-1">{item.phase}</h3>
                  <p className="text-sm text-[#5C6880]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA 3 - After First 90 Days */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Starting your first 90 days and want the backend handled?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Keep the client relationship. Hand us the build. That's the model many founders use to start faster.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 16: Where GHL Scale Up Fits */}
            <h2 id="where-ghl-fits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              16. Where GHL Scale Up fits
            </h2>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              We've kept this guide focused on you and your business rather than on us, because that's genuinely the order that matters. But since the delivery section raises it honestly, here's where we fit, plainly.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A lot of the people who start this business are good at the front half, the positioning, the conversations, the selling, and less interested in becoming full-time technical builders of CRMs, workflows, and integrations. If that's you, you don't have to choose between doing it all yourself and not starting. You keep the client relationship and the strategy, and you hand the technical implementation, the account builds, the workflows, the messaging and compliance setup, the snapshots, to a partner who does this every day. That's the work we do for founders and agencies. If and when that's the stage you're at, that's the conversation to have with us, not before.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Until then, the most useful thing we can offer is the advice above. Pick a niche, find a real problem, sell the outcome, deliver something that works, and keep being valuable. Do that, and you have a business.
            </p>

            {/* Section 17: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              17. Frequently Asked Questions
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

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to start selling GoHighLevel to local businesses?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles the technical build so you can focus on what you do best: selling and serving clients.
                </p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book a Free Strategy Call
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel implementation specialists · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up helps businesses and agencies implement GoHighLevel systems for local businesses. Our approach focuses on the implementation behind the platform: niche strategy, snapshot builds, workflow automation, and ongoing optimization.
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