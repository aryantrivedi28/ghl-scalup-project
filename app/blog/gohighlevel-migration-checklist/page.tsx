import { Metadata } from 'next';
import Script from 'next/script';
import GHLMigrationChecklistClient from './client';

export const metadata: Metadata = {
  title: 'The Complete GoHighLevel Migration Checklist (2026)',
  description: 'A practical, phase-by-phase GoHighLevel migration checklist: audit, infrastructure, data, automation rebuild, testing, and go-live — with explicit readiness and cutover gates.',
  keywords: 'gohighlevel migration checklist, ghl migration checklist 2026, gohighlevel migration steps, ghl migration qa checklist, gohighlevel go-live checklist, pre migration audit checklist ghl, data migration checklist crm, migration audit template gohighlevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'The Complete GoHighLevel Migration Checklist (2026)',
    description: 'A practical, phase-by-phase GoHighLevel migration checklist: audit, infrastructure, data, automation rebuild, testing, and go-live — with explicit readiness and cutover gates.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Migration', 'Checklist', 'Migration Guide', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-migration-checklist-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'The Complete GoHighLevel Migration Checklist (2026)',
    description: 'A practical, phase-by-phase GoHighLevel migration checklist: audit, infrastructure, data, automation rebuild, testing, and go-live — with explicit readiness and cutover gates.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-migration-checklist-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-migration-checklist',
  },
};

export default function GHLMigrationChecklistPage() {
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
            "headline": "The Complete GoHighLevel Migration Checklist (2026)",
            "description": "This is the checklist GHL Scale Up uses internally on GoHighLevel migrations. Work through it phase by phase, or use the two readiness gates to sanity-check whether you're actually ready to move to the next stage.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-migration-checklist-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-migration-checklist"
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
                "name": "What should be on a GoHighLevel migration checklist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A complete checklist covers six phases: pre-migration audit, GHL infrastructure setup, data export and cleaning, automation rebuild, testing and parallel running, and go-live with post-launch monitoring. Two additional gates — a pre-migration readiness check and a ready-for-cutover check — help confirm you're actually prepared before committing to each risky step."
                }
              },
              {
                "@type": "Question",
                "name": "What is the most commonly skipped step in a GHL migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The pre-migration audit. Teams are eager to start importing data and rebuilding in GHL, so they skip documenting what currently exists — which makes it much harder to catch a missing automation or integration before it becomes a problem mid-migration. The second most commonly skipped step is end-to-end testing before go-live."
                }
              },
              {
                "@type": "Question",
                "name": "How long should I run both platforms in parallel during migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A minimum of 2 weeks is a reasonable baseline. During this period, new leads route into GHL while contacts already in active sequences on your old platform finish naturally. Only proceed to full cutover once GHL has performed reliably for several consecutive business days."
                }
              },
              {
                "@type": "Question",
                "name": "How do I decide which integrations to migrate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use a Keep/Replace/Rebuild/Retire framework for every integration: Keep if it just needs reconnecting to GHL, Replace if GHL has a native equivalent, Rebuild if the logic needs recreating with GHL's own tools, or Retire if it no longer serves a purpose."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this checklist for any platform migration to GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The six phases apply regardless of source platform. What differs by platform is the specific export format and which features need platform-specific handling — covered in the dedicated platform-specific migration guides."
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
            "name": "How to Run a GoHighLevel Migration",
            "description": "A phase-by-phase operational checklist for migrating to GoHighLevel from any CRM or marketing platform.",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Phase 1: Pre-Migration Audit",
                "text": "Document every automation, pipeline, contact list, custom field, and integration in your current platform. Identify dead weight. Map your tool stack. Estimate your realistic timeline."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Phase 2: GHL Infrastructure Setup",
                "text": "Set up GHL plan, team access, custom fields, pipelines, email authentication (DKIM/SPF/DMARC), phone numbers, and A2P 10DLC registration before importing any data."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Phase 3: Data Export, Cleaning, and Import",
                "text": "Export contacts as CSV from your old platform. Clean data by removing bounces, deduplicating, and standardizing formats. Map fields during import. Test-batch first, then full import."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Phase 4: Automation Rebuild",
                "text": "Document the trigger, conditions, and every action step from each automation. Rebuild in GHL's workflow builder. Test with one real contact before activating."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Phase 5: Testing and Parallel Running",
                "text": "Submit a real form, confirm contact appears in CRM with correct tags and pipeline stage, confirm follow-up sequence fires. Run parallel for 2 weeks minimum."
              },
              {
                "@type": "HowToStep",
                "position": 6,
                "name": "Phase 6: Go-Live and Post-Migration",
                "text": "Redirect all lead sources to GHL. Confirm GHL performs at least as well as old platform for several consecutive business days. Take final data export. Cancel old platform subscription only after full cutover is confirmed stable."
              }
            ]
          })
        }}
      />
      <GHLMigrationChecklistClient />
    </>
  );
}