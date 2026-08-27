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
  Clock,
  Mail,
  GraduationCap,
  Heart,
  Target,
  FileText,
  Compass,
  GitCompare,
  BarChart3,
  Mailbox,
  Stethoscope,
  Activity,
  CalendarDays,
  XCircle,
  Layers,
  Workflow,
  Headphones,
  FileQuestion,
  HelpCircle,
  Boxes,
  Combine,
  Settings,
  Link2,
  Webhook,
  RefreshCw,
  ListChecks,
  ClipboardList,
  Download,
  Printer,
  Video,
  Ticket,
  Trophy,
  TrendingDown,
  PieChart,
  Package,
  Wrench,
  Droplets,
  Home,
  HardHat,
  Bot,
  Brain,
  Mic,
  MessageSquare,
  PenTool,
  AlertOctagon,
  FileWarning,
  RefreshCcw,
  ShieldAlert,
  HeartHandshake,
  Search,
  Facebook,
  AlertCircle,
  Info,
  Lightbulb,
  UserCheck,
  UserX,
  FileCheck,
  CheckCircle,
  PanelTop,
  LayoutDashboard,
  LifeBuoy,
  Timer,
  Trash2
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2PCampaignRejectedFixClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'why-rejected',
      'common-rejections',
      'ineligible-codes',
      'resubmit-steps',
      'appeal-process',
      'avoid-rejection',
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
      q: "Why was my GoHighLevel A2P campaign rejected?",
      a: "GoHighLevel A2P campaigns are rejected by the carriers (T-Mobile, AT&T, Verizon) or The Campaign Registry, not by GoHighLevel itself. The most common rejection reasons are: invalid or inaccessible website URL, missing or non-compliant opt-in consent flow, sample messages that do not match the use case, a vague or mismatched campaign description, Terms and Conditions that are missing or do not mention SMS, and a mismatch between the EIN and the legal business name."
    },
    {
      q: "Can I resubmit my A2P campaign after it is rejected?",
      a: "Yes, if your campaign was rejected with a fixable code. Edit the rejected campaign to address all listed rejection reasons, then resubmit. No additional $15 vetting fee applies when you edit and resubmit an existing campaign. If you delete the rejected campaign and create a new one, a new $15 fee is charged. Do not delete. Edit and resubmit. Campaigns rejected for forbidden content categories (SHAFT: Sex, Hate, Alcohol, Firearms, Tobacco; plus Cannabis and Gambling) are not eligible for resubmission under any circumstances."
    },
    {
      q: "How long does A2P campaign resubmission take?",
      a: "The review cycle for a resubmitted campaign typically takes 3 to 7 business days. This is the same timeline as an initial submission. Do not make further edits to the campaign while it is under review. Additional changes during the review period can reset the vetting timeline. Check the status in GHL's A2P registration panel under Settings → Phone Numbers → A2P Registration."
    },
    {
      q: "What is the 'View required fixes' link in GoHighLevel A2P?",
      a: "As of March 2026, GoHighLevel added a 'View required fixes' link next to every A2P campaign rejection reason. Clicking it opens a modal that shows four fields for each rejection: the error code returned by the carriers, the rejection category (a plain-language label like 'Invalid website URL'), what it means in plain English, and the specific correction needed before resubmitting. This replaced the previous system where rejection reasons appeared as short, vague descriptions."
    },
    {
      q: "What rejection codes make an A2P campaign ineligible for resubmission?",
      a: "Campaigns rejected for forbidden messaging categories cannot be resubmitted. These include content related to: sex or adult content, hate speech, alcohol (without approved age-gating), firearms (without approved exemptions), tobacco and vaping, cannabis or marijuana (illegal federally in the US), and gambling. If your campaign is rejected under one of these categories, editing and resubmitting will not result in approval. The use case itself is not permitted on the 10DLC system."
    },
    {
      q: "How do I appeal an A2P campaign rejection in GoHighLevel?",
      a: "Contact GHL support with the subject line '10DLC Campaign Appeal for [your business name or phone number].' Include your business name, the campaign ID, the specific rejection reasons shown in your dashboard, your explanation of why you believe the rejection was incorrect, and any supporting documentation such as screenshots of your opt-in flow, Terms of Service page, or campaign description. Appeals are reviewed but are not guaranteed to succeed."
    },
    {
      q: "Does it cost extra to resubmit a rejected A2P campaign?",
      a: "No, if you edit the existing rejected campaign and resubmit it. There is no additional vetting fee for editing and resubmitting. The $15 vetting fee applies only once per campaign at initial submission. However, if you delete the rejected campaign and create a new campaign in its place, a new $15 vetting fee is charged. Always edit and resubmit the existing campaign rather than deleting and starting over."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-rejected', title: '1. Why Do A2P Campaigns Get Rejected in GoHighLevel?' },
    { id: 'common-rejections', title: '2. What Are the Most Common Rejection Reasons and How Do You Fix Each One?' },
    { id: 'ineligible-codes', title: '3. Which Rejection Codes Are NOT Eligible for Resubmission?' },
    { id: 'resubmit-steps', title: '4. How to Resubmit a Rejected A2P Campaign in GoHighLevel (5 Steps)' },
    { id: 'appeal-process', title: '5. How to Appeal a Rejected A2P Campaign' },
    { id: 'avoid-rejection', title: '6. How to Avoid A2P Campaign Rejection on the Next Submission' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const commonRejections = [
    {
      title: 'Invalid or inaccessible website URL',
      what: 'The website URL provided either does not load, returns a 404 error, requires a login to access, or does not have an SMS opt-in flow visible to the reviewer.',
      fix: 'Verify your website loads in an incognito browser. Host a publicly accessible screenshot or image of the opt-in flow at a URL any reviewer can open without logging in. Include that direct image link in the Message Flow field.'
    },
    {
      title: 'Missing or incorrect opt-in consent flow',
      what: 'Reviewers could not verify how contacts consent to receive SMS. Either the opt-in flow was not described, the consent language was unclear, or the checkbox was pre-selected (not permitted under A2P consent rules).',
      fix: 'Your opt-in must include: clear description of messages, business name, message frequency, rates disclosure, links to Terms and Privacy Policy, and an unselected checkbox. Update your form and host a screenshot at a publicly accessible URL.'
    },
    {
      title: 'Sample messages do not match the use case',
      what: 'Sample messages do not reflect what you will actually send, do not match the campaign use case, or are too vague to verify.',
      fix: 'Each sample must look like a real message, include your business name, use bracketed template fields, and include opt-out language in at least one sample. Submit at least two samples. Never submit generic placeholder text.'
    },
    {
      title: 'Vague or mismatched campaign description',
      what: 'Campaign description does not clearly explain what messages will be sent, who receives them, and why. Or it describes a use case that conflicts with the use case type selected.',
      fix: 'Write a plain-English explanation: who is sending, who receives the messages, what messages will be sent, and how often. Match the description precisely to the use case category selected.'
    },
    {
      title: 'Terms and Conditions issues',
      what: 'Your website does not have a publicly accessible Terms of Service or Privacy Policy, the Terms does not mention SMS messaging, or the links provided are broken.',
      fix: 'Your Terms of Service must be publicly accessible and explicitly mention SMS communications. Add a clear SMS messaging clause. Verify the URL loads in incognito mode.'
    },
    {
      title: 'Business name and EIN mismatch',
      what: 'The EIN you provided does not match the legal business name, or your EIN was issued recently and has not yet appeared in IRS public records.',
      fix: 'The legal business name in your A2P brand registration must match exactly what the IRS has on file. If your EIN was issued in the last 90 days, you may need to wait or submit the full EIN confirmation letter for manual verification.'
    },
    {
      title: 'CTA (Call to Action) cannot be verified',
      what: 'Reviewers could not verify the mechanism by which contacts give consent to receive messages. Often happens when opt-in occurs via paper form, verbal agreement, or a process not documented anywhere publicly accessible.',
      fix: 'Document every method through which contacts can opt in. If via paper form, scan and host at a publicly accessible URL. If on a website, link directly to the specific page. If in person, describe the process explicitly in the Message Flow field.'
    },
  ];

  const ineligibleCodes = [
    { category: 'Sex-related content (SHAFT)', resubmittable: 'No', meaning: 'Forbidden category — cannot be resubmitted under any circumstances' },
    { category: 'Hate speech content', resubmittable: 'No', meaning: 'Forbidden category — cannot be resubmitted' },
    { category: 'Alcohol-related content', resubmittable: 'No', meaning: 'Forbidden category — cannot be resubmitted without approved exemptions' },
    { category: 'Firearms-related content', resubmittable: 'No', meaning: 'Forbidden category — cannot be resubmitted without approved exemptions' },
    { category: 'Tobacco and vaping content', resubmittable: 'No', meaning: 'Forbidden category — cannot be resubmitted without approved exemptions' },
    { category: 'Cannabis-related content', resubmittable: 'No', meaning: 'Federally illegal in US — not eligible on 10DLC' },
    { category: 'Gambling content', resubmittable: 'No', meaning: 'Forbidden category — not eligible without explicit carrier approval' },
  ];

  const resubmitSteps = [
    { step: 'Find the rejection details in GHL', desc: 'Go to Settings → Phone Numbers → A2P Registration. Locate the rejected campaign. Click "View required fixes" next to each rejection reason. Read all four fields: error code, rejection category, what it means, and the correction needed. Note every rejection reason — you must fix all of them.' },
    { step: 'Fix every listed issue before touching the campaign form', desc: 'If the rejection says invalid website URL, fix the website or create the hosted screenshot URL first. If it says opt-in consent issues, update your web form first. Do not open the campaign edit form until the underlying issues are resolved.' },
    { step: 'Edit the campaign — do not delete it', desc: 'Click Edit on the rejected campaign. Do not delete. Editing and resubmitting costs nothing extra. Deleting and recreating charges a new $15 vetting fee. Make all required corrections inside the edit form.' },
    { step: 'Resubmit and wait', desc: 'After saving all corrections, resubmit the campaign for review. The vetting cycle typically takes 3 to 7 business days. Do not make further edits while it is under review — additional changes can reset the timeline. Check the status in GHL\'s A2P registration panel.' },
    { step: 'If rejected again, read the new rejection reasons carefully', desc: 'Carriers may surface additional issues on subsequent reviews. A second rejection may list different reasons from the first. Treat each rejection cycle as a new round of review, not a repetition of the same problem.' },
  ];

  const avoidRejectionList = [
    'Website check first: Open your website URL in a fresh incognito browser window. Confirm it loads. Confirm the opt-in flow is visible without logging in or clicking through multiple pages.',
    'Build the opt-in correctly: Use an unselected checkbox. Include your business name, what messages will be sent, frequency, rates disclosure, and links to Terms of Service and Privacy Policy — all on the same page as the form.',
    'Write sample messages like real messages: Not placeholder text. Include your actual business name, bracket template fields, and opt-out language in at least one sample. Submit at least two samples.',
    'Match description to use case: If you select "customer care" as the use case, your description should describe customer care messages. Do not describe marketing promotions under a customer care use case.',
    'Have a Terms of Service page live before submitting: Not a placeholder. Not "coming soon." A publicly accessible page that specifically mentions SMS communications.',
    'Brand registration first: Your brand must be approved before campaign registration. If the brand is pending or failed, campaigns submitted against it will be rejected. Complete brand registration first.',
    'Campaign registration next: Once brand is approved, follow the campaign registration steps carefully.',
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
          <span className="text-[#1A2236] font-medium">A2P Campaign Rejected Fix 2026</span>
        </div>
      </nav>

      {/* Hero Section - WIDE (KEPT AS IS) */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">A2P 10DLC</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Campaign Rejected</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">SMS Compliance</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel A2P Campaign Rejected:<br />
            <span className="text-[#F8D000]">What It Means and How to Fix It (2026)</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated June 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            Getting an A2P campaign rejection in GoHighLevel is one of the most frustrating experiences in the platform.
            You submitted the registration, waited several days, and now the status shows rejected, often with a reason
            that makes no immediate sense. <strong className="text-white"> GHL Scale Up</strong> has worked through this
            process across hundreds of client accounts. This guide explains exactly what caused the rejection, which ones
            can be fixed and resubmitted, which ones cannot, and the precise steps to resolve each one.
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
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built globally including A2P 10DLC registration and troubleshooting for
                agencies across the US, UK, Australia, and India. All technical details verified as of June 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
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
                GoHighLevel did not reject your A2P campaign. The rejection came from the carriers (T-Mobile, AT&T, Verizon) or The Campaign Registry (TCR).
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Most rejections fall into six fixable categories. Edit the campaign to fix the listed issues and resubmit.
                No additional <strong className="text-[#0E9BF0]">$15 vetting fee</strong> applies for editing and resubmitting.
                If you delete and recreate the campaign, a new $15 fee is charged. <strong className="text-[#DC3545]">Do not delete.</strong>
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get A2P Rejection Help
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
                <strong className="text-white">🚀 Got an A2P campaign rejection and need it fixed fast?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                GHL Scale Up handles A2P rejection troubleshooting for agencies and their clients. We'll diagnose the issue, fix it, and resubmit.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Why Rejected */}
            <h2 id="why-rejected" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Do A2P Campaigns Get Rejected in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P 10DLC is the US carrier system that requires every business sending automated SMS from a 10-digit long code
              to register the brand and the campaign use case. When you submit an A2P campaign registration in GoHighLevel,
              it goes to The Campaign Registry (TCR) and is then reviewed by the carriers themselves.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Three entities are involved in the review:</strong>
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The Campaign Registry (TCR):</strong> The central hub that coordinates A2P registration. Performs an initial review for completeness and basic compliance.</li>
              <li><strong className="text-[#1A2236]">The messaging partner:</strong> GHL's registered messaging intermediary, which performs its own vetting before the campaign reaches the carriers.</li>
              <li><strong className="text-[#1A2236]">The carriers:</strong> T-Mobile, AT&T, Verizon, and others. Each applies its own policies. A campaign can pass TCR review and still be rejected by a specific carrier.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WHAT THIS MEANS FOR YOU</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                You cannot contact the carriers directly. You cannot appeal to T-Mobile or AT&T from within the GHL platform.
                The path forward is to fix the specific issues the rejection identifies, resubmit your campaign through GHL,
                and let the review cycle run again.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For background on what A2P 10DLC is and why it is required:
              <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline ml-1">What Is A2P 10DLC? →</Link>
            </p>

            {/* Section 2: Common Rejections */}
            <h2 id="common-rejections" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Are the Most Common Rejection Reasons and How Do You Fix Each One?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              As of March 2026, GHL shows a 'View required fixes' link next to every rejection reason. Here are the most common
              rejection categories and the fix for each.
            </p>

            <div className="space-y-4 mb-6">
              {commonRejections.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.title}</h3>
                  <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-3 mb-3">
                    <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">What it means:</strong> {item.what}</p>
                  </div>
                  <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-3">
                    <p className="text-sm text-[#5C6880]"><strong className="text-[#25C97D]">How to fix it:</strong> {item.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed">
                → For copy-paste consent language that passes A2P review:
                <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline ml-1">A2P Opt-In Language Templates →</Link>
              </p>
            </div>

            {/* Section 3: Ineligible Codes */}
            <h2 id="ineligible-codes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Which Rejection Codes Are Not Eligible for Resubmission?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the most important distinction in the entire A2P rejection process. Some rejection codes can be fixed and resubmitted.
              Others cannot. The campaign is permanently ineligible because the content or use case itself is forbidden by carriers.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Rejection category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Resubmittable?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {ineligibleCodes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.category}</td>
                      <td className="py-3 px-3 text-[#DC3545] font-semibold">{item.resubmittable}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">DO NOT DELETE A REJECTED CAMPAIGN</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                This is the most expensive mistake in A2P troubleshooting. If your campaign was rejected with a fixable code and you delete
                the campaign to start fresh, a new $15 vetting fee is charged on the recreation. If you edit the existing rejected campaign
                and resubmit, no additional vetting fee applies. Always edit and resubmit, never delete and recreate.
              </p>
            </div>

            {/* CTA 2 - After Ineligible Codes */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">⚠️ Not sure if your rejection code is resubmittable?</p>
              <p className="text-sm text-white/80 mb-4">Let our team review your rejection and tell you exactly what to do next — including whether an appeal is possible.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Search className="w-4 h-4" />
                Get Your Rejection Reviewed
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 4: Resubmit Steps */}
            <h2 id="resubmit-steps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How to Resubmit a Rejected A2P Campaign in GoHighLevel (5 Steps)
            </h2>

            <div className="space-y-3 mb-6">
              {resubmitSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.step}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full breakdown of A2P fees including the $15 vetting charge and monthly costs:
              <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline ml-1">A2P 10DLC Fees Explained →</Link>
            </p>

            {/* CTA 3 - After Resubmit Steps */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">📋 Need a step-by-step resubmission checklist?</p>
              <p className="text-sm text-white/80 mb-4">We can provide you with a complete resubmission checklist and review your campaign before you resubmit.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <FileCheck className="w-4 h-4" />
                Get Your Resubmission Checklist
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 5: Appeal Process */}
            <h2 id="appeal-process" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How to Appeal a Rejected A2P Campaign
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you believe your campaign was rejected incorrectly, you can request an appeal through GHL support.
            </p>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">APPEAL PROCESS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Contact GHL support with the subject line: <strong className="text-white">'10DLC Campaign Appeal for [your business name or phone number]'</strong>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Include: your business name, the campaign ID, the rejection reason(s) shown in your dashboard, your explanation of why you believe
                the rejection was incorrect, and any supporting documentation (screenshots of your opt-in flow, your Terms of Service page, your campaign description).
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Honest expectation:</strong> Appeals are not always successful. The carriers make the final decision
              and their review process is not fully transparent. An appeal is appropriate when you are confident your submission is genuinely compliant
              and the rejection appears to be a reviewer error.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For building GoHighLevel SMS workflows after your A2P campaign is approved:
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            {/* CTA 4 - After Appeal Process */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🔍 Not sure if you should appeal or resubmit?</p>
              <p className="text-sm text-white/80 mb-4">Our team can review your rejection and recommend the best path forward — appeal, resubmit, or start fresh.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Compass className="w-4 h-4" />
                Get Expert Guidance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 6: Avoid Rejection */}
            <h2 id="avoid-rejection" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How to Avoid A2P Campaign Rejection on the Next Submission
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The majority of A2P rejections are preventable. The same issues cause most of them.
            </p>

            <div className="space-y-2 mb-6">
              {avoidRejectionList.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#5C6880]">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                → For the full brand registration process: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P brand registration guide →</Link>
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                → For the full campaign registration walkthrough: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P campaign registration guide →</Link>
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">IF YOU ARE BLOCKED FROM SMS AND NEED HELP NOW</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles A2P 10DLC registration for agencies and their clients: brand registration, campaign registration,
                rejection troubleshooting, and resubmission.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See the results from our client setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                If you need your A2P registration resolved quickly,
                <Link href="/contact" className="text-[#0E9BF0] hover:underline ml-1">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* CTA 5 - Before FAQ */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">✅ Want to avoid rejection on your next submission?</p>
              <p className="text-sm text-white/80 mb-4">We'll review your campaign before you submit and fix any issues that would cause rejection.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Shield className="w-4 h-4" />
                Get a Pre-Submission Review
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions
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
                <strong className="text-white">Still have questions about your A2P campaign rejection?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our A2P specialists directly. We've resolved hundreds of A2P rejections and fixed every issue in this guide.
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
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Beginner's Guide →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">A2P rejected and you need it resolved fast?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration and rejection troubleshooting. Brand registration, campaign registration,
                  rejection fixes, and resubmission — handled for agencies and their clients.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
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