import { Metadata } from 'next';
import GoHighLevelVsHubSpotClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs HubSpot (2026): Honest Comparison for Agencies | GHL Scaleup',
  description: 'GoHighLevel vs HubSpot — the real differences in pricing, features, and who each platform is actually built for. For agencies managing multiple clients, GHL wins on cost and architecture. For enterprise B2B sales teams, HubSpot wins on depth.',
  keywords: 'gohighlevel vs hubspot, gohighlevel vs hubspot pricing, ghl vs hubspot, gohighlevel vs hubspot for agencies, gohighlevel alternatives, hubspot vs gohighlevel features',
  authors: [{ name: 'GHL Scaleup Team' }],
  openGraph: {
    title: 'GoHighLevel vs HubSpot (2026): Honest Comparison for Agencies',
    description: 'The real differences in pricing, features, and who each platform is actually built for. For agencies managing multiple clients, GHL wins on cost and architecture.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scaleup Team'],
    tags: ['GoHighLevel', 'HubSpot', 'CRM Comparison', 'Agency Software', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-vs-hubspot-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel vs HubSpot (2026): Honest Comparison for Agencies',
    description: 'The real differences in pricing, features, and who each platform is actually built for.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-vs-hubspot-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-hubspot',
  },
};

export default function GoHighLevelVsHubSpotPage() {
  return <GoHighLevelVsHubSpotClient />;
}