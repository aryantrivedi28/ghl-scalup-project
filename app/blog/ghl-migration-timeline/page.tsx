import { Metadata } from 'next';
import Script from 'next/script';
import GHLMigrationTimelineClient from './client';

export const metadata: Metadata = {
  title: 'GHL Migration Timeline: How Long Does It Actually Take? (2026)',
  description: 'Simple migration: 1–2 weeks. Complex: 6–10 weeks. Timeline driven by automation count, not contact volume now covering all 8 GHL Scale Up migration platforms with a self-scoring framework.',
  keywords: 'ghl migration timeline, how long does gohighlevel migration take, gohighlevel migration duration, ghl migration timeline by platform, how long to migrate from hubspot to gohighlevel, gohighlevel migration time estimate, ghl migration complexity factors, gohighlevel migration checklist timeline',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GHL Migration Timeline: How Long Does It Actually Take? (2026)',
    description: 'Simple migration: 1–2 weeks. Complex: 6–10 weeks. Timeline driven by automation count, not contact volume now covering all 8 GHL Scale Up migration platforms with a self-scoring framework.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Migration', 'Migration Timeline', 'CRM Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-migration-timeline-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GHL Migration Timeline: How Long Does It Actually Take? (2026)',
    description: 'Simple: 1–2 weeks. Complex: 6–10 weeks. Driven by automation count, not contact volume.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-migration-timeline-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/ghl-migration-timeline',
  },
};

export default function GHLMigrationTimelinePage() {
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
            "headline": "GHL Migration Timeline: How Long Does It Actually Take? (2026)",
            "description": "One of the first questions anyone asks before a GoHighLevel migration is how long it will take. The honest answer depends on one factor far more than any other and it isn't the one most people assume.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-migration-timeline-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/ghl-migration-timeline"
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
                "name": "How long does a GoHighLevel migration take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A simple migration with fewer than 5 active automations and a small, clean contact list takes 1–2 weeks. A standard migration with 5–20 automations takes 3–5 weeks. A complex migration with 20+ automations, large data volume, membership content, or multiple client accounts takes 6–10 weeks. Automation count, not contact volume, is the primary driver."
                }
              },
              {
                "@type": "Question",
                "name": "Does contact volume affect migration time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Less than most people assume. The CSV import itself takes minutes regardless of whether you have 5,000 or 500,000 contacts. Volume matters more indirectly through data-quality cleanup time and testing thoroughness than through the import process itself."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to rebuild workflows in GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A simple 3–5 step sequence takes 30–60 minutes. A standard sequence with basic branching takes 2–4 hours. A complex automation with 15+ steps, multi-level branching, and lead-scoring logic takes 4–8 hours. Add 50–100% to these figures if you're learning GHL's workflow builder while migrating."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a Kajabi to GoHighLevel migration take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1–2 weeks for a simple setup, 3–5 weeks standard, 5–8 weeks complex. This is shorter than older estimates because GoHighLevel's native Kajabi Course Importer now handles course structure and media for published lessons automatically the remaining time goes into quizzes, assignments, offers, and automation rebuild."
                }
              },
              {
                "@type": "Question",
                "name": "Should I run both platforms in parallel during migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, for a minimum of 1–2 weeks before cutover. New leads enter GHL while contacts already active in old-platform sequences finish there. This reveals gaps in your GHL setup while you still have a working fallback."
                }
              },
              {
                "@type": "Question",
                "name": "Can migration timelines be shortened without increasing risk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes by reducing avoidable work rather than reducing testing. Cutting automations that no longer drive results, cleaning data before import, and freezing scope all shorten the timeline without cutting corners on QA."
                }
              }
            ]
          })
        }}
      />

      {/* HowTo Schema JSON-LD */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Estimate a GoHighLevel Migration Timeline",
            "description": "A framework for estimating how long a GoHighLevel migration will take based on automation count, data quality, integrations, and platform.",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Audit your automation count",
                "text": "Count every active automation that will need rebuilding in GHL. This is the single biggest driver of migration timeline."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Assess data quality",
                "text": "Check for duplicates, missing fields, inconsistent formatting, and legacy junk records that will need cleanup before import."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Inventory integrations",
                "text": "List every integration and identify which require custom API work versus standard reconnection."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Score complexity tier",
                "text": "Use the complexity framework to place your migration in Simple, Standard, or Complex tier."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Estimate calendar time",
                "text": "Add work effort plus dependencies like stakeholder approvals, domain authentication, and A2P registration processing time."
              }
            ]
          })
        }}
      />
      <GHLMigrationTimelineClient />
    </>
  );
}