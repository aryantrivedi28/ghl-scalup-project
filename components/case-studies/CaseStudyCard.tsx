// components/case-studies/CaseStudyCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface CaseStudyCardProps {
  caseStudy: {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    excerpt: string;
    image: {
      asset: {
        url: string;
      };
    };
    featured?: boolean;
    publishedAt?: string;
  };
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [imgError, setImgError] = useState(false);

  // Fallback image if the primary image fails
  const fallbackImage = '/case-study-placeholder.jpg';

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#DDE1E9] hover:border-[#0E9BF0]/30 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 bg-[#F8F9FB] overflow-hidden">
        {/* Featured Badge */}
        {caseStudy.featured && (
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
            <span className="bg-[#F8D000] text-[#0B1421] text-[0.55rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        
        {/* Image */}
        <Image
          src={imgError ? fallbackImage : caseStudy.image.asset.url}
          alt={caseStudy.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgError(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628]/60 via-transparent to-transparent z-10"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-[#0E9BF0] font-medium mb-2">
          <span>{caseStudy.category}</span>
          {caseStudy.publishedAt && (
            <>
              <span className="w-1 h-1 bg-[#DDE1E9] rounded-full"></span>
              <span className="text-[#4A5568]">{new Date(caseStudy.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-[#1C2E4A] mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
          {caseStudy.title}
        </h3>
        
        <p className="text-[#4A5568] text-sm leading-relaxed mb-4 line-clamp-3">
          {caseStudy.excerpt}
        </p>
        
        <Link
          href={`/case-studies/${caseStudy.slug.current}`}
          className="inline-flex items-center gap-2 text-[#0E9BF0] font-semibold text-sm hover:gap-3 transition-all group-hover:text-[#0C88D4]"
        >
          Read Case Study
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}