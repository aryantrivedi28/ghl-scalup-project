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