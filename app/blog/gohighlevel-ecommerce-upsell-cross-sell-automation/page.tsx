import { Metadata } from 'next';
import GoHighLevelEcommerceUpsellCrossSellAutomationClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Upsell and Cross-Sell Automation for Ecommerce',
  description: 'How to automate ecommerce upsells and cross-sells in GoHighLevel: where offers appear, what Shopify data workflows can use, eligibility and exclusion logic, examples and limits.',
  keywords: 'GoHighLevel ecommerce upsell automation, GoHighLevel cross-sell automation, GoHighLevel upsell workflow, HighLevel upsell and cross-sell, Shopify cross-sell automation, ecommerce upsell workflow, post-purchase upsell automation',
  openGraph: {
    title: 'GoHighLevel Upsell and Cross-Sell Automation for Ecommerce',
    description: 'How to automate ecommerce upsells and cross-sells in GoHighLevel: where offers appear, what Shopify data workflows can use, eligibility and exclusion logic, examples and limits.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-upsell-cross-sell-automation',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-ecommerce-upsell-cross-sell-automation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Upsell and Cross-Sell Automation for Ecommerce',
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
    title: 'GoHighLevel Upsell and Cross-Sell Automation for Ecommerce',
    description: 'How to automate ecommerce upsells and cross-sells in GoHighLevel: where offers appear, what Shopify data workflows can use, eligibility and exclusion logic, examples and limits.',
    images: ['/blog-images/gohighlevel-ecommerce-upsell-cross-sell-automation-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-upsell-cross-sell-automation',
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
  headline: 'GoHighLevel Ecommerce Upsell and Cross-Sell Automation: Workflows, Strategies & Examples',
  description:
    'How to automate ecommerce upsells and cross-sells in GoHighLevel: where offers appear, what Shopify data workflows can use, eligibility and exclusion logic, examples and limits.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-ecommerce-upsell-cross-sell-automation-og.jpg',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-upsell-cross-sell-automation',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Ecommerce Upsell and Cross-Sell Automation',
    description: 'A comprehensive guide to GoHighLevel ecommerce upsell and cross-sell automation',
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
      name: 'GoHighLevel Upsell and Cross-Sell Automation for Ecommerce',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-upsell-cross-sell-automation',
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
      name: 'Can GoHighLevel automate ecommerce upsells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in two ways. HighLevel funnels have documented order bumps and one-click order upsells for sales made through HighLevel forms. After an order, a workflow can send an offer by email or SMS. It does not place offers inside Shopify\'s checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate cross-sells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cross-sell workflow can be built, provided the workflow can identify which product was bought and you maintain a history for exclusions. Test the data first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I create an upsell workflow in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Define the qualifying order, verify what data the trigger exposes, set eligibility and exclusions, add a Wait sized to product use, re-check eligibility, send, and set exit logic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel recommend products based on Shopify purchases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can send a message based on a rule you define, such as product A leads to product B. No native recommendation engine is documented.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I send a cross-sell offer after a Shopify order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, as a workflow message. Confirm in your account that your Shopify trigger exposes the line-item data your rule needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel show upsell offers during Shopify checkout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not from HighLevel\'s documentation. Checkout and post-purchase offers on Shopify come from Shopify apps, and some require specific Shopify plans or channels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I exclude customers who already bought the recommended product?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you hold that history. Tags applied per order are the usual method, but they cover only orders processed after you started tagging, unless you backfill.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a Shopify app for upsell automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For offers shown in the store or checkout, yes. For emails or SMS after the order, no.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prevent duplicate upsell messages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use one lifecycle state per contact, check it at the start of each workflow, set re-entry deliberately, and re-check eligibility after Waits. No universal priority setting is documented.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should a post-purchase upsell be sent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the product has arrived and had a chance to be used, unless the offer is a one-click add-on to the order itself. Delay should come from your product and data, not a generic rule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel support dynamic product recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No native dynamic recommendation engine is documented. Use a recommendation app, API integration or custom development for that.',
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

      <GoHighLevelEcommerceUpsellCrossSellAutomationClient />
    </>
  );
}