// components/testimonials/ReviewScreenshots.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, X, ExternalLink } from 'lucide-react';
import {
  REVIEW_SCREENSHOTS,
  type ReviewScreenshot,
} from './data/reviewScreenshots';

export default function ReviewScreenshots() {
  const [active, setActive] = useState<ReviewScreenshot | null>(null);

  if (REVIEW_SCREENSHOTS.length === 0) return null;

  const count = REVIEW_SCREENSHOTS.length;
  const googleCount = REVIEW_SCREENSHOTS.filter(
    (r) => r.platform === 'google'
  ).length;
  const clutchCount = REVIEW_SCREENSHOTS.filter(
    (r) => r.platform === 'clutch'
  ).length;

  // ── Dynamic layout based on how many screenshots you have ──
  // 1 image   → single centered, max 720px wide (prevents absurdly wide)
  // 2 images  → two equal columns
  // 3 images  → three equal columns on desktop, 1 on mobile
  // 4+ images → responsive grid (1 / 2 / 3 cols)
  const gridClass =
    count === 1
      ? 'flex justify-center'
      : count === 2
        ? 'grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6'
        : count === 3
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6';

  return (
    <>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" />
              Verified Reviews
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] text-[#1C2E4A] mb-4">
              See Our Reviews on Google &amp; Clutch
            </h2>
            <p className="text-[#4A5568] text-sm md:text-base">
              Real, unedited review screenshots from verified clients — tap any
              to view full size.
            </p>
          </div>

          {/* Platform summary pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {googleCount > 0 && (
              <div className="inline-flex items-center gap-2 bg-[#F4F7FA] border border-[#E8EDF4] rounded-full px-4 py-2">
                <Image
                  src="/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="text-sm font-semibold text-[#1C2E4A]">
                  {googleCount} Google review{googleCount > 1 ? 's' : ''}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#F8D000] text-[#F8D000]"
                    />
                  ))}
                </div>
              </div>
            )}
            {clutchCount > 0 && (
              <div className="inline-flex items-center gap-2 bg-[#F4F7FA] border border-[#E8EDF4] rounded-full px-4 py-2">
                <Image
                  src="/clutch.png"
                  alt="Clutch"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="text-sm font-semibold text-[#1C2E4A]">
                  {clutchCount} Clutch review{clutchCount > 1 ? 's' : ''}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#F8D000] text-[#F8D000]"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Screenshots — flexible layout ── */}
          <div className={gridClass}>
            {REVIEW_SCREENSHOTS.map((r) => (
              <button
                key={r._id}
                onClick={() => setActive(r)}
                aria-label={`View ${r.alt}`}
                className={[
                  'group relative rounded-xl overflow-hidden',
                  'border border-[#E8EDF4] bg-white',
                  'shadow-[0_2px_12px_rgba(28,46,74,0.06)]',
                  'hover:shadow-[0_12px_32px_rgba(28,46,74,0.14)]',
                  'hover:-translate-y-0.5 transition-all duration-300',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E9BF0]',
                  'text-left w-full',
                  count === 1 ? 'max-w-[720px]' : '',
                ].join(' ')}
              >
                {/* Platform badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-[#E8EDF4]">
                  <Image
                    src={
                      r.platform === 'google' ? '/google.png' : '/clutch.png'
                    }
                    alt={r.platform}
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                  <span className="text-[0.6rem] font-bold uppercase text-[#1C2E4A] tracking-wide">
                    {r.platform}
                  </span>
                </div>

                {/* Image — uses NATURAL aspect ratio, no cropping */}
                <div className="relative w-full bg-[#F4F7FA]">
                  <Image
                    src={r.image}
                    alt={r.alt}
                    width={1200}
                    height={800}
                    sizes={
                      count === 1
                        ? '(max-width: 768px) 92vw, 720px'
                        : '(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw'
                    }
                    quality={85}
                    className="w-full h-auto object-contain"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1C2E4A]/0 group-hover:bg-[#1C2E4A]/15 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 text-[#1C2E4A] text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                      View full size
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox modal ── */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Review screenshot"
        >
          {/* Close */}
          <button
            onClick={() => setActive(null)}
            aria-label="Close review"
            className="absolute top-3 right-3 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Card */}
          <div
            className="relative max-w-[min(94vw,900px)] max-h-[92vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#E8EDF4] flex-shrink-0">
              <Image
                src={
                  active.platform === 'google' ? '/google.png' : '/clutch.png'
                }
                alt={active.platform}
                width={22}
                height={22}
                className="object-contain"
              />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < active.rating
                        ? 'fill-[#F8D000] text-[#F8D000]'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-auto text-xs font-semibold text-[#1C2E4A] capitalize">
                {active.platform} review
              </span>
            </div>

            {/* Image — scrollable if very tall */}
            <div className="relative overflow-auto bg-[#F4F7FA] flex-1">
              <Image
                src={active.image}
                alt={active.alt}
                width={1400}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Optional CTA to source */}
            {active.link && (
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0E9BF0] hover:bg-[#0C88D4] text-white text-sm font-semibold py-3 transition-colors flex-shrink-0"
              >
                View on {active.platform === 'google' ? 'Google' : 'Clutch'}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}