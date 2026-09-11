import { Metadata } from 'next';
import Script from 'next/script';
import WhatIsGHLMigrationClient from './client';

export const metadata: Metadata = {
  title: 'What Is GoHighLevel Migration? A Beginner\'s Guide (2026)',
  description: 'GoHighLevel migration explained in plain English: what actually moves, why it\'s not just a data import, and how to know if you need one.',
  keywords: 'what is gohighlevel migration, what is ghl migration, gohighlevel migration explained, ghl migration meaning, why migrate to gohighlevel, is ghl migration just importing contacts, does everything transfer automatically gohighlevel, types of gohighlevel migration',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'What Is GoHighLevel Migration? A Beginner\'s Guide (2026)',
    description: 'GoHighLevel migration explained in plain English: what actually moves, why it\'s not just a data import, and how to know if you need one.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Migration', 'CRM Migration', 'Beginner Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/what-is-ghl-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'What Is GoHighLevel Migration? A Beginner\'s Guide (2026)',
    description: 'GoHighLevel migration explained in plain English: what actually moves, why it\'s not just a data import, and how to know if you need one.',
    images: ['https://www.ghlscaleup.com/images/blog/what-is-ghl-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/what-is-ghl-migration',
  },
};

export default function WhatIsGHLMigrationPage() {
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
            "headline": "What Is GoHighLevel Migration?",
            "description": "GoHighLevel migration is the process of moving a business's CRM, marketing, and automation systems from another platform into GoHighLevel. It is not simply exporting a contact list and importing it somewhere else. Contacts and basic data transfer relatively easily; the workflows, pipelines, and business logic that actually run day-to-day operations generally have to be rebuilt, not copied. Understanding that distinction is the single most important thing to know before you start researching timelines, checklists, or platform-specific steps.",
            "image": "https://www.ghlscaleup.com/images/blog/what-is-ghl-migration-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/what-is-ghl-migration"
            }
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
                "name": "What is GoHighLevel migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GoHighLevel migration is the process of moving a business's CRM data, marketing assets, automation logic, and related systems from another platform into GoHighLevel. Some assets (contacts, basic data) transfer relatively directly; others (workflows, pipelines, integrations) generally need to be rebuilt or reconfigured rather than copied."
                }
              },
              {
                "@type": "Question",
                "name": "Is GHL migration just importing contacts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Importing contacts is one relatively mechanical part of a migration. The larger and more time-consuming part is rebuilding the automations, pipelines, and business logic that acted on that data in your previous platform — this is usually where the real migration effort goes."
                }
              },
              {
                "@type": "Question",
                "name": "Does everything transfer automatically when migrating to GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, and how much depends heavily on your source platform. As a general pattern, contact data and basic fields transfer via export/import; workflows and automation logic generally require manual rebuilding. Some platforms have partial native import tools for specific content types — for example, GoHighLevel has a native Kajabi Course Importer that automatically brings over published-lesson video, image, and text content, though quizzes, assignments, and automation logic still require manual work. Always check the platform-specific guide for your exact situation rather than assuming a blanket answer."
                }
              },
              {
                "@type": "Question",
                "name": "What platforms can migrate to GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GoHighLevel can receive migrations from most CRM, marketing automation, and funnel-building platforms. GHL Scale Up has dedicated guides for HubSpot, ActiveCampaign, ClickFunnels, Kajabi, Salesforce, Zoho, Keap, and Mailchimp specifically."
                }
              },
              {
                "@type": "Question",
                "name": "Is migrating to GoHighLevel difficult?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your current setup's complexity — the number of active automations, integrations, and how customized your data structure is — far more than on the platform name alone. A simple setup with few automations is straightforward; a highly customized enterprise system with deep integrations is genuinely complex. See the migration timeline guide for a fuller breakdown of what drives that difference."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between data migration and CRM migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Data migration refers specifically to moving information — contacts, fields, tags. CRM migration (or system migration) is the broader process that also includes rebuilding the workflows, pipelines, and automation logic that operate on that data. A complete GoHighLevel migration involves both, and the system side is typically the larger effort of the two."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a GoHighLevel migration service, or can I do it myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A simple migration with a small contact list and few or no automations is a reasonable DIY project. Once you have several hundred contacts and active automations, professional support becomes more valuable, primarily because a broken automation can fail silently for weeks before anyone notices — something a structured, tested migration process is built to catch."
                }
              }
            ]
          })
        }}
      />
      <WhatIsGHLMigrationClient />
    </>
  );
}