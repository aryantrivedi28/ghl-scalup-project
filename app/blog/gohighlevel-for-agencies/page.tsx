import { Metadata } from 'next';
import GoHighLevelForAgenciesClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel for Agencies: The Complete 2026 Guide (Setup, SaaS & Scaling) | GHL Scale Up',
  description: 'GoHighLevel is the only all-in-one platform purpose-built for marketing agencies — unlimited clients, one dashboard, white-label branding, and SaaS resale built in. This guide covers how agencies use GHL, which plan to choose, and how to scale correctly.',
  keywords: 'gohighlevel for agencies, ghl agency, gohighlevel agency setup, gohighlevel for marketing agencies, gohighlevel sub-accounts for agencies, gohighlevel agency unlimited plan, gohighlevel saas agency',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel for Agencies: The Complete 2026 Guide (Setup, SaaS & Scaling)',
    description: 'GoHighLevel is the only all-in-one platform purpose-built for marketing agencies — unlimited clients, one dashboard, white-label branding, and SaaS resale built in.',
    type: 'article',
    publishedTime: '2026-05-20T00:00:00Z',
    modifiedTime: '2026-05-20T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Agency Software', 'GHL Agency', 'SaaS Agency', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-for-agencies-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel for Agencies: The Complete 2026 Guide',
    description: 'Unlimited clients, one dashboard, white-label branding, and SaaS resale built in.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-for-agencies-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-for-agencies',
  },
};

export default function GoHighLevelForAgenciesPage() {
  return <GoHighLevelForAgenciesClient />;
}