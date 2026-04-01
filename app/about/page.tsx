// app/about/page.tsx
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About GHL Scale Up | GoHighLevel Expert Agency — Our Team & Story',
  description: 'Meet the team behind GHL Scale Up. Founded by Aryan Trivedi under Finzie, we are a dedicated GoHighLevel agency with 200+ projects delivered across 6 countries. Learn our story, mission, and the people who build your GHL systems.',
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />
      <AboutClient />
    </>
  );
}