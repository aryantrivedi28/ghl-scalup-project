import { Metadata } from 'next';
import Script from 'next/script';
import GetFirst10GHLSAASClientsClient from './client';

export const metadata: Metadata = {
  title: 'How to Get Your First 10 GoHighLevel SaaS Clients (2026) | GHL Scale Up',
  description: 'Learn how to get your first 10 GoHighLevel SaaS clients through agency upsells, local outreach, free trials, founder-led content, and paid growth.',
  keywords: 'get first gohighlevel saas clients, ghl saas business, sell gohighlevel to local businesses, gohighlevel saas agency, first 10 ghl clients',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Get Your First 10 GoHighLevel SaaS Clients (2026)',
    description: 'Learn how to get your first 10 GoHighLevel SaaS clients through agency upsells, local outreach, free trials, founder-led content, and paid growth.',
    type: 'article',
    publishedTime: '2026-07-28T00:00:00Z',
    modifiedTime: '2026-07-28T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel SaaS', 'Client Acquisition', 'Growth', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/get-first-10-gohighlevel-saas-clients-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Get Your First 10 GoHighLevel SaaS Clients (2026)',
    description: 'Learn how to get your first 10 GoHighLevel SaaS clients through agency upsells, local outreach, free trials, founder-led content, and paid growth.',
    images: ['https://www.ghlscaleup.com/images/blog/get-first-10-gohighlevel-saas-clients-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/get-first-10-gohighlevel-saas-clients',
  },
};

export default function GetFirst10GHLSAASClientsPage() {
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
            "headline": "How to Get Your First 10 GoHighLevel SaaS Clients in 2026",
            "description": "Learn how to get your first 10 GoHighLevel SaaS clients through agency upsells, local outreach, free trials, founder-led content, and paid growth.",
            "image": "https://www.ghlscaleup.com/images/blog/get-first-10-gohighlevel-saas-clients-og.jpg",
            "datePublished": "2026-07-28",
            "dateModified": "2026-07-28",
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
              "@id": "https://www.ghlscaleup.com/blog/get-first-10-gohighlevel-saas-clients"
            }
          })
        }}
      />
      <GetFirst10GHLSAASClientsClient />
    </>
  );
}