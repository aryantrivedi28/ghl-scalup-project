// app/blog/ghl-pipeline-management/page.tsx
import { Metadata } from 'next';
import GHLPipelineManagementClient from './client';

export const metadata: Metadata = {
  title: 'GHL Pipeline Management: From Lead to Closed Deal | GHL Scale Up',
  description: 'Master the art of pipeline management in GoHighLevel to track and convert more leads. Complete guide to building effective sales pipelines.',
  keywords: 'GoHighLevel pipeline, GHL CRM pipeline, sales pipeline management, lead tracking, pipeline stages, deal management, GHL automation',
  openGraph: {
    title: 'GHL Pipeline Management: From Lead to Closed Deal',
    description: 'Master the art of pipeline management in GoHighLevel to track and convert more leads. Complete guide to building effective sales pipelines.',
    type: 'article',
    publishedTime: '2026-03-15T00:00:00Z',
    authors: ['GHL Scale Up'],
    tags: ['GoHighLevel', 'Pipeline Management', 'Sales', 'CRM'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-pipeline-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GHL Pipeline Management: From Lead to Closed Deal',
    description: 'Master the art of pipeline management in GoHighLevel to track and convert more leads.',
    images: ['https://ghlscaleup.com/images/blog/ghl-pipeline-og.jpg'],
  },
};

export default function GHLPipelineManagementPage() {
  return <GHLPipelineManagementClient />;
}