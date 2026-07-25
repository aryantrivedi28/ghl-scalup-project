import { Metadata } from 'next';
import Script from 'next/script';
import HowToGetFirstGHLSAASClientsClient from './client';

export const metadata: Metadata = {
  title: 'How to Get Your First 10 GoHighLevel SaaS Clients (2026 Honest Guide) | GHL Scale Up',
  description: 'An honest, tactical guide to getting your first 10 GoHighLevel SaaS clients in 2026. Six proven channels, realistic timelines, and what actually works for beginners with no network. Updated July 2026.',
  keywords: 'how to get gohighlevel saas clients, get clients for ghl saas agency, first gohighlevel saas client, ghl saas marketing strategy, how to sell gohighlevel white label, find clients for saas agency, ghl client acquisition, cold outreach ghl saas',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Get Your First 10 GoHighLevel SaaS Clients (2026 Honest Guide)',
    description: 'An honest, tactical guide to getting your first 10 GoHighLevel SaaS clients in 2026. Six proven channels, realistic timelines, and what actually works for beginners with no network.',
    type: 'article',
    publishedTime: '2026-07-25T00:00:00Z',
    modifiedTime: '2026-07-25T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel SaaS', 'Client Acquisition', 'Agency Growth', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/how-to-get-first-gohighlevel-saas-clients-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Get Your First 10 GoHighLevel SaaS Clients (2026 Honest Guide)',
    description: 'An honest, tactical guide to getting your first 10 GoHighLevel SaaS clients in 2026. Six proven channels, realistic timelines, and what actually works for beginners with no network.',
    images: ['https://www.ghlscaleup.com/images/blog/how-to-get-first-gohighlevel-saas-clients-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/how-to-get-first-gohighlevel-saas-clients',
  },
};

export default function HowToGetFirstGHLSAASClientsPage() {
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
            "headline": "How to Get Your First 10 GoHighLevel SaaS Clients in 2026 (Honest Guide)",
            "description": "An honest, tactical guide to getting your first 10 GoHighLevel SaaS clients in 2026. Six proven channels, realistic timelines, and what actually works for beginners with no network.",
            "image": "https://www.ghlscaleup.com/images/blog/how-to-get-first-gohighlevel-saas-clients-og.jpg",
            "datePublished": "2026-07-25",
            "dateModified": "2026-07-25",
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
              "@id": "https://www.ghlscaleup.com/blog/how-to-get-first-gohighlevel-saas-clients"
            }
          })
        }}
      />
      <HowToGetFirstGHLSAASClientsClient />
    </>
  );
}