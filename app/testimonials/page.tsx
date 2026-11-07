// app/testimonials/page.tsx
import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import TestimonialsPage from '@/components/testimonials/TestimonialsPage';
import { TESTIMONIALS } from '@/components/testimonials/data/testimonialsData';

export const metadata: Metadata = {
  title: 'Client Testimonials — GHL Scale Up',
  description:
    'Read what real GHL Scale Up clients say about their GoHighLevel setups, CRM builds, and automation projects. Real clients, real experiences, real results.',
  keywords:
    'GHL testimonials, GoHighLevel reviews, client success stories, GHL agency reviews',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials — GHL Scale Up',
    description:
      'Read what real GHL Scale Up clients say about their GoHighLevel setups, CRM builds, and automation projects.',
    url: 'https://www.ghlscaleup.com/testimonials',
    type: 'website',
    siteName: 'GHL Scale Up',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials — GHL Scale Up',
    description:
      'Read what real GHL Scale Up clients say about their GoHighLevel setups, CRM builds, and automation projects.',
  },
};

export default function TestimonialsPageWrapper() {
  // Compute stats server-side so they render instantly (no client JS needed)
  const total = TESTIMONIALS.length;
  const averageRating =
    total > 0
      ? (
          TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / total
        ).toFixed(1)
      : '0';

  // BreadcrumbList schema for SEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.ghlscaleup.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Testimonials',
        item: 'https://www.ghlscaleup.com/testimonials',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb items={[{ label: 'Testimonials' }]} />

      <TestimonialsPage
        testimonials={TESTIMONIALS}
        averageRating={averageRating}
        totalClients={total}
      />
    </>
  );
}