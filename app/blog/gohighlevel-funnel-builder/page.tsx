import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelFunnelBuilderClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Funnel Builder: Complete Feature Guide (2026) | GHL Scale Up',
  description: 'GoHighLevel\'s funnel builder is included free on every plan with unlimited funnels, built-in A/B testing, AI generation, and native CRM integration. Complete guide covering all features, funnel types, and honest limitations. June 2026.',
  keywords: 'gohighlevel funnels, gohighlevel funnel builder, how to build a funnel in gohighlevel, gohighlevel funnel templates, gohighlevel funnel builder vs clickfunnels, gohighlevel ai funnel builder, gohighlevel funnel split testing, gohighlevel funnel vs website',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Funnel Builder: Complete Feature Guide (2026)',
    description: 'GoHighLevel\'s funnel builder is included free on every plan with unlimited funnels, built-in A/B testing, AI generation, and native CRM integration. Complete guide covering all features, funnel types, and honest limitations.',
    type: 'article',
    publishedTime: '2026-06-14T00:00:00Z',
    modifiedTime: '2026-06-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Funnel Builder', 'Features', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-funnel-builder-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Funnel Builder: Complete Feature Guide (2026)',
    description: 'GoHighLevel\'s funnel builder is included free on every plan with unlimited funnels, built-in A/B testing, AI generation, and native CRM integration.',
    images: ['https://www.ghlscaleup.com/images/blog/gohighlevel-funnel-builder-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-funnel-builder',
  },
};

export default function GoHighLevelFunnelBuilderPage() {
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
            "headline": "GoHighLevel Funnel Builder: Complete Feature Guide (2026)",
            "description": "GoHighLevel's funnel builder is included free on every plan with unlimited funnels, built-in A/B testing, AI generation, and native CRM integration. Complete guide covering all features, funnel types, and honest limitations.",
            "image": "https://www.ghlscaleup.com/images/blog/gohighlevel-funnel-builder-og.jpg",
            "datePublished": "2026-06-14",
            "dateModified": "2026-06-14",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-funnel-builder"
            }
          })
        }}
      />
      <GoHighLevelFunnelBuilderClient />
    </>
  );
}