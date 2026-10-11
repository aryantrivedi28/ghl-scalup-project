import { Metadata } from 'next';
import HighLevelAPIV1DeprecationClient from './client';

export const metadata: Metadata = {
  title: 'HighLevel API v1 Deprecation: What to Check and How to Migrate',
  description: 'HighLevel says your account still uses API v1. Here is what that means, how to find the dependency, what could stop working and how to migrate safely.',
  keywords: 'HighLevel API v1 deprecation, HighLevel API v1 shutdown, HighLevel API v1 migration, HighLevel API v1 end of support, HighLevel legacy API key, HighLevel Private Integration token, GoHighLevel API v1 deprecated, HighLevel API migration',
  openGraph: {
    title: 'HighLevel API v1 Deprecation: What to Check and How to Migrate',
    description: 'HighLevel says your account still uses API v1. Here is what that means, how to find the dependency, what could stop working and how to migrate safely.',
    url: 'https://www.ghlscaleup.com/blog/highlevel-api-v1-deprecation',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/highlevel-api-v1-deprecation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'HighLevel API v1 Deprecation: What to Check and How to Migrate',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-12T00:00:00.000Z',
    modifiedTime: '2026-10-12T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HighLevel API v1 Deprecation: What to Check and How to Migrate',
    description: 'HighLevel says your account still uses API v1. Here is what that means, how to find the dependency, what could stop working and how to migrate safely.',
    images: ['/blog-images/highlevel-api-v1-deprecation-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/highlevel-api-v1-deprecation',
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
  headline: 'HighLevel API v1 Deprecation: What It Means, What Could Break and How to Migrate',
  description:
    'HighLevel says your account still uses API v1. Here is what that means, how to find the dependency, what could stop working and how to migrate safely.',
  image: 'https://www.ghlscaleup.com/blog-images/highlevel-api-v1-deprecation-og.jpg',
  datePublished: '2026-10-12T00:00:00.000Z',
  dateModified: '2026-10-12T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/highlevel-api-v1-deprecation',
  },
  about: {
    '@type': 'Thing',
    name: 'HighLevel API v1 Deprecation',
    description: 'A comprehensive guide to the HighLevel API v1 deprecation and migration',
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
      name: 'HighLevel API v1 Deprecation: What to Check and How to Migrate',
      item: 'https://www.ghlscaleup.com/blog/highlevel-api-v1-deprecation',
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
      name: 'What is HighLevel API v1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The older HighLevel API, authenticated with a legacy API key that gives broad access to an agency\'s or sub-account\'s data. HighLevel\'s materials also call it API 1.0.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is HighLevel API v1 deprecated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. HighLevel\'s documentation says it reached end-of-support on December 31, 2025. Existing integrations may continue to work but receive no updates or support, and new legacy API keys can\'t be created.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is HighLevel API v1 shutting down?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HighLevel\'s account notification says November 30, 2026, with v1 endpoints unavailable from December 1, 2026. HighLevel\'s public documentation reviewed for this guide does not state a shutdown date, so treat the notification as the source if you received it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when API v1 is shut down?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Integrations still making v1 requests may fail. What that looks like depends on the integration: leads that stop arriving, data that stops syncing, errors in scripts or dashboards that stop updating.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I use HighLevel API v1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for legacy API keys in agency and sub-account settings, list every tool that connects to HighLevel, and check each connection type. Make labels its API-key connections deprecated, n8n\'s API-key credential is for v1, and a Zap may use a legacy key connection. The help pages reviewed here don\'t describe a usage report.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are HighLevel API keys deprecated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legacy API keys belong to API v1, which is end-of-support. New legacy keys can\'t be created, and keys unused for 90 days may be marked Expired. HighLevel recommends Private Integration Tokens for new credentials.',
      },
    },
    {
      '@type': 'Question',
      name: 'What replaces HighLevel API v1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the integration. HighLevel points internal tools and automations to Private Integration Tokens and public or Marketplace apps to OAuth 2.0. Built-in connectors in tools like Zapier, Make and n8n have their own current connection types.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Zapier, Make or n8n connections need to be migrated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if the specific connection uses the legacy API key. Check each tool\'s connection or credential type rather than assuming either way.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the migration only an API key change?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. HighLevel\'s migration guide says not to assume it is only an authentication change, because requests and responses can differ. Scopes, headers, endpoints, field mapping and error handling may all change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate a HighLevel API integration myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Possibly, if it is one simple integration you fully understand. Unknown dependencies, custom code, multiple integrations, client-facing systems and business-critical lead routing are better audited by someone technical first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can migrate a HighLevel API integration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A developer or HighLevel integration specialist. HighLevel Support says it doesn\'t provide setup code auditing or developer consulting, though it accepts bug reports and runs a developer community.',
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

      <HighLevelAPIV1DeprecationClient />
    </>
  );
}