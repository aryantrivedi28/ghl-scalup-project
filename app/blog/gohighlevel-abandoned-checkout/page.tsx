import { Metadata } from 'next';
import GoHighLevelAbandonedCheckoutClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Abandoned Checkout Automation: Recover Ecommerce Sales',
  description: 'How GoHighLevel detects abandoned checkouts, what data the trigger gives you, how to build the recovery workflow, stop it after purchase, and avoid duplicate messages — for the native Store and Shopify.',
  keywords: 'GoHighLevel abandoned checkout, GoHighLevel abandoned checkout automation, GoHighLevel abandoned checkout workflow, Shopify abandoned checkout GoHighLevel, GoHighLevel abandoned checkout trigger, abandoned checkout recovery GoHighLevel, GoHighLevel abandoned cart workflow',
  openGraph: {
    title: 'GoHighLevel Abandoned Checkout Automation: Recover Ecommerce Sales',
    description: 'How GoHighLevel detects abandoned checkouts, what data the trigger gives you, how to build the recovery workflow, stop it after purchase, and avoid duplicate messages — for the native Store and Shopify.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-abandoned-checkout',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-abandoned-checkout-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Abandoned Checkout Automation: Recover Ecommerce Sales',
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
    title: 'GoHighLevel Abandoned Checkout Automation: Recover Ecommerce Sales',
    description: 'How GoHighLevel detects abandoned checkouts, what data the trigger gives you, how to build the recovery workflow, stop it after purchase, and avoid duplicate messages — for the native Store and Shopify.',
    images: ['/blog-images/gohighlevel-abandoned-checkout-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-abandoned-checkout',
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
  headline: 'GoHighLevel Abandoned Checkout Automation: How to Recover Ecommerce Sales',
  description:
    'How GoHighLevel detects abandoned checkouts, what data the trigger gives you, how to build the recovery workflow, stop it after purchase, and avoid duplicate messages — for the native Store and Shopify.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-abandoned-checkout-og.jpg',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-abandoned-checkout',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Abandoned Checkout Automation',
    description: 'A comprehensive guide to GoHighLevel abandoned checkout automation',
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
      name: 'GoHighLevel Abandoned Checkout Automation: Recover Ecommerce Sales',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-abandoned-checkout',
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
      name: 'Does GoHighLevel have abandoned cart automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It has an Abandoned Checkout trigger, specifically tied to checkout being started and not completed after an identifiable shopper entered an email — not a general "cart" trigger covering earlier browsing behavior.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel work with Shopify abandoned checkout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through the unified Abandoned Checkout trigger, filtered to Order Source: External and Sub-Source: Shopify.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does GoHighLevel detect an abandoned checkout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A shopper enters checkout, provides an email, and doesn\'t complete payment within a duration you configure in minutes; once that window passes, the trigger fires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel send abandoned checkout emails and SMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, using standard workflow actions once the Abandoned Checkout trigger has fired — email and SMS both work, subject to the contact having a valid address/number and, for SMS, proper consent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop an abandoned checkout workflow after purchase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add a Goal Event with the Payment Received goal type, filtered to success, and set it to end the workflow once met — this checks continuously rather than only at one point in the sequence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my GoHighLevel abandoned checkout workflow not triggering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most often because no email was captured before abandonment, the ecommerce source isn\'t connected or the workflow isn\'t published, or the filters are excluding the test scenario.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does abandoned checkout work with the GoHighLevel Ecommerce Store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, using the same trigger with Order Source set to Store — and the native Store also sends its own automatic abandoned checkout email by default, separate from any custom workflow.',
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

      <GoHighLevelAbandonedCheckoutClient />
    </>
  );
}