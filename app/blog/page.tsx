// app/blog/page.tsx
import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'GoHighLevel Blog Guides, Reviews and Expert Tips | GHL Scale Up',
  description: 'In-depth GoHighLevel guides, platform comparisons, setup tutorials, and migration walkthroughs. Written by a team with 200+ real GHL builds delivered.',
  keywords: 'GoHighLevel blog, GHL guides, automation tips, SaaS strategies, marketing insights',
  openGraph: {
    title: 'GoHighLevel Blog Guides, Reviews and Expert Tips | GHL Scale Up',
    description: 'In-depth GoHighLevel guides, platform comparisons, setup tutorials, and migration walkthroughs. Written by a team with 200+ real GHL builds delivered.',
    type: 'website',
    url: 'https://www.ghlscaleup.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Blog Guides, Reviews and Expert Tips | GHL Scale Up',
    description: 'In-depth GoHighLevel guides, platform comparisons, setup tutorials, and migration walkthroughs. Written by a team with 200+ real GHL builds delivered.',
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}