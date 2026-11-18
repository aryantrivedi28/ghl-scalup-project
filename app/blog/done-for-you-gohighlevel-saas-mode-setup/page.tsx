import { Metadata } from 'next';
import Script from 'next/script';
import DFYSaaSModeClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel SaaS Mode Setup: What a DFY Team Configures',

  description:
    'What does a done-for-you team configure in GoHighLevel SaaS Mode? Plans, Stripe, branding, snapshots, onboarding and testing, explained simply.',

  keywords:
    'done for you GoHighLevel SaaS setup, GoHighLevel SaaS Mode setup service, GoHighLevel SaaS configuration, white label SaaS setup, what does a GoHighLevel SaaS setup include, do I need Stripe for GoHighLevel SaaS Mode, GoHighLevel SaaS snapshot provisioning',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'GoHighLevel SaaS Mode Setup: What a DFY Team Configures',

    description:
      'What does a done-for-you team configure in GoHighLevel SaaS Mode? Plans, Stripe, branding, snapshots, onboarding and testing, explained simply.',

    type: 'article',

    publishedTime: '2026-11-18T00:00:00Z',

    modifiedTime: '2026-11-18T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'SaaS Mode',
      'Done-For-You',
      'Agency Setup',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/done-for-you-gohighlevel-saas-mode-setup-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Illustration of a branded software storefront ready for customers',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'GoHighLevel SaaS Mode Setup: What a DFY Team Configures',

    description:
      'What does a done-for-you team configure in GoHighLevel SaaS Mode? Plans, Stripe, branding, snapshots, onboarding and testing, explained simply.',

    images: [
      'https://www.ghlscaleup.com/images/blog/done-for-you-gohighlevel-saas-mode-setup-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/done-for-you-gohighlevel-saas-mode-setup',
  },
};

export default function DFYSaaSModePage() {
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
              'What Does a Done-For-You Team Configure in GoHighLevel SaaS Mode?',

            description:
              'What does a done-for-you team configure in GoHighLevel SaaS Mode? Plans, Stripe, branding, snapshots, onboarding and testing, explained simply.',

            image:
              'https://www.ghlscaleup.com/images/blog/done-for-you-gohighlevel-saas-mode-setup-og.jpg',

            datePublished: '2026-11-18',
            dateModified: '2026-11-18',

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
              'done for you GoHighLevel SaaS setup',
              'GoHighLevel SaaS Mode setup service',
              'GoHighLevel SaaS configuration',
              'white label SaaS setup',
              'what does a GoHighLevel SaaS setup include',
              'do I need Stripe for GoHighLevel SaaS Mode',
              'GoHighLevel SaaS snapshot provisioning',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/done-for-you-gohighlevel-saas-mode-setup',
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
                name: 'What is GoHighLevel SaaS Mode?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "It's a HighLevel feature that lets an agency sell the platform as its own branded software, with subscription billing and automatic account creation. As of November 2026 it needs HighLevel's top agency plan.",
                },
              },

              {
                '@type': 'Question',
                name: 'What does a Done-For-You GoHighLevel SaaS setup include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on the agreement. Typically it covers the plans, Stripe connection, branding and domain, a snapshot, onboarding, usage billing and testing. Always ask for the scope in writing.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can an agency sell GoHighLevel under its own brand?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. White-labelling lets you present the platform under your own name and domain. What your plan includes decides how far the branding goes.',
                },
              },

              {
                '@type': 'Question',
                name: 'Do I need Stripe for GoHighLevel SaaS Mode?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, for the standard setup. Customers pay through your Stripe account. HighLevel has more than one billing setup, so check which you're using.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel create customer accounts automatically after payment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, SaaS Mode can create a customer's account and load your snapshot when they subscribe. It still needs to be set up properly and tested.",
                },
              },

              {
                '@type': 'Question',
                name: 'What are GoHighLevel SaaS snapshots?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A snapshot is a saved copy of an account's setup, such as pipelines, forms, automations and templates. It copies the setup, not a customer's data.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can I create multiple SaaS pricing plans?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. You can build different plans with their own prices, features and snapshots.',
                },
              },

              {
                '@type': 'Question',
                name: 'Do I need technical knowledge to launch SaaS Mode?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Some, if you set it up yourself, since it involves billing, domains, DNS and automation. A done-for-you team can handle much of that for you.',
                },
              },

              {
                '@type': 'Question',
                name: 'How long does a GoHighLevel SaaS setup take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It varies with the scope, integrations, how ready your account is, and how much testing is needed. Anyone who gives you a fixed number before seeing your account is guessing.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can GHL Scale Up configure SaaS Mode for my agency?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "We help agencies with this, and our SaaS setup service page lists what's usually covered. Contact us and we'll talk through what you need and agree the scope.",
                },
              },
            ],
          }),
        }}
      />

      <DFYSaaSModeClient />
    </>
  );
}