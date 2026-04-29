export default function Hero() {
  return (
    <div className="relative z-5 max-w-4xl mx-auto text-center px-5 md:px-12 pt-16 md:pt-20 pb-12">
      <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/40 text-[#F5C518] text-xs md:text-sm font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-8">
        ⚡ Now Onboarding Developers
      </div>
      <h1 className="font-poppins font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.08] mb-6">
        Join the Army of<br />
        <span className="text-[#3B9EE8]">GHL Developers</span><br />
        at <span className="text-[#2ECC71]">GHL ScaleUp</span>
      </h1>
      <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed font-light">
        We work with the best GoHighLevel builders in the world. Projects come in constantly — and we need developers who are ready to move fast and build right.
      </p>
    </div>
  );
}