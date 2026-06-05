import { Metadata } from 'next';
import Script from 'next/script';
import ClickFunnelsToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs ClickFunnels (2026): Honest Comparison',
  description: 'At $297/mo GHL gives unlimited clients. ClickFunnels gives one workspace. Full pricing, features, and agency verdict. Updated 2026.',
  keywords: 'ClickFunnels to GoHighLevel migration, migrate ClickFunnels to GoHighLevel, ClickFunnels to GHL migration guide, how to migrate ClickFunnels to GoHighLevel, ClickFunnels funnel import GoHighLevel, ClickFunnels contacts export GoHighLevel, GoHighLevel replace ClickFunnels',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Migrate from ClickFunnels to GoHighLevel: What Breaks & How to Fix It (2026)',
    description: 'GHL can import your funnels by URL, but automations, domains, and payment integrations all need rebuilding. Step-by-step guide with what breaks and how long it takes.',
    type: 'article',
    publishedTime: '2026-05-23T00:00:00Z',
    modifiedTime: '2026-05-23T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ClickFunnels', 'CRM Migration', 'Funnel Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/clickfunnels-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Migrate from ClickFunnels to GoHighLevel',
    description: 'What breaks, how to fix it, and how long it takes.',
    images: ['https://www.ghlscaleup.com/images/blog/clickfunnels-to-ghl-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/clickfunnels-to-gohighlevel-migration',
  },
};

export default function ClickFunnelsToGHLMigrationPage() {
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
            "headline": "How to Migrate from ClickFunnels to GoHighLevel: What Breaks & How to Fix It (2026)",
            "description": "Migrating from ClickFunnels to GoHighLevel? GHL can import your funnels by URL, but automations, domains, and payment integrations all need rebuilding. Step-by-step guide with what breaks and how long it takes.",
            "image": "https://www.ghlscaleup.com/images/blog/clickfunnels-to-ghl-migration-og.jpg",
            "datePublished": "2026-05-23",
            "dateModified": "2026-05-23",
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
              "@id": "https://www.ghlscaleup.com/blog/clickfunnels-to-gohighlevel-migration"
            }
          })
        }}
      />
      <ClickFunnelsToGHLMigrationClient />
    </>
  );
}