import { Metadata } from 'next';
import Script from 'next/script';
import KajabiToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Kajabi to GoHighLevel Migration Guide (2026): Course Importer Explained',
  description: 'GoHighLevel\'s Kajabi Course Importer explained: what it actually imports, what still needs rebuilding, and a realistic migration timeline.',
  keywords: 'kajabi to gohighlevel migration, migrate kajabi to gohighlevel, kajabi course migration gohighlevel, kajabi to ghl migration guide, does gohighlevel have a kajabi importer, can kajabi courses be imported into gohighlevel, what happens to kajabi students when migrating',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Kajabi to GoHighLevel Migration Guide (2026): Course Importer Explained',
    description: 'GoHighLevel\'s Kajabi Course Importer explained: what it actually imports, what still needs rebuilding, and a realistic migration timeline.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Kajabi', 'Course Migration', 'Membership Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/kajabi-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Kajabi to GoHighLevel Migration Guide (2026): Course Importer Explained',
    description: 'GoHighLevel\'s Kajabi Course Importer explained: what it actually imports, what still needs rebuilding, and a realistic migration timeline.',
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
            "headline": "Kajabi to GoHighLevel Migration: What Actually Transfers (and What Doesn't)",
            "description": "A lot of migration guides, including an earlier version of this one, claim GoHighLevel has no way to import Kajabi course content. That's no longer accurate. GoHighLevel has a native Kajabi Course Importer and a separate email template importer — each with real limits worth understanding before you plan your timeline.",
            "image": "https://www.ghlscaleup.com/images/blog/kajabi-to-ghl-migration-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/kajabi-to-gohighlevel-migration"
            }
          })
        }}
      />
      <KajabiToGHLMigrationClient />
    </>
  );
}