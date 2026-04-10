// components/case-studies/CaseStudyTestimonial.tsx
'use client';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface CaseStudyTestimonialProps {
  testimonial: {
    quote?: string;
    authorName?: string;
    authorRole?: string;
    image?: any;
  };
}

export default function CaseStudyTestimonial({ testimonial }: CaseStudyTestimonialProps) {
  if (!testimonial?.quote) return null;

  return (
    <div className="bg-[#F4F7FA] rounded-2xl p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Quote Icon */}
        <div className="text-5xl text-[#F8D000] mb-6">"</div>
        
        {/* Quote Text */}
        <p className="text-lg md:text-xl text-[#1C2E4A] leading-relaxed mb-8 italic">
          {testimonial.quote}
        </p>
        
        {/* Author */}
        <div className="flex items-center justify-center gap-4">
          {testimonial.image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#E8EDF4]">
              <Image
                src={urlFor(testimonial.image).url()}
                alt={testimonial.authorName || 'Client'}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="text-left">
            <p className="font-bold text-[#1C2E4A] text-base">{testimonial.authorName}</p>
            <p className="text-sm text-[#8A9BB0]">{testimonial.authorRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}