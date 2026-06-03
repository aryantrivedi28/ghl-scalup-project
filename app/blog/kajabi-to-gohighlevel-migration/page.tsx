import { Metadata } from 'next';
import Script from 'next/script';
import KajabiToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Kajabi to GoHighLevel Migration: What Breaks and How to Fix It (2026)',
  description: 'Course content does not transfer automatically from Kajabi -- every lesson must be rebuilt manually. Timeline, what breaks, student re-enrolment, and mistakes to avoid.',
  keywords: 'Kajabi to GoHighLevel migration, migrate from Kajabi to GoHighLevel, Kajabi to GHL migration guide, how to migrate Kajabi to GoHighLevel, Kajabi course content migration GoHighLevel, Kajabi contacts export GoHighLevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Kajabi to GoHighLevel Migration: What Breaks and How to Fix It (2026)',
    description: 'Contacts transfer via CSV. Course content must be manually rebuilt in GHL membership module. Honest guide covering what breaks, how long it takes, and how to move without losing your students.',
    type: 'article',
    publishedTime: '2026-05-26T00:00:00Z',
    modifiedTime: '2026-05-26T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Kajabi', 'Course Migration', 'Membership Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/kajabi-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Kajabi to GoHighLevel Migration: What Breaks and How to Fix It',
    description: 'What transfers, what must be rebuilt, and how to move without losing your students.',
    images: ['https://www.ghlscaleup.com/images/blog/kajabi-to-ghl-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/kajabi-to-gohighlevel-migration',
  },
};

export default function KajabiToGHLMigrationPage() {
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
            "headline": "Kajabi to GoHighLevel Migration: What Breaks and How to Fix It (2026)",
            "description": "Migrating from Kajabi to GoHighLevel? Contacts transfer via CSV. Course content must be manually rebuilt in GHL's membership module. Honest guide covering what breaks, how long it takes, and how to move without losing your students.",
            "image": "https://www.ghlscaleup.com/images/blog/kajabi-to-ghl-migration-og.jpg",
            "datePublished": "2026-05-26",
            "dateModified": "2026-05-26",
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
              "@id": "https://www.ghlscaleup.com/blog/kajabi-to-gohighlevel-migration"
            }
          })
        }}
      />
      <KajabiToGHLMigrationClient />
    </>
  );
}