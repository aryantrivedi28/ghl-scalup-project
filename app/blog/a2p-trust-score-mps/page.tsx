import { Metadata } from 'next';
import Script from 'next/script';
import A2PTrustScoreMPSClient from './client';

export const metadata: Metadata = {
  title: 'A2P Trust Score and MPS Explained for GoHighLevel Users',
  description:
    'How A2P 10DLC Trust Score, Brand type and Campaign type set your MPS in GoHighLevel, with current throughput tables, T-Mobile daily limits and a worked example.',
  keywords:
    'a2p trust score gohighlevel, gohighlevel mps a2p, a2p trust score explained, a2p secondary vetting gohighlevel, t-mobile daily sms limit a2p, how to increase a2p throughput, a2p opt out rate suspension, gohighlevel a2p trust score low, a2p mps gohighlevel, a2p throughput gohighlevel, a2p message throughput, a2p daily message limits',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'A2P Trust Score and MPS Explained for GoHighLevel Users',
    description:
      'How A2P 10DLC Trust Score, Brand type and Campaign type set your MPS in GoHighLevel, with current throughput tables, T-Mobile daily limits and a worked example.',
    type: 'article',
    publishedTime: '2026-07-14T00:00:00Z',
    modifiedTime: '2026-07-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: [
      'A2P 10DLC',
      'Trust Score',
      'MPS',
      'GoHighLevel',
      'SMS Throughput',
    ],
    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/a2p-trust-score-mps-og.jpg',
        width: 1200,
        height: 630,
        alt: 'A2P Trust Score and MPS Explained for GoHighLevel Users',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Trust Score and MPS Explained for GoHighLevel Users',
    description:
      'How A2P 10DLC Trust Score, Brand type and Campaign type set your MPS in GoHighLevel, with current throughput tables, T-Mobile daily limits and a worked example.',
    images: [
      'https://www.ghlscaleup.com/images/blog/a2p-trust-score-mps-og.jpg',
    ],
  },

  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-trust-score-mps',
  },
};

export default function A2PTrustScoreMPSPage() {
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
              'A2P Trust Score and MPS Explained: GoHighHighLevel 10DLC Throughput Guide',

            description:
              'How A2P 10DLC Trust Score, Brand type and Campaign type set your MPS in GoHighLevel, with current throughput tables, T-Mobile daily limits and a worked example.',

            image:
              'https://www.ghlscaleup.com/images/blog/a2p-trust-score-mps-og.jpg',

            datePublished: '2026-07-14',
            dateModified: '2026-07-14',

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

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/a2p-trust-score-mps',
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
                name: 'What is a good A2P Trust Score?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In HighLevel\'s tables, the top tier is 75 to 100, which carries the highest documented throughput. No source defines a score as good in a delivery sense.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does every A2P Brand get a Trust Score?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Sole Proprietor and Low Volume Standard Brands do not go through secondary vetting and therefore do not receive a Trust Score.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does Trust Score affect MPS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For Standard Brands, yes. A higher Trust Score qualifies for higher throughput, subject to Campaign type and carrier rules.',
                },
              },

              {
                '@type': 'Question',
                name: 'What is the MPS for a Trust Score of 75?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A Trust Score of 75 falls in the 75 to 100 tier. HighLevel\'s current tables show up to 225 MPS toward AT&T, T-Mobile and Verizon combined, with 75 MPS toward each major network. A score of 50 to 74 is up to 120 MPS, while 1 to 49 is up to 12 MPS.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does Campaign type affect MPS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A Low Volume Mixed Campaign is fixed at 3.75 MPS regardless of Trust Score, with 1.25 MPS toward each of AT&T, T-Mobile and Verizon.',
                },
              },

              {
                '@type': 'Question',
                name: 'Is MPS per number or per Campaign?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Generally, MPS is assigned at the Campaign level and shared across its numbers and carriers. Small carriers are an exception, with 1 MPS per phone number. Sole Proprietor Campaigns also have separate number-level limits.',
                },
              },

              {
                '@type': 'Question',
                name: 'What is the difference between MPS and daily message limits?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'MPS is a speed limit that controls how quickly message segments may be sent. A daily carrier limit caps the number of segments a Brand may send toward a carrier over a day. They are separate limits.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does a high Trust Score guarantee delivery?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A higher Trust Score can increase sending throughput, but it does not guarantee delivery. Delivery also depends on consent, message content, carrier filtering, DND, opt outs and recipient status.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can I appeal a Trust Score?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HighLevel says it does not assign or manually change Trust Scores, and the documentation does not describe a formal Trust Score appeal process. HighLevel Support may provide guidance about possible causes of a low score.',
                },
              },

              {
                '@type': 'Question',
                name: 'Why is my Trust Score unavailable?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Secondary vetting may still be running. HighLevel says the review can take up to 7 business days. If the Brand is still not approved after that period, contact HighLevel Support.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does Trust Score apply to Toll Free or Canadian messaging?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'This guide covers US A2P 10DLC long-code messaging. Toll Free numbers use a separate verification and throughput model, while Canadian messaging follows its own rules.',
                },
              },

              {
                '@type': 'Question',
                name: 'Why are messages delayed when my MPS is high?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Check for an account-level rate limit, message segments that are higher than expected, and carrier or daily-cap issues. Queue delays, daily carrier caps and carrier filtering are separate problems from the Campaign MPS itself.',
                },
              },
            ],
          }),
        }}
      />

      <A2PTrustScoreMPSClient />
    </>
  );
}