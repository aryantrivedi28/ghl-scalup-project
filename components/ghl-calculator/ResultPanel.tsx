"use client";
import { money, type CostBreakdown } from "@/lib/ghl-calculator/calc";
import type { CalculatorState } from "@/lib/ghl-calculator/data";

const BOOK_URL = "https://www.ghlscaleup.com/book-a-call";

const COLORS = {
  plan:   "var(--c-plan,   #1E99E7)",
  text:   "var(--c-text,   #FEE202)",
  calls:  "var(--c-calls,  #1DB25F)",
  email:  "var(--c-email,  #7CCBF7)",
  ai:     "var(--c-ai,     #F28B50)",
  fees:   "var(--c-fees,   #6B84A8)",
  addon:  "var(--c-addon,  #2CC7B8)",
  buffer: "var(--c-buffer, #8DA0BC)",
};

interface Props {
  c: CostBreakdown;
  S: CalculatorState;
  R: { sms: number; flat: number };
}

export default function ResultPanel({ c, S, R }: Props) {
  const cats = [
    { n: `Plan (${c.planName})`, v: c.planCost, col: COLORS.plan, always: true },
    { n: "Texting",             v: c.texting,  col: COLORS.text },
    { n: "Calls and recording", v: c.calls,    col: COLORS.calls },
    { n: "Email",               v: c.email,    col: COLORS.email },
    { n: c.aiLabel,             v: c.ai,       col: COLORS.ai },
    { n: "Numbers and fees",    v: c.fees,     col: COLORS.fees },
    { n: "Add-ons",             v: c.addons,   col: COLORS.addon },
    { n: "Safety buffer",       v: c.buffer,   col: COLORS.buffer },
  ].filter(x => x.always || x.v > 0.004);

  const yearly = c.total * 12;
  const extras = c.total - c.planCost;
  const mult = c.planCost > 0 ? c.total / c.planCost : 0;

  const rebill = S.markup > 0 && c.usage > 0 ? (() => {
    const billed = (c.usage + c.buffer) * (1 + S.markup / 100);
    return { billed, keep: billed - c.usage - c.buffer };
  })() : null;

  const notes: { kind: "warn" | "info"; text: string }[] = [];
  if (S.plan === "starter" && S.subs > 3)
    notes.push({ kind: "warn", text: `Starter allows 3 sub-accounts and you entered ${S.subs}. Choose Unlimited.` });
  if (S.app && S.plan !== "agency")
    notes.push({ kind: "warn", text: "The white-label mobile app needs Agency Pro." });
  if (S.markup > 0 && c.ai > 0 && S.plan !== "agency")
    notes.push({ kind: "warn", text: "Rebilling AI with a markup needs Agency Pro. Other usage can be rebilled on Unlimited." });
  if (S.aiMode === "flat" && S.aiSubs === 0)
    notes.push({ kind: "warn", text: "Enter how many sub-accounts use AI to price the flat bundle." });
  if (S.outMsgs > 0 && S.avgSeg > 2) {
    const save = S.outMsgs * (S.avgSeg - 2) * R.sms;
    if (save > 0.5)
      notes.push({ kind: "info", text: `Keeping texts to 2 segments would save about ${money(save)} a month.` });
  }
  if (S.outMsgs > 0)
    notes.push({ kind: "info", text: `Carrier fees add ${money(c.carrier)}${c.smsBase > 0 ? ` (${Math.round(c.carrier / c.smsBase * 100)}% on top of the base SMS cost).` : "."}` });
  if (S.aiSubs > 0 && c.payg > 0) {
    if (c.flat < c.payg)
      notes.push({ kind: "info", text: `The flat AI bundle is ${money(c.payg - c.flat)} cheaper than pay as you go at this volume.` });
    else
      notes.push({ kind: "info", text: `Pay as you go is ${money(c.flat - c.payg)} cheaper than the flat AI bundle at this volume.` });
  }
  if (c.storage > 0.5)
    notes.push({ kind: "info", text: `Recording storage costs ${money(c.storage)} a month and grows until you delete old recordings.` });

  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-[#12294A] border border-[#24406B] p-6 shadow-2xl shadow-black/20 lg:sticky lg:top-6">
      
      {/* Total */}
      <div>
        <div className="text-[13px] uppercase tracking-widest font-bold text-[#9FB3CC] mb-2">Estimated monthly cost</div>
        <div className="font-display font-bold leading-none tracking-tight text-[clamp(48px,8vw,64px)] tabular-nums text-[#FEE202] drop-shadow-[0_0_15px_rgba(254,226,2,0.2)]">
          {money(c.total)}<small className="text-[20px] font-semibold text-[#9FB3CC] tracking-normal drop-shadow-none"> /mo</small>
        </div>
      </div>

      {/* Sub-stats */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-[#C9D6E8] tabular-nums">
        <span>Per year: <b className="text-white text-[16px]">{money(yearly)}</b></span>
        <span>Usage & extras: <b className="text-white text-[16px]">{money(extras)}</b></span>
        {extras > 0.5 && <span><b className="text-[#FEE202] text-[16px]">{mult.toFixed(1)}x</b> the plan price</span>}
      </div>

      {/* Stacked Bar */}
      <div className="flex h-4 rounded-lg overflow-hidden bg-[#0E2140] border border-[#24406B] shadow-inner" role="img" aria-label="Share of the monthly cost by category">
        {cats.map(x => (
          <i key={x.n} style={{ width: `${c.total > 0 ? (x.v / c.total * 100) : 0}%`, background: x.col }} className="block h-full min-w-0 transition-[width] duration-500 ease-out" title={x.n} />
        ))}
      </div>

      {/* Breakdown List */}
      <ul className="flex flex-col list-none m-0 p-0 tabular-nums">
        {cats.map(x => (
          <li key={x.n} className="grid grid-cols-[12px_1fr_auto_auto] gap-3 items-center py-2.5 border-b border-[#24406B] last:border-b-0 text-[15px] text-white hover:bg-white/[0.02] transition-colors rounded px-1 -mx-1">
            <span className="w-3 h-3 rounded-sm shadow-sm" style={{ background: x.col }} />
            <span className="font-medium">{x.n}</span>
            <span className="text-[13px] text-[#9FB3CC] text-right min-w-[3.2ch]">{c.total > 0 ? Math.round(x.v / c.total * 100) : 0}%</span>
            <span className="font-bold text-right">{money(x.v)}</span>
          </li>
        ))}
      </ul>

      {/* Rebill Note */}
      {rebill && (
        <div className="rounded-xl bg-[#1E99E7]/10 border border-[#1E99E7]/30 p-4 text-[15px] text-[#C9D6E8] leading-relaxed">
          If you rebill usage at <b className="text-[#7CCBF7]">{S.markup}%</b>: you charge clients <b className="text-white">{money(rebill.billed)}</b>,
          and keep <b className="text-[#4ADE80]">{money(rebill.keep)}</b> a month after wallet costs.
        </div>
      )}

      {/* Alerts / Notes */}
      {notes.length > 0 && (
        <div className="flex flex-col gap-2.5">
          {notes.slice(0, 5).map((n, i) => (
            <div key={i} className={
              n.kind === "warn"
                ? "rounded-xl p-3.5 text-[14px] leading-snug bg-[#3A2F0B] text-[#FFD866] border border-[#7A6213] shadow-sm flex gap-2 items-start"
                : "rounded-xl p-3.5 text-[14px] leading-snug bg-[#183560] text-[#C9D6E8] border border-[#24406B] shadow-sm flex gap-2 items-start"
            }>
              <span className="mt-0.5 opacity-70">{n.kind === "warn" ? "⚠️" : "💡"}</span>
              <span>{n.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="flex flex-col gap-3 border-t border-[#24406B] pt-6 mt-1">
        <p className="m-0 text-[15px] text-[#C9D6E8] leading-snug text-center">
          Want a second pair of eyes on your numbers? We review GHL setups and bills.
        </p>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener"
          className="group relative flex items-center justify-center gap-2 rounded-xl bg-[#FEE202] text-[#0B1B33] font-bold text-[16px] px-4 py-3.5 hover:bg-[#FFE94D] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(254,226,2,0.5)] active:translate-y-0 active:scale-[0.98] transition-all duration-200"
        >
          Book a free 30-minute review
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
        <span className="text-[14px] text-[#9FB3CC] text-center select-all mt-1">aryan@ghlscaleup.com</span>
      </div>
    </div>
  );
}