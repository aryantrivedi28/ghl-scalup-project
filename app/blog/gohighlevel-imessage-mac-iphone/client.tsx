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
  AlertTriangle,
  Clock,
  Rocket,
  CheckCircle2,
  Image as ImageIcon,
  Target,
  GitCompare,
  BarChart3,
  Layers,
  Workflow,
  Mailbox,
  ListChecks,
  ClipboardCheck,
  Settings,
  Users,
  Calendar,
  MessageCircle,
  Phone,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Star,
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Compass,
  Database,
  DollarSign,
  Users2,
  Search,
  XCircle,
  HelpCircle,
  FileQuestion,
  AlertCircle,
  Monitor,
  Laptop,
  Cloud,
  CloudOff,
  HardDrive,
  Wifi,
  WifiOff,
  Apple,
  MessageSquare,
  Send,
  Inbox,
  Clock as ClockIcon,
  Shield,
  Lock,
  Key,
  RefreshCw,
  ExternalLink,
  CheckSquare,
  XSquare,
  AlertOctagon,
  Info,
  HelpCircle as HelpIcon,
  PhoneCall,
  Voicemail,
  Mail,
  MessageSquare as MessageIcon,
  Smartphone as PhoneIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLeveliMessageMaciPhoneClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'short-answer',
        'how-does-imessage-connect',
        'why-do-some-integrations-need-mac',
        'what-role-does-iphone-play',
        'what-happens-mac-offline',
        'what-happens-iphone-offline',
        'what-happens-workflows-unavailable',
        'option-1-run-yourself',
        'option-2-cloud-mac',
        'option-3-managed-service',
        'how-do-setups-compare',
        'what-does-it-cost',
        'what-changes-agency-multiple-subaccounts',
        'reliability-checklist',
        '12-questions',
        'troubleshooting-matrix',
        'compliance-responsible-use',
        'the-takeaway',
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
      q: "Does GoHighLevel support iMessage?",
      a: "Not natively. It arrives through a third-party Marketplace app functioning as a conversation provider — GoHighLevel provides the CRM and workflow layer the message routes through, not the iMessage sending capability itself."
    },
    {
      q: "Do I need a Mac for GoHighLevel iMessage?",
      a: "Only if you choose a provider whose architecture puts that requirement on you. Others host or manage the required Apple environment themselves."
    },
    {
      q: "Do I need an iPhone for GoHighLevel iMessage?",
      a: "Depends on the specific provider's architecture — some rely primarily on Mac-side infrastructure, others tie the number to a phone. Ask directly rather than assuming."
    },
    {
      q: "Can I use GoHighLevel iMessage without owning a Mac?",
      a: "Yes, through cloud-hosted or fully managed providers — but a real Apple environment still exists somewhere behind the service; you're just not the one operating it."
    },
    {
      q: "Can I use GoHighLevel iMessage without owning an iPhone?",
      a: "In most current architectures, yes — the Mac (owned, hosted, or provider-run) is typically the operative piece, though this varies by provider."
    },
    {
      q: "What happens if the Mac goes offline?",
      a: "Outbound sending and inbound sync for that channel typically stop until it's back, unless the specific provider has built monitoring or redundancy around it."
    },
    {
      q: "What is a cloud Mac for iMessage?",
      a: "A real macOS environment hosted by a third party instead of sitting on your desk — infrastructure you rent rather than own, not a plain API replacement for a physical device."
    },
    {
      q: "What is a managed iMessage service?",
      a: "A model where the provider operates the underlying device infrastructure entirely, delivering a working number and channel without exposing the hardware layer to the customer."
    },
    {
      q: "Can GoHighLevel workflows automate iMessages?",
      a: "Yes, once a conversation-provider integration is installed — workflows can trigger sends the same way they trigger SMS, through that provider's workflow action."
    },
    {
      q: "What should I check before choosing a third-party iMessage provider?",
      a: "Ownership of the number and Apple account, what happens during an outage, how replies sync back to GHL, and what happens if you cancel or switch — covered in the questions list above."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'short-answer', title: 'Short Answer: Do You Need a Mac and iPhone?' },
    { id: 'how-does-imessage-connect', title: 'How Does iMessage Connect to GoHighLevel?' },
    { id: 'why-do-some-integrations-need-mac', title: 'Why Do Some GoHighLevel iMessage Integrations Need a Mac?' },
    { id: 'what-role-does-iphone-play', title: 'What Role Does the iPhone Play in a GHL iMessage Setup?' },
    { id: 'what-happens-mac-offline', title: 'What Happens If the Mac Goes Offline?' },
    { id: 'what-happens-iphone-offline', title: 'What Happens If the iPhone Is Offline?' },
    { id: 'what-happens-workflows-unavailable', title: 'What Happens to GoHighLevel Workflows When iMessage Is Unavailable?' },
    { id: 'option-1-run-yourself', title: 'Option 1: Run the iMessage Infrastructure Yourself' },
    { id: 'option-2-cloud-mac', title: 'Option 2: Use a Cloud or Hosted Mac' },
    { id: 'option-3-managed-service', title: 'Option 3: Use a Managed iMessage Service' },
    { id: 'how-do-setups-compare', title: 'How Do Hardware, Cloud, and Managed Setups Compare?' },
    { id: 'what-does-it-cost', title: 'What Does GoHighLevel iMessage Actually Cost?' },
    { id: 'what-changes-agency-multiple-subaccounts', title: 'What Changes When an Agency Has Multiple GHL Sub-Accounts?' },
    { id: 'reliability-checklist', title: 'GoHighLevel iMessage Reliability Checklist' },
    { id: '12-questions', title: '12 Questions to Ask an iMessage Provider' },
    { id: 'troubleshooting-matrix', title: 'Troubleshooting Matrix' },
    { id: 'compliance-responsible-use', title: 'Compliance and Responsible Use' },
    { id: 'the-takeaway', title: 'The Takeaway' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const shortAnswerData = [
    { setup: 'Owned hardware', ownMac: 'Yes', ownIphone: 'Sometimes, depending on the provider\'s setup', whoMaintains: 'You', bestSuitedFor: 'Teams wanting direct infrastructure control' },
    { setup: 'Cloud/hosted Mac', ownMac: 'No physical unit — you rent access to one', ownIphone: 'Usually not', whoMaintains: 'Shared between you and the hosting provider', bestSuitedFor: 'Avoiding a physical device without giving up hands-on access' },
    { setup: 'Managed iMessage service', ownMac: 'No', ownIphone: 'Usually no', whoMaintains: 'The provider', bestSuitedFor: 'Agencies that want a messaging channel, not infrastructure to run' },
    { setup: 'API/webhook-oriented provider', ownMac: 'No', ownIphone: 'No', whoMaintains: 'The provider', bestSuitedFor: 'Technical teams bridging iMessage into GHL alongside other tools' },
  ];

  const comparisonData = [
    { factor: 'Upfront hardware cost', ownHardware: 'Yes (a physical Mac)', cloudMac: 'No', managedService: 'No' },
    { factor: 'Recurring cost', ownHardware: 'Low (just the integration fee)', cloudMac: 'Hosting fee + integration fee', managedService: 'Provider\'s monthly fee, typically per line' },
    { factor: 'Physical maintenance', ownHardware: 'You', cloudMac: 'Shared with host', managedService: 'Provider' },
    { factor: 'Uptime responsibility', ownHardware: 'You', cloudMac: 'Mostly the host', managedService: 'Provider' },
    { factor: 'Monitoring', ownHardware: 'You build it', cloudMac: 'Depends on host', managedService: 'Usually included' },
    { factor: 'Technical control', ownHardware: 'Highest', cloudMac: 'Moderate', managedService: 'Lowest' },
    { factor: 'Provider dependency', ownHardware: 'Lowest', cloudMac: 'Moderate', managedService: 'Highest' },
    { factor: 'Best suited for', ownHardware: 'Technical teams wanting full control', cloudMac: 'Avoiding physical hardware while keeping hands-on access', managedService: 'Agencies wanting a working channel without infrastructure work' },
  ];

  const troubleshootingData = [
    { symptom: 'Workflow never ran', layerToInvestigate: 'GHL workflow', firstCheck: 'Trigger and enrollment' },
    { symptom: 'Workflow ran, no iMessage sent', layerToInvestigate: 'Integration/action', firstCheck: 'The provider\'s send-action configuration' },
    { symptom: 'Device or hosted Mac offline', layerToInvestigate: 'Infrastructure', firstCheck: 'Device/host availability and monitoring' },
    { symptom: 'Message sent, reply never arrives in GHL', layerToInvestigate: 'Reply sync', firstCheck: 'Provider\'s inbound webhook to GHL Conversations' },
    { symptom: 'Messages arriving late', layerToInvestigate: 'Infrastructure/integration', firstCheck: 'Device or provider status' },
    { symptom: 'GHL shows the action completed, contact never got it', layerToInvestigate: 'Messaging layer', firstCheck: 'Provider\'s own delivery status, not the workflow' },
  ];

  const questionsData = [
    'Do I need to own a Mac?',
    'Do I need to own an iPhone?',
    'Who owns the phone number if I leave?',
    'Who owns the Apple ID and device behind the service?',
    'Where does that device or environment physically or virtually live?',
    'What happens if it goes offline?',
    'What happens if your company goes offline?',
    'How do inbound replies actually reach my GHL conversations?',
    'Does it support native GHL workflow actions, or only a webhook bridge?',
    'What happens to a message that fails to send?',
    'Can I take my number with me if I switch providers?',
    'What happens to my message history if I cancel?',
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help choosing your iMessage setup for GHL.</p>
      <Button
        onClick={handleOpenBooking}
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Button>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel iMessage: Do You Need a Mac? (2026)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Integration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">iMessage</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Hardware</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel iMessage:<br />
            <span className="text-[#F8D000]">Do You Really Need a Mac and iPhone?</span>
          </h1>

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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated September 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            <strong className="text-white">No single answer covers every setup, and that's the actual point of this article.</strong> GoHighLevel itself is the CRM and workflow layer — it doesn't send iMessages on its own. iMessage reaches a GoHighLevel conversation through a third-party integration, and depending on which provider you choose, you may end up owning a Mac, renting a hosted one, or owning no Apple hardware at all while a provider runs it for you. The honest answer to "do I need a Mac and iPhone" is: it depends entirely on which of those three architectures the provider you pick actually uses — and this article exists to help you tell them apart before you commit to one.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get iMessage Setup Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#short-answer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Answer
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
            <div className="hidden lg:block mb-6">
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
                5+ years GHL experience · 200+ systems built globally. All integration details verified as of September 2026.
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

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need iMessage Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help agencies set up iMessage for GoHighLevel with the right architecture.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
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

            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section: Short Answer */}
            <h2 id="short-answer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Short Answer: Do You Need a Mac and iPhone for GoHighLevel iMessage?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Setup</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Own a Mac?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Own an iPhone?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Who Maintains It</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Best Suited For</th>
                  </tr>
                </thead>
                <tbody>
                  {shortAnswerData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.setup}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ownMac}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ownIphone}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whoMaintains}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.bestSuitedFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every row still depends on the specific provider. None of these categories guarantee identical behavior across every company offering them — verify the actual architecture before assuming a "managed" or "cloud" label means what you think it means.
            </p>

            {/* Section: How Does iMessage Connect */}
            <h2 id="how-does-imessage-connect" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Does iMessage Connect to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's own developer documentation defines a mechanism called a conversation provider — a Marketplace application that plugs a new channel (custom SMS, email, or call) into the Conversations inbox and workflow builder. There's no separate "iMessage channel type" built into HighLevel itself; every iMessage provider on the Marketplace works by registering itself as a conversation provider and routing messages through its own infrastructure behind that connection. The flow looks like this:
            </p>
            <p className="text-sm md:text-base font-semibold text-[#0E9BF0] mb-4">
              GoHighLevel workflow/conversation → Marketplace app (conversation provider) → provider's iMessage infrastructure → Apple's messaging environment → the contact's iMessage
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Worth being precise about, because it trips people up constantly: there are two genuinely different things called "iMessage for business." <strong className="text-[#1A2236]">Apple Messages for Business</strong> (Business Chat) is Apple's own official program — a distinct, branded entry-point experience with its own developer documentation and approved platform partners. As of this writing, GoHighLevel does not natively support it; a feature request on HighLevel's own public roadmap board is still asking for it to be added. <strong className="text-[#1A2236]">Ordinary consumer iMessage</strong> — the blue-bubble Messages app tied to a phone number and Apple ID — has no public Apple API for third parties at all. Every GHL-facing iMessage provider this article discusses delivers the second kind, by operating a genuine Apple device (or fleet of them) behind the scenes, not by calling an official Apple business endpoint.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-imessage-mac-iphone.png"
                  alt="GoHighLevel iMessage: Hardware, cloud, and managed setup comparison for Mac and iPhone requirements"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel iMessage: Hardware, cloud, and managed setup comparison for Mac and iPhone requirements</span>
              </div>
            </div>

            {/* Section: Why Do Some Integrations Need Mac */}
            <h2 id="why-do-some-integrations-need-mac" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Do Some GoHighLevel iMessage Integrations Need a Mac?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Because there's no public API to call, sending a real iMessage requires something running Apple's own Messages software, signed into an Apple ID Apple recognizes as capable of iMessage. Practically, that means a Mac (or in some architectures, an iPhone) actually running the Messages app, with the provider's software layer automating it and relaying messages to and from GoHighLevel. This isn't one provider's quirky choice — it's the direct consequence of Apple not exposing a conventional server-side API for consumer iMessage, a limitation multiple independent iMessage-API vendors state plainly on their own sites.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That said, exactly how a given provider implements this varies. Some have the customer run their own Mac. Some run the Mac themselves, physically or in a hosted environment, and never mention "Mac" to the customer at all. The underlying requirement — a real, signed-in Apple environment somewhere in the chain — doesn't disappear just because a provider's marketing doesn't say "Mac."
            </p>

            {/* Section: What Role Does iPhone Play */}
            <h2 id="what-role-does-iphone-play" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Role Does the iPhone Play in a GHL iMessage Setup?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not every architecture needs one, and this is where "no Mac required" claims can be misleading in the opposite direction. Some providers tie a sending number to a genuine iPhone rather than (or in addition to) a Mac; others run entirely on Mac-side infrastructure with no separate phone in the picture. What you actually need to own, versus what the provider owns and operates behind its service, is a question worth asking directly rather than assuming from the word "managed" or "cloud" — see the provider questions later in this article.
            </p>

            {/* Section: What Happens If Mac Offline */}
            <h2 id="what-happens-mac-offline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens If the Mac Goes Offline?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Depends entirely on whether that Mac is the live bridge your provider uses to actually send and receive, and whether the provider has built any redundancy around it. If it's a single, unmonitored device — your own or a bare-bones hosted one — an outage typically means outbound sends stop, inbound replies stop syncing, and any workflow step waiting on that channel doesn't complete until the device comes back. A managed provider with monitoring and failover may absorb a single device outage without you noticing; a self-run setup usually won't, unless you've built that resilience yourself.
            </p>

            {/* Section: What Happens If iPhone Offline */}
            <h2 id="what-happens-iphone-offline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens If the iPhone Is Offline?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Same logic, scoped to whichever architectures actually depend on a phone. If a provider's flow runs primarily through Mac-side infrastructure, an offline phone may not affect anything. If the phone is part of the active send/receive path, its unavailability behaves the same way a Mac outage does: messages queue or fail, depending on what the provider has built, until connectivity returns. Don't assume every setup fails the same way — ask the specific provider what "device offline" actually does to messages already in flight.
            </p>

            {/* Section: What Happens to Workflows */}
            <h2 id="what-happens-workflows-unavailable" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens to GoHighLevel Workflows When iMessage Is Unavailable?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the distinction the rest of this article depends on: <strong className="text-[#1A2236]">workflow execution and message delivery are not the same event, and treating them as one is how people misdiagnose the problem.</strong> A workflow can run its trigger, its conditions, and reach a "send iMessage" action completely correctly — and the failure can still happen one layer downstream, at the provider's infrastructure, with nothing wrong in GoHighLevel at all.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Example:</strong> a lead submits a form at 10:00 AM. The workflow is supposed to send an iMessage at 10:01. The Mac or messaging bridge behind the provider is offline. The trigger fires, the workflow executes, the action runs — and the message never leaves the provider's side. If you only look at the workflow and assume it "didn't work," you'll spend time rebuilding a trigger that was never broken. <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">Confirming whether GoHighLevel actually enrolled the contact and executed the action</Link> is the first thing to check — if it did, the failure is in the messaging layer, not the workflow, and <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-[#0E9BF0] hover:underline">a workflow that never triggered in the first place</Link> is a different problem entirely from one that ran but couldn't deliver.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Only assume retries or fallback exist if your specific provider documents them — don't assume every integration silently recovers a failed send.
            </p>

            {/* Section: Option 1 */}
            <h2 id="option-1-run-yourself" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Option 1: Run the iMessage Infrastructure Yourself
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Some providers — GoGHL.ai is a current example — are explicit that the customer runs their own Mac and Apple ID, with the integration layer connecting that device into GoHighLevel. This means you own the hardware, the network connection, the power and uptime, the macOS updates, and the account security, and you're the one who notices and fixes it when something breaks.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Advantages:</strong> direct control over the environment, no recurring infrastructure fee beyond the integration itself, full visibility into what's actually running.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Tradeoffs:</strong> hardware cost, your own uptime responsibility, your own monitoring, and your own troubleshooting when the device, network, or Apple account has a problem.
            </p>

            {/* Section: Option 2 */}
            <h2 id="option-2-cloud-mac" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Option 2: Use a Cloud or Hosted Mac
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A cloud Mac is still a real Mac — you're outsourcing where it physically sits and who racks it, not replacing it with a plain API. GoGHL.ai, for instance, explicitly partners with a separate provider, HostMyApple, specifically so customers can run the required macOS environment without buying physical hardware. The integration still depends on that hosted Mac being available; you've changed who's responsible for the box, not eliminated the box.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Benefits:</strong> no physical device on your desk, generally easier remote access and centralized management, potentially simpler scaling than buying multiple physical Macs.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Tradeoffs:</strong> a recurring hosting cost, dependency on that hosting provider's own uptime, and a support relationship that now involves two companies (the iMessage integration and the Mac host) instead of one.
            </p>

            {/* Section: Option 3 */}
            <h2 id="option-3-managed-service" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Option 3: Use a Managed iMessage Service
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Providers like Sendara and Sendblue sell iMessage as a service outright: you get a number and a working channel, and the provider is responsible for whatever device infrastructure sits behind it — Mac, phone, or otherwise — without exposing that detail to you as a setup step. Sendara, for example, describes provisioning a dedicated line within 24 hours with no Mac purchase on the customer's side; Sendblue positions itself similarly at larger scale, citing SOC 2 compliance and real Apple devices operated on the customer's behalf.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">You give up</strong> some visibility into exactly how the message gets sent. <strong className="text-[#1A2236]">You gain</strong> a provider whose job is keeping that infrastructure running, which matters more as you add lines across multiple client sub-accounts than it does for a single number.
            </p>

            {/* Section: How Do Setups Compare */}
            <h2 id="how-do-setups-compare" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do Hardware, Cloud, and Managed Setups Compare?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Own Hardware</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Cloud Mac</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Managed Service</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.factor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ownHardware}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cloudMac}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.managedService}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: What Does It Cost */}
            <h2 id="what-does-it-cost" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Does GoHighLevel iMessage Actually Cost?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Treat published provider prices as a snapshot, not a permanent number — verify current pricing directly before budgeting. As examples only, as published at the time of this research: Sendara lists $249/month for a first line and $149/month for each additional line, with no per-message fee; Blooio publishes volume pricing that drops to roughly $195/line at six or more lines. Neither figure should be read as representative of the category — they're single data points, not averages.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Self-managed costs break down into hardware purchase, electricity and connectivity, your own labor for maintenance, and eventual replacement. Cloud adds a hosting subscription on top of whatever the integration itself charges. Managed consolidates everything into one recurring per-line fee, usually with setup or onboarding costs on top. Compare the total categories for your situation rather than a single headline number from any one provider.
            </p>

            {/* Section: What Changes for Agency */}
            <h2 id="what-changes-agency-multiple-subaccounts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Changes When an Agency Has Multiple GHL Sub-Accounts?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Running iMessage for one business and running it across a dozen client sub-accounts are different operational problems. An agency needs to think about whether numbers and Apple identities are isolated per client or shared, who owns each line if a client leaves, how onboarding a new sub-account actually works, and who a client's contact actually reaches if something breaks. Some providers explicitly market that a single piece of their infrastructure can serve multiple sub-accounts — treat that as a specific claim about that provider's architecture, not a general rule that applies to every iMessage integration.
            </p>

            {/* Section: Reliability Checklist */}
            <h2 id="reliability-checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel iMessage Reliability Checklist
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before going live, confirm: the device or hosted environment is actually online and monitored; the Apple ID and account security are in good standing; the correct sub-account has the conversation provider installed and set correctly; the relevant workflow triggers and send actions are configured and tested; inbound replies are confirmed to land back in the GHL conversation thread; and you know, specifically, what your provider does when the device goes offline — because "it depends" isn't a plan.
            </p>

            {/* Section: 12 Questions */}
            <h2 id="12-questions" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              12 Questions to Ask an iMessage Provider Before You Connect It to GHL
            </h2>

            <div className="space-y-2 mb-6">
              {questionsData.map((question, idx) => (
                <div key={idx} className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-3 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                  <p className="text-sm text-[#1A2236] leading-relaxed">{question}</p>
                </div>
              ))}
            </div>

            {/* Section: Troubleshooting Matrix */}
            <h2 id="troubleshooting-matrix" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Troubleshooting Matrix
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Symptom</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Layer to Investigate</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">First Check</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.symptom}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.layerToInvestigate}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.firstCheck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Compliance and Responsible Use */}
            <h2 id="compliance-responsible-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Compliance and Responsible Use
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              None of this changes because the channel is iMessage instead of SMS: get consent before messaging someone, honor opt-outs, and follow the provider's and Apple's own usage terms. iMessage's lack of carrier-level spam filtering is a genuine deliverability advantage some providers cite — it is not a reason to skip the same consent and opt-out practices that apply to any other outbound channel.
            </p>

            {/* Section: The Takeaway */}
            <h2 id="the-takeaway" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Takeaway
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel doesn't send iMessages on its own — a third-party conversation provider does, and that provider's architecture determines whether you're buying hardware, renting it, or handing the whole problem to someone else. None of the three models is universally right. The one that fits depends on how much infrastructure responsibility you actually want, how many client accounts you're running it across, and how well you understand what happens the moment the device behind your chosen provider goes offline. Ask the twelve questions above before you sign up for any of them — and once the channel is working reliably, <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">that's the point where it's worth thinking about the rest of the workflow architecture around it</Link>, not before.
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

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still unsure which iMessage setup is right for your GHL account?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free consultation</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Enrollment History & Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? Find the Fix →</Link>
                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Services →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Choosing Your iMessage Setup?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help agencies evaluate iMessage providers and set up the right architecture for their GHL accounts.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Consultation
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience evaluating iMessage providers and setting up messaging infrastructure for GHL accounts. All integration details verified against official documentation and provider claims as of September 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
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