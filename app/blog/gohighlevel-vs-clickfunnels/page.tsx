import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelVsClickFunnelsClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel vs ClickFunnels (2026): Pricing, Features & Honest Verdict',
  description: 'Real, current 2026 pricing for both platforms, an honest look at where ClickFunnels\' funnel builder wins, and the corrected outcome of the ClickFunnels-HighLevel patent lawsuit.',
  keywords: 'gohighlevel vs clickfunnels, gohighlevel vs clickfunnels 2026, gohighlevel or clickfunnels for agencies, is gohighlevel better than clickfunnels, clickfunnels vs gohighlevel pricing, can gohighlevel replace clickfunnels, gohighlevel vs clickfunnels for agencies, gohighlevel vs clickfunnels 2026 comparison, which is better gohighlevel or clickfunnels, clickfunnels alternative for agencies',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel vs ClickFunnels (2026): Pricing, Features & Honest Verdict',
    description: 'Real, current 2026 pricing for both platforms, an honest look at where ClickFunnels\' funnel builder wins, and the corrected outcome of the ClickFunnels-HighLevel patent lawsuit.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'ClickFunnels', 'GHL Comparison', 'Agency Software', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-vs-clickfunnels-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel vs ClickFunnels (2026): Pricing, Features & Honest Verdict',
    description: 'Real, current 2026 pricing for both platforms, an honest look at where ClickFunnels\' funnel builder wins, and the corrected outcome of the ClickFunnels-HighLevel patent lawsuit.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-vs-clickfunnels-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-vs-clickfunnels',
  },
};

export default function GoHighLevelVsClickFunnelsPage() {
  return (
    <>
      {/* Article Schema JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "GoHighLevel vs ClickFunnels (2026): Which Platform Fits Your Business?",
            "description": "GoHighLevel and ClickFunnels both build funnels, but that's roughly where the similarity ends. ClickFunnels is a dedicated funnel and page-building tool with a mature design editor. GoHighLevel is a broader agency platform where funnels are one feature among many. The right choice depends on whether you need funnel-building depth for one business or multi-channel breadth for managing several.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-vs-clickfunnels-og.jpg",
            "datePublished": "2026-05-14",
            "dateModified": "2026-05-14",
            "author": {
              "@type": "Organization",
              "name": "GHL Scale Up Team",
              "url": "https://www.ghlscaleup.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GHL Scale Up",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ghlscaleup.com/web-app-manifest-192x192.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-vs-clickfunnels"
            }
          })
        }}
      />

      {/* FAQ Schema JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is GoHighLevel better than ClickFunnels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For agencies managing multiple client accounts, yes — GoHighLevel's flat-rate, unlimited-client architecture, native SMS, and CRM have no ClickFunnels equivalent. For a solo entrepreneur who only needs funnels, ClickFunnels' more polished, purpose-built page editor is a genuine advantage. Neither is objectively better; it depends on whether you're building for one business or several."
                }
              },
              {
                "@type": "Question",
                "name": "Can GoHighLevel replace ClickFunnels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most agency and multi-channel use cases, yes. GoHighLevel includes a funnel builder, CRM, SMS, automation, and booking in one platform. The main reason to keep ClickFunnels is its more mature page-design tooling and its training ecosystem, both of which remain genuinely stronger than GoHighLevel's equivalents."
                }
              },
              {
                "@type": "Question",
                "name": "How does GoHighLevel vs ClickFunnels pricing compare in 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both platforms have a $97/month entry tier and a $297/month higher tier. GoHighLevel's $297 Unlimited plan covers unlimited client sub-accounts and every platform feature. ClickFunnels' $297 Pro plan covers unlimited funnels and contacts for one business, with no CRM depth, native SMS, or white-label option. ClickFunnels consolidated from a three-tier structure to these two plans in 2024 — comparisons citing a middle $197 tier are describing the discontinued structure."
                }
              },
              {
                "@type": "Question",
                "name": "Does ClickFunnels have a CRM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClickFunnels 2.0 has basic contact management, but it isn't a full CRM — no smart lists, no native 2-way SMS, no conversation inbox, and no tag-based automation depth. Businesses that need real CRM functionality alongside funnels are better served by GoHighLevel."
                }
              },
              {
                "@type": "Question",
                "name": "What happened with the ClickFunnels lawsuit against GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClickFunnels sued HighLevel for patent infringement in 2024. The case was dismissed, and the U.S. Court of Appeals for the Federal Circuit affirmed that dismissal on July 2, 2026 — HighLevel is the prevailing party. Both platforms operated normally throughout the litigation and continue to do so."
                }
              }
            ]
          })
        }}
      />

      {/* HowTo Schema JSON-LD - for switching process */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Switch from ClickFunnels to GoHighLevel",
            "description": "Step-by-step overview of switching from ClickFunnels to GoHighLevel.",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Audit your ClickFunnels account",
                "text": "List every active funnel with its purpose and traffic, and document every email sequence and which funnels feed into it."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Export your contacts",
                "text": "In ClickFunnels, go to Contacts → Export and download a CSV. Clean it by removing duplicates and standardizing phone formats."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Import funnels with the URL import tool",
                "text": "In your GHL sub-account, go to Sites → Funnels → New Funnel, add a step, and paste the live ClickFunnels page URL. Repeat for each step."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Rebuild automations as GHL workflows",
                "text": "For each active ClickFunnels sequence, recreate the trigger and timing in GHL using If/Else conditions for branching logic."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Reconnect payments and tracking",
                "text": "Connect Stripe to GHL, rebuild order forms, and re-add Facebook Pixel and Google Analytics to each page."
              },
              {
                "@type": "HowToStep",
                "position": 6,
                "name": "Run in parallel, then cut over the domain",
                "text": "Keep ClickFunnels active while testing GHL on a staging URL. Update DNS to point to GHL and set up 301 redirects."
              }
            ]
          })
        }}
      />
      <GoHighLevelVsClickFunnelsClient />
    </>
  );
}