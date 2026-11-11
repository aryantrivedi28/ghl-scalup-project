// components/ghlscalup/ClientLogos.tsx
'use client';

import Image from 'next/image';

// ---------------------------------------------------------------------------
// Add your client logos here.
// Drop the files into: /public/logos/  (e.g. /public/logos/riverenergia.png)
// Prefer transparent PNG or SVG, ideally ≥ 200px wide, with roughly equal
// aspect ratios so they line up nicely in the marquee.
// ---------------------------------------------------------------------------
const CLIENT_LOGOS = [
  { name: 'RiverEnergia',   src: '/logos/rivera.jpeg'},
  { name: 'FuDog Group', src: '/logos/fudog.webp', dark: true},
  { name: 'Solvi',    src: '/logos/solvi.jpeg' },
  { name: 'LumenGrowth.ai', src: '/logos/lumengrowth.jpeg' },
  { name: 'ACP Group', src: '/logos/acp.jpeg' },
  { name: 'Nail - it', src: '/logos/nailit.jpeg' },
  { name: 'ToSellBiz', src: '/logos/tosellbiz.jpeg' },
  { name: '260 Logo', src: '/logos/260logo.png' },
  { name: 'Jenson Usa', src: '/logos/jensonusa.png' },
  { name: 'Deborah King', src: '/logos/deborahking.png' },
  { name: 'Chiro House', src: '/logos/chirohouse.webp' },
  // Add as many as you like — the marquee duplicates them automatically.
];

export default function ClientLogos() {
  if (CLIENT_LOGOS.length === 0) return null;

  // Duplicate the list so the loop is seamless (translateX(-50%) at end)
  const looped = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-6 md:mb-8">
        <p className="text-center text-[0.68rem] md:text-xs font-bold tracking-[0.14em] uppercase text-[#8A9BB0]">
          Trusted by these Growing Brands
        </p>
      </div>

      {/* Marquee wrapper — mask fades edges on both sides */}
      <div
        className="relative group"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        {/* Single track; CSS animates translateX(0 → -50%) for a seamless loop */}
        <div
          className="flex w-max gap-10 md:gap-16 items-center animate-marquee group-hover:[animation-play-state:paused]"
        >
          {looped.map((logo, i) => {
            const isDark = 'dark' in logo && logo.dark;

            return (
              <div
                key={`${logo.name}-${i}`}
                className={`shrink-0 flex items-center justify-center h-10 md:h-18 w-[120px] md:w-[180px] ${
                  isDark ? 'bg-[#0B1628] rounded-lg px-3' : ''
                }`}
                aria-label={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={56}
                  className={
                    isDark
                      ? 'max-h-full max-w-full w-auto h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300'
                      : 'max-h-full max-w-full w-auto h-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Keyframes — only defines .animate-marquee, so Tailwind doesn't complain */}
      <style jsx>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        :global(.animate-marquee) {
          animation: marquee-scroll 30s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.animate-marquee) { animation: none; }
        }
      `}</style>
    </section>
  );
}