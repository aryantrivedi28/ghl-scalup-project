// app/process/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'How We Work — Our GoHighLevel Delivery Process | GHL Scale Up',
  description: '5-step delivery process: Understand, Design, Build, Test, Train. Fixed pricing, weekly updates, no surprises.'
};

export default function HowWeWorkPage() {
  const processSteps = [
    {
      number: '01',
      title: 'Understand Needs',
      description: 'Free 30-minute discovery call. We dig into your business model, tools, pain points, and goals.'
    },
    {
      number: '02',
      title: 'Design Systems',
      description: 'Pipeline stages, automation logic, funnel structure, integration mapping — all planned before building.'
    },
    {
      number: '03',
      title: 'Build & Integrate',
      description: 'CRM, workflows, pages, calendars, AI agents — all implemented inside GHL with third-party connections.'
    },
    {
      number: '04',
      title: 'Test & Refine',
      description: 'Live testing with real data. Every automation path triggered, every form submitted, every edge case checked.'
    },
    {
      number: '05',
      title: 'Train & Scale',
      description: 'Live training, SOPs, recorded walkthroughs. Monthly support plans available for ongoing optimization.'
    }
  ];

  const standards = [
    {
      icon: '💰',
      iconBg: 'yellow',
      title: 'Fixed-Price Quotes',
      description: 'Know the cost upfront. No hourly billing.'
    },
    {
      icon: '📋',
      iconBg: 'blue',
      title: 'Scope Document',
      description: 'Every deliverable and timeline listed before work starts.'
    },
    {
      icon: '📊',
      iconBg: 'green',
      title: 'Weekly Updates',
      description: 'You always know where the project stands.'
    },
    {
      icon: '🧪',
      iconBg: 'yellow',
      title: 'QA & Testing',
      description: 'Every build tested with live data before launch.'
    },
    {
      icon: '📘',
      iconBg: 'blue',
      title: 'Training & SOPs',
      description: 'Live training, recordings, and written docs.'
    },
    {
      icon: '🤝',
      iconBg: 'green',
      title: 'Post-Launch Support',
      description: 'Bug fixes covered. Monthly retainers available.'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'How We Work' }]} />
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Our Process
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                How We <span className="text-[#F8D000]">Deliver</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                Every project follows the same 5-step framework. <strong className="text-white/90 font-medium">Transparent timelines, fixed pricing, clear scope</strong> before any code.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Start a Project →
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Delivery Standards</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Fixed-price — no hourly surprises</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">1-3w</div>
                  <div className="text-[0.78rem] text-white/50">Typical turnaround</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">Weekly</div>
                  <div className="text-[0.78rem] text-white/50">Progress updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[640px] mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              5-Step Framework
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              From First Call to <span className="text-[#0E9BF0]">Working System</span>
            </h2>
          </div>
          
          <div className="flex flex-col">
            {processSteps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[#E8EDF4] last:border-b-0">
                <div className="w-16 h-16 rounded-full bg-[#1C2E4A] flex items-center justify-center text-[0.9rem] font-extrabold text-[#F8D000] flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Standards */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Standards
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Every Project <span className="text-[#0E9BF0]">Includes</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl p-8 text-center hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-[1.4rem] mx-auto mb-4 ${
                  standard.iconBg === 'yellow' ? 'bg-[rgba(248,208,0,0.12)]' :
                  standard.iconBg === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' : 'bg-[rgba(37,201,125,0.1)]'
                }`}>
                  {standard.icon}
                </div>
                <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">{standard.title}</h3>
                <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Typical Timeline
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              What to Expect <span className="text-[#0E9BF0]">Week by Week</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-[#F4F7FA] rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F8D000] text-[#0B1421] flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
              <h3 className="text-[0.85rem] font-bold text-[#1C2E4A] mb-1">Discovery</h3>
              <p className="text-[0.72rem] text-[#4A5568]">Call + Scope Document</p>
            </div>
            <div className="bg-[#F4F7FA] rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F8D000] text-[#0B1421] flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
              <h3 className="text-[0.85rem] font-bold text-[#1C2E4A] mb-1">Design & Plan</h3>
              <p className="text-[0.72rem] text-[#4A5568]">Architecture & Mapping</p>
            </div>
            <div className="bg-[#F4F7FA] rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F8D000] text-[#0B1421] flex items-center justify-center text-xl font-bold mx-auto mb-3">3-4</div>
              <h3 className="text-[0.85rem] font-bold text-[#1C2E4A] mb-1">Build & Test</h3>
              <p className="text-[0.72rem] text-[#4A5568]">Implementation + QA</p>
            </div>
            <div className="bg-[#F4F7FA] rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F8D000] text-[#0B1421] flex items-center justify-center text-xl font-bold mx-auto mb-3">5</div>
              <h3 className="text-[0.85rem] font-bold text-[#1C2E4A] mb-1">Launch & Train</h3>
              <p className="text-[0.72rem] text-[#4A5568]">Go-live + Handover</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[0.82rem] text-[#8A9BB0]">
              *Timelines vary based on project complexity. We'll give you a clear estimate during discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Process */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Why It Works
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                No Scope Creep.<br />
                <span className="text-[#0E9BF0]">No Surprises.</span>
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#25C97D] font-bold text-lg">✓</span>
                  <span className="text-[0.88rem] text-[#4A5568]">Everything documented before we build</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#25C97D] font-bold text-lg">✓</span>
                  <span className="text-[0.88rem] text-[#4A5568]">Fixed price — you know the cost upfront</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#25C97D] font-bold text-lg">✓</span>
                  <span className="text-[0.88rem] text-[#4A5568]">Weekly updates, not vague timelines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#25C97D] font-bold text-lg">✓</span>
                  <span className="text-[0.88rem] text-[#4A5568]">Tested with real data before handover</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#25C97D] font-bold text-lg">✓</span>
                  <span className="text-[0.88rem] text-[#4A5568]">Your team trained — no black box</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-[2rem] font-extrabold text-[#F8D000]">200+</div>
                <div className="text-[0.78rem] text-white/50">Projects Delivered</div>
              </div>
              <div className="text-center mb-6">
                <div className="text-[2rem] font-extrabold text-[#F8D000]">100%</div>
                <div className="text-[0.78rem] text-white/50">Fixed-Price Projects</div>
              </div>
              <div className="text-center">
                <div className="text-[2rem] font-extrabold text-[#F8D000]">0</div>
                <div className="text-[0.78rem] text-white/50">Surprises on Final Invoice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand 
        title='Ready to Start? <span class="hl-yellow">Book Your Free Call.</span>'
        description="We understand your needs, design a plan, and give you a fixed-price quote."
        primaryText="Book Your Free Strategy Call →"
        primaryHref="/contact"
      />
    </>
  );
}