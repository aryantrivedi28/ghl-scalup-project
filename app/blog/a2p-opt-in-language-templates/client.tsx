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
  Star,
  AlertTriangle,
  AlertOctagon,
  Lightbulb,
  CheckCircle,
  ShieldCheck,
  Rocket,
  Target,
  HeartHandshake,
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
  CheckCircle as CheckCircleIcon,
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
  Sparkles,
  GraduationCap,
  Clock,
  Shield,
  Users,
  Calendar,
  Mail,
  Tag,
  GitMerge,
  DollarSign,
  TrendingUp,
  XCircle,
  FileText,
  Server,
  CreditCard,
  Smartphone,
  Layout,
  Mailbox,
  Headphones,
  FileQuestion,
  HelpCircle,
  Boxes,
  Combine,
  Link2,
  Webhook,
  RefreshCw,
  ListChecks,
  ClipboardList,
  Printer,
  Video,
  Ticket,
  TrendingDown,
  Zap
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2POptInLanguageTemplatesClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const sections = [
      'why-opt-in',
      'rules',
      'marketing-checkbox',
      'nonmarketing-checkbox',
      'privacy-policy',
      'form-footer',
      'chat-widget',
      'double-opt-in',
      'checklist',
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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const faqs = [
    {
      q: "What opt-in language is required for A2P registration in GoHighLevel?",
      a: "According to GHL's official documentation (February 2026), the marketing consent checkbox must include language such as: 'I consent to receive marketing text messages, about special offers, discounts, and service updates, from [BUSINESS NAME] at the phone number provided.' A separate checkbox is required for non-marketing messages such as appointment reminders and account notifications. Both checkboxes must be unchecked by default, and neither can be required for form submission. Verify this language against GHL's current Trust Center documentation before submitting, as requirements can be updated by carriers."
    },
    {
      q: "Do I need two separate consent checkboxes for A2P compliance in GoHighLevel?",
      a: "Yes. GHL's official documentation states that consent checkboxes must be distinct for marketing messages versus non-marketing messages, so subscribers can opt into one, both, or neither. A single combined checkbox is not compliant. The marketing checkbox covers promotional messages, offers, and discounts. A separate non-marketing checkbox covers transactional messages such as appointment reminders, booking confirmations, and account notifications. Both must be unchecked by default and optional for form submission."
    },
    {
      q: "Can I pre-select the consent checkbox on my GHL form?",
      a: "No. GHL's official documentation states that consent checkboxes cannot be pre-selected by default. The user must manually select the checkboxes they want to agree to. A checkbox that is pre-selected at page load is non-compliant and is likely to cause campaign rejection during A2P review. This rule applies to both the marketing and non-marketing consent checkboxes."
    },
    {
      q: "What Privacy Policy language is required for A2P compliance?",
      a: "GHL's official campaign registration guide states your Privacy Policy must include this paragraph: 'No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.' Add this clause to your Privacy Policy before submitting A2P campaign registration. Verify it is still current in GHL's Trust Center documentation before publishing."
    },
    {
      q: "What happens if my opt-in form is not publicly accessible?",
      a: "Carriers review the opt-in URL you provide during A2P campaign registration. If the form is behind a login or not yet published, GHL's documentation states to host a screenshot of the opt-in form on a publicly accessible platform such as OneDrive, Google Drive, or GHL's sub-account media library and provide that image URL in the registration where it asks 'How do end-users consent to receive messages?' along with your website URL. The screenshot must show the complete opt-in form including consent checkboxes, Privacy Policy and Terms of Service links."
    },
    {
      q: "Do I need double opt-in for A2P compliance in GoHighLevel?",
      a: "Double opt-in (DOI) is not a carrier requirement for A2P registration. It is an optional additional practice where contacts must confirm consent a second time typically by replying YES to an initial SMS before receiving messages. GHL's documentation describes it as a compliance practice in A2P 10DLC messaging but does not state it is mandatory. Consider DOI if you want to build a stronger consent documentation record, particularly for high-volume marketing campaigns. It is generally not necessary for appointment reminder or customer care campaigns."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-opt-in', title: '1. Why does opt-in language matter for A2P registration?' },
    { id: 'rules', title: '2. What are the confirmed rules for A2P consent checkboxes?' },
    { id: 'marketing-checkbox', title: '3. Copy-paste checkbox language: Marketing messages' },
    { id: 'nonmarketing-checkbox', title: '4. Copy-paste checkbox language: Non-Marketing messages' },
    { id: 'privacy-policy', title: '5. Required Privacy Policy language for A2P compliance' },
    { id: 'form-footer', title: '6. Required form footer elements' },
    { id: 'chat-widget', title: '7. Special rules for Chat Widget opt-in' },
    { id: 'double-opt-in', title: '8. Double opt-in: what it is and when to use it' },
    { id: 'checklist', title: '9. Complete compliant form checklist' },
    { id: 'faq', title: '10. Frequently asked questions' }
  ];

  const rules = [
    { rule: 'Checkboxes cannot be pre-selected', meaning: 'The user must manually check the box. Never set a checkbox to "checked" by default at page load.', source: 'GHL official: "How to get your phone number A2P approved in 2026" (Feb 2026)' },
    { rule: 'Checking the box cannot be required to submit the form', meaning: 'Even if phone number is a required field, the SMS consent checkbox must remain optional. Form submission cannot depend on marketing consent.', source: 'GHL official: "A2P 10DLC Campaign Approval Best Practices" (May 2026)' },
    { rule: 'Marketing and Non-Marketing consent must be separated', meaning: 'Use two separate checkboxes one for marketing messages (promotions, offers), one for non-marketing messages (reminders, notifications). Users must be able to opt into one, both, or neither.', source: 'GHL official: "How to get your phone number A2P approved in 2026" (Feb 2026)' },
    { rule: 'Consent does not transfer between message types', meaning: 'Consent given for appointment reminders does not cover promotional messages. Separate consent is required for each type.', source: 'GHL official: "A2P 10DLC Campaign Approval Best Practices" (May 2026)' },
    { rule: 'Privacy Policy and Terms and Conditions links required in footer', meaning: 'Both links must be visible in the footer of every opt-in form. They must be clickable and publicly accessible without login.', source: 'GHL official: "A2P Campaign Registration: Step by Step Guide and FAQs"' }
  ];

  const checklist = [
    { item: 'Two separate checkboxes present one marketing, one non-marketing', source: 'GHL official (Feb 2026)' },
    { item: 'Neither checkbox is pre-selected by default', source: 'GHL official (Feb 2026 + May 2026)' },
    { item: 'Neither checkbox is required to submit the form', source: 'GHL official (May 2026)' },
    { item: 'Marketing checkbox uses language consistent with GHL\'s guidance (see Section 3)', source: 'GHL official (Feb 2026)' },
    { item: 'Non-marketing checkbox describes the actual message types being sent', source: 'Best practice consistent with GHL requirements' },
    { item: 'Privacy Policy link in footer publicly accessible, no login required', source: 'GHL official' },
    { item: 'Terms of Service link in footer publicly accessible, no login required', source: 'GHL official' },
    { item: 'Privacy Policy contains the verbatim no-mobile-data-sharing clause (Section 5)', source: 'GHL official campaign registration guide' },
    { item: 'Form page is publicly accessible without login or a hosted screenshot URL is ready', source: 'GHL official (May 2026)' },
    { item: 'If using Chat Widget: all other form consent checkboxes removed from website', source: 'GHL official (May 2026)' },
    { item: 'Opt-in URL provided in the registration form leads directly to the form not the homepage', source: 'GHL official best practices' },
    { item: 'Language and message type in form matches the campaign use case selected', source: 'GHL official best practices' }
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
          <span className="text-[#1A2236] font-medium">A2P Opt-In Language Templates</span>
        </div>
      </nav>

      {/* Hero Section - WIDE (KEPT AS IS) */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">A2P 10DLC</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Opt-In Templates</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Compliance</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Opt-In Language for GoHighLevel:<br />
            <span className="text-[#F8D000]">Copy-Paste Templates and Examples (2026)</span>
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

          {/* Intro Paragraph - NO max-w constraint */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
            The exact language you use on your opt-in forms is one of the most common causes of A2P campaign rejection in GoHighLevel. Vague consent wording, missing checkboxes, pre-selected boxes, or a Privacy Policy that does not include the required SMS data clause any of these can result in carrier rejection. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has managed A2P registrations across hundreds of client accounts. This guide provides compliant copy-paste language for every required form element, sourced directly from GHL's official support portal documentation.
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
                5+ years GHL experience · 200+ A2P registrations handled globally. All technical details verified as of July 2026.
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
                <AlertOctagon className="w-5 h-5 text-[#DC3545]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC3545]">Legal Disclaimer Read Before Using These Templates</span>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                These templates are based on GHL's official documentation as of July 2026. They are not legal advice. Carrier requirements and compliance standards can change. Before submitting your A2P campaign registration, verify that this language still aligns with GHL's current Trust Center guidance and consult a qualified attorney if you have questions about compliance in your specific jurisdiction or industry. GHL Scale Up is not responsible for the outcome of any A2P registration submission.
              </p>

              {/* CTA Button inside BLUF */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get A2P Compliance Help
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
                <strong className="text-white">Not sure if your opt-in forms are compliant?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Get a free A2P form audit. We'll review your opt-in language, checkboxes, and Privacy Policy to ensure they meet carrier requirements.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Why Opt-In */}
            <h2 id="why-opt-in" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Does Opt-In Language Matter for A2P Registration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              During A2P campaign registration, you must document how your contacts consent to receive SMS messages. Carriers review your opt-in flow they look at your web form, your consent checkbox language, your Privacy Policy, and your Terms of Service to verify that your process is compliant before approving your campaign.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A campaign that passes brand review can still be rejected at the campaign stage if the opt-in documentation does not meet carrier standards. The most common issues are: missing or vague consent language, pre-selected checkboxes, marketing and non-marketing consent not separated, and a Privacy Policy that does not include the required SMS data clause.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For full context on the campaign registration process: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For why the A2P system exists: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>

            {/* Section 2: Rules */}
            <h2 id="rules" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Are the Confirmed Rules for A2P Consent Checkboxes?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The following rules are confirmed from GHL's official support portal documentation. Verify against GHL's current Trust Center guidance before submitting, as requirements can be updated.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Rule</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {rules.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.rule}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 3: Marketing Checkbox */}
            <h2 id="marketing-checkbox" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. Copy-Paste Checkbox Language: Marketing Messages
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The following marketing consent checkbox language is sourced directly from GHL's official "How to get your phone number A2P approved in 2026" article (February 2026). GHL's documentation states to use this exact language or similar. Replace <strong className="text-[#1A2236]">[BUSINESS NAME]</strong> with your actual business name before using.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="text-sm font-bold text-[#0E9BF0]">MARKETING CONSENT CHECKBOX CONFIRMED FROM GHL OFFICIAL DOCS</span>
                </div>
                <button
                  onClick={() => copyToClipboard(
                    'I consent to receive marketing text messages, about special offers, discounts, and service updates, from [BUSINESS NAME] at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance.',
                    'Marketing Checkbox'
                  )}
                  className="flex items-center gap-1 text-xs text-[#0E9BF0] hover:text-[#0B8CD8] transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  {copiedText === 'Marketing Checkbox' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed font-mono bg-white p-3 rounded-lg border border-[#DDE1E9]">
                "I consent to receive marketing text messages, about special offers, discounts, and service updates, from [BUSINESS NAME] at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance."
              </p>
              <p className="text-xs text-[#5C6880] mt-2">
                <strong>Source:</strong> GHL official article "How to get your phone number A2P approved in 2026" (February 2026) and "A2P 10DLC Campaign Approval Best Practices" (May 2026).
              </p>
            </div>

            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">What the marketing checkbox covers:</strong> Promotional messages offers, discounts, sales; New product or service announcements; Marketing campaigns and campaigns with commercial intent.</li>
            </ul>

            {/* Section 4: Non-Marketing Checkbox */}
            <h2 id="nonmarketing-checkbox" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Copy-Paste Checkbox Language: Non-Marketing Messages
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Non-marketing (transactional) messages appointment reminders, booking confirmations, account notifications, order updates require a separate checkbox from marketing messages. The following language is consistent with GHL's documented requirements. Replace <strong className="text-[#1A2236]">[BUSINESS NAME]</strong> with your actual business name.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                  <span className="text-sm font-bold text-[#25C97D]">NON-MARKETING CONSENT CHECKBOX CONSISTENT WITH GHL DOCUMENTATION</span>
                </div>
                <button
                  onClick={() => copyToClipboard(
                    'I consent to receive text messages from [BUSINESS NAME] for appointment reminders, booking confirmations, and service notifications at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance.',
                    'Non-Marketing Checkbox'
                  )}
                  className="flex items-center gap-1 text-xs text-[#25C97D] hover:text-[#1DB86E] transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  {copiedText === 'Non-Marketing Checkbox' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed font-mono bg-white p-3 rounded-lg border border-[#DDE1E9]">
                "I consent to receive text messages from [BUSINESS NAME] for appointment reminders, booking confirmations, and service notifications at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance."
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">ACCURACY NOTE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL's official documentation states you must have two separate checkboxes for Marketing vs Non-Marketing messages, and provides verbatim example language for the marketing checkbox. The non-marketing checkbox language above is consistent with GHL's documented requirements and standard carrier compliance practice but GHL's documentation did not publish a single verbatim non-marketing checkbox template in the sources retrieved. Adapt the language above to describe your actual non-marketing message types (appointment reminders, order confirmations, etc.) and verify it aligns with GHL's current guidance before submitting.
              </p>
            </div>

            {/* Section 5: Privacy Policy */}
            <h2 id="privacy-policy" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Required Privacy Policy Language for A2P Compliance
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The following Privacy Policy clause is required for A2P compliance. This exact text is quoted verbatim from GHL's official "A2P Campaign Registration: Step by Step Guide and FAQs" article. Add this to your Privacy Policy page before submitting your A2P campaign registration.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="text-sm font-bold text-[#0E9BF0]">REQUIRED PRIVACY POLICY CLAUSE VERBATIM FROM GHL OFFICIAL DOCUMENTATION</span>
                </div>
                <button
                  onClick={() => copyToClipboard(
                    'No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.',
                    'Privacy Policy'
                  )}
                  className="flex items-center gap-1 text-xs text-[#0E9BF0] hover:text-[#0B8CD8] transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  {copiedText === 'Privacy Policy' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed font-mono bg-white p-3 rounded-lg border border-[#DDE1E9]">
                "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
              </p>
              <p className="text-xs text-[#5C6880] mt-2">
                <strong>Source:</strong> Quoted verbatim from GHL's official "A2P Campaign Registration: Step by Step Guide and FAQs" article.
              </p>
            </div>

            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Your Privacy Policy must be:</strong> Publicly accessible without requiring a login; Linked clearly in the footer of every opt-in form; Not obscured by pop-ups, overlays, or other design elements covering the link; Containing the verbatim clause above in addition to your standard privacy terms. Verify these requirements in GHL's current Trust Center guidance, as they can be updated.</li>
            </ul>

            {/* Section 6: Form Footer */}
            <h2 id="form-footer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Required Elements Must Appear in the Form Footer?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every opt-in form used for A2P consent collection must include these elements in the footer. Requirements confirmed from GHL's official documentation.
            </p>

            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Privacy Policy link:</strong> Clickable, publicly accessible. Label it clearly "Privacy Policy".</li>
              <li><strong className="text-[#1A2236]">Terms and Conditions (Terms of Service) link:</strong> Clickable, publicly accessible. Label it clearly "Terms and Conditions" or "Terms of Service".</li>
              <li><strong className="text-[#1A2236]">Both links must be active before you submit:</strong> Do not submit your A2P campaign registration with placeholder or draft versions of these pages. Carriers check the links.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">Optional but Strongly Recommended</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Add this footer line below the checkboxes:
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed font-mono bg-white p-2 rounded-lg border border-[#DDE1E9] mt-2">
                "By checking the boxes above, you agree to receive text messages as described. Message and data rates may apply. Reply STOP to unsubscribe at any time. For help, reply HELP."
              </p>
              <p className="text-xs text-[#5C6880] mt-2">
                This additional footer line is consistent with standard carrier compliance practice and is widely included in compliant forms. It is not quoted verbatim from GHL's official documentation as a required element treat it as recommended best practice and verify with GHL's current Trust Center guidance.
              </p>
            </div>

            {/* Section 7: Chat Widget */}
            <h2 id="chat-widget" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. What Are the Special Rules for Chat Widget Opt-In?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you are using GHL's LeadConnector Chat Widget as your opt-in method, there is a confirmed additional requirement that differs from standard web form opt-in.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">CHAT WIDGET RULE CONFIRMED FROM GHL OFFICIAL DOCUMENTATION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>IMPORTANT NOTE:</strong> If you are selecting Chat Widget as your A2P campaign opt-in method, you MUST remove consent checkboxes from ALL other forms on your website. Having consent checkboxes on other forms while using Chat Widget as your opt-in method may result in campaign rejection. Before proceeding: (1) Remove consent checkboxes from all website forms. (2) Ensure Chat Widget is the only opt-in method being used.
              </p>
              <p className="text-xs text-[#5C6880] mt-2">
                <strong>Source:</strong> GHL official "Pre-Built A2P Campaign (Widget-First) Registration Flow" article (May 2026).
              </p>
            </div>

            {/* Section 8: Double Opt-In */}
            <h2 id="double-opt-in" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              8. Double Opt-In: What It Is and When to Use It
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Double Opt-In (DOI) is a practice where contacts must confirm their consent twice before receiving SMS. According to GHL's "A2P 10DLC Campaign Approval Best Practices" article, DOI is described as a compliance practice in A2P 10DLC messaging where users must confirm their consent twice before receiving SMS communications from a business.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">How it works:</strong> A contact submits a form and checks the consent box (first opt-in). They then receive an SMS asking them to confirm by replying YES or clicking a confirmation link (second opt-in). Only contacts who complete both steps are added to your active SMS list.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">When to consider it:</strong> DOI is not a carrier requirement for A2P registration it is an additional practice some businesses adopt to demonstrate stronger consent documentation. It is most common in high-volume marketing campaigns where demonstrating explicit consent is important for deliverability and compliance records. It is not required for appointment reminder or customer care campaigns.
            </p>
            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NOTE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                I am not certain whether carriers give preferential treatment to DOI campaigns in the approval process this is sometimes claimed in the industry but I did not find a confirmed source from GHL's official documentation making this claim explicitly. Treat DOI as a best practice for consent quality rather than a guaranteed approval advantage.
              </p>
            </div>

            {/* Section 9: Checklist */}
            <h2 id="checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              9. Complete Compliant Form Checklist
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use this checklist before submitting your opt-in form URL during A2P campaign registration. Every item is confirmed from GHL's official documentation unless noted.
            </p>

            <div className="space-y-2 mb-6">
              {checklist.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E8FAF2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#25C97D]">{idx + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#1A2236] font-medium">{item.item}</p>
                      <p className="text-xs text-[#5C6880]">Source: {item.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">IF YOUR CAMPAIGN IS REJECTED AFTER FOLLOWING THESE STEPS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Carrier review decisions can still result in rejection even with a fully compliant form. If your campaign is rejected, check the "View required fixes" link in GHL's Trust Center for the specific rejection reason.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                For the full campaign rejection fix guide: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected Fix Guide →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up can also handle your registration and any subsequent rejection troubleshooting. See results from our A2P setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To get help: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              Once registered, for the first SMS automation to build: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For building GoHighLevel SMS workflows after approval: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
            </p>

            {/* CTA 2 - Before FAQ */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">📋 Want a ready-to-use compliant form template?</p>
              <p className="text-sm text-white/80 mb-4">We can provide you with a complete opt-in form template with all required checkboxes, language, and footer links pre-configured.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <FileCheck className="w-4 h-4" />
                Get Your Form Template
                <ArrowRight className="w-4 h-4" />
              </Link>
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

            {/* CTA 3 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about A2P opt-in compliance?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our A2P compliance specialists directly. We've handled 200+ A2P registrations and fixed every issue in this guide.
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
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected: What It Means and How to Fix It →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need your A2P forms and registration set up correctly?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration end to end. Form opt-in language, Privacy Policy update, campaign registration, and rejection troubleshooting all managed for agencies and their clients.
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
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations handled globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                All template language in this guide is sourced from GoHighLevel's official support portal documentation as of July 2026 and is provided for informational purposes only. This is not legal advice. Carrier requirements and carrier-mandated language can change always verify against GHL's current Trust Center documentation before submitting. Consult a qualified attorney for compliance questions specific to your jurisdiction or industry.
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