import { Metadata } from 'next';
import GoHighLevelShopifyIntegrationClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Shopify Integration: What It Syncs & How It Works',
  description: 'What actually syncs when you connect Shopify to GoHighLevel — customers, orders, revenue — how the connection works, which Shopify events trigger workflows, and what stays in Shopify only.',
  keywords: 'GoHighLevel Shopify integration, connect Shopify to GoHighLevel, Shopify customer sync GoHighLevel, Shopify order sync GoHighLevel, Shopify GoHighLevel automation, Shopify abandoned checkout GoHighLevel, Shopify data sync GoHighLevel',
  openGraph: {
    title: 'GoHighLevel Shopify Integration: What It Syncs & How It Works',
    description: 'What actually syncs when you connect Shopify to GoHighLevel — customers, orders, revenue — how the connection works, which Shopify events trigger workflows, and what stays in Shopify only.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-shopify-integration',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-shopify-integration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Shopify Integration: What It Syncs & How It Works',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-01T00:00:00.000Z',
    modifiedTime: '2026-10-01T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Shopify Integration: What It Syncs & How It Works',
    description: 'What actually syncs when you connect Shopify to GoHighLevel — customers, orders, revenue — how the connection works, which Shopify events trigger workflows, and what stays in Shopify only.',
    images: ['/blog-images/gohighlevel-shopify-integration-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-shopify-integration',
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
  headline: 'GoHighLevel Shopify Integration: What It Syncs, How It Works & What You Can Automate',
  description:
    'What actually syncs when you connect Shopify to GoHighLevel — customers, orders, revenue — how the connection works, which Shopify events trigger workflows, and what stays in Shopify only.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-shopify-integration-og.jpg',
  datePublished: '2026-10-01T00:00:00.000Z',
  dateModified: '2026-10-01T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-shopify-integration',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Shopify Integration',
    description: 'A comprehensive guide to the GoHighLevel Shopify integration',
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
      name: 'GoHighLevel Shopify Integration: What It Syncs & How It Works',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-shopify-integration',
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
      name: 'Does GoHighLevel integrate with Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, natively, through a Shopify custom app and Admin API access token connected at the sub-account level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Shopify customers sync to GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. New and updated Shopify customers sync into GoHighLevel Contacts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Shopify orders sync to GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Order details, value and products sync in, with optional mapping onto pipelines and opportunities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate actions based on Shopify customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, once a Shopify customer exists as a contact, standard GoHighLevel workflows can act on them the same as any other contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Shopify abandoned checkouts trigger GoHighLevel workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through the Abandoned Checkout trigger, filtered to Order Source: External and Sub-Source: Shopify. It requires a captured email address to identify the shopper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the integration sync Shopify products and collections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not documented as ongoing sync in the standard integration. Product and collection import is described for the separate Shopify migration tool.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel replace Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Connecting the two keeps Shopify as the storefront; GoHighLevel\'s own native Ecommerce Store is a separate, different architectural choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the GoHighLevel Shopify integration two-way?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not documented as two-way. Treat it as Shopify data flowing into GoHighLevel, not GoHighLevel edits flowing back to Shopify.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Shopify data take to sync into GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HighLevel\'s documentation doesn\'t publish an exact timing guarantee. Verify with a real test order rather than assuming a specific delay.',
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

      <GoHighLevelShopifyIntegrationClient />
    </>
  );
}