import { Metadata } from 'next';
import GoHighLevelForSmallBusinessClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel for Small Business: Worth the Cost? (2026)',
  description: 'GoHighLevel for small businesses: real costs beyond the $97 plan, when it\'s worth it, when it\'s overkill, and which plan actually fits your business.',
  keywords: 'GoHighLevel for small business, is GoHighLevel worth it for small business, GoHighLevel small business pricing, GoHighLevel cost for small business, should small businesses use GoHighLevel, GoHighLevel ROI small business, cheapest GoHighLevel plan',
  openGraph: {
    title: 'GoHighLevel for Small Business: Worth the Cost? (2026)',
    description: 'GoHighLevel for small businesses: real costs beyond the $97 plan, when it\'s worth it, when it\'s overkill, and which plan actually fits your business.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-for-small-business',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-for-small-business-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel for Small Business: Worth the Cost? (2026)',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-14T00:00:00.000Z',
    modifiedTime: '2026-09-14T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel for Small Business: Worth the Cost? (2026)',
    description: 'GoHighLevel for small businesses: real costs beyond the $97 plan, when it\'s worth it, when it\'s overkill, and which plan actually fits your business.',
    images: ['/blog-images/gohighlevel-for-small-business-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-for-small-business',
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
  category: 'GoHighLevel for Small Business',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GoHighLevel for Small Businesses: Is It Worth the Cost?',
  description:
    'GoHighLevel for small businesses: real costs beyond the $97 plan, when it\'s worth it, when it\'s overkill, and which plan actually fits your business.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-for-small-business-og.jpg',
  datePublished: '2026-09-14T00:00:00.000Z',
  dateModified: '2026-09-14T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-for-small-business',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel for Small Business',
    description: 'A comprehensive guide to GoHighLevel for small business owners',
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
      name: 'GoHighLevel for Small Business: Worth the Cost? (2026)',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-for-small-business',
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
      name: 'Is GoHighLevel worth it for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can be — when lead volume, follow-up complexity, or tool consolidation create enough value to exceed the subscription and setup cost. It isn\'t a universal yes or no.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel too expensive for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. The real question is whether it creates more value through recovered leads, saved time, or eliminated software costs than it costs to run — not whether $97/month sounds like a lot in isolation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does GoHighLevel cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Starter is $97/month; most small businesses add $20–150/month in usage costs (SMS, email, AI) depending on volume, plus setup time or cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest GoHighLevel plan for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Starter, at $97/month, covers what nearly every single-location small business needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many leads do you need for GoHighLevel to be worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There\'s no fixed number — lead value and conversion rate matter more than raw volume. A smaller number of high-value leads can justify it as easily as a larger number of low-value ones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a small business use GoHighLevel without an agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for basic setup. More complex, multi-stage automation takes longer to build correctly and may be worth outside help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel difficult for small business owners to learn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic use is learnable in one to two weeks part-time. Advanced automation has a real learning curve, same as any capable software.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of small business should use GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Businesses with a repeatable lead-to-customer process — home services, appointment-based practices, coaches and consultants — benefit most.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is GoHighLevel overkill for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When lead volume is very low, the sales process has one step, an existing simple system already works, or nobody has time to maintain it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace other small business marketing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often yes, when you\'re paying for three or more overlapping tools today. It\'s not a win to replace one specialized tool that already does its job well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel better than a basic CRM for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'More capable, not automatically better — a basic CRM plus a couple of point tools can outperform GHL for a business that will only ever use a fraction of what it offers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a small business automate first in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New lead response, appointment reminders, no-response follow-up, and review requests — in that order, before adding anything more complex.',
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

      <GoHighLevelForSmallBusinessClient />
    </>
  );
}