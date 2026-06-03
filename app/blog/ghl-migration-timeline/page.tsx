import { Metadata } from 'next';
import Script from 'next/script';
import GHLMigrationTimelineClient from './client';

export const metadata: Metadata = {
  title: 'GHL Migration Timeline: How Long Does It Actually Take? (2026)',
  description: 'Simple GHL migration: 1 to 2 weeks. Complex: 6 to 8 weeks. Timeline is driven by automation complexity not contact volume. Platform-by-platform breakdown.',
  keywords: 'how long does GoHighLevel migration take, GHL migration timeline, GoHighLevel migration timeline by platform, how long to migrate from HubSpot to GoHighLevel, GoHighLevel migration time estimate, GHL migration complexity factors, GoHighLevel migration checklist timeline',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GHL Migration Timeline: How Long Does It Actually Take? (2026)',
    description: 'Simple GHL migration: 1 to 2 weeks. Complex agency migration: 6 to 8 weeks. The timeline is driven by automation complexity, not contact volume. Platform-by-platform breakdown.',
    type: 'article',
    publishedTime: '2026-05-29T00:00:00Z',
    modifiedTime: '2026-05-29T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Migration', 'Migration Timeline', 'CRM Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-migration-timeline-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GHL Migration Timeline: How Long Does It Actually Take?',
    description: 'Simple: 1 to 2 weeks. Complex: 6 to 8 weeks. Driven by automation complexity, not contact volume.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-migration-timeline-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/ghl-migration-timeline',
  },
};

export default function GHLMigrationTimelinePage() {
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
            "headline": "GHL Migration Timeline: How Long Does It Actually Take? (2026)",
            "description": "A simple GHL migration takes 1 to 2 weeks. A complex agency migration takes 6 to 8 weeks. The timeline is driven by automation complexity, not contact volume. Platform-by-platform breakdown with honest estimates.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-migration-timeline-og.jpg",
            "datePublished": "2026-05-29",
            "dateModified": "2026-05-29",
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
              "@id": "https://www.ghlscaleup.com/blog/ghl-migration-timeline"
            }
          })
        }}
      />
      <GHLMigrationTimelineClient />
    </>
  );
}