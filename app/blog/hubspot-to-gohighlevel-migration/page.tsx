import { Metadata } from 'next';
import Script from 'next/script';
import HubSpotToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'How to Migrate from HubSpot to GoHighLevel (2026)',
  description: 'What transfers, what breaks, and how long it takes. Includes the critical 25-day HubSpot cancellation warning. Step-by-step.',
  keywords: 'HubSpot to GoHighLevel migration, migrate from HubSpot to GoHighLevel, HubSpot to GHL migration guide, how to migrate HubSpot to GoHighLevel, HubSpot data export to GoHighLevel, GoHighLevel migration service',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Migrate from HubSpot to GoHighLevel: Step-by-Step Guide (2026)',
    description: 'What data transfers, what breaks, how to rebuild workflows, and how to avoid costly migration mistakes.',
    type: 'article',
    publishedTime: '2026-05-22T00:00:00Z',
    modifiedTime: '2026-05-22T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'HubSpot', 'CRM Migration', 'GHL Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/hubspot-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Migrate from HubSpot to GoHighLevel: Step-by-Step Guide (2026)',
    description: 'What data transfers, what breaks, how to rebuild workflows, and how to avoid costly migration mistakes.',
    images: ['https://www.ghlscaleup.com/images/blog/hubspot-to-ghl-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/hubspot-to-gohighlevel-migration',
  },
};

export default function HubSpotToGHLMigrationPage() {
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
            "headline": "How to Migrate from HubSpot to GoHighLevel: Step-by-Step Guide (2026)",
            "description": "A step-by-step guide to migrating from HubSpot to GoHighLevel — what data transfers, what breaks, how to rebuild workflows, and how to avoid the most costly migration mistakes.",
            "image": "https://www.ghlscaleup.com/images/blog/hubspot-to-ghl-migration-og.jpg",
            "datePublished": "2026-05-22",
            "dateModified": "2026-05-22",
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
              "@id": "https://www.ghlscaleup.com/blog/hubspot-to-gohighlevel-migration"
            }
          })
        }}
      />
      <HubSpotToGHLMigrationClient />
    </>
  );
}