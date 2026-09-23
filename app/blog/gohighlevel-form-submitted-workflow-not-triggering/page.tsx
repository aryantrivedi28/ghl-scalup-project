import { Metadata } from 'next';
import GoHighLevelFormSubmittedWorkflowNotTriggeringClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Form Submitted Workflow Not Triggering? Causes and Fixes',
  description: 'A visitor submitted your GoHighLevel form but the workflow never started. Learn the real difference between form submission and workflow enrollment, and how to fix it.',
  keywords: 'GoHighLevel form submitted workflow not triggering, GoHighLevel form trigger not working, GoHighLevel workflow not enrolling from form, GoHighLevel Form Submitted trigger, GoHighLevel form filter, GoHighLevel workflow not triggering after form submission, GoHighLevel form submission not starting workflow, GoHighLevel form survey trigger difference',
  openGraph: {
    title: 'GoHighLevel Form Submitted Workflow Not Triggering? Causes and Fixes',
    description: 'A visitor submitted your GoHighLevel form but the workflow never started. Learn the real difference between form submission and workflow enrollment, and how to fix it.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-form-submitted-workflow-not-triggering',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-form-submitted-workflow-not-triggering-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Form Submitted Workflow Not Triggering? Causes and Fixes',
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
    title: 'GoHighLevel Form Submitted Workflow Not Triggering? Causes and Fixes',
    description: 'A visitor submitted your GoHighLevel form but the workflow never started. Learn the real difference between form submission and workflow enrollment, and how to fix it.',
    images: ['/blog-images/gohighlevel-form-submitted-workflow-not-triggering-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-form-submitted-workflow-not-triggering',
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
  headline: 'GoHighLevel Form Submitted Workflow Not Triggering? Causes and Fixes',
  description:
    'A visitor submitted your GoHighLevel form but the workflow never started. Learn the real difference between form submission and workflow enrollment, and how to fix it.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-form-submitted-workflow-not-triggering-og.jpg',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-form-submitted-workflow-not-triggering',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Form Submitted Workflow Troubleshooting',
    description: 'A comprehensive guide to fixing a GoHighLevel form submitted workflow that isn\'t triggering',
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
      name: 'GoHighLevel Form Submitted Workflow Not Triggering? Causes and Fixes',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-form-submitted-workflow-not-triggering',
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
      name: 'Why isn\'t my GoHighLevel workflow triggering after a form submission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most often because the trigger\'s Form filter points at a different form than the one submitted, the workflow is still in Draft, or additional trigger filters aren\'t satisfied by that specific submission\'s data.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I trigger a GoHighLevel workflow when someone submits a form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add a Form Submitted trigger, set its Form filter to the exact form you want to listen for, add any additional qualifying filters, and publish the workflow — a form with no Form filter selected will trigger the workflow from any form submission in the sub-account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my GoHighLevel form submit successfully but the workflow doesn\'t start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A successful submission confirms the form itself worked. It doesn\'t confirm the trigger is listening for that exact form, that its filters are satisfied, or that the contact\'s current state allows enrollment — those are separate, later steps in the chain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my Form Submitted trigger not working in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check, in order: whether the workflow is Published, whether the correct form is selected in the trigger\'s Form filter, whether the Form Type filter matches how the form is deployed, and whether any additional filters are satisfied by the submitted data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an existing GoHighLevel contact trigger a workflow after submitting a form again?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if the workflow\'s Allow Re-entry setting permits it and the contact isn\'t currently active in that same workflow — this is governed by re-entry behavior, not the Form Submitted trigger itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test a GoHighLevel Form Submitted workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confirm the workflow is Published and the correct form is selected, submit the actual live form with a contact you control, then check Enrollment History to confirm whether the contact enrolled — a submission alone doesn\'t confirm enrollment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know whether my form submission enrolled the contact in a workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the workflow\'s Enrollment History for that contact. A recorded enrollment confirms the trigger worked; its absence means the problem is still upstream, in form selection, trigger filters, or contact state.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the workflow work with one form but not another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost always because the trigger\'s Form filter is set to one specific form, and the second form was never selected — each Form Submitted trigger listens for the form(s) explicitly configured in its filter, not "forms" as a category.',
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

      <GoHighLevelFormSubmittedWorkflowNotTriggeringClient />
    </>
  );
}