import { Metadata } from 'next';
import ConnectZapierToGoHighLevelClient from './client';

export const metadata: Metadata = {
  title: 'Connect Zapier to GoHighLevel: Full Setup Guide (2026)',
  description: 'Step-by-step guide to connecting Zapier and GoHighLevel through LeadConnector — setup, triggers, field mapping, troubleshooting, and when native automation is the better call.',
  keywords: 'connect Zapier to GoHighLevel, GoHighLevel Zapier integration, LeadConnector Zapier, GoHighLevel Zapier triggers and actions, Zapier vs native GoHighLevel automation, GoHighLevel Zapier setup',
  openGraph: {
    title: 'Connect Zapier to GoHighLevel: Full Setup Guide (2026)',
    description: 'Step-by-step guide to connecting Zapier and GoHighLevel through LeadConnector — setup, triggers, field mapping, troubleshooting, and when native automation is the better call.',
    url: 'https://www.ghlscaleup.com/blog/connect-zapier-to-gohighlevel',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/connect-zapier-to-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Connect Zapier to GoHighLevel: Full Setup Guide (2026)',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-02T00:00:00.000Z',
    modifiedTime: '2026-09-02T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect Zapier to GoHighLevel: Full Setup Guide (2026)',
    description: 'Step-by-step guide to connecting Zapier and GoHighLevel through LeadConnector — setup, triggers, field mapping, troubleshooting, and when native automation is the better call.',
    images: ['/blog-images/connect-zapier-to-gohighlevel-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/connect-zapier-to-gohighlevel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'GHL Scale Up Team' }],
  category: 'GoHighLevel Integrations',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Connect Zapier to GoHighLevel: Setup, Triggers, and When Not to Use It (2026)',
  description:
    'Step-by-step guide to connecting Zapier and GoHighLevel through LeadConnector — setup, triggers, field mapping, troubleshooting, and when native automation is the better call.',
  image: 'https://www.ghlscaleup.com/blog-images/connect-zapier-to-gohighlevel-og.jpg',
  datePublished: '2026-09-02T00:00:00.000Z',
  dateModified: '2026-09-02T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/connect-zapier-to-gohighlevel',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Zapier Integration',
    description: 'A comprehensive guide to connecting Zapier with GoHighLevel through LeadConnector',
  },
};

// JSON-LD Schema for BreadcrumbList
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.ghlscaleup.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.ghlscaleup.com/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Connect Zapier to GoHighLevel: Full Setup Guide (2026)',
      item: 'https://www.ghlscaleup.com/blog/connect-zapier-to-gohighlevel',
    },
  ],
};

// JSON-LD Schema for FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is GoHighLevel actually on Zapier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — under the name LeadConnector, which is GoHighLevel\'s own integration and API brand, not a separate third-party product.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the integration free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zapier\'s free plan gives you 100 tasks/month, enough for testing, but it caps you at two-step Zaps — most real automations need at least the Professional tier, which starts from $19.99/month on annual billing. Confirm current rates at zapier.com/pricing, since Zapier periodically adjusts task tiers and pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use custom fields?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Zapier\'s own documentation for the LeadConnector integration confirms custom fields are supported on both triggers and actions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did my Zap succeed but nothing happened in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost always a field-mapping or downstream-workflow issue rather than a connection failure — see the Troubleshooting table above, particularly the row on contacts being created without triggering the intended follow-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I automate everything through Zapier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Use it when an external app genuinely needs to be part of the automation; use GoHighLevel\'s own workflow builder when the entire process happens inside GoHighLevel already.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I use instead of Zapier to connect apps to GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The two main alternatives are webhooks (GoHighLevel\'s native inbound/outbound webhook support) and direct API integration, both covered in the "When Webhooks or the API Make More Sense" section above. Make.com is also a named alternative.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ConnectZapierToGoHighLevelClient />
    </>
  );
}