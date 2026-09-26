import { Metadata } from 'next';
import Script from 'next/script';
import A2PCampaignRejectedFixClient from './client';

export const metadata: Metadata = {
  title: 'A2P Campaign Rejected in GoHighLevel: Causes and Fixes',
  description: 'A2P campaign rejected in GoHighLevel? Find the rejection reason, fix the underlying cause and resubmit the right way, without duplicate fees.',
  keywords: 'a2p campaign rejected gohighlevel, why was my a2p campaign rejected, a2p campaign rejected resubmit, gohighlevel a2p appeal process, a2p campaign rejected fix, a2p forbidden use case list, gohighlevel a2p invalid website url error, a2p campaign rejection codes, a2p shaft categories',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Campaign Rejected in GoHighLevel: Causes and Fixes',
    description: 'A2P campaign rejected in GoHighLevel? Find the rejection reason, fix the underlying cause and resubmit the right way, without duplicate fees.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'A2P 10DLC', 'Campaign Rejected', 'SMS Compliance', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-campaign-rejected-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Campaign Rejected in GoHighLevel: Causes and Fixes',
    description: 'A2P campaign rejected in GoHighLevel? Find the rejection reason, fix the underlying cause and resubmit the right way, without duplicate fees.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-campaign-rejected-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-campaign-rejected-fix',
  },
};

export default function A2PCampaignRejectedFixPage() {
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
            "headline": "A2P Campaign Rejected in GoHighLevel: Why It Happens and How to Fix It",
            "description": "A Campaign describes one messaging program: the use case, who receives the messages, what they say, and how recipients consented. Campaign rejection means that description failed review, not that your business identity failed. That is a separate stage. This guide assumes your Brand is approved and focuses on the Campaign.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-campaign-rejected-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-campaign-rejected-fix"
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
                "name": "Why was my A2P Campaign rejected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually a problem with the use case, description, sample messages, opt in flow, website, policies, or content that falls into a prohibited category. Open View required fixes in Trust Center for your exact reason."
                }
              },
              {
                "@type": "Question",
                "name": "Can I edit and resubmit a rejected Campaign?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, for eligible rejection codes. Correct every listed issue and resubmit. Some fields, such as the use case or opt in message, may be locked, which can require a new Campaign instead."
                }
              },
              {
                "@type": "Question",
                "name": "Should I delete and recreate my Campaign?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Only when the required fix involves a field that cannot be edited during resubmission, or support directs you to. Editing the existing Campaign is the standard path for a correctable rejection."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Campaign review take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HighLevel does not publish a fixed timeline, and resubmission may take additional carrier review time. Watch the status in Trust Center rather than assuming a specific number of days."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between Brand rejected and Campaign rejected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brand rejection means your business identity could not be verified. Campaign rejection means your messaging program, as described, failed review. A valid Brand can still have a rejected Campaign."
                }
              },
              {
                "@type": "Question",
                "name": "My Campaign is Pending. Should I resubmit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Pending means the review is still running. Resubmitting or creating another Campaign while one is pending is not recommended."
                }
              },
              {
                "@type": "Question",
                "name": "My Campaign was approved but SMS is not working. What now?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Check that your sending number is linked to the approved Campaign and shows A2P Verified. If it is verified and messages still fail, troubleshoot the SMS error separately; this is not a Campaign rejection."
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
            "name": "How to Resubmit a Failed A2P Campaign in GoHighLevel",
            "description": "Step-by-step process to correct and resubmit an A2P campaign rejection in GoHighLevel without duplicate fees.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Open every rejection reason", "text": "Not only the first one shown, and read each View required fixes entry in full." },
              { "@type": "HowToStep", "position": 2, "name": "Correct every listed issue", "text": "HighLevel says addressing only some of them will likely produce another rejection." },
              { "@type": "HowToStep", "position": 3, "name": "Review the whole Campaign for consistency", "text": "Including fields the rejection did not name, since fixing one field can expose a mismatch elsewhere." },
              { "@type": "HowToStep", "position": 4, "name": "Resubmit", "text": "Eligible rejections can be corrected and resubmitted once every issue is addressed." },
              { "@type": "HowToStep", "position": 5, "name": "Watch for new issues", "text": "If it is rejected again, HighLevel says carriers may surface additional problems that were not visible in the first review, so treat each cycle as a fresh check rather than a repeat of the same fix." }
            ]
          })
        }}
      />
      <A2PCampaignRejectedFixClient />
    </>
  );
}