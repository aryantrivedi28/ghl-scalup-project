import { Metadata } from 'next';
import Script from 'next/script';
import ActiveCampaignToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'ActiveCampaign to GoHighLevel Migration: What Breaks and How to Fix It',
  description: 'Contacts and tags transfer via CSV. Automations must be rebuilt. Honest guide covering email deliverability, domain warmup, and step-by-step migration process.',
  keywords: 'ActiveCampaign to GoHighLevel migration, migrate from ActiveCampaign to GoHighLevel, ActiveCampaign to GHL migration guide, how to migrate ActiveCampaign to GoHighLevel, ActiveCampaign tags to GoHighLevel custom fields, ActiveCampaign contact export GoHighLevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'ActiveCampaign to GoHighLevel Migration: What Breaks and How to Fix It (2026)',
    description: 'Contacts and tags transfer via CSV. Automations, lead scoring, and conditional logic all need rebuilding. Honest guide with email deliverability insights.',
    type: 'article',
    publishedTime: '2026-05-24T00:00:00Z',
    modifiedTime: '2026-05-24T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ActiveCampaign', 'CRM Migration', 'Email Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/activecampaign-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'ActiveCampaign to GoHighLevel Migration: What Breaks and How to Fix It',
    description: 'What transfers, what breaks, email deliverability, and step-by-step process.',
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
            "headline": "ActiveCampaign to GoHighLevel Migration: What Breaks and How to Fix It (2026)",
            "description": "Migrating from ActiveCampaign to GoHighLevel? Contacts and tags transfer via CSV. Automations, lead scoring, and conditional logic all need rebuilding. Honest guide covering what breaks, email deliverability, and step-by-step process.",
            "image": "https://www.ghlscaleup.com/images/blog/activecampaign-to-ghl-migration-og.jpg",
            "datePublished": "2026-05-24",
            "dateModified": "2026-05-24",
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