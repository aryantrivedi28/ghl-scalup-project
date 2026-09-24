import { Metadata } from 'next';
import Script from 'next/script';
import A2PCampaignRegistrationGuideClient from './client';

export const metadata: Metadata = {
  title: 'A2P Campaign Registration in GoHighLevel: Step by Step',
  description: 'Register your A2P campaign in GoHighLevel: what to prepare, how to choose a use case, write the description and samples, document consent and submit.',
  keywords: 'a2p campaign registration gohighlevel, how to register a2p campaign gohighlevel, a2p campaign use case examples, a2p sample messages requirements, double opt in a2p sms, a2p opt in language examples, a2p consent checkbox rules gohighlevel, a2p campaign registration fee',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Campaign Registration in GoHighLevel: Step by Step',
    description: 'Register your A2P campaign in GoHighLevel: what to prepare, how to choose a use case, write the description and samples, document consent and submit.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Campaign Registration', 'GoHighLevel', 'SMS Compliance', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-campaign-registration-guide-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Campaign Registration in GoHighLevel: Step by Step',
    description: 'Register your A2P campaign in GoHighLevel: what to prepare, how to choose a use case, write the description and samples, document consent and submit.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-campaign-registration-guide-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-campaign-registration-guide',
  },
};

export default function A2PCampaignRegistrationGuidePage() {
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
            "headline": "A2P Campaign Registration in GoHighLevel: Step by Step Guide",
            "description": "A Campaign is the registered description of one messaging program sent from a Brand. It sits on top of the wider A2P 10DLC framework. This guide assumes you already know why registration exists and focuses on completing the Campaign.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-campaign-registration-guide-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-campaign-registration-guide"
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
                "name": "Do I need to register a Campaign after my Brand is approved?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. HighLevel says Campaign registration is required after Brand approval before you send SMS from standard 10 digit local numbers to US recipients."
                }
              },
              {
                "@type": "Question",
                "name": "Can I register a Campaign before my Brand is approved?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. The Brand must be approved or eligible to continue first. In a first time registration, HighLevel takes you into Campaign Details once the Brand section is ready."
                }
              },
              {
                "@type": "Question",
                "name": "Do I submit the Campaign manually?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. In HighLevel's current flow you run the compliance review and then submit the Campaign once the required checks pass."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Campaign approval take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It varies, and HighLevel does not publish a fixed timeline. Your Campaign stays Pending until vetting finishes, so avoid resubmitting or creating duplicates."
                }
              },
              {
                "@type": "Question",
                "name": "Does approval guarantee my texts will be delivered?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Carriers and registration partners make the final decision, and the sending number must be linked to the approved Campaign."
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
            "name": "How to Register an A2P Campaign in GoHighLevel",
            "description": "Step-by-step guide to completing A2P campaign registration in GoHighLevel after your Brand is approved.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Open Campaign registration", "text": "If registering for the first time, HighLevel guides you into Campaign Details once the Brand section is ready. To add a Campaign to an existing approved Brand, go to Settings, then Phone System, then Trust Center. In the A2P Messaging (SMS) card, select Brand & Campaigns, open the Campaigns tab and choose Create Campaign, then select the Brand." },
              { "@type": "HowToStep", "position": 2, "name": "Select your messaging volume", "text": "With a Tax ID you choose between the Low Volume Standard Brand and High Volume Standard Brand options, which differ in daily throughput and cost. Without a Tax ID, the only option is Single-number registration, which links one number that you can change later." },
              { "@type": "HowToStep", "position": 3, "name": "Choose your setup path", "text": "Campaign registration opens in Chat Widget Setup by default. If you collect consent another way, choose Switch to manual setup. You can return to the widget path later from the Campaign details panel." },
              { "@type": "HowToStep", "position": 4, "name": "Complete the path you chose", "text": "Complete either Chat Widget Setup or Manual Setup depending on how you collect consent." },
              { "@type": "HowToStep", "position": 5, "name": "Review the website compliance checklist", "text": "Confirm the checklist items, then select Review Application." },
              { "@type": "HowToStep", "position": 6, "name": "Run the compliance review and submit", "text": "If a check fails, fix it and select Review Again. You cannot submit until all required checks pass, and passing them prepares your Campaign for carrier review without guaranteeing approval." }
            ]
          })
        }}
      />
      <A2PCampaignRegistrationGuideClient />
    </>
  );
}