import { Metadata } from 'next';
import Script from 'next/script';
import ConsolidateMarketingToolsClient from './client';

export const metadata: Metadata = {
  title: 'How to Consolidate Your Marketing Tools Using GoHighLevel (2026) | GHL Scale Up',
  description: 'Most agencies pay $300 to $800/mo across 5 to 8 tools that do not connect properly. GoHighLevel consolidates CRM, email, SMS, funnels, booking, and AI into one $97 to $297/mo platform. Step-by-step consolidation guide.',
  keywords: 'consolidate marketing tools GoHighLevel, GoHighLevel replace multiple tools agencies, GoHighLevel tool consolidation 2026, stop paying for multiple marketing tools, GoHighLevel replaces what tools, marketing tool stack consolidation agencies',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Consolidate Your Marketing Tools Using GoHighLevel (2026)',
    description: 'Most agencies pay $300 to $800/mo across 5 to 8 disconnected tools. GoHighLevel consolidates everything into one $97 to $297/mo platform.',
    type: 'article',
    publishedTime: '2026-06-08T00:00:00Z',
    modifiedTime: '2026-06-08T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Tool Consolidation', 'Agency Tools', 'GHL 2026', 'Marketing Stack'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/consolidate-tools-ghl-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Consolidate Your Marketing Tools Using GoHighLevel',
    description: 'Consolidate CRM, email, SMS, funnels, booking, and AI into one $97 to $297/mo platform.',
    images: ['https://www.ghlscaleup.com/images/blog/consolidate-tools-ghl-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/consolidate-marketing-tools-gohighlevel',
  },
};

export default function ConsolidateMarketingToolsPage() {
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
            "headline": "How to Consolidate All Your Marketing Tools Using GoHighLevel (2026)",
            "description": "Most agencies pay $300 to $800/mo across 5 to 8 tools that do not connect properly. GoHighLevel consolidates CRM, email, SMS, funnels, booking, and AI into one $97 to $297/mo platform.",
            "image": "https://www.ghlscaleup.com/images/blog/consolidate-tools-ghl-og.jpg",
            "datePublished": "2026-06-08",
            "dateModified": "2026-06-08",
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
              "@id": "https://www.ghlscaleup.com/blog/consolidate-marketing-tools-gohighlevel"
            }
          })
        }}
      />
      <ConsolidateMarketingToolsClient />
    </>
  );
}