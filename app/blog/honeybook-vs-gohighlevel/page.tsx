import { Metadata } from 'next';
import HoneyBookVsGoHighLevelClient from './client';

export const metadata: Metadata = {
  title: 'HoneyBook vs GoHighLevel: Honest Comparison (2026)',
  description: 'Compare HoneyBook and GoHighLevel on CRM, contracts, payments, automation, pricing and country availability, and see who should stay or switch.',
  keywords: 'HoneyBook vs GoHighLevel, GoHighLevel vs HoneyBook, HoneyBook alternative, HoneyBook vs GoHighLevel pricing, switch from HoneyBook to GoHighLevel',
  openGraph: {
    title: 'HoneyBook vs GoHighLevel: Honest Comparison (2026)',
    description: 'Compare HoneyBook and GoHighLevel on CRM, contracts, payments, automation, pricing and country availability, and see who should stay or switch.',
    url: 'https://www.ghlscaleup.com/blog/honeybook-vs-gohighlevel',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/honeybook-vs-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'HoneyBook vs GoHighLevel: Honest Comparison (2026)',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-15T00:00:00.000Z',
    modifiedTime: '2026-10-15T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HoneyBook vs GoHighLevel: Honest Comparison (2026)',
    description: 'Compare HoneyBook and GoHighLevel on CRM, contracts, payments, automation, pricing and country availability, and see who should stay or switch.',
    images: ['/blog-images/honeybook-vs-gohighlevel-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/honeybook-vs-gohighlevel',
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
  headline: 'HoneyBook vs GoHighLevel: Which Platform Fits Your Business?',
  description:
    'Compare HoneyBook and GoHighLevel on CRM, contracts, payments, automation, pricing and country availability, and see who should stay or switch.',
  image: 'https://www.ghlscaleup.com/blog-images/honeybook-vs-gohighlevel-og.jpg',
  datePublished: '2026-10-15T00:00:00.000Z',
  dateModified: '2026-10-15T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/honeybook-vs-gohighlevel',
  },
  about: {
    '@type': 'Thing',
    name: 'HoneyBook vs GoHighLevel Comparison',
    description: 'A comprehensive comparison of HoneyBook and GoHighLevel for 2026',
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
      name: 'HoneyBook vs GoHighLevel: Honest Comparison (2026)',
      item: 'https://www.ghlscaleup.com/blog/honeybook-vs-gohighlevel',
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
      name: 'Is HoneyBook a CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It has CRM functions: contacts, projects, tags and communication history. It is a client-management system rather than a sales-and-marketing CRM, so it has no campaigns or funnel tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel cheaper than HoneyBook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, at list price. HoneyBook runs $29 to $109 per month billed yearly; GoHighLevel runs $97 to $497 per month plus usage. GoHighLevel can cost less overall if it replaces several paid tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is HoneyBook available outside the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HoneyBook states the US, Canada, the UK and Australia. One pricing-page pop-up says only the US and Canada. Confirm your country at sign-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel do proposals and contracts like HoneyBook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can: templates, proposals, estimates, e-signature and payment collection. It has no conditional logic in documents and a different client experience, so test your own contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can HoneyBook send SMS campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It offers SMS reminders on Essentials and above. It is not designed for bulk SMS marketing. GoHighLevel is, with usage charges and carrier registration in the US.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export my data from HoneyBook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contacts can be exported as CSV, per HoneyBook\'s help article. We did not find a full project export; check your account and download signed files you need.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is easier to learn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HoneyBook, because its structure is already built. GoHighLevel takes longer because you design the structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should an agency use HoneyBook or GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An agency serving clients usually needs GoHighLevel\'s sub-accounts. An agency could use HoneyBook to manage its own client contracts, but it is not built for client sub-accounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer HoneyBook services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. GHL Scale Up does not provide HoneyBook services. Sage Kite, a separate website, publishes HoneyBook setup information.',
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

      <HoneyBookVsGoHighLevelClient />
    </>
  );
}