import { Metadata } from 'next';
import Script from 'next/script';
import A2PBrandRejectedFixClient from './client';

export const metadata: Metadata = {
  title: 'A2P Brand Rejected in GoHighLevel: Causes and How to Fix',
  description: 'A2P brand rejected or failed in GoHighLevel? Diagnose the failure, fix EIN and legal name mismatches, and know when to resubmit or contact support.',
  keywords: 'a2p brand rejected gohighlevel, gohighlevel a2p brand registration failed, a2p ein mismatch error gohighlevel, gohighlevel a2p brand maximum tries exhausted, a2p brand registration appeal gohighlevel, new ein a2p registration rejected, a2p brand rejected resubmit, gohighlevel a2p brand review pending',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Brand Rejected in GoHighLevel: Causes and How to Fix',
    description: 'A2P brand rejected or failed in GoHighLevel? Diagnose the failure, fix EIN and legal name mismatches, and know when to resubmit or contact support.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Brand Rejected', 'Fix Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-brand-rejected-fix-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Brand Rejected in GoHighLevel: Causes and How to Fix',
    description: 'A2P brand rejected or failed in GoHighLevel? Diagnose the failure, fix EIN and legal name mismatches, and know when to resubmit or contact support.',
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
            "headline": "A2P Brand Rejected in GoHighLevel: Why It Happens and How to Fix It",
            "description": "A2P Brand Registration answers one question: who is sending the messages? A rejected or failed Brand means the business details in that submission could not be verified or did not meet the Brand requirements. HighLevel submits your details to TCR, and the verification decision comes from TCR and its partners, not from HighLevel itself.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-brand-rejected-fix-og.jpg",
            "datePublished": "2026-05-14",
            "dateModified": "2026-05-14",
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

      {/* FAQ Schema JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why was my A2P brand rejected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually because the submitted legal name, registration number or address could not be matched to official records. Other documented causes are a new EIN, an entity type that could not be verified, the wrong Brand type and contact verification problems."
                }
              },
              {
                "@type": "Question",
                "name": "How do I fix an EIN mismatch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Take the exact legal name from your CP 575 or 147C, correct the Brand details, and resubmit."
                }
              },
              {
                "@type": "Question",
                "name": "Can I resubmit a rejected A2P brand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Generally yes, but attempts are limited. After the limit, contact HighLevel Support with your complete CP 575."
                }
              },
              {
                "@type": "Question",
                "name": "How long should I wait before resubmitting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If the failure is a genuine mismatch, correct it and resubmit. If your EIN is new, HighLevel's sources differ, so confirm with Support. There is no guaranteed waiting period."
                }
              },
              {
                "@type": "Question",
                "name": "What if my legal name differs from my DBA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Register the Brand under the legal name on the record. If you message under a DBA, HighLevel advises declaring it in the Campaign description and keeping your website and consent wording consistent."
                }
              },
              {
                "@type": "Question",
                "name": "When should I contact support or appeal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When your details match the record and the Brand still fails, when self service attempts are used up, when the EIN is very new, or when the Brand is suspended."
                }
              },
              {
                "@type": "Question",
                "name": "Can I register another brand instead?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It rarely helps. A new Brand with the same details will fail the same way, and HighLevel discourages many Brands on one EIN. Fix the existing one or ask Support first."
                }
              }
            ]
          })
        }}
      />

      {/* HowTo Schema JSON-LD */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Fix an A2P Brand Rejection in GoHighLevel",
            "description": "Step-by-step process to diagnose and fix a rejected A2P brand registration in GoHighLevel.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Confirm the failure", "text": "Make sure it is a Brand failure and not a pending review or a Campaign rejection." },
              { "@type": "HowToStep", "position": 2, "name": "Verify the source information", "text": "Check your CP 575, 147C or national registry record." },
              { "@type": "HowToStep", "position": 3, "name": "Correct every mismatch", "text": "Fix all of the listed problems, not just the first." },
              { "@type": "HowToStep", "position": 4, "name": "Update the Brand details and resubmit", "text": "Resubmit in the A2P registration area of your sub-account, following the prompts HighLevel shows." },
              { "@type": "HowToStep", "position": 5, "name": "Monitor the new status", "text": "Avoid duplicate submissions while a review is running." },
              { "@type": "HowToStep", "position": 6, "name": "Escalate if the documented fix does not work", "text": "Contact HighLevel Support with your complete CP 575 PDF if the fix does not resolve the rejection." }
            ]
          })
        }}
      />
      <A2PBrandRejectedFixClient />
    </>
  );
}