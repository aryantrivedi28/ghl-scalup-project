// lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 't2htf078',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Case Study Functions
export async function getAllCaseStudies() {
  const query = `*[_type == "caseStudy"] | order(publishedDate desc) {
    _id,
    title,
    slug,
    clientName,
    industry,
    servicesProvided,
    overview,
    mainImage,
    publishedDate,
    featured
  }`;
  return await client.fetch(query);
}

export async function getCaseStudyBySlug(slug: string) {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    clientName,
    industry,
    servicesProvided,
    overview,
    challenges,
    solution,
    results,
    mainImage,
    publishedDate,
    seoTitle,
    seoDescription
  }`;
  return await client.fetch(query, { slug });
}

// Testimonial Functions
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
  return await client.fetch(query);
}

export async function getFeaturedTestimonials() {
  const query = `*[_type == "testimonial" && featured == true] | order(publishedDate desc)[0...6] {
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
  return await client.fetch(query);
}

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
    publishedDate,
    seoTitle,
    seoDescription
  }`;
  return await client.fetch(query, { id });
}
