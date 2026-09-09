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
  Database,
  Layout,
  GitBranch,
  Workflow,
  Clock,
  Star,
  AlertTriangle,
  Rocket,
  Target,
  Search,
  MessageCircle,
  Phone,
  BarChart3,
  Info,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';
import Image from 'next/image';

export default function BestCRMToMigrateToGHLClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'how-measured',
        'platform-ranking',
        'platform-breakdown',
        'migration-method-matters',
        'timeline-impact',
        'next-steps',
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
      q: "What is the easiest platform to migrate to GoHighLevel from?",
      a: "Mailchimp, due to its simple, primarily email-centric data model. Among platforms with more CRM/automation depth, ClickFunnels and ActiveCampaign are tied for easiest."
    },
    {
      q: "What is the hardest platform to migrate to GoHighLevel from?",
      a: "Salesforce, because its multi-object data model (leads, contacts, accounts, opportunities, custom objects) doesn't map directly onto GoHighLevel's contact-centric structure this is true of Salesforce migrations generally, not specific to GoHighLevel."
    },
    {
      q: "Does GoHighLevel have a Kajabi course importer?",
      a: "Yes. It automatically imports video, image, and text content for published Kajabi lessons. Quizzes, assignments, and assessments are not included and require manual recreation."
    },
    {
      q: "Does migration difficulty mean GoHighLevel isn't a good fit for that platform's users?",
      a: "No. Difficulty measures manual rebuild effort, not whether GoHighLevel suits your business. Salesforce ranks hardest because of its data model, not because GoHighLevel is a worse fit for Salesforce users many still find GHL the right platform once they need the operational breadth Salesforce doesn't provide."
    },
    {
      q: "How long does each platform's migration typically take?",
      a: "Simple migrations range from 1–4 weeks across all 8 platforms. Salesforce and HubSpot typically run longest at standard-to-complex scale (up to 8–12 weeks for Salesforce) due to data model complexity and account age respectively. Automation count is the biggest driver of timeline within any single platform."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'how-measured', title: 'How Migration Difficulty Is Actually Measured' },
    { id: 'platform-ranking', title: 'The 8 Platforms Ranked by Migration Difficulty' },
    { id: 'platform-breakdown', title: 'Platform-by-Platform Breakdown' },
    { id: 'migration-method-matters', title: 'Migration Method Matters as Much as Difficulty' },
    { id: 'timeline-impact', title: 'How Difficulty Affects Your Migration Timeline' },
    { id: 'next-steps', title: 'What Should You Do Next?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const rankingData = [
    { rank: 1, platform: 'Mailchimp', score: '1.55', method: 'CSV export/import', why: 'Simplest data model on this list primarily email-centric, minimal structural complexity' },
    { rank: 2, platform: 'ClickFunnels', score: '2.25', method: 'Native URL importer (page design)', why: 'Page design clones automatically; automations, Stripe, and domains still need rebuilding' },
    { rank: 2, platform: 'ActiveCampaign', score: '2.25', method: 'CSV export/import, no native importer', why: 'Similar trigger-based automation model to GHL, but no native importer exists' },
    { rank: 4, platform: 'Keap', score: '2.75', method: 'CSV export/import, no native importer', why: 'Campaign Builder logic is navigable, but long-tenured accounts often depend on third-party add-ons needing replacement' },
    { rank: 4, platform: 'HubSpot', score: '2.75', method: 'CSV/API export, no native importer', why: 'Clean data export, but custom properties and associations accumulate heavily at scale' },
    { rank: 6, platform: 'Kajabi', score: '2.80', method: 'Native Course Importer + CSV', why: 'Course structure and media now import automatically for published lessons; quizzes, automations, offers, and community still need full manual rebuild' },
    { rank: 7, platform: 'Zoho CRM', score: '3.00', method: 'CSV/API export, no native importer', why: 'Blueprint workflows and territory management are structurally different from GHL\'s trigger model' },
    { rank: 8, platform: 'Salesforce', score: '3.45', method: 'CSV/API export, no native importer', why: 'Multi-object data model (leads, contacts, accounts, opportunities, custom objects) doesn\'t map directly to GHL\'s contact-centric structure' },
  ];

  const methodData = [
    { method: 'Native importer available', platforms: 'ClickFunnels (pages), Kajabi (course content)', meaning: 'Structure/content imports automatically; logic and configuration still need manual work' },
    { method: 'CSV/API export, no native importer', platforms: 'ActiveCampaign, HubSpot, Zoho, Salesforce, Keap, Mailchimp', meaning: 'Data transfers with careful field mapping; everything beyond raw data is a manual rebuild' },
  ];

  const timelineData = [
    { platform: 'Mailchimp', simple: '1–2 weeks', standard: '2–3 weeks', complex: '3–4 weeks' },
    { platform: 'ClickFunnels', simple: '1–2 weeks', standard: '2–3 weeks', complex: '3–5 weeks' },
    { platform: 'ActiveCampaign', simple: '2–3 weeks', standard: '3–5 weeks', complex: '5–7 weeks' },
    { platform: 'Keap', simple: '2–3 weeks', standard: '3–5 weeks', complex: '5–7 weeks' },
    { platform: 'HubSpot', simple: '3–4 weeks', standard: '4–6 weeks', complex: '6–8 weeks' },
    { platform: 'Kajabi', simple: '1–2 weeks', standard: '3–5 weeks', complex: '5–8 weeks' },
    { platform: 'Zoho CRM', simple: '2–3 weeks', standard: '3–4 weeks', complex: '4–6 weeks' },
    { platform: 'Salesforce', simple: '3–4 weeks', standard: '5–7 weeks', complex: '8–12 weeks' },
  ];

  const breakdownData = [
    {
      platform: 'Mailchimp',
      difficulty: 'Easiest',
      desc: 'Mailchimp\'s data model is the simplest on this list: audiences, tags, and campaigns export cleanly via CSV, and most Mailchimp accounts don\'t carry the deep automation or custom-object complexity that drives difficulty elsewhere. The main work is rebuilding email automations as GHL workflows and reconnecting any e-commerce integrations. See Mailchimp to GoHighLevel migration for the full process.',
      link: '/blog/mailchimp-to-gohighlevel-migration',
      linkText: 'Mailchimp to GoHighLevel migration →'
    },
    {
      platform: 'ClickFunnels',
      difficulty: 'Moderate-Easy',
      desc: 'GoHighLevel\'s URL import tool clones ClickFunnels page designs automatically, working for both ClickFunnels 1.0 and 2.0. What doesn\'t transfer: automations, Stripe connections, and domain settings. See ClickFunnels to GoHighLevel migration for what specifically breaks and how to fix it.',
      link: '/blog/clickfunnels-to-gohighlevel-migration',
      linkText: 'ClickFunnels to GoHighLevel migration →'
    },
    {
      platform: 'ActiveCampaign',
      difficulty: 'Moderate-Easy',
      desc: 'ActiveCampaign\'s trigger-and-action automation model is conceptually similar to GHL\'s, which makes the rebuild intuitive even though nothing imports automatically. The real complexity is in mapping ActiveCampaign\'s dual list-and-tag segmentation system correctly. See ActiveCampaign to GoHighLevel migration for the list-vs-tag mapping risk in detail.',
      link: '/blog/activecampaign-to-gohighlevel-migration',
      linkText: 'ActiveCampaign to GoHighLevel migration →'
    },
    {
      platform: 'Keap',
      difficulty: 'Moderate',
      desc: 'Keap\'s visual Campaign Builder maps reasonably well to GHL\'s workflow logic conceptually, but accounts that have been active for years (many still under their original Infusionsoft branding) often depend on third-party add-ons for functionality Keap doesn\'t natively provide those need direct GHL replacements, not just a rebuild.',
      link: null,
      linkText: null
    },
    {
      platform: 'HubSpot',
      difficulty: 'Moderate',
      desc: 'HubSpot exports contacts and deals cleanly, but the difficulty scales with account age: 2+ year old accounts typically carry dozens of custom properties and company associations that need auditing before rebuilding. The 25-day data deletion window after cancellation adds real time pressure. See How to Migrate from HubSpot to GoHighLevel for the complete breakdown.',
      link: '/blog/hubspot-to-gohighlevel-migration',
      linkText: 'How to Migrate from HubSpot to GoHighLevel →'
    },
    {
      platform: 'Kajabi',
      difficulty: 'Moderate-Hard',
      desc: 'GoHighLevel\'s native Kajabi Course Importer automatically transfers video, image, and text content for published lessons a real time-saver this ranking previously didn\'t credit. What still needs manual work: quizzes and assignments (imported as empty shells), drip scheduling, offers, community, affiliate data, and all automation logic. See Kajabi to GoHighLevel migration for exactly what the importer does and doesn\'t handle.',
      link: '/blog/kajabi-to-gohighlevel-migration',
      linkText: 'Kajabi to GoHighLevel migration →'
    },
    {
      platform: 'Zoho CRM',
      difficulty: 'Hard',
      desc: 'Zoho\'s Blueprint workflows and module customizations are built on a structurally different model than GHL\'s trigger-and-action builder, requiring more conceptual translation than a platform like ActiveCampaign. Contacts and deals export cleanly; the automation layer is where the real effort concentrates.',
      link: null,
      linkText: null
    },
    {
      platform: 'Salesforce',
      difficulty: 'Hardest',
      desc: 'Salesforce\'s data model leads, contacts, accounts, opportunities, and custom objects, all relationally connected doesn\'t map directly onto GHL\'s flatter, contact-centric structure. This isn\'t specific to GoHighLevel; Salesforce migrations are widely regarded as the highest-complexity CRM transition type generally, because the relational architecture itself has to be deliberately redesigned, not just re-exported.',
      link: null,
      linkText: null
    },
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
          <span className="text-[#1A2236] font-medium">Easiest Platform to Migrate to GoHighLevel 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Which Platform Is Easiest to Migrate to GoHighLevel?<br />
            <span className="text-[#F8D000]">8 Platforms Ranked by Difficulty</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ migrations delivered · Verified against official HighLevel documentation and this project's platform-specific research, September 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This is a migration-difficulty comparison, not a "best CRM" ranking several platforms compared here (ClickFunnels, Kajabi, Mailchimp) aren't CRMs at all. What they have in common is that GHL Scale Up has a dedicated migration guide for each, and this page exists to help you figure out which one to read first based on how hard your specific move will actually be.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer, easiest to hardest</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Mailchimp (simplest data model), ClickFunnels and ActiveCampaign (tied, both moderate-easy for different reasons), Keap and HubSpot (tied, moderate), Kajabi (moderate-hard a native course importer now handles content, but automations, offers, and community still need full manual rebuilding), Zoho CRM (hard Blueprint workflows don't map directly to GHL), and Salesforce (hardest its multi-object data model is the most complex on this list). This ranking measures manual rebuild effort, not platform quality a hard migration doesn't mean GoHighLevel is the wrong fit, and an easy one doesn't mean it's automatically right for you.
            </p>
          </div>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Migration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#platform-ranking"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Rankings
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
            {/* Project Help Card */}
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

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
                  <div className="text-xs text-white/50">GoHighLevel Migration Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ migrations completed globally across HubSpot, ClickFunnels, ActiveCampaign, Kajabi, and Zoho. Difficulty rankings based on real migration projects completed by our team as of June 2026.
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

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Not Sure Which Platform You're Migrating From?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help you evaluate your current setup and recommend the best migration path.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Advice
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

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

            {/* Section 1: How Migration Difficulty Is Actually Measured */}
            <h2 id="how-measured" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              How Migration Difficulty Is Actually Measured
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Difficulty isn't a feeling it's how much of your existing setup transfers automatically versus how much you rebuild by hand. We score each platform 1 (easiest) to 5 (hardest) across six weighted factors:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Weight</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Measures</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Automation/workflow rebuild complexity</td><td className="py-3 px-3 text-[#5C6880]">25%</td><td className="py-3 px-3 text-[#5C6880]">How different the platform's trigger-and-action logic is from GHL's</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Data model / structural complexity</td><td className="py-3 px-3 text-[#5C6880]">20%</td><td className="py-3 px-3 text-[#5C6880]">Custom objects, associations, blueprints, permission structures</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Content migration</td><td className="py-3 px-3 text-[#5C6880]">20%</td><td className="py-3 px-3 text-[#5C6880]">Pages, courses, or funnels, and whether a native import path exists</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Data portability</td><td className="py-3 px-3 text-[#5C6880]">15%</td><td className="py-3 px-3 text-[#5C6880]">How cleanly contacts and core records export</td></tr>
                  <tr className="border-b border-[#DDE1E9]"><td className="py-3 px-3 font-medium text-[#1A2236]">Integrations and payments reconnection</td><td className="py-3 px-3 text-[#5C6880]">10%</td><td className="py-3 px-3 text-[#5C6880]">Volume of third-party tools needing reconnection</td></tr>
                  <tr><td className="py-3 px-3 font-medium text-[#1A2236]">Native import tool availability</td><td className="py-3 px-3 text-[#5C6880]">10%</td><td className="py-3 px-3 text-[#5C6880]">Dedicated importer versus CSV/API/manual only</td></tr>
                </tbody>
              </table>
            </div>

            {/* Section 2: The 8 Platforms Ranked */}
            <h2 id="platform-ranking" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The 8 Platforms Ranked by Migration Difficulty
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Rank</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Weighted Score</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration Method</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.rank}</td>
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.score}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.method}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">A NOTE ON KAJABI'S POSITION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                some guides (including an earlier version of this one) rank Kajabi as the single hardest migration, based on the claim that course content has no import path at all. That claim is outdated. GoHighLevel's native Kajabi Course Importer automatically brings over video, image, and text content for published lessons. What still requires manual work quizzes, assignments, drip scheduling, offers, community, and automations is broad enough that Kajabi remains a genuinely harder-than-average migration, just not for the reason often cited.
              </p>
            </div>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/ghl-migration-difficulty-ranking.png"
                  alt="GoHighLevel migration difficulty ranking for 8 platforms: Mailchimp, ClickFunnels, ActiveCampaign, Keap, HubSpot, Kajabi, Zoho CRM, and Salesforce"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel migration difficulty ranking: 8 platforms compared by weighted score (1 = easiest, 5 = hardest)</span>
              </div>
            </div>

            {/* Section 3: Platform-by-Platform Breakdown */}
            <h2 id="platform-breakdown" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Platform-by-Platform Breakdown
            </h2>

            <div className="space-y-4 mb-6">
              {breakdownData.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h3 className="text-lg font-bold text-[#1A2236]">{item.platform}</h3>
                    <span className={`text-sm font-semibold ${item.difficulty === 'Easiest' ? 'text-[#25C97D]' :
                        item.difficulty === 'Hardest' ? 'text-[#DC3545]' :
                          item.difficulty === 'Hard' ? 'text-[#F8D000]' :
                            'text-[#0E9BF0]'
                      } bg-[rgba(14,155,240,0.1)] px-3 py-1 rounded-full`}>{item.difficulty}</span>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-2">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="text-sm text-[#0E9BF0] hover:underline inline-flex items-center gap-1">
                      → {item.linkText} <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Section 4: Migration Method Matters */}
            <h2 id="migration-method-matters" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Migration Method Matters as Much as Difficulty
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A single difficulty label hides an important distinction: what kind of migration are you actually doing?
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Migration Method</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platforms</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  {methodData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.method}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.platforms}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5: How Difficulty Affects Timeline */}
            <h2 id="timeline-impact" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Difficulty Affects Your Migration Timeline
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Simple</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Standard</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Complex</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.platform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.simple}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.standard}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.complex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Automation count is still the primary driver of timeline within any single platform, more than platform choice itself. For the general framework these ranges build on, see the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL migration timeline guide</Link>.
            </p>

            {/* Section 6: What Should You Do Next? */}
            <h2 id="next-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should You Do Next?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Read your platform-specific guide from the links above for the exact process, what transfers, and what breaks. Then work through the{' '}
              <Link href="/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">GoHighLevel migration checklist</Link> to make sure nothing gets missed regardless of platform.
            </p>

            {/* Section 7: FAQ */}
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
              Not sure which platform you're migrating from, or how hard it will be?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link> for a realistic timeline and fixed-fee quote.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ClickFunnels to GoHighLevel Migration →</Link>
                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration →</Link>
                <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel Migration →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline: How Long Does It Take? →</Link>
                <Link href="/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">The Complete GoHighLevel Migration Checklist →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to find out exactly what your migration involves?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up has migrated from all 8 of these platforms. Free 30-minute migration assessment. We review your current platform and give you a realistic timeline and fixed-fee quote.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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