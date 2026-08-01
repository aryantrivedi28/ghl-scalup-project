import { Metadata } from 'next';
import Script from 'next/script';
import GoHighLevelCalendarBookingClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Calendar & Booking: Complete Setup Guide + Calendly Comparison (2026) | GHL Scale Up',
  description: 'How the GoHighLevel calendar and booking system works in 2026: every calendar type, full setup walkthrough, sync troubleshooting, no-show automation, and an honest Calendly cost comparison.',
  keywords: 'gohighlevel calendar, gohighlevel booking system, gohighlevel vs calendly, gohighlevel round robin calendar, gohighlevel appointment reminders, gohighlevel calendar setup, replace calendly with gohighlevel, gohighlevel calendar sync outlook',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'GoHighLevel Calendar & Booking: The Complete 2026 Guide',
    description: 'How the GoHighLevel calendar and booking system works in 2026: every calendar type, full setup walkthrough, sync troubleshooting, no-show automation, and an honest Calendly cost comparison.',
    type: 'article',
    publishedTime: '2026-07-30T00:00:00Z',
    modifiedTime: '2026-07-30T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['GoHighLevel', 'Calendar', 'Booking', 'Calendly', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/gohighlevel-calendar-booking-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'GoHighLevel Calendar & Booking: The Complete 2026 Guide',
    description: 'How the GoHighLevel calendar and booking system works in 2026: every calendar type, full setup walkthrough, sync troubleshooting, no-show automation, and an honest Calendly cost comparison.',
    images: ['https://www.ghlscaleup.com/images/blog/gohighlevel-calendar-booking-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-calendar-booking',
  },
};

export default function GoHighLevelCalendarBookingPage() {
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
            "headline": "GoHighLevel Calendar & Booking: The Complete 2026 Guide",
            "description": "How the GoHighLevel calendar and booking system works in 2026: every calendar type, full setup walkthrough, sync troubleshooting, no-show automation, and an honest Calendly cost comparison.",
            "image": "https://www.ghlscaleup.com/images/blog/gohighlevel-calendar-booking-og.jpg",
            "datePublished": "2026-07-30",
            "dateModified": "2026-07-30",
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
              "@id": "https://www.ghlscaleup.com/blog/gohighlevel-calendar-booking"
            }
          })
        }}
      />
      <GoHighLevelCalendarBookingClient />
    </>
  );
}