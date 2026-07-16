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
  Info
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2P10DLCCanadianNumbersClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-different',
        'decision-matrix',
        'register-canadian',
        'persona-verification',
        'sending-errors',
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
      q: "Do Canadian GoHighLevel numbers need A2P 10DLC registration?",
      a: "It depends on two factors: where your messages are going and when the number was purchased. For CA to US messaging (sending from a Canadian number to US recipients): A2P registration is always required, regardless of when the number was purchased. For CA to CA messaging (sending to Canadian recipients only): numbers purchased before March 26, 2025 are exempt from A2P registration. Numbers purchased on or after March 26, 2025 require either A2P registration or Persona verification before sending. Toll-free numbers are not affected by these requirements."
    },
    {
      q: "Do I need A2P registration if I only send to Canadian recipients?",
      a: "It depends on when your number was purchased. If your Canadian 10DLC number was purchased before March 26, 2025 and you only send to Canadian recipients, A2P registration is not currently required. If your number was purchased on or after March 26, 2025, you need either A2P registration or Persona verification before sending to Canadian recipients. If you later expand to message US recipients, A2P registration becomes mandatory regardless of the original purchase date."
    },
    {
      q: "What Tax ID do I use for Canadian A2P brand registration in GoHighLevel?",
      a: "For Canadian brands, GoHighLevel accepts only the Business Number (BN) in BN-9 format — the first 9 numeric digits of your Canada Revenue Agency (CRA) Business Number. Corporation Registration Numbers, Incorporation Numbers, and Provincial Registry ID numbers are no longer accepted. The BN-9 is issued by the CRA. Your legal business name in the registration must match exactly what the CRA has on file for that BN-9."
    },
    {
      q: "Can I use Persona verification instead of A2P for sending to the US from a Canadian number?",
      a: "No. Persona verification is not a substitute for A2P registration on CA to US messaging routes. Confirmed from GHL's official Canadian messaging policy article: A2P registration is required for all Canadian 10DLC numbers sending to US recipients. Persona verification is only a valid alternative for CA to CA messaging (numbers purchased on or after March 26, 2025) and for international messaging (outside the US)."
    },
    {
      q: "What happens if I send to US recipients from an unregistered Canadian number?",
      a: "Messages fail and return Error 30034 — Number not A2P compliant. The message is not delivered to the US recipient. There is no grace period for CA to US messaging without registration. This applies to both new and existing Canadian numbers. Complete A2P brand and campaign registration before activating any automation or workflow that may send messages to US contacts."
    },
    {
      q: "Do toll-free numbers in Canada need A2P registration?",
      a: "No. Confirmed from GHL's official Canadian messaging policy article: these A2P requirements apply exclusively to Canadian 10DLC long code numbers. Toll-free numbers (starting with 800, 888, 877, etc.) are not affected and continue to operate under existing toll-free verification guidelines."
    },
    {
      q: "What is the March 26, 2025 cutoff date for Canadian numbers?",
      a: "March 26, 2025 is the date GHL introduced the requirement for Persona verification or A2P registration for new Canadian 10DLC numbers sending CA to CA messages. Numbers purchased before this date are grandfathered under older rules and do not currently require A2P or Persona for CA to CA messaging. Numbers purchased on or after this date require either A2P registration or Persona verification before sending to any recipient — Canadian or US. The cutoff only affects CA to CA messaging. CA to US registration is required for all numbers regardless of purchase date."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-different', title: '1. Why do Canadian numbers have different A2P rules from US numbers?' },
    { id: 'decision-matrix', title: '2. What is the complete decision matrix based on route and purchase date?' },
    { id: 'register-canadian', title: '3. How do you register a Canadian brand in GoHighLevel?' },
    { id: 'persona-verification', title: '4. What is Persona verification and when does it apply to Canadian numbers?' },
    { id: 'sending-errors', title: '5. What happens if you send without completing the required registration?' },
    { id: 'faq', title: '6. Frequently asked questions' }
  ];

  const decisionMatrix = [
    { route: 'CA to CA (Canadian number, Canadian recipients only)', beforeCutoff: 'A2P registration NOT required. No action needed unless you later send to US recipients.', afterCutoff: 'A2P registration OR Persona verification required before sending.' },
    { route: 'CA to US (Canadian number, any US recipients)', beforeCutoff: 'A2P registration REQUIRED. Applies to all Canadian 10DLC numbers regardless of purchase date.', afterCutoff: 'A2P registration REQUIRED. Persona verification is not an alternative for CA to US messaging.' },
    { route: 'CA to International (e.g. CA to Australia, UK, etc.)', beforeCutoff: 'Persona verification only — A2P registration not required for international routes.', afterCutoff: 'Persona verification only — A2P registration not required for international routes.' }
  ];

  const personaScenarios = [
    { scenario: 'CA to CA messaging — number purchased before March 26, 2025', canReplace: 'Not needed — neither A2P nor Persona required' },
    { scenario: 'CA to CA messaging — number purchased on or after March 26, 2025', canReplace: 'Yes — Persona verification is a valid alternative to A2P for this route' },
    { scenario: 'CA to US messaging', canReplace: 'No — A2P registration is required. Persona verification cannot replace A2P for CA to US messaging' },
    { scenario: 'CA to International messaging (outside US)', canReplace: 'Yes — Persona verification only is required for international routes. A2P not needed' }
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
          <span className="text-[#1A2236] font-medium">A2P 10DLC Canadian Numbers</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
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
            <span className="text-[#F8D000]">Complete 2026 Requirements Guide</span>
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center rounded-full">
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

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            A2P 10DLC requirements for Canadian numbers in GoHighLevel are more nuanced than for US numbers. Whether you need to register depends on two specific factors: where your messages are going (Canada only, or to the US) and when your Canadian number was purchased. Getting this wrong in either direction causes problems — messages blocked with Error 30034, or unnecessary registration time spent on a number that is exempt. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has managed registrations across Canadian and international client accounts. This guide gives you the exact rules with no ambiguity.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* BLUF Box */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">The Decision in One Place</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                CA to US (sending to US recipients from a Canadian number): A2P registration is ALWAYS required — regardless of when the number was purchased.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                CA to CA (sending only to Canadian recipients): If the number was purchased BEFORE March 26, 2025, A2P is NOT required. If the number was purchased ON OR AFTER March 26, 2025, A2P registration OR Persona verification is required. These requirements apply to Canadian 10DLC long code numbers only. Toll-free numbers are not affected by these rules.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
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

            {/* Section 1: Why Different */}
            <h2 id="why-different" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. Why Do Canadian Numbers Have Different A2P Rules From US Numbers?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P 10DLC was introduced as a US carrier requirement. The Campaign Registry (TCR) operates across North American carriers, which includes Canadian carriers. Canadian businesses sending messages to US recipients therefore send across the same carrier network that enforces A2P registration — making registration mandatory regardless of where the sending business is located.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For purely Canadian traffic (CA to CA), A2P requirements were phased in more gradually. Numbers purchased before March 26, 2025 were grandfathered under the older rules that did not require registration for domestic Canadian messaging. Numbers purchased after that date are subject to the newer requirements. This phase-in approach is common when carrier registration systems are updated — existing traffic gets a grace period while new traffic is subject to the new rules from day one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These requirements apply only to Canadian 10DLC long code numbers. For toll-free numbers (1-800, 1-888, etc.): <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-[#0E9BF0] hover:underline">Toll-Free vs A2P 10DLC: Which Should You Choose? →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For background on what A2P 10DLC is: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>

            {/* Section 2: Decision Matrix */}
            <h2 id="decision-matrix" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Is the Complete Decision Matrix for Canadian Numbers?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your requirement is determined by the intersection of two factors: where your messages are going and when your number was purchased. Use this table to find your situation.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Messaging route</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Number purchased BEFORE March 26, 2025</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Number purchased ON OR AFTER March 26, 2025</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionMatrix.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.route}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.beforeCutoff}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.afterCutoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE CRITICAL RULE ABOUT CHANGING YOUR ROUTE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                If you currently send CA to CA only and your number was purchased before March 26, 2025 — you are exempt from registration right now. But if you later decide to message US recipients, A2P registration becomes required immediately. Confirmed from GHL's official Canadian messaging policy article: "If you later message U.S. recipients, you must complete A2P Brand and Campaign registration before sending CA to US messages, even if you previously sent only within Canada." Do not begin CA to US messaging without first completing A2P registration — messages will fail with Error 30034.
              </p>
            </div>

            {/* Section 3: Register Canadian */}
            <h2 id="register-canadian" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How Do You Register a Canadian Brand in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The registration process for Canadian brands follows the same structure as US brand registration — brand registration first, then campaign registration automatically submitted after brand approval — but with important Canadian-specific differences in the Tax ID format.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">The Canadian Tax ID requirement: BN-9 format only</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For Canadian businesses, GHL only accepts the Business Number (BN) in BN-9 format — the first 9 numeric digits of the BN. Corporation Registration Numbers, Incorporation Numbers, and Provincial Registry ID numbers are no longer accepted for Canadian A2P brand registration. The BN-9 is the identifier issued by the Canada Revenue Agency (CRA). If you are not sure of your BN-9, verify it through the CRA's Business Registry. The legal business name in the registration must match exactly as registered with the CRA.
              </p>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Navigate to Settings — Phone Numbers — Trust Center in your GHL sub-account.</strong> Select Canada as the country when prompted during registration setup.</li>
              <li><strong className="text-[#1A2236]">Enter your BN-9 (9 numeric digits):</strong> Do not enter the full BN-15 with the program identifier suffix. Only the first 9 digits are required and accepted.</li>
              <li><strong className="text-[#1A2236]">Legal business name must match CRA records:</strong> The name entered must match exactly what the CRA has on file for that BN-9. Even small differences can cause rejection.</li>
              <li><strong className="text-[#1A2236]">Complete the rest of registration the same as a US Standard Brand:</strong> Business address, business type, website URL, campaign use case, sample messages, opt-in documentation, Privacy Policy with the required no-mobile-data-sharing clause.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Registration Fees for Canadian Brands</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The specific fee breakdown for Canadian brand registration is not explicitly separated from the US fee schedule in GHL's official fees article, which states fees are accurate as of August 2025 for US only. You may want to verify current Canadian-specific registration fees in GHL's Trust Center before submitting. For the US fee structure as a reference: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
              For the full brand registration walkthrough: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
            </p>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the campaign registration walkthrough after brand approval: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
            </p>

            {/* Section 4: Persona Verification */}
            <h2 id="persona-verification" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Is Persona Verification and When Does It Apply to Canadian Numbers?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Persona verification is a lighter identity confirmation process that is separate from A2P brand and campaign registration. It is an alternative compliance path available in specific scenarios — it is not a substitute for A2P in all situations.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Scenario</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Can Persona verification replace A2P?</th>
                  </tr>
                </thead>
                <tbody>
                  {personaScenarios.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.scenario}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.canReplace}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">How to trigger Persona verification:</strong> Persona verification may be triggered automatically when you purchase a phone number in GHL. If it was not triggered at the time of purchase, you can trigger it manually from your phone number settings in GHL. Enable the Persona verification checkbox to initiate the process. Confirm the current Persona verification navigation in your GHL account, as the interface can change.</li>
              <li><strong className="text-[#1A2236]">What Persona verification covers:</strong> Persona verifies the sender's identity — that a real, identifiable business is behind the number. It is not a campaign use case registration. Messages sent through Persona-verified numbers for international routes are delivered because the sender identity is verified, but the messaging content and use case is not reviewed at the same level as a TCR-registered A2P campaign.</li>
            </ul>

            {/* Section 5: Sending Errors */}
            <h2 id="sending-errors" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. What Happens If You Send Without the Required Registration?
            </h2>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Error 30034 — Number not A2P compliant:</strong> Confirmed from GHL's official messaging guidelines: messages sent without A2P registration on routes that require it return Error 30034. The message is not delivered.</li>
              <li><strong className="text-[#1A2236]">Error 1002 — Message blocked:</strong> For routes requiring Persona verification where verification is missing (for example, CA to CA new numbers without Persona), messages are blocked and return Error 1002.</li>
              <li><strong className="text-[#1A2236]">Applies immediately to CA to US routes:</strong> There is no grace period for CA to US messaging. If your Canadian number is not A2P registered and you send to a US recipient, the message fails. This applies to both new and existing Canadian numbers.</li>
              <li><strong className="text-[#1A2236]">Existing CA to CA numbers (pre-March 26, 2025) are not at risk currently:</strong> If your number was purchased before the cutoff and you send only to Canadian recipients, no error occurs. The risk appears if messaging routes change.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE COMMON SCENARIO THAT CAUSES UNEXPECTED FAILURES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A Canadian GHL user builds a client database that includes both Canadian and US phone numbers. They set up a missed call text-back automation. The Canadian number was purchased before March 26, 2025 and is exempt from CA to CA requirements. But when the automation fires to a US contact in the database, the message fails with Error 30034. The fix: complete A2P brand and campaign registration for the Canadian number before any workflow that may reach US recipients is activated. If you are not certain whether your contact list includes US numbers, assume it does and complete A2P registration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED CANADIAN A2P REGISTRATION HANDLED</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles A2P registration for Canadian businesses and for agencies with Canadian client sub-accounts. BN-9 verification, brand registration, campaign submission, and rejection troubleshooting — end to end.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See results from our registration setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss your Canadian number situation: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Once registered, the first SMS automation to build: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
            </p>

            {/* Section 6: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              6. Frequently Asked Questions
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
                <Link href="/blog/toll-free-vs-a2p-10dlc-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Toll-Free vs A2P 10DLC in GoHighLevel: Which Should You Choose? →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need A2P registration for your Canadian GHL numbers?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles Canadian and US A2P registration for agencies and their clients. BN-9 verification, brand registration, campaign submission, and rejection troubleshooting — end to end.
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
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
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
                All requirements in this guide are verified against GHL's official support portal documentation as of July 2026. Canadian A2P policies and cutoff dates are set by carriers and can change — always verify current requirements in GHL's Trust Center before acting.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
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

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
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
                5+ years GHL experience · 200+ A2P registrations handled globally including Canadian client accounts. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Canadian Numbers?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P registration for Canadian businesses — BN-9 verification, brand registration, and campaign submission.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
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