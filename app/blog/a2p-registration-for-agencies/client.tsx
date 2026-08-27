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
  Star,
  AlertTriangle,
  BadgeCheck as BadgeCheckIcon,
  Lightbulb,
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
  TrendingDown
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2PRegistrationForAgenciesClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'why-per-client',
      'agency-limits',
      'client-info',
      'workflow',
      'saas-mode',
      'cost',
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
      q: "Can I use one A2P registration for all my GoHighLevel clients?",
      a: "No. Each client sub-account requires its own separate A2P brand registration tied to that client's legal business name and Tax ID. You cannot register your agency's brand and use it to cover multiple client sub-accounts with different business identities. TCR links every approved campaign to a specific brand identity registering one brand for multiple distinct businesses misrepresents the sender identity, which is exactly what A2P registration exists to prevent. Each client is a separate brand registration and a separate campaign registration."
    },
    {
      q: "How many brand registrations can I do with one email address?",
      a: "One email address can be used for a maximum of 5 brand registrations across all A2P submissions in the TCR ecosystem. For agencies managing 6 or more clients, you need additional email addresses. A common approach is to use agency sub-addresses or aliases (such as agency+client1@yourdomain.com) or to use client-specific email addresses for registrations beyond the 5-brand limit."
    },
    {
      q: "How many brand registrations can I verify with one mobile phone number?",
      a: "One mobile phone number can be used for OTP verification for a maximum of 3 brand registrations across all TCR registrations ecosystem-wide not just within GHL. For agencies with 4 or more clients, you need additional mobile phone numbers for OTP verification. The phone number used for OTP cannot be a LeadConnector, Twilio, or CPaaS number it must be a real personal mobile number."
    },
    {
      q: "Is A2P registration part of GHL SaaS Mode onboarding?",
      a: "No. A2P registration is not part of the automated sub-account provisioning that happens when a client signs up through your SaaS Mode pricing page. After a client's sub-account is created from your Snapshot, A2P registration must be completed separately for that sub-account. Most agencies handle this as part of their client onboarding service, completing the Trust Center registration for each new client and including it in the setup fee."
    },
    {
      q: "How do I track A2P registration status across multiple client sub-accounts?",
      a: "GHL does not provide an agency-level dashboard showing the A2P registration status of all sub-accounts in one view as of the date of this guide you may want to verify whether this has changed in GHL's current feature set. The recommended approach is to maintain an external tracking sheet with each client's sub-account name, brand registration date, brand approval status, campaign submission date, campaign approval status, and any rejection notes. Review the status of pending registrations every 2 to 3 business days during the review period."
    },
    {
      q: "Do I need to re-register when I add new phone numbers to an approved client sub-account?",
      a: "No. Once a brand and campaign are approved for a sub-account, any additional phone numbers purchased for that sub-account are automatically registered under the same campaign. No new registration submission is needed. It may take several days for the new number's registration to complete verify the current timing in GHL's Trust Center documentation as it can change."
    },
    {
      q: "Can GHL Scale Up handle A2P registration for all my agency's clients?",
      a: "Yes. GHL Scale Up manages A2P brand and campaign registration for agencies and all their client sub-accounts. This includes building a client intake process, verifying EIN details before submitting, completing each sub-account's Trust Center registration, and handling any rejection troubleshooting and resubmission. Book a free strategy call at ghlscaleup.com/contact to discuss your client base."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-per-client', title: '1. Why does every client sub-account need its own A2P registration?' },
    { id: 'agency-limits', title: '2. What are the agency-specific limits that affect multiple registrations?' },
    { id: 'client-info', title: '3. What does each client need to provide before you can register?' },
    { id: 'workflow', title: '4. What is the most efficient workflow for registering multiple clients?' },
    { id: 'saas-mode', title: '5. How does A2P registration work with GoHighLevel SaaS Mode?' },
    { id: 'cost', title: '6. What does it cost to register multiple clients?' },
    { id: 'faq', title: '7. Frequently asked questions' }
  ];

  const limits = [
    { limit: 'Email: max 5 brands per address', meaning: 'One email address can only be used for up to 5 brand registrations across all TCR submissions ecosystem-wide.', workaround: 'For agencies with 6+ clients, use multiple email addresses. A common approach: use a Gmail alias system (agency+client1@gmail.com, agency+client2@gmail.com) or create dedicated email addresses per client group.' },
    { limit: 'Phone: max 3 brands per number (OTP)', meaning: 'The mobile number used to verify identity during brand registration (via OTP) can be used for a maximum of 3 brand registrations ecosystem-wide not just within GHL.', workaround: 'For agencies with 4+ clients, use different mobile numbers for OTP verification. Team members\' personal mobile numbers can be used as long as they are not Twilio or LeadConnector numbers.' },
    { limit: 'OTP phone must not be a CPaaS number', meaning: 'The mobile number used for OTP cannot be a number purchased through LeadConnector, Twilio, or any CPaaS provider.', workaround: 'Use a real personal mobile number, not a GHL or Twilio number, for OTP verification steps.' },
    { limit: 'Sole Prop: 1 phone number per campaign', meaning: 'Sole Proprietor brand registrations are limited to one phone number per campaign. Multiple numbers need separate campaign linkage.', workaround: 'For clients who need multiple numbers, Standard Brand registration (requires EIN) supports multiple numbers per campaign without this limitation.' },
    { limit: 'Registration is per sub-account, not per agency', meaning: 'A2P registration is done from inside each client\'s sub-account Trust Center. There is no agency-level bulk registration dashboard.', workaround: 'Build a systematic checklist and collect all client information before logging into each sub-account to register. See Section 4 for the recommended workflow.' }
  ];

  const clientInfo = [
    { info: 'Legal business name (exactly as filed with IRS)', why: 'Must match the EIN record exactly character for character, including LLC, Inc, or Corp suffix', flag: 'Clients often provide their trading name, not legal name. Ask for their CP 575 or 147c letter.' },
    { info: 'EIN (for Standard Brand)', why: 'Required for Standard Brand registration. Must be 9-digit format XX-XXXXXXX, not DUNS.', flag: 'Clients sometimes provide state registration numbers or DUNS numbers. Clarify you need the federal EIN.' },
    { info: 'Physical business address', why: 'Must be a physical street address. PO Boxes cause rejection for Standard Brand.', flag: 'Many clients use a PO Box as their mailing address. Get the physical registered address.' },
    { info: 'Business website URL', why: 'Carriers verify the website matches the claimed use case and business type.', flag: 'Client website must be live and publicly accessible before submitting. No "coming soon" pages.' },
    { info: 'Description of SMS use case', why: 'What messages will be sent, to whom, and why.', flag: 'Clients often describe this vaguely. Ask specifically: what types of messages, who receives them, how did those contacts opt in.' },
    { info: 'Opt-in form URL or screenshot', why: 'Publicly accessible URL showing the consent form with correct checkbox language.', flag: 'Form is often behind a login or embedded in a funnel not yet live. Must be publicly accessible for carrier review.' },
    { info: 'Privacy Policy URL and Terms of Service URL', why: 'Both required in campaign registration. Must include the required no-mobile-data-sharing clause.', flag: 'Clients often have outdated Privacy Policies without the required SMS data clause.' },
    { info: 'Client email address (for OTP verification)', why: 'Must be a valid email the client can access for the OTP step during registration.', flag: 'Use your own agency email for up to 5 clients, then switch to client-specific emails for subsequent registrations.' },
    { info: 'Mobile number for OTP (Sole Prop only)', why: 'Personal mobile number required for OTP cannot be a GHL or Twilio number.', flag: 'Sole Prop clients must provide their personal mobile, not a business VoIP number.' }
  ];

  const fees = [
    { fee: 'Brand registration fee', timing: 'One-time, at registration', perClient: 'Per client sub-account each registration is billed separately', verify: 'GHL Trust Center current fee schedules' },
    { fee: 'Campaign vetting fee ($15 per campaign)', timing: 'One-time, at campaign submission', perClient: 'Per campaign per sub-account', verify: 'GHL Trust Center' },
    { fee: 'Monthly campaign fee (recurring)', timing: 'Monthly while campaign is active', perClient: 'Per campaign per sub-account', verify: 'GHL Trust Center' },
    { fee: 'Carrier per-message charges', timing: 'Per SMS/MMS segment sent', perClient: 'Per sub-account based on their sending volume', verify: 'GHL sub-account billing' },
    { fee: 'Resubmission (if rejected and edited)', timing: 'No additional fee to edit and resubmit', perClient: 'Per sub-account but only if editing existing registration, not deleting and recreating', verify: 'GHL official documentation' }
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
          <span className="text-[#1A2236] font-medium">A2P Registration for Agencies</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agencies</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Multiple Clients</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Registration for GoHighLevel Agencies:<br />
            <span className="text-[#F8D000]">Managing Multiple Client Accounts (2026)</span>
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
            For agencies managing multiple GoHighLevel sub-accounts, A2P 10DLC registration is not a one-time task. Every client account that sends automated SMS to US recipients needs its own brand registration, its own campaign registration, and its own opt-in documentation. There is no shortcut that registers all clients under a single submission. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled A2P registration across hundreds of client accounts. This guide covers the agency-specific rules, the limits that catch agencies off guard, and the most efficient workflow for managing registrations at scale.
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
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                No you cannot register one A2P brand for multiple client sub-accounts in GoHighLevel. Each brand registration represents one business entity.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Each client sub-account requires its own brand registration tied to that client's legal business name and Tax ID. Campaign registration follows automatically per sub-account once the brand is approved. There are practical limits agencies need to plan for: one email address can be used for a maximum of 5 brand registrations, and one mobile phone number can be used for OTP verification across a maximum of 3 brand registrations ecosystem-wide. For agencies with more than 3 to 5 clients, you will need multiple email addresses and phone numbers before you start.
              </p>

              {/* CTA Button inside BLUF */}
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

            {/* CTA 1 - After TOC */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Not sure how to handle A2P registration for multiple clients?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Get a free strategy call. We'll review your client base and build a registration workflow that scales.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 1: Why Per Client */}
            <h2 id="why-per-client" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Does Every Client Sub-Account Need Its Own A2P Registration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's sub-account architecture gives each client a fully isolated workspace their own CRM, automations, funnels, and phone numbers. That isolation extends to A2P registration. The Campaign Registry (TCR) links every registered campaign to a specific brand identity (business name, EIN, address). When your client's phone number sends an SMS, TCR's system verifies that the sending number is registered under an approved brand and campaign that belongs to that specific business.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Registering your agency's own brand and using it to cover your clients' sub-accounts would mean all of your clients' messages appear to TCR as coming from your agency, not from the client business. This misrepresents the sender identity which is exactly what A2P registration exists to prevent. Each client is a legally distinct business with its own identity, and TCR requires that identity to match.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the foundational explanation of why A2P registration exists: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the GoHighLevel sub-account model and how it structures client accounts: <Link href="/blog/gohighlevel-for-agencies" className="text-[#0E9BF0] hover:underline">GoHighLevel for Agencies: Complete 2026 Guide →</Link>
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">ONE EXCEPTION THAT AGENCIES ASK ABOUT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                What if all my sub-accounts are for the same business under the same EIN for example, separate sub-accounts for each sales rep at one company? This is a confirmed pain point. There is an open feature request on GHL's Ideas board requesting the ability to select multiple sub-accounts under one brand and campaign registration. As of the date of this guide, this feature does not exist separate registrations are required per sub-account even when the underlying business entity is the same. Check GHL's feature release notes for any updates to this limitation, as it is an actively requested change.
              </p>
            </div>

            {/* Section 2: Agency Limits */}
            <h2 id="agency-limits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Are the Agency-Specific Limits That Affect Multiple Registrations?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These limits are confirmed from GHL's official documentation. Plan for them before starting any multi-client registration workflow.
            </p>

            <div className="space-y-3 mb-6">
              {limits.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-base font-bold text-[#1A2236] mb-2">{item.limit}</h3>
                  <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-3 mb-3">
                    <p className="text-sm text-[#5C6880]"><strong className="text-[#1A2236]">What it means for agencies:</strong> {item.meaning}</p>
                  </div>
                  <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-3">
                    <p className="text-sm text-[#5C6880]"><strong className="text-[#25C97D]">How to work around it:</strong> {item.workaround}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 2 - After Agency Limits */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">⚠️ Running into A2P registration limits?</p>
              <p className="text-sm text-white/80 mb-4">We can help you plan your registration strategy, manage email and phone limits, and handle registrations for your entire client base.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Search className="w-4 h-4" />
                Get Registration Strategy Help
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 3: Client Info */}
            <h2 id="client-info" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Does Each Client Need to Provide Before You Can Register?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Collect all of this from the client before logging into their sub-account. Incomplete information mid-registration slows the process and increases rejection risk.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Information needed</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why it is needed</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Common client mistake to flag</th>
                  </tr>
                </thead>
                <tbody>
                  {clientInfo.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.info}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.flag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the compliant consent checkbox language to include on every client's opt-in form: <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For A2P brand registration steps once you have the above information: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For campaign registration after brand approval: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
            </p>

            {/* Section 4: Workflow */}
            <h2 id="workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Is the Most Efficient Workflow for Registering Multiple Clients?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The agencies that complete multi-client A2P registration with the fewest rejections follow a standardised intake and submission process. Here is the sequence GHL Scale Up uses.
            </p>

            <ul className="space-y-3 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Build a client intake form.</strong> Create a GHL form or a simple document that every new client completes before you begin registration. Include every field from the table in Section 3. Send it to the client and do not begin registration until you have all answers. Missing information discovered mid-registration wastes review cycles.</li>
              <li><strong className="text-[#1A2236]">Verify the EIN before submitting.</strong> Ask the client to provide their CP 575 EIN Confirmation Letter as a complete PDF. Since GHL now allows direct CP 575 upload in the Trust Center (fields auto-fill from the document), this step simultaneously prevents EIN mismatch rejection and speeds up data entry. Verify the legal name on the CP 575 matches exactly what will be entered in the registration form.</li>
              <li><strong className="text-[#1A2236]">Update the client's website Privacy Policy before opening the Trust Center.</strong> Check that the Privacy Policy includes the required no-mobile-data-sharing clause. Check that both Privacy Policy and Terms of Service links are live and accessible without login. Fix these first they cannot be added retroactively after submission without potentially requiring a new review cycle.</li>
              <li><strong className="text-[#1A2236]">Log into the client's sub-account and open Settings Phone Numbers Trust Center.</strong> A2P registration is done from inside the client's sub-account, not from your agency-level dashboard. Navigate: Settings, then Phone System, then Trust Center. Click Start Registration under A2P Messaging.</li>
              <li><strong className="text-[#1A2236]">Upload the CP 575 PDF first.</strong> If the Trust Center shows a CP 575 upload option, upload the complete PDF before entering any details manually. GHL will auto-fill the business name, EIN, and address from the document. This reduces manual data entry errors.</li>
              <li><strong className="text-[#1A2236]">Complete brand registration and handle OTP.</strong> Use a unique email address (your own for the first 5 clients) and a mobile number that has not been used for more than 2 previous brand registrations. Verify via OTP immediately do not leave the OTP step pending, as it may expire.</li>
              <li><strong className="text-[#1A2236]">Track registration status in a shared log.</strong> Create a simple tracking sheet with each client's sub-account name, brand registration date, brand status, campaign status, and any rejection notes. Review pending registrations every 2 to 3 business days during the review period.</li>
              <li><strong className="text-[#1A2236]">Add new phone numbers to approved accounts without resubmission.</strong> Once brand and campaign are approved, any additional phone numbers purchased for that sub-account are automatically registered under the same campaign. No new registration submission is needed. It may take several days for registration to complete on newly added numbers confirm this timing in GHL's current documentation as it can change.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE SINGLE BIGGEST TIME SAVER</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Standardise your intake form before you register your first client. Every agency that processes A2P registrations without a standard intake form eventually encounters the same delays: EIN not available, website not live, Privacy Policy not updated, opt-in form behind a login. A 10-minute intake process per client eliminates most of these. The review period (3 to 7 business days per registration) is the unavoidable wait everything else is controllable.
              </p>
            </div>

            {/* CTA 3 - After Workflow */}
            <div className="bg-[#0B1628] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">📋 Need a ready-to-use client intake form and workflow template?</p>
              <p className="text-sm text-white/80 mb-4">We can provide you with a complete intake form, tracking sheet, and step-by-step workflow for registering multiple clients.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <FileCheck className="w-4 h-4" />
                Get Your Workflow Template
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 5: SaaS Mode */}
            <h2 id="saas-mode" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Does A2P Registration Work With GoHighLevel SaaS Mode?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you operate under GHL SaaS Mode, your clients self-sign-up and their sub-accounts are provisioned automatically. A2P registration is not part of the automated provisioning flow it is a separate step that must be completed after the sub-account is created.
            </p>

            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A2P is not included in SaaS Mode onboarding by default:</strong> When a client signs up through your SaaS Mode pricing page and their sub-account is created from your Snapshot, no A2P registration is submitted automatically. You or the client must complete registration separately for each sub-account.</li>
              <li><strong className="text-[#1A2236]">Two approaches for SaaS agencies:</strong> (1) Agency-managed registration: you complete A2P registration for each new client sub-account as part of your onboarding service, charging a setup fee. (2) Client-managed registration: you provide clients with instructions or a guide and they complete their own Trust Center registration. Client-managed registration results in more errors agency-managed produces fewer rejections.</li>
              <li><strong className="text-[#1A2236]">Rebilling A2P fees:</strong> A2P registration and monthly campaign fees are passthrough charges from TCR and carriers. GHL passes these through at cost with no markup. If you charge clients a setup fee for A2P registration management, this is separate from the passthrough fee. Be clear with clients about which fees are passthrough (they pay for the registration itself) and which are your agency's management fee. For the full fee breakdown: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link></li>
              <li><strong className="text-[#1A2236]">For the full SaaS Mode configuration guide:</strong> <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Guide →</Link></li>
            </ul>

            {/* Section 6: Cost */}
            <h2 id="cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. What Does It Cost to Register Multiple Clients?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              All A2P fees are passthrough charges GHL adds no markup. Fees are set by TCR and the carriers. Verify current fee amounts in GHL's Trust Center before quoting clients, as these can change.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fee</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Timing</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Per client? Or per agency?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Verify in</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.fee}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.timing}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.perClient}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.verify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">SCALE THE MATH BEFORE YOU QUOTE CLIENTS</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For a 20-client agency, you are looking at 20 separate brand registrations, 20 campaign vetting fees, and 20 monthly campaign fees in addition to per-message usage charges for each client's sending volume. Build this cost into your client onboarding fee and monthly retainer. Most agencies either pass the fees through directly at cost or include them in a bundled setup fee. Never absorb these costs silently they are real, per-client, recurring charges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED YOUR AGENCY'S CLIENT REGISTRATIONS MANAGED</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles A2P registration for agencies and all their client sub-accounts. Intake process, EIN verification, brand registration, campaign submission, rejection troubleshooting, and resubmission managed for every client.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See results from our A2P setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss managing registration across your client base: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            {/* CTA 4 - After Cost */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Want to outsource A2P registration for your entire client base?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                We handle every registration, rejection, and resubmission so you can focus on growing your agency.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Shield className="w-4 h-4" />
                Outsource Your A2P Registration
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

            {/* CTA 5 - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about A2P registration for your agency?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our A2P specialists directly. We've handled 200+ A2P registrations across agency client portfolios.
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
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates for GoHighLevel →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Managing A2P registration across multiple clients?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration for your entire client base. Client intake process, EIN verification, brand registration, campaign submission, rejection troubleshooting managed per sub-account for every client.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations handled globally across agency client portfolios</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                All information in this guide is verified against GoHighLevel's official support portal documentation as of July 2026. GHL feature availability and TCR policies may change always verify current requirements in GHL's Trust Center before acting.
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