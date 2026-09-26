import { Metadata } from 'next';
import Script from 'next/script';
import A2P10DLCFeesExplainedClient from './client';

export const metadata: Metadata = {
  title: 'A2P 10DLC Fees in GoHighLevel: 2026 Cost Breakdown',
  description: 'What A2P 10DLC actually costs in GoHighLevel: brand and campaign registration, monthly campaign fees, and SMS/MMS carrier costs, sourced from current HighLevel pricing.',
  keywords: 'a2p 10dlc fees gohighlevel, a2p 10dlc registration cost, gohighlevel a2p monthly fee, a2p campaign vetting fee, is a2p 10dlc free, a2p resubmission fee gohighlevel, carrier sms fees a2p gohighlevel, does gohighlevel markup a2p fees',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P 10DLC Fees in GoHighLevel: 2026 Cost Breakdown',
    description: 'What A2P 10DLC actually costs in GoHighLevel: brand and campaign registration, monthly campaign fees, and SMS/MMS carrier costs, sourced from current HighLevel pricing.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Fees', 'Cost Breakdown', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-10dlc-fees-explained-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P 10DLC Fees in GoHighLevel: 2026 Cost Breakdown',
    description: 'What A2P 10DLC actually costs in GoHighLevel: brand and campaign registration, monthly campaign fees, and SMS/MMS carrier costs, sourced from current HighLevel pricing.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-10dlc-fees-explained-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-10dlc-fees-explained',
  },
};

export default function A2P10DLCFeesExplainedPage() {
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
            "headline": "A2P 10DLC Fees in GoHighLevel: Registration, Monthly and Carrier Costs",
            "description": "A2P 10DLC is not free, but GoHighLevel does not add a markup to the registration or messaging fees. Three parties actually charge you: The Campaign Registry (TCR) for registration and vetting, TCR again for a recurring monthly fee per active Campaign, and mobile carriers for per-message surcharges on top of the SMS and MMS rate. Your first Brand and Campaign are billed together as one bundled fee, from $22.50 to $64.00 depending on the Brand type you register. Every Campaign after that costs $15.00 to submit. Resubmitting a rejected Campaign is free.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-10dlc-fees-explained-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-10dlc-fees-explained"
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
                "name": "Is A2P 10DLC free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Registering a Brand and Campaign carries a one-time fee, active Campaigns carry a monthly fee, and sending messages carries a per-segment cost plus carrier surcharges."
                }
              },
              {
                "@type": "Question",
                "name": "Does GoHighLevel charge a markup on A2P fees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. HighLevel states that registration, vetting and monthly Campaign fees are passthrough charges from TCR, Twilio and carriers, with no HighLevel markup."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a fee to resubmit a rejected Campaign?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. HighLevel does not charge an additional Campaign Vetting Fee when you resubmit a rejected Campaign."
                }
              },
              {
                "@type": "Question",
                "name": "How much does A2P Brand registration cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "$22.50 for a Sole Proprietor or Low Volume Standard Brand, or $64.00 for a High Volume Standard Brand, bundled with your first Campaign and Fast Track processing."
                }
              },
              {
                "@type": "Question",
                "name": "Do I pay a fee for every Campaign?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your first Campaign is included in the Brand registration bundle. Each additional Campaign under the same Brand costs $15.00."
                }
              },
              {
                "@type": "Question",
                "name": "Are fees different for agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The underlying TCR fees are the same per Brand and per Campaign regardless of who manages the account. What differs is scale: an agency pays this once per client sub-account, not once for the whole agency."
                }
              }
            ]
          })
        }}
      />
      <A2P10DLCFeesExplainedClient />
    </>
  );
}