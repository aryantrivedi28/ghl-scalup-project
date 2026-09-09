import { Metadata } from 'next';
import Script from 'next/script';
import KeapToGoHighLevelMigrationClient from './client';

export const metadata: Metadata = {
  title: 'Keap to GoHighLevel Migration: Complete 2026 Step-by-Step Guide',
  description: 'Step-by-step Keap (Infusionsoft) to GoHighLevel migration: contact export, Campaign Builder rebuild, tag classification, PlusThis replacement, and appointment/calendar migration.',
  keywords: 'keap to gohighlevel migration, infusionsoft to gohighlevel, migrate from keap to ghl, keap alternative gohighlevel, keap vs gohighlevel, keap campaigns to ghl workflows, keap tag migration ghl, keap data export csv, keap campaign builder to ghl, keap to ghl migration guide, infusionsoft migration to gohighlevel, keap plusthis replacement',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Keap to GoHighLevel Migration: Complete 2026 Step-by-Step Guide',
    description: 'Step-by-step Keap (Infusionsoft) to GoHighLevel migration: contact export, Campaign Builder rebuild, tag classification, PlusThis replacement, and appointment/calendar migration.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['Keap to GoHighLevel', 'Infusionsoft Migration', 'Campaign Builder', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/keap-to-gohighlevel-migration-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Keap to GoHighLevel Migration: Complete 2026 Step-by-Step Guide',
    description: 'Step-by-step Keap (Infusionsoft) to GoHighLevel migration: contact export, Campaign Builder rebuild, tag classification, PlusThis replacement, and appointment/calendar migration.',
    images: ['https://www.ghlscaleup.com/images/blog/keap-to-gohighlevel-migration-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/keap-to-gohighlevel-migration',
  },
};

export default function KeapToGoHighLevelMigrationPage() {
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
            "headline": "Keap to GoHighLevel Migration: Complete 2026 Step-by-Step Guide",
            "description": "Migrating from Keap (formerly Infusionsoft) to GoHighLevel is different from most CRM migrations in one specific way: Keap's Campaign Builder does not export. Your automation sequences, decision trees, and fulfillment flows have to be documented before migration and manually rebuilt in GoHighLevel's Workflow Builder. Contacts, tags, and custom fields export cleanly — the automation logic that runs your business is the real work.",
            "image": "https://www.ghlscaleup.com/images/blog/keap-to-gohighlevel-migration-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/keap-to-gohighlevel-migration"
            }
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
            "name": "How to Migrate from Keap to GoHighLevel",
            "description": "Step-by-step guide to migrating from Keap to GoHighLevel including contact export, Campaign Builder rebuild, tag classification, PlusThis replacement, and appointment/calendar migration.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Audit your Keap instance", "text": "Review contacts, custom fields, tags, active Campaign Builder sequences, PlusThis add-ons, and landing pages." },
              { "@type": "HowToStep", "position": 2, "name": "Clean and export contacts", "text": "Normalize multiple emails to a single primary email. Create fake unique emails for contacts without emails. Export via Keap > Contacts > People > Export." },
              { "@type": "HowToStep", "position": 3, "name": "Classify tags", "text": "Classify every Keap tag: segmentation (migrate), campaign state (rebuild in workflows), utility (convert to custom fields), legacy (archive)." },
              { "@type": "HowToStep", "position": 4, "name": "Recreate custom fields in GHL", "text": "In GoHighLevel, recreate all Keap custom fields, pipelines, and tag categories before importing." },
              { "@type": "HowToStep", "position": 5, "name": "Test import", "text": "Import 100-200 contacts first. Verify field mapping, email normalization, and tag attachment." },
              { "@type": "HowToStep", "position": 6, "name": "Rebuild Campaign Builder sequences", "text": "Document every active Keap campaign (business intent, entry goal, sequence steps, decision nodes, exit conditions) and rebuild in GHL Workflow Builder." },
              { "@type": "HowToStep", "position": 7, "name": "Recreate appointments and calendars", "text": "List every active Keap appointment type with duration, availability rules, and reminder settings. Recreate in GHL Calendars → Appointment Types." },
              { "@type": "HowToStep", "position": 8, "name": "Replace PlusThis and integrations", "text": "Replace PlusThis features with GHL-native equivalents. Review and rebuild Zapier integrations." },
              { "@type": "HowToStep", "position": 9, "name": "Run parallel and cutover", "text": "Run Keap and GHL in parallel for 2-3 weeks, validate, then cut over. Keep Keap as archive for 60-90 days." }
            ]
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
                "name": "Can I migrate Keap Campaign Builder to GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not automatically. Campaign Builder sequences have no export path, confirmed in GoHighLevel's own official Keap migration guide. Each active campaign must be documented — business intent, entry goal, sequence steps, decision nodes, exit conditions — then manually rebuilt in GHL's Workflow Builder. This is typically the most time-consuming phase of a Keap migration."
                }
              },
              {
                "@type": "Question",
                "name": "What data transfers from Keap to GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contacts and tags transfer via CSV export. Custom fields must be recreated manually in GHL before import. Campaign Builder sequences, order records, notes, and pipeline deals do not transfer automatically — the official guide confirms deals specifically require manual re-entry, not automated import."
                }
              },
              {
                "@type": "Question",
                "name": "How do Keap tags map to GoHighLevel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Classify every tag into four categories: segmentation tags (migrate as GHL tags), campaign state tags (rebuild as workflow state, not tags), utility tags (convert to GHL custom fields), and legacy tags (archive, don't migrate). This classification is one of the most valuable side effects of a Keap migration — most long-running accounts carry substantial tag debt worth cleaning up."
                }
              },
              {
                "@type": "Question",
                "name": "What happens to appointments and calendars when migrating from Keap?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They don't transfer automatically. Recreate each appointment type in GHL's Calendars → Appointment Types, matching duration, location, and availability settings, then reconnect Google or Outlook calendar sync."
                }
              },
              {
                "@type": "Question",
                "name": "What happens to PlusThis when I migrate from Keap to GHL?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PlusThis doesn't migrate — it's a Keap-specific add-on. Each feature needs a GHL-native replacement (appointment reminders, dynamic content, SMS) or a third-party alternative (countdown timers have no native GHL equivalent)."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a Keap to GoHighLevel migration take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Small migrations (under 5,000 contacts, minimal Campaign Builder activity) can complete in 1–2 weeks. Standard migrations (10,000–50,000 contacts, 10–20 active campaigns) typically take 3–5 weeks. Complex migrations (100,000+ contacts, 20+ active campaigns, deep PlusThis/Zapier use) can take 6–8 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Is Keap Ultimate different from Keap Pro for migration purposes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The two editions do differ in feature depth — Keap Ultimate carries the full Campaign Builder, which is where most long-tenured users have their largest automation investment. A specific difference sometimes claimed — that Ultimate exports tags more completely than Pro — isn't something we've been able to independently verify against official documentation, so treat it as unconfirmed and check your specific edition's current export options directly before finalizing your migration plan."
                }
              }
            ]
          })
        }}
      />
      <KeapToGoHighLevelMigrationClient />
    </>
  );
}