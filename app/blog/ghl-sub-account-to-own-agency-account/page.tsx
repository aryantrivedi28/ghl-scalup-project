import { Metadata } from 'next';
import Script from 'next/script';
import GHLSubAccountToOwnAccountClient from './client';

export const metadata: Metadata = {
  title: 'How to Move from a GHL Sub-Account to Your Own Agency',
  description: 'Three options: eject, transfer, or start fresh. What transfers, what breaks, and what to set up in your new account. 2026 guide.',
  keywords: 'GHL sub account to own account, GoHighLevel sub account to agency account, how to move GHL sub account to own agency, set up own GoHighLevel account from sub account, eject sub account GoHighLevel, GHL sub account transfer what transfers, leave agency GHL account set up own',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Move from a GHL Sub-Account to Your Own Agency',
    description: 'Three options: eject to a new agency, transfer to an existing agency, or start fresh. Full step-by-step guide with what transfers and what you need to rebuild.',
    type: 'article',
    publishedTime: '2026-05-27T00:00:00Z',
    modifiedTime: '2026-05-27T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Sub-Account', 'GHL Agency Setup', 'Sub-Account Transfer', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-sub-account-transfer-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Move from a GHL Sub-Account to Your Own Agency Account',
    description: 'Eject to a new agency, transfer to an existing agency, or start fresh. Full step-by-step guide.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-sub-account-transfer-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/ghl-sub-account-to-own-agency-account',
  },
};

export default function GHLSubAccountToOwnAccountPage() {
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
            "headline": "How to Move from a GHL Sub-Account to Your Own Agency",
            "description": "You can move your GHL sub-account to your own independent agency account. Three options: eject to a new agency, transfer to an existing agency, or start fresh. Full step-by-step guide with what transfers and what you need to rebuild.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-sub-account-transfer-og.jpg",
            "datePublished": "2026-05-27",
            "dateModified": "2026-05-27",
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
              "@id": "https://www.ghlscaleup.com/blog/ghl-sub-account-to-own-agency-account"
            }
          })
        }}
      />
      <GHLSubAccountToOwnAccountClient />
    </>
  );
}