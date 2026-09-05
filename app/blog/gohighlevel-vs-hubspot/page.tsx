import { Metadata } from 'next';
import GoHighLevelVsHubSpotClient from './client';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'GoHighLevel vs HubSpot (2026): Honest Comparison for Agencies',
  description: 'Real 2026 pricing, a feature-by-feature breakdown, and an honest verdict on when GoHighLevel wins, when HubSpot wins, and when the answer depends on your business.',
  keywords: 'gohighlevel vs hubspot, gohighlevel vs hubspot pricing, ghl vs hubspot, gohighlevel vs hubspot for agencies, gohighlevel vs hubspot crm, hubspot vs gohighlevel features, which is better gohighlevel or hubspot',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel vs HubSpot (2026): Honest Comparison for Agencies',
    description: 'Real 2026 pricing, a feature-by-feature breakdown, and an honest verdict on when GoHighLevel wins, when HubSpot wins, and when the answer depends on your business.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'HubSpot', 'CRM Comparison', 'Agency Software', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-vs-hubspot-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel vs HubSpot (2026): Honest Comparison for Agencies',
    description: 'Real 2026 pricing, a feature-by-feature breakdown, and an honest verdict on when GoHighLevel wins, when HubSpot wins, and when the answer depends on your business.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-vs-hubspot-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-hubspot',
  },
};

export default function GoHighLevelVsHubSpotPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "GoHighLevel vs HubSpot: Which Platform Is Right for Your Business? (2026)",
            "description": "GoHighLevel and HubSpot overlap significantly on paper — both offer CRM, marketing automation, and sales tools — but they were built for different buyers, and choosing based on feature-count alone leads to the wrong decision. This comparison uses verified pricing, a category-by-category feature breakdown, and honest treatment of where each platform actually wins.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-vs-hubspot-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-vs-hubspot"
            }
          })
        }}
      />
      <GoHighLevelVsHubSpotClient />
    </>
  );
}