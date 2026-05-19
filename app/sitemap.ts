// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ghlscaleup.com'
  const currentDate = new Date()

  // Main Pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // GHL Services
  const ghlServices: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services/crm-setup`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/workflow-automation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/website-development`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/funnel-development`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/campaign-automation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-chatbot`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-voice-agent`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/calendar-booking`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/reputation-management`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/saas-setup`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/integrations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/reporting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/migration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/membership-sites`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/training`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/virtual-assistant`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Marketing Services
  const marketingServices: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/marketing/seo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing/google-ads`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing/meta-ads`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing/tiktok-ads`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing/social-media`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing/content-creation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing/video-editing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing/graphic-design`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing/brand-building`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marketing/ai-marketing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing/lead-generation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing/email-marketing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]


  // Blog Posts
  const blogPosts: MetadataRoute.Sitemap = [
    // May 2026 Blogs (Newest)
    {
      url: `${baseUrl}/blog/gohighlevel-review`,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/gohighlevel-pricing`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/gohighlevel-conversational-ai-data-storage`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/where-to-hire-gohighlevel-experts`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-ghl-expert-agency`,
      lastModified: new Date('2026-05-09'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-create-gohighlevel-snapshot`,
      lastModified: new Date('2026-05-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/gohighlevel-missed-call-text-back`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-set-up-gohighlevel-workflow-automation`,
      lastModified: new Date('2026-05-06'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/what-is-gohighlevel`,
      lastModified: new Date('2026-05-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // April 2026 Blogs
    {
      url: `${baseUrl}/blog/ghl-white-label-saas-guide`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/gohighlevel-funnel-builder-features`,
      lastModified: new Date('2026-04-07'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ghl-ai-workflows-lead-response`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // March 2026 Blogs
    {
      url: `${baseUrl}/blog/freelancer-to-ghl-saas-founder`,
      lastModified: new Date('2026-03-25'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ghl-lead-generation-strategies`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ghl-pipeline-management`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/gohighlevel-vs-hubspot`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];




  // Legal Pages
  // const legalPages: MetadataRoute.Sitemap = [
  //   {
  //     url: `${baseUrl}/privacy-policy`,
  //     lastModified: currentDate,
  //     changeFrequency: 'yearly',
  //     priority: 0.3,
  //   },
  //   {
  //     url: `${baseUrl}/terms-of-service`,
  //     lastModified: currentDate,
  //     changeFrequency: 'yearly',
  //     priority: 0.3,
  //   },
  //   {
  //     url: `${baseUrl}/refund-policy`,
  //     lastModified: currentDate,
  //     changeFrequency: 'yearly',
  //     priority: 0.3,
  //   },
  // ]

  return [
    ...mainPages,
    ...ghlServices,
    ...marketingServices,
    ...blogPosts,
    // ...legalPages,
  ]
}