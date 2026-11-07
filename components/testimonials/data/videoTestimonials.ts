// components/testimonials/data/videoTestimonials.ts

export interface VideoTestimonial {
  _id: string;
  videoSrc: string;
  title: string;
  description: string;
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    _id: 'v1',
    videoSrc: 'https://youtu.be/mxSm7G52ZJE',
    title: 'How GHL Scale Up Works',
    description: 'Learn about our process and success stories',
  },
  {
    _id: 'v2',
    videoSrc: 'https://youtu.be/YgSBBP37b0M',
    title: 'Client Success Story',
    description: 'Hear from one of our satisfied clients',
  },
];