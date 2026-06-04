// app/services/migration/hubspot-to-gohighlevel/page.tsx
// This is a Server Component - NO 'use client'

import {
  OrganizationSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/lib/schemas';
import HubspotMigrationClient from './client';

export const metadata = {
  title: 'HubSpot to GoHighLevel Migration Service | GHL Scale Up',
  description: 'We migrate your HubSpot contacts, pipelines and workflows to GoHighLevel with zero data loss. Most agencies save $500 to $8,000/mo after switching. Book a free assessment.',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/hubspot-to-gohighlevel',
  },
};

export default function HubspotMigrationPage() {
  return (
    <>
      <OrganizationSchema />
      <ServiceSchema 
        name="HubSpot to GoHighLevel Migration Service"
        description="Professional HubSpot to GoHighLevel migration service. We transfer contacts, custom fields, deal pipelines, and deal history from HubSpot, then rebuild your automations, forms, and workflows natively inside GoHighLevel. No data loss. Fixed price. Delivered in 3 to 5 weeks."
        url="https://www.ghlscaleup.com/services/migration/hubspot-to-gohighlevel"
        serviceType={['CRM Migration', 'HubSpot Migration', 'GoHighLevel Configuration', 'Marketing Automation Setup']}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Migration Services', url: 'https://www.ghlscaleup.com/services/migration' },
          { name: 'HubSpot to GoHighLevel Migration', url: 'https://www.ghlscaleup.com/services/migration/hubspot-to-gohighlevel' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf', '.faq-a']} />
      <HubspotMigrationClient />
    </>
  );
}