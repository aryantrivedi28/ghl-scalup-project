import { Metadata } from 'next';
import Script from 'next/script';
import LawFirmReviewsReferralsClient from './client';

export const metadata: Metadata = {
  title: 'Law Firm Reviews & Referrals With GoHighLevel: Setup Guide',

  description:
    'Build a responsible law firm review request and referral tracking process in GoHighLevel: workflows, source fields, safeguards, testing and metrics.',

  keywords:
    'law firm reviews and referrals, law firm review request automation, law firm referral tracking, GoHighLevel review requests, law firm referral source tracking, automated review requests for law firms, how to track law firm referral sources, law firm review requests without gating',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'Law Firm Reviews & Referrals With GoHighLevel: Setup Guide',

    description:
      'Build a responsible law firm review request and referral tracking process in GoHighLevel: workflows, source fields, safeguards, testing and metrics.',

    type: 'article',

    publishedTime: '2026-10-23T00:00:00Z',

    modifiedTime: '2026-10-23T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Law Firm',
      'Reviews',
      'Referrals',
      'GoHighLevel law firm',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/law-firm-reviews-referrals-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Review and referral process diagram for law firms, with highlighted boxes marking human responsibilities across review requests and referral source tracking',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'Law Firm Reviews & Referrals With GoHighLevel: Setup Guide',

    description:
      'Build a responsible law firm review request and referral tracking process in GoHighLevel: workflows, source fields, safeguards, testing and metrics.',

    images: [
      'https://www.ghlscaleup.com/images/blog/law-firm-reviews-referrals-gohighlevel-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/law-firm-reviews-referrals-gohighlevel',
  },
};

export default function LawFirmReviewsReferralsPage() {
  return (
    <>
      {/* Article Schema JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',

            headline:
              'Law Firm Reviews and Referrals With GoHighLevel: A Responsible Process',

            description:
              'Build a responsible law firm review request and referral tracking process in GoHighLevel: workflows, source fields, safeguards, testing and metrics.',

            image:
              'https://www.ghlscaleup.com/images/blog/law-firm-reviews-referrals-gohighlevel-og.jpg',

            datePublished: '2026-10-23',
            dateModified: '2026-10-23',

            author: {
              '@type': 'Organization',
              name: 'GHL Scale Up Team',
              url: 'https://www.ghlscaleup.com',
            },

            publisher: {
              '@type': 'Organization',
              name: 'GHL Scale Up',

              logo: {
                '@type': 'ImageObject',
                url: 'https://www.ghlscaleup.com/web-app-manifest-192x192.png',
              },
            },

            articleSection: 'Law Firms',

            keywords: [
              'law firm reviews and referrals',
              'law firm review request automation',
              'law firm referral tracking',
              'GoHighLevel review requests',
              'law firm referral source tracking',
              'automated review requests for law firms',
              'how to track law firm referral sources',
              'law firm review requests without gating',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/law-firm-reviews-referrals-gohighlevel',
            },
          }),
        }}
      />

      {/* FAQ Schema JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',

            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can GoHighLevel automate review requests for law firms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, it can send requests by SMS or email through a workflow action and Reputation settings. It does not decide who should be asked, and the firm must review professional rules and platform policies first.',
                },
              },

              {
                '@type': 'Question',
                name: 'How can a law firm track where referrals come from?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Create a controlled-list source field, fill it at intake, copy it to the opportunity's Source field, and report by source. HighLevel's own attribution does not capture person-to-person referrals.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel manage referral relationships?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can organize records, owners and reminder tasks. The relationship itself, and any decision about what to share, stays with a person.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can a law firm automate review requests without manipulating feedback?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, if every client who meets written criteria receives the same neutral request, with no incentive and no routing by sentiment.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does a review request guarantee a review?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Nothing can guarantee a review or its rating.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can the workflow tell which client wrote a review?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "No. HighLevel's Review Received trigger is not linked to a contact.",
                },
              },

              {
                '@type': 'Question',
                name: 'Does a source in the CRM prove it generated the client?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. It records an answer or a first or latest touch; it does not show cause.',
                },
              },

              {
                '@type': 'Question',
                name: 'What should a firm check before automating review requests?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Professional rules on testimonials and solicitation, platform policies, SMS consent, confidentiality of the message wording, and the opt-out process.',
                },
              },
            ],
          }),
        }}
      />

      <LawFirmReviewsReferralsClient />
    </>
  );
}