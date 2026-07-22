import { Metadata } from 'next';
import Script from 'next/script';
import MailchimpToGoHighLevelMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Mailchimp to GoHighLevel Migration: Complete 2026 Guide | GHL Scale Up',
  description: 'Step-by-step guide to migrating from Mailchimp to GoHighLevel in 2026. Export audiences, rebuild automations, preserve deliverability, and unlock CRM plus SMS features. Updated July 2026.',
  keywords: 'mailchimp to gohighlevel migration, mailchimp alternative gohighlevel, export mailchimp to ghl, mailchimp vs gohighlevel, mailchimp audience to ghl, mailchimp automations to ghl, mailchimp tags gohighlevel, mailchimp email templates ghl',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Mailchimp to GoHighLevel Migration: Complete 2026 Guide',
    description: 'Step-by-step guide to migrating from Mailchimp to GoHighLevel in 2026. Export audiences, rebuild automations, preserve deliverability, and unlock CRM plus SMS features.',
    type: 'article',
    publishedTime: '2026-07-24T00:00:00Z',
    modifiedTime: '2026-07-24T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['Mailchimp to GoHighLevel', 'Mailchimp Migration', 'Email Marketing Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/mailchimp-to-gohighlevel-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Mailchimp to GoHighLevel Migration: Complete 2026 Guide',
    description: 'Step-by-step guide to migrating from Mailchimp to GoHighLevel in 2026. Export audiences, rebuild automations, preserve deliverability, and unlock CRM plus SMS features.',
    images: ['https://www.ghlscaleup.com/images/blog/mailchimp-to-gohighlevel-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/mailchimp-to-gohighlevel-migration',
  },
};

export default function MailchimpToGoHighLevelMigrationPage() {
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
            "headline": "How to Migrate from Mailchimp to GoHighLevel in 2026 (Complete Guide)",
            "description": "Step-by-step guide to migrating from Mailchimp to GoHighLevel in 2026. Export audiences, rebuild automations, preserve deliverability, and unlock CRM plus SMS features.",
            "image": "https://www.ghlscaleup.com/images/blog/mailchimp-to-gohighlevel-migration-og.jpg",
            "datePublished": "2026-07-24",
            "dateModified": "2026-07-24",
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
              "@id": "https://www.ghlscaleup.com/blog/mailchimp-to-gohighlevel-migration"
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
            "name": "How to Migrate from Mailchimp to GoHighLevel",
            "description": "Step-by-step guide to migrating from Mailchimp to GoHighLevel including audience export, automation rebuild, template migration, and deliverability preservation.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Audit your Mailchimp account", "text": "Review audiences, active automations, email templates, tags, and forms." },
              { "@type": "HowToStep", "position": 2, "name": "Export each audience separately", "text": "Go to Mailchimp → Audience → Manage Audience → Export Audience. Repeat for each audience." },
              { "@type": "HowToStep", "position": 3, "name": "Recreate custom fields in GHL", "text": "In GoHighLevel, recreate Mailchimp merge fields as GHL Custom Fields before importing contacts." },
              { "@type": "HowToStep", "position": 4, "name": "Import contacts to GHL", "text": "Go to Contacts → Import Contacts, upload CSV, map custom fields." },
              { "@type": "HowToStep", "position": 5, "name": "Migrate email templates", "text": "Copy HTML source of active Mailchimp templates into GHL Marketing → Emails → Templates → HTML mode. Translate merge field syntax." },
              { "@type": "HowToStep", "position": 6, "name": "Rebuild Mailchimp automations", "text": "Document each automation and rebuild in GHL Workflow Builder using GHL triggers and actions." },
              { "@type": "HowToStep", "position": 7, "name": "Set up and warm new sending domain", "text": "Configure SPF/DKIM/DMARC in GHL Email Services. Warm up domain over 2-3 weeks before mass sending." },
              { "@type": "HowToStep", "position": 8, "name": "Run parallel and cutover", "text": "Run Mailchimp and GHL in parallel for 1-2 weeks, validate, then cut over." }
            ]
          })
        }}
      />
      <MailchimpToGoHighLevelMigrationClient />
    </>
  );
}