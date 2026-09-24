import { Metadata } from 'next';
import GoHighLevelOpportunityWorkflowNotTriggeringClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Opportunity Workflow Not Triggering? Pipeline, Stage & Opportunity Fixes',
  description: 'An opportunity was created or moved, but the GoHighLevel workflow didn\'t start. Learn which opportunity trigger you actually need and what\'s blocking enrollment.',
  keywords: 'GoHighLevel opportunity workflow not triggering, GoHighLevel opportunity trigger not working, GoHighLevel Opportunity Created trigger, GoHighLevel Opportunity Changed trigger, GoHighLevel Pipeline Stage Changed trigger, GoHighLevel Stale Opportunities trigger, GoHighLevel pipeline filter, GoHighLevel stage filter, GoHighLevel opportunity status filter, GoHighLevel opportunity workflow troubleshooting',
  openGraph: {
    title: 'GoHighLevel Opportunity Workflow Not Triggering? Pipeline, Stage & Opportunity Fixes',
    description: 'An opportunity was created or moved, but the GoHighLevel workflow didn\'t start. Learn which opportunity trigger you actually need and what\'s blocking enrollment.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-opportunity-workflow-not-triggering',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-opportunity-workflow-not-triggering-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Opportunity Workflow Not Triggering? Pipeline, Stage & Opportunity Fixes',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-25T00:00:00.000Z',
    modifiedTime: '2026-09-25T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Opportunity Workflow Not Triggering? Pipeline, Stage & Opportunity Fixes',
    description: 'An opportunity was created or moved, but the GoHighLevel workflow didn\'t start. Learn which opportunity trigger you actually need and what\'s blocking enrollment.',
    images: ['/blog-images/gohighlevel-opportunity-workflow-not-triggering-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-opportunity-workflow-not-triggering',
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
  headline: 'GoHighLevel Opportunity Workflow Not Triggering? Pipeline, Stage & Opportunity Fixes',
  description:
    'An opportunity was created or moved, but the GoHighLevel workflow didn\'t start. Learn which opportunity trigger you actually need and what\'s blocking enrollment.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-opportunity-workflow-not-triggering-og.jpg',
  datePublished: '2026-09-25T00:00:00.000Z',
  dateModified: '2026-09-25T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-opportunity-workflow-not-triggering',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Opportunity Workflow Troubleshooting',
    description: 'A comprehensive guide to fixing a GoHighLevel opportunity workflow that isn\'t triggering',
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
      name: 'GoHighLevel Opportunity Workflow Not Triggering? Pipeline, Stage & Opportunity Fixes',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-opportunity-workflow-not-triggering',
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
      name: 'Why is my GoHighLevel opportunity workflow not triggering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most often because the workflow is built on the wrong opportunity trigger for the event that occurred — Opportunity Created, Opportunity Changed, Pipeline Stage Changed, and Stale Opportunities all watch for different things — or its pipeline, stage, or status filters don\'t match the actual opportunity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my opportunity enter the correct stage but not trigger the workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the workflow uses Opportunity Created, it has no stage filter and only watches for the opportunity\'s first creation. Stage-specific automation needs the Pipeline Stage Changed trigger instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a pipeline stage change trigger a GoHighLevel workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, specifically through the Pipeline Stage Changed trigger, which is built for that exact event and supports Assigned To and Tag filters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the opportunity exist but the contact is not entering the workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confirm the opportunity is actually associated with the contact you\'re checking — an unexpected contact association, or a filter that excludes this specific opportunity, can both produce this symptom.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can multiple opportunities affect workflow enrollment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If a contact has more than one opportunity, diagnosing from the contact record alone can be misleading — identify which specific opportunity generated the event before troubleshooting further.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does an existing contact need re-entry enabled for opportunity workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only when the contact is already enrolled or has completed a prior run and you need a new opportunity event to enroll them again — that\'s governed by Allow Re-entry, not by the opportunity trigger itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I verify whether an opportunity workflow actually enrolled the contact?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check Enrollment History for that contact. A recorded enrollment confirms the trigger worked; its absence means the problem is upstream, in trigger selection, pipeline, stage, status, or filters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the workflow enrolled but the expected action did not happen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That\'s no longer an opportunity trigger problem — it\'s an execution issue, covered in the workflow execution troubleshooting article.',
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

      <GoHighLevelOpportunityWorkflowNotTriggeringClient />
    </>
  );
}