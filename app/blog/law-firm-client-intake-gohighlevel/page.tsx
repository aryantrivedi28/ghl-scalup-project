import { Metadata } from 'next';
import Script from 'next/script';
import LawFirmClientIntakeClient from './client';

export const metadata: Metadata = {
  title: 'Law Firm Lead Capture & Client Intake with GoHighLevel',

  description:
    'Build a law firm client intake process in GoHighLevel: capture inquiries, collect the right details, route to staff, handle missed calls and AI, and test it.',

  keywords:
    'law firm client intake, law firm lead capture, client intake automation for law firms, law firm intake workflow, law firm intake forms, law firm CRM, GoHighLevel for law firms, GoHighLevel client intake',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'Law Firm Lead Capture & Client Intake with GoHighLevel',

    description:
      'Build a law firm client intake process in GoHighLevel: capture inquiries, collect the right details, route to staff, handle missed calls and AI, and test it.',

    type: 'article',

    publishedTime: '2026-10-23T00:00:00Z',

    modifiedTime: '2026-10-23T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Law Firm',
      'Client Intake',
      'Lead Capture',
      'GoHighLevel for Law Firms',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/law-firm-client-intake-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Diagram of law firm inquiries from forms, calls and messages flowing into one GoHighLevel contact record and routed to intake staff for review',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'Law Firm Lead Capture & Client Intake with GoHighLevel',

    description:
      'A step-by-step build for capturing inquiries, collecting the right details, routing them to staff and testing the process in GoHighLevel, with the limits a law firm needs to know.',

    images: [
      'https://www.ghlscaleup.com/images/blog/law-firm-client-intake-gohighlevel-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/law-firm-client-intake-gohighlevel',
  },
};

export default function LawFirmClientIntakePage() {
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
              'How Law Firms Can Capture More Leads and Streamline Client Intake with GoHighLevel',

            description:
              'Build a law firm client intake process in GoHighLevel: capture inquiries, collect the right details, route to staff, handle missed calls and AI, and test it.',

            image:
              'https://www.ghlscaleup.com/images/blog/law-firm-client-intake-gohighlevel-og.jpg',

            datePublished: '2026-10-23',
            dateModified: '2026-10-23',

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

            articleSection: 'Law Firms',

            keywords: [
              'law firm client intake',
              'law firm lead capture',
              'client intake automation for law firms',
              'law firm intake workflow',
              'law firm intake forms',
              'law firm CRM',
              'GoHighLevel for law firms',
              'GoHighLevel client intake',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/law-firm-client-intake-gohighlevel',
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
                name: 'What is the difference between lead capture and client intake for a law firm?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Lead capture gets the inquiry into your system. Client intake is the firm's review process afterward, including screening, conflict checks and acceptance.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel be used as a CRM for law firms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, for managing inquiries and communications. It is a general CRM and is not a legal practice management system.',
                },
              },

              {
                '@type': 'Question',
                name: 'How can a law firm capture website inquiries in GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'With a GoHighLevel form on the site, or an external form connected through an integration or webhook. Test with a real submission.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel automate law-firm intake forms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can create or update the contact and start a workflow when a CRM form is submitted. You design the form, fields and rules.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel route leads to different intake staff?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, with workflow conditions and an Assign to User action, including a round-robin option described in HighLevel's documentation. Confirm current options in your account.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel notify a team member when a new inquiry arrives?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, through the Internal Notification action by email, in-app, SMS or WhatsApp. 'Assigned User' only sends if a user is assigned.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel handle missed calls from prospective clients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Missed Call Text Back sends an SMS after a missed call, subject to number eligibility and A2P or toll-free registration. It does not alert staff by itself.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can AI collect initial information for a law firm?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can collect basic contact details and answer approved administrative questions where Conversation AI or Voice AI is available and configured. It must not give legal advice or decide whether to accept a matter.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel perform legal conflict checks?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "We found no such function. Conflict checks belong in the firm's own procedures and legal systems.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel replace a legal practice management system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. It does not provide matter management, trust accounting, time tracking or court deadlines that we could find.',
                },
              },

              {
                '@type': 'Question',
                name: 'How should a law firm protect sensitive information collected through an intake form?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Collect the minimum, avoid sensitive facts on general forms, restrict access, keep sensitive details out of notifications, and review where data is stored and sent.',
                },
              },

              {
                '@type': 'Question',
                name: 'What should a law firm test before launching an automated intake workflow?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Valid and invalid submissions, duplicates, blank fields, assignment and notification, missed calls, after-hours behavior, AI answers and escalations, and failed or repeated runs.',
                },
              },
            ],
          }),
        }}
      />

      <LawFirmClientIntakeClient />
    </>
  );
}