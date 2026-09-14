import { Metadata } from 'next';
import Script from 'next/script';
import MailchimpToGoHighLevelMigrationClient from './client';

export const metadata: Metadata = {
  title:
    'Mailchimp to GoHighLevel Migration Guide (2026): Data, Automations, Deliverability',

  description:
    'How to migrate from Mailchimp to GoHighLevel: audience export, tags and merge fields, automation rebuild, subscription status, and how to protect deliverability during cutover.',

  keywords: [
    'mailchimp to gohighlevel migration',
    'mailchimp alternative gohighlevel',
    'export mailchimp to ghl',
    'mailchimp vs gohighlevel',
    'mailchimp audience to ghl',
    'mailchimp automations to ghl',
    'mailchimp tags gohighlevel',
    'mailchimp email templates ghl',
    'mailchimp migration',
    'mailchimp to ghl',
    'mailchimp contacts to gohighlevel',
    'mailchimp customer journeys gohighlevel',
  ],

  authors: [
    {
      name: 'GHL Scale Up Team',
    },
  ],

  openGraph: {
    title:
      'Mailchimp to GoHighLevel Migration Guide (2026): Data, Automations, Deliverability',

    description:
      'How to migrate from Mailchimp to GoHighLevel: audience export, tags and merge fields, automation rebuild, subscription status, and how to protect deliverability during cutover.',

    type: 'article',

    publishedTime: '2026-09-01T00:00:00Z',
    modifiedTime: '2026-09-01T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'Mailchimp to GoHighLevel',
      'Mailchimp Migration',
      'Email Marketing Migration',
      'GoHighLevel',
      'GHL Migration',
      'Deliverability',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/mailchimp-to-gohighlevel-migration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mailchimp to GoHighLevel Migration Guide',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title:
      'Mailchimp to GoHighLevel Migration Guide (2026): Data, Automations, Deliverability',

    description:
      'How to migrate from Mailchimp to GoHighLevel: audience export, tags and merge fields, automation rebuild, subscription status, and how to protect deliverability during cutover.',

    images: [
      'https://www.ghlscaleup.com/images/blog/mailchimp-to-gohighlevel-migration-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/mailchimp-to-gohighlevel-migration',
  },
};

const articleUrl =
  'https://www.ghlscaleup.com/blog/mailchimp-to-gohighlevel-migration';

const articleImage =
  'https://www.ghlscaleup.com/images/blog/mailchimp-to-gohighlevel-migration-og.jpg';

export default function MailchimpToGoHighLevelMigrationPage() {
  return (
    <>
      {/* 
        ============================================================
        Article Schema
        ============================================================
      */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',

            headline:
              'Mailchimp to GoHighLevel Migration: Complete 2026 Guide',

            description:
              'How to migrate from Mailchimp to GoHighLevel: audience export, tags and merge fields, automation rebuild, subscription status, and how to protect deliverability during cutover.',

            image: [articleImage],

            datePublished: '2026-09-01',
            dateModified: '2026-09-01',

            author: {
              '@type': 'Organization',
              name: 'GHL Scale Up Team',
              url: 'https://www.ghlscaleup.com',
            },

            publisher: {
              '@type': 'Organization',
              name: 'GHL Scale Up',
              url: 'https://www.ghlscaleup.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.ghlscaleup.com/web-app-manifest-192x192.png',
              },
            },

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': articleUrl,
            },
          }),
        }}
      />

      {/*
        ============================================================
        HowTo Schema
        Based directly on the migration workflow in the article.
        ============================================================
      */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',

            name: 'How to Migrate from Mailchimp to GoHighLevel',

            description:
              'Step-by-step guide to migrating from Mailchimp to GoHighLevel including audience export, tags and merge fields, subscription status, automation rebuild, email template migration, deliverability setup, and parallel cutover.',

            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Export each Mailchimp audience separately',
                text:
                  'In Mailchimp, go to Audience, select the audience, open Manage Audience, and select Export Audience. Repeat the process for every audience.',
              },

              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Export tags, merge fields, and subscription status',
                text:
                  'Include tags, merge fields, and subscription status in the Mailchimp export. Check the downloaded CSV for data quality before importing.',
              },

              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Recreate custom fields and tags in GoHighLevel',
                text:
                  'Create matching GHL custom fields for Mailchimp merge fields before importing contacts. Mailchimp tags can be imported as GHL tags.',
              },

              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Import contacts into GoHighLevel',
                text:
                  'Import the Mailchimp CSV into GHL, map the columns to the appropriate contact fields, and preserve subscription status. Mark unsubscribed and cleaned contacts as suppressed from marketing.',
              },

              {
                '@type': 'HowToStep',
                position: 5,
                name: 'Recreate segments and groups',
                text:
                  'Recreate Mailchimp segments as GHL Smart Lists using the same filter logic. Migrate Mailchimp groups as GHL tags or custom fields depending on the required structure.',
              },

              {
                '@type': 'HowToStep',
                position: 6,
                name: 'Rebuild Mailchimp automations in GHL',
                text:
                  'Document each Mailchimp Customer Journey or automation, including its trigger, steps, wait times, branching logic, and exit condition. Then manually rebuild the same intent using GHL workflows, triggers, actions, and If/Else conditions.',
              },

              {
                '@type': 'HowToStep',
                position: 7,
                name: 'Migrate email templates',
                text:
                  "Copy the HTML source of active Mailchimp templates into GHL's HTML template editor and translate Mailchimp merge fields into GHL syntax. Preview and test each template.",
              },

              {
                '@type': 'HowToStep',
                position: 8,
                name: 'Rebuild forms and integrations',
                text:
                  'Audit every website form, landing page, store integration, and other connection currently sending data to Mailchimp. Rebuild or reconnect those destinations in GHL before completing the migration.',
              },

              {
                '@type': 'HowToStep',
                position: 9,
                name: 'Authenticate the new sending domain',
                text:
                  'Configure SPF, DKIM, and DMARC for the new sending domain before sending. Use a different subdomain than the one used by Mailchimp during the transition to avoid conflicting DNS records.',
              },

              {
                '@type': 'HowToStep',
                position: 10,
                name: 'Gradually increase sending volume',
                text:
                  'Start with your most engaged contacts, increase volume gradually over a couple of weeks, and monitor bounce rates, spam complaints, and open rates.',
              },

              {
                '@type': 'HowToStep',
                position: 11,
                name: 'Run Mailchimp and GHL in parallel',
                text:
                  'Run both platforms in parallel for approximately one to two weeks while validating contacts, workflows, templates, forms, integrations, and sending performance before completing the cutover.',
              },

              {
                '@type': 'HowToStep',
                position: 12,
                name: 'Keep Mailchimp as an archive',
                text:
                  'Keep Mailchimp accessible as a read-only archive for historical campaign data and as a fallback during the transition. Cancel it only after GHL has been fully validated.',
              },
            ],
          }),
        }}
      />

      <MailchimpToGoHighLevelMigrationClient />
    </>
  );
}