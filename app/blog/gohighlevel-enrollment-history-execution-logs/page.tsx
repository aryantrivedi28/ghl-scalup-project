import { Metadata } from 'next';
import GoHighLevelEnrollmentHistoryExecutionLogsClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Enrollment History & Execution Logs Guide',
  description: 'Learn to use GoHighLevel Enrollment History and Execution Logs to find exactly where a workflow\'s execution diverged — enrolled, waiting, branched, or failed.',
  keywords: 'GoHighLevel Enrollment History and Execution Logs, GoHighLevel execution logs, GoHighLevel enrollment history, GoHighLevel workflow logs, GoHighLevel workflow execution history, GoHighLevel workflow troubleshooting, GoHighLevel workflow error, GoHighLevel workflow failed step, GoHighLevel workflow debugging',
  openGraph: {
    title: 'GoHighLevel Enrollment History & Execution Logs Guide',
    description: 'Learn to use GoHighLevel Enrollment History and Execution Logs to find exactly where a workflow\'s execution diverged — enrolled, waiting, branched, or failed.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-enrollment-history-execution-logs',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-enrollment-history-execution-logs-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Enrollment History & Execution Logs Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-17T00:00:00.000Z',
    modifiedTime: '2026-09-17T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Enrollment History & Execution Logs Guide',
    description: 'Learn to use GoHighLevel Enrollment History and Execution Logs to find exactly where a workflow\'s execution diverged — enrolled, waiting, branched, or failed.',
    images: ['/blog-images/gohighlevel-enrollment-history-execution-logs-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-enrollment-history-execution-logs',
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
  headline: 'How to Use GoHighLevel Enrollment History and Execution Logs to Troubleshoot Workflows',
  description:
    'Learn to use GoHighLevel Enrollment History and Execution Logs to find exactly where a workflow\'s execution diverged — enrolled, waiting, branched, or failed.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-enrollment-history-execution-logs-og.jpg',
  datePublished: '2026-09-17T00:00:00.000Z',
  dateModified: '2026-09-17T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-enrollment-history-execution-logs',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Workflow Troubleshooting',
    description: 'A comprehensive guide to using Enrollment History and Execution Logs for workflow troubleshooting',
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
      name: 'GoHighLevel Enrollment History & Execution Logs Guide',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-enrollment-history-execution-logs',
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
      name: 'What is Enrollment History in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A record, per workflow, of which contacts entered it, when, and which triggering event caused each entry — the first thing to check when you\'re unsure whether a workflow actually ran for someone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are Execution Logs in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The detailed record of what happened to a specific contact\'s enrollment after it started — which steps ran, which were skipped, where it\'s currently sitting, and where any error occurred.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if a contact entered a workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check Enrollment History for that contact and that workflow. A record confirms entry; no record means the issue is upstream in the trigger, not in execution.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find where a GoHighLevel workflow failed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Find the last step you can confirm executed successfully, identify what should have happened immediately after it, and inspect that specific transition rather than reviewing the whole workflow at once.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my workflow show an enrollment but not produce the expected result?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The trigger worked. The remaining question is whether execution reached the relevant action and, if so, whether that action\'s own configuration or a connected integration is what\'s actually failing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my GoHighLevel workflow waiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It may be exactly where it should be. Check the wait step\'s duration, any attached condition, and business-hours or timing settings before assuming it\'s stuck.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I troubleshoot a workflow error?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start from the error itself, trace it to the specific step and that step\'s configuration and input data, check any connected integration, and reproduce it under controlled conditions before calling it fixed.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I check the trigger instead of execution logs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whenever there\'s no enrollment record at all. Execution logs only have something to show you once a contact has actually entered — before that, the problem lives in the trigger and qualification stage.',
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

      <GoHighLevelEnrollmentHistoryExecutionLogsClient />
    </>
  );
}