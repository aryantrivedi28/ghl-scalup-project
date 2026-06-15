import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelVsKartraClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs Kartra (2026): Honest Comparison and Verdict | GHL Scale Up',
  description: 'GHL wins for agencies needing CRM, SMS, AI and sub-accounts. Kartra wins for course creators needing native video hosting, helpdesk, and webinars. Real 2026 pricing and an honest verdict for both audiences.',
  keywords: 'GoHighLevel vs Kartra, GoHighLevel vs Kartra 2026, Kartra vs GoHighLevel for course creators, is Kartra better than GoHighLevel, GoHighLevel Kartra pricing comparison, Kartra vs GoHighLevel for coaches, does GoHighLevel have helpdesk like Kartra, GoHighLevel AI vs Kartra',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel vs Kartra (2026): Honest Comparison and Verdict',
    description: 'GHL wins for agencies needing CRM, SMS, AI and sub-accounts. Kartra wins for course creators needing native video hosting, helpdesk, and webinars. Real 2026 pricing and honest verdict.',
    type: 'article',
    publishedTime: '2026-06-10T00:00:00Z',
    modifiedTime: '2026-06-10T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Kartra', 'GHL Comparison', 'Course Creators', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-vs-kartra-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel vs Kartra (2026): Honest Comparison and Verdict',
    description: 'GHL wins for agencies. Kartra wins for course creators. Real 2026 pricing and honest verdict.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-vs-kartra-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-kartra',
  },
};

export default function GoHighLevelVsKartraPage() {
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
            "headline": "GoHighLevel vs Kartra (2026): Honest Comparison for Course Creators and Agencies",
            "description": "GHL wins for agencies needing CRM, SMS, AI and sub-accounts. Kartra wins for course creators needing native video hosting, helpdesk, and webinars. Real 2026 pricing and an honest verdict for both audiences.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-vs-kartra-og.jpg",
            "datePublished": "2026-06-10",
            "dateModified": "2026-06-10",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-vs-kartra"
            }
          })
        }}
      />
      <GoHighLevelVsKartraClient />
    </>
  );
}