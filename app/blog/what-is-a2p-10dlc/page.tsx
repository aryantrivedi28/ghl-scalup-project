import { Metadata } from 'next';
import Script from 'next/script';
import WhatIsA2P10DLCCLient from './client';

export const metadata: Metadata = {
  title: 'What Is A2P 10DLC? Complete Guide for GoHighLevel Users (2026) | GHL Scale Up',
  description: 'A2P 10DLC is the US carrier registration system every GHL user must complete before sending automated SMS. Required since February 2025. Plain-English explanation of what it is, why it exists, what it costs, and how to register. Updated June 2026.',
  keywords: 'a2p 10dlc, what is a2p 10dlc, a2p 10dlc meaning, what is a2p registration gohighlevel, gohighlevel a2p 10dlc, a2p vs 10dlc difference, why does gohighlevel need a2p registration, is a2p 10dlc required',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'What Is A2P 10DLC? Complete Guide for GoHighLevel Users (2026)',
    description: 'A2P 10DLC is the US carrier registration system every GHL user must complete before sending automated SMS. Required since February 2025. Plain-English explanation of what it is, why it exists, what it costs, and how to register.',
    type: 'article',
    publishedTime: '2026-06-27T00:00:00Z',
    modifiedTime: '2026-06-27T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'GoHighLevel', 'SMS Compliance', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/what-is-a2p-10dlc-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'What Is A2P 10DLC? Complete Guide for GoHighLevel Users (2026)',
    description: 'A2P 10DLC is the US carrier registration system every GHL user must complete before sending automated SMS. Required since February 2025.',
    images: ['https://www.ghlscaleup.com/images/blog/what-is-a2p-10dlc-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/what-is-a2p-10dlc',
  },
};

export default function WhatIsA2P10DLCPage() {
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
            "headline": "What Is A2P 10DLC? Complete Guide for GoHighLevel Users (2026)",
            "description": "A2P 10DLC is the US carrier registration system every GHL user must complete before sending automated SMS. Required since February 2025. Plain-English explanation of what it is, why it exists, what it costs, and how to register.",
            "image": "https://www.ghlscaleup.com/images/blog/what-is-a2p-10dlc-og.jpg",
            "datePublished": "2026-06-27",
            "dateModified": "2026-06-27",
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
              "@id": "https://www.ghlscaleup.com/blog/what-is-a2p-10dlc"
            }
          })
        }}
      />

      {/* DefinedTerm Schema JSON-LD */}
      <Script
        id="definedterm-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "name": "A2P 10DLC",
            "description": "Application-to-Person 10-Digit Long Code. The US carrier registration system requiring businesses sending automated SMS from 10-digit phone numbers to register their brand and campaign with The Campaign Registry before messages are delivered.",
            "inDefinedTermSet": {
              "@type": "DefinedTermSet",
              "name": "SMS Compliance Terminology"
            }
          })
        }}
      />
      <WhatIsA2P10DLCCLient />
    </>
  );
}