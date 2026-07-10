import { Metadata } from 'next';
import Script from 'next/script';
import A2P10DLCFeesExplainedClient from './client';

export const metadata: Metadata = {
  title: 'A2P 10DLC Fees Explained: Registration, Monthly and Carrier Costs (2026) | GHL Scale Up',
  description: 'A2P 10DLC is not free. There are three fee types: one-time registration, recurring monthly campaign fees, and carrier per-message charges. All are passthrough with no GHL markup. Full breakdown with 2026 updates. July 2026.',
  keywords: 'a2p 10dlc fees gohighlevel, a2p 10dlc registration cost, gohighlevel a2p monthly fee, a2p campaign vetting fee, is a2p 10dlc free, a2p resubmission fee gohighlevel, carrier sms fees a2p gohighlevel, does gohighlevel markup a2p fees',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P 10DLC Fees Explained: Registration, Monthly and Carrier Costs (2026)',
    description: 'A2P 10DLC is not free. There are three fee types: one-time registration, recurring monthly campaign fees, and carrier per-message charges. All are passthrough with no GHL markup.',
    type: 'article',
    publishedTime: '2026-07-10T00:00:00Z',
    modifiedTime: '2026-07-10T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Fees', 'Cost Breakdown', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-10dlc-fees-explained-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P 10DLC Fees Explained: Registration, Monthly and Carrier Costs (2026)',
    description: 'A2P 10DLC is not free. There are three fee types: one-time registration, recurring monthly campaign fees, and carrier per-message charges. All are passthrough with no GHL markup.',
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
            "headline": "A2P 10DLC Fees Explained: Registration, Monthly and Carrier Costs (2026)",
            "description": "A2P 10DLC is not free. There are three fee types: one-time registration, recurring monthly campaign fees, and carrier per-message charges. All are passthrough with no GHL markup.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-10dlc-fees-explained-og.jpg",
            "datePublished": "2026-07-10",
            "dateModified": "2026-07-10",
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
      <A2P10DLCFeesExplainedClient />
    </>
  );
}