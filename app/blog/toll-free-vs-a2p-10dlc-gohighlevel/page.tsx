import { Metadata } from 'next';
import Script from 'next/script';
import TollFreeVsA2P10DLCClient from './client';

export const metadata: Metadata = {
  title: 'Toll-Free vs A2P 10DLC in GoHighLevel: How to Choose',
  description:
    'Toll-Free Verification vs A2P 10DLC registration in GoHighLevel: what each requires, review times, costs, throughput and how to choose between them.',
  keywords:
    'toll free vs a2p 10dlc gohighlevel, gohighlevel toll free verification, a2p 10dlc gohighlevel, toll free number gohighlevel sms, gohighlevel toll free vs local number, can i use toll free instead of a2p gohighlevel, gohighlevel toll free number, toll free sms gohighlevel, a2p registration gohighlevel, toll free verification vs a2p, gohighlevel sms compliance, toll free mps gohighlevel, a2p throughput gohighlevel',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'Toll-Free vs A2P 10DLC in GoHighLevel: How to Choose',
    description:
      'Toll-Free Verification vs A2P 10DLC registration in GoHighLevel: what each requires, review times, costs, throughput and how to choose between them.',
    type: 'article',
    publishedTime: '2026-07-16T00:00:00Z',
    modifiedTime: '2026-07-16T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: [
      'A2P 10DLC',
      'Toll-Free',
      'GoHighLevel',
      'SMS Compliance',
      'Comparison',
    ],
    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/toll-free-vs-a2p-10dlc-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Toll-Free vs A2P 10DLC in GoHighLevel',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Toll-Free vs A2P 10DLC in GoHighLevel: How to Choose',
    description:
      'Toll-Free Verification vs A2P 10DLC registration in GoHighLevel: what each requires, review times, costs, throughput and how to choose between them.',
    images: [
      'https://www.ghlscaleup.com/images/blog/toll-free-vs-a2p-10dlc-gohighlevel-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/toll-free-vs-a2p-10dlc-gohighlevel',
  },
};

export default function TollFreeVsA2P10DLCPage() {
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
              'Toll-Free vs A2P 10DLC in GoHighLevel: Differences, Costs and Throughput',

            description:
              'Toll-Free Verification vs A2P 10DLC registration in GoHighLevel: what each requires, review times, costs, throughput and how to choose between them.',

            image:
              'https://www.ghlscaleup.com/images/blog/toll-free-vs-a2p-10dlc-gohighlevel-og.jpg',

            datePublished: '2026-07-16',
            dateModified: '2026-07-16',

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
                'https://www.ghlscaleup.com/blog/toll-free-vs-a2p-10dlc-gohighlevel',
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
                name: 'Does toll-free need A2P registration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Toll-free does not use A2P Brand and Campaign registration, but it needs its own Toll-Free Verification.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does toll-free need verification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. HighLevel says only a toll-free number with Verified (Approved) status can send SMS or MMS to US and Canada recipients.',
                },
              },

              {
                '@type': 'Question',
                name: 'Is toll-free better than A2P?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Neither is better in every case. The appropriate route depends on recipients, sender identity, volume, cost and readiness.',
                },
              },

              {
                '@type': 'Question',
                name: 'Which has higher MPS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Toll-free defaults to 3 MPS, with higher throughput available on request. A2P ranges from 2.25 to 225 MPS in HighLevel tables depending on Brand type, Trust Score and Campaign type.',
                },
              },

              {
                '@type': 'Question',
                name: 'Which is cheaper?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends. Toll-free numbers cost more per month, while A2P adds registration and monthly Campaign fees.',
                },
              },

              {
                '@type': 'Question',
                name: 'Which is faster to approve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Neither has a guaranteed timeline. HighLevel says toll-free review can take up to four to six weeks and describes a Fast Track option for A2P Campaigns.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does toll-free have a Trust Score?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's toll-free documentation does not describe a Trust Score. Trust Score applies to A2P Standard Brands.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can I send while toll-free verification is pending?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. HighLevel says Pending Verification numbers remain blocked for messaging.',
                },
              },

              {
                '@type': 'Question',
                name: 'What happens if toll-free verification is rejected?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Correct the listed problem and resubmit if available, or contact HighLevel Support for an appeal.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can I use both toll-free and A2P 10DLC?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Each uses its own registration or verification, and neither is a way around the other route’s limits.',
                },
              },

              {
                '@type': 'Question',
                name: 'Is toll-free available for Canadian recipients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's verification applies to messages from US or Canada toll-free numbers to recipients in the United States and Canada. Canadian 10DLC rules differ and are covered separately.",
                },
              },

              {
                '@type': 'Question',
                name: 'Does an EIN matter for toll-free verification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not for completing toll-free verification, per HighLevel, although it may request additional registration details for some business types. Standard A2P Brands use an EIN or equivalent.',
                },
              },
            ],
          }),
        }}
      />

      <TollFreeVsA2P10DLCClient />
    </>
  );
}