// app/services/migration/clickfunnels-to-gohighlevel/page.tsx
// This is a Server Component - NO 'use client'

import {
  OrganizationSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/lib/schemas';
import ClickFunnelsMigrationClient from './client';

export const metadata = {
  title: 'ClickFunnels to GoHighLevel Migration Service | GHL Scale Up',
  description: 'We migrate your ClickFunnels funnels, contacts and sequences to GoHighLevel. URL import tool, automation rebuild, Stripe reconnection. Book a free migration assessment.',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/clickfunnels-to-gohighlevel',
  },
};

export default function ClickFunnelsMigrationPage() {
  return (
    <>
      <OrganizationSchema />
      <ServiceSchema
        name="ClickFunnels to GoHighLevel Migration Service"
        description="Professional ClickFunnels to GoHighLevel migration. We import funnels using GHL built-in importer, export and import contacts, rebuild automations natively in GHL workflows, recreate courses in GHL memberships, rebuild order bumps and upsells, reconnect Stripe and email delivery, and deliver a fully tested GoHighLevel system. No data loss. Fixed price. 3 to 5 weeks delivery."
        url="https://www.ghlscaleup.com/services/migration/clickfunnels-to-gohighlevel"
        serviceType={['CRM Migration', 'ClickFunnels Migration', 'GoHighLevel Setup', 'Funnel Migration', 'Marketing Automation Setup']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Migration Services', url: 'https://www.ghlscaleup.com/services/migration' },
          { name: 'ClickFunnels to GoHighLevel Migration', url: 'https://www.ghlscaleup.com/services/migration/clickfunnels-to-gohighlevel' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf-block', '.faq-a']} />
      <ClickFunnelsMigrationClient />
    </>
  );
}