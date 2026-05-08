// app/how-we-work/page.tsx (Server Component)
import type { Metadata } from 'next';
import HowWeWorkClient from './HowWeWorkClient';

export const metadata: Metadata = {
  title: 'How We Work — Our GoHighLevel Delivery Process | GHL Scale Up',
  description: '5-step delivery process: Understand, Design, Build, Test, Train. Fixed pricing, weekly updates, no surprises.',
  keywords: 'GoHighLevel delivery process, project workflow, fixed-price projects, CRM implementation, automation setup, training and support',
  alternates: {
    canonical: '/how-we-work'
  }
};

export default function HowWeWorkPage() {
  return <HowWeWorkClient />;
}