/**
 * TypeScript type definitions for GHLScaleUp
 */

// Navigation
export interface NavLink {
  label: string
  href: string
}

export interface Navigation {
  links: NavLink[]
}

// Hero Section
export interface HeroStat {
  value: string
  label: string
}

export interface CTA {
  label: string
  style: 'primary' | 'secondary'
  icon?: string
}

export interface Hero {
  badge: string
  headline: string
  subheadline: string
  ctas: CTA[]
  stats: HeroStat[]
}

// Feature
export interface Feature {
  icon: string
  title: string
  description: string
  color: 'blue' | 'green' | 'amber' | 'purple' | 'rose' | 'cyan'
}

// Service
export interface Service {
  number: string
  title: string
  description: string
}

// Testimonial
export interface Testimonial {
  stars: number
  quote: string
  author: string
  role: string
  initials: string
}

// Footer Links
export interface FooterLinks {
  product: string[]
  company: string[]
  legal: string[]
}

// Social Links
export interface SocialLinks {
  twitter: string
  linkedin: string
  facebook: string
}

// SEO Configuration
export interface SEO {
  title: string
  description: string
  keywords: string[]
}

// Analytics Configuration
export interface Analytics {
  googleAnalyticsId?: string
  vercelAnalyticsEnabled: boolean
}

// Complete Site Configuration
export interface SiteConfig {
  brand: {
    name: string
    shortName: string
    description: string
    url: string
  }
  navigation: Navigation
  hero: Hero
  features: Feature[]
  services: Service[]
  testimonials: Testimonial[]
  social: SocialLinks
  footerLinks: FooterLinks
  seo: SEO
  analytics: Analytics
}

// Component Props
export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

// Utility Types
export type ColorVariant =
  | 'blue'
  | 'green'
  | 'amber'
  | 'purple'
  | 'rose'
  | 'cyan'

export type BreakPoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
