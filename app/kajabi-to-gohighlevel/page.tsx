// app/services/migration/kajabi-to-gohighlevel/page.tsx
// This is a Server Component - NO 'use client'

import {
  OrganizationSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/lib/schemas';
import KajabiMigrationClient from './client';

export const metadata = {
  title: 'Kajabi to GoHighLevel Migration Service | GHL Scale Up',
  description: 'We migrate your Kajabi courses, members, contacts and automations to GoHighLevel. Includes course import, quiz rebuild, 301 redirects. Book a free migration assessment.',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/kajabi-to-gohighlevel',
  },
};

export default function KajabiMigrationPage() {
  return (
    <>
      <OrganizationSchema />
      <ServiceSchema
        name="Kajabi to GoHighLevel Migration Service"
        description="Professional Kajabi to GoHighLevel migration. We import courses using GHL native Kajabi importer, transfer contacts and member records, rebuild email automations and funnels inside GHL, recreate quizzes and assessments, configure Stripe to maintain active subscriptions, and publish 301 redirects for all high-traffic Kajabi URLs. Zero member access disruption. Fixed price."
        url="https://www.ghlscaleup.com/services/migration/kajabi-to-gohighlevel"
        serviceType={['CRM Migration', 'Kajabi Migration', 'GoHighLevel Membership Setup', 'Course Migration', 'Marketing Automation Setup']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Migration Services', url: 'https://www.ghlscaleup.com/services/migration' },
          { name: 'Kajabi to GoHighLevel Migration', url: 'https://www.ghlscaleup.com/services/migration/kajabi-to-gohighlevel' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf-block', '.faq-a']} />
      <KajabiMigrationClient />
    </>
  );
}