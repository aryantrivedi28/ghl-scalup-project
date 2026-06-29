import { Metadata } from 'next';
import Script from 'next/script';
import A2PBrandRegistrationGuideClient from './client';

export const metadata: Metadata = {
  title: 'A2P Brand Registration in GoHighLevel: Standard vs Sole Proprietor | GHL Scale Up',
  description: 'Step-by-step A2P brand registration guide for GoHighLevel users. Covers Standard Brand (EIN required) and Sole Proprietor (no EIN), the 5 most common rejection reasons, and what happens after approval. Updated June 2026.',
  keywords: 'a2p brand registration gohighlevel, gohighlevel a2p standard brand, gohighlevel a2p sole proprietor, sole proprietor vs standard brand a2p, a2p ein mismatch error, a2p dba registration rules, gohighlevel trust center setup, a2p brand rejected gohighlevel',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Brand Registration in GoHighLevel: Standard vs Sole Proprietor',
    description: 'Step-by-step A2P brand registration guide for GoHighLevel users. Covers Standard Brand (EIN required) and Sole Proprietor (no EIN), the 5 most common rejection reasons, and what happens after approval.',
    type: 'article',
    publishedTime: '2026-06-29T00:00:00Z',
    modifiedTime: '2026-06-29T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Brand Registration', 'GoHighLevel', 'SMS Compliance', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-brand-registration-guide-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Brand Registration in GoHighLevel: Standard vs Sole Proprietor',
    description: 'Step-by-step A2P brand registration guide for GoHighLevel users. Covers Standard Brand (EIN required) and Sole Proprietor (no EIN).',
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
            "headline": "A2P Brand Registration in GoHighLevel: Standard Brand vs Sole Proprietor (2026)",
            "description": "Step-by-step A2P brand registration guide for GoHighLevel users. Covers Standard Brand (EIN required) and Sole Proprietor (no EIN), the 5 most common rejection reasons, and what happens after approval.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-brand-registration-guide-og.jpg",
            "datePublished": "2026-06-29",
            "dateModified": "2026-06-29",
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

      {/* HowTo Schema for Standard Brand Registration */}
      <Script
        id="howto-schema-standard"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Complete A2P Standard Brand Registration in GoHighLevel",
            "description": "Step-by-step guide to completing Standard Brand registration for A2P 10DLC in GoHighLevel.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Start registration", "text": "In the Trust Center, click Start Registration on the A2P Brand and Campaign Registration card. Select your country (United States or Canada)." },
              { "@type": "HowToStep", "position": 2, "name": "Confirm Tax ID status", "text": "Select 'Yes, the business I'm registering has a tax ID.' This routes you to Standard Brand registration. Select Standard Brand from the options presented." },
              { "@type": "HowToStep", "position": 3, "name": "Enter business information", "text": "Fill in your legal business name exactly as it appears on your EIN registration. Enter your EIN, physical business address, business type, website URL, and business phone number." },
              { "@type": "HowToStep", "position": 4, "name": "Enter contact details", "text": "Add the name, email address, and phone number of the contact person for this brand. One email can be used for a maximum of 5 brands. One phone number can be used for a maximum of 3 brands." },
              { "@type": "HowToStep", "position": 5, "name": "Verify via OTP", "text": "Enter the 6-digit one-time password sent to the email address provided to verify the sender identity." },
              { "@type": "HowToStep", "position": 6, "name": "Submit and wait", "text": "After OTP verification, GHL submits your brand to TCR for review. Standard Brand review typically takes 3 to 7 business days." }
            ]
          })
        }}
      />

      {/* HowTo Schema for Sole Proprietor Registration */}
      <Script
        id="howto-schema-sole"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Complete A2P Sole Proprietor Registration in GoHighLevel",
            "description": "Step-by-step guide to completing Sole Proprietor registration for A2P 10DLC in GoHighLevel.",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Start registration", "text": "In the Trust Center, click Start Registration. Select your country (US or Canada only)." },
              { "@type": "HowToStep", "position": 2, "name": "Confirm no Tax ID", "text": "Select 'No, the business I'm registering does not have a tax ID.' This routes you to Sole Proprietor registration." },
              { "@type": "HowToStep", "position": 3, "name": "Enter business name", "text": "Enter your legal name or the name of the organisation sending the messages. Do not include 'LLC,' 'Corp,' or any formal entity suffixes." },
              { "@type": "HowToStep", "position": 4, "name": "Enter address and contact details", "text": "Enter your physical address (US or Canada only). Add your name, email (public domain: Gmail, Hotmail, Yahoo), and your personal mobile phone number." },
              { "@type": "HowToStep", "position": 5, "name": "Verify via OTP", "text": "Reply YES to the TCR text message sent to your mobile number to confirm approval." },
              { "@type": "HowToStep", "position": 6, "name": "Submit and wait", "text": "After OTP approval, GHL submits your Sole Proprietor brand to TCR. Review typically takes 3 to 7 business days." }
            ]
          })
        }}
      />
      <A2PBrandRegistrationGuideClient />
    </>
  );
}