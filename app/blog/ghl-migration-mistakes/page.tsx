import { Metadata } from 'next';
import Script from 'next/script';
import GHLMigrationMistakesClient from './client';

export const metadata: Metadata = {
  title: '8 Common GHL Migration Mistakes Agencies Make (And How to Fix Them) | GHL Scale Up',
  description: '73% of GHL migrations hit problems nearly all from planning gaps, not the platform. The 8 most common mistakes agencies make when migrating to GoHighLevel and exactly how to avoid each one.',
  keywords: 'GHL migration mistakes, GoHighLevel migration mistakes to avoid, common GoHighLevel migration errors, GoHighLevel migration problems agencies, why GHL migrations fail, GoHighLevel data migration errors, GHL automation rebuild mistakes, GoHighLevel migration best practices',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: '8 Common GHL Migration Mistakes Agencies Make (And How to Fix Them)',
    description: '73% of GHL migrations hit problems. The 8 most common mistakes and exactly how to avoid each one.',
    type: 'article',
    publishedTime: '2026-06-01T00:00:00Z',
    modifiedTime: '2026-06-01T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Migration', 'Migration Mistakes', 'CRM Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-migration-mistakes-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: '8 Common GHL Migration Mistakes Agencies Make',
    description: '73% of GHL migrations hit problems. The 8 most common mistakes and how to avoid them.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-migration-mistakes-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/ghl-migration-mistakes',
  },
};

export default function GHLMigrationMistakesPage() {
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
            "headline": "8 Common GHL Migration Mistakes Agencies Make (And How to Fix Them)",
            "description": "73% of GHL migrations hit problems. The 8 most common mistakes agencies make when migrating to GoHighLevel and exactly how to avoid each one.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-migration-mistakes-og.jpg",
            "datePublished": "2026-06-01",
            "dateModified": "2026-06-01",
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
              "@id": "https://www.ghlscaleup.com/blog/ghl-migration-mistakes"
            }
          })
        }}
      />
      <GHLMigrationMistakesClient />
    </>
  );
}