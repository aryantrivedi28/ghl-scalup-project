import { Metadata } from 'next';
import BestGHLAgencyClient from './client';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Best GHL Expert Agency to Hire in 2026',
  description: 'Top GoHighLevel expert agencies in 2026 compared services, pricing, and what to verify before hiring. Written after 200+ real GHL builds.',
  keywords: 'best GHL expert agency to hire, best GoHighLevel agency to hire, best GoHighLevel expert agency 2026, GHL expert agency, GoHighLevel agency, hire GoHighLevel expert, GoHighLevel setup agency',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Best GHL Expert Agency to Hire in 2026 (Honest Comparison)',
    description: 'We compared the top GHL agencies in 2026 covering specialisations, pricing, and who each one is best for so you can choose the right partner.',
    type: 'article',
    publishedTime: '2026-05-09T00:00:00Z',
    modifiedTime: '2026-05-09T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Agency', 'Agency Comparison', 'GHL Experts', '2026'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/best-ghl-agency-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Best GHL Expert Agency to Hire in 2026 (Honest Comparison)',
    description: 'We compared the top GHL agencies in 2026. Find the right partner for your GoHighLevel needs.',
    images: ['https://ghlscaleup.com/images/blog/best-ghl-agency-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/best-ghl-expert-agency',
  },
};

export default function BestGHLAgencyPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best GHL Expert Agency to Hire in 2026 (Honest Comparison)",
            "description": "Looking for the best GoHighLevel expert agency to hire? We compared the top GHL agencies in 2026 covering specialisations, pricing, and who each one is best for so you can choose the right partner without wasting time.",
            "image": "https://www.ghlscaleup.com/images/blog/best-ghl-agency-og.jpg",
            "datePublished": "2026-05-09",
            "dateModified": "2026-05-09",
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
              "@id": "https://www.ghlscaleup.com/blog/best-ghl-expert-agency"
            }
          })
        }}
      />

      <BestGHLAgencyClient />
    </>
  );
}