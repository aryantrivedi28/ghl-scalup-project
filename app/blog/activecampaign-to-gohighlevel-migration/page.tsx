import { Metadata } from 'next';
import Script from 'next/script';
import ActiveCampaignToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'ActiveCampaign to GoHighLevel Migration: What Transfers, What Breaks (2026)',
  description: 'What transfers via CSV, what must be rebuilt, the real email deliverability impact, and step-by-step instructions for tags, automations, and lead scoring.',
  keywords: 'activecampaign to gohighlevel migration, migrating activecampaign to gohighlevel, moving from activecampaign to gohighlevel, activecampaign automation migration, activecampaign tags to gohighlevel, activecampaign data migration to ghl, activecampaign to ghl migration guide',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'ActiveCampaign to GoHighLevel Migration: What Transfers, What Breaks (2026)',
    description: 'What transfers via CSV, what must be rebuilt, the real email deliverability impact, and step-by-step instructions for tags, automations, and lead scoring.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ActiveCampaign', 'CRM Migration', 'Email Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/activecampaign-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'ActiveCampaign to GoHighLevel Migration: What Transfers, What Breaks (2026)',
    description: 'What transfers via CSV, what must be rebuilt, the real email deliverability impact, and step-by-step instructions for tags, automations, and lead scoring.',
    images: ['https://www.ghlscaleup.com/images/blog/activecampaign-to-ghl-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/activecampaign-to-gohighlevel-migration',
  },
};

export default function ActiveCampaignToGHLMigrationPage() {
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
            "headline": "ActiveCampaign to GoHighLevel Migration: What Transfers, What Breaks (2026)",
            "description": "Contacts, tags, and custom field values transfer from ActiveCampaign to GoHighLevel via CSV export and import. Automations, lead scoring, and conditional logic do not transfer and must be rebuilt manually as GHL workflows. Expect a short-term email deliverability dip during the switch — mitigate it by warming your GHL sending domain over 2–3 weeks before sending to your full list. A typical account with 5,000–20,000 contacts and 5–15 automations takes 2–3 weeks to migrate.",
            "image": "https://www.ghlscaleup.com/images/blog/activecampaign-to-ghl-migration-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/activecampaign-to-gohighlevel-migration"
            }
          })
        }}
      />
      <ActiveCampaignToGHLMigrationClient />
    </>
  );
}