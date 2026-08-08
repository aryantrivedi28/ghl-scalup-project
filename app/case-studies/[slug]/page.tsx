// app/case-studies/[slug]/page.tsx
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/sanity';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';
import { notFound } from 'next/navigation';

// Generate static params for all case studies
export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((caseStudy: any) => ({
    slug: caseStudy.slug.current,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }
  
  return {
    title: `${caseStudy.title} | Case Study | GHL Scale Up`,
    description: caseStudy.description || `Case study: ${caseStudy.title} - See how we helped achieve remarkable results.`,
  };
}

// Main page component
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    notFound();
  }
  
  return <CaseStudyDetail caseStudy={caseStudy} />;
}