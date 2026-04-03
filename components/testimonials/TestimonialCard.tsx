// components/testimonials/TestimonialCard.tsx
'use client';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface TestimonialCardProps {
  testimonial: {
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
  };
  variant?: 'grid' | 'carousel' | 'featured';
}

export default function TestimonialCard({ testimonial, variant = 'grid' }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-[#F8D000]' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 text-8xl opacity-5">“</div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            {testimonial.clientImage && (
              <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F4F7FA]">
                <Image
                  src={urlFor(testimonial.clientImage).url()}
                  alt={testimonial.clientName}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h4 className="font-bold text-lg">{testimonial.clientName}</h4>
              <p className="text-white/60 text-sm">{testimonial.clientRole}, {testimonial.companyName}</p>
              <div className="flex gap-0.5 mt-1">{renderStars(testimonial.rating)}</div>
            </div>
          </div>
          <p className="text-white/80 leading-relaxed mb-4">“{testimonial.testimonial}”</p>
          {testimonial.projectOutcome && (
            <div className="inline-block bg-[#F8D000]/10 border border-[#F8D000]/20 rounded-full px-3 py-1 text-xs text-[#F8D000]">
              📈 {testimonial.projectOutcome}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.1)] hover:-translate-y-1 transition-all duration-300">
      {/* Rating Stars */}
      <div className="flex gap-0.5 mb-4">{renderStars(testimonial.rating)}</div>
      
      {/* Testimonial Text */}
      <p className="text-[#4A5568] leading-relaxed mb-5 text-sm">“{testimonial.testimonial}”</p>
      
      {/* Client Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#E8EDF4]">
        {testimonial.clientImage ? (
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#F4F7FA] flex-shrink-0">
            <Image
              src={urlFor(testimonial.clientImage).url()}
              alt={testimonial.clientName}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#0E9BF0]/10 flex items-center justify-center text-[#0E9BF0] font-bold flex-shrink-0">
            {testimonial.clientName.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-[#1C2E4A] text-sm">{testimonial.clientName}</h4>
          <p className="text-[#8A9BB0] text-xs">{testimonial.clientRole}, {testimonial.companyName}</p>
        </div>
      </div>
      
      {/* Services Used */}
      {testimonial.serviceUsed && testimonial.serviceUsed.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {testimonial.serviceUsed.slice(0, 2).map((service, idx) => (
            <span key={idx} className="text-[0.6rem] text-[#0E9BF0] bg-[rgba(14,155,240,0.1)] px-2 py-0.5 rounded">
              {service}
            </span>
          ))}
          {testimonial.serviceUsed.length > 2 && (
            <span className="text-[0.6rem] text-[#8A9BB0]">+{testimonial.serviceUsed.length - 2} more</span>
          )}
        </div>
      )}
    </div>
  );
}