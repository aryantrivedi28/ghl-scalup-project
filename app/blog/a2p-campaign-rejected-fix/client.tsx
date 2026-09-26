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
  CheckCircle2,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  Info,
  FileCheck,
  Shield,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function A2PCampaignRejectedFixClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-mean',
        'brand-vs-campaign',
        'pending-vs-failed',
        'find-reason',
        'why-rejected',
        'fix-description',
        'fix-use-case',
        'fix-samples',
        'fix-opt-in',
        'fix-website',
        'prohibited',
        'how-to-resubmit',
        'edit-or-recreate',
        'support-appeal',
        'after-approval',
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
      q: "Why was my A2P Campaign rejected?",
      a: "Usually a problem with the use case, description, sample messages, opt in flow, website, policies, or content that falls into a prohibited category. Open View required fixes in Trust Center for your exact reason."
    },
    {
      q: "Can I edit and resubmit a rejected Campaign?",
      a: "Yes, for eligible rejection codes. Correct every listed issue and resubmit. Some fields, such as the use case or opt in message, may be locked, which can require a new Campaign instead."
    },
    {
      q: "Should I delete and recreate my Campaign?",
      a: "Only when the required fix involves a field that cannot be edited during resubmission, or support directs you to. Editing the existing Campaign is the standard path for a correctable rejection."
    },
    {
      q: "How long does Campaign review take?",
      a: "HighLevel does not publish a fixed timeline, and resubmission may take additional carrier review time. Watch the status in Trust Center rather than assuming a specific number of days."
    },
    {
      q: "What is the difference between Brand rejected and Campaign rejected?",
      a: "Brand rejection means your business identity could not be verified. Campaign rejection means your messaging program, as described, failed review. A valid Brand can still have a rejected Campaign."
    },
    {
      q: "My Campaign is Pending. Should I resubmit?",
      a: "No. Pending means the review is still running. Resubmitting or creating another Campaign while one is pending is not recommended."
    },
    {
      q: "My Campaign was approved but SMS is not working. What now?",
      a: "Check that your sending number is linked to the approved Campaign and shows A2P Verified. If it is verified and messages still fail, troubleshoot the SMS error separately; this is not a Campaign rejection."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-mean', title: 'What Does A2P Campaign Rejected Mean?' },
    { id: 'brand-vs-campaign', title: 'Brand Rejected vs Campaign Rejected' },
    { id: 'pending-vs-failed', title: 'Campaign Pending vs Failed' },
    { id: 'find-reason', title: 'How to Find Your Campaign Rejection Reason' },
    { id: 'why-rejected', title: 'Why A2P Campaigns Get Rejected' },
    { id: 'fix-description', title: 'How to Fix a Campaign Description Rejection' },
    { id: 'fix-use-case', title: 'How to Fix a Campaign Use Case Mismatch' },
    { id: 'fix-samples', title: 'How to Fix Sample Message Problems' },
    { id: 'fix-opt-in', title: 'How to Fix Message Flow and Opt In Problems' },
    { id: 'fix-website', title: 'How to Fix Website, Privacy Policy or Terms Issues' },
    { id: 'prohibited', title: 'Prohibited or Restricted Content' },
    { id: 'how-to-resubmit', title: 'How to Resubmit a Failed A2P Campaign' },
    { id: 'edit-or-recreate', title: 'Should You Edit or Recreate the Campaign?' },
    { id: 'support-appeal', title: 'When to Contact Support or Appeal' },
    { id: 'after-approval', title: 'What Happens After Campaign Approval' },
    { id: 'checklist', title: 'Pre-Resubmission Checklist' },
    { id: 'faq', title: 'A2P Campaign Rejection FAQs' }
  ];

  const brandVsCampaign = [
    { aspect: 'Question it answers', brand: 'Who is sending the messages?', campaign: 'What are you sending, why, and how did recipients consent?' },
    { aspect: 'Typical cause', brand: 'Legal name, EIN or address does not match official records', campaign: 'Use case, description, samples, opt in, website or content problem' },
    { aspect: 'Comes first?', brand: 'Yes', campaign: 'Only after the Brand is approved' },
    { aspect: 'Where to fix it', brand: 'A2P brand rejection guide', campaign: 'This guide' }
  ];

  const rejectionCategories = [
    { category: 'Opt in and consent', means: 'The consent flow, checkbox or disclosures do not meet requirements, or marketing and non marketing consent are not separated', check: 'Checkbox is unchecked by default, all required disclosures are present, STOP and HELP responses are correct' },
    { category: 'Website', means: 'The site lacks business context, requires login, is not live, or does not match the Brand and Campaign', check: 'Company name, description, contact details, and consistency with your Campaign' },
    { category: 'Business identity', means: 'A Sole Proprietor Campaign does not match the registered name, a DBA is undeclared, or the contact email or person is not appropriate', check: 'Names, DBA declaration, business domain email, authorized contact' },
    { category: 'Campaign use case', means: 'The description or samples do not match the declared use case, content is duplicated across fields, or the messaging looks personal rather than business', check: 'Use case accuracy, unique content per field, business framing' },
    { category: 'Registration and brand', means: 'Campaign limits, EIN reuse across brands, or other registration level issues', check: 'Brand and EIN registration limits' },
    { category: 'Prohibited or high risk content', means: 'The submission includes SHAFT categories (sex, hate, alcohol, firearms, tobacco), disallowed industries, or high risk patterns such as URL shorteners or HTTP links', check: 'Not eligible for standard resubmission; see the section below' }
  ];

  const prohibitedGroups = [
    { group: 'SHAFT categories', items: 'Sex or adult content, hate speech or violent content, alcohol promotion (or alcohol content without an age gate), firearms, fireworks or explosives, and tobacco or vape products.' },
    { group: 'Disallowed and high risk categories', items: 'Cannabis and controlled substances, payday and high risk loans, debt collection, gambling, sweepstakes, stock or investment signals, cryptocurrency promotion, debt reduction and credit repair services, third party lead generation and MLM, fraudulent or phishing content, deceptive marketing, and links using URL shorteners or plain HTTP instead of HTTPS.' }
  ];

  const resubmitSteps = [
    { step: 'Open every rejection reason', desc: 'not only the first one shown, and read each View required fixes entry in full.' },
    { step: 'Correct every listed issue.', desc: 'HighLevel says addressing only some of them will likely produce another rejection.' },
    { step: 'Review the whole Campaign for consistency', desc: 'including fields the rejection did not name, since fixing one field can expose a mismatch elsewhere.' },
    { step: 'Resubmit.', desc: 'Eligible rejections can be corrected and resubmitted once every issue is addressed.' },
    { step: 'Watch for new issues.', desc: 'If it is rejected again, HighLevel says carriers may surface additional problems that were not visible in the first review, so treat each cycle as a fresh check rather than a repeat of the same fix.' }
  ];

  const checklistItems = [
    'Brand: the Campaign is tied to the correct, approved Brand.',
    'Use case: matches your real messaging, not the easiest option.',
    'Description: names the sender, recipients, message purpose and opt in method.',
    'Sample messages: distinct, realistic, include your business name and opt out language.',
    'Message flow and opt in: checkbox unchecked by default, disclosures present, marketing and non marketing consent kept separate.',
    'Website: live, public, names the business, and matches the Brand and Campaign.',
    'Privacy Policy and Terms: reachable and linked from the message flow.',
    'Content: not in a prohibited or high risk category.',
    'Consistency: every field tells the same story about who is sending, to whom, and why.'
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
          <span className="text-[#1A2236] font-medium">A2P Campaign Rejected Fix</span>
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
            <span className="bg-[rgba(220,53,69,0.15)] text-[#DC3545] text-[11px] font-semibold px-2.5 py-1 rounded-full">Campaign Rejected</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Fix Guide</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Campaign Rejected in GoHighLevel:<br />
            <span className="text-[#F8D000]">Why It Happens and How to Fix It</span>
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
              An A2P Campaign is rejected when carriers or The Campaign Registry (TCR) find a problem with your use case, description, sample messages, opt in flow, website, policies or content. In GoHighLevel, open Settings, then Phone System, then Trust Center, find the rejected Campaign and select <strong className="text-white">View required fixes</strong> for every listed reason. Correct everything shown, not only the field the rejection names, review the whole Campaign for consistency, then resubmit.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Most rejections can be corrected and resubmitted from the existing Campaign. A smaller set of rejections, for prohibited or high risk content, cannot be resubmitted at all. Fixing the listed issues does not guarantee approval; carriers and registration partners make the final call.
            </p>
          </div>

          {/* CTA Button 1 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get A2P Rejection Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#find-reason"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Find Your Rejection Reason
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
              <div className="text-sm font-bold text-white mb-2">Campaign Rejected Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P campaign rejection troubleshooting for agencies and their clients fix the issues, resubmit the campaign, and get you approved.</p>
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

            {/* Section: What Does A2P Campaign Rejected Mean */}
            <h2 id="what-mean" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              What Does A2P Campaign Rejected Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A Campaign describes one messaging program: the use case, who receives the messages, what they say, and how recipients consented. Campaign rejection means that description failed review, not that your business identity failed. That is a separate stage. This guide assumes your Brand is approved and focuses on the Campaign; for how Brand identity is verified, see <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link> and <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel</Link>.
            </p>

            {/* Section: Brand Rejected vs Campaign Rejected */}
            <h2 id="brand-vs-campaign" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Brand Rejected vs Campaign Rejected
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Brand Rejected</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Campaign Rejected</th>
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
              If your Brand itself is pending, failed or suspended, Campaign registration is not the issue yet. Some Campaign rejection codes actually point back to the Brand, such as a Sole Proprietor Campaign using a corporate name, or a Brand that does not meet Sole Proprietor criteria. Treat those as Brand problems and use the <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P brand rejection guide</Link> instead.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-campaign-rejected-infographic.png"
                  alt="A2P Campaign Rejected in GoHighLevel: Common rejection causes, fix categories, resubmission process, and pre-resubmission checklist"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P Campaign Rejected in GoHighLevel: Common rejection causes, fix categories, resubmission process, and pre-resubmission checklist</span>
              </div>
            </div>


            {/* Section: Campaign Pending vs Failed */}
            <h2 id="pending-vs-failed" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Campaign Pending vs Failed
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A Campaign stays in <strong className="text-[#1A2236]">Pending</strong> while it is under review. That is not a rejection, and HighLevel says not to create another Campaign or resubmit while one is pending. A Campaign only needs troubleshooting once it shows <strong className="text-[#1A2236]">Rejected</strong> with a specific reason, or <strong className="text-[#1A2236]">Approved but SMS still not working</strong>, which is a different, phone number linking problem covered later in this guide.
            </p>

            {/* Section: How to Find Your Campaign Rejection Reason */}
            <h2 id="find-reason" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Find Your Campaign Rejection Reason
            </h2>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Go to Settings, then Phone System, then Trust Center.</li>
              <li>Open Brand &amp; Campaigns, then the Campaigns tab.</li>
              <li>Locate the Campaign showing a Rejected status.</li>
              <li>Select <strong className="text-[#1A2236]">View required fixes</strong> next to each rejection reason.</li>
              <li>Read all four fields the modal shows: error code, rejection category, what it means, and the correction needed.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A Campaign can carry more than one rejection reason at once. Open every one before you change anything.
            </p>

            {/* Section: Why A2P Campaigns Get Rejected */}
            <h2 id="why-rejected" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why A2P Campaigns Get Rejected
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel groups current rejection codes into categories. The table below summarizes each category and where to focus; it is not the complete code list.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What it usually means</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to check</th>
                  </tr>
                </thead>
                <tbody>
                  {rejectionCategories.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.category}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.means}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This structure reflects HighLevel's granular error codes, introduced March 23, 2026, which replaced broader catch-all codes with specific ones. Older rejections may still show a legacy code. For the individual code meanings, see <Link href="/blog/a2p-error-codes-explained" className="text-[#0E9BF0] hover:underline">A2P error codes</Link>.
            </p>

            {/* Section: How to Fix a Campaign Description Rejection */}
            <h2 id="fix-description" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Fix a Campaign Description Rejection
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel rejects descriptions that do not thoroughly explain the Campaign or do not match the declared use case. A strong description answers who sends the messages, who receives them, what they contain, why they are sent, and how recipients opted in.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Illustrative example, not official wording: "This campaign sends messages to customers" fails because a reviewer cannot verify anything from it. A description such as "Brightside Cleaning sends booking confirmations and reminders to customers who book through our website and opt in by ticking an unchecked box" gives reviewers something to check. Full guidance on writing this field is in <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>.
            </p>

            {/* Section: How to Fix a Campaign Use Case Mismatch */}
            <h2 id="fix-use-case" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Fix a Campaign Use Case Mismatch
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The use case must represent your real messaging, not the option that looks easiest to approve. HighLevel's rejection codes flag a use case that appears to be personal or peer to peer messaging rather than a real business application, and a mismatch between lead generation and lead nurture, which are treated as distinct. If your Campaign mixes genuinely different purposes, such as authentication codes and unrelated marketing, register them as separate Campaigns rather than one. Some use case and opt in message fields cannot be edited during resubmission. If the required fix touches one of those, you may need to create a new Campaign rather than edit the rejected one.
            </p>

            {/* Section: How to Fix Sample Message Problems */}
            <h2 id="fix-samples" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Fix Sample Message Problems
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sample messages fail when they do not match the declared use case, repeat identical content across fields, or omit required elements. Fixes documented by HighLevel include:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Use Sample Message #1 for promotional or marketing content and Sample Message #2 for transactional or informational content.</li>
              <li>For a mixed program, include at least one sample of each type.</li>
              <li>Include your business name in at least one sample and opt out language in at least one sample.</li>
              <li>Mark variable content with brackets, such as [First Name], rather than pasting real data.</li>
              <li>Remove public URL shorteners and use full HTTPS links instead.</li>
              <li>If an embedded phone number option is selected, make sure a sample message actually includes one, or update the selection.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Illustrative example, not official wording: "Brightside Cleaning: Hi [First Name], your cleaning is booked for [Date] at [Time]. Reply STOP to unsubscribe." A generic sample with no business name or opt out language is a common rejection cause.
            </p>

            {/* Section: How to Fix Message Flow and Opt In Problems */}
            <h2 id="fix-opt-in" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Fix Message Flow and Opt In Problems
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's codes point to specific, fixable opt in problems: a call to action that cannot be verified, marketing consent bundled with non marketing consent instead of collected separately, an opt in described only partially when multiple methods are used, consent folded into mandatory terms so it cannot be declined, missing disclosures (message type, frequency, rates, STOP instructions), a checkbox that is missing or preselected, a privacy policy that implies data is shared with third parties for marketing, and a HELP response with no brand name, phone number or email.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Correct the specific issue named in your rejection rather than rewriting the whole flow. For consent wording and setup, this guide only explains why rejections happen; the <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P opt in language and requirements</Link> guide covers implementation.
            </p>

            {/* Section: How to Fix Website, Privacy Policy or Terms Issues */}
            <h2 id="fix-website" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Fix Website, Privacy Policy or Terms Issues
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's website related codes cover a site with too little business information, a page that is only a bare form with no business context, a site that requires login so reviewers cannot see it, a site that is not live or uses a non standard URL, a URL that does not match the Campaign or Brand, and a privacy policy that reviewers cannot find or access from the message flow.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Practical checks: the URL loads without a login, the page names the business and describes what it does, the privacy policy is linked and reachable, and everything matches the Brand and Campaign you registered. If your product or content is age restricted, HighLevel also checks for an age gate on the site or opt in flow.
            </p>

            {/* Section: Prohibited or Restricted Content */}
            <h2 id="prohibited" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Prohibited or Restricted Content
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Some rejections are not fixable by editing the submission. HighLevel's current codes separate two groups:
            </p>
            <ul className="space-y-3 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {prohibitedGroups.map((item, idx) => (
                <li key={idx}><strong className="text-[#1A2236]">{item.group}:</strong> {item.items}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              These are not eligible for standard resubmission. Review your actual message content and website against the category before contacting support, rather than resubmitting the same Campaign.
            </p>


            {/* Section: How to Resubmit a Failed A2P Campaign */}
            <h2 id="how-to-resubmit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Resubmit a Failed A2P Campaign
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
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For content in the prohibited or high risk categories above, do not resubmit the same Campaign; it is not eligible for standard correction.
            </p>

            {/* Section: Should You Edit or Recreate the Campaign */}
            <h2 id="edit-or-recreate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should You Edit or Recreate the Campaign?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Edit and resubmit the existing Campaign whenever the rejection is eligible for correction. Some fields may be locked once submitted, commonly the Campaign use case and the opt in message. If your required fix touches a locked field, you may need to create a new Campaign instead of editing the rejected one. This is a field level limitation HighLevel documents, not a general rule to always delete and start over.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Vetting fees can vary by registration type, Campaign type and current carrier requirements, and HighLevel does not publish one fixed resubmission fee. Before assuming a cost, check what your Trust Center shows and see <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">current A2P 10DLC fees</Link>.
            </p>

            {/* Section: When to Contact Support or Appeal */}
            <h2 id="support-appeal" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When to Contact Support or Appeal
            </h2>
            <ul className="space-y-3 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>If you believe a compliant Campaign was rejected in error, HighLevel says to contact support with the subject line "10DLC Campaign Appeal for [your business name or number]" and the full details of your case.</li>
              <li>If a rejection reason names a data mismatch that traces back to your business identity, such as a Sole Proprietor and corporate name conflict, that is a Brand level fix. See the <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P brand rejection guide</Link>.</li>
              <li>If an error message references your CP 575 or a maximum number of registration attempts, that also points to Brand identity verification rather than the Campaign content covered here.</li>
            </ul>

            {/* Section: What Happens After Campaign Approval */}
            <h2 id="after-approval" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens After Campaign Approval
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Campaign approval does not automatically mean your texts will send. Each sending number must also be linked to the approved Campaign. Go to Settings, then Phone System, then Phone Numbers, and confirm the number shows the green A2P Verified label; if it does not, link it to the approved Campaign. This is a separate, later stage from Campaign rejection, covered in HighLevel's error 30034 guidance and in the number linking section of <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>.
            </p>

            {/* Section: Pre-Resubmission Checklist */}
            <h2 id="checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Pre-Resubmission Checklist
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
              A2P Campaign Rejection FAQs
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
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Rejected Fix Guide →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/a2p-error-codes-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P Error Codes Explained →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">How Trust Score and MPS Work →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">A2P rejected and you need it resolved fast?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles A2P registration and rejection troubleshooting. Brand registration, campaign registration, rejection fixes, and resubmission — handled for agencies and their clients.
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
                This guide was checked against HighLevel's A2P Campaign Rejections, Required Fixes and Vetting Errors, Campaign Approval Best Practices, and Campaign Registration guide documentation, current as of September 2026. Rejection codes, fees and requirements change, so confirm against your Trust Center before resubmitting.
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