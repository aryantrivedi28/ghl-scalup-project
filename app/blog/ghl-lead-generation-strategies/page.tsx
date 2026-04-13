// app/blog/ghl-lead-generation-strategies/page.tsx
import { Metadata } from 'next';
import GHLLeadGenerationClient from './client';

export const metadata: Metadata = {
  title: 'How to Generate High-Quality Leads Using GHL | GHL Scale Up',
  description: 'Learn the proven strategies to attract, capture, and convert leads using GoHighLevel automation. Complete lead generation guide for agencies.',
  keywords: 'GoHighLevel lead generation, GHL lead capture, lead generation strategies, GHL automation, lead qualification, GHL landing pages, lead magnets',
  openGraph: {
    title: 'How to Generate High-Quality Leads Using GHL',
    description: 'Learn the proven strategies to attract, capture, and convert leads using GoHighLevel automation. Complete lead generation guide.',
    type: 'article',
    publishedTime: '2026-03-20T00:00:00Z',
    authors: ['GHL Scale Up'],
    tags: ['GoHighLevel', 'Lead Generation', 'Marketing'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-lead-generation-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Generate High-Quality Leads Using GHL',
    description: 'Learn the proven strategies to attract, capture, and convert leads using GoHighLevel automation.',
    images: ['https://ghlscaleup.com/images/blog/ghl-lead-generation-og.jpg'],
  },
};

export default function GHLLeadGenerationPage() {
  return <GHLLeadGenerationClient />;
}