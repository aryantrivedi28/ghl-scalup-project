// app/blog/page.tsx
import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog — GoHighLevel Tips & Marketing Insights | GHL Scale Up',
  description: 'Practical GHL guides, automation tips, SaaS strategies, and marketing insights to help you scale your business.',
  keywords: 'GoHighLevel blog, GHL guides, automation tips, SaaS strategies, marketing insights',
  openGraph: {
    title: 'Blog — GoHighLevel Tips & Marketing Insights | GHL Scale Up',
    description: 'Practical GHL guides, automation tips, SaaS strategies, and marketing insights to help you scale your business.',
    type: 'website',
    url: 'https://ghlscaleup.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — GoHighLevel Tips & Marketing Insights | GHL Scale Up',
    description: 'Practical GHL guides, automation tips, SaaS strategies, and marketing insights.',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}