// app/zapier-website-forms-to-ghl/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Globe,
  Mail,
  Webhook,
  Database,
  Users,
  Settings,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Connect Existing Website Forms to GHL With Zapier (No Form Swap)',
  description: 'Push leads from an existing website form into GoHighLevel using Zapier — no need to replace the form. Here\'s the webhook-to-contact setup, step by step.',
  keywords: 'zapier website forms to ghl, connect forms to ghl, zapier ghl integration, website form to gohighlevel, ghl lead capture',
  alternates: {
    canonical: 'https://ghlscaleup.com/zapier-website-forms-to-ghl',
  },
  openGraph: {
    title: 'Connect Existing Website Forms to GHL With Zapier (No Form Swap)',
    description: 'Push leads from an existing website form into GoHighLevel using Zapier — no need to replace the form. Here\'s the webhook-to-contact setup, step by step.',
    url: 'https://ghlscaleup.com/zapier-website-forms-to-ghl',
    siteName: 'GHL Scale Up',
    type: 'article',
    publishedTime: '2026-07-31T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect Existing Website Forms to GHL With Zapier (No Form Swap)',
    description: 'Push leads from an existing website form into GoHighLevel using Zapier — no need to replace the form. Here\'s the webhook-to-contact setup, step by step.',
  },
};

export default function ZapierWebsiteFormsToGHLPage() {
  const captureMethods = [
    { 
      method: 'Webhook by Zapier', 
      bestFor: 'Custom-coded forms or forms with developer access',
      howItConnects: 'The form posts submission data directly to a Zapier webhook URL'
    },
    { 
      method: 'Zapier Email Parser', 
      bestFor: 'Forms that only send submissions to an inbox, no webhook option',
      howItConnects: 'Zapier reads the incoming email and extracts the lead fields'
    },
    { 
      method: 'Native Zapier integration', 
      bestFor: 'Formspree, Netlify Forms, WPForms (WordPress)',
      howItConnects: 'Zapier connects to the form platform directly, no extra setup needed'
    },
  ];

  const faqs = [
    {
      q: "Do I need to replace the client's existing website form to connect it to GHL?",
      a: "No. Zapier connects to the existing form's submission data — through a webhook, an email parser, or a native integration — without requiring any change to the form itself or the client's website."
    },
    {
      q: "What if the existing form doesn't support webhooks?",
      a: "A Zapier Email Parser can capture lead data if the form only sends submissions to an inbox, or a Google Tag Manager trigger can be set up to fire a webhook on submission as a workaround."
    },
    {
      q: "Does this push leads straight into GHL automations?",
      a: "Yes. Once the 'Create/Update Contact' action adds the lead to GoHighLevel, that contact enters whichever pipeline or workflow is set up to trigger from a new contact, the same as a lead captured through a native GHL form."
    },
    {
      q: "Which GHL action actually creates the contact from Zapier?",
      a: "The 'Create/Update Contact' action inside the GoHighLevel Zapier integration. It checks for an existing contact match first, then either creates a new record or updates the existing one, which avoids duplicate contacts from repeat form submissions."
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[760px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors flex-shrink-0">Home</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5] flex-shrink-0" />
          <span className="text-[#1A2236] font-medium">Zapier Website Forms to GHL</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-[1.9rem] font-bold text-[#1C2E4A] mb-2 leading-tight">
          How to Connect Leads From an Existing Website Form Into GHL Using Zapier
        </h1>
        
        {/* Byline */}
        <p className="text-xs sm:text-sm text-[#667] mb-6">
          By GHL Scaleup Team &nbsp;•&nbsp; GoHighLevel setup specialists &nbsp;•&nbsp; Updated July 2026
        </p>

        {/* Quick Answer Box */}
        <div className="bg-[#F4F8FF] border-l-4 border-[#0E9BF0] rounded-md p-4 sm:p-5 mb-6">
          <p className="text-sm sm:text-base text-[#1C2E4A] leading-relaxed">
            <strong>Quick answer:</strong> You don't need to replace the client's existing website form to get its leads into GoHighLevel. Zapier sits in between — it captures the form submission, then sends that data straight into GHL as a new or updated contact using the "Create/Update Contact" action. The form on the website stays exactly as it is. Only where the lead data goes afterward changes.
          </p>
        </div>

        {/* Section: The Problem This Solves */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          The Problem This Solves
        </h2>
        <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-3">
          Most clients already have a "Contact Us" form on their website before an agency ever touches their GoHighLevel account. Swapping that form out for a GHL form is usually not an easy sell — clients are attached to how their site looks and works, and ripping out a working form to make one automation possible is a hard conversation to have.
        </p>
        <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-6">
          The problem is what happens without that swap: leads submitted through the existing form land in an inbox or a backend somewhere, completely disconnected from GHL. They never enter a pipeline, never trigger a follow-up automation, and never show up in reporting. That's a real chunk of leads the client is generating that GoHighLevel simply never sees.
        </p>

        {/* Section: When Do You Use Zapier */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          When Do You Use Zapier for This?
        </h2>
        <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-3">
          This approach is for the exact situation above: the client has a working website form, they're not open to replacing it with a GHL form, and you still need those leads flowing into GoHighLevel pipelines and automations. Zapier works as the middleman — it doesn't touch the client's website design or form fields, it just watches for a new submission and relays it to GHL the moment one comes in.
        </p>
        <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-6">
          It's a different approach from embedding a native GHL form, and that's the point — nothing on the client's site changes. The connection happens entirely on the backend, between the form's data and GoHighLevel's contact record.
        </p>

        {/* Section: How the Connection Works */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          How the Zapier-to-GHL Connection Works
        </h2>
        <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-4">
          There are three moving parts to this setup, and all three need to be in place before leads start flowing automatically:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#333] mb-6">
          <li>
            <strong>Capture the form submission.</strong> Depending on how the existing form is built, this could be a Webhook by Zapier, a Zapier Email Parser (if submissions currently go to an inbox), or a native Zapier integration if the form runs on Formspree, Netlify Forms, or WPForms.
          </li>
          <li>
            <strong>Trigger a Zap on that submission.</strong> Once Zapier can see the form data — through a webhook, a parsed email, or a native trigger — a Zap fires automatically every time a new lead comes in.
          </li>
          <li>
            <strong>Send the data into GHL.</strong> The Zap's action step uses GoHighLevel's "Create/Update Contact" action to push the name, email, phone, and any other captured fields into the right pipeline, which is also what lets GHL automations and workflows pick the lead up from there.
          </li>
        </ul>

        {/* Capture Methods Table */}
        <div className="overflow-x-auto mb-6 -mx-4 sm:mx-0">
          <div className="min-w-full inline-block align-middle px-4 sm:px-0">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1C2E4A]">
                  <th className="text-left py-2 px-2 sm:px-3 text-white font-semibold">Capture Method</th>
                  <th className="text-left py-2 px-2 sm:px-3 text-white font-semibold">Best For</th>
                  <th className="text-left py-2 px-2 sm:px-3 text-white font-semibold">How It Connects</th>
                </tr>
              </thead>
              <tbody>
                {captureMethods.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#E0E4EA]">
                    <td className="py-2 px-2 sm:px-3 font-medium text-[#1C2E4A]">{item.method}</td>
                    <td className="py-2 px-2 sm:px-3 text-[#333]">{item.bestFor}</td>
                    <td className="py-2 px-2 sm:px-3 text-[#333]">{item.howItConnects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note Box */}
        <div className="bg-[#FFF8E1] border-l-4 border-[#F8D000] rounded-md p-4 sm:p-5 mb-6">
          <p className="text-sm sm:text-base text-[#333] leading-relaxed">
            If the existing form doesn't support webhooks natively, a small snippet of code or a Google Tag Manager trigger set up to fire the webhook on submission is usually enough to bridge the gap — this is a common workaround for older or custom-built forms.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-[#1C2E4A] rounded-lg p-5 sm:p-6 text-center mb-8">
          <p className="text-white text-sm sm:text-base font-medium mb-3">
            Want your client's existing website form feeding leads into GHL without touching their site?
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#F8D000] text-[#1C2E4A] font-bold px-5 sm:px-6 py-2.5 rounded-md text-sm sm:text-base hover:bg-[#FFE44D] transition-all"
          >
            Book a Free GHL Setup Call
          </Link>
        </div>

        {/* Section: What to Watch Out For */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          What to Watch Out For
        </h2>

        <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-3">
          <strong>Field mapping has to match on both ends.</strong> The "Create/Update Contact" action in GHL only fills in what it's told to. If the form's field names don't map cleanly to GHL's contact fields (name, email, phone, custom fields), leads can land in GoHighLevel with missing or blank data.
        </p>

        <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-6">
          <strong>Duplicate contacts are a common gotcha.</strong> Using "Create/Update Contact" instead of just "Create Contact" matters here — it checks for an existing match (usually by email or phone) before deciding whether to create a new record or update the existing one, which keeps the same lead from creating duplicate entries if they submit the form more than once.
        </p>

        {/* Section: How to Explain to Client */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#1C2E4A] mt-8 mb-3">
          How to Explain This to a Client
        </h2>
        <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-6">
          Don't lead with "we need to connect your form to a third-party tool" — that raises questions clients don't need to worry about. Try this instead: "Your contact form stays exactly as it is on your site. We're just connecting what happens after someone submits it, so every lead automatically lands in your CRM instead of sitting in an inbox."
        </p>

        {/* FAQ Section */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#1C2E4A] mt-8 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-sm sm:text-base font-semibold text-[#1C2E4A] mb-1">{faq.q}</h3>
              <p className="text-sm sm:text-base text-[#333] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA 2 */}
        <div className="bg-[#1C2E4A] rounded-lg p-5 sm:p-6 text-center mt-8">
          <p className="text-white text-sm sm:text-base font-medium mb-3">
            Not sure your client's current forms are actually feeding leads into GHL?
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#F8D000] text-[#1C2E4A] font-bold px-5 sm:px-6 py-2.5 rounded-md text-sm sm:text-base hover:bg-[#FFE44D] transition-all"
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