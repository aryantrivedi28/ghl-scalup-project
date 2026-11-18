// app/case-studies/gohighlevel-account-migration-collective-travel-design/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CaseStudyContent from './CaseStudyContent';

const SITE_URL = 'https://www.ghlscaleup.com';
const PAGE_URL = `${SITE_URL}/case-studies/gohighlevel-account-migration-collective-travel-design`;
const OG_IMAGE = `${SITE_URL}/case-study/collective-travel-migration-og.jpeg`;

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title:
    'Collective Travel Design GoHighLevel Migration Case Study | GHL Scale Up',
  description:
    'See how GHL Scale Up migrated Collective Travel Design out of a third-party GoHighLevel account into her own agency account — 501 contacts, 10 workflows, and full A2P/email compliance in 21 business days.',
  keywords: [
    'GoHighLevel account migration',
    'GoHighLevel agency account transfer',
    'GoHighLevel CRM migration',
    'A2P 10DLC registration GoHighLevel',
    'GoHighLevel workflow rebuild',
    'GoHighLevel contact migration',
    'Collective Travel Design case study',
    'GoHighLevel travel CRM',
    'GoHighLevel sub-account ownership',
    'GoHighLevel email sending subdomain',
  ],
  authors: [{ name: 'GHL Scale Up Team', url: SITE_URL }],
  creator: 'GHL Scale Up',
  publisher: 'GHL Scale Up',
  alternates: { canonical: PAGE_URL },
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
      'Collective Travel Design GoHighLevel Migration Case Study | GHL Scale Up',
    description:
      'Full GoHighLevel migration for Collective Travel Design — 501 contacts, 10 workflows, A2P approved first submission, and every integration rebuilt in 21 business days.',
    siteName: 'GHL Scale Up',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Collective Travel Design GoHighLevel Account Migration Case Study',
      },
    ],
    publishedTime: '2026-09-01T00:00:00.000Z',
    modifiedTime: '2026-09-15T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
    section: 'Case Studies',
    tags: [
      'GoHighLevel',
      'Account Migration',
      'CRM Rebuild',
      'A2P 10DLC',
      'Travel',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Collective Travel Design GoHighLevel Migration Case Study | GHL Scale Up',
    description:
      'Full GoHighLevel migration — 501 contacts, 10 workflows, A2P approved first submission, in 21 business days.',
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
    'Collective Travel Design GoHighLevel Migration Case Study: Full Account Rebuild in 21 Business Days',
  description:
    'GHL Scale Up migrated Collective Travel Design out of a third-party-controlled GoHighLevel account into her own agency account — 501 contacts re-imported with verified field mapping, 10 trigger-based workflows rebuilt, A2P Brand & Campaign registration approved on first submission, and Square/Google/Slack integrations fully reconfigured.',
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
  datePublished: '2026-09-01',
  dateModified: '2026-09-15',
  articleSection: 'Case Studies',
  keywords:
    'GoHighLevel account migration, GoHighLevel CRM migration, A2P 10DLC registration, GoHighLevel workflow rebuild, Collective Travel Design, travel CRM, GoHighLevel agency account',
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
      name: 'Can a GoHighLevel account be migrated from one agency to another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GoHighLevel has no native one-click account-to-account transfer. A full migration means auditing each asset category in the source account — contacts, calendars, forms, surveys, documents, products, workflows, email templates, pipelines, custom values, tags, sending subdomain, A2P registration, and each third-party integration — then rebuilding them in the destination account. That's the process GHL Scale Up executed for Collective Travel Design across 16 asset categories in 21 business days.",
      },
    },
    {
      '@type': 'Question',
      name: 'What gets lost in a GoHighLevel migration if it is done without proper sequencing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact records imported before their Custom Values and Tags exist silently break every workflow and pipeline rule that references them. The correct sequence — rebuild Custom Values and Tags architecture first, then import contacts, then rebuild workflows against the new tags — is what prevents hidden automation failures after cutover. This is the sequencing GHL Scale Up used in the Collective Travel Design migration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a full GoHighLevel account migration take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full migration of an established account with active automation, compliance registrations, and integrations typically takes 3–6 weeks. Collective Travel Design was completed in 21 business days across five phases: discovery, core asset migration, integrations and compliance, workflow rebuild, and QA/handover.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does A2P 10DLC registration need to be redone when you move GoHighLevel accounts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. A2P (SMS) Brand and Campaign registration is tied to the legal entity and the sending account — it does not follow a sub-account or user across agencies. The new agency account needs its own Brand & Campaign registration approved before SMS automation can send. For Collective Travel Design, GHL Scale Up submitted the registration inside the new account and it was approved on the first submission.",
      },
    },
    {
      '@type': 'Question',
      name: 'What about the email sending subdomain after migration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The email sending subdomain and its DNS records are configured per agency location. After migration, the subdomain has to be recreated in the new account and the DNS records re-verified before email automation will deliver. GHL Scale Up handled the subdomain setup and DNS verification as part of Phase 3 (Integrations & Compliance) in the Collective Travel Design build.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will integrations like Square, Google Calendar, and Slack reconnect automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Each integration is authorized against the specific agency/sub-account it was originally connected in. After migration, each one — Square for payments, Google for calendar sync, Slack for notifications — has to be re-authorized in the new account. All three were fully rebuilt and tested in the Collective Travel Design migration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you know every workflow was rebuilt correctly after a GoHighLevel migration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each workflow in the source account is documented trigger-by-trigger and action-by-action, then rebuilt in the destination account, then internally trigger-tested before being connected to the live pipeline. End-to-end QA at the end of the project re-verifies the full journey from form submission to post-trip review. This two-stage testing is what GHL Scale Up used across all 10 workflows in the Collective Travel Design rebuild.',
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
      name: 'Collective Travel Design GoHighLevel Migration',
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
  name: 'GoHighLevel Account Migration & Full System Rebuild',
  provider: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    url: SITE_URL,
  },
  serviceType:
    'GoHighLevel Account Migration, CRM Rebuild, A2P 10DLC Registration, Workflow Reconstruction, Email Subdomain Setup, Integration Reconnection',
  areaServed: 'US',
  description:
    'Full GoHighLevel account migration for businesses operating on third-party-controlled accounts — audit of 16 asset categories, contact database re-import, workflow rebuild, A2P and email compliance re-registration, and integration reconnection with end-to-end QA before handover.',
};

/* ============================================================
   PAGE Server Component
   ============================================================ */
export default function CollectiveTravelMigrationCaseStudyPage() {
  return (
    <>
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

      {/* Visible Breadcrumbs */}
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
              Collective Travel Design Migration
            </li>
          </ol>
        </div>
      </nav>

      <CaseStudyContent />
    </>
  );
}