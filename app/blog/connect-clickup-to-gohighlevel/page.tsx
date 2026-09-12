import { Metadata } from 'next';
import ConnectClickUpToGoHighLevelClient from './client';

export const metadata: Metadata = {
  title: 'How to Connect ClickUp to GoHighLevel: Setup & Automation | GHL Scale Up',
  description: 'Learn how to connect ClickUp and GoHighLevel using native workflows, triggers, actions, data mapping, automation use cases, limitations, and troubleshooting.',
  keywords: 'ClickUp GoHighLevel integration; ClickUp triggers; GoHighLevel ClickUp workflows; ClickUp automation; create ClickUp tasks from GoHighLevel; ClickUp to GHL; native integration; Zapier vs native integration',
  openGraph: {
    title: 'How to Connect ClickUp to GoHighLevel: Setup & Automation | GHL Scale Up',
    description: 'Learn how to connect ClickUp and GoHighLevel using native workflows, triggers, actions, data mapping, automation use cases, limitations, and troubleshooting.',
    url: 'https://www.ghlscaleup.com/blog/connect-clickup-to-gohighlevel',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/connect-clickup-to-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Connect ClickUp to GoHighLevel: Setup & Automation (2026)',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-10T00:00:00.000Z',
    modifiedTime: '2026-09-10T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect ClickUp to GoHighLevel: Setup & Automation (2026)',
    description: 'Connect ClickUp to GoHighLevel with native workflow triggers and actions. Setup steps, trigger/action tables, use cases, limits, and troubleshooting.',
    images: ['/blog-images/connect-clickup-to-gohighlevel-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/connect-clickup-to-gohighlevel',
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
  category: 'GoHighLevel Integrations',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Connect ClickUp to GoHighLevel: Setup, Triggers, Actions & Automation',
  description:
    'Connect ClickUp to GoHighLevel with native workflow triggers and actions. Setup steps, trigger/action tables, use cases, limits, and troubleshooting.',
  image: 'https://www.ghlscaleup.com/blog-images/connect-clickup-to-gohighlevel-og.jpg',
  datePublished: '2026-09-10T00:00:00.000Z',
  dateModified: '2026-09-10T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/connect-clickup-to-gohighlevel',
  },
  about: {
    '@type': 'Thing',
    name: 'ClickUp GoHighLevel Integration',
    description: 'A comprehensive guide to connecting ClickUp with GoHighLevel',
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
      name: 'Connect ClickUp to GoHighLevel: Setup & Automation (2026)',
      item: 'https://www.ghlscaleup.com/blog/connect-clickup-to-gohighlevel',
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
      name: 'Can ClickUp integrate with GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through a native integration built into Workflows — no third-party tool is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I connect ClickUp to GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add a ClickUp trigger or action inside a workflow, click Connect Now, and authorize via ClickUp\'s OAuth login. You can also connect globally under Settings → Integrations → ClickUp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ClickUp integration native in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — it runs inside the Workflows builder using ClickUp-specific triggers and actions, distinct from routing the connection through Zapier or Make.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel create ClickUp tasks automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, via the Create Task action, triggered by events like a form submission or an opportunity stage change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can ClickUp trigger GoHighLevel workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Events like New Task or Task Changes can start a workflow, though the trigger is contactless by default and needs an added step to associate with a CRM contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ClickUp triggers are available in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nine are currently documented: New Task, Task Changes, New List, New Folder, New Comment on a Task, New Attachment Added to Task, New Reaction on Chat Message, New Reaction on Task Comment, and New Time Entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ClickUp actions are available in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Task creation and updates, space/folder/list creation, comments and attachments, document creation and editing, and several lookup actions. Create Custom Field and Update Custom Field Value are listed as Coming Soon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need Zapier to connect ClickUp and GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not if the native trigger, action, and field mapping already cover the need. Zapier or Make becomes relevant when a specific capability isn\'t natively supported yet, or another app needs to join the same automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel and ClickUp sync data both ways?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not as continuous synchronization. The integration triggers specific workflows in each direction on a defined event — it doesn\'t keep every field permanently matched.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why isn\'t my ClickUp workflow triggering in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most often a scoping issue (wrong workspace or list), a lapsed authorization, or an overly narrow filter. Check Execution Logs & Enrollment History for the specific run.',
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

      <ConnectClickUpToGoHighLevelClient />
    </>
  );
}