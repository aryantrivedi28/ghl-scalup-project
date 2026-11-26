import { Metadata } from 'next';
import Script from 'next/script';
import CostToHireExpertClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Expert Cost in 2027: Pricing, Scope and Quotes',

  description:
    'What decides the cost of hiring a GoHighLevel expert: pricing models, scope, extra costs and how to compare quotes. Prices checked November 2026.',

  keywords:
    'how much does it cost to hire a gohighlevel expert, gohighlevel expert cost, hire gohighlevel expert cost, gohighlevel expert pricing, ghl expert hourly rate, gohighlevel setup cost, compare gohighlevel quotes',

  authors: [{ name: 'GHL Scale Up Team' }],

  openGraph: {
    title: 'How Much Does It Cost to Hire a GoHighLevel Expert in 2027?',

    description:
      'What decides the cost of hiring a GoHighLevel expert: pricing models, scope, extra costs and how to compare quotes. Prices checked November 2026.',

    type: 'article',

    publishedTime: '2026-11-26T00:00:00Z',

    modifiedTime: '2026-11-26T00:00:00Z',

    authors: ['GHL Scale Up Team'],

    tags: [
      'GoHighLevel',
      'Pricing',
      'Hire Guide',
      '2027',
      'Quotes',
    ],

    images: [
      {
        url: 'https://www.ghlscaleup.com/images/blog/how-much-does-it-cost-to-hire-a-gohighlevel-expert-og.jpg',
        width: 1200,
        height: 630,
        alt: 'How Much Does It Cost to Hire a GoHighLevel Expert in 2027?',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    site: '@ghlscaleup',

    title: 'How Much Does It Cost to Hire a GoHighLevel Expert in 2027?',

    description:
      'What decides the cost of hiring a GoHighLevel expert: pricing models, scope, extra costs and how to compare quotes. Prices checked November 2026.',

    images: [
      'https://www.ghlscaleup.com/images/blog/how-much-does-it-cost-to-hire-a-gohighlevel-expert-og.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://www.ghlscaleup.com/blog/how-much-does-it-cost-to-hire-a-gohighlevel-expert',
  },
};

export default function CostToHireExpertPage() {
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
              'How Much Does It Cost to Hire a GoHighLevel Expert in 2027?',

            description:
              'What decides the cost of hiring a GoHighLevel expert: pricing models, scope, extra costs and how to compare quotes. Prices checked November 2026.',

            image:
              'https://www.ghlscaleup.com/images/blog/how-much-does-it-cost-to-hire-a-gohighlevel-expert-og.jpg',

            datePublished: '2026-11-26',
            dateModified: '2026-11-26',

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

            articleSection: 'Pricing',

            keywords: [
              'how much does it cost to hire a gohighlevel expert',
              'gohighlevel expert cost',
              'hire gohighlevel expert cost',
              'gohighlevel expert pricing',
              'ghl expert hourly rate',
              'gohighlevel setup cost',
              'compare gohighlevel quotes',
            ],

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://www.ghlscaleup.com/blog/how-much-does-it-cost-to-hire-a-gohighlevel-expert',
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
                name: 'How much does it cost to hire a GoHighLevel expert?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on scope, not on a standard rate. The advertised figures we found in November 2026 ranged from $8 to $25 an hour on freelancer profiles to published agency packages from $997 to $4,997. These are advertised prices, not averages or verified 2027 rates, so the useful step is to get a written, scope-based quote for your project.',
                },
              },

              {
                '@type': 'Question',
                name: 'Is hourly or fixed pricing better for GoHighLevel work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Hourly pricing suits small, open-ended tasks, and fixed pricing suits a build you can describe clearly. Whichever you choose, check what happens if the work runs over or the scope changes.',
                },
              },

              {
                '@type': 'Question',
                name: "Does the expert's fee include the HighLevel subscription?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Usually not. The HighLevel subscription, usage charges, third-party tools and ad spend are paid separately from the expert's fee. Ask each quote to say what it covers.",
                },
              },

              {
                '@type': 'Question',
                name: 'Why do two quotes for GoHighLevel setup differ so much?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "The two quotes probably describe different amounts of work. Compare the number of pipelines, workflows, integrations and pages, who does the work, how it's tested and what support follows.",
                },
              },

              {
                '@type': 'Question',
                name: 'Do you need ongoing support after a GoHighLevel build?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Many businesses do, because offers, forms and connected tools change. Budget for it as a separate line, either as hours when needed, a monthly plan or a dedicated assistant.',
                },
              },

              {
                '@type': 'Question',
                name: 'Can a low-cost freelancer still do a good job?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, depending on the person and the task. Ask what is delivered, how it is tested, who owns the account and what happens if something breaks. The answers matter more than the price.',
                },
              },

              {
                '@type': 'Question',
                name: 'What should a good quote for GoHighLevel work include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It should list the deliverables with counts, state what is excluded, name who does the work, explain testing and handover, describe support after launch, set out how scope changes are handled, and keep platform and usage costs separate.',
                },
              },

              {
                '@type': 'Question',
                name: 'How does GHL Scale Up price its work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "We price by scope. We don't have one universal starting price. We assess your requirements, define the scope and deliverables, and provide a scope-based quote based on the actual work involved.",
                },
              },
            ],
          }),
        }}
      />

      <CostToHireExpertClient />
    </>
  );
}