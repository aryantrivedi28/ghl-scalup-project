import { Metadata } from 'next';
import CreateSnapshotClient from './client';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'How to Create a GoHighLevel Snapshot (2026 Guide)',
  description: 'Build, deploy, and sell GoHighLevel Snapshots. Reduce client onboarding from 40 hours to under 2 hours. Step-by-step guide.',
  keywords: 'how to create a GoHighLevel snapshot, what is a GoHighLevel snapshot, GoHighLevel snapshot tutorial, GoHighLevel snapshot deploy to sub-account, GHL agency setup, GoHighLevel template sub-account',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Create a GoHighLevel Snapshot to Onboard Clients Faster (2026)',
    description: 'Learn what\'s included in a GoHighLevel Snapshot, how to create one in 6 steps, and how to deploy it to client sub-accounts in minutes. Save 8–40 hours per client onboarding.',
    type: 'article',
    publishedTime: '2026-05-08T00:00:00Z',
    modifiedTime: '2026-05-08T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Snapshot', 'Client Onboarding', 'GHL Agency', 'Snapshots'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-snapshot-guide-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Create a GoHighLevel Snapshot to Onboard Clients Faster (2026)',
    description: 'Learn what\'s included in a GoHighLevel Snapshot, how to create one, and how to deploy it to client sub-accounts in minutes.',
    images: ['https://ghlscaleup.com/images/blog/ghl-snapshot-guide-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/how-to-create-gohighlevel-snapshot',
  },
};

export default function CreateSnapshotPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Create and Use a GoHighLevel Snapshot to Onboard Clients Faster (2026)",
            "description": "A GoHighLevel Snapshot is a reusable template of an entire sub-account setup — funnels, workflows, pipelines, and more. Learn what's included, how to create one in 5 steps, and how to deploy it to client accounts in minutes.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-snapshot-og.jpg",
            "datePublished": "2026-05-08",
            "dateModified": "2026-05-08",
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
              "@id": "https://www.ghlscaleup.com/blog/how-to-create-gohighlevel-snapshot"
            }
          })
        }}
      />
      <CreateSnapshotClient />;
    </>
  )

}