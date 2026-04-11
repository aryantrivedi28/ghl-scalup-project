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
  variant?: 'grid' | 'featured';
}

export default function TestimonialCard({ testimonial, variant = 'grid' }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-xs md:text-sm ${i < rating ? 'text-[#F8D000]' : 'text-gray-200'}`}>
        ★
      </span>
    ));
  };

  // Featured Variant - Large, prominent testimonial
  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl md:rounded-2xl p-5 md:p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
        {/* Decorative Quote Icon */}
        <div className="absolute -top-4 -right-4 text-7xl md:text-8xl opacity-5 group-hover:opacity-10 transition-opacity">“</div>
        
        <div className="relative z-10">
          {/* Rating Stars */}
          <div className="flex gap-0.5 mb-3 md:mb-4">{renderStars(testimonial.rating)}</div>
          
          {/* Testimonial Text */}
          <p className="text-white/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-lg italic line-clamp-6">
            “{testimonial.testimonial}”
          </p>
          
          {/* Project Outcome Badge */}
          {testimonial.projectOutcome && (
            <div className="inline-block bg-[#F8D000]/10 border border-[#F8D000]/20 rounded-full px-2.5 py-1 md:px-3 md:py-1 text-xs text-[#F8D000] mb-3 md:mb-4">
              📈 {testimonial.projectOutcome}
            </div>
          )}
          
          {/* Services Used Tags - Featured Variant */}
          {testimonial.serviceUsed && testimonial.serviceUsed.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
              {testimonial.serviceUsed.slice(0, 3).map((service, idx) => (
                <span key={idx} className="text-[0.6rem] md:text-[0.65rem] text-[#F8D000] bg-[rgba(248,208,0,0.1)] px-2 py-0.5 rounded-full">
                  {service}
                </span>
              ))}
              {testimonial.serviceUsed.length > 3 && (
                <span className="text-[0.6rem] md:text-[0.65rem] text-white/50">+{testimonial.serviceUsed.length - 3}</span>
              )}
            </div>
          )}
          
          {/* Client Info */}
          <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-white/10">
            {testimonial.clientImage ? (
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-[#F8D000]/30">
                <Image
                  src={urlFor(testimonial.clientImage).url()}
                  alt={testimonial.clientName}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#F8D000] to-[#FFE44D] flex items-center justify-center text-base md:text-lg font-bold text-[#0B1421]">
                {testimonial.clientName.charAt(0)}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-white text-sm md:text-base truncate">
                {testimonial.clientName}
              </h4>
              <p className="text-white/60 text-xs md:text-sm truncate">
                {testimonial.clientRole}, {testimonial.companyName}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid Variant - Standard testimonial card
  return (
    <div className="bg-white border border-[#E8EDF4] rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
      
      {/* Rating Stars */}
      <div className="flex gap-0.5 mb-3 md:mb-4">{renderStars(testimonial.rating)}</div>
      
      {/* Testimonial Text */}
      <p className="text-[#4A5568] leading-relaxed mb-4 text-sm md:text-base flex-grow line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
        “{testimonial.testimonial}”
      </p>
      
      {/* Project Outcome */}
      {testimonial.projectOutcome && (
        <div className="mb-3 md:mb-4">
          <span className="inline-block bg-green-50 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
            🎯 {testimonial.projectOutcome}
          </span>
        </div>
      )}
      
      {/* Services Used Tags */}
      {testimonial.serviceUsed && testimonial.serviceUsed.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
          {testimonial.serviceUsed.slice(0, 2).map((service, idx) => (
            <span key={idx} className="text-[0.6rem] md:text-[0.65rem] text-[#0E9BF0] bg-[rgba(14,155,240,0.1)] px-2 py-0.5 rounded-full">
              {service}
            </span>
          ))}
          {testimonial.serviceUsed.length > 2 && (
            <span className="text-[0.6rem] md:text-[0.65rem] text-[#8A9BB0]">
              +{testimonial.serviceUsed.length - 2} more
            </span>
          )}
        </div>
      )}
      
      {/* Client Info */}
      <div className="flex items-center gap-2.5 md:gap-3 pt-3 md:pt-4 border-t border-[#E8EDF4] mt-auto">
        {/* Client Avatar */}
        {testimonial.clientImage ? (
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-[#F4F7FA] flex-shrink-0">
            <Image
              src={urlFor(testimonial.clientImage).url()}
              alt={testimonial.clientName}
              fill
              className="object-cover"
            />
          </div>
        ) : testimonial.companyLogo ? (
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-[#F4F7FA] flex-shrink-0">
            <Image
              src={urlFor(testimonial.companyLogo).url()}
              alt={testimonial.companyName}
              fill
              className="object-contain p-1.5"
            />
          </div>
        ) : (
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center font-bold text-white text-xs md:text-sm flex-shrink-0">
            {testimonial.clientName.charAt(0)}
          </div>
        )}
        
        {/* Client Details - With truncation for long names */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-[#1C2E4A] text-xs md:text-sm truncate">
            {testimonial.clientName}
          </h4>
          <p className="text-[#8A9BB0] text-[0.65rem] md:text-xs truncate">
            {testimonial.clientRole}, {testimonial.companyName}
          </p>
        </div>
      </div>
    </div>
  );
}