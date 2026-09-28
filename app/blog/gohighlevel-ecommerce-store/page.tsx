import { Metadata } from 'next';
import GoHighLevelEcommerceStoreClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Ecommerce Store: How It Works & Who It Fits',
  description: 'What the GoHighLevel Ecommerce Store includes, how products, cart, checkout, orders and workflows connect, its limits, and when Shopify fits better.',
  keywords: 'GoHighLevel ecommerce store, GoHighLevel online store, GoHighLevel ecommerce store setup, GoHighLevel ecommerce checkout, GoHighLevel store builder, GoHighLevel shopping cart, GoHighLevel abandoned checkout, GoHighLevel ecommerce store vs Shopify, can you build an online store with GoHighLevel, does GoHighLevel have a shopping cart, does GoHighLevel support product collections, can GoHighLevel process ecommerce payments, is GoHighLevel suitable for a large ecommerce store, GoHighLevel ecommerce store inside a funnel',
  openGraph: {
    title: 'GoHighLevel Ecommerce Store: How It Works & Who It Fits',
    description: 'What the GoHighLevel Ecommerce Store includes, how products, cart, checkout, orders and workflows connect, its limits, and when Shopify fits better.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-store',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-ecommerce-store-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Ecommerce Store: How It Works & Who It Fits',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-29T00:00:00.000Z',
    modifiedTime: '2026-09-29T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Ecommerce Store: How It Works & Who It Fits',
    description: 'What the GoHighLevel Ecommerce Store includes, how products, cart, checkout, orders and workflows connect, its limits, and when Shopify fits better.',
    images: ['/blog-images/gohighlevel-ecommerce-store-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-store',
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
  headline: 'GoHighLevel Ecommerce Store: How It Works and When to Use It',
  description:
    'What the GoHighLevel Ecommerce Store includes, how products, cart, checkout, orders and workflows connect, its limits, and when Shopify fits better.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-ecommerce-store-og.jpg',
  datePublished: '2026-09-29T00:00:00.000Z',
  dateModified: '2026-09-29T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-store',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Ecommerce Store',
    description: 'A comprehensive guide to the GoHighLevel Ecommerce Store product',
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
      name: 'GoHighLevel Ecommerce Store: How It Works & Who It Fits',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-store',
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
      name: 'What is the GoHighLevel Ecommerce Store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HighLevel\'s native storefront for displaying products, accepting payments, managing orders and customizing the shopping experience from a website or funnel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build an online store with GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A complete Store needs products, Store pages, a domain and a connected payment provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel have a shopping cart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Cart page is one of the five Store pages and lets customers review and adjust items before checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel have checkout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Checkout collects contact and address details, fulfillment options, eligible coupons and payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel sell products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. It supports physical, digital, one-time and recurring products, sold through the Store, funnels, payment links, invoices or forms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel support product collections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Collections can be manual or rule-based Smart Collections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel process ecommerce payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through a connected provider such as Stripe, PayPal, Authorize.Net, NMI, Square or Razorpay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate abandoned checkout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through an automatic email and a customizable Abandoned Checkout workflow trigger. Both require a captured email address.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel trigger workflows from orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Payment Received, Order Fulfilled and Abandoned Checkout are documented for store activity. Confirm Order Submitted behavior for Store orders with a test.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For simple catalogs it can host the storefront, but it does not document Shopify-level inventory, merchandising or app-ecosystem depth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel suitable for a large ecommerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HighLevel publishes no catalog-size limit in the documentation reviewed, but complex inventory, variants and merchandising needs point toward a dedicated platform.',
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

      <GoHighLevelEcommerceStoreClient />
    </>
  );
}