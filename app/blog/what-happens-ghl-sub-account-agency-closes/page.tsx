import { Metadata } from 'next';
import Script from 'next/script';
import WhatHappensGHLSubAccountAgencyClosesClient from './client';

export const metadata: Metadata = {
  title: 'What Happens to Your GHL Sub-Account If Your Agency Closes? (2026)',
  description: 'Agency closes: you lose access immediately. Phone numbers deleted in 14 days. All data permanently deleted after 90 days. What to do right now to protect your data.',
  keywords: 'what happens to GHL sub account if agency closes, GHL sub account locked agency went out of business, can I get my GHL data if agency closes, GHL sub account owner rights, remove agency access from GHL sub account, GHL sub account agency unresponsive, how to protect GHL sub account from agency closing',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'What Happens to Your GHL Sub-Account If Your Agency Closes? (2026)',
    description: 'Lose access immediately. Contacts, workflows, funnels become inaccessible. Phone numbers delete after 14 days. 90 days before permanent deletion. Here is exactly what to do right now.',
    type: 'article',
    publishedTime: '2026-05-28T00:00:00Z',
    modifiedTime: '2026-05-28T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Sub-Account', 'GHL Agency', 'Data Protection', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-sub-account-closure-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'What Happens to Your GHL Sub-Account If Your Agency Closes?',
    description: 'Lose access immediately. Phone numbers delete after 14 days. 90 days before permanent deletion. Here is what to do right now.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-sub-account-closure-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/what-happens-ghl-sub-account-agency-closes',
  },
};

export default function WhatHappensGHLSubAccountAgencyClosesPage() {
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
            "headline": "What Happens to Your GHL Sub-Account If Your Agency Closes? (2026)",
            "description": "If your GHL agency closes, you lose access to your sub-account immediately. Contacts, workflows, and funnels become inaccessible. Phone numbers delete after 14 days. You have 90 days before permanent deletion. Here is exactly what to do right now.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-sub-account-closure-og.jpg",
            "datePublished": "2026-05-28",
            "dateModified": "2026-05-28",
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
              "@id": "https://www.ghlscaleup.com/blog/what-happens-ghl-sub-account-agency-closes"
            }
          })
        }}
      />
      <WhatHappensGHLSubAccountAgencyClosesClient />
    </>
  );
}