// app/blog/ghl-white-label-saas-guide/page.tsx
import { Metadata } from 'next';
import GHLWhiteLabelSaaSClient from './client';

export const metadata: Metadata = {
  title: 'How to Set Up GoHighLevel White-Label SaaS: Complete Guide | GHL Scale Up',
  description: 'Domains, snapshots, Stripe billing, sub-account provisioning, and pricing strategies for GHL white-label SaaS. Complete step-by-step guide.',
  keywords: 'GoHighLevel white-label SaaS, GHL SaaS mode, white-label GHL, GHL sub-accounts, GHL Stripe integration, GHL SaaS setup, GHL pricing strategies',
  openGraph: {
    title: 'How to Set Up GoHighLevel White-Label SaaS: Complete Guide',
    description: 'Domains, snapshots, Stripe billing, sub-account provisioning, and pricing strategies. Complete step-by-step guide to launch your SaaS.',
    type: 'article',
    publishedTime: '2026-04-10T00:00:00Z',
    authors: ['GHL Scale Up'],
    tags: ['GoHighLevel', 'SaaS', 'White-Label'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-saas-guide-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Set Up GoHighLevel White-Label SaaS: Complete Guide',
    description: 'Domains, snapshots, Stripe billing, sub-account provisioning, and pricing strategies.',
    images: ['https://ghlscaleup.com/images/blog/ghl-saas-guide-og.jpg'],
  },
};

export default function GHLWhiteLabelSaaSGuidePage() {
  return <GHLWhiteLabelSaaSClient />;
}
