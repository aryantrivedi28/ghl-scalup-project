import { Metadata } from 'next';
import Script from 'next/script';
import HowToTransferGHLSubAccountClient from './client';

export const metadata: Metadata = {
  title: 'How to Transfer a GoHighLevel Sub-Account to Another Agency (2026) | GHL Scale Up',
  description: 'Step-by-step guide to transferring a GoHighLevel sub-account to another agency in 2026. What transfers, what doesn\'t, phone number handling, and the Eject alternative. Updated July 2026.',
  keywords: 'how to transfer gohighlevel sub-account, transfer ghl sub-account to another agency, gohighlevel sub-account transfer guide, move client from one ghl agency to another, ghl sub-account transfer relationship number, ghl eject sub-account to new agency, what transfers when ghl sub-account moved, ghl bulk sub-account transfer',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Transfer a GoHighLevel Sub-Account to Another Agency (2026 Complete Guide)',
    description: 'Step-by-step guide to transferring a GoHighLevel sub-account to another agency in 2026. What transfers, what doesn\'t, phone number handling, and the Eject alternative.',
    type: 'article',
    publishedTime: '2026-07-19T00:00:00Z',
    modifiedTime: '2026-07-19T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['Sub-Account Transfer', 'GHL Migration', 'Agency Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/how-to-transfer-ghl-sub-account-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Transfer a GoHighLevel Sub-Account to Another Agency (2026)',
    description: 'Step-by-step guide to transferring a GoHighLevel sub-account to another agency in 2026. What transfers, what doesn\'t, phone number handling, and the Eject alternative.',
    images: ['https://www.ghlscaleup.com/images/blog/how-to-transfer-ghl-sub-account-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/how-to-transfer-ghl-sub-account',
  },
};

export default function HowToTransferGHLSubAccountPage() {
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
            "headline": "How to Transfer a GoHighLevel Sub-Account to Another Agency (2026 Complete Guide)",
            "description": "Step-by-step guide to transferring a GoHighLevel sub-account to another agency in 2026. What transfers, what doesn't, phone number handling, and the Eject alternative.",
            "image": "https://www.ghlscaleup.com/images/blog/how-to-transfer-ghl-sub-account-og.jpg",
            "datePublished": "2026-07-19",
            "dateModified": "2026-07-19",
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
              "@id": "https://www.ghlscaleup.com/blog/how-to-transfer-ghl-sub-account"
            }
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
            "name": "How to Transfer a GoHighLevel Sub-Account to Another Agency",
            "description": "Step-by-step guide to transferring a GHL sub-account to another agency, including prerequisites, relationship number, transfer vs eject, and what transfers.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Confirm eligibility", "text": "Verify the sub-account is not white-label, your agency is not multi-location, and all active subscriptions are cancelled with reason 'Transferring to another agency.'" },
              { "@type": "HowToStep", "position": 2, "name": "Get the Relationship Number", "text": "Ask the receiving agency owner to send you their agency Relationship Number from the help icon in their dashboard." },
              { "@type": "HowToStep", "position": 3, "name": "Navigate to the sub-account", "text": "Log in to Agency Level dashboard, go to Sub-Accounts, find the sub-account, click Manage Client." },
              { "@type": "HowToStep", "position": 4, "name": "Initiate the transfer", "text": "Click Actions, select Transfer Sub-Account from the dropdown." },
              { "@type": "HowToStep", "position": 5, "name": "Choose Transfer to Existing Agency", "text": "Select Transfer to an Existing Agency (not Eject to a New Agency)." },
              { "@type": "HowToStep", "position": 6, "name": "Enter the Relationship Number", "text": "Input the Receiving Agency's Relationship Number. Double-check the number." },
              { "@type": "HowToStep", "position": 7, "name": "Review and confirm", "text": "Review transfer guidelines, check the confirmation box, enter your password, click Confirm." },
              { "@type": "HowToStep", "position": 8, "name": "Wait for receiving agency to approve", "text": "The receiving agency must accept the transfer request in their dashboard before the sub-account moves." }
            ]
          })
        }}
      />
      <HowToTransferGHLSubAccountClient />
    </>
  );
}