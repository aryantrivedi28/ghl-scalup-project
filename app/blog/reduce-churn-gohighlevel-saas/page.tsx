import { Metadata } from 'next';
import Script from 'next/script';
import ReduceChurnClient from './client';

export const metadata: Metadata = {
  title: 'Reduce Churn for a GoHighLevel SaaS Business (2026 Guide)',

  description:
    'Learn why GoHighLevel SaaS customers cancel and how to build onboarding, tracking and cancellation flows that support retention, with honest limits.',

  keywords:
    'GoHighLevel SaaS churn, reduce SaaS churn, SaaS customer retention, GoHighLevel SaaS cancellation flow, SaaS retention metrics, SaaS customer onboarding, SaaS product adoption, SaaS customer health score, GoHighLevel SaaS Mode, GoHighLevel subscription workflow',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'Reduce Churn for a GoHighLevel SaaS Business (2026 Guide)',

    description:
      'Learn why GoHighLevel SaaS customers cancel and how to build onboarding, tracking and cancellation flows that support retention, with honest limits.',

    type: 'article',

    publishedTime: '2026-11-20T00:00:00Z',

    modifiedTime: '2026-11-20T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'SaaS Mode',
      'Retention',
      'Customer Experience',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/reduce-churn-gohighlevel-saas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Five stages of a SaaS customer retention framework: Acquire, Activate, Engage, Monitor, Retain as a loop',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'Reduce Churn for a GoHighLevel SaaS Business (2026 Guide)',

    description:
      'Learn why GoHighLevel SaaS customers cancel and how to build onboarding, tracking and cancellation flows that support retention, with honest limits.',

    images: [
      'https://www.ghlscaleup.com/images/blog/reduce-churn-gohighlevel-saas-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/reduce-churn-gohighlevel-saas',
  },
};

export default function ReduceChurnPage() {
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
              'How to Reduce Churn for a GoHighLevel SaaS Business',

            description:
              'Learn why GoHighLevel SaaS customers cancel and how to build onboarding, tracking and cancellation flows that support retention, with honest limits.',

            image:
              'https://www.ghlscaleup.com/images/blog/reduce-churn-gohighlevel-saas-og.jpg',

            datePublished: '2026-11-20',
            dateModified: '2026-11-20',

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

            articleSection: 'SaaS Mode',

            keywords: [
              'GoHighLevel SaaS churn',
              'reduce SaaS churn',
              'SaaS customer retention',
              'GoHighLevel SaaS cancellation flow',
              'SaaS retention metrics',
              'SaaS customer onboarding',
              'SaaS product adoption',
              'SaaS customer health score',
              'GoHighLevel SaaS Mode',
              'GoHighLevel subscription workflow',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/reduce-churn-gohighlevel-saas',
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
                name: 'What is churn in a SaaS business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Churn is the number of customers, or the amount of revenue, lost over a period, usually because people cancel or payments fail.',
                },
              },

              {
                '@type': 'Question',
                name: 'How do you calculate SaaS customer churn?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Divide the customers you lost during the period by the customers you had at the start, then multiply by 100. Losing 8 of 100 customers is 8%.',
                },
              },

              {
                '@type': 'Question',
                name: 'What is the difference between customer churn and revenue churn?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Customer churn counts people. Revenue churn counts money, including downgrades. Losing five small customers and one large one can give you different answers.',
                },
              },

              {
                '@type': 'Question',
                name: 'Why do SaaS customers cancel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Common reasons are poor onboarding, low use, unclear value, wrong expectations, technical problems, weak support, price, and changes in their business.',
                },
              },

              {
                '@type': 'Question',
                name: 'How does onboarding affect retention?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Customers who get started well reach value sooner, which makes the subscription easier to justify. Weak onboarding is a common early reason for leaving.',
                },
              },

              {
                '@type': 'Question',
                name: 'How can agencies identify customers at risk of leaving?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Look for unfinished onboarding, low use, unresolved support issues, failed payments and negative feedback. In GoHighLevel, track these with custom fields, tags, workflows and regular manual review.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does GoHighLevel give you a customer health score?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "We haven't found an official built-in health score or churn prediction. You can build a simple one with fields, tags and workflows, or connect an outside tool.",
                },
              },

              {
                '@type': 'Question',
                name: 'What is the GoHighLevel Custom SaaS Cancellation Flow?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It lets agencies replace the one-click cancel with a multi-step flow that can collect reasons, offer a discount (V1 only) or redirect to an outside page, with every attempt logged.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel automate subscription workflows?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Partly. The Subscription trigger can start workflows when a subscription is created, moves from trial to active, or is cancelled. Other steps need extra setup, so test them.',
                },
              },

              {
                '@type': 'Question',
                name: 'Which metrics should agencies track?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Customer churn, revenue churn, retention rate, MRR, lifetime value, acquisition cost, activation rate, time to value and adoption.',
                },
              },
            ],
          }),
        }}
      />

      <ReduceChurnClient />
    </>
  );
}