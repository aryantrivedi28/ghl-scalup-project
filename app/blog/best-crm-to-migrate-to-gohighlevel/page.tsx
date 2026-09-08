import { Metadata } from 'next';
import Script from 'next/script';
import BestCRMToMigrateToGHLClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Migration Difficulty: 8 Platforms Ranked (2026)',
  description: 'HubSpot, ActiveCampaign, ClickFunnels, Kajabi, Zoho, Salesforce, Keap, and Mailchimp ranked by migration difficulty using a transparent, weighted methodology — not a CRM quality ranking.',
  keywords: 'easiest platform to migrate to gohighlevel, gohighlevel migration difficulty comparison, which platform is hardest to migrate to ghl, gohighlevel migration complexity by platform, hubspot vs activecampaign vs clickfunnels migration, kajabi gohighlevel migration difficulty, salesforce to gohighlevel migration difficulty, mailchimp to gohighlevel migration',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Migration Difficulty: 8 Platforms Ranked (2026)',
    description: 'HubSpot, ActiveCampaign, ClickFunnels, Kajabi, Zoho, Salesforce, Keap, and Mailchimp ranked by migration difficulty using a transparent, weighted methodology — not a CRM quality ranking.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'CRM Migration', 'GHL Migration', 'Migration Difficulty', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/best-crm-to-migrate-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Migration Difficulty: 8 Platforms Ranked (2026)',
    description: 'HubSpot, ActiveCampaign, ClickFunnels, Kajabi, Zoho, Salesforce, Keap, and Mailchimp ranked by migration difficulty using a transparent, weighted methodology.',
    images: ['https://www.ghlscaleup.com/images/blog/best-crm-to-migrate-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/best-crm-to-migrate-to-gohighlevel',
  },
};

export default function BestCRMToMigrateToGHLPage() {
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
            "headline": "Which Platform Is Easiest to Migrate to GoHighLevel? 8 Platforms Ranked by Difficulty",
            "description": "This is a migration-difficulty comparison, not a 'best CRM' ranking — several platforms compared here (ClickFunnels, Kajabi, Mailchimp) aren't CRMs at all. What they have in common is that GHL Scale Up has a dedicated migration guide for each, and this page exists to help you figure out which one to read first based on how hard your specific move will actually be.",
            "image": "https://www.ghlscaleup.com/images/blog/best-crm-to-migrate-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/best-crm-to-migrate-to-gohighlevel"
            }
          })
        }}
      />
      <BestCRMToMigrateToGHLClient />
    </>
  );
}