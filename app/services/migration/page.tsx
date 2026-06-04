// app/services/migration/page.tsx

import {
  OrganizationSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/lib/schemas';
import MigrationClient from './client';

export const metadata = {
  title: 'GHL Migration Services | Move Any CRM to GoHighLevel | GHL Scale Up',
  description: 'Professional GoHighLevel migration service. We migrate from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho & more. Zero data loss. Fixed price. Free migration assessment.',
  keywords: 'GHL migration, migrate to GoHighLevel, ClickFunnels to GHL, HubSpot migration, CRM migration',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/migration',
  },
};

export default function MigrationPage() {
  return (
    <>
      {/* Schema Components - Server Side */}
      <OrganizationSchema />
      <ServiceSchema
        name="GoHighLevel Migration Service"
        description="Professional CRM migration service to GoHighLevel. We migrate businesses from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, Salesforce, Mailchimp, Keap, WordPress, and Pipedrive into GoHighLevel. Full data migration including contacts, pipelines, automations, funnels, and team training. Zero data loss. Fixed price. Delivered in 2 to 8 weeks depending on complexity."
        url="https://www.ghlscaleup.com/services/migration"
        serviceType={['CRM Migration', 'GoHighLevel Setup', 'Marketing Automation Migration', 'Funnel Migration', 'Data Migration']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Services', url: 'https://www.ghlscaleup.com/services' },
          { name: 'GHL Migration Services', url: 'https://www.ghlscaleup.com/services/migration' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf-block', '.faq-a']} />

      {/* Client Component with all the UI and interactivity */}
      <MigrationClient />
    </>
  );
}