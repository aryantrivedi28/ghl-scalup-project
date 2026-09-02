import { Metadata } from 'next';
import GoHighLevelAutomationClient from './client';

export const metadata: Metadata = {
  title: 'Best GoHighLevel Automations For Business And Agencies For Highest ROI',
  description: 'Learn which GoHighLevel automations to build first, how to prioritize workflows by business impact and ROI, what agencies should automate, and when not to automate.',
  keywords: 'GoHighLevel automation, GoHighLevel workflows, GoHighLevel workflow automation, GoHighLevel automation examples, best GoHighLevel workflows, GHL automation, GHL workflows, GoHighLevel automations for agencies, GoHighLevel automations for businesses',
  openGraph: {
    title: 'GoHighLevel Automation: The Workflows Worth Building First',
    description: 'Learn which GoHighLevel automations to build first, how to prioritize workflows by business impact and ROI, what agencies should automate, and when not to automate.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-automation',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-automation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Automation: Workflows Worth Building First',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-01T00:00:00.000Z',
    modifiedTime: '2026-09-01T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Automation: Workflows Worth Building First',
    description: 'Learn which GoHighLevel automations to build first, how to prioritize workflows by business impact and ROI, what agencies should automate, and when not to automate.',
    images: ['/blog-images/gohighlevel-automation-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-automation',
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
  category: 'GoHighLevel Automation',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GoHighLevel Automation: The Workflows Worth Building First',
  description:
    'Learn which GoHighLevel automations to build first, how to prioritize workflows by business impact and ROI, what agencies should automate, and when not to automate.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-automation-og.jpg',
  datePublished: '2026-09-01T00:00:00.000Z',
  dateModified: '2026-09-01T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-automation',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Automation',
    description: 'A comprehensive guide to GoHighLevel workflow automation and prioritization',
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
      name: 'GoHighLevel Automation: The Workflows Worth Building First',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-automation',
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
      name: 'What is GoHighLevel automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is the use of HighLevel workflows and related automation capabilities to execute defined business processes when specified events occur.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best GoHighLevel workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no universal list. Common high priority candidates are speed to lead, missed call recovery, appointment protection, sales follow up, reactivation and agency onboarding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I automate first in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with the most expensive recurring and measurable operational leak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate lead follow up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Supported lead events can trigger workflows containing conditions, actions, waits and branches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate appointments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Appointment related workflows can support confirmation, reminders, rescheduling and follow up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can agencies reuse GoHighLevel workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Snapshots can capture reusable sub account configuration, including workflows. Each deployment still needs client specific review and QA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI necessary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Deterministic workflows are often better for predictable processes. AI is useful where conversation or interpretation is genuinely required.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I not automate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the process is rare, undefined, sensitive, inconsistent or too expensive to maintain relative to its value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I troubleshoot a broken workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check the trigger, filters, CRM data, reentry, branches, timing, integrations and live behavior with a fresh test contact.',
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

      <GoHighLevelAutomationClient />
    </>
  );
}