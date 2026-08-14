// lib/caseStudiesData.ts
export interface CaseStudy {
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

// All case studies data - shared between homepage and case studies page
export const caseStudiesData: CaseStudy[] = [
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
        url: '/case-study/2.png'
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
        url: '/case-study/6.png'
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
        url: '/case-study/12.png'
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
        url: '/case-study/6.png'
      }
    },
    challenge: 'Inconsistent lead follow-ups, unclear affiliate performance tracking, and reporting that required significant manual effort.',
    solution: 'GHL Scale Up built a custom GoHighLevel affiliate management system with automated lead nurturing and real-time reporting dashboards.',
    featured: false,
    publishedAt: '2026-08-16'
  }
];

export function getCaseStudies() {
  return caseStudiesData;
}

export function getFeaturedCaseStudies() {
  return caseStudiesData.filter(study => study.featured);
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudiesData.find(study => study.slug.current === slug);
}