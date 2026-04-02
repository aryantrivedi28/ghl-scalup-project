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

// Fetch all case studies
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

// Fix: Properly pass the slug parameter
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
  // Pass the slug parameter correctly
  return await client.fetch(query, { slug });
}

// Fetch featured case studies
export async function getFeaturedCaseStudies() {
  const query = `*[_type == "caseStudy" && featured == true] | order(publishedDate desc)[0...3] {
    _id,
    title,
    slug,
    clientName,
    industry,
    mainImage,
    publishedDate
  }`;
  return await client.fetch(query);
}

// Get all case study slugs for static generation
export async function getAllCaseStudySlugs() {
  const query = `*[_type == "caseStudy"] {
    "slug": slug.current
  }`;
  return await client.fetch(query);
}