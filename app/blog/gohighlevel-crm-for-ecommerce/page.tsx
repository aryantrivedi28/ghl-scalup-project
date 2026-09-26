import { Metadata } from 'next';
import GoHighLevelCRMForEcommerceClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel CRM for Ecommerce: What It Can and Can\'t Do',
  description: 'Can GoHighLevel work as an ecommerce CRM? Here\'s what it actually automates for Shopify and WooCommerce stores, what stays native to your ecommerce platform, and where it falls short.',
  keywords: 'GoHighLevel CRM for ecommerce, GoHighLevel Shopify integration, GoHighLevel WooCommerce, GoHighLevel ecommerce automation, GoHighLevel Klaviyo comparison, Shopify CRM, WooCommerce CRM, GoHighLevel abandoned cart recovery, GoHighLevel ecommerce',
  openGraph: {
    title: 'GoHighLevel CRM for Ecommerce: What It Can and Can\'t Do',
    description: 'Can GoHighLevel work as an ecommerce CRM? Here\'s what it actually automates for Shopify and WooCommerce stores, what stays native to your ecommerce platform, and where it falls short.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-crm-for-ecommerce',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-crm-for-ecommerce-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel CRM for Ecommerce: What It Can and Can\'t Do',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-26T00:00:00.000Z',
    modifiedTime: '2026-09-26T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel CRM for Ecommerce: What It Can and Can\'t Do',
    description: 'Can GoHighLevel work as an ecommerce CRM? Here\'s what it actually automates for Shopify and WooCommerce stores, what stays native to your ecommerce platform, and where it falls short.',
    images: ['/blog-images/gohighlevel-crm-for-ecommerce-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-crm-for-ecommerce',
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
  category: 'GoHighLevel for Ecommerce',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GoHighLevel CRM for Ecommerce Businesses: What It Can and Can\'t Do',
  description:
    'Can GoHighLevel work as an ecommerce CRM? Here\'s what it actually automates for Shopify and WooCommerce stores, what stays native to your ecommerce platform, and where it falls short.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-crm-for-ecommerce-og.jpg',
  datePublished: '2026-09-26T00:00:00.000Z',
  dateModified: '2026-09-26T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-crm-for-ecommerce',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel CRM for Ecommerce',
    description: 'A comprehensive guide to using GoHighLevel as an ecommerce CRM',
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
      name: 'GoHighLevel CRM for Ecommerce: What It Can and Can\'t Do',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-crm-for-ecommerce',
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
      name: 'Can GoHighLevel be used for ecommerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, as a CRM and automation layer connected to an ecommerce platform — it doesn\'t run the storefront, catalog, or checkout itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel an ecommerce CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It\'s a general-purpose CRM that becomes ecommerce-relevant once connected to Shopify or WooCommerce; it isn\'t purpose-built for ecommerce the way a dedicated ecommerce marketing platform is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel integrate with Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, natively — through a Shopify custom app and Admin API token, supporting customer sync, order sync, revenue tracking, abandoned checkout recovery, and optional pipeline mapping.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel integrate with WooCommerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not natively. WooCommerce connects through Zapier, Make, GoHighLevel\'s webhook trigger paired with WooCommerce\'s native webhooks, or a third-party WordPress plugin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. GoHighLevel has its own small-scale store feature, but it isn\'t built to compete with Shopify for large catalogs, complex variants, or high order volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace Klaviyo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not entirely for ecommerce-native marketing depth — GoHighLevel offers native CRM and pipeline capability Klaviyo doesn\'t, while Klaviyo currently offers stronger native ecommerce segmentation and abandoned-cart automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are GoHighLevel\'s limitations for ecommerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weaker native ecommerce segmentation and merchandising automation than dedicated ecommerce marketing tools, no native WooCommerce integration, and a store feature not intended for large catalogs.',
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

      <GoHighLevelCRMForEcommerceClient />
    </>
  );
}