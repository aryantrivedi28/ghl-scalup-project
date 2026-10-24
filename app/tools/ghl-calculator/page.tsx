import type { Metadata } from "next";
import Calculator from "@/components/ghl-calculator/Calculator";

export const metadata: Metadata = {
  title: "GHL Cost Calculator — estimate your real GoHighLevel bill",
  description:
    "Enter what you plan to send, call and automate. See the real monthly GHL bill including usage, AI and add-ons.",
  alternates: { canonical: "/tools/ghl-calculator" },
};

export default function GhlCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#0A1830] text-white selection:bg-[#FEE202] selection:text-[#0B1B33]">
      {/* Reduced padding on mobile from px-4 to px-4 py-8, keeping desktop spacious */}
      <div className="w-full max-w-[1120px] mx-auto px-4 py-8 lg:py-16">
        <div className="mb-8 lg:mb-12 text-center lg:text-left">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 lg:mb-4">
            GoHighLevel cost calculator
          </h1>
          <p className="max-w-2xl mx-auto lg:mx-0 text-[15px] md:text-[17px] lg:text-[18px] text-[#9FB3CC] leading-relaxed">
            Enter what you plan to send, call and automate. The calculator adds the plan, usage, AI and add-ons
            so you see the real monthly bill before you buy.
          </p>
        </div>

        <Calculator />

        <p className="mt-12 lg:mt-16 max-w-3xl mx-auto text-[12.5px] lg:text-[13.5px] text-[#5A6B82] leading-relaxed text-center border-t border-[#24406B] pt-6 lg:pt-8">
          Estimates use published GoHighLevel usage rates (GHL Scale Up pricing guide, May 2026) and averages
          from a real client account. This is not official GoHighLevel pricing. Rates differ by account,
          carrier and month, so confirm them in your own Pricing tab and edit them under Advanced rates.
        </p>
      </div>
    </main>
  );
}