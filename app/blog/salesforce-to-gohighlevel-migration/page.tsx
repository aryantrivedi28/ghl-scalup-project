import { Metadata } from 'next';
import Script from 'next/script';
import SalesforceToGoHighLevelMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Salesforce to GoHighLevel Migration Guide (2026): Object Mapping & Rebuild',
  description: 'Salesforce\'s relational data model mapped to GoHighLevel: Accounts, Custom Objects, Flows, and dependency-ordered migration — corrected against official HighLevel documentation.',
  keywords: 'salesforce to gohighlevel migration, migrate salesforce to gohighlevel, salesforce data migration to gohighlevel, salesforce custom objects gohighlevel, salesforce workflows to ghl, salesforce to ghl migration, salesforce vs gohighlevel, salesforce alternative gohighlevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Salesforce to GoHighLevel Migration Guide (2026): Object Mapping & Rebuild',
    description: 'Salesforce\'s relational data model mapped to GoHighLevel: Accounts, Custom Objects, Flows, and dependency-ordered migration — corrected against official HighLevel documentation.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['Salesforce to GoHighLevel', 'Salesforce GHL Migration', 'CRM Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/salesforce-to-gohighlevel-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Salesforce to GoHighLevel Migration Guide (2026): Object Mapping & Rebuild',
    description: 'Salesforce\'s relational data model mapped to GoHighLevel: Accounts, Custom Objects, Flows, and dependency-ordered migration.',
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
            "headline": "Salesforce to GoHighLevel Migration: Complete 2026 Guide",
            "description": "Migrating from Salesforce to GoHighLevel is the highest-complexity CRM migration in the GHL ecosystem, primarily because Salesforce's relational object model — Leads, Contacts, Accounts, Opportunities, Activities, and Custom Objects with defined parent-child relationships — does not map directly onto GoHighLevel's contact-centric structure. This is a data-architecture problem, not a drag-and-drop setup. Businesses migrate anyway because Salesforce's cost, complexity, and per-user licensing become disproportionate once a team no longer needs enterprise-grade customization. HighLevel does publish an official Salesforce migration guide covering the general process; this guide adds the Salesforce-specific technical depth — object mapping strategy, Custom Object treatment, and dependency-ordered import — that the official guide doesn't cover at this level of detail.",
            "image": "https://www.ghlscaleup.com/images/blog/salesforce-to-gohighlevel-migration-og.jpg",
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