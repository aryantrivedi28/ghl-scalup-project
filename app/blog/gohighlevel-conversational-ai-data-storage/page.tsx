import { Metadata } from 'next';
import ConversationAIDataStorageClient from './client';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Does GoHighLevel Conversation AI Save Data to Your CRM? (2026 Answer) | GHL Scaleup',
  description: 'GoHighLevel Conversation AI does save some data to your CRM — but not all of it, and not automatically. Here\'s exactly what gets captured, what doesn\'t, and how to build a clean data capture system that actually works.',
  keywords: 'GoHighLevel conversational AI data storage, does GoHighLevel conversation AI save data to CRM, GHL conversation AI CRM data, GoHighLevel AI contact fields, GHL AI bot not saving data, how to capture lead data from GHL conversation AI',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Does GoHighLevel Conversation AI Save Data to Your CRM? (2026 Answer)',
    description: 'Here\'s exactly what gets captured by GHL Conversation AI, what doesn\'t, and how to build a clean data capture system that actually works.',
    type: 'article',
    publishedTime: '2026-05-12T00:00:00Z',
    modifiedTime: '2026-05-12T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Conversation AI', 'CRM Data', 'AI Chatbot', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-conversational-ai-data-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Does GoHighLevel Conversation AI Save Data to Your CRM?',
    description: 'What gets captured, what doesn\'t, and how to fix your GHL Conversation AI data setup.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-conversational-ai-data-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-conversational-ai-data-storage',
  },
};

export default function ConversationAIDataStoragePage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Does GoHighLevel Conversation AI Save Data to Your CRM? (2026 Answer)",
            "description": "GoHighLevel Conversation AI does save some data to your CRM — but not all of it, and not automatically. Here's exactly what gets captured, what doesn't, and how to build a clean data capture system that actually works.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-conversational-ai-data-og.jpg",
            "datePublished": "2026-05-12",
            "dateModified": "2026-05-12",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-conversational-ai-data-storage"
            }
          })
        }}
      />
      <ConversationAIDataStorageClient />;
    </>
  )

}