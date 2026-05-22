import { Metadata } from 'next';
import GoHighLevelReviewClient from './client';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'GoHighLevel Review 2026: Honest Verdict After 200+ Real Builds (4.4/5) | GHL Scale Up',
  description: 'GoHighLevel review for 2026 from a team that has built 200+ GHL systems. Honest rating, real pros and cons, email deliverability issues, learning curve reality, and who should actually use it.',
  keywords: 'gohighlevel review, gohighlevel reviews, is gohighlevel worth it, gohighlevel pros and cons, gohighlevel complaints, gohighlevel reddit, gohighlevel 2026',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Review 2026: Honest Verdict After 200+ Real Builds (4.4/5)',
    description: 'Honest rating, real pros and cons, email deliverability issues, learning curve reality, and who should actually use GoHighLevel in 2026.',
    type: 'article',
    publishedTime: '2026-05-18T00:00:00Z',
    modifiedTime: '2026-05-18T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Review', 'GoHighLevel Review 2026', 'Is GHL Worth It'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-review-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Review 2026: Honest Verdict After 200+ Real Builds (4.4/5)',
    description: 'Honest rating, real pros and cons, and who should actually use GoHighLevel in 2026.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-review-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-review',
  },
};

export default function GoHighLevelReviewPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "GoHighLevel Review 2026: Honest Verdict After 200+ Real Builds (4.4/5)",
            "description": "GoHighLevel review for 2026 from a team that has built 200+ GHL systems. Honest rating, real pros and cons, email deliverability issues, learning curve reality, and who should actually use it.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-review-og.jpg",
            "datePublished": "2026-05-18",
            "dateModified": "2026-05-18",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-review"
            }
          })
        }}
      />
      <GoHighLevelReviewClient />;
    </>
  )

}