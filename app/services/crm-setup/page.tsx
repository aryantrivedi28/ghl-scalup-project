// app/services/crm-setup/page.tsx
import ServiceCRMSetup from '@/components/ghlscalup/services/CRMSetup'


export const metadata = {
  title: 'CRM Setup Service | GHL Scale Up',
  description: 'Hire a GoHighLevel CRM expert. We configure pipelines, automations, speed-to-lead workflows & sub-accounts for agencies and service businesses.',
  keywords: 'GHL CRM Setup, CRM Setup, CRM Automation,',
  alternates: {
    canonical: '/services/crm-setup',
  },
};

export default function CRMSetupPage() {
  return (
    <main>
      <ServiceCRMSetup />
    </main>
  )
}