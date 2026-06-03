import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelForCoachesClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel for Coaches and Consultants: Complete 2026 Guide | GHL Scale Up',
  description: 'GoHighLevel helps coaches book more discovery calls, automate lead follow-up, deliver group programs, and collect reviews replacing Calendly, Kajabi, and Mailchimp for $97/mo. Complete guide for coaches and consultants.',
  keywords: 'GoHighLevel for coaches, GoHighLevel for consultants, GoHighLevel coaching business 2026, GHL for life coaches, GoHighLevel discovery call automation coaches, best CRM for coaches 2026, GoHighLevel for business coaches',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel for Coaches and Consultants: Complete 2026 Guide',
    description: 'Book more discovery calls, automate lead follow-up, deliver group programs, and collect reviews replacing Calendly, Kajabi, and Mailchimp for $97/mo.',
    type: 'article',
    publishedTime: '2026-06-02T00:00:00Z',
    modifiedTime: '2026-06-02T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Coaches', 'Consultants', 'Coaching CRM', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-for-coaches-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel for Coaches and Consultants: Complete 2026 Guide',
    description: 'Book more discovery calls, automate lead follow-up, deliver group programs. Complete guide for coaches and consultants.',
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
            "headline": "GoHighLevel for Coaches and Consultants: Complete 2026 Guide",
            "description": "GoHighLevel helps coaches book more discovery calls, automate lead follow-up, deliver group programs, and collect reviews replacing Calendly, Kajabi, and Mailchimp for $97/mo.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-for-coaches-og.jpg",
            "datePublished": "2026-06-02",
            "dateModified": "2026-06-02",
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