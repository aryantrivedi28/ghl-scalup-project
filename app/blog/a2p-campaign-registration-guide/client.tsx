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
  CheckCircle,
  Lightbulb,
  FileText,
  MessageCircle as MessageCircleIcon,
  Rocket,
  Target,
  HeartHandshake,
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
  TrendingDown
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2PCampaignRegistrationGuideClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'what-is-campaign',
      'brand-vs-campaign',
      'registration-fields',
      'sample-messages',
      'opt-in-consent',
      'after-review',
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
      q: "Do I manually submit my A2P campaign in GoHighLevel?",
      a: "No. Once your brand registration is approved, GoHighLevel automatically submits the associated campaign for carrier review. You do not need to take any additional action to trigger the campaign submission. What you control is the campaign information you entered during the Trust Center registration process that data is what gets reviewed. This applies to both Standard Brand and Sole Proprietor registration flows. Campaign review typically takes 3 to 7 business days after brand approval."
    },
    {
      q: "What use case should I select for appointment reminders in GoHighLevel?",
      a: "Select the Appointments and Reminders use case if your primary message type is confirming and reminding contacts about scheduled appointments. If your messages are purely appointment-related, this is the most accurate and specific use case. If you also send promotional messages to the same contacts, you would need to register a separate campaign for the marketing use case. You may want to verify the current use case options in GHL's Trust Center as carrier guidelines can be updated."
    },
    {
      q: "What must be included in A2P sample messages?",
      a: "Every sample message submitted for A2P campaign registration must include four elements, confirmed from GHL's official campaign registration guide: (1) the contact's name or a placeholder such as [First Name]; (2) a staff member's name or a business contact reference; (3) your business name; (4) opt-out language 'Reply STOP to unsubscribe' or equivalent. Sample messages must accurately reflect the content you will actually send. Do not write sample messages that promise content you do not plan to send."
    },
    {
      q: "Can I require SMS consent to submit a web form for A2P registration?",
      a: "No. Confirmed from GHL's official support portal: SMS consent must always be optional, even when a phone number field is required. You cannot make form submission conditional on the contact checking the SMS consent box. The checkbox must remain unchecked by default and the user must actively select it. Additionally, the SMS opt-in checkbox must be separate from the Privacy Policy and Terms of Service consent checkbox."
    },
    {
      q: "What must my Privacy Policy include for A2P campaign registration?",
      a: "Your Privacy Policy must explicitly state that no mobile information will be shared with third parties or affiliates for marketing or promotional purposes. This is confirmed from GHL's official A2P compliance guide. Information sharing with subcontractors in support services such as customer service is permitted. The Privacy Policy must be publicly accessible without login, must be linked clearly in the footer of every form used for opt-in, and must not be obscured by pop-ups or other design elements."
    },
    {
      q: "Can I register more than one A2P campaign in GoHighLevel?",
      a: "Yes. If your business sends different types of messages for example, appointment reminders and promotional marketing messages you should register separate campaigns for each use case. Each campaign requires its own description, sample messages, and opt-in documentation. You cannot use one campaign for multiple meaningfully different message types. You may want to verify the current guidance on multiple campaign registration in GHL's Trust Center, as policies can be updated."
    },
    {
      q: "How long does A2P campaign registration take in GoHighLevel?",
      a: "Campaign review typically takes 3 to 7 business days after your brand is approved. Once both brand and campaign are approved, it may take up to 3 additional business days for all US carriers to receive the approval information. During this period you may see some message failures with an error indicating no A2P approval is found this is normal and resolves as carrier records propagate. If it persists beyond 4 business days after approval, contact GHL support."
    },
    {
      q: "What happens if my A2P campaign is rejected after I submit corrections?",
      a: "If your campaign is rejected after resubmission, carriers may surface additional issues in the second review that were not flagged in the first. Treat each rejection cycle as a new review rather than a repetition of the same problem. Check the 'View required fixes' link in your GHL Trust Center for the specific new rejection reasons. If you believe the rejection is incorrect and your submission is fully compliant, you can contact GHL support to request a review. Editing and resubmitting does not incur an additional $15.75 vetting fee. Deleting and recreating the campaign does."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-campaign', title: '1. What is campaign registration and why is it required?' },
    { id: 'brand-vs-campaign', title: '2. What is the difference between a brand and a campaign?' },
    { id: 'registration-fields', title: '3. How to complete the campaign registration fields' },
    { id: 'sample-messages', title: '4. How to write compliant sample messages' },
    { id: 'opt-in-consent', title: '5. Opt-in consent the rules that cause the most rejections' },
    { id: 'after-review', title: '6. What happens after campaign review?' },
    { id: 'common-mistakes', title: '7. The most common campaign registration mistakes' },
    { id: 'faq', title: '8. Frequently asked questions' }
  ];

  const brandVsCampaign = [
    { aspect: 'What it establishes', brand: 'Who is sending your business identity', campaign: 'What you are sending your messaging use case' },
    { aspect: 'Information submitted', brand: 'Business name, EIN, address, website, industry', campaign: 'Campaign description, use case, sample messages, opt-in method, opt-in language' },
    { aspect: 'Required before', brand: 'Campaign registration', campaign: 'Sending any A2P SMS' },
    { aspect: 'Review timeline', brand: '3 to 7 business days', campaign: '3 to 7 business days after brand approval' },
    { aspect: 'Submission method', brand: 'You enter data; GHL submits to TCR', campaign: 'You enter data during brand registration; GHL auto-submits campaign once brand is approved' },
    { aspect: 'Can you have multiple?', brand: 'One per legal business entity (EIN can register up to 10 brands)', campaign: 'Yes one campaign per use case type. Separate use cases require separate campaigns.' }
  ];

  const useCases = [
    { useCase: 'Customer Care', covers: 'Ongoing customer support, service follow-up, account notifications', bestFor: 'Service businesses managing existing clients', avoid: 'Do not use for lead generation or new prospect outreach' },
    { useCase: 'Marketing', covers: 'Promotional messages, offers, new product announcements', bestFor: 'Businesses running offer-based SMS campaigns to opted-in lists', avoid: 'Do not use if your messages are purely transactional' },
    { useCase: 'Mixed', covers: 'Combination of marketing and transactional in the same campaign', bestFor: 'Businesses whose SMS flow includes both reminders and promotional content', avoid: 'Use sparingly mixed campaigns face more scrutiny during review' },
    { useCase: 'Appointments and Reminders', covers: 'Appointment confirmations, reminders, scheduling', bestFor: 'HVAC, dental, medical, coaching, any appointment-based business', avoid: 'Do not use for marketing offers alongside reminders register separately' },
    { useCase: 'Two-Factor Authentication / OTP', covers: 'Security codes, login verification, one-time passwords', bestFor: 'SaaS, fintech, any platform verifying user identity via SMS', avoid: 'Do not mix OTP with marketing content in the same campaign' },
    { useCase: 'Notifications', covers: 'Transactional alerts, order updates, account activity', bestFor: 'Ecommerce, software platforms, delivery services', avoid: 'Do not use for promotional content' },
  ];

  const optInMethods = [
    { method: 'Website Form', description: 'Contact submits a web form with a phone number field and an SMS consent checkbox', urlRequirement: 'Direct URL to the specific form page not just the homepage. Must be publicly accessible without login.' },
    { method: 'Paper Form', description: 'Physical form signed in person', urlRequirement: 'Photograph or scan of the form hosted at a publicly accessible URL' },
    { method: 'Facebook Lead Form', description: 'Lead ad with phone number collection and consent language', urlRequirement: 'URL to the Facebook Lead Ad or a screenshot hosted at a public URL' },
    { method: 'QR Code', description: 'Printed QR code that leads to an opt-in form', urlRequirement: 'URL the QR code links to' },
    { method: 'Kiosk', description: 'In-person digital device where contacts opt in', urlRequirement: 'URL to the kiosk form or a screenshot at a public URL' },
    { method: 'Verbal', description: 'Verbal confirmation of consent at time of contact', urlRequirement: 'Written policy document hosted at a public URL describing the verbal consent process' }
  ];

  const mistakes = [
    { mistake: 'Use case does not match business website', what: 'Carrier reviewers check the website. A dental practice registering under "notifications" with no relevant content on their site gets rejected.', avoid: 'Verify your website clearly reflects the business type and use case before submitting. The campaign description must be consistent with what a reviewer would see on your website.' },
    { mistake: 'Vague campaign description', what: 'Descriptions that say "we send marketing messages to customers" without specifying who receives them or why are rejected for insufficient detail.', avoid: 'Answer all three questions explicitly: who is the sender, who are the recipients, and why are the messages being sent. Include your business name.' },
    { mistake: 'Sample messages missing required elements', what: 'Missing opt-out language, missing business name, or missing contact name placeholder causes rejection.', avoid: 'Include all four required elements in every sample message: contact name or placeholder, staff name or business contact reference, business name, and "Reply STOP to unsubscribe."' },
    { mistake: 'Pre-selected consent checkbox', what: 'A consent checkbox that is checked by default fails carrier review.', avoid: 'Never set a checkbox to checked by default. The user must take affirmative action to select it.' },
    { mistake: 'Privacy Policy missing SMS data clause', what: 'If your Privacy Policy does not state that mobile data will not be shared with third parties for marketing, the campaign is likely to be rejected.', avoid: 'Add an explicit SMS data statement to your Privacy Policy before submitting. Verify it is live at the URL you provide.' },
    { mistake: 'Opt-in URL requires login to access', what: 'Carriers cannot review a form behind a login or paywall.', avoid: 'Use a publicly accessible URL. If your form is behind a login, create a public landing page with the form visible for the review period.' },
    { mistake: 'Campaign description matches the GHL example verbatim', what: 'GHL explicitly states that copying their example descriptions may cause rejection.', avoid: 'Write a description specific to your actual business, recipients, and message content.' }
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
          <span className="text-[#1A2236] font-medium">A2P Campaign Registration Guide</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Campaign Registration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Campaign Registration in GoHighLevel:<br />
            <span className="text-[#F8D000]">Step-by-Step Guide (2026)</span>
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
            Once your A2P brand is approved in GoHighLevel, campaign registration is the next required step before you can send any automated SMS to US recipients. Campaign registration tells carriers what type of messages you will send, who receives them, and how contacts opted in. Getting the details right on the first attempt saves the 3 to 7 business day review cycle. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled A2P campaign registration across hundreds of client accounts. This guide covers every required field, the rules around sample messages and consent, and the most common mistakes that cause rejection.
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
                5+ years GHL experience · 200+ A2P registrations completed globally. All technical details verified as of July 2026.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Important: Campaign Auto-Submission</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                You do not manually submit the campaign in GoHighLevel. Once your brand registration is approved, GHL automatically submits the associated campaign for review on your behalf.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                This applies to both Standard Brand and Sole Proprietor registration flows. What you control is the campaign information you entered during the registration process that data is what gets submitted. Campaign review by carriers typically takes 3 to 7 business days after brand approval.
              </p>

              {/* CTA 1 - Inside BLUF Box */}
              <div className="mt-4 pt-4 border-t border-[#DDE1E9]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0E9BF0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0C8AD8] transition-all hover:shadow-lg hover:scale-105 text-sm"
                >
                  <Target className="w-4 h-4" />
                  Get A2P Registration Help
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

            {/* Section 1: What Is Campaign */}
            <h2 id="what-is-campaign" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is Campaign Registration and Why Is It Required?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A campaign in A2P 10DLC terminology represents a specific messaging use case the type of messages your business sends and the context in which contacts receive them. While brand registration establishes who is sending (your business identity), campaign registration establishes what you are sending and why.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              US carriers require this information to evaluate whether your messages are legitimate, whether your opt-in process is compliant, and whether your content matches the use case you claim. Campaigns that pass review receive an approved status and are granted a message throughput level based on your brand's trust score.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the foundational explanation of the full A2P system: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For brand registration, which must be completed and approved before campaign review begins: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
            </p>

            {/* Section 2: Brand vs Campaign */}
            <h2 id="brand-vs-campaign" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Is the Difference Between a Brand and a Campaign in A2P Registration?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Aspect</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Brand Registration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Campaign Registration</th>
                  </tr>
                </thead>
                <tbody>
                  {brandVsCampaign.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.brand}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.campaign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WHEN DO YOU NEED MULTIPLE CAMPAIGNS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If your business sends meaningfully different types of messages, you may need to register more than one campaign. Example: a business sending both appointment reminders (transactional) and promotional offers (marketing) should register separate campaigns for each use case. Each campaign requires its own description, sample messages, and opt-in documentation. You may want to verify the current guidance in GHL's Trust Center for your specific situation, as use case policies can be updated by carriers.
              </p>
            </div>

            {/* Section 3: Registration Fields */}
            <h2 id="registration-fields" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Complete the Campaign Registration Fields
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Campaign registration fields are completed during the same Trust Center session as brand registration. Once you submit brand details, you are taken to the campaign details page. Navigate to Settings Phone Numbers Trust Center in your GHL sub-account. Verify the current navigation path in your own account as the interface may update.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Field 1: Messaging Use Case</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Select the use case that most accurately describes the primary purpose of your SMS campaign. This is one of the most critical fields in the entire registration process carriers approve or reject campaigns based on whether your messaging content, opt-in flow, and stated intent match the use case requirements.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Use case</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it covers</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best for</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Common mismatch to avoid</th>
                  </tr>
                </thead>
                <tbody>
                  {useCases.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.useCase}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.covers}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.avoid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE RULE THAT CAUSES MOST USE CASE REJECTIONS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The campaign description must match your business niche. Carriers review whether your website supports the stated use case. A pizza restaurant registering under an 'appointment reminder' use case when their website shows no booking or scheduling functionality will be rejected. Your website, your business type, and your campaign use case must be consistent with each other. Verified from GHL's official A2P approval guide.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Field 2: Campaign Use Case Description</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This field is the most important piece of written content in your entire A2P registration. It must answer three specific questions:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Who is the sender?</strong> Your full business name, including any DBA name if applicable. If you are operating under a DBA name, include the phrase 'We are doing business as [DBA Name]' in this field.</li>
              <li><strong className="text-[#1A2236]">Who receives the messages?</strong> Describe who your recipients are and how they came into your contact database. Example: 'customers who booked an appointment through our website and opted in to receive SMS notifications.'</li>
              <li><strong className="text-[#1A2236]">Why are messages being sent?</strong> Explain the specific purpose and content of the messages. Example: 'appointment confirmation messages and day-of reminders to reduce no-shows.'</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">EXAMPLE USE CASE DESCRIPTION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                'This campaign sends appointment confirmation and reminder messages to customers of [Business Name] who have booked a service appointment through our website at [website URL] and provided explicit consent to receive SMS notifications during the booking process. Messages include appointment details, confirmation links, and reminder alerts. Business name and opt-out instructions are included in every message. Message frequency varies based on upcoming appointments.'
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">IMPORTANT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                GHL's own guidance states that examples are for reference only copying them verbatim may cause rejection. Write a description specific to your actual business and messaging scenario. You may want to verify this warning is still current in GHL's Trust Center before submitting.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Field 3: Sample Messages</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sample messages show carriers the exact type of content you plan to send. They are reviewed against your use case description and your opt-in flow to verify consistency.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">CONFIRMED REQUIRED ELEMENTS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Every sample message must include all four of these elements confirmed from GHL's official campaign registration guide: (1) The contact's name or a placeholder for it (e.g., [First Name]). (2) A staff member's name or business contact reference. (3) Your business name. (4) Opt-out language: 'Reply STOP to unsubscribe' or equivalent.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              GHL's registration form includes two sample message fields:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Sample Message 1:</strong> For promotional or marketing content.</li>
              <li><strong className="text-[#1A2236]">Sample Message 2:</strong> For transactional or informational content.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">SAMPLE MESSAGE EXAMPLES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                <strong>Transactional:</strong> 'Hi [First Name], this is Sarah from Peak HVAC. Your service appointment is confirmed for tomorrow at 2pm. Reply STOP to unsubscribe or HELP for help.'
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>Marketing:</strong> 'Hi [First Name], Peak HVAC here. Our spring AC tune-up special ends Friday book online at [link] and save $30. Reply STOP to opt out.'
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">CRITICAL</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Your sample messages must reflect the content you will actually send. Do not write sample messages that promise content you do not send. Carriers compare sample messages against your actual traffic after approval.
              </p>
            </div>

            {/* Section 4: Sample Messages */}
            <h2 id="sample-messages" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Selecting Your Opt-In Method
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You must document how contacts give consent to receive SMS from your business. GHL's Trust Center asks you to select one or more opt-in methods and provide a publicly accessible URL where the opt-in can be reviewed.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Opt-in method</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Description</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">URL requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {optInMethods.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.method}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.description}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.urlRequirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5: Opt-In Consent */}
            <h2 id="opt-in-consent" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Opt-in Consent The Rules That Cause the Most Rejections
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These rules are confirmed from GHL's official support portal and the A2P approval best practices guide. Apply all of them before submitting.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Checkboxes cannot be pre-selected.</strong> The user must actively check the consent box. A box that is checked by default at page load is non-compliant and causes campaign rejection.</li>
              <li><strong className="text-[#1A2236]">SMS consent must be optional, not required for form submission.</strong> If a contact can only submit your form by also consenting to SMS, that is forced consent and is not compliant. If phone number is a required field, the SMS consent checkbox must still be optional.</li>
              <li><strong className="text-[#1A2236]">Marketing and non-marketing consent must be separated.</strong> If your campaign includes both promotional and transactional messages, use separate checkboxes for each type. A single combined checkbox is insufficient.</li>
              <li><strong className="text-[#1A2236]">Opt-in consent and Privacy Policy/Terms of Service must be separate checkboxes.</strong> Do not combine SMS opt-in language with your general Privacy Policy acceptance into one checkbox.</li>
              <li><strong className="text-[#1A2236]">Opt-in must be collected per campaign and is not transferable.</strong> Consent obtained for one type of messaging does not extend to another type. If a contact opted in for appointment reminders, you cannot use that consent to send promotional offers without separate explicit consent.</li>
              <li><strong className="text-[#1A2236]">If using Chat Widget as your opt-in method:</strong> You must remove consent checkboxes from ALL other forms on your website. Having consent checkboxes on other forms while using Chat Widget as the designated opt-in method may result in campaign rejection confirmed from GHL's Pre-Built A2P Campaign guide.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For copy-paste compliant consent language that meets these requirements: <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Privacy Policy and Terms of Service Requirements</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your Privacy Policy must include a specific statement about SMS data. Confirmed from GHL's official support portal: your Privacy Policy must state that no mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors in support services such as customer service is permitted.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Privacy Policy must be publicly accessible:</strong> The link must open without requiring a login. Use a direct link to the Privacy Policy page not the homepage.</li>
              <li><strong className="text-[#1A2236]">Terms of Service must be separately linked:</strong> A combined Privacy Policy and Terms of Service page is acceptable as long as both are clearly present. Ensure the links are visible in the footer of every form used for opt-in.</li>
              <li><strong className="text-[#1A2236]">No language about data sharing with affiliates:</strong> If your Privacy Policy mentions sharing user data with affiliates or third parties for any marketing purpose, this will likely cause rejection. Review and update your Privacy Policy before submitting.</li>
              <li><strong className="text-[#1A2236]">Ensure links are not obscured:</strong> Pop-ups, overlays, or design elements that hide or cover the Privacy Policy and Terms of Service links will cause rejection.</li>
            </ul>

            {/* Section 6: After Review */}
            <h2 id="after-review" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Happens After Campaign Review?
            </h2>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#25C97D]">Approved:</strong> Your campaign is assigned an approved status. Phone numbers associated with this brand are cleared for A2P messaging under the registered use case. It can take up to 3 business days for all US carriers to receive the updated approval information. During this period you may see some message failures with an error indicating no A2P approval is found. This is normal and resolves as carrier records propagate.</li>
              <li><strong className="text-[#DC3545]">Rejected:</strong> Your campaign dashboard in GHL shows a 'View required fixes' link next to each rejection reason. This was updated in March 2026 and now provides four structured fields per rejection: the error code, the rejection category, what it means, and the specific correction needed. For the complete rejection fix guide: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P campaign rejected fix guide →</Link></li>
              <li><strong className="text-[#1A2236]">Edit and resubmit:</strong> If rejected, edit the existing campaign with all required corrections and resubmit. No additional vetting fee applies when you edit and resubmit. A new $15.75 fee applies if you delete the campaign and create a new one. Do not delete.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full breakdown of registration fees, monthly campaign fees, and carrier per-message charges: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
            </p>

            {/* CTA 2 - After Section 6 */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🚀 Need your A2P campaign registration handled correctly the first time?</p>
              <p className="text-sm text-white/80 mb-4">GHL Scale Up handles A2P registration for agencies and their clients — campaign description, use case selection, sample messages, opt-in documentation, and full Trust Center walkthrough managed end to end.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 7: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. The Most Common Campaign Registration Mistakes
            </h2>

            <div className="space-y-4 mb-6">
              {mistakes.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#DC3545] mb-2">{item.mistake}</h3>
                  <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-3 mb-3">
                    <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">What happens:</strong> {item.what}</p>
                  </div>
                  <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-3">
                    <p className="text-sm text-[#5C6880]"><strong className="text-[#25C97D]">How to avoid it:</strong> {item.avoid}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM OUR REGISTRATION EXPERIENCE</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                The campaign registrations that pass on the first attempt share one characteristic: every field is internally consistent. The business website, the campaign description, the use case selection, the sample messages, and the opt-in URL all describe the same business doing the same thing for the same audience.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See how our clients use GHL SMS automations after A2P approval: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To have your A2P registration handled by our team: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Once your campaign is approved and messaging is live, the first automation to build: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
            </p>

            {/* Section 8: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              8. Frequently Asked Questions
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
                <strong className="text-white">Still have questions about A2P campaign registration?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our A2P specialists directly. We've completed 200+ A2P registrations and fixed every issue in this guide.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircleIcon className="w-4 h-4" />
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
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected: What It Means and How to Fix It →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need your A2P campaign registration handled correctly the first time?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration for agencies and their clients. Campaign description, use case selection, sample messages, opt-in documentation, and full Trust Center walkthrough managed end to end.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations completed globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                All steps and rules in this guide are verified against GoHighLevel's official support portal as of July 2026. Navigation paths, fees, and carrier policies may change always verify in GHL's Trust Center before submitting. This is not official GoHighLevel documentation.
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