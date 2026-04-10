// components/case-studies/CaseStudySnapshot.tsx
'use client';

interface CaseStudySnapshotProps {
  snapshot: string[];
}

export default function CaseStudySnapshot({ snapshot }: CaseStudySnapshotProps) {
  if (!snapshot || snapshot.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {snapshot.map((item, idx) => (
        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all">
          <div className="w-12 h-12 rounded-full bg-[#F8D000]/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#F8D000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
}