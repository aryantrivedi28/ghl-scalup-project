// sanity/schemas/caseStudy.ts
export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'servicesProvided',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Client Overview',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Result Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Result Description',
              type: 'text',
            },
            {
              name: 'statistic',
              title: 'Statistic (e.g., "54.49%")',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Result Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
      media: 'mainImage',
    },
  },
};