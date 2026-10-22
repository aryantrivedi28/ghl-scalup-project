"use client";
import type { FieldDef } from "@/lib/ghl-calculator/data";

interface Props {
  field: FieldDef;
  value: string | number | boolean;
  onChange: (v: string | number | boolean) => void;
}

export default function Field({ field, value, onChange }: Props) {
  if (field.type === "check") {
    return (
      <label className="group flex gap-3 items-start p-3.5 rounded-xl bg-[#0E2140] border border-[#24406B] cursor-pointer hover:border-[#1E99E7] hover:bg-[#12294A] transition-all duration-200 w-full">
        <input
          type="checkbox"
          checked={!!value}
          onChange={e => onChange(e.target.checked)}
          className="mt-0.5 w-[18px] h-[18px] flex-none accent-[#FEE202] cursor-pointer"
        />
        <span className="grid gap-1">
          <b className="font-medium text-[15px] leading-tight text-white group-hover:text-[#FEE202] transition-colors">{field.label}</b>
          {field.hint && <small className="text-[12.5px] leading-tight text-[#9FB3CC]">{field.hint}</small>}
        </span>
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <div className="flex flex-col gap-1.5 w-full min-w-0">
        <label className="text-sm font-medium text-[#C9D6E8]">{field.label}</label>
        <div className="flex items-center rounded-xl bg-[#0E2140] border border-[#24406B] focus-within:border-[#1E99E7] focus-within:ring-1 focus-within:ring-[#1E99E7]/50 transition-all duration-200 w-full shadow-inner">
          <select
            value={String(value ?? "")}
            onChange={e => onChange(e.target.value)}
            className="w-full bg-transparent border-0 px-3.5 py-3 text-[15px] text-white outline-none rounded-xl appearance-none cursor-pointer"
          >
            {field.options.map(([v, l]) => (
              <option key={v} value={v} className="text-[#0B1B33] bg-white">{l}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5 w-full min-w-0">
      <label className="text-sm font-medium text-[#C9D6E8]">{field.label}</label>
      <div className="flex items-center rounded-xl bg-[#0E2140] border border-[#24406B] focus-within:border-[#1E99E7] focus-within:ring-1 focus-within:ring-[#1E99E7]/50 transition-all duration-200 w-full shadow-inner">
        <input
          type="number"
          inputMode="decimal"
          min={0}
          step={field.step ?? "any"}
          value={value === 0 || value === "" ? "" : String(value)}
          onChange={e => {
            const n = parseFloat(e.target.value);
            onChange(Number.isFinite(n) && n > 0 ? n : 0);
          }}
          className="w-full min-w-0 bg-transparent border-0 px-3.5 py-3 text-[15px] tabular-nums text-white outline-none rounded-xl placeholder:text-[#5A6B82]"
        />
        {field.unit && <span className="pr-3.5 text-[13px] font-medium text-[#9FB3CC] whitespace-nowrap">{field.unit}</span>}
      </div>
      {field.hint && <span className="text-[12.5px] text-[#9FB3CC] leading-tight mt-0.5">{field.hint}</span>}
    </div>
  );
}