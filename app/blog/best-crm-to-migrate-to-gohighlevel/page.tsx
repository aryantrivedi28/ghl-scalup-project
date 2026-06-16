import { Metadata } from 'next';
import Script from 'next/script';
import BestCRMToMigrateToGHLClient from './client';

export const metadata: Metadata = {
  title: 'Best CRM to Migrate Into GoHighLevel: 5 Platforms Ranked (2026) | GHL Scale Up',
  description: 'HubSpot, ActiveCampaign, ClickFunnels, Kajabi and Zoho ranked by migration difficulty into GoHighLevel. What transfers, what breaks, and realistic timelines for each.',
  keywords: 'best CRM to migrate to GoHighLevel, easiest CRM to migrate into GoHighLevel, GoHighLevel migration difficulty comparison, which platform is hardest to migrate to GHL, GoHighLevel migration complexity by platform, HubSpot vs ActiveCampaign vs ClickFunnels migration, Kajabi GoHighLevel migration difficulty',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Best CRM to Migrate Into GoHighLevel: 5 Platforms Ranked (2026)',
    description: 'HubSpot, ActiveCampaign, ClickFunnels, Kajabi and Zoho ranked by migration difficulty. What transfers, what breaks, and realistic timelines.',
    type: 'article',
    publishedTime: '2026-06-11T00:00:00Z',
    modifiedTime: '2026-06-11T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'CRM Migration', 'GHL Migration', 'Migration Difficulty', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/best-crm-to-migrate-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Best CRM to Migrate Into GoHighLevel: 5 Platforms Ranked',
    description: 'HubSpot, ActiveCampaign, ClickFunnels, Kajabi and Zoho ranked by migration difficulty.',
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
            "headline": "Best CRM to Migrate Into GoHighLevel: Comparing 5 Platforms (2026)",
            "description": "HubSpot, ActiveCampaign, ClickFunnels, Kajabi and Zoho ranked by migration difficulty into GoHighLevel. What transfers, what breaks, and realistic timelines for each.",
            "image": "https://www.ghlscaleup.com/images/blog/best-crm-to-migrate-og.jpg",
            "datePublished": "2026-06-11",
            "dateModified": "2026-06-11",
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