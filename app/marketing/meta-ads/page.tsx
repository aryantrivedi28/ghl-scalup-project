// app/services/marketing/meta-ads/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'Meta Ads Management | GHL Scale Up',
  description: 'Expert Meta Ads management for Facebook and Instagram. Lead generation, retargeting, creative testing, and audience building. Get a free Meta Ads audit.',
  keywords: 'Facebook Ads management, Instagram Ads, Meta advertising, lead generation ads, retargeting campaigns'
};

export default function MetaAdsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Marketing Services', href: '/services/marketing' }, { label: 'Meta Ads Management' }]} />

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
                Meta Ads for<br />
                <span className="text-[#F8D000]">Lead Generation</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We deliver <strong className="text-white/90 font-medium">Meta Ads management for Facebook and Instagram</strong> that generate qualified leads and sales. From creative testing to audience building to conversion optimization — we handle everything.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Meta Ads Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Meta Ads Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">50+</div>
                  <div className="text-[0.78rem] text-white/50">Active clients</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">6</div>
                  <div className="text-[0.78rem] text-white/50">Countries served</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Projects delivered</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">5+</div>
                  <div className="text-[0.78rem] text-white/50">Years experience</div>
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
              Complete Meta Ads Management<br />
              <span className="text-[#0E9BF0]">for Lead Generation</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              We manage every aspect of your Facebook and Instagram advertising — from audience building to creative testing to conversion optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🎯', color: 'blue', title: 'Audience Strategy', description: 'Custom audiences, lookalike audiences, and interest targeting. We find your ideal customers and build audiences that convert.' },
              { icon: '🎨', color: 'green', title: 'Creative Development', description: 'Eye-catching ad creatives, video ads, carousels, and collection ads. We test multiple creative variations to find what resonates.' },
              { icon: '📊', color: 'yellow', title: 'Campaign Structure', description: 'Strategic campaign structure with clear objectives — awareness, consideration, conversion. Organized for optimal performance and scaling.' },
              { icon: '🔗', color: 'blue', title: 'Conversion Tracking', description: 'Facebook Pixel setup, Conversions API, and offline event tracking. Every conversion tracked and attributed correctly.' },
              { icon: '🔄', color: 'green', title: 'A/B Testing', description: 'Continuous testing of audiences, creatives, ad copy, and placements. We scale what works and pause what doesn\'t.' },
              { icon: '📈', color: 'yellow', title: 'Retargeting Campaigns', description: 'Strategic retargeting to capture visitors who didn not convert. Custom audiences based on engagement, page visits, and abandoned carts.' },
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
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                Is Meta Ads Right for<br />
                <span className="text-[#0E9BF0]">Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Facebook and Instagram reach 3+ billion active users — 2/3 of the global population. With precise targeting based on interests, behaviors, and demographics, Meta Ads can put your business in front of exactly the right people.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Meta Ads make sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A B2C business targeting consumers (ecommerce, local services, retail)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A lead generation business (real estate, insurance, education)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A brand looking to build awareness and engagement</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> An ecommerce business with visual products</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Currently running Meta Ads with inconsistent results</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Poor Meta Ads Management</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Generic audiences waste budget on people who will never buy. Poor creative gets ignored. Bad targeting misses your ideal customers. No tracking means you can't optimize.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our Meta Ads management builds custom audiences, tests creative systematically, and optimizes based on conversion data — delivering leads at a predictable cost.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">3B+</div>
                  <div className="text-[0.78rem] text-white/50">Monthly active users</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">80%</div>
                  <div className="text-[0.78rem] text-white/50">Lower CPL with proper targeting</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">10x</div>
                  <div className="text-[0.78rem] text-white/50">ROAS potential with optimized campaigns</div>
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
              Our Meta Ads Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Generate<br />
              <span className="text-[#0E9BF0]">Qualified Leads</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A proven process that turns Facebook and Instagram users into paying customers.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Audience & Strategy', description: 'We analyze your ideal customer, identify targeting opportunities, and build custom and lookalike audiences. We create a campaign structure designed for your goals.' },
              { title: 'Creative Development', description: 'We develop compelling ad creative — images, videos, carousels, and copy. Multiple variations for A/B testing to find what resonates with your audience.' },
              { title: 'Campaign Launch', description: 'We launch campaigns with strategic bidding, placements, and optimization settings. Facebook Pixel and Conversions API installed for accurate tracking.' },
              { title: 'Testing & Optimization', description: 'We monitor performance daily, test creative variations, adjust targeting, and optimize budgets. We scale winning ad sets and pause underperformers.' },
              { title: 'Scaling & Reporting', description: 'We scale successful campaigns, expand into new audiences, and provide monthly reports showing leads, cost per lead, and conversion data.' },
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
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Generate<br />
            <span className="text-[#F8D000]">High-Quality Leads?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free Meta Ads audit. We'll analyze your current campaigns, identify opportunities, and show you how to scale your lead generation profitably.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Meta Ads Audit →
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Common Questions About<br />
              <span className="text-[#0E9BF0]">Meta Ads Management</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How long does it take to see results from Meta Ads?', a: 'Initial results within 2-4 weeks. It takes time for Facebook\'s algorithm to learn and optimize. We typically see optimal performance after 30-60 days of consistent testing and optimization.' },
              { q: 'How much budget do I need to start?', a: 'We recommend starting with $1,000-2,500 per month for testing. This allows us to test multiple audiences and creative variations effectively. Smaller budgets can work but take longer to optimize.' },
              { q: 'What types of businesses perform best on Meta Ads?', a: 'B2C businesses, ecommerce, local services, lead generation (real estate, insurance, education), and brands with visual products. B2B can work with proper targeting.' },
              { q: 'Do you manage both Facebook and Instagram?', a: 'Yes. We manage campaigns across both platforms, optimizing placements based on where your audience engages most.' },
              { q: 'How do you track conversions?', a: 'Facebook Pixel + Conversions API for accurate tracking despite browser changes. We also connect to your GHL CRM for end-to-end lead tracking.' },
              { q: 'What creative formats do you use?', a: 'Single images, video ads, carousels, collection ads, and lead forms. We test multiple formats to find what performs best for your audience.' },
              { q: 'How often do you optimize campaigns?', a: 'We monitor daily and optimize weekly — adjusting budgets, pausing underperformers, scaling winners, and testing new creative. Major optimizations every 2-3 weeks.' },
              { q: 'How much does Meta Ads management cost?', a: 'Management fees are typically 10-15% of ad spend, with a minimum monthly fee. We provide a custom quote based on your budget and goals during consultation.' },
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Maximize Your Meta Ads Results<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Lead Generation Systems', description: 'Capture and convert Meta Ads traffic with optimized funnels, landing pages, and lead magnets.', href: '/services/marketing/lead-generation' },
              { title: 'Content Creation & Copywriting', description: 'High-converting ad copy and creative that stops the scroll and drives clicks.', href: '/services/marketing/content-copywriting' },
              { title: 'Video Editing & Production', description: 'Professional video ads optimized for Facebook and Instagram feeds and stories.', href: '/services/marketing/video-editing' },
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
        title="Stop Wasting Budget on Bad Audiences.<br /><span class='hl-yellow'>Start Generating Quality Leads.</span>"
        description="Meta Ads can generate leads at scale — if done right. Book your free audit and discover how to build campaigns that actually convert."
        primaryText="Book Your Free Meta Ads Audit →"
        primaryHref="/contact"
      />
    </>
  );
}