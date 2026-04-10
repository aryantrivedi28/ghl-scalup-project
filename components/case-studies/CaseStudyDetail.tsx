// components/case-studies/CaseStudyDetail.tsx
'use client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { portableTextComponents } from './PortableTextComponents';
import CaseStudyVideo from './CaseStudyVideo';
import CaseStudySnapshot from './CaseStudySnapshot';
import CaseStudyTestimonial from './CaseStudyTestimonial';
import TeamMember from './TeamMember';

interface CaseStudyDetailProps {
  caseStudy: any;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Tags */}
            {caseStudy.tags && caseStudy.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {caseStudy.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.7rem] font-bold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-5">
              {caseStudy.title}
            </h1>

            {/* Subtitle */}
            {caseStudy.subtitle && (
              <p className="text-lg md:text-xl text-white/70 mb-6">{caseStudy.subtitle}</p>
            )}

            {/* Description */}
            {caseStudy.description && (
              <p className="text-white/60 text-base max-w-2xl mx-auto">
                {caseStudy.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Image Section - IMPROVED */}
      {caseStudy.mainImage && (
        <section className="relative -mt-12 md:-mt-20 z-20">
          <div className="max-w-[900px] mx-auto px-4 md:px-8">

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1C2E4A] to-[#111E30] p-3 md:p-5">

              {/* Dynamic Height Container */}
              <div className="relative w-full">
                <Image
                  src={urlFor(caseStudy.mainImage).url()}
                  alt={caseStudy.title}
                  width={900}
                  height={1200} // 👈 IMPORTANT (portrait support)
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Video Section */}
      {caseStudy.video && (caseStudy.video.videoUrl || caseStudy.video.videoFile) && (
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <CaseStudyVideo video={caseStudy.video} />
          </div>
        </section>
      )}

      {/* Challenge Section */}
      {caseStudy.challenge && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-4">
                  <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                  The Challenge
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-4">
                  What They Were Facing
                </h2>
                <p className="text-[#4A5568] leading-relaxed">
                  Understanding the problem was the first step to finding the right solution.
                </p>
              </div>
              <div className="prose prose-lg max-w-none">
                <PortableText value={caseStudy.challenge} components={portableTextComponents} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Finzie Advantage Section */}
      {caseStudy.finzieAdvantage && (
        <section className="py-16 md:py-20 bg-[#F4F7FA]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#F8D000] mb-4">
                  <span className="w-[22px] h-[2px] bg-[#F8D000] rounded"></span>
                  The Solution
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-4">
                  How We Helped
                </h2>
                <p className="text-[#4A5568] leading-relaxed">
                  Our approach combined strategy, execution, and continuous optimization.
                </p>
              </div>
              <div className="prose prose-lg max-w-none">
                <PortableText value={caseStudy.finzieAdvantage} components={portableTextComponents} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Member Section */}
      {caseStudy.teamMember && caseStudy.teamMember.name && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-4 justify-center">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Meet the Expert
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A]">
                The Team Behind This Success
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <TeamMember teamMember={caseStudy.teamMember} />
            </div>
          </div>
        </section>
      )}

      {/* Snapshot / Results Section - FIXED */}
      {caseStudy.snapshot && caseStudy.snapshot.length > 0 && (
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#1C2E4A] to-[#111E30] text-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#F8D000] mb-4 justify-center">
                <span className="w-[22px] h-[2px] bg-[#F8D000] rounded"></span>
                Results & Impact
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Measurable Outcomes
              </h2>
              <p className="text-white/60 mt-4">
                Tangible results that transformed their business
              </p>
            </div>
            <CaseStudySnapshot snapshot={caseStudy.snapshot} />
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {caseStudy.testimonial && caseStudy.testimonial.quote && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <CaseStudyTestimonial testimonial={caseStudy.testimonial} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      {(caseStudy.callToActionText || caseStudy.callToActionButton) && (
        <section className="py-16 md:py-20 bg-[#F8D000]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1421] mb-4">
              {caseStudy.callToActionText || "Ready to Achieve Similar Results?"}
            </h2>
            <p className="text-[#0B1421]/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve remarkable growth.
            </p>
            {caseStudy.callToActionButton && (
              <Link
                href={caseStudy.callToActionButton.link}
                className="inline-block bg-[#0B1421] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#1C2E4A] transition-all hover:-translate-y-0.5"
              >
                {caseStudy.callToActionButton.text || "Get Started"}
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}