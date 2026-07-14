import { Metadata } from 'next';
import Script from 'next/script';
import A2PTrustScoreMPSClient from './client';

export const metadata: Metadata = {
  title: 'A2P Trust Score and MPS Explained for GoHighLevel Users (2026) | GHL Scale Up',
  description: 'Your A2P Trust Score determines how many SMS you can send per second and your T-Mobile daily limit. This guide explains how Trust Scores work, who gets one, how MPS is calculated, and how to appeal a low score. July 2026.',
  keywords: 'a2p trust score gohighlevel, gohighlevel mps a2p, a2p trust score explained, a2p secondary vetting gohighlevel, t-mobile daily sms limit a2p, how to increase a2p throughput, a2p opt out rate suspension, gohighlevel a2p trust score low',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Trust Score and MPS Explained for GoHighLevel Users (2026)',
    description: 'Your A2P Trust Score determines how many SMS you can send per second and your T-Mobile daily limit. This guide explains how Trust Scores work, who gets one, how MPS is calculated, and how to appeal a low score.',
    type: 'article',
    publishedTime: '2026-07-14T00:00:00Z',
    modifiedTime: '2026-07-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Trust Score', 'MPS', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-trust-score-mps-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Trust Score and MPS Explained for GoHighLevel Users (2026)',
    description: 'Your A2P Trust Score determines how many SMS you can send per second and your T-Mobile daily limit. This guide explains how Trust Scores work, who gets one, how MPS is calculated, and how to appeal a low score.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-trust-score-mps-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-trust-score-mps',
  },
};

export default function A2PTrustScoreMPSPage() {
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
            "headline": "A2P Trust Score and Message Throughput (MPS) Explained for GoHighLevel Users (2026)",
            "description": "Your A2P Trust Score determines how many SMS you can send per second and your T-Mobile daily limit. This guide explains how Trust Scores work, who gets one, how MPS is calculated, and how to appeal a low score.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-trust-score-mps-og.jpg",
            "datePublished": "2026-07-14",
            "dateModified": "2026-07-14",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-trust-score-mps"
            }
          })
        }}
      />
      <A2PTrustScoreMPSClient />
    </>
  );
}