import { Metadata } from 'next';
import Script from 'next/script';
import HowToSetUpEmailClient from './client';

export const metadata: Metadata = {
  title: 'How to Set Up Email in GoHighLevel (LC Email vs SMTP)',

  description:
    'Choose between LC Email and custom SMTP, line up DNS access and sender details, follow the right order of work, and check readiness before you send.',

  keywords:
    'how to set up email in GoHighLevel, GoHighLevel email setup, LC Email setup, LC Email vs custom SMTP, GoHighLevel email setup checklist, set up email for a new GoHighLevel sub-account',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'How to Set Up Email in GoHighLevel (LC Email vs SMTP)',

    description:
      'Choose between LC Email and custom SMTP, line up DNS access and sender details, follow the right order of work, and check readiness before you send.',

    type: 'article',

    publishedTime: '2026-10-28T00:00:00Z',

    modifiedTime: '2026-10-28T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Email Setup',
      'LC Email',
      'SMTP',
      'Mailgun',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/how-to-set-up-email-in-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Set Up Email in GoHighLevel: A Setup Roadmap',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'How to Set Up Email in GoHighLevel (LC Email vs SMTP)',

    description:
      'Choose between LC Email and custom SMTP, line up DNS access and sender details, follow the right order of work, and check readiness before you send.',

    images: [
      'https://www.ghlscaleup.com/images/blog/how-to-set-up-email-in-gohighlevel-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/how-to-set-up-email-in-gohighlevel',
  },
};

export default function HowToSetUpEmailPage() {
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
              'How to Set Up Email in GoHighLevel: A Setup Roadmap',

            description:
              'Choose between LC Email and custom SMTP, line up DNS access and sender details, follow the right order of work, and check readiness before you send.',

            image:
              'https://www.ghlscaleup.com/images/blog/how-to-set-up-email-in-gohighlevel-og.jpg',

            datePublished: '2026-10-28',
            dateModified: '2026-10-28',

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
              'how to set up email in GoHighLevel',
              'GoHighLevel email setup',
              'LC Email setup',
              'LC Email vs custom SMTP',
              'GoHighLevel email setup checklist',
              'set up email for a new GoHighLevel sub-account',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/how-to-set-up-email-in-gohighlevel',
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
                name: 'What do I need before setting up email in GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "At minimum: access to the right account, a choice of sending approach, and your From Name and From Email. If you'll use a dedicated sending domain or your own provider's domain, you also need DNS access (or the person who has it) and a plan for a subdomain.",
                },
              },

              {
                '@type': 'Question',
                name: 'Do I need a sending domain to send email from GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Not to start with the default LC Email setup. HighLevel's LC Email article says it works with minimal setup and that a dedicated sending domain is needed to go beyond the shared daily limit. HighLevel's tracking article also ties email tracking to a dedicated sending domain. If you connect your own provider, that provider's domain requirements apply.",
                },
              },

              {
                '@type': 'Question',
                name: 'What is the difference between LC Email and custom SMTP?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "LC Email is HighLevel's built-in sending service and the default for new accounts. Custom SMTP connects a provider you already use, with credentials from that provider. HighLevel describes SMTP as an advanced use case with best-effort support and limited reporting. A connected Mailgun account is a separate, more fully documented option.",
                },
              },

              {
                '@type': 'Question',
                name: 'What is the difference between a sending domain and a website domain?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A sending domain (usually a subdomain) is what your emails are sent from and uses authentication records. A website or funnel domain points visitors to pages and uses different records. They are connected separately.',
                },
              },

              {
                '@type': 'Question',
                name: 'How do I know if my GoHighLevel email setup is complete?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Use the readiness checklist above. In short: your provider is the one you intended, any domain you added shows as verified, sender details are set and consistent, and you know your limits. Completion still doesn't guarantee inbox placement.",
                },
              },

              {
                '@type': 'Question',
                name: 'What should I do if my domain does not verify?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Check the status and allow time (HighLevel's estimates vary), then follow the troubleshooting guide. If it still fails, contact support.",
                },
              },
            ],
          }),
        }}
      />

      <HowToSetUpEmailClient />
    </>
  );
}