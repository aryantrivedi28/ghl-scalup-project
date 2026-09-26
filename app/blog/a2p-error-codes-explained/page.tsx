import { Metadata } from 'next';
import Script from 'next/script';
import A2PErrorCodesExplainedClient from './client';

export const metadata: Metadata = {
  title: 'A2P Error Codes in GoHighLevel: Meaning and Fixes',
  description: 'Look up your A2P campaign or brand error code, find out what it means, whether you can resubmit, and the exact fix, sourced from current HighLevel documentation.',
  keywords: 'a2p error codes gohighlevel, a2p error code 30882, a2p error code 30883, a2p error code 30886, a2p error code 30898, a2p error code 30034, gohighlevel a2p error codes explained, a2p error codes list, highlevel a2p campaign rejection codes',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Error Codes in GoHighLevel: Meaning and Fixes',
    description: 'Look up your A2P campaign or brand error code, find out what it means, whether you can resubmit, and the exact fix, sourced from current HighLevel documentation.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Error Codes', 'Troubleshooting', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-error-codes-explained-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Error Codes in GoHighLevel: Meaning and Fixes',
    description: 'Look up your A2P campaign or brand error code, find out what it means, whether you can resubmit, and the exact fix, sourced from current HighLevel documentation.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-error-codes-explained-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-error-codes-explained',
  },
};

export default function A2PErrorCodesExplainedPage() {
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
            "headline": "A2P Error Codes in GoHighLevel: What They Mean and How to Fix Them",
            "description": "An A2P error code is the specific identifier carriers or HighLevel attach to a rejected Brand or Campaign so you know exactly what failed. Find your code in Trust Center under View required fixes, look it up below, and follow the correction listed. Most codes are fixable by editing and resubmitting; a smaller set, for prohibited or high risk content, are not.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-error-codes-explained-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-error-codes-explained"
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
                "name": "What does A2P error 30882 mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It means the Campaign did not meet carrier Terms and Conditions requirements. It is a legacy code; newer rejections are more likely to show a more specific code for the same underlying problem."
                }
              },
              {
                "@type": "Question",
                "name": "What does A2P error 30883 mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It means the submission included restricted SHAFT content: sex, hate, alcohol, firearms or tobacco. It has been replaced by distinct codes per category since March 23, 2026."
                }
              },
              {
                "@type": "Question",
                "name": "What does A2P error 30886 mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Campaign description does not thoroughly explain its purpose, or does not match the selected use case. This code is still current."
                }
              },
              {
                "@type": "Question",
                "name": "What does A2P error 30898 mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The same EIN is being used to register more Brands than TCR allows for that registration type."
                }
              },
              {
                "@type": "Question",
                "name": "Can I resubmit after fixing an error code?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually yes, once the underlying issue is corrected. Codes tied to prohibited or high risk content are not eligible for standard resubmission."
                }
              },
              {
                "@type": "Question",
                "name": "Is every A2P error code listed here?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. This page covers the codes with the most practical relevance for GoHighLevel users. For the fuller category based breakdown, see the Campaign Rejected guide."
                }
              },
              {
                "@type": "Question",
                "name": "My error code has no explanation here. What should I do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Note the exact code and text, determine whether it is a Brand or Campaign issue, use the relevant guide, and contact HighLevel Support if the documented fix does not resolve it."
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
            "name": "How to Look Up and Fix an A2P Error Code in GoHighLevel",
            "description": "Step-by-step process to identify your A2P error code and apply the correct fix.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Open Trust Center", "text": "In your GoHighLevel sub-account, go to Settings, then Phone System, then Trust Center." },
              { "@type": "HowToStep", "position": 2, "name": "Find the rejected Brand or Campaign", "text": "Open Brand & Campaigns, then find the rejected Brand or Campaign." },
              { "@type": "HowToStep", "position": 3, "name": "Note the error code", "text": "Select View required fixes and note the exact error code shown." },
              { "@type": "HowToStep", "position": 4, "name": "Look up the code", "text": "Find that code in the reference tables. If it is not listed, use the section on unlisted codes." },
              { "@type": "HowToStep", "position": 5, "name": "Apply the correction and resubmit", "text": "Apply the correction, review your whole submission for consistency, then resubmit." }
            ]
          })
        }}
      />
      <A2PErrorCodesExplainedClient />
    </>
  );
}