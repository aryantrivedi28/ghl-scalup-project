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
  AlertOctagon,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Info,
  FileCheck,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function A2POptInLanguageTemplatesClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-opt-in',
        'not-consent',
        'requirements',
        'marketing-vs-nonmarketing',
        'examples',
        'form-elements',
        'methods',
        'describe-flow',
        'chat-vs-manual',
        'privacy-terms',
        'stop-help',
        'setting-up',
        'dba-subdomain',
        'mistakes',
        'existing-contacts',
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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const faqs = [
    {
      q: "Do I need a checkbox for A2P consent?",
      a: "For web opt in, HighLevel's guidance expects separate, unchecked and optional consent checkboxes. Keyword, paper and other methods need a clear call to action with the same disclosures."
    },
    {
      q: "Can I pre check the box or require consent?",
      a: "No. HighLevel says checkboxes cannot be pre selected and consent cannot be required to submit the form, even if the phone number is required."
    },
    {
      q: "Do I need separate marketing and non marketing consent?",
      a: "Yes when you send both. Contacts must be able to opt into one, both or neither."
    },
    {
      q: "Is entering a phone number enough?",
      a: "No. HighLevel states that collecting a phone number does not by itself establish consent to receive SMS."
    },
    {
      q: "Can I use verbal consent, a paper form or a QR code?",
      a: "HighLevel lists these as consent methods you can register through Manual Setup. Each still needs the disclosures and accessible proof of what the contact saw or heard."
    },
    {
      q: "What if my opt in form is behind a login?",
      a: "Reviewers cannot sign in. Provide accessible proof, such as a screenshot uploaded to HighLevel Media Storage with a shareable link."
    },
    {
      q: "Does my Privacy Policy need SMS language?",
      a: "Yes. HighLevel specifies a mobile data non sharing statement and says the policy should not mention lead selling or affiliation."
    },
    {
      q: "Can I text existing customers once my Campaign is approved?",
      a: "Only those who gave valid consent for that type of message. Registration is separate from consent."
    },
    {
      q: "What if I change my consent wording after approval?",
      a: "HighLevel says your Campaign details, consent flow and live messaging should stay aligned. I found no documented rule for post approval changes, so if your wording or flow changes materially, contact HighLevel Support before relying on the existing approval."
    },
    {
      q: "How do agencies handle this for clients?",
      a: "Each client business needs its own consent flow and evidence. See A2P registration for GoHighLevel agencies."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-opt-in', title: 'Why Opt In Language Matters for A2P Registration' },
    { id: 'not-consent', title: 'A2P Registration Is Not the Same as Consent' },
    { id: 'requirements', title: 'Current GoHighLevel A2P Opt In Requirements' },
    { id: 'marketing-vs-nonmarketing', title: 'Marketing vs Non Marketing SMS Consent' },
    { id: 'examples', title: 'Adapted Opt In Language Examples' },
    { id: 'form-elements', title: 'What an A2P Opt In Form Should Include' },
    { id: 'methods', title: 'A2P Opt In Methods Compared' },
    { id: 'describe-flow', title: 'How to Describe Your Opt In Flow During Campaign Registration' },
    { id: 'chat-vs-manual', title: 'Chat Widget Setup vs Manual Setup' },
    { id: 'privacy-terms', title: 'Privacy Policy and Terms and Conditions Requirements' },
    { id: 'stop-help', title: 'Opt In Confirmation, STOP and HELP' },
    { id: 'setting-up', title: 'Setting Up the Consent Experience in GoHighLevel' },
    { id: 'dba-subdomain', title: 'DBA and Subdomain Considerations' },
    { id: 'mistakes', title: 'Common Opt In Mistakes That Cause Rejection' },
    { id: 'existing-contacts', title: 'Can You Text Existing Contacts After A2P Approval?' },
    { id: 'checklist', title: 'A2P Opt In Checklist' },
    { id: 'faq', title: 'A2P Opt In Language FAQ' }
  ];

  const requirements = [
    { requirement: 'Separate consent by message type', what: 'Marketing and non marketing consent are distinct choices so a contact can opt into one, both or neither', type: 'HighLevel and carrier review' },
    { requirement: 'No pre selected checkboxes', what: 'Consent boxes must be unchecked. The contact takes an affirmative action', type: 'HighLevel and carrier review' },
    { requirement: 'Consent stays optional', what: 'Even when the phone number is required, checking the consent box cannot be required to submit the form. This applies to forms, surveys, quizzes, chat widgets and calendar bookings', type: 'HighLevel and carrier review' },
    { requirement: 'Act on the choices made', what: 'After submission, communicate only through the channels the contact selected', type: 'HighLevel' },
    { requirement: 'Policy links in the footer', what: 'Privacy Policy and Terms and Conditions links must be visible in the footer of every opt in form, accessible without extra steps and not obscured by pop ups', type: 'HighLevel and carrier review' },
    { requirement: 'Consistent contact details', what: 'Contact information in the policies should match what you submitted in Brand registration', type: 'HighLevel' }
  ];

  const optInMethods = [
    { method: 'Website form', how: 'Contact ticks an unchecked SMS consent box next to the form', evidence: 'A public URL showing the form', failure: 'Form behind a login, or unpublished' },
    { method: 'HighLevel Chat Widget', how: 'Consent choices inside a HighLevel generated widget with locked disclosures', evidence: 'The widget live on your public page', failure: 'Widget not installed or page not public' },
    { method: 'Text keyword', how: 'Contact texts a keyword to a number after seeing a call to action', evidence: 'The call to action with program name, keyword, message types, frequency, rates, HELP and STOP', failure: 'Call to action missing required disclosures' },
    { method: 'QR code or offline material', how: 'Contact scans or reads printed material with the disclosures', evidence: 'Hosted image of what the contact sees', failure: 'No accessible proof' },
    { method: 'Paper form', how: 'Contact signs a printed form with the consent language', evidence: 'Hosted image of the form', failure: 'Proof not provided or not viewable' },
    { method: 'Verbal consent', how: 'Agent reads a consent script', evidence: 'Documented script and how the process is recorded', failure: 'Script lacks disclosures or is not documented' },
    { method: 'Lead form or other third party form', how: 'Contact opts in inside another platform\'s form', evidence: 'Evidence of what the contact sees before consenting', failure: 'Consent language not visible or not specific' }
  ];

  const setupSteps = [
    'Place the phone field and the consent choices as separate decisions, with the consent statement next to the checkbox.',
    'Keep marketing and non marketing consent as separate, unchecked, optional boxes.',
    'Put visible Privacy Policy and Terms links in the footer, not hidden behind pop ups.',
    'Make sure your automations respect what each contact chose. HighLevel says to communicate only through the channels selected.',
    'Keep a record of the consent you collected: the submission, the checkbox selections, the source page and date, and a copy of the wording in use. HighLevel does not prescribe a record format, so treat this as good operating practice.'
  ];

  const mistakesList = [
    'Pre selected consent checkbox, or consent required to submit',
    'Marketing and non marketing consent combined in one box',
    'Generic wording that does not match the Campaign description',
    'Missing business name, frequency, rates disclosure, HELP or STOP',
    'A call to action or opt in flow the reviewer cannot verify, such as a form behind a login',
    'Only one of several opt in methods described',
    'Privacy Policy or Terms missing, not linked in the form footer, or containing lead sharing language',
    'Website, DBA or contact details that do not match the Brand'
  ];

  const checklistItems = [
    'Business name in the consent text matches your Brand or declared DBA',
    'Message types in the checkbox match your Campaign description and samples',
    'Marketing and non marketing consent are separate',
    'Checkboxes are unchecked by default and optional',
    'Frequency and message and data rates disclosures are present',
    'HELP and STOP instructions are present',
    'Privacy Policy and Terms links are visible in the form footer',
    'Privacy Policy includes the required mobile data statement and no lead sharing language',
    'Terms cover business identity, opt out, support, frequency, rates, carrier liability and the Privacy Policy link',
    'Opt in is publicly viewable, or accessible proof is hosted without a login',
    'Every opt in method used is described in the Campaign',
    'Sample messages include your business name and opt out language',
    'Automations respect each contact\'s consent choices'
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
          <span className="text-[#1A2236] font-medium">A2P Opt In Language Templates</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Opt In Language</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Templates</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Opt In Language for GoHighLevel:<br />
            <span className="text-[#F8D000]">Requirements and Examples</span>
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
              A2P opt in language is the wording, form design and evidence that show a contact knowingly agreed to receive a specific kind of text message from your business. In GoHighLevel the current rules are: use a separate, unchecked and optional consent checkbox for marketing and for non marketing messages, name your business, describe the message types you actually send, disclose frequency and message and data rates, include HELP and STOP instructions, and link your Privacy Policy and Terms and Conditions in the form footer. What the contact agrees to must match your Campaign description and sample messages.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Everything below is HighLevel's registration and carrier review guidance, not legal advice, and it does not guarantee approval. The wording examples in this article are adapted examples, not HighLevel's official text.
            </p>
          </div>

          {/* CTA Button 1 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get A2P Compliance Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#examples"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Language Examples
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
                5+ years GHL experience · 200+ A2P registrations handled globally. All technical details verified as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">A2P Opt In Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P opt in compliance for agencies and their clients form language, Privacy Policy updates, and campaign registration.</p>
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

            {/* Section: Why Opt In Language Matters */}
            <h2 id="why-opt-in" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Why Opt In Language Matters for A2P Registration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Campaign review is really a consistency check. HighLevel describes it as comparing who is sending messages, what is being sent, why recipients receive them and how they consented. Your opt in language is the evidence for the last part. If it says something different from your Campaign description or sample messages, a reviewer cannot verify the program. The background on why registration exists is in <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>, and the field by field submission is covered in <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>. This page covers how the consent experience itself should be built.
            </p>

            {/* Section: A2P Registration Is Not the Same as Consent */}
            <h2 id="not-consent" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Registration Is Not the Same as Consent
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A phone number is not consent.</strong> HighLevel states that collecting a phone number does not by itself establish consent to receive SMS. The phone field and the consent choice are separate decisions, even when the number is required.</li>
              <li><strong className="text-[#1A2236]">Approval is not permission.</strong> A2P registration tells carriers who you are and what you plan to send. It does not authorize you to text every contact in your CRM. HighLevel's messaging guidance is to message only recipients who have valid consent and to honor opt outs.</li>
              <li><strong className="text-[#1A2236]">Platform rules are not law.</strong> The requirements below come from HighLevel's registration workflow and carrier review. Whether your practices meet broader legal obligations is a separate question for your own counsel.</li>
            </ul>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-opt-in-language-infographic.png"
                  alt="A2P Opt In Language for GoHighLevel: Requirements, consent checkbox examples, opt-in methods comparison, and compliance checklist"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P Opt In Language for GoHighLevel: Requirements, consent checkbox examples, opt-in methods comparison, and compliance checklist</span>
              </div>
            </div>



            {/* Section: Current Requirements */}
            <h2 id="requirements" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Current GoHighLevel A2P Opt In Requirements
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These points come from HighLevel's opt in guidance (updated July 30, 2026) and Campaign approval best practices (updated September 2, 2026):
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requirement</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What HighLevel says</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {requirements.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.requirement}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.what}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Marketing vs Non Marketing */}
            <h2 id="marketing-vs-nonmarketing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Marketing vs Non Marketing SMS Consent
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Marketing</strong> messages promote something: offers, discounts, sales. <strong className="text-[#1A2236]">Non marketing</strong> (informational) messages serve an existing relationship: appointment reminders, order updates, service notifications. HighLevel wants these consented to separately because they are different programs.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Specificity matters. HighLevel's guidance is that the checkbox should reference the same message types named in your Campaign description. If your description says appointment reminders and order updates, a checkbox that only says "non marketing messages" is too generic. Likewise a marketing checkbox should reference the promotions you actually send, such as offers or discounts, not just "marketing messages".
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Mixed programs</strong> need both consents. HighLevel's Chat Widget flow supports a Mixed message type that sets the Campaign use case to Low Volume Mixed and generates a widget with two independent, unchecked consent choices, described in its <a href="https://help.gohighlevel.com/support/solutions/articles/155000008722-mixed-use-case-support-for-chat-widget-flow" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Mixed use case guide</a>. Choose Mixed only when you genuinely send both kinds of message, and include a sample of each in your Campaign.
            </p>

            {/* Section: Examples */}
            <h2 id="examples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Adapted Opt In Language Examples
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each example below is an adapted example that contains the elements HighLevel expects. HighLevel publishes its own exact checkbox wording in its <a href="https://help.gohighlevel.com/support/solutions/articles/155000007237-how-to-get-your-phone-number-a2p-approved-in-2026" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">opt in compliance guide</a>. Compare against it and substitute your legal business name (or declared DBA) and your real message types. Do not copy these examples word for word without checking them against your own Campaign.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Marketing checkbox (adapted example)</h3>
            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="text-sm font-bold text-[#0E9BF0]">MARKETING CONSENT CHECKBOX</span>
                </div>
                <button
                  onClick={() => copyToClipboard(
                    'I agree to receive marketing text messages from [Business Name] about special offers and discounts at the phone number I provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out.',
                    'Marketing Checkbox'
                  )}
                  className="flex items-center gap-1 text-xs text-[#0E9BF0] hover:text-[#0B8CD8] transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  {copiedText === 'Marketing Checkbox' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed font-mono bg-white p-3 rounded-lg border border-[#DDE1E9]">
                I agree to receive marketing text messages from [Business Name] about special offers and discounts at the phone number I provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Non marketing checkbox (adapted example)</h3>
            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
                  <span className="text-sm font-bold text-[#25C97D]">NON MARKETING CONSENT CHECKBOX</span>
                </div>
                <button
                  onClick={() => copyToClipboard(
                    'I agree to receive text messages from [Business Name] about my appointments and service updates at the phone number I provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out.',
                    'Non Marketing Checkbox'
                  )}
                  className="flex items-center gap-1 text-xs text-[#25C97D] hover:text-[#1DB86E] transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  {copiedText === 'Non Marketing Checkbox' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed font-mono bg-white p-3 rounded-lg border border-[#DDE1E9]">
                I agree to receive text messages from [Business Name] about my appointments and service updates at the phone number I provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Keyword opt in call to action (illustrative)</h3>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed font-mono">
                Text JOIN to [number] to receive appointment reminders and service updates from [Business Name]. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. Privacy Policy and Terms: [URL].
              </p>
            </div>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Verbal consent script (illustrative)</h3>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed font-mono">
                May we text you appointment reminders and service updates from [Business Name] at this number? Messages vary in frequency, message and data rates may apply, and you can reply STOP at any time to opt out or HELP for help. Our Privacy Policy and Terms are at [URL].
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Notice what each contains: the business name, the type of messages, frequency, the rates disclosure, HELP and STOP, and where to find the policies. Keep marketing and non marketing consent in separate checkboxes, and keep policy acceptance out of the consent text.
            </p>

            {/* Section: What an A2P Opt In Form Should Include */}
            <h2 id="form-elements" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What an A2P Opt In Form Should Include
            </h2>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The business sending the messages, matching your Brand or declared DBA</li>
              <li>The type of messages the contact agrees to receive</li>
              <li>Message frequency information and a message and data rates disclosure</li>
              <li>HELP and STOP instructions</li>
              <li>Separate, unchecked and optional consent choices for marketing and non marketing</li>
              <li>Privacy Policy and Terms and Conditions links in the footer</li>
            </ul>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                <strong>Can the checkbox be required or pre checked?</strong> Neither. HighLevel says consent boxes cannot be pre selected and must stay optional.
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                <strong>Can one checkbox cover email and SMS, or policy acceptance and SMS?</strong> HighLevel's Campaign guidance says the SMS opt in checkbox should be separate from Privacy Policy and Terms acceptance, and its rejection codes flag consent folded into mandatory terms.
              </p>
            </div>



            {/* Section: A2P Opt In Methods Compared */}
            <h2 id="methods" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Opt In Methods Compared
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel supports several ways of collecting consent. Whatever you choose, describe every method you use during Campaign registration and give reviewers a way to verify each one.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Method</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How consent happens</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Evidence reviewers need</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Common failure</th>
                  </tr>
                </thead>
                <tbody>
                  {optInMethods.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.method}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.how}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.evidence}</td>
                      <td className="py-3 px-3 text-[#DC3545]">{item.failure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For paper forms, forms behind a login, unpublished forms, QR flows and other offline methods, HighLevel says to provide accessible proof of what the contact sees before consenting, such as a screenshot uploaded to HighLevel Media Storage with a shareable link, and not a link that requires the reviewer to sign in.
            </p>

            {/* Section: How to Describe Your Opt In Flow */}
            <h2 id="describe-flow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Describe Your Opt In Flow During Campaign Registration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In the Campaign, you explain how contacts opt in, and HighLevel says this must match your use case and your opt in message. Think of the whole submission as one chain:
            </p>
            <p className="text-sm md:text-base text-[#1A2236] font-semibold leading-relaxed mb-4">
              opt in method, then consent language, then Campaign description, then sample messages, then the messages you really send.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Every link should describe the same program.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Say where the contact meets the opt in, what they see, and what they do.</li>
              <li>Reference the same message types in the description, the checkbox wording and the samples.</li>
              <li>If you use more than one method, describe each one, since one form screenshot does not prove every path.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The field by field walkthrough is in <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>.
            </p>

            {/* Section: Chat Widget Setup vs Manual Setup */}
            <h2 id="chat-vs-manual" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Chat Widget Setup vs Manual Setup
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Chat Widget Setup</strong> opens by default. HighLevel generates the widget, the consent language with STOP, HELP, frequency and rate disclosures, the sample messages and the opt in description, and many of those fields are locked so the live widget matches the application. You still need to read what it generated against your real business, install the widget on a live public page, and confirm the website checklist. See HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000008307-pre-built-a2p-campaign-registration-with-chat-widget" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Chat Widget guide</a>. HighLevel's documentation differs on whether every Brand type and use case is available in this flow, so check what your Trust Center offers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Manual Setup</strong> is for consent collected another way: an existing website form, paper form, lead form, QR code, kiosk or verbal process. You write the opt in description and message yourself, so this is where mismatches usually creep in.
            </p>

            {/* Section: Privacy Policy and Terms */}
            <h2 id="privacy-terms" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Privacy Policy and Terms and Conditions Requirements
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel treats both pages as mandatory in the footer of every opt in form. Its guidance covers these points, and its <a href="https://help.gohighlevel.com/support/solutions/articles/155000007237-how-to-get-your-phone-number-a2p-approved-in-2026" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">opt in compliance guide</a> contains the exact required text, so check your policies against it rather than against a paraphrase:
            </p>
            <ul className="space-y-3 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Privacy Policy:</strong> it should include the mobile data non sharing statement HighLevel specifies, meaning mobile opt in information is not shared with third parties or affiliates for marketing or promotional purposes, with support subcontractors permitted. It should not mention affiliation, or the selling or buying of leads.</li>
              <li><strong className="text-[#1A2236]">Terms and Conditions:</strong> they should identify your business and describe the messages, explain how to opt out and get help, disclose message frequency and the message and data rates notice, include a carrier liability statement, and link to your Privacy Policy.</li>
              <li><strong className="text-[#1A2236]">Consistency:</strong> contact details in both pages should match your Brand registration.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel offers sample Privacy Policy and Terms pages, and says they are not comprehensive and should be reviewed by your own legal counsel. A short SMS paragraph does not make a Privacy Policy legally complete.
            </p>

            {/* Section: Opt In Confirmation, STOP and HELP */}
            <h2 id="stop-help" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Opt In Confirmation, STOP and HELP
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Consent language shown before opt in and messages sent after opt in are separate things. Before opt in, the disclosures above appear with the consent choice. After opt in and in response to keywords, HighLevel's guidance for review is:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">STOP response:</strong> acknowledge the request, identify your business, and confirm no more messages will be sent.</li>
              <li><strong className="text-[#1A2236]">HELP response:</strong> identify your business and provide a valid support method, such as a phone number or email address.</li>
              <li>The HELP and STOP behavior you describe in the Campaign must match what actually happens.</li>
              <li>Include opt out language such as Reply STOP to unsubscribe in your sample messages.</li>
            </ul>

            {/* Section: Setting Up the Consent Experience */}
            <h2 id="setting-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Setting Up the Consent Experience in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel does not lay out one universal click path for building consent into every form, survey and calendar, so this section stays at the level HighLevel's documentation supports. On any surface that collects a phone number, whether a form, survey, quiz, chat widget or calendar booking:
            </p>

            <div className="space-y-3 mb-6">
              {setupSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If your Campaign includes automated follow up, our <Link href="/services/campaign-automation" className="text-[#0E9BF0] hover:underline">Email, SMS and WhatsApp automation service</Link> covers building those flows around consent.
            </p>

            {/* Section: DBA and Subdomain Considerations */}
            <h2 id="dba-subdomain" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              DBA and Subdomain Considerations
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">DBA:</strong> if you message under a different name than your legal entity, HighLevel says to state that in the Campaign description and keep the website, policies and the business name in the checkboxes consistent with it. The DBA should also be clear in the site header or footer.</li>
              <li><strong className="text-[#1A2236]">Subdomain opt in pages:</strong> subdomains are allowed, but reviewers need to see how the subdomain relates to your main brand and how contacts find the opt in page. Without a visible path, it can look like a compliance page that no real customer ever sees.</li>
            </ul>

            {/* Section: Common Opt In Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Opt In Mistakes That Cause Rejection
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These reflect the opt in related problems HighLevel documents. For the full troubleshooting process, see <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected in GoHighLevel</Link> and the <Link href="/blog/a2p-error-codes-explained" className="text-[#0E9BF0] hover:underline">A2P error codes</Link> guide.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              {mistakesList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Section: Can You Text Existing Contacts */}
            <h2 id="existing-contacts" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Text Existing Contacts After A2P Approval?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Approval of your Campaign does not turn every CRM contact into an opted in recipient. Contacts imported from lists, previous customers who never agreed to text messages, and people who simply submitted a form without an SMS consent choice are not covered by your registration. Text only people who gave valid consent for the type of message you are sending, and honor opt outs. Whether older contacts meet legal consent standards is a question for your own counsel.
            </p>


            {/* Section: A2P Opt In Checklist */}
            <h2 id="checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Opt In Checklist
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
              A2P Opt In Language FAQ
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
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected in GoHighLevel →</Link>
                <Link href="/blog/a2p-error-codes-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P Error Codes Explained →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need your A2P forms and registration set up correctly?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration end to end. Form opt in language, Privacy Policy update, campaign registration, and rejection troubleshooting all managed for agencies and their clients.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations handled globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                This guide was checked against HighLevel's opt in compliance guide, Campaign Approval Best Practices, Campaign Registration guide, Chat Widget guide and A2P overview, current as of September 2026. It is not legal advice. Requirements change, so confirm against your Trust Center.
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