import { Metadata } from 'next';
import Script from 'next/script';
import FeaturesSaveMoneyClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Features That Save Money: Top 7 (2026)',

  description:
    'Seven GoHighLevel features that can replace separate tools, with honest limits, usage costs and a simple way to work out your own saving.',

  keywords:
    'GoHighLevel features that save money, GoHighLevel features, GoHighLevel cost savings, GoHighLevel replace tools, GoHighLevel vs separate tools, GoHighLevel pricing, GoHighLevel tool consolidation, GoHighLevel save money',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'GoHighLevel Features That Save Money: Top 7 (2026)',

    description:
      'Seven GoHighLevel features that can replace separate tools, with honest limits, usage costs and a simple way to work out your own saving.',

    type: 'article',

    publishedTime: '2026-11-16T00:00:00Z',

    modifiedTime: '2026-11-16T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Cost Savings',
      'Tool Consolidation',
      'Pricing',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-features-that-save-money-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Top 7 GoHighLevel features that can save money for your business',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'GoHighLevel Features That Save Money: Top 7 (2026)',

    description:
      'Seven GoHighLevel features that can replace separate tools, with honest limits, usage costs and a simple way to work out your own saving.',

    images: [
      'https://www.ghlscaleup.com/images/blog/gohighlevel-features-that-save-money-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/gohighlevel-features-that-save-money',
  },
};

export default function FeaturesSaveMoneyPage() {
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
              'Top 7 GoHighLevel Features That Can Save Dollars for Your Business',

            description:
              'Seven GoHighLevel features that can replace separate tools, with honest limits, usage costs and a simple way to work out your own saving.',

            image:
              'https://www.ghlscaleup.com/images/blog/gohighlevel-features-that-save-money-og.jpg',

            datePublished: '2026-11-16',
            dateModified: '2026-11-16',

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

            articleSection: 'Cost Savings',

            keywords: [
              'GoHighLevel features that save money',
              'GoHighLevel features',
              'GoHighLevel cost savings',
              'GoHighLevel replace tools',
              'GoHighLevel vs separate tools',
              'GoHighLevel pricing',
              'GoHighLevel tool consolidation',
              'GoHighLevel save money',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/gohighlevel-features-that-save-money',
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
                name: 'Can GoHighLevel really replace seven tools?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It covers the main jobs of each one. It may not match every advanced feature of a specialist tool, so check the features you rely on first.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does GoHighLevel replace Zapier?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not fully. It reduces how much you need it for things inside GoHighLevel. Connecting outside apps may still need Zapier or similar, and some steps are charged by use.',
                },
              },

              {
                '@type': 'Question',
                name: 'Are texts cheaper than Twilio?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not by much. HighLevel says its prices are comparable. The benefit is having everything in one inbox.',
                },
              },

              {
                '@type': 'Question',
                name: 'What do I pay on top of the plan price?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Charges for emails, texts, phone numbers and some automation steps, plus US text registration and carrier fees.',
                },
              },

              {
                '@type': 'Question',
                name: 'How much will I save?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on what you pay now. Use the four-step method above to work out your own number.',
                },
              },

              {
                '@type': 'Question',
                name: 'Is it good for a small business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Often yes, especially if you pay for several overlapping tools. Check the plan limits, since the Starter plan includes three sub-accounts.',
                },
              },

              {
                '@type': 'Question',
                name: "Who shouldn't switch?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Businesses that rely on a specialist feature, must use a specific provider, or already have a low bill.',
                },
              },

              {
                '@type': 'Question',
                name: 'How long does it take to move?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on how many pages, automations and templates you have. A step-by-step move is usually easier than switching everything at once.',
                },
              },
            ],
          }),
        }}
      />

      <FeaturesSaveMoneyClient />
    </>
  );
}