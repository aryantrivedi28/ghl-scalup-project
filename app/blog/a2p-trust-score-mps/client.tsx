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
  Star,
  AlertTriangle,
  Info,
  Lightbulb,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function A2PTrustScoreMPSClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-trust-score',
        'what-is-mps',
        'tmobile-daily-limit',
        'throughput-failures',
        'improve-trust-score',
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
      q: "What is an A2P Trust Score in GoHighLevel?",
      a: "A Trust Score is a number between 0 and 100 assigned to your Standard Brand during the secondary vetting stage of A2P 10DLC registration. It is calculated by a third-party vetting vendor using a reputation algorithm that reviews your company information. The higher your Trust Score, the higher your message throughput (MPS) and your T-Mobile daily send limits. Trust Scores are static they do not automatically change over time after initial assignment. Sole Proprietor and Low Volume Standard Brands do not receive a Trust Score; their throughput is fixed based on brand type and campaign use case."
    },
    {
      q: "What is MPS in A2P 10DLC?",
      a: "MPS stands for Messages Per Second, or more precisely, message segments per second. It is the maximum speed at which you can send A2P SMS through your registered campaign. One message segment equals up to 160 characters in standard GSM-7 encoding. Longer messages and messages containing emoji or special characters count as more than one segment. Your campaign MPS is shared across all phone numbers assigned to the campaign and across all carriers it is not a per-number limit. The MPS you receive depends on your Trust Score tier and your campaign use case type."
    },
    {
      q: "Do Sole Proprietor brands get a Trust Score in GoHighLevel?",
      a: "No. Confirmed from GHL's official documentation: Sole Proprietor and Low Volume Standard Brands do not go through secondary vetting and are not assigned a Trust Score. Their MPS and T-Mobile daily limits are fixed based on their corresponding brand type and campaign use case. Only Standard Brand registrations receive a Trust Score, and only Standard Brands benefit from appealing for a higher score."
    },
    {
      q: "What is the T-Mobile daily message limit for A2P?",
      a: "T-Mobile imposes a daily message limit on A2P 10DLC traffic at the brand level separate from MPS throughput. This limit caps the total number of messages your brand can deliver to T-Mobile subscribers in one day. The specific limit varies by Trust Score tier higher Trust Score equals a higher daily cap. The limit resets every day at midnight Pacific US Time. If you exceed the limit, messages to T-Mobile subscribers are undelivered with a 'Daily Message Cap Reached' error until the reset. AT&T and Verizon do not impose equivalent brand-level daily caps in the same way."
    },
    {
      q: "How can I increase my A2P Trust Score?",
      a: "You can appeal your Trust Score through GHL support. For Standard Brands in the US, you will typically need to include an IRS EIN letter with your appeal. Before appealing, verify that your registration data is accurate: the physical business address matches your EIN record exactly, the legal business name matches your CP 575 character for character, and your business website is live and publicly accessible. An appeal does not guarantee an increase confirmed from GHL's official documentation. You may also improve effective throughput without changing your Trust Score by selecting a Declared (specific) use case for your campaign instead of Mixed or Marketing, as Declared campaigns receive higher MPS for the same Trust Score tier."
    },
    {
      q: "What happens if I exceed my T-Mobile A2P daily limit?",
      a: "Messages sent after the T-Mobile daily limit is reached are undelivered. You will receive an error indicating the daily message cap has been reached. The daily limit resets at midnight Pacific US Time. Messages that failed because of the daily cap do not automatically retry they must be resent after the reset. To avoid hitting the daily cap, review your T-Mobile daily limit in GHL's official MPS article, monitor your daily T-Mobile send volume, and consider spreading large broadcast sends across multiple days."
    },
    {
      q: "Is MPS per phone number or per campaign?",
      a: "MPS is per campaign, not per phone number. Confirmed from GHL's official documentation: a maximum MPS is granted for each registered campaign use case, and this MPS is shared across all phone numbers assigned to that campaign and across all wireless carriers. Whether you send from one number or ten, the same MPS ceiling applies to the campaign as a whole. Adding more phone numbers to a campaign does not increase your MPS."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'what-is-trust-score', title: '1. What is an A2P Trust Score and how is it calculated?' },
    { id: 'what-is-mps', title: '2. What is MPS and how does Trust Score affect it?' },
    { id: 'tmobile-daily-limit', title: '3. What is the T-Mobile daily message limit and why is it separate from MPS?' },
    { id: 'throughput-failures', title: '4. What causes messages to fail because of throughput limits?' },
    { id: 'improve-trust-score', title: '5. How do you improve your Trust Score or increase your MPS?' },
    { id: 'faq', title: '6. Frequently asked questions' }
  ];

  const mpsTerms = [
    { term: 'MPS (Messages Per Second)', meaning: 'Maximum number of message segments you can send per second through your registered campaign', example: '3 MPS = can send 3 standard 160-char messages per second = 10,800 messages per hour maximum' },
    { term: 'Segment', meaning: 'One unit of SMS, up to 160 characters in standard encoding. Longer messages and messages with emoji or special characters count as more than one segment.', example: 'A 200-character message with no emoji = 2 segments. A 160-character message with one emoji = 2 segments (emoji triggers Unicode encoding).' },
    { term: 'Campaign MPS', meaning: 'MPS is allocated per registered campaign use case, shared across ALL phone numbers in the campaign and across ALL carriers.', example: 'If your campaign MPS is 4 and you have 3 numbers, the 4 MPS is the total for all 3 numbers combined not 4 MPS per number.' },
    { term: 'Account-Based Rate Limit', meaning: 'An upper MPS limit set at account level across all campaigns combined. Even if individual campaigns sum to more than this limit, the account ceiling applies.', example: '3 campaigns approved at 10 MPS each = 30 MPS combined possible, but if account limit is 20 MPS, you cannot exceed 20 MPS total.' }
  ];

  const failureTypes = [
    { type: 'MPS queue delay (not a failure)', cause: 'Sending faster than your MPS allows. Segments above the MPS limit are queued, not dropped.', appears: 'Messages deliver late or bunched together rather than evenly spaced.', fix: 'Slow sending rate in GHL workflows to match your campaign MPS. Add delays between messages.' },
    { type: 'T-Mobile daily cap exceeded', cause: 'Total T-Mobile traffic for your brand exceeds the daily limit.', appears: 'Error: Daily Message Cap Reached. Messages to T-Mobile subscribers fail.', fix: 'Wait for midnight Pacific reset. Reduce T-Mobile volume per day or appeal for higher Trust Score.' },
    { type: 'Account-Based Rate Limit hit', cause: 'Combined MPS across all campaigns exceeds account ceiling.', appears: 'Messages queue, potential delays or failures during high-volume sends.', fix: 'Reduce concurrent send volume or contact GHL support about account limit review.' },
    { type: 'Carrier filtering (not a throughput issue)', cause: 'Message content flagged by carrier filters. Unrelated to MPS.', appears: '30007 error: Message Filtered. Does not correlate with daily limit.', fix: 'Review message content for spam signals. Not a Trust Score or MPS problem.' }
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
          <span className="text-[#1A2236] font-medium">A2P Trust Score and MPS</span>
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
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Trust Score</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">MPS</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            A2P Trust Score and MPS:<br />
            <span className="text-[#F8D000]">Explained for GoHighLevel Users (2026)</span>
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
            Once your A2P 10DLC brand and campaign are approved in GoHighLevel, two numbers start to matter: your Trust Score and your MPS. Trust Score is assigned during brand registration and determines how many messages you can send per second (MPS) and how many you can send per day to T-Mobile subscribers. Most GHL users never think about these limits until a campaign fails mid-send or messages stop delivering at a critical moment. <Link href="/" className="text-[#0E9BF0] hover:underline font-medium">GHL Scale Up</Link> has managed A2P registrations across hundreds of client accounts. This guide explains what both numbers mean, how they are calculated, and what to do if yours are too low.
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
                <Info className="w-5 h-5 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Who This Guide Is and Is Not For</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                Trust Scores only apply to Standard Brand registrations.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                If your brand is registered as a Sole Proprietor or Low Volume Standard Brand, you do not receive a Trust Score. Your MPS and daily limits are fixed based on your brand type and campaign use case they are not variable. This guide is primarily relevant to Standard Brand registrations. For background on brand types: <Link href="/blog/a2p-brand-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Brand Registration Guide →</Link>
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

            {/* Section 1: What Is Trust Score */}
            <h2 id="what-is-trust-score" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is an A2P Trust Score and How Is It Calculated?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A Trust Score is a number between 0 and 100 assigned to your Standard Brand during the secondary vetting stage of A2P 10DLC registration. The higher your Trust Score, the higher your message throughput (MPS) and the higher your T-Mobile daily send limits.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">How secondary vetting works</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              When you submit a Standard Brand registration through GHL's Trust Center, GHL (via LC Phone) sends your brand information to The Campaign Registry (TCR) for primary vetting. TCR then submits your brand for secondary vetting, which is performed by a third-party vetting vendor. In GHL's case, the vendor is Aegis. The secondary vetting process uses a reputation algorithm that reviews specific criteria relating to your company to determine the Trust Score.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">You do not trigger secondary vetting manually.</strong> GHL submits your brand for secondary vetting automatically as part of the Standard Brand registration process. You cannot opt out of it, choose a different vendor, or see the algorithm's inputs. The score is calculated externally and returned to GHL.
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">THREE THINGS CONFIRMED FROM GHL'S OFFICIAL DOCUMENTATION</span>
              </div>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Trust Scores are static they do not automatically change over time after initial assignment.</li>
                <li>In general, smaller organisations and those with less business presence receive lower scores.</li>
                <li>If you see the error "We are unable to retrieve your TCR Trust Score" during brand registration, your brand is undergoing review this can take up to 7 business days while the vetting vendor processes your submission.</li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-2">
              <strong className="text-[#1A2236]">What affects your Trust Score</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL's official Brand Approval Best Practices article confirms the following as causes of lower Trust Scores. Note: the exact algorithm is proprietary to TCR and the vetting vendor this list reflects what GHL and Twilio have published, not a complete specification of the algorithm.
            </p>
            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Data discrepancies in the registration:</strong> A different address than the one associated with your EIN, a name mismatch, or any inconsistency between what you submitted and what TCR's verification sources show.</li>
              <li><strong className="text-[#1A2236]">Limited brand presence:</strong> Smaller organisations and those with less established business presence generally receive lower scores. A newly formed business with a new EIN and a new website will typically score lower than an established business with a long operational history.</li>
              <li><strong className="text-[#1A2236]">Accuracy of the business information submitted:</strong> Using the physical registered address (not a PO Box), the exact legal name from your CP 575, and a valid business website all contribute to a more accurate brand profile, which reduces the risk of a low score.</li>
            </ul>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the foundational background on what A2P 10DLC is and why registration is required: <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
            </p>

            {/* Section 2: What Is MPS */}
            <h2 id="what-is-mps" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What Is MPS and How Does Trust Score Affect It?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              MPS stands for Messages Per Second specifically, message segments per second. It measures how fast you can send A2P SMS through your registered campaign. One message segment equals up to 160 characters in standard GSM-7 encoding. A message longer than 160 characters splits into multiple segments, and each segment counts against your MPS limit.
            </p>

            <div className="space-y-3 mb-6">
              {mpsTerms.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                  <h3 className="text-sm font-bold text-[#1A2236] mb-1">{item.term}</h3>
                  <p className="text-sm text-[#5C6880] leading-relaxed mb-1">{item.meaning}</p>
                  <p className="text-sm text-[#5C6880] leading-relaxed bg-[#F8F9FB] p-2 rounded-lg border border-[#DDE1E9]">Example: {item.example}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE MPS TABLE IS IN GHL'S OFFICIAL ARTICLE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                The specific MPS values per Trust Score tier (Low, Medium, High) vary by campaign use case and carrier. These values are published in GHL's official "Message throughput (MPS) and Trust Scores for A2P 10DLC in the US" article. Rather than reproducing figures that may have changed, we direct you there directly: help.gohighlevel.com/support/solutions/articles/155000004527. The structure is: Trust Scores are grouped into three tiers. Your tier, combined with your campaign use case (Declared vs Mixed vs Marketing), determines your MPS. Declared (specific) use cases receive higher MPS for the same Trust Score than Mixed or Marketing campaigns.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For how campaign use case selection affects your throughput: <Link href="/blog/a2p-campaign-registration-guide" className="text-[#0E9BF0] hover:underline">A2P Campaign Registration Guide →</Link>
            </p>

            {/* Section 3: T-Mobile Daily Limit */}
            <h2 id="tmobile-daily-limit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. What Is the T-Mobile Daily Message Limit and Why Is It Separate From MPS?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              T-Mobile imposes daily message limits on A2P 10DLC traffic separately from MPS throughput. This is specific to T-Mobile AT&T and Verizon do not impose the same type of brand-level daily cap.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">MPS is a per-second sending rate.</strong> It limits how fast you can send. A campaign with 4 MPS can send a maximum of 4 segments per second continuously.</li>
              <li><strong className="text-[#1A2236]">T-Mobile daily limit is a total volume ceiling per day.</strong> It limits how many messages your brand can deliver to T-Mobile subscribers in a 24-hour period, regardless of how fast you send them. If you hit the daily limit, additional messages to T-Mobile subscribers do not deliver until the following day.</li>
              <li><strong className="text-[#1A2236]">The daily limit is brand-level, not account-level.</strong> It applies to the total T-Mobile traffic from your registered brand across all campaigns.</li>
              <li><strong className="text-[#1A2236]">Daily limit resets at midnight Pacific US Time.</strong> Confirmed from GHL's official documentation.</li>
              <li><strong className="text-[#1A2236]">The daily limit is also determined by your Trust Score tier.</strong> Higher Trust Score = higher T-Mobile daily limit. The specific values per tier are in GHL's official MPS article.</li>
            </ul>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">WHAT HAPPENS WHEN THE DAILY LIMIT IS EXCEEDED</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Messages sent after the T-Mobile daily limit is reached are undelivered. You will receive an error indicating "Daily Message Cap Reached". For A2P error codes related to delivery failures: <Link href="/blog/a2p-error-codes-explained" className="text-[#0E9BF0] hover:underline">A2P Error Codes Explained →</Link>. The limit resets at midnight Pacific. Messages that failed due to the daily cap do not automatically retry they must be resent.
              </p>
            </div>

            {/* Section 4: Throughput Failures */}
            <h2 id="throughput-failures" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. What Causes Messages to Fail Because of Throughput Limits?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Understanding the difference between a throughput failure and a filtering failure matters because the fix is different.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Failure type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What causes it</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How it appears</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {failureTypes.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.type}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.cause}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.appears}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5: Improve Trust Score */}
            <h2 id="improve-trust-score" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How Do You Improve Your Trust Score or Increase Your MPS?
            </h2>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Option 1: Correct data discrepancies and appeal</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If your Trust Score is low and you believe the registration data was accurate, you can appeal. GHL's official documentation confirms the appeal process exists and is handled through GHL support. For Standard Brands, you will typically need to include an IRS EIN letter with your appeal request.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Appeal timeline and fee:</strong> One third-party source indicates appeals submitted within 45 days of receiving the score are free, and appeals submitted after 45 days require a secondary vetting fee. You may want to verify the current appeal timeline and fee directly with GHL support, as these details can change. An appeal does not guarantee an increase confirmed from GHL's documentation.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Option 2: Review and correct the registration data before appealing</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before appealing, verify that the following are accurate in your registration these are the confirmed causes of lower scores from GHL's official documentation:
            </p>
            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Physical registered address matches EIN record exactly.</strong> The address in your brand registration should be the same address associated with your EIN as filed with the IRS not a PO Box, not a branch location, not a mailing address.</li>
              <li><strong className="text-[#1A2236]">Legal business name matches CP 575 exactly.</strong> Character for character, including entity suffix.</li>
              <li><strong className="text-[#1A2236]">Business website is live, publicly accessible, and clearly represents the business.</strong> A newly launched website with minimal content may contribute to a lower score.</li>
              <li><strong className="text-[#1A2236]">EIN has been active long enough to appear in TCR's verification databases.</strong> A recently issued EIN may not have sufficient presence yet.</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Option 3: Select a Declared (specific) use case for your campaign</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Confirmed from GHL's official documentation: Declared use cases (specific non-marketing use cases such as Two-Factor Authentication, Account Notifications, Appointment Reminders) can receive higher MPS for the same Trust Score than Mixed or Marketing campaign types. If your current campaign is registered as Mixed or Marketing and your actual messages are primarily transactional, re-registering with a more specific Declared use case may increase your effective throughput without changing your Trust Score.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Option 4: Manage opt-out rates carefully</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              High opt-out rates can affect your account standing with carriers over time. Confirmed best practice from GHL's documentation: ensure that all contacts receiving automated messages explicitly opted in, and that opt-out requests (STOP replies) are honoured immediately. A high proportion of STOP replies relative to your send volume is a signal that carriers track. For compliant opt-in language to reduce opt-out rates: <Link href="/blog/a2p-opt-in-language-templates" className="text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates →</Link>
            </p>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">FOR MOST GHL SERVICE BUSINESSES, TRUST SCORE IS NOT THE LIMITING FACTOR</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                A missed call text-back, appointment reminder, or lead follow-up automation does not come close to the T-Mobile daily limits or MPS ceilings for most service businesses. Trust Score and MPS become relevant when you are sending bulk SMS at volume to large lists hundreds or thousands of messages per day per brand. If you are running appointment reminders for a dental practice with 50 bookings per week, your throughput limits are not a practical constraint. For high-volume senders marketing campaigns, large event invitations, or broadcast messages understanding and optimising your Trust Score is worth the time.
              </p>
            </div>

            <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
              For the first SMS automation to build after registration: <Link href="/blog/gohighlevel-missed-call-text-back" className="text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back →</Link>
            </p>

            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">NEED HELP WITH A2P REGISTRATION OR TRUST SCORE APPEAL</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                GHL Scale Up handles A2P brand registration, campaign registration, Trust Score appeals, and rejection troubleshooting for agencies and their clients.
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                See results from our A2P setups: <Link href="/case-studies" className="text-[#0E9BF0] hover:underline">real GoHighLevel results and case studies →</Link>
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                To discuss your specific situation: <Link href="/contact" className="text-[#0E9BF0] hover:underline">book a free strategy call at ghlscaleup.com/contact →</Link>
              </p>
            </div>

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
                <Link href="/blog/a2p-brand-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Brand Registration Guide: Standard Brand vs Sole Proprietor →</Link>
                <Link href="/blog/a2p-campaign-registration-guide" className="text-sm text-[#0E9BF0] hover:underline">A2P Campaign Registration: Step-by-Step Guide →</Link>
                <Link href="/blog/a2p-error-codes-explained" className="text-sm text-[#0E9BF0] hover:underline">A2P Error Codes Explained: 30882, 30883, 30886 and 30898 →</Link>
                <Link href="/blog/a2p-opt-in-language-templates" className="text-sm text-[#0E9BF0] hover:underline">A2P Opt-In Language Templates for GoHighLevel →</Link>
                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? Complete Guide for GoHighLevel Users →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: Setup Guide →</Link>
                <Link href="/case-studies" className="text-sm text-[#0E9BF0] hover:underline">Real GoHighLevel Results and Case Studies →</Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need help with A2P registration or a Trust Score appeal?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up manages A2P registration for agencies and their clients. Brand registration, Trust Score optimisation, campaign submission, rejection troubleshooting, and resubmission end to end.
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
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ A2P registrations handled globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                All information in this guide is verified against GHL's official support portal documentation as of July 2026. Trust Score algorithms, MPS tables, and appeal fees are set by external providers (TCR, Twilio, carriers) and can change always verify current details in GHL's Trust Center and official support articles before acting.
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
                5+ years GHL experience · 200+ A2P registrations handled globally. All technical details verified as of July 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Low Trust Score?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle A2P registration, Trust Score appeals, and rejection troubleshooting for agencies and their clients.</p>
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