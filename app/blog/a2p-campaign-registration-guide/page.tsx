import { Metadata } from 'next';
import Script from 'next/script';
import A2PCampaignRegistrationGuideClient from './client';

export const metadata: Metadata = {
  title: 'A2P Campaign Registration in GoHighLevel: Step-by-Step Guide (2026) | GHL Scale Up',
  description: 'How to complete A2P 10DLC campaign registration in GoHighLevel — use case selection, sample messages, opt-in consent, privacy policy requirements, and what happens after you submit. Verified from GHL\'s official docs. July 2026.',
  keywords: 'a2p campaign registration gohighlevel, how to register a2p campaign gohighlevel, a2p campaign use case examples, a2p sample messages requirements, double opt in a2p sms, a2p opt in language examples, a2p consent checkbox rules gohighlevel, a2p campaign registration fee',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Campaign Registration in GoHighLevel: Step-by-Step Guide (2026)',
    description: 'How to complete A2P 10DLC campaign registration in GoHighLevel — use case selection, sample messages, opt-in consent, privacy policy requirements, and what happens after you submit.',
    type: 'article',
    publishedTime: '2026-07-01T00:00:00Z',
    modifiedTime: '2026-07-01T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Campaign Registration', 'GoHighLevel', 'SMS Compliance', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-campaign-registration-guide-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Campaign Registration in GoHighLevel: Step-by-Step Guide (2026)',
    description: 'How to complete A2P 10DLC campaign registration in GoHighLevel — use case selection, sample messages, opt-in consent, and privacy policy requirements.',
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
            "headline": "A2P Campaign Registration in GoHighLevel: Step-by-Step Guide (2026)",
            "description": "How to complete A2P 10DLC campaign registration in GoHighLevel — use case selection, sample messages, opt-in consent, privacy policy requirements, and what happens after you submit.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-campaign-registration-guide-og.jpg",
            "datePublished": "2026-07-01",
            "dateModified": "2026-07-01",
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

      {/* HowTo Schema for Campaign Registration */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Complete A2P Campaign Registration in GoHighLevel",
            "description": "Step-by-step guide to completing campaign registration fields for A2P 10DLC in GoHighLevel.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Select messaging use case", "text": "Choose the use case that most accurately describes your messaging purpose — Customer Care, Marketing, Mixed, Appointments and Reminders, Two-Factor Authentication, or Notifications." },
              { "@type": "HowToStep", "position": 2, "name": "Write campaign description", "text": "Write a campaign description that answers: who is the sender, who receives the messages, and why are messages being sent. Include your business name and DBA if applicable." },
              { "@type": "HowToStep", "position": 3, "name": "Provide sample messages", "text": "Submit sample messages that include all four required elements: contact name or placeholder, staff member name, business name, and opt-out language." },
              { "@type": "HowToStep", "position": 4, "name": "Select opt-in method", "text": "Choose and document your opt-in method — Website Form, Paper Form, Facebook Lead Form, QR Code, Kiosk, or Verbal. Provide a publicly accessible URL where the opt-in can be reviewed." },
              { "@type": "HowToStep", "position": 5, "name": "Verify Privacy Policy requirements", "text": "Ensure your Privacy Policy states that no mobile information will be shared with third parties for marketing. Ensure all links are publicly accessible without login." },
              { "@type": "HowToStep", "position": 6, "name": "Submit and wait for review", "text": "Once brand is approved, GHL automatically submits the campaign for review. Campaign review typically takes 3 to 7 business days." }
            ]
          })
        }}
      />
      <A2PCampaignRegistrationGuideClient />
    </>
  );
}