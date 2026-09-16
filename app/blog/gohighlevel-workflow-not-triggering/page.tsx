import { Metadata } from 'next';
import GoHighLevelWorkflowNotTriggeringClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Workflow Not Triggering? Find the Fix',
  description: 'GoHighLevel workflow not triggering? Check trigger filters, test with a fresh contact, and use Enrollment History to find exactly where it\'s failing.',
  keywords: 'GoHighLevel workflow not triggering, GoHighLevel workflow not firing, GHL workflow not triggering, GoHighLevel workflow trigger not working, GoHighLevel workflow troubleshooting, GoHighLevel automation not triggering, GoHighLevel workflow filters, GoHighLevel workflow enrollment, GoHighLevel Enrollment History, GoHighLevel workflow test mode, GoHighLevel Allow Re Entry',
  openGraph: {
    title: 'GoHighLevel Workflow Not Triggering? Find the Fix',
    description: 'GoHighLevel workflow not triggering? Check trigger filters, test with a fresh contact, and use Enrollment History to find exactly where it\'s failing.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-not-triggering',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-workflow-not-triggering-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Workflow Not Triggering? How to Find and Fix the Problem',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-16T00:00:00.000Z',
    modifiedTime: '2026-09-16T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Workflow Not Triggering? Find the Fix',
    description: 'GoHighLevel workflow not triggering? Check trigger filters, test with a fresh contact, and use Enrollment History to find exactly where it\'s failing.',
    images: ['/blog-images/gohighlevel-workflow-not-triggering-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-not-triggering',
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
  headline: 'GoHighLevel Workflow Not Triggering? How to Find and Fix the Problem',
  description:
    'GoHighLevel workflow not triggering? Check trigger filters, test with a fresh contact, and use Enrollment History to find exactly where it\'s failing.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-workflow-not-triggering-og.jpg',
  datePublished: '2026-09-16T00:00:00.000Z',
  dateModified: '2026-09-16T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-not-triggering',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Workflow Troubleshooting',
    description: 'A comprehensive guide to diagnosing and fixing GoHighLevel workflow trigger issues',
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
      name: 'GoHighLevel Workflow Not Triggering? Find the Fix',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-workflow-not-triggering',
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
      name: 'Why is my GoHighLevel workflow not triggering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most often because the event that occurred doesn\'t fully match the trigger\'s configured filters, the workflow isn\'t published, or the test contact\'s history is affecting the result. Enrollment History tells you definitively whether the trigger fired.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my GHL workflow not firing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Same diagnosis regardless of phrasing — confirm the workflow is active, verify the real event occurred, check it against every trigger filter, and test with a fresh contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my GoHighLevel workflow work in test mode but not live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test conditions are often cleaner than real-world data. A live event can fail a filter that a controlled test never exercises. Compare the actual live event\'s data against the trigger\'s filters directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my GoHighLevel workflow triggered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check Enrollment History for the contact. If they appear there, the workflow triggered — regardless of what happened afterward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my GoHighLevel workflow not enrolling a contact?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The event likely doesn\'t satisfy every configured trigger filter, or the contact isn\'t eligible to enter given the workflow\'s re-entry settings and their existing history with it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do trigger filters affect GoHighLevel workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They narrow a general event category down to the specific version the workflow should respond to. An event can happen and still fail to qualify if it doesn\'t match every filter condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test a GoHighLevel workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a fresh contact with no history in the workflow, trigger the real event rather than a simulated one, and check Enrollment History for the result.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I check first when a GHL workflow stops triggering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compare what changed — trigger filters, workflow status, referenced forms or pipeline stages, custom fields, tags, or integrations — rather than assuming which one caused it.',
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

      <GoHighLevelWorkflowNotTriggeringClient />
    </>
  );
}