// components/testimonials/data/testimonialsData.ts

export interface Testimonial {
  _id: string;
  clientName: string;
  clientRole?: string;
  companyName: string;
  clientImage?: string;
  testimonial: string;
  rating: number;
  serviceUsed?: string[];
  projectOutcome?: string;
  featured?: boolean;
  // Optional video support — populate only when you actually have video
  videoUrl?: string;
  videoThumbnail?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    _id: 't4',
    clientName: 'Sam Kabiri',
    clientRole: 'Real Estate Professional',
    companyName: 'Real Estate',
    clientImage: '/clients/samk.jpg',
    testimonial:
      'GHL Scale Up has been a valuable partner in strengthening our online presence. Their team understands the importance of presenting our services clearly and creating a professional experience for potential homebuyers. The focus on our business needs, communication, and digital growth has made the collaboration a positive experience. I appreciate their support and commitment to helping our business grow.',
    rating: 5,
    serviceUsed: ['Social Media Marketing', 'Google Ads', 'Funnel Development'],
    projectOutcome: 'Stronger online presence',
    featured: true,
  },
  {
    _id: 't5',
    clientName: 'Stanley Iroegbu',
    clientRole: 'Founder & Owner',
    companyName: 'LumenGrowth.ai',
    clientImage: '/clients/stanley.jpg',
    testimonial:
      'Working with GHL Scale Up has been a positive experience for our business. Their focus on digital solutions, automation, and improving online business processes aligns well with our growth goals. Clear communication and an understanding of our business needs are essential, and we value a practical approach to building systems that support long-term growth.',
    rating: 5,
    serviceUsed: ['AI Workflow Automation', 'GHL CRM Setup', 'Full Service Package'],
    projectOutcome: 'Scalable growth systems built',
    featured: true,
  },
  {
    _id: 't7',
    clientName: 'Dr. Charlin Anthony, Ph.D',
    clientRole: 'President & CEO',
    companyName: 'ACP Billing Services',
    clientImage: '/clients/charlin.jpg',
    testimonial:
      'GHL Scale Up made our GoHighLevel setup and automation much easier to manage. Their team understood our requirements, communicated clearly, and provided solutions that fit our business needs. We appreciate their professionalism and ongoing support.',
    rating: 5,
    serviceUsed: ['AI Workflow Automation', 'GHL CRM Setup', 'Full Service Package'],
    projectOutcome: 'Scalable growth systems built',
  },
  {
    _id: 't8',
    clientName: 'Seema Chodhary',
    clientRole: 'Client',
    companyName: 'ToSellBizz',
//     clientImage: '/clients/seema.jpg',
    testimonial:
      'Working with GHL Scale Up was a positive experience. The team understood our requirements, communicated clearly, and provided practical solutions to support our business workflows.',
    rating: 5,
    serviceUsed: ['GHL CRM Setup', 'Workflow Automation'],
    projectOutcome: 'Improved business workflows',
  },
  {
    _id: 't10',
    clientName: 'Dr. Rana Al-Falaki',
    clientRole: 'Founder, Executive Coach & Performance Strategist',
    companyName: 'NAIL - IT',
    clientImage: '/clients/rana.jpg',
    testimonial:
      'I value solutions that give me more time to focus on my clients and strategic priorities. GHL Scale Up helped bring greater structure to our digital processes, making it easier to manage different aspects of the business without unnecessary complexity.',
    rating: 5,
    serviceUsed: ['GHL CRM Setup', 'Workflow Automation'],
    projectOutcome: 'More structured business processes',
  },
  {
  _id: 't12',
  clientName: 'Deborah King',
  clientRole: 'Founder',
  companyName: 'Deborah King',
  clientImage: '/clients/deborah.jpg',
  testimonial:
    'GHL Scale Up brought a thoughtful approach to our digital needs. Their ability to organize our online processes and create practical solutions made a real difference to how we manage our business. I appreciated having a team that focused on the details while keeping our bigger goals in mind.',
  rating: 5,
  serviceUsed: ['GHL CRM Setup', 'Workflow Automation'],
  projectOutcome: 'More organized digital operations',
},
  {
    _id: 't12',
    clientName: 'Elia',
    clientRole: 'Founder',
    companyName: 'RiverEnergia',
    testimonial:
      'GHL Scale Up handled our SaaS setup and managed the entire GoHighLevel system end to end. Solid execution and great support throughout.',
    rating: 5,
    serviceUsed: ['GHL CRM Setup', 'White-Label SaaS', 'Full Service Package'],
    projectOutcome: 'End-to-end GHL SaaS setup',
  },
  {
    _id: 't13',
    clientName: 'Steven',
    clientRole: 'Founder',
    companyName: '1 AI Secretary',
    testimonial:
      "Amazing work with Aryan and the GHL Scale Up team. They set up our voice agent smoothly and it's working exactly as expected. Super reliable and easy to work with.",
    rating: 5,
    serviceUsed: ['AI Workflow Automation', 'GHL', 'GHL CRM Setup'],
    projectOutcome: 'AI voice agent live & reliable',
  },
  {
    _id: 't14',
    clientName: 'Shanna',
    clientRole: 'Founder',
    companyName: 'Therapy SEO',
    testimonial:
      'Aryan and his team helped us set up our website and a complete onboarding funnel for our clients. Everything was structured well and executed seamlessly.',
    rating: 5,
    serviceUsed: ['Funnel Development', 'SEO Strategy', 'GHL CRM Setup'],
    projectOutcome: 'Website + onboarding funnel launched',
  },
];

// Derived helpers — no need to maintain separately
export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter(t => t.featured);