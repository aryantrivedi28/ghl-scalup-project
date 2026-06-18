import { Metadata } from 'next';
import Script from 'next/script';
import SaaSConsolidationPlaybookClient from './client';

export const metadata: Metadata = {
  title: 'SaaS Consolidation Using GoHighLevel: The Agency Playbook (2026) | GHL Scale Up',
  description: 'How agencies turn tool sprawl into a packaged SaaS offering using GoHighLevel: pricing tiers, the retainer-to-recurring shift, and real MRR scaling examples.',
  keywords: 'SaaS consolidation GoHighLevel, agency SaaS playbook 2026, GoHighLevel agency pricing strategy, retainer vs SaaS pricing agency, how to package GoHighLevel for clients, agency recurring revenue GoHighLevel, GoHighLevel SaaS Mode vs Agency Plan',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'SaaS Consolidation Using GoHighLevel: The Agency Playbook (2026)',
    description: 'How agencies turn tool sprawl into a packaged SaaS offering: pricing tiers, the retainer-to-recurring shift, and real MRR scaling examples.',
    type: 'article',
    publishedTime: '2026-06-12T00:00:00Z',
    modifiedTime: '2026-06-12T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'SaaS Consolidation', 'Agency Playbook', 'Recurring Revenue', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/saas-consolidation-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'SaaS Consolidation Using GoHighLevel: The Agency Playbook',
    description: 'Pricing tiers, retainer-to-recurring shift, and real MRR scaling examples.',
    images: ['https://www.ghlscaleup.com/images/blog/saas-consolidation-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/saas-consolidation-gohighlevel-agency-playbook',
  },
};

export default function SaaSConsolidationPlaybookPage() {
  return (
    <>
      {/* Article Schema JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "SaaS Consolidation Using GoHighLevel: The Agency Playbook (2026)",
            "description": "How agencies turn tool sprawl into a packaged SaaS offering using GoHighLevel: pricing tiers, the retainer-to-recurring shift, and real MRR scaling examples.",
            "image": "https://www.ghlscaleup.com/images/blog/saas-consolidation-og.jpg",
            "datePublished": "2026-06-12",
            "dateModified": "2026-06-12",
            "author": {
              "@type": "Organization",
              "name": "GHL Scale Up Team",
              "url": "https://www.ghlscaleup.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GHL Scale Up",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ghlscaleup.com/web-app-manifest-192x192.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.ghlscaleup.com/blog/saas-consolidation-gohighlevel-agency-playbook"
            }
          })
        }}
      />
      <SaaSConsolidationPlaybookClient />
    </>
  );
}