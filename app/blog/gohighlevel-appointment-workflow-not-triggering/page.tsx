import { Metadata } from 'next';
import GoHighLevelAppointmentWorkflowNotTriggeringClient from './client';

export const metadata: Metadata = {
  title: 'GoHighLevel Appointment Workflow Not Triggering? Troubleshooting Guide',
  description: 'An appointment was booked, rescheduled, or cancelled in GoHighLevel, but the workflow didn\'t start. Learn exactly which trigger, status, and filter to check.',
  keywords: 'GoHighLevel appointment workflow not triggering, GoHighLevel appointment trigger not working, GoHighLevel Appointment Status trigger, GoHighLevel Customer Booked Appointment, GoHighLevel Service Booking trigger, GoHighLevel appointment workflow troubleshooting, GoHighLevel calendar filter, GoHighLevel appointment status filter, GoHighLevel Modified By filter, GoHighLevel reschedule workflow, GoHighLevel cancellation workflow',
  openGraph: {
    title: 'GoHighLevel Appointment Workflow Not Triggering? Troubleshooting Guide',
    description: 'An appointment was booked, rescheduled, or cancelled in GoHighLevel, but the workflow didn\'t start. Learn exactly which trigger, status, and filter to check.',
    url: 'https://www.ghlscaleup.com/blog/gohighlevel-appointment-workflow-not-triggering',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/blog-images/gohighlevel-appointment-workflow-not-triggering-og.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Appointment Workflow Not Triggering? How to Troubleshoot Appointment Triggers',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-24T00:00:00.000Z',
    modifiedTime: '2026-09-24T00:00:00.000Z',
    authors: ['GHL Scale Up Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Appointment Workflow Not Triggering? Troubleshooting Guide',
    description: 'An appointment was booked, rescheduled, or cancelled in GoHighLevel, but the workflow didn\'t start. Learn exactly which trigger, status, and filter to check.',
    images: ['/blog-images/gohighlevel-appointment-workflow-not-triggering-twitter.jpg'],
    site: '@GHLScaleUp',
    creator: '@GHLScaleUp',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/gohighlevel-appointment-workflow-not-triggering',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'GHL Scale Up Team' }],
  category: 'GoHighLevel Troubleshooting',
};

// JSON-LD Schema for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GoHighLevel Appointment Workflow Not Triggering? How to Troubleshoot Appointment Triggers',
  description:
    'An appointment was booked, rescheduled, or cancelled in GoHighLevel, but the workflow didn\'t start. Learn exactly which trigger, status, and filter to check.',
  image: 'https://www.ghlscaleup.com/blog-images/gohighlevel-appointment-workflow-not-triggering-og.jpg',
  datePublished: '2026-09-24T00:00:00.000Z',
  dateModified: '2026-09-24T00:00:00.000Z',
  author: {
    '@type': 'Organization',
    name: 'GHL Scale Up Team',
    url: 'https://www.ghlscaleup.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GHL Scale Up',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.ghlscaleup.com/web-app-manifest-192x192.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.ghlscaleup.com/blog/gohighlevel-appointment-workflow-not-triggering',
  },
  about: {
    '@type': 'Thing',
    name: 'GoHighLevel Appointment Workflow Troubleshooting',
    description: 'A comprehensive guide to fixing a GoHighLevel appointment workflow that isn\'t triggering',
  },
};

// JSON-LD Schema for BreadcrumbList
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.ghlscaleup.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.ghlscaleup.com/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'GoHighLevel Appointment Workflow Not Triggering? How to Troubleshoot Appointment Triggers',
      item: 'https://www.ghlscaleup.com/blog/gohighlevel-appointment-workflow-not-triggering',
    },
  ],
};

// JSON-LD Schema for FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why isn\'t my GoHighLevel appointment workflow triggering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most often because the workflow\'s trigger isn\'t configured for the specific event that occurred — wrong trigger type, wrong calendar, wrong status, or a Modified By filter that excludes how the appointment was actually created or changed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why doesn\'t a booked appointment trigger my GoHighLevel workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confirm which trigger the workflow uses (Appointment Status, the legacy Customer Booked Appointment, or Service Booking for Services v2), that it\'s Published, and that its calendar and status filters match the actual booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I trigger a workflow when an appointment is booked in GoHighLevel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add an Appointment Status trigger, set its status filter to the booking event you want (typically New or Unconfirmed), scope it to the correct calendar, and publish the workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my appointment workflow work on one calendar but not another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The trigger\'s calendar (or calendar group) filter is scoped to specific calendars — a booking on an unlisted calendar won\'t qualify even if every other condition matches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why doesn\'t my GoHighLevel workflow trigger after an appointment is rescheduled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rescheduling updates the appointment\'s status rather than creating a new booking event, so re-entry requires Allow Re-entry to be enabled and the rescheduled appointment to still match the trigger\'s filters — it isn\'t covered by the same always-allow exception new bookings get.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why doesn\'t a cancelled appointment trigger my workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The trigger has to be explicitly configured to catch the Cancelled status — a trigger built for New or Confirmed bookings won\'t also fire on cancellation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the same contact trigger a GoHighLevel appointment workflow more than once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes for new bookings, which re-enter regardless of Allow Re-entry. For status-change events on an existing appointment, it depends on Allow Re-entry being enabled and the contact not currently being active in that workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know whether my appointment actually enrolled the contact in the workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check Enrollment History for that contact. A recorded enrollment confirms the trigger worked; its absence means the problem is upstream, in trigger selection, calendar, status, or filters.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <GoHighLevelAppointmentWorkflowNotTriggeringClient />
    </>
  );
}