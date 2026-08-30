import { Metadata } from 'next';
import IsGoHighLevelWorthItClient from './client';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: 'Is GoHighLevel Worth It? Honest 2026 Review',
  description: 'Is GoHighLevel worth the money in 2026? Compare pricing, real costs, pros, cons, alternatives and who should use GHL before you buy.',
  keywords: 'is GoHighLevel worth it, GoHighLevel review 2026, GoHighLevel pricing, GoHighLevel cost, GoHighLevel pros and cons, GoHighLevel for agencies, GoHighLevel alternatives',
  openGraph: {
    title: 'Is GoHighLevel Worth It? Honest 2026 Review',
    description: 'Is GoHighLevel worth the money in 2026? Compare pricing, real costs, pros, cons, alternatives and who should use GHL before you buy.',
    url: 'https://www.ghlscaleup.com/blog/is-gohighlevel-worth-it',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-worth-it-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Is GoHighLevel Worth It in 2026? Honest Review',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-08-30T00:00:00.000Z',
    modifiedTime: '2026-08-30T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is GoHighLevel Worth It? Honest 2026 Review',
    description: 'Is GoHighLevel worth the money in 2026? Compare pricing, real costs, pros, cons, alternatives and who should use GHL before you buy.',
    images: ['/blog-images/gohighlevel-worth-it-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/is-gohighlevel-worth-it',
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
  category: 'GoHighLevel Review',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is GoHighLevel Worth It? An Honest Answer',
  description:
    'Is GoHighLevel worth the money in 2026? Compare pricing, real costs, pros, cons, alternatives and who should use GHL before you buy.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-worth-it-og.jpg',
  datePublished: '2026-08-30T00:00:00.000Z',
  dateModified: '2026-08-30T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/is-gohighlevel-worth-it',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel',
    sameAs: 'https://www.gohighlevel.com',
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
      name: 'Is GoHighLevel Worth It? An Honest Answer',
      item: 'https://www.ghlscaleup.com/blog/is-gohighlevel-worth-it',
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
      name: 'Is GoHighLevel worth it for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can be, especially if the beginner has a clear business use case. Basic features are approachable, but advanced implementation requires deeper knowledge of data structure, workflow logic, integrations and testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel worth it for agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often yes. Agencies benefit from sub accounts, reusable systems, centralized management, automation and higher tier SaaS capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel worth the cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on how much of the platform you use and what it replaces. Compare the complete cost of your current stack with software, usage and implementation costs under GHL.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel difficult to learn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic usage is manageable. Building a large and reliable system is considerably more complex than learning individual features.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the disadvantages of GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main considerations are learning curve, implementation effort, operational complexity, usage based costs and the fact that specialist platforms can be stronger for narrow use cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace other marketing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can consolidate many connected CRM, marketing, communication, booking and automation functions. It should not be treated as a universal replacement for every specialist platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel good for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can be a strong fit when the business has consistent lead flow, appointments and meaningful automation requirements. A simple CRM may be better for very basic needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel worth learning if someone else manages it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, at least at the business process level. Owners should understand their CRM structure, lead journey, automation logic and reporting even if technical implementation is outsourced.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel worth migrating to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only when the expected operational or financial improvement justifies the migration effort. Audit your current system before deciding what should move, what should be rebuilt and what should be retired.',
      },
    },
  ],
};

// JSON-LD Schema for WebPage with about and mentions
const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.ghlscaleup.com/blog/is-gohighlevel-worth-it',
  name: 'Is GoHighLevel Worth It? Honest 2026 Review',
  description:
    'Is GoHighLevel worth the money in 2026? Compare pricing, real costs, pros, cons, alternatives and who should use GHL before you buy.',
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel CRM Review',
    description: 'A comprehensive review of GoHighLevel CRM platform for 2026',
  },
  mentions: [
    {
      '@type': 'Product',
      name: 'GoHighLevel',
      sameAs: 'https://www.gohighlevel.com',
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />

      {/* Main Blog Component */}
      <IsGoHighLevelWorthItClient />
    </>
  );
}