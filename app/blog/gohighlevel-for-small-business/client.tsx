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
  Clock,
  Rocket,
  CheckCircle2,
  Image as ImageIcon,
  Target,
  GitCompare,
  BarChart3,
  Layers,
  Workflow,
  Mailbox,
  ListChecks,
  ClipboardCheck,
  Settings,
  Users,
  Calendar,
  MessageCircle,
  Phone,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Star,
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Compass,
  Database,
  DollarSign,
  Users2,
  Home,
  Stethoscope,
  GraduationCap,
  Wrench,
  Search,
  XCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelForSmallBusinessClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'is-gohighlevel-worth-it',
        'what-does-a-small-business-get',
        'how-much-does-it-cost',
        'when-does-it-become-worth-it',
        'which-small-businesses-benefit-most',
        'when-is-it-overkill',
        'can-a-small-business-set-it-up',
        'can-it-replace-tools',
        'what-to-automate-first',
        'biggest-risks',
        'should-your-business-use-it',
        'manual-follow-up-cost',
        'which-plan',
        'final-verdict',
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
      q: "Is GoHighLevel worth it for small businesses?",
      a: "It can be when lead volume, follow-up complexity, or tool consolidation create enough value to exceed the subscription and setup cost. It isn't a universal yes or no."
    },
    {
      q: "Is GoHighLevel too expensive for a small business?",
      a: "Not necessarily. The real question is whether it creates more value through recovered leads, saved time, or eliminated software costs than it costs to run not whether $97/month sounds like a lot in isolation."
    },
    {
      q: "How much does GoHighLevel cost for a small business?",
      a: "Starter is $97/month; most small businesses add $20–150/month in usage costs (SMS, email, AI) depending on volume, plus setup time or cost."
    },
    {
      q: "What is the cheapest GoHighLevel plan for a small business?",
      a: "Starter, at $97/month, covers what nearly every single-location small business needs."
    },
    {
      q: "How many leads do you need for GoHighLevel to be worth it?",
      a: "There's no fixed number lead value and conversion rate matter more than raw volume. A smaller number of high-value leads can justify it as easily as a larger number of low-value ones."
    },
    {
      q: "Can a small business use GoHighLevel without an agency?",
      a: "Yes, for basic setup. More complex, multi-stage automation takes longer to build correctly and may be worth outside help."
    },
    {
      q: "Is GoHighLevel difficult for small business owners to learn?",
      a: "Basic use is learnable in one to two weeks part-time. Advanced automation has a real learning curve, same as any capable software."
    },
    {
      q: "What type of small business should use GoHighLevel?",
      a: "Businesses with a repeatable lead-to-customer process home services, appointment-based practices, coaches and consultants benefit most."
    },
    {
      q: "When is GoHighLevel overkill for a small business?",
      a: "When lead volume is very low, the sales process has one step, an existing simple system already works, or nobody has time to maintain it."
    },
    {
      q: "Can GoHighLevel replace other small business marketing tools?",
      a: "Often yes, when you're paying for three or more overlapping tools today. It's not a win to replace one specialized tool that already does its job well."
    },
    {
      q: "Is GoHighLevel better than a basic CRM for a small business?",
      a: "More capable, not automatically better a basic CRM plus a couple of point tools can outperform GHL for a business that will only ever use a fraction of what it offers."
    },
    {
      q: "What should a small business automate first in GoHighLevel?",
      a: "New lead response, appointment reminders, no-response follow-up, and review requests in that order, before adding anything more complex."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'is-gohighlevel-worth-it', title: 'Is GoHighLevel Worth It for a Small Business?' },
    { id: 'what-does-a-small-business-get', title: 'What Does a Small Business Actually Get With GoHighLevel?' },
    { id: 'how-much-does-it-cost', title: 'How Much Does GoHighLevel Really Cost a Small Business?' },
    { id: 'when-does-it-become-worth-it', title: 'When Does GoHighLevel Actually Become Worth the Money?' },
    { id: 'which-small-businesses-benefit-most', title: 'Which Small Businesses Benefit Most?' },
    { id: 'when-is-it-overkill', title: 'When Is GoHighLevel Overkill for a Small Business?' },
    { id: 'can-a-small-business-set-it-up', title: 'Can a Small Business Set This Up Without an Agency?' },
    { id: 'can-it-replace-tools', title: 'Can GoHighLevel Replace Your Other Marketing Tools?' },
    { id: 'what-to-automate-first', title: 'What Should a Small Business Automate First?' },
    { id: 'biggest-risks', title: 'What Are the Biggest Risks of Using GoHighLevel as a Small Business?' },
    { id: 'should-your-business-use-it', title: 'Should Your Small Business Actually Use GoHighLevel?' },
    { id: 'manual-follow-up-cost', title: 'GoHighLevel vs. Doing Nothing: What Does Manual Follow-Up Actually Cost?' },
    { id: 'which-plan', title: 'Which GoHighLevel Plan Should a Small Business Choose?' },
    { id: 'final-verdict', title: 'Final Verdict' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const businessBenefitData = [
    { businessType: 'Home services (HVAC, plumbing, roofing, cleaning)', operationalProblem: 'Missed calls, slow quote follow-up', relevantCapability: 'Missed-call text-back, automated quote follow-up' },
    { businessType: 'Appointment-based (clinics, salons, consultants)', operationalProblem: 'No-shows, manual reminders', relevantCapability: 'Calendar + automated reminder sequences' },
    { businessType: 'Coaches and consultants', operationalProblem: 'Inconsistent lead nurture before a sale', relevantCapability: 'Multi-touch email/SMS nurture into booked calls' },
    { businessType: 'Local service businesses', operationalProblem: 'Leads spread across calls, forms, social, ads', relevantCapability: 'One CRM consolidating every channel' },
  ];

  const toolComparisonData = [
    { requirement: 'Contact management', simpleCrm: 'Yes, isolated to that tool', ghl: 'Yes, unified with everything else' },
    { requirement: 'Automated follow-up (SMS)', simpleCrm: 'Usually needs a separate tool', ghl: 'Included' },
    { requirement: 'Booking', simpleCrm: 'Usually needs a separate tool', ghl: 'Included' },
    { requirement: 'Reviews', simpleCrm: 'Usually needs a separate tool', ghl: 'Included' },
    { requirement: 'Multi-step workflows across channels', simpleCrm: 'Requires integrating multiple tools', ghl: 'Native' },
    { requirement: 'Setup simplicity', simpleCrm: 'Simpler per tool, harder to connect', ghl: 'More to learn, nothing to connect' },
  ];

  const scorecardData = [
    'Do you receive regular leads?',
    'Do you need structured, repeatable follow-up?',
    'Do appointments drive your sales?',
    'Are leads currently being missed or answered slowly?',
    'Do you pay for multiple tools that should talk to each other but don\'t?',
    'Would automation save meaningful hours, not just minutes?',
    'Is a new customer worth enough to justify the follow-up effort?',
    'Does someone have the time or budget to build and maintain this?',
  ];

  const planData = [
    { plan: 'Starter ($97/mo)', whoItsFor: 'Nearly every single-location small business. CRM, pipelines, website/funnels, calendars, and workflows are all included.' },
    { plan: 'Unlimited ($297/mo)', whoItsFor: 'Only if you\'re running more than three sub-accounts rare for a business operating under one brand at one location.' },
    { plan: 'Agency Pro ($497/mo)', whoItsFor: 'Built for reselling GHL to other businesses. A normal small business has no reason to be on this plan.' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        // onClick={handleOpenBooking}
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
          <span className="text-[#1A2236] font-medium">GoHighLevel for Small Business: Worth the Cost? (2026)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Small Business</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Cost Analysis</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel for Small Businesses:<br />
            <span className="text-[#F8D000]">Is It Worth the Cost?</span>
          </h1>

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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated September 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            A three-person home service company getting 500 leads a month has a stronger case for GoHighLevel than a fifteen-person firm getting twenty. Business size isn't the variable that decides this. Complexity is how many leads come in, how many touches it takes to turn one into a customer, and how much of that follow-up currently happens late or not at all.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This article is written for one reader: a small business owner deciding whether to pay for GoHighLevel, not an agency evaluating it for clients. If you want the platform explained from scratch, <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">what GoHighLevel actually is</Link> is covered elsewhere this article assumes you already know roughly what it does and want to know if it's worth paying for <em>your</em> business specifically.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Your GHL Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#final-verdict"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Verdict
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="hidden lg:block mb-6">
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
                5+ years GHL experience · 200+ systems built globally. All pricing and capabilities verified as of September 2026.
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

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need Help Deciding?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help small businesses decide if GHL is right for them and set it up correctly.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Talk to Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Verdict</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                It can be worth it when the business has enough lead volume, follow-up complexity, or tool consolidation opportunity.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                GoHighLevel isn't worth it by default just because a business is small, and it isn't automatically overkill just because a business is small either. The decision depends on your specific operational complexity.
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

            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section: Is GoHighLevel Worth It */}
            <h2 id="is-gohighlevel-worth-it" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Is GoHighLevel Worth It for a Small Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">It can be, but only when the business has enough lead volume, follow-up complexity, or tool consolidation opportunity for automation to create more value than the subscription and setup effort cost.</strong> It isn't worth it by default just because a business is small, and it isn't automatically overkill just because a business is small either.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Keep reading if any of this sounds familiar: leads sit unanswered for hours, appointment no-shows are a real cost, review requests happen only when someone remembers, or you're paying for three or four tools that don't talk to each other. If none of that describes your business, the sections on when GHL is overkill will probably be more useful to you than the sales pitch sections.
            </p>

            {/* Section: What Does a Small Business Get */}
            <h2 id="what-does-a-small-business-get" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does a Small Business Actually Get With GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Grouped by the problem each piece solves, not as a feature list:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Lead capture</strong> forms, funnels, and a website that feed directly into one system instead of scattering submissions across tools.</li>
              <li><strong className="text-[#1A2236]">Lead management</strong> contacts and pipelines that show where every prospect actually stands.</li>
              <li><strong className="text-[#1A2236]">Follow-up</strong> email, SMS, and workflow automation that responds before a lead goes cold.</li>
              <li><strong className="text-[#1A2236]">Appointment management</strong> booking, reminders, and no-show follow-up.</li>
              <li><strong className="text-[#1A2236]">Customer retention</strong> review requests and reactivation campaigns for past customers.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The only question that matters for a purchase decision: which of these does your business actually need today? A business with no booking process doesn't benefit from the calendar. A business drowning in unanswered form fills benefits enormously from the follow-up piece.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-for-small-business.png"
                  alt="GoHighLevel for small business: Cost breakdown, when it's worth it, and which plan fits"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel for small business: Real costs, when it's worth it, and which plan fits your situation</span>
              </div>
            </div>

            {/* Section: How Much Does It Cost */}
            <h2 id="how-much-does-it-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Much Does GoHighLevel Really Cost a Small Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The subscription is the smallest part of the real number. GoHighLevel's Starter plan is $97/month and covers what most small businesses need: CRM and pipelines, the website and funnel builder, booking calendars, workflow automation, and email/SMS marketing, with up to three sub-accounts (irrelevant for a single-location business). <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GHL Scale Up's full pricing guide</Link> breaks down all three plans in detail if you want the complete comparison most small businesses never need to look past Starter.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What sits on top of that $97, based on GoHighLevel's current usage-based pricing: SMS runs roughly $0.008 per segment, email around $0.675 per 1,000 sends, outbound calls about $0.014 per minute, and AI features bill separately either pay-per-use, a $50/month Growth tier, or a $97/month Unlimited tier per location, depending on how much AI usage you actually need. A typical small business running moderate SMS and email volume usually lands somewhere between $20 and $150 above the base subscription.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Then there's implementation: someone has to build the pipeline, the forms, and the first automations. That's either your own time realistically a few hours to a couple of weeks depending on how much you build or the cost of paying someone to set it up. <strong className="text-[#1A2236]">The subscription price and the real cost of running GoHighLevel are two different numbers, and only the second one determines whether it's worth it.</strong>
            </p>

            {/* Section: When Does It Become Worth It */}
            <h2 id="when-does-it-become-worth-it" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Does GoHighLevel Actually Become Worth the Money?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There's no universal lead threshold a business with 20 high-value leads a month can have a stronger case than one with 200 low-value inquiries, because the cost of losing a lead scales with what that lead is worth. What matters is a combination of:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Lead value and conversion rate</li>
              <li>How fast leads currently get a response</li>
              <li>How many follow-up touches your sales process actually needs</li>
              <li>Whether appointments drive your revenue</li>
              <li>How much of this is currently manual and inconsistent</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The trigger isn't revenue size it's <strong className="text-[#1A2236]">repetitive acquisition and follow-up complexity</strong>. A <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">missed-call text-back workflow</Link> alone recovers leads that would otherwise call a competitor; that single automation can justify the subscription for a business that takes phone inquiries, independent of everything else GHL does.
            </p>

            {/* Section: Which Small Businesses Benefit Most */}
            <h2 id="which-small-businesses-benefit-most" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Small Businesses Benefit Most?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Business Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Operational Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Relevant GHL Capability</th>
                  </tr>
                </thead>
                <tbody>
                  {businessBenefitData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.businessType}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.operationalProblem}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.relevantCapability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each of these shares a pattern: a repeatable sequence from first contact to paying customer, with real cost when a step gets skipped.
            </p>

            {/* Section: When Is It Overkill */}
            <h2 id="when-is-it-overkill" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Is GoHighLevel Overkill for a Small Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Be honest with yourself here, because this is where a lot of small businesses waste money:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>You get a handful of leads a month and know every one personally</li>
              <li>There's no real follow-up process because the owner handles everything directly, immediately</li>
              <li>Your sales process has one stage: someone asks, you answer, done</li>
              <li>Your current spreadsheet or basic contact list already works fine</li>
              <li>Nobody on the team has time to build or maintain a CRM system</li>
              <li>You'd use maybe 10% of what the platform does</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If most of this describes you, a $97/month platform plus setup time is a cost with no offsetting value yet. That's a legitimate answer, not a failure to see GHL's potential.
            </p>

            {/* Section: Can a Small Business Set It Up */}
            <h2 id="can-a-small-business-set-it-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can a Small Business Set This Up Without an Agency?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, for a basic setup <Link href="/blog/how-to-use-gohighlevel" className="text-[#0E9BF0] hover:underline">GoHighLevel's own tutorial path</Link> gets most people functional on core CRM, one pipeline, and a simple automation within one to two weeks of part-time effort. That covers a straightforward lead-to-customer flow.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Where it gets harder without help: multi-stage pipelines with branching logic, integrations with existing tools, and workflows that need to handle edge cases correctly the first time. Simple setup is a DIY-realistic weekend project. Production-grade automation that reliably handles real leads is a bigger time investment budget accordingly rather than assuming either extreme.
            </p>

            {/* Section: Can It Replace Tools */}
            <h2 id="can-it-replace-tools" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Replace Your Other Marketing Tools?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sometimes, and <Link href="/blog/consolidate-marketing-tools-gohighlevel" className="text-[#0E9BF0] hover:underline">the consolidation math is often the actual reason to buy it</Link>: a small business paying for separate CRM, email, SMS, booking, and review-request tools is often spending more across all of them than a single GHL subscription, before counting the time lost to them not talking to each other.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requirement</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Simple CRM + Separate Tools</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                  </tr>
                </thead>
                <tbody>
                  {toolComparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.requirement}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.simpleCrm}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Consolidation saves money when you're actually paying for 3+ overlapping tools today. It doesn't help if you only use one specialized tool that already does its one job well replacing a tool that works with a bigger platform that does the same thing isn't a win by itself.
            </p>

            {/* Section: What to Automate First */}
            <h2 id="what-to-automate-first" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should a Small Business Automate First?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Don't try to automate everything in week one. In rough priority order:
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">New lead response</strong> an instant reply the moment a form or call comes in.</li>
              <li><strong className="text-[#1A2236]">Appointment reminders</strong> cuts no-shows without anyone remembering to send them.</li>
              <li><strong className="text-[#1A2236]">No-response follow-up</strong> a second and third touch for leads who went quiet.</li>
              <li><strong className="text-[#1A2236]">Review requests</strong> sent automatically after a completed job or visit.</li>
              <li><strong className="text-[#1A2236]">Lead reactivation</strong> a periodic check-in to old contacts who never converted.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Build these, let them run for a few weeks, then decide what else is worth adding. <Link href="/blog/gohighlevel-automation" className="text-[#0E9BF0] hover:underline">GHL Scale Up's automation guide</Link> goes deeper into build order and prioritization if you want to keep going past the basics.
            </p>

            {/* Section: Biggest Risks */}
            <h2 id="biggest-risks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Are the Biggest Risks of Using GoHighLevel as a Small Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              None of these are reasons to avoid GHL they're reasons to build deliberately:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Overbuilding</strong> automating things that didn't need automation, adding complexity nobody asked for</li>
              <li><strong className="text-[#1A2236]">Messaging costs creeping up</strong> SMS and email usage adds up faster than expected without any oversight</li>
              <li><strong className="text-[#1A2236]">A CRM structure nobody understands</strong> built once, then impossible to safely change later</li>
              <li><strong className="text-[#1A2236]">No one to maintain it</strong> the system degrades if nobody owns it after initial setup</li>
              <li><strong className="text-[#1A2236]">Subscription waste</strong> paying for a plan tier or add-ons the business never actually uses</li>
            </ul>

            {/* Section: Should Your Business Use It */}
            <h2 id="should-your-business-use-it" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should Your Small Business Actually Use GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Run through this honestly:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Question</th>
                  </tr>
                </thead>
                <tbody>
                  {scorecardData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This isn't a scientifically validated test it's a way to see your own situation clearly. Mostly yes: GHL is probably worth it. A mix of yes and no: worth testing with one workflow before committing further. Mostly no: you likely don't need it yet.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A hypothetical, clearly labeled as such:</strong> if a business earns $500 gross profit per customer and a lead-response automation recovers just one additional customer a month that would otherwise have gone cold, that's $500 a month against a $97–150 total GHL cost. That's not a guaranteed outcome it's the shape of the math worth checking against your own numbers before assuming either that GHL "pays for itself" or that it doesn't.
            </p>

            {/* Section: Manual Follow-Up Cost */}
            <h2 id="manual-follow-up-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs. Doing Nothing: What Does Manual Follow-Up Actually Cost?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              "Do nothing" isn't free it's just an invisible cost. A lead arrives, then someone has to remember to respond, remember to send a reminder, remember to follow up again if there's no reply, remember the review request after the job. Each "remember" is a place the process silently breaks under real-world busyness.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The question isn't how many hours this manual chain takes it's how many leads fall through it when it doesn't happen consistently, which is the actual cost worth weighing against a subscription that does it every time.
            </p>

            {/* Section: Which Plan */}
            <h2 id="which-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which GoHighLevel Plan Should a Small Business Choose?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Who It's For</th>
                  </tr>
                </thead>
                <tbody>
                  {planData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whoItsFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you're a small business and someone recommends Unlimited or Agency Pro without a specific multi-location or resale reason, ask why those tiers solve agency problems, not small business ones.
            </p>

            {/* Section: Final Verdict */}
            <h2 id="final-verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Verdict
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is not automatically worth it because a business is small, and it's not automatically overkill for the same reason. It's worth it when there's enough lead management, follow-up, and customer-journey complexity for automation and consolidation to produce value you can actually point to recovered leads, fewer no-shows, hours back in your week, tools you stopped paying for separately.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Don't ask "can GHL do everything I need?" Ask <strong className="text-[#1A2236]">"will I use enough of what it does to justify what it costs and what it takes to set up?"</strong> That's the whole decision.
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

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still unsure if GoHighLevel is right for your small business?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? The Complete Guide →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing 2026: All Plans Explained →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back Setup →</Link>
                <Link href="/blog/how-to-use-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">How to Use GoHighLevel: Beginner's Tutorial →</Link>
                <Link href="/blog/consolidate-marketing-tools-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">How to Consolidate Marketing Tools with GHL →</Link>
                <Link href="/blog/gohighlevel-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Automation: Workflows Worth Building First →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Not Sure If GoHighLevel Is Right for Your Business?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help small businesses make the right decision and set up GHL correctly from the start.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Assessment
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience helping small businesses evaluate and set up GoHighLevel. All pricing and capabilities verified as of September 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>
        </div>
      </div>

      {/* Booking Modal - Rendered at root level */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />

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