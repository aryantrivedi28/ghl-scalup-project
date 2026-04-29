// app/services/crm-setup/page.tsx
import ServiceCRMSetup from '@/components/ghlscalup/services/CRMSetup'


export const metadata = {
  title: 'GHL CRM Setup | GHL Scale Up',
  description: 'Multi-channel drip campaigns, nurture sequences, appointment reminders, and re-engagement workflows. 200+ projects delivered. Get a free audit.',
  keywords: 'GHL CRM Setup, CRM Setup, CRM Automation,'
};

export default function CRMSetupPage() {
  return (
    <main>
      <ServiceCRMSetup />
    </main>
  )
}