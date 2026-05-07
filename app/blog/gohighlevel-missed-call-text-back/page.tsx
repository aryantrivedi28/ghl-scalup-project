// app/blog/gohighlevel-missed-call-text-back/page.tsx
import { Metadata } from 'next';
import MissedCallTextBackClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Missed Call Text Back: How It Works + Full Setup Guide (2026) | GHL Scale Up',
  description: 'GoHighLevel\'s missed call text back sends an automatic SMS within 15 seconds of a missed call — recovering leads before they call a competitor. Here\'s how it works and how to set it up in 5 minutes.',
  keywords: 'GoHighLevel missed call text back, GHL missed call text back setup, missed call text back workflow, GHL SMS automation, lead recovery SMS',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Missed Call Text Back: How It Works + Full Setup Guide (2026)',
    description: 'GoHighLevel\'s missed call text back sends an automatic SMS within 15 seconds of a missed call — recovering leads before they call a competitor.',
    type: 'article',
    publishedTime: '2026-05-07T00:00:00Z',
    modifiedTime: '2026-05-07T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Missed Call Text Back', 'SMS Automation', 'Lead Recovery'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-missed-call-text-back-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Missed Call Text Back: How It Works + Full Setup Guide',
    description: 'Set up missed call text back in GoHighLevel in 5 minutes. Recover leads within 15 seconds.',
    images: ['https://ghlscaleup.com/images/blog/ghl-missed-call-text-back-og.jpg'],
  },
  alternates: {
    canonical: 'https://ghlscaleup.com/blog/gohighlevel-missed-call-text-back',
  },
};

export default function MissedCallTextBackPage() {
  return <MissedCallTextBackClient />;
}