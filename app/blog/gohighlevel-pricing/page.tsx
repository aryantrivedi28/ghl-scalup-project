import { Metadata } from 'next';
import GoHighLevelPricingClient from './client';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'GoHighLevel Pricing 2026: All Plans and Real Costs',
  description: '$97, $297, $497 plans broken down usage fees for SMS, email, AI costs, and total monthly cost for real agency scenarios.',
  keywords: 'gohighlevel pricing, gohighlevel cost, gohighlevel plans, gohighlevel pricing plans, gohighlevel agency pro pricing, gohighlevel saas mode pricing, gohighlevel starter plan, gohighlevel free trial',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Pricing 2026: All Plans, Real Costs & Hidden Fees Explained',
    description: 'GoHighLevel costs $97, $297, or $497/month. But that\'s not your real cost. Every plan, every usage fee, AI pricing, and which plan is right for you.',
    type: 'article',
    publishedTime: '2026-05-13T00:00:00Z',
    modifiedTime: '2026-05-13T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Pricing', 'GoHighLevel Plans', 'GHL Cost', '2026'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-pricing-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Pricing 2026: All Plans, Real Costs & Hidden Fees',
    description: 'Every plan, every usage fee, AI pricing, and which plan is right for your business.',
    images: ['https://ghlscaleup.com/images/blog/ghl-pricing-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-pricing',
  },
};

export default function GoHighLevelPricingPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "GoHighLevel Pricing 2026: All Plans, Real Costs & Hidden Fees Explained",
            "description": "GoHighLevel costs $97, $297, or $497/month depending on your plan. But that's not your real cost. This guide covers every plan, every usage fee, AI pricing, and which plan is right for your business in 2026.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-pricing-og.jpg",
            "datePublished": "2026-05-13",
            "dateModified": "2026-05-13",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-pricing"
            }
          })
        }}
      />
      <GoHighLevelPricingClient />;
    </>
  )

}