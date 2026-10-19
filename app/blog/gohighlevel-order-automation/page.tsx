import { Metadata } from 'next';
import GoHighLevelOrderAutomationClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Order Automation: Workflows & Setup Guide',
  description: 'Learn which order events can trigger GoHighLevel workflows, what data they carry, how to set up and test them, and what needs Shopify or other tools.',
  keywords: 'GoHighLevel order automation, GoHighLevel ecommerce order automation, GoHighLevel order workflow, automate Shopify orders with GoHighLevel, GoHighLevel order workflow triggers, GoHighLevel order confirmation workflow, GoHighLevel order notification, GoHighLevel payment received vs order submitted, GoHighLevel duplicate order emails, GoHighLevel Order Fulfilled trigger, why is my GoHighLevel order workflow not triggering',
  openGraph: {
    title: 'GoHighLevel Order Automation: Workflows & Setup Guide',
    description: 'Learn which order events can trigger GoHighLevel workflows, what data they carry, how to set up and test them, and what needs Shopify or other tools.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-order-automation',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-order-automation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Order Automation: Workflows & Setup Guide',
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
    title: 'GoHighLevel Order Automation: Workflows & Setup Guide',
    description: 'Learn which order events can trigger GoHighLevel workflows, what data they carry, how to set up and test them, and what needs Shopify or other tools.',
    images: ['/blog-images/gohighlevel-order-automation-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-order-automation',
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
  headline: 'GoHighLevel Order Automation: Workflows, Setup & Limits',
  description:
    'Learn which order events can trigger GoHighLevel workflows, what data they carry, how to set up and test them, and what needs Shopify or other tools.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-order-automation-og.jpg',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-order-automation',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Order Automation',
    description: 'A comprehensive guide to GoHighLevel order automation',
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
      name: 'GoHighLevel Order Automation: Workflows & Setup Guide',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-order-automation',
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
      name: 'Can GoHighLevel automate ecommerce orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can automate the work around an order, such as notifications, tasks, record updates and messages, when an order event reaches it. It does not manage inventory or shipping.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel send an order confirmation automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. HighLevel sends automatic sales receipts and Store order confirmations, and you can build a custom one with the Order Submitted trigger and Send Email. Check that these do not overlap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I automate Shopify orders with GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Partly. HighLevel\'s Shopify integration syncs orders and contacts and exposes Shopify order triggers and Order Fulfilled. Which fields arrive depends on sync settings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it update customer information after an order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Shopify\'s sync updates fields such as lifetime value and order count, and workflows can add tags or update fields. Contact fields hold one value, so they are not order history.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it send order-status notifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For fulfillment, yes, through Order Fulfilled. It does not fire on Delivered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel manage inventory and shipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No workflow inventory or shipping-label capability is documented. It connects to Shippo and ShipStation for fulfillment events.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a workflow trigger when a payment succeeds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with Payment Received and Payment Status set to Success.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop duplicate order notifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Review automatic receipts and Store emails, set re-entry options deliberately, narrow filters, and check for multiple workflows on one trigger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need Zapier or another tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not for orders placed in HighLevel or connected Shopify. For platforms without a documented trigger, a webhook or connector is needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test an order workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use test modes, test one case per branch, and check Workflow History. Do not send test messages to real customers.',
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

      <GoHighLevelOrderAutomationClient />
    </>
  );
}