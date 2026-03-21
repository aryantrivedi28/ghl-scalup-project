// components/ghlscalup/StatsBar.tsx
const StatsBar = () => {
  return (
    <div className="bg-[#0B1421] py-9 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-[2rem] font-black text-[#F8D000] tracking-[-0.04em] leading-none">5+</div>
            <div className="text-[0.72rem] text-[#8A9BB0] font-medium mt-1.5 uppercase tracking-[0.05em]">Years of GHL Expertise</div>
          </div>
          <div>
            <div className="text-[2rem] font-black text-[#F8D000] tracking-[-0.04em] leading-none">50+</div>
            <div className="text-[0.72rem] text-[#8A9BB0] font-medium mt-1.5 uppercase tracking-[0.05em]">Clients Worldwide</div>
          </div>
          <div>
            <div className="text-[2rem] font-black text-[#F8D000] tracking-[-0.04em] leading-none">200+</div>
            <div className="text-[0.72rem] text-[#8A9BB0] font-medium mt-1.5 uppercase tracking-[0.05em]">GHL Projects Delivered</div>
          </div>
          <div>
            <div className="text-[2rem] font-black text-[#F8D000] tracking-[-0.04em] leading-none">6</div>
            <div className="text-[0.72rem] text-[#8A9BB0] font-medium mt-1.5 uppercase tracking-[0.05em]">Countries Served</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsBar