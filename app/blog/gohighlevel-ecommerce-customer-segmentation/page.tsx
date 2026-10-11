import { Metadata } from 'next';
import GoHighLevelEcommerceCustomerSegmentationClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Ecommerce Customer Segmentation Guide',
  description: 'How to segment Shopify customers in GoHighLevel: which fields the integration keeps current, which segments to build first, and where tags still help.',
  keywords: 'GoHighLevel ecommerce customer segmentation, segment Shopify customers in GoHighLevel, GoHighLevel Smart Lists ecommerce, GoHighLevel customer tagging, Shopify customer segmentation, GoHighLevel repeat customer list, GoHighLevel high value customers, GoHighLevel customer lifecycle segmentation',
  openGraph: {
    title: 'GoHighLevel Ecommerce Customer Segmentation Guide',
    description: 'How to segment Shopify customers in GoHighLevel: which fields the integration keeps current, which segments to build first, and where tags still help.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-customer-segmentation',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-ecommerce-customer-segmentation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Ecommerce Customer Segmentation Guide',
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
    title: 'GoHighLevel Ecommerce Customer Segmentation Guide',
    description: 'How to segment Shopify customers in GoHighLevel: which fields the integration keeps current, which segments to build first, and where tags still help.',
    images: ['/blog-images/gohighlevel-ecommerce-customer-segmentation-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-customer-segmentation',
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
  headline: 'GoHighLevel Ecommerce Customer Segmentation: How to Segment Shopify Customers',
  description:
    'How to segment Shopify customers in GoHighLevel: which fields the integration keeps current, which segments to build first, and where tags still help.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-ecommerce-customer-segmentation-og.jpg',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-customer-segmentation',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Ecommerce Customer Segmentation',
    description: 'A comprehensive guide to GoHighLevel ecommerce customer segmentation',
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
      name: 'GoHighLevel Ecommerce Customer Segmentation Guide',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-customer-segmentation',
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
      name: 'How do I segment Shopify customers in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Connect the store, confirm the purchase-history fields populate, and build Smart Lists on Order Count, Last Order Date and Lifetime Value. Add tags only for facts the data does not hold.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I segment by purchase history?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By count, recency and total value, yes. By specific product, HighLevel\'s documentation does not list a contact field for it, so you would apply a tag or field from a workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I build a repeat-customer list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Smart List with Order Count more than 1. Remember cancelled orders still count.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find inactive customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Order Count at least 1 and Last Order Date more than your chosen number of days ago, excluding DND contacts and anyone with a recent checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tags or custom fields?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tags for events and labels, custom fields for values a workflow needs to compare, and neither for what a Smart List can read from existing fields.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run upsell or cross-sell campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but the product-level history behind them needs your own tagging. Keep the offer relevant and tested.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this replace Shopify analytics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Margin, AOV and cohort reporting are not documented in HighLevel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about multiple stores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The integration records Store Name and Customer ID, but how one customer appears across two stores should be tested in your account.',
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

      <GoHighLevelEcommerceCustomerSegmentationClient />
    </>
  );
}