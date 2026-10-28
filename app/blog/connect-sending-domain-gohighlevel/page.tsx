import { Metadata } from 'next';
import Script from 'next/script';
import ConnectSendingDomainClient from './client';

export const metadata: Metadata = {
  title: 'Connect a Sending Domain in GoHighLevel: DNS Setup Guide',

  description:
    'Add a sending subdomain, publish the DNS records GoHighLevel gives you, verify them, and learn what a verified status does and does not mean.',

  keywords:
    'how to connect a sending domain in GoHighLevel, GoHighLevel sending domain setup, GoHighLevel dedicated sending domain, LC Email dedicated domain setup, GoHighLevel add DNS records email, GoHighLevel domain connection and verification',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'Connect a Sending Domain in GoHighLevel: DNS Setup Guide',

    description:
      'Add a sending subdomain, publish the DNS records GoHighLevel gives you, verify them, and learn what a verified status does and does not mean.',

    type: 'article',

    publishedTime: '2026-10-28T00:00:00Z',

    modifiedTime: '2026-10-28T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Email Setup',
      'Sending Domain',
      'DNS',
      'LC Email',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/connect-sending-domain-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Connect a Sending Domain in GoHighLevel: DNS Steps',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'Connect a Sending Domain in GoHighLevel: DNS Setup Guide',

    description:
      'Add a sending subdomain, publish the DNS records GoHighLevel gives you, verify them, and learn what a verified status does and does not mean.',

    images: [
      'https://www.ghlscaleup.com/images/blog/connect-sending-domain-gohighlevel-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/connect-sending-domain-gohighlevel',
  },
};

export default function ConnectSendingDomainPage() {
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
              'How to Connect a Sending Domain in GoHighLevel: DNS Steps',

            description:
              'Add a sending subdomain, publish the DNS records GoHighLevel gives you, verify them, and learn what a verified status does and does not mean.',

            image:
              'https://www.ghlscaleup.com/images/blog/connect-sending-domain-gohighlevel-og.jpg',

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
              'how to connect a sending domain in GoHighLevel',
              'GoHighLevel sending domain setup',
              'GoHighLevel dedicated sending domain',
              'LC Email dedicated domain setup',
              'GoHighLevel add DNS records email',
              'GoHighLevel domain connection and verification',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/connect-sending-domain-gohighlevel',
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
                name: 'What is a sending domain in GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "It's the domain or subdomain your emails are sent from and authenticated under. In HighLevel's LC Email setup it's added as a dedicated sending domain in the sub-account's Email Services settings.",
                },
              },

              {
                '@type': 'Question',
                name: 'Do I need a separate subdomain for email sending?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel recommends a unique subdomain not used for any other purpose. It's especially important if your main domain already hosts mailboxes, because existing mail records can conflict with the new ones.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can I connect a sending domain automatically?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's Add and Verify page describes an automatic route through supported DNS providers. Other HighLevel guides describe manual entry only, and no provider support list was found. Add the domain and see what HighLevel offers.",
                },
              },

              {
                '@type': 'Question',
                name: 'Where do I add the DNS records for GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "At your domain's DNS provider, in the zone for your domain. It may be your registrar, a hosting company or a service such as Cloudflare. HighLevel has guides for several providers, such as GoDaddy, Google and Siteground.",
                },
              },

              {
                '@type': 'Question',
                name: 'How long does sending-domain verification take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's pages give different estimates, from 1 to 10 minutes typically to 24 to 48 hours for propagation. It varies by provider and TTL, so no time is guaranteed.",
                },
              },

              {
                '@type': 'Question',
                name: 'What does a verified sending domain mean?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "That HighLevel recognizes the required records. It doesn't guarantee that mail passes authentication everywhere or reaches the inbox.",
                },
              },

              {
                '@type': 'Question',
                name: 'What should I do if my sending domain does not verify?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Make sure the records are saved, wait, verify again, and compare the expected and published records. Then see (Planned link, not yet published: how to troubleshoot a sending domain that will not verify).',
                },
              },
            ],
          }),
        }}
      />

      <ConnectSendingDomainClient />
    </>
  );
}