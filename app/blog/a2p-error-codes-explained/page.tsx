import { Metadata } from 'next';
import Script from 'next/script';
import A2PErrorCodesExplainedClient from './client';

export const metadata: Metadata = {
  title: 'A2P Error Codes 30882, 30883, 30886 and 30898 Explained (GoHighLevel 2026) | GHL Scale Up',
  description: 'Your A2P campaign was rejected with an error code. This guide covers what 30882, 30883, 30886, and 30898 mean, which ones can be fixed and resubmitted, and exactly what to change. Sourced from Twilio\'s official docs. July 2026.',
  keywords: 'a2p error code gohighlevel, a2p error code 30886, a2p error code 30883, a2p error code 30882, a2p error code 30898, gohighlevel a2p invalid campaign description, gohighlevel a2p content violation, gohighlevel a2p excessive ein',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Error Codes 30882, 30883, 30886 and 30898 Explained (GoHighLevel 2026)',
    description: 'Your A2P campaign was rejected with an error code. This guide covers what 30882, 30883, 30886, and 30898 mean, which ones can be fixed and resubmitted, and exactly what to change.',
    type: 'article',
    publishedTime: '2026-07-11T00:00:00Z',
    modifiedTime: '2026-07-11T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Error Codes', 'Troubleshooting', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-error-codes-explained-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Error Codes 30882, 30883, 30886 and 30898 Explained (GoHighLevel 2026)',
    description: 'Your A2P campaign was rejected with an error code. This guide covers what 30882, 30883, 30886, and 30898 mean, which ones can be fixed and resubmitted, and exactly what to change.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-error-codes-explained-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-error-codes-explained',
  },
};

export default function A2PErrorCodesExplainedPage() {
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
            "headline": "A2P Error Codes 30882, 30883, 30886 and 30898 Explained (GoHighLevel 2026)",
            "description": "Your A2P campaign was rejected with an error code. This guide covers what 30882, 30883, 30886, and 30898 mean, which ones can be fixed and resubmitted, and exactly what to change.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-error-codes-explained-og.jpg",
            "datePublished": "2026-07-11",
            "dateModified": "2026-07-11",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-error-codes-explained"
            }
          })
        }}
      />
      <A2PErrorCodesExplainedClient />
    </>
  );
}