import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelVsActiveCampaignClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs ActiveCampaign (2026): Pricing, Features, Verdict',
  description: 'Real 2026 pricing, an honest look at where ActiveCampaign\'s email automation wins, and where GoHighLevel\'s multi-channel breadth wins — with a clear verdict for your situation.',
  keywords: 'gohighlevel vs activecampaign, gohighlevel vs activecampaign pricing, gohighlevel vs activecampaign for agencies, is gohighlevel better than activecampaign, gohighlevel activecampaign comparison, activecampaign vs gohighlevel, can gohighlevel replace activecampaign',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel vs ActiveCampaign (2026): Pricing, Features, Verdict',
    description: 'Real 2026 pricing, an honest look at where ActiveCampaign\'s email automation wins, and where GoHighLevel\'s multi-channel breadth wins — with a clear verdict for your situation.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ActiveCampaign', 'GHL Comparison', 'Email Automation', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-vs-activecampaign-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel vs ActiveCampaign (2026): Pricing, Features, Verdict',
    description: 'Real 2026 pricing, an honest look at where ActiveCampaign\'s email automation wins, and where GoHighLevel\'s multi-channel breadth wins.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-vs-activecampaign-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-activecampaign',
  },
};

export default function GoHighLevelVsActiveCampaignPage() {
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
            "headline": "GoHighLevel vs ActiveCampaign (2026): Honest Comparison",
            "description": "GoHighLevel and ActiveCampaign both run CRM and email automation, which makes them look interchangeable on the surface. They aren't. ActiveCampaign is built around email as the primary channel; GoHighLevel is built around agencies running multiple channels and multiple clients. The right choice depends on which of those two things your business actually needs — not on which platform has more total features.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-vs-activecampaign-og.jpg",
            "datePublished": "2026-05-14",
            "dateModified": "2026-05-14",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-vs-activecampaign"
            }
          })
        }}
      />
      <GoHighLevelVsActiveCampaignClient />
    </>
  );
}