// components/ghlscalup/FinalCTA.tsx
import Link from 'next/link'

const FinalCTA = () => {
  return (
    <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
          Stop Struggling with GoHighLevel.<br />Let Our Experts <span className="text-[#F8D000]">Handle It for You.</span>
        </h2>
        <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
          Whether you need CRM setup, AI automation, sales funnels, or a complete white-label SaaS — our dedicated GoHighLevel team is ready.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href="mailto:aryan@finzie.co" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
            Schedule Your Free Strategy Call →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FinalCTA