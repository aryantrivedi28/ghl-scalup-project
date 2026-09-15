// app/case-studies/gohighlevel-ai-automation-customer-management-marketing-agency/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CaseStudyContent from './CaseStudyContent';

const SITE_URL = 'https://www.ghlscaleup.com';
const PAGE_URL = `${SITE_URL}/case-studies/gohighlevel-ai-automation-customer-management-marketing-agency`;
const OG_IMAGE = `${SITE_URL}/case-study/capviax-ghl-ai-automation-og.jpeg`;

/* ============================================================
   METADATA Primary SEO signals
   ============================================================ */
export const metadata: Metadata = {
  title:
    'GoHighLevel AI Automation Case Study: Capviax | 70% Less Manual Work | GHL Scale Up',
  description:
    'See how GHL Scale Up built Capviax a complete GoHighLevel agency system with AI lead response, centralized customer management, and automated email & SMS campaigns cutting manual operational workload by 70%.',
  keywords: [
    'GoHighLevel agency system',
    'GoHighLevel AI automation',
    'AI lead response GoHighLevel',
    'GoHighLevel customer management',
    'GoHighLevel email automation',
    'GoHighLevel SMS automation',
    'marketing agency CRM',
    'GoHighLevel agency workflows',
    'GoHighLevel AI-powered workflows',
    'Capviax case study',
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
      'GoHighLevel AI Automation Case Study: Capviax | 70% Less Manual Work',
    description:
      'How GHL Scale Up built Capviax a complete GoHighLevel agency system with AI-powered lead response, centralized customer management, and automated campaigns cutting manual workload by 70%.',
    siteName: 'GHL Scale Up',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Capviax GoHighLevel AI Automation Case Study Marketing Agency System Build',
      },
    ],
    publishedTime: '2026-08-01T00:00:00.000Z',
    modifiedTime: '2026-08-15T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
    section: 'Case Studies',
    tags: [
      'GoHighLevel',
      'AI Automation',
      'Marketing Agency',
      'Customer Management',
      'Email & SMS Automation',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'GoHighLevel AI Automation Case Study: Capviax | 70% Less Manual Work',
    description:
      'How we built a complete GoHighLevel agency system with AI-powered workflows for Capviax 70% reduction in manual operational workload.',
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
    'GoHighLevel AI Automation Case Study: How GHL Scale Up Cut Manual Workload by 70% for a Marketing Agency',
  description:
    "A performance marketing agency was relying on disconnected tools and manual workflows to manage leads, clients, and communication. GHL Scale Up designed and implemented a complete GoHighLevel agency system with AI-powered workflows, centralizing customer management and automating lead response, scheduling, and follow-ups reducing manual operational workload by 70%.",
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
    'GoHighLevel agency system, AI lead response, customer management, email automation, SMS automation, marketing agency CRM, GoHighLevel AI automation, Capviax',
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
      name: 'How can a marketing agency reduce manual workload using GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "By centralizing lead and client management inside GoHighLevel and building out pipelines, workflows, and triggers around the agency's actual processes, then layering AI-powered automation on top for lead response, scheduling, and follow-ups. Capviax reduced manual operational workload by 70% using this approach.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is an AI-powered workflow in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI-powered workflow in GoHighLevel uses automation and AI tools to handle tasks like responding to new leads instantly, booking appointments, and sending follow-up messages without a team member manually initiating each step.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI lead response work in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a new lead enters the system through a form, survey, or ad an AI-powered workflow can respond immediately, qualify the lead through conversation, and route it to the appropriate pipeline stage or team member, removing the delay of manual response.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a centralized customer management system inside GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It's a structured setup inside GoHighLevel built around custom pipelines, tags, and workflows that tracks every lead and client from first contact through onboarding and ongoing service, replacing the need for separate spreadsheets or disconnected tools.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel automate both email and SMS follow-ups for client retention?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. GoHighLevel supports automated, triggered email and SMS sequences that can be built around a lead's or client's stage in the pipeline, keeping nurturing and retention communication consistent without manual sending.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is GoHighLevel suitable for marketing agencies managing high lead volume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when the account is properly built out for agency-scale operations with dedicated pipelines, automated lead routing, and AI-powered response workflows GoHighLevel can handle significantly higher lead and client volume than a manually managed setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a full GoHighLevel automation system for an agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Timelines depend on the complexity of the agency's existing processes and how many pipelines, workflows, and integrations are required, but a full agency system build typically starts with mapping current processes before building pipelines, automations, and AI workflows from the ground up.",
      },
    },
    {
      '@type': 'Question',
      name: 'What causes agencies to rely on manual processes instead of automation in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This usually happens when a GoHighLevel account is set up with default or minimal configuration rather than being built around the agency's specific lead management, onboarding, and retention workflows, leaving teams to fill the gaps manually.",
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
      name: 'GoHighLevel AI Automation Capviax',
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
  name: 'GoHighLevel AI Automation & Customer Management System for Marketing Agencies',
  provider: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    url: SITE_URL,
  },
  serviceType:
    'GoHighLevel Agency System Build, AI-Powered Lead Response, Centralized Customer Management, Email & SMS Campaign Automation',
  areaServed: 'US',
  description:
    'Complete GoHighLevel agency system build for marketing agencies: pipelines, workflows, triggers, AI-powered lead response, centralized customer management, and automated email & SMS campaigns.',
};

/* ============================================================
   PAGE Server Component
   ============================================================ */
export default function AIAutomationCaseStudyPage() {
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
              AI Automation Capviax
            </li>
          </ol>
        </div>
      </nav>

      <CaseStudyContent />
    </>
  );
}