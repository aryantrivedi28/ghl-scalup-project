import { Metadata } from 'next';
import GoHighLevelEcommercePostPurchaseAutomationClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Post Purchase Automation: Workflows & Examples',
  description: 'What should happen after an ecommerce customer buys, and how GoHighLevel can automate it — confirmation, fulfillment, education, reviews and upsells, built around real triggers, not a generic checklist.',
  keywords: 'GoHighLevel post purchase automation, GoHighLevel post purchase workflow, GoHighLevel ecommerce workflow, GoHighLevel order fulfilled workflow, GoHighLevel review automation, GoHighLevel upsell automation, GoHighLevel customer follow up after purchase, Shopify post purchase automation GoHighLevel',
  openGraph: {
    title: 'GoHighLevel Post Purchase Automation: Workflows & Examples',
    description: 'What should happen after an ecommerce customer buys, and how GoHighLevel can automate it — confirmation, fulfillment, education, reviews and upsells, built around real triggers, not a generic checklist.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-post-purchase-automation',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-ecommerce-post-purchase-automation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Post Purchase Automation: Workflows & Examples',
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
    title: 'GoHighLevel Post Purchase Automation: Workflows & Examples',
    description: 'What should happen after an ecommerce customer buys, and how GoHighLevel can automate it — confirmation, fulfillment, education, reviews and upsells, built around real triggers, not a generic checklist.',
    images: ['/blog-images/gohighlevel-ecommerce-post-purchase-automation-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-post-purchase-automation',
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
  headline: 'GoHighLevel Ecommerce Post Purchase Automation: Workflows, Triggers & Examples',
  description:
    'What should happen after an ecommerce customer buys, and how GoHighLevel can automate it — confirmation, fulfillment, education, reviews and upsells, built around real triggers, not a generic checklist.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-ecommerce-post-purchase-automation-og.jpg',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-post-purchase-automation',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Ecommerce Post Purchase Automation',
    description: 'A comprehensive guide to GoHighLevel ecommerce post purchase automation',
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
      name: 'GoHighLevel Post Purchase Automation: Workflows & Examples',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-post-purchase-automation',
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
      name: 'What is post purchase automation in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The set of automated workflows that respond to what happens after a purchase — confirmation, fulfillment communication, product education, review requests and relevant follow-up offers — each started by a different, specific event rather than one long timed sequence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate post purchase emails and SMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through standard workflow actions once the relevant purchase or fulfillment trigger has fired, using whichever channels the contact has valid information and consent for.',
      },
    },
    {
      '@type': 'Question',
      name: 'What trigger should I use after an ecommerce purchase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Payment Received for native Store purchases, or Shopify Order Placed for Shopify purchases — Payment Received\'s documented sources don\'t include Shopify, so using it there means the workflow won\'t fire.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate Shopify post purchase workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Shopify Order Placed starts the confirmation stage, and Order Fulfilled is documented to cover Shopify alongside the native Store for the fulfillment stage.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I send a review request?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After Order Fulfilled, with a wait long enough for realistic delivery and product use — the exact timing depends on the product, not a universal number of days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop sales emails after someone purchases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add a Goal Event checking for the purchase event (Payment Received or Shopify Order Placed), set to end the pre-purchase workflow — this checks continuously, so it catches a purchase completed at any point in the sequence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I avoid sending duplicate post purchase messages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Audit whether more than one workflow listens for the same trigger, and use tags or If/Else conditions so a contact who already received a message doesn\'t qualify for an equivalent one from a different workflow.',
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

      <GoHighLevelEcommercePostPurchaseAutomationClient />
    </>
  );
}