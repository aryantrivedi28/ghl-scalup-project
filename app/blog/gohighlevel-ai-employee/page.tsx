import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelAIEmployeeClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel AI Employee: Voice AI, Conversation AI and Workflow AI Explained (2026) | GHL Scale Up',
  description: 'GHL uses \'AI\' to describe 8 different features. 3 are included free, 3 cost extra, 2 are add-ons. This guide covers what each one actually does, what it costs, and which to set up first. Verified from GHL\'s official docs.',
  keywords: 'gohighlevel ai employee, gohighlevel voice ai, gohighlevel conversation ai, gohighlevel ai employee pricing, gohighlevel voice ai pricing, what is gohighlevel ai employee, gohighlevel workflow ai, gohighlevel ai features 2026',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel AI Employee: Voice AI, Conversation AI and Workflow AI Explained (2026)',
    description: '3 features are included free, 3 cost extra. This guide covers what each does, what it costs, and which to set up first.',
    type: 'article',
    publishedTime: '2026-06-13T00:00:00Z',
    modifiedTime: '2026-06-13T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'AI Employee', 'Voice AI', 'Conversation AI', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-ai-employee-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel AI Employee: Voice AI, Conversation AI and Workflow AI Explained',
    description: '3 features included free, 3 cost extra. What each does, what it costs, and which to set up first.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-ai-employee-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-ai-employee',
  },
};

export default function GoHighLevelAIEmployeePage() {
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
            "headline": "GoHighLevel AI Employee: Voice AI, Conversation AI and Workflow AI Explained (2026)",
            "description": "GHL uses 'AI' to describe 8 different features. 3 are included free, 3 cost extra, 2 are add-ons. This guide covers what each one actually does, what it costs, and which to set up first.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-ai-employee-og.jpg",
            "datePublished": "2026-06-13",
            "dateModified": "2026-06-13",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-ai-employee"
            }
          })
        }}
      />
      <GoHighLevelAIEmployeeClient />
    </>
  );
}