// app/blog/what-is-gohighlevel/page.tsx
import { Metadata } from 'next';
import WhatIsGoHighLevelClient from './client';

export const metadata: Metadata = {
  title: 'What Is GoHighLevel? The Complete Guide for 2026 | GHL Scale Up',
  description: 'GoHighLevel (GHL) is an all-in-one CRM and marketing platform built for agencies and service businesses. This plain-English guide explains what it does, who it\'s for, how it\'s priced, and why most setups underperform.',
  keywords: 'GoHighLevel, GHL, what is GoHighLevel, GoHighLevel guide, GHL CRM, marketing automation platform, GoHighLevel features, GoHighLevel pricing',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'What Is GoHighLevel? The Complete Guide for 2026',
    description: 'GoHighLevel (GHL) is an all-in-one CRM and marketing platform built for agencies and service businesses. Complete guide with features, pricing, and setup tips.',
    type: 'article',
    publishedTime: '2026-05-02T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'CRM', 'Marketing Automation', 'Agency Tools'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/what-is-gohighlevel-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'What Is GoHighLevel? The Complete Guide for 2026',
    description: 'GoHighLevel (GHL) is an all-in-one CRM and marketing platform built for agencies and service businesses.',
    images: ['https://ghlscaleup.com/images/blog/what-is-gohighlevel-og.jpg'],
  },
  alternates: {
    canonical: 'https://ghlscaleup.com/blog/what-is-gohighlevel',
  },
};

export default function WhatIsGoHighLevelPage() {
  return <WhatIsGoHighLevelClient />;
}