// app/contact/page.tsx
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Book a Free GoHighLevel Strategy Call | GHL Scale Up',
  description: 'Book a free 30-minute strategy call with GHL Scale Up. We audit your current setup, identify gaps, and give you a clear action plan. Reply within 4 hours on business days.',
  openGraph: {
    title: 'Contact GHL Scale Up Free Strategy Call',
    description: 'Book a free 30-minute GoHighLevel strategy call. Get expert advice on CRM setup, automation, funnels, and more.',
    type: 'website',
    url: 'https://www.ghlscaleup.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GHL Scale Up Free Strategy Call',
    description: 'Book a free 30-minute GoHighLevel strategy call.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}