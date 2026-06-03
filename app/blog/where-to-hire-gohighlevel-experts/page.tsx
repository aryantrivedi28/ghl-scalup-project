import { Metadata } from 'next';
import WhereToHireGHLExpertsClient from './client';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Best GHL Expert Agency to Hire in 2026 Honest Comparison',
  description: 'The 6 best places to find GoHighLevel experts in 2026 platforms, agencies, and freelancers. Includes a vetting checklist so you hire the right one.',
  keywords: 'where to hire GoHighLevel experts, how to find a GoHighLevel expert, where to find GHL experts, GoHighLevel freelancer, GoHighLevel certified admin directory, GoHighLevel agency for hire, GHL expert Upwork',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'Where to Hire GoHighLevel Experts in 2026: 6 Best Places (+ How to Vet Them)',
    description: 'The 6 best places to find GHL professionals in 2026 — official directory, Upwork, Fiverr, Facebook Groups, Clutch, and specialist agencies — with a vetting checklist and red flags.',
    type: 'article',
    publishedTime: '2026-05-11T00:00:00Z',
    modifiedTime: '2026-05-11T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Hire GHL Expert', 'Freelance Platforms', 'GHL Agency', '2026'],
    images: [{ url: 'https://ghlscaleup.com/images/blog/where-to-hire-ghl-experts-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'Where to Hire GoHighLevel Experts in 2026: 6 Best Places',
    description: 'The 6 best places to find GHL professionals in 2026 — with a vetting checklist and red flags to avoid.',
    images: ['https://ghlscaleup.com/images/blog/where-to-hire-ghl-experts-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/where-to-hire-gohighlevel-experts',
  },
};

export default function WhereToHireGHLExpertsPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Where to Hire GoHighLevel Experts in 2026: 6 Best Places (+ How to Vet Them)",
            "description": "Looking for a GoHighLevel expert? Here are the 6 best places to find GHL professionals in 2026 — from the official GHL directory to Upwork, Fiverr, and specialist agencies — with a vetting checklist and red flags to avoid.",
            "image": "https://www.ghlscaleup.com/images/blog/where-to-hire-ghl-experts-og.jpg",
            "datePublished": "2026-05-11",
            "dateModified": "2026-05-11",
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
              "@id": "https://www.ghlscaleup.com/blog/where-to-hire-gohighlevel-experts"
            }
          })
        }}
      />
      <WhereToHireGHLExpertsClient />;
    </>
  )


}