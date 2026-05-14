import { Metadata } from 'next';
import GoHighLevelPricingClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Pricing 2026: All Plans, Real Costs & Hidden Fees Explained | GHL Scaleup',
  description: 'GoHighLevel costs $97, $297, or $497/month depending on your plan. But that\'s not your real cost. This guide covers every plan, every usage fee, AI pricing, and which plan is right for your business in 2026.',
  keywords: 'gohighlevel pricing, gohighlevel cost, gohighlevel plans, gohighlevel pricing plans, gohighlevel agency pro pricing, gohighlevel saas mode pricing, gohighlevel starter plan, gohighlevel free trial',
  authors: [{ name: 'GHL Scaleup Team' }],
  openGraph: {
    title: 'GoHighLevel Pricing 2026: All Plans, Real Costs & Hidden Fees Explained',
    description: 'GoHighLevel costs $97, $297, or $497/month. But that\'s not your real cost. Every plan, every usage fee, AI pricing, and which plan is right for you.',
    type: 'article',
    publishedTime: '2026-05-13T00:00:00Z',
    modifiedTime: '2026-05-13T00:00:00Z',
    authors: ['GHL Scaleup Team'],
    tags: ['GoHighLevel', 'GHL Pricing', 'GoHighLevel Plans', 'GHL Cost', '2026'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-pricing-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Pricing 2026: All Plans, Real Costs & Hidden Fees',
    description: 'Every plan, every usage fee, AI pricing, and which plan is right for your business.',
    images: ['https://ghlscaleup.com/images/blog/ghl-pricing-og.jpg'],
  },
  alternates: {
    canonical: 'https://ghlscaleup.com/blog/gohighlevel-pricing',
  },
};

export default function GoHighLevelPricingPage() {
  return <GoHighLevelPricingClient />;
}