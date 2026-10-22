import { Metadata } from 'next';
import GoHighLevelVsClioGrowClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs Clio Grow for Law Firms: Which Is Better?',
  description: 'GoHighLevel vs Clio Grow for law firms: compare intake, conflict checks, automation, AI, pricing and Clio integration, and see when to use one or both.',
  keywords: 'GoHighLevel vs Clio Grow, GoHighLevel vs Clio Grow for law firms, GoHighLevel vs Clio, Clio Grow alternatives, legal CRM comparison, law firm intake automation',
  openGraph: {
    title: 'GoHighLevel vs Clio Grow for Law Firms: Which Is Better?',
    description: 'GoHighLevel vs Clio Grow for law firms: compare intake, conflict checks, automation, AI, pricing and Clio integration, and see when to use one or both.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-clio-grow',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-vs-clio-grow-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel vs Clio Grow for Law Firms: Which Is Better?',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-23T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel vs Clio Grow for Law Firms: Which Is Better?',
    description: 'GoHighLevel vs Clio Grow for law firms: compare intake, conflict checks, automation, AI, pricing and Clio integration, and see when to use one or both.',
    images: ['/blog-images/gohighlevel-vs-clio-grow-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-clio-grow',
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
  category: 'GoHighLevel Comparison',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GoHighLevel vs. Clio Grow for Law Firms: Which Is Better for Intake, CRM & Automation?',
  description:
    'GoHighLevel vs Clio Grow for law firms: compare intake, conflict checks, automation, AI, pricing and Clio integration, and see when to use one or both.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-vs-clio-grow-og.jpg',
  datePublished: '2026-10-23T00:00:00.000Z',
  dateModified: '2026-10-23T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-vs-clio-grow',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel vs Clio Grow Comparison',
    description: 'A comprehensive comparison of GoHighLevel and Clio Grow for law firms',
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
      name: 'GoHighLevel vs Clio Grow for Law Firms: Which Is Better?',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-clio-grow',
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
      name: 'Is GoHighLevel better than Clio Grow for law firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is better in general. GoHighLevel suits marketing and follow-up; Clio Grow suits legal-specific intake, particularly with Clio Manage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main difference between them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoHighLevel is a general marketing CRM you configure. Clio Grow is a legal intake CRM within Clio\'s legal software.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace Clio Grow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For lead capture, follow-up and booking, often yes with configuration. It does not provide a conflict-check function we found or Clio\'s legal intake-to-matter handoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace Clio Manage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We found no matter management, trust accounting, billing or court-deadline functions in it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for law firm client intake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clio Grow is built for legal intake. GoHighLevel can collect intake information but requires you to design the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for marketing automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoHighLevel is more clearly documented for multi-channel automation and landing pages. Clio Grow\'s automation is documented mainly for intake steps, emails and reminders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Clio Grow integrate with Clio Manage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Clio documents two-way contact sync and matter sync after a client is converted. Setup is under Settings > Contacts and calendar sync in Clio Manage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel integrate with Clio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A HighLevel help article and a Clio App Directory listing exist, but they are dated, do not name Clio Grow, and give little detail. Zapier and similar tools offer other connections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which platform is cheaper for a small law firm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It cannot be answered fairly. HighLevel starts at $97 per month plus usage; Clio Manage starts at $49 per user, and Grow\'s price is not published.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a law firm use GoHighLevel and Clio together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with limits. Decide the authoritative record, test the connection, and plan for duplicates and failures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GoHighLevel provide legal conflict checking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We found no such function. Forms can collect conflict-related information, but the check itself would happen in legal software.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for AI-assisted lead handling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both market AI for after-hours inquiries. GoHighLevel documents Conversation AI and Voice AI as usage-billed features that need setup; Clio\'s Grow AI is described without setup detail. Test either before relying on it.',
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

      <GoHighLevelVsClioGrowClient />
    </>
  );
}