import { Metadata } from 'next';
import EcommerceVIPProgramClient from './client';

export const metadata: Metadata = {
  title: 'Ecommerce VIP Program: How to Build and Automate It',
  description: 'Learn how to identify your best ecommerce customers, design VIP benefits they value, and automate the program with a CRM such as GoHighLevel.',
  keywords: 'ecommerce VIP program, how to create a VIP program for ecommerce, ecommerce VIP customer program, how to identify VIP customers, VIP customer automation, VIP program vs loyalty program, VIP program without points, RFM for ecommerce, automate VIP customer emails, how many orders to be a VIP, GoHighLevel VIP customer automation, GoHighLevel customer tagging and workflows',
  openGraph: {
    title: 'Ecommerce VIP Program: How to Build and Automate It',
    description: 'Learn how to identify your best ecommerce customers, design VIP benefits they value, and automate the program with a CRM such as GoHighLevel.',
    url: 'https://www.ghlscaleup.com/blog/ecommerce-vip-program',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/ecommerce-vip-program-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ecommerce VIP Program: How to Build and Automate It',
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
    title: 'Ecommerce VIP Program: How to Build and Automate It',
    description: 'Learn how to identify your best ecommerce customers, design VIP benefits they value, and automate the program with a CRM such as GoHighLevel.',
    images: ['/blog-images/ecommerce-vip-program-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/ecommerce-vip-program',
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
  headline: 'How to Build an Ecommerce VIP Program (and Automate It)',
  description:
    'Learn how to identify your best ecommerce customers, design VIP benefits they value, and automate the program with a CRM such as GoHighLevel.',
  image: 'https://www.ghlscaleup.com/blog-images/ecommerce-vip-program-og.jpg',
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
    '@id': 'https://www.ghlscaleup.com/blog/ecommerce-vip-program',
  },
  about: {
    '@type': 'Thing',
    name: 'Ecommerce VIP Program',
    description: 'A comprehensive guide to building and automating an ecommerce VIP program',
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
      name: 'Ecommerce VIP Program: How to Build and Automate It',
      item: 'https://www.ghlscaleup.com/blog/ecommerce-vip-program',
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
      name: 'What is a VIP customer program in ecommerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A program that recognizes and rewards a selected group of top customers using criteria you choose, with benefits such as early access, better service or recognition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I identify VIP customers in my store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look at spend, order frequency and recency, ideally together, and set the rule from your own order data and best existing customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many purchases should qualify someone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no standard number. It depends on your purchase cycle and economics. Base it on how often your best customers actually buy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I reward loyal customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offer access, service and recognition first, and use discounts sparingly so margin is protected.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a VIP program work without points?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many rely on recognition, access and service, with a clear rule for who qualifies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I automate it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tag customers who meet the rule, then use workflows to welcome them, alert your team and send VIP communications. The automation depends on having reliable purchase data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel identify high-value customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With Shopify connected, it receives lifetime value, order count and order dates, and can tag customers who meet thresholds you set. Rolling-window or margin-based rules need external calculation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it segment customers by purchases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, using Smart Lists and tags built on the synced fields, subject to the data limits described above.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it manage loyalty points?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No points or rewards balance capability is documented. Use a loyalty platform for that.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a VIP program and a loyalty program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A loyalty program is usually open to everyone and rewards purchases. A VIP program limits the best treatment to a selected group, and may sit on top of a loyalty program.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I measure success?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compare repeat rate, order value, margin and retention against a baseline or a similar group, and watch costs and complaints.',
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

      <EcommerceVIPProgramClient />
    </>
  );
}