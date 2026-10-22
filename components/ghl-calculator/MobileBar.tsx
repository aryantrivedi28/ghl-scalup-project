"use client";

interface Props { total: number; onClick: () => void; }

export default function MobileBar({ total, onClick }: Props) {
  return (
    <div className="lg:hidden fixed left-0 right-0 bottom-0 z-20 flex items-center justify-between gap-3 bg-[color:var(--band)] text-[color:var(--band-fg)] px-4 py-2.5 pb-[calc(10px+env(safe-area-inset-bottom,0px))] border-t border-[color:var(--line)]">
      <div>
        <span className="block text-xs text-[color:var(--band-muted)] leading-none mb-0.5">Estimated per month</span>
        <span className="font-display font-bold text-2xl text-[color:var(--accent)] tabular-nums">
          ${Math.round(total).toLocaleString("en-US")}
        </span>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="rounded-xl bg-[color:var(--accent)] text-[color:var(--on-accent)] font-bold px-3.5 py-2.5"
      >
        See breakdown
      </button>
    </div>
  );
}