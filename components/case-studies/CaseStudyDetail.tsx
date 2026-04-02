// components/case-studies/CaseStudyDetail.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import ContactForm from '@/components/ContactForm';

interface CaseStudyDetailProps {
  caseStudy: any;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              Case Study
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-white/60 text-base">{caseStudy.clientName}</p>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Client Overview
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-4">
                About {caseStudy.clientName}
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-6">{caseStudy.overview}</p>
              
              <div className="bg-[#F4F7FA] rounded-xl p-6">
                <h3 className="font-semibold text-[#1C2E4A] mb-3">Quick Facts</h3>
                <div className="space-y-2">
                  <p className="text-sm"><strong className="text-[#0E9BF0]">Industry:</strong> {caseStudy.industry}</p>
                  <p className="text-sm"><strong className="text-[#0E9BF0]">Services:</strong> {caseStudy.servicesProvided.join(', ')}</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              {caseStudy.mainImage && (
                <Image
                  src={urlFor(caseStudy.mainImage).url()}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#F8D000] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#F8D000] rounded"></span>
              The Challenges
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A]">What We Faced</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.challenges?.map((challenge: string, idx: number) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl mb-3">⚠️</div>
                <p className="text-[#4A5568]">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              The Solution
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A]">How We Helped</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.solution?.map((sol: string, idx: number) => (
              <div key={idx} className="flex gap-3">
                <div className="text-[#25C97D] text-xl">✓</div>
                <p className="text-[#4A5568]">{sol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gradient-to-br from-[#1C2E4A] to-[#111E30] text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#F8D000] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#F8D000] rounded"></span>
              The Results
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What We Achieved</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.results?.map((result: any, idx: number) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                {result.statistic && (
                  <div className="text-3xl md:text-4xl font-extrabold text-[#F8D000] mb-3">
                    {result.statistic}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2">{result.title}</h3>
                <p className="text-white/60 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#F4F7FA] rounded-2xl p-8 md:p-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-4">
                Want to Boost Your SEO Results?
              </h2>
              <p className="text-[#4A5568] mb-6">
                Get in touch with us today to see how we can help your business grow with smart SEO strategies!
              </p>
              <Link href="/contact" className="inline-block bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFE44D] transition-all">
                Get in Touch With Us →
              </Link>
            </div>
            <div>
              <ContactForm variant="light" title="" subtitle="We will get back to you in less than 24 hours." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}