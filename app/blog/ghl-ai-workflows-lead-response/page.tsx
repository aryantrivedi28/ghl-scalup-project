// app/blog/ghl-ai-workflows-lead-response/page.tsx
import { Metadata } from 'next';
import GHLAIWorkflowsClient from './client';

export const metadata: Metadata = {
  title: 'GHL AI Workflows to Respond to Leads in Under 10 Seconds (2026)',
  description: 'How to build a GoHighLevel AI workflow that qualifies leads, books appointments, and follows up in under 10 seconds. Step-by-step guide with real examples.',
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
  alternates: {
    canonical: '/blog/ghl-ai-workflows-lead-response'
  }
};

export default function GHLAIWorkflowsPage() {
  return <GHLAIWorkflowsClient />;
}