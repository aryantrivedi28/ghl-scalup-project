import { getAllTestimonialsForHomepage } from '@/lib/sanity';
import LandingPageClient from './LandingPageClient';

export default async function LandingPage() {
  let testimonials = [];

  try {
    testimonials = await getAllTestimonialsForHomepage();
  } catch (error) {
    console.error('Failed to load testimonials:', error);
  }

  return <LandingPageClient testimonials={testimonials} />;
}