// app/blog/gohighlevel-funnel-builder-features/page.tsx
import { Metadata } from 'next';
import GHLFunnelBuilderClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use to Build Faster | GHL Scale Up',
  description: 'Discover the GoHighLevel funnel builder features most agencies overlook — version control, global sections, custom values, real-time collaboration and more. Build faster, convert better.',
  keywords: 'GoHighLevel funnel builder, GHL funnel builder, GoHighLevel landing page builder, GHL funnel templates',
  openGraph: {
    title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use to Build Faster',
    description: 'Most agencies use 20% of GHL\'s funnel builder. Here\'s what the other 80% looks like.',
    type: 'article',
    publishedTime: '2026-04-07T00:00:00Z',
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-funnel-builder-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use to Build Faster',
    description: 'Most agencies use 20% of GHL\'s funnel builder. Here\'s what the other 80% looks like.',
    images: ['https://ghlscaleup.com/images/blog/ghl-funnel-builder-og.jpg'],
  },
};

export default function GHLFunnelBuilderPage() {
  return <GHLFunnelBuilderClient />;
}