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
  Settings,
  Zap,
  Shield,
  DollarSign,
  Users,
  Building2,
  Calendar,
  MessageCircle,
  Phone,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Star,
  AlertTriangle,
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Rocket,
  Cloud,
  Database,
  FileDown,
  Upload,
  RefreshCw,
  Clock,
  Mail,
  Tag,
  GitMerge,
  Target,
  HeartHandshake,
  Search,
  Facebook,
  AlertCircle,
  Info,
  Lightbulb,
  FileText,
  UserCheck,
  UserX,
  Compass,
  FileCheck,
  CheckCircle,
  Layers,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2,
  Download,
  BarChart3,
  PieChart,
  Workflow,
  Headphones,
  FileQuestion,
  HelpCircle,
  Boxes,
  Combine,
  Link2,
  Webhook,
  RefreshCw as RefreshIcon,
  ListChecks,
  ClipboardList,
  GraduationCap,
  Trophy
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function ActiveCampaignToGHLMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  // Handle scroll detection for active section
  useEffect(() => {
    const sections = [
      'why-migrate',
      'what-transfers',
      'migration-steps',
      'email-deliverability',
      'common-mistakes',
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
      q: "Can you migrate automations from ActiveCampaign to GoHighLevel?",
      a: "No not automatically. ActiveCampaign automations use a different trigger model and logic structure from GoHighLevel workflows. Every automation must be rebuilt manually inside GHL's workflow builder. Set the trigger to match the AC automation trigger (tag added, form submitted, deal stage changed), recreate each email or SMS action, and rebuild IF/THEN conditional logic using GHL's If/Else conditions. Complex multi-branch automations take 4–8 hours each to rebuild correctly."
    },
    {
      q: "Will my email deliverability suffer when I move from ActiveCampaign to GHL?",
      a: "There will typically be a short-term deliverability dip when switching email infrastructure. ActiveCampaign has more mature email deliverability tools than GoHighLevel. To mitigate the impact: complete DKIM, SPF, and DMARC authentication in GHL before sending anything, warm your new sending domain over 2–3 weeks by starting with 50–100 sends per day to your most engaged contacts, and clean your list to remove bounces and unengaged contacts before importing. Agencies that handle domain warmup correctly typically see deliverability stabilise within 4–6 weeks."
    },
    {
      q: "How do ActiveCampaign tags migrate to GoHighLevel?",
      a: "Tags migrate via CSV. When you export your contacts from ActiveCampaign, include the tags column in your export. During the GHL import wizard, map the tags column to GHL's tags field. GHL creates new tags automatically for any tag value it finds in the import that does not already exist in the account. Review all imported tags after import and clean up any duplicates or legacy tags that are no longer relevant."
    },
    {
      q: "How long does an ActiveCampaign to GoHighLevel migration take?",
      a: "A typical business with 5,000–20,000 contacts and 5–15 automations takes 2–3 weeks. Complex accounts with 50+ automations, lead scoring models, and deep e-commerce integrations take 4–6 weeks. The contact import itself takes minutes. The automation audit and rebuild is what drives the timeline plan approximately 4–8 hours per complex multi-branch automation."
    },
    {
      q: "Does GoHighLevel have lead scoring like ActiveCampaign?",
      a: "GoHighLevel does not have a native lead scoring module equivalent to ActiveCampaign's. You can recreate lead scoring logic using GHL custom fields and workflow conditions: set a numeric custom field called 'Lead Score', then use workflow actions to increment or decrement the value based on contact behaviour (form submitted, email opened, page visited). It requires manual configuration but replicates the core function. GHL's AI Employee features also provide qualification signals that reduce the dependence on manual scoring for many agencies."
    },
    {
      q: "Can GHL Scaleup handle our ActiveCampaign migration?",
      a: "Yes. GHL Scaleup manages complete ActiveCampaign to GoHighLevel migrations including automation audit and prioritisation, contact export and cleaning, tag mapping and custom field mapping, automation rebuild in GHL workflows, email domain DKIM/SPF configuration, domain warmup scheduling, and post-migration monitoring. We have completed 200+ GHL builds and migrations. Book a free migration assessment at ghlscaleup.com/contact."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: '1. Why Businesses Are Moving from ActiveCampaign to GoHighLevel' },
    { id: 'what-transfers', title: '2. What Transfers from ActiveCampaign and What Breaks' },
    { id: 'migration-steps', title: '3. How to Migrate from ActiveCampaign to GoHighLevel (Step-by-Step)' },
    { id: 'email-deliverability', title: '4. The Email Deliverability Question Honest Answer' },
    { id: 'common-mistakes', title: '5. Common ActiveCampaign Migration Mistakes to Avoid' },
    { id: 'faq', title: '6. Frequently Asked Questions' },
  ];

  const comparisonData = [
    { item: 'Advanced email automation with 900+ integrations', ac: '✓', ghl: 'GHL Workflow Builder powerful but less mature than AC' },
    { item: 'Strong email deliverability infrastructure', ac: '✓ (mature)', ghl: 'Requires DKIM/SPF/DMARC + 2–3 week warmup' },
    { item: 'Machine learning send-time optimisation', ac: '✓', ghl: 'Not available natively in 2026' },
    { item: 'Per-contact pricing', ac: 'Scales up fast', ghl: 'Unlimited contacts on every plan' },
    { item: 'Native SMS and MMS', ac: 'No requires Twilio integration', ghl: '✓ built-in' },
    { item: 'Native funnel/landing page builder', ac: 'No', ghl: '✓ full funnel builder' },
    { item: 'AI Voice Agent', ac: 'No', ghl: '✓ included' },
    { item: 'Booking calendar with reminders', ac: 'No', ghl: '✓ included' },
    { item: 'White-label and agency dashboard', ac: 'No', ghl: '✓ from $297/mo' },
    { item: 'Sub-account model for agencies', ac: 'No', ghl: '✓ native multi-client management' },
  ];

  const transferData = [
    { asset: 'Contacts (name, email, phone)', action: 'Transfers via CSV export + import', required: 'Export all, clean for duplicates, map fields during import' },
    { asset: 'Tags', action: 'Transfers via CSV as a column', required: 'Create matching tags in GHL before import, map during import' },
    { asset: 'Custom fields and custom data', action: 'Transfers via CSV', required: 'Create GHL custom fields first, then map during import wizard' },
    { asset: 'Lists and segments', action: 'Partial list membership via CSV', required: 'Recreate lists as GHL Smart Lists or tags after import' },
    { asset: 'Email automations and sequences', action: 'Does NOT transfer', required: 'Full automation rebuild in GHL workflow builder' },
    { asset: 'Lead scoring models', action: 'Does NOT transfer', required: 'Recreate using GHL custom fields + workflow conditions' },
    { asset: 'Conditional logic (IF/THEN)', action: 'Does NOT transfer', required: 'Rebuild using GHL If/Else conditions in workflows' },
    { asset: 'Email templates', action: 'Does not transfer directly', required: 'Copy HTML from AC, paste and rebuild in GHL email builder' },
    { asset: 'Forms', action: 'Does NOT transfer', required: 'Rebuild in GHL form builder, update all embed codes' },
    { asset: 'Deals and pipelines', action: 'Does NOT transfer', required: 'Recreate pipeline stages in GHL, manually import open deals' },
    { asset: 'Goals and conversion tracking', action: 'Does NOT transfer', required: 'Rebuild using GHL pipeline + tag triggers' },
    { asset: 'Third-party integrations (Shopify, etc.)', action: 'Does NOT transfer', required: 'Reconnect each integration in GHL Settings' },
  ];

  const mistakesList = [
    { mistake: 'Migrating all automations instead of auditing first', fix: 'Audit first. Only rebuild what is actively running and generating results. Most AC accounts have 30–40% legacy automations that can be left behind.' },
    { mistake: 'Skipping the email domain warmup', fix: 'Warm your domain over 2–3 weeks starting with 50–100 emails per day to engaged contacts. Skipping this damages sender reputation for months.' },
    { mistake: 'Rebuilding automations before validating imported data', fix: 'Always validate a sample of imported contacts first. Confirm tags, custom fields, and opt-out status are correct before activating workflows.' },
    { mistake: 'Cancelling ActiveCampaign too early', fix: 'Keep AC active until GHL workflows have been running without errors for at least two weeks and no active contacts are mid-sequence in AC.' },
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
          <span className="text-[#1A2236] font-medium">ActiveCampaign to GoHighLevel Migration 2026</span>
        </div>
      </nav>

      {/* Hero Section - WIDE (KEPT AS IS) */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">ActiveCampaign to GHL</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Email Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            ActiveCampaign to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">What Breaks and How to Fix It (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ Builds Delivered · Updated May 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            ActiveCampaign users are different from most people who migrate to GoHighLevel. 
            They have usually spent years building sophisticated email automations, complex 
            contact scoring models, and tightly segmented lists. The migration is not just 
            a data move it is an architecture change. This guide covers exactly what transfers, 
            what has to be rebuilt, and the one thing you absolutely must do before sending a 
            single email from GHL.
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
                  <div className="text-xs text-white/50">GoHighLevel Migration & Setup Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built and migrated globally. All migration steps verified against 
                GoHighLevel's official documentation as of May 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
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

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Contacts, tags, and lists migrate from ActiveCampaign to GoHighLevel via CSV export and import.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Automations do <strong className="text-[#1A2236]">not transfer</strong> every sequence, conditional trigger, and lead scoring rule 
                must be rebuilt manually as GHL workflows. There will be a short-term email deliverability dip when you switch sending infrastructure. 
                Mitigate it by warming your GHL sending domain over <strong className="text-[#0E9BF0]">2–3 weeks</strong> before sending to your full list. 
                A typical business with 5,000–20,000 contacts and 5–15 automations takes <strong className="text-[#0E9BF0]">2–3 weeks</strong> to migrate.
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get Your Migration Assessment
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
                <strong className="text-white">🚀 Ready to migrate from ActiveCampaign to GoHighLevel?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up handles the entire migration — automation audit, contact migration, domain warmup, and workflow rebuild — so you don't lose a single lead.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Why Migrate */}
            <h2 id="why-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Businesses Are Moving from ActiveCampaign to GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              ActiveCampaign is an excellent email marketing and automation platform. The migration to GoHighLevel 
              is almost never about ActiveCampaign being bad it's about <strong className="text-[#1A2236]">what ActiveCampaign does not have</strong> 
              that the business now needs: native SMS, AI Voice Agent, appointment booking, reputation management, 
              funnel building, and multi-client agency management.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What ActiveCampaign provides</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What makes businesses consider GoHighLevel</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.item} → {item.ac === '✓' ? '✓' : item.ac === '✓ (mature)' ? '✓ (mature)' : item.ac === 'Scales up fast' ? 'Per-contact pricing (scales fast)' : 'Not available'}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE HONEST TRADE-OFF</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                ActiveCampaign's email deliverability and automation depth are genuinely stronger than GHL's in 2026. 
                <strong className="text-[#1A2236]"> If email is your primary revenue channel</strong>, evaluate this migration carefully. 
                GHL wins when you need SMS, AI, voice, agency infrastructure, and want to stop paying $300–$500/month across four separate tools.
              </p>
            </div>

            {/* Section 2: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Transfers from ActiveCampaign to GoHighLevel and What Breaks?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">The rule is simple: data transfers, logic does not.</strong> Your contacts, tags, 
              and custom field values can be exported from AC and imported into GHL via CSV. Every decision, condition, trigger, 
              and scoring rule those contacts are enrolled in the logic that runs your business must be rebuilt inside GHL's 
              workflow builder from scratch.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ActiveCampaign Asset</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happens</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  {transferData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.asset}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.action}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.required}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HARDEST PART</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                ActiveCampaign automations are often deeply nested. GHL's workflow builder handles this logic well through 
                If/Else conditions, but <strong>recreating complex multi-branch automations takes 4–8 hours per sequence.</strong> 
                Audit your automations first. Only rebuild what is genuinely active and driving revenue.
              </p>
            </div>

            {/* CTA 2 - After What Transfers */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">⚠️ Not sure what will break in your migration?</p>
              <p className="text-sm text-white/80 mb-4">Let our team audit your ActiveCampaign setup and give you a complete breakdown of what transfers and what needs rebuilding.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Search className="w-4 h-4" />
                Get a Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 3: Migration Steps */}
            <h2 id="migration-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Migrate from ActiveCampaign to GoHighLevel (Step-by-Step)
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Audit every automation before touching anything</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">List every active automation with its trigger, purpose, and monthly volume. Note which are business-critical vs which are legacy campaigns. This audit typically reveals that 30–40% of AC automations can be left behind.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Export contacts, tags, and custom fields as CSV</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">In ActiveCampaign, go to Contacts → Export All. Ensure the export includes all custom fields and tag columns. Clean the CSV before import: remove hard bounces, unsubscribes, and contacts without valid email addresses.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Build your GHL infrastructure before importing</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Create every custom field (field mapping), create pipeline stages, configure email domain with DKIM/SPF/DMARC, and set up your GHL phone number with A2P 10DLC registration. These must be completed before you send any emails or SMS.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Import contacts and validate immediately</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Import your cleaned CSV into GHL via Contacts → Import. Map each column to the corresponding GHL field. After import, pull up 20–30 random contacts and verify that data imported correctly before building automations.</p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Rebuild automations as GHL workflows highest priority first</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Recreate each active AC automation as a GHL workflow, starting with highest-volume sequences. Rebuild IF/THEN logic using GHL's If/Else conditions. Test every workflow with a real contact before activating.</p>
                <p className="text-sm text-[#0E9BF0] leading-relaxed ml-9 mt-1">→ Need help with workflows? <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link></p>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <h3 className="text-base font-bold text-[#1A2236]">Run parallel for 2–3 weeks, then cut over</h3>
                </div>
                <p className="text-sm text-[#5C6880] leading-relaxed ml-9">Keep ActiveCampaign active while running GHL in parallel. Warm your GHL sending domain (see Section 4). Cancel ActiveCampaign only after GHL workflows have been running for at least two weeks with no critical errors.</p>
              </div>
            </div>

            {/* CTA 3 - After Migration Steps */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">📋 Not sure if you're missing a step in your migration?</p>
              <p className="text-sm text-white/80 mb-4">Our team provides a complete migration checklist and step-by-step guidance to ensure nothing gets missed.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <FileCheck className="w-4 h-4" />
                Get Your Checklist
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 4: Email Deliverability */}
            <h2 id="email-deliverability" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. The Email Deliverability Question Honest Answer
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the most important concern for anyone migrating from ActiveCampaign, and it deserves a straight answer. 
              <strong className="text-[#1A2236]"> ActiveCampaign has a more mature email deliverability infrastructure than GoHighLevel.</strong> 
              When you move to GHL, you are switching email sending infrastructure. There will be a short-term deliverability dip.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">How to minimise the deliverability dip</span>
              </div>
              <ul className="space-y-2 text-sm text-[#1A2236] list-disc list-inside">
                <li><strong className="text-[#1A2236]">Complete DKIM, SPF, and DMARC setup</strong> before sending a single email from GHL</li>
                <li><strong className="text-[#1A2236]">Warm your GHL sending domain over 2–3 weeks</strong> start with 50–100 emails per day to most engaged contacts</li>
                <li><strong className="text-[#1A2236]">Clean your list before importing</strong> remove hard bounces, unengaged contacts, and spam complainers</li>
                <li><strong className="text-[#1A2236]">Monitor your first 10–15 campaigns closely</strong> watch open rates, click rates, bounce rates</li>
              </ul>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-4 my-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR MIGRATION EXPERIENCE</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Agencies that complete proper DKIM/SPF setup and warm their domain correctly typically see 
                <strong className="text-white"> deliverability stabilise within 4–6 weeks</strong> at levels comparable to their AC performance. 
                Agencies that skip domain warmup and blast their full list on day one sometimes take 3–6 months to recover.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              → For our full GoHighLevel review including honest assessment of email capabilities: 
              <Link href="/blog/gohighlevel-review" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Review 2026: Honest Verdict →</Link>
            </p>

            {/* CTA 4 - After Email Deliverability */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">✉️ Worried about email deliverability during your migration?</p>
              <p className="text-sm text-white/80 mb-4">Our team handles DKIM/SPF/DMARC setup and domain warmup scheduling so you don't damage your sender reputation.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Shield className="w-4 h-4" />
                Protect Your Deliverability
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 5: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Common ActiveCampaign Migration Mistakes to Avoid
            </h2>

            <div className="space-y-4 mb-6">
              {mistakesList.map((item, idx) => (
                <div key={idx} className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.mistake}</p>
                      <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE HANDLE THIS FOR YOU</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scaleup manages complete ActiveCampaign to GoHighLevel migrations automation audit, contact export and cleaning, 
                tag mapping, field mapping, automation rebuild, email domain configuration, warmup scheduling, and parallel testing.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold hover:gap-3 transition-all">
                Book a free migration assessment at ghlscaleup.com/contact
                <ArrowRight className="w-3 h-3" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mt-3">
                → <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel migration service →</Link>
              </p>
            </div>

            {/* CTA 5 - After Common Mistakes */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🔍 Want to avoid these mistakes in your migration?</p>
              <p className="text-sm text-white/80 mb-4">Our team handles your ActiveCampaign migration from start to finish, so you don't lose leads or revenue during the transition.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Shield className="w-4 h-4" />
                Get Migration Protection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 6: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              6. Frequently Asked Questions
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

            {/* CTA 6 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about your ActiveCampaign migration?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our migration specialists directly. We've completed 200+ GHL migrations and fixed every issue in this guide.
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

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/hubspot-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from HubSpot to GoHighLevel →</Link>
                <Link href="/blog/clickfunnels-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">How to Migrate from ClickFunnels to GoHighLevel →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration Service →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Moving from ActiveCampaign to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  Do not skip the email warmup. We will make sure you don't. Automation audit, contact migration, 
                  tag mapping, domain warmup scheduling, and GHL workflow rebuild all handled. Book a free assessment.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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