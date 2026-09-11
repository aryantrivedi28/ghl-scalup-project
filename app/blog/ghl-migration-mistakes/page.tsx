import { Metadata } from 'next';
import Script from 'next/script';
import GHLMigrationMistakesClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Migration Mistakes: 9 Problems to Avoid (2026)',
  description: 'The most common GoHighLevel migration mistakes: why they happen, what they can break, how to prevent them, and what to do if one already happened.',
  keywords: 'gohighlevel migration mistakes, ghl migration mistakes, gohighlevel migration mistakes to avoid, common gohighlevel migration errors, gohighlevel migration problems agencies, why ghl migrations fail, gohighlevel data migration errors, ghl automation rebuild mistakes, gohighlevel migration best practices',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Migration Mistakes: 9 Problems to Avoid (2026)',
    description: 'The most common GoHighLevel migration mistakes: why they happen, what they can break, how to prevent them, and what to do if one already happened.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'GHL Migration', 'Migration Mistakes', 'CRM Migration', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/ghl-migration-mistakes-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Migration Mistakes: 9 Problems to Avoid (2026)',
    description: 'The most common GoHighLevel migration mistakes and how to avoid each one.',
    images: ['https://www.ghlscaleup.com/images/blog/ghl-migration-mistakes-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/ghl-migration-mistakes',
  },
};

export default function GHLMigrationMistakesPage() {
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
            "headline": "GoHighLevel Migration Mistakes: Common Problems and How to Avoid Them",
            "description": "Migrating to GoHighLevel goes wrong in predictable ways. The same problems show up across platform types, business sizes, and industries, and almost all of them trace back to planning gaps rather than anything GHL itself cannot do. This guide covers what commonly goes wrong, why it happens, what it can break, how to prevent it, and what to do if you are reading this because it already happened.",
            "image": "https://www.ghlscaleup.com/images/blog/ghl-migration-mistakes-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/ghl-migration-mistakes"
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
                "name": "What are the most common GoHighLevel migration mistakes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Importing dirty data without cleaning it, assuming automations can be copied instead of rebuilt, migrating every old automation instead of auditing which ones matter, overlooking integrations and hidden dependencies, treating email warmup as a fixed formula rather than understanding how it actually works, skipping parallel running, cancelling the old platform too early, going live without full testing, and optimizing while migrating instead of after."
                }
              },
              {
                "@type": "Question",
                "name": "Why do GoHighLevel migrations fail?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most failures come from planning gaps rather than anything the platform cannot do: skipping the audit phase, not cleaning data before import, not testing the full customer journey before go live, and cancelling the old platform before the new one is validated. A structured process with parallel running and real testing avoids nearly all of them."
                }
              },
              {
                "@type": "Question",
                "name": "Do GoHighLevel workflows need to be rebuilt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Generally yes. Workflow logic is platform specific, and there is no universal path for importing automation logic the way there is for contact data. Some platforms have narrow, specific import tools for particular content types, but the trigger and action logic behind an automation almost always needs to be recreated by hand in GHL's workflow builder."
                }
              },
              {
                "@type": "Question",
                "name": "Should I cancel my old CRM immediately after migrating?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Keep it active until contacts are validated, automations are tested with real activity, you have run both platforms in parallel for a period, and every lead source points to GHL. Take a final data export before cancelling."
                }
              },
              {
                "@type": "Question",
                "name": "How do I avoid email deliverability problems during migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Complete DKIM, SPF, and DMARC authentication first. If you are using GHL's own LC Email on a dedicated domain, its fixed stage warmup will manage sending caps automatically as you send real mail. If you are using external SMTP, warmup is manual: start with smaller sends to engaged contacts and increase gradually while watching bounce and complaint rates."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do if my GoHighLevel migration has already gone wrong?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Identify which category the problem falls into: bad data, misfiring automations, deliverability, an early cancellation, or phone and SMS issues, and address the specific cause rather than a generic fix. In most cases this means pausing the affected system, checking what actually happened against what should have happened, and correcting the specific gap before resuming."
                }
              },
              {
                "@type": "Question",
                "name": "Can phone numbers and SMS be affected during migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, if your business uses GHL for calls or texting. Number porting, A2P 10DLC registration for US SMS, and toll free verification all have their own processing times and requirements. This is not universal to every migration, but if messaging or calling matters to your business, test inbound and outbound behavior before relying on it in production."
                }
              }
            ]
          })
        }}
      />
      <GHLMigrationMistakesClient />
    </>
  );
}