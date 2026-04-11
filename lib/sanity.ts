// lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { PortableTextBlock } from '@portabletext/react';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// ============= CASE STUDIES =============

// Fetch all visible case studies (ordered by ranking and order)
export async function getAllCaseStudies() {
  const query = `*[_type == "caseStudy" && isHidden != true] | order(ranking asc, order asc, _createdAt desc) {
    _id,
    title,
    subtitle,
    slug,
    description,
    tags,
    mainImage,
    "videoUrl": video.videoUrl,
    ranking,
    order
  }`;
  return await client.fetch(query);
}

// Fetch single case study by slug
export async function getCaseStudyBySlug(slug: string) {
  const query = `*[_type == "caseStudy" && slug.current == $slug && isHidden != true][0] {
    _id,
    title,
    subtitle,
    slug,
    description,
    tags,
    mainImage,
    video,
    challenge,
    finzieAdvantage,
    teamMember,
    snapshot,
    testimonial,
    callToActionText,
    callToActionButton,
    ranking,
    order
  }`;
  return await client.fetch(query, { slug });
}

// Get all case study slugs for static generation
export async function getAllCaseStudySlugs() {
  const query = `*[_type == "caseStudy" && isHidden != true] {
    "slug": slug.current
  }`;
  return await client.fetch(query);
}

// Get featured case studies for homepage
export async function getFeaturedCaseStudies(limit: number = 3) {
  const query = `*[_type == "caseStudy" && isHidden != true] | order(ranking asc, order asc)[0...${limit}] {
    _id,
    title,
    subtitle,
    slug,
    description,
    tags,
    mainImage,
    "videoUrl": video.videoUrl
  }`;
  return await client.fetch(query);
}

// ============= TESTIMONIALS =============

// Fetch testimonials by rating (e.g., 5-star testimonials)
export async function getTestimonialsByRating(minRating: number = 4) {
  const query = `*[_type == "testimonial" && rating >= $minRating] | order(rating desc, publishedDate desc) {
    _id,
    clientName,
    clientRole,
    companyName,
    "companyLogo": companyLogo.asset->url,
    "clientImage": clientImage.asset->url,
    testimonial,
    rating,
    serviceUsed,
    projectOutcome,
    publishedDate
  }`;
  return await client.fetch(query, { minRating });
}

// Fetch testimonials by service used
export async function getTestimonialsByService(service: string) {
  const query = `*[_type == "testimonial" && $service in serviceUsed] | order(publishedDate desc, rating desc) {
    _id,
    clientName,
    clientRole,
    companyName,
    "companyLogo": companyLogo.asset->url,
    "clientImage": clientImage.asset->url,
    testimonial,
    rating,
    serviceUsed,
    projectOutcome,
    publishedDate
  }`;
  return await client.fetch(query, { service });
}


// Get testimonials statistics (average rating, total count)
export async function getTestimonialsStats() {
  const query = `{
    "total": count(*[_type == "testimonial"]),
    "averageRating": round(avg(*[_type == "testimonial"].rating), 1),
    "fiveStarCount": count(*[_type == "testimonial" && rating == 5]),
    "fourStarCount": count(*[_type == "testimonial" && rating == 4]),
    "threeStarCount": count(*[_type == "testimonial" && rating == 3]),
    "featuredCount": count(*[_type == "testimonial" && featured == true])
  }`;
  return await client.fetch(query);
}

// Get unique services used across testimonials
export async function getUniqueServices() {
  const query = `*[_type == "testimonial"] | {
    "services": serviceUsed
  }`;
  const result = await client.fetch(query);
  
  // Extract unique services
  const services = new Set<string>();
  result.forEach((item: any) => {
    if (item.services && Array.isArray(item.services)) {
      item.services.forEach((service: string) => services.add(service));
    }
  });
  
  return Array.from(services).sort();
}

// Get recent testimonials with pagination
export async function getRecentTestimonials(page: number = 1, pageSize: number = 9) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  
  const query = `*[_type == "testimonial"] | order(publishedDate desc) [${start}...${end}] {
    _id,
    clientName,
    clientRole,
    companyName,
    "companyLogo": companyLogo.asset->url,
    "clientImage": clientImage.asset->url,
    testimonial,
    rating,
    serviceUsed,
    projectOutcome,
    publishedDate
  }`;
  
  const countQuery = `count(*[_type == "testimonial"])`;
  
  const [testimonials, total] = await Promise.all([
    client.fetch(query),
    client.fetch(countQuery)
  ]);
  
  return {
    testimonials,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize)
  };
}

// Fetch all testimonials
export async function getAllTestimonials() {
  const query = `*[_type == "testimonial"] | order(publishedDate desc) {
    _id,
    clientName,
    clientRole,
    companyName,
    companyLogo,
    clientImage,
    testimonial,
    rating,
    serviceUsed,
    projectOutcome,
    featured,
    publishedDate
  }`;
  const result = await client.fetch(query);
  return result || [];
}

// Fetch featured testimonials for homepage
export async function getFeaturedTestimonials(limit: number = 6) {
  const query = `*[_type == "testimonial" && featured == true] | order(publishedDate desc)[0...${limit}] {
    _id,
    clientName,
    clientRole,
    companyName,
    companyLogo,
    clientImage,
    testimonial,
    rating,
    serviceUsed,
    projectOutcome
  }`;
  const result = await client.fetch(query);
  return result || [];
}

// Fetch single testimonial by ID
export async function getTestimonialById(id: string) {
  const query = `*[_type == "testimonial" && _id == $id][0] {
    _id,
    clientName,
    clientRole,
    companyName,
    companyLogo,
    clientImage,
    testimonial,
    rating,
    serviceUsed,
    projectOutcome,
    featured,
    publishedDate,
    seoTitle,
    seoDescription
  }`;
  const result = await client.fetch(query, { id });
  return result || null;
}


// Fetch all testimonials without featured filter
export async function getAllTestimonialsForHomepage() {
  const query = `*[_type == "testimonial"] | order(publishedDate desc) {
    _id,
    clientName,
    clientRole,
    companyName,
    companyLogo,
    clientImage,
    testimonial,
    rating,
    serviceUsed,
    projectOutcome,
    featured,
    publishedDate
  }`;
  const result = await client.fetch(query);
  return result || [];
}