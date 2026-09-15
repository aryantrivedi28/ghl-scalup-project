// app/case-studies/gohighlevel-website-setup-automation-fix/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CaseStudyContent from './CaseStudyContent';

const SITE_URL = 'https://www.ghlscaleup.com';
const PAGE_URL = `${SITE_URL}/case-studies/gohighlevel-website-setup-automation-fix`;
const OG_IMAGE = `${SITE_URL}/case-study/ghl-website-automation-fix-og.jpeg`;

/* ============================================================
   METADATA — Primary SEO signals
   ============================================================ */
export const metadata: Metadata = {
  title:
    'GoHighLevel Website & Automation Case Study: Service Business Rebuild',
  description:
    "See how GHL Scale Up rebuilt a service business's GoHighLevel system with a custom website, survey fixes, email workflow repairs and automated follow-up.",
  keywords: [
    'GoHighLevel website development',
    'GoHighLevel automation fix',
    'GoHighLevel survey troubleshooting',
    'GoHighLevel email workflow repair',
    'GoHighLevel client follow-up automation',
    'GoHighLevel service business CRM',
    'GoHighLevel website and CRM integration',
    'GoHighLevel broken automation repair',
    'GoHighLevel campaign optimization',
    'GoHighLevel case study',
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
      'GoHighLevel Website & Automation Case Study: Service Business Rebuild',
    description:
      'How GHL Scale Up rebuilt a service business GoHighLevel system — custom native website, survey diagnostics, email workflow repair, campaign optimization, and automated follow-up.',
    siteName: 'GHL Scale Up',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Website & Automation Fix Case Study — Service Business Rebuild',
      },
    ],
    publishedTime: '2026-08-01T00:00:00.000Z',
    modifiedTime: '2026-08-15T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
    section: 'Case Studies',
    tags: [
      'GoHighLevel',
      'Website Development',
      'Automation Fix',
      'Service Business',
      'Email Workflow',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'GoHighLevel Website & Automation Case Study: Service Business Rebuild',
    description:
      'How we rebuilt a broken GoHighLevel system — custom website, survey fixes, email workflow repair, and stabilized automation.',
    images: [OG_IMAGE],
    creator: '@ghlscaleup',
  },
  category: 'Case Study',
};

/* ============================================================
   JSON-LD — Article Schema
   ============================================================ */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  headline:
    'GoHighLevel Website Setup & Automation Fix Case Study: Rebuilding a Broken System for a Service-Based Business',
  description:
    "A service-based business had adopted GoHighLevel but was suffering from broken surveys, unreliable email automation, and inconsistent campaign delivery — with no dedicated GoHighLevel website supporting lead capture. GHL Scale Up diagnosed the broken systems, built a custom GoHighLevel website, and rebuilt the automation from the ground up.",
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
    'GoHighLevel website development, GoHighLevel automation fix, survey troubleshooting, email workflow repair, client follow-up automation, GoHighLevel service business rebuild',
};

/* ============================================================
   JSON-LD — FAQ Schema (matches visible FAQ exactly)
   ============================================================ */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why are my GoHighLevel surveys not submitting or triggering workflows correctly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This is usually caused by incorrect custom field mapping, conditional logic errors within the survey builder, or a workflow trigger that isn't correctly linked to the survey's submission event. A full audit of the survey's field mapping and its connected workflow is the fastest way to isolate the cause.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my GoHighLevel email automation not sending or sending inconsistently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common causes include conflicting workflow triggers, contacts entering a workflow at the wrong step, workflow 'if/else' branches with missing exit paths, or account-level sending limits. Reviewing the workflow's trigger and action history in GoHighLevel usually reveals where contacts are getting stuck.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why are my GoHighLevel email campaigns not reaching inboxes consistently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inconsistent campaign delivery is typically tied to sending domain authentication (SPF, DKIM, DMARC not fully configured), a damaged sender reputation, or campaign sending speed that triggers spam filtering. Deliverability issues need to be diagnosed at the domain and account level, not just the campaign level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I build my website directly inside GoHighLevel or connect an external website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Building the website natively inside GoHighLevel keeps lead capture, forms, and tracking connected to the CRM without relying on third-party integrations or webhooks that can fail silently. For service-based businesses that depend on GoHighLevel for client communication, this reduces the risk of losing leads or data between systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to fix a broken GoHighLevel automation system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines vary depending on how many workflows, surveys, and integrations are involved, but the process generally starts with a full account audit, followed by targeted fixes to the highest-impact broken workflows before a full rebuild of sign-up and follow-up sequences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a GoHighLevel automation audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A GoHighLevel automation audit typically reviews workflow trigger and exit logic, custom field and tag mapping, survey and form configuration, email sending domain authentication, and campaign delivery settings to identify where the system is breaking down.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GoHighLevel handle both website hosting and CRM automation for a service business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GoHighLevel supports building and hosting a full website alongside CRM, workflow automation, and campaign tools, which allows a service-based business to run lead capture, client onboarding, and follow-up communication from a single connected system.',
      },
    },
  ],
};

/* ============================================================
   JSON-LD — Breadcrumb Schema
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
      name: 'GoHighLevel Website & Automation Fix',
      item: PAGE_URL,
    },
  ],
};

/* ============================================================
   JSON-LD — Service Schema
   ============================================================ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GoHighLevel Website Development & Automation Repair for Service Businesses',
  provider: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    url: SITE_URL,
  },
  serviceType:
    'GoHighLevel Website Build, GoHighLevel Automation Audit, Survey Diagnostics, Email Workflow Rebuild, Campaign Optimization',
  areaServed: 'US',
  description:
    'Full GoHighLevel rebuild for service-based businesses: native GoHighLevel website development, survey and form diagnostics, email workflow repair, campaign optimization, and custom sign-up/follow-up automation.',
};

/* ============================================================
   PAGE — Server Component
   ============================================================ */
export default function WebsiteSetupAutomationFixCaseStudyPage() {
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
              Website Setup & Automation Fix
            </li>
          </ol>
        </div>
      </nav>

      <CaseStudyContent />
    </>
  );
}