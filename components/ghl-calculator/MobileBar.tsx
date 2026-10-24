"use client";

interface Props { total: number; onClick: () => void; }

export default function MobileBar({ total, onClick }: Props) {
  return (
    <div className="lg:hidden fixed left-0 right-0 bottom-0 z-50 flex items-center justify-between gap-4 bg-[#0B1B33]/95 backdrop-blur-md text-white px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] border-t border-[#24406B] shadow-[0_-10px_30px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col">
        <span className="text-[11px] font-medium text-[#9FB3CC] leading-none mb-1">Estimated per month</span>
        <span className="font-display font-bold text-[24px] text-[#FEE202] tabular-nums leading-none drop-shadow-[0_0_10px_rgba(254,226,2,0.3)]">
          ${Math.round(total).toLocaleString("en-US")}
        </span>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="rounded-xl bg-[#FEE202] text-[#0B1B33] font-bold text-[14px] px-4 py-2.5 active:scale-95 transition-transform duration-150 shadow-lg shadow-[#FEE202]/20 whitespace-nowrap"
      >
        See breakdown
      </button>
    </div>
  );
}