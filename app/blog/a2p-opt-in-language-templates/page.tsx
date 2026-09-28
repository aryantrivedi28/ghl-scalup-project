import { Metadata } from 'next';
import Script from 'next/script';
import A2POptInLanguageTemplatesClient from './client';

export const metadata: Metadata = {
  title: 'A2P Opt In Language for GoHighLevel: Requirements and Examples',
  description:
    'What A2P opt in language needs to say in GoHighLevel: consent checkboxes, marketing vs non-marketing wording, policies, proof and common rejection causes.',
  keywords:
    'A2P opt in language, A2P opt in language GoHighLevel, GoHighLevel SMS consent, A2P consent checkbox, A2P opt in requirements, GoHighLevel A2P compliance, A2P SMS consent language, A2P marketing consent, A2P non-marketing consent, A2P registration GoHighLevel',
  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'A2P Opt In Language for GoHighLevel: Requirements and Examples',
    description:
      'What A2P opt in language needs to say in GoHighLevel: consent checkboxes, marketing vs non-marketing wording, policies, proof and common rejection causes.',
    type: 'article',
    publishedTime: '2026-07-05T00:00:00Z',
    modifiedTime: '2026-09-01T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: [
      'A2P 10DLC',
      'GoHighLevel',
      'Opt In Language',
      'SMS Compliance',
      'A2P Registration',
    ],
    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/a2p-opt-in-language-templates-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Opt In Language for GoHighLevel: Requirements and Examples',
    description:
      'A practical guide to A2P opt in language, consent checkboxes, marketing and non-marketing SMS consent, policies, proof and common rejection causes.',
    images: [
      'https://www.ghlscaleup.com/images/blog/a2p-opt-in-language-templates-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/a2p-opt-in-language-templates',
  },
};

export default function A2POptInLanguageTemplatesPage() {
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
              'A2P Opt In Language for GoHighLevel: Requirements and Examples',
            description:
              'What A2P opt in language needs to say in GoHighLevel: consent checkboxes, marketing vs non-marketing wording, policies, proof and common rejection causes.',
            image:
              'https://www.ghlscaleup.com/images/blog/a2p-opt-in-language-templates-og.jpg',
            datePublished: '2026-07-05',
            dateModified: '2026-09-01',
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
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/a2p-opt-in-language-templates',
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
                name: 'Do I need a checkbox for A2P consent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "For web opt in, HighLevel's guidance expects separate, unchecked and optional consent checkboxes. Keyword, paper and other methods need a clear call to action with the same disclosures.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can I pre check the box or require consent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. HighLevel says checkboxes cannot be pre selected and consent cannot be required to submit the form, even if the phone number is required.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need separate marketing and non marketing consent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes when you send both. Contacts must be able to opt into one, both or neither.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is entering a phone number enough?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. HighLevel states that collecting a phone number does not by itself establish consent to receive SMS.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use verbal consent, a paper form or a QR code?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HighLevel lists these as consent methods you can register through Manual Setup. Each still needs the disclosures and accessible proof of what the contact saw or heard.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if my opt in form is behind a login?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reviewers cannot sign in. Provide accessible proof, such as a screenshot uploaded to HighLevel Media Storage with a shareable link.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does my Privacy Policy need SMS language?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. HighLevel specifies a mobile data non sharing statement and says the policy should not mention lead selling or affiliation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I text existing customers once my Campaign is approved?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Only those who gave valid consent for that type of message. Registration is separate from consent.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if I change my consent wording after approval?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HighLevel says your Campaign details, consent flow and live messaging should stay aligned. The article found no documented rule for post approval changes, so if your wording or flow changes materially, contact HighLevel Support before relying on the existing approval.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do agencies handle A2P opt in for clients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Each client business needs its own consent flow and evidence.',
                },
              },
            ],
          }),
        }}
      />

      <A2POptInLanguageTemplatesClient />
    </>
  );
}