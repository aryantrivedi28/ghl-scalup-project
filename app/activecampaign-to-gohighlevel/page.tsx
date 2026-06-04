// app/services/migration/activecampaign-to-gohighlevel/page.tsx
// This is a Server Component - NO 'use client'

import {
  OrganizationSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/lib/schemas';
import ActiveCampaignMigrationClient from './client';

export const metadata = {
  title: 'ActiveCampaign to GoHighLevel Migration Service | GHL Scale Up',
  description: 'We migrate your ActiveCampaign contacts, tags and automations to GoHighLevel. Includes email domain warmup to protect deliverability. 200+ migrations. Book a free assessment.',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/activecampaign-to-gohighlevel',
  },
};

export default function ActiveCampaignMigrationPage() {
  return (
    <>
      <OrganizationSchema />
      <ServiceSchema
        name="ActiveCampaign to GoHighLevel Migration Service"
        description="Professional ActiveCampaign to GoHighLevel migration. We export contacts with full tag history, rebuild all AC automations natively in GHL workflows, migrate deal pipelines, email templates, forms, and landing pages and include a structured email domain warm-up to protect deliverability after the switch. No data loss. Fixed price. Delivered in 3 to 5 weeks."
        url="https://www.ghlscaleup.com/services/migration/activecampaign-to-gohighlevel"
        serviceType={['CRM Migration', 'ActiveCampaign Migration', 'GoHighLevel Setup', 'Email Automation Migration', 'Marketing Automation Setup']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Migration Services', url: 'https://www.ghlscaleup.com/services/migration' },
          { name: 'ActiveCampaign to GoHighLevel Migration', url: 'https://www.ghlscaleup.com/services/migration/activecampaign-to-gohighlevel' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf-block', '.faq-a']} />
      <ActiveCampaignMigrationClient />
    </>
  );
}