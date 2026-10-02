import { Metadata } from 'next';
import GoHighLevelEcommerceCustomerRetentionClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Customer Retention & Winback Automation Guide',
  description: 'How to decide when an ecommerce customer is actually inactive, what data should drive a GoHighLevel winback workflow, and how to build it — since GoHighLevel has no built-in inactivity trigger.',
  keywords: 'GoHighLevel customer retention, GoHighLevel winback automation, GoHighLevel ecommerce winback, GoHighLevel repeat purchase automation, GoHighLevel customer reactivation, inactive customer automation GoHighLevel, Shopify customer retention GoHighLevel',
  openGraph: {
    title: 'GoHighLevel Customer Retention & Winback Automation Guide',
    description: 'How to decide when an ecommerce customer is actually inactive, what data should drive a GoHighLevel winback workflow, and how to build it — since GoHighLevel has no built-in inactivity trigger.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-customer-retention',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-ecommerce-customer-retention-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Customer Retention & Winback Automation Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-02T00:00:00.000Z',
    modifiedTime: '2026-10-02T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Customer Retention & Winback Automation Guide',
    description: 'How to decide when an ecommerce customer is actually inactive, what data should drive a GoHighLevel winback workflow, and how to build it — since GoHighLevel has no built-in inactivity trigger.',
    images: ['/blog-images/gohighlevel-ecommerce-customer-retention-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-customer-retention',
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
  category: 'GoHighLevel Ecommerce',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GoHighLevel Ecommerce Customer Retention: Winback, Repeat Purchases & Lifecycle Automation',
  description:
    'How to decide when an ecommerce customer is actually inactive, what data should drive a GoHighLevel winback workflow, and how to build it — since GoHighLevel has no built-in inactivity trigger.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-ecommerce-customer-retention-og.jpg',
  datePublished: '2026-10-02T00:00:00.000Z',
  dateModified: '2026-10-02T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-customer-retention',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Customer Retention & Winback Automation',
    description: 'A comprehensive guide to GoHighLevel ecommerce customer retention, winback, and lifecycle automation',
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
      name: 'GoHighLevel Customer Retention & Winback Automation Guide',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-customer-retention',
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
      name: 'What is customer retention automation in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Workflows that use existing customer and order data — purchase history, timing, product — to encourage continued purchasing, built on GoHighLevel\'s standard contacts, tags, custom fields and workflow engine rather than a dedicated retention feature.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel have an inactive customer trigger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. There\'s no native trigger or Smart List filter for purchase recency — GoHighLevel\'s own public feature-request board confirms this as an open gap, so it has to be built with custom fields and workflow logic instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I identify customers who haven\'t purchased recently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Track a "Last Purchase Date" custom field, updated by a workflow whenever an order event fires, then use a wait-for-condition or scheduled check against that field.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel use Shopify purchase history for retention?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, at the point an order event fires — product and order value are available as trigger conditions. An ongoing recency/frequency profile still has to be built and maintained with custom fields, since that isn\'t automatically tracked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I create product-specific winback workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, using product-based tags applied per order and the product filter available on relevant triggers, so a replenishment-style message can reference the specific item purchased.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop a winback workflow when a customer purchases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add a Goal Event checking for the relevant purchase event, set to end the workflow once met — this checks continuously, so it catches a purchase made at any point during the sequence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should ecommerce winback use email or SMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on the message and the customer\'s channel engagement, not a fixed rule — winback is rarely urgent enough to require SMS by default, and sending the same message on both channels adds noise rather than reach.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should I wait before a winback campaign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There\'s no universal number — base it on the specific product\'s or segment\'s normal repurchase cycle, not a fixed 30/60/90-day rule applied to everything.',
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

      <GoHighLevelEcommerceCustomerRetentionClient />
    </>
  );
}