import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelForNonprofitsClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel for Nonprofits: Donor Management and Fundraising (2026) | GHL Scale Up',
  description: 'GoHighLevel helps nonprofits manage donors, automate fundraising campaigns, coordinate volunteers, and send tax receipts — all from one platform at $97/mo. Complete guide for nonprofit organisations. July 2026.',
  keywords: 'gohighlevel for nonprofits, ghl for nonprofits, gohighlevel donor management, gohighlevel fundraising automation, crm for nonprofits gohighlevel, does gohighlevel work for nonprofits, gohighlevel volunteer management, gohighlevel recurring donations',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel for Nonprofits: Donor Management and Fundraising (2026)',
    description: 'GoHighLevel helps nonprofits manage donors, automate fundraising campaigns, coordinate volunteers, and send tax receipts — all from one platform at $97/mo.',
    type: 'article',
    publishedTime: '2026-07-02T00:00:00Z',
    modifiedTime: '2026-07-02T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Nonprofits', 'Donor Management', 'Fundraising', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-for-nonprofits-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel for Nonprofits: Donor Management and Fundraising (2026)',
    description: 'GoHighLevel helps nonprofits manage donors, automate fundraising campaigns, coordinate volunteers, and send tax receipts — all from one platform at $97/mo.',
    images: ['https://www.ghlscaleup.com/images/blog/gohighlevel-for-nonprofits-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-for-nonprofits',
  },
};

export default function GoHighLevelForNonprofitsPage() {
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
            "headline": "GoHighLevel for Nonprofits: Donor Management and Fundraising Automation (2026)",
            "description": "GoHighLevel helps nonprofits manage donors, automate fundraising campaigns, coordinate volunteers, and send tax receipts — all from one platform at $97/mo.",
            "image": "https://www.ghlscaleup.com/images/blog/gohighlevel-for-nonprofits-og.jpg",
            "datePublished": "2026-07-02",
            "dateModified": "2026-07-02",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-for-nonprofits"
            }
          })
        }}
      />
      <GoHighLevelForNonprofitsClient />
    </>
  );
}