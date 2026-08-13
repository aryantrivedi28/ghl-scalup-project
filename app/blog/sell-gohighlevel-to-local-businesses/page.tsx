import { Metadata } from 'next';
import Script from 'next/script';
import SellGHLToLocalBusinessesClient from './client';

export const metadata: Metadata = {
  title: 'How to Sell GoHighLevel to Local Businesses (Without Sounding Like You\'re Selling Software) | GHL Scale Up',
  description: 'An honest, tactical guide to selling GoHighLevel to local businesses: what to sell, who to sell it to, how to price it, and how to land your first client without sounding like every other person in their inbox.',
  keywords: 'sell gohighlevel to local businesses, gohighlevel local business sales, how to sell gohighlevel, gohighlevel sales guide, gohighlevel for local businesses, sell gohighlevel services, gohighlevel client acquisition, local business crm sales',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'How to Sell GoHighLevel to Local Businesses (Without Sounding Like You\'re Selling Software)',
    description: 'An honest, tactical guide to selling GoHighLevel to local businesses: what to sell, who to sell it to, how to price it, and how to land your first client without sounding like every other person in their inbox.',
    type: 'article',
    publishedTime: '2026-08-13T00:00:00Z',
    modifiedTime: '2026-08-13T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Sales', 'Local Businesses', 'Agency Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/sell-gohighlevel-to-local-businesses-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'How to Sell GoHighLevel to Local Businesses (Without Sounding Like You\'re Selling Software)',
    description: 'An honest, tactical guide to selling GoHighLevel to local businesses: what to sell, who to sell it to, how to price it, and how to land your first client.',
    images: ['https://www.ghlscaleup.com/images/blog/sell-gohighlevel-to-local-businesses-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/sell-gohighlevel-to-local-businesses',
  },
};

export default function SellGHLToLocalBusinessesPage() {
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
            "headline": "How to Sell GoHighLevel to Local Businesses (Without Sounding Like You're Selling Software)",
            "description": "An honest, tactical guide to selling GoHighLevel to local businesses: what to sell, who to sell it to, how to price it, and how to land your first client without sounding like every other person in their inbox.",
            "image": "https://www.ghlscaleup.com/images/blog/sell-gohighlevel-to-local-businesses-og.jpg",
            "datePublished": "2026-08-13",
            "dateModified": "2026-08-13",
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
              "@id": "https://www.ghlscaleup.com/blog/sell-gohighlevel-to-local-businesses"
            }
          })
        }}
      />

      {/* HowTo Schema JSON-LD */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Sell GoHighLevel to Local Businesses",
            "description": "A step-by-step guide to selling GoHighLevel to local businesses, including what to sell, how to position it, pricing, and landing your first client.",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Choose your business model",
                "text": "Decide whether to offer done-for-you marketing, CRM and automation services, productized niche systems, or white-label SaaS."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Pick a specific niche",
                "text": "Choose a specific type of business you understand, that relies on leads, calls, and appointments, and can afford $100 to $500+ per month for software."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Find the problem before you pitch",
                "text": "Diagnose the business's actual pain points: call their number, test their form response, check their reviews, and identify where they're losing money."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Start with one painful problem",
                "text": "Begin with a single sharp offer like missed-call text-back, automated lead follow-up, or appointment booking with reminders."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Package the outcome, not the features",
                "text": "Describe what the business owner will experience: \"Every new lead gets contacted within minutes\" instead of \"CRM with workflows.\""
              },
              {
                "@type": "HowToStep",
                "position": 6,
                "name": "Price on value, not cost",
                "text": "Anchor pricing to the client's economics: if the system recovers a few jobs a month, the fee pays for itself. Charge setup + monthly recurring."
              },
              {
                "@type": "HowToStep",
                "position": 7,
                "name": "Find clients through proximity and audits",
                "text": "Start with people you know or are one introduction away from. Send personalised video audits showing the gap you found and how you'd fix it."
              },
              {
                "@type": "HowToStep",
                "position": 8,
                "name": "Diagnose, don't pitch",
                "text": "In sales conversations, ask questions to understand their customer journey. Map the leaks before prescribing a fix."
              },
              {
                "@type": "HowToStep",
                "position": 9,
                "name": "Deliver and retain",
                "text": "Build the system correctly, test it, launch it, and show clients regularly what the system did this month to keep them paying."
              }
            ]
          })
        }}
      />
      <SellGHLToLocalBusinessesClient />
    </>
  );
}