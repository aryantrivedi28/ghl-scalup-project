import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelEmailDomainNotVerifyingClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Email Domain Not Verifying: Causes and Fixes',

  description:
    'Email domain stuck on pending or unverified in GoHighLevel? Find the failing DNS record, fix it safely, and confirm it, with timing and Cloudflare notes.',

  keywords:
    'gohighlevel email domain not verifying, gohighlevel email domain verification failed, gohighlevel sending domain pending, gohighlevel sending domain not verifying, gohighlevel domain not verifying, how long does gohighlevel domain verification take, gohighlevel dns records not verifying, gohighlevel dns records not detected, gohighlevel domain already pointing to email server, gohighlevel pre-existing record error wildcard, gohighlevel cloudflare sending domain verification, gohighlevel email domain unverified, domain is not allowed to send gohighlevel, gohighlevel mailgun domain not verified, verify dns settings gohighlevel, how to check dns record txt cname mx, how long does dns propagation take, should i delete dns records gohighlevel, gohighlevel spf record not working, dkim not verified',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'GoHighLevel Email Domain Not Verifying: Causes and Fixes',

    description:
      'Email domain stuck on pending or unverified in GoHighLevel? Find the failing DNS record, fix it safely, and confirm it, with timing and Cloudflare notes.',

    type: 'article',

    publishedTime: '2026-10-30T00:00:00Z',

    modifiedTime: '2026-10-30T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Email Setup',
      'DNS',
      'Domain Verification',
      'Cloudflare',
      'LC Email',
      'Mailgun',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-email-domain-verification-failed-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Email Domain Not Verifying? How to Fix It',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'GoHighLevel Email Domain Not Verifying: Causes and Fixes',

    description:
      'Email domain stuck on pending or unverified in GoHighLevel? Find the failing DNS record, fix it safely, and confirm it, with timing and Cloudflare notes.',

    images: [
      'https://www.ghlscaleup.com/images/blog/gohighlevel-email-domain-verification-failed-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/gohighlevel-email-domain-verification-failed',
  },
};

export default function GoHighLevelEmailDomainNotVerifyingPage() {
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
              'GoHighLevel Email Domain Not Verifying? How to Fix It',

            description:
              'Email domain stuck on pending or unverified in GoHighLevel? Find the failing DNS record, fix it safely, and confirm it, with timing and Cloudflare notes.',

            image:
              'https://www.ghlscaleup.com/images/blog/gohighlevel-email-domain-verification-failed-og.jpg',

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
              'gohighlevel email domain not verifying',
              'gohighlevel email domain verification failed',
              'gohighlevel sending domain pending',
              'gohighlevel sending domain not verifying',
              'gohighlevel domain not verifying',
              'how long does gohighlevel domain verification take',
              'gohighlevel dns records not verifying',
              'gohighlevel dns records not detected',
              'gohighlevel domain already pointing to email server',
              'gohighlevel pre-existing record error wildcard',
              'gohighlevel cloudflare sending domain verification',
              'gohighlevel email domain unverified',
              'domain is not allowed to send gohighlevel',
              'gohighlevel mailgun domain not verified',
              'verify dns settings gohighlevel',
              'how to check dns record txt cname mx',
              'how long does dns propagation take',
              'should i delete dns records gohighlevel',
              'gohighlevel spf record not working',
              'dkim not verified',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/gohighlevel-email-domain-verification-failed',
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
                name: 'Why is my GoHighLevel email domain not verifying?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Usually the DNS changes are not visible yet, or a record's host, type or value does not match, or it is in the wrong DNS zone. Look up each record by its exact name before changing anything.",
                },
              },

              {
                '@type': 'Question',
                name: 'How long does GoHighLevel domain verification take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HighLevel says typically 1 to 10 minutes, and propagation can take up to 24 to 48 hours depending on your provider. Other pages quote different numbers.',
                },
              },

              {
                '@type': 'Question',
                name: 'Why is my sending domain stuck on pending?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's email pages do not define 'pending'. Treat it as not yet verified: check lookups and conflicts, and allow time.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can incorrect MX records prevent verification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, if the value or host does not match, or if existing MX records point to another service (the already pointing error). Do not remove live MX records without a plan.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can duplicate DNS records cause problems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes for SPF, DMARC and DKIM, which must be unique per HighLevel's pages. Other duplicates are not automatically wrong.",
                },
              },

              {
                '@type': 'Question',
                name: 'Does Cloudflare affect verification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. HighLevel says proxied CNAME records cause verification to fail. Set them to DNS only.',
                },
              },

              {
                '@type': 'Question',
                name: 'My records are correct but it still says unverified. What now?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Confirm lookups from two sources, rule out conflicts and proxying, allow for caching, click Verify domain again, then contact support with evidence.',
                },
              },

              {
                '@type': 'Question',
                name: 'Should I delete my DNS records and start over?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Edit only the failing row and keep a copy of what was there.',
                },
              },

              {
                '@type': 'Question',
                name: 'When should I contact support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'After the checks above and the longest documented wait (24 to 48 hours).',
                },
              },
            ],
          }),
        }}
      />

      <GoHighLevelEmailDomainNotVerifyingClient />
    </>
  );
}