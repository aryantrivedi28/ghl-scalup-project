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
  Lightbulb,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function TollFreeVsA2P10DLCClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'difference',
        'comparison',
        'toll-free-registration',
        'a2p-registration',
        'both-at-once',
        'which-to-choose',
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
      q: "Can I use a toll-free number instead of A2P 10DLC in GoHighLevel?",
      a: "Yes. Toll-free numbers are a legitimate alternative to A2P 10DLC in GoHighLevel. Confirmed from GHL's own documentation: toll-free messaging remains an attractive alternative to A2P 10DLC and does not rely on brand and campaign registration with TCR. However, toll-free numbers still require a separate verification process through GHL's Trust Center before messages are reliably delivered. Unverified toll-free numbers have been subject to filtering since November 2023 and blocked since January 2024. Toll-free verification is free and simpler than A2P 10DLC, but it is not optional."
    },
    {
      q: "What is the MPS for a toll-free number in GoHighLevel?",
      a: "A US Toll-Free number has a default of 3 MPS (message segments per second) toward all US and Canada carriers. Confirmed from GHL's official 'Message throughput and Trust Scores for A2P 10DLC' article. Toll-free numbers are not subject to the Trust Score-based throughput system that applies to A2P 10DLC local numbers. Higher throughput for toll-free numbers is available contact GHL support to request it."
    },
    {
      q: "Does toll-free verification cost anything in GoHighLevel?",
      a: "No. Toll-free verification is currently free there is no registration fee equivalent to the A2P 10DLC one-time bundled fee. You do still pay the monthly number cost: toll-free numbers cost $2.15 per month in GHL's LC Phone system, compared to $1.15 per month for a local 10-digit number. SMS per-segment rates are the same for both number types. Verify current pricing in GHL's Trust Center, as fees can change."
    },
    {
      q: "How long does toll-free verification take in GoHighLevel?",
      a: "Toll-free verification can take as little as 2 business days, though this is not guaranteed. GHL's official documentation states this timeline as a general guideline. This is significantly faster than A2P 10DLC registration, which typically takes 1 to 2 weeks in total (3 to 7 business days for brand, then 3 to 7 more for campaign). The faster toll-free timeline is why GHL recommends submitting toll-free verification first and then running A2P 10DLC in parallel."
    },
    {
      q: "Do toll-free numbers have T-Mobile daily limits?",
      a: "Toll-free numbers are not subject to the same brand-level T-Mobile daily caps that apply to A2P 10DLC local numbers. Confirmed from GHL's official MPS article: 'Toll-Free SMS is not affected by the throughput changes described in this article.' This means toll-free senders do not face the same Trust Score-based daily limit structure as A2P 10DLC senders. However, carrier-level policies can change verify current toll-free carrier behaviour in GHL's documentation."
    },
    {
      q: "Can I use both a toll-free and a local A2P number in GoHighLevel?",
      a: "Yes. GHL explicitly recommends this as a strategy to start sending sooner. Their official US Phone Number Registrations article includes a tip: submit toll-free verification first (can be approved in as little as 2 days), then submit your A2P brand and campaign in parallel. This lets you send from the toll-free number while the A2P campaign is still under review. Once A2P is approved, you can switch to your local number or use both depending on the message type."
    },
    {
      q: "Which is better for local service businesses toll-free or A2P 10DLC?",
      a: "For local service businesses (dental, home services, real estate, coaching), A2P 10DLC with a local 10-digit number is generally the better long-term choice. A local number (for example, 415-555-0182) looks like a personal contact rather than a call centre, which typically results in better reply rates from local customers. A2P 10DLC also gives access to higher message throughput as the business grows. The trade-off is the 1 to 2 week registration timeline and the one-time registration fee. The timing gap can be bridged with toll-free during the registration period."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'difference', title: '1. What is the difference between A2P 10DLC and toll-free registration?' },
    { id: 'comparison', title: '2. Full side-by-side comparison: 9 criteria' },
    { id: 'toll-free-registration', title: '3. What does toll-free registration look like in GoHighLevel?' },
    { id: 'a2p-registration', title: '4. What does A2P 10DLC registration look like in GoHighLevel?' },
    { id: 'both-at-once', title: '5. Can you use both at the same time?' },
    { id: 'which-to-choose', title: '6. Which should you choose?' },
    { id: 'faq', title: '7. Frequently asked questions' }
  ];

  const comparisonData = [
    { criteria: 'Number appearance', a2p: 'Local 10-digit number (e.g. 415-555-0182) looks like a local contact', tollFree: '1-800, 1-888, etc. looks like a national business hotline' },
    { criteria: 'Registration type', a2p: 'Brand + Campaign registration with TCR via GHL Trust Center', tollFree: 'Toll-Free verification via GHL Trust Center separate, simpler process' },
    { criteria: 'Registration cost', a2p: 'One-time bundled fee ($24.50 LVS or $71.91 Standard, as of Aug 2025) plus monthly campaign fee (up to ~$11.03/mo) verify current amounts in Trust Center', tollFree: 'Free toll-free verification does not have a registration fee. Verify current details in GHL\'s Trust Center.' },
    { criteria: 'Registration complexity', a2p: 'Multi-step: EIN required for Standard Brand, campaign use case, sample messages, opt-in documentation, Privacy Policy clause', tollFree: 'Simpler: business information, use case, opt-in documentation no EIN required, no TCR brand registration' },
    { criteria: 'Approval timeline', a2p: '3 to 7 business days for brand, then 3 to 7 more for campaign typically 1 to 2 weeks total', tollFree: 'As little as 2 business days (not guaranteed) confirmed from GHL\'s official documentation' },
    { criteria: 'Default message throughput (MPS)', a2p: 'Variable, based on brand type and Trust Score Standard Brand can achieve higher MPS', tollFree: 'Fixed 3 MPS to all US and Canada carriers by default higher throughput available by request' },
    { criteria: 'T-Mobile daily limits', a2p: 'Brand-level daily caps apply, determined by Trust Score', tollFree: 'Not subject to the same T-Mobile brand-level daily limits as A2P 10DLC (confirmed from GHL\'s MPS article)' },
    { criteria: 'Number cost (monthly)', a2p: '$1.15/month per local US number (confirmed from GHL LC Phone pricing guide)', tollFree: '$2.15/month per toll-free number (confirmed from GHL LC Phone pricing guide)' },
    { criteria: 'Works without EIN', a2p: 'No Standard and Low Volume Standard Brand require EIN. Sole Proprietor path available without EIN.', tollFree: 'Yes toll-free verification does not require an EIN' }
  ];

  const decisionMatrix = [
    { situation: 'You need to start sending SMS within 2 to 3 days and cannot wait 1 to 2 weeks for A2P approval', recommended: 'Toll-free first, A2P in parallel', why: 'Toll-free approval is faster. Start sending on toll-free while A2P processes.' },
    { situation: 'Your business does not have an EIN and does not qualify for Standard Brand', recommended: 'Toll-free OR Sole Proprietor A2P', why: 'Toll-free has no EIN requirement. Sole Proprietor A2P also has no EIN requirement but has lower throughput limits.' },
    { situation: 'Your contacts are national customers used to 1-800 numbers', recommended: 'Toll-free', why: 'A 1-800 number matches the expectation of a national business.' },
    { situation: 'Your contacts are local customers dental, home services, coaching, real estate', recommended: 'A2P 10DLC with local number', why: 'A local number (415-XXX-XXXX) looks more personal and is the standard for service business SMS.' },
    { situation: 'You send high-volume marketing campaigns and need maximum throughput', recommended: 'A2P 10DLC Standard Brand', why: 'Standard Brand with a high Trust Score delivers higher MPS than toll-free\'s fixed 3 MPS default.' },
    { situation: 'You want the simplest possible registration process', recommended: 'Toll-free', why: 'Free, no EIN required, simpler process, faster approval.' },
    { situation: 'You are an agency registering 10+ clients quickly', recommended: 'Both in parallel for each client', why: 'Use toll-free to start each client sending faster while A2P campaigns process in the background.' }
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
          <span className="text-[#1A2236] font-medium">Toll-Free vs A2P 10DLC</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Toll-Free</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Toll-Free vs A2P 10DLC in GoHighLevel:<br />
            <span className="text-[#F8D000]">Which Should You Choose? (2026)</span>
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
            When you set up SMS in GoHighLevel, you have a choice of number types. Local 10-digit numbers require A2P 10DLC registration. Toll-free numbers (1-800, 1-888, and similar) require a separate verification process. Both registration types are mandatory before you can send SMS reliably neither lets you send without some form of compliance setup. The question is which setup is right for your situation. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has set up both types across hundreds of client accounts. This guide gives you the honest comparison.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Neither toll-free nor A2P 10DLC lets you send SMS without registration. Both require a compliance process before messages are reliably delivered.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                The difference: A2P 10DLC (local 10-digit number) requires brand and campaign registration with TCR, takes longer to approve, costs more upfront, and gives you a local-looking number with variable throughput based on your Trust Score. Toll-free verification is free, simpler, and can be approved in as little as 2 days (not guaranteed), but gives a fixed 3 MPS by default and a number that looks like a business hotline rather than a local contact. For most GHL service businesses, A2P 10DLC with a local number is the better long-term choice. Toll-free is the right choice when you need to start sending faster, have no EIN, or your contacts are accustomed to 1-800 style numbers.
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

            {/* Section 1: Difference */}
            <h2 id="difference" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is the Difference Between A2P 10DLC and Toll-Free Registration in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both are registration systems that allow your GHL phone numbers to send SMS to US recipients. They apply to different number types and use different registration processes:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A2P 10DLC (Application-to-Person 10-Digit Long Code):</strong> Applies to standard 10-digit local US phone numbers (for example, 415-555-0182). Registration is done through GHL's Trust Center and involves brand registration with TCR followed by campaign registration. This is the main registration path covered throughout this blog series.</li>
              <li><strong className="text-[#1A2236]">Toll-Free verification:</strong> Applies to toll-free numbers those starting with 800, 888, 877, 866, 855, 844, or 833 in the US. Toll-free numbers do not use the A2P 10DLC brand and campaign registration system. They have a separate, simpler verification process done through GHL's Trust Center.</li>
            </ul>
            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Toll-free numbers are explicitly described as an alternative to A2P 10DLC in GHL's own documentation. For background on the full A2P 10DLC system: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>

            {/* Section 2: Comparison */}
            <h2 id="comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Is the Full Side-by-Side Comparison?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Criteria</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">A2P 10DLC (local 10-digit number)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Toll-Free number</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.criteria}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.a2p}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.tollFree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">Fee Verification Note</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                All A2P fees are passthrough charges set by TCR and carriers. Toll-free verification is currently free. Both may change verify current amounts in GHL's Trust Center before submitting. For A2P fee details: <Link href="/blog/a2p-10dlc-fees-explained" className="text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
              </p>
            </div>

            {/* Section 3: Toll-Free Registration */}
            <h2 id="toll-free-registration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Does Toll-Free Registration Look Like in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Toll-free verification is done through GHL's Trust Center or directly through phone number settings. The process does not involve TCR, does not require an EIN, and is free.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">What toll-free verification requires</strong>
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">A purchased toll-free number in GHL:</strong> Purchase a toll-free number (starting with 800, 888, 877, 866, 855, 844, or 833) through Settings Phone Numbers in your GHL sub-account. Toll-free numbers cost $2.15 per month in GHL as of the LC Phone pricing guide verify current pricing in your account.</li>
              <li><strong className="text-[#1A2236]">Legal Entity Name:</strong> The actual business name the customer is engaging with. Not your agency name if you are registering for a client the end business.</li>
              <li><strong className="text-[#1A2236]">Business address and use case:</strong> A description of what messages will be sent.</li>
              <li><strong className="text-[#1A2236]">Opt-in documentation:</strong> The same opt-in requirements as A2P 10DLC apply to toll-free verification opt-in language, Privacy Policy, Terms of Service.</li>
              <li><strong className="text-[#1A2236]">Compliance:</strong> Messages sent from unverified toll-free numbers have been blocked since January 31, 2024. Verification is mandatory, not optional.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">VERIFICATION IS REQUIRED TOLL-FREE IS NOT UNREGULATED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A common misconception: toll-free numbers do not require any registration. This is incorrect. Since November 8, 2023, unverified toll-free numbers are subject to filtering. Since January 31, 2024, messages from toll-free numbers with pending verifications are blocked entirely. Toll-free verification is free and simpler than A2P 10DLC, but it is still a required compliance step before sending SMS. Confirmed from GHL's official Toll-Free Number Verification Guide.
              </p>
            </div>

            {/* Section 4: A2P Registration */}
            <h2 id="a2p-registration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Does A2P 10DLC Registration Look Like in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A2P 10DLC registration is a two-step process through GHL's Trust Center: brand registration followed by campaign registration. Once brand is approved, GHL automatically submits the campaign you do not trigger this manually.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Step 1 Brand registration:</strong> Register your business identity (name, EIN, address, entity type). For Standard Brand, an EIN is required. For Sole Proprietor, no EIN is needed. Review takes 3 to 7 business days. For the full walkthrough: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link></li>
              <li><strong className="text-[#1A2236]">Step 2 Campaign registration:</strong> Register your messaging use case, sample messages, opt-in flow, and consent documentation. Auto-submitted by GHL after brand approval. Review takes a further 3 to 7 business days. For the full walkthrough: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link></li>
              <li><strong className="text-[#1A2236]">Throughput:</strong> Variable based on Trust Score and campaign use case. Standard Brand can achieve meaningfully higher MPS than the fixed 3 MPS toll-free default. For MPS details: <Link href="/blog/a2p-trust-score-mps" className="text-[#0E9BF0] hover:underline">A2P Trust Score and MPS Explained →</Link></li>
            </ul>

            {/* Section 5: Both at Once */}
            <h2 id="both-at-once" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. Can You Use Both a Toll-Free and an A2P 10DLC Number at the Same Time?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes and GHL explicitly recommends it as a speed strategy. GHL's official US Phone Number Registrations article includes a Pro Tip: submit both a toll-free and a non-toll-free number registration together. Toll-free approval can take as little as two days (not guaranteed). Submitting toll-free registration first, then your A2P Sole Proprietor, Low Volume Standard, or Standard Campaign in parallel, often lets you start sending sooner. Once the A2P campaign is approved, you can switch to your local number.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE PARALLEL STRATEGY CONFIRMED FROM GHL'S OWN DOCUMENTATION</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Submit toll-free verification first. It can be approved in as little as 2 days. Use the toll-free number to start sending while your A2P 10DLC campaign is still under review (typically 1 to 2 weeks). Once your A2P campaign is approved, you have both a toll-free and a local number registered. Use whichever fits the message type. This strategy is confirmed directly from GHL's "US Phone Number Registrations" support article.
              </p>
            </div>

            {/* Section 6: Which to Choose */}
            <h2 id="which-to-choose" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Which Should You Choose?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The decision depends on four practical factors.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Recommended choice</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionMatrix.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.recommended}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THE HONEST POSITION FOR MOST GHL SERVICE BUSINESSES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                For the typical GHL service business dental, home services, real estate, coaching A2P 10DLC with a local 10-digit number is the right long-term choice. The local number appearance matters for reply rates. A2P 10DLC gives access to higher throughput as the business grows. The 1 to 2 week registration timeline is the main trade-off, and it can be bridged with toll-free if needed. Toll-free makes most sense when you are in a hurry, when no EIN exists, or when your contacts already expect a 1-800 number.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED YOUR GHL NUMBERS REGISTERED CORRECTLY</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles A2P 10DLC registration and toll-free verification for agencies and their clients. We can run both simultaneously to minimise the time before your first SMS is delivered.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See results from our registration setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss your specific situation: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              Once registered, the first SMS automation to build: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
            </p>

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

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-10dlc-fees-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P 10DLC Fees Explained →</Link>
                <Link href="/blog/a2p-trust-score-mps" className="text-sm text-[#0E9BF0] hover:underline">A2P Trust Score and MPS Explained →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Not sure which number type is right for your GHL setup?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles both A2P 10DLC and toll-free registration. We assess your situation and run the right registration strategy often both in parallel to minimise the time before you can start sending.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P and toll-free registrations handled globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                All information in this guide is verified against GoHighLevel's official support portal documentation as of July 2026. Registration fees, verification timelines, and carrier policies are set by external providers and can change always verify current details in GHL's Trust Center before acting.
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
                5+ years GHL experience · 200+ A2P and toll-free registrations handled globally. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Not Sure Which to Choose?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle both A2P 10DLC and toll-free registration and run them in parallel to minimise delays for your agency and clients.</p>
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