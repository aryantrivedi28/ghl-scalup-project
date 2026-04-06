// app/contact/page.tsx
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact GHL Scale Up — Book a Free GoHighLevel Strategy Call',
  description: 'Get in touch. Book a free 30-minute strategy call or email us. Based in Gurugram, India — serving 6 countries.',
  openGraph: {
    title: 'Contact GHL Scale Up — Free Strategy Call',
    description: 'Book a free 30-minute GoHighLevel strategy call. Get expert advice on CRM setup, automation, funnels, and more.',
    type: 'website',
    url: 'https://ghlscaleup.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GHL Scale Up — Free Strategy Call',
    description: 'Book a free 30-minute GoHighLevel strategy call.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}