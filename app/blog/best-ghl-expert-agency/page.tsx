import { Metadata } from 'next';
import BestGHLAgencyClient from './client';

export const metadata: Metadata = {
  title: 'Best GHL Expert Agency to Hire in 2026 (Honest Comparison) | GHL Scaleup',
  description: 'Looking for the best GoHighLevel expert agency to hire? We compared the top GHL agencies in 2026 — covering specialisations, pricing, and who each one is best for — so you can choose the right partner without wasting time.',
  keywords: 'best GHL expert agency to hire, best GoHighLevel agency to hire, best GoHighLevel expert agency 2026, GHL expert agency, GoHighLevel agency, hire GoHighLevel expert, GoHighLevel setup agency',
  authors: [{ name: 'GHL Scaleup Team' }],
  openGraph: {
    title: 'Best GHL Expert Agency to Hire in 2026 (Honest Comparison)',
    description: 'We compared the top GHL agencies in 2026 — covering specialisations, pricing, and who each one is best for — so you can choose the right partner.',
    type: 'article',
    publishedTime: '2026-05-09T00:00:00Z',
    modifiedTime: '2026-05-09T00:00:00Z',
    authors: ['GHL Scaleup Team'],
    tags: ['GoHighLevel', 'GHL Agency', 'Agency Comparison', 'GHL Experts', '2026'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/best-ghl-agency-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Best GHL Expert Agency to Hire in 2026 (Honest Comparison)',
    description: 'We compared the top GHL agencies in 2026. Find the right partner for your GoHighLevel needs.',
    images: ['https://ghlscaleup.com/images/blog/best-ghl-agency-og.jpg'],
  },
  alternates: {
    canonical: 'https://ghlscaleup.com/blog/best-ghl-expert-agency',
  },
};

export default function BestGHLAgencyPage() {
  return <BestGHLAgencyClient />;
}