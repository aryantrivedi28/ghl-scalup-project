// components/testimonials/TestimonialsPage.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote, ArrowRight, ChevronDown, Play } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import InfoVideo from './InfoVideo';
import type { Testimonial } from './data/testimonialsData';
import { VIDEO_TESTIMONIALS } from './data/videoTestimonials';

interface TestimonialsPageProps {
  testimonials: Testimonial[];
  averageRating: string;
  totalClients: number;
}

const SERVICES = [
  'All Services',
  'GHL CRM Setup',
  'AI Workflow Automation',
  'Funnel Development',
  'SEO Strategy',
  'Full Service Package',
];

export default function TestimonialsPage({
  testimonials,
  averageRating,
  totalClients,
}: TestimonialsPageProps) {
  const [filter, setFilter] = useState('All Services');
  const [visibleCount, setVisibleCount] = useState(6);

  // Hero rotating showcase state
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  // Clients that have an image — best for the rotating showcase
  const heroClients = testimonials.filter((t) => t.clientImage);

  // Auto-rotate hero showcase
  useEffect(() => {
    if (heroPaused || heroClients.length <= 1) return;
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroClients.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroPaused, heroClients.length]);

  const filtered =
    filter === 'All Services'
      ? testimonials
      : testimonials.filter((t) => t.serviceUsed?.includes(filter));

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const featured = testimonials.filter((t) => t.featured).slice(0, 2);

  const perClientVideos = testimonials
    .filter((t) => t.videoUrl && t.videoUrl.trim().length > 0)
    .map((t) => ({
      _id: `pc-${t._id}`,
      videoSrc: t.videoUrl!,
      title: `${t.clientName} — ${t.companyName}`,
      description: t.clientRole ?? 'Client Testimonial',
    }));

  const allVideos = [...VIDEO_TESTIMONIALS, ...perClientVideos];
  const hasVideos = allVideos.length > 0;

  const activeHeroClient =
    heroClients.length > 0 ? heroClients[heroIndex] : null;

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1 — HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(14,155,240,0.12),transparent)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

            {/* LEFT — copy + CTAs */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Client Testimonials
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-5">
                Real Clients. Real Experiences.{' '}
                <span className="text-[#F8D000]">Real Results.</span>
              </h1>

              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-[520px]">
                Discover what our clients have to say about their experience
                working with our team and the solutions we&apos;ve delivered
                together.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center gap-2 bg-[#0E9BF0] hover:bg-[#0C88D4] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Let&apos;s Work Together
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* RIGHT — Rotating client showcase */}
            <div
              className="relative w-full max-w-[420px] mx-auto md:max-w-none md:ml-auto"
              onMouseEnter={() => setHeroPaused(true)}
              onMouseLeave={() => setHeroPaused(false)}
            >
              {activeHeroClient ? (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 bg-white/5 backdrop-blur-sm">

                  {/* Photo — constrained height so hero stays compact */}
                  <div className="relative h-[340px] sm:h-[380px] md:h-[440px]">
                    {heroClients.map((c, i) => (
                      <div
                        key={c._id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === heroIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        <Image
                          src={c.clientImage!}
                          alt={`${c.clientName} — ${c.companyName}`}
                          fill
                          sizes="(max-width: 768px) 90vw, 420px"
                          quality={80}
                          className="object-cover object-center"
                          priority={i === 0}
                        />
                      </div>
                    ))}

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1421] via-[#0B1421]/30 to-transparent pointer-events-none" />

                    {/* Top-right — rating pill */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                        <Star className="w-3.5 h-3.5 fill-[#F8D000] text-[#F8D000]" />
                        <span className="text-sm font-bold text-white">
                          {activeHeroClient.rating}.0
                        </span>
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < activeHeroClient.rating
                              ? 'fill-[#F8D000] text-[#F8D000]'
                              : 'fill-white/20 text-white/20'
                              }`}
                          />
                        ))}
                      </div>

                      <div className="relative mb-3">
                        <Quote className="absolute -top-1 -left-1 w-5 h-5 text-white/20" />
                        <p className="relative pl-5 text-white/90 text-sm leading-relaxed italic line-clamp-2">
                          {activeHeroClient.testimonial.length > 120
                            ? `${activeHeroClient.testimonial.slice(0, 120)}...`
                            : activeHeroClient.testimonial}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/15">
                        <div className="min-w-0">
                          <h3 className="font-bold text-white text-sm md:text-base truncate">
                            {activeHeroClient.clientName}
                          </h3>
                          <p className="text-white/60 text-xs truncate">
                            {[activeHeroClient.clientRole, activeHeroClient.companyName]
                              .filter(Boolean)
                              .join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dots */}
                  {heroClients.length > 1 && (
                    <div className="flex items-center justify-center gap-1.5 py-3 bg-[#0B1421]">
                      {heroClients.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setHeroIndex(i)}
                          aria-label={`Show ${heroClients[i].clientName}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${i === heroIndex
                            ? 'w-6 bg-[#F8D000]'
                            : 'w-1.5 bg-white/30 hover:bg-white/50'
                            }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-extrabold text-[#F8D000]">
                        {totalClients}+
                      </div>
                      <div className="text-white/60 text-xs mt-1">Happy Clients</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-3xl font-extrabold text-[#F8D000]">
                        {averageRating}
                        <Star className="w-5 h-5 fill-[#F8D000] text-[#F8D000]" />
                      </div>
                      <div className="text-white/60 text-xs mt-1">Average Rating</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2 — VIDEO TESTIMONIALS
          ───────────────────────────────────────────────────────────── */}
      {hasVideos && (
        <section className="py-16 md:py-20 bg-[#F4F7FA]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" />
                Video Reviews
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] text-[#1C2E4A] mb-4">
                See What Our Clients Say
              </h2>
              <p className="text-[#4A5568] text-sm md:text-base">
                Watch real stories from real clients who&apos;ve grown their
                business with us.
              </p>
            </div>

            <div
              className={`grid gap-6 md:gap-8 ${allVideos.length === 1
                ? 'max-w-[720px] mx-auto'
                : allVideos.length === 2
                  ? 'md:grid-cols-2 max-w-[1000px] mx-auto'
                  : 'md:grid-cols-2 lg:grid-cols-3'
                }`}
            >
              {allVideos.map((v) => (
                <div
                  key={v._id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8EDF4] shadow-[0_4px_24px_rgba(28,46,74,0.06)] hover:shadow-[0_12px_40px_rgba(28,46,74,0.12)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative">
                    <InfoVideo
                      videoSrc={v.videoSrc}
                      title={v.title}
                      description={v.description}
                    />
                  </div>
                  <div className="px-4 md:px-5 py-3 border-t border-[#E8EDF4] flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-sm md:text-base font-semibold text-[#1C2E4A] truncate">
                        {v.title}
                      </p>
                      <p className="text-xs text-[#8A9BB0] truncate">
                        {v.description}
                      </p>
                    </div>
                    <Play className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
    SECTION 3 — FEATURED TESTIMONIALS (all clients, alternating)
    ───────────────────────────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" />
                Featured Stories
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] text-[#1C2E4A] mb-3">
                Success Stories That Stand Out
              </h2>
              <p className="text-[#4A5568] text-sm md:text-base">
                Real businesses. Real outcomes. Real people behind the results.
              </p>
            </div>

            <div className="space-y-14 md:space-y-20">
              {testimonials.map((t, idx) => {
                const reversed = idx % 2 === 1;

                return (
                  <div
                    key={t._id}
                    className={`grid md:grid-cols-5 gap-6 md:gap-10 items-center ${reversed ? 'md:grid-flow-dense' : ''
                      }`}
                  >
                    {/* ── TEXT side ── */}
                    <div
                      className={`md:col-span-3 ${reversed ? 'md:col-start-3' : ''
                        }`}
                    >
                      <Quote className="w-9 h-9 text-[#0E9BF0]/20 mb-3" />

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < t.rating
                                ? 'fill-[#F8D000] text-[#F8D000]'
                                : 'fill-gray-200 text-gray-200'
                              }`}
                          />
                        ))}
                      </div>

                      {/* Testimonial text — full, no truncation */}
                      <p className="text-[#1C2E4A] text-base md:text-lg leading-relaxed mb-4 font-medium">
                        &ldquo;{t.testimonial}&rdquo;
                      </p>

                      {/* Project outcome */}
                      {t.projectOutcome && (
                        <div className="inline-flex items-center gap-2 bg-[#25C97D]/10 text-[#1A9960] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                          🎯 {t.projectOutcome}
                        </div>
                      )}

                      {/* Services */}
                      {t.serviceUsed && t.serviceUsed.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {t.serviceUsed.slice(0, 4).map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium text-[#0E9BF0] bg-[#0E9BF0]/10 px-2.5 py-1 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                          {t.serviceUsed.length > 4 && (
                            <span className="text-xs text-[#8A9BB0] self-center">
                              +{t.serviceUsed.length - 4} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Client row */}
                      <div className="flex items-center gap-3.5 pt-4 border-t border-[#E8EDF4]">
                        {t.clientImage ? (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#F8D000]/40 flex-shrink-0">
                            <Image
                              src={t.clientImage}
                              alt={t.clientName}
                              fill
                              sizes="48px"
                              quality={80}
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center text-lg font-bold text-white flex-shrink-0">
                            {t.clientName.charAt(0)}
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="font-bold text-[#1C2E4A] text-base truncate">
                            {t.clientName}
                          </h3>
                          <p className="text-[#4A5568] text-sm truncate">
                            {[t.clientRole, t.companyName]
                              .filter(Boolean)
                              .join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ── IMAGE side (fixed height, no giant photos) ── */}
                    <div
                      className={`md:col-span-2 ${reversed ? 'md:col-start-1 md:row-start-1' : ''
                        }`}
                    >
                      <div className="relative h-[300px] sm:h-[340px] md:h-[380px] rounded-2xl overflow-hidden bg-[#F4F7FA] shadow-[0_4px_24px_rgba(28,46,74,0.08)]">
                        {t.clientImage ? (
                          <Image
                            src={t.clientImage}
                            alt={`${t.clientName}, ${t.clientRole ?? ''} at ${t.companyName}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            quality={80}
                            className="object-cover object-center"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1C2E4A] to-[#0E9BF0] flex items-center justify-center">
                            <span className="text-white text-6xl font-extrabold opacity-40">
                              {t.clientName.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1421]/30 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4 — ALL TESTIMONIALS + FILTER + LOAD MORE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded" />
              All Reviews
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] text-[#1C2E4A] mb-4">
              What Our Clients Say About Us
            </h2>
            <p className="text-[#4A5568] text-sm md:text-base">
              Filter by service to see reviews from clients we&apos;ve helped
              in similar areas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {SERVICES.map((s) => {
              const active = filter === s;
              return (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  aria-pressed={active}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${active
                    ? 'bg-[#0E9BF0] text-white shadow-sm'
                    : 'bg-white text-[#4A5568] hover:bg-[#E8EDF4] border border-[#E8EDF4]'
                    }`}
                >
                  {s}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8EDF4]">
              <p className="text-[#4A5568]">
                No testimonials found for this service yet.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {visible.map((t) => (
                  <TestimonialCard
                    key={t._id}
                    testimonial={t}
                    variant="grid"
                  />
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((n) => n + 6)}
                    className="inline-flex items-center gap-2 bg-[#0E9BF0] hover:bg-[#0C88D4] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Load More Testimonials
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-[#8A9BB0] mt-2">
                    Showing {visible.length} of {filtered.length}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5 — TRUST STRIP
          ───────────────────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-y border-[#E8EDF4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Image
                  src="/google.png"
                  alt="Google"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F8D000] text-[#F8D000]"
                    />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-[#1C2E4A]">
                    5.0
                  </span>
                </div>
                <p className="text-xs text-[#4A5568]">Rated on Google</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-[#E8EDF4]" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Image
                  src="/clutch.png"
                  alt="Clutch"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F8D000] text-[#F8D000]"
                    />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-[#1C2E4A]">
                    5.0
                  </span>
                </div>
                <p className="text-xs text-[#4A5568]">Rated on Clutch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6 — FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1C2E4A] to-[#111E30]">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
            Your Success Story{' '}
            <span className="text-[#F8D000]">Could Be Next.</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-[560px] mx-auto">
            Let&apos;s discuss your goals and discover how we can build
            something great together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#0E9BF0] hover:bg-[#0C88D4] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}