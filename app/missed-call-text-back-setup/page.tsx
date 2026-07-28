// app/missed-call-text-back-setup/page.tsx
'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  Zap,
  AlertCircle,
  CheckCircle2,
  Mail,
  MessageCircle
} from 'lucide-react';

export default function MissedCallTextBackSetupPage() {
  const carrierCodes = [
    { carrier: 'Verizon', turnOn: '*71 + [GHL number]', turnOff: '*73' },
    { carrier: 'AT&T', turnOn: '004 + [GHL number] + #', turnOff: '##004#' },
    { carrier: 'T-Mobile', turnOn: '*004 + [GHL number] + #', turnOff: '##004#' },
  ];

  const faqs = [
    {
      q: "Does conditional call forwarding change my business phone number?",
      a: "No. Conditional call forwarding does not change the business phone number. The client keeps the existing number on their business cards, website, and Google Business Profile. Conditional call forwarding only changes where an unanswered call gets routed after it's missed the number itself stays the same."
    },
    {
      q: "Does every call go through GoHighLevel first?",
      a: "No. The client's phone rings first, exactly like it does today. GoHighLevel only gets involved if a call goes unanswered, is busy, or is declined answered calls never touch the missed call text back system at all."
    },
    {
      q: "What happens to voicemails after missed call text back is set up?",
      a: "Unanswered calls land in the GoHighLevel inbox instead of the carrier's default voicemail. Routing voicemails to GoHighLevel is intentional it's what allows the missed call text back workflow to trigger the moment a call is missed, instead of the caller just hearing a generic voicemail greeting."
    },
    {
      q: "Can conditional call forwarding be turned off if the client changes their mind?",
      a: "Yes. Each carrier has a simple deactivation code Verizon uses *73, AT&T and T-Mobile use ##004# that reverts the phone straight back to standard carrier voicemail, no missed call text back involved."
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[760px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880]">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <span className="text-[#1A2236] font-medium">Missed Call Text Back Setup</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[760px] mx-auto px-4 md:px-6 py-10 md:py-16">
        
        {/* Title */}
        <h1 className="text-[1.9rem] font-bold text-[#1C2E4A] mb-2">
          What's the Best Way to Set Up Missed Call Text Back?
        </h1>
        
        {/* Byline */}
        <p className="text-sm text-[#667] mb-6">
          By GHL Scaleup Team &nbsp;•&nbsp; GoHighLevel setup specialists &nbsp;•&nbsp; Updated July 2026
        </p>

        {/* Quick Answer Box */}
        <div className="bg-[#F4F8FF] border-l-4 border-[#0E9BF0] rounded-md p-5 mb-6">
          <p className="text-sm text-[#1C2E4A] leading-relaxed">
            <strong>Quick answer:</strong> The best way to set up missed call text back is <strong>Conditional Call Forwarding</strong> not number porting, not a full phone system switch. The business's existing phone number stays exactly as it is, the phone still rings first, and the missed call automation only kicks in if the call goes unanswered. You're not replacing the phone system. You're just changing what happens to the calls that get missed.
          </p>
        </div>

        {/* Section: What Missed Call Text Back Actually Is */}
        <h2 className="text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          What Missed Call Text Back Actually Is
        </h2>
        <p className="text-sm text-[#333] leading-relaxed mb-3">
          Missed call text back is a workflow that fires an automated SMS the second a call goes unanswered. Instead of a caller hanging up and hearing nothing back, they get an instant text something like "Sorry we missed you, how can we help?" before they've even put the phone down.
        </p>
        <p className="text-sm text-[#333] leading-relaxed mb-6">
          It matters because of what happens next if that text <em>doesn't</em> go out. A missed call from a plumber, dentist, real estate agent, or contractor is a lead that's actively looking for help right now. If nobody follows up in the next few minutes, that lead calls the next business on the list. Missed call text back closes that gap automatically, without anyone having to remember to call back.
        </p>

        {/* Section: When Do You Use Conditional Call Forwarding? */}
        <h2 className="text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          When Do You Use Conditional Call Forwarding?
        </h2>
        <p className="text-sm text-[#333] leading-relaxed mb-3">
          Here's the scenario this setup solves: a client wants missed call text back running on their business, but they will not port their number over to a new provider, and they don't want every single call routed through a new system before it ever reaches them. Those two conditions rule out most of the "easy" integrations, and that's exactly when Conditional Call Forwarding is the right call.
        </p>
        <p className="text-sm text-[#333] leading-relaxed mb-3">
          Conditional Call Forwarding is a carrier-level setting, not a GHL feature. It tells the client's mobile carrier Verizon, AT&amp;T, T-Mobile to reroute a call only under specific conditions: the line is busy, nobody answers, or the call is declined. Every other call behaves exactly as it did before. That's what makes it different from standard call forwarding, which redirects every incoming call regardless of whether it's answered.
        </p>
        <p className="text-sm text-[#333] leading-relaxed mb-3">
          Here's what the call flow looks like once it's live:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-[#333] mb-6">
          <li>Someone calls the client's normal business number</li>
          <li>The client's phone rings like always nothing changes for the caller</li>
          <li>If the call isn't picked up (busy, no answer, declined), the carrier forwards it to a dedicated GoHighLevel number</li>
          <li>GoHighLevel answers, plays a short voicemail greeting, and fires the missed call text back workflow to the caller</li>
        </ul>
        <p className="text-sm text-[#333] leading-relaxed mb-6">
          The client never touches a new device, and the number on the client's business cards, Google Business Profile, and website stays exactly the same.
        </p>

        {/* Section: How to Set Up */}
        <h2 className="text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          How to Set Up Missed Call Text Back With Conditional Call Forwarding
        </h2>
        <p className="text-sm text-[#333] leading-relaxed mb-4">
          Setting up missed call text back this way comes down to two steps: build the automation in GoHighLevel first, then point the carrier at it.
        </p>

        <p className="text-sm text-[#333] leading-relaxed mb-2">
          <strong>Step 1 Build the missed call automation in GoHighLevel.</strong> Before you touch the client's phone, buy a local phone number in GHL (same area code as the business), upload a voicemail greeting, and build a workflow triggered by call status Busy, No Answer, or Voicemail that fires an SMS the moment a call is missed. This is the automation that actually sends the text back.
        </p>

        <p className="text-sm text-[#333] leading-relaxed mb-4">
          <strong>Step 2 Set up conditional call forwarding on the carrier side.</strong> This is one dial code, entered once on the client's mobile phone, and the call forwarding setup is done. Each mobile carrier uses a slightly different code:
        </p>

        {/* Carrier Code Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#1C2E4A]">
                <th className="text-left py-2 px-3 text-white font-semibold">Carrier</th>
                <th className="text-left py-2 px-3 text-white font-semibold">Turn on</th>
                <th className="text-left py-2 px-3 text-white font-semibold">Turn off</th>
              </tr>
            </thead>
            <tbody>
              {carrierCodes.map((item, idx) => (
                <tr key={idx} className="border-b border-[#E0E4EA]">
                  <td className="py-2 px-3 font-medium text-[#1C2E4A]">{item.carrier}</td>
                  <td className="py-2 px-3 text-[#0E9BF0] font-mono text-sm">{item.turnOn}</td>
                  <td className="py-2 px-3 text-[#667] font-mono text-sm">{item.turnOff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#333] leading-relaxed mb-4">
          They dial it like a phone call, hit call, and hear a confirmation tone. That's it the safety net is live.
        </p>

        {/* Note Box */}
        <div className="bg-[#FFF8E1] border-l-4 border-[#F8D000] rounded-md p-4 mb-6">
          <p className="text-sm text-[#333] leading-relaxed">
            Carrier codes and forwarding behavior can change or vary slightly by plan and region, so it's worth confirming the current code with the client's carrier before rolling this out at scale.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-[#1C2E4A] rounded-lg p-6 text-center mb-8">
          <p className="text-white text-sm font-medium mb-3">
            Want missed call text back and conditional call forwarding set up correctly the first time, without the trial and error?
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#F8D000] text-[#1C2E4A] font-bold px-6 py-2.5 rounded-md text-sm hover:bg-[#FFE44D] transition-all"
          >
            Book a Free GHL Setup Call
          </Link>
        </div>

        {/* Section: Two Things Worth Knowing */}
        <h2 className="text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          Two Things Worth Knowing Before You Turn On Conditional Call Forwarding
        </h2>

        <p className="text-sm text-[#333] leading-relaxed mb-3">
          <strong>Personal voicemail gets swept up too.</strong> If the client uses their personal cell phone for business calls, conditional call forwarding doesn't separate personal calls from business calls every missed call on that device routes to the GoHighLevel number. Most clients are fine with this trade-off once it's explained. If it's a concern, a dedicated business line for the missed call text back setup avoids the overlap entirely.
        </p>

        <p className="text-sm text-[#333] leading-relaxed mb-6">
          <strong>Don't forward the GoHighLevel number back to the client's cell phone.</strong> Doing that creates a call loop the call bounces between the carrier and GoHighLevel and never actually resolves. The GoHighLevel number should catch the call, play the voicemail greeting, and stop there. No forwarding past that point.
        </p>

        {/* Section: How to Explain to Client */}
        <h2 className="text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          How to Explain This to a Client (Without Losing Them)
        </h2>
        <p className="text-sm text-[#333] leading-relaxed mb-6">
          Don't lead with "we're taking over your phone system" that's the sentence that makes clients hesitate. Try this instead: "We're installing a safety net. Your phone works exactly like it does today. But when you're busy or on a job, instead of a dead-end voicemail, our system catches the lead and texts them back instantly, before they call the next business on the list."
        </p>

        {/* FAQ Section */}
        <h2 className="text-xl font-semibold text-[#1C2E4A] mt-8 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-base font-semibold text-[#1C2E4A] mb-1">{faq.q}</h3>
              <p className="text-sm text-[#333] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA 2 */}
        <div className="bg-[#1C2E4A] rounded-lg p-6 text-center mt-8">
          <p className="text-white text-sm font-medium mb-3">
            Not sure if your current setup is actually catching missed calls the right way?
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#F8D000] text-[#1C2E4A] font-bold px-6 py-2.5 rounded-md text-sm hover:bg-[#FFE44D] transition-all"
          >
            Get a Free 30-Minute Audit
          </Link>
        </div>

      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
    </>
  );
}