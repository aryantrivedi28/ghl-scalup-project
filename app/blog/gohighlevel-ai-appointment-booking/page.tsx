import { Metadata } from 'next';
import Script from 'next/script';
import AIAppointmentBookingClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel AI Appointment Booking: Setup Guide (2026)',

  description:
    'Learn how GoHighLevel Voice AI and Conversation AI book appointments from your calendar, what to set up first, where bookings fail, and what to verify.',

  keywords:
    'how to automate appointment booking with GoHighLevel, GoHighLevel AI appointment booking, GoHighLevel Voice AI appointment booking, GoHighLevel Conversation AI appointment booking, Voice AI vs Conversation AI GoHighLevel, AI agent calendar booking, GoHighLevel AI agent not booking appointments',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'GoHighLevel AI Appointment Booking: Setup Guide (2026)',

    description:
      'Learn how GoHighLevel Voice AI and Conversation AI book appointments from your calendar, what to set up first, where bookings fail, and what to verify.',

    type: 'article',

    publishedTime: '2026-11-03T00:00:00Z',

    modifiedTime: '2026-11-03T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'AI',
      'Voice AI',
      'Conversation AI',
      'Appointment Booking',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-ai-appointment-booking-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Voice and chat AI agents booking one open slot on a shared calendar',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'GoHighLevel AI Appointment Booking: Setup Guide (2026)',

    description:
      'Learn how GoHighLevel Voice AI and Conversation AI book appointments from your calendar, what to set up first, where bookings fail, and what to verify.',

    images: [
      'https://www.ghlscaleup.com/images/blog/gohighlevel-ai-appointment-booking-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/gohighlevel-ai-appointment-booking',
  },
};

export default function AIAppointmentBookingPage() {
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
              'How to Automate Appointment Booking with GoHighLevel AI Agents',

            description:
              'Learn how GoHighLevel Voice AI and Conversation AI book appointments from your calendar, what to set up first, where bookings fail, and what to verify.',

            image:
              'https://www.ghlscaleup.com/images/blog/gohighlevel-ai-appointment-booking-og.jpg',

            datePublished: '2026-11-03',
            dateModified: '2026-11-03',

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

            articleSection: 'AI',

            keywords: [
              'how to automate appointment booking with GoHighLevel',
              'GoHighLevel AI appointment booking',
              'GoHighLevel Voice AI appointment booking',
              'GoHighLevel Conversation AI appointment booking',
              'Voice AI vs Conversation AI GoHighLevel',
              'AI agent calendar booking',
              'GoHighLevel AI agent not booking appointments',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/gohighlevel-ai-appointment-booking',
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
                name: 'Can a GoHighLevel AI agent book appointments by itself?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, when booking is configured. Voice AI uses an "Appointment Booking" action and Conversation AI uses "Appointment Booking" in its bot setup. Both depend on a calendar you have set up first.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can the AI reschedule or cancel an appointment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Conversation AI form-based bots have reschedule and cancel toggles under Bot Goals > Appointment Details, and the article says they need Lab features. For Voice AI, the documentation is conditional ("only if enabled for the agent") and no enabling steps were found, so confirm in your account.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does the AI need access to my calendar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It needs a GoHighLevel calendar selected in the booking setup. If you use an external calendar, the Voice AI article lists a connected external calendar as part of the prerequisites. How sync is configured is outside this article.',
                },
              },

              {
                '@type': 'Question',
                name: 'What happens if someone calls or messages outside business hours?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Two separate settings apply. Voice AI working hours control when the agent takes calls; calendar availability controls which times can be booked. Set both on purpose.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can I use different calendars for different services?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, with Multiple Calendars. Each calendar gets a description and keywords, and a fallback calendar can be set. In Conversation AI this is prompt-based bots only, and Voice AI needs at least two calendars.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does the AI send confirmations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "The calendar's notification settings send booking confirmations. Voice AI post-call emails are a separate feature. Reminders and no-show follow-ups are normally built with workflows.",
                },
              },

              {
                '@type': 'Question',
                name: 'What does the AI do when no slot is available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Voice AI can use fallback behavior: show available services, use a fallback calendar, or trigger another guided action. The documentation does not describe every failure case, so plan a human handoff.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does AI booking cost extra?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "AI usage is billed or allowance-based under the AI Employee plans, and Voice AI has per-minute charges plus separate Phone System charges. Figures were current in HighLevel's pricing article on 10 November 2026 and may change.",
                },
              },
            ],
          }),
        }}
      />

      <AIAppointmentBookingClient />
    </>
  );
}