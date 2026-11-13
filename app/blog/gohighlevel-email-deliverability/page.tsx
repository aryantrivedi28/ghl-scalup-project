import { Metadata } from 'next';
import Script from 'next/script';
import EmailDeliverabilityClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Email Deliverability: Fix Spam, Warm-Up, Limits',

  description:
    'Emails going to spam or not arriving in GoHighLevel? Diagnose the problem, warm up a domain, understand sending limits and rebuild sender reputation.',

  keywords:
    'gohighlevel email deliverability, gohighlevel emails going to spam, how to improve email deliverability in gohighlevel, gohighlevel emails not delivered, gohighlevel email warm up, gohighlevel email sending limit, gohighlevel sender reputation, does gohighlevel automatically warm up email domains, how many emails can i send through lc email, what happens when i exceed my email sending limit, difference between domain reputation and ip reputation, why do authenticated emails still go to spam, gohighlevel emails sent but not received',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'GoHighLevel Email Deliverability: Fix Spam, Warm-Up, Limits',

    description:
      'Emails going to spam or not arriving in GoHighLevel? Diagnose the problem, warm up a domain, understand sending limits and rebuild sender reputation.',

    type: 'article',

    publishedTime: '2026-11-02T00:00:00Z',

    modifiedTime: '2026-11-02T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Email Deliverability',
      'Troubleshooting',
      'Warm-Up',
      'Sending Limits',
      'Sender Reputation',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-email-deliverability-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Email envelope at a fork between an inbox and a spam folder, for diagnosing GoHighLevel email deliverability problems',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'GoHighLevel Email Deliverability: Fix Spam, Warm-Up, Limits',

    description:
      'Emails going to spam or not arriving in GoHighLevel? Diagnose the problem, warm up a domain, understand sending limits and rebuild sender reputation.',

    images: [
      'https://www.ghlscaleup.com/images/blog/gohighlevel-email-deliverability-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/gohighlevel-email-deliverability',
  },
};

export default function EmailDeliverabilityPage() {
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
              'GoHighLevel Emails Going to Spam? How to Fix Deliverability',

            description:
              'Emails going to spam or not arriving in GoHighLevel? Diagnose the problem, warm up a domain, understand sending limits and rebuild sender reputation.',

            image:
              'https://www.ghlscaleup.com/images/blog/gohighlevel-email-deliverability-og.jpg',

            datePublished: '2026-11-02',
            dateModified: '2026-11-02',

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

            articleSection: 'Email Deliverability',

            keywords: [
              'gohighlevel email deliverability',
              'gohighlevel emails going to spam',
              'how to improve email deliverability in gohighlevel',
              'gohighlevel emails not delivered',
              'gohighlevel email warm up',
              'gohighlevel email sending limit',
              'gohighlevel sender reputation',
              'does gohighlevel automatically warm up email domains',
              'how many emails can i send through lc email',
              'what happens when i exceed my email sending limit',
              'difference between domain reputation and ip reputation',
              'why do authenticated emails still go to spam',
              'gohighlevel emails sent but not received',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/gohighlevel-email-deliverability',
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
                name: 'Does GoHighLevel guarantee email deliverability?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. HighLevel says authentication is necessary but not sufficient, and no provider can promise inbox placement.',
                },
              },

              {
                '@type': 'Question',
                name: 'How do I improve email deliverability in GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Authenticate a domain you own, send only to opted-in and validated contacts, control volume, keep complaints and bounces low, and monitor weekly.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does GoHighLevel automatically warm up email domains?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sometimes. New verified dedicated domains can enter the fixed-stage warm-up automatically where available, and an automated warm-up is in beta for approved users. Existing domains need to be enabled manually.',
                },
              },

              {
                '@type': 'Question',
                name: 'What is the daily email sending limit in GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on your account group, domain type and stage. Documented figures include 25,000 per day on a shared LC Email domain after the first week, and up to 550,000 on a dedicated one.',
                },
              },

              {
                '@type': 'Question',
                name: 'Are LC Email and custom SMTP limits different?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. With custom SMTP your provider sets the limits, and dedicated domain features are not available.',
                },
              },

              {
                '@type': 'Question',
                name: 'What is the difference between domain and IP reputation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Domain reputation follows your sending domain. IP reputation follows the sending address, which is shared on LC Email unless you buy a dedicated IP.',
                },
              },

              {
                '@type': 'Question',
                name: 'How do I check my sender reputation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use Postmaster Tools for Gmail, SNDS if you have a dedicated IP, MXToolbox for blacklists, and your delivery statistics. No tool covers every provider.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can emails go to spam when SPF, DKIM and DMARC pass?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Passing authentication does not stop filtering based on reputation, complaints, list quality or content.',
                },
              },

              {
                '@type': 'Question',
                name: 'What should I check if emails show as sent but are not received?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Look at that message's status for a bounce, failure or rejection, then check spam and other folders, then verification and limit banners.",
                },
              },

              {
                '@type': 'Question',
                name: 'How often should I clean my email list?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's spam page suggests at least every 6 to 12 months, and suppressing contacts with no engagement for 90 or more days.",
                },
              },
            ],
          }),
        }}
      />

      <EmailDeliverabilityClient />
    </>
  );
}