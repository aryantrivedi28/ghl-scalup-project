import { Metadata } from 'next';
import Script from 'next/script';
import ClickFunnelsToGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'ClickFunnels to GoHighLevel Migration: What Breaks & How to Fix It (2026)',
  description: 'What GoHighLevel\'s URL import tool actually does, what breaks (automations, domains, tracking, memberships), and the exact steps to migrate without disrupting a live funnel.',
  keywords: 'clickfunnels to gohighlevel migration, migrate clickfunnels to gohighlevel, clickfunnels to ghl migration guide, how to migrate clickfunnels to gohighlevel, clickfunnels funnel import gohighlevel, clickfunnels contacts export gohighlevel, what breaks migrating clickfunnels to gohighlevel, clickfunnels 1.0 2.0 ghl import, gohighlevel url import tool, clickfunnels membership areas ghl',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'ClickFunnels to GoHighLevel Migration: What Breaks & How to Fix It (2026)',
    description: 'What GoHighLevel\'s URL import tool actually does, what breaks (automations, domains, tracking, memberships), and the exact steps to migrate without disrupting a live funnel.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ClickFunnels', 'Funnel Migration', 'Migration Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/clickfunnels-to-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'ClickFunnels to GoHighLevel Migration: What Breaks & How to Fix It (2026)',
    description: 'What GoHighLevel\'s URL import tool actually does, what breaks, and the exact steps to migrate without disrupting a live funnel.',
    images: ['https://www.ghlscaleup.com/images/blog/clickfunnels-to-ghl-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/clickfunnels-to-gohighlevel-migration',
  },
};

export default function ClickFunnelsToGHLMigrationPage() {
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
            "headline": "How to Migrate from ClickFunnels to GoHighLevel: What Breaks & How to Fix It",
            "description": "If you're running a business on ClickFunnels and thinking about moving to GoHighLevel, the tool that decides how smooth this goes is GHL's URL import feature — and most guides either oversell what it does or barely explain it. This guide covers exactly what it does, what still breaks, and how to move a live funnel without losing leads or revenue.",
            "image": "https://www.ghlscaleup.com/images/blog/clickfunnels-to-ghl-migration-og.jpg",
            "datePublished": "2026-05-14",
            "dateModified": "2026-05-14",
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
              "@id": "https://www.ghlscaleup.com/blog/clickfunnels-to-gohighlevel-migration"
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
            "name": "How to Migrate from ClickFunnels to GoHighLevel",
            "description": "Step-by-step guide to migrating from ClickFunnels to GoHighLevel including URL import tool, funnel step mapping, order bumps, and workflow rebuild.",
            "step": [
              { 
                "@type": "HowToStep", 
                "position": 1, 
                "name": "Audit your ClickFunnels account", 
                "text": "List every active funnel with its purpose and traffic, and document every email sequence and which funnels feed into it." 
              },
              { 
                "@type": "HowToStep", 
                "position": 2, 
                "name": "Export your contacts", 
                "text": "In ClickFunnels, go to Contacts → Export and download a CSV. Clean it by removing duplicates and standardizing phone formats." 
              },
              { 
                "@type": "HowToStep", 
                "position": 3, 
                "name": "Import funnels with the URL import tool", 
                "text": "In your GHL sub-account, go to Sites → Funnels → New Funnel, add a step, and paste the live ClickFunnels page URL. Repeat for each step." 
              },
              { 
                "@type": "HowToStep", 
                "position": 4, 
                "name": "Rebuild order bumps, upsells, and downsells", 
                "text": "Recreate any ClickFunnels order bump or one-click upsell using GHL's native order bump and one-click upsell/downsell features." 
              },
              { 
                "@type": "HowToStep", 
                "position": 5, 
                "name": "Rebuild email and SMS automations as GHL workflows", 
                "text": "For each active ClickFunnels sequence, recreate the trigger and timing in GHL using If/Else conditions for branching logic." 
              },
              { 
                "@type": "HowToStep", 
                "position": 6, 
                "name": "Reconnect payments and tracking", 
                "text": "Connect Stripe to GHL, rebuild order forms, and re-add Facebook Pixel and Google Analytics to each page." 
              },
              { 
                "@type": "HowToStep", 
                "position": 7, 
                "name": "Run in parallel, then cut over the domain", 
                "text": "Keep ClickFunnels active while testing GHL on a staging URL. Update DNS to point to GHL and set up 301 redirects." 
              }
            ]
          })
        }}
      />

      {/* FAQ Schema JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can GoHighLevel import ClickFunnels funnels automatically?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Partially. GHL's URL import tool clones a ClickFunnels page's visual design — copy, images, layout — by entering its live URL, one funnel step at a time, and it works for both ClickFunnels 1.0 and 2.0. It does not import automations, payment integrations, domain settings, tracking, or Membership Areas — those require manual rebuilding."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a ClickFunnels to GoHighLevel migration take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A simple setup with 1–3 funnels takes 1–2 weeks. A standard business with 3–8 funnels takes 2–3 weeks. A complex setup with membership content and 10+ funnels takes 3–6 weeks. The automation rebuild, not the page import, is what drives the timeline."
                }
              },
              {
                "@type": "Question",
                "name": "What breaks when migrating from ClickFunnels to GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Email and SMS sequences, Stripe payment connections, domain DNS settings, tracking pixels, membership area content, and the ClickFunnels affiliate system (Backpack) all need manual rebuilding — none of these transfer through the URL import tool."
                }
              },
              {
                "@type": "Question",
                "name": "Does GoHighLevel have order bumps and upsells like ClickFunnels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. GoHighLevel supports native order bumps on the order form and one-click upsells/downsells using the same Stripe-token mechanic ClickFunnels uses — the customer doesn't re-enter payment details. These have to be rebuilt manually; they don't come through the page importer."
                }
              },
              {
                "@type": "Question",
                "name": "Should I cancel ClickFunnels before finishing the migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Keep ClickFunnels active until every funnel is rebuilt and tested in GHL, sequences are live, domain DNS is updated, and you've run GHL in parallel for at least 1–2 weeks. ClickFunnels offers no post-cancellation grace period — cancelling early takes your live funnels offline immediately."
                }
              }
            ]
          })
        }}
      />
      <ClickFunnelsToGHLMigrationClient />
    </>
  );
}