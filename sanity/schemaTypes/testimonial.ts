// sanity/schemas/testimonial.ts
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'clientRole',
      title: 'Client Role/Title',
      type: 'string',
      description: 'e.g., CEO, Marketing Director, Founder',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'clientImage',
      title: 'Client Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      rows: 5,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: 'serviceUsed',
      title: 'Service Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'GHL CRM Setup', value: 'GHL CRM Setup' },
          { title: 'AI Workflow Automation', value: 'AI Workflow Automation' },
          { title: 'Funnel Development', value: 'Funnel Development' },
          { title: 'SEO Strategy', value: 'SEO Strategy' },
          { title: 'Google Ads', value: 'Google Ads' },
          { title: 'Social Media Marketing', value: 'Social Media Marketing' },
          { title: 'White-Label SaaS', value: 'White-Label SaaS' },
          { title: 'Full Service Package', value: 'Full Service Package' },
        ],
      },
    },
    {
      name: 'projectOutcome',
      title: 'Project Outcome',
      type: 'string',
      description: 'e.g., "Increased leads by 200%", "Saved 20 hours/week"',
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial on the homepage',
      initialValue: false,
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Leave empty to use default',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Leave empty to use default',
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'companyName',
      media: 'clientImage',
    },
  },
  orderings: [
    {
      title: 'Published Date (Newest First)',
      name: 'publishedDateDesc',
      by: [{ field: 'publishedDate', direction: 'desc' }],
    },
    {
      title: 'Rating (Highest First)',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
  ],
};