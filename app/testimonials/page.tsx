// app/testimonials/page.tsx
import { getAllTestimonials, getFeaturedTestimonials } from '@/lib/sanity';
import TestimonialsPage from '@/components/testimonials/TestimonialsPage';
import Breadcrumb from '@/components/layout/Breadcrumb';
import InfoVideo from '@/components/testimonials/InfoVideo';

interface Testimonial {
  _id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  rating: number;
  [key: string]: any;
}

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

export default async function TestimonialsPageWrapper() {
  const testimonials = await getAllTestimonials();
  const featuredTestimonials = await getFeaturedTestimonials();

  // Calculate average rating with proper typing
  const totalRating = testimonials.reduce((acc: number, t: Testimonial) => acc + t.rating, 0);
  const averageRating = testimonials.length > 0 ? (totalRating / testimonials.length).toFixed(1) : '0';

  return (
    <>
      <Breadcrumb items={[{ label: 'Testimonials' }]} />
      
      {/* Hero Section with Videos */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(14,155,240,0.1),transparent)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              Client Success Stories
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-4">
              What Our <span className="text-[#F8D000]">Clients Say</span>
            </h1>
            <p className="text-white/60 text-base max-w-[600px] mx-auto">
              Real results from real businesses. See how we've helped agencies and companies scale with GoHighLevel.
            </p>
          </div>

          {/* Video Section - Two Videos Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-[1000px] mx-auto">
            {/* Video 1: Company Introduction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <InfoVideo
                videoSrc="/radhi29.mp4"
                title="How GHL Scale Up Works"
                description="Learn about our process and success stories"
              />
              <div className="p-5 text-center">
                <h4 className="text-lg font-bold text-white mb-2">Company Introduction</h4>
                <p className="text-sm text-white/60">Learn how we help businesses scale with GoHighLevel</p>
              </div>
            </div>

            {/* Video 2: Client Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <InfoVideo
                videoSrc="/video2.mp4"
                title="Client Success Story"
                description="Hear from one of our satisfied clients"
              />
              <div className="p-5 text-center">
                <h4 className="text-lg font-bold text-white mb-2">Client Testimonial</h4>
                <p className="text-sm text-white/60">Real results from a real client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-[#E8EDF4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#F8D000]">{testimonials.length}+</div>
              <div className="text-xs text-[#8A9BB0]">Happy Clients</div>
            </div>
            <div className="w-px bg-[#E8EDF4]"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#F8D000]">{averageRating}</div>
              <div className="text-xs text-[#8A9BB0]">Average Rating</div>
            </div>
            <div className="w-px bg-[#E8EDF4]"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#F8D000]">200+</div>
              <div className="text-xs text-[#8A9BB0]">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsPage testimonials={testimonials} featuredTestimonials={featuredTestimonials} />
    </>
  );
}