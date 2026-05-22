import { Metadata } from 'next';
import HubSpotToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'How to Migrate from HubSpot to GoHighLevel: Step-by-Step Guide (2026) | GHL Scale Up',
  description: 'A step-by-step guide to migrating from HubSpot to GoHighLevel — what data transfers, what breaks, how to rebuild workflows, and how to avoid the most costly migration mistakes.',
  keywords: 'HubSpot to GoHighLevel migration, migrate from HubSpot to GoHighLevel, HubSpot to GHL migration guide, how to migrate HubSpot to GoHighLevel, HubSpot data export to GoHighLevel, GoHighLevel migration service',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Migrate from HubSpot to GoHighLevel: Step-by-Step Guide (2026)',
    description: 'What data transfers, what breaks, how to rebuild workflows, and how to avoid costly migration mistakes.',
    type: 'article',
    publishedTime: '2026-05-22T00:00:00Z',
    modifiedTime: '2026-05-22T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'HubSpot', 'CRM Migration', 'GHL Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/hubspot-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Migrate from HubSpot to GoHighLevel: Step-by-Step Guide (2026)',
    description: 'What data transfers, what breaks, how to rebuild workflows, and how to avoid costly migration mistakes.',
    images: ['https://www.ghlscaleup.com/images/blog/hubspot-to-ghl-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/hubspot-to-gohighlevel-migration',
  },
};

export default function HubSpotToGHLMigrationPage() {
  return <HubSpotToGHLMigrationClient />;
}