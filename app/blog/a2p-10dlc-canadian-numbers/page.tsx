import { Metadata } from 'next';
import Script from 'next/script';
import A2P10DLCCanadianNumbersClient from './client';

export const metadata: Metadata = {
  title: 'A2P 10DLC for Canadian Numbers in GoHighLevel: 2026 Requirements Guide | GHL Scale Up',
  description: 'A2P requirements for Canadian GHL numbers depend on two things: where you are sending (Canada vs US) and when the number was purchased (before or after March 26, 2025). Full decision guide. July 2026.',
  keywords: 'a2p 10dlc canadian numbers, gohighlevel a2p canada requirements, canada a2p registration gohighlevel, ghl canadian number sms rules 2026, ca to us a2p gohighlevel, gohighlevel canada a2p march 2025, a2p registration canada vs us gohighlevel, persona verification gohighlevel canada',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P 10DLC for Canadian Numbers in GoHighLevel: 2026 Requirements Guide',
    description: 'A2P requirements for Canadian GHL numbers depend on two things: where you are sending (Canada vs US) and when the number was purchased (before or after March 26, 2025). Full decision guide.',
    type: 'article',
    publishedTime: '2026-07-18T00:00:00Z',
    modifiedTime: '2026-07-18T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Canadian Numbers', 'Requirements', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-10dlc-canadian-numbers-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P 10DLC for Canadian Numbers in GoHighLevel: 2026 Requirements Guide',
    description: 'A2P requirements for Canadian GHL numbers depend on two things: where you are sending (Canada vs US) and when the number was purchased (before or after March 26, 2025).',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-10dlc-canadian-numbers-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-10dlc-canadian-numbers',
  },
};

export default function A2P10DLCCanadianNumbersPage() {
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
            "headline": "A2P 10DLC for Canadian Numbers in GoHighLevel: Complete 2026 Requirements Guide",
            "description": "A2P requirements for Canadian GHL numbers depend on two things: where you are sending (Canada vs US) and when the number was purchased (before or after March 26, 2025). Full decision guide.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-10dlc-canadian-numbers-og.jpg",
            "datePublished": "2026-07-18",
            "dateModified": "2026-07-18",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-10dlc-canadian-numbers"
            }
          })
        }}
      />
      <A2P10DLCCanadianNumbersClient />
    </>
  );
}