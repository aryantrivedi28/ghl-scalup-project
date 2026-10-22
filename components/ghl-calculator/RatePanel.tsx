"use client";
import { RATE_DEFS } from "@/lib/ghl-calculator/data";
import type { RateMap } from "@/lib/ghl-calculator/data";

interface Props {
  rates: RateMap;
  onChange: (k: string, v: number) => void;
  onReset: () => void;
}

export default function RatePanel({ rates, onChange, onReset }: Props) {
  return (
    <details className="group rounded-2xl bg-[#12294A] border border-[#24406B] px-5 hover:border-[#1E99E7]/50 transition-colors duration-300">
      <summary className="cursor-pointer py-5 font-display font-semibold text-[17px] text-white select-none flex items-center justify-between">
        Advanced rates (match your own Pricing tab)
        <span className="text-[#9FB3CC] group-open:rotate-180 transition-transform duration-300 text-sm">▼</span>
      </summary>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-5 pt-2">
        {RATE_DEFS.map(r => (
          <div key={r.k} className="flex flex-col gap-1.5 min-w-0">
            <label className="text-sm font-medium text-[#C9D6E8]">{r.label}</label>
            <div className="flex items-center rounded-xl bg-[#0E2140] border border-[#24406B] focus-within:border-[#1E99E7] focus-within:ring-1 focus-within:ring-[#1E99E7]/50 transition-all duration-200 shadow-inner">
              <span className="pl-3.5 pr-1 text-[13px] text-[#9FB3CC]">$</span>
              <input
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={rates[r.k] ?? ""}
                onChange={e => {
                  const n = parseFloat(e.target.value);
                  onChange(r.k, Number.isFinite(n) && n >= 0 ? n : 0);
                }}
                className="w-full bg-transparent border-0 px-2 py-2.5 text-[15px] tabular-nums text-white outline-none rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pb-5">
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium text-[#7CCBF7] hover:text-white underline underline-offset-4 decoration-[#7CCBF7]/30 hover:decoration-white transition-all duration-200"
        >
          Reset rates to published defaults
        </button>
      </div>
    </details>
  );
}