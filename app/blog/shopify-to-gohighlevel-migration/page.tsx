import { Metadata } from 'next';
import ShopifyToGoHighLevelMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Shopify to GoHighLevel Migration: Guide & Checklist',
  description: 'Plan a Shopify to GoHighLevel migration: what data imports and syncs, what must be rebuilt, when to keep Shopify connected, plus a testing and cutover checklist.',
  keywords: 'Shopify to GoHighLevel migration, migrate Shopify to GoHighLevel, Shopify to HighLevel migration, move Shopify store to GoHighLevel, can GoHighLevel replace Shopify, import Shopify orders into GoHighLevel, import Shopify customers into GoHighLevel, Shopify products to GoHighLevel, Shopify to GoHighLevel checklist, Shopify vs GoHighLevel ecommerce, keep Shopify and use GoHighLevel',
  openGraph: {
    title: 'Shopify to GoHighLevel Migration: Guide & Checklist',
    description: 'Plan a Shopify to GoHighLevel migration: what data imports and syncs, what must be rebuilt, when to keep Shopify connected, plus a testing and cutover checklist.',
    url: 'https://www.ghlscaleup.com/blog/shopify-to-gohighlevel-migration',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/shopify-to-gohighlevel-migration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopify to GoHighLevel Migration: Guide & Checklist',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-19T00:00:00.000Z',
    modifiedTime: '2026-10-19T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify to GoHighLevel Migration: Guide & Checklist',
    description: 'Plan a Shopify to GoHighLevel migration: what data imports and syncs, what must be rebuilt, when to keep Shopify connected, plus a testing and cutover checklist.',
    images: ['/blog-images/shopify-to-gohighlevel-migration-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/shopify-to-gohighlevel-migration',
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
  category: 'GoHighLevel Migration',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shopify to GoHighLevel Migration: What Moves, What Doesn\'t',
  description:
    'Plan a Shopify to GoHighLevel migration: what data imports and syncs, what must be rebuilt, when to keep Shopify connected, plus a testing and cutover checklist.',
  image: 'https://www.ghlscaleup.com/blog-images/shopify-to-gohighlevel-migration-og.jpg',
  datePublished: '2026-10-19T00:00:00.000Z',
  dateModified: '2026-10-19T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/shopify-to-gohighlevel-migration',
  },
  about: {
    '@type': 'Thing',
    name: 'Shopify to GoHighLevel Migration',
    description: 'A comprehensive guide to migrating from Shopify to GoHighLevel',
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
      name: 'Shopify to GoHighLevel Migration: Guide & Checklist',
      item: 'https://www.ghlscaleup.com/blog/shopify-to-gohighlevel-migration',
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
      name: 'Can you migrate Shopify to GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can import and sync Shopify contacts, orders, transactions, products and collections. You cannot import your theme, checkout, settings or workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Shopify data can be imported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contacts, orders, transactions, products and collections, subject to your plan and data access.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate customers and order history?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with limits: only customers with an order are included, and statuses arrive as Completed or Cancelled. Verify the results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For some stores, yes, using its native Ecommerce Store. It needs products, store pages, a domain and a payment provider, and items such as subscriptions, loyalty and gift cards are not documented as importable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to close my Shopify store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Many businesses keep Shopify and connect it. Cancel only after everything is verified.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it include products and collections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Taxes are not mapped and default SEO values may arrive empty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will orders keep syncing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you enable order sync in Sync Settings. Turning it off stops future syncing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate my Shopify workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. They must be rebuilt in HighLevel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to payments and shipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Payment and shipping settings are not imported; configure them separately or keep them in Shopify.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my SEO rankings be affected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They can be if URLs change. If Shopify remains the storefront, much less so. Redirects and monitoring help; nothing guarantees them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test the migration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use test contacts and Shopify\'s test payment options, check counts and sample records, and test workflows without messaging real customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to migrate or keep Shopify connected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your requirements. Keeping Shopify connected is usually lower risk when your main goal is CRM and automation.',
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

      <ShopifyToGoHighLevelMigrationClient />
    </>
  );
}