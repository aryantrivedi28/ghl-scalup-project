/**
 * GHLScaleUp - Configuration File
 * Centralized configuration for easy customization
 */

export const siteConfig = {
  // Brand
  brand: {
    name: 'GHLScaleUp',
    shortName: 'GHL',
    description: 'The leading GHL growth partner for agencies and businesses',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ghlscaleup.com',
  },

  // Navigation
  navigation: {
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#why-us' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },

  // Hero Section
  hero: {
    badge: 'Trusted by 100+ Agencies',
    headline: 'Scale Your GHL Business Effortlessly',
    subheadline:
      'Get proven strategies, expert support, and cutting-edge tools to scale your GHL agency and dominate your market.',
    ctas: [
      { label: 'Start Free Trial', style: 'primary', icon: '→' },
      { label: 'Watch Demo', style: 'secondary' },
    ],
    stats: [
      { value: '500%', label: 'Average Growth' },
      { value: '24/7', label: 'Expert Support' },
      { value: '99.9%', label: 'Uptime Guarantee' },
    ],
  },

  // Features
  features: [
    {
      icon: '⚡',
      title: 'Lightning-Fast Setup',
      description: 'Get up and running in minutes with our intuitive onboarding process.',
      color: 'blue',
    },
    {
      icon: '🎯',
      title: 'Precision Targeting',
      description: 'Advanced segmentation tools to reach the right clients at the right time.',
      color: 'green',
    },
    {
      icon: '📈',
      title: 'Growth Analytics',
      description: 'Real-time insights into your business metrics and performance trends.',
      color: 'amber',
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards.',
      color: 'purple',
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless team communication and project management.',
      color: 'rose',
    },
    {
      icon: '🚀',
      title: 'API Integration',
      description: 'Connect with 50+ popular platforms via our robust API.',
      color: 'cyan',
    },
  ],

  // Services
  services: [
    {
      number: '01',
      title: 'Strategy Development',
      description: 'Custom growth strategies tailored to your unique business goals.',
    },
    {
      number: '02',
      title: 'Implementation Support',
      description: 'End-to-end implementation assistance with dedicated specialists.',
    },
    {
      number: '03',
      title: 'Optimization & Scaling',
      description: 'Continuous optimization and scaling strategies to maximize ROI.',
    },
    {
      number: '04',
      title: 'Training & Education',
      description: 'Comprehensive training programs to upskill your team.',
    },
    {
      number: '05',
      title: '24/7 Support',
      description: 'Round-the-clock expert support ensuring you never face obstacles alone.',
    },
  ],

  // Testimonials
  testimonials: [
    {
      stars: 5,
      quote:
        'GHLScaleUp transformed our agency overnight. We went from $15K to $85K MRR in just 6 months.',
      author: 'Sarah Johnson',
      role: 'Founder, Digital Growth Co',
      initials: 'SJ',
    },
    {
      stars: 5,
      quote:
        'The support team is incredible. They genuinely care about your success.',
      author: 'Marcus Chen',
      role: 'Agency Owner, Premium Services',
      initials: 'MC',
    },
    {
      stars: 5,
      quote:
        'Best investment we made. The ROI has been phenomenal and the training is top-notch.',
      author: 'Jessica Williams',
      role: 'CEO, Elite Agencies Network',
      initials: 'JW',
    },
  ],

  // Social Links
  social: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
  },

  // Footer Links
  footerLinks: {
    product: ['Features', 'Pricing', 'Security', 'API Docs'],
    company: ['About', 'Blog', 'Careers', 'Contact'],
    legal: ['Privacy', 'Terms', 'Cookies', 'Compliance'],
  },

  // SEO & Meta
  seo: {
    title: 'GHLScaleUp — The GHL Growth Partner for Agencies & Businesses',
    description:
      'Scale your GHL business with our expert growth solutions and proven strategies.',
    keywords: [
      'GHL',
      'Agency Growth',
      'Business Scaling',
      'Digital Marketing',
      'Growth Partner',
    ],
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    vercelAnalyticsEnabled: true,
  },
}

export type SiteConfig = typeof siteConfig
