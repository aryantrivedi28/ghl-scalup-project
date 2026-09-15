// app/case-studies/real-estate-agent-rebuild/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CaseStudyContent from './CaseStudyContent';

const SITE_URL = 'https://www.ghlscaleup.com';
const PAGE_URL = `${SITE_URL}/case-studies/real-estate-agent-rebuild`;
const OG_IMAGE = `${SITE_URL}/case-study/Picture6.jpeg`;

/* ============================================================
   METADATA Primary SEO signals
   ============================================================ */
export const metadata: Metadata = {
  title:
    'Real Estate GoHighLevel Case Study: Rebuild & AI Voice System',
  description:
    "See how GHL Scale Up rebuilt a real estate agent's GoHighLevel account, fixing deliverability, funnels, calendars and CRM, then added three AI voice agents.",
  keywords: [
    'GoHighLevel real estate case study',
    'GoHighLevel account rebuild',
    'GoHighLevel AI voice agents',
    'real estate CRM automation',
    'GoHighLevel deliverability',
    'real estate lead automation',
    'AI voice lead reactivation',
    'A2P 10DLC registration',
    'real estate agent GoHighLevel setup',
    'GoHighLevel for real estate',
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
      'Real Estate GoHighLevel Case Study: Full Account Rebuild & AI Voice System',
    description:
      "Deliverability fixed. Funnels rebuilt. Three AI voice agents added. Real dashboard data: 7,105 attempted calls, 5,471 connected, 97% positive sentiment.",
    siteName: 'GHL Scale Up',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Real Estate Case Study AI Voice Performance Dashboard',
      },
    ],
    publishedTime: '2026-08-01T00:00:00.000Z',
    modifiedTime: '2026-08-15T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
    section: 'Case Studies',
    tags: ['Real Estate', 'GoHighLevel', 'AI Voice', 'CRM Automation'],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Real Estate GoHighLevel Case Study: Rebuild & AI Voice System',
    description:
      'How we rebuilt a real estate agent\'s GoHighLevel account and added 3 AI voice agents 7,105 calls in 17 days.',
    images: [OG_IMAGE],
    creator: '@ghlscaleup',
  },
  category: 'Case Study',
};

/* ============================================================
   JSON-LD STRUCTURED DATA
   ============================================================ */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  headline:
    'Real Estate GoHighLevel Case Study: A Complete Account Rebuild with AI Voice Agents',
  description:
    "A full GoHighLevel rebuild for a U.S. real estate agent deliverability fixed, niche-focused website, rebuilt funnel, working calendars, CRM pipelines, and a three-agent AI voice automation system handling thousands of calls per month.",
  image: [OG_IMAGE, `${SITE_URL}/case-study/Picture1.jpeg`],
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
    'GoHighLevel real estate case study, GoHighLevel account rebuild, AI voice agents, real estate CRM automation, GoHighLevel deliverability, real estate lead automation, AI voice lead reactivation, A2P 10DLC',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do GoHighLevel emails sometimes fail to send?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Emails typically fail when the sending domain lacks proper SPF, DKIM, and DMARC authentication, or when the domain's reputation triggers a rejection from the receiving server. A 'Forbidden' error usually means the domain isn't correctly authenticated to send on the platform's behalf, and needs to be reconfigured and re-verified.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is A2P 10DLC and why does a real estate agent need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A2P 10DLC (Application-to-Person 10-Digit Long Code) is the U.S. carrier registration system that verifies a business before allowing it to send text messages from a standard local number. Real estate agents sending SMS follow-ups, appointment reminders, or missed-call text-backs to U.S. leads need a completed registration, or carriers will filter or block the messages entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an AI voice agent for real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI voice agent is software that answers or places phone calls using a conversational AI model and a natural-sounding voice, following a structured script to qualify leads, answer common questions, and book appointments functioning as a 24/7 front desk or outbound caller for an agent\'s business.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI lead reactivation work for a real estate database?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A reactivation workflow automatically calls contacts who have gone cold typically leads that haven\'t responded in months using an AI voice agent to reopen the conversation, gauge interest, and either book a follow-up or route the contact back into a nurture sequence, all without manual dialing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it legal to use AI for outbound real estate calls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outbound AI and automated calling in the U.S. is subject to consent and do-not-call rules that vary by call type and jurisdiction. Agents should confirm their own compliance requirements (including consent practices for contacts being called) with a qualified professional before scaling outbound AI calling this is general information, not legal advice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What automations should a real estate agent set up first in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instant lead response and missed-call text-back deliver the fastest return, since real estate inquiries are highly time-sensitive. Appointment reminder and no-show follow-up sequences, a review-request automation, and once volume justifies it an AI voice agent for inbound qualification or database reactivation typically follow next.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a GoHighLevel setup cost for a real estate agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Setup costs vary by scope. A full end-to-end rebuild deliverability fixes, website, funnels, calendars, CRM, automations, and AI voice agents is typically a one-time project investment, often paired with an optional ongoing monthly maintenance plan.',
      },
    },
  ],
};

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
      name: 'Real Estate Agent GoHighLevel Rebuild',
      item: PAGE_URL,
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GoHighLevel Account Rebuild for Real Estate Agents',
  provider: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    url: SITE_URL,
  },
  serviceType: 'GoHighLevel CRM Setup, AI Voice Agent Development, Real Estate Automation',
  areaServed: 'US',
  description:
    'End-to-end GoHighLevel rebuild for real estate agents: deliverability and A2P 10DLC fixes, niche-focused website, funnel rebuild, calendar configuration, CRM pipelines, core automations, and a three-agent AI voice system.',
};

/* ============================================================
   PAGE Server Component
   ============================================================ */
export default function RealEstateCaseStudyPage() {
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
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <li>
              <Link
                href="/case-studies"
                className="hover:text-white transition-colors"
              >
                Case Studies
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <li aria-current="page" className="text-white/80 font-medium">
              Real Estate Agent Rebuild
            </li>
          </ol>
        </div>
      </nav>

      <CaseStudyContent />
    </>
  );
}