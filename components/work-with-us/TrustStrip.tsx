export default function TrustStrip() {
  const stats = [
    { num: '6', label: 'Countries served', color: 'text-[#F5C518]' },
    { num: '50+', label: 'Active clients', color: 'text-[#3B9EE8]' },
    { num: '200+', label: 'Projects delivered', color: 'text-[#2ECC71]' },
  ];

  return (
    <div className="relative z-5 border-t border-white/10 py-10 md:py-12 max-w-4xl mx-auto px-5 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-2">
            <div className={`font-poppins font-extrabold text-3xl md:text-4xl ${stat.color}`}>
              {stat.num}
            </div>
            <div className="text-sm text-white/50">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}