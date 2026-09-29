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
  Info,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Trophy,
  Facebook,
  AlertCircle,
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
  TrendingDown,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function A2P10DLCCanadianNumbersClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'quick-answer',
      'four-things',
      'does-apply',
      'decision-table',
      'ca-to-ca',
      'ca-to-us',
      'us-to-ca',
      'what-changed',
      'a2p-vs-persona',
      'international',
      'toll-free',
      'consent',
      'trust-score-mps',
      'canadian-businesses',
      'expand-to-us',
      'agencies',
      'common-mistakes',
      'decision-framework',
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
      q: "Do Canadian numbers need A2P 10DLC registration?",
      a: "It depends on the route. Canada to US always needs A2P. Canada to Canada needs A2P only if the number was purchased on or after March 26, 2025, and even then Persona is a valid alternative. Toll-free numbers never use A2P."
    },
    {
      q: "Do I need A2P if I only send to Canadian recipients?",
      a: "Only if your Canadian 10DLC number was purchased on or after March 26, 2025, and even then you can choose Persona instead. Numbers purchased before that date do not need A2P for Canada-only traffic."
    },
    {
      q: "Can Persona replace A2P for messages to the US?",
      a: "No. HighLevel is explicit that Persona does not replace A2P registration when a Canadian number sends to US recipients."
    },
    {
      q: "Does a US number sending to Canada need A2P?",
      a: "Yes. HighLevel treats US to Canada as domestic messaging requiring A2P registration, with no Canadian-recipient exception."
    },
    {
      q: "What Tax ID do Canadian businesses use for Standard Brand registration?",
      a: "The BN-9 format, the first nine digits of the CRA Business Number, entered exactly as it appears in official records."
    },
    {
      q: "Do Canadian toll-free numbers need A2P registration?",
      a: "No. They use Toll-Free Verification, a separate process from A2P 10DLC."
    },
    {
      q: "What happens if I send without the required registration?",
      a: "A route requiring A2P without it returns error 30034. A route requiring A2P or Persona with neither completed returns error 1002."
    },
    {
      q: "Does completing A2P or Persona satisfy CASL?",
      a: "No. These are separate telecom registration and identity mechanisms. Recipient consent, sender identification and unsubscribe requirements under CASL are a distinct question; consult counsel for your specific program."
    },
    {
      q: "Does Trust Score apply to Canadian numbers?",
      a: "HighLevel's Trust Score and MPS documentation covers US Standard Brands specifically. I found nothing confirming the same model applies to Canadian numbers, so don't assume it does."
    },
    {
      q: "What if I don't know when my Canadian number was purchased?",
      a: "Contact HighLevel Support with the phone number and Location ID before choosing a compliance path."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'four-things', title: 'Four Things That Are Not the Same Thing' },
    { id: 'does-apply', title: 'Does A2P 10DLC Apply to Canadian Numbers?' },
    { id: 'decision-table', title: 'Canadian 10DLC Decision Table' },
    { id: 'ca-to-ca', title: 'Canada to Canada Messaging' },
    { id: 'ca-to-us', title: 'Canada to United States Messaging' },
    { id: 'us-to-ca', title: 'United States to Canada Messaging' },
    { id: 'what-changed', title: 'What Changed on March 26, 2025' },
    { id: 'a2p-vs-persona', title: 'A2P Registration vs Persona Verification' },
    { id: 'international', title: 'International Messaging From Canadian Numbers' },
    { id: 'toll-free', title: 'Canadian Toll-Free Numbers' },
    { id: 'consent', title: 'Consent Is Not the Same as Registration' },
    { id: 'trust-score-mps', title: 'Trust Score, MPS and Canadian Numbers' },
    { id: 'canadian-businesses', title: 'What Canadian Businesses Need Before Sending SMS' },
    { id: 'expand-to-us', title: 'What Happens If You Expand From Canada to the US' },
    { id: 'agencies', title: 'Canadian Clients for Agencies' },
    { id: 'common-mistakes', title: 'Common Mistakes' },
    { id: 'decision-framework', title: 'Canadian SMS Decision Framework' },
    { id: 'checklist', title: 'Canadian Messaging Checklist' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const fourThings = [
    {
      term: 'Canadian phone number',
      meaning: 'A number issued in Canada that you send from: a Canadian 10DLC local number or a Canadian toll-free number'
    },
    {
      term: 'Canadian recipient',
      meaning: 'A person whose phone number receives the message, regardless of who sent it'
    },
    {
      term: 'Canadian business',
      meaning: 'The company registering the Brand, which may or may not match where the number was purchased'
    },
    {
      term: 'Canadian 10DLC vs Canadian Toll-Free',
      meaning: 'Two different number types with two different compliance processes; this guide is mainly about the 10DLC one'
    }
  ];

  const decisionTable = [
    {
      route: 'Canada → United States',
      purchaseDate: 'Any date',
      requirement: 'A2P registration required',
      notes: 'Persona does not substitute here'
    },
    {
      route: 'Canada → Canada',
      purchaseDate: 'Before March 26, 2025',
      requirement: 'A2P not required for this route',
      notes: 'Consent, content and carrier rules still apply'
    },
    {
      route: 'Canada → Canada',
      purchaseDate: 'On or after March 26, 2025',
      requirement: 'A2P or Persona',
      notes: 'Either path is valid; Persona is not required if A2P is completed'
    },
    {
      route: 'Canada → Puerto Rico',
      purchaseDate: 'Any date',
      requirement: 'A2P registration required',
      notes: 'Treated as domestic, not the CA → CA exception'
    },
    {
      route: 'Canada → International (outside US/Canada/PR)',
      purchaseDate: 'Any date',
      requirement: 'Persona verification only',
      notes: 'A2P is not required for this route'
    },
    {
      route: 'United States → Canada',
      purchaseDate: 'Any date',
      requirement: 'A2P registration required',
      notes: 'Domestic messaging rule applies to the sending US number'
    },
    {
      route: 'United States → United States',
      purchaseDate: 'Any date',
      requirement: 'A2P registration required',
      notes: 'Standard US A2P 10DLC'
    },
    {
      route: 'Canadian Toll-Free (either direction)',
      purchaseDate: 'Not applicable',
      requirement: 'Toll-Free Verification, not A2P',
      notes: 'See Toll-Free vs A2P 10DLC'
    }
  ];

  const a2pVsPersona = [
    {
      aspect: 'What it verifies',
      a2p: "The sender's business identity and the specific messaging use case, reviewed against the A2P 10DLC ecosystem",
      persona: 'The identity associated with the sub-account'
    },
    {
      aspect: 'Where it applies here',
      a2p: 'Required for Canada to US, Puerto Rico, and any US route. Also valid for Canada to Canada',
      persona: 'Only as an alternative for Canada to Canada, on numbers purchased on or after March 26, 2025'
    },
    {
      aspect: 'Frequency',
      a2p: 'Per Brand and Campaign',
      persona: 'Generally completed once per sub-account, per HighLevel'
    }
  ];

  const canadianBusinessSteps = [
    'Identify every route you actually use. Canada-only, Canada to US, US to Canada, and international are four different questions.',
    'Know your Canadian number\'s purchase date, if the route is Canada to Canada. Contact HighLevel Support if you cannot confirm it.',
    'Choose A2P or Persona for a qualifying Canada to Canada number, or go straight to A2P if any US recipients are in scope.',
    'For Standard Brand registration, have your legal business name and BN-9 exactly as recorded, business address, website, use case, sample messages and consent evidence ready.',
    'Confirm your consent process actually satisfies your recipients\' jurisdiction, not just the registration form.',
    'Test on the real route with a genuinely opted-in recipient before relying on any automation.'
  ];

  const commonMistakes = [
    'Assuming every Canadian number is exempt from A2P, rather than checking the route',
    'Ignoring the destination country and looking only at the sending number',
    'Treating the March 26, 2025 date as if it affects Canada to US messaging',
    'Using Persona for Canada to US traffic',
    'Assuming US to Canada messaging needs nothing because the recipient is "just Canadian"',
    'Confusing Canadian 10DLC with Canadian Toll-Free',
    'Treating A2P or Persona approval as proof of legal consent',
    'Launching a workflow before confirming which recipients are actually in the contact list',
    'Applying the US Trust Score and MPS tables to Canadian numbers without verification'
  ];

  const decisionFramework = [
    'Where is the recipient: Canada, US/PR, or international?',
    'What type is the sending number: Canadian 10DLC, Canadian Toll-Free, or US?',
    'If Canadian 10DLC and the route is Canada to Canada, what is the purchase date?',
    'If the route touches the US or Puerto Rico in either direction, go straight to A2P registration.',
    'If the route is Canada to Canada and the number is post-March 26, 2025, choose A2P or Persona.',
    'If the route is international, confirm Persona verification.',
    'If the number is toll-free, use Toll-Free Verification instead of any of the above.',
    'Verify your consent process separately, regardless of which registration path applies.',
    'Test on the real route with a real opted-in recipient before launching.'
  ];

  const checklistItems = [
    'Recipient countries for this number identified',
    'Sending number type confirmed (Canadian 10DLC, Canadian Toll-Free, or US)',
    'Purchase date confirmed, if Canada-only 10DLC',
    'Correct path chosen: A2P, Persona, Toll-Free Verification, or none required',
    'BN-9 and legal name match CRA records, if registering a Canadian Standard Brand',
    'Consent process reviewed against CASL where recipients are in Canada',
    'Contact list checked for any US numbers before activating a Canada-only automation',
    'Test message sent on the real route'
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
          <span className="text-[#1A2236] font-medium">A2P 10DLC Canadian Numbers</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">A2P 10DLC</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Canadian Numbers</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Requirements</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P 10DLC for Canadian Numbers in GoHighLevel:<br />
            <span className="text-[#F8D000]">Requirements by Route</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered · Verified against GoHighLevel and CRTC documentation, September 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Whether a Canadian 10DLC number needs A2P registration depends on the route, and for Canada-only traffic, on when the number was purchased. <strong className="text-white">Canada to United States always requires A2P registration</strong>, no matter when the number was bought. <strong className="text-white">Canada to Canada is different</strong>: a number purchased before March 26, 2025 does not need A2P for Canada-only messaging, while a number purchased on or after that date needs either A2P registration or Persona verification. <strong className="text-white">Toll-free numbers follow neither rule</strong>; they use their own Toll-Free Verification process.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              This is HighLevel's current policy, updated September 4, 2026. It is not the general A2P 10DLC framework applied loosely to Canada; it is a specific, documented rule set. The rest of this guide walks through each route so you can identify which one applies to your setup.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Canadian A2P Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#decision-table"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Decision Table
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
                5+ years GHL experience · 200+ A2P registrations handled globally including Canadian client accounts. All technical details verified as of September 2026.
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

            {/* Section: Four Things */}
            <h2 id="four-things" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Four Things That Are Not the Same Thing
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Term</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it means here</th>
                  </tr>
                </thead>
                <tbody>
                  {fourThings.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.term}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The rule that actually governs your situation depends on the <strong className="text-[#1A2236]">route</strong>, meaning the combination of sending number and recipient country, not simply on whether "Canada" is involved somewhere. A Canadian business can trigger US rules by texting a US contact. A US business can trigger the same domestic requirement by texting a Canadian contact. Keep sender and recipient separate through the rest of this guide.
            </p>

            {/* Section: Does A2P Apply */}
            <h2 id="does-apply" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Does A2P 10DLC Apply to Canadian Numbers?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Sometimes, and the answer changes by route. HighLevel's current documentation frames domestic messaging within the US, Canada and Puerto Rico as requiring A2P registration, with one specific carve-out for older Canada-only numbers. So the honest short answer is not "no" and not "always yes"; it is "check the route below."
            </p>

            {/* Section: Decision Table */}
            <h2 id="decision-table" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Canadian 10DLC Decision Table
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Route</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Number purchase date</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requirement</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.route}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.purchaseDate}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.requirement}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This table reflects two HighLevel articles read together: its <a href="https://help.gohighlevel.com/support/solutions/articles/155000004915-updated-messaging-policies-for-canadian-10dlc-numbers-a2p-registration-requirements" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Canadian 10DLC policy</a> (updated September 4, 2026) and its broader <a href="https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">US and Canada messaging guidelines</a> (updated August 11, 2026). The second one is what confirms that US → CA is a domestic route requiring A2P, and that CA → PR is domestic too, not covered by the CA → CA exception.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-canadian-numbers-infographic.png"
                  alt="A2P 10DLC for Canadian Numbers in GoHighLevel: Decision matrix by route and purchase date, A2P vs Persona comparison, and requirements checklist"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P 10DLC for Canadian Numbers in GoHighLevel: Decision matrix by route and purchase date, A2P vs Persona comparison, and requirements checklist</span>
              </div>
            </div>

            {/* Section: Canada to Canada */}
            <h2 id="ca-to-ca" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Canada to Canada Messaging
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the one route with a purchase-date exception, and it is worth restating precisely because it is easy to over-generalize.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Purchased before March 26, 2025:</strong> A2P registration is not required for Canada-only messaging on that number. This exemption is scoped to the A2P registration requirement specifically. HighLevel is explicit that consent, prohibited content, carrier filtering, opt-out and other messaging requirements still apply regardless.</li>
              <li><strong className="text-[#1A2236]">Purchased on or after March 26, 2025:</strong> the number can send Canada-only messages once either A2P Brand and Campaign registration or Persona identity verification is complete. Neither is mandatory over the other for this specific route; you pick one.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Do not read the pre-2025 exemption as "this number is exempt from everything." It is exempt from A2P for Canada-only traffic. The moment that number messages a US recipient, a completely different rule takes over, covered next.
            </p>

            {/* Section: Canada to US */}
            <h2 id="ca-to-us" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Canada to United States Messaging
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's rule here has no exceptions: A2P registration is required when a Canadian 10DLC number sends SMS or MMS to US recipients, regardless of when the number was purchased. HighLevel states plainly that Persona verification does not replace A2P registration on this route, and that relying on Persona alone for CA to US messaging is not sufficient.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Practically, this means completing an approved Brand, an approved Campaign, and associating the sending number with that Campaign before any US-bound message goes out. The field-level process is the same as the standard walkthroughs in <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration</Link> and <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration</Link>; this guide will not repeat those steps. For a Canadian Standard Brand, use the BN-9 format, the first nine digits of the Business Number, entered exactly as it appears in official records, per HighLevel's Brand Approval guidance.
            </p>

            {/* Section: US to Canada */}
            <h2 id="us-to-ca" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              United States to Canada Messaging
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This is the direction the older version of this guide did not clearly address, and it is not automatically the same as the Canada-to-US rule. HighLevel's US and Canada messaging guidelines treat this as ordinary domestic messaging: any message sent between US, Canada or Puerto Rico numbers, including US to CA, must originate from a registered A2P number. There is no Canadian-recipient exception on this side, and no purchase-date carve-out, because the exemption in HighLevel's Canadian policy applies specifically to Canadian numbers sending Canada-only traffic, not to US numbers sending to Canada.
            </p>

            {/* Section: What Changed */}
            <h2 id="what-changed" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Changed on March 26, 2025
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before that date, HighLevel did not require A2P or Persona for Canadian numbers sending Canada-only messages. From that date forward, newly purchased Canadian 10DLC numbers need one of the two paths for Canada-only sending. What the date does not do:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>It does not touch Canada to US messaging, which has always required A2P regardless of purchase date.</li>
              <li>It does not exempt pre-2025 numbers from consent, content or carrier rules.</li>
              <li>It does not apply to toll-free numbers at all.</li>
              <li>It does not retroactively require anything of numbers purchased earlier, as long as they stay on Canada-only traffic.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you are not sure when a number was purchased, HighLevel's guidance is to contact Support with the phone number and Location ID before choosing a compliance path, rather than guessing.
            </p>

            {/* Section: A2P vs Persona */}
            <h2 id="a2p-vs-persona" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Registration vs Persona Verification
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These solve different problems and are not interchangeable outside the one scenario where HighLevel allows either.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"></th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">A2P Brand and Campaign</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Persona</th>
                  </tr>
                </thead>
                <tbody>
                  {a2pVsPersona.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.a2p}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.persona}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Persona is not a lighter version of A2P that happens to work everywhere Canada is involved. It is a specific alternative for one specific route. Using it for Canada to US traffic, expecting it to hold, is one of the most common mistakes covered below. Persona itself is described in HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000005798-identity-verification-for-phone-number-purchases-us-ca-pr-il-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">identity verification guide</a>.
            </p>

            {/* Section: International */}
            <h2 id="international" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              International Messaging From Canadian Numbers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For messages sent from a Canadian (or US) number to a destination outside the US, Canada and Puerto Rico, HighLevel's guidance is that A2P registration is not required and Persona verification alone is what's needed. If neither A2P nor Persona is in place on a route that needs one of them, HighLevel returns error 1002, message blocked. This guide does not cover Toll-Free international behavior or the separate UK exception HighLevel documents; that is outside Canadian-number scope.
            </p>

            {/* Section: Toll-Free */}
            <h2 id="toll-free" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Canadian Toll-Free Numbers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Toll-free numbers, Canadian or US, do not use A2P 10DLC Brand and Campaign registration at all. They go through Toll-Free Verification instead, a separate process covered in HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/48001222300-toll-free-number-verification-guide-for-lc-phone-us-canada-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Toll-Free Verification guide</a> and compared to A2P in <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-[#0E9BF0] hover:underline">Toll-Free vs A2P 10DLC</Link>. None of the purchase-date rules on this page apply to a toll-free number.
            </p>

            {/* Section: Consent */}
            <h2 id="consent" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Consent Is Not the Same as Registration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P registration and Persona verification are telecom-ecosystem mechanisms. They tell carriers who is sending and, for A2P, what the messaging program is. Neither one is legal consent from the recipient, and completing either does not by itself satisfy Canadian legal requirements.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If your recipients are in Canada, Canada's Anti-Spam Legislation (CASL) is the relevant framework to be aware of. Per the CRTC, sending a commercial electronic message, which explicitly includes SMS text messages, generally requires the recipient's prior consent, sender identification information in the message, and a working unsubscribe mechanism; CASL applies to messages received in Canada even when sent from outside the country. This guide is not legal advice, and CASL's exact application to your messaging program, including which consent category applies and how the identification and unsubscribe requirements should be implemented, is a question for your own counsel. For consent language and opt-in evidence generally, see <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt in language and requirements</Link>.
            </p>

            {/* Section: Trust Score MPS */}
            <h2 id="trust-score-mps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Trust Score, MPS and Canadian Numbers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's Trust Score and MPS documentation describes throughput for US Standard Brands specifically, tied to secondary vetting performed as part of that registration. I found no HighLevel documentation stating that this same Trust Score and MPS model applies to Canadian 10DLC numbers, to Persona-verified numbers, or to Canadian toll-free numbers. Treat Canadian throughput as a separate, undocumented question rather than assuming the US tables in <Link href="/blog/a2p-trust-score-mps" className="text-[#0E9BF0] hover:underline">A2P Trust Score and MPS</Link> carry over, and confirm current behavior with HighLevel Support if throughput matters to your Canadian sending volume.
            </p>

            {/* Section: Canadian Businesses Steps */}
            <h2 id="canadian-businesses" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Canadian Businesses Need Before Sending SMS
            </h2>
            <div className="space-y-3 mb-6">
              {canadianBusinessSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Expand to US */}
            <h2 id="expand-to-us" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens If You Expand From Canada to the US
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A Persona-only setup stops being sufficient the moment US recipients enter the picture. HighLevel's guidance is explicit: if a Canada-only messaging program later begins messaging US recipients, the Persona-only path is no longer sufficient and A2P registration becomes required before that traffic goes out. In practice this means completing Brand and Campaign registration and confirming the number is associated with the approved Campaign, not just checking a box somewhere. A common way this actually happens is not a decision at all: a CRM database gets US contacts added to it, and an existing automation quietly starts targeting them. If you are not certain your contact list is Canada-only, assume it is not, and complete A2P registration before the workflow runs.
            </p>

            {/* Section: Agencies */}
            <h2 id="agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Canadian Clients for Agencies
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Everything above applies per number, per sub-account, the same as it does for a single business. An agency managing Canadian clients needs to track, for each client: which country the client's numbers were purchased in, which routes that client actually sends on, the purchase date for any Canada-only Canadian number, and whether A2P or Persona was completed. This is a subset of the broader multi-client tracking problem, covered in <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P registration for GoHighLevel agencies</Link>; this page does not repeat that operational framework.
            </p>

            {/* Section: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mistakes
            </h2>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {commonMistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section: Decision Framework */}
            <h2 id="decision-framework" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Canadian SMS Decision Framework
            </h2>
            <div className="space-y-2 mb-6">
              {decisionFramework.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Checklist */}
            <h2 id="checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Canadian Messaging Checklist
            </h2>
            <div className="space-y-2 mb-6">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#5C6880]">{item}</p>
                  </div>
                </div>
              ))}
            </div>

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

            {/* CTA 4 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about Canadian A2P requirements?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our A2P specialists directly. We've handled Canadian A2P registrations and can help you understand your specific requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Ask an Expert
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/book-a-call" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
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
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Toll-Free vs A2P 10DLC in GoHighLevel: Which Should You Choose? →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">A2P Trust Score and MPS Explained →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need A2P registration for your Canadian GHL numbers?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles Canadian and US A2P registration for agencies and their clients. BN-9 verification, brand registration, campaign submission, and rejection troubleshooting end to end.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free Strategy Call
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations handled globally including Canadian client accounts</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                This guide was checked against HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000004915-updated-messaging-policies-for-canadian-10dlc-numbers-a2p-registration-requirements" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Canadian 10DLC A2P Registration Requirements</a> (updated September 4, 2026), its <a href="https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Updated Messaging Guidelines for the U.S. &amp; Canada</a> (updated August 11, 2026), its <a href="https://help.gohighlevel.com/support/solutions/articles/155000005798-identity-verification-for-phone-number-purchases-us-ca-pr-il-" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Persona identity verification guide</a>, and the CRTC's <a href="https://crtc.gc.ca/eng/com500/faq500.htm" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">CASL FAQ</a>, current as of September 2026. Requirements change, so confirm current rules in your Trust Center. This is not legal advice.
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