import { Metadata } from 'next';
import Script from 'next/script';
import A2PCampaignRejectedFixClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel A2P Campaign Rejected: What It Means and How to Fix It | GHL Scale Up',
  description: 'Your GHL A2P campaign was rejected by carriers, not by GoHighLevel. This guide covers every common rejection reason, the exact fix for each one, how to resubmit without paying another $15 fee, and how to appeal.',
  keywords: 'a2p campaign rejected gohighlevel, why was my a2p campaign rejected, a2p campaign rejected resubmit, gohighlevel a2p appeal process, a2p campaign rejected fix, a2p forbidden use case list, gohighlevel a2p invalid website url error',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel A2P Campaign Rejected: What It Means and How to Fix It',
    description: 'Every common rejection reason, the exact fix for each one, how to resubmit without paying another $15 fee, and how to appeal.',
    type: 'article',
    publishedTime: '2026-06-14T00:00:00Z',
    modifiedTime: '2026-06-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'A2P 10DLC', 'Campaign Rejected', 'SMS Compliance', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-campaign-rejected-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel A2P Campaign Rejected: What It Means and How to Fix It',
    description: 'Every common rejection reason, the exact fix, and how to resubmit without paying another $15 fee.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-campaign-rejected-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-campaign-rejected-fix',
  },
};

export default function A2PCampaignRejectedFixPage() {
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
            "headline": "GoHighLevel A2P Campaign Rejected: What It Means and How to Fix It (2026)",
            "description": "Your GHL A2P campaign was rejected by carriers, not by GoHighLevel. This guide covers every common rejection reason, the exact fix for each one, how to resubmit without paying another $15 fee, and how to appeal.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-campaign-rejected-og.jpg",
            "datePublished": "2026-06-14",
            "dateModified": "2026-06-14",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-campaign-rejected-fix"
            }
          })
        }}
      />
      <A2PCampaignRejectedFixClient />
    </>
  );
}