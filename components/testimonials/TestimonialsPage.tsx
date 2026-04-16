// components/testimonials/TestimonialsPage.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import TestimonialCard from './TestimonialCard';
import ContactForm from '@/components/ContactForm';
import { urlFor } from '@/lib/sanity';

interface TestimonialsPageProps {
  testimonials: any[];
  featuredTestimonials: any[];
}

export default function TestimonialsPage({ testimonials, featuredTestimonials }: TestimonialsPageProps) {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);

  const services = ['all', 'GHL CRM Setup', 'AI Workflow Automation', 'SEO Strategy', 'Google Ads', 'Full Service Package'];
  
  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.serviceUsed?.includes(filter));

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  console.log("TESTIMONIALS:", testimonials);

  // Calculate average rating
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  const totalTestimonials = testimonials.length;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
            Client Success Stories
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-4">
            What Our <span className="text-[#F8D000]">Clients Say</span>
          </h1>
          <p className="text-white/60 text-base max-w-[600px] mx-auto mb-8">
            Real results from real businesses. See how we've helped agencies and companies scale with GoHighLevel.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-12">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#F8D000]">{totalTestimonials}+</div>
              <div className="text-xs text-white/50">Happy Clients</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#F8D000]">{averageRating.toFixed(1)}</div>
              <div className="text-xs text-white/50">Average Rating</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#F8D000]">200+</div>
              <div className="text-xs text-white/50">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="py-16 bg-[#F4F7FA]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Featured Stories
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A]">Success Stories That Stand Out</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredTestimonials.slice(0, 2).map((testimonial) => (
                <TestimonialCard key={testimonial._id} testimonial={testimonial} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Testimonials with Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setFilter(service)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === service
                    ? 'bg-[#F8D000] text-[#0B1421]'
                    : 'bg-[#F4F7FA] text-[#4A5568] hover:bg-[#E8EDF4]'
                }`}
              >
                {service === 'all' ? 'All Services' : service}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#4A5568]">No testimonials found for this service.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTestimonials.slice(0, visibleCount).map((testimonial) => (
                  <TestimonialCard key={testimonial._id} testimonial={testimonial} variant="grid" />
                ))}
              </div>
              
              {/* Load More Button */}
              {visibleCount < filteredTestimonials.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={loadMore}
                    className="bg-[#0E9BF0] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0C88D4] transition-all"
                  >
                    Load More Testimonials
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-16 bg-gradient-to-b from-[#1C2E4A] to-[#111E30]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                Ready to Become Our<br />
                Next <span className="text-[#F8D000]">Success Story?</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Join 50+ happy clients who've transformed their business with our GoHighLevel expertise.
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <span className="flex items-center gap-1">✓ Free consultation</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="flex items-center gap-1">✓ No obligation</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="flex items-center gap-1">✓ Custom strategy</span>
              </div>
            </div>
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <ContactForm
                  variant="dark"
                  title="Start Your Success Story"
                  subtitle="Fill out the form and our team will reach out within 24 hours."
                  buttonText="Get Started →"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}