import { Metadata } from 'next';
import Script from 'next/script';
import ClickUpTaskFromTemplateClient from './client';

export const metadata: Metadata = {
  title: 'ClickUp Task Templates in GoHighLevel: Webhook Guide',

  description:
    "GoHighLevel's ClickUp actions don't list task templates. Here's how a Custom Webhook can call ClickUp's API to create a task from a template.",

  keywords:
    'create clickup task from template gohighlevel, gohighlevel clickup integration, gohighlevel workflow create clickup task, gohighlevel custom webhook clickup, clickup api create task from template, clickup task template id, how to find clickup list id, clickup api personal token authorization header',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'ClickUp Task Templates in GoHighLevel: Webhook Guide',

    description:
      "GoHighLevel's ClickUp actions don't list task templates. Here's how a Custom Webhook can call ClickUp's API to create a task from a template.",

    type: 'article',

    publishedTime: '2026-11-04T00:00:00Z',

    modifiedTime: '2026-11-04T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'ClickUp',
      'Webhook',
      'Integration',
      'API',
      '2026',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/create-clickup-task-from-template-gohighlevel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Task template being copied into a ClickUp list by an automated webhook from a GoHighLevel workflow',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'ClickUp Task Templates in GoHighLevel: Webhook Guide',

    description:
      "GoHighLevel's ClickUp actions don't list task templates. Here's how a Custom Webhook can call ClickUp's API to create a task from a template.",

    images: [
      'https://www.ghlscaleup.com/images/blog/create-clickup-task-from-template-gohighlevel-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/create-clickup-task-from-template-gohighlevel',
  },
};

export default function ClickUpTaskFromTemplatePage() {
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
              'How to Create ClickUp Tasks From Templates Using GoHighLevel',

            description:
              "GoHighLevel's ClickUp actions don't list task templates. Here's how a Custom Webhook can call ClickUp's API to create a task from a template.",

            image:
              'https://www.ghlscaleup.com/images/blog/create-clickup-task-from-template-gohighlevel-og.jpg',

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

            articleSection: 'Integration',

            keywords: [
              'create clickup task from template gohighlevel',
              'gohighlevel clickup integration',
              'gohighlevel workflow create clickup task',
              'gohighlevel custom webhook clickup',
              'clickup api create task from template',
              'clickup task template id',
              'how to find clickup list id',
              'clickup api personal token authorization header',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/create-clickup-task-from-template-gohighlevel',
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
                name: 'Can GoHighLevel natively create a ClickUp task from a template?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "HighLevel's ClickUp actions page (11 March 2026) lists 18 actions and none applies a template. Check your account's action list, since it can change.",
                },
              },

              {
                '@type': 'Question',
                name: 'What is the ClickUp API endpoint for creating a task from a template?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "POST https://api.clickup.com/api/v2/list/{list_id}/taskTemplate/{template_id}, per ClickUp's reference. The body requires a name.",
                },
              },

              {
                '@type': 'Question',
                name: 'Do I need to make my template public?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "No. Public sharing is only a shortcut for reading the ID. ClickUp's Get Task Templates request lists templates without making any public.",
                },
              },

              {
                '@type': 'Question',
                name: 'Where do I find the template ID?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Use ClickUp's Get Task Templates request, or read it from a share link and switch public sharing off straight away.",
                },
              },

              {
                '@type': 'Question',
                name: 'Which authorization header does ClickUp use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Authorization: followed by your personal token, with no "Bearer," per ClickUp\'s authentication page.',
                },
              },

              {
                '@type': 'Question',
                name: 'Will subtasks and checklists come across?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "ClickUp's API page doesn't say. Test with your template.",
                },
              },

              {
                '@type': 'Question',
                name: 'Can I send more than a name in the request?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "ClickUp's page lists only name. Don't assume others are supported.",
                },
              },

              {
                '@type': 'Question',
                name: 'Does it cost extra?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A mirror of HighLevel's help calls Custom Webhook a Premium action. Check your billing.",
                },
              },

              {
                '@type': 'Question',
                name: 'Is there a rate limit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, per token per minute, depending on the ClickUp plan (100 to 10,000).',
                },
              },
            ],
          }),
        }}
      />

      <ClickUpTaskFromTemplateClient />
    </>
  );
}