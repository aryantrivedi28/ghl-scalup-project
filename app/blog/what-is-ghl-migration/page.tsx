import { Metadata } from 'next';
import Script from 'next/script';
import WhatIsGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'What Is GoHighLevel Migration? A Beginner\'s Guide (2026) | GHL Scale Up',
  description: 'GoHighLevel migration means moving your contacts, pipelines and automations from another CRM to GoHighLevel. Plain English explanation of what it involves, how long it takes, and whether you need one.',
  keywords: 'what is GoHighLevel migration, GoHighLevel migration explained, GHL migration guide for beginners, how does GoHighLevel migration work, GoHighLevel migration process steps, do I need a GHL migration, GoHighLevel migration cost 2026',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'What Is GoHighLevel Migration? A Beginner\'s Guide (2026)',
    description: 'GoHighLevel migration means moving your contacts, pipelines and automations from another CRM to GoHighLevel. Plain English explanation for beginners.',
    type: 'article',
    publishedTime: '2026-06-07T00:00:00Z',
    modifiedTime: '2026-06-07T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Migration', 'CRM Migration', 'Beginner Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/what-is-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'What Is GoHighLevel Migration? A Beginner\'s Guide (2026)',
    description: 'Plain English explanation of what GHL migration involves, how long it takes, and whether you need one.',
    images: ['https://www.ghlscaleup.com/images/blog/what-is-ghl-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/what-is-ghl-migration',
  },
};

export default function WhatIsGHLMigrationPage() {
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
            "headline": "What Is GoHighLevel Migration? A Beginner's Guide (2026)",
            "description": "GoHighLevel migration means moving your contacts, pipelines and automations from another CRM to GoHighLevel. Plain English explanation of what it involves, how long it takes, and whether you need one.",
            "image": "https://www.ghlscaleup.com/images/blog/what-is-ghl-migration-og.jpg",
            "datePublished": "2026-06-07",
            "dateModified": "2026-06-07",
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
              "@id": "https://www.ghlscaleup.com/blog/what-is-ghl-migration"
            }
          })
        }}
      />
      <WhatIsGHLMigrationClient />
    </>
  );
}