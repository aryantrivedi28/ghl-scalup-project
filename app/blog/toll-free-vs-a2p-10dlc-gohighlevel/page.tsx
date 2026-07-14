import { Metadata } from 'next';
import Script from 'next/script';
import TollFreeVsA2P10DLCClient from './client';

export const metadata: Metadata = {
  title: 'Toll-Free vs A2P 10DLC in GoHighLevel: Which Should You Choose? (2026) | GHL Scale Up',
  description: 'Toll-free numbers bypass A2P 10DLC registration but still need verification. A2P 10DLC gives higher MPS and a local-looking number. Full comparison of cost, approval time, deliverability, and use cases for GHL users. July 2026.',
  keywords: 'gohighlevel toll free number a2p alternative, toll free vs a2p 10dlc gohighlevel, should i use toll free or 10dlc gohighlevel, gohighlevel toll free verification, toll free number gohighlevel sms, a2p 10dlc alternative gohighlevel, gohighlevel toll free vs local number, can i use toll free instead of a2p gohighlevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Toll-Free vs A2P 10DLC in GoHighLevel: Which Should You Choose? (2026)',
    description: 'Toll-free numbers bypass A2P 10DLC registration but still need verification. A2P 10DLC gives higher MPS and a local-looking number. Full comparison of cost, approval time, deliverability, and use cases for GHL users.',
    type: 'article',
    publishedTime: '2026-07-16T00:00:00Z',
    modifiedTime: '2026-07-16T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Toll-Free', 'Comparison', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/toll-free-vs-a2p-10dlc-gohighlevel-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Toll-Free vs A2P 10DLC in GoHighLevel: Which Should You Choose? (2026)',
    description: 'Toll-free numbers bypass A2P 10DLC registration but still need verification. A2P 10DLC gives higher MPS and a local-looking number.',
    images: ['https://www.ghlscaleup.com/images/blog/toll-free-vs-a2p-10dlc-gohighlevel-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/toll-free-vs-a2p-10dlc-gohighlevel',
  },
};

export default function TollFreeVsA2P10DLCPage() {
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
            "headline": "Toll-Free vs A2P 10DLC in GoHighLevel: Which Should You Choose? (2026)",
            "description": "Toll-free numbers bypass A2P 10DLC registration but still need verification. A2P 10DLC gives higher MPS and a local-looking number. Full comparison of cost, approval time, deliverability, and use cases for GHL users.",
            "image": "https://www.ghlscaleup.com/images/blog/toll-free-vs-a2p-10dlc-gohighlevel-og.jpg",
            "datePublished": "2026-07-16",
            "dateModified": "2026-07-16",
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
              "@id": "https://www.ghlscaleup.com/blog/toll-free-vs-a2p-10dlc-gohighlevel"
            }
          })
        }}
      />
      <TollFreeVsA2P10DLCClient />
    </>
  );
}