import { Metadata } from 'next';
import Script from 'next/script';
import KeapToGoHighLevelMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Keap to GoHighLevel Migration: Complete 2026 Step-by-Step Guide | GHL Scale Up',
  description: 'Step-by-step guide to migrating from Keap (Infusionsoft) to GoHighLevel in 2026. Contact export, Campaign Builder rebuild, tag mapping, and PlusThis replacements. Updated July 2026.',
  keywords: 'keap to gohighlevel migration, infusionsoft to gohighlevel, migrate from keap to ghl, keap alternative gohighlevel, keap vs gohighlevel, keap campaigns to ghl workflows, keap tag migration ghl, keap data export csv',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Keap to GoHighLevel Migration: Complete 2026 Step-by-Step Guide',
    description: 'Step-by-step guide to migrating from Keap (Infusionsoft) to GoHighLevel in 2026. Contact export, Campaign Builder rebuild, tag mapping, and PlusThis replacements.',
    type: 'article',
    publishedTime: '2026-07-23T00:00:00Z',
    modifiedTime: '2026-07-23T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['Keap to GoHighLevel', 'Infusionsoft Migration', 'Campaign Builder', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/keap-to-gohighlevel-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Keap to GoHighLevel Migration: Complete 2026 Step-by-Step Guide',
    description: 'Step-by-step guide to migrating from Keap (Infusionsoft) to GoHighLevel in 2026. Contact export, Campaign Builder rebuild, tag mapping, and PlusThis replacements.',
    images: ['https://www.ghlscaleup.com/images/blog/keap-to-gohighlevel-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/keap-to-gohighlevel-migration',
  },
};

export default function KeapToGoHighLevelMigrationPage() {
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
            "headline": "How to Migrate from Keap (Infusionsoft) to GoHighLevel in 2026",
            "description": "Step-by-step guide to migrating from Keap (Infusionsoft) to GoHighLevel in 2026. Contact export, Campaign Builder rebuild, tag mapping, and PlusThis replacements.",
            "image": "https://www.ghlscaleup.com/images/blog/keap-to-gohighlevel-migration-og.jpg",
            "datePublished": "2026-07-23",
            "dateModified": "2026-07-23",
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
              "@id": "https://www.ghlscaleup.com/blog/keap-to-gohighlevel-migration"
            }
          })
        }}
      />

      {/* HowTo Schema JSON-LD */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Migrate from Keap to GoHighLevel",
            "description": "Step-by-step guide to migrating from Keap to GoHighLevel including contact export, Campaign Builder rebuild, tag classification, and PlusThis replacement.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Audit your Keap instance", "text": "Review contacts, custom fields, tags, active Campaign Builder sequences, PlusThis add-ons, and landing pages." },
              { "@type": "HowToStep", "position": 2, "name": "Clean and export contacts", "text": "Normalize multiple emails to a single primary email. Create fake unique emails for contacts without emails. Export via Keap > Contacts > People > Export." },
              { "@type": "HowToStep", "position": 3, "name": "Classify tags", "text": "Classify every Keap tag: segmentation (migrate), campaign state (rebuild in workflows), utility (convert to custom fields), legacy (archive)." },
              { "@type": "HowToStep", "position": 4, "name": "Recreate custom fields in GHL", "text": "In GoHighLevel, recreate all Keap custom fields, pipelines, and tag categories before importing." },
              { "@type": "HowToStep", "position": 5, "name": "Test import", "text": "Import 100-200 contacts first. Verify field mapping, email normalization, and tag attachment." },
              { "@type": "HowToStep", "position": 6, "name": "Rebuild Campaign Builder sequences", "text": "Document every active Keap campaign (business intent, entry goal, sequence steps, decision nodes, exit conditions) and rebuild in GHL Workflow Builder." },
              { "@type": "HowToStep", "position": 7, "name": "Replace PlusThis and integrations", "text": "Replace PlusThis features with GHL-native equivalents. Review and rebuild Zapier integrations." },
              { "@type": "HowToStep", "position": 8, "name": "Run parallel and cutover", "text": "Run Keap and GHL in parallel for 2-3 weeks, validate, then cut over. Keep Keap as archive for 60-90 days." }
            ]
          })
        }}
      />
      <KeapToGoHighLevelMigrationClient />
    </>
  );
}