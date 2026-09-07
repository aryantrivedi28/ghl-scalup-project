import { Metadata } from 'next';
import WhatMigrationServiceMigratesClient from './client';

export const metadata: Metadata = {
  title: 'What a GoHighLevel Migration Actually Includes (2026)',
  description: 'Contacts, HTML emails, and automation workflows don\'t migrate the same way. Here\'s exactly what transfers, what needs mapping, and what has to be rebuilt — and how to evaluate a provider\'s scope.',
  keywords: 'what does a GoHighLevel migration service actually migrate, migrate contacts to GoHighLevel, migrate HTML email templates, migrate automation workflows, transfer vs rebuild CRM migration, GoHighLevel migration for agencies, evaluate a GoHighLevel migration provider',
  openGraph: {
    title: 'What a GoHighLevel Migration Actually Includes (2026)',
    description: 'Contacts, HTML emails, and automation workflows don\'t migrate the same way. Here\'s exactly what transfers, what needs mapping, and what has to be rebuilt — and how to evaluate a provider\'s scope.',
    url: 'https://www.ghlscaleup.com/blog/what-a-gohighlevel-migration-service-migrates',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/what-a-gohighlevel-migration-service-migrates-og.jpg',
        width: 1200,
        height: 630,
        alt: 'What a GoHighLevel Migration Actually Includes (2026)',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-08T00:00:00.000Z',
    modifiedTime: '2026-09-08T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What a GoHighLevel Migration Actually Includes (2026)',
    description: 'Contacts, HTML emails, and automation workflows don\'t migrate the same way. Here\'s exactly what transfers, what needs mapping, and what has to be rebuilt — and how to evaluate a provider\'s scope.',
    images: ['/blog-images/what-a-gohighlevel-migration-service-migrates-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/what-a-gohighlevel-migration-service-migrates',
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
  category: 'GoHighLevel Migration',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Does a Migration Service Actually Migrate? Contacts, Emails, and Workflows Explained',
  description:
    'Contacts, HTML emails, and automation workflows don\'t migrate the same way. Here\'s exactly what transfers, what needs mapping, and what has to be rebuilt — and how to evaluate a provider\'s scope.',
  image: 'https://www.ghlscaleup.com/blog-images/what-a-gohighlevel-migration-service-migrates-og.jpg',
  datePublished: '2026-09-08T00:00:00.000Z',
  dateModified: '2026-09-08T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/what-a-gohighlevel-migration-service-migrates',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Migration Service',
    description: 'A comprehensive guide to what a GoHighLevel migration service actually migrates',
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
      name: 'What a GoHighLevel Migration Actually Includes (2026)',
      item: 'https://www.ghlscaleup.com/blog/what-a-gohighlevel-migration-service-migrates',
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
      name: 'Can migration services move contacts automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Largely yes. Contacts, custom fields, tags, and opportunities move through CSV export and import with field mapping — a well-documented, largely mechanical process, though it still requires clean source data and correctly mapped fields to avoid dropped or duplicated records.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can HTML email templates be migrated directly, or do they need to be rebuilt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the source platform. GoHighLevel\'s own documentation confirms a direct share-link import from ActiveCampaign, but manual recreation (copying content into GoHighLevel\'s builder) from Mailchimp. Ask specifically about your source platform rather than assuming either answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do automation workflows transfer automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Every official GoHighLevel migration guide reviewed describes workflow migration as a manual rebuild process — documenting the original logic, then recreating triggers, actions, and conditions inside GoHighLevel\'s own Workflows builder.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between data migration and automation migration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Data migration moves structured records (contacts, fields, tags) through export/import with mapping. Automation migration recreates behavioral logic (triggers, conditions, actions) that has to be rebuilt because source and destination platforms use different underlying automation architectures — it\'s a redesign exercise, not a file transfer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much of a CRM can actually be migrated without manual work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Structured data — contacts, custom fields, tags, and opportunities — is the part that transfers with the least manual effort, provided the data is clean beforehand. Almost everything else (automations always, email templates and forms on most platforms) requires some level of manual recreation.',
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

      <WhatMigrationServiceMigratesClient />
    </>
  );
}