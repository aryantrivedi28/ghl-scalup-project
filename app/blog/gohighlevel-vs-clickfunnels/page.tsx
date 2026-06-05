import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelVsClickFunnelsClient from './client';

export const metadata: Metadata = {
  title: 'ClickFunnels to GoHighLevel Migration: What Breaks',
  description: 'URL import tool clones your pages. Automations, Stripe, and domain must be rebuilt. Full guide with 4 mistakes that cause failures.',
  keywords: 'GoHighLevel vs ClickFunnels, gohighlevel vs clickfunnels 2026, GoHighLevel or ClickFunnels for agencies, is GoHighLevel better than ClickFunnels, ClickFunnels vs GoHighLevel pricing, can GoHighLevel replace ClickFunnels',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'ClickFunnels to GoHighLevel Migration: What Breaks',
    description: 'Full pricing, feature, and use-case comparison with real 2026 numbers. GoHighLevel wins for agencies. ClickFunnels wins for solo entrepreneurs.',
    type: 'article',
    publishedTime: '2026-05-30T00:00:00Z',
    modifiedTime: '2026-05-30T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ClickFunnels', 'GHL Comparison', 'Agency Software', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-vs-clickfunnels-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel vs ClickFunnels (2026): Honest Comparison for Agencies',
    description: 'Full pricing, feature, and use-case comparison. GoHighLevel wins for agencies. ClickFunnels wins for solo entrepreneurs.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-vs-clickfunnels-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-clickfunnels',
  },
};

export default function GoHighLevelVsClickFunnelsPage() {
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
            "headline": "GoHighLevel vs ClickFunnels (2026): Honest Comparison for Agencies",
            "description": "GoHighLevel wins for agencies managing multiple clients. ClickFunnels wins for solo entrepreneurs who only need funnels. Full pricing, feature, and use-case comparison with real 2026 numbers.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-vs-clickfunnels-og.jpg",
            "datePublished": "2026-05-30",
            "dateModified": "2026-05-30",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-vs-clickfunnels"
            }
          })
        }}
      />
      <GoHighLevelVsClickFunnelsClient />
    </>
  );
}