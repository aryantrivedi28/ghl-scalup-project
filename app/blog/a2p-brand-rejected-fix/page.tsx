import { Metadata } from 'next';
import Script from 'next/script';
import A2PBrandRejectedFixClient from './client';

export const metadata: Metadata = {
  title: 'A2P Brand Rejected in GoHighLevel: What It Means and How to Fix It | GHL Scale Up',
  description: 'Your A2P brand registration was rejected by TCR, not GHL. This guide covers every confirmed brand rejection cause — EIN mismatch, new EIN, PO Box, entity type errors — with the exact fix for each. Updated July 2026.',
  keywords: 'a2p brand rejected gohighlevel, gohighlevel a2p brand registration failed, a2p ein mismatch error gohighlevel, gohighlevel a2p brand maximum tries exhausted, a2p brand registration appeal gohighlevel, new ein a2p registration rejected, a2p brand rejected resubmit, gohighlevel a2p brand review pending',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Brand Rejected in GoHighLevel: What It Means and How to Fix It (2026)',
    description: 'Your A2P brand registration was rejected by TCR, not GHL. This guide covers every confirmed brand rejection cause — EIN mismatch, new EIN, PO Box, entity type errors — with the exact fix for each.',
    type: 'article',
    publishedTime: '2026-07-03T00:00:00Z',
    modifiedTime: '2026-07-03T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Brand Rejected', 'Fix Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-brand-rejected-fix-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Brand Rejected in GoHighLevel: What It Means and How to Fix It (2026)',
    description: 'Your A2P brand registration was rejected by TCR, not GHL. This guide covers every confirmed brand rejection cause with the exact fix for each.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-brand-rejected-fix-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-brand-rejected-fix',
  },
};

export default function A2PBrandRejectedFixPage() {
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
            "headline": "A2P Brand Rejected in GoHighLevel: What It Means and How to Fix It (2026)",
            "description": "Your A2P brand registration was rejected by TCR, not GHL. This guide covers every confirmed brand rejection cause — EIN mismatch, new EIN, PO Box, entity type errors — with the exact fix for each.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-brand-rejected-fix-og.jpg",
            "datePublished": "2026-07-03",
            "dateModified": "2026-07-03",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-brand-rejected-fix"
            }
          })
        }}
      />

      {/* HowTo Schema for Brand Rejection Fix */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Fix A2P Brand Rejection in GoHighLevel",
            "description": "Step-by-step guide to fixing A2P brand registration rejection in GoHighLevel, covering EIN mismatch, new EIN, PO Box, and other common rejection causes.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Identify the rejection cause", "text": "Check your brand rejection notification in GHL's Trust Center to identify the specific rejection reason." },
              { "@type": "HowToStep", "position": 2, "name": "Fix EIN mismatch", "text": "Obtain your CP 575 EIN Confirmation Letter from the IRS and update your brand registration with the exact legal name as it appears on the document." },
              { "@type": "HowToStep", "position": 3, "name": "Wait for new EIN propagation", "text": "If your EIN was recently issued, wait 30 to 90 days before resubmitting, or appeal for a $10 fee with your complete CP 575 PDF." },
              { "@type": "HowToStep", "position": 4, "name": "Replace PO Box with physical address", "text": "Update your business address to a physical street address as registered with the IRS." },
              { "@type": "HowToStep", "position": 5, "name": "Correct your Tax ID format", "text": "If you entered a DUNS number, replace it with your 9-digit EIN in the format XX-XXXXXXX." },
              { "@type": "HowToStep", "position": 6, "name": "Resubmit your brand registration", "text": "Submit the corrected brand registration through GHL's Trust Center. Provide the complete PDF of your CP 575 if requested." },
              { "@type": "HowToStep", "position": 7, "name": "Contact GHL support if exhausted", "text": "If you have exhausted 3 attempts, contact GHL support with your complete CP 575 PDF for manual verification." }
            ]
          })
        }}
      />
      <A2PBrandRejectedFixClient />
    </>
  );
}