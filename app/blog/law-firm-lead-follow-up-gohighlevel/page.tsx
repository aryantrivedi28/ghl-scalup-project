import { Metadata } from 'next';
import Script from 'next/script';
import LawFirmLeadFollowUpClient from './client';

export const metadata: Metadata = {
  title: 'Law Firm Lead Follow-Up With GoHighLevel: Step-by-Step',

  description:
    'Build a law firm lead follow-up process in GoHighLevel: missed-call text-back, reply-aware sequences, consultation booking, reminders, testing and metrics.',

  keywords:
    'law firm lead follow-up, law firm lead follow-up automation, automated follow-up for legal leads, law firm consultation booking automation, GoHighLevel law firm automation, law firm missed-call text back, reduce law firm consultation no-shows, law firm appointment reminders',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'Law Firm Lead Follow-Up With GoHighLevel: Step-by-Step',

    description:
      'Build a law firm lead follow-up process in GoHighLevel: missed-call text-back, reply-aware sequences, consultation booking, reminders, testing and metrics.',

    type: 'article',

    publishedTime: '2026-10-23T00:00:00Z',

    modifiedTime: '2026-10-23T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Law Firm',
      'Lead Follow-Up',
      'Consultation Booking',
      'GoHighLevel law firm automation',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/law-firm-lead-follow-up-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Inquiry-to-consultation flow diagram for law firms, with highlighted boxes marking human responsibilities and decision diamonds where automation stops and a person takes over',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'Law Firm Lead Follow-Up With GoHighLevel: Step-by-Step',

    description:
      'Build a law firm lead follow-up process in GoHighLevel: missed-call text-back, reply-aware sequences, consultation booking, reminders, testing and metrics.',

    images: [
      'https://www.ghlscaleup.com/images/blog/law-firm-lead-follow-up-gohighlevel-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/law-firm-lead-follow-up-gohighlevel',
  },
};

export default function LawFirmLeadFollowUpPage() {
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
              'Law Firm Lead Follow-Up With GoHighLevel: Inquiry to Consultation',

            description:
              'Build a law firm lead follow-up process in GoHighLevel: missed-call text-back, reply-aware sequences, consultation booking, reminders, testing and metrics.',

            image:
              'https://www.ghlscaleup.com/images/blog/law-firm-lead-follow-up-gohighlevel-og.jpg',

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
              'law firm lead follow-up',
              'law firm lead follow-up automation',
              'automated follow-up for legal leads',
              'law firm consultation booking automation',
              'GoHighLevel law firm automation',
              'law firm missed-call text back',
              'reduce law firm consultation no-shows',
              'law firm appointment reminders',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/law-firm-lead-follow-up-gohighlevel',
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
                name: 'How quickly should a law firm follow up with a new inquiry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'There is no universal rule. The Hennessey study found a median of 13 minutes among firms that responded, but that is a description, not a standard. Decide what your team can reliably achieve and automate an acknowledgment.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel text back a caller when nobody answers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, with Missed Call Text Back, subject to an SMS-eligible and registered number. It does not alert staff by itself.',
                },
              },

              {
                '@type': 'Question',
                name: 'How do I stop follow-up messages when someone replies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Turn on Stop on Response for the workflow, and add checks for staff messages and bookings. Stop on Response covers replies to that workflow's messages.",
                },
              },

              {
                '@type': 'Question',
                name: 'What happens if a prospect reschedules?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HighLevel treats a rescheduled appointment as a new one and the contact re-enters from the beginning of an appointment-based workflow. Plan for that.',
                },
              },

              {
                '@type': 'Question',
                name: 'Will reminders stop if an appointment is cancelled?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Calendar notifications are sent on cancellation, but you should test that reminders stop. Do not assume.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can AI follow up with leads for a law firm?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can handle administrative steps in configured channels. It should not give legal advice or decide acceptance, and its behavior needs testing.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does GoHighLevel guarantee compliance for text messages?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Compliance depends on your jurisdiction, consent practices and configuration.',
                },
              },

              {
                '@type': 'Question',
                name: 'Which metrics should a law firm track?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'First-response time, contact rate, booking rate, show rate and no-show rate, defined consistently.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does this replace my intake staff?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. It handles acknowledgment and reminders. People review inquiries and make decisions.',
                },
              },
            ],
          }),
        }}
      />

      <LawFirmLeadFollowUpClient />
    </>
  );
}