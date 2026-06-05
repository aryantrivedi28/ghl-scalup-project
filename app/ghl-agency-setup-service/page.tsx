// app/services/agency-setup/page.tsx

import ClientPage from './client';

export const metadata = {
  title: 'GoHighLevel Agency Setup Service Live in 5 to 7 Days',
  description: 'New GoHighLevel agency account set up from scratch. CRM, pipelines, automations, and email domain. Live in 5 to 7 business days. Book a free call.',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/agency-setup',
  },
  openGraph: {
    title: 'GoHighLevel Agency Setup Service Live in 5 to 7 Days',
    description: 'New GoHighLevel agency account set up from scratch. CRM, pipelines, automations, and email domain. Live in 5 to 7 business days. Book a free call.',
    url: 'https://www.ghlscaleup.com/services/agency-setup',
    type: 'website',
  },
  twitter: {
    title: 'GoHighLevel Agency Setup Service Live in 5 to 7 Days',
    description: 'New GoHighLevel agency account set up from scratch. CRM, pipelines, automations, and email domain. Live in 5 to 7 business days. Book a free call.',
  },
};

export default function Page() {
  return <ClientPage />;
}