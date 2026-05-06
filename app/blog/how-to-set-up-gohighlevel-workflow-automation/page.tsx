// app/blog/how-to-set-up-gohighlevel-workflow-automation/page.tsx
import { Metadata } from 'next';
import WorkflowAutomationClient from './client';

export const metadata: Metadata = {
  title: 'How to Set Up GoHighLevel Workflow Automation for Beginners (Step-by-Step 2026) | GHL Scale Up',
  description: 'A step-by-step beginner\'s guide to GoHighLevel workflow automation. Learn what workflows are, how triggers and actions work, and how to build your first GHL automation in under 30 minutes.',
  keywords: 'GoHighLevel workflow automation, GHL workflow tutorial, how to set up GHL automation, beginner workflow guide, GoHighLevel triggers and actions',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Set Up GoHighLevel Workflow Automation for Beginners (Step-by-Step 2026)',
    description: 'A step-by-step beginner\'s guide to GoHighLevel workflow automation. Learn what workflows are, how triggers and actions work, and how to build your first GHL automation.',
    type: 'article',
    publishedTime: '2026-05-06T00:00:00Z',
    modifiedTime: '2026-05-06T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Workflow Automation', 'GHL Tutorial', 'Marketing Automation'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/ghl-workflow-automation-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Set Up GoHighLevel Workflow Automation for Beginners',
    description: 'Step-by-step beginner\'s guide to GHL workflow automation. Build your first automation in under 30 minutes.',
    images: ['https://ghlscaleup.com/images/blog/ghl-workflow-automation-og.jpg'],
  },
  alternates: {
    canonical: 'https://ghlscaleup.com/blog/how-to-set-up-gohighlevel-workflow-automation',
  },
};

export default function WorkflowAutomationPage() {
  return <WorkflowAutomationClient />;
}