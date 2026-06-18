import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelForHomeServicesClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel for HVAC, Plumbers and Roofers: 2026 Guide | GHL Scale Up',
  description: '30 to 45% of inbound calls go missed at home service businesses. GoHighLevel fixes that with instant text-back, emergency routing, and automated reviews — built for HVAC, plumbing, and roofing.',
  keywords: 'GoHighLevel for HVAC, GoHighLevel for plumbers, GoHighLevel for roofers, GoHighLevel for home services 2026, GoHighLevel for contractors, GoHighLevel missed call text back contractors, GoHighLevel vs Jobber, GoHighLevel HVAC plumbing roofing snapshot',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel for HVAC, Plumbers and Roofers: 2026 Guide',
    description: '30 to 45% of inbound calls go missed. GoHighLevel fixes that with instant text-back, emergency routing, and automated reviews for HVAC, plumbing, and roofing.',
    type: 'article',
    publishedTime: '2026-06-12T00:00:00Z',
    modifiedTime: '2026-06-12T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'HVAC', 'Plumbing', 'Roofing', 'Home Services', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-for-home-services-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel for HVAC, Plumbers and Roofers: 2026 Guide',
    description: 'Instant text-back, emergency routing, and automated reviews for home service businesses.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-for-home-services-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-for-home-services',
  },
};

export default function GoHighLevelForHomeServicesPage() {
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
            "headline": "GoHighLevel for HVAC, Plumbers and Roofers: Complete 2026 Guide",
            "description": "30 to 45% of inbound calls go missed at home service businesses. GoHighLevel fixes that with instant text-back, emergency routing, and automated reviews for HVAC, plumbing, and roofing.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-for-home-services-og.jpg",
            "datePublished": "2026-06-12",
            "dateModified": "2026-06-12",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-for-home-services"
            }
          })
        }}
      />
      <GoHighLevelForHomeServicesClient />
    </>
  );
}