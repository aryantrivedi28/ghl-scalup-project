import { Metadata } from 'next';
import Script from 'next/script';
import GHLMigrationChecklistClient from './client';

export const metadata: Metadata = {
  title: 'The Complete GoHighLevel Migration Checklist (2026) | GHL Scale Up',
  description: 'A 50-point checklist covering every phase of a GoHighLevel migration: audit, data, automation rebuild, testing, and go-live. Save it, print it, or follow it step by step.',
  keywords: 'GoHighLevel migration checklist, GHL migration checklist 2026, pre migration audit checklist GHL, GoHighLevel migration steps checklist, data migration checklist CRM, GoHighLevel go live checklist, migration audit template GoHighLevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'The Complete GoHighLevel Migration Checklist (2026)',
    description: 'A 50-point checklist covering every phase of a GoHighLevel migration: audit, data, automation rebuild, testing, and go-live.',
    type: 'article',
    publishedTime: '2026-06-10T00:00:00Z',
    modifiedTime: '2026-06-10T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Migration', 'Checklist', 'Migration Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-migration-checklist-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'The Complete GoHighLevel Migration Checklist (2026)',
    description: '50-point checklist covering audit, data, automation rebuild, testing, and go-live.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-migration-checklist-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/gohighlevel-migration-checklist',
  },
};

export default function GHLMigrationChecklistPage() {
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
            "headline": "The Complete GoHighLevel Migration Checklist (2026)",
            "description": "A 50-point checklist covering every phase of a GoHighLevel migration: audit, data, automation rebuild, testing, and go-live. Save it, print it, or follow it step by step.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-migration-checklist-og.jpg",
            "datePublished": "2026-06-10",
            "dateModified": "2026-06-10",
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
              "@id": "https://www.ghlscaleup.com/gohighlevel-migration-checklist"
            }
          })
        }}
      />
      <GHLMigrationChecklistClient />
    </>
  );
}