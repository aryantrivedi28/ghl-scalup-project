// app/blog/ghl-ai-workflows-lead-response/page.tsx
import { Metadata } from 'next';
import GHLAIWorkflowsClient from './client';

export const metadata: Metadata = {
  title: 'GHL AI Workflows to Respond to Leads in Under 10 Seconds | GHL Scale Up',
  description: 'Build an AI-powered lead response system that qualifies, books, and follows up automatically. Complete guide to GHL AI workflows.',
  keywords: 'GoHighLevel AI workflows, GHL automation, AI lead response, GHL chatbot, AI voice agent, GHL workflow automation, lead qualification automation',
  openGraph: {
    title: 'GHL AI Workflows to Respond to Leads in Under 10 Seconds',
    description: 'Build an AI-powered lead response system that qualifies, books, and follows up automatically. Transform your lead response time.',
    type: 'article',
    publishedTime: '2026-04-01T00:00:00Z',
    authors: ['GHL Scale Up'],
    tags: ['GoHighLevel', 'AI', 'Automation'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-ai-workflows-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GHL AI Workflows to Respond to Leads in Under 10 Seconds',
    description: 'Build an AI-powered lead response system that qualifies, books, and follows up automatically.',
    images: ['https://ghlscaleup.com/images/blog/ghl-ai-workflows-og.jpg'],
  },
};

export default function GHLAIWorkflowsPage() {
  return <GHLAIWorkflowsClient />;
}