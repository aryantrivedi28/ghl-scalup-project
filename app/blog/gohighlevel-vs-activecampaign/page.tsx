import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelVsActiveCampaignClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs ActiveCampaign (2026): Honest Agency Comparison | GHL Scale Up',
  description: 'GHL wins for agencies needing SMS, sub-accounts and white-label. AC wins for email depth and deliverability. Real 2026 pricing, feature comparison, and an honest verdict on who should switch.',
  keywords: 'GoHighLevel vs ActiveCampaign, GoHighLevel vs ActiveCampaign 2026, ActiveCampaign vs GoHighLevel for agencies, is GoHighLevel better than ActiveCampaign, GoHighLevel ActiveCampaign pricing comparison, can GoHighLevel replace ActiveCampaign',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel vs ActiveCampaign (2026): Honest Agency Comparison',
    description: 'GHL wins for agencies needing SMS, sub-accounts and white-label. AC wins for email depth and deliverability. Real 2026 pricing and an honest verdict.',
    type: 'article',
    publishedTime: '2026-06-04T00:00:00Z',
    modifiedTime: '2026-06-04T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ActiveCampaign', 'GHL Comparison', 'Email Automation', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-vs-activecampaign-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel vs ActiveCampaign (2026): Honest Agency Comparison',
    description: 'GHL wins for agencies needing SMS. AC wins for email depth. Real 2026 pricing and honest verdict.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-vs-activecampaign-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-activecampaign',
  },
};

export default function GoHighLevelVsActiveCampaignPage() {
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
            "headline": "GoHighLevel vs ActiveCampaign (2026): Honest Comparison for Agencies",
            "description": "GHL wins for agencies needing SMS, sub-accounts and white-label. AC wins for email depth and deliverability. Real 2026 pricing, feature comparison, and an honest verdict on who should switch.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-vs-activecampaign-og.jpg",
            "datePublished": "2026-06-04",
            "dateModified": "2026-06-04",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-vs-activecampaign"
            }
          })
        }}
      />
      <GoHighLevelVsActiveCampaignClient />
    </>
  );
}