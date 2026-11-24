import { Metadata } from 'next';
import Script from 'next/script';
import VoiceAIClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Voice AI: Features, Pricing and Setup Guide',

  description:
    'What GoHighLevel Voice AI does, what it costs per minute, how to set it up and where it falls short. A practical guide with cost examples.',

  keywords:
    'gohighlevel voice ai, gohighlevel ai voice agent, go high level ai voice agent, gohighlevel voice ai pricing, gohighlevel ai voice, go high level ai receptionist, gohighlevel ai receptionist, ai receptionist gohighlevel, gohighlevel ai voice agent, ai voice agent ghl, how to set up gohighlevel voice ai, can voice ai transfer calls, can voice ai book appointments',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'GoHighLevel Voice AI: Features, Pricing and Setup Guide',

    description:
      'What GoHighLevel Voice AI does, what it costs per minute, how to set it up and where it falls short. A practical guide with cost examples.',

    type: 'article',

    publishedTime: '2026-11-24T00:00:00Z',

    modifiedTime: '2026-11-24T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Voice AI',
      'AI Agents',
      'Pricing',
      'Setup',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-voice-ai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Voice AI: What It Does, How It Is Priced and How to Set It Up',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'GoHighLevel Voice AI: Features, Pricing and Setup Guide',

    description:
      'What GoHighLevel Voice AI does, what it costs per minute, how to set it up and where it falls short. A practical guide with cost examples.',

    images: [
      'https://www.ghlscaleup.com/images/blog/gohighlevel-voice-ai-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/gohighlevel-voice-ai',
  },
};

export default function VoiceAIPage() {
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
              'GoHighLevel Voice AI: What It Does, How It Is Priced and How to Set It Up',

            description:
              'What GoHighLevel Voice AI does, what it costs per minute, how to set it up and where it falls short. A practical guide with cost examples.',

            image:
              'https://www.ghlscaleup.com/images/blog/gohighlevel-voice-ai-og.jpg',

            datePublished: '2026-11-24',
            dateModified: '2026-11-24',

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

            articleSection: 'Voice AI',

            keywords: [
              'gohighlevel voice ai',
              'gohighlevel ai voice agent',
              'go high level ai voice agent',
              'gohighlevel voice ai pricing',
              'gohighlevel ai voice',
              'go high level ai receptionist',
              'gohighlevel ai receptionist',
              'ai receptionist gohighlevel',
              'gohighlevel ai voice agent',
              'ai voice agent ghl',
              'how to set up gohighlevel voice ai',
              'can voice ai transfer calls',
              'can voice ai book appointments',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/gohighlevel-voice-ai',
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
                name: 'What is GoHighLevel Voice AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "It's HighLevel's AI phone agent. It answers calls using instructions you write, and can book appointments, update contacts and trigger workflows.",
                },
              },

              {
                '@type': 'Question',
                name: 'How much does GoHighLevel Voice AI cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends. Pay-per-use is a $0.045 per minute Voice Engine charge plus a voice rate (from $0.015) plus language model tokens, and phone charges are separate. AI Employee plans are $20, $50 or $97 per sub-account a month. Rates were checked in November 2026.',
                },
              },

              {
                '@type': 'Question',
                name: 'Is Voice AI included in the GoHighLevel subscription?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Not as a flat inclusion. It's billed through usage or an AI Employee plan. Growth includes 100 AI agent minutes and Unlimited is unlimited subject to fair use. Phone charges still apply.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can GoHighLevel Voice AI answer calls automatically?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Assign the agent to a HighLevel number, then choose whether it answers directly or only as a backup.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can it book appointments?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, if you connect a HighLevel calendar and add the appointment booking action. Test it with real slots.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can it transfer a call to a human?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, through the call transfer action, which needs a destination number and conditions. It doesn't run in Web Call tests, so test it by phone.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can it make outbound calls?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HighLevel supports it, but it requires approval and compliance setup first. Consent rules for AI-voice calls apply.',
                },
              },

              {
                '@type': 'Question',
                name: 'Does it work with workflows?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. There's an action that triggers a workflow, and post-call options that can start workflows.",
                },
              },

              {
                '@type': 'Question',
                name: 'How do you create an AI voice agent in GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Go to AI Agents, then Voice AI, then the Agent List, click + Create Agent and choose marketplace, custom agent or flow builder. Then write instructions, add knowledge, set actions, test and deploy.',
                },
              },

              {
                '@type': 'Question',
                name: "Can you customise the agent's voice and instructions?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. You pick a voice, model and language and write your own prompt and welcome message.',
                },
              },

              {
                '@type': 'Question',
                name: "What happens if it can't answer a question?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "It depends on your instructions. You can tell it to say it doesn't know, take a message, or transfer the call.",
                },
              },

              {
                '@type': 'Question',
                name: 'Is it suitable for small businesses?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can be, especially at low call volumes where pay-per-use is cheap. It works best for routine calls with someone checking transcripts.',
                },
              },
            ],
          }),
        }}
      />

      <VoiceAIClient />
    </>
  );
}