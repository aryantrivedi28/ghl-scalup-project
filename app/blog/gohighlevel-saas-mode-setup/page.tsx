import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelSaaSModeSetupClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel SaaS Mode: Complete Setup Guide for Agencies (2026) | GHL Scale Up',
  description: 'Step-by-step GoHighLevel SaaS Mode setup: Stripe connection, pricing tiers, feature gating, Snapshot attachment, white-label domain, and go-live checklist. Agency Pro required. Full technical guide.',
  keywords: 'GoHighLevel SaaS Mode setup, how to set up GoHighLevel SaaS Mode, GoHighLevel SaaS Mode tutorial 2026, GoHighLevel SaaS configurator setup, GoHighLevel SaaS Mode Stripe setup, GoHighLevel SaaS pricing tiers setup, GoHighLevel SaaS Mode go live checklist',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel SaaS Mode: Complete Setup Guide for Agencies (2026)',
    description: 'Step-by-step technical setup: Stripe connection, pricing tiers, feature gating, Snapshot attachment, and go-live checklist.',
    type: 'article',
    publishedTime: '2026-06-09T00:00:00Z',
    modifiedTime: '2026-06-09T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'SaaS Mode', 'Agency Pro', 'White Label SaaS', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-saas-mode-setup-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel SaaS Mode: Complete Setup Guide for Agencies',
    description: 'Step-by-step technical setup: Stripe connection, pricing tiers, feature gating, and go-live checklist.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-saas-mode-setup-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-saas-mode-setup',
  },
};

export default function GoHighLevelSaaSModeSetupPage() {
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
            "headline": "GoHighLevel SaaS Mode: Complete Setup Guide for Agencies (2026)",
            "description": "Step-by-step GoHighLevel SaaS Mode setup: Stripe connection, pricing tiers, feature gating, Snapshot attachment, white-label domain, and go-live checklist. Agency Pro required.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-saas-mode-setup-og.jpg",
            "datePublished": "2026-06-09",
            "dateModified": "2026-06-09",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-saas-mode-setup"
            }
          })
        }}
      />
      <GoHighLevelSaaSModeSetupClient />
    </>
  );
}