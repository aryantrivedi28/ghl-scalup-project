import { Metadata } from 'next';
import Script from 'next/script';
import A2POptInLanguageTemplatesClient from './client';

export const metadata: Metadata = {
  title: 'A2P Opt-In Language for GoHighLevel: Copy-Paste Templates (2026) | GHL Scale Up',
  description: 'Compliant A2P opt-in language for GoHighLevel forms marketing checkbox, non-marketing checkbox, Privacy Policy clause, and footer text. All templates sourced from GHL\'s official documentation. July 2026.',
  keywords: 'a2p opt-in language examples, a2p opt-in language gohighlevel, gohighlevel sms consent checkbox language, a2p consent checkbox template, a2p privacy policy required language, a2p sms opt-in form example, double opt-in a2p sms gohighlevel, a2p web form opt-in requirements',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'A2P Opt-In Language for GoHighLevel: Copy-Paste Templates (2026)',
    description: 'Compliant A2P opt-in language for GoHighLevel forms marketing checkbox, non-marketing checkbox, Privacy Policy clause, and footer text. All templates sourced from GHL\'s official documentation.',
    type: 'article',
    publishedTime: '2026-07-05T00:00:00Z',
    modifiedTime: '2026-07-05T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['A2P 10DLC', 'Opt-In Templates', 'Compliance', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/a2p-opt-in-language-templates-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'A2P Opt-In Language for GoHighLevel: Copy-Paste Templates (2026)',
    description: 'Compliant A2P opt-in language for GoHighLevel forms marketing checkbox, non-marketing checkbox, Privacy Policy clause, and footer text.',
    images: ['https://www.ghlscaleup.com/images/blog/a2p-opt-in-language-templates-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/a2p-opt-in-language-templates',
  },
};

export default function A2POptInLanguageTemplatesPage() {
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
            "headline": "A2P Opt-In Language for GoHighLevel: Copy-Paste Templates and Examples (2026)",
            "description": "Compliant A2P opt-in language for GoHighLevel forms marketing checkbox, non-marketing checkbox, Privacy Policy clause, and footer text. All templates sourced from GHL's official documentation.",
            "image": "https://www.ghlscaleup.com/images/blog/a2p-opt-in-language-templates-og.jpg",
            "datePublished": "2026-07-05",
            "dateModified": "2026-07-05",
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
              "@id": "https://www.ghlscaleup.com/blog/a2p-opt-in-language-templates"
            }
          })
        }}
      />
      <A2POptInLanguageTemplatesClient />
    </>
  );
}