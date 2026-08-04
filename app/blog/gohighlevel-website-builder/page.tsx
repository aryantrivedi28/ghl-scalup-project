import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelWebsiteBuilderClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Website Builder: Complete 2026 Guide + WordPress Comparison | GHL Scale Up',
  description: 'Everything about the GoHighLevel website builder in 2026: templates, SEO settings, ecommerce, blogging, setup steps, honest limitations, and a real WordPress cost comparison.',
  keywords: 'gohighlevel website builder, gohighlevel website templates, gohighlevel vs wordpress, gohighlevel ecommerce store, gohighlevel blog feature, migrate wordpress to gohighlevel, gohighlevel website builder tutorial',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Website Builder: Complete 2026 Guide + WordPress Comparison',
    description: 'Everything about the GoHighLevel website builder in 2026: templates, SEO settings, ecommerce, blogging, setup steps, honest limitations, and a real WordPress cost comparison.',
    type: 'article',
    publishedTime: '2026-07-31T00:00:00Z',
    modifiedTime: '2026-07-31T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Website Builder', 'WordPress', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-website-builder-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Website Builder: Complete 2026 Guide + WordPress Comparison',
    description: 'Everything about the GoHighLevel website builder in 2026: templates, SEO settings, ecommerce, blogging, setup steps, honest limitations, and a real WordPress cost comparison.',
    images: ['https://www.ghlscaleup.com/images/blog/gohighlevel-website-builder-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-website-builder',
  },
};

export default function GoHighLevelWebsiteBuilderPage() {
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
            "headline": "GoHighLevel Website Builder: Complete 2026 Guide + WordPress Comparison",
            "description": "Everything about the GoHighLevel website builder in 2026: templates, SEO settings, ecommerce, blogging, setup steps, honest limitations, and a real WordPress cost comparison.",
            "image": "https://www.ghlscaleup.com/images/blog/gohighlevel-website-builder-og.jpg",
            "datePublished": "2026-07-31",
            "dateModified": "2026-07-31",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-website-builder"
            }
          })
        }}
      />
      <GoHighLevelWebsiteBuilderClient />
    </>
  );
}