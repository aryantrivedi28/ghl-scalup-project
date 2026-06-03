// app/blog/what-is-gohighlevel/page.tsx
import { Metadata } from 'next';
import WhatIsGoHighLevelClient from './client';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'What Is GoHighLevel? Complete Guide for Agencies (2026)',
  description: 'GoHighLevel explained in plain English what it does, who it is built for, how it replaces 8 tools, and whether it is right for your business. Updated May 2026.',
  keywords: 'GoHighLevel, GHL, what is GoHighLevel, GoHighLevel guide, GHL CRM, marketing automation platform, GoHighLevel features, GoHighLevel pricing',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'What Is GoHighLevel? The Complete Guide for 2026',
    description: 'GoHighLevel (GHL) is an all-in-one CRM and marketing platform built for agencies and service businesses. Complete guide with features, pricing, and setup tips.',
    type: 'article',
    publishedTime: '2026-05-02T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'CRM', 'Marketing Automation', 'Agency Tools'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/what-is-gohighlevel-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'What Is GoHighLevel? The Complete Guide for 2026',
    description: 'GoHighLevel (GHL) is an all-in-one CRM and marketing platform built for agencies and service businesses.',
    images: ['https://ghlscaleup.com/images/blog/what-is-gohighlevel-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/what-is-gohighlevel',
  },
};

export default function WhatIsGoHighLevelPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What Is GoHighLevel? The Complete Guide for 2026",
            "description": "GoHighLevel (GHL) is an all-in-one CRM and marketing platform built for agencies and service businesses. This plain-English guide explains what it does, who it's for, and how it's priced.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-what-is-og.jpg",
            "datePublished": "2026-05-02",
            "dateModified": "2026-05-02",
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
              "@id": "https://www.ghlscaleup.com/blog/what-is-gohighlevel"
            }
          })
        }}
      />
      <WhatIsGoHighLevelClient />
    </>
  );
}