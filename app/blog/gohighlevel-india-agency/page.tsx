import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelIndiaAgencyClient from './client';

export const metadata: Metadata = {
  title: 'How Indian Agencies Are Building Recurring Revenue on GoHighLevel (2026) | GHL Scale Up',
  description: 'Publicly reported results, SaaS Mode math and honest verdicts for Indian agencies using GoHighLevel in 2026. Pricing in INR, DPDP compliance, WhatsApp, and what actually works. Updated July 2026.',
  keywords: 'gohighlevel india agency, ghl for indian agencies, gohighlevel agency revenue india, india ghl saas mode, how to start ghl agency in india, white label gohighlevel india, ghl agency mrr india, indian marketing agency tools cost',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How Indian Agencies Are Building Recurring Revenue on GoHighLevel (2026)',
    description: 'Publicly reported results, SaaS Mode math and honest verdicts for Indian agencies using GoHighLevel in 2026. Pricing in INR, DPDP compliance, WhatsApp, and what actually works.',
    type: 'article',
    publishedTime: '2026-07-20T00:00:00Z',
    modifiedTime: '2026-07-20T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel India', 'GHL Agency India', 'SaaS Mode India', 'Indian Agency Revenue', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-india-agency-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How Indian Agencies Are Building Recurring Revenue on GoHighLevel (2026)',
    description: 'Publicly reported results, SaaS Mode math and honest verdicts for Indian agencies using GoHighLevel in 2026. Pricing in INR, DPDP compliance, WhatsApp, and what actually works.',
    images: ['https://www.ghlscaleup.com/images/blog/gohighlevel-india-agency-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-india-agency',
  },
};

export default function GoHighLevelIndiaAgencyPage() {
  return (
    <>
      {/* Article Schema JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Indian Agencies Are Building Recurring Revenue on GoHighLevel in 2026",
            "description": "Publicly reported results, SaaS Mode math and honest verdicts for Indian agencies using GoHighLevel in 2026. Pricing in INR, DPDP compliance, WhatsApp, and what actually works.",
            "image": "https://www.ghlscaleup.com/images/blog/gohighlevel-india-agency-og.jpg",
            "datePublished": "2026-07-20",
            "dateModified": "2026-07-20",
            "author": {
              "@type": "Organization",
              "name": "GHL Scale Up Team",
              "url": "https://www.ghlscaleup.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GHL Scale Up",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ghlscaleup.com/web-app-manifest-192x192.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-india-agency"
            }
          })
        }}
      />
      <GoHighLevelIndiaAgencyClient />
    </>
  );
}