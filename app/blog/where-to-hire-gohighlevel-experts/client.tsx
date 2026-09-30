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
  AlertTriangle,
  Star,
  Search,
  Briefcase,
  MessageCircle,
  Phone,
  AlertCircle,
  Filter,
  Facebook,
  Trophy,
  Rocket,
  Target,
  BarChart3,
  HeartHandshake,
  XCircle,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function WhereToHireGHLExpertsClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'what-expert-does',
      'where-to-hire',
      'official-directory',
      'freelance-marketplaces',
      'facebook-groups',
      'clutch-linkedin',
      'specialist-agencies',
      'direct-referral',
      'freelancer-vs-agency',
      'cost',
      'how-to-evaluate',
      'questions-to-ask',
      'match-expert',
      'security-access',
      'red-flags',
      'full-implementation-team',
      'faq'
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
      q: "Where is the best place to hire a GoHighLevel expert?",
      a: "There isn't one universal best place. HighLevel's Certified Admin Directory is a reasonable starting filter for individual specialists. Upwork or Fiverr work for small, defined tasks. A specialist agency is generally the better fit for a full, multi-system build."
    },
    {
      q: "What does it cost to hire a GoHighLevel expert?",
      a: "It depends on scope more than on which channel you hire from. A small, single task can run roughly $50 to a few hundred dollars on a freelance marketplace. A full CRM and automation build is typically a fixed project price quoted after scoping, not an hourly estimate."
    },
    {
      q: "What's the best way to hire a GoHighLevel expert?",
      a: "Match the specific skill you need, CRM architecture, automation, migration, integrations, AI, to someone who can show that exact kind of work, then run the vetting questions in this guide regardless of where you found them."
    },
    {
      q: "Is it better to hire a freelancer or an agency for GoHighLevel work?",
      a: "Freelancers suit narrow, well-defined tasks. Agencies suit multi-system builds, migrations, and anything needing architecture planning, testing and post-launch support. Neither is universally better; the mismatch between scope and hire type is what causes problems."
    },
    {
      q: "What is HighLevel's Certified Admin Directory?",
      a: "It's HighLevel's own public directory of professionals who have passed its certification exam, browsable by country, language and specialization. Certification confirms platform knowledge, not delivery quality or communication, so it's a filter, not a guarantee."
    },
    {
      q: "Can I find GoHighLevel experts in Facebook groups?",
      a: "Yes. Active GoHighLevel communities on Facebook are a genuine channel, particularly for referral-vetted hires, if you ask directly whether anyone has actually worked with a candidate before."
    },
    {
      q: "What should I ask before hiring a GoHighLevel expert?",
      a: "Ask to see recent builds, how they'd approach your specific project, their delivery and testing process, what happens after launch, what's excluded from scope, and who owns the account and access when it's done."
    },
    {
      q: "What are the red flags when hiring a GoHighLevel expert?",
      a: "No portfolio, inability to explain automations in plain English, guaranteed results before a discovery call, pricing far below the going rate for the same scope, slow communication before you've paid, and no mention of testing or account access."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-expert-does', title: 'What a GoHighLevel Expert Actually Does' },
    { id: 'where-to-hire', title: 'Where Can You Hire a GoHighLevel Expert?' },
    { id: 'official-directory', title: "1. HighLevel's Certified Admin Directory" },
    { id: 'freelance-marketplaces', title: '2. Freelance Marketplaces (Upwork, Fiverr)' },
    { id: 'facebook-groups', title: '3. Facebook Groups and GHL Communities' },
    { id: 'clutch-linkedin', title: '4. Clutch, B2B Directories and LinkedIn' },
    { id: 'specialist-agencies', title: '5. GoHighLevel Specialist Agencies' },
    { id: 'direct-referral', title: '6. Direct Referral' },
    { id: 'freelancer-vs-agency', title: 'Freelancer vs Agency: Which Should You Choose?' },
    { id: 'cost', title: 'What Does It Cost to Hire a GoHighLevel Expert?' },
    { id: 'how-to-evaluate', title: 'How to Evaluate a GoHighLevel Expert' },
    { id: 'questions-to-ask', title: 'Questions to Ask Before Hiring' },
    { id: 'match-expert', title: 'Match the Expert to Your Project' },
    { id: 'security-access', title: 'Security and Account Access' },
    { id: 'red-flags', title: 'Red Flags to Walk Away From' },
    { id: 'full-implementation-team', title: 'When You Need a Full Implementation Team' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const skillSets = [
    'CRM architecture (pipelines, custom fields, tags, lead routing)',
    'workflow automation (triggers, branching logic, testing)',
    'funnels and websites',
    'integrations (APIs, webhooks, third-party tools)',
    'platform migration',
    'AI features (voice and chat agents)',
    'white-label SaaS configuration'
  ];

  const freelancerBullets = [
    'The task is narrow and well-defined: one workflow, one funnel, one integration',
    "You or someone on your team already understands GoHighLevel's architecture and just needs execution",
    'Budget and timeline are the priority over broader planning'
  ];

  const agencyBullets = [
    'Multiple systems are involved: CRM plus automation plus funnels, or a migration',
    'AI features, integrations or SaaS Mode are part of the scope',
    'You need testing, documentation and support after launch, not just a delivered build',
    'No one on your team can specify the scope precisely, and you need someone to help define it first'
  ];

  const evaluationCriteria = [
    { title: 'CRM architecture', detail: 'can they design pipelines, stages, custom fields, tags and lead routing around how your business actually sells, not a generic template?' },
    { title: 'Automation', detail: 'can they build and explain triggers, branching logic, and follow-up sequences, and do they test them against real data before handover?' },
    { title: 'Integrations', detail: 'can they work with APIs and webhooks if your project needs to connect other tools?' },
    { title: 'Migration', detail: "if you're moving from another platform, can they map and rebuild your data and processes without downtime?" },
    { title: 'AI features', detail: "can they configure voice or chat agents if that's part of your scope? This is a reasonable bar in 2026; someone unfamiliar with it is behind current platform capability." },
    { title: 'Documentation and handover', detail: 'will you actually understand and be able to run what they built, or are you permanently dependent on them for basic changes?' }
  ];

  const vettingQuestions = [
    { q: 'Show me two or three recent GoHighLevel builds.', why: 'No portfolio, no track record.' },
    { q: "Walk me through how you'd approach my specific project.", why: 'A real expert asks about your sales process before proposing tools; a template-pusher jumps straight to "I\'ll build a funnel and a workflow."' },
    { q: 'Have you worked with businesses like mine before?', why: 'A real estate setup is architecturally different from a dental practice.' },
    { q: 'What does your delivery process look like?', why: 'Look for a scoping call, milestones, testing before handover, and documentation.' },
    { q: 'How do you handle issues after the project is complete?', why: 'Workflows break and the platform changes; ask what support looks like after launch.' },
    { q: 'What is not included in your scope?', why: 'Clear exclusions prevent scope-creep disputes later.' },
    { q: 'Who owns the account, credentials and assets when this is done?', why: 'This should have a clear answer before work starts, not after.' }
  ];

  const matchExpertData = [
    { need: 'Need CRM architecture (pipelines, lifecycle, lead routing)', look: 'evidence of pipeline and tagging design, not just "CRM setup" as a line item.', link: '/services/crm-setup', linkText: 'CRM setup & configuration' },
    { need: 'Need automation', look: 'someone who can explain branching logic and testing, not just "I build workflows."', link: '/services/workflow-automation', linkText: 'workflow automation' },
    { need: 'Need migration', look: 'platform-specific migration experience and a no-downtime process.', link: '/services/migration', linkText: 'GoHighLevel migration' },
    { need: 'Need integrations', look: 'actual API and webhook work, not just "connects to Zapier."', link: '/services/integrations', linkText: 'integrations & API development' },
    { need: 'Need AI voice or chat', look: 'configured, live examples, not a generic capability claim.', link: '/services/ai-voice-agent', linkText: 'AI voice agent' },
    { need: 'Need white-label SaaS', look: 'SaaS Mode, sub-account architecture and billing experience specifically, which is a narrower skill than general GHL setup.', link: '/services/saas-setup', linkText: 'white-label SaaS setup' }
  ];

  const redFlags = [
    { flag: "They can't explain how their automations work in plain English.", cause: "This usually means they're copying tutorials without understanding the logic underneath." },
    { flag: 'They promise specific results before understanding your business.', cause: 'No one can credibly guarantee lead volume or revenue outcomes without a discovery call and an audit.' },
    { flag: "Pricing that's dramatically below everyone else for the same scope.", cause: 'Often means corner-cutting or copy-paste templates.' },
    { flag: 'Slow or vague communication during the proposal phase.', cause: 'This is usually the best predictor of communication quality during delivery.' },
    { flag: 'No mention of testing before handover.', cause: 'Untested workflows can silently fail for weeks before anyone notices.' },
    { flag: 'No clear answer on account ownership or access.', cause: 'Get this settled before, not after, work starts.' }
  ];

  // Reusable Project Help Card Component
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
          <span className="text-[#1A2236] font-medium">Where to Hire GoHighLevel Experts</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Hire GHL Expert</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Freelance Platforms</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Agency</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Where to Hire GoHighLevel Experts:<br />
            <span className="text-[#F8D000]">6 Places to Look and How to Vet Them</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered · Verified against GoHighLevel, Clutch and freelance platform documentation, September 2026</div>
            </div>
          </div>

          {/* Quick Answer Box - ONLY IN HERO SECTION */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              There are six real places to find a GoHighLevel expert: HighLevel's own <a href="https://directory.gohighlevel.com" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Certified Admin Directory</a>, freelance marketplaces like Upwork and Fiverr, GoHighLevel Facebook communities, B2B directories like Clutch and LinkedIn, and dedicated GHL specialist agencies. Which one is right depends on the size of the job, not which platform has the best reputation. A single defined task, like fixing one workflow, is usually a freelancer job. A full CRM build, a migration, or anything touching AI, integrations or SaaS Mode is usually an agency job, because it needs architecture planning and testing that a one-person engagement rarely includes.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              What it costs to hire a GoHighLevel expert depends entirely on scope: a single small task can run from around $50 to a few hundred dollars on a freelance marketplace, while a full CRM and automation build is typically quoted as a fixed project price rather than an hourly rate, because the work spans multiple systems. The best way to hire one is not to search for "the best GoHighLevel expert" at all, but to match the specific skill you need, CRM architecture, automation, migration, integrations, AI, to someone who can demonstrate that exact kind of work.
            </p>
          </div>

          {/* CTA Buttons */}
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
              href="#specialist-agencies"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Top Agencies
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
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
                5+ years GHL experience · 200+ systems built globally. We have hired, worked alongside, and evaluated hundreds of GHL freelancers and agencies. This guide is based on direct experience, not affiliate incentives.
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

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
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

            
            {/* Section: What a GHL Expert Does */}
            <h2 id="what-expert-does" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What a GoHighLevel Expert Actually Does
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              "GoHighLevel expert" gets used loosely. In practice, the work splits into a handful of distinct skill sets, and very few people are genuinely strong at all of them:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {skillSets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Someone who is excellent at funnel design is not automatically the right person for a data migration or an API integration. Keep that distinction in mind through the rest of this guide, because it matters more than which platform you search on.
            </p>


            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/where-to-hire-gohighlevel-experts-infographic.png"
                  alt="Where to Hire GoHighLevel Experts: 6 hiring channels comparison, freelancer vs agency decision matrix, and vetting checklist"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Where to Hire GoHighLevel Experts: 6 hiring channels comparison, freelancer vs agency decision matrix, and vetting checklist</span>
              </div>
            </div>


            {/* Section: Where Can You Hire */}
            <h2 id="where-to-hire" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where Can You Hire a GoHighLevel Expert?
            </h2>

            {/* Section 1: Official Directory */}
            <h3 id="official-directory" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              1. HighLevel's Certified Admin Directory
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel runs its own <a href="https://directory.gohighlevel.com" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Certified Admin Directory</a>, where anyone who has passed HighLevel's certification exam can list a public profile. You can browse it by country, by language, and by specialization tags such as Certified Admin, AI Voice, HIPAA Compliance, SaaS builds, A2P 10DLC compliance, paid ads or course creation, which makes it useful for narrowing to the specific skill you actually need rather than a generic "expert" search.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Certification, per HighLevel, confirms that someone has passed a live proctored exam and completed required training; it does not test delivery quality, project management, or communication. HighLevel's own certification page describes the badge as valid for two years and requires ongoing skills badges to stay current, so a profile is worth checking for how recently it was certified, not just whether it exists. Treat the directory as a starting filter, not a finish line: the vetting questions later in this guide still apply to every profile you find here.
            </p>

            {/* Section 2: Freelance Marketplaces */}
            <h3 id="freelance-marketplaces" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              2. Freelance Marketplaces (Upwork, Fiverr)
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both platforms host active GoHighLevel freelancer listings. Upwork's Job Success Score, verified earnings and client reviews give you a real quality signal if you filter for it; Fiverr works better for small, clearly scoped tasks like building one funnel or setting up one workflow, where you can judge the work from a seller's existing portfolio and reviews.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Rates on both platforms move constantly and vary hugely by experience level and region, so this guide will not quote a fixed number as current fact. What stays true regardless of the exact figures: a small, well-defined task should cost meaningfully less than a multi-system build, and a price that looks dramatically below everyone else's for the same scope is a signal to look closer, not a bargain. Check the actual current listings and reviews rather than any number in an article, including this one.
            </p>

            {/* Section 3: Facebook Groups */}
            <h3 id="facebook-groups" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              3. Facebook Groups and GHL Communities
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The GoHighLevel ecosystem has genuinely active Facebook communities where agency owners and freelancers answer questions and take job requests. This is a useful channel specifically for referral-vetted hires: post what you need, and ask directly whether anyone has worked with a specific person before committing. Community endorsement is not the same as verified work, so still run the vetting questions below.
            </p>

            {/* Section 4: Clutch LinkedIn */}
            <h3 id="clutch-linkedin" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              4. Clutch, B2B Directories and LinkedIn
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Clutch.co lists agencies with client reviews and project details, and is a reasonable starting point for a more structured, higher-stakes search. On LinkedIn, searching for GoHighLevel specialists and checking whether other GHL professionals actually engage with someone's posts is a decent proxy for whether they are active in the ecosystem, as opposed to someone who added the platform to a skills list.
            </p>

            {/* Section 5: Specialist Agencies */}
            <h3 id="specialist-agencies" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              5. GoHighLevel Specialist Agencies
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a complete build, not one task, a dedicated GHL specialist agency is generally the more reliable option, because it brings architecture planning, a team across the different skill sets above, testing before handover, and documentation. GHL Scale Up is one such agency; for a fuller comparison of options in this category, see <Link href="/blog/best-ghl-expert-agency" className="text-[#0E9BF0] hover:underline">Best GHL Expert Agency to Hire</Link>.
            </p>

            {/* Section 6: Direct Referral */}
            <h3 id="direct-referral" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              6. Direct Referral
            </h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If someone in your network has had a GoHighLevel system built recently, ask who built it and whether they would use them again. A direct referral skips most of the vetting problem, provided you still confirm the referral's project was similar in scope to yours.
            </p>

            {/* Section: Freelancer vs Agency */}
            <h2 id="freelancer-vs-agency" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Freelancer vs Agency: Which Should You Choose?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="text-sm font-bold text-[#0E9BF0]">Choose a Freelancer When</span>
                </div>
                <ul className="space-y-2">
                  {freelancerBullets.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-4 h-4 text-[#25C97D]" />
                  <span className="text-sm font-bold text-[#25C97D]">Choose an Agency When</span>
                </div>
                <ul className="space-y-2">
                  {agencyBullets.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Neither is universally better. A freelancer for a narrow task and an agency for a multi-system build are both reasonable choices for their respective scopes; the mismatch, hiring a freelancer for architecture-level work or an agency for a five-minute fix, is what causes most of the regret people report.
            </p>

            {/* Section: Cost */}
            <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does It Cost to Hire a GoHighLevel Expert?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Cost depends on scope far more than on which channel you hire from. A single small task on a freelance marketplace can run from roughly $50 to a few hundred dollars. A full CRM and automation build, a migration, or anything spanning multiple systems is usually quoted as a fixed project price after a scoping conversation, rather than an hourly rate, because the work does not reduce cleanly to hours. Ongoing management or support, if you want it, is typically a separate monthly arrangement on top of the initial build.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The variables that actually move the price: how many systems are involved (CRM alone vs. CRM plus automation plus integrations), whether it is a migration from another platform, whether AI or SaaS Mode is in scope, and whether ongoing support is included. Get a written, itemized scope before comparing any two quotes, because "GoHighLevel setup" means very different things depending on what is actually included.
            </p>

            {/* Section: How to Evaluate */}
            <h2 id="how-to-evaluate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Evaluate a GoHighLevel Expert
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Regardless of certification or platform reviews, evaluate on actual capability:
            </p>
            <div className="space-y-3 mb-6">
              {evaluationCriteria.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <p className="text-sm leading-relaxed">
                    <strong className="text-[#1A2236]">{item.title}:</strong>{' '}
                    <span className="text-[#5C6880]">{item.detail}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Section: Questions to Ask */}
            <h2 id="questions-to-ask" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Questions to Ask Before Hiring
            </h2>
            <div className="space-y-3 mb-6">
              {vettingQuestions.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.q}</p>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Match Expert */}
            <h2 id="match-expert" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Match the Expert to Your Project
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Instead of searching for "the best" GoHighLevel expert, match the requirement:
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {matchExpertData.map((item, idx) => (
                <li key={idx}>
                  <strong className="text-[#1A2236]">{item.need}:</strong> look for {item.look} See <Link href={item.link} className="text-[#0E9BF0] hover:underline">{item.linkText}</Link>.
                </li>
              ))}
            </ul>

            {/* Section: Security and Access */}
            <h2 id="security-access" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Security and Account Access
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Before handing anyone access to your GoHighLevel account, settle a few things: who retains ownership of the account and any assets (snapshots, integrations, API keys) once the project ends; whether the person you're hiring gets full admin access or a scoped role appropriate to the work; and how access gets removed once the engagement is over. Do not share master credentials casually, and do not leave a freelancer or contractor with standing access to your account indefinitely after the work is finished. A legitimate expert will not push back on being asked these questions upfront.
            </p>

            {/* Section: Red Flags */}
            <h2 id="red-flags" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Red Flags to Walk Away From
            </h2>
            <div className="space-y-3 mb-6">
              {redFlags.map((item, idx) => (
                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.flag}</p>
                      <p className="text-sm text-[#5C6880] leading-relaxed">{item.cause}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Full Implementation Team */}
            <h2 id="full-implementation-team" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When You Need a Full Implementation Team
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If what you actually need spans several of the areas above, CRM architecture plus automation plus AI or integrations, that points toward the agency side of the freelancer-vs-agency decision covered earlier, rather than piecing it together across several individual hires. That is the scope covered by <Link href="/services/hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">hiring a GoHighLevel expert team</Link>, which walks through what a full engagement includes and how the process runs end to end.
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

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about hiring GoHighLevel experts?</strong>
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
                <Link href="/blog/best-ghl-expert-agency" className="text-sm text-[#0E9BF0] hover:underline">Best GHL Expert Agency to Hire in 2026 →</Link>
                <Link href="/services/hire-gohighlevel-experts" className="text-sm text-[#0E9BF0] hover:underline">GHL Scale Up's Implementation Services →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation →</Link>
                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create and Use a GoHighLevel Snapshot →</Link>
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Service →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Service →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Already searched? Skip the guesswork.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up has built 200+ GHL systems. Yours could be next. CRM setup, workflow automation, AI Voice Agent, SaaS Mode, and GHL migrations. 5–7 business day delivery, full documentation included.
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
                This guide reflects GHL Scale Up's direct experience hiring, working alongside, and evaluating GHL freelancers and agencies, current as of September 2026. Provider positioning, pricing and offerings change; confirm current details directly before deciding.
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