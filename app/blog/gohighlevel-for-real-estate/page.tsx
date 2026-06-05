import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelForRealEstateClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel for Real Estate Agents: Complete 2026 Guide',
  description: 'How real estate agents use GHL to follow up leads in 15 seconds, book showings, and collect Google reviews automatically.',
  keywords: 'GoHighLevel for real estate, GHL for real estate agents, GoHighLevel real estate CRM, GoHighLevel real estate automation, GoHighLevel for realtors, GoHighLevel real estate pipeline, GoHighLevel missed call text back real estate',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel for Real Estate Agents: Complete 2026 Guide',
    description: 'Capture leads from Zillow and Facebook, follow up automatically within 15 seconds, book showings, and collect reviews after closing. Complete setup guide for agents and brokerages.',
    type: 'article',
    publishedTime: '2026-05-25T00:00:00Z',
    modifiedTime: '2026-05-25T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Real Estate', 'Real Estate CRM', 'GHL for Realtors', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-real-estate-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel for Real Estate Agents: Complete 2026 Guide',
    description: 'Capture leads, follow up automatically, book showings, and collect reviews after closing.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-real-estate-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-for-real-estate',
  },
};

export default function GoHighLevelForRealEstatePage() {
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
            "headline": "GoHighLevel for Real Estate Agents: Complete 2026 Guide",
            "description": "Capture leads from Zillow and Facebook, follow up automatically within 15 seconds, book showings, and collect reviews after closing. Complete setup guide for agents and brokerages.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-real-estate-og.jpg",
            "datePublished": "2026-05-25",
            "dateModified": "2026-05-25",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-for-real-estate"
            }
          })
        }}
      />
      <GoHighLevelForRealEstateClient />
    </>
  );
}