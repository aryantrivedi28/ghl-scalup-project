import { Metadata } from 'next';
import Script from 'next/script';
import A2PRegistrationForAgenciesClient from './client';

export const metadata: Metadata = {
  title: 'A2P Registration for GoHighLevel Agencies: Managing Multiple Clients | GHL Scale Up',
  description: 'Every GHL client sub-account needs its own A2P brand and campaign registration. This agency guide covers the per-sub-account rule, email and phone limits, fee structure, and how to manage registrations at scale. July 2026.',
  keywords: 'a2p registration for agencies multiple clients, gohighlevel sub account a2p registration, can I use one a2p registration for multiple clients ghl, gohighlevel a2p agency email limit, gohighlevel a2p multiple sub accounts, how to manage a2p registration for multiple ghl clients, gohighlevel agency a2p compliance, a2p registration gohighlevel saas mode',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Registration for GoHighLevel Agencies: Managing Multiple Clients (2026)',
    description: 'Every GHL client sub-account needs its own A2P brand and campaign registration. This agency guide covers the per-sub-account rule, email and phone limits, fee structure, and how to manage registrations at scale.',
    type: 'article',
    publishedTime: '2026-07-08T00:00:00Z',
    modifiedTime: '2026-07-08T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Agencies', 'Multiple Clients', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-registration-for-agencies-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Registration for GoHighLevel Agencies: Managing Multiple Clients (2026)',
    description: 'Every GHL client sub-account needs its own A2P brand and campaign registration. This agency guide covers the per-sub-account rule, email and phone limits, fee structure, and how to manage registrations at scale.',
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
            "headline": "A2P Registration for GoHighLevel Agencies: Managing Multiple Client Accounts (2026)",
            "description": "Every GHL client sub-account needs its own A2P brand and campaign registration. This agency guide covers the per-sub-account rule, email and phone limits, fee structure, and how to manage registrations at scale.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-registration-for-agencies-og.jpg",
            "datePublished": "2026-07-08",
            "dateModified": "2026-07-08",
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

      {/* HowTo Schema for Agency Workflow */}
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
              { "@type": "HowToStep", "position": 1, "name": "Build a client intake form", "text": "Create a form collecting all required information: legal business name, EIN, physical address, website URL, use case description, opt-in form URL, Privacy Policy URL, and Terms of Service URL." },
              { "@type": "HowToStep", "position": 2, "name": "Verify the EIN before submitting", "text": "Ask the client to provide their CP 575 EIN Confirmation Letter as a complete PDF. Verify the legal name matches exactly." },
              { "@type": "HowToStep", "position": 3, "name": "Update the client's Privacy Policy", "text": "Ensure the Privacy Policy includes the required no-mobile-data-sharing clause. Ensure both Privacy Policy and Terms of Service links are live." },
              { "@type": "HowToStep", "position": 4, "name": "Log into the client's sub-account", "text": "Navigate to Settings — Phone Numbers — Trust Center. Click Start Registration under A2P Messaging." },
              { "@type": "HowToStep", "position": 5, "name": "Upload the CP 575 PDF first", "text": "Upload the complete PDF to auto-fill business name, EIN, and address fields, reducing manual entry errors." },
              { "@type": "HowToStep", "position": 6, "name": "Complete brand registration and OTP", "text": "Use a unique email (max 5 brands) and a mobile number not used for more than 2 previous registrations. Verify via OTP immediately." },
              { "@type": "HowToStep", "position": 7, "name": "Track registration status", "text": "Maintain a tracking sheet with sub-account name, brand date, brand status, campaign date, and campaign status. Review pending registrations every 2 to 3 business days." },
              { "@type": "HowToStep", "position": 8, "name": "Add new phone numbers without resubmission", "text": "Once approved, additional phone numbers are automatically registered under the same campaign." }
            ]
          })
        }}
      />
      <A2PRegistrationForAgenciesClient />
    </>
  );
}