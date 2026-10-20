import { Metadata } from 'next';
import NotifyHumanGoHighLevelConversationAIClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel: Notify a Human Without Stopping Conversation AI',
  description: 'Handover, workflow and email alerts are different controls in GoHighLevel. See which pauses Conversation AI, how to notify staff, and how to test it.',
  keywords: 'how to notify a human in GoHighLevel without stopping Conversation AI, GoHighLevel Conversation AI human handover, GoHighLevel Human Handover, GoHighLevel workflow trigger from Conversation AI, GoHighLevel Conversation AI pause bot, GoHighLevel AI bot stops responding, GoHighLevel AI chatbot human escalation, GoHighLevel Conversation AI bot status',
  openGraph: {
    title: 'GoHighLevel: Notify a Human Without Stopping Conversation AI',
    description: 'Handover, workflow and email alerts are different controls in GoHighLevel. See which pauses Conversation AI, how to notify staff, and how to test it.',
    url: 'https://www.ghlscaleup.com/blog/notify-human-gohighlevel-conversation-ai',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/notify-human-gohighlevel-conversation-ai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel: Notify a Human Without Stopping Conversation AI',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-21T00:00:00.000Z',
    modifiedTime: '2026-10-21T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel: Notify a Human Without Stopping Conversation AI',
    description: 'Handover, workflow and email alerts are different controls in GoHighLevel. See which pauses Conversation AI, how to notify staff, and how to test it.',
    images: ['/blog-images/notify-human-gohighlevel-conversation-ai-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/notify-human-gohighlevel-conversation-ai',
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
  category: 'GoHighLevel AI',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Notify a Human in GoHighLevel Without Stopping Conversation AI',
  description:
    'Handover, workflow and email alerts are different controls in GoHighLevel. See which pauses Conversation AI, how to notify staff, and how to test it.',
  image: 'https://www.ghlscaleup.com/blog-images/notify-human-gohighlevel-conversation-ai-og.jpg',
  datePublished: '2026-10-21T00:00:00.000Z',
  dateModified: '2026-10-21T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/notify-human-gohighlevel-conversation-ai',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Conversation AI Human Notification',
    description: 'A comprehensive guide to notifying humans in GoHighLevel without stopping Conversation AI',
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
      name: 'GoHighLevel: Notify a Human Without Stopping Conversation AI',
      item: 'https://www.ghlscaleup.com/blog/notify-human-gohighlevel-conversation-ai',
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
      name: 'Can GoHighLevel notify a human without stopping Conversation AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can set up a notification separately from Human Handover. Whether the bot keeps replying afterward is not stated in the documentation we read, so test it in your account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Human Handover action pause the bot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Documented: it includes a Bot Pause Behaviour timer in days, hours and minutes. Whether a zero or empty value works is not stated.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Human Handover and Trigger a Workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Human Handover moves a conversation to a person and can pause the bot. Trigger a Workflow runs a published workflow when a condition is recognized, and the documentation does not say it pauses the bot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a workflow notify a team member when a customer asks for a human?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A workflow started from Bot Goals can contain internal actions, but the AI must recognize your condition, and triggering is not guaranteed. Test it and keep a backup alert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Conversation AI keep answering after a workflow is triggered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Possibly. It depends on what the workflow does and your sleep settings. A message sent to the contact by the workflow can put the bot to sleep if that setting is on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my AI bot stop responding after a staff member replies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If sleep after a manual message is enabled, a staff reply pauses the bot. Check the contact\'s audit log and your sleep settings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell whether Conversation AI is active, paused or inactive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Click the status icon in the conversation composer: Active, Inactive or Sleep/Snooze. The icon only appears in Suggestive or Auto-Pilot mode.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I notify a human when the AI does not know the answer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in two ways: Email Notification Settings in Bot Goals, or the Human Handover scenario Lack of Information. The second includes the pause.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prevent duplicate human notifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not attach a workflow to the bot if it already runs from the same trigger. Add a tag check at the start and review its re-entry setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I pause Conversation AI instead of letting it continue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a person must take over, when the issue is sensitive, or when a conflicting AI answer would cause harm.',
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

      <NotifyHumanGoHighLevelConversationAIClient />
    </>
  );
}