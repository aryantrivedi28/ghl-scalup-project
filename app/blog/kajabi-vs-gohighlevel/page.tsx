import { Metadata } from 'next';
import KajabiVsGoHighLevelClient from './client';

export const metadata: Metadata = {
  title: 'Kajabi vs GoHighLevel: Which Platform Is Better? | GHL Scale Up',
  description: 'Compare Kajabi and GoHighLevel across courses, memberships, CRM, automation, funnels, pricing, coaching, and agency use to choose the right platform.',
  keywords: 'Kajabi alternative; GoHighLevel vs Kajabi; course platform comparison; CRM; memberships; marketing automation; coaching platform; agency use; pricing; switching from Kajabi to GoHighLevel',
  openGraph: {
    title: 'Kajabi vs GoHighLevel: Which Platform Is Better? | GHL Scale Up',
    description: 'Compare Kajabi and GoHighLevel across courses, memberships, CRM, automation, funnels, pricing, coaching, and agency use to choose the right platform.',
    url: 'https://www.ghlscaleup.com/blog/kajabi-vs-gohighlevel',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/kajabi-vs-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Kajabi vs GoHighLevel: Which Platform Is Better? | GHL Scale Up',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-09T00:00:00.000Z',
    modifiedTime: '2026-09-09T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kajabi vs GoHighLevel: Which Platform Is Better? | GHL Scale Up',
    description: 'Compare Kajabi and GoHighLevel across courses, memberships, CRM, automation, funnels, pricing, coaching, and agency use to choose the right platform.',
    images: ['/blog-images/kajabi-vs-gohighlevel-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/kajabi-vs-gohighlevel',
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
  category: 'GoHighLevel Comparison',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kajabi vs GoHighLevel: Which Platform Is Better for Your Business?',
  description:
    'Compare Kajabi and GoHighLevel across courses, memberships, CRM, automation, funnels, pricing, coaching, and agency use to choose the right platform.',
  image: 'https://www.ghlscaleup.com/blog-images/kajabi-vs-gohighlevel-og.jpg',
  datePublished: '2026-09-09T00:00:00.000Z',
  dateModified: '2026-09-09T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/kajabi-vs-gohighlevel',
  },
  about: {
    '@type': 'Thing',
    name: 'Kajabi vs GoHighLevel Comparison',
    description: 'A comprehensive comparison of Kajabi and GoHighLevel for 2026',
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
      name: 'Kajabi vs GoHighLevel: Which Platform Is Better? | GHL Scale Up',
      item: 'https://www.ghlscaleup.com/blog/kajabi-vs-gohighlevel',
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
      name: 'Which is better, Kajabi or GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is universally better Kajabi is stronger for course and membership delivery; GoHighLevel is stronger for CRM, sales pipelines, and multi-channel follow-up. The right choice depends on whether your product or your sales process is the center of your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel better than Kajabi for courses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Kajabi\'s course builder is more polished and purpose-built. GoHighLevel\'s course module is functional and included free on every plan, with the advantage of tying course events directly into CRM workflows, but it isn\'t as refined as Kajabi\'s dedicated course experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kajabi better than GoHighLevel for coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the coaching model. For a single packaged coaching program sold and delivered with minimal ongoing sales process, Kajabi is simpler. For a coaching business built on an active sales funnel discovery calls, follow-up, multiple touchpoints GoHighLevel\'s CRM is the more important capability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace Kajabi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For course delivery specifically, yes, on a functional level but a business relying heavily on Kajabi\'s more advanced community and course polish will notice the difference. It replaces Kajabi more completely for businesses where the CRM and automation gap matters more than course-builder refinement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper, Kajabi or GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a single creator, compare the plan tier you\'d actually need on each rather than the entry price the answer varies by contact volume and features required. For anyone running more than one client business, GoHighLevel is substantially cheaper, since Kajabi charges per business while GoHighLevel charges per agency with unlimited sub-accounts.',
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

      <KajabiVsGoHighLevelClient />
    </>
  );
}