import { Metadata } from 'next';
import Script from 'next/script';
import ZohoToGoHighLevelMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Zoho to GoHighLevel Migration: Complete 2026 Step-by-Step Guide | GHL Scale Up',
  description: 'Complete step-by-step guide to migrating from Zoho CRM to GoHighLevel in 2026. What transfers, what needs rebuilding, export limits, field mapping, and how to avoid data loss. Updated July 2026.',
  keywords: 'zoho to gohighlevel migration, migrate from zoho crm to gohighlevel, zoho ghl data export, zoho crm alternative gohighlevel, export zoho contacts to gohighlevel, zoho workflows ghl rebuild, zoho campaigns to gohighlevel, zoho to gohighlevel field mapping',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Zoho to GoHighLevel Migration: Complete 2026 Step-by-Step Guide',
    description: 'Complete step-by-step guide to migrating from Zoho CRM to GoHighLevel in 2026. What transfers, what needs rebuilding, export limits, field mapping, and how to avoid data loss.',
    type: 'article',
    publishedTime: '2026-07-21T00:00:00Z',
    modifiedTime: '2026-07-21T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['Zoho to GoHighLevel', 'Zoho GHL Migration', 'CRM Migration Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/zoho-to-gohighlevel-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Zoho to GoHighLevel Migration: Complete 2026 Step-by-Step Guide',
    description: 'Complete step-by-step guide to migrating from Zoho CRM to GoHighLevel in 2026. What transfers, what needs rebuilding, export limits, field mapping, and how to avoid data loss.',
    images: ['https://www.ghlscaleup.com/images/blog/zoho-to-gohighlevel-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/zoho-to-gohighlevel-migration',
  },
};

export default function ZohoToGoHighLevelMigrationPage() {
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
            "headline": "How to Migrate from Zoho CRM to GoHighLevel in 2026 (Complete Guide)",
            "description": "Complete step-by-step guide to migrating from Zoho CRM to GoHighLevel in 2026. What transfers, what needs rebuilding, export limits, field mapping, and how to avoid data loss.",
            "image": "https://www.ghlscaleup.com/images/blog/zoho-to-gohighlevel-migration-og.jpg",
            "datePublished": "2026-07-21",
            "dateModified": "2026-07-21",
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
              "@id": "https://www.ghlscaleup.com/blog/zoho-to-gohighlevel-migration"
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
            "name": "How to Migrate from Zoho CRM to GoHighLevel",
            "description": "Step-by-step guide to migrating from Zoho CRM to GoHighLevel including data export, field mapping, workflow rebuild, and parallel running.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Audit and clean Zoho data", "text": "Review Zoho data quality, identify obsolete records, and document custom fields and workflows." },
              { "@type": "HowToStep", "position": 2, "name": "Export data from Zoho", "text": "Navigate to Setup → Data Administration → Export. Export Contacts, Deals, Leads, and Accounts as CSV files. Note the 200,000-record limit and 7-day download window." },
              { "@type": "HowToStep", "position": 3, "name": "Prepare data for import", "text": "Reformat dates to YYYY-MM-DD and phone numbers to E.164 format. Map Zoho fields to GHL custom fields." },
              { "@type": "HowToStep", "position": 4, "name": "Recreate custom fields in GHL", "text": "In GoHighLevel, recreate all Zoho custom fields, pipelines, and tags before importing." },
              { "@type": "HowToStep", "position": 5, "name": "Test import", "text": "Import 100-200 contacts as a test batch. Verify field mapping, date formats, and phone numbers." },
              { "@type": "HowToStep", "position": 6, "name": "Full import", "text": "Run the full import after test batch verification passes." },
              { "@type": "HowToStep", "position": 7, "name": "Rebuild workflows in GHL", "text": "Document Zoho workflows and manually rebuild them in GHL's workflow builder." },
              { "@type": "HowToStep", "position": 8, "name": "Run parallel and cutover", "text": "Run Zoho and GHL in parallel for 2-3 weeks, validate, then cut over." }
            ]
          })
        }}
      />
      <ZohoToGoHighLevelMigrationClient />
    </>
  );
}