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
  Lightbulb,
  CheckCircle2,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Shield,
  FileCheck,
  Info,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function A2PRegistrationForAgenciesClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-means',
        'separate-registration',
        'client-vs-agency',
        'collect-from-client',
        'limits',
        'workflow',
        'scale',
        'saas-mode',
        'billing',
        'mistakes',
        'rejected',
        'phone-moves',
        'checklist',
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
      q: "Can one A2P Brand cover multiple clients?",
      a: "No. A Brand represents one legal business, so separate clients need separate Brands, each registered in its own sub-account."
    },
    {
      q: "Is A2P registration at the agency level or sub-account level?",
      a: "Sub-account level. Registration and status appear in each sub-account's Trust Center, and A2P status does not travel with a phone number."
    },
    {
      q: "Can sub-accounts for the same business share a registration?",
      a: "I found no HighLevel documentation describing that. Sharing has been requested as a feature, so confirm in your Trust Center before assuming it works."
    },
    {
      q: "Does A2P registration happen automatically in SaaS Mode?",
      a: "No. Provisioning can connect the phone system, but the Brand and Campaign still have to be registered for each sub-account."
    },
    {
      q: "Can I mark up A2P fees for clients?",
      a: "HighLevel's billing guide describes a fixed 5% markup on A2P pass through charges when re-billing is enabled, with your configured re-billing amount applied on top. Your own service fee is separate. Check your agency billing before quoting."
    },
    {
      q: "Does an approved registration move with a phone number?",
      a: "No. Within an agency, reattach the Brand and Campaign after moving a number. Between Twilio and LC Phone the registration has to be redone."
    },
    {
      q: "Do new numbers need a new registration?",
      a: "New numbers need to be linked to the approved Campaign and show A2P Verified before sending. Check the label whenever numbers are added."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-means', title: 'What A2P Registration Means for an Agency' },
    { id: 'separate-registration', title: 'Does Each Client Need a Separate A2P Registration?' },
    { id: 'client-vs-agency', title: 'What Belongs to the Client and What Belongs to the Agency' },
    { id: 'collect-from-client', title: 'What to Collect From Each Client Before You Register' },
    { id: 'limits', title: 'Limits That Affect Agencies Registering Many Clients' },
    { id: 'workflow', title: 'A Repeatable Workflow for Registering Multiple Clients' },
    { id: 'scale', title: 'How to Manage A2P Registrations at Scale' },
    { id: 'saas-mode', title: 'A2P Registration and GoHighLevel SaaS Mode' },
    { id: 'billing', title: 'A2P Billing and Client Rebilling for Agencies' },
    { id: 'mistakes', title: 'Agency Mistakes That Cause Registration Problems' },
    { id: 'rejected', title: 'What to Do When a Client Registration Is Rejected' },
    { id: 'phone-moves', title: 'What Happens When a Client Changes Phone Systems or Sub-Accounts' },
    { id: 'checklist', title: 'Agency A2P Registration Checklist' },
    { id: 'faq', title: 'A2P Registration for Agencies FAQ' }
  ];

  const entityRoles = [
    { entity: 'Agency', role: 'Manages the HighLevel environment, phone system settings and billing. Coordinates registrations but is not the sender of a client\'s messages' },
    { entity: 'Client business', role: 'The legal business whose messages are being sent. Its identity is what the Brand represents' },
    { entity: 'Sub-account', role: 'Where registration is completed and tracked, in Settings, Phone System, Trust Center' },
    { entity: 'Brand', role: 'The verified business identity: legal name, registration number, address, contact' },
    { entity: 'Campaign', role: 'The registered messaging use case, sample messages, website and consent process' },
    { entity: 'Phone number', role: 'Must be linked to an approved Campaign before A2P messages are sent' }
  ];

  const clientVsAgency = [
    { client: 'Exact legal business name and registration number', agency: 'Intake, validation against official records, and data entry' },
    { client: 'Registered business address and authorized contact', agency: 'Trust Center submission for each sub-account' },
    { client: 'A live website that identifies the business', agency: 'Checking that the site, Brand and Campaign tell the same story' },
    { client: 'The real messaging purpose and how contacts opt in', agency: 'Drafting the description and sample messages from what the client actually sends' },
    { client: 'Approval of what is submitted in their name', agency: 'Status tracking, number linking and post approval testing' },
    { client: 'Payment responsibility, as agreed in your contract', agency: 'Billing setup and clear separation of registration fees from your service fee' }
  ];

  const collectFromClient = [
    { title: 'Business identity:', desc: 'exact legal name, accepted registration number or Tax ID, business type and industry, registered address and region.' },
    { title: 'Authorized contact:', desc: 'name, reachable phone, monitored email, job title and position. This should be someone who can answer questions about the business if carriers verify it.' },
    { title: 'Website:', desc: 'live, public and matching the Brand, with a visible business name and contact details.' },
    { title: 'Messaging purpose:', desc: 'the use case, a plain description of what is sent, and realistic sample messages.' },
    { title: 'Consent:', desc: 'the actual opt in method, consent language, frequency disclosure, HELP and STOP information, Privacy Policy and Terms and Conditions.' }
  ];

  const agencyLimits = [
    { limit: 'Contact email', says: 'Each business should have its own unique contact person. Avoid using the same email address for more than five Brands', scope: 'HighLevel guidance' },
    { limit: 'Contact phone', says: 'Do not use the same number for more than five Brands, and it must be reachable', scope: 'HighLevel guidance' },
    { limit: 'Sole Proprietor OTP number', says: 'One US or Canada mobile number can verify up to three Sole Proprietor Brands. VoIP, LeadConnector and other CPaaS numbers are not accepted', scope: 'Carrier limit, per HighLevel' },
    { limit: 'Sole Proprietor numbers', says: 'One phone number per Campaign. Standard Brands support multiple numbers', scope: 'Brand type' },
    { limit: 'Brands per EIN', says: 'Registering more Brands than allowed against one EIN returns error 30898. HighLevel does not publish the ceiling in the articles I reviewed', scope: 'TCR level, surfaced in HighLevel' },
    { limit: 'Identity verification', says: 'Persona verification is generally completed once per sub-account. Email OTP allows three attempts and two resends', scope: 'HighLevel workflow' }
  ];

  const workflowSteps = [
    { step: 'Confirm A2P applies.', desc: 'It applies to US bound messages from standard local numbers. Toll Free numbers use a separate verification, compared in Toll Free vs A2P 10DLC, and Canadian scenarios are in A2P 10DLC for Canadian numbers.' },
    { step: 'Run your intake.', desc: 'Use one standard form for every client so no registration starts with gaps.' },
    { step: 'Validate before submitting.', desc: 'Compare legal name, registration number and address against official records, confirm the website is live, and check that the use case, description and samples describe the real messaging.' },
    { step: 'Prepare the sub-account.', desc: 'Confirm the phone system is connected and the client\'s numbers are in place. If your sub-accounts have re-billing off, note that HighLevel\'s default phone preferences let you control whether sub-account users can submit A2P registration in that case.' },
    { step: 'Register the Brand', desc: 'in Settings, Phone System, Trust Center. The process is in the Brand Registration guide.' },
    { step: 'Register the Campaign', desc: 'once the Brand is eligible. HighLevel has you run its compliance review and then submit, so do not assume approval of the Brand submits the Campaign for you. See A2P Campaign Registration in GoHighLevel.' },
    { step: 'Monitor the review.', desc: 'A Campaign stays Pending while under review. Do not create another Campaign just because it is slow.' },
    { step: 'Link and verify numbers.', desc: 'After approval, each number must be linked to the approved Campaign and show the green A2P Verified label. HighLevel\'s error 30034 guide covers the linking.' },
    { step: 'Test.', desc: 'Send a test message, confirm opt out behavior works, and keep the client\'s consent evidence on file.' },
    { step: 'Record everything', desc: 'in your tracker, described next.' }
  ];

  const trackerFields = [
    { field: 'Client and sub-account', record: 'Business name and sub-account name or location ID' },
    { field: 'Brand type and status', record: 'Standard or Sole Proprietor, plus current status' },
    { field: 'Campaign, use case and status', record: 'Pending, Rejected or Approved, matching what Trust Center shows' },
    { field: 'Numbers and link status', record: 'Which numbers exist and whether each shows A2P Verified' },
    { field: 'Authorized contact', record: 'Who it is, so contact reuse stays within HighLevel\'s guidance' },
    { field: 'Consent and website evidence', record: 'Opt in URL, policy page URLs and screenshots' },
    { field: 'Submission and approval dates', record: 'For follow up and reporting' },
    { field: 'Billing status', record: 'Who is paying, and whether re-billing is on' },
    { field: 'Issues and owner', record: 'Rejection reason, error code, who is fixing it' }
  ];

  const agencyMistakes = [
    'Registering the agency instead of the client. The Brand must be the business actually sending.',
    'Choosing Sole Proprietor for a business with a Tax ID. That path is only for businesses without one.',
    'Reusing contact details beyond HighLevel\'s guidance, or submitting an agency contact who cannot speak for the client\'s business.',
    'Submitting before the website and consent flow are ready. Reviewers compare all of it.',
    'Copying consent wording or policy pages between clients. Each must reflect that business\'s own flow.',
    'Assuming Campaign approval means numbers work. Each number must still be linked to the approved Campaign.',
    'Assuming A2P moves with a phone number or a snapshot. It does not, as the next sections show.',
    'Skipping tracking, so rejected or pending registrations go unnoticed until a client complains.'
  ];

  const phoneMoves = [
    { scenario: 'Moving numbers between sub-accounts in the same agency:', desc: 'HighLevel\'s Move Numbers guide says A2P status is at the sub-account level and does not move with the number, so reattach the correct Brand and Campaign afterward.' },
    { scenario: 'Moving from your own Twilio account to LC Phone:', desc: 'an A2P registration made through your own Twilio account does not migrate. The sub-account must register again in HighLevel Trust Center, and applicable fees apply again, per HighLevel\'s LC Phone migration guide.' },
    { scenario: 'Transferring a sub-account to another agency:', desc: 'HighLevel\'s sub-account transfer guide says eligible A2P registration stays with the numbers, while numbers on your own Twilio account do not transfer automatically. Our sub-account transfer article covers the wider process.' }
  ];

  const checklistItems = [
    'Client confirmed as a separate legal business, with US bound local number messaging',
    'Legal name, registration number and address verified against official records',
    'Brand type chosen correctly (Standard or Sole Proprietor)',
    'Authorized contact is the client\'s own, within HighLevel\'s reuse guidance',
    'Website live, public and matching the Brand',
    'Use case, description and samples describe the real messaging',
    'Opt in flow, Privacy Policy and Terms are client specific and reachable',
    'Client approved the submission and understands who pays what',
    'Brand approved, then Campaign submitted and monitored',
    'Every sending number linked and showing A2P Verified',
    'Test message sent and opt out checked',
    'Tracker row completed'
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
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
          <span className="text-[#1A2236] font-medium">A2P Registration for Agencies</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agencies</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Multiple Clients</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Registration for GoHighLevel Agencies:<br />
            <span className="text-[#F8D000]">Managing Multiple Client Accounts</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds delivered · Verified against GoHighLevel, Twilio, and The Campaign Registry documentation, September 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Each client business needs its own A2P 10DLC Brand and Campaign, registered from inside that client's sub-account in Trust Center. A Brand is the verified identity of one business, so an agency Brand cannot stand in for a set of unrelated clients, and HighLevel's documentation describes no agency wide registration that covers them all. For an agency, the real work is operational: collecting accurate information from every client, keeping contact details and consent evidence separate per business, tracking every registration to completion, and being clear with clients about who pays for what.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              This guide covers that operating layer. The step by step screens live in our <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">Brand Registration</Link> and <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">Campaign Registration</Link> guides, and this page links out wherever a topic has its own article.
            </p>
          </div>

          {/* CTA Button 1 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get A2P Registration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#limits"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Agency Limits
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* SIDEBAR */}
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
                5+ years GHL experience · 200+ A2P registrations handled globally across agency client portfolios. All technical details verified as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">A2P Agency Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P registration for agencies and their clients — intake process, EIN verification, brand and campaign registration, and rejection troubleshooting.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* MAIN CONTENT */}
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

            {/* Section: What A2P Registration Means for an Agency */}
            <h2 id="what-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What A2P Registration Means for an Agency
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P 10DLC is the carrier registration framework for business texts sent to US recipients from standard 10 digit local numbers. If the background is new, start with <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>. At agency scale the useful question is which entity owns what:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Entity</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Role in A2P registration</th>
                  </tr>
                </thead>
                <tbody>
                  {entityRoles.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.entity}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Does Each Client Need a Separate A2P Registration */}
            <h2 id="separate-registration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Does Each Client Need a Separate A2P Registration?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, for separate businesses. HighLevel describes a Brand as the legal business entity sending the messages, and registration is submitted from the sub-account where that business operates. Registering your own agency and sending clients' messages under it would misstate who is sending them, which is what registration exists to prevent.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">Two related points are less obvious.</strong>
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">One client, several Campaigns.</strong> A single sub-account can hold more than one Campaign under an approved Brand, each with its own use case, and different numbers can be linked to different Campaigns. HighLevel introduced this in its <a href="https://ideas.gohighlevel.com/changelog/multi-a2p-brand-and-campaign-support-with-additional-upgrades" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">multi Brand and Campaign update</a>. Extra Campaigns follow the pricing in the <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">fees guide</Link>.</li>
              <li><strong className="text-[#1A2236]">One business, several sub-accounts.</strong> Agencies often ask whether sub-accounts belonging to the same company, such as one per sales rep, can share a registration. I found no HighLevel documentation describing a way to share one Brand and Campaign across sub-accounts, and users have posted <a href="https://ideas.gohighlevel.com/lcphonesystem/p/ability-to-share-a2p-registration-with-subaccounts" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">feature requests for it</a>. Until HighLevel documents otherwise, plan on registering in each sub-account, and check your Trust Center before promising a client anything different.</li>
            </ul>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-registration-for-agencies-infographic.png"
                  alt="A2P Registration for GoHighLevel Agencies: Entity roles, client vs agency responsibilities, registration limits, and multi-client workflow"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P Registration for GoHighLevel Agencies: Entity roles, client vs agency responsibilities, registration limits, and multi-client workflow</span>
              </div>
            </div>

            {/* Section: What Belongs to the Client and What Belongs to the Agency */}
            <h2 id="client-vs-agency" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Belongs to the Client and What Belongs to the Agency
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Client provides or confirms</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Agency handles</th>
                  </tr>
                </thead>
                <tbody>
                  {clientVsAgency.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.client}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This split is a recommended operating model, not a HighLevel rule. What HighLevel does require is that the submitted details match the real business, so the client has to be the source of truth for identity and consent.
            </p>


            {/* Section: What to Collect From Each Client */}
            <h2 id="collect-from-client" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What to Collect From Each Client Before You Register
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's own preparation list groups what reviewers compare into five areas. Collect all of it before opening the sub-account, because a missing item mid registration usually means a repeat submission:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {collectFromClient.map((item, idx) => (
                <li key={idx}><strong className="text-[#1A2236]">{item.title}</strong> {item.desc}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For US Standard Brands, ask for the complete CP 575 or 147C letter rather than a typed name, because the legal name must match official records. Field level detail is in the <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">Brand Registration guide</Link>, and consent wording is covered in <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt in language and requirements</Link>. Do not submit guessed or incomplete information, and do not copy one client's consent wording or policy pages to another. Each business's website and consent flow must describe that business.
            </p>

            {/* Section: Limits That Affect Agencies */}
            <h2 id="limits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Limits That Affect Agencies Registering Many Clients
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These come from HighLevel's current Brand registration documentation unless stated. The first two are guidance rather than hard blocks, but they matter once you register many businesses.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Limit</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it says</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {agencyLimits.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.limit}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.says}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Two practical consequences follow. Use the client's own authorized representative and contact details wherever you can, instead of rotating agency email addresses or aliases to stay under a limit, because the contact must be verifiable for that business. And if a limit really does block a legitimate registration, ask HighLevel Support rather than working around it.
            </p>

            {/* Section: A Repeatable Workflow */}
            <h2 id="workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Repeatable Workflow for Registering Multiple Clients
            </h2>

            <div className="space-y-3 mb-6">
              {workflowSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h3 className="text-base font-bold text-[#1A2236]">{item.step}</h3>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section: How to Manage A2P Registrations at Scale */}
            <h2 id="scale" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Manage A2P Registrations at Scale
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Registration status and rejection details are shown inside each sub-account's Trust Center. I found no documented agency wide view that lists every sub-account's registration, so keep your own tracker and update it whenever a status changes. A workable version has one row per client sub-account:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Field</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to record</th>
                  </tr>
                </thead>
                <tbody>
                  {trackerFields.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.field}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.record}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Review anything Pending or Rejected on a regular schedule so registrations do not sit forgotten. The cadence is your call, since HighLevel publishes no fixed review time. Throughput and Trust Score matter once clients scale sending, and are covered in <Link href="/blog/a2p-trust-score-mps" className="text-[#0E9BF0] hover:underline">how Trust Score and MPS work</Link>.
            </p>



            {/* Section: A2P Registration and GoHighLevel SaaS Mode */}
            <h2 id="saas-mode" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Registration and GoHighLevel SaaS Mode
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If clients sign up through SaaS Mode and get sub-accounts automatically, A2P registration is still completed per sub-account in Trust Center. Provisioning can connect the phone system to new sub-accounts automatically, and that is a setting you control, but connecting a phone system is not the same as registering a Brand and Campaign.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Snapshots copy configuration such as funnels, forms and workflows. HighLevel's documentation does not describe a snapshot as carrying an approved registration, so treat every new client as needing their own Brand, Campaign and consent evidence. Build registration into onboarding, decide whether you run it for clients or guide them through it, and make the client's legal business details a required onboarding step. For the SaaS configuration itself, see our <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline">SaaS Mode setup guide</Link> and <Link href="/services/gohighlevel-saas-mode" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode service</Link>.
            </p>

            {/* Section: A2P Billing and Client Rebilling */}
            <h2 id="billing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Billing and Client Rebilling for Agencies
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The exact amounts live in our <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC fees guide</Link>. What agencies need here is who charges what, and what stays yours.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Registration and messaging charges:</strong> HighLevel's fee reference describes A2P registration, vetting and monthly Campaign fees as pass through charges from TCR, Twilio and carriers, with no HighLevel markup.</li>
              <li><strong className="text-[#1A2236]">The re-billing 5% markup:</strong> HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/48001223556-phone-system-pricing-billing-guide" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">LC Phone billing guide</a> separately describes a fixed 5% markup on pass through categories, including A2P registration fees and SMS and MMS carrier fees, applied at the sub-account level when re-billing is enabled. Your own configured re-billing amount is then applied on top of that. Configure it under Agency View, Reselling, Core Services. The two pages describe billing differently, so check what your agency account actually shows before quoting clients.</li>
              <li><strong className="text-[#1A2236]">Fees start on submission:</strong> the same guide says submitting a Campaign starts the one time and monthly fees regardless of the review outcome, and that deleting a Campaign stops future monthly charges. Resubmitting a rejected Campaign has been free since February 1, 2026.</li>
              <li><strong className="text-[#1A2236]">Your own service fee:</strong> anything you charge for handling registration is an agency service charge. It is not a TCR, carrier or HighLevel fee and should never be presented as one.</li>
            </ul>

            {/* Section: Agency Mistakes That Cause Registration Problems */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Agency Mistakes That Cause Registration Problems
            </h2>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {agencyMistakes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section: What to Do When a Client Registration Is Rejected */}
            <h2 id="rejected" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What to Do When a Client Registration Is Rejected
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              First establish what failed. A Brand problem is an identity problem, and a Campaign problem concerns the messaging program, so the two use different guides. Open every rejection reason under View required fixes and note the code before anyone edits anything.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Brand identity failures: <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Brand Rejected in GoHighLevel</Link>.</li>
              <li>Use case, description, sample message, consent or website failures: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected in GoHighLevel</Link>.</li>
              <li>A specific numbered code: <Link href="/blog/a2p-error-codes-explained" className="text-[#0E9BF0] hover:underline">A2P error codes</Link>.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you need HighLevel Support, gather the Brand and Campaign names and statuses, the exact rejection reason and error code, screenshots of the required fixes, the website and opt in URL, the use case and samples, the affected number, and the sub-account details. Tell the client what happened and get their confirmation before resubmitting anything in their name.
            </p>

            {/* Section: What Happens When a Client Changes Phone Systems */}
            <h2 id="phone-moves" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens When a Client Changes Phone Systems or Sub-Accounts
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P registration is tied to the sub-account, not to the phone number, so moves need a plan.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {phoneMoves.map((item, idx) => (
                <li key={idx}><strong className="text-[#1A2236]">{item.scenario}</strong> {item.desc}</li>
              ))}
            </ul>

            {/* Section: Agency A2P Registration Checklist */}
            <h2 id="checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Agency A2P Registration Checklist
            </h2>
            <div className="space-y-2 mb-6">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#5C6880]">{item}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              A2P Registration for Agencies FAQ
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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Rejected in GoHighLevel →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected in GoHighLevel →</Link>
                <Link href="/blog/a2p-error-codes-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P Error Codes Explained →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">How Trust Score and MPS Work →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Managing A2P registration across multiple clients?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration for your entire client base. Client intake process, EIN verification, brand registration, campaign submission, rejection troubleshooting managed per sub-account for every client.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations handled globally across agency client portfolios</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                This guide was checked against HighLevel's Registering Your A2P Brand, A2P registration overview, Phone System Pricing and Billing Guide, and its number move and sub-account transfer documentation, current as of September 2026. Requirements, fees and features change, so confirm what you see in your own Trust Center and agency billing before acting.
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