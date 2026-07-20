import { Metadata } from 'next';
import Script from 'next/script';
import SalesforceToGoHighLevelMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Salesforce to GoHighLevel Migration: Complete 2026 Guide | GHL Scale Up',
  description: 'Complete step-by-step guide to migrating from Salesforce to GoHighLevel in 2026. Object mapping, dependency-ordered export, workflow rebuild, and honest complexity assessment. Updated July 2026.',
  keywords: 'salesforce to gohighlevel migration, migrate from salesforce to ghl, salesforce gohighlevel data export, salesforce alternative gohighlevel, salesforce vs gohighlevel, salesforce workflows to ghl, salesforce custom objects ghl, salesforce to gohighlevel cost savings',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Salesforce to GoHighLevel Migration: Complete 2026 Guide',
    description: 'Complete step-by-step guide to migrating from Salesforce to GoHighLevel in 2026. Object mapping, dependency-ordered export, workflow rebuild, and honest complexity assessment.',
    type: 'article',
    publishedTime: '2026-07-22T00:00:00Z',
    modifiedTime: '2026-07-22T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['Salesforce to GoHighLevel', 'Salesforce GHL Migration', 'CRM Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/salesforce-to-gohighlevel-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Salesforce to GoHighLevel Migration: Complete 2026 Guide',
    description: 'Complete step-by-step guide to migrating from Salesforce to GoHighLevel in 2026. Object mapping, dependency-ordered export, workflow rebuild, and honest complexity assessment.',
    images: ['https://www.ghlscaleup.com/images/blog/salesforce-to-gohighlevel-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/salesforce-to-gohighlevel-migration',
  },
};

export default function SalesforceToGoHighLevelMigrationPage() {
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
            "headline": "How to Migrate from Salesforce to GoHighLevel in 2026 (Complete Guide)",
            "description": "Complete step-by-step guide to migrating from Salesforce to GoHighLevel in 2026. Object mapping, dependency-ordered export, workflow rebuild, and honest complexity assessment.",
            "image": "https://www.ghlscaleup.com/images/blog/salesforce-to-gohighlevel-migration-og.jpg",
            "datePublished": "2026-07-22",
            "dateModified": "2026-07-22",
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
              "@id": "https://www.ghlscaleup.com/blog/salesforce-to-gohighlevel-migration"
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
            "name": "How to Migrate from Salesforce to GoHighLevel",
            "description": "Step-by-step guide to migrating from Salesforce to GoHighLevel including object mapping, dependency-ordered export, custom objects handling, and workflow rebuild.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Audit your Salesforce instance", "text": "Review all objects, custom fields, active workflows, and integrations in your Salesforce org." },
              { "@type": "HowToStep", "position": 2, "name": "Design the object mapping strategy", "text": "Map Salesforce Accounts, Contacts, Opportunities, and Custom Objects to GoHighLevel equivalents." },
              { "@type": "HowToStep", "position": 3, "name": "Export data from Salesforce", "text": "Use Data Export tool, Reports, or Data Loader. Export in dependency order: Accounts first, then Contacts, then Opportunities." },
              { "@type": "HowToStep", "position": 4, "name": "Recreate custom fields in GHL", "text": "In GoHighLevel, recreate all Salesforce custom fields, pipelines, and Custom Objects before importing." },
              { "@type": "HowToStep", "position": 5, "name": "Test import", "text": "Import 50-200 records as a test batch. Verify field mapping, relationships, and data integrity." },
              { "@type": "HowToStep", "position": 6, "name": "Full staged import", "text": "Run the full import in batches of 10,000-25,000 records to avoid rate limits." },
              { "@type": "HowToStep", "position": 7, "name": "Rebuild workflows in GHL", "text": "Document Salesforce Flows and Process Builder automations and rebuild them in GHL's Workflow Builder." },
              { "@type": "HowToStep", "position": 8, "name": "Run parallel and cutover", "text": "Run Salesforce and GHL in parallel for 3-4 weeks, validate, then cut over." }
            ]
          })
        }}
      />
      <SalesforceToGoHighLevelMigrationClient />
    </>
  );
}