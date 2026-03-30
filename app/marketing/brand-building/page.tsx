// app/services/marketing/brand-building/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'Brand Building & Strategy Services | GHL Scale Up',
  description: 'Strategic brand building services including brand strategy, visual identity, messaging frameworks, and positioning. Build a brand that resonates.',
  keywords: 'brand building, brand strategy, brand identity, brand positioning, messaging framework'
};

export default function BrandBuildingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Marketing Services', href: '/services/marketing' }, { label: 'Brand Building & Strategy' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Marketing Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                Brand Building &<br />
                <span className="text-[#F8D000]">Strategy</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We deliver <strong className="text-white/90 font-medium">strategic brand building services</strong> — brand strategy, visual identity, messaging frameworks, and positioning. Build a brand that resonates with your audience and stands out from competitors.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Brand Consultation →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Brand Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">50+</div>
                  <div className="text-[0.78rem] text-white/50">Brand identities developed</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">3x</div>
                  <div className="text-[0.78rem] text-white/50">Higher brand recall with strategy</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">40%</div>
                  <div className="text-[0.78rem] text-white/50">More trust with strong branding</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">10+</div>
                  <div className="text-[0.78rem] text-white/50">Industries served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              What's Included
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Complete Brand Building<br />
              <span className="text-[#0E9BF0]">That Sets You Apart</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Strategic brand development that creates a cohesive identity, compelling story, and lasting connection with your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🎯', color: 'blue', title: 'Brand Strategy', description: 'Clear brand purpose, vision, mission, values, and positioning. A strategic foundation that guides all your marketing decisions.' },
              { icon: '👥', color: 'green', title: 'Audience Personas', description: 'Detailed profiles of your ideal customers. Understand their goals, pain points, motivations, and how your brand fits into their lives.' },
              { icon: '💬', color: 'yellow', title: 'Messaging Framework', description: 'Core messaging hierarchy, value propositions, taglines, and brand voice guidelines. Consistent, compelling communication across all channels.' },
              { icon: '🎨', color: 'blue', title: 'Visual Identity', description: 'Logo design, color palette, typography, imagery style, and brand guidelines. A cohesive visual language that reflects your brand personality.' },
              { icon: '📖', color: 'green', title: 'Brand Story', description: 'Your origin story, why you exist, and the transformation you create. A narrative that connects emotionally with your audience.' },
              { icon: '📊', color: 'yellow', title: 'Competitive Positioning', description: 'Analysis of your competitive landscape and clear positioning that differentiates you. Know why customers should choose you.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[1.2rem] mb-3.5 ${
                  item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' : 
                  item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)]' : 'bg-[rgba(248,208,0,0.12)]'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Who Is This For
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                Is Brand Building & Strategy<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Your brand is more than your logo — it's the emotional connection customers have with your business. A strong brand builds trust, commands premium pricing, and creates loyal customers who advocate for you.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Brand strategy makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A new business launching and needing brand foundation</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> An established business ready for a rebrand</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A business with inconsistent messaging across channels</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Looking to differentiate from competitors</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Wanting to command premium pricing and build loyalty</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Value of a Strong Brand</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Consistent branding increases revenue by 23%. Strong brands command 20% higher prices. 77% of consumers make purchases based on brand name alone. Your brand is your most valuable asset.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our brand strategy services build a foundation that guides all your marketing, creates emotional connection, and drives business growth.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">23%</div>
                  <div className="text-[0.78rem] text-white/50">Revenue increase with consistent branding</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">20%</div>
                  <div className="text-[0.78rem] text-white/50">Higher prices with strong brand</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">77%</div>
                  <div className="text-[0.78rem] text-white/50">Consumers buy based on brand name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Our Brand Building Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Build<br />
              <span className="text-[#0E9BF0]">Your Brand Foundation</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A strategic process that creates a brand with purpose, personality, and staying power.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Discovery & Research', description: 'We dive deep into your business, audience, competitors, and market. Interviews with stakeholders, customer research, and competitive analysis.' },
              { title: 'Strategy Development', description: 'We define your brand purpose, vision, mission, values, positioning, and audience personas. The strategic foundation for all brand decisions.' },
              { title: 'Messaging & Story', description: 'We craft your core messaging framework, value propositions, taglines, and brand story. Words that resonate and differentiate.' },
              { title: 'Visual Identity', description: 'We design your logo, color palette, typography, and visual style. A cohesive look that reflects your brand personality.' },
              { title: 'Brand Guidelines & Launch', description: 'We deliver comprehensive brand guidelines and launch assets. Your team has everything needed to bring your brand to life consistently.' },
            ].map((step, index) => (
              <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[#E8EDF4] last:border-b-0">
                <div className="w-16 h-16 rounded-full bg-[#1C2E4A] flex items-center justify-center text-[0.9rem] font-extrabold text-[#F8D000] flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
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

      {/* CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Build a Brand<br />
            <span className="text-[#F8D000]">That Stands Out?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free brand consultation. We'll discuss your current brand, your goals, and how strategic brand building can transform your business.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Brand Consultation →
            </Link>
            <Link href="mailto:aryan@finzie.co" className="bg-transparent text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              Or Email Us Directly
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Common Questions About<br />
              <span className="text-[#0E9BF0]">Brand Building & Strategy</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'What is brand strategy?', a: 'Brand strategy is the foundation of your brand — your purpose, positioning, audience, messaging, and visual identity. It guides all your marketing decisions and ensures consistency across every touchpoint.' },
              { q: 'Do I need a brand strategy before marketing?', a: 'Yes. Without a clear brand strategy, your marketing will be inconsistent and less effective. Strategy ensures every marketing dollar works harder and builds a cohesive brand.' },
              { q: 'What is the difference between brand strategy and visual identity?', a: 'Brand strategy is the foundation — who you are, what you stand for, who you serve. Visual identity is the expression of that strategy — your logo, colors, typography, and design.' },
              { q: 'How long does brand strategy take?', a: 'Brand discovery and strategy typically takes 2-3 weeks. Full brand development including visual identity takes 4-6 weeks. We provide timeline estimates based on your scope.' },
              { q: 'What deliverables do I get?', a: 'You receive a comprehensive brand guide including strategy document, audience personas, messaging framework, visual identity, and brand guidelines. Everything your team needs to execute consistently.' },
              { q: 'Do you provide logo design?', a: 'Yes. Full brand development includes logo design, color palette, typography, and all visual identity elements. Logo only projects also available.' },
              { q: 'How much does brand strategy cost?', a: 'Brand strategy packages start at $3,500. Full brand development including visual identity starts at $5,000. Custom quotes based on scope and complexity.' },
              { q: 'What if I already have a brand?', a: 'We offer brand audits and refresh services for existing brands. We assess your current brand, identify gaps, and recommend updates to strengthen your market position.' },
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#E8EDF4]">
                <details className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors">
                    {faq.q}
                    <span className="text-[0.7rem] text-[#8A9BB0] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed pt-2 pb-3">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Related Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Bring Your Brand to Life<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Graphic Design', description: 'Visual assets that express your brand identity consistently across all channels.', href: '/services/marketing/graphic-design' },
              { title: 'Content Creation & Copywriting', description: 'Messaging that communicates your brand voice and value proposition.', href: '/services/marketing/content-copywriting' },
              { title: 'Social Media Management', description: 'Build your brand presence and engage your audience across platforms.', href: '/services/marketing/social-media-management' },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1.5">{service.title}</h3>
                <p className="text-[0.78rem] font-light text-[#4A5568] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand 
        title="Stop Being Invisible.<br /><span class='hl-yellow'>Start Building a Brand People Love.</span>"
        description="Your brand is your most valuable asset. Book your free consultation and discover how strategic brand building can transform your business."
        primaryText="Book Your Free Brand Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}