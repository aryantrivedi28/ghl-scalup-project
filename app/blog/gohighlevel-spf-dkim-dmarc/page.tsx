import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelSpfDkimDmarcClient from './client';

export const metadata: Metadata = {
  title: 'How to Set Up SPF, DKIM & DMARC in GoHighLevel and Test It',

  description:
    "What SPF, DKIM and DMARC do, where GoHighLevel users get the right values, and how to check both your DNS records and a real message's headers.",

  keywords:
    'GoHighLevel SPF DKIM DMARC, GoHighLevel email authentication, GoHighLevel SPF record, GoHighLevel DKIM record, GoHighLevel DMARC record, how to check SPF DKIM DMARC, SPF DKIM DMARC explained, how to set up SPF DKIM DMARC for GoHighLevel, GoHighLevel email DNS records, does GoHighLevel require DMARC, can I have more than one SPF record, does passing SPF DKIM DMARC guarantee inbox placement, alignment, selector, Return-Path, Authentication-Results, aggregate report',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'How to Set Up SPF, DKIM & DMARC in GoHighLevel and Test It',

    description:
      "What SPF, DKIM and DMARC do, where GoHighLevel users get the right values, and how to check both your DNS records and a real message's headers.",

    type: 'article',

    publishedTime: '2026-10-30T00:00:00Z',

    modifiedTime: '2026-10-30T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Email Setup',
      'SPF',
      'DKIM',
      'DMARC',
      'Email Authentication',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-spf-dkim-dmarc-og.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Set Up SPF, DKIM and DMARC in GoHighLevel',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'How to Set Up SPF, DKIM & DMARC in GoHighLevel and Test It',

    description:
      "What SPF, DKIM and DMARC do, where GoHighLevel users get the right values, and how to check both your DNS records and a real message's headers.",

    images: [
      'https://www.ghlscaleup.com/images/blog/gohighlevel-spf-dkim-dmarc-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/gohighlevel-spf-dkim-dmarc',
  },
};

export default function GoHighLevelSpfDkimDmarcPage() {
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
              'How to Set Up SPF, DKIM and DMARC in GoHighLevel',

            description:
              "What SPF, DKIM and DMARC do, where GoHighLevel users get the right values, and how to check both your DNS records and a real message's headers.",

            image:
              'https://www.ghlscaleup.com/images/blog/gohighlevel-spf-dkim-dmarc-og.jpg',

            datePublished: '2026-10-30',
            dateModified: '2026-10-30',

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

            articleSection: 'Email Setup',

            keywords: [
              'GoHighLevel SPF DKIM DMARC',
              'GoHighLevel email authentication',
              'GoHighLevel SPF record',
              'GoHighLevel DKIM record',
              'GoHighLevel DMARC record',
              'how to check SPF DKIM DMARC',
              'SPF DKIM DMARC explained',
              'how to set up SPF DKIM DMARC for GoHighLevel',
              'GoHighLevel email DNS records',
              'does GoHighLevel require DMARC',
              'can I have more than one SPF record',
              'does passing SPF DKIM DMARC guarantee inbox placement',
              'alignment',
              'selector',
              'Return-Path',
              'Authentication-Results',
              'aggregate report',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/gohighlevel-spf-dkim-dmarc',
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
                name: 'Does GoHighLevel require SPF and DKIM?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "For a dedicated LC Email sending domain, HighLevel's records screen includes SPF and DKIM records, and the domain is verified against them. For custom SMTP or your own Mailgun, the requirements are set by that provider. For default shared LC Email, the pages I read describe nothing for you to publish.",
                },
              },
              {
                '@type': 'Question',
                name: 'Does GoHighLevel require a DMARC record?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's pages disagree. One lists DMARC among the domain records, while another set of pages lists five records and no DMARC. Google and Yahoo require DMARC from bulk senders. Check what your own records screen shows.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can I have more than one SPF record?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Multiple SPF records at the same name are treated as an error. Combine them into one.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens if SPF or DKIM fails?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Receivers may treat the message with more suspicion, junk it or reject it. What happens depends on the receiver and, for DMARC, on your policy and alignment.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between SPF and DKIM?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'SPF checks whether the sending server is authorized for the envelope-sender domain. DKIM checks a cryptographic signature on the message.',
                },
              },
              {
                '@type': 'Question',
                name: 'If SPF and DKIM pass, will DMARC pass?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not necessarily. DMARC also needs a passing result to align with the From domain.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does DMARC improve deliverability?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not by itself. It supports authentication and gives you reports. Bulk senders to Gmail and Yahoo are required to have it.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which DMARC policy should I use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'That depends on your senders and your monitoring. The standard describes starting with p=none and fixing legitimate failures before enforcing.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I check whether my records work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Look them up in DNS, and check the Authentication-Results line in a real test email.',
                },
              },
              {
                '@type': 'Question',
                name: "What if my HighLevel domain won't verify?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'That is a verification problem, not an authentication one. See (Planned link, not yet published: how to troubleshoot a sending domain that will not verify).',
                },
              },
            ],
          }),
        }}
      />

      <GoHighLevelSpfDkimDmarcClient />
    </>
  );
}