import { Metadata } from 'next';
import Script from 'next/script';
import HowToUseGoHighLevelClient from './client';

export const metadata: Metadata = {
  title: 'How to Use GoHighLevel: Complete Beginner\'s Tutorial (2026) | GHL Scale Up',
  description: 'New to GoHighLevel? This beginner\'s tutorial walks you through account setup, CRM, pipelines, funnels, automations, and calendar step by step — in plain English. Most people are functional in 1 to 2 weeks. Updated June 2026.',
  keywords: 'how to use gohighlevel, gohighlevel tutorial, gohighlevel tutorial for beginners, gohighlevel setup, how to set up gohighlevel, gohighlevel for beginners, gohighlevel getting started, gohighlevel dashboard explained',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Use GoHighLevel: Complete Beginner\'s Tutorial (2026)',
    description: 'New to GoHighLevel? This beginner\'s tutorial walks you through account setup, CRM, pipelines, funnels, automations, and calendar step by step — in plain English. Most people are functional in 1 to 2 weeks.',
    type: 'article',
    publishedTime: '2026-06-14T00:00:00Z',
    modifiedTime: '2026-06-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Tutorial', 'Beginners', 'CRM', 'Setup', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/how-to-use-gohighlevel-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Use GoHighLevel: Complete Beginner\'s Tutorial (2026)',
    description: 'New to GoHighLevel? This beginner\'s tutorial walks you through account setup, CRM, pipelines, funnels, automations, and calendar step by step — in plain English.',
    images: ['https://www.ghlscaleup.com/images/blog/how-to-use-gohighlevel-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/how-to-use-gohighlevel',
  },
};

export default function HowToUseGoHighLevelPage() {
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
            "headline": "How to Use GoHighLevel: Complete Beginner's Tutorial (2026)",
            "description": "New to GoHighLevel? This beginner's tutorial walks you through account setup, CRM, pipelines, funnels, automations, and calendar step by step — in plain English. Most people are functional in 1 to 2 weeks.",
            "image": "https://www.ghlscaleup.com/images/blog/how-to-use-gohighlevel-og.jpg",
            "datePublished": "2026-06-14",
            "dateModified": "2026-06-14",
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
              "@id": "https://www.ghlscaleup.com/blog/how-to-use-gohighlevel"
            }
          })
        }}
      />

      {/* HowTo Schema JSON-LD (for the 8 setup steps) */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Set Up GoHighLevel: Complete Beginner's Setup Guide",
            "description": "Step-by-step guide to setting up your GoHighLevel account including business profile, email domain, phone system, calendar, team members, Stripe, and Launchpad checklist.",
            "totalTime": "PT4H",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Set up your business profile",
                "text": "Go to Settings and complete your business name, address, time zone, and business hours. Upload your logo."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Configure your email sending domain",
                "text": "Go to Settings, then Email Services. Connect a subdomain (for example, mail.yourbusiness.com) as your sending domain. Add the DNS records at your domain registrar."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Set up your phone system",
                "text": "Go to Settings, then Phone Numbers. Use GHL's built-in LC Phone or connect your Twilio account."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Choose your email provider",
                "text": "Start with LC Email (GHL's built-in) or Mailgun for high-volume sending."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Create your booking calendar",
                "text": "Go to Calendars and create a calendar with your availability, meeting duration, and buffer times."
              },
              {
                "@type": "HowToStep",
                "position": 6,
                "name": "Add team members",
                "text": "Go to Settings and Team Members to add team members and assign permission levels."
              },
              {
                "@type": "HowToStep",
                "position": 7,
                "name": "Connect Stripe for payments",
                "text": "Go to Settings and Integrations to connect your Stripe account for processing payments through funnels."
              },
              {
                "@type": "HowToStep",
                "position": 8,
                "name": "Complete the Launchpad checklist",
                "text": "Return to the Launchpad and verify all critical items are checked off before building anything else."
              }
            ]
          })
        }}
      />
      <HowToUseGoHighLevelClient />
    </>
  );
}