import { Metadata } from 'next';
import GoHighLevelWorkflowReentryClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Workflow Re-Entry Explained (2026)',
  description: 'Why won\'t a GoHighLevel contact enter a workflow again? Learn how Allow Re-entry actually works, its trigger-specific exceptions, and how to troubleshoot it.',
  keywords: 'GoHighLevel workflow re-entry, GoHighLevel Allow Re-entry, GoHighLevel workflow not triggering again, GoHighLevel workflow re-enroll, GoHighLevel workflow re-enrollment, GoHighLevel contact enter workflow again',
  openGraph: {
    title: 'GoHighLevel Workflow Re-Entry Explained (2026)',
    description: 'Why won\'t a GoHighLevel contact enter a workflow again? Learn how Allow Re-entry actually works, its trigger-specific exceptions, and how to troubleshoot it.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-reentry',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-workflow-reentry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Workflow Re-Entry Explained',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-18T00:00:00.000Z',
    modifiedTime: '2026-09-18T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Workflow Re-Entry Explained (2026)',
    description: 'Why won\'t a GoHighLevel contact enter a workflow again? Learn how Allow Re-entry actually works, its trigger-specific exceptions, and how to troubleshoot it.',
    images: ['/blog-images/gohighlevel-workflow-reentry-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-reentry',
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
  category: 'GoHighLevel Troubleshooting',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GoHighLevel Workflow Re-Entry: Why a Contact Doesn\'t Enter Again',
  description:
    'Why won\'t a GoHighLevel contact enter a workflow again? Learn how Allow Re-entry actually works, its trigger-specific exceptions, and how to troubleshoot it.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-workflow-reentry-og.jpg',
  datePublished: '2026-09-18T00:00:00.000Z',
  dateModified: '2026-09-18T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-reentry',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Workflow Re-Entry',
    description: 'A comprehensive guide to GoHighLevel workflow re-entry and troubleshooting',
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
      name: 'GoHighLevel Workflow Re-Entry Explained',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-reentry',
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
      name: 'What is workflow re-entry in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ability for a contact who already has one enrollment in a workflow to generate a second, independent enrollment when a later event satisfies the trigger again — governed by the workflow\'s re-entry configuration, not automatic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Allow Re-entry do in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It permits a contact to enter a workflow again after completing or being removed from a previous run. It doesn\'t override trigger filters — a repeat event still has to qualify on its own.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the same contact enter a GoHighLevel workflow more than once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if Allow Re-entry is enabled (or the trigger has its own re-entry exception, as some appointment and invoice triggers do) and the new event satisfies every trigger condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my GoHighLevel workflow trigger once but not again?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most commonly because Allow Re-entry is disabled, the second event doesn\'t match the trigger\'s filters the way the first one did, or the second event hasn\'t actually happened yet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why isn\'t my workflow re-enrolling a contact even though Allow Re-entry is enabled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The setting only removes the re-entry restriction — the new event still has to independently satisfy the trigger. Check the event and filters again, separately from re-entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I confirm whether a contact entered the workflow again?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check Enrollment History for that contact. A second, distinct record confirms re-entry; its absence points back to the trigger and re-entry configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a new triggering event always cause a workflow to re-enroll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. It only does if re-entry is permitted for that contact\'s state and the event fully satisfies the trigger\'s conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I check if the contact re-entered but the workflow action didn\'t happen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stop looking at re-entry — the trigger worked. Investigate execution for that specific run instead.',
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

      <GoHighLevelWorkflowReentryClient />
    </>
  );
}