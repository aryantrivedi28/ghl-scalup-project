// components/case-studies/CaseStudyCard.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface CaseStudyCardProps {
  caseStudy: {
    _id: string;
    title: string;
    subtitle?: string;
    slug: { current: string };
    description?: string;
    tags?: string[];
    mainImage?: any;
    videoUrl?: string;
  };
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug.current}`}>
      <div className="group bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(28,46,74,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#1C2E4A] to-[#111E30]">
          {caseStudy.mainImage ? (
            <Image
              src={urlFor(caseStudy.mainImage).url()}
              alt={caseStudy.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : caseStudy.videoUrl ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#F8D000]/20 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-[#F8D000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-white/60 text-xs">Watch Case Study</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0E9BF0]/20 to-[#F8D000]/20 flex items-center justify-center">
              <span className="text-white/40 text-lg font-bold">GHL</span>
            </div>
          )}
          
          {/* Tags Overlay */}
          {caseStudy.tags && caseStudy.tags.length > 0 && (
            <div className="absolute top-3 left-3 flex gap-1.5">
              {caseStudy.tags.slice(0, 2).map((tag, idx) => (
                <span key={idx} className="bg-[#F8D000] text-[#0B1421] text-[0.6rem] font-bold px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5">
          {caseStudy.subtitle && (
            <p className="text-[0.7rem] font-semibold text-[#0E9BF0] uppercase tracking-wide mb-2">
              {caseStudy.subtitle}
            </p>
          )}
          <h3 className="text-lg font-bold text-[#1C2E4A] mb-2 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
            {caseStudy.title}
          </h3>
          {caseStudy.description && (
            <p className="text-[0.8rem] text-[#4A5568] leading-relaxed line-clamp-3">
              {caseStudy.description}
            </p>
          )}
          
          {/* Read More Link */}
          <div className="mt-4 flex items-center text-[#0E9BF0] text-sm font-medium group-hover:translate-x-1 transition-transform">
            Read Case Study
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}