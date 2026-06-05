import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelAlternativesClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Alternatives (2026): 8 Best Tools Compared',
  description: 'HubSpot, ActiveCampaign, ClickFunnels, Vendasta, Kartra, Keap, Systeme.io and Zoho honest comparison with real pricing.',
  keywords: 'GoHighLevel alternatives, best GoHighLevel alternatives 2026, GoHighLevel competitors 2026, what is similar to GoHighLevel, GoHighLevel alternative for agencies, cheaper alternative to GoHighLevel, GoHighLevel vs Kartra',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Alternatives (2026): 8 Best Tools Compared',
    description: 'HubSpot, ActiveCampaign, ClickFunnels, Vendasta, Kartra, Keap, Systeme.io and Zoho honest comparison with real pricing.',
    type: 'article',
    publishedTime: '2026-06-03T00:00:00Z',
    modifiedTime: '2026-06-03T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Alternatives', 'GHL Comparison', 'Agency Software', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-alternatives-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Alternatives (2026): Best Tools to Compare',
    description: '8 best alternatives: HubSpot, ActiveCampaign, ClickFunnels, Vendasta, Kartra, Keap, Systeme.io, and Zoho.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-alternatives-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-alternatives',
  },
};

export default function GoHighLevelAlternativesPage() {
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
            "headline": "GoHighLevel Alternatives (2026): 8 Best Tools Compared",
            "description": "The 8 best GoHighLevel alternatives in 2026: HubSpot, ActiveCampaign, ClickFunnels, Vendasta, Kartra, Keap, Systeme.io, and Zoho. Honest comparison with real pricing, who each is best for, and when GHL wins.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-alternatives-og.jpg",
            "datePublished": "2026-06-03",
            "dateModified": "2026-06-03",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-alternatives"
            }
          })
        }}
      />
      <GoHighLevelAlternativesClient />
    </>
  );
}