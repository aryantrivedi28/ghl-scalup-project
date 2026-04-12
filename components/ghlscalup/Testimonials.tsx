// components/ghlscalup/Testimonials.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import InfoVideo from '@/components/testimonials/InfoVideo';

interface Testimonial {
  _id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  companyLogo?: any;
  clientImage?: any;
  testimonial: string;
  rating: number;
  serviceUsed?: string[];
  projectOutcome?: string;
  featured?: boolean;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonialsArray = Array.isArray(testimonials) ? testimonials : [];
  
  // Separate featured and non-featured testimonials
  const featuredTestimonials = testimonialsArray.filter(t => t.featured === true);
  const nonFeaturedTestimonials = testimonialsArray.filter(t => t.featured !== true);
  
  // Determine what to show based on active filter
  const getDisplayedTestimonials = () => {
    if (activeFilter === 'featured') {
      return featuredTestimonials;
    }
    // If no non-featured testimonials exist, show featured ones in 'all' as well
    if (nonFeaturedTestimonials.length === 0) {
      return featuredTestimonials;
    }
    return nonFeaturedTestimonials;
  };
  
  const displayedTestimonials = getDisplayedTestimonials();
  const hasMoreTestimonials = displayedTestimonials.length > visibleCount;
  const hasFeaturedTestimonials = featuredTestimonials.length > 0;
  const hasNonFeaturedTestimonials = nonFeaturedTestimonials.length > 0;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleFilterChange = (filter: 'all' | 'featured') => {
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  // If no testimonials at all
  if (testimonialsArray.length === 0) {
    return (
      <section className="py-12 md:py-20 bg-[#F4F7FA]" id="testimonials">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center py-12 bg-white rounded-2xl">
            <p className="text-[#4A5568]">No testimonials found. Add some in Sanity!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-[#F4F7FA]" id="testimonials" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center fade-in">
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3.5 justify-center">
            Client Testimonials
          </div>
          <h2 className="text-2xl md:text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-[#1C2E4A] px-4">
            Stories from Agencies Who<br className="hidden sm:block" /> 
            <span className="text-[#0E9BF0]">Trust Our GHL Expertise</span>
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-4">
            See what our clients say about working with us and how we've helped transform their businesses.
          </p>
        </div>

        {/* Filter Tabs - Show both tabs if there are featured testimonials */}
        {hasFeaturedTestimonials && hasNonFeaturedTestimonials && (
          <div className="flex justify-center gap-3 mb-8 md:mb-12 fade-in">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#F8D000] text-[#0B1421] shadow-md'
                  : 'bg-white text-[#4A5568] hover:bg-gray-100'
              }`}
            >
              Client Stories ({nonFeaturedTestimonials.length})
            </button>
            <button
              onClick={() => handleFilterChange('featured')}
              className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                activeFilter === 'featured'
                  ? 'bg-[#F8D000] text-[#0B1421] shadow-md'
                  : 'bg-white text-[#4A5568] hover:bg-gray-100'
              }`}
            >
              Featured Stories ({featuredTestimonials.length})
            </button>
          </div>
        )}

        {/* Show a message when only one type exists */}
        {hasFeaturedTestimonials && !hasNonFeaturedTestimonials && (
          <div className="text-center mb-8">
            <p className="text-[#4A5568] text-sm">
              Showing {featuredTestimonials.length} featured {featuredTestimonials.length === 1 ? 'story' : 'stories'}
            </p>
          </div>
        )}

        {/* Video Section - Always visible */}
        <div className="mb-12 md:mb-16 fade-in">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Watch Our Story
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mb-3 md:mb-4">
                See How We Help Businesses<br />
                <span className="text-[#0E9BF0]">Scale with GoHighLevel</span>
              </h3>
              <p className="text-[#4A5568] text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Watch this short video to understand our approach, process, and how we've helped over 50+ agencies
                transform their operations using GoHighLevel automation and AI.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#F8D000]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#F8D000]">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-[#8A9BB0]">
                  <span className="font-bold text-[#F8D000]">200+</span> projects delivered
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <InfoVideo
                videoSrc="/radhi29.mp4"
                title="How GHL Scale Up Works"
                description="Learn about our process and success stories"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Grid Section */}
        {displayedTestimonials.length > 0 && (
          <div className="fade-in">
            {/* Section Title based on filter and content */}
            {activeFilter === 'featured' && (
              <h3 className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-6 text-center">
                ⭐ Featured Success Stories
              </h3>
            )}
            {activeFilter === 'all' && hasNonFeaturedTestimonials && (
              <h3 className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-6 text-center">
                What Our Clients Say
              </h3>
            )}
            {activeFilter === 'all' && !hasNonFeaturedTestimonials && hasFeaturedTestimonials && (
              <h3 className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-6 text-center">
                ⭐ Featured Success Stories
              </h3>
            )}
            
            {/* Grid Layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {displayedTestimonials.slice(0, visibleCount).map((testimonial, index) => (
                <div
                  key={testimonial._id}
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TestimonialCard testimonial={testimonial} variant="grid" />
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            {hasMoreTestimonials && (
              <div className="text-center mt-8 md:mt-10">
                <button
                  onClick={loadMore}
                  className="bg-[#0E9BF0] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-[#0C88D4] transition-all hover:-translate-y-0.5"
                >
                  Load More ({displayedTestimonials.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}