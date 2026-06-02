// app/how-we-work/page.tsx (Server Component)
import type { Metadata } from 'next';
import HowWeWorkClient from './HowWeWorkClient';

export const metadata: Metadata = {
  title: 'How GHL Scale Up Works Our GoHighLevel Build Process',
  description: 'Discovery, scope, build, test, handover. GHL Scale Up delivers GoHighLevel systems from first call to live account in 5 to 7 business days. See the full process.',
  keywords: 'GoHighLevel delivery process, project workflow, fixed-price projects, CRM implementation, automation setup, training and support',
  alternates: {
    canonical: '/how-we-work'
  }
};

export default function HowWeWorkPage() {
  return <HowWeWorkClient />;
}