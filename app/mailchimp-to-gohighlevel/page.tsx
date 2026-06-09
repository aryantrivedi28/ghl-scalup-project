// app/mailchimp-to-gohighlevel/page.tsx

import ClientPage from './client';

export const metadata = {
  title: 'Mailchimp to GoHighLevel Migration Service | GHL Scale Up',
  description: 'Migrate from Mailchimp to GoHighLevel without losing subscribers, breaking compliance, or dropping deliverability. Contacts, automations and templates fully migrated. Fixed price.',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/mailchimp-to-gohighlevel',
  },
  openGraph: {
    title: 'Mailchimp to GoHighLevel Migration Service | GHL Scale Up',
    description: 'Migrate from Mailchimp to GoHighLevel. Contacts, unsubscribes, audiences, automations and templates fully migrated. CAN-SPAM compliance protected. Fixed price.',
    url: 'https://www.ghlscaleup.com/mailchimp-to-gohighlevel',
    type: 'website',
    images: [
      {
        url: 'https://www.ghlscaleup.com/og-migration-mailchimp.png',
        width: 1200,
        height: 630,
        alt: 'Mailchimp to GoHighLevel Migration Service',
      },
    ],
    siteName: 'GHL Scale Up',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mailchimp to GoHighLevel Migration Service | GHL Scale Up',
    description: 'Migrate from Mailchimp to GoHighLevel. Contacts, unsubscribes, audiences, automations and templates fully migrated. CAN-SPAM compliance protected. Fixed price.',
    images: ['https://www.ghlscaleup.com/og-migration-mailchimp.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'last-modified': '2026-05-28',
  },
};

export default function Page() {
  return <ClientPage />;
}