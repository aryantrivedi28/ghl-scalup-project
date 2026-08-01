// app/case-studies/page.tsx
import { getAllCaseStudies } from '@/lib/sanity';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, Users, Calendar, BarChart3, Phone, Mail, Database } from 'lucide-react';

export const metadata = {
  title: 'GHL Scale Up Case Studies Real GoHighLevel Results',
  description: 'See real outcomes from GHL Scale Up builds specific numbers, real businesses, real results. 200+ builds across real estate, healthcare, SaaS, and marketing agencies.',
  keywords: 'GoHighLevel case studies, GHL success stories, CRM implementation results, marketing automation case studies, lead generation results, sales pipeline management case studies',
  alternates: {
    canonical: '/case-studies'
  }
};

// Hardcoded case study data for the new real estate agent rebuild
const realEstateCaseStudy = {
  _id: 'real-estate-agent-rebuild',
  title: 'Real Estate Agent: Complete GHL Rebuild & AI Voice System',
  slug: { current: 'real-estate-agent-rebuild' },
  category: 'Real Estate',
  excerpt: 'From broken automations to an AI voice receptionist system handling thousands of calls a month. A full GoHighLevel rebuild for a U.S. real estate agent.',
  image: {
    asset: {
      url: '/case-study/Picture1.jpeg'
    }
  },
  challenge: 'Outbound emails were failing, SMS couldn\'t legally send, the lead funnel wasn\'t converting, and a growing contact database had no system working it at all.',
  solution: 'GHL Scale Up audited the account, rebuilt every broken system end-to-end, repositioned the business around a focused niche, and layered in a three-agent AI voice automation system.',
  featured: true,
  publishedAt: '2026-08-01',
  // We'll use this to identify it as a hardcoded case study
  __hardcoded: true
};

export default async function CaseStudiesPage() {
  // Fetch case studies from Sanity
  const sanityCaseStudies = await getAllCaseStudies();
  
  // Combine hardcoded case study with Sanity case studies
  // The hardcoded one will appear first (featured)
  const allCaseStudies = [
    realEstateCaseStudy,
    ...sanityCaseStudies
  ];

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
          {allCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#4A5568]">No case studies found. Add some in Sanity!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCaseStudies.map((caseStudy: any) => {
                // Check if it's the hardcoded case study
                if (caseStudy.__hardcoded) {
                  return (
                    <div key={caseStudy._id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#DDE1E9] hover:border-[#0E9BF0]/30 hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative h-48 bg-[#F8F9FB] overflow-hidden">
                        {/* Featured Badge */}
                        <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                          <span className="bg-[#F8D000] text-[#0B1421] text-[0.55rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                            Featured
                          </span>
                          <span className="bg-[#0E9BF0] text-white text-[0.55rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                            New
                          </span>
                        </div>
                        
                        {/* Image */}
                        <Image
                          src={caseStudy.image.asset.url}
                          alt={caseStudy.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628]/60 via-transparent to-transparent z-10"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-[#0E9BF0] font-medium mb-2">
                          <span>{caseStudy.category}</span>
                          <span className="w-1 h-1 bg-[#DDE1E9] rounded-full"></span>
                          <span className="text-[#4A5568]">{new Date(caseStudy.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
                
                // Render Sanity case study using the existing Card component
                return <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}