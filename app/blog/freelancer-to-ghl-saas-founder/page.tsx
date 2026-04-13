// app/blog/freelancer-to-ghl-saas-founder/page.tsx
import { Metadata } from 'next';
import FreelancerToSaaSClient from './client';

export const metadata: Metadata = {
  title: 'From Freelancer to GHL SaaS Founder: Recurring Revenue | GHL Scale Up',
  description: 'Transition from one-off projects to a scalable SaaS business using GHL white-label. Complete guide to building recurring revenue.',
  keywords: 'GoHighLevel SaaS, GHL white-label, freelance to SaaS, recurring revenue, GHL agency, SaaS business model, passive income GHL',
  openGraph: {
    title: 'From Freelancer to GHL SaaS Founder: Recurring Revenue',
    description: 'Transition from one-off projects to a scalable SaaS business using GHL white-label. Complete guide to building recurring revenue.',
    type: 'article',
    publishedTime: '2026-03-25T00:00:00Z',
    authors: ['GHL Scale Up'],
    tags: ['GoHighLevel', 'SaaS', 'Freelance', 'Business Growth'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/freelancer-to-saas-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'From Freelancer to GHL SaaS Founder: Recurring Revenue',
    description: 'Transition from one-off projects to a scalable SaaS business using GHL white-label.',
    images: ['https://ghlscaleup.com/images/blog/freelancer-to-saas-og.jpg'],
  },
};

export default function FreelancerToSaaSFounderPage() {
  return <FreelancerToSaaSClient />;
}