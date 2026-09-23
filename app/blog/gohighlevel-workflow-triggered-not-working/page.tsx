import { Metadata } from 'next';
import GoHighLevelWorkflowTriggeredNotWorkingClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Workflow Triggered but Not Working: Find the Failed Step',
  description: 'The contact entered the workflow, but something downstream didn\'t happen. Learn to find the last successful step, read the divergence, and fix it — without rebuilding the workflow.',
  keywords: 'GoHighLevel workflow triggered but not working, GoHighLevel workflow failed step, GoHighLevel workflow not completing, GoHighLevel workflow execution logs, GoHighLevel workflow troubleshooting, GoHighLevel workflow waiting, GoHighLevel workflow If Else wrong path, GoHighLevel workflow skipped step, GoHighLevel workflow action failed, GoHighLevel workflow completed but no result',
  openGraph: {
    title: 'GoHighLevel Workflow Triggered but Not Working: Find the Failed Step',
    description: 'The contact entered the workflow, but something downstream didn\'t happen. Learn to find the last successful step, read the divergence, and fix it — without rebuilding the workflow.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-triggered-not-working',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-workflow-triggered-not-working-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Workflow Triggered but Not Working: Find the Failed Step',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-23T00:00:00.000Z',
    modifiedTime: '2026-09-23T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Workflow Triggered but Not Working: Find the Failed Step',
    description: 'The contact entered the workflow, but something downstream didn\'t happen. Learn to find the last successful step, read the divergence, and fix it — without rebuilding the workflow.',
    images: ['/blog-images/gohighlevel-workflow-triggered-not-working-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-triggered-not-working',
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
  headline: 'GoHighLevel Workflow Triggered but Not Working: How to Find the Failed Step',
  description:
    'The contact entered the workflow, but something downstream didn\'t happen. Learn to find the last successful step, read the divergence, and fix it — without rebuilding the workflow.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-workflow-triggered-not-working-og.jpg',
  datePublished: '2026-09-23T00:00:00.000Z',
  dateModified: '2026-09-23T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-triggered-not-working',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Workflow Troubleshooting',
    description: 'A comprehensive guide to diagnosing a GoHighLevel workflow that triggered but didn\'t complete as expected',
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
      name: 'GoHighLevel Workflow Triggered but Not Working: Find the Failed Step',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-triggered-not-working',
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
      name: 'Why did my GoHighLevel workflow trigger but not complete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most often because it\'s genuinely still waiting on a Wait step, took an If/Else branch you didn\'t expect, or an action failed or was skipped partway through. Check the contact\'s execution path rather than guessing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know which GoHighLevel workflow step failed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confirm enrollment, open the contact\'s execution path in Execution Logs, find the last step that shows success, then inspect the very next step — that boundary is almost always where the answer is.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if a GoHighLevel workflow is still "in progress"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The contact is actively moving through the workflow and hasn\'t reached a wait, an error, or the end. Compare elapsed time against any configured wait durations before assuming something\'s wrong.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my GoHighLevel workflow stuck on a wait step?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It may not be stuck — waits run for their full configured duration in live conditions, unlike in test mode where GoHighLevel compresses timers to seconds. Confirm the actual wait length before troubleshooting further.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did my GoHighLevel workflow take the wrong If/Else path?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The condition evaluated correctly against the contact\'s data at the exact moment execution reached it. Check the field, tag, or value the condition actually reads, and confirm it had the value you expected at that point in the sequence — not just at enrollment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a skipped GoHighLevel workflow step mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Either the step is disabled, or an attached condition evaluated to false. Neither is automatically an error — check whether the skip matches what you configured.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a webhook execute successfully in GoHighLevel while the external system still fails?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GoHighLevel confirms the request was sent, not that the receiving system processed it correctly. Failures on the receiving end need to be checked in that system\'s own logs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does a GoHighLevel workflow say "completed" when the expected result didn\'t happen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completed confirms the workflow reached its final step — it doesn\'t confirm every action produced its intended real-world result. Verify the actual outcome (delivery, pipeline state, notification) separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I troubleshoot a failed GoHighLevel workflow action?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Identify the specific failure category — missing data, expired integration connection, invalid value, or a rejected webhook — since each needs a different fix, then check the relevant configuration for that category specifically rather than the workflow as a whole.',
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

      <GoHighLevelWorkflowTriggeredNotWorkingClient />
    </>
  );
}