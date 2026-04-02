// app/case-studies/page.tsx
import { getAllCaseStudies } from '@/lib/sanity';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | GHL Scale Up',
  description: 'See how we\'ve helped businesses scale with GoHighLevel. Real results, real ROI.',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <>
      <Breadcrumb items={[{ label: 'Case Studies' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
            Our Work
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-4">
            Case <span className="text-[#F8D000]">Studies</span>
          </h1>
          <p className="text-white/60 text-base max-w-[600px] mx-auto">
            Real results from real clients. See how we've helped businesses scale with GoHighLevel.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#4A5568]">No case studies found. Add some in Sanity!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy: any) => (
                <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}