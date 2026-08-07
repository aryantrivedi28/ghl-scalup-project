import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelSaaSModeClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel SaaS Mode: Build a Profitable SaaS Agency',
  description: 'Everything to launch a profitable GoHighLevel SaaS business: real pricing, niche selection, getting clients, and setup. Honest 2026 guide from 200+ builds.',
  keywords: 'gohighlevel saas mode, ghl agency, white label saas, recurring revenue, gohighlevel saas guide, ghl saas agency, gohighlevel saas mode setup, how to start gohighlevel saas agency',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel SaaS Mode: The Complete 2026 Guide (Everything You Need)',
    description: 'Everything about GoHighLevel SaaS Mode in one place: what it is, how it works, real pricing, how to get clients, why they cancel, and honest answers to what people are actually asking on Reddit.',
    type: 'website',
    images: [{ url: 'https://www.ghlscaleup.com/images/gohighlevel-saas-mode-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel SaaS Mode: The Complete 2026 Guide (Everything You Need)',
    description: 'Everything about GoHighLevel SaaS Mode in one place: what it is, how it works, real pricing, how to get clients, why they cancel, and honest answers.',
    images: ['https://www.ghlscaleup.com/images/gohighlevel-saas-mode-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/gohighlevel-saas-mode',
  },
};

export default function GoHighLevelSaaSModePage() {
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
            "headline": "GoHighLevel SaaS Mode: The Complete 2026 Guide (Everything You Need)",
            "description": "Everything about GoHighLevel SaaS Mode in one place: what it is, how it works, real pricing, how to get clients, why they cancel, and honest answers to what people are actually asking on Reddit.",
            "image": "https://www.ghlscaleup.com/images/gohighlevel-saas-mode-og.jpg",
            "datePublished": "2026-07-26",
            "dateModified": "2026-07-26",
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
              "@id": "https://www.ghlscaleup.com/gohighlevel-saas-mode"
            }
          })
        }}
      />
      <GoHighLevelSaaSModeClient />
    </>
  );
}