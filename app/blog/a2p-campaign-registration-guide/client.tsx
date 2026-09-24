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
  Lightbulb,
  Rocket,
  HeartHandshake,
  Search,
  Shield,
  Info,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function A2PCampaignRegistrationGuideClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-campaign',
        'brand-vs-campaign',
        'what-you-need',
        'choose-use-case',
        'how-to-register',
        'chat-widget-setup',
        'manual-setup',
        'write-description',
        'write-samples',
        'opt-in-consent',
        'policy-requirements',
        'after-submit',
        'number-linking',
        'if-rejected',
        'fees-agencies',
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
      q: "Do I need to register a Campaign after my Brand is approved?",
      a: "Yes. HighLevel says Campaign registration is required after Brand approval before you send SMS from standard 10 digit local numbers to US recipients."
    },
    {
      q: "Can I register a Campaign before my Brand is approved?",
      a: "No. The Brand must be approved or eligible to continue first. In a first time registration, HighLevel takes you into Campaign Details once the Brand section is ready."
    },
    {
      q: "Do I submit the Campaign manually?",
      a: "Yes. In HighLevel's current flow you run the compliance review and then submit the Campaign once the required checks pass."
    },
    {
      q: "How long does Campaign approval take?",
      a: "It varies, and HighLevel does not publish a fixed timeline. Your Campaign stays Pending until vetting finishes, so avoid resubmitting or creating duplicates."
    },
    {
      q: "Does approval guarantee my texts will be delivered?",
      a: "No. Carriers and registration partners make the final decision, and the sending number must be linked to the approved Campaign."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-campaign', title: 'What A2P Campaign Registration Is and How It Differs From Brand Registration' },
    { id: 'what-you-need', title: 'What You Need Before Starting A2P Campaign Registration' },
    { id: 'choose-use-case', title: 'How to Choose the Right Campaign Use Case' },
    { id: 'how-to-register', title: 'How to Register an A2P Campaign in GoHighLevel' },
    { id: 'chat-widget-setup', title: 'Chat Widget Setup' },
    { id: 'manual-setup', title: 'Manual Setup' },
    { id: 'write-description', title: 'How to Write a Campaign Description' },
    { id: 'write-samples', title: 'How to Write Sample Messages' },
    { id: 'opt-in-consent', title: 'Opt In and Consent Requirements for Campaign Registration' },
    { id: 'policy-requirements', title: 'Privacy Policy and Terms and Conditions Requirements' },
    { id: 'after-submit', title: 'What Happens After You Submit an A2P Campaign' },
    { id: 'number-linking', title: 'How Campaigns Connect to Phone Numbers' },
    { id: 'if-rejected', title: 'What to Do If Your Campaign Is Rejected' },
    { id: 'fees-agencies', title: 'Fees, Agencies and Number Types Outside This Guide' },
    { id: 'faq', title: 'A2P Campaign Registration FAQs' }
  ];

  const brandVsCampaign = [
    { aspect: 'Question it answers', brand: 'Who is sending the messages?', campaign: 'What are you sending, why, and how did recipients consent?' },
    { aspect: 'What you submit', brand: 'Legal business identity, registration number, address, contact details', campaign: 'Use case, description, sample messages, opt in method, policy pages, website' },
    { aspect: 'Comes first?', brand: 'Yes. It must be approved or eligible to continue', campaign: 'Follows the Brand' },
    { aspect: 'Where to learn it', brand: 'A2P Brand Registration in GoHighLevel', campaign: 'This guide' }
  ];

  const whatYouNeed = [
    { item: 'An approved Brand', when: 'Always', check: 'The Brand should represent the business that will actually send the messages' },
    { item: 'A live business website', when: 'Always', check: 'Publicly accessible, matches your Brand or declared DBA, and clearly shows the business name and contact details' },
    { item: 'Campaign use case', when: 'Always', check: 'Matches the messages you really send' },
    { item: 'Description and sample messages', when: 'Always', check: 'Consistent with the use case and with each other' },
    { item: 'A documented opt in method', when: 'Always', check: 'A reviewer can verify what a contact sees before agreeing' },
    { item: 'Privacy Policy and Terms and Conditions URLs', when: 'Requested in Manual Setup; the Chat Widget path runs website compliance checks', check: 'Publicly accessible pages that support SMS messaging' },
    { item: 'Supporting opt in evidence', when: 'When opt in is not publicly viewable', check: 'Needed for paper forms, forms behind a login, unpublished forms, QR flows and similar' },
    { item: 'Additional message details', when: 'Depends on your messages', check: 'Flags for links, phone numbers, age gated content or financial content can change what is required' }
  ];

  const useCases = [
    { useCase: 'Marketing', fits: 'Promotions, offers, launches and other marketing sent to people who opted in', watch: 'Requires documented consent for marketing' },
    { useCase: 'Customer Care', fits: 'Support conversations, service updates and issue resolution', watch: 'Not a home for promotions' },
    { useCase: 'Account Notifications', fits: 'Non promotional updates about an account, status or activity', watch: 'Keep offers out of the messages' },
    { useCase: 'Delivery Notifications', fits: 'Fulfilment and delivery status', watch: 'Only for actual delivery events' },
    { useCase: '2FA', fits: 'Verification codes and login security', watch: 'Must not contain marketing language' },
    { useCase: 'Mixed', fits: 'One messaging program that genuinely combines purposes, such as offers plus account updates', watch: 'Not a fallback when you are unsure' },
    { useCase: 'Low Volume Mixed', fits: 'Lighter Mixed programs that do not need high throughput', watch: 'Limited to the lowest throughput tier regardless of Trust Score' }
  ];

  const registrationSteps = [
    { step: 'Select your messaging volume.', desc: 'With a Tax ID you choose between the Low Volume Standard Brand and High Volume Standard Brand options, which differ in daily throughput and cost. Without a Tax ID, the only option is Single-number registration, which links one number that you can change later.' },
    { step: 'Choose your setup path.', desc: 'Campaign registration opens in Chat Widget Setup by default. If you collect consent another way, choose Switch to manual setup. You can return to the widget path later from the Campaign details panel.' },
    { step: 'Complete the path you chose.', desc: 'The two paths are described below.' },
    { step: 'Review the website compliance checklist.', desc: 'Confirm the checklist items, then select Review Application.' },
    { step: 'Run the compliance review and submit.', desc: 'If a check fails, fix it and select Review Again. You cannot submit until all required checks pass, and passing them prepares your Campaign for carrier review without guaranteeing approval.' }
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
          <span className="text-[#1A2236] font-medium">A2P Campaign Registration Guide</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Campaign Registration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Campaign Registration in GoHighLevel:<br />
            <span className="text-[#F8D000]">Step by Step Guide</span>
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
              A2P Campaign Registration is the step where you tell carriers <strong className="text-white">what you will text, why, and how recipients agreed to receive it</strong>. In GoHighLevel you complete it in Trust Center after your Brand is approved: choose a messaging volume, pick Chat Widget Setup or Manual Setup, describe your use case, add sample messages, document your opt in process, provide your policy pages, then run the compliance review and submit.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Carriers and their registration partners make the final decision, so the goal is a submission where your use case, description, sample messages, website and consent flow all tell the same story. Approval is not guaranteed, and your phone number must also be linked to the approved Campaign before the A2P route works.
            </p>
          </div>

          {/* CTA Button 1 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get A2P Campaign Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-register"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Registration Steps
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
                5+ years GHL experience · 200+ A2P registrations completed globally. All technical details verified as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">A2P Campaign Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P campaign registration for agencies and their clients use case selection, sample messages, opt in documentation, and full Trust Center walkthrough.</p>
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

            {/* Section: What Is Campaign Registration */}
            <h2 id="what-is-campaign" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What A2P Campaign Registration Is and How It Differs From Brand Registration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A Campaign is the registered description of one messaging program sent from a Brand. It sits on top of the wider A2P 10DLC framework, which we explain in <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>. This guide assumes you already know why registration exists and focuses on completing the Campaign.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Brand Registration</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Campaign Registration</th>
                  </tr>
                </thead>
                <tbody>
                  {brandVsCampaign.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-semibold text-[#1A2236]">{item.aspect}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.brand}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.campaign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The sequence in HighLevel is: Brand registration, Brand approval, Campaign registration, Campaign review, then messaging through a number that is linked to the approved Campaign. If your Brand is not ready, Campaign registration cannot proceed. If it was rejected, start with the <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P brand rejection guide</Link> instead.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-campaign-registration-infographic.png"
                  alt="A2P Campaign Registration in GoHighLevel: Brand vs Campaign registration, use case selection, setup paths, and opt-in requirements"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P Campaign Registration in GoHighLevel: Brand vs Campaign registration, use case selection, setup paths, and opt-in requirements</span>
              </div>
            </div>

            {/* Section: What You Need Before Starting */}
            <h2 id="what-you-need" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What You Need Before Starting A2P Campaign Registration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Gather these items first. Reviewers compare them against each other, so it is easier to align them before you open the form than to correct them after a rejection.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">When required</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to check</th>
                  </tr>
                </thead>
                <tbody>
                  {whatYouNeed.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.when}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A use case also does not make restricted content acceptable. HighLevel keeps a forbidden message categories list, covering areas such as debt collection, high risk financial services and third party lead generation, so check it if you are unsure.
            </p>

            {/* Section: How to Choose the Right Campaign Use Case */}
            <h2 id="choose-use-case" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Choose the Right Campaign Use Case
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Registration is about documenting what you actually send. Pick the use case that best describes your real messaging, not the one that looks easiest to approve. A mismatch between the declared use case and your live traffic can lead to rejection, lower throughput, extra carrier filtering or enforcement action.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Use case</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fits</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  {useCases.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.useCase}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.fits}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you send appointment reminders, note that HighLevel's current list has no dedicated appointment category. Read the definitions in HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000000235-a2p-10dlc-campaign-use-cases" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Campaign Use Cases guide</a> and choose the closest fit for your real messages. If your programs are materially different, such as authentication codes and unrelated promotions, register separate Campaigns rather than forcing them into one. Use case and opt in details can be locked after submission, so a wrong choice may mean creating a new Campaign. For how volume options relate to speed, see <Link href="/blog/a2p-trust-score-mps" className="text-[#0E9BF0] hover:underline">how throughput and Trust Score work</Link>.
            </p>

            {/* Section: How to Register */}
            <h2 id="how-to-register" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Register an A2P Campaign in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These steps follow HighLevel's current documentation. Fields change with your Brand type and setup path, so treat what appears on screen as the final authority.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Open Campaign registration</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you are registering for the first time, HighLevel guides you into Campaign Details once the Brand section is ready. To add a Campaign to an existing approved Brand, go to Settings, then Phone System, then Trust Center. In the A2P Messaging (SMS) card, select <strong className="text-[#1A2236]">Brand &amp; Campaigns</strong>, open the <strong className="text-[#1A2236]">Campaigns</strong> tab and choose <strong className="text-[#1A2236]">Create Campaign</strong>, then select the Brand.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Complete the registration steps</h3>
            <div className="space-y-3 mb-6">
              {registrationSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <h4 className="text-base font-bold text-[#1A2236]">{item.step}</h4>
                  </div>
                  <p className="text-sm text-[#5C6880] leading-relaxed ml-10">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section: Chat Widget Setup */}
            <h2 id="chat-widget-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Chat Widget Setup
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This guided path uses a HighLevel generated opt in widget and pre fills much of the Campaign. You choose Marketing / Promotional, Informational / Non-Marketing or Mixed. Selecting Mixed sets the Campaign Use Case to Low Volume Mixed and generates two separate, unchecked consent boxes. You then enter your live website URL, tick the age gated option only if it applies, copy the widget code and install it on your site.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The widget should be the only form on the submitted page that collects SMS consent. HighLevel then fills in the use case description, both sample messages, the opt in flow description and the opt in message. Read all of it and edit anything that does not match your real business.
            </p>

            {/* Section: Manual Setup */}
            <h2 id="manual-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Manual Setup
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Use this when consent comes from an existing website form, paper form, lead form, QR code, kiosk or verbal process. You provide the Campaign use case, website URL, description, sample messages and any additional message details, followed by the opt in method, the opt in form URL, a description of the opt in flow, the opt in message, and your Privacy Policy and Terms and Conditions URLs. If you operate under a DBA, state that in the description and keep the website, policies and consent wording consistent with it.
            </p>


            {/* Section: How to Write a Campaign Description */}
            <h2 id="write-description" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Write a Campaign Description
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The description is your plain language summary of the program. Answer five questions in it, and answer them specifically:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Who sends the messages?</strong> Your business name, and your DBA if you use one.</li>
              <li><strong className="text-[#1A2236]">Who receives them?</strong> The type of contact, such as existing customers or people who booked online.</li>
              <li><strong className="text-[#1A2236]">What do the messages contain?</strong> The real message types.</li>
              <li><strong className="text-[#1A2236]">Why are they sent?</strong> The purpose the recipient would recognise.</li>
              <li><strong className="text-[#1A2236]">How did recipients agree?</strong> The actual opt in method and where it happens.</li>
            </ul>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">ILLUSTRATIVE EXAMPLE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed italic mb-2">
                Brightside Cleaning sends booking confirmations, arrival reminders and follow up service messages to customers who book through the form at brightsidecleaning.example/book and choose to receive text updates by ticking an unchecked consent box. Customers can reply STOP to opt out or HELP for support.
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                It is written for demonstration and is not approved wording.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A description such as "this campaign sends messages to customers" fails because a reviewer cannot tell who receives what, or how consent was given. Write your own rather than copying example text.
            </p>

            {/* Section: How to Write Sample Messages */}
            <h2 id="write-samples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Write Sample Messages
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sample messages show reviewers what recipients will really receive, so they should match your use case, your description and your consent language. Identify the sender, use realistic content, and include opt out language such as "Reply STOP to unsubscribe". For variable content use plain bracketed placeholders like [First Name] rather than pasting live merge fields, and avoid public URL shorteners in favour of full HTTPS links.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If your program includes promotional and informational messages, include a sample of each. Promotional messages should read like offers and rely on marketing consent, while transactional ones confirm, remind or update. Generic or misleading samples are risky because reviewers compare them with your website and consent flow. Illustrative examples:
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">SAMPLE MESSAGE EXAMPLES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed italic mb-2">
                Brightside Cleaning: Hi [First Name], your cleaning is booked for [Date] at [Time]. Reply STOP to unsubscribe, HELP for help.
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed italic">
                Brightside Cleaning: Hi [First Name], book a deep clean this month and get a free oven clean: https://brightsidecleaning.example/offer. Reply STOP to opt out.
              </p>
            </div>

            {/* Section: Opt In and Consent Requirements */}
            <h2 id="opt-in-consent" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Opt In and Consent Requirements for Campaign Registration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Collecting a phone number does not by itself establish consent. Registration is trying to confirm that a contact knowingly agreed to receive the specific kind of messages you described, and that a reviewer can verify it. A vague claim such as "customers opted in" is not enough, because the reviewer needs to see the actual experience.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a web form, HighLevel's guidance is that the consent language should:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Identify the business sending the messages</li>
              <li>Describe the types of messages the contact will receive, in terms that match your Campaign description</li>
              <li>Include message frequency and a message and data rates disclosure</li>
              <li>Include HELP and STOP instructions and link to your Privacy Policy and Terms and Conditions</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The consent box must not be preselected, and SMS consent must not be required to submit the form. Marketing and non marketing consent should be kept separate. If the opt in cannot be viewed publicly, provide accessible proof such as a hosted screenshot, never a link that needs a login. Your STOP response should acknowledge the request and confirm no more messages, and your HELP response should identify the business and give a working support contact.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This is only the outline. For example wording and form setup, see <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt in language and requirements</Link>.
            </p>

            {/* Section: Privacy Policy and Terms */}
            <h2 id="policy-requirements" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Privacy Policy and Terms and Conditions Requirements
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In HighLevel's Manual Setup, you provide a public URL for each page. Reviewers use them to confirm the messaging program is documented, so both pages should open without a login and be linked from the footer of every opt in form, not hidden behind pop ups or design elements. HighLevel's <a href="https://help.gohighlevel.com/support/solutions/articles/155000001426-a2p-opt-in-form-privacy-policy-and-terms-and-conditions-guidelines" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">policy guidelines</a> set out the detail.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Privacy Policy:</strong> it should address SMS opt in data and state that mobile opt in information is not shared with third parties or affiliates for marketing or promotional purposes. Language about selling or sharing lead information can cause problems.</li>
              <li><strong className="text-[#1A2236]">Terms and Conditions:</strong> they should name the program, describe the messages, explain opt out and help, mention message and data rates, and link to the Privacy Policy.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A page is inadequate when it is missing, blocked, generic, or contradicts what you told reviewers. This is general guidance, not legal advice, and requirements can change, so have counsel review policies if your situation is complex.
            </p>


            {/* Section: What Happens After You Submit */}
            <h2 id="after-submit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens After You Submit an A2P Campaign
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A newly submitted Campaign stays in <strong className="text-[#1A2236]">Pending</strong> until vetting finishes. HighLevel says to wait rather than creating another Campaign. HighLevel does not publish a fixed review time, and reviews can vary with volume, use case and how clean the submission is. For context, Twilio's documentation on the underlying <a href="https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/direct-sole-proprietor-registration-overview" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">vetting process</a> notes that manual vetting can take several weeks during high volume. Do not plan around a specific number of days.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Pending:</strong> wait for the review to finish.</li>
              <li><strong className="text-[#25C97D]">Approved:</strong> confirm each sending number is linked to the Campaign.</li>
              <li><strong className="text-[#DC3545]">Rejected:</strong> open the required fixes and correct the submission.</li>
            </ul>

            {/* Section: How Campaigns Connect to Phone Numbers */}
            <h2 id="number-linking" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Campaigns Connect to Phone Numbers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              An approved Campaign only works for a number that is associated with it. Go to Settings, then Phone System, then Phone Numbers, and check that the number shows the green <strong className="text-[#1A2236]">A2P Verified</strong> label. If it does not, link it to the approved Campaign using HighLevel's guide to <a href="https://help.gohighlevel.com/support/solutions/articles/155000008316-error-30034-linking-a-phone-number-to-an-approved-a2p-campaign" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">error 30034 and linking numbers</a>. Repeat the check whenever you add a number, and allow several business days for carrier systems to fully receive updated registration data.
            </p>

            {/* Section: What to Do If Your Campaign Is Rejected */}
            <h2 id="if-rejected" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What to Do If Your Campaign Is Rejected
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A Campaign rejection is different from a Brand rejection. It means reviewers found a problem with your use case, description, sample messages, opt in flow, website, policies or content. In Trust Center, open every rejection reason and select <strong className="text-[#1A2236]">View required fixes</strong>, which shows the error code, category and the correction needed. Then review the whole Campaign before resubmitting, because fixing one field can expose another. Some fields may be locked, which can mean creating a new Campaign. Our <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P campaign rejection guide</Link> covers troubleshooting in depth.
            </p>

            {/* Section: Fees, Agencies and Number Types */}
            <h2 id="fees-agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Fees, Agencies and Number Types Outside This Guide
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Fees:</strong> HighLevel passes registration, vetting, monthly Campaign and carrier fees through without markup, and your volume choice affects cost. Check the price shown in Trust Center and see <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">current A2P 10DLC fees</Link>.</li>
              <li><strong className="text-[#1A2236]">Agencies:</strong> a Campaign belongs to the business and messaging program being registered, not to the agency managing the account. For multiple clients and workflow at scale, see <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P registration for GoHighLevel agencies</Link>.</li>
              <li><strong className="text-[#1A2236]">Other number types:</strong> this guide covers US standard 10 digit local numbers. Toll Free numbers use a separate verification process, compared in <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-[#0E9BF0] hover:underline">Toll Free vs A2P 10DLC in GoHighLevel</Link>, and Canadian scenarios are in <Link href="/blog/a2p-10dlc-canadian-numbers" className="text-[#0E9BF0] hover:underline">A2P 10DLC for Canadian numbers</Link>.</li>
            </ul>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              A2P Campaign Registration FAQs
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

            {/* Next Step Section */}
            <div className="mt-8 bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">What to Build After Your Campaign Is Approved</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                Once the Campaign is approved and your numbers show A2P Verified, the next task is building the messaging flows themselves. That is the work covered by our <Link href="/services/campaign-automation" className="text-[#0E9BF0] hover:underline">Email, SMS and WhatsApp automation service</Link>.
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Rejection Guide →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejection Guide →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Toll Free vs A2P 10DLC in GoHighLevel →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">How Trust Score and MPS Work →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need your A2P Campaign registration done right the first time?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration for agencies and their clients. Use case selection, campaign description, sample messages, opt in documentation, policy guidance, and full Trust Center walkthrough managed end to end.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations completed globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                This guide was checked against HighLevel's A2P Campaign Registration guide, Campaign Approval Best Practices, Campaign Use Cases and policy guidelines in September 2026. Fields, requirements and pricing change, so confirm what you see in Trust Center before submitting.
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