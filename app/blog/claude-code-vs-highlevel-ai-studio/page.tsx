import { Metadata } from 'next';
import ClaudeCodeVsHighLevelAIStudioClient from './client';

export const metadata: Metadata = {
  title: 'Claude Code vs HighLevel AI Studio: Which to Use',
  description: 'Claude Code vs HighLevel AI Studio compared for websites and apps code control, CRM connection, cost, maintenance, and whether AI Studio projects can actually be exported.',
  keywords: 'Claude Code vs HighLevel AI Studio, Claude Code or AI Studio, HighLevel AI Studio vs Claude Code, best AI builder for GoHighLevel, Claude Code for GoHighLevel, HighLevel AI Studio website builder, AI Studio vs Claude Code website, Claude Code vs AI website builder',
  openGraph: {
    title: 'Claude Code vs HighLevel AI Studio: Which to Use',
    description: 'Claude Code vs HighLevel AI Studio compared for websites and apps code control, CRM connection, cost, maintenance, and whether AI Studio projects can actually be exported.',
    url: 'https://www.ghlscaleup.com/blog/claude-code-vs-highlevel-ai-studio',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/claude-code-vs-highlevel-ai-studio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Claude Code vs HighLevel AI Studio: Which to Use',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-12T00:00:00.000Z',
    modifiedTime: '2026-09-12T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code vs HighLevel AI Studio: Which to Use',
    description: 'Claude Code vs HighLevel AI Studio compared for websites and apps code control, CRM connection, cost, maintenance, and whether AI Studio projects can actually be exported.',
    images: ['/blog-images/claude-code-vs-highlevel-ai-studio-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/claude-code-vs-highlevel-ai-studio',
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
  category: 'AI Development Tools',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Claude Code vs HighLevel AI Studio: Which Should You Use to Build Websites and Apps?',
  description:
    'Claude Code vs HighLevel AI Studio compared for websites and apps code control, CRM connection, cost, maintenance, and whether AI Studio projects can actually be exported.',
  image: 'https://www.ghlscaleup.com/blog-images/claude-code-vs-highlevel-ai-studio-og.jpg',
  datePublished: '2026-09-12T00:00:00.000Z',
  dateModified: '2026-09-12T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/claude-code-vs-highlevel-ai-studio',
  },
  about: {
    '@type': 'Thing',
    name: 'Claude Code vs HighLevel AI Studio Comparison',
    description: 'A comprehensive comparison of Claude Code and HighLevel AI Studio for building websites and apps',
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
      name: 'Claude Code vs HighLevel AI Studio: Which to Use',
      item: 'https://www.ghlscaleup.com/blog/claude-code-vs-highlevel-ai-studio',
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
      name: 'Is Claude Code better than HighLevel AI Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is universally better. Claude Code is stronger for custom, code-heavy projects with external infrastructure; AI Studio is stronger for HighLevel-native sites and funnels that need CRM connectivity and fast, visual iteration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is HighLevel AI Studio good enough for professional websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for HighLevel-hosted marketing sites, landing pages, and funnels HighLevel\'s own documentation describes it generating full multi-page websites and interactive experiences, not just single landing pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Claude Code build websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes it can build a website\'s full codebase, from static pages to applications with a backend, but you\'re responsible for choosing and managing where it\'s hosted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can HighLevel AI Studio build web apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, per HighLevel\'s own documentation, which describes AI Studio generating interactive front-end experiences and dashboards, not only landing pages. It runs inside HighLevel\'s environment rather than as an independent, freely hostable application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export HighLevel AI Studio code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not through an official, documented feature as of this writing. The Code Editor supports full in-browser editing, but there\'s no native "download the full project" function, and HighLevel users have publicly requested that this be added.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I edit AI Studio code with Claude Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not directly, since there\'s no official export path connecting the two. A developer can use an AI Studio project as a visual and content reference and rebuild the relevant parts in a real codebase with Claude Code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for GoHighLevel agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the project, not the agency generally AI Studio for CRM-connected client sites and funnels, Claude Code for custom applications or anything that needs to be portable outside HighLevel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for large websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Claude Code, for genuinely large or content-heavy migrations that benefit from scripted, repository-based bulk changes rather than page-by-page prompt generation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for custom web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Claude Code it provides a full development environment (Git, testing, external packages, infrastructure choice) that AI Studio\'s in-platform editor doesn\'t attempt to replace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is HighLevel AI Studio cheaper than Claude Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They\'re not directly comparable AI Studio has no standalone price and bills through your HighLevel plan and AI Employee tier, while Claude Code requires a Claude subscription starting at $20/month. Compare the total cost for your specific project, not the two price tags in isolation.',
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

      <ClaudeCodeVsHighLevelAIStudioClient />
    </>
  );
}