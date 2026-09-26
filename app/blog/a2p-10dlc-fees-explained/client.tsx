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
  Info,
  CheckCircle2,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  DollarSign,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function A2P10DLCFeesExplainedClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'how-structured',
        'who-charges',
        'registration-fee',
        'additional-campaigns',
        'monthly-fee',
        'messaging-costs',
        'carrier-surcharges',
        'rejected-fees',
        'agency-costs',
        'cost-example',
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
      q: "Is A2P 10DLC free?",
      a: "No. Registering a Brand and Campaign carries a one-time fee, active Campaigns carry a monthly fee, and sending messages carries a per-segment cost plus carrier surcharges."
    },
    {
      q: "Does GoHighLevel charge a markup on A2P fees?",
      a: "No. HighLevel states that registration, vetting and monthly Campaign fees are passthrough charges from TCR, Twilio and carriers, with no HighLevel markup."
    },
    {
      q: "Is there a fee to resubmit a rejected Campaign?",
      a: "No. HighLevel does not charge an additional Campaign Vetting Fee when you resubmit a rejected Campaign."
    },
    {
      q: "How much does A2P Brand registration cost?",
      a: "$22.50 for a Sole Proprietor or Low Volume Standard Brand, or $64.00 for a High Volume Standard Brand, bundled with your first Campaign and Fast Track processing."
    },
    {
      q: "Do I pay a fee for every Campaign?",
      a: "Your first Campaign is included in the Brand registration bundle. Each additional Campaign under the same Brand costs $15.00."
    },
    {
      q: "Are fees different for agencies?",
      a: "The underlying TCR fees are the same per Brand and per Campaign regardless of who manages the account. What differs is scale: an agency pays this once per client sub-account, not once for the whole agency."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'how-structured', title: 'How A2P 10DLC Costs Are Structured' },
    { id: 'who-charges', title: 'Who Actually Charges These Fees' },
    { id: 'registration-fee', title: 'Brand and Campaign Registration Fees' },
    { id: 'additional-campaigns', title: 'Fees for Additional Campaigns and Resubmissions' },
    { id: 'monthly-fee', title: 'Monthly Campaign Fees' },
    { id: 'messaging-costs', title: 'SMS and MMS Messaging Costs' },
    { id: 'carrier-surcharges', title: 'Carrier Surcharges' },
    { id: 'rejected-fees', title: 'Fees for Rejected or Failed Registration' },
    { id: 'agency-costs', title: 'A2P Costs for GoHighLevel Agencies' },
    { id: 'cost-example', title: 'A Simple Cost Example' },
    { id: 'faq', title: 'A2P 10DLC Fees FAQ' }
  ];

  const registrationFees = [
    { brandType: 'Sole Proprietor', fee: '$22.50', limits: '1 number, 3,000 segments per day' },
    { brandType: 'Low Volume Standard', fee: '$22.50', limits: 'Multiple numbers, 6,000 segments per day' },
    { brandType: 'High Volume Standard', fee: '$64.00', limits: 'Multiple numbers, 600,000 segments per day, includes Secondary Vetting if the first submission is rejected' }
  ];

  const monthlyFees = [
    { useCase: 'Sole Proprietor (Starter Campaign)', fee: '$2.00/month', notes: 'Tied to a Sole Proprietor Brand' },
    { useCase: 'Standard Campaign use cases', fee: '$10.00/month', notes: 'Most Marketing, Customer Care and similar standard use cases' },
    { useCase: 'Low Volume Mixed', fee: '$1.50/month', notes: 'Up to 2,000 SMS segments per day to T-Mobile, lower throughput regardless of Trust Score' },
    { useCase: 'Charity / 501(c)(3)', fee: '$3.00/month', notes: 'Special use case for registered nonprofits' },
    { useCase: 'Emergency Services', fee: '$5.00/month', notes: 'Special use case, additional documentation may apply' }
  ];

  const messagingCosts = [
    { messageType: 'SMS (outbound and inbound)', rate: '≈ $0.0079 per segment', notes: 'A 10% discount off the $0.0083 list price; charged at the same rate in both directions' },
    { messageType: 'MMS outbound', rate: '$0.0220 per segment', notes: 'US and Canada' },
    { messageType: 'MMS inbound, local numbers', rate: '$0.0165 per segment', notes: '' },
    { messageType: 'MMS inbound, toll-free numbers', rate: '$0.0200 per segment', notes: '' }
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
          <span className="text-[#1A2236] font-medium">A2P 10DLC Fees Explained</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Fees</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Cost Breakdown</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P 10DLC Fees in GoHighLevel:<br />
            <span className="text-[#F8D000]">Registration, Monthly and Carrier Costs</span>
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
              A2P 10DLC is not free, but GoHighLevel does not add a markup to the registration or messaging fees. Three parties actually charge you: The Campaign Registry (TCR) for registration and vetting, TCR again for a recurring monthly fee per active Campaign, and mobile carriers for per-message surcharges on top of the SMS and MMS rate. Your first Brand and Campaign are billed together as one bundled fee, from $22.50 to $64.00 depending on the Brand type you register. Every Campaign after that costs $15.00 to submit. Resubmitting a rejected Campaign is free.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              These numbers come from HighLevel's own current fee reference, last updated September 24, 2026. Fees are set by TCR, Twilio and the carriers, not by GoHighLevel, and they can change without notice, so treat this as a guide and confirm the exact amount shown in your Trust Center before you register.
            </p>
          </div>

          {/* CTA Button 1 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get A2P Fee Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#registration-fee"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Registration Fees
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
              <div className="text-sm font-bold text-white mb-2">A2P Fee Questions?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P registration for agencies and their clients and can give you a clear breakdown of all costs before you submit.</p>
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

            {/* Section: How A2P 10DLC Costs Are Structured */}
            <h2 id="how-structured" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              How A2P 10DLC Costs Are Structured
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three separate categories make up the cost of using A2P 10DLC through GoHighLevel:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A one-time registration fee</strong>, charged once when you register your Brand and first Campaign together.</li>
              <li><strong className="text-[#1A2236]">A recurring monthly Campaign fee</strong>, billed for as long as each Campaign stays active.</li>
              <li><strong className="text-[#1A2236]">Usage-based messaging costs</strong>, made up of GoHighLevel's own SMS/MMS segment rate plus a separate carrier surcharge on top.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              These are genuinely different things. Paying the monthly Campaign fee does not include any messages; you still pay per segment when you actually send. And none of this is your GoHighLevel subscription price, which is billed separately from A2P and messaging costs entirely.
            </p>

            {/* Section: Who Actually Charges These Fees */}
            <h2 id="who-charges" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Who Actually Charges These Fees
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel states plainly that all A2P 10DLC fees are passthrough charges from The Campaign Registry, Twilio, and US mobile carriers, and that it adds no markup to any of them. That covers registration, vetting and monthly Campaign fees. Messaging usage works differently: GoHighLevel's SMS and MMS segment rate is billed through LC Phone, its own phone system built on Twilio's infrastructure, and HighLevel says this pricing matches Twilio's rate. Carrier surcharges are then added on top of that segment rate by the recipient's carrier.
            </p>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/a2p-10dlc-fees-infographic.png"
                  alt="A2P 10DLC Fees in GoHighLevel: Registration fees, monthly campaign fees, messaging costs, and carrier surcharges breakdown"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>A2P 10DLC Fees in GoHighLevel: Registration fees, monthly campaign fees, messaging costs, and carrier surcharges breakdown</span>
              </div>
            </div>


            {/* Section: Brand and Campaign Registration Fees */}
            <h2 id="registration-fee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Brand and Campaign Registration Fees
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your Brand and first Campaign are submitted together in Trust Center, and HighLevel bundles them into a single one-time fee. That bundle includes Brand registration, Campaign vetting, and Fast Track processing, which expedites approval to within 3 business days.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Brand type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">One-time fee (bundle)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Number and messaging limits</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.brandType}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.fee}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.limits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Which tier applies depends on whether you have an EIN or Tax ID and the messaging volume you select. For the eligibility rules, see <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration in GoHighLevel</Link>.
            </p>

            {/* Section: Fees for Additional Campaigns and Resubmissions */}
            <h2 id="additional-campaigns" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Fees for Additional Campaigns and Resubmissions
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The bundled fee above only applies to your first Campaign under a new Brand. After that:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A new Campaign under the same Brand:</strong> $15.00 Campaign Vetting Fee, charged for that additional Campaign only.</li>
              <li><strong className="text-[#1A2236]">Resubmitting a rejected Campaign:</strong> no additional Campaign Vetting Fee. HighLevel is explicit that a rejected and resubmitted Campaign does not incur another charge.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This is worth flagging because it contradicts older guidance still circulating that a resubmission carries a separate fee. Correct as of HighLevel's current documentation, resubmission is free; only submitting a genuinely new, additional Campaign costs $15.00. For the resubmission process itself, see <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected in GoHighLevel</Link>.
            </p>

            {/* Section: Monthly Campaign Fees */}
            <h2 id="monthly-fee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Monthly Campaign Fees
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once a Campaign is approved, it carries a recurring monthly fee for as long as it stays active. The rate depends on the Campaign's use case type, not the Brand type.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Campaign use case type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly fee</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyFees.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.useCase}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.fee}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For how to choose the right use case, see <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration in GoHighLevel</Link>.
            </p>


            {/* Section: SMS and MMS Messaging Costs */}
            <h2 id="messaging-costs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              SMS and MMS Messaging Costs
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Registration and the monthly Campaign fee get your Brand and Campaign approved; they do not pay for the messages themselves. Every SMS and MMS you send or receive through LC Phone is billed separately, per segment.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Message type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">US/Canada rate</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {messagingCosts.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.messageType}</td>
                      <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.rate}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A standard SMS segment is 160 characters of plain text; a longer message splits into multiple segments and is billed accordingly. International rates differ by country and are listed separately in HighLevel's LC Phone Pricing &amp; Billing Guide. Phone number rental (local and toll-free) is a further separate monthly line item, billed regardless of A2P registration.
            </p>

            {/* Section: Carrier Surcharges */}
            <h2 id="carrier-surcharges" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Carrier Surcharges
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              On top of the segment rate above, the recipient's carrier adds its own per-message surcharge. HighLevel documents that these amounts vary by carrier and message type and are charged on top of standard SMS/MMS rates. Because carrier surcharges change periodically and are not fixed by HighLevel, this guide does not publish a specific per-carrier dollar figure; the current amount is shown at the time of sending and in HighLevel's LC Phone Pricing &amp; Billing Guide. Unregistered traffic, meaning numbers not linked to an approved A2P Campaign, faces additional filtering or blocking rather than simply a higher fee.
            </p>

            {/* Section: Fees for Rejected or Failed Registration */}
            <h2 id="rejected-fees" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Fees for Rejected or Failed Registration
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Rejection does not automatically cost extra. Resubmitting a rejected Campaign is free, as covered above. Brand rejection is different: if a Standard Brand fails repeated verification, HighLevel's own documentation on new EIN issues describes a $10 appeal, separate from this fee reference, where you provide your complete CP 575 for manual review. That is a Brand-level appeal cost, not a Campaign fee. See <Link href="/blog/a2p-brand-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Brand Rejected in GoHighLevel</Link> for when that applies.
            </p>

            {/* Section: A2P Costs for GoHighLevel Agencies */}
            <h2 id="agency-costs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A2P Costs for GoHighLevel Agencies
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each client sub-account needs its own Brand and Campaign, and each one pays the registration bundle and monthly Campaign fee independently. There is no agency-wide discount documented by HighLevel; fees are per Brand and per Campaign, not per agency. An agency's own setup or management fee for handling this on a client's behalf is a separate, agency-set charge, not a TCR or carrier fee, and it should never be presented to a client as if it were one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the operational side of managing registration across multiple client sub-accounts, see <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P registration for GoHighLevel agencies</Link>.
            </p>

            {/* Section: A Simple Cost Example */}
            <h2 id="cost-example" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Simple Cost Example
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Assumptions only, not an average: a Low Volume Standard Brand registering one Standard Campaign, sending roughly 1,000 outbound SMS segments in a month.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>One-time bundle (first month only): $22.50</li>
              <li>Monthly Campaign fee: $10.00</li>
              <li>Messaging usage: roughly 1,000 segments × ≈$0.0079 ≈ $7.90, before carrier surcharges</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Carrier surcharges are not included in that estimate because they are not fixed by HighLevel and vary by carrier. Change the Brand type, Campaign type, or volume and the numbers change with it; this is meant to show how the pieces combine, not to predict your bill.
            </p>


            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              A2P 10DLC Fees FAQ
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
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected Fix Guide →</Link>
                <Link href="/blog/a2p-brand-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Rejected Fix Guide →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt In Language Templates →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Want A2P registration handled without surprises?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up manages A2P registration for agencies and their clients. Brand registration, campaign submission, rejection troubleshooting, and resubmission end to end.
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
                This guide was checked against HighLevel's A2P 10DLC Messaging Fees: Registration, Monthly and Carrier Costs reference, last updated September 24, 2026, and its LC Phone Pricing and Billing Guide. Fees are set by TCR, Twilio and mobile carriers and can change at any time; confirm the current amount in your Trust Center before registering.
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