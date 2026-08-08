// app/case-studies/page.tsx
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'GHL Scale Up Case Studies Real GoHighLevel Results',
  description: 'See real outcomes from GHL Scale Up builds — specific numbers, real businesses, real results. 200+ builds across real estate, healthcare, SaaS, and marketing agencies.',
  keywords: 'GoHighLevel case studies, GHL success stories, CRM implementation results, marketing automation case studies, lead generation results, sales pipeline management case studies',
  alternates: {
    canonical: '/case-studies'
  }
};

// All 6 hardcoded case studies with correct image paths
const caseStudies = [
  {
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
    publishedAt: '2026-08-01'
  },
  {
    _id: 'gohighlevel-parent-saas-multi-crm-automation-energy-platform',
    title: 'Parent SaaS System for Multi-Brand CRM Automation',
    slug: { current: 'gohighlevel-parent-saas-multi-crm-automation-energy-platform' },
    category: 'SaaS',
    excerpt: 'Unified multiple business verticals under one GoHighLevel SaaS structure, with AI-driven automation cutting lead response time to under a minute.',
    image: {
      asset: {
        url: '/case-study/Picture12.jpeg'
      }
    },
    challenge: 'Lead handling, follow-ups, payments, and reporting were fragmented across systems, making it difficult to maintain consistency, speed, and operational visibility.',
    solution: 'GHL Scale Up architected and implemented a parent SaaS structure inside GoHighLevel, letting RiverEnergia manage multiple CRM brands under a single, branded ecosystem.',
    featured: true,
    publishedAt: '2026-08-05'
  },
  {
    _id: 'gohighlevel-website-setup-automation-fix',
    title: 'Website Setup & Automation Fix for Service-Based Business',
    slug: { current: 'gohighlevel-website-setup-automation-fix' },
    category: 'Service Business',
    excerpt: 'A service-based business had broken surveys, unreliable email automation, and inconsistent campaign delivery — with no dedicated GoHighLevel website to support lead capture.',
    image: {
      asset: {
        url: '/case-study/Picture12.jpeg'
      }
    },
    challenge: 'Surveys not functioning correctly, email automation workflows broken, campaign delivery inconsistent, no dedicated GoHighLevel-integrated website.',
    solution: 'GHL Scale Up diagnosed the broken systems, built a custom GoHighLevel website, and rebuilt the automation from the ground up — establishing a reliable end-to-end communication system.',
    featured: false,
    publishedAt: '2026-08-10'
  },
  {
    _id: 'gohighlevel-ai-automation-customer-management-marketing-agency',
    title: 'AI Automation: 70% Less Manual Work for Marketing Agency',
    slug: { current: 'gohighlevel-ai-automation-customer-management-marketing-agency' },
    category: 'Marketing Agency',
    excerpt: 'A performance marketing agency was relying on disconnected tools and manual workflows — until GHL Scale Up built a complete GoHighLevel agency system with AI-powered workflows.',
    image: {
      asset: {
        url: '/case-study/Picture12.jpeg'
      }
    },
    challenge: 'Delayed lead responses, inconsistent follow-ups, heavy operational workload with team members spending time on repetitive tasks that could have been automated.',
    solution: 'GHL Scale Up designed and implemented a complete GoHighLevel setup with AI-powered workflows, centralizing customer management and automating lead response, scheduling, and follow-ups.',
    featured: false,
    publishedAt: '2026-08-12'
  },
  {
    _id: 'gohighlevel-multi-location-automation-property-website-real-estate',
    title: 'Multi-Location Real Estate: Sub-Account System With Property Websites',
    slug: { current: 'gohighlevel-multi-location-automation-property-website-real-estate' },
    category: 'Real Estate',
    excerpt: 'A growing real estate brand needed a structured, location-aware system — not a patchwork of spreadsheets and inboxes per office.',
    image: {
      asset: {
        url: '/case-study/Picture12.jpeg'
      }
    },
    challenge: 'Manual, fragmented multi-location operations with delayed responses, no centralized lead tracking, and operational complexity as the brand grew into new regions.',
    solution: 'GHL Scale Up implemented a multi-subaccount GoHighLevel architecture with location-based property websites and automated buyer/seller workflows.',
    featured: false,
    publishedAt: '2026-08-14'
  },
  {
    _id: 'gohighlevel-affiliate-management-automation-media-company',
    title: 'Affiliate Management System: Automated Tracking & Lead Nurturing',
    slug: { current: 'gohighlevel-affiliate-management-automation-media-company' },
    category: 'Media',
    excerpt: 'A media and performance-driven business was running multiple affiliate campaigns manually — creating bottlenecks in lead nurturing, affiliate tracking, and reporting.',
    image: {
      asset: {
        url: '/case-study/Picture12.jpeg'
      }
    },
    challenge: 'Inconsistent lead follow-ups, unclear affiliate performance tracking, and reporting that required significant manual effort.',
    solution: 'GHL Scale Up built a custom GoHighLevel affiliate management system with automated lead nurturing and real-time reporting dashboards.',
    featured: false,
    publishedAt: '2026-08-16'
  }
];

export default async function CaseStudiesPage() {
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

      {/* Stats Section */}
      <section className="py-12 bg-[#F8F9FB] border-b border-[#DDE1E9]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#0E9BF0]">200+</div>
              <div className="text-sm text-[#5C6880] mt-1">Builds Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#0E9BF0]">6</div>
              <div className="text-sm text-[#5C6880] mt-1">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#0E9BF0]">6</div>
              <div className="text-sm text-[#5C6880] mt-1">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#0E9BF0]">97%</div>
              <div className="text-sm text-[#5C6880] mt-1">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#4A5568]">No case studies found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B1628]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Build Your <span className="text-[#F8D000]">Success Story?</span>
          </h2>
          <p className="text-white/60 text-base max-w-[600px] mx-auto mb-8">
            Let's discuss how GHL Scale Up can help your business achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-8 py-4 rounded-lg hover:bg-[#FFE44D] transition-all shadow-lg hover:shadow-xl"
          >
            Book Your Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}