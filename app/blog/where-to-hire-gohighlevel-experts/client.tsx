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
  Zap,
  Shield,
  DollarSign,
  Users,
  Building2,
  Award,
  AlertTriangle,
  Clock,
  Calendar,
  Star,
  Search,
  Briefcase,
  Globe,
  MessageCircle,
  Settings,
  Brain,
  Phone,
  Mail,
  Sparkles,
  AlertCircle,
  XCircle,
  TrendingUp,
  Filter,
  Facebook,
  Linkedin as LinkedInIcon,
  Trophy,
  Rocket,
  Target,
  BarChart3,
  HeartHandshake
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function WhereToHireGHLExpertsClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'official-directory',
        'upwork',
        'fiverr',
        'facebook-groups',
        'clutch-linkedin',
        'agencies',
        'comparison-table',
        'vetting-checklist',
        'red-flags',
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
      q: "Where is the best place to hire a GoHighLevel expert?",
      a: "The GoHighLevel Official Certified Admin Directory (directory.gohighlevel.com) is the best starting point for finding verified professionals. For defined tasks with a budget, Upwork with a Job Success Score filter of 90%+ is the most reliable freelance option. For complete system builds involving CRM, automation, AI features, and SaaS Mode, a dedicated GHL specialist agency like GHL Scale Up provides the most comprehensive delivery."
    },
    {
      q: "How much does it cost to hire a GoHighLevel expert?",
      a: "Costs vary significantly by scope and hiring channel. Fiverr freelancers charge $50–$500 for small tasks. Upwork specialists charge $25–$150 per hour or $300–$2,500 for fixed-scope projects. Dedicated GHL agencies charge $500–$8,000+ for full builds depending on complexity. Anything below market rate for a complex build is a red flag cheap builds frequently become expensive rebuilds."
    },
    {
      q: "What is the GoHighLevel Certified Admin Directory?",
      a: "The GoHighLevel Certified Admin Directory at directory.gohighlevel.com is GoHighLevel's official listing of professionals who have completed their certification programme. As of 2026, 478+ certified admins are listed globally. Certification confirms platform knowledge but does not guarantee delivery quality or project management skills always apply a vetting process regardless."
    },
    {
      q: "Is it better to hire a freelancer or an agency for GoHighLevel work?",
      a: "Freelancers are cost-effective for small, clearly defined tasks building one funnel, setting up one workflow, configuring one integration. Agencies are more reliable for end-to-end builds, complex multi-system setups, SaaS Mode configuration, AI feature implementation, or CRM migration. Agencies bring team accountability, structured delivery, documentation, and post-delivery support that individual freelancers rarely provide."
    },
    {
      q: "Can I find GHL experts in Facebook Groups?",
      a: "Yes. The GoHighLevel Official Community on Facebook is the largest and most active GHL expert community, with GoHighLevel staff participation. Other strong groups include GHL SaaS Mode Community and GoHighLevel Agency Owners. Post a detailed job description or ask for referrals from other members. Community-vetted recommendations are often more reliable than cold platform searches."
    },
    {
      q: "What should I ask before hiring a GoHighLevel expert?",
      a: "Ask to see 2–3 recent GHL builds they have completed. Ask them to walk you through their approach to your specific project. Ask whether they have worked in your industry before. Ask what their delivery process looks like and what happens after project completion. Ask whether they can configure AI features. Any expert who avoids specific answers to these questions is not the right hire."
    },
    {
      q: "What are the red flags when hiring a GoHighLevel expert?",
      a: "The main red flags are: no portfolio or case studies, inability to explain how automations work in plain English, guarantees of specific results before understanding your business, pricing dramatically below market rate, slow communication before you have paid, and no mention of testing before delivery. Any one of these warrants continued due diligence. Two or more means look elsewhere."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'official-directory', title: '1. GoHighLevel Official Certified Admin Directory' },
    { id: 'upwork', title: '2. Upwork Best for Vetted Freelancers' },
    { id: 'fiverr', title: '3. Fiverr Best for Small Tasks' },
    { id: 'facebook-groups', title: '4. Facebook Groups and GHL Community' },
    { id: 'clutch-linkedin', title: '5. Clutch, B2B Platforms and LinkedIn' },
    { id: 'agencies', title: '6. Dedicated GHL Specialist Agencies' },
    { id: 'comparison-table', title: '7. Comparing All 6 Options' },
    { id: 'vetting-checklist', title: '8. How to Vet a GHL Expert Before Hiring' },
    { id: 'red-flags', title: '9. Red Flags to Walk Away From' },
    { id: 'faq', title: '10. Frequently Asked Questions' },
  ];

  const vettingQuestions = [
    { q: 'Show me 2–3 GHL systems you\'ve built recently.', why: 'Any serious GHL expert has screenshots, screen recordings, or client references they can share. No portfolio = no track record. Ask specifically for builds in your industry or similar use cases.' },
    { q: 'Walk me through how you would approach my specific project.', why: 'A real expert asks about your sales process, client journey, and goals before suggesting tools or features. A template-pusher jumps straight to "I\'ll build you a funnel and a workflow." You want the one who asks questions first.' },
    { q: 'Have you worked with businesses in my industry before?', why: 'A real estate GHL setup is architecturally different from a dental practice. An agency that has done your niche before moves faster and makes fewer costly assumptions.' },
    { q: 'What does your delivery process look like?', why: 'Look for: a discovery or scoping call first, clear milestone structure, testing before handover, documentation provided. An expert with no process is a freelancer who will disappear after delivery.' },
    { q: 'How do you handle issues after the project is complete?', why: 'Workflows break. GHL updates change behaviour. Ask what happens post-delivery. The best experts offer a support window or a clear escalation path.' },
    { q: 'Can you configure AI features Voice Agent, Conversation AI?', why: 'In 2026, any GHL expert positioning themselves as comprehensive should be able to configure AI features. If they don\'t know what the AI Voice Agent does, they are behind the platform\'s current capability by at least 12 months.' },
    { q: 'What is not included in your scope?', why: 'The best experts clearly define what they will not do third-party integrations, copywriting, graphic design, paid ads management. Clear exclusions prevent scope creep disputes and protect both sides.' },
  ];

  const redFlags = [
    { flag: 'They cannot explain how automations work.', cause: 'They are a "button pusher" someone who copies tutorials without understanding the underlying logic.', fix: 'Ask them to explain triggers, actions, and If/Else conditions in plain English. If they can\'t, move on.' },
    { flag: 'They promise specific results without understanding your business.', cause: 'Overselling their capabilities or your expectations.', fix: 'No GHL expert can promise "50 new leads per month" or "3x your revenue" without a discovery call and a business audit. Anyone making guarantees before they understand your setup is not trustworthy.' },
    { flag: 'Their pricing is dramatically below market rate.', cause: 'Cutting corners, using copy-paste templates, or planning to go silent after first payment.', fix: 'Experienced GHL experts charge $25–$75/hr on freelance platforms and $150+/hr at agency rates. Someone offering a full CRM build for $150 is a red flag.' },
    { flag: 'They go quiet during the proposal phase.', cause: 'Poor communication habits that will continue during the build.', fix: 'If they take more than 48 hours to reply to a scoping question before you\'ve paid them, expect the same during the build. Communication speed during sales is usually the best indicator of communication speed during delivery.' },
    { flag: 'They have no process for testing before delivery.', cause: 'Untested workflows can silently fail for weeks before anyone notices.', fix: 'Every real GHL expert tests workflows with a real contact, checks every funnel step, and confirms every integration is live before handover. If they don\'t mention testing, ask directly and if they don\'t do it, walk away.' },
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
          <span className="text-[#1A2236] font-medium">Where to Hire GoHighLevel Experts 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Hire GHL Expert</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Freelance Platforms</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Agency</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Where to Hire GoHighLevel Experts in 2026:<br />
            <span className="text-[#F8D000]">6 Best Places (+ How to Vet Them)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Hundreds of people now call themselves GoHighLevel experts. Most are not.
            Knowing where to look and more importantly, how to filter before you hire
            is the difference between a system that runs your business and one that costs
            you two months and needs to be rebuilt. This guide covers every channel,
            what each one is best for, and exactly what to check before you hand over your GHL account.
          </p>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need a GHL Expert? Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#agencies"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Top Agencies
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                The 6 best places to find GoHighLevel experts in 2026 are:
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                (1) GoHighLevel's official Certified Admin Directory at directory.gohighlevel.com, (2) Upwork,
                (3) Fiverr, (4) GoHighLevel and agency Facebook Groups, (5) Clutch.co and B2B review platforms,
                and (6) dedicated GHL specialist agencies like GHL Scale Up. For a complete, end-to-end GHL build,
                a specialist agency is the most reliable option. For small, defined tasks, vetted freelancers on
                Upwork are cost-effective.
              </p>

              {/* CTA Button 2: Inside TL;DR Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Find Your Perfect GHL Match
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
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

            {/* Section 1: Official Directory */}
            <h2 id="official-directory" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. GoHighLevel's Official Certified Admin Directory
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">URL:</strong> directory.gohighlevel.com
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The official GoHighLevel Certified Admin Directory lists <strong className="text-[#0E9BF0]">478+ certified professionals</strong>
              globally who have completed GoHighLevel's structured certification programme. Certification covers core platform features,
              production-level use cases, and real-world application it is not a lightweight badge.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Certified admins are listed with their name, specialisation, location, and a profile page.
              GoHighLevel team members actively recommend certified professionals for client inquiries.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#0E9BF0] mb-2">How to use the directory:</p>
              <ul className="space-y-1">
                <li className="text-sm text-[#1A2236] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />Go to directory.gohighlevel.com</li>
                <li className="text-sm text-[#1A2236] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />Use search filters: filter by country, specialisation (automation, funnels, SaaS), and service type</li>
                <li className="text-sm text-[#1A2236] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />Open individual profiles and look for described services, case study links, how long they've been certified</li>
              </ul>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">IMPORTANT NOTE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Certification confirms platform knowledge not delivery quality, project management skills, or communication standards.
                <strong className="text-[#1A2236]"> Certification is a filter, not a guarantee.</strong> Always apply the vetting checklist in Section 8 regardless of certification status.
              </p>
            </div>

            {/* CTA Button 3: After Official Directory */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Don't want to filter through 478+ profiles?</span> Let our team find the right expert for you.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Expert Matching
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 2: Upwork */}
            <h2 id="upwork" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Upwork Best for Vetted Freelancers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">URL:</strong> upwork.com/hire/gohighlevel-experts
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Upwork is one of the strongest platforms for finding experienced GHL freelancers. The Job Success Score (JSS),
              verified earnings history, and client reviews create a reliable quality signal.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">What to expect on Upwork:</p>
              <ul className="space-y-2">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><DollarSign className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Hourly rates:</strong> $25–$75/hr for experienced GHL freelancers. Top-rated specialists with 5+ years experience command $75–$150/hr</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><Briefcase className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Project-based pricing:</strong> Fixed-price contracts $300–$2,500 depending on scope</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><Filter className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Quality filter:</strong> Filter by Job Success Score 90%+ and minimum $10,000 earned</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Best for:</strong> Defined, scoped tasks where you can write a clear brief</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Not ideal for:</strong> Ongoing strategic relationship, complex multi-system builds</li>
              </ul>
            </div>

            {/* Section 3: Fiverr */}
            <h2 id="fiverr" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Fiverr Best for Small, Defined Tasks
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">URL:</strong> fiverr.com/hire/gohighlevel
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Fiverr has 12+ GHL freelancers currently offering services across funnel building, workflow setup,
              sub-account configuration, and snapshot creation. Pricing starts from as little as $50 for small tasks.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">How to use Fiverr effectively for GHL work:</p>
              <ul className="space-y-2">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><Filter className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Filter by seller level:</strong> Top Rated Seller or Level 2 only</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><Star className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Read reviews carefully:</strong> Look for reviews that describe actual work done</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><Briefcase className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Check their portfolio:</strong> Screenshots of builds, workflow structures, or funnel pages</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Best for:</strong> One-off tasks with clear deliverables</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Not ideal for:</strong> Full system builds, SaaS Mode, AI features, CRM migration</li>
              </ul>
            </div>

            {/* Section 4: Facebook Groups */}
            <h2 id="facebook-groups" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Facebook Groups and GHL Community
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The GoHighLevel ecosystem has some of the most active Facebook communities of any SaaS platform.
              These groups are where agency owners, freelancers, and GHL experts spend genuine time helping each other.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">The main groups to look in:</p>
              <ul className="space-y-1 mb-4">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><Facebook className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />GoHighLevel Official Community</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><Facebook className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />GHL SaaS Mode Community</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><Facebook className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />GoHighLevel Agency Owners</li>
              </ul>
              <p className="text-sm font-semibold text-[#1A2236] mb-2">How to hire from Facebook Groups:</p>
              <ul className="space-y-1">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />Post a job request describing what you need, timeline, and budget range</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />Ask for recommendations from community members</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />Check the profile of anyone who replies for a website or portfolio</li>
              </ul>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">Community Tip</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Facebook Groups are an excellent channel for finding <strong>referral-vetted experts</strong>
                people whose work has been vouched for by other community members. Ask publicly:
                "Has anyone worked with [name]?" before committing.
              </p>
            </div>

            {/* CTA Button 4: After Facebook Groups */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">Still looking for the right GHL expert?
              </p>
              <p className="text-sm text-white/80 mb-4">Skip the freelancer search. Get your CRM, workflows, funnels and integrations implemented by a specialised GoHighLevel Agency.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Contact GHL Scale Up
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 5: Clutch, LinkedIn */}
            <h2 id="clutch-linkedin" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Clutch, B2B Review Platforms and LinkedIn
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For agencies and larger businesses wanting to hire a GHL expert through a more structured evaluation process,
              Clutch.co and LinkedIn are the strongest channels.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">Clutch.co:</p>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
                Clutch lists verified B2B agencies with client reviews, project details, and verified revenue data.
                Search: clutch.co → search 'GoHighLevel' or 'HighLevel' → filter by minimum project size and service category.
              </p>
              <p className="text-sm font-semibold text-[#1A2236] mb-2 mt-3">LinkedIn:</p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Search: 'GoHighLevel' + 'specialist' or 'expert' in the search bar. Filter by location if needed.
                Check their activity do they post about GHL? Do other GHL professionals engage with their content?
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed mt-2">
                <strong className="text-[#1A2236]">Best for:</strong> Businesses that want professional accountability, verifiable track record, and an ongoing relationship.
              </p>
            </div>

            {/* Section 6: Agencies */}
            <h2 id="agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Dedicated GHL Specialist Agencies
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For businesses that need a complete GoHighLevel system not just one task a dedicated GHL specialist agency
              is the most reliable option. Agencies bring a team of people across CRM, automation, funnel design, and AI features.
            </p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-[#1A2236] mb-2">What a specialist agency delivers that freelancers don't:</p>
              <ul className="space-y-2">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Architecture planning:</strong> Mapping your sales process before building</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">End-to-end delivery:</strong> CRM, workflows, funnels, AI features, integrations</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Documentation and training:</strong> SOPs and walkthroughs for your team</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" /><strong className="text-[#1A2236]">Post-delivery support:</strong> Issues after go-live are handled</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">GHL Scale Up</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-2">
                <strong className="text-white">GHL Scale Up (ghlscaleup.com)</strong> is a dedicated GoHighLevel specialist agency with
                5+ years of GHL experience and 200+ builds delivered globally. Services: CRM setup, workflow automation,
                AI Voice Agent configuration, white-label SaaS builds, and CRM migration.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                <strong className="text-white">Standard delivery:</strong> 5–7 business days. Full documentation and team training included.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                → Book a free 30-minute strategy call at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → For a full comparison of the best GHL agencies, see our article: <Link href="/blog/best-ghl-expert-agency" className="text-[#0E9BF0] hover:underline">Best GHL Expert Agency to Hire in 2026 →</Link>
            </p>

            {/* CTA Button 5: After Agencies Section */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🚀 Ready to stop searching and start building?</p>
              <p className="text-sm text-white/80 mb-4">Get your GHL system built by experts who've done it 200+ times.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Zap className="w-4 h-4" />
                Start Your GHL Build
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 7: Comparison Table */}
            <h2 id="comparison-table" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Comparing All 6 Options: Cost, Quality, Speed
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Use this table to quickly match your situation to the right hiring channel:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Typical Cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Quality Signal</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Speed</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">GHL Directory</td><td className="py-3 px-3 text-[#5C6880]">Varies</td><td className="py-3 px-3 text-[#5C6880]">Certification verified</td><td className="py-3 px-3 text-[#5C6880]">Medium</td><td className="py-3 px-3 text-[#5C6880]">Certified individual experts</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Upwork</td><td className="py-3 px-3 text-[#5C6880]">$25–$150/hr</td><td className="py-3 px-3 text-[#5C6880]">JSS score + reviews</td><td className="py-3 px-3 text-[#5C6880]">Fast</td><td className="py-3 px-3 text-[#5C6880]">Defined tasks with brief</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Fiverr</td><td className="py-3 px-3 text-[#5C6880]">$50–$500+</td><td className="py-3 px-3 text-[#5C6880]">Seller level + reviews</td><td className="py-3 px-3 text-[#5C6880]">Very fast</td><td className="py-3 px-3 text-[#5C6880]">Small, specific tasks</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Facebook Groups</td><td className="py-3 px-3 text-[#5C6880]">Varies</td><td className="py-3 px-3 text-[#5C6880]">Community referral</td><td className="py-3 px-3 text-[#5C6880]">Medium</td><td className="py-3 px-3 text-[#5C6880]">Referral-based hires</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Clutch / LinkedIn</td><td className="py-3 px-3 text-[#5C6880]">$100–$250+/hr</td><td className="py-3 px-3 text-[#5C6880]">Verified client reviews</td><td className="py-3 px-3 text-[#5C6880]">Slower</td><td className="py-3 px-3 text-[#5C6880]">Larger projects</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Agency</td><td className="py-3 px-3 text-[#5C6880]">$500–$8,000+</td><td className="py-3 px-3 text-[#5C6880]">Track record + portfolio</td><td className="py-3 px-3 text-[#5C6880]">5–7 days</td><td className="py-3 px-3 text-[#5C6880]">Full GHL builds, AI, SaaS</td></tr>
                </tbody>
              </table>
            </div>

            {/* Section 8: Vetting Checklist */}
            <h2 id="vetting-checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. How to Vet a GoHighLevel Expert Before Hiring
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Use these seven questions before committing to any GHL expert, regardless of which platform they came from.
            </p>

            <div className="space-y-4 mb-6">
              {vettingQuestions.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#0E9BF0] mb-2">Q{idx + 1}: {item.q}</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed"><strong className="text-[#1A2236]">Why it matters:</strong> {item.why}</p>
                </div>
              ))}
            </div>

            {/* CTA Button 6: Before Red Flags */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🔍 Not sure if your shortlisted expert passes these tests?</p>
              <p className="text-sm text-white/80 mb-4">Let us review your expert for free and tell you if they're the right fit.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Search className="w-4 h-4" />
                Get a Free Expert Review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 9: Red Flags */}
            <h2 id="red-flags" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. Red Flags to Walk Away From
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              These are the warning signs we see most often across GHL community forums, client audits, and first calls.
            </p>

            <div className="space-y-4">
              {redFlags.map((item, idx) => (
                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.flag}</p>
                      <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>Cause:</strong> {item.cause}</p>
                      <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button 7: After Red Flags */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">⚠️ Found a red flag in your shortlist?</p>
              <p className="text-white/60 text-sm mb-4">Skip the risk. Work with a team that has zero red flags and 200+ happy clients.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Shield className="w-4 h-4" />
                  Hire a Trusted Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/blog/best-ghl-expert-agency"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Trophy className="w-4 h-4" />
                  See Top Agencies
                </Link>
              </div>
            </div>

            {/* Section 10: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              10. Frequently Asked Questions
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

            {/* CTA Button 8: After FAQ */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl text-center">
              <p className="text-white font-bold text-lg mb-2">Still Have Questions About Hiring?</p>
              <p className="text-white/60 text-sm mb-4">Talk to our GHL experts directly. We're here to help you find the right solution.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/best-ghl-expert-agency" className="text-sm text-[#0E9BF0] hover:underline">Best GHL Expert Agency to Hire in 2026 →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create and Use a GoHighLevel Snapshot →</Link>
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Already searched? Skip the guesswork.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up has built 200+ GHL systems. Yours could be next. CRM setup, workflow automation,
                  AI Voice Agent, SaaS Mode, and GHL migrations. 5–7 business day delivery, full documentation included.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar - Fixed Sticky */}
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

                        {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
              <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your project.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Book a 30 min Free Call
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* About the Author */}
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
                5+ years GHL experience · 200+ systems built globally. We have hired, worked alongside,
                and evaluated hundreds of GHL freelancers and agencies. This guide is based on direct experience,
                not affiliate incentives.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>



            {/* Share Buttons */}
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