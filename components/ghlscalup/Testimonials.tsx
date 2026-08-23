// components/ghlscalup/Testimonials.tsx - UPDATED VERSION
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import InfoVideo from '@/components/testimonials/InfoVideo';
import { Play, Youtube } from 'lucide-react';
import Image from 'next/image';

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

  // Ensure testimonials is an array
  const testimonialsArray = Array.isArray(testimonials) ? testimonials : [];

  // Show ALL testimonials (no filtering)
  const displayedTestimonials = testimonialsArray;
  const hasMoreTestimonials = displayedTestimonials.length > visibleCount;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
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

        {/* Video Section - Three Videos Side by Side */}
        <div className="mb-12 md:mb-16 fade-in">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Video 1: Company Introduction */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <InfoVideo
                  videoSrc="https://youtu.be/mxSm7G52ZJE"
                  title="How GHL Scale Up Works"
                  description="Learn about our process and success stories"
                />
              </div>
            </div>

            {/* Video 2: Client Testimonial */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <InfoVideo
                  videoSrc="https://youtu.be/YgSBBP37b0M"
                  title="Client Success Story"
                  description="Hear from one of our satisfied clients"
                />
              </div>
            </div>

            {/* Video 3: Real Estate Agent Review */}
            <Link
              href="/case-studies/real-estate-agent-rebuild"
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-video bg-[#0B1628] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <Image
                  src="/real-estate-review.png"
                  alt="Real Estate Agent Client Review"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#0B1628]/40 group-hover:bg-[#0B1628]/50 transition-all duration-300" />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-transparent to-transparent opacity-80" />

                {/* Play Button */}
                <div className="relative z-10 w-16 h-16 md:w-16 md:h-16 bg-[#F8D000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-7 h-7 md:w-9 md:h-9 text-black/90 ml-1" />
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-[#0B1628] to-transparent">
                  <p className="text-white font-semibold text-sm md:text-base">
                    Real Estate Agent Review
                  </p>

                  <p className="text-white/70 text-xs md:text-sm">
                    Watch the full case study →
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Testimonials Grid Section - Show ALL testimonials */}
        {displayedTestimonials.length > 0 && (
          <div className="fade-in">
            <h3 className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-6 text-center">
              What Our Clients Say
            </h3>

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