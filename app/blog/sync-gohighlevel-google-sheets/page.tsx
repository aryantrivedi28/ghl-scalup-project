import { Metadata } from 'next';
import Script from 'next/script';
import SyncGHLGoogleSheetsClient from './client';

export const metadata: Metadata = {
  title: 'Sync GoHighLevel Data with Google Sheets: Setup Guide',

  description:
    'Send GoHighLevel contacts, opportunities and appointments to Google Sheets: native action, Zapier, Make or webhook. Setup steps, duplicate fixes, limits.',

  keywords:
    'how to sync GoHighLevel data with Google Sheets, GoHighLevel Google Sheets integration, how to connect GoHighLevel to Google Sheets, send GoHighLevel contacts to Google Sheets, update Google Sheets from GoHighLevel, GoHighLevel Google Sheets webhook, automatically add GoHighLevel leads to Google Sheets, GoHighLevel workflow Google Sheets, GoHighLevel to Google Sheets automation, GoHighLevel Google Sheets duplicate rows, Google Sheets to GoHighLevel',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'Sync GoHighLevel Data with Google Sheets: Setup Guide',

    description:
      'Send GoHighLevel contacts, opportunities and appointments to Google Sheets: native action, Zapier, Make or webhook. Setup steps, duplicate fixes, limits.',

    type: 'article',

    publishedTime: '2026-11-12T00:00:00Z',

    modifiedTime: '2026-11-12T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Google Sheets',
      'Integration',
      'Workflow',
      'Zapier',
      'Make',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/sync-gohighlevel-google-sheets-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel contact record syncing to a Google Sheets row',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'Sync GoHighLevel Data with Google Sheets: Setup Guide',

    description:
      'Send GoHighLevel contacts, opportunities and appointments to Google Sheets: native action, Zapier, Make or webhook. Setup steps, duplicate fixes, limits.',

    images: [
      'https://www.ghlscaleup.com/images/blog/sync-gohighlevel-google-sheets-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/sync-gohighlevel-google-sheets',
  },
};

export default function SyncGHLGoogleSheetsPage() {
  return (
    <>
      {/* Article Schema JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',

            headline:
              'How to Sync GoHighLevel Data with Google Sheets',

            description:
              'Send GoHighLevel contacts, opportunities and appointments to Google Sheets: native action, Zapier, Make or webhook. Setup steps, duplicate fixes, limits.',

            image:
              'https://www.ghlscaleup.com/images/blog/sync-gohighlevel-google-sheets-og.jpg',

            datePublished: '2026-11-12',
            dateModified: '2026-11-12',

            author: {
              '@type': 'Organization',
              name: 'GHL Scale Up Team',
              url: 'https://www.ghlscaleup.com',
            },

            publisher: {
              '@type': 'Organization',
              name: 'GHL Scale Up',

              logo: {
                '@type': 'ImageObject',
                url: 'https://www.ghlscaleup.com/web-app-manifest-192x192.png',
              },
            },

            articleSection: 'Integration',

            keywords: [
              'how to sync GoHighLevel data with Google Sheets',
              'GoHighLevel Google Sheets integration',
              'how to connect GoHighLevel to Google Sheets',
              'send GoHighLevel contacts to Google Sheets',
              'update Google Sheets from GoHighLevel',
              'GoHighLevel Google Sheets webhook',
              'automatically add GoHighLevel leads to Google Sheets',
              'GoHighLevel workflow Google Sheets',
              'GoHighLevel to Google Sheets automation',
              'GoHighLevel Google Sheets duplicate rows',
              'Google Sheets to GoHighLevel',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/sync-gohighlevel-google-sheets',
            },
          }),
        }}
      />

      {/* FAQ Schema JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',

            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can GoHighLevel connect directly to Google Sheets?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. GoHighLevel has a Google Sheets workflow action, documented as a Premium Workflow Action, that can create, look up, update and clear rows. It works from inside a workflow, so GoHighLevel sends data to the sheet. A Google Sheets trigger that starts a workflow was not documented.',
                },
              },

              {
                '@type': 'Question',
                name: 'Do I need Zapier to connect GoHighLevel to Google Sheets?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No for sending GoHighLevel data to a sheet, because the native action exists. Zapier or Make becomes useful when you need Sheets changes to flow back to GoHighLevel, or logic the workflow cannot do.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel update an existing Google Sheets row?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, per the premium action article: look up the row by a column and value, then update that row. Use a stable ID as the lookup column. Confirm the exact action labels in your account.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does the native Google Sheets action cost extra?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It is a premium workflow action. Eligible sub-accounts get 100 free lifetime executions, then standard premium pricing applies unless a Workflow Pro plan covers it. The page does not list the rates. A lookup that finds nothing and creates a row is charged as a separate premium execution.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can I sync Google Sheets changes back to GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Not with a documented native trigger. Zapier and Make can watch a sheet and then add or update contacts and opportunities. Make's Watch Changes trigger only detects edits made by a user in the Sheets app, not script or API changes.",
                },
              },

              {
                '@type': 'Question',
                name: 'How often can the sync run?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Event-based workflows run when the trigger fires. The Scheduler trigger cannot run more than once per hour and does not backfill missed runs. Google Sheets API write quotas also apply for custom setups. No source promises instant sync.',
                },
              },

              {
                '@type': 'Question',
                name: 'How do I stop duplicate rows?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Add a Contact ID or Opportunity ID column, look up that ID before writing, and update when found. Do not use email as the only key, because it can be blank, repeated or changed.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can I connect several GoHighLevel accounts to one Google Sheet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Each sub-account needs its own workflow or scenario writing to the shared sheet, and each needs its own connection. Cross-account sheets are a design choice and were not verified as a built-in feature.',
                },
              },
            ],
          }),
        }}
      />

      <SyncGHLGoogleSheetsClient />
    </>
  );
}