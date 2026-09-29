import { Metadata } from 'next';
import Script from 'next/script';
import A2P10DLCCanadianNumbersClient from './client';

export const metadata: Metadata = {
  title: 'A2P 10DLC for Canadian Numbers in GoHighLevel: 2026 Rules',
  description:
    'Do Canadian numbers need A2P 10DLC in GoHighLevel? It depends on the route and, for Canada-only traffic, the purchase date. Full decision table and rules.',
  keywords:
    'a2p 10dlc canadian numbers, gohighlevel a2p canada requirements, canada a2p registration gohighlevel, ghl canadian number sms rules 2026, ca to us a2p gohighlevel, gohighlevel canada a2p march 2025, a2p registration canada vs us gohighlevel, persona verification gohighlevel canada, canadian 10dlc requirements, canada sms compliance gohighlevel, canada to us a2p, us to canada a2p, canadian toll free verification, canadian a2p persona',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title:
      'A2P 10DLC for Canadian Numbers in GoHighLevel: 2026 Rules',
    description:
      'Do Canadian numbers need A2P 10DLC in GoHighLevel? It depends on the route and, for Canada-only traffic, the purchase date. Full decision table and rules.',
    type: 'article',
    publishedTime: '2026-07-18T00:00:00Z',
    modifiedTime: '2026-07-18T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: [
      'A2P 10DLC',
      'Canadian Numbers',
      'GoHighLevel',
      'Persona',
      'SMS Compliance',
      '2026',
    ],
    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/a2p-10dlc-canadian-numbers-og.jpg',
        width: 1200,
        height: 630,
        alt: 'A2P 10DLC for Canadian Numbers in GoHighLevel',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title:
      'A2P 10DLC for Canadian Numbers in GoHighLevel: 2026 Rules',
    description:
      'Do Canadian numbers need A2P 10DLC in GoHighLevel? It depends on the route and, for Canada-only traffic, the purchase date. Full decision table and rules.',
    images: [
      'https://www.ghlscaleup.com/images/blog/a2p-10dlc-canadian-numbers-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/a2p-10dlc-canadian-numbers',
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
            '@context': 'https://schema.org',
            '@type': 'Article',

            headline:
              'A2P 10DLC for Canadian Numbers in GoHighLevel: Requirements by Route',

            description:
              'Do Canadian numbers need A2P 10DLC in GoHighLevel? It depends on the route and, for Canada-only traffic, the purchase date. Full decision table and rules.',

            image:
              'https://www.ghlscaleup.com/images/blog/a2p-10dlc-canadian-numbers-og.jpg',

            datePublished: '2026-07-18',
            dateModified: '2026-07-18',

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
                'https://www.ghlscaleup.com/blog/a2p-10dlc-canadian-numbers',
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
                name: 'Do Canadian numbers need A2P 10DLC registration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on the route. Canada to US always needs A2P. Canada to Canada needs A2P only if the number was purchased on or after March 26, 2025, and even then Persona is a valid alternative. Canadian toll-free numbers do not use A2P.',
                },
              },

              {
                '@type': 'Question',
                name: 'Do I need A2P if I only send to Canadian recipients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Only if your Canadian 10DLC number was purchased on or after March 26, 2025, and even then you can choose Persona instead. Numbers purchased before March 26, 2025 do not need A2P for Canada-only traffic.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can Persona replace A2P for messages to the US?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. HighLevel states that Persona does not replace A2P registration when a Canadian number sends messages to US recipients.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does a US number sending to Canada need A2P?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. HighLevel treats US to Canada as domestic messaging requiring A2P registration, with no Canadian-recipient exception.',
                },
              },

              {
                '@type': 'Question',
                name: 'What Tax ID do Canadian businesses use for Standard Brand registration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Canadian businesses use the BN-9 format, which is the first nine digits of the CRA Business Number, entered exactly as it appears in official records.',
                },
              },

              {
                '@type': 'Question',
                name: 'Do Canadian toll-free numbers need A2P registration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Canadian toll-free numbers use Toll-Free Verification, which is a separate process from A2P 10DLC.',
                },
              },

              {
                '@type': 'Question',
                name: 'What happens if I send without the required registration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A route requiring A2P without it can return error 30034. A route requiring A2P or Persona with neither completed can return error 1002.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does completing A2P or Persona satisfy CASL?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A2P and Persona are separate telecom registration and identity mechanisms. Recipient consent, sender identification and unsubscribe requirements under CASL are separate considerations.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does Trust Score apply to Canadian numbers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HighLevel documentation on Trust Score and MPS covers US Standard Brands specifically. The documentation does not confirm that the same model applies to Canadian numbers, so it should not be assumed to apply.',
                },
              },

              {
                '@type': 'Question',
                name: 'What if I do not know when my Canadian number was purchased?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Contact HighLevel Support with the phone number and Location ID before choosing a compliance path.',
                },
              },
            ],
          }),
        }}
      />

      <A2P10DLCCanadianNumbersClient />
    </>
  );
}