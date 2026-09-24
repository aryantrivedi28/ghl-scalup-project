import { Metadata } from 'next';
import Script from 'next/script';
import A2PBrandRegistrationGuideClient from './client';

export const metadata: Metadata = {
  title: 'A2P Brand Registration in GoHighLevel: Step by Step Guide',
  description: 'Register your A2P brand in GoHighLevel the right way. Choose Standard or Sole Proprietor, gather the right business details and know what happens next.',
  keywords: 'a2p brand registration gohighlevel, gohighlevel a2p standard brand, gohighlevel a2p sole proprietor, sole proprietor vs standard brand a2p, a2p ein mismatch error, a2p dba registration rules, gohighlevel trust center setup, a2p brand rejected gohighlevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Brand Registration in GoHighLevel: Step by Step Guide',
    description: 'Register your A2P brand in GoHighLevel the right way. Choose Standard or Sole Proprietor, gather the right business details and know what happens next.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00Z',
    modifiedTime: '2026-05-14T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Brand Registration', 'GoHighLevel', 'SMS Compliance', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-brand-registration-guide-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Brand Registration in GoHighLevel: Step by Step Guide',
    description: 'Register your A2P brand in GoHighLevel the right way. Choose Standard or Sole Proprietor, gather the right business details and know what happens next.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-brand-registration-guide-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-brand-registration-guide',
  },
};

export default function A2PBrandRegistrationGuidePage() {
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
            "headline": "A2P Brand Registration in GoHighLevel: Standard vs Sole Proprietor",
            "description": "An A2P brand is the verified identity of the business or individual responsible for the messages you send. Carriers use it to confirm who is behind the traffic and to judge trust and long term deliverability. HighLevel provides the registration workflow and submits your details to The Campaign Registry (TCR), while carriers and their registration partners make the final decision.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-brand-registration-guide-og.jpg",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-brand-registration-guide"
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
                "name": "Do I need an EIN for A2P brand registration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If your business has an EIN, Tax ID, Business Number or another accepted registration number, you register as a Standard Brand and enter that number exactly as it appears in official records. The Sole Proprietor path is only for individuals or very small businesses with only one employee that have no such number."
                }
              },
              {
                "@type": "Question",
                "name": "How long does A2P brand registration take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It varies. HighLevel says Standard Brand reviews can take several business days, Sole Proprietor reviews are often quicker, and extra verification can lengthen either one. No timeline is guaranteed."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use a Gmail address?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For a Sole Proprietor Brand, you must use a public domain address such as Gmail, Hotmail or Yahoo. For a Standard Brand, Gmail is accepted, but a business domain email is recommended because free email services can slow approval."
                }
              },
              {
                "@type": "Question",
                "name": "Can I submit my Campaign before my brand is approved?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HighLevel's guidance is that the brand comes first and must be approved before you can register the Campaign and start sending. The Campaign Details section follows the brand section once the brand is eligible to continue."
                }
              },
              {
                "@type": "Question",
                "name": "Can an agency register a client's brand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, provided the brand is built from the client's own legal business details, because each business needs its own registration. The practical limits and workflow for doing this at scale are in our guide to A2P registration for GoHighLevel agencies."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between brand and Campaign registration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brand registration identifies the business sending the messages. Campaign registration describes the messaging use case, sample messages and consent process. Both must be approved before you send."
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
            "name": "How to Register an A2P Brand in GoHighLevel",
            "description": "Step-by-step guide to completing A2P brand registration in GoHighLevel, whether you are registering as a Standard Brand or Sole Proprietor.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Open Trust Center", "text": "In the sub-account, go to Settings, then Phone System under Business Services, then the Trust Center tab." },
              { "@type": "HowToStep", "position": 2, "name": "Start registration", "text": "Select Start Registration under the A2P Messaging (SMS) tab." },
              { "@type": "HowToStep", "position": 3, "name": "Answer the Get Started questions", "text": "Tell HighLevel where your business is registered and whether it has a Tax ID. This answer decides whether you follow the Standard or Sole Proprietor path." },
              { "@type": "HowToStep", "position": 4, "name": "Enter your business details", "text": "With a Tax ID, you provide the legal business name, business type, industry, registration ID type, registration number, business email and region of operations. Without one, you provide the business name or your full name, your industry and your phone number." },
              { "@type": "HowToStep", "position": 5, "name": "Add the business address", "text": "Enter the country, state or province, street address, city and postal code. Leave the PO box out of the street field." },
              { "@type": "HowToStep", "position": 6, "name": "Add contact information", "text": "Enter the authorized representative's first and last name, email, phone number, job position and job title." },
              { "@type": "HowToStep", "position": 7, "name": "Complete verification if prompted", "text": "Depending on the account and your details, HighLevel may ask for Persona identity verification or an email OTP." },
              { "@type": "HowToStep", "position": 8, "name": "Continue to Campaign Details", "text": "Once the brand section is complete, the flow moves on to your messaging use case and consent details." }
            ]
          })
        }}
      />
      <A2PBrandRegistrationGuideClient />
    </>
  );
}