import { Metadata } from 'next';
import GoHighLevelWhiteLabelClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel White Label: What It Is, How It Works & Full Setup Guide (2026) | GHL Scale Up',
  description: 'GoHighLevel white label lets you brand the entire platform as your own software. Basic branding starts at $297/mo. Full SaaS Mode with automated billing starts at $497/mo. Step-by-step setup guide with CNAME, Stripe, and pricing strategy.',
  keywords: 'gohighlevel white label, white label ghl, gohighlevel white label setup, gohighlevel saas mode, white label gohighlevel crm, gohighlevel reseller, gohighlevel saas mode setup',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel White Label: What It Is, How It Works & Full Setup Guide (2026)',
    description: 'Basic branding starts at $297/mo. Full SaaS Mode with automated billing starts at $497/mo. Step-by-step setup guide with CNAME, Stripe, and pricing strategy.',
    type: 'article',
    publishedTime: '2026-05-19T00:00:00Z',
    modifiedTime: '2026-05-19T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'White Label', 'SaaS Mode', 'GHL Setup', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-white-label-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel White Label: What It Is, How It Works & Full Setup Guide (2026)',
    description: 'Step-by-step white label setup guide with CNAME, Stripe, and pricing strategy.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-white-label-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-white-label',
  },
};

export default function GoHighLevelWhiteLabelPage() {
  return <GoHighLevelWhiteLabelClient />;
}