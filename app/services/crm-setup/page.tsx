// app/services/crm-setup/page.tsx
import ServiceCRMSetup from '@/components/ghlscalup/services/CRMSetup'


export const metadata = {
  title: 'GoHighLevel CRM Setup and Configuration Done in 5 to 7 Days',
  description: 'We configure your GoHighLevel CRM from scratch pipelines, custom fields, tags, smart lists, and automations. Production-ready in 5 to 7 business days. Book a free call.',
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