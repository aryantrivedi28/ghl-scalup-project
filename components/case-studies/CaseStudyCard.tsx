// components/case-studies/CaseStudyCard.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface CaseStudyCardProps {
  caseStudy: {
    _id: string;
    title: string;
    slug: { current: string };
    clientName: string;
    industry: string;
    servicesProvided: string[];
    mainImage: any;
    publishedDate: string;
  };
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug.current}`}>
      <div className="group bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(28,46,74,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        <div className="relative h-56 overflow-hidden bg-[#F4F7FA]">
          {caseStudy.mainImage && (
            <Image
              src={urlFor(caseStudy.mainImage).url()}
              alt={caseStudy.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[0.65rem] font-bold text-[#0E9BF0] bg-[rgba(14,155,240,0.1)] px-2.5 py-1 rounded-full">
              {caseStudy.industry}
            </span>
            <span className="text-[0.65rem] text-[#8A9BB0]">
              {new Date(caseStudy.publishedDate).getFullYear()}
            </span>
          </div>
          <h3 className="text-lg font-bold text-[#1C2E4A] mb-2 group-hover:text-[#0E9BF0] transition-colors">
            {caseStudy.title}
          </h3>
          <p className="text-[0.82rem] text-[#4A5568] mb-3">{caseStudy.clientName}</p>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.servicesProvided.slice(0, 3).map((service, idx) => (
              <span key={idx} className="text-[0.65rem] text-[#8A9BB0] bg-[#F4F7FA] px-2 py-0.5 rounded">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}