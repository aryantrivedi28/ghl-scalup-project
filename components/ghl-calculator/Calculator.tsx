"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { calc } from "@/lib/ghl-calculator/calc";
import {
  PLANS, GROUPS, PLAN_FIELDS, PRESETS, ZERO, DEFAULT_RATES,
  type CalculatorState, type RateMap, type PlanKey, type BillMode, type PresetKey,
} from "@/lib/ghl-calculator/data";
import Field from "./Field";
import RatePanel from "./RatePanel";
import ResultPanel from "./ResultPanel";
import MobileBar from "./MobileBar";

export default function Calculator() {
  const [S, setState] = useState<CalculatorState>(ZERO);
  const [R, setRates] = useState<RateMap>(DEFAULT_RATES as RateMap);
  const [preset, setPreset] = useState<PresetKey | null>("solo");
  const resultsRef = useRef<HTMLDivElement>(null);

  const cost = useMemo(() => calc(S, R), [S, R]);
  const set = <K extends keyof CalculatorState>(k: K, v: CalculatorState[K]) =>
    setState(s => ({ ...s, [k]: v }));

  const loadPreset = (k: PresetKey) => {
    setState({ ...ZERO, ...PRESETS[k].v } as CalculatorState);
    setPreset(k);
  };

  useEffect(() => { loadPreset("solo"); }, []);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("preset");
    if (q && q in PRESETS) loadPreset(q as PresetKey);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-start pb-32 lg:pb-12 w-full max-w-[1200px] mx-auto overflow-hidden">
      
      {/* LEFT COLUMN - INPUTS */}
      <div className="flex flex-col gap-5 min-w-0">
        
        {/* Presets - Scrollable on Mobile */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" role="group" aria-label="Start from an example">
            <span className="text-[13px] uppercase tracking-widest font-bold text-[#9FB3CC] mr-1 whitespace-nowrap">Start from</span>
            {(Object.keys(PRESETS) as PresetKey[]).map(k => (
              <button
                key={k}
                type="button"
                onClick={() => loadPreset(k)}
                aria-pressed={preset === k}
                className={
                  "flex-none rounded-full border px-4 py-2.5 text-[14px] font-bold tracking-wide transition-all duration-300 whitespace-nowrap " +
                  (preset === k
                    ? "bg-[#FEE202] text-[#0B1B33] border-[#FEE202] shadow-[0_0_20px_-4px_rgba(254,226,2,0.5)] scale-105"
                    : "bg-[#12294A] border-[#24406B] text-[#C9D6E8] hover:border-[#1E99E7] hover:text-white hover:-translate-y-0.5 hover:shadow-lg")
                }
              >
                {PRESETS[k].label}
              </button>
            ))}
          </div>
          <p className="text-[14px] text-[#9FB3CC] min-h-[1.4em] font-medium px-4 lg:px-0">
            {preset ? PRESETS[preset].note : ""}
          </p>
        </div>

        {/* Plan Section */}
        <section className="flex flex-col gap-5 rounded-2xl bg-[#12294A] border border-[#24406B] p-5 lg:p-6 shadow-xl shadow-black/10 hover:border-[#1E99E7]/40 transition-colors duration-300">
          <h2 className="font-display text-[20px] font-semibold m-0 text-white">Plan</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#C9D6E8]">GoHighLevel plan</label>
              <div className="inline-flex bg-[#0E2140] border border-[#24406B] rounded-xl p-1.5 gap-1.5 w-full shadow-inner overflow-x-auto [&::-webkit-scrollbar]:hidden" role="radiogroup">
                {(Object.keys(PLANS) as PlanKey[]).map(k => (
                  <button
                    key={k}
                    type="button"
                    role="radio"
                    aria-checked={S.plan === k}
                    onClick={() => { set("plan", k); setPreset(null); }}
                    className={
                      "flex-1 rounded-lg px-2 lg:px-3 py-2.5 text-[13px] lg:text-[14px] font-bold whitespace-nowrap transition-all duration-200 " +
                      (S.plan === k
                        ? "bg-[#FEE202] text-[#0B1B33] shadow-md scale-100"
                        : "bg-transparent text-[#9FB3CC] hover:text-white hover:bg-white/5 active:scale-95")
                    }
                  >
                    {PLANS[k].name}
                  </button>
                ))}
              </div>
              <span className="text-[12px] lg:text-[13px] text-[#9FB3CC] leading-tight">${PLANS[S.plan].m}/mo. {PLANS[S.plan].note}</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#C9D6E8]">Billing</label>
              <div className="inline-flex bg-[#0E2140] border border-[#24406B] rounded-xl p-1.5 gap-1.5 w-full shadow-inner" role="radiogroup">
                {(["monthly","annual"] as BillMode[]).map(b => (
                  <button
                    key={b}
                    type="button"
                    role="radio"
                    aria-checked={S.bill === b}
                    onClick={() => { set("bill", b); setPreset(null); }}
                    className={
                      "flex-1 rounded-lg px-3 py-2.5 text-[13px] lg:text-[14px] font-bold whitespace-nowrap transition-all duration-200 " +
                      (S.bill === b
                        ? "bg-[#FEE202] text-[#0B1B33] shadow-md scale-100"
                        : "bg-transparent text-[#9FB3CC] hover:text-white hover:bg-white/5 active:scale-95")
                    }
                  >
                    {b === "monthly" ? "Monthly" : "Annual"}
                  </button>
                ))}
              </div>
              <span className="text-[12px] lg:text-[13px] text-[#9FB3CC] leading-tight">Annual saves about 17% on the plan only.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mt-2">
            {PLAN_FIELDS.map(f => (
              <Field key={f.id} field={f} value={(S as any)[f.id]} onChange={v => set(f.id as keyof CalculatorState, v as any)} />
            ))}
          </div>
        </section>

        {/* Input Groups */}
        {GROUPS.map(g => (
          <section key={g.id} className="flex flex-col gap-4 lg:gap-5 rounded-2xl bg-[#12294A] border border-[#24406B] p-5 lg:p-6 shadow-xl shadow-black/10 hover:border-[#1E99E7]/40 transition-colors duration-300">
            <div>
              <h2 className="font-display text-[18px] lg:text-[20px] font-semibold m-0 text-white">{g.title}</h2>
              <p className="mt-1.5 mb-0 text-[13px] lg:text-[14px] text-[#9FB3CC] leading-relaxed">{g.blurb}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {g.fields.map(f => (
                <Field key={f.id} field={f} value={(S as any)[f.id]} onChange={v => set(f.id as keyof CalculatorState, v as any)} />
              ))}
            </div>
          </section>
        ))}

        <RatePanel
          rates={R}
          onChange={(k, v) => setRates(r => ({ ...r, [k]: v }))}
          onReset={() => setRates(DEFAULT_RATES as RateMap)}
        />
      </div>

      {/* RIGHT COLUMN - RESULTS */}
      <div ref={resultsRef} className="w-full min-w-0">
        <ResultPanel c={cost} S={S} R={{ sms: R.sms, flat: R.flat }} />
      </div>

      {/* MOBILE BAR */}
      <MobileBar
        total={cost.total}
        onClick={() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
      />
    </div>
  );
}