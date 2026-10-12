import { Metadata } from 'next';
import GoHighLevelVsDubsadoClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs Dubsado: An Honest Comparison (2026)',
  description: 'GoHighLevel or Dubsado? Compare features, pricing and fit for solo consultants, creatives and agencies, plus when to use both or stay put.',
  keywords: 'GoHighLevel vs Dubsado, Dubsado vs GoHighLevel, GoHighLevel or Dubsado, Dubsado alternative, GoHighLevel vs Dubsado pricing, best CRM for service businesses',
  openGraph: {
    title: 'GoHighLevel vs Dubsado: An Honest Comparison (2026)',
    description: 'GoHighLevel or Dubsado? Compare features, pricing and fit for solo consultants, creatives and agencies, plus when to use both or stay put.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-dubsado',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-vs-dubsado-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel vs Dubsado: An Honest Comparison (2026)',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-13T00:00:00.000Z',
    modifiedTime: '2026-10-13T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel vs Dubsado: An Honest Comparison (2026)',
    description: 'GoHighLevel or Dubsado? Compare features, pricing and fit for solo consultants, creatives and agencies, plus when to use both or stay put.',
    images: ['/blog-images/gohighlevel-vs-dubsado-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-dubsado',
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
  headline: 'GoHighLevel vs Dubsado: Which Platform Is Right for Your Business?',
  description:
    'GoHighLevel or Dubsado? Compare features, pricing and fit for solo consultants, creatives and agencies, plus when to use both or stay put.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-vs-dubsado-og.jpg',
  datePublished: '2026-10-13T00:00:00.000Z',
  dateModified: '2026-10-13T00:00:00.000Z',
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
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-vs-dubsado',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel vs Dubsado Comparison',
    description: 'A comprehensive comparison of GoHighLevel and Dubsado for 2026',
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
      name: 'GoHighLevel vs Dubsado: An Honest Comparison (2026)',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-dubsado',
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
      name: 'What is the difference between GoHighLevel and Dubsado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoHighLevel is organized around leads and communication: forms, funnels, pipelines, workflows, email and SMS, with agency features. Dubsado is organized around client projects: proposals, contracts, invoices, scheduling, portals and Flows for small service businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel better than Dubsado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is better in general. GoHighLevel suits lead generation, pipelines, campaigns and multi-client operations. Dubsado suits a structured client flow for a solo or small service business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dubsado a CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It has client records and project management, but Dubsado states it is not a sales CRM. It does not provide prospecting or an outbound pipeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel suitable for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can be, particularly for freelancers who rely on lead generation and follow-up. It involves more configuration and usage-based charges for messaging, so check whether you need that breadth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dubsado suitable for marketing agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For an agency\'s own proposals, contracts and invoices, possibly. For running client campaigns or multiple client accounts, Dubsado is not designed for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for proposals and contracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both support proposals, contracts and e-signatures. Dubsado\'s approach centers on packages and a project; GoHighLevel\'s Documents & Contracts has no conditional logic. Test each with your own contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for marketing automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoHighLevel, if you need email and SMS campaigns, funnels and multi-channel follow-up. Dubsado states it is not a mass email platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel replace Dubsado, or Dubsado replace GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoHighLevel can cover much of Dubsado\'s client flow with more setup. Dubsado cannot replace GoHighLevel\'s marketing, pipeline and agency features. Whether a replacement is worthwhile depends on your process, not on feature coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel and Dubsado work together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Via Zapier or custom work, within the limits above. We found no native integration, and Dubsado\'s Zapier integration requires Premier. Decide record ownership before connecting them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On subscription alone, Dubsado\'s published plans cost less than GoHighLevel\'s. That is not the whole cost: GoHighLevel adds usage-based charges and Dubsado adds user and brand add-ons. Compare what you need to use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it worth switching from Dubsado to GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you have a requirement Dubsado cannot meet, such as outbound campaigns or multi-client operation. If the issue is an inconsistent setup, improving it is usually cheaper than migrating.',
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

      <GoHighLevelVsDubsadoClient />
    </>
  );
}