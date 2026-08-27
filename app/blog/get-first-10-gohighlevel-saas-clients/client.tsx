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
  Star,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  FileText,
  Rocket,
  Target,
  Users,
  Sparkles,
  Clock,
  GraduationCap,
  Shield,
  DollarSign,
  MessageCircle,
  Phone,
  Search,
  Trophy,
  Facebook,
  AlertCircle,
  Info,
  UserCheck,
  UserX,
  Compass,
  FileCheck,
  CheckCircle2,
  Layers,
  PanelTop,
  LayoutDashboard,
  Settings,
  Briefcase,
  LifeBuoy,
  Award,
  Timer,
  Trash2,
  Download,
  BarChart3,
  PieChart,
  Workflow,
  Globe,
  Database,
  Cloud,
  GitBranch,
  HeartHandshake,
  Calendar,
  Mail
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GetFirst10GHLSAASClientsClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  // Handle scroll detection for active section
  useEffect(() => {
    const sections = [
      'entry-path',
      'get-rich-quick',
      'sell-outcome',
      'cold-email',
      'door-to-door',
      'flyer-card',
      'free-trial',
      'founder-content',
      'scaled-channels',
      'ninety-day-plan',
      'mistakes',
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

      // Show floating Project Help card after scrolling past hero section
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
      q: "Is a GoHighLevel SaaS business profitable?",
      a: "It can be profitable when the offer is specific, customer acquisition is predictable, support is controlled, and clients remain active. The platform alone does not guarantee profit."
    },
    {
      q: "How long does it take to get the first 10 GoHighLevel SaaS clients?",
      a: "There is no fixed timeline. An agency owner with existing clients may convert the first few customers quickly. A founder starting from zero may need several months of customer conversations, demos, trials, and follow-up. Focus on weekly activity and conversion rates rather than a promised deadline."
    },
    {
      q: "Should I offer a free trial?",
      a: "A limited free trial can help educate early clients and create proof. It should have a clear scope, a success metric, staff training, and a scheduled conversion meeting."
    },
    {
      q: "Should I start with cold email?",
      a: "For local SMEs, cold email is usually better as a supporting channel after you understand the niche and have proof. Manual outreach, networking, referrals, and founder-led content provide stronger feedback in the early stage."
    },
    {
      q: "Can I use Google Ads to get local clients?",
      a: "Yes. Google Ads supports geographic targeting. However, you still need sufficient budget, a focused landing page, tracking, and a sales process. It is usually safer to validate the offer manually before scaling paid acquisition."
    },
    {
      q: "What should I post on social media?",
      a: "Post product demonstrations, customer problems, founder lessons, behind-the-scenes builds, and real outcomes. Explain what the system does for the business, not only how the software works."
    },
    {
      q: "Should an existing agency launch a separate SaaS brand?",
      a: "Not necessarily. Start by integrating the system into an offer your clients already buy. A separate brand can be created later if the product has a distinct niche, positioning, and acquisition strategy."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'entry-path', title: '1. Which Entry Path Should You Choose?' },
    { id: 'get-rich-quick', title: '2. Is GoHighLevel SaaS a Get-Rich-Quick Business?' },
    { id: 'sell-outcome', title: '3. Should You Sell GoHighLevel or Sell the Outcome?' },
    { id: 'cold-email', title: '4. Why Should Cold Email Not Be Your First Channel?' },
    { id: 'door-to-door', title: '5. How Do You Use Door-to-Door and Local Networking?' },
    { id: 'flyer-card', title: '6. What Should Your Flyer and Visiting Card Include?' },
    { id: 'free-trial', title: '7. How Do You Run a Free Trial That Converts?' },
    { id: 'founder-content', title: '8. Why Is Founder-Led Content a Core Acquisition Channel?' },
    { id: 'scaled-channels', title: '9. When Should You Add Google Ads, SEO, AEO, and Scaled Outreach?' },
    { id: 'ninety-day-plan', title: '10. What Is a Practical 90-Day Plan for Your First 10 Clients?' },
    { id: 'mistakes', title: '11. What Are the Most Common Mistakes to Avoid?' },
    { id: 'faq', title: '12. Frequently Asked Questions' }
  ];

  const metricsData = [
    { metric: 'Business conversations', why: 'Measures direct market learning', target: '25 to 50 per week' },
    { metric: 'Demos booked', why: 'Shows whether the opening message works', target: '5 to 10 per week' },
    { metric: 'Trials started', why: 'Shows offer and demo quality', target: '1 to 3 per week' },
    { metric: 'Trial-to-paid conversion', why: 'Measures product value and onboarding', target: 'Improve every month' },
    { metric: 'Monthly churn', why: 'Shows whether the system remains useful', target: 'Track from the first client' },
    { metric: 'Referrals requested', why: 'Turns customer success into distribution', target: 'Every satisfied client' },
    { metric: 'Content published', why: 'Builds trust and future inbound demand', target: '3 useful posts per week' }
  ];

  const flyerExample = [
    'STOP LOSING NEW PATIENT ENQUIRIES AFTER BUSINESS HOURS',
    'A simple patient follow-up system built for local clinics',
    '✓ Instant reply to every website enquiry and missed call',
    '✓ Easy appointment booking and automated reminders',
    '✓ Follow-up for patients who enquire but do not book',
    '✓ Automatic review requests after completed visits',
    '✓ One dashboard for leads, conversations, and appointments',
    'TRY IT FREE FOR 14 DAYS',
    'No long-term commitment. We set it up and train your team.',
    'Scan the QR code or call: +91 XXXXX XXXXX | yourbrand.com/demo'
  ];

  const positioningExamples = [
    { weak: 'We provide an AI-powered CRM, automation, funnels, email marketing, and social media tools for small businesses.', strong: 'We help dental clinics respond to every new enquiry within minutes, book more appointments, and automatically follow up with patients who do not convert.' },
    { weak: '', strong: 'We help gyms convert more enquiries into trials, follow up with inactive members, and automate review requests.' },
    { weak: '', strong: 'We help real estate brokers capture every property enquiry, assign it to the right broker, and follow up until the prospect books a visit.' },
    { weak: '', strong: 'We help clinics reduce missed appointments through reminders and rebooking workflows.' },
    { weak: '', strong: 'We help home-service businesses respond to missed calls, book jobs, and request reviews after service completion.' }
  ];

  const contentPillars = [
    { title: 'Product outcomes', desc: 'Show how a missed-call workflow, booking system, review request, or lead pipeline changes the business outcome.' },
    { title: 'Education', desc: 'Explain common problems in simple language, such as slow lead response, lost enquiries, weak follow-up, or missed reviews.' },
    { title: 'Founder journey', desc: 'Share why you chose the niche, what customers are teaching you, what failed, and how the product is improving.' },
    { title: 'Build in public', desc: 'Post short demos, workflow diagrams, before-and-after processes, and behind-the-scenes implementation.' },
    { title: 'Customer proof', desc: 'Turn trials, feedback, testimonials, and measurable outcomes into case studies and short videos.' }
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your project.</p>
      <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
          <span className="text-[#1A2236] font-medium">First 10 GoHighLevel SaaS Clients</span>
        </div>
      </nav>

      {/* Hero Section - WIDE */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">SaaS</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Client Acquisition</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Growth</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Get Your First 10 GoHighLevel SaaS Clients:<br />
            <span className="text-[#F8D000]">The Local-First Playbook (2026)</span>
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

          {/* Hero CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Your First 10 Clients
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#ninety-day-plan"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the 90-Day Plan
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Intro Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            Many GoHighLevel SaaS founders contact <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> with two questions: How much will the setup cost, and how quickly will the business break even and start making a profit? The honest answer is that there is no universal timeline. A GHL SaaS business follows the same basic rules as every other business. You need a clear market, a useful offer, customer acquisition, onboarding, support, and retention. The software does not remove those fundamentals.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            {/* Project Help Card - At top of sidebar */}
            <div className="mb-6">
              <ProjectHelpCard />
            </div>

            {/* Table of Contents */}
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
                  <div className="text-xs text-white/50">SaaS Growth Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ builds delivered. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Existing agency owners should add GoHighLevel SaaS to an offer they already sell. First-time founders should start locally, learn from real business owners, and treat the first 10 clients as market validation.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Do not treat GHL SaaS as a get-rich-quick scheme. The platform creates meaningful advantages recurring revenue, standardised delivery, and automated workflows but the idea of earning recurring revenue with no manual effort is only realistic after the offer, onboarding, support, and retention systems have been built properly.
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Your Client Acquisition Plan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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

            {/* Mobile Project Help Card - visible on mobile only */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* CTA 1 - After TOC */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">🚀 Ready to Get Your First 10 SaaS Clients?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up helps founders and agencies with SaaS Mode setup, niche-specific snapshots, onboarding systems, workflows, and go-to-market execution.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Entry Path */}
            <h2 id="entry-path" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Which Entry Path Should You Choose?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are two very different ways to build a GoHighLevel SaaS business. The right strategy depends on whether you already own an agency or are starting with no customers, audience, or existing offer.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Path A: You already own an agency</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For an existing agency, GHL SaaS should not begin as a separate product that you suddenly need to sell from zero. It should become part of the outcome you already deliver.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>A paid ads agency can bundle lead capture, instant follow-up, appointment booking, and pipeline tracking.</li>
              <li>A web design agency can add forms, calendars, missed-call text back, review automation, and lead nurturing.</li>
              <li>An SEO agency can connect traffic generation with CRM follow-up, conversion tracking, and review requests.</li>
              <li>A consulting or operations agency can package the platform as the system that manages leads, communication, and reporting.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The client should not feel that you are adding another piece of software. The client should feel that your offer now produces a more complete business outcome.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">FEATURED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you want a done-for-you SaaS Mode setup that includes niche snapshot, Stripe billing, rebilling, and cancellation flow, see our <Link href="/services/saas-setup" className="text-[#0E9BF0] hover:underline">GHL SaaS Setup Service →</Link>
              </p>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">BEST STRATEGY FOR AGENCY OWNERS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Start with existing clients. Identify one recurring problem your current service does not solve. Add a focused GHL system that solves it, then charge a recurring fee for the platform, monitoring, support, and continuous improvement.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Path B: You are starting from scratch</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When you have no agency, no clients, and no distribution, your first job is not to build a perfect SaaS product. Your first job is to understand a market well enough to sell a useful outcome.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Choose a niche you can physically reach or already understand.</li>
              <li>Speak to owners before finalising the offer.</li>
              <li>Build one demo around one expensive or repetitive problem.</li>
              <li>Use the first few clients to improve the product, onboarding, support, and pricing.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This route is more manual in the beginning. That is not a weakness. The conversations, objections, and customer behaviour you observe will become the foundation of a scalable offer later.
            </p>

            {/* CTA 2 - After Section 1 */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🎯 Need Help Choosing Your Entry Path?</p>
              <p className="text-sm text-white/80 mb-4">Whether you're an agency owner or starting from scratch, GHL Scale Up helps you build the right offer, configure your SaaS, and acquire your first clients.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Users className="w-4 h-4" />
                Get Expert Guidance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 2: Get Rich Quick */}
            <h2 id="get-rich-quick" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. Is GoHighLevel SaaS a Get-Rich-Quick Business?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel SaaS is often marketed as a simple path to monthly recurring revenue. The upside is real, but the business only becomes efficient after the difficult work has been done.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">FEATURED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For the full 2026 breakdown of how GoHighLevel SaaS Mode works, pricing, and setup steps, see our cornerstone guide: <Link href="/gohighlevel-saas-mode" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: The Complete 2026 Guide →</Link>
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The obvious upsides</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Recurring revenue:</strong> Customers can pay monthly for access, support, and ongoing improvements.</li>
              <li><strong className="text-[#1A2236]">Standardised fulfilment:</strong> A niche-specific snapshot, onboarding flow, and support process can be reused.</li>
              <li><strong className="text-[#1A2236]">Lower marginal delivery effort:</strong> Once the core system is stable, adding another similar client requires less work.</li>
              <li><strong className="text-[#1A2236]">Multiple revenue layers:</strong> You can charge for setup, monthly access, onboarding, support, customisation, and other services.</li>
              <li><strong className="text-[#1A2236]">Stronger retention potential:</strong> A system connected to leads, conversations, appointments, reviews, and reporting becomes operationally important to the client.</li>
            </ul>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What founders usually underestimate</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Customer education:</strong> Many local business owners do not immediately understand CRM, automations, workflows, or SaaS terminology.</li>
              <li><strong className="text-[#1A2236]">Onboarding:</strong> Domains, calendars, phone numbers, forms, pipelines, users, integrations, and data need to be configured.</li>
              <li><strong className="text-[#1A2236]">Support:</strong> Clients need help when staff members change, processes break, or they do not use the system correctly.</li>
              <li><strong className="text-[#1A2236]">Retention:</strong> A client will not keep paying only because the dashboard looks impressive. The system must remain useful.</li>
              <li><strong className="text-[#1A2236]">Distribution:</strong> A technically strong product without a reliable way to reach customers is still a weak business.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">BREAK-EVEN FORMULA</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Break-even customers = monthly fixed costs divided by the average monthly gross margin per customer. This formula is useful only after you have estimated support time, failed trials, churn, discounts, and acquisition costs honestly. Do not sell yourself a 30-day success story before you have spoken to customers. Build a small, repeatable business first.
              </p>
            </div>

            {/* Section 3: Sell Outcome */}
            <h2 id="sell-outcome" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Should You Sell GoHighLevel or Sell the Outcome?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A local business does not want GoHighLevel because it has pipelines, workflows, funnels, or conversation tools. It wants fewer missed leads, faster follow-up, more appointments, more reviews, and better visibility into sales. That means your positioning should begin with the business problem, not the software.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">POSITIONING FORMULA</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                We help [specific type of business] achieve [specific business outcome] by fixing [specific operational problem].
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Weak positioning</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">"We provide an AI-powered CRM, automation, funnels, email marketing, and social media tools for small businesses."</p>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">Stronger positioning</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">"We help dental clinics respond to every new enquiry within minutes, book more appointments, and automatically follow up with patients who do not convert."</p>
            </div>

            <div className="space-y-2 mb-4 text-sm text-[#5C6880]">
              <p><strong className="text-[#1A2236]">More examples:</strong></p>
              {positioningExamples.slice(1).map((item, idx) => (
                <div key={idx} className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-3">
                  <p className="text-sm text-[#1A2236]">"{item.strong}"</p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The product can use the same core technology, but the offer should feel specific to the buyer.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Considering GoHighLevel vs Keap for your positioning? Full honest comparison here: <Link href="/blog/gohighlevel-vs-keap-2026-comparison" className="text-[#0E9BF0] hover:underline">GoHighLevel vs Keap: Honest 2026 Comparison →</Link>
              </p>
            </div>

            {/* Section 4: Cold Email */}
            <h2 id="cold-email" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Why Should Cold Email Not Be Your First Channel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Cold email can work, especially when you have a refined offer, strong proof, accurate data, and a clear follow-up process. However, it is usually a low-priority starting channel when you are selling to local SMEs.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>A generic email cannot easily demonstrate how the product fits the owner's daily operations.</li>
              <li>You receive limited feedback when prospects ignore the message.</li>
              <li>Without case studies, your promise sounds similar to every CRM, AI, and marketing pitch.</li>
              <li>The founder can spend weeks optimising subject lines instead of learning what the market actually wants.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Cold email should support a proven strategy, not replace market understanding. It becomes more useful after you have a clear niche, a working demo, a few customer outcomes, and language that reflects real conversations.
            </p>

            {/* Section 5: Door to Door */}
            <h2 id="door-to-door" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Use Door-to-Door and Local Networking?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a founder starting from scratch, manual outreach to local businesses is one of the fastest ways to learn and win the first few customers. It is direct, difficult to ignore, and gives you immediate feedback.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A practical local outreach process</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li>Select one niche within a manageable area.</li>
                <li>Create a list of 30 to 50 businesses using Google Maps, local directories, referrals, and your personal network.</li>
                <li>Review each business before visiting. Look for missed opportunities such as no online booking, weak review follow-up, slow enquiry response, or poor lead capture.</li>
                <li>Visit during a relatively quiet time. Ask for the owner or manager and keep the first conversation brief.</li>
                <li>Use one specific observation, not a generic sales pitch.</li>
                <li>Show a short demo or book a follow-up meeting. The product should be visible, simple, and focused on one result.</li>
                <li>Record every objection and question. Use those insights to improve your offer, demo, flyer, pricing, and onboarding.</li>
              </ol>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">60-SECOND DOOR-TO-DOOR PITCH</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                "Hi, I work with local [niche] businesses. I noticed that when someone calls after hours or submits an enquiry, there is no immediate follow-up or easy booking process. We have built a simple system that replies instantly, tracks the lead, and keeps following up until the customer books. I am not asking you to buy anything right now. Can I show you a five-minute demo and let you test it for a limited period?"
              </p>
            </div>

            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Other local channels:</strong> Business networking groups, referrals through accountants/web developers/marketing consultants, industry associations, your personal network, and local WhatsApp/Facebook communities.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The first ten clients are not only revenue. They are customer research, proof, testimonials, referrals, and product development.
            </p>

            {/* CTA 3 - After Section 5 */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🏢 Ready to Start Your Local Outreach?</p>
              <p className="text-sm text-white/80 mb-4">We help you build the right offer, create your demo, design your flyer and visiting card, and plan your local outreach strategy.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Target className="w-4 h-4" />
                Build Your Local Strategy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 6: Flyer and Card */}
            <h2 id="flyer-card" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Should Your Flyer and Visiting Card Include?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A founder visiting local businesses needs something simple and credible to leave behind. A flyer and visiting card are useful because the owner may not have time to speak during the first visit.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">What the flyer should include:</strong> A headline based on a costly business problem, three to five clear outcomes written without software jargon, a niche-specific visual or workflow, a limited free trial or demonstration offer, a QR code or short link to book a demo, your name and contact details, and one clear call to action.</li>
            </ul>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">EXAMPLE: ONE-PAGE FLYER FOR A LOCAL DENTAL CLINIC</span>
              </div>
              <div className="space-y-1 text-sm text-[#1A2236] font-mono bg-white p-3 rounded-lg border border-[#DDE1E9]">
                {flyerExample.map((line, idx) => (
                  <p key={idx} className={idx === 0 ? 'font-bold text-lg' : idx === 7 ? 'font-bold' : ''}>{line}</p>
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">What the visiting card should do:</strong> The visiting card should make it easy to remember who you are and what result you deliver. Avoid listing ten services. Use one line such as: "Helping local clinics convert more enquiries into appointments." Add your direct number and a QR code to the demo.
            </p>

            {/* Section 7: Free Trial */}
            <h2 id="free-trial" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. How Do You Run a Free Trial That Converts?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A free trial can work well for the first few clients because local SMEs may need to experience the system before they understand its value. However, the trial must be structured.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A good free trial has five rules</span>
              </div>
              <ol className="space-y-1 text-sm text-[#1A2236] list-decimal list-inside">
                <li><strong className="text-[#0E9BF0]">Keep it time-bound.</strong> A 7-day, 14-day, or 30-day pilot is easier to manage than an open-ended free account.</li>
                <li><strong className="text-[#0E9BF0]">Limit the scope.</strong> Include only the workflows required to demonstrate the core outcome.</li>
                <li><strong className="text-[#0E9BF0]">Define success before starting.</strong> Agree on the metric you will review.</li>
                <li><strong className="text-[#0E9BF0]">Train the owner or staff.</strong> A trial fails when nobody knows how to use the system.</li>
                <li><strong className="text-[#0E9BF0]">Schedule the conversion meeting in advance.</strong> Do not wait for the trial to expire and then chase the client.</li>
              </ol>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Do not give away unlimited custom work</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The purpose of the trial is to prove the product, not to provide weeks of free consulting. Custom integrations, website rebuilds, large data migrations, complex campaigns, and additional modules should remain outside the free scope.
              </p>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">FREE TRIAL POSITIONING</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                "We will set up the core system for a limited period so you can see how it works inside your business. At the end of the trial, we will review the results together. You can continue on the monthly plan or stop without a long-term commitment."
              </p>
            </div>

            {/* Section 8: Founder Content */}
            <h2 id="founder-content" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. Why Is Founder-Led Content a Core Acquisition Channel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Content is not optional for a new GHL SaaS brand. Most founders only post product features or AI-generated tips. That content rarely builds trust. A stronger strategy is to make the founder visible. Show the business being built, explain the problem you are solving, demonstrate the product, and share what you are learning from local customers.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Five content pillars</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                {contentPillars.map((item, idx) => (
                  <li key={idx}><strong className="text-[#0E9BF0]">{item.title}:</strong> {item.desc}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Collaborate with local social media pages</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Create a short founder story about why you are building the product.</li>
              <li>Offer a practical demonstration for the page's local business audience.</li>
              <li>Run a limited pilot for businesses that contact you through the collaboration.</li>
              <li>Use local language, examples, and customer problems instead of generic global SaaS messaging.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">What GHL Scale Up has observed</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL Scale Up clients have used both local manual outreach and founder-led social content to acquire and educate early SaaS customers. Few teams work as deeply across GoHighLevel SaaS setup, delivery, and growth as GHL Scale Up. Our recommendations are shaped by what founders face after the account is configured, including onboarding, adoption, support, and retention, not only by the technical build.
              </p>
            </div>

            {/* CTA 4 - After Section 8 */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">✍️ Want to Build a Content Strategy That Attracts Clients?</p>
              <p className="text-sm text-white/80 mb-4">We help SaaS founders create content that builds trust, demonstrates expertise, and attracts the right customers — from blog posts to social media and video content.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Sparkles className="w-4 h-4" />
                Get Content Strategy Help
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 9: Scaled Channels */}
            <h2 id="scaled-channels" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. When Should You Add Google Ads, SEO, AEO, and Scaled Outreach?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once you have a working local offer, proof, and a clearer understanding of the buyer, you can add scalable acquisition channels.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE RIGHT ORDER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Local conversations first. Proof and retention second. Content and referrals throughout. Paid ads, SEO, AEO, and scaled outbound after the offer is working.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Google Ads:</strong> Can generate demand when prospects are already searching for the problem you solve. Useful when you have sufficient budget, a strong landing page, conversion tracking, and a reliable sales process.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">SEO and AEO:</strong> Can build long-term inbound demand. Create local and niche-specific pages around real customer questions, not generic articles about CRM features.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">RELATED READ</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For the technical foundation behind these outcomes, see our <Link href="/blog/ghl-white-label-saas-guide" className="text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Cold email and scaled outbound:</strong> Add after you have proof and a niche-specific message. Use it to reach similar businesses beyond your immediate local network. The email should lead with an observation or outcome, then offer a short demo or case study.
            </p>

            {/* Section 10: 90-Day Plan */}
            <h2 id="ninety-day-plan" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              10. What Is a Practical 90-Day Plan for Your First 10 Clients?
            </h2>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Days 1 to 14: Build the minimum sellable offer</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Choose one niche and one problem.</li>
                <li>Speak to at least 10 business owners before finalising the package.</li>
                <li>Build one simple demo and one standard onboarding process.</li>
                <li>Create the flyer, visiting card, booking page, and short demo video.</li>
                <li>Prepare a limited free-trial offer and a clear paid continuation plan.</li>
              </ul>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Days 15 to 30: Start local acquisition</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Visit or call 5 to 10 targeted businesses each working day.</li>
                <li>Attend local networking events and ask for referrals.</li>
                <li>Publish founder-led content at least three times per week.</li>
                <li>Contact local social media pages and business communities for collaboration.</li>
                <li>Track objections, demo bookings, trial starts, and follow-ups.</li>
              </ul>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Days 31 to 60: Run trials and create proof</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Onboard the first trial customers with a fixed scope.</li>
                <li>Train the owner and staff.</li>
                <li>Measure the agreed outcome.</li>
                <li>Document the implementation and results.</li>
                <li>Convert successful trials into paid plans and request testimonials or referrals.</li>
              </ul>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Days 61 to 90: Repeat what works</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Improve the offer based on the highest-converting problem.</li>
                <li>Create one or two case studies.</li>
                <li>Ask every satisfied customer for two introductions.</li>
                <li>Expand to nearby businesses in the same niche.</li>
                <li>Test one scalable channel without stopping direct outreach.</li>
              </ul>
            </div>

            {/* CTA 5 - After 90-Day Plan */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">📋 Need a Custom 90-Day Plan for Your SaaS?</p>
              <p className="text-sm text-white/80 mb-4">GHL Scale Up helps you build a tailored go-to-market plan, from offer design and demo creation to local outreach, content strategy, and client onboarding.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Users className="w-4 h-4" />
                Get Your Custom Plan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Metric</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why it matters</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Early target</th>
                  </tr>
                </thead>
                <tbody>
                  {metricsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.metric}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA Section - Internal */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-center text-white">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">BUILDING A GOHIGHLEVEL SAAS OFFER?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4 max-w-md mx-auto">
                GHL Scale Up helps founders and agencies with SaaS Mode setup, niche-specific snapshots, onboarding systems, workflows, support processes, and go-to-market execution.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 11: Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              11. What Are the Most Common Mistakes to Avoid?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Building a broad product for every type of business before speaking to one niche.</li>
              <li>Selling features instead of a measurable business outcome.</li>
              <li>Assuming recurring revenue means zero support or customer success work.</li>
              <li>Relying only on cold email because it feels easier than speaking to business owners.</li>
              <li>Offering unlimited free work without a scope, timeline, or conversion meeting.</li>
              <li>Posting generic AI content without founder visibility, product demonstrations, or customer insight.</li>
              <li>Spending heavily on ads before the offer, landing page, and sales process are proven.</li>
              <li>Trying to scale nationally or globally before winning a small local market.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Every recommendation in this guide is drawn from working with real GoHighLevel SaaS founders and agency owners across 6 countries. See <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies</Link> to review actual client outcomes.
            </p>

            {/* CTA 6 - Before FAQ */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🚀 Ready to Build Your GoHighLevel SaaS Offer?</p>
              <p className="text-sm text-white/80 mb-4">GHL Scale Up helps founders and agencies with SaaS Mode setup, niche-specific snapshots, onboarding systems, workflows, support processes, and go-to-market execution.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Rocket className="w-4 h-4" />
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 12: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              12. Frequently Asked Questions
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

            {/* CTA 7 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about getting your first clients?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our SaaS growth specialists directly. We've helped founders get their first 10 clients and beyond.
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

            {/* Related Resources */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/gohighlevel-saas-mode" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode: The Complete 2026 Guide →</Link>
                <Link href="/services/saas-setup" className="text-sm text-[#0E9BF0] hover:underline">GHL SaaS Setup Service →</Link>
                <Link href="/blog/gohighlevel-vs-keap-2026-comparison" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs Keap: Honest 2026 Comparison →</Link>
                <Link href="/blog/ghl-white-label-saas-guide" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label SaaS Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to build your GoHighLevel SaaS offer?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up helps founders and agencies with SaaS Mode setup, niche-specific snapshots, onboarding systems, workflows, support processes, and go-to-market execution.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency founded by Aryan Trivedi · 5+ years GHL experience · 200+ builds delivered globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency founded by Aryan Trivedi. Based in India, we serve agencies and SaaS founders across 6 countries with 200+ GoHighLevel builds delivered. We help agencies and founders design, build, launch, and improve GoHighLevel systems that produce real customer outcomes not just impressive dashboards. This guide reflects direct experience helping SaaS founders from zero clients through their first 10 and beyond.
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