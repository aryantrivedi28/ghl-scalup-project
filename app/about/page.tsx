// app/about/page.tsx
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About GHL Scale Up GoHighLevel Expert Agency | Our Team',
  description: 'GHL Scale Up is a dedicated GoHighLevel expert agency with 200+ builds across 6 countries. Meet the team behind the setups, automations, and systems that help agencies scale.',
  keywords: 'about GHL Scale Up, GoHighLevel agency, our team, our story, company mission, GoHighLevel experts',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />
      <AboutClient />
    </>
  );
}