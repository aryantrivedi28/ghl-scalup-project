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
  Lightbulb,
  CheckCircle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2P10DLCFeesExplainedClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'who-charges',
        'registration-fee',
        'monthly-fee',
        'resubmission-fee',
        'carrier-fees',
        'agency-costs',
        'avoid-fees',
        'faq'
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(id);
            break;
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
      q: "Is A2P 10DLC registration free in GoHighLevel?",
      a: "No. A2P 10DLC registration involves three types of fees: a one-time registration fee paid when you first submit your brand and campaign (approximately $24.50 for Low Volume Standard Brand and $71.91 for Standard Brand, as stated in GHL's documentation as of August 2025), a recurring monthly campaign fee of up to approximately $11.03 per month while the campaign is active, and carrier per-message surcharges on top of GHL's base SMS rate. All fees are passthrough charges from The Campaign Registry, Twilio, and US carriers GoHighLevel does not add markup. Always verify current amounts in the Trust Center before submitting."
    },
    {
      q: "Does GoHighLevel add a markup to A2P fees?",
      a: "No. Confirmed from GHL's official fees documentation: all A2P 10DLC fees are passthrough charges from The Campaign Registry (TCR), Twilio, and US mobile carriers. GoHighLevel does not add markup to these charges. The amounts you pay are the same amounts that TCR, Twilio, and the carriers charge GHL."
    },
    {
      q: "What is the A2P campaign vetting fee in GoHighLevel?",
      a: "The campaign vetting fee is included in the one-time bundled registration fee charged when you first submit your brand and campaign. As of August 2025 (the date stated in GHL's documentation), the bundled one-time fee is approximately $24.50 for Low Volume Standard Brand and $71.91 for Standard Brand. This bundled fee covers both brand vetting and campaign vetting. For subsequent campaigns submitted under the same already-approved brand, only the campaign vetting fee applies without the full bundled amount. Always verify current amounts in the Trust Center before submitting."
    },
    {
      q: "Is there a fee to resubmit a rejected A2P campaign in GoHighLevel?",
      a: "No, in most cases. Confirmed from GHL's campaign vetting FAQ: A2P campaign resubmissions are now free the $15 resubmission charge has been removed. You can resubmit a rejected campaign at no additional cost while addressing carrier feedback. The exception: the fee waiver may not apply if the original rejection was due to disallowed content or High Risk Campaigns. If you delete a rejected campaign and create a new campaign in its place, a new vetting fee applies. Always edit and resubmit the existing campaign rather than deleting and recreating."
    },
    {
      q: "What are the carrier per-message fees for A2P SMS in GoHighLevel?",
      a: "US carriers (AT&T, T-Mobile, Verizon) charge per-message surcharges on top of GHL's base LC Phone rate of approximately $0.0079 per segment. These carrier surcharges are passthrough fees set by each carrier individually. AT&T increased its per-message fees on April 1, 2026, and Verizon increased its fees on May 1, 2026. The specific amounts are set by each carrier and can change. Verify current carrier surcharge rates in GHL's Trust Center or fees documentation before estimating message costs at scale."
    },
    {
      q: "Do A2P fees apply to all GoHighLevel sub-accounts?",
      a: "Yes. Each sub-account that sends automated SMS to US recipients requires its own brand and campaign registration, and each registration carries its own one-time fee and monthly campaign fee. For agencies managing multiple client sub-accounts, the registration fees and monthly fees apply separately to each client account. These fees can be passed through to clients or included in your agency setup and management fees."
    },
    {
      q: "Can I avoid A2P 10DLC fees entirely?",
      a: "Two legitimate alternatives avoid A2P 10DLC registration fees: toll-free numbers (1-800, 1-888) use a separate verification process that is free and less complex than 10DLC registration, though toll-free numbers have a different appearance than local 10-digit numbers; and WhatsApp messaging in GoHighLevel is transmitted over the internet and not subject to A2P 10DLC carrier requirements or surcharges. WhatsApp has its own compliance requirements through Meta's WhatsApp Business platform. For most US businesses sending automated SMS at any volume, A2P 10DLC registration is still the standard path because unregistered 10-digit number traffic is blocked by US carriers entirely since February 2025."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'who-charges', title: '1. Who charges A2P fees does GoHighLevel add a markup?' },
    { id: 'registration-fee', title: '2. What is the one-time registration fee?' },
    { id: 'monthly-fee', title: '3. What is the monthly campaign fee?' },
    { id: 'resubmission-fee', title: '4. Is there a fee to resubmit a rejected campaign?' },
    { id: 'carrier-fees', title: '5. What are carrier per-message surcharges?' },
    { id: 'agency-costs', title: '6. How do these fees add up for agencies with multiple clients?' },
    { id: 'avoid-fees', title: '7. Is there any way to avoid A2P fees?' },
    { id: 'faq', title: '8. Frequently asked questions' }
  ];

  const registrationFees = [
    { type: 'Sole Proprietor', fee: 'Verify in Trust Center not confirmed in current official docs at precise amount', includes: 'Brand vetting, campaign vetting', limit: 'Lower limits verify in Trust Center' },
    { type: 'Low Volume Standard Brand', fee: '$24.49875 (as of Aug 2025)', includes: 'Brand vetting + campaign vetting + $3 Fast Track fee', limit: 'Up to 6,000 segments/day' },
    { type: 'Standard Brand', fee: '$71.90625 (as of Aug 2025)', includes: 'Brand vetting + campaign vetting + Secondary Vetting + $3 Fast Track fee', limit: 'Above 6,000 segments/day' }
  ];

  const agencyCosts = [
    { fee: 'One-time registration (Low Volume Standard)', frequency: 'Once at registration', perClient: '~$24.50 per client', tenClient: '~$245 total (all clients, year one only)' },
    { fee: 'Monthly campaign fee', frequency: 'Per month per active campaign', perClient: 'Up to ~$11.03/month per client', tenClient: '~$110.25/month across 10 clients' },
    { fee: 'Carrier per-message surcharges', frequency: 'Per SMS segment sent', perClient: 'Varies typically $0.003 to $0.005 per segment', tenClient: 'Varies by client sending volume' },
    { fee: 'GHL base SMS rate (LC Phone)', frequency: 'Per SMS segment sent', perClient: '~$0.0079 per outbound segment', tenClient: 'Scales with total sending volume across all clients' }
  ];

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

      {/* Hero Section - WIDE */}
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
            A2P 10DLC Fees Explained:<br />
            <span className="text-[#F8D000]">Registration, Monthly and Carrier Costs (2026)</span>
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
            A2P 10DLC registration is not free. Most GHL users discover this mid-setup when they reach the Trust Center and see fee amounts they were not expecting. The fees are set by external providers The Campaign Registry, Twilio, and US carriers and are passed through by GoHighLevel with no markup. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has handled A2P registration across hundreds of client accounts. This guide breaks down every fee type, where each one comes from, and what changed in 2026.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
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

            {/* CTA Card - Project Help */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
              <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your project.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Book a 30 min Free Call
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

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
                A2P 10DLC is not free. There are three types of fees: (1) a one-time registration fee, (2) a recurring monthly campaign fee, and (3) carrier per-message surcharges.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                All three are passthrough charges GoHighLevel does not add any markup. Important: Fees are set by external providers and can change at any time. The specific amounts shown in this guide are sourced from GHL's official documentation as of August 2025. Always verify current fees in your GHL Trust Center before submitting. Do not rely on any third-party guide including this one for the final fee amount before paying.
              </p>
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

            {/* Section 1: Who Charges */}
            <h2 id="who-charges" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Who Charges A2P Fees Does GoHighLevel Add a Markup?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Confirmed from GHL's official fees documentation: all A2P 10DLC fees are passthrough charges from The Campaign Registry (TCR), Twilio, and US mobile carriers. GoHighLevel does not add markup to these charges.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are three external parties that set A2P fees: The Campaign Registry (TCR) charges brand registration and campaign vetting fees. Twilio (the underlying messaging infrastructure GHL uses for LC Phone) passes carrier costs through. US carriers (AT&T, T-Mobile, Verizon) charge per-message surcharges on messages delivered to their networks.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Prices are determined by these external providers and may be adjusted at any time.
            </p>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For background on what A2P 10DLC is and why registration is required: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>

            {/* Section 2: Registration Fee */}
            <h2 id="registration-fee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Is the One-Time Registration Fee?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When you register a new brand and campaign through GHL's Trust Center, a one-time bundled fee is charged that covers both brand vetting and campaign vetting together. This fee is not charged again for subsequent campaigns under the same brand.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FEE AMOUNTS VERIFIED FROM GHL'S OFFICIAL STANDARD BRAND REGISTRATION GUIDE (STATED ACCURATE AS OF AUGUST 2, 2025)</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Always verify current amounts in GHL's Trust Center before submitting. These figures may have changed.
              </p>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Brand type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">One-time bundled fee (as of Aug 2025)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Includes</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Daily segment limit</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.fee}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.includes}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The bundled fee is charged once at initial registration only.</strong> If you register additional campaigns under the same brand after initial approval, only the campaign vetting fee applies for each additional campaign not the full bundled amount.</li>
              <li><strong className="text-[#1A2236]">What is Secondary Vetting?</strong> Standard Brand registration includes Secondary Vetting, which is an additional review layer for higher-volume senders. GHL's High Volume Bundle description confirms this is included in the Standard Brand one-time fee.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the full brand registration process: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the campaign registration process: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
            </p>

            {/* Section 3: Monthly Fee */}
            <h2 id="monthly-fee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Is the Monthly Campaign Fee?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Once your campaign is approved, a recurring monthly campaign fee is charged for as long as the campaign remains active. This fee continues even if you are not actively sending messages it is a fee for maintaining the registered campaign, not for message volume.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">MONTHLY FEE VERIFIED FROM GHL'S OFFICIAL STANDARD BRAND REGISTRATION GUIDE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Additional campaign fee: <strong>up to $11.025 per month</strong> for both Standard Brand and Low Volume Standard Brand campaigns. Stated in GHL's Standard Brand Registration guide as "in accordance with TCR rules for both failed and approved campaigns." Verify the current monthly fee in GHL's Trust Center before submitting, as TCR can adjust this at any time.
              </p>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">The monthly fee applies from the point of campaign approval, not from registration.</strong> During the review period (typically 3 to 7 business days), the monthly fee has not yet started. Once carriers approve the campaign, the monthly fee begins.</li>
              <li><strong className="text-[#1A2236]">The fee applies even if the campaign is rarely used.</strong> If you register a campaign and then do not send messages for several months, the monthly fee continues. Deactivating or deleting the campaign stops the fee.</li>
              <li><strong className="text-[#1A2236]">The fee varies by use case.</strong> GHL's official fees article states monthly campaign fees "vary based on campaign use case and volume." The $11.025 figure is the stated upper amount. Lower-volume or specific use cases may carry lower monthly fees verify the exact amount for your specific campaign type in the Trust Center before submitting.</li>
            </ul>

            {/* Section 4: Resubmission Fee */}
            <h2 id="resubmission-fee" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. Is There a Fee to Resubmit a Rejected Campaign?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is one of the most commonly asked A2P fee questions, and the answer changed in 2026.
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">CONFIRMED: RESUBMISSION FEE HAS BEEN REMOVED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A2P campaign resubmissions are now free. The $15 A2P resubmission charge has been removed. Confirmed from GHL's A2P 10DLC Campaign Vetting FAQ. You can resubmit a rejected campaign at no additional cost while addressing carrier feedback. This applies as long as you edit the existing campaign and resubmit if you delete the campaign and create a new one, a new vetting fee applies.
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">EXCEPTION TO THE FREE RESUBMISSION RULE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The fee waiver may not apply if the original rejection was due to disallowed content or High Risk Campaigns. Confirmed from GHL's campaign vetting FAQ. If your campaign was rejected because it contained prohibited content (SHAFT categories, cannabis, certain financial content), resubmission charges may still apply. Verify with GHL support for your specific rejection scenario before resubmitting.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the complete guide on what to do when a campaign is rejected: <Link href="/blog/a2p-campaign-rejected-fix" className="text-[#0E9BF0] hover:underline">A2P Campaign Rejected Fix Guide →</Link>
            </p>

            {/* Section 5: Carrier Fees */}
            <h2 id="carrier-fees" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Are Carrier Per-Message Surcharges?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              On top of GHL's base SMS rate (approximately $0.0079 per segment for US/Canada through LC Phone), US carriers charge additional per-message surcharges for A2P registered traffic. These are passthrough fees set by the carriers.
            </p>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">2026 CARRIER FEE INCREASES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Two carrier fee increases took effect in 2026: AT&T increased per-message fees on April 1, 2026. Verizon increased per-message fees on May 1, 2026. These are carrier-side decisions, not GHL decisions. GHL passes them through at cost. The specific amounts increased are set by each carrier. Verify current carrier surcharge rates in GHL's Trust Center or fees documentation before estimating message costs.
              </p>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">What is a message segment?</strong> One segment equals 160 characters of plain text. A message longer than 160 characters is split into multiple segments and billed accordingly. Unicode characters (emoji, special characters) reduce the per-segment character limit to 70 characters. A single emoji in a message can therefore double the segment count and double the cost.</li>
              <li><strong className="text-[#1A2236]">Registered vs unregistered traffic:</strong> Carrier surcharges are lower for registered A2P traffic than for unregistered traffic. This is one of the practical reasons to complete registration unregistered messages not only risk being blocked entirely but also carry higher carrier fees per segment when they do get through.</li>
              <li><strong className="text-[#1A2236]">T-Mobile inbound charges:</strong> T-Mobile charges per-message fees on both outbound and inbound messages for A2P traffic inbound replies from contacts are also billed. AT&T and Verizon apply fees primarily to outbound messages. You may want to verify current inbound charging policies in GHL's Trust Center as carrier policies can change.</li>
            </ul>

            {/* Section 6: Agency Costs */}
            <h2 id="agency-costs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. How Do These Fees Add Up for Agencies With Multiple Clients?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For agencies managing 10 or more client sub-accounts, A2P fees become a real line item that must be budgeted per client.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fee</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Frequency</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Per client example</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">10-client agency example</th>
                  </tr>
                </thead>
                <tbody>
                  {agencyCosts.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.fee}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.frequency}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.perClient}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tenClient}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the full guide on managing A2P registration costs and workflows across multiple client sub-accounts: <Link href="/blog/a2p-registration-for-agencies" className="text-[#0E9BF0] hover:underline">A2P Registration for Agencies →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the full breakdown of GHL's subscription costs alongside usage costs: <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel Pricing 2026 →</Link>
            </p>

            {/* Section 7: Avoid Fees */}
            <h2 id="avoid-fees" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              7. Is There Any Way to Avoid A2P Fees?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There are two legitimate alternatives that avoid A2P 10DLC registration fees entirely. Neither is free of all costs.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Option 1: Toll-Free numbers</strong> Toll-free numbers (1-800, 1-888, etc.) require a separate verification process but do not use the A2P 10DLC brand and campaign registration system. GHL's Standard Brand Registration guide confirms that toll-free messaging remains an attractive alternative to A2P 10DLC, as toll-free verification is free and less complex. The trade-off: toll-free numbers do not have the same local-looking presence as a 10-digit local number, which some businesses find affects reply rates. Verify current toll-free verification requirements in GHL's Trust Center, as these can change.</li>
              <li><strong className="text-[#1A2236]">Option 2: WhatsApp messaging</strong> WhatsApp messages in GoHighLevel are transmitted over the internet, not through US carrier networks. A2P 10DLC carrier surcharges and registration requirements do not apply to WhatsApp messaging. WhatsApp has its own compliance requirements through Meta's WhatsApp Business platform. Cost structures differ from SMS.</li>
            </ul>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST POSITION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For most US service businesses sending SMS at any meaningful volume, A2P 10DLC registration is the right path not because the fees are small, but because unregistered traffic is blocked by carriers entirely since February 2025. The registration cost is a one-time fixed amount and the monthly fee is a predictable recurring cost that can be built into client pricing. The carrier per-message surcharges are the most variable element. Build them into your per-client fee structure from day one.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WE HANDLE THE REGISTRATION AND MANAGE THE COSTS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up manages A2P registration for agencies and their clients brand submission, campaign registration, rejection troubleshooting, and resubmission.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See results from our A2P setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss registration for your client accounts: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-campaign-rejected-fix" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Rejected: What It Means and How to Fix It →</Link>
                <Link href="/blog/a2p-registration-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">A2P Registration for GoHighLevel Agencies →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained (2026) →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Want A2P registration handled without surprises?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up manages A2P registration for agencies and their clients. Brand registration, campaign submission, rejection troubleshooting, and resubmission end to end.
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
                Fee figures in this guide are sourced from GHL's official support portal as of August 2025 and July 2026. Fees are set by external providers and change without notice always verify current amounts in GHL's Trust Center before paying. This is not financial advice.
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