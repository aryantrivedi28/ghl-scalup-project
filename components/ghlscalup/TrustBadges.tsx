// components/ghlscalup/TrustBadges.tsx
'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="py-8 md:py-10 bg-white border-y border-[#E8EDF4]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-16">

          {/* Google Reviews */}
          <a
            // href="https://www.google.com/search?q=GHL+Scale+Up"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group"
            aria-label="GHL Scale Up Google Reviews"
          >
            <div className="w-12 h-12 md:w-18 md:h-18 flex items-center justify-center shrink-0">
              <Image
                src="/google.png"
                alt="Google"
                width={70}
                height={70}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 md:w-[18px] md:h-[18px] fill-[#F8D000] text-[#F8D000]"
                  />
                ))}
                <span className="ml-1.5 text-sm md:text-base font-bold text-[#1C2E4A]">
                  5.0
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#4A5568] group-hover:text-[#0E9BF0] transition-colors">
                Rated on Google
              </p>
            </div>
          </a>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-[#E8EDF4]" />

          {/* Clutch Reviews */}
          <a
            // href="https://clutch.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            aria-label="GHL Scale Up Clutch Reviews"
          >
            <div className="w-9 h-9 md:w-18 md:h-18 flex items-center justify-center shrink-0">
              <Image
                src="/clutch.png"
                alt="Clutch"
                width={70}
                height={70}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 md:w-[18px] md:h-[18px] fill-[#F8D000] text-[#F8D000]"
                  />
                ))}
                <span className="ml-1.5 text-sm md:text-base font-bold text-[#1C2E4A]">
                  5.0
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#4A5568] group-hover:text-[#0E9BF0] transition-colors">
                Rated on Clutch
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}