import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelVsKeapClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs Keap: Which CRM Should You Choose in 2026? | GHL Scale Up',
  description: 'GoHighLevel vs Keap compared honestly for 2026: real pricing, features, automation depth, review scores, and which platform fits your business.',
  keywords: 'gohighlevel vs keap, gohighlevel vs keap 2026, keap alternative for agencies, gohighlevel vs infusionsoft, which crm is better gohighlevel or keap, switch from keap to gohighlevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel vs Keap: Which CRM Should You Choose in 2026?',
    description: 'GoHighLevel vs Keap compared honestly for 2026: real pricing, features, automation depth, review scores, and which platform fits your business.',
    type: 'article',
    publishedTime: '2026-07-27T00:00:00Z',
    modifiedTime: '2026-07-27T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Keap', 'Comparison', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-vs-keap-2026-comparison-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel vs Keap: Which CRM Should You Choose in 2026?',
    description: 'GoHighLevel vs Keap compared honestly for 2026: real pricing, features, automation depth, review scores, and which platform fits your business.',
    images: ['https://www.ghlscaleup.com/images/blog/gohighlevel-vs-keap-2026-comparison-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-keap-2026-comparison',
  },
};

export default function GoHighLevelVsKeapPage() {
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
            "headline": "GoHighLevel vs Keap: Which CRM Should You Choose in 2026?",
            "description": "GoHighLevel vs Keap compared honestly for 2026: real pricing, features, automation depth, review scores, and which platform fits your business.",
            "image": "https://www.ghlscaleup.com/images/blog/gohighlevel-vs-keap-2026-comparison-og.jpg",
            "datePublished": "2026-07-27",
            "dateModified": "2026-07-27",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-vs-keap-2026-comparison"
            }
          })
        }}
      />
      <GoHighLevelVsKeapClient />
    </>
  );
}