// app/case-studies/gohighlevel-multi-location-automation-property-website-real-estate/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CaseStudyContent from './CaseStudyContent';

const SITE_URL = 'https://www.ghlscaleup.com';
const PAGE_URL = `${SITE_URL}/case-studies/gohighlevel-multi-location-automation-property-website-real-estate`;
const OG_IMAGE = `${SITE_URL}/case-study/bllr-ghl-multi-location-og.jpeg`;

/* ============================================================
   METADATA Primary SEO signals
   ============================================================ */
export const metadata: Metadata = {
  title:
    'Multi Location Real Estate GoHighLevel Case Study: Sub Accounts',
  description:
    'See how GHL Scale Up built BLLR a multi-subaccount GoHighLevel system with property websites, buyer and seller workflows, and centralized lead reporting.',
  keywords: [
    'GoHighLevel sub-accounts',
    'real estate automation',
    'property websites GoHighLevel',
    'buyer and seller workflows',
    'multi-location CRM',
    'GoHighLevel lead reporting',
    'multi-location real estate GoHighLevel',
    'GoHighLevel real estate sub-account architecture',
    'GoHighLevel property website integration',
    'BLLR case study',
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
      'Multi Location Real Estate GoHighLevel Case Study: Sub Accounts',
    description:
      'How GHL Scale Up built BLLR a multi-subaccount GoHighLevel architecture with location-based property websites, automated buyer/seller workflows, and centralized reporting.',
    siteName: 'GHL Scale Up',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'BLLR Multi-Location Real Estate GoHighLevel Case Study Sub-Account Architecture & Property Websites',
      },
    ],
    publishedTime: '2026-08-01T00:00:00.000Z',
    modifiedTime: '2026-08-15T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
    section: 'Case Studies',
    tags: [
      'GoHighLevel',
      'Real Estate',
      'Multi-Location',
      'Property Websites',
      'Sub-Accounts',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Multi Location Real Estate GoHighLevel Case Study: Sub Accounts | GHL Scale Up',
    description:
      'How we built a scalable multi-subaccount GoHighLevel system for a multi-location real estate brand property websites, buyer/seller workflows, and centralized reporting.',
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
    'GoHighLevel Multi-Location Real Estate Case Study: Scalable Sub-Account System With Property Websites',
  description:
    "A growing real estate brand operating across multiple locations needed a structured, location-aware system not a patchwork of spreadsheets and inboxes per office. GHL Scale Up built a multi-subaccount GoHighLevel architecture with location-based property websites and automated buyer/seller workflows.",
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
    'GoHighLevel sub-accounts, real estate automation, property websites, buyer and seller workflows, multi-location CRM, lead reporting, BLLR',
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
      name: 'How does GoHighLevel handle multiple business locations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoHighLevel supports multi-location businesses through sub-accounts, where each location gets its own independent CRM, pipelines, and workflows while still rolling up under a centralized agency or brand account for oversight and reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should each real estate office have its own GoHighLevel sub-account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in most cases. A separate sub-account per location keeps leads, pipelines, and workflows specific to that market, which avoids mixing contact data and makes it easier to track performance location by location.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you build a property website for real estate inside GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A property website inside GoHighLevel is built using GoHighLevel's website and funnel builder, connected to location-specific listing data and lead capture forms so that inquiries flow directly into the correct sub-account's pipeline.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate follow-up for both real estate buyers and sellers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GoHighLevel workflows can be built separately for buyer leads (property matching, viewing follow-up) and seller leads (listing inquiries, valuation follow-up), since these require different messaging and different next steps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do multi-location businesses track leads across all locations in one place?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "By building internal reporting and lead management on top of each location's GoHighLevel sub-account data, giving leadership a consolidated view of lead volume, response times, and conversion across every location without logging into each sub-account separately.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a GoHighLevel sub-account and a single shared account for multiple locations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A single shared account mixes all locations' contacts, pipelines, and workflows together, making it hard to isolate performance or customize follow-up by region. Separate sub-accounts keep each location's data and automation independent while still allowing centralized oversight.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is a generic real estate website not enough for a multi-location brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A single generic website can't effectively showcase location-specific property listings or rank well for local searches in each market. Dynamic, location-based websites let each region highlight its own inventory and improve local search relevance.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to set up a multi-location GoHighLevel system for real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines depend on how many locations are involved and how much existing data needs to be structured, but the process generally starts with mapping each location\u2019s process, followed by building sub-accounts, workflows, and location-specific websites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel scale with a real estate brand as it expands into new regions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when the account is built on a sub-account architecture from the start. New locations can be added as new sub-accounts using a repeatable setup, rather than requiring a rebuild of the existing system each time the brand expands.',
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
      name: 'Multi-Location Real Estate BLLR',
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
  name: 'GoHighLevel Multi-Location Sub-Account Architecture for Real Estate Brands',
  provider: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    url: SITE_URL,
  },
  serviceType:
    'GoHighLevel Sub-Account Architecture, Location-Based Property Websites, Real Estate Buyer/Seller Workflow Automation, Multi-Location Lead Reporting',
  areaServed: 'US',
  description:
    'Multi-location GoHighLevel architecture for real estate brands: one sub-account per location, location-based property websites, automated buyer and seller workflows, and centralized lead reporting.',
};

/* ============================================================
   PAGE Server Component
   ============================================================ */
export default function MultiLocationRealEstateCaseStudyPage() {
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
              Multi-Location Real Estate BLLR
            </li>
          </ol>
        </div>
      </nav>

      <CaseStudyContent />
    </>
  );
}