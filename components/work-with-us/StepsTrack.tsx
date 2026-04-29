export default function StepsTrack() {
  const steps = [
    { num: '1', label: 'Register', color: 'bg-[#F5C518] text-[#071833]' },
    { num: '2', label: 'Fill Your Details', color: 'bg-[#3B9EE8] text-white' },
    { num: '3', label: 'Add Case Studies', color: 'bg-[#2ECC71] text-[#071833]' },
    { num: '✓', label: 'We Reach Out', color: 'bg-[#122d56] text-white border border-white/10' },
  ];

  return (
    <div className="relative z-5 max-w-4xl mx-auto mb-16 px-5 md:px-12">
      <div className="hidden md:grid grid-cols-[auto,1fr,auto,1fr,auto,1fr,auto] items-center gap-0">
        {steps.map((step, index) => (
          <>
            <div className="flex flex-col items-center text-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-poppins font-extrabold text-base flex-shrink-0 ${step.color}`}>
                {step.num}
              </div>
              <div className="font-poppins font-semibold text-xs max-w-[100px] leading-tight">
                {step.label}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="h-[2px] bg-gradient-to-r from-[#F5C518]/40 to-[#3B9EE8]/40 mb-9 relative">
                <div className="absolute -right-1 -top-2.5 text-[#3B9EE8] text-xl opacity-60">›</div>
              </div>
            )}
          </>
        ))}
      </div>
      {/* Mobile version - simple list */}
      <div className="md:hidden flex flex-col gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-poppins font-extrabold text-sm flex-shrink-0 ${step.color}`}>
              {step.num}
            </div>
            <div className="font-poppins font-semibold text-sm">{step.label}</div>
            {index < steps.length - 1 && (
              <div className="ml-auto text-[#3B9EE8] text-xl opacity-60">↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}