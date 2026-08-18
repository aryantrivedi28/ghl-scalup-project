// app/blog/gohighlevel-for-coaches/page.tsx
import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelForCoachesClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel for Coaches: Automate, Book Clients & Scale (2026)',
  description: 'How coaches use GoHighLevel to capture leads, automate follow-up, book discovery calls, onboard clients, and scale, plus honest pricing, limits, and what to automate first.',
  keywords: 'GoHighLevel for coaches, GoHighLevel coaching automation, GHL CRM for coaches, GoHighLevel coaching funnel, GoHighLevel for business coaches, GoHighLevel for life coaches, GoHighLevel for executive coaches, GoHighLevel cost for coaches',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel for Coaches: Automate, Book Clients & Scale (2026)',
    description: 'How coaches use GoHighLevel to capture leads, automate follow-up, book discovery calls, onboard clients, and scale, plus honest pricing, limits, and what to automate first.',
    type: 'article',
    publishedTime: '2026-07-01T00:00:00Z',
    modifiedTime: '2026-07-01T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Coaches', 'Consultants', 'Coaching CRM', '2026', 'Automation'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-for-coaches-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel for Coaches: Automate, Book Clients & Scale (2026)',
    description: 'How coaches use GoHighLevel to capture leads, automate follow-up, book discovery calls, onboard clients, and scale. Complete guide with pricing and what to automate first.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-for-coaches-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-for-coaches',
  },
};

export default function GoHighLevelForCoachesPage() {
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
            "headline": "GoHighLevel for Coaches: Automate, Book Clients & Scale (2026)",
            "description": "How coaches use GoHighLevel to capture leads, automate follow-up, book discovery calls, onboard clients, and scale, plus honest pricing, limits, and what to automate first.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-for-coaches-og.jpg",
            "datePublished": "2026-07-01",
            "dateModified": "2026-07-01",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-for-coaches"
            }
          })
        }}
      />
      <GoHighLevelForCoachesClient />
    </>
  );
}