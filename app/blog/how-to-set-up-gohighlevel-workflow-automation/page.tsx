// app/blog/how-to-set-up-gohighlevel-workflow-automation/page.tsx
import { Metadata } from 'next';
import WorkflowAutomationClient from './client';
import Script from 'next/script';

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
    images: [{ url: '/images/blog/ghl-workflow-automation-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Set Up GoHighLevel Workflow Automation for Beginners',
    description: 'Step-by-step beginner\'s guide to GHL workflow automation. Build your first automation in under 30 minutes.',
    images: ['/images/blog/ghl-workflow-automation-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/how-to-set-up-gohighlevel-workflow-automation',
  },
};

export default function WorkflowAutomationPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Set Up GoHighLevel Workflow Automation for Beginners (Step-by-Step 2026)",
            "description": "A step-by-step beginner's guide to GoHighLevel workflow automation. Learn what workflows are, how triggers and actions work, and build your first GHL automation in under 30 minutes.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-workflow-og.jpg",
            "datePublished": "2026-05-06",
            "dateModified": "2026-05-06",
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
              "@id": "https://www.ghlscaleup.com/blog/how-to-set-up-gohighlevel-workflow-automation"
            }
          })
        }}
      />
      <WorkflowAutomationClient />
    </>
  );
}