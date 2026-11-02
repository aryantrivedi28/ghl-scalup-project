// components/ghlscalup/Testimonials.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import InfoVideo from '@/components/testimonials/InfoVideo';
import { Play } from 'lucide-react';
import Image from 'next/image';

// ---------------------------------------------------------------------------
// HARDCODED TESTIMONIALS
// Replace / add your real client details below.
// clientImage: string  →  path inside /public (e.g. "/clients/john.jpg")
//              or omit it to render an initial-based avatar.
// ---------------------------------------------------------------------------
export interface Testimonial {
  _id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  clientImage?: string;   // optional image path
  testimonial: string;
  rating: number;         // 0–5
  serviceUsed?: string[];
  projectOutcome?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    _id: 't1',
    clientName: 'Elia',
    clientRole: 'Founder',
    companyName: 'RiverEnergia',
    // clientImage: '/clients/elia.jpg',
    testimonial:
      'GHL Scale Up handled our SaaS setup and managed the entire GoHighLevel system end to end. Solid execution and great support throughout.',
    rating: 5,
    serviceUsed: ['GHL CRM Setup', 'White-Label SaaS', 'Full Service Package'],
    projectOutcome: 'End-to-end GHL SaaS setup',
  },
  {
    _id: 't2',
    clientName: 'Steven',
    clientRole: 'Founder',
    companyName: '1 AI Secretary',
    // clientImage: '/clients/steven.jpg',
    testimonial:
      "Amazing work with Aryan and the GHL Scale Up team. They set up our voice agent smoothly and it's working exactly as expected. Super reliable and easy to work with.",
    rating: 5,
    serviceUsed: ['AI Workflow Automation', 'GHL', 'GHL CRM Setup'],
    projectOutcome: 'AI voice agent live & reliable',
  },
  {
    _id: 't3',
    clientName: 'Shanna',
    clientRole: 'Founder',
    companyName: 'Therapy SEO',
    // clientImage: '/clients/shanna.jpg',
    testimonial:
      'Aryan and his team helped us set up our website and a complete onboarding funnel for our clients. Everything was structured well and executed seamlessly.',
    rating: 5,
    serviceUsed: ['Funnel Development', 'SEO Strategy', 'GHL CRM Setup'],
    projectOutcome: 'Website + onboarding funnel launched',
  },
  {
    _id: 't4',
    clientName: 'Sam Kabiri',
    clientRole: 'Real Estate Professional',
    companyName: 'Real Estate',
    // clientImage: '/clients/sam.jpg',
    testimonial:
      'GHL Scale Up has been a valuable partner in strengthening our online presence. Their team understands the importance of presenting our services clearly and creating a professional experience for potential homebuyers. The focus on our business needs, communication, and digital growth has made the collaboration a positive experience. I appreciate their support and commitment to helping our business grow.',
    rating: 5,
    serviceUsed: ['Social Media Marketing', 'Google Ads', 'Funnel Development'],
    projectOutcome: 'Stronger online presence',
  },
  {
    _id: 't5',
    clientName: 'Stanley Iroegbu',
    clientRole: 'Founder & Owner',
    companyName: 'LumenGrowth.ai',
    // clientImage: '/clients/stanley.jpg',
    testimonial:
      'Working with GHL Scale Up has been a positive experience for our business. Their focus on digital solutions, automation, and improving online business processes aligns well with our growth goals. Clear communication and an understanding of our business needs are essential, and we value a practical approach to building systems that support long-term growth.',
    rating: 5,
    serviceUsed: ['AI Workflow Automation', 'GHL CRM Setup', 'Full Service Package'],
    projectOutcome: 'Scalable growth systems built',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

        {/* Video Section */}
        <div className="mb-12 md:mb-16 fade-in">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <InfoVideo
                  videoSrc="https://youtu.be/mxSm7G52ZJE"
                  title="How GHL Scale Up Works"
                  description="Learn about our process and success stories"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <InfoVideo
                  videoSrc="https://youtu.be/YgSBBP37b0M"
                  title="Client Success Story"
                  description="Hear from one of our satisfied clients"
                />
              </div>
            </div>

            <Link
              href="/case-studies/real-estate-agent-rebuild"
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-video bg-[#0B1628] flex items-center justify-center overflow-hidden">
                <Image
                  src="/real-estate-review.png"
                  alt="Real Estate Agent Client Review"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-[#0B1628]/40 group-hover:bg-[#0B1628]/50 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-transparent to-transparent opacity-80" />

                <div className="relative z-10 w-16 h-16 md:w-16 md:h-16 bg-[#F8D000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-7 h-7 md:w-9 md:h-9 text-black/90 ml-1" />
                </div>

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

        {/* Testimonials Grid — all hardcoded items shown */}
        <div className="fade-in">
          <h3 className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-6 text-center">
            What Our Clients Say
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial._id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <TestimonialCard testimonial={testimonial} variant="grid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}