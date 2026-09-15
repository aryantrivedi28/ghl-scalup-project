// app/case-studies/gohighlevel-affiliate-management-automation-media-company/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CaseStudyContent from './CaseStudyContent';

const SITE_URL = 'https://www.ghlscaleup.com';
const PAGE_URL = `${SITE_URL}/case-studies/gohighlevel-affiliate-management-automation-media-company`;
const OG_IMAGE = `${SITE_URL}/case-study/crump-media-ghl-affiliate-og.jpeg`;

/* ============================================================
   METADATA Primary SEO signals
   ============================================================ */
export const metadata: Metadata = {
  title:
    'GoHighLevel Affiliate Management Case Study: Crump Media',
  description:
    'See how GHL Scale Up built Crump Media a GoHighLevel affiliate system with automated lead nurturing, affiliate tracking, email and SMS drips, and reporting dashboards.',
  keywords: [
    'GoHighLevel affiliate tracking',
    'GoHighLevel affiliate management system',
    'lead nurturing automation',
    'email and SMS drip campaigns',
    'GoHighLevel reporting dashboards',
    'media company CRM',
    'GoHighLevel affiliate manager',
    'affiliate campaign automation',
    'GoHighLevel media company case study',
    'Crump Media case study',
  ],
  authors: [{ name: 'GHL Scale Up Team', url: SITE_URL }],
  creator: 'GHL Scale Up',
  publisher: 'GHL Scale Up',
  alternates: {
    canonical: PAGE_URL,
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
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title:
      'GoHighLevel Affiliate Management Case Study: Crump Media',
    description:
      'How GHL Scale Up built Crump Media LLC a GoHighLevel affiliate system with automated lead nurturing, affiliate tracking, email and SMS drips, and real-time reporting dashboards.',
    siteName: 'GHL Scale Up',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Crump Media LLC GoHighLevel Affiliate Management Case Study Automation & Reporting',
      },
    ],
    publishedTime: '2026-08-01T00:00:00.000Z',
    modifiedTime: '2026-08-15T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
    section: 'Case Studies',
    tags: [
      'GoHighLevel',
      'Affiliate Management',
      'Media Company',
      'Lead Nurturing',
      'Reporting Dashboards',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'GoHighLevel Affiliate Management Case Study: Crump Media',
    description:
      'How we built a GoHighLevel affiliate management system for Crump Media LLC automated lead nurturing, centralized affiliate tracking, and real-time reporting.',
    images: [OG_IMAGE],
    creator: '@ghlscaleup',
  },
  category: 'Case Study',
};

/* ============================================================
   JSON-LD Article Schema
   ============================================================ */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  headline:
    'GoHighLevel Affiliate Management System Case Study: Automating Affiliate Tracking and Lead Nurturing for a Media Company',
  description:
    "A media and performance-driven business was running multiple affiliate campaigns manually creating bottlenecks in lead nurturing, affiliate tracking, and reporting. GHL Scale Up built a custom GoHighLevel affiliate management system with automated lead nurturing and real-time reporting dashboards.",
  image: [OG_IMAGE],
  author: {
    '@type': 'Organization',
    name: 'GHL Scale Up Team',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/web-app-manifest-192x192.png`,
    },
  },
  publisher: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/web-app-manifest-192x192.png`,
    },
  },
  datePublished: '2026-08-01',
  dateModified: '2026-08-15',
  articleSection: 'Case Studies',
  keywords:
    'GoHighLevel affiliate tracking, affiliate management system, lead nurturing automation, email and SMS drip campaigns, reporting dashboards, media company CRM, Crump Media LLC',
};

/* ============================================================
   JSON-LD FAQ Schema (matches visible FAQ exactly)
   ============================================================ */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you set up an affiliate management system inside GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An affiliate management system inside GoHighLevel is typically built around campaign-based tracking, where each affiliate program or offer is set up with its own commission structure, tracking links, and automated onboarding workflow, then connected to the same lead and communication tools used for the rest of the business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel track affiliate commissions and conversions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. GoHighLevel's Affiliate Manager supports tracking clicks, conversions, and commissions per campaign, with options for flat, percentage, recurring, or tiered commission structures depending on how the program is configured.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can affiliates have their own login to track their performance in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GoHighLevel supports a self-service affiliate portal where partners can log in to view their own earnings, tracking links, and performance stats without needing access to the main account.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does GoHighLevel automate lead nurturing for affiliate-driven leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leads generated through affiliate campaigns can be routed into structured email and SMS drip sequences automatically, ensuring consistent follow-up regardless of which affiliate or campaign the lead originated from.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is manual affiliate campaign management difficult to scale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As the number of active affiliate campaigns grows, manually tracking performance, following up with leads, and compiling reports becomes increasingly time-consuming, which is why centralizing these processes inside an automated system becomes necessary once a business is running multiple campaigns at once.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between running affiliate tracking manually versus inside GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manual affiliate tracking typically relies on spreadsheets or separate tools disconnected from lead communication, making it hard to see how affiliate activity connects to actual conversions. Building affiliate tracking inside GoHighLevel keeps affiliate data, lead nurturing, and reporting in one connected system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel generate real-time reporting dashboards for affiliate and campaign performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Custom dashboards can be built inside GoHighLevel to show live affiliate and campaign performance data, removing the need to manually compile reports from multiple sources.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do structured email and SMS drip campaigns improve conversion rates for affiliate-driven leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drip campaigns keep leads engaged with consistent, timed follow-up messaging after the initial referral, which increases the likelihood that an affiliate-driven lead converts instead of going cold from a lack of follow-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a custom-built affiliate system better than a generic affiliate plugin or third-party tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A custom affiliate management system built inside GoHighLevel can be tailored to a business's specific campaign structure and integrated directly with existing lead and communication workflows, which reduces the data gaps that come from running affiliate tracking on a separate, disconnected platform.",
      },
    },
  ],
};

/* ============================================================
   JSON-LD Breadcrumb Schema
   ============================================================ */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Case Studies',
      item: `${SITE_URL}/case-studies`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Affiliate Management Crump Media',
      item: PAGE_URL,
    },
  ],
};

/* ============================================================
   JSON-LD Service Schema
   ============================================================ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GoHighLevel Affiliate Management System & Lead Nurturing Automation',
  provider: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    url: SITE_URL,
  },
  serviceType:
    'GoHighLevel Affiliate Tracking, Custom Affiliate Management System, Email & SMS Drip Campaigns, Automated Reporting Dashboards',
  areaServed: 'US',
  description:
    'Custom GoHighLevel affiliate management system for media and performance-driven businesses: centralized affiliate tracking, automated lead nurturing, structured email and SMS drip campaigns, and real-time reporting dashboards.',
};

/* ============================================================
   PAGE Server Component
   ============================================================ */
export default function AffiliateManagementCaseStudyPage() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Visible Breadcrumbs (SEO + UX) */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#0B1628] border-b border-white/10"
      >
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-white/50">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" aria-hidden="true" />
            <li>
              <Link
                href="/case-studies"
                className="hover:text-white transition-colors"
              >
                Case Studies
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" aria-hidden="true" />
            <li aria-current="page" className="text-white/80 font-medium">
              Affiliate Management Crump Media
            </li>
          </ol>
        </div>
      </nav>

      <CaseStudyContent />
    </>
  );
}