// app/testimonials/page.tsx
import { getAllTestimonials, getFeaturedTestimonials } from '@/lib/sanity';
import TestimonialsPage from '@/components/testimonials/TestimonialsPage';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Client Testimonials | GHL Scale Up',
  description: 'Read what our clients say about our GoHighLevel services. Real results from real businesses. 50+ happy clients, 4.9 average rating.',
  keywords: 'GHL testimonials, GoHighLevel reviews, client success stories, GHL agency reviews',
  openGraph: {
    title: 'Client Testimonials | GHL Scale Up',
    description: 'Read what our clients say about our GoHighLevel services. Real results from real businesses.',
    type: 'website',
  },
};

export default async function Testimonials() {
  const testimonials = await getAllTestimonials();
  const featuredTestimonials = await getFeaturedTestimonials();

  return (
    <>
      <Breadcrumb items={[{ label: 'Testimonials' }]} />
      <TestimonialsPage testimonials={testimonials} featuredTestimonials={featuredTestimonials} />
    </>
  );
}