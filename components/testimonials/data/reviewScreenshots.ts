// components/testimonials/data/reviewScreenshots.ts

export interface ReviewScreenshot {
  _id: string;
  platform: 'google' | 'clutch';
  image: string;       // path in /public
  alt: string;
  reviewerName: string;
  rating: number;
  link?: string;       // optional: link to the review
}

// Drop screenshots into /public/reviews/ (e.g. /public/reviews/google-1.png)
export const REVIEW_SCREENSHOTS: ReviewScreenshot[] = [
  {
    _id: 'g1',
    platform: 'google',
    image: '/reviews/google-1.png',
    alt: 'Google review from a GHL Scale Up client',
    reviewerName: 'Google Review',
    rating: 5,
  },
  {
    _id: 'g2',
    platform: 'google',
    image: '/reviews/google-2.png',
    alt: 'Google review from a GHL Scale Up client',
    reviewerName: 'Google Review',
    rating: 5,
  },
  // Add / remove entries as you collect more screenshots
];