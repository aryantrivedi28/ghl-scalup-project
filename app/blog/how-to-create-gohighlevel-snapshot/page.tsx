import { Metadata } from 'next';
import CreateSnapshotClient from './client';

export const metadata: Metadata = {
  title: 'How to Create a GoHighLevel Snapshot to Onboard Clients Faster (2026) | GHL Scaleup',
  description: 'A GoHighLevel Snapshot is a reusable template of an entire sub-account setup — funnels, workflows, pipelines, and more. Learn what\'s included, how to create one in 5 steps, and how to deploy it to client accounts in minutes.',
  keywords: 'how to create a GoHighLevel snapshot, what is a GoHighLevel snapshot, GoHighLevel snapshot tutorial, GoHighLevel snapshot deploy to sub-account, GHL agency setup, GoHighLevel template sub-account',
  authors: [{ name: 'GHL Scaleup Team' }],
  openGraph: {
    title: 'How to Create a GoHighLevel Snapshot to Onboard Clients Faster (2026)',
    description: 'Learn what\'s included in a GoHighLevel Snapshot, how to create one in 6 steps, and how to deploy it to client sub-accounts in minutes. Save 8–40 hours per client onboarding.',
    type: 'article',
    publishedTime: '2026-05-08T00:00:00Z',
    modifiedTime: '2026-05-08T00:00:00Z',
    authors: ['GHL Scaleup Team'],
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
  return <CreateSnapshotClient />;
}