// components/ghlscalup/CaseStudies.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Clock } from 'lucide-react';

interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  image?: {
    asset?: {
      url: string;
    };
  };
  challenge?: string;
  solution?: string;
  featured?: boolean;
  publishedAt?: string;
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  // If no case studies, don't render
  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  // Get only 3 case studies (prioritize featured ones)
  const displayStudies = caseStudies
    .sort((a, b) => {
      // Sort by featured first, then by date
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.publishedAt || '').getTime() - new Date(a.publishedAt || '').getTime();
    })
    .slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#1C2E4A] mb-4">
            Real <span className="text-[#F8D000]">Results</span> from Real Businesses
          </h2>
          <p className="text-[#5C6880] text-base max-w-[600px] mx-auto">
            See how we've helped businesses transform their marketing automation and achieve remarkable growth.
          </p>
        </div>

        {/* Case Studies Grid - 3 per row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayStudies.map((study) => (
            <Link
              key={study._id}
              href={`/case-studies/${study.slug.current}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#DDE1E9] hover:border-[#F8D000]/50 hover:-translate-y-1"
            >
              <div className="relative h-56 bg-[#F8F9FB] overflow-hidden">
                {study.image?.asset?.url ? (
                  <Image
                    src={study.image.asset.url}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1C2E4A]/10 to-[#0E9BF0]/10 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-[#1C2E4A]/20" />
                  </div>
                )}
                {study.featured && (
                  <div className="absolute top-4 left-4 bg-[#F8D000] text-[#0B1421] text-xs font-bold px-3 py-1.5 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-[#1C2E4A]/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                  {study.category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-[#5C6880] mb-2">
                  <Clock className="w-4 h-4" />
                  {study.publishedAt ? new Date(study.publishedAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  }) : 'Recent'}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#1C2E4A] mb-2 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
                  {study.title}
                </h3>
                
                <p className="text-[#5C6880] text-sm mb-4 line-clamp-3">
                  {study.excerpt}
                </p>

                <div className="inline-flex items-center text-[#0E9BF0] font-semibold text-sm group-hover:gap-1 transition-all">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Case Studies CTA */}
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1C2E4A] text-white font-bold rounded-lg hover:bg-[#111E30] transition-all shadow-md hover:shadow-lg"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}