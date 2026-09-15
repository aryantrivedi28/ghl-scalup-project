// app/case-studies/gohighlevel-parent-saas-multi-crm-automation-energy-platform/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CaseStudyContent from './CaseStudyContent';

const SITE_URL = 'https://www.ghlscaleup.com';
const PAGE_URL = `${SITE_URL}/case-studies/gohighlevel-parent-saas-multi-crm-automation-energy-platform`;
const OG_IMAGE = `${SITE_URL}/case-study/riverenergia-parent-saas-og.jpeg`;

/* ============================================================
   METADATA Primary SEO signals
   ============================================================ */
export const metadata: Metadata = {
  title:
    'RiverEnergia GoHighLevel Case Study: Parent SaaS & Multi-Brand CRM',
  description:
    'See how GHL Scale Up built RiverEnergia a parent SaaS structure in GoHighLevel for multiple CRM brands, using reusable snapshots, integrations and AI automation.',
  keywords: [
    'GoHighLevel SaaS architecture',
    'GoHighLevel parent SaaS',
    'multi brand CRM',
    'GoHighLevel sub accounts',
    'GoHighLevel reusable snapshots',
    'GoHighLevel multi-vertical CRM',
    'CRM automation',
    'AI lead response',
    'GoHighLevel SaaS mode',
    'GoHighLevel white label CRM',
    'RiverEnergia case study',
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
      'RiverEnergia GoHighLevel Case Study: Parent SaaS & Multi-Brand CRM',
    description:
      'See how GHL Scale Up built RiverEnergia a parent SaaS structure in GoHighLevel for multiple CRM brands, using reusable snapshots, integrations and AI automation.',
    siteName: 'GHL Scale Up',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'RiverEnergia GoHighLevel Parent SaaS Case Study Multi-Brand CRM Architecture',
      },
    ],
    publishedTime: '2026-08-01T00:00:00.000Z',
    modifiedTime: '2026-08-15T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
    section: 'Case Studies',
    tags: [
      'GoHighLevel',
      'Parent SaaS',
      'Multi-Brand CRM',
      'SaaS Mode',
      'AI Automation',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'RiverEnergia GoHighLevel Case Study: Parent SaaS & Multi-Brand CRM',
    description:
      'See how GHL Scale Up built RiverEnergia a parent SaaS structure in GoHighLevel for multiple CRM brands, using reusable snapshots, integrations and AI automation.',
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
    'RiverEnergia GoHighLevel Case Study: Parent SaaS Architecture for Multi-Brand CRM Automation',
  description:
    "GHL Scale Up architected a GoHighLevel parent SaaS structure letting RiverEnergia manage multiple CRM brands under one branded ecosystem with reusable snapshots, domain and branding configuration, Stripe/Twilio/Mailgun integrations, standardized CRM pipelines, and AI-driven automation cutting lead response to under 1 minute.",
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
    'GoHighLevel SaaS architecture, multi brand CRM, GoHighLevel sub accounts, reusable snapshots, CRM automation, AI lead response, GoHighLevel parent SaaS, RiverEnergia',
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
      name: 'How do I manage multiple brands or business verticals in one GoHighLevel account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Use GoHighLevel's parent/sub-account structure: a central agency-level account governs multiple branded sub-accounts, each with its own domain and branding, while automations, snapshots, and billing are controlled centrally. This is the approach GHL Scale Up used to give RiverEnergia's energy and legal-finance brands separate client-facing identities on shared infrastructure.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between GoHighLevel sub-accounts and SaaS Mode?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard sub-account is an isolated workspace for one client or brand inside your agency account. SaaS Mode builds on that by adding white-label billing and self-serve subscription management, letting an agency package GoHighLevel access as its own branded software product. A parent SaaS structure like RiverConnect uses this model to run multiple CRM brands from one governed account.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do GoHighLevel snapshots reduce sub-account setup time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A snapshot saves a sub-account's pipelines, workflows, and automations as a reusable template that can be deployed into a new sub-account, instead of rebuilding that configuration manually every time. GHL Scale Up used this to deploy new CRM brands for RiverEnergia faster and more consistently than building each one from scratch.",
      },
    },
    {
      '@type': 'Question',
      name: 'How can I integrate Stripe, Twilio, and Mailgun with GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoHighLevel supports native and API-based integrations with Stripe for payment processing, Twilio for SMS and voice, and Mailgun for email delivery, so these can be connected once at the account level and used across every automation and sub-account built on top of it which is how they were configured in the RiverEnergia build.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I reduce lead response time using GoHighLevel automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Routing new leads into an AI-driven workflow one that responds instantly across the channel the lead came in on (chat, SMS, email, or missed call) is what removes the manual delay between a lead arriving and a business acknowledging it. In RiverEnergia's case, this kind of AI-driven automation is what brought lead response time down to under 1 minute.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can one GoHighLevel account run more than one CRM brand without mixing client data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes because each sub-account under a parent SaaS structure is a separate workspace with its own contacts, pipelines, and automations, brands don't share client data even though they're managed from one central account.",
      },
    },
    {
      '@type': 'Question',
      name: 'What CRM pipeline stages should a multi-vertical business use in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There's no single required structure, but a clear, sequential pipeline that every brand uses consistently such as Lead → Offer → Contract → Active → Closed, as built for RiverEnergia gives leadership one shared way to read deal status across every business line instead of interpreting each brand's pipeline differently.",
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
      name: 'RiverEnergia GoHighLevel Parent SaaS',
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
  name: 'GoHighLevel Parent SaaS Architecture & Multi-Brand CRM Setup',
  provider: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    url: SITE_URL,
  },
  serviceType:
    'GoHighLevel SaaS Mode Setup, Multi-Brand CRM Architecture, GoHighLevel Snapshots, AI-Driven CRM Automation',
  areaServed: 'US',
  description:
    'Parent SaaS architecture inside GoHighLevel for businesses running multiple brands or verticals reusable snapshots, sub-account deployment, centralized Stripe/Twilio/Mailgun integrations, standardized pipelines, and AI-driven lead response automation.',
};

/* ============================================================
   PAGE Server Component
   ============================================================ */
export default function ParentSaaSCaseStudyPage() {
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
              RiverEnergia Parent SaaS
            </li>
          </ol>
        </div>
      </nav>

      <CaseStudyContent />
    </>
  );
}