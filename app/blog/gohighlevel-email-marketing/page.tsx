import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelEmailMarketingClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Email Marketing: Features, Limits & Fit',

  description:
    'What GoHighLevel email marketing is, how campaigns, automation, contacts, reports and sending work, where it falls short, and who it suits best.',

  keywords:
    'GoHighLevel email marketing, is GoHighLevel good for email marketing, GoHighLevel email marketing features, GoHighLevel email automation, GoHighLevel email campaigns, GoHighLevel email marketing pros and cons, LC Email, GoHighLevel CRM email marketing, email marketing platform',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'GoHighLevel Email Marketing: Features, Limits & Fit',

    description:
      'What GoHighLevel email marketing is, how campaigns, automation, contacts, reports and sending work, where it falls short, and who it suits best.',

    type: 'article',

    publishedTime: '2026-10-27T00:00:00Z',

    modifiedTime: '2026-10-27T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Email Marketing',
      'LC Email',
      'Campaigns',
      'Workflows',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-email-marketing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Email Marketing: Features, Limits & Fit',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'GoHighLevel Email Marketing: Features, Limits & Fit',

    description:
      'What GoHighLevel email marketing is, how campaigns, automation, contacts, reports and sending work, where it falls short, and who it suits best.',

    images: [
      'https://www.ghlscaleup.com/images/blog/gohighlevel-email-marketing-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/gohighlevel-email-marketing',
  },
};

export default function GoHighLevelEmailMarketingPage() {
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
              'GoHighLevel Email Marketing: How It Works and Is It Worth It?',

            description:
              'What GoHighLevel email marketing is, how campaigns, automation, contacts, reports and sending work, where it falls short, and who it suits best.',

            image:
              'https://www.ghlscaleup.com/images/blog/gohighlevel-email-marketing-og.jpg',

            datePublished: '2026-10-27',
            dateModified: '2026-10-27',

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

            articleSection: 'Email Marketing',

            keywords: [
              'GoHighLevel email marketing',
              'is GoHighLevel good for email marketing',
              'GoHighLevel email marketing features',
              'GoHighLevel email automation',
              'GoHighLevel email campaigns',
              'GoHighLevel email marketing pros and cons',
              'LC Email',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/gohighlevel-email-marketing',
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
                name: 'What is GoHighLevel email marketing used for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sending one-time campaigns and automated follow-up emails to contacts stored in the same CRM, with reports on the results.',
                },
              },

              {
                '@type': 'Question',
                name: 'Is GoHighLevel good for email marketing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can be if your email is tied to leads, bookings and follow-up and you can manage setup. If email is your only channel and you want the simplest tool, a dedicated platform may fit better.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel send automated emails?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Workflows can send emails from triggers, and email events such as opens or bounces can start workflows. You must design and test them.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does GoHighLevel include email campaign reporting?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes: statistics for sent, delivered, opened, clicked, bounced and unsubscribed, dashboard widgets and exports. Some views need LC Email, and opens are an imperfect signal.',
                },
              },

              {
                '@type': 'Question',
                name: 'What are the main limitations of GoHighLevel email marketing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Several features have prerequisites (a dedicated domain for tracking, a minimum volume for Smart Send), segments cannot be edited by hand, and deliverability depends on your sending setup. Whether a specific feature is in your plan must be verified.',
                },
              },

              {
                '@type': 'Question',
                name: 'Should a business choose GoHighLevel or a dedicated email platform?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Choose by your needs: GoHighLevel when email is part of a multi-channel follow-up process, a dedicated tool when email depth and simplicity matter most. Check requirements feature by feature.',
                },
              },
            ],
          }),
        }}
      />

      <GoHighLevelEmailMarketingClient />
    </>
  );
}