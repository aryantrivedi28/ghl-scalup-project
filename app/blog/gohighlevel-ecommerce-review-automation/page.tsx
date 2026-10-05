import { Metadata } from 'next';
import GoHighLevelEcommerceReviewAutomationClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Ecommerce Review Automation: When to Ask',
  description: 'How to time review requests for an ecommerce store in GoHighLevel: product reviews vs business reviews, what to trigger, how to handle feedback, and where a dedicated review tool fits better.',
  keywords: 'GoHighLevel ecommerce review automation, GoHighLevel review request workflow, GoHighLevel product reviews, GoHighLevel Shopify review request, Product Review Submitted trigger GoHighLevel, GoHighLevel review request timing, ecommerce review request automation',
  openGraph: {
    title: 'GoHighLevel Ecommerce Review Automation: When to Ask',
    description: 'How to time review requests for an ecommerce store in GoHighLevel: product reviews vs business reviews, what to trigger, how to handle feedback, and where a dedicated review tool fits better.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-review-automation',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-ecommerce-review-automation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Ecommerce Review Automation: When to Ask',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-06T00:00:00.000Z',
    modifiedTime: '2026-10-06T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Ecommerce Review Automation: When to Ask',
    description: 'How to time review requests for an ecommerce store in GoHighLevel: product reviews vs business reviews, what to trigger, how to handle feedback, and where a dedicated review tool fits better.',
    images: ['/blog-images/gohighlevel-ecommerce-review-automation-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-review-automation',
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
  headline: 'GoHighLevel Ecommerce Review Automation: When to Ask, What to Trigger and What to Do With the Answer',
  description:
    'How to time review requests for an ecommerce store in GoHighLevel: product reviews vs business reviews, what to trigger, how to handle feedback, and where a dedicated review tool fits better.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-ecommerce-review-automation-og.jpg',
  datePublished: '2026-10-06T00:00:00.000Z',
  dateModified: '2026-10-06T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-review-automation',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Ecommerce Review Automation',
    description: 'A comprehensive guide to GoHighLevel ecommerce review automation',
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
      name: 'GoHighLevel Ecommerce Review Automation: When to Ask',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-ecommerce-review-automation',
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
      name: 'Can GoHighLevel send review requests automatically after an ecommerce order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A workflow can start from Order Fulfilled, wait, check readiness and then use the Review Request action for a public business review, or an ordinary email or SMS for a product page or feedback form.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel have product reviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, on HighLevel Ecommerce Stores. Customers write reviews on the product page, the owner approves them in the Reviews dashboard and can reply, and the Product Review Submitted trigger fires on submission.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which trigger should start a review request workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Order Fulfilled, followed by a wait suited to the product, rather than a purchase event. Payment Received or Shopify Order Placed tell you the order exists, not that it has shipped.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Product Review Submitted wait for approval?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. It fires when the review is submitted, whether or not it has been approved, and editing a review later doesn\'t fire it again.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I send review requests only to customers who had a good experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google\'s merchant policy for Maps says businesses may not selectively solicit positive reviews. Ask every customer who is ready, and use routing to help support respond, not to decide who sees the review link.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I offer a discount for a review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google\'s merchant policy rules out payment, discounts and free goods in exchange for reviews on its platform, and the FTC\'s consumer reviews rule addresses incentives tied to review sentiment. Check each platform\'s rules and take advice before offering a reward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a Google Business Profile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not to send requests. A custom review link can point to another site or a product page. Google\'s own help says online-only businesses aren\'t eligible for a profile, so check current eligibility before planning around Google reviews.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many reminders should I send?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There\'s no documented right number. Reputation lets you set retries until the link is clicked, and HighLevel\'s help article mentions that many teams start with two or three. For ecommerce, fewer is usually safer, and a reminder should never land after a customer has reported a problem.',
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

      <GoHighLevelEcommerceReviewAutomationClient />
    </>
  );
}