import { Metadata } from 'next';
import Script from 'next/script';
import WhyAgenciesSwitchingToGHLClient from './client';

export const metadata: Metadata = {
  title: 'Why Agencies Are Switching to GoHighLevel in 2026 (5 Real Reasons) | GHL Scale Up',
  description: 'The real reasons agencies are moving to GoHighLevel in 2026: tool consolidation, flat-rate pricing, white-label SaaS revenue, AI features, and sub-account architecture. Not a sales pitch. Honest analysis.',
  keywords: 'why agencies are switching to GoHighLevel, agencies moving to GoHighLevel 2026, GoHighLevel for agencies 2026, why switch to GoHighLevel, GoHighLevel tool consolidation agencies, GoHighLevel replace multiple tools, GoHighLevel agency benefits 2026',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Why Agencies Are Switching to GoHighLevel in 2026 (5 Real Reasons)',
    description: 'Tool consolidation, flat-rate pricing, white-label SaaS revenue, AI features, and sub-account architecture. Honest analysis from 200+ migrations.',
    type: 'article',
    publishedTime: '2026-06-06T00:00:00Z',
    modifiedTime: '2026-06-06T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Agencies', 'GHL Migration', 'Agency Software', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/agencies-switching-ghl-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Why Agencies Are Switching to GoHighLevel in 2026',
    description: '5 real reasons: tool consolidation, flat-rate pricing, white-label SaaS, AI features, and sub-account architecture.',
    images: ['https://www.ghlscaleup.com/images/blog/agencies-switching-ghl-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/why-agencies-switching-to-gohighlevel',
  },
};

export default function WhyAgenciesSwitchingToGHLPage() {
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
            "headline": "Why Agencies Are Switching to GoHighLevel in 2026 (5 Real Reasons)",
            "description": "The real reasons agencies are moving to GoHighLevel in 2026: tool consolidation, flat-rate pricing, white-label SaaS revenue, AI features, and sub-account architecture.",
            "image": "https://www.ghlscaleup.com/images/blog/agencies-switching-ghl-og.jpg",
            "datePublished": "2026-06-06",
            "dateModified": "2026-06-06",
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
              "@id": "https://www.ghlscaleup.com/blog/why-agencies-switching-to-gohighlevel"
            }
          })
        }}
      />
      <WhyAgenciesSwitchingToGHLClient />
    </>
  );
}