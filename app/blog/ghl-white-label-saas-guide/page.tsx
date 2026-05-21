import { Metadata } from 'next';
import GHLWhiteLabelSaaSClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel White Label SaaS: How SaaS Mode Works & Full Setup Guide (2026) | GHL Scale Up',
  description: 'GoHighLevel white label SaaS (SaaS Mode) lets you resell GHL as your own software — automated Stripe billing, self-service sign-up, and up to 20 pricing tiers. Full setup guide for Agency Pro.',
  keywords: 'gohighlevel saas mode, ghl white label saas, how to set up gohighlevel saas mode, gohighlevel saas mode pricing, gohighlevel saas configurator, how to sell gohighlevel as saas, gohighlevel reseller',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel White Label SaaS: How SaaS Mode Works & Full Setup Guide (2026)',
    description: 'Resell GHL as your own software — automated Stripe billing, self-service sign-up, and up to 20 pricing tiers. Full setup guide for Agency Pro.',
    type: 'article',
    publishedTime: '2026-05-21T00:00:00Z',
    modifiedTime: '2026-05-21T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'SaaS Mode', 'White Label SaaS', 'GHL Agency Pro', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-white-label-saas-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel White Label SaaS: How SaaS Mode Works & Full Setup Guide',
    description: 'Automated Stripe billing, self-service sign-up, and up to 20 pricing tiers.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-white-label-saas-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/ghl-white-label-saas-guide',
  },
};

export default function GHLWhiteLabelSaaSPage() {
  return <GHLWhiteLabelSaaSClient />;
}