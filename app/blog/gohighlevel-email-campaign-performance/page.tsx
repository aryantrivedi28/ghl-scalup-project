import { Metadata } from 'next';
import Script from 'next/script';
import EmailCampaignPerformanceClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Email Campaign Performance: Track and Improve',

  description:
    'Find your GoHighLevel email stats, read open and click rates without being misled, fix low engagement and A/B test subject lines and content.',

  keywords:
    'gohighlevel email campaign performance, gohighlevel email statistics, gohighlevel ab testing email campaigns, gohighlevel email workflow statistics, are email open rates accurate, how to improve email campaign engagement, where can i see email campaign statistics in gohighlevel, why are people opening my emails but not clicking, does apple mail privacy protection affect email open tracking, can bots inflate email click rates, how many people do i need for an email a/b test, split test email subject lines in highlevel',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'GoHighLevel Email Campaign Performance: Track and Improve',

    description:
      'Find your GoHighLevel email stats, read open and click rates without being misled, fix low engagement and A/B test subject lines and content.',

    type: 'article',

    publishedTime: '2026-11-04T00:00:00Z',

    modifiedTime: '2026-11-04T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Email Marketing',
      'Campaign Performance',
      'A/B Testing',
      'Email Analytics',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-email-campaign-performance-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Funnel of email campaign stages from delivered to converted with a magnifying glass on the weakest step, for tracking GoHighLevel email campaign results',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'GoHighLevel Email Campaign Performance: Track and Improve',

    description:
      'Find your GoHighLevel email stats, read open and click rates without being misled, fix low engagement and A/B test subject lines and content.',

    images: [
      'https://www.ghlscaleup.com/images/blog/gohighlevel-email-campaign-performance-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/gohighlevel-email-campaign-performance',
  },
};

export default function EmailCampaignPerformancePage() {
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
              'How to Track and Improve GoHighLevel Email Campaign Results',

            description:
              'Find your GoHighLevel email stats, read open and click rates without being misled, fix low engagement and A/B test subject lines and content.',

            image:
              'https://www.ghlscaleup.com/images/blog/gohighlevel-email-campaign-performance-og.jpg',

            datePublished: '2026-11-04',
            dateModified: '2026-11-04',

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

            articleSection: 'Email Marketing',

            keywords: [
              'gohighlevel email campaign performance',
              'gohighlevel email statistics',
              'gohighlevel ab testing email campaigns',
              'gohighlevel email workflow statistics',
              'are email open rates accurate',
              'how to improve email campaign engagement',
              'where can i see email campaign statistics in gohighlevel',
              'why are people opening my emails but not clicking',
              'does apple mail privacy protection affect email open tracking',
              'can bots inflate email click rates',
              'how many people do i need for an email a/b test',
              'split test email subject lines in highlevel',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/gohighlevel-email-campaign-performance',
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
                name: 'Where can I see email campaign reports in GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Marketing, then Emails, then Statistics for campaigns. Workflow emails report on the Email action's Statistics panel, and bulk sends under Contacts, Bulk Actions.",
                },
              },

              {
                '@type': 'Question',
                name: 'Does GoHighLevel have email analytics?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. The Statistics dashboard and Settings, Email Services, Email Analytics show delivery and engagement. Full visibility depends on the sending provider.',
                },
              },

              {
                '@type': 'Question',
                name: 'What email metrics should I track?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Delivery first, then unique clicks and your campaign's real outcome. Opens are a secondary signal.",
                },
              },

              {
                '@type': 'Question',
                name: 'What is a good email open rate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'There is no reliable universal number. Compare against your own recent campaigns.',
                },
              },

              {
                '@type': 'Question',
                name: 'Why are people opening my emails but not clicking?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Possible causes include machine opens, broken or untracked links, no clear call to action, too many links, a mismatch between subject and content, or the wrong audience.',
                },
              },

              {
                '@type': 'Question',
                name: 'Are email open rates accurate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Not precisely. Apple's Mail Privacy Protection and other tools can register opens no person triggered, and image blocking can hide real ones.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can bots inflate email click rates?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'They can. Security scanners may follow links. Look for clicks seconds after delivery and for clicks without matching outcomes.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can I A/B test subject lines in GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, in an email campaign through the A/B testing tab, with up to six subject lines and a winner chosen by unique open rate or unique click rate.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does GoHighLevel support content A/B testing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, as the Email Content test type. Subject and content cannot be tested together. A workflow A/B Test action covers conversions across paths.',
                },
              },

              {
                '@type': 'Question',
                name: 'How many contacts do I need for an A/B test?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's pages say at least 40 contacts or at least 10 per variation. That lets the test run. It does not make the result reliable.",
                },
              },

              {
                '@type': 'Question',
                name: 'How long should I run an email A/B test?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HighLevel allows 30 minutes to 24 hours for a campaign test. The right length depends on how quickly your audience responds.',
                },
              },

              {
                '@type': 'Question',
                name: 'What should I test first?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The element nearest your weakest metric, one change at a time. Subject line for opens, call to action for clicks.',
                },
              },
            ],
          }),
        }}
      />

      <EmailCampaignPerformanceClient />
    </>
  );
}