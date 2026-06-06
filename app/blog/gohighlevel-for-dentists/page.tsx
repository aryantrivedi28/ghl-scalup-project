import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelForDentistsClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel for Dentists: Complete 2026 Guide for Dental Practices | GHL Scale Up',
  description: 'GoHighLevel helps dental practices reduce no-shows by 30 to 40%, recover lapsed patients, and automate Google review collection replacing Weave and Podium for $97/mo. Complete guide for dentists and DSOs.',
  keywords: 'GoHighLevel for dentists, GHL for dental practices, GoHighLevel dental marketing automation, dental CRM GoHighLevel 2026, GoHighLevel replace Weave dentist, GoHighLevel recall campaigns, GoHighLevel Google reviews dentist',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel for Dentists: Complete 2026 Guide for Dental Practices',
    description: 'Reduce no-shows by 30 to 40%, recover lapsed patients, and automate Google review collection replacing Weave and Podium for $97/mo.',
    type: 'article',
    publishedTime: '2026-06-05T00:00:00Z',
    modifiedTime: '2026-06-05T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Dentists', 'Dental CRM', 'Dental Marketing', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-for-dentists-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel for Dentists: Complete 2026 Guide',
    description: 'Reduce no-shows by 30 to 40%, recover lapsed patients, and automate Google review collection.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-for-dentists-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-for-dentists',
  },
};

export default function GoHighLevelForDentistsPage() {
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
            "headline": "GoHighLevel for Dentists: Complete 2026 Guide for Dental Practices",
            "description": "GoHighLevel helps dental practices reduce no-shows by 30 to 40%, recover lapsed patients, and automate Google review collection replacing Weave and Podium for $97/mo.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-for-dentists-og.jpg",
            "datePublished": "2026-06-05",
            "dateModified": "2026-06-05",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-for-dentists"
            }
          })
        }}
      />
      <GoHighLevelForDentistsClient />
    </>
  );
}