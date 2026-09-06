import { Metadata } from 'next';
import Script from 'next/script';
import ClickFunnelsToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'ClickFunnels to GoHighLevel Migration: What Breaks & How to Fix It (2026)',
  description: 'What GoHighLevel\'s URL import tool actually does, what breaks (automations, domains, tracking, memberships), and the exact steps to migrate without disrupting a live funnel.',
  keywords: 'clickfunnels to gohighlevel migration, migrate clickfunnels to gohighlevel, clickfunnels to ghl migration guide, how to migrate clickfunnels to gohighlevel, clickfunnels funnel import gohighlevel, clickfunnels contacts export gohighlevel, what breaks migrating clickfunnels to gohighlevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'ClickFunnels to GoHighLevel Migration: What Breaks & How to Fix It (2026)',
    description: 'What GoHighLevel\'s URL import tool actually does, what breaks (automations, domains, tracking, memberships), and the exact steps to migrate without disrupting a live funnel.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ClickFunnels', 'Funnel Migration', 'Migration Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/clickfunnels-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'ClickFunnels to GoHighLevel Migration: What Breaks & How to Fix It (2026)',
    description: 'What GoHighLevel\'s URL import tool actually does, what breaks, and the exact steps to migrate without disrupting a live funnel.',
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
            "headline": "How to Migrate from ClickFunnels to GoHighLevel: What Breaks & How to Fix It",
            "description": "If you're running a business on ClickFunnels and thinking about moving to GoHighLevel, the tool that decides how smooth this goes is GHL's URL import feature — and most guides either oversell what it does or barely explain it. This guide covers exactly what it does, what still breaks, and how to move a live funnel without losing leads or revenue.",
            "image": "https://www.ghlscaleup.com/images/blog/clickfunnels-to-ghl-migration-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/clickfunnels-to-gohighlevel-migration"
            }
          })
        }}
      />
      <ClickFunnelsToGHLMigrationClient />
    </>
  );
}