import { Metadata } from 'next';
import Script from 'next/script';
import A2PRegistrationForAgenciesClient from './client';

export const metadata: Metadata = {
  title: 'A2P Registration for GoHighLevel Agencies: Multi Client Guide',
  description: 'How agencies register and manage A2P 10DLC across multiple GoHighLevel clients: what each client needs, account limits, billing, SaaS Mode and number moves.',
  keywords: 'a2p registration for agencies multiple clients, gohighlevel sub account a2p registration, can I use one a2p registration for multiple clients ghl, gohighlevel a2p agency email limit, gohighlevel a2p multiple sub accounts, how to manage a2p registration for multiple ghl clients, gohighlevel agency a2p compliance, a2p registration gohighlevel saas mode',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Registration for GoHighLevel Agencies: Multi Client Guide',
    description: 'How agencies register and manage A2P 10DLC across multiple GoHighLevel clients: what each client needs, account limits, billing, SaaS Mode and number moves.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Agencies', 'Multiple Clients', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-registration-for-agencies-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Registration for GoHighLevel Agencies: Multi Client Guide',
    description: 'How agencies register and manage A2P 10DLC across multiple GoHighLevel clients: what each client needs, account limits, billing, SaaS Mode and number moves.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-registration-for-agencies-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-registration-for-agencies',
  },
};

export default function A2PRegistrationForAgenciesPage() {
  return (
    <>
      {/* Article Schema JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "A2P Registration for GoHighLevel Agencies: Managing Multiple Client Accounts",
            "description": "Each client business needs its own A2P 10DLC Brand and Campaign, registered from inside that client's sub-account in Trust Center. A Brand is the verified identity of one business, so an agency Brand cannot stand in for a set of unrelated clients, and HighLevel's documentation describes no agency wide registration that covers them all. For an agency, the real work is operational: collecting accurate information from every client, keeping contact details and consent evidence separate per business, tracking every registration to completion, and being clear with clients about who pays for what.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-registration-for-agencies-og.jpg",
            "datePublished": "2026-05-14",
            "dateModified": "2026-05-14",
            "author": {
              "@type": "Organization",
              "name": "GHL Scale Up Team",
              "url": "https://www.ghlscaleup.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GHL Scale Up",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ghlscaleup.com/web-app-manifest-192x192.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.ghlscaleup.com/blog/a2p-registration-for-agencies"
            }
          })
        }}
      />

      {/* FAQ Schema JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can one A2P Brand cover multiple clients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. A Brand represents one legal business, so separate clients need separate Brands, each registered in its own sub-account."
                }
              },
              {
                "@type": "Question",
                "name": "Is A2P registration at the agency level or sub-account level?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sub-account level. Registration and status appear in each sub-account's Trust Center, and A2P status does not travel with a phone number."
                }
              },
              {
                "@type": "Question",
                "name": "Can sub-accounts for the same business share a registration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I found no HighLevel documentation describing that. Sharing has been requested as a feature, so confirm in your Trust Center before assuming it works."
                }
              },
              {
                "@type": "Question",
                "name": "Does A2P registration happen automatically in SaaS Mode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Provisioning can connect the phone system, but the Brand and Campaign still have to be registered for each sub-account."
                }
              },
              {
                "@type": "Question",
                "name": "Can I mark up A2P fees for clients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HighLevel's billing guide describes a fixed 5% markup on A2P pass through charges when re-billing is enabled, with your configured re-billing amount applied on top. Your own service fee is separate. Check your agency billing before quoting."
                }
              },
              {
                "@type": "Question",
                "name": "Does an approved registration move with a phone number?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Within an agency, reattach the Brand and Campaign after moving a number. Between Twilio and LC Phone the registration has to be redone."
                }
              },
              {
                "@type": "Question",
                "name": "Do new numbers need a new registration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "New numbers need to be linked to the approved Campaign and show A2P Verified before sending. Check the label whenever numbers are added."
                }
              }
            ]
          })
        }}
      />

      {/* HowTo Schema JSON-LD */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Manage A2P Registration for Multiple GoHighLevel Clients",
            "description": "A step-by-step workflow for agencies to complete A2P brand and campaign registration across multiple client sub-accounts.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Confirm A2P applies", "text": "It applies to US bound messages from standard local numbers. Toll Free numbers use a separate verification, and Canadian scenarios are covered separately." },
              { "@type": "HowToStep", "position": 2, "name": "Run your intake", "text": "Use one standard form for every client so no registration starts with gaps." },
              { "@type": "HowToStep", "position": 3, "name": "Validate before submitting", "text": "Compare legal name, registration number and address against official records, confirm the website is live, and check that the use case, description and samples describe the real messaging." },
              { "@type": "HowToStep", "position": 4, "name": "Prepare the sub-account", "text": "Confirm the phone system is connected and the client's numbers are in place." },
              { "@type": "HowToStep", "position": 5, "name": "Register the Brand", "text": "In Settings, Phone System, Trust Center, register the Brand." },
              { "@type": "HowToStep", "position": 6, "name": "Register the Campaign", "text": "Once the Brand is eligible, run the compliance review and submit the Campaign." },
              { "@type": "HowToStep", "position": 7, "name": "Monitor the review", "text": "A Campaign stays Pending while under review. Do not create another Campaign just because it is slow." },
              { "@type": "HowToStep", "position": 8, "name": "Link and verify numbers", "text": "After approval, each number must be linked to the approved Campaign and show the green A2P Verified label." },
              { "@type": "HowToStep", "position": 9, "name": "Test", "text": "Send a test message, confirm opt out behavior works, and keep the client's consent evidence on file." },
              { "@type": "HowToStep", "position": 10, "name": "Record everything", "text": "Update your tracker for each client sub-account." }
            ]
          })
        }}
      />
      <A2PRegistrationForAgenciesClient />
    </>
  );
}