// app/case-studies/[slug]/page.tsx
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/sanity';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((caseStudy: any) => ({
    slug: caseStudy.slug.current,
  }));
}

// Fix 1: Make params async and await it
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params Promise
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }
  
  return {
    title: caseStudy.seoTitle || `${caseStudy.title} | GHL Scale Up`,
    description: caseStudy.seoDescription || `Case study: ${caseStudy.title} - ${caseStudy.clientName}`,
  };
}

// Fix 2: Make params async and await it
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params Promise
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    notFound();
  }
  
  return <CaseStudyDetail caseStudy={caseStudy} />;
}