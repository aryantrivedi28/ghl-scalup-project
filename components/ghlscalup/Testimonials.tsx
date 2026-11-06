// components/ghlscalup/Testimonials.tsx
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import InfoVideo from '@/components/testimonials/InfoVideo';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// ---------------------------------------------------------------------------
// HARDCODED TESTIMONIALS — just keep adding objects here, carousel handles it
//
// clientImage (optional): path inside /public, e.g. '/clients/elia.jpg'
// Drop photos into public/clients/ → uncomment the line → done.
// ---------------------------------------------------------------------------
export interface Testimonial {
  _id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  clientImage?: string;
  testimonial: string;
  rating: number;
  serviceUsed?: string[];
  projectOutcome?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    _id: 't4',
    clientName: 'Sam Kabiri',
    clientRole: 'Real Estate Professional',
    companyName: 'Real Estate',
    clientImage: '/clients/samk.jpg',
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
    clientImage: '/clients/stanley.jpg',
    testimonial:
      'Working with GHL Scale Up has been a positive experience for our business. Their focus on digital solutions, automation, and improving online business processes aligns well with our growth goals. Clear communication and an understanding of our business needs are essential, and we value a practical approach to building systems that support long-term growth.',
    rating: 5,
    serviceUsed: ['AI Workflow Automation', 'GHL CRM Setup', 'Full Service Package'],
    projectOutcome: 'Scalable growth systems built',
  },
  {
    _id: 't6',
    clientName: 'Rhea Fawole',
    clientRole: 'CEO & Principal Lawyer, Solvi',
    companyName: 'Solvi',
    clientImage: '/clients/rhea.jpg',
    testimonial:
      'Working with GHL Scale Up has been a really good experience. The team took the time to understand our requirements and provided solutions that aligned with our business needs. Communication was smooth, and they were always approachable whenever we needed support or had questions. I appreciate their professionalism, attention to detail, and commitment to delivering quality work. It has been great working with a team that genuinely cares about its clients.',
    rating: 5,
    serviceUsed: ['AI Workflow Automation', 'GHL CRM Setup', 'Full Service Package'],
    projectOutcome: 'Scalable growth systems built',
  },
  {
    _id: 't7',
    clientName: 'Dr. Charlin Anthony, Ph.D',
    clientRole: 'President & CEO, ACP Billing Services',
    companyName: 'ACP Billing Services',
    clientImage: '/clients/charlin.jpg',
    testimonial:
      'GHL Scale Up made our GoHighLevel setup and automation much easier to manage. Their team understood our requirements, communicated clearly, and provided solutions that fit our business needs. We appreciate their professionalism and ongoing support.',
    rating: 5,
    serviceUsed: ['AI Workflow Automation', 'GHL CRM Setup', 'Full Service Package'],
    projectOutcome: 'Scalable growth systems built',
  },
  {
    _id: 't8',
    clientName: 'Seema Chodhary',
    clientRole: 'Client',
    companyName: 'ToSellBizz',
    clientImage: '/clients/seema.jpg',
    testimonial:
      'Working with GHL Scale Up was a positive experience. The team understood our requirements, communicated clearly, and provided practical solutions to support our business workflows.',
    rating: 5,
    serviceUsed: ['GHL CRM Setup', 'Workflow Automation'],
    projectOutcome: 'Improved business workflows',
  },
  {
    _id: 't9',
    clientName: 'Joe Rivera',
    clientRole: 'Inspirational Speaker',
    companyName: 'Joe Rivera',
    clientImage: '/clients/joe.jpg',
    testimonial:
      'What I appreciated most about GHL Scale Up was how they turned our ideas into a working system. The setup saved us time on repetitive tasks and made managing our daily activities much easier. A great team to work with!',
    rating: 5,
    serviceUsed: ['GHL CRM Setup', 'Workflow Automation'],
    projectOutcome: 'Simplified daily operations',
  },
  {
  _id: 't10',
  clientName: 'Dr. Rana Al-Falaki',
  clientRole: 'Founder, Executive Coach & Performance Strategist',
  companyName: 'NAIL - IT',
  clientImage: '/clients/rana.jpg',
  testimonial:
    'I value solutions that give me more time to focus on my clients and strategic priorities. GHL Scale Up helped bring greater structure to our digital processes, making it easier to manage different aspects of the business without unnecessary complexity.',
  rating: 5,
  serviceUsed: ['GHL CRM Setup', 'Workflow Automation'],
  projectOutcome: 'More structured business processes',
},
{
  _id: 't11',
  clientName: 'Aaron',
  clientRole: 'Client',
  companyName: 'Fudog Group',
  clientImage: '/clients/aaron.jpg',
  testimonial:
    'GHL Scale Up helped us bring our business processes into one organized system. Having our CRM and automated workflows working together has made day-to-day management more convenient and reduced a lot of manual effort.',
  rating: 5,
  serviceUsed: ['GHL CRM Setup', 'Workflow Automation'],
  projectOutcome: 'Centralized CRM and automated workflows',
},
  {
    _id: 't12',
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
    _id: 't13',
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
    _id: 't14',
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
];

// Number of cards visible per breakpoint
const getCardsPerView = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1;   // mobile
  if (window.innerWidth < 1024) return 2;  // tablet
  return 3;                                // desktop
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS.length;

  // --- Responsive: how many cards fit on screen ---
  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, total - cardsPerView);

  // Clamp when viewport changes and currentIndex is out of range
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [cardsPerView, maxIndex, currentIndex]);

  // --- Navigation helpers ---
  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // --- Auto-advance ---
  useEffect(() => {
    if (isPaused || total <= cardsPerView) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next, total, cardsPerView]);

  // --- Scroll-triggered fade-in ---
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

  // Width of each card in %, accounting for the gap
  const slideWidth = 100 / cardsPerView;
  const translateX = -(currentIndex * slideWidth);

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
              <InfoVideo
                videoSrc="https://youtu.be/mxSm7G52ZJE"
                title="How GHL Scale Up Works"
                description="Learn about our process and success stories"
              />
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <InfoVideo
                videoSrc="https://youtu.be/YgSBBP37b0M"
                title="Client Success Story"
                description="Hear from one of our satisfied clients"
              />
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
                <div className="relative z-10 w-16 h-16 bg-[#F8D000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

        {/* Testimonials Carousel */}
        <div className="fade-in">
          <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mb-6 text-center">
            What Our Clients Say
          </h3>

          {/* Carousel wrapper — pause auto-slide on hover */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              disabled={total <= cardsPerView}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 w-10 h-10 md:w-11 md:h-11 items-center justify-center rounded-full bg-white shadow-md border border-[#E8EDF4] text-[#1C2E4A] hover:bg-[#0E9BF0] hover:text-white hover:border-[#0E9BF0] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1C2E4A]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonials"
              disabled={total <= cardsPerView}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 w-10 h-10 md:w-11 md:h-11 items-center justify-center rounded-full bg-white shadow-md border border-[#E8EDF4] text-[#1C2E4A] hover:bg-[#0E9BF0] hover:text-white hover:border-[#0E9BF0] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1C2E4A]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Overflow track */}
            <div className="overflow-hidden px-1 py-1">
              <div
                className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(${translateX}%)` }}
              >
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t._id}
                    className="shrink-0"
                    style={{ width: `calc(${slideWidth}% - ${cardsPerView > 1 ? (16 * (cardsPerView - 1)) / cardsPerView : 0}px)` }}
                  >
                    <TestimonialCard testimonial={t} variant="grid" />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators (mobile + desktop) */}
            {total > cardsPerView && (
              <div className="flex items-center justify-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex
                        ? 'w-6 bg-[#0E9BF0]'
                        : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}