import { Metadata } from 'next';
import GoHighLeveliMessageMaciPhoneClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel iMessage: Do You Need a Mac? (2026)',
  description: 'Does GoHighLevel iMessage require a Mac and iPhone? Compare owned hardware, cloud Mac, and managed providers, and what happens when infrastructure goes offline.',
  keywords: 'GoHighLevel iMessage Mac, GoHighLevel iMessage, GHL iMessage integration, GoHighLevel iMessage without Mac, GoHighLevel iMessage without iPhone, cloud Mac iMessage, managed iMessage service, iMessage GoHighLevel workflow',
  openGraph: {
    title: 'GoHighLevel iMessage: Do You Need a Mac? (2026)',
    description: 'Does GoHighLevel iMessage require a Mac and iPhone? Compare owned hardware, cloud Mac, and managed providers, and what happens when infrastructure goes offline.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-imessage-mac-iphone',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-imessage-mac-iphone-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel iMessage: Do You Need a Mac? (2026)',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-18T00:00:00.000Z',
    modifiedTime: '2026-09-18T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel iMessage: Do You Need a Mac? (2026)',
    description: 'Does GoHighLevel iMessage require a Mac and iPhone? Compare owned hardware, cloud Mac, and managed providers, and what happens when infrastructure goes offline.',
    images: ['/blog-images/gohighlevel-imessage-mac-iphone-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-imessage-mac-iphone',
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
  headline: 'GoHighLevel iMessage: Do You Really Need a Mac and iPhone? Hardware, Cloud & Managed Options (2026)',
  description:
    'Does GoHighLevel iMessage require a Mac and iPhone? Compare owned hardware, cloud Mac, and managed providers, and what happens when infrastructure goes offline.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-imessage-mac-iphone-og.jpg',
  datePublished: '2026-09-18T00:00:00.000Z',
  dateModified: '2026-09-18T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-imessage-mac-iphone',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel iMessage Integration',
    description: 'A comprehensive guide to GoHighLevel iMessage hardware, cloud, and managed options',
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
      name: 'GoHighLevel iMessage: Do You Need a Mac? (2026)',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-imessage-mac-iphone',
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
      name: 'Does GoHighLevel support iMessage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not natively. It arrives through a third-party Marketplace app functioning as a conversation provider — GoHighLevel provides the CRM and workflow layer the message routes through, not the iMessage sending capability itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a Mac for GoHighLevel iMessage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you choose a provider whose architecture puts that requirement on you. Others host or manage the required Apple environment themselves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an iPhone for GoHighLevel iMessage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on the specific provider\'s architecture — some rely primarily on Mac-side infrastructure, others tie the number to a phone. Ask directly rather than assuming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use GoHighLevel iMessage without owning a Mac?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through cloud-hosted or fully managed providers — but a real Apple environment still exists somewhere behind the service; you\'re just not the one operating it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use GoHighLevel iMessage without owning an iPhone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most current architectures, yes — the Mac (owned, hosted, or provider-run) is typically the operative piece, though this varies by provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the Mac goes offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outbound sending and inbound sync for that channel typically stop until it\'s back, unless the specific provider has built monitoring or redundancy around it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a cloud Mac for iMessage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A real macOS environment hosted by a third party instead of sitting on your desk — infrastructure you rent rather than own, not a plain API replacement for a physical device.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a managed iMessage service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A model where the provider operates the underlying device infrastructure entirely, delivering a working number and channel without exposing the hardware layer to the customer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel workflows automate iMessages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, once a conversation-provider integration is installed — workflows can trigger sends the same way they trigger SMS, through that provider\'s workflow action.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I check before choosing a third-party iMessage provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ownership of the number and Apple account, what happens during an outage, how replies sync back to GHL, and what happens if you cancel or switch — covered in the questions list above.',
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

      <GoHighLeveliMessageMaciPhoneClient />
    </>
  );
}